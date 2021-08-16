\[00:02:33.24\]

**Gerhard Lazu:** So I really wanted to talk to you about this topic of Kaizen. Kaizen, for those that's the first time they hear this, is the concept of the art of self-improvement specifically. And that is really powerful, because it's the best way that you have to improve yourself, and to always think about "How can I do this better?" It all starts with "How can I do this better?" So with that in mind, what I wanted us to do every tenth episode was to reflect on what can we improve for the application, for our setup, but also the show, because - isn't that the best way of improving? I think it is...

**Adam Stacoviak:** Kaizen. I love it.

**Jerod Santo:** Always Be Improving. ABI.

**Adam Stacoviak:** ABI, yeah. Always Be Something. ABS.

**Gerhard Lazu:** I'm pretty sure that means something else for others, ABS, but yes...

**Adam Stacoviak:** Automatic Breaking System, that's what it refers to for me...

**Gerhard Lazu:** The reason why I care so much about this is that having been part of Pivotal, this company which isn't anymore - it was acquired by VMware last year or two years ago - is that one of the core principles was to always be improving. "Be kind" was there as well. But always be improving was something that was embodied in the retrospectives that we used to have every single week at the end of the week. And this was good, because what worked well, what didn't work so well? Anything that people wanna discuss? And that made sure that everybody was in sync with problems, but also the wins. I think that's important.

\[00:04:05.19\] So having done it for 5, 6, 7 years, it's so deep-ingrained in me I cannot not do it. It's part of me. And I do it continuously. And I think the infrastructure setup that we've been rolling for some number of years has been an embodiment of that. Every year it has been improving. It was rooted in this principle.

Now, one thing that we did in the past differently is that we improved, or at least we shared those improvements once per year. It was a yearly thing. And one of the ideas for the show was to do it more often, to improve more often. So we can improve in smaller steps, but also figure things out a lot, lot quicker, what works and what doesn't work, rather than once a year.

**Adam Stacoviak:** It works out at about every two-ish months essentially we get a response, a blip, a feedback loop, whereas before it was like once, or more recently twice in a year; if it's Kaizen every ten shows, then we get around four or five(ish) per year if you're shooting for 52 as a year.

**Gerhard Lazu:** So I think in end of April, beginning of May we switched on the 2021 setup, and we had a show, we had an intro, we did a couple of things, episodes -- do you still remember which episode that was on Changelog, Adam?

**Adam Stacoviak:** No, but I have the internet, and I will look it up... So give me a moment while I look it up.

**Gerhard Lazu:** That is a good one. That was meant to be part of Ship It, but then some timelines got moved around, and that went on Changelog... And then the Ship It - we did the intro to the show. So that's how it happened.

**Adam Stacoviak:** It was an interesting maneuver, a last-minute maneuver from us too, which - I'm not sure it matters to the listeners, but I think it was kind of... We had a plan, and then at the last minute we changed the first ten years of running down the field, so to speak. That was episode 441 on the Changelog's feed, so changelog.com/441 will get you there, "Inside 2021's infrastructure for Changelog.com", which is a throwback to the year prior, "Inside 2020's infrastructure for Changelog.com." So we've been doing that every year now for the past couple of years.

**Gerhard Lazu:** I think that change made a lot of sense, and that change just led to a couple of other things... And now we're finally in the point to talk about the next improvement, so you don't have to wait another year; not only that, we're doing things slightly differently. We're going to share the things that we're thinking about improving, maybe why we're thinking about improving them, so that maybe you have better ideas, maybe you know about things that we don't, that you would like us to try out, maybe part of the same thing...

So - Fastly. I would like to mention that, because Fastly, our partner - amazing CDN - had an outage a couple of weeks back.

**Adam Stacoviak:** Unexpected, of course.

**Jerod Santo:** Right after you said 100% uptime.

**Gerhard Lazu:** Exactly.

**Adam Stacoviak:** Exactly. \[laughter\] No, it was like a week after, wasn't it? That show shipped, and the very next week - Fastly outage. And it was a global outage, too.

**Gerhard Lazu:** It was global. Half the internet broke. It was the biggest Fastly outage that I am aware of. So what that made me realize is that Fastly is great when it works. And when it doesn't, it doesn't affect just us, it affects everybody. BBC was down, and that's a big one, BBC being down. Emojis were down, on the whole internet. That was unexpected...

**Jerod Santo:** Wait, wait, wait. Tell me more. How were emojis down for the whole internet? It doesn't make sense.

**Gerhard Lazu:** Well, apparently, the assets that were served by AWS had something to do with it. I don't know exactly in which capacity, but AWS was serving certain emoji assets, and Fastly was part of that... And emojis stopped working for Slack, so I think in the Slack setup somewhere -- I mean, everybody uses Slack to communicate these days, because everybody's at home these days, or most of us are at home these days. So you couldn't use emojis in Slack anymore. They stopped working.

**Jerod Santo:** \[00:08:05.15\] That makes more sense than "The emojis just stopped working globally", across the entire world of devices... But yeah, inside Slack.

**Gerhard Lazu:** Sensational. It's news, it has to be sensational. \[laughter\]

**Jerod Santo:** Well, most importantly, we were down, so most importantly to us... So the BBC being down - tragic; terrible for lots of people. But for us specifically, we were down, and that was the worst part about it, wasn't it?

**Gerhard Lazu:** For us, yes. As for all the listeners. \[laughs\] Right. And interestingly, during this time, our origin, the backend to Fastly was up. It didn't have an issue. So this month I got a report, we were down for 21 minutes because of that. So 99.96% uptime.

**Jerod Santo:** So you had a cutover though; you turned off Fastly basically, right?

**Gerhard Lazu:** Yes. I jumped in, switched Fastly... Basically every routed traffic; so DNS updates, and Changelog.com would start resolving directly to the Linode host, talking to the Linode load balancer, node balancer, and Fastly was basically taken out of the picture. But because of how DNS is cached, it took a couple of more minutes to propagate... But that was it. And CDN as well, re-routed it...

I was basically chilling, it was like a day off... It was a great one. I was in the garden, just chilling. \[unintelligible 00:09:20.25\] As you do, exactly... And then the phone started going off like crazy. That was really like "What?!" I got SMS messages, because we have multiple systems... When something is down, you really wanna know about it, so I got texts, I got Pingdom alerts... Oh, and what I didn't get was Telegram notifications, because guess who else was down? Grafana Cloud.

**Jerod Santo:** Grafana, yeah. You didn't let me guess. I was gonna guess it.

**Adam Stacoviak:** I thought you were saying you had a day off because of all the down \[unintelligible 00:09:52.11\]

**Jerod Santo:** Grafana? Was it Grafana?

**Gerhard Lazu:** Yes, Grafana. Sorry, Adam, what were you saying?

**Adam Stacoviak:** I was saying I thought you said you were taking the day off because you had nothing to do because the internet was down, essentially. That's what I thought you were saying.

**Jerod Santo:** Oh, no.

**Adam Stacoviak:** I misunderstood.

**Jerod Santo:** \[unintelligible 00:10:04.14\]

