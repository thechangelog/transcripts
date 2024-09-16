**Matt Toback:** And hello! I'm Matt Toback, returning. Welcome to Grafana's Big Tent, the podcast all about the people, community, tools, and tech around observability. Today I'm here with Dee Kitchen and Alex Forster. Alex, hi.

**Alex Forster:** Hi. Thanks for having me.

**Matt Toback:** And Dee...

**Dee Kitchen:** Hello. I'm always here.

**Matt Toback:** \[laughs\] What -- what did I do wrong?

**Dee Kitchen:** Nothing.

**Matt Toback:** Alright. Alex, you're the engineering manager for the DDoS feature team at Cloudflare.

**Alex Forster:** Yeah, I am. And so what that means is I deal with the parts of Cloudflare's DDoS mitigation systems that are more customer-facing, meaning control of how mitigations work, as well as visibility into what our mitigations are doing.

**Matt Toback:** And Dee Kitchen. Dee Kitchen, you are VP-Eng for the databases at Grafana, which means Mimir, Loki, Tempo and Pyroscope. But also, you and Alex have a backstory. What's going on there?

**Dee Kitchen:** Yeah, well, I was the engineering manager at Cloudflare for the DDoS feature team.

**Matt Toback:** So is Alex the new you, or the v2 you?

**Dee Kitchen:** No... Alex -- they split me into two, and Alex is one of the two.

**Matt Toback:** Alex, is that true?

**Alex Forster:** Yeah. So we got a little bit big for just one engineering manager, and we split ourselves into kind of a platform versus customer-facing teams. And so now I'm a brand new engineering manager, but prior to that, I had been an IC at Cloudflare for six and a half years, and I was one of the first members of our official DDoS team, that built most of what we continue to use today to automatically detect and mitigate DDoS attacks.

**Dee Kitchen:** We always had to tell people what it did, because otherwise it sounds like the DDoS team is the one that's launching them. \[laughter\]

**Alex Forster:** Yes.

**Matt Toback:** How did you -- if you were to be at a pub somewhere, how would you describe what you did?

**Dee Kitchen:** I'd start by saying "I protect against DDoS." And that's the context \[unintelligible 00:02:23.03\] But if you just say DDoS team, it sounds like "Are you the good guys, but on our side launching attacks back?" It's like, "No, no..."

**Matt Toback:** Are you white hat, or no? Is that still the phrase?

**Dee Kitchen:** Something like that. I'm not sure we're actually infosec, though.

**Matt Toback:** Actually, did you have with there - and Alex, I'm curious, when you talk about this now, is there kind of a cute metaphor that you use for someone who's not familiar with the term DDoS, to articulate what it is that you do?

**Alex Forster:** Yeah, I have a few of them, actually. I would say you can imagine a DDoS attack being like one of those protests where a bunch of cars go really slowly on a highway, to slow down traffic... Or maybe using the post office to pretend to send letters from places that you didn't actually send letters from, or things like that. There's a lot of aspects that are pretty tough to understand without using metaphors to the real world, because DDoS mitigation really requires a lot of understanding of internet engineering, and scaling, and things like that, which are, even for most kind of line of business programmers, not common knowledge.

**Matt Toback:** Dee, did you have any?

**Dee Kitchen:** Pithy ways to describe it? No...

**Matt Toback:** Pithy... Come on... \[laughs\]

**Dee Kitchen:** Well, it's successful if you've denied service. That's it. That's the entire criteria. There's so many complex ways to do that, whether it's a flood, or whether it's ping of death, and sort of a small thing that just succeeds in sort of being amplified... But if you can deny service, you succeeded. So it's an interesting thing, because there's the idea of bad traffic and good traffic, and it's so simplistic... But you just need to identify the bad and stop it, and let the good through. But if you just stop everything, it's basically still a successful attack, because it's still denied service.

**Alex Forster:** Yeah, it's very much a "DDoS is in the eye of the beholder." If I'm running my tiny WordPress site that can only get 20 requests per second before the database falls over, then I can be DDoS-ed very easily. Whereas if we're talking about the CloudFlare homepage receiving 20 requests per second, that's nothing. That couldn't conceivably be thought of as a DDoS attack. So it's really -- it's challenging in understanding the context of the traffic in order to decide whether it is an attack, or just normal spikes in load.

**Matt Toback:** So perhaps that could be a good segue into what we're actually talking about today. Dee, how would you describe what we're talking about today?

**Dee Kitchen:** Well, I came up with this topic, and it was mainly because it's one that's been lingering for more than a decade. But I was thinking of Fail2Ban. Fail2Ban is a primitive program; it's a Python program that looks at your logs files and it looks at the failed authentication attempts for your SSH logs, or web application, or whatever. And then it does some action.

Like, if it spots three failures from a given IP in a 50-minute window, it will drop an IP tables ruling, maybe for 45 minutes, so the attacker goes away, and it causes this backoff. It slows everything down. And it led me to realize that Fail2Ban is really interesting, because it's an observability signal where it's directly coupled to a control mechanism and action. And it actually doesn't provide you a dashboard. It doesn't provide you sort of an alert so much. It might send you an email for notifications... But it's just tightly coupling control to observability. And that's the thing that I became a little bit fascinated with.

\[00:06:06.24\] And then I pondered a lot - most of my job at Cloudflare doing the DDoS protection is also into that camp of that control mechanism tied directly, coupled directly to the sort of observability mechanism. And I've found that interesting, because we're in observability, where you go beyond monitoring into "Have a look at everything, be able to answer any question." But I think there's more beyond that, which is "Well, what do you do when you can ask any question?"

