**Jerod Santo:** Long-time listeners of The Changelog all know Gerhard Lazu... Recent listeners maybe not so much. If you've been listening back to last December, you've heard Gerhard's voice before, as he went to KubeCon and had some awesome interviews late last year. He's been a around for a while, and you've heard on our 2018 infrastructure, our 2019 infrastructure, and today on our 2020/21 infrastructure...

**Gerhard Lazu:** Yeah, 2020 never happened. If anybody asks me, it didn't happen.

**Adam Stacoviak:** That's right. We're skipping it.

**Jerod Santo:** For those who haven't heard about your, Gerhard - from our perspective maybe we consider him our SRE for hire, our remote infra guy that we call when we need help... And he's been helping us for many years, and we appreciate you for that. For the brand new listeners, Gerhard, what's your background? Where are you coming from?

**Gerhard Lazu:** So the one thing that I really enjoy is infrastructure... Even more so breaking it, understanding its limits, and then putting it back together. It's just this need to understand how something works at a very deep level, and then taking all the building blocks and putting them together much better than they were before. That's what we've been doing with Changelog.com infrastructure for many years. Half the stuff you don't even know... Right? It's being "Oh, my god!" \[laughter\]

**Jerod Santo:** \[00:04:14.01\] That's right.

**Gerhard Lazu:** It was all for the best, trust me. We took many systems apart, we put them together, we tried different components over the years... And I feel that right now we are in a very good place. As challenging as 2020 was, we managed to complete our migration to Linode Kubernetes Engine. For the listeners from previous years, we have been running on Linode for many years now; they have an amazing infrastructure, an amazing service, and we have a great relationship with them... And they somehow manage to keep things simple, even with all this complexity.

Over the years we had different setups, but right now we settled on a Linode Kubernetes Engine. It's simple, it's performant, it allowed us to do many things very quickly... And more importantly, it set us up for a great future.

**Jerod Santo:** Yeah. So to go back just a little ways - back in 2018 we were running Ansible scripts, and Concourse CI... You can go back and listen to that episode. We've done one of these per year for the last three years; this is our third annual infrastructure episode. In 2019 we replaced that stuff with Docker Swarm and a few other goodies I can't recall off the top of my head, but Gerhard knows inside and out... And these infrastructure setups all come with an accompanying blog post, open source code, how we did the decision-making... So that is also gonna be a companion to this episode, as Gerhard's annual blog post.

For 2020 we wanted to move from Docker Swarm into Kubernetes, which was really the goal and what we've accomplished here in October... We accomplished it before October, but here we are in October, talking about it. So tell us about where we were last year, and maybe the things lacking from that setup, things that we wanted, and how this transition is accomplishing some of those goals.

**Gerhard Lazu:** I think that's a really good place to start... Because last year, as exciting as it was to roll out that infrastructure for 2019, we were using Docker Swarm, and the big difference was that we didn't have to install Docker, we didn't have to do any of that management, because it came with the operating system. We were using CoreOS at the time, and CoreOS out of the box just had Docker, so we didn't have to install it.

So there were fewer things for our scripts, our Ansible to do, and we could switch to something like Terraform, and we could worry about managing not just the VM, but also integrating with the load balancer - NodeBalancer, in Linode speak - and it was a much simpler configuration. But it still meant that we had a single VM. And some might frown upon that, like "Why single VM?", but looking at our availability for the entire year, it wasn't that bad, and any problems that we had were fixed relatively quickly, except one; we may go into that later.

For the entire year, we had downtime less than four hours. That was pretty good for a single VM. So it just goes to show that some simple things can work, and you can push them really far. And I know that Jerod is a big fan of simple things, because they're easy to understand, when something goes wrong it's easy to fix it...

I know that Adam was really excited about us going to Kubernetes. We wanted to do that for a while, but the time wasn't right... And it wasn't right because Linode didn't have a simple, one-click Kubernetes story. You had to do a bunch of things... You could do it if you really wanted to, but it wasn't easy. And then, in 2019, at the end, November, the magic happened. Linode Kubernetes Engine entered beta; I was at KubeCon, I met with Hillary Wilmoth and Mike Quatrani from Linode, we gained access to Linode Kubernetes Engine, it was in beta...

\[00:08:13.27\] And with one command later, we had a three-node Kubernetes cluster. That was really simple; that was the experience that we wanted and we were waiting for. And once we had that, things kind of flowed from there. It was really simple to add all these other components.

Now, compared to what we had before, we had to worry about, I suppose, the migration from CoreOS to Flatcar, because CoreOS became end-of-lifed with the acquisition of CoreOS by Red Hat... So we had to do that migration, and we were approaching -- we knew that the end of life would come... So rather than doing that and continuing with a single VM/Docker Swarm complications, we went to something simpler, which was Kubernetes... Because we had this one API, and we could provision everything... Which meant less Terraforming. We didn't have to provision NodeBalancers, we didn't have to create volumes and then attach them to VMs using Terraform... We didn't have to do any of that. This Kubernetes API would do all of those things for us, which meant that it was a much simpler system to work with.

**Jerod Santo:** Now, when you say something simpler, probably alarms go off in people's heads, because they think "Kubernetes is simpler?!" Because Kubernetes has a reputation of being very complex, not simple. Do you think that's not true, or are you talking about from a different perspective it's simpler?

**Gerhard Lazu:** I think there is complexity in everything... So even if you have a single VM, some things may be simpler, but other things will be harder. So the trade-offs which we're making about packages, how to install them, where to get them from, volumes (as I said), formatting, how to format them - all those things you need to do. Load balancers, configuring them, TLS certificates... I mean, these things are still required.

**Jerod Santo:** Right.

**Gerhard Lazu:** Now, you may be familiar with that approach and maybe that's why you think it's simpler... But if you use something like for example External DNS for automatic DNS management, which is a component that you just deploy to Kubernetes, you don't have to go and manage your DNS with Terraform, or manually, or Ansible, or anything like that. And it's this combination of the different components which have matured over the years, which you run in Kubernetes, and then they in turn integrate with everything around.

For example, certificates - we used to pay for certificates before. Then we had to wire that together, and set it up in the load balancer, and set it up in our CDN, and do all those things. Now, with cert-manager it's much, much simpler. We are getting it via LetsEncrypt, it's all integrated, it all plays nice together.

So while what happens behind the scenes is so complex, these components that you can pick and choose, and with the maturity that comes over the years, it is a simpler setup.

**Jerod Santo:** So cert-manager is a Kubernetes component... What is it called? Is it a pod? Is it a kubelet?

**Gerhard Lazu:** Okay... \[laughter\] I see where you're going with it. Let me call it "additional components."

**Jerod Santo:** Okay.

**Gerhard Lazu:** it's an additional component that you install in your Kubernetes cluster, that gives you -- it extends the Kubernetes API with extra-knowledge. So your Kubernetes API - by default, you say "I want a deployment." Let's just go with a deployment. But then how do you ask it for a certificate? So once you install cert manager, it's a component that in a way teaches your Kubernetes API about certificates. So then you can say "Hey, Kubernetes, give me certificates." And cert-manager - it has a bunch of components inside, but let's say it's one thing - knows how to make that happen.

**Jerod Santo:** \[00:12:08.14\] Gotcha. So the complexity is on the inside. All of the difficulties and the confusion and the technical intricacies are on the inside, and if you can get is set up and configured and make use of it, your life is simpler, right?

**Gerhard Lazu:** Exactly. Those components are hiding the complexity, which will be there no matter what you do, no matter what you use... But they allow you to ask for things via the single API. And the thing which gets me really excited about Kubernetes is that everything is standardized between a single API... And it goes to the point like - you want a VM, or you want a resource, you talk to the same API, and all you have to do is install the right components, so the API or those components know how to translate your request into an actual thing, whatever you may want.

So load balancers - you no longer have to provision load balancers. Based on your provider, whoever you are getting your Kubernetes from, it knows how to translate that request into a load balancer. A certificate - same thing.

**Adam Stacoviak:** Why then did we have to wait for LKE to make it easier? I guess that's sort of a loaded question, to some degree, because every cloud needs to have its own Kubernetes engine; they have their own fork of it or version of it that sort of runs natively in their environment... It's probably because it needs to plug in in certain places... But we had to wait for LKE to make it possible. Like you had mentioned, we could use Terraform beforehand, and Ansible, and sort of do it ourselves, but LKE made it easier on Linode... Why is that?

