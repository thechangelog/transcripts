**Jerod Santo:** So Johannes, we last spoke with you about a year ago all about GraphQL, why it's so cool and why everybody is getting excited about it, yourself especially - super stoked about GraphQL... And that was a great intro to the technology, and to its possibilities, and so if listeners want a full deep dive into GraphQL, go back and listen to episode 255, which is in the show notes. But for those who didn't hear that episode, why don't you give us the high-level explanation again of what GraphQL is, why it's taking the industry by storm, and then we'll move into Prisma after that.

**Johannes Schickling:** Awesome, that sounds good. Yeah, it's great to be back on the show; fantastic shows over the last couple of weeks, so I'm super excited to be back. A quick recap of what GraphQL is... Even though we are living in our GraphQL bubble, and it's growing, the majority of the people still don't know what GraphQL is.

**Jerod Santo:** Definitely.

**Johannes Schickling:** GraphQL is mostly -- typically, front-end developers get excited about GraphQL first, because it really solves one big problem for them, which is basically how they get data into their client applications from an API. Still the status quo today is that you'd be using REST APIs, and with REST APIs you'll sort of have like this fixed structure of the kind of data you can get back. So you have typically this REST endpoint where you have like a get endpoint where you say "Hey, give me all of these posts", or "Give me all of these comments for these posts", and you just get back a fixed structure and you have to know about all of these endpoints.

GraphQL turns the entire thing a bit around, where the front-end can basically tell the back-end exactly what sort of data it needs. Within an application, you can tell the database what sort of data you need back; with a SQL query, think about the same concept for your front-end application, that your front-end application can say "Hey, I'm interested in this sort of data", and the back-end gives you exactly that kind of data back that you need, and that solves all sorts of problems. For example, you do just one HTTP request to your back-end and you get all the data that you need, and also, you don't need to do n+1 queries on the front-end where you say "Give me all the posts." It's right on the front-end, over the posts, and you get then back all the comments... So all of that just happens in one. That's sort of the biggest win that you typically get from GraphQL.

\[04:19\] But the thing that I'm actually most excited about is the tooling that GraphQL enables... Whether that's being a GraphQL background, or that GraphQL maps to typed programming languages. There is so much awesome tooling that gets enabled for GraphQL, which is I think overall what gets people more and more drawn into GraphQL.

**Jerod Santo:** Yes, and I think GraphQL, like you said, makes immediate sense, and it excites front-end developers quite a bit, because it really puts the power back into their hands, to craft the exact data that they need, when they need it, and not have to deal with (I guess) somebody else's idea of what server responses should look like.

**Johannes Schickling:** Exactly. The point that you just mentioned, that it puts back the power into the hands of front-end developers - that's actually one of the biggest reasons why not just one developer decides "I wanna use GraphQL"; it's like the newest technology, but it's also why you would decide on a company level, why an executive team would decide "We're using GraphQL", because it just makes your development team so much faster by giving that power into the hands of front-end developers, and the front-end developers are more decoupled from the requirements of a back-end development team. And on a company level, that's the biggest win that you could get.

**Adam Stacoviak:** What does it take to get GraphQL in place? Is it an API? Is it a server? Front-enders typically don't have access to the infrastructure, so how do they get access to this tooling?

**Johannes Schickling:** I'll give you two answers to that... One is a more classical setup would look like this - you have your GraphQL client in your React application, or whatever you have; your client could also be a native application. Then you have a GraphQL server. So you have these two parts, basically.

The point of a GraphQL is that you have a more native GraphQL integration into whatever client-side framework you're using. For React, that's really nice, because you can basically map the data requirements of the React components directly to a part of the GraphQL query... And the GraphQL clients then - for example Apollo client or Relay - then takes care of merging all of your data requirements of your current view together in one big GraphQL query, and sends that back to the server.

The server is typically implemented with a concept that's called resolvers. Think about it like a collection of functions, and each function maps to a certain field or piece of your data structure that you expose. For example, you have a user entity, and the user entity has a field called "Friends" - then you'll get a function that's called "Friends", that gets automatically called whenever the client is requesting the Friends. So on the back-end your job is to implemented these resolver functions and make your GraphQL server work. That's the most traditional setup.

\[07:48\] What we've actually found is - like you mentioned, it's quite big of an investment for a company to establish new infrastructure, especially for front-end developers; they typically don't have maybe the abilities, or they don't have the permissions to spin up new infrastructure. So what we've seen - a little trick to get GraphQL adopted in your company is basically that front-end developers would implement this GraphQL server not as its own infrastructure component, but sort of like as a little thing that also lives in the client.

So they basically implement these resolvers in the client, and in the client you would then map to another REST API or wherever you get your data from, and this way basically in the client you have these two layers... One, you have this virtual GraphQL server, and then you can basically use GraphQL as it would be implemented as an actual server, and you get all of the benefits in the client.

So what we've seen from companies is that they maybe don't get direct permission to say "We do GraphQL." The front-end developers want it so bad anyway, that they just jump through this extra hoop, then go to the management team and say "Hey, we told you we could get rid of all of our Redux boilerplate. We're so much faster... Please tell the back-end team that we finally want this", because if you make its own infrastructure component, you get still a lot of performance benefits. Obviously, your API server should be as close to the database as possible etc., but you could still prove your points through this... And this is a pattern that we see in a lot of big companies.

**Jerod Santo:** Wow. Two thoughts on that. The first one is some people must be desperate for getting some GraphQL, because that is a lot of extra effort, I think, to implement a GraphQL proxy inside the browser, so that you can speak to that and convince your boss.

