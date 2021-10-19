**Kevin Ball:** Hello, JS Party people, and welcome to this week's JS Party. I am Kball, I will be your MC this week. I am joined both by some of my favorite panelists - they're all my favorites - who I have not seen in a little while... Let me welcome them first, and then introduce you to our amazing guest. So first off, welcome, Amal. How are you doing?

**Amal Hussein:** Hey, everyone.

**Kevin Ball:** And Feross. Long time, no see, but I'm so excited to have you on.

**Feross Aboukhadijeh:** Same! Excited to be here.

**Kevin Ball:** Next let me introduce our guest for the week. We have a special guest today... Introducing Jenn Creighton. Jenn, hello.

**Jenn Creighton:** Hi, everyone! I'm glad to be here.

**Kevin Ball:** Awesome. So let's actually get started a little bit with exploring who you are, Jenn. Do you wanna give us a quick "Jenn Creighton in 30 seconds"?

**Jenn Creighton:** The too-long-didn't-read - I am an open source engineer at Apollo GraphQL, working very specifically on Apollo Client. That's pretty much my life right now. I work in open source, and that has consumed me. I have pink hair, very much enjoying that... Oh, and I also run my own podcast called Single-threaded, that just wrapped its first little mini-season.

**Kevin Ball:** Awesome. I love the hair, by the way. It looks great. And if anybody is listening but not looking, check out the YouTube stream of this; you can see, it's matching Amal's typical looks, though Amal is not overshadowing Jenn today \[unintelligible 00:03:38.15\]

Awesome. I know a lot of folks are interested in this idea of working in open source... Do you wanna actually talk a little bit about how you got into that?

**Jenn Creighton:** Yes. I kind of fell into it by accident, which is to say that I was already working with open source technologies at my job. I worked with React for 5-6 years, and decided that I wanted to speak at events about React, and sort of brought myself into open source that way... And also, occasionally, you could find me in the middle of the night kind of like scrolling through the React codebase, trying to understand how things worked. I was just curious about what was going on.

\[04:25\] And then Apollo reached out to me with this opportunity and I was like "Getting paid to do open source? Yeah, I'm gonna try that out. I'm gonna see what that is like." It's a wild ride... \[laughs\] It's a whole new thing from product engineering.

**Kevin Ball:** Absolutely, absolutely. So in that context, are you primarily doing coding, or are you managing community? I know when I was paid to work on open source it was like a whole lot of things that maybe I hadn't even thought about as part of engineering prior to getting involved.

**Jenn Creighton:** My time right now is mostly in the actual codebase, looking through issues, checking out reproductions, figuring out what we actually should be fixing, which is sometimes not the thing that people ask you to do in issues... So those types of things, as well as working on new features. I do some community work still. I just hosted Apollo GraphQL Summit with my co-worker Alan. We both tag-teamed that. And occasionally, in other respects I have to do events like that, or answer community questions, or be available for those types of things... So it's a mix of both.

**Amal Hussein:** There's something really daunting about doing your work in the open, and there's also something super-liberating at the same time, because it's like "Hey--" Nothing to to forget; there's this trail of easy access, I think, which is very liberating, and can be very productive, because you're able to work with people across lots of different boundaries... But yeah, the transition of doing open source work full-time - that's gotta be pretty fun.

**Jenn Creighton:** Yeah, there's no hiding your code... If you really want someone not to see it, you can't push it out. I think that's the rule. If you're not ready for anyone to look at it, don't push it out. But that's all you've got.

**Kevin Ball:** Absolutely. Feross, you've done a lot of your work in the open source world as well, right?

**Feross Aboukhadijeh:** Yup, pretty much most of my code is online... And I remember feeling the same way at first. Actually, I remember getting interested in open source also in a similar vein to Jenn, but it was jQuery that I got really interested in... And I remember watching some videos on YouTube where Paul Irish was explaining things that he learned from reading the jQuery codebase... And I remember after I saw that I was like "Wow, this is peeling behind, to see how the sausage is made", and it was really cool. Then I wanted to be cool enough to do open source, too. That was kind of how I got started, so it totally sounds familiar.

**Jenn Creighton:** Oh, yeah. I actually remember Paul Irish going through the jQuery source code and explaining why things worked the way they did, and that was really cool.

**Feross Aboukhadijeh:** Yeah, so many browser hacks... But there was a reason for everything. It was nice to actually know why you were seeing all these arcane spells... Yeah, just explaining how this stuff works.

