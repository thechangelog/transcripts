**Adam Stacoviak:** Alright, we're back, talking about something very cool, Jerod... Something that we have not quite talked about on the show, although when we talked to the people from Facebook we kind of coordinated this call, but it's been like forever... And we're not even talking to them.

**Jerod Santo:** Yeah, it's been a couple of years since Facebook announced GraphQL back in 2014 I believe -- no, September 2015; if I just would have looked at the notes, I would have got that the first time. But since then, people have gotten quite excited about it, and we are joined today by a fella who is so excited about it he even has a company, Graphcool - great name, by the way, Johannes... All about GraphQL and serverless, and providing really hosting and options for people who are using this technology.

First of all, Johannes, thanks so much for joining us.

**Johannes Schickling:** Yeah, thanks for having me.

**Jerod Santo:** So everybody's getting excited about GraphQL, it seems like for different reasons; others are still skeptically staying on the sidelines, but you, as we just said, are kind of all in on it. First of all, tell the audience what GraphQL is in your words, and then tell us why you're so excited.

**Johannes Schickling:** Sure. GraphQL in abstract is a query language for your API. What that really means is if you're a front-end developer, you're probably used to using RESTful APIs, which is kind of like the best practice for the last ten years, and you can kind of think about GraphQL as a better replacement for that, in most cases.

As you're querying a RESTful API, you're usually getting back JSON of a certain shape, and you can think about GraphQL as basically you're sending a query to the server with just the shape of the JSON, but without the values; kind of like a JSON blob, but just the keys, without the values, and the server fills in the values for you. If you take this concept, you can directly tell the server the shape of the data you're expecting, and you can do queries to get data and you ask for what you want and you get predictable results, and you can even traverse your entire data of your back-end in a certain way, and you get a lot of flexibility you wouldn't be able to get with a common REST API. That's maybe a quick way to describe GraphQL from a front-end perspective.

**Jerod Santo:** \[00:03:54.08\] So the big wins are a reduced number of calls to the API, because you don't have to make subsequent requests for related objects or records, as well as the flexibility to grab exactly what you need and nothing more... So reduced payload size, flexibility, so therefore speed, right?

**Johannes Schickling:** Exactly. These two problems you called out are actually called data overfetching. Imagine you're starting out building an app and you have a REST API for that, and the iOS app has quite a lot of different requirements, and you keep adding stuff to this endpoint; you also start building an Android app, which doesn't have all of these data requirements, and it anyway gets all of the data constantly over the wire and fetches maybe 60%-70% more data than it actually needs. So the other idea is to keep the REST endpoints really slim.

Let's say you build an Instagram, and you have your feed with all of the images, but for every image you also want to get the author object (the person); let's say you wanna do that for 100 images... What it would end up doing is sending 101 requests (one for the list of images, and 100 for each person). This is the classical N+1 query problem. Both of these problems are solved with GraphQL.

**Jerod Santo:** Going to the N+1 query problem, with REST interfaces with the JSON spec and stuff like this there are solutions for this, such as sideloading associated records, without having to create multiple queries... Isn't that sufficient for many people?

**Johannes Schickling:** Yes, but GraphQL gives you a lot of nice other things on top, and it does that by at the same time being really, really simple. The way GraphQL actually works is that GraphQL gives you a typesystem as your discoverable endpoint. For a JSON API you would still have all of these endpoints. With GraphQL, on the other side, you have just one endpoint where you can write your queries to, and you just have a really simple and concise syntax.

I think if you're already heavily invested into a JSON API, then that's probably fine for most of your use cases, but GraphQL just has a way lower entry barrier and provides a lot of great tooling, which all revolves around this typesystem of the GraphQL language. This allows for tools such as GraphQL or GraphQL Playground, which is basically like a little IDE for writing GraphQL queries, which gives you autocompletion and error detection if there is an error in your query, and all of this tooling just revolves around the simple standard of GraphQL.

**Jerod Santo:** So we mentioned back that Facebook announced this -- they had actually been running GraphQL internally for a couple of years before creating the specification, as well as open-sourcing a reference implementation in Javascript (that was September 2015). About a year later GitHub announced that they're switching to GraphQL for their public API, September 2016. I've got a quick paragraph from the GitHub announcement on the GitHub engineering blog that I think will give a real world example of what you're talking about, Johannes, with regards to the query problem (too many API calls). They said that the REST API is responsible for 60% of GitHub requests made to their database tier. "This is probably because, by its nature, hypermedia navigation requires a client to repeatedly communicate with a server so that it can get all the information it needs. Our responses were bloated and filled with all sorts of \*\_url hints in the JSON responses to help people continue to navigate through the API to get what they needed.

