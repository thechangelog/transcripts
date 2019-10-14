**Jerod Santo:** So this just in - according to InfoQ's latest programming language trends report, Elixir is on the list for the first time, and they're calling it "The Innovator Adoption Phase." Today I'm joined by two innovators, I suppose, the co-hosts of the Elixir Talk podcast, to talk all about Elixir. Chris and Desmond, what's up guys?

**Chris Bell:** Hey, how's it going?

**Desmond Bowe:** I consider myself more of an adopted than an innovator.

**Jerod Santo:** Well, it's the innovator/adopter, so you're both, I suppose... And I suppose I am as well, as I've been using Elixir for a few years now. We've covered it in the past on the show. This is kind of a catch-up, what's new and what's going on in the Elixir community... But before we get into the news and you guys' thoughts on the news, I'd love to learn how each of you came to the programming language, what excited you about Elixir and made you switch from whatever you were up to before?

**Chris Bell:** Yeah, so I've been writing Elixir full-time for about 4-5 years at this point actually. We adopted it previously at an agency we were working at. We were doing a lot of Ruby on Rails, and I think like so many people in the Elixir community, we kind of had an entry point like that. SO writing Rails apps, finding a lot of issues there, running those things in production, scale issues, just leaning on a lot of libraries, a lot of external systems to be able to build these complex applications on the web. Basically, I found Elixir and never looked back.

I have been writing probably on my fourth or fifth Elixir production application in that time as well. I gave some talks about it in the past as well, that you can go back and check out. Yeah, like the latest app – Elixir all the way... And I can't imagine doing anything else now, so... Yeah. Go on, Desmond.

**Desmond Bowe:** Similar story. I got into Elixir 4-5 years ago. I'd been doing Rails for a long time before that. I was consulting at the time, and had a side-project that I'd written in Rails, that needed WebSockets for some real-time update, and it turns out that Rails cannot do real-time WebSockets... And I thought "Alright, let's figure this out in 2015. I know that there's an answer for this", and I came across Elixir.

I bought the book, I spent a weekend digging into it, doing a sample project, and pretty quickly was like "This is the future. This is the way forward." So everything after that has been kind of along this path. I started going to the meetups, which were I think three people at the time, in New York, and then put on the EMPEX Conference several years ago, which is how I met Chris... And at this point I've probably worked on probably a dozen Elixir applications.

**Jerod Santo:** So what was it? What got you? What made you say "Oh, this is the one. This is my future. I couldn't imagine doing anything else"?

**Chris Bell:** \[00:04:13.28\] I think for me so much of that is to do with the language itself. Obviously, it comes a lot from the surrounding community and the ecosystem around it, but so much of it was about the kind of explicitness of the language, and just falling for functional programming in a really big way... And then just realizing, like -- I don't know if you both had this experience, of like doing a thing with Ruby where something is mutated somewhere, and you're like "Oh my god, what's actually happening here?!" And then you discover a different way to do it and you realize that mutation can be really harmful in certain cases... And I think Elixir felt like a really great antidote to that at the time.

So that was my hook - groking this concept of functional programming and just thinking like "Wow, this thing is great, and I can be so explicit with pattern-matching, and doing all these things in multiple function heads..." It just felt like such a nice way to write programs. And honestly, to this day, I still jump in, write some Elixir code, and I'm like "Huh. That felt good, still." It kind of hasn't lost its magic for me. I'm obviously very biased.

**Desmond Bowe:** Yeah... I was annoyed at first at the verbosity of having to pass all these arguments in to all the functions, and particularly when I was first working at the Phoenix controllers. It seemed awkward to always have to give it a connection object, instead of - like, in Rails you just write your instance variables and this thing is somewhere in the background. But I pretty quickly fell in love with case statements and pattern matching. It took me a minute to figure out quite how it worked, but then once I really got that down, it was like -- I remember it suddenly with fear and anxiety all the nested if statements that I would see in other programming languages, and trying to untangle "How do I get to this code path, how do I set up the conditions to see this tree of executions?" All of that has now disappeared, and the solutions to my problems are always very simple, which is pretty helpful when you're working on a complicated business domain.

