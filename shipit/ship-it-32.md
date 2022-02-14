**Gerhard Lazu:** So today I'm joined by my favorite startup team: Chris Hedley, Colin Humphreys and Paula Kennedy. Welcome!

**Colin Humphreys:** That's a warm welcome, Gerhard. You must only know one startup team...

**Gerhard Lazu:** Well, you're not very far from the truth... \[laughter\] Because - why do I say "my favorite", right? So seven years ago I had a platform talk with Colin, which convinced me on the spot to join the team, to join the team, to join the CloudCredo startup. And that's why I say you're my favorite startup team... Because in the last seven years I haven't known a better startup than CloudCredo.

**Colin Humphreys:** Oh, thank you, Gerhard. That's very kind... Can I say you are unequivocally my favorite podcast host?

**Gerhard Lazu:** And this is your first podcast, so yes... \[laughs\]

**Colin Humphreys:** You are absolutely my favorite. You are also my least favorite at the same time, because you are the only one I know... But yes, you are absolutely, unequivocally - like, canonical truth - you're my favorite one, Gerhard.

**Gerhard Lazu:** \[03:59\] Thank you, Colin. I appreciate that. Thank you. But I'm wondering, do you remember the platform talk that we had seven years ago, Colin? Do you still remember it?

**Colin Humphreys:** We were together for a long period of time, for those seven years, which in particular -- because let's be straight here, Gerhard, I talk a lot about platforms, to many people's great cost...

**Gerhard Lazu:** I know you do.

**Colin Humphreys:** ...in terms of time. But I do speak a lot about platforms. So which particular platform talk are you talking about?

**Gerhard Lazu:** The one that convinced me to join CloudCredo. This was the OpenCredo office, you met me the first time, and you were sharing the vision that you had about platforms, and why you thought Cloud Foundry at the time was amazing...

**Colin Humphreys:** I couldn't have been at the CloudCredo office, because we squatted in with --

**Paula Kennedy:** No, the Open Credo one.

**Colin Humphreys:** Oh, the Open Credo office. Yes, we definitely squatted there.

**Gerhard Lazu:** The Open Credo office, yes.

**Colin Humphreys:** That was seven years ago, so that was arguably kind of a midpoint in a journey that we've all been on for a really long time... And it's been very interesting. I think, I could have had that self-awareness and that reflection; we know we're near the end of that journey. There's a huge swelling, a rise in platforms at the moment. Talk about platforms is going through the roof. Everyone thinking about "How can we enable applications teams to deliver more?" So I think - yes, we're talking about seven years ago, but I have been building platforms for 20 years odd now. I'm sure Chris, as well as Gerhard - we've all worked in this area for so long now, and Cloud Foundry was amazing. I have learned so, so much from it. I say "was amazing." It is amazing. It handles a particular set of needs incredibly well, and I've learned so, so much from it. It's gonna be interesting to think about, in the context of this conversation, where were we seven years ago. What had we learned that took us to that point seven years ago, and what did we learn in those seven years, what's the future trajectory, what's the next seven years... Will we be talking in seven years, Gerhard, about where we are now, and looking back on this podcast, and saying "Do you remember when we said that stuff about that thing? Do you remember when Kubernetes was a thing?" It will be interesting...

**Gerhard Lazu:** I can see that happening. I can definitely see that happening. I also am very glad that we're recording this conversation, so we can listen back to it seven years from now... And I wish we had recorded our conversation seven years ago. But what I do remember is a talk that you gave at the OpenCredo office. The talk was about your journey when it comes to deploying apps... And it starts with building a data center. That really got me, because you were saying "That's how not to do it. I've done it. And I wish others wouldn't repeat my mistake." So that really caught me.

Now, we'll come back to this, but you asked me to do something in that talk, which I haven't done, and I will do during this recording. And I'll explain it to the others a bit later. So seven years ago you asked me to do something; I didn't forget, I just couldn't do it at the time. It's coming; just be prepared. \[laughs\]

**Paula Kennedy:** So you've waited seven years to do this thing,

**Gerhard Lazu:** I think, yes. \[laughs\]

**Colin Humphreys:** That's impressive patience.

**Paula Kennedy:** Wow...

**Colin Humphreys:** I'm intensely curious about what it's gonna be... And I wonder if it's gonna be worth the wait.

**Gerhard Lazu:** It will be.

**Chris Hedley:** They do say revenge is best served cold. Seven years is a long time to cool off, so I'm looking forward to this.

**Colin Humphreys:** Seven years is absolutely zero. Zero degrees Kelvin revenge, so I wonder how this is gonna go. But Gerhard, you need to let us know when you do the thing that you promised seven years ago, and haven't been able to do in the intermediate period. I'm somewhat terrified now; slight sense of trepidation... But I'm looking forward to it.

**Gerhard Lazu:** Trust me, it will be great. It will be great.

**Colin Humphreys:** You mentioned the talk, and you mentioned how I started off the talks a while back, talking about projects I'd worked on the past... And I use that word "project" very specifically, where people were wasting huge amounts of money. And the particular one we're talking about here was a 12-million pound project in which I worked for three years with a number of people in the order of hundreds, to deliver a system that was canceled approximately a month after it was delivered, because the users hated it. And I think one of the biggest trends we've seen in the past ten years is really shifting from projects to products, and product thinking. And that's like a massive, massive shift in the industry. Thinking that things aren't just like once and done. This notion of continuous iteration, small batches, fast feedback, those kind of things.

\[08:13\] That product orientation, learning about your users, iterating towards their needs, and "you write it, you run it" kind of mentality with the teams that deliver those products - that's been a change that swept through every level. And people commonly talk about that in terms of the application teams. "Oh, our application is no longer a project. This is gonna be a product, and we're gonna have a team that are there for the life of the application and while it's the differing value" But I would say the key thing that I've honed in on - and I know you have as well, the other people on the call - I know you've all honed in on this notion of platform-as-a-product, and taking that product methodology, taking that product thinking, the user centricity, taking that and bringing it to the platform layer. And that's kind of the key thing that our company stands for, and that we stand for, is taking that product-orientated thinking, and the entire team composition, you write it, you run it, the ethos, a user-centric design, lean product management, extreme programming - that whole set of patterns, and bring in those patterns to life at the platform layer of the stack.

**Gerhard Lazu:** I'm really glad that you mentioned that, Colin, because that ties in really nicely with something that Paula did recently. I think the equivalent of "Let's build a data center" seven years ago today means "Let's build a platform." And two years later you still haven't shipped anything; you've just built a platform. So I can see history repeating itself. And Paula, you gave a talk about a month ago at the DevOps Enterprise Summit, is it?

**Paula Kennedy:** I did. Yes, DevOps Enterprise Summit, yes.

**Gerhard Lazu:** And the talk was about crossing the platform gap. Can you tell us about it?

**Paula Kennedy:** Yeah. So I was very lucky to have my talk selected. And what it was really about was - as Colin mentioned, it was very much about what we've seen in the last few years. And even though we have been talking about the challenges of teams trying to get from kind of the infrastructure layer to deploying applications - we've been talking about that for a long time, and DevOps was kind of supposed to help where things could get shifted from apps, and people could collaborate together. But what we've seen is that if the "you build it, you run it" mentality is what our teams are being asked to do, they're being asked to take on more and more things. And when they are trying to build particularly on something like Kubernetes, which has lots of pieces that have to be wired together, it means the gap to get from infrastructure to delivering the actual value is just getting more and more complicated, and there's more things to manage. And we're big fans of team topologies. I don't know if you've read that book; fantastic book. But they talk about cognitive load as being a big problem for those app teams, because they're being asked to manage more and more components in the stack, they're trying to juggle more and more things, and it just means that they can't focus on delivering the application. So that's what we describe as the platform gap.

