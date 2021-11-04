**Nick Nisi:** Hello, JS Party! Welcome to another fantastic episode of your favorite show about JavaScript that's a party as well. It's JS Party, and I'm your host today, Nick Nisi. Hoy-hoy. With me today I have a very special guest, this is Doug Martin. Doug, say hello.

**Doug Martin:** Hi, everyone.

**Nick Nisi:** Welcome to the show. So tell us a little bit about yourself, Doug.

**Doug Martin:** Well, let's see... I'm Doug, I'm the VP of engineering at a company called C2FO. We're a fintech company based out of Kansas City. I've been doing open source software for about ten years, had a few projects that have had a little bit of traction, but I've always been interested in building tools to make other engineers more productive. It's just always been my MO. I've been working with JavaScript since 2008, starting with Dojo... Nick knows all about that one...

**Nick Nisi:** That's right.

**Doug Martin:** So Dojo already did it... \[laughs\] But yeah, I'm excited to be here.

**Nick Nisi:** Yeah, yeah. We actually work at the same company, C2FO, so that's awesome. We've known each other for several years, and I've used a lot of the JavaScript that you've written, the projects that make my life better in a lot of ways. So yeah, we're here to talk about one of them specifically, and that is NestJS query. But first, I don't think that we've really talked about NestJS on this podcast before... So Doug, I think that you'd be a good person to kind of give us an introduction to what that actually is.

**Doug Martin:** Yeah, so NestJS is a server-side framework that's really TypeScript-first. You can always drop back to JavaScript if you want to...

**Nick Nisi:** But why would you want to?

**Doug Martin:** \[04:04\] I don't know, I honestly can't think of a reason you'd want to... \[laughs\] But NestJS is an interesting framework; it's one of the first ones I've found that really guides you into a nice architecture. Some of the things that initially drew me to it were that it had dependency injection built-in first class, and the way it really has you organize your modules, so you can expose your services to other modules... But you can be picky about what you wanna actually expose out, which is cool... It's built on top of Express or Fastify - you get to choose - and it kind of like abstracts some of that away from you.

Going back to the architecture point, one of the things that it does well is it provides you a place to kind of put everything. Before, I'd oftentimes find myself putting a lot of stuff into middleware, and wasn't really sure "Okay, where does this belong?", so I'd create another middleware. But NestJS - it really gives you pipes to transform the data that's coming in, you can do validation in there, you can do guards for authorization, and then interceptors to find logic before or after a request or a method. So for like logging, timing... Where before, you would all be shoving that into one place.

So I really like that it focuses on single responsibility, which is pretty neat. When looking at it, it felt like one of the -- it was still relatively new, but it felt pretty mature in some of the design decisions it makes... And it gets me to doing business logic in the interesting stuff a lot quicker, which is something I appreciate.

**Nick Nisi:** Yeah, definitely. There's a couple of points that you touched on in there that I thought were important... The first one being kind of built on top of either Fastify or Express. I think I've really only ever used it with Express so far, but we do have a show upcoming on Fastify, so I'm excited to learn more about that. But when you get into an Express app, it does feel like there's not a lot of guided structure to it. You can really just kind of create your routes, and then they're just doing whatever they need to do, and returning things.

**Doug Martin:** Yup.

**Nick Nisi:** So you end up with a lot of custom structure built... And it's like one of those things where there no express app is the same, in a lot of ways... But Nest takes a different approach, and everything is very structured... It has a much more handholdy approach, I would say. There's generators to generate the exact files that you need... And then you did mention that it is built around dependency injection. So the first real experience that I ever had with that, not really considering myself like a Java developer, was with Angular. And when I saw it, I was like "Well, this kind of looks a lot like modern Angular code." Did they kind of take --

**Doug Martin:** I think they did take a lot of cues from Angular, yeah. Sometimes you'll see them reference Angular in the docs... And I think on the backend it makes a little bit more sense when you're creating some of these APIs...

**Nick Nisi:** Yeah.

**Doug Martin:** On the frontend it felt awkward to me sometimes, when doing that on the frontend. But it definitely led to more testable code, which is one of the things I love about dependency injection... It's that you're tying yourself to an implementation; as long as you're conforming to interfaces and stuff like that, you can mock that stuff out a lot easier, which is something that's really cool. So it definitely is composition over inheritance, usually.

**Nick Nisi:** Yeah, I like that a lot. And I think that you're right, it does feel more at home on the server, on the backend side, as opposed to like the frontend... The frontend - you don't really even touch classes, or class-based approaches anymore, but this is like, everything is a class. Even things that you might just have a completely empty class, but your decorator has to attach to a class somewhere...

**Doug Martin:** Yup. \[laughter\]

**Nick Nisi:** So it's definitely going the complete opposite way of tools like React and other modern frontend frameworks... Which is cool. I do think that it fits well, because it does give you a lot of structure... And maybe we could break down a little bit of that structure. So you mentioned being able to use -- what was it... There was pipes, and...

**Doug Martin:** \[07:52\] Yeah, so there's pipes, guards, interceptors... I think one thing that's important to touch on is that it's kind of transport-agnostic. So as long as you have your structure in place, you can have REST, you can do microservices, you can do GraphQL and you'll feel at home in probably each one of those, because you can reuse your services. And then for each one of the endpoints that you're exposing, you can throw a guard on there to make sure that only certain people can access that. Or you can do the pipes to convert a request parameter coming into an int. Or validate that it matches some format, which is pretty interesting, especially when -- so when I started with NestJS, I was looking at REST at first, but I definitely wanted to start getting into GraphQL more... So I created basically a REST endpoint and a GraphQL endpoint, and they were both really similar. One's a controller and one's a resolver. That's the big difference. But then I could reuse the same services that back them. So I did have to really worry about changing any business logic, or how I'm accessing the database... I'm just purely flipping that out.