So that was the hit, and then the thing that's kept it going has been digging into the technology and realizing this is a 30-year platform, that a lot of people have put a lot of time into making very robust, and having great tooling... So that's just been a joy to continue to work with.

**Jerod Santo:** That's interesting. I'm very similar with you on pattern matching. When that clicked for me, I was like "Oh, I don't wanna write code any other way." So when I do go back to Ruby, when I write Javascript, that's really the thing where I was like "I like the pipelining, but I could live without it, I could just chain", but the pattern-matching and the multiple function definitions that just call the one that matches the input coming in makes you write so much more confident code that I really, really appreciate that.

That being said, unlike you, Desmond, I have never dug into the underlying technology. I think it's a testament to the abstractions that I haven't had to... That being said, I've been writing Elixir for 3-4 years now, and we've been running it in production for Changelog.com for years, and I was recently on Full Stack Radio with Adam Wathan talking about that, and he asked me about OTP. It's not even a brain fart moment. I was kind of like "Wow, I can't even describe this. I know what it is, but I don't know it well enough to even tell Adam what it is..." So how do you guys describe OTP to the uninitiated?

**Desmond Bowe:** It's...

**Jerod Santo:** Harder than it sounds, isn't it?

**Desmond Bowe:** \[laughs\] It is harder than it sounds...!

**Jerod Santo:** Yes!

**Desmond Bowe:** I mean, I guess it's technically a separate collection of libraries and abstractions for building systems on top of very primitive building blocks. I don't really think of it as a separate thing outside of the language, because I don't think it's useful to think of it that way... But it's sort of the difference between saying "I have a very low-level abstraction of a process that I can send messages to", because the whole Erlang VM is built around the actor model. That is fundamentally baked into how it's constructed.

\[00:07:56.12\] Okay, I can send a message to a process. Interesting. What's cool is OTP has a slightly higher level of abstraction where you're not just dealing with a process, the process knows about other processes, and you can build what's called a supervision tree, such that when two processes are linked together and one crashes for some reason, the other knows about this and can restart it. Or it will know about that crash and take some other kind of action that you as the programmer specify.

So it gives you these tools for building very clear failure modes and very clear success modes, and so you can understand how your system can and should break down... And it's a very different way of thinking about your application in terms of, "Well, what if this goes wrong? How do we gracefully recover from that?"

**Jerod Santo:** Chris, anything to add, or maybe subtract, from what Desmond said there?

**Chris Bell:** No, I think that's a pretty good definition. I really like to think about OTP as almost like the Erlang standard library... But it just happens to have all of this kind of weird extra stuff in it, and a lot of that stuff is very, very useful for building highly-concurrent, very failure-tolerant and fault-tolerant systems... And that's really what we get to leverage day to day in Elixir.

I think a lot of people talk about the fact that as a language, Elixir is standing on the shoulders of Erlang, in a lot of ways... In the sense that we get this great runtime and then we can borrow and use all of the standard lib in there, including a lot of this OTP stuff as well. That just means that we get to use that abstraction layer that Desmond's talking about to build these very nice to work with, actor model-driven systems, where - to your point, a lot of the time that abstraction is hidden away from you, right? I'm sure the Changelog runs Phoenix, right? And Phoenix is written on top of all of these concurrency primitives and leveraging OTP... You just don't even need to worry about that as a user. And in fact, you get this highly-concurrent, very scalable system out of the box because of that... And I think that's really the advantage in the ecosystem here.

**Desmond Bowe:** I still don't think it's useful thinking about OTP as a separate thing, even though technically it is... Chris has a great way of describing the different rungs of the ladder of learning about Elixir. The first rung is syntax, and the second run is probably function composition. And then the third rung is when you get into OTP and concurrency constructs. So I think you can very successfully use the language without really digging into any of that. You're a great example, Jerod; you've been doing this for years.

