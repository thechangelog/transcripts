**Nick Nisi:** Hoy-hoy. Welcome to another exciting JS Party. I'm your host this week, Nick Nisi, hoy-hoy, and I am here to do an ORMmazing show with Kball. Kball, how's it going?

**Kevin Ball:** I do not have a pun planned ahead to one-up you there, so I'm gonna let you win that... But I'm excited. I like ORMs. I think there's a lot of interesting conversations right now about interfacing with SQL, especially I've been playing around with using AI to talk to SQL, and things like that... So I think we have some opportunity for conversations about what are the right levels of abstraction to talk with our data. So I'm looking forward to it.

**Nick Nisi:** Yeah, I like that. And because I can barely spell ORM, we do have a guest to help us out with that as well. He's the creator of Joist ORM, Stephen Haberman. Stephen. How's it going?

**Stephen Haberman:** Yeah, I'm doing fine. Thanks for having me.

**Nick Nisi:** Awesome. Tell us about yourself.

**Stephen Haberman:** Sure. I'm a software engineer, I've been doing this for a little while... And yeah, I don't know, I got started back in the day doing Java. Maybe that's gonna --

**Nick Nisi:** We won't hold it against you, it's okay.

**Stephen Haberman:** Oh, don't hold it against me. But I actually did quite a bit of that for a while, and enjoyed it... And yeah, about four or five years ago I found this little thing called Typescript, and I was just really surprised. I love the typed system. And back in the day, seeing people do Node circa 2010, the only thing you had was callbacks. It was crazy. But the JavaScript language, and TypeScript on top of it, has grown so much, with the evolution of async/await, and just everything that they've thrown in the language. It's been really impressive. And so I've been doing that lately, and I really enjoy it.

**Nick Nisi:** Did you hear that, Jerod? Did you hear all of that praise for TypeScript? \["I'm not listening... I'm not listening..."\]

**Kevin Ball:** That's right. It used to be you were trying to convince me, but I'm a convert for the last couple of years, so... Jerod might be the one person who's regular on the show who is still a holdout.

**Stephen Haberman:** Ah yeah. Well, that's fair. I mean, to a lot of what TypeScript has been able to do - for sure, is on top of the core evolution of just JavaScript itself. All of the async/await stuff in the core language has certainly benefited TypeScript a lot, they got a lot from that.

**Nick Nisi:** Now, you're joining us to talk about ORMs... So maybe it'd be appropriate to start with a definition of what that is?

**Stephen Haberman:** Oh, sure. Yeah. I mean, it's an Object Relational Mapper, so basically you've got a relational database floating around, that you'd like to talk to as ergonomically as possible; you know, kind of the OG way of doing that is raw SQL strings. Every time you want to talk to your database to SQL, select star from this, and this... Actually, I'm pretty -- we can get into the pros and cons of ORMs later, but for the more esoteric SQL that you do, I'm a big fan of doing custom SQL when we need to. But for the 80% to 90% ratio of your code that is like "I just want this author entity. I just want this book --" Well, maybe I'm playing my hand a little bit by saying the word "entity", I guess, but I just want this author row, or the book rows for this author. I think it can start to get kind of tedious to do SQL selects for every single little boilerplate thing. And so I think that's where ORMs come in. Back in the day, you could see ones that tried to do everything, everything. But I think if you stay in the circle of competence, of just treating your database for 80% of things as an object graph, and then being able to very ergonomically get your data out of your relational database... There's also reads, but then also writes; writing back what you've changed. I guess, yeah, there's a spectrum of how fancy ORMs go, insofar as "Is it just doing just queries, and then also doing the reads and the writes back?" But as you go on the spectrum of like fancier ORMs, you'll start to see a lot of things where applying business logic around your writes of validation rules, and lifecycle, you can get into some of the reactivity that Joist is bringing to the table, and really leaning in on encapsulating business logic and business rules in a central location, beyond just like "I'm reading and writing data."

**Kevin Ball:** Well, can we start then with -- since there are so many different directions that ORMs take, and different trade-offs that they can make, what inspired you to write a new one?

**Stephen Haberman:** Yeah, that's a good question. So I think Joist came around probably circa 2019 or so... So the problem we were solving there at the time was standing up a new tech stack, very stereotypical tech stack at the time, where we had GraphQL on the backend and React on the frontend, and we were using Apollo and Postgres. I love Postgres. And yeah, just trying to find what was the most ergonomic way of standing up our backend. And when looking around for other tools at the time, there's the class of tools out there, like the Hasuras and the PostGraph files that are super-ergonomic in terms of directly mapping your database schema to your GraphQL public API. Super-amazing. But you know, kind of touched on that business logic thing... We had been wanting to find a way to do like 80% to 90% of like just take your database schema and make your GraphQL API out of that, and do that for the common case... But there's always this last 10% to 20% where I think like the Hasuras and the PostGraph files, you can start to miss out on "Well, I don't want my GraphQL API to exactly be my database schema. And so that ruled out those... And yeah, just from my past, I've done enough or ORMs, or I had used ORMs, kind of like those. I had used TypeORM in the past, and I was just looking to use something else.

\[06:37\] But we started out with MicroORM, which is actually really great. I still like it. It matched -- and you can tell, like probably 60% to 70% of Joist's API matches Micro, because our codebase was on Micro for probably six to nine months before we flipped over to Joist.

And the big reason for moving away from Micro - I mean, there was nothing wrong with it, but we were very much in the GraphQL environment, where it's so easy to do N+1s. And so we were really looking for an ORM that would build in data loading, the whole Facebook Data Loader pattern of you wait until the next event tick to kind of see whatever happened, and then at the end of the event tick you're like "Oh, you asked for 10 authors in this one event tick, instead of 10 SQL calls. I'm just gonna do one SQL call for all 10 authors, with a 'Where in'." And I actually had a pull request into Micro to kind of start to do that... And it worked, but Micro was just mature enough at the time; it was probably already -- I really haven't kept up on it. I liked the Micro author. He was great to work with. But it was probably v -- I'm gonna make up v3 or v4... I don't know, it was a little while ago. But it was already pretty a mature codebase. So it just wasn't as easy to wander in and like put data loader into the guts of the ORM after it had already been established, and that sort of thing.

And so really, that was it. That, and then the other thing that -- from my days working on TypeORM. And again, I haven't worked with TypeORM for five years at this point... But the biggest frustration I remember, with disclaimers that I have no idea what it looks like these days... But it was that it was incredibly opaque whether your collections were loaded or not; or even any relation. So you might go get an author, and so -- oh, to go back to one of the things that ORMs are really good at, is like lazy-loading parts of your object graph as your business logic needs them. So you might start at an author, your endpoint is like "Do something with an author", and so you get the author, and then you do some business logic, and you're like "Oh, I need the books." And then you do some business logic, and you -- oh, you need some book reviews. And so ORMs are really good about kind of making it ergonomic to load more and more of your little subgraph as you go. But the trade-off is that you start out with it not loaded. So you start out with an author, and you don't have the books yet, and you don't have the book reviews. And my recollection of TypeORM was that it didn't have a way of representing these two states in the system. And I'm trying to remember, I think you could do things like for the author and the books, tell it that the books is always loaded. But that would mean like every time you touched an author, you de-facto brought back the books. But then at least in the type system you were guaranteed for the books to have been loaded... But you rarely want that, precisely because it's kind of lazy-loading and the object model is de facto what ORMs are good at.

