**Jerod Santo:** Craig, you're in an interesting position, because you've done so much for Postgres the project; you've taught, and you've spoken, and you've blogged, and you've provided endless resources, you curated the PG Weekly newsletter... I've been following a lot of your stuff for a long time, just learning as you kind of put stuff out there, as I'm a casual Postgres user... Long-time user, but just casual. I don't really dive into the nitty-gritty very often, because I just don't have to... But you've done all of this, and yet Postgres the project - it's not your baby; maybe it feels like it now, but it's a long-standing open source thing, with dozens of people... Tell us how you came involved with the project, and maybe how you fell in love with the database.

**Craig Kerstiens:** Yeah. So I think Postgres itself is interesting - I've actually never contributed a single line of code myself to it. There's so many other people that know the ins and outs... I've read it, I've looked at it... But maybe one day I actually will. But yeah, my contributions have mostly been on the community side. Talking with others, working with people.

I actually came to it -- I guess the first place was at a startup many years ago that I joined Truviso. I joined at about ten people. They were taking Postgres and transforming it into a streaming database; it basically did MapReduce on data as it came in. It was back about 12 years ago, during one of the last crashes. Basically, that complex events processing was this new kind of cool, sexy thing. I had familiarity with it from college and university, but hadn't really used it there. We were basically taking it and transforming it into something really advanced, handling a whole lot of data. We had customers like -- I think MySpace was one of our customers back in the day, when they were still the hot thing, which dates it pretty well.

**Jerod Santo:** \[00:04:14.04\] Yeah.

**Craig Kerstiens:** And from there, we've built a product, and the company grew and dwindled back down to about ten people, and I moved on... And I found myself a few years later at Heroku. It was really interesting, because it was kind of like yourself - you're an app developer, it's there, you're using it... And even internally at Heroku, we had 50 employees, and they were like "Yeah, Postgres is fine. Whatever. I'll use it." I'm like "Guys, you've got a great database here." And I found myself starting to blog more and more.

I'm a lazy blogger. I think I have a blog post talking about why I blog, and it's because I'm lazy. Once I explain something twice, I don't wanna explain it again. So I'll just write a blog post on it. Once I've found myself teaching something, like "Let's just go and--" It doesn't have to be polished or useful; I tell a lot of people that about blogging, "Don't worry about getting it perfect. Just get it out there. It probably has value for a lot of people."

**Jerod Santo:** Then you just send people the link when they ask you questions, instead of having to rewrite the answers, right?

**Craig Kerstiens:** I absolutely do. Sometimes I feel like an absolute jerk, when I'm like "Hang on. I'm not gonna actually answer, I'm just gonna send you a link to a blog post." I definitely feel a little bit like a jerk. But it's why it exists, right?

**Jerod Santo:** Right. It's kind of like "Go read my book." Well, that's worse, because you have to buy the book. With the blog post at least it's free. But I know people who are like "Just go read my book. It tells you the answer." It's like, "Well, I asked you the question right here." But if it's online, and you're asking, sending a link is useful. I understand it.

**Craig Kerstiens:** Yeah. So I found myself really kind of speaking to app developers. I'm not a DBA, but I help out developers all the time with like "How do I troubleshoot this? How do I troubleshoot that? If I go way back at Heroku - we had all these Rails developers asking for a database, and we kind of thought "How hard can this be?" Back at that time, Amazon RDS didn't even exist. And we looked, and said "Postgres is a really solid database." It has good fundamentals, a good core... I mean, if you go back to the history of it, Postgres has the same roots as so many other databases. It's in the name. Ingres was one of the early origins, like grandfathers of databases that came out of UC Berkeley. Post-Ingres is Postgres.

**Jerod Santo:** There it is.

**Craig Kerstiens:** And so many other databases have that same root of Ingres, like Sybase, SQL Server... But it's over 20 years old now, and it's just solid and sturdy. So I got started with it way back, really got into it at Heroku, running and helping build Heroku Postgres for a number of years, and have found myself doing it at Citus, and now at Crunchy Data, building and running their cloud service... Basically, just running Postgres for people for a while.

**Jerod Santo:** You may remember this history better than I do, but I was an early Rails developer, and I know that Rails, the original stack, was MySQL; it was the production database. Now, it started with SQLite, so you could just run your tests, but people - even Basecamp - ran MySQL... And at a certain point it was like MySQL fell out of favor, and Postgres came into favor, just like amongst the zeitgeist of Rails developers... And I can't remember why. What triggered that. Was it because of Heroku's influence and Heroku Postgres?

**Craig Kerstiens:** I'm pretty sure it was Heroku's influence. In Heroku you've got a Postgres database. Every Rails app has a Postgres database. So I'm pretty sure we can thank Heroku for a lot of it. I wish I could say it was wonderfully thought out and strategic... We thought Postgres was a good database; we decided to run Postgres. I think it was the right choice, and we invested a lot in it to make it better.

Postgres for the longest time wasn't the most user-friendly, it wasn't the most sexy database. Can databases be sexy?

**Jerod Santo:** I don't know. I hear people say that all the time, and I'm like "Really?" But I know what you're saying. Maybe exciting is a better word...

**Craig Kerstiens:** Right. It's not my idea of like a Friday night \[unintelligible 00:08:02.01\] Postgres, but it's gotten the cooler features. JSON was a big one.

**Jerod Santo:** Yeah.

**Craig Kerstiens:** \[00:08:11.15\] So I think that really shifted with Heroku. I actually remember Heroku supported it probably five years before Amazon RDS did. I go to a lot of Amazon conferences; re:Invent is the big one, it's a massive, massive conference... And they roll out product announcement after product announcement after product announcement, and I remember being there... I had a heads up it was coming, so I made sure to actually go to that keynote to see the announcement, that sort of thing... And there was literally a standing ovation. I've never seen this before at a tech conference for a product announcement.

**Jerod Santo:** Really?

**Craig Kerstiens:** There was this big pause, standing ovation, the speaker started talking again, and people are still standing on their feet, clapping for this. I've never seen this before, I've never seen this after, at a tech conference, when you announce a new product.

**Jerod Santo:** So why do you think Postgres is so beloved? I know that I switched myself from MySQL to Postgres; mostly, when I switched, maybe it was because of just the flow of the tutorials, and this general \[unintelligible 00:09:07.07\] and I was just in there amongst them... But I remember I had some data -- this was way back in '05-'06, I had data consistency problems with my MySQL stuff, and I read some blog posts about how MySQL can just be recording nothing, and it's not gonna report it...

There were these edge cases in there, where it's kind of like less safe. And Postgres was there, and it had a reputation of being just rock-solid, consistent, and more strict with your data. And because of the ease of switching in Rails, I could switch very quickly. So I just started switching all my projects over, and I've found it easy to use, to administer... So that was kind of my switching point. I didn't really have much more thought than that.

