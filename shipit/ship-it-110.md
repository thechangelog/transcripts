**Justin Garrison:** Hello, and welcome to Ship It, the podcast all about what happens after you git push. I'm your host, Justin Garrison, and with me as always is Autumn Nash. \[unintelligible 00:00:58.11\]

**Autumn Nash:** \[unintelligible 00:01:00.18\] cup of coffee, and it's hitting...

**Justin Garrison:** Energy...

**Autumn Nash:** The caffeine has kicked in, y'all...

**Justin Garrison:** It reminds me of -- you never had an old desktop, did you? a '90s desktop, with a turbo button? Did you have a turbo button on your computer?

**Autumn Nash:** No...

**Justin Garrison:** Oh, ma... It was the old school overclocking. Technically, it was the clock speed, and everything else was underclocked... But whoever turned off the Turbo button?

**Autumn Nash:** There was a Turbo button? I feel I've missed so much...

**Justin Garrison:** It was good times.

**Autumn Nash:** You old people had all the cool stuff. I had a computer 2000... 2001? 2002 was my first computer. But it was a computer from the '90s. What was the -- E-machine, I think is what it was?

**Autumn Nash:** My first computer was the iMac. It was \[unintelligible 00:01:50.23\]

**Justin Garrison:** That's not even a computer, that's a product.

**Autumn Nash:** No... It was the cute little desktop, and I was in love with it. I've never loved something so -- I played Descent space game, and Oregon Trail, and then I learned what a file system was, and the nerd in me blossomed that day.

**Justin Garrison:** I never played Oregon Trail. That's what I missed out on.

**Autumn Nash:** What is wrong with you? I have a shirt that says "I died of dysentery from the Computer Museum \[unintelligible 00:02:23.02\] I'm so sad that closed down... I was looking at it and I was "Justin is coming to Seattle", and I was "I'll take him to the computer museum", and it closed down. It made me so sad. That place was so cool.

**Justin Garrison:** Yeah, I remember I was probably in second or third grade...

**Autumn Nash:** If we get rich, we've got to open the computer museum again.

**Justin Garrison:** That's just gonna be my garage. I have so much old stuff in here...

**Autumn Nash:** Dude, they have one of those Hidden Figures computers in a room. It's so cool. And every old computer -- like, the computers of my childhood were in there... And you can play games on them. That was one of the oldest Linux I've ever played with, was they had a whole room of just old computers, and you could just try to do stuff on them... It's being a nerd in a candy store. You walk in and you're "I haven't seen this stuff in 20 years." It's so cool.

**Justin Garrison:** I am on the lookout right now literally for a project to find old Linksys WRT54G's, the old, the blue...

**Autumn Nash:** If you find an old iMac, you better get it for me.

**Justin Garrison:** Oh, these old iMacs, they're a couple 100 bucks. I actually saw one, I was a thrift store...

**Autumn Nash:** And you didn't get it for me?

**Justin Garrison:** They were $300.

**Autumn Nash:** Okay, I would have Apple paid you if you had told me about it... Because you keep trying to suggest I get that dude's iPad cases, I was "I could buy a real iMac for that price." I don't know what I would do with it though...

**Justin Garrison:** I have a \[unintelligible 00:03:41.03\] I could throw a rock at it right now.

**Autumn Nash:** I'm trying to think of what I would do with it. My kid has my old iMac, and he acts he's dying because it's slow, and I'm "Sir, that was the business when I bought that..."

**Justin Garrison:** 733 MHz

**Autumn Nash:** I was "Just because you live in the world of fast processors and everything..." I had to use dial-up internet, okay? I had to save up for that iMac.

**Justin Garrison:** Go get your kids a NetZero CD, and like the free 90 minutes a month...

**Autumn Nash:** I am like the \*bleep\* parent. I'm like "If you want to get into tech, you can go build your own computer." We're going to a thrift shop this weekend, and he's going to figure out -- I was like "You need to research all the different parts of a computer and how you put it together."

**Justin Garrison:** And speaking of everything old is new again...

**Autumn Nash:** It always is, because good tech is simple... It's simple. And then you make it better, and accessible, and easier to use. You don't just invent the wheel over and over again.

**Justin Garrison:** Old ideas and new execution.

**Autumn Nash:** Yes.

**Justin Garrison:** We're talking about WASM today. WebAssembly. We have Bailey and Taylor.

**Autumn Nash:** I'm really becoming a fan of WASM. It wasn't really on my radar, and now I'm like "This is kind of cool..."

**Justin Garrison:** The only times that used it and I've written WebAssembly it was great because it was invisible. And that is not the case for Docker and containers, where it's part of your deployment pipeline... And as I compile out a WASM binary and then stick it on a runtime, it's been great. It's just like "Oh, I don't have to think about it."

**Autumn Nash:** I'm trying to figure out how I get into Kubernetes, and I really want to play with TerraForm, so I'm like "Maybe WASM will be how I get into Kubernetes." I mean, I use Docker all the time. But you know what I mean? I don't know, y'all with Kubernetes, y'all just feel like -- I want to touch all the things, and do all the things, and make this as complicated as possible... And then just looking at the Cloud Foundation website just scares me.

**Justin Garrison:** Yeah. I just this last week wrote a 10-year Kubernetes blog post, and going through my history of what I've done with Kubernetes... Because I've been working with or around Kubernetes for nine years now. And I'm like "I don't know 80% of the stuff." You don't touch everything in the stack. It's like, if you're trying to go down that route, you may be looking at too much stuff, and you really have to focus. And WASM feels like you can... It focuses more on the application, it tries to simplify some of the other stuff, but we get into it really deep today with Bailey and Taylor, both from wasmCloud, who laid out a lot of cool things that we got to talk more about, like the Bytecode Foundation, and just in general how the W3C is attacking the WASI interface, WebAssembly System Interface... I'm trying to remember the acronyms now. But she said it changes. It's in the interview, listen for it, because now it's not System Interface anymore. Standard Interface, that's what it's called.

**Autumn Nash:** It's really nice to talk to open source communities and open source practitioners that are thriving, because open source feels real dark right now... So t's nice to see the Postgres community and the WebAssembly community; they all seem like they're really making good progress and solving problems and having -- they're gaining traction, and kind of doing well... So it's really exciting to see that they're solving problems and doing good stuff, because it seems like that is a very nice, accessible way to get into Kubernetes, possibly.

**Justin Garrison:** So let's jump into the interview, and when we come back, we will talk about some more old technologies.

**Break:** \[07:00\]

**Justin Garrison:** Today on the show we have Bailey Hayes and Taylor Thomas. Bailey, you are the CTO of Cosmonic and a co-chair for the W3C WebAssembly System Interface Group. And Taylor, you are director of engineering at Cosmonic and the co-chair of the WASM Working Group for Kubernetes. Is that right?

**Taylor Thomas:** Yes, that is correct.

**Justin Garrison:** I got at least part of the title good, so this is great. This is a good start now. Bailey, we first met a couple years ago at KubeCon. I was wandering the KubeCon floor, and I was trying to figure out this WASM thing. Like what is WebAssembly... And I went to a couple booths, and it wasn't really explained really well to me. I remember stopping at your booth and talking to you, and you were so excited about WASM and what it could do, especially for developers and applications... And then mostly around that abstracting away all the little details behind how an application plugs into the rest of the stuff. And it's been a couple years now... Can you describe a little bit of what you've been working on, and what WASI specifically is for how applications fit into this ecosystem of products?

