**Johnny Boursiquot:** Hello, and welcome to this episode of Go Time, the one where we're talking about when distributed systems go wrong, and how you can find out about it. Joining me today are some people who know a lot about distributed systems, and that will hopefully provide some insight on how you monitor and debug these beasts.

First, a returning member, the OG Go Time podcast panelist, Carlisia Thompson. How are you doing, Carlisia?

**Carlisia Thompson:** Yeah, same person, different name. \[laughs\]

**Johnny Boursiquot:** I know, right? I almost said Campos. I'm like "Oh no, that's not her name anymore." Awesome.

**Carlisia Thompson:** Glad to be here. I missed the show.

**Johnny Boursiquot:** Yes, yes, and we miss you. But everybody's got a lot going on, so... You know, we're trying to hold it down, trying to do as good a job as you did back then... But yeah, thank you for coming back.

**Carlisia Thompson:** You do great.

**Johnny Boursiquot:** Thank you. For those who don't know, Carlisia works on the project Velero over at VMware to help you have some safe backups and restores, and disaster recovery, and those kinds of things for your community's clusters... So I'm sure she's gonna have some more stories for us about knowing when things go wrong there.

Next up, we have Mr. Kelsey Hightower, who really needs no introduction to our community, if you've been around the cloud space for any length of time. I'm sure we'll find out what Kelsey's been up to lately, and I'm sure he'll have some insight on the whole monitoring space right now, as he sees it unfolding.

And last, but certainly not least, is Stevenson Jean-Pierre, who's an engineering manager over at PagerDuty, a name that is -- I don't wanna say near and dear to my heart, because every time I see that notification come in, my heart skips a beat when I'm on call... But hey, it is what it is.

\[04:15\] Fun fact - Stevenson was actually a TA from yesterday at GopherCon, the GopherCon workshop that I taught yesterday... So a big shout-out to Stevenson for helping me do that... And oh, by the way, GopherCon is actually happening this week -- well, by the time you're listening to this, it'll have been like last week or two weeks ago... But yeah, GopherCon is happening this week, and it feels different this year. Certainly, we're not all together, given the circumstances of what's going on around the world... But things are happening online. We're trying to have the same -- as much of a similar experience, and welcoming, and a warm experience as we would if we did it in person... But it is not the same, and I'll admit that, but we are making the best of what we have.

Alright, so - Kelsey, how are you doing? I didn't let you say hi out here.

**Kelsey Hightower:** I'm doing good... You know, for the times that we're in, things are pretty good; I can't complain too much.

**Johnny Boursiquot:** Indeed, as you said earlier, the internet works, so that's something...

**Kelsey Hightower:** Twitter works...

**Johnny Boursiquot:** Twitter works... Yeah, exactly. Get our hot takes daily dosage. Mr. Stevenson, how's things going at PagerDuty?

**Stevenson Jean-Pierre:** Things are good. Hello, hello. Thanks for having me.

**Johnny Boursiquot:** Glad to have you. So we're here to talk about the monitoring, troubleshooting, debugging, what have you, of distributed systems, and when these things go wrong. So we know it's not a matter of if, but a matter of when things will go wrong. There's a lot of things, there's a lot of places we can start the conversation, so if you are operating cloud-native infrastructure, you know there's a lot of levels, a lot of places for things to go wrong. At a cluster level - do you have enough nodes in the pool? Are storage systems working? Is your network throughput okay? How do you monitor your pods, your deployments, and whatever terminology you wanna use for whatever orchestration tool you wanna use... There's a lot going on there, and that's just at the infrastructure level.

There's so much to worry about at the application level, at your container level... There is so much going on. I'm interested in really understanding if somebody is not living and breathing this environment as an operator - and perhaps if you are somebody who's in charge of deploying your applications within this environment, you are gonna have different needs for monitoring and understanding what's going on when something breaks than somebody who is an operator.

I'd like us to start somewhere - there's so many layers, but let's start at the infrastructure level. If I'm an operator of some sort of orchestration tooling for these distributed systems, what am I looking for? Where do I start, from a monitoring standpoint?

**Kelsey Hightower:** Why do I care about this? If I think to my earliest exposure to this thing they call monitoring, my days kind of start around 2010(ish), maybe a little earlier, with a tool called Nagios. Maybe some people are still using Nagios. This is a world where you have these little agents on every single machine, so that would give you at least like "This is the machine that's complaining." And we would write all these Nagios scripts, and they would run, and if you did it wrong, those Nagios scripts would be the reason you have an outage; they would take up so much resources monitoring the thing you care about that they would cause the outage to the thing you care about...

But at the end of the day, one thing that was always a burden to anyone that's relying on any of these monitoring things is "Should I care about it, and why do I?" And if you've ever worked at \[unintelligible 00:07:41.28\] before - and I have - you just have this Christmas tree of Christmas lights in front of you, and you're like "This thing is always red." And they're like "Yeah, don't worry about that one." And it's like, "Well, why is it even here?" If it's something we shouldn't care about, then we should just take it away; and I think the Holy Grail for most people at a high level thinking about this is "What do I care about?"

\[08:05\] And I think for people coming in new, that question could be manifested in practices like SRE, this thing around SLA's and SLO's. I encourage most people thinking about this thinking about the life of a packet - where is this request coming from, what parts of the system does it travel through, and how fast or how slow does that need to happen? I think that will help clue you in on trying to figure out what metrics and monitoring do you actually need, so that way when you see it trigger, you know it's something you should care about, and then what action to take.

**Carlisia Thompson:** Yeah, I really like this idea of thinking about the packet and the life of a packet, because - I wonder if it's just me, but whenever I think about distributed systems, in my head I think about nodes, and computers, and systems... And I have to make an effort to remember the reason for this whole thing to exist is to transport data from one point to another. So it's just data going back and forth; that's what we're talking about.

So this whole infrastructure -- most of the things that we're going to talk about today is the pipeline that's the conduit for this data to be going back and forth. And yes, so when you start thinking about the data, the packets, and the lifecycle, replication, then you start clueing in, "Okay, what do I need to monitor? What are the trade-offs and what's more efficient?" Then you can make better decisions, if you have in mind, in the forefront, that data is the gold here. The infrastructure is the thing that gets us there, it gets the gold moving, and making money for us... \[laughs\]

**Kelsey Hightower:** Yeah, for those that need an analogy -- like, there's so much data that you can get from these monitoring tools... If you ever installed one of these metrics or monitoring agents, they collect this wealth of information. And the analogy I like to think about here is when you go ship a package, you put a label on it, and that label represents everything in that box; it could be critical, it can be expensive, but at the end of the day you get this tracking number, and they told you that it's going to get to its destination in three days. So that's your SLA. And you know what's inside there, and you know why it's important, but maybe the people shipping it don't feel the same way about what's in the box as you do; it could be someone's birthday present, and you want to get there in a timely manner. But they give you back this kind of contract, "Here's the identifier...", but they won't leak what truck it's on, what sorting facility it goes to...

