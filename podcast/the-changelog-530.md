**Adam Stacoviak:** So I'm watching -- you're the head of a very cool acronym, that is becoming more and more hot. I think SLOs are important, but I'm not really sure everybody understands what an SLO is. How often do you find yourself just simply starting a conversation describing that acronym, and how that pertains to Nobl9?

**Marcin Kurc:** Yeah, that's a really good question. I would say, when we started this company in 2019, there were very few people understanding that acronym. And those were usually the SREs coming out of Google, Facebook, a few other companies, right? I would say probably within the past year and a half or so it feels like it's becoming more of a mainstream... So I would say 50% of the time, maybe more, people do understand what SLOs are. And surprisingly, a lot of those people also understand application benefits, and all the good things coming out of SLOs. So the market is definitely maturing, expanding, and the conversations we're having are definitely on the level that we can have a conversation. We come in without educating people and trying to push something on them, basically.

**Adam Stacoviak:** Mm-hm. So what is an SLO? How would you describe it?

**Marcin Kurc:** What is an SLO? An SLO is a service-level objective. So for us, and for most of our customers and prospects, this is a concept that helps them understand and build infrastructure of applications to the level that allows them to operate in a way that customers are happy. So you've got two different extremes. You've got the extreme of building an application or infrastructure that's 100% available. And I don't want to say it's impossible; I'm sure some people will come out and say, "Of course we do that." I don't think I want to go in that direction. And then you have the other extreme, which is things are constantly breaking, and customers are not happy, and leaving your application or your company, and looking for other alternatives.

So SLO is really about finding this sweet spot between those two extremes, where customers are not impacted, they're happy, they're not looking for different options, and you're not spending tons of money on trying to achieve 100% availability.

**Adam Stacoviak:** Yeah, I think chasing the nines is what we call it around here. Chasing the nines, right? I mean, we all want as many nines as possible, but I think they get infinitely more expensive, and also potentially impossible to some degree to chase like the six or the seven nines. It's just really -- you know, five nines tend to be what most can adequately achieve. Would you say -- what nine do you chase?

**Marcin Kurc:** Yeah, that is pretty expensive at that point, right?

**Adam Stacoviak:** Five nines is expensive, too? Okay...

**Marcin Kurc:** Oh yeah, it's expensive. I think three and a half or four nines...

**Adam Stacoviak:** 3.999... \[laughter\]

**Marcin Kurc:** It's getting to that point where it's really, really hard, right? When you start calculating how many minutes you can be down per year, then you finally realize "Oh, yeah, there's no way. There's no way." However, right now, most people are thinking about the nines in terms of SLAs. And SLAs are legal construct.

**Adam Stacoviak:** Right. Agreement is in the word, right? Or in the acronym; it's the last letter of the acronym at least.

**Marcin Kurc:** \[00:05:57.14\] And there's five pages of what we are excluding from calculation of the nines, and so forth. SLOs, on the other hand, are not that. It's true, real time, very visible and transparent information to both you, internal customers, or external customers. So it's definitely a different concept, and achieving those without any exclusions, or definitions around the legal calculation is definitely a much different concept. You can translate the SLOs into SLAs, you can make your SLOs SLAs, but I would question how many people out there already ready for that type of approach.

**Adam Stacoviak:** So measuring performance of a service, of an entire stack, whatever it might be, becomes infinitely more important as you begin to make the agreement rigid through an SLA... But SLOs allow teams to have that flexibility. I kind of think of it like an analogy of like maybe a stick of bubblegum before you chew it is kind of the SLA, where it's sort of rigid, right? It will eventually become sort of mungeable, so to speak, or flexible. And maybe the SLOs are the chewed up bubblegum; it's kind of like mushy, you can kind of move it around, and it allows for imperfections; it's not that original thing, right? It gives you a chance to sort of have bugs, because it's gonna happen, or have downtime, or times in the day even when you've got more traffic, and maybe those SLOs, or maybe -- I don't know. You need to measure things, essentially, and give that flexibility to a system, especially to the level that software has become more and more complex. Very large systems, large monoliths, whatever you might have, entire services, microservices, APIs - all these things are moving parts... Latency alone, and the often offender, DNS, right? I mean, things just happen in systems that are complex. There you go.

**Marcin Kurc:** Yeah, this is a very important point, right? It's not necessarily about something going down. In many cases, things are not going down, right? You've got this slowdown in the delivery of services; something else might happen. Latency is a fairly simple concept, but understanding how that latency is managing your customers through your application, it's becoming complex, right?

For example, another part of an SLO is the error budget, right? You have this difference of how much of the error budget you can burn before it becomes an issue and you're violating the SLO. The question is how fast are you burning that budget? If it's burning slowly, the impact on the customer is probably not very big, right? But when you start seeing things going down quite quickly, then you have a problem. That's when you start thinking about "Are you waking people up in the middle of the night? Are you failing over from region to region, or infrastructure to infrastructure?" Every single one of those operations is very, very costly. So it really helps you also understand how you should be acting, and it helps you really make those decisions in real time.

