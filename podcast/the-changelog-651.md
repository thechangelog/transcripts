**Jerod Santo:** Today we're joined by Sugu Sougoumarane, co-creator of Vitess, co-founder of PlanetScale, and now the head of Multigres at Supabase. Sugu, we are excited to have you here.

**Sugu Sougoumarane:** I'm very excited to be here, too.

**Jerod Santo:** I'm excited to see you back at work... You've been off work. You said -- you just told me you took a three-year sabbatical? Is that accurate? Is that true?

**Sugu Sougoumarane:** Yeah, yeah. I even wondered if I was going to come back, until, you know, I started feeling the itch... And yeah, that's what brought me back in.

**Adam Stacoviak:** Were you gardening? You know, ripe tomatoes... What kind of vegetables did you start growing?

**Sugu Sougoumarane:** \[laughs\] I actually went on a self-reinvention of some sort. I kind of did a full debug of myself of some sort.

**Jerod Santo:** Did you climb a tall mountain, or how did you do that?

**Sugu Sougoumarane:** Oh, no, just sit at home, think, walks... And a lot of thinking. And I even got into doing some voluntary work, because I realized as a human -- basically, I thought I should be more human, and that led me into a bunch of voluntary work, which I actually started to do. And I even thought of going full-time. Then I realized it's not something you can do full-time... And that's when I realized that I'm starting to miss the fun of doing technical work. So I started doing some advisory work and stuff, and slowly I got pulled back in and realized "Oh my God, we've got to do this project!", which is how I am where I am today.

**Jerod Santo:** Did it take -- how long did it take before you started getting that itch? Because three years is a pretty long one. I think by that point I might be detached enough to not get the itch again.

**Adam Stacoviak:** I agree.

**Sugu Sougoumarane:** It was strange... I think last year, sometime late last year. So for about six to eight months I've been feeling the itch. I think it started because I'm still in touch with friends, and stuff. They used to ask me for questions and help about things... And then as you answer, you kind of enjoy that you did it, and you say "Okay, maybe I can--" Then I talked to some people and they said "Oh, someone like you is still useful." And as you realize, the last three years everything changed in the industry. AI actually -- the first GPT came out just when I went on sabbatical, around mid 2022, I think. And when I thought of coming back, I thought "Maybe I'll be obsolete, or something. Because I don't know anything about AI..." But then it turns out that infra is still way behind.

**Jerod Santo:** Yeah.

**Sugu Sougoumarane:** And they say "Oh, what do people desperately need?"

**Jerod Santo:** Databases still matter, it turns out.

**Sugu Sougoumarane:** Databases matter, infrastructure matters... Nothing much has changed in that area. So I came back and slowly got back into things.

**Jerod Santo:** What pushed you away in the first place? Why did you go on that sabbatical? Had you accomplished all your goals? Were you burning out? What was the situation that made you \[unintelligible 00:07:08.26\]

**Sugu Sougoumarane:** Both of those, actually.

**Jerod Santo:** Both. Okay.

**Sugu Sougoumarane:** So this was 2022... I had been working on Vitess for 12 years straight. We started Vitess in 2010 at YouTube, and... Vitess is an enormous project. And for a while, I was the sole maintainer of Vitess. And it was -- it's a pretty big load on your brain. And after I founded PlanetScale, hired a team and trained them, and finally, the team was outproducing what I could do... And that's when I realized "Okay, it's now time to recover from this huge load that I've been putting myself through." And that's what led to my taking the sabbatical.

**Adam Stacoviak:** \[08:07\] What year was that again? Was it around the time that you -- I'm not familiar with the story behind the scenes really with Sam Lambert, but I guess I'm tangential friends by having him on the show, and hearing his backstory, and PlanetScale's early story, and mainly taking over the CEO role and what that did for PlanetScale at that time. What time was that you stepped away, and was that the time that you brought on Sam as a CEO?

**Sugu Sougoumarane:** So I think my memory may be hazy here... I think he came on board around 2020. Sam has been a fan of PlanetScale from the beginning. He even did a Sequoia Scout investment when we launched. And so he has been following us, he's been actually advising us also in the early couple of years... And then in 2020 he came on board as I think CPO, Chief Product Officer. And he changed the whole image of PlanetScale. Until then, we were very - what I would call a serious backend database, but in some respect boring of some sort... We were pretty serious, we would do things, but now we were -- he brought the excitement in when he came on board.

The first feature he launched was the schema branching and merging, which the dev community completely loved. And that was around '22. Jiten at the time was CEO, and Sam talked... And they came to an agreement that if Sam became the CEO, that would be really effective, because then he could control the whole story. He became the CEO probably -- much earlier. Probably 2021 would be my guess... I'll have to look it up. It was probably announcements. So he had been the CEO for a while, and then in '22 is when I left also. By that time, the team was all wrapped up. Vitess had a tech lead, so everything was looking great. I almost felt like I was a warm body... \[laughter\]

**Jerod Santo:** Well, that's a good feeling. I mean, you've done a lot of things you set out to do. For those of us playing catch up, can you describe Vitess, what it is and how it helps scale databases?

**Sugu Sougoumarane:** Yeah. Yeah, definitely. Vitess, actually -- when we started Vitess, we thought it was a six-month project. \[laughs\] So YouTube was actually in deep trouble scalability-wise. There were more than a handful of outages every day. Sometimes 10, 12 outages per day, and they were all caused by the database. I would say outages 10-12 pages per day. Many of them would lead to outages, and they were all caused by the database. That's the time when my co-creator, Mike Solomon and me, kind of decided to solve this problem once and for all. So we decided to take ourselves out of this firefighting mode and think of a solution that will leap us ahead of where we are today. Because it felt like what we were doing now was a losing battle. It was like whatever we were doing, things were getting worse by the day. And that's how Vitess was born.

