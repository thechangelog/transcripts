**Jerod Santo:** Hello, JS Party people! I am Jerod, your internet friend, and we have a great show for you today. I am joined by a special guest, Rasmus Porsager. Rasmus, welcome to JS Party!

**Rasmus Porsager:** Thanks a lot. Glad to be here.

**Jerod Santo:** Happy to have you. We're gonna talk long and deep about Postgres, about relational databases, about Postgres.js, about Node, about Deno, about SQL queries... All sorts of things. But before we do that, it's time for our regular segment, Holla. Holla, of course, is a time that we take to holla at upcoming community events, meetup groups, conferences, whatever needs a holla. And today, I want to mention two back-to-back conferences happening in Amsterdam in June, JS Nation and React Summit.

JS Nation is a two-day, two-track event, it focuses exclusively on JavaScript dev, it's in Amsterdam, like I said, on June 16th is the in-person event and June 20th is online. React Summit is the next day, in the exact same location. Same people throwing it, obviously focused on React... It's the biggest React conference worldwide, June 17th in Amsterdam, and then June 21st remote. So these are hybrid events, people are getting back together, and JS Party plans on being a part of both of those conferences. We are still in the works, in the planning stages about exactly how we're gonna be involved, but at the moment we're planning to send Nick Nisi there.

So if you are in the Amsterdam area and can hit up those two confs, come see us there. If you cannot and you still wanna be involved - of course, they are dual, IRL plus hybrid. Awesome stuff. Shout-out to JS Nation and React Summit, happening on June 16th and 17th. Links in the show notes to check out what those conferences are all about. This has been Holla.

\[04:18\] Alright, Rasmus, back to you. So Postgres... You have this library, quite popular, quite fast; it looks quite good. I've been scouring the readme, checking it all out. I'm a Postgres junkie from a long time back, so this speaks to me... And I wanted to bring you on to talk about it. It's hit v3, you've been working on it for a while. We're gonna get into the library itself, how you can use it, why you might wanna use it, how it's built etc. But first, let's talk about Postgres as a thing, or relational databases as a thing. Because there's lots of options when you're building the application - how and why are you gonna store your data... Relational databases are as old as time at this point. They were cool, they weren't cool, now they're kind of cool again... Help the folks decide, or maybe give us your perspective on why pick a relational database versus a document database like Mongo, or a key-value store, or a Firebase... There's lots of options for JS apps. What's up with relational databases? Why do you like them?

**Rasmus Porsager:** Well, I've actually started out on the other side. When I began programming, MongoDB was just starting to become a thing. There was so many things I didn't know about. I had heard about SQL; I thought it was this ancient thing that wasn't a good idea to use anymore. I had some friends, I saw them write some queries, and it was like "Yeah... No. This other thing that has this real quick sample, I can just take it, and it works, and I don't need to set up much stuff. It's much easier. I'll just go along with that."

So for a long time, I was using Mongo also in Node, using the Mongoose library, and at some point I realized that in Mongoose you create schemas over Mongo. So the entire idea behind Mongo being schemaless and document-based - I wasn't using it at all for anything. I was making schemas just like you would make tables in Postgres. So after building one system for our company in it, and having to leave that at some point, and leave it to a new crew, I came back to it one year later, and it was like my idea of having a schema, having everything nicely in shape set up was just gone, suddenly. I suppose that could happen with a more strict setup as well, but there was literally an HTTP endpoint where you could send JSON that would be parsed and sent directly on to MongoDB, and then get the results from there, around all the beautiful schemas and data structures I had made.

**Jerod Santo:** Ha!

**Rasmus Porsager:** And that's around the same time -- I think it was in 2016 that Postgres... I don't know, I felt like it was gaining some popularity amongst this hyped kind of thing.

**Jerod Santo:** Sure.

**Rasmus Porsager:** I was looking into it, and it was just instantly, when I just took away the code around it, when looking at Node examples and stuff, and just looking at SQL and creating tables; I was just like "Why haven't I given this a shot before?" So then I just started out trying to figure out what it was about, and giving it a proper chance. I haven't looked back since.

**Jerod Santo:** That's an interesting perspective. I have been around quite a bit longer than yourself, because like I said, it was cool, it became not cool... There was a NoSQL hype cycle that happened around Mongo and other...

**Rasmus Porsager:** Guilty.

**Jerod Santo:** These are venture-backed, yet open source(ish) companies that have a very compelling product. There's a lot to like about MongoDB and the like, but the sensation that you had when you came into it -- like, we don't use the old crufty thing anymore; this is what people use today... It's really just kind of a cargo cult mentality, but when you don't know any better, you're just like "Okay, this is what we use now."