**Gerhard Lazu:** I was just chilling. It was a gorgeous day, sunny, and it was a day off; I was sunbathing. I won't go into more details with that. \[laughs\]

**Jerod Santo:** Well, let me say two things. First of all, thanks for springing into action and bringing this back up; 21 minutes, nothing wrong with that, compared to the BBC, those suckers, they were down for much longer... But the bummer side, let me tell you the bummer side, which - I haven't told you this before, but what you did is you cut Fastly out and you put Linode directly in, right? And so all of our traffic was served from Linode during that time. Well, it just so happened to be timed directly. When we shipped our episode of the Changelog with Ryan Dahl, and because we do all of our analytics through our Fastly logs, and then we served all of that traffic directly from Linode, we have no idea how popular that episode is. In fact, in our admin it looks like it's not a very good episode of the Changelog, but I'm quite sure it was pretty popular... So I was bummed, I was like "Oh, no...! We missed out on the stats for the show", which was one of our bigger shows of the year... But I'd rather have that happen and let people listen to it than have it be down and nobody gets to listed to it. So that was a bummer, but pick your poison, I guess, or better of two evils.

**Adam Stacoviak:** Yeah.

**Gerhard Lazu:** I remember that, actually. I remember that, because I remember looking at the stats, and the stats were down, and I was thinking "I wanna talk to Jerod about this." So if there's one lesson to learn from this, we need to double up. So everything that we do, we need to do two of that thing. Say like monitoring - we have two monitoring systems. Because sometimes Grafana Cloud has an issue, and we want to still know -- and when I say Grafana Cloud, I mean the black box, all the exporters... There was a recent one as well when they pushed updates, sometimes things are offline for a few minutes... And it makes you think that a website is offline, but it's not. Or when it is offline, you don't get anything. So we used Pingdom as a backup, and that helps. So stats - I think it's great to have stats from Fastly, but I don't think we can rely only on those stats. I think we need more.

**Jerod Santo:** \[00:12:14.26\] Well, it's one of those ROI kind of conversations, and I think this is a good conversation for Ship It, like "What's worth doing?" and the fact is that in our five years of being on Fastly, this is the first incident they've had... And if it didn't happen to be right when we released a popular episode of the Changelog -- if it was just like a Saturday and we missed some downloads, I wouldn't care all that much. At the end of the day, I know that show is popular, so it's not really changing my life... I just know it was popular because people reacted that way, versus looking at the download stats.

So the question becomes "What does it take to get that redundancy? What does that redundancy cost, and what does it gain?" And in the case of stats, I'm not sure what side of the teeter-totter we actually end up on, because the way it works now as Fastly streams the logs of all of the requests to the mp3 files over to S3, and then we take those logs, which are formatted in a specific way, parse them, and then bring them locally into our database, and it's reproducible in that way off of S3. So we can just suck down the same logs from S3 whenever we want, re-parse them, recalculate...

But what would it take to get Linodes doing the same thing, or changing the way we do our stats, so that we're either redundant or do it differently? I don't know the answer to that off the top of my head.

**Adam Stacoviak:** In the case of something like Grafana though, I would put that back on them. We shouldn't have two Grafanas. I think this is probably the case for multi-cloud - wouldn't it make sense then to be let's say on GCP, Azure, or essentially multi-cloud? And maybe that's an issue with cloud at large. The cloud has to be multi-cloud, so that if part of their cloud goes down, then there's still some sort of redundancy in them. I would rather them do that kind of stuff than us have to have essentially two Grafanas, or Linode and Fastly, and deal with that. And maybe that's the unique scenario where it's like we do have to deal with that n+ whatever... But I would say on a service level, push that onto the service to be smarter about the way they roll out their own cloud, and their potential downtime, what that means for internet at large.

**Gerhard Lazu:** Now, obviously, as you would expect, I think about this differently.

**Jerod Santo:** \[laughs\] Please tell us.

**Adam Stacoviak:** Please tell.

**Gerhard Lazu:** The way I think about this is that we are in a unique position to try out all these providers. We have the know-how, and really, our integrations are fairly simple... So I know that it wouldn't take that much more to integrate Cloudflare. So how about we use Cloudflare AND Fastly? ...the two biggest CDN providers, at the same time. What if, for example, we decouple assets from local storage? We store them in an S3 object store. We for a database use maybe CockroachDB, a hosted one, the database is global, and then we are running Changelog one instance on Linode, one instance on Render, one instance on Fly, and then we use different types of services, not just Kubernetes we try and apply it for... Because we try it out, and at the same time, we are fully redundant.

Now, the pipeline that orchestrates all of that will be interesting... But this is not something that's gonna happen even like in a year. It's slowly, gradually... It's maybe a direction that we choose to go towards... And maybe we realize "You know what? Actually, in practice, Cloudflare and Fastly - it's just too complicated." Because only once you start implementing you realize just how difficult it is.

**Adam Stacoviak:** \[00:15:58.03\] Yeah, that's that cost that Jerod was talking about - how much does the redundancy cost, and how much does it gain you?

**Gerhard Lazu:** So from a CDN perspective we just basically have multiple DNS entries; you point both Fastly and Cloudflare to the same origin - or origins in this case... \[unintelligible 00:16:14.15\] The configuration is maybe slightly different, but we don't have too many rules in Fastly. How do they map to Cloudflare? I don't know. But again, there's not that much stuff. I think the biggest problem is around stats. We keep hitting that.

**Jerod Santo:** Yes. And I looked at Cloudflare - it was probably two years ago now - with regards to serving our mp3's, and where I ran into problems was their visibility into the logs and getting that information out paled in comparison to what Fastly provides. So we would lose a lot of fidelity in those logs, like with regard to IP addresses... Fastly will actually resolve with their own MaxMind database or whatever their GeoIP database is; they will give you the state and the country of the request, stuff that we wouldn't have to do... And Cloudflare - at least at the time (a couple years ago) just didn't provide any sort of that visibility, so it was like, I would lose a lot of what I have in my stats using Cloudflare. And if I was gonna go multi-CDN, which is kind of like multi-cloud, I would have to go lowest common denominator with my analytics in order to do that... So it really didn't seem worth it at the time. But maybe it's different now.

**Adam Stacoviak:** Yeah, if they've improved their logs, then it's back on the table, let's say.

**Jerod Santo:** Yeah. So that's maybe the long-term direction. What's some stuff that is more immediate, that you have on the hitlist? Things that we should be doing with the platform.

**Adam Stacoviak:** I think multi-CDN makes sense to me, just for those reasons. If you've got one that goes down, then you've got another resolver.

**Jerod Santo:** But once in five years... How often is Fastly down?

**Gerhard Lazu:** Okay, I'm thinking about this from the perspective of the experience and sharing these things.

**Jerod Santo:** Right.

**Gerhard Lazu:** A few years back, we were missing this. But we don't know what they have or don't have this year, or maybe what we're missing. Maybe they don't even know what we would like for them to have. And listeners of this show, they can think "You know what - this show is really interesting, because they are using multi-cloud, and these are all the struggles that they have, so maybe we can learn from them and not do some of these mistakes ourselves."

**Jerod Santo:** Right.