**Matt Toback:** Do you think that there's a component of observability that because it came from monitoring, that it was less either owned by a different group, or is less tactical?

**Dee Kitchen:** I do think there's a passive element to observability... Like the myth that we would go and sit and look at a dashboard all day. And I think that exists, and we kind of want to avoid that. What we want to do is you shouldn't need to go to the dashboard. And that's what we've been saying at Grafana for a while. You alert on it, act on it, trigger the actual workflow.

But then in ops, when you're doing ops and you're on call, when you receive the same, I don't know, critical alert or warning alert, and you take the same action, you should automate it away. And then you never look at that dashboard again. It slowly breaks in the background and you didn't notice, because it's silently just getting on with its job.

**Alex Forster:** So denial of service is all about -- I mean, it's self-evident... Shouldn't there be this deep fear about making automated observability tools, because then if you end up blocking traffic yourself as a result of an ill put tool? Maybe there is, and there should be substantial fear surrounding this.

**Dee Kitchen:** Classic battle story here. Almost everyone with Fail2Ban at some point goes "I'm going to test this", and immediately kicks themselves out of their own sort of SSH, and can't then connect in, because it's like "Does this work? F5, F5, F5. Oops... I am now blocked."

**Alex Forster:** It's like "Wait, what do you do?"

**Dee Kitchen:** Because you're testing it on the web layer. But when you block yourself, you go "Right, I'm going to connect." But actually, Fail2Ban put an IP tables rule in, so you can't connect. You have to come up with something else now. So yeah, there's definitely a -- it's a foot gun; you're definitely getting a gun where you can blow your foot off, and definitely there's a risk and fear there. But I think the benefits are great, because 'hey, you can sleep at night and not do the ops.

**Matt Toback:** Alex, does that resonate?

**Alex Forster:** Yeah. So to frame this in specific terms of DDoS detection and mitigation, we often have other teams inside Cloudflare, or even maybe customers or press come to us and say "Have you been tracking this attack campaign?" or "Have you seen some nation-state doing this?" And the answer is always "Well, we haven't been looking, so we're going to have to go look." We would consider it a failure on our part if we had to have teams staring at graphs 24/7 in order to pilot our DDoS mitigation systems, because that would mean that they are not reliable enough to work on their own without a human needing to babysit them. It is hard to get there. It's not an easy task to get to a place where you can trust your systems to react correctly without human intervention, but you can get there. And when you do, it is a great place to be.

**Matt Toback:** Are there obvious places where this has already been happening for the last 10 and 15 years? I guess aside from Fail2Ban, but just things that are just intrinsic now; we don't even blink, we don't even think twice.

**Dee Kitchen:** Yeah. I think there's a -- when you're on call, there's two types of pain you can feel. One is the pain that you caused. And this is you wrote code and you didn't anticipate something. It's got some flaws, the quality is not there, or whatever. And the incidents that arise are something that you had direct control over. And so you could have done something about that and you can avoid it.

\[00:10:09.29\] But the second class is potentially far more interesting in this sort of automatic feedback loop control mechanism world, which is the things are outside of your control. And one of the reasons I wanted Alex on this call was the DDoS landscape is exactly that, right? You're getting paged at 2am, but it's not because your software is low-quality. It's because someone, something outside of your control is doing something.

And an example of this can go back like 40, 50 years. Networks. Network is a two sort of actor minimum, a sort of set up whereby your side works only if the other side works as well. So you both have to be in agreement to make this work. And then you've got to be able to sort of repair and route around things as automatically as possible. Some of this is handled by the protocols. But at some level, you're down to like the BGPs, or anything else, and you've got to be able to actually say "I detect this, I'm monitoring this, I see this. And now as a consequence of this new change, I'm going to deploy a different rule, and that's going to handle the repair."

So networking has actually had these really tight feedback loops where the output is fed in as an input to an action continuously. And that's how that networking is as resilient as it is. Any network engineers listening to this are just like "It's not resilient. It's all duct tape over God knows what."

**Matt Toback:** I just -- I looked this up, so I want to do a quick quiz. Maybe we could even just put a little theme song in here. Do you know when the first known distributed denial of service attack occurred?

**Alex Forster:** I'm not going to look it up, I'm going to guess.

**Matt Toback:** Don't look it up. Don't look it up. Unfair. Only I'm allowed to look it up, because I'm the dummy in the room.

**Alex Forster:** I do not know, but I don't think it would have been in the eighties. It's kind of my gut feeling in the early nineties...

**Dee Kitchen:** I'm going to go for late eighties.

**Matt Toback:** Late eighties? What else is happening around that time? Fashion? No.

**Alex Forster:** I feel like the internet really took off around '94. That's when you kind of had millions of people on the internet. So prior to that, if there were things that could technically be called DDoS attacks, I wouldn't assume they would matter that much. I would assume that most of the internet prior to that time is dial in, download some data, disconnect. Or research universities.

**Dee Kitchen:** We'll end up at protocols, right? Because TCP was kind of hard to launch a massive attack on at that point. Your own computing power couldn't produce 10k, 20k requests per second off of a single machine. So you're probably going to be down to a some ICMP sort of thing, or some UDP thing. So reflection attacks in UDP off of a DNS name server - that's been around forever. That feels like that could be mid nineties or late eighties.

**Alex Forster:** Alright, so then let's settle on the year, and then let's settle on a prize. What should we pick as the prize?

**Dee Kitchen:** As a prize? Maybe your microphone.

**Alex Forster:** No. A prize, not a sur-prize Alright, fine. No prize.

**Dee Kitchen:** I'm going to go for '92.

**Matt Toback:** '92. Alex?

**Alex Forster:** Uh, '95...