And so tangenting back to why did Joist come around... So the kind of two a-ha's that kicked off Joist was "I want to build a data loader from day one, for every single lazy-loaded call." And the other one was figuring out a way in the type system to represent the two states of a collection that's not loaded until I ask for it to be loaded with a populate hint, or load hint, which - the load hints and populate hints are not novel to Joist; they go back to Active Record, and I'm sure other ones before, where you start with an author, but before you go in and play with the guts of the author, you say "By the way, I know I'm gonna want the books and the book reviews loaded", so you give a little hint upfront, to like "Please, go get those for me", and then your business logic after that can have that.

\[10:02\] So you've always had to do that with ORMs, like the Active Records and TypeORMs of the world. What was novel with Joist about the time was that transition changed the types. So you would start with the author, and you couldn't do books.get; you would have to do books.load, which was a promise, and then for every book you'd have to do mybook.review set load, and that would be a promise... But if you did -- so it's by default safe, which is one of the things I don't think I liked about TypeORM, was like by default... Like, the collections would look like you could call get, but it would turn into a runtime exception if you hadn't made extra-sure that you had done a populate hint 10 or 20 lines up, or we're even a completely separate method. That's where I think this can really break down. I remember -- even Active Record still kind of has problems with this, where you might have an endpoint that kicks off, and like loads an author in Active Record, and then eventually, you get into abstractions; you call this helper method, and this helper method, and at some point, one of these helper methods is going to need data that you didn't remember to populate, not only 10 or 20 lines up, but way off in some other method, in your endpoint method.

Yeah, so anyway... So with Joist, just TypeScript map types are just so neat. So I've been playing around with a prototype of like "Can I have a domain model that is inherently unloaded, and when overlay this type hint of like "Please ask the ORM to go load the data", both go load the data from the SQL database, but mark in the text system that all of these are now loaded, and you can do gets.

So I went on super-long tangents, but those are the two... You know, once I had those figured out, both of those seemed novel enough to like "Okay, okay, now it's worth taking what had been musings, and turning them into an actual project", and that's what kicked off Joist.

**Kevin Ball:** There's a number of threads there that we could pull on... I want to start first may be going down the data loader thread. So I'm pretty familiar with the data loader pattern, but I don't know that everyone listening to this podcast will be. So can you kind of explain what that pattern is, and what it enables?

**Stephen Haberman:** Yeah, sure. So data loader is just a way of doing automatic batching of almost anything in your system. And so it comes out of Facebook... And maybe the niftiest thing about data loader is it just works on top of raw promises. So I don't know if this is maybe too academic of a tangent, but if you look at -- the concept of data loading is not super new. So Facebook has a library called Haxl, that builds this concept in Haskell... And that was from 10 or more years ago. And then somebody had written a version of that in Scala; they had kind of ported it to Scala, and I'm gonna forget the name of it... There was maybe two libraries in Scala that did it... And we had used it, again, about 10 years ago, when I was at a Scala shop; at least in terms of the patterns. So I think it's kind of easy to talk about the non-JavaScript version of the patterns, and what those would be is instead of directly loading the data, you would make little -- I'm gonna go ahead and use the word promise, because that's what it ends up being in JavaScript... Which is why it works so well. But back in the Scala days, you would say "Well, I'm going to have an author, and I'm going to go loop over the authors books. And I want this book, this book, this book." But in these old libraries, instead of literally getting the book, you would make a little AST of like a promise to get this book, a promise to get the next book, a promise to get the next book, a promise to get the next book, and you'd kind of have a layer of like your attention to get the data, and then you would ask the runtime system, like the Haxl runtime system, or whatever it's called, "Okay, now please go do that." And it would have the smarts to "Oh, I can see that you're trying to load 10 books", but instead of doing make it a book wire call, book wire call, book wire call, book wire call, you an N+1 of a whole bunch of IO calls, a whole bunch of wire calls; Haxl and the other libraries would recognize that you're doing essentially the same operation, just for a different where clause, basically. So can I do one operation, one wire call, for all 10 books?" And the Facebook Data Loader library - yeah, so it does exactly the same thing.

\[14:02\] The innovation there is that they realize you can use the event loop instead of what - in other languages you need some sort of little kind of interpreter thingy to do. I don't know if this is meandering and kind of technical, but the idea is that sure, if I'm going to take an author, and I want to loop over the books... Of course, you have to be doing something with - I want to load each book; each of those is going to be a promise. So go to load book one, I get a promise; load book two, get a promise; load book three, get a promise; load book four, get a promise.

And what data loader lets library authors do is - since the promise has to wait anyway, you don't get the book right away. The promise is like "Well, I'll give it to you in a little bit, in a little bit." And what data loader does is before it even kicks off the wire call - so you ask for book one, book two, book three, book four - it doesn't immediately do the wire call, but it puts onto the event loop basically a flush, that says "Okay, do this wire call at the end of the event loop", which will come up right away, because event loops are just going spin, spin, spin, spin, spin, spin. And so it puts a little - basically like a flush event at the end of the event loop that then when it gets hit, can let the library author, or whoever's using data loader, realize "Oh, okay, there have been 10 promises that asked for books. Before I actually kick off the wire calls, I'm gonna condense those down into one wire call, that will load 10 books all at once."

And data loader - it's really a pretty small... It's probably, I don't know, 115 lines of JavaScript, maybe something like that... And could auto-batch anything; it could do it for microservice calls, it could do it for SQL calls... It's really very generic and really awesome how well it fits into the event loop and into JavaScript.

**Kevin Ball:** So if I were to kind of replay that back and simplify it a little bit, it's taking the concept that any sort of call that goes over the wire, whether it's to a database, or an API - that is slow, and it has a sort of intrinsic latency to do that, whether you're fetching one book, to you use your books example, or 10 books. And so it says, "Okay, instead of sort of optimistically fetching as soon as you ask for it, I'm going to accumulate the set of requests that you have into an array, and wait till the next time that data is requested, or rather the end of the event loop, and now I have a list of things; I'm going to try to condense that list of things into a single query and pull it back." And I think with data loader you actually define how that condensing happens. So you get a list of keys, passed off to a function you define, you say, "Okay, I have a list of keys, I know how to batch this into a single query, grab that, and then I hand back that list." And so data loader is kind of letting you multiplex a set of queries into a single query that goes over the wire, and then demultiplex that data back out to all the requesters that asked for it.

**Stephen Haberman:** Yeah, that's a great point, that you have to both combine and then uncombine, because that's also important on the other side. You get back one big batch response for all your 10 books, but you're like "Well, I've got to give the first book to the first caller, and the second book to the second caller", and do that bookkeeping. Yeah, that's a great explanation.

**Kevin Ball:** So one thing that that leads me down, where - that's a question kind of specifically for Joist... And this goes back, I think, to how Active Record would do this. So Active Record did not have the data loader pattern, but it still would lazy-load. And so within a particular kind of query, you could accumulate a set of queries. So you might say, "Hey, I'm loading a bunch of authors, and for each of them I want their books, and each of whatever", and then at the end, when you actually go to load that data, that's when it issues that query. And it tried to do something smart, where sometimes it would issue a set of queries, and sometimes it would issue a single query with joints.

Where I have seen data loader used in the past, it was usually accumulating on a per-table basis; it was not trying to do any of that joining. But I'm curious, with Joist you have potentially more of a global view, or a global way of hooking this in. Are you able to accumulate queries across tables?