**Jerod Santo:** I'm pretty positive of that being the case, and that's why I said - I think it's a testament to the abstractions more so than it is to me being a newb... Because I know the language very well, don't consider myself a newb, but -- I guess you'd consider it pedestrian needs... You know, I'm running a website, Phoenix is built on top of these things... I get the advantages, but I haven't -- I mean, I put things in my worker list... I can't remember the exact terminology there. I know I've interacted a little bit through configs, but that's as far as I've had to go, and I'm happily hanging out on rung two, I guess is my point.

**Chris Bell:** Yeah... You know what - I think that's good. That's really good, right? You've got this kind of boring technology that you've used and leveraged to build a very good platform... And honestly, so much of the work that I find myself doing in Elixir is kind of like that as well, sometimes... But then, the best thing is that when you need those other things, you've got that in your toolkit.

Let's say you need to run something concurrently, let's say you need to kick off a task and just run it in the background, or something, right? You don't have to reach for Sidekiq, or a MessageBus, or something like that... You can just spin up a task and literally just process that thing concurrently at the same time. All of that is part of the language, and I think the fact that we have those abstractions and those great primitives, and the fact that you don't always need it - these are both really good things, right? It means you can start somewhere, and then layer on complexity and build very complex systems over time, which -- I'm sure most of us are trying to build systems like that, not starting out with like "Oh my god, I'm gonna try and architect this crazy, really interactive system where you've got all of these different pieces communicating with each other at once." You're trying to start simple and build on top.

**Break:** \[00:12:09.00\]

**Jerod Santo:** So you two and the Elixir community are fresh off of ElixirConf. Lots moving, lots shaking, lots of excitement around LiveView. I wanna talk about that, but first let's talk about the finalization of Elixir and what that means for people who are either new to the language, or have been using it for a while.

**Chris Bell:** Yeah, so you're referring definitely to José Valim's keynote. José is the creator of Elixir, if you didn't know. He gave a keynote where he talked about the fact that the language has got to this point where they're not necessarily adding a ton of new features. It's very stable, it's mature at this point, and there's been this really great focus on stability and extensibility around the language... Which has meant that we're not reaching for a 2.0, where we're gonna make loads of breaking changes... And in fact, José said in his keynote that if there will be a 2.0, there's one breaking change that was in there from Elixir 1.0 that I think they messed up some of the implementation... And in hindsight, obviously, you wanna fix those kinds of things.

But I think it's a really, really good example of the fact that Elixir is very stable and is mature now, and we've got all of these parts and we've baked them into the language... When we started out, we didn't have date times in the language, we didn't have any calendar types, we didn't have any timezones... That's all in there now.

**Jerod Santo:** No timezones... Is that a feature? \[laughter\]

**Desmond Bowe:** Don't you wish...

**Jerod Santo:** We've eliminated them from reality.

**Chris Bell:** You know, it's one of those cases where it's like - they looked at the community, found a library, and then baked it in, and took some of the best parts of that abstraction in that library and then baked it into the language itself to remove a developer pain point. And we've kind of seen that time and time again, right? There were these really good building blocks, Elixir as a language itself is basically a language made from macros... So most of the things in the language were there, that you could write easily new parts of it without breaking something else already... And then we've just been able to keep building on top of that, with this really, really good focus on stability and extensibility... And I think it's proved to be very successful for a language as well, and for us as developers in the ecosystem.

**Desmond Bowe:** Yeah, it's kind of weird to think like "Oh, the language is done? I'm not gonna get any cool new features?!" But that's sort of this year's model syndrome. When I'm using a language, there's nothing that I wish I had, that I don't have. I don't look at any other languages and think "Oh, we really want that. That would make my Elixir experience much better."

