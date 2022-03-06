**Jon Calhoun:** Hello, and welcome to Go Time. Today we're gonna talk about GraphQL, and we are joined by two guests. The first is Mark Sandstrom. Mark is an engineer on the platform infrastructure team at Khan Academy. Mark, how are you?

**Mark Sandstrom:** I'm great, thanks.

**Jon Calhoun:** Well, thanks for joining us. Our other guest is Ben Kraft. He is the creator of the genclient, and he also used to work on the platform and infrastructure team at Khan Academy. Ben, how are you?

**Ben Kraft:** Doing well, thanks.

**Jon Calhoun:** Awesome. Well, hopefully Ben's internet sticks with us... We've had some issues before we've started, so if he cuts out, keep that in mind. Alright, so let's go ahead and just jump in...

**Mat Ryer:** I'm here too, Jon...

**Jon Calhoun:** Mat, you want me to introduce you?

**Mat Ryer:** Yeah. Yeah, yeah.

**Jon Calhoun:** Come on, now... Alright, sorry everybody.

**Mat Ryer:** Treat me like a guest.

**Jon Calhoun:** We're also joined by our other host, Mat Ryer.

**Mat Ryer:** Hello.

**Jon Calhoun:** Mat, how are you?

**Mat Ryer:** Thank you for remembering me. I'm doing fine, thanks. Very glad to be back, it's been a while, but...

**Jon Calhoun:** It's been a while for me, if you can't tell, based on my terrible introduction for you.

**Mat Ryer:** Nah, it's alright, really. I know sometimes when I'm not the host I tend to mess around and be silly, and stuff, but Jon, out of respect -- well, I'm gonna obviously carry on. I'll just carry on actually doing that, probably...

**Jon Calhoun:** Alright. We're gonna first start off by just talking about what is GraphQL. So Ben or Mark, do either of you wanna take that?

**Mark Sandstrom:** Yeah, I'll take this. So GraphQL is a specification for building APIs. It consists of a query language for fetching data, and also a spec for implementing GraphQL servers. It can run over any transport, but it's usually run over HTTP. You send a query to the server, usually as a post request. If you squint, a GraphQL query kind of looks like a JSON document, without quotes or colons or scalar array values; pretty much what you're left with is the keys and curly braces. And that isn't a coincidence. The query document describes the JSON data to be returned by the server.

\[04:05\] So the structure of the data that you're requesting is specified in a schema that you write... So your schema might have a type called user, and the user would have an ID, and a name, and perhaps friends... And friends could be an array of users... And if you follow that through, those friends could have friends... And a little bit later we can talk about why that's okay in GraphQL.

**Ben Kraft:** I guess the way I like to think about GraphQL is as a solution to some of the classic difficulties of a REST API. So say you have an API and you wanna get the current user, but different pages wanna get different pieces of information about the current user... So one page might just want their ID and name, and the other page wants their friends, and their friends of friends, and some whole complicated thing. And GraphQL lets you just define one schema that can cover all of these, and then each page just says "I want this data", and then the server can send back exactly what it needs, instead of having to write a bunch of -- either call a bunch of different API calls from each page, and then you get a bunch of roundtrips, or having to write essentially an API call for each page, and then you have to kind of duplicate a bunch of things.

GraphQL says "We're just gonna have this whole schema", and then the client says "Here's what I want", and the server just sends it back, and it's all in one API call, and it makes things super-easy.

**Jon Calhoun:** Yeah, I know when I first looked to GraphQL, it kind of struck me as something that somebody on the client side would have dreamed up... Whereas when you look at a REST API, it looks like somebody on the server side dreamed it up, because it literally just tends to mimic exactly what's on the server side. They're like, I'm doing no data transformation, or anything. You can deal with that."

**Ben Kraft:** Yeah, that's right. It puts a lot more work on the server, to say "Here's what the client wanted, and now I have to do all the glue to put it together." But when you're actually writing a GraphQL server, most of that is gonna be in your GraphQL library, so you still just write the application code.

**Jon Calhoun:** Ben, you mentioned REST APIs... I know there are some out there that have been trying to sort of solve this problem. Stripe is one that comes to mind, where -- I don't know if you're familiar with their API at all, but they have a way, when you're making REST requests, that you can include... I think they call it "include", it's like an extra parameter... So it'll actually give you information about nested resources. But then it's always been interesting to me that GraphQL is something that just had that baked in from the get-go... And it seems like you can go -- like Mark, when you were talking about how you could have a user with friends, and those friends objects are probably going to be user objects of some sort... And you could literally nest that down several layers deep, and it just kind of works in GraphQL, which is kind of crazy...

**Mark Sandstrom:** Yeah, that's right. It's considered an anti-pattern in GraphQL to have fields that are just IDs. So when returning an array of friend IDs, instead you can select into that object, and that prevents you from having to stitch together the data on the client.

**Ben Kraft:** But yeah, I really think of GraphQL as sort of - you choose which fields you want in a REST API, and you really supercharge that and you make it the whole thing. You can nest it, you can -- that's just the whole API is structured, and that's GraphQL.

**Mark Sandstrom:** You can also tailor fields a little bit more to the client. You have to normalize data, for example if you want, because it's okay; the client doesn't have to select a field if they don't want, so you can really include additional things that are just especially handy for the client to select directly.

**Ben Kraft:** Yeah. I think at Khan Academy our user had like a hundred fields, because it's anything anyone needs anywhere; you just put it somewhere useful, and then most clients are only gonna select like five fields. And that's fine, they don't pay for the others.