\[00:08:13.07\] Despite all of the information we provided, we heard from integrators that our REST API also wasn't very flexible. It sometimes required two or three separate calls to assemble a complete view of a resource. It seemed like our responses simultaneously sent too much data and didn't include data that consumers needed."

Now, earlier on I said if you can sideload relationships, you can get around some of the problems of the "too many API calls", but that requires you to have a very intimate understanding of the client that's accessing the API, and when you're building a general purpose API for many different clients, like you said, with regards to an Android client, an iOS client and so on, you just don't have that level of flexibility; you have to be generic. In those cases, REST just wasn't a great fit. Anything to add there? Is that a decent real world example of what you're talking about?

**Johannes Schickling:** Absolutely. I'm not sure whether that was the statement from this Monday or from a year ago, but I think this Monday actually the GraphQL GitHub API was officially released, and it's no longer \[unintelligible 00:09:20.03\]

**Jerod Santo:** Yeah, this post I'm reading here was last year; this was their announcement, and I think beta, that they were basically gonna make the switch, but they hadn't completed it yet.

**Johannes Schickling:** Right. So I've spoken to \[unintelligible 00:09:34.23\] Brooks who works at GitHub, and we actually had him over last weekend at the GraphQL Europe Conference we were hosting about GraphQL, and he was giving a talk about how GitHub was moving to GraphQL, and gave the motivation around all of this. It was really insightful and such a great fit for -- like you said, it provides so much flexibility, this API, and I think it's a great introduction for people who want to dive a bit into GraphQL and see why is this actually useful, and there they have a brilliant example.

**Jerod Santo:** With GraphQL you have a schema that's exposed from the API side. Can you tell us about the schema and what it all includes?

**Johannes Schickling:** Right. The schema -- basically, you have a server that exposes the schema. The schema therefore represents a typesystem. You have multiple ways to provide that; usually, you do that through a server. You could implement it on your own; there are multiple ways to build a GraphQL server, and in any language. You can use an express app in Node, you can build it in Python, you can build it in Scala... There are also a couple of services out there which help you to set a GraphQL back-end. We, for example, are providing one where the process around turning your GraphQL schema into an actual GraphQL API is literally you're specifying your GraphQL schema in something that's called the GraphQL SDL (schema definition language).

If you're heading over to GraphQL.org, you actually see in the header, where it says "Describe your data", you're seeing a very concise syntax of a part of your schema. If you're familiar with typed languages like Swift or Typescript or something like that, and you're writing out your type definition, that's basically what you can do for GraphQL as well. These type definitions are the foundation for your GraphQL schema.

**Jerod Santo:** What's really cool about that is because you're defining the schema with the type definitions, and everything that's supported. You get basically free and up-to-date docs all the time, right? Because that's basically what you're writing.

**Johannes Schickling:** \[00:12:05.02\] Exactly. There's so much great tooling around that, and the type definition is really the foundation for that. That's probably one of the biggest a-ha moments for people getting into GraphQL - trying out this GraphQL Playground or this GraphQL Graphical editor where you see all of this autocompletion, and you can toggle automatic documentation for your API and you don't need to maintain a Swagger documentation, all of that. That's really a completely new level of what you would get out of Swagger, for example.

**Jerod Santo:** What are the drawbacks, because right now it sounds like unicorns and rainbows all over the place? With all technologies there are tradeoffs; what are some of the drawbacks?

**Johannes Schickling:** This is a fairly big unicorn... \[laughs\] Actually, I think I can list the drawbacks; I don't even need one hand for that. There are a couple of weird cases, but these are really exotic and don't really occur in the real world. The biggest pushback we got from people is when they say "Hey, my API is really, really simple. It's just an endpoint. It exposes maybe two fields, and I'm always expecting the same thing from this API. It's not really complex." This is where we hear people saying "It might be overkill to use GraphQL."