**Kevin Ball:** That's a random tangent, but I love the metaphor "software is magic." It's got all of the same things of like bizarre incantations, very strange lines between what is easy and what is hard, and... I don't know, the only question in my mind is "Is it better represented as black magic, or just magic in general?"

**Jenn Creighton:** \[07:45\] I think of it as -- there's some shows that have magic in them, but they take a scientific approach to it, where they're like "Actually, this is all about just manipulating molecules, depending on how you do X, Y and Z..." So it's not magic in this sense of unknown, how it's working; you actually do know how it's working. And that is really close to code. Because if you really fundamentally break it down to the smallest possible unit, you're gonna figure out how the code works. It's not ultimately something you can't understand... But yeah, I love "Code is magic", too.

**Kevin Ball:** Totally agree. The best magic systems have their internal logic, and it's totally sealed up, and it works, and it's bizarre if you don't understand that internal logic. \[laughter\]

**Amal Hussein:** One thing I've learned from peering through the React codebase is a lot about scheduling... I think it's interesting how different libraries have their own little hard problems that they're trying to solve, and it's like, you really wanna learn about complex scheduling with just JavaScript \[unintelligible 00:08:45.07\] Go look in the React codebase. Lots of requestIdleCallbacks and more... \[laughs\] It's fun.

**Kevin Ball:** So let's move a little bit more into specifically Apollo, because it's something that -- I know GraphQL in general has exploded in popularity, and it's something we've talked about a little bit here... Apollo seems to be the frontrunner of that movement, in a lot of ways, but I don't think we've dug deep into it. So can you kind of flesh out for us, just starting with what is Apollo? When you say "I worked in Apollo", there's so many things that could mean. What do you think of?

**Jenn Creighton:** Right. For me, I tend to -- if I'm talking to an engineer, I caveat it with "I work on Apollo Client." So I work on the web caching system. That's what I work on. Because there are so many different things that Apollo does in this space... From your server, to your client, to the paid products that we offer for you to handle your schema and federation... There's just a whole host of things that we do. We're just like a full-service GraphQL frontrunner. If you're working with GraphQL and you wanna make it easy on your engineers, you tend to go with Apollo.

**Kevin Ball:** That makes sense. So you're involved specifically with the client.

**Jenn Creighton:** Yes.

**Kevin Ball:** And is that co-owned with the DevTools, or those are separate?

**Jenn Creighton:** When you say the DevTools, do you mean the Chrome extension?

**Kevin Ball:** Yeah.

**Jenn Creighton:** Yeah. My first project at Apollo was to completely rewrite those DevTools, which I had never written a Chrome browser extension before... And - oh, that's not fun. That's not a fun time. That's a system that feels terrible to work in.

**Kevin Ball:** Do you wanna expand on that a little bit? \[laughter\] Because both the beauty and the pain of browser extensions today is they're all web technologies...

**Jenn Creighton:** Right.

**Kevin Ball:** ...but with obscure APIs and permissions that you have to have in mind.

**Jenn Creighton:** Yeah, so ultimately, if you're using the DevTools, which are on Chrome and Firefox, you're ultimately using a React application. That's all built as a simple React web application. What's not simple about working with the browser extension is that you're dealing with sandboxed environments... And this makes sense, for security reasons. You can't just run any code you want on anyone's web page. That's obviously very clearly a security concern. So they sandbox all the environments, and you have to push messages back and forth using their API... Which is not well-documented, sometimes documented erroneously... Sometimes they just straight up tell you things are available when they are not... And you have to get, like you said, specific permissions to use specific things.

If you wanna interact with the tab system, you have to kind of put that on a list of saying "I wanna use the tab system", and then you can use it, and then Chrome extensions always go through a review process. So it's like a very laborious process, and you're just trying to deal with passing messages back and forth all over the place. It's kind of a nightmare.

\[12:05\] Also, once you get the thing actually working, that doesn't mean that it's gonna work on everyone's browser with everyone's system, because you just never know what they're dealing with on their end of their setup... So we just get a lot of issues that are like "Well, this doesn't work. I need to know a little bit more about your setup to fix that for you. I will fix it for you, but you've gotta tell me more than it just doesn't work."

**Amal Hussein:** I feel like anytime software at scale is outside of the standards process, it just gets into this weird world... But I feel like browser extensions are so due for just better standardization, so developers don't go insane...

**Kevin Ball:** Oh, but it's so much better than it used to be...

