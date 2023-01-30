**Jerod Santo:** Well, Craig, the last time we had you on te Changelog we were talking about what's so exciting about Postgres... And you and I both are excited by Postgres, but mostly about how stable and boring and reliable it is. That being said, lots of people I would say today are even more excited about Postgres. We had Nikita from Neon on the show and he pointed out that of the top five databases on DB engines rankings, it's like the only one that's growing, amongst the top five... So there's people that are using it more and more, getting more excited maybe about how boring it is... I don't know. What are your thoughts on Postgres, of late adoption, interest, and what's been going on?

**Craig Kerstiens:** Yeah, I think it's -- I mean, that's spot on. I love to usually reference Hacker News, who's hiring. So there's one site where you can chart who's hiring for some various technologies on Hacker News... And when you chart all the databases, Postgres is just like a runaway. It's like Postgres is number one, then Mongo number two, and then the others, when you chart it over time.

What's interesting is I think Postgres teeters back and forth between the number four and number five technology, and that's including things like - oh, JavaScript. I'm like, how in the top five language and technologies that people are hiring for, and... I mean, I think most of us read Hacker News; it's not the end-all-be-all perfect indicator of technology, but it's a reasonable place of where things are headed, right?

Joe Hellerstein wrote a book that was a tribute to Michael Stonebraker, who created Postgres, and he did a lot of research on the work that Stonebraker put in, and the origins of it. It's a great -- I think you can go find it... I'll dig it up after and we can link it in the show notes. It's a great 20-page PDF, free book, that's really great on the history and the origin of Postgres. And Joe Hellerstein, who's a professor at U.C. Berkeley, teaches databases there, did a lot of research on "When did Postgres get popular?" And a lot of signs pointed to Heroku, and what we did way, way, way back. So I was lucky to be there in those early days. I think we were lucky to pick Postgres, but it was a good decision, and the right decision. It changed a lot of that trajectory. But since then, I think there's -- you know, now there's no looking back. Everyone wants to do something with Postgres, and be there. It's just a great database. It just works, and it keeps getting better.

We talked a couple years ago, it's like "Oh, we're at peak Postgres maybe." It's like, no... Two years later, now we're at peak Postgres, and maybe we'll talk in another two and it stays on that trend.

**Adam Stacoviak:** Can you recall what made you choose or consider Postgres back in the Heroku day whenever you made that choice, that fortunate choice?

**Craig Kerstiens:** I heard a couple of mixed stories, and I think we tracked it down to the correct one. There was one SRE Ops engineer that said like "I heard it has a pretty good track record. It seems like it has a pretty good security story. Let's go with it." And some other folks had used it, and it seemed good... It was pretty inconsequential. It wasn't like we did this great business SWOT analogy...

**Jerod Santo:** Right.

**Craig Kerstiens:** RDS didn't even exist back then, right? So it wasn't like "Oh--" If RDS had existed, we would have just wrapped that, and given customers that. But it didn't exist, and we had all these Rails developers asking for a database, and thought "How hard could this be?" It turns out it was a lot more work than we expected. But it was a pretty inconsequential "Yeah, it has a good track record with security. It doesn't corrupt data. Alright, let's go with it."

**Adam Stacoviak:** How do you think Heroky had an impact on Postgres over time though? I know that the team got more formalized \[unintelligible 00:05:26.05\] I know a lot of your career was built on Postgres and Heroku then... What do you think Heroku did for Postgres, just as much as Postgres did for Heroku?

**Craig Kerstiens:** I mean, I had the email somewhere from the team of RDS saying "You're the reason we shipped --" Like, we kept getting requests from RDS customers for Postgres. Heroku was the reason RDS added support. And it was a couple of years after they wanted -- I mean, I don't know if I can dig that email up... I don't know that it's public to share, but you know... I think Heroku helped put it on the map, and then once there was RDS, it just cascaded. I mean, you two have used Heroku...

**Jerod Santo:** Yeah.

**Craig Kerstiens:** How did you guys come to Postgres?

**Jerod Santo:** \[06:05\] Pretty much Heroku. So I was on Ruby on Rails, and the default database in test mode was - and probably still is - SQLite. And the default database in prod back then was MySQL. And so I was a MySQL user, and I never really had problems with it, but I read a lot of blog posts that would point out it's data corruption things, or... Maybe it's not corruption, but coalescing - what's the word...? Sometimes it would be too lax, and it would take things, and instead of reporting, it would just turn it into something else, and you wouldn't find out till much later. And that always scared me a little bit. I don't think I ever actually got bit by it myself... So I was a relatively happy MySQL user, but I was a happier Heroku user, and I saw the happy path on Heroku was Postgres. And the nice thing about Rails, even though I kind of decry this whole idea of like "You can just swap out your database" thing, but especially when you're first getting started, you really could pretty much just change the adaptor... As long as you put in all your logic in your Rails code, and not in your database layer - which I don't necessarily advocate for, but I was doing - it was pretty easy just to switch. And so when Heroku had Postgres, I just switched to Postgres, and I started using it, and I just liked it a lot. In fact, I never went back. I didn't have a reason to. So that was my switching story.

**Craig Kerstiens:** Yeah, I think it's a lot of folks'. Like, the popularity of Rails, that Heroku made it the default... The Python and Django community kind of always recommended Postgres. I don't know why. They just did. So I think those two communities really, really helped to give the rise to it.

Back in Heroku days we also did a lot of investment on the JSON stuff, and JSONB stuff, and wrote some big checks for community development. I feel like this was before people were talking about sustainability and funding of open source, that we thought it was important to improve the developer experience of it. And that was at a time where Postgres was good and stable, but it wasn't cool and sexy and user-friendly. I don't know, can databases be sexy? I don't know if they can.

**Jerod Santo:** I don't know.

**Craig Kerstiens:** But Heroku did a lot to advance that, and the rest is history. Now we're still kind of riding some of those great investments in JSON and in other pieces.

**Adam Stacoviak:** For those that don't go and read the PDF book you'd mentioned earlier, the origins of - what's the origin story of Postgres? How did it become, what was the landscape around that time? Can you recall?

**Craig Kerstiens:** Man, I've gotta see how accurate I can get it. Postgres - its name is Post Ingress. Ingress was one of the first two databases way back. So if you look at all major databases, they're one of two roots. SQL Server - I forget if SQL Server has a base of "Hey, this came from that Postgress/Ingress roots." I think so. I think SQL Server has an Ingress base. Oracle does not. But it's kind of like, you look at major databases and they're one of two roots. \[unintelligible 00:08:58.22\] I believe was Ingress-based.

So its name came from Post Ingress. At the time when it was first released, it didn't have SQL support. That got added back a few years, and it was this big deal, and they changed the name to PostgreSQL, which is now still lamented as one of the worst decisions they've ever made, because no one knows how to pronounce it or spell it. It's like, how do you capitalize the SQL as in PostgreSQL? I joke with the community developers, "I'm just gonna call it Postgray until they change the name." And it drives people crazy, but I keep trying, to see if it'll take off.

**Jerod Santo:** \[laughs\]

**Adam Stacoviak:** Or you just say Postgres...

**Craig Kerstiens:** Yeah, exactly. Just Postgres.

**Adam Stacoviak:** Just skip the Q and the L altogether, I guess...

**Craig Kerstiens:** But it came out of U.C. Berkeley, and one of the core ideas that at the time was like heresy was this extensibility of the database. And now we see Postgres extensions like wildfire, but that was a core idea and philosophy that I don't see in any of the databases, that I only see in Postgres.

\[09:58\] But yeah, it was open sourced out of U.C. Berkeley, and it kind of was just there, and good, and worked for a while. And then fast-forward 20-25 years and it's really taken off, but it was just kind of their good, out-of-Academia thing for a long time.

