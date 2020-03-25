**Jerod Santo:** Hello, party people! Jerod here. We have a doozy of an episode for you this week. Let me introduce my co-hosts first... Divya is here. Hi, Divya!

**Divya Sasidharan:** Hey, hey!

**Jerod Santo:** Are you excited, are you ready to go?

**Divya Sasidharan:** Yeah, for sure.

**Jerod Santo:** For sure, for sure. And Kball is here. What's up, Kball?

**Kevin Ball:** Hello! I am super-excited.

**Jerod Santo:** How many caffeines do you have in you right now?

**Kevin Ball:** Um... Three cups? Maybe four.

**Jerod Santo:** You're three cups deep. I was actually thinking about that as I was thinking about Ruby on Rails this morning, as I was preparing for this show... I thought "Ruby on Rails is cool, but do you know what else is cool? Kball on coffee."

**Kevin Ball:** \[laughs\]

**Jerod Santo:** There's a framework for you...

**Kevin Ball:** I should create a framework and call it that.

**Jerod Santo:** There you go. It's definitely a setup for a very good JS Party, as you're always caffeinated. We have a very special guest today, Tom Preston-Werner. Now, for those of yo who are not aware of who Tom is, he has a very long history in the software world. A co-founder of GitHub, he spearheaded the "blogging like a hacker" movement back in 2008 with his blog post, and of course, with Jekyll.

He authored Semantic Versioning; whether you love it or hate it, that's a thing... TOML, which is a configuration style used in Rust and in Go communities... And now he's back with RedwoodJS, which is an opinionated full-stack web app framework for the JAMstack. Tom, thanks for coming on JS Party.

**Tom Preston-Werner:** Thanks for having me! Very happy to be here.

**Jerod Santo:** Very happy to have you. So RedwoodJS - you are here with, like I said, an opinionated full-stack web app framework... And you're here for the JAMstack, and you brought a bunch of software... So tell us about RedwoodJS. The first thing we wanna know really is the why behind it, because that's what everybody would like to know - why is RedwoodJS a thing? You don't make too many open source projects anymore, but you're here with the big one... Why did you build this?

**Tom Preston-Werner:** Yeah, I guess it comes out of frustration with the existing options in the world... And really, it's not that there's a lack of options, it's almost that there's too many options... But what I see is a lack of integration. In the JavaScript and the Node community we all are aware that you have no lack of choice when it comes to packages to accomplish things. There's millions of ways to do everything.

\[00:03:57.27\] When I started getting into that world a couple of years ago we were building our current startups called Chatterbug, which is a foreign language learning platform - you should check it out, Chatterbug.com - we were building it with Ruby on Rails and doing it in a fairly standard way... And eventually, we started building frontend things in React, and so I started learning React... And I really loved what I saw there.

But along with React comes choices. Because it's not just "Hey, I'm gonna build a React site", especially if you're building it on top of some random backend that's in a different language, like Rails or something else... Now you have to make other choices - how do you do CSS, how do you put your files on disk? What do I use for state management? How do I talk to my backend? In the Rails world you could just deliver JSON, or you could embed bits of React all over the place...

So we went down a lot of these roads and eventually came up with some patterns that we really liked. We were like, "Hey, what if we put things on disk in this way?" and we chose StyledComponents... "What if we did it in this way, in a file?" and we put everything in a file... And then we named the directories after the file, so that they were easy to locate, and that the filenames were the names of components, so that they showed up correctly in your text editor in the tabs, instead of all just being index.js... That you could actually tell them apart.

So we just collected all these different patterns together and created what we really liked. But the one problem with this was that we still had Rails as a backend, and it didn't feel right. It just was like "Wow, I have all this amazing power on the frontend with React and friends, and we've integrated them really nicely, but we still have to do things the Rails way on the backend." And what I really wanna do is be able to use GraphQL to pull data from each subcomponent of the page, and have each component be responsible for its own data, essentially.

So that means "Okay, let's implement GraphQL on top of Rails", which we do for our mobile client already... But now we have two problems. Now we have a Rails backend and we have a GraphQL backend, and they're both in Rails; we use the Ruby GraphQL library, which is quite good, to be fair... It's quite excellent. It's well-written. But now we have two different frontends talking to the backend in two different ways.

So Peter Pistorius and I at the time - we started this together more than a year ago, started thinking about these ideas... And this also bumps into Netlify and the JAMstack deployment methodology. So there's really two things that come together, but let me keep going with the React side. We just started thinking "What would this look like if it was all in JavaScript, if it was JavaScript all the way from the frontend to the backend, and we were using some of the great libraries for doing GraphQL on the API?" and "Oh, actually - that would allow you to have a fully JavaScript client that you could deploy via CDN, via something like \[unintelligible 00:07:05.10\] Netlify. That's written in React and friends.

And then what if you could deploy your business logic as a GraphQL API into Lambda functions? Netlify makes that easy, too... And then the question really becomes "What do you do for the database?" and we can spend some time talking about the database. But we just started thinking about the stack.

So the React patterns that we had been developing - we really liked a lot of things that we really loved about how we were doing it... And then combining it with a back-end that could scale in a JAMstack deployment style; and of course, I love the JAMstack. I've been talking to the Netlify guys about this since they've first started the company, and I'm on the board now, so I've sort of come all the way around... So obviously I'm a fan of Netlify. And then - could you wrap that all up in a single package and make it work? So that's where it comes from.

**Kevin Ball:** \[00:08:04.15\] Awesome. I'd love to dig in a little bit there, if you can...

**Tom Preston-Werner:** Please, let's.

**Kevin Ball:** One of the things that stood out to me from that is the comparison to Rails, and I think looking through the code, there were a lot of things that were very similar in approach. I wanna sort of dive on one particular area of that, which is - it feels like the JavaScript world has been rediscovering the value of convention, and the value of not having to configure everything and not having to do things...

And there have been tiptoes in that direction by other stacks as well, things like Create React App, or things like -- Vue is a little bit more out of the box and has the Vue CLI, and things like that... And you've got Gatsby doing a set of conventions. So I'm curious, which conventions did you end up deciding to take from the React world or other things going on in the frontend, and which ones did you bring in from the Rails world, and how did you make those decisions?

**Tom Preston-Werner:** Yeah, we're obviously inspired by Rails. I've been writing Rails since 2004 maybe (maybe 0.10 or 0.11 of Rails), so a long time I've been in the Rails world. And don't get me wrong, Rails changed my life; I'm only here, I've only been able to do what I've been able to do in this world because of Rails... But I also have my frustrations with Rails; like anything in the world, there's positives and negatives... And I think to me it changed everything about web development at the time because it was a single-integrated thing, where we were all -- I mean, I was at the time writing PHP, and I was sort of building my own crappy PHP framework, like I think everyone was at the time...

And then Rails pops up, and it's like "What if you could just do all this stuff together?" and the framework was done for you, and you don't have to worry about SQL injections, and, and, and... All this stuff, it was all just there. And here's this new language, Ruby, that is way better than PHP (at the time). You know, holy wars about languages and which one's better, but...At the time, to me it was this breath of fresh air. And part of that magic was the opinionation, the convention over configuration, where I've written my fair share of XML configuration files, and coming to something that's just -- this is probably what you want, and if you wanna change it, you can change it, but let's have sane defaults.

So for RedwoodJS we take the same philosophy, which is "This is probably what you want, but if you wanna change it, you can." And because RedwoodJS really is comprised of mostly existing things in the JavaScript and TypeScript space, you maintain that ability to swap things out if you want to. But if you just wanna build a simple web app, you have an idea in your mind and you wanna turn it into reality, right now it feels like the burden is too high... And I think especially for new JavaScript developers, people new to React. Learning React is not trivial; the power it gives you is immense, but it's not trivial. And then you're like "Oh, and there's also this thing called GraphQL", and that's a whole universe, and you need to learn that as well...