And when you go track the package, you go and put the tracking number into the thing, and you see "Look, this thing is on time; it's still at the sorting facility, but don't worry, it's still on time." I think that allows you to focus on the thing that's important. Will it get there on time? There could be a car -- or one of the trucks that's transporting your package, that has a flat tire. You probably don't wanna know about that; even though it might be interesting that truck 007 has a flat tire and it's gonna change things a little bit, you don't really care until you start to miss that SLA. And that data can be used for people who have to reroute the package; before the observer over the whole platform, it's really helpful to focus in on that tracking number and the package, and not the infrastructure underneath.

**Stevenson Jean-Pierre:** I think I like Kelsey's analogy there between the life and the package and the delivery kind of analogy. At some point, there's something waiting on the other end to fulfill that request, or to have that request fulfilled... And monitoring really helps us make sure that at least we're adhering to that SLA that we've established, instead of letting that person have to \[unintelligible 00:11:40.00\] and come back. You wouldn't expect the FedEx customer to come back to the store saying "Hey, my package wasn't delivered now. I demand to know why." You would expect FedEx to already know the status of that package and know whether or not they're meeting their own SLA.

\[11:56\] So monitoring helps us internally know about these things breaking down before it's the person at the other end or the machine at the other end or the machine at the other end having to come to us to let us know that something's gone wrong with the process.

**Johnny Boursiquot:** Right. It's interesting, pulling one aspect of what's important to whom here. Using Kelsey's analogy, as the person who's sent that package to the recipient, I care that it gets there by whatever means that the carrier wants to employ. But internally, the carrier itself - it needs some monitoring, it needs some observability, because it needs to know that truck 007 had a flat tire and it needs to dispatch another truck out there to swap the load and carry on.

So who is responsible? Who should be caring about that layer? Certainly not me as a customer sending the package... But some people in there care about the nitty-gritty. They need observability, too.

**Carlisia Thompson:** Well, before we answer who's responsible, we have to look at the architecture, the structure, the requirements, and how many layers should the system have, or how many layers does the system have. And then you start thinking "Okay, at this level--" Definitely, the customer is not going to be monitoring things at a very low level. We know that. But some answers are obvious and some answers are not.

For example, I'm sure there's going to be a system admin there. Should a developer be part of it? You have to map the right people to the right monitoring level.

**Stevenson Jean-Pierre:** You have to contextualize that thing to that person, right? So the developer might care about a lower level of monitoring to know exactly what's gone wrong, whereas a system admin might care about the aggregate functionality of that system, and understand an aggregate if the thing is performing correctly or not.

So not only are there different members in that chain, but we have to provide the right context in that monitoring to make sure that they can resolve the right level of issue when it does come time to resolve whatever it is that maybe has gone wrong.

**Kelsey Hightower:** I think it also helps to understand the lifecycle of data. When you collect raw bytes, that's data; so the tire pressure, is this package on time or not - that's just raw data, and it's kind of not useful by itself. And then once you start to put some context around it, then you have the chance for that data to become knowledge. Now the data has knowledge. "These things are late. We're gonna have to issue money back."

So once the data becomes knowledge, then the people who operate - so if you're a mechanic, having the data light up a tire sensor or telling you that you have a failing alternator... That knowledge will allow you to repair the car, so that's who needs to know about that, because you're the mechanic.

Now, what you report up to the higher things is that this truck is not going to make it because it's a repair, and we need to send another truck to do something with it. So all of this, like - how can we go from data becoming just a raw collection of bytes, into knowledge.

Sometimes, when you can't figure out what to do automatically, that's when we have to start sending alerts. We're at least going to advise someone, "There's something wrong. I'm gonna try to give you as much context as possible", and then someone who is more knowledgeable can come along and interpret that data. So the analytic parts of this -- because monitoring is not just a real-time thing where you just look at the screen and react in real-time. A lot of people would say "You should also monitor the things that didn't result in any perceived failures."

That airplane with multiple redundant systems - maybe something did go wrong, and it didn't result in a plane crash. But you still should go back and analyze that data, to say "Wow, why does this component always fail, even though it wasn't catastrophic?" So I think monitoring then, at that point, becomes this analytical journey of just having as much data as you can, so people can turn that into some form of knowledge about "Maybe we can predict when we need to repair." So I just think all of those layers -- it's just all about translating data into knowledge as fast as you can.

**Johnny Boursiquot:** \[16:00\] That knowledge is gonna be -- or different knowledge is gonna be useful to different customers. The way I like to think about it is that you have customers all the way down the stack, from the external customer, who's expecting the action they took, the value they're trying to derive from using your service, basically that they're gonna get that... So you owe them something. But you also owe perhaps your developers, who need to understand -- who don't need all the data, they just need the actionable piece of information in order to make a change. Maybe it's a business logic error, or something. Maybe some exception got thrown that they weren't anticipating. Whatever the case may be. They need some sort of a synthesized information as well. So you're gonna have different stakeholders for information to be derived from that data at different levels of the stack.

So if that is indeed -- if we can agree that we have all these stakeholders for any given request, we have all these stakeholders looking for information, what is the approach here? Do we collect all the things, and overtime hopefully we have enough? Maybe throw some machine learning at it, or maybe throw some filters, and then know that "Okay, this particular archetype of a customer - this is what they need"? What do we do? Do we collect wide events for all the things, all the time? We're gonna run out of disk space, right?

**Carlisia Thompson:** I think the answer could be all the above, it just depends for whom. For example, whenever I hear speeds, I think about the trade-off speed/accuracy. So do I need it fast, or do I need it accurate? Am I willing to wait longer and get more accuracy, or do I need it fast and just have "Okay, I know these nodes. I know I'm gonna make some assumptions here because the data is not complete."

So you really have to ask the questions, "Who is this for? What do they need?" Not necessarily what do they want, because sometimes we think we know what we need, but it's just what we want, and what we need might be different... Or what the client needs might be different from what they want... Do you know what I mean? What people need - basically, you have to have the experience of predicting and anticipating, "These are the problems you're going to run into, this is what you're going to need." You've gotta just keep asking questions, I guess, to answer that...

**Kelsey Hightower:** Yeah, I think having people just mine for data and try to figure out what they need is, I think, the kind of things we all fall into the trap of. Like, "Hey, we need monitoring. That's very obvious. So let's install monitoring agent X." And then monitoring agent X gives us 1,000 signals. We're like "Yaay! Let's put them all on dashboards, and go to Best Buy and hang a flatscreen TV upside down and show everyone all of our metrics. It's like "Why are we looking at this?" "I don't know, but the graphs seem to be looking good. Let's set some threshold." That's working backwards.

So I guess -- one of your questions is "What data should we collect?" Well, depending on how much you have, how much money you have, what's your budget, collect it all. Why not. And then at the top of that though is "Why?"

