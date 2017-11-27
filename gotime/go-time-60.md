**Erik St. Martin:** Welcome back everybody to another episode of GoTime. Today's episode is number 60, and your hosts for today are myself, Erik St. Martin, and Brian Ketelsen...

**Brian Ketelsen:** Hello!

**Erik St. Martin:** And Carlisia Pinto...

**Carlisia Pinto:** Hey there!

**Erik St. Martin:** And our special guest for today is probably best known for his Go Swagger implementation. Please welcome Ivan Porto Carrero!

**Ivan Porto Carrero:** Hi!

**Carlisia Pinto:** Hi!

**Erik St. Martin:** Ivan, do you wanna give maybe kind of a brief history about yourself, kind of who you are, what you do, just for the listeners to kind of familiarize themselves with you?

**Ivan Porto Carrero:** I'm an engineer, I've been working in the cloud-related field for the past 15 years. I currently work for VMware, where I'm the tech lead on a product called pks, which is a hosted version of Kubernetes on VMware infrastructure.

In the past I've worked on machine learning systems, and I've programmed in several different languages, but currently I use Go as my main tool for programming.

**Erik St. Martin:** Somebody had mentioned that you had written kind of like a Sinatra implementation in Scala, and that would mean that probably you were familiar with Ruby as well.

**Ivan Porto Carrero:** Yeah, a long time ago I was on .NET, I did C\#; that's how I got started. Then I got dissatisfied with the lack of open source within Microsoft, but they did IronRuby, and that's how I got into Ruby more or less, by contributing and talking about Microsoft's Ruby on .NET system. I helped work on IronRuby at the time.

**Brian Ketelsen:** Did you work with Jeff Lang?

**Ivan Porto Carrero:** A little bit. It was more with the people -- I forget the names; I'm getting old, and it's been a long time. I worked with \[unintelligible 00:03:06.25\] Jeff Lang was involved in the early days of this. This was really \[unintelligible 00:03:10.24\] and this whole IronPython, or the dynamic language runtime for .NET, basically. \[unintelligible 00:03:22.19\] was the team lead at the time, and then there was Jim Deville involved, and a few more people.

I worked with IronRuby by writing a book \[unintelligible 00:03:34.06\] which never got published, because Microsoft canceled the project before the book was finished, or at the same time that the book was finished, really.

\[00:03:50.19\] So then from there I also started a startup at that point, where I was gonna do real-time social media filtering. You can look at today -- it would probably be the most similar to IFTTT, because you could set up some query parameters, and if a Twitter feed or a Facebook feed or whatever social media feed would raise an event that matches those created parameters, it would trigger yet another webhook or some other event that you could then react to.

To do so, I had to analyze the Twitter Firehose and so on, and Ruby didn't get me far enough, so I started looking for something else and I found Scala. Scala at that time only had Lift as a web framework. People said it was very interesting, but from my point of view it was a web framework that conflated all kinds of responsibilities, and so I started looking for something that looked like Sinatra, because Sinatra was as concise as I could think of for developing web apps -- or API's.

There was a proof of concept at the time which had just been renamed to Scalatra, so I started contributing, and after a while I was one of the main contributors on that open source project. It was fairly successful, but Scala itself has problems. The language is good, but the community is very divided. If you work with it on a team it's not very conducive, in my opinion, to have people with very different backgrounds come together and get up to speed very quickly, so I started looking at Go to find out -- or I wanted to know if Go would actually deliver on that promise that you can have a team, you can get your team to expand fairly quickly, and people shouldn't have to have weeks of ramp-up time just to learn how to leverage the language to their advantage. So far, it's been \[unintelligible 00:06:02.01\] so that got me here.

In the meantime, through Scalatra I got into Swagger, because we have to document the API's. The company that invented Swagger hired me, so that's how I got deeper and deeper into that entire Swagger and OpenAPI story. When I switched to Go there was nothing there, so figured people in Go also write lots of API's, so they should have a way to document them and use them, so that other people can generate clients for it in whatever language... So that's how I got to write in Go Swagger.

**Erik St. Martin:** Let's back up just a second and let's give a little bit of a rundown on what Swagger is, for anybody who may not have used it or are familiar with it.

**Ivan Porto Carrero:** Swagger is currently known as OpenAPI, I guess, but it started its name as Swagger. The reason it was named Swagger is because the only alternative he had was something that is the acronym of WADL... So in the office, people were like "Why WADL if you can Swagger?" and that's how the name came to be. \[laughter\]