In these cases, if they already have their REST API, that's probably fine. But as soon as your application really starts to grow and you have multiple (from a REST world) resources, this becomes more complicated. GraphQL has almost zero overhead for you to implement on the back-end side, and there aren't really any obvious downsides. When you want to start something from scratch, you're usually going with what you already know, and GraphQL is not yet as well established as the REST standard, for example, but I think it's literally just a matter of time until people realize it's actually simpler to build GraphQL APIs, compared to REST APIs, and definitely maintaining them, and so on.

**Jerod Santo:** I can speak a little bit to the learning curve, because as we were telling Johannes before the call, neither Adam nor I have used GraphQL in any sort of significant way, but I did go through LearnGraphQL.com, which we'll link up in the show notes, which is a very nice tutorial... Probably 30-40 minutes with that and I already felt like "Okay, I get it. I'm good here. I could probably take this and run with it." Now, I wasn't trying to achieve anything real, so that's the real test, but at least the concepts and the formatting, if you're used to JSON and Javascript, things like that, it is pretty easy to conceptually wrap around your head, from the client side.

**Johannes Schickling:** Yeah, and that's the beauty of GraphQL - it's so simple to understand it fairly quickly, but at the same time, now that we're using GraphQL for more than two years, there are constantly new points where we have brilliant a-ha moments, where the simplicity of GraphQL enables completely new concepts; it's really well thought out, and it's very much worth it to stay internally at Facebook for five years until it's really evolved to what it is today. The simplicity is what makes it so easy to understand. It's so well-designed, and it enables so many different scenarios.

**Jerod Santo:** \[00:16:03.27\] One drawback that I've heard - and I can't validate this, so I'm gonna ask it to you - is that because every API call is a unique snowflake, it's darn near impossible to have an efficient caching strategy on the server side. Is that something that you run into, or is that a non-issue?

**Johannes Schickling:** That's a very good point. GraphQL is definitely a new paradigm how you expose your API -- I mean, that's the entire idea of a REST API, is that you have on a resource level that you can do HTTP caching and so on. You cannot directly transfer that concept to GraphQL, so you need new ways to cache. I agree, that is not as well understood as REST APIs, for example, currently are. But this allows for new kinds of concepts; you can cache more on a data graph level. There's just a lot more still to be explored, and that's definitely one of the parts of how you build GraphQL servers, where there's a lot of movement currently.

It's not directly something that is just not possible, it's just something where you have to wrap your mind around...

**Jerod Santo:** It's different.

**Johannes Schickling:** It's different.

**Adam Stacoviak:** Right. I would think with less queries, less activity to the server, you might actually be able to save, and maybe caching is less required because your server is actually getting pinged a lot less.

**Johannes Schickling:** Exactly. Basically, how you assemble the response of a GraphQL query is entirely up to you, and you can cache it in whatever way you want. Usually, the GraphQL queries you're getting are fairly similar, so you can do quite a lot of efficient caching. If your data structure and the nature of your data allows for it, then you can even cache the normal HTTP requests which are coming in... So that's maybe also worth mentioning, that GraphQL is \[unintelligible 00:18:08.26\] independent from the transfer protocol being used. Most commonly, GraphQL is used via an HTTP transport, but for example there are also now \[unintelligible 00:18:23.04\] GraphQL subscriptions, which are usually used via a websocket connection, but we are aware of people who use GraphQL with binary transports, and using a UDP string, for example. Whatever transport protocol you're using, you can also do a lot of clever tricks there.

**Jerod Santo:** Yeah, that's definitely worth mentioning, that where that sits in the networking stack is at the application layer. So thinking about it in terms of REST, REST semantics use HTTP, even verbs - GET, POST, PUT or PATCH, if you will, and DELETE... When you're using GraphQL with an HTTP underneath it, are you just using GET and POST? How does that actually -- does it matter how you communicate at that layer?

**Johannes Schickling:** It's mostly up to you, but there's definitely a best practice, and that is usually that you sent everything via a POST request. In this POST request, you're usually sending a JSON encoded payload, and this JSON encoded payload at minimum has a field called "query" where you're literally sending your GraphQL query. Additionally, there's also the concept of variables, where you can parameterize your query with variables you can pass over. That's basically what you're sending over, and you just get JSON back. That is kind of like the best practice being used in 99% of cases.

**Adam Stacoviak:** Coming up after the break, we're gonna talk about mutating data - how you go about changing data with GraphQL mutations, authentication and permissions, and the role of Graphcool and how it's aiming to be your favorite serverless GraphQL back-end. Stick around.

