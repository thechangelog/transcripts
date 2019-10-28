**Kevin Ball:** Welcome to our panel. We're going to do a panel today about the future of Node.js. I have some amazing panelists here with me, some of whom you've already met today, some of whom you will be meeting later. They are all speakers. Let us actually just go down and have each of you introduce yourselves very quickly - your name, and say hello.

**Kat Marchán:** I am Kat Marchán. I am the chief architect of the npm CLI. I've been there for about four years, so I've been doing a lot of it.

**Anna Henningsen:** I'm Anna, and I work on Node. That's basically it. \[laughter\]

**Ruben Bridgewater:** Hello. I'm Ruben Bridgewater, I'm a Node.js collaborator, and I work as a software architect, and on Node core.

**James Snell:** Hello again. I'm James. I work on Node, and I work for NearForm.

**Kevin Ball:** Alright. So when we do a JS Party podcast, we actually broadcast it live and let people chime in with us on Slack and ask questions of the panelists when we're talking on the podcast, and go like that. Well, we do not have a Slack channel here, so you are a Slack channel. If you have question during this... I'll start off with some questions to our panelists, but if you have questions, raise your hand up high, wave it around, don't be shy. Julian will go with a microphone for you to ask the question.

Our goal here is to take advantage of these amazing experts, and share a little bit about the future of Node.js. I'm gonna kick things off with a question, and I'm gonna shoot this over a little bit to James and Ruben to start... Both of you, when I talked to you a little bit about the future of Node.js, mentioned things around promises and asynchronicity... So let's just kind of throw out to you -- what's going on currently in development, changing around the way that Node is handling asynchronicity, and where do you see it going?

**Ruben Bridgewater:** The ecosystem starts to go more and more into using promises in general. Callbacks are very rarely seen these days, and Node core started to incorporate that by also providing native promise reports in a lot of APIs. That's something we do more and more. We try to have pretty much all asynchronous calls, both as a callback-based version and also as a promise-based version. Besides that, we also try to improve the debugging experience with promises, because the promise itself is sometimes more browser-focused than really in server-side... And due to that we've just recently implemented a new flag that you can use, which is called --UnhandledRejections. There you can choose between a specific mode what would happen when you have a rejection that is not handled. A lot of people might run into that without noticing it, also by refactoring some code.

With Node 12, something very awesome landed, that we did not implement on our own, but where we benefit from V8. That is called zero-cost async stack traces. When you use async/await, then you will always have each await call in your stack trace from then on. So I highly recommend when you switch to Node 12, immediately refactor your code to that, because debugging is going to be much, much better.

**James Snell:** I've just gotta say, Ruben has done a tremendous amount of work on the promises in core; how the error handling works, and everything else. I don't think anyone's done more work in that than Ruben, so he deserves a thank you on that.

As Ruben mentioned, we are going through and adding promise support to the various APIs. There's fs.promises, and there's DNS Promises, and EventEmitter now you can use as an async iterator... There are a couple other things for EventEmitter that are coming. There's a new EventEmitter on that returns a promise that will resolve when an event emits. We're also doing one -- some similar work that's being done there to make events easier to consume over time... Not just as an async iterator, but being able to get a lifecycle of events. Streams has on data and then on int events; being able to have a promises workflow that supports that as well, that kind of flow.

That work is ongoing... It's going to take a little while, because not all of the APIs in 4 make sense as promises... And to make them promises is actually a breaking change. So we have to take our time and do it correctly.

**Kevin Ball:** Promises, asynchronicity - these are great ways to think and go in the event loop, but they don't get us to actual true parallelism... My understanding is, Anna, you're actually working on some stuff that is more true parallelism and worker threads within Node, and that type of thing. Would you like to tell us a little about that?

**Anna Henningsen:** Yeah, sure. Basically, worker threads in Node is something that I for the most part implemented. You can actually now get worker threads in Node; I think the first release was in some 10.x version. It's no longer behind a flag; we're very close to moving it out of experimental state. There's just one or two web compatibilities that we wanna address first.