Everybody who writes an API ends up having the same problem - now you have a bunch of clients who are talking to your API; you still wanna be able to evolve your API over time, you bring new people on board, they don't know how to use your API, they don't know what the inputs are, what the outputs are, especially if you're writing a dynamic language kind of API... So to formalize those expectations between the boundaries that existed within our teams, we came up - and many people like us - have come up with a format to describe what goes into the API.

\[00:08:03.22\] Essentially, it's just a schema for your input and output parameters that captures what some people look at as a contract for your API. Once you have a machine-readable version of something like that, you can take it in many different forms. The very first thing that we then did was make a UI for it, because now you have this API; if you run the UI, you point it to this description which is hosted with your API. You can show a nice documentation, especially if you add some markdown or some richer form of documentation, and that documentation lives with your code. That's important, so that for every version of your code you actually have a complete form of documentation for the API that that application exposes.

From there, obviously, machine-readable makes it also that it's easy to generate clients for your API, because you now know exactly what goes in and out of the API, so you can generate a client for it. If you then take that a little bit further and you make the API specification easy to define, from there you could also look at it like "Oh, why don't I do contract-first, and I start generating a server?" Here, Go is particularly strong, because it allows for these broken-up definitions in many files, and so on. So I took this from what we've tried with Scala, take an API specification and just generate a service for it that implements the entire specification, so you don't have to really think about all of the ceremony, but just start writing the things you care about, the things that happen after all of the common parts.

So that's a rundown of what Swagger is. Of course, there are marketplaces now where you can look at all of the API's other companies expose, and so the bigger dream here is if every API exposes a five-year spec, you never have to download a client SDK anymore; you can just always generate one.

**Erik St. Martin:** Yeah, one of my favorite things too is like whenever you use a new API for something, you're always kind of poking around at it and trying things out... And the fact that you can just go into the Swagger UI and kind of play with the example requests and submit them and see how they return and things like that is extremely valuable. It's wasteful to spend a lot of time building these little example things just to poke at the API...

**Ivan Porto Carrero:** Yeah.

**Carlisia Pinto:** Ivan, describe in a bit more detail how do you go from the Go code to having that beautiful HTML API documentation, and what do you need? Do you need to boot up a server to serve that HTML? How does it work?

**Ivan Porto Carrero:** What you need is you download the binary, a Swagger binary, and you add some vocabulary in your document comment. Because there are two main use cases here - generating a specification from an existing codebase, which I suspect, but I really have no way of tracking that -- I suspect most people use something like Gin or whatever, and they just wanna get a Swagger JSON file come out.

In that case, what I've tried to do is define a number of documentation comments that also look good when you just do GoDoc, to describe what is in your API. So you document your routes with some of the expectations that are required for Swagger, you document your models, and you just write doc comments, basically. Then you run 'swagger generate spec' and you point it to your main package, and it will reflect over your application and generate the Swagger JSON file.

\[00:12:17.05\] From there, you take the Swagger binary and you do Swagger surf, and point it to the spec document that you just created, and it will serve up an HTML UI for you.

**Carlisia Pinto:** So if I want to have a system where I can share this documentation with my entire team, should I have them download \[unintelligible 00:12:37.24\] Should they download the binary and run -- for example, I can have the Swagger documentation file on GitHub somewhere, maybe together with my project; they download that, they run it themselves? Or should I put up a server to run, so we can all access online?

**Ivan Porto Carrero:** You don't have to download a server necessarily, as long as you publish the Swagger JSON somewhere.

**Carlisia Pinto:** Yeah, not a server, the binary... The Swagger binary, the tool.

**Ivan Porto Carrero:** Yeah, once you have a Swagger JSON document, you don't really need the binary anymore, because there is...

**Carlisia Pinto:** Oh, because it's generated already.

**Ivan Porto Carrero:** Yeah, you have the Swagger JSON, so if you push the Swagger JSON onto like a gist, or something, then people could use the raw URL and use it with \[unintelligible 00:13:32.10\] to leverage the UI that is published there, and just paste that in the address box there, and then it will serve you the UI there.

**Carlisia Pinto:** If I have it on a GitHub repo, would I get the nice interaction?

**Ivan Porto Carrero:** No, you need to have your API running. The best way to do is -- what was originally specified (or part of the specification was) it would always be at the root/swaggerjson of your API. So if you run your server, you have to make sure that it serves the Swagger spec somewhere. Get a richer API so that the host and the base path and so on are all filled in correctly, so that any client who can look at it knows how to use your API because it has the URL where he can find it, and at the same time it has all of the documentation or all of the expectations filled out.

**Carlisia Pinto:** Gotcha. Thank you.