**Matt Toback:** Well, I've asked Google Gemini, and it said that the first DDoS attacked occurred in the year 2 BC. \[laughter\] This is not an AI answer... "First known distributed denial of service attack occurred in 1996, when Panix, now one of the oldest internet service providers, P-A-N-I-X, was knocked offline for several days by a SYN flood, a technique that has become a classic DDoS attack."

**Alex Forster:** I was so close.

**Dee Kitchen:** I was not. It's even TCP.

**Matt Toback:** \[00:13:54.10\] I was going to ask, is that an ICMP? What is a SYN flood?

**Dee Kitchen:** No, a SYN flood - it's the TCP handshake. It's basically the first part. And you don't even have to have the right stuff. You can generate a flood and you don't even have to put the right IP address in. You just send out a load of "Let's start handshakes" and some machine somewhere will go "Alright", and then reply to fake IPs.

**Matt Toback:** And we're smarter now.

**Dee Kitchen:** No. \[laughter\]

**Matt Toback:** Alex, can you please tell us why we're not smarter now? And then we can move on to the real topic here.

**Alex Forster:** Yeah. And it's a good question. The internet fundamentally had no security. So if you imagine - one of my post office analogies... You send a letter to someone else, and you put your return address in there in case for whatever reason the letter needs to be returned... IP packets are basically the same thing. You say what IP address you want to send the packet to, and you say what IP address the packet came from. There is nothing inherently stopping you from saying that that packet came from an IP address that it didn't actually come from. This is called spoofing, packet spoofing, or sometimes IP header modification. Most residential ISPs - probably nearly all residential ISPs - will stop you from doing this at a bit later in their networks. But there are also plenty of ISPs, typically more commercial ISPs, that you buy transit from, who if you ask will let you do this IP header modification and send packets pretending to be from IP addresses that you don't have control over.

**Matt Toback:** And is that because there's a good reason for it?

**Alex Forster:** There's sometimes a good reason for it. For example, Cloudflare, we need to do this. We onboard a lot of our customers' IP space. We don't own that IP space, but we do need to be able to send packets as if we did own that IP space. So there are legitimate reasons to do it. Unfortunately, there are also a lot of malicious reasons to do it, particularly because it makes attacks sometimes harder to stop, and other times harder to trace, and potentially bigger, because you can leverage reflection...

So there's a lot of incentive to use this functionality in malicious ways, because it allows the attackers to achieve attacks that are larger than they otherwise could be/would be, with just the infrastructure that the attacker controls.

**Matt Toback:** Well, I feel like I've taken this off-topic a bit in the history of DDoS'es... Let's get back on track. I'm sorry, I'm sorry. So observability equals control. Dee, I understand that -- well, actually I heard from you, Dee, but Alex, when you hear that, before we go even any deeper, this idea of leveraging automation and not being afraid of what automation can do as it relates to this... I don't know enough to know whether this is true. Is Dee completely pulling the wool over our eyes?

**Alex Forster:** As to whether it's possible, or whether it's a good idea?

**Matt Toback:** As to whether it's advisable.

**Alex Forster:** Oh, I think it's definitely a real thing. I think it's definitely advisable if you can pull it off. It is tricky to get right. There are a lot of potential foot guns. If, for instance, you automate the takedown of the majority of your capacity, whether that is network capacity, or compute, or things like that, then you cause yourself an outage. So there's a lot of guardrails that need to be put in place if you're going to automate based on real-time information. That being said, it's the only way to get to really high availability. It's the only way to really go from three or four nines to five and beyond nines; you need to be able to react faster than a human could. And the only way to do that is with automation.

**Matt Toback:** I see. But in order to do that, you need to be able to control... When we talk about control, you have to have a serious span of control as far as where you can make changes. So does that become challenging from an organization standpoint?

**Alex Forster:** Absolutely. It depends on the types of systems you run. But the larger you are, the larger a unified control plane gets.

**Dee Kitchen:** \[00:18:01.24\] Actually, Alex mentioned that if you want to go from three to four to five nines, that you have to automate. And it's worth looking at that. So there's a website, uptime.is. And if you go to uptime.is and you type in 99.9, it tells you how much downtime you can have in a month. And three nines is 43 minutes, or thereabouts. And suddenly at four nines, when your manager turns around and goes "Three nines is not good enough. We need four nines." What that means is that you only get four minutes of downtime per month. Now, most on call can't answer the actual page. And the page has taken like 30, 60 seconds to actually be sort of enacted. And then it's come through to you and that took a little bit. And then you notice; you have to notice that and you have to answer. Then you have to like get your laptop out, or turn your computer on, and quickly rush over... And you can't actually respond in the four minutes that you've got in that one month.

So as soon as you go from three nines to four nines, you've got to remove humans from that decision-making response process, which means you have to automate the hell out of this now. All of these observability signals are now available, not for a human to understand, but for a human to automate, so a computer can understand it. Because you really want a machine to do this for you, even with the foot gun risk. What do you think, Alex? Sound hypothesis?

**Alex Forster:** I think DDoS is, again, a great example of this. \[unintelligible 00:19:26.15\] targets a two to three-second mitigation time at best. I believe our SLA is higher, but in reality we try to kick in within seconds, not minutes. And of course, you want your DDoS mitigation to kick in quickly, but imagine how you would achieve that if you had to have humans triaging these DDoS attacks. There would be some SOC analyst receiving an alert that says "We think something's fishy." The SOC analyst would have to look the customer up, they would have to figure out what was weird about the traffic, figure out how to surgically just block the bad stuff, but keep the good stuff unaffected... And it would just be impossible. There wouldn't be enough time to keep that really high SLA. That SOC analyst wouldn't have enough time to respond in order to keep a really high, aggressive SLA.