**Stephen Haberman:** \[18:02\] Yeah. Well, actually, we could. We don't right now. We could, in some cases. So in the case -- you don't always know what the next level of table you would need is. It depends on whether you give it an explicit populate hint. So one of the great things I think about Joist is that you don't actually need to use populate hints. So as far as I understand with Rails in your example if you knew your business logic was gonna - you know, "I have an author, and I'm gonna go through all the books, and go through all the reviews", if you wanted to make that... And you're saying you can either make one giant query to join in all three levels of data, or you could do like one query per level.

**Kevin Ball:** Exactly.

**Stephen Haberman:** So what the nice thing with Joist is is - I'll go to maybe why we don't do that right now... Is that with Joist you don't even need that upfront populate hint. So because of data loader, you can just say load the author, and then --

**Kevin Ball:** Right, you can accumulate all the levels asynchronously.

**Stephen Haberman:** Right. And so if you do that, we don't know what you're going to need ahead of time, until after we've loaded all the books, and then you go in and you're like "Oh, I also need the book reviews", and you're like "Oh, you also need the book reviews. We'll get those for you." And so if you're not using these ahead of time populate hints that -- you know, that the populate hints would tell us ahead of time that we need ahead of time multiple levels of data. So if you're not using that, then no, we couldn't. But if you do use that, we could, technically. We don't right now, for no real reason than -- well, two reasons. One, we just haven't gotten to it yet. But the other reason is that - to go back to kind of the Hasuras of the world that exactly match the domain model... Or take the database exactly, map it out your GraphQL API - Joist also wants to do that for 80% of things, but there's this other 20% of things that are in your domain model that are not necessarily strictly in the database, so derived properties and calculations that you might just want to do in-memory. And for the most part in Joist those look the same, in kind of a good way. If you're consuming the domain model, you can't always tell which collections are literally from the database, or more of a derived value... And it just ended up being easier for our initial implementation of the popular logic to not have to subdivide those, because to do the joint thing, you really have to be getting everything literally from the database, to get it into a joint. And we could go back and implement that, but we'd have to split the populate hint into like "Okay, here's this half of the populate hint is stuff that was literally coming from the database, and this other part of the populate hint is coming from derived collections and derived fields that we can literally put in the join."

**Kevin Ball:** Interesting. So if I understand correctly, you're kind of allowing someone to do a JavaScript-level sort of derived view or computed feature of some sort. And at the Joist level, you actually are able to treat those pretty much the same way.

**Stephen Haberman:** Yeah. A lot of the Active Record things, like it has many through -- we have terms that kind of come from Active Record, but they don't map one to one... So I'm forgetting if I'm saying the Joist one or the Active Record one. But it has many through, or has one derived, has many derived, and these sort of things. Little abstractions that are super-commonly used in your domain model, that are little shortcuts. Almost like Rails scopes. I hadn't done a lot with Rails scopes. Actually, I haven't done a lot with Rails. I worked in Rails for maybe six months, circa 2008, or something like this... And then was in a shop that was moving off of a Rails monolith onto other things. And so haven't done a lot in it, but did enough to be like "Oh, wow, this is nice." Just the ergonomics of Rails is --

**Kevin Ball:** The ergonomics of Active Record are, as far as I've seen, unparalleled.

**Stephen Haberman:** Totally agree.

**Kevin Ball:** It's really powerful.

**Stephen Haberman:** And so I've done just enough to know that I want to -- I come back to like Ruby... At least in the past, it didn't have types. I'm enough of a static typing bigot that I like to play in the languages that have types. But for sure, 100% use Active Record as an inspiration for -- you know, gold standard.

**Kevin Ball:** \[21:49\] Another direction I'd like to dig into a little bit was this piece you were talking about, about sort of being able to check with the types whether something is pre-loaded or not. And I guess a part of me is wondering why you need it, and let me flesh that out a little bit more. One of the benefits of going to a fully asynchronous model, which is what you need to do to be able to take advantage of data loader, is that I as a caller don't need to know whether you've loaded that data or not. I treat it the same way. Because my code is already having to be asynchronous, I'm already having to treat it as if it might come back sometime undetermined in the future; I already have to await it if I need it now. So why do I need a type hint to say "This is pre-loaded versus not"? I can treat it the same, regardless.

**Stephen Haberman:** Yeah. No, that's a great question. I think it's just that async programming can be pretty tedious, once you get down to -- it's great for this sort of dynamic discovery sort of thing, where your system (or at least the data loading side of that) evolves or whatnot. But I think the best example I can think of is like Nick from the talk a week or two ago, if you just look at "I'm gonna have a book, and I'm gonna go over the -- I have an author, and I'm gonna go over the books", and you do books.load, like okay, there's an await... And that's not too bad. But now, you're gonna have to do .map, and now each of your book .reviews.load is going to be a promise... And all of a sudden, once you've got for loops, and maps, and filters that are doing asyncs, it starts to get kind of ugly.

So when you know you've got like -- I've got 10 lines of business logic that I want to write right here, in scope, but it's like two or three levels deep, and I'm gonna await promise all, and do an async map or an async filter for every single little operation, it just gets super-tedious. And I think -- I don't have any examples at hand, but I like to show off the before and after of like "Yeah, sure, here's how you can do it with a bunch of .loads.loads.awaits.awaits", and all these other sorts of things. But if you do the preload hint, where now it's just like .gets, and it's all synchronous, you can do like flat maps, and filters, and all sorts of things, just like your regular collections, your regular lists and maps, as if they're in memory, and all of a sudden code that is gnarly, and just goes to literally two or three lines of functional programming, I think it's a huge, night and day difference.

**Kevin Ball:** That makes sense. Well, and it makes me wonder if there's room for a utility that basically does that, even in a non-preloaded case, where it's like "I've got all this data. It might be loaded, it might not be loaded. I want to flatten it out into synchronous, so that I can just work with it."

**Stephen Haberman:** That sounds a lot like what Joist does, yeah. Granted, it's super-baked into an ORM. So if you're using -- kind of like how generic data loader is; could you do the same thing for -- I mean, to go back to your question of why we don't do the SQL loads for joining three levels of data... Which I do want to do someday, but - it is actually pretty generic. Right now the Joist code that does this little preloading thing, in a good way it's pretty agnostic about that it's asking SQL to be executed; it's just sees them as promises that then it -- anyway.

**Kevin Ball:** It does seem like -- it feels like an interesting problem to even make that aggregation into a joint work, potentially in the async case. Because if you could - having Joist as a sort of central pivot point for data loader, you could write a single data loader function that is receiving all of your different classes of loads, and aggregating, and it could distribute them out into distinct underlying fetches... Or it could say "Hey, you know what? These things are connected. I can join them, because I know the relationships between the parts of the objects."

**Stephen Haberman:** Yeah, I hadn't thought of it that way in terms of doing it... Yeah, I think when I thought of how we would implement it in Joist I was leaning more into "Well, we've got the populate hint, and we'll lean into the populate hint to know ahead of time what we would need to do." While you're loading books, you know like "Oh, I'm going to need book reviews." That might be where it may not work without the populate hints. Like, unless you've got a hint explicitly telling you it's going to want the next level of data, the runtime doesn't actually know yet. Nobody has called bookreview.load, so the data loaders wouldn't have been primed to know that they need that yet.

**Kevin Ball:** \[26:14\] Oh, because you have to load the original author or book level before you have an object that you can call that loader on.

**Stephen Haberman:** Yeah, 100%.

**Kevin Ball:** Yeah. And if you wanted to get around that, you'd have to fake out promises, and then it gets really complex... \[laughter\] Like, I could imagine returning a customized thing that wraps a promise, that is like "This is a book promise, and I can call on it to load book reviews, and it knows now to aggregate things." But that's probably more complexity than it's worth it.

