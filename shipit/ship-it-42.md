**Gerhard Lazu:** Hi, Rich. It's so great to be finally talking Kubernetes with you. Welcome to Ship It, or should I say Kube Cuddle on deck?

**Rich Burroughs:** \[laughs\] Thanks a lot. Thanks for having me on. I'm really excited to chat with you.

**Gerhard Lazu:** So apparently, the captain of a ship is the ship. So in your case, it's Kube Cuddle, right? Kube Cuddle is your ship, just as Ship It is my ship.

**Rich Burroughs:** Yeah.

**Gerhard Lazu:** I think your name is slightly better, because my ship is Ship It... That sounds a bit too many ships there. Anyways, Kube Cuddle on deck; I'm really glad to be talking to you Kubernetes. You're a big fan, I hear.

**Rich Burroughs:** Yeah.

**Gerhard Lazu:** Not just the tech, but also the people, the ecosystem... I really like that. And I'm wondering, I have to ask - why did you start Kube Cuddle?

**Rich Burroughs:** So yeah, for folks who don't know, Kube Cuddle is my podcast that I do where I interview folks from the Kubernetes community. It's just a side project that I do on my own. The reason that I started it is -- so I was at KubeCon, San Diego, the last of the pre-pandemic KubeCons.

**Gerhard Lazu:** I remember that.

**Rich Burroughs:** Yeah, and I was working at a company where I was doing developer relations, and I did a podcast for them, and/or co-hosted and created one. And it was fun to do, I really loved my co-host, we had some really great conversations with people... But the company owned it, right? And so there were questions about, are the metrics good enough to justify us spending the time that we do on this? Those kinds of things came up, and I was thinking about it and kind of I wanted to do one of my own that I own personally and wasn't something that one of my employers controlled. And I was there at KubeCon and I kept running into all these amazing people that I know. I saw all kinds of folks there, and it just made me think about the fact that I have access to a lot of amazing people in the Kubernetes community.

\[00:04:25.12\] I've just met a lot of folks over the last few years, and it just got me thinking that I had this list of friends that are in that community, and I was like, "I'm sure I could get some of these folks to come on the podcast." And interestingly, when you're doing things like podcasts, access is a big thing, right? I probably can't interview President Biden on a podcast if I want to, right?

**Gerhard Lazu:** I'm still working on my Elon Musk interview. That's like a long-term project. I don't think it's going to happen. I don't think Elon is going to talk Kubernetes with me, or shipping codes on Mars or wherever his spaceships go, but that's my ambition. That's why I started Ship It.

**Rich Burroughs:** Maybe he'll talk about Dogecoin, or something.

**Gerhard Lazu:** Five years from now, who knows.

**Rich Burroughs:** Yeah. You know, I was thinking about that, and then the other thing that happened was I ran into someone that I just knew from Twitter at the time, Mark Mandel from Google. And Mark used to be the co-host of the Google Cloud Platform podcast, which - I used to listen to all the time, and it was so good. And we were chatting about podcasting and he mentioned something that really stuck with me. He said that part of the reason why he did that podcast or why he loved doing it was that when there was something new, a new, interesting, technical topic that he wanted to know about, he would just invite the expert onto his podcast and get them to explain it to him, which I thought was really fascinating.

**Gerhard Lazu:** Well, guess what? I want to learn about vcluster and this thing called DevSpace.

**Rich Burroughs:** Okay. We'll do some of that.

**Gerhard Lazu:** I think... Yeah - Mark, right on the money.

**Rich Burroughs:** Yeah.

**Gerhard Lazu:** I was thinking exactly the same thing.

**Rich Burroughs:** It's interesting in that that was really one of the things that inspired me to start the podcast, but I don't really talk about technical stuff much on there. I didn't end up doing that. I don't we bring people on to ask them about technical things. I mean, it turns out that what I'm interested in a lot more is the people themselves. And we do talk about technology some, but really what I want to hear is these people's stories about why they got into tech, what drove them to do it, what got them into the Kubernetes community, how they benefit from their involvement with it, all those kinds of things are the things that really interest me.

So I've been doing the podcast -- I started doing it at maybe the worst time ever. So I think that I launched it in February of 2020, just right into it; the lockdown hits, and those first few months I was extremely anxious and was having trouble focusing on stuff, so the early episodes are pretty sparse... And they even are, still, at times. I just do it when I feel like it. I don't have a set cadence. But it's good. I'm glad that I've kept it going. I have ADHD, and it's hard for me sometimes to sustain long-term projects, especially if it's really only for me, right? There would be people I think who would be disappointed if I stopped doing the podcast, but really the only person I'm accountable to is myself. So I'm happy about that.

**Gerhard Lazu:** Yeah. I know the topic of ADHD is a big one, and I want us to come back to that towards the end, I'm thinking. But what I'm hearing is that you get to do something that you love, and you do it exactly the way you think it should be done, and you do it when you feel like it. So to me, it sounds like you're living the dream when it comes to podcasting; having those great conversations, talking to the people that you admire, that you respect, that you want to learn from - that sounds like a great mix of things. And I do have to say that you have a couple of great episodes. Actually, all of them are really great.

**Rich Burroughs:** \[00:08:14.27\] Thank you.

**Gerhard Lazu:** My favorite ones are the ones with Kelsey and the one with Kris and Dave. And maybe the fact that they're on the front page has something to do with it. So maybe there's some sort of an algorithm that does that, but still -- I mean, they happen to be my favorite ones. And I'm wondering, which is your favorite Kube Cuddle episode? I know it's hard, but if you were to pick one, which one is your favorite and why?

**Rich Burroughs:** I mean, I think if I had to pick a single favorite one, it would be that one with Dave and Kris; and that was because it just was such a different experience. So to explain it for folks who haven't heard that episode, Kris Nova and Dave Fogle - they both have this shared experience that they were unhoused or homeless at one point, right? In Dave's case, he had gotten started a little bit in his tech career and then he was unhoused for a while, and then he got back into it. And in Kris's case, she was like living in a storage head, with a bunch of gear, learning about open source and all these things. And it's really fascinating, because it's such a different story.