**Bailey Hayes:** Yeah, I think at the time we were very much underway on developing the component model, and this next iteration of WASI.2, that was several years' effort, that we delivered on January 24th, is when I held the vote in the WASI subgroup. And so that was when we officially launched it. And that's a pretty big difference from the last time we talked, where people like me were so excited and evangelizing it, but because we needed people to come in, we needed more hands to make it real... And now where we are is that folks are able to build with their standard language tool chains, and many, many different ones are underway, or actively have already been delivered. Some of the ones I'll call off that are most recent is the TinyGo work. It has landed where I just write normal Go code, and all those normal sys calls that I might make when I target a WASI \[unintelligible 00:14:56.14\] out comes a .wasm that is interacting with those WASI interfaces.

We probably should describe what those are, since that's very tied to my role... But the short answer between when we talked before to now is that it's very real, y'all, and people are building on it. We have customers and real use cases and deployed into production, which feels great.

**Autumn Nash:** If you've never heard of WebAssembly and let's say that you were a customer, what would be your use case to switch or to try to build something in WebAssembly?

**Bailey Hayes:** Yeah. So I would say that most people that are coming to the party are large enterprises that have a fleet of microservices; they're feeling the pain of having to maintain those over time, they're feeling the pain from cost to even maintenance complexity... And they're looking for a solution that is not just a smaller container, but something that is based around contract-driven design, so that you can easily swap out the provider side of things.

So if you're a platform engineer, you feel this problem extremely acutely, that you want to update the client that everybody's using, because you want to update the database that everybody is using, or you want to update the messaging provider that everybody's using, like Kafka... And you just can't do it, because that requires the entire fleet of developers to go and rev this stuff.

\[16:22\] And the way that it actually looks in the real world is it's a giant human-built chain to actually be able to make these changes. And by decoupling that and by working at a different level of abstraction, the developers focus on what they want to focus on, just writing their business logic, and then the platform engineers are able to provide a platform that decouples that, and that they can easily maintain. Those folks, at those large enterprises, are really into it.

Of course, that scale goes all the way to the people who recognize that WebAssembly is the next abstraction, that is safer, smaller, faster than all the things that came before. But for enterprises, it's usually that bottom line that's the most important to them, which they're feeling.

**Justin Garrison:** Does that abstraction limit what you can do with the tools? If I say I have Kafka over here, and something else that's another message bus... At some point, I have to go to the least common denominator. I can't use the power of Kafka, because I'm like "Oh, well now I have to treat it like a generic thing, and I don't get the benefits out of the choice I made for that technology."

**Bailey Hayes:** Yes, absolutely. And we have Taylor Thomas here, who's champion on a lot of the WASI Cloud interfaces... And that is very much their motto. I'll let Taylor give it.

**Taylor Thomas:** Yeah. The WASI cloud interfaces are a set of these things, like you're talking about, where we have this idea of "Okay, we have a lowest common denominator." And part of the work that we do inside the WebAssembly Working Group, that's part of TAG Runtime in CNCF, is we help provide feedback for these interfaces.

Now, what's really nice about these interfaces and the reason they're called components is because you can actually compose them together, and you can choose which interfaces you get to opt into. So one of the key benefits of WebAssembly is -- this isn't like the CORBA kind of old style of interface things where you're locked into a specific kind. The WASI cloud interfaces are aiming to be those lowest common denominator; the 80% use case is what we generally call it over there, which is the common term a lot of people know... And we aim for those, because there's a lot of people who just need that. And you see that in any of the cloud providers. You see it from everything like functions as a service providers like Cloudflare workers, to more complex things in the major clouds, where they have some standard sets of features that you can just kind of get and attach. So you can opt into that.

And the goal we see for the future here is let's say you have a Kafka, like you'd mentioned, and you have a messaging, which is actually one of the interfaces I'm actively working on right now... You're going to have the basic messaging things that you need from that. But you might not support all the Kafka features, and that's fine, because what happens is for those more simple applications, which -- it's called the 80% use case for a reason, right? It's 80% of those applications. Those things can be extremely portable. But when you start to talk about more of these performance issues, you can either compose it with another type of interface, or select a different interface.

So you can have -- what we see in the future here, and we're already seeing this now, actually, is you have something like these base interfaces, and then you have a Kafka-specific interface. And so when you're making these decisions, you're very clearly opting into a specific library or database, rather than getting coupled at the very, very beginning of the work that you're doing... Which allows for a lot of flexibility. And because these things are just essentially things that plug together - you have one end that matches the other end - now you can actually use that to compose different things. You could say "Oh, I'm going to update this interface", or "I'm gonna improve it", and you can put something that's basically an adapter between it without needing to go update your original code. So it leads to a really interesting process with software development.

**Justin Garrison:** \[19:54\] So it adds the portability and ease of adoption for like "Hey, if I fit this model, I can now change out my cloud." That portability is really nice. But at some point, I probably need some specifics, depending on my application. And not every application does. But is this similar to something like -- I was just doing Python yesterday... Some SQL alchemy, versus the database, like specific driver in Python? I can have this generic interface, that does a lot of things, but it makes some of the complicated things really messy. Or I can go into the database-specific things and it's a little harder to get started, and it's not portable, but I can do anything I want.

**Bailey Hayes:** Yes, absolutely. So WASI started as the WebAssembly Systems Interface, but really now it's very much the WebAssembly Standardized Interfaces. So we're going through and finding that common set, or really it's most often the case that there's already some standard API or interface that already exists. I'll use libusb as an example. So we've been working on was-usb,i that is very much a "Let's come up with a WebAssembly-native way of describing that interface, that makes a lot of sense and allows for capability-driven security interfaces." However, there are a lot of cases where people need a specific thing that they're doing, and so in high-performance use cases for SQL contracts - that's the most common one. People actually need exactly that thing. And in wasmCloud - Taylor and I are both maintainers of wasmCloud, which is a CNCF project; it's moving into incubating likely soon. There we propose wasmCloud Postgres, which integrates the entire set of types inside Postgres. Everybody uses it, it's easily the number one database that's at play in the open source space today... And there we came up with an interface that we think is highly optimized for it.

There was previous work on "Can we come up with WASI SQL-style interface, that can just use kind of a lingua franca of SQL and hope for the best?", bypassing strings and kind of just basically creating a SQL socket, is all we gave people... And that very much loses out on the promise and all the work that we did in the component model to be able to provide semantic and static high-level type information for people when they're building... And then you just lose all that and give them...

So the answer is we are focused on WASI Cloud \[unintelligible 00:22:17.10\] stuff, which is the 80% case, we have some that are very, very optimized for a specific use case, at even a hardware level within WASI... And now there's this third case that wasmCloud enables; we call it "bring your own components", but essentially, it allows us to support custom interfaces. So write your interface for your provider, that you want, write your own provider, so you can write your own custom provider... If we don't support it. But there's a good chance that we already do. Then that can be very optimized for your use case.