Some of the banking customers I worked with, or when I used to work in finance, you would say "We lose customers' confidence if they can't check their bank balance in less than three seconds", from login, to seeing their current balance and their most recent transactions. If we can't see that in three seconds, the customer starts getting nervous and they start calling us, or they just believe that our infrastructure isn't reliable.

So having that top-line item, now if I'm a developer working on their presentation layer, and I know I've got three seconds, then I wanna know how I'm doing. Someone will say "Well, we're doing bad. We're at ten seconds." And it's like "Well, how much of this is on me? I'm only doing their frontend." And we go and look at the data, and the data says "Well, on your frontend you're at two seconds, and that only leaves a second for everything at the backend... So where is the bottlenecks at?" That will drive some behavior to change things.

So a developer probably wants curated dashboards based on what they care about... And of course, debugging is a whole different thing. When you're debugging, you don't know where their problem could be, so then you wanna have access to as much data as possible to probably give you a hint. But then, once you figure that out, maybe that does become a new metric that you look at wholesale to indicate a problem like that in the future.

**Carlisia Thompson:** \[20:21\] I think maybe you said this, Kelsey, or maybe I'm complementing you on what you said... You have to look at actually doing something with this information. That's one thing that I wanted to say. Because you can say "Oh yeah, sure, I have the money, I have the resources. I can collect all this data." But then, are you looking at it? And are you taking actions? Even if the data is actionable, are you as a culture of your company or of your entity taking action? That's one thing.

Another thing I wanted to bring up is I love dashboards, and I think dashboards have to be throwaways. I want multiple of them, I wanna discard them, create new ones very easily, and I wanna see -- because today I might be interested in some slice of the data, and tomorrow I might be worrying about something else, completely different.

So yeah, it's so much that goes into this... I don't build monitoring systems; people who build that - it's probably a fascinating job.

**Kelsey Hightower:** I wanna push back a little bit on the data collection piece. You might have a business idea ten years from now, that you can't execute on because you don't have the historical data to do anything with.

A lot of people who are doing well with predictive things or ML - they're only doing well because they have data going back so far that they can do things that companies can never do, because they're gonna have to wait 2, 3 or 5 years to even get the data to even attempt to do. So you've just gotta ask yourself... Again, if you have the budget, in some cases, you can collect a lot of data, especially this data, because it may be useful in a way you don't understand. ML wasn't a popular idea for a lot of people five years ago; but if you have five years' worth of data about airline maintenance, now you can apply some of these techniques on that data because you were collecting it all.

So in a lot of those systems, not only are you collecting things about your current system... If you think about -- when you manage large data centers, you're also correlating that data with historical geodata. What was the Earth doing at this time? What was the temperature like at this time? Because all of that data will allow you to ask questions maybe later, to predict new things. So I think - again, it comes back down to costs. So this is why you have a lot of data brokers, and we have companies like Esri that provide geo data; you have things like the Maps API, the location data... Because we rely on all these companies to collect all of this data and put a little context to it, so we can combine it with our data to ask questions...

And I think the last thing about the dashboards - think about your car. The context of a car is kind of static. How fast I am going, because if I go too fast, I get a ticket. And a lot of times we do want that static dashboard when we know it's something that we're gonna have an SLA on. Contextual. If you're a bank and those balances are off, or too many credit card declines if you're in the processing business - that's gonna be this static thing that's front and center. "Hey, declines are going more than 7 milliseconds", and Visa will actually have to answer for you, and that's gonna come with a cost.

So to your point - it was context. If I'm debugging, I wanna be able to have a different dashboard with that context. If I'm looking at the health of the business, I might have a more static dashboard that leads to that particular context.

**Stevenson Jean-Pierre:** I feel like I'm hearing some conflating between two types of topics... When I think about monitoring, I think about real-time(ish) events and things that could potentially be resolved before something worse happens, or things that will help us get a system back in working order, but easier.

\[24:05\] When I think about the type of data collection that you're talking about, it sounds like analytical workloads, to a certain extent. In some regard, of course, you want data for analytical workloads, so you could maybe predict something about a business or predict something about failure rates of certain systems... But when I think about monitoring, I'm thinking about the type of data that'll help me yield real-time results and getting things better.

**Kelsey Hightower:** So think about the blind spot here - there's a lot of companies that have these well-known monitor things based on what they think they need right now. It's like "Hey, these are the monitors we need, and on one of these trips we'll jump in and we'll save the day." But what happens is one of those things trips, but you don't know why. You just keep restarting the server. You're actually chasing the symptom, not the actual root cause. You don't know that it's still single-bit memory errors in the kernel that are the problem; you're not monitoring those. You're just like "Oh yeah, the server crashed, and we're getting too many 500's. We'll restart the server." And for the rest of your life, you will be restarting the server every time without clock work at 3 AM. And that's that blind spot.

**Stevenson Jean-Pierre:** But that's a good point right there. Just like you have your tire pressure sensor - it's there to monitor your tire pressure; it's not there to tell you that you have a nail in there, or that you hit the curb hard enough to depressurize the tire. It alerts you that there's a condition in the tire for you to go and investigate further.

So monitoring is that sentry on the guard wall, letting you know that "Hey, some condition is bad. Now it's time for you to put on the debugging hat, to put on that other hat, to go dig further and figure out what needs to be done." What you do with that after the fact is up to you and your organization and your maturity... Whether you follow through and actually get down to the deep root cause and fix it, or you decide to just keep restarting on a cron job just to patch you there so you can get better - that's up to you. But the monitoring aspect itself is about "Hey, how do I know when something's gone wrong? What's that signal that lets me know that something needs attention?" and I kind of feel like what you do after the fact is up to that respective business, or whatever maturity you have.

**Kelsey Hightower:** So let's dig into that. Can we pull on that thread? I like this one, that's why I'm going deeper. So when you run over a nail, usually the nail is still in the tire. Or you can go and actually touch the tire and physically inspect it. In most of these distributed systems, the data is gone. It's gone. You don't get to rewind the clock. You didn't collect it, it's a mystery. So what do we do? We typically will say "Damn, I have no idea why this happened." And you say "Well, what's our blind spot? Well, I don't know what the kernel is doing", so you say "Well, let's go add that."

We've all seen this - when you're in production and you go at that \[unintelligible 00:26:36.29\] "I have no idea what this variable is right now. Let me go add it and do another redeployment."

So I think what we've learned from the metrics one - I think this is why we get so many metrics out of the box - is everybody hates when you lose that data. Like "Damn it, I have no idea what happened during that timeframe, so I've gotta go back and do it." I think we're probably even talking about the same thing. When you have a blind spot, you don't know what you don't know. And it's only when you get to be able to correlate... You can see people - there's two parallel tracks. One is like "We're gonna go restart the server." And one team is saying "No, no, no! Don't reset the server! We need to go and investigate.