**Craig Kerstiens:** I think if you look at it, Postgres was that. It was like "I'm gonna be safe and reliable. I'm not gonna lose your data." That's a funny thing to think about when it comes to a database, right? Keeping your data and not losing it. But that was Postgres' kind of cooler value - "We're not gonna add shiny, new things." The MySQL defaults got some flak for a little while, because in certain modes it would run, it had a different type of storage engine; certain ones weren't as safe. MySQL - it's funny, when you do search in MySQL, it's case-insensitive.

It was really funny, Uber switched from MySQL to Postgres, and then Postgres to MySQL. So they've gone back and forth a couple of times, but when they've swapped to Postgres, they had to figure out -- they had all this app logic that relied on things being case-insensitive, because the database just doesn't respect case search. To me, that's a little bit of an anti-feature.

I can go on about MySQL vs. Postgres; I think MySQL is a good database and does good things. I think Postgres really started at being safe and reliable. And then we said "Now there's these rich user features." There's things like JSON, there's things like common table expressions, window functions... There's a really rich set of features that I think we're gonna have a bunch of them scattered throughout. I could give you the laundry list of them right now, but each one is unique in its own right. But it started with that being really safe and reliable.

I look at a lot of other databases... Mongo didn't start as safe and reliable, and worked to catch up to that. It started as easy to use. And I think that developers have come around to respecting and appreciating that. You have a corruption, you spend two weeks, hey, and the data is gone. How do you answer that to a customer?

For all the shiny things we like, new frameworks that come out every single day, old and reliable just works, and I've really started to appreciate that, like "Hey, I've got my Rails stack or my Python and Django stack and my Postgres database, and this app can go really far." I don't need shiny, new things to build an interesting business.

**Jerod Santo:** \[00:11:57.23\] Yeah. I like that as well, especially for a database. It's like, there's areas in my application where I'm willing to experiment and I'm willing to go with the bleeding edge, and bleed a little bit, but get those bleeding edge features. And there's something just -- it makes you sleep well at night, just like "This database stores my data, and I can just trust it to do that." I think that was one of the reasons why I just stuck with it. It never really stabbed me in the back; I never had that moment where I'm like "Oh, Postgres, you screwed me over."

**Craig Kerstiens:** Right. And it's the case with so many others, too - you have that bad experience, and yeah, it's shiny and new, but man, you lose data... I think there's nothing worse you can do. Obviously, I'm a data guy, I like databases, but that's more valuable than downtime. Fine, go be down for an hour, or a few minutes, or a day, but don't lose the data that you can't get back. If you're banking or something like that and you've lost my deposit, I couldn't be more unhappy with you.

**Jerod Santo:** Yeah, exactly. So help us out with a little bit of the history, because one of the things that happened was like by the time all this development movement over to it - I'm sure it was popular amongst DBAs and amongst different people around the world, but really there was a groundswell, and maybe it was the Rails and the Herokus, and whatever this trend was, people started picking up Postgres as like their default started database. But by then it had been around for a very long time. Maybe that's why it was so rock-solid. It had the Ingres roots, and then it had -- I mean, by 2006-2007 when I started using it, it had been actively developed as Postgres for like a decade at that point.

And it didn't have the JSON features and all the stuff that we're gonna get into at that point, but help us unpack where it came from, who works on this thing, and the history, and kind of like the community around Postgres.

**Craig Kerstiens:** Yeah, so a lot of it - we can go way back to UC Berkeley. Stonebraker - I don't know that he won a Turing award just for Postgres, but Postgres is a huge piece of that, and he wanted to build this kind of extensible database. So he looked at Ingres and said "How can we evolve it to the next stage?" That's a lot of the way-back history; there's a great article in ACM, looking back at Postgres. I think it goes through a lot of that history.

I think there's a lot too of those years right after it came out from UC Berkeley, of a good stewardship of community, that really gets all the credit. I go out here and talk about it, but people just slogging away and working on it, making sure it was rock-solid...

I got in a little bit of trouble a little bit ago when I listed off a few names, and I started listing off two or three or four or five... And I think one you've gotta point to is Tom Lane. Tom Lane has contribute to so much open source... He helped create JPEG, and GIF, and PNG... He authored some of those specs. He helped write libjpeg, libpng... And this is 20-25 years ago... And then said "Yeah, I'm kind of tired of image formats. What's this database thing? Let me spend some time on that." And has contributed to a massive amount of Postgres code. If there's bugs, digging in and making sure they're fixed.

You've got him, you've got Bruce Momjian, you've got Robert Haas, you've got Andres Freund, you've got Stephen Frost, you've got Joe Conway, you've got Simon Riggs, you've got a whole bunch of people that just sat here and worked on Postgres. And you can go see all of the activity in the open; it's all in the mailing list. Development still happens that way that it did 15 years ago, on the mailing list, showing up with patches.

It's really interesting that they've got a set of solid committers, major contributors, minor contributors... There's this whole kind of hierarchy there; it's not too formal. There's a lot of debate within the community of like "Okay, do we have a major contributor for docs, or for community contributions or other things?" but the code just moves forward, and it's fascinating to me in that it does work that way.

\[00:15:57.06\] Often we talk about open source, and open source is not a new topic anymore; we talk about it plenty. And databases say they're open source, but Postgres is really unique. Yeah, it's open source, and other databases are open source, but no one owns Postgres. No one can own Postgres. You can't go and buy up a company and say -- MySQL is now owned by Oracle. They own the copyright. They own the code.

Postgres - I guess in theory, if you had a few billion dollars and you wanted to try to hire all the people that commit to it, maybe... But I just don't see it happening. The core structure and the way it's delivered and developed - it's kind of in its own category of what is open source. It's community-led, community-run, community-managed...

**Jerod Santo:** It's kind of a purebred that way.

**Craig Kerstiens:** It's not even like Linux, because Linux - you had a benevolent dictator. Postgres doesn't have that. It's got people on equal footing.

**Jerod Santo:** So is there like a governance structure set up, or people just debate on mailing lists? How does it actually run then?

**Craig Kerstiens:** Yeah, there's definitely debates on mailing lists. It is open source in that sense... \[laughter\] You're not getting away from that at all. So there's a core committee, that's five people. They oversee, and there's an entity set up to maintain copyrights, and that sort of thing. There is a license that is owned by a Postgres entity there, and they're set up in multiple companies. The core team isn't who says what goes in. The core is kind of a steering body.

