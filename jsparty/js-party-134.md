**Kevin Ball:** Hello, and welcome to JS Party! This is Kball, I'll be your MC this week. I'm so excited to be back on the show, and these guys missed me so much they let me run things today. I am joined by the one and only Jerod Santo. Jerod, how are you doing?

**Jerod Santo:** What's up, man? Good to have you back.

**Kevin Ball:** Yeah, yeah. And Nick Nisi.

**Nick Nisi:** Hoy-hoy.

**Kevin Ball:** I cannot tell you how much I've missed that hoy-hoy. Alright, so today y'all are gonna indulge me and talk about something that I have been digging into quite a bit over the last 3-6 months, both while I was gone, but even some before that, which is the subject of GraphQL. From what I was hearing, you all have different levels of experience, so obviously I'm gonna pick on you a lot and make you explain things, so that we get that played out in front of everybody... But let's start with just kind of describing what is GraphQL. I actually wanna hear everybody's answer, starting from the least knowledgeable. Jerod, you said you had only played a tiny, tiny bit --

**Jerod Santo:** How dare you...?

**Kevin Ball:** From your perspective, what is GraphQL?

**Jerod Santo:** Yeah, so I've talked about it a lot, but I haven't used it a lot... Most of my experience with GraphQL is toying with it with the GitHub API. So I can tell you what I think GraphQL is as a newb... And that would be an API architecture wherein the API clients are allowed to craft queries and mutations according to what's been laid out by the API provider, and can put together the exact data they require to suck down into their little API clients. There's probably more to it than that, but that's my newb description. How did I do?

**Kevin Ball:** Not too bad. Nick, do you wanna add or amend anything on that?

**Nick Nisi:** Yeah, so previously I've used libraries like D3 and Chart.js to make these graphs, but this is the next iteration on that. A full language to create awesome graphing libraries... \[laughter\] Yeah, I think that that kind of goes to my understanding of it. It's all schema-driven and type-safe, so the queries know exactly what they can pull and exactly what they will get back, which is pretty cool... As opposed to something like REST, where you have specific endpoints to fetch things from. You kind of just have a grab bag endpoint where you can just say "This is what I want. This is all of the properties that I specifically want on that", and then you can relationships between that.

\[00:04:11.11\] One example that I always think of is pulling a tweet. You can grab the tweet, but then you can say "I also want the number of likes that it has, and then I also want the replies to that, which would be other tweets that are all related to that top tweet..." Which may or may not be correct, but that's the way I at least think about it in my mind.

**Jerod Santo:** How does this metaphor apply, Kball? The server metaphor. You're at a restaurant... An API - I think of it like serving up stuff, you know? So a REST API where you have endpoints, and it's just described -- this would be like where your waiter comes and they're like "Here. Here's the menu. What would you like to order?" and you say "I'll take a hamburger." They say "Okay, I'll get you a hamburger", and they send it back. Whereas maybe a GraphQL API is more like an open buffet, where it's like "Here's all of our food. You know what's in front of you. Pick and choose what you want, make your plate and take it back to your table." No?

**Nick Nisi:** That doesn't sound good, in these times at least.

**Kevin Ball:** \[laughs\] Yeah, that would make GraphQL very contagious.

**Jerod Santo:** Dangerous. Something dangerous.

**Kevin Ball:** Dangerous. Yeah, I feel like you two have summed it up pretty well. I'm not sure I dig the metaphor, but one of the layers that I would put on top of that is -- if you think about a REST API, everything is centered around resources, and each resource has its own place that you go and get it. But if there are relationships between those resources, you have to on the client-side understand those resources, and go and fetch the pieces that you want. GraphQL starts from also having a whole set of resources. That's the schema that you're talking about, the schema-driven nature of it... But it maps out the connections between those resources, so that anytime you are accessing one resource, you can specify all the graph of relationships you wanna follow down and pull data from.

Then the other piece in terms of having the single place to go - it is one location, one endpoint, but there is this set of top-level queries that you can run, where the API provider still gets to define what are the ways into my buffet, so to speak...

**Jerod Santo:** Oh, I knew it was coming back around... See - you actually do like this metaphor, the more you think about it. Keep going, please.

**Kevin Ball:** Oh, I'll play with anything you give me, you know that... But you can't necessarily grab at the top level every resource that you might wanna access. Some resources might only be accessible within the context of another resource... And the options that you have available are those top-level queries. So you can think of everything within GraphQL that you're querying as a graph that starts with a single node at the top, which is a query. So a query is the top, then it steps down, a relationship to "Here's a set of queries that are available."

Let's use the GitHub API as an example. If we look at the GitHub API, what are the queries for public schema that's available. GraphQL API, queries... The first one that it lists is Marketplace listings. So that would be one hop down that's gonna give you a set of listings in the marketplace... Does that have any relationships? That actually doesn't have relationships. But from that, you can kind of hop down and ask for the sets of things that you would want from that query. Say we were doing your buffet query - you might say that you can only start with pancakes or eggs, and those are the top-level things. You can't just get bacon on its own.

**Jerod Santo:** It's a breakfast buffet?

**Kevin Ball:** But you could get eggs with a relationship to bacon, or you could get pancakes in a relationship to bacon, right? You have these sort of enters into the API that you can start with, and then you can follow down the relationships as far as you go.

