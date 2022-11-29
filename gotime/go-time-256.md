**Jon Calhoun:** Hello everyone, and welcome to Go Time. Today we're going to be talking about protocol buffers and gRPC, as well as some common misconceptions around them. Today I am joined by Akshay Shah, who works on a profile compiler, schema registry and RPC tools at Buf. Previously, he's worked on several thrift compilers and a custom L7 network protocol. So he has a lot of experience in this space with protocol buffers, RPC and related technologies. Also, if you've ever used the ZAP logging package, you've probably used Akshay's code. Akshay, how are you?

**Akshay Shah:** I'm good. How are you doing, Jon?

**Jon Calhoun:** I am doing well. A little bit raspy in the throat, so I apologize for that. I'm also hosting with Johnny Boursiquot. Johnny, how are you?

**Johnny Boursiquot:** I'm feeling good. I'm tired, but relieved. I've been working on something for a little while, and it's finally coming out tomorrow, so I'm pretty excited about that.

**Jon Calhoun:** That's awesome. Release days are always fun... Assuming they go well. I hope yours does.

**Johnny Boursiquot:** Yes...

**Jon Calhoun:** Alright, so you'll have to let us know about that once that's released.

**Johnny Boursiquot:** Yeah, indeed.

**Jon Calhoun:** So Akshay, we first started talking back whenever Mat did an episode on - what was it, bloat that can come with software? And protocol buffers came up because there's something that when you import them, they can lead to a lot of extra code being imported sort of behind the scenes, without realizing it... So we wanted to talk a little bit about sort of different implementations of these things, and all that stuff... But first, let's just start off with the basics. What are protocol buffers?

**Akshay Shah:** That's a great question. Protocol buffers are actually -- they're two separate things, that are closely related, but it's important to have a little bit of airspace between them. The first thing they are is they're a little language for writing schemas for your data. And the second thing is that it's also a binary format to serialize the data. And those two things are closely related, but they're not quite the same. Ultimately, they're a tool to make programmers more efficient.

**Jon Calhoun:** So I guess if we're looking at them as a tool to make programmers more efficient, was that the only reason they were created, was just that efficiency?

**Akshay Shah:** I think no, but I think certainly today that's the most compelling thing about them. So if you imagine, we're mostly Go programmers and Go has really found a home in building network services, and building microservices... So I imagine that a lot of Go programmers have written a REST API, or at least written some structs to serialize data to JSON. And so the way you do that in Go is you're writing your REST API, and typically you'll write a Go struct for each request and response shape. And you'll add some struct tags to tell the standard lib how to transform your struct into this text wire format. And that's fine, it's actually really nice, it's pretty ergonomic... The problem is that if you have an API, you probably have clients, and they might be in TypeScript, in a web browser, they might be in Kotlin, or Swift, on mobile clients... Maybe there's some Python client on your backend... And all those clients end up rewriting that exact same Go struct for the request and the response, in their language of choice. And so you end up with the exact same data, and the same schema for that data, rewritten by hand, in Go, in TypeScript, in Kotlin, and Python, and C++... All over the place. That's just - it's a bunch of toil for not much purpose, it's really error-prone, and it's hard to reason about it. You have to manually look at this special part of your code that's exposed to colors, and with every change, you have to set and you have to think, "Okay, how is this going to affect my clients? Can I rename this field? Can I change it from being required to being optional? Can I change it from being optional to being required?"

Google was running into this in the early 2000s. At the time, XML was really in vogue, and they were looking for something that was simpler, that was more productive for programmers, and as an important concern for Google, but maybe not so much for the rest of us, something that was more efficient for computers... And so they invented protocol buffers.

**Jon Calhoun:** \[06:12\] So I guess I'm thinking of this, if it's something Google invented for Google scale, is this one of those technologies that is only a good fit if you're a Google? Or what types of applications does this fit well for?

**Akshay Shah:** Yeah, it's certainly compelling if you're at Google scale; I mean, clearly, they're still protobuf from top to bottom... And most other large -- if you look at a lot of these large tech companies, they have some equivalent protocol buffers. Sometimes it's actually a protobuf, sometimes it's a very similar system, that took a bunch of inspiration from protobuf.

But for any Gopher, I think you want to avoid redoing the same error-prone work over and over again. That's why we're not calling the pthread APIs directly, we're not freeing memory manually... These are just tedious, error-prone tasks.

So if you're building an API and you have clients, writing a protobuf schema is basically the same amount of work as writing a Go struct. It looks pretty similar; it's a name, a curly brace, some field names and some types. There's some numbers for the fields, but other than that, it's basically the same thing. You run a code generator, and you get more or less the same Go structs that you would have written by hand, but you can add a little bit to your code gen invocation and you can also get Ruby classes, or TypeScript types, or Python classes, Kotlin stuff. And you can get the code -- the code that you generate, it works with the protobuf binary format, but it works equally well with JSON. So in a lot of circumstances, I certainly use protocol buffers just as a schema language for my JSON.

**Johnny Boursiquot:** What are you trading off? This sounds all good, but there's always a trade-off.

**Akshay Shah:** Of course there is, yeah. So I think in Go, you're not trading off a ton, because you would have been handwriting these structs one way or another. I don't see much Go code that's really dealing with JSON as like map string any, as part of writing an API. In other languages, you do trade off the ability to have really loosely-typed APIs. So in Python, you could certainly unmarshal JSON into a dictionary, without any type ends, and just pass that around. And that's totally fine. It takes basically no code. And protobuf encourages you to do that differently. You need a schema.

In Go, sometimes the protobuf representation of a type in JSON is not what you might expect. So if you serialize an int64 to JSON with protocol buffers, what you get as a string. And that's because many JSON runtimes treat numbers as floats, and so there isn't 64 bits of space available, so the only safe way to send them around as a string. This is usually not -- it's not a major concern, because the other end of the transaction is also using protocol buffers. And so it's parsing the string automatically and turning it into an int on the other end.

You have to deal with the protobuf toolchain, which often has some rough edges... And we can talk about all that stuff in detail if you want... But especially in Go, I don't think the trade-offs are that -- you're getting a lot for free, and you're only giving up a little bit.

**Jon Calhoun:** When you mentioned the trade-off of not being able to have the more flexible API, I guess, I also view that as a win. It's kind of a trade-off, but also a win, because I've also worked with APIs where trying to write a library in Go that works with it is very challenging, because you can tell the API was written in Python, where a certain field can be one of six types... And it's really annoying to parse, because it's like, I've got to figure out which one it is before I even try to parse it.

**Akshay Shah:** \[10:07\] That's right. Yeah. One of my co-workers often describes protobuf as static typing for data. And it has basically the same trade-offs as static typing for programming languages. You have to declare your types upfront, changing them can be a little bit harder - you have to think about forward and backward compatibility - but you get APIs that are self-documenting in a nice way. Often, it's easier for your IDE to do work for you, it's easier for tools to catch errors... So I think this is a familiar debate, and in general, in 2022, it seems like big parts of the industry are moving back towards static typing. Right? TypeScript is super-popular, Python is growing Type Hints. Ruby is growing gradual typing via a bunch of Stripe stuff... And Rust is taking type systems into areas that many other languages have avoided.

**Jon Calhoun:** This kind of reminds me of -- there's a couple of tools around JSON APIs where you basically define a schema and it helps generate libraries for various languages... I think - was Swagger one of those?