**Jon Calhoun:** \[07:51\] I think that's something that me personally, I wouldn't have thought about at first, because I have a lot more experience just making JSON RESTful APIs that send that data back... And if your objects aren't too big, or there's not too much there, it doesn't make much of a difference. But like you said, if you have a lot of different use cases where the information for a user - you know, you might need a lot, it is nice that you can throw it all there and not worry about the fact that that could be really slow if you had to send everything.

So GraphQL - Mark, you mentioned that it kind of looks like JSON when you're writing these queries, and then the data you get back actually is JSON. Is that correct?

**Mark Sandstrom:** Yeah, that's right.

**Jon Calhoun:** Okay. So I'm assuming that means that there's both a server and a client part... So can you elaborate I guess a little bit more on that part?

**Mark Sandstrom:** Yeah. So a GraphQL client is pretty simple. You package an operation in a JSON payload, and if you can make an HTTP request, you get a JSON response back, and clients - that's the basic thing that a client needs to do. And client libraries can provide additional facilities to make certain use cases easier. A server is a lot more complex; it takes the query that you send it, it parses it, and then resolves the data... So in the user example, it's resolving ID and name... And each field can be associated with a function on the server, and that function is only called when you ask for that field. So that's what solves the nested friends issue.

You can't actually write a GraphQL query that's infinitely deep, so therefore you wouldn't end up in an infinite loop, and your server trying to resolve friends of friends of friends. Fields can also take arguments, and so really, each field is like a function. Some are really simple, and some are more complex. Not every field needs to correspond to a function. If you have a user model where a bunch of the fields are available, you can return those all together.

In Go, one of the nice things - each separate resolver function is resolved (in gqlgen) in a separate goroutine. So they're resolved in parallel.

**Jon Calhoun:** So you mentioned gqlgen, and Ben had created genclient, just so people know, I guess, when we get into this... Gqlgen is a library that helps generate the server-side stuff, and genclient is something for the client-side, correct?

**Mark Sandstrom:** Yeah, that's right. And we've talked about JSON, we've mentioned JSON a few times... So one way to handle JSON in Go, or the way that JSON is handled in a JSON package is via struct tags. So there are some libraries that use struct tags to help you generate queries and interact with the GraphQL server, and then code generation is another popular strategy.

**Jon Calhoun:** Mat, you had said before we started the show that you've written -- I believe you said you wrote, was it a client or a server with GraphQL?

**Mat Ryer:** A client, yeah.

**Jon Calhoun:** So when you were writing that, do you remember what library you were using?

**Mat Ryer:** I wrote the thing. I wrote the client library.

**Jon Calhoun:** Okay.

**Mat Ryer:** I wrote the Machine Box GraphQL client library as well \[unintelligible 00:11:04.27\]

**Jon Calhoun:** Okay.

**Mat Ryer:** Thanks for bringing it up.

**Jon Calhoun:** No problem. So when you were writing it, what language were you writing it in, Mat?

**Mat Ryer:** I was writing in Go, and I was consuming a third-party GraphQL service. And at the time, there wasn't a way to do it, but you can just do it -- it's normal HTTP, as long as you get the request body that makes sense for the server... And I think you pass the query in as a parameter, but it is like a JSON-esque sort of query language. You just pass that as a string in a post request. In the client library that we wrote, it would just use the normal JSON unmarshaling kind of thing for the response. When you unmarshal it, or when you ask for a request, you give it an object or you point it to an object like you do with a JSON thing, and it just passes it through to that when it does the unmarshaling of it.

So it's like a very simple, lightweight library, and it was very easy to put together. But that's definitely not the case on the server. I sort of almost can't really imagine what that looks like on server code, to implement the server-side GraphQL.

**Mark Sandstrom:** \[12:14\] Yeah. I looked at your client right quick, and it looks like you specify the query as a string when you're making the query. Like you said, it populates the data... So in that case, you have the query string, and the struct, and you have to keep the two in sync with one another... So there's another client library, the shurcooL GraphQL client, and what it does is you use struct tags, and it will generate the query from the struct, and then populate the data back in the struct.

**Mat Ryer:** Right...

**Mark Sandstrom:** But that can get very complex, because it's not as simple as JSON, where it's just the field name. You have to start passing arguments, and there are things like fragments and interfaces.

**Mat Ryer:** Well, that is sure cool...

**Ben Kraft:** I guess the way that I think about it is on the client all the complexity is in the query and in the types that you're deserializing it into... And so I think Mat's client just kind of lets you deal with that, and it's really straightforward. I think shurcooL's client kind of tries to hide the query; you just write the types, which - like any kind of hiding things, is often convenient, and then sometimes a little confusing... And then we can later talk about my client, genclient - you write the query and it generates the types.

But then on the other side, on the server, the types are actually a lot simpler, because you just have your user type, and it's got a bunch of fields, and a bunch of methods... And then the hard part is the server library itself, that glues all of that stuff together and actually has all this logic, to say "Did the user ask for an ID? Okay, then let's put the ID in. Did the user ask for a name? Let's put the name in. Did the user ask for friends? Okay, which fields of the friends did they ask for?" That's where things get really complicated. So gqlgen, which is the server library, is really quite complicated.

**Mat Ryer:** Yeah. So it's a perfect kind of problem for code gen, I think, that particular piece. And you mentioned earlier that there were functions that basically are called optionally if somebody asks for friends of the user. There's another function that's gonna get called. So that goes some way to explain, on the Go side at least if you're writing a server in Go, how you could think about that. There's gonna be some kind of getter for the user, and another optionally away to then also load the friends of that user. And I don't know, do they tend to resolve down into joins in SQL, in a relational database? Or is that just completely up to really the implementation of the server?

**Mark Sandstrom:** It's up to whoever is writing the server and what the database is that you're using. At Khan Academy we use a document database for a lot of things. We do have SQL here and there...

**Mat Ryer:** So that's interesting then.

