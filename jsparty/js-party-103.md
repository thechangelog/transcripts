**Nick Nisi:** Hello, and welcome to another exciting JS Party! I'm your host today, Nick Nisi, and I am joined today by KBall...

**Kevin Ball:** I'm gonna play you, "Hoy, hoy!"

**Nick Nisi:** \[laughs\] Excellent! And we have a very special guest today, and that is Matteo Collina. Matteo, say hello!

**Matteo Collina:** Hi, everyone!

**Nick Nisi:** Welcome to the show! To tell a little bit about yourself, you are a technical director at NearForm, and you're also on the Node.js Technical Steering Committee, where you've worked on things such as Node.js streams, is that right?

**Matteo Collina:** Yes, absolutely. I am one of the few people that maintains Node streams... Or ended up maintaining Node streams, essentially, but that's -- you know, we can have a little bit of history there, during the party.

**Nick Nisi:** Absolutely.

**Matteo Collina:** I am also part of the OpenJS Foundation, cross-project-council representing the Node.js Project, so... The Node.js Project joined the OpenJS Foundation last year, so essentially there is a new entity, whatever that means. I'm also speaking at Node Interactive in Montreal in some weeks.

**Nick Nisi:** Yeah, you're speaking on December 11th in Montreal at Node+JS Interactive.

**Matteo Collina:** Yay!

**Nick Nisi:** We will be there as well, so we're really excited to see you there in person, and see some listeners out there as well.

**Kevin Ball:** Yes. Nick, you're gonna be doing a ton of stuff out there, right? You'll be on a couple panels, and other stuff...

**Nick Nisi:** Yeah. Panels, a live show over lunch on the second day... That'll be really exciting. And then we'll also just be hanging around and chatting with people, so that'll be a lot of fun. Come say hi.

**Matteo Collina:** Fantastic. I will. I will, absolutely.

**Nick Nisi:** Awesome. So tell us a little bit more about yourself. What got you into being on the Node TSC, or getting into streams?

**Matteo Collina:** Well, I got into streams because they underpin most of the things Node.js, really. At the beginning I got into Node by working on top of LevelDB, the LevelUP community. This goes long time ago; we're talking about 2013 type of things. And at that point in time I was doing a lot of work on streams, and thinking about streaming APIs, and so on and so forth. When the Node.JS Foundation was born and there was more loose contribution rules on the project, I just started chiming in on streams, and I started contributing back to Node.js, and I started fixing some of the long-term bugs that we had in there. I would say that Node streams are probably the most legacy piece of software in Node.js, to some extent.

\[00:04:13.25\] So at that point in time I kept working on it, essentially. I almost \[unintelligible 00:04:18.04\] that codebase, and because of that, they invited me to join the Node.js Technical Steering Committee. As part of my work at the Node.js Steering Committee, I'm also part of the team that organizes the Collaborator Summit, which is right after Node+JS Interactive, so where all Node collaborators and all OpenJS Foundation collaborators can meet together, and have some sessions and discussions, and meet face-to-face, which is pretty great, and it's a very nice experience.

As part of my daily job I'm managing teams of developers, designers, dev ops, building things with Node.js and other technologies. Also a lot of React, and so on and so forth. At NearForm we're invested a lot in Node.js, and we have several people on the TSC as well. James Snell, for example, or Anna Henningsen... The open source philosophy and Node are a key part of what we do and what we are.

**Nick Nisi:** Very cool.

**Kevin Ball:** I'm curious to dig in a little more on one of the things you highlighted there... You said streams are one of the most legacy parts of Node.

**Matteo Collina:** Yeah.

**Kevin Ball:** What do you think has led to them sticking around so long?

**Matteo Collina:** Oh. Node exploding... You know, Node became so big, so fast, and we couldn't change them anymore. Changing streams now will be meaning to basically every web application built with Express will need to be rewritten. Every web application will need to be rewritten, or will need a significant amount of fixes... And then everything that does some file manipulation will probably need to be rewritten. Summing all those things up, this means probably all use cases of Node. So we cannot really do a breaking change on streams, a big breaking change.

**Nick Nisi:** Wow.

**Matteo Collina:** That's a problem... So if the question mark is "Should we do a new version of Node that breaks Express?", yeah, probably not, right...? \[laughter\] It breaks webpack, or Rollup, or whatever. You know, probably not, right? Would you?