**Stephen Haberman:** Yeah, you're like speculatively executing the next layer of business logic, I guess, to see what it's going to ask for, something like that.

**Kevin Ball:** That's kind of what I was thinking. It's kind of extrapolating down the data loader pattern of not fetching the data until the absolute moment you actually finally need a piece of data. And when you have the structure of the tables, which you do, you understand the structure of the relationships here, theoretically I don't need to load the data on a book to understand how to load the associated book reviews. And so once again, in theory, you could create this -- I don't know whether to call it beautiful, or ridiculous, but like this crazy structure that is keeping track of "Okay, here's a thing that's going to represent --" Back to your point, like, "This is going to represent a book. It doesn't yet", but you can expose these operations on it, which will then follow down the relationships and do the correct joining and all of that mess. I don't know that it's worth it at all, but that's where my head got to.

**Stephen Haberman:** Yeah, I think the trick there would be like -- I would imagine that the logic that you would execute on this pseudo book would expect it to look and smell so much like a book; it would want to do like "Is your title this?" Interact with it in a way that -- yeah, you could return a fake book, a null book, that just returned empty titles, and that sort of thing. But since you're executing actual user business logic code against it, it seems like it could pretty easily trip up, potentially.

**Kevin Ball:** Yeah, I think the moment that you have to actually access data, now you've got to issue your queries and load. But you could, in theory, delay -- and once again, I don't know how much this would show up, but you could in theory delay up until that point, and maybe by then you've also told the system, "Hey, I want the reviews, and I want these other things." I don't know that it's worth it, but I just seemed like an interesting direction.

I'd love to see the experimentation with data loader, because I feel like asynchronous data access patterns that are easy to use are an innovation that has happened, but are not widely spread. And so kind of exploring what those possibilities look like is fun.

**Stephen Haberman:** Yeah, yeah, I agree.

**Kevin Ball:** Nick, I've been talking a lot, and you're sort of sitting there, nodding. What's on your mind? What are you thinking?

**Nick Nisi:** I'm mostly trying to keep up, I think. I think you answered the question that I had coming up about that example you had with loading books, and then loading reviews for the book... And I'm just curious how that looks from a type of perspective. When you call load on the books, would you get that data, but then the reviews is like a promise that will resolve to that data, or an object that you have to call load on again? How does that work?

**Stephen Haberman:** Well, so in the vanilla case, which is like not using preload hints - yeah, you would say "I've got a book, and I'm gonna go read the reviews, and I'll load the reviews", that's a promise. That gets you the book reviews back, and they just look like objects now. And so that's kind of pretty vanilla.

Now, I guess we kind of already started a second layer down in the graph, because now it's our -- let's say book reviews have comments. And so if you had books and you load a bunch of book reviews, to access the books reviews comments is going to look like a promise, because we're not using any of the preload hints, and so to Joist it's just a book review; there's nothing that has told Joist to load the comments ahead of time. So you would go into book review one.comments.load do a wait and that sort of thing.

\[30:20\] But if you had done a thing where like in a book I want you to populate your book reviews, and I'm going to pass a little hash of populate the book reviews and their comments, a little nested hash of book reviews call and comments - that's going to change the type of your book itself. Granted, you do technically have to have a new variable for that, because maybe you're -- although if you know this ahead of time, you can do 'const b' load this book for this primary key, and then pass your populate hint here as like the third argument to load, and then your b parameter will already be -- it'll have the type overlaid with it. So there's just the normal book type that has a title, and it has comments... But the normal one, you have to load the comments as a promise. When you do this, pass the books as comments, you basically get a type overlaid on top of this, which all it does is add .get methods to the relations. So if you've told it that you know you want the comments now, when you do book.reviews... Or actually, since you've told it you want previews and comments, you can now do book.reviews.get. So you do book.reviews.get, no promise, sub zero, it's just a regular array, and you could do comments, and then you could do -- and so now this comments is no longer just a... Comments would be a one-to-many, with a load. But we've added to get overlaid on top of the type, that we've added the get method to the comments property. So now instead of doing comments.load and waiting that, you can do comments.get.length, or whatever. So it's added a bunch of getters that are synchronous into what would otherwise be relations that you have to .load and wait for. I don't know if that was maybe what you were asking.

**Nick Nisi:** Yeah, yeah, I think so.

**Kevin Ball:** So the relations themselves are an object, and to access the underlying array, if it's a one-to-many, or something like that, you use either .get or .load on await.

**Stephen Haberman:** Right. Which I think has thrown some people off ergonomically with Joist. Like, they would expect "If I take a book, and I've got the book reviews", they want the book reviews to be like literally an array of book reviews. And to your point, no, it's not actually that. For book and book reviews it's a -- we call it a property, but it's like a holder of them, that doesn't have them yet. Or maybe it does. Like, if it doesn't have them yet, you have to call .load.

**Kevin Ball:** Right. But that lets you abstract around that.

**Stephen Haberman:** Yeah. It lets us change the type. Because if we couldn't do that, it becomes hard to -- yeah, book.bookreview would like sometimes be just an array, because you know it's a memory... But sometimes it's a promise of an array, when it's not. And by making it a property, and it is -- once you get used to it, it just blends into the background... But you do have to do .load if it's not in memory, and .get if it is, and then it's just as if it's a regular array.

**Kevin Ball:** So if it's not in memory, can you do .get and it will forcibly run the async, basically force you to await there?

**Stephen Haberman:** No, it'll blow up and say you can't do that. And the assertion is that that will be a compiler; like, you're never allowed to call .get in a way that would blow up at runtime without being a compiler, or the type system knows it's not loaded.

**Kevin Ball:** Got it. So it forces you to be explicit about when the data is going to be loaded...

**Stephen Haberman:** Exactly.

**Kevin Ball:** ...and not sort of accidentally force synchronization when you don't want it.

**Stephen Haberman:** \[33:58\] Right. Yeah, which works out really well. The thing I love the most about it is that it's orthogonal to the N+1 prevention. So I think in a lot of ORMs this whole thing of like "Well, populating so you can do the .get" is super-ergonomic, which is great, but you have to do that to get N+1 prevention. You have to tell the ORM upfront that you want three levels of things. But with Joist, you can still do that; you can still use populate hints to get .gets, and use it in memory, and that's super great. But you don't have to. If your business logic is scattered over multiple functions that get called in a loop, and all of these other sort of things, it's still going to end d N + 1

**Kevin Ball:** Right. Because if you don't do the populate, then you're forced to program in an async style. But that moves you into data loader land, which could do that aggregation for you, and you're golden regardless. That's beautiful. I like that. So that container package where the relation is actually an object wrapping it - is that the same when you're doing like a one-to-one relationship?

**Stephen Haberman:** We have different implementations of those. Our term is just a -- it's a relation, anytime you point to another entity or collection of entities. And so you can have like two categories of relations; some point to a single entity, which is a reference to another entity, and others are collections to other entities. And on the point to one side, you've got either a one-to-many, which is just a foreign key, or a one-to-one, which is an incoming foreign key. And then on the collections side, you can have one-to-many, or many-to-manys. So yeah, we have four or five implementations of each of those things that know how to have get methods if it's in memory, and if it's not, you call load... They each have their own data loader implementation, because to batch many-to-many is slightly different than batching one-to-one, which is slightly different than batching each of these. So they each have their own data loader implementation that will do the N+1 prevention.

**Kevin Ball:** Cool.

**Break**: \[35:50\]