**Mark Sandstrom:** Yeah. And you need a different strategy, because with a SQL database you can select just the fields you want, and document -- at least the document database we use, you get the entire entity from the data store.

**Break:** \[15:11\]

**Jon Calhoun:** So it sounds like using GraphQL on the server side is going to complicate things... So presumably it's solving some sort of problems to justify all that added complexity?

**Mark Sandstrom:** Yeah.

**Jon Calhoun:** So can you speak a little bit to what problems it's solving and how it was helpful at Khan Academy?

**Mark Sandstrom:** \[16:16\] Yeah. So Ben mentioned just RUST APIs versus GraphQL APIs, where in a REST API you may be making multiple requests and stitching it together on the client. I think it really does make it easier for the client; we have a couple clients, we have a website, and we also have a mobile client...

**Ben Kraft:** To me, one of the really nice things is that -- as someone who mostly works on the server, one of the really nice things is that you don't have to know exactly which client is going to want what, where; you don't have to -- if the frontend developers decide they need three more fields in this particular query, they just add it. As long as those fields are already in the schema, because you needed them on some other page... Like, they can decide; they can just add and remove things. So as a server engineer, you just say "How do we compute any data that we do need?" You don't have to worry, really at all, about which requests need which data. The server library just figures all that stuff out for you, because the client just asks for it.

**Mat Ryer:** Yes. But haven't you really just moved the problem there though? At some point we have to decide what data we're gonna load... And obviously, if there's a real separation between client and server, which if you have a public API, you have customers that are not part of your organization, so that's a significant separation... But if you were building an app and you just chose GraphQL, but no one else is gonna use this API, you at some point have to decide what data you're gonna load, and you may optimize that over time as well. Basically, you're just empowering really the frontend, or the client really, in this case. Isn't it akin to just letting them run some SQL? Why don't we just let them run SQL?

**Ben Kraft:** In some ways it is. But I think the nice thing about GraphQL over SQL is it's a much simpler language. If you wanted to try to implement a whole SQL server, that includes your business logic... Like if you build a really simple app, it may look like you're kind of just making requests to the database, and maybe you throw some auth on it, or something... But in a complicated app - it all gets more complicated. You have a bunch of business logic sitting in between. And I'm not gonna say you can't put that in a SQL server, because there are certainly people out there doing it, and I think it's a cool idea... But it's a lot harder. Whereas GraphQL is really designed so that, again, it's just calling these functions on your server. So if you have a function that knows how to get users' friends, that's really all you need to implement that field. And so GraphQL is really -- the server library is very complicated, but I think writing a server as an application developer is not that much harder than REST. You're really just sort of writing the same functions, and the entry points are just a little different. The entry point is the field, instead of the entry point being the whole API call.

**Mat Ryer:** Yeah.

**Ben Kraft:** And for that, you get a lot of flexibility, and that flexibility -- you know, on the other side it is still tricky for the client, in some cases, to decide "What information do I actually need?" Because you may have some huge React app, and you need to know which of your components is way down the stack; what they're gonna need. That is still a problem, but at least you get the decision closer. So it's at least written in the same language, say. Then you can use a lot more of your tooling to look into that.

**Mat Ryer:** I'm glad you mentioned that there's better ways to do it than just doing it in SQL, because of course, this is Go Time, not Stored Procedure Time. That's a separate podcast, coming soon, starring Jon Calhoun.

**Jon Calhoun:** Oh, boy...

**Mat Ryer:** Jon, you're gonna do an all about SQL and stored procedures podcast. Is that right, or have I just made that up?

**Jon Calhoun:** I hope nobody's signing me up for it without letting me know... \[laughter\]

**Mat Ryer:** Oh... You were nearly gonna do it.

**Jon Calhoun:** \[20:00\] Some of these problems are interesting to me, because it seems like people are approaching them from different angles. One of the more recent React frameworks was Remix, and I believe they're trying to solve some of those similar problems of not knowing what data you need further down in your React application. I don't know if either of you have used it at all, but essentially, if I recall correctly, it's supposed to be something where your entire page has like a small section that's like a panel, or a widget that needs to load some data... It tries to make it so that starts loading the data on its own API request if it needs to, without it being a waterfall, where the first one goes, and the second one goes, and it's really slow...

So I've seen people approach this problem, like you had said, Ben, where you need to kind of know what data the entire page needs, whereas sometimes they're just like, "Well, let's just not know what the entire page needs, and let each thing load its own data." And there's pros and cons to both, I'm sure, but... You know, just seeing different approaches to similar problems.

**Ben Kraft:** I think one of the cool things with GraphQL is that in theory - and I'm not enough of a client developer to know how much this works out in practice... But in theory, you can kind of roll that all up statically, where each of your components may need something different, and you just kind of roll that all out to the top statically, and then you can just send it to the server in one Go; you don't need to do anything clever to make that efficient.

**Mat Ryer:** Yeah, it probably comes down to organizational things even... Like, if you've got a little team that are working on something, you don't want them to have a dependency if you can help it. One of the advantages I can see to GraphQL is that it does empower the client. So that means if there is another team that's consuming your API, they are somewhat more free to run ahead at their own speed. It doesn't have to be a conversation even. But then there's trade-offs to that, and one of the things that I was interested in is now anybody can really build any kind of query. Is it possible that they're gonna ask for something that's very inefficient, and it's gonna be quite an expensive thing to figure out? Whereas obviously if it was a RESTful service, or if you were building an endpoint dedicated to a specific task, you could really sort of ultra-optimize that. Do we lose some performance in the generalization of this?

**Mark Sandstrom:** Yeah, so when loading data for a single-page app, you can load the data at the top level and pass it down through the tree, or you could have components own their individual queries and load a subset of the data. But to get to your question, you can construct queries that are very expensive to resolve. So we're talking about client and server separation, but as a client developer, even with GraphQL, you can't be ignorant of what the server is doing; and vice-versa, as a server you can't be ignorant of what the client is doing.