**Amal Hussein:** Yeah, I believe you... \[laughter\]

**Kevin Ball:** The Chrome extensions were just this massive step forward from Firefox extensions where you're coding stuff in XML things, and...

**Amal Hussein:** Oh, my God...

**Kevin Ball:** Yeah, it was a disaster. But I do recall -- it's been a few years, so it may have changed, but I do recall a very large amount of the time I spent on browser extensions, in building abstractions layers on top of the message passing, so that I could deal with all the different various ways that that interacted with permissions; it was different in different ways.

**Jenn Creighton:** Yeah, that was the first thing I had to do, I had to build an abstraction that was gonna clean up what messages were being passed and what they were being passed to... And there's some historical way that you build certain things in the extensions, where they call things a background page, but also you would have like -- these aren't in the docs, by the way. It's just a backend system that's not a backend, and... It never made sense... So I just kind of redid it all.

Folder structures, as it turns out, kind of matter, and so putting everything that actually lives in the tab space under the tab folder actually makes sense, as opposed to everything that lives in the DevTools space, as opposed to everything that actually does live in the background; it turns out that's helpful for your mental model.

**Break:** \[14:15\]

**Kevin Ball:** So let's hop back into things and talk about Apollo Client. Jenn, can you explain a little bit, what is the role that the client plays? If I'm somebody coming in who doesn't know anything about the GraphQL ecosystem, where should I put this in my mental map of how I'm gonna start using this thing?

**Jenn Creighton:** \[15:56\] If you ever built an application with React and Redux, you would swap out Redux for Apollo Client when you're working with GraphQL. Apollo Client is just made to work with caching your GraphQL responses on the frontend, and allowing you to do things on the frontend with those GraphQL responses. That would be really difficult for you to do with another library. Because your data is now in a graph model, you actually need a caching strategy that understands that it's a graph model, and how to store those things properly. So that's what we do.

**Kevin Ball:** Got it. And that actually fits interestingly with this idea of GraphQL as an evolution of state management. On the frontend we've gone through this evolution of how we think about state, and looking at state in terms of "Does it make sense to be done on the component, versus some sort of centralized state manager, and all these different pieces?" GraphQL, in some ways is - or at least I think of it as - extending that state model in a way that maps to our backend representation a little bit more, so that we've got a unified state model for the communication between backend and frontend, but we don't have to do that mapping all in our frontend.

**Jenn Creighton:** Let's see if anyone else wants to jump in... You can also ask questions.

**Amal Hussein:** Yeah. There's this shift, I think, that was made with GraphQL, but I consider it to be very much like a milestone, noteworthy kind of shift - it's pretty pivotal - where folks were like "You know, REST - we're done with you. You don't actually work for the new world. These tiny devices and all these different screens and contexts that we need to support... We can't be making all these API calls to stitch this data together in my clients, and I can't support different versions of APIs for mobile."

It's been really interesting to watch that shift. And then to see this evolution with Apollo, and the services around this world... What's it like to have this open source standard and really be the lead implementation of this standard...? But y'all are doing so much more than just providing clients; it's just like a full-service. There's a lot to manage. I'm curious what's that like, that ecosystem of Apollo things that's growing.

**Jenn Creighton:** It's really interesting, because you could see it as the leaders of Apollo sort of saw that GraphQL was a good use case and they should jump on board and create some things around it and build a company about it... But the truth is at the very top they just very deeply believe that GraphQL is a really great technology, and they wanted to make working with it something that companies could adopt more easily.

GraphQL, while it is very popular in concept, isn't actually adopted in a lot of places yet. A lot of places are still using REST APIs. And in some cases, that's what you should be doing; that's fine. But if your data actually needs to act as a graph, you are well served by GraphQL, for obvious reasons... As well as if you have this problem that you've just mentioned, of your clients needing different things at different times.

It turns out being able to push that on to the client team to decide what they're actually going to pull out of your graph is a really great idea, and really helpful, and really lovely to work with, as well as a strong typing system, as well as just looking more declarative in what you're getting. My biggest pain as a frontend engineer was always figuring out what the REST API was actually doing, and why it was giving me things. With GraphQL you can even just say like "Hey, by the way, this still is deprecated." That's a wild concept to me as a frontend engineer, that "Oh, I could look at this and just tell that it's deprecated", instead of a backend engineer being like "Oh, no, you don't wanna use that. You actually wanna use this other thing that we added later", which almost always happens.