The place where we're seeing that a lot is for people who have their own maybe proprietary providers, that are a very specific data store that they're using, and a very specific way of perhaps doing things like pagination... They define a WIT interface for that, which is the WebAssembly Interface Types, the IDL... So they write a semantic API for it, that's driven for talking really easy between WebAssembly components... And then they can have lots and lots of different WebAssembly components that act kind of like a microservice that is able to communicate with that now. That's one of the coolest things that I think we provide in wasmCloud, and the way we do that is pretty neat. But all of it at the end of the day is enabled by the standards, by WASI and WebAssembly component model.

**Justin Garrison:** What are the "bring your own components"? What is that written in? Is that more -- do I write WASM to get a component? How's that work?

**Taylor Thomas:** \[23:46\] So it's actually really interesting. One of the things that's hard when people first encounter WebAssembly is they think it's something they have to learn. What you have to learn is actually the idea of interface-driven development, that WIT IDL that Bailey mentioned. But WebAssembly is just a compilation target. And so as WebAssembly matures, people will know I think less and less that they're actually doing WebAssembly stuff when they're compiling it down. Right now you have to know about those things that are up to date, and have the right tools, because it's a newer technology. But that's quickly going to fade into the background.

And so when you bring your own components and bring your own interfaces, what I want to make really clear here is everything that you do with these interfaces is entirely standards-compliant. If somebody else implements that same interface for you somewhere else, and you first created it in wasmCloud, it runs over there. That's kind of the core ethos of our project, is everything must be based on and use the standards. And so any language that can compile to WebAssembly, you can use that to write these components.

Some languages are better than others right now, but that support continues to get better and better for all the different languages out there... And then the providers are actually inside of the wasmCloud context can be native binaries, because there's some things that can't be done in WebAssembly yet, or need capabilities that aren't necessarily available through that. And so they are written as basically plugins for what we call the host, the wasmCloud host. It's \[unintelligible 00:25:07.02\] for those familiar with Kubernetes, which are probably many of your listeners... Essentially, a host is like your kubelet, in a sense; the thing that runs the stuff for you. And these act as host plugins of a kind, and we call them providers because they provide functionality for one thing to another. And those can be written in whatever you need to, and it conforms to specific standards. Even the way we communicate when we do things in a distributed way is over a protocol that's entirely open source, and built on the standards of WIT and how WebAssembly encodes values, all of those kind of details. So it's built on top of that as well. And so all that it needs to do is use those same interfaces, no matter if it's being a distributed thing, which is what we do very well. Or if you're running it just locally with a simple tool chain, or a simple tool like Wasmtime, which is the CLI \[unintelligible 00:25:54.08\]

**Justin Garrison:** So I can write a provider in Bash.

**Taylor Thomas:** You could, totally.

**Bailey Hayes:** You could. I have seen it.

**Justin Garrison:** Just making sure. This is always where I start, yeah.

**Bailey Hayes:** But maybe don't.

**Taylor Thomas:** It's wild. \[laughs\]

**Autumn Nash:** So I've heard WASM be described a lot as something like Spring for Java...

**Bailey Hayes:** I could see that.

**Autumn Nash:** So is it kind of like a framework that helps Kubernetes or containers be more digestible and easier to use? How would you -- like, if you were not as experienced in the Kubernetes space, or containers, how would you explain that to someone who wanted to get into the space, but was looking for a way that would make it more accessible for maybe their engineering team or their organization to use, and wanted to use what you guys have built to get more experienced, or to find their way into containers, I guess?

**Bailey Hayes:** I would describe WASI as sort of the model layer of MVC, of what Spring Boot enables. It's sort of a little bit lower; it's one piece of that puzzle, not the completed piece. The implementations of it -- in the Bytecode Alliance Foundation, for example, I'm TSC director of the Bytecode Alliance Foundation. It's a nonprofit for implementing secure runtimes and tooling on top of the WebAssembly standards. So we do drive a lot of use cases, a lot of production use cases, and then feed that back into the standards body, which is in the W3C... But the Bytecode Alliance itself doesn't create standards. And one of the runtimes that we have is Wasmtime. And so you could consider Wasmtime being the piece that facilitates the JVM part here, in that story... And so that's the WebAssembly runtime.

Inside the WebAssembly runtime we have some host built-in pieces that we call essentially providers, that provides an implementation of some of those WASI interfaces, like WASI HTTP. So how do I make an HTTP request? How do I respond to a request? So both the client and server side of it. Then there are entire ecosystems that are built around runtimes like Wasmtime, which is for example wasmCloud.

\[28:04\] We embed Wasmtime into our wasmCloud host. That is where we get a lot closer to that completed Spring Boot story, where with wasmCloud host you have the NVC side of this, where our WebAssembly components are triggered in an event-driven architecture, and when they are triggered, we launch them inside Wasmtime. That is done in a serverless way, and that component solves the cold start problem that a lot of Java microservices, they take a long time to start sometimes. At my last company some of ours took minutes, which was pretty terrible... Whereas WebAssembly components, they start in microseconds. And not only that, we're able to ahead-of-time compile them and cache the compilation.

We're also able to streaming compile components, so it's really wonderful just for distributed use cases. And they're significantly smaller. So my case at my old company, some of our Spring Boot microservices were eight gigabytes, whereas with WebAssembly components they're typically kilobytes. Some are megabytes, depending on the language that you compiled from into WebAssembly. But if you're building with something like Rust, or C++, that's a lower-level language, it's going to be very small. It's perfect for that use case.

**Justin Garrison:** Is wasm still typically function-based? I mean, it's short-lived runtime. Because I always hear the fast startup time as like this huge deal for WASM. It's like "Oh, it's great. We can start in microseconds." I'm like "Well, it doesn't matter if I only start it once." If I run a traditional web service, I don't care how long Apache starts. It's okay. It'll take a little longer. But it seems like every use case that I've heard of with WASM is always focused on that. This is writing more of a Lambda style interface for things. So the functions as a service.

**Taylor Thomas:** Yeah, that's a great thing to point out, Justin, and that's something that we always talk about. So if you want to run Lambda functions as a service, we're great at that. But we also are pretty much architecture-agnostic. We personally have ran microservices on top of it, we've done long-running things, we've done shorter-running things... The main purpose is that our architecture is event-driven, but it does not force you to a Lambda-style thing. So what we end up with - there are stateless components that run, that connect generally through these providers to access state. And then you have stateful components, which are providers, and then as WebAssembly continues to mature, some of those providers, instead of being native binaries, will just be WebAssembly binaries that are longer-running. That was one of the things we gave feedback on.

**Justin Garrison:** But it's still event-driven. How does a long-running process with event-driven -- or is this just like forwarding the requests? It's always there accepting requests, but then as they come, it just triggers the event?

**Taylor Thomas:** Yes.

**Bailey Hayes:** Inside wasmCloud, yes. There's a very popular protobuf API for long-running requests that we've sort of taken inspiration from and modeled within the wasmCloud ecosystem for that type of thing. However, I will say that one of the key benefits and one of the reasons why people are so geeked about serverless-style WASM \[unintelligible 00:31:06.12\] is that when we look at the fleet of microservices, they're not called all the time. You're spinning compute, spinning RAM when you don't need to. And a lot of those workloads deeply benefit from a really small refactor over to WebAssembly, and that saves on cost.

