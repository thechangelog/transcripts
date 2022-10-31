**Gerhard Lazu:** A few months ago I have read this proposal titled "Deploying services at Lemon." The date was 30th of May, 2022. And this sentence caught my attention: "We strive to implement the flow that minimizes the effort necessary from a developer perspective to go from zero to a service running in production." That sounded like a good idea, and I was curious to find out more. The author of that proposal, Matias Pan, is joining us today to talk about it. Welcome, Matias, to Ship It.

**Matias Pan:** Hi, Gerhard. Thanks a lot.

**Gerhard Lazu:** So what was the context in which that proposal was created? Tell us about your team, your company, and the problems that you were facing at the time.

**Matias Pan:** I think it's interesting, because it's a context that probably a lot of people are finding themselves in. A lot of companies went through really crazy hyper-growth, and then all of a sudden the bear market hit, and they were left with this application that grew very rapidly, with a team that probably didn't know much or at all about infrastructure, and a really big team, but not really all that amount of money that they can use to continue growing. And when you get to that point and you want to continue making your product better - because you're not reaching hyper-growth, you're reaching for the classical breakeven, or in a way making your product profitable - you will have to make a lot of decisions regarding your architecture and your infrastructure, that they all have to keep in mind that what you want to do is reach that breakeven. You want to actually be able to continue to deliver value to users, and hopefully, that value gives money back to you, and you can keep the company running.

So when I joined Lemon - Lemon Cash is the full name of the company - that was the exact context in which the company was in. There was a really, really big, monolithic codebase, that had so much code, from so many different domains. We're talking about a bank/crypto, so it has a lot of things related to a bank, but it also breaches you into the crypto world. And not just like tokens, not just like currencies, but also like NF Ts, and the entire gamification that the crypto industry is trying to bring.

\[05:53\] So this was a big up. A lot of very clear, separated domains in this single place, and the entire infrastructure in which this was laid on was not something that happened on purpose. So it wasn't far off. It was "Hey, we have to get this to production now. What do we know about it?" "Not much." "Okay, there's this thing called ECS, that they're saying it's serverless, and they're saying it's super-easy, and there's this blog post that a big company wrote. Let's just use that."

And then when I joined, the company grew from 5 developers to 300 people, which brings a lot of really different problems where you're working on that monolithic codebase... And the idea of going to a service-oriented architecture was kind of natural, in a way. And when I say natural, I don't mean that it's the obvious choice. It's going to depend on what context you're in. But we're talking about a bank that has the most critical thing at hand, which is money. And you always want that bank to work perfectly. So for a bank, the idea of services allows you to separate the failure domains in a very clear way, and make sure that the product is the best thing that you can do.

So yeah, the decision itself had already been taken, and when I joined, they were already discussing about going into a service-oriented architecture. But there were no discussions around the infrastructure side of going to that architecture. And for me, at least, that's the biggest problem you have to at least think about and solve in part, before actually committing to that. It's perfectly fine to start separating the code, understanding the domains and doing that exercise, but when you want to actually execute that, solving the infrastructure part, the observability part, the monitoring, how you get things to production, how you operate on those services, how do you have on-call policies - everything related to having a service in production also needs to be discussed.

So that's where this proposal that you mentioned came to be. It tries to tackle how you should be deploying services, at Lemon specifically - that's why it's in the title - and it puts that in the context of all these other things that we also have to solve in order for the company to operate services gracefully, I would say, in production.

**Gerhard Lazu:** So when you started out, did you have a monolithic application running on ECS, was that the beginning?

**Matias Pan: **

**Gerhard Lazu:** Okay. And what other services were you using, besides the application?

**Matias Pan:** A lot of Lambda, mostly for -- there's many flows in the crypto and the fiat world that's like eventually consistent in a way. So you make a transaction and five minutes later you get a call back saying "Hey, this happened. So it's okay", or "This didn't happen." So a lot of lambdas for that. And then for the -- not much more than that. So a very simple app; a monolithic codebase and some lambda functions. And then a Redshift cluster connected with DMS to an Aurora database for all things analytics, basically. So a very small, I would say, footprint of infrastructure, but not controlled; small, but uncontrolled. So you will go into the AWS UI and find things that you didn't know existed, and probably nobody knew. So that was also part of the challenge.

**Gerhard Lazu:** So I'm assuming that the monolithic app was Java.

**Matias Pan:** It is, Kotlin. I've been told by people from the Java world that Kotlin is better. Not convinced, but...

1 Right.

**Matias Pan:** I'm giving it a chance.

**Gerhard Lazu:** Okay. And you're still running this monolithic application in production today.

**Matias Pan:** And it's hurting us bad. For example, the other day we did a deploy only for crypto stuff, and card authorizations didn't work for like an hour.

**Gerhard Lazu:** Cards. So cards were not being authorized for an hour.

**Matias Pan:** Exactly. So you wanted to make a payment on -- I don't know, you were buying a coffee... No can do.

**Gerhard Lazu:** And can you tell us what went wrong? Did you get to the bottom of that, what went wrong in that deployment?

**Matias Pan:** \[09:58\] Yeah, it was actually a topic that I've been researching -- I don't know if a lot, but I've been researching how people solve this, because it's a problem that I think everybody has... Migrations. Database migrations. You make a change to the DB. How do you do that? Where do you put that process? How do you couple it with the code? How do you make it backwards-compatible? Can you relate back? All those questions - they're not answered. And actually, their answer - the answer is no, you cannot do any of that.

So the problem is that we introduced a migration change that broke existing code. So the migration ran first, they modified the database, but the previous code was still running, and the change was incompatible. So you wanted to make a car payment, and the car payment controller would bring up a hibernate model that was incompatible with the schema of the database. So yeah, no, I'm just going to throw an exception and not let you make any purchase.

**Gerhard Lazu:** And how did you find out about that problem? How did you know that was a problem? Did you have some monitoring in place, some alerting? How did you discover that problem?

**Matias Pan:** Yeah, so we didn't have - and that's one of the things that we're trying to solve as well. We didn't have good observability, good monitoring, that allows you to say, "Hey, this is the problem that's happening." The alarm that went off is card authorizations are failing; payments are failing. And we were in the middle of the deploy. So it's like, okay, I mean - one plus two, right? We're changing things, and then something's failing... It's like, "Yeah, it's probably this." So we started to do a deep dive, and all our deep dives happened in Datadog. So we use the full Datadog solution; we're 100% married to that, at least at the moment. Logging, tracing, metrics - everything is there. And it gives you a quite expensive, but nice experience.

So yeah, we saw that card payments were failing... You go into the service dashboard, you look at traces, you just sample one, and you see the exception right there, you click on the Logs tab, and you're able to see, okay, the error is "I'm a hibernate model that has this schema, and then the database has this schema, and then I'm not able to do." So you jump into the PR of the deployment, and you see, "Okay, this is the migrations folder, and this is not good. This is a chain that is essentially breaking compatibility." So yeah, it makes sense, in a way.

**Gerhard Lazu:** So after you realized that you had this problem, what did the fix look like? I'm very curious. Because it's okay to make mistakes.

**Matias Pan:** It's okay,