So there's five people, there is no more than two from any company at a time... I think it's like 40%, so if the core were to grow to seven, it might change in that sense. But basically, you don't have a ruling set from any one company. So it's distributed across companies... But then the actual development - basically, you earn a commitment. You show up, you contribute, you review patches... Postgres has a major release once a year. Things show up, ideas on mailing lists, patches, there's debate and discussion... There's a couple of sprints, commit fests where patches are submitted. There's an app... And the biggest way to build your credibility is coming in and reviewing a patch for people. Reviews are always welcome, always helpful. If you wanna build credibility, you don't show up with a "Hey, I wanna fix this thing." It's show up on the mailing list and engage.

There's two mailing lists that are the big ones. There's a pgsql hackers list and a pgsql users. The hackers list is where all the interesting stuff happens. It's what I read to fall asleep at night. But if you wanna learn the internals of Postgres, it's a fascinating area to go in and read.

**Jerod Santo:** You said earlier you haven't committed a single line of code. Have you dove into the code as a readability standpoint? It's a C project, probably millions of lines of code at this point... Have you tried to actually tease it apart and look underneath the hood at all?

**Craig Kerstiens:** At times. Not in recent years, but at times, absolutely, in my career. It's funny - it's C, but I've heard people describe that they don't like writing C, but they're okay with writing Postgres C. It's really well-structured, well-defined. If you wanna see a good example of a large C project, it's a pretty good one.

**Jerod Santo:** It has to be, to keep going this long, and to stay actively worked on. Over the course of all of these years if you had that much technical debt and if you're just \[unintelligible 00:19:16.22\] C code without good architecture, good refactoring, over time you would just slow to a crawl; or crawl to a slow. I can't say it right. You would just stop moving fast. And we see Postgres just keeps that yearly release cadence. New features just keep rolling out, and they're just built on top of that foundation over and over again.

**Craig Kerstiens:** Yeah, and it's a testament to so many people long before me that do keep plugging away. There's been an active focus in the community to grow that number of committers. I think it's at about 40 now that have a commitment... But you earn that over several years, and you've gotta stay active. If you don't commit something every year or two, you lose that commitment. So it takes work to earn it, and then it takes work to maintain it. And then they're watching each other. You can't go and commit something that -- there have been releases where features got in, and some of the code quality wasn't there, and that engineer spent the rest of that next major release not writing new features, cleaning up. They hold themselves accountable in a good way. So it's definitely an interesting kind of testament of a project, and I don't know many other examples like it.

**Break:** \[00:20:37.04\]

**Jerod Santo:** So we talked about its stability, and how it doesn't let you down, and the data consistency... There was also this NoSQL trend, where a lot of shiny, new databases were coming out... And I'm not sure what year this was - maybe 2010, maybe 2012... Time kind of molds into a continuum. But in that range, where it was like "Look what this thing can do", and traditional relational database management systems like Postgres and MySQL were really kind of thrown under the bus, like they were stodgy, they didn't have the flexibility that you need... And a lot of people left Postgres at that time, or they left SQL altogether to move to NoSQL... And those of us that were a little more patient, Postgres just kept adding things, and it was like "Hold on a sec... There's that nice feature over there in NoSQL land, and you could actually get pretty close, or good enough, and not have to lose all of the asset guarantees and all the things that you have over here with Postgres." One of those was JSON... Talk about some of the exciting features that have come into the project over the last decade, which have really made it not just be the stable rock that it is, but also it's kind of exciting -- it's got a lot of cool stuff that they've been adding over the years. Tell us some things that excite you about it.

**Craig Kerstiens:** Yeah, so JSON's the big one. I can't talk about Postgres and not talk about JSON. And for context, that was eight years ago. That's pretty old in terms of technology, right? What was our frontend JavaScript stack like at that point? Were we still using jQuery maybe?

**Jerod Santo:** Backbone.js, yeah...

**Craig Kerstiens:** \[00:23:51.09\] Yeah. For context, a lot has changed in that landscape, right? And JSON was a really interesting one. I remember having conversations with the Postgres core community, and some of them were really dismissive at first. They were like "I've seen this before." Ten years ago, document databases, XML databases were getting replaced with relational databases, and they came and went. They just went by the wayside. Postgres added an XML data type... So technically, Postgres was a document database like 18 years ago, when they've added the XML data type. So I defend that Postgres has been a document database for nearly 20 years or so now.

But some of them don't write web apps, some of the core developers. They're like "Yeah, I built a website once upon a time..." So JSON is foreign to them. They're like "What is this JSON thing?" Now, that's not all of them. So I think there were a lot of interesting conversations around that time about NoSQL, and JSON, and there's really no reason JSON didn't fit into Postgres just fine. You can leverage JSON, and I think the broader debate on a SQL/NoSQL or schemaless -- schemaless is a really good one; we should get into that a little bit, because I think there's a lot there. But JSON first came in eight years ago, and really, we cheated; we totally cheated. We did validation on JSON, as it came in, and stored it in a text field. There was nothing special about it...

**Jerod Santo:** Yeah, it wasn't even really like a data type. It was just the text field, with some stuff on top of it, right?

**Craig Kerstiens:** Yeah, pretty much. It just went into a text field under the covers. Postgres did the validation and it was standard JSON. That's about it. So we totally cheated. Everyone still loved it and said "Okay, cool, I'm gonna use this." It just proves you don't always have to be technically correct to advance your case...

**Jerod Santo:** \[laughs\]

**Craig Kerstiens:** And then JSONB came a couple years later. JSONB is a binary representation on disk of compressed JSON. I use it in almost every project. I usually have a column called Extras, and it's really easy; I didn't know I needed this, I can throw it in... Or I don't know if it's gonna be there long-term... Feature flags are a great example for it. So now you've got two data types in Postgres. You've got JSON, and you've got JSONB. The B stands for binary. An engineer I've worked with for a long time says it stands for Better... I prefer that version a little bit more.

**Jerod Santo:** \[laughs\] Is there any reason to just use regular JSON as text now? Is there still reasons to do that, or...?

**Craig Kerstiens:** There's a few, and it's a pretty narrow set of use cases... But if you're not indexing and querying into that... If you wanna just save logs; if you've got logs coming in, or you've got an API that's accepting and ingesting stuff, and you wanna save the exact format. You're not querying that all the time; you just want a really quick -- it's gonna be a little bit faster, because it doesn't have to go and compress it to a binary format.

**Jerod Santo:** Right.

**Craig Kerstiens:** If you care about preserving the white space, logging and API logs are huge for this. "I just wanna save them and I wanna replay them exactly as they were." If you wanna go and replay your API logs, just throw them in JSON. So it's really fast, efficient, there's no extra processing... If you're not querying it, JSON is useful. But most of the time, you've got a key you wanna index and query into - you do want JSONB.

JSONB comes with all the extra perks. With JSON you can index a very specific key; with JSONB you can put a GIN index on, and index all the keys and columns within that JSON document. So then when you go and query it, it's gonna be really fast, like your other index \[unintelligible 00:27:29.18\] So JSONB is usually what you want when you're developing, in most cases.