There's a fantastic blog about it on our website, and I talked about it as well, as you mentioned... But it's basically like "How can we make it easier for teams to cross that platform gap?" And the thing I talked about at DevOps Enterprise Summit was there's two parts to it. One is about organization change, which team topologies handles really, really well. It's about having application teams able to focus on their core value, and then have a platform team that can provide the supporting platform, and then there's a kind of enabling teams and specialist teams that can also support... And it's a way of organizing to get fast flow across the business. That's really what team topologies is about.

And then the second part that I talked about specifically, which Colin mentioned, was platform as a product. So when you have your platform team in place, what should they be doing? What are the skills that they need? What are the things that they should focus on? Treating their platform as an internal product, making it useful, making it compelling, making it like the right platform for the app teams... And how do they go about it. That was what I talked about. It seemed to go well... It was kind of odd though; the experience of pre-recording the talk was quite interesting. The whole experience of doing that for the DevOps Enterprise Summit was something I hadn't done before. It was quite interesting. But it seemed to go well...

**Gerhard Lazu:** \[12:17\] So if it's pre-recorded, does it mean that I could watch the talk? Is it online?

**Paula Kennedy:** It is. So there's a whole video library... I think what you need to do is -- I think you can get two weeks free. You can sign up -- you sort of sign up for a membership and you get two weeks to watch as many talks as you want for free. So you could go watch it.

**Gerhard Lazu:** Right. Okay.

**Paula Kennedy:** What was interesting was I did so many takes of it... This is just a weird story, but - I did so many takes, because I wanted to get it perfect. And I think when you give a live talk, you have at it, and if you mess it up, it's done. When you're pre-recording, you're like "Oh, I messed that up", and you do it again. And I did multiple, multiple, multiple takes. By the time I nailed the perfect recording, it was 1 o'clock in the morning. But it was perfect. No mistakes, I said everything I wanted, awesome. And then when I watched it back, it was kind of low-energy... Because by the time I did it, it was 1 o'clock in the morning, so my energy level was quite flat...

**Gerhard Lazu:** Yeah, it makes sense...

**Paula Kennedy:** ...but yeah. I enjoyed it.

**Gerhard Lazu:** Okay. I know what you mean. I used to do things like that before I discovered video editing and editing my talks. That just changed my life. \[laughter\] So you're right... You have to also -- like, voice-over, that's amazing, especially for showing something... But that also takes time.

You're right, I think not having conferences in-person, and having talks pre-recorded, it just makes certain things difficult. And this definitely is one of them. But I'm sure it's better than giving the talk from the U.K, on a U.S. timezone, and be awake at 1 o'clock or 2 o'clock in the morning... So yeah, at least there's that. Okay.

Where do you stand when it comes to platforms, Chris? What is your perspective, and how do you see this space?

**Chris Hedley:** That's a very interesting question, Gerhard. I guess I used to be, if you go far enough back in time to my pre-CloudCredo days, I guess I was on the application teams. I was an application developer. I was writing business-facing applications to serve industries, the banking industry, the sports betting industries, governments projects... And I was lucky enough to be in the U.S, working on a project with VMware at the time. This would have been circa 2010-2011, working with big banking clients out of the U.S, and VM will with it. And through my connections on the ground there with our clients, I got to see Cloud Foundry for the first time. Cloud Foundry was kind of the first on-premise platform as a product, you could call it that if you liked. It provided that PaaS-like experience.

I looked at Cloud Foundry, I saw an app being pushed into it, I saw cf push for the first time, I saw cf create service and cf bind work for the first time... And this was a very, very early version of CF. I don't even think it'd been open sourced at this time. I think I looked at that platform and I said to myself - I probably said it out loud - "I will never work on a project ever again that doesn't use this technology or one like it." And from that moment onwards, I kind of got sucked into the CF ecosystem, I got sucked into the platform ecosystem... And actually, unfortunately, I never got to work on a project as an application developer that got to push code into a Cloud Foundry on a live project. From that point on, I only end up working on Cloud Foundry itself, or on platform teams standing up Cloud Foundries for other developers... Because anybody who was interested in CF at that time kind of got sucked into the ecosystem. And on the back of that experience, CloudCredo came along, we became that kind of Cloud Foundry open source consultancy, very small, out of London, and then eventually we were acquired by Pivotal... So I just went on the journey of building the platforms, and that's kind of where it's led me.

\[15:49\] But to answer your question directly, I think it's the forced multiplier that I've observed greater platforms can have on organizations and on development teams, to be able to build a platform and offer it to a set of users and just reduce the number of things that those users have to worry about, just to remove that kind of organizational friction, if you like, so people can get stuff done. I think it's that specifically that kind of keeps me motivated. I don't see the problem as being solved yet; there are still so many opportunities, there are so many organizations that need help... K8s has come along, it's fantastic... K8s is arguably a platform building technology, rather than a platform you can offer to end users in a kind of meaningful, consumable way... So the opportunity there to kind of continue the journey and try and build some abstraction in and around K8s to kind of continue to help and continue pushing that kind of platform movement forward is, again, the thing that continues to motivate me. And here we are, been a hastle trying to do something about that, hopefully.

**Gerhard Lazu:** Yeah.

**Colin Humphreys:** I wonder if we should maybe all think about the elephant in the room... So for those people who are listening, four of us are all actually standing in one room and we all have one hand each on an elephant, and that elephant has Cloud Foundry written on it. So we've touched on it a few times... And it's worth actually covering, like - what did we learn from that journey? Where is our thinking now, and what have we taken on and moved on? Because I think it's really important to talk about that, given that we've all got a great degree of history working with Cloud Foundry.

I think, from my personal perspective, I think the thing that I really didn't understand enough at the time, and now I've grown to understand, is the notion of -- in fact, maybe it's sitting right in front of me... You have application teams, and you have platform teams. And we talk about those in terms of, in glowing terms, you write it, you run it. Prior to that, we would have development teams, and operations teams. We had dev and ops, and we said "Yeah, this doesn't work well", people are throwing things over the wall. So then we flipped that sideways on, to instead say "Your application teams now write their code and look after their code." And then low down the stack, the platform teams build the platform, develop the platform, and also operate the platform. So everyone's looking after their layer, as it were, and providing APIs to the layer up. You may have an infrastructure team, one or more platform teams, many application teams, and everyone's looking after their part. But the part that I think that we've learned it didn't work out so well is the notion that any one vendor or group of vendors can provide a platform that's fit for purpose in all organizations. Now, I put my hand up, I was 100% on board at Pivotal, building something called One Platform, which was gonna be the one platform to rule them all.