**Kevin Ball:** And your tooling can tell you, because it's declared.

**Jenn Creighton:** \[20:00\] Yes...! There's so much tooling you can do with GraphQL that it's just amazing. It's a space that's very rapidly evolving at Apollo about what we wanna push the graph to do, what we want companies to be able to do with their graph... You get into this with Apollo Federation, which we can definitely talk about; it's very cool. And being at a company that's at a forefront of that, you are on just like a wild rollercoaster ride. You're just learning a lot. I've learned so much in the past year at Apollo... Because to be honest, I wasn't working with GraphQL before I joined the company, and I had to really amp up all my knowledge about this in a year... And still, every day, someone says something else that I'm like "Oh, what? What are we doing? Why are we doing it? Oh, my God... What? You can do that?" It's great.

**Amal Hussein:** You're the second person I know who's joined Apollo in the past year who didn't really use GraphQL... It's a trend that -- I love it, that they're recruiting folks that are not necessarily users.

**Jenn Creighton:** Well, like I said, it's popular in concept, but not fully adopted... So if we didn't, we would be limiting our hiring pool. You would not have hired me. I'm a pretty damn good engineer; that would have been a bad idea. I can learn things... You can learn GraphQL, it's cool. You can learn on the job. You're literally surrounded by experts at Apollo, so you can't help but learn it, by osmosis even.

**Feross Aboukhadijeh:** I have a question about that - the part about it being popular in concept, but less so in practice... So why do you think that is? And related to that, I guess - I started a company recently, and it's just me and one other engineer right now... And I'm wondering if it's too early for us to use something like GraphQL. It sounds like the benefits are coordination between different teams, and right now we don't really have different teams; we just have the team of the two of us. So yeah, is it like a thing that you actually see people using from the very beginning, your project? I imagine some people are, but is that advisable? Is there a lot of overhead or boilerplate, extra things you need to do over what you would need to do to just quickly write an express route for a REST endpoint that you could do in a couple lines? Is that the reason why you think it's more that people like the idea? What are your thoughts?

**Jenn Creighton:** So GraphQL isn't the newest thing on the block, but it is newer... So people are still actually grasping the concept of what GraphQL actually is... And I remember when I learned about it the first time, I really didn't truly understand what was going on. It just seemed like - going back to an earlier conversation - just magic, and I didn't understand what was under the hood that was making it work together... I was like, people just keep telling me "Oh, you just use GraphQL and you can grab whatever you want", and I was like "But how? Please tell me." Now that I have a better conceptual model about it, it's different.

So one, just wrapping your brain around how different this is from hitting your REST APIs. And then two, have you ever tried to make a change at an org after things had been built? It's hard. So if GraphQL is of interest to you - and I've worked at multiple companies that the engineering team wanted to adopt GraphQL, but figuring out how to do it and how to get everyone on board with what we were gonna do was really difficult... And that was at a startup size, so I imagine at a larger org it's even more difficult to do.

I would say if you wanna spin up an express API real quick and have some data, versus invest in GraphQL - okay, that's fine. It's cool. It really just depends on your trade-offs. And if you early on have a really great use case for the fact that your data is gonna be really graph-heavy - yeah, you probably should just go ahead in early. But if you don't - okay, build your express API. Maybe try out GraphQL at some point and see if it gives you anything that you really want. I mean, it does have some really nice features to it, but... By no means does everyone have to adopt GraphQL at all times. Not even other people at Apollo believe this, so...

**Kevin Ball:** \[24:13\] To jump in a little bit on some of those trade-offs... Some of the things that we've found at Humu where I'm working, where we are using GraphQL, but we do have some REST endpoints as well... So on the drawbacks side, partly because of our setup, but partly also just because of how GraphQL is, there's more boilerplate to set up. There's more things that you have to declare, there's more stuff that you put out there. So if you're setting something up quick and dirty, you're setting things up -- it is more work to set up the GraphQL side of it.

That being said, some of the things you get from it are 1) you get end-to-end typing, which - if you're working all in TypeScript front-to-back, you may already have some of that. We have Python on our backend and TypeScript on the frontend, so having end-to-end typing across languages in that way just out of the box is beautiful, and it works really well.