So let's pull the server out of the pool, because we don't have enough monitors in place to figure out what happened, because we wanna do a root cause analysis. And we may just spin up a new machine, send traffic over there, and keep this one so we can poke and prod." And eventually, you say "You know what - this approach ain't gonna work, where we keep pulling things out." What we wanna do is get to a world -- and I always speak from Google's case... We want all the syscalls. We want all the file system stuff. I mean, we've got so much -- you may not keep it forever, but you get so much that you say "Yeah, blow away the machine." Because all the things that you can log on to the machine to get, we have. And that way you can start to do this correlation. So the monitor fires, and then attach the context. So you can go as deep as you want to get to that root cause analysis.

**Stevenson Jean-Pierre:** \[28:00\] So you're trying to reason about a system in whatever state it was in at a particular point in time, and in my mind that is a subcategory of monitoring, which is about observability, right? You wanna be able to reason about, you wanna be able to understand what state the system was in, even if it was in an ephemeral state. I mean, how many times have we had outages and we were like "Well, that was a network blip. We don't even know why it truly failed the way it failed, but we just blamed it on something ephemeral, because we don't have that observability."

So I do agree with you that that is an aspect of monitoring, but the core principle of monitoring in my mind is - sure, data collection, having the right fidelity of data is super-important, but the ability to let you know something's wrong in the first place is that very basic bottom-tier of monitoring that you need to have... Just knowing something is wrong. If you don't have the mechanism for collecting that high-fidelity data to tell you exactly what went wrong, then of course, you build on top of that to try to catch the thing when it's happening... But you build that muscle up over time. It's not something that you expect to particularly have at the onset. You don't establish monitoring and all of a sudden have syscall-level data, because that's expensive to implement, expensive to maintain, and expensive to separate the signal from the noise when it comes down to just looking through rudimentary things.

So I think there are certain levels there, and in my mind, what you're describing is more about reasoning about a system at a particular time, which is more akin to observability and being able to not have to do a console.log statements to get an understanding of what's actually happening.

**Carlisia Thompson:** So here is where I think things get interesting... So we have to ask a bunch of questions to identify what we need, right? Some answers are going to be super-obvious... For example, I'm not surprised at all that Google collects everything. It's a big company. This is the interesting part for me - how do you decide to go from rebooting the server to trying to find out and fix the problem? Because you reboot the server, it works. Okay, it was a pain, but it works. Maybe you lost a little bit of data, maybe there is a cost that comes with it... But shifting from that to a culture implementing or buying a system that allows you to collect and investigate and fix - there is a cost, too. So how do you make that decision? How, when, what's the risk to take? I think it's a rhetorical question; I don't think there is an answer...

**Kelsey Hightower:** No, there's an answer.

**Carlisia Thompson:** I don't know. There is? Okay...

**Kelsey Hightower:** Yeah, it's around maturity. Our industry is very immature. Going on a box and restarting it and not knowing why it happened - that's immature. That is just not mature. Because I don't wanna have my airplane be like "Yeah, we've gotta reboot the plane."

**Johnny Boursiquot:** \[laughs\]

**Kelsey Hightower:** "Whoa, whoa, whoa... WHY are we rebooting the plane?"

**Carlisia Thompson:** But that's what I'm saying, Kelsey... The answer to that is going to be obvious in some cases. Yes, the plane is an obvious answer. Yes, you don't wanna be rebooting it.

**Kelsey Hightower:** But think about any system...

**Carlisia Thompson:** But what about the grey areas, the companies that are not too small, not too big. I mean, if they're too small - yeah, they're just gonna keep rebooting. They don't even know if they're gonna be around a year from now, so yeah.

**Kelsey Hightower:** I think the goal of people who build programming languages and runtimes and platforms like Kubernetes and Prometheus and Sysdig... What we're trying to do is make it easy to do the right thing. If cost is a problem, maybe what we can do is say "Well, how about this? We'll keep five minutes of back-data, and whenever your monitor goes off, we'll go and snapshot the five minutes previous of the entire world - the network, the kernel...", and maybe you have five minutes back to at least give yourself a fighting chance.

So what we're trying to do is say "You don't have to make that trade-off." I think -- hey, I don't wanna pick on Boeing here, but remember... I think they made one of the safety options an optional feature. It was optional. You had to buy it. Like "Ah, I don't know what quite is, but I'm great." But then a pilot needs it to make sure the plane actually takes off.

So what we're trying to do is say "Look, let's not make this thing a small or big organization decision." What we wanna do is have the platform be at the ready. So maybe we start with five minutes of resolution, and it's there by default. But yeah, if I've gotta write a root cause analysis... Like, if you're a bank - maybe you're a small bank - your customers might wanna know why their balance is off. I need to know exactly why the balance is off.

\[32:10\] Regulating industries tend to have to be able to give concrete answers to things... And if you're in that situation -- and I think you've made a good point, Stevenson, about monitoring... Maybe monitoring is where we go from having observable systems, and then picking and choosing what slice of that observability we wanna take action on, so then that becomes the monitor on top of that observability, or narrowing the scope.

But my goal - I think what we should be is like "How do we make everything we produce observable, and then make it easy for customers to create a monitor on that thing that is now observable?" I think that's where we are. Ooh, I would be nervous in some industries if they did that.

**Stevenson Jean-Pierre:** This is where we as systems people run up against some frustrating brick walls whenever we're in organizations... Because Kelsey is saying it's about maturity, and it's about "These are the things that ideally we should have in place and that we should do", but when it comes down to the business perspective, if it's quicker to reboot that system and get customers back in and doing what they need to do - we're not talking about data corruption, we're talking about just a purely access type of outage; if you reboot that thing and you know you could do a 2-second reboot and you get the customers back in, the business will be more likely to be like "Hey - yeah, just reboot it." If this thing happens once a week, for whatever the business cares, they'll probably be like "Okay, this happens once a week. Let's go ahead and reboot once a week, and just take care of the customers."

As systems people, we care about making sure that we're solving this more holistically, so it doesn't happen once a week. Because if it happens once a week, at some point it's gonna happen once a day, and then once an hour, and then once a minute if we don't catch it.

So having that business context and understanding that return on investment that we get for some particular fixes I think is important to answer your question around when that trade-off needs to be made and what influences those decisions.

We've all seen the type of bugs where we're like "Well, we now have a cron job that restarts Tomcat, because we know we're gonna eat memory..." And of course, the devs need to work on getting better garbage collection or better resource allocation when they are newing up resources... But as a stop-gap, you might have to do that restart, and as you build that maturity and understanding the problem with your platform, and as you give the devs time enough to figure out what that thing is, sometimes you do take that cluegy solution, but it is in an effort to save the business or in an effort to keep the business afloat while they're doing what they need to do to make things better... And you build up that maturity over time. It doesn't come from day one.