**Gerhard Lazu:** So in a way, we're just producing good content. That is very relevant to us, when we say "You know what - we are informed, and we have made an informed decision to not use Cloudflare because of these reasons... Which may or may not apply to you, by the way."

**Jerod Santo:** Right. It's like there's a brand new hammer, and we grab hold of it... And everyone gathers around, we put our hand out and we strike it right on our thumb. And then everybody knows "That hammer really hurts when you strike it on your thumb. I'm glad those guys did it. I've learned something. I don't have to do that myself.

**Gerhard Lazu:** \[laughs\] I think that's a very interesting perspective, but I don't see it that way. It's an amazing analogy, but I'm not sure that it applies here... But it's great fun, that's for sure.

**Adam Stacoviak:** Yeah.

**Jerod Santo:** Okay, good.

Break: \[00:19:16.04\]

**Gerhard Lazu:** So you were asking, Jerod, what is next on our hill... One of the things I learned from the Fastly incident is that we don't have anything to manage incidents. When something is down, how do we let users know what is going on? How do we learn from it in a way that we can capture and then share amongst ourselves and then also others?

A document is great, a Slack just to write some messages is great, but it feels very ad-hoc. So one of the things that I would really like is a way to manage these types of incidents. And guess what - there's another incident that we have right now.

**Jerod Santo:** Right now?

**Gerhard Lazu:** Right now, right now.

**Jerod Santo:** Like the website's down right now?

**Gerhard Lazu:** No. The incident - this is a small incident...

**Jerod Santo:** Okay, good...

**Gerhard Lazu:** No, the website is 100% up.

**Jerod Santo:** 100% uptime, thank you.

**Gerhard Lazu:** Yeah. So Fastly, it's your responsibility to keep it up, right? That's what it boils down to. It's someone else's problem. It's Fastly's problem.

**Jerod Santo:** That's right. Pass the buck.

**Gerhard Lazu:** Right. So right now, one of the DNSimple tokens that we used to renew certificates has been deleted. So it's either Adam or Jerod, because I haven't.

**Adam Stacoviak:** It wasn't me...

**Gerhard Lazu:** Anyways, I'm not pointing any fingers...

**Adam Stacoviak:** I don't touch DNS.

**Gerhard Lazu:** So in the account --

**Jerod Santo:** It's looking like maybe it was me, but I haven't touched anything, so I don't know what's going on. It could be worse than we think.

**Adam Stacoviak:** It could be a bit flip.

**Gerhard Lazu:** So we had two DNS tokens, one was for the old setup and one was for the new setup. The one for the old setup I have deleted, because we just didn't need it... And then we had three DNS tokens left. One of them disappeared. It's no longer there. And that was the one that was used by cert-manager to renew certificates. So the certificates are now failing to renew. We passed the 30-day threshold, and we have I think another 25 days to renew the certificate. But because the token is not there, the certificate will never be renewed, and then eventually, the certificate will stop being valid. This is the same wallet we use in Fastly. So a lot of stuff is going to break for many people.

Now, I've found out about this by just looking through K9s what is happening with the different jobs. There's jobs which are failing, that are meant to renew things. It's not the best setup, so the first thing which I've done, I've set up an alert in Grafana Cloud, when the DNS expires in less than two weeks, or in actually three weeks - whatever; some number of seconds, because that's how they count them - I get an alert. So it should automatically renew within 30 days. If within 25 days it hasn't been renewed, I get an alert. So I have 25 days to fix it, roughly.

So what I would like to do is first of all capture this problem in a way that we can refer back to it, and also fix it in a way that we also can refer back to it, like how did we fix it; what went into it, what was added, so that this doesn't happen again. And adding that alert was one of the actions that I took even before we created an incident. So that's one of the top things on my list. How does that sound to you both?

**Adam Stacoviak:** Was it called an access token?

**Gerhard Lazu:** Yes.

**Adam Stacoviak:** So on June 19th -- they have an activity log. This is actually kind of important for -- I think this is super-important for services that have multiple people doing things that are important, that could break things, essentially... Have an activity log of things that happened - deletions, additions... And DNSimple does have that, except for to have more than 30 days of activity, you have to upgrade to a pro plan that costs $300/year. It's kind of pricey, in my opinion.

**Jerod Santo:** So we don't know what happened.

**Adam Stacoviak:** Well, we do, for the past 30 days. So on June 19th, because I'm the only user, it says "Adam deleted it." So I guess I "deleted" it, but it was not me.

**Jerod Santo:** Hah, so it was you.

**Gerhard Lazu:** No, that was actually me... But the token which I deleted was the one for the old infrastructure. There were two tokens.

**Adam Stacoviak:** \[00:24:07.02\] I see, okay. So this happened -- do you know when, roughly? Can you assume at least?

**Gerhard Lazu:** June 19th sounds right. But a single token was deleted and we had two.

**Adam Stacoviak:** Yeah, okay. So it shows a single token being deleted June 19th, at an abnormal time for me to do any deletions. I think Jerod as well.

**Gerhard Lazu:** Yeah, that was me.

**Adam Stacoviak:** If this is Central timezone, because that's where I'm at \[unintelligibl 00:24:30.03\] it's 7:16 in the morning. I'm definitely not deleting things at that time besides Z's in my brain. I don't get up that early. That's how we know.

**Jerod Santo:** Maybe you accidentally deleted two. It was a two for one deal that morning.

**Adam Stacoviak:** It doesn't show on the activity log though, so that's the good thing.

**Gerhard Lazu:** Right.

**Adam Stacoviak:** I would maybe push back on DNSimple support and they can dig into it. And then 1) get a true git-blame on this, and then 2) see if it was maybe just an error on the platform side.

**Jerod Santo:** Yeah, I don't think I've done anything with tokens aside from maybe one of our GitHub access tokens was expiring, or they've made a new one and I think I rotated one token... But nothing to do with DNS. Not in the last month, or six months.

**Adam Stacoviak:** It'd be cool if certain things like this required consensus. You can delete it if Jerod also deletes it.

**Jerod Santo:** It's like the nuclear codes. You've gotta have two hands on the button.

**Adam Stacoviak:** Yeah. You don't have to do it at the same time. You can do it async by saying "Okay, Gerhard, at his 7 in the morning timeframe (because he's in London) deleted it." You get an email, Jerod, saying "Gerhard deleted this. Do you wanna also have consensus on this deletion?" and you have to go and also delete it too, where it's like two people coming together to agree on the deletion of an access token...

**Jerod Santo:** It seems awfully draconian for a DNS access token. That's why I think the nuclear codes makes sense... You know, like, you're about to send a nuclear bomb, you've gotta have consent. But I think an access log is good enough.

**Gerhard Lazu:** I think it would help in the DNSimple log to see which token has been deleted, like the name of the token...

**Adam Stacoviak:** It doesn't say that. It's not very thorough. It just says "Access token delete."

**Gerhard Lazu:** Yeah. That would have helped.

**Adam Stacoviak:** That's the event name. So some of the items in DNS have text associated with them, but this does not. It doesn't showcase the token, the first six, or anything like that. It's just simply the event name, in this case. Everything else is pretty thorough.