**Gerhard Lazu:** First of all, the most important thing when you start off your Kubernetes journey in production - you want a managed Kubernetes. What that means is that you want updates to be applied automatically, you want the control plane, which is the API component itself; you want that to be setup separately from everything else... And you just want to consume this API. Not only that, but you want your Kubernetes cluster to be integrated with other things that that provider has... For example NodeBalancers in the case of Linode. And while you can install all those components, it's like cobbling it together.

So you want the vendor to give you an API that is already preconfigured with a bunch of things. Not only that, but when there are updates, you want your vendor to just take care of them. You can specify when you're okay to get updates, and you wanna specify maybe which versions of Kubernetes you want. Do you want the latest one, or do you want to be more conservative and stay behind? But you don't want to worry about updating the infrastructure; the core infrastructure, so to speak.

So in our case, we had to update CoreOS. That was our responsibility, to update the VM. But with LKE - we still have to do it, in the sense that we have to run the command, but that's it. We run one command and it will do it for us. And I'm hoping that not too far away from today, not too far in the future, LKE will be able to update itself based on a schedule. That would be the dream. The vendor will keep the API automatically updated, all the right versions for us already deployed, and then our only responsibility becomes the components that we add on top and inside of this API; as I mentioned, cert-manager, Ingress NGINX and a bunch of other things that we use.

**Jerod Santo:** Yeah. It's like for any application there are N concerns that must be taken care of, like Gerhard said. These things have to happen. Your DNS has to happen. Your certificates have to happen. And every application has its own number N. Maybe yours is 100; it's a pretty simple application. Maybe somebody else's is 1,000 things, or 1,200 things. Whatever it is. And the more of those you can take off your plate and onto your hosting provider's plate is just a win. It makes it more achievable for you to manage less, and then to manage more.

\[00:16:13.27\] And if you were just building your own Kubernetes deployment on top of a VPS, or on top of something that's not LKE or a Kubernetes engine, there's a whole bunch of things that you have to take care of now, that you'd rather not, because maybe it's not your domain expertise, maybe it's just a huge time sink. And the more they can do, probably better than you can do it, the better off you are.

**Adam Stacoviak:** It makes sense.

**Gerhard Lazu:** That's right. Another thing which - again, I'm making many assumptions here, but I'm going to mention this... It's the whole declarative nature of Kubernetes. You tell it what you want to happen, and it has this way of describing things, and it will just make it happen. So I don't have to tell it how it needs to get the certificate; I just tell it "These are the credentials. You just make it happen." And by the way, when it expires, "I don't care. I just want you to renew it." Because I never want an expired certificate, right? So always keep my certificate up to date.

The same thing would be true for some of our services, and I think that's where we are going next - we want this automatically-updating system; we want to automatically, for example, update PostgreSQL. Well, how can you do that if it's not a managed service, or if the component doesn't know how to update itself So that's another way that Linode, for example, could help. We know they're a managed database service, and that if we can provision those via the Kubernetes API - which I'm really hoping we'll be able to - then we can offload that responsibility to Linode again. We always say "Just give me a new one, give me a new one, give me the latest one... Do backups for me, and do all those things."

We are describing more what we want, and less of how that thing happens, because there's no value in our case to basically reinvent how we do database backups. Or monitoring. I would have felt that by this point things will have standardized. That's another thing that Kubernetes is - it's like a standardization of how to do monitoring, how to do logging... And to begin with, I know there's an explosion of ways, and there's so many ways you can achieve this, but I'm hoping that over time things will become like the clear winner, so to speak.

For example, we chose Ingress NGINX to do the TCP routing. But there's so many other ways you can achieve that. So how do you give all this choice and how do you give all these options to people, but at the same time have a set of building blocks that just kind of make sense? That's almost like the next frontier. And I see providers that offer more than just Kubernetes. That's the entry point, if you wish.

**Jerod Santo:** Sure.

**Gerhard Lazu:** But you get curated Kubernetes experiences which know how to do all these things more and more. Centralized logging, monitoring, as I mentioned, security built-in, policies - all those things.

**Jerod Santo:** Yeah, the declarative aspect is huge for me, because I like to just declare the way things should be, and I just don't care about the details anymore. I remember as a young man I really cared about the details, and I loved scripting. I'm like "I'm gonna write this script." A, and then B, and then C, and then maybe run D, but maybe not... I took joy... I still like to script things sometimes, but I really took joy in the details; the imperative details, the programming of how to roll out a thing. I used to roll my own deploys with Rsync, and all that kind of stuff. But I just don't have time for that.

I just wanna say "Hey, I want an SSL certificate on this domain, and I want it to always be fresh. And I just want to configure it. The details of how that happens are just not my concern." And it's really a shift. It feels good to just be able to declare... I mean, there's almost like a God complex, like "I declare this is gonna happen", and then it happens. It's like "Ah, that feels pretty good." So I think that's definitely a holy grail and a shift from a time where everybody was writing code to do their operations, and now we're writing YAML to do our operations... Whether you like YAML or not, it's a lot simple than a Turing complete, although -- is YAML Turing complete? It might be... It's simpler than code, generally. Gerhard, you probably know - is YAML Turing complete?

**Gerhard Lazu:** \[00:20:25.08\] I don't know. Honestly, I don't know. Mind blank, because I'm already thinking about something else, so I don't want to lose my idea...

**Jerod Santo:** \[laughs\] Okay, go ahead. Move on.

**Gerhard Lazu:** So not only that you declare how you want things to be, but if anything diverges from what you declared, it will automatically try to reconverge back on that point. And that's the really cool thing about VMs going away. You can lose a VM, and it's okay, because the system knows what you want, and if that's not true, it will try to reconcile on that state. So you no longer have to worry about VMs going away and your apps going down, or your database going down, or whatever. It will automatically spin up on one of the healthy VMs. Not to mention about a resource like finding where to put things - you don't have that problem anymore.

I remember many years back, when Kelsey Hightower gave a Tetris demo... That was it. That was like Kubernetes in one very simple picture. It will figure a bunch of things out that you thought were important, but aren't. And figuring out what your capacity is, and where you need to put things, do you need to go up or do you need to go down in scale - all those things can be taken care of. I think that's super-powerful.

**Break:** \[00:21:43.25\]

**Adam Stacoviak:** It's worth noting that we don't really need what we have around Kubernetes. This is for fun, to some degree. One, we love Linode, they're a great partner... Two, we love you, Gerhard, and all the work you've done here... We don't really need this setup. One, it's about learning ourselves, but then also sharing that. Obviously, Changelog.com is open source, so if you're curious how this is implemented, you can look in our codebase. But beyond that, I think it's important to remind our audience that we don't really need this; it's fun to have, and actually a worthwhile investment for us, because this does cost us money (Gerhard does not work for free), and it's part of this desire to learn for ourselves, and then also to share it with everyone else... So that's fun. It's fun to do.

**Gerhard Lazu:** \[00:24:07.29\] There's something which I'd like to add here... And I would like to answer the question of "How does this help you, the Changelog listener?" Kubernetes is everywhere, you can't avoid it. There's a lot of documentation, examples, guides, but we go beyond that. We show you how to to run a web application in production with Kubernetes, which apparently everybody is doing these days, or trying to figure out, and there's so many opinions...

So how do you actually do it? Well, we show you how. Changelog.com itself runs on Linode Kubernetes Engine. It's proof that it's easy, straightforward, and it works. And we have all the commits to back this up, we have all the code to back this up, we can see what choices we've made... And I really love what we have built, and I really love that we can keep it real. We can still deliver business value; no one stopped anybody from shipping, and it's just a bunch of us. It doesn't take teams of 10-20-30 people to do this. It takes a person, an hour here an hour there; when you add it all up, maybe it's a few weeks... In 5-6 months, however long it was... It doesn't take that long.

And we enjoy working with our partners, we enjoy working with Linode, and I would like to give a shout-out to Andrew Sauber, a frontend engineer that has been with us through all this. We have not only been improving Linode Kubernetes Engine, but we also had some discussions about the improvements that would make sense. Maybe things that weren't as obvious until we started using it, or a bunch of people started using it and giving all this real-world feedback.

