**Natalie Pistunovich:** We are live on the tubes, and welcome everyone, from whatever hour of the day you're joining us, and whenever you're hearing this, live or recorded. I think for once this is a European majority here, so we can say good evening...

I'm joined today by my co-host, Johnny, and we have two guests. We have Anthony and we have Smile. Anthony, you are a senior software engineer at Delivery Hero here in Berlin, and you've been working with Go since 2013, and you're a co-founder of APIToolkit. And Smile is your co-founder, and you are a senior mobile engineer at Runtastic, and you also work with Go since about 2015. Welcome, it's nice to have you.

**Anthony Alaribe:** Thanks for having us, Natalie.

**Smile Egbai:** Thanks. Nice to be here.

**Natalie Pistunovich:** Okay, so what does API stand for? Let's ask the big questions first. \[laughter\]

**Anthony Alaribe:** Huge question. No pressure.

**Natalie Pistunovich:** No pressure. I had to google that before coming into the episode... So anybody who's listening and googling right now, we get you.

**Anthony Alaribe:** I mean, an API is an application programming interface, but I think it can mean a lot of things. I like to think of an API as a contract. So if you have, for example, two services, two machines, one server and one mobile application and they need to communicate with each other, both parties can decide on this contract, "If I ask for this, this is what you give to me. If I ask for this other thing, you give me this other thing." And that contract is basically what I think is an API.

**Natalie Pistunovich:** \[04:13\] Okay. Smile, what is your take on what is an API.

**Smile Egbai:** My take on what an API is roughly the same thing, and coming majorly from the mobile background, I would always say an API is more or less a series of endpoints that will give you resources.

**Natalie Pistunovich:** A series of endpoints that will give you resources. That's short and to the point.

**Johnny Boursiquot:** I like those definitions, they're very specific in terms of use. That's one way to use an API. Maybe you're making some HTTP requests, maybe you're dealing with a different transport mechanism, maybe you're doing it through gRPC, maybe you're dealing - perhaps fortunate or unfortunate - with some SOAP APIs...

**Anthony Alaribe:** Hopefully not...

**Johnny Boursiquot:** \[laughs\] You know, a lot of people still make a living on it, so I'm not knocking it. But to me, these are ways - how do you communicate with an API. To me, an API is, as the name implies, an Application Programming Interface, it's the interface to your functionality, to your code, to the behavior that you've produced and created. Perhaps it's not exposed to the web. Maybe you don't talk to some sort of HTTP endpoint to invoke the API. It could be as little as me creating a package in Go and basically saying "Okay, what is the surface area that I'm gonna allow somebody to interact with? What's the API to this package?" And you control that through the things you export out of your package and the things you choose not to export. What is internal to your API and what is external. What your users of your code get to actually use. So that surface area to me, at its most basic, is "How do you interact with something, whatever that thing is?" And obviously, I'm using Go packages here as the way to convey that... But to me, at the core of it, that's what that is.

**Smile Egbai:** Yeah.

**Anthony Alaribe:** Even if you have a codebase, maybe just like a library or a Go package, like you mentioned, with a series of exposed functions, those exposed functions are also part of the API.

**Johnny Boursiquot:** And building the APIToolkit project - I'm very curious about what the offering is. With a name like APIToolkit, it sounds like you're sort of bringing something generic, in the sense of something that is general-purpose rather, for APIs. Did I get that about right? What is it that you're bringing to the game here?

**Anthony Alaribe:** You know the two most difficult problems in computer science - naming things and the rest... \[laughter\] Yeah, finding names is hard, but I think this name kind of sums up a lot of what we're trying to do. We're trying to solve a few problems around APIs, and the name kind of gives it room to grow.

The main problems that APIToolkit is trying to solve is around anomaly detection. So you have an API, in this case a primarily RESTful API, so an API that you expose over a transport. But let's stick with a REST API. So you have a REST API, with a series of endpoints, and each endpoint returns a series of fields, with values, and something changes. For example, you have a new engineer on the team who makes a change, and that change snowballs and just touches something else. Sometimes these kinds of changes can be difficult to spot.