**Adam Stacoviak:** So with all the observability that has been around in the last five years, I want to say, I've gotta imagine that it's kind of easy, or it should be easy to measure these things... But it's not. So at Nobl9, this is kind of what you do. Right? That's your mission, is to make measuring these things easier. How did you find this gap in the marketplace, so to speak, to form Nobl9, and what hole did you fill?

**Marcin Kurc:** Yeah, so my co-founder and I, we started the company before it was -- it was around marketplaces and billing, from old days, when AWS showed up, disrupted software vendors with this crazy consumption billing and things like that, and I've been struggling, "How do I address that need for my customer? And how do I align with AWS and other cloud providers, for that matter?" Enough to exit to Google, and find ourselves on Google, and day one we started rewriting this application to handle Google levels of traffic and consumption.

\[00:10:06.22\] And that's how we really learned how Google operates, how Google sets goals, how Google operate on a daily basis, how they release software. And of course, all the concepts around SRE were very, very interesting to us... But the SLOs, in particular, we came to this conclusion that it's really, really hard to go into microservices, Kubernetes and the interconnected systems not having SLOs to understand all the dependencies and impact of one service on another, on the application. And then, with this constant push within IT towards more of business-oriented, business-driven decisions on the IT side, to us the SLOs already were a very simple thing to correlate IT to business and vice-versa. And for us, that was one of the biggest things that we figured - if we got into that world of Kubernetes, and microservices, that's going to be it. People will realize that they need SLOs to operate efficiently.

**Adam Stacoviak:** It seems like a good negotiating tactic, too. If you've got the rigidity of the SLA, which is like "Okay, it's either black or white. It's a one or a zero", right? It's very binary, in terms of like did you or did you not know "Okay, you're in breach", in terms of just simple contract terms, whether it's internal teams contract, or with a customer contract... At some point you agree on an agreement of how things will work. But an SLO kind of gives you that, "Okay, well, how flexible can the system be? How flexible can we be to still achieve your goals, customer, and/or internal teams, or whatever it might be?" That's a point of negotiation, right? It gives you that flexibility.

**Marcin Kurc:** Yeah. Well it gives you a point on negotiation and flexibility, but it also gives you better communication across the teams. You wouldn't believe how many times we come to a customer or a prospect, sit down, and they keep telling us how much they love SLOs, they've been using SLOs for a while, and after a year or two years they find out that their definition of SLOs within different teams are much different, right? So the four nines for one team doesn't necessarily mean four nines, right?

So with the complexity of today's systems, distributed systems, it's really, really hard to even define how we're looking at certain things, right? What is the degradation in service for me, versus what is the degradation in service for you. And of course, there are levels that are just still amazing to me, although I'm not shocked, where people are finding out that there's this one service they take a dependency on, and it's really running on a server under somebody's desk. I wouldn't imagine that still happens, but it does. So getting those people to talk to each other, and define those SLOs so everybody in the chain understands how they're getting affected, are just \[unintelligible 00:12:56.22\] And I think that the best conclusion out of most of those conversations is looking at the legal contract in the SLA, a lot of people realize "Well, there's really no way for us to offer those five nines, because we have a piece that's two nines somewhere in the chain." So the collaboration and understanding across organizations, across teams is very, very important. And that's really our focus.

**Adam Stacoviak:** Okay, so we kind of know what SLOs are, we kind of know what they are used for, we kind of understand how they help teams effectively build and manage software, and communicate, and also communicate and provide assurances to customers... How do we manifest? Is it a Google doc, since we were talking Google? How do you -- I guess it's pre-Nobl9 there was one way, and maybe now, with the inception of your company and how you help organize these SLOs, and pay attention to the observability of, or the data from different services, how do you establish an SLO? How does it look in the world that there's not Nobl9, and then how does Nobl9s sort of like make that a better feature for teams to sort of like aggregate them together, and all that good stuff? How does it play out?

**Marcin Kurc:** \[00:14:14.13\] Yeah, so you're right, people have been doing SLOs in different ways. Spreadsheets - we still see a lot of people doing spreadsheets... And it kind of works, right? At the end of the month you process your data... And the application of that type of approach is fairly limited. But a lot of people use SLOs for planning. So if you get this data and present that data on a monthly basis, then that's enough for you, right? You have a really good understanding of what happened, what maybe you should adjust in the teams...

What we do is we process information near real-time, right? I want to say real-time, but that's kind of hard as well... And give you insight into what's happening, when things are happening. So we give you \[unintelligible 00:14:58.21\] to use those SLOs for planning, even if you process that monthly or weekly... But also, we give you the ability to act in certain situations in almost real time. Right? So like I mentioned, if you have to failover, if you have to file a ticket, or have an understanding if there is a huge impact happening right now to your customers. If you get a signal that something is down it doesn't really mean your customers are getting affected, right? Hey, the disk is down, or it's not responding. What does it really mean? Are your customers impacted or not?

So our focus, from our perspective, is really giving teams the ability to understand if there's something that they have to do right now, if there's something that's really affecting their customers, and they have to wake up teams across the globe, or failover an application, or roll back the code they just pushed into production yesterday.