**Gerhard Lazu:** And it's even better if you can fix them before anyone realizes. Then you're a magician. There's no mistakes. \[laughs\]

**Matias Pan:** Yeah, exactly.

**Gerhard Lazu:** In your case, some people noticed. So how did you fix it?

**Matias Pan:** A lot of people, So in a perfect world, in a way -- I don't know if perfect, but in a world where these things are developed in a more thoughtful way... I don't know if "thoughtful" is The word, because it's not that we're not thinking; it's just that you're going at such a pace that there's certain technical debt that you don't realize how big it is, until something bad happens. And the technical debt that we had here, in my opinion, is the fact that we don't have a way to roll back migrations. There's no way to roll that back. So if we detect this, I cannot just roll it back and then keep the code running and then make sure that we make it compatible, and then deploy it again.

So the fix was very rough. Scale down to zero, so that we can move forward with the deployment, put the app in maintenance, and then move forward with the deployment, essentially. And the reason why we couldn't move forward is because the previous hosts were unhealthy, and AWS ECS doesn't like the control -- the deployment controller doesn't let you move forward if the host you're trying to replace is not healthy. It just continues to fail. So yeah, it was stuck in that deployment state. So yeah, you scale down to zero and then move forward.

**Gerhard Lazu:** Okay. And all in all, that took you from the minute you realized there's a problem and card payments were failing, to the moment that the service came back - it was roughly an hour. That's how long it took you.

**Matias Pan:** I was on-call, and I was pinged like 30-something minutes after it started. And then from there, it was like 10-12 minutes until we fixed the problem.

**Gerhard Lazu:** \[14:10\] Okay. Did you run root cause analysis (RCA)? Did you run the root cause analysis and write up something so that future selves will know, or there's at least some written account of what happened? Did you have time for that?

**Matias Pan:** At the moment, there were no -- we didn't have a proposal for incident management. Now we do. Mainly motivated by that issue. So yeah, for that one, we had a post mortem where you have the root cause analysis, you have the entire timeline of things that happen, and links to Slack threads or whatever is relevant, and then the most important and sometimes forgotten one - action items. What are you taking from that to prevent it from happening the next time? ...which, honestly, we're doing quite a decent job there, because we made an effort - and this is something that we thought about in the previous company I was working at, and we've proposed here, and people liked... Every Monday, with everybody that was on call, so each person that was on call in the rotation, gets together on a Zoom call, on a meet, and goes through a document that each person has to write on what things happened during that timeline, what were the issues, and then we have an entire section with the form of a spreadsheet, on the action items that we committed to doing for each thing that happened. And on each of those Monday meetings, you have to turn on your camera, show your face and say, "Hey, I have not worked on this thing that we decided was important." And it's not that people are lazy or anything, it's just that accountability allows you to make sure that you're working on those things that -- after the problem happens and the pain goes away, you start forgetting how important it is. So you start to lose a little bit of focus, and "Oh, this product feature is really important", so you shift...

So that's what we did. A very simple, actually, post mortem, because the problem itself was fairly simple. And the discovery as well.

**Gerhard Lazu:** I do have to say, when people come together, whether it's a problem, or it's a reason to celebrate something... But especially problems - people tend to come together, maybe closer, maybe there's like a bit of a pain, and people respond to that sometimes better than when everything is great... And what that means is that you're able to work through these tough challenges. Because it is a challenge; production is down... we hate when that happens.

**Matias Pan:** It's a lot of pressure.

**Gerhard Lazu:** Exactly.

**Matias Pan:** Product is calling...

**Gerhard Lazu:** But people come together in a nice way. And if you're able to change that into learning, if you're able to change that into an improvement, then you're getting better together. And that can be a great way of teams sticking together and finding ways to trust one another. And as you mentioned, you're not lazy, you're not shirking responsibilities or anything like that. There's certain gaps that you have, you're honest about them, you're closing them as quickly as you can... But there will always be ways that you can improve things. You're in the middle of a migration from this monolithic app to a service-oriented architecture - that in itself is quite challenging. And as you do that, you have to maintain your monolith, you have to keep it healthy, you have to keep making changes... The pressure of "Let's deliver new features" versus "We are slowly changing the way this thing is running." So it can be challenging. But in those moments, teams are made. Amazing teams are made.

**Matias Pan:** That is so important, actually. And one thing that happened to me in the past in a company I don't really want to mention, but the team for me was very -- I think "toxic" is the right word. So everybody would come together in those situations...

**Gerhard Lazu:** To blame.

**Matias Pan:** \[18:00\] Exactly. But then the blame culture would come in. And it's like, "No, wait, we had a beautiful opportunity to make an amazing team and come together and create these bonds that will allow you to keep working or want to keep working with those people in the future..." And it's like, no... Just because you wanted to assign blame, and then maybe tell the client or whoever, like "Oh, yeah, this person made a mistake, and we're not going to let that person do anything anymore... So don't worry, the mistake won't happen again." First of all, it will probably happen. And second of all - yeah, it's not... I don't think we have to explain why it's not necessary or not helpful to assign blame in any of these scenarios. I think it's something that -- at least I imagine the audience of this podcast, who resonates with nice teams, and nice ways of working, and all that stuff... So I think everybody knows how assigning blame will never be productive.

**Gerhard Lazu:** But the reason why you recognize those nice teams is because each of us, at some point, we have been part of those toxic teams. \[laughs\] So you know what a bad team looks like, and we know what to avoid. So I think each of us --

**Matias Pan:** Yeah, for sure.

**Gerhard Lazu:** Each of us has at least one experience like that. We have to go through that, unfortunately... But it's also a formative experience, so I think it's all good. Now, coming back to the microservices aspect... How many new services do you have in this journey to split your monolith into smaller services?

**Matias Pan:** So the estimation when we started in May was that by the end of the year we were going to have roughly around 10 to 12 services. At the moment, there was already one service running on top of -- aside from the monolith. So it would be like an additional eight services. It's September now and we have the six additional services. So it's progressing somewhat as we expected.

**Gerhard Lazu:** Okay.

**Matias Pan:** But we also have two new services in the line. So yeah, I think by the end of the year, we're actually gonna have -- given the projects that we had in mind for Q4, we're gonna have much more than that.

**Gerhard Lazu:** And how was that experience? How was it breaking down this monolith into the services? Are they running in production? That's my first question. And how did you go from having just the monolith in production, and now having these other services in production? What was that like?

**Gerhard Lazu:** I love that question, because technically, we haven't yet done it. And that's something that I'm actually working on at the moment. So the one thing that we -- this is actually why that proposal existed at that point in time. This is why that proposal is the first thing that we worked on when we started, and it was that there were already two services that were going to arrive. That was a fact, and that was going to happen within one or two months. And the way in which the monolith was deployed was very problematic. Like, it was not reproducible. So if I told you, "Hey, I want to force an update from my local machine, or understand how this is deployed on a different environment", I couldn't replicate that. Very few people knew from the team how these things actually worked. So you have like 70 developers, three of whom know how things get to production. And not because the others don't want to, it's just that it's so messy, and you have so many things to do that you don't really want to sit down and waste, in a way, time on that.