**Break:** \[00:20:30.25\]

**Jerod Santo:** Johannes, we talked about fetching data, the advantages there, the simplicity... We haven't talked about mutating data, so why don't you give us the quick rundown, and we'll go from there?

**Johannes Schickling:** Exactly. Yeah, these are basically the two big concepts of GraphQL - one is querying data, what we talked about in the first section; the other big part is how you actually write data, how you update data, and that's called GraphQL mutations. From a REST perspective, that's kind of the equivalent of PUT, POST, DELETE, PATCH, and these sorts of works. The idea of a GraphQL mutation is basically a GraphQL schema exposes mutations; you can kind of think about them as remote function calls. They expect some arguments. For example, if we are building this Instagram app and we want to create a new image, we would need to provide a description for the image, and maybe the image URL; all of these arguments are typed, so you need to provide them. Every mutation also exposes a view into your graph, so while running the mutation you can also already query back data.

For example, as you're creating this new image, you might want to get its ID back, and some other information. A mutation is really a mutation + a query. This is basically the concept of a mutation. It's as simple as queries are, and this is how you can implement any sort of writing operations. Whatever mutates your back-end, you would do through a mutation.

**Jerod Santo:** And once again, because it's part of that schema, it's all explorable, it's all documented, it's all very clear.

**Johannes Schickling:** Exactly, yeah.

**Jerod Santo:** What about if you wanna mutate a host of things all at once?

**Johannes Schickling:** It's basically up to you how you design your mutations. Whatever fits your use case, you can design mutations that do that. For example, if you have a more complicated piece of business logic in your backend, for example if you're building a web shop and you have a checkout process that usually does more than just one thing, you would create a mutation that does exactly that, and your implementation would take care of all of the implementation steps. It would maybe create another object, it would maybe transform a list of items into a representation that fits your web shop, like other items, and so on. It could basically do whatever you want your mutation to do, and you expose it in a very minimal way to the front-end.

**Jerod Santo:** \[00:24:20.09\] So what about permissions and authorizations and stuff? If you're having this kind of an ad-hoc "put your query together" API, but you wanna provide different access for different clients - is that something that's built into GraphQL, or is that something you'd have to go out on your own and figure out how to get that done?

**Johannes Schickling:** Really good question. I think we should talk about both things. The first is authentication. Going back to your last question, neither of these concepts are directly built into GraphQL, but it's so flexible that you can basically use whatever concept you want to use; you can use it with GraphQL. Every authentication mechanism you would have for your REST API, you can more or less directly translate to your GraphQL API.

A best practice for authentication in GraphQL APIs is that you have some sort of mutation that authenticates you as an anonymous user, as an authenticated user; maybe you're sending back some kind of session token, and this session token you might send back for every subsequent request through an authorization header. This is a really simple way to implement authentication for GraphQL APIs, but you can also use HTTP basic auth, or however you wanna go about that. That's completely up to you.

Authorization is basically the same story - it's up to the backend how you would implement that. But additionally to a REST API, where you would usually just do authorization based on a resource and endpoint level, with GraphQL you can go a step further and you can do field-based authorization rules.

For example, if you wanna query a user, maybe you're allowed to see the user's name, but not the email address, and certainly not the hash password. There you can basically on a field level implement authorization rules - what you can see and what you cannot see. This is usually where it gets, as for every back-end, fairly tricky, how you implement permission rules. This is something where we at Graphcool we are pretty excited about the way we found to expose a level of abstraction for authorization rules with our permission system.

**Jerod Santo:** So this is one of the voids where Graphcool (or similar services) is offering some solution to these things... There are six dozen ways to skin the cat, because like you said, it's not in the specification, so it's up to the individual API or the individual implementation to figure out how to do it, so you guys are providing some of that stuff out of the box for Graphcool users... Is that right?

**Johannes Schickling:** Exactly. And that's actually one of the biggest steps how we see ourselves as a next step in the evolution of back-end services. If you think about Parse or Firebase, you have these concepts of ACL and roles, so that you can say like "This user has the admin role, and therefore this user is allowed to do X." But in most real world applications, that's way too minimal, and that doesn't allow you to implement your real application.
What we basically allow you to do is you can specify any kind of authorization rules based on the graph structure of your data.