**Jerod Santo:** Well, I think we're rat-holing this particular incident, but the bigger picture thing in addition to this "We've gotta figure out what happened here and fix it" is how do we handle incidents in a better way? So I think this is a place where I would love to have listeners let us know how you handle incidents, what are some good options... I know Gerhard you've been looking at a few platforms and solutions, certainly there's open source things... There's lots of ways that you can go about this. You could use existing tools, you could set up kind of a notice for this particular thing... But that's not what you're talking about. Like, how do we track and manage incidents in like a historical, communicable way?

**Gerhard Lazu:** Exactly.

**Jerod Santo:** I don't know. We don't know the best way to doing this, or a good way... So what's a good way for listeners, if they have a great incident solution, or maybe they have one that they use at work but they hate it, like "Avoid this one"? Is it Slack, is it email, is it tweets? What's the best way for listeners to -- feed back comments on the episode page perhaps on the website?

**Gerhard Lazu:** Yeah, that is an excellent point. Yeah, so however you wanna communicate - via Slack, or even via Twitter, we are everywhere these days. Everywhere that works and it's still available...

**Jerod Santo:** \[laughs\] Everywhere where you can get an emoji rendered, we're there...

**Gerhard Lazu:** \[00:27:54.18\] Exactly. There are a couple of things here. For example, one thing which this reminded me is that we do not declare - and this is a bit of a chicken and egg situation, where we should absolutely manage the tokens on DNSimple site with something like for example Kubernetes (why not?), which continuously declares those. Now, obviously you still need a token that creates tokens. But if you have that -- we should have a token that it needs \[unintelligible 00:28:23.09\]

I think that's a bit interesting, because then what do you do from the perspective of security? It can't give itself access to everything, and then delete all the DNS records. That's not good. So some thought needs to go there... But the idea being is that even like with Fastly, for example, when we integrate, we still have manual things, manual integrations; we don't declare the configuration. That's something which I would like us to do more of... And maybe also have some checks that would -- I mean, if you don't have DNS or something isn't right, like in this case you don't have access to DNS, that's a problem, and you would like to know about it as soon as possible. So the token being deleted on the 19th, and the failure only happening two weeks later almost, end of June - that is not great, because it removes the moment that you've done something, which... Maybe it was me. Maybe I have deleted by mistake the wrong token. But I remember there were two... Who knows. Maybe I've seen two tokens when there was just one. It's possible. And then when that happened, it makes sense that two weeks later that this thing starts failing... But because it took so long for this failure to start happening, it was really difficult to reconcile the two and to link the two together.

**Jerod Santo:** Yeah, so where did those checks live in the system? Where would they live? Not in Grafana, I wouldn't think...

**Gerhard Lazu:** I don't know. I think it depends. In Kubernetes you declare the state of your system. Not just the state of your system, but the state of the systems that the system integrates with. So you can have providers... I know that Crossplane has that concept of providers, so it integrates with AWS, GCP... I don't think that it has a DNSimple provider, but we should have something that periodically makes sure that everything is the way it should be, and Kubernetes has those reconciling loops. It's central to how it operates. So to me, that sounds like a good place.

From a monitoring perspective, you can check that things are the way you expect them to be, but that is more like when there's a problem, you need to work backwards from that, "Where is the problem?" While if you try to continuously create things, and if it doesn't exist, it will be recreated, if it exists, there's nothing to do. That's more proactive, so I quite like that model.

**Adam Stacoviak:** What does instant management give a team though? Because I think this came about whenever you said "Well, hey--", Fastly was down, we didn't expect it to be down; a majority, if not all the responsibility tends to fall on your shoulders for resuming uptime, which is incident management, like a disruption in a service that requires an emergency response; you're our first and only responder. I suppose Jerod and I can step in in most cases, but you really hold the majority of the knowledge... Does incident management give you the ability to share that load with other people, that may not have to know everything you do, but can step in? What is incident management, I guess, breakdown to be? Is it simply monitoring and awareness, is it action-taking? Is there multiple facets of incident management?

**Gerhard Lazu:** It has a couple of elements... But the element that I'm thinking about based on your initial question was having the concept of a runbook. I know I have a problem - great, I'm going to communicate my problem. So what do I do? And you codify those steps in something which is called a runbook. For example, if Jerod had to roll the DNS, what would he do? How would he approach it? It didn't have to be me, but the problem is, as you very well spotted, is that I am the one who has the most context in this area, and it would take Jerod longer to do the same steps. Make files plural, we have how-to's.

\[00:32:00.08\] So how to rotate credential? This is a step by step process, like seven steps or four steps, however many it's now, how to basically rotate a specific credential. So we need something similar to that, but codified in a way that first of all - there's an incident; these people need to know about it, maybe including our listeners... Like, "Hey, we are down. We know we're down, we're working on it. We'll be back shortly." And then one of us, whoever is around - because maybe one of us is on holiday. And if I'm on holiday, what do you do? What are the steps that you follow to restore things? And as automated as things are, there's still elements... I mean, ROI. Not everything is automated, because it's not worth automating everything, or it's impossible.

**Jerod Santo:** Right.

**Gerhard Lazu:** So what are the steps that Jerod or even you can follow to restore things? Or anyone, for that matter, that has access to things. Anyone trusted.

**Adam Stacoviak:** Yeah.

**Gerhard Lazu:** And if it's that simple, then maybe we can automate that. Some things aren't worth automating, because if you run it once every five years - well, why automate it? The ROI just doesn't make sense.

**Adam Stacoviak:** Yeah. It seems like it's pretty complex to define for a small team. Maybe easier for larger teams, but more challenging for smaller things.

**Gerhard Lazu:** But I know that there are incident management platforms out there... Can we name names? I have to... So one of them is FireHydrant. The other one is Incident.io. I looked at both, and I know that FireHydrant for a fact has the concept of runbooks. So we could codify these steps in a runbook. I don't know about Incident.io, but if they don't have one, or if they don't have this feature, I think they should, because it makes a lot of sense. If we had this feature, we wouldn't need to basically find a way to do this or work around the system. The system exists and facilitates these types of approaches, which make sense across the industry, not just for us. So even though we're a small team, we still need to communicate these sorts of things somehow, and in a way that makes sense. And if we use a tool --

**Adam Stacoviak:** What's an example of a runbook then? Let's say for our case, the Fastly outage, which is a once-in-five -- they're not gonna do that in the next five years. I'm knocking on wood over here... It would be smart of them--

**Gerhard Lazu:** Remember my certainty? 100% uptime?

**Adam Stacoviak:** Next week Fastly goes down.

**Gerhard Lazu:** Exactly. Don't jinx it. \[laughs\]

**Adam Stacoviak:** Well, given their responsibility and size, they're probably gonna be less likely to do that again anytime soon is kind of what I mean by that. But even that -- would you codify in a runbook a Fastly outage?

**Gerhard Lazu:** I think I would--

**Adam Stacoviak:** Now you might, because you have this hindsight of recent events... But prior to this you probably wouldn't. So what's a more common runbook for a team like us?

**Gerhard Lazu:** I think I would codify the incidents that happened. For example, if we had an incident management platform, when the Fastly incident happened, I would have used whatever the platform or whatever this tool offered me to manage that incident. And as an outcome of managing the incident, we would have had this runbook. So I wouldn't preemptively add this.