**Jerod Santo:** Gotcha. Maybe real quick, do a quick "When should I use JSON in general?" You mentioned extras; it makes total sense if you're splatting logs into a thing, or API responses... Like, just take the API response and store it as JSON; so you're gonna store the type as JSON. There's a balance of when it's smart to use this and when you actually needed a separate table there, but you denormalized when you shouldn't have, and now you're gonna have problems. Usually, data consistency problems. What's your heuristics? When is JSON and JSONB a good idea, and when is it not a good idea?"

**Craig Kerstiens:** \[00:28:08.19\] So it dives a little bit into relational versus NoSQL. I think it's worth a quick detour there... You always have a schema, no matter what. You're just maintaining that in the database, or you're maintaining that in code.

**Jerod Santo:** Right.

**Craig Kerstiens:** If your application expects something to be there, now you're building an if statement to say "If this is there... Otherwise, do this." Or "Write out a default value." Whereas when you add a column in Postgres, you're adding a default value. There's a number of things that if you don't rely on that being there - great. In a schema, there's really usually some things that always exist... Like "Hey, you've got a users table, and there's a username and a password." That's always gonna exist. You've got some really basic fields. And what I tend to do is like if it's a temporary use thing, or if it's a tags things, or this is kind of extra, so it doesn't exist on every model, instead of creating a whole other table, for us we run a database-as-a-service that exists on top of AWS and Azure. And some things we need for AWS, some things we need for Azure. We could create completely separate tables for those servers, or I could just say "Oh, this extra field I need only for Azure is over here."

So the optional, extra fields is a really common case that I see quite a bit. And that's kind of that Extras category.

**Jerod Santo:** Right. I use it for settings a lot. For instance, notification settings on a user. "Here are a bunch of emails we may or may not send, and these are triggers for them to say whether or not they want those emails." And I don't really wanna have my own table for that. Some users - they'd never filled it out; it's just the defaults. And then every once in a while we're gonna add a new email that we want to send, so it's easy to just add that in your code and not have to go through a migration process to add a new column to another table. So I'll just be like "Well, here's a new email", just throw it in code, and it's just flexible that way.

**Craig Kerstiens:** Yeah, I think that's a good way to think about it. It's basically a lightweight table right there, on that object. You've got maybe some nested data, but I kind of don't wanna go two or three layers deep, because now I've gotta go and figure out and \[unintelligible 00:30:14.16\] all those dependencies and constraints, and all that stuff. So a layer or two deep as a table kind of works really well as a heuristic of if it's light enough weight.

I think the other piece is how are you gonna do analytics on it. This is a big one for NoSQL databases, where even if you get to manage your schema, you suddenly wanna ask a question and say "Hey, how many users signed up in the last week?" And now when you're traversing down a document three layers deep - you can write that SQL, but it's pretty gnarly, the joints aren't gonna be as efficient, that sort of thing. So if I'm doing lightweight filtering, like "Give me a user that has some boolean of true in my JSON", that's really easy. But if I'm doing aggregation on something, like "Give me all the users that signed up based on some data", and I'm parsing that out from JSON - now I'm doing a lot more overall on the SQL side, which is not where I wanna be.

A lot of applications start without analytics and add that on later, and this comes back to where, to me, part of the reason that Postgres won is people started building these applications and said "Oh, now I need to do analytics. Oh wait, that's hard on a NoSQL database. How do I group by, and aggregate, and filter, and all that stuff inside documents?" Not so trivial.

**Jerod Santo:** And some of those you can actually only query on indexes, right? You can't even write an ad-hoc query in certain cases. You have to have a predefined index on some NoSQL databases.

**Craig Kerstiens:** Yeah, I think they often start there and they get more advanced over time. There's not a foundational limit that they couldn't... But yeah, some definitely start there and try to get more and more... But it's not gonna be as efficient. I looked at the roots of SQL and it was really well-designed; it's relational algebra and relational calculus. And if you wanna geek out on it, that's where I say, learn those things and then you'll understand all of the power of SQL, and it blows your mind. Most people never need to go that route, but to throw away all that as a foundation - you lose a lot going the other side.

**Jerod Santo:** \[00:32:15.26\] Mm-hm. So JSON over eight years ago; JSONB a couple years later... But this is like a long-standing -- this is a thing that I now take for granted. So it's not like a shiny, new feature... It's still shiny, it just isn't new. What else about Postgres is exciting in terms of features for relational databases?

**Craig Kerstiens:** I think Postgres just moves forward each year with something new. JSON, JSONB as the shiny ones... I can go back in probably each release and there's some interesting, new thing. One big area for me is indexing. Most databases have an index type; when you do "create index", it's creating a B-tree index. If you have a CS degree, this is what you learned, the basics of a B-tree. Postgres has had that for a while, and it's also getting more exotic with those indexes.

With JSONB, when you index it, you use a GIN index (generalized inverted index), which flips it on its head and basically indexes every key and value inside that JSON document. So really interesting that I don't have to say "Index this column or this little piece", it indexes everything for me, so when I query it, it's fast. Postgres has five different index types. For a long time, I would read the docs and look, and I just kind of like got over my humility and asked the core engineers "Can you actually explain this to me in plain English? I read the docs and I don't get this..."

So you've got GIN, which is really useful when you've got multiple values inside the same column. So if you think about that, like JSON - you've got multiple keys and values, you've got arrays, that sort of thing. Postgres has an array data type; that's super-handy. If you're doing something with tagging or categories, it's wonderful. Please don't go build the whole categories table and join against it. You don't need it. Just go ahead and use the array type. So GIN - really useful on arrays, JSON, those sort of things.

You've got a GiST index (generalized search tree). The way I best describe it is when you think about -- you've got record that overlap values between rows... So if you think about full-text search; so you've got like a sentence, and maybe you wanna index on "the dog", but not "the". So you need both parts, and hey, "the" may appear in a bunch of other places, but it's not gonna be in the index. So you've got parts of the values that span across rows.

Geospatial is another one where GiST is really useful. If you've got polygons - how do you find the dot within the polygon? So it's useful for things that can kind of overlap in that sense.

You've got SP-GiST (space partition GiST). I only know it's useful for phone numbers. I keep asking the question "Give me other examples", and they're like "Um... Phone numbers. That's one."

**Jerod Santo:** Why phone numbers? What's unique about phone numbers?

**Craig Kerstiens:** It's something about how things naturally cluster together. So if you think about area code, then some three-number prefix... Like, "Hey, this clusters together, this clusters together, then this is kind of the unique part." So there's distinct, blocked groupings of values there.