**Akshay Shah:** Swagger is a little bit more extensive. Swagger -- at least as we've talked about them, right? Protocol buffers are just about structs. They're about data shapes.

**Jon Calhoun:** Okay.

**Akshay Shah:** Swagger covers that, but it also covers the shape of your REST API. Maybe this whole show is gonna be an unpopular opinion, but my view of like -- if you look at a Swagger schema, or you look at a JSON schema, you look at it and you're like "Oh my God, am I really supposed to be writing this by hand?" It's so verbose. It's just scads of nested JSON.

**Jon Calhoun:** I haven't used Swagger a lot, so I can't speak to that... But I can definitely say, I've seen a lot of companies that were writing APIs that needed -- basically, it's a public API, so they wanted to provide libraries for various languages... And you would think Swagger was a perfect fit, but because for one reason or another they opted not to use Swagger, and I think a lot of times it probably was, like you were describing, it just wasn't very appealing to learn and use Swagger when they looked at it. I'm wondering how you compare protocol buffers to something Swagger, since I think a lot of people have probably heard of Swagger, but I'm not positive...

**Akshay Shah:** I'm not sure. Swagger, the new name is OpenAPI; there have been a couple of version, so they're on OpenAPI v3 now... And it includes most of JSON schema, which is the data struct part of the language. We can talk about the network API parts of it later... I think it's a better fit for comparing to gRPC. But for the data parts of it, it has a really impoverished type system. So the only native types in JSON API are the types that JavaScript supports. So you have array, string, number object. That's it. That means that everything you build on top of that ends up not feeling that great. There's really no way to say "This is a date." The best you can do is say "This is my handwritten object type that has these numbers affiliated with it", or "This is a string, and here's a regex that validates that it's ISO 8601." And it's just really, really verbose. If you're talking about saying like "I could write a Go struct with some struct tags, or I could write a JSON schema", writing the JSON schema is a ton more work. So there's this little cottage industry -- I mean, I guess this very large industry of GUIs to write these schemas, because they're so laborious.

**Johnny Boursiquot:** See, now I have to buy another tool, and learn how to use that tool, and maybe it has its own quirks... So yeah, for vendors it's great. They're like "Yeah, we'll sell you something to do all this for you." But yeah, now I have another dependency.

**Akshay Shah:** \[14:01\] Exactly. And if you look at the specification, there are parts of this language that 0 I understand why in a really loosely federated world of the web, some of these things make sense. But if you're a company or a person publishing a schema, they're a little off-putting to me as a Go programmer. They're like "Oh, I can include a reference to another schema, on a different server, and just transclude it into my schema." There's a whole separate part of the spec about meta schemas. So there's some form of metaprogramming in this schema language. There's a special call-out when you're implementing codegen for these things, especially at runtime, that schemas can mutually reference each other. So you have to take special care to break cycles and avoid infinite recursion. These are just not the kind of problems that I want to think about when I'm defining a struct. I want this whole class of problems to be impossible. Generally, I want this world to be as simple and predictable as it can be.

Protobuf is much more on that side of the world... Part of why I think that's so appealing in Go is that protocol buffers in Go share a lot of DNA from Google. A protobuf message looks a lot a Go struct. And so if you are a Go developer and you're thinking, "Which of these should I do?", the amount of effort it takes to write a protobuf schema is about what you would spend on a Go struct anyways. You get a rich type system; there's sized ints, fixed size, variable size, bytes, strings, objects that are well-known types that get shared across the whole ecosystem, for like durations, dates... There are a bunch of escape hatches if you need them for loosely-typed data.

So John, for the situation you are describing, you can say, "This field is one of the following types." And that generates code that's a little bit awkward, kind of unavoidably... But you can express this. You can also express the idea like "This field is just a thing. And I have no idea what it is, we'll find out at runtime." Those things are just, I think, appropriately irritating to use... It kind of gives you a hint that you're going down the wrong road.

**Jon Calhoun:** Yeah. So if we're looking at protocol buffers, I think it's commonly compared with things JSON, or maybe GraphQL... Would you compare it to GraphQL?

**Akshay Shah:** Mm-hm.

**Jon Calhoun:** Okay. So if we're looking at those things and we're trying to expose something to, let's say, the public; we wanted to build an API that has public consumers not just internally, are protocol buffers a good fit for that type of situation?

**Akshay Shah:** I think they are, with one caveat. I think protobuf is simple, especially if you use protobuf schemas to accept and send JSON. This is really easy for other people to use, because they don't really have to know about the protobuf part at all. If they would to continue handwriting classes to generate JSON, they're more than welcome to do so. But they have this kind of efficient binary protocol available to them. Usually, when you talk about exposing protobuf APIs, you're talking about gRPC. Right? Because protobuf the language is really just about data. It doesn't have anything like an interface, or a function, say like "My API does something" without gRPC.

The one caveat is that historically, the tools to work with protocol buffers are kind of rough. They're open sourced kind of directly from the way Google uses them... And within Google, they're part of this really sophisticated, unified build system, and monorepo, and all this other stuff. So the protobuf tools are this really low-level component in a very complicated stack.

\[17:49\] Outside of Google - well, we just have the protobuf piece, but not the rest of the stack. And so if you're building an external-facing API, and you're working in Go, and you've got all this protobuf stuff figured out, but your client is like a Node client, and you go to them and say, "Well, step one is you need to write a makefile, and you need to call protoc in the following ways", they look at you like you're crazy. Like, "What? A makefile? What, are we living in 1986? What are you talking about?"

So I think there's a lot of space to build tools that make that easier and more approachable. There's no reason why, given a protobuf schema, your instructions to the client can't be "Hey, don't worry about any of the protobuf stuff. From your perspective, I handwrote a client for you, and it's an npm package. Just download that." And on your end, you're like "Yeah, I autogenerated the package, and I uploaded, and I didn't handwrite anything." But to your colors, it should look like they're just getting a package.

**Johnny Boursiquot:** So we've talked about the efficiency of not having to hand-wrangle all these things, but we haven't talked really about -- we've mentioned it, but never really talked about sort of the efficiency of transport, right? Basically, when you have that binary format; can you sort of clarify what the major gains of the binary format are over traditional means?

**Akshay Shah:** Yeah. Typically, binary formats have a bunch of optimizations available to them, that text-based formats could technically use, but rarely do. So if you imagine how a computer is parsing a JSON object, usually you're kind of like advancing one rune at a time, and then maintaining some lookback, and you're looking for a bunch of object delimiters and keeping state for how deeply invested in this object you are... And it's just kind of this complicated stateful process. Binary protocols typically work differently. It'll say, "Hey, the next field coming up is a string, and it's 70 bytes long." And then the parser just grabs the next 70 bytes and interprets them as a string in memory, and is done. There's no looking for delimiters, there's no escaping, there's none of this stuff that makes JSON complicated from a parser level.

And typically, protobuf goes out of its way to try and make that binary small. So it does a bunch of tricks to minimize the size of things. Ultimately, these are all really clever tricks, but JSON is also really widely used. You can make JSON incredibly fast. There's this CS professor in Canada named Daniel Amir, who did a bunch of research in using SIMD instructions to parse JSON... And he has a commodity computer parsing gigabytes of JSON per second. I mean, it's absurd. And compression is really effective; even protobuf, the binary format benefits from being compressed. It's like, once you're gzipping the JSON and ungzipping the binary, the difference gets a lot smaller.