So when you have these things that are new technologies for a lot of people, in order to use them effectively and unlock the power that is inherent in these new technologies, I think you need something really well-integrated, very opinionated to get you there. For example, we use Prisma 2 as a backend; they don't call it an ORM, it's a query builder... Sort of a very capable query builder. It's not mapping you to objects that do things, it's just giving you data structures at the end... So you still deal with it in a very functional way.

But with that right now, it supports MySQL and Postgres, and will in the future support things like Mongo, Fauna, and other things.

\[00:12:12.28\] So we're opinionated in the way that we really wanted to start with something that supported relational databases. That was super-important to be. And part of the philosophy of RedwoodJS is not being too far from people's existing stacks, because it's very difficult to come up with a solution that is wildly different in every way, and put it into the developer ecosystem and say "Hey, I've solved all your problems", with the caveat that you now have to learn everything from scratch. You see this with things like Darklang, for instance, which is super-interesting... But I think it will be a challenge there to say "You have to learn a new language, and it's deployed on our platform, and the IDE is different...", all these things are different.

And it might be better. It might be -- I'm not gonna say "objectively better", but it might be super-legitimately better... But the problem is that might not matter. Because how do you take your existing universe of software development and just throw everything away and start over? That's super-difficult. But we have all of these amazing bits that people are already using, but maybe not as easily or effectively as they could. So an integrator can come in -- that's an opportunity for an integrator to come in and say "I'm just gonna pick what I think is the best of all of these, and I'm gonna wrap them up in a framework and I'm gonna add a bunch of special sauce on top, and present this in a way that is opinionated and to where you're not making a lot of choices, and you can just go from idea to implementation, without having to choose every technology and then spend hours and hours trying to get them integrated."

The amount of work that we've done just to get WebPack configs to work properly, and Babel configs, and get it to deploy on Netlify... These are not trivial things to do, and a lot of this technology is so early that a lot of people haven't done it. We're trailblazing here, for sure. I mean, we're in constant contact with Prisma and Netlify, and constantly bugging them with things that are broken. Nobody's done some of this stuff before, and that's what I love about RedwoodJS - making it possible for people, and especially novices, to get started with powerful technologies, and just take your idea and make it reality. Start writing your React components and your database schema, and that's it, right?

**Kevin Ball:** Yeah. You touched on something there that I think was an underrated value of the Rails ecosystem, which is that it gave you a way to get started without having to know much. Have something that worked out of the box and be able to learn about each component independently, without having to worry about all the other stuff... Because it was just gonna work in the default mode.

**Tom Preston-Werner:** Right, right. If you take the blessed path, your life will be easy. But if in the future you need to scale your application, then you can do those things. I think my favorite summation of how that works is "Make easy things easy, and hard things possible." That's really the philosophy that we're trying to take there.

We're opinionated, but not so much that we will say "Oh, you can never ever do a certain thing", especially on the storage side... Because every company, once you get big enough, has very specific storage needs. So I don't think we've unlocked this sort of generic compute layer for storage. I think we're getting close with front-end delivery via CDN and Lambda functions for business logic. I think we're almost there.

Lambda is much more capable every day. Every day they reduce the restrictions, and it's more powerful. You can globally distribute it. The database side - we're not quite there yet. But also, part of the gamble with RedwoodJS -- and really, this is an experiment. When we first started, I was like "50/50 this thing has legs at all." Now, with the reaction of the community since the launch, I think there's something here... But it really is experimental, and it was designed from the very beginning to grow with the capabilities of the technology that underlies it. So that is especially AWS Lambda or functions as a service, but it is also databases. And you start seeing some really interesting things like Fauna come out.

\[00:16:26.27\] In Fauna, the distributed capabilities are amazing. It's a little challenging to use via FQL so far, but Prisma is working to try to normalize that a little bit. Can you approach it in a more query-builder kind of way and make it approachable? Again, it's a new technology that you have to learn. But something like Fauna would be perfect if it was relational.

On the other side you have things like yugabyte, which is kind of a newer company that's come out, that I love... It's more enterprise-side, but it can take a relational database and give you global scale. But you're running your machines; they can host a control panel that will help you run your machines right now. I would love for that technology to someday be done in a more SaaS style, where you can just be like "Spin up a globally-distributed database, and I'll just pay for it depending on how big it is." But you know, we're not serverless yet.

Doing a serverless database - Fauna is kind of doing it... You can do it with AWS Aurora Serverless - the longest name for a thing ever... \[laughter\] But it's very restricted in how it works still. And you can be very cheap, but you can do it; you could make a fully serverless RedwoodJS app, end to end, today, but it's not gonna scale the way that you want probably... But the beauty is on the database side you choose your database provider, you spin it up... You can get whatever performance you need.

**Divya Sasidharan:** So RedwoodJS is really opinionated, like you mentioned; it makes a lot of decisions in terms of the database, in terms of the GraphQL layer and all of these... Do you imagine -- because if we make the Rails comparison, generally within Rails people work within that architecture and they don't really break away from a lot of the conventions... But with this - JAMstack is brought up a lot, and you're working within that ecosystem, and part of the JAMstack is this ability to choose. There's so many options with databases, there's so many options with serverless...

So do you imagine that within Redwood people start with that framework and then break away from the conventions by pulling in their own systems and conventions, so in a sense ejecting from Redwood? Would that be something that you would recommend or encourage for people using that, since it is very unique?

**Tom Preston-Werner:** My hope is that people never have to eject from RedwoodJS. I see it the same way as saying like "Would you ever eject from Rails?" It's not a question that you would ask. And I know that that's how Create React App is. But Create React App is very unopinionated. It's a very base level of what you get. If you want anything on top of that very basic thing, you're back to choosing technologies and trying to integrate them; and everyone does it in a different way, and then you're like "I can't do this one thing I really wanted to do, so now I'm gonna eject... And now I don't get the benefit of being on top of a framework as such."

We see RedwoodJS as a proper framework; something that is always with you, and that you always want with you, because it's providing improvements forever. I think people will always need to be able to change the parameters a bit in how they deal with a framework. If it's too rigid, then no one will use it, because they know that it can't scale. That would be killer for a framework; people start using it, and then they build something and it gets popular and they're like "We had to bail from RedwoodJS because it was too inflexible", that's very bad.

I think it's also bad for a framework to be too flexible, where you're like "Yeah, you can have any frontend. You can use React, or Vue, or Svelte, or whatever you want", and you're trying to cram everything together. Then the question is "What is this, and why is it helping me?" and can you really maintain a high level of integration with so many options? I don't see it happening; it's certainly not our intention for RedwoodJS to be super-flexible. We want it to be flexible in the ways that matter. So on the database side I want it to be very flexible.

\[00:20:29.15\] If at some point you want to CDN-deliver your React client, but run your own servers for your GraphQL API and all your business logic, then I think that's fine, and RedwoodJS will be very amenable to that. So that's a level of flexibility where you go away from serverless. You run the whole thing custom; you run it on your own CDN, you run it on your own hardware for your business logic to run your GraphQL API, you run your own database however you want... I want it to be able to run in that environment, but it's also important to me that you can just deploy it to Netlify. It's like "Oh, I had this idea, I coded it up, I pushed to Netlify, and it's live. I had to set up my database right now." I think over time that will become easier, too.

I've talked with the Netlify folks to hopefully make it easy to spin up simple databases through Heroku, or DigitalOcean, or something, so that you could do it without having to leave Netlify. It'd just be like "I need a database" and Netlify can be like "Cool. We've got it." In the same way that they provision Lambda, they could provision -- or AWS Aurora, or something. It's like, "Give me an Aurora database, Postgres on this type of performance characteristics", and it's just like "Okay, here you go." And if you need to change that later on, that's a hassle... But companies go through that kind of migration all the time, where you need to change the capabilities of your storage layer.