It's just kind of frightening to have someone say "Well, really the onus is on you to build something interesting with this." The challenge is on us to build interesting applications, or on us to develop frameworks outside of the core language, that again, the language maintainers don't have to maintain, because it's not part of core... And they're driven by actual industry needs, actual use cases. I think that's a much better way of approaching problems. It's just frightening at first to have that kind of personal responsibility.

**Chris Bell:** \[00:16:10.15\] Yeah. I just wanna add, as well - I think there's this narrative around Elixir where people are like "The deployment story is really hard." And I'm sure you might have experienced this deploying the Changelog as well... And I think actually now you've seen releases become part of Elixir in 1.9 as well... As an example of that idea of "Let's find the pain points, let's not break anything. Let's just give you a better developer experience and fix one of those pain points, and do it in the actual core language itself."

**Jerod Santo:** I think it shows also just the transition to a larger audience, or maybe an opportunity for the mass adoption at this point. Because if we go back to the InfoQ article, it's just now being considered innovator/adopters. The other sections in that graph - they have early adopters, they have early majority, and late majority; these are the big waves, of tons of people. The early majority have things like Swift, Python, TypeScript; late majority - PHP, Ruby, Javascript. Now, we could probably spend some time talking about what we think about those categorizations, but the fact is that the stability at the language level provides opportunity for people who are not the innovator types, they don't wanna deal with massive, breaking API changes all the time, to say "Hey, this is ready for you now." And it doesn't mean there's not gonna be any new things and a lack of innovation is gonna happen, but there's just a certain level of stability which you can rely upon.

**Chris Bell:** Definitely. And we've seen that now in the adoption by a lot of bigger companies, as well. There is pager duty now using Elixir at scale to replace some of their Rails components. You've got PepsiCo e-commerce, you've got Brex, you've got all of these very large, well-funded companies who are now adopting the language and building sophisticated applications on top of it. And I think it's a great sign of the fact that we're not in this niche community anymore. Elixir is actually out there in the mainstream, powering big applications at scale, and it's better than ever.

I think if there's people in 2019 looking around for what to adopt, you should long and hard at Elixir. As we said previously, it's based on this 30-year-old piece of technology, so you're getting this battle-tested, hardened and also mature and scalable language out of the box... And I think - can you do much better than that today...?

**Desmond Bowe:** Well, I think another question is, "Alright, cool technology, bro. What do I do with it? How can I get a job?" That's what it often comes down to, is "How do I get a job?" And two years ago -- I would say even two years ago, there were just a handful of companies that you would have heard of that were hiring. Something has changed recently. I don't know what it is, I don't know if it's something in the water or we've just hit some inflection point, but I was at the ElixirConf a couple weeks ago and this guy came up to me - because I've been trying to help some people find Elixir jobs... And he says "Alright, I'm at a stealth mode startup, and we're trying to hire people." I said "Cool. How big is the team? How many people are you trying to hire?" He said "I want 20 people by the end of this year." I said, "Oh..." It's come to this, has it? Companies that spring up.

I'm based in L.A, I run the meetup here... I'm pretty tied into what's going on. Companies are often popping up on the radar. I'd say in the last six months 3 or 4 companies have emerged from seemingly nothing, with teams of 4 and 5 Elixir developers. When that starts happening, when companies are showing up under your nose, in your backyard, that you've never heard of, with teams (it's not just one or two people), then something's happening and the jobs are there. It's cool. I think that's the piece... Because everyone says "Well, how do I find people? How do I hire people, and how do I get a job?"

**Jerod Santo:** \[00:19:53.17\] Let's turn our focus now to probably what's the most intriguing thing going on, at least in the Phoenix world, Phoenix being the most popular web tool in the Elixir ecosystem. Chris McCord and the team have been working on a thing called LiveView, which from my vantage point has people interested and intrigued and watching, even who are not into Elixir, like "Okay, what are they doing over there? How is this gonna work?", and talked about much at ElixirConf. Now, I had not heard your latest episode, 154, of Elixir Talk Podcast, but I did read the synopsis, and it sounds like y'all disagree on LiveView, so there's an active debate on that episode, which I'm looking forward to hearing... Maybe we can get a little taste of that and what you two think about LiveView, but first, somebody tee it up with what is Phoenix LiveView and why is everybody so excited - or at least interested - in what's going on there?