\[12:01\] And we wrote code for about a year, actually. It took us about a year to launch the first version. And the first version that we launched was just a connection pooler, which was actually the biggest problem we were having with MySQL at that time. And that immediately gave some breathing room for YouTube. And the way we solved it was we didn't solve it like how you would solve a problem, which is "Let's solve connection pooling." Because we sat and brainstormed about all future problems that we're going to have, we actually built an intelligent proxy that would not just connection pool, but would also understand your queries. So we actually built a parser in that connection pooler.

And once this got launched, people started noticing that this so-called connection pooler is intelligent, and it can do other things beyond just taking care of connections... Like for example fielding bad queries, or watching queries and killing them if they run for too long. And so we slowly started adding those features, and it became an intelligent connection pooler that would protect the database completely.

And that eventually evolved into -- then we added sharding solutions to it, like how do you re-shard... And then we added one more layer, which is the routing layer... And then we realized "Oh my God, this is now almost a fully distributed database. Why don't we make it a fully distributed database?" Which was the final step, where Vitess became a fully sharded solution.

By the time -- we started in 2010. I think what we call as the v3 was around 2014 or so. About four years later, Vitess could be adopted by anyone outside of YouTube. And then the rest is history.

**Jerod Santo:** The rest is history. Open source, mass adoption, PlanetScale, built a business around it... It's a very successful business to this day... Really cool stuff. Kind of an open source success story. I was gonna say "prototypical", or "stereotypical", but not necessarily. But just a good one. Just a good open source success story, with money involved in the business that could be built... Kind of what everybody wants, is build some cool tech, open source it, help companies scale their businesses, provide massive values once and for all, like you said... And then also build a business around it, be able to be successful... And then take a three-year sabbatical when you're all said and done. You're like "Alright, I'm done... For now."

**Sugu Sougoumarane:** \[laughs\]

**Adam Stacoviak:** Yeah. To extend from what you're saying there, Jerod, I think it's wild... Sugu, one thing you mentioned was the nine month or six month you thought that the project would take in terms of like its doneness... But then it turned into a company, and then obviously, PlanetScale has been able to -- and I think others too, have been able to hire and maintain full-time open source maintainers on the Vitess project, not just to support PlanetScale, but to support the project. I think that's just so wild, how you think it's just this little thing, or it's a certain amount of time and solving the scale problems, and the next thing you know it's something much bigger than that.

**Sugu Sougoumarane:** Yeah, yeah. The first adopter was actually a company called Flipkart. I believe they still use the older version of Vitess... Then HubSpot came on board. They still use Vitess, and they have their own operator. They were among the first ones to launch Vitess in Kubernetes. And then later Slack came on board, and GitHub came on board... Now they are still pretty substantial contributors to the project at this point.

**Jerod Santo:** \[16:07\] Well, you said once and for all, and I said once and for all, but the technical facts about Vitess is it's not for all, right? It's for all who are running specific database systems. And one of those alls who aren't part of the all is the Postgres ecosystem... Which has been awesome for many years, but has been exploding, I would say, in the last 5 or 10 years; in usage, in features, in capital support... I mean, there's just lots of excitement and growth in Postgres, none of which Vitess could provide for, right? It was just MySQL-specific, right?

**Sugu Sougoumarane:** Yeah, yeah. I think the Postgres community took note of Vitess a long time ago, as far back as 2018, was the first conversation I had with someone from the Postgres side and they said "Hey, we need something like Vitess for Postgres." And there have been a few false starts on this project. I think the one where we got pretty serious about it was actually in 2020. Someone called -- I don't know, he's pretty well known in the Postgres community, Nicolay. So he and I talked, and we felt that we should do this thing, port Vitess for Postgres. We even formed a sub team and started talking about it.

But you know, 2020, PlanetScale was on the rise... It was just too busy, and unfortunately, I had to make a call, that I have this company to take care of, I have this company to build... I can't afford this distraction at this time. I actually kind of had to back out, saying that I don't think I can do this at this time. I still feel bad about having done this... And this -- so Postgres has been in the back of my mind all along. Even after I went on a sabbatical, I reached out to some of the older contributors and told them "Maybe you can start this project." But at that time they felt like they all had their jobs, and this would all be something on the side... Until this year, when I said "It's now or never." And that's when I said, "Okay, I'm going to take this plunge."

**Jerod Santo:** I think mimicry, or ports, or whatever you want to call it, is kind of a tried and true part of the open source culture. You know, take this good idea from this ecosystem which I appreciate, but I'm not day to day user of, and bring it to my piece of the world, and reimplement it over here, or steal the ideas... And it's kind of -- Vitess has been so successful and so helpful, especially to large companies who are well funded, at helping them scale... I'm surprised that all these years there is not already a Vitess for Postgres, community built, or coming out of a startup or something... Lik, no, Sugu has to do it, right? The Vitess people are going to do it.

**Sugu Sougoumarane:** I don't get this -- yeah, I don't know why I had to come and start this... \[laughs\]

**Jerod Santo:** Is it that hard? Because usually, you look at something and you think, "It can't be that hard. I'll do it over here." Is it that hard of a technical problem? Or is MySQL and Postgres implementation-wise so dramatically different that even the concepts don't necessarily come across? What's that chasm look like?

**Sugu Sougoumarane:** I think it is more of the first problem. The fact is sharding, if you go and ask in a university, they'll say sharding is one of the oldest concepts in databases. It's over 30 years old. But the issue with sharding is that nobody ever worked on it, nobody ever developed it into something practical, that will actually work in production at scale with performance...

\[20:22\] Which is actually strenuously hard. For me to make the leap from an application sharded system to a system where the application does not care about sharding, and generically implement it in a database, it took me about -- I literally sat and thought for three months straight, nothing other than just pure thinking. Understanding SQL, understanding query complexity, understanding relational algebra, going back all the way... Because, okay, how do I shard it? You go hit the books, you go look at databases. Nobody has ever done this before. And so then I realized, "This needs to be basically reinvented from the ground up."