**Kevin Ball:** Two of you at least are insiders for Netlify, so you probably can't say anything, but I would be shocked if Netlify wasn't looking at a marketplace solution like Heroku. I mean, it's a clear development. That seems like -- I don't know what the timeframes are, and that's very complex to deliver, but I am confident that's in the future.

**Tom Preston-Werner:** It seems like it would be interesting... \[laughter\]

**Divya Sasidharan:** Yeah, I think it's interesting, because whenever you talk about a JAMstack solution - and this comes up a lot whenever I talk to people, because I work at Netlify on the developer experience team - generally it's like "Okay, I work with a JAMstack. I have something that's prerendered, a static application that works", and then the moment the database part comes in, it's like the next hurdle, because provisioning it takes a while... And I think we've worked a lot on trying to make that a bit smoother, so I think currently we have -- within the CLI you can provision a Fauna database, so that it works with Netlify...

But again, we're trying to smooth out the curves of that, because there is some -- it's essentially moving from Netlify to Fauna, it's a lot of the back and forth... And looking at the RedwoodJS docs, there is this mention of not wanting to do that. Because the moment you talk about a database, you're like "Oh, I have to spin it up somewhere else, and then I have to go to this other dashboard." And now I have two things. I have the Netlify dashboard, which holds my static application, and then the database - whatever; if I'm using Firebase, or Fauna, or whatever that is, I have to go there. So there's two places. And I think that adds a cognitive burden, because now you're just like "There's two places that things live in which my deployed app needs to function..."

I think the nice thing about RedwoodJS is just the ability for you to have everything all in one. And I think within Netlify as well we think a lot about how to make people be incredibly productive without having to make those cognitive leaps, or move into a separate dashboard to do things that they want to do.

**Tom Preston-Werner:** Yeah, I agree. And again, I think there's a future where that process is much simpler, where you can get a database -- I don't know what this looks like at Netlify. It's something that I talk about basically every time that I get together with Matt and Chris, is what does the future of databases look like on the JAMstack? Because to me, full stack web application development is the next evolution of JAMstack. That becomes a primary place that you would deploy a full stack web application, and that's what RedwoodJS is about.

\[00:24:15.00\] I had a tweet a year-and-a-half ago where I said essentially "I predict that within the next five years your next full stack web application will be deployed on Netlify." RedwoodJS is the answer to that. I didn't see anyone else doing it, and I just kept thinking about it.

**Jerod Santo:** You didn't wanna be wrong.

**Tom Preston-Werner:** What's that?

**Jerod Santo:** So you don't wanna be wrong. \[laughter\]

**Tom Preston-Werner:** Yeah, it was like -- a year was up, a year had gone by, and I'm like "This isn't happening yet... Oh, god..."

**Jerod Santo:** They say the best way to predict the future is to invent it.

**Tom Preston-Werner:** Exactly, right. So that's what we're doing. We're saying "Well, we have some ideas for how this could work. Let's build it and see if other people have the same problems." And that I think is the job of any piece of open source software of any company.

**Break:** \[00:25:05.18\]

**Jerod Santo:** Tom, I think the framework versus library distinction is one worth emphasizing and maybe talking about a little bit. We talked about how you're trying to create the world that you wanna see with Redwood... So in order to do that, you have to have adoption. And like you said, you weren't really even sure if this would be a thing that would be successful. It sounds like people are at least interested. You got our interest, for sure...

I also have Ruby roots, built a career around Rails, so I was very much pro-framework from the moment that Rails solved a bunch of thousand papercuts that I was previously solving myself, kind of a-la-carte on each new project... That being said, historically, the JavaScript community and ecosystem has been anti-framework and more pro-libraries, picking and choosing your favorite things and putting it all together... And these are the kinds of things that seem like they're like community-based.

Go is very similar; the Go community is very much micro-things... And the Ruby community, the Python communities - they've been more open to frameworks and to building on a framework. So I'd just love for you to first of all explain the difference to folks between a framework and maybe a library, and then also just speak to whether or not you think RedwoodJS as a framework will be something that'll be a turn-off to JavaScript folks.

**Tom Preston-Werner:** In my mind, a framework is something that you build your application upon. So it's something that is larger. A library is something that you pull in and sort of call as just a thing that gets something done for you.

The framework is always underneath. You can think of it in layers. The framework is underneath, giving you all of these capabilities, feeding your application data, maybe interfacing with the client... That's a web framework. A library happens - once you receive the request, and you're doing stuff, and now you need to call a library in order to interface with some other thing.

So you wanna send an automatic tweet, or something - that's a library, and it's something that you're doing separate from the request and response flow, as you will... Or it's a library to handle encryption or something like this. It's something that is in service of your application, whereas the framework is underlying it and managing the interface between your application code and the customer, essentially. That's kind of how I think it.

\[00:28:16.02\] In the JavaScript world I think the focus has been on libraries because this is how you often see things. When you have either a new language, or a new set of technical capabilities, people look at that and they say "There's opportunity here. We can now do things that we weren't able to do before. I have ideas, let's explore them", and lots of people start exploring the territory. That's how it's been in the JavaScript world for the last five years, for sure; maybe longer... And you see millions of approaches to things. They're all done in libraries, because they're all little pieces, and nobody knows what the best way to do things is. Everyone's just experimenting. Everyone's putting ideas out there.

But what happens eventually is that people start to feel like there are best practices, that there are winners and losers to those library wars... And then you start to see integration happen. I think what people are craving right now - and I think you see this in the response that people had to Redwood - is that people are craving that integration. Because trying to figure out what the best choices are, and then doing your own integration is a huge amount of time; it occupies a lot of time. That's not building your actual valuable thing for your customers.

I think you'll see more of that in the JavaScript world because of the amount of choice that's available. It's like, now you can do things; how do you make it easy to do things?

**Jerod Santo:** So you don't think this will be a major hurdle... There will probably be other things that hold it back.

**Tom Preston-Werner:** What, Redwood?

**Jerod Santo:** Yeah.

**Tom Preston-Werner:** From the interest that I've seen so far, I think people are really excited about it. People are excited about something that looks more like Rails in the JavaScript world. People call React a framework... I don't really think of React as a framework; it's one part of a framework. I mean, it is frameworky(ish), but to me it's just this very specific part of the rendering layer... And you can build an ecosystem of other libraries around it that you can assemble into a framework, but it's one of many. You have Vue as a serious competitor.

I started with React, I honestly don't have a lot of Vue experience, so I'm not gonna talk a lot about React versus Vue or anything... I just love what React makes possible. So what will the challenges for Redwood be? I think it's "Can we evolve the technology to meet what our vision is quickly enough that people will tolerate it not working as well as we want it to work now, just because it's so early in the technologies available to make it fulfill that vision?" Can we get vendors to increase the capabilities of their things?

One thing that I've always wanted to do with Redwood since we started working on it was to use it as a tool to essentially force vendors to increase the capabilities of their offerings, like Lambda. If we can get Redwood to become popular, then I can go to the Lambda folks and say "People want to use this as their primary GraphQL API, because it can be distributed, but the file size limits are too low right now to make this work for really serious applications." And they can say "I see that there is interest in this, and we will prioritize working on that." So that's part of it... Part of it is using it as a lever to move providers, and that includes Netlify.

**Kevin Ball:** Let's dive into Redwood and the opinions that it has and the decisions that it makes for a developer who yarn-installs and creates a Redwood applications. There's lots of different things... We have talked about the file structure, the technologies chosen... What's the biggest selling points in your eyes? What are you most excited about? Help people understand what Redwood is offering to a developer.

**Tom Preston-Werner:** \[00:32:20.11\] I think number one is the integration. Everything works together, all the config files have been refined to such an extent that you don't have to worry about them, you just get straight into your code. I think that's number one.