One of the things we talked about is the fact that -- you know, people talk about representation a lot when it comes to gender and ethnicity and things like that, but you don't really hear people talk about representation of homeless people. And so to have a couple of people who really had been through that experience and were willing to put themselves in a very vulnerable position to come on a podcast and talk about that - it was really amazing. I feel like I learned so much from that. But I feel like that's not the typical episode.

So of the other ones, the conversation with Kelsey was definitely one of my favorites. He's somebody that I've known for several years, partly because of the fact that I'm here in Portland. He lives here as well, and so I have the advantage of bumping into him and seeing him speak at small meetups and things that somebody outside of Portland would probably never hear about. I've known him for a few years and I had actually interviewed him before for another podcast, and it was pretty fun to be able to talk with him. He always says some things that just end up really inspiring me a lot. He's such an interesting person. I feel like I end up parroting a lot of what he says to me.

**Gerhard Lazu:** Well, if it resonates with you, it's yours, right?

**Rich Burroughs:** Yeah.

**Gerhard Lazu:** It's not like -- sure, the idea is he maybe starts them or he mentions them... So I've heard this expression, I don't remember where, but it really stuck with me, because it felt true. If it's important who said it, it means it's not important.

**Rich Burroughs:** Oh, interesting.

**Gerhard Lazu:** Right? The idea being that if the idea is so powerful that you don't need anything else -- because it's yours, or it's ours. It doesn't belong to a person. It's a mindset, and it belongs to a group of people that identify with that idea; it's mine just as much as it's yours. So what I'm hearing is that, first of all, your episodes are getting better and better, because the one with Kris and Dave is your last one.

**Rich Burroughs:** Yeah.

**Gerhard Lazu:** And if that's your favorite, it means that they are getting better, and they're very different, which I like. You have that diversity going on.

**Rich Burroughs:** Yeah.

**Gerhard Lazu:** You have the real life... Not the real world, the real life, which is always tougher.

**Rich Burroughs:** Yeah.

**Gerhard Lazu:** We talk about a real-world infrastructure and set up, but what about real life, people that struggle with various things, whether it's ADHD, whether it's homelessness, whether it's other things, which have such a huge impact? Forget AWS versus GCP. This stuff is so much bigger, and it's out there, and people don't talk about it enough. So I really like that you have that perspective and you share that with others on Kube Cuddle. So... Big fan of that.

**Rich Burroughs:** \[00:12:03.17\] Well, thank you. I feel like the Kubernetes community is really amazing. There're so many interesting people, and a lot of people with, at least from my perspective, really great values. It's a very inclusive community. And I think that that's part of what I want to show too, right? I want people to understand that this is a community full of a lot of really smart folks, but also a lot of really welcoming people, and that they can come and participate, too.

**Gerhard Lazu:** People that care. People that give a damn, as some would say it. And I know that you've seen the Kubernetes documentary, but for those that haven't, I'll include the link. That's such a great one to understand the story of Kubernetes, but also hear those people talk, how they think, the struggles which they had. They're not as extreme as the ones that we mentioned, but nevertheless, they are tough. And it exists, the project, the community, because of many people. Many great people believed in it, and they gave their blood, sweat and tears to make it happen. Not because of payout, but because they believed in it. Simon Sinek has quite a few things to say about that, which is one of my great favorites.

**Rich Burroughs:** Yeah. Kelsey is actually the person who brought me into the community, really, in essence. I saw him speak at a very small event here in Portland. This was in 2015. He was still working at CoreOS at the time. So this was before he was at Google. And he did this talk that -- I don't think the whole thing was recorded at that event, but he did it again, and there is a recording out there. If you google "Kelsey Hightower Tetris", you'll probably find it. But he actually played Tetris and he used that as a metaphor for this idea that now we have these clusters, right? And these clusters are made up of a bunch of compute nodes, and they're really just resources. They're memory and they're CPU and storage. And we don't have to worry anymore about what host an app is running on.

I'm an old school ops guy, and I used to be that person who knew, "Oh, the frontend app runs on these servers", right? And I could tell you what host everything was running on. And it really appealed to me, this idea that you have this cluster and it puts things on the nodes and balances the workloads and restarts things that die, which is another thing I used to do when PagerDuty woke me up at 3:00 AM... I would go and restart the app that had died. So it was really exciting to me. I was still in operations at that time. It's been a few years now since I had that kind of role, but I went through a lot of pain in the old days, and I was very interested in the fact that the folks who designed Kubernetes clearly had thought about those same things.

**Gerhard Lazu:** That Tetris game that Kelsey played was very memorable.

**Rich Burroughs:** Yeah.

**Gerhard Lazu:** And it's definitely something that really caught my imagination when it comes to Kubernetes. There was a time when I wasn't sure whether Mesos was going to be on top, because they had to scale, and this is all in the documentary. I remember using it. There were a couple of weird things, but the fact that Apple got on board and Airbnb were using Mesos, like big names - it made it interesting. And Kubernetes was only just starting to become -- people started to talk about it. I wouldn't say it became popular, but people started talking more and more about it. But when Kelsey gave a talk, something happened. It really caught people's imaginations. And I completely understand when you tell me that Kelsey got you into Kubernetes, because I think the same thing happened for me. It was that Tetris game.

**Rich Burroughs:** Yeah. He's done so much to help build the community. It's been amazing. I have to admit, actually, I haven't seen the documentary yet. It's on my to-do list.

**Gerhard Lazu:** Okay.

**Rich Burroughs:** \[00:16:01.20\] I've been meaning to. I've shared the links on Twitter, so it probably looks like I've seen it, but I'm going to be watching it soon. But I definitely remember those days; and there was a time where you could look at Mesos and look at Kubernetes, and Mesos was the right choice, you know? And it's really, really funny to look back on that, because I imagine there aren't a lot of folks running Mesos anymore. And if they do, it's probably the legacy thing that nobody wants to touch.

