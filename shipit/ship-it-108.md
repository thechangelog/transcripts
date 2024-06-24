**Justin Garrison:** Hello, and welcome to Ship It, the podcast all about what happens after you git push. I'm your host, Justin Garrison, and with me as always is Autumn Nash. How's it going, Autumn?

**Autumn Nash:** I'm tired. How about you?

**Justin Garrison:** Tired? Man, this is a short week, too.

**Anurag Goel:** Don't you feel like that almost makes it worse though? ...because we all know that we're going to do the same amount of work, but within less time to do it.

**Justin Garrison:** It's a compression algorithm.

**Autumn Nash:** Yeah. I love that use of the compression algorithm...

**Justin Garrison:** This is deflate all over again, so...

**Autumn Nash:** Deflate, but like workweek deflate.

**Justin Garrison:** Yeah... I feel a bit deflated.

**Autumn Nash:** We need more Dr. Pepper and coffee to get through it.

**Justin Garrison:** Yeah, we'll make it there. So for this episode today we are talking to Anurag the CEO and founder of Render. Render is a platform for running applications; they have a bunch of other stuff that they do as well. So if you never check them out today, it's sort of like a platform as a service...

**Autumn Nash:** Infrastructure as a service, sort of...

**Justin Garrison:** Yeah, I would call it more like a modern Heroku sort of thing, where it's like "Oh, what if we took the ideas from Heroku and applied it to today's sort of infrastructure abilities?" And so it was really cool talking to him about what it took to start it, how they were scaling it, and kind of what the backend looks like... Because this is what, in my opinion, a lot of platform teams at large companies are trying to do. And Render went out and did it and made it a product for everyone. So it's cool seeing that, and learning lessons from how you do it at large scale for untrusted code, and for customers who you don't work with... And then how would you apply some of those learnings internally for your own systems.

**Autumn Nash:** I love that, for one, he was an engineer before he was CEO. I love that. And that he went out to solve a problem, and that they are smart enough to pivot and still be customer-focused... Because I feel like a lot of times right now people are starting startups -- a solution that solves an imaginary problem... And they are actually trying to solve customer problems. And then to pivot when they see something their customers are struggling with. And they aren't trying to sell you the dream of "You don't have to have infrastructure engineers, and this is just all gonna do everything for you." It's making your infrastructure engineers more effective, and you might need less of them.

**Justin Garrison:** Right. I mean, I guess that's the goal for a lot of cases, where it's like the ratio of application engineer to infrastructure engineer is a little more offset towards the application side, which tends to be the thing that creates companies value, or makes them money at least, whether it's valuable or not.

**Autumn Nash:** It's what's available to you. A lot of times you may have a database that might be a better solution, or you may have an infrastructure that's a better solution, but where do you find the people that know how to use that, and know how to use it well enough at scale? So I think that a lot of it too is that colleges make application engineers, and they don't make infrastructure engineers. You know what I mean? You have a bigger pool of people to hire for that. Which - I mean, that's debatable. We need to do more infrastructure in college, whatever. But that's a debate for another time.

**Justin Garrison:** So let's go ahead and jump into the interview, and then we will be back afterwards with an outro.

**Break**: \[00:07:39.25\]

**Justin Garrison:** Thank you so much, Anurag Goel, for joining us on the show today. You are the CEO and founder of render.com. Can you explain to us a little bit how and why you started Render?

**Anurag Goel:** Absolutely. Thank you for having me. It's very nice to meet you both, Justin and Autumn. I was previously the fifth engineer at Stripe back in the day, 2011. I join pre-launch, and then helped the company grow to hundreds of people over the next nearly five years... And I saw, just as the company was growing, that about 20% of our engineering team was dedicated to managing our AWS infrastructure... Which is about what I've seen in other companies as well. And then after I left, I was in a really fortunate position to be able to take the time to figure out what I wanted to do next. And the way I did that was to build early-stage products in the different domains I was interested in. And I tried to figure out if I would still be interested in that problem after the first week of euphoria. "Oh my god, this sounds like a great domain. I'm gonna get into it." And then after a week, you're like "Okay, yeah, this is fun."

And so as I was doing that over the two years after I left Stripe - so I left in early 2016... Towards the end of 2017 I had built this other product, I was into deep learning, and I was taking these online courses... And one of the things I ran into was just setting up a Jupyter Notebook powered by a GPU on AWS. The course itself had like a two-hour lesson on how to do that, and people took multiple weeks, because these were data scientists. As I was taking that course, it just occurred to me that this is just a huge waste of time for everyone. And so I built a quick product where you could just with a single click get a Jupyter Notebook, backed by a GPU, all the libraries installed, CUDA, whatever... And that went really well. I ended up selling that tiny company to a different company.

But then I realized, as I was doing all this, that I was building the same kind of production infrastructure over and over again. And most companies do it sort of once, and it happens in parallel across multiple companies. I had been doing it serially, because I was spinning up multiple projects that were completely independent. And it occurred to me that we're now at a point in the evolution of software infrastructure where the fundamental primitives that applications need are often the same, but we're still rebuilding this internal Kubernetes-driven platform every time, at every company, as an organization scales. And along the way, I'd gotten really good at just dealing with Kubernetes, and dealing with not just the underlying infrastructure, but also building and shipping the frontend, and the UX... And I had, obviously, a lot of empathy for developers from my time at Stripe, and I'd seen the kind of product experience that we should aim for, had built some of that too... And so that's how Render came about. It married my affinity for productivity. And being an engineer - obviously, developers love building tools for other developers... And then also, this was a hard problem. I was looking for a challenging thing that I could take on, that I could work on for the next several decades, because - again, thanks to being in the right place, at the right time with Stripe, I had the time and I didn't have to go look for another job right away. I almost thought it was incumbent on me to find a problem, a big problem that I could solve overtime.

**Autumn Nash:** Can we talk more about what you did at Stripe? Were you like a platform engineer, so you were helping people use Kubernetes? Or was it just like the struggle that you learned from using it because you were building on it?

**Anurag Goel:** Stripe was not using Kubernetes when I -- I mean, Kubernetes came onto the scene much later. I joined Stripe in 2011. We were doing all kinds of things. And when the company is 10 people, as an engineer you end up doing a little bit of everything. And then eventually as Stripe grew, I ended up building out the financial risk operations and engineering teams.

\[00:12:03.02\] So I wasn't directly working on our AWS infrastructure, but I was still pretty close to the engineers who were... And I kind of saw all the problems, the late-night pages... As Stripe scaled in terms of volume, the number of payments we were processing across the board just continued to increase, and that led to all kinds of tweaks that we had to keep making to our infrastructure. But I don't think Kubernetes -- I left Stripe in 2016; I don't think Stripe was using Kubernetes back then. In fact, we weren't even using containers until much later. I mean, not much later after I joined.

**Autumn Nash:** The reason I asked is because I think that as developers we're constantly inundated with different products, and they all claim to do the same things. But when you can hear the problems that someone's trying to solve and how they got there, you can better understand the product and like the value prop, and how those -- so how does Render differentiate itself from the different cloud platforms out there that do this kind of managed stuff? Or how is yours different? Why do you pick Render over the offerings that Azure, AWS and like Google Cloud have?

**Anurag Goel:** This is something that I've been thinking of for like six years, six plus years now...

**Autumn Nash:** This is your time to shine.

**Anurag Goel:** So the first piece of that is you have to make it really easy for people to get started. Anytime you have to log into AWS to do anything, an angel dies somewhere.

**Autumn Nash:** I almost spit out my coffee.

