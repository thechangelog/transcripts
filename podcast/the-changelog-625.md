**Jerod Santo:** Well, we are here with Ash Jeffs, originally from Benthos, at least when we first heard of you, and now at Redpanda... And now on the Changelog. Welcome to the show.

**Ashley Jeffs:** Hey, thank you for having me.

**Adam Stacoviak:** You've arrived, with that awesome chair.

**Ashley Jeffs:** I'm here, in my commanding chair.

**Jerod Santo:** That is a commanding chair. I feel like maybe we're your subjects at this point.

**Ashley Jeffs:** It gives me more authority than the hosts.

**Jerod Santo:** \[laughs\] Yeah. I feel like you should take charge here and just tell us what we're going to talk about.

**Adam Stacoviak:** Yeah. What's the show about?

**Ashley Jeffs:** The camera angle is as if you're on my lap, which was intentional.

**Jerod Santo:** That's cute. It's diminutive. I do want to give you props, because I've actually used your previous content for future content, which you might not know about... And that is this. When you were on GoTime, our Go programming language podcast, which has been retired and it now lives on spiritually through Fallthrough... Back in '21 we used to share unpopular opinions on that. You had a great one, which was you thought that all people that take Twitter polls are idiots, or something along the lines of...

**Ashley Jeffs:** It was meta. I tried to be clever about it.

**Jerod Santo:** You were trying to hack -- because what we would do is we would take the opinions, put them on Twitter, on a poll, and find out whether or not they're actually unpopular. And so you went meta and you said "If you take a Twitter poll, your opinion doesn't matter. Nobody cares. You should go outside." Something like that. And that was like a popular -- it ended up being popular on Twitter, which I thought was hilarious. So then I took yours, and I had to come up with one later, because I was a guest on the show... And mine was basically I just inverted yours, and I assumed it was a dead ringer, because yours was so popular; this one must be unpopular. So I just took the opposite stance of you... It turns out they also agreed, so it foiled my plans.

**Ashley Jeffs:** Yeah... A good social experiment, but we both fumbled.

**Jerod Santo:** Yeah. We both failed to have an unpopular opinion.

**Adam Stacoviak:** It's hard to have an unpopular popular opinion. I find that it's challenging for me.

**Jerod Santo:** It's hard once you explain it.

**Adam Stacoviak:** Yeah.

**Jerod Santo:** It's easy in the headline to actually be unpopular, in the poll quote... But then when you actually explain it -- except for that one. That one should have been a dead ringer.

**Ashley Jeffs:** I don't know... I feel like people get it and they just want to ruin my good time. They don't want to give me the win.

**Jerod Santo:** Yeah. Fair. I think people just see my opinions and they tend to agree with them, so that's why mine was popular...

**Adam Stacoviak:** Same.

**Ashley Jeffs:** The thing is, I definitely have opinions that are unpopular, but I think if I shared them in that segment, I'd be very dissatisfied with just a normal "Oh, I don't like hexagonal architecture." Like, if I just came with something bland, then I would walk away from that thinking "Yes, maybe it was an unpopular opinion, but I could have done something big. Iould have done something--"

**Jerod Santo:** You did. It was big, it resonated, it got remixed... It ultimately failed, but you know, go big...

**Ashley Jeffs:** It benefited society as a whole, but not me.

**Jerod Santo:** That's right.

**Adam Stacoviak:** Did this help you at all with your acquisition?

**Jerod Santo:** \[laughs\] His is unpop?

**Adam Stacoviak:** That's right.

**Ashley Jeffs:** Yeah, actually it was part of the materials when we were negotiating it. They wanted the rights to my unpopular opinions going forward; because they can't buy my prior unpopular opinions.

**Jerod Santo:** \[00:08:14.13\] Right. Those are yours. But now if you say one today, we're going to have to get permission.

**Ashley Jeffs:** So don't get any unpopular -- only deal exclusively unpopular opinions from me on the show, please.

**Jerod Santo:** Fair.

**Adam Stacoviak:** Well, thankfully we've had Alex on the show before, Alex Gallego. I believe that's how you say his last name. Gallego?

**Ashley Jeffs:** I just call him Alex.

**Adam Stacoviak:** Just call him Alex, yeah. Had him on the podcast on Founders Talk a while back, talked through his journey... I don't know if you listened to that or not, Ash, but if you haven't, and you're a fan of Alex - you may be a fan of Alex. That was a pretty good journey to Redpanda.

**Ashley Jeffs:** Yeah, it's very counter to mine, I think, because mine's very fumbly and clumsy, and I just kind of accidentally ended up where I am... Whereas his was very up and coming.

**Adam Stacoviak:** You'd be surprised.

**Ashley Jeffs:** Well, the Redpanda part, the kind of like beginnings of Vectorized, and stuff like that - that's very... You can tell he knew where he was going. Like, he had a goal where he was going to go for it. Whereas for me, I didn't really know what I wanted to do anyway. I was just doing stuff that I kind of enjoyed, and then accidentally stumbling upon the next bit. It's very different. But we're quite similar, in general. We've got kind of similar backgrounds, obviously. He lives in a different country...

**Jerod Santo:** That is different.

**Ashley Jeffs:** Which tends to be a different experience.

**Jerod Santo:** Both your names start with A...

**Ashley Jeffs:** Yup. We've actually discussed that at length...

**Jerod Santo:** Oh, really? I don't know how long you can actually discuss that particular bit...

**Ashley Jeffs:** It comes up a lot. Anytime we're interacting with a third person, they usually go "Hang on a minute. Your names... Have you realized?" And then we have to go into it again.

**Jerod Santo:** Yeah. I'm so predictable. Well, let's go way back before we get to Redpanda and Alex, because there's a lot more to your stumbling around before that, right? Maybe let's talk data streaming. I mean, Benthos is how you got there. Kafka, data streaming... I don't know. How'd you get into this whole mess?

**Ashley Jeffs:** So before I started Benthos as a project, I was working at a company that was just doing stream processing. It wasn't really a word that they would have used at the time. They would have just called it -- I don't know, like event streaming, or something. Just data engineering. It wasn't really a big thing. It was like 2013-ish kind of times, where Kafka did exist... Spark existed, if I remember right. Everybody was using Hadoop and saying "Big data. Big, big data." And what they were doing is they were basically selling the social media fire hoses of several social medias. And what we would do is kind of enrich the data. So there was lots of cool stuff added on top, like filtering. Customers would have their own rules, so we had like gigabytes of customer rule logic to filter the fire hoses through... And then all these various feeds that we had to fan out. And there was like enrichments, and like masking, and these various other stream processing concepts. And they just had this massive architecture, so I had loads of time to play around with that.

I was quite junior-y. I wasn't like a full junior engineer. I'd had a job before that, but I was still quite -- I was green. And that kind of -- I did consider myself to be just a junior learning the ropes. But then I eventually got to the point where I was kind of looking around thinking like "All the services here kind of are bad, for various reasons." Not in terms of like they'd been badly designed. They were brilliant pieces of software. But because the industry was so new, there was loads of stuff that was just not particularly well understood, or documented back then.

\[00:11:58.02\] So things like delivery guarantees were kind of a weird concept. Like, we had the terms at least once, and things, but we didn't really have many services similar to Kafka. I suppose RabbitMQ was another popular one at the time, where you actually have proper acknowledgements.

And the idea of the acknowledgement being at the source of data was kind of battling constantly against the idea of like having a high throughput, low latency streaming services. So we had like ZeroMQ all over the place, and everything had to be super-high throughput. But we also considered ourselves to be like a strong delivery guarantee service. And it was just -- it didn't really add up, in practice or in theory.

**Jerod Santo:** Tradeoffs, right? Aren't there tradeoffs?

**Ashley Jeffs:** Yeah, exactly. You can't just throw things over the wire without a response, some sort of acknowledgement, without having a compromise in delivery guarantees. But the idea of that actually being a formal understood thing... I still think people get confused about it all the time, in all sorts of places. There's ways that you can have strong delivery guarantees, and then ruin that by adding just some extra piece to your software, or some extra thing in the pipeline, that again, kind of goes under the radar. And there's all these other stream processing concepts... But also just the idea of like microservices back then were quite a new thing. People were working out "What does a good microservice look like?" So things like metrics logging, and the way that the config spec works, all that kind of stuff was -- there's a lot of things being discovered and learned at that point...

And then about 2015, I had enough traumas from deploying all those services that I kind of figured it would be an interesting exercise to try and solve those things in a way where you've got a piece of software that will do all the -- I would have just called it plumbing tasks in stream processing land, because a stream processor tends to mean aggregates of data in Windows being continuously calculated. And that's the processing part. You're processing a stream, and the comparison is always to databases. So you want to process a real time stream as if it was just a database with static data.

But what we were doing was just plumbing. You're just reading data from somewhere, changing it a bit, and then moving it along, passing it somewhere else... And trying to do that in an efficient way. But the main difficulty, in my opinion, wasn't getting good throughput and the sort of quality of the data coming through. It was making those services nice to actually work with. So part of that is adding in a config language that allows you to make arbitrary changes without having to recompile, and stuff. So essentially, the things that Logstash and similar services were already doing for the logging side of things... But in stream processing world you need better delivery guarantees, better quality of service, and metrics, and stuff.

So I was kind of experimenting with that stuff as an open source project. I was also learning Go at the time, because I was using C++ up until then... And I was just messing around. I didn't have like a goal. I was just seeing if I could do it.

**Adam Stacoviak:** That's awesome.

**Ashley Jeffs:** Made it open source. It didn't really do much. For about two years I was working on it and it didn't really -- it read from Kafka or ZeroMQ, and vice versa. I had a few brokering patterns for mixing things up... And then you could have like a disk buffer in there as well if you wanted it... Which I didn't like. In my opinion --

**Jerod Santo:** Why did you do that then?

**Ashley Jeffs:** So I had this idea of -- because we had this service at where I worked where they had a disk buffer, and it was basically just a bridge. We called it a bridge. And it would just bridge different protocols with a disk buffer. And the idea is the disk buffer was the delivery guarantee part. That's how you guarantee that the data is resilient. But because ZeroMQ was almost always on one of the ends, it didn't mean anything, because the ZeroMQ part eradicates your delivery guarantees.

\[00:16:10.08\] So it was a bit of a weird one... But you could do backfills and stuff; it could prevent back pressure up to an extent. Obviously not forever. But it did have some sort of value. And what I wanted to do was replace it, and then once I'd replaced it, you could just get rid of the buffer, because it was an optional bit of config, and then just show people "Look, still works. It does the exact same thing." And then you get rid of this extra piece of complexity. Because it's difficult sometimes to get stuff like that approved without like just being able to show it just works. With stream processing you can't prove something's resilient formally, because we don't have the -- we don't have the tools or mechanisms for doing that, unless you want to pay like millions of dollars. I don't know how much it costs.