**Jerod Santo:** \[00:08:01.08\] What kind of buffet doesn't have bacon as a top-level entry? Come on. Just start with the bacon and go from there.

**Kevin Ball:** Well, that's API design... \[laughter\] One of the things I thought actually before I started dealing with GraphQL is "Okay, everything's there. Where's the API? Do you still have to design your API?" And that set of top-level queries actually makes a pretty big difference in terms of how do you think about exposing things in your API? What are the core concepts that are the ways that people can enter into this thing?

And maybe you wanna expose everything at the top there. Maybe every resource that you have has a top-level query. So I can always start with bacon, and then get the things related to bacon, and I can always start with something else and get the things related to that... But that may not be the right answer.

**Jerod Santo:** Isn't it like REST APIs in that way? I mean, your endpoints are your top-level menu items, right? In a RESTful API.

**Kevin Ball:** In many ways, yes. It's like, if you have a REST API, but at every point that you had a REST API -- say you have a relationship idea, \[unintelligible 00:09:01.10\] In a traditional REST API you'd get that key, and then you'd go fetch the resource for that key from another endpoint, the resource for that endpoint. Here you can just say "I wanna follow that relationship. Give me back all the data."

**Jerod Santo:** Why is that better?

**Kevin Ball:** There's a couple of reasons why it has advantages. It also can have disadvantages. I think it's really interesting to look at what are some of the pros and cons of GraphQL, because this is not a panacea. It's not a "better for everything". One of the ways in which it is better is it reduces the number of network calls that you're gonna have to make. Especially on a mobile phone or something like that, you want to be making as few calls over the slow part of the network as possible. The slow part of the network is between the phone and the API server.

So if you can consolidate that all into a single request, and pull back only the data you need, you could be much more network-efficient... Even if on the backend -- like, one way that you can implement a GraphQL server is have a wrapper around a REST API. That may still be valuable, but then all those independent API calls are happening in your data center network, which is super-fast.

This might be a good time to actually talk a little bit about some of those benefits and drawbacks. I'd be once again curious -- Nick, it sounds like you've been playing with it a little bit; what have you found to be good or bad, in your first look?

**Nick Nisi:** Yeah, so I guess I'll start with the bad first... It's another layer on top of things to learn. This whole language for defining a schema, or defining your query, that you have to learn. So there's syntax involved around that. It's got types to it, which are different from the way you define TypeScript types, so you have to learn that... You have to keep those separate.

And then - I could be wrong about this, but don't you have to explicitly define everything that you want to get back? Whereas with a REST endpoint you can just say "Give me back all the bacon", and it'll give you back whatever it has on that.

**Kevin Ball:** All the bacon, yeah.

**Nick Nisi:** Yeah.

**Kevin Ball:** Yeah, it is much more verbose.

**Nick Nisi:** Yeah. And sometimes I don't know what I want, and so that's bad...

**Kevin Ball:** It's harder to programmatically explore in that way, though it does expose an endpoint that lets you programmatically explore what the schemas look like.

**Nick Nisi:** Are you talking about \[unintelligible 00:11:16.21\]

**Kevin Ball:** Yeah, I mean -- so your GraphQL server... Actually, I don't know necessarily if that is -- I think that that is part of the spec. I know it's a part of the GraphQL server we've been using. It has a schema endpoint where your client can fetch back "Here's the schema for all of the things", and then you could programmatically explore what's in there or not. But if you're just poking around at it - yeah, it is definitely more painful than "Let me fetch this and examine the data."

**Nick Nisi:** Yeah. That is one thing that I was gonna put in the pro category - that tool, and specifically those calls that it's making to figure out what you can actually get, those are introspection queries that it is doing on its own, and it's really cool that that's just kind of built into the spec, to say like "Tell me what I can do here", and then bring that back, and then you can build really powerful tools, like that (I think it's called) \[unintelligible 00:12:06.29\] It gives me a blank canvas to start writing a query, and I can hit Ctrl+Space and it will tell me what I can autocomplete here, and what makes sense, and it'll immediately show a little red line on that line if it's something that I can't actually fetch, or if it's not formed correctly... So it really does help you as much as possible when you're exploring like that, which is what I've been doing quite a lot... So I do like that.

\[00:12:29.21\] And I do like the tooling so far that I've been playing around with. It's really powerful, in that I basically give it "This is what our database model looks like, and this is the type of queries that you can expect", and it just figures out all the plumbing for me and then gives me back exactly what I want, which is really cool.

**Kevin Ball:** That is super-cool... And you mentioned the typing being different than in TypeScript - at least with the tooling that we're using, you can autogenerate TypeScript types based on the queries that you're running...

**Jerod Santo:** That's cool.

**Kevin Ball:** ...define a particular query, and have it generate an explicit TypeScript type that has only the fields that are coming back from your query, which lets you kind of get really nice, end-to-end type safety.

**Nick Nisi:** Is that like Apollo Codegen?

**Kevin Ball:** Yeah.

**Nick Nisi:** Yeah, I'm playing with that, too... And that is cool, but I'm annoyed with it right now, because if you change those, it doesn't actually go and clean up the types that it created previously... So my result right now is just blow away that generated types directory and then let it regenerate everything, which is kind of annoying... But I'm sure it's something that can be fixed.