So we want you to succeed with Kubernetes. Changelog wants you to be successful with Kubernetes. And not only that, the entire ecosystem. There's so much choice. And we haven't made the best choice, but we made the choice that makes sense for us, given our constraints, and it works. We are transparent about it, we share everything, and it's all out there.

**Adam Stacoviak:** Yeah.

**Jerod Santo:** Let's talk some more about some of the choices that we made. Like Gerhard said, these are choices that we made for our circumstance and our application. They're not necessarily the ones that you should make, but it's an example of a choice that you can make, and we can give our thoughts and opinions on whether or not it's working out, or was it a good choice/bad choice, why did we choose that... Part of that is what this show is for, but also continuing forward after this show we'd love to have conversations with listeners and everybody about these things.

We mention a few components of the Kubernetes API that you put together. The cert manager, you mentioned NGINX Ingress... There's also some external DNS... Is there any other DNS management -- is it the exact same thing as cert manager, only it has a different function?

**Gerhard Lazu:** It's an extension; it's a DNS simple extension, so that we can provision wildcard TLS certificates. We needed that to do the integration with our DNS provider, which is DNSimple. Those are the four core components, and I simply picked them based on maturity, based on community, based on how things are going... And integrating them was fairly simple and straightforward, and you can see how we've done them.

Ingress NGINX - super-simple for TCP routing, and it automatically integrates with our NodeBalancers, so that was great... I'm not going to go over all of them, but what I'll mention is I'll mention about QPrometheus, which is an operator that we use to set up Grafana and Prometheus for Changelog. If you go to grafana.changelog.com, that's basically where we host all the metrics for Kubernetes. What we don't have currently, but we would like to add is integrating Prometheus with all the services that we use.

\[00:27:59.11\] For example, for our database we use the Crunchy PostgreSQL Operator. So we would like to integrate QPrometheus with our PostgreSQL database. Same thing for Ingress NGINX, which we currently don't have; we're just looking at Kubernetes metrics and system metrics... But it's relatively simple and straightforward to add all those extra things, and I suppose that's what's coming next, so we have better visibility into what happens inside of Changelog.com and all the services that we depend on.

**Jerod Santo:** Another aspect of the setup you have is Keel, which was news to me... We also have K9s, which is the coolest part of the setup from my perspective...

**Adam Stacoviak:** It sure is.

**Jerod Santo:** ...so we should talk about that. But as we get into Keel, it might be useful - it's useful for me as well, even as someone who's a part of this party - to just understand what does a deployment look like? From "I push a commit to our master branch on GitHub", to what happens then? Because we have a GitHub-based deploy; we're pushing in it deploys on our behalf... Can you walk through just like the "This, then this, then this", the nuts and bolts that I don't wanna have to care about, but when things break down, we have to care about?

**Gerhard Lazu:** Okay, so let's just introduce Keel very briefly...

**Jerod Santo:** Sure.

**Gerhard Lazu:** Keel automates updates of Helm deployments, or daemon sets, or stateful sets, or deployments... So when there's an update to an image or to something, it will automatically update -- or it can update based on certain rules whatever is running in Kubernetes. In our case, we use Keel to trigger automatic updates for the app itself. And there's a bit of controversy here in that GitOps is up and coming... And I don't wanna go into that now, but that's another approach. So one approach is through GitOps, and use Flux, or ArgoCD, or use something like Keel, which goes against some of the things that GitOps stands for. But I'm not going to go into that now.

**Jerod Santo:** Okay.

**Gerhard Lazu:** To your second question, "How does everything work?", in 2018 I made the decision to separate building and publishing and testing from the actual deployment. So what you actually have is CIs that deploy code into production. And I think that is very dangerous and very wrong, because your CI has the keys to your production environment. And I wouldn't do that.

So our CI stops at publishing images to Docker Hub. A push to GitHub triggers a build in Circle CI, which runs tests, which compiles assets, and if everything is fine, it pulls dependencies and it builds a Docker image. And the last step is to publish the artifact - the Docker image or the container image - to Docker Hub, and that's it. That's where CI stops.

Now, what we used to have before - we had this very simple loop that would continuously update the Docker service. It was super-simple. If there's a new one --

**Jerod Santo:** Is this like a \[unintelligible 00:31:05.24\] kind of a thing?

**Gerhard Lazu:** That's it. That's exactly it. It was like three lines of code. Super-simple. So Keel is a bit more complex than that, but the principle is very simple. Because why wouldn't you want to run the latest version of your app that passes all its tests, and has all the dependencies in production? Why wouldn't you want that? That's what we want, right? You want your commits, if everything is fine, to go into production, right? That's what you want.

**Jerod Santo:** Right. Maybe the only time I think you wouldn't want that is like what if it mismatched your database schema or something? That was unable to resolve, and then you wanna roll it back? But you wouldn't know that till you rolled it out, so of course you want that.

**Gerhard Lazu:** Yes. If you have migrations, by the way, you run -- every deploy runs migrations... So when the new app starts, we do blue-green deploys, by the way. It's all handled very nicely by the deployment model in Kubernetes, so we don't have to worry about any of that... So when the new version comes up, you run the migration, and maybe something can go wrong, so yes... But if the app fails to start, you have readiness probes that will not put it in the load balancer. And if it crashes - well, there you go, it crashes.

**Jerod Santo:** \[00:32:19.23\] What's a readiness probe? Is it like a thing that says "Hey, are you ready? Hey, are you ready?"

**Adam Stacoviak:** \[laughs\]

**Gerhard Lazu:** So there's a startup probe, there's a liveness probe, and there's a readiness probe in Kubernetes. They are the three types of probes. The readiness probe determines when the pod is ready. And ready means "When is it ready to serve traffic?" in the case of a web app. So you need to be listening to the TCP socket that you say you'll be listening, and maybe you can do checks and we determine if you get 200 back. So is the HTTP response 200? And if it is, the app is ready to be put in the load balancer.

**Jerod Santo:** So you declare what ready looks like.

**Gerhard Lazu:** Exactly.

**Jerod Santo:** Gotcha.

**Gerhard Lazu:** So the app may keep crashing, and that's okay; the old app will not be taken down. And until the new app is ready, it runs all the migrations and everything is fine; it won't promote it. There is a risk of the new version during a migration that the old version can't work with.

**Jerod Santo:** Right. I was just thinking about that.

**Gerhard Lazu:** And then you will have taken production down, yeah. But in all the years that you've been working on Changelog, how many times did that happen?

**Jerod Santo:** I can't think of one...

**Gerhard Lazu:** Exactly, zero. \[laughter\] So in four years it never happened. Phoenix 2016 - that's what I remember. Since we started developing in Phoenix, we've never had that situation happen to us.

**Jerod Santo:** No. Well, and our schema is pretty stable. It's rare at this point that we make massive changes to our schema. These things are pretty well thought out, and in-place, and working... And usually, it's additive. Every once in a while I'll decide I actually hate the name of something I named four years ago, and because I'm pedantic and a completionist, I can't merely rename it in the code, I also have to rename the database table, because there's a mismatch, and I can't have that. And that would be a major change... Like, "I'm gonna rename a database table." But it's very rare.

So most of the changes then are additive. I'm gonna add a key, I'm gonna add a column, we're gonna add a new table because we're trying something new - these things rarely cause data problems and migration problems.

**Gerhard Lazu:** Well, again, in four years I don't remember one, so...

**Jerod Santo:** Right. Me neither.

**Gerhard Lazu:** So we've never had an issue with this.

**Jerod Santo:** But what if -- here's where we can spend all of the money as engineers... "What if...?"

**Gerhard Lazu:** I know, right? That's the danger.

**Jerod Santo:** And that's where you spend all your money... Right there, on that "What if...?"

**Gerhard Lazu:** Exactly.

**Jerod Santo:** Anyways, keep going.

**Gerhard Lazu:** So Keel does something very similar to what our while loop is doing, but a bit more, in that Docker Hub now sends a webhook to Keel, or listening like on a public IP; there's a host, and it listens on these webhooks when there's been an update to the image that we publish. And if there has, Keel will trigger an update to our deployment. It all happens seamlessly, automatically; the new version comes up, and everybody's happy.