**Adam Stacoviak:** Are you involved in the core team at all, or the core development, or the steering of anything around that, or are you just sort of ancillary to the Postgres world?

**Craig Kerstiens:** Much more -- I mean, a lot of them are friends, a lot of them I'll have beers with, hang out with, have over at my house for dinner... So a lot of good friends there.

**Adam Stacoviak:** You barbecue, right? I've heard you talking about barbecuing on Twitter quite a bit.

**Craig Kerstiens:** Yeah, I have some opinions. And I'm in California. Most people out here don't know what barbecue is. They're like "Hey, I'm having a barbecue." They're like "Show up at 5 o'clock and I'll fire up the grill." I'm like "You're not having a barbecue. What are you talking about? We're cooking on the barb --" I'm like "Uhm... So... \[unintelligible 00:10:52.01\] I've got an hour of that in me.

**Adam Stacoviak:** We'll have to come back. Actually, we should have you on Backstage, because we could talk barbecue. I would talk barbecue with you.

**Craig Kerstiens:** That sounds fun.

**Adam Stacoviak:** Legit barbecue. I live in Texas, so I've got it down here.

**Jerod Santo:** I would eat barbecue with you guys all day. I'm not sure how long I can talk it, but I can eat it...

**Adam Stacoviak:** We can hang out while we cook, Jerod.

**Jerod Santo:** I like that.

**Craig Kerstiens:** We'll make you hungry by the end, yeah.

**Adam Stacoviak:** Yeah, for sure.

**Craig Kerstiens:** Where were we at before this?

**Jerod Santo:** Well, you were saying you have barbecue with some of the core team.

**Craig Kerstiens:** Oh yeah, core developers. Yeah, so I know those folks well. But no, I'm not a C developer. I've never contributed a line of code to Postgres itself. I feel weird claiming any part of being part of the community, though I do a lot of content, engage with it... I've run Postgres conferences before... So I've done things, but I do not contribute or commit code to Postgres at any level. So I can't claim any credit there.

There's an amazing set of developers distributed around the world that really do the lion's share there.

**Adam Stacoviak:** Well, when I think Postgres, I think your name. I think Craig. So I synonymize you, if that's the word, with Postgres. To me, that's something you seem very passionate about, very excited about. Obviously, you're at Crunchy Data now, you continue to work on Postgres in the many ways you do... So that's what I think of, at least; I think of you, I think of Postgres.

**Craig Kerstiens:** Cool, thanks. Yeah, I've spent a good bit of my career on it. I think I like dev tools in general as much as anything. I think about that Heroku experience... I didn't join Heroku to focus on Postgres. I joined Heroku to launch their Python support, and ran a whole bunch of other teams there. But the Postgres team pulled me in, and I kind of stuck for a little while.

I'm not going anywhere from Crunchy Data, running Crunchy Bridge anytime soon. We've got a goal and a mission there. But I do hope at the next thing I'll take a little break from databases and get back to that dev tools. But for now, it's still a thing that feels like there's unfinished business of creating an amazing developer experience for Postgres.

**Adam Stacoviak:** Well, there's always dev tools around Postgres, which I know you know of, because that's kind of one of your focuses there at Crunchy Data, is improving the dev experience of using Postgres as the database you use... So keep doing that around that at least, if not databases directly.

**Craig Kerstiens:** Yeah. There was a big a-ha moment to me - I don't know if this was a year or two ago - where... It's a good time to be a developer, right? And you can go to college for interior design, got to a bootcamp, and then get a job as a software engineer. A good job, well-paying... Hopefully it's interesting work, right? And you've gotta go to a six-week or a three-month or a six-month bootcamp, but there's this weird hole where the number of DBAs in the world is not really increasing. The number of people that are experts at databases, it's not -- there's more app developers in the world by a huge margin than there were two years ago, and then there were ten years ago. And it's easy to become an application developer, but DBAs - I don't know where you go to become a DBA. There's no bootcamps for that.

\[13:50\] We're at an interesting inflection point where as an app developer probably your ratio of access to a DBA is less and less and less. So we're going to be looking for more like services and providers and tools to bridge that gap, right? I guess, pardon the Crunchy Bridge pun there, but it's that idea, that gap - how do we close that gap? It's super near and dear to my heart, because I think of myself as more of a developer than a Postgres person, but also I can look at and explain plainly and understand it, and I don't know if the average developer can.

You don't wanna be dealing with your database, right? You wanna focus on like "Hey, I'm launching this new feature for customers... And yeah, I need to put data in there, and I want it to stay, and I want it to be retrieved fast", but I don't see either of you probably volunteering and being like "Hey, I'm gonna go write some SQL today. It's gonna be a great day!", right?

**Adam Stacoviak:** Probably not.

**Jerod Santo:** No. And I think the longer I do this work, the less patience I have for all of the periphery, which I would consider backend storage to be like implementation details about, that I must know and understand in order to accomplish what I actually want to accomplish... Which was, for me, almost two decades ago now, the big selling point of Ruby on Rails, where it was like "Look, all these decisions have been made for you. Follow the conventions. Here's the happy path. Focus on what makes your app distinct." And that was a really big idea, and delivered in a few ways for that, and we've been in some sense building from there ever since; in another sense, having to rediscover that idea in different little ecosystems as application developers...

But I do like Postgres mostly because I don't have to think about it very often, once we're up and running... And that's really what I want from a data store. Now, there are other things that I want from it from time to time, but that's the big one for me.

**Craig Kerstiens:** Yeah, I think it's a lot of people out there. And at some level, we were on that path with database innovation for a while, and it kind of stalled out. I don't feel like there's been for a few years massive innovation in that space. It was - a major cloud provider would say "Install Postgres, and you're welcome." It's like, "Wait, but you didn't tell me how to use it." That's still my job, right? We kind of paused and regressed a little... Because Postgres is a great database, but you still need just a little bit of that coaching, training, education type thing, right? So it feels like we're picking back up there. I mean, Crunchy is focused on that. There's a few others... Supabase, Neon, others... I think what Planet Scale is doing is really exciting for the database space... And everyone kind of has their own different approach. We're kind of having a renaissance, and these things ebb and flow... But how do we just make it a great developer experience? I think we stalled there for a little while, so we're kind of picking back up from a leveling off there for a few years.

**Adam Stacoviak:** What do you think caused the stall? Was it just shiny objects elsewhere, or was it negligence?

**Jerod Santo:** NoSQL...?

**Craig Kerstiens:** There's a few pieces... So Postgres -- jumping way back, right? We talked kind of about that origin of Postgres, and one area, that origin of Postgres out of U.C. Berkeley, and why -- Postgres is used all over, and people don't realize it. Redshift was part Excel, which was Postgres. So you take Postgres and you fork it. If you were building a data warehouse company 15 and 20 years ago, what you would do is you would start with Postgres, you would fork it, and then you would go and make it MVP. Like multi-parallel. And then you start to build in data warehousing features - compression, columnar storage, those sorts of things. So you look at like Greenplum, Astrodata, Netezza... There's a laundry list. Look at every data warehouse almost for the past 15-20 years, and there was Postgres at the core.

So that's great... Then Postgres kind of continued to rise, and when you look at it -- there's other people that are like "Okay, Postgres is good, but we need more. We need to add on our special sauce." I think the major cloud providers started doing this first. Like, if you look at every major cloud provider and they had their flavor of "Postgres-compatible" thing... And I don't have a lot of love lost for them, because it's not Postgres-compatible. There is no spec for Postgres-compatible. There is no "Here is the doc."

\[18:09\] I have conversations with people every week where they're like "Well, they told me it was Postgres-compatible, and I migrated to it, and six months in I tried to do this thing, and they're like "Well, no, that's in Postgres." Well, what does compatibility mean then?