**Justin Garrison:** One of the things I was trying to get to is I have been defining the WASM ecosystem, or WASM specifically -- WASI specifically for system interfaces, to myself. This isn't talking about actually WebAssembly in browsers. For the system infrastructure, microservices style. So I've been defining it for myself as the Kubernetes of Lambda. We're having this moment of like there's this open source ecosystem growing around event-driven architecture, specifically that's the architecture -- you can't do other things with it. But having it as this open ecosystem, part of a foundation, and allowing multiple parties to be involved and multiple languages to be compiled, and then solving some of the underlying systems stuff of like "How do you connect to something? How do you do service discovery?" All that's handled for you. That's handled in Kubernetes today, and it's at the Kubernetes API level somewhat portable. But for the application it's not, and it's very much specific.

\[32:22\] So now, my definition for myself has always been like "Oh, well, now we're doing that at one level up" and saying the application's a little more portable. I don't care what database I'm calling, or what event bus, or those sorts of things. And I can say, "Oh, I can change my architecture." But you could do that in Kubernetes, too. And so that's how I've been defining it, and I'm curious if that seems right, roughly right, or where I'm wrong.

**Bailey Hayes:** It's so close. I would say that wasmCloud is the Kubernetes Lambda that you're looking for, because what all of these other projects that exist in the ecosystem that help WebAssembly run well on Kubernetes - which are awesome and cool - are missing one key aspect here, which is the WASM-native orchestration that needs to happen. Now they leverage a Kubernetes service style routing; how do I know who to talk to, and that sort of thing. They typically will have this service abstraction there in place to do that. But that really loses all of the amazing stuff that we put into the WebAssembly component model, and doesn't take advantage of the interface-driven design, understanding how to run that workload, that itty-bitty workload right next to where the user is.

So with our operator that we run, that is all done over interfaces. And we natively scale this out. And actually, I feel a little silly saying it, because Taylor here actually created what we call WADM, the WebAssembly wasmCloud Deployment Manager.

**Justin Garrison:** WADM? This is great.

**Bailey Hayes:** WADM! Yeah, we say it like a punch. Yeah. Go ahead, Taylor...

**Taylor Thomas:** You say it like a punch. You can see it in the logo. If you look at the project, it looks like a punch from a \[unintelligible 00:33:53.06\]

**Autumn Nash:** I love whoever did the naming for WebAssembly. Whoever did the naming - chef's kisses. Like...

**Taylor Thomas:** We have a little too much fun with the w's, we'll just say that.

**Justin Garrison:** Can you describe the backend of wasmCloud? When we had Fermion on, they let us know it was like EC2, it's AutoScaling Group with Nomad. And it's like "That's great." They shove everything in that, and they can run thousands of functions or executions per node... How does that look for wasmCloud? What are the differences? What kind of design decisions have you made?

**Taylor Thomas:** Actually, this is like our bread and butter about what we love, and it kind of backs up what Bailey was saying about why we think wasmCloud's really that next Kubernetes. Because an important thing to note here before I dive into that - because this provides important context - is that Kubernetes is an infrastructure tool at its heart. It's not an application platform. It's great at running compute, it's great at running things... It's really not great for applications themselves. It doesn't offer building blocks for applications. It offers building blocks for running things. And so that's what the component model offers, is building blocks for applications. And that's what you see a lot of people at companies who have been doing Kubernetes for a while, they're getting into. hey're using stuff like Backstage... They're really cool tools, but they're resorting to templating to making sure that all of this is the same. And so when we approached it, we're like "Okay, we need that", like Bailey said, this orchestration layer that sits on top.

And so we tried to learn a lot of things from what Kubernetes did well, and what it didn't do as well we created this. So how wasmCloud works under the hood is we're built on top of another big CNCF project called NATS. NATS is essentially our networking layer. And the best way I've ever heard this explained was actually -- somebody explained it back to me after I explained them what we did, and I've used it ever since... Was that NATS, when we use it that way, instead of having a dumb network and smart clients, you have a smart network and dumb clients, is the way they explained it back to me.

**Justin Garrison:** It sounds like an enterprise service bus.

**Taylor Thomas:** Yeah, kind of. I always hate saying enterprise service bus, because it makes everybody cringe, like "Oh, no!"

**Justin Garrison:** How much SOAP is there?

**Taylor Thomas:** \[36:04\] Yeah, how much SOAP is there? Is there an XML envelope? Anyway... So the whole thing with NATS is that it has those smarts, because everything -- you don't have to worry about service discovery. You're using a message bus to address things to where they need to go. And so we build on top of that with our wasmCloud host. And our wasmCloud hosts together provide a very simple API for start. Basically, it's a command and control API for starting things, or stopping things, or linking things together dynamically across our distributed basically cluster, that we call Lattice.

So that's how wasmCloud itself works. Now, in and of itself it doesn't have any smart routing, but what we didn't want to do is have the same problem that Kubernetes has, where the Kubernetes API -- I mean, I know there's separate components underneath. We can always dive into that. But essentially, the Kubernetes API is the thing that orchestrates, the thing that schedules, the thing that -- so it's all one big monolith, and it doesn't allow people the flexibility to really add things on without having something that adds directly on to the API. So because we publish events off of everything that happens, you're able to key off of those. And we've built WADM, which we mentioned. And WADM is the orchestration layer. We use the OAM manifest format, which is an open format from the CNCF as well, and we define "Here are all my different components." You think of it kind of like a Kubernetes deployment. I can target these nodes, or these things, and I need it to run in these regions. And all of this isn't stuck on a single Kubernetes cluster. It could be across multiple Kubernetes clusters, it could be across a custom data center, or an edge and a Kubernetes cluster, it could be across multiple clouds, all being part of the same logical cluster. So when you have this WADM, it allows you to say "I'm going to target these and spread it out and target to have certain requirements and upper limits of how much can run."

Then on top of that, for integrating in with things Kubernetes - so that in and of itself, those things you can spin up and run on plain VMs, you can run it on Raspberry Pi's, you can run it on whatever you really want to. You're not required -- our big things we're compatible with, but not dependent on any previously existing technology. So if you want to run on all these things, you can, but then we obviously thought "Hey, people are running stuff in Kubernetes, and Kubernetes is great at running infrastructure." So we created the Kubernetes operator. And the Kubernetes operator - most people are familiar with operators, so I don't need to go into that. But the idea behind it is we're not trying to substitute out a container with a WASM component. What we're trying to do is say "We want to run alongside these things you're doing." So you can install our operator into any cluster; you don't need any custom node pools, you don't need anything like that. It runs wasmCloud hosts, and then actually joins and uses the Kubernetes aggregation API to tie into our WADM API as well, so that you can just do Kubectl apply with that WADM YAML manifest.

So you can use it from the wasmCloud tooling, or the Kubernetes tooling, and then it integrates in with things using like endpoints slices to be able to automatically create services to bind these together. So we're actually -- we've demoed this several times, and we can always demo it, we'll always be demoing it again, of connecting multiple Kubernetes clusters from multiple cloud providers all together, running an application.

So there's no longer this thing where you have your DevOps workflow where you have to have 20 different copies of the thing being deployed to US East and US West, and then this region, and then this backup policy. You can just manage it as a single cluster depending on what you're doing. And those clusters can then automatically failover because of that going back to the first layer, the NATS layer of this... I can just literally kill an entire cluster and things start routing to the next thing if that's running on there as well.

So that's kind of the overview from the low-level to the higher level of how this all integrates in with what we currently have and anything else you want to run.

**Bailey Hayes:** I'd describe it as a single WASM-native control plane.