So that was one of the hardest, one of the most strainful thinking things that I have ever done in my life. There were times when I used to get headaches thinking about it, it was that hard. And finally, one day I had the a-ha moment. "It looks like I have an answer to all the questions to make this thing work as a sharded environment, as a sharded system." And it's possibly that is a typical -- when you get a query, the typical way you break it down is different from how you would break it down in a sharded system... Because you get a select statement, you pass it, and then you identify each of those nodes, and you just assign operations to it in a traditional database. And then you run the optimizer that rearranges these things. But in a sharded system, you have to identify groups of things that actually don't need to be changed at all, because there is an underlying database that can execute that entire query with no changes, because what's underneath is also a database.
So being able to analyze queries and identify these subparts and be able to outsource it to a database, and then do the rest of it on your proxy that's actually sending the queries required a different kind of thinking. I think that is one reason that I could think of why sharding is hard.

**Jerod Santo:** Can you describe your a-ha moment, like what your realization was? Or did you just try to describe it in other words and I missed it? Because it sounds like you're describing the problem and the system with the proxy in there. But what was it that cracked the nut that said "A-ha! We can do it this way"?

**Sugu Sougoumarane:** Yeah, so how did I do it? The a-ha moment was -- actually, there was an early a-ha moment, an early a-ha question, which is... So before sharding, before this generic sharding was there, the way the application worked was it would actually send a query, and along with the query it'll tell you where to find the rows for this query. We called it the keyspace ID, which basically helped you -- there's a lookup where you look up the keyspace ID, it tells you "Oh, this keyspace ID can be found in this shard." The application had to guarantee that all the rows for that query lived in that shard. So that made it extremely simple. And keyspace ID was also a value, a column in every table that we had, which made it safe and simple, which means that you can't go wrong.

\[24:24\] And the question I asked myself is "This keyspace ID is a crutch. Can we move without it?" And it was scary, because the application knows the keyspace ID. But how would this system know the keyspace IDs? Vitess does not know the keyspace ID... So if you just sent me a query, what do I do with it? I don't know where to find this. And so I went to the application and realized "The application is figuring out what this keyspace ID is. How is it figuring it out?" And that's when I realized "Oh, it's figuring it out based on the user ID." So there is a source. And it always turns out that that source is also in the where class of every query that it sent. And that's when I realized "Oh, well, if the application is doing it, what if I did it for you?" You say \[unintelligible 00:25:24.04\] and I will do this computation, which is a hash function, and figure out where it is and send it.

So then the question is "Oh, then in that case, how about the other queries?" There were other complex ways by which the application was computing the keyspace ID... And that's when what if we internalized each and every one of those things, then the application does not need to ever compute the keyspace ID. We will do it. So that was the first a-ha moment. And then the second a-ha moment was -- the second question is "But in that case, only these queries." So that limited the number of queries the application could send.

The next question was "But then if we took this over, what if there's a query that came where a keyspace ID could not be computed? What would we do?" That's when I realized, "Okay, then I have to understand the query." What if it's a join? What if it's a correlated sub query? What if it is a non-correlated -- so that's when I had to go into relational algebra and find a way to map any random query to a query plan where I would say "Oh, this query, I need to send it to all shards." Or "This query, I can send it to just this one shard." Or "This query is in multiple shards, but I cannot send it to all shards, because I need to take data from here and then data from somewhere else..." So the a-ha moment is when I identified all these primitives, and I could prove to myself that using these primitives - I call them the route primitives or the sharded primitives. If I used these, I can satisfy any query.

**Jerod Santo:** Gotcha.

**Sugu Sougoumarane:** The full SQL language can be supported, eventually. We just need to do a -- so the first implementation only supported some constructs, and then we slowly started adding more and more. But we knew that theoretically, all SQL can be supported in this sharded system.

**Jerod Santo:** \[27:41\] So to the Keyspace ID point - so I understand the relational algebra and the entire SQL dialect, supporting all the keywords over time. That makes sense to me. The keyspace ID - as a non-Vitess user, I'm not sure how it works. Does the infra person or the team that sets this up, do they have to go in and somehow configure it to know how you should shard against this particular application, so that it can do the keyspace ID thing? Or is it just -- because different databases have different, as you know...

**Sugu Sougoumarane:** Correct, yeah. There's a cool story there... The first keyspace ID was actually a random assignment.

**Jerod Santo:** Okay.

**Sugu Sougoumarane:** So we would take a user and say -- I don't know if it \[unintelligible 00:28:29.25\] I actually don't remember how we initially computed. We used to randomly assign them to shards. Actually -- oh, now I remember. A user was assigned a shard, and we would put the shard number in a lookup table. It's random. So when a user gets created, they are assigned a shard, and the shard number is put in a random table.

**Jerod Santo:** Sure.

**Sugu Sougoumarane:** And then came the time when we had to reshard it. And we realized "Oh my God, how are you going to reshard this, because now there is this table?" That's when we transitioned to keyspace ID, where we assigned a unique ID to a user, and then we actually assigned that keyspace ID -- we changed actually this lookup table to replace the shard number by the keyspace ID. And at that time, we populated every table with the keyspace ID. And then we realized that we are wasting this lookup for no reason at all. Then we did a full resharding, where we did ranges based on keyspace IDs... In which case you just hash the user - you have the keyspace ID - and then that goes to that shard. So that's how we evolved at YouTube, from where we started. But at that time, the keyspace ID was a column. And the reason the keyspace ID was important there was because we were using MySQL replication to do the resharding, and we had to use that value to decide where the row should go when we resharded. And that was actually another hurdle I had to cross, which is "Can you reshard if you get rid of that row?" In which case then we'd have to make MySQL do that computation to do the replication, which means that it had to be a function that MySQL supported.

The interesting story here is at that time there were a large amount of arguments about "What is the best sharding scheme? Is range-based sharding good, or is a hash-based sharding good?" We spent hours fighting on it. There was no -- or a lookup-based sharding, right? There's so many sharding schemes... And that's when I realized that there is no correct answer. And anything you choose, somebody is going to hate it. And that's when I came up with this idea of no first-class citizens in sharding, which means that Vitess will actually -- every sharding scheme is a plugin, is an extension.