**Mat Ryer:** So with that power that you get also comes great responsibility. That's essentially your message.

**Mark Sandstrom:** Right. You can see the queries that the client is sending to the server, and exactly the data that they want, so it does provide an opportunity to optimize for returning that data as well.

**Mat Ryer:** Yeah, that's a good point, because of course, even if it's inefficient, you'd be able to run a report; assuming you were instrumenting this stuff, you'd be able to find out where are the inefficiencies, and then optimize it after, without changing the interface.

**Mark Sandstrom:** Yeah. And then another consideration is protecting a GraphQL server against denial of service. Because if anyone can construct any query, then that can get very expensive. So one strategy for that is calculating the complexity for query and not allowing queries beyond a certain complexity.

Another strategy which we use is we have an entire list of all the queries that clients are allowed to send to our server, called the safe list. And if it's not on the safe list, our server will not execute it.

**Mat Ryer:** Ah, so that's sort of like you've locked that down after.

**Mark Sandstrom:** That's right.

**Mat Ryer:** You let the clients free to build and ask for what they need, and then lock it.

**Mark Sandstrom:** \[23:54\] That's right. Yeah, we statically gather those across the mobile client, across all of the backend services, and so we have a complete list, which allows us to do other very interesting things, since we know exactly what data is being asked for everywhere. We also use GraphQL for communication between our services.

**Mat Ryer:** Do you really?

**Mark Sandstrom:** So not just client-client, but service-service, yeah.

**Mat Ryer:** Is that to have the self-similarity and the familiarity and all the dogfooding benefits? Or is it because you then also get to only select the data that you need? Do you use those features of GraphQL, too?

**Mark Sandstrom:** It's both. We use federation to make it so the client doesn't need what services, what fields come from; backend services take advantage of that as well. So the services expose one API, and we do have access controls where we'll lock down a field so that it's just allowed to be used by other services. But then we also have access controls where it's exposed on the public API.

**Jon Calhoun:** So when you have a list of "These are the accepted queries", how does that work with a public API where presumably people would think they can kind of generate whatever query they want? Is it just in the docs, like "You can't do certain things"?

**Mark Sandstrom:** I think in that case you'd wanna go with a complexity approach, and have some sort of perhaps budget when the user is making requests, and if they go through their complexity budget, you start rejecting their requests.

**Jon Calhoun:** It'd be interesting to see some of the approaches...

**Mat Ryer:** You're also rewarding the people for keeping the queries simpler, if it's a complexity budget. That's actually quite an interesting idea, when you think about that.

**Jon Calhoun:** I'd start to wonder if -- like, you'll see some APIs that have rate limits of like this many requests per minute, and if they start to have complexity limits instead of... You know, you can do as many requests as you want, as long as your complexity doesn't reach a certain amount. That could be very weird to convey, but...

**Mat Ryer:** Yeah, if you're trying to build an app that figures out how many degrees of separation between you and Kevin Bacon... This was a meme a few years ago, which I'm trying to bring back. You know, then that would be expensive, complex, so you maybe can't do it... But maybe it's actually not, as well. Obviously, there's recursion going on, presumably. So if you have the case of like user and friends, and let's assume that the friends return a list of users - I guess that's the example that we're using... So then you can ask for friends of friends. And on the server, presumably that's just the same method being called twice, or the same function being called twice. Is that right?

**Jon Calhoun:** It would be called more than twice, I assume, because for every friend it would have to call that function.

**Mat Ryer:** Oh yeah, I meant get friends, or the friends function; the one that loads the list of friends... If you then got friends of friends...

**Mark Sandstrom:** Yeah...

**Mat Ryer:** Oh yeah, multiple times. You're right.

**Mark Sandstrom:** Yeah. And exactly how you're fetching the data depends on the structure of your data. So if the friend has the ID of the friends, then if you only select friend and ID, that's gonna be much less expensive than if you select the friend name, so it actually has to fetch the friend from the database to the return the name.

**Mat Ryer:** Right, right.

**Mark Sandstrom:** I mean, we're talking about the server bit... And we could talk a little bit about the mechanics of what gqlgen is doing, if we wanted. I think something that's interesting to mention about gqlgen is it's a schema-first library. So you write a GraphQL schema, which is defined in the spec, and you point gqlgen at that, and from that it generates interfaces which have the various methods that you're expected to implement.

**Mat Ryer:** So there's a really interesting detail there which I think we should probably shine a light on. You say there's a schema, and that schema describes the API. You get pretty good discoverability with that, don't you?

**Mark Sandstrom:** You do, yeah.

**Mat Ryer:** \[27:54\] It's an interactive web client that can connect to the end point, and gives you like IntelliSense, so you can actually look at the objects... It's kind of self-documenting, so it does feel very modern in that sense. And that's also great, if someone's consuming an API, having that at your fingertips, where you have autocomplete and features like that. That is gonna, for sure, help. And consuming services... Actually, I did consume a service that was extremely complicated, and essentially was just -- I feel like they'd basically dumped their tables through GraphQL. It wasn't much design or nuance to it, frankly. So that did make it quite difficult to consume.

**Mark Sandstrom:** Yeah.

**Ben Kraft:** That's definitely something people do, and something that in writing a client has -- we've seen some interesting use cases come out of folks who were using our client on GitHub... Like, "How the heck did you get this schema like that?" And it's "Oh, they're using one of those things that just kind of turns your database into an API", which I think obviously have huge benefits as well. They definitely make it a little less clean...

**Mat Ryer:** Yeah, exactly. I think you still have to design your API. So Mark, you were saying that you take the schema and then you generate interfaces and things, which then makes...