**Autumn Nash:** \[40:01\] That's awesome, because I feel like everybody wants to be cloud-agnostic right now, so they can move back and forth... And I feel like out of all the conferences I've been to, it's either the same startup that nobody wants over and over again about AI, or it's like this, where it's something that's cloud-agnostic, that's giving people the freedom to either have monitor and observability into multiple clouds, and to be able to run infrastructure, or it's something that's making it easier to failover into, like have the ability to deploy on multiple clouds, so...

**Justin Garrison:** Autumn, I thought we were gonna make a whole episode about AI being mentioned. I was so close... \[laughter\]

**Autumn Nash:** But it's true, though. It's true, though. It's th same -- like, I've never been so horrified on conference boards, and I'm like "You did what?"

**Taylor Thomas:** Being in the startup world, it's the "sprinkle AI on it" strategy. And so that's what we call it.

**Justin Garrison:** That's not a startup thing. That's not just a startup thing. Go look at anything any FAANG is doing.

**Taylor Thomas:** I know, everybody's doing it, but it's also -- that's like the strategy. People are like "Oh, we weren't sure, so we just sprinkled some AI on it and got our next round of funding", or whatever, you know.

**Justin Garrison:** Yeah. The only difference is Google's and Microsoft's and Amazon's sprinkles are a lot bigger, right?

**Taylor Thomas:** Yes.

**Autumn Nash:** But it's wild... It was just like "Let's think of the worst idea we can come up with. And then let's put a bunch of money in it..." I'm just like "This is wild." So anyways...

**Justin Garrison:** But back to single architecture-free application. Is that a responsible architecture? Is that something that you would recommend or should be doing?

**Bailey Hayes:** I got this... \[laughs\]

**Justin Garrison:** Having an app that spreads regions, spreads cloud providers, spreads -- and trying to make it as easy as possible... Like, I look at some of the really large outages in the past for any company usually comes from this "I have one interface for everything, and I changed the config, and automatically everything fell down." Those are the types of things where the blast radius gets so large and the underlying infrastructure gets so complicated, and different, that I can't say "The stuff running on-prem here is also in eight different clouds around the world, and I deploy it once and it goes everywhere." I'm like "That's maybe not responsible." Is that something that is hidden, or better in WASM?

**Bailey Hayes:** I would say that it's not particularly a WASM problem, but specifically in the wasmCloud space. We designed it with resiliency in mind, and global scale in mind. And the way this essentially would work for you as doing a configuration rollout is setting a label for your specific zone that you want to do the rollout to. And you would do a gradual rollout to ensure that nothing bad happens during that. Yeah.

**Justin Garrison:** Yeah, at some point you do want to take responsibility for how this works. The first time I was using WASM was I was building on Cloudflare Workers, and I think it was great -- and Taylor, to what you're saying before, I didn't care or know that I was writing WASM at some point. It was just like "Oh, I wrote some JavaScript, and then it deployed a function around the world." And for the things I was doing, that was fine, because it was for a newsletter, or whatever. I'm like "I don't care if it goes down. I'm not getting paged for it." But for someone making money off of these things, you want to have a little more responsibility and a little more control over making sure that you still make money off of these APIs.

**Bailey Hayes:** Yeah. So to answer Autumn's original question, we were pushed in this direction because of our users and our customers. And what they needed is a way to react to this pendulum that keeps swinging back and forth. It swung hard towards the public cloud, it is now going back very hard in the other direction towards on-prem and their own data centers... Or in specialized data centers that maybe are adjacent to pools, and other things that are more environmentally-friendly. And what we provide is something that's very much tailored to that exact use case.

And now I will also say that most of the folks that are our customers, they're banks, they're telcos, they're people that you wouldn't expect using new, innovative technology, that are really all-in because this is the only thing that really solves that problem well, with the level of resiliency, scalability and really the responsibility for the platform engineering team to be able to do this safely at scale.

**Justin Garrison:** \[44:14\] New, innovative technologies also feels very old sometimes, right? This feels like a Kubernetes cgi bin. I mean, that's what function as a service and event-driven architecture sometimes feels like, but making it abstracted and putting some smarts at the lower level. Like, put that at the network level, put that at the execution level, and then you can have some smarts about where you're routing, and how you're routing it, and where you're scaling it. Because the network layer knows that you have multiple data centers.

**Bailey Hayes:** What's old is new again. That is definitely the case. I mean, look, hey, I didn't say it this time, but I could have said "WebAssembly, it's your write once, run anywhere technology." You might've heard that before.

**Justin Garrison:** Yeah, that's why we were talking about it with Java in the last interview we had about WebAssembly... Because it was -- it feels very similar, but with newer smarts at different layers. We've taken some of what we learned from enterprise service buses, we're taking some of what we learned from Kubernetes and the cloud, and we say "Okay, how does this work for applications?"

**Bailey Hayes:** And we've broken it down to first principles, and went back to the root of the problem, which was effectively "How do you describe what an application is? And what does an application need?" And then built a platform around that.

**Justin Garrison:** And wasmCloud is something anyone can run themselves? This is open --

**Bailey Hayes:** Open source, CNCF project... Yeah. I think what I would tell people to do is to use the wasmCloud operator. We've got a Helm chart, it helps you deploy NATs, and then wasmCloud on top of NATS... It runs really well inside of Kubernetes... It doesn't have a lot of the pitfalls that some of the other WASM Kubernetes approaches have, which is like you've got to go down there and modify things like runtime classes, and create node pools, and all this very specialized stuff for running WASM... Whereas this is just three commands, you're running WASM alongside containers and it just works. You don't have to really make any major changes to your platform.

**Justin Garrison:** Do you know how that compares to other event-driven runtimes that are more container-native, like Knative? Knative gives me that sort of Lambda-style execution inside my environment, but it's all container-based. I think they have some abstraction of how you get executed... I haven't run it for a while... But do you know how this compares, outside of just being a different binary?

**Bailey Hayes:** Yeah, I would say footprint-wise, wasmCloud is vastly smaller. Or any of these other WASM solutions. But also, in terms of orchestration, it has the WASM cold start versus the container cold start, so much more advantageous from that perspective. Now, in terms of what languages can I write in and target, I think WASM has slightly more restrictions, versus what you can stuff inside a container. However, 17 out of the top 20 languages have some level of WASM support, and that's growing every day. So that's very rapidly not going to be a thing that we talk about anymore.

**Justin Garrison:** Can you describe to me what the Bytecode Alliance does? That's been one of those things that's on the side, where it's like when I look at this portable binaries, I look at an Elf binary that I have on Linux, and I'm like "I can run this on any Linux Kernel that supports some level of C, or whatever it's trying to call." Why is there a new executable format, and a runtime interpreter -- let's not call it an interpreter. Whatever the runtime is that executes the Bytecode that spits out - how does that work together?

**Bailey Hayes:** Yeah. Hey, it could be an interpreter. There's \[unintelligible 00:47:27.23\] working on its own interpreter... So it's a play with WebAssembly, too. So the Bytecode Alliance is a nonprofit foundation. There were a lot of things informed right at the same time that WASI Preview1 shipped in 2019. And the reason why is that it was too big of a problem to go along. We recognized that to be able to solve this we need to really develop something that allows us to have a modular API, because immediately after launching Preview1 we wanted to make changes... But it was a monolithic \[unintelligible 00:48:06.18\] instead of a modular API, which is what we've landed with WASI.2...