**Dee Kitchen:** No, I think that's spot on. This is what I actually think. I actually believe that -- the other way to put it, right? Going back to that first thing I said; if we don't automate, then we're going to be interrupted. We get our operation hell, our on-call shift from, you know, wherever. And the more we automate, not just that you get more reliability - that's the only way to get the reliability - but actually just the calmer your life is as an ops person. We should be -- I think my entire point here is that we should be seeking out where to automate continuously, everywhere. And there are signs of this all over the place, but a lot of engineers don't realize. AWS auto-scaling is just that automation based on those signals. Fail2ban is an automation based on our signal. And whatever these are, they're all protecting us, protecting our sleep. An important thing.

**Matt Toback:** Yeah. What are some other ones that come to mind?

**Dee Kitchen:** My own website... \[laughs\] Which I managed to keep online despite some extraordinary behavior from people at times.

**Matt Toback:** Is this our first Big Tent public challenge to knock down a website?

**Dee Kitchen:** Well, actually, you'd involve Alex as well, because I still use CloudFlare. \[laughter\]

**Matt Toback:** Alright.

**Alex Forster:** Just causing all of us headaches...

**Matt Toback:** The reach and the breadth of the Big Tent audience. We shouldn't say the website. I fear, Dee, that by the time this goes live, that --

**Dee Kitchen:** Someone will figure it out. Yeah, so I still run two things. I run forum platforms, and I run some sort of other sites, and stuff. But on the forum platform, I run 300 sites, and one of them is quite big. And when I was on a holiday this year, I was there with some friends, and - it was a work holiday, so it's a bit hard to mention colleagues...

\[00:22:12.18\] And whilst I was there, I got a DDoS attack, and it was 130,000 HTTP requests in about a five-second window. And it was interesting; it knocked me straight offline. But it took me ages to figure out that actually the commonality of all the traffic was this HTTP header that I wasn't logging. And the frustration at that point... Because not only wasn't I logging it, but I didn't have a simple, trivial sort of programmable end point that I could block it. Now I had to write code to block it.

**Matt Toback:** So if we were to pause in this moment, and Alex, you were -- let's say Dee calls you in a panic on holiday, and says... And let's pretend Dee doesn't have the deep knowledge. What are the ways that you would start to step through, helping Dee think about this, the 130,000 requests that instantly knocked things offline?

**Alex Forster:** Yeah, this would be where observability is key. Oftentimes you need to research these things historically. For instance, if the attack is intermittent - it starts, it stops, it starts again a few hours later, it stops - and you're not able to catch it in real time, you're not able to SSH in and packet capture, or things like that... So you need to be recording what you need to know ahead of time, before you know that you need it. So you need to think ahead, to make sure you're recording anything you could possibly need, even before you see what the attack is doing.

**Matt Toback:** Or... Time travel.

**Dee Kitchen:** Or time travel. Yeah, that's the other way out. \[laughter\]

**Matt Toback:** That'll solve everything. Nothing could go wrong then.

**Dee Kitchen:** But this is why I think these things are observability... Because observability is that you record enough that you can answer all questions, and not just monitor some things that you already know you're going to ask about. And this is also where -- hey, Alex, can you tell us about the Rapid Reset thing? Because that had a similar problem, didn't it?

**Alex Forster:** That did, yes. So for people who aren't aware of this very industry-specific event, there was -- around the end of last year, there was a new vulnerability found in the HTTP protocol itself. This wasn't a vulnerability in any one particular implementation of HTTP2, it was a vulnerability in multiple implementations, that sort of stemmed from the way HTTP2 was specified. Essentially, what it allowed people to do, just at a very high level, was to periodically issue an HTTP request, then cancel it; then issue it again, then cancel it. And that allowed attackers to achieve an incredibly high request per second rate, 10+ times higher than the previous world record. It was just massive, massive attacks were being seen all across the internet.

Now, because this was a protocol level of vulnerability, our typical observability stack operates at a much higher level than the protocol itself. We don't look at HTTP frames, we look at HTTP requests as a concept. But because this attack was manipulating the frames, the control frames themselves, we lost a lot of the more rich visibility that we would normally have, that would allow us to mitigate these attacks.

So we ended up having to quickly build some visibility into the HTTP protocol layer itself, in order to get a better handle on this attack. And it was something that we had never needed to look into before, until we suddenly did, because suddenly, someone was abusing the protocol, and that had never happened before.

In retrospect, we probably always should have had this lower level observability, just in case someone figured out how to abuse our specific implementation, or whatever; just some low-level concept.

**Matt Toback:** But you didn't know what you didn't know.

**Alex Forster:** \[00:25:53.04\] We didn't know we needed it until we needed it, exactly.

**Matt Toback:** How long did that take, from realizing that there was basically a black hole, and that you had to put in some observability there? How long did that take?

**Alex Forster:** Longer than we would have liked. Because again, because we had such poor visibility, we weren't immediately even aware that this was a protocol vulnerability itself. This was a zero-day vulnerability that was hitting us, right? It wasn't a situation where it was known yet, so it was very tough to even understand what was happening.

Eventually, we were able to pull in the teams that work on our HTTP reverse proxy software, and have them explain to us that we weren't understanding what was happening, because we didn't have the visibility we would need... But before then, it was a pretty rough ride. We had to really work hard to mitigate without all of the information that we needed.

**Matt Toback:** And at that point, was there really anything you could have done?