**Mark Sandstrom:** Yeah, that's what glqgen does. So you're expected to implement the interface type and the struct that you create that implements this interface. That's where you can inject all the dependencies into the resolvers. The resolver functions themselves are methods on the struct. And I also mentioned that when you're at the same level within the query, for the most part, the fields can be resolved in parallel, so they're all being resolved in different goroutines.

**Jon Calhoun:** I think one thing that's worth pointing out here is that because gqlgen is schema-first and because GraphQL has a schema, that means that this is a typed query language, where you actually know what all the fields are... Whereas when some people are used to like a JSON API, there's not really a type structure that's strictly adhered to, and sometimes that can be insanely frustrating.

**Mark Sandstrom:** Yeah.

**Jon Calhoun:** I remember working with one API where there was like one field on it, and if it had one item to return back, it gave you back a string with the ID, but if there was multiple, it gave you an array back... There was something about the request where you could actually request multiple; so if you requested using an array with just one in it, it still just gave you a string back... And it was one of those things, it was like "Who designed this? What were you thinking?"

**Mat Ryer:** Well, they're trying to be helpful, aren't they? They're trying to optimize. It's really clever. If there's just one, it's a string; if there's many, it's a slice of string... That feels intelligent, in some way. I mean, you don't realize that "Actually, yeah, I'd rather just have it as an array."

I built an API once that was just all arrays. There weren't any objects. And if there was only one object, it would be an array with one object in... Because then you just could write it once. You could write an implementation that just looped over this data, and it worked for one and multiple. So you'd kind of get that for free. But yeah, I think you do need to still pay attention to your API design.

**Mark Sandstrom:** We doubled down on making our GraphQL schema the authoritative place for our documentation... So attached to each field, you can put a doc string; attached to each type, you can put a doc string... So really, in our systems, if you wanna understand the broad data model and how things connect together, you go to our composed schema, or federated schema, and you can read through and get a pretty good sense. We have a linter that enforces that some doc strings are written, and also that they have a consistent format etc.

**Ben Kraft:** \[31:49\] One of the nice things about GraphQL is that it's a fairly opinionated type system. I mean, you can certainly have a type that's like string or a list of string, but it's gonna encourage you to do the list of string. If you design your GraphQL schema well, that's really where you make that decision and where you say "Okay, this might be a list, so let's make it a list."

**Jon Calhoun:** Alright, so when it comes to actually working with GraphQL - and this is a Go Time podcast... So were there any challenges that you guys experienced that felt specific to Go, or maybe specific to a typed language, versus using JavaScript or something else when using it?

**Ben Kraft:** Yeah, so I can talk a lot about this, so please, cut me off. But I think the first challenge we had, which will contextualize the client that we wrote, is that -- you know, the great thing about GraphQL is it's a typed language, and the great thing about Go is that it's a typed language. But you've gotta make sure those types match. If you make a request and the server thinks it's one thing, or the GraphQL schema says it's one thing but the client thinks it's another thing, that's no good. And initially, this was a challenge for us, because we would have people write queries, and if you don't manage to unit-test it quite right, you put into production and it's just like "Sorry, that's the wrong type", and it's like, "We're using a typed language. We should be able to do better."

So the client that we wrote, genclient - it uses your queries and it uses the schema, and it generates the correct types for you. So if you make a query that's incorrect, you can do that, but at compile time it's gonna say, "Sorry, we checked against the schema. There's no field called 'namee'. Maybe you meant 'name'." And it's gonna generate the right Go types for you. So if you thought name, for some reason, was an integer, it's gonna just give you a string, and it's gonna give you a Go type with a string in it.

So that's something that I think Go is really powerful, especially using Go and using code gen, and using a really well typed language. You get the typing all the way; if you're using a library like gqlgen, where you've got good typing on the server, and you're using a library like genclient, where you've got good typing on the client, your types are checked all the way through, from the client to the server, if you do everything right... And I think that's really powerful.

**Mat Ryer:** And they both share the same schema, right? The source of the code gen is the same data... Because there's another advantage to this. It's not just -- I mean, it is what you've said, really, but as a sort of iteration, development engineering process, having that confidence of being able to, first of all, have discussions in an API schema is very powerful. Frontend engineers often have a very different kind of perspective to backend engineers; that can happen. But this is a common place that you are speaking the same language really, and you can kind of collaborate much better there. But then not only that... Once you then generate all the types, you're faced with errors sometimes, and you have to fix them, and broken tests, and things. And it sounds bad, but actually that is exactly what you want; what's happening is the compiler sometimes is just pointing exactly to all the places that need your attention now... And that is an asset to have.

**Ben Kraft:** Yeah. And it really helps when you're evolving your API if you wanna add a field that's pretty safe. But if you wanna remove a field or change the type of a field, you have to check that nobody is using it in a way that's gonna break. And that's the kind of thing that if you have a typed server, you have a typed client, you just change your schema and you see where you get compiler errors all the way across the stack... And ideally, that tells you everything you're gonna need to fix.

**Mat Ryer:** Yeah, especially if you're using TypeScript in the frontend as well; you literally have types there, too. I mean... Yeah, really.

**Ben Kraft:** Yeah. And a lot of the inspiration for gen client came from clients that already exist in TypeScript, that'll similarly generate your TypeScript types from your schema, and then just use them.

**Mat Ryer:** It's good, ain't it? I'm usually not a fickle man... This episode has completely convinced me to now use GraphQL on the server. To be honest, I've never comprehended -- I thought it was built writing SQL, and writing joint queries, and things like this, in the backend.

**Jon Calhoun:** \[36:03\] I think that gets confusing because --

**Ben Kraft:** You can do that, but...