So I think once you're using a protobuf schema, you have this binary format at your fingertips, and so you might as well use it. I mean, even if the practical perf improvement for your particular use case is 20%... 20% is kind of a lot. You might as well just grab it and get that benefit if it's sitting right in front of you. But I don't know that that benefit is really so significant when all is said and done... Like, that it's really the motivating use case for protocol buffers. Does that make sense, Johnny, or was that just a bunch of noise?

**Johnny Boursiquot:** No, no, that makes sense. So while you were talking, it occurred to me, or I just recalled that the Go standard library has an encoding mechanism which supports binary transmitting...

**Akshay Shah:** Yes. Marshal Binary?

**Johnny Boursiquot:** Yes, there is that, but I'm also thinking of the Gob package.

**Akshay Shah:** Yes.

**Johnny Boursiquot:** Let's talk about the Gob package. Why is it that we're not all using Gob? Is it that we're not all Go developers? \[laughs\]

**Akshay Shah:** \[21:57\] I mean, that's partly it, right? But the Gob package - my recollection, at least, is that the Gob package makes some very important -- there's some very important caveats in the package docs for Gob. One of them is that - this is just my recollection; I can check real quick, but... From what I remember, the binary Gob representation is not guaranteed to be stable across Go versions. So forget interop with JavaScript, if you're on Go 1.19, interop with 1.17 might be busted, too. I think it is also not specifically optimized for speed, or size. It's just not that widely used, right? But just by the nature of the business buff does, we spend a lot of time with protocol buffers, and talking to various people deep in protobuf at Google... At least what I've been told is that there's so much protobuf from top to bottom in Google's internal stack that relatively modest perf improvements to protobuf can change Google's overall CPU use by 3% or 4%.

Protobuf is language-agnostic, it has a specification that's public, and it has just like a tremendous number of miles put on it. And I don't think you get any of that from Gob.

**Johnny Boursiquot:** Yeah, fair enough.

**Akshay Shah:** Gob is super-convenient though...

**Johnny Boursiquot:** It is.

**Akshay Shah:** You can just marshal a thing, and that's really nice... I would love it if you could do that with protocol buffers, but you just can't.

**Johnny Boursiquot:** You need Go on either side of the fence, obviously... That is one of the drawbacks, right? You don't have that cross-language support unless everybody starts implementing a Gob encoder and decoder and whatnot.

**Akshay Shah:** And parsing a Gob... The schema is a struct, right? So parsing that requires parsing Gob, right? Which is kind of a tall order. It's not totally obvious, to me at least... I think it would be challenging to write a tool, for example, that looks at a dif between two Go files, and says, "Hey, stop right there. You broke your clients. If you deploy this change, all your existing clients are going to be broken." I'm sure it's doable, but it's not --

**Johnny Boursiquot:** Trivial.

**Akshay Shah:** ...it's not quite as straightforward as it is with a simpler, more purpose-built thing like protobuf.

**Jon Calhoun:** This conversation also reminded me of -- at one point in the past we talked about the JSON parser in the standard library, and it's not as fast to some third-party JSON parsers because, if I recall correctly, the JSON parser has to read the entire JSON object to verify that it's valid JSON first, and then it actually goes back to parsing it a second time...

**Akshay Shah:** I believe that's right.

**Jon Calhoun:** I'd have to go back and check though... But as a result, it means that it's not like the most optimal parser, whereas like when you mentioned the binary format, it's just assuming this is valid data, "We're gonna go ahead and use it." But it's worth noting that for most people that optimization isn't so important that they've replaced the standard library with a custom JSON parser of some sort.

**Akshay Shah:** That's right. And you can get -- I mean, to be fair, as the author of a bizzaro custom JSON encoder... \[laughter\] It's not that hard to encode JSON much, much faster. Zap, the logging packager, part of why it's faster is that it has its own JSON encoder. And that's pretty easy, because JSON is a really simple string format. So even if you want to make JSON really fast, you can do that by just biting off half the problem. If you make encoding super-fast, and decoding is still not that fast - that's 50% of the win for 10% of the effort.

**Break:** \[25:52\]

**Jon Calhoun:** So we've been talking about protocol buffers, which are how we're going to format the data. Generally, when this conversation comes up, you don't hear about protocol buffers on their own, you hear about protocol buffers and gRPC. So what is the gRPC part of this?

**Akshay Shah:** So -- I mean, let's go back to our "We're building a REST API" example. So we're writing structs for our requests and responses. Other than implementing our business logic, what's the other work we're doing? Basically, what we're doing is we're designing a routing scheme. So you're saying, "Okay, I have some function that's going to get a list of users." And maybe the users are scoped to one organization, and I can pass some filters to the query. How do I represent that in a REST API? I sit down and I say, okay, this is a read, so it's probably gonna be a get, and then the organization ID, with most REST APIs that I've seen - that's going to go in the URL. So it's going to be get/org/1/users. And then I'm going to take my filter parameters, and I'm going to put them in as query params. And now I'm in hand-serializing territory, so I need to decide how to represent every type that I accept as a filter as a string, in query parameters. If any of those parameters are arrays, we just start praying. No one knows how to represent an array in a query parameter. Do we use commas? Do I just pass the parameter 18 times? Do I just give up and serialize it to JSON, and then URL-escape it and shove that in the query params? No one knows.

These are all really low-rent decisions. In practice, I think, basically nobody cares. I just wanted to get my data, and most of my clients, if they're looking at any of this, they're upset. Like, "I just wanted you to hand me code to call this API." And these plumbing details are not all that interesting. So what protobuf does is it -- just it has an equivalent of Go structs, it has an equivalent of an interface. You give it a name, you write a curly brace, and then you write a function name with some input parameters and output parameters.

The inputs and outputs are all protobuf messages, and so in this world, I would write an interface and I would call it User Service, or User API. And it would have a function called get users. And that function would take a protobuf message with nice, strongly-typed arguments; I could have the organization ID in there, I could have any number of array types, or maps, or whatever I like. And all these routing and serialization decisions get made for me, in a predictable way, and I get nice, generated code, where all I need to do as the server owner is implement that Go interface.

So I need to write a struct with a get users method. And for the client, because all of this is really regular and predictable, it is easy to generate good code. What's the alternative? The alternative is something like Swagger. And Swagger, or OpenAPI, they are designed to be able to describe any REST API. And so you don't actually avoid any of these decisions. You're just -- you're in the same tedium of plumbing decisions, but instead of writing them using the net HTTP APIs, you're writing them in this big, verbose JSON document. And because the schema supports any way of routing, it's really hard to generate good code... Because there's this gigantic universe of options, and that's really difficult to cope with.

As a user, I think, especially a Go programmer, protobuf feels really familiar. I write some structs, I write some interfaces, I run a code generator, and then as a server, I'm just implementing an interface that looks just the schema I wrote. Life is pretty simple. And then you use an RPC runtime, like gRPC, you hand it your interface, and it starts serving HTTP traffic for you.

**Johnny Boursiquot:** Are there alternative runtimes other than gRPC?