\[08:01\] Or even for example you have a legacy service which you're trying to rewrite, for different reasons, and you believe you know about the contract of that API, because it was very well documented... But then you rewrite that API and realize that - okay, there were some fields were there maybe ten years ago, no one knows about them anymore, but they are part of this contract, and you did not know about them, and so something breaks. So APIToolkit tries to find these issues before hopefully your customers find them.

**Johnny Boursiquot:** So that's an interesting problem space... So if we can start to sort of dig in a little bit here - when I think of the operability of an API - say you make something public, and once you make it public, like you said, you basically have a contract with whoever is gonna be consuming that. So making changes to that API is very hard to do after you published it, after you have a v1, hence why you typically have to have some strategy for how you're gonna move customers onto the next version of whatever it is.

So the use case you give is one where maybe you have some less-traveled parts of an API, and all of a sudden you think "Okay, can I or can I not change this, or make some modification tweaks, whatever it is, maybe even make some backwards-incompatible changes?" So what you're saying is that you want to have enough information about the usage, how the API is used, in order to know what is the likelihood of you making a change and breaking a particular endpoint in this set of endpoints. Did I get that right?

**Anthony Alaribe:** I mean, very much. Of course, within the limits of what a machine can learn about your servers; it tries to understand "These are the fields that are usually being sent, this is the frequency at which they're being sent." This particular field, this name is usually - maybe it's a string, it's a text field, and it usually has this kind of format, this kind of mask. Maybe there's some alphanumeric mask, and then there's a space, and then there's a mask... So if someone changes that name field and starts to return numbers, then obviously something is wrong. Once you read a lot of bills and let people know "Hey, this used to be a text field with this format, and now it's returning numbers..."

**Johnny Boursiquot:** So is this a development time tool? You want this detection before going live with a change, right?

**Anthony Alaribe:** Yeah. In production, in real-time...

**Johnny Boursiquot:** So before you go production, right? Or when are you detecting -- when are you saving my bacon? \[laughter\]

**Anthony Alaribe:** I mean, Smile, you wanted to add something first?

**Smile Egbai:** Ideally, we would all love for this detector to our code before you go to production, and definitely the tool would surely run both on your staging server and your production server, and whatever servers you would have... But it all depends on the tool itself detecting these anomalies. So if you have this running on your staging environment and you've probably run tests, integration tests within your staging environment, most like the APIToolkit would be able to detect such things. But if you are maybe one of the C/AL persons who probably pushed straight to master and deployed, like in a rodeo, then of course, this cannot really be detected in production. But that's the worst-case scenario.

**Anthony Alaribe:** In a perfect world, a tool like this probably should not exist, because if people were building perfect systems, will test it, every single endpoint is tested, every single field is tested...

**Natalie Pistunovich:** And everybody is following your updates...

**Anthony Alaribe:** Yeah... \[laughs\] Then you really don't need something like this. But unfortunately, in the real world you always make compromises. People deploy to production on Friday nights... And the issues don't only come from within. So you have a service - the issue might not be that on the server side things are broken; the issue could also be that on the consumer side something is broken.

\[12:11\] For example, if a consumer used to send a particular format of input, and someone deployed a web app or a mobile app that starts sending something else, then we also want to flag that and notify someone that "Hey, this server is accepting a very different input from its clients." And the clients could be third-parties, it could be other companies who don't have those best practices that you are following.

**Smile Egbai:** Something that came up a lot in our interviews, where -- it's actually based on third-parties; we integrated a third-party provider. And I think it's also a bad practice when you version an API and you end up going back to version one and changing things. Meanwhile we know if you are going to be using API versioning, if you move to version 2, then most of us go to version 1, I introduce new changes. Or do you constantly see third-parties doing these kinds of things. We won't name names, but these kinds of things have come up a lot within our interviews, where you would integrate a third-party, usually within three minutes, and you wake up some weekend or a Monday and you see a lot of requests are broken, things are not going through. And why? Because someone, somewhere, or some machine somewhere changed an old version and added new fields, and changed old fields we should be good for now. It's not even about you making a mistake. It's more like an API you consume is breaking the contract that has been set. Within these kinds of situations, you definitely want to get an alert about something like this, so you could mitigate certain effects.