**Jerod Santo:** So it's all just like show and tell.

**Ashley Jeffs:** Yeah, exactly. It's just run it and see if you explode. See if somebody calls you in a week's time saying "Where's my data?!"

**Jerod Santo:** It's kind of like pulling the tablecloth out and all the stuff still stays on the table...

**Ashley Jeffs:** Yeah, exactly.

**Jerod Santo:** Very impressive when it works, but when you're bad at it, you just make a mess.

**Ashley Jeffs:** Yeah. So I kind of just -- I put the responsibility on other people. So I'd whisper to the ops team, "Hey, you could just delete this bit of config", and then I'd walk away, and then it's not my fault. I just gave them the mechanism for doing it.

**Jerod Santo:** There you go. Yeah, plausible deniability.

**Ashley Jeffs:** So I had that, just a piece of open source software...

**Jerod Santo:** Okay.

**Ashley Jeffs:** Then I got people to start using it.

**Jerod Santo:** How'd you do that part?

**Ashley Jeffs:** So we actually got acquired. That was the data engineering company. They got acquired by a company called Meltwater. And the idea was that we were going to be like a streaming -- because we were very good on streaming. We had like a big Kafka deployment that we were managing at the time... So they kind of brought us in and we were going to be this central point for all these different globally-distributed teams. And the acquisition went well. We became acquired, and we got integrated. And then --

**Jerod Santo:** This is the business that you worked at got acquired, correct? Not Benthos, your open source thing.

**Ashley Jeffs:** Yeah, yeah. Not Benthos.

**Jerod Santo:** Because that's eventually going to -- in the story, that's going to get acquired eventually, too. That's what I'm trying to track.

**Ashley Jeffs:** Yeah, yeah. So this was just like a pet project I'd been given permission to just do on my own terms... Because nobody at the company wanted anything like that at the time, so it was just like "Okay, we're happy for you to just sort of do that."

**Jerod Santo:** Cool.

**Ashley Jeffs:** And I was there for a while, and then I started seeing opportunities to... There were like teams that were blocked on integrations with other teams... And they wanted like a third team to help them bridge the gap, and be like the common data bus, and enforce the schemes, and stuff like that. And then you're blocked on another team. So now it's like two teams that are already blocked on each other, now they're blocked on a third team. And I basically just said "Hey, why don't you--" The way that it weaseled its way in was just sort of proposing "Hey, instead of being blocked on this third team to run this thing for you, why don't you just run this service?" And everything that I baked into this project was for me, because I didn't really have like a plan other than this is something that I would like to run. So I wasn't really building it for like high-level people to see the business value in. I was just building it for engineers. So it's like "Hey, don't you want to run this? It has like Prometheus metrics." Or it can push to like Graphite, StatsD, that kind of thing. And it's got like good delivery guarantees, it's low memory usage, you can run it in Kubernetes, it's stateless... That was a big focus, it being stateless. And then you can get it to do all these clever things that normally would require a service that was very stateful and very fragile, and require a lot of like operational involvement. You know, "Hey, why don't you just run this instead? And if you don't like it, then forget about it. Then you can continue to be blocked on this third team. But if it does work, then hey, we could all live in peace and harmony. And you can send your data to the team, and they're unblocked, and you're unblocked, and we all win."

\[00:20:08.26\] And I became the evangelist for this open source project internally for that -- was a while. I'm going to say a while because I can't actually remember how long it was.

**Jerod Santo:** A couple of years maybe, or what?

**Ashley Jeffs:** Yeah, a couple of years.

**Jerod Santo:** Okay.

**Ashley Jeffs:** Nobody's going to fact-check.

**Jerod Santo:** No.

**Ashley Jeffs:** 10 years I was there.

**Jerod Santo:** \[laughs\]

**Ashley Jeffs:** And yeah, they just kept adopting it. So we had success story, success story... And then I was allowed to -- I was still almost exclusively working in my spare time. So I would build stuff in my evenings and weekends that I knew teams would want. I hadn't been asked to build it, I just kind of saw they were going to -- "Hey, this team over there... They're going to need this thing." And I just kept adding stuff to it. And what we ended up with is a service that is basically just plumbing. So it's just taking data from one place to another. But because it's so flexible, and the abstractions within it are so composable -- like, you can compose all these different concepts, and just build build out as complicated a pipeline as you actually need, but the bare config is just so simple anybody can get on with it. So you can very slowly learn the concepts over time... That we just ended up deleting services that were stateful, that were doing all this complicated stuff. We were just getting rid of it and replacing it with a Benthos config, and it would be fine.

So there would sometimes be a concern of like -- to give you a tangible example, something that might actually exist in the real world, rather than abstract concepts. Like imagine doing stream joins, where you've got one Kafka topic, another Kafka topic, and you need to join them by some common ID. And ordering isn't -- like, you don't know which one's going to arrive first. You could run a smart stream processing service that's got like a window, maybe you've got some sort of window \[unintelligible 00:22:00.01\] going to be enough to cover the potential difference in timing. And what it will do is it will just join the data by ID, and then you end up with a new feed. That's going to have state, because it's inevitably going to need like a disk persisted way of maintaining everything, all the calculations it's doing, all the aggregates it's doing, and it's probably going to store that in S3, or something.

What I would do is just say "Hey, that join - you could just use that Redis cluster that you already have deployed, and use Benthos to cache data from one of the feeds, and then the other feed you could just treat as like the canonical feed, and use that cache to obtain the stuff that it's supposed to be joined to. And when it doesn't do that because it's too early, and the data hasn't arrived yet, you just pop it in a dead letter queue with a time delay on it." And that's just config. Like, that's just a very simple config. And when you've deployed it, what you have is -- so what you're telling the operations people, the people who actually have to like get paged and wake up to play with these services when they fail - all they have is a Kafka consumer that can just be restarted, because it's got delivery guarantees. So if it's having a \[unintelligible 00:23:15.12\] and it's not operating as it should, you just restart it. Or if it crashed overnight, it'll just come back online and automatically pick up where it should, replay data that it hasn't finished with yet. And then the Redis cache - it's just a Redis cache. So you already know what that looks like. You already know what it looks like to have redundancy there, and backup, and stuff.

And it's kind of flipping the problem on its head, because what you're doing is you're saying that the thing that's streaming, the live feed, this thing that you want to keep low latency, and is very important, it's dealing with hot potatoes - that's actually stateless. And the state exists somewhere else that's kind of like your more stable components. They're not really hot. The Redis instances, they're not necessarily going to be hot if you scale things out properly, depending on the use case, that kind of thing. But the idea is that now you've kind of eliminated complexity, where before there was some... And there's performance implications. So it might be that by doing that, you've now spent 10 times as much money on the storage, and all this other stuff.

**Jerod Santo:** \[00:24:21.26\] Right. But the ops team loves it, right?

**Ashley Jeffs:** The ops team loves it. And you may well find that actually it works better. You might get better performance out of it... Because at the end of the day, it just depends on your use case. Like, if you're just doing a very simple join, having a stateful, window-based processing tool is quite expensive for something like that. It's quite a lot of engineering mental load as well to kind of understand these systems. Whereas just hitting Redis caches can be very, very cheap. People have been doing it for years, I've heard...

**Jerod Santo:** Oh, yeah.

**Ashley Jeffs:** So it's not always going to be a winner, but when it is, you've just gotten rid of stuff that you otherwise would have needed. And that was my in.

**Jerod Santo:** That was your pitch. It was successful, and people loved it.

**Ashley Jeffs:** And it's open source, so then I started getting other companies getting interested, and started using it... I got really lucky with social media, that's on the internet, and I managed to get a post on the Go subreddit. And then that got me on the Golang Weekly newsletter... Shout-out to them. And then from that, somebody posted my thing on Hacker News... And that's the only time I've had a successful post on Hacker News. It was somebody else that posted it.

**Jerod Santo:** What was that post called? Do you know?

**Ashley Jeffs:** I think it was called like... It was what I was calling Benthos at the time, was a dull, resilient string processor, or something. I was calling it dull, and I was describing it as boring. So it was probably some combination of those types of words, that verbiage.

**Jerod Santo:** So maybe not at that time, but at some point in benthos.dev's history - which now redirects to Redpanda, but if you find it on the Wayback Machine, your tagline was "Fancy stream processing made operationally mundane."

**Ashley Jeffs:** Yeah, that was it. Yeah.

**Jerod Santo:** So maybe -- that may or may not have been the actual article title, but this is kind of your way of describing it, as like "It's going to be boring." That was like the new generation of how I would describe it. That was when I was confident enough to start calling it stream processing and not get shut down immediately... Because at that point, we had like examples for doing really complicated joins, and quite high-level streaming concepts in a completely stateless way, with fairly good performance. So at that point I felt confident enough that like "I can say stream processing now and not get torn a new one." And to me, that was important. I never wanted to make claims that I couldn't back up, whereas I can back up boring. I can back up "This piece of software it's pretty boring", I feel.

**Jerod Santo:** \[laughs\] Right. So social media splash, this got a new group of users, I'm sure... And because of the nature of the target audience, of course, Hacker News was a great place to land for that. But you started landing users who are like -- they have the problems that Benthos is solving, so they become... Like, these are successful, large orgs, generally speaking, right?

**Ashley Jeffs:** Usually. I mean, there's lots of startups that would use it for just like a cheap way of not having to write any code, to do a very basic pipeline. So it does come in with reasonably small companies quite a lot. And it's free, so there's that advantage to it for those people.

**Jerod Santo:** Right. The price is right.

**Ashley Jeffs:** Yes. It's usually teams that are large enough that they've got these data integration problems. I used to think that was going to be super-niche, because in my mind, everybody's just going to converge on some tools that they all agree, and then who cares? Like, it all just works at that point. Everybody just communicates in whatever tech they've got on hand. Just like they enforce "We're all on AWS", they would enforce "We're all going to use this queue system or this way of storing data. And obviously, that didn't happen. That's not what the world ended up like.

\[00:28:22.10\] So I was pleasantly surprised that the world is actually awful, and lots of people have this common problem... So the 2017, 2018 era was like a very slow process of me realizing "Actually, I might have something here, and maybe this is worth putting a bit more time into." Because I had open source projects before that where they had popularity, but I was sensible enough to go "But this has no future. This has gotten attention, and people might be using it, but I'm not going to go any further with this by choice, because it's not going to sustain me. I'm just going to end up giving away my time. And if the project's not keeping me going, then there's no real value in it." Whereas Benthos was both. I was having fun working on it, but I also could kind of see that maybe this was a possible long-term investment, and I would actually be able to make a living.