**Alex Forster:** There were things we could do. We fell back to source-based blocking in the most egregious cases... Because for this particular type of attack, you didn't actually need that much compute. And so there weren't actually that many devices sending these requests, and that made it relatively easy to block them in other ways... But we never really want to block IPs if we can prevent it, because sometimes those IPs are shared. Sometimes they're residential customers who are being unwittingly used as proxies, or things like that. So we've really tried to not block based on source IPs, unless we absolutely have to. And fortunately, once we were able to build that visibility out, we were able to apply more granular mitigations, so that we didn't need to block on IPs anymore.

**Matt Toback:** When you put these things in place, you either put observability in place, or you start to have these mitigation, or these automatic mitigations in place, is there a long tail of people trying these things anywhere, or everywhere, all the time? Or does it really just feel like a whack-a-mole, to where this one thing is popular for a bit, and then it disappears, and then there's a new thing that's popular?

**Alex Forster:** So it's both. There are these tools that have been out there forever, like Low Orbit Ion Cannon, which people still to this day use. And it's very ineffective against most DDoS mitigation systems, but systems that aren't protected by DDoS can still affect. Those are the less experienced individuals who are performing attacks.

When you get up into the more experienced, more advanced individuals, we do see the pattern of rotation, where they find something that kind of works, and then it gets discovered and blocked by all the major vendors, and then, again, they find something else that kind of works, and the major vendors figure that out... So at the cutting edge of this industry there is a whack-a-mole game going on. But the vast majority of DDoS mitigations are pretty box-standard. Pretty standard tooling, pretty standard methods, that are well understood.

**Matt Toback:** Dee, you kind of chuckled, I think, at one point when I asked that... Was that in relation to what I was asking, or something else?

**Dee Kitchen:** Well, I've got a cat trying to get my attention... The tail keeps coming onto the screen, and it's just started headbanging the microphone, so that was amusing to me.

**Matt Toback:** Your cat is DDoSing this podcast.

**Dee Kitchen:** But no, Alex is spot on. There are these generators... These are the tools that someone smart once wrote, to launch a certain type of attack. But a lot of other people don't really know how to write such a thing, so they package it. So a lot of attacks actually come from packaged generators, which means once you've actually figured them out and blocked them, you're everything that all of those various tools are actually using. But yeah, there's always systems unprotected. There's always more that can be done.

And the Rapid Reset thing was really interesting, because most people are aware of PCAPs, packet captures, and that you can use a tool, a Wireshark, to load the packet capture and actually look at it. And when you first view one of these as an engineer who doesn't know some of the protocols and everything else, it highlights it all, and you're just like "I don't know what's good or bad." But that's your view. You've got packet captures everywhere, and in encrypted stuff what you're mostly seeing is TLS frames and everything else.

\[00:30:06.27\] And then you have your HTTP view of the world, which is typically HTTP logs. Everyone's familiar with the NGINX or Apache logs. But between those, there's so many layers that people just forget about... Whether it's the TCP handshake, whether it's the TLS handshake, whether it's the HTTP session being established on top of the actual connection protocol, and you've got the streams within that, the frames within the streams... There's so much that is not observed, but you still need to control it at every single level.

**Matt Toback:** So then Alex, when this happens, and then you go to the other team - what did you say, the lower level team?

**Alex Forster:** Right, the team who develops the protocols.

**Matt Toback:** Thank you. So then you go to the protocols team and say "Okay, we need to instrument this, or we need to start watching this." Do you also follow up and say Now that this has happened, can you think of five more things that we should be observing, that we're not?" Because you invent something that you might be able to break in the future, and let's just start watching it just in case.

**Alex Forster:** The answer is yes. The answer is very much --

**Matt Toback:** And would you like to list those off right now for everyone? No... \[laughs\]

**Alex Forster:** When we're caught in a situation where we don't have observability of something that we didn't think we needed, but actually did, it always makes us step back and say "Where else are our blind spots? Where else could we be collecting data that may come in handy in the future?"

This calls back to what Dee said in the beginning... You always want to have a balance. You don't want to collect data that you are confident that you won't need. But then how do you really ever be confident that you won't need that data? So it's usually a gut check, and it's usually a "Can you conceivably imagine needing certain data to troubleshoot, or observe in the future, or not?" And when you get caught in a situation where you weren't observing something you should have been, then yeah, of course, it makes you go and reevaluate any of the other things that you've hence to forth decided weren't worth observing, and think about whether they really are.

**Matt Toback:** Dee, we talked about feedback loops when we were prepping for this, or starting to talk about this... But now, informed by the conversation so far, how do you explain that, or how do you articulate the feedback loops to people that might be dealing with a version of this themselves?

**Dee Kitchen:** Well, there's quite a lot... Basically, anything that you want to control, you need to observe. And when you observe something, there's nearly always a question of whether there's a control mechanism that you want to apply to it. And we've focused this conversation so far on DDoS. That's because we've got a couple of experts in the room, right? So obviously, we've done that. But it's worth saying that it applies to far more. We mentioned networks as well. But it also applies to things that people of almost any industry can talk about, which would be something like costs. On one hand, what do you observe? You might understand that you observe your team makes X dollars per year. Maybe they make $10 million a year. That's great. So now you know your revenue. But do you have control over that? And probably not, right? There's probably a salesperson. They have control over revenue. They're able to sell. Not a skill that I or many other engineers have. But they're able to get out there and sell, which is an extraordinary ability.

But what can we control with costs? Well, there's probably the TCO, right? And are we observing our TCO? Like, how much does our compute actually cost? How much does our storage actually cost? Should we delete those orphaned files that we're just like "I can't be bothered, because they don't take up much space, and they only cost me a dollar a month." That's true now, but in years time, when you've got like half a billion orphan files, maybe you should care about deleting them.