So I think we pushed these boundaries on like "Hey, here's this shiny special thing", and it stalled us out a little bit. They're like "Oh, now Postgres --" You know, "Hey, I wanna take this \[unintelligible 00:18:33.21\] and that's what it is. And there was kind of this -- it feels to me that there's this regression back to just Postgres, and "Actually, I just want this thing that is truly open source, that I know what it is."

No one's running a Ruby on Rails massive fork that some consultancy has shipped for a 3x performance improvement, right? Like, why did we do that with databases?

So now we're seeing these things that were closed source and proprietary - companies start to take a shot of creating open source versions of it. You look at Planet Scale, it's essentially Vitess. You look at Neon, it is an open source version of Aurora. And those type of things take 5 to 10 things to mature. Like, a database that's well-regarded as a database typically takes ten years to mature. Starting off with a Postgres base, you cut that in half. That's why most people started a data warehouse thing off that Postgres format.

So I think we had a data warehousing phase - like, it was Greenplum, Astrodata and Netezza, and then it's like "Man, this is expensive. This takes five years to build a business and a company. We don't wanna do that. We can go and do a food delivery service in six months, and that's a lot easier." But then we had a \[unintelligible 00:19:50.18\] So I think people are taking another shot.

I guess I'm the old curmudgeon, I'm just like "Just Postgres." Guess what - it's really good, and it just works... And I don't know a lot of people doing that. I see people now coming back to extending Postgres, and I think we're gonna have exciting things come out of it. But I think for every five we have, one or two survive. You don't have to look at the long-term picture view to see that.

So I'm a little bit on the curmudgeonly, the -- I call it like, you know, Postgres, Rails, or Django, and like Tailwind, my get-stuff-done, make-money stack. Like, I just wanna build a business. I feel pretty good with that still, in five years. I just wanna build products, and ship them, and build a business.

**Adam Stacoviak:** Okay, so presents as Postgres, Postgres-compatible, not really Postgres. Correct?

**Craig Kerstiens:** Yeah, there's a lot of that out there.

**Adam Stacoviak:** Yes. Are you generally down on that? I don't want you to stomp on companies and hard work, because there's people out there doing things that are innovating, and maybe it's just not something you value, but how do you feel about that world, specifically? ...like, the compatible, the presents-as...

**Craig Kerstiens:** I mean, I was at Citus, running product there... And it's an extension to Postgres, so it still hooks in, but it does crazy things with the planner, right? I'm not down on it, but it's not my go-to. And when I see that, it's like "What problem are you solving that existed in Postgres?"

I've had people migrate over from one of those, cloud Postgres-compatible things that was supposed to be magic, and cut their costs in half. And they were like "But this cloud provider told me this." So I've kind of seen it that the cloud providers went there first, and now we got some startups doing it. I think some of them are going to emerge with very interesting things, I think some aren't going to be around in five years. Now, which one am I going to pick? I'm going to pick open source Postgres, because the track record is pretty -- I think it's going to be around in five years, like, knock on wood... But I'm definitely excited for -- people are talking about databases now, and I don't think they'd be talking about databases if it weren't for all these presents-like-Postgres, these Postgres-like things...

Some kudos to Planet Scale. I take different views on -- like, there's technical decisions, but constraints are important and valuable, and I wouldn't want a database without them. We had them in sharded, distributed Citus and Postgres, so I think they can work. But I have a lot of friends over there. So I have contrasting views, but what they've done for excitement for databases is awesome. And most people aren't like "Craig, let's talk about this reliable database that doesn't lose your database, and just has the functions I want. Let's talk about Postgres." Most people are like "Yeah, I just want--" Jerod, to your point, "I want my database to work. I don't want to think about it. Why do I need to talk about it or think about it? It just should work", and it's a stalwart at that.

**Break:** \[22:52\]

**Jerod Santo:** So we talk about building things that are presents-as or compatible... It brings me back to the point that you made about the extensions. So there's lots of different ways that you can extend Postgres and change the way that it works, and it is amazing how many extensions there are. I was just reading -- there was a post on Postgres Weekly of like what happened in Postgres land in 2022... And they went through and just listed out like "Here's some extensions that were born this year." And there was like 18 of them, all doing different things, and it probably was not a comprehensive list...

**Craig Kerstiens:** I'm sure some were missed.

**Jerod Santo:** Yeah, I'm sure there's plenty that were missed. But the point still stands, it was an overwhelmingly long list for just like "Well, here's the new things..." Because that's not like new versions of old things; that's brand new things that happened just this last year. And we can talk about an extension ecosystem; I think I would like to talk about that. But in light of this changing Postgres, then you also have backend storage changes; like, you can change the way it's storing the data. That's kind of what Neon is up to. And then there's foreign data wrappers... It sounds like there's a lot of -- and maybe these things overlap, but it sounds like there's a lot of these different modularity points or extension points, and some are more like changing Postgres than others... Can you give an understanding of the different ways you interact with it to extend or to change how it works? Which ones are totally like straight line safe, open source path, and when do you start getting into hairy territory, like "Should I swap out my backend or not?" Help people understand that whole deal.

**Craig Kerstiens:** Yeah, so there's a few pieces, right? So today, most extensions are C extensions, or maybe Rust, but need to kind of be built against the instance that you're running on. And a lot of people show up excited about extensions, and they're like "Hey, I want to do this on RDS", and it's like "Nope. Here's the whitelisted available set of extensions." So for at least the next midterm, there's some thoughts on how to make these extensions more extensible, where it's like "Oh, you can bring your own." But we're a little ways off from that. But I think we'll wake up in a world in a couple of years, we'll talk in two years and there'll be an app store of extensions possibly, which just blows my mind of what you could do with Postgres.

I'm a huge fan of extensions. We've had some customers show up and be like "I want this extension, but I don't see it listed." And I'm like "Cool. Give me a week, and we'll have support for it." So extensions are the easiest way to advance Postgres.

Under the covers, there's like deep low-level hooks that gets exposed in Postgres. So it's not like you can go randomly change a thing in Postgres without that hook being there. But what's happened - like, extensions have been there for a number of years, and what's happened is as we've gone over 10 years, bit by bit more hooks, more hooks, more hooks... At the start of Citus there wasn't every hook that was needed to do like that low-level sharding. Pluggable storage came in about two years ago, and everyone was excited about it. Like, "Great, we're gonna have all these different storage backends", like neon's doing. These things take time and move slow. And there's been two or three different pluggable storage engines that came and kind of are there, and no changes to them in 12 months, and kind of bitrotted.

Changing the storage layer is a large effort. That's a non-trivial effort. An extension that I want is an email data type. That's one of those things that I've thought about for years. We talked about it way back in Heroku, like "Why isn't there an email data type that can validate emails?" How do you know if it's valid, right? Like, is a plus okay, or a dot, or...

**Jerod Santo:** \[28:10\] What's the answer, Craig? Why isn't there an email data type?

**Craig Kerstiens:** Apparently, the spec for what is a valid email is way more complicated than you would ever think. We've thought about writing it, and it was like "Whoa, this is actually -- yeah, pluggable storage seems easier than that, maybe."

**Jerod Santo:** I believe that, actually.

**Craig Kerstiens:** Someone looked at the spec and was like "Ha-ha, that's funny."

**Jerod Santo:** Well, I actually penned a post years ago, after years and years of trying to do the best regex to get all email to have every edge case accounted for... And my post was, "There's only one way to validate an email address, and the way to do it is you send them an email, and you make them click on a thing." Because there's no actual other way. I mean, it's just darn near impossible. It's like \[unintelligible 00:28:47.09\] I don't know. It's ridiculous.