**Kevin Ball:** Probably not, though we did have -- \[unintelligible 00:06:29.07\] like "Okay, we could break this, because it'll break every use case" reminds me of the argument we had last week about whether we should rebrand JavaScript. Once it's wide enough distributed, you really can't fix your mistakes.

**Matteo Collina:** No, you can't. That's the problem. Well, we are slowly fixing them, in the sense that we are slowly fixing some of the bugs in streams, some of the problematic piece, to some extent, like doing some surgical changes, and remove some of the inconsistencies and some of the problems, and so on and so forth.

**Kevin Ball:** Yeah. If you can keep the API consistent, you can replace a heck a lot of the internals.

**Matteo Collina:** Yeah, the problem is that it's not really the API that is the problem. The key challenge there is the ebb and flow and the signaling messaging between two streams. If the event ordering changes, you can break somebody that expects certain events to happen in a certain order.

**Kevin Ball:** Oh, interesting. So people are depending on implementation details, rather than the API.

**Matteo Collina:** \[00:07:45.25\] Essentially, yes. Streams are a very leaky abstraction in Node.js. That's one of the key parts that I don't like, for example. They are not well-encapsulated, to some extent. They expose a hell of a lot of internal workings of them, which is one of the greatest things, so that people can do whatever they want with them, and it's great... On the other side, this also means that a lot of people are relying on internal implementation details that probably they shouldn't have.

**Kevin Ball:** Right. So let's step back actually and clarify, in case -- we've got a lot of different folks with different backgrounds in the audience, so maybe can we start by defining what streams are and how they work?

**Matteo Collina:** Okay, so streams are like an array, but in time. A key thing of streams is that instead of loading up a big file in memory or a big array of data, you are consuming them as this data is loaded or produced. So by processing it chunk-by-chunk or item-by-item, you can actually process a huge amount of data with constant memory... Which is great, for example, to ingest a file that is a size of a gigabyte, or ten gigabytes, or a terabyte even, whatever... Because we can just process them chunk by chunk, and not allocating all this memory that we cannot fit on our current machine. So they're great, and there are a lot more details \[unintelligible 00:09:07.23\] Do you want to go into those details right now, or...?

**Nick Nisi:** I'd love to, but you mentioned that it's a very legacy part of Node, and touching them or breaking them in any way would break a heck of a lot of code, so that means that they are used in quite a few different places. Could you give us some examples of where streams might be used, where we may not actually realize we're using streams?

**Matteo Collina:** Okay, HTTP server is using streams. So your request and response objects are two streams, which means then whenever you're using Express or whatever web framework you're talking through, you're using streams to interact with your clients. They are being used in every single database connection driver that you can work with, because our connection, our TCP sockets, our TLS stack is all based on Node streams.

Essentially, even if you don't realize it, it underpins it all, even if you don't use them directly, because you might just say to your database driver "Oh, please do an SQL query", or you're using a high-level HTTP client and you just say "fetch a URL". Internally, it's using Node streams to do all the work.

And you can combine them. For example, if you're doing an HTTP call, that would return, for example, a compressed format with Brotli, Gzip, or Deflate, or whatever you want. Then internally your high-level HTTP client will probably spin up a stream to decompress them. Those are still shipped within Node.js in the \[unintelligible 00:10:45.26\] library. So this means that you can decompress your file, and all of these will happen -- you will still get a stream in the end, which then you can process the way you want.

**Nick Nisi:** So for the most part would you say that a lot of the use cases end up -- you mentioned it being kind of like an array over time... From an end user's perspective would you typically be using that array at the end, when it's complete, and the streams are just kind of happening transparently, under the hood for you?

**Matteo Collina:** It depends, because you might want to still process \[unintelligible 00:11:20.27\] chunk by chunk. For example, once upon a time I wrote -- if for example you want to process a big file, you can parse all the events that GitHub is producing hour by hour, using the GitHub archive. This is a new line-delimited JSON file. So each line is a JSON. And you can use a stream to process those big files that are currently between 1 and maybe 300 megs on Zip, which is big files, and you can read them line by line... So you don't have to allocate 300 megabytes in your system, because these would probably make your process to be very slow, or crash, if the file is too big.

**Nick Nisi:** \[00:12:07.16\] Okay. So you can instead just be alerted when a new line comes in, and deal with them one by one.