It also does periodic polls; it's polling Docker Hub to see if there's a new version. If there is - maybe the webhook failed to be sent, or we missed it - I haven't seen it happen. What I did see happen is Keel locking up. We just saw that before the show, by the way... But we're not running the latest version of Keel. So maybe that's something worth updating, I suppose. But other than that, whenever you do a commit, a few minutes later you have it in production. And it's been like that for years for us. So it works, and it's simple.

**Jerod Santo:** There you go.

**Gerhard Lazu:** Now, we can make it a lot more complex, and I would like us to look at GitOps sooner or later.

**Jerod Santo:** Tell us what GitOps is, because you keep saying "I'm not gonna talk about that." I don't know what it is; is this like you let your Git do your ops? What's GitOps?

**Gerhard Lazu:** \[00:35:59.12\] Okay, so GitOps is a way of implementing deployments. You have continuous deployments, you're continuously deploying code, but it's a way of implementing -- it can use deployments in cloud-native applications. So if you're using Kubernetes, you're cloud-native; or at least that's the tagline. And what GitOps does - it allows you to define everything about your application using Git, including which version you should be running in production.

So if were using GitOps with Changelog, there would be a commit for every single deploy, which would need to be approved, merged somewhere, so it would roll out the latest version.

**Jerod Santo:** Gotcha.

**Gerhard Lazu:** So basically versioning what runs in production. To some extent we already are doing that, because all our YAML that defines all the Changelog services is in Git.

**Jerod Santo:** Right.

**Gerhard Lazu:** What we don't have - we don't apply those changes by some sort of like an automated system. It's either you, or me, that says "Apply". But we have make targets which apply all those things, and that's how we roll out changes. But for the app, which changes a lot more often - we don't run commands, or we don't have a CI running commands every single time there's an update. We don't do that. We have Keel that automatically updates whatever is running in production.

**Jerod Santo:** And why would the GitOps advocates say that we're "doing it wrong"? It's because they want that history? They want that to be like an atomic aspect of their application; deployments to be explicit, atomic, logged things. Is that why?

**Gerhard Lazu:** Yes, that's one of the reasons. The other reason - the more important one - is you always know what you're running in production. So if I asked you "What version of the app we're running now in production?", you say "Master." But master always changes.

**Jerod Santo:** Sure.

**Gerhard Lazu:** So imagine if you're deploying 100 instances of your app - just imagine about that for a second... If you're deploying 100 app instances, by the time the 90th instance gets spun up, if it's looking at master, it may pull a different version, because master may have changed during the deployment. And if you have many developers pushing lots of code, and master always keeps changing, then you could have multiple versions of your application running and you wouldn't even know it.

**Jerod Santo:** Gotcha.

**Gerhard Lazu:** Not to mention that when something crashes, and master has changed - again, the version that you thought you were running will change, because you pulled the latest image. And there's a bunch of things -- for example in Kubernetes you're advised to use versions, the exact version of what you're deploying, like you're image. Well, we're using latest. And latest means whatever is latest, and that changes. So from that perspective, we are breaking the fully declarative, in a way, because we can't recreate the same thing... Sorry, not declarative; idempotent. We don't have idempotency because multiple runs will end up with different states, because latest is fluid. It can be anything.

**Jerod Santo:** Gotcha.

**Adam Stacoviak:** So does Flux then - or ArgoCD - do they capture the version for us, essentially?

**Gerhard Lazu:** Yes.

**Adam Stacoviak:** That way all the instances that roll out - or potentially roll out, if we have more than one...

**Gerhard Lazu:** Exactly. And every single change is versioned, yes... And tracked separately. But right now, all our code, including the infrastructure code, is a single repository. With ArgoCD or FluxCD you need another repository that tracks what gets deployed... Because if you think about it, if a commit triggers another commit, and the commit triggers another commit, you have a continuous loop of commits triggering commits, and it never ends. So you have an infinite commit loop. By capturing what you've deployed, you're bumping the version of the artifact that's getting deployed, and you just end up with that.

**Jerod Santo:** It just recursively does that.

**Gerhard Lazu:** Exactly. So we need to have another repository which keeps track of what gets deployed. And from our perspective, we wanted to keep Changelog self-contained, in that if you pull down one repository, you have everything there.

**Jerod Santo:** Yeah, we used to have two repos. We had an infrastructure repo and we had the source code repo...

**Gerhard Lazu:** \[00:40:18.17\] Exactly.

**Jerod Santo:** And we were happy to get rid of the other one, and have just one place where everything lives... So it's simple.

**Gerhard Lazu:** Yeah. But maybe we can somehow configure the CI to ignore certain commits, so it won't build if certain paths change; I know that is possible in some CIs. And then we can also maybe do Argo, or Flux, whatever we choose, to maybe not deploy every commits, maybe be a bit more selective... I don't know. I don't know. But maybe we can exclude -- basically, we can break this infinite loop.

**Jerod Santo:** Yeah.

**Adam Stacoviak:** So does a new version get spun up every time there's a new push to master? So if I'm working on something and Jerod's working on something, and we just happen to push in similar timeframes, his push triggers a new version in this GitOps world... His push initiates a new version, mine does too, and obviously latest in would be the latest version, and eventually to get to my version, if I'm after Jerod, for example. So if Jerod commits, then I commit, and there's two new versions in a roll-out, but mine being the latter one, it will be the latest version that's rolled out... So it'll eventually just get to it. So there's a timeframe potentially even in there, because you have to initiate or stand up two different versions, roll that one out, and then roll the next one out. Is that roughly a scenario, is that how that works?

**Jerod Santo:** That's how ours works... Right?

**Adam Stacoviak:** Right.

**Gerhard Lazu:** Ours works exactly the same way, but basically Keel will trigger multiple deploys. So every push, to go through the pipeline, takes a few minutes. So even if they enter at the same time, and we don't have parallelism, so we do one build at the time... So Jerod's build, in your example, goes out, gets deployed, a few minutes later your build arrives and goes out, again... So you have two deploys within the span of a few minutes.

But right now we have a single app instance. We don't have multiple apps running in production, and there's reasons for it we don't need to get into now... But we have only one app version, one app instance running at any point. If we had 100 app instances, which were running across (let's say) ten hosts/VMs for scalability reasons - which, again, we don't have; but what if, to go back to what Jerod was saying - then we may have problems.

**Adam Stacoviak:** Yeah. We're solving our problems, not everybody's, but we're at least showing that it's possible, I suppose, and aware that we can, not so much that we need to... Which is important.

**Gerhard Lazu:** Yeah. We chose Keel because it's really simple. A lot of choices which we've made is because it's simple, and it suits us... And I would argue that it would suit the majority. Unless you're a really big team, with a really big Kubernetes deployment and investment, and all that; then you may need to do things differently, most certainly than not. But if you're a small team, of let's say up to ten people that have a bunch of apps, this may work perfectly well for a long, long time.

**Break:** \[00:43:12.26\]

**Adam Stacoviak:** Let's talk about availability, because one of the reasons why you even build this kind of infrastructure is for resilience, for availability... And I suppose to test that, let's take the site down.

**Gerhard Lazu:** I love that idea. I think that's the best idea we've had all evening.

**Jerod Santo:** I think so, too.

**Adam Stacoviak:** Before we do that, what's gonna happen? What should happen?

**Gerhard Lazu:** Okay, so what should happen is we have a three-node Kubernetes cluster. The application and the database are running on one Node, they're close together, and when we take the VM down, another VM will just delete the node, another VM should be created, and in the meantime the website, the app should migrate in the database from the VM that was deleted, onto one of the other two VMs which are still running.

**Adam Stacoviak:** Okay. When I say VM, it's basically these Kubernetes nodes; we have three, so we delete one... We expect Linode to recreate the VM, reprovision, notice that "Hey, there should be three. There's only one." And in the meantime, we expect the website to be recreated on one of the other two VMs and the database, and everything to be back together. That's what we expect to happen.

**Jerod Santo:** Okay. What are the odds?

**Gerhard Lazu:** What are the odds...?

**Jerod Santo:** Where are you sitting? How many nines around thinking this is gonna work?