\[48:11\] We also knew that we needed to find a way to solve this problem that the industry is facing, which is giving everything all at once, the entire environment, access to the whole operating system, just all of it, and trying to isolate it by stuffing things into container-sized boxes, and then wrapping lots of stuff on top of it just isn't working. And - I mean, working in that we've shipped billions of dollars of software on it, yes, but...

**Justin Garrison:** It works, but it doesn't work. But from a maintenance perspective, it's a huge burden, from like a "How do I actually secure this and know that it's definitely a secured perspective?" It's not the right solution. And starting all the way back to that Bytecode format is where you can start from the very root. And if you do it there, you don't need all of these other layers that we're adding on top. And that's why a lot of people love the idea of only targeting WASI, only targeting one WebAssembly runtime to do it. But inside the Bytecode Alliance - it was joined by organizations like Microsoft, Intel, Red Hat, Fastly, and many, many others. I think we're somewhere around 35 organizations now across the industry, with a lot of research. And the things that we're so motivated to solve is how to do capability-driven interfaces.

So today, if I write something in a container, I'm giving it all the environment variables that are exposed in the container, which also means all of my third-party dependencies that I installed in it for my application... So you know, crack open your Node modules folder, all of them have all of that... And they have your AWS API key for - whatever, your data store and all of it. So if there's any type of supply chain attack, they've got it... To a different world, where I can say specifically "These environment variables go to this specific component", and I can semantically analyze that before I ever even launch this thing. Before I even try to run it on any given runtime." So if I'm running in a place where I didn't come up with a way to sandbox exposing sockets, then I won't execute a component that tries to expose sockets. That's very different from attacking it at an operating system level, or at a network firewall type solution, like \[unintelligible 00:50:18.15\] which is compatible with, and I also recommend you do that to defense in depth... But taking it all the way back to that first piece, and allowing the platform to say exactly what is safe to run is extremely powerful. And I think we're gonna see so much innovation in that space going forward.

**Autumn Nash:** It freaks me out, all these companies where like "We'll have automation in AI take all of your variables, and it's going to build your infrastructure for you, and it's going to secure this, and do that." And I feel like you're gonna have a lot of customers when they try these things that are like "Let's just give the keys to the candy store to all of your infrastructure." And when that goes wrong, they're gonna come and call you. Because every time I see one of these pitches, I'm like "This is a horrible idea." Why are we giving one service the keys to your whole entire infrastructure candy store, and then not being worried about what's going to happen?

**Bailey Hayes:** There's a reason that we've had low-code solutions around for a decade, and it's never really taken off. And I would argue that it the problem to solve, the problem for these large enterprises that are building entire fleets of microservices - it's about the maintenance; it's about the burden of having written that line of code. I'm not trying to write more lines faster, I am trying to find ways to maintain what I've got, and write exactly what my users need.

**Taylor Thomas:** Yeah.

**Autumn Nash:** But then if you have something that's autonomously writing the code for you, you have no idea how to fix it, or what went wrong with it when it goes wrong.

**Taylor Thomas:** \[51:58\] I love what you said, Autumn, about the whole -- like, you're giving the keys to the kingdom of something, and if you think about it, the other pendulum swing that I always talk about is... This is obviously high-level; you can dig down and there's more details... But late '90s, early 2000s is what I lovingly called a trash bag method of deployment. Like, you finished your app, you bundled it into a trash bag, and you threw it over the wall to the ops team to run your application. And then we swung in the era of Kubernetes the exact opposite. And then everybody had to know everybody's business, at all times. The developers had to know which databases, and which CRDs, and which credentials, and which thing to use and which thing not to use, and so on and so forth... And then the platform teams had to go in and say "Oh, well, what dependencies are you running in this container? Which things are in here? And here's this blessed template of a container", and then you have to ask for permission to do this. And then you'd end up codifying all these dependencies up, and saying "Okay, well, now we have this deployment manifest, and now we have a deployment, and we have to put it in a Helm chart", or whatever. And you're basically like -- it's all one big blob of mess that everybody has to manage. And when you start to split these things up, you get a lot better separation of concerns. That's why we've built a platform around the standards with wasmCloud, is because we try to move that pendulum as close back to the middle as possible.

If developers are programming against interfaces, it means that it's a lot simpler. They don't have to decide which Redis client they're using, or which version of X thing they've got to use... They've just got to decide which interface they're going to use. And then they can code against the interface. And because it's introspectable, the platform engineers can take that and say "Oh, they're looking to connect to these things." And they might have a process; if it is a bigger company, say, "Oh, there's three different databases. Tell us which one you want." And then they get to control those credentials. And then this kind of answers a little bit of Justin's question earlier about "Oh, would you want to deploy something that's global?" You're able to target specific things and swap out those dependencies on the fly, and link only what you want to link, and combine and rearchitect the applications as needed for your platform.

So you're not siloing people, but you're providing a really good layer of abstraction for the developers to say "I need X", and for the platform engineers to say "I am providing you these building blocks with these interfaces. Please use them, and then I'll take care of the details for you to connect those things." Because those details matter to the platform engineers. They really don't matter for the most part to the developers.

And so putting that back in the middle, it separates out and gets rid of the whole -- giving the whole keys of the kingdom to be able to do everything to all things. And that's something I really have loved about WASM, and that's why I got involved in it in the beginning... Because that was one of my problems, having worked on things lik AKS, and Helm, and all those kinds of things in the past.

**Autumn Nash:** Do you ever wonder why developers are like that, though? ...where they're like "We don't want to touch any of it", or we want to know every single fine-grained --

**Justin Garrison:** It's a shared operational problem, because you're putting some of the operational burden, the maintenance side of it into the development cycle, and you're saying "Hey, you have to be responsible upfront to tell me what access you need, and all those other things." And the way we've been doing it, like you said, Taylor, with the trash bag model... I think of it as like, my older son can do a lot of things. He has a lot of responsibilities, he does chores, he does all this stuff. But when he gets in trouble, he's grounded. And a lot of times with a Kubernetes application, I just need to remove all these things that you're allowed to do from your capabilities. I drop all capabilities, no network access, and then we're going to add little bits back to it and try to build backup to say "Oh, you're allowed to do this much." And my older son's like "That's terrible. I'm never gonna do that again, because I know what it's like to have all the freedom and all the system in the world."

But for my younger son, he doesn't have all those same things that he can do, and he's building up from like "Hey, if I give him a couple things that he can do, and say "Hey, will you take out the trash for me, and also, I'll let you play this video game", he loves it. He's like "This is amazing. I can do all this stuff." And he's sharing some of the responsibility, because he doesn't know what it's to have access to the entire system and the entire world and every environment variable.

So we're either dropping everything for someone that has all the access, or building up from someone that hadn't had it before, and moving that to the developer and saying "You need to tell me upfront what you need to do, and I will give you that access in production, and then we'll both be happy as we maintain this stuff going forward."

**Autumn Nash:** \[56:13\] See, I think it's like this pendulum keeps swinging, and I think that WASM is giving people an in the middle -- it's making it more accessible for someone who doesn't have the experience, but it's also making it where you can do the things that you need to do. It's like security. You want something to be secure, so it can't be attacked, but you don't want it to be so secure that you can't do anything with it and it's not usable. It's the constant trying to be in the middle. So it seems like you've finally found a middle ground, that's good and accessible.