And the same, I think, applies for a lot of the microservices stuff. So yeah, you can have requests coming in, you can connect a RabbitMQ, or a Kafka, or whatever, and really plug into that pretty seamlessly... And I think that's one thing I really appreciated about how they designed this framework - they really encourage you to have those separate layers. So you have your controller or resolver, you have your service, you have your entities and DTOs... It feels like a lot of files at first, but then once you start going, your files become pretty short, and they're very pointed in what they're trying to address, which is -- like we talked about with Express - that sometimes got muddied up, when they definitely encourage you down a certain path.

**Nick Nisi:** Yeah, definitely. So breaking that down maybe a little bit more - everything starts with a module, right? The module is kind of the main file that will dictate...

**Doug Martin:** Yeah.

**Nick Nisi:** It kind of sets up how the dependency injection will work, and what can be injected, and things like that.

**Doug Martin:** Yup.

**Nick Nisi:** And then from there, you mentioned controllers and services. Can you kind of give a brief explanation of each of those?

**Doug Martin:** So everything within there is kind of a provider. NestJS will expose -- in the module, you can set up what your controllers are, and then everything else is a provider. It's something that can be injected into something else through the constructor.

**Nick Nisi:** That was one of the most confusing pieces when I got started... It was like, "What the heck is a provider?" Because everything's a provider...

**Doug Martin:** \[laughs\] All the things are providers, yeah. That was something that was confusing to me at first too, until I started to play with it... It took probably 30 minutes or so, and then I'm like "Oh, I'm starting to get it." It's when you start exporting stuff that it gets a little confusing, or when it doesn't work quite as you expected... But it's pretty good about telling you what you did wrong. So you create your controller, and then you can have your services in there, which - we say it's pretty structured in the way it does it, but honestly, your services can be anything that's injectable... And I don't think they necessarily always call it a service, but it's usually just a provider.

So you could have like your cats controller, and then you could have your cats service, that then interacts with the database to fetch your data for your controller. And then if you wanna throw a GraphQL resolver, you just reuse that same cats service, and then expose your GraphQL endpoints.

**Nick Nisi:** Nice. So you can really encapsulate more of the business logic of actually pulling, and maybe manipulating the data from the database within the service, and then expose it through either a resolver or a controller based on what you want to actually expose.

**Doug Martin:** Yeah. And then in your cats module say you had an animals module that's separate from it, and you wanna reuse the cats service for some reason - you could, just by exporting it from your module, but they can't import your controller. So you can be really specific on what you wanna expose that other modules can use. So then you can really keep stuff decoupled, and prevent them from dipping into your database, and instead they go through your service, which I think is a pretty powerful concept, because it's so easy to create spaghetti code when you're just reusing everything. Instead, you have to be explicit about that, which is something I do appreciate.

**Nick Nisi:** Definitely. Then you also mentioned touching -- the service can access stuff from the database, and it's doing that through models. Let's talk about that a little bit. Are the models -- I guess this is where I'm a little hazy on it... Is it specifically tied to TypeORM as its ORM solution?

**Doug Martin:** \[12:08\] No, it's not. So your service is really just an area to put your data access layer; you can do that in there. And then TypeORM -- Nest just kind of wraps this, so you do have a couple things, but oftentimes you call it an entity... And this is what's stored in your database. And that could be Mongo, that could be -- you can be using Typegoose, Sequelize, TypeORM, Prisma...

**Nick Nisi:** Gotcha.

**Doug Martin:** You can really use anything you want. And then you just create your entity and you can throw your different decorators on there, or whatever is required by your persistence framework. So it doesn't tie you to those. It definitely currently guides you down the TypeORM path. I had some complaints about TypeORM, but overall, it's suited my needs pretty well.

**Nick Nisi:** Yeah. I mean, ORMs are tough, right?

**Doug Martin:** Does that make sense? Yeah...

**Nick Nisi:** They're complex things...

**Doug Martin:** Oh, yeah.

**Nick Nisi:** I don't think I've met one that I really love... But TypeORM does seem to get the job done in a lot of ways, and I appreciate that.

**Doug Martin:** Me personally, I've always been thinking of query builders instead of going full TypeORM. Then you can create your business objects, but then you can generate your SQL. I never have been a fan of writing raw SQL, because then you don't get some of the type safety when compiling or doing whatever... But if you have your query builder, which is -- I mean, I have a Golang that's fairly popular that is just a query builder, and it doesn't introduce a lot of that ORMy stuff, which I think just gets confusing and is error-prone...

**Nick Nisi:** It is.

**Doug Martin:** ...so I agree with you on that.

**Nick Nisi:** Yeah. It's a very leaky abstraction that can be tough to get right. But it is pretty cool. In the most basic cases, you're able to create these classes to act as your entities, and that will represent the data that's in the database, and you can have fairly complex relations between other entities, and pull all of that data back, which is just really cool.

**Doug Martin:** The other thing it pushes you too is a data transfer object (DTO), which allows you to decouple what you're exposing in your API from how it's actually persisted in the database, which is something they talk about a lot... I think the best way that I think about it -- it's like, you have your normal DTO, and you might have some fields in your database you don't wanna expose to the end user for reads... But then you can also do a create DTO, that only has your input fields; then you have your update. And each one of those might be slightly different...