**Akshay Shah:** \[32:03\] Yes. Actually, from the episode on bloat, from a couple of months ago, Egon's company, Storj, it sounds like from their public blog post that they were using gRPC, and they were dissatisfied with a bunch of things about it... And so they wrote an alternate RPC runtime. It's called dRPC, and it basically operates at a lower level in the networking stack. But to a programmer, it's very similar. You write some protobuf definitions, you generate some code, you implement an interface, and then you hand that interface over to a networking package to serve traffic. It's incompatible with gRPC... ish, it's a little complicated, but it's operating directly at a TCP level. So it's not serving you HTTP traffic. But again, it's a program that looks pretty similar. Twitch has a similar thing called Twirp. Thrift is very similar to protocol buffers, and it has its own wire format. There's Dubbo, from I think Alibaba, just similar in principle.

**Johnny Boursiquot:** Okay.

**Jon Calhoun:** It's interesting to me that this is a problem that has -- there have been enough solutions to this problem that I think it makes it pretty clear that developers are like "Hey, this is a struggle." Even an example I can think of is - Mat was supposed to join us, but he couldn't... But Mat, whenever he was building Pace, created a library called Oto, that you would basically create Go -- I think it was Go structs and interfaces, and it would generate a JavaScript library that would connect to, and then it would generate like a Go server, and then you would sort of just plug in the rest of the code.

**Akshay Shah:** Yep.

**Jon Calhoun:** It was meant to be relatively simplistic, I think, and just support their needs, but it's interesting to me that even in those cases, people will go out of their way to build something on their own, when other solutions like gRPC do exist. So I guess my question to this is, why do you think people invent a new, simpler version, when something gRPC exists? Is it the complexity of gRPC? Is it something else?

**Akshay Shah:** I don't know. I mean, have you guys worked with gRPC?

**Jon Calhoun:** I have not that much.

**Akshay Shah:** Johnny's smiling. I think the answer is probably yes.

**Johnny Boursiquot:** I have. \[laughs\]

**Akshay Shah:** So Johnny, you tell me - are you whipping out gRPC Go for your personal projects?

**Johnny Boursiquot:** I've kind of been to the place where -- I had to make that decision where I was like... Basically, the trade-off I was making in my head is "Look, I can go and try to wrangle something myself, or I can take something that is off the shelf and just accept whatever trade-offs that presents, but just get my job done." So I'm not gonna be providing myself a new runtime, or a new protocol, or a new whatever it is, because that's not the job, right? It's like saying, "Oh, I need to write more. I need to publish blog posts more. Let me go write a blog engine first." Right?

**Akshay Shah:** Yeah. I guess start by writing a markdown parser, Johnny. It's the only way to start.

**Johnny Boursiquot:** \[laughs\] I mean... If I just want to play around, and for educational purposes I just want to reverse-engineer something or build my own, just so I can educate myself and know how something works - yeah, that's fine. But if I'm trying to ship something? Heck no. I'm gonna go with what most people are using, I'm gonna pick something off the shelf, or go gRPC, whatever it is, and I know that's gonna work for my use cases, and call it a day. So it depends on what it is I'm trying to do.

**Akshay Shah:** I think that's right. Yeah. I think a lot of people find themselves in that situation, right? There's only so many problems in the world that you're interested enough in to really peek under the covers and start digging around or writing your own stuff. I've never met Mat, or talked to him, but just based on the fact that he gave a GopherCon talk about how he built HTTP APIs - he has opinions here. And I assume wrote Oto to make those opinions easier to apply across a big codebase at Pace.

**Jon Calhoun:** I would imagine another aspect of this is that because it's a startup, when you release open source libraries and things that, it's kind of marketing... I think sometimes people ignore that aspect of like there needs to be marketing with a new business of any sort... So tech blog posts are a great way to do that, and sometimes that means you actually have to do something to write about...

**Johnny Boursiquot:** You're accusing Mat of being a marketer... \[laughs\] And not a developer...

**Akshay Shah:** \[36:06\] Let's not wave that brush around too wildly, okay...?

**Jon Calhoun:** I mean, whether or not Mat was trying to, I can say for certain that he knows how to market to a degree, because his blog posts, whenever he starts a new company and things that, are all great marketing tools to help build a business. You have to do those things. If you just build something in isolation, and nobody knows about it, then it's really hard to find those users.

So I'm not saying that was his whole reasoning for it, but I'm saying that definitely could have played a role in it, is "Hey, this is something I'm interested in, it's pretty cool, and we can build it pretty quickly and use it as a marketing tool." So I think that's another factor to consider.

**Akshay Shah:** I think there's -- you know, gRPC grew out of this internal system at Google that's called Stubby. And Google is protobuf all the way down. And internally, it's all run on this Stubby thing. And Stubby is not on top of HTTP, Stubby is like a competitor to HTTP. So it's protobuf-flavored HTTP/2, kind of. And it worked super-well. Word on the street is that the tight loops in Stubby are handwritten x86, written by Turing award-winning programmers, and stuff, right? Stubby is amazing. It's great. Perfect. Eventually, Google wants to write an API that somebody else is going to call, or they want to hand you a client to bid on ads. And they just can't hand you this Stubby thing, because you look at it and you're like "What is this? How do I write a load balancer for this? What even is any of this?" And so they're going like "Oh, okay..." The rest of the world kind of wants to HTTP. We have this robust infrastructure of load balancers, and proxies, and caching, and all this stuff... And I have a lot of client libraries, and a lot of servers, and so I want HTTP. But they want something that's semantically kind of easy for them to bridge their inside world and their outside world. So they need protobuf-flavored HTTP.

There were a bunch of ex-Googlers who had invented these things at other companies, but Google wanted the one that they thought was the right thing, and so they started a team and they built gRPC. gRPC is basically used at the boundary of GCP, but it's not running the internals of Google. It's this sort of bridging technology, and then it's for open source use. But it has this aura of mystique about it, where you're like "Oh, gRPC." It's, it's fancy, it's complicated, it's this big, big codebase... And so there's only -- in Go there's one gRPC implementation, it's gRPC Go. And in Java, there's basically one implementation, written by Google.

The protocol is pretty simple. You could describe it in English in a couple of paragraphs. It's basically, given a protobuf schema, here's how you figure out the path, here's a couple of headers you have to set, and then here's how you take the bytes of protobuf and shove them into the body. That's it. It's not conceptually so different from REST. It's not hard to write a gRPC handler or client from scratch.

I gave a GopherCon lightning talk just a couple months ago, we wrote an HTTP handler from scratch using the standard lib, that speaks gRPC in seven minutes. It's one slide of code. And so just like there are a million REST packages, and a million flag-parsing libraries, and a million different JSON libraries, there's room in the world for more than one gRPC implementation, that makes different trade-offs.

I think just like you look around and like you're building an app, a CLI, and at some point you looked around and you said "Ah, am I a purist? Am I a standard lib flags kind of person? Am I a Cobra person? Or am I way out in left field and I'm using--", what's that company? "...charm bracelet, and glow, and likes fancy, interactive CLI stuff?" I personally am more of a standard lib flags kind of person.

**Johnny Boursiquot:** It does the job, right?

**Akshay Shah:** \[40:15\] It does the job, and I it's small, and I kind of learned it once, and then I just decided that I didn't really care that much about this problem anymore. The same thing is true of Go. There's a Go specification, there's the standard Go compiler toolchain, but there's also Gccgo, and there's TinyGo, and they make different trade-offs that are useful to people. There's HTTP, which has a bunch of RFCs to define the spec. It's a big, complicated spec. And there are a bunch of implementations, right? There's NGINX, there's Apache, there's net HTTP in Go... But there's also Fast HTTP, which makes different trade-offs, and there's implementations in other languages too, right?