**Jon Calhoun:** Like, you see all these services out there that are like "This is a database with GraphQL built in", or it will turn your Postgres database into a GraphQL server... It is kind of confusing at times, because you're not really sure what it's doing or how that's working, or whether that's what you'd want... Which makes it a little bit challenging.

**Mat Ryer:** Yeah, that can't be great. That sort of general approach can't be great. Maybe on small projects, or -- frankly, any small project you can get away with a lot. It's a great tip - if you want to write really robust software, don't make it popular. Just don't have that many users... If you can. I'm very good at that. It's actually where I shine. And actually, the whole idea of GraphQL where you can ask only for the fields you need - in some cases, that is just negligible, the difference that that really makes in reality. So it's very interesting to hear about the other benefits and things that would apply even in smaller projects.

**Jon Calhoun:** Like you said, the fields - knowing that you don't have to request them all... I've definitely built some smaller APIs where sending the entire resource back just doesn't matter at the end of the day... So it's like, that's not a real benefit for me. It really just becomes a -- you know, trying to figure out what makes the most sense.

**Ben Kraft:** Even with that, I think the big benefit is really -- it's not that you can skip requesting name; it's an extra 10 bytes, or whatever... It's that you can provide those linkages to friends, and friends of friends, and friends of friends of friends, and you can decide exactly how far down you want to go. I think the relationships -- and that's why it's called GraphQL; your users may be a graph. You can think of the schema, actually, as a graph. And you can decide exactly how far down that graph you wanna traverse. And that's really where it's like -- you definitely don't want to include friends of friends of friends in every API request. That would really explode. But you can get away with including it in your schema, because the client decides "Okay, I don't actually -- I really just needed the friends."

**Break:** \[38:06\]

**Jon Calhoun:** So I guess I'm kind of curious on both of your opinions, since you've built some stuff with this... Typically, when I'm helping somebody learn to build an API or do something like that, my general advice is to start with just a simple REST JSON API that returns some data... Mostly because if you only have one client, and you're writing that one client, and you know exactly what data it needs, you can kind of tailor it around that. Now, granted, at some point it might get so complex that you need something else, but generally speaking, I'm sort of an advocate of keeping it as simple as possible, especially when you're learning... Because you can't learn 17 things at the same time; it's just not possible. And GraphQL, from what I've seen at least - it's not that it's overly complex, but it's also not like "Pick it up in 30 seconds and move on with it." It's gonna take a little bit of learning.

So I guess, what is your advice on when to get started with it, and then can you share a little bit about how you guys got started, resources, that sort of thing?

**Ben Kraft:** I would say get started when you start to find REST frustrating. When you find it's like "Oh, now I have to go change all these six different APIs because I wanted to change one page" or "Now I have to figure out who's using that API, because I wanted to make a change to it, and it's used by 16 different pages, and who knows what they're doing with it." When you start to see those problems, that's when it's like, "Okay, GraphQL is gonna help you." If you're not seeing those problems yet, if you're in a small enough project that you can just build your REST API, and build your client, and keep it all in your head at once, and update everything you need to, then that's fine. I think GraphQL is gonna be unnecessary complexity for you. But it's really when you see those problems with REST. And that's really what we did at Khan Academy quite a few years ago now. We did have this huge REST API, and we did have things with 50 different fields, and it was a huge pain to go look through "Okay, I wanna remove this field because it's expensive, and only a few of the clients need it, but which ones is it?" And that's really when we started to pick up GraphQL and it really helped us a lot.

**Mark Sandstrom:** Yeah. And I was gonna say, we also had some tooling for typing REST responses... And so you know, if you find yourself building out that kind of tooling, perhaps using something that's going to assist you that has that already built in is a good option.

**Jon Calhoun:** Yeah, that makes a lot of sense. Earlier I mentioned the Stripe API, and if I understand correctly, they have a ton of tooling built around what they do... But at the same time, I think some of these companies had to invest stuff back when GraphQL didn't exist... So it's like, "How do we make this work knowing that's not an option?"

**Mat Ryer:** Would you use GraphQL if you didn't have relational data in any way? Would you still use it now?

**Mark Sandstrom:** Yeah.

**Mat Ryer:** Cool. Simple as that.

**Jon Calhoun:** That's all the answer you get, Mat. Just yes.

**Mat Ryer:** Yeah. Fair play. It's just a boolean answer; I like it. Maybe you could answer in a string now, since we're talking about types...

**Ben Kraft:** I don't know, I think most data is somehow relational. There are relationships between your data. If there's not, what is the data even? And there are certainly exceptions, but I think if you genuinely have -- just your entire data is one big table, maybe you don't need GraphQL. But I think almost everybody has some kind of relations, and you'll find value in GraphQL with this.

**Jon Calhoun:** I guess one question I have related to that is if you're releasing a public API - GitHub is an example of one that's a GraphQL API - do you feel that releasing it as a GraphQL API makes it harder to get adoption, in the sense that people are kind of... There's a certain subset of developers who know how a REST API works and they're kind of comfortable with that, but then you throw something new in the mix and they're just like, "I'm not gonna use that API, because it is that new thing"?

**Mat Ryer:** Yeah, I suppose there is also a bit more cognitive effort to actually deciding what data you need, and discovering that, whereas it's much easier to just say "Get this thing", but in reality, what difference does that really make?

**Ben Kraft:** Yeah, I mean -- I think there's a risk of that for anything. I think GraphQL is easiest to use when you're working with the people who are writing the client. There are certainly public GraphQL APIs, but I think when you are kind of both sides, it's really the easiest to adopt.