**Adam Stacoviak:** I see. So it's retrospectively.

**Gerhard Lazu:** Exactly.

**Adam Stacoviak:** An incident happens, it doesn't happen again.

**Gerhard Lazu:** Well, it may...

**Adam Stacoviak:** Gotcha.

**Gerhard Lazu:** Yeah, "This is what I've done to fix it." And anyone can follow those steps. And maybe if something for example happens a couple of times, then we create a runbook. But at least Jerod can see "Oh, this happened six months ago. This is what Gerhard did. Maybe I should do the same." I don't know. For example, in the case of this DNS token, what are the steps which I'm going to take to fix it? So capturing those steps somewhere... And it's a simple form; literally, as I do it, I do this, and I do that." And that is stored somewhere and can be retrieved at a later date.

**Adam Stacoviak:** I guess then the question is when the incident happens again, how does somebody know where to go look for these runbooks? I suppose if you're using one of these services it gets pretty easy, because it's like "Hey, go to this service", and there's a runbooks dashboard, so to speak.

**Gerhard Lazu:** Yeah. I think it's just specific to the service.

**Adam Stacoviak:** \[00:36:04.06\] Yeah. And you go there and you're like "Oh man, there's never been a runbook for this. I'm screwed. Call Gerhard" or "Call so-and-so", you know?

**Gerhard Lazu:** Yeah, I suppose... But I think if you operate a platform long enough or a system long enough, you see many, many things, and it just progresses to the point that -- let's imagine that we did have multi-cloud. Let's imagine that Linode was completely down, and the app was running elsewhere. We wouldn't be down. Okay, we would still be in a degraded state, but things would still be working. If we had multi-CDN, Fastly is down - well, Cloudflare is up. It rarely happens that both are down at the same time. So then it's degraded, but it still works, so it's not completely down.

In this case, for example, we didn't have this, but right now if the backend goes away, if everything disappears, we can recreate everything within half an hour. Now, how would you do that? It's simple for me, but if I had to do it maybe once and codify it, which is actually what I have in mind for the 2022 setup, I will approach it as if we've lost 2021 and I have to recreate it. So what are the steps that I will perform to recreate it? And I'll go through them, I'll capture them...

**Adam Stacoviak:** Yeah, because 2021 is kind of a standard in your codifying the current golden standard.

**Gerhard Lazu:** The steps that I would take, yes, to set up a new one.

**Adam Stacoviak:** Yeah, exactly, to get to zero, where you're at right now; this is ground zero.

**Gerhard Lazu:** Yeah. In 2021, what I set up was fairly easy to stand up, because I changed these things inside the setup, so that for example right now the first step which it does - it downloads from backup everything it doesn't have. So if you're standing this up on a fresh setup, it obviously has no assets, no database, so the first thing which it does - it will pull down the backup. From the backup, it will pull everything down. And that's how we test our backups.

**Adam Stacoviak:** Which is smart, because the point of backup is restoration, not storage...

**Gerhard Lazu:** Exactly, exactly. We test it at least once a year now.

**Adam Stacoviak:** You know, what's important to mention here is that this may not be what every team should do. In many cases, this is exploration on our part. This is not so much what every team out there should do in terms of redundancy. We're doing it in pursuit of 1) knowledge, and 2) content to share. So we may go force new ground on the listeners' behalf, and hey, that's why you're listening to this show... And if you're not subscribed, you should subscribe. But we're doing this not so much because 1) our service is so important that it must be up at all times, it's because the pursuit of uptime is kind of fun, and we're doing it as content and knowledge. So that's I think kind of cool, not so much that everyone should eke out every ounce of possible runtime.

**Gerhard Lazu:** Definitely.

**Adam Stacoviak:** In some cases it's probably not wise, because you have product to focus on, or other things. Maybe you have a dedicated team of SRE's, and in that case, their sole job is literally uptime, and that totally make sense... But for us, we're a small team, so maybe our seemingly unwavering focus on uptime is not because we're so important, but because it's fun for content and knowledge to share.

**Gerhard Lazu:** And it makes us think about things in a different way. So if you try something out, why are you trying something out? Well, we have a certain problem to address, and it may be a fun one, but we will learn. So it's this curiosity, this building curiosity. How does Incident.io work? How does FireHydrant work? What is different? What about Render? What about Fly? They look all cool... Let's try it out. What would it mean to run Changelog on these different platforms?

Some are hard, some are dead simple, and sometimes you may even be surprised and say "You know what - I would not have guessed that this platform is so much better, so why are we complicating things using this other thing?" But you don't know until you try it. And you can't be trying these things all the time, so you need those innovators that are out there. And if for example we have something stable that we depend on, something that serves us well, we can try new things out in a way that doesn't disrupt us completely. And I think we have a very good setup to do those things.

**Adam Stacoviak:** \[00:40:05.26\] This reminds me of Sesame Street. Have either of you watched Sesame Street?

**Gerhard Lazu:** Not that I remember...

**Jerod Santo:** No.

**Adam Stacoviak:** Of course. Everybody knows Sesame Street. But my son is a year and a half old, so he watches Sesame Street... But something that Hailee Steinfeld sings on the show is "I wonder... What if... Let's try..." That's kind of what we're doing here, "I wonder how this would work out if we did this. What if we did that? Let's try."

**Gerhard Lazu:** I think that's how all great ideas start. The majority of the ideas may fail, but how are you going to find the truly remarkable ideas that work well in practice? Because on paper everything is amazing, everything is new, everything is shiny. How well does it work in practice? And that's where we come in. Because if it works for a simple app that we have, which serves a lot of traffic, it will most probably work for you, too. Because I think the majority of listeners -- I don't think they are the Googles, or the Amazons. Maybe you work for those companies, but let's be honest, it's everybody part of that company that contributes to some massive systems, that very few have.

**Adam Stacoviak:** It's all about gleaning, really. We're doing some of this stuff, and the entire solution, the way we do it may not be pertinent to the listener in every single case, but it's about gleaning what makes sense for your case. The classic "It depends" comes into play.

**Gerhard Lazu:** Oh, yes...

**Adam Stacoviak:** This makes sense to do, in some cases. Does it work for me? It depends. Maybe. Maybe not.

Break: \[00:41:31.29\]

**Gerhard Lazu:** So I would like us to talk about the specifics, three areas of improvements for the changelog.com setup. Not for the whole year 2022, but just like over the next couple of months. Top of my list is the incident management, so have some sort of incident management... But that seems like a on-the-side sort of thing, and we've already discussed that at some length.

The next thing is I would like to integrate Fastly logging. This is the origin, the backend logging with Grafana Cloud. The reason why I think we need to have that is to understand how our origin, in this case Linode (LKE) where changelog.com runs - how does the origin behave from a Fastly perspective, from a CDN perspective. Because that's something that we have no visibility in.

So what I mean by that is like when a request hits Fastly, that request has to be proxied to a node balancer running in Linode, and that has to be proxied to Ingress NGINX running in Kubernetes, and that has to be proxied to eventually our instance of Changelog. How does that work? How does that interaction work? How many requests do we get? How many fail? When are they slow? Stuff like that. So have some SLO's uptime as well, but also how many requests fail, and what is the 99th percentile for every single request? That's what I would like to have.