\[00:28:09.09\] In our Instagram example, imagine you have an author of a post, of an image, and just this author is allowed to change the description or the image URL of this post. Or every person has a lot of followers, and maybe this following needs to be accepted, and then just accepted followers are allowed to view images. All of these permission rules are based on the information which is embedded in the graph structure of your data schema.

We basically give developers a way to implement these permission rules in the form of GraphQL queries which represents permission rules by just specifying these conditions with the simplicity of GraphQL queries. That sounds fairly abstract, and you would certainly need to see a few examples, but this is a really simple concept which allows you to specify any sort of permission rules.

**Jerod Santo:** So you mentioned Firebase and Parse, and GraphQL is kind of a new spin on that same type of a service; those liberal services got acquired and are in various states of disrepair -- Parse, of course, famously shut down... It seemed like a very good job of going about the shutdown, in terms of people having time and getting their data out and all that kind of thing. Firebase - I'm not sure of the status of Firebase. I think it still exists as it is, right?

**Johannes Schickling:** It does exist, and Google is actually putting a lot of money into it.

**Jerod Santo:** Okay, so getting better perhaps, but Google could change their mind and shut Firebase off. So for those who are thinking "Oh, Graphcool sounds cool, but what if it disappears tomorrow?" That's always my concern. What do you say to that type of a question?

**Johannes Schickling:** Right. That's actually one of the most common questions we are getting from evaluating our service, and it makes a lot of sense. I'd ask the same question if I would see a service like that. I think one thing that Parse has done particularly well is that everything went open source, and you can now run your own Parse server. People who were running on Parse before can still get somewhat the same level, but of course, that's not perfect. What GraphQL really allows you to do - and not just GraphQL, but the entire concept of serverless - is that the entire service we're building is based on open source technologies: Firebase, Parse - all of these services were built on proprietary software, whereas our service is just built on open source technology like a GraphQL API, and we allow you to export, not just for shutting down, but when you're signing up and you decide "I don't wanna use this anymore, I wanna build another thing", you can export the entire schema, you can export all the data and you can roll it on your own.

This openness of these technologies allow you to migrate away, and this is something really important for us. We don't want to promote a concept of when to log in, we rather want to think about the concept of maximizing developer experience. It's a similar concept to what the guys at Expo, for example, are doing. They just make it really easy to use these technologies with React Native, and so on. It's all open source. You could build it on your own, but with using something like that, it just maximizes what you can get out of it. It gives you a better level of abstraction, and that is really what our mission is about.

**Jerod Santo:** So you like how Parse went open source after acquisition. Are you saying Graphcool would do the same thing if you guys found yourselves in a similar situation?

**Johannes Schickling:** \[00:32:13.23\] Right. I think it took Parse a bit to really get there. For example, it didn't open source those things on day one. It was a lot of pushback, back and forth around which parts are being open-sourced, until really most parts got open-sourced. That's one part of it.

We've taken the same concept, and this is something that really resonates with people. We have this policy, what we call "the sunset policy", which basically says "Whenever something would happen to a service, everything would just be open-sourced, and people can host it on their own." Everything internally is built on open technologies, with Docker and so on... So people could host it on their own.

Needless to say, we're not planning to shut down any time soon, and we also said no to every acquisition offer we got so far.

**Adam Stacoviak:** What parts of the service is proprietary? If you're built on open source, there's gotta be some sort of glue there, and that's the proprietary part that's not open source. Can you talk about that a bit?

**Johannes Schickling:** Right. I mean, that directly translates to the value we are providing. It's actually directly rooted in the cause of why we started to build Graphcool. As you're building your own back-ends, especially REST back-ends, you find yourself a lot \[unintelligible 00:33:49.12\] where you basically just want your API, and the API usually either gives you data out of a database, or it receives data and stores it in the database in some way. So you're just building this mapping between your API and a database. This is where you put a lot of time in. It needs to evolve; it's very error-prone, it's not particularly exciting, but there are a lot of mistakes being made in this process. That is something we wanted to just solve, and GraphQL is the perfect foundation for that.

Based on your GraphQL schema, you're specifying locally, or on our platform with a GraphQL schema we generate a GraphQL API for you with a managed database in the back.

Where the proprietary part is -- and there's nothing really secret about it, it's just a lot of complexity we are abstracting away, and this is the mapping between the automatically generated GraphQL API and a scalable database.