**Break:** \[00:16:31.18\]

**Gerhard Lazu:** So in your recent tweets, I've seen a few that caught my attention. The one about the community documentary was one, and I'm really looking forward to talking to you after you watch it, both parts. They're great. And the other tweet that caught my attention was the really exciting stuff that is coming up for vcluster. And I'm wondering if you can tell us more about that.

**Rich Burroughs:** I can, actually, because I think by the time this airs, it will have been released. I mean, it's open source. So if somebody was interested, they could go and dig in the releases and see the alpha versions that are there now. But the really big, exciting thing is -- so I should back up and explain what vcluster is.

**Gerhard Lazu:** Maybe after. I always like doing things backwards.

**Rich Burroughs:** Oh, okay.

**Gerhard Lazu:** So basically working backwards, like, why is this exciting? And if I'm excited about this, I'll listen. And if I'm not, then that's okay. It doesn't matter what it is if I'm not excited.

**Rich Burroughs:** Okay. That's fine.

**Gerhard Lazu:** So tell me. \[laughs\]

**Rich Burroughs:** Well, basically, we have built a plug system for vcluster that allows people to customize some things about how it works; because we've had a lot of people come to us and they have some sort of edge case that doesn't necessarily work great with the way that vcluster works. But we don't want to necessarily change the functionality to fit their specific use case. So there's going to be a plugin system now, and people are going to be able to write their own plugins to manage the syncing process that happens. And it's going to allow people to do a lot of pretty cool stuff, like being able to spin up a cluster that already has software installed in it as part of the provisioning process.

**Gerhard Lazu:** Interesting.

**Rich Burroughs:** \[00:19:48.27\] A lot of other things. And we're excited about it. I'm really excited, especially, to see what people in the community come up with. It's always the case for me with things like this that folks from the community come up with use cases that I just never would've imagined myself. And so that's, for me, a lot of the excitement about it, is to see what people do come up with. And I think that what we're going to probably have a repo, a shared repo that folks can contribute their own plugins that they write to if they want to share those with other people.

**Gerhard Lazu:** Do you have plugins that will share part of this? Like, a few plugins that are part of this release, so that you have a plugin system, as well as a couple of plugins that show what is possible.

**Rich Burroughs:** Yup, there are a few examples. Yeah. There are three examples right now. So there's an example that basically does what I described, that lets you have a deployment that gets done as part of the provisioning.

**Gerhard Lazu:** Okay.

**Rich Burroughs:** So basically, the cluster or the vcluster or the virtual cluster comes up and it has this deployment in it when it comes up.

**Gerhard Lazu:** Are those deployments -- I'm assuming it's just YAML which gets applied, but does it support, for example, Helm Charts that you can declare at provision time, at vcluster provision time?

**Rich Burroughs:** Yes.

**Gerhard Lazu:** Okay. So Helm or YAML; just plain YAML. Okay.

**Rich Burroughs:** And then there's a syncer for CRDs. So it's kind of a similar thing; if you want to have those CRDs, they're in the cluster when it comes up.

**Gerhard Lazu:** I can imagine that being very important. Yes, CRDs being very important.

**Rich Burroughs:** Yeah.

**Gerhard Lazu:** Okay. To me, this sounds exciting, because I can imagine myself wanting to provision vclusters with things preinstalled. That sounds great to me. As a feature, it's already useful to me from the get-go, from the first release.

**Rich Burroughs:** Yeah.

**Gerhard Lazu:** Now, because I'm excited I want to unpack what vcluster is, but more importantly, what is the pain that vcluster addresses.

**Rich Burroughs:** Yeah. It'll be interesting to see if this comes up in the documentary at all. Maybe you could tell me. But I'm fascinated by the fact that when Kubernetes was designed, it really wasn't designed with multitenancy in mind. Things have gotten better security-wise, but when you think about the early days, there wasn't even RBAC. And it's fascinating to me, because it was based on the board design. So Google had been running board internally for quite a while before Kubernetes showed up, and it was interesting to me that it wasn't something that was really a focus for them, obviously, in the early days.

So if you've been in the Kubernetes community for a while, you've probably heard from people who are complaining about multitenancy. And what usually ends up happening is one of two things. Either people do namespace isolation, which has problems. As a developer who is working with code that has CRDs or other global objects that go with it - you can't touch those if you're restricted to a namespace.

The other option that people use a lot - and I think this probably happens more - is they just provision a ton of clusters, right? So like every team gets their own cluster, or maybe even every person... And that's really, really bad. It's wasteful in terms of costs. It also has an impact on our environment, the fact that there's all of these clusters running, and in a lot of cases, the workloads aren't really doing anything; they're just taking up resources.

\[00:23:42.08\] Holly Cummins from IBM gave a really great keynote at KubeCon a few years ago where she talked about this. And I really recommend folks googling that and finding it, or maybe you could put a link in the show notes. It's a really wonderful talk, and it got me thinking about this stuff. And it was one of the reasons why I was really excited about vcluster, because it sort of bridges the gap sum, right? It gives people a situation where they can share a cluster, and then inside of each namespace on the cluster -- so you're still doing the namespace isolation, in essence, but what vcluster does, is it puts what looks like a full-blown Kubernetes cluster inside of that namespace.

So we started off with K3s, and there's a K3s API server in there, and a few other things. And when you as an end-user are interacting with that virtual cluster, your API requests are going to that K3s API server inside there. And so it gives those developers, or whoever's working with the virtual cluster - they're admin in there, right? And so they can do things like manage CRDs, and all of those things, but they don't have direct access to the underlying cluster.

**Gerhard Lazu:** So hang on, hang on. Did you, by any chance, put Kubernetes in Kubernetes?

**Rich Burroughs:** Yes, we did. \[laughs\]

**Gerhard Lazu:** Okay. Did you try putting a Kubernetes in the Kubernetes that runs in Kubernetes?