And secondly, when you finally convince management or your server-side team or whoever it is to implement it on the server, that has to be like the most epic code deletion day of all time... Like, wouldn't you just throw a party? Like, "We get to rip all of this code out of our client now, because it all just exists server-side."

**Johannes Schickling:** Yup, for sure... But the exciting thing about that is since GraphQL -- most of the early GraphQL adoption happened in JavaScript, even though GraphQL is not widely spread in any language community... But when these front-end developers want GraphQL so badly that they build their own server, they use the JavaScript implementation of GraphQL, and very often you would then also build this actual GraphQL server later on also in JavaScript.

**Jerod Santo:** Code re-use...

**Johannes Schickling:** So it's actually not that much of a rebuild, but -- yeah, like you say...

**Adam Stacoviak:** Like a move...

**Johannes Schickling:** You just take the server, you move it into a different folder or repository, wrap a little HTTP server around that, and you're good.

**Jerod Santo:** I would feel even better, because on one side you're deleting a bunch of code, and on the other side you're getting a bunch of free code because you already wrote it, and it just needs to be tweaked for that environment.

**Johannes Schickling:** Exactly.

**Adam Stacoviak:** It's certainly a forced hand, because you're doing it in the prior, and then you succeed by getting people to realize that you do need this, and you just have to move it into its proper place. It's a true hacker way, for sure.

**Johannes Schickling:** Exactly. And it already gets you in this right mindset that you can basically build your back-end in such a layered way. You can think about "Okay, this GraphQL layer - I can put it wherever I want, and wherever it makes sense in terms of like responsibilities and ownership inside of a company..." Should that be owned by the front-end team, should that be owned by the back-end team? Also - we sort of mentioned - with performance in mind...

For example, it's also with things like Cloudflare -- what is it called, Cloudflare Functions or Lambda@Edge -- it will be possible to run basically API servers at the edge. So there are a lot of exciting opportunities where you would put actually your GraphQL server.

**Jerod Santo:** \[12:21\] This is such in the spirit of open source... Don't ask for permission, right? You get your job done, and you bring these tools in... This is how open source has spread into corporations for years; it's not top-down, some management person saying "We're gonna use this open source technology", it's some engineer using the best tool to solve their problem, and then later on the team finds out "Oh, you've been using Perl to write all these automation routines for all these years...", or whatever it happens to be. hat's awesome, that people are wanting it so bad that they just go out and show its value.

Johannes, as you said earlier, you're kind of inside the GraphQL bubble. Adam and I are staying outside the bubble; we poke it every once in a while... But you have access to that community, so tell us - since last year, when you first talked, what's new in GraphQL? What does the ecosystem look like? What has changed? And I'd also like to know what are some public playboxes or sandboxes people can use - aside from GitHub, which is the big one that I think everybody knows about - where they can go and use a GraphQL API.

**Johannes Schickling:** Sure, so I hope that the next time we are speaking you're part of the bubble, and the bubble is no longer perceived as a bubble.

**Adam Stacoviak:** We hope so as well.

**Johannes Schickling:** \[laughs\]

**Jerod Santo:** We're trying to get into the bubble... We're trying to get in.

**Johannes Schickling:** So I guess you're mostly in the Elixir spheres, which actually has quite good GraphQL support... But regardless of which language you are using, there's pretty decent GraphQL support for that right now, on the server and on the client, so that shouldn't be a problem.

So what has happened in the GraphQL ecosystem - what gets me super excited is the community has just like exploded, and pretty much any company that we are talking to, we don't need to ask them anymore whether they have heard about GraphQL; we'll rather directly ask them how far they are with their GraphQL adoption.

It's now a rather rare case that we talk to a company and they don't start adopting GraphQL yet. You've seen it with recent announcements of Medium, for example, to moving over to GraphQL; you mentioned GitHub - GitHub is actually investing a lot into GraphQL right now, and they wanna help more people to learn about GraphQL, they really invest a lot into evolving their GraphQL API, to build tooling around that... All of that, all of the ecosystem and the adoption has been just awesome.

Another indicator for that is, for example, the GraphQL Europe and the GraphQL Summit conference - the GraphQL conferences have doubled in size over the last year. We see tons and tons of meetups all around the world, helping people to get into GraphQL.

What we really see is that this is just like the natural companion for React... So whoever builds a new React app, for them it's almost natural to build a GraphQL server for that. That's super exciting.

\[15:58\] On a more technical level, I think the last time we spoke GraphQL Subscriptions was fairly new. On a technical level there are a couple of exciting new things in GraphQL since then... For example the concept of live queries, which is another real-time way of accessing data; it's seeing more and more traction in GraphQL.

Also, a pretty big topic is the idea of schema stitching. Schema stitching is such a broadly applicable topic around GraphQL that really fulfills one promise of how APIs can talk to each other. The idea behind schema stitching is basically that you can 1) split up your back-ends into multiple parts, and then join them together. Since every GraphQL server - for those of you who don't know GraphQL, what's special about the GraphQL API is that it has a schema, and therefore it's typed. Similar to maybe, as you know, in Swagger or OpenAPI you have a Json shema you can define -- GraphQL provides something like that, but a lot simpler and a lot more intuitive, in my opinion. Basically, each of your GraphQL API is typed, and that means -- it's similar to how you have a programming language and you have a library, and that library has type definitions and you can join things together; you can now do the same thing for your APIs.