So for us, that is key, and for most of our customers, they might start with simple things like using SLOs for planning, but they really quickly ramp up to use SLOs on a daily, hourly basis, this is their go-to, take a look at understand how their customers are being impacted and how they should be responding to any given situation.

**Adam Stacoviak:** How much does this overlap with incident management or just incidents at large? SLOs are sort of like an indicator, but they're not necessarily an incident. So there's like a blurred line here to some degree, right? Can you explain that?

**Marcin Kurc:** Yeah, sure. So incident response, of course - you know there's an incident, and you have templates on how to respond to this incident. And there are a lot of players in that market, and they have fairly similar, but also different ways that they allow you to manage those incidents. And that's all about bringing people together and start looking at things, and maybe deploying templates or things. For us, it's really determining if there is an incident, of if there should be an incident declared. So it all has to do with the error budget, how much you're burning; in many situations things happen, but we allow you to, for example, open a ticket in JIRA, so somebody can take a look at it at some point. If it's a different level of severity, it doesn't have to be an incident. And based on the SLO configuration and the burndown of your error budget, we determine that there's an incident, and we integrate incident response systems, right? We open the incident and let you deal with that incident within that particular system.

**Adam Stacoviak:** I asked that question because I was like - you know, I'm looking at your integrations and I'm thinking "Okay, well, if Nobl9 lets me pay attention to and define my SLOs", and this is like the agreement, basically, to the teams, where we define it; there's a flow to define, as you said, your error budget, kind of figure out where you're kind of pulling your data from, what your data sources are... I've gotta imagine, at some point the next step might be an incident. But one of your integrations is not an incident manager, by any means; it's data sources, you've got events and alerts, which may trigger -- I suppose maybe you're throwing data into, say, Discord, or Slack, and that triggers something else... But I didn't see the integration for the incident management part of it. And then you've got data exports, which is like "Hey, how can we take this data with us, and take it into a meeting or analyze it differently, or munge it somewhere else?"

**Marcin Kurc:** \[00:18:28.11\] So we do integrate with incident management systems. Pager Duty is one of them, ServiceNow is one of them. We've also done work with WebHooks and push data to other systems out there, FireHydrant and a few others... But we try not to be in that space. It is a completely different space; you deal with those incidents in a very specific way. We don't want to play in that space. For us, it's really focused on determining and understanding, based on your configuration of the SLO, of course, when we should declare that incident. And that's our input into incident management systems or paging systems out there, for example.

**Adam Stacoviak:** Gotcha. I've gotta imagine that if you're using Fire Hydrant, or Incident, or somebody else that's out in that space - and I'm familiar with those two because we've worked with them before - that Pager Duty might just trigger something in the incident management flows. Say something happened - this may trigger it. So I was just kind of curious, because I mean, it's one thing to define and sort of track, but then something's got to happen, right? And maybe it's not an incident, like you said. Maybe it's just outside of our normal range of our error budget... It's just a percent or two beyond where we want it to be, and somebody just needs to put some eyeballs on it, and it's not really an incident. But then in some cases, it might literally be downtime, or way beyond the threshold, and it's a more actionable thing, which if you really mince the incident management or the incident word, some folks in that world will say, "Well, most things, if not all things are incidents, and we should track them, because you've got to organize around it." And so it really becomes an orchestration of who should be involved in checking this out, and was it resolved; not a catastrophic incident. Like small incidents are still incidents, basically.

**Marcin Kurc:** Tracking things, yes, of course. But we also integrate with JIRA, ServiceNow, as I mentioned... So opening a ticket for someone to look at some point with specific severity is one thing, but declaring an incident is, to us, a completely different concept. Somebody needs to declare that incident because something happened at a certain level, of a certain severity, and our customers are impacted beyond the point that we believe is what they should experience, right? So it's like calling the fire department. I have an issue, but they might respond over the phone and tell you "Deal with this in that way, whatever it might be", and they get tons of calls like that.

**Adam Stacoviak:** You've got an extinguisher. Take care of yourself.

**Marcin Kurc:** Exactly. Or, you know, that might be somewhere on this fine line of "Should we go towards that?" But people call the fire department with all kinds of crazy things, and a lot of those things are being handled over the phone, right? It's some kind of advice. But when they fire up the engine, that's where the incident is declared. Right? And they operate within a completely different concept and framework, and show up and work on that.

So to us, those are the things where - yes, you \[unintelligible 00:21:33.25\] but you're not responding immediately, then that's fine. It's still being tracked in JIRA, or ServiceNow, or whatever it might be&lt; and there's a record of that, and people look into it. This kind of operates within that whole SRE concept. SREs are there to make systems better, right?

\[00:21:53.28\] So you know something happened, you found out that there's the ability or opportunity for optimization, and then you go and figure out how you prioritize those things, when you're going to do one thing versus the other. Because there's always not one thing, right? There are multiple different things that we have to address. So that's kind of how we deal with this, and there are a lot of those opportunities for optimizations, changes, fixes, but they're not necessarily ready to be done right now, and getting the entire team just to shift their direction to work on that.