**Jerod Santo:** So maybe this will be more controversial, and I don't understand your business nearly as well as you do, but why not just silence all questions and just go completely 100% open source...? Somewhere like Discourse, where everything that they do you can do it yourself, but you can also use them as the host and they'll do all of the hard things for you. Is that a consideration, or is that too scary?

**Johannes Schickling:** It's definitely a consideration, and we are looking into ways how we could go down a path like that. One part of that is just that this system is far from trivial. We started out building the first few prototypes in Node, and it just grew quite quickly and we knew we had to build it in a way that is scalable, that will be maintainable going forward.

\[00:35:59.09\] For example, half of our tests base was basically just something that could have been caught by a good type system, so really quickly we decided to rebuild everything in Scala. Now it's just a really huge codebase with multiple microservices, a lot of infrastructure involved, and that takes us quite a lot of time to ramp up new engineers to understand that internally. Open-sourcing all of that would just slow us down quite significantly, since we would need to have documentation around that, and people would rather be concerned about "Hey, how can I get this to run on my own?" and it would just slow us down, since every decision we would make internally - how we are changing infrastructure, and so on - would suddenly be a breaking change.

We rather want to move really quickly on that internally. We are managing internal breaking changes people will never know about, and once we have found a good way to orchestrate everything internally, we want to take one step at a time to open-source a version of that.

**Adam Stacoviak:** Let's paint a timeline here... As you mentioned in the first part, Jerod, GraphQL was announced July 2015...

**Jerod Santo:** September.

**Adam Stacoviak:** Oh, September? Okay... I was looking at the Graphcool About page and kind of using their timeline... I'm trying to paint back the picture of like Graphcool being announced. It seems like their first prototype (Graphcool's first prototype) was in January 2016, and it seems like you spent most of 2016 either creating and/or getting the necessary investment to be able to make a company. Now you're at a point where you can actually launch and be used and grow as a company, and it seems like maybe you're in this stage of innovation, and then once the dust (so to speak) settles, then you can start to say "Well, what can we extract from this to give back to the community?" Is that a fair assumption of where you're at?

**Johannes Schickling:** To a certain extent... It's quite remarkable what is actually needed to just provide a baseline to people in terms of infrastructure that they can implement any kind of use case they want, if you're basically giving them a new way to build backends. We're not trying like a new Firebase replacement, where we provide crash reports and all of that, but we rather want to provide people a new way to build backends, and a better abstraction for that. And there is just a lot of ground work needed around authorization, around authentication systems, and most importantly, around how people can implement their own business logic, how they can extend that, and so on.

We're working quite hard. It is a lot of work, and I wouldn't say we're entirely there yet, where we can say "Alright, all of that is perfect. Now let's see how we can open this up and make it available for everybody." Our goal at the moment is of seeing what are the biggest problems our customers are facing and how we can make it easier for them. Once we're reached that point, it's just like the next logical step.

**Jerod Santo:** Yeah, I'm just thinking about... With GraphQL, the clients basically write their own queries. Then with services like Graphcool and \[unintelligible 00:39:36.28\] you don't have servers, you don't have -- what's next, codeless? Like, I don't have code anymore? I'm thinking about this because you said "business logic", and it's like "Where the crap does my code go nowadays?" I feel like I'm being marginalized as an application developer. It keeps getting pitched to me as if I'm becoming Superman, but I feel like maybe my role is reduced... What do you think of that?

**Johannes Schickling:** \[00:40:04.14\] I wouldn't say so... For us, again, it comes down to this concept of level of abstraction. When you're building a back-end, I think nobody is really obsessed with the part of "How can I map the API perfectly to the database?" and "How can I migrate my database in the best possible way?"

**Jerod Santo:** That's the drudgery, right? That's the work, that's the labor.

**Johannes Schickling:** Exactly. I mean, we are having compilers, we are having better programming languages, we're having frameworks that this menial and repetitive work gets somewhat reduced to a minimum, and then you can go to user experience, how you can make this a great product, how you can make processes great, how you can implement business logic, like when somebody signs up, sending him a sign-up email, sending push notifications, implementing authorization logic, and all of that.

We just want to get people directly to that point where they can implement business logic. This is where serverless functions come in. These are basically the small parts in the application where actually code is required. I'm pretty sure that even there the level of abstraction gets higher as well. 20 years ago you wouldn't have a service like Mailgun or something like that to send an email; now it's just a service you can use.