**Matteo Collina:** Essentially, yes. That's it. Basically, you tell the stream "Start", and then you can use a module like split-to, that will actually load the file line by line. You can pipe it to a stream. For example, to read the file, you use fs.createReadStream(), and then you pipe it to split-to which will split it line by line, and then at the end of it you will have a line. You can then consume this line in any way you want. You can use some other stream to write it to another file, or you can \[unintelligible 00:12:50.24\] one to one to store it in a database, or whatever. Does it make sense?

**Kevin Ball:** Yeah. Essentially, what I'm hearing is pretty much anything that's going to be dealing with data is likely gonna use a stream, because it wants to allow for the fact that you might have a lot more data than you wanna deal with in memory.

**Matteo Collina:** Essentially, yes. Also, for example if you're already building a web app and you are receiving a file from an end user using a multipart request - you know, a file upload; if you're doing that, then if you want to support that, then you are receiving a stream on the other side... Because a user can upload 10 megabytes of data, or 100 megabytes of data, and you don't want your application to \[unintelligible 00:13:35.01\] before starting to process them, because you might want to store it to this immediately... Otherwise you might end up filling up your memory and you now have a nice security vulnerability.

**Kevin Ball:** Yeah. So I'm curious to explore -- you said you got into Node because you were interested in streaming data... What were some of the prior art pieces that inspired Node streams? What was done before that then influenced how Node streams came to be?

**Matteo Collina:** I don't have that answer for you. Meet my ignorance here. I don't know.

**Kevin Ball:** Yeah, no worries.

**Matteo Collina:** The key prior art I think is Unix pipes, and a lot of what Node streams are are how Unix pipes are designed, at a very high level.

**Kevin Ball:** That's actually a very interesting metaphor. So if you're familiar with piping things around Unix and thinking about things in that way, translating to a stream architecture within Node should be relatively straightforward.

**Matteo Collina:** Yes, exactly.

**Kevin Ball:** Maybe now we can dive in a little bit -- because you mentioned that some things are getting changed, and I know there was recently a new standard; WHATWG put out a streams standard. I also remember hearing James Snell talk about doing some sort of lower-level type streams implementation as a part of his work when we were working on HTTP/2 in Node... So what's going on in terms of evolving this concept and standard within Node?

**Matteo Collina:** There are two things here. You talked a lot of different things. The first one that you mentioned is the relationship between Node streams and WHATWG streams. The result is that Node became big, and the Node streams happened to exist before WHATWG streams. So Node streams are prior art of WHATWG streams. And WHATWG streams learned from a lot of our mistakes, to some extent... Which is a good thing.

**Kevin Ball:** Yeah.

**Matteo Collina:** But this also means that Node became very big, and everybody started using those, and it means that we cannot change them, we cannot drop them. So you cannot say that people can use WHATWG streams essentially, because that would not be possible. It would be a lot of work anyway, and building a completely different new set of APIs for all the things that I mentioned, that are not currently part of the Node community.

\[00:16:04.13\] So it would be a gargantuan effort, and if somebody wants to be involved in helping out and delivering some form of WHATWG streams compatibility, I will be very happy to help them develop this for Node.js. But at this point in time it's a little bit too much work for the community to take on.

**Kevin Ball:** Are WHATWG streams right now - as a spec or as a standard - actually implemented anywhere, either within or outside of Node? Does somebody have a library for this, or are they implemented in browsers?

**Matteo Collina:** There is a library for it, they're implemented in browsers... There is a library for it to integrate it with Node.js, essentially, but there is not much compatibility overall.

**Nick Nisi:** Is it true that the browsers fetch is based on WHATWG streams?

**Matteo Collina:** True. That's the main usage of WHATWG streams, yes.

**Kevin Ball:** Got it. So just to reiterate, to make sure I understood. So WHATWG streams are a new standard that learned a lot from Node streams, fixed some of the mistakes, but are not API-compatible. They're implemented in browsers, so we have essentially bifurcated how to deal with streams... Because I don't think that Node streams are implemented in browsers anywhere...

**Matteo Collina:** You can use them in browsers if you want to, but there is not HTTP API to call. For example, there's not an equivalent for fetch for -- because that's native in the browser itself, in the environment that the browser uses.

**Kevin Ball:** Got it. Do you see over time those reconverging in some way?

**Matteo Collina:** It's impossible.

**Kevin Ball:** Okay, so what do we do here?