And then eventually it got to the point where I did just jump in and say "Okay, well, I'm going to just juggle contracts, consulting contracts and support, and live off sponsorships and stuff." So just donations. That was about the 2020, 2019-ish kind of era. And that was okay. I had a lot of flexibility, so I didn't have a full-time job. I could just work whenever I wanted. And I really enjoy that.

**Adam Stacoviak:** Who doesn't, right?

**Ashley Jeffs:** Well, I mean, if I could go back to those days, I might actually be tempted.

**Adam Stacoviak:** I love the way you emphasize it, you know?

**Ashley Jeffs:** But the problem then is I had so many different things going on. Like, there's all these different contracts, and now I've got all these different like bosses of various types... Some of them doomed to never earn me any income. There was like procurement processes, and because I'm not in the US, I don't know how any of this stuff works. I'm not a diplomat. I would have to be jumping through these procurement hoops to prove that I'm a person, and I can sell you support, and I'm not going to run away... And it was just a nightmare trying to juggle all of these contracts.

And I had some great sponsors. That was working really well... But I felt like the popularity of Benthos at about the 2022 era was getting to the point where I couldn't cope anymore with just myself on it full-time. And then a few -- we had quite a few contributors at the time that are like the core blobs. The real ones. And they were around a lot to help in like the support channels and stuff, but it wasn't going to be enough long-term. We were going to end up like getting to the point where we're all burned out, and I could kind of see that coming. So that was about the era where I kind of realized I need to stop being the dumb, immature kid on the internet, and actually think about what's the actual sustainable model that would keep all of this going, that's not just me clumsily bobbing from like one support contract to the next. I did make a good go of that, which we can go into if you want... But then ultimately, it wasn't particularly successful.

**Adam Stacoviak:** Contracting, you mean?

**Ashley Jeffs:** \[00:31:40.20\] No, so I started a product. So the problem that I had was that I wanted to stay bootstrapped. I was open to doing a VC round, and like starting a megacorp, or also joining another company and being acquired. I was open to both those things, but I wanted to try and be a bootstrap company first. Because I like the idea of being able to do what I want, I liked the idea of being able to not necessarily optimize for marketability... Like, my vibe on the internet seemed to work really well, but I don't think anybody would have told me that from like a marketing standpoint, having like a sad blobfish...

**Jerod Santo:** Just to give people a picture of that, your avatar is like you making a double chin on purpose. Is that what that is?

**Ashley Jeffs:** Yeah, yeah. There's a few variants of that on various social medias.

**Jerod Santo:** \[laughs\] Like, not serious -- yeah, there you go. There it is.

**Ashley Jeffs:** Yeah.

**Jerod Santo:** So not serious business here.

**Ashley Jeffs:** And the mascot is a blobfish. The docs were very facetious. There's a lot of sarcasm in there... Which is good. Even if you've got like a professional group of people that are working on your docs, they acknowledge that. But the problem is that if you -- it doesn't scale. Imagine Microsoft saying like "From now on, all our documentation is going to be sarcastic, because it's funny, and we like it." Like, can you imagine how that would be?

**Adam Stacoviak:** Everybody has to write in that same voice.

**Ashley Jeffs:** Yeah, exactly. Everybody has to have the same tone. It doesn't scale. So I like the idea of having a really small, lean operation and keeping it cool. So I wanted to try it. But again, it's just the procurement process. Like, actually getting these big -- because a lot of our users are these big enterprises, and they're the ones that I wanted to try and pursue, because... Money is great at solving problems.

**Jerod Santo:** That's the thing about a cloud-native product, is like you have the customers with the money. That's the thing that I know about cloud-native, is that's where the money is in the open source world.

**Ashley Jeffs:** Yeah. There's a lot of companies with massive budgets for these pipelines. But the problem is I'm just some kid in the UK. I don't want to spend all day, every day. Like, I don't have somebody full-time doing these procurement processes, and like all these contracts and stuff... So it just doesn't scale. Like, I would need to hire out -- if I was going to do it properly, I would need to hire out real salespeople, real sales engineers, all this and that. I don't even know. I still don't know who I would need to hire. But I made a good go of it. It was kind of like a self-service... I built a visual UI for Benthos called Benthos Studio, and I had loads of interest. So I had loads of people contacting me saying "We want to pay for this. Let us do it." But then it immediately goes into like procurement, and I'm like "I'm going to have to get lawyers."

**Adam Stacoviak:** It's that whole enterprise-ready chasm that is talked about there. You go from how do you become SOC 2-compliant, how do you become, enterprise-y? You can't be snarky or sarcastic in your docs, you've got to have proper contracts... You have to charge way more than necessary, because they expect to pay a lot of money... You can't undercharge for your software, because they expect to pay -- "What are you talking about you want 50 bucks a month? No, I want to pay you 5,000 at a minimum per month. I must. I'm an enterprise."

**Jerod Santo:** Could you try going downstream to like the -- you know, if it fits on a credit card, you don't have to do any of that kind of stuff? Like petty cash.

**Ashley Jeffs:** So that was what I was trying to do. I am also not good at marketing, in that I'm very good at putting together marketing materials, but I'm just not good at using them. \[laughter\] So it just goes on my YouTube channel --

**Jerod Santo:** You just don't show anybody?

**Ashley Jeffs:** Yeah, exactly. And the thing is, at that level as well, it feels like begging. It feels like begging for sponsors, except this time you also get access to this web app I made. And to me it just didn't feel like enough. Like, it didn't feel like I was doing enough. I wanted to have like these serious contracts, where I can see these companies that are really invested in what I've built, so that I feel safe. Whereas if I have like 1,000 people on a $5 a month subscription - that's great, but that's not what I would have had. I would have had years and years of slowly growing the subscriber base.

\[00:36:07.12\] And it was potential. Like, I had enough income that I was -- I existed. And that was a success in my books, because I had the lifestyle that I wanted. But the problem is then I had kids. So then I've got to justify "Daddy. Father. Why don't you work at Google?" And I've got to explain "Well..." \[laughter\]

**Jerod Santo:** Do your kids ask you that kind of stuff?

**Ashley Jeffs:** Not yet, but at some point I'm going to have to explain.

**Adam Stacoviak:** The expectations of our children.

**Ashley Jeffs:** Yeah. "Father, why are we burning Klang manuals to heat the house? Why can't you have worked at Google?" And you know --

**Jerod Santo:** That's hilarious.

**Ashley Jeffs:** It just got to the point where I can't really justify not doing anything at this point. I have to like try and --

**Adam Stacoviak:** What year was that? End of 2022?

**Ashley Jeffs:** My kid was born in 2022. Towards the end of the year. It was August time. August time, I think.

**Adam Stacoviak:** Okay, August 2022. Gotcha.

**Ashley Jeffs:** If you can give me 15 minutes, I'll go get the documentation and I'll give you a definitive answer. But it was about August.

**Adam Stacoviak:** Get the birth certificate. Let's confirm.

**Ashley Jeffs:** I'm not sure I did that yet. Was I supposed to do that?

**Adam Stacoviak:** Somebody was.

**Jerod Santo:** "Father, why don't I have a birth certificate?"

**Ashley Jeffs:** "Why don't I officially exist, father?" \[laughter\]

**Jerod Santo:** "Don't look at me, I don't work at Google."

**Adam Stacoviak:** "I've been too busy trying to work at Google!"

**Ashley Jeffs:** But yeah, it got to the point where it was like I'm really enjoying the lifestyle of just spending as much free time as I want, not really having like serious obligations... Because I had like contracts and stuff, but that was easy to keep going. It definitely wasn't like a full-time job. But I was definitely working a full-time job in terms of Benthos stuff, and support on the channels, and things.

It got to the point where it was like -- this project is going to reach a point where it's going to be too popular amongst enterprises for other companies to ignore that. They're going to start building up a Benthos shop. And then I'm at the risk of "Well, if their team is bigger than my team, and their team is more productive than my team, we're just going to lose all of our momentum. Like, they're just going to basically maintain a fork, and I won't be able to control the direction of the project anymore, or any of those things. I won't get my something out of it." So I figured "Well, I'll call it now."

And it just so happened in 2024 that it really got to the point where in the data engineering industry people were taking it seriously, o there was like lots of companies suddenly discovering it, and realizing "Oh, hang on a minute... We can get rid of Kafka Connect." And desperately then clinging onto it. It got to the point where it was like "Okay, well, I'm freaking out now, because if I'm still just me, then somebody else is going to fill the void. And also, I still have to support the community on the various community spaces... So I'm just going to ignore everyone. I kind of have to support everyone, to an extent... And it's just going to take up too much of my time. I'm going to be immobile and I won't be able to do anything. So I was kind of getting a little bit -- freaking out.

And then it just so happened that it got to the point where it was like "Okay, there's enough industry interest in this that we can arrange something." And then Redpanda reached out, and they had a great plan...

**Adam Stacoviak:** They came to you with a plan, like premeditated.

**Ashley Jeffs:** So yeah, I mean, the whole thing is -- it makes sense. It's like a bigger picture thing. Like, if you're the Kafka that a company is paying for, they can't just have Kafka. They have to have connectivity to all these other things that they're doing. And they have to have all these annoying chores that have to happen to the data as it's coming in. So you have to be competent in more than just Kafka. So not having some sort of ownership of that aspect of the deal is just a big risk, and it's a big cost... Because if you end up using their tools, and they're using stuff that doesn't work particularly well and is annoying, then it costs a lot to support it. And it's also costing them a lot to use it.

\[00:40:20.12\] Whereas if you have a tool in-house that does all those integrations, you have full ownership of how it's developed, you can add more stuff to it, you can be very clever about what you're adding, because you're fully competent... You have ownership of the people who understand the engine. Then these contracts suddenly become a lot easier, because you have full competency of the entire end-to-end pipeline, from wherever they're at now to wherever they wanna be with your streaming tools. So it made a lot of sense as like a partnership.

And - I mean, I've been talking to Alex for years. Like, we've known of each other. I considered him a friend for years past. In fact, he got me a lot of attention at one point, because they had their big -- like, Redpanda was big on Hacker News for a while. I mean, it's obviously reappeared lots and lots of times, but there was like a point where... I think it was their launch, actually. And they got some feedback from some of their users saying "Oh, hey, does this work with Benthos?" And then if I remember right, he reached out to me about that time, because we were sharing a lot of users.

So we did -- I think it was their first blog post, as in their first like partnership kind of a blog post. And I put it on the Benthos website as well. And it was basically... I think we called it something like we're bringing simple back to streaming. The famous Justin Timberlake song...

**Jerod Santo:** The JT. You're the JT of big data.

**Ashley Jeffs:** Yeah. But both of us. Like a mangled combination of me and Alex is this Justin Timberlakey fellow bringing simple back to stream processing...

**Adam Stacoviak:** I believe it.