There are still a lot of hard problems that can be made easier with services, but how you tie all of that together - this is really when it comes to building an application. As you're playing with Lego, you already have the Lego building blocks, and that's the fun part, of putting all of that together, but you don't need to manufacture the building blocks before.

Going back to this analogy of Lego building blocks, the great idea of bringing GraphQL and serverless together is that Lego blocks snap together, and the snapping is done through a GraphQL typesystem. The GraphQL typesystem basically, for every moving part where you pass on data, the data is typed; for example, as data flows through a system and you want to hook it into a certain event and execute some code - in this case it would be a function - the function would be... If you implement it in a typed language as well, such as Typescript, for example, or Javascript with Flow, or Java... You have types as well, and you can map them one-to-one to each other. The GraphQL typesystem of the application maps to your code and you get something like global type safety. That's one of the divisions for us, where we want to go to over the next years.

**Adam Stacoviak:** After the break we're talking about the difference between live queries and subscriptions; we dig deeper into this idea of a serverless GraphQL back-end, we're talking about where community is taking place, the future of GraphQL and also where it's going. Stay tuned.

**Break:** \[00:43:25.11\]

**Adam Stacoviak:** We've kind of come to a point where it's like "Where is GraphQL going? How can you work with it? What conferences are out there? Where is the community meeting?" and resources about how to get started. You mentioned earlier in this show GraphQL Europe, I think you even mentioned in the off-air there's a podcast that you created... Where are things at for you?

**Johannes Schickling:** Right. So yeah, today is 24th May when we are recording this; last week we actually had the first GraphQL conference in Europe, called GraphQL Europe, with the creators of GraphQL - Lee Byron and Dan Schafer. We had folks over from Meteor and Apollo, we had people over from GitHub, and really the entire community from all over the world came together and met. We had great talks about GraphQL. That was a great place to talk about the future of GraphQL.

Besides that, there is a newsletter about GraphQL, called "GraphQL Weekly." We also, like you mentioned, recently started together with Abhi a new podcast called "GraphQL Radio", which you can find on GraphQLRadio.com, where we also have all sorts of people from the GraphQL community talking about different projects. For example, the last episode has been about Relay and Apollo, which are both GraphQL clients, and how that is moving forward.

There are quite a lot of emerging resources for and by the community. I think GraphQL Weekly is probably a good place to be to stay on top of that.

**Adam Stacoviak:** You mentioned the conference... What would you say in your opinion was the future, since you've mentioned a lot of the future was talked about there? If we didn't go, what would be the hit list of notes you took?

**Johannes Schickling:** Right. There are actually a lot of notes being published at the moment, so you don't just have to take my word for it. We actually also sat down with the creators of GraphQL and we are now also quite involved in talking about different features for the future of GraphQL and how that is shaping. The great thing about GraphQL is really that it's an open standard. It is an open specification, there's an RFC process... You can go to GitHub, you can propose a new RFC with a certain feature, you can hear other community members' ideas and thoughts about this. If you make a strong case, that might even be merged into the GraphQL standard.

\[00:47:57.02\] Recent developments - just last week as well was a really eventful week for GraphQL. Just last week GraphQL's Subscriptions got officially merged into GraphQL. GraphQL's Subscriptions - for those of you who don't know - is a way to establish a real time connection to your GraphQL back-end. Usually, that's by websockets, and you can subscribe to certain changes, and the server will send you events.

The great thing about this is you can utilize the same GraphQL query concept. For these events you can even also traverse the graph and query for certain pieces of information you're interested in. A common scenario might be that you want to build a chat application. You might want to listen for new messages being created, and for every message you're interested in the text of it, and also in the name of the author, or something like that.

So GraphQL Subscriptions got recently merged in, then this concept of GraphQL SDL I've mentioned previously - that is not yet officially part of the specification, but it will be merged in fairly soon. There are a lot of new other exciting features which are coming up, and a lot of people talk about them.

For example, a concept called "Live Queries", which is an alternative way to go about real time queries in GraphQL. There are really a lot of exciting ideas around GraphQL.

**Jerod Santo:** You said "Life Queries" or "Live Queries"?

**Adam Stacoviak:** Live...