**Anthony Alaribe:** I actually just remembered a conversation we had in the interviews with someone, and he said that they have a popular fintech provider that they consume/make use of, and this fintech provider probably deployed a change, and everything was broken for about a couple of hours. So they lost a lot of money, but of course, the fintech provider probably detected it and rolled back... But there was no public update; they did not say they did anything that broke anything, and they would not agree that they made any changes which broke things.

If you have something that shows you and says "Hey, this contract broke at this time, and this is what changed", you can show and say "Hey, you definitely broke something. This is what you broke, at this time."

**Break:** \[14:47\]

**Natalie Pistunovich:** The first time that we talked about APIToolkit, I kind of imagined myself that a good scenario for me to use that would be as a consumer of different APIs... But just now y'all mentioned that this can be a great tool also for a provider of APIs, to make sure that all are in sync. So that's a very interesting accountability tool in addition to everything.

**Johnny Boursiquot:** So along those lines... So it sounds like - and we're gonna get to where Go fits into all of this in a bit here... I wanna make sure I understand your project before we dive in deeper. So your website APIToolkit.io mentions observability. So observability means something very specific these days. It's no longer just monitoring. Observability implies other things. And obviously, we talked about the accountability here, so I'm sure if you consume -- let's imagine that I consume an API from a fintech company; we have an SLA, a service level agreement that says I can expect -- this is when I should, if at all, expect outages etc. So that's an SLA. That's a legally binding document that says this is the level source of it.

And then you have tools, whether it be on the provider side or on the client side, which obviously APIToolkit.io could be something that you as a consumer or me as a buyer, the consumer of this API, could use to basically create my own SLOs, around the availability of this API that I'm paying for and I'm consuming.

So what does observability look like for this project? Are you providing tools to track over time what the performance is? What kind of information are you surfacing with each tracking that you're doing?

**Anthony Alaribe:** It's funny that you say observability is very specific these days. I actually think of observability as a word is just -- people are using it to mean so many different things... Probably APIToolkit is joining that list. But when we say observability in the APIToolkit context, we actually mean what the word says. It's a tool that allows you to observe both your API, but also clients and requests which are coming in, and third-parties that you call, monitor them down to the field level, so you can see each single field, you can see how often each field gets sent or gets received... But you can see this information over time, like you say. So you can see that the obvious API statistics, for example, that 20% of your requests to a particular endpoint end at a 404 error, but you can also see that the name field in this endpoint is a null, let's say 10% of the time. And that's something you want to fix. But it can go down over time and see a lot of these statistics over a period of time. So that's what we mean.

**Johnny Boursiquot:** Is your focus on the shape of API requests and responses? We've come back to the field and the endpoints a few times; I wanna make sure that when we talk about observability, we're sort of localizing the word... We're contextualizing it to just basically the shape of the API; less so things like throughput and how long is the average response taking to come back, and things like that. Or does your solution cover that, too?

**Anthony Alaribe:** \[20:01\] Yes. I mean, we give you your throughput, response time, and different percentiles. That's kind of like just the cherry on the cake; we have the information, so why not give it? But the exciting part of APIToolkit is that you get these statistics, but down to the level of the fields and the endpoints. If you have, for example, a fintech endpoint where you can accept payments, you can see that -- something that we're exploring is that you can see that there's an amount field which usually gets sent; you can see that this field is always being sent on this endpoint, but something that we're exploring is that you would even be able to plot that amount field. So you can on a graph see just basic averages that this field is usually -- you know, over time, every day, the average amount that people transact is $200, but you can just get these statistics down to the level of the fields as well. So we like to just call it field-level observability, pretty much.

**Johnny Boursiquot:** Okay. But you have a few layers on top of that, in addition to just the fields stuff.

**Anthony Alaribe:** Yeah.

**Johnny Boursiquot:** So I do want to sort of dig into the Go side of things... What role is Go playing in this product? I know you have a lot of plugins and integrations sort of a - and go is obviously one of them - is go playing a bigger role in this project for you?

**Anthony Alaribe:** In the development world right now, if you want to do a lot of numbers crunching, and handle/process a lot of things in little time, you have a lot of options. But in terms of the popular options, which are also easy to get into, if you're gonna on-board a lot of people on the project, I think Go brings that hands-down. It's a relatively simple language to on-board people to, but it's also very performant. We use Go for a lot of this. We're trying to process our customers' requests real-time, and that gives us very tight constraints, which Go is helping solve.