**Mark Sandstrom:** \[44:04\] Yeah. And I think writing a GraphQL query is pretty intuitive. Mat, you mentioned tooling where you can write a query, select a field, and actually that tooling will pop up, this is the type, and here are all the other fields that it has, and the documentation for those fields... So it does help with discoverability quite a bit as well, and I think that's a great place to start learning GraphQL, is just try writing some queries. It's a pretty easy entry into it. And graphql.org - really good overview if you wanna learn just more high-level how GraphQL works as a spec. Graphql.org/learn. You can run through those pages and get a pretty good, high-level overview.

**Jon Calhoun:** Alright, we're getting sort of near the end of the episode, so is there anything else you guys would like to talk about before we move on to Unpopular Opinions?

**Mat Ryer:** Related to GraphQL, please.

**Mark Sandstrom:** Yeah, I know, I know... I think it was pretty good. We had it on the list to mention federation. Something I can mention right quick around that is - you had asked what advantage GraphQL was giving us at Khan Academy... We moved from a monolith written in Python to Go services, and federation was key in being able to do that safely and effectively.

**Mat Ryer:** What do you mean by federation in this case?

**Mark Sandstrom:** Yeah, so this is where different services own different fields, and you send your query to a gateway instead of a single backend service. It will figure out which services to contact, to connect to to get that data and stitch together and return it. So we treated Python as just any other service. And then when we started building out the Go services, we built some tooling that would send requests to both Python and Go, it would compare them, it would send the old request to the client, it would tell us if there are any differences...

**Mat Ryer:** That's cool.

**Mark Sandstrom:** Yeah. It worked really well.

**Jon Calhoun:** The federation is one of those things that I've looked at because it looks cool, but I've never had a project I've been working on that's like at the scale where this makes sense... So it hasn't been something I've actually dove into. So it's interesting to see that that worked for you guys, for your particular use case of migrating. Alright, let's move on to the Unpopular Opinions.

**Jingle:** \[46:26\] to \[46:42\]

**Jon Calhoun:** Alright, Mark and Ben, do you have any unpopular opinions you would like to share with us?

**Mark Sandstrom:** Sure, yeah. My unpopular opinion - so I think manually grinding through work is an underrated engineering strategy. Computers are great at automating tasks that you know how to do, and you have to know how to do something really well manually before you can effectively automate it. You see this in product development, where startups will just have staff members doing tasks instead of their API automatically doing things as they're building things out. But it also applies, I think, to other areas of engineering, where it could be that perhaps a task isn't even worth automating... I really like the approach of assisted automation, where you let the computer do what it's really good at doing, perhaps finding places in code to update, but then you just go ahead and use your ability as a person to actually make the updates.

**Mat Ryer:** Yeah, I think that's a really interesting one, because it didn't come intuitively to me. That's something I had to learn over years of getting it wrong, basically. I definitely have an instinct to jump too soon into automating things... Because the process of solving that problem is quite nice and rewarding anyway, especially if -- because we're programmers, we're problem-solving, and things...

\[48:09\] But you're so right. And the point you made about you should be able to manually do it first enough to know it inside out before you automate applies to lots of things I think too, and has so many benefits. I think the knowledge you get from that...

**Jon Calhoun:** I feel like you're gonna have a hard time for that one being unpopular. I feel like you're gonna have a lot of people agreeing with you.

**Mark Sandstrom:** Yeah? Okay... \[laughs\]

**Jon Calhoun:** Especially developers. Because I feel like developers make that mistake a lot, of wanting to automate things.

**Mark Sandstrom:** Yeah. It's really the manual grind... Sometimes I'll need to make updates across all of our services, and there's literally 200 things to update, and figuring out how to do that in an efficient way... Automation is not always the answer. Automating some aspect of it usually is part of the solution. But not working on a tool to do that just specific thing that you'll only be doing once.

**Jon Calhoun:** Yeah. So I make video courses that teach programming stuff, and at first it was really tempting to build my own admin page that I'd upload a video and it would do all these things for me, like create a thumbnail, change all the stuff and do it all... And I kind of felt the urge to do that because that was like I'd have to interact with a couple of APIs, and do some other things... And what I've found was that in reality, going to the website that I host the videos on and just bulk-uploading 50 videos by dragging and dropping with my mouse, and then running FFMPEG on my own computer, just generate thumbnails and just basically naming them 01, 02, 03, and just uploading those ended up taking a little bit of time, but it was way less time than it would have cost me to actually develop all this stuff that I really didn't need, because it wasn't like I had a platform that people were all posting stuff on...

Now, it's completely different if you host a platform, but when it's just you doing something, it's like, "Is this really worth it?" And it's really hard to say no, because that sounds so much fun. You're like, "Oh man, I'm gonna get to use this API. It's gonna be fun."

**Mat Ryer:** It's such a good example, Jon, because that is -- even now, I'm thinking "Definitely automate that one." Even just that description of it, in the story where you're saying you learned this lesson; even then, I'm still like, "Yeah, that would be great. That's primed for automation." But Mark, would you resist that urge?

**Mark Sandstrom:** Yes.

**Mat Ryer:** Yeah. Boolean answer. Yes. \[laughter\] Cool.

**Jon Calhoun:** Alright. Ben, while you're here, do you have an unpopular opinion?

**Ben Kraft:** This may also not be that unpopular, but I think that Go really needs union types. Just like proper, disjoint union... I think generics are just making this really obvious; I think it's especially obvious because they kind of half-way added union types, except they only exist in type parameters, and it's kind of more of an untagged union. I think enums are a case of this. I think people using pointers as nullable, when you don't need a pointer, you just need something that's nullable... I think there are so many cases where it's just like "We really could just use union types." I know they wanna take the time to add it right, which I support...

**Mat Ryer:** But you want them.

**Ben Kraft:** ...but I think it's really getting to be time.

**Mat Ryer:** For anyone that doesn't know, what is a union type, Ben?