So far, I've gone the opposite way with -- I don't really touch schema generation on my own, so I don't think about the GraphQL schema. I am using a library called Nest, that has a GraphQL plugin for it. So I define all of the types for what my queries will look like in TypeScript with decorators, and then it generates a schema for me from that.

**Kevin Ball:** Yeah. I think one of the really cool things that you're touching on a little bit in the tooling is all the same type of magic that you can get with an IDE when you go to a strongly-typed language, and all of the amazing different guarantees and other things you could do - this allows you to do end-to-end with your API server.

**Jerod Santo:** You were touching on discovery there, Nick, and I think it's worth pointing out -- maybe it's not worth pointing out, but I'm gonna point it out anyways... That RESTful APIs in \[unintelligible 00:14:32.12\] are also discoverable, because of the hypermedia linking in the response. It's just that RESTful APIs in practice don't usually implement that part of RESTful APIs, the concept. GitHub actually had a really nice hypermedia API where you could say "Here is the repo and here are all of the issues." The response could say "Here's my repo object, and as a part of that object is a link to a URL wherein all of those issues for the repo exist." My point is you could also, in concept, programmatically crawl or discover a RESTful API, like you could with the schema -- what's it called, schema endpoint? ...where it will tell you your GraphQL schema.

So that would have been pretty cool if it took off... Unfortunately, it's difficult to implement server-side, and it's just always one more thing, and a lot of times that's the part that gets dropped off of the RESTful APIs, which leaves developers like us, instead of letting our tooling discover how it all works, basically just reading the docs and saying "Where are the comments?" and constructing a URL. So in practice it didn't really pay off, but in concept, RESTful APIs also were supposed to be discoverable... And some of them are, the better ones.

**Kevin Ball:** I think part of what makes that hard to implement is because it requires a sort of centralization of thought, because every endpoint needs to know about every other endpoint, or at least all of their references... And as you say, a good API, that's well controlled and designed is gonna have that, but many are not; they're developed independently, whereas GraphQL, by being more rigid, it forces into "Everything is going through this GraphQL endpoint, so we know about everything, so we can force that level of explicitness."

**Jerod Santo:** \[00:16:15.23\] And that produces the tooling, right? The thing that happened around RESTful APIs is because it wasn't reliable to have those linking between resources, the tooling wasn't built out in order to do the discover ability, the actual discovery. So you couldn't rely on it, so habitually we didn't think about it, so we'd always just go read the docs, and find the endpoints, and hardcode those into our clients and whatnot. So I think a big win is that because it's there from the start, by default, on all GraphQL APIs, now that you can build your tooling saying, it's saying "It's gonna be there." And that makes a huge difference in practice.

**Break:** \[00:16:51.19\]

**Kevin Ball:** Alright, so we've talked some about GraphQL as a mental model, what some of the pros, some of the cons, things like that; even some of the different tooling that it creates. Let's dive into something a little bit more concrete, looking at what are different approaches to actually implementing GraphQL, what are the different pieces of it that you would need to implement, and maybe some specific examples and implementations. Nick, do you wanna lead us off, since you've been working particularly with one?

**Nick Nisi:** Sure. So like I said, I've been using NestJS for this, and its own plugin, called nestjs/graphql, that is actually just a wrapper on top of Apollo, or - there's another one, I think... But Apollo is the one that I'm using. Fastify I think is another thing. Anyway, it is interesting, because it lets me just set up everything in a very similar way to the way I was setting up REST endpoints with Nest, where I can create instead of a controller to control all of the RESTful endpoints I have, I create a resolver, and the resolver can have a query method, or specifically the pieces of the GraphQL model that I want to fetch... And then it can pull that data into any processing it needs to the query, and then pass that along to a service that can go read from the database and query it, exactly what I need, and then deliver that, or do any other kind of processing. So it's really nice and easy to set up. It's a TypeScript-first library, and it's very decorator-heavy, which is interesting... But it does things kind of magically, but it's pretty easy to pick up on.

**Kevin Ball:** You used a keyword there that I don't think we actually dug into defining yet, but that is pretty core to implementing at least GraphQL servers, the server-side, which is a resolver. Do you wanna describe a little bit what that is, or - I can take a stab at it, or whatever you prefer.

**Nick Nisi:** \[00:19:50.29\] As best that I can, I'll try... So a resolver would be something that provides the instructions for taking the GraphQL string, the query that it receives, and actually doing something with that, so passing that off to do whatever it needs to with that. So that could be like making sure that -- I don't know, I'm falling apart here a little bit, but maybe like type-checking arguments that might be passed in to the query, or things like that could happen there.

**Kevin Ball:** Yeah, I think that's good. The resolvers take responsibility for mapping from the query to the data, and one of the interesting things that I've seen there is those can be more or less granular. So you could have a single resolver that resolves all of an object, everything that it has there. Or you can actually break apart different resolvers per field in that object, depending on how your data is stored. So if for example you're building up a GraphQL object out of several different objects in your database, those references to different objects could actually be in different resolvers -- or different parts of the object could be in different resolvers... And then if those fields aren't queried, those resolvers aren't called and you don't have to take those database heads. So they can actually give you a mechanism for making your backend much more efficient.