**Anurag Goel:** I mean, I have felt that pain many times myself. And AWS'es whole spiel is "Look, we're going to give you these Legos, and we're really good at building hardware, and data centers, and keeping machines up and running at all times, and then giving you these storage, networking and compute primitives that are really general-purpose, and then you have to cobble together what works for you on top." And yes, AWS will give you a managed Kubernetes solution, but you still have to go learn Kubernetes. You still have to go figure out what a container, a pod, a deployment, a stateful set, a replica set, all of those things are... And really, when you're trying to get started, you don't have time for any of that. You don't need to deal with any of that. So you have to make it really easy for people to be able to get started within minutes. So that's what Render does at the start. So that's the first part, where you can just connect your GitHub repo to Render, and we automatically detect and suggest even sort of how to build your app, how to start your application... And we spin it up. And a lot of people are able to go live within minutes from signup. And I think that has been incredibly powerful in terms of helping us grow. We now have well over a million developers on the platform. There's over a million and a half applications running on the platform as well.

Whenever you make something easy to do, people do more of it. And so that's the starting point. But the way we differentiate beyond that is even more important... Because when you think about the history, the evolution of platforms, Heroku was great when it started, 2005... 2007 was sort of when it publicly launched, and it made it so magical to deploy a Rails app... And that's why it took off, and Rails was taking off around the same time, and all of that worked well.

But then, after its acquisition by Salesforce, development of the platform and adding functionality to the platform to allow applications and companies to continue to grow on Heroku - that stopped, and kind of slowed down to a crawl. And ultimately, Heroku got to a point where they just weren't giving people what they wanted as their applications became more complex.

**Justin Garrison:** Is that a feature of -- because you could call it Heroku, but every other platform basically has that same problem, where if it's easy to get started, it's going to be hard to scale... Because you're gonna have all the defaults. You're tightly coupling something upfront to say "Hey, we're gonna make this as easy as possible for you to get started." But once you know how it works, it's gonna be actually pretty hard for you to leave. And to your point about "Just connect your GitHub repo", GCP, Azure and \[unintelligible 00:16:19.18\] have that feature as well, right?

\[00:16:22.25\] I was at AWS when we shipped App Runner, which was literally like connect a GitHub repo and it just spins up a container and builds it for you and deploys it, and you have a web endpoint. It was like "Oh, cool." That was the thing that, like everyone said, "Oh, I want that thing." It's like "Well, do they want it exactly this way?" And then once you have two of them, you're like "Oh, well, now I need a VPC to connect them" or "I need to own some more of that infrastructure to make a complex thing." So it feels like at some point you just graduate out of the easy thing into a "Now I need to own a little more of this, so I have more control."

**Anurag Goel:** Yeah, absolutely.

**Autumn Nash:** See, I think a lot of the problems with anything that's managed or anything that is easy to start with - just to piggyback on what Justin said - it's hard to debug after a while, after you scale, if you didn't go in there and pick those things, and you're just getting whatever is the default. It begins to be hard to debug when you start running into problems, when you're scaling, or when something breaks... So how do you make it easy to get started, but to also be able to debug and scale on your platform?

**Anurag Goel:** Yeah, so this was the second differentiation point, which is - look, Heroku kind of stopped there. However, it is absolutely possible to build a platform that exposes the right kind of primitives, but it doesn't have to expose all of them at the same time, and all of them in the same way. So as an example, even on CloudFlare, you wouldn't get started "Just set up a DNS, click, click, click, and a domain, and get the web application firewall." However, there are very complicated ways to use Cloudflare. I know because we do it, and we use that through the API, we use it through TerraForm, we use it through other modalities. And the core experience pieces - yes, you have this default, opinionated flow... But if people want the freedom to go in a slightly different direction, you have to make it possible. So make simple things really easy, but make complex things possible. And that's something that we continue to work on, and continue to push the envelope on.

So again, to give you an example, we have customers who started on Render with just the three founders paying us like 30 bucks a month. And they're now hundreds and hundreds of people. They didn't have any infra engineers, and they're now paying us well over a million dollars a year. And they have maybe one or two full-time infra people, but those infra people are managing the Render infrastructure. And they have been able to scale on Render because we've given them these degrees of freedom that their applications need as they grow.

Another example of something like that is -- well, like you said, you have two of these services, you need to connect them to each other, and there's a VPC, and then you have to set up security groups, \[unintelligible 00:19:11.24\] all of that... Render has private networking just built in. Render has service discovery built in. So your applications -- every application that you started on Render gets both a public address and a private address. And it's the same for our databases, managed data stores. So we have managed Postgres, we have managed Redis, and they get private addresses as well. So you don't need to worry about security groups.

And we have network isolation as a feature as well, and something we're working on now is if you have multiple environments, like dev/staging/production, you will soon be able to isolate those environments from each other from a network standpoint with a single click.

\[00:19:49.08\] So ultimately, it really comes down to being incredibly close to your customers who are scaling on the platform, and really understanding their needs. And AWS scaled in the early days, and built a lot of the stuff because Netflix wanted that from them. And Netflix was responsible for a lot of AWS innovation, because they were their biggest customer, pushing them hard to build all these features... So it's very doable. It's doable in a way that doesn't make the Getting Started piece hard, but still allows people to do what they want, whether it's through an API, or a TerraForm provider, or something else.

**Autumn Nash:** Do you offer any kind of classes documentation? How do you teach developers to be able to innovate on your platform successfully? How do you help them to -- because you're saying you need to learn Kubernetes, you need to learn all these different things, and what you're doing is supposed to make it easier. But a lot of times I feel like you need -- it's like a car seat when you have kids. You can have a car seat, but if you're not using it properly, it's not going to do its job. So how do you empower developers to use your platform?

**Anurag Goel:** You mentioned documentation just now... Obviously, there's a lot of documentation. But there's also a lot of in-product guidance; there's a lot of information architecture work, there's a lot of design, just product/UX design that goes into making it obvious to people how to build the kind of app that might scale with you... And there's a lot of sensible defaults built into the platform that you can still change.

One of the things that I pride ourselves on is that our customers are able to grow on the platform without really getting in touch with us. And we have a support team, and they're really great, and we offer free email and chat support. At the same time, when you have over a million people on your platform, you can't really scale if you don't have the right docs, if your product doesn't allow people to discover these things themselves... And so a lot of what we've learned and built over the last several years is, again, going back to customer feedback, listening to people around what their questions might be, and then taking them back to the product team, taking them back to the documentation teams, and saying "Look, this is the thing that's coming up. And if we only added this one message here, then it will make things clearer."

Or there are things we do like, well, if something breaks in the logs, and there is something that Render can inject into your log messages to tell you exactly what to do, that is what it will do.

Again, as an example, Render automatically detects which ports are open on your service. So if it's like a private service that is opening up tons of ports that other people can connect to, then Render detects all those ports and explains "These ports are open." But if it's a web service and you wanted to serve HTTP traffic, you need to have an HTTP port. Sometimes people don't, and they don't even -- they're listening on localhost. And that's a common thing with folks when they try to spin something up, you have to listen on 0000, just all interfaces. And Render actually detects this and tells you "Hey, you might not be listening on all interfaces. We didn't find an open HTTP port. Here's what you can do." And that's in your logs, because that's the first place you'd look when something isn't working. And then we have a link to the documentation from there.

**Autumn Nash:** Good logs, good documents and good error messages are key.

**Anurag Goel:** Yes. Good error messages are so, so incredibly important, and so often overlooked...

**Autumn Nash:** Underrated.

**Justin Garrison:** What's at the bottom of Render? Is this Kubernetes on top of AWS? Is it some other provider? Is it just a bunch of VMs that scale an autoscaling group? Where did you start when you were building this?