\[08:21\] I think for a long time people sidelined MySQL, PostgreSQL, SQLite... Or as it's actually called. Or maybe I did say it right, SQLite. I don't know; I always say it wrong. SQLite, there you go. That's the correct way of saying it.

**Rasmus Porsager:** Right.

**Jerod Santo:** Those got sidelined because of the overwhelming marketing push, and a lot of interesting features of these new databases. But along the way, Postgres has just been getting better and better and better, and it's been around for so long, it's rock-solid, that I think eventually it was like "Hold on a second, let's not throw the baby out with the bathwater. Just because these other systems are interesting and may fit our use case doesn't mean these other ones aren't anymore."

What's interesting about your project - we'll get into the origin of your project - is it's very SQL-oriented, from what I read about it. You're writing pretty much SQL, like you would if you were connecting to psql and writing SQL directly to Postgres; now, you provide utilities and ways of building that up and all sorts of things, but you're very much embracing SQL now. So did you learn to love the query language, or did you -- it doesn't seem like you're trying to hide it with this library.

**Rasmus Porsager:** No, no. But I certainly did, and I think it was just my programming journey has been using some things to build some various stuff, and then figuring out where it didn't work out, and then just trying to take away all the parts that I didn't need. Because usually, when you start out with something that needs to work, you start out with a library that has a lot of things to get you 80% of the way, and then you bump into all the bad things.

So I actually started out just reading the PostgreSQL documentation, because I thought that must be the one true source of this thing. And that was just really hard in the beginning, until I understood -- at some point, their structure, their way of setting things up just clicked for me, and it was really nice just going through it, trying to understand how everything worked. And I had a few projects on the side where I could try these things out.

**Jerod Santo:** So what's interesting to me with your time period - so you're talking 2016 was the time range that you started picking up Postgres. Is that what you said?

**Rasmus Porsager:** Yeah, that's when I became interested in it. And then I think beginning 2017 I started actually --

**Jerod Santo:** Building in it.

**Rasmus Porsager:** ...trying to do stuff with it, yeah.

**Jerod Santo:** Node.js is old at this point. 2009, right?

**Rasmus Porsager:** Yeah.

**Jerod Santo:** So the thing that happened when Node.js came out and started picking up steam - there were no libraries. There were no database adaptors, connection poolers... There was all this stuff -- in fact, Ryan Dahl's original call was like "Hey, fertile ground. Help build the ecosystem around Node." And then people did that. I'm surprised - and maybe there was, and they just didn't fit your use case, or you wanted to build it... I'm surprised that come 2016-2017 this kind of foundational Postgres library didn't exist; or there were ones and maybe you didn't like them... Or what was the situation with existing Postgres libraries when you started building this?

**Rasmus Porsager:** My first introduction to a Postgres library in Node was pg-promise, which is built on top of the pg library. I didn't know that at the beginning, but pg-promise just looked fairly good. I had a good friend introduce me to it and showing off some of his projects using it... So that seemed like the natural thing to start out with. And it had the extra things you would build on top of pg to use it. Anyhow... But it didn't take long until I kind of felt that actually using it, writing code with it could be better.

\[12:19\] Tagged template literals had just become a thing... So I made a wrapper for that library, that I just copied to all of my projects. It wasn't even a module or anything. It was just in the database initialization file; I would just put this wrapper, so I could write everything with tagged template literals.

Some other projects I was working on did a lot of things with tagged template literals, and I think it was just a weekend where I was reading the Postgres documentation and I bumped into the wire protocol, and it seemed so simple somehow. I thought there was this crazy, complex system behind, talking to the database, but it seemed straightforward to just at least make a proof of concept. So I made something that could do queries, return some rows over a weekend... I couldn't stop from there. \[laughs\] "I've gotta see where this takes me."

**Jerod Santo:** So for the uninitiated, when you say wire protocol - can you describe what you mean by that?

**Rasmus Porsager:** Yeah, you can talk to a Postgres database in two ways, or one way. It's the wire protocol, which is their definition of how to run queries, wait for results, and stuff like that, and you can do that over either a Unix socket or TCP. It's a binary protocol, but most of the things are text. You can use binary for the actual values and data transfer too, which is something I'm gonna look into for probably version four of the Postgres.js. But the core of the protocol is you have first an integer just telling you how many columns are you gonna get now, or what is the next length you're gonna read. And then you just take it step by step.