**Desmond Bowe:** Sure. LiveView is a way to write dynamic templates, with real-time interaction, on the server. So instead of having a client-side framework that manages interactive DOM updates and pinging your server to make changes, you do that all in your Phoenix app, on the server, with the familiar EEx templating language; and it's a slightly different EEx templating language, because they do some magic under the hood to track changes in your data, but behind the scenes it transparently pushes the data out to the client in a very efficient way. So what does this mean? Well, it means it's really easy to write templates; you don't have to drag in a large framework, you don't have to spend a lot of time writing dozens of lines of Javascript. You can instead write - and there are a bunch of great examples out there, of implementations of things like search ahead autocomplete, paging, people have written games in ten lines of code. I mean, they don't write games in ten lines of code...

**Jerod Santo:** Yeah, demo games.

**Desmond Bowe:** The pitch is it's a very concise way to solve these very common problems, and it's really attractive to people who need a little bit of interactivity, a little bit of dynamic presentation on the front-end, and want an easy way to do that. And there's still room for frameworks like React or Vue if you are writing a very heavy tool, with a lot of interactivity rules. That's still out there. What LiveView does is it expands the circle of what you can do with just "server-side" technologies.

**Chris Bell:** Yeah, I'll just add to that... So you've basically got this persistent WebSocket open from the client to the server, where the user's session on the server is always guaranteed to be there effectively, and then you can run updates to that user and push them down the WebSocket. So you're basically writing a client-side app, seemingly-magically using server-side technologies.

Remember Turbolinks and those kinds of ideas where you're pushing whole templates and replacing whole bits...

**Jerod Santo:** We use Turbolinks, by the way.

**Chris Bell:** You do - oh, awesome. Yeah, so kind of a similar concept, except for the fact that you're using WebSockets as a transport layer, and then you're relying on a lot of the concurrency primitives that Elixir gives you in order to model basically every user session as a process.

**Jerod Santo:** Yeah, so the open question that we have here around Changelog, which Nick Janetakis in our Slack has been prodding me to try out, is like "Can we completely replace our Turbolinks with LiveView, and just cut completely over and have a lot of the benefits without some of the drawbacks of that?"

**Chris Bell:** Are you using that for pagination, and things like that?

**Jerod Santo:** Yeah, we use it for all navigation, basically.

**Chris Bell:** Yeah, then that's a great place to basically do it. You can effectively say that now the state of the page is managed by a LiveView process. Let's say on your feed of podcasts you wanna load the next 20 or 30 - that can all be managed in LiveView. You just write some server-side templates, exactly like what you're used to writing if you're rendering Phoenix anyway; you just use live EEX instead of regular EEX, and boom, everything can kind of just work.

**Desmond Bowe:** And what's cool about that is it's more than just replacing Javascript with Elixir, which I think is a win, and Chris and I will disagree about for quite a while...

**Jerod Santo:** Okay... There's a preview of the debate right there...

**Desmond Bowe:** \[00:24:02.02\] \[laughs\] When you let LiveView deal with this stuff, you automatically eliminate an entire host of questions around things like "Well, what should the route be? What's the data format that I'm sending over the wire? What does this JSON payload look like?" All that is just swept away and managed for you in LiveView... And it's really nice not to have to think about these questions that are really incidental to the problem of "I just want fresh data on the screen. I don't really care what endpoint I'm hitting." Now you don't have to.