**Adam Stacoviak:** Take me a little further into this world before Nobl9... How were people doing this beforehand? You'd mentioned spreadsheets. Was it just that simple in most cases? Were there any other systems built around this? Do you have customers -- I know that you had an acquisition to Google, and you sort of learned and did these things as part of that... But what was the world like before you sort of organized it better?

**Marcin Kurc:** Well, it's a really good question. From my experience with prospects or customers, I don't go before spreadsheets. My question is, "Was there anything in there, really?" Something happened, and -- you know, especially when you have a monolithic application, well, now we know something is not working, and we have to go and figure out how we've got to manage this. Detecting issues like that, within that monolithic application is much easier. A lot of large enterprise customers just began their journey to the cloud, right? So they had full control over their systems, and everything is running on this big Sunfire system, or whatever it might be; you approach those things in a different way. It's kind of like, you know, when VMware showed up many, many years ago, right? They changed how enterprises operated. They changed how enterprises accounted for management systems, alerted on systems... And I think right now with microservices, Kubernetes, and all the little pieces coming into play, I think that's exponentially a bigger issue than what we saw with VMware coming into play.

So we're just at the beginning of the evolution, going from what we know, how we manage our systems, into something completely different. And I think one of the biggest elements of this play is taking dependencies on completely external systems, where we have absolutely zero understanding how they operate, right? A lot of organizations out there are using \[unintelligible 00:24:26.22\] for example, right? A lot of organizations are using similar systems like that, maybe databases. They have no way to see how things operate. So we actually have a lot of customers or prospects coming to us, telling us that they need to implement something because their customers don't really trust them, how they define the SLAs. They're asking questions like "Okay, great, but how you architected your application, so that gives me a little bit of assurance that you build in the right way, and I can expect that your systems can operate." Because maybe your SLA is five nines. That's great, and I'm gonna spend a year integrating and doing things, and then it kind of starts going down every week. That's a big issue. Your customers think that's your problem, and you have a dependency on this outside system that you can't really influence, and you don't know how it's operating.

Think about it in very similar terms as what happened to security many years ago, right? 10, 20 years ago, we used to go on websites and buy things because it had this little logo that says, "Trust me, I'm super-secure. Just do it." Right?

**Adam Stacoviak:** Sure, yeah.

**Marcin Kurc:** There were many, many different things that we had. And people used to do that, right? And now you cannot -- "I'm just not gonna do business with you unless you adhere to certain frameworks and certain certifications", and so forth. And from a reliability perspective, we're really getting close to a very similar approach. "Tell me how you architected your systems, how I can trust you that you did the right thing. You built this on AWS - that's great. But is it multi-region? I need to see some data that really gives me a good idea, or comfort that I can make a big investment." Because an enterprise is not gonna go there and say, "Oh, three months later we can just switch all of our systems to something different." That doesn't happen, right? It's a big, big investment.

**Adam Stacoviak:** \[00:26:21.23\] So with the introductions of SLOs, or just maybe better orchestration and formation of them, and monitoring them, how does that world change then? So you can take on maybe a loose cannon, so to speak, or just something that's less reliable, and you have just better thresholds on that, you have better observability of the actual performance of that for you, within certain ranges?

**Marcin Kurc:** It's all about transparency. So we have a few customers that use SLOs, and they expose those SLOs to their customers, to sell them a high-availability system, or a higher assurance reliability system, right? If you pay X, you're getting this shared system that everybody's using, and it's been great, but \[unintelligible 00:27:10.07\] from that perspective. You're getting your SLAs. However, they have a higher-level service, that costs more, but they provide a very transparent SLO, so the customer can actually see if they're performing to the SLOs that they define. And some of them even go to the point where they will do SLOs per customer. As you can imagine, that's a more expensive thing, of course...

**Adam Stacoviak:** Sure.

**Marcin Kurc:** ...but they will custom-tailor that system to provide the performance that the customer is asking for, and they very transparently provide you the data to back it up.

**Adam Stacoviak:** Yeah. This is interesting, what you're talking about, because this is a sales tactic, essentially. It's a value-add, in this case... Like, having two different tiers. Here's the one that has better objectives, maybe better assurances etc. or just something that we're paying attention to more, and therefore it costs more... But here's the one that's sort of the on-ramp for the lower-level customers. They're still amazing customers, it's just we give them less nines, we give them less assurances. And it's cheaper, because it gets you in the door, it gets you using a product or whatever it might be, and then you determine if it's viable. And if you actually need high assurances, high availability etc. well, then you naturally graduate, and of course, you pay more, because that's great assurances to have. I love that.

**Marcin Kurc:** Yeah, yeah.

**Adam Stacoviak:** How many people know about this? I mean, are people doing that a lot with different plans? Can you go to XYZ service provider and you're seeing that more and more, people communicating these SLOs?

**Marcin Kurc:** We've got a few customers; I'll probably say somewhere between 10% and 20% of our customers are either there, they implemented that type of offering, or they're working on it. So it's starting.