**Johnny Boursiquot:** Can you think of ways that Go has helped you solve a problem that perhaps would have been more difficult with a different language? Or did you even consider any other language? Have you used any other language on this project?

**Anthony Alaribe:** Our stack is actually -- we have clients for multiple programming languages, but in terms of the backend side, we mostly have Go and Haskell.

**Johnny Boursiquot:** Wow, Go and Haskell. That's an interesting pairing. Tell me more, tell me more.

**Natalie Pistunovich:** Which one is the frontend? \[laughter\]

**Anthony Alaribe:** A lot of the frontend stuff is actually Haskell. We use Haskell for things where performance doesn't matter so much. But one of the reasons why we use Haskell is that for certain kinds of problems, it can be a little more precise to represent. I mean, you can think of APIToolkit as a kind of parser project, because we get people's requests and we're trying to parse it and understand it. We're looking at the fields and we want to understand what format it is, what types it is, and this is a problem that Haskell historically lends itself nicely for. But a lot of the other things are problems where you just really need to be fast; you need to process really fast, you have memory constraints, you don't want to have hundred-gigabyte memory servers, and that's where Go comes in very nicely. I don't know how the Go team did it with the Go garbage collector, but it's just really hard to beat, and you're able to process a lot of things very quickly.

**Johnny Boursiquot:** So I'm curious where your toolkit lives. Are clients routing requests through it for this analytics to be captured, or are you at the edge, at the API gateway level, or where is this deployed?

**Anthony Alaribe:** \[24:07\] So there's the ideal scenario, there's the long-term scenario, and there's the now.

**Johnny Boursiquot:** Okay, let's do it. \[laughs\]

**Anthony Alaribe:** In the now, what we have are language middleware. For example, in Golang you install middleware, depending on -- if you have a web service, you install middleware for whatever Golang router you use. And what this middleware does is it basically takes a copy of your requests and strips out sensitive information and information which you don't want on someone else's server... And then it sends this copy to our servers to process.

You can sample the request, but we basically process every request that we get on the backend to make sure that that request looks like what the server was expecting. So that that request actually fits the contract that we have. So it's a system that's continuously learning. The more requests from a given service we get, the more we understand what that service is supposed to look like. And if something comes which doesn't fit into our understanding, then we flag an issue and notify someone on that project.

**Johnny Boursiquot:** Okay.

**Smile Egbai:** Think of it as a lawyer...

**Anthony Alaribe:** Explain more, please... \[laughs\]

**Johnny Boursiquot:** Explain. \[laughs\]

**Smile Egbai:** You have two clients, and APIToolkit will seem to be the lawyer. One client doesn't have a lawyer, but the other client has a lawyer, so it's just sitting there in the middle, vetting contracts. You could think of it that way.

**Johnny Boursiquot:** Okay, okay. So I can see how Go in this case would be a good choice as middleware, as one of your clients. So if the shuttling of data on request happens every time somebody makes a request, and a goroutine gets launched, and during the processing of the request hopefully anything that you're doing in the middleware is not delaying the actual processing of the request... So I imagine you structure it in a way that the impact to the processing of the request - because everything has to go through that middleware layer - the impact on the request itself is minimized as much as possible... And then behind the scenes you're just sending data to your server.

**Anthony Alaribe:** This is why I told you there's the now, there's the idea, and there's the future. \[laughs\] So for a lot of projects, for example Golang projects, the middleware app which works very nicely, where the middleware is part of the project; Go's memory representation of information is very compact and useful. But if you're making use of a language like PHP - maybe not so much PHP anymore, but a language that tries to be stateless, then such a middleware app which doesn't really work, because you have to send each request to our servers, each single time a request comes. Whereas in Go we kind of send everything pretty much to one channel, and buffer the inputs from your server and stream them to our servers. In some other language ecosystem this is much harder to do.

So the plan is to have these kinds of sidecars... Actually, we do have the sidecars, but there's just no one using it yet. But the plan is to have this sidecar which you can -- if you have like a Kubernetes cluster or a Docker cluster, instead of your application sending your request to our server directly, it sends it to the sidecar, which then just pre-processes it and sends it to us. That way your actual server doesn't need to keep a lot of information in memory, or doesn't need to do any processing at all. Or little processing.