There was some low-hanging fruit for making that way better when you pass the incoming bytes and how to handle that compared to what PG did. And the two biggest upsides or benefits you could get would be implementing pipelining, which is where you just send as many queries as you like, and then they'll come back in the same order as you send them. That's gonna improve performance quite a lot, because you don't have to wait for the network to have a response from your current query before you send the next.

And then there's prepared statements. When you have tagged template literals, it's almost a prepared statement in and of itself. So you can make the userland code create a prepared statement implicitly, instead of -- I haven't seen other libraries do it, but I think all other libraries require you to come up with a name for your prepared statement yourself. And this just gives a really, really big performance boost compared to not using pipelining and prepared statements.

**Jerod Santo:** Okay, so you may have answered one of my questions, and Brett also in the JS Party chat says "How did you make it so fast?" And of course, one of the flagship features of Postgres.js is it's the fastest Node and Deno Postgres client. You have a benchmark there which shows how it compares. And so is it safe to say that that's how, the pipelining feature and the prepared statements - are those the two things that make it faster over the wire, or is it like the raw PG, the old PG, not with the promises stuff around it, but like, is that about the same speed, but you're not having the wrapper?

**Rasmus Porsager:** Sorry, I'm not sure how it compares to the old PG...?

**Jerod Santo:** So let me just ask this - is it also faster than PG?

**Rasmus Porsager:** Yeah. It's around 2, 2.5x faster in this very simple benchmark that I did. But I really wanted to do a thorough benchmark and actually test with real network latency, instead of locally... Because that benchmark is locally, and I'm not doing any actual hard queries. I just wanted to test the raw overhead of the library itself. A lot of that is also more efficient parsing and handling of buffers.

**Jerod Santo:** \[16:28\] What would be cool would be to get a benchmark from an application like TodoMVC, or that real-world app which surely has a Node implementation, which maybe doesn't use Postgres; you have to find one that actually uses Postgres. But if you can find something that's already out there and already using PG in a more real-world situation, not a synthetic benchmark, and then have a set of operations that you perform, through the UI even -- well, that would not isolate quite enough. Maybe through a command line shell that's using the PG library you might be able to get not so simple, more real-world benchmarks.

**Rasmus Porsager:** Yeah, I think it would be great to have some benchmark where there's a lot of concurrency, because of course, it has do with how you're handling your connection pool...

**Jerod Santo:** For sure.

**Rasmus Porsager:** ...to saturate the server as much as possible.

**Jerod Santo:** Right. I think at the end of the day most people writing Node or Deno apps using Postgres are probably not gonna bottleneck too hard right away. Maybe just by tweaking their connection pools they can get a little bit better performance and stuff, but probably the facilities that you provide - it seems like... You know, you had pg-promise... Node has kind of had these eras; it was like the callback era, the promise era, and now we're very much in like the asyc/await era. Of course, promises are still out there. But I noticed this library is all async/await. Is it all the way down?

**Rasmus Porsager:** Yeah.

**Jerod Santo:** So that was like a big motivation probably to do that as well, wasn't it?

**Rasmus Porsager:** That's actually a good question. I'm not even sure I fully embraced async/await when I started out. I had embraced promises, but I was using .then( ) and .catch( ). So yeah, I think actually it was first with version 3 that I took that to completion.

**Jerod Santo:** Okay.

**Rasmus Porsager:** But I have one real-world example. At my current job we do digital signage and background music, so we have a lot of hardware units throughout the world... And there's around 6,000 online, which before I did Postgres was running on an 8-core, 8-gigabyte Vserver, and now it's running on a 2-core, 2-gigabyte Vserver. And it's just -- it's idling at 15%, when they reconnect all of them at the same time...

**Jerod Santo:** It's bored?

**Rasmus Porsager:** Yeah. And that was in combination with a switch from Node's normal, or the Node WebSocket module to micro WebSockets. So I actually should have benchmarked back then, when I had the two codebases next to each other... But yeah, that's a while ago now.

**Jerod Santo:** Hindsight is 20/20.

**Rasmus Porsager:** Yeah.

**Break:** \[19:12\]

**Jerod Santo:** So it sounds like the nut of it was tagged template functions. You wanted to use tagged template functions... Or did you wanna use tagged templates in general, and now you're using tagged template functions?

**Rasmus Porsager:** No, no, tagged template functions. In general, they're just good for a multi-line string set. When you're able to use them as a function and interpolate the values, then it becomes really interesting. And there's this -- to me it was a very big discovery when I found out that... The way a tagged template literal function is called is the first part is an array with each part of the strings around your values or dynamic values, and all the rest of the arguments are the actual values. And this first array is static, which means that you get a static reference to the actual code that you wrote.