**Adam Stacoviak:** Can you share any names or speak behind --

**Marcin Kurc:** Unfortunately, I can't. Sorry.

**Adam Stacoviak:** No customer names whatsoever?

**Marcin Kurc:** You know, it's a new concept, and... Yeah, we're working with them to help them build that out, but I would say that those were their concepts, their ideas. They got inquiries from their customers to provide that type of service.

**Adam Stacoviak:** Well, I'll tell you one name, and you don't have to say anything... I'll say it because it's on your website. I'm so glad they're your customer, if this is true... It's Ticketmaster. Because I can't get my T-Swift tickets, I can't get my other tickets... I need to get these tickets - Ticketmaster. Come on. SLOs. Anyways...

**Marcin Kurc:** \[laughs\]

**Adam Stacoviak:** I've gotta imagine that's got to be somewhere in there.

**Marcin Kurc:** Well, I've heard that \[unintelligible 00:29:42.14\]

**Adam Stacoviak:** Oh, is that right? I didn't pay att-- well, maybe that's a good thing. I didn't hear any news about this, so maybe it went better... But yeah.

**Marcin Kurc:** Right.

**Adam Stacoviak:** Gosh, the world would be on fire if you can't get your Beyonce tickets...

**Marcin Kurc:** Oh, yes. Oh, yeah.

**Adam Stacoviak:** I just bought some Jerry Seinfeld tickets here in Austin, via Ticketmaster... Had no problem, thankfully. Jerry Seinfeld is a little less popular than, say, Taylor Swift or Beyonce, but still cool. Still cool.

**Marcin Kurc:** \[00:30:11.22\] I agree. I missed this performance in Santa Barbara a month ago or so, but...

**Adam Stacoviak:** You know, when I did some initial research on this - I like to go to a couple of different sources. One that's sort of an easy button, but not everybody goes there for their first search... And it's YouTube. And the reason why I go there is because I'm a Premium YouTube user; I cannot stand advertisements on YouTube, they're just terrible. I don't mind good ads, I hate bad ads.

**Marcin Kurc:** Yeah.

**Adam Stacoviak:** But I go to YouTube and I search SLOs, and I start to get educated on SLOs, and who's using/who's talking about them and whatnot... And it's mostly Google. And then you.

**Marcin Kurc:** Okay, okay...

**Adam Stacoviak:** So the results were Google, Google, Google, and then Nobl9. And I think it was a 90-second videos. "SLOs in 90 seconds." So one, I would optimize more for maybe improving that video, or doing a follow-up that's better, because the audio quality wasn't super-amazing... But you did commit to your objective - there you go - which was 90 seconds. So congratulations on that.

But I mean, it feels like this is an enterprise problem coming down to everyday applications. Would you agree with that? Where's the maturity with SLOs? They're becoming more known, you're about a year or so into this more well-known space, but what's the maturity level of teams truly leveraging SLOs to their advantage?

**Marcin Kurc:** So first of all, interesting. I've gotta go do the YouTube search, because that's definitely not something that we see in real life. I think the situation is that Google definitely has been pushing the concepts for a long time, and they have teams that just focus on that 100%. But within engagements that we have, I would say there are a couple other companies that focus on SLOs, but every single monitoring company or observability company out there has got some kind of solution or something to say about SLOs. And that's really like the real life situation for us. Dynatrace, Datadog, New Relic... I mean, everybody else, right? Just name them. So the real life, I guess, it's a little different than YouTube.

And then maturity, where it is - our point of view... Like, we haven't really done a huge market research. We've had conversations with a number of analysts, and they of course agree that that the market is maturing, and people understand how SLOs help them run their business.

On the base of our customers - you know, you mentioned one or two... Their SLOs are becoming the core of their operation, I would say it that way. One of our customers called it tier zero of observability, that helps them really bring it all together; it allows them to see different teams and different operations at the same level, right? It's the same reference point, I would say. So you don't have this issue where you have four nines that are completely differently defined versus three nines, and so forth. They really get a good idea of how things are performing, where you take dependencies, what they can offer...

And then finally, a lot of customers, I would say probably every single one of our customers is using SLOs for planning. And sometimes that's as simple as if somebody shows up and says "I need another $5 million to spend on AWS", and the question is "Why?" "Well, we're running out of capacity." And that's usually where the conversation ends, right? Now, SLOs really enable you to provide that better insight into what needs to happen. Do we have an issue with capacity on the cloud provider? Do we have an issue with our application hitting limits? Do we have an issue of this monolith that cannot scale anymore and we have to figure out how we really transition to something different?

\[00:34:01.18\] It really helps people to understand how the teams are performing, too. You're sometimes pushing out features - because everybody gets promoted on features, right? Not on maintenance. And you start seeing degradation of your service, degradation of your customers' experience... So you just start thinking about how we pull back, when do we pull back, how much do we pull back, right? We want to stay competitive, but we don't want to get our system to break every hour, right? So a lot of those concepts - the more people are using SLOs, the more mature they get with it very, very quickly.