**Kelsey Hightower:** Remember, I'm not advocating the trade-off. And plus, we've been doing this for 20 years, so it doesn't have to always be day one for every organization. Read, talk to people, watch some videos... You don't have to start from scratch.

I'm not advocating the trade-off here; I'm saying, if this were to happen and we think that the best solution is to restart the server - great. Go ahead and put the monitors in there. This is something the business may not be aware of that's even possible or will aid you. That's where I was saying maturity knows. They're not gonna ask us to go and put the extra monitors in place. They're not gonna ask us to start tracking this stuff maybe because they don't know that's our job.

So I'm gonna go put those monitors in place -- you know what, if rebooting the server is the fastest option, hell, I'll use the metrics to reboot the server. "Ah, we're seeing that thing again. Let's snapshot everything real quick, and maybe less than two seconds now. We'll go down to one second, because we'll have the script fire off and reboot the server and bring it back."

It's just one of those things that even if they don't ask, "We could do it. We can go and make it there. They may not ask us to do it, but we can do it if we know that we could leverage it if we did."

**Stevenson Jean-Pierre:** Yeah, we just know that these things aren't free, right? There's a certain amount of investment that needs to go on to even get that automated firing off of that script, and that's part of the calculus that goes into making some of those decisions sometimes...

Unfortunately, not every team is well-funded or well-staffed, so they have to make some trade-offs sometimes... But getting that right level of monitoring at least is a helpful direction.

**Kelsey Hightower:** That's why I work in cloud! One thing I'm not gonna add here, but... Most of these cloud platforms - what makes them unique is that we're trying to make people not have to do that trade-off. The reason why you don't build your own car - because you will never have enough resources and commitment to build a car that meets all the safety standards.

\[36:05\] A lot of the systems we're talking about these days - like VMware, for example; I'll pick on VMware - they do a good job of saying "If you're gonna get hypervisor, it needs to have all this stuff out of the box." You go to Visa.. Hey, we've got all this stuff out of the box; we're not gonna rely on your organization to try to figure it out." So I think if you're a platform person building platforms out there, how do you make it easy to have this stuff out of the box, without someone thinking about the cost it takes to put it in there? Do we want cars with optional seatbelts? Do we want airbags to be optional? Or do we try to figure out a way to get that cost of the car to incorporate those things and still be affordable?

**Carlisia Thompson:** I think the answer to those questions is Kubernetes. \[laughter\]

**Kelsey Hightower:** No, probably not. Everything. All systems.

**Carlisia Thompson:** I wanted to say something... What I was gonna say before is that this conversation is reminding me that we have a timer that turns our router off and on at 6:30 in the morning, every day, because if we don't do that, we know that the internet is gonna crap out at some point during the day. So it's the year of 2020, my friends... \[laughs\] And that's where we are.

**Stevenson Jean-Pierre:** That's a very good point. Sometimes you don't control the systems...

**Carlisia Thompson:** Sometimes you don't control the system, right?

**Stevenson Jean-Pierre:** Yeah, all you can do is mitigate the issue that you're having with it until some better patch version or something comes with it... That's a fact of life sometimes, and you have to be pragmatic about some of these things.

**Break:** \[37:37\]

**Johnny Boursiquot:** So I think it was Jaana Dogan on Twitter... I was online, and probably digging into all kinds of things monitoring over there... And she mentioned something interesting on Twitter the other day, that pretty much hits on a lot of the things we're talking about now, which is basically the responsibility to surface some of this kind of information... That low-level stuff that would cost me as a customer or Amazon too much to acquire and analyze and surface some insight out of there. She's basically saying that "Well, it's the job of the providers to surface that information."

I'm curious, again -- looking at the who's responsible for what here. We know that if you operate in the cloud, there's a shared responsibility model at play. Who's responsibility is it to go dig for that data? Are you putting your own engines on instances, to try and get that, or should your account provider be providing these things, surfacing them to you at some point?

**Kelsey Hightower:** \[40:09\] Yeah, just like the car - I think it's illegal not to have a speedometer. You've gotta have one. The car manufacturers or the appropriate organization that's responsible for adhering to the standards. So in the cloud business, we don't give customers access to our hypervisors. We don't give them access to the lowest levels of the infrastructure, the networking gear. And if we're going to do that, then we have no choice but to provide some visibility into those systems, so they can actually make decisions.

Cloud providers try to make their platform observable. You can observe it, you can go and look. Now, if you care about it, you may choose to store that data, and if there's something in that data that makes you wanna wake up in the morning, you may choose to send an alert. But I think for us as a cloud provider it's not negotiable, because I think most customers these days - if a cloud provider is like "Hey, there's no way to look into what's happening in the VPC latency around networking..." I mean, we go real granular, even to the point where you might even know someone logged in to some underlying infrastructure you care about.

So I think most customers these days want cloud providers to have a stream of data, and they decide if they wanna do anything with it. But one thing I haven't ever heard a customer say is "I don't even want you to provide that data. It's more about "Well, what do these signals mean?" and I may aggregate them to ultimately tell me about something I do care about.

You know, most things I buy these days if they don't have a diagnostic port, I typically shy away. I'd love to buy things -- like, my home router, right? There is a diagnostic port; it has an audit log in it. It tells me when things were updated, when the software was updated. I'm pretty sure not everyone's checking for that, but I think we've put a lot of pressure. Transparency - what is this thing actually doing? On our laptops, when that camera comes on, you wanna see the green light... Because I don't know if it's on with some underlying program turning it on and I can't tell...

There's little things like that where we would say the person producing the thing has to make it trustworthy. I think a lot of trust we get from systems is when we can see what it's doing.

**Stevenson Jean-Pierre:** I think one place where the car analogy breaks down a little bit is the fact that we don't take cars and then build robotic platforms on top of them, and then expect the car manufacturer to have given us everything that we needed to kind of monitor and observe that type of system... Whereas most software that we end up deploying --

**Kelsey Hightower:** Have you never seen Nopey? The people who go to AutoZone and buy 20,000 \[unintelligible 00:42:38.20\] and wanna keep it street-legal? You have that in some cases, right? Monster Truck rallies...

**Stevenson Jean-Pierre:** Yeah... I was gonna mention though - because we're building a lot of bespoke solutions on top of these platforms, we keep having to also make sure that we incorporate those monitoring and alerting or whatever we need to into those things that we do, because you can't get the cloud provider to help you troubleshoot your app itself unless it's something that's failed with the cloud side of the contract.

A lot of the bespoke stuff we write, the custom stuff, we have to make sure that we're also incorporating that monitoring and whatever observability is necessary to troubleshoot those things ourselves also.

**Johnny Boursiquot:** I'm interested in understanding how we surface the right cut of information to the right people. We've been talking about -- if we're able to solve the first problem, which is collect all the things, and allow the customer to come get what they need, when they need it... If we use that as the baseline; if we now turn inward and say "Well, I have some internal customers. I'm an operator of some container orchestration tooling", whether it's hosted by a cloud provider, or whether you wanna roll on your own data center, whatever you wanna do.