DTOs weren't something that I used a whole lot, until I really started to dive into Nest and some of, I guess, domain-driven design and thinking about how you actually do some of these communication patterns. And looking at the DTOs, I have to question why I didn't do it sooner. \[laughs\] Having to create an update separated from your model, and then having the DTO itself for reads... We can have a single DTO that's actually backed by more than one table. Or you might wanna store everything - snake case in the database, and then camel case, exposing it out... And there was never a good way to think about that without just putting that logic in your ORM layer, or mapping the columns.

**Nick Nisi:** Yeah. So they're really meant to be translated between the entity and what you actually want to expose.

**Doug Martin:** Yes. Or if something's coming in from an end user on the create and you wanna expose that as a single field or a JSON object, you can flatten that out in the entity and make that a lot simpler for the end user, and then store it however you want in the backend. So that's one thing that Nest calls out quite a bit; they're not super-explicit about it, but all their examples have it.

**Nick Nisi:** Yeah.

**Doug Martin:** Something I really appreciate about that.

**Nick Nisi:** That's really nice, being able to have that separation. And kind of speaking of that, I wanted to also touch up on GraphQL a little bit more in detail, because that is something that you mentioned that Nest supports out of the box... And you do that through the resolvers, rather than a controller. Do you wanna briefly talk about how you set that up?

**Doug Martin:** Yeah. So like in a RESTful API you create a controller and you do your get, put, post, delete, patch endpoints, and within GraphQL you have your queries, so your query endpoints and your mutation endpoints. So you create a resolver, and then you can decorate it with an @query decorator and say "Expose this method in my GraphQL API." And Nest will then use all the metadata collected from those decorators to then generate your schema for you at runtime. This is, of course, if you're going code-first. So you can create those different endpoints.

\[16:27\] And what's really nice about GraphQL is that it takes away a lot of the boilerplate of ensuring that you document everything with Swagger. It gives you a lot of that documentation explorability out of the box. You can build a lot of that validation in in GraphQL, but just make sure that you aren't requesting things that aren't there. The query language that GraphQL provides is awesome. I really fell in love with that with the GitHub API, when they started transitioning stuff over, and playing with that more. That was really eye-opening, to see how explorable it was. I could just create and only fetch the data that I needed. And Nest makes that really easy with the resolvers.

**Nick Nisi:** Nice. Yeah, I agree. And you mentioned code-first, versus -- what would you call the other way?

**Doug Martin:** Schema-first?

**Nick Nisi:** Schema-first, yeah. If you were doing schema-first, would that be where you're manually creating a GraphQL schema, and then ingesting that with Nest?

**Doug Martin:** Yeah, so you'd be -- I'm not an expert in this one, with Nest, because I've always done schema-first at first, and then I didn't like it, so I went code-first immediately. But you'd write out gql file, with your different input types, your object types, and your different endpoints, and you'd write all those out by hand. And then you could generate some of your DTOs from that. You would also have to write your resolver, and then Nest will tie those together. But like I said, I'm not an expert in that real, because what I appreciated about code-first is that I'm not double-defining things. I'm gonna need the DTOs anyway. So I write the DTO and I let it do the hard work. I don't enjoy writing out gql files, personally. \[laughs\]

**Nick Nisi:** Agreed, yes. And that's why I was asking, because that's really the only way that I've done it, is the code-first way. But that also leaves me more time in the TypeScript world, rather than writing GraphQL specifically. And it really lets the TypeScript DTOs in this case become the source of truth for what you can query or mutate within your API.

**Doug Martin:** Well, I find that I'm iterating so quickly in TypeScript, and I'm changing stuff in the DTO, especially if I'm doing a PoC or something, or an example for NestJS query. I'll be iterating on all of those details; I don't wanna think about the gql file, I just wanna be in my TypeScript, adding fields, putting validators on those, and then let Nest do the heavylifting.

**Nick Nisi:** Exactly.

**Doug Martin:** So instead of starting with schema-first and then having to generate my details every time - that would just annoy me... I think it would slow me down.

**Nick Nisi:** Yeah, definitely. Circling back to that - having the DTOs be the source of truth... And then another really cool thing that is kind of outside of all of this, but then when you're actually exposing this on the frontend and you're consuming it on the frontend, you can use tools like GraphQL Code Generator that can then generate the types that you need on the frontend based on the queries that you're making to your backend, and those are all tied to that.

**Doug Martin:** Yes.

**Nick Nisi:** So then you're not even generating types on the frontend. Everything, frontend to backend, is the DTO as the source of truth, which is just super-cool.

**Doug Martin:** Yeah. I'm so glad to see a lot of the new codegen tools coming out to make life easier... I mean, they've been in the Java space for a long time; always felt kind of clunky...

**Nick Nisi:** What's that?

**Doug Martin:** What - Java? I don't know. Don't worry about it. You don't need it. \[laughter\] What is weird about the frontend to me, for GraphQL - so you have your DTO on the backend, and in the frontend everything is essentially a partial, right? You don't know what will be fetched until you write your query. So then codegen can look at your actual queries and create the correct types for you, which is pretty cool. I've been excited to see a lot of the teams where we work starting to use that and embrace it more. It has been really exciting for me.