We didn't write NGINX and then just say "I don't know, everyone else just FFI into nghttp. Good luck." There's space for a gRPC implementation that maybe meets people who are writing rest APIs today where they are, instead of making trade-offs that are appropriate for a Google maybe, but not so appropriate for Pace.

**Jon Calhoun:** So I suppose this is a good time to say that is what you guys are working on, correct? At Buf.

**Akshay Shah:** Buf's working on a lot of things. I think I've alluded before, it's the idea that the tools for protocol buffers in open source are kind of rough. They're pretty low-level, and they're a little bit -- they have a big barrier to entry. So most of all, we're working on our protobuf tools. So Buf writes its own protobuf compiler from scratch. We think that's a lot easier to use than Protoc.

We also work on a schema registry. One of the important things about protocol buffers is that if you're using the binary format, you can't do anything with the data without the schema. So JSON - you can just shove it around, you can shove it into a Kafka topic, read it out the other end, and you're good to go. You don't really need any other information. For protobuf, when you slurp out the binary from Kafka, you need a schema, otherwise you don't know what any of it means. It's not self-describing. So we've built a schema registry that lets you push and pull schemas, it also handles codegen... So if I write an API, and I define it in protocol buffers, and I push my schema to the Buf schema registry, any client can just npm-install a package from the registry automatically, without any effort from the server or the client. Or they can pip-install, or go get a package with a ready to go client.

That's the business, is selling the schema registry. Our view is that, like you said, John, gRPC and protobuf are intimately connected. And for people to be really excited about using protobuf for everything, they kind of also have to be excited about using gRPC for a lot of things. gRPC does a lot of things super-duper well. If you are very concerned in your REST API about having excellent HTTP/2 flow control between Australia and Brazil, gRPC has your back. It's really good at stuff that. It's not so good at just being interoperable with the rest of Go. It has its own HTTP server, its own HTTP stack, it's not compatible with net HTTP... It's really big. You just can't serve gRPC traffic alongside your website, or your REST API, or some convenient HTTP API, like download a file, just because they wrote their own HTTP transport.

So at Buf we work on this thing called Connect. It's a drop-in gRPC replacement. It's wire-compatible, works with every gRPC client, and it's all net HTTP. It generates HTTP dot handlers, clients use HTTP dot client, and it works with any mux, or any middleware package that works with net HTTP. So I think, to a Go programmer, it feels a lot more like, rather than a whole different world, where all of a sudden it doesn't even really feel HTTP anymore, it feels more like someone generated the boring REST code for you, but if slots into the same ecosystem you're familiar with. If you know net HTTP, if you know middleware that you like, like some gzipping handler, or something else, if you have a router that you really like, like you're into Chai, or...

**Johnny Boursiquot:** \[44:40\] Gin...

**Akshay Shah:** ...Julien Schmidt's HttpRouter, Gin or whatever.

**Johnny Boursiquot:** gorilla/mux right?

**Akshay Shah:** Yeah, any of those things, right? This just slots right in there. So your gRPC handlers plug in right alongside all your other ones. I think there's space for that, and I think it's nice. It's a tiny bit slower, just because it supports much more of HTTP than the gRPC stuff does. I don't think most of us look at net HTTP and we're like "Oh, that code's for chumps. So slow! Unusable in production!"

**Jon Calhoun:** Have you seen some of the new Go releases?

**Akshay Shah:** \[laughs\]

**Jon Calhoun:** When people set up a Hello World server and they're like "Oh, it's 40% slower."

**Akshay Shah:** It's just -- how could they...? I mean, it's the same protobuf runtime and net HTTP, right? So generally speaking, perf-wise, you're in the ballpark that you're familiar with, and that's proven itself to be good for this huge variety of use cases.

We do the same thing for TypeScript, and we're working on a similar runtime for mobile phones. I think over there, the standard gRPC protobuf trade-offs are a little more out of the norm, and so there's more space to do something that feels really good to web developers or mobile developers.

**Johnny Boursiquot:** So you mentioned all sort of statically-typed languages for this. I imagine that's deliberate; you're avoiding some of the more dynamic stuff.

**Akshay Shah:** I think even in dynamically typed languages, right? Like, Python is a great example. The Python ecosystem, if you look at some of the most interesting stuff in Fast API, it's generating typeheads that represent your APIs nicely. And so even a lot of languages that are really dynamically-typed, it's convenient for you as a programmer, where you can, to have good type information at the boundaries of different modules in code. And inside, if you want your business logic to be all object or dictionary, that's fine. That's your choice.

**Johnny Boursiquot:** That's rough. That's a rough choice, but alright, keep going... \[laughs\]

**Akshay Shah:** I'm actually less opposed to it than a lot of Gophers... There's a time and a place for everything, right?

**Johnny Boursiquot:** Right, right.

**Akshay Shah:** If I'm in a Jupyter Notebook, and I'm fetching some data from some service just to run a bunch of NumPy on it, whatever is in between this API call and my NumPy array is really - like, I don't care that much. I just want it to happen. I don't really want to be in Gonum, trying to dimension an array, and decide whether I'm looking for int64s or int32s. I want numbers, and that's about all I know.

**Jon Calhoun:** So when we're talking about all of this, I will say that part of the reason I don't have a lot of experience with gRPC is that historically, you see things like -- it's you hear about Stubby, or something at Google, or a custom HTTP implementation for the gRPC stuff for Go... And it always struck me as something that was used more for internal communications inside of your application, and not really a user, like, something you made user-visible. So that was the mindset I always had. I guess what it sounds like is that was a very invalid belief or conception... Or would you say that's generally still somewhat true?

**Akshay Shah:** I don't know. Johnny, what do you think? I have my opinions, but...

**Johnny Boursiquot:** \[47:53\] I think people will go with what they know best to get a job done, and will only sort of step outside -- well, let's just say there are two classes of developers out there. There are those who go with what they know, and try to get the job done as quickly as possible, and there are those who look for opportunities to bring in new things, even when it's not necessarily a requirement to solve the problem itself. I've been on either side over the years. I'm not sure -- Jon sounds more like he's the "I'm gonna go with what I know, because I have a job to do, and I need to get paid, and move on to the next thing."

**Jon Calhoun:** Yeah, but when you're self-employed, I feel like that...

**Johnny Boursiquot:** \[laughs\]

**Jon Calhoun:** ...self-employed with kids, you're like "I don't have time to learn new stuff right now."

**Johnny Boursiquot:** Right. Exactly, exactly. And then you have those who work at larger companies, and they don't even have to worry about getting paid to feed their family, and they can take more liberties, I would say.

**Akshay Shah:** I think that's right.

**Jon Calhoun:** So if you were building a publicly -- I guess what I'm wondering is if you were building an API that you wanted to expose to the public, for whatever reason, is gRPC something you would consider using that, if you knew gRPC really well, and were good with it? Or would you say that you'd prefer just to build a JSON API in a more - I don't want to say traditional way, but I guess what people are used to seeing?