**Ivan Porto Carrero:** If you use a Swagger binary to generate your server from a Swagger \[unintelligible 00:14:43.19\] then you get all of that for free, because it's part of the server that \[unintelligible 00:14:50.11\]

**Brian Ketelsen:** There are several Go routers or multiplexers that have varying forms of support for the Swagger spec. Some of them, like Go RESTful, will automatically generate the Swagger bits. And some of them require you to do things like doc comments to generate Swagger. Then in the other direction there's Goa, which uses its own DSL and then generates Swagger from that... So there's lots of good support in Go now for Swagger, but Go Swagger was definitely the original, and certainly the first one I ever used. I definitely appreciate that it existed. I've been using it for years.

**Ivan Porto Carrero:** Cool.

**Erik St. Martin:** Yeah, and it actually exists in more projects than people probably realize. I'm fairly certain both Docker and Kubernetes have Swagger support.

**Ivan Porto Carrero:** \[00:15:52.09\] Yeah. Actually, the Docker API, the last time I looked - but things might have changed again - uses the generated version of it, so they use it to generate their models. Then Kubernetes uses it through Go RESTful, but then custom resources in Kubernetes \[unintelligible 00:16:11.00\] they use the toolkit that I've built for validation of those resources, for example, because within the toolkit lies buried also a fully-typed implementation of JSON Schema, and the JSON Schema validation, and so on. So as part of the Swagger implementation I had to develop this.

There were varying libraries to do JSON Schema within Go, but most of them had some problems and I tried to submit some PRs, they never got accepted, so I decided to fork and just make it work the way I wanted it to work.

So yeah, it's in many places. Last week there was a project - \[unintelligible 00:17:00.03\] or something; I can post it in the Slack channel - that generates a whole series of tests for your API. So it will then try to fast-test your API when you generate it, based on the Swagger spec.

**Brian Ketelsen:** Oh, that's nice.

**Ivan Porto Carrero:** Yeah, I agree.

**Brian Ketelsen:** So now you're at VMware, working on the pks team?

**Ivan Porto Carrero:** Yeah.

**Brian Ketelsen:** I think it's kind of amusing that half of the tech industry is employed now in some way, shape or form around Kubernetes.

**Ivan Porto Carrero:** Yeah. Well, when I joined VMware, I started making noise about Kubernetes, and after several false starts, we landed on doing this pks thing. Kubernetes has been this interesting evolution. It's like "Let's do open stack, but not open stack, let's make it a lot better, make it all-out containers." I do think it solves a problem that most people have at the moment, so it's been a very interesting process to see that project grow.

**Erik St. Martin:** Yeah, it's really exploded. I think that it was a really awesome initiative to begin with. A common conversation I have with people with adoption of Kubernetes is just maintenance of the infrastructure in itself is work. People will be quick to implement it, but then they find they're struggling with having to maintain Kubernetes and all the little failure scenarios and things like that and not their business logic, and then they end up with a team that just supports Kubernetes. That's why all these amazing product offerings for managed Kubernetes, pks and Microsft's AKS and GKE -- wait, what's...?

**Brian Ketelsen:** GCE... GKE!

**Ivan Porto Carrero:** GKE, yeah!

**Erik St. Martin:** Yeah. That's kind of like the perfect world, right? You get all the benefits of Kubernetes, you only have to focus on developing apps that are kind of cloud-native and run on it, and you don't have to worry about the infrastructure.

**Ivan Porto Carrero:** Yeah. At VMware it's a fairly interesting mix here, because by definition people are worrying about the infrastructure, because we have this vSphere product... So the people we go to typically know how to deal with hardware and all of the failure scenarios that come from there.

It's this interesting thing - Kubernetes allows you to package your app and deploy the containers and do all of that service discovery, all \[unintelligible 00:19:54.27\] actually required to run these larger infrastructures, but I think most people are surprised by how much Linux you have to know to really operate it well... Because it doesn't hide anything from you. It's there, it makes extremely creative use of the kernel facilities. Technically, it's a very interesting project.

**Erik St. Martin:** \[00:20:19.09\] Yeah, it's a lot of fun. I think that there should be experts in that stuff, too. Don't get me wrong, but a lot of businesses, especially smaller businesses - they're worried about having to scale fast, and things like that... And then once you start hitting odd scenarios and stuff like that, and you hit saturation points and things fail in odd ways, and then your team who was developing features now becomes firefighters trying to figure out some of the issues, and things like that.

It's a fun world, right? Some of us enjoy doing that, but not everybody has the extra resources to be able to do that. And like you said, with the on-prem people and stuff like that that are used to running vSphere and things like that - they've already got that expertise on their team. And not every team is fortunate enough to have the kind of infrastructure expertise.