**Ashley Jeffs:** ...if you can imagine that. If you can get an AI rendering of that on the screen now, I think your audience would appreciate that.

**Jerod Santo:** I think that's an easy button. We can do that. Thank you.

**Adam Stacoviak:** What I'm confused about though is the state of Benthos. And was it a company? Was it an open source project? You had a team, you were getting sponsorships, it seems... I'm trying to understand the context through your story and not interrupt, but it sounds like not legitimate company at this point when you were acquired.

**Ashley Jeffs:** I still need to unpack what I was doing. Mentally.

**Adam Stacoviak:** Please do.

**Ashley Jeffs:** Basically, I had a company --

**Adam Stacoviak:** What were you doing...?!

**Ashley Jeffs:** I had an actual real company. It really existed, actually. It was a UK company. But it was basically my consulting company, so I owned all the assets. I think we called it a few times the Benthos Company. But basically, it was what I was using to operate as. And I had lots of different sources... The thing is, people talking now still - this will never end - about how to monetize open source. And the reality is, if you want to live off just building your open source, you're not thinking about what is THE way to monetize open source. You're just reaching for any possible thing, because all of it coming together may end up being one day enough to actually survive. But the reality is, you can't just do GitHub Sponsors, for example. So that was a source of income... But that was just like sponsorships. For the most part, it was like kind of tips almost. I wasn't sharing any foot pics, so there wasn't really much of a drive to doing it...

**Jerod Santo:** So we're talking like a few thousand bucks a month, or a year...? What are you talking about?

**Ashley Jeffs:** \[00:43:48.05\] So there was the point where GitHub was matching the donations, and that was also a point where lots of people were getting really excited about it. I think at that point, it was paying my mortgage at the time. And then that meant my actual income could just go to Pokémon cards. But the amount over the years, it's kind of steadied around there. I did have sponsors that were like real sponsors, people who were actually like "Hey, we actually want to help you." So shout out Derek from Synadia. They were just like "We want to help you as a maintainer of this open source that is good for the community that we're part of." And they gave me sponsorships that was enough to live off in combination with all these other sources. That actually allowed me to tone down a lot of my support agreements at the time, because they were just unruly. It was just getting too complicated. I wanted to kind of like calm a lot of that stuff down.

Because again, that was the majority of my job, was just supporting people, and trying to get through the procurement process for these future contracts. So you're spinning plates and none of them are actually paying you yet. It was only me, but the number of maintainers we had was quite vast. So we were kind of -- if I remember right, I think that was about the point that we were kind of divvying up support contracts. So it wasn't just me taking them, I was also kind of \[unintelligible 00:45:18.00\] them around... But there were a lot of general consultants in the industry that were also kind of like part of that equation. I'm sure if we all banded together, we could have actually done something real, and made an actual company. But again, I didn't want to jump too deep into that in case it didn't work out, and then I've got to tell everybody \[unintelligible 00:45:37.06\] Like "Oops, support sucks..." Because I don't like just being a support company.

**Jerod Santo:** And your product wasn't really taking off because of the procurement process that you described...

**Ashley Jeffs:** Yeah.

**Jerod Santo:** And so...

**Ashley Jeffs:** It was easy for European companies, but the big ones are the US companies.

**Jerod Santo:** Right.

**Ashley Jeffs:** So damn you, US.

**Jerod Santo:** Fair enough. So Alex comes by, he's got a plan... You guys go way back, a couple of years at least, know each other well... It makes sense for Redpanda, it makes sense because Benthos is kind of struggling, as a business at least, to find that perfect equation of all the different strings you have to pull in order to make it work without taking on money and/or employees at scale. What were those conversations like then? Is it like "Here's a plan. Sign on the dotted line", or your lawyers talk to my lawyers, or...?

**Ashley Jeffs:** It's a whole ordeal. I think technically, I'm not allowed to talk about it.

**Jerod Santo:** To talk about it.

**Ashley Jeffs:** And emotionally, I'm not ready to talk about it. But yeah, I mean, it's a formal process. Doing acquisitions, it's a formal process. Like, it's a whole thing. It's lawyers, and paperwork, and stuff... Because obviously, you need to prove various things, and there's an exchange of assets, and control of various...

**Jerod Santo:** How long does that process take you?

**Ashley Jeffs:** Well, it's supposed to take a long time. I think if you asked a normal procurement lawyer, then they would tell you... I don't know, six months I think I was told is how long it takes to like sort something like that out. But myself and Alex are apparently very good at procuring when it comes to that, and it happened very fast. I think in terms of like start to finish, it was -- it gobsmacked my lawyers, let's say, how quickly we got it done. Because at the end of the day, it just made a lot of sense for them, and it made a lot of sense for me... So there's no point in like dwelling on it. We're not going to like back and forth, back and forth over legalese.

**Jerod Santo:** \[00:48:00.09\] So at the end of the day, however long that was - 60 days maybe, 30 days?

**Ashley Jeffs:** It was probably a couple of months, I'd say, to go from like --

**Jerod Santo:** 60 days, let's call it that. No one's fact-checking.

**Ashley Jeffs:** Please don't fact check.

**Break**: \[00:48:14.07\]

**Jerod Santo:** What was your demeanor at the end? Were you over the moon? Were you going out for steak dinner? Were you resolute? Were you --

**Ashley Jeffs:** Yeah, I mean, I was pretty chill. Thing is, I had a kid, so I wanted to go and do all this crazy stuff. I wanted to go off the rails. But my wife's like "You've got a kid, Ash..."

**Jerod Santo:** Well, what do you mean off the rails? For instance, what were a few of your ideas that she turned down?

**Ashley Jeffs:** So Las Vegas for a month...

**Jerod Santo:** Okay.

**Ashley Jeffs:** Otherwise, I don't really see the point, going there for just a couple days... You know, I could have done a shampers binge for a few weeks... I think I could have managed.

**Jerod Santo:** I don't know what that is. Adam, do you know what that is?

**Adam Stacoviak:** No. What is it?

**Ashley Jeffs:** Let me break this down for you. Shampers is the champagne.

**Jerod Santo:** Okay.

**Ashley Jeffs:** I don't know if you call it shampers in the US. That might be a UK thing. It might be a very specific thing in the UK as well.

**Adam Stacoviak:** Shampers. Is this slang, or is this...?

**Ashley Jeffs:** It would probably classify as slang, I think.

**Adam Stacoviak:** Okay. I'm going to start calling it shampers, Jerod.

**Jerod Santo:** Shampers.

**Ashley Jeffs:** I've gotta crack out the shampers.

**Jerod Santo:** A shampers binge. Now you don't have to explain any further. Now I know what it is.

**Ashley Jeffs:** Alright, lads, let's go crack out shampers.

**Jerod Santo:** So, I mean, that's pretty much the same idea, with different objects involved, right?

**Ashley Jeffs:** And then I just wanted to play video games.

**Jerod Santo:** There you go. But thing is, day one everything was sorted, I was, like, there, at the company, getting stuff done. Because the thing is as well - I had so many people wanting to have a support contract that as soon as you've got the people there to do the procurement, do the sales engineering, do the support engineering, they're ready to go. Like, you can just untap all of that money. All of these people who were just like desperate for like some sort of --

**Jerod Santo:** So that was actually an unlock for you.

**Ashley Jeffs:** Oh, yeah, yeah. 100%. I mean, it's basically -- it doesn't frustrate me to know that there's money on the table. When you've got like support contracts, people are saying "Oh, please let us give you this money. Please." Like, it doesn't really annoy me, because I know that --

**Jerod Santo:** It wouldn't annoy me either.

**Ashley Jeffs:** Again, I would just compare it to -- I could just get a job at Google. Like, if I wanted to make a lot of money very, very fast, I could get --

**Jerod Santo:** You want your kid to be happy.

**Ashley Jeffs:** Yeah, exactly. If I want my child to have a fulfilled life, then there's lots of things I could do.

**Jerod Santo:** Yeah, his father needs to work at Google.

**Ashley Jeffs:** But I've made my decision. I want to draw stupid blobfish pictures and post them online. That's my job. And he'll get over that in time...

**Adam Stacoviak:** Does your kid call you Daddy Pig by any chance?

**Ashley Jeffs:** \[laughs\] Not yet.

**Adam Stacoviak:** My son calls me Daddy Pig.

**Jerod Santo:** Really?

**Adam Stacoviak:** And it's not to anything with my weight. Tell him Ash, what Daddy Pig means. Do you know?

**Ashley Jeffs:** Daddy Pig. Well, do they watch Peppa Pig?

**Adam Stacoviak:** That's right.

**Ashley Jeffs:** Yeah, there you go. \[unintelligible 00:54:23.13\]

**Adam Stacoviak:** So that's why I'm Daddy Pig.

**Ashley Jeffs:** That's like our number one \[unintelligible 00:54:26.13\]

**Adam Stacoviak:** It's a term of endearment. Anyways...

**Ashley Jeffs:** I don't know, because Daddy Pig's kind of incompetent, so...

**Adam Stacoviak:** But it's always a -- maybe it is not...!

**Jerod Santo:** There's an underlying criticism...

**Ashley Jeffs:** I'm going to have to be honest with you, \[unintelligible 00:54:42.24\]

**Adam Stacoviak:** You don't think it's a good thing? "I'm going to get you...!"

**Jerod Santo:** Oh, this is like an intervention here. Don't let your kid call you Daddy Pig, Adam.

**Adam Stacoviak:** It's a term of endearment. I know it is. My ego's not shot here, man. I know my kid loves me. Let's go.

**Ashley Jeffs:** They can love you, but not respect you.

**Jerod Santo:** Oh.

**Adam Stacoviak:** Do you want to stay on this show? I'm about to hang up on you.

**Jerod Santo:** I mean, not if you work at Google, though. They have to respect you if you work at Google.

**Adam Stacoviak:** That's right.

**Ashley Jeffs:** If you work at Google and live in a van in the car park.

**Jerod Santo:** There you go.

**Ashley Jeffs:** That's ultimate respect. Thanks, dad. Thanks, dad, for this Google pen.

**Adam Stacoviak:** I've interrupted the show. Continue, please.

**Jerod Santo:** That's alright, Daddy Pig.

**Ashley Jeffs:** I don't know, because the goal wasn't just to like get the most amount of money in the shortest space of time... And I kind of always had my head on the idea that if at any point I felt like I wasn't actually enjoying what I'm doing, then at that stage, I would just stop, because it was kind of silly at that point. Like, I'm not going to make more money from running Benthos as almost like a -- I used to say like a hot dog stand on the street. That was kind of like the mentality I had. I just wanted to be like small potatoes, a small operation, doing the thing that I enjoy. But if I didn't enjoy it, I was quite happy to just walk away. I think a lot of open source developers get stuck because they still want to work on this thing and they feel kind of like obligated to, but they don't enjoy it anymore. And at that point you're kind of trapped. But I kind of had my head on straight about that aspect of things. Like, if I don't enjoy it, I'll just let go.