**Jerod Santo:** Okay. I thought that was like you could ask questions about your life, or something...

**Adam Stacoviak:** Yeah, that would be fun. \[laughter\] That's an interesting thing though, to have -- so is Live Queries and Subscriptions the same thing?

**Johannes Schickling:** Really good question. They are not, but they both can be used for similar ideas. The interesting part about that is that based on Facebook's experience building Facebook and all these real time aspects of their platform - comments that you see popping up, or you see the Like counts increasing and so on - they've really learned a lot about how you build real time applications that scale. These two concepts of GraphQL Subscriptions and GraphQL Live Queries - they are kind of the result of hundreds of iterations.

GraphQL Subscriptions, as I said, are based on events that the server sends, and GraphQL Live Queries are not fully specified yet; they're rather a broader idea, with a couple of prototypes. The idea is that you would basically send a normal GraphQL query, which you would send once \[unintelligible 00:51:01.28\] and you immediately get back the result. For Live Queries, you would also send this query and you get back a response, but you keep an open connection, and if some parts of the query change, you have just like an incremental update for the things that have changed. That is just like an alternative concept to implement real time applications in GraphQL.

**Jerod Santo:** Let's finish out on a conversation around what seems to be, Johannes, the thing that really excites you, which is the join of GraphQL with serverless back-end. By the way, if you haven't heard it yet, we had a great conversation (didn't we, Adam?) at OSCON with Pam Selle about the serverless revolution...

**Adam Stacoviak:** We did!

**Jerod Santo:** \[00:51:51.03\] That one's either in your feed somewhere or soon will be. You can also just search Changelog.com for "serverless" if you wanna listen to that. But you guys had this new architecture announcement on your blog, introducing the serverless GraphQL back-end architecture, and it seems to be the result of some of your work of joining these two concepts. This seems to be exactly what you're the most excited about, so tell us about this architecture concept and what you're trying to get from the community with regards to it.

**Johannes Schickling:** Right, right. So this architecture is basically, like I said, merging these two new paradigms how you build APIs based on GraphQL, and also what serverless infrastructure just enables developers to build applications in a lot less friction. It removes a lot of friction and it removes the requirements of hosting your own service, and so on... And bringing these two concepts together, we've proposed a new architecture idea where the GraphQL back-end would basically be automatically generated based on your GraphQL schema.

Besides the service we've built, there's also a lot of work in the community on how we can -- well, not fully generate a production-ready GraphQL API, but at least it already takes away a lot of the work for you, so you can do things like mocking based on your GraphQL schema, or bootstrap a GraphQL server based on your schema.

That's really the first building block that you write out your GraphQL API based on the GraphQL SDL, and you would get a production-ready GraphQL API you can use.

The second part we've done just focuses on implementing the business logic. Implementing the business logic in a scalable way is possible through the infrastructure provided by serverless infrastructure, like serverless functions or S3... These kinds of services where you don't have to worry about "How many services do I need to spin up?" Maybe just google for "serverless GraphQL back-end architecture."

That's a fairly new concept, and our idea is basically -- our platform, Graphcool, provides a developer platform for building these back-ends, but we also very much believe that this will be a concept to how other people build their back-ends, even if they implement these core parts on their own.

**Jerod Santo:** No need to google it, if you are listening... Any podcast client - just click to the show notes, they will be in there. Or if you're on our website, well, you're just staring at the link right there in front of you.

**Adam Stacoviak:** There you go, you've got it right there.

**Johannes Schickling:** Even better.

**Jerod Santo:** Awesome, Johannes. Anything else you wanna say before we close up?

**Johannes Schickling:** Yeah, I basically just want to encourage everybody to try out GraphQL if you're a developer, see how easy it is to implement your own GraphQL back-end. If you're a front-end developer using React, using Vue, using Angular, I highly encourage you to just try out GraphQL. A really easy way to try out GraphQL in your front-end app is using a framework like Apollo (which is a GraphQL client), or Relay (which is a GraphQL client). There are two resources also created by us, called Learn Apollo and Learn Relay - these are the easiest ways to get started with them. I suppose that's also in the show notes.

**Adam Stacoviak:** Yes, for sure. Well, thanks, Johannes. It was awesome having you on the show. Thanks for coming on!

**Johannes Schickling:** Definitely, thanks for having me! It was really great talking about GraphQL and serverless.