**Jerod Santo:** Gotcha. So you pick the one you want to use.

**Sugu Sougoumarane:** You pick the one you want to use.

**Jerod Santo:** And you don't have any opinions on that, as Vitess.

**Sugu Sougoumarane:** Exactly. Exactly. That goes back to actually a story from -- I don't know if you've heard of Illustra.

**Jerod Santo:** No.

**Sugu Sougoumarane:** \[31:54\] So this is 1990s... Michael Stonebraker had, I think, just launched Postgres. And from that, he -- he founded a company called Illustra, which is a commercialization of Postgres. And the claim to fame for Illustra is that indexes need not be defined by the database. You can define your own index and do it as a plugin. And at that time, I was at Informix, and Illustra was actually winning deals against Informix as a startup. And Informix actually ended up acquiring Illustra... And I loved that concept so much that I actually transferred myself into the Illustra team, to develop pluggable indexes. And that inspiration remained with me all these years. And when I said "We have to develop indexing for sharding schemes", I said "Well, you know what? I'm going to use this idea", where all indexes in the sharding scheme are externally defined.

**Jerod Santo:** Yeah. It makes sense, because -- I mean, oftentimes opinionated software is better. Like, "We do have a golden path, or we do have a way that you should go." You can swap it out if you want, but this is what the framework or the tool thinks you should do. But when it comes to this -- like I said, and like you know, the shape of people's data is so different and custom that there isn't necessarily a best way of sharding, as you guys found. So it's what's best for your circumstance. And so why have a first class citizen when you can just say "No, you're going to figure this one out yourself, because we can't actually figure it out for you"? I think that makes a lot of sense.

**Sugu Sougoumarane:** Yeah. The thing that I'm now starting to realize -- I'm now learning Postgres a little bit more deeply... I find the same ideas still there in Postgres, where indexes are pluggable, you can plug in data types, you can define operators... So I'm kind of feeling like "Oh my God, there's a lot of similarity between--"

**Jerod Santo:** You've gone full circle.

**Sugu Sougoumarane:** Yeah, so it's pretty exciting to see this.

**Break**: \[34:22\]

**Jerod Santo:** So what's different then? It seems like the concepts, the breakthroughs you had with Vitess, the proxy with the parser and the smart way of handling these key spaces, and the bring your own sharding... All this stuff seems like it would apply, at least conceptually, across to Postgres. But I guess at the nitty gritty it's just wildly different, or...?

**Sugu Sougoumarane:** So the part that I'm still trying to figure out is -- so in other words, every idea that exists in Vitess will just smoothly port over to Postgres. But as you said, there may be details where it may not port as well. So there's a few -- at this point, we have made a few policy decisions, let's put it this way. The biggest policy decision is this has to be Postgres-native. So that part we do not want to compromise... Which means that the end product should feel like it should be built for Postgres. So that is one policy decision that we have made. I don't know how far we are going to get there, but that's our North Star of some sort... Which means that from Vitess, there are some parts we will definitely leave behind. For example, anything that's MySQL specific is not coming over.

**Jerod Santo:** Sure.

**Sugu Sougoumarane:** What else will we leave behind? We will leave behind anything that is legacy in Vitess. Anything that we built in Vitess but continue to support because there are users using it, but if we built it from scratch, we wouldn't do it that way... So that we want to leave behind. And also, anything that's not well implemented. If something is -- it works, so we left it alone, but it was not well implemented, given a choice, I would do it differently. So that we are not going to bring over. And everything else, we want to bring over, for sure.

So there are actually -- and there's a fourth category, which is if there are things we can improve, we should. More specifically, I do want to improve the high availability story in Postgres, because that is currently a big challenge that users are facing. There is no good high availability solution, so that is something that we definitely want to improve on the Postgres side of things. So we'll bring some components over from Vitess, because Vitess already has some HA components... So we'll bring some of those components, but we'll also build something that is very specific to Postgres.

And the place where I'm still confused about how to solve the problem - but we will figure it out - is "How do we solve this sharding and query processing"? Because Vitess can do query routing, Vitess has the concept of pluggability... The part that I'm thinking about is the Postgres pluggability is more at the binary level, where you actually build extensions and link them into Postgres... Whereas Vitess is built in Go, which if we brought that in, how do we make these plugins work? Do we have to translate them? Or do we figure out a way to make them still work if we ported the Go code over, is the part that I'm working through right now. Actually, we now have some people hired, so I'm working with some of those people, too.

**Jerod Santo:** Nice.

**Adam Stacoviak:** Does that compromise your desire to be Postgres-native, considering what you learn with Vitess, being written in Go, et cetera? How does that compromise your maybe "Postgres for life" - I might be putting words in your mouth, but like this native Postgres way?

**Sugu Sougoumarane:** So if you look at the Vitess design, it was designed to be -- for the longest time, we didn't want to implement anything specific to MySQL. We thought this should be its own database system, and we actually restricted ourselves to just SQL 92. Because SQL 92 is generic, all databases must support it... Therefore, if we did SQL 92, then it'll work for anything. So we could even swap in Postgres underneath.

\[42:01\] But what we found out is that people were hesitant to migrate over. They said "Oh, I want my application to run as is when I move over", which is what forced us to add MySQL extensions. So in other words, we could port the SQL 92 part of Vitess directly over into Postgres and it'll work. The problem is it's a subset. So if you do anything Postgres specific, it's not going to work.

So I'm beginning to think that porting that means that yes, we can port it, but then we have a lot to build, a lot to catch up to everything in Postgres. And looking at 10 years from now or 5 years from now, when let's say we managed to get full compatibility of Postgres, we will still face the issue of these plugins, these extensions. So that's the problem that I want to think about right now, to make sure that when we get there, there is a solution for these extensions.