**Ivan Porto Carrero:** Yeah. I'm very interested to see what's gonna happen with Istio, because that's a very puzzling project to me. I understand the problem it's trying to solve, but I think most businesses who look at these solutions are latency-sensitive and I don't know how Istio is going to solve that particular problem... Because at the moment when we run our simulations it adds so many hops that it becomes a weird proposition. I really want to see the service missions take off, because in the end \[unintelligible 00:21:52.25\] problems are being solved there, with the circuit breakers and all of these calling patterns that they encapsulate. But it's gonna take some work still. So that's the thing I've been looking into lately.

**Erik St. Martin:** Yeah, there's a lot of interesting things that have popped up in maybe the last six to nine months. You've got SDO, Envoy that came out of Lyft... That's super interesting. And all of these are so early, and they work and they solve problems, but I'm really interested to see what the version two and three of those look like, because like you said, you kind of add additional hops and virtual interfaces and all these things, which on top of adding latency also add more points of failure and weird debugging.

**Ivan Porto Carrero:** Yeah, I think that's one of the unsolved problems so far - how can we tell you what's broken right now, and how do you get out of it? \[laughs\]

**Brian Ketelsen:** Yeah.

**Erik St. Martin:** I think one of the hardest parts right now is everything's moving so fast and there's so many cool projects popping up, it's kind of like that analysis paralysis - which one of these will be the thing? You could adopt SDO, and in six months nobody's using SDO, there's some new thing. Everything's just moving at the speed of light in the container and orchestration world right now. It gets really hard to settle in and just commit to something... Especially if you're a large infrastructure. If you pick Envoy or SDO or something today, swapping that out later could be a huge effort.

**Ivan Porto Carrero:** And you probably already have solutions in place, right? Most of these companies probably already have a library like Go Get in their infrastructure, that allows you to encapsulate all of those calling patterns - call all the services at once, drop all the requests when I have the first response, and so on. That's essentially what's being captured here.

\[00:24:05.20\] So it's gonna be interesting to see it play out; I'm gonna be a spectator in this one... \[laughter\] This whole Go Swagger thing keeps you apparently busy, so in between my work...

**Erik St. Martin:** Is that what you work on most of the time?

**Ivan Porto Carrero:** Actually, I used to work on it most of the time. I wrote it originally just to prove a point, but then it became fairly useful, and VMware started adopting it as well, so now I have somebody else working on it who is still fixing bugs; I've got corporate sponsorship finally, and I am personally much more interested in decentralized, distributed databases, or having -- another unsolved problem that exists, but I don't know how many people are actually confronted with it, is Gossip doesn't work well. I'm sure you're familiar with Serf or Consul at the very least from HashiCorp...

**Erik St. Martin:** Oh yeah, definitely.

**Ivan Porto Carrero:** Or Cassandra, for example... All of these systems -- Akka is another one from the JVM. All these systems are Gossip-based membership systems, and they exhibit very interesting failure behavior. When you turn off -- like, if you have a deployment of 100 or 1,000 nodes and you turn off 50% or 60% of the nodes, things aren't gonna go well. Cassandra gets to data loss, Consul takes a long time to stabilize, Akka similarly... So what we've been working on, or what I've been spending my free time on with the VMware research group is improving the Gossip algorithm. I'm working on that actually in my GitHub account, and the results we have is we go from interesting failure conditions to ideal case. I wanna improve that a little bit more, and then hopefully submit some \[unintelligible 00:26:29.10\] next year.

**Brian Ketelsen:** That's funny, because I was creeping up on your GitHub account today and I found that go-rapid repository, and it looks like that's what you're doing there - decentralized computing.

**Ivan Porto Carrero:** Yeah, that's exactly it. We submitted the papers to ACM SIGCOMM earlier this year. It got rejected because we forgot to compare against Zookeeper. Obviously, we were all like "Who uses Zookeeper these days?", but...

**Erik St. Martin:** Anybody with a Kafka cluster...

**Brian Ketelsen:** Yeah, it depends on what circle...

**Erik St. Martin:** Does Cassandra still require a Zookeeper cluster?

**Ivan Porto Carrero:** No, Cassandra has their own Gossip protocol. Kafka does Zookeeper, then \[unintelligible 00:27:13.12\] I believe uses Zookeeper as well... There are a few people who choose Zookeeper. I think they go by -- it works really well, but I would say for some definition of \[unintelligible 00:27:27.16\] that works really well. If you have a small cluster it might be okay, but the operational costs in all of it is just not worth it.