Now, this, in hindsight, was short-sighted, because we actually learned that the 80/20 rule really fit well. Nearly everyone was doing 80% of stuff that's kind of normal, and 20% that's differentiating. But over time, you start to talk to enough customers, and we spoke to -- you know, at Pivotal we had hundreds, like 350(ish), and we spent time with them, we learned about them... But the 20% that was different about each customer was different with each customer. So to develop a common one platform that would suit all of them - it became impossible. And what we'd actually done is violate the understanding we had about the world, in that your platform team shouldn't just be operating somebody else's platform. They're also developers of the platform. And to me, at the moment, everyone is fixated on app devs, developer experience, this whole set of things. And then you get this emerging set of patterns around app ops; everyone's talking about app ops, how do we make that work...

And then you've got vendors still trying to build the one platform to rule them all, and no one's addressing platform developers, or platform development responsibilities of a platform team. How do we build and curate a great platform? How do we develop that, how do we operate that, how do we monitor that, how do we measure that, how do we do all the responsibilities necessary to build a great platform. And I feel that nobody out there is addressing what it means to be a good platform developer, and to bring that set of responsibilities to a platform team. Everyone thinks platform teams just take off-the-shelf software and run it, and I think that's where Pivotal went wrong; I think that's where all the big vendors go wrong. No one's trying to help people develop great platforms. And that's where we come in. We at Syntasso have built a framework called Kratix which is all about helping you to build the platform relevant to your organization, and I think that's a really challenging set of concerns that no one's looking at. And the framework that we've built is about enabling you to build the framework that's for your organization, not saying to you "Here is a whole platform. Take it and use it in your organization." Because we've learned that platform, if handed to everybody, will not fit everybody's needs.

**Gerhard Lazu:** \[20:24\] I'm really glad that you mentioned that, for a couple of reasons. The primary one - and I think it's the only one which I'm going to mentioned - is that people want that one Kubernetes experience. They look at the cloud-native ecosystem and they say "This is too confusing. Give me the version that I need." That thing doesn't exist. And it doesn't exist because you need to know what is important to you.

So what are the principles that you're trying to convey in this platform, that you're trying to embed in this platform? So once you know what those principles are, with what is important to you - and this, by the way, is different across different industries, across even different teams.

So once we establish what those things are, how do you build that one platform, which by the way, it's only going to be your platform; I don't think anyone else will be able to use it... Maybe your competitors, but they're busy doing other things, by the way...

**Colin Humphreys:** Agreed, yeah.

**Gerhard Lazu:** So do you think about this differently, Paula?

**Paula Kennedy:** Well, it's interesting, because there's the Kelsey Hightower tweet, which is basically around everybody wants a PaaS; they just want to build it themselves. And I think that's where we've tried to learn the lessons from Cloud Foundry. People loved the cf push experience. They loved being able to write some code, have an idea -- like, the promise for Cloud Foundry was "Write some code in the morning... Have an idea, write some code, push it, Bob's your uncle, you've got a running application in production." People love that. And I think developers like it, and business owners like it, and customers like it... That's what people want. But, to what Colin said, the PaaS experience that they're looking for - everybody's actual platform as a service needs to fit them, needs to fit their bespoke needs. And Cloud Foundry tried to put all the wiring in a box, and say "Here's the box. Just use it." It just didn't fit. There were too many edge cases, and they were all different for different customers. And so it's kind of challenging.

I think people want the simplicity of a Cloud Foundry experience, but they want the composability of Kubernetes. They want to be able to wire together the thing they want. But wiring together the thing they want is really hard, so people are looking for abstractions. Maybe they're looking for the vendors, or the cloud providers, to say "Just give me everything that I need, and make it really easy for me to use it." But I think where we're trying to see our place in the market is we want to give people that opportunity to have a simpler experience, but they can build it themselves in an easier way; Syntasso is trying to really focus on "Platform team needs to build the platform for your business." It's the only way you're gonna get the right platform, is if you tailor it for your organization. And 80% of that you can get from the cloud-native landscape or from different pieces, but platform teams are gonna have to put it together.

We talked about cognitive load for the app teams - we're trying to reduce that by shifting things to the platform team. But where Syntasso is now trying to help is "How do we help the platform team?" Because the more stuff we pile on them, and the more pressure we put on them to say "You need to build the right platform, you need to choose the right pieces, and you need to wire them together, and you need to make sure it all works for those app developers who are really precious", who's gonna help the platform team? And that's where we're trying to focus... Because it's like, they need to be able to build the right platform, and give a PaaS experience to their customers.

**Gerhard Lazu:** That's actually a really good point. I really like how you're thinking about that, and I would love to hear how Chris is thinking about the how part. So that sounds amazing... How do you actually achieve that platform builder?

**Chris Hedley:** Yeah, it's fascinating. So just to extend on what Paula has just said - I think there's often an assumption that goes unsaid, that platform teams have one set of customers, i.e. the application developer teams... I think in our experiences we've realized they quite often don't. They have internal audit teams as a customer, they have internal security teams as customer, they have finance in the form of billing, tracking as customers, and I don't think we've seen any platform tooling or technologies or frameworks or whatever you wanna call them out there that has enabled the platform team to service all of those customers.

\[24:29\] So CF was brilliant to just serving the Twelve-Factor App use case; not so great if billing came along and said "Tell me how much that particular application is consuming in compute resource, so we know how much to charge the team." Not so great if security come along and request certain runtime security scanning features to be taking place within the platform. All of that stuff got very difficult in the PaaS'es that were out there. I think we've taken on those learnings that we've picked up through our seven years of experience in and around the CF world and Pivotal VMware in CloudCredo, and we're trying to break that open a little bit, and we're trying to provide toolings and technologies that first of all allow the platform teams to provide great consumable APIs to their consumers, so people can get frictionless access to the software they need to build their own software, to serve their customers.

We're also trying to figure out abstractions that are meaningful to the platform team, so they can also service their other customers, so they can inject what they need at runtime into the software to make sure the billing box is ticked, the older boxes are ticked, the continuous secure software supply chains events are all taking place when they should be. That the right monitoring stack is injected into the software that's required. We could go on all day listing the needs of a platform, and I think Kratix tries to encapsulate that learning and provide almost like a lifecycle -- not just the ability to provide the API, but to provide a lifecycle for the request of a piece of software, so that platform teams can add the custom things they need into a request for software. And it's specifically that that we're thinking about.

And then once that happens, how do you even distribute that software across the kind of infrastructure as state, so that users can start using it. I think once you've rolled all of those things up, that's quite a gnarly problem to have to grapple with.

**Break:** \[26:25\]

**Gerhard Lazu:** We mentioned Kratix and Syntasso a couple of times, and as you know me, Chris, I like my whats. "What is JSON?" That was a very interesting question that I used to put during interviews, when we used to interview at CloudCredo. So --

**Chris Hedley:** Has anybody managed to answer the question yet, Gerhard? \[laughter\]

**Gerhard Lazu:** Yes, they did, actually. People -- you know, they just don't get flustered in the moment; they just take it at what it is... They're just "What is JSON?" The acronym, what does it stand for. So what is Kratix, Chris?

**Chris Hedley:** First of all, I think the meaning of Kratix we should probably call out to the top there, just on the back of that JSON conversation. So all credit goes to Paula here...

**Paula Kennedy:** Or blame. One or the other...

**Chris Hedley:** We're all about git praise... Unless it's colon, and then it's git blame.

**Gerhard Lazu:** Yeah. \[laughs\]