**Matteo Collina:** What we can do - we can develop some sort of compatibility layers, so that if somebody wanted to write isomorphic code could potentially convert one to the other. But my take is in fact that most streams APIs are extremely too complex for end users and developers in general. Essentially, it's an abstraction that is too complex, and application developers don't want to cater for most of those cases... And fact, whenever they have the chance, they will make mistakes. And I've seen so many mistakes using streams, because it's a very complex API... But I've also seen mistakes using WHATWG streams as well. It's very complex. It's a very complex way of dealing with data.

The truth is -- my personal opinion is that we should in fact not aim to be compatible between each other directly, but instead use a common lingua franca, which would tend to be, in my opinion, async iterators. Async iterators are great, and Node streams supports them. There were some changes to WHATWG streams last year to have them as well in that spec; I don't know if that has shipped in the browser or not.

**Kevin Ball:** Maybe I'm just completely misremembering, but I vaguely recall watching a talk by James Snell where he started talking about "Oh yeah, we're doing another lower-level implementation as a part of doing HTTP/2, that might then get moved into Node streams", or something. Am I just imagining this, or do you know what I'm talking about, Matteo?

**Matteo Collina:** Yes, I know very well, because I was involved in some of the designs of HTTP/2... However, what James was talking about - he was talking about something that is one level down, our public API of streams... Essentially, one of the key challenges for Node streams is that some part of that abstraction is also implemented in C++ and C. And because of that, it's too complex, and it does too much, and it's hard to work with and maintain... And on top of that, also performance is a problem. So James wanted to do something more lean, that could actually flow data faster from C++ to JavaScript and vice versa.

**Break:** \[00:20:02.01\]

**Nick Nisi:** Digging back in, you mentioned the word "async", before we move on to async generators and iterators... But we also mentioned that the fetch API is based on WHATWG streams, so I'm curious - if any - is the relationship between streams and promises, and does it differ between WHATWG streams and Node streams?

**Matteo Collina:** Okay, this is a very interesting question, and I have a nice answer for you. Node streams are based on EventEmitter, and WHATWG streams are based on promises. And mixing EvetEmitter and promises, you make some very nice popcorn.

**Kevin Ball:** \[laughs\]

**Matteo Collina:** Don't try it at all.

**Kevin Ball:** Interesting.

**Matteo Collina:** Essentially, that's the key part. Or at least -- that's a little bit untrue. The answer was before Node 10 if you tried it at all, you would have a very bad experience. Because in Node 10 we have the support from async iterators, then you might have a way better experience right now, than before. Historically, if you search for a historical guide on Node streams that doesn't use the new stuff that we added in the last year, year-and-a-half, or something like that, you would have a very, very bad experience, resulting in memory leaks; going into memory leak territory in a matter of minutes.

**Kevin Ball:** Interesting. Let me think through that, because I'm trying to make sure I understand. So Node streams you said are based on EventEmitters. The way that's working, conceptually you're registering a listener that gets called multiple times...

**Matteo Collina:** Yes.

**Kevin Ball:** And then WHATWG streams, which I have not looked into in great detail, you said are based on promises. How does that end up -- does that mean that basically you're doing .then on them, in some way?

**Matteo Collina:** Yes, you're doing .then, you're using AbortController to cancel it, and controller stuff... And it has a very complex API, more or less, to deal with processing chunks, and so on and so forth. So the key problem between one and the other is how you structure your application. EventEmitter is the system that calls you. When you need to use a promise, you call the promise to get a value, okay?

**Kevin Ball:** Oh, interesting... So do you have to keep recalling to get new promises then, because your promise is gonna be resolved?

**Matteo Collina:** It's a little bit more complicated, but essentially yes. It's a very basic level of -- you know, On emits multiple events at the same time, but a promise only gets you one. And this is the core difference between promises and EventEmitter. Essentially, the fact that they're based on very different building blocks means -- this percolates in a huge amount of fashion. The protocol is very different... It's the same concept and the same logic most of the time, it's just very different, because one is based on EventEmitters, and the other one is built upon promises. So in one sense we could emit an event to get some data processed, while on the other side it would probably call a method that returns a promise. So the flow is completely different.

In one case, in order to get a function called, I register a function called in the other side, I pass an object and that gets called. It's completely different. It's a different approach to the same topic. Essentially, mixing the promises and EventEmitter, you end up with some really bad things in there.