So now we've submitted the paper again; once it's accepted, I can publish it because it's a double-blind paper, so I can't just publish it before it gets accepted by some conference.

**Brian Ketelsen:** So tell us how pks works. Pks is an implementation of Kubernetes for distribution on VMware... So does it provision Kubernetes on VMware systems?

**Ivan Porto Carrero:** \[00:28:08.02\] Yes, but it does more than that. It is a joint effort between Pivotal and VMware, and to some extent also Google, for the Cloud Foundry stuff on Google. Now, this doesn't mean that pks requires Cloud Foundry. It can be used next to it, and it can be used standalone. What I work on - at the VMware side at least - is the integrations with the VMware stack, then the optimizations we can do at a Hypervisor level to work with something like Kubernetes, so that you get these benefits of maintenance mode and the separation between your hardware and your actual workloads.

It uses BOSH, so that's the one component that's required, the BOSH piece. If you're not familiar with it, BOSH is a lifecycle manager for applications. It's something that will monitor your infrastructure. If something goes wrong, it's going to take immediate action. If one of the nodes becomes unresponsive, for example, or some failure condition happens, it's gonna try to restart the processes; if the processes aren't to blame, it's gonna recreate the VM. That's, in a nutshell, what it does. It's a managed Unattended version of Kubernetes.

Earlier, somebody mentioned that operating these things is annoying; this is exactly the type of intelligence we're trying to encapsulate in that project. It takes away the operations headaches of it. It will also do zero downtime upgrades, and so on, over time. I think that's in a nutshell what pks is.

Other than that, we make sure that it can leverage just all of this stuff that VMware already has, like a login site for log aggregation, and wavefront for metric segregation, and so forth. I'm implied by VMware after all...

**Brian Ketelsen:** Well, that makes sense. On the networking side - does it use VMware's networks for Kubernetes overlays?

**Ivan Porto Carrero:** Yes, it does... NSX-T. It includes NSX-T, which is VMware's overlay network; it's the second generation of it. What this does over any of the other solutions that are out there - because most people will typically go with Flannel originally, and then maybe look at something like Calico for the policies. It actually gives every pad a container interface that can be managed outside of just the environment. You can have a network administrator who sets up a bunch of global policies in some other system - the NSX management plan - and that will then translate into rules for Kubernetes, for example.

There is more stuff to it, because NSX-T is quite an extensive piece of work. So it's pretty optimized in how it deals with sending traffic and doing the routing rules and so on, but those are implementation details of NSX-T itself. What is unique I think is that it has a centralized management plan for all types of container interfaces, and that is where Kubernetes also takes advantage of it. The NSX team has an integration for Kubernetes that also works with some of the other Kubernetes distributions, so yes, it's a very important piece of it, the security aspects that NSX-T brings to bear.

**Brian Ketelsen:** \[00:32:10.04\] Now, if I remember right, there's a lot of components that have been built by either Pivotal or VMware, that kind of contribute to this system. I know there was something called Kubo - that's related to this, right?

**Ivan Porto Carrero:** Yeah, Kubo is the Kubernetes on BOSH. That is the piece that interacts with BOSH, and BOSH works through a system called Releases. Releases is some archive that has some metadata in addition to having potentially all of the source code to rebuild that particular release from scratch. It then also has all of the monitoring and failure conditions that it know about, and their remediation. So it encapsulates all of that in a single package, and that is what Kubo is.

Kubo is open source, and everybody can use it. It's not \[unintelligible 00:33:05.14\] but it does require some work to get that set up in your environment, and then pks is the piece that will make it easy to set that up in your environment, with a UI and all of the management tools that you would expect for an enterprise environment... So hooking it into Active Directory and setting up RBAC and all of that kind of stuff, all those controls that you expect from an enterprise application is what goes into pks, which is closed source.

**Brian Ketelsen:** Nice!

**Ivan Porto Carrero:** So far it's been working fairly well. We hope to release this by December... Somewhere in December - I'll put it that way; I can't say exactly when, because it's a natural process, so it's more like around this time something will get released.

**Erik St. Martin:** Awesome. So I think we are probably two-thirds(ish) away through this show. Do you guys wanna jump into some projects and news? Ivan, feel free to jump in too and mention stuff or comment on things that we bring up.

**Ivan Porto Carrero:** Okay.

**Erik St. Martin:** So who wants to kick this off with stuff they've kind of ran into this week.