**Kevin Ball:** Can we talk now a little bit about how you enable putting business logic in? And I thought it was interesting looking at what Joist does compared to Active Record, where you want your ORM to be able to keep up with data migrations, right? Table changes, things like that. And in the Active Record world, this is all done magically behind the scenes; you don't see it. Whereas if I was understanding it correctly, in Joist you actually have a sort of generated class that is visible, that presumably I don't touch, because you're going to be modifying that to keep up with data. And then you have another class that is where I can put my custom logic. Is that right?

**Stephen Haberman:** Yeah. 100%.

**Nick Nisi:** I was gonna say, that might relate to a question I had, which was how you define those relationships.

**Stephen Haberman:** Yeah, we can cover both. So the relationships, at least all of the ones that we've talked about, are defined just - they're foreign keys. And so Joist will look at your database schema - which is also what Active Record does; we'll get to, Kball, your point... But yeah, so we have a codegen step, where we look at the database and all of the tables, and pull in foreign keys and figure out pointers, and those sort of things.

\[37:55\] And then yeah, we generate two -- there's two files. So there's an author.ts, which we will create once, and then never again, so it's safe for you to put stuff in there... But that author.ts extends in author codegen, which has all of the just super-mirroring your database, of like getters and setters for first name, getter and setters for last name... But also for these relations. And author codegen is where -- like, we know books is a one-to-many, but author has a publisher, so that's a many-to-one. And just all of those things go in this author codegen class, which - I think we could check it in, actually... But it's generated code; you're not supposed to touch it, so you don't have to. And every time you run your database migrations, you run your migrations and then you run the codegen step, which makes these author codegen and book codegen, and book review codegen exactly match your database schema.

You mentioned Active Record - that's actually extremely similar to what Active Record does. It's just that we do it as an explicit codegen step, and they do it when your Ruby process boots.

**Kevin Ball:** Right. Yeah, they're doing it at runtime, and I never see that code.

**Stephen Haberman:** Yes. Right. And we do it at codegen time. So there's a slight assertion that if you change your migration once, and then you're gonna run your test loop 50 times, moving the schema and all of that stuff to happen only once would more ties to cost potentially. But the biggest reason we do it is just the TypeScript can see it.

**Kevin Ball:** That's what I was gonna guess. You get types available to a compiler. They do not.

**Stephen Haberman:** Yes, 100%. That's 95% of why we do it. But yeah, and so - just to follow on that a little bit, the author codegen always exactly matches the database, but the author, to go back to Active Record in like 2008, when you pop open an Active Record, you class-author it and like that is it. Versus all of the Java Hibernate, whatever annotations and gyrations you have to do compared to today, it's just magical. And so that's what Joist provides, tries to mimic.

But then that author.ts - yeah, it gives you a place to add business logic. It lets you add other getters and setters that are built on top of the other ones, or other relations that are built on top of the other ones, or validation rules, or lifecycle hooks, and all of the real meat of your domain model, separate from the boilerplate of what my getters and setters are.

**Kevin Ball:** Can you quickly go into what are the lifecycle hooks that you expose, and how they interact with your validations, and other pieces?

**Stephen Haberman:** Yeah, sure. So let's see... I think we only have three or four. So before flush, we should start with before create, and before update. So before create only runs on creates, before update only runs on updates; before flush runs on either. So maybe a business logic that wants to run on either create or update. And then we have before delete. And then I think we've got like an after committed, which the idea there was okay, after I commit, I want to make a wire call to another system, but I need my primary key to be set first before I make a wire call, some of these things. We don't use after committed very often, but I think we've got that. And there might be one other one... But really, the meat and potatoes is before update, before create and before flush.

And we also have validation rules, and the difference there is that -- so the lifecycle hooks can have side effects, like you're allowed to, in an author before create be like "Oh, fuck, I want book by default", or something like this. Or you can tell that I already have some books, but I need to auto publish them, or I don't know, whatever your business logic is. Then the validation rules - those don't have side effects.

So we use a unit of work pattern, which also throws people off a little bit, like it's a little bit different... Actually, that is where we depart from just being an Active Record clone, is in Active Record you'll do things like author.save, and it literally does a SQL there. Or author.update, and it literally does a SQL there.

To the point of data loader, we want to wait a little bit anyway, but also, we use this unit of work pattern... It's called entity manager. Again, kudos Micro, because that's what it was called in Micro... But it's basically a per-request cache of data you've already got from the system.

\[42:08\] So if you go back to the old days of the hibernates, and these sort of things... Like, caching was a really big thing, but they would do like caching like at the machine level, or the process level, and all of a sudden you have to worry about staleness, and all of these other sort of things... And that's just too hard for me to really be excited about. And so Joist right now doesn't do any sort of process sort of cache; it just does per request, which is usually pretty safe. Like, for this request, I've already got this author. And if you have, any changes that you would have made to it would be in-memory. So anyway, why was I talking about the entity manager?

**Kevin Ball:** So do you delay flushes until after you respond to the user?

**Stephen Haberman:** Yes, right.

**Kevin Ball:** That's brilliant.

**Stephen Haberman:** So it doesn't live across requests, but in my save author mutation or endpoint you're going to make an entity manager for this request, and then do a bunch of stuff. You're going to load some authors, you're gonna load some books, and you're gonna mutate some authors, and you're gonna mutate some books, in memory, just by touching the objects. And then when you do emflush, it's like "Oh, let me go diff" whatever you've changed in your domain objects, and figure out "Oh, I should save all of the authors." The really neat thing there is like if you've touched 10 authors, it'll batch those into a save. So it batches saves and updates, just like it does loads.

**Kevin Ball:** That is a very nice improvement.

**Stephen Haberman:** Yeah. Right. I was talking to a friend the other day who was like "Oh, this entity manager thing was a little weird", but then the first time I went to think about like "Oh, yeah, I don't want to have 100 little different inserts." So it turns out that was nice.

But the other thing that emflush does is run our hooks and our validations. So it technically runs the hooks first, because since the hooks can run side effects, there might be other entities that it needs to then hook. Like, if you had an author, and its hook touched a book - well, okay, now I need to loop back around and do the... I don't want to do the author hooks ever again, because then you get infinite loops, but I'll at least do the book hooks again. And so there's this kind of stepwise function where you handle running hooks on anything that might have been loaded by your other hooks. But then once all of that is done, then you just run all of the validation rules as a single -- you know, just one pass, because you're not allowed any side effects, now that all the books have settled down, and we can just validate anything that has changed... Which could be anything from not nulls, to formats of fields, or anything that you'd want to write as a validation rule. Someday we can talk -- or not some day; maybe later we can talk about reactivity. Reactive validation rules. But anyway, I run all of those, assuming they pass, batch your inserts updates and... Bob's your uncles, i haven't said that in a little while, but Bob's your uncle.

**Kevin Ball:** Okay, two questions on that. So one is how do you can make sure there are no cycles, if you're allowing sort of these hooks to update things and generate hooks? I mean, I could write code that creates a cycle, so how do you make sure that doesn't happen?

**Stephen Haberman:** Yeah, kudos to Zack, who wrote this... We just keep track of the entities that we've ran hooks on before. So we do have a loop, but the first iteration of the loop is "Oh, I ran it on these five entities. Put them in a "hooks has already ran", never run them again, and okay, go on to my next, discover any new entities, and if there are new entities, run that on the second iteration." But just keep putting things in the list of "never run the hook on this author again." For this emflush anyway.

**Kevin Ball:** So I couldn't -- if I were to create a rule where I had a hook on authors that updated books, and then a hook on books that updated authors, it would not work as an add; like, the authors one would run, and then the books would update, but then their hook to touch the authors wouldn't?