**Adam Stacoviak:** Is this kind of where your service health dashboard comes into play, where you can sort of see at a glance what you have sort of tracked, I suppose, within Nobl9, but you have them sort of organized, and they're color-coded... Like ,"Well, this one's green, this one's red..." I'm assuming maybe there's a yellow, or potentially -- but something where this is like sort of in a degraded state, and it's not quite red, but it's getting close to red. Is that where something like this comes into play, where you can sort of see at a glance where things are playing?

**Marcin Kurc:** Yeah, for organizations that are looking across, definitely. It's one of those things that gives them a very quick idea of what's happening, and they can drill down. And sometimes for teams, if they operate multiple services, or they monitor multiple different inputs into their SLAs, that becomes also very interesting and very needed. But like any dashboard of this type, it's a quick view of what's going on, and how we can quickly get to the root of the problem, for example.

**Adam Stacoviak:** Interesting. Okay, so reactionary, of course, because you've got integrations to Pager Duty, so you can fire off incidents... But then planning I've gotta imagine is a big one. Like you had said before, if you want to expand your spending with AWS, or GCP, or what have you, and you don't have any data besides "We just need it", this sort of fills that gap of like "Okay, why do you need it?" More data is always good...

What is your plan then with Nobl9? What is the big dream, so to speak? It seems like your early innings, and this is -- I don't want to say what you've built is not amazing, but it seems pretty simple, right? Track some objectives, establish some communication with your team, give yourself a dashboard, and then integrate with the necessary players in the field, whether it's Datadog, or Pager Duty, or the different data warehouses and whatnot. What's next? What's the next big thing for you all?

**Marcin Kurc:** First of all, I would say that - yeah, most good software is simple, right? That's the whole point.

**Adam Stacoviak:** For sure.

**Marcin Kurc:** It solves, I think, a complex problem...

**Adam Stacoviak:** That's what I was trying to caveat this with - this is not a negative simple. It's just, it seems pretty straightforward. You kind of got into the Easy button for the most \[unintelligible 00:36:41.21\] That's what I'm trying to say.

**Marcin Kurc:** No, of course, of course. So that was a huge focus for us, because dealing with those problems is not easy. Finding a reference point for multiple different data sources - everybody's doing things in a different way, and then customers store a lot of data in databases... And just pulling all that information together and allowing people to have it in a simple view is super-complex, right? And a lot of people out there tried, a lot of people failed, and a lot of them are on version two, three, and maybe four... So for us - yes, this is the beginnings. I feel like we've built a very strong base platform, and we have at least two years of roadmap to build features that help you consume information easier, help you share information easier, collaborate on the platform... You know, mostly focused on that.

\[00:37:46.15\] And I think the big dream is pushing it in the direction of business data, right? The whole concept of IT operates against business goals; how do we start bringing those information together, and helping people on both sides understand the inputs and outputs much better? So you have the business people like "Alright, why do we just lose our margins? Because we're spending $20 million more on infrastructure. And that just happened because we need that capacity." Right?

And on the IT side, of course, what are our goals in terms of customer growth, customer satisfaction, migrations? That's a big thing for us - people migrating from on-prem to cloud. As I mentioned, they have a full understanding of what they have, versus very small part of what they can understand and change and configure, right? So migrating with this reference point of where you are today - it's a big issue. You've probably heard a lot of stories of "Oh, we migrated to cloud, saving no money. As a matter of fact, we're spending more money. Our applications are not performing better, we have more issues" etc. That's \[unintelligible 00:38:51.23\] So now have a better understanding of where you are, how are you going to measure those things. Because maybe sometimes you just don't see the benefit, right? Or maybe sometimes somebody did things in the wrong way, configured it incorrectly, and now you feel like all the two years of work of migrating applications went nowhere, in the worst situation. So there's a lot of that happening for us as well.

**Adam Stacoviak:** Okay, so let's paint a picture then. So imagine somebody who's listening to this and they're like "Okay, we've done SLOs in the spreadsheet way, we've tracked them to some degree behind the scenes, we've been willy-nilly about it... We've done some things, but not to the level that this would do." What does it take to get started? What is the initial conversation? Is it a conversation with the team? "Okay, these are the services that we have, this is the data we want to track, this is how we want to measure things..." And how does that manifest into actually having SLOs in place? What's the timeframe from "I want to do it", to you've got it in production, to actually have an objective?

**Marcin Kurc:** So this is a great situation for us, no question. You are doing SLOs \[unintelligible 00:39:53.19\] on a concept, and your teams are in some way bought into this thing, or maybe forced to do this... You never know, right? So you already are looking at certain inputs, and you have those defined. We can very, very easily, probably within a day or two, configure you to be at the same point where you already are with spreadsheets. And then we have a number of tools that help you build and configure SLOs in a very quick way.

At AWS re:Invent we introduced Replay, that allows you to bring data from all your systems for the past 90 days, 100 days, or a year, and then look at that data so you can start to understand what SLOs would make sense. And now we've just released this thing called Analyzer, that can use that data and suggest SLOs to you.

**Adam Stacoviak:** Oh, interesting.