**Akshay Shah:** I would use Connect, and I would build an API using protobuf schemas for my own development; I would tell most of my clients, "Hey, if you're trying to call my API from JavaScript - like, forget about all this other stuff; it's HTTP and JSON under the hood. Just download this client library. Why do you care what's going on inside? I'm going to jump you right to the thing you actually want, which is code." Same for Python, same for Go. And I'll say "If you want to curl my API, or you have some ad-hoc thing, or you're writing code in, I don't know, Zig, and I don't have a library off-the-shelf for you, it's really simple... Like, here's what the JSON looks like. And you just post it to this API. This path, post some JSON, you'll get some JSON back... That's it."

**Jon Calhoun:** It sounds like you would use gRPC, but you would just make sure you're using that JSON format so that if they need to do something else, they can pretty easily.

**Johnny Boursiquot:** There's some subtlety there. Connect supports the whole gRPC protocol. It also supports its own protocol, that is very similar to gRPC. Your code stays the same, you flop a config flag; you can speak your own -- this other protocol, that looks much more like REST, where you can just post some JSON. And this is actually not feasible with off-the-shelf gRPC stuff. By default, gRPC Go or gRPC Java, they also don't -- they can't communicate with a web browser. Just generally a big limitation for an external API. Kind of opens that up. Twitch did the same thing; one of their priorities was being able to talk to any HTTP, client anywhere. So I would use Connect, I would use protocol buffers, and I would tell clients kind of in back-endy languages to use Connect-generated code or gRPC-generated code. And I would say if you want to curl this, or call it from a browser or something, you might have code gen available, or you might just be posting some JSON, just you would post JSON to a REST API.

**Jon Calhoun:** Okay. I think that helps, because - I know historically, the fact that you said that you couldn't communicate with an HTTP browser, the minute I hear that, I'm like "Oh, this isn't gonna work." That's kind of a showstopper... Especially if you're building a web application, and you're like "Well, that's my one use case, so..."

**Akshay Shah:** I mean, even if you're not building a web application, right? You're building an API... Browsers are really convenient. The Network tab is really nice, it's a convenient debugging environment, it's got this real programming language \[unintelligible 00:51:41.24\] for you to plan... It's the most widely deployed HTTP client in the world... Why wouldn't your HTTP protocol support it? It's a historical misstep in the gRPC protocol.

\[51:55\] I think gRPC uses this little-known corner of HTTP called trailers. They're just headers that come after the body. They're useful for a bunch of reasons, like having some way to send metadata after the body is really helpful. They chose to send them as HTTP trailers. At the time they were making these decisions, it looked browsers were gonna support trailers, so they kind of decided that they were going to probably do it, but hadn't actually done it yet. And then as soon as any browser vendor got involved, they all said, "Absolutely not, we're never doing this", and a bunch of other HTTP software never supported trailers. They've been around since the late '90s, and basically nothing ever supported them. So if you have a Rails app, you're not serving up trailers any day soon...

So that's kind of really made gRPC hard to adopt for external APIs. But that's not an intrinsic problem with protocol buffers, it just means you need a little translation layer, or you need a different library. Those libraries are pretty small; Connect does all of gRPC and this other thing in less than 10,000 lines of Go. It's like 20x smaller than gRPC Go. This is all totally doable if you're just optimizing for something different. So in short - yeah, I would say that you should use protocol buffers for your external APIs.

**Johnny Boursiquot:** Yeah, Jon.

**Jon Calhoun:** It's definitely something I'm open to exploring... It's kind of the same as GraphQL - it's always struck me as interesting technology, but when I don't have a direct need for it, it's really hard to go out of my way and use it extensively to build some -- because people are like "Oh, well, your API is changing." I'm like "That's not happening to me like it's happening to Facebook." Our needs are very different.

**Akshay Shah:** When you write your external APIs, when you're calling them from your web apps, are you typically handwriting code in the browser to call those APIs? So you're writing like React hooks, or whatever?

**Jon Calhoun:** If I can generate a library or do something that, I always opt to do that, because it's just simpler. But it really depends. One of the restraints I get at times is that I also make courses that help people learn stuff... So when I'm looking at things, that can also influence what technologies I opt to use. Because when you rely on third parties, and all of a sudden they break or they change drastically, then all of a sudden that material is useless. So sometimes you're like "Well, if I can stick with just manually using fetch, and doing this, then maybe that's going to stand the test of time a lot better." And if it explains sort of how something standard works to somebody, that's also helpful. So it really just depends on the context for that.

**Akshay Shah:** That makes sense.

**Jon Calhoun:** But most of the time, if I can generate a library, that's what I want to do. I don't care about the underlying technology at all... Whether it's XML or something else, I don't really care. I just want -- like, give me a library that's easy to use.

**Johnny Boursiquot:** XML, Jon? Really?

**Jon Calhoun:** Johnny, I've used way more XML in my life than I really care to. \[laughter\]

**Akshay Shah:** That's right. Oh, man. At one job... We're doing a bunch of work, enterprise integration work with ThinServe companies, and I was praying for XML. There were all these weirdo, handrolled binary formats... It was like "Back in the day, we thought these ints were going to be 32 bits... So if this flag is set, jump to the end of the file and look for where we added another 32 bits for the top bits, because the numbers got too big", or something.

**Johnny Boursiquot:** Wow.

**Akshay Shah:** It was all bananas. So I can see why everyone was really excited about XML.

**Jon Calhoun:** I was never excited about XML. It was just one of those things that - I started a company where we interacted with a lot of shipping APIs, and a lot of them were using XML, so I just got very familiar with it... And at the end of the day, I just came to the conclusion that I don't actually care what your API uses, as long as there's a good way, a good library or something to communicate with it, and as long as it gets simplified in that sense. And I think most developers have that same viewpoint of "If you give me a good library, I never look to see what you're even using behind the scenes, because it doesn't matter to me." But if there's not a library, then clearly I have to look and see what you're using, and then if it's XML, I'm going to be like "What is your problem?"

**Johnny Boursiquot:** \[laughs\] No, that's when you dust off the old XSLT book.

**Akshay Shah:** That's right. \[laughs\]

**Johnny Boursiquot:** ...that you've got buried somewhere in your basement.

**Akshay Shah:** I had that in an O'Reilly book, and there was like a snake woodcut on the cover, or something... Oh, my God.

**Break:** \[56:25\]

**Akshay Shah:** I think in 2022, the way the industry is today, protobuf is a good middleground for exactly that role... You write a little schema, your server-side implementation gets easier. It's a little easier to wrangle. And you can just hand your clients fully-generated, ready-to-go client code. And whatever is happening in between - it's reasonable, but it's not artisanally handcrafted hypertext as the engine of application state. This is not Roy Fielding's thesis brought to life. It's just workaday code that gets the job done, and is pragmatic, and pretty reasonable, and is ultimately just some boring plumbing.

We've all got jobs to do... Your server is supposed to be doing something, and we just want to get to that part of it as quickly as possible. And on the frontend, you're like "Well, I'm trying to build a UI here. I don't really care about any of the plumbing. I just wanted some functions to call." And the faster we can get the server author and the client to calling functions and not worrying about the plumbing, the better off we all are.

**Jon Calhoun:** So I think we're getting near the end of the episode... We're gonna move into the Unpopular Opinion.

**Jingle:** \[58:56\]

**Jon Calhoun:** Akshay, do you have an unpopular opinion for us?

**Akshay Shah:** I don't know how unpopular it's going to be, but we mentioned at the top that I wrote this structured logging library called Zap. There's a bunch of libraries like it now; there's ZeroLog... And they're proposing to introduce something this to the standard lib. I think this whole thing is just so fundamentally misguided. I have felt that since starting to write Zap. I just think it's all a bad idea.