**Nick Nisi:** Yeah, agreed. It's just -- striving to be lazy. It's less code for me to write and maintain, and if I need to change something, it's just the DTO, in most cases, that I need to change it. And then re-generate files from there. I really like that... That's kind of the big, promising feature that I see of all of this, and it really makes approaching GraphQL on the backend quite easy, I think... Because you're really thinking about it in terms of entities and DTOs, and translating between them, and then exposing them.

**Doug Martin:** \[20:22\] I mean, that's what it's all about for me, especially with a lot of these projects. It's like, how do you not have to do anything, and just get up and running quickly? So you can get back to writing React or whatever you wanna be doing that actually interests you.

**Nick Nisi:** Absolutely.

**Doug Martin:** That's the important part.

**Nick Nisi:** Yeah, absolutely. And to make that a little bit easier, you also have a project that you've created called Nestjs-query. We're going to introduce and talk about that here after the break.

**Break:** \[20:47\]

**Nick Nisi:** So in one segment we talked about NestJS and what it does, and we really only scratched the surface, because there's a big surface area, as you mentioned in the break, of what Nest can actually do... But those are the pieces that we're kind of excited about with it, and really leveraging it to empower us to quickly work on the things that we want to do, and expose it, so that we can go back to working on more fun things, like the frontend.

You also have a project called Nestjs-query, and I wanted to touch on that. It's something that we use at C2FO in our dayjob, and it really helps to simplify using GraphQL in a number of different ways, with NestJS. So why don't you tell us -- do a better introduction to that project than I just did, and kind of tell us what it does.

**Doug Martin:** Yeah, so Nestjs-query - it tries to make CRUD and GraphQL super-simple, to the point where you define an entity and a DTO and you're done. So where this really came from - I was starting a side-project, and I find myself creating all these different entities and DTOs, and then writing every service, and "How do I filter this?", and making it consistent... It was a pain, at least for me, because it felt like I was retyping the same thing over and over again, and just switching up the types for modifying it slightly... And where a lot of the inspiration for Nestjs-query -- because I think the most powerful feature it has is the query generator. So it generates these query endpoints for you, so you can look up... Like, the main example in the repo is a simple to-do item, with subtasks, and tags, and things like that... So you define your DTO, but in your entities, and then expose these endpoints so you can look up all your tasks and you can do these complex filters on them.

Where a lot of that came from is - for the past five years we've been doing something similar internally at C2FO, where we had what we call the domain query... So it gave you a lot of the basic operators, like equal, not equal, like, not like, greater than, less than... All the standard ones, which is what you need 99% of the time, without exposing all these database details and all these database-specific operators. So we really abstracted that out, and that's the goal in Nestjs-query, is to make that really simple, so you don't have to think about a lot of that and you just get back to writing your frontend, and you can query all the data you need.

\[24:08\] It is a little opinionated... It's become less so as more people have adopted it, and there's more features, but it's cursor-based pagination first, which - if you haven't used it before, it feels a little awkward, I think... But once you start diving into it, you don't have to maintain the state of where you're at with the previous offset, or limit, and all that stuff. You really get away from that and you can just use whatever objects you're currently at, take its cursor, and then you can start paging from there. So it's really good for continuous pagination.

Facebook, I think, is the one that originally pioneered it, and then we've kind of expanded on that. We allow you to do offset paging and things like that, getting total counts... You can aggregate a lot of stuff. So you can group by, and sum, and all those standard things... And on top of that, you get a lot of your create endpoints, and it standardizes -- between all your mutations, it standardizes and makes sure that everything uses the term "input". So developers aren't trying to think "Okay, what do they call this parameter?" It's the same every time, which I know I personally enjoy, because it's so easy for teams to diverge when they're writing their different endpoints, and you have one that names it the name of the type, the other one calls it input... Who knows what they'll name it next. So it really focuses on standardizing a lot of that.

But the real magic here is that once you write your DTO and entity, you just register it with NestJS and GraphQL, and everything is done for you. And you get this giant schema file and it breaks it all out, but you didn't have to do any of it. So going back to the previous theme, it makes us lazy, and that's perfect.

**Nick Nisi:** Yes. I love it. So let me break that down a little bit, to kind of highlight some of the things that it's really doing. You mentioned that you just have to create the DTO for it, and you use a couple of different decorators for those DTOs. I'm thinking specifically the filterable, or -- is it filterable field?

**Doug Martin:** Yeah. So on your DTO, one of the initial decisions that I've made when designing it is that on your DTO you might want some fields that are filterable, and then others that you don't wanna allow users to do filters on. And so we introduced a new decorator that really just wraps the NestJS field with a new decorator called filterable field. That basically exposes that in the generated output as something that you can do your equal or greater than or less than comparisons on, and actually query with. I think that's the main change from the core stuff.

Then we've added a few other decorators for your DTOs, like you can do authorizers. So as requests come in, you can provide an additional filter that the user may not specify, to ensure that "Hey, only the current logged in user - fetch only their data." Or you can reject a request and throw an error immediately. GraphQL will wrap that for you. You can do relations... So that's one thing that's different about Nestjs-query.

And one thing I don't care about in a lot of the ORMs is that you had these stub relations on your entity, that may or may not be populated, you're not sure if they'll be there... Nestjs-query kind of removes those from the DTO, and you do it through a decorator and you say "Hey, my to-do item is related to sub-tasks." So instead of having a sub-task field on your DTO - because it won't be there when you're actually using it, until you fetch it. And that makes it really lazy. And I think it pairs well with the generated schema, because with GraphQL you're only fetching what you need. So we can expose those things, you can do synthetic relations that you may not have in your entity, but you can throw them on there and throw an additional filter with it, and say "Only give me completed sub-tasks." Or "Give me uncompleted sub-tasks", and you can create these two different relationships on there, really decoupling your DTO from your entity and how it's stored.