**Adam Stacoviak:** Mm-hm. How important is it to reuse a lot of what you learned with Vitess in this new world? Because I've gotta imagine all this work you've put in, and countless hours of open sourceness etc. - like, there's a lot in there. How important is it to bring a lot of it over?

**Sugu Sougoumarane:** The learning is totally valuable. I mean, without the learning, we wouldn't be able to build it. If you say "rebuild Vitess to what it is" - it is a lot of code, but it won't take the 15 years that it took us to build it. \[laughter\]

**Adam Stacoviak:** Probably nine months, six months...

**Sugu Sougoumarane:** Even if we had to rebuild from scratch, it may take us a year, maybe.

**Adam Stacoviak:** Especially with AI, right? I mean, that might be a big help there. I mean, Go is really useful in code gen tooling, and stuff like that, so I've gotta imagine that that might even be a leg up for you to speed up the process, potentially.

**Sugu Sougoumarane:** Yeah, we have been using Claude to analyze Postgres... Yeah, so you're probably right, we can probably do this much faster than even what I'm talking about, if we had to rebuild this whole thing.

**Jerod Santo:** So there's this common movie trope, the retired badass... I'm not sure what this trope is called.

**Sugu Sougoumarane:** \[laughs\]

**Adam Stacoviak:** \[unintelligible 00:44:32.26\] retirement.

**Jerod Santo:** Exactly. For one last --

**Adam Stacoviak:** John Wick comes to mind, Jerod. I'm sorry.

**Jerod Santo:** There's John Wick, Bruce Willis often plays this role...
**Adam Stacoviak:** It's true, yeah.

**Sugu Sougoumarane:** Or the Tom Cruise -- Top Gun...

**Jerod Santo:** Or Tom Cruise, yeah. I mean, pick -- I'm not sure who would play you, Sugu, but you're coming out of retirement for this, because like "We've got to get --" What is it, like Armageddon? ...where like "It has to be these people." Which was funny, because those were like oil drillers, weren't they?

**Sugu Sougoumarane:** Yeah, yeah, yeah.

**Jerod Santo:** It was an interesting setup. But you know, they come out of retirement for that one last mission... You know, "I'm getting too old for this" is a common thing they say... And here you are. But you're coming out with Supabase. I mean, it's a different story. Supabase came from where? Obviously, the Postgres maxis were fans of Supabase, and I know Paul Copplestone, had him on the show a few times... And so we know about them, we know what they're up to. Obviously, PlanetScale was on the MySQL side... But why Supabase? Why come out and hook up with this ragtag group of Postgres maxis to build this thing?

**Sugu Sougoumarane:** So I actually engaged with Copple on a whim, saying \[unintelligible 00:45:41.29\] So when I said "This problem needs to be solved, and needs to be solved now", my first thought was "I should start a company me. Let me do a startup." I actually started looking for co-founders, you know... I was even talking to Jiten, my PlanetScale co-founder. And I was kind of starting to engage this.

\[46:16\] Then I thought, "What am I trying to achieve this time? I'm not trying to maximize profitability. What I want to achieve is give this project the best chance for it to succeed." And I was thinking, "If I do it as a startup, I'm bringing so much risk and so much distraction." Because then I will have to make sure that I raise money, I have to keep people happy... And instead, what if I found a place where I don't have to worry about these things, where I don't have to worry about raising money, where I don't have to worry about... And even -- if you're a seed stage startup, it's also hard to hire people. There are people who are really, really happy where they are, they are being very highly paid... How do you convince them to come and pile here, and take the risk to -- we had this struggle at PlanetScale, by the way, when we left Google and we thought "Oh, we know so many engineers, so hiring is not going to be a problem." And then we start the company and nobody wants to join us. \[laughs\]

So I thought of that, I said "Maybe there is value in not going all the way to a big company, but at least a company that can pay people well, still give them a good upside..." And so I thought "I'll start talking to some people who are in the startup stage and see where they are." And that's how I engaged with Copple. And I was pleasantly surprised to find out he's almost a perfect fit for what I was looking for. And the biggest one is the open source part.

**Jerod Santo:** Yeah. \[unintelligible 00:48:17.14\] open source.

**Sugu Sougoumarane:** Even in YouTube, we kind of had to push hard to open source Vitess. For me, the success of an open source project is adoption. Open source and adoption is true success. And that's exactly what Paul believed in, Copple. So it was so perfect... And talking to him about all the other values, it was like -- at that time, it was almost like a slam dunk obvious that "This is a place where I should be building this."

**Jerod Santo:** Nice. So it's not exactly like the movies... Because in the movies, he would have sent out his henchman to find you, and you would have been like --

**Sugu Sougoumarane:** "Oh, I don't want to come back." \[laughs\]

**Jerod Santo:** Yeah. You would have been like fixing up some old boat, or practicing Tai Chi, and they would have found you... And you wouldn't have wanted to, but you had to to save the planet, you know... But in this case, you actually reached out.

You were ready to solve this problem once and for all Postgres users. And so that does make sense. I think that jives, Adam, with my impression of Paul and Supabase. Does that make sense to you?

**Adam Stacoviak:** Yeah, I like the fact that it's Postgres-native, open source... I mean, that's the roots that Paul shared here. I think he said "The board of directors will have to fire me or pry this role from my cold dead hands --" One of those -- something elaborate like that to express his love for open source and his love for Postgres, Postgres-native.

**Jerod Santo:** So how did it go from there? So he hired you, he's given you a team now, and he says "Have this on my desk in six months", or how does it work?

**Sugu Sougoumarane:** I'm giving myself about three to six months to come up with an MVP.

**Jerod Santo:** Okay...

**Sugu Sougoumarane:** \[50:06\] It may vary. The reason why it may vary is because of my -- I don't want to compromise on the long-term plan. So if for the sake of delivery I feel like I'm deviating too much from where I want to go, I would rather delay the delivery. But I don't think it'll take us longer than three to six months to come up with an MVP. We have a very well-defined set of objectives to reach for the MVP, and I think we'll hit it all in about three to six months. And then iterate from there.