**Johnny Boursiquot:** \[27:59\] Okay. This sounds very much like the OpenTelemetry community right now. One of the design approaches is basically to have these collectors that are running, and you can certainly run them as sidecars if you wished... But if you have dedicated collectors where - as the name implies - they're collecting all the traces and metrics and whatnot, they on their own time can figure out basically the sending of whatever data you're collecting to your own servers. So you offload that processing out of the application, out of the service, and into this little collecting model. That seems to be a popular approach for this kind of problem solving.

So what I'm hearing is that you're hoping that even though Go today makes the middleware approach good enough, that's ultimately not the long-term solution, right?

**Anthony Alaribe:** I'm happy you actually mentioned OpenTelemetry... I mean, you can think of the information we're getting as traces; it's basically traces. So the entire system is very much inspired by how OpenTelemetry is designed. And the collector is basically language-specific. So if you have a Golang server, then you'd have a Golang middleware, which can do all of these fancy things I've mentioned... But if your server is in a programming language that doesn't have those things that makes Go great, then you have to rely on some other app, like you see in the OpenTelemetry world.

So outside of the collectors and our server side, Go is the first line of contact in terms of processing these traces when they come in. That's where we actually see the real beauty of Go.

**Johnny Boursiquot:** Right. For certain languages in certain tech stacks you're gonna have sort of optimized for those tech stacks sort of collectors and things.

**Anthony Alaribe:** Precisely.

**Johnny Boursiquot:** But pretty much everything that you ship, the moment it touches your network, then it's all Go all the way down, except of course for the Haskell stuff. This sounded like some sort of abstract syntax tree, with a new creation or something like that, trying to figure out what the shape of these APIs looks like. Okay, that makes sense.

**Anthony Alaribe:** Precisely.

**Break:** \[30:14\]

**Natalie Pistunovich:** So talking about APIToolkit, you probably saw a lot of APIs, you've probably complained about a lot of APIs in general as you were coming up with the idea for this...

**Anthony Alaribe:** Who hasn't? \[laughs\]

**Natalie Pistunovich:** So from seeing so many APIs, and probably writing a bunch, what are some good practices that you see, that you follow, and what makes them good?

**Smile Egbai:** So being a mobile developer, I probably consume more than I create. I don't create so much per se, but, one thing that always ate me, I know this might rupture some feathers, or something, but actually it's a bad practice. I'll just have to be brief... \[laughs\] When you are sending an error -- I sent an error, we got an HTTP response code of 200. I'm sorry, but it's a really big red flag for me. I always feel that way, and designing APIs, the error codes are there for a reason.

\[32:03\] So if I request a resource that's not there, it gives me a 404. If there's a problem on the server, it gives me one of the 500s. 501, depending on what depending on what server it is. If the resource has moved, or something, I think it's a 301, or something... But don't give me a 200, then now give me a JSON and throw me an error, then you give me a constructive error body with another error code. Even when you return like a 400 or whatever, you could return an error body with your custom code if you want that, but let errors be errors. Let responsive key be responsive key

I think that's one of the worst bad practices, and even when they are written in JSON, returning a number as a string; it's a small thing, but... It doesn't make sense. If it's a number, let it be a number. But don't put a number inside a string, or don't mask a JSON body in a string. It happens a lot, I see it a lot when I'm communicating with third-parties; I get a JSON body within a string, and then I have to encode it again, or decode it into a JSON object before turning it into an actual object.

I think for me those are one of the pet peeves when you're talking about API best practices in relation to mobile development.

**Anthony Alaribe:** I just remembered one issue Smile was ranting about some time ago... I think he spent some time investing some issue; I think there was a field that -- if the field doesn't exist, it would be a null. He was checking for this null... Maybe you wanna tell the story better... \[laughter\]

**Smile Egbai:** Yeah, so there's this weird third-party provider we have, and when field doesn't exist instead, they always sent a null. But now, when the field doesn't exist, I don't know what they do or how they do it, they just don't send the field. If we are not decoding that JSON, it crashes the adaptor.