If you have a function that inside it is calling a tagged template literal function, this array is by its nature static, but it's also static at runtime. So in that way you can do some really cool caching features, because you know it's not gonna change.

**Jerod Santo:** That's pretty cool. So describe how it's working under the scenes. Let me just describe how it works as an end user. So I write some SQL, I write a tagged template, I guess, string... It looks to me like an interpolated string. And I put select star from users where ID equals, and then I put in my dollar sign... Or is it curly brace? I'm not looking at code right now... But I put in my basic -- there's my little variable, that can change on whatever ID I pass into that variable at the time that it's called. And I pass that off to Postgres JS and say "Execute this query." What does it do from there? How does it work?

**Rasmus Porsager:** The first thing that it does is simply just build up a query object. This is an object that inherits from a promise, and it's actually a lazy promise... Which means that it won't do anything until you call .then( ), .catch( ) or .finally( ). And when you use the await keyword, it'll do that implicitly. The reason for that is because I wanted to be able to build dynamic queries, but as close to SQL as possible. So you can actually nest these tagged template calls inside your values to - let's say you wanna make it dynamic to choose if you wanna sort by ascending or descending order. Then you need to be sure that you're not simply just injecting a string; because it's a keyword, and you can't send keywords as parameters to Postgres. Postgres doesn't know how to handle that. But you can do that in a safe way with tagged templated rules, which is pretty cool, because you don't have to worry at all about SQL injection. The only way you can do that in Postgres.js is using a function called `.unsave` so it's pretty clear that you're doing stuff where you need to be careful.

**Jerod Santo:** \[23:59\] So again, for the uninitiated, SQL injection is when you open up your queries - imagine you're building up a query string, and then you have an end user who is specifying for example sorting. So maybe you have a web UI where they can toggle a Sort By This, ascending or descending; invert the sort... You're allowing them to specify the order of that sort, which is going eventually into your database query. So SQL injection is when you do that in certain ways that are not safe, they can be nefarious and write arbitrary SQL at the end of that, maybe by instead of sending ASC or DSC, which is what you're expecting the UI to send, they send semicolon drop all tables or whatever they send.

So this is a very common attack against SQL-backed application, that when you're building up these queries by hand, with strings, you're vulnerable to. So what Postgres.js is doing is it's protecting your from that possibility. It makes it impossible for that to happen because of the way that it's implemented. So that's pretty cool. I mean, that's a huge win.

**Rasmus Porsager:** Yeah.

**Jerod Santo:** Okay, so the other thing you mentioned that I think is really cool is the lazy evaluation... Because now I can start to build up a query, but not execute it till I actually need to, which is a performance gain... Versus just like every time you to pass it to Postgres.js it's gonna run the query for you.

**Rasmus Porsager:** Right.

**Jerod Santo:** I can build a query over time, I can modify it, nest it, put some conditions etc, and then execute it really kind of just-in-time, send it to Postgres right when I actually need to execute that query. That's super-rad. And you're doing that because you're having these nested tagged templates, as well as returning a promise versus returning a result, right?

**Rasmus Porsager:** Yeah. Of course, you wouldn't be able to return the result no matter what. You need to await it somehow, or a callback function, or...

**Jerod Santo:** Right, right, right.

**Rasmus Porsager:** But yeah, it's to achieve this way of building your queries without inventing a new language for it. And to keep the amount of keywords as low as possible. I really enjoy when I don't have to remember the word of some things I use in the library. It's much easier to remember the position of things, or how you call it. So if you wanna use a dynamic callout name in Postgres, you also use the same tagged template literal function, but you use it as a normal function. And then Postgres will ensure that the column is escape probably.

**Jerod Santo:** So one of the places that we've started this conversation around relational versus Mongo, which I haven't seen, at least in my perusing of what you are up to with this library - it doesn't seem to have built-in facilities for schema generation, migration, changes to your schema...

**Rasmus Porsager:** No.

**Jerod Santo:** ...which - you would need something. How do you go about that? So you start off, you're gonna build a web app with Postgres.js, and you're like "Okay, I need my users table, they should have a name, and an email etc." How do I define my schema? Is it all just grab a separate library, or...?

**Rasmus Porsager:** No, I actually have another library I use personally, called Postgres Shift, which is just a forwards-only migration library. Very classical, you just start with migration number one, two, three... No clever --

**Jerod Santo:** No fancy stuff?