They've done a lot of great work to be very efficient about what does get sent over the wire. They don't send over a whole template when something changes; they really just send over the tiny piece of data that has changed... And it's really interesting to look at the inspector and see what's coming over the wire, and how they segregate dynamic versus static parts of the template... But the bottom line is I think it's more efficient than a lot of Javascript frameworks. Unless you're doing protobuf stuff, it's a very clean way to send things over the wire.

**Chris Bell:** Absolutely. And honestly - this is my biggest complaint - I don't know if you can compare these things one for one. I think that LiveView is a great thing to reach for if you've got a sprinkling of Javascript on an app, like what you're talking about here on the Changelog.

**Jerod Santo:** Yes, that's exactly what we have.

**Chris Bell:** Yeah, exactly. And you know, I'm sure we've all written server-ended apps where you layer in that bit of Javascript, and it feels like the Javascript is the weakling, and sometimes you have to say like "Well, now I need even more interactive Javascript, and I need to reach for React, but now I've got this weird rendering boundary between React and your server-ended thing." And LiveView feels like a great replacement for that, where you're actually saying "Now I'm gonna keep things in the technology that I'm using for the rest of it, I'm going to write everything in this kind of server-rendered mentality, and just keep a WebSocket open." That's great. That's a really good pitch for LiveView in my mind. But I will say, I cannot see everyone replacing entire applications, let's say like a Google Docs or something like that, entirely in LiveView.

**Jerod Santo:** Because...

**Chris Bell:** Because inherently, you need very stateful client applications sometimes, and sometimes the communication cost of going back to the server and doing a roundtrip, even over a WebSocket, is gonna be too high. And there are cases where LiveView is just not a good fit. If you have extremely highly interactive, very stateful apps, let's say like you're doing drag and drop uploads, and very complex kind of moving things around, and it's a very UI-heavy web application.

I think what we're all trying to aspire to build on the clients these days - I just don't think LiveView is gonna replace this plethora of Javascript that now exists, and this very mature ecosystem, and all of these tools - you're basically foregoing all of that.

**Jerod Santo:** Tooling, yeah.

**Chris Bell:** Yeah. You wanna use some React UI library - sorry, you're out of luck. You're basically gonna be rewriting that. That's my biggest issue here; I would like us to see as a community, instead of pushing up and saying "Don't write Javascript", what would it look like to do more integration and make it easier to build these applications, maybe leveraging some more Alexa pieces to it.

**Desmond Bowe:** But I think there is a fundamental way to writing this stuff in Elixir, with a lot of things taken care of for you. I mean, am I gonna write Google Docs in LiveView? Probably not, but someone already wrote Google Docs, so I don't have to worry about that.

There's a great competition that just closed called Phoenix Frenzy, where it's like "What can you do? Show us the craziest LiveView stuff that's out there?" And people have written Kanban boards with LiveView, with drag-and-drop swim lanes, with different cards, and everything... I think file uploading is next on their roadmap that's a big thing to figure out.

When they first released this a year ago, they said it's probably not a good fit for chat, and it's probably not a good fit for games, and here we are a year later and people have written a ton of chat clients and a ton of games in this. So I look at it as one of these tools that has a ton of potential, and in the landscape of right now maybe it doesn't make sense to use this technology versus that... But when you see where it's going, people are just gonna keep pushing what this can do, because the benefits of being able to express problems in Elixir that are closely tied to the rest of your server, it's easy to broadcast updates to these processes, it's easy to reason about them... I think that will begin to overpower the benefit of a "stable" Javascript ecosystem, which I think is a total oxymoron.

**Break:** \[00:28:28.14\]

**Jerod Santo:** Another interesting thing happening in the Elixir world is called Lumen, which is a WebAssembly target. Guys, tell us what's going on with WASM.

**Chris Bell:** Yeah, so this is the big surprise at ElixirConf, I would say.

**Desmond Bowe:** The big thing...