**Jerod Santo:** Speaking of backends and efficiency, what happens in a backend when somebody crafts a GraphQL API that just spans six of your tables, and just causes all these joins? Let's take a blog scenario - a blog post has comments, comments have authors, authors have blog posts. So couldn't I just say blog.comments.authors.first.blog.comments? Can't I just drill down and just completely screw over your backend?

**Kevin Ball:** Yes? \[laughter\]

**Jerod Santo:** Okay, cool.

**Kevin Ball:** And this is actually one of the things that I saw coming into this. The first version of the GraphQL server that I've been working a lot on was written by somebody who had a frontend background, who did not understand databases and schema... And it was ridiculously slow, even in good cases, and so easy to write pathological queries that would just totally destroy the backend and take minutes to resolve.

There's a few different layers to this... One is appropriately setting up your resolvers. If somebody is asking for a particular (what was your example) post, and their comment, and their whatever, and their whatever, and they're just going down one whole thing, your resolver should be such that it just follows that one trail and doesn't load everything at this level, and everything at that level, and then everything at that level. And you may want to set up your top-level queries such that it's impossible to do something that's gonna span all those different things.

But there are other techniques you can do. You can implement checks on how complex is this query, how much data \[unintelligible 00:22:57.15\] various other things, and just throw errors and say "Hey. No. You can't make that query. It's too much."

**Jerod Santo:** Doesn't that break the promise of GraphQL? I mean, I'm supposed to be able to just go up to the buffet and grab what I want.

**Kevin Ball:** Yeah... \[laughs\]

**Nick Nisi:** It's not safe...

**Kevin Ball:** It does, but it is still your API.

**Jerod Santo:** I agree.

**Kevin Ball:** And one of the trade-offs that you get as you create this great flexibility and this great power is there's now great responsibility, that you need to put limits on it... Or you need to be confident that your backend can handle every type of query that can be crafted.

**Jerod Santo:** It seems like it would map well on top of a denoramlized database, or a document-based database... Whereas if you were retrofitting a GraphQL API on top of an established, highly-relational, sharded even, like a very established relational database, that you could potentially expose more of the performance problems... Unless you take very precise and extreme measures in order to stop that. Whereas maybe if it's mapped on something that already is more document-oriented, you're not gonna be crossing tables anyways, because your data is right there, stored in the same document. Is that a fair assumption?

**Kevin Ball:** \[00:24:08.11\] I think that's definitely fair. I think it's really easy to, if you're not careful, create the ability to do pathological queries... And implementing a GraphQL server on top of any sort of complex data situation is not a trivial task. This is something that - there should be somebody who's an expert in that data system on there... Though one of the things you highlight that is kind of interesting to explore is you can also set up what is essentially a proxy layer on top of an existing REST API. So if you have a big, established working system, and you have a REST API there, you can set up a proxy that just is calling out to your REST endpoints... And REST is very good for cacheability, so you can have that proxy be caching things in all appropriate ways, and managing the cache so that you can take advantage of those individual endpoints not being pathological. And with that, you'd still get a lot of benefits in terms of you insert typing, such that you have all these tooling benefits exposed to the client developers, and you get that advantage that all of those individual API requests are happening inside of your fast data center, instead of over the slow public network.

**Jerod Santo:** That's pretty cool.

**Kevin Ball:** Coming back a little bit to implementation options... I guess that piece about being able to wrap a RESTI API -- maybe you could imagine the GraphQL proxy as your bacon that you're wrapping around everything...

**Jerod Santo:** \[laughs\]

**Kevin Ball:** You know, it makes everything taste better...

**Jerod Santo:** Well-played... Well, before we get into specific ones that you might build, I would just wanna mention that what I see a lot of, which seems like is cool to try out GraphQL from a server-side provider, is probably not scalable and usable -- it's like, so many of these things are like "Hey, we'll just generate your GraphQL API for you." I mean, take your Postgres database, take your MongoDB, take your existing REST API and just slap us in front of it, and now you have a GraphQL API. I see a lot of those tools, and they are shiny and neat, and I would play with them, but I wouldn't necessarily think to roll that out on my production system. Am I off-base on that?

**Kevin Ball:** I don't think you're off-base at all. Similar to a vanilla Active Record that you might get in Ruby on Rails, or a vanilla what have you - they're great for fast prototyping, they're great for early projects, and as you develop scale and as you have to deal with complex data, you're gonna have to deal with those problems as programming problems, and you're gonna have to think about your schema design.

**Jerod Santo:** Cool. So Nest, Nick, is a specific Node library that does this for you, or that you use to build it?

**Nick Nisi:** Yeah, that you use to build it... So default Nest would be for REST endpoints, and then they have a plugin that lets you, instead of creating controllers for those, create resolvers and mutations for GraphQL.

**Jerod Santo:** And Nest is a tool like Express.js or like any sort of server-side -- like, it's an HTTP library?

**Nick Nisi:** Yeah. It's a wrapper on top of Express, too. It's just kind of an amalgamation of everything.

**Jerod Santo:** So it's not like Express, it's just wrapping Express.

**Nick Nisi:** Yeah...

**Jerod Santo:** The old Russian doll...

**Kevin Ball:** We're at the level of meta-frameworks now. Everything's a meta-framework, right?

**Jerod Santo:** This is true.