**Justin Garrison:** Bailey, Taylor, thank you so much for coming on the show and describing WASI, and WASM, and wasmCloud to us. This has been great. And diving deep into it. If people want to reach out online, I know you're both within different organizations... CNCF as far as the WASM space, and then the W3C, as well as cosmonic.com with wasmCloud. So if anyone wants to reach out, I'm sure they can find you in one of those locations. But thank you so much for coming on the show, and hopefully we'll talk to you again soon.

**Bailey Hayes:** Thank you for having us.

**Taylor Thomas:** Thanks for having us.

**Autumn Nash:** Talking to you guys was a pleasure.

**Break**: \[57:14\]

**Justin Garrison:** Thank you so much, Bailey and Taylor, for coming on and talking to us all about just WebAssembly in general. All the stuff in the ecosystem, what wasmCloud does, and how it's kind of a difference... And in correcting me on my assumptions around like "Is Kubernetes and WASM kind of different sides of the same coin?" I like being wrong, but I also like having analogies that people can relate to, so...

**Autumn Nash:** I thought your analogies were really good, especially with the kid one. I thought that was new levels of dad joke, dad --

**Justin Garrison:** It's just real life for me. The more you try to take away from a kid that access...

**Autumn Nash:** We're old... These are our analogies? Are we old people? Like...

**Justin Garrison:** Hopefully, the podcast listeners can relate, because I don't know the age demographics, but... If you don't have kids yet, you might remember when you were grounded, not too long ago.

**Autumn Nash:** Sometimes I wish I could ground myself. Like, I need a nap and I want to stay in my room and read a book all day... And my kids complain about that. And I'm like "Yo, can you do the laundry and work, and I'm gonna be over here with my book?"

**Justin Garrison:** Yeah. "And don't give me \*bleep\* about taking naps, alright?"

**Autumn Nash:** Thank you... You are king of naps, okay?

**Justin Garrison:** I love naps.

**Autumn Nash:** I swear I've never seen someone that naps like you do. And how do you fall asleep that fast? What goes on?

**Justin Garrison:** 12 minutes. All I need. It's great.

**Autumn Nash:** I think I would wake up more grouchy, and nobody would want to put up with me... So I just keep drinking coffee.

**Justin Garrison:** And that's the problem. If you take a nap too long -- if it's a 30-minute or more nap, you're grouchy.

**Autumn Nash:** How did you master this?

**Justin Garrison:** My kids. I never napped before having kids.

**Autumn Nash:** You only have two of them. \[unintelligible 01:03:35.23\]

**Justin Garrison:** I know. It's true. I don't know how you have three.

**Autumn Nash:** Why do you think I drink so much coffee, Justin? Okay, what are RFCs? Tell us what this is.

**Justin Garrison:** Yeah. Today's outro, we're gonna talk about RFCs. And if you're not familiar with them, they are -- it stands for Request for Comments, and it's part of the IETF, which is a standards body that has been around for a very, very long time. And RFCs have been around for, I believe, 50 years now. I forgot to look up what the first RFC was. But if you like ASCII diagrams, you're gonna love RFCs.

**Autumn Nash:** Justin, who wakes up and says "I love ASCII diagrams. They just make me happy"?

**Justin Garrison:** I love me a good ASCII diagram. Look, I have a GitHub repo called Awesome TUIs, which is basically functional ASCII diagrams. That's all it is.

**Autumn Nash:** You collect GitHub repos like other people collect domain names, okay?

**Justin Garrison:** GitHub repos are cheaper.

**Autumn Nash:** You know what? You're not wrong. Maybe you're doing it the correct way.

**Justin Garrison:** But I was reading RFCs this last week... I don't remember -- did I tell you what I was reading?

**Autumn Nash:** I don't remember. But all I know is you were like -- I white papers, so when you come up with white papers, I get excited. This, I'm a little bit scared. Like...

**Justin Garrison:** I don't know when I got into white papers. I got into white papers before I got into reading RFCs. RFCs are for me like I need to debug something...

**Autumn Nash:** \[unintelligible 01:05:04.22\] white papers when I started reading them for work at AWS, and then I just -- it became my favorite way to consume things. If I'm going to study for a certification, I will read a bunch of white papers on that technology first, because I hate -- I definitely like watching video classes and all that stuff, and books, but sometimes white papers gets you \[unintelligible 01:05:27.04\]

**Justin Garrison:** Yeah. I mean, it's long-winded sometimes. But it helped me -- I started reading white papers when I had my first sysadmin job, because I was learning all these technologies I never had access to before.

**Autumn Nash:** Yes.

**Justin Garrison:** And the best thing about white papers was it told me when to not use a technology.

**Autumn Nash:** But when you're trying to learn something new, that's what -- especially from the context of a solutions architect, which is where I started reading papers... I want to know what the use case is. When do I use this? When do I not use it? How does this compare to something else?

**Justin Garrison:** That has helped me so much in my career. My meetings were like "Hey, we're talking about this new technology. We want to use this new thing. And we think we can apply it to this domain." And I would read the white paper. I'm just like "Hey, in this white paper they didn't use it for that, for these reasons. And do we have similar constraints? Should we be doing those things?" And that has served me very well. And I enjoyed reading them.

**Autumn Nash:** \[01:06:17.01\] It helps you not get tech debt for nothing... Because people are like "This is the new fancy thing", and you're like \[unintelligible 01:06:19.26\]

**Justin Garrison:** Well, I've seen this before. And there's a lot of white papers that are not technology-related at all, or they're technology-adjacent. When I was at Disney, I loved reading the Pixar Animation, and Disney Animation white papers, because they were just papers that got put out. Most of them were not systems related...

**Autumn Nash:** Interesting.

**Justin Garrison:** They were rendering, they were -- we had a white paper at Disney that was like how to render snow accurately for Frozen.

**Autumn Nash:** Wow.

**Justin Garrison:** There was a whole research thing, there's a research team at a lot of these studios.

**Autumn Nash:** That sounds really cool.

**Justin Garrison:** A lot of the special effects companies will have research teams that will do this deep research, and then they write a white paper and say "This is \[unintelligible 01:06:53.19\]

**Autumn Nash:** How do you get a job on making snow? That just sounds funny...

**Justin Garrison:** So RFCs are kind of the other end of that. Research papers and white papers are like when do we apply things, and how the technology works, and RFCs are kind of like "This is a spec of a thing that we want to exist, and we want people to adopt it for some way." And it's not a set in stone thing, because plenty of RFCs replace older RFCs, or augment them and say "Hey, we tried this thing, and maybe it didn't work so well." But some other ones are very foundational technologies, like DNS, and IPv4 and IPv6, and some things that people probably aren't familiar with anymore, like BootP. BootP was a precursor To DHCP. DHCP is also an RFC, but BootP was the original. Like "Hey, you plug in a thing into a network of systems, and you don't want to configure it manually. How do you get that configuration?"

**Autumn Nash:** I love that though, because when you're really solving hard problems in technology you know that you want to build something, but learning what the blocks are... Sometimes you know that you want to build something, but you don't know what's available to help you build it. So knowing what the Lego pieces look like... It's like building Lego pieces in the dark, until you know what tools are out there for you to build, you know...

**Justin Garrison:** Speed-building Lego pieces in the dark sounds like a --