**Rich Burroughs:** I actually have done that, so...

**Gerhard Lazu:** How many layers did you go?

**Rich Burroughs:** I've only gone that far, but yes, there is -- I actually have a video on YouTube that I can give you the link to, where I've got a cluster that I think was running on Google Cloud Platform, I have a GKE cluster, and then I have a vcluster inside there, and then I did another vcluster inside of that vcluster.

**Gerhard Lazu:** Whoa.

**Rich Burroughs:** But I think that really the big use case is that we think that it addresses are -- you know, dev environments is a really good one. For some shops, it's still kind of the Wild West when it comes to dev environments. People just spin up whatever they want on their laptop. And maybe they're using minikube or Docker Desktop or whatever, but there may not even be--

**Gerhard Lazu:** Kind.

**Rich Burroughs:** Yup.

**Gerhard Lazu:** No, no more Kind. Yes. \[laughter\]

**Rich Burroughs:** I love Kind actually, but--

**Gerhard Lazu:** It's great, but I'm looking forward to vcluster. \[laughs\]

**Rich Burroughs:** I maybe wouldn't run Kind locally. I know some people do. I think it's really good for testing things like that. But I think that the advantage of vcluster is that you can have a shared dedicated cluster in your actual environment that you run with real workloads in, right? So like AWS or GCP or whatever you're using. And you can share that with your developers, that can each have a namespace with their own virtual cluster in it. It feels more like the production environment than if they were just running random stuff on their laptop.

**Gerhard Lazu:** Okay. So let me try to see if I understood this. Vcluster spins up a full-blown K3s instance, which is a single process, and that has its own APIs server, its own database for storing the config. I forget which one is using the built-in one. I know it supports SQLite and Etcd. And it also has -- or it used to, or it added recently, and when I say recently, in the recent years, support for other stores for configuration, or configuration stores, especially for the HA stuff. So you can run K3s in HA mode. So that's very interesting. But where do the workloads run? Because there is a Kubernetes cluster underneath. How does that work?

**Rich Burroughs:** Right. So the virtual cluster doesn't have a scheduler. That's really the big difference. It doesn't schedule the workloads directly. What happens is those objects like pods are synced to the underlying cluster, and the workloads run there. And so when we were talking earlier about the plugin system - that has to do with the syncer. And so that's the part of the equation that people are going to be able to customize more, like what gets synced and how it gets synced, those kinds of things. But by default, it's pods and just a few other objects.

And then vcluster does some things like with the naming, for instance. When the pods get synced to the underlying cluster, it kind of renames them. So it puts the namespace and the virtual cluster name into the name of the pods. When you do like, \[00:28:10.28\] get pods, you see that stuff embedded in the name, so that way there aren't collisions across the different virtual clusters.

**Gerhard Lazu:** \[00:28:20.06\] So because I'm a hacker at heart and I love finding the edge of systems, like where stuff breaks - that's where all the interesting stuff happens, in my opinion - so that I know what the limits are, so that I know what to stay away from, if I care, or what to improve...

**Rich Burroughs:** Yeah.

**Gerhard Lazu:** So I'm wondering -- again, I think this is something which is best tried out for real rather than us discussing about it, but I'm going to mention it... What happens when two different vclusters need to install different versions of cert-manager in the same cluster? What happens with the CRDs? How do they get reconciled? That is something which I would love to try out myself and see what happens.

**Rich Burroughs:** Yeah.

**Gerhard Lazu:** I'm very curious about that. If someone listening is experiencing this already, please share. I'm very interested in what happens.

**Rich Burroughs:** I think there likely are some folks who will listen --

**Gerhard Lazu:** Okay.

**Rich Burroughs:** ...who do have experience with it. This is one of the big points of vcluster, is the idea that you can manage these global objects inside the virtual cluster. So you can definitely have a version of a CRD that's different than what's in another vcluster that's running on the same system.

The other thing that you can do with certain kinds of things, like with ingresses, for instance - you might not want everybody to have their own ingress inside their virtual cluster. And so you could have an ingress on the host cluster that then gets shared to the virtual clusters. So it's pretty flexible. It's going to be even more flexible with the plugin system. So yeah, I think it's really cool.

The other great thing too is that there's a good community building up around it. It's a tool that people have been really excited about. It's the experience that I had actually when I first started playing with it. It's just fun, right? It's kind of a new, novel, interesting thing. We've gotten a lot of feedback from people. We have a community Slack for our commercial product and also the open source projects that we maintain, and - yeah, all kinds of people coming up with interesting questions and things... Again, things I never would've necessarily thought of. And so a lot of the things that we've been adding, a lot of the features are things that have come from the users, requests or ideas from them.

**Gerhard Lazu:** I can see how this can be really useful, especially for CI systems that need Kubernetes. I've seen so many CI jobs running in GitHub Actions. The GitHub-hosted runners - I don't think many people realize, but they don't have that much CPU or memory or disk. I mean, they are small instances, and you can spin tens of those and you get them for free. So you get what you get. It's free. So if you don't like it, you can do your own.

The point which I'm trying to make is that you have a Docker running in them, and you're trying to install Kind, and you try to run some integration tests and you're wondering why it takes half an hour... Well, you have your answer. It's like in the setup. So if you're using vcluster and you have an actual managed Kubernetes autopilot, I think that's amazing. I'm not sure how well vcluster runs there, but you only pay for what you run in that Kubernetes. And then you can spin these virtual Kubernetes clusters on-demand, run your integration tests, tear them down, and you can keep repeating this and you'll only pay for the Kubernetes that you run. And it's always fresh. You can run multiple versions. This sounds so exciting. So I can see that being amazing. But I'm also wondering, do people run this stuff in production, by any chance?