**Paula Kennedy:** So the name Kratix came from a Greek word... So there's a bit of a tie-in to Kubernetes being a Greek word, so that's how Syntasso -- I'm going through the whole naming. That's how Syntasso got its name. So Syntasso came from a Greek word, which means to compile things in an orderly fashion. When we were thinking about what we were trying to do, and the complicated cloud-native landscape, and how can we wire together a good platform experience - that's where Syntasso came from.

And then Kratix kind of -- we kept on the theme. Kratix comes from a Greek word which means to keep -- like, in Greek, I'm not gonna say it, because I can't speak Greek... But in the phrase "to keep a promise", the Greek word for "keep" is something that looks a bit like Kratix, and that's where we were like "Oh, let's make it sound a bit more technical", and therefore we came up with Kratix.

**Gerhard Lazu:** Okay.

**Chris Hedley:** I think that to keep the promise is kind of -- that leads us quite nicely into a little bit more to what Kratix actually is... I think we looked -- because we were doing a lot of our investigation into the state of the K8s ecosystem; we were looking at operators as a technology to build and distribute software. And operators are great, they do a tremendous job, but they are also somewhat limiting when you start limiting at some customer kind of infrastructure, when they've got like one-to-many (maybe hundreds) K8s clusters in their data centers.

**Colin Humphreys:** The first problem I think Kratix is really trying to solve, in terms of "How do we do this?" - you have to imagine that most people we speak to live in a landscape where the infrastructure is many, many Kubernetes clusters. It's the first thing I wanna say; this is all about multiple Kubernetes clusters. We've seen this as a trend... I think most people starting off in Kubernetes would do the one big cluster pattern. That's very much how -- you know, Red Hat's OpenShift, that's where they started. They were like "Yeah, we're gonna do one big cluster, everything's gonna go in there", but then in order to make one big cluster work properly, you have to put guard rail after guard rail after guard rail on Kubernetes. Then you can't do Helm charts, you can't do the operations you wanna do, and it becomes a bit of a nightmare. So much fuss. And then governance and compliance come in, and you say "Hang on a minute... These things can't all share this cluster." You end up even if he was gonna do dev stage prod you end up with many Kubernetes clusters. Typically, customers we've worked with end up in the order of hundreds, if not thousands of Kubernetes clusters. This has been -- I wouldn't say exactly accelerated by GKE, AKS, EKS... You know, public cloud, freely available, clusters as cattle, which is somewhat unkind, but... Many, many clusters freely available.

So the landscape is infrastructure nowadays - let's just be straight and direct about this. Infrastructure nowadays is multiple Kubernetes clusters. That's your infra, what you're gonna do next. So you're trying to get from that, to building a meaningful platform API for your organization, and that's what you have to do. So in your own platform team, you have to get from Kubernetes clusters to a meaningful platform API. So this is where Kratix gets involved to help you make that happen. It's a framework, you lay it down firstly onto a platform API cluster, where you install it, with all its controllers, its CIDs, that kind of stuff goes down into platform API cluster. And then you tell it about either some static worker clusters, or you tell it how to create new clusters, so then you have it in charge of your Kubernetes topology. The way in which it then starts to send out messages and give instructions to those worker clusters - we use the GitOps toolkit for that.

So effectively, when you deploy Kratix for free, you get a complete GitOps topology. Everything is kind of auditable, traceable etc. via your Git repository of choice, be that GitHub, or if you wanna actually use S3 as a repo... Whatever you wanna use, we use the GitOps toolkit for pushing these things out.

\[32:16\] So now when you've got the assets up, you have your platform cluster, you have your worker clusters, either static or dynamically created. So what you've got now is no platform API; you're just ready to build one. From there, we then have this concept which Paula was talking about, about promises, which is where the name Kratix comes from, to keep a promise. And your job on the platform team is to collaborate with the application teams, start thinking about their needs... We've talked about platform-as-a-product before, product thinking. Thinking about the needs of the application teams, and prioritizing those needs such that you build the most important promise first. And when we say a promise, that is to deliver something as a service, from your platform, to the customers of your platform. So imagine that your teams are all spending all their time configuring and monitoring and maintaining Java application servers.

The first thing you wanna do in your platform team is make Java application servers available, as a service, from your platform API. So you would build a promise for that; you would talk to them about the API they want... When they are building this application, what do they care about? Is it heap size, is it Java tunables? Do they want small, medium and large? What is it they care about? Build out that contract with them, and encode that in a CID that forms a large part of the promise.

Then you take that and you add into that all of the needs that your business has, so the platform-level concerns, such as billing, metrics, monitoring etc. Those things are all encoded into the promise as a pipeline. You take that promise and you add it to Kratix, and then Kratix now is able to offer Java application servers as a service to those teams. And when they ask for one of those Java application servers, the pipeline will fire to take care of all the business needs that need to happen... And then the definition of a secure, compliant Java application server will get sent to one of the remote workers, and then that will be available for the application teams to consume.

And then you go to the muse "Okay, is that working well for you? Can we develop it? Are there other promises you need?" And then you iteratively and incrementally build out a platform as a product, as a series of promises in Kratix.

**Gerhard Lazu:** So just for me to understand this... If I was going to link the concept of a promise to something that I'm familiar with, I think I would choose a template. So we have templates of how things should look like, and you gave the example of Java applications. So what are the things that Java application developers care about, and then we encode them; we have some sane defaults, and maybe we have some sizing, and rather than having to worry about this every single time, across N clusters, as you mentioned, there'll be these promises which will have sane defaults, and it's super-simple to deploy your Java app. Is that the experience that you imagine, Chris? Is this what that looks like?

**Chris Hedley:** I think it's exactly that, yes. The promise is providing that abstraction for the platform teams to bring in the complexity into the promise that they do not want to or need to expose to the end user. So an application developer team just giving a small Java stack, whatever that means for them, and then the platform team can encapsulate what that means in reality, kind of JVM sizing technologies that hang around outside the JVM to enable that team... And I think that that's exactly that. And then on top of that, that platform team can then also inject into that running software whatever other tools they need to enable that platform, be it security, compliance, audit, monitoring, you name it. And again, that's a set of complexities that the end using team do not have to worry about. They know that when they ask for a piece of software, they get the software that they want, but they also know that the software that they are getting is compliant with the needs of the entire organization, and they can just get on with whatever it is that they are developing, without worrying about all of that other complexity.

**Gerhard Lazu:** \[36:12\] So Paula, if we were to link these concepts that we've talked about - the promises, the different teams, the application developers... If we were to link these -- actually, no. I'm thinking more about the Kubernetes primitives. So the promise is something that Kratix brings; but there's also all the operators; they still exist there. So how does this map to Team Topologies, the book that you mentioned, and what is left out? Because I know that the Kubernetes operators is not something that I think fits with team topologies, because it's just too much detail, and then everyone gets to do their -- but maybe I'm misunderstanding this.

**Paula Kennedy:** That's an excellent question. So for the concept of a promise - you're right in saying that it's essentially an abstraction above operators. We're not trying to get into the space of building our own operators, or writing good operators. Operators exist; that's already a space that people are in. What we are trying to do with the promise is an abstraction above operators, that allows - as Colin and Chris enumerated - the platform team to offer things as a service. And that's the link between team topologies and what we've been talking about. So the team topologies -- as well as having the different team types, which I've mentioned... So the platform team, the application or streamline teams, and the enabling and kind of sub-system teams.