**Brian Ketelsen:** I'll start it off. I think that there's an exciting new project called Faktory from Mike Perham, who is probably most popular for the Sidekiq project that most Rails apps use for background tasks. Faktory seems to be pretty much a Sidekiq successor, but written in Go, and it supports Go and Ruby natively.

It looks pretty slick, and it feels like maybe it's the thing that happened after you learned from building Sidekiq. I'm excited to play with Faktory, and I'm more excited because Mike has done a really good job of something that most open source companies can't do, which is make a living off of a single open source project. He's got Sidekiq and Sidekiq Pro, and I'm pretty sure he's paying the bills with just Sidekiq Pro. I hope that he can continue to evolve that model, because that's pretty slick.

**Carlisia Pinto:** It's going to be interesting to watch if he's going to change what's behind his service from Ruby to Go. This is great, by the way... Great finds. I've used Sidekiq a lot in the past.

**Erik St. Martin:** Yeah, I used the same thing back in my Ruby days... I used Sidekiq a lot.

**Carlisia Pinto:** And you can do your own code for this, but it has this dashboard, and it's so easy to use.

**Erik St. Martin:** \[00:35:54.11\] Last episode we told everybody to update to Go 1.9.1 and Go 1.8.4 (I think it was). So there is a minor patch release, 1.9.2 and 1.8.5, which has just some basic updates to the compiler and runtime and stuff. But if you are noticing issues with go get on non-Git repositories, those will fix it. That bug was introduced in the last patch release.

Other updates - GoBot released 1.7.0...

**Brian Ketelsen:** Yay!

**Erik St. Martin:** Yeah, which has OpenCV 3 support in it, so now we can do all kinds of vision stuff with our hardware projects. And they've introduced -- I'm trying to remember the names of them, but from the GopherCon Hack Day, a couple people implemented support for some other drones and robots and stuff.

**Brian Ketelsen:** Nice. Yeah, Ron is a machine.

**Carlisia Pinto:** Did you know that Ron is going to GopherCon Brazil?

**Erik St. Martin:** Oh, really?

**Carlisia Pinto:** Yeah.

**Brian Ketelsen:** That's awesome!

**Erik St. Martin:** Yeah, that's awesome.

**Carlisia Pinto:** I'm pretty sure he is. Yeah, he's scheduled to speak about GoBot and IoT.

**Erik St. Martin:** I love Ron. He's just so passionate and full of energy...

**Carlisia Pinto:** yeah.

**Brian Ketelsen:** Just an amazing guy.

**Carlisia Pinto:** Yeah, I'm definitely gonna find a way to have dinner with him when we are there.

**Brian Ketelsen:** Nice. So I came across another interesting project called Authaus, and this is at GitHub.com/IMQS/authaus. I haven't played with it yet, but it looks like it might be the beginning or maybe the evolution of something that could be a really solid user authentication system for Go. Back in my Ruby days we had Devise and all of those other Ruby things that really did auth well, and there's really nothing that's kind of shown on the Go side in terms of authentication and authorization, so I'm really hoping that something will come out that isn't OAuth. \[laughs\] We need an easy way to add authentication to our Go apps, so I'm excited to play with this one at some point when I have some free time, and hopefully it's as good as it looks.

**Carlisia Pinto:** Then let us know how it goes. I'm feeling so proud of Go right now... I feel like it grew from a teenager into like a young adult... \[laughter\] It's maturing.

**Erik St. Martin:** And now, do you know how that's gonna compare to some of the modules for Authboss? Because I know they had like a password authentication, and they've got like e-mail confirmation, and things like that.

**Brian Ketelsen:** So the last time I looked at Authboss - and I don't know if this still applies - there were a lot of broken things in Authboss and they didn't really seem to want to fix them; they wanted to do a re-write and kind of fix the overall architecture, so I don't know if Authboss has been rewritten. There were a lot of things it didn't support when I looked at it a year or so ago. So I don't know if I can answer that question very well.

In its 1.0 version, Authboss was not all that I wanted it to be.

**Erik St. Martin:** Yeah, that's the thing with most of the open source projects - you see them and you're like "I want this thing", but it's not production-ready, right? We're all guilty of it. It's like, "Oh, it's on GitHub. I can totally use it in production." \[laughter\]

**Brian Ketelsen:** \[00:40:04.17\] Well, it doesn't bother me to jump in and help them make it production-ready; it's just like the idea that somebody has taken a vision and started to see it through to reality. That's usually when I find the projects, too - somewhere in between vision and reality.

**Erik St. Martin:** So our next one - I am particularly excited about... Who wants to talk about GRV?

**Brian Ketelsen:** Oh, wow, GRV is awesome... Have you pulled it down yet?