**Rich Burroughs:** \[00:31:48.03\] I don't know of anyone running it in production yet. We've heard from some people who were working towards that. So I think within the next few months, there may be some folks doing it. It's not necessarily going to be the best fit for everybody for production. Everybody has their own requirements, especially when it comes to like compliance and auditing, security, things like that. So if you're working at a bank, maybe these virtual clusters aren't going to be enough isolation for you. Maybe you really are going to have to give everybody their own cluster. It really just depends. But I think to me, the dev environments use case is a really strong one. I agree completely that the CI/CD kind of use case is a really good one; the CI part, especially.

I've worked at shops before that had really, really long-running tests. And a lot of times you want to spin up new systems under tests even within the same test suite, because you want a brand new system that doesn't have any cruft on it. And so you might be spinning those up and throwing them away multiple times within a test suite. These vclusters take a few seconds to start up.

**Gerhard Lazu:** Yup, that's right. Yup. That's one thing which I loved about K3s, how quick they were to start up. It reminded me of containers versus VMs. It's like the same sort of difference.

**Rich Burroughs:** Yeah.

**Gerhard Lazu:** Even if you go to GCP and you do get a cluster, GKE - fairly fast; it doesn't take 15 minutes. I know that in some cases, for some eyes, is it can take up to 15 minutes or even longer if there is a problem. So the point is, it's a huge difference if you can spin these up so quickly on a Kubernetes which is already running, and then you can tear them down. So this makes me really excited and it makes me wonder the things that we could do in terms of experimenting. So let's imagine that we want to go from Kubernetes 1.22 to 1.23. I hear that's a bad one.

**Rich Burroughs:** Yeah.

**Gerhard Lazu:** If you have to do that upgrade, that migration, could you try it a couple of times? And can you try different things until you get it working? And vcluster sounds like a good way of doing it, because you can run multiple and different Kubernetes versions.

**Rich Burroughs:** Yeah, absolutely.

**Gerhard Lazu:** Each cluster can be a different one. So that's a huge thing. Okay.

**Rich Burroughs:** Yeah. Yeah. You can specify the version when you spin the cluster up. And besides K3s, we actually support a couple of other options now. So that was the first one, but now one of those requests that we got from the community is we had somebody who really wanted to use it with K0s. And so it now supports that. And then we also have -- you can also run it just with Kubernetes. So you can have an actual Kubernetes API server in there instead of the K3s or K0s.

**Gerhard Lazu:** Okay. You're blowing my mind right now. I think I want to ask you something else. It's too much. \[laughs\]

**Rich Burroughs:** Okay. I think the K3s option is great, and that's a great place for people to start. But yeah, we just keep talking to folks who are like, "Oh, this doesn't work for me because of X reason." And we definitely try to address those things that we can, and improve it.

**Gerhard Lazu:** Just to double-check - is this something that anyone can use for free, it's open-source, they can download and they can start using it?

**Rich Burroughs:** Yes. Yeah, absolutely.

**Gerhard Lazu:** Okay. That's what I thought. I just wanted to make sure that that's the case.

**Rich Burroughs:** Yeah. So it was a feature in our commercial product that's called Loft. We had virtual clusters in there at first, and then at one point we decided to open-source it. So it's been open-sourced for, I want to say, like at least seven or eight months, something like that. So it's just been great to see people embrace this thing... Because there really are, I think, a lot of legitimate use cases for it. And there are a lot of people who really feel the pain of the multitenancy issues. So it's part of the reason why I joined the company is that when I looked at what they were building, it was things that addressed the pain points that I knew were out there, really major pain points, and they were addressing them in very smart ways.

**Break:** \[00:35:52.18\]

**Gerhard Lazu:** Speaking of a company that built really interesting things, I keep hearing about this thing called DevSpace, and I don't know what it is. Can you tell me about it?

**Rich Burroughs:** Yeah. So DevSpace is actually the first tool that the company that is now Loft Labs made. So it's been around much longer than vcluster. It's really meant to address a different, big pain point that people have, and that's "How do I create consistent dev environments? How do I make it easy for my developers to have a local Kubernetes cluster or a remote one to develop against?" And so, if you're familiar with tools like Tilt or Skaffold, it's in that kind of same space. I think that there are strengths and weaknesses of all of those tools, but in essence, with DevSpace, what you're doing is you're defining what your development workflow is, and you're doing that in code, so that developers don't have to invent that all themselves. And I think another advantage -- it actually reminds me of lot of infrastructure as code.

When I worked at Puppet years ago, I was in that infrastructure-as-code world for many years, and I think that one of the big advantages that we found when we started doing infrastructure-as-code is that it was self-documenting, right? If you had a question about how a Puppet module worked, you could read it and see how it worked. And that's a huge advantage. And the other piece of that is - say you write your dev workflow down in a page on your local Confluence, or whatever you're using to share docs. How often does that get updated? Is it really the way it should work? I'm sure that most folks have probably played that game where you're looking at documentation and you're looking at the last date it was updated, and hoping that it's still current. But that's, again, that same advantage that we saw with infrastructure as code, because this thing is getting used all the time. You know it's going to be up to date.

**Gerhard Lazu:** Okay. I have a question which the answer will let me know whether I want to ask more questions.

**Rich Burroughs:** Okay.

**Gerhard Lazu:** It's like, whether I want to dig into this. Can I run Vim with DevSpace on Kubernetes?

**Rich Burroughs:** \[00:40:04.01\] Can you run Vim...?

**Gerhard Lazu:** So I have some code that I want to edit. Can my Vim be provisioned with all the plugins, with all the config using DevSpace in Kubernetes?

**Rich Burroughs:** That's a good question. So not a local Vim, but actually in the cluster. Is that what you're saying?

**Gerhard Lazu:** Yeah. Yeah. So that my dev environment -- I mean, my dev environment meets Kubernetes. I mean, a shell - you can get it anywhere. That's not a problem. You can shell in a container and you're okay.

**Rich Burroughs:** Yeah. Yeah.

**Gerhard Lazu:** But what I care about more is the whole Vim config and how can I declare it.

**Rich Burroughs:** Okay.