**Rasmus Porsager:** Nope. I just like it to be as straightforward as possible, because then I know what's going on. I think that you can always do a backwards-migration by having the next migration ready, if you have the need for that.

**Jerod Santo:** So it doesn't even do the up/down thing that most of them do.

**Rasmus Porsager:** No.

**Jerod Santo:** It's just one direction, run this...

**Rasmus Porsager:** Yeah.

**Jerod Santo:** Then if you wanna back it out, you just run another one.

**Rasmus Porsager:** \[27:53\] Yeah. And I've tried to get my feet wet with some of these tools that do auto-migrations, to figure out how you change your schema... And I think the vision is really great, I just -- I haven't tried using one where it felt like an improvement. And there's also the question about "Do you do only schema migrations, or do you wanna do data migrations at the same time?" And I actually feel okay just mixing it all up. But it depends on the project, of course. And for the things I've been doing, using Postgres Shift has been fine.

**Jerod Santo:** Very good. Well, we'll take a show notes link over to Postgres Shift. Surely, there's other libraries...

**Rasmus Porsager:** There's definitely others, and Postgres Shift of course -- I might have mentioned it at the bottom of the readme, but it's not as polished, it's not finished with proper documentations and stuff, so...

**Jerod Santo:** But it's good enough for Rasmus, so maybe it's good enough for somebody else...

**Rasmus Porsager:** Yeah. \[laughs\]

**Jerod Santo:** Your mileage may vary, but this is what he uses... And I think that's valuable information to have. So have you ever thought about maybe expanding the footprint of Postgres.js, just to provide basic functionality that -- I mean, pretty much anybody using Postgres is gonna have to define and migrate their schema.

**Rasmus Porsager:** Right.

**Jerod Santo:** Now, you can do it outside of your app, too. But is that maybe v4, have a little bit of migrations stuff?

**Rasmus Porsager:** No, I think almost all of the things I build - primarily because it's for my own usage. So with Postgres Shift, it's fine having another library, and the way it works is just -- it has a convention of a migrations folder, with folders for each migration numbered. And then you pass in your Postgres instance connection to the database, and then off you go. So it's so little code that it might even make sense to include in the main library. But on the other hand, a lot of people will prefer another way of doing migrations, so...

**Jerod Santo:** As it stands today, could you use the main library -- can you execute arbitrary SQL statements if you want to? Can I just write table definitions and pass it to Postgres.js?

**Rasmus Porsager:** Yeah, yeah, sure.

**Jerod Santo:** So it's there, it's just not fleshed out.

**Rasmus Porsager:** Yeah.

**Jerod Santo:** You can do it -- you can use the same connection you're using elsewhere, and write some code to do your thing.

**Rasmus Porsager:** Yeah, exactly.

**Jerod Santo:** Okay. So I think when you move into more functionality - you mentioned detecting your schema changes... I think we get to a point where some people start to think "Okay, well, what I really wanna have are rich data objects that I define in my JavaScript code. We have objects in JavaScript. Can I just have a user class with these methods and these properties and just let my Postgres library do it for me?" We're getting into the world of not just "Migrate for me."

But what about the dreaded ORM, which actually can be very nice if done well. It's hard to do it very well, but... Can't you take my objects and map them onto a relational database, and remove a lot of the boilerplate or things that I have to do manually? Have you thought about ORMs? Because that would be a natural progression. But maybe you don't like those.

**Rasmus Porsager:** It actually touches on a thing I spoke with Feross about at some point, which is another project of mine called HashQL. The idea is that you don't need an ORM. You just go and query the database. So on the surface it looks like you just go directly from your client-side JavaScript UI code and query the database directly. And when you're building your query there, you can just ask for it in whatever shape you want. And yeah, back to the SQL injection - all the dangerous stuff, in a perfectly safe way.

So I think once I find the time to actually get that up to a stage where I can present it, it's gonna push the other things away, because it's such an awesome way to just remove so much middleware in between the things you actually wanna build... And ORMs are one of those things.

**Break:** \[32:10\]

**Jerod Santo:** So while we're still talking about the way it works and some of the things it doesn't do, and stuff I like about it, I really like the way you return a result array from the queries... And it appears that - I'm asking for confirmation - you return a result array every time, no matter the query; even if it's empty, even if you say select star blah blah blah limit 1? It's gonna be an array every time?

**Rasmus Porsager:** Yup. Every time.

**Jerod Santo:** Okay, I love this library. That's awesome, man...

**Rasmus Porsager:** Yeah. A lot of magic, but some things just have to be predictable.