**Erik St. Martin:** Yeah, I have.

**Brian Ketelsen:** Oh, my god, it's awesome.

**Erik St. Martin:** Have you seen GRV, Ivan?

**Ivan Porto Carrero:** No, I'm looking at it right now though. Looks cool. I wonder how it compares to Tig, because I've used Tig in the past a couple times.

**Erik St. Martin:** Which tool?

**Ivan Porto Carrero:** Tig. It's similar in goals; it's also a CLI, a terminal version of a Git client.

**Erik St. Martin:** I haven't seen that one. This looks really awesome, and it's probably gonna solve a lot of the use cases where I try to pull up GitHub for stuff, so I'm actually really excited about trying to use it more... Anything that keeps me in my terminal makes me happy.

**Carlisia Pinto:** This looks really good.

**Erik St. Martin:** We should probably explain what this is... I don't think anybody mentioned that. So this is actually a command line UI for Git, and it allows you to see all the remote branches, and the branches that are there in tags visually, and kind of like a column... You can kind of jump through the commits and see the diffs and all that good stuff just from a console or a UI. It's actually ridiculously cool, and with it just starting out like this, I'm excited to see what gets added later.

**Brian Ketelsen:** It's got a great UI, and I think it's gonna be a pretty useful tool in my toolbox. The installation isn't the most fun in terms of Go apps; it does require CMake, because you've gotta build libgit2, so when you go get GRV, there's actually a makefile that you've gotta run. So it works wonderfully on Mac an Linux... I'm gonna bet that it doesn't work so great on Windows.

**Carlisia Pinto:** But this is really cool. I use an actual GUI tool to see diffs, because it's the quickest for me. But you can't do search on those tools, and I see that you can do queries; it seems like it not only can do queries, it seems that it has a lot of flexibility, so that is really cool.

I only know how to query one thing; it's like git-Slogs... It's the only thing I can remember.

**Brian Ketelsen:** I'm gonna drop a screenshot into our Slack. I just ran GRV on the GRV repository. Just kind of meta, but that's okay... And I'll drop a screenshot in our Slack, because it's so cute.

It reminds me a lot of... What's the mail program? The UNIX mail program, like Mut, or...

**Erik St. Martin:** Right, yeah.

**Brian Ketelsen:** It's very similar to that in terms of look and feel.

**Erik St. Martin:** Okay, so what else do we have? Oh, Dep 0.3.2 was also released, and that added import support for gvt and gb, and it had some other bug fixes and improvements. So if you are currently using Dep or were waiting for something that would auto-import from gvt or gb, I encourage you to play with that.

**Ivan Porto Carrero:** \[00:44:15.10\] That's been one of the best blog posts I've ever read about version management from the guy... From...

**Carlisia Pinto:** From Sam Boyer...

**Erik St. Martin:** From Sam Boyer, yeah... I wonder why I said "Shame."

**Carlisia Pinto:** What is the name of that blog post?

**Brian Ketelsen:** "So you think you wanna write a version management system?" Something like that.

**Ivan Porto Carrero:** Yeah, it was very well thought through and very well explained.

**Carlisia Pinto:** Yeah.

**Erik St. Martin:** Yeah, it definitely gives you an appreciation for the people who have to solve these dependency management problems.

**Ivan Porto Carrero:** Yeah, because your problem is always the easy one to solve, right? It's solve the other ones... \[laughter\]

**Brian Ketelsen:** This last thing I have in the news and projects is the latest issue of JustForFunc from Frances Campoy is amazing... Amazing, amazing. It's got the GoTracer in it, and he walks you through how to use it from start to finish, and it's awesome. I love the GoTracer so much, but it's severely lacking in documentation. Severely lacking...

**Carlisia Pinto:** Tell us what the GoTracer does... I actually looked to see if that was explained anywhere, and it really isn't.

**Brian Ketelsen:** It isn't. GoTracer allows you to instrument your Go applications and capture performance metrics that you can then put through these different tracing tools (GoTracer is one of them). It lets you see, for example, what you're spending most of your CPU time on, or where you're allocating the most memory... The better tools are visual, and you can click on things and find out... Because the graph is bigger - this is where I'm spending more of my time, and you can drill in and get all the way down to the function level. "This code takes more time than anything else" or "I'm calling this one function so many times that it's taking all of my CPU time", so you can drill into your app and find performance issues that way.

**Carlisia Pinto:** Cool.

**Brian Ketelsen:** So it's a good video. Go watch that.