**Autumn Nash:** It's hard. It's not fun. So it's like \[unintelligible 01:08:18.21\]

**Justin Garrison:** \[unintelligible 01:08:24.26\] Don't step on the pieces.

**Autumn Nash:** No instructions...

**Justin Garrison:** Barefoot.

**Autumn Nash:** "We want it in an hour." So I feel like when you have white papers, when you have any kind of -- that helps you to understand the tools better for you to understand how to build these things, and to be able to use the tools better and more efficiently, always makes you a better engineer, builder.

**Justin Garrison:** In the times I have used RFCs have been the times I've been taking a system apart. White papers helped me build it, or know which technologies that build it. RFCs help me understand it when I need to dissect it, and say like "Oh, what's the header for this IP packet?" Or what's the protocol I'm looking for, or what's the flag -- like, that stuff, looking at the specs, has been super-helpful. That's what it was.

I was looking at tunneling protocols, a white paper about tunneling IP and IP. And I went down this rabbit hole, watching TV one night, I pulled it up... And that's what I do for fun.

**Autumn Nash:** I love the rabbit holes that you randomly go through, and then I get a signal or a text message, like some random thing, and it always makes my day.

**Justin Garrison:** "Did you know...?"

**Autumn Nash:** Yes. Dude, I was reading a meme, and it said "Being friends or having loved ones who are ADHD is micro-dosing Wikipedia." And is that not our conversations?

**Justin Garrison:** But we go far enough to -- we're off of Wikipedia. We're the Wikipedia of resources. We've found the resources of the resources, and we're like "Okay--"

**Autumn Nash:** We've gone down the rabbit hole...

**Justin Garrison:** "I've gotten to the bottom of this hole... Guess what - it's Bash."

**Autumn Nash:** It's always Bash. It's Bash and Assembly, and it makes the world go around.

**Justin Garrison:** \[01:10:09.14\] Yeah. We just wanted to call it -- like, RFCs in general; we'll have a link in the show notes.

**Autumn Nash:** Okay, so what's the coolest RFC that you -- give us two really cool ones that you were like "I did not know that", or that made your day.

**Justin Garrison:** I mean, the 2068 is HTTP protocol, first-gen, a 1.1 or whatever. 2068 is a really foundational one if you're trying to understand how verbs work, and how HTTP is supposed to work in the real world... Ones that I remember reading were the TCP and IPv4. So that's TCP's 793, and IPv4 is 791. So around the same time - that's like two off. IPv4 791, ICMP, which is ping packets, 792, and TCP, 793. They go in order of when these things are being ratified and kind of created. And it's like "Hey, we need to have IP addresses, and we need to have ping packets, and then we need TCP." And that's like --

**Autumn Nash:** This is a really nice little summary, kind of like the list of things, and... I like this.

**Justin Garrison:** Yeah, we're gonna link to the one from -- Wireshark had a really good roundup of some of the foundational ones for network stuff, which is a lot of RFCs...

**Autumn Nash:** Do you feel that networking sometimes feels Charlie Brown's teacher talking to you, until you go down like five rabbit holes, and then you kind of understand the first thing, but then you're confused about two other things after that?

**Justin Garrison:** I mean, if you like acronyms, then you know what to do...

**Autumn Nash:** I'm always like "Okay, I know the first thing that I wanted to know, but now I'm confused about five other things... And it's been four hours..."

**Justin Garrison:** The best thing is just to try to pronounce all of the networking acronyms... Because at least with Kubernetes --

**Autumn Nash:** Nobody told me there was so much math, though. Like, why? I was \[unintelligible 01:11:49.03\] I think, when I was learning how to be a solutions architect, and dude, they were like "And then we're gonna do this math." And I'm like "Whoa, whoa... Networking and math? Too far. Whoa."

**Justin Garrison:** And you've just reminded me that I read a white paper, which was probably one of my favorite white papers, which is one of the early Software Defined Networking white papers. And I for the life of me cannot remember what the title of it was. If any of our listeners know the foundational, software-defined networking... I remember where I was when I read it. I used to print them out and go mark them up. I would read them at lunch, I'd bring a Sharpie with me, I'd write notes... And then I'd basically recycle them.

**Autumn Nash:** You are my favorite type of hyper-fixation nerd. Okay, be real... Friends that you can have fun conversations and then learn something with, and make things not so daunting are the secret to life, okay?

**Justin Garrison:** Oh, yeah. And having friends that are experts in very specific things... Like "Hey, you know cosplay. 3D printing cosplay. How do I do this piece?"

**Autumn Nash:** Well, not just that, but when somebody asks me a Kubernetes question, I'm like "Hold on, let me text Justin." The idea that you have to be an expert at everything in tech is just a pipe dream. You are not going to know all the things. Everything's constantly changing. But knowing the right people to ask to find out... That is like --

**Justin Garrison:** One of the things that I think in developer relations, in DevRel, that I've done fairly well is I don't have the answers, but I know who to connect you to. And that is a huge win.

**Autumn Nash:** I think that's real in engineering, but not even just dev rel. I think you can help your cust-- and a solutions architect. That's basically what a solutions architect is. You are either the expert specialist who knows that area deep, or you are the generalist that knows all the specialists to talk to.

**Justin Garrison:** And a lot of it is just to helping someone sidestep the process of filing a ticket. That's the whole point, of like "Hey, we have \[unintelligible 01:13:42.12\]

**Autumn Nash:** SAs can't do that, but maybe a TAM and an account manager, maybe... But you've got to have really good TAM and account managers, and I think having the people skills to talk and be nice to those people, and to build good relationships... That's how you get your customers the best results, when the people to find to help them if they have a problem that you can't answer, and you've built good relationships with other humans to get them what they need.

**Justin Garrison:** Agreed. Anyway, we wanted to call that out, because that was something that I did this week... And it wasn't something that is commonly known, at least from what I know of the current market of people coming into tech, and learning about things... Like "How do I find the source of this?" And you always find the person that's worked there for 10-15 years and like "Oh, they know." But actually, there's a database that's free. And one thing I love about RFCs is they're free. It is open, available to the public, where a lot of white papers are not. You have no subscribe, or know something, or be --

**Autumn Nash:** Not just this, but this gives you a great starting place for a lot of different things that will help you to kind of have a better understanding of networking, which is a daunting task when you're first learning about it, you know?

**Justin Garrison:** Oh, for sure. Yeah, networking is very deep, and no one knows everything.

**Autumn Nash:** And I think knowing that TCP layers and just certain things is just a really good -- like, if you're going to deal with cloud and other things, it's good just to have a 100 level, 200 level just to kind of understand what you're reading when it comes to VPCs, and all that good stuff.

**Justin Garrison:** It's just the same stuff in a new envelope.

**Autumn Nash:** It is. And then when you start at a basic level like this, you're more equipped to go into a more, I guess, you know, the new, shiny versions of it.

**Justin Garrison:** So thank you, everyone, for listening. If you have a topic you'd like us to talk about, or someone you'd want to come and be on the show, feel free to email us. It is shipit@Changelog.com. And hopefully, we will see you around. I know I'm traveling, or -- actually, I don't know when this episode is going out. I think it will go out after my conferences, but there's conferences in the fall that we're going to as well... So there's some times to meet us if we are in-person. We like to interview people in-person when possible... And yeah, we'll talk to you all soon.