Now, you know you're collecting a lot of information, and you make it available in some sort of a data lake, or pool of data, whatever it is; come get it, for internal folks. Is it incumbent upon you or your team or your department to then teach people how to mine insight out of this pool of data? Is it the job of the people collecting it to tell you how to do that, or do you hand it over and say "You do what you will?"

**Kelsey Hightower:** \[44:14\] Let's talk about the platform side. I advise a company called Pixie Labs, and they've been taking advantage of eBPF too so the kernel now keeps a ring buffer of a lot of this data in a more structured way than just text files spread across the file system. So if we start from the kernel - so the kernel says "Look, my responsibility is to report to you that the things that are generated in the kernel nodes - I'm gonna keep a little ring buffer. So that means I'm not gonna be able to keep it forever, so you're gonna have to come along and scrape what you want (process table, memory usage etc.), but I'm gonna give you a well-defined API to get the data from the kernel, and you can do whatever you want with it."

And then if you install Kubernetes on that system, then Kubernetes will say "Hey, I have some data too about things that I'm running." So you know the hostname - that might be the key that we correlate this data on, but my job as Kubernetes is to say "I know the same node ID that you know about; maybe we correlate on the IP address and I'm gonna give you everything that I think I know" and that evolves over time.

I remember when Kubernetes first started we didn't have as many things as we do today, but we're going to surface that data. Now, how do we present it? Well, in the Kubernetes world we like Prometheus, right? So we have slashed metrics, and Prometheus can come along and scrape a lot of that data in a Prometheus format. Or, for people that just wanna do their own custom integration, you can hit a metrics endpoint and get data in some JSON structure that's well documented.

And then as we go higher up at the application level, you may say "Hey, the app may decide it likes Prometheus, too" and it imports a Prometheus library and it formats its metrics and insights into the same format. So at this point we have from the kernel, and we also have data at the hardware level, but if you go all the way up, there's this contract of "Here's the data that we know about and we collect, here's how you get the data", and from there, you can have these collected.

I'll speak about Google Cloud, because that's where I work - we take a lot of this data and we store it in BigQuery, so you can turn it on; "Hey, I would like you to take a lot of that data, push into BigQuery..." If we're talking about Pixie and Pixie Labs and their product, they take all this data and inside of the cluster they keep it all and they try to do something super-intelligent where the most recent data - they keep a lot of it, and then things over time, they summarize it.

All in all, they wanna aggregate the data and put it behind some query interface. Some people will use something like Grafana and take well-known queries and make dashboards or whatever they want out of it, and some people will just go to BigQuery and just run a set of queries, and if they find some that work for them, they might save those queries for other people to run. And then of course, some of these queries feed into other monitoring systems that say "Oh, there's a threshold that has been violated."

So I don't know if it's a responsibility, but I know that if you have this data behind a queriable interface, then the people who need to do their jobs can leverage their particular contractor interface to do what they need to do.

**Carlisia Thompson:** Again, for me it's very important to think that when you're looking at this information, this infrastructure data, monitoring data, it's very important to have in mind that you can just delete everything that's not being useful. Delete the dashboard... These things have to be very fluid, very easy to put together... Yeah, the data is there, but how do you slice it, and combine it, and look at it? Just like code - once we put codings in a project, it's so hard to remove it.

I think once you start gathering data, and gathering dashboards... It's like, you put a little bit of effort to think through it, and then you don't wanna get rid of it.

\[47:55\] And then all of a sudden you have so many places to look at, and so much noise going on, and it becomes overwhelming, and then you have to put more people on that role. If you just think like "If we're not using this, let's discard it. Let's keep three dashboards at all times, and to put a new one in, you have to delete one. Something like that. I'm not talking precision here, just giving an idea... The idea being "Get rid of things that are not serving you."

**Stevenson Jean-Pierre:** I think I like what you're describing, but I think in my experience, what I end up with is a top-level dashboard that gives me top-level KPIs that I care about, but each one links me to the sub-dashboards that provide that low-level detail that may be necessary to figure things out.

So I may see on my database "Hey, these queries slowed down", but when I dig in, "Wow, look at that spike in IO stats that happened right there, and look at the disk queue depth." And then that tells me that we have a disk issue that caused the query thing, but at the top level all I cared about was my SLA around query performance. Once I have that nice signal that told me there was a problem there, I was able to drill down in the dashboards and get that further information.

So while it's good to have those top-level dashboards maybe be limited, you still would probably want that next level of detail and even further in order to truly get to a cause.

**Carlisia Thompson:** Yeah. And that's why I love everything to be color-coordinated. For example, if I'm looking at a dashboard and everything is green, that's it. See you tomorrow! \[laughs\] I don't need to drill down into anything.

**Kelsey Hightower:** Yeah. We're just moving into where the more data that we can curate and turn to knowledge, the more power it gives people. How you leverage that power is up to you. If you think about the stock market, some people only care about the thing that comes on Yahoo! Finance. "Oh, the stock went up. The stock went down." If that's all the data you have and you wanted a simple dashboard, good luck. Hopefully you're not the last one holding that particular stock when the thing has that 20-minute delay and tells you what the new stock price is.

And if you're someone who has to manage other people's portfolios - you're a company that people trust you to make good decisions with their money, you want all the data you can get, because you turn that into knowledge, and knowledge is power in that world. So for a lot of people it just depends on how much power do you need, how much knowledge do you need to make what kind of decision? If you're making a binary decision, then maybe you need a little bit of data. But if you're trying to make a decision that other people can't make, you're trying to make an informed decision but you need more information to do that better than someone else, that's where we kind of get into this grey area.

This power doesn't have to be used; you can have all this data and you can ignore it. You can do whatever you want with it. It's the fact that most people don't know what's possible yet; we're not that mature where we know what to ignore and what to collect. It's just that there's some people that come along and analyze things, it's like "Wow... If I put these two things together, I've gotten it." That's that possibly you wanna keep the door open for. It doesn't mean you've gotta go do that everywhere. I'm just saying, that's kind of the grey area in this conversation.

**Carlisia Thompson:** I don't think we're contradicting each other here. I think it's very easy though for you to keep that door open too much. Definitely you wanna have the capability to drill down, and look at one thing at a time, but it's very easy, because there are possibilities, to end up looking at ten different graphs of the same thing. And only one of them is really giving you actionable data, something that really makes sense to you. Feel free to get rid of the other ones. Trial and error... Definitely experiment, but don't keep things around that you're not using is mainly what I'm trying to say.

**Kelsey Hightower:** When you say "get rid of" do you mean hide? Because if you don't collect the data, then it's a blind spot.

**Carlisia Thompson:** Okay, I think you're misunderstanding me, Kelsey. I was suspecting, and now I'm certain. I'm not saying "Get rid of the data", I'm saying get rid of the dashboard, or whatever mechanism you're using to slice that data and look at it and make decisions.