**Anurag Goel:** I started on Kubernetes, because I think Kubernetes does a really good job exposing the kind of abstractions that make complex architectures possible. And there was no need for us to reinvent that wheel. And Kubernetes does a good job with container orchestration, and there's so much open source activity around Kubernetes; it's such a great community, which has continued to increase over the years. The problem, of course, is that the surface area of Kubernetes is massive. And to even do a simple thing, you have to understand ten different concepts. So the goal was to give people that kind of flexibility of Kubernetes without them having to understand the things that you just kind of have to do because Kubernetes is set up that way.

**Justin Garrison:** \[00:24:17.29\] But, I mean, that's the goal of a platform team at pretty much any company, right? Platform teams are that. And in this case, Render is that platform team. It's that 20% of engineers that manages infrastructure, built on top of something, and you shouldn't have to worry about what's underneath. But at some point you need to know if it's broken, or how to debug something, or you need to configure something extra... There's always that side of it. So you started on Kubernetes... Are you still on Kubernetes? Did you just shift off of it? How does that work?

**Anurag Goel:** No, we realized that -- obviously, there's a lot of stuff within Kubernetes that you can customize. And for Render, like as an infra company, we've taken out certain parts of Kubernetes, replaced them with our own... But at the end of the day, we're running our own fully self-managed clusters across the board, across all the regions we're in, and we're running across both GCP and AWS right now. But we treat them - both GCP and AWS - as sort of commodity providers. We're not using Eks, for example. And the reason we don't do any of that is because, as an infrastructure provider, we need that level of control.

But 80% of the companies out there that are building software don't actually need that level of control. So Render is not great if you're building an infra company and infrastructure as a service. You should not use Render, you should use Kubernetes. But if you're building sort of a b2b eCommerce SaaS app, then you really shouldn't have to worry about pods and services and deployments.

**Autumn Nash:** What was your biggest challenge in building Render and helping your customers to use it? Also, if you are building something on top of open source software, do you contribute back to that open source software?

**Anurag Goel:** Personally, I have to reinvent my job every few months as CEO, as the company scales. So the things that I did when the company was five people are very different from the things I did when the company was 20, or 50. Or now we're over 70 people. And you have to really think about, as the CEO, what the company is going to need 1, 2, 3, 4 or 5 years from now, and you have to plan towards that. And then you have to do things that you've never done before and you have to learn really quickly. And you have to go figure out -- you don't have time to read 20 different books, although you can try... But you talk to people, you find the ways in which you can scale... You make mistakes, you learn from them, you pick yourself back up and get back to it...

So I think every successful founder, I would say, goes through that journey, and has to be -- if they remain CEO. Obviously, as a founder you can choose to not be CEO, and hire someone who has done this before. I chose not to. I chose to take on this more challenging role, as opposed to just like becoming CTO or staying a developer. So that was pretty challenging, and continues to be something that I work on every day. And I enjoy it.

What was your hardest engineering problem? Because you said that you first \[unintelligible 00:27:22.08\] So what was your hardest from engineering, and do you ever miss just doing the engineering part, I guess?

**Anurag Goel:** Yeah... I think in the past, one of the biggest things we've had to deal -- so first of all, scale makes everything hard. And as you grow, you find new bottlenecks. One of the things we ran into very early on - I'm talking like 2018, 2019 - is as we became a bit more popular, we started getting hit by DDoS attacks. And not just at the HTTP layer, but at L4 as well, at the TCP layer, where we had never encountered that kind of volume before... And we realized that -- this was partly one of the reasons we decided not to do bare metal.

\[00:28:12.09\] We realized that AWS, GCP and CloudFlare, they've dealt with these problems before. And they're really good at dealing with low-level DDoS attacks. And instead of building all of that functionality out ourselves, we decided to change our architecture significantly, and focus much more on bringing Cloudflare into the mix, and relying more on the larger cloud providers to give us those basic building blocks. But it was a very big change for us to make. And because of these attacks in the early days, we went down more often than I would have liked.

**Justin Garrison:** I'm a little confused there, because you're using, say, Cloudflare to handle the DDoS. How does that relate to bare metal? Because you could put Cloudflare in front of your data center... I don't know, that was confusing.

**Anurag Goel:** Oh, that was for L7. But I'm talking about L4 as well. So if you're doing bare metal, most bare metal providers, including the best ones like Equinix Metal, they don't actually have functionality that protects L4 level attacks. They will ask you to install some sort of appliance. Or they'll have like some weird "You go figure it out." So we were running on Equinix Metal for some time, and that's where we ran into this. And we are still using AWS and GCP... So I think that was a big one.

The other big challenge was with GKE. arly on, we started using GKE, and we quickly realized that we were actually one -- at least in US West 1, for GKE we were their largest cluster by certain axes. And that led to a ton of bugs that we found in GKE. And we were actually -- so this is a an interesting story... Okay, I'll get into it. So we participated in TechCrunch Disrupt Battlefield in 2019, and we were in the qualifying round, and we had won, and we were going to present in the final round on October 4th... And at midnight I started getting paged. And we were four people then. Three engineers, one designer. I was one of the engineers. So I started getting paged at midnight, and suddenly our GKE control plane stops responding, and it's down. And we have no idea what's going on. We contact the Google team, they're like "Oh, we're just going to restart your control plane. It'll be fine." And they did that. And then four hours later, at 5am Pacific, it goes down again. I'm on a call with a Google engineer, and this person says "Well, actually, if we restart your control plane again, I guarantee that it will be fine." I'm like "You can't give me guarantees around software... But okay. Why don't you do that?" Because we can't restart the control plane ourselves.

**Justin Garrison:** Yeah.

**Anurag Goel:** So they did that, and again, obviously, it went down. And then we finally, finally managed to get a hold of someone who realized what the problem was, which was we had upgraded the control plane, and the new version had a bug that was spewing logs onto the disk for the control plane nodes themselves... And those just were filling up. So after a while, the control plane just had no disk space to do anything. So it was like an internal bug.

And that's on the sort of evening, even during -- we had some warning of like when Render \[unintelligible 00:31:28.28\] and a lot of people are looking at us and trying to sign up... And it was just a really terrible experience, because I'm sure we lost a bunch of people who couldn't spin up services because our control plane was down... And thankfully, we ended up winning, and then the control plane was up. But that taught us that we really need to own the whole thing. So then everywhere else we own end to end clusters, including like building out control planes, scaling them.

And you asked about contributing back... I think it depends on what the changes are. We've certainly contributed certain things, but most of the customizations we're making are kind of writing our own code to match our own scheduling needs, or using sort of our own operator pattern to do what we want to do to manage databases, our own databases on Kubernetes. So those things you can't quite contribute.

**Autumn Nash:** \[00:32:23.11\] Have you actually made any contributions to open source?

**Anurag Goel:** I will have to go back and check with the engineers, but actually just this morning someone was asking about some Tilt and Bazel development configurations that they're working on, and they're thinking of contributing it, and they're like "Well, where do I go to contribute it?" So we definitely want to do that. It's actually great for everyone, right? As a company, it's great to be able to contribute because it helps us just get more visibility, it helps us hire more engineers, and it feels good. It feels good to be able to give back to projects that you're relying on.