So I do think when we think about an angle like cost, there's still stuff we can observe. Like, there's still things that we should pay attention to. And then there's still things that we can automate based on that, that give us control over that sort of thing that we were observing. So in the case of TCO, maybe you would observe it and see that you've got idle compute. That's the most common waste of money in the Kubernetes world.

\[00:34:09.19\] Maybe you look at it and you sort of go "We're paying for the storage and we're only using a fraction. Let's reduce the number of it, or prune our dead files.' Hard delete the soft deletes that were done two years ago, things like that. And to me, still the feedback loop exists. Still the automate, automate, automate absolutely everything that you can observe, such that you get control out of it.

**Matt Toback:** I guess I hadn't thought about that... So even if someone is fully bought into this, what's the term that I've heard people talk about? ...like, putting developers on a data diet, or that they can't log everything because it's far too expensive... This is like that on steroids, isn't it? That we're talking about at a network level. Or Alex, when you think about the sum total of everything you could be observing, that could be absurdly expensive, right?

**Alex Forster:** Absolutely.

**Matt Toback:** How do you think about that? Or how do you think about the value of what's worthwhile and what's not, when you have no idea what's worthwhile and what's not until you do?

**Alex Forster:** There are compromises to be made there. It really helps to have a business case. And obviously, in CloudFlare's case, DDoS protection is a core value prop. So for us, it isn't too hard to get resources if we need them, but we still need to justify why we need to record things.

So let me give you one example... Our DDoS mitigation systems act entirely on traffic inbound to our network. So it's very hard for us to justify recording information from a DDoS perspective leaving our network, because it's not something we need... Even though in some cases, maybe for research purposes, it would be interesting. So those sorts of things, even when your service is a core part of your business, those sorts of considerations do come into play.

**Matt Toback:** Got it. Dee, how do we think about it here?

**Dee Kitchen:** Tensions, trade-offs. On one hand you want to observe everything... The hilarity of turning around to the Loki team... And Loki have got this, obviously, the database for recording log files. And it's one of the cheapest, best databases for recording system logs and everything else. And it's phenomenal, and it's so powerful. And so they log everything. And then at some point in time, we sit there and we ask a different question. How much does the Loki team logging cost us? And how much does it cost us relative to -- because we get a number out of that, and you're just like "Okay, it costs us this amount of dollars." Is it good or bad? So maybe we can view it for a prism of relative to the revenue for the service or the cost to run that service. So we start saying "As a percent of the cost of running the service, how much is the observability costing us?"

We were surprised Loki was like 15% of the cost of running the service was logging, because the freedom of logging everything and it working is so joyous, because you can debug everything so fast. And the trade-off and the tension starts to become "How would you actually log the right things?" And that goes back to Alex's point of you don't know what you need or not, but you've got to make judgment calls. And sometimes you turn around and see something you are logging and go "Maybe I will never, ever need that."

And the question about control is an interesting one, because it gives you a context to ask "Is this valuable?" Are you ever going to use this to drive something? Would you use it to scale something out? Does it tell you some signal? If it doesn't, I absolutely don't need it.

**Matt Toback:** So everything we've been talking about so far has been predicated on things within your sphere of control. Can, or should you use third-party data, and can, or should you automate based on it?

**Dee Kitchen:** \[00:37:54.21\] My answer to this is yes and yes. But the second part, a little bit more nuanced. Incidents where you feel a loss of control, which is harrowing, when a DNS provider goes down - everything's always DNS... Or when --

**Matt Toback:** It's always DNS... \[laughs\]

**Dee Kitchen:** I don't know, your hosted Kubernetes, managed Kubernetes has an issue... These are terrifying when they happen, and you want some degree of control of - hey, you should not just be a bystander, but you want to gain that agency.

Should it trigger you to actually sort of move your traffic loads elsewhere? So yes, you should absolutely be paying attention to it. But there's a second aspect, which is the whole SLO sort of thing. You might be measuring your system internally.

**Matt Toback:** Have there been times - and this is for you, Dee, or Alex - where there's been another team that you're counting on, either the data, or you've built into your automation, and they've broken it for you? Because it's one thing if it's out of the company... Because then you could say "We didn't have a reasonable expectation." But have you had internally APIs or otherwise break in ways that were completely explosive and terrible?

**Alex Forster:** We always try to manage our dependencies.

**Matt Toback:** \[laughs\] I feel like immediately it's like a very level answer...

**Alex Forster:** We always try to manage our service deprecation in a sane way... But I will say that sometimes things fall through the cracks, and maybe unmaintained services, or just things that nobody really remembered were around will go out, and they suddenly become a critical dependency for much more important work. And those sorts of situations tend to come up when we don't have observability on things that we should have had observability on. It's not necessarily that things are being actively taken away from us, it's more like things go away because there was some misunderstanding in the organization. Or because --

**Dee Kitchen:** Well, let's talk about a different answer to that same question, which is - we don't get to observe someone else's inner workings. We could have a partner who's providing a service, and we don't know how they actually provision, setup or anything else. And all we've got is status page. Not a great signal, but that's all we've got.

**Matt Toback:** Because we know that -- \[laughs\]

**Dee Kitchen:** All we've got is status page... And so we want to observe whatever we can of them. And we can observe what we believe, the sort of the SLA, the communication boundaries. But should we observe their status page? You can almost imagine the danger of doing so... Because the number of times when there's full outage and you go to the status page and it's all green...

**Alex Forster:** Yeah. It'd be like "I don't know what you're talking about. Everything is fine."

**Dee Kitchen:** So, yeah. So I think there are definitely boundaries to what you can observe and trust of a third party. You have to treat it differently. You can't trust the data.