**Gerhard Lazu:** Is it just a container that I configure it? And the one which goes with that is Tmux as well. I mean, that's less important, because I could run Tmux locally, so that's okay, and I can be connected, so it's not a problem. But I would love to have my -- my local dev environment means Vim, and a bunch of things.

**Rich Burroughs:** First off, I need to point out that you are a nerd.

**Gerhard Lazu:** Yes. \[laughter\]

**Rich Burroughs:** The fact that you are asking--

**Gerhard Lazu:** Very much so.

**Rich Burroughs:** ...if you could install Vim in a Kubernetes cluster, that is maybe the nerdiest question on DevSpace I've heard yet. We'll not get into tabs versus spaces or anything, but - yeah, in essence, you can. It's configured with a YAML file. You can define the workflow there, and there is a way to basically run arbitrary shell commands. So you could do that.

**Gerhard Lazu:** Okay. Interesting. Do I need to get a license to use DevSpace? How does that work?

**Rich Burroughs:** DevSpace is open source.

**Gerhard Lazu:** Can I get a license for a supported DevSpace? Is there such an option, and why would I get that? I'm genuinely curious, because I'm thinking of GitHub Codespaces; it's free, sure, but then you can pay for it and not have to worry about the hosts. So there's real value that I would choose to go for. VS Code - never really got along with it. I'm still waiting for the Vim part in GitHub Codespaces. And if you're telling me that I can have that with DevSpace - well, Kubernetes clusters, we've already established it's really easy to get them, spin them up, whether they're real one or virtual one. So I'm just going a step further.

**Rich Burroughs:** If you look on our website, you're not going to find something trying to sell you a supported DevSpace. We do, I think, have one customer now who is paying us for DevSpace support. It's not really the product that we're trying to sell. For us, really, the point of DevSpace is to help people with their development workflows... And hopefully, when they learn about us and what we're doing and how we're giving back to the community, that makes them want to look at the other products that we sell, and maybe use it along with our commercial product. And they are very compatible. There is a Loft plugin for DevSpace that makes it easier to use it along with our commercial product. But it's not really something we sell generally.

**Gerhard Lazu:** I'm going to ask you this one thing about your commercial product... Which is your favorite feature in the commercial product?

**Rich Burroughs:** So that's easy. So my favorite feature by far is this thing called sleep mode. And what sleep mode does, basically, is it scales down your replica sets when they're not being used. And I think that dev environments are probably the strongest use case for this. So developers are only working like 40 hours a week. They might even have multiple Kubernetes environments that they need to use. All of that stuff is sitting there. And as we've mentioned, that's a lot of cost... And what sleep mode does is it looks at the API requests that are coming in. And if there are none for that namespace, it can make it sleep. And again, this is configurable, right? So you can say "If there haven't been any API request for 30 minutes, go ahead and scale down all the replicas."

\[00:43:49.20\] And so if you're doing something like auto-scaling your compute nodes, you could actually end up scaling up and down nodes based on that. But there are some places I think that do charge just even based on the workloads. And so you could definitely be saving some money there, saving resources for sure. It's very configurable. We've just added some new features recently where you can even set up a schedule. You could say, “I want this stuff to sleep everyday between 6:00 PM and 7:00 AM", however you want to set it up.

**Gerhard Lazu:** So your answer made me want to look on the website and find out more. So job well done. Now we can move on to the next thing.

**Rich Burroughs:** I just want to add one more thing. The thing that's really cool about it is that it does just scale all the replica sets down to zero replicas, right? Everything else is still in place. You don't have to spin up the environment again. It's all there, it's all running and ready to go. And it makes an annotation to remember how many replicas were there. And so when the sleep mode ends, it just spins it all back up.

**Gerhard Lazu:** Okay. So I'm going to ask you a related question.

**Rich Burroughs:** Okay.

**Gerhard Lazu:** But this one is about the CNCF landscape. And I'm wondering, which is the project that gets you most excited these days from the CNCF landscape?

**Rich Burroughs:** Oh gosh, that's a hard one, because I'm not sure if some of the things that I would necessarily think of are technically in the CNCF or not. \[00:45:18.09\]

**Gerhard Lazu:** It's okay. We can make it wider. I'm just wondering what gets you excited these days. And I'm imagining it's going to be Kubernetes related, but it's okay if it's not.

**Rich Burroughs:** I mean, a couple of things come to mind immediately. I'm super-excited about Sigstore and the stuff that the Chainguard folks are doing. I feel like that's going to have a huge impact on the way folks release open source software, and consume it, too. So if you're not familiar with Sigstore, people who are listening - it basically lets you sign and validate software. And yeah, I think that's going to have a huge impact.

And I think the other thing that's out there that really has blown my mind a lot is Cilium. I heard about eBPF at first through Brendan Gregg, I'm pretty sure. I've followed Brendan on Twitter for a few years, I've been a big fan of his... And I saw him talking about eBPF and he was mainly talking about it in relation to performance, which is his specialty, flame graphs, things like that. And so I thought, "Okay, this eBPF thing is pretty cool."

And then I saw Liz Rice's talk at the last KubeCon, and another talk as well, and - I didn't realize how flexible it was; like, how many things you could do with it. I saw this talk and I immediately started thinking about incidents that I had been in, times that I was troubleshooting where it was really, really difficult to solve a problem. Basically, it can tap in and see everything that's happening in your kernel. It reminds me a lot of DTrace, actually. I was a Solaris nerd years ago.

**Gerhard Lazu:** Yeah.

**Rich Burroughs:** And Linux -- there is a Linux DTrace, but it's just not the same. And to have that power to be able to-- You're holding up the Brendan Gregg book about systems performance, yeah.

**Gerhard Lazu:** Oh, yes. This was one of the Christmas presents. I can hardly wait to read it. This is the second edition. It's an amazing book. Brendan Gregg, you're a legend. That's all I have to say.