**Jerod Santo:** So maybe zip codes might be another one... Because those have -- a certain area will start with the first two numbers in the zip code, and then the last three will be different, or something like that.

**Craig Kerstiens:** Yeah, I'm gonna ask one of the core developers the next time I see them.

**Jerod Santo:** Yes...! Add that to your list.

**Craig Kerstiens:** \[00:35:51.05\] That's an equal use case. But yeah, typically really large datasets. You've also got BRIN indexes (block range), which is really similar; when you've got billions and billions and billions of records, some that naturally cluster together. Those are definitely a little more specialized. If you think about it, you're using JSONB in arrays, you wanna use the GIN index. If you're using geospatial stuff or full-text search you wanna use a GiST. If you have no clue, \[unintelligible 00:36:15.12\] for a single column. But it's interesting that each one of these comes in a new year. For a little while there, I think three years in a row, we had a new index type every year in Postgres. And it just marches forward.

A lot of this has come out of a group within the community called The Russians. There's a professor from the University of Moscow that -- I'm not sure if he still teaches, or used to teach on astrophysics, and then hacks on Postgres for fun. We have different definitions of fun, but he'll show up with something like "Hey, I wrote this research paper. What do you think about this?" And for a little while there, it was kind of like "Well, this is an absolutely crazy idea. Postgres is stable and solid, and we don't do these crazy things." And he'd show up with a patch on the mailing list, and do the back and forth and debate... It's like "Here's the performance, here's the characteristics of it..." "Okay, great. You'll maintain it, you'll support it... Here it is."

He is Russian... He says we have GIN, and he's working on a type called Vodka right now. He says we need that... I hope that it's just the working name. I'm not sure if that's true or not. But yeah, it just keeps moving forward. Indexing is one of those things that as a developer, I don't go in my checklist of features when I'm evaluating a database, like "How many indexes do you have?" And yet, when I need it, it's there. Really, there's just so much in the box for Postgres. Some of that I had absolutely no experience with. PostGIS is one huge area.

**Jerod Santo:** Is that a third-party thing though, or it's maintained as its own separate -- because I have used it one time, it's been years, and I remember I had to install it as an extension, and maintain... Its upgrade cycle was different than Postgres'... And there was some pain there, where upgrading one and not upgrading the other -- I remember it being like "Oh, this is a little bit--" So it's like an extension of Postgres, or is it first-party?

**Craig Kerstiens:** Yeah, it's an extension, and I think we'll probably get to this in a little bit... Extensions are a whole fascinating area, PostGIS being one of the largest, biggest ones. I'm not a geospatial developer at all... In some sense, there's like a completely parallel community. There's a PostGIS set of committers, and a PostGIS core team. They collaborate, they're at the same conferences... But some of the things they do are completely separate from core.

I think there was a couple of rough years there; I think it was upgrading to PostGIS 2.5, or it was 2.5 to 3... It was the dark times.

**Jerod Santo:** I think you drilled it. I think those are actually the version numbers I was on.

**Craig Kerstiens:** Yeah. I think I had words with some of the PostGIS committers then, and they understand the world of how many developers are using it now and what the upgrade process is... I don't think that we're ever gonna see that again, hopefully, knock on wood.

**Jerod Santo:** It was one of those situations where I had enough competence and confidence in Postgres maintenance and in the administration that it didn't worry me... But when I pulled the PostGIS stuff in - it worked great when I was using it, but maintaining it over time, because I wasn't actively working and doing that, it was just like this thing that I also had to do. When I upgraded Postgres, I was running into issues, and I wouldn't know how to solve them, because it was like this third leg kind of a thing.

**Craig Kerstiens:** It was definitely a rough point, and I think it got us a range of indexes. Some things are core in Postgres, some things are extensions... You've got really lightweight extensions that are a little safer. PostGIS is a huge one. It's a whole geospatial database. It passes up functionality that Oracle geospatial doesn't have. An open source thing is better than Oracle at something, and that's geospatial, for sure. That's not disputed at all. It has new data types, new operators, and functions, and all sorts of things in there. So it's definitely a massive one, that kind of has its own path.

\[00:40:14.14\] But I think if you look to these other things that are more in core, you've got like full text search. I think it was a couple years ago I saw someone write blog post that was like a deep dive on full text search... And the title was something like "Postgres full text search is good enough." Like, "It's fine, I installed it, it works", and it was a wonderful post. People were like "Yeah, why do I need Elastic, or whatever else, when I can just try this and see if it works?" And you can kind of replace full text search with almost anything in Postgres. Postgres geospatial is good enough.

One of my favorite small ones that you shouldn't use all the time, but at least in Notify, is pub/sub directly inside of Postgres. If you wanna use Postgres for a queue, you can do that.

**Jerod Santo:** Yeah, I've seen that done and it's really cool, because you don't expand your maintenance surface area at all. I know we're in the world of serverless and all these things, so nobody has to maintain servers and stuff, but if you have to have a Redis instance somewhere in your stack, you're either paying somebody to maintain it, or you've built that into your infrastructure... And a lot of times when people go to queue background jobs, they have to pull in some other thing, whether it's Redis, or... Do people use memcached for that? Probably not. But there are queue things... Celery? I don't know. Beanstalk? Just words are coming out of my mind. But anyways... You can do it right in Postgres; you're already backing that up, it's there with everything else, there's not another cog in your wheel... That's pretty cool, and I've seen people use that to do background jobs.

**Craig Kerstiens:** Yeah, and like you say, it's one more thing I don't have to deploy and manage. That's as strong as anything. Even if this thing is 10%, 20%, even if it's 2x better, Postgres is just this kind of stable workhorse that gets a new feature every so often, that "Oh, I can do that. And I can do that. And I can do that." Postgres 13 just came out a few weeks back, and it kind of epitomizes Postgres to me. All releases - I think there's not a shiny, new feature; it's kind of like an upgrade, and it's just better. You get space savings from B-tree indexes. If you were using partitioning before, it's just better now. Now you can have better constraints between your partition tables, and joins are more efficient.

More and more, I think Postgres itself - we've kind of reached a point where it's got... I'm more of a Python guy than I am a Ruby guy, and I really loved the Django model for a long time, batteries included. It was kind of everything you needed to run a web app. Like, "Cool. Here's authentication, here's caching", here's all these things that I normally have to go grab off a shelf when I'm building a web app... And Postgres is kind of that for databases. It's like batteries included. Here's all the things - here's your data types, here's your extra indexes, here's your pub/sub, here's your geospatial, here's your queue functionality, here is all that... And it's like "Cool, we've checked all those boxes. Now let's just keep making it stable, a little new feature here and there, more polished, easier to use", and the big one's always faster.

**Break:** \[00:43:27.24\]