**Gerhard Lazu:** To untangle it, yeah.

**Matias Pan:** Exactly. So what we realized is "Okay, do we want to keep adding this technical debt and then have to do a huge migration?" Do we want to risk the fact that each team is going to do their own thing, and then when you jump from one team to another, from one service to another, you have to learn a whole new way of operating that service in production? Do we actually want to--" And yeah, the answer was no. We want to make sure that we have a unified way of provisioning and most importantly, operating services, before all of this happens.

\[21:57\] So that's why the proposal started, we wanted to do a quick win, in a way that unifies, standardizes, the way that you will make services reach production, and the way that you will operate those services... Because the services that were coming were not separations of the monolith. There were new products that are going to develop outside. So the services that exist right now are all in that same area - new things that were developed outside of the monolith. But there are no services yet - there will be probably next week - that break that monolith apart.

We're having a lot of conversations, and we're trying to make sure that we are tackling this in a correct way for us. I think it's a very -- I've been reading a lot of books, "Software Architecture: The Hard Parts", the Sam Newman book on building microservices... There's so many ways of splitting things, and conceptualizing how you split them, and how you focus on it, how you make sure that you're not having endless discussions, and then you spend like one year conceptualizing... So yeah, we're working on that right now. So I don't yet know how easy it is to actually break that monolith... Yet. \[laughs\]

**Gerhard Lazu:** Okay. So from an infrastructure perspective, as you mentioned, there are certain things which need to be in place, which was the whole purpose of this proposal. What are the things that you identified as you want them to be there before you start embarking on this journey where you have, as you mentioned, 12-15 services, all running in production? What does the new infrastructure look like before you're starting to switch the services into production?

**Matias Pan:** Yeah. So the main thing that we wanted to leave clear in the proposal is exactly what you said - what we are tackling. And be very clear on what you're not tackling, what you're leaving for the future, why, and when you're thinking about tackling that. Because like you said, there's so many things that you have to keep in mind when you go to services, that you want to make sure you're making the right choices. So for us, what we identified as the big problems was provisioning, and operating services. That was done -- everybody was an admin on AWS. And you can imagine how 70 people being on AWS can be problematic.

**Gerhard Lazu:** Oh, yes.

**Matias Pan:** So that was a problem that from the security standpoint we wanted to solve. But if you removed the access to anybody, how do people provision things? How do people create resources? So okay, let's create something that talks about how you want to provision things. And that's what we called the static infrastructure. So those are things that you will probably do once and never do ever again for that service in particular, or maybe you will come back at some point because you encounter a change that you have to make.

So let's say that you deploy a service that is internal, but then all of a sudden, you need that service to be accessed from the outside - that's something that we called static. That's something that you go back like three months later on and you make that change. So it's not exactly static, but it's something that hardly changes over time.

So we knew that we wanted to solve that problem, so that we would also solve the problem of permissions and security. We want to make sure that nobody is an admin, or very few people are admin, but that's not a blocker, and people can actually make things with production or reach whatever environment you want to be in. And the second thing of why that one is because we wanted to standardize. We wanted to make sure that everybody is using at least the same tools, if those tools are the right use case. And for now, they are. We have a very limited use case. So ECS, and all these things kind of work. We don't really need something much fancier for now, I guess. So yeah, that was like one part that we wanted to solve. The second part was what we call the dynamic infrastructure. And that's --

**Gerhard Lazu:** \[25:46\] So hang on, hang on... Before we go to the dynamic one, one thing which really helped me to visualize the static part better was, first of all, to understand what is a static resource. And you have a list of examples. You had, for example, database; an Aurora database would be an example of a static resource. Once you create it, you're unlikely to delete it. I mean, it's unlikely; it may happen, but hopefully not, right? Especially the database...

**Matias Pan:** Yeah.

**Gerhard Lazu:** Maybe if you have backups. VPCs, S3 buckets, Lambdas, things like that.

**Matias Pan:** Actually, that's an interesting one. VPNs. A bank integrates with so many providers, and everybody wants a site to site VPN. And that's a very specific -- so the networking architecture that we propose would solve that problem as well. That also has to be considered, and that's what we consider also static.

So yeah, Route 53 records for external access, something like the initial part of a Lambda... So Lambda is, in a way, serverless, but you still need like subnets, and a bunch of other things, so that's also static... I actually have here the document open, so like caches... For example, we use Redis for OTB and authentication authorization... So yeah, S3 buckets, something that you know you need for a long time - all of those requirements we consider static. We want to unify how those things are created. But - and here's the emphasis - we want to make sure that they can be created. So we don't want to create like a fully fledged platform that whenever you have a new use case, we have to run around and develop a bunch of new things. No. Whatever we think have to solve the fact that we already identified a list of static infrastructure, but that we can also grow to other static infra that we haven't necessarily detected.

**Gerhard Lazu:** Yeah, that's a good one. Okay. And the one thing which I also know is that this static infrastructure, because it changes much slower than the dynamic one - I like that you have a slightly different model for it. You have PRs, using TerraForm... There's like a slightly different approach, which works well with things which are changing less frequently. And I thought that was interesting.

**Matias Pan:** I think the two main things is they're changing less frequently, and they are more critical, in a way. So you want to make sure that you know exactly what is the state that you want, at any given point in time. So that's something that it should be as easy as looking in a single place to understand what is created, or what's your intent on creating. So that's where things like TerraForm, and Pulumi, and those types of tools really come in handy... Because you can make sure that you are having something that is always reproducible, that you can track any change that you make, that you can essentially guarantee that no matter what disaster you have -- I mean, if all your infrastructure is raised, and GitHub isn't working, I guess you might have a little bit of a problem... But you can work around that. So yeah, you want to make sure that you're prepared for all those scenarios.

And the one thing actually that I didn't mention, I was reading it here in the docs... One of the main things why I like this type of DXes that are not necessarily a fully fledged platform - observability and cost ownerships. When teams grow, they can do crazy things that a single team has to pay for. And you want to make sure that those teams have the visibility that they require in order to make sure that whatever decision they're making is conscious, and it's "Okay, yeah, I know this is gonna be expensive, but trust me, it's worth it."

**Gerhard Lazu:** I see.

**Matias Pan:** This is also something that centralizing this starting infrastructure really helps you, because you're making sure that "Okay, I'm going to review your PR, and I'm going to see that you're creating this resource. I can challenge that if I want to, and I can make sure that whenever you actually do provision that, I add the tags that are required." So what team is that from, and all that stuff. So if you want to create dashboards by team, you can. It's a second step, but you can do it.

**Break:** \[29:56\]

**Gerhard Lazu:** So in this case, would a developer ask for dynamic infrastructure, or would they work with you via a pull request process just to define what that looks like? How does that work from a developer/SRE platform person? Again, I don't even know what the different roles are in your team... But how does that work?

**Matias Pan:** Sorry, the dynamic or the static infrastructure?

**Gerhard Lazu:** The dynamic. No, no, I meant, static. I'm sorry. Yeah, I meant static. We are still at static. Sorry about that... My bad.