**Chris Bell:** Yeah, huge announcement for the Elixir community. Basically, making Elixir have a WASM compile-time target. What does that mean? Why Elixir and why WASM? Basically, Lumen is all about getting Elixir code to work in the browser. Compiling down to WebAssembly, and that WebAssembly then executing in the browser environment. I mean, there is so much to talk about here, and it's kind of crazy what they've been doing. They've basically foregone the existing runtime which we've talked about on the show already, which is the BEAM, in order to basically make a new compiler for Elixir that then generates are WebAssembly code. Basically, rewriting a lot of the internals of the BEAM in Rust, and then leveraging a lot of Rust existing WASM crates in order to produce this target where you can compile it and run it. Basically, you're able to do a lot of the process model in this WebAssembly environment through them rewriting effectively the scheduler.

**Jerod Santo:** Hm!

**Chris Bell:** Yeah, it's really out there, by the way... And this is super-early days of this technology, but I just wanna add a few things. First of all, it's really awesome to see Elixir pushing to new places. Whether that means it's gonna be there, I don't know, but basically, every other language at this point has their skin in the game in this WASM space.

**Jerod Santo:** Absolutely.

**Chris Bell:** So I think the fact that Elixir can be there, or might be there, could be a really good thing for us as a community. Second, as a technical achievement, this is incredible. They've basically written Elixir to run -- the Elixir code that you know and you have written everywhere, basically the objective is just to get that running in your browser via WASM. That's mind-blowing, honestly. So I think as a technical achievement, this thing is huge. And then I think this could be the beginning of introducing some really, really interesting actor model processes to components, effectively. By that, what I mean is right now there's an example of this in this other library called Scenic, which is basically using the actor model to model things like buttons, and UI components.

\[00:31:58.01\] We could effectively start to model -- imagine your React component with all these fault-tolerance guarantees like what we were talking about, that exist in the BEAM VM effectively now via processes and OTP.

We could start to think about having lots of message passing between components, and it can be a very different way to write web applications, and that to me is like -- that's kind of crazy as well. I'm excited.

**Desmond Bowe:** Just to break that down a bit - imagine you have your UI that's broken up into several components, and one component breaks because your data is funky, or whatever... The rest of it keeps working, and you have a very localized, like "Oh, we can't show this piece over here", but the rest of the app looks fine. That's a very interesting failure case that we don't see that often.

**Chris Bell:** Or restarts. If we've got supervisors, we've got restart strategies. So we can say "That bit of the UI will boot back up into its previous state, or some known good state."

**Chris Bell:** I can't think of anyone else thinking about writing web applications like that. I could be wrong, I haven't done that much research into that, but... \[laughter\] I'm assuming that there aren't that many people thinking about it, so that could be really cool, I think.

**Jerod Santo:** Most of us are still at the phase where we put a semicolon in the wrong place and our entire web page no longer runs Javascript, so... I think this is a step beyond. So what's the bear case? Maybe this never comes together and you can ship real code, or what?

**Chris Bell:** Yeah, I think they have a monumental task in front of them, basically. They've gotta rewrite a lot of the low-level implementation for the BEAM, effectively. Every call that you have, that then goes down and executes Erlang code, they've now gotta rewrite in Rust. Basically, on the GitHub issues page there's a ton of issues for Lumen, where it's just like, implement every function in the map module to work with Rust, right? And that's really the task in front of them. I think they've proved out the technical feasibility of this thing, which is a huge milestone just on its own. And now you've gotta see this thing mature, you've gotta get people to adopt it, someone's gotta write some component web framework for this thing as well, so... It's a long road. But yeah, let's keep seeing where it goes.

**Desmond Bowe:** And beyond just use in the web, it's interesting because now you have a compiler that will deliver a single executable. And something that people have complained about in the past with Elixir releases is that deployment is a headache. And as mentioned earlier, that story has gotten much better, but it's still not the Go story or the Java story of "Give me the executable, drop it on the server, call it a day." This will do that. And there are some trade-offs it makes around things like you no longer have hot code reloading, which I am personally a fan of, but it turns out a lot of people don't use this feature; so they're saying "If we get rid of that, then we can do this." I think there's a lot of potential there, if you're saying "Alright, if you compile to this target, then you get your executable, and you too can call it a day."