**Jerod Santo:** \[00:44:00.28\] How hard is that to set up?

**Gerhard Lazu:** Not too hard. The only problematic area is that Fastly doesn't support sending logs directly to Grafana Cloud. So I looked into this a couple of months ago, and the problem is around authenticating the HTTPS origin where the logs will be sent... Because it needs to push logs, HTTP requests. So how do we verify that we own the HTTPS origin, which is Grafana Cloud? Well, we don't. So we don't want to DDOS any random HTTPS endpoint, because that's what we would do if we were to set this up.

So we need to set up - and again, this is in the support you get with Fastly, what they recommend is you need to set up a proxy... Imagine you have NGINX, it receives those requests which are the Fastly logs (it will be HTTPS), and then it proxies them to Grafana Cloud. So that would work.

**Jerod Santo:** Where would we put our proxy?

**Gerhard Lazu:** Well, we would use the Ingress NGINX on Kubernetes, the one that serves all the traffic, all the Changelog traffic.

**Jerod Santo:** Well, couldn't we DDOS ourselves then?

**Gerhard Lazu:** We could, if Fastly sends a large amount of logs... Yes, we could. Now, would we set another--

**Jerod Santo:** This is not a DDOS if it's ourselves. It's just a regular DOS.

**Gerhard Lazu:** Right. \[laughs\]

**Jerod Santo:** It's not gonna be distributed, it's just us. \[laughs\]

**Gerhard Lazu:** Well, it will come from all Fastly endpoints, I imagine...

**Jerod Santo:** That's true, it could come from lots of different Fastly points of presence...

**Gerhard Lazu:** Yeah. We could run it elsewhere, I suppose, but I like things being self-contained. I like things being declared in a single place. So to me, it makes most sense to use the same setup. I mean, it is in a way a Fastly limitation, and actually specifically Fastly and Grafana Cloud, the lack of integration that we have to work around...

**Jerod Santo:** Right.

**Gerhard Lazu:** But speaking of that, I know that Honeycomb supports Fastly logging directly... And one of the examples that Honeycomb has is the RubyGems.org traffic, which is also proxied by Fastly. So in their "Try Honeycomb out" you can play with the dataset which is the RubyGems.org traffic. So I know that that integration works out of the box. And that's why maybe that would be an easier place to start...

**Jerod Santo:** Just a place to start, yeah.

**Gerhard Lazu:** Yeah. But then we're using Grafana Cloud for everything else, so...

**Jerod Santo:** Right.

**Gerhard Lazu:** ...that's an interesting moment... Like, do we start moving stuff across to Honeycomb, or do we have two systems?

**Jerod Santo:** Right. That's like a little break in the dam, like a little water just starts to pour out... And it's not a big deal right now, on Grafana Cloud, right? Like, "Well, I've got just this little thing over here on Honeycomb..."

**Gerhard Lazu:** 99%, yeah.

**Jerod Santo:** It turns out pretty nice over there... And then it starts to crack a little bit, and more water starts to... And all of a sudden it just bursts, and Grafana loses a customer. That stuff happens. So we could also parallelize this, and we could simultaneously try to get Fastly and Grafana sitting in a tree, k-i-s-s-i-n-g... But their integrations -- because that would be great, right?

**Gerhard Lazu:** Yeah, that would be great. That is actually a request from us.

**Jerod Santo:** And that would probably be in the benefit of both Fastly and Grafana. That would be in both entities -- to their benefit. So maybe it's already in the works, who knows.

**Adam Stacoviak:** I would guess that it is.

**Gerhard Lazu:** Well, I would like to know, because then we could be not doing a bunch of work...

**Jerod Santo:** Then we could procrastinate till it's there...

**Adam Stacoviak:** Exactly, yeah.

**Gerhard Lazu:** But it's stuff like this, right?

**Adam Stacoviak:** Well, let's put an email feeler out. We've got some people we can talk to to know for sure... And then if it is in the works, and it's maybe on the back-burner, we can put some fire under the burner, because we need it, too.

**Gerhard Lazu:** Well, then we've hit another interesting thing, in that I really wanna try Honeycomb out. I've signed up, and I wanna start sending some events their way and just start using Honeycomb to see what insights we can derive from the things that we do.

\[00:47:49.08\] One of the things that I really wanna track with Honeycomb - and I wasn't expecting to discuss this, but it seems to be related, so why not... I wanna visualize how long it takes from git push to deploy. Because there are many things that happen in that pipeline, and from the past episodes, this is really important. This is something that teams are either happy or unhappy about. The quicker you can see your code out in production, the happier you will be. Does it work? Well, you wanna get it out there quickly. Right now it can take anywhere between 10 and 17-18 minutes. Even 20. Because it depends on so many parts. Circle CI, sometimes the jobs are queued. The backups that run - well, sometimes they can run 10 seconds more. The caches that we hit in certain parts, like images being pulled, whatever - they can be slower. Or they can be cold, and then have to be warmed up.

So we don't really know, first of all -- I mean, in my head I know what they are, all the steps, but you and Jerod don't know. What does the git push have to go through before it goes out into prod, and what are all the things that may go wrong? And then which is the area or which is the step which takes the longest amount of time and also is the most variable? Because that's how we focus on reducing this time to prod. And Honeycomb - they're championing this, left, right and center.

Charity Majors - I don't know which episode, but she will be on the show very soon. 15 minutes or bust. That's what it means. Your code is either in production in 15 minutes, or you're bust.

**Jerod Santo:** There was an unpopular opinion shared on Go Time. I can't remember who shared it, but he said if it's longer than 10 minutes, you're bust.

**Gerhard Lazu:** There you go.

**Jerod Santo:** So that 15 minutes is gonna be moving, I think...

**Gerhard Lazu:** It will be moving, exactly.

**Jerod Santo:** As the industry pushes forward, it's gonna keep going lower and lower, right?

**Gerhard Lazu:** Exactly.

**Adam Stacoviak:** Well, what is it that -- does every git push, which is from local to presumably GitHub in our case (it could be another code host), is there a way to scrutinize, like "Oh, this is just \[unintelligible 00:49:50.18\] and CSS changing to make that deployment faster"? You know, like it was not involving images or a bunch of other stuff... Like, why does a deployment of let's say -- let's just say it's a typo change in HTML, and a dark style to the page, for some reason. Whatever. If it's just simply CSS, or an EEx file change in our case, could that be faster? Is there a way to have a smarter pipeline? These are literally just an HTML and CSS update. Of course, you're gonna wanna minimize or minify that CSS that Sass produces, in our case etc. But 15 minutes is way long for something like that.