**Anthony Alaribe:** You were telling me about a situation where they were sending this null, but as a string.

**Smile Egbai:** Oh yeah, so that's the thing, they've fixed it. They've fixed it into sending a string, and they unfixed it into now sending the null. It's a stack of issues. So it seemed like for everything I complained about, they fixed it, and I don't know what really happened on the testing side, I don't know how that kept on passing through, but they kept on changing, and they were like the bane of my existence at some point... \[laughter\] Because I would come in to work, feeling very happy from the weekend, playing a game, and BOOM. There it is. And I had to do so many workarounds because of this.

I just feel things like these are terrible API designs. I mean, most times, ideally, if you're going to send in a value which is a string as a null, that's fine; we could always check that. But removing the field completely? No. It just makes it hacky. Then bringing it back and instead of sending a null, you now send it as an empty string. I mean, that could still be worked, but it's just too many inconsistencies.

**Natalie Pistunovich:** Yeah. They should be sending like a string to a URL of an image of a meme that says, "Null"

**Smile Egbai:** Look, and the part that killed me the most... I remember it now. They sent the null as a string. You know when you put a null in a string? So instead of sending null, you send me null as a string...

**Natalie Pistunovich:** Was there like a dot after the null? \[laughter\]

**Johnny Boursiquot:** End of sentence...

**Smile Egbai:** Our users were literally getting null. They were getting null; when you displayed the text, you were getting null. And I saw these things and I was like, "How...?!" I didn't believe I made that kind of mistake, and I could not for the life of me understand why I was displaying null null. I just couldn't get it. When I had to go to the restaurant, I now saw a string null, and I was like, "Okay... That's nice."

**Johnny Boursiquot:** That did not live up to your namesake. It did not put a smile on your face. \[laughter\]

**Smile Egbai:** \[36:12\] Oh no, it didn't.

**Johnny Boursiquot:** Oh, man... Given that you're probably receiving a lot of the data you need to process in JSON - correct me if I'm wrong - how is it dealing with JSON in Go? Do you find that the standard library works just fine, or have you had to use something else?

**Anthony Alaribe:** Go actually handles JSON quite nicely. Unfortunately, most programming languages in the world are not written in Go, so this makes it quite difficult to work with. For example, in the dynamically-typed ecosystem it's very common to have one field that can be three things; maybe it's an object sometimes, other times it's a string, maybe sometimes it's null... And this is relatively difficult to represent in Go. You need to maybe use an empty interface, and kind of Go Tree

So this problem -- it kind of makes it harder to consume APIs in Go. It's really nice to produce in Go, because every language who consumes an API that was made in Go would get something very consistent. But if you as a Go service is the one consuming, then you need to be prepared to deal with these things that are very difficult to represent in Go.

Unfortunately, we outsourced a lot of these kinds of problems to Haskell... The language just exists to solve these kinds of parsing problems, and it's just more mature in solving these kinds of parsing problems than Go. Definitely, these things can be done in Go. You can save it into an interface and have a cast a Go tree list of possible alternatives, but the solutions are just easier in Haskell.

**Johnny Boursiquot:** Right. So I'm assuming that in the next iteration of the product, where you do have a separate - let's just go with the term 'sidecar' for now, but... You do have a separate collector, if you want. Then the constraint really becomes how fast can you show the results of your analysis, of your anomaly detections in your own dashboard, and not how fast you can get out of the day of a particular request, right? Then would you say that it doesn't matter as much how fast the processing of the JSON is if you are collecting and maybe doing some compacting on the collector side, maybe doing some sampling right before the data even reaches the edge of the network? Would you say that processing JSON really at that stage doesn't really matter? Or do you have a similar concern?

**Anthony Alaribe:** So what we are doing actually -- I mean, you can divide the problem that we're solving into two things. One is that we're building a model that represents the API, and the second thing is that we get a stream of APIs and we're comparing each item in this stream against this model. So this is kind of the validation process. So working with this stream and comparing is what we are doing in Go. But building this model which we're then going to compare against is just what we are leveraging Haskell for.