**Justin Garrison:** In the vein of giving back, you are basically the platform team that a lot of people are trying to build internally at their companies. They have a lot of people that at least 20% are trying to build these platforms today, internal development platforms, whatever. Can you describe the internal structure of the customer to Kubernetes cluster relationship? Are you doing isolation based on namespace? Does every customer get a dedicated Kubernetes cluster? Do you have Kubernetes inside of Kubernetes to do like virtual API servers? That's something that a lot of people in the platform engineering space discuss, and there's a lot of opinions, but hardly anyone shares how they're actually doing it. There's a lot of products that say "Hey, go use this product and we will do that thing for you", but then no one knows how it actually integrates and operates at a scale like tens of thousands of different customers in different environments, running different applications. How does that actually architecturally look for you?

**Anurag Goel:** I think the short answer is it continues to evolve. And it depends on what our customers need, how we scale... But at the very high level, obviously namespaces are a good way to isolate things. But also, depending on a customer scale, you can imagine a whole Kubernetes cluster that is kind of dedicated to them. But our customers don't really -- they can figure out we're running on Kubernetes; if they list all the environment variables, they'll see what's going on. So we don't hide behind that fact. But we've had to put in a bunch of security measures in place that allow us to run multi-tenant clusters. And namespace isolation is just one of them. There's a lot of Docker and \[unintelligible 00:34:41.29\] level changes we've made, or Containerd level annotations and things like that, that allow us to do this in a way that is safe and secure.

We have to do things in a way that is boring and stable, and we can't really go for the coolest tech that is out there, like Kubernetes in Kubernetes, because we need to make sure that our customers are not affected by whatever bugs that might occur in those newer systems.

We have talked about some of those things, like Kubernetes in Kubernetes, virtual kubelets, and our engineers - they keep an eye on those things... But at the end of the day, I think the foundation for us is to try to make it so that each customer is completely isolated through a variety of means, but not necessarily at the cluster level. So we have multi-tenant clusters. That's the core of it.

**Justin Garrison:** That's always like one of those concerns, because there's components or resources inside of Kubernetes that aren't multi-tenantable. There's plenty of things that are globally viewed inside of a cluster, and sharing that with multiple people - you have to be very strict on how you isolate those things together, and make sure that one does not interfere, or consume resources, or do something to another one in that environment.

**Anurag Goel:** \[00:36:03.18\] Yeah, absolutely. And like I said, I think this continues to evolve, and we've had -- I mean, obviously, Docker or just container capabilities are a great way to figure out what people can or cannot do on the platform... And so we rely a lot on that. We rely a lot on other kinds of protection mechanisms... But what we've learned is actually that the weak links aren't at the container isolation level. When you work with cloud providers, the weak links are often in the primitives that the cloud providers might expose themselves. So you have IAM, and you have some workload running on a machine that can contact your control plane database. And you want to make sure that parts of your system are completely isolated from your own control plane - and I'm not talking about the Kubernetes control plane - but you still want to be able to run your own code close to the user code. And there's a lot of complexity involved in that, that we learned to build around. And Kubernetes control planes are shared. Obviously, as a customer, you cannot access the Render Kubernetes control plane.

There's also isolation by default, in that the workloads that customers have on Render, they don't run on machines that are directly accessible over the internet. So those machines don't have public IP addresses. Everything is behind NAT gateways. And that allows us to control traffic and isolation a little bit better as well. So customers don't have to worry about script kiddies trying to look for open ports on their apps. And everything is behind our routing and load balancing layer. And then there's firewall rules on top, and stuff like that. So I think that is where you often find issues.

There's also this notion of shared load balancing and shared router layers. And early on, very early on, we ran into cases where one customer went viral, and brought our load balancers down... And so we've learned to, over time, build out isolation techniques there, and things like rate limiting we've had to build ourselves into our own load balancing layer, at the domain level or at the customer level... A lot of that multi-tenant work happens at one layer above. At the same time, we're tracking all these CDEs that might show up, and we make sure that we're updating the kernels, we're updating the VM operating systems, all of that. All of that happens behind the scenes, so we're never exposed to the kind of container vulnerabilities that might happen.

And having said that, I think there's a world in which, for specific customers, we make sure that they have their own VMs, for example, so they don't have to worry about other containers running on the sort of similar infrastructure.

**Justin Garrison:** Yeah. I mean, there's multiple levels of noisy neighbor that you want to avoid it... And one is just a local resource, CPU, RAM, disk. The other one is networking, is a big one. And so being able to isolate a multi-tenant environment is pretty key there.

What do you see going forward from here for Render? Because I look at maybe -- I don't know if they're your competitors, but other people in this space, like fly.io has an offering of "Give me a Kubernetes API and let me do whatever I want with that." That's a thing that I can do out there, and it's still an abstraction away from going with GKE or EKS, because I don't need to worry about all the little bits. I was like "Just give me the Kubernetes API portion of it, and you figure out the networking and storage and all the stuff behind the scenes." Is that something that you're interested in? Or are you still focused mostly on the application developers that are "Hey, I don't want to manage any of that infrastructure. Just hide it from me and I don't need all the knobs"?

**Anurag Goel:** \[00:39:49.25\] The latter is what we're focused on. So we're not planning to be any kind of managed Kubernetes provider. We could be pretty easily. We run all of this stuff already. But the goal is really - and this is a long-term thing, but also a short-term thing - is to really raise the level of abstraction in the cloud. So 10 years from now there's no reason to believe that most applications will run on Kubernetes clusters that are being managed by the application of the business themselves. AWS has exposed these knobs, and Google has pushed Kubernetes to us and they've done a lot of marketing, but also a lot of work to make it easy to run complicated workloads... Render is our attempt to change the conversation around what companies need to do in the cloud. And the contract between a company, a business, and a SaaS business and a cloud provider.

To give you an example, one of the things we might want to do in the future is find ways for our customers to use feature flags and progressive rollouts. And that is the layer at which we want to innovate, as opposed to the "We're gonna give you a Kubernetes API server." I think the numbers kind of play themselves out this way; the software industry has way more application engineers, and is able to mint many more application engineers than infra engineers. And infra engineering always requires a ton of experience, and you have to learn by doing; you can't really get a degree... I mean, maybe you can. I haven't seen anyone get a degree in AWS.

So I think the point there is that there will always be a massive need for simplifying the cloud. And especially when you think about on the AI front, a lot of people are saying "Well, you will be able to write much more code with fewer developers, because you have Copilot, you have other things... And I think that the world is moving in that direction.

The same thing applies to being able to build really complex architectures with really tiny infrastructure teams. So instead of hiring 20 people, you hire one or two. And that's the world we're operating in. So it's not like you'll have zero infrastructure engineers when you're a 500-person company running on Render. But the goal is for the infrastructure engineers to operate at a higher level. Instead of managing Kubernetes, they look at application performance, and they look at how many, say, instances they should be running, or how do they communicate between services, which application environments they isolate, and what the rules are there that they can configure... Or how do they configure going from development to staging to production... Those are the things that Render wants to focus on. Building software for teams that are building software, but not necessarily exposing the ins and outs of infrastructure.

**Autumn Nash:** Can we go back to kind of how you were saying your learnings from bare metal to cloud and all that? I think a lot of people are in that transition, because at first everything was on-prem, then everybody was really excited about the cloud, and now everybody wants to go back to on prem, and everyone's trying to figure out what you really need from the cloud and what you really can do on prem, where that sweet spot is, and what's worth having someone else do for you and what is worth you doing yourself. Do you have any learnings that you wish you knew when you first started, or maybe like any new learnings? Because I think that would be beneficial to everyone, because we're all kind of learning, "What do you really need in the cloud? What can you do yourself? What's worth paying for?" So in your experience, what do you wish you knew, when you were first building render?