**Matt Toback:** So I was thinking we could also... Dee, you talked about your holiday experience, but do either of you have a favorite DDoS experience, that you've either read about online, or that you went through?

**Dee Kitchen:** A favorite? What defines favorite in this?

**Matt Toback:** One that just tickled your brain, and had intrigue, and wonder, and you're like "How did they do that?" and "Wow, that is absurdly massive."

**Dee Kitchen:** There is almost no way we can talk about them.

**Matt Toback:** Really? They're extra-secret?

**Alex Forster:** Because they usually don't go well in the beginning, right? So it's like -- yeah, they're really interesting.

**Dee Kitchen:** They tend to involve state actors. They tend to be political. They tend to be complex. Usually, in a DDoS attack, you can put in place a mitigation, and it will be effective. And that's it. Drama over. Move on with our lives. The interesting ones, from my perspective, the ones that I was thinking of, were the ones that - they don't go away. Because they come back later that day, different. And that only happens when there's a full command and control, with an observability system behind it, and you've got sort of state actors on the other side who have a good team. They're very good engineers. And for it to come back, they have a very, very creative thinking, or a toolbox that they're working through. And when they linger for weeks on end, you're in a really, really interesting place.

\[00:42:24.24\] So these things do happen, but obviously you can't talk about them. No one can talk about them, because they mention certain states. A lot of it's a hypothesis. And the vast majority of DDoS protection anyway is not about attribution. It's about stopping it. You want to stop the bleeding. It's the standard incident procedure. It's not about going "Such and such is to blame." That's not very useful, especially when Alex mentioned earlier the IP spoofing, the ability to actually just mask things, send traffic via different exit points on the net... So you're not even truly confident of where they're coming from. Hijack sort of botnets, and hijack other systems... You can't trust what you're seeing, but you can have a very good sense of "This is not just a dumb attack."

**Alex Forster:** So I have to go back to Rapid Reset as an answer to that question. It is probably to date the most interesting event in my career, partially because I was personally involved in the discovery, along with Amazon and Google, and partially because it had such a novel and effective technique behind it.

**Matt Toback:** Is there any scenario in which we could just have the listeners of this podcast pinky swear promise not to talk about it, and we could just -- we could tell them?

**Dee Kitchen:** No.

**Alex Forster:** Unfortunately...

**Matt Toback:** Alright. Well, Dee, I always respect you for being straightforward with me. I'll ask this differently... And now I feel like I'm getting into like the TMZ of DDoS... But what resources do you think are just perpetually on, that someone started a DDoS attack on some VM somewhere 10 years ago, and it still continues to run? Is there always just a certain amount of traffic on the internet that is just wildly -- and then just being abated on other sides?

**Dee Kitchen:** If you want to ever see this, go onto OVH, or Linode, or IWS, or whatever, and spin up an Ubuntu machine with no defenses, and turn on every single piece of logging you can, and wait. Do nothing, just wait, and see how soon the sort of credential stuffing attacks on the SSH are. See how soon you just get some sort of probes and masks just running across the internet.

I spoke to someone about five years ago, and they had wind farms, and they've got these Windows machines on every single turbine. They've got a Windows machine at the bottom. And they've all got their own public IP addresses that are on the internet. And they were saying this, and I'm just terrified. I'm just like "You really want to do something there. You want to make it so that no one can just sort of probe this thing", that it in fact reaches out to a sort of control plane that you've got, and you've got sort of really good security to get in and out, sort of mutual TLS or whatever. And then it's like "Why? No one's going to target us." And it's like, you don't comprehend... Because you can scan the entire IPv4 sort of range, and common ports, in minutes; not hours, minutes. And when you can do that, you don't have to care what the target is. This is exactly the same with a lot of the sort of encryption attacks, sort of the malware, sort of CryptoLocker type of things. They just scan. They're just permanently scanning everything, continuously. And there's so many bad actors doing this. Effectively, it's a background noise to the internet.

**Matt Toback:** So say someone listens to this, they're bought in conceptually, you've given them some perspective about how much more observability should play a role in this. I'll start with you, Alex, and then Dee after that, but... What is something very practical of where one would start, if they're running their own network, running their own endpoints service? Where is a practical place to start?

**Alex Forster:** \[00:46:08.13\] Cover your basics. Your most important systems should be logging, and if they're network gear, you should be collecting SNMP counters, if they are Linux services you should be collecting CPU and memory usage data, and you should be storing it. These are still, even in giant distributed systems, some of the most common places we go to troubleshoot, just these very basic things.

So if you have that, you've really gotten a lot out of the way. If you are specifically developing software, and you have control over what sorts of metrics a system is outputting, you're going to want to put some thought into what you want to observe. You're going to want to put some thought into any place where you could conceivably imagine something spinning out, or taking too long, or things like that, and adding instrumentation there. It will make your life as a developer much easier. But if you're a systems administrator or network engineer working on third party or otherwise software that you do not control, make sure you have the basics there.

**Dee Kitchen:** Ability to get PCAPs, ability to get logs off of absolutely every machine will help. But let's go for the most common ones. The vast majority of engineers are actually web developers, and they're producing websites of some kind. I would argue for the existence - and I'm kind of arguing that Nginx, Apache, CADI, so forth, don't do a great job at that - of being able to have a gateway ahead, sort of internet-facing to your website stuff, where you can log every single aspect of a HTTP request, and everything that's going on. And that provides a control plane there as well.

Now, since this doesn't exist, I'd actually argue just go put yourself on the free tier on Cloudflare, or go look at Fastly, or go look at Akamai, or whatever fits your business and your use case and your budget... But you need the observability and the control plane, basically in one, ahead of your service. And decoupling them is going to put you at risk. So I'd say the easiest thing to do - hey, I work at Grafana... But I do say sort of like go spin up one of these free tiers and get the observability and control basics in place.