**Stephen Haberman:** Yeah, the author would not have a chance to respond to whatever the book had done.

**Kevin Ball:** Got it.

**Stephen Haberman:** You're right. So both will run; the author will run, the book will run, but if for whatever reason your author wanted to see the latest changes, then --

**Kevin Ball:** See that change and react to it, they couldn't. Got it. Okay, so that answers one question. The other question I had is - so you're talking about batching... When does that batch go out? Like, does it wait until I've done a user response, or it just waits for some amount of work? What tells the flush that "Hey, I've got enough things to do an actual write over the wire"?

**Stephen Haberman:** \[46:20\] Whatever you in your endpoint decide to call emflush, that's when the SQL calls happen. So it's kind of up to you --

**Kevin Ball:** Got it. So it's explicit.

**Stephen Haberman:** Yeah, it's an explicit call to emflush. It's not like put on the event loop to do -- and typically, we do a lot of GraphQL mutations, and it'll be get the input, load the entity, put the input into the entity, and then call emflush, and then return the results.

**Kevin Ball:** Got it. But you could in some ways, you could start streaming that result back out, and then put the flush in like an after request hook, or something like that...?

**Stephen Haberman:** Yeah, yeah. Yeah. Joist does not have any opinions on when you would start returning data to your users, versus when you try and commit things to the database.

**Kevin Ball:** Do you have visibility into the requests, such that you can catch if there is unflushed changes that are still there at the end of a request?

**Stephen Haberman:** Off the top my head, no. We do have some -- so Joist tries to be, in general, a pretty unopinionated... Well, I mean, it has opinions. But in terms of your APIs; it doesn't really care about whether you're using RPC, gRPC, or GraphQL, or Pacifier, Express, or all of those sorts of things. So I think because of that, it doesn't really have any visibility into any of those.

My one caveat is just because we personally use GraphQL, we've built a fair amount of scaffolding and glue kind of on top of Joist for living in a GraphQL world... But there's a pretty clear delineation between the core ORM that could work with anything, and then our little GraphQL polish, that is pretty neat, but optional on top of it. So yeah, for your musing of drilling into the request - yeah, it would be exercise to the reader, I guess.

**Kevin Ball:** Yeah. Well, so how do you have per-request caching then, if you don't have visibility into the request?

**Stephen Haberman:** In the GraphQL server you get a little hook of making a context...

**Kevin Ball:** Okay, so it's outside of the ORM core.

**Stephen Haberman:** Yeah, yeah. Right. So when we boot up our GraphQL server, it's gonna ask for "A new request came in, and it's a Fastify request entity. How do you want to turn this into a GraphQL context parameter for all of the resolvers to use?" and that sort of thing. And that's where we're like "Oh, okay, this is a new request; let's make a new entity manager." And we put it on the GraphQL context. Fastify lets you put things onto their request, too. Actually, we do that first. So we've got middleware that first sets request.context. Because we do have some Fastify handlers that are not GraphQL... So they also have access to the request context, and hence the entity manager, if they wanted to do anything. But then most of our stuff ends up being GraphQL mutations that then uses that context parameter to get the entity manager out of the request context, and do any loads, or do any saves.

**Kevin Ball:** Got it. So basically, you insert middleware, and that's what sets up the entity manager caches for that instance of the entity manager, go, go go. So you could actually, in theory, at the end of your middleware request, wrapping around on the other side, say "Are there unflushed changes? Maybe I need to throw an error", or something like that.

**Stephen Haberman:** Yeah, actually, the assistant that I did back in the Java days did do that. Our middleware created whatever our version of unit of work was back in the day, and auto-flushed, or auto-committed whatever the -- surely it was hibernate back in the day... But the middleware did it. And our middleware doesn't. I guess I don't have a real good reason for why... But no, yeah, you're right, it could.

**Kevin Ball:** \[50:07\] Nick, I feel like I've been talking a long time again... What's going on? \[laughter\]

**Nick Nisi:** Y'all are going deep...

**Kevin Ball:** Sorry, I get excited about this stuff.

**Stephen Haberman:** Good!

**Nick Nisi:** No, I love it. Yeah, yeah, this is great. You're asking way deeper questions than I know as a casual ORM user that usually just yells at it, but bangs my head against the wall until it starts working...

**Stephen Haberman:** Well, you haven't used Joist then.

**Nick Nisi:** I haven't yet, not. The last one was TypeORM, and that's why I have those opinions, I guess... \[laughs\]

**Stephen Haberman:** Yeah, I was talking to a friend, a mutual friend, who was like "You can't really understand the ergonomics of an ORM until you just use it in hate", or hopefully not hate... But it's hard to know until you get into the guts of whatever you're building, and you're like "Oh, this actually does or does not suck."

**Nick Nisi:** So I guess to take it up a little higher level, as an ORM creator, and just like a user of them too, what are some arguments against ORMs that you've commonly heard?

**Stephen Haberman:** Yeah, sure. I think that -- well, and I'm going to insert my bias into these answers obviously, because I'm kind of an ORM apologist...

**Nick Nisi:** Please.

**Stephen Haberman:** ...but I can think of two things. One is that - and actually, a different mutual friend that we were talking about this the other week is... If you go way back in time, there's the paper from the guy, "ORMs are the Vietnam of computer science", I forget his name... Which made the rounds pre Hacker News. And his a certain -- actually, it's been so long, I forget the assertions of his paper, but it was one of the first ORM pushback things back in the day. And my recollection at the time - and I should go read it - was that if you go back to circa 2000-2005, which was maybe peak ORMs, but also peak ORM hate and kind of pushback... What I saw, the people who hated ORMs - and again, this is where I'm gonna read my bias into it as kind of an ORM apologist - was ORMs would try to work with a database schema that just fundamentally was not great. So circa 2000, whatever, typically you're doing Java Enterprise stuff in the back-office of an insurance company, that has a schema designed in 1970, or something like this, and you're like "Wow, this schema has fields that are like four characters long in all constants", or something like this. Which - that in and of itself was not terrible. But ORMs there in the mid '90s and into the 2000s tried to make their pitch of taking generally bad - I don't wanna say bad; legacy, let's use legacy - relational schemas, and then like crafting them into this beautiful object model that was genuinely different from whatever the database schema was, and patch over the sins of the past, and these sorts of things. And I think that's just hard, and difficult. That's where you get a lot of this mismatch, the whole ORM versus relational mismatch; that's where all of this comes from And I assert that if you don't try to do that, if you just make sure you join companies and jobs for you to greenfield database schema - disclaimer that you can cheat - and I'm certain that object relational mismatch goes away. Because if you've got a nice schema, and you just treat your tables as entities, or even as a little graph... Joist thinks in terms of graphs; it thinks that this entity points to this other entity. And granted, the database nodes are not explicit entities; it's not a true graph, where you can go to a node and put attributes... Or sorry, you can't go to an edge and put attributes on an edge, on a foreign key. But otherwise, you really can't think of the entities in your database as a graph. And at that to me is just kind of this -- if you squint and you look at a relational database, you can squint and see a graph, or you can look at a graph and squint and see a relational database. And look at an ORM and squint and see either of those...

\[54:00\] So as long as you're doing a one-to-one mapping. So as long as you're doing a one-to-one mapping between those domains, I think the object relational mismatch doesn't exist. Maybe that's a strong statement, but at least in the way that annoyed so many people back in the day. So that's one of my big, main assertions as an ORM apologist, is just don't try to do that; don't try to do all of the crazy stuff that they did circa 2000s, of crafting your database schema to be something better and different.