**Craig Kerstiens:** As I kind of take a step back, I think more and more it's gonna happen in extensions. PostGIS is a big one. There's roughly 250 extensions that exist, one of the kind of extension networks. Extensions are unique; they're low-level hooks deep into Postgres. I kind of hate the term extensions, because you think every database and tool and library has extensions. They're like extensions in air quotes. It's like a plugin layer that you can just throw something on top. But this is like deep, low-level C hooks. You can write an extension in SQL, you can write an extension in C. You can write an extension in other languages, and you can completely change the underlying behavior of what Postgres can do. You can have new data types, you can have new functions and access methods, and it can move at a separate pace from core. Core can still have that same mantra of like "I'm not gonna lose data. I'm gonna be safe, I'm gonna be reliable." They can maintain that C codebase at a really high quality, and now we've got this world where something can happen in an extension, improve over time, and the core community can suddenly say "Well, this is really solid. Everyone needs this. Let's put it in core."

**Jerod Santo:** Pull it in, yeah.

**Craig Kerstiens:** So to me, I start to look at the landscape of Postgres and what's the future - extensions are absolutely huge. And what you can do with them is kind of unbelievable.

**Jerod Santo:** Can you give some more examples of extensions in addition to PostGIS? I know there was one HStore, which I remember using, but what are some other things that people have built in the community that you can pull in and use, that extend (for a lack of a better term) Postgres?

**Craig Kerstiens:** Yeah, it makes sense, and I think the term - it kills me, because it's like "Hey, what extends it? But it does it in a unique way, that's the part that hangs me up.

**Jerod Santo:** Right, right.

**Craig Kerstiens:** There's a bunch. One of my previous employers, Citus Data, turned Postgres into a sharded, distributed, horizontally-scalable database. So when you were at 100 terabytes of data - and hey, that doesn't fit easily on a single node - how do you get performance? Under the cover everything was sharded. It still looked like a single Node database, but to your application, you didn't have to think about sharding. You don't have to go hire the experts, like Instagram did. You can just work with it in your Rails or Node app, and just pretend it's a single Node database. PostGIS is obviously a big one.

There's really simple ones... One of my colleagues at Crunchy Data, he's on the core for PostGIS, but he wrote one that's like just HttpGet, basically. Like, I wanna go and crawl this website. There's pg\_cron. So if you think about this, you've got pg\_cron, which is crawling your database, you can go and then curl something, and then you can go and parse that website. You can do screen scraping automatically inside your database, without ever having to run a separate scheduler, or web process. You've got different procedural languages, you've got PLV8, which is V8 directly inside Postgres. So that's an extension that you can run JavaScript inside your database.

**Jerod Santo:** Okay, it's getting crazy... So how would you trigger that then? Let's go back to the cron one. Do you use a SELECT, or something? How do you actually interact with these things? Is it using the query language, standard SQL query language, or extensions with that?

**Craig Kerstiens:** Yeah, so the \[unintelligible 00:47:48.05\] Depending on what it does, it's gonna enable something new. HStore is a great one. HStore is a data type. So you run create extension hstore, and now you have this new data type. So now when you're creating tables, you use the HStore data type. And HStore is a key-value store directly in Postgres. It's kind of the precursor to JSON.

**Jerod Santo:** \[00:48:12.16\] I think that's when I used it, was back before -- either JSON didn't exist, or I didn't know it was in there... \[unintelligible 00:48:14.20\] It wasn't as nice, because there were all these little edge cases with it, but...

**Craig Kerstiens:** Yup. And I think it proves the point of like "Hey, a bunch of people use HStore. Maybe we need something more official in JSON." JSON went directly into core because of how the community saw that being used. MADlib is one that's out of UC Berkeley. It's a whole analytics package. People talk about data science, like "Cool, I'm gonna go and do something in Spark." I'm kind of gonna pick up MADlib, because it has supervised learning, unsupervised learning. You wanna look at \[unintelligible 00:48:49.06\] run a regression - it's right there. And it's been maintained for more than ten years now. It's really old, and we've just had the ability to do all this data science directly in Postgres for a long time now.

Now, when you enable it, you get whole new functions, and you basically execute these functions and pass in the right things and you get something back... Something like a PLV8, which I'm becoming a bigger and bigger fan of PL/Python. You mentioned "Hey, things are going crazy" when we've got JavaScript in our database...

**Jerod Santo:** Yeah, right...?

**Craig Kerstiens:** For a long time, we had this idea of like "No, never put application logic in your database. The database is this dumb store..."

**Jerod Santo:** ...to store my data, put it in...

**Craig Kerstiens:** \[unintelligible 00:49:31.10\] and I'm like "No, it's useful. It has all the data and you can do interesting things." So PL/Python, a couple of weeks ago, before we launched our product, I was like "What can I do with this?" And I just started poking, and I installed SciPy, NumPy and Pandas, and I started live-tweeting. I probably shouldn't have, because it could have gone horribly wrong... Like, "I'm gonna see what I can do", and then two hours later there's like crickets. But no, I actually was able to in about 20 lines of Python, which I basically wrote a function that executes Python inside my Postgres database...

**Jerod Santo:** Okay...

**Craig Kerstiens:** ...imports Pandas, I pass in some records to it, and I pass in a history of orders and what's in a shopping cart, and it's basically a recommendation engine. "Oh, you should recommend these products to this person." 20 lines of Python, directly in my database. I didn't have to go and spin up a Kafka queue to get the data out of Postgres into Spark, to run some model, to feed back into Redis, to then show this to the user; literally, 20 lines of Python directly in my database, to have a recommendation engine for products.

I think it breaks the mold of what we've been thinking for the past 5 or 10 years... But if I look at it from a practical standpoint, this gospel of "Never put logic into your database" - well, large enterprises have been doing this for years and years and years. If you look at things like Oracle and SAP application, they're almost nothing but huge procedural code. And with Postgres, now that we can do it in things like JavaScript with PLV8 and Python, it can be more native to an app developer.

So I'm kind of weird, I kind of enjoy writing SQL... I ask a lot of people "Who enjoys writing SQL?" and if there's 100 people, there's like three hands... But I then ask the question to people "Do you enjoy reading other people's SQL?" and there's never a hand that goes up.

**Jerod Santo:** Yeah. Nope.

**Craig Kerstiens:** It's not a pretty language. When someone else writes it, it's probably not well-formatted... It gets the job done, but... If I can write Python and do the same thing, or JavaScript, how do you feel about that?

**Jerod Santo:** Yeah, I think that's more legible to more people. How do you then maintain that, and where does that live in a software system?

**Craig Kerstiens:** Basically, it's like a CREATE FUNCTION call. So you run a CREATE FUNCTION here, you define your function directly, then you can execute that within the database. So I've defined my function, and then I can just do "select get recommendations" from my recommendation engine.