**Nick Nisi:** \[27:50\] Yeah, I like that a lot. And kind of bringing it down a little bit more... So you create those DTOs and the entities, and for -- like, if you just accept all of the opinions, and for a lot of the basic CRUD examples, that would really be it, right? You'd just then assemble those with your Nestjs-query module, and it will generate basically the resolver for you and the service for you, because it will know how to take that entity, and what it can grab from it, and it will know how to take the stuff that you're requesting through like a resolver, and pipe that to the service to give you back the data... And then also - you know, we're talking about GraphQL here - you only selected a partial subset of the actual data that's available... It's also going to automatically just filter out the fields that you don't need, so you're not sending back everything. It's just giving you exactly what you ask for.

**Doug Martin:** Right.

**Nick Nisi:** So when you went and wrote that code - it was just a basic CRUD to-do example - if I had my entity and my DTOs for what I want to accept for creating, reading, updating and deleting, that's it. There's no more code to write, right?

**Doug Martin:** Mm-hm. That's it.

**Nick Nisi:** Yeah.

**Doug Martin:** One thing to point out - you talked about generated services... This was another design decision that I made pretty early on, it was separating the service generation from the GraphQL layer. So the GraphQL layer only does the resolver. And then you get to choose your backend persistence. So we have adaptors for Typegoose, Mongoose, Sequelize and TypeORM, so you can flip those out, and we'd just define a simple query service interface, that as long as you implement that, you can really do whatever you want. So you can write your own custom service if you want. I think we do quite a bit of that at C2FO with some of the things we do internally. But everything else can still be auto-generated for you, and you pick and choose when you need to write something custom.

So by decoupling that from the GraphQL piece I think has really made it pretty powerful in what it can do. When I've seen some other frameworks, they just bind it to TypeORM, or they bind it to whatever that is... And while that might give you some more seamless stuff, I think it makes it less flexible to pick and choose when you're gonna do certain operations.

**Nick Nisi:** I agree. That makes it way more flexible. Like you said, you can also kind of break out of that. If you need to do something a little bit more complex than just take the data and throw it into a database, or read from a database. You could implement your own service and just have the auto-generated resolver call that, or you could -- there's other ways to inject yourself in, is that right?

**Doug Martin:** So you can do your own service, you can do your own resolver. We make it simple through the module that you can have everything auto-generated. But for example, the resolver - you just extend our CRUD resolver, and then you can start writing your own stuff, and you can override endpoints, and things like that... So you can then start to inject other services that may not be there. So you can really kind of step back whenever you need to. Does that answer your question?

**Nick Nisi:** Yeah, I think so. And another thing that I was thinking about was - sometimes you might need to do a more complex translation between a DTO and an entity...

**Doug Martin:** Oh, yeah. So we introduced a -- there's a concept we call an assembler. So this is the translation layer between the DTO and the entity... And we create a default one for you, where we just use a class transformer and validator and we transform them between the two classes... But you can also write your own. A common use case is converting from snake case to camel case. Or you might have a composite ID that comes in and you wanna split that into two pieces and turn that into two fields. I won't say I've seen a lot of use cases for it, but those have been the most common ones.

Or, like with Sequelize, we had to create a different assembler to turn it into the correct sequelized model. You could just use a class transformer to do it... So it provided us a nice, simple place to do that. And that's one thing that's always bothered me when writing APIs before, it's like "Okay, where do I put this translation logic?" and you just shove it and you're out. But that doesn't make it super-testable... So by creating these assemblers to do that translation, you're testing just that piece with the input and output, and there's no question of like really where does it exist, or where should it exist.

**Nick Nisi:** Yeah, that's really cool. The actual code that you're writing becomes super-testable, because you can just test that assembler class in isolation, for example, without having to run everything... And then a lot of the code is just auto-generated for you, the schema is auto-generated for you... And is there a way to use this with the schema-first approach? Or do you have to go with the code-first?

**Doug Martin:** \[32:20\] You have to go code-first currently. And I've kind of done that on purpose, mainly because I was doing code-first... But I suppose you could create your classes from there, but then because it's generating your schema for you entirely, you'd have to figure out how to merge the two, and I think it's more error-prone. If you just let the system generate it for you, it's way less likely to miss it out. So no schema-first... \[laughs\]

**Nick Nisi:** Yeah, that's okay. That's another opinion. And as long as you're willing to tolerate that, which I think is personally the way to go, just because I'd rather write classes in TypeScript than GraphQL schemas directly.

**Doug Martin:** Yeah.

**Nick Nisi:** So yeah, I think that that's a more approachable way, especially as you're first getting started, into all of these new technologies. The code-first approach is a little bit more friendly, in my opinion, than just setting you loose writing a GraphQL schema... \[laughter\]

**Doug Martin:** Yeah, I agree.

**Nick Nisi:** Another thing that you touched on, but I really wanna dive into a little bit more, is kind of that pagination piece, because I think that that is super-powerful, not having to write that yourself, or manage that yourself. So what got you into thinking that that was a key feature that this library needed?