**Kevin Ball:** That's where the interesting stuff is happening.

**Jerod Santo:** I like to get close to the metal and use Express.js.

**Nick Nisi:** That's one of the downsides that I didn't mention - if you just wanted to do a quick query, there's a lot more ceremony around making a request, whereas with a REST endpoint I can just, from my DevTools console, use fetch and grab the data... And I can still do that, but I have to know exactly how the query is formed in that RESTful call, and how arguments are passed, and things like that... And send it along.

\[00:28:07.19\] But then another thing that has always confused me when I look at GraphQL is there seem to be -- well, are there different flavors of it? Apollo seems like a flavor that -- I don't know, I might be referring to it incorrectly, but I always hear it referred to as like a flavor of GraphQL. Is that an accurate way of putting it?

**Kevin Ball:** That's a great question, and I don't have a super-strong sense.

**Jerod Santo:** What is a flavor?

**Kevin Ball:** Let me add a little more detail on that... So there have been evolutions of the spec. As in anything with an evolving spec, you're gonna have different flavors where people have chosen to stick with one version of spec and maybe haven't' updated... Another thing that is interesting to look at and explore is that GraphQL has this essentially abstraction leaker for the query language, which is directives. You can define relatively arbitrary - and I haven't used this too much, so I don't know the boundaries of that arbitrary... But you can define relatively arbitrary new behavior and logic in your GraphQL API using directives. And these can then function essentially as decorators on your queries in different ways.

So that is another way which different implementations of GraphQL can potentially create what feel like different flavors, because if they have built-in decorators that aren't user-defined, but are just part of "When you install Apollo, you get this." But that's mostly just me spit-balling; I don't have a super-good sense.

**Jerod Santo:** There's also aspects of it that are not defined in the spec, but are determined by the implementation and people are starting to figure out norms, such as like "How do you handle pagination?" and whatnot... Where it's like, that's not formalized, but Apollo does have a way that it does it, and you can do it that way, or maybe you can do it some other way...

**Kevin Ball:** Yeah, I had to deal with pagination recently... It did not feel natural, and it was something where I essentially created a different top-level query, and a different object, that included pagination-related things, and then had the repeating value--

**Jerod Santo:** Cursor, yeah.

**Nick Nisi:** Yeah, I use a library called Nestjs-query, where I just give it a resolver, and the DTO or what the queries will look like, and it will automatically paginate everything. That's one of the really cool libraries that we're using on top of all of this.

**Kevin Ball:** Interesting. What's that called?

**Nick Nisi:** It's called Nestjs-query.

**Jerod Santo:** I feel like Nick probably doesn't ever actually write code; he just kind of like instructs things to do the coding for him. He's like "This thing is what I use..."

**Nick Nisi:** \[laughs\] They're called macros...

**Jerod Santo:** "...and down underneath there, inside my Vim macro, it does all the coding for me."

**Kevin Ball:** I think Nick is just operating at a higher level of abstraction than the rest of us.

**Jerod Santo:** That's my point, yeah.

**Nick Nisi:** If you abstract it enough, then--

**Jerod Santo:** He's either a wizard or a fool. I can't figure out which one. I think he's probably a wizard.

**Kevin Ball:** I think he's a wizard. I'm really curious how that handles pagination. So what does it do to the underlying queries? I'm looking at their docs right now... Oh, interesting - so they do kind of a similar thing, where they have a meta object that wraps the underlying objects; that includes a page info object, and then an edges object, which has all the different, whatever the results were.

**Jerod Santo:** That makes sense.

**Kevin Ball:** Yeah.

**Jerod Santo:** So on the client side, Nick - are you doing the client and the server side in this project?

**Nick Nisi:** Just the server side right now.

**Jerod Santo:** Are you using the GraphQL API, or you're not even using it yourself?

**Nick Nisi:** Right. That is something I wanted to bring up - if you had any experience with (I guess) service-to-service GraphQL calls, on the server side... Is that something you've handled before, Kball?

**Kevin Ball:** Oh, interesting... No, it is not, because all of our service-to-service stuff on our backend right now is using gRPC, so we're not currently doing that. We only use GraphQL to communicate to the client.

**Nick Nisi:** Interesting. Yeah, so I've only been working on a proof of concept with this stuff for the last few weeks, and it's all server-side.

**Jerod Santo:** \[00:32:10.28\] I just wondered how a client would then interact with the pagination. Maybe there's an autogenerated client that knows that the way that Nest does pagination - there's like a Nest client that knows that, and so they already do the pagination for you, or something... That's why I asked that.

**Nick Nisi:** So this Nest.js query - you give it the objects that you're working with, and it will define the schema that includes that page info and edges as leaves in that graph. The client knows exactly what it can expect from that on any kind of pageable resolver.

**Jerod Santo:** Gotcha.

**Kevin Ball:** That's interesting. I think that's actually pretty cool, how it's dealing with pagination; I'm looking at that now... So Nest only handles the server-side, or it's generating for you all that client-side work as well, so then you plug that into whatever you're doing on the client?

**Nick Nisi:** What would be required on the frontend, on the client?

**Kevin Ball:** I'd want to have access to all of the types, clearly... I guess that's the main thing, is the types, and then whatever library is handling how it runs queries and doing caching, and things like that. So I guess the question is "Is it exporting all those types?" It has to. Alright, I've answered my own question. \[laughter\]