\[00:56:14.04\] So joining Redpanda and then suddenly we can tap into all these customers and stuff was -- it's exciting. It's great. But it wasn't like before that I was like frustrated about "Oh, I just want to tap that revenue." It was more just I wanted to find -- if I could have found a hundred startups that were willing to pay like a nominal amount regularly to keep the project going and if that were enough for me to start building the team out, then I probably would have gone for it... But I'm just not good at wrangling up the startups. There were lots of them, but it's very difficult to get them to pay a significant amount. Because you imagine a significant amount would end up being more than they're probably paying for anything else that they're doing, unless they're like spending a lot on AWS...

**Jerod Santo:** So let's talk about the stepping away part, because this was like the big ramifications of the sale, was Benthos just went away.

**Ashley Jeffs:** Well, it's kind of --

**Jerod Santo:** I mean, effectively.

**Ashley Jeffs:** Basically, the team -- the team immediately grew, so we could actually start hiring people who were just contributors before. So we've got more people working on it. If you look at the contributor graph for the Connect repos - it's suddenly gone way up. The number of stuff that it has has gone way up. But there was stuff that I was already going to do, that I knew was going to be annoying if it was under the guise of an acquisition. So I already wanted to split the repo out. It was one thing that we had as a plan. So the Benthos repo was everything. So it's like the engine, which includes like a plugin engine, and all of the stuff that makes Benthos what it is.

And then there was also all the plugins. So you imagine like Kafka plugins, AWS plugins, Azure plugins, RabbitMQ ones, NATS, all the various queue systems and technologies that we're integrating with, all of those were baked in the same repo... And it was getting to the point where we were regularly having to deal with the dependencies breaking, because somebody would have a breaking change, and then you end up with these horrible dependency graphs where stuff no longer compiles. And I would have to then make a decision of "Am I just going to make a breaking change where I remove one of these components, or am I going to have to like beg these maintainers to like make fixes?" And it was also just getting to the point where the binary was just so big that it was inevitable that most Benthos users were probably going to want to have like a reduced version of it... So what I was going to do was have two separate repos. There would be like the Benthos engine, and then there would be like the official suite of plugins. And you'd get a binary. So almost like the way that Caddy does it. It's like Matt Hull has this sort of plugin system, and it is sort of dynamic. You can choose what comes into your binary. I kind of wanted the same thing, which would obviously mean they now have to exist sort of separately. But what we decided to do as part of the acquisition was kind of like fast-track that.

What we ended up doing is having the Benthos -- so there's still a Benthos repo called Benthos, with the blobfish. So if people want the blobfish, that's where you find your official Benthos blobfish now. That's the engine, and it's still being worked on. It's still the core of the new product, which is Redpanda Connect. And then what Redpanda Connect is, is that's all of the plugins and extra features that we've added on top to the core engine. And that's a mixture of -- it's Apache v2 for almost all of it, and that almost is the annoying bit, that people got a bit angry about. And then there's a couple enterprise features in this. There's a couple like plugins that are enterprise-licensed. So it's not fully Apache v2. So the enterprise ones are the Snowflake connector, there's a Splunk one, there's a few AI connectors that we've added, and a bunch of other things that... Basically, the idea is those are the enterprise things. Probably it's just going to be people who are paying money for those products anyway.

**Jerod Santo:** Right. So kind of an open core thing now, where the core is really large.

**Ashley Jeffs:** \[01:00:18.02\] Essentially, yeah. And the engine is kind of like its own thing. So it's still MIT.

**Jerod Santo:** So of the Benthos users back when this acquisition happened - which I think was like May of '24. Is that?

**Ashley Jeffs:** Yeah.

**Jerod Santo:** Fact-check, true. According to -- if the blog posts are right, that's roughly true. So of the Benthos users that day, how many of those are satisfied with the Benthos core plus the Redpanda Connect Apache stuff?

**Ashley Jeffs:** I think it's a mixed bag. So there's different groups of users. So there are the users who are just... They're not like... They're not really helping to run the project. They're just noisy. Some of them aren't even users. People who comment on the Hacker News, but they haven't really actually used it, or anything like that.

**Jerod Santo:** Right.

**Ashley Jeffs:** And it's more of a philosophical thing. The concept of open source - they're not happy. And I understand the arguments; the licensing is confusing, and there's these arguments. There's a lot of FUD, which I fundamentally disagree with... But there's a lot of pearl clenching, because "Argh!! They changed the licenses! It's a rug pull!" But putting them aside, because I felt like that's... There's points that are valid, but some of it was just about the surprise of all this stuff just happening in one day. But obviously, that's just the nature of an acquisition. You can't tell people "Hey, we're about to do this deal!" It's illegal. And you can't start making the changes that you intend to make until you're able to be public about it. So there was just stuff that's just logistics. It's just a fact of life that we had to do it as a surprise. None of the core engineers were surprised, because kind of -- they didn't know that there was an acquisition being made, but they knew that that's what I was heading towards. And they knew the plan, the splitting of the repos stuff. So they were fine with it. I think they were a bit sad... Some of them are working with us now. So some of them actually got to become Benthos engineers.

**Jerod Santo:** They're happy.

**Ashley Jeffs:** No, because they have to work with me. But...

**Jerod Santo:** Oh.

**Ashley Jeffs:** Some it's a bit disappointing, because they work with competitors. So it's a bit of a sticky relationship now. But obviously, they kind of understood why things turned out -- it's not as if like Benthos was on Hacker News and then a week later I'm like "Haha! Bags of money. I'm selling." It's like, I made a good go of trying to get things going without having to reach for VC funding, or anything. I just wasn't very good at it. You can't fault me for that. But I guess I didn't try that hard. I could have tried harder.

**Jerod Santo:** Sure.

**Ashley Jeffs:** And then everybody else... It's just a mixed bag. Some people don't care at all. Some people just carry on using it. They don't even care about the enterprise license, they're just going to keep using it and not paying. And they don't care, because they didn't care before. And then there's lots of people who will have their own custom build now. And if anything, they're probably happier, because now they have full control over what's baked in and they can make sure that everything's FOSS, and they only have the components that they're actually interested in.

There's a fork. So WarpStream made a fork almost immediately, and they called that Bento. And then they've since been acquired by Confluent, so I'm not 100% sure what the plan is.

**Jerod Santo:** \[01:03:55.11\] Still commits going into that repo. I did check on it. We've had WarpStream on the show. They're still doing something with it.

**Ashley Jeffs:** They're still doing stuff on it. Yeah, I'm not sure, but it's still MIT licensed. Basically, they forked it before I did the split, which is a bit awkward. I was trying to convince them to fork the MIT engine after the split and then just take the plugins and separate them, similar to how I'm doing from before the split... Because that way people could have plugins from either ecosystem. And then all it is is it's just changing the import. They wouldn't even need to have forked the MIT engine, because that could have just stayed MIT if they were concerned about licensing. But I understand their position. Like, it's a competitor that owns the Benthos engines, so I can understand why that's not an avenue for them.

But yeah, I don't know. I don't get a lot of hate, because I think a lot of -- it's easy to look at a Hacker News post and see people kind of like whinging, and think that that's sort of like a personal attack on the developer... But - I mean, the idea that I'm personally just gonna work on this thing and live a more modest life than if I just had a software engineering job forever, just because of moral obligations to people that I'm giving something away for free for... Like, I think it's just not realistic. So I don't read those comments that way. And I understand that it's disappointing that an open source project that used to just be this completely independent, indie project that didn't have any commercial success, now it's been soiled. But that's the way it is.

**Jerod Santo:** You're an indie band, and you signed with a big label. And your original fans are calling you a sellout. But this is classic.

**Ashley Jeffs:** I got a few "He's a sellout, he's a sellout!!" And I'm like "I kind of can't argue against that, but..."

**Adam Stacoviak:** That is the terminology for a sellout, but I don't believe that's necessarily the exact case. I think that -- so the core engine stayed at MIT, right?

**Ashley Jeffs:** Yeah.

**Adam Stacoviak:** So it wasn't like a rug pull. It was just an acquisition.

**Ashley Jeffs:** Well, this is where a lot of these things get really complicated, because I think that the arguments that you see online - whenever there's a license change, the complaints that you see from people - I'm not gonna say they're robots; I'm gonna assume they're people - online, it's just a fundamental misunderstanding of what the license is. Because if I put code out -- like, if I put a recipe out for a chicken nugget... It's a really good one, and I say "This is MIT licensed." What I'm saying is you can take this recipe forever. Like, you cannot delete this anymore. I can't say "You can't use that recipe", because I MIT licensed it. Anybody can do anything with it. What it doesn't say is as I slowly make changes to this recipe over time, and I continue to work on it, that you're always gonna be able to get it for free. Like, the version that's MIT licensed is always MIT licensed. It's the stuff after it that isn't MIT licensed, if I do a license change.

And I think the fundamental -- I think it's like a willing misunderstanding, because I think people just like to get angry about this stuff... But the misunderstanding is this idea that by changing the license for stuff that you change on top of the codebase, you've taken away the old code. And people will say things like "Oh, well, code rots, doesn't it? So what's the point in \[unintelligible 01:07:19.05\] You've left it MIT licensed in the old version, but what good does that to me?" Well, the good that it is to you is that somebody else can take ownership of it and continue working on it, which is exactly what Bento is. Like, that's Bento doing MIT. They've taken the MIT version and continued to work on it.

But the idea that you've MIT licensed something, so now you have to work on it for free forever, otherwise it's a rug pull, is obviously not right. That's obviously not how -- nobody would make open source if that was the contract they were entering into. Like, social contract or real contract, it doesn't matter. Nobody would enter that contract willingly. The idea that I'm going to have to work on Benthos forever... I'm going to want to play video games at some point.

**Jerod Santo:** Sure.

**Ashley Jeffs:** \[01:08:02.04\] And my career on gaming is terrible right now, because I don't have enough time for it.

**Jerod Santo:** I think that this is evidence of what Stephen O'Grady's take on eventually open source was on our show, Adam, which is that nobody wants the older versions. Because what you say is 100% true. And that version of Benthos from April of 2024, pre-fork and sale, is 100% free, just like you licensed it the day you pushed that code up publicly. But people don't really want that. They want current open source. They don't want past open source. Because then they have the maintainership burden of the in-between time in order to make sure that it continues to operate as they want it to, or that it improves.

And so his point with eventually open source, which is where things go open source over time... Like, you can have the five years old from now version - that's open source; or maybe it's nine months. In practice, people don't really want that. So it's kind of like saying it's not open source.

**Adam Stacoviak:** And you're speaking to like the BSL or the functional source license kind of things.