Processing the stream is where a lot of the anomaly detection happens, because you wanna go to the traffic in real-time, and if there's an issue, you want to alert someone. But in terms of building the model and displaying it on the dashboard, that's something that -- there's no real time constraints. I mean, there is a time constraint, but it's just more flexible. You don't need the most performant thing to display this model on a dashboard, for example; but you need the fastest thing you can get if you wanna process -- for example, if you have customers who are maybe doing a million requests per second, we need something that can actually process one million requests per second. Basically, process it and compare it against a model and say "Okay, is this request valid? Yes." Then throw it away. "Is this request valid? Yes." Throw it away. Pretty much that.

**Natalie Pistunovich:** \[40:24\] The APIToolkit is available, it's open source on GitHub, right?

**Anthony Alaribe:** Well, right now--

**Johnny Boursiquot:** He's like, "Well, what happened was..." \[laughter\]

**Anthony Alaribe:** You know, it's a business. The core middleware is on GitHub, but we are just slowly rolling things out. Actually, right now APIToolkit is in a closed beta, where we're testing with a few companies. We're just going to gradually test with more companies on our waitlist. There's a waitlist people can join.

Over time, we're sure that we can handle whatever our customers throw at us, because if you think about it -- we need to be able to handle the sum of the traffic from all our customers. So if we have one customer making a million requests per second and another making two million requests per second, we need to be able to handle three million requests per second. So we're just gradually making sure that we can handle that.

**Johnny Boursiquot:** Unless you sample, baby. You've gotta sample. \[laughter\]

**Anthony Alaribe:** Yeah, that's a problem... I mean, we eventually would encourage sampling, but we need to be able to handle situations where there is no sampling... Because you never know where an issue would be. The issue could be in the requests you sample out. So that should be a decision which the users of APIToolkit make for themselves.

**Johnny Boursiquot:** Yeah, that sounds like a business decision. You can kind of punt that down the road a little bit. Cool. So given that your project has no open source components, how would you say the community can help you, if at all? Or is it not at the stage yet where you can get the help from anybody?

**Anthony Alaribe:** Yeah, I think it's actually not so much at that stage yet. We are gonna get to a point where we would need clients for most languages out there...

**Johnny Boursiquot:** You need help with getting clients? \[laughs\]

**Anthony Alaribe:** I mean, that's something that we would figure out when each new language that we need a client for comes up. But yeah...

**Johnny Boursiquot:** Okay. So clients for languages, not customers-clients.

**Anthony Alaribe:** No, no, no. Clients! \[laughter\] Collectors, precisely.

**Johnny Boursiquot:** Got it.

**Anthony Alaribe:** I mean clients as customers - that is always welcome... \[laughter\] No one says no to clients. But yeah.

**Natalie Pistunovich:** Fun. Okay.

**Johnny Boursiquot:** Is it that time, Natalie?

**Natalie Pistunovich:** It is. It is that time.

**Johnny Boursiquot:** Here we go.

**Natalie Pistunovich:** Time to invite... Mat.

**Jingle:** \[42:49\] to \[43:07\]

**Natalie Pistunovich:** Hey, now that we have Mat's song with us, we can officially approach the second part of the show... \[laughs\] In the last five minutes. Guys, we're interested in your unpopular opinions. Who would like to go first?

**Johnny Boursiquot:** I don't know, we've heard some from Smile... \[laughs\] Well, I don't think they're that unpopular. He raised some fair points. Don't send the null screens in your responses. \[laughs\]

**Natalie Pistunovich:** Use the HTTP code!

**Smile Egbai:** Oh, no...

**Natalie Pistunovich:** Use the HTTP codes. \[laughs\]

**Smile Egbai:** Yeah, please. Always use the HTTP codes. They are there for a reason.

**Natalie Pistunovich:** So what is your actual unpopular opinion?

**Smile Egbai:** Okay, it's not really API or tech-related, but it's more of educational. It's more like -- I think the current school system, or this school system that's always been, just doesn't work. You subject children to -- I don't know, is it eight hours, ten hours of school, with 15-30 minutes break, and they come back home to 2-3 hours' worth of homework...

\[44:09\] They are like bank workers. The kids are basically in this reformed sweatshop that you pay for. That's how I see it. You send your kids to a sweatshop, and you pay for them to suffer. Because -- I mean, they are children.