**Nick Nisi:** That's something that I haven't really touched on in my exploration... So I assume that somehow the client would have access to the schema - is that right, maybe? Or at least from a tooling level, it knows what it can query based on that. And then tools like Apollo Codegen - from what I've gathered, that will go through an AST walker and just find all of the places where you're making GraphQL calls, look at those queries, and then define interfaces in TypeScript that match exactly what you'd be getting back, or what you expect to get back.

**Kevin Ball:** Yes, that is correct. And I guess what I would want ideally, since Nest.js is also doing this all in JavaScript or TypeScript - I would love something that lets me have end-to-end. Because right now I'm doing GraphQL in Python on the server side, and then I'm querying it with JavaScript, and there is always this step of "Okay, my client thinks it's doing this, it sends this query", and then the backend says "Wait, what are you talking about? That's not a query." But presumably, if you're doing everything end-to-end in JavaScript or TypeScript, you can deal with that, and catch it at the tooling level, rather than at the testing runtime level.

**Nick Nisi:** Yeah, presumably.

**Kevin Ball:** I mean, I think Apollo Codegen looks at the GraphQL schema, so it does some amount of that... I don't know. We're getting outside of my six months experience... \[laughter\]

**Nick Nisi:** What I've done in the past for that kind of sharing is -- and not with GraphQL, but with RESTful endpoints, is I've used... So Nest has a plugin for Swagger, so it will autogenerate Swagger documentation for all of your endpoints for RESTful calls... You can export that as a JSON file, and then I've just written a parser that goes through the JSON and creates interfaces out of that, that are then just automatically generated and placed into the project. Not the most straightforward way, but it is a way to not have to think about writing all of those interfaces.

**Jerod Santo:** I love it. Nick, you always find a way to autogen, man... Generate that stuff.

**Nick Nisi:** Always.

**Kevin Ball:** I need to suck some of that stuff into my head. \[unintelligible 00:35:34.21\]

**Jerod Santo:** I know. I feel like I toil away at my code, and Nick just kind of like tells things to do things for him. I should hang out with you more, and work less.

**Break:** \[00:35:50.22\]

**Kevin Ball:** Alright, let's get back into it and talk about one subject that we have not talked about much yet, which is mutations. How do you actually change data using a GraphQL API? This is something that Jerod was talking about on the break. He said "Well, how do read/write API - we've only talked about read. How does write work?"

**Nick Nisi:** This is a querying language, not a--

**Jerod Santo:** Hm...

**Kevin Ball:** It's a query language, but if you're gonna replace REST - with REST you've got to do some amount of updating those things...

**Jerod Santo:** State transfer...

**Kevin Ball:** State transfer, or CRUD - Create, Read, Update and Delete... How is that gonna work? So who wants to lead us off here?

**Jerod Santo:** I'll go last. Also, not at all.

**Nick Nisi:** Yeah, I have not gotten that far in my PSE yet, so I haven't mutated anything.

**Jerod Santo:** Nick will get back to us... So it's you, Kball. How do you mutate?

**Kevin Ball:** Alright, that's me. So I think the way to think about mutations is it's actually coming back to this question of query design and API design. It's much more explicit, or at least has the potential to be much more explicit. So we talked about how all the queries are this kind of graph descending from the top-level query. So you have query, you define what the first level of things you're allowed to query is, and then you can follow relationships down through the different resources, through the types.

On the mutation side, it's similar, in that you have a top-level mutation object where you're defining the mutations that are allowed to happen. And I have not used this a huge amount, so I'm not an expert on this at all, and I don't actually have a strong sense, the extent to which there is that same level of nesting and following relationships... But if you look at the mutations part of the GraphQL API, what you'll see is they have a ton of mutations defined, and they're all very explicit.

So whereas in a REST API you might assume that you're gonna expose mostly CRUD functions, so you just have an update endpoint that lets you update the fields on your object, and maybe there's some permissions around that or what have you, in a GraphQL API you're gonna have much more explicit mutations... And some of those may be just "Update this object, and pass in the new object types" or things around that. But if you look at, for example, the GitHub API, there's a lot of things about "Accept this suggestion. Clone this thing. Do this thing." You have a mutation for each type of action that you're wanting to enable. So it feels in some ways much more like defining an internal API that you might call programmatically, rather than this model that I think CRUD particular, and the combo of CRUD and REST - a lot of stuff got clumped together, where most REST APIs are just implementing CRUD functionality...

\[00:40:05.24\] This idea of "I just have an object, and I'm gonna give you new fields for it, or override certain fields for it." It's more towards "What type of API would I extend inside of my project? Add this thing, do this thing, change this thing", where I'm explicitly calling out the fields that I want from you. And because everything is strongly-typed, I can have those fields be objects, with particular types... But that's kind of where it goes. And I think you can specify for an object which fields do you accept in that mutation as well. So it may not be every field in that object, but instead say "Hey, you can pass in this object, but really only these fields from this object."

**Jerod Santo:** How would you do something like a delete then? Would you say "Here's a mutation called 'delete post'," and you call that mutation?