**Carlisia Pinto:** Oh, I do have one, and I'm gonna get the link now... But I forgot to put it on the doc. Bill Kennedy came out with a blog post explaining channels. If you use channels but you don't understand them really completely, or if you don't use them because you don't understand how they work, if you read this blog post I promise you will. It might take you a while to digest everything, but he explains it really well.

He gives really good contrasts and he speaks in a very simple language. I thought it was a really great public service for him to do the post. I happen to know it took him a month to put it together. It's really well done.

**Erik St. Martin:** Oh, wow. I saw it come out, I haven't had the chance to read it yet. I'm trying to convince myself I have time to code right now. Okay, so are we ready to move into \#FreeSoftwareFriday?

**Brian Ketelsen:** Let's do it.

**Erik St. Martin:** Ivan, I don't know whether you listen to the show, but basically what we do every week is we give a shout-out to an OSS maintainer, group or project, just to kind of show the love. It does not have to be written in Go, so anything is up in the air. We often give shout-outs to tools and things like that that we use.

**Ivan Porto Carrero:** \[00:48:14.19\] Okay. I haven't given it much thought though, so...

**Erik St. Martin:** Yeah, you don't have to have anything.

**Brian Ketelsen:** Yeah, it's just fine. I'll start - I wanted to shout-out to Francesc, because the work that he does for the Go community and the effort that he puts into his podcasts and his blog posts, and his tooling and his documentation... Incredible. Very few people work that hard, so Francesc Campoy, we love you! Thank you so much for all of the things that you do for the Go community.

**Erik St. Martin:** Yeah. That whole series... Everything he does is amazing.

**Carlisia Pinto:** Oh my god, I couldn't agree more.

**Brian Ketelsen:** One of my favorite things he did was that Go tooling repository... It's just so awesome. It's like a readme with all of the awesome Go tools.

**Carlisia Pinto:** Let's have a link in the notes, for sure. I don't know if I've run into them... I don't remember.

**Erik St. Martin:** Carlisia, did you have anybody you wanted to shout-out to, while he pulls up the link?

**Carlisia Pinto:** Well, behind seconding what Brian has just said about Francesc Campoy... I'm gonna take that lead and say the same about Bill Kennedy; William Kennedy, but we call him Bill. I was so inspired by the post he just did about channels... Which, by the way, is called The Behavior of Channels. Just by doing blog posts, and his tweets, and little big things that he does all the time...

**Erik St. Martin:** And he travels a lot and does free workshops, and things like that.

**Carlisia Pinto:** Yeah, he's a big supporter of the community.

**Brian Ketelsen:** He's always giving.

**Erik St. Martin:** Mine for this week is Gonum. If you haven't seen it, it is filled with libraries for like linear algebra statistics, probability, things like that. And I'm really excited to see how this progresses. It is a world I'm not as smart in, so I'm glad people are writing these algorithms for me... But I'm mostly excited because Python with the NumPy library seems really to be the area that people are working in some of the more scientific regions. Seeing these things introduced in Go makes me hopeful that we'll start seeing more of those projects being completed in Go, as well.

**Brian Ketelsen:** \[00:51:08.02\] That would be awesome.

**Carlisia Pinto:** See? Go is growing! And look at this documentation... I love it! It's pretty awesome. Really well put together.

**Erik St. Martin:** Do we have any other shout-outs we wanna do? If not, we can wrap this thing up and we will play around with some of the people in the Slack for our aftershow.

**Brian Ketelsen:** Let's tie a bow on it!

**Erik St. Martin:** Alright. So definitely thank you everybody for being on the show. Huge thank you to Ivan for taking time out of your busy schedule to come and join us and talk about all things Swagger.

**Carlisia Pinto:** Thank you, Ivan.

**Ivan Porto Carrero:** Thanks for having me!

**Erik St. Martin:** And a huge thank you to all of our listeners. Definitely share the show with friends, co-workers, all that good stuff. You can follow us on Twitter @GoTimeFM; if you have questions for the guests or hosts, or you wanna make recommendations for guests or topics, please file an issue at GitHub.com/GoTimeFM/ping. With that, goodbye everybody! We'll see you next week.

**Brian Ketelsen:** I'd just like to point out before we go off the air that the holiday season is coming. We're recording this at the end of October, you'll be listening in November, so remember that GoTime is the best gift that you can give your friends and your family for the holidays... So just keep that in mind as the holidays come close!

**Carlisia Pinto:** And it's free!

**Erik St. Martin:** Subscribe to the podcast on their behalf, and tell them "You're welcome." \[laughter\]

**Brian Ketelsen:** Nothing says love like giving the gift of GoTime. Bye, everybody!