They also talk about interaction modes. And the key ones that I talked about in my conference talk were collaboration, and then x-as-a-service, which Colin described briefly. So really, where we think about platform as a product, tying the whole thing together. When we think about platform as a product, your platform needs to be a product, an internal product that you think about; you think about it as customers, you think about it as product lifecycle, you treat it like a product. If step one of that is "Who are your customers?", you need to go and talk to them and you need to understand their user needs. And that's the collaboration part from Team Topologies. They're very clearly defined.

The first interaction mode - collaboration. In our world, when we think about Kratix, that looks like this kind of promise framework; you're gonna go talk to the app team, you're gonna figure out with them a custom resource definition, what things do you care about, what things do you wish to define? You agree on that in the collaboration mode, and then the next step is delivering this thing as a service. As Colin mentioned, it could be kind of a whole Java stack, it could be Jenkins as a service. It could be as big or as small as the needs of the team, and you only find out what those things are by that collaboration mode.

So you go talk to them, you define what they need, you define the custom resource definition, and then the platform team creates that in this promise abstraction, and then presents back to the application team "Hey, here's the five things that you care about every time you want to ask for a Java stack. So fill in these five things, and we will magic you up one, on-demand, whenever you need it."

That's the abstraction, and that's how we are thinking of tying all of these concepts together. Platform as a product, being able to talk to customers, collaboration, and then taking all of that collaboration, codifying it into something as a service. And then you deliver it as a service, and that's the product.

Another thing that Team Topologies mentions is this ongoing lightweight collaboration. Because as Colin mentioned, the difference between project and product. Another difference is projects get started, and then they get finished. Products are long-lived, ongoing, so for your platform you need to not just -- it's not building the platform and then it's finished. It's a product that needs maintenance, it needs looking after, it needs continuing to be fit for purpose. So this lightweight, ongoing collaboration that Team Topologies talks about is also an essential part.

\[40:00\] Are the promises still the right ones? Are they still meeting the team's needs? Are there new promises that they need? Do they need to end-of-life some promises? That whole product lifecycle that you have with a normal product applies to the platform. That was a long answer, sorry...

**Gerhard Lazu:** No, that was actually very good, because it helped me visualize all the interactions, all the teams, how they map to the promises, those technical components, whether that's at a technical layer... So that was very helpful for me, thank you.

And you mentioned something really important, because I know step one is always the easy one. Like, let's just get this up. So you get your platform cluster, you get some worker clusters, and you define some basic promises... And then what? Well, that's when actually the hard work starts, the collaboration that you mentioned. What about upgrading operators? What happens when those operators need to upgrade the resources which they manage? How does that actually work? Also, how do you test that the promises that you've defined or that you've changed, how will they interact with the promise that already exists out there? I don't know who wants to take this, because it's a really meaty question, and you can answer like a subset of it... But it's up for grabs.

**Colin Humphreys:** Sure, I'll take that. I'm feeling --

**Gerhard Lazu:** Confident. \[laughs\]

**Colin Humphreys:** No, confident isn't the right word. Some type of trepidation. This isn't the question I was waiting seven years for...

**Gerhard Lazu:** No. But it's coming. \[laughs\]

**Colin Humphreys:** I also wanna take a brief step back to something you asked there, Gerhard, that was super, super-interesting to me... You asked about templating. That's really interesting. But again, if this is a simple templating system, why are we not just using Helm? Why are we just not using any of the innumerable templating languages that are out there? Because there is a lot more obviously more value than that. We can actually use Helm within the system. But it offers far more than that. Day tier is actually which is the question he just asked is actually really exciting for our customers, because you start to start thinking about "What happens if I don't just offer a Java app server? What happens if I offer multiple Java app servers, and the CI system, and the CI system to deploy to them, and all of the scanning and everything else?" So the app team just need to say "You know what - I'm gonna start working on a Java app", and then they get everything they need to make that happen. They get the whole, complete setup to make that come to life in a very meaningful way. So they're just saying "I've been working on an app and we expect to have this type of traffic", and that's what's in the CID for them. And then when they ask for that, everything comes to life beneath. You have the whole, complete, all the environments, the pipelines, everything that comes there, it's all delivered for them, and it's all security scan compliant, it's registered in the right bidding system... All of that complexity, all of that cognitive load they would previously need to be exposed to and feel the burden of - that's all now encoded in the promise. But they're getting something that is relevant to their organization.

Now, there's no off-the-shelf platform out there, either SaaS, or vendor software, that can get you that. You have to build that yourself. Your platform team do have to make that come to life. But when it comes to life, it unlocks the power of your application teams, because they're not getting everything that's there.

You then raised a great question as well, about "Well, that's great, because that sounds like a really useful experience for those organizations." But what happens day 2, day 3, day 100, day 1,000? How does that journey look?

Firstly, Paula said this specifically, and we said this to everybody that we have talked to about this... Effectively, we're taking high-level user requests, we're breaking it down into a series of documents via the pipeline and everything else, we're pushing out those documents via the GitOps pipelines to multiple servers. When they hit those multiple servers, our system makes sure that the operators will be there, and the operators themselves are kept up to date, so we push out those definitions. But if your operators that you choose to use in those promises aren't able to do upgrades, Kratix isn't gonna magically fix that for you.

As Paula mentioned, we are a level above operators in terms of the abstractions here. You need to create or choose off-the-shelf great operators put out to the workers so that when somebody asks for a Java wrap server, they get a Java app server. And also, when they try to upgrade a Java app server from one version of Java to the next version of Java, everything doesn't fall apart.

\[43:54\] Now, our promise would enable you to push down version documents to the workers, to say "You should now be in this state, you should now be in this state." And this is arguably the beauty of Kubernetes; this is a fantastic API server, and it's declarative and convergent. But the controllers you put in there and the operators you put in there need to be able to converge. If they can't, you've got a fairly big problem. That's not the problem we're tackling. We are basically saying "We get you the high-level APIs, declarable by your platform team, we get you the pipeline that encodes all of your business processes, we get you the ability to take those resources and push them out to a complex topology of Kubernetes servers, and keep all of that up to date. Everything is what we would say is south bound of the operator, so the operator itself that's pushed out, and everything that happens after that - that's down to the operator that you choose to put out there. And there are loads of frameworks putting operators out there; we are compatible with all of them. Any operator will work in our system. But what we aren't saying is that our system will fix bad operators.

**Gerhard Lazu:** Okay. So Colin, you don't know what you're talking about, and I'm leaving this talk. That's what you asked me to do seven years ago. When you were giving the OpenCredo talk, you asked me to just say "Colin, you don't know what you're talking about", and just leave the talk, towards the end. Obviously, you know what you're talking about... \[laughs\]

**Colin Humphreys:** That's not the kind of thing I would say, by the way...

**Gerhard Lazu:** Yeah, it was meant to be like a riff... So that was all very accurate, Colin, and very well put, so thank you.

**Break:** \[45:18\]

**Gerhard Lazu:** One thing which you mentioned, Colin, that I really get, and I start seeing how things are starting to come together was the versioning that's built into the Kubernetes API. So I can see how you can have multiple versions of the same promise, at the same time, easily, because the platform - I'm doing air quotes, because Kubernetes is not a platform, but there are some primitives there that you can use and you can get really far, supports that.