Let's say you have a microservice setup and you've split up your back-end into different microservices - maybe a microservice for users, and messages, and posts... You can basically now have a gateway layer in front of that that joins all of that together in one GraphQL API. So you have a GraphQL API for your users and your posts, and the gateway basically just says like "Okay, every user has posts", and it just joins the schemas together. You can compose GraphQL APIs and they snap together like LEGO bricks. That's such a powerful concept that GraphQL provides you there, since it allows you to split up things, it allows you to reuse APIs...

You can, for example, take the GitHub GraphQL API and simply put that into your own GraphQL server and just delegate to that other part. It really allows you to reuse APIs at a level that was not possible before, and it also sets the foundation for service-to-service communication...

**Jerod Santo:** I was just gonna ask that. It seems like the next move then. Since so many of these services speak over HTTP and REST, it makes sense that if you're exposing these GraphQL APIs and you're maybe even stitching them together, that all of a sudden maybe this is even a better way to have our microservices or our services - depending on the size of the service - talk to each other.

**Johannes Schickling:** Exactly, and this is where the ideas of GraphQL bindings come into play. With schema stitching and GraphQL being such an approachable language... And the best example really for why it's so approachable is that even front-end developers start building GraphQL servers. That means now something like that service-to-service communication where typically you think about expert developers who know how to deal with protobuf - you can now basically do the same thing with GraphQL, with the same type safety, with the same efficiency, since you can actually under the hood map from GraphQL to a more efficient format, not just HTTP and JSON; you can map that to protobuf or to msgpack, but you can still apply the same simple and fantastic tooling from GraphQL for any sort of communication.

\[20:16\] For the people who are particularly interested in GraphQL or who wanna push a certain part of GraphQL forward, since about half a year ago there is this thing called the GraphQL Working Group, where basically people from Facebook, from us, from Apollo, from different companies who are driving GraphQL forward, and also who are just GraphQL adopters... So you have people from Atlassian, Twitter, and tons of different companies coming together in bi-monthly meetings where we just discuss certain in-depth questions around GraphQL, around its type system, which features to add etc. This is something that really has driven GraphQL significantly forward, and making sure that it stays a healthy language and can be adopted from every different angle. If some of the listeners are interested in getting more deeply involved there, that's certainly a great place to get involved.

**Break:** \[21:36\]

**Jerod Santo:** So let's talk about Prisma now, which is very much on the server side or the implementation, the provider side of the GraphQL conversation, providing tooling around that... Johannes, you describe it as a performant open source GraphQL ORM layer, doing the heavy lifting in your GraphQL server. This is your baby, Prisma, and it's open source. Tell us all about it.

**Johannes Schickling:** Alright. So just a couple minutes ago we heard about how it works on a high level to build a GraphQL server, and it's basically all about implementing these resolver functions. What you do in these resolver functions is basically mapping from some sort of data source to the abstraction that your GraphQL API gives you. If you think about what implementing an API typically is, it's exactly that - typically mapping from a database to your API; mapping the data from the shape of how it's stored in your database, typically in a normalized way, or if you're using Mongo, mapping from some sort of document representation to what you wanna return with your API, and doing that mapping. This is what we've seen like what takes up 80% of the code of a typical GraphQL server implementation, and also that's typically the part, as you evolve your application, that's the most error-prone to evolve and to change.

\[24:21\] So what we've basically done with Prisma is we wanted to simplify that part, of how you map from a database to your own GraphQL server. The way we do that with Prisma is actually leveraging the idea of schema stitching. The way we do that is we actually turn your database - any kind of database - into a GraphQL API, and now we can use the idea of schema stitching to basically reuse these parts that abstract away your database to implement your own GraphQL server.

So you get like little GraphQL building blocks for your database that you can now use to implement your own GraphQL server. In other terms, Prisma is sort of like this glue between your GraphQL server and your database. That's the high-level idea of Prisma, and therefore you could call it like a GraphQL database gateway or proxy, or like this data access layer.

How we've thought about that is that whenever you're looking at any sort of bigger project, you either have an ORM layer, or if that's not a typically an ORM layer, it's limited in some capacity... So it either works fairly well as you get started with development, but then as you roll it out into production and you hit a certain scale, the performance just sucks, because ORMs typically -- yeah, it just gives you an API to express your data requirements, and that turns then into a typically unoptimized SQL query, which works well throughout development, but then breaks down in production.

The second problem is that typically these ORMs are like a leaky abstraction, so they don't really provide you all of the capabilities of a database, and you have to drop back to raw SQL. So if you don't use an ORM, what you typically do in bigger projects, in bigger companies, is that you create this notion of like a data access layer, or a data access object, where in this abstraction you start implementing your database access and you implement little functions that return to like "Here, give me a post" or "Give me the entire object graph that I typically need for a post."

All of this logic we've basically taken away and made its own infrastructure component as a data access layer, and with the power of GraphQL schema stitching, you can basically now use that and split up your GraphQL server into layers and access your database through GraphQL or through the ideas of GraphQL bindings, which basically maps a GraphQL API directly into your programming language.

**Jerod Santo:** \[27:45\] Well, Prisma has very good timing I believe, for us, because as you alluded to earlier, Johannes, we've been toying around with the idea of a public Changelog GraphQL API around our news and around our podcasts, and we are running Postgres on our back-end... My first step towards that was to try a tool called PostGraphQL, which I believe has been renamed to PostGraphile... Which is a very interesting project that will introspect your database schema, and then basically immediately provide for you a PostGraphQL API based specifically on that current schema... Which I got up and running very quickly, and it was very cool to just poke around at our own database via PostGraphQL.