So yeah, if you actually have the need for something like workers, which is basically only for PPU-intensive tasks that you wanna offload from the main thread - then yeah, you can already to that, and if you run into any problems with that, let us know.

**Kevin Ball:** I know that one of the most loved and hated features of Node is how we deal with modules... I've heard it said that npm is one of the reasons behind Node's success. I've seen all the memes about how you open the door to Node Modules and all the animals go screaming out... \[laughter\] Kat, do you wanna give us any hints into the future here?

**Kat Marchán:** Well, I'm gonna be giving a talk later today about what I plan on doing about Node modules hell. Basically, I'm trying to get rid of Node modules. \[public applause\] Yeah, we like that! I'll leave the rest for the talk though. You've gotta show up.

**Kevin Ball:** Okay. So come back, or stick around. Excellent. So I'm gonna poke at talks a little bit then. Ruben, I know you're talking this afternoon about error handling, and you've just mentioned async/await and async debugging... Are there improvements coming to our async debugging, beyond just the stack tracing? What's going on in Node core here?

**Ruben Bridgewater:** We definitely also improve more into that direction, but more like on a subtle level. For example, we validate more and more inputs stricter than we used to do... But that's something that has nothing to do with the async on this part directly.

What I'm going to plan on implementing relatively soon is a feature to tell you if you have a promise that did not settle when your application closes. That means you probably have a memory leak in your application somewhere, and you had a promise constructor that for some reasons never resolved. That's a problem.

People sometimes believe that the promise itself should keep the key event loop alive, but the promise has nothing to do with that. As soon as there is nothing ongoing otherwise anymore, so there's no actual work to do, then the process will exit, no matter if there's still a promise out there alive that just is not settling. So that's something that's coming hopefully relatively soon.

**Kevin Ball:** I've asked each of you a little bit about your area of specialization... Now I'm gonna ask you to go a little outside of that. I'm gonna throw this out to anyone on the panel - what are some of the longer-term, future items that you'd like to see in Node, whether they're in progress or just in discussion?

**James Snell:** I have a list... \[laughter\] One thing that we've seen some experimentation on so far is just a better security policy for Node itself. Right now the basic trust model for Node is if code is running on Node, it's trusted... Which has a number of limitations and issues.

Some work landed experimental with specifying some policies; one of the things that I'm exploring aside from QUIC is the other project I'm doing - some proper operating system sandboxing of Node. Being able to run Node and child processes in a proper operating system sandbox, and having that be a built-in capability for Node.

So there's gonna be some more experimentation around that... There is other people that are looking at various other security-related things, so over the next year I would expect a tremendous amount of work to come out on that.

**Kat Marchán:** I really wanna see WASM and WASI support be first-class. WASI is exciting. I'd like to see WASI replace node-gyp hopefully. That would be pretty exciting.

**Anna Henningsen:** One thing that maybe not everybody cares about, but that I really wanna do is have a better embedding API for Node. Some people do that - they build an application and want to run Javascript as part of that. For example, game engines usually use something like Lua, which is really built for embedding, but Node theoretically can do that as well. Getting to a point where that is both easy and very flexible - that is one of my goals.

**Ruben Bridgewater:** One thing that is really important and a fundamental basis of almost everything in Node.js is streams. But the current streams implementation has a lot of downsides, and it is actually pretty slow, it's super-difficult to maintain, and having any changes in there is horrible.

James is at the moment implementing QUIC, and especially for that we are trying to look into a new way to implement a new streams model, that would then come as a separate module, so we wouldn't remove anything that is there right now, because the whole access system relies upon that... And we are looking into just adding something you, that we could all benefit from.

**James Snell:** That new streams API - it's been in development. Jeremiah Senkpiel, Fishrock123, has been working on it. It's called Bob, simply because we needed a name. We were sitting around at a table, "What are we gonna call it?" "We're gonna call it Bob." So it's Bob streams. Hopefully it will be coming soon

**Kevin Ball:** I'd like to explore a little bit more going off of what Anna said... You highlighted a really interesting example of a place where Node has perhaps not penetrated as well as it might have been, getting embedded with another application. I think one of the amazing things about Node is how many places it has gone, but I'd like to throw out - are there other places that Node is not doing a good job right now, that you'd like to see it move into?