**Matias Pan:** No worries, no worries. Yeah, so technically, those two things are actually coupled. Because the static infrastructure is something that you know you will want once you realize, "Okay, this is the architecture that we're going to have." When you have that intent, then you already want it in production, in a way. So you want provision, and you want to be deploying it, and changing it... So you want both things, the static and the dynamic. They are coupled, in a way; or at least the intent of doing that are coupled. So dynamic comes after the static is done.

So the way that this usually works is a team has a product that they have to develop... For example, I'm not gonna mention it, because it's still private, but there's a new product coming on the crypto domain that has somewhat of a social aspect. They realized that they want to tackle that. In a good scenario, you have the PR FAQ of the product itself, that tells the story, and you work on that, you build a design document... And usually, the idea is that you present that design document as a pre-read on a meeting, and then someone from infrastructure is going to be on that meeting. So you will get the chance to challenge some decisions, or help in some areas... To say -- I don't know, for example, somebody decided Dynamo, and maybe they didn't realize that "Yeah, but Dynamo charges you per write, and size of write, so make sure that you don't go over 4 kilobytes" or whatever that may be.

\[34:08\] So after that part, then it's all -- and that's our main goal. It's all up to the developers. They just have to install the CLI, run a command, push to Git, and that's it. Their job is done. Unless they have a special use case that requires additional work, then they have to do something else, and we can talk about it a bit. But yeah, in the traditional case, after that design doc is good to go, you simply run a command.

So that's really the idea that I have in mind... I started with Rails, and for me Heroku was mind-blowing. I was used to deploying like the -- I already forgot the name; the LAMPstack for PHP. And when I got to Rails and Heroku I was like "Just a Git push? Really, that's it? That's all I have to do? Nice!"

**Gerhard Lazu:** Mm-hm. That's a good moment.

**Matias Pan:** So we wanted to replicate that same experience, without hiding so many details. Because it's important for us that developers know what's running in production, and what's actually running in production, because they are in charge of operating. We don't have an SRE team that looks at the entire platform. Each team has to operate their own service. We're not that big, and we can't really grow at the moment due to the bear market. So yeah, that's usually the process.

**Gerhard Lazu:** Okay. And now the dynamic infrastructure comes in play. Dynamic resources - what are they? What do they look like? Because I'm assuming that's what the developers use on a daily basis, hopefully.

**Matias Pan:** Exactly. That's the thing, I'd say, but that's the visible -- the usable thing, from a developer point of view. You will always deal with that dynamic infrastructure. And in a very short -- I'll see if I can find the actual examples, because that actually might work... But it's everything related to continuously deploying your service, making your service available to other services internally, making sure that you can access other services; that's something that's going to come and go when you want to make sure that you have the proper security policies in place, of serving the service. So knowing exactly what's the state of the service, how is it working, what metrics are you using, how are you using them - all that stuff that is related to what developers actually do, and not necessarily what infrastructure people do. That's what we call dynamic.

So for example, once the service is provisioned and you want to change it, you need some form of CI/CD that allows you to understand that change, build it, ship it, and then have it actually running in production safely. All of that is considered dynamic. All the little things that go into that process is what we mention as dynamic. And I say "we" because I want to give credit to Claudio Martinez. He's one of the people that I work with on the idea, like the entire thing that we are trying to think about it... And yeah, it's as much his idea as it is mine, so I want to make sure that I give credit to the right people.

**Gerhard Lazu:** Okay. That's a good shout-out, for sure. Anyone else that you can think of, that you can thank them and then you can ask them to listen to the episode, because they were on your mind as we're talking about this. Okay.

**Matias Pan:** Awesome.

**Gerhard Lazu:** So let's imagine that I'm one of the developers tasked with adding a new feature to a service. What does the process look like of me making small changes, getting them out into production, and figuring out if it works? Or asking people to try out small slices of the feature, to say "Is this closer to what you had in mind, or further away?" What does that process look like?

**Matias Pan:** \[37:52\] So it actually does vary between teams. There's some teams, for example, that don't have a second copy of the service running, so they just have production... But in most cases, you have staging and production, so you have the two environments. When a developer decides to make the change, we use GitHub, and Kotlin, and all these tools. You simply make a pull request; within that pull request, we already have certain things that are going to run, that are related to that dynamic process.

One of the things that we tried to solve in the proposal is the fact that since we're using ECS, giving the API that ECS has to developers, in my opinion, is more difficult than giving Kubernetes API to developers... Because it is so confusing. You have task definitions that are not really associated with anything, but they're there, and you have to modify them... But they also have the resources, so you have to specify CPU and memory there, but that's not going to be deployed anywhere... And then you have the clusters that don't mean anything, they're like a namespace...

**Gerhard Lazu:** Wow...

**Matias Pan:** ...but it's not very clear if you can use it as a namespace, because you can't really define policies between different clusters... And then you have the service that references the revision of the task definition... It's like a big mess, and we wanted something simple. It's like, "Okay, wait, how much do people actually need to know, and how can we make sure that we hide the right things without actually making a fully-fledged platform that it's hard to iterate on?" So we ended up creating the -- I feel like some listeners are gonna be like, "No... What did he say?!" We ended up creating an abstraction with YAML. It's essentially like a YAML file, that -- I know it gets a lot of hate, but there's use cases and use cases, right?

**Gerhard Lazu:** I love it and I hate it at the same time.

**Matias Pan:** Yeah, exactly. \[laughs\]

**Gerhard Lazu:** This can go on record... It's both, at the same time.

**Matias Pan:** Exactly. It's both the right tool and the wrong tool in so many different ways, yeah. So yeah, you have this abstraction that you as a developer iterate with. So that's the only thing that you touch. And the additional thing that this YAML definition has is the fact that you can configure secrets, parameters, or environment variables per environment. So we know that we have staging and production, and we also know that a lot of problems that we've had in the past - and this is a limitation of the framework that we use, which is Dropwizard - is that when you define environment variables, it's very common for people to define it only on staging, and then break production. Because that change reaches production, but it's not really productive, because it's behind the feature toggle... But it can't deploy, because it doesn't find the variable and then it breaks.

So we also define a way of defining those variables on a YAML file as well. And in this pipeline, the first thing that we look at is, "Is that service YAML actually valid?" So you make a pull request, and let's say that you change the CPU of the service - we will run a sub-command of the tool that we build, which is called Lemmy, that is called Verify, and it's going to verify that the definition of the service is correct. It will also verify that the definitions of the environments are correct, and it will also verify that what you're defining in those environments are actually a real resource. So if you're defining the ARN for a secret, or actually the name, you do not have to put the full ARN. We will make sure that that's provisioned, that that exists, because when you create the pull request, it means that you are ready, you intend to put this code somewhere, so things should already be ready for that to be merged.

**Gerhard Lazu:** Yeah.

**Matias Pan:** So that's the main thing that it's going to run in this pipeline, "Hey are things actually correct?" Assuming that all of these things are correct - tests pass, integration tests, end to end tests, whatever tests developers decide to do - you will merge that to a branch we call Develop, and automatically, that will reach this environment that we call staging.

So let's go back a little bit and remember that the way that a developer starts with this is running a command, "lemmy service new." That is going to create this pull request against the central TerraForm repository, where all the static things are going to be defined. But it will also generate all the CI/CD files that are related with the dynamic part.