**Jerod Santo:** Yeah, the eventually open source licenses... Which is a bit of an aside. I do think a rug pull though is in the eye of the rug owner.

**Ashley Jeffs:** Oh, yeah.

**Jerod Santo:** And so that response is entirely emotional, and based on change of expectations, and absolutely unavoidable in the case of a license change of something. It's just going to happen. Whether or not it's justified, or -- obviously you're completely in your rights, both legally and I think morally, to make the change. Where I draw issues with companies that come out with open source projects, raise large amounts of money based on that open source project, make large claims, like "This will continue to be open source", and then later on, much later on, after years and years of building goodwill, renege on that. That bothers me. I could see where some of your users might feel rug-pulled. But you know what? That's just the way they're going to feel when something changes, right?

**Ashley Jeffs:** It's the same with just the acquisition in general. Even if we kept everything exactly as it was and I joined Redpanda, then they would be upset. Because even if you ignore the codebase, for some people just the goofy videos and the updates and all that stuff was a big deal to them. And I mean, I really enjoy doing that stuff, and obviously, over time, I was going to have less and less time for doing that anyway... Which is already the case. But the idea of me then getting a real job is disappointing, because it's like this goofball that we could just come and hang out with isn't as available anymore.

**Jerod Santo:** Well, we recently made a big change here at Changelog, Ash. I was telling you about it before the show, just in December...

**Ashley Jeffs:** And it was outrage.

**Jerod Santo:** Well, I mean, there are people that legitimately love the shows that we decided we're not going to produce those shows anymore... And I understand that feeling. I've had my favorite shows disappear, and you're just like -- you're sad.

You're like "Oh, that's too bad." And of course, we've talked about rug pulls a lot on the show, because there's been lots of instances of people feeling this way... And we had the term turn back on us for closing down Go Time and Ship It. And I'm just like "Okay, if that's the way you feel, then fine... But in what world did I agree to create this free thing for you in perpetuity, for you to enjoy?" I think a more appropriate response is "I'm sad. Thanks for all the free pods you put out all the years..." But that's just the way I would respond. They're completely going to respond the way that they feel. And on the internet, everybody just types that out and hits Submit before they probably processed the recipient... And so I think your response to the responses, Ash, is relatively healthy.

**Ashley Jeffs:** Don't say that. You're going to make me seem hinged.

**Jerod Santo:** \[laughs\] Okay, well, please go off \[unintelligible 01:12:00.22\]

**Adam Stacoviak:** Become unhinged.

**Ashley Jeffs:** \[01:12:04.07\] So I've got a dartboard, and every day I print off the face of a hater... \[laughter\]

**Adam Stacoviak:** \[unintelligible 01:12:08.29\] some people...

**Jerod Santo:** "And here's one of their addresses. I'm going to read it aloud..."

**Ashley Jeffs:** \[laughs\] But yeah, I mean, I had myself prepped for having to do... Like, even if I'd gone down the bootstrap route, I knew that the tone of what I was doing was going to have to change at some point, and I was going to have to deal with people being... Not angry with me. I didn't expect them to all be like lashing out; just kind of disappointed, and trying to sort of navigate that... Because you don't really have any way around it.

**Adam Stacoviak:** It's entropy, baby. Nothing lasts forever. It's just the nature of nature. That's how it works.

**Jerod Santo:** That's right.

**Adam Stacoviak:** The zoom out though I think is that it's encouraging that you could be in a place to have a skill, to have the desire to build something of value, create that value, steep that value for multiple years, find unique ways to sustain, and then ultimately find the ultimate value, which is taking that to the enterprises that we're, clawing to get not just access to the software because it was free and open source, but to do it in a way that supports an enterprise, which is through support.

I mean, enterprises don't like to adopt something that they have to cowboy, necessarily. I got told recently saying cowboy is a negative term. It's not a negative term. It's just, cowboys are cowboys, you know? Get over it.

**Jerod Santo:** \[laughs\] I think they're talking about the Dallas Cowboys. That's a negative term.

**Adam Stacoviak:** You cowboyed it \[unintelligible 01:13:38.04\] I mean, they have to cowboy without support. And so you've landed at a place that you can keep doing that, which is great.

**Ashley Jeffs:** Yeah. And also, we actually have people being paid to work on the project for like the first time. I'm not just asking contributors who've already like sacrificed a lot of their free time to learn all this stuff and get into it to, once again, "Can you do something for free, for the sake of this user?" and that kind of thing.

I didn't mind having contributors sort of orbit. Mihai was one of our top contributors, and he enjoys working on the project, just like I do. But I felt this constant shame that I couldn't do something better than just "Hey, isn't it great that you're working on this project with me? Yo...!"

**Adam Stacoviak:** Meanwhile, his kids are going, "Daddy, why don't you have a job at Google?" \[laughter\]

**Jerod Santo:** "Why doesn't Benthos give you money, daddy?"

**Ashley Jeffs:** And we're adding features. At the end of the day, if you're a Benthos user, there's a whackload new stuff on it that you didn't have before. And some of the stuff works a lot better than it used to, because we actually can now...

**Jerod Santo:** "We actually care now..." \[laughs\]

**Ashley Jeffs:** If you're like an actual user, there's a lot there that's obviously very, very positive. It's just that the immediate aftermath was difficult, because we didn't have anything to show at that point. We were just telling people "This is an acquisition." So there's no benefits to show them at that stage other than "Hey, isn't it great that there's shareholder value?" And we're telling them that all these things are changing, "We've done a rug pool on all these licenses, get over it!" It's just difficult, but it was fine.

I did a live stream, either the day of or the day after, just to like talk people through what was actually changing to the repo. And to be honest, most people are either neutral - they don't really care; as long as the software still exists, they don't really care about any of this stuff, because they just use it for work, because they're a normal person who has a job. Or there were people who were happy about the fact that there's a serious mission behind this now, this sustaining, in theory, rather than just me doing it... Like, people used to complain about the bus factor before the acquisition, which is perfectly valid. So there's that now they no longer have to worry about.

\[01:16:11.02\] I mean, I wasn't disappointed, but I obviously understood that there was a bit of a backlash. To be honest, I kind of enjoyed the Hacker News drama, because I don't get opportunities to be on Hacker News much... So it was nice to just be in there. "Oh, it's Ash here. I'm the maintainer, and this is my thoughts... And I know I'm going to go straight to the top of the comments, because I'm the person being talked about." It's like free attention. Like, you get attention and you're like "I don't have to do anything."

**Adam Stacoviak:** Yeah.

**Ashley Jeffs:** "I didn't have to post it."

**Adam Stacoviak:** What's an alternate universe? I mean, you didn't have to be acquired. You could have had -- let me just paint maybe a potential alternate universe. Like, Redpanda could have just been a large, as they were, sponsor, right? They could have continued in perpetuity that way, or done a larger swath and left you in that indie world.

A not quite similar to acquisition, but they could have endowed you quite well, as well as others could have. But at some point, something would change. Like you had said, somebody would have made their own thing, they would have had a larger team that was a Benthos team, and they would have outweighed you in capability and talent, and rendered you, to some degree, obsolete.

**Ashley Jeffs:** Then I could have just been the goofball, and not having to do anything. So I thought about -- there was different outcomes that I planned for... Because the way that I would describe the whole process - because it was chaotic. I was doing all kinds of like random stuff. But the way that I would describe it is I was always -- imagine I was on a hike, going to some town... And that's all I'm thinking about, is I'm just enjoying this hike going to this town. And eventually I'll get there, that's my goal. But all roads lead to Rome, and everybody's looking at me like "Hey, are you going to Rome? You're probably not going to get there. It's very difficult to get to Rome." But to me, I'm just going to this next town, or whatever. But in my head, I'm thinking, "Well, if I did get to Rome, this is what I would do. And this is how -- when I'm walking on my little hike, this is how I know that I'm prepped enough to get to Rome, if it ever got that far." And it was kind of like that with this project, where there were various outcomes that were potential candidates for things that I would have done at this stage. So one would have been VC funding. That's the thing that everybody shouts. "Why have you done this?!" And I consider that -- I talked to loads of VC partners, VC owners, various levels, various sizes, just to kind of get a bit of a sense of what their expectations are and what it looks like. Because I didn't know. I'm just like some guy in the UK, so I'm not particularly exposed to any of that stuff. And that would have been one option, is do a VC round, and then try and aim for the stars.

The problem there is -- it's the same with a few of these streaming tech projects, where I'm just one piece of the overall puzzle, and the actual streaming service is like the biggest piece. You're going to spend more on Kafka than you are on Kafka Connect. And likewise, Flink and all these other things are kind of like additions, but your main thing is the core streaming technology and the storage of that, usually.

So I would have had to have had that competency baked into this new startup company, and that's not really in my mind. Like, I'm thinking about the product side of Benthos. I just thought "It's a possibility", but there's a big gap there in stuff. And also, I wasn't 100% sure if I'd enjoy it, being that kind of high up in the organization. I've worked at startups, but I've never been like CTO or CEO. So I wasn't 100% sure I'd enjoy that. I think in hindsight, I would have been fine. I would have enjoyed it. Maybe not with young kids, but I would have enjoyed it.

But yeah, the other option is just band together people in the industry that could be like partners, and get them to sponsor me. And there was prior art for that, because Synadia were sponsoring me. And like, if I had 10 Synadias all sponsoring me, with similar kind of like setups, then that could have sustained me and I maybe could have like hired people as well. But the problem there is just because you've got one doesn't mean you can just keep repeating that. I think Synadia would definitely --

**Adam Stacoviak:** \[01:20:29.25\] Or that it's guaranteed to be there next year.

**Jerod Santo:** Right.

**Adam Stacoviak:** It's really hard with yearly contracts renewing.

**Ashley Jeffs:** Yeah, exactly. And when you've got 10 of them, they're not necessarily going to see it as beneficial anymore. So they might not want to give you as much. And that's fair enough. It's free money with no obligations, so there's no way of like tying them to it. I cannot imagine hiring somebody under those conditions, and knowing that my job now is to keep this impossible task of getting people to be kind enough to do these donations. I was really lucky with Synadia. Synadia were amazing people, that came in at a really good time. And I'll be forever thankful for that, but I couldn't imagine like repeating that. I don't think it would have been realistic, because it's just a difficult thing to kind of arrange.

It's really easy to get -- if you've got a really popular project, it is really easy to get somebody to give you like a sponsorship. So there were a couple companies that gave me a sponsorship as part of their open source initiative kind of thing... But I would need those all the time. I'd need to have a constant feed of those happening. And the amount of effort invested into doing that... You might as well just have a support company that just sells support, and then it's way simpler. It's like trying to get sponsorships for giving free hot dogs away, when you could just sell the hot dogs. It seems a lot easier to just do that. It's difficult.