**Craig Kerstiens:** Yeah... It was funny, because logically, in my simple brain, this makes sense, and then it's like, you start to drill into how it actually works... So foreign data wrappers are an interesting one. They're kind of a type of extension, but a special class that lets you connect from Postgres to something else.

**Jerod Santo:** So Postgres is like the frontend, but the backend could be like an Excel spreadsheet, or something crazy. The actual place that the data is stored could be anything.

**Craig Kerstiens:** I use the Redis one every so often. Like, "Hey, I just want to join data from Redis to Postgres", and it works. There's not an easy way to say, "Hey, here's how one is safer", or more risky. So if you look at it as a basic data type, or some lookup or some function, that's definitely lighter-weight, simpler, easier, safer. If it's doing things to the query planner, that's kind of next-level, right? Citus does this. Timescale does this, right? "Hey, we're gonna rewrite this query and take different paths."

Citus and Timescale - I don't know if they play well together. It's been a common, common question for years. It's like, we both take pretty invasive hooks. Back when I was at Citus, it's like "Maybe fingers crossed... Probably not", right? Because there's some of the hooks - like, which one do you put first, and which one takes priority? And how does that step on toes? When you're changing how code works, and say, "I'm gonna do this instead of that", and then another thing does the same thing... It's a little riskier, right? Not to say you can't run with one of them, but you're starting to change, and it's a little less pure Postgres, right? And you're relying then on that extension developer to say, "Yeah, our code is as tested, and is rigorous and as solid as Postgres code itself", which some are, and some it's wild west. And then when you get down to the storage engine, that's just next-level.

So I think that's a little bit of a framework of -- and I love the small ones. We were about to add support for one, HypoPG, PG, which is hypothetical indexes. What would happen if I add this index to my database? You want to know the impact on queries ahead of time with this work? Is it a composite index, or...? You can add the index, but how do you simulate production on prod and staging? Like, all those hard things that we deal with every day in software, what is Postgres can just hypothetically say, "Yeah, this would improve things"?

**Adam Stacoviak:** Yeah. It's interesting.

**Jerod Santo:** Yeah, I've always used like the \[unintelligible 00:31:11.13\] small ones. I think the most, I would guess, lines of code sized extension I've ever used was the PostGIS, where it's adding the geospatial queries... And it worked as advertised; it ended up being a maintenance burden when it came to like upgrading Postgres and data stuff. I ran into troubles, because I'm very much not a DBA. I'm an application developer who does what he needs to do to keep the site running, and make the queries fast. That one was -- it got to be where it was more work than I think was worth it, just because of my lack of touch. I don't want to necessarily harp on the devs of that particular -- I think it's a pretty popular extension, isn't it? The GIS stuff?

**Craig Kerstiens:** Massive. It's --

**Adam Stacoviak:** One of the most popular, yeah.

**Craig Kerstiens:** \[32:01\] People think of them as the same ecosystem, and it's interesting, because the PostGIS folks know the Postgres core folks really well, and vice versa. But they're kind of two parallel ecosystems. They interact and talk together, but PostGIS is its own thing, and its own core developers and committers... And it's massive; it is easily the most advanced, massive, extension that exists for Postgres. And it definitely had some bumpy years around upgrades. I lived through some of those... It's gotten a lot better, but it's his whole own massive ecosystem, and a great example of a huge kind of value -- it makes Postgres with PostGIS the most advanced open source geospatial database, and it might be the most advanced, right? I think it beats out Oracle. You might argue -- like, Esri has some stuff that's very enterprise proprietary. But you look for open source, or relational database core kind of geospatial, and it pushes it really to that extreme.

**Adam Stacoviak:** Is there any opportunities in the extension space to build a business around Postgres?

**Craig Kerstiens:** I mean, Citus was acquired by Microsoft. There's one. Timescale - building a big business. Neon, I'm not sure how much it's a pure extension, versus I believe it's actually more kind of forking away and tweaking the storage engine. I'd have to go and check.

**Jerod Santo:** It's both. We talked with them. It was both, yeah.

**Adam Stacoviak:** I've got it pulled up here. I actually was thinking about that. Something Nikita said - he actually said their stock, -ish.

**Jerod Santo:** Are you running a fork of Postgres, or is it stock Postgres?

**Nikita Shamgunov:** So it’s stock, -ish. I guess it’s stock Postgres with a caveat. So what’s the caveat? Well, we have to change Postgres in a very surgical matter, and specifically where Postgres reads a page from disk, instead, it needs to read a page from our remote storage by making an RPC call. And when a Postgres writes into disk, and sends what is called a wall record, write-ahead log record, instead of writing to disk, it needs to send it over the network into our service, into our multi-tenant service. Those changes are not huge, but they’re there. We’ve split those changes into five separate patches that we are submitting upstream. They have not been accepted yet, but we’re working with the community for it to all get upstream.

**Adam Stacoviak:** Are you Postgres or are you not Postgres? He's like "We're stock, -ish" and the layer on some of their own extinctions internally that they want to go upstream, and they have committed, but have not been accepted upstream yet, so...

**Craig Kerstiens:** Yeah, I can have some drinks with Nikita and we can debate how stock-ish or not...

**Adam Stacoviak:** \[unintelligible 00:34:46.01\]

**Craig Kerstiens:** They have some core developers and they are working --

**Adam Stacoviak:** So the reason they're not stock is --

**Craig Kerstiens:** And so of the people doing that sort of stuff, I think they have a good shot of getting it upstream. But it may not, and...

**Adam Stacoviak:** So the reason they're not stock is they layer on --

**Craig Kerstiens:** ...and how much do you \[unintelligible 00:34:58.15\] that sort of thing. I think some of the big clouds have come in before and been like "Hey, we want to commit this to Postgres." I'm like, "That's not how open source development works." You can't show up and say, "I have my way of doing thing. Add this." You build credibility from the ground up, from "Hey, how about the testing, and the bug reports, and fixing bugs?" before you say "Here's, I want to change Rails to run on Python." Like, what? No.

So I have some good faith, I think they're doing that, but... Yeah, it's a little bit of patience to actually kind of get to that point. But Timescale and Citus are two great examples that were on vanilla Postgres and pure extensions. And I think there's opportunities for more. I think we're gonna continue to see it.

Postgres doesn't have a great kind of graphing vector capability. That's an interesting one where it's got time series... It's got time series like in native Postgres, and Timescale. Sharding - you can do with the Postgres FTW natively, or you could do it in Citus with an extension. It doesn't have an amazing graph story...

\[36:02\] So that's the one area I could see right off; more columnar stuff. Like, columnar compression is great, instead of kind of a row-based kind of sorting, it's columnar; you get good storage compression for certain workloads really, really amazing. When the data warehousing kind of stuff comes in, or you've got a lot of time series data - it wouldn't surprise me if there's companies focused on just that.

**Jerod Santo:** You mentioned big players coming in with their large patches, and saying "Please accept our code", and that's not necessarily how it works. How does it work? How would you describe Postgres governance, or the core team? What's the size? Who are the people? How do they make decisions, and how does stuff actually get in? Is it out there on GitHub with pull requests, and stuff, or is there a different process? How does it all run?

**Craig Kerstiens:** So it is Git, but it's old-school Git. Go read the Postgres mailing lists. Like, here's a patch submitted via email, and like there -- nope, GitHub... I think there's a GitHub mirror. But it's lile, no, you're not submitting issues on GitHub. It is old school Linux open source development.

Postgres has a few commit fests, where like "Here's a window open for commits to come in." There's kind of a -- it's fascinating, because people think of the core team as what commits and controls Postgres. The core team - I believe it's nine people; it used to be seven. That's more like a steering committee. Like, "Alright, we're gonna deal with the Code of Conduct complaints, and we're gonna figure out the conference, and defend trademarks, and just make sure people abide by that." And then there is a commit bit, and then a major contributor, minor contributor.