\[42:12\] So when you do a Git push, you will already have pipelines configured and infrastructure provisioned. One of those pipelines is everything that goes to Develop goes automatically to staging, and everything that is tagged with a semantic versioning will automatically go to production.

**Gerhard Lazu:** I have a question... Why isn't the name of the branch that pushes to staging called Staging? Why is it called Develop?

**Matias Pan:** Oh, I asked that exact same question when I joined... And it was even more confusing, because the environment used to be called Pre, which is like the shorthand for Previous.

**Gerhard Lazu:** Right...

**Matias Pan:** And I was like, "Why is it called Previous, first of all?" We changed the environment name, and now it's Staging. And the reason why it's Developed is because we didn't want to change the workflow of 80 people that already were used to go to Develop and check out a new branch. So yeah, it's historically just Develop.

**Gerhard Lazu:** Okay. I think it can work either way; either the name of the environment can change to Develop, so that it matches the branch name...

**Matias Pan:** Actually, that would be more reasonable, I think... \[laughs\]

**Gerhard Lazu:** Yeah. Either way... But as long as you have that connection, you know what to expect. Because that would be my first question, "Why is this "Develop and not Staging?" Okay...

**Matias Pan:** I'm actually gonna write that down. I'll add it to the backlog. Thank you. You've given me more work. \[laughs\]

**Gerhard Lazu:** Noo...! Alright. Well, only if it's worth doing and others agree with it, for sure. We don't want to inconvenience anyone too much, right? Hopefully it's a change for the better, it's a Kaizen. That's what I call it.

**Matias Pan:** Yeah, yeah.

**Gerhard Lazu:** So when the pull request gets merged, then that change will be deployed automatically into staging. Right? So until the pull request is merged, the change will not be deployed.

**Matias Pan:** Yup. And something that we're thinking about a lot - and when I say a lot, I actually mean a lot-lot - is how do we want to QA things? So how do we want to validate? Obviously, on a bank, correctness is a big deal. So in my head, the fact that correctness is a big deal and what you ship has to be secure - I'm on the camp of production-only; no additional environments. Because that means that the tools that you have built for that to be a possibility means that you trust so much on your development process, your testing process, and everything that happens.

And the other fact is that when you go to a services infrastructure, replicating every single service on a different environment is expensive, it's probably problematic in some cases, and it just adds a lot of complexity to also the deploy process, because you start having this promotion from one environment to another, and some commits are going to be left behind, and then mid the main branch is going to be really messy... And we've actually had some problems recently, where people were not squash and merging things, hotfixes that were directly to main... So then when you bring them back to Develop, it's like "No way, this commit already exists here, but it doesn't here..." So it's like a problematic thing. And we're thinking a lot on how we actually want to test all these things, and have like a setup where you can have feature branches that actually create infrastructure, that can be embedded, in a way, into the existing production infrastructure, and tested in an isolated way. That's like the main idea, actually, that Claudio brought to the table, because it's something that he already built in a previous company. And for them, it's a big company, and it worked out -- I don't know if it's going to work out here, but it worked out really great, because you could manually override, "Okay, if you're going to this service - new production environment. If you're going to this service, actually go to this other service that I tell you, and test what I'm testing."

\[46:06\] So that's all probably going to change in the near future... But yeah, for now, it's like a fully-fledged copy of production that has the code that you want, and at some point during the week somebody is going to be like, "Hey, I need something to read production." And since we had a lot of instability with the monolith, and since it's hurting a lot of users, we made the tough decision of only deploying at 6 AM, and putting the app in maintenance when we deploy. It's a setback, but it's also a nice way to motivate you to fix what you have to fix, because nobody wants to -- I mean, I like to wake up at 6 AM, but I like to wake up at 6 AM to go for a run, not to go for a deploy. So I think it's something that everybody wants to fix... But yeah, eventually someone will want it to production, so they will ping and say, "Hey, I want this to reach production", and everybody will get together and make sure that that reaches.

Now, on new services, people are doing different things. There's one service, for example, that I was working on a couple of weeks ago - they go directly to production. They go to staging, but at the same time they go to production, because it's a simple service, it has the feature toggles, and the way to test it is usually just test it in production, because you actually don't have a staging environment that you can trust, mainly because the provider that we use doesn't have a staging environment that we can trust. So yeah, just go to prod. Yeah.

**Gerhard Lazu:** Yeah, that's a good idea. And if you optimize time to production, if you can make it under a minute, can you imagine how quickly the fixes can be?

**Matias Pan:** Oh, yeah.

**Gerhard Lazu:** Even if there is a problem, within a few minutes it's already fixed.

**Matias Pan:** Yeah, exactly.

**Gerhard Lazu:** And the changes - you are forced to making smaller changes, because the risk appetite is very low, and you want to be sure that whatever you're changing will not have a bad effect. And if it will have an effect, you can fix it very quickly, because you can eyeball it. It's so small.

**Matias Pan:** Yeah, it's just this little thing. Right now it's this big thing that you deploy twice a week. And for me, the fascinating thing - imagine the amount of confidence that you have, the ease of mind that you have when you're deploying things. Like, "Is it going to break? I mean, maybe, but no big deal." I'm not saying like, "Yeah, break everything." Or maybe I am... \[laughs\]

**Gerhard Lazu:** Of course... \[laughs\]

**Matias Pan:** But that confidence that you can have, that's for me -- at least in the previous company that I was working at, we put so much effort into making sure that you could have this confidence, and it was so worth it, because actually, the system that we were building spent my money by the second. It was a DSP, a demand-side platform, so it was buying ads... And yeah, you can mess up. But that mess-up in that sense can cost you $30,000, so please don't. So have the tools ready to just deploy wherever you want to deploy; you have the confidence that it will work, and if it doesn't, you have the tools to make sure that the impact is minimal.

**Gerhard Lazu:** Systems that deal with money, especially someone else's, are really hard. Really, really hard. That's like a whole new game.

**Matias Pan:** Yeah. I was surprised of so many things when I -- this is my first FinTech company. I used to work on an ad tech company, and the problem there is that it's in a way your money; because if we mess up, we're not going to charge whoever client is giving us their ads for that mess-up. We will have to pay for it. And you do care, but you definitely care less than when it's Gerhard's money, for example.

**Gerhard Lazu:** Oh, yeah. Someone else's money, yeah, because - I mean, what would you do about it? It's not like you can pay them back. I mean, in some way, maybe you can, but it's complicated; really complicated.

**Matias Pan:** And then there's the legal implications. The central bank is going to show up on you will be in problems.

**Gerhard Lazu:** \[50:01\] Yeah. Okay. So one thing that I know the services do is there are certain requirements that you have from them. For example, you expect them to be listening on certain ports, you expect them to have health checks, and things like that... So can you run us through the things that a service that is a good one you would expect it to have before it goes into production?

**Matias Pan:** That's actually a central part of this idea, and that's something that I always try -- I don't know if that's because of the Rails background where convention over configuration triumphs over all... But you can solve so many problems with conventions, and you don't need to build tools for that. Maybe in some cases you do, because the convention is a limitation, not just a convention... But that's something that we used as the foundation of this idea. We want to make sure that we can like simplify what we're doing. And we'll make that proposal public, so that people can read it, but you will see that what we did is very simple. Like, it's very, very simple. But it solves problems in a huge way, and it allows us to move really fast.