But the other way was to just accept that life is fleeting, and I can live off my current income. Why don't I just do this forever? And I think if -- if I could just delete my family... \[laughter\] Maybe that's the trajectory I would have had.

**Jerod Santo:** You've said that way too seriously.

**Adam Stacoviak:** Yeah, he did say that way too seriously.

**Ashley Jeffs:** \[laughs\]

**Adam Stacoviak:** You are a unique individual, that's for sure.

**Jerod Santo:** Right. This felt more like you're making a deal.

**Ashley Jeffs:** If some villain accidentally deleted them. Not me. I would never do that. But if that were to happen, then maybe I would have just carried on... Because I did enjoy that lifestyle. Just having sponsors, and a humble life, and all that stuff... It would have been fine. But it's just difficult when you've got like a family and you've got to be an adult.

**Jerod Santo:** You've gotta answer those questions, you know...

**Adam Stacoviak:** Here's a question for you, though... Did Synadia miss the boat, the opportunity to acquire?

**Ashley Jeffs:** I can't really give any -- I can't tell you any of that stuff.

**Adam Stacoviak:** It is video and you can nod, or make a face.

**Ashley Jeffs:** Not really, because I think basically -- at the end of the day, an acquisition, two companies coming together, you have to have a really good plan for what you're going to do afterwards. And I know of founders that they -- they had a project, they got acquired, and then it just kind of fizzles a bit, because you don't really have like a solid business plan. If your whole business doesn't hinge on that deal being a success, then it might -- I mean, I've worked at companies that did all kinds of acquisitions, and I've seen what it looks like to be acquired... And then it turns out, actually, "We don't really think all that's useful to us. It's like a business, and we like what you're doing, and we're going to let you continue doing it..." And it just feels like it's not a great scenario for everybody involved.

\[01:23:58.25\] There were lots of companies that I could have spoken to and could have could have had some sort of deal with. I can't give details as to -- I'm pretty sure I can't give details about who I talked to. I would assume I can't, even just ethically. But if that had been one of the ones on the table, then it's a scenario where you have to weigh up lots and lots of different things... And part of it is how seriously do they have a plan behind the thing that they're buying, and what does that look like for the next few years? Because you're doing an acquisition to be working there for a few years, so it's a very difficult scenario. Just because you're \[unintelligible 01:24:43.00\] mates with another company doesn't mean it's suddenly going to make sense to just suddenly come together and sort of blindside -- imagine turning up to a factory and just be like "Hey, you owe me now, and come up with a business plan for how we're going to work together!" You're kind of forcing them into a scenario there.

**Adam Stacoviak:** Yeah, for sure. What I know about Synadia, or at least NATS, which is sort of sits above NATS... It's NATS in the cloud, basically. I'm paraphrasing and botching my description of Synadia and NATS. But from what I understand, NATS generally tries to render Kafka obsolete. It tries to be the better Kafka. It's got a different way of doing things.

**Ashley Jeffs:** Yeah. They've got JetStream as well, which has way more overlap than the original NATS.

**Adam Stacoviak:** Right. And I just wonder if -- it's kind of funny that they were sponsoring you. I think that they would have had to have some ambition for doing so, not just simply generosity. Sure, Derek Collison is a great person, running Synadia and founder and creator of NATS, all that good stuff... But there had to be some motivation behind it, not just simply an altruistic motivation to do so.

**Ashley Jeffs:** Yeah, I mean we made a load of content together at the time... I had a user base that overlaps massively with all of these companies. So it's not just Synadia and Redpanda. There's also -- I mean, obviously, WarpStream and Confluent, all the various Kafka shops... But also AWS, Azure... All these various streaming technologies. There's a huge overlap with my users and those companies, because they're using my product to integrate with all of theirs.

So there is an incentive to all kind of come together and have like a sort of shared marketing message. Obviously, if I did that with every company at the same time, then it would kind of render them all obsolete, to an extent. I mean, maybe \[unintelligible 01:26:45.09\] and it would be good, but... Yeah, there's definitely an advantage to it. Because them sponsoring me -- I was a super-vocal proponent of Synadia at the time. I mean, I still am, to an extent. Obviously, there's a bit of a conflict there now... But I'm indebted to Synadia, and I definitely felt that way at the time. And we made content together, we did all sorts of kind of shared stuff... But also, I was working on the NATS components within Benthos at the time, and obviously, them being a sponsor of mine, I put a bit more attention to that than maybe I otherwise would have.

So there is kind of an indirect, non-contractual sort of thing going on there. But I genuinely think they're just really nice people. And it's very difficult to prove that that's what's gonna happen... Like, you're gonna donate to somebody and then that's how the relation is gonna play out. So they're kind of taking a risk with this whole idea. And I just think there's various things going on there, is what I would say.

**Jerod Santo:** \[01:27:54.12\] Sure. What happens after that acquisition with your GitHub Sponsors? Do you just go back to them and be like --

**Ashley Jeffs:** \[unintelligible 01:27:57.21\] Understandably, everybody basically just immediately turned off. Because why would you? Like, I've got a company now, and... I think that's fair enough. Yeah, there were sponsors that were giving me quite a lot, and some of those lasted a few months... But to be honest, my assumption was that they would all just disappear. I've closed it now. I'd feel a bit uncomfortable with people sponsoring me now, because I feel like I'm monetizing the project, so I don't really feel like it's a reasonable thing for me to go out there begging for it. I mean, I know that's not what's happening. If you've got a Sponsors page, you're just kind of like asking for tips, and for most people it's nice because it's a bit of validation that somebody uses and appreciates your thing... Whereas I was in a position where it was an actual like source of income. So I feel a bit conflicted about leaving it there. Even if people just want to give me like a tip of the hat, I feel like - keep that money and buy me a drink if you see me in person. But otherwise, I appreciate you, but...

**Jerod Santo:** Well, where do you go from here? What happens next? I mean, is this the end of your story?

**Ashley Jeffs:** Yeah, that's it. Yeah, I'm just gonna play video games... \[laughter\] No, there's tons of work. I mean, as soon as I joined Redpanda, there's a mountain of stuff to do to get everybody in action. So I've got enough work to get on with; as much as I want, I can chomp down on. But I'm not really sure long-term, because basically the idea is to make myself obsolete. So to build a team that's big enough, build enough competency, and... I mean, that's not even just happening at Redpanda, because as a consequence of this technology being kind of adopted and proven, I think is the business speak way of saying it. Because lots of people are adopting it, that maybe otherwise wouldn't without a big company behind it. There are other companies that are now gaining more competency around the technology. So there's much more redundancy there than there ever was before, so over time it's looking more and more and more like I could just step away and it doesn't matter; the project will just keep on going. Whether there's a fork war in five years time, I don't know. Maybe it does just fizzle out one day.

My plan is to keep on working at Redpanda on it. The team isn't anywhere near as big as I would eventually want it to get to, so there's a lot of work there to do. Eventually, I will stream again, because I used to do loads of like community stuff, but that's kind of fizzled out a little bit with the little kids... But eventually, I'll get back on that. But yeah, I don't know. I could get fired. \[laughs\]

**Adam Stacoviak:** It's true.

**Ashley Jeffs:** They could tell me "You're too much of a goofball. We're done with this. We're sick of it." And then I don't know. But stay tuned.

**Jerod Santo:** Well, the future is unclear, but probably positive, unless the whole firing thing happens...

**Ashley Jeffs:** The future is terrifying and unknown, and I'm here for it.

**Adam Stacoviak:** Yeah. That's true. You could get fired. Unlikely though. I'm sure you've got a contract of sorts, or some handcuffs to hold on to, or hold on to you...

**Ashley Jeffs:** Not really. I'm just a person. I can't force them to employ me.

**Jerod Santo:** \[laughs\]

**Adam Stacoviak:** Well, I've gotta imagine that as part of the acquisition there was some entanglement...

**Ashley Jeffs:** Yeah, but they've acquired me, so the product is theirs. So if they decide that I'm not --

**Adam Stacoviak:** So there's no work contract. There's no guarantee beyond acquisition, basically.

**Ashley Jeffs:** I can't give details. But basically, if I wasn't performing well enough, I'm sure they'd be able to --

**Jerod Santo:** He's expendable.

**Ashley Jeffs:** Yeah, I'm expendable. They can get rid of me. I mean, I'm trying to make myself as expendable as possible. That is almost literally my job.

**Adam Stacoviak:** "Let me go. Must play video games."

**Ashley Jeffs:** I'm unloading my brain on lots and lots of people.

**Adam Stacoviak:** "Do not delete my family."

**Ashley Jeffs:** \[01:32:08.20\] \[laughs\]

**Adam Stacoviak:** Well, that's cool. You're living the dream though. You realize this, right? I mean, you've got to be aware that you're living the dream, to some degree.

**Ashley Jeffs:** Well, if somebody asked me 10 years ago "You know, you're just going to get to work on your open source project at a company", I'd be like "No, obviously not. That's not really feasible." See, I mean, it is... The thing is, when you do this stuff, there's lots of like success stories. Obviously, you had Mitchell on recently. It's crazy success. Those are the crazy ones. Those are the ones that are really insanely successful. But a lot of open source developers, they start with this dream of "One day I'll get to work on this open source forever." But the reality is, it's a great job, it's a fantastic job, but it's not as idyllic as... I would be sad if I'd sacrificed seven years and hadn't enjoyed that time in its own right to get to this point. I would have felt like it wasn't worth it. I would have just gotten the job at Google. But because I did enjoy those seven years, I've enjoyed the journey thus far, getting to this point, and I do really enjoy my job. It's worth doing. But I feel like it's a bit of a cautionary tale to people... Just because you've got an open source project and you've got -- I would rather have a therapist make me really enjoy a normal job than, spend seven years gruellingly working on an open source project that you're kind of getting a bit burned out for to get paid to work on it. Because I felt like a lot of -- this is completely made up. It's complete conjecture, so feel free to cut this from your show... But from the open source founders that I've met, that -- they're not the big ones. They're not the ones with the crazy, huge success stories. The ones that are working on projects where it's not necessarily a huge hit. They're just managing to live off it. And it's much more of a grind, it's much more of a gruelling process. The main theme is they just want to be able to work on whatever they want, and that's really important to them... To the point where a normal job doesn't necessarily sit well with them. This is what they want to do.

So there's almost a whole other level of motivation to continue working on this particular thing, even though logic would dictate "You should just get a job. You should just get a normal job." And I feel like -- they're not miserable people. They're not sad, or anything like that. They've still got a nice lifestyle, they've got a nice career, but I feel like sometimes you'd have just been happier to just get a normal job and learn to be okay with that, if there's something going on there that you can't work with people. I definitely had that, to an extent. I had a deep need to pick my own work, and build the thing that I wanted to build, not the thing that somebody else was planning or suggesting. But I'm over that now. I'm a well-rounded person now.