Where that project seemed to stop - and I could be wrong, because maybe I didn't dig deep enough... It was basically done. It seemed like if I wanted to change the responses and the schema structure of what I'm exposing, I was supposed to change my database to reflect correctly... And I know there's some tooling around limiting certain aspects, but... It sounds like Prisma is kind of that, where you're providing that layer, but then, like you said, it's the glue, so then you're writing also a data model or something, you're basically molding it to look the way you want. Am I following you? Is that right?

**Johannes Schickling:** Right. A couple of points here to unpack... Maybe to quickly also compare PostGraphile and the approach we're taking with Prisma... In general, these projects are fairly similar, but the ultimate goal is a bit different. For PostGraphile - this is really just built around Postgres, and the idea is whatever you wanna change, you have to do natively in Postgres. So if you wanna change something, you have to use your current migrations that you would already do on Postgres, and that would then reflect back in your GraphQL API.

**Jerod Santo:** Exactly, yes.

**Johannes Schickling:** With Prisma we have a bit of a different perspective on all of that. What we for example see is that today you would no longer just have one database in bigger projects, but you would actually -- one of the last shows was about Elastic, and we spoke about the differences, when you would use Postgres, when you would use Elastic... There are so many specialized databases which really shine at one particular task. For Elastic, that might be aggregation or full-text search; for MySQL, Postgres - this is like the more relational model, but you also have Cassandra, which is really highly transactional and scales horizontally...

They're specialized databases for certain scenarios, for certain types of tasks, and what typically happens then is you would actually combine multiple databases in one project. So you would store maybe the bulk of the information in Postgres, but also some information in Elastic, and some information in Cassandra or on Redis.

Our goal with Prisma is really having this universal GraphQL API in front of all of the databases that you use for a project, and you get one GraphQL API for that... Your data model joins across your different data stores. That's rather like how we see things a bit differently with Prisma. There's a whole rabbit hole to go into just around that topic, since we've put a lot of thought into surfacing the specifics of a certain database type into its GraphQL API. We'll have basically multiple categories of GraphQL APIs mapping to the different categories of databases you have.

\[32:13\] For example, a relational database will have a different GraphQL API exposed, compared to a graph database or compared to a key-value store. So all of that is actually represented in its own open source specification called OpenCRUD. You can find that on opencrud.org. This is like an open source project that's just concerned about how you would expose a specific kind of database most efficiently in a GraphQL API. That is one part of it. There are two more thoughts on this.

The other is with Prisma we don't just expose your database through GraphQL, but we also use GraphQL for the second part, which is GraphQL also gives you this beautiful language called GraphQL SDL (Schema Definition Language) which is a very concise way to express a type system... So to express enums, type definition, interfaces, unions and all of that. That's a super nice syntax, maybe comparable to how you do type definitions in TypeScript, or Swift, or Go.

You can basically now use that to describe your data model, and you can then use Prisma to either map to an existing database, like in your case, where you have an existing Postgres database, or if you're starting out from scratch, you can use this GrapQL SDL and you use Prisma -- Prisma actually lets you migrate your database just giving your data model representation. So Prisma actually does the heavy lifting of migrating your database, and creating joint tables, and all of that. So Prisma leverages GraphQL 1) to let you read and write your database through GraphQL, but also it lets you use GraphQL SDL to describe your data model and to help you with database migrations.

**Jerod Santo:** Wow.

**Johannes Schickling:** Yeah, these are basically the ways how we think about Prisma. And coming back to your previous point about that you can basically mold your schema in such a way that you want - again, there are two ways how you could use the GraphQL API that Prisma generates for you. So in simple cases, or as you might be just toying around and you build a prototype, this is where you could actually just use the GraphQL API that Prisma gives you directly, and directly start using it from your front-end... But as you add more business logic to your application, this is what you would want to have in a separate layer; this is where you would build your own GraphQL server and you would use the GraphQL API that Prisma gives you as building blocks to build your own GraphQL server.

In your resolvers, you can basically get rid of your giant\] SQL queries or whatever you have in there, and use a so-called GraphQL binding that allows you to delegate to the underlying Prisma layer.

**Jerod Santo:** You may have lost me on that last point - use a GraphQL binding to delegate to the underlying Prisma layer... Can you unpack that?

**Johannes Schickling:** \[35:56\] Oh, for sure. Imagine you have a -- and all of that is fairly theoretical right now, and the best way to really look at that is by looking at code; then it gets immediately clear.

**Jerod Santo:** Yeah, true.

**Johannes Schickling:** Let's get back to the point where you need to implement your resolver. Let's say you need to implement a resolver on the root level, that returns the feeds of your posts. Let's say you build an Instagram, and you need to return a feed that returns you an array of posts. In that function, you would basically now need to return all -- without Prisma, you would now need to go to a database, get all of the data that you need there, and then also conditionally, on what the client's query is, you need to also say... Maybe for the feed, for each post, they also want to have the comments, and the author information. Now you need to implement basically resolver functions for all of these different possibilities.

If you're using a GraphQL binding and you use Prisma under the hood, this is basically where you just provide the entry point to say like "Hey, let's return these posts here", and you then just delegate to this next GraphQL layer, and if the client happens to also query information about the author, or information about the comments, the Prisma layer takes care of all of that resolving, and you just need to implement this entry point, this sort of delegation part that forwards the query to the database layer.