**Anna Henningsen:** Maybe this is a bit opinionated, but I feel like a lot of Node core contributors really focus on the classic use case of Node, which is enterprise web development, and providing HTTP APIs. And while that is all great and everything, I feel like there are other ways to use Node, like building CLIs. We should not throw that use case under the bus. Electron, for example - that's something that uses Node, and embeds Node, and I wanna make that easier and better.

**Kat Marchán:** To that end, I think I've talked a little bit with James about perhaps adding some kind of fs override API that Electron can use, that tink can use, that other things can use to bypass the file system in some special cases. That would be pretty exciting.

**James Snell:** Yeah, there's been some talk about it, and I'd love to do some experimentation with more of a virtual, pluggable file system. That would be fantastic. Going on on the embedding side of things, if you look at use cases like CloudFlare workers, I know Bloomberg has done some stuff in their infrastructure where they've gone through and just created their own V8 execution environment. If you look at the reasons why they did that, it's because Node wasn't meeting their needs, or a particular set of performance requirements, or usage requirements. Node really needs to kind of step back, look at those things and really understand why Node wasn't used in those cases, and then figure out a path to make sure that "Okay, we need to get there, and we need to do better."

**Ruben Bridgewater:** When we speak about file systems, that's also one thing where a lot of people would not use the Node.js native file system for a lot of things... Because it's cryptic. You use something that is in the POSIX standard, and you have a weird name for a function where you have no idea what it does, and we have a very bad documentation about that. We are trying to improve the documentation... And we are also sometimes looking into ways, if it makes sense, to add more high-level APIs into Node core, so it would be way easier for you as users to use a lot of things, instead of having to rely upon some modules.

We know we have a very diverse module ecosystem, so then you sometimes have some downsides in one module, or a little bit of a downside in another one, and it's difficult to decide what to use in the end. So yeah, that's something I would like to see.

**Kevin Ball:** I wanna prompt the audience again - any questions? I've been asking a lot of questions. do we have some questions in the audience? I see some hands going up, excellent.

**Audience member:** \[unintelligible 00:16:37.19\] This is just a quick question about the Bob streams - are they related to WHATWG streams spec at all?

**Ruben Bridgewater:** No. WHATWG streams is kind of a higher-level API. The Bob streams is a very low-level pool interface, and it's actually just an API. It's not an implementation. We'll be able to have the same pool API at the C++ layer and the Javascript layer. It's a very low-level primitive.

The intent, once Bob is ready and it's there - we will be able to build the WHATWG stream implementation on top of it much more efficiently than we can on the existing stream stack. So Bob is one of the building blocks for WHATWG stream support in core, but it's not that implementation yet.

**Break:** \[00:17:42.03\]

**Audience member:** So how do you all feel about the current ECMAScript modules implementation? Either as it currently stands, or moving forward as it approaches moving out of experimental?

**Kevin Ball:** Volunteers? \[laughter\]

**Anna Henningsen:** I feel like this is the wrong panel for that question... \[laughter\] None of the people that are heavily invested in that are here, I think.

**Ruben Bridgewater:** Recently, we landed a very big stamp towards what WHAT Working Group decided where they would want to go to... And that's probably the first time I guess it would make sense to start using it. Before that, it was still very experimental, and a lot of changes; now it's getting a little bit more stable. You probably have pretty much the feature set set. I guess there won't be huge changes anymore.

**Kevin Ball:** Other questions out in the audience?

**Audience member:** What's your opinion about new package managers such as Entropic? Are you gonna play with the future of Node?

**Kat Marchán:** I am really excited about Entropic. \[audience applause\] I am not gonna say some thing or another, but you know, Entropic might be getting a little bit of extra help very soon.

**Kevin Ball:** You know this is being published, right?

**Kat Marchán:** What are they gonna do, fire me? \[laughter\]

**Kevin Ball:** We have another question here...