**Colin Humphreys:** Yeah, we've really seen a lot of value in that API. And as much as I publicly say Kubernetes is a waste of time - and it is a waste of time if you are on those applications teams really trying to get to the end goal; but if you're a platform team and you're trying to build a platform, it's absolutely stellar. For platform builder it's a superb, superb tool. I love it as an API server. I actually think these scheduling in the pods is almost irrelevant. And as an API server of pluggable CIDs, and its dynamic nature - it's truly, truly superb, and I adore it for that reason.

\[48:14\] And that's why we, with a small company, have been able to build what I believe to be a really, really impactful, meaningful framework, Kratix, so quickly - it's because we're just leveraging the best of Kubernetes, platform as a product, and bringing it to most Kubernetes clusters. We've taken the best of Kubernetes, we've combined it with the best of GitOps, and we've produced this framework that I'm really confident is gonna have a huge impact.

**Gerhard Lazu:** I have seen this link in the past, when we were rocking on Cloud Foundry. And there was Bosch as well. Awesome piece of tech. I think the combination didn't quite work, and I'll get to that in a minute... because we had Cloud Foundry, which had a scheduler, Bosch, which was kind of doing a lot of the same stuff with agents, and how it was scheduling jobs, and the lifecycle of jobs and managing that. And then we had Concourse, which again, had a scheduler. So we get three types of schedulers, slightly different, with templating languages, and their own rules, and their own lifecycle management... And then Kubernetes came along, which for me was the perfect combination of the three different types of schedulers, and it had some extras. So finally, we could unify those three things. And we have seen CI/CD systems like Concourse, pecked on I'm thinking, build on the Kubernetes API, exposing the jobs, and the pipelines... And Argo CD as well. And I'm sure that Flux as well. And this is the intriguing part... Because I don't know anyone that is using Flux at the scale and for this purpose. So Flux, the way I understand it, is part of your GitOps toolkit, which is a core component of Kratix. And I'm really intrigued by why Flux, and not Argo CD. So what is in that Flux ecosystem that attracted you to it? Who can answer that?

**Chris Hedley:** I think we were looking at the problem of how do we get pieces of software deployed on K8s clusters that could be distributed across many different logically-discrete K8 clusters. And the GitOps toolkit has done a tremendous job of that. It has very powerful tools that allow it to listen to a message store, be it Git, or a bucket, or Docker, for example, and just pull down something when it sees a change, and it will apply that quite happily to the cluster that it's deployed on.

**Gerhard Lazu:** Do you mean like the Concourse resources that have triggers? Do you mean in that way?

**Chris Hedley:** That feels like a trick question, Gerhard. I'm not an expert on Concourse or Concourse's triggers, so can you explain back to me how you mean that, and maybe we can find a pattern there?

**Gerhard Lazu:** So you know how we had those resources, like for example GitHub repositories, and then a new version would trigger that resource? Then that trigger could be the input to a job, and you could have multiple inputs. So to me, when you describe this component of the flux - I don't know what exactly it's called - to me it sounds like that primitive resource which triggers based on a new version. And the version could be a Git SHA, or in S3 that's like a new version for an object... There's a version if you have, for example, a semver resource... You had all those triggers. And to me, this sounds very similar, in that you trigger on certain outside events. What is that component called in Flux, do you know?

**Chris Hedley:** I don't know what the component is called, but to go back and maybe answer your original question of why Flux or the GitOps toolkit versus a non-K8s-native technology, since it's Kubernetes... I think it is the K8s native way that the GitOps toolkit is being engineered from the ground-up. I think you mentioned earlier a whole suite of technologies. You mentioned Bosch, you mentioned Cloud Foundry, and the Diego Scheduler, you mentioned Concourse, which has its own scheduling technology built-in... All of them have their own APIs, they have their own templating engines, and a way of getting software up and running in the way that you need to.

\[51:51\] I think K8s is genius, and I think Colin touched on this earlier - that the thing that really sold Kubernetes to me was the custom resource definition kind of pattern that they've come up with, and then sitting the controllers and operators behind that as an API, to then control the thing that you're trying to control. And I think the GitOps toolkit, Kratix itself, operators to some extent - they're all using that consistent API, and I think it's that leveler. As a platform developer, you're only having to learn one set of patterns, and those patterns are transferable across multiple different technologies. I think that's where the technology choices really come to the foreign kit.

So if you learn that kind of CI/CID operator pattern, those learnings are transferable. Whereas Concourse may well have the patterns already, it may be as powerful, but it's yet another learning curve, it's yet another technology that you have to orchestrate on top of the K8s.

**Gerhard Lazu:** Yeah. How do you test Kratix? I'm really interested in that. How do you test a platform builder? Do you just build many platforms? Do you use property-based testing? How does that even look like? I wouldn't know where to start... What do you do today? Let's do that - what do you do today? How do you test Kratix?

**Chris Hedley:** How do we test Kratix... So I can give you the very blunt, honest, business-focused answer to that, Gerhard... We're currently three people. We've spent the last nine months getting a business off the ground. So we've been coming up with a business narrative, looking at the problem space... Kratix was the technology that we built to tackle that. We think it's a great technology, we think it has huge amounts of power, but certain dials have been turned through the development of Kratix, and that continuous testing that I think you're hinting at is maybe not quite where it needs to be in Kratix right now. We've been focusing on other problems.

**Colin Humphreys:** This is confusing the last two questions, what Chris is saying. So firstly, we test Kratix by using mesh space fit forward and we have a set of sample promises. We have a Redis promise and a Postgres promise which we inject testing it's all working testing we're doing all the right things with those promises. Manage the life cycle of the promises. I think Chris was conflating that maybe with the Argo CD things you were touching on, and being like effectively what do we use for our CI server internally. Because right now, effectively, we have one pair, myself and Chris, working on the code. We code, we test on our laptops, and we commit. We don't have CI, because you don't need to integrate, because it's just stuff coming from the two of us. So that's maybe how those things come together.

I did want to touch on that as well - Argo CD... Like, why use Flux rather than Argo? Argo I think is more specific for applications in Kubernetes; it's a CD server. Whereas Flux is almost like an agent you put out in all of your remote clusters, specifically to pull from repos and stay up to date with those repos. Flux is very much as a whole it's very much fit for the purpose of what we're trying to do, and it's focused on that sole responsibility.

But I think when you said "Your GitOps toolkit" - I wanna be very clear here, it's not ours. I need to thank lots of people for their contributions. We're standing on the shoulders of giants here.

**Gerhard Lazu:** Of course.

**Colin Humphreys:** Thank you so much to the many people that contributed to the GitOps toolkit. We haven't put anything back in yet. We're a tiny company. I wanna say a huge, huge thanks to those people - for the GitOps toolkit, for Kubernetes itself. Everyone out there that's part of the ecosystem - a huge thank you to all of you, because you help companies like us be able to come to life and get value going quickly.

So as mentioned, we have a Ginkgo-based test suite for Kratix, which you can just try out; it's all there, github.com/syntasso/kratix. You can run the test suite. It does require some Kubernetes testing infrastructure around KinD, but it's all there for you to run, should you choose to run it.