**Jerod Santo:** What if I could just think about my server the way that I want it to work, and then Prisma could just do the rest from there? Because it sounds like you're taking care of most of the work already; why not just go the extra mile, and I could just tell you how I would like it to look?

**Johannes Schickling:** To a certain extent, that's exactly how it works... Basically, Prisma takes care of all of your data resolving and data mapping. The same way as an ORM is supposed to, through GraphQL we can leverage more information about -- we know what a client would query, we know exactly the type of information, so we can implement that very efficiently. But all the business logic that you want to implement - you would still handle that in your own GraphQL server... Such as authentication, authorization, actual business logic, like sending an email or processing an order - this is still what you take care of, but we make the data access extremely simple.

**Jerod Santo:** You mentioned that some tools around these things can create sub-optimal fetching or querying, or whatever happens to be... The generator has a generic abstraction, and so the specific scenario of this particular use case cannot be optimized... So with Prisma, is it hands-off so far as, like, can I tweak things when I know more than Prisma can now with regard to performance, or how a certain data structure should be fetched? Or is it all too far away to touch.

**Johannes Schickling:** Sure. So there is a way to also drop back to the raw database access under the hood if you really want that, but in most cases this already gives you -- there are two things to consider here. One - is it the kind of data that you want to get back? That is one scenario, and Prisma already gives you the abstraction that you want there. The second point is about implementing things more efficiently, and this is exactly one of the core things that Prisma does for you that wouldn't be possible with a traditional ORM.

\[40:05\] A traditional ORM is like a stateless function that gives you a DSL to express your data requirements; as you collect your data requirements, at some point you say "Execute", so it builds up a SQL query, it compiles your data requirements from your DSL into constructing an unoptimized query, it sends that query to your database, and the database now has to deal with your crazy query...

Whereas with Prisma, you would basically construct all of your data requirements through your GraphQL resolver system and just forward into the Prisma layer, and the Prisma layer has then a query engine that can most efficiently talk to your database or to different databases... And also, since it knows about how data is changing, actually has a caching layer built in. So it's a way more performant way to access your data.

**Jerod Santo:** When you and I were discussing these possibilities earlier on, you said "Well, if we supported Postgres, you could use Prisma..." It sounds like I've procrastinated myself into support now, because you've listed MySQL, Postgres and MongoDB currently supported, and then coming soon, ElasticSearch, Neo4j, Cassandra, and an icon that I'm not familiar with; maybe that's Cassandra's icon. Is that the current state of affairs, and can I use this with my Postgres database today?

**Johannes Schickling:** Exactly. So for the Postgres database we are supporting -- we distinguish between an active connector and a passive connector. The active connector is where you would use GraphQL SDL and allow Prisma to migrate your database, whereas a passive connector would be that you map to your existing database and you would still migrate your database on its own. So for MySQL and Postgres, we both support an active and passive connector, and for MongoDB we're about to roll out a beta version of I guess both an active and a passive connector.

Over the coming months, depending on user feedback, we are planning to add support for any kind of database, really.

**Jerod Santo:** So did I hear you correctly - regardless of how you use the active or the passive adaptor, I am still going to need to migrate my database to a new format?

**Johannes Schickling:** No. So for the active connector there you would let Prisma migrate your database. For a passive connector, the way you would set that up - concretely in your case, you would basically connect Prisma to your database, Prisma would for the first time introspect your current database schema, from that it would generate a data model expressed in GraphQL SDL that maps to your existing database schema, and from there on you can either let Prisma take care of migrations in the future, or still migrate yourself, and you would then still adjust the data model expressed in GraphQL SDL.

**Jerod Santo:** What about concerns with authentication and authorization? We often think about authentication, but authorization turns out to be a much hairier issue, business logic-wise. How are those things handled?

**Johannes Schickling:** \[43:57\] The way we think about that is that authorization is very much -- of course, there are common cases, but very much that's very specific to your product that you're building, to your company... So the best abstraction to really express that is code, especially if you have already built libraries around that... So that's just the best abstraction. We want to embrace that. So the way we allow you to do that is that you would implement that authorization system in your own GraphQL server.

So you would still use Prisma to resolve your data, but you would check who's allowed to access which kind of data in your own GraphQL resolver layer. The same goes for authentication - you would implement your authentication system using JWT, or whatever you wanna use, in your own GraphQL server, that sits in front of Prisma. Then Prisma doesn't need to know about authentication or authorization.

Of course, Prisma on its own has also a simple authentication system, but that's rather meant for that the service cannot be accessed in an authenticated way... So more to secure the service-to-service communication.

**Break:** \[45:29\]

**Adam Stacoviak:** Johannes, we've been talking around obviously the tech behind this, Prisma, where it's going, but it seems like there's an enterprise being propped up behind this. You've got some news you're coming out with very soon, and a company, it sounds like... Going from just simply open source to a company behind this called Prisma as well. Is that fair to say?

**Johannes Schickling:** Yeah, I guess so. We have quite a bit of history, and I think adding up to where we left off with the last episode, we've been super fortunate to build a really big community around us and what we've been doing over the last few years, building up GraphCool as a GraphQL back-end as a service... And that has really led us where we are today.

To kind of like give you the quick version of how all of these things have evolved, basically we've built GraphCool to really make the barrier to entry for developers - especially front-end developers - to get their own GraphQL back-end as low as possible. Over the last few years we've basically seen a lot of big companies and a lot of more experienced developers also adopt GraphQL and adopt GraphCool, and push GraphCool really to its limits.