Major/minor is a little bit of a legacy thing. I don't think they're pushing that quite as much. Like, you commit a major feature like range types, or JSON - you kind of earn "Hey, you're a major contributor", major feature, that was in the release notes. Your commit bit, you earn over time, over the years. A few years ago, they gave them out to some people that were really up and comers. Jeff Davis, Neil Conway I think were really, really early. I think Jeff Davis may have been the youngest to get his commit bit at like 18 or 19. I don't know if it was him or Neil Conway. But young -- Jeff Davis is back, active in the community; for a little while he wasn't. Neil Conway went on to get his PhD, and is doing other interesting database things, but not active.

So Postgres is really slow about adding new committers. It's fascinating to watch some people that get their commit bit and get excited, and are like "I'm gonna go ship some features now, and commit stuff", and it was not as solid, it was a little buggy, and their next year was fixing that stuff. Like, there's kind of this unspoken role of "You did this, you maintain it, you clean it up." So the community really watches itself, right? There's kind of that peer pressure... Like, you're not committing and inflicting pain on the rest of us, right?

So commit fests happen every few months. That's an open window where patches are submitted. People sign up in the commit fest app; there's an app. so if you want to start to contribute to Postgres, or see how it works - this is a fascinating sense of open source development - go review some patches. Pull them down, build Postgres, test it, reviewed the code quality...

I can dig up, there's a couple presentations that were given, that we could link in show notes, to like "Here's how to contribute to Postgres." The best way is just reading the PGSQL Hackers mailing list. You want to become a -- people ask me a lot of times "How do I become like a really senior developer? How do I get good at C? How do I become an advanced, advanced developer?" Just read the hackers mailing list. It's fascinating how the conversation -- it's not a cordial... I mean, it's cordial enough, but it's not always friendly. As a beginner, you show up there and ask a question, like "Alright, where's the patch to repro this?" and the sample test case, and all that... But it's an amazing quality development that happens right there.

\[39:50\] So patches get submitted, pulled in during the commit fest... People sign up to review patches... Once enough review happens and people feel good, a committer picks it up and says "Alright, I'm gonna commit this." Even if they didn't author it; they'll give it a run-through, they'll see the reviews of it, and then they commit it.

**Adam Stacoviak:** So there's a review process essentially community-wise, that sort of layers on some desire for it to be Postgres-native.

**Craig Kerstiens:** Yeah, yeah. Anyone can come in and review. You can hop on the commit fest app - there's an open commit fest right now - and say "I'm going to help review this patch."

**Jerod Santo:** Huh. It's kind of amazing that something like that works, isn't it?

**Adam Stacoviak:** It is... It seems so frictioned. It's like, "I absolutely don't want anything. Stay away."

**Jerod Santo:** Like a completely autonomous organism of people just like organizing themselves over years and years and years, with a few key players, nine now, who are steering the direction, but like so many perhaps conflicting ideas, probably argumentation, hopefully in the best sense of the word, like all pushing this giant thing in a direction together... It just seems like it would be so fraught with trouble... But it continues to stably move in a positive - from the outside at least - direction of like improvement.

**Craig Kerstiens:** I've had a lot of people ask, "How can we replicate Postgres?" I have no idea. The fact that it works is a complete anomaly to me. The Linux Kernel is maybe the only other similar example, that size and codebase... And you know, people talk about open source a lot... Like "Oh, open source databases." And Postgres defies that even. Like, most open source things are run by one company; there's one set of primary -- I think Rails is a good another counterexample to that, like "Hey, large kind of community base", but a systems stuff is usually not trivial. So when people say, "Oh, there's open source databases", like MySQL... MySQL is primarily developed and maintained by a single company. And Postgres, the core team cannot be comprised of more than half of one company. You look at the committers, and it's very distributed, across --

**Jerod Santo:** Is that like written into the rules there? Do they say that's the case?

**Craig Kerstiens:** I believe that is -- you know, I don't know if it's in the core. I don't know if I've read the core \[unintelligible 00:42:07.19\] but it is at least a very unspoken rule. So when one recent acquisition happened, the core team grew from seven to nine to add two new people.

**Jerod Santo:** I see.

**Craig Kerstiens:** So if it's not in the bylaws, it's an unspoken one. And on the committers it's the same thing, where it's not going to be 30% of the committers are at one company. People view that as unhealthy. It's open source in its purest form, which I don't know that we see a lot of in the world.

**Jerod Santo:** Mm-hm. But it was started so long ago, that back when open source community was smaller and simpler, and grew to this. I wonder if you could start fresh today, not necessarily a database, but a large open source thing that could grow into a similar form... Like you said, you wouldn't know how to do it, but even could you do it? Maybe you can, but it seems like it'd be harder today than it was back in the '90s, or whatever.

**Craig Kerstiens:** I don't know, I'm sure it's possible. I don't know if you started with that goal, right? I hope I'm around 25 years and can go and see, like, are there other examples of this? It's a great question. We could wax poetic about and wonder for a while.

**Jerod Santo:** Well, let's get back to practical things here, for those who are using Postgres or are perhaps interested in it... What has been going on? I know 15 was a big release in '22, and surely there's things that are upcoming for the next major version... What's new and interesting? Of course, with the disclaimer that it's all about being boring and stable, so it's like asking what's interesting about a boring thing... But we're interested, and I know you are. What's on your radar, Craig, that people are working on in the community?

**Craig Kerstiens:** Yeah, I mean we hit on a lot of it with extensions. I think extensions are -- going forward, we're gonna talk about extensions as much as we talked about core Postgres. And I don't think it's a bad thing. I think it's just that that line of how much of it goes crazy with Postgres, versus is simpler... And I don't think going crazy is bad. I think we'll see a lot of innovation there.

\[44:10\] I do think core Postgres keeps just getting better and better. I think it was -- I think it was 14 when we had refresh materialized view. So like if you're using materialized views, like, how do you refresh them? How do you reload the data? I want this snapshot of a materialized view, and I want to refresh it... It may have been that it was refreshed concurrently. I forget. But it's like, great. This is a nice, just simple thing that I had to work around before, right?

Logical replication we got a number of years ago; now you can actually filter... Logical replication used to be the whole database. Now you can apply like a "I want a logical stream of just these five tables." So way easier to kind of move data around from an ETL's perspective. To me, that was a huge one, that was small, and usability that just, when you need it, it's there.

There's a few things on like internal kind of sort of performance and compression. It's like every Postgres release, like "What's new?" and it's like "Just upgrade, and you'll get better performance." That's just a nice thing to do. Every release now pretty much is just some better performance. And the common question is, "Will I be impacted by it? Will I get that performance?" "Ah, just upgrade. It can't be worse."

**Jerod Santo:** Right.

**Craig Kerstiens:** It's really pretty good and stable about that.

**Adam Stacoviak:** It can't be worse.

**Jerod Santo:** Well, surely there have been at some point some performance regressions, right? Things that had slipped through; it could be worse, right?

**Craig Kerstiens:** It doesn't happen very often. Postgres is really--

**Adam Stacoviak:** No, Jerod. No.

**Jerod Santo:** It can't be. I guess by the time they do a major release, they're ready for it. What's the cadence? Is it like every set time, or is it a certain number of features when they decide "This is a major release"?

**Craig Kerstiens:** So a major releases every year, and then there's five supported major versions at a time. Point releases come out every -- I believe it's every two months; it might be every quarter. I'll have to double-check that. But every so often, for like "Hey, here's fixes, patches", that sort of thing.