**Johnny Boursiquot:** So you think structured logging itself is a bad idea.

**Akshay Shah:** The way it's done here, yeah.

**Jon Calhoun:** We've introduced you by saying that if you've used Zap, you've probably used your code, and now you're telling us that that was a bad idea.

**Johnny Boursiquot:** \[laughs\]

**Akshay Shah:** You know, for a bunch of reasons... I was at Uber at the time, I was writing a service mesh thing for a Stubby-like protocol... It had tight performance requirements... And we were feeling really good. We had written this service mesh proxy thing, we'd met all the perf requirements... And Johnny, you're gonna hate this, but at the end we came back for like "Now we shall add the observability."

**Johnny Boursiquot:** \[laughs\]

**Akshay Shah:** And you add a couple of log statements and a couple of metric increments, and all of a sudden I'm staring at 1,000 heap allocations. The perf budget went out the window, and you're like "Well, we could just ship it without the logs or the metrics, but that's not good..."

And so to fit with the log infrastructure of the company, we had to emit JSON. And there was really no facility for running a regex over a string in the log ingestion and dashboarding stuff. And so I kind of invented this ultimately very fussy API for producing logs, just to avoid heap allocations, more or less, and to avoid, re-serializing data that we'd already serialized once. And it is so fussy... I mean, it's just unreal.

**Johnny Boursiquot:** And you thought you'd unleash it on the rest of the community... \[laughs\]

**Akshay Shah:** No -- so actually, internally at Uber what we did is we just put this thing behind a facade that looks like the old logging library... And it was like 30% faster, and we're like If everything just got 30% faster for no code changes, this is a huge win." Right? There's zillions of cores just parsing map string any. If we can get rid of that, that's great. But I didn't expect anyone, apart from the lowest level infra code, to actually be using this API. And what I didn't count on is we're like, well, we're a bunch of backend engineers, and everybody wants to flex. You want to be like "Oh, this is the fastest service at the company. Look at how fast this API is. I have two heap allocations in this whole code path." So everybody was using this API. Initially, it was kind of like "This is crazy." We should be logging strings, with \[unintelligible 01:01:51.16\] printf. And if you want to wrap them in JSON all the way at some boundary, where it puts the process ID and the hostname or whatever in there, that's fine. But as a programmer, I shouldn't be staring at this super-fussy JSON production API. And if I can't like, "If I can't convince you of that, I want to at least convince you that JSON is just the worst format." Like, we're going to produce JSON, and then Docker is going to parse it and re-escape it, and then Filebeat is going to parse it and reencode it, and then LogStash is going to parse it and reencode it, and then ElasticSearch is going to parse it and index it... And we're like "What are we doing?" At least use MessagePack, or something that's binary, and three times faster.

**Johnny Boursiquot:** Yeah, we just like to give money to the cloud vendors. That's cool. Keeping that whole industry in business.

**Jon Calhoun:** Johnny is not biased at all here...

**Akshay Shah:** It was just - for the amount of effort spent golfing allocations out of this one log API, the fact that end-to-end this is just stupendously inefficient... it should matter. We should pick a format that, at the very least, if you want this really fussy logging API, in between your program and the ultimate search index, or whatever, we should pick something that's easy and cheap to work with. So structured logging - thumbs down for me.

**Johnny Boursiquot:** Nice. \[laughs\] Oh, we're gonna see how well that one does...

**Jon Calhoun:** I'm just gonna be quiet, because I don't -- the upside to being a one-person company is that I don't really work on things that need to worry about any of those performance issues or anything that, so I can kind of get away with whatever I want.

**Akshay Shah:** I used the standard lib's log package on all of my personal stuff.

**Jon Calhoun:** I use println() a lot for printing stuff out, like if I need to know something... But that's because it's just me, so it's like, "Okay, this is pretty easy to deal with." I don't have a crazy amount of traffic. I'm currently not running any services with more than 100,000 users, so it's not too crazy.

**Akshay Shah:** That's a very successful software business.

**Johnny Boursiquot:** Seriously.

**Akshay Shah:** 100,000 people is a lot.

**Jon Calhoun:** It's not concurrent, for sure. It's like, there's 100,000 signups for a free course, and at this point, probably half of them haven't logged on in who knows how long.

**Akshay Shah:** \[01:04:11.25\] How are you not a multibillion-dollar VC-funded juggernaut at this point?

**Jon Calhoun:** Because that's a free course. When things are free...

**Akshay Shah:** Got it.

**Johnny Boursiquot:** \[laughs\] Well --

**Akshay Shah:** That hasn't stopped anybody for the last five or six years...

**Johnny Boursiquot:** That's true, that's true...

**Jon Calhoun:** I'd have to have some grand vision then, and I don't have that. My vision is just to try to help people learn Go.

**Johnny Boursiquot:** And just to make it free.

**Akshay Shah:** I'll tell you, I'll send you a slide deck for a 10% cut.

**Johnny Boursiquot:** \[laughs\] Oh, man... That's awesome. That's awesome. So you don't have an unpopular opinion, Jon?

**Jon Calhoun:** I do not. Johnny, what is your unpopular opinion?

**Johnny Boursiquot:** Okay. Well, since you and I both teach Go, so you might appreciate this... I think if you have a training, where you're not actually typing code and showing people how it actually feels and looks like to write the code in an editor... If all you have is slideware, and things, and animations and things, I think you're doing it wrong. I think you need to actually show an editor, you need to show you writing in code, in order for it to sink in a bit more.

**Jon Calhoun:** I agree with that 100%. In almost everything you can teach. Just to sort of back that up - when students learn about algorithms in school, I feel like half the reason they don't really understand them is because they're often not seeing code, and they're not using it extensively... So they might see a couple blips of code on the screen or something, but they don't actually walk through like "Let's actually write a binary search from the ground-up and see how it works." And I can say from school, I had so many classmates who just couldn't -- if you asked them to write a binary search, they could explain it to you, but they could not code it, for some reason. So there was some disconnect there.

I did Programming Teams, so I had to code this type of stuff all the time. The programming team is like a Top Coder, or Google Code Jam, that type of stuff, is what we did all the time. I got to work with other people who were very good at breaking it down and showing you "Here's ten examples of actually coding this thing." And by the end, you felt like you understood the algorithms so much better than just sort of the idea of it being explained to you. And I feel like that's true for pretty much anything you're teaching programming-wise - if you can really illustrate, "Here's how you code it, I think that really helps it sink in", and especially if people code along and try to do it on their own... Because I think that's another mistake people make, is that they won't put in the time of actually trying to do it themselves to see what it feels for themselves to code it. I don't know how your trainings are with that, Johnny, because we give slightly different types of trainings... But if they code along or not...?

**Johnny Boursiquot:** Oh yeah, absolutely. The code-along is encouraged. As a matter of fact, this is a good segue into a shameless plug... By the time this episode is available, I have a new training coming out with Lincoln Learning, actually... It's a hands-on introductory Go course. So for those who have been sort of looking to get into Go, and are coming from other languages, and kind of really want to know, "Okay, how do I quickly level up in Go in a very hands-on sort of way?", where you see me write code as I explain concepts and things... The good thing is, it's going to be available free through February. So if you need a link, when you hear this podcast, if you need a link, just hit me up on Twitter, and I'll send you a link.