**Kevin Ball:** \[00:24:20.05\] Yeah, I'm trying to think about it... So in the EventEmitter approach, the system is handling what is essentially an event loop, right? It's calling over and over again. In the promises approach, if you have an event loop, it's in user space, where you're coming back and you're calling that promise over and over again. Huh... Interesting.

**Matteo Collina:** Also, there is one more thing... In EventEmitter when somebody emits an event, that event is emitted synchronously, while promises are always delayed with \[unintelligible 00:24:49.14\] It just confuses things a little bit more, because we were not confused enough... And essentially, trying to reconcile those two worlds, and provide a better API, has been a very tough challenge. This is where, for me, asynchronous iterators come in, and more or less solve most of the problems.

**Nick Nisi:** Digging into how async iterators helps to make working with EventEmitter-based streams easier, and kind of tying off of what Kball had said - with that it's just a cleaner syntax, being able to for-await and run that loop still in user space? Is that what makes it easier? Or can you dig into how async iterators help to--

**Matteo Collina:** Async iterator is essentially a specification for an object. This object has some very key methods. One of these is next. Next returns a promise, that will return the next data that will be read by the stream. Now, there is a catch in here, because it will \[unintelligible 00:25:53.11\] or something like that. Does it make sense?

**Nick Nisi:** I think so.

**Matteo Collina:** Okay. So at that point in time, how do we reconcile this? Typically, people in Node.js can consume a stream using the on-data event, or using the readable event. Are you familiar with the readable event?

**Kevin Ball:** Let's cover it just in case, because while we may be, not everybody listening will be.

**Matteo Collina:** Not everybody listening, that's true. What on-readable does, "Oh, there is some data available to be read", and then the developer needs to call .read to consume that data. Now, there is also the on-error event, where an error might pop up. This is where the problem of mixing EventEmitter and promises bites back... Because with the EventEmitter you have the error and the data being moved on two different channels, while on promises they come on the same promise.

**Nick Nisi:** Oh...

**Matteo Collina:** And this is why it makes popcorn.

**Kevin Ball:** Yeah.

**Matteo Collina:** And trying to reconcile this and providing a cohesive API is very hard. If you look at our implementation, you will probably scream, because it's really... Intense. Let me use a nice term. It's intense. \[laughter\] And it's very hard to get right. We had some bugs, and so on and so forth, before marking it stable and safe to use. It was marked stable at the beginning of this year, or something like that. So it's now stable on both Node 10 and Node 12, and Node 13, of course, so you can use that safely.

Essentially, what we do is we use the readable event - so the readable event comes up, it signals that there is some data available, and then we call the read method on Node streams to read all the values that are available, and queue them up to be consumed by the next, when you call next. So essentially it will consume all the data that you call in next, and that will be it. And it works.

Now, instead of using complex on-readable or on-data, that's very hard and error-prone in a promise-based world, what you can do - you can just do a for-await loop, because with for-await the JavaScript syntax will automatically call next for us, so we don't have to call it manually... And it provides a nice syntax on top of this protocol. You can then just iterate over your stream, just using JavaScript syntax. So you don't have to think about complex APIs and anything, you can just use JavaScript, which is faster.

**Break:** \[00:28:57.02\]

**Kevin Ball:** This reminds me a little bit of a concept - when we first started dealing a lot with promises and this concept of asynchronicity, one of the things that came up was you can wrap a synchronous API in a promise to create a consistent asynchronous API. The asynchronous consumer doesn't actually care if it's getting something that was really synchronous under the hood, whereas going the other way is really hard. So in some ways, this strikes me as you're doing kind of the same thing, but in this case for batched, streamed data. You're wrapping this batched synchronicity that you get from the streams API into an asynchronous iterator.

**Matteo Collina:** Well, it's slightly different than this... A stream, by nature, is asynchronous, and I'm just transforming this from being event-based on one side, to be promise-based on the other. And in order to do this, we need to use the pull-based API, which is this readable event, to read the data from the stream. That's fantastic, but on the other side we need also to batch those data that we read in promises. Because when we are doing a for-await loop, there are two basic situations that can happen. Either there is some data on the stream to be read, or there is not. And if there is, we can just return a promise that automated the result with that data. Or if there is not, we need to return a promise, and then when that data will become available, put it into the promise and deliver it to the code. Essentially, we pool data and we wrap it in promises.