Another thing that you get that I didn't really appreciate until it had shown up a time or two is how reusable it makes the APIs that you build. I used to actually think "REST APIs, if you do them really well, they're reusable, too", and that turns out to not actually be as true as I thought it was... In the sense that usually, when you start reusing a REST API in a new situation, especially if you're developing it fast, like you didn't do a big, long API design, but you're just developing fast, you're gonna have to come back and rethink about how you set it up, so that it now works properly in all of your situations... Whereas with GraphQL - that's what some of that boilerplate is doing - you're declaring exactly what that is upfront, and people can pick and choose, "Oh, I want this piece of it, I want that piece of it, I wanna do this..."

So I've found that even though conceptually, REST APIs seem like they should be as reusable, practically speaking, anything we've built it in GraphQL, it ends up being far easier to reuse in new ways in our frontend.

**Jenn Creighton:** Yeah. Definitely, when you're setting up GraphQL, the thing you have to do that is kind of like Wild Wild West with other things is you have to design a schema. You have to actually design a schema and tell it what's available. And schema design is like its own whole thing, but I think you get a lot of value out of it, because it is also -- besides the typing, it's like documentation being written for you, that otherwise you would have to do extra work to be documenting these things and keeping them up to date; you don't have that issue with GraphQL. Your schema keeps everything up to date for you.

**Kevin Ball:** Yeah. And you can start reusing those types that you've created in other places. If it's an entity in your system, by putting it in a GraphQL schema, now it's an entity in your API. And if you wanna have a new entity that happens to reference this old entity, it's super-easy to do.

**Amal Hussein:** Yeah, yeah. I have to say, the TypeScript/GraphQL story is pretty beautiful... And I'm saying that as somebody who's still a little grumpy about TypeScript, so that's like a lot coming from me...

**Jenn Creighton:** Saaaame...

**Amal Hussein:** I know, I know.

**Jenn Creighton:** Same! \[laughs\]

**Amal Hussein:** But I would say, on the GraphQL piece, I think my critique - and this isn't a specific critique of the tool, it's more maybe of the hive culture around JavaScript... There's a misconception around basic stack, and I would say GraphQL definitely is not part of your basic stack. It's very much a conscious decision that you bring into your application because you have a use case for it, and it solves a problem for you... And there's a lot of hidden cost in maintenance with adopting every new tool, but especially GraphQL.

So the hype thing is what's weird for me, because you see people using it to power their blogs, or very simple websites with just -- you're putting it in front of one or two REST APIs, and like "Is that really necessary?" So just weigh your trade-offs, kids, before adopting... That's all.

**Jenn Creighton:** \[28:09\] That is also 100% how I feel about TypeScript or people using React for something that I'm like "But you could have just written the HTML yourself... Why are you doing this...?"

**Amal Hussein:** Or a basic templating language, or something... Yeah, I'm with you. I think we have a lot of bias as engineers, and that bias tends to skew towards over-engineering, and...

**Jenn Creighton:** And shiny, new stuff.

**Amal Hussein:** And shiny, new, right. Yeah.

**Jenn Creighton:** We love it. We're all raccoons going toward shiny, new things.

**Amal Hussein:** But if only we could get that fix out of the way, somewhere safe... There's these shopping websites where you can put a bunch of stuff in your cart, and then even put in a fake or a real credit card, and then it goes nowhere - if only we had that equivalent... \[laughter\]

**Jenn Creighton:** I do believe that's what they use the side projects for these days...

**Amal Hussein:** Yeah, I was gonna say--

**Jenn Creighton:** \[laughs\]

**Kevin Ball:** I was gonna say, "I thought that's what engineering blogs are for", right?

**Amal Hussein:** Yeah, that's true.

**Kevin Ball:** ...like, Nick's blog, that he keeps rebuilding and rebuilding, and never publishing...

**Amal Hussein:** Right. That's totally fair. So just side-project your fix for complexity.

**Jenn Creighton:** Or if you're dying to work with a certain technology, I see nothing wrong with hopping to a job that has it. I wanted to work with GraphQL, so I joined Apollo. I didn't think I was gonna get to use it at any of my other companies.

**Amal Hussein:** Straight from the source.

**Jenn Creighton:** Yeah.

**Amal Hussein:** You're like, "I'm not messing around."

**Jenn Creighton:** Drink it straight from the well. Just give it to me, you know? \[laughter\]

**Feross Aboukhadijeh:** Nice.

**Amal Hussein:** I want to learn the thing from the thing-maker. \[laughter\]

**Feross Aboukhadijeh:** Yeah.

**Amal Hussein:** That's cool. So Feross, do you wanna throw GraphQL in front of a Node library? Do you wanna figure out a way to incorporate GraphQL into something that's totally pure JavaScript and doesn't need a backend? \[laughs\]