**Doug Martin:** At the time when I was writing it, back in 2019, cursor-based pagination was kind of what they always pushed you down, but there wasn't an easy way to just implement that out of the box. So one of the inital tasks I had was "Okay, let's figure out how to make this as simple as possible." So I started to write the cursor-based pagination, and then that was the only option at first. You couldn't do offset, or just disable pagination entirely... So then as more features came in from other users, we started to implement these other ways of doing it.

Over time, the cursor-based pagination has gotten a lot smarter. So out of the box, you can do an offset-based cursor, which is the simplest way of doing it and implementing it, and you just basically take you current limit --

**Nick Nisi:** "Give me the first ten rows, and then give me 11 through 20", or whatever...

**Doug Martin:** Yup. And the way that works is that we just take that limit and offset and we Base64-encode it and throw it into our cursor. So we'll take that for every entity that comes back and assign a unique cursor based off its position in the list.

The problem with offset-based pagination is if you have a large table, it gets slower the more you page into it, because the database has to go through more pages, and it's not as efficient. So then we implemented keyset-based pagination, where you get to define "Here's the unique identifiers for this table that I wanna actually page on." So usually, it'd be like an ID. The real benefit of this is that we can then quickly create an additional filter that we just throw on there and say "Okay, if you're paging forward, we're looking for all records that have an ID greater than the one past it." So the database is gonna have indexes on those typically, and so it's very quick lookups. I mean, you get consistent response times.

And then with the offset -- so if you don't wanna use cursor-based pagination at all, you can always drop back to offset, where you just pass in a limit and offset, and go about your day... And then you can have the option, like I said earlier, to turn off pagination entirely. Sometimes you have a really small result set and you don't wanna deal with that, so you just wanna get everything back at once, and you're able to do that

With each one of these strategies, offset and cursor, we also automatically include a page info. So you can get total page count, you can find out if you have next page, previous page... And with cursor you also get the start cursor and end cursor, so you don't need to look at every node in the response, or every edge in the response... So you can quickly just create a table and just plug it in, especially with a lot of relay support for these cursor-based pagination that's plug-and-play for the most part.

**Nick Nisi:** \[36:03\] Yeah, that's really cool. And speaking to that too, when you're developing your DTOs, you don't have to worry about those edges and nodes pieces...

**Doug Martin:** Yeah.

**Nick Nisi:** Those will be automatically generated and put in, and then also the more -- I don't know, I'd call it metadata about where you're at, like the current cursor, and how many records you have left... Things like that are just automatically provided to you. From a client requesting that, do you have to ask for that as part of your query, and it's just like part of the schema?

**Doug Martin:** Yeah, so you get to choose at the detail level, you can do -- there's a decorator called query options where you can say, "Okay, here's the paging strategy I have." And in fact, you can do multiple paging strategies, especially for relations, you can do one that's offset and one that's cursor... So you could call it subtasks connection and then just subtasks. And then on the client, you can do things for the API and you can request that data back implicitly or explicitly, based off whatever strategy you're using.

So sometimes a team may start up with offset-based pagination, and then they can transition to cursor pretty simply by just changing something in the backend... And they don't have to really worry about a lot of those details.

**Nick Nisi:** Very cool.

**Doug Martin:** Yeah.

**Nick Nisi:** That's kind of a lot that it does for you, and it really builds on top of the basic GraphQL support that Nest gives you. If you had to say, when would you recommend someone reach for this as an extension of Nest, rather than trying to go just like plain Nest and GraphQL? Is there like a key feature or something that you would need to have before you'd recommend it, or...?

**Doug Martin:** For me personally, I'd probably just start with this, and then I would drop down to Nest when I need some more complex things. So this is gonna provide a lot of the things that you'll need out of the box, and then what I find myself doing is then I'll write an additional resolver, and Nest will merge those two. You don't have to extend, or anything. You can just write your own custom resolver and your own customer services when you need to do more complex operations. But if you're just trying to get up and running with a simple app and you wanna get started on that frontend real fast, I would think this is the way to go, because you're not having to write all your resolver endpoints, your database integration, your service... You don't have to do any of that. You focus on what your data looks like, how you wanna expose it, and you're ready to go, as long as you accept a lot of the opinions that are built in, which... I'd rather not have to make a lot of those decisions, so... Just go with it.

**Nick Nisi:** Yeah, I agree. Based on my usage of it, it does seem like it is the way to go forward... Just like, getting started, getting going, and then if you have to get more complex with things, like if you really need to break out of an opinion or do something that's super-complex, then it can get out of your way quite easily, which is really nice. That's what I really like the most about it - it's there for the basic things, but it's not locking me in and making me regret picking it, if there's something that it doesn't support out of the box; like, it just gets out of the way.

**Doug Martin:** Right. Yeah. It's built to be simply an additional tool built on top of the NestJS GraphQL. It doesn't really replace anything that it does. It builds on that solid foundation that it provides. And like you said, you can drop out of it anytime you want. And you can still keep around Nestjs-query and then write your own custom stuff. I think that's the really cool thing about some of the code-first approach, and the way NestJS does a lot of that merging between the resolves is the fact that you can have them live side by side with your own custom query endpoints... Which is something -- at first I was like "How is that gonna work? Am I gonna have to extend the CRUD resolver?" and then I just wrote a separate one with the things that I needed... I'm like, "Oh, that actually works. That's really cool." Super-excited to see that just worked.

**Nick Nisi:** Yeah, definitely.

**Break:** \[39:51\]