**Audience member:** This is for James. I've been reading about event sourcing and talking about the stream processing... Your presentation caught my eye; you're talking about it doesn't make sense about request and response anymore, it's a lot streams now... So where do you see this in the future, about QUIC and Node.js?

**James Snell:** So if you look at a lot of the QUIC implementations that are out there, a lot of folks are focusing on the HP3 semantics, and QUIC just happens to be a part of it. When I took a look at it, for me HP3 is the least interesting part. That request-response - okay, we can do it; there's a reason why I'm focusing so much on this low-level streams API... It's because I think it enables a far greater set of use cases, and more interesting use cases for users.

Push streams in HTTP/2 were okay, but users couldn't make use of them. In the browser there's no API to actually accept those streams. Some of the implementers for QUIC are actually building a QUIC API for the browser. So when a server opens one of these streams to push data, you'll actually have an API in the browser where you can receive that, and make use of it. The types of applications you can build with that... I mean, you can imagine a complete replacement for web sockets, and in model 4 pushing data from the server... But not only that, peer-to-peer communication from browser to browser, in collaboration with talking to the server.

We saw the Dat presentation, and some of the reasons Protocol Labs is interested in it, because of IPFS. There are some very fascinating use cases around peer-to-peer streams (just streams, just data flows), without worrying about the request and response HP semantics. Like I said, for me that's by far the more interesting part, and I can't wait to see the applications people build with that piece.

**Audience member:** Hey. At some point, the Javascript spec was mentioned, and some web standards as well... For example, Node pushing for innovations, like streams, and then the web catching up with that; the other way around, like Fetch now implementing... Do you think we will reach a point of middle ground, where both web (the standards) and Node will push for innovation together, or it's much like the nature we have now?

**James Snell:** It's gonna be a balance. There are some use cases that apply to the browser, that don't apply to Node; there are some that apply to Node, that don't apply to the browser. So there's always going to be some balance, some set of APIs that are only relevant in one environment. Where it makes sense, though. It makes no sense whatsoever for Node to have a Node-specific API, and the browser to have its own way of doing things. So where it makes sense, we need to get convergence. We've started down that path.

URL - the new URL thing - when I implemented that, there was an argument that "Node is not a browser. We should never get a browser API in there." I said, "Oh well, here's URL." Then text encoder and text decoder - I did the basic implementation on that, and I literally got yelled at by a couple folks for doing that, but hey, it's there, and now you can do text encoding and decoding the same way in both environments.

So there's been some pushback... There are still people who disagree that the environments should come together, but I think we're making progress in the right direction in things like the modules implementation. Fetch is being looked at, although Fetch has a number of issues, even on the browser side implementation, that make it really difficult for us to implement in Node. So it's not just a matter of implementing the API, there's some fundamental issues that need to be addressed before we can do it... But we're moving in the right direction for getting that done.

**Ruben Bridgewater:** In general, there was a shift pretty much in how specs came together... Because if you look back a couple of years, Node was just one thing out there; and then there were a couple of browsers, and each browser was doing their thing as well. Then the ECMAScript committee TC39 - they started to actually push forward for a lot of new features more and more, and now Javascript is changing as a language as well, much faster than it used to do... And not only did that happen, but now we start to communicate much stronger together.

And also the V8 team - originally, Node used V8, but the V8 team did not collaborate together with Node.js. That has changed completely. We are having a very good relationship together, and we are sitting down together and discussing how things could be implemented, what makes sense and what doesn't. This is really huge for me, and I think it's a good change that we start to communicate with each other and discuss what use cases there are, and how to combine all these requirements.

**Kevin Ball:** We have another question here...

**Audience member:** Yeah. It's sort of long, I had to write it down. Sorry. It looks like the Node team works more like in a reactive way, instead of being proactive, and suggest changes and cool things to add... That's why I want to take advantage of having you folks here, and I want to ask you - are there any ongoing efforts towards closing that gap and having people on both teams? Is that something possible to have?

**Anna Henningsen:** Ruben already said a bit about that... So one big thing that happened is not only is V8 part of Node, but also Node is part of V8's CI. That has been the case for 1-2 years. It's pretty recent still. And that just makes us work together more closely inherently, because now they can't break Node without at least being aware of it.