**Marcin Kurc:** So the combination of Replay and Analyzer can set this SLO, and with Replay you can go back to your events - like, you had an outage three months ago. You can look how your SLO would be affected, and how your error budget would be burned, so it gives you a good idea of how you should be acting. And of course, we can keep turning those SLOs, but we give you a number of tools, like I said, that are gonna allow you to get operational within a week, I would say.

**Adam Stacoviak:** Yeah.

**Marcin Kurc:** But I think the biggest part that we bring to the table that's been very successful, with most of our customers is SLOs as code. A lot of people are struggling with bringing in another thing, a new concept... With SLOs as code, you basically can get your teams or your developers to only deploy code with SLOs defined. So if you don't have the SLO on this specific thing, the code is not getting checked in, we're not pushing it out. And that really helps all the organizations to have some kind of standard of "Okay, at least we have SLOs." And then the tools, as I mentioned - you can play with them, you can tune them up, get to the point where it really benefits all the organizations. And I think that, you know, with a few teams, 90 days is most likely enough time to get really tuned up and set up for the organizations.

**Adam Stacoviak:** \[00:42:19.17\] So in most cases if you don't really have an idea of how to implement SLOs, or where you might go, essentially use past data to predict, to some degree, with your Analyzer, and whatnot...

**Marcin Kurc:** Yeah.

**Adam Stacoviak:** Is there a scenario where -- I'm sure you have great content out there, and you've always got that 90-second YouTube that I mentioned, which is phenomenal as an on-ramp; you should definitely revisit that. Are you finding that, while you also have a service, you also have to educate, like have a consultant, so to speak? Do you have sales folks? I know there's some things where it's like "You know what - I would use it if you demystified how I use it." What's the uphill battle here for SLOs? Sure, they make sense, but like getting people to buy into it. What is the selling point here?

**Marcin Kurc:** Yeah, so quite often we are in those situations; not as much now... As I said, the market is more mature, but we run into those things. But there's this lead that's been hired into the organization, either to create an SRE organization, or implement SLOs, or in general, work on the strategy for observability... And they fully understand the benefits. But of course, they have a number of teams that always have an excuse, and different arguments. "What we're doing is great, there's no need..." We've all been there, right? So for those situations, we do bootcamps. And those boot camps could be anywhere from four hours to three days, or even five days; we can go through full training exercises. If we do the three-day, I believe at the end of the whole bootcamp you're coming out with your SLIs and SLOs defined, implemented in your system, and you can start rolling from that perspective.

If you need more with organization adjustment changes and whatnot, we have a number of consulting partners, anywhere from boutique organizations to Accenture and Cognizant that we've been working with. So we can tailor an approach for the organization from anywhere, hands-on; we send our SREs there, they help you out, they figure it out for you, all the way to full organization onboarding, and personal adjustments as well.

**Adam Stacoviak:** You mentioned a new acronym there SLI. What does that mean? How does that play into SLOs?

**Marcin Kurc:** That's the input. \[unintelligible 00:44:40.15\] Service Level Indicators, right? You pick those first. So those are the things that you want to use as signals for your SLOs.

**Adam Stacoviak:** Okay.

**Marcin Kurc:** It could be \[unintelligible 00:44:53.23\] That's easy. You could be looking at number of logins, or failed logins, or things like that, that then you input into creating your SLO. And you build your SLO based on the inputs.

**Adam Stacoviak:** Gotcha. How would you rate where you're at today, in terms of market, and product, and things like that? What are some things that you've done well, and some things that you may have not done so well? How would you rate yourself? Like, on a scale of zero to 10, zero being absolutely terrible, go home, stop, to 10, knocking it out of the park, keep going, more funding, go-go-go?

**Marcin Kurc:** Well, I think from a product perspective - you know, with our first company, we made a lot of mistakes. A lot of them. I think my ranking would be definitely under five on the first one.

**Adam Stacoviak:** Okay... Good honesty. I like the honesty.

**Marcin Kurc:** Yeah. So we had issues. And of course, that was also part of the reason why we started rewriting the system of Google the day we showed up. We knew it, we told them, they knew it... There was a whole concept. But we learned a lot from that, right? And we also learned a lot from working within Google product organizations... So I think, from our ability perspective, from an architecture perspective, performance, I think the product is somewhere around seven.

\[00:46:17.03\] When it comes to market - this market has been changing a lot, and quite frankly, I know everybody experienced this. We started in 2019, then of course we had a pandemic a few months later, then other things happened... So I would say we had a good idea, and we hoped the market was gonna develop in a certain way. But of course, we made some missteps, in terms of who we market to, how we message things... But that's kind of standard when it comes to a small organization. So we're constantly evolving there. We're somewhere around six, I would say, on message. We just had this conversation yesterday, so we're adjusting the message, getting better at who we market to.

But overall, like I said, I feel very confident with the product itself. I really focused on a lot of the things that we didn't do really well in the previous company. We had remote teams, we had teams in different countries, and I don't think I put enough focus on culture, which is very, very important to me... And this time, that was a huge, huge thing to focus on from day one... And I think on culture we're actually probably the highest. I would rate us at eight on the culture. So given all those components, I think we're in a really good position to try and be one of the top players in this space.