Yesterday, actually, I sat down with a developer that doesn't know anything about infrastructure, and they provisioned, deployed and load-tested a service in like under an hour. And that for me was like, "Yes...!"

**Gerhard Lazu:** Wow. Yes, yes, Matias, yes! And Alberto, did you say? No, Ramirez... Carlos. Was it Carlos?

**Matias Pan:** Claudio.

**Gerhard Lazu:** Claudio, sorry. Claudio. Alright. Third time lucky. So well done, Claudio and Matias, as far as I know... It works. It works.

**Matias Pan:** Yeah, one of the things that we laid upon was the fact that you can simplify your job using conventions in a huge way. For example, servers are going to need to receive traffic. Where are they going to receive that traffic from? Yeah, you could make it so that people can define where they receive traffic from. So you can choose your port, and you can choose your base path, and you can choose everything. But then you have to keep that in mind when you build the health checks. And the health checks are a static thing, because they're something that they're created at once. So how do you make sure that you create an interface? Okay, let's add it to the YAML. Okay, another thing on the YAML. Perfect. Now, how do we make sure that I can actually find that service from a different perspective? How is that service exposable from the load balancer? Okay, it has to know that it's a different port. Okay, let's make it reach to-- it starts to get so complicated for such a basic thing that you're like, "Okay, wait, is this really a limitation? Do people actually have a preference on the port that they listen on?" "No, no, I just listen on the 5050. Not the 8080."

**Gerhard Lazu:** \[laughs\] "Yeah, I don't like 8080. I'm slightly special. One extra -- it's more secure, right?" \[laughs\]

**Matias Pan:** We identify the port, that's one. So you have to listen on port 8080. That's something that you actually have to do. Health check is another one; you have to provide an endpoint that's called healthc. We use that one because it's a convention that Google proposed... And I don't really care about those names, so I'm like, "Yeah, this is an alright convention." I don't care if it's Google's or AWS'. Observability is the biggest one of all, and in the document - it's a little bit outdated, because I ended up working out something different... But it's something that you also want to have out o the box, and make sure that it's a standard everywhere.

When I say observability, I don't just mean like metrics, but how you add those metrics. Where are those metrics found? How can I make sure that those metrics reach whichever monitoring system you have? How are alarms created? How can you make sure that those are tracked, and on-call and all that stuff? Packaging is another one...

**Gerhard Lazu:** Before you move to packaging, can you tell us what else the good observability, the one that you use today for services, look like? Did you standardize on some tools, or on some standards? What does it look like?

**Matias Pan:** \[54:10\] This was such an easy thing that was solved with money... And I asked for permission, "Hey can I not solve this and just use money to solve it?" And the answer was yes, because it wasn't that much money. So basically, today we use Datadog for everything. And since all services are JVM-based, that's something that I'm a bit jealous about, compared to Go, which is my favorite language... When you use Datadog, you can have everything built-in: metrics, tracing, and logs. And the ability to trace all those things - the metrics with the traces, and the traces with the logs.

So what we do is the Lemmy tool, when you actually run the lemmy service new, we create a Docker file for you that uses a base image that has some tools that we created, so some BPF stuff, jstack stuff, and some things that we like to use to debug when things go wrong. But it also adds the Datadog Java agent. And this is something that I learned at Lemon, because I didn't know any Java.

So apparently, in Java you can have these agents that you add when you actually run your jar, and that can essentially do the things that eBPF can do with the kernel. So it can listen or wrap anything that you have. So if you have a class, and the Java knows the identifier of that class and can find it in the CLASSPATH, then it can wrap it, and you automatically have observability.

And Datadog did a nice job at adding observability to standard libraries, that thankfully we use. So you create that service, we add the Datadog agent, we bootstrapped the project... And make sure to have the Prometheus client embedded in your service, and the listener of like /metrics in a specific port already running. All you have to do is add metrics, and we have a specific way of adding metrics with data classes that are used in Kotlin. And the logs, all that stuff, like the ability to trace all those things - that's all taken care of by Lemmy when you get to deploying things. So Lemmy will automatically add some sidecars\] to your service that will allow you to get those logs shipped to Datadog, inject trace ID and span IDs and all those things that you need, and then get them to Datadog.

So a good service with good observability today has tracing enabled, at the moment at 100%, but we are actually going to be reducing it soon... Metrics defined, but by the teams, so it's up to you... And logs traced with the actual traces. All out of the box thanks to Datadog. I'm not going to take credit there; I just added the Java agent and I was like "Can you really--" I was blown away, because with Go it's a lot more verbose, like things usually are. For me, that's not a problem, but I know that for people it is. I know that Datadog provides you libraries that you can change in the import, but you cannot change in the go mod. You cannot do a replace actually, because they have all those libraries in a single repo, so it's not separate repos with the module. So I cannot do a replace. I have to change the imports. I don't want to do that.

**Gerhard Lazu:** I see. That's a good one. I didn't know that myself. That's very nice. Okay...

**Matias Pan:** so yeah, Datadog did my job, basically. \[laughs\]

**Gerhard Lazu:** Now we can go to packaging, if you want.

**Matias Pan:** Perfect. So yeah, with observability already taken care of due to a very complete product, the other thing that we have is packaging. And like I said before, when you run lemmy service new, we create a Docker file, and all applications have to implement what we call a contract. It could very well be scripts, but since everybody's using Java and Gradle, or any JVM-based language and Gradle, you have three commands that you have to implement as a developer, and that's build, integration tests, and end-to-end tests, I think it is. So it's those three tests that we usually do historically at the company.

\[58:12\] There's a kind of weird distinction between integration tests and end-to-end tests that I'm not yet convinced... But yeah, we have to support the monolith and be sure to be backwards-compatible, so you have it there. And we use those three scripts to automate all the pipelines that are a part of that packaging. So packaging is not just about the actual things that you package, but it's also how you package it. And we simply generate a GitHub workflow that uses a Docker file that has those Gradle commands, those Gradle build commands that we know will be, because developers will implement it... We use BuildKit to actually like build the image itself... I mean, we use Docker, but with a flag turned on, like "docker_buildkit=1". So we don't use BuildKit in the proper sense, with caching and all the nice things that it has.

So yeah, that's how packaging gets taken care of - Docker for everything, auto-generated, if you want to change it, you can change it... You have it there, it's yours to own... And that's it. Yeah, that's the packaging part.

**Gerhard Lazu:** Where do you publish the images once they're built?

**Matias Pan:** ECR. Actually, that's part of the static infrastructure. When you create the lemmy service new, we'll use one convention that is so small, but solves so many problems that you will have to use so many complicated tools to solve it... And that's service names, service discovery, and the ability to never have services/service names collapse. The name of your service is the name of your repo, and that's it.

**Gerhard Lazu:** Right.