\[48:06\] We added more and more features, we added more and more abstractions to make it more powerful for people to build bigger applications with GraphCool, and what we've seen is the experienced people are more and more looking for like how could they bring their own code to implement the business logic that they wanted.

On the other side, what we've also seen is the more serious a company was, the more of a problem it was for them to have data living anywhere but inside of their cloud or on their premises. We got requests like, "Hey, could we run GraphCool on our own? Could we just use the database part of GraphCool for our project?" and that has really been the foundation for Prisma...

We've seen that, okay, GraphCool consists of multiple pieces, and the core part of it is really this data mapping unit that maps database to a GraphQL API. That has really pushed us to say, okay, let's actually invest in that particular part of the GraphCool framework, which is Prisma as the core query engine. That sort of like resulted in this shift of focus for us, even going so far that similar to how other companies have done in the past, like 10gen for example changing to MongoDB, with the core product being MongoDB... We took this big step and rebranded the company and all of the community and everything around that from GraphCool to Prisma to really show our commitment and show our focus for Prisma.

And there are various angles to that too, to explain it, but that's sort of the quick version. Like you teased, we actually have some quite exciting news for us as a company, as we've been very fortunate to have raised a pretty substantial seed round. We've just raised a 4.5 million dollar seed round from some of the best investors out of Silicon Valley, where we are just about to open a second office... And that just allows us to really grow the team, grow the back-end development force behind that, and it allows us to also grow the new San Francisco office. So if any of the listeners are looking for a job and are interested in GraphQL, definitely go to our Jobs page.

**Adam Stacoviak:** So Prisma is an evolution of what you've learned or what the community has asked for around GraphCool, and is also a company... So not only open source, but also a company. You've got cloud coming, you've got an enterprise coming, and you just mentioned you've got a seed round, so clearly you're heading in the right direction in terms of -- what I think is kind of interesting around open source and combining that with business is that some will offer support, or services... In your case, you're adding cloud infrastructure and potentially software as a service as the for-profit business model on top of your open source. Is that right?

**Johannes Schickling:** That's almost right. For us, the focus on the monetization front is really where we see the biggest demand, and where we also see that we can build a substantial business, which is more on the enterprise side, since what we are building with Prisma as an infrastructure component is very similar to patterns that are already present in enterprise software systems.

\[52:13\] So if you think about it, Prisma and what Prisma enables - it really enables GraphQL as a universal query language. That's very similar to what you had a decade ago with ODBC, so that idea is not new at all, and fits really well into an enterprise context, where additionally, through the data mapping part, you also have additional requirements, mostly around security and audit logging, various features around that. There are also many opportunities to just implement more efficient data-logging mechanisms, caching... So this is really what we are seeing a lot of demand for, where we're working with bigger companies on an enterprise version of Prisma, and that's really what we focus on from a monetization product perspective.

You've also mentioned Prisma Cloud, and what we see with Prisma Cloud is mostly sort of empowering developers with better workflows around databases, on the foundation that Prisma provides.

So you can think about Prisma Cloud kind of like as a database workflow platform. Over time, we'll build various integrations with different cloud providers, where you actually host your Prisma server, where you host your database, so you could for example with Prisma Cloud connect to your AWS account where you run your database - let's say an AWS Aurora - and you're running your Prisma server on ECS or on Fargate, and you get all of the instrumentation inside Prisma Cloud... But more importantly, you get a lot of workflows around that.

We for example have a feature that's called Data Browser. Think about that like -- maybe you've seen Sequel Pro, PopSQL or think back to PHPMyAdmin...

**Jerod Santo:** Oh, no...

**Adam Stacoviak:** Don't go that far. \[laughter\]

**Johannes Schickling:** Sorry about that.

**Adam Stacoviak:** PopSQL, let's stay there.

**Johannes Schickling:** Yeah, that's a good one. So think about that, and for your data across any kind of database - one for developers, but also for non-developers, for more business users. We see a lot of companies using Prisma Cloud basically to roll out access to their entire customers support team, to the entire marketing team, to the entire sales team, that they get access to the actual application data without the development team needing to build a lot of admin back-end interfaces, or these admin panels. So that's certainly a workflow that we see a lot, but also workflows around typical development processes.

\[55:40\] Thinking about continuous deployment, we actually will roll out an integration with GitHub, that you can simply push your changes to your GitHub repository and Prisma Cloud will deploy the database changes on your behalf. So if you're familiar with Netlify for example, how you can simply push your changes to GitHub and Netlify automatically deploys your new website. Think about the same thing, but actually for your database and your database migrations, where changes that are non-destructive - they can be configured in such a way that it's just like rolled out.

And if there are database changes that might actually introduce some breaking changes, that's sort of batched up and you can manually decide to roll it out into production. So various workflows around that, and this is what we're offering for free with Prisma Cloud, that people can just get better workflows. And if people want the same sort of workflows, but more in a company setting, where all of that lives in your own cloud, or where all of that lives on premises, this is where you can get the same features as part of the enterprise edition.

**Jerod Santo:** So it's actually gonna be an on-premise product for enterprise.

**Johannes Schickling:** There's two different products. There's Prisma Cloud, and Prisma Enterprise, and both of them offer this Prisma platform, this value-add, these additional workflows around Prisma. Prisma Cloud offers that in a hosted way that you can use as a free SaaS product right away, that integrates with GitHub or with your AWS account. We're actually also working with the guys at ZEIT to also implement integration there... And if you wanna use all of that on premises, you can force your data privacy rules etc. This is where we can deploy the Prisma platform in your own cloud or on your on-premise servers.