**Kevin Ball:** Absolutely. Yeah, if you look at the -- once again, the GitHub API is a great public example, and it's super-well documented. They have "delete issue", "delete issue comment", "delete label", "delete package version", "delete project", "delete project card". All of these are top-level mutations that they expose.

**Jerod Santo:** Do each of those then have -- you're now gonna assume that you understand how GitHub's backend works, but each of those has then a resolver that takes care of that functionality? Some sort of function that lives somewhere, that says "Delete this thing", and then it goes to make sure you can do that, and it has any sort of background jobs that have to happen when that happens, and it resolves that...? Is that how that works on the API side?

**Kevin Ball:** Yeah, I think so.

**Jerod Santo:** At a conceptual level I'm sure there's details \[unintelligible 00:41:41.26\]

**Kevin Ball:** I'm sure there are, and there may be abstractions in there or whatever, but yeah, it's very explicit in terms of what changes are enabled and allowed.

**Nick Nisi:** Is there a standard for what gets returned from a mutation?

**Kevin Ball:** Not that I'm aware of.

**Jerod Santo:** So in the case of GitHub's -- well, there's "add star". Delete team discussion... The input is the "delete team discussion" input, and the return field is the "client mutation idea. A unique identifier for the client performing the mutation." So it's probably a minimal response. It seems like you'd have a success or a failure kind of a thing. In this case maybe if it's a success, they just return the client ID.

I was trying to find "delete star" and I've found "add star". "Delete issue" returns two fields, the client mutation ID, which is the same as the other one, and the repository that the issue belonged to, which I assume is the entire object, not just the repository ID. So even amongst GitHub's responses it seems they're consistent, but not identical, depending on the delete.

**Nick Nisi:** Yeah, I asked that, and I was gonna kind of ask about error handling too, if there's any kind of standard for that... And the reason I'm asking is when you implement Apollo, for example - would Apollo handle errors on the client side different from another library that you might be using to hit on Apollo backend? Is there some kind of standard that is followed, or is it just abstractions all the way up?

**Jerod Santo:** Or all the way down...

**Kevin Ball:** That's a great question, and I don't have the answer for you there. I feel like in Apollo what happens is it sends back essentially a message saying "There was an error. Go check your GraphQL server." But I don't know off the top of my head... And that definitely feels like a place where we have a little bit of a hole. One thing that is kind of odd is GraphQL will return a success code with an error message, rather than it being an HTTP error.

**Jerod Santo:** Hm...

**Nick Nisi:** \[00:43:56.29\] Interesting.

**Kevin Ball:** So that's kind of funky.

**Jerod Santo:** They're using HTTP as a transport layer, not really as--

**Kevin Ball:** Exactly.

**Jerod Santo:** Yeah...

**Kevin Ball:** In fact, I think it may not even necessarily -- I'm not sure that's part of the spec so much as that is just a common choice.

**Jerod Santo:** I was gonna say, we have a transport layer; it's called TCP... So it seems like HTTP would be superfluous in that use.

**Kevin Ball:** Yeah, but it makes it easy to build client-side interactions with it.

**Jerod Santo:** It's pervasive, yeah.

**Kevin Ball:** You wanna be able to hit this thing from a browser, and it's way easier to hit an HTTP-based API than a TCP-based API.

**Jerod Santo:** Right. Real-time follow-up on the GitHub API - the reason I couldn't find "delete star" is there is not one. It's called "remove star", and that's the delete function, as \[unintelligible 00:44:48.17\]

**Kevin Ball:** That's fun...

**Jerod Santo:** So a little flexibility there, because now they're more semantic. Like, you don't delete a star; you just kind of remove the fact that you starred that repo, so they're being a little bit more descriptive... But less discoverable, because everything else says "delete", and then it goes to star and it says "remove".

**Kevin Ball:** Yeah. What do you wanna bet those were implemented by different teams than the ones doing "delete these things". There's a whole set that are remove, there's a whole set that are delete, and maybe they have an internal consistency for which things, but...

**Jerod Santo:** Yeah. The fun of API design. So there's a cool question coming out of the chat room from Lars; maybe one of you two can help him out. He asks "Where do you learn the actual QL? Where do you learn the query language? What's the best resource for learning the query language?"

**Kevin Ball:** That's a great question. There is a website called howtographql.com, that has interactive tutorials on a bunch of stuff, and I've heard folks talk about that as a good resource. I have not actually used it, because I learned it all on the job. So I just kind of learned it by looking at the code that we had, and then sitting developers down when I got stuck and being like "What the heck is going on here? Can you explain this to me?" But I've heard great things about howtographql.com.

**Jerod Santo:** What about you, Nick?

**Nick Nisi:** I will definitely check that out, but mine has also been on-the-job learning, and kind of looking at other queries... But like I said, this isn't a proof of concept, so we don't really have established queries lying around anywhere, so it's more just "What have I typed into the \[unintelligible 00:46:27.22\] interface, and then I heavily rely on the Ctrl+Space to tell me what I can and can't do in this. It's like throwing spaghetti at the wall to see what sticks. Eventually, it'll work.

**Jerod Santo:** Then you've also got the up arrow. You know, you can go back to your history. "What have I typed before?" Up arrow, up arrow, up arrow...

**Nick Nisi:** \[laughs\] What's an arrow key.

**Jerod Santo:** Sorry, um... L? J? K? I don't know.

**Nick Nisi:** K...