**Gerhard Lazu:** So I don't expect this to take more than ten minutes. Last time when I tried this it was seven minutes. How many nines? Less than 0,000-something...

**Jerod Santo:** Well, not the nines of availability; how many nines are on your confidence level? How confident are you?

**Gerhard Lazu:** Oh, I see.

**Adam Stacoviak:** 99,9?

**Gerhard Lazu:** There's a lot of nines, let me put it that way...

**Jerod Santo:** Okay. \[laughter\]

**Gerhard Lazu:** There's a lot of nines.

**Jerod Santo:** Alright. More than I have. Let's do this.

**Gerhard Lazu:** Well, if it doesn't work, then we can fix it, right?

**Jerod Santo:** Right, and we can just edit the show and act like it worked.

**Gerhard Lazu:** Exactly. \[laughs\] But no, I think we should leave the real thing, with proof how long it took, and all that.

**Jerod Santo:** Okay. Listeners, listen closely. There will be no edit stops here. There will be no breaks. Here we go.

**Gerhard Lazu:** Let's do this.

**Jerod Santo:** Okay.

**Gerhard Lazu:** \[unintelligible 00:46:47.03\] let's go to nodes... And I'm going to delete it. 29B. There we go, delete note. I can't delete a node from here; okay. I can't delete a node from here. I need to go to the Linode cloud console. That's okay...

**Jerod Santo:** Oh... Logistics.

**Gerhard Lazu:** Logistics... Yeah. Because I can drain it, I can do other things; I can't just delete a node. You're not supposed to do that.

**Jerod Santo:** So you were trying to access it through K9s, which is a really cool CLI, an awesome terminal app for accessing all the information about your Kubernetes clusters. But it does not give you the ability to delete things, apparently.

**Adam Stacoviak:** Yeah.

**Gerhard Lazu:** Not nodes.

**Jerod Santo:** You can't delete nodes, for safety reasons.

**Gerhard Lazu:** We're going to delete the VM. Not power off, not reboot. Delete.

**Adam Stacoviak:** Are you ready?

**Jerod Santo:** See, I'm nervous. This is from now the Linode cloud admin.

**Adam Stacoviak:** Are you sure you wanna delete this?

**Gerhard Lazu:** I am.

**Adam Stacoviak:** This is permanent.

**Gerhard Lazu:** I want to take Changelog.com down, and see how long it takes before it comes back up.

**Adam Stacoviak:** Alright. I'm starting a stopwatch, too.

**Jerod Santo:** Here we go.

**Gerhard Lazu:** This is proof of the pudding. If the pudding is good, this will work.

**Jerod Santo:** Alright, here we go.

**Gerhard Lazu:** Ready? Delete. Boom. The VM is gone.

**Adam Stacoviak:** Stopwatch started... We'll see.

**Jerod Santo:** I expect to get an email from Pingdom here very shortly...

**Gerhard Lazu:** It will take a minute.

**Jerod Santo:** \[00:48:03.13\] ...as well as a push notification to my watch.

**Adam Stacoviak:** Walk us through why the ten minutes. What's the window there? Why is it roughly ten minutes? Why is it not more than ten minutes? What's happening behind the scenes now?

**Gerhard Lazu:** So behind the scenes the VM is going away, being deleted, being stopped, going away. The app will stop working, and it will take a while for the Kubernetes to figure out that the node is not healthy. So we can see that the node is still ready, according to K9s/Kubernetes, but we know that we have deleted the VM. It will take a while for that to be deleted. And when it's properly gone, when it's no longer there, the physical VM has been powered down, we expect Kubernetes to try to recreate the app on another node, that's healthy and ready to go.

So it's still up... We said delete VM; it's red, we can see it, but has it actually been deleted?

**Jerod Santo:** I just got a notification from Pingdom that we are down.

**Gerhard Lazu:** There we go. So now Kubernetes confirmed that. We no longer have the node. So now what's going to happen, if we look at the deployment, if we look at the app - there we go, it's down... And it has not been created anywhere. So what's the reason? It's persistent volume claim, a reference to a persistent volume, and then the same namespace; I think that's okay. \[unintelligible 00:49:20.15\] replicas unavailable. Where are the events... Let's go to Event... Polled 95 seconds ago, everything's fine... We polled all these things... Still fine.

**Jerod Santo:** Still waiting.

**Gerhard Lazu:** It's not a problem. Let's see maybe at Pulse... Oh, there we go - Warning. Failed Attach Volume. That's what you're waiting for. So multi-attach error for volume PVC. This volume is already attached to another VM, the one that we deleted it.

**Jerod Santo:** Because you've gotta detach it.

**Gerhard Lazu:** Exactly, before it can reattach it to another VM.

**Jerod Santo:** And that takes some time.

**Gerhard Lazu:** That takes some time, exactly. I don't know -- well, last time when I tested this, it took seven minutes, end-to-end. In seven minutes everything was back up. We're still down, by the way...

**Adam Stacoviak:** So answer this then... I go to Changelog.com and I get a 503 - service is down, essentially. Unavailable.

**Jerod Santo:** Right.

**Adam Stacoviak:** But via ping, in the terminal - I'm pinging Changelog.com - I'm still getting a ping.

**Jerod Santo:** Is that the NodeBalancer?

**Gerhard Lazu:** That is the NodeBalancer, exactly.

**Jerod Santo:** Yeah.

**Gerhard Lazu:** Not only that, but we're hitting NGINX.

**Jerod Santo:** Right.

**Gerhard Lazu:** So we have NGINX deployed on every single VM, on every single Kubernetes node, so we have three instances of NGINX Ingress. So you can get NodeBalancer -- you can get to NGINX, which runs in Kubernetes, but you can't get to the application. There's no application running, so it can't service these requests. So you're getting 503s.

**Jerod Santo:** This is a lot like chaos engineering here, only we are manually introducing -- we are the chaos monkey, and we are monkeying with ourselves while we record a podcast... So it's like a step beyond, like even more idiotic than chaos engineering; that's what we're doing right now. But so far, we think it's working, and so that makes us feel good... But it's just kind of "hurry up and wait" to see if this thing can get reattached and go from there.

**Gerhard Lazu:** Yeah.

**Adam Stacoviak:** Well, we're 3 minutes and 40 seconds in, according to my stopwatch.

**Jerod Santo:** So Gerhard, we had a downtime -- so the difference between this and our old setup is this is gonna auto-heal, as long as it works as advertised... Whereas last year we had a downtime which lasted multiple hours, where it got into a state that it was never gonna -- it doesn't auto-heal. I had to basically drive home and get a hold of you and figure it out. Do you wanna tell that story a little bit, while we wait here?

**Gerhard Lazu:** So last year what happened - the Docker service under which... We had a single VM back in the day, and we were running Docker Swarm on a single VM, and the Docker service was not configured to automatically start. I was expecting, to be honest, for the operating system to have this essential service by default started, but that was not the case.

\[00:52:10.15\] So we had to manually start the Docker service, so that everything else would basically come back up. That was the problem. Obviously, we've fixed it since, but the Docker service - the Docker daemon in that case - was not running, meaning that there was no Changelog app, no database, none of those things.

**Jerod Santo:** Right. And that Docker service wasn't managed -- or was supposed to be managed by CoreOS, but wasn't being, or something like that.

**Gerhard Lazu:** It wasn't configured to automatically restart when the operating system restarts. So what can we see here is now we can see that the volume failed to mount after it failed to attach it. Now it attached the volume, so we can see that both the database and the application have the volume attached... And what I expect to happen very soon - the application to spin up.

We can see the container is creating both the application and the database. We can see they tried to create it for 3 minutes and 40 seconds. Basically, it was aware -- that's when it started being aware that "Hey, I have to recreate this pod." The app pod and the database pod.

So four minutes, container creating... Let's see what's the state of it. If we describe it - successfully assigned, the multi attach was fixed... Let's see if we look at the logs; there's nothing there. Database backup; still container creating. We're in container creating.

This one's ready now -- no, sorry; it has just readiness probe. Let's see what state it's in. Still container creating. The database is already running, that's a good sign; there we go, we have PostgreSQL secondary, and following a leader, so this is the leader now... The leadership changed. I'm not going to go into details now...

**Jerod Santo:** No, I like this. I feel like you could be a play-by-play commentator.