**Feross Aboukhadijeh:** It's a joke?

**Amal Hussein:** It's a joke... But yeah.

**Feross Aboukhadijeh:** Yeah, I like the discussion about where it's appropriate, because that often is a thing people don't really sit down and think about before just pulling in a thousand packages... So it totally makes sense. I think it might be a little too early for us to look at it, and our APIs - we have six endpoints right now, and one database table. It's maybe a little early.

I think maybe when we start to have different clients consuming it, and things like that, it could make sense.

Speaking of someone who's never used it before, one thing that I'm also kind of curious about is the need -- why is there a need for this schema layer? I guess this is turning into me asking a lot of GraphQL questions; maybe we don't have to do this, but... Yeah, I'm just curious - is there any way to infer it from the database? It seems like I've already gone out of my way to explain "This table has a foreign key. The reference is this column in this other table, and I've already expressed the types in the columns of the database."

**Kevin Ball:** I've seen libraries that will do that.

**Feross Aboukhadijeh:** Oh, really? Okay.

**Kevin Ball:** So it depends.

**Feross Aboukhadijeh:** That makes a lot of sense.

**Kevin Ball:** If you want to directly expose your database schema to your frontend, which is a question for you - maybe you do, maybe you don't.

**Feross Aboukhadijeh:** Yeah. For a lot of sites where most of the content is public, and you're just sort of like letting the client query it, then it seems like that could be a good starting place... Like, generate a schema from it and then maybe go in and tweak hiding certain fields. It could be a good starting place.

**Jenn Creighton:** Yeah. When we're talking about the tooling that can be done, that's part of it. You can generate a schema from things, which is very useful. The other part of the schema though is that you may not be getting your data straight from a database. You might be getting it from somewhere else.

\[31:55\] So GraphQL is really agnostic about where you're getting it from, but it does need to know what it's getting... And that is then provided to anyone who wants to use your GraphQL endpoint. So it is important, I think, to have that schema layer and have it not have to be hooked into something specific like a database; it can just be generated somewhere else.

**Kevin Ball:** One really nice feature of that is you can have computed fields, essentially, in your schema... And some of them maybe quite expensive to compute. But you only have to compute them when someone requests them.

**Jenn Creighton:** There's also the layer to annotate the schema... So being able to annotate that a field was deprecated, or something else about it is useful as well, which you wouldn't get from just a straight-up database layer.

**Feross Aboukhadijeh:** Right, okay.

**Amal Hussein:** Similar to the computed stuff, you can do compositional data as well, so you can create things from multiple sources, and then you can kind of define a new thing.

**Jenn Creighton:** Yup.

**Kevin Ball:** In some ways, that's why I go back and forth about using Gatsby as an example... One of the really interesting things about what they did is they basically said "You can pull form any data source, and we're gonna agglomerate that all up into a single GraphQL representation of it, so it can abstract away your backend data sources."

**Amal Hussein:** Yeah, I just had a really interesting thought... Do you guys wanna hear it?

**Kevin Ball:** Well, you can't just drop that and not tell us...

**Jenn Creighton:** Right, that's not a question... \[laughs\]

**Amal Hussein:** Yeah. So based on what you've just said, Kball, I wonder if Google search input was the original GraphQL... You type something, and it pulls from all the -- I don't know; just internet search indexing \[unintelligible 00:33:35.14\]

**Kevin Ball:** I mean, I wouldn't call it the original GraphQL necessarily, but I think that idea of being able to put a data pipeline layer where you source from many different possible sources, and then having that generate a kind of universally queriable middle layer is a really valuable concept... And you could do that in sort of a pre-processed manner, which Google search does, I think, and Gatsby does, or you could do that in an on-the-fly manner, where you're wrapping other APIs with a GraphQL layer or some other layer that does that... But I think that concept of being able to create a linchpin data layer that you can then have a single format that all of your different clients can talk to is one of the incredible, powerful concepts that GraphQL adopts.

**Break:** \[34:25\]

**Kevin Ball:** Let's dig into some of these more advanced features... So you briefly mentioned, Jenn, Apollo Federation. Can you flesh it out a little bit more for us? What is that?

**Jenn Creighton:** \[35:55\] So Apollo Federation -- it's a technology and an architecture. To break it down into a concept - if you have REST microservices and different teams working on these microservices, if you replace that REST with GraphQL, how does that work? So how can everyone have their slice of the data graph, but also there will be reusable parts of that that need to span across the teams, so how does that work.