**Rich Burroughs:** And so, eBPF is this super-flexible thing that can do so many different tasks, but you've got to be able to write code to make it do those things. And for a lot of folks, writing kernel code is going to be a barrier, right? And so the idea that you have this tool that -- it does all kinds of things. It's like a security tool, it's monitoring, it's a CNI... It's really amazing. So yeah, that's another one of the projects that I think is super-exciting.

**Gerhard Lazu:** \[00:47:54.16\] I had the pleasure of talking to both Liz Rice and then Lawrence at the last KubeCon. I forget which episodes those were, but we only had maybe 15-20 minutes.

**Rich Burroughs:** Yeah.

**Gerhard Lazu:** I love those conversations. And you reminded me to (I'm writing this down) talk to Dan Lawrence; I'm writing it down... And talk to Liz Rice. So I do not forget. Thank you very much for that.

**Rich Burroughs:** Duffie Cooley is there too, Isovalent.

**Gerhard Lazu:** Ah, yes, yes, yes, yes, yes.

**Rich Burroughs:** He's great.

**Gerhard Lazu:** Yeah, that as well. That as well. Yes. I remember that, because I reached out to him via email. He was at Heptio, VMware, Apple, and now I want to say Cilium...?

**Rich Burroughs:** Isovalent.

**Gerhard Lazu:** Isovalent, that's the company name. Thank you. Thank you. And he's definitely one of the people that I want to talk to. So thank you very much. My list - it's Cilium as well. Cilium is there. It's really interesting. I can hardly wait to try it out.

**Rich Burroughs:** There we go.

**Gerhard Lazu:** Yup, that's the one. Crossplane. There's something about it. I don't know. It's the people, it's the project... We are actually starting to use it for our 2022 setup. Every year we refresh our setup completely, and we challenge a lot of the things that we use. Cilium is one of the things that we want to use, but Crossplane is something that we already use. And the idea behind it is that if someone was to delete our production Kubernetes cluster, and everything was down, there is a Crossplane running on Upbound which can restore everything. So go and delete production, be my guest, because it'll be back within a few minutes.

**Rich Burroughs:** It's super cool-looking, and to me, it's very analogous to those things like Puppet. It's funny to me -- and I don't mean this as a dis at all. Dan, who works at Crossplane, is fantastic. He actually did a demo recently where he used vcluster as part of his Crossplate demo, which was really cool.

**Gerhard Lazu:** Really? I missed that. Okay.

**Rich Burroughs:** Yeah.

**Gerhard Lazu:** Dan, you haven't told me about this. Come on, Dan...

**Rich Burroughs:** Yeah. It's that same sort of thing. The tools change, but the concepts don't. You don't want to rebuild production from scratch if someone deletes it, right? And so you're going to use Terraform, or Pulumi, or Crossplane or something, to be able to codify these things, so that you can either build new environments, or add things on, or even replace things that get deleted accidentally. So yeah, Crossplane looks super cool. I haven't played with it yet, but I'm very interested in it.

**Gerhard Lazu:** For me, it's the idea that something is continuously reconciling, so there's nothing that anyone has to do. If you have Crossplane running somewhere, we -- it was part of Shipmas, episode \#33, we contributed... Actually, we built the Linode Terrajet provider, which provisions LKE clusters, which is what we use for production currently.

**Rich Burroughs:** Okay.

**Gerhard Lazu:** And if someone was to delete, for example -- including myself. If I was to accidentally - and I'm doing air quotes - delete the Kubernetes cluster, our production Kubernetes cluster, there is Crossplane running, which will notice that, that the state diverged, and it will automatically create it without anyone needing to run anything. And that is amazing. To me, that's so powerful.

**Rich Burroughs:** Yeah. And when you think about the fact that Kubernetes also has those built-in methods of reconciling state, it really does seem like you could spin up a cluster and have all your workloads ready to go pretty easily.

**Gerhard Lazu:** That's right. So I missed your Twitch stream, but I'm wondering, what is your new startup idea? Is it related in any way to what we've just discussed?

**Rich Burroughs:** No, not really. I've been doing some garbage tweets lately. So I'm streaming on Twitch a little bit, just for fun. I've been playing games, and I was playing the new Pokémon game, and there was basically a Pokémon name that came up that I thought would be a good startup name. I'm actually blanking on it right now.

**Gerhard Lazu:** It'll blow your mind, but Pokémon is in the Kubernetes documentary.

**Rich Burroughs:** Oh, really?

**Gerhard Lazu:** Yes, really. You will enjoy that.

**Rich Burroughs:** Okay. I'm going to have to watch it.

**Gerhard Lazu:** It's too good. Okay. So I mentioned at the beginning that we'll talk about one of the topics that you're passionate about, and that was ADHD. Do you want to talk about it?

**Rich Burroughs:** \[00:52:09.25\] Yeah, absolutely. So I got diagnosed with ADHD just a little bit over a year ago. And I'm not young, I'm pretty middle-aged, and so it's really been amazing to me, because it's had an impact on my life in so many ways and I didn't realize it at the time. And this is an experience that a lot of folks, I think, who get diagnosed, especially as adults, have. There's a lot of things that go into it, and people's experiences are different. People talk about ADHD in sort of sweeping ways, but it's not exactly the same for everybody. I always try to caveat that.

But some of the classic problems that people have is like following through and finishing things, forgetfulness, like working memory problems... And it's just really interesting to me, because I look back at my life... I dropped out of college twice. I never graduated. I had academic problems in high school, too... Just a lot of things that I think have been very much influenced by this thing that I have, and I didn't understand it.

And a lot of what ends up happening is people end up labeling you, and you end up labeling yourself, you're lazy, you're dumb, you're a loser, whatever... And all those things can have a really big impact on somebody's self-esteem. And so it's been really great for me to get diagnosed and start learning more about it, because I feel like I'm at a point now, a year later, where I understand my brain much better. It doesn't mean that I've overcome ADHD, right? I don't think that really happens; but I'm getting a lot better at managing it and coping with it.

One of the things I've started doing is -- so I've got an ADHD coach who has helped me a lot, and I'm actually now in training to become a coach myself. So I'm part of this training program where it's three classes, and I've taken the first two now. And through that, I've learned a lot as well.

And so I think the most beneficial thing for me, besides just like understanding my brain better, is that I've been pretty transparent about this stuff. I've talked about it on Twitter quite a bit, the fact that I have it, and what it means, and I'll joke about some of the things that I do that I think are driven by ADHD... But I feel like it's important for us to talk about these things, if you can. Not everybody is going to be able to make themselves that vulnerable, to talk about mental health issues publicly. And I'm someone who's got a lot of privilege as a straight white guy, right? And so I'm more secure in talking about those things probably than some folks would be.

But the most rewarding thing to me by far is I'll have people - and it's usually in direct messages on Twitter, somebody will send me a message and they'll say, "Hey, I really related with your tweets. I went out and got evaluated and it turns out I had it. And now I'm taking medication and I'm doing much better." Or maybe it's their kid that they got diagnosed. And that's just been an amazing feeling to me. Every time I get one of those messages, I'm like, "Wow, something I did maybe helped make a big difference in this person's life."

**Gerhard Lazu:** I know that the last couple of years, two to be more precise, have been really tough mentally for many of us; all the lockdowns, all the social distancing, conferences, everything remote, lots and lots of meetings... It's been tough for a lot of people. And I know that some of my closer friends are the ones that have been struggling mentally. And I'm wondering, what is the difference between having ADHD and just being burned out?

**Rich Burroughs:** \[00:55:53.13\] That's a really good question. So ADHD - parts of it at least are definitely a cognitive thing, right? Like I mentioned, the working memory, and what they call executive function, which is the ability to lay out a plan and accomplish a goal, that kind of thing. So my feeling is the reason I got diagnosed in the first place is that I was struggling a lot during the pandemic. That's exactly what led me to go and get evaluated. And what I feel like is that the cognitive load, in general, has been a lot higher for a lot of people, which I think exacerbates the ADHD stuff. But it's interesting, because there are people who -- there're sometimes people who talk negatively about ADHD, and one of the things they'll say is, "Oh, well, everybody gets distracted." And they'll look at ADHD symptoms and then they'll say, "Oh, everybody has that."

It's true that a lot of people experience some of those ADHD symptoms, but to actually get diagnosed with ADHD -- you know, part of the evaluation process is not just looking at what's happening with you today, but looking at your childhood; did you have these problems in school? While maybe more folks right now are experiencing some of those symptoms than they normally would, that's not going to get somebody an ADHD diagnosis if it started two years ago. So that's really the problem. It's partly degree, and it's the fact that this has spanned your whole life, because it's a physical thing in your brain and it's very genetic. I mentioned people who talked about their kids, getting their kids diagnosed, and it's actually a really common experience for parents to take their kids to get evaluated. And then as they start learning about ADHD more, they realize they have it, too.

**Gerhard Lazu:** Okay. So now I realize the tweet where you asked about rereading things a few times, and the relation to ADHD 0 that was a joke, because I do that as well. I reread my emails many, many times, and it doesn’t mean that you have ADHD, just to be clear.

**Rich Burroughs:** I actually was joking, but not joking, because I really do think that part of the reason that I do that is because of my ADHD. So there are some things that come along with ADHD. Because you've failed so many times at different things, there is shame that comes with that. ADHD people, a lot of them tend to be perfectionists. And so the joke I was making was about how I will re-read an email a bunch of times after I've already sent it. I'll just keep going back and looking at it again. And while you don't have to have ADHD to do that thing, I think there are specific reasons why somebody with ADHD might do that.

**Gerhard Lazu:** I see.

**Rich Burroughs:** It's, again, a little bit of that difference in degree, right? There's a really good book by Dr. Barkley, who is one of the really famous ADHD researchers. He shares some really amazing statistics in there, but the gist of it is that he did this survey of people with ADHD and then people in the general population, and it goes through a bunch of different symptoms, and it's like, the people in the general population will say they have the problem, but it's a small amount, and then the ADHD people, it'll be like 85% or 90% or something. So it really is a difference of degree, and it's a disability, or it can be, if it's something that interferes that much with someone's life.

**Gerhard Lazu:** Thank you, Rich, for opening my mind to a topic that I knew some things about, but not as much as you shared. So thank you very much for that.

**Rich Burroughs:** Oh, you're welcome. I think it's something that a lot of folks don't understand, and unfortunately, there is some really bad information out there about it. So, yeah...

**Gerhard Lazu:** As we prepare to wrap up, what would you say is the most important takeaway for our listeners from our entire conversation today?

**Rich Burroughs:** Oh, wow. There's so many. It was a really great conversation. I think that honestly, for folks who are in software, and especially using Kubernetes, probably the thing that I'd like to emphasize again is how amazing the community is. We talked about my podcast and that latest episode with Kris and Dave... And Kris has been in a number of different open source communities, and she mentioned during that conversation that the Kubernetes community was the best and most welcoming one she'd ever been a part of. And I feel the same way.

If you're someone who is interested in contributing, or speaking about Kubernetes -- I mean, contributions can come in lots of fashions, right? It's not just code. It's docs, it's giving talks, doing videos... Whatever you can do to help educate people. So if you're interested in doing that sort of thing, but maybe you've had bad experiences in other technical communities, the Kubernetes one is really welcoming, and I think that it's worth getting involved with.

**Gerhard Lazu:** I'm definitely seconding that. Spot on. That was my experience as well. I've been around for a couple of years, and I didn't have like one bad experience. People make all the difference, and it's something which keeps drawing me back to the KubeCons. It keeps drawing me back to all those conversations. They're amazing.

I would like to thank you for today, Rich. And I'm looking forward to returning the favor when Ship It comes to Kube Cuddle.

**Rich Burroughs:** Yeah. I definitely want to have you on, and I'll try to watch the Kubernetes documentary before we have that conversation.

**Gerhard Lazu:** Yeah, that'll be great. Thank you, Rich.