So a lot of extensions come and basically they packaged up all of these functions for you, in that C format. MADlib does all this, so now all you've gotta do is go through and say "What's the function? What's my inputs, and where do I get out?" But if you wanna write your own, you absolutely can. If you can go down that deep path and create an extension, or writing your own functions and deploying it just like you would other schema stuff.

**Jerod Santo:** \[00:52:22.09\] Yeah. Let's just get real practical with this Python example. Maybe if you have the code or you have the tweets or something, you can provide links to somewhere where people can go and look at what exactly you did, because it's fascinating.

**Craig Kerstiens:** Yeah.

**Jerod Santo:** Are you just storing that in its own Python file? Actually, you're writing the Python inside of a function... So is this like an SQL file that you're piping into the system via PSQL? Is that how you get it in there?

**Craig Kerstiens:** Yeah, I'm just connecting via PSQL, and I'm just -- so a few PSQL tips... I'm a CLI guy, and I know a lot of developer are... PSQL is really great and powerful. If you're in there for the first time and you're just kind of typing, a big tip is if you set your editor environment variable, just like the \[unintelligible 00:53:05.17\] and you do \\e, that will open up your default editor. So if you wanna edit your queries in Vim, or Tmux, or Emacs, or whatever, just set that and then do \\e, and now you can work as native as possible. It can be Sublime Text even.

**Jerod Santo:** TIL. I have been using PSQL for years and I did not know that until just now. You just taught me something.

**Craig Kerstiens:** There's a whole bunch of things. \\timing will automatically show how long it took to run a time query. I'll give a link as well to like "Here's how to customize your psql editor." You probably have like a Bash profile set up, or a bashrc - you can set up a psqlrc that will customize all this for you.

A friend just said his null character value - so when you have nulls in your database - he set it to the poop emoji, so that you know it's a null. It's not an empty string, it's actually a null in your database.

**Jerod Santo:** Right. I have picked up a few things over the years... That \\e I have never picked up. I'm reading my psqlrc right now, and I have the \\timing on, I have \\pset null, but I just have the word "null", I didn't replace that with poop emoji for sure. And a couple other things... Then unsets quiet - I don't know what it's doing. Oh, it starts with quiet, does some stuff, unsets quiet. I think that's to set up the prompt.

So yeah, definitely link that up, because we love to trick out our environments; and if you can be more productive inside your PSQL, then why not, right?

**Craig Kerstiens:** Yeah. \[unintelligible 00:54:37.03\] with Vim right now, but for the longest time it was actually Sublime Text, which people are like "Wait, how are you doing that?" and it's executing it inside PSQL.

**Jerod Santo:** So it pops open your Sublime Text in a new window, and then when you say that, somehow it pipes it back into your command line?

**Craig Kerstiens:** And it's executing wahtever you say. In Vim, I can quit and not save, or I can write and quite. And if I write and quit, it's gonna execute that.

**Jerod Santo:** It executes. That's cool.

**Craig Kerstiens:** So that's what I was doing with the Python; I was basically building it up a few lines at a time, and it was a create or replace function. I've got my inputs, I started with just a couple of inputs, and saying "Okay, now I've gotta import Pandas." Did that error for me, it did that work? Now I'm gonna see "Can I parse this into a data frame?" Nope, it didn't parse it right. Okay, how do i get from a set of arrays in Postgres, and transcribe that into what Python wants for a data frame?

So it was definitely a couple hours of debugging, but probably not much longer than -- I haven't written anything in Pandas in probably a year, so probably no longer than it would take me directly in Pandas. And I'm just kind of creating that function, and then I'm calling that SELECT as soon as I create it, to kind of iterate and test. I'm saying SELECT, get my recommendations... "Oh, error" or "Did it execute and do something?"

**Jerod Santo:** \[00:55:56.23\] Pretty cool stuff, man. Pretty cool stuff. So that's presently available in Postgres. What's the future look like then? Is it more like this coming, or what do you think is gonna happen next?

**Craig Kerstiens:** Yeah, I fully expect a lot of this. You're gonna see new extensions doing all sorts of things. You've got time series ones, like pg\_partman, you've got things like Citus \[unintelligible 00:56:18.24\] you've got PostGIS... There's ones that show up that I'm like "I had no idea you could or would want to do that." Your reaction of like "This is crazy" when we've got JavaScript in our database is spot on!

**Jerod Santo:** Thank you. I thought so...

**Craig Kerstiens:** As you pause and think about it, why not? The art of the crazy is really fun as developers, right?

**Jerod Santo:** Yeah.

**Craig Kerstiens:** We're gonna see a lot more of this. ZomboDB is a fascinating one... It will keep your Postgres data in sync in Elasticsearch, and you can maintain Elasticsearch indexes, and query them from directly within Postgres.

**Jerod Santo:** Say that again for us slower folks, like myself?

**Craig Kerstiens:** So if you wanna use Elasticsearch for your full-text search - normally, you've gotta pipe all that data over somehow. So what this is gonna do is as you write a record and it's a transactionally-consistent record, it's gonna sync it over to Elasticsearch and maintain that index. And now, when you query this, you could go to Elastic and query it, but you've already got your application connected to Postgres... Why not just use that index? So you can basically have a little reference to saying "Use this Elasticsearch index", it's automatically gonna call out, use Elastic for full text search, and get that back in your standard SQL Postgres query.

**Jerod Santo:** I see. So it's like a proxy for Elastic without having to worry about it. You feel liek you're just using Postgres, but it's actually proxying to Elasticsearch back there.

**Craig Kerstiens:** Exactly.

**Jerod Santo:** That's cool.

**Craig Kerstiens:** And I'm like "Who thought you would need that?" It's like, you're still running Elastic, but now I don't have to worry about transactional consistency, and keeping things in sync, and how do I query this...

**Jerod Santo:** There's nothing new to learn in that way, yeah.

**Craig Kerstiens:** So I think we're gonna see a lot of that. I think we're gonna see a lot of that on extensions just continuing to advance. Within Postgres itself, one huge area is gonna be pluggable storage. So a couple years ago Postgres got this committed into core. It's still early on, but basically, you can have a different storage engine. This is gonna unlock a lot in coming years. I think it's -- will Postgres core ship with multiple storage engines? I don't know. That's a good question. I think probably at some point you'll have a choice. And there's a few in development. I don't think we'll see hundreds and hundreds like we do extensions, because it's a higher bar to write; it's deep C code, and understanding how the Postgres storage engine works, and how you change it and optimize it...

But one of the biggest pains with Postgres that people complain about is VACUUM. Postgres under the covers, what it is - it's a giant append-only log. You do an update, and what happens is it'll then go and update those bytes on disk; it basically flags that record as sturdy and then writes out a whole new record. So basically it's like a logical delete, where if you have a "deleted at" column that's hiding everything - it's kind of like that.