**Jerod Santo:** Yes. The principle of least surprise. You have no idea how much code I have written in my life where it's like handling the null case, handling the single case, handling the more than one case... And it's like, those two - no results and one result - are oftentimes treated as special cases.

**Rasmus Porsager:** Yeah.

**Jerod Santo:** Whereas if you're returning an array every time, an array with zero is just an array; an array with one is just an array. An array with 75 is just an array. So that is the way to do it. Where did you learn that? I know I've learned it from a specific place, but... Where did you get that principle? It's kind of like a mixture of the principle of least surprise, but also there's a uniform access principle, which - it's kind of that... I don't think that's exactly what that principle is about, but you're uniformally accessing the results... So I'm curious where you learned that, because that's brilliant API design, if you ask me.

I don't remember where I learned it, but I've got an idea. It might come from -- so I haven't studied anything with programming. I started out as a designer. And it's like, some of these principles in design, they affect how I write my code. So also if you're doing a user interface, or building stuff like that, it's the same things... The user land portion of my library is like interface design, right? Just like graphical user interface design. So perhaps from there, but I'm not sure.

**Jerod Santo:** Okay. I will tell you, I learned it from jQuery, because that is the way jQuery works to this day when you do selectors.

**Rasmus Porsager:** Oh. It might have been from there I got it, too. Yeah. \[laughs\] I just never thought about it.

**Jerod Santo:** \[35:52\] Yeah, I think about it because I just use jQuery long enough, because I used to deal with all the edge cases... And I started realizing -- it's almost like I didn't realize it at first. I feel like my code has less edge case handling when I was writing jQuery stuff. And I'm like "Why is that?" And I realized "Well, it's because you get an array everytime." So you don't have those two special cases of empty or one. And I started writing all my code that way, to return -- sometimes and return a set every time. So when I see that in the wild, I think "Okay, this person knows what they're doing", and I wonder, did they see it in jQuery? So maybe you did, but... You know, osmosis. Learning through osmosis, without knowing that you did. But yeah, I could see where design principles would also have -- it's kind of the "Don't make me think" concept, because that's kind of what you're doing.

**Rasmus Porsager:** Yeah, I think that with destructuring in JavaScript it also became so much better. It's so pleasant to write that way.

**Jerod Santo:** Right. To handle that stuff, yeah. Okay, so the last feature that I want you to touch on - because there's lots here. We haven't talked transactions, we haven't talked about a lot of stuff... But a lot of it is the things that you'd expect to be in a database library. So it's like, yes, it has these facilities.

One that I think is really cool - and again, it's not like it's ground-shattering, but the fact that you can call .describe on a query that you're building is super-cool. Do you wanna talk about that?

**Rasmus Porsager:** Yeah, that's actually one of the few things I built because someone else asked for it. \[laughs\]

**Jerod Santo:** Okay, okay...

**Rasmus Porsager:** And I think they were trying to build some setup for automated type inference for TypeScript. There's also a discussion in the repo; I don't follow that much. I don't use TypeScript, so it's not really of interest to me... But it wasn't hard to add that feature. So someone else is gonna --

**Jerod Santo:** Take credit for thinking of it.

**Rasmus Porsager:** Yeah.

**Jerod Santo:** The reason why I like this feature - and it does exist in other database tools, but I think it should exist in every database tool - is because it allows you to actually see at the end of the day what it is exactly that you're gonna be sending over to Postgres. So you're building it up in JavaScript, in strings... Maybe it does something else, because you're flagging me here. Go ahead.

**Rasmus Porsager:** Yeah, it's not only about what you get returned. It actually tells you the types Postgres expects you to send, as well.

**Jerod Santo:** Okay.

**Rasmus Porsager:** So when you have the tagged template literal and you have some values there that you wanna extrapolate, it tells you what input it expects.

**Jerod Santo:** Gotcha. So it's even fancier than I thought. Okay, very cool. A couple other questions coming in from the chat... So it's version three, you've been working on it for a few years now; in 2017(ish) you started doing Postgres, we're in 2022, so I'm not sure when you started this particular library... But you've been toiling away, a few major versions. The question is what are your plans and intentions for maintaining the project? Are you gonna find a new shiny -- I heard FaunaDB is cool. Are you gonna switch to Fauna and abandon Postgres.js, or what's gonna happen down the road, do you think?

**Rasmus Porsager:** \[laughs\] Well, if Fauna uses the wire protocol no problem. But...