**Kevin Ball:** One of the big arguments that I have seen and been on both sides of in the past was ORMs make it really easy to write non-performant SQL. And I cannot tell you how many N+1 loops I cleaned up back in the day. However, it seems as though you may have solved that with Joist.

**Stephen Haberman:** I was gonna say. Right.

**Kevin Ball:** So that is a big argument in favor, actually. And one of the things -- when I saw what you were doing with Dataloader and Joist... Because to be honest, I looked up Joist this morning, in preparation for this episode... But I saw that and I was like "Whoa, they solved that problem. That's amazing. That's a really, really good."

I do think there is a question around - so one of the things that ORMs do is they push you to kind of make some simplifying assumptions about the structure of tables, and one of the examples is the default, easy way to do it is every table has a single ID, that's a sequence, or an incrementing number, or something like that... And I have seen the argument - and I don't know how I feel about it, but I'm curious your take - that those basically allow you to get away from really deeply thinking about how your data naturally should be structured. Now, my argument is most of the people writing these database migrations are not data scientists or data engineers, and those simplifying assumptions, on average, lead to better data, or better data structures than when somebody is trying to do every custom one... But I'm kind of curious what you've seen in that domain.

**Stephen Haberman:** Yeah, I mean, again, maybe this is just my bias or my background talking, but I'm just so bought into the concept of entities... Like thinking about your domain model in terms of authors, and books, and book reviews, and claims, or whatever domain that you're interested in, is figuring out the logical identities of the entities involved. That's just so much how I think that, of course, I'm gonna just have tables with ID primary keys that match my entities, and that sort of thing.

So I guess - and maybe I guide myself to be working in jobs that do that; like, I'm just building another web backend in my version of Rails, or whatever, that I think it works out really well. I'm sure there are niche use cases out there of -- I do so much OLTP, but like the OLAPs of the world, which are all metrics, and those sort of things... Like, I could see that when you really start caring about storing data in columns, and columnar databases, and all of these - well, although you could maybe represent those as entities... But yeah, I think I can buy that for certain super-optimized niche cases, but I would assert that the benefit of the doubt is on that it's probably empty, and onus would be on the other side to prove why it's not, and they need some sort of esoteric way of storing it.

But the other thing is that if you've got that rationale, then go for it. You don't have to use an ORM for everything -- which was going to be my other point. The other thing that I hear, and often criticism over - and kind of back to your queries - is that ORMs almost always have query builders, and once you start to get to a certain esoteric level of a query builder, that does like aggregates, and group buys, and inner queries, and all of these other sort of things, like, is it really that much simpler than writing SQL? And I agree, it's not.

\[58:00\] So once you've hit a complexity of a SQL query that is like basically doing group buys and aggregates, I personally am not interested in writing a query builder to represent that, especially in a type-safe way... Except for - and I'm gonna say it wrong, but Kysely... However you say that. They've done great. So go use that. Like, if you've got a sufficiently complex query that needs all of these sort of things, get as low to the metal in terms of SQL as you can.

But if I look at the app that we've got in production, probably 90% of our queries and mutations don't need that, and can go through the ORM for super for free data access. And that last 10% - yeah, don't treat an ORM like the hammer that you have to do everything for. For that last 10%, where you need the escape hatch to connect, Kysely, or even just a raw SQL string - that's fine. Take it if you need it. But I think a lot of anti-ORM people see those use cases, and now they're like, "Well, I can't use the ORM for the other 90%", that is just like select star from books, or ideas, whatever.

**Nick Nisi:** Yeah, I think that that's a big touchy point for me, too... When it's like, "I could do this in SQL, and I know how to do it there, but now I have to learn this seemingly esoteric way of doing the exact same thing." That kind of turns me off from it.

**Kevin Ball:** The thing that I love about ORMs, that was one of the reasons I was advocating ORMs in a previous place that was somewhat anti-ORM, is the standardization of lifecycles and validation.

**Stephen Haberman:** Yes.

**Kevin Ball:** Because when you go to raw SQL, or a raw query builder, or something like that, there's no obvious place to put that validation in a way that you know no matter how this thing is being updated, no matter what's going on, we're going to make sure that the things that need to be true or should be true, are true.

**Stephen Haberman:** Yeah, your business invariance. A hundred percent.

**Kevin Ball:** Exactly. And so what an ORM does is it provides a standardized way of representing and talking about and writing invariants that don't live in the database.

**Stephen Haberman:** A hundred percent.

**Kevin Ball:** And that's incredibly valuable.

**Stephen Haberman:** Yeah, I agree. Obviously, I've heard a lot of the feedback and assertions of the subset of the community or the set of the community that likes to use raw SQL. I go to the same thing; where do you validate that your author title is what you want it to be every time you touch an author? And I don't know... Yeah, I miss it.

**Kevin Ball:** Is there anything that we haven't talked about, that you would like to share with folks listening to this episode, whether it's about Joist , ORMs in general?

**Stephen Haberman:** Well, yeah, actually, I was thinking, the one thing that we haven't talked about too much - and we can try and keep it short, because it could get... Well, I don't know if it could get long. But Joist's concept of reactivity, basically. So a lot of what we've talked about in Joist so far is -- I mean, it's cool, but not necessarily novel, per se. I guess a dataloader baked in all the way is probably novel.

**Kevin Ball:** I've found it novel.

**Stephen Haberman:** Yeah.

**Kevin Ball:** The data loader baked in all the way - that's great. I love it.

**Stephen Haberman:** The type marking the collections as typed or not... What's novel - actually, in Micro, I believe \[unintelligible 01:01:03.29\] has a form of doing that now, which is great... He was -- I'm trying to think if I had done a PR to do a version of that in Micro... But I was chatting with a Microbyte, and I took a lot of stuff from Micro, and he's like "I'm gonna take the type hints from Joist and put them in--", which was... The cross-pollination was great. But I believe that kind of the last sort of novel thing that Joist has is the concept of reactive validation rules and reactive derived fields. So what these are is -- so a lot of lifecycle hooks and validation rules by default only run if you're touching the entity itself, right? Let's take an author, and you've got some business rule that the first name has to be this or that, or this or that. But what if you've got a business rule on an author that depends on entities that it touches. Like, I can only have ten books. Or none of my books can be published until I'm published, or until I'm over the age of 18, or something like this. And so Joist has a way of defining both validation rules, and then also drive fields in the database. The quickest one that comes to mind is like author and number of books. Let's say you've got an author search, you want to search a bunch of authors, and one of the things you want to search on is number of books is greater than ten, or greater than a hundred. And you can do that by doing the join into the box, and then doing the sum, and aggregate, and all of that. But a lot of times with these dashboard pages, it's great to just have an int column. I just want an int column in the database.

**Kevin Ball:** \[01:02:28.26\] Yeah, you have a counter cache, basically, that's like caching the count as it --

**Stephen Haberman:** Right, exactly. And it makes it super-easy. And so let's say that we want to do these. So in Joist you can define one of these, like "I'm going to define a number of books", and we take those populate hints that used to tell us like the subgraph of entities to populate so I can get data to them - we take that same concept and we put it into our number of books declaration, and say like "Populate this subgraph of the author, the author and the books, so I can count them, and return ten." And that's all you do. And you're like "Okay, that's great. But what does that get me?" What that gets you is that Joist has the capability to reverse that load hint, and now find any place that would basically invalidate that number, and have it walk back --

**Kevin Ball:** Right, you have a book created; let me go back and load this and update it.