**Adam Stacoviak:** Play-by-play! This is like a sports announcer.

**Jerod Santo:** That's right. This is like the radio, when you're trying to listen to the game and you have no idea what's going on, and he's telling you which direction they're running... You're over here, telling us exactly what K9s is reporting back.

**Adam Stacoviak:** That's right. Here on K9s Radio...

**Gerhard Lazu:** \[laughs\]

**Jerod Santo:** And Adam and I have the advantage of the visuals here. The listeners are like "What is going on over there...?"

**Gerhard Lazu:** Yeah. The website is still down.

**Jerod Santo:** Here's what's going on, listeners... The website is still down, and Gerhard is trying to give us confidence here that it's coming back up. It's coming.

**Gerhard Lazu:** Well, I have confidence in this. All I have to do is basically let it play out. I know the right thing will happen, it will reconcile... Running. There we go. The app is up. Yes, baby!

**Jerod Santo:** The app is running.

**Gerhard Lazu:** Five minutes later, according to this... How much do you have, Adam, on your stopwatch?

**Adam Stacoviak:** Seven minutes.

**Gerhard Lazu:** Are we back up?

**Adam Stacoviak:** I don't see it up on my side.

**Jerod Santo:** Pingdom hasn't told me yet.

**Gerhard Lazu:** Okay. Let's see.

**Jerod Santo:** Let me see if I can refresh the page here...

**Gerhard Lazu:** Look at that. It's booting... The app is booting...

**Jerod Santo:** No. I'm still unavailable.

**Adam Stacoviak:** Ping never failed, so that's good... Load balancing happened...

**Gerhard Lazu:** And we're back, baby.

**Adam Stacoviak:** Yeah, that's true. Okay, official time is 7 minutes and 35 seconds, according to at least my refresh.

**Gerhard Lazu:** There we go.

**Jerod Santo:** Cool.

**Adam Stacoviak:** Very cool.

**Gerhard Lazu:** Too overwhelmed, or underwhelmed?

**Adam Stacoviak:** And the dashboard that provided all this was K9s.

**Gerhard Lazu:** It was K9s. It's a great--

**Adam Stacoviak:** You can watch the play-by-play of failure, essentially. Is this official observability, or are there better tools? Or is it just capable enough to be good for us for now?

**Gerhard Lazu:** Okay, so K9s is an Ncurses interface to Kubernetes, which means that you can do things really quickly, really efficiently, by just using shortcuts. It runs in your terminal, and you can do all sorts of amazing things with Kubernetes, without having to type all those commands, without having to worry about shell autocompletion, or whatever...

If I remember correctly, K9s actually won an award recently... A CNCF award. I'm googling this up as I speak, what happened with K9s. K9s award... K9s Kubernetes... I wish I remembered this. It was ten open source... No, that's from last year, 2019. There was something in 2020 that K9s was mentioned on Twitter... 2020 K9s grant... No, that's something else.

**Adam Stacoviak:** I know Jerod logged it at the tail end of 2019...

**Jerod Santo:** \[00:56:15.23\] I logged it just recently again.

**Adam Stacoviak:** ...and then again this year, whenever you had a chance to play with it...

**Jerod Santo:** Yeah, I had to log it again because I started using it finally, and I was like "Oh yeah, this thing is awesome", so I logged it again after Gerhard showed it to me.

**Gerhard Lazu:** Okay... It's great to see pods being scheduled quite a bit; it uses a lot of CPU... There was something here that was mentioning the K9s won something, and the developer for K9s was recognized for something... I forget the exact detail. Anyways, we can look it up and we can link in the show notes... But K9s is a really easy way of just jumping around your Kubernetes cluster, having it play with different resources, tailing the logs...

For example, I'm on the app container right now. If I press S, it asks me which container I want to open a shell in. Right now I open the shell in production on the production app. One command away. And it makes stuff like this really simple.

**Adam Stacoviak:** Yeah.

**Jerod Santo:** Which is excellent.

**Adam Stacoviak:** What you did beforehand... Just completion foo... What did you do?

**Jerod Santo:** Well, I would SSH to the server and then connect into the Docker container, and then go from there. That's what I would do on the previous setup.

**Gerhard Lazu:** Yeah. So the equivalent would be if I do Kubernetes exec it, which pod - app, which container - app. So this is what I need to run. And then what do I want to exec? You must specify \[unintelligible 00:57:41.03\] So this is what I would need to do - deprecate it, exec pod... There we go. I need to do dash dash, pods not found... So what's the name of the pod? Let me go back out, because the pod -- there we go; it's this, basically. It has like an...

**Jerod Santo:** You've gotta find the pod name, yeah...

**Gerhard Lazu:** So that's what I need to do to...

**Adam Stacoviak:** It's a very visual dashboard to Kubernetes, essentially.

**Gerhard Lazu:** Oh, hang on. I know what the problem is. The problem is that I need to namespace... There we go. It's stuff like this. They need to be in the right namespace...

**Jerod Santo:** Shout-out to Fernand Galiana, a.k.a. derailed on GitHub, the author of K9s. Super-cool tool. Thanks, Fernand, we appreciate it. Hey, it looks like he offers corporate training for Go and Kubernetes... So there is your shout-out, Fernand.

Awesome, Gerhard. Well, the availability is back. Now, you mentioned last year we had almost four hours of downtime. We just experienced seven minutes of downtime here...

**Adam Stacoviak:** Which we should deduct from our actual downtime...

**Jerod Santo:** But how are we doing so far this year? We're doing much better.

**Gerhard Lazu:** Definitely. So last year, 2019, we had that pretty bad downtime due to the Docker service. That was actually almost two hours we had of downtime, due to the misconfigured Docker service. So for the whole 2019, our availability SLI was 99.96. So three nines and a six. Which means that were down for 220 minutes for al lof 2019. We had 50 micro-downtimes, and that has to do with how the Docker does the promotion for different -- like, when it does blue-green... So all in all, we had almost four hours of downtime.

This year, 2020, with the LKE migration, which we started way back when -- I don't know, January, February was ongoing; April we had a bunch of stuff already migrated... We added that use case with Rob Yoegel, and we had already a parallel deployment on LKE, and then we've completed everything -- I think it was in July or August, when we were through... So while this was happening, including the migration - okay, it's two more months to go - we were down for 68 minutes all of 2020. So that means we're just below four nines; 99,988, something like that. That's where we are.

And half of the downtime was because of the migration. There's an interesting story there...

**Jerod Santo:** \[01:00:27.01\]Right.

**Gerhard Lazu:** It had to do with the slow DNS propagation when we switched over... We hit the LetsEncrypt search request limit, because the DNS wasn't fully propagated, which means LetsEncrypt was throttling us, and when the DNS did propagate, we couldn't get the certificate fast enough.

**Adam Stacoviak:** Hm. We'll have to email Josh about that, Jerod...

**Jerod Santo:** Get that API limit raised...

**Adam Stacoviak:** ...see if he can do something for us.

**Jerod Santo:** Yeah. Come on, man, let us hit that thing more.

**Adam Stacoviak:** \[laughs\]

**Gerhard Lazu:** It was my mistake...

**Jerod Santo:** It was a one-off...

**Gerhard Lazu:** The reason why it was my mistake was because the TTL in External DNS defaults to one hour. I have since changed to 60 seconds. So had it been 60 seconds, I could have flipped back within a few minutes. But because it was an hour, once it goes out, you have to realize that DNS resolvers will cache it for one hour.

**Jerod Santo:** Sure.

**Gerhard Lazu:** So even if you change it, they will keep serving the wrong IP address, and that's why in some parts of the world it was okay, and I knew how to basically clear the DNS... But for most people, it was down.

**Jerod Santo:** Don't you think a 60-second DNS TTL is pretty low for a normal scenario? Aren't people going to be hitting their DNS root servers more often when coming to our website? Versus a higher number... To me it makes more sense that you would crank it down when you're gonna make migrations, and then crank it back up when you're pretty stable... But is that just a thing that doesn't really matter in practice?

**Gerhard Lazu:** In practice it doesn't really matter. Am I still sharing my screen? I am sharing my screen.

**Jerod Santo:** Yes, you are.

**Adam Stacoviak:** You sure are, yeah.