**Kelsey Hightower:** Got it.

**Stevenson Jean-Pierre:** \[52:10\] I was just gonna make that same point, and I think a good clarification here is that the data -- let's call it metrics. We have metrics. But forming those metrics into knowledge is what the dashboards are for. Like "Hey, we have these metrics, but these metrics on their own don't technically mean much." But when we add them to a dashboard and we start putting upper limits, lower limits, and we start making decisions based on that, that's us turning that into that knowledge that we can make actionable decisions on.

I think what Carlisia is saying is that we should be able to throw those dashboards away, redefine them, do whatever we need to do; they're ephemeral, because they're just a snapshot of that data that we've decided to make certain decision points on and knowledge points about... But that metric should always be collected, we should continue to do that, and those dashboards can be reformed as the business evolves, as things start to change meaning... Like, being at 50% CPU might have been scary when you're tiny, but as you get more efficient, you're like "Look, I wanna be at 90% CPU, and that's where I wanna stay at", so you adjust your dashboards accordingly to make sure that you're in that right place... So I do agree with that point.

**Carlisia Thompson:** Yeah, I totally agree with you. We don't know -- there's so much data, and we come into it, and we don't know. But I also don't think that just because it's there, it's official and you can get rid of it. Just get rid of things, create something new, experiment. But definitely, you don't wanna be looking at 50 different things that are not even giving you actionable information.

**Kelsey Hightower:** Right. The reason why I asked the clarifying question there is some people don't know that these are separate. Some people believe that Grafana is the collector, and if you delete the dashboard widget, you also delete the data.

**Carlisia Thompson:** That is such a good point.

**Kelsey Hightower:** There are some people who don't know the difference between collection and analyzing. So some things it's like "Hey, maybe you turn off the analyzer." Maybe you don't even run those queries to save resources, but you've got the data, you compress it, you archive it, and then you bring it back out to analyze it later. We used to do this with Apache logs back in the day. You collect all the things, but then every once in a while, because they're so expensive to render that pretty map that Apache had, you only did it every once in a while and you cached it. I just think we've gotta make sure people understand that there's a separation of those.

**Break:** \[54:20\]

**Stevenson Jean-Pierre:** Another point that must be made is that the knowledge we can get from the data isn't always preemptive. You don't always see it beforehand. It may be after an incident, when you're doing your investigation you realize that "Hey, this metric here was clearly something that would have helped us identify this sooner." That's when you turn that metric into knowledge. You didn't know that this thing had this impact beforehand, but you did collect it, which is good, so you're able to deduce what caused it in hindsight. But if you wanna preemptively take advantage of that knowledge, then you turn that into a dashboard, you turn that into something that's actionable beforehand.

**Johnny Boursiquot:** Super.

**Kelsey Hightower:** \[55:58\] When I was a CoreOS, when I started to learn about the Raft protocol, Etcd, the implementation of using that to do a key-value store, the biggest thing that I've seen was people not really understanding the system. Most people were trying to add more nodes for performance, even though Etcd is the single writer, single leader system... And then people didn't understand that the mechanism it chose for consistency could also get in the way of availability. We'd make that trade-off of saying "In order to keep the data store consistent, I will take an outage to figure out the consistency", have a leader election of which one should be the follower based on the data that we have committed in our logs.

People not understanding how that system makes the trade-offs - you tend to get into these issues where, for example, I had people put Etcd in an autoscaling group. So the way that works is three nodes, you have a quorum, everything is healthy; one node crashes, another node comes up. And it looks like three nodes still, based on all the things you can see and observe, but inside of the actual cluster membership API you would see four nodes. And what customers would do is they would be getting lucky for about a year. They would have a machine crash, and six months later now you have five nodes inside of the cluster API, but you actually only have three nodes running. Luckily for you, that's enough for a quorum.

It's when you get to that sixth node of this kind of crash/automatic repair that you now have six nodes in the API, and you can no longer reach quorum, because the three other nodes can no longer vote, and now you're hard down, and the system is down forever, and there's nothing you can do to recover until you understand that you've gotta go remove those three members. But guess what - you can no longer do it online, because it requires a quorum in some systems to actually remove the three dead members from all the other three.

So those are kind of things where things go wrong - people may not understand the trade-offs of the things they're doing at the consistency layer or the availability layer, and they find themselves in a situation where they can't troubleshoot... So guess what people are doing? They're blowing away their entire Etcd setups and starting from scratch because that seemed to fix the problem.

**Carlisia Thompson:** That always fixes the problem.

**Johnny Boursiquot:** \[laughs\] Shut it down, turn it back on.

**Stevenson Jean-Pierre:** I think this is why we embrace chaos engineering and we embrace failure. We call them Failure Fridays at PagerDuty, and we also have Failure Anydays, but intentionally trying to break your system and setting hypotheses and seeing how your monitors and logs and things like that look in the face of those types of failures helps you understand that "Hey, we're in this situation in the real world." You don't wanna find out about this sixth node failure in the middle of Christmas night, or something like that. You wanna understand the way your system behaves, you wanna be able to interrogate the system beforehand and build some understanding and knowledge around the failure modes before it hits you in the real world.

So it's important not only to have monitoring and alerting, but to also test your theories and test what these monitors and alerts actually mean, and how these things fail, to understand if you have gaps before you're hit by it in the real world... Because sure, you'll learn, but it'll be after a hard outage and a hard down situation.

**Johnny Boursiquot:** Indeed, and I think this is a good transition point to talk about some unpopular opinions. I hope you all have brought some. Man, I didn't know there was so much to unpack with this stuff... And Carlisia, these are all good ideas you had towards the end there, with regards to the culture and all these things that play a role into building these systems to be more reliable... I think that's definitely worth putting another show in the books to talk about these things, because they definitely do have an impact on overall system stability.

But yeah, I do wanna transition to Unpopular Opinions...

**Jingle:** \[59:32\] to \[59:52\]

**Johnny Boursiquot:** Who's got one for me? I've got one in the backpocket, but I'll let you go -- Kelsey, you can go ahead.

**Kelsey Hightower:** You can avoid lock-in by using open source. And this is a very unpopular opinion in general, because some people say the reason why I'm choosing open source projects is because I wanna avoid lock-in. And this is no knock to any of these projects, but recently the Mesosphere team renamed themselves to D2iQ, and they were really great stewards around Mesosphere. And they announced that they're going to deprecate it within a year, or DC/OS is going to be deprecated within a year.

So a lot of people in that community are like "Oh my God, I went all-in on this thing.' And there's a thousand other projects, so I don't wanna be picking on them specifically... But a lot of times the thing you're using - you're almost locked into that ecosystem, that level of innovation. So if the contributors go down or go away, it's not that you can't change the software, so you're not locked in from that regard, but you may even be locked into the way you think about the problem, the way you can even solve the problem, because you get pushed down this particular lane.