**Ben Kraft:** So a union type is when you have something like - it could be an int, or it could be a string. There are a lot of distinctions, there are slightly different ways you could think about unions, but that's the basic idea - it's something that could be an int, or it could be a string. It doesn't necessarily have to satisfy any interface. It's just, it's one of that list.

**Jon Calhoun:** I was gonna say, if your unpopular opinion was that your ISP you have is very good... \[laughter\]

**Ben Kraft:** Yeah, well... No, my unpopular opinion is I might need to switch to the terrible ISP whose service everyone hates.

**Jon Calhoun:** I feel like there's lots of potential ISPs for that.

**Mat Ryer:** I love mine. I'm one of those. I have a gigabit fiber symmetrical. It's life-changing.

**Mark Sandstrom:** \[52:02\] Magical.

**Ben Kraft:** Yeah. Sadly, we could not get that at this apartment.

**Mat Ryer:** It's worth running your own fiber around the streets if you can, Ben.

**Ben Kraft:** I wish.

**Mat Ryer:** Yeah... No one would move it for a while, I think. If you knew someone nearby that had fiber... Just while you do the podcast. Just get a really long -- sorry, I have to stop with this now...

**Jon Calhoun:** Can I tell you a story about this, Mat? Very related.

**Mat Ryer:** Yeah.

**Jon Calhoun:** So when my wife and I were building our house, I live with my parents, and their internet was terrible... And I later found out it was because their one DSL line runs underground, and apparently there's water getting in, so when it rained, it would just be a really bad connection. So apparently, it's something -- I don't know the exacts, but it was something with the union with it and everything, it's hard to get them to prioritize this job, and they can't send anybody else out to do it, so it was kind of limited on options. And somehow, at one point they got somebody to come out to run a new line, but it went into a neighbor farmer's field. So it's like just sort of dangling from a pole there, and then it ran through his field. But their internet was twice as fast, so it was great for a while.

Then one day the farmer came through to actually plow his field, or whatever he was doing, cutting stuff, and he didn't know that line was there... So all of a sudden, the internet just went out. And then when they came to check it, basically what had happened is he went over the line and just sliced the crap out of it... And they had to go back to the old line at that point... And they never sent anybody else out to fix anything or do anything with my parents' internet.

**Mat Ryer:** Oh, that's annoying, man...

**Jon Calhoun:** It just shocked me, because I'm like "Who thought this was a good idea, to just run a line through some farmer's field and not tell anybody?"

**Mat Ryer:** Yeah. Amazing. I mean, yeah, I love that story.

**Ben Kraft:** That's gonna be me and running my fiber, you know? It's gonna work great, until somebody runs it over...

**Mat Ryer:** Just avoid the farmers fields. Just be in the streets, I think. That'd be good. Yeah, that'd work.

**Jon Calhoun:** I have decent internet at my place... But if you get outside of this small town that I'm in, where there's a bunch of farms and fields and stuff like that... When I was growing up, it was awful options everywhere. Like, satellite internet was sort of an option, but you always had these bandwidth caps that were so low that it was really hard to use, and everything else... And it's slowly gotten better... Whereas now they have something where they have a big tower, and if you're within direct line of sight, or if you can get a receiver within line of sight of it, it's not terrible, but otherwise you're just kind of out of luck.

**Mat Ryer:** It sounds like you live in a dystopia. Like a Netflix special where -- well, you described this unusual village, with really modern internet, surrounded by... You know what I mean? I feel like we could sell this to Netflix.

**Jon Calhoun:** I think the only reason the internet is modern in this small town is because there's so few people that they have -- Comcast has cable set up, and there's just not enough people for it to actually be slow.

**Mat Ryer:** No one's using it, so it's so fast.

**Jon Calhoun:** Pretty much.

**Mat Ryer:** It's just ADSL.

**Jon Calhoun:** I have an uncle who worked at Comcast... Not directly; he worked on the lines, and stuff... But he used to joke that whenever I move back to this town, that the internet got half as fast, because I'm one of the heaviest users... \[laughter\] It's what he would claim. He was just joking, but... It's interesting in different places.

**Mat Ryer:** I knew your uncle was joking. I think I'd like him.

**Jon Calhoun:** Maybe.

**Mat Ryer:** Can I have his number? That'd be weird, wouldn't it?

**Jon Calhoun:** I don't know. I mean, it'd be more weird for him, I think, if you just called him.

**Mat Ryer:** Yeah.

**Jon Calhoun:** He's like, "What is this long-distance call?"

**Mat Ryer:** I'd be like "Are you Jon Calhoun's uncle?" "Yeah." "It's me, Mat!" What would he do? Should we do it now?

**Jon Calhoun:** I don't think that's a good idea. \[laughter\]

**Mat Ryer:** Okay, well... We need to do a -- next week we'll get ready; we'll do a new regular section, Phoning Someone's Uncle. And we'll just phone up an uncle and see what's going on. Uncles usually have the most interesting views, and some very unpopular opinions...

**Jon Calhoun:** I was gonna say, based on where I live, I have no idea what type of unpopular opinions I might get from uncles... So that could be scary.

**Mat Ryer:** In your dystopian Netflix village.

**Jon Calhoun:** Pretty much. Alright, Mark, Ben - thank you for joining us. Mat, thank you for hosting with me.

**Mat Ryer:** Pleasure.

**Jon Calhoun:** Sorry for the poor intro...

**Mat Ryer:** It's alright.

**Jon Calhoun:** We'll get it right sometime.

**Mat Ryer:** Nah, it's better like this.

**Mark Sandstrom:** Yeah, thanks for having us.

**Mat Ryer:** Yeah, thank you so much.

**Ben Kraft:** Thanks for having us.