The idea is that from there, it should only be iterations, no major changes. Like, that's the reason why I want to make the right decisions today, so that it becomes iterative from then on. So that is the oversimplified plan, but I'm pretty sure we'll have -- there are about five big features that we want to launch in this MVP.

**Jerod Santo:** So is Go still on the menu then? Or does that not quite get you Postgres-native enough? I'm not sure if you can write --

**Sugu Sougoumarane:** Which one?

**Jerod Santo:** Golang. Can you write Postgres extensions in Go, or do you have to use the Cgo...? Or how does that work?

**Sugu Sougoumarane:** So that's the part that we are debating about. I don't want to start a brainstorm here, but I can tell you what we are talking about... \[laughter\]

**Adam Stacoviak:** Sometimes that happens...

**Sugu Sougoumarane:** Yeah, yeah. So one option we are looking at is now Cgo. Like, if you have an extension, can we link to call you through Cgo, is one thought that we are having. The other thought we are having is, well, AI is so good nowadays... Can we like translate this for you, and run it as an extension within Vitess? That's the other thing that we are debating.

**Jerod Santo:** Oh.

**Sugu Sougoumarane:** There's the other crazy idea, which is not translate; leave Go and do it in C, directly. So all cards are on the table.

**Jerod Santo:** Gotcha.

**Sugu Sougoumarane:** The last one is the least liked one at this point, but it doesn't matter. Whatever is the right solution.

**Jerod Santo:** Whatever gets the job done.

**Sugu Sougoumarane:** Yeah.

**Jerod Santo:** So that's fun. It's gotta be fun to be back at square one, to a certain extent, with a technical problem in front of you now. Like, a big, gnarly technical problem that's going to take three to six months for an MVP, and much longer if it's successful... Just to be back where you started, but in a different context, in a different part of your life.

**Sugu Sougoumarane:** Yeah, and the best part is I get to fix all the mistakes I made in the previous project.

**Jerod Santo:** Oh, yeah...!

**Sugu Sougoumarane:** \[laughs\]

**Jerod Santo:** What about the mistakes you're going to make this time? That's the problem. \[laughter\]

**Sugu Sougoumarane:** You know, v2 is perfect always, right?

**Jerod Santo:** That's right. You're not going to make any bad decisions this time around. Yeah, that's gotta feel good, because there's so many landmines that you just can avoid this time around.

**Sugu Sougoumarane:** Yeah, yeah.

**Jerod Santo:** That's awesome. What's your team looking like? Who are you looking for? Are you looking for hardcore Postgres people, or did you hire from Vitess?

**Sugu Sougoumarane:** There are some -- so I cannot name names yet, because some of them are still in the pipeline... But it's a pretty exciting, pretty high-caliber team. Some are older Vitess contributors. There's a diaspora of Vitess contributors. Some are from there. And some are actually people that have handled this type of scaling problem before. So for whom Vitess is an obvious thing. So it's a pretty high-caliber team. I think we'll be announcing the team very soon. They're going to be kind of the founding team of this Multigres project, so we'll probably be announcing it in maybe about a month or so.

**Jerod Santo:** Cool.

**Sugu Sougoumarane:** But the hiring is looking very good at this point. I'm pretty optimistic.

**Adam Stacoviak:** \[54:09\] What is implementation like in this new world? Is that still to be found out as you make these choices that have long-term permutations into maintainability, et cetera? Like, how will -- like, I know for the most part how Supabase works as a service. But if I wanted to use what you're calling Multigres, Vitess for Postgres essentially - if I wanted to use that on my own, outside of a Supabase context, what do you know about the future thus far to kind of showcase implementation details for end users?

**Sugu Sougoumarane:** So in this, I should talk about something that we did in Vitess, which we are not going to do in Multigres. Vitess actually is what you would categorize as one of the most flexible enterprise solutions you can ever think of. If you went and asked a question to Vitess, "I want to change this very specific behavior of Vitess", there's probably a command line option for it. So that made Vitess extremely powerful and flexible. That's the reason why Slack could adopt it and completely deploy it using their rules, GitHub could use a completely different approach... And I believe Etsy has an even crazier approach. And Vitess works for all of them. But the problem it created by solving these things is approachability. If I came in and looked at Vitess, I wouldn't know as -- a layperson would just know "Oh, my MySQL is getting too big. I want to use Vitess." It'll take you a few months of learning how Vitess works before you can start to use it confidently. So I realized that's a problem. And so what I want to do in the Multigres is make it a lot more approachable. Actually, at the expense of even reducing those flexibilities. Because I think approachability is more important than flexibility. And if we add flexibilities, we want to hide them away from the user; they shouldn't have to find it until they need it. So that is kind of the approach we are going to use. And what that means is that it should be easy for a user to just take Multigres and just deploy it in their environment and it should just work for them.

**Jerod Santo:** Do you know how that will manifest inside of Supabase? Or is that more on the Supabase product team to decide? Will that be invisible to Supabase customers?

**Sugu Sougoumarane:** Yes, absolutely.

**Jerod Santo:** Yeah. It makes sense.

**Sugu Sougoumarane:** The idea is what we are going to be building is a Kubernetes operator. So if you want to deploy it yourself without Kubernetes, you may have to do a few things for yourself. But if you just took Multigres and use the operator, you specify "This is what I want", and then the entire cluster comes alive. And we plan to do that within Supabase also. So this operator will be deployed within Supabase. And all Supabase has to do is "Hey, bring up a cluster and we'll just spin it up for you."

**Jerod Santo:** \[57:52\] Right. And they have to be operating at a significant enough scale that they can act as a test ground for you, I would think... Or maybe they can't do that with their customers, but... I'm just thinking, you had YouTube to build Vitess with. And that was awesome. You had a real scaled database, that had consistent users etc, and you could build the system. I guess in that case you built it incrementally, over time, as you figured it out. But building this in a vacuum - you've got to have some sort of real scaled things to test against. Maybe these are some of your core team they'll be announcing later, that I'm sure they're going to come from scaled up companies...