Usually, the major release is every fall... Like, it kinda was at a variable time from July to December; usually now it's pretty close to that October timeframe each year. I recommend waiting for the first point release always on a major version.

When Postgres 14 15 came out, we supported it within five hours on Crunchy Bridge on day one. We have people that want it, and that want to run wild wild west, like "Let's go! I want the new features, I'm ready for it." I recommend for that first patch release that's usually a couple months later. Postgres is really solid, it's good. It's not terrible to run, but you may find a bug in that first point release. So if you really want to care about stability even more, then waiting two, three months is not a bad thing to do.

Let's see... I'm trying to think of the other ones. A lot is performance. JSON stuff got a little bit of improvements, and it continues to get just a little more bit by bit, which is nice... Some of just the functions around querying JSON, multi-range types and that sort of thing was pretty great...

**Jerod Santo:** I'm looking at a list here... Sql merge command - that's not something I'm familiar with. That was the top thing on 15. What is that?

**Craig Kerstiens:** So it's a thing that's a -- I would not use it. I would actually use other things in Postgres. It's so funny... The broad set of the user base is like "Look, it's finally getting merged", and it's like "Here's other ways to work around and do this."

**Jerod Santo:** What does merge do? Is it like merging two records?

**Craig Kerstiens:** Yeah, it's a SQL syntax thing. So it's specific to -- I believe most people would recommend like a lateral join instead, or like a traditional Postgres upsert. I think it hit the front page of Hacker News, and every Postgres developer was like "Please don't use this. Use this other path of it."

**Jerod Santo:** How does it get in then? Shouldn't the hive mind have routed that one out before it got in?

**Craig Kerstiens:** I believe it's in the SQL standard...

**Jerod Santo:** Oh, it's a compatibility thing.

**Craig Kerstiens:** \[48:00\] It's like, okay, to be SQL standard and complete... And it was with some caveats. I think it's one of those things... I should go back and see how much contention there was among core developers and committers of like "Should this actually be in or not?" It took a few years to make it in. So it wasn't one of those runaway things... But it's like "Cool, now we have complete compatibility with MySQL from that SQL perspective."

**Jerod Santo:** Gotcha.

**Craig Kerstiens:** It's kind of like the money datatype in Postgres. It's in there, but you should never use it. Like, it assumes so many things about money and currency that just don't make sense, that it's like "Never use the money datatype."

**Jerod Santo:** So how should you store currency inside of Postgres? What's the best practice?

**Craig Kerstiens:** With a numeric data type.

**Jerod Santo:** Okay.

**Adam Stacoviak:** So why doesn't the money type just get removed? No code is the best code, right? I mean, isn't that the old adage?

**Craig Kerstiens:** Yes, because applications rely on it. That's why the bar is so high on Postgres, and people complain, like "Go faster, add this feature. It's okay, you can change it later." And the community is great about this. Postgres has managed to deprecate things. It really has, but it's a slow process. And they want to make sure they're not stepping on people's toes, and give warnings, and...

**Adam Stacoviak:** Yeah. Is the money feature an old feature?

**Craig Kerstiens:** Yeah, it's been there for...

**Adam Stacoviak:** Okay, so it's dated. It assumes a lot of stuff. Yeah.

**Jerod Santo:** Is there a book or a resource similar to "JavaScript, the good parts", that somebody has written? Like "Postgres, the good parts." Because it sounds like there's areas, Craig, that you'd say, "Let's avoid these sections of Postgres, but here's the good stuff."

**Craig Kerstiens:** "The art of PostgreSQL." It's by a good friend, Dimitri Fontaine. And it's targeting app developers, too. It's not the DBA stuff. It touches on "Here's how to do this in SQL." Things like common table expressions, and window functions, which scare app developers, when you're like "Whoa, what are we doing now, in the database, writing these sorts of queries?"

When I talk to a lot of developers, if I'm giving a talk at a conference and I ask them to raise their hand, "Who likes writing SQL?" and I'll see -- if there's 100 people, I'll see like five hands... And I'll follow that up with like "Who likes reading other people's SQL?" and it's no one. Because everyone writes just bad SQL, and it's like this string of unreadable mess... But with like common table expressions, you can construct really readable SQL, where you're like "Oh, this is logical, like I would write Ruby code, and I can follow it."

So I think his book is really good for both the application developer stuff, "Here's how to use JSON, here's how to use range types, here's how to take advantage of this stuff", but also, "Here's how to take advantage of SQL without it being too scary."

**Jerod Santo:** Love it. We will link that one up for those interested, "The art of PostgreSQL."

**Adam Stacoviak:** For sure. It seems like the path to committing though is pretty narrow. That's why I'm like why not just get rid of some of these features...? If it's so narrow to get a feature in, it seems like you should be quick to bounce, as slow as you are to take.

**Jerod Santo:** Maybe... I think Postgres, especially with its rise in popularity, people are like "Why can't core just--" I mean, we mentioned the Postgres-ish of Neon, right? And - well, they're trying to build... Like, it's easy to say "Why aren't they Postgres? No, you can just be Postgres." But they've got to upstream this, and you've got to wait for a year or two, or three, to keep that quality.

**Adam Stacoviak:** I think it was in the geo stuff though. It was mainly around the geo. The other stuff seemed like -- I'm trying to recall that conversation. I'm not trying to defend, I'm just trying to clarify... And I think their intention is to be as Postgres as possible. Now, obviously, "presents as" and "Postgres-compatible" sounds very similar to that, but it sounds like they're trying to be Postgres, and they want that to be given to the community... I think so much so that, Jerod, you're like "Can we run Neon on our own?" And Nikita was like "Yeah, you can. You can take our patches and recompile Postgres yourself, and get to the same Neon we're at today, and do it yourself." That's what I recall from that conversation.

**Craig Kerstiens:** \[52:04\] I think it's a big step forward from -- I would describe Neon as an open source Aurora.

**Jerod Santo:** I think that's fair.

**Craig Kerstiens:** If you talk to Amazon -- I think you could ask Nikita. That's probably a fair assessment, right? And you could talk to Amazon and say "Well, why haven't you open sourced Aurora?" And they're like "Well, it has all these Amazon-specific things, and it wouldn't be good to community..." So I think this is definitely a step in the right direction. But Postgres at its core - you put that in there and it breaks something, or it has this edge case, and then the whole set of community... A lot of volunteer on their nights and weekends developers - some of them are paid full-time time for this - are now supporting this thing for a company that supports their mission.

So at the core, you want a database to just work and not lose your data, and Postgres hold that bar really high. Not every database actually does. Some play fast and loose there. So it's a thing that, if you want that, you've got to take that trade-off of "It's going slow, and things get deprecated slowly, because they made it in, because we thought the quality was there." It's a little slow and steady, but it's the tortoise that's won the race so far.

**Jerod Santo:** So what Neon is trying to do, take Postgres serverless, has two facets. You have the separation of the data storage from the compute layer, which they seem to have accomplished, and then you have the replication or the distribution of the database all around the world to these different edge nodes. And it seems that there's a part of the industry that's going that direction; it's the edge of the industry that seems like it's been very much bleeding edge, or maybe being pushed by people who have reasons for that... But I wonder if the core team - from your interactions or anything, is there discussion of the Postgres developers, of like "We're also headed in this similar direction?" Or is that not something that they're interested in building into Postgres? It's kind of rearchitecting to a certain extent, which is why Neon has the patch, and extend, and doing a lot of things in order to get it done. But Postgres core - are they moving that way, or are they just moving down the road of slow and steady, performance improvements, everything's extensions...?