**Jerod Santo:** First of all, congratulations... We've breezed over your 4.5 million round, but that's a lot of money, and probably a lot of work, so congratulations on that. Feel free to name names - you said you've convinced some of the smartest people in the Valley. Well, name names, by all means; let us know who's getting behind you.

**Johannes Schickling:** This round was led by Kleiner Perkins... At Kleiner Perkins by Mamoon and Bucky. Mamoon, for example, has been involved with Slack, Intercom, Box... Very well-known companies. We really feel that we have a great home there, as part of like a new generation of development tools, that they really invest a lot into.

We've also worked with various other smaller investors, and also got a lot of great angels on board, like for example Guillermo Rauch from ZEIT actually, or one of the creators of GraphQL came in as an angel investor, we have the CEO of Cockroach, we have the CEO of Kong... Various experts in the industry who really can help us a lot with strategic advice, and just like building a great partnership there. We also have the founder of Algolia... So various people; we are super-grateful for having them on board.

**Jerod Santo:** One of the questions I was gonna ask is was the sales pitch tougher in terms of getting them to invest because of the open source nature? But the names that you're naming - it sounds like these people understand open source businesses natively.

**Johannes Schickling:** \[59:55\] Oh yeah, for sure. It's actually funny you mentioned that, since it was almost like a filter for us to see who are we talking to or who we are not talking to as part of this fundraising process. We really wanted to make sure that we work with people who understand open source. A lot of people - it can go as far as like... Nowadays, if you're building software for developers, also especially the enterprise grade, and it's not open source, then that sort of doesn't make sense.

**Adam Stacoviak:** Really?

**Johannes Schickling:** Open source is really like the entry ticket for you to even be considered in a new enterprise environment.

**Adam Stacoviak:** Such a counter way of thinking than years ago, right Jerod?

**Jerod Santo:** Yeah.

**Adam Stacoviak:** That's how it's playing out, but to hear someone say it out loud is sort of like "Wow, it's different."

**Johannes Schickling:** Yeah, for sure. The world is completely changing in that regard... But it makes sense. If you think back 10-20 years ago, most enterprise software has been so top-down, and everyone made the decision of like "Okay, we're gonna adopt this software, and then roll it out in the entire company and it has either been adopted or gone on the shelf, but nowadays, like we've talked about at the beginning of the show, we have now front-end developers who really want to start adopting a technology, and whether they're allowed or not, they start doing so... So bottom-up adoption is really the new default, and it's almost impossible to have bottom-up adoption that's not based on open source... So that's pretty obvious for us.

**Adam Stacoviak:** That's an interesting perspective too... You know, not that developers are the bottom-up, or the doers, the implementers... So it's the bare metal up, maybe might be... Bottom has sort of a negative connotation, but I'm feeling you. And I get to say that often to our sponsors; it's like "Listen, we talk to the influencers out there, so this is a great platform for you to share your message." And hearing you say that is music to my ears, because I say that so often.

**Johannes Schickling:** Oh yeah, for sure. This is how you sort of like get a foothold in a company... And that ties in very well with how we think about our adoption strategy. Prisma on its own is completely open source and completely free to use, and the developers who start using it, they don't even think yet about these kind of enterprise features that they have... But once it reaches a certain level in the company, then the compliance features, security features and so on kick in, and then it sort of turns it around... The entire open source angle - that allows for bottom-up movement, but once it reaches such a level, then they're looking at it as a company, like "Okay, but do they provide us an enterprise version of that? Does that come with premium grade support? What about SLAs? What about different certifications?" and this is where an enterprise version comes in... Which, that on its own not necessarily has to be open source; more and more companies actually also have the enterprise version open source.

I think you just spoke about exactly that in regards to Elastic on one of the previous shows... But open source is really the key for this bottom-up movement.

**Adam Stacoviak:** Well, on that note, maybe you can more clearly define the line between open source Prism and Prism Enterprise...

**Jerod Santo:** PrismA.

**Adam Stacoviak:** \[01:04:03.09\] Geez... I've said that in the break, y'all; I'm sorry. I keep saying Prism, and it's my bad. Prisma. Prisma open source and Prisma Enterprise... Thank you, Jerod, for correcting me, by the way. It's so embarrassing. How do you define the difference? How do you put features into open source and how do you define what doesn't go back into open source?

If for example a pull request comes in for a contribution that collides with your vision for Enterprise, how do you discern whether or not to enable that? That's some of the often asked questions out there in open source, around business being built around open source.

**Johannes Schickling:** Right, so the good news there is that it's typically fairly straightforward. A lot of the features that we wanna put into the enterprise version - the bottom-up movement doesn't really ask for that. So no front-end React developer would ask about this sort of like compliance, or certain audit logging; what they ask about, a) Does this support Postgres? Does this support Mongo? Does this support this GraphQL feature?

Our philosophy around that is very much like you should be able to run Prisma completely in production, without any caveat, from a functionality point of view. We don't wanna restrict you running Prisma in production. But then there's like a fairly clear line towards enterprise-grade features, which is then available in the Enterprise version. So again, things around security are part of that, audit logging, but also certain compliance features, certain authentication mechanisms... For example, for the Prisma platform you get a SAML, single sign-on mechanism, you get various logging mechanisms, you get better ways to collaborate in certain workflows that you need in a bigger company... So this is sort of where we draw the line.