**Adam Stacoviak:** Well, that's good, because messaging is probably the one where everyone is always improving, for sure... I think if you have culture in place, or at least a good intention for culture, you've got a good foundation, and therefore not so much easy, but it's easier with good culture, and good team, and good morale etc. to build the right product.

And then messaging is always sort of trailing, right? Like, if the product is moving, and especially being a new category, so to speak, in terms of SLOs... I think it makes sense your messaging is a little off, because you're probably still learning who specifically is your customer. Because SLOs affect everybody, but not everybody buys them.

**Marcin Kurc:** Yeah, and our customers invent ways to use SLOs, too. So that's interesting. There are a lot of very interesting use cases that really come from our customers. So that plays into how we message as well.

**Adam Stacoviak:** That's right. You piqued my interest with leveraging SLOs as a product thing. Like, how do you have product tiers. And that's really a Chief Revenue Officer's opportunity, potentially. So how do you market to a CRO, for example, with SLOs? "Well, hey, adopt SLOs, and maybe you have healthier teams, or healthier products." If you have tiers, one that's more expensive, more premium, and you can quantify the sell, for a lack of better terms, with an SLO." That to me simplifies things. So your customer there is like product owners, Chief Revenue Officers, potentially marketers... So you're not really marketing to, say, director of engineering, in that case, who probably cares a lot about SLOs...

**Marcin Kurc:** Yeah, that's where we started, of course \[unintelligible 00:49:11.15\] as you said. But definitely, things are expanding beyond that. And that was our hope from the beginning. Like I said, a lot of those things that happened in the world in the past three years reshaped many things in this business... So we're trying to adjust as quickly as we can.

**Adam Stacoviak:** What is it that keeps you up at night? Do you get good sleep? What are some of your healthy practices, in terms of just like life? Do you let things, "your day job", your baby, your company keep you up at night? Are there things that do keep you up at night? And if so, what are they?

**Marcin Kurc:** Do I look like I sleep well? \[laughs\]

**Adam Stacoviak:** I don't know. Maybe you do, maybe you don't. I don't know...

**Marcin Kurc:** Well, there's always something, right? I think the one thing I learned has been the fact that there are certain things you can affect and certain things you cannot affect, right? So if I wake up in the middle of the night, it's usually with some idea to think through. I just had this revelation, and I tried to solve this problem... Like, yes.

**Adam Stacoviak:** \[00:50:11.00\] Gotcha.

**Marcin Kurc:** I don't think that fear plays a role at all. There's always this, "Oh, let me take a step back and think about it, because I don't know if we're going in the right direction." And there's always a little bit of fear from that perspective. But I think it's more of a healthy fear. Check yourself if you're doing the right thing. But part of the reason I like being the startup is the fact that -- I mean, there's no shortage of issues that you have to solve on a daily basis. And that's what excites me. I like that. And I have a great team that thinks in a very, very similar way... So yeah, this is -- we love doing those things. We love building the company; that's where the fun is. Even if sometimes we have a bad day, and you have to check yourself, and take a break, go for a walk, whatever you might do... But like I said, in general, the team is really, really good, and supporting each other, liking the same things, driving in the same direction. That's the most important thing. I know I can fall back on certain people in the organization.

**Adam Stacoviak:** Good. That's good for you. How much can you share about the horizon? What's just over the horizon, or right at it? Maybe something that not many people know about around Nobl9, or SLOs are the next big thing... What can you share about the future?

**Marcin Kurc:** You know, I mentioned a couple things... For us, pushing and focusing more on the business aspects, relationship between business and IT, making SLOs easier to use... I know we push a number of tools to help customers do that, but that's one of the biggest teams for us. Yeah, a few partnerships out there that I think are gonna be powerful... I'm super-excited about those... Huge investment, of course, but those are the next 12 months, for sure.

**Adam Stacoviak:** Gotcha. Alright, anything else left unsaid? What did I not ask you that you're like "Man, how did we miss this?" Is there things that I just totally gapped?

**Marcin Kurc:** I don't know, I really liked the questions. You did amazing research. I'm really surprised. Great.

**Adam Stacoviak:** Nice.

**Marcin Kurc:** Yeah, I really liked that. I liked the questions. I was just going through it... We talked about where we are, how the market gets impacted by SLOs, how people are using them... I can't really think of anything else that we missed.

**Adam Stacoviak:** Well, it's been fun having you here. Thank you so much for your time today. I appreciate the wild adventure into SLOs and all the ways they can be used. It's so cool. I'm a big fan of the impact to teams and organizations leveraging it in the right ways, and good to see you and Nobl9 really doing it right, so I appreciate the time.

**Marcin Kurc:** Thank you very much. It's an honor to be here. I appreciate the conversation, it was very, very good.

**Adam Stacoviak:** Awesome.

**Marcin Kurc:** Thank you again.

**Adam Stacoviak:** Thank you.