I think if the set of technologies that we've chosen is something that you like, then that makes it really easy to say "Okay, I'm gonna try my next thing in Redwood and see if I can skip all of that work that I used to have to do." I think the next thing is, depending on who you are, but one of the main selling points for me is that it's multi-client-ready. And by that I mean right now we make it easy to build a web application on top of a GraphQL API. And some of the comments that I saw early on when we were first talking about Redwood with people was like "Why do you need a GraphQL API? That's so much harder than the way that Rails does it, where you just have your backend talking directly to your frontend, and you're generating your pages server-side, and there's not this additional layer of abstraction in between them...

And now you have to learn GraphQL, and GraphQL has all the problems that come with GraphQL, which are caching, and managing that, and making sure people don't abuse it..." You know, there are challenges there. But the advantage is that if your back-end is just a GraphQL API, then you are ready to build as many clients as you need, and you never have to duplicate the effort.

So like I mentioned before, at Chatterbug, we built the whole Rails application, we had the desktop app, and then we were like "Alright, time to build the mobile application, and we're gonna choose React Native, because we're already using some React on the frontend, and we'll get a nice reusability of components, and that's' gonna be super-sweet."

But then we wanna use GraphQL, because that's a really nice match for React, and the way that React thinks about the world. So like "Okay, now we have to build a GraphQL API." So now we're duplicating the effort that we have in the business logic side. So now we have the Rails backend that is done in a traditional way, and the GraphQL API. Now I have to maintain both of them.

You start to wish that your web frontend was just consuming GraphQL. If that's the case - and I think that will be a very common case for people developing applications, then why not just start with GraphQL? Yeah, it's a little more overhead to begin with, and there are challenges that we haven't solved perfectly, but part of the promise of Redwood that I have for myself is that we make those challenges easier, to where you don't have to worry about caching as much. We come up with solutions for these.

This is the beauty of a framework - the framework can worry about optimizing the experience and solving problems for you, because the number of people using the framework hopefully will be vast, and so that work has really good payoff. Whereas if you're just doing it for yourself, the pay-off is much lower. You're like "Yeah, I'll solve my problems, but this is super-hard. How can we make this as easy as possible?" You take shortcuts and it never gets the attention that it needs because it's not part of your core product experience. You don't really wanna have to do that stuff, so maybe the framework can do that for you.

**Kevin Ball:** I totally hear what you're talking about on the backend, because I've seen that problem play out. What does this look like on the frontend in terms of the clients, in terms of facilitating that experience of multi-client? Are we talking about having shared layers between a web frontend and a React Native frontend? Are there other things, as you talk about those other consumers of this API, that Redwood can do to facilitate that?

**Tom Preston-Werner:** \[00:35:53.15\] Yeah, I think that there is a world in which Redwood is not just the web side and API side, but that included in Redwood is a mobile side and a CLI side, and that those things are done in the same way that the website is done right now. The same kinds of affordances. The things like cells, where we make data fetching declarative, and abstract away some of the complexity there - we can do the same thing for mobile. We haven't touched that yet, but we have also now a lot of knowledge from the Chatterbug React Native mobile app, that we can take and say "These are patterns that we've used."

We use cells in the Chatterbug mobile application. We use cells, they look very similar. So can we reuse these same patterns and make it even easier to build your client where you're able to reuse components? What does that look like? If they're in the same repository, that's way easier than if you have to extract your components out to a separate library, and then constantly be increasing the version or linking them; there's a huge hassle in doing that. But if you have all your sides in the same monorepo, then they could share much more easily.

So I think the benefits that you would get out of that, of having that same kind of tightly-integrated way to think about a desktop app or a CLI version or a mobile app... We can do one for Electron. We can have a React-based Electron desktop app that you could just -- you just build your React components. That's where it is from me on the frontend... And I just want people to be able to have an idea and just start writing React components that render stuff and fetch data.

**Kevin Ball:** One thing you mentioned there that I think would be interesting to dive deeper on is this concept of cells... Because this is a place where you're not just providing a strong set of conventions that have been done in other places, but you're saying "This is the golden path." You're introducing a new and very interesting abstraction. Can you lay out what that is and how it works?

**Tom Preston-Werner:** Cells are an abstraction that makes it possible to do your data fetching in a declarative way. And what it looks like is you have a React component and it exports certain things. One of the things it exports is a query, that is just a GraphQL query. You also then export a success constant; that is a React component that receives the data that is what you get from a successful result of your GraphQL call running... But you also have an export for a failure mode, and for a loading state, and even for an empty state; if you have a list of things and you want to render something different if it's empty, then you can do that.

If you don't have the failure export or the empty export, then those things will just end up in success. So you can kind of go as deep as you want in that regard... But you're not writing any imperative code in order to do data fetching. You're just stating "Here's my query, here's what happens when there's success, here's what happens when there's failure" and you do it all just by exporting constants that are named the right thing.

Then we essentially have a higher-order component that takes that information and just wraps it in the imperative bits to make that work properly. The power in doing that is that it allows us to get into the flow of your data fetching, and optimize it into the future... Because we're handling that for you. So one place that we wanna go is to solve the waterfall problem.

The waterfall problem is - in the style that we're doing it - you have a wrapping component, and it maybe does some data fetching... And then nested within that wrapping component you have subcomponents; those subcomponents do their own data fetching. This to me is the dream of React - each chunk of your page can be responsible for its own data fetching; that way you're isolating responsibilities, it's way easier to think about your code.

The problem with the current way that that happens is your outer query has to complete and provide the data to the success component before any subcomponents start rendering, and that means that they have to wait in order to do their own data fetching.

\[00:40:06.11\] But you can imagine that because we have this higher-order component that handles the logic for you, and because we have a build step that we do, we can get into that flow and start to think about whether we could run those queries at the same time, and be able to orchestrate just asking -- it's like, if you only require the user ID... Like, think of a user profile page, where you've got one chunk that pulls maybe your profile data, but then another chunk want to pull the blog posts that you made, or some set of activity on the website; those are separate components, but they don't need to profile data to do their work, they only need the user ID.

So could you look at those queries and say "Well, each of these only needs the user ID, so they're not actually dependent on each other. Could we essentially pre-fetch that data and have it ready to hand to the subcomponents by the time they were ready to run?" And there's also all kinds of stuff coming down in React Suspense, that is gonna make a lot of this work easier. But if we could maintain the idea that you have these cells that are just declarative in the way that you run queries, I think it would radically simplify the way that people can put these sites together.

**Kevin Ball:** That's super-interesting. It reminds me a lot of what Relay from Facebook is doing in terms of trying to aggregate up these queries, but potentially in a more transparent and easier to integrate way, because it's built into how you handle cells.

**Tom Preston-Werner:** Yeah, it's a little bit like Relay in that it's trying to handle the stuff for you. Relay gets kind of complicated... You end up splitting up your queries a lot. Each component is responsible for only the data that it sees... And that's interesting, and I can see how that would scale well and that would work at Facebook, but for me as a normal developer, I think in terms of whole GraphQL queries, and I don't wanna split them up in such a finely-grained way; that's not how my brain works, at least at the moment.

I think as we try to build bigger sites with this, we'll come up with different challenges, and along the way we'll come up with better solutions for how that might work. If you have to make some giant GraphQL query, that's not super-great... But the problems that Facebook has most people don't have necessarily. Redwood is maybe not trying to be Facebook. It's trying to be the rest of us, and I think that's okay.

**Divya Sasidharan:** I wanted to bring the conversation back slightly to the premise of Redwood, which is full-stack for JAMstack... One of the things that happens when you talk about the JAMstack is there's a lot of FUD around it and confusion around what JAMstack is. JAMstack is static, and you can't do something full-stack... So with Redwood you can do full-stack JAMstack. But I think there's a fear - or for me, there's a bit of a fear - that that adds more confusion around JAMstack... Because they're like "Wait, I thought JAMstack was static and pre-rendered... So why is it full-stack?" Because I think we always try to make that distinction of like "Well, we're moving away from monolithic applications", because that's not what JAMstack is... And I think the moment you bring up full-stack with JAMstack, I think people are like "Wait, but you said no monolith... So how does this fit into that schema?" So I'm curious how you all at Redwood - and you particularly - talk about Redwood and how you manage that full-stack JAMstack confusion around that?