**Jerod Santo:** \[laughs\] Just video games.

**Adam Stacoviak:** I'm just thinking about that really, because I think I empathize a lot with that position, because... Jerod, I think you and I lamented on this, to some degree, in our most recent IRL, where we just thought... I'll paraphrase some of the conversation, to my knowledge at least, was "Wouldn't it just be easier just to have a job?" Because --

**Jerod Santo:** Oh yeah, I've asked you that on the show before, too. And Adam's like "Are you thinking about it?" I'm like \[unintelligible 01:35:56.10\]

**Ashley Jeffs:** \[laughs\] This is his resignation...

**Jerod Santo:** I mean, I think about it... I do think about it. I don't think that hard about it...

**Adam Stacoviak:** \[01:36:04.22\] Well, I think it's normal to fantasize about that. I think it's normal to fantasize about that up until the point of actually doing it almost, because it is kind of the... I don't want to call it the Easy button necessarily, but it's certainly a lot easier than the constant roller coaster of running or creating your own thing. Because when you run or create your own thing, you are fully in charge, especially in a scenario like we are in in particular, which is indie media. We literally have yearly contracts that change, if not quarterly contracts that change. So it's super-challenging for us to build a business foundation beneath that... And we only get driven by previous year's data. So if the trajectory is up into the right, we feel a lot easier pushing on the gas. But every year is a roll of the dice, basically. Like, who's going to come back and love us the same that they did the previous year? Or who's coming up new that we really can support, that will support this indie media business we're building?

And I think it's super-normal to fantasize about this "What if I just got a real job? And then I wouldn't have to worry about any of this stuff." But then I think, "Gosh, I would have no, or seemingly no agency over my day-to-day." I can't command my own dreams. I can't have these big ideas, and then begin to execute on them incrementally, over time, and tackle big problems I think are worthy of solving, versus what someone else tells me their dreams are. Something they think is worth being solved. And I think that's where I empathize, because the Easy button, to some degree, is just to go get a job, and work on somebody else's dreams. The hard button really is to work on your own. But that is the most, in my opinion, the most rewarding.

**Ashley Jeffs:** Yeah. But it also means you're on the hook. So when things go bad...

**Jerod Santo:** For sure.

**Ashley Jeffs:** Oh, there's nowhere else to go.

**Adam Stacoviak:** But at least I'm in control, to some degree, on the daily at least, to tackle my own dreams, to pursue my own dreams, to identify my own dreams, versus somebody else's.

**Ashley Jeffs:** I think it's the grass is always greener scenario for most people.

**Jerod Santo:** It is.

**Ashley Jeffs:** I think some people have a -- there's something going on there in their brain. They just have to --

**Jerod Santo:** And here's the challenge. Obviously, those who have regular jobs would love to have a business, and those who have businesses would love to have a regular job every once in a while.

**Adam Stacoviak:** Amen.

**Jerod Santo:** But then there's also this challenge of like - the grass is greener, of course, is a cliche, because we all look across the yard and see somebody else's grass, and we think it might be greener. But there's also this other thing that might happen, is it might actually be greener over there, which is kind of what you're saying, Ash.

So every once in a while, you've got to stop and analyze and be like "Am I just assuming it's greener over there, because I'm used to my grass? Or maybe I'm actually the guy with the brown grass over here." And that's a hard thing to wrestle with.

**Adam Stacoviak:** Or, the grass is greener because there's affluent water being sprayed in his yard.

**Jerod Santo:** Well, that's the thing. If you take care of your grass, man, it's going to be green.

**Ashley Jeffs:** You don't have to do that in the UK. The grass is just always green. That's just for you guys... We love our clay. We love our clay mounds in our gardens.

Yeah, I was going to say, the concerning thing for me is when you see people who - they're not happy with the current situation, and they're kind of like pushing on regardless... I don't want to tell people just stop. Like, somebody's got an open source project, but they're burnt out, and they don't enjoy doing it anymore, but they feel like they have to. It's really difficult to just tell them like "You should stop what you're doing, and do something else." But I think that there's a lot of exploitation, not by design, but just by accident, that happens.

\[01:39:59.10\] I mean, it's the same with any other company. It doesn't have to be open source. It could be somebody gruellingly working on their startup company, and it's just not working out. There's all these other scenarios. But I think the difference is that when somebody's making open source and they're putting themselves out there, they've got this project, it gets a bit of attention and then they feel like they're kind of obligated to keep working on it... There's no one there protecting them from not seeing that you're being exploited, basically. These people are never gonna pay you for what you're doing. They're never gonna compensate you for it, and they will just keep taking, more and more and more, if they can. Not all of your users; some of them are like nice people and they just can't afford, or you don't have like a good revenue stream or something, for other reasons... But there's a lot of people out there doing a lot of work. I mean, I was one of them. Before Benthos, all my open source projects were -- to some extent, I just worked on them for fun. But then eventually you get attention and then you kind of feel like "Oh, I have to do this pull request. I have to fix this issue. I have to do this release." And you're never gonna get compensated for it. You're never actually gonna get thanked for doing a lot of that work.

So if you don't enjoy it, then ideally, you need to be protected, to some extent. And I think open source is very risky, because there's absolutely nothing between you and the people that are just gonna keep taking, taking, taking. And they don't know what they're doing. They don't know that they're doing that to you. They're just using your thing. They think they're doing you a favor by using your thing and interacting with you. But for a lot of these people, they're giving you their life. They're giving you their time, and their energy, and they don't necessarily have anybody in the chain saying "Oh, well, it's done now. Time's up. This hasn't become a massive success." Or "We've done enough here. We've solved the problem. Let's just walk away now and be happy with what we've made." Because it's just you and the internet. Like, there's no filter. There's no gap. There's no one else. There's no daddy.

**Jerod Santo:** Right.

**Ashley Jeffs:** I wanna be their daddy.

**Jerod Santo:** There's no daddy pig.

**Ashley Jeffs:** This is me being their global daddy pig. "Stop what you're doing." Or just take a break. Take a breather.

**Jerod Santo:** Take a break. Step back.

**Ashley Jeffs:** Stop working on it for a bit.

**Jerod Santo:** What we need is some sort of a resource that's like -- like healthy open source habits or something, so that you can have a proper relationship with your project.

**Ashley Jeffs:** Yeah, people won't read it.

**Jerod Santo:** Well, we get a mellifluous voice to read it to them.

**Adam Stacoviak:** That's right.

**Ashley Jeffs:** \[laughs\]

**Adam Stacoviak:** The one who cares would listen.

**Jerod Santo:** Have Adam read it and we'll just send it out into the airwaves.

**Adam Stacoviak:** That's right. "Healthy open source."

**Ashley Jeffs:** They'll add a feature to GitHub where when you click the pull requests tab, it just asks you "Are you actually enjoying this?" And then if you click no, it just redirects you to Reddit...

**Jerod Santo:** \[laughs\] Where they know you won't enjoy anything. Okay, let's wrap this up. A quick thank you, while we're thanking -- we're thinking about thanking people or not thanking people, exploiting them for their work... But one thing you can do for an open source maintainer that you appreciate is thank them. I wanna thank our listener Hector for requesting that we have Ash on the show. Did you know that, Ash? This was a request of a listener to hear more from you.

**Ashley Jeffs:** Thanks, Hector.

**Jerod Santo:** So there you go, Hector. I hope you enjoyed this. Take it or leave it. It's all we have to offer.

**Ashley Jeffs:** Thanks for dragging me out, Hector.

**Jerod Santo:** \[laughs\] And if you don't know that we take requests, we absolutely do. Changelog.com/request is where you can tell us what you would like to hear about on the show. Ash, is there anything left unsaid? I'm sure there is, but anything worth saying that's left unsaid?

**Ashley Jeffs:** Oh God, please edit out anything I said that's stupid...

**Jerod Santo:** No promises. \[laughs\]

**Ashley Jeffs:** Or at least add this disclaimer, of like -- I'm a very tired person in general. So if I did say anything stupid, just keep that in mind. Including lawyers.

**Jerod Santo:** Lawyers don't listen to our show.

**Ashley Jeffs:** \[laughs\]

**Adam Stacoviak:** If they do, it's for evidence.

**Jerod Santo:** Don't tell them that...

**Adam Stacoviak:** \[laughs\]

**Jerod Santo:** Uh-oh...

**Jerod Santo:** We also have transcripts...

**Ashley Jeffs:** I'll be on again after getting sued. I'll get to tell you about the me getting sued story...

**Jerod Santo:** Well, we appreciate you opening up and...

**Adam Stacoviak:** Exposing yourself. \[laughter\]

**Ashley Jeffs:** I'm going to go have a cry. Have a nice private cry after this.

**Adam Stacoviak:** Sorry. I had to do that. Last jab... No, Ash, it was good. Thank you for sharing the deeper details of the journey, really.

**Jerod Santo:** Absolutely.

**Ashley Jeffs:** Thank you for having me on the show.

**Adam Stacoviak:** It's cool that you've been able to make it, it's cool that you've done something so valuable that you could be acquired, and you've found the right path to be done... That makes you happy, ultimately, and then adds value to so many people. And the contributors that have been taken care of as part of this acquisition. That's cool. It's good stuff.

**Jerod Santo:** Right. And now your kids might respect you.

**Adam Stacoviak:** That's right.

**Ashley Jeffs:** \[laughs\] \[unintelligible 01:44:51.01\] You haven't met him. He's brutal.

**Adam Stacoviak:** Google's renamed to Redpanda. Tell them that.

**Jerod Santo:** There you go.

**Ashley Jeffs:** Well, it's been a pleasure, so thank you for having me.

**Jerod Santo:** Thank you.

**Adam Stacoviak:** Thank you, Ash.

**Outro**: \[01:45:09.04\]

**Jerod Santo:** Quick question for you. Benthos - was that a Mentos joke?

**Ashley Jeffs:** So it was like -- it was nothing...

**Jerod Santo:** The Freshmaker. Notice my label down here is Freshmaker, because I'm like Mentos.

**Ashley Jeffs:** Part of the theme -- people think the theme was like deep sea. The theme was actually just "All of this is throwaway." The name, the logo.... This is all just like stuff that --

**Jerod Santo:** Oh, it's like trash. The theme was trash.

**Ashley Jeffs:** Yeah. It's the bargain bin of logos, and marketing visuals. So the name, I just -- I did google search deep sea, because I already knew I wanted a stupid blobfish as the mascot logo. And then I just went on Wikipedia, clicked a blue link, clicked a blue link... This is how I do a lot of my names. Click a blue link, and then eventually you find a word that is like -- it's a word, so it's something that people can say... It means like -- it's the scientific term for like the scum at the bottom of the ocean...