**Gerhard Lazu:** You're right. So the steps that we go through - they're always the same. We could make the pipeline smarter, in that for example if the code doesn't change, you don't need to run the tests. The tests themselves, they don't take long to run. But to run the tests, you need to get the dependencies. And we don't distinguish -- like, if the CSS changed, you know what, you don't need to get dependencies. So we don't distinguish between the type of push that it was, because then you start putting smarts -- I mean, you have to declare that somehow; you have to define that logic somewhere. And then maybe that logic becomes, first of all, difficult to declare, brittle to change... What happens if you add another path? What happens if, for example, you've changed a Node.js dependency which right now we use, and then we remove Node.js and we compile assets differently? And then by the way, now you need to watch that, because the paths, the CSS that gets generated actually depends on some Elixir dependencies, I don't know. I think esbuild, we were looking at that? Or thinking...?

**Jerod Santo:** You effectively introduce a big cache invalidation problem.

**Gerhard Lazu:** Yes.

**Jerod Santo:** \[00:51:41.26\] It's what you do. Cache invalidation is one of the hard things in computer science. So it's slow, but it's simple. It's like, "We'll just rebuild it every time." It's like, why does React re-render the entire DOM every time? Well, it doesn't anymore, because that was too slow, so it does all this diffing, and stuff. But there's millions and millions of dollars in engineering spent in figuring out how React is going to smartly re-render the DOM, right? It's the same thing. It's like, there's so many little what-if's once you start only doing -- and this is why Gatsby spent years on their feature, partial builds. Because building \[unintelligible 00:52:21.22\] which is static site generator - building a 10,000 page static site with Gatsby was slow; I just made up the word10,000, but... You know, 100,000, whatever the number is - it was slow, and so it's like "Well, couldn't we just only build the parts that changed?" Like what Adam just said. It's like "Yeah, we could." But then they go and spend two years building that feature, and VC money, and everything else to get that done. So it's like a fractal of complexity.

**Gerhard Lazu:** Yeah.

**Jerod Santo:** What I'm saying - there's small things you can do. You can get the 80% thing, and it works mostly; it doesn't squeeze out every performance, but it's a big -- so there's probably some low-hanging fruit we could do... But it's surprisingly complicated to do that kind of stuff.

**Gerhard Lazu:** And the first step really is trying to understand, these 15 minutes, first of all, how much they vary... Because as it says, sometimes they can take 20 minutes. Why does it vary by that much? Maybe, for example, it's test jobs being queued up in CircleCI. A lot of the time that happens, and they are queued up for maybe five minutes. So maybe that is the biggest portion of those 20 minutes or 15 minutes, and that's what we should optimize first.

**Jerod Santo:** Yeah, that's why I said there's probably some low-hanging fruit, and we could probably do a little bit of recon and knock that down quite a bit.

**Gerhard Lazu:** And that's exactly why I'm thinking, use Honeycomb just to try and visualize those steps, what they are, how they work, and stuff like that...

**Jerod Santo:** \[unintelligible 00:53:44.24\]

**Gerhard Lazu:** Exactly.

**Jerod Santo:** Good idea.

**Gerhard Lazu:** Second thing is -- and I think this can either be a managed PostgreSQL database, so that either CockroachDB or anyone that manages PostgreSQL, like one of our partners, one of our sponsors, I would like us to offload that problem... And we just get the metrics out of it, understand how well it behaves, what can we optimize, and stuff like that, in our queries. But otherwise, I don't think we should continue hosting PostgreSQL. I mean, we have a single instance, it's simple, really simple; it backups... It's not different than SQLite, for example, the way we use it right now... But it works. We didn't have any problems since we switched from a clustered PostgreSQL to a single-node PostgreSQL. Not one. We used to have countless problems before when we had the cluster. So it's hard is what I'm saying; what we have now works, but what if we remove the problem altogether?

**Adam Stacoviak:** I remember slacking "How can our Postgres be out of memory?" It's like \[unintelligible 00:54:46.01\]

**Gerhard Lazu:** Yeah, the replication got stuck, and it was broken, it just wouldn't resume, and the disk would fill up crazy. Crazy, crazy.

**Adam Stacoviak:** And that's the reason you would wanna use a \[unintelligible 00:55:00.06\]because they handle a lot of that stuff for you.

**Gerhard Lazu:** Exactly. And if it can be distributed, that means that we can run multiple instances of our app, was it not for the next point, which is an S3 object store for all the media assets, instead of local disk. Right now when we restore from backups, that's actually what takes the most time, because we have like 90 gigs at this point... So restoring that will take some number of minutes. I think moving to an S3 one and a managed PostgreSQL, which we don't have -- we can have multiple instances of Changelog. We can run them in multi-clouds... I mean, it opens up so much possibility if we did that.

**Jerod Santo:** Putting all of our assets into S3 would be like "Welcome to the 2000's, guys."

**Gerhard Lazu:** I would be, right? \[laughter\] This is exactly right, yeah.

**Jerod Santo:** \[00:55:47.11\] "You've now left the '90s..." Maybe I should explain why we're using local storage. Some of it is actually just technical debt. This was a decision I made when building the platform back in 2015, around how we handle uploads. Not image uploads, but mp3 uploads... Which is one of the major things that we upload and process. And these mp3's are anywhere from 30 to 100 megabytes. And once we have them, we also want to do post-processing, like post-upload processing on the mp3's. Because we go about rewriting ID3 tags, and doing fancy stuff based on the information in the CMS, not a pre-upload thing. So it's nice for putting out a lot of podcasts, because if Gerhard names the episode and then uploads the file to the episode, the mp3 itself is encoded with the episode's information without having to duplicate yourself.

So because of that reason, and because I was new to Elixir and I didn't know exactly the best way to do it in the cloud, I just said "Let's keep it simple. We're just gonna upload the files to the local disk." We had a big VPS with a big disk on it, and were like "Don't complicate things." So that's what we did.

**Adam Stacoviak:** \[unintelligible 00:57:03.01\]

**Jerod Santo:** And know full well -- I mean, even back then I had done client work where I would put their assets on S3. It was just because this mp3 thing and the ID3, we ran FFmpeg against it, and like "How do you that in the cloud?" etc. So that was the initial decision-making, and we've been kind of bumping up against that ever since. Now, the technical debt part is that our assets uploader library in Elixir that I use is pretty much unmaintained at this point. It's a library called Arc, and in fact the last release was cut version 0.11, in October of 2018. So it hasn't changed, and it's a bit long in the tooth. Is that a saying, long in the tooth? I think it is. And I know it works pretty well, I've used it very successfully, so it served us very well, but there's technical debt there...

So as part of this "Well, let's put our assets on S3" thing, I'm like "Let's replace Arc when we're doing this, because I don't want to retro-fit Arc." It does support S3 uploads, but the way it goes about shelling out for the post-processing stuff, it's kind of wonky, and I don't totally trust it... So I would want to replace it as part of this move, and I haven't found that replacement. Or do I write one? etc.

So it's kind of like that, where it's slightly a bigger job than reconfiguring Arc just to push to S3, and doing one upload and being done with it. But it's definitely time... It's past time, so I'm with you. I think we'll do it.

**Gerhard Lazu:** Yeah, I think that makes a lot of sense. This just basically highlights the importance of discussion these improvements constantly. So stuff that keeps coming up, not once, but two years in a row - it's the stuff that really needs to change. Unless you do this constantly, you don't realize exactly what the top item is. Because some things just change. It stops being important. But the persistent items are the ones that I think will improve your quality of software, your quality of system, service, whatever you have running, and it's important to keep coming back to these things... Like, "Is it still important?" "It is." "Okay, so let's do it." "Well, you know what - let's just wait another cycle." And then eventually you just have to do it. So I think this is one of those cases, and we have time to think about this, and what else will it unlock? If we can do this, then we can do that. And "Is it worth it?" Maybe it is.