**Tom Preston-Werner:** \[00:43:40.29\] It's a fair question, and we are intentionally pushing the boundaries of what the definition of JAMstack is a little bit, I think... But I did talk to Chris Bach about this to make sure that it was in-line with how they -- you know... Chris is one of the founders at Netlify... And it was like, is JAMstack the right word for Redwood? Because it is different. It's not prerendering -- it's about a full-stack thing, there's a database involved... Should I just call it an edge framework, or an edge-ready framework? That was one direction that we were thinking about going, because it really is about pushing everything to the edge as much as possible.

His response was "No, this very much is the JAMstack." It's a rearchitecting of the web, in such a way that you're able to push your client experience to the edge. So that might be prerendered pages, but now we can take the entire client and push the entire client to the edge with things like React. So you're still delivering static files. That's the amazing thing to me.

You can create your whole website, your whole client experience, and it's just a statically-deliverable set of files via WebPack... And you can put that on CDN. So now you can have those available. Whether it's prerendered or whether it's the client itself, I think those both qualify as the J and M in JAMstack. That's JavaScript, it's Markup -- it's maybe less Markup, it's more JavaScript in the Redwood case... But we do want to offer the ability to prerender on a route-by-route basis, where you can just say "Here is a route."

Let's say you're building a blog... You know, this is maybe not the best thing to build with Redwood. There's lots of good solutions to this. But for the sake of everyone knows what a blog does and how it works, I'll use a blog as an example. You have a blog, and maybe all your blog files are at /blog/some-slug. What if you could just on that route say "I want this all prerendered" and then give it away to know what are the values that you would plug in for that slug? And now it could just go through and iterate all of those values beforehand and prerender them. This is not new. Other things like Next make this possible.

But this is something that I think is super-interesting, this hybrid model, where you can say "This is a full-stack application, but I have certain parts of it that I want prerendered."

**Kevin Ball:** Yes...

**Tom Preston-Werner:** And that becomes important now too from an SEO perspective. One of the biggest questions that we get is "How do I do SSR (server-side rendering)?" So far, the answer has been "Well, we don't, and we really hope to not ever have to", but the solution we have would be prerendering. So we wanna say, if you really wanna make sure that your frontpage, your marketing pages are fully-baked markup, then say that you want them prerendered and we'll do that.

With Netlify, that's super-easy. You're just like "Hey, here's a bunch of prerendered files. If you get a URL that matches one of those, just serve that straight off the CDN. If you don't, then drop back to index.js and now it's your application experience.

The beauty is that you can have that all in one application. In order to get that same characteristic, at Chatterbug we have to use Fastly to stitch together a Netlify-deployed marketing site with a Rails backend... And it's super-annoying. Now we have separate repositories for all the marketing stuff, and the application, and it's just -- it's more friction when it comes to knowing where stuff is, and how to change things... Because you have to remember, "Is this on the statically delivered marketing part of the site, or is this part of the application?", and it's not always super-clear where the division is.

But what if you just had the ability to prerender your marketing pages, while still being able to use JavaScript in a normal way to augment that and pull in dynamic stuff, like we've been doing in the static site world since forever? ...since the early days, with Disqus, where it's like "Okay, you've got a Jekyll site, it's blogs, and here you can just embed a Disqus thing, and this is how you do comments." So you'd still be able to do that.

\[00:48:04.07\] That to me is better than server-side rendering, which I just want to go away. I think if we could make SSR go away, it makes everything easier, from the whole rehydration process... Just the way you have to think about things is gnarly. And it's like, I can deliver the whole client directly to the customer, and I can do it very fast... And eventually, we'll get our deliverable sizes down. Maybe Apollo has some work to do on reducing deliverable size... \[laughs\] We use Apollo for the GraphQL transport. It's a fair bit of code.

So these are all things that we can do. Maybe not everything is puppies and rainbows right now, but we've got time. Let's spend a year, or two, or five years refining this stuff, and... What could Redwood look like in five years? I think it could be pretty awesome.

**Break:** \[00:49:02.16\]

**Kevin Ball:** Let's talk a little bit about things we can do on the performance side and how we think about precompilation... Because one thing we were talking about on the break is the approach to precompilation that y'all are taking is the inverse of Gatsby, where it's "Don't unless you have to", but then you can. But you brought up really the goal for all of this is performance. What are the outcomes? So what are the things that Redwood is doing today and that you can do in Redwood going forward, that'll really maximize performance in this multi-client world?

**Tom Preston-Werner:** Redwood is optimized for being a web application. That's different than most of these other things, like Gatsby, which are really quite optimized for content sites, like blogs, big marketing sites... That's maybe a big difference in how we perceive the world, and so everything is really dynamic from a content perspective. We don't do any prerendering right now. The goal is, like I said, to be able to be prerendering. But what would it mean to prerender -- think of web apps that you've built before; what would you prerender? A lot of apps are -- you as a user are interacting with them and doing things, and you might have some pages that could be prerenderable, maybe even a lot of pages... But what are those pages? Can they really be prerendered, or is it just a lot easier to dynamically-produce them?

\[00:52:04.06\] I think if there is prerenderable content, then it's probably caching... So I think a big challenge for Redwood in the future is how do you make GraphQL caching a lot easier? I don't see a lot of solutions for that. It tends to be fairly complex. It's not nearly as straightforward as it is with a REST API... But there are solutions there, they're maybe just not fully explored.

If you can do caching well, and if you can say "Alright, this data is gonna be requested", and if I can cache that, then I can provide prerendered content to all of my clients. Because what would it mean to prerender and deliver content to a website, and a mobile application, and a desktop application, and a CLI? Does that even make sense? Where are the benefits across those use cases? And if you wanna do that, you probably have to abstract up a level and put it between your GraphQL and your client, \[unintelligible 00:52:56.11\]

**Kevin Ball:** How similar to a distributed database does that get us? If we're thinking about how we distribute data out to the edge, or push things out, caching is in many ways like doing that at the read level; and if you are able to update your caches by write and you're willing to have some amount of period where you're not fully consistent, you could essentially do that at the write level, too. So does that move us in that direction? Are there more things that are missing?

**Tom Preston-Werner:** I would love for that to be the direction. I would love for you to have read duplicates all over the world, which - like you're saying, I think that's a really smart way to think about it. If we could do that, then you'd have to think a lot less about caching, and maybe more aggressive caching can wait for later. There's different stages of optimizing your performance.

When you first start, you fully render everything every time, and that's fine; you can get away with that. And then you get more traffic, and you start thinking about "Wow, we're using a lot of Lambda. This is not cool, this is getting pretty pricey... So how can we reduce the amount of logic that we're running?" If you can put that data closer to the edge and have that available, that will get you performance; it doesn't necessarily reduce your compute time... Although getting responses back faster from your database would help.

I think there's always gonna be a need for additional caching in front of your logic. Where can you get those benefits? So if you have a request that comes in via GraphQL, and it's the same as a request that you had a short time ago, what's the best way to return that same data within that window?

There's a bunch of other questions around Redwood and building a competent web application that are still unanswered... I think one of them is maybe you want something like Redis. Redis ends up being a pretty important piece of a lot of web architectures today, for exactly this kind of use case. So if you're running your business logic in Lambda, where is your memcache? Putting your memcache halfway across the world is not gonna solve anything for you... So now you wanna locate your memcache next to your Lambdas. And if you really wanna distribute your application, which is the dream of Redwood, now you want memcaches close to all your Lambdas. So is there a solution for that?