**Anurag Goel:** I think that it's always very enticing to go to on-prem or bare metal for a company like Render, because yes, CPUs are cheaper there, bandwidth is cheaper there, you end up either having better margins, or giving people a better deal, or both. We, as a startup have a lot of constraints on how many engineers we can hire, and what we can do with the limited time we have, and how do we grow revenue by building things that people want. And our choice has been to continue to focus on the higher-level products and features that people need from their cloud. And over time, that will change.

\[00:44:14.17\] So Render now has an engineering team that does focus on building stuff on top of AWS. But for the next stage, you can imagine us hiring a team that is already experienced with running infrastructure, let's say Kubernetes even, on prem; or running, say, a hypervisor on bare metal. And at that point, I think we will expand across the sort of cloud versus hybrid versus on-prem spectrum.

My learning is to just focus on what gets users value the fastest as a startup, and not try to be technologically cool, or say "Oh, we're going to do bare metal because it's going to increase our margins when we're tiny." When you're tiny, margins should not be what you focus on. When you're tiny, you should be focused on creating customer value. And so that's something that we definitely experimented and learned the hard way, and that's something that I would do differently next time.

And then instead of focusing on "Oh, let's do bare metal" - and this is a debatable opinion, but for us it's important to focus on providing value. And I do see now a lot of people saying "Oh, you should run applications yourself on, say, Kamal, Rails" and DHH is spearheading this sort of "Let's not --" Even though I know him, and he likes Render, I think that ultimately people have to decide what works best for them. And you can totally run a Rails application on a VPS using Kamal. And you should if it's just you building your app. But as soon as your team grows, and as soon as your needs evolve, and as soon as you have, frankly, a lot of paying customers, reliability starts becoming much more important than how you're running your app. And your users don't care; they absolutely do not care if you're running on bare metal, or AWS, or Hetzner.

**Justin Garrison:** Well, they care about value, right? The value is that key piece there. And I love the -- Bill Gates a long time ago defined what a platform is, and I always go back to this, because I think a lot of platform engineering teams need to focus on that value piece. Bill Gates said something along the lines of "A platform is when the customer's value exceeds the creator's value." The person who created the platform gets something back out of it, they get financial gain or whatever, but the people who build on top of it get so much more value out of what they've built. And that's a platform. That is when it actually becomes "Oh, the people on top of it are getting more value from it." And that's the thing that -- yeah, you have to focus on that portion of it first. Because if you're trying to preoptimize things, or say like "Oh, I can get a bigger margin over here", or whatever, those are all the things that are going to distract you from "What are your customers getting value out of what you're doing?" And if you are lowering the prices, maybe that's the right value. But if they're not asking you for that... Right? If you're saving them time, then focus on how to save them more time.

**Autumn Nash:** I think that's one of those things that is always going to be relevant in tech. We keep getting new shiny toys like the cloud, AI, all these things, and we're like "Okay, this is going to do everything for us." And then we're like -- the newest hot take, "We're going to do everything on-prem." All of these things are tools, and they can be used for things when you're picking either you're going to be reliable, or you're going to be cheaper. Like, there's always trade-offs. And I think we need to go back to where we start talking about those true trade-offs. The cloud has always been a good place to start when you're smaller, when you are trying to figure out your scale... And we've just gotten to this "You can do everything with a hammer", and that's never true. It never works out. So I love that you brought that real perspective with what worked and what didn't work. And you talked about, for one, figuring that trade-off off. But you also talked about being simple. The best technology is simple. It's not the coolest new thing, you know? So I love that you really brought the truth of that experience, because I think that's what we're missing right now. Everybody wants to sell something, and everybody wants to ride the newest hot take... But those are the things that are always going to be true that they're always going to be a trade-off, and simple is always best when starting.

**Anurag Goel:** \[00:48:25.13\] Yeah. Really well put, both of you. I think it's always -- and this is what has allowed us to scale with our customers as they've grown, as opposed to losing them to them building out their own infrastructure on AWS. It's always been about the customer for us, in a very deep, sort of meaningful way... Because there are tons of problems when you run a scaling startup. Things are breaking all the time.

**Autumn Nash:** Any scaling software...

**Anurag Goel:** Yeah, exactly. And things are breaking all the time, there's chaos, your plans that you made at the beginning of the year have suddenly fallen apart, because guess what --

**Autumn Nash:** What you test is one thing, and then as soon as you give it to real people, you're like "What did you do?"

**Anurag Goel:** Yeah, exactly. And all of these problems get compounded as you add more people to the team. Because now you have to focus on the \[unintelligible 00:49:13.29\] communication problem. And I think ultimately, focusing on the customer allows you to move faster in those situations. Like, what is the best thing to do for the customer?

Another example of this is - yes, our customers want GPUs these days. People want to train their own models. We spoke to a lot of people who are running AI companies on \[unintelligible 00:49:37.19\] and we realized that most of them are using third-party APIs. They're not training their own models. So while Render could have gotten into the AI boom and said "Oh, we offer GPUs", we actually explicitly chose not to do that over the last year... Which is not to say we won't ever. But we've figured out that what people actually want when they're building these AI apps that Render doesn't have is object storage. Because you have all this data that you're moving between your models and all of that, and you have these image files or whatever... And people love everything about Render, but they don't want to go open -- they won't deal with S3, because S3 operates, again, at a very different level of abstraction than what they're used to with Render. And so object storage has been our most highly voted feature from the beginning of Render, because it's an all-in-one platform. If you have an AWS account, it's almost like a bug in Render.

So I think our goal is -- and obviously, I don't think we'll build everything for everyone. We can't. But we want to make sure that for 80% of the apps out there we serve your core needs, and then we make it easy for you to connect to other things. So we are also have, for example, customers who are using Mongo Atlas. And we don't host Atlas ourselves, and Mongo does... And we don't want to build out a whole Mongo thing. But for these customers, we're actually -- we're enabling this feature called private link, which allows them to talk to their Mongo database from Render, over the private network, which helps them, it helps us... And so that's the kind of thinking that has allowed us to grow with our customers.

And to go back to the point I was making around just being really customer-focused, and not -- so object storage. We have started working on object storage now, and I think our goal will still be to get it out to market ASAP, so we might actually use S3 under the hood. But our customers, again, they don't care. We will expose interfaces that allow them to deal with the problems they run into with S3 today. For example, bucket visibility and dealing with the defaults that AWS has there - that's a huge problem. People just can't figure out how to keep their buckets secure, and either everything is public, or nothing is...

**Autumn Nash:** But see, this is why people use the cloud. It's getting rid of the undifferentiated heavy-lifting. It's because you can now worry about the top layer, and they're gonna worry about that storage, right? And you get to make it easier for customers, and they're gonna pay you for that, and you're gonna pay them for that. And you're gonna use it until you have enough engineers, or thought to go and solve that problem. And that's what gets us closer to innovation. I think one thing that you said really stood out, is that you're solving problems because your customers are asking for it. Does anybody else feel like people are just solving problems because they came up with it lately?

**Justin Garrison:** \[00:52:25.00\] Well, a lot of times it's a solution in search of a problem.

**Autumn Nash:** Yes...!

**Justin Garrison:** "Oh, I've found this cool thing. Let me go find who will pay me for it."

**Autumn Nash:** I don't know if it's because it was zero interest rates for so long, but now it's like anything that involves AI, and we're like "Sir, we didn't ask for this."

**Justin Garrison:** We almost went a whole episode without mentioning AI. We were very, very close.

**Autumn Nash:** Sorry.

**Justin Garrison:** No, I mean, it came up earlier. I was like "Ohhh, that was a --"