There's a number of Node core contributors who sometimes -- so we do feel free to voice our visions with V8, and make our own contributions to V8, I think. And as Ruben said, we have occasional get-togethers or online meetings. For example, the Diagnostics summit for Node.js, where we talked about diagnostics - that was held at Google in Munich, with a lot of the V8 people who are working there. We just had a lot of in-depth discussions about what Node's needs are, and how V8 can help with that. So I think that's definitely improved, and is still improving.

**Ruben Bridgewater:** And I would say that there are members of the V8 team that are in the Node projects, a couple of them on the TSC, and there are Node contributors who are also V8 contributors. Relatively recently there's been a lot of cross-collaboration in the projects. Joyee is one in particular; she's actively contributing stuff to V8 on behalf of Node. So if there's things that we need in Node, she's there, helping to get that done. So the collaboration has improved significantly over the past couple of years.

**Kevin Ball:** Do we have other questions?

**Audience member:** \[00:29:32.13\] With the popularity of Rust, and now having Deno, do you think there's going to be a collaboration in the future between the two projects? Rust and Node.js, or Node and Deno?

**Anna Henningsen:** I wouldn't necessarily expect so, but it's good to have competition, right? \[laughter\] It drives change. Deno definitely has some things that I really wish Node would have. For example, source map support. That is something that we've been talking about with V8, and it's not entirely sure where that should end up, because in V8 it makes sense - every consumer of V8 potentially wants that... But Deno, they just did it. I'm kind of jealous of their ability to just do things, because they don't have to worry about backwards compatibility or arguing a lot, because they're just two people. \[laughs\]

I think it's good that they drive change. It's nice that Rust -- you can very easily write Node native add-ons in Rust now. All these things are pretty cool, but I don't think that Node.js core directly using Rust... At least in the near future. Maybe at some point.

**Ruben Bridgewater:** What Anna was just saying, as well as Node.js has a stability for the ecosystem. We cannot just break the ecosystem all the time. Deno is able to change something from one day to the other completely, and no one would complain, or at least not a lot of people, because it's still very experimental, very young, so they're still able to do a lot that is not possible in Node core. We have to decide how we implement changes in a way that we don't break the ecosystem. We tried very hard to do that. We have multiple tools to check on these things, and still, it's difficult sometimes. We even have breaking changes that we don't intend to do, \[unintelligible 00:31:56.23\] things like that... So that's the biggest difference, I would say.

**Kevin Ball:** Okay, the last speaker, because we've gotta wrap this a little...

**James Snell:** I will say, Rust is a fantastic language. If you haven't looked at it, it's well worth a look; it's just a beautiful language. When Ryan announced Deno, I had a reporter contact me and ask me if I was concerned about Deno in any way... I'm like "No, it's gonna do great." It's fantastic. It's fantastic to have those ideas out there, and anytime something like that comes up, or anytime a project gets forked or there's some competition for me, that's a reason to celebrate, because things are going to get better overall. It might be dramatic at first, but in the end everybody is going to have a better experience because of those new ideas that are coming to the surface, so it's fantastic.

**Kevin Ball:** Alright, so we are now out of time. I've been given the red flag, and then the extra flag saying "Wrap it up, wrap it up...!" First off, let's get a hand for our panelists. These guys are awesome, right?! \[audience applause\]

One quick plug to wrap - I mentioned this will be wrapped up as a podcast episode for JS Party. If you listen to podcasts and you don't yet listen to JS Party, you can find it on whatever podcast application you want. We have a conversation every week. One of the most amazing things about going to conferences is you get to hear amazing, brilliant people like this, but you can't always go to a conference every week. We have amazing, brilliant people like this talking on the podcast every week, so you can come and get some of that energy and that excitement and that access to expertise that maybe you don't have. That's why I love doing it - I get to hear from all these amazing people every week.

Check us out, JS Party, and you can find us at Changelog.com/jsparty on the web. Thank you again for having all of us down here in Colombia. How about a hand for the organizers, who have done such an amazing job?!