Another question is where do you put background jobs? You wanna send emails out of band - you can use a separate service, but there's lots of things that you'll wanna do within your application... To run batch jobs, to roll up data into single bits of information that you now store back in the database... How do you do that? There's bits and pieces that you can assemble out of AWS, but how do you make that Redwood-easy? Where's the solution for that? I don't know. Maybe we build some of these things; I have no problem building some of these things to make the ecosystem easier and better. I don't know that there's solutions that are as good as I want them to be out there for some of these things.

\[00:56:04.11\] Working more closely now with Netlify, on the board, I'm hoping to be able to make some of these things more possible... And there's already some new, interesting things that we're working on, that I think will make the number of options that you have for doing things like edge caching a lot easier. There's a bunch of them... There's all kinds of stuff that is part of a competent web application setup.

**Kevin Ball:** Yeah, there's some really interesting directions to probe there from the Redwood front. First off right now, how well do you deal with having multiple backend data stores? If you have a Redis layer and you have your Postgres database and you have -- I don't know, maybe you have some things that are living off in some CMS that you just have API access to... How do you integrate that into a Redwood application?

**Tom Preston-Werner:** It's totally fine right now. We make it really easy to access your database from your services files. The services files are what your GraphQL API is gonna map your resolvers to automatically for you. If you haven't seen that in the tutorial, check it out. It's super-slick. In those services files you just get db as a variable that you can access without having to do anything. It's just there; we just insert it for you. We won't do that with anything else, but there's nothing that prevents you from doing this the normal way, were you have some library that represents some third-party service or some other database, and you just pull it in, you create it (it's a singleton pattern, or whatever) and you access it the normal way. So you can have any number of data sources that you want, using a traditional setup. Or you want a third-party thing.

Let's say you wanna send emails directly from your Lambda functions, for security reasons, or that's just how you like to do it... And you can set up your integration with your mail provider through there, and you just have a library that knows how to do it for you, and all the configuration is somewhere else, you don't have to look at it. There's no problems there; you can have any number of data sources that you want.

**Kevin Ball:** The other thing that was occurring to me as you were speaking - I don't think I've seen anything talking about this yet... One of the things with having these different distributed data layers is that different types of data have different consistency needs, and have different amounts of real-time updatiness... And especially when you're talking about pushing everything out to the edge. Do you have thoughts on how we could make that feel Redwood-easy? Because right now, when I've dealt with that situation, it's very manual. It's like "Okay, this needs to go all the way back to the database, and anytime it's updated, you invalidate any caches you have... Whereas this one, it's okay if it takes a while. And this one maybe can't even be cached..." How would we make that easy?

**Tom Preston-Werner:** I don't have a super-good answer for you on that one.

**Jerod Santo:** Come on, Tom...!

**Tom Preston-Werner:** I'm so sorry... \[laughter\]

**Jerod Santo:** We brought you on here for the good answers, Tom... Come on! \[laughs\]

**Tom Preston-Werner:** Do you know how long it took us just to get Redwood 0.1 out?

**Kevin Ball:** Don't take that as a critique...

**Tom Preston-Werner:** \[laughs\]

**Kevin Ball:** I'm bad, I always ask these nasty questions... "You did this cool thing, but how do you make it ten times cooler?!"

**Tom Preston-Werner:** Yeah, it's like "That's cool and all, but..."

**Kevin Ball:** \[laughs\]

**Tom Preston-Werner:** I mean, these are all great questions. It's an open source project, Kball, and... \[laughter\]

**Kevin Ball:** No, I'm definitely gonna be pulling down the source and taking a look.

**Tom Preston-Werner:** GitHub... We do accept pull requests. No, I would love to make streaming -- we'll get streaming in there; we'll get real-time data flows in there... It's just a matter of time. We started with the base of what we thought was necessary to get what looks like a pretty standard, normal-looking thing going.

We drove a lot of the development of Redwood with the tutorial itself. The tutorial works 100%... Because we essentially were like "We're gonna write the tutorial in a way that we want it to work. And then we're gonna make that actually work." So it was tutorial-driven development. We've started with readme-driven development, but then we graduated to tutorial-driven development.

**Jerod Santo:** Evolved.

**Tom Preston-Werner:** And then the line in the sand for when we wanted to publish this and get a website out and start talking about it a lot was the tutorial works 100%. So the tutorial worked 100% the day before we launched it, and that was the day -- it was right down to the wire.

\[01:00:16.14\] So Redwood does not include a lot of things that you're gonna want, and that's on purpose, because we wanted to get it out there. We wanted to wait not too long, but we wanted it to be not vaporware. I'm fairly allergic to hype in general when a company or an organization or a project hypes something up way beforehand, before it's available... And they're like "This is gonna be amazing. Here's a little sneak peek, and look how great this is gonna be", because it's really dangerous.

I've seen this several times in my life - the more you hype something up, the more you better be able to deliver on that hype. Because if you don't, and you under-impress, you lose those people forever. They'll never come back. Because you cheated them. You got them excited, and then you let them down. So I'd much prefer the way that Apple used to be, which was "Oh, and one more thing..."

**Jerod Santo:** Let's talk about the company/organization/community/project... Of course, you're behind this, and we know you have the vested interest insofar as you wanted to see this future come to fruition, so you're helping create it; also, you have Netlify ties... Who else is involved? Is there a company behind this? Help people understand what does Redwood the community look like?

**Tom Preston-Werner:** There are four core contributors right now - myself, Peter Pistorius, who is with me at Chatterbug, and a lot of these ideas come from us just talking about architecture and our frustrations around Rails, and having a full-stack JS thing... And then Rob Cameron, who's been a friend of mine since forever. He was the best man at my wedding 15 years ago... We've been working on stuff since forever, so we brought him in. And then David Price now is on the team. He's here in San Francisco with me, and he's been a huge help in just getting the tutorial together. He's really helping manage the community.

The funny thing is that aside from Peter, I can't claim that any of us are super JavaScript experts, honestly... And I think that's probably a benefit. Because especially coming from Rails, the tolerance for pain is quite low.

**Kevin Ball:** Yes... \[laughs\]

**Tom Preston-Werner:** And the problem is that once you spend enough time in the JavaScript world, your tolerance for pain goes up quite a bit. And I was even in that phase. Rob came in, and Peter and I are like "Hey, check out how easy we made this", and Rob's like "This is horrible." \[laughter\] He's like "Why do you have to do all this? This is much boilerplate."

**Kevin Ball:** There's so much truth in that statement... The tolerance for pain in the JavaScript ecosystem is 100% holding us back.

**Tom Preston-Werner:** Yeah. So the beginner mindset has always served me well... And that is if you don't know how things work, and you come in and you have to figure them out, you'll see things that other people don't see. I sometimes say this in jest, but ignorance is my super-power. Not knowing what can't be done sometimes allows you to do the thing that nobody else will do because it's obvious that we can't do it.

So that's a bit of our philosophy... I can't learn everything, but I love building stuff, and I try to be aware enough of alternatives that I'm not just duplicating what other people have done... And then I'm like "Hey, I totally invented something brand new!" and everyone's like "You know that already exists, right?" So I try to be aware, but not so aware that it limits my imagination, if that makes any sense. But getting back to the organization... So there's the four of us that are the core team. We talk a lot with Netlify and Prisma. A lot.

\[01:03:54.28\] Full disclosure - I'm an investor in Netlify, obviously; I have been since the seed round. I'm an investor in Prisma as well; that was after we started working with them. I love what they're doing, and I think it's gonna be a huge improvement in the database integration... I wanna say ORM, but they don't wanna call it ORM. Query builder... ORM just captures so much. And the database management side as well. So we talk with them a ton.

It's not a company, it's just an open source project... But I am funding it with my own money, or through -- we have an organization that my wife has spun up called Preston-Warner Ventures, which is where we do all of our investing and all of our philanthropic work. So any grant -- we do a lot of grant-making around family planning, and we're getting into now a lot of climate change, we do some political activism to try to "fix" the United States, if you will...

So I put money into Redwood where I need to in order to make it happen. I don't have infinite time, and so where I can make things happen by paying people to do things, then that's a pleasure that I have. So that's how I'm supporting development on this in the long-term.

That said, I don't have any plans currently to commercialize Redwood, but it's not out of the question that someday there could be a commercial entity around it. I just wanted it to exist, and then we'll see where it goes.

**Jerod Santo:** So you mention it's very new software... We've got Kball grilling you on things that -- we haven't quite got to that yet... Slow down, Kball. We'll get there... We'll get there...

**Kevin Ball:** Hey, I was grilling Gatsby last week and they've had a lot longer to iron things out... \[laughter\] Or two weeks ago, or whatever.

**Jerod Santo:** Kball just grills with impunity. Whoever comes on, he's gonna grill them. What's the best starting place? Or is the water warm, or is it still frigid? Will there be dragons in lots of places? I know it's very new, because we've been trying to line up this show back in January, and you said "Hey, let's ship some software first..." And that happened just Monday as of recording; we're recording this on March the 12th... Is it like "Hop on in, the water is warm"? It's 0.1, but is that super-lots of problems, or will people have a good experience grabbing the tutorial and running with it?

**Tom Preston-Werner:** I think if you go through the tutorial, you'll have a great experience. And it's a lot of material there. We go through a lot. It would take you an hour to do the tutorial probably, if you went through and you copy-pasted everything in and you follow the examples and you look at things a little more deeply... It'll take you an hour to go through it.

There's a lot there, and it all works for that specific example... But there are a lot of situations where it doesn't. It doesn't work great on Windows right now. We haven't really spent a lot of time making it work on Windows, which is why that's the case... But we are still in the "make it work" phase. The tutorial works, but the router does what it needs to do to get the tutorial to work. All of these things are really optimized for the tutorial.

So I think you can start playing with it, for sure. I would love for people to start playing with it; that's why we wanted to release it, so that we could get more real-world use cases out there, so that that can inform our decisions on what to work on next, and see what people really care about.

We don't handle authentication right now. We have some really nice authentication plugins... We don't have Storybook integrated right now... And Storybook to me is one of the most exciting things about Redwood. We haven't had a chance to integrate it properly yet, because it's a little tricky with things like cells inside React Components. We wanna make that work right out of the box, where it's super-easy to put that into Storybook. It'll require some kind of mocking...

\[01:07:50.15\] We wanna solve all that for you, but Storybook fulfills a dream I've had for a really long time, which is I want to be able to work on my components in isolation, outside of the application. This is a problem, a frustration that I've had with Rails since forever, which is you're like "Okay, I'm going to build this chunk of the website, and I need it to look a certain way, and in order to get it to look like that, I need it to have the right data" and so on. I'm either gonna have to get my database to feed it the data that is gonna make it look that way, or I'm gonna have to hardcode the data in that controller, or maybe I start fiddling with the view file itself, and passing it in the data I want, and it needs to be in these different states... But these two things would never happen together, so that's not really a valid state... And it just is horrible to try to get data to look like what you want inside of an application, especially if it's behind authentication, which often it will be.

So the solution to that is to be able to separate your rendering logic from your data, and that's exactly what React offers. You say "Here's a React component. It takes in these props, and it renders this output."

As soon as you start using a bunch of global state context, these things get a lot more complicated. Now you have to surround it with a thing that's gonna provide that... But it still at the end of the day is just input, and you can't take it out of your application and develop it in isolation. And if you do that, it's amazing, because you can just give up whatever data you want at will. You just replace it in a Storybook file, or you have it on a page where you can just type stuff in, or toggle checkmarks, and get it to look like how you want... But it's always consistent, because it's always internally managing its own consistency, and you can do it in isolation that way.

That to me is a highly under-appreciated aspect that React gives you, and I think it's because it's hard to do well, especially when you're doing data fetching in your React components, which we think they should be collocated, because it's super-nice. It's super-nice to be able to do. You're like "Here's my data, here's where I consume my data" and there you go.

You'll also have a lot of pure React components that don't need to do that, and those are super-easy to test. But man, it's nice to be able to develop that way. And at the same time, you're building up your documentation for your design system. You're gonna want this stuff anyway. So if you can start there, even better.

**Kevin Ball:** One last big question... We talked a lot about how to get started playing with Redwood, come to do the tutorial, do things like that... You invited me, saying it's open source, and come and contribute... So if I or someone who's listening right now was excited and said "Okay, I wanna help make this a thing", accomplish all these amazing things that we're talking about here, that aren't quite reality but are within sight, what's the best way to get started as a contributor?

**Tom Preston-Werner:** Go to redwoodjs.com, and in the upper right there's a link to our community forum, which is a Discourse forum. You can go in there and you can ask any questions you want, you can say "Hey, I have this idea. I wanna talk about it." We'll engage with you there. If you wanna just start writing code, then you can clone down the RedwoodJS/redwood project. There's a contributing document there to help you get spun up to work on Redwood itself, and then issue a pull request back. Or even just filing issues is super-helpful; letting us know what's not working for you in your environment. All of these things are totally appreciated and valuable.

**Jerod Santo:** Awesome. Listeners, you know where to find the links to all things discussed in this episode - in your show notes; if you're listening out there outside of a podcast app, we are at Changelog.com/jsparty/119, as this is the 119th episode.

Tom, thanks so much for joining us. I feel like we've just kind of touched the surface here... Or maybe if it's a Redwood analogy, we're just kind of staring at the bottom of the tree... I don't know. \[laughter\] I'm not sure how that analogy works out, but I'm sure we could talk for hours more with you... But we are hitting up on our time. Thanks so much for joining us and for open-sourcing this very cool framework. Best of luck, and listeners out there - give it a shot. Go through that tutorial... I can vouch for the thoroughness of the tutorial; I tried to make it all the way through, and I'm like 60% of the way there this morning. I had fun along the way...

That's our show for this week. Divya and Kball, thanks for joining me. Tom, we really appreciate it. We'll talk to you next time.

**Tom Preston-Werner:** Thanks for having me!

**Break:** \[01:12:37.03\]

**Divya Sasidharan:** I think it's interesting just pushing the boundaries of (as you've mentioned) what the definition of JAMstack is, because I think we start by saying like JAMstack are these particular pieces of technology (JavaScript, APIs and Markup), but I think people get caught up and say "Wait, but my site is just HTML. Is that JAMstack? Wait, my site is server-side rendered. Is that JAMstack?" And in a sense, from the conversation around it, it is, or that is what people say...