**Matt Toback:** And then really trying to tie this off with where we started, there's the equals control; there's the automation aspect. So you get this in place, you start to see it. Now connect the dot to me as far as where you start automating, or how you start automating.

**Dee Kitchen:** Well, a simple way is a rate limit. Most people don't really realize that a rate limit is one of these mechanisms. It takes a signal, it counts it, just like the Fail2ban one at the very beginning of the conversation, and when it exceeds some threshold - Fail2ban was three SSH authentication failures from an IP address within a given time; when it exceeds a threshold, so I don't know, maybe more than a hundred requests per second is wild... Maybe if you are running a tiny WordPress site, more than 10 requests per second is wild. Figure out what your threshold is for normal, and set the rate limit above, and that's your first automated sort of defense. And if that never fires - great. That five minute costs you nothing. But it will fire.

**Matt Toback:** Alex, anything you'd add there from your perspective?

**Alex Forster:** I would fully endorse that, I think. Having a positive security model, which includes rate limiting, and includes firewalling off things that shouldn't be accessible, that may mean routes to your web applications or ports on your server, or things like that, are really the low-hanging fruit in terms of this question. There's a lot of pretty relatively simple things you can do to harden yourself and protect yourself from these sorts of problems, whether they be malicious or just overload due to a surge in legitimate traffic.

\[00:49:56.06\] Either way, a service outage is a service outage, and being able to understand what normal is, so that you can enforce it, you can enforce that you won't allow your systems to go out of the range of what is normal, is really just the most significant and probably easiest thing you can do to harden yourself up. The rest of it gets more complicated, and perhaps less sort of ROI, but sometimes useful... But if you have just basic rate limiting and a basic positive security model in there, that you've used some sort of information that you've collected to come up with, that's the key. The key is to understand what these rate limits or these blocks should be in order to implement them in a way that won't infect your good traffic.

**Dee Kitchen:** Alex just mentioned positive security model, but we need to explain what that is. The default model on the internet, which presumes trust in everything is good and was not built for security, is allow everything unless something is explicitly denied. And that's crazy. You actually need to switch this more towards "Deny everything, unless it is explicitly allowed." And when you do that, when you tighten it up and now record all of your denies, the number of attacks, the number of malicious sort of things that happen where they hit you in some negative way first, and you could have stopped them at that point before they then hit you in the other way that eventually worked. So that idea of going towards positive security model is really, really positive. It's really, really strong. It's a baseline.

That said, most engineers don't know what URIs they serve. They don't know what volume of traffic is good. Reasonable though, most people can sort of understand that a single web server is not doing more than 20,000 requests per second. And if you walk around with that number in your head, you can immediately go "If it's above like a few hundred requests per second on a single server, and I am not a huge website, that's a good safe rate limit."

**Matt Toback:** Sure. But then even I take that and using probably the observability you already have, or these metrics that you already have been collecting, use that as a stepped approach to informing what's normal, and how you should make decisions around that. And of course, there's going to be outliers, but that can be the first places where you start.

**Dee Kitchen:** Yeah. There's another weird thing... I had a manager once, the CTO, and he would come up to me and he'd ask me in the corridor, he'd go "Hey, is everything good at the moment? Is everything okay? Nothing wrong is going on, is there?" It's a terrifying question, because you can't possibly answer yes to that... Because what if he knows something that you don't know? What if someone's escalated it, and what if \[unintelligible 00:52:43.00\] has got some secret knowledge here that I'm unaware of?" So it's immediately just like --

**Matt Toback:** It's a trap.

**Dee Kitchen:** "Let me find out..." But going off and writing dashboards that show you how to answer yes to that is a really good way of highlighting most of the observability of a system to the point where you can confidently say "Nothing is wrong. We know what normal is." And it's a good way to lay a foundation to being able to spot bad.

**Matt Toback:** Well, anything unsaid about this topic? Any resources, anything that people should read, people should go deeper? How do you remain informed and how do you continue to get smarter on this as time goes on? Both of you.

**Dee Kitchen:** The thing I would say is it sounds like an arcane art where you have to know lots of things about lots of different systems at different levels, and therefore it's impenetrable and no one could ever do it, and it's "Oh my God, you must have trained to be this." What I would say is at Cloudflare for the DDoS team and for other people I've seen in InfoSec, very few people had training in this. Most had curiosity that was boundless. And by asking questions and following those sort of threads, you eventually can knit together sort of a full... Where was I going with that metaphor? A full quilt of knowledge. \[laughter\]

**Matt Toback:** A nice pair of socks.

**Dee Kitchen:** Yeah. \[laughs\] But yeah, I think curiosity is everything. I think asking "How did that happen?" And this is the same with any incident on call, right? It's not enough to go "When we scale up, it solves the problem." Do you understand what happened and why? And if you go down that rabbit hole, we become better engineers.

**Alex Forster:** Yeah, I think I agree with that completely. There are two forcing functions that are going to make you get observability into your systems. One of them is pride and curiosity in yourself as an engineer, and the other is angry customers yelling at you, and telling you you need to fix what you run. I would suggest being the former, so that when the latter happens, you're prepared. But it really is going to boil down to "Yes, it takes some work." I don't think the work is as much as people think it is... And it will pay off in the long run, even if you don't know exactly when. So having a curious mind into these observability spaces is really an all around positive for you as an engineer.

**Matt Toback:** Sadly, that's all the time we have for today. Thanks to our special guests, Alex and Dee, and we'll see you next time on Grafana's Big Tent!