It used to be that you would use a process called schema stitching to integrate all your separate microservice graphs together into the one big graph. That was a really manual process that you did on the server... So Apollo Federation is a way to do this without having to do that manual process. It has a declarative process that you use in the schema to say when you're extending a certain type, and there's a gateway that sits in front of your different microservices that will do the orchestration for you, of picking what it needs from which graph.

So all the small pieces of the graph come together into one endpoint that you can then query from any point in the graph. But it's nice, because there's a separation of concerns. If one team is only working on one slice of the graph, then they can do that without concern for having to build into a whole, huge graph system. That's the high-level of Federation.

**Amal Hussein:** Where do fragments come into this? I'm just curious... Because there's this funky area with fragments and needing to kind of do some extra set up if you wanna get introspection working... I guess maybe what's the philosophy on shared -- well, I guess maybe we can define what are fragments for folks, and then how are they supposed to be used and shared in the context of this Federation world.

**Jenn Creighton:** I can answer the first question for you. The second question I don't have as much knowledge about. I do know more about extending whole entities instead of fragments. I'm unsure about fragment sharing between them. But if you don't know what a fragment is, it's basically like a piece of reusable fields, basically, that you can assign to different queries. You kind of use like a spread operator, and you spread them out in your query.

**Kevin Ball:** Yeah. I've found fragments to be super-useful, because they let you essentially define the data that you're gonna want down at the level of whatever component is asking for it or using it, but then roll up your queries to do a single query at the top level of your page, so you're able to consolidate the sets of things that you want. Are there caching implications of using fragments as well?

**Jenn Creighton:** I am unsure. When we start to get into the more server-side heavy stuff, I have less GraphQL knowledge on that side.

**Kevin Ball:** In the client are there? Or that's just cached based on which fields have been fetched, and your related entity IDs?

**Jenn Creighton:** Yeah, that has more to do with entity IDs, because your fragments don't really have that at the top level. They always roll up to a top-level field that would have an ID. So you can do things like - on the client you can read a fragment or write a fragment into the cache, but as far as caching goes, the bigger concern is more about arguments and variables to keep track of what you set to your query, and be able to allow you to pull back that data if you want.

**Kevin Ball:** So federation feels like a pretty advanced feature in GraphQL, and it's something that I think came onto the stage a little bit more recently than some of the other things... What else is going on in terms of moving the standard and the state of the art forward in GraphQL?

**Jenn Creighton:** I know that for Apollo federation is the future. We're investing very heavily in federation. We see it as the way that companies can really adopt the graph more easily, and get the most benefits out of this graph. We're building a lot of tooling around it, we're really working heavily on it. That's important to Apollo.

\[40:05\] As far as GraphQL and the spec in general, there hasn't been as much going on with that as of late, from what I know. I do know that defer @defer and @stream directives are still not fully adopted, though some GraphQL servers have already adopted them... So we are going to, in Apollo, start to adopt those as well, including on the client. So we're gonna be working on that next, as part of our big Apollo Client roadmap. That's really all I've got on that side of things.

By the way, the spec is one of the nicer specs to read through. It's actually quite clear. It's nice bedtime reading. It's real chill bedtime reading.

**Kevin Ball:** Oh, man... By the time we get that late, I can't focus on anything... And that late is like 8:30 for me, so...

**Jenn Creighton:** \[laughs\] I'm seriously like at 10 PM just like reading through the spec, being like "Oh yeah, that's right. That is what that is. Okay, cool. Thank you."

**Amal Hussein:** \[laughs\] That's reinforcing... \[unintelligible 00:41:05.05\] So I think this spec originally came out of Facebook, and there were Facebook engineers, folks I've actually been fortunate to meet some of them, who worked really, really hard on making this a spec, and they were really excited about it. I remember the first version came out, was released publicly... What involvement folks at Apollo have with pushing the spec forward now? Is there more of a kind of open community around this now? GraphQL is in a foundation; there is a foundation that exists for this, right?

**Jenn Creighton:** Yes, it is a foundation.

**Amal Hussein:** So it's definitely a project that's grown beyond Facebook in that sense, right?

**Jenn Creighton:** Yes, it has.

**Amal Hussein:** So it started at Facebook, but it is technically now a foundation... So we do have representation in that, same as we do with TC39. If we're involved in a technology, then we also need to be involved in pushing the spec forward. I would say though, because there's not a lot of active changes happening with the spec, there's just not as much to try to move forward.