**Nick Nisi:** So Doug, specific to Nestjs-query, is there anything else that you want to highlight or touch on before we talk about more meta things in general?

**Doug Martin:** I think the biggest thing that I -- and it's not necessarily a NestJS-query thing, it's a Nest community. This has been the first open source project that I've worked on where everybody has been super-friendly when they're submitting an issue... Pretty much every single one of them is like "Thanks for the project, this is amazing." They're not coming in and demanding something of you, which is so refreshing. And to see the chats that go on in the Discord community, and the way people have just jumped in to help has been amazing. I'm not always around all the time to answer questions and to then come back and find somebody else posting your project as a solution, and then really hyping it up... Or answering questions on GitHub and trying to contribute back is just really nice. I can't stress enough how great the community is in the NestJS ecosystem.

**Nick Nisi:** Yeah. That's gotta be a good feeling, coming into a chat and seeing your solution posted without you prompting it, right? It's just pretty cool.

**Doug Martin:** Yeah. This one developer - his name is Scott, and he has been an amazing advocate. And he's also contributed back a lot of stuff. He talks about coding just kind of being a hobby for him. But to see how involved he is with the community and everything he does to help push it forward is super-cool.

The other thing that has been interesting working with Nest is how many amazing engineers outside of the U.S. that I get to interact with... From Europe, Russia, all over Asia... It's people from all over the world, and it's not just so U.S.-centric, which has been really nice. To know that my project is helping a company halfway across the world deliver solutions is really cool.

**Nick Nisi:** Yeah, that's awesome. And that kind of gets into another thing I wanted to talk about, which is developing tools and applications for developers. How do you feel about that? Is it quite different, is it more fun than traditional client work, or daily work that you end up working on? Is it a different feeling in general?

**Doug Martin:** I think it's a different feeling in general. For me, building tools for other engineers that aren't always the flashiest things, but it's like query builders, parsing csv's, thing like that - it gives me that nice feeling of knowing that I'm helping another engineer out, without having to be there.

**Nick Nisi:** Yeah.

**Doug Martin:** \[44:09\] When you're writing something for an end user or a business application, you're trying to think of the ways they could break it. When you're writing something for an engineer, you're trying to think about the ways that they could use it, or would want to use it. So it's kind of a different frame of mind, especially when creating something like Nestjs-query or Goku, or FastCSV; there's all these different use cases... And then when you get an issue come in, you're like "Wow, I never thought about that before." It's really -- you have to take a lot more time to dive in and figure out "Okay, what are you trying to accomplish here?" and "How can I help you?"

**Nick Nisi:** Yeah.

**Doug Martin:** It's just a different frame of mind. I love that piece of it. I wish I had more time to stay on top of everything all the time, but it's purely like a side project to get my coding fix...

**Nick Nisi:** Yeah... \[laughs\]

**Doug Martin:** But doing that is -- it's enjoyable. I just like doing it.

**Nick Nisi:** Definitely, because it is kind of scratching your own itch, in a lot of ways... You're building a tool that you would wanna use, but it just turns out that others would also really like to use it, which is really nice. And coming from a developer mindset - you're a developer, working on tools for yourself, that other developers find very helpful.

**Doug Martin:** Well, it's a way to put yourself in another developer's shoes, and get a glimpse of their job and what they're trying to do. That's a cool thing, because you can become so siloed in your own work and what you're focusing on, and how you do it at your shop, that when you get to see the way somebody else does it and what their problems are, it's like living another life for a brief moment.

**Nick Nisi:** Yeah, definitely. There's also something that you said. You mentioned end users - you were thinking about how they might break the code... I've gotta imagine that you would think that about developers, too - "How can I manipulate this code to do what I want?" \[laughs\]

**Doug Martin:** Yeah, you definitely do have to think about that... But it's always the use cases -- and I've found with developer tools... I've spent a lot more time -- and every engineer should be doing this, spending a lot of time testing... But I've spent a lot of time trying to cover all the edge cases and stuff like that, because this is the foundation of somebody else's application, so it has to have good test coverage, it has to throw errors in the correct place, or handle certain scenarios. So I'm always keeping that in mind when I'm releasing a new piece of software that -- if I do a bad release, that could break thousands of applications. I think FastCSV is nearing a million downloads a day, or a week, or whatever... You look at that and you're like, "Okay, the impact that you could have if you break it is a little bit scarier, but also exciting..." So definitely thinking about how they could break it, and making sure that you have test coverage for all that has always been super-important to me, especially in these types of tools.

**Nick Nisi:** Yeah, definitely. And FastCSV being another open source project that you've created, right?

**Doug Martin:** Yeah, that was -- I think you were around when I created that one.

**Nick Nisi:** I was, yeah.

**Doug Martin:** The CSV parser we were using at the time wasn't quite quick enough to do ten million lines... So we had to figure that one out. And then it's kind of continued to just be adopted, which is pretty cool, without having to do -- I've never been a marketer, or somebody that's good at marketing the work that I've done... To see something like that just continue to be used and to grow in the community is pretty neat.

**Nick Nisi:** It goes back to scratching your own itch, and it just turns out that other people have that itch, too. It's really cool. Taking another step back, I wanted to ask you about -- when we first started working together, almost a decade ago, or maybe more than a decade ago now, we were writing a lot of JavaScript, Dojo, things like that... What got you over to TypeScript? You went there as a result of Nest? You found Nest after falling for TypeScript, or...?