**Adam Stacoviak:** I guess the reason why I asked that question too is I saw two there - 1) query accelerator, and then performance metrics. So anytime you talk about speed or any advancements in, say, an Enterprise or a pro-only version, when you talk about open core or whatever model you wanna call this, how that may... I guess, in that case, maybe general open source developers using it don't care, but maybe some might be like "Hey, it's accelerated in the premium version for enterprises, on-premise, but not for me... Can I contribute that back, or why?"

**Johannes Schickling:** Exactly, and a lot of these things are basically things that we build for you, so you don't have to build them yourself. For example this performance monitoring - once you roll out a certain system, you'll also think about "How can I monitor it?" These are things that you would build yourself, or you get out of the box, as part of a premium (enterprise) version. So that's a fairly common play.

**Adam Stacoviak:** In the first part of the conversation we talked quite a bit about how we haven't talked to you in basically a year, so we're catching up... And I believe in the last conversation we had we talked about the GraphQL conference. And Jerod, if I remember correctly, I think we were talking to him right around the same time the conference was taking place again, and this next one is happening in June, so maybe there's some...

**Jerod Santo:** I think that's right. It was June(ish) when we published the last episode.

**Adam Stacoviak:** Yeah, so it's been basically a year, and here comes the next conference. Tell us more about how the community has changed, and what's going on with this conference?

**Johannes Schickling:** \[01:08:11.20\] That's funny, that's great timing. Yeah, we have the GraphQL Europe Conference 2018 just coming up in mid-June. That's actually June 18th... Sorry. Sorry about that, June 15th.

**Adam Stacoviak:** June 15th.

**Johannes Schickling:** \[laughs\] June 15th...

**Jerod Santo:** Did we get the date right?

**Johannes Schickling:** ...back in Berlin. This year we'll have twice as many attendees, and just a couple of days ago we've been together with a couple of other people in the GraphQL ecosystem, like Lee Byron, one of the creators of GraphQL, who is always helping us to select the speakers... So we've just finalized the speakers schedule, which we'll announce over the next couple of weeks... But we have some really, really top notch speakers in there, and it was crazy difficult for us to select all of these talks; we got multiple hundreds of really fantastic talk submissions, so it was really tough for us to decide there... But I think we've got a really fantastic line-up of very diverse speakers, and super interesting talks. I'm super excited for that.

Actually, as part of this show we've prepared a discount code which gives you 15% off, which is called "changelog".

**Adam Stacoviak:** Nice, I like that.

**Johannes Schickling:** So for some of your listeners who are looking for an excuse to come out to Berlin on June 15th, hopefully that makes it a bit easier for them.

**Adam Stacoviak:** Yeah, one of your speakers is Peggy Rayzis, engineer at Apollo. She is actually on an upcoming episode of the React podcast, which is also in our podcast network... So stay tuned to that.

**Johannes Schickling:** That's awesome.

**Adam Stacoviak:** Great, that's interesting - so you've got the evolution of GraphCool to Prisma, and then you've got a company formed around it, you've got a seed round which is substantial (4.5 million), great investors, people who clearly understand the landscape of developers tooling, and not only that, but the importance of it being open source as it pertains to growth, and enterprise, and all the for-profit models you need to have to actually have developers working on some of this tooling. You've got your hands full. Then this conference, and then GraphQL Radio Podcast... You've got lots of things happening; how do you manage your time? It's crazy.

**Johannes Schickling:** \[01:11:00.05\] Well, the answer for that question constantly changes.

**Adam Stacoviak:** Very little sleep?

**Johannes Schickling:** \[laughs\] That's definitely one of the tradeoffs that I have to take into account. But the most important answer for that is really having a fantastic team that we're working with and that we are growing. It's been so incredible to see our team just taking on more and more responsibilities, and just driving that... This is where I'm surprised sometimes myself with all of the amazing things we're doing. It's not just me behind all of these anymore, so that's super-awesome.

**Adam Stacoviak:** I'm curious what size is your team these days?

**Johannes Schickling:** As we speak, today we're still just nine people, but we're expecting to almost double that towards the end of this year, most around the engineering capacity - both in the front-end, around the product, but also around our open source projects... Also, as I mentioned, we're opening a small office in San Francisco, mostly around just being closer with the local community there. I'm starting a sales team over there, and investing a bit more into marketing. So if any of these things sound interesting to some of the listeners, please feel free to either get in touch with me personally via Twitter or email, or just go to our jobs page - that's prisma.io/jobs. I guess we'll also put that into the show notes.

**Adam Stacoviak:** 100% we'll put that in the show notes for sure. That's awesome... Definitely seeing lots of change for you all in the right direction, the San Francisco office you just mentioned - that's amazing; building a marketing team, sales team seems totally the time for that right now. Anything else you wanna say in closing for the listeners before we tail off?

**Johannes Schickling:** No, but it's been fantastic to have been on the show again. Let's see what happens until the next year.

**Adam Stacoviak:** We'll see you next June, right?

**Jerod Santo:** Yeah, exactly.

**Johannes Schickling:** Alright, I'll put it into the calendar.

**Adam Stacoviak:** Yeah, we'll mark the day right now. Well, actually it's May right now, so it's barely May...

**Jerod Santo:** Yeah, but we're excited.

**Adam Stacoviak:** We're a month early this year, so we'll see. Maybe it's 10 months from now instead of 11. Whatever. Johannes, thank you so much for your time and thanks for all you do in the open source community. You just do so much - you've got a great team you're growing there, a great business you're growing there, you do awesome stuff for open source... Thank you so much for taking your time to join us here on the show. Thank you.

**Johannes Schickling:** For sure. Thanks so much.