A lot of Apollo's open source work now too is really shoring up the projects like Apollo Server and Apollo Client. Apollo Client, for instance - my co-worker on that, the lead architect on the project, Ben, rewrote all of Apollo Client, basically, for a huge 3.0 release that changed a lot of how we were doing caching on the frontend. It used to be a little bit more of a manual thing; now you can declare things a little bit more declaratively, and it's very nice... So that's sort of where our focus has been. Less on, I would say, pushing the GraphQL spec to certain places and more on making sure that if you wanna work with GraphQL, we're still giving you the best experience possible.

**Amal Hussein:** \[43:09\] Yeah, it's very much like a Ferrari experience, I would say, Apollo Client. It's like, lots is in there. I mean, my only feedback to you all would be consider breaking it apart; doing the Lodash thing and letting people import certain modules... Because I think people don't use all of it, and then there's just a lot of bloat sometimes, if you're trying to be conservative with your bundle size. That's my only gripe with it, but... It's pretty impressive.

**Jenn Creighton:** There was some work done on that in 3.0. You can import specific things in 3.0 and leave a bunch of stuff out...

**Amal Hussein:** Nice.

**Jenn Creighton:** But I know that Ben has future ideas. Ben always has future ideas, so it's not surprising.

**Amal Hussein:** Send Ben flowers...

**Jenn Creighton:** Oh yeah, send Ben all the things, because he worked basically alone on that for a long time, and did incredible work on it, and cares very much about the end user's experience... He's fantastic.

**Kevin Ball:** Yeah, we're still on a 2.something variant of Apollo Client at home, and everytime I try to figure something out, I go to the docs and I'm like "Oh, this would be easy if we were on 3..."

**Jenn Creighton:** It would be easy if you were on 3, that's correct. That's all the work Ben did, yup.

**Kevin Ball:** Gotta figure out what that migration looks like.

**Jenn Creighton:** Yeah. Admittedly, it's not the easiest migration path, because so much did change... But 3.0 is such a nice experience. It's really, really great.

**Kevin Ball:** Alright. Anything else you wanna let folks know about or leave the audience with before we wrap up?

**Jenn Creighton:** I don't know, try out GraphQL. If you've never experienced it, at least set up a side project, see what it's like. Check it out. Maybe move to a company that uses it.

**Kevin Ball:** Amal, are you using GraphQL at work?

**Amal Hussein:** I am, yeah.

**Kevin Ball:** Okay. And your company is...

**Amal Hussein:** Indigo Ag.

**Kevin Ball:** Okay. So yeah, you could go work at Indigo, come work at Humu... Don't go work with Feross. It sounds like that's not gonna happen for a little while... \[laughter\]

**Feross Aboukhadijeh:** Yeah.

**Kevin Ball:** Or go work with Apollo.

**Jenn Creighton:** You can come work at Apollo. We do have open RECs. We're definitely growing. So come hang out.

**Amal Hussein:** Yeah. You get to work with Ben, and Jenn. Their names rhyme...

**Kevin Ball:** And it's an open source project, so if you can't get paid for it right now, you could still dig into the code, submit a PR... Learn about it.

**Jenn Creighton:** Yeah. If you want to contribute to an Apollo project, by the way, the one that I would say is the easiest to get started with is the Apollo Client DevTools project. That one is more similar to like a React application you would know, but you're still getting some GraphQL experience.

Apollo Client as an open source project is really difficult to dig into... So by all means, do it, but just know that your contributions - it might take you a while to get one in the system.

**Kevin Ball:** Awesome. Well, thank you so much for joining us today, Jenn. This has been fun.

**Jenn Creighton:** Thank you for having me.

**Kevin Ball:** I am renewed in terms of energy to go and try to do a migration from Apollo 2 to Apollo 3... \[laughter\]

**Jenn Creighton:** Nice!

**Kevin Ball:** Awesome. Well, thank you, Feross, thank you, Amal... And that has been this week's JS Party. Catch us again next week, and every week. If you're not listening to this live, you can listen live, Thursdays 10 o'clock Pacific, AM not PM, as noted. I'll be asleep by 10 PM. I hope to see you next time.

Alright, take care, y'all. This is Kball, signing out!

**Outro:** \[46:30\]

**Horse JS:** Hey, JS buds. I know lots of you have had some "moments".