Now, there's the third case... The third case is the stream has errors. Errors in streams are emitted immediately when they happen, while in this mode we will need to wait until the next call, the next round of the loop, to forward that event to the user, which is a significant change in the order of events, and the flow, and the developer API, essentially.

**Kevin Ball:** I have a couple questions on that... Can a stream recover from an error? Can it issue an error and then have subsequent data? ...or no, once there's an error, we're done.

**Matteo Collina:** Well, no, it's a little bit more complicated than that. It's down to how the stream is implemented. This is true for Node core streams, but it's not necessarily true for everything else.

**Kevin Ball:** Okay.

**Matteo Collina:** Because it's a leaky abstraction, you see? We are trying to fix those slowly, but it's taking a significant amount of time.

**Kevin Ball:** Okay, so while for Node core streams an error means you're done, that is not necessarily true of all streams... And there is there an ordering difference...? Imagine from a stream I'm getting five promises. In the streaming world, I would get those five data and then there's an error, and I would process that in order. So I'd process the five pieces of data, and then I would process the error. Now, when we wrap this up as an async generator, we may not have consumed all that data. Do we still have the same order? If we have put those five pieces of data in, but we've only consumed one, and now we get an error, is the next thing we consume going to be another piece of data, or is it gonna be the error?

**Matteo Collina:** It's going to be the error.

**Kevin Ball:** Interesting. So we changed the ordering.

**Matteo Collina:** A little bit. It changes the ordering a little bit, yes. Because at that point in time the stream has been errored, and essentially if you've not consumed the data -- the point is the data is there, and if you're not consuming it, if the socket gets down, the error will be presented to you on the next read. In order to keep the consumed memory constant and as little as possible, the async iterator is not pulling data from the streams for you and queuing it for you. It's essentially reading only as much data that you're asking to read.

**Kevin Ball:** \[00:35:03.01\] Got it.

**Matteo Collina:** There are situations where two different implementations will have different ordering.

**Kevin Ball:** Yeah, yeah.

3 But in other terms, it's just that with async iterator, the async iterator model is way more ergonomic. And from my point of view, if your application is relying on the fact that you are relying on this, you probably have some bugs in your code, in your error handling. Because if a socket error shouldn't really matter to this type of thing, so you shouldn't really want to process those data that is lingering, because otherwise you might have serious problems anyway. If you're sending a file, that will be truncated, so what the heck you're doing \[unintelligible 00:35:52.22\] error situation. It's not end. It's not "the stream has ended."

**Kevin Ball:** Right, it's not the same as end. Yeah, that is interesting though, because it creates a leaky abstraction where if someone had been assuming that that was ordered and said "Okay, I'm gonna pretend that certain types of errors are kind of just ways of communicating data along with an end", that suddenly breaks, because that's not a valid assumption.

**Matteo Collina:** No, absolutely not. Errors in Node.js are really bad things. Node.js has these assumptions, and you can see that in the old error back model, where errors are really, really important things. It's not "Application is missing some data." An error is "This is big. A socket has been destroyed. The other party destroyed the socket", or "There's no network card anymore. That burned." "A file that was supposed to be there does not exist."

**Kevin Ball:** Yeah, it's an interesting example. That's something that is not essentially a convention. How the conventions of the project carry through into what you can expect to remain consistent versus not.

**Matteo Collina:** Yes. Essentially, yes. It's a fascinating world, isn't it...?

**Kevin Ball:** Yeah...

**Nick Nisi:** Yeah, definitely. And it seems very useful, even in places I didn't realize I was using streams. It's really cool to see that, and it's cool to see how much care is put into not breaking that very depended-upon API.

**Matteo Collina:** Yeah. That's the problem, right? Not breaking it.

**Nick Nisi:** Yeah. Where do you see it going in the future? If there were to be new stream-based APIs generated, would they be based on the Node.js streams, or...? In Node specifically, do you think they'd be based on this API, or do you think that they would try and implement something else, like the WHATWG streams?

**Matteo Collina:** My overall take is doing a stream-based API is extremely hard, and very hard to use. Because very few people use streams in fetch. Most people use fetch with .json.

**Nick Nisi:** Yeah.

**Matteo Collina:** In fact, if you use node-fetch, as everybody building isomorphic applications is doing, it's not -- node-fetch doesn't use WHATWG streams, and very few people notice.