**Sugu Sougoumarane:** Yes, yes. So there is a philosophy in -- so we had that luxury, and that's the reason... I think that's the main reason why Vitess succeeded where others have failed, is because nothing that would not scale could be even written in Vitess, because the next day YouTube would go down.

**Jerod Santo:** Right.

**Sugu Sougoumarane:** We have created a few outages due to those things. So if something was not going to scale, we would know right away. So we had that luxury. So everything that went into Vitess had to work at scale. So that was one thing. And the advantage we have is we have those learnings. So we know what not to do.

**Jerod Santo:** Sure. But don't you want to test it as you go, and make sure that you're doing it right?

**Sugu Sougoumarane:** On the testing side, what we over time developed - that is something we we had the luxury of not having to do in the early days at YouTube - is we had to develop really, really, really, really thorough tests. The reason was because at some point of time we would be making changes in the Vitess source code, and we had to be confident that people are going to take this. Slack is going to take this and run it. GitHub is going to take this and run it. It's going to come back into PlanetScale. And there is there is no waiting until it goes live to find out what what is going wrong... So actually, in Vitess, we had an extremely rigorous testing policy; extremely strict, with 100 percent code coverage, performance tests, backward compatibility tests... So that's actually one of the -- it also makes it hard for an engineer to contribute, because you change five lines of code... Now you have to write all these tests to make sure that you won't break anybody. But the confidence is people now have developed the trust that if Vitess releases this code, I can just take it and run and it will not fail. I'm hoping to bring that same philosophy here, which is to test thoroughly, to the extent that we are confident that this will work. And we'll obviously still ease that into production.

**Jerod Santo:** Could you actually bring the test suite over, or at least parts of it, from Vitess? I mean, because that's a pretty robust test suite. If you could bring if you could port that somehow relatively easily...

**Sugu Sougoumarane:** Yeah. Anything we can copy from Vitess, we are going to. Definitely, yeah. There are some parts which we'll just copy. There's no reason to change anything there. So those parts we'll just copy, yeah.

**Adam Stacoviak:** Have you looked at deterministic simulation testing, similar to what Turso is doing? And what was the other database, Jerod, that you had \[unintelligible 01:01:27.11\]

**Jerod Santo:** TigerBeetle.

**Adam Stacoviak:** TigerBeetle, yeah. Have you looked into that, and does that translate? Or is the test base --

**Sugu Sougoumarane:** I need to look this up. But in Vitess we probably have the opposite, which is called the fuzzer. Is that the same thing?

**Jerod Santo:** Similar. Yeah, similar.

**Sugu Sougoumarane:** \[01:01:46.24\] So we do run the fuzzer, and the fuzzer does not miss -- as far as I know, it misses nothing. I wasn't there when they implemented it at PlanetScale. It was someone called \[unintelligible 01:02:00.11\] who did that test suite. He said that the fuzzer was so good that it found bugs in MySQL.

**Adam Stacoviak:** That's good.

**Jerod Santo:** That's a pretty good fuzzer.

**Sugu Sougoumarane:** So I have pretty high confidence in that. But yeah, whatever it takes.

**Adam Stacoviak:** Well, we have a couple of past shows we can recommend for you as well that might give you some insights to -- just some of the behind the scenes; not exactly that how to implement it, but more fodder for your request.

**Sugu Sougoumarane:** Yeah, yeah, definitely.

**Jerod Santo:** Well, it's all very exciting. I assume the licensing is going to be similar to Vitess, or similar to what Supabase normally does. Is there any sort of gotchas in there, in terms of the open source side of it?

**Sugu Sougoumarane:** No, no. Apache is what we're planning to do. Vitess was actually BSD once upon a time, until we joined the CNCF, and we changed it to Apache. But yeah, it's going to be Apache.

**Jerod Santo:** Does Multigres make sense in the CNCF as well, or no?

**Sugu Sougoumarane:** It's an option. It's definitely an option. We even thought of either a fork, or you know, it could be a subproject of Vitess... But then I felt that that will restrict its freedom right now. Starting it as an independent project -- these are very difficult decisions, and I think once we make these decisions and bring it to a good shape, we could look at actually moving it back to CNCF as its own project.

**Jerod Santo:** Yeah, I think you want the space to reinvent and rethink without feeling at all burdened by your past decisions with Vitess.

**Sugu Sougoumarane:** Correct, correct.

**Jerod Santo:** And I think -- obviously, copy and paste the stuff that makes sense... But don't make it a fork where you're like basically starting at this foundational, which you may end up wildly different in implementation. Or you might be the same, but at least give yourself room to come there organically, you know?

**Sugu Sougoumarane:** Yeah, that is something that was pretty obvious to me... Although the fundamentals are the same. Even if you don't copy code, you can copy ideas pretty easily.

**Jerod Santo:** Sure.

**Sugu Sougoumarane:** So those don't change. But when you get into the details, there's so many small things... And the thing is, if you don't do them the Postgres way, that will keep nagging you. You know, "I have written this... There's this if statement hanging there, which is there only to differentiate between Postgres and MySQL."

**Jerod Santo:** Right.

**Sugu Sougoumarane:** You don't want any of that.

**Jerod Santo:** None of that.

**Sugu Sougoumarane:** Yeah.

**Jerod Santo:** That kills the joy part, right? It takes away the joy that you're trying to enjoy what you guys are building here. Well, it's very exciting. Obviously, you're just getting started, so there's still a lot of question marks for us Postgres fans... It's just a lot of waiting, watching maybe the GitHub project as you put it out there, and the announcements as the core team comes together... You get the Vitess Avengers, you get the whole team together... But what else? What else is on your mind, or things that are important for folks to know before we let you go?

**Sugu Sougoumarane:** The thing I feel is I feel a bit anxious that there's not much activity in the open source project. We may seem cool, but we are paddling hard underneath. Really, really hard. So I will be actually publishing a few blogs about some of the thoughts... There's one area which we didn't cover much of, which is the high availability and the consensus part. So actually, my initial blogs will be covering those.