**Chris Bell:** And then I would say as well, it allows us to think about running Elixir on places where we haven't been able to run it. Cloudflare is a huge place where they're adopting WASM left, right and center, and running WASM at the edge. And WASM now is a highly-optimized runtime. It's having so much time poured into it. So if we can leverage that and we can then get Elixir running in places like on the edge, and doing some really interesting things with processes there - you know, this could be a whole other place where the language can be rolled out, and it could be a whole new adoption story for people getting into it.

**Jerod Santo:** \[00:35:27.22\] Exciting times indeed in the Elixir community. Let's talk a little bit as we close up here about the community itself - where it happens, where people get together. We have conferences, I know you guys are running a couple of conferences called EMPEX. Tell us about what the Elixir community looks like in terms of places to go, people to talk about; I know Elixir Forum is a thing, so... Help people understand where community happens.

**Desmond Bowe:** Honestly, I think the first place is at your local meetup. There's a great Slack channel, there's (as you say) an Elixir Forum where people get together... It's a surprisingly friendly community. I don't know why it's surprising, but it's a very friendly community. I guess surprising in the context of like programming communities.

**Jerod Santo:** Yes... I will vouch for that. I've been on the Elixir Forum quite a bit, and I'm always impressed by the quality of answers and really the niceness of people on there.

**Desmond Bowe:** Yeah, but I think community happens in person, and you get cool projects when you meet up with someone, you get jobs when you talk to people in your hometown... So I would encourage people listening to see if there's one near you (there probably is). I'm one of the organizers of the Elixir L.A. meetup, and it's a great place to get involved and to get started. Outside of that, as Jerod mentioned, there's a bunch of regional conferences, in particular the ones that Chris and I work on, which are called EMPEX.

I will quickly plug the upcoming EMPEX L.A, which is happening in Los Angeles on Saturday, February 8th, 2020. I believe when this episode airs there will still be another week of the CFP open. So if you've been listening to this show, you happen to have a talk, please jump on our website, which is empex.co (I believe that will be in the notes), and submit a talk and check that out.

And then... The podcast. Can we talk about our podcast now? Is it an appropriate time?

**Jerod Santo:** \[laughs\] Yes, we were talking about it before the show, that there's a bevy of Elixir-focused podcasts, which I think is a sign of strength in any programming community. You have Elixir Talk, you have Elixir Outlaws, Elixir Mix, Elixir Fountain... Lots of Elixir going on. And I suppose the best one of the bunch is -- is that Elixir Talk, guys? What do you think?

**Chris Bell:** I don't wanna say that...

**Jerod Santo:** \[laughs\]

**Chris Bell:** Desmond and I are co-hosts on Elixir Talk, and we've been running that for about a year-and-a-half.

**Desmond Bowe:** Two years, yeah.

**Chris Bell:** Wow, okay. There we go.

**Jerod Santo:** Time flies.

**Chris Bell:** I would say if you are looking for some more Elixir content - we have a lot of guests on the show, we focus sometimes on beginners, we talk about some of the libraries a bit more in-depth... Yeah, check us out. We'd love to have more listeners, obviously, and we'd love to hear from more people... So yeah, get involved.

**Desmond Bowe:** A friendly neighborhood technical Elixir podcast.

**Jerod Santo:** There you go. Well, Desmond, Chris, thanks so much for joining us today, catching us up on all things Elixir. I'm excited about LiveView, I'm excited about Lumen, which I didn't even know I was excited about, until just now.

As always, listeners, thanks for joining us. All links, as Desmond referenced, are in the show notes for you to get access to quickly. We appreciate you listening, and we'll see you next time.

**Desmond Bowe:** Keep Elixiring! \[laughter\]