So I'm working very hard on it, looking forward to actually putting this thing out in the world... It's kind of like one of your babies, right John? You work on it, you toil, and you sweat, nights, weekends, all the things, and then it comes out and you're super-proud of it... This is definitely one of them for me.

**Akshay Shah:** Is this the thing that's launching tomorrow, that you were mentioning at the beginning?

**Johnny Boursiquot:** CodeSpaces? Yeah, that's the thing launching tomorrow, along with GitHub, at GitHub Universe, and some CodeSpaces stuff. It's upon us, so hopefully I'm not breaking any rules and stuff, and having sort of a recording that shows up a week or two later... So it's just in time.

**Akshay Shah:** Nice.

**Jon Calhoun:** Nice.

**Akshay Shah:** I learned programming, like commercial programming, before my first job, with a Learn Python book, that was very much in line with your opinion, Johnny. It was Zed Shaw's Learn Python the Hard Way.

**Johnny Boursiquot:** \[01:08:15.23\] Yeah...

**Akshay Shah:** And it's literally just a bunch of code that you just hand-type and push Enter, and try and figure out why it did what it did.

**Johnny Boursiquot:** Yup.

**Akshay Shah:** And I remember I burned through the whole thing, because I had somehow convinced them that I knew how to program before I started, but I didn't really...

**Johnny Boursiquot:** \[laughs\] Nice.

**Akshay Shah:** Certainly not in Python. And it was under the gun to really figure it out quick.

**Johnny Boursiquot:** Those are the best, right?

**Akshay Shah:** Well, I showed up there, and I was like "I know how to code", and they kind of looked at me and they're like "Yeah, that checks out. Come on in." It was not the greatest... \[laughs\]

**Johnny Boursiquot:** Nice.

**Jon Calhoun:** Johnny, to speak to your point though... It always baffles me that -- if you took somebody to a soccer training, and you never got a soccer ball out, every would be like "What is going on?!"

**Johnny Boursiquot:** Right. \[laughs\] "Just watch me do this. You don't get to touch the ball."

**Jon Calhoun:** It would be kind of ridiculous. But in programming, for some reason that sometimes happens. And there are some topics where you can sort of talk about things at a high level, but a lot of times that code is very important. And I know as developers we like to say "Well, we get paid to think and do these other things, and the code's a small part of it", which is true... But you also the code helps make things sink in. And I think you get to that point where you can focus on thinking when the code is kind of a -- that's a small detail, but you have to learn how to implement that small detail and actually do it.

**Akshay Shah:** How much have generics made you revisit your courses, John?

**Jon Calhoun:** None at all so far, but that's because -- so right now, one of my courses, honestly, it needs updated more because of tooling changes.

**Akshay Shah:** Got it.

**Jon Calhoun:** So Go modules and some other stuff that. And it's not that the code is no longer valid, it's more just when somebody's in that sort of beginner to intermediate phase, it's kind of confusing if they haven't run into it already to be "Hey, this code doesn't work because I don't have a module setup", and my videos don't mention it because it didn't exist at the time.

**Akshay Shah:** Yeah.

**Jon Calhoun:** So it's like "Okay, that sucks." But I generally don't try to do anything that has generics where they'd even be a part of it, because it's more focused on that beginner to sort of intermediate type grouping at the moment. I do plan on doing a little bit more advanced stuff, which is -- like, I have a course in the works that's sort of been... I've been toiling away at it for a while. But as Johnny knows, those things can take forever, so... That's always interesting.

But I think I'll use generics. I don't think too many people are going to need us to write generics. And maybe I'll have something that covers that at some point, but I don't think most people actually need to write generics very often.

**Akshay Shah:** That's fair. Pretty much the only time I've rewritten the same code to generate a set of a given type - five or six times now. So I'm looking forward to getting rid of that, and just having a generic set type that I can cart around. That's pretty much the only data structure that I routinely end up wanting.

**Johnny Boursiquot:** Right.

**Jon Calhoun:** \[01:10:55.25\] I guess now that think about it, I do have a course that's like -- it's a course that's meant to cover some more common algorithms and data structures, and it's a free one that I was just... It's something I enjoy, so I wanted to teach it that way... And I'll probably add generics to that one at some point, just because people are going to be like "Why aren't you using generics?" But I still think a lot of the time it's easier to teach something without them.

**Akshay Shah:** Yeah, that makes sense.

**Jon Calhoun:** And then make sure they understand it with like -- let's just assume we're using strings right now, and just write it that way. And then take the next step. And that partially stemmed from the fact that I know a couple people who've been in college over the last five to ten years who I have ended up helping because they're friends of my younger sister, or something that... And in so many cases, somebody will come to me and they'll be like "I'm trying to implement this algorithm, and I don't know what this Java's t thing is", and all this other stuff. And it's because they understand the algorithm, but all of a sudden generics were thrown in there as part of the implementation, and they're like "I don't really get what this is. It was not taught to me very well." So they get caught up on that. And in many cases, I've told them, "Okay, let's just ignore the t stuff. Can you just write this assuming that you have this class that -- it's a string. Don't worry about other data types, just assume it's a string." And then all of a sudden, they're like "Oh yeah, that's fine" and they write it all. And then I'm like "Okay, now let's put the t stuff back", and it's a little bit more annoying, but it's like, that's all that was, was just letting you use any data type, and it really shouldn't be the thing that stopped you from moving forward.

**Akshay Shah:** That's kind of nice about the evolution of Go as a language... You really feel intimately aware of how at least one implementation of generics might work, because you've spent so many years writing code generators... You're like yeah, this really literally is like "I'm just gonna shove a string into the code here for this templated data type." It's kind of like a visceral appreciation for the problem that generics solves. It makes a lot of sense.

**Jon Calhoun:** I'm definitely a fan of generics for data structures, and that sort of thing. I just -- I guess we've moved on from that debate, luckily, or I think at least in my circle it feels like we have, but...

**Johnny Boursiquot:** Yeah, I think so. Yeah.

**Jon Calhoun:** And I don't feel it's been like this big apocalypse like everybody thought it was going to be... At least I haven't seen a million packages released that have way too much generic use. Maybe I'm getting old and don't have time to look for these things now.

**Johnny Boursiquot:** You're not trying enough things; you're not trying enough new things, Jon.

**Jon Calhoun:** I mean, that's definitely true these days, compared to what I used to... There was definitely a time where I would have been like "Oh, gRPC looks sweet. I've gotta throw this into something and find a way to use it." And now I'm like "Do I have a real need for this?" Because otherwise, I'm just going to use what I know works.

**Akshay Shah:** That makes sense. I think I run into generics a lot because when you work on protocol buffers, you're also working on code generation.

**Johnny Boursiquot:** It makes sense there.

**Akshay Shah:** So those kind of naturally come together, right? You're like "Oh, could I generate less code if I use generics here?"

**Johnny Boursiquot:** Right.

**Akshay Shah:** The answer is yes, but...

**Johnny Boursiquot:** Yeah, suitable use. Yeah.

**Akshay Shah:** Yeah.

**Jon Calhoun:** Alright. Akshay, thank you for joining us and talking about everything gRPC and protocol buffers. Johnny, always great to have you.

**Johnny Boursiquot:** Yes, likewise.

**Akshay Shah:** Thank you so much. It was nice to meet both of you.

**Johnny Boursiquot:** Likewise.