**Matias Pan:** So the name of the ECR repo is going to be the name of the GitHub repo, and the name of the service is going to be the name of the GitHub repo. And since we're all under a single organization, you can't have two repos named the same. So goodbye to service name clashing. And when it comes to service discovery, we don't really solve it in a fancy way, because you cannot write a program that finds something in a way that you would do with console, for example... But you can just go to the GitHub organization and search for /service, and then all the services will show up. So it's a very simple, but powerful convention for us.

**Gerhard Lazu:** I like it. I like it. It's like convention over configuration.

**Matias Pan:** Yeah.

**Gerhard Lazu:** It's such a nice one.

**Matias Pan:** Yeah. Another convention, actually, is the fact that GitHub allows you to represent a lot of things that you want when you're deploying those services. So we use GitHub as a foundation as well for everything that has to do with on-call and ownership. Each GitHub repo has a set of owners; those are the ones that are in the on-call rotation, and those are the ones that have AWS permissions to exec into the container, for example, or do those types of things that you might need to operate on.

**Gerhard Lazu:** That's another good one. I was just commenting on convention over configuration and the power that it has, and the fundamentals; this feels like a fundamental one - when you have it, everything just becomes so much easier. And the more of those you have, the simpler they are, the more straightforward they are, people just intuitively just pick them up, and they expect things to be that way, and things are, and it just blows everyone's mind, like "Wow, this is simple. It's exactly how I expected it to be. It was designed."

**Matias Pan:** Yeah. Something that with Go I really resonated. So the Go language - I bet every single listener that listens to this podcast knows about Go, but it has built into the language a formatter. So when you write Go code, it will automatically - if you have it set up - format your code with a single, standard, way of making that code look a certain way. I bet a lot of people disagree with how the formatting does... I don't know, maybe some people -- like, in C you have the big debate of "Where is the curly braces if next to the like if or the function or in the next line?" I bet there's people that want it below. In Go, that doesn't work. But there's such a powerful thing of knowing exactly what -- like, everything will look the same. You know that things are going to look like exactly the same, wherever I go.

\[01:02:15.04\] So if I go from one service to the next, I know that /metrics is metrics. If I go to another one, I know that /healthc is going to be health check. If I see a repo that has a /service, I know I can find that by using like lemmy service lift. Maybe it's not what you would have done, you as a developer. Maybe you would have done a different convention. But it doesn't matter. The convention is there, and you will like the fact that there is a standard way of things happening.

**Gerhard Lazu:** Except people that use Vim, and they don't have any Go plugins... \[laughter\] And nothing Go formats is, and CI/CD doesn't 

**Matias Pan:** I've seen people on YouTube - I don't want to name him. He's very famous. He actually is part of the Go team. He did a video where he was implementing HTTP/2 in Go, in the beginning... And not only he used Vim without plugins, he didn't have syntax highlighting on. And I was like --

**Gerhard Lazu:** That's hardcore. \[laughs\]

**Matias Pan:** "How does your brain work?" I need colors in order to understand where to look.

**Gerhard Lazu:** Yeah. He sees in colors. Go - it's already colored, by default.

**Matias Pan:** Yeah, yeah. I can imagine his brain just coloring everything, yeah.

**Break:** \[01:03:32.08\]

**Gerhard Lazu:** So as you were on this journey for a couple of months, are there any surprising things, any unexpected things, whether they were good or bad, that happened during this endeavor to get everything standardized, to get everything just more intuitive? Anything you came across that you were like, "Hm, I wish I knew about that before I did this"?

**Matias Pan:** Yeah. So one of the things was about TerraForm. I used to use TerraForm, but a really while back, and it was a fairly common use case. We just had TerraForm files, and that's it. We didn't have anything more than that. We didn't have modules, we didn't have workspaces, we didn't have templating with Terragrunt... Just TerraForm. With this thing that we built - and this is actually part of like Axel, Christian, Jorge, and some other folks from the team - really dialed in this part, where we use modules to make the developer... Like, whenever you reach a point where you need something different... So you provision your service, but I don't know, you needed a Dynamo database, for example. Not a classic RDS one that most services in a bank usually use - we want to make sure that we can accommodate that use case without us having to do any work, and developers having to do little work. So we use the concept of TerraForm modules a lot for that.

So you have a module for Dynamo, you have a module for Redis, a module for a bunch of other things. That is much simpler; you just have to define one resource, and that's it. If you didn't have that module, you'd have to define the security group, and the resource, and maybe the private link stuff... And yeah, a lot of things that are very confusing, at least for me. But TerraForm modules are a useful thing; maybe we're using them wrong. I honestly haven't done a lot of research there, but...

**Gerhard Lazu:** \[01:06:28.19\] That's the story of my life. I'm using it wrong... \[laughs\] Which to me means it's not intuitive enough. That's what I'm actually saying, for the people that understand convention over configuration. If I'm using it wrong, it's not intuitive. The conventions are a bit quirky. A bit off.

**Matias Pan:** Yeah. So when you're doing these types of things and you want to standardize these resources, you will come across certain use cases where something has to be provisioned behind a condition. Example, a very simple one - I want the service to be accessible from the internet. But I want a service to not be accessible from the internet as well. So that's a configuration that requires me to provision different things. And actually, in ECS, that's even worse for something that we will cover very soon, that is problematic. And when you want to do that in TerraForm - let's say that you want to have a module for ECS. How do you make sure that you can actually have a service that is accessible internally, and have a service that is accessible externally, only if you wanted to? You have to do that -- I don't know if you've done it, but the count thing, where you have like the if condition, and it gets very weird when you start to have more and more use cases that need that. And it couples nicely with a limitation that ECS has. And the way that you make traffic reach ECS is with target groups. And a target group is a static thing that lists what are the IPs that you want to register, what are the IPs that you want to listen on, and then you can attach that target group to a load balancer.

The surprising thing is that that target group can only be defined during provisioning. So once you provision the service, you're done. You want that to be accessible from the internet, because you realize, "Oh, wait, actually this doesn't need security, so we can just make it public." Okay, recreate it. Just delete it and recreate it. Or think about a migration process where you create a new one and then you redirect the traffic to the new one, and then you kill the other one... Yeah, it's basically very complicated. And when you pair that together with a TerraForm module, you have to have an ECS service with a count, but you also have to have a second ECS service with a different count, that has the two target groups. So one has the internal one, and the second one has an internal and the external one.

So what happens when you have a new use case where a service has to be accessible from a provider? So you're integrating with a payment provider that has to send you a callback directly to a service through a VPN tunnel. That has to go to a separate target group and to separate load balancers, because you want to have good security boundaries. So you have a third service, that has three target groups...

**Gerhard Lazu:** Oh, my goodness me. This doesn't end, right? \[laughs\]

**Matias Pan:** ...the external and the providers. But what happens if the service doesn't want external? Okay, you have another one with the internal and the providers. Maybe we're doing something wrong...

**Gerhard Lazu:** Everybody gets a target group. It doesn't matter whether you want it; you get a target group. \[laughter\]

**Matias Pan:** Exactly. Convention. Everybody gets a target group.

**Gerhard Lazu:** Is that the most expensive resource in AWS, let me guess, so that you have to keep creating those? No, obviously, it's not ... We all know it's a NAT gateway, right? \[laughter\] That's the most expensive thing in AWS.