**Autumn Nash:** No, but I mean just in general though... I went to a very big tech conference about a month ago, and I just walked the floor, and everybody was solving the same two problems, or solving problems that nobody asked for. And I'm like "We have actual problems that people can start startups to solve. I don't understand it. We have less capital to throw around in tech, and we are solving problems that nobody wants or asked for to be solved.

**Anurag Goel:** Exactly.

**Autumn Nash:** That makes me so confused. I really love that you're actually trying to solve a problem... What observala-- Justin, what's the word I'm looking for?

**Justin Garrison:** Observability.

**Autumn Nash:** Yes... And monitoring do you use to like get more insight into your customers? Because that is so underrated. People, find out where your customers are struggling, and then go solve that problem, and not just make up a problem with no capital.

**Anurag Goel:** Yeah. I think for us there's a lot of different ways in which we connect with our customers. And we've always been that way. But as a starting point, it's really important for us to give people email support, even if they're not paying us anything. And the reason we do that is because we get feedback. Because we understand how people are using the platform, and our support team is amazing... These are all adult support engineers. We don't have sort of like tier one, or like that sort of support.

**Autumn Nash:** It makes you a better engineer, though... Because you are seeing --

**Justin Garrison:** Everyone's help desk.

**Autumn Nash:** Yes. That is so underrated. I hate when people are like "I have this fancy degree, and you guys were just help-desked, or whatever. And I'm just like "Dude, those are the best engineers." The most fire principal engineers are the ones that started solving someone else's problem. Because for one, you learn how systems work, and how that product works so much better, because you're finding your problems in your bugs. But also, it teaches you just how to be a better engineer. So I think that's awesome.

**Justin Garrison:** I mean, it's a long feedback loop. The error message that the customer copies and pastes back to you in an email is more valuable than the log you see when you're running debug.

**Autumn Nash:** Can we go back to that though? Because that is so underrated. I'm just like "That's where people should start. Go fix something."

**Justin Garrison:** Autumn, I'm gonna send you all my emails. \[laughs\] I mean, the scaling factor is the hard part. "Oh, hey, we get these emails", and it's this asynchronous medium, and...

**Autumn Nash:** But there's also ways to do that though. Like, you can have something crawl all your emails and find how likely it is for you to get pinged for the same thing over and over again... But having that open channel is so important.

**Justin Garrison:** Autumn's new startup is Email AI, so we're just gonna... \[laughter\]

**Autumn Nash:** Don't tempt me.

**Anurag Goel:** I would like to say that even though we mentioned AI, it was in the context of not doing the obvious thing with AI, which is \[unintelligible 00:55:26.24\] GPUs. It was to actually build object storage. So I'm totally with you.

**Autumn Nash:** But I think that's so smart, because it's something that not everybody is doing, and it's an actual need. Please can we - because it's not that AI is a bad thing, just like the cloud wasn't bad. It's just when you use one hammer for everything, you're like "Dude, why?" So I think that's awesome.

**Anurag Goel:** Thank you.

**Justin Garrison:** Anurag, thank you so much for coming on the show and talking to us all about Render, and the backend of it, and what you're building next for customers... That's so cool to hear. And for anyone else that is interested, go check it out, render.com. And we will be back in a bit.

**Anurag Goel:** Thank you. Really great to be here.

**Autumn Nash:** It was a great conversation.

**Break**: \[00:56:11.11\]

**Justin Garrison:** Thank you so much, Anurag, for coming on and talking to us all about how the backend of Render works, and kind of where you're going with adding value to customers. I think it's really neat to hear just that they're doing multi-tenant Kubernetes clusters at scale, at their scale, for a lot of customers... Because that is something that has been really, really hard for even a single company. A second company has two teams, and they don't want to share a Kubernetes API. But in this case, they're doing it in a product for multiple customers, with multiple applications. I think that's really cool.

**Autumn Nash:** I like anything that makes engineering lives easier.

**Justin Garrison:** I would love to see more of them open-sourcing some of those controllers and operators and the things that he talked about... Like "Hey, how do you actually do this in practice?"

**Autumn Nash:** Even if it's like publishing learnings, or just any kind of contributions... I just hope that startups, if you're going to use open source software, please contribute back, because we're barely hanging on in a lot of like open source communities to begin with, with all that's going on in open source... And we've got to find a better way to maintain this software that so many companies profit off of.

**Justin Garrison:** You've been figuring out from their practical experience what layer you want multi tenancy, and how you implement that tenancy. Like, we talked about the load balancing layer, versus the compute layer.

**Autumn Nash:** That's why I'm saying it doesn't always have to be code. You know what I mean? But like just some sort of way that you can contribute back to make it better for the community... Please, community is important.

**Justin Garrison:** Engineering blog posts are fantastic.

**Autumn Nash:** They are! The Netflix one is like fire. It comes in my inbox and I'm just sitting there with like ice cream at night... Because the best way to learn how to not mess up is find somebody else's...

**Justin Garrison:** I just had this mental image... I could totally picture you on your couch, with Murder Mystery out in the background, eating ice cream, and just reading the Netflix blog on your phone.

**Autumn Nash:** In fluffy pink robes, and fluffy rabbit socks... Just so much pink and just ridiculousness and ice cream.

**Justin Garrison:** For today's outro we're gonna go with the segment that we've done before called "How stuff breaks" or "How things break." And in this case, the breakage is actually Google ran out of things to deprecate, so they deprecated one of their customers.

**Autumn Nash:** Justin...! \[laughter\] \[unintelligible 00:59:37.09\]

**Justin Garrison:** \[unintelligible 00:59:38.17\] on that one.

**Autumn Nash:** I'm both horrified and so proud of you at the same time.

**Justin Garrison:** \[00:59:46.26\] So if you didn't hear -- from the time of recording this in mid May, there was an outage from a company called UniSuper, who is a really large... They have $135 million in their funds, basically, as a... What's it called? Pension. In a pension fund. So this company is --

**Autumn Nash:** I'm still stuck on the fact that your dad joke just went from dad joke to savage... I was not ready.

**Justin Garrison:** You're stunned right now, I know. It was actually a good one.

**Autumn Nash:** It was good. I was not ready at all.

**Justin Garrison:** So in this case - so the account of UniSuper, they were running on GCP, and their whole account just got full on deleted. Gone. They just disappeared from GCP.

**Autumn Nash:** This is wild.

**Justin Garrison:** When you think of like disaster recovery, you don't think that like "My disaster is like my account no longer exists."

**Autumn Nash:** That's what I'm saying, because usually your disaster recovery is just in a different -- but you still need to log in.

**Justin Garrison:** Yeah. \[unintelligible 01:00:45.15\] you have to be able to call someone, right? And in this case, they are a large company, or a large customer for GCP, and so they were able to at least escalate enough to say "WTF?! What's going on here? All of our stuff is gone." So the reason we wanted to talk about it was Google Cloud released their post mortem for it.

**Autumn Nash:** But that's wild, because it's still -- let's say for a database, if you're gonna have a backup replica, it's still in the same account... Just, wow. And I can't imagine the amount of time it takes to set up a new account. Like, that is rough.

**Justin Garrison:** From scratch. You're talking about like TerraForm or something like "No, no, no." You're not going from scratch to like "We are now back in business."

**Autumn Nash:** That's what I'm saying. Like, what you're maintaining to even like scale is still very different than what you start from scratch. If you've got a bunch of nodes and you're putting up another one, and you've automated that, that is still very different than starting the process completely over again.

**Justin Garrison:** Yeah.

**Autumn Nash:** Part of me has empathy as an engineer, that I'm like man, can you imagine getting the phone call and being like "Oh, crap. We just deleted everybody's stuff."