**Stephen Haberman:** Yeah.

**Kevin Ball:** I love that.

**Stephen Haberman:** Whenever a book is created, whenever a book is deleted... Also, in this little reactive hint, you can say like - maybe you only want to count the books that are published, or something like that. Some attribute of the book. And so then if you go back to the book, and only when that attribute changes - like the book moves from published or whatnot... It's like "Oh, I know that the author drive field." Or it could be a validation rule. It depends on this field changing; so I will go find my author - even though he's not loaded into memory yet, I will go load him into memory and tell him to run as part of the emflush. Another big win for the emflush is if you were just doing --

**Kevin Ball:** It will autosave these sorts of derived entities.

**Stephen Haberman:** Yeah.

**Kevin Ball:** That's really cool.

**Stephen Haberman:** Yeah, right. Like, even though you've only loaded the book, and you've only touched the book, you'll get into the flush, and it'll be like "Oh, I need to do these other 20 things."

**Kevin Ball:** That's beautiful.

**Stephen Haberman:** And load them up and tell them to recalc, or revalidate... And that is slick. It's slick.

**Kevin Ball:** That is... Because that allows you to do something we've gotten very used to in the frontend world, at least in Vue and other things, where you're basically creating these declarative interfaces, where you're like "These are the things that must be true. Go and make it so. I don't want to have to worry about them." But doing that at the data layer is not something that I've seen done very often.

**Stephen Haberman:** No. Yeah, the only thing that I can think of that's somewhat similar is like the super-big data guys; if you get into like Materialize IO, they'll sit on top of Kafka queues, and watch for the -- or the other place the is if Postgres ever gets like fully reactive views, you can declare a materialized view. But the materialized view refreshes every ten minutes or so. And there are certain places out there that are trying to get materialized views that incrementally update, and they can tell whatever the components of the materialized view update, and then do incremental updates. Because a full update would be expensive. So Materialize does it, and then people have played around with doing it at Postgres. But other than that...

**Kevin Ball:** But this is at the application layer.

**Stephen Haberman:** Yeah.

**Kevin Ball:** Because there are ways that you can do these triggers within your database, and whatever, whatever... And I don't want to be mucking around with stored procedures in my database. I want application logic that I can test writing my unit tests, and just make it happen. Okay, so what are the limitations on that? Can I bridge through entities? Can I say, "Okay, this entity depends on that entity, which depends on this following entity?"

**Stephen Haberman:** Yeah. Yes. \[laughs\]

**Kevin Ball:** Okay. Just yes. Okay.

**Stephen Haberman:** Okay, only because we do have one boundary case that came up just last week, where -- or maybe it was two weeks ago. We've got it written up -- we've mentioned this difference in Joist between the core database relations of yes'es as a foreign key, yes'es in a many-to-many, yes'es as a many-to-one, right? So you can string together these reactive things with the core database relations, and everything 100% works.

\[01:06:10.23\] You can also go through one of your director relations, where it's not quite in the database -- it's not in the database, but you want to have like number of books depends on... We've got an example of this; number of books depends on the book being public. And that in and of itself is a drive value. But if you put two of these in a row, we've got a bug there we need to go fix. Like, going through and stacking these non-core database things... So just being upfront honest, we've got a known issue with that. But I think that's just --

**Kevin Ball:** That's a bug, not a core limitation.

**Stephen Haberman:** It's a bug. The core model, the core mental model works for anything you can think of, asterisk that guy, that we'll get it fixed here next hack day, or something like that.

**Kevin Ball:** I'm excited to go and build some stuff with Joist now, because I have been looking for a JavaScript or TypeScript ORM that got anywhere close to what I remember from Active Record.

**Stephen Haberman:** Yeah, me too. \[laughs\] The other disclaimer that we should -- we really like tagged IDs. And I don't know if this is -- tagged IDs are awesome. So usually, your entities come out with -- it's an int in the database, and then you expect the author.id to be a number... Our's are strings, and when we need a flag; like, we love that, because you see -- and we put the... Every entity gets a little tag; like author gets abbreviated to A, and book gets abbreviated to B, and these sort of things. And so those will show up in your IDs... Which actually we did selfishly, because we were doing GraphQL, which wants string IDs anyway... And so instead of every time we put an ID on the wire, we're like "int to string whatever" Anyway... So it was just so ergonomic for us to have the ID getters and setters take strings... And then we took that opportunity to sneak in prefixes, which once you -- like, I'm super-addicted to that now. Seeing an ID go by in the log and being like "Oh, that's BR26. I know that's a book review." And it also keeps your IDs from accidentally switching. Like "Oh, I got a response, and I got an ID of two. But then I put it back into the system. And it's technically a book ID, but I put it back into the system as a book review ID." Well, book review two technically worked, and so my foreign key didn't catch it. But if you tag your IDs, Joist will notice that the tag is wrong, and it will blow up at runtime.

I mentioned that just in terms of -- this is a tangent away from if you go play with it; I think most people do probably expect the IDs to be numbers, and we totally want to support that, because it's a very valid way to use an ORM... But I just haven't gotten around to adding that config flag yet, so... Hopefully, you don't mind ID strings, or IDs that are strings. Or if you really don't like it, you can submit a pull request to support the numbers.

**Kevin Ball:** So, question - are they strings in the database level as well?

**Stephen Haberman:** No.

**Kevin Ball:** Okay, got it. So you're using a sequential integer or something, but when you pull it out, you put the tag at the front of it, and that's how it's represented within Joist. Okay. Got it.

**Stephen Haberman:** Yeah, right. I mean, that would be weird, to do strings --

**Kevin Ball:** That was my initial reaction, because like "Wait, is he saying what I think he's saying?" But no, it's -- okay, that's entirely at the Joist layer.

**Stephen Haberman:** Yeah, we do support UIDs columns. If you want to use UIDs as primary keys, you \[unintelligible 01:09:24.25\] so we snuck that one in, but...

**Kevin Ball:** And those are also tagged in the Joist layer?

**Stephen Haberman:** You can choose... You can choose to tag your UID, or you can choose not to. And I guess -- I don't think we give you that choice with just the regular numbers... We definitely don't give you the choice to use a number number. But I guess why not let you use -- technically, it's a string with an untagged number in it.

**Nick Nisi:** I agree that Joist is awesome. I saw you present about it at Nebraska.js, and I'm excited to have an excuse to get away from TypeORM, or to explore more of what's out there.

**Stephen Haberman:** Yeah, for sure.

**Nick Nisi:** I don't have the same history with Active Record, or Rails, or anything like that... Yeah, but it's super-interesting how much thought goes into these, and it really seems like you're doing really well with the ideas in Joist. So I'm excited about it.

**Stephen Haberman:** Yeah, good. Fr sure, go kick the tires, let us know...

**Nick Nisi:** Yeah.

**Stephen Haberman:** We've got a little link to Slack that I think probably works... For a while it did not work, so let me know if that doesn't work, or file an issue.

**Nick Nisi:** Definitely. We will have links to all of this in the show notes... And Stephen, thank you so much for joining us this week. I learned a lot, and I learned that there's a lot that I don't know as well.

**Stephen Haberman:** Oh, no, thanks for the invite. I had a ton of fun. That went really well. Kudos for driving the agenda really well, with great questions. I loved them.

**Nick Nisi:** Well, let us know what you think --

**Kevin Ball:** This was delightful. Thank you for putting up with my interest in diving down into weird niches.

**Stephen Haberman:** No, no, it's great.

**Nick Nisi:** Yeah, it was a fun conversation. Alright, we will see you next time.