**Jerod Santo:** Fauna specifically I think is the one who is not PG-compatible. But Cockroach - yes. A lot of them are saying "We are wire-compatible", because it's a huge adoption move. But I think Fauna actually has put a stake in the ground and says they're not... But regardless, how long are you gonna maintain this sucker?

**Rasmus Porsager:** For as long as I'm gonna use it myself too, which is in the quite long future, I think. But I actually think it's -- you can never say that, but it's done. There's some interesting things to try out with the binary protocol, but it's really not necessary. It wouldn't change anything on the surface. It would merely be a performance improvement. So I think any bugs that should appear or any obvious feature requests - I'm of course gonna take them in. But currently, it's sitting there with zero pull requests, zero issues; it feels really nice. Or did one come in today? I don't remember.

**Jerod Santo:** I've been looking while you talked, I don't see any. It's looking empty, yeah.

**Rasmus Porsager:** Yeah.

**Jerod Santo:** 74 closed, 0 open...

**Rasmus Porsager:** \[39:57\] We'll see. I suppose there's gonna come more when people start to use it for more than just side projects. It's still pretty young. I think it got a lot of attention with the version 3 release, but it's only two years ago I released the first version, so...

**Jerod Santo:** Okay. So the version 3 release was definitely when it crossed my radar. Do you have -- I mean, you have some other open source stuff. Do you have a GitHub Sponsors, do you have an Open Collective? Do you have any sort of sustainability plan? Or are you just happy to use this thing and it's done, and maybe you'll do another open source thing, maybe not, but you're not really looking to maintain open source as a thing?

**Rasmus Porsager:** Not anything I would do as for a living.

**Jerod Santo:** Sure. But you've probably put some sweat into this thing. Or do you only work on it at work?

**Rasmus Porsager:** No, it's a private project. I use it at work, but no.

**Jerod Santo:** But it's done, so who cares...? \[laughs\]

**Rasmus Porsager:** Yeah... No, I have a lot of other open source projects I wanna continue working on as well, but I'm probably in the camp that I don't feel like you should spend too much time trying to monetize your open source projects. It's nice to share with others, and I get a benefit from extra eyes on it; that's really nice, too.

**Jerod Santo:** Solid stance. I think that's well said. Well said. One thing I noticed is that while you came along a little later, you do have npm install postgres, which is very much as short as -- I mean, you couldn't do pg, I guess...

**Rasmus Porsager:** Yeah.

**Jerod Santo:** But - I mean, that's like official. And I thought to myself, "Dang, dude got Postgres. npm is quite a crowded name space at this point", and then I saw in the very, very, very, VERY bottom of your readme you have a thank you to Ryan Dahl. Do you wanna tell that story? It sounds like maybe he donated it, or he wasn't using it, or what happened there?

**Rasmus Porsager:** Exactly... So in the start it was called peegee...

**Jerod Santo:** Okay... \[laughs\]

**Rasmus Porsager:** Pretty silly, and I was like "I can't release it with this name." So I saw that Ryan had the Postgres package, and it had the bare bones of the Postgres protocol from 2010. And like you started the conversation with, mentioning that he just laid it out there, "Please build these things for Node." So I tried to write him, and I told him I have this library, it's at this stage, I think it could definitely be something that would be interesting for people to use as their main Postgres library... And he responded the same night, just like "Yeah, that sounds like a great idea. Can you just link me some of your code so I can see what's going on?"

**Jerod Santo:** Yeah. A quick code review... \[laughs\]

**Rasmus Porsager:** Yeah, exactly. It was private at that point... And then half an hour later he was like "Yeah, sure. I'll just transfer it to you." So that was really nice of him.

**Jerod Santo:** Was there any anxiety, like "Dang, Ryan Dahl is just checking out my code right now..." When he replies back, he's like, "Nah... You can't have it."

**Rasmus Porsager:** Yeah, there was some of that. \[laughter\]

**Jerod Santo:** That's very cool. Well, speaking of Ryan Dahl, it's also a Deno client.

**Rasmus Porsager:** Yes.

**Jerod Santo:** So I'm wondering - did you have to jump through special hoops in order to work on both platforms, or were you just writing vanilla JS so it didn't matter?

**Rasmus Porsager:** Yeah, most of it was vanilla JS, and of course, there's several dependencies, so it was all my own code. And I think version one was actually just 1,200 lines of code for the entire thing. So porting it to Deno was a one or two-day task, because they've done a huge job making polyfills for Node interfaces. So it was actually just a matter of mapping those up to Deno and then finding the edge cases where that didn't work... And then yeah, I think on the first run tests passed, almost all of them. There were some stream-related things, but luckily they had fixed that when version three was about to be launched. So it passes the same tests as the Node version. I haven't used Deno in production for anything, so I'm very curious to hear from anyone using Deno how it works for them... But yeah.