For instance, ZEIT talks about serverless server-side rendering, which is like JAMstack - I think it's under their definition of what JAMstack is - and so Netlify is like "Well, not really..." So there's a lot of conversations back and forth of like "What are the bounds of JAMstack? At what point is it no longer JAMstack, and is it monolithic?" Because I think saying everything is JAMstack kind of dilutes the term slightly, because we want to be like -- not every application should be JAMstack, but JAMstack has huge benefits when it comes to certain types of applications, as you mentioned... Like marketing pages where you wanna prerender it, you want things to be really fast, and then it makes sense; but not in every situation.

So I think it's just trying to figure out what the bounds of that are. And then within Redwood itself, it's like "Okay, it's JAMstack", but then there are parts of it that are like -- essentially, the backend is sort of an external API if you think about it, because it's decoupled from the frontend... So it's just trying to tease those layers apart to explain.

**Tom Preston-Werner:** Yeah. I think it counts, because you've got statically-deliverable JavaScript talking with an API to some backend. It just happens with Redwood that you're writing your backend, and not using third-party backends... But you very well may be doing a lot of that as well for uploading files, sending emails... You'll still be doing a lot of that kind of thing.

And then the Markup side is the prerendered stuff. But I think there is a clear division between something like Redwood and something like Rails, in the traditional sense.

**Divya Sasidharan:** Oh, for sure, yeah.