**Craig Kerstiens:** I think more the latter, and I would say Postgres probably does better with all that shiny stuff than people realize. I've got a customer that looked at -- like, they were on Heroku and thinking, "Okay, I'm thinking about what I'd do after Heroku", and ran this app that benchmarked on all these providers... And I'll send the link, so that we can post it in the show notes... Like, this is their benchmark. And Crunchy has like geo-replicas today, and connected their fly.io app, which - Fly is all about "Run the app on the edge, everywhere." And this is vanilla Postgres. There is no special proprietary anything. Vanilla Postgres, just running geo-replicas... Like, we're faster than Fly-native things.

So \[unintelligible 00:55:07.03\] over there, like "You want managed Postgres? Run on Crunchy Bridge." And guess what - Postgres is really good. And it doesn't get talked about, because it is boring and stodgy, and not shiny, new "We did this advanced thing." But guess what? Vanilla Postgres, geo-replicated - really fast, and works really well. I was kind of surprised. I was surprised that \[unintelligible 00:55:27.26\] Fly-native ones. Like, "Wait, huh? How are we faster than Fly, when we're not even on Fly?" This is an AWS instance, geo-replicated, and AWS or Azure or GCP, not on Fly hardware, and it's actually better performance latency time.

**Jerod Santo:** Well, that's cool...

**Adam Stacoviak:** \[55:46\] Well, the one difference, I think, is probably it's not managed, and it's not serverless. Right? There's two kind of key parts there, which is part of the Neon story... Because you've got to manage yourself, and it doesn't spin down to zero.

**Craig Kerstiens:** Yeah, I think that spin down to zero is a fair one. And, that's a great question. To me, I usually think of serverless as more of a business thing... Like, "Do you actually care that it spins down to zero, or you just don't want to pay for it when it's not in use?" I think you even look at that spin down to zero, and look at it in Aurora - there is no like zero-cost Aurora anymore. It's now a minimum, like "Hey, we'll idle it, but still, there's a minimum budget account for your database."

**Adam Stacoviak:** Yeah. Surely. I mean, there's a business challenge there too, because - one of Jerod's questions was like, okay, so you're footing the bill to that, spin down to zero, you're gonna hold that data for how long, because that zero may never come back to a one, because the customer left, or they no longer are interested in Neon, and you're sitting with this data on a disk... And he talked about the tiers of data, and stuff like that... So there's definitely a business challenge there when it comes to affording that long-term, and enabling that forever zero feature, that spin down to zero feature. It's an interesting world.

**Craig Kerstiens:** Yeah. I mean, look at Heroku as the perfect example of this, and the articles that are written, of like "This is why we can't have good things" and "Is this the end of free for the internet, for developers?" I don't know, I think there's ways to do that sustainably. For us, if you use your database for less than $5 a month, we don't bill you. I want it to be accessible to students and hobby developers. So use it, idle it, and you're just paying for the storage there... And we have people that every month just develop, and work away, and learn, and that sort of thing. But at the end of the day, how do you do that long-term, right? I'm sure they're going to grow, and eventually someone's going to come in and say, "Oh, look, look at this line item here that we're footing the bill for. How do we reconcile that?"

**Adam Stacoviak:** Precisely. Yeah, does that turn into a true business. And even with Heroku, which - I don't want to get too deep into that set of weeds there, but you've got to imagine the fraud, waste and abuse in that free tier. It's a great enabler, and I'm cool with that, I love that, but as a business is trying to sustain, and grow, and I'm sure Salesforce is a very large company etc. whatever you want to attach to that, but there's a lot of security vulnerability in that free tier, there's a lot of fraud, abuse in that free tier that just isn't their core business, and I think that's more their argument than the free tier at large's argument... Because there's so many customers that could be a paying customer in that free tier if you just farm for them, and educate them. But they've gotta be real customers, real possibilities, not those there to just simply abuse the system.

**Craig Kerstiens:** Yeah. This was over ten years ago, but I was the first product manager that handled fraud and abuse at Heroku way back. So it wasn't a new thing. It's not a thing that started with blockchain. The very first case -- yeah, I mean, I don't want to get too far down that rabbit hole, because --

**Adam Stacoviak:** Yeah, don't go too deep, but sure, go one more layer. We'll allow it.

**Craig Kerstiens:** We can talk about barbecue for an hour, or we can talk about Heroku for an hour...

**Jerod Santo:** Yeah.

**Craig Kerstiens:** I do actually love Postgres, but those things are fun, too. \[laughter\] But yeah, the very first case was in Korea. You had to have a reservation to buy an iPhone. And so this app was spinning up, connecting out to Apple, and making all the reservations, and then reselling them. So not even reselling an iPhone; like, changing the name of the reservation and selling it out to people. Now, we were playing chicken and mouse with this. They just kept pushing up the same slug, right? So you could just look at the Git SHA and be like "Oh, it's okay." Then they started adjusting the Git's SHA, of like "Oh, I'll just add an empty commit, so Heroku can't easily find it."

We actually found this person - I think enough time has elapsed now - their Git commit had their name, and Google then had their LinkedIn, had their name, where they were, we coordinated with Apple, sent it over to them, and they're like "Okay, thank you. We'll take care of this." And it just went away after that. I don't know what they did...

**Jerod Santo:** Haah!

**Craig Kerstiens:** \[01:00:02.03\] ...but that was the very first case of like "What is going on? Why is all this traffic going to Apple? What purpose do you have to make a reservation for an iPhone?" I never knew this was how in demand they were and how it worked there.

**Jerod Santo:** Right... Tim Cook made that guy an offer he couldn't refuse.

**Adam Stacoviak:** It's true. Good one, Jerod.

**Craig Kerstiens:** That or \[unintelligible 01:00:17.25\] I don't know which.

**Jerod Santo:** I was gonna say, he woke up with a horse head in his bed or something, right?

**Craig Kerstiens:** Like, "Come work for us, or the other option." But it's nothing new --

**Adam Stacoviak:** "Run our reservations team."

**Craig Kerstiens:** Yeah, I'm sure it's not any better, with coin mining and other things...

**Jerod Santo:** Yeah... Well, there's another factor there, which is we had a decade of hyper-growth, 0% interest rate-based investment, and the free tier for a startup is an epic win for growth. I mean, it's a massive way to get lots of people. I think -- was it Jason Bosco from Typesense, Adam, that we talked to about how they didn't have a free for open source, or a free for whatever offering with their cloud, and how that is one way of going about getting a whole bunch of users, that you could just buy them, because you have investment money... And like those times are changing. I think that's more of the -- I don't know if cynical is the right word, but maybe the hairier side of what those things are. Of course, we wanna always just be like "We love developers, we love open source, and we want to see people tinker and have fun, and here it is..." And I do believe that is sincere in many cases; it is also a hyper-growth strategy that's afforded by large investments, and continues to run based on larger investments, which eventually run out, or need their money back. So like you said, eventually Salesforce is like "This doesn't make sense for Heroku anymore, and so we're not going to do it."

**Craig Kerstiens:** I think it's a little different there, and I like to think actually Crunchy has some of the same philosophy and ethos as the early Heroku... Like, it's not free as a business piece, right? We want you to come to -- I want you to learn Postgres. I want you to like get experience with Postgres. I want you to be able to build your side project and it not cost you$1,000 on the weekends. Like, come bootstrap a thing, right? But when you're up and running in production, like if you're getting value out of it, you should pay for it, right? And Heroku very much was that, "Hey, developers should learn here." The amount of like Rails Girls camps that ran there, and PyLadies, and all that sort of thing... I think some of that ethos got lost.

I don't know if you guys saw, we shipped Postgres in the browser, but it's a whole playground, that instead of us running databases and connecting to them, it's running locally in your browser. You want to learn -- you don't have to install Postgres, and we have apparently now some university courses basing stuff on that. Like, "Oh, cool. You don't have to --" installing Rails is still hard. Installing Postgres is not always trivial. So how do we make it easy for people to learn, get started? And then when you get value - yeah, go pay for it, right?