**Jerod Santo:** That's cool. I might kick the tires -- I've been kicking the tires on Deno; not in production contexts, but just in kicking the tires contexts, and having some fun... And as I said, I'm a Postgres guy from way back, so this sounds like a nice little playground for me. You have TypeScript support as well... You don't care about that, but was that also -- which one was harder?

**Rasmus Porsager:** \[44:23\] Yeah, there was a user on GitHub who just PR-ed it, the first version...

**Jerod Santo:** Ah, nice.

**Rasmus Porsager:** ...and he's just been stepping up along the way. I don't know if he's done a great job, but I think he did. I can't tell. \[laughter\]

**Jerod Santo:** Let Rasmus know if he did a bad job or not.

**Rasmus Porsager:** Yeah.

**Jerod Santo:** That's like when you have somebody volunteer a translation of something... You know, like "I'll translate this to Japanese", and you're like "Okay, please do. I hope it's good."

**Rasmus Porsager:** Yeah.

**Jerod Santo:** Awesome. Is there any way the community can help you with this? Or it's kind of done... Like, if you had a chance to say something to JS devs, would it be "Use it, let me know if you like it, suggest features..."? What are you looking for? Do you just want people to enjoy your software, or do you have specific needs or desires with it?

**Rasmus Porsager:** I think the main thing that would be nice to have Postgres help is making PostgreSQL sexy again. It's gotta be straightforward to use Postgres, and that's what I'm hoping to do with this library. That's probably something I've picked up from Mongoose, the fact that you can just instantiate your database connection and then query off of it. You don't need to worry about managing pools, or waiting for the connection to open, handling errors on the connection instead of just handling errors on every single queries... The whole error situation is so much better with Postgres.js compared to pg. I had a user convert from pg to Postgres a day ago, and it was like 148 additions, 490 deletions.

**Jerod Santo:** Nice.

**Rasmus Porsager:** And that's something that makes me happy.

**Jerod Santo:** Yeah, that feels good right there.

**Rasmus Porsager:** Yeah. This seems pretty good, yeah. So if it can help push PostgreSQL forward, then that's really awesome.

**Jerod Santo:** So what about some of Postgres' more advanced features? I see you have listing and notifying in there, some real-time stuff... I wonder about JSON support in Postgres. That's not exactly new; JSONB is not new anymore, but it's new(ish) faculty... And the Postgres database is getting new features over time. Are you interested in adding specific support for specific advanced features, or do you wanna stay pretty much SQL compatible? What are your thoughts on that?

**Rasmus Porsager:** I think Postgres added it themselves when they got JSONPath and everything as a first-class citizen support for that... So you're writing SQL with Postgres.js, and you can just benefit from those features added along the way.

The most interesting extra thing I added, I think, is the logical replication real-time subscription, which is taken directly from Supabase, who did that first and presented it as a WebSocket through a big setup that you would use with Elixir... But here you just do sql.subscribe and put in your table name, perhaps a specific field, and then you get notified, everything that changes. You don't need to set up stuff like you do with listen and notify. You just have to add which -- you can say all tables; you just wanna push all tables to logical replication. Or you can narrow it down to the things that really matter.

**Jerod Santo:** Well, Rasmus, very cool stuff. I'm quite impressed by the library; I wanna give it a try for myself. Definitely if you're out there using Postgres.js let us know, shoot us a holler; definitely let Rasmus know. One of the best things you can do as an open source user is just let people know that you're using their software, that you appreciate their software... If there are issues that you're having, obviously let them know those kindly as well. That's good feedback for open source maintainers.

Anything else we haven't talked about you wanna make sure we squeeze in before we call it a show?

**Rasmus Porsager:** There could be plenty, but no, I'm good. \[laughs\]

**Jerod Santo:** You're good. Okay. Well, I really appreciate you coming on the show and talking about this. I think it's a very cool project; I think we need more high-quality libraries that let us build rich, database-backed applications. So more like this, please. But that's all we have for now. Don't forget about those events we've mentioned in the Holla section. Definitely check out Postgres.js, Postgres Shift if you're into simple things, as well as HashQL. We have the links to all the things in your show notes, so click through and check out what Rasmus has been up to.

That's all for now... This has been JS Party, I've been Jerod Santo, and we will talk to you all next time.