\[01:05:58.20\] I feel like this is something -- the database world kind of went a little bit astray with mounted storage, disaggregated... I feel like that needs to be brought back in. I feel that storage should be with the database, because database are IOPS-hungry, and having your data local to your database is very important. And that story can be complete only if you have a good consensus story, where your data will not be lost if you lose your node. So that is something that we want to solve really, really well in Postgres. Because I have seen the good days of the database, where the database goes screaming fast. Slack and GitHub, they run hundreds of terabytes of database size, they run millions of QPS, and their latency is a millisecond; one millisecond, two milliseconds... That's the kind of latency they get. And they can't tolerate any higher latency. And I want to bring those days back into Postgres. So that is kind of what I'm shooting for.

**Jerod Santo:** So are those things that Vitess tackled or did not tackle? High availability...

**Sugu Sougoumarane:** Yeah, those are very core to Vitess.

**Jerod Santo:** Yeah, I thought so.

**Sugu Sougoumarane:** Those parts we are going to bring into Postgres.

**Jerod Santo:** Right. Interesting. Adam, anything on your mind? Any other questions?

**Adam Stacoviak:** I'm thinking about Neon, honestly. I'm thinking about just this kind of bigger picture... I'm curious if this shake-up, this change in the database world -- like, for a while there we had obviously PlanetScale leading, massively scale MySQL, which was great for MySQL, but not so great for the Postgres folks like us... Then we've had Supabase, obviously, we've had Neon... Neon was acquired by Databricks... I don't know how that's going to shake out for a product that's usable by the public, or if it's a Databricks thing... This seems like a good time for Supabase to do this, because there's change amongst the Postgres world. And I feel like this is the clincher, really, for Supabase to finally have this kind of feature set that wasn't available unless they built it. And why build it in a non-Postgres-native way, in a non-open source way, given Paul Copplestone's way of thinking as a leader there. I'm just curious your thoughts on that, Sugu... It's just the thought of like Neon, Postgres, Supabase, this shakeup, you coming back out of retirement, basically, to avenge this scenario and shard for life with Multigres... Help us unpack this shakeup, I suppose. Are you excited? Obviously, you came back, but how does Neon's change change the landscape for Postgres specifically to open the floodgate for Supabase's mission with Multigres?
**Sugu Sougoumarane:** Yeah, going back to why I started this project, right? The reason why I started this project was because I believed - I still believe, actually - that there is no scalability solution for Postgres. Not Neon, not Aurora. I'm an advisor to Metronome, which is a Postgres shop. They have one of the largest Aurora instances, and they are struggling. They have no way out, beyond where -- they are looking at moving data out of their Postgres instance, because they've hit the limit. And now they're saying "Oh, we need to do something about this scalability thing." And that's the reason why I wanted to start this project.

\[01:09:57.00\] And one of the things I thought with Supabase -- so this is a problem that is meant to solve it for the industry overall. In other words, Neon could use Multigres if they wanted. If they hit the limit of a machine, you could deploy Multigres on Neon and run it... Unless there were incompatibilities, for which you had to make changes. But even in those cases, the changes would be minimal. So that's what I came for.

And for Supabase specifically, is that if Supabase is going in its trajectory, there are going to be users that are going to max out a single instance very, very quickly. As a matter of fact, I won't be surprised if some are already hitting those limits. And their way out is you could go to Aurora maybe, and that will extend your runway by maybe at best 2x. I'd be surprised even if you got like a 2x runway. As soon as your QPS doubles, you pretty much are at your limit.

So the only way out of this is a sharded solution. And that is why I started this project. In MySQL, if you hit your limits, you could go to Vitess, but there is nothing like that in Postgres. And Vitess for Postgres, at even mediocre level of functionality, will allow these people to stay in Postgres. Otherwise, you have to find a way out of Postgres, once you hit that limit.

**Jerod Santo:** Well, after you accomplish Vitess for Postgres, maybe you can build Vitess for SQLite. No, I'm just kidding. \[laughter\]

**Adam Stacoviak:** He almost punched the screen, Jerod. He's like "I'm gonna punch my screen right now."

**Jerod Santo:** After your next sabbatical, you know... The only thing that gets you back is that Dr. Richard Hipp approaches you and says "Sugu, we need you. We need you at SQLite."

**Sugu Sougoumarane:** \[laughs\] That reminds me of -- I think Airplane, was it? ...where there's a background scene with a movie poster which says Rocky 83, and the really, really old guys \[unintelligible 01:12:24.23\]

**Adam Stacoviak:** Airplane. You're going back in the day, into the '80s, to mention a movie...

**Jerod Santo:** I haven't seen Airplane for years.

**Adam Stacoviak:** I mean, don't call me Shirley, okay?

**Jerod Santo:** Exactly. Good stuff.

**Adam Stacoviak:** Yeah, good stuff. Sugu, thanks for coming back from retirement for this. I know that -- I mean, considering what you've just said, that there's no way out, that sharding is the only way... I mean, you're coming back at the right time...

**Jerod Santo:** Saving the Postgres world...

**Adam Stacoviak:** ...I think you're coming back to the right team, with the right motives, at the right time... And somewhat full disclosure, Jerod and I are both angel investors in Supabase, so we kind of have this desire for our own upside, but like technologically, this would be amazing for Supabase to essentially be one of the only leading at scale Postgres flavored, Postgres for life, open source for life, flavors out there to choose from. And so I'm super-excited about that, for you, and for them, and for Postgres, because... We need it. It's amazing.

**Sugu Sougoumarane:** I am excited, too.

**Jerod Santo:** Get building, man. Get building.

**Sugu Sougoumarane:** Get building.

**Jerod Santo:** Alright. Thanks, Sugu.

**Adam Stacoviak:** Bye, Sugu.

**Sugu Sougoumarane:** Thank you.