**Gerhard Lazu:** So if you look at GitHub.com, they have 60 seconds. GitHub.com, a single IP address, it's global \[unintelligible 01:02:10.18\] they have 60 seconds. So all the big names - they have a very low DNS TTL. What about Google.com? 60 seconds. Single IP address. What about Microsoft.com?

**Jerod Santo:** Try Microsoft.

**Gerhard Lazu:** They have a high one. I wouldn't be comfortable with such a high TTL.

**Jerod Santo:** \[laughs\]

**Gerhard Lazu:** Because if you need to change it - if something goes wrong and if you need to change it... Well, the TTL is already out there, right?

**Jerod Santo:** Yeah, but couldn't you just say, on your way up to a deployment -- like, we knew we were gonna roll this thing out. Part of your step is like "We're gonna lower our TTLs all down to 60 seconds, and then we're gonna do our stuff. When it's all done, we're gonna raise them back up, and let people hold on to that cache." I mean, caching is nice, man...

**Gerhard Lazu:** It is. And that's why this is what we recommend that the TTL is... But DNS resolvers will implement theirs, and ISPs will implement theirs. Not to mention that if you have a router, like Adam - he has a very smart router - it has its own caching setting.

**Jerod Santo:** Yeah.

**Gerhard Lazu:** So it's turtles all the way down. And while we recommend 60 seconds, who knows what the different DNS resolvers will use...? Some may use an hour, regardless what the upstream says... But what we care about is that at least the DNSes that respect those settings will pick it up soon enough.

**Jerod Santo:** Gotcha.

**Gerhard Lazu:** In the big scheme of things, it's so small... The DNS requests are really a very small amount of traffic, that goes through the internet these days.

**Jerod Santo:** Sure.

**Gerhard Lazu:** And what I would ask is why don't we have instantaneous updates? I think that's what some providers already have, like Cloudflare, for example. The big ones.

**Jerod Santo:** \[unintelligible 01:03:51.26\] I was gonna ask how they get that done, but we don't have to go there...

**Gerhard Lazu:** \[01:03:58.19\] I don't know myself, to be honest... I mean, it changes; it's not something I keep up to date, but I do know that instantaneous updates, especially when something goes wrong, they're so handy to have. What happens if the IP gets compromised? ...or whatever; so many things that can happen. It's almost like a safety release mechanism, if you wish. Maybe you won't need it, but when you will, it's good to have it.

**Jerod Santo:** And there's nothing worse than when you really need it and you're like "Well, we've gotta wait 60 minutes for this thing."

**Gerhard Lazu:** Exactly. And that's exactly what happened the last time...

**Jerod Santo:** That's how you kill your nines right there.

**Gerhard Lazu:** Not to mention that you need to wait for an hour before a new TTL will be picked up. You need to say "Okay, I'm going to upgrade it in one hour", because that's how long it will wait for the TTL to expire before the new one will be picked up...

**Jerod Santo:** And that's when your boss fires you. \[laughter\] Good stuff.

**Adam Stacoviak:** Well, with availability though comes some acronyms.

**Jerod Santo:** Oh, yeah.

**Adam Stacoviak:** Some new acronyms, at least... SLO, SLI... Did we have these before and I just didn't know about it, or is this new to the world of --

**Jerod Santo:** There's always a new TLA.

**Gerhard Lazu:** A new TLA?

**Jerod Santo:** A three-letter acronym. There's always a new three-letter acronym.

**Gerhard Lazu:** Oh, I see. Okay. I thought you meant TLA, like the TLA plus. Okay, I was thinking about something completely different. \[laughs\]

**Jerod Santo:** I gotcha.

**Gerhard Lazu:** So did we have this before - I don't think we formally had it. I know that when we talked about "Jerod, how much downtime wouldn't you be okay with?", because the less downtime you're okay with, the more complex your infrastructure becomes... And he said "A few minutes here, a few minutes there is okay." In this case seven minutes - it's okay; it's not the end of the world. We can be down for seven minutes, it's not a problem.

So when you look across a whole year, how much downtime are we okay to have? And that will become, in this case, our availability SLO. Service Level Objective - our Service Level Objective is that we're unavailable for at most 50 minutes in any one year. And that's what your four nines means.

The SLI - Service Level Indicator - is where are we in those 50 minutes? And right now we are at 68 minutes this year, plus an extra seven minutes. So that's almost like your budget...

**Jerod Santo:** But that was roll-out year, so 2021 will be the test. Of course, by 2021 we may be rolling out new stuff... So let's talk a little bit about things that we didn't do, or things that we might do, and then we'll talk about how the listeners can get involved. What haven't we done here?

**Gerhard Lazu:** What haven't we done... So the first thing, as you know, I'm very passionate about is about logs and metrics. I think we need a better understanding of how the system works. While we have grafana.changelog.com, and we have all the metrics from the Kubernetes side, from the infrastructure side, we don't have metrics from PostgreSQL, for example. We don't have metrics from our application, Phoenix. It exposes a lot of metrics. So we don't know what's happening inside of our app.

Why is it constantly using 8 gigabytes of memory? We don't know that. It'd be good to know that, so that maybe we can bring it down, we can speed some things up...

I know that we tried to optimize, for example, queries - how fast pages load when they're not cached. Well, when a page loads, can we see a trace, where traces come in? Where is the most time spent in that request timeline? Is it the database, is it the app itself? What's going on?

The other thing that we would like to have is centralize all the logs. So I'll have Kubernetes, and we can see logs for pods easily, K9s makes it super-simple... But even if we didn't use K9s, Kubectl - they're there. But they will be gone once the pod goes. So can we aggregate all those logs? Before we were using Papertrail, but this is something that I wrote about last year - we would like to try Loki out. We would like to send all the logs to Loki. And when we send all the logs to Loki and we already have, for example, maybe IPs for requests, browser agents, user agents, could you maybe have some dashboards? And I know we talked about this last year... To show you maybe where users are coming from; the stats. Remember that the app currently does... Could we maybe do something else and use the logs as they are, without having to process them ahead of time? Could we do that? So logging, metrics, interface, integrating everything...

\[01:08:34.13\] The one thing which I think is everybody's dream is to have an automatically-updating system. So could we roll updates to, for example, our container image for the app, the latest version of Erlang, or the latest version of Elixir, or the latest version of PostgreSQL automatically, with no intervention? I think we could. So what does that setup look like?

What about automatic Kubernetes updates? We're not on the latest version, we want to upgrade, but someone has to do that upgrade. Could we automate that, so we're always running the latest? And can we do it in such a way so that it causes minimal disruption to everything else? Because in a way you want the most secure setup, the most efficient setup, with no effort, if possible. It just happens. Isn't that the dream?

**Jerod Santo:** Yeah, exactly. I would love to just, again, declare an Elixir version, a Postgres version, and not have to worry about how it goes from my current version to that version. I know especially with Postgres that can be very tricky, with database backend migrations, and stuff. The actual format of the data storage by Postgres can cause issues. But yeah, that would be super-cool... And who knows, maybe we'll get there someday.

**Gerhard Lazu:** Yeah. I think it's all within reach, to be honest. All these systems, once you declare them, once they are self-updating, self-healing, it's almost like the next step. We want an automatically-updating cluster, if you wish, and how will those updates happen. For example, you may be okay to update with the latest patch of PostgreSQL automatically, but maybe not to the latest major. Maybe you'd want to control when majors get rolled out.

**Jerod Santo:** Totally.

**Gerhard Lazu:** But for other things, like for example Erlang, you may be okay, because it's very backwards-compatible, and you always want to have the latest.

**Jerod Santo:** Right.

**Gerhard Lazu:** And maybe you would want to have Canary updates; so updates happen, but not in situ. So if something fails, you would like to know what the failure is, so that you know how complicated this upgrade will be. It's almost like it will feel for you, like "Hey, there's a problem with this. You may not even have thought about this."

Not to mention that you can then start consuming beta versions, and say "Hey, I can't upgrade to this", and then you can start feeding back into different development cycles. Like "This is completely not working for us", or there's like this new feature, which is amazing... "Can you ship it, please? We'd benefit from it greatly..."