I think in this case, this S3 and the database, which is not managed, have the potential of unlocking so many things for us. Simplifying everything...

**Jerod Santo:** Well, the app becomes effectively stateless, right?

**Gerhard Lazu:** It does. How amazing is that...?

**Jerod Santo:** And then you're basically in the cloud world, where you can just do whatever you want, and life is good.

**Gerhard Lazu:** That's exactly it.

**Jerod Santo:** And then face all new problems you didn't know existed. \[laughs\]

**Gerhard Lazu:** True.

**Adam Stacoviak:** Does this Arc thing also impact the chaptering stuff we've talked about in the past, Jerod? Wasn't that also part of it?

**Jerod Santo:** \[00:59:58.02\] There is an angle into that... So for the listeners, the chaptering -- so the mp3 spec... Actually, it's the ID3 version 2 spec, which is part of the way mp3's work - it's all about the headers - supports chaptering. ID3 v1 does not. ID3 v1 is very simple. It's like a fixed frame kind of a thing... And ID3v2 is complicated more so, but it has a lot more features, one of which was chaptering, which - chapters are totally cool. You know, Ship It has roughly three segments - well, we could throw a chapter into the mp3 for each segment, and if you wanna skip to segment three \[unintelligible 01:00:31.27\] you could. We would love to build that into our platform, because then we can also represent those chapters on the web page. So you can have timestamps, and click around... Lots of cool stuff.

Unfortunately, there's not an ID3v2 Elixir library, and the way that we do our ID3 tags right now, by way of Arc, is with FFmpeg. So we shell out FFmpeg, and we tell FFmpeg what to do to the mp3 file, and it does all the ID3 magic, and then we take it from there.

So the idea was - well, if we could not depend on FFmpeg, first of all, that simplifies our deploys, because we don't have a dependency that's like a Linux binary \[unintelligible 01:01:08.28\] But we'd be able to also do chaptering, so we'd get some features, as well as simplify the setup. And that is only partially to do with Arc. Really, that has to do with the lack of that ID3v2 library in Elixir. That functionality does not exist in native Elixir. If it did, I could plug that into Arc's pipeline and get that done currently. If FFmpeg supported the feature, we wouldn't need it anyway, we would just do it in an FFmpeg, but it does not seem like something that they're interested in... Because mp3 chaptering is not a new whiz-bang feature. It's been around for a decade, maybe more.

So the fact that it doesn't exist in FFmpeg, which - if you've ever seen, it's one of the most feature-full tools in the world. I mean, FFmpeg is an amazing piece of software, that does so many things... But it doesn't support mp3 chaptering. So it's kind of a slightly related, but different initiative that I've also never executed on.

**Adam Stacoviak:** I'm just wondering if we had to bite the Arc tail off, or whatever that might seem like, to also get a win, along with that... And the win we've wanted for years essentially was being able to bake in some sort of chaptering maker into the CMS backend, so that we can display those on page, as you said, or in clients that support it... Because that's a big win for listeners.

**Jerod Santo:** Totally.

**Adam Stacoviak:** And for obvious reasons, that Jerod has mentioned, that's why we haven't done it. It's not because we don't want to, it's because we haven't technically been able to. So if this made us bite that off, then it could provide some team motivation... Like, we get this feature too, and we get this stateless capability for the application. It just provides so much extra.

**Jerod Santo:** Yeah. And one way I thought that we could tackle that, which doesn't work with our current setup, is we could -- I mean, we render the mp3's or we mix down the mp3's locally on our machines, then we upload them to the site... We could pre-process the chapters locally. We could add the chapters locally to the mp3, then upload that file... And if we could just write something that reads ID3v2 - it doesn't have to write it - we could pull that out of the mp3 and display it on the website, and that would be like a pretty good compromise. However, when we do upload the file, when you pass it to FFmpeg and tell it to do the title, and the authors, and the dates and all that - well, it just completely boils away your local ID3 tags, so it overwrites it.

**Gerhard Lazu:** \[01:03:35.15\] As I was listening to you talking about this, one of the things that it reminded me of is the segments in YouTube video files, which sometimes I really like, because I can skip to specific topics really easily... So rather than having fixed beginning, middle and end, you can have topic by topic and you can skip to the specific parts. I would love to see that in Changelog audio files.

**Jerod Santo:** That's the feature right there. You use it however you wanna use it. The obvious way is like "Well, there's three segments. I'll put three chapters in." But if you were in charge of doing your own episode details and you could put the chapters in the way you would want to - yeah, you could make it really nice, just like that.

**Gerhard Lazu:** I would love that.

**Jerod Santo:** And for clients that support it, it is a spectacular feature. Now, a lot of the popular podcast apps don't care. Spotify is not gonna use it. Apple Podcasts historically has not used it. So they basically don't exist. But the indie devs tend to put those kind of features in... Like the Overcasts, the Castros, the -- I'm not sure Pocket Casts is indie anymore... But those people who really care about the user experience of their podcast clients - they support chaptering. And for the ones that do, it's a really nice feature.

**Gerhard Lazu:** Yeah, I love that. The other thing that I would really like is when I write blog posts, I could just drag and drop files as I do in GitHub, and just get them automatically uploaded to S3... Because right now, I have to manually upload them...

**Jerod Santo:** You and me both.

**Gerhard Lazu:** ...and then referencing them is so clunky.

**Jerod Santo:** I would love that feature.

**Adam Stacoviak:** You're exposing our ad-hocness. Come on now. \[laughter\] We literally open up Transmit, or whatever you use to manage S3 buckets...

**Jerod Santo:** And we upload them.

**Adam Stacoviak:** ...and we drag and drop them, and then we Copy URL... But first you have to make it readable by the world - don't forget that part - and then put the link into your blog post.

**Jerod Santo:** No, you can globally configure that on the bucket, so that all files are readable...

**Gerhard Lazu:** Yes, we do have that.

**Adam Stacoviak:** Really? I didn't know about that.

**Jerod Santo:** But it still sucks... \[laughs\]

**Adam Stacoviak:** It does suck.

**Gerhard Lazu:** But one thing which I do for these episodes, for the Ship It ones - I take a screenshot... By the way, I took very good screenshots of all three of us... And I put them in the show notes.

**Jerod Santo:** I saw that. You're the first one to do that... So again, you're pushing the envelope of Changelog podcasts, and you're probably pushing us towards features that I would normally just completely put off over and over again.

**Gerhard Lazu:** See what happens when people come together and talk about what could improve?

**Adam Stacoviak:** Yeah.

**Jerod Santo:** Well said.

**Gerhard Lazu:** So what I propose now is that we go and improve those things, and come back in ten episodes. How does that sound?

**Jerod Santo:** Sounds good.

**Adam Stacoviak:** Kaizen!

**Jerod Santo:** Kaizen.

**Gerhard Lazu:** Kaizen.