We did actually start Kratix entirely test-driven from the outset as a set of behaviors defined in style syntax. So we very much started test-first, and that way of thinking about things. But I think as we -- it's actually fairly straightforward to test, I would say, because promises are not actually that clever, if that makes sense. They're not complex it's the way we look at it. We are taking Kubernetes, we are injecting CID and controllers into it, and we are asserting the behavior of them. So it really doesn't get things too wildly complicated, but the power of that system, because you can inject something of that nature, is tremendous. So yeah, our testing setup, effectively Ginkgo-kind, that set of tools, comes together to give us a good feedback cycle.

\[56:07\] I think as we move towards being able to assert complex suites of upgrades, in terms of like "If this promise changes, then that promise changes", what happens in any interactions between them across multiple clusters... So our cost of testing is gonna go through the roof. So I get that. But right now we're not at that stage.

**Gerhard Lazu:** So first of all, I think I need to give a bit of background. We have worked for so many years together, that when Chris answers something, I understand what he's not saying... And I don't think the listeners are getting that same experience... And for that I have to apologize, that I can't convey that. Colin actually understood what Chris was not saying, so Colin said what Chris wasn't saying. So thank you, Colin, for that as well. It makes a big difference when a group of people like this comes together. The downside is that there's a lot being said not explicitly... So that's what happened here.

Yes, I looked at the code, I was thinking of Ginkgo as well; Colin, thank you very much for that. What I was thinking and what I was trying to hint to is the complexity of these types of tests. Because they're integration tests, right? Like, how does this CRD, when it's set up, actually behave in practice? Does it do what it's supposed to do? How do you test that? That to me sounds like an expensive test to run from the beginning. KinD makes it easier, in that you can run the whole Kubernetes in Docker, but still, it is an expensive test to run. It's not like you're unit-testing. And you can only get so far with that, because you're really generating CRDs... And how they interact with the Kubernetes API. So your primitives are already high-level and expensive. So you can't really simplify that. Or at least I wouldn't know how. So what you've done - that's exactly how I would approach it.

**Colin Humphreys:** Thank you. That's good to hear. It's a little slower than we'd like, so I think as we move on to -- as it gets more complex, we're gonna have to find ways of doing things. But thank you again to the Kubernetes community. There's some awesome tooling out there around just running like API server in memory. Problem is a lot of our stuff does require the controllers to run as well, but - I mean, we use Kubebuilder; another huge thanks to the Kubebuilder community. It's awesome. Kubebuilder v3 - absolutely loving it. It's really good.

So I think the hard work of everyone else in the community is what's enabled us to go fast and keep ourselves sane, and do all the things we need to do. And again, testing - I think it's gonna get more complex. We've looked on this for years, Gerhard; as the testing suite gets slow and grows, then you put effort into the testing suite, and you improve it, and you continuously tread that tightrope, like investment into testing versus trying to keep things going fast. And if your speed slows down, you think "We need to invest a bit more in testing to get it back up again", and you treat that tightrope.

As Chris was saying earlier, right now we're so far biased towards going fast with a small team we don't even have a CI system, because we run all the tests locally, as one pair, and then commit. So that is CI.