**Kevin Ball:** Yeah. So it's an interesting point... Most folks are not interacting down at the level of the streams API. So for dealing with all these sort of existing situations where streams are deeply embedded, do you see folks building a layer on top using async iterators?

**Matteo Collina:** We already have one...

**Kevin Ball:** Okay.

**Matteo Collina:** ...which for me is async iterators. Essentially, it's a basic compatibility layer for that problem, that is simple enough to be implemented on both sides with the same semantic. In fact, when we were working on our implementation, we have been working with TC39 and folks at WHATWG to be sure that they have similar, thus consistent behaviors between the two. So that if you're processing some code from fetch, or from http.get, in Node, you will have similar code to handle the data, or something like that.

**Kevin Ball:** \[00:39:21.09\] Are there any pieces of functionality or capabilities that are not handled by that compatibility layer?

**Matteo Collina:** Yes, there are, and we're working on them. The key challenge here is you might want to use these types of things to move from one side to the other, to some extent. Essentially, you might want to use async iterators and async generators to be able to build, and be able to combine them with streams as much as you want... And right now we have implemented -- you can async-iterate a stream on one side, but we cannot async-iterate... We can async-iterate a stream, but we don't have currently a model - an automated model at least - to convert that into a duplex, for example.

We are missing a little bit the duplex abstraction, and so on and so forth... And we are currently working on some of those topics. For example, we have recently added Readable.from, which is an API that given an \[00:40:31.14\] or an async iterator, it will just use those APIs to convert those data and put those in a Node stream, so that you can use pipe, or the pipeline operator - which is not in the pipeline API, it's different... It's a higher-level API compared to pipe... To combine those without having to do much work.

Now, this is very powerful. We are missing some equivalent for example for transform. For the transform API there is a PR opened that needs to be refined a little bit, and boxed off and finished.

**Kevin Ball:** Got it. So reading from streams right now is well supported, and what's still under development is essentially pushing things back from async generators into streams, so that we can use piping and transferring and all the sort of utilities that are built up around that. Got it.

**Matteo Collina:** Yes, we are working on it right now... So if you are interested, I can put some PR links somewhere.

**Kevin Ball:** I think those would be great to drop into the document, so we can put them into our show notes.

**Matteo Collina:** Yes, I'll just find those for you.

**Kevin Ball:** Great. Nick, I think you put a question in here as well about observables..

**Nick Nisi:** Yeah. I'm curious, Matteo, if you know -- or is there a relationship between the problems that streams try and solve and the problems that observables try and solve? Are they related?

**Matteo Collina:** In fairness, observables are not really common in the Node world, or at least not in what I use... They are related, but I'm not so familiar with them to be able to say -- it's a very similar problem \[unintelligible 00:42:10.20\] with the readable side of things, to some extent, to data emitting (not also the writeable side of things), which is important, to some extent, so... That will be my main difference. But it's a similar problem, to some extent.

**Nick Nisi:** Gotcha. So it's more that with observables you have to still ask for the values, whereas streams would be calling you back.

**Matteo Collina:** Essentially, yes.

**Nick Nisi:** Very cool. That was a fascinating deep dive into the streams API, the differences between the browser implementation and the node implementation, which has been around forever... Thank you for that. As I learned, I use it a lot, without realizing it, so that's really awesome.

Matteo, is there anything else that you want to say about streams?

**Matteo Collina:** \[00:42:56.08\] There is one thing, and it is a recommendation to everybody. One of the greatest mistakes when using streams with async/await and promises is to pass an async function into an event handler. For example, on-data, and then you do "async function something" in order to use await inside. Don't do that. Don't. At least right now.

The key challenge there is error-handling. The problem is that in a stream world, in order to clean up that resource, you need to call the \[unintelligible 00:43:36.08\] And an async function can throw, and the promise will reject. But the problem is that nobody right now is catching that rejection for you, or doing something with it. Essentially, you'll likely end up with a memory leak, without \[unintelligible 00:43:58.00\]

I'm currently working on a PR that actually does this, fixes this problem by automatically adding a cache handler for you on EventEmitter, which is pretty cool. This is going to probably land in the next few weeks, but it will be opt-in and experimental for the beginning.

**Nick Nisi:** Very cool. That is something that I wouldn't have thought about. That error could -- nothing would be handling it. That's -- yeah...

**Matteo Collina:** Essentially, that will create a memory leak.

**Nick Nisi:** Yeah.