So you can start consuming the latest and greatest in an automated fashion, with little effort. And then you can have automatic updates, like your phone does. Isn't that great, when you don't have to update all the thousand apps which you have installed? They automatically update. I think that's pretty great.

**Adam Stacoviak:** Yeah.

**Gerhard Lazu:** Phones these days update themselves.

**Jerod Santo:** Until they update on their own and they change their icon, and you're like "What happened?!"

**Gerhard Lazu:** Right... \[laughs\] Because that's a problem.

**Jerod Santo:** You're like "This new icon is ugly. I like the old one."

**Gerhard Lazu:** Yeah.

**Jerod Santo:** And then you can't go back.

**Gerhard Lazu:** I know what you mean.

**Jerod Santo:** There's no going back either. It's futile. Well, I would say one of the coolest things about this process this year I think has been the contributions back to LKE and to various open source things surrounding Kubernetes, and the work that you did there, Gerhard, getting us to where we are right now. I think it's really cool that we can use this as a necessary excuse to help other people and help open source software get pushed forward as well. That excites me.

\[01:12:11.02\] I hope as we move forward, we continue to look for opportunities like that, to work with open source projects, and with providers, to level everybody up as we use their stuff.

**Adam Stacoviak:** I'm surprised it's taken that long to get LetsEncrypt in place. I mean, I know we had an SSL, and it was set to expire, but... It's been out for a while, and we finally have it in place and in automation, which is awesome.

**Gerhard Lazu:** So we did have LetsEncrypt before, manually.

**Jerod Santo:** Right.

**Gerhard Lazu:** As we were doing the migration, I remember our certificate was closing expiration, so we didn't want to wait, so we did do it manually... But it was still a bit like "Okay, I have to run this command, and I have to save the certificate somewhere", like in the source of truth, where we keep all our secrets; then we'll have to put the certificate on CDN, and I have to set it up in the load balancer... There were a couple of steps which we had to take.

**Adam Stacoviak:** Yeah.

**Gerhard Lazu:** But now, everything's automated for us, because of how the Node balancers integrate with Ingress NGINX and how all the components know what needs to happen.

**Adam Stacoviak:** And to your point, Jerod, too - there's a lot of services out there, now that we're actually in cloud-native land officially, since we're using Kubernetes, there's a lot of different services out there, both open source and opportunities to partner with people that are available to us, that are pretty cool. There's probably some holes where we haven't chosen a good solution, or we're not there yet... So this is us saying "Hey, reach out." If you what we're capable of using, reach out and say hello. Pretty easy to get in touch, editors \[at\] changelog.com. Say hi. It's too easy.

**Gerhard Lazu:** I would be very excited to hear about what the cool kids are doing these days in the world of Kubernetes. It's moving so fast. So many things are changing. It's impossible to keep up with it. But this way, just as we are helping the community in our own specific way, we hope that others will maybe have a look at what we do and suggest better ways.

The best compliment is someone telling you how crap your setup is. \[laughs\] Because then, you can learn something new...

**Jerod Santo:** Then you know they looked at it.

**Gerhard Lazu:** So I'm looking forward to someone telling me how crap the setup is, and how it can be made better. I'm really looking forward to that.

**Adam Stacoviak:** And I suppose you could use grafana.changelog.com and do some hunting yourself if you wanted to also... It's open source, you can look that way as well... It's transparent, it's available to you to dig into, just like we can. No different.

**Jerod Santo:** Absolutely. Please do check out all of the source code; it's up on GitHub. All of the links to all of the things are in the show notes. As we stated earlier, Gerhard will be publishing a detailed blog post covering many of the nitty-gritty details that we glossed over here on this conversation, so look forward to that. We'll cross-post it in the show notes as well. We don't know the exact timing on when what goes out, in which order, but it'll all work itself out. We'll just declare it, and the system will just work out that content as it needs to.

Gerhard, anything we left on the table? Anything left unsaid before we call it a show?

**Gerhard Lazu:** \[01:15:20.14\] No. We went into a lot of details; much more will be covered in the blog post. I really enjoy this. Every year, it's almost like I'm looking forward to this. The results of combining all these awesome building blocks... In a way, that's what we do here - we take the best, or the simplest, in some cases, out of the open source world and we combine them in a way that makes sense for us... And I'm really excited about where we will be this time next year. I'm really looking forward to that.

**Adam Stacoviak:** And if you have questions or thoughts, you can share them in the comments on this show, of course, or you can join the community, which is easy. You can talk in real-time in Slack with us, and other things, but Changelog.com/community is where you can make that happen. It is a free community to join. It's the cost of your attention, and your time. That's it. And everyone's welcome. No matter where you're at in your journey, this is a place you can call your home, and hang your hat, and hang out, and ask questions... Gerhard's there, I'm there, Jerod's there, and you could be, too. So I hope to see you there.

Gerhard, thank you so much for all your hard work. It's been amazing to work with you all these years. We appreciate every single year this leveling up. We love to see this happen, this progress happening, and achieving our SLO of four nines next year...

**Jerod Santo:** Four nines, baby.

**Gerhard Lazu:** Four nines, that's the one.

**Adam Stacoviak:** Because five nines is expensive. That's a different subject, but... This has been awesome.

**Gerhard Lazu:** Once we've achieved four nines, we will move to five nines, right?

**Adam Stacoviak:** Of course!

**Gerhard Lazu:** It's always aspirational... Of course. What are you gonna do...?

**Adam Stacoviak:** It's the next layer.

**Gerhard Lazu:** The reason why it's not three nines - because three nines would be easy.

**Jerod Santo:** We already got that.

**Gerhard Lazu:** Yeah, we already have that. So four nines...

**Adam Stacoviak:** \[unintelligible 01:16:54.01\] failing at three nines...

**Gerhard Lazu:** We could... \[laughs\] Or we can be completely awesome and get five nines. One day I'm sure we'll get there.

**Adam Stacoviak:** One day. One can dream, right? One can dream.

**Gerhard Lazu:** I would like one last shout-out to Andrew Sauber. It was great working with you on some of these things. Thank you very much for your detailed explanation about the proxy protocol support; that was great, thank you very much... And everybody else at Linode that is building a solid platform.

**Adam Stacoviak:** Yes. Definitely thank you, Linode. A hundred percent. Alright, that's the show. Thanks, guys. It's been awesome.

**Jerod Santo:** Yup. Thanks, Gerhard.

**Gerhard Lazu:** This was good. Thank you.

**Outro:** \[01:17:34.07\]

**Jerod Santo:** Real-time follow-up - YAML is not Turing complete, according to this Hacker News comment from January 2018. So there you go...

**Gerhard Lazu:** Okay, so... About YAML - I don't want to go into too much detail, but basically YAML is a big contention point; it's a big, big contention point right now... And there's something called Skylark. It's a programming language, if you wish, that you run inside YAML. It's really crazy.

**Jerod Santo:** Wow.

**Gerhard Lazu:** But it's something that sticks... And there's like Jsonnet, and Ksonnet, and there's so many ways of doing this, and everybody has their own way... But the one thing that really seems to be coming through and through is this Skylark templating language... Because you write code, you write functions inside of your YAML, they get interpreted, and then YAML gets combined, and you end up with a really nice, final, big document.

So it's able to manipulate YAML by writing the functions inside of the YAML. It's really weird... But it's in a good way, because AWS does the opposite. AWS, I kid you not - you write functions as YAML, so you do -increment, -1, -1, and it will know to increment one plus one... And that's just batshit crazy.

This thing does something else. You do comments, and it knows... You say "This is a function call..." And if you look at Ytt... Do get-ytt.io.

**Jerod Santo:** Okay. Ytt.io.

**Gerhard Lazu:** Yeah. My internet - there's a problem with it.

**Jerod Santo:** I'm on it. "All your YAML shaping in one tool. Template and patch as needed to easily make your configuration reusable and extensible. Works with your own third-party YAML configuration."

**Gerhard Lazu:** So click on "Try in playground."

**Jerod Santo:** Oh, so this is it right here?

**Gerhard Lazu:** That's it. And guess what we use? Ytt.

**Jerod Santo:** Oh, we do?

**Gerhard Lazu:** Changelog uses Ytt to template all these things.

**Jerod Santo:** Oh, nice. So many things that we use that I don't even know... Love it.