**Tom Preston-Werner:** Rails is not JAMstack, very much not. To me, anything that's doing server-side rendering is probably not JAMstack... Is that controversial? \[laughter\]

**Divya Sasidharan:** I think that's a hot take. \[laughs\]

**Tom Preston-Werner:** That's how I think about it. It's about being able to push everything to the edge... So right now, I can't quite claim that Redwood is purely JAMstack, because of the whole data side of it. But I think that eventually you'll be able to push all those things to the edge with a single Git deploy, and then I think it is... And I think that's a really powerful expansion of what could be considered to be JAMstack. I'm trying to be sensitive to JAMstack... I love it. I talked with Matt and Chris about this when they were first starting to think about JAMstack as a name... So I've been here for the whole ride; I'm very sensitive to it, and I did talk to Chris and he seemed to like it. I think it could be the future of what Netlify is capable of doing.

**Divya Sasidharan:** \[01:16:14.13\] Sure, yeah.

**Jerod Santo:** Break.

**Divya Sasidharan:** \[laughs\] I saw Jerod just wanting to say something... \[laughs\]

**Tom Preston-Werner:** I tried to give you a really nice ending point there, Jerod...

**Jerod Santo:** Yeah, I know... I really liked it.

**Tom Preston-Werner:** ...but Divya screwed it up.

**Divya Sasidharan:** I know...! I just had to. I was like "I have one more thing to build on it." \[laughs\]

**Kevin Ball:** I held my tongue on my "One more thing..." \[laughs\]

**Divya Sasidharan:** I'm sorry, I have no self-control.

**Jerod Santo:** There's always one more thing.

**Kevin Ball:** It's okay... \[laughter\]

**Jerod Santo:** That was such a good breaking spot, I might take \[unintelligible 01:16:40.24\] and either move it to the third segment and we'll just splice it, or maybe put it in the post-show.

**Divya Sasidharan:** Honestly, I wanted someone else to say that, because I say that a lot, and my co-worker Phil Hawksworth as well... Both of us are just like "Serverless server-side rendering. It's not JAMstack..." \[laughs\]

**Tom Preston-Werner:** Right?! High five...

**Divya Sasidharan:** It doesn't make any sense... \[laughs\] Yeah, I'm just like "You're just making everything JAMstack at that point." Because the thing is, the moment you say that, you remove the performance benefits of prerendering completely... And you can't even say it's fast anymore, because it's not.

**Tom Preston-Werner:** Right. And I think it's really a product of people's paranoia around SEO, which I think is kind of legitimate, but increasingly less legitimate. And especially if you can just do prerendering and make it possible to sprinkle some JavaScript on top, and you can still get done what you wanna get done while having a prerendered site that Google's gonna be totally fine with forever.

**Jerod Santo:** But what if we could just take our server-side rendering - even just go back to the old-style Rails app - and just take all those Rails apps and just scale them horizontally around the world to the edges, and have this amazing database that you guys were talking about that's just kind of persisted around the world, and locally available all the time? Isn't that a much more straightforward developer mindflow, of like "I get a request, I do some things dynamically and I render the response"? If we could solve the problem of it being centrally located and all the things around that, wouldn't that be a better developer experience?

**Tom Preston-Werner:** Yeah, but it doesn't solve the multi-client problem that I think is so prevalent today. If you tightly couple your front-end and your back-end, then you're not solving the multi-client problem.

**Kevin Ball:** I think that's exactly the reason. I was 100% on Jerod's team until you said that, and then I'm like, "Well, actually..."

**Tom Preston-Werner:** Ah, yes!

**Jerod Santo:** I think some of that multi-client problem is kind of the Facebook problem. A lot of us just have a website. A lot of us don't need a CLI, or an iPhone app.

**Tom Preston-Werner:** Well, that's fine. You've probably seen Blitz come across your radar... I think that could be the solution to like "I'm only gonna have a website. I just need it. It's fine to be tightly-coupled; it's gonna do some magic for me and do a transport actually with JSON", but I don't know how you make that multi-client. But if you don't need to, then maybe you don't need the power of Redwood.

\[01:18:59.28\] To me, Redwood is a thing that should be scalable, and I don't know how you scale that approach without getting into the multi-client problem. If that's not a need that you have, then use something else. I'm not trying to make everyone use Redwood, it's just trying to solve a problem that I've seen several times now, and I think a lot of people see. If I've seen it several times, that means that a lot of people have seen it. But it comes at a cost. There is a cost in complexity.

**Jerod Santo:** We're still not on the show, by the way. This isn't the show.

**Divya Sasidharan:** \[laughs\]

**Kevin Ball:** Yeah... Alright...

**Divya Sasidharan:** We can make it the show "It's not a show."

**Kevin Ball:** I'll save my thoughts and questions...

**Jerod Santo:** Because you're just gonna keep talking, but I was like--

**Tom Preston-Werner:** I don't care whether it's the show or not the show. It doesn't matter...

**Jerod Santo:** No, I'm having fun, but I don't want anybody to have preconceived notions that this is going onto the show, because this is the break.

**Kevin Ball:** \[laughs\]

**Tom Preston-Werner:** I had no illusions...

**Jerod Santo:** Okay. Well, once Kball started going on another conversation, I was like "He might be thinking we're back on the show", because sometimes we will roll through... So I just wanted to make clear, this is like cutting room floor. That being said, it's so good we might be able to just have a 30-minute post-show, which is the actual show.

**Tom Preston-Werner:** Live mike.

**Divya Sasidharan:** Oh, yeah.

**Tom Preston-Werner:** Just cut it into two shows.

**Jerod Santo:** Anyways, Kball, do you want to save it for the show, or do you wanna...?

**Kevin Ball:** Well, I don't know. It depends where y'all wanna go.

**Jerod Santo:** We just broke the fourth wall pretty hard, so...

**Divya Sasidharan:** \[laughs\]

**Kevin Ball:** Yeah. Well, I'd love to dig more in the concept of precompilation... I think there's a few different things. The web is moving more and more in that direction. That's a lot of what JAMstack and Gatsby and Svelte are doing, is saying "What is the maximum possible we can compile at build time, do our logic then, and push things out?" Two things I'd love to explore there - one is the philosophy that you have, which feels like an inversion of the Gatsby approach... Gatsby is like "Precompile everything unless you have to not, and then have a section that is not", whereas you're doing the other way; you're saying "Don't precompile unless you have to, and then do it."

But the other pieces to the question of how that relates with multi-client, like "Is there an equivalent to this precompile type of thing outside of the web client?"

**Tom Preston-Werner:** I mean, a mobile application is essentially pretty -- well, it's really no different than delivering your JavaScript client via CDN. You're delivering your mobile application as a static thing to a mobile phone, and then talking over an API. That's the only way to do it with the architecture that is common today.

**Kevin Ball:** Yeah. But a mobile app delivered that way is more like a spa than a pre-compiled...

**Tom Preston-Werner:** Yes, you're right. It has nothing to do with the precomputing thing. But could you do that for a mobile application?

**Kevin Ball:** Is there value in doing that for mobile, or is there value in doing that for desktop, or CLI, or something else?

**Tom Preston-Werner:** Yeah... Well, that gets into caching. That's where caching is more appropriate. You would wanna do caching at a layer up, before all of your clients, for performance, if that's what you're going after... Which you usually are.

**Kevin Ball:** Yeah.

**Jerod Santo:** Okay, this is all good show content. We need to start the show again.

**Tom Preston-Werner:** \[laughs\] Let's start it up!

**Jerod Santo:** Yeah, don't talk, Kball. I'm gonna start the show and you'll start talking.

**Kevin Ball:** \[laughs\]

**Jerod Santo:** In fact, you can take us into the next segment, because you've primed the pump. I'm just gonna set a marker here and say "Go ahead, Kball." Start us off.

**Kevin Ball:** So let's talk a little bit about--