**Matias Pan:** I actually once had to spend a lot of money on a NAT gateway that was poorly configured, from a provider. We gave the keys to a provider, they created a NAT gateway to go to the internet, and we were like, "Yeah..."

**Gerhard Lazu:** \[01:10:02.08\] We all did it. We all did it. We know what that looks like.

**Matias Pan:** Yeah. So the TerraForm was a bit of a surprise for me, because in concept, it was such a powerful idea that everything is in module... But it has that problem that it's really hard to have conditionals in TerraForm. And we're gonna get to a big debate of configuration languages, but the second part that for me was problematic and -- confusing, I would say, not problematic, just confusing, is the fact that when you have modules, you have that source in TerraForm that points to a Git repo. And you can point to a ref, right? You can point to a specific reference. We started having cases where we only want certain things in staging, and we don't want them in production. So you start having different versions of the module that are drastically different. They're almost different applications. And you have them on the same repo, and it's kind of confusing, and you have to add something to different versions... And it's like, "Okay, wait, but couldn't this just be a single one with a condition?" No, because conditionals are so hard. So you have to create a different version. And you start having these things that are kind of messy.

For example, when you create a target group, you specify the protocol. "I want this target group to receive HTTP traffic." Perfect. What happens if you end up realizing that the best use case for that was a network load balancer and not an application load balancer? You're going to need a target group that is TCP. But you're going to start testing that on staging. So you will create a new version of the ECS module with the TCP target group. But you don't want that in production, because it's going to bring your service down. It's not going to delete it, because you have deletion protection, but it will mess up your entire pipeline.

So you have to make sure that you keep these other versions separate, that you want into reproduction and if a new service comes up, you want them to use this one, but it's not the stable one that is that stable So it's yeah, it's confusing - dependency management, and conditions, and all that stuff. For me, initially, the idea of modules was so pure, I was like, "Oh, this is gonna be so beautiful." And it's not. Yeah, it's a big, a big dependency mess.

**Gerhard Lazu:** And now I think we're starting to understand why developers - they just want to develop. They say, "No, no, I don't want to get into the infrastructure game, because it can be such a mess."

**Matias Pan:** Yeah. And I feel like I'm a bad person at identifying those things, because I'm actually a developer. I've developed for most of my career. But I was always very into infrastructure. So back in 2014, when I started learning Go, I started learning Docker, and then I got hooked. And now I do like 50/50. So I'm really bad at having a good definition of what developers should actually know and do... Not because I know a lot, but because I feel comfortable with these types of messy things. I'm like, "Okay, yeah, this is annoying. We're going to solve it." But maybe the solution is not what developers wanted. It's what I wanted based on my knowledge, right? So it's very good for me to work very close together with people that don't really have that, to make, for example, that Lemmy experience that we created is okay from other people's perspective.

**Gerhard Lazu:** Okay. So as we're getting ready to wrap this up, is there one takeaway that you have for our listeners, from your experience doing this transformation? Because it is a transformation; you're going from a monolith to microservices. I just call them services. We don't know how micro they are just yet. But still, it is a transformation, it is a big one, a challenging one, and you're working with 70 developers to bring them along. And we just discussed about some of the weird stuff that happens in the infrastructure world that a developer would just like shake their head and say, "Okay, I'm going back to my job", Go or whatever they're doing; they just don't want to know about it, and they're very happy to have you around to take care of those challenges. So the takeaway for our listeners that stuck with us all the way --

**Matias Pan:** \[01:14:03.08\] Can we do two?

**Gerhard Lazu:** We can do two, of course. Yes, please.

**Matias Pan:** Okay. Because I want to separate them into something that is not that actionable, and something that is more actionable.

**Gerhard Lazu:** So sounds great.

**Matias Pan:** So if you're going through this process, you're a person that's working on a mid-sized company of around (I don't know), 50 to 200 people or 300 people, and you're going through this process, because you went through a hypergrowth, or whatever it is that's happening, and you're trying to do this breaking off the monolith, please always challenge yourself when it comes to slicing. It can be such a daunting and complex and never-ending project that if you don't slice things correctly, you will feel that you're making no progress. So quick wins sometimes are not okay. Sometimes they create more problems than value, but in these type of projects, try to always, at least in the first part of the project - and when I say first part, it could be one month, or it could be one year - think about quick wins. Think about the problems that hurt the most, or more interestingly, the problems that will hurt a lot in like two or three months, when certain things happen.

So always challenge yourself when it comes to slicing, make sure that you're being -- I don't know how to say it in English, but you have the intent to leave things out, and that you're being clear why you're leaving them out, and when you think about tackling them. And then one can be very lazy; you can be like "Eventually. When that becomes a problem. When we feel like it", I don't know. But that's a problem you identified, and if you're writing a proposal, it's very important for people reading that you actually thought through that stuff. It's just that the thing that you're proposing is the quickest win that you could think of, that will already give value and make you feel like you're progressing in a huge project. That's the first one, and it's so important. It's something that I feel with this particular thing, we've made the right decision; we made mistakes, and it wasn't that quick, I think we could have made it much quicker, and right now be tackling other problems instead of the ones that we're currently tackling... But I think it was the right move.

So yeah, that's the first one. And that's advice that I can apply for so many things, because slicing is such a huge deal, and sometimes it's the reason why some projects fail, is too much at the same time, and you never see the end.

And then the second one is something that is going to really depend on the size and the type of your organization, but I'm willing to bet that it's going to be covering most of the use cases... And that's put a central team in place, that is going to be "in charge" of this project of breaking the monolith. And when I'm talking about a central team, I'm not talking about those architect teams that analyze the code, build a diagram, and then leave. No, that's something that will rarely be successful. For this type of application to be broken apart, you have to solve so many problems, have so many tools, think about so many different areas. For example, you want to migrate a part of the service; how do you migrate the data? Where is that data going to be stored? How can I make sure that I live with those two data at the same time? How will that process look like? Can I leave with two datasets and just consolidate for a while and then switch to the new one?

You will have so many things to think about that a central team that focuses on those things and is in charge of driving the project in the right direction will be such a relief to the actual developers that will also code. And also, don't be afraid for this team to actually get their hands dirty and write code, because that's actually going to be the best thing that you can do to make sure that the decisions you're making are the right decisions. So yeah, for me, those two are the ones that I'm really happy we made those decisions, and I'm really happy that we went with that direction.

**Gerhard Lazu:** Those are two great takeaways. Thank you very much, Matias. I'm super-curious what it will look like to go into production with these services. What it will look like when you'll start breaking down the monolith; you'll have like your first service, it's in production, the monolith is doing less... Those will be some exciting milestones. But there's so much that needs to happen before. And as you mentioned, scoping, slicing - super-important. Don't bite more than you can chew, because it'll be very easy to do that... And it takes someone experience, it takes a team, a good team that comes together, that doesn't blame one another, to work through those things. It's going to be hard, but it's going to be worth it... And I'm so looking forward to your next milestone.

Matias, thank you so much for joining me today. I had great fun. I'm looking forward to next time. Thank you.

**Matias Pan:** Thank you, Gerhard.