Okay, like - you have a full-time job, you work eight hours. When you are done, you're tired mentally, you're stressed. Now imagine children having to go for like 8-10 hours outside their home, they come back, and they have another 2-3 hours of assignments. They have no life besides school. We don't build children's character. I really think the school system should be modified in a way there are shorter times for course learning.

I think there was a study where children who are homeschooled actually performed better than kids who actually go through the traditional education systems. So that's my unpopular opinion.

**Anthony Alaribe:** Were you scarred by this growing up? \[laughs\]

**Smile Egbai:** Oh yeah, I hated homework, to be fair. I did it, but I hated it.

**Johnny Boursiquot:** It's almost like we're training our children to go into some pre-existing system where they go to work 9 to 5, and... \[laughs\] Yeah, we're training workers, aren't we?

**Smile Egbai:** Yup, we are. We are giving them -- it's a stress test.

**Johnny Boursiquot:** "Can you handle what's gonna come for you after school?" \[laughs\]

**Smile Egbai:** Yeah.

**Johnny Boursiquot:** Alright, alright... Well, I don't know if that's gonna be unpopular. I don't disagree. I hear you.

**Anthony Alaribe:** I definitely agree. I think I saw a talk by Ken, somebody, sorry I don't remember, a TED talk, and he was like "Kids who want to go into kindergarten get interviewed." I was like, "What exactly are you interviewing these kids for?" Like, are you gonna ask them "What have you done with your three years of your life?" \[laughter\] Just breastfeeding?

**Johnny Boursiquot:** "I don't know... Pee, poo, try to walk around... I don't know."

**Natalie Pistunovich:** "Show me how you use the touchscreen. Can you open and close apps?" \[laughter\]

**Anthony Alaribe:** Someone said something like -- yeah, he saw an advert that said "College begins at kindergarten." And he was like "What...?!"

**Johnny Boursiquot:** Good Lord...

**Anthony Alaribe:** Kindergarten begins at kindergarten. Not college.

**Smile Egbai:** I think it was that same talk.

**Johnny Boursiquot:** From Ken, from TEDx? \[laughter\]

**Anthony Alaribe:** Yeah, that guy.

**Johnny Boursiquot:** Shout-out to Ken from TEDx.

**Natalie Pistunovich:** Anthony, what's your unpopular opinion?

**Anthony Alaribe:** Mine is just that I actually think German as a language is quite nice. I have been in Germany for three years and I have been avoiding the language until this year... And after some months of classes, it just makes a lot of sense. The rules are so -- I can't imagine learning English if I didn't learn it as a child... Because when I think of the rules in English - like, there's almost no rules. There's exceptions, and exceptions of exceptions... And in German it just makes sense. So yeah...

**Johnny Boursiquot:** Okay, okay... For a lack of a better term, you were afraid of it until you started learning it.

**Anthony Alaribe:** Yes. There's this popular stereotype about the German language. It's like, machine, so harsh. But maybe that's also what makes it nice, because then the rules are very clear.

**Natalie Pistunovich:** Until you hit exceptions. \[laughter\] But there's probably less than in English. I think I would agree with that.

**Anthony Alaribe:** I hope... I'm still learning.

**Natalie Pistunovich:** Yeah. Well, let's see. So your unpopular opinion is that German is actually nice.

**Anthony Alaribe:** Yes.

**Johnny Boursiquot:** \[laughs\]

**Natalie Pistunovich:** I will be curious to see how is that gonna vote out...

**Anthony Alaribe:** Yeah, we'll see...

**Natalie Pistunovich:** You can think of it also as a sort of a contract, sort of an API, right? Languages...

**Anthony Alaribe:** Yeah, my API contract with the German population. With the ladies at the male dom office.

**Natalie Pistunovich:** City registration and all the bureaucracy... That is a serious contract with them. They will not upgrade to a version two... \[laughter\]

**Anthony Alaribe:** Yes, they will not. \[laughs\]

**Natalie Pistunovich:** Cool. Alright, well, thank you very much for joining, and thanks everybody who tuned in. We look forward to hearing about your contracts with the world, I guess, and all the texts.

**Johnny Boursiquot:** Yeah, good luck, guys.

**Anthony Alaribe:** Thanks for having us, guys.