**Gerhard Lazu:** That makes sense. I remember doing that, and people looking at me saying "Are you crazy? Is there Jenkins running on a Mac?" Yes, I have a spare one. Why not. It's just me and two other people in the same office. We don't have a big team. So it just makes sense. Especially when you're taking things off the ground... I think, again, this is something that maybe people don't (or can't) appreciate, because we haven't done a good job at explaining it - is the company is you three. So you have a CEO, COO, and CTO, or VP of Eng... Again, why not CTO, Chris? Why aren't you a C-suite? Explain. \[laughs\]

**Chris Hedley:** Why am I not C-suite... I think the honest answer to that question, Gerhard, is if you form a company, you do it because you want to do the thing that you want to do in life. As you've probably gathered from this podcast, I'm not a great public-facing person. I'm not the person to stand on the rooftops and shout about the public, to shout about the time. I'm very much an internal-focused person. You know my strengths, we were together for a few years...

**Gerhard Lazu:** I do.

**Chris Hedley:** I enjoy working with individuals, I love running teams, I love getting heads-down into the code. And as the company grows and changes, that's the role I want to do. So you start a company to do the thing that you want to do...

**Gerhard Lazu:** Yeah. That makes a lot of sense, actually.

**Chris Hedley:** \[59:53\] ...not get pushed into a role that you're uncomfortable with and I don't want to do. It's more to it than just the label, right? So that's the honest answer. That, and Colin won't let me.

**Gerhard Lazu:** \[laughs\] He's keeping CTO for someone else... Is that what it is? No, it's not that.

**Chris Hedley:** Keeping it for himself.

**Gerhard Lazu:** For himself. \[laughs\] CEO and CTO. I don't think that has happened before.

**Chris Hedley:** He knows he will be ousted as CEO eventually, and he's keeping CTO around.

**Gerhard Lazu:** His left bicep is CEO, and his right bicep is CTO. And they're massive. \[laughs\] Okay. So what's coming next for Kratix and for Syntasso in the next six months, for example? Do you have anything on the horizon? Growing the team, developing Kratix... What do the next six months look like for you?

**Paula Kennedy:** That's a great question. What does it look like...? So since we been going, we are a small company, as I think Chris and Colin mentioned. Some might say that we have over-engineered some of our processes, because we have come from a background of Pivotal, big product company, VMware, huge product company, with three people. But we are very focused on OKR framework, we have our objectives and key results, we have our board meetings, we have our OKR progress meetings, we have our retrospectives...

**Gerhard Lazu:** I see where you're going with this, yes.

**Paula Kennedy:** You can see where I'm going?

**Gerhard Lazu:** I see, yes.

**Paula Kennedy:** We pour a lot of our learnings from the last seven years into our tiny three-person company... So we are regularly having objective and key result meetings to review, and we have regular board meetings to plan what's the next three months, what's the next three years. The interesting thing is that, you know, plans change; the plan is the plan, that's why the plan changes, as we like to say...

**Gerhard Lazu:** Yeah. You need to have it, but it will change, so don't worry about it. Yeah, I know what you mean.

**Paula Kennedy:** Yeah. It's quite open right now.

**Chris Hedley:** You hint at a lot of things that -- like, we would be lying if we weren't thinking about some of the things you've hinted at there, Gerhard. So we are three people, I think we've run that message home. As we start to work with more and more customers - and believe it or not, they're awesome - that's starting to constrain us even further. So as we to work with customers, that means we have to potentially slow down on some of the product development side, for example... And that's something we're not comfortable with. So then you look to "Well, what levers can we pull to grow?" Which might mean bringing more people into the company to scale the engineering team, for example, or to scale the consultancy side. As we focus on those two things, perhaps that means we take our eye off marketing, and then all of a sudden you've got that problem.

So we're constantly reflecting on what our constraint is within the business, and we're constantly looking to address that. And I certainly speak for myself... I'm sure Paula and Colin wanna object to this too much, we're probably start to dile it down to a three, as we start to work with customers and continue the product development, something's gonna have to scale somewhere over the next coming months... And we are thinking about all of those options. That's the fun part of a company that's smaller. It's exciting, and there's always something new.

**Colin Humphreys:** What's been awesome, but also really scary, has been that our customers we've been talking to have said to us, effectively - we've had this directly from a few of them... What we've built here with Kratix - it's a system, it's not a tool. It's very easy to talk about a small shop tool and build these small shop tools, and many of our customers are really good at doing that... But then they have their organizational challenges, structural challenges, these kinds of things. Because Kratix encodes the opinions from Team Topologies and makes some real via software. Our customers are taking Kratix and using it to perform a Reverse Conway Maneuver, where they're saying "Okay, this thing is gonna help me build a great platform team. I'm gonna help that good platform team have great interactions with the application teams, and that's the setup I want in my organization. So I'm gonna help my platform team deploy and get value from Kratix, and load it with the promises we need in my company, and that will help my organization move towards the structure I want to have."

So they're saying to us "This is awesome. You have this system that will help my company become a better system." But that also then scared us, because we're like "That sounds great... And you're from this company with 10,000 people, and we're from this company with three." And therefore, we will be taking investment, we will be hiring people, we will be scaling up to meet that demand, because what we're building here is not just a small-shop tool, as I say. This is about organizational change via people and software together, and that's non-trivial to deliver. But as I say, the three of us, we're trying to do it, we're gonna scale, we're gonna grow, we're gonna make it happen, hopefully. Fingers crossed.

\[01:04:23.18\] But yeah, so the path forward for us is very much continuing to work with those customers, continuing to build on the success of Kratix, taking and scaling Syntasso as a company, so we can build out around Kratix. If anyone out there that's listening would like to contribute to Kratix or to try it out, or to give us feedback... It's Apache 2 licensed; github.com/syntasso/kratix. Please do try it out, please do give us feedback, please feel free to contribute... Whatever you can do to help us out. We'd greatly, greatly appreciate it. Even if you just wanna try it in your org, and say "Actually, this wasn't for us. Here's why." That will be greatly appreciated by all of us here on the team.

**Gerhard Lazu:** And that is the Colin that seven years ago convinced me to join CloudCredo. You've just listened to him. Colin in like two minutes. That was it. That was great.

**Colin Humphreys:** Thank you. I have to do my best, because so far we've had Chris say we don't do testing...

**Gerhard Lazu:** \[laughs\] That's not true, by the way... As I said, the things --

**Colin Humphreys:** ...and Paula say that we've got way too much process.

**Paula Kennedy:** We love process. We love a bit of process.

**Colin Humphreys:** So we don't do testing, we've got way too much process... \[laughter\]

**Chris Hedley:** We hate testing. We love process.

**Colin Humphreys:** I'm just like, "Where do I even start here?" I have to try and put the best foot of the company forward before somebody shoots it. \[laughter\]

**Gerhard Lazu:** So my feedback to everything that you've said, all three of you, is the blog doesn't lie; go check out the blog. Go and watch Colin's crazy talks through the years; they're amazing, you'll have so much fun. Go and watch Paula's talk; I haven't seen it, but I've seen your other talks, Paula, and I know it's going to be good. Chris is cold and grumpy on the outside, but he's really warm and fuzzy on the inside, and he will really look after you as a manager. I had Chris as a manager for many years, and that's what actually happened. So if it would have been as bad as you have thought at a certain point, I don't think we would have worked together for like 5-6 years... So it's much, much better than it sounds from the outside. And the GitHub repo never lies; go and check the code, it's all public... And see what you think.

So as we are prepared to wrap this up, for someone that's been listening to this, hopefully all the way to the end...

**Chris Hedley:** If they're still listening... Yeah, fair play...

**Gerhard Lazu:** \[laughs\] Yeah, if they're still listening... What is the key takeaway? And we can maybe start with Paula. What do you think is the key takeaway, Paula?

**Paula Kennedy:** \[01:06:41.17\] I think for us a thing that we've learned is people need platforms to help them go faster. And we've seen the pattern. It's interesting how -- I think for me, I feel like I've been talking about this platform as a product, platform gap for quite a long time, and I think a problem that is ongoing... And all the new tooling, and the cloud-native landscape, and vendors coming out with new things - it's all still a problem. The actual challenge of trying to build the right platform to be able to go faster is still a problem that everyone's facing... So if there are people who've made it to the end of this podcast and are still here listening to us, I think if people out there and they are having these challenges, if they are either in a platform team and they're struggling because there's too much load being put on them, or if they're in an application team and they can't get anything from their platform team because they're somehow delivering too slowly - anyone who's got those kind of challenges, those are the people we'd love to talk to, we'd love to help, we'd love to learn from... That's what we're here to do.

**Gerhard Lazu:** Thank you, Paula. Over to you, Chris.

**Chris Hedley:** I would +1 what Paula said. I think the key takeaway, as I reflect on what Syntasso can add to the industry - if it's on the platform developers to reduce the cognitive load on their customers, the application developers, for example, then it's on Syntasso and Kratix to help produce the cognitive load on those platform team developers. It's like, we're here to help. We've been there, we've felt the pain, we've created some of it in the past, let's be honest, and we're here to really help in that space. We want to help the platform teams.

**Gerhard Lazu:** Thank you. Colin?

**Colin Humphreys:** Yeah, I think I'm actually gonna reflect some words back at you, Gerhard... Solomon Hykes, founder of Docker, on your show said "If your platform is generic, then your application is generic." So we know that people wanna build differentiation and value into their apps, therefore you're gonna need a differentiated and valuable platform within your organization. With Kratix, we try to make that easier for platform teams to build out a platform that your organization needs. It sounds a bit corny, but we're trying to build rails for platform development.

**Gerhard Lazu:** Or Phoenix. It's less corny, Phoenix... Changelog runs Phoenix, and it's great. But yeah, I know what you mean.

**Colin Humphreys:** So yeah, a framework for building platform as a product is what we're trying to build, and we all know the future of infrastructure is gonna be more declustered Kubernetes. So we are at the intersection of those two technologies, and if you wanna help with building out platforms or products on Kubernetes, if you wanna talk to us about it... I mean, the real thing we'd like to do is to take a look at Kratix, give us feedback, reach out and talk to us. That would be absolutely wonderful.

So if I had one takeaway for people to do, please do reach out to myself, Paula, maybe not Chris as much... \[laughter\] I'm joking, of course.

**Gerhard Lazu:** Yeah, he's inwards-facing, you already established that. \[laughter\]

**Colin Humphreys:** It's become quite clear in the whole podcast. You don't wanna talk to me, you wanna talk to Chris.

**Gerhard Lazu:** He's too polite, yeah.

**Chris Hedley:** If you're in the marketing pitch, speak to Colin. If you want the honest stances about what really goes on - yes, speak to me. \[laughter\]

**Colin Humphreys:** That is actually true.

**Gerhard Lazu:** Yeah, definitely. So thank you very much for today. I had great, great fun. It's been too long since we hung together. This was good... And I'm thinking six months from now... First of all, Team Topologies - I have to add it to my queue. There's eight already, but that's okay, I can manage one more. One more book.

**Paula Kennedy:** It's very good. Very, very good. Not too many pages. Very practical advice.

**Gerhard Lazu:** Thank you. And trying Kratix out. I love playing with tools, and - what did you say? Systems. That's what Colin said; it's not a tool, it's a system. And that's intriguing. There's so much more happening there. So there's one to follow. Thank you very much for today. See you next time.

**Paula Kennedy:** Thanks!

**Chris Hedley:** Thanks for having us, Gerhard.

**Colin Humphreys:** Thanks, Gerhard. Take care.