**Matteo Collina:** In case of error, it's very common. If you're parsing a multipart file on an HTTP API, but with multiple key values, and so on and so forth, in one of those cases there was some code that I found that had a memory leak, because handling one of those keys had an await in it, and it was throwing, and nobody was catching it, and the \[unintelligible 00:44:57.04\] was not being progressed anymore, so the request was stuck there, and you were basically keeping an HTTP request without any response at all up until the timeout existed, and that was exhausting the sockets in the server... And then nobody could access your website anymore.

**Nick Nisi:** Yeah. Important things to think about.

**Matteo Collina:** I don't know, maybe it was real deep, okay...? I typically do this with a lot of explanation, with a lot of code examples... Because with code examples it's very clear to understand what I'm talking about. Come to my talk, there will be a lot of examples in code.

**Kevin Ball:** Yeah, I feel like error handling with asynchronous code is something -- we've made asynchronous code feel so much easier now, because we have all this sugar around it, and yet we're often not handling a lot of the things that you would traditionally have to worry about there.

**Matteo Collina:** \[00:46:00.17\] Essentially, yes. And there is also the fact that there's a substantial difference between Node.js and the browser. The browser has one human in front, and the server has hopefully many humans connected to it through a browser, or through a mobile app, or whatever form. And this changes things dramatically in how tight it needs to manage resources... Because most of the web apps then leak memory in one form or another, and it doesn't really matter because there is only one user using them, and if the \[unintelligible 00:46:39.03\] crashes, then it will restart Chrome from time to time; it's not such a big of a problem. There's very few applications like Gmail that need to run for days. That's one case...

In Node.js, instead, if you leak memory you are in big trouble, because then it can affect other users as well. It's a big, big difference there in how tight the error handling needs to be in one case versus another.

**Kevin Ball:** Yeah, and I think even in the browser world it's become much more important, because increasingly -- you know, back pre-single-page app days, you'd throw everything away and restart a new page. But now you have an application that does all that navigation in JavaScript and you're keeping stuff around for much, much longer. So your memory usage is one of the big areas where I think we need to both increase awareness and also increase our layers of tools to make it easier to do right.

**Matteo Collina:** Yes, absolutely. One of the problems in that, that I find conceptually that can be a problem, is how promises are specified and how they work. The beauty of a promise, if you can see it that way - because it's also very fascinating - is like \[unintelligible 00:48:07.04\] You don't know if the cat is alive or dead until you open the box. That's a promise, right?

**Kevin Ball:** \[laughs\] Yeah... That's funny.

**Matteo Collina:** \[00:48:21.10\] And the key thing is that given a promise, you don't know if it will ever resolve.

**Kevin Ball:** Right.

**Matteo Collina:** Or if anybody will every open that box. And that is a key challenge for me... Because I don't know if that promise will ever open a box. Then how can we handle errors properly?

**Kevin Ball:** Yeah.

**Matteo Collina:** It assumes that the runtime will manage errors for you in a way that doesn't leak memory. That is true for a browser, where the environment is very limited, but for Node, where you can essentially do anything that an application can do on your server, that's very complicated.

So that is kind of the source of the problem, probably, and the fact that on the web it's very useful to do file and forget promises -- or a lot of developers do call-fetch without putting at try-catch out of it, or a catch-under out of it... And if it just errors - well, it just errors, and it goes into the console, right? Not that big of a deal.

In Node.js if you start doing this - yeah, nobody will get a response from your HTTP call, from your servers, so you need to manage all those errors properly and make sure that the right thing is done and applied everywhere. File and forget behaviors are not really acceptable in Node, while they are on the browser.

**Kevin Ball:** Makes sense.

**Matteo Collina:** Thank you. It's a lot of very deep topics, so I hope my explanation shed some light, at least on my thinking, and on the status of things.

**Nick Nisi:** Very fascinating, especially to hear the history of it, and just where it's used, how it's used, and how the newer pieces of the language like async iterators are making working with this better.

Really great to hear from you on that, and we really look forward to seeing you at Node.js Interactive next month, and catching your talk. Your talk will be on this -- I believe the name of it is Stream Into the Future.

**Matteo Collina:** Yes!

**Nick Nisi:** Yeah. Definitely more of a talk format for that, to get a better understanding... And yeah, definitely check that out when it comes out. Thank you so much for chatting with us, Matteo.

**Matteo Collina:** Thank you for having me.