**Justin Garrison:** You go and you log in, and you're like "I don't see it. It's gone."

**Autumn Nash:** I have so much empathy for the fact that in software sometimes just things happen that are unintended... But also, like "Yo, you deleted all of it? Just wow..."

**Justin Garrison:** And kudos for Google in this post mortem for owning it.

**Autumn Nash:** They owned it. And it's a very good write-up.

**Justin Garrison:** It was their problem, and the basics of it were UniSuper was using VMware on top of GCP. So they have Google Cloud, VMware Engine, and maybe it was just they were trying to get off Broadcom's VMware.

**Autumn Nash:** I also thought that was very interesting because of all that's going on in -- so you've got \[unintelligible 01:02:32.28\] trying to get off of it?

**Justin Garrison:** Yeah, I mean, this is one way...

**Autumn Nash:** I was trying to do a lot of research, trying to figure out "This is just something that works with VMware? Does this help you get off of it completely?" It seems like it would be an easier way to get off, but it doesn't seem like they're completely, you know...

**Justin Garrison:** You don't want to get off VMware this way, let's just put it that way. And this is something that a lot of cloud providers - AWS, GCP, I think Azure might have one, but they have like a hosted VMware, which was a way to like take your VMware in your data center and say "Oh, I just want the VM to go into the cloud now." And that was the lift and shift, like the easy button.

**Autumn Nash:** I wonder if this still requires licensing though, because for you to be able to --

**Justin Garrison:** Yes.

**Autumn Nash:** ...no one's gonna let you say their name and not get a cut. So they're paying VMware somewhere. But I wonder if this enables you to then cut your ties with VMware at some point.

**Justin Garrison:** No, because it's still licensed through -- that usually gets forwarded on to the customer, of like "Here you go. This is your VMware licensing portion, and here's your cloud portion." So it's divvied up as like a partner, but it's not like a fully abstracted away thing.

\[01:03:36.16\] UniSuper had their VMs all running, as far as I can tell, on -- or at least everything that got deleted was running on top of VMware inside of GCP. And the specific thing they point out in the post mortem is that they had a private cloud, a private connection, which the GCVE service did not allow you to do as a customer originally. So when they spun this up - and this happens in the... In the post mortem they talked about it. They had an internal tool to create private VMware environments for customers. And they made the private environments, and they did not fill out one of the fields.

**Autumn Nash:** Which I feel like happens a lot, because people will be like "I don't need this."

**Justin Garrison:** You should have some defaults.

**Autumn Nash:** Yes.

**Justin Garrison:** But the problem was they're saying default was one year. And so they hint at that in this post mortem, where it's like "One year ago we ran this internal tool", created their cloud, they moved everything onto it... And a one-year migration is pretty fast, actually. For a large company on VMware, a one year "We're going into this environment" is one way to do it. But at some point, there was some cleanup scripts or some other thing looking at the environment, and this had this defaulted one-year period of "Oh yeah, this is gonna go away, because we made it with this internal tool", and the default was "Yeah, it's probably for trials, something so they can just make sure that like it goes away eventually.

**Autumn Nash:** Well, and because there's no customer intervention that asked them to delete it, they didn't get an email to notify them of deletion... Which is wild. Like, how are we deleting things without the "Are you sure? Are you sure-sure?" There should always be like three "Are you sure you want to delete everything?"

**Justin Garrison:** Yeah, the side channel of like "Oh, an internal person made this with an internal tool, so no customers were involved." It's like "But actually, this was for our customer."

**Autumn Nash:** Even internally though... Like, people switch teams, things start running in the background and you forget about it... We should still be notifying people, "Hey, are you sure you want to delete this?"

**Justin Garrison:** Yeah. And this is one of those things where you look at something like a root cause, or some initial point like "Where did this fail?" It's like "Well, things don't fail in a certain point, but you could trace it back to this one command." But the assumptions around that and how that actually failed, and is the person still at Google? Like, who cares? Like, it happened a year ago. All of that stuff --

**Autumn Nash:** Yeah. This is one of those things where it should not be fault. It should just be "How do we make sure we never do this again?"

**Justin Garrison:** And that's exactly what Google calls out in this post mortem, is like "This was one customer, in one environment. We went through and looked for anyone else that had these defaults, anyone else that used this internal tool..." Because now the hosted service, the customer-facing service allows you to do this thing that we couldn't do a year ago. So this would not happen again, but in their conclusions, they say "There has not been an incident of this nature within Google Cloud prior to this instance. This is not a systemic issue." And again, in the back of my mind was "You mean you deprecating things? Like, that is a systemic issue." But this technology --

**Autumn Nash:** Petty... Petty... You're gonna be on like three cloud companies' hitlist.

**Justin Garrison:** I will poke at all of them to make sure that it's better for other people. And we keep -- I mean, there's a whole site killed by Google. Come on. That's not me. I am not the person. You've never been on KilledByGoogle?

**Autumn Nash:** No...

**Justin Garrison:** KilledByGoogle.com.

**Autumn Nash:** Can we just talk about why I love this friendship? You're just randomly sending me links and I'm like "Where did you find it?!"

**Justin Garrison:** KilledByGoogle.com has more deprecated projects from Google than Amazon Web Services has services.

**Autumn Nash:** Dang...

**Justin Garrison:** I just opened it up. According to their thing right now there's 295 services that have been killed by Google.

**Autumn Nash:** It's so sad, because it's like the running joke that people just create like random ass services to get like promotions at Google, and then they let them die later, and I'm just like...

**Justin Garrison:** And the funny thing here is KilledByGoogle is a GitHub project. You can go PR it to say "Hey, there's another thing that got deprecated." I actually have a PR open still.

**Autumn Nash:** You can PR it?

**Justin Garrison:** Yeah, so I'm going to add this customer and see what they say...

**Autumn Nash:** Justin...! Look, we're gonna change the whole name of this segment to like "Tea with Justin." Or like "When dad jokes go savage."

**Justin Garrison:** We'll see what they say. I'm gonna go ahead and do that and we'll see. But I mean, again, this is just -- it's something that happens, it's one of those "You don't know until it actually happens to you."

**Autumn Nash:** \[01:08:07.28\] Look, there's always going to be stuff in software where \*bleep\* happens. But anytime you are deleting something, can we get like a three "Are you sures"? Are you sure-sure? Put Delete in here...

**Justin Garrison:** And the same defaults from a year ago are not the same defaults from today. And all the assumptions we made a year ago of like "This is safe to do..." It's one of those cases to me that's like when you ship your Bash script to production... This is literally what happened in the outcome, of like "Yeah, we shipped that Bash script, that internal tool to production, and this is how it comes back to us." Don't do that. Make sure that you have those checks when you're deprecating something internally.

**Autumn Nash:** I think this is why processes are important. People put so much focus on code, which obviously we're engineers, we write code. But processes to make sure you go back and are checking things, and making sure -- you know what I mean? You need to make sure that something that you put when you were starting does not stay in production. Processes are important, observil --

**Justin Garrison:** Observability.

**Autumn Nash:** Yes! And monitoring... It's so important to see how our customers are using things... And are things still live in production? Like, there's so many -- I don't know, I just feel like how did you not know a company with that much money was running something that was going to deprecate in a year and nobody got a flag, nobody got an alert?

**Justin Garrison:** It's one of those hidden time bombs inside of an infrastructure. Not even like a cert expiation, because if we think about back in the day... And like we were just talking to Anurag, the thing that filled up or crashed his GKE control plane was logs, right? Like, rotate your logs, folks. This is...