So I think a lot of times people tend to associate lock-in with just proprietary things, when I think the opinion for me is that even open source can actually put you in a situation where you get locked out of moving forward, because you've decided to go too far deep into the thing you have, even if it is free and open source.

**Carlisia Thompson:** That's a very good point.

**Stevenson Jean-Pierre:** So unpopular opinion for me is I can reason about my system based on logs, or logging alone can help me out of the crunch whenever I'm having issues. When you start thinking about a distributed system, you start running tens or hundreds of microservices all in coordination, doing stuff... In my personal opinion, I've found that logs get in my way a lot of the time, and logs are like that final level that I might wanna get to if I've already identified or isolated a particular system, and I'm just trying to reason about what specifically that thing was doing... And even then -- Kelsey mentioned earlier, understanding what the variable is set to at that particular time is something that you're probably not gonna wanna log... So the logs - I've found diminishing returns on them after a while.

So getting a high-level set of metrics and understanding the amount of error codes and things like that they're returning, rather than the individual log statements telling you that the return error codes is more important to me at this point, I've actively avoided logs. Not that I don't put logging in my applications, but as a troubleshooting mechanism, as a debugging mechanism, I tend to stay away from logs, and I hope for just better metrics and more signal around what's going on.

**Carlisia Thompson:** Wow.

**Johnny Boursiquot:** Yeah, logs are for troubleshooting and debugging, not for observability.

**Stevenson Jean-Pierre:** Yeah, for me they're about local development. I use my logs a lot when I'm in local dev, but if I'm looking at a production system, I try to avoid logging. It feels like a smell to me that I have to go down to the log level to understand what's gone wrong.

**Kelsey Hightower:** And would you make a distinction where some people treat logs like a more consistent API. For example Prometheus today scrapes an HTTP endpoint, right? Some people could say "Well, what if it was scraping STDOUT and my logs were formatted in a structured way?" And I think there are some people who are combining log as more of a sync or a destination to push similar information, maybe that you would give to Prometheus over HTTP. Have you seen that? Does that change that narrative a little bit? Because when I heard you speaking, I was thinking more like Log4j; you know, the typical logs that I spit out, versus those logs.

**Stevenson Jean-Pierre:** Yeah, I was talking about typical logs. But in my mind, when you start doing structured logging and you have a consistent interface for doing those, those turn into metrics for me. Those are parsable and sliceable in so many different ways that you could start understanding things about them without having a human go down each line and figure out what's actually happening. So when I think about Prometheus and grabbing something that's properly structured, I could produce metrics from that and get a higher-level understanding of what's going on, rather than me depending on the developer writing a certain log line, and hopefully that they wrote this thing in a way that I expected them to, and stuff like that... But I think structured logging has definitely helped in my perception of what's right and what's wrong around your logging.

**Carlisia Thompson:** My turn?

**Johnny Boursiquot:** Carlisia, what have you got?

**Carlisia Thompson:** \[laughs\] I don't have a super-smart/savvy unpopular opinion... I'm going to go with "If you're consuming a system, read the error messages." That's it.

**Kelsey Hightower:** \[01:04:07.28\] Is that unpopular? Is there people that say "I shouldn't ever look at these?" \[laughter\]

**Carlisia Thompson:** Man, you would be surprised... I do that a lot, too. It's surprising how we just don't read the error messages.

**Johnny Boursiquot:** That's true...

**Carlisia Thompson:** But it's like, the answer is right there. \[laughs\] As developers, as users, read the error message.

**Kelsey Hightower:** Carlisia, that one sounds personal. You're talking to someone through your camera when you say that. \[laughter\]

**Carlisia Thompson:** I do it, too.

**Stevenson Jean-Pierre:** I agree, I do it, too. Reading the error messages is like my third attempt. After I retried it already a few times and it's still broken, then I'm like "Okay, I get it. I'll go read the error message if you insist." \[laughter\]

**Carlisia Thompson:** Exactly. So we resist because it's sort of like reading the manual, but after the fact.

**Kelsey Hightower:** It's like solving a crossword puzzle; you don't wanna cheat and look at the key. It's like, I know the answer is over there; I'm trying to solve this on my own.

**Stevenson Jean-Pierre:** But that speaks to a system being intuitive though. You want it to be intuitive, to the point where you don't feel like you have to go into the manual, or into the error message to figure out what's gone wrong.

**Carlisia Thompson:** No. It should just work. Of course.

**Stevenson Jean-Pierre:** Yeah.

**Carlisia Thompson:** My code should always just work.

**Johnny Boursiquot:** Alright, so here's my unpopular opinion -- well, I don't know if it's unpopular or not, but... My impression after having been on a number of different teams is that developers don't actually spend time reading SLAs, if they do at all. You might have SLOs, and you might be part of a team that has come up with the SLAs that feed into those things, but developers don't spend time -- they don't go to the website, to actually say "Okay, what is the SLA that we're communicating to customers?" It's almost like it's at a level where it escapes their attention or their level of things that they need to worry about right now, kind of thing. They don't actually say "Okay, what are we guaranteeing to our customers?" I think that's something that should change.

**Stevenson Jean-Pierre:** I think there's a good point to be made around there. SLAs are all fine and dandy, but that real human on the other end of that SLA when the system is down, even if you're with that SLA, they're trying to buy a car and they need to check their balance, and all of a sudden your bank is down... Where within SLA -- it doesn't matter if you're within SLA; it just matters that they couldn't do what they needed to do at that time.

I think developers kind of go through that, too. They need a system to work when they needed it, and it doesn't matter if you're within your SLA or not, they have to suffer that pain during that outage, or what have you.

**Johnny Boursiquot:** Good stuff. All good points. Well, it is that time, and - man, we've had so many good topics for discussion during this whole episode... For you, the audience, I hope you have enjoyed this time. For my panelists - Carlisia, welcome back to the show...

**Carlisia Thompson:** Thank you...

**Johnny Boursiquot:** Hopefully, we'll see you again, and not wait for another months or a year or so to have you back on the show. Stevenson, thank you so much for the last-minute add there we've come through... And Kelsey, again - always a pleasure to have you on the show. We'll catch you on the next Go Time.

**Kelsey Hightower:** Awesome.

**Stevenson Jean-Pierre:** Thanks for having me.

**Kelsey Hightower:** Later.

**Outro:** \[01:07:01.02\]

**Kelsey Hightower:** I like this one. It got a little spicy, a little dicey...

**Johnny Boursiquot:** I know, right...?!

**Stevenson Jean-Pierre:** It's a good conversation. I have a lot more to say about monitoring, and alerting, and stuff like that... Especially working at PagerDuty right now, seeing the level of stuff that people send in, with the lack of context, and the still chasing their tails that they do when there's an incident... I have a lot more to say about this kind of topic.

**Carlisia Thompson:** Oh, we didn't even scratch the surface...