**Doug Martin:** Let's see... I remember when they announced TypeScript at JSConf, and I think there were mixed reactions at the time... And at the time -- I loved JavaScript. I'd probably created some projects I shouldn't have, like a rules engine written in JavaScript... I think you remember Nools...

**Nick Nisi:** Yup.

**Doug Martin:** And I was a huge JavaScript developer, up until (I think) about 2015. Then I started doing Golang. Then I moved on to Scala, and doing a lot of that. Then I wanted to come back to my roots, I guess, and started doing more JavaScript, and uplifting some of the old projects that I had -- like, FastCSV was written in JavaScript initially. So I wanted to look at what the latest technologies were, and TypeScript was really starting to take off, and I had been doing typed languages a lot recently... And I fell in love with how much safety it provides you... It's kind of like that warm blanket at night. You feel a little bit safer.

So I went through and started upgrading FastCSV, and what I quickly found is starting JavaScript first and then porting over - how many things that you just ignore that could break your code, or whatever... And then TypeScript's like, "Nope, you shouldn't be doing that."

So that's when I really started to fall in love with it and see the power of it. I mean, it's not giving you as many checks as a fully-typed language would, but it makes JavaScript just a little bit better. So it was really that -- coming back from typed languages to JavaScript.

And the other thing that TypeScript helped me do, when coming back to an old JavaScript project, you have to build up this huge mental -- the full context of the project, to know how everything ties together and make sure you're thinking about all the edge cases. And if you haven't looked at a piece of code in a couple of years, especially JavaScript code, that's hard. So you're like "How is this called again?" and then you right-click, and find usages, and nothing pops up. And you're like, "Oh, that's because I did a dynamic lookup or something on it, and it's not actually referenced anywhere."

So TypeScript gives me the ability to come back and support projects, even though I'm not actively working on them day to day. So once I really embraced the power of that, I'm not looking back.

**Nick Nisi:** Yeah. That's just a hilarious observation that I've had, too. I used to pride myself on all of the ridiculous world building that I could do in my head, to keep it all going...

**Doug Martin:** \[laughs\] Yeah.

**Nick Nisi:** And I'd just type it, and -- I knew exactly what it was, and I type it, very errors and everything... And now I'm just like, if I go back to a project that doesn't have TypeScript, I'm just like "Was it just that I was younger then, and I just can't do that anymore? Or am I just so spoiled now by the tools?" Yeah... Either way, I don't wanna find out; I'll just keep it...

**Doug Martin:** We're getting old, Nick. We can't do it. \[laughter\] Oh, man... I think you and I were sitting next to each other when they announced TypeScript...

**Nick Nisi:** \[50:40\] Yeah.

**Doug Martin:** You know, "If I wanted TypeScript, I'd be using Java, right? Go to a typed language." How wrong we were... \[laughs\]

**Nick Nisi:** We had the same reaction, because we were also sitting next to each other when - probably on Hacker News, or something - CoffeeScript was announced, or came out, or got popular, or something... It was just like, "That looks cool, but why would I want that...?"

**Doug Martin:** I think we were sitting next to each other when React came out of JSConf, too... Or when they really started to talk about it... And that was another one, we were like "Hm... That's interesting." But then I automatically went back to "Well, I could kind of do that in Dojo, with widgets, and the binding stuff in there..." I'm like, "Dojo already did it." But then, once I started to actually use React, I'm like, "This is amazing. This is the easiest way to get an application up and running and create a cool frontend..." I think that's the thing - over the years, you're like, "How many times have I been wrong?" It teaches you to not have strong opinions.

**Nick Nisi:** You know, that's the great thing - learn to fail fast, learn to grow from those failures, and that's how you will grow, I guess.

**Doug Martin:** Yeah.

**Nick Nisi:** But yes, I do remember that at JSConf. That was a lot of fun. We were writing a Backbone application at the time, and we were actually writing almost a Dojo declarative syntax, right? Remember Thumbs?

**Doug Martin:** Thumbs... \[laughter\]

**Nick Nisi:** Yeah. We're like, "Nah, we'll stick with Backbone." And here we are, a little less than a decade later of fawning over React and TypeScript now...

**Doug Martin:** Yup, yup... \[laughs\]

**Nick Nisi:** Yeah. Well, Doug, thanks so much for coming on. Is there anything else before I let you go that you want to say about NestJS, Nestjs-query, TypeScript, GraphQL?

**Doug Martin:** I'm always looking for contributors. If you have any interest in helping to move this project along, or you heard something you might have liked, feel free to put an issue out there, or just start going through an issue in PRs. There's not a better feeling than the maintainer of an open source project to get this random, amazing PR that just drops in your lap and you're like, "Wow, that's amazing. You should become part of the core contributors."

**Nick Nisi:** Yeah.

**Doug Martin:** So if you're at all interested in helping to contribute and move this project along, I'd love that. That'd be amazing.

**Nick Nisi:** Would it be best to reach out in an issue, GitHub discussion, Discord, Twitter?

**Doug Martin:** Honestly, just start participating in the issues. And you can also reach out to me directly, that's fine as well.

**Nick Nisi:** Awesome. Yeah, and we'll have links in the show notes for all of that. Doug, thanks so much for coming on and chatting with us about React -- sorry, not React; about NestJS, Nestjs-query, and TypeScript and GraphQL. I really appreciate it.

**Doug Martin:** Thank you for having me.

**Nick Nisi:** Thanks so much.

**Outro:** \[53:18\]

**HorseJS:** Is JavaScript the language suffering?