Now, what happens is when the system is at low load, VACUUM comes in and cleans up all that. It says "Okay, let's free up some space. Now let's free up some space." So people have this love/hate relationship with VACUUM, because they're like "Oh man, VACUUM's running. My system is slower." Well, it's actually going and deleting things that you didn't wanna be there. So it's a good thing, but there is this love/hate relationship with it.

But there is a new backend type that aims to completely change that. It changes how the heap works... All sorts of things under the cover. zheap is the backend that's under active development. It shows really promising improvements around how Postgres handles vacuum and you don't have to deal with it quite as much. Basically, it's about space savings, and performance on all that front, which is really interesting.

\[01:00:03.22\]So the idea that we didn't have to go and do a complete rewrite of Postgres and make this change for everyone - for some people this was really beneficial; other people - they may not need it. Zedstore is another one, which is a columnar. So that's in active development right now... Columnar data stores are -- they flip things on their head; instead of storing rows, they store things by columns.

**Jerod Santo:** Okay.

**Craig Kerstiens:** What that means is things can press down really well. So if you've got things like time series data, you could imagine like "Oh, I store something for an hour. I don't have to store a record I just -- at record 101 I've got 12 o'clock, and 12 o'clock goes all the way to record 2000. So I don't have to write 1900 records, I just say "Write here start, write here stop." So a columnar is really useful in time series. It compresses data down really tightly, from like a 3x to 10x. So you're storing less on disk, you'd have to scan less... Now, all these things are trade-offs. A columnar isn't perfect for every application.

**Jerod Santo:** Yeah, that sounds like a much different way of going about storage. It seems like it would be backwards for a lot of what Postgres normally is used to do. You wouldn't be like "Hey, I've got my Postgres database. Now I'm just gonna swap out some backends and see which one I like." I don't think the columnar one for your normal use case is gonna be advantageous, right?

**Craig Kerstiens:** Right. Well, I think "normal" is a tough question, because that's like the world you come from. But Postgres is at the core of a lot of data warehousing tools. Because Postgres is licensed, people take Postgres and modify the code, and change it, and make a columnar. If you look at some things like Greenplum, or...

**Jerod Santo:** Well, that's why I'd call it "abnormal" - because they're modifying Postgres. They're changing the way it works, right? That's abnormal.

**Craig Kerstiens:** Yeah. I think for my traditional Rails or Node or web application, the transactional workload - yes. Now we're completely changing what Postgres -- the bread and butter of it. But there's no reason it can't do this. And it can work this other way, but it's a really different set of trade-offs. And this isn't for everyone. I think it's gonna be interesting how it evolves. I don't know if the core community will maintain a bunch of these, or if it's some side companies, or whole new companies that evolve out of this... But it really just expands what Postgres can do.

Pluggable storage to me is one of those next big frontiers. It's gonna be an exciting area for 5 or 10 years. You can see remnants of where people have taken Postgres -- \[unintelligible 01:02:28.07\] is a great example. That was Postgres like 10 or 15 years ago. Then it got modified, and modified, and modified... It was a company called \[unintelligible 01:02:36.19\] that got kind of sort of bought by Amazon... And you see hints of it, but I think it was like Postgres 8.1, which is north of ten years old, so it doesn't have things like JSON.

\[01:02:49.02\] So I think that extensions world is really interesting, and pluggable storage, over the next 5-10 years. We're gonna see a lot there, because Postgres can keep moving, be safe and stable, reliable, not lose my data. As a database, that's the most important thing, but it's worth stating. And then we get all of these - like you say, these kind of crazy things, that "Well, yeah, I actually do want this." As my stack evolves and I wanna do more... I do wanna write a recommendation engine inside my Postgres database, and not have to have this ETL job that feeds into a data lake, that feeds into Redis, that I'm maintaining five things. I just want it to do this one thing.

So I think extensions, pluggable storage to me are a lot of excitement... Though - a ton of credit to just core Postgres. Postgres is just gonna keep new indexes, new polish... There's maybe some really new, awesome, sexy feature like JSONB that I'm forgetting, but...

**Jerod Santo:** \[laughs\] Yeah.

**Craig Kerstiens:** But I think we've got a pretty good base. Now it's, you know, keep working on performance, ease of use, those sort of things in the core... And a ton of credit to the people, the 40 or so committers that just keep plugging away - not a lot of them in the limelight - just making it available for millions and millions of developers out there.

**Jerod Santo:** Well, Craig, I can tell you're very excited about this... I wanna ask you one last question, which is - you've been doing all this work on education and evangelism (for a lack of a better word), getting the word out there about all the cool stuff Postgres is able to do, and will be able to do in the future. What's the best place to get started for people who are brand new to the world of interacting with a database? Surely, you have resources, maybe your website... Where do people go to learn Postgres and keep up with the new features coming out?

**Craig Kerstiens:** Yeah, there's a few places... One shameless plug - I curate Postgres Weekly. It's not a DBA newsletter. It's really targeted to app developers. It's like, "Here's the how-to's, here's this tutorial, here's this shiny new feature." It will talk about extensions and pluggable storage, but it's really targeted at app developers that wanna learn more. It's once a week; you've got 5 to 15 articles in there. It's not "Here's 100 things to read." So it's pretty easy to parse.

I blog about things a good bit. There's a number of companies out there that blog a good bit, as well. There's a Planet Postgres - kind of a syndication of a bunch of people that blog. It's a great resource, if you wanna follow every article that comes out... Those are my two top recommendations. If you really wanna learn about the internals, go subscribe to the pgSQL mailing list and read that. If you wanna get more of the basics, the pgSQL users mailing list. If you wanna learn like "Hey, how do I debug a slow query?", there's a bunch of great resources there.

There's a Postgres team community Slack. There's thousands of people there just hanging out. There's still an active PostgreSQL IRC, there's some really loyal people in there that - hey, if you've got trouble with a query, they'll come in and help there. Those are kind of my off-hand lists. There's a lot of blogs, but a lot of those we try to have in Postgres Weekly, and that sort of thing.

So those are my defaults, and there's probably a few other links that I can come up with after, that I can make sure to send over and we can get at it as well.

**Jerod Santo:** Absolutely. Listeners, all of the links to all the things - including things maybe that he didn't even mention right now, but he thought of later - will be in the show notes. You know how to access those.

Craig, this has been a lot of fun. You got me excited once again about Postgres, and not even just the future, but the present of Postgres. I wanna go out there and play with some of these extensions. Thanks so much for coming on the Changelog, and thanks so much for keeping us all abreast of what's going on with Postgres over the years. We really appreciate it.

**Craig Kerstiens:** Yeah, thanks so much for having me.