**Jerod Santo:** Totally, yeah. The Postgres in the browser thing is so cool.

**Adam Stacoviak:** Yeah. What was involved in getting that in the browser? What's the backstory?

**Craig Kerstiens:** That was an engineer that showed up on a Monday and said, "I did a crazy thing this weekend. I've been playing with WASM and I just put Postgres in."

**Adam Stacoviak:** Hah! Nice...

**Craig Kerstiens:** He's like "Yeah, I know, it's crazy... It's a stupid idea" and I'm like "Actually, I wonder, can we do this?" And so our whole playground - there's a Notion database we have that we just go and add tutorials, so it's bootstrapped by like Markdown and then a SQL file, and that loads up a whole new tutorial. So we have like marketing folks that don't have to deploy any app change. They just like edit a Notion file, and now you've got new tutorials for people pretty ad hoc, and it's been amazing that we've got like a ton of internal folks that are like "Oh yeah, I wrote this blog post, and here's a tutorial that you can follow step by step, pretty Markdown, with images and etc, and it's just bootstrapped by your own SQL file." And then we have an Easter egg in there as well, where you can just append the URL to the playground, like sql= and then give it a URL, and it'll load your own SQL file. So if you wanted internal training with sample data, it'll boot up the browser instance, download that SQL file, create tables, load up data, all just right there for you.

**Jerod Santo:** \[01:04:18.29\] That's cool, man.

**Adam Stacoviak:** So what lives in Notion specifically?

**Jerod Santo:** So if you go to our playground, you'll see the title of a tutorial, the description, the SQL, and then the Markdown. So we're hitting the Notion API to basically render all that. Think of Notion as our CMS for the playground.

**Adam Stacoviak:** We use Notion internally to essentially run our entire schedule. We do a bunch of interesting things... I'm just curious what you put in there. So it essentially gets consumed by your website via the API. It's not actually Notion, but what is there for each tutorial lives in Notion probably as its own page, or document, or whatever.

**Craig Kerstiens:** Yeah, exactly.

**Adam Stacoviak:** Interesting.

**Craig Kerstiens:** Yeah. Y'all should totally do a blog post about that. I'm super-curious, because our events page for our website is powered by Notion, and all that, so now I'm curious to see... It sounds like we're using some things in similar ways.

**Adam Stacoviak:** It's a love/hate relationship with Notion. I like it. It's very heavy... I did say one time, Jerod, it was super-fast, and it's gotten slower, so sad... But it's a love/hate relationship.

**Jerod Santo:** I never experienced that. He's like "Notion is superfast." I'm like "It is? Is it?"

**Adam Stacoviak:** Maybe it was temporary... But still yet an amazing tool. I love it. I love Notion. It's just - it's kind of bulky.

**Jerod Santo:** But in terms of giving access to people who don't have to query a sequel or a Postgres database in order to add tutorials to the Postgres playground, it's super cool for accessibility to your guys's teams. I love wins like that. We used to use Trello in a similar way as a CMS for our newsletters. And so just -- I think Notion has become kind of the new "build your own integrations that team members can work on" kind of thing, and people are starting to whip out some code, and glue together some really interesting solutions to their problems. But it is slow... \[laughs\]

**Craig Kerstiens:** Yeah, I agree with that. I agree with both points, right? There's a lot in there. Is there too much in there? Is it that curated, clean-cut product? I'm not sure anymore. But yeah, you can do some cool stuff with it to create that kind of CMS flexibility/accessibility stuff.

**Jerod Santo:** Alright, Craig, anything left unasked, untold? You dropped this cool playground on us, which I had heard about, but didn't realize it was you and your team that put it together. That's a super-cool nugget here at the end. Anything else in the Postgres world? We know there's Postgres weekly for those who want to keep up, which you're also involved in; that's a Peter Cooper joint... What else to say before we call it a show?

**Craig Kerstiens:** Probably the final thing is just JSON, JSONB and Postgres is awesome. It's hard not to mention -- like, we've made it an hour and not talked about JSONB, which everyone is like "It's awesome, and I use it." And so - man, maybe everyone knows it, and is aware, but I still see people every so often that are like "Wait, Postgres can do that?" I mean, JSON came in, which was just cheating. It was just text validation on JSON, and threw it into a text field. And then JSONB came in... One of my colleagues says "B stands for better", so I continually steal that from him. It's binary JSON on disk, rich indexing, searching... It's really, really great. You think of Postgres as this stodgy relational database - I think we're past that. But if you weren't aware that we're past that, the JSONB stuff in Postgres I think highlights it. And we're coming up on 10 years of JSON in Postgres... So I'll leave with that, as like - it really is a pretty sweet database. We talked a lot about extensions... When you think "I need to Postgres-like thing" - no, maybe you just need Postgres. Just Postgres. It's pretty cool by itself.

**Adam Stacoviak:** \[01:07:52.09\] There you go. We'll JSONB it up. I remember when Douglas Crockford said that JSON would never have versions... So is that kind of like a slap in the face, kind of? Is he involved in JSONB? I don't know. What's the story there?

**Craig Kerstiens:** No, not at all. I mean, it's JSON. But it's yeah, it's --

**Adam Stacoviak:** But it's better.

**Craig Kerstiens:** Exactly. Exactly. And instead of a JSON 2.0, it's just JSONB, so it's the final one. It's the better one.

**Jerod Santo:** It's the better one. There's no JSONC, Adam. There's not going to be a JSONC.

**Adam Stacoviak:** No JSON Z, or Zed.

**Jerod Santo:** Or JSON++.

**Craig Kerstiens:** Our only option now is like JSONB++.

**Adam Stacoviak:** That's right. There you go. That's the way to do it. It's better. Craig, thanks for coming on, last-minute, too. I appreciate being here. I wasn't here for two years ago when you were here, so hopefully I'm here two years from now when you come back and we talk about--

**Craig Kerstiens:** I think two years ago you were like "I'm not really a Postgres guy... I don't have opinions on it..."

**Adam Stacoviak:** You know, honestly, I don't know what happened. It was October when that was recorded. It wasn't like it was June, Jerod, when I would take a vacation, or something like that. I'm trying to consider while I wouldn't have been available for that call, but...

**Craig Kerstiens:** "Oh, I've met that guy in the beer line, and I don't want to talk to him."

**Jerod Santo:** "Yeah, I don't really like that guy..."

**Craig Kerstiens:** \[unintelligible 01:09:00.26\]

**Jerod Santo:** "He's got a terrible barbecue."

**Adam Stacoviak:** Okay, so we do have to come back... We have a show called Backstage, Craig, and we'd love to have you back. Jerod, you can join to sniff, or partake, not to cook... And we could talk about rubs, timing, temperature... You know...

**Craig Kerstiens:** That sounds awesome. Let's do it.

**Adam Stacoviak:** How posh you may or may not be... Is it Mill Scale for life, or is it something else? What do you do? Did you have yours custom-built? Do you build them custom yourself? Of course, I'm talking about the steel around a barbecue, which is the barbecue itself, and your process. But let's do that on Backstage. Thank you for all your passion in Postgres. Thank you for all the work you're doing at Crunchy Data and the work you're putting in there, and for coming on the show. It's been a pleasure.

**Craig Kerstiens:** Yeah. Thanks, folks. I'm glad it worked out last-minute. I was it was last week like I was on the Django Chat, at the end of the year... I'm like "Oh, this is fun. I should actually do some more of these." So it was nice, you know, opportunity. I'm gonna go retrieve a kid from school.

**Adam Stacoviak:** Do it.

**Jerod Santo:** Awesome. Thanks, Craig.

**Craig Kerstiens:** Thanks, folks.