**Autumn Nash:** It's always crazy stuff like that. Like, with security, do people do something really crazy for most security breaches? Or do they walk in the front door? When it comes to like engineering, it's always like some very small thing that creates a crazy effect. It's partially the game, I guess, but also processes. I mean, they're doing a good job, I guess, with processes, to make sure it's better, and to be honest and to take responsibility for it. But I mean, that sucks. Your whole account... Like, we're not talking about a replica, we're talking about your entire--

**Justin Garrison:** Yeah. And they did have a backup. I mean, they do point that out in this, that they have a backup. Google worked with them 24/7 for - I forget how many days, to make sure that...

**Autumn Nash:** Oh, those engineers worked hard. I can't even imagine... Can you imagine getting that page? "We deleted a whole--"

**Justin Garrison:** Well, if you've never managed a VMware environment... I know the 24/7 over several days \[unintelligible 01:10:36.26\] progress bar of VMware reimporting VMs. Like, that's all you can do.

**Autumn Nash:** Okay, I just want you to know that your \[unintelligible 01:10:45.01\] level of this episode is my favorite. You're throwing shade at everybody.

**Justin Garrison:** I have watched enough progress bars in VMware in my life to know that 24/7 is -- yeah, I fell asleep next to the computer.

**Autumn Nash:** I think this is interesting though, because honestly, I feel like we're going to see more things like this. Not exactly this, but... Let's be real, Broadcom has lost its mind. It's so expensive. And they have cut so many people from VMware that we are going to see a massive exit of customers. And to do that, because it is such proprietary software, there are going to be lessons learned.

**Justin Garrison:** I really, really, really wonder what the world would be like if VMware was open source. If 15 years ago or whatever it was like -- it was a while ago; I don't remember how long ago, but...

**Autumn Nash:** Also, do you think this is going to change the way that people build and go into like licensing, or just...? I don't know, I feel like things have gotten really very -- when you start talking to different startups, it seems like people really want to be very cloud-agnostic. They want to be able to lift and shift very easily. And I wonder if this is going to influence how people build things, to make sure that their applications are easily lift and shiftable... Because we're kind of learning about what happens when you get stuck in a licensing.

**Justin Garrison:** \[01:12:09.01\] There's two points. There's lift and shift, and there's abstraction. Talking to Render - like, Render is an abstraction. And you don't know, you don't care if your application's running in GCP or AWS. There are abstractions over both, and they say "Here." And they're not even exposing the Kubernetes bits. You could find it if you wanted to, but it's not actually like "I want a static site, or a web application", whatever. That's the extraction portion of it.

The lift and shift portion is like "I know I need this level of control, and I need to have these primitives available. I need compute, networking, whatever. And I want to be able to move that around." And VMware was that. Literally, my first sysadmin job was like we had VMware, and that's how we actually -- we moved from Oracle, their VM platform that we had our systems on. It was on Oracle, Linux... That was my very first sysadmin job. And we moved that into VMware, and we replatformed, we converted all the VMs into VMware, and then that was our new portable solution for how we were going to move things around. But that changes. VMware has changed a lot over time...

**Autumn Nash:** It's crazy, because for Oracle used to be so well used. And then I think a lot of the licensing got into like all of that.

**Justin Garrison:** And people are worried a lot of times of like startups being bought, and then going away... But it's the big companies, too. Like, there was Oracle, and...

**Autumn Nash:** But it's also kind of like a middle ground, though. You want to be portable, and abstraction, and lift and shift, but also at a certain point in scaling you need to know what's underneath, so you can fix it, right?

**Justin Garrison:** You need to have access to be able to do that.

**Autumn Nash:** Yes.

**Justin Garrison:** For a certain amount of complexity.

**Autumn Nash:** But you need to know what it is. So not just the access, but you also have the knowledge of what you're running on, what problems you're gonna get into.

**Justin Garrison:** Yeah. The only worse thing than lock-in is lockout. Like, if I have to be stuck in VMware, but I can't access a piece of it... Like, that's worse for me from being able to do both things. And Kubernetes is that new open framework that a lot of people are going to with containers and everything else, and I can go from cloud to cloud... It's not abstracting the clouds away, it's not hiding that piece of it, but that gives you the controls to go down all the way to the bottom of your stack if you need to. Maybe you don't have control of the hypervisor, but you can go all the way down to the Linux Kernel and you can say "Hey, how deep do I go?"

**Autumn Nash:** But see, this is interesting, because there are those two -- we're talking about trade-offs here, right? But this trade-off, you're saying we're going from the enterprise-ness, we'll say, but you're going to open source. But if we don't invest in maintaining open source, and we don't invest in the open source community, you no longer have that option. So it's like interesting how those two things relate, right? And then not only do you need to invest in open source, but you also have to have people with that kind of knowledge. So it's like, do you want to be locked into a license, or you have to be very careful about making sure that the open source projects stay live and that you have people... Because Kubernetes is a skill. That is a skill, you know?

**Justin Garrison:** And let's not hide the fact that Kubernetes was designed and created by Google and open-sourced so that they could disrupt the cloud.

**Autumn Nash:** Yeah.

**Justin Garrison:** Like, they literally were behind in the cloud business, so they said "We need everyone else to think like us. And so we are making a thing that works like we do, and we are going to make everyone else use it."

**Autumn Nash:** Not just that, but when they -- like, Meta was completely honest when they talked about why they open-source things... Because when people contribute to it, it helps them to save money. I think it just shows you that importance -- people talk about open source, and it's something they want to do, and it's like warm and fuzzy, just like diversity... But also, it's like really important. You know what I mean? It saves the company money. It saves the fact that it gives them all these new tools, and it is very worthy of that investment.

**Justin Garrison:** Yeah. And back to the whole VMware point here - I keep looking at this pattern happen over and over again, where it was Oracle originally, everyone got off Oracle databases, because they were too expensive... It's happening again with VMware, because it was great to go on, it was portable, and we could move there, and now it's too expensive. And I think the next cycle, in my opinion, is happening with cloud providers, where the cloud providers are the new VMware. And I always have said, "Go all-into one cloud provider and use it to its fullest." But also, I've done plenty of mistakes in the past, where it was VMware and it was other things, and finding out what level of control you have to have, and how deep in the stack you have to go is important.

**Autumn Nash:** And that control changes as you scale, too.

**Justin Garrison:** Yeah.

**Autumn Nash:** When you're new, you don't have as many engineers, you're still trying to figure out your skill... So cloud is very, very good for that. And then at some point, it may be cheaper for you to do some things yourself, because you have more experience, and you have more people.

So I think being open-minded and just learning what you need has got to come back. We've got to stop having absolutes. There's a reason why software engineers say "It depends..."

**Justin Garrison:** For sure. Thank you everyone for listening to this episode. And if you are interested in sharing topics, or have someone that you would like to hear on this show, you can email us at ShipIt \[at\] changelog.com. We do read all the emails, we've been getting feedback and we really enjoy hearing from you on what episodes you like.

**Autumn Nash:** I love talking to all the listeners. They are so nice.

**Justin Garrison:** Yeah, there's also the Changelog Slack if you want to join in. We are in there occasionally, sharing stuff... I'm in the \#Homelab channel, as well as --

**Autumn Nash:** There's a Homelab channel that you didn't tell me about?

**Justin Garrison:** Of course there is. You don't have a homelab, do you?

**Autumn Nash:** No, but I want one...

**Justin Garrison:** Well, we can start. So... It's a good place.

**Autumn Nash:** You keep saying that and you haven't taught me how to run Sidero on Raspberry Pi yet.

**Justin Garrison:** I have YouTube videos for that. But everyone, we will talk to you again next week.

**Autumn Nash:** Bye, guys!