**Jerod Santo:** K... Okay.

**Kevin Ball:** Ahhh...

**Jerod Santo:** Ahhh...

**Kevin Ball:** Graphql.org itself is also pretty good. It's got reasonable learn resources, though they also reference straight out to howtographql.com for doing tutorial-related stuff... They've got a bunch of interesting things there.

**Jerod Santo:** I'll say that the query language itself is simple enough that everything I needed to know at the time that I was using it was basically just like clicking and seeing in the graphical editor the query that it generated based on what I was trying to do... And it's pretty straightforward to just copy and paste that around, and tweak it. So I didn't feel like there was all that much to learn on that side, which is probably one of the reasons why it is so beloved by frontenders and people who just wanna get their data and get on with their day - there's not too much to learn on the query side. On the implementation side, and maybe on the mutation side as well, I'm not sure; it seems like there's a whole bunch there. But just the query language itself is pretty basic.

**Kevin Ball:** Yeah, absolutely. I think that's one of the easy gotchas in GraphQL - folks will come in, and particularly folks who are just on the frontend side will come in and say "Hey, this makes my life so much easier. We can just throw it in and it's gonna make everything golden." What I have seen, having to do a lot of retro-fitting work on the server side here is that that approach leads to catastrophically slow GraphQL servers, and poorly designed schema, and various other things.

\[00:48:24.17\] So this is a real domain, there are real concerns, and if you're creating that server-side implementation, it's gonna go a lot better if you have some understanding of your underlying data systems and how they work.

**Jerod Santo:** Mm-hm. One aspect of GraphQL we haven't brought up, which I think is the coolest use case of it so far, is the way that Gatsby uses it to normalize all these disparate data sources into a single GraphQL usable thing... And I know there's a lot of complexity in those things, and of course, you could have - especially if you're spanning multiple data sources and stuff, it could get real hairy... But conceptually, I think that is super-rad. I think it's the coolest thing about Gatsby.

**Kevin Ball:** It is super-cool, and it lets them create a dissociation between data source and accessing that data source. So all that you have to do to incorporate a new data source, with a new way of interacting, is you write something that knows how to translate from that, to GraphQL. And then your client code just behaves in the same old way it's always behaved, and I think that is a really neat way to do it. And they do it at build time. But one could imagine doing that in real-time too, in that wrapping approach that I mentioned, where you wrap around all sorts of different APIs, and provide a single, consistent interface to them.

**Jerod Santo:** You're now gonna have me disagree with wrapping...

**Kevin Ball:** Once again, GraphQL is the bacon that's gonna make everything better... But if you're not careful, you'll get a little bit bloated if you have too much bacon.

**Jerod Santo:** Boom-ching...!

**Kevin Ball:** You don't know how much I've missed playing with these puns and metaphors with you all. Oh, one thing we didn't talk about was this concept of fragments, which I think is also quite interesting, particularly on the client side. Fragments allows you to essentially take sub-pieces of a GraphQL query and treat them as their own individual queries, but then kind of roll them up so that you only do that one big query at the top.

In the code that I'm working with right now, each component thinks in its own set of data that it's gonna query, and it writes a fragment. But then the top-level page loads up all those fragments, composes them into a single query, and it only hits the API once. So it lets you as a developer think only about the data that you need for the piece that you're working on... But then from a performance standpoint you can normalize all that, so you're doing a single query that's gonna generate the info that you need, and send that all at once to the server and get it all back right on page load.

**Nick Nisi:** Another nice thing with fragments is that it will give you an interface name in TypeScript with like Apollo Codegen, for example, that is the name of that fragment... So if you need to reference that type later, you easily have access to it and can pull it from there. Because otherwise it gives it some really funky name that's like whatever the query name is, underscore result. A lot of underscores in there, which looks ugly.

**Kevin Ball:** So yeah, fragments are a super-interesting area... And there are tools like Relay, which will automatically roll up all those fragments, but it's also not super-hard to explicitly roll up and import your fragments. With that, I think we've covered a heck of a lot about GraphQL. Thank you for indulging me, this has been fun. We'll sign off till next week. Thank you, Jerod...

**Jerod Santo:** Thank you.

**Kevin Ball:** ...and thank you, Nick. The party will continue - same time, same channel, next week.

**Outro:** \[00:52:16.17\]

**Jerod Santo:** Well, we're happy to have you back, and in the limited capacity that we have you, we'll take whatever Kball we can get.

**Nick Nisi:** Mm-hm.

**Kevin Ball:** I did already drink quite a few cups this morning, so... \[laughs\]

**Jerod Santo:** Nick, I actually tried to code up an autogenerated Kball, but it didn't work out like we thought it would...

**Kevin Ball:** Ooh, I wanna hear more about that...

**Jerod Santo:** Well, you can't, because I've just made it up. Nick, tell them more about the Kball you tried to write.

**Nick Nisi:** Well, it's just layers of abstractions, and then... \[laughter\] If you abstract anything enough, you'll eventually just end up talking about Vim, with me, so...

**Kevin Ball:** Well, now we can hang out and talk TypeScript too, because I've been in that world a lot, so...

**Nick Nisi:** Yes...!

**Kevin Ball:** But anyway, we should probably get back to--

**Jerod Santo:** I'll see myself out...
