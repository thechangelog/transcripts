**Amal Hussein:** Hello, party people! We are so, so, so excited to be with you today. We're excited to welcome a very special guest, Matteo Collina. Welcome, Matteo.

**Matteo Collina:** Hi, Amal! I'm so happy to be here again.

**Amal Hussein:** Hello! We're so excited to have you. And on the panel with us we've got Nick Nisi today. Hello, welcome, Nick.

**Nick Nisi:** Hoy-hoy. Excited to be here!

**Matteo Collina:** Hi, Nick.

**Amal Hussein:** Yeah, so we could probably invite Matteo on for the next month continuously and not run out of topics, but we're gonna try and limit the discussion today to talk about his open source work on Node, and specifically a couple of really popular packages in the Node ecosystem that he's the lead maintainer of - Fastify and Pino.

Fastify is one of the fastest Node web server frameworks out there, no pun intended... And Pino is an incredible logger; definitely, the fastest and best-in-class logger in the Node.js ecosystem. I'm a proud user of it.

So yeah, Matteo, before we get into the specifics on the libraries, why don't you introduce yourself? Tell us a little bit about your background, how you got started in open source, and what led you to becoming a member of the Node.js Technical Steering Committee?

**Matteo Collina:** Okay. So this could be the show, right? You have asked me that question - I'll try to limit it. It's a long story; I'm going to cut it very shortly. I started coding very early; way too early that's healthy for a kid, so that's probably maybe not something that we all want to do with our kids... I don't know if I'm going to put my kid in front of a keyboard, coding at four... That was my dad -- I was watching my dad coding when I was four. That was probably a little bit too early.

\[04:17\] Anyway, that was the starting time. I started wobbling into the open source world and community... I started using Linux when I was a teenager, something like that. Linux came in CDs at the time; that was a long, long time ago. Then - what else? Well, after that I went to a very, very normal thing; I went to uni. I did my Bachelor and Master...

**Amal Hussein:** Did you finish?

**Matteo Collina:** I finished them all. I enjoyed my time. And then it was not enough, and then I did a Ph.D. Well, I went back one year in the industry here in Italy. I did not like what I saw in the industry. During my time at my Master I was studying how to build custom databases, robot arms, how to do the equations to send a rocket to the atmosphere... That was the type of stuff that I was doing.

After that, I ended up writing the \[05:14\] WSDL, SOAP... A lot of libraries that start with a J at the beginning...

**Nick Nisi:** \[laughs\] PTSD for me.

**Matteo Collina:** Yeah... Java being 1, 2, 3 at the time, my first encounter with open source was when I tried to fix -- so when I was doing my Master, I started publishing... npm came our, more or less -- I don't remember... Not npm. GitHub came out more or less like -- I don't remember the year. I can probably look it up. But this was probably 2008-2009 type of years. I started publishing my first thing. I was really into Ruby at the time. I was not using Ruby in my job, and I loved it, and I really wanted to use Ruby and Ruby on Rails... But I loved the Ruby language more than Rails, for whatever reason...

Then I went one year in the industry, didn't like what I saw, tried to get a job out of Italy, apply to a few of the big co's... Typically, I wanted to move to London, so London jobs, so I applied to a few there... I failed spectacularly at all the job interviews, so - you know what, folks? If you fail at job interviews, it's totally normal. The miracle is when you pass. It's not when you fail. The starting point is -- I will know about that, I will understand that later in my career... But at the time it was totally not clear to my why I kept failing at those interviews... And I was passing the interviews in Italy, but I did not want those kinds of jobs; I really wanted to bring up the boundaries of --

**Amal Hussein:** You wanted to write Java... Java Beans, like all those other cool kids.

**Matteo Collina:** Yeah, yeah. The problem was not even that; the problem was it was not the top, latest Java; it was the Java five years before, the problem... I don't know, sorry; I was not very excited.

**Amal Hussein:** Not to go on a huge tangent, but - you know, I mean, I am Amal... I'm curious - in Europe I always hear this "Oh, Europe is 5-10 years behind the United States when it comes to enterprise infrastructure technology." Would you say that that's accurate?

**Matteo Collina:** No, it's not that -- it depends. It was like that, especially Italy, when I entered the career. However, it's accelerating significantly things here in Europe.

**Amal Hussein:** You have more engineers.

**Matteo Collina:** No, it's not about the engineers. It's about the consumers.

**Amal Hussein:** But you do have more engineers, right? There are more software engineers in Europe.

**Matteo Collina:** \[07:56\] I don't know the stats. What I know is that the consumers expect a certain level of quality now. And it's driven by big U.S. companies. So they want that same level of quality for products built in Europe. So even for internal company software, that's usually not very nice. So they expect this level of technology and this level of user experience. Because of that, that has crippled down into "How can we implement those things? How can we improve the user experience for our products?" So this has been pushing the technology in Europe to catch up.

So it's catching up. It's still not probably there, it's probably a little bit late, at least on a certain class of companies, but it's catching up quickly. We start to see some good class of startups emerging, producing really interesting technology, especially in London, Amsterdam... We even have a few interesting startups in Italy, which - you know, one that raised 300 million this year.

**Amal Hussein:** Wow.

**Matteo Collina:** I was just like, "Whoa...!"

**Amal Hussein:** Is it 300 million lira?

**Matteo Collina:** No. Euros. The lira is -- okay, you want some? I have some. It's nothing anymore.

**Amal Hussein:** My parents are Somali, and they both left when they were teenagers, but shilling is the same thing; it's buckets and buckets of cash to buy a cup of tea.

**Matteo Collina:** Yeah. So... It's like that. So after this I ended up going back to doing a Ph.D. Doing my Ph.D. - I started my Ph.D. at the beginning of 2011, and at that time Node.js existed already. The super-famous talk from Ryan Dahl happened, and there was a lot of very interesting communities forming.

At that same time there were people trying to put JS everywhere. So they were doing the Node bots, they were doing the drones, they were doing all the things JavaScript. JavaScript all the things. So I tried this, and I wanted to do a certain level of research during my Ph.D, and instead of using -- it was alone, and they wanted to be very productive... And I know how faster I could write Ruby compared to what I could write Java... But Ruby - let's face it, it's slow. It was a very slow language at the time. You could not do parallel programming, and so on. And I needed a language that will perform as good as Java, but will take a third of the time, or a tenth of the time to write, because I was alone. I tried Node, ran some benchmarks, was totally --

**Amal Hussein:** Mind-blown.

**Matteo Collina:** ...mind-blown. Then I tried npm, and when I tried npm, it was totally clear to me Node.js was going to take over the industry. The reason - it's Maven.

**Jingle:** \[10:51\] Please hold, we're having technical difficulties. \[11:02\]

**Matteo Collina:** One of the key fundamental issues in Maven was that you could not have the same library at two different versions at the same time. So let's say that you wanted to use a library that had a certain version of a utility library. Now, that utility library yourself, your software will not compile, because it needed to all be at the same version, which meant that people could not break backward compatibility and innovate freely. npm allows this. npm allows the same dependency to be present thousands of times, at all the possible versions, which means that we have solved the reusing software problem. It also means that Node modules become the heaviest subject in the Universe. We have been successful at it. We have been trying hard to make that happen for at least as long as I've been in the industry, and with npm we actually reached that state.

**Amal Hussein:** Okay, so I feel like it's not an issue for me, them being the heaviest objects in the universe, because it's a server technology, it's never getting shipped in the browser... But I feel like these issues with dependencies really became a problem once the frontend community hijacked Node as their build chain and their dependency management.

**Matteo Collina:** \[12:18\] It's totally fine. They are not shipping them in the brow-so, all of those things that I'm pressing in Node modules, most of them is not stuff that you want to ship in the browser anyway. It's all the toolchain. In fairness, it's bytes on disk, disk is very cheap; it's bytes on network, and bytes on the wire are somewhat cheap in the vast majority of the world where you would develop software anyway... So the reality is that that's fine. And that's the price for using a lot of software. You can build everything yourself and not have all those things you have to download.

But I don't know, for all my time, I have been -- you know, at some point, in order to have the new version of Red Hat, I needed to receive a CD. You see, that was slow. Downloading a few megabytes over the wire - well, it's not slow. But that thing would actually -- the full disk was 600 MB, and now a Node module is a hundred and something...

**Amal Hussein:** Yeah, I think that's a really good analogy, because you're absolutely right - you're not getting CDs in the mail; you're just able to npm install. I think the concern is more that bytes to parse, and then making users wait while your JavaScript is parsing, or creating janky experiences because your JavaScript is parsing - that's the problem. And I understand, open source is working, because I think most people only write like 10% of the code actually needed to run their application these days. Everything else, that 90% comes from open source modules... And yeah, if you wanted to write that yourself, knock yourself out; you're not gonna do as good of a job, I can tell you that, because you're not gonna beat millions of developer brains... But it's still something that you need to manage, right? And I can tell you, when I'm picking a package, I have a rubric, like "How many dependencies does this package have?" Because I don't want my packages to have a lot of dependencies. I don't need packages that bring their own luggage to the party. It's like, okay, you're my house guest, you're not allowed to invite your own set of guests. So I try to keep it very light with my dependencies as much as possible, and I'm very careful about the number of dependencies I use that require peer dependencies as well... Because peer dependencies is like an ecosystem that you need to keep an eye on. So there is a cost, is what I'm trying to say, Matteo.

**Matteo Collina:** Yeah, absolutely. I don't think this is simple in any form or fashion. It's just that the level of efficiency that the industry requires to us right now in how we develop software - it's impossible to reach without massive software reuse across projects.

**Amal Hussein:** Right, exactly. And so what led you down the path of -- because you now have hundreds of npm packages...

**Matteo Collina:** Four hundred and something. Something like that.

**Amal Hussein:** And a lot of them are quite popular... So what led you down that rabbit hole? Were you your first customer?

**Matteo Collina:** Yeah, totally. I code things for myself. No, it's not necessarily true -- I code these because I need them to exist. So I'm not necessarily certain that I need -- I first try small, with low investments of time, to develop something, and then invest more time as I see if something is getting popular and it's useful. So it's a slow curve. Typically, I am the first client of all my modules. I need something to exist in order to what I want to do. This is also part of my job... I work for a company called NearForm, I am essentially a consultant... I help companies using JavaScript. That's part of what NearForm does... Which means that we have teams, we have our clients and so on that might need something.

\[16:08\] So I have a very good pulse of -- I always had a very good pulse... I've been at this company for seven years and nine months, or something, so I have a good pulse on what the user needs. I can see what is missing and I can start developing it. Or I can foretell problems and plan for the worst, and start something, so that when the time is right, you have it done. And that was kind of what happened. So that's kind of what I've done so far. In between, I ended up doing a Ph.D, and that's a story on itself. Then I worked for NearForm. That was the gap that we didn't cover.

**Amal Hussein:** And then somewhere you also joined the Node.js Technical Steering Committee...

**Matteo Collina:** I joined after. I joined the Node Tech Steering Committee before Pino and Fastify existed. First of all, I tried to work on Node core for a while; at that point in time, the leadership was at Joyent; they were doing a really bad job at maintaining Node, and they did not want Node to evolve. They considered things done. They had a huge amount of bugs to fix, and they didn't want them to be fixed.

**Amal Hussein:** Interesting. I'm like, "Okay, we should do a show on this. Open source drama..."

**Matteo Collina:** Yeah... That's open source drama.

**Amal Hussein:** Drama is very real. But yeah, despite it all, what's it been like being on the TSC? It's a very elite club of people, but also, there's a lot of --

**Matteo Collina:** It's very simple to get on the TSC. It's not hard.

**Amal Hussein:** Okay...

**Matteo Collina:** It's not hard in the sense of "Oh, this is an impossible job and you need to be such an incredible developer to be there." That's not true, okay? What is true is that in order to be at the TSC you need to keep a same level of contributions to Node.js through the times. So it means that you need to keep a strong, consistent number of contributions for 3-6 months more or less, and show that you deeply care about the success of the platform. After that, somebody will tap your shoulder and you will get on the TSC. So that is the simplicity of it. It just requires hard work. It's probably three months to become a collaborator and another 3-6 months to get to the TSC, if you want to reach. So if you want to get there, it's probably a one-year project, overall. That's cool. It's not something that --

The problems that we fix at the TSC can be hard, it can be a lot of drama... The Java ones are the worst. From time to time we want to discuss technical problems and thing, and instead we ended up discussing drama. There has been a lot of drama over the years; some of that was handled well, some of that was handled less well... I'm proud of certain things, I'm not proud of certain others... We have our own scars as a community. However, the project now is in a very good shape. We are very focused on shipping new things, improving it where it's lacking... I feel it's moving into the right direction. We have shipped ESM; this was a miracle. Everybody was betting against ESM. We can talk about ESM.

**Amal Hussein:** Oh my God, ESM has gotta be its own show. We need like an ESM follow-up.

**Matteo Collina:** Yeah... Yeah, but you know, we need to invite a bunch more people, not me. Invite Myles to talk about ESM.

**Amal Hussein:** Myles is like the poster child for Node's implementation of ESM, but...

**Matteo Collina:** Yeah.

**Amal Hussein:** But I think for me what's really impressive, obviously on the JavaScript, on the language side - the TC39 has been kicking butt for quite a while. They've been really helping shape the language and evolve it in the right direction. But I think on the other side of that, I think Node contributors and collaborators have really done a good job of keeping up with the spec; more and more of new features in the language are being supported natively, you don't need that experimental flag, or harmony flag as much...

**Matteo Collina:** Yup.

**Amal Hussein:** And then also modules. That's a huge, huge win. I don't know if people really fully understand how difficult it is to implement a modules system in Node... Because Node had its own module system; getting that to work, and be back-compat, and not break the web... That's a huge, huge accomplishment. So really, kudos to the team.

**Break:** \[20:34\]

**Nick Nisi:** That was a fascinating journey through the early days of Node and your early career... Very exciting. You were also on JS Party 103, talking about Streams. So we've definitely heard some great things from you, more great history, and we were just talking in the break about how we need to have you back. So we will definitely do that. But I definitely wanted to segue us into your libraries, and particularly Fastify and Pino. If I understand correctly, Fastify came out of Pino, so maybe let's start with Pino, talk about what it is and how it came to be...

**Matteo Collina:** Pino is a logging library for Node. Now, logging - what is logging? Logging is the thing that you do -- you know, the most crude way of logging in Node is doing console log something. It's printing on a terminal However, when you're printing on a terminal, you really don't want to be just printing on a terminal, because you want to add a lot of other metadata to it. You want to add the timestamp, the time at which you have been logging your things, you want to add - this is one, for example... You can add the time -- you might want to change and make it pretty, and add colors, or you might want to change the format and ship it to Elasticsearch, for example... Or OpenSearch, whatever... You know, let's be friendly to everybody. This is another fight that I don't want to open, but this is an interesting one to have on this show... Anyway. There is Elasticsearch, you might want to ship it to syslog, you might want to get it collected via the Docker logs, or CloudWatch, or I don't know...

**Amal Hussein:** Logrotate.

**Matteo Collina:** Or Logrotate! Okay. So one of the earliest problems in Node was - when Node came to be, people started developing loggers, that are useful for creating structured information from your application. And they are often required even for some regulations, or for actually knowing what is going on in your app the moment you have a bug. So - very useful. It saved my life a few times already. You really want a good logging library in your system, and use it.

\[24:04\] So what happened at the time was the popular ones were -- we're talking about 2016, something like that. In 2016, there were two main popular logging libraries; one was Bunyan, developed by Joyent, and one was Winston, maintained by our friend, Charlie Robbins, Indexzero. However, they both had the same approach, which is "Oh, I follow the Java approach for loggers, which is I have a logger that wraps a logger, that wraps a logger (three, four times) before I am going to write down to a file." And they have this approach of nesting things, and being able to create multiple loggers, and so on, create multiple destinations, and so on and so forth.

The typical problem those loggers had - one was throughput, and the other one was memory usage. So it was very hard to control the amount of memory those loggers were using before writing. You know, you want your log -- you do console log, right? Node.js is a synchronous platform. But you're not waiting for that log line to be written to continue. However, you're doing something synchronous, but it's something that is asynchronous in nature, or synchronous in nature. So you have this dichotomy. And in some cases, memory could actually explode, because let's say that you want to send all your logs to Elasticsearch, for example - then you might produce more logs than what you can ship to Elasticsearch in time, and in the meanwhile, your memory will start ballooning. All of that comes to be very complicated, okay?

**Amal Hussein:** Well, I do think log management is honestly one of the most complicated things, that seems so simple on the surface.

**Matteo Collina:** Yeah, and it's also so boring.

**Nick Nisi:** Yes. \[laughs\]

**Amal Hussein:** Yeah, it's like the least glamorous, attractive thing. It's like, "Oh yeah, I've just gotta build a logger. I've gotta find a way to get my logs to the cloud, off of the server." I need to get it to another cloud, or I need to get it to another part of the cloud, to be more specific. It's crazy. And then there's always a cost to logging, and people always forget that. You have to log carefully, and selectively...

**Matteo Collina:** And it's very tricky, exactly. So... At the time, I started doing some performance optimizations to clients' application. There were a lot of startups and big companies that started shipping Node.js projects at scale, and they were having such a big problem.

It turned out that it was -- this is a fun story, as usual... I was in London for doing one of those consulting with my friend, David Mark Clements, that you have met, Amal... And I don't know, Nick, if you have met Dave, but we have some stories together... He was working with NearForm at the time and we were doing a lot of those things together. We were doing some consulting in London.

We at the company do some performance optimizations and so on, and then we reached a point that their biggest problem was the logger. They were logging so much... They were not really logging so much, but the main bottleneck for their application was the logger. And I was asked "What should we use?" They told me, "We've found out that the bottleneck was the logger", and then they asked us "What should we use?" This was Bunyon, and this is the most popular logger. We really like this logger. What can we do?" So I said "Well, the only thing that I can do is write one." So we start writing a very, very minimal version of the logger.

**Amal Hussein:** That's so heroic. That's like the romantic comedy line...

**Matteo Collina:** Wait a second...

**Amal Hussein:** "If this most popular logger is treating you so badly, the best thing I can do is write you a new one, baby..."

**Matteo Collina:** Yeah... And it was so romantic. So that happened, okay... And we started developing the thing. And it's called Pino, because Pine was taken. And in front of my house at the time there was a pine. That's it.

**Amal Hussein:** But that's Italian for pine, right? It's not in English.

**Matteo Collina:** Yes, of course.

**Amal Hussein:** \[28:11\] All of your packages were actually Italian. I mean, what's the Italian way to say "fast"?

**Matteo Collina:** Veloce.

**Amal Hussein:** Veloce. See, Veloce would be a great name for a Node package...

**Matteo Collina:** Yeah, I know... It went for Fastify at the time. Anyway. This shipped in the summer of 2016, something like that. And we presented at a talk at Node Summit, I think it was August 2016. But the module was already done; we were using it in production. The typical thing is memory reduction in such cases were dropped by 200-300 MB, easy, and throughput was -- removing the bottleneck, so the throughput was 1,5 or 2 times, essentially, for the application with the problem. So a success.

The problem is, all those loggers, Bunyon and Winston, were doing a lot too many things, and we didn't need to do all those things to log. They just want to write things out as fast as possible, to standard out, because that's what we use; we use containers, right? We don't want to rotate logfiles, or ship it to Elasticsearch on process, and so on. No. Just send out to standard output, or write them to a file, and then somebody else will pick those things up and ship it where it needs to be shipped... Which is the philosophy of cloud-based logging anyway, so why the heck would you want to do something different?

So after that, I think I was having a beer or dinner with David, and David said "Yeah, we have done Pino... So what are we doing next?" And I told him, "Well, the next biggest bottleneck for Node.js is Express."

**Amal Hussein:** Yeah...

**Matteo Collina:** Express is slow. Just by using Express, you are cutting your throughput by five. And Hapi was worse.

**Amal Hussein:** Is this as opposed to the vanilla HTTP module?

**Matteo Collina:** Yeah, exactly.

**Amal Hussein:** Interesting.

**Matteo Collina:** I don't remember what was at the time is 5-6-10 right now. It's not 10, but it's probably 5-6 times.

**Amal Hussein:** Is Koa fast? I've never done any benchmarking for Koa.

**Matteo Collina:** It's slightly faster. It's kind of 2x compared to Express. Probably half what Node Core can do. Still, you're still paying a significant penalty on using those frameworks.

**Amal Hussein:** And what about -- I'm just curious... I'm sorry, this is the stuff I nerd out about. So at Netflix I know they're using a bunch of Node.

**Matteo Collina:** Restify. Restify. And Express. And they are more or less happy, because they have a lot of codebase using it, developed back in the day. So it's probably not worth to change it unless you really need to. The problem was already on the TSC, and the question was "Why the heck are we spending effort in improving the performance of Node if then you use a logger and a web framework that will destroy your performance?" So it's not worth optimizing Node Core, or improving Node Core if we have those problems in the ecosystem.

So I started doing some research... However, I picked one choice. Writing a web framework. Try to look at the HTTP spec, the GP101 1.1LFC and cry and run away. It's a Gargantuan job. That should be a very important read at every course, bootcamp, university, whatever... But it's a big, big spec.

So I know it was a massive, Gargantuan task, so I decided "Well, I can't do this alone, and I can't get NearForm to pay for it, because it's a new web framework and it will take years to get it done. So how can we get it done?" I decided, "Well, let's see if there is somebody else that is seeing the same problems, and if they wanted to join me on that journey."

\[31:59\] At that time I was giving a Node.js workshop in Bologna. One of the students that came there was a university graduate; he was a university student, he was just finishing his degree... Anyway, we were doing that, and at that time he asked me "Well, I want to get into open source", and I said "Well, of course. We can build this together." And he said "Sure, why not.

We started developing this thing together. Then I used a little bit of my open source conference time to develop it. At the beginning it was really conference-driven development, I call it. So you write a talk, and your pitch for a talk, and then you write the software to sustain that talk. I don't know, at the beginning it was something like that to create some attention. However, it became the concept of "Well, if you want something -- it's a very open community, so if you want something to happen, you should join the community." That makes sense; it's an open community.

So this is the source of the problem with Express and Restify. So those communities have a little bit stagnated over the years, because a few individuals kept all the decision-making to themselves, and they did not open it up to everybody to contribute. So instead of saying "Oh, I have a bug", instead of saying "Hey, can you send me a fix?", they were burning out, trying to fix everybody's bug.

**Amal Hussein:** Oh, wow.

**Matteo Collina:** I have noticed that, so I know that it was a non-sustainable model. The reason why Fastify instead embraced "If you have a bug with my software, it's your problem, not mine. You have two choices now. Either you fix it yourself, or you pay somebody to fix it. The only thing I'm happy to do is I'm happy to review your fix, and guide you through getting the fix done. That's the only thing that I'm willing to do."

**Amal Hussein:** That's not a sustainable attitude for somebody who has 400 packages on npm, for God's sake...

**Matteo Collina:** Yes, exactly. So I know that it's a tiny fraction of those bugs that I need to fix myself, because probably some of those bugs are not for everybody to fix. There's probably some hard piece of code that very few people can touch; they're not many, but they exist, as in every codebase that has that little file where you hide all your secrets...

**Amal Hussein:** Yeah, yeah. Under the rug, don't look here... We'll fix some day... There be dragons... All of that stuff.

**Matteo Collina:** Apart from those type of files, which have been decreasing

**Amal Hussein:** Right, right. No, it's good to encapsulate those files though, right? It's good to have them --

**Matteo Collina:** I'm even better than that. Usually, I put that stuff in a different module...

**Amal Hussein:** Oh, nice.

**Matteo Collina:** So all Fastify dirty secrets are not in Fastify. The Fastify codebase is very clean. But there is another module - which I'm not going to mention, because it has a nice story on its own - which has all the secrets, and it's all the dirty code that will make a few of my Node.js colleagues be very nervous about some of the things that I'm doing with Node to make it behave like I want it to behave... But the end result is quite a nice user experience, so I'm very happy about it.

**Amal Hussein:** Oh, my God... Alright. Well, that's great to know. Thank you for sharing that incredible story. We're gonna take another break and we're gonna get into some of the more specific perks around these really key libraries in the Node.js ecosystem. And then yet, I'm still gonna ask that burning question, "Matteo, what do you think of Deno?" So stay tuned, kids. We'll be right back.

**Break:** \[35:43\]

**Nick Nisi:** Let's talk about Fastify and get into a little bit more of its features and its API. I guess we can start off and probably presume that it's fast, given the name.

**Matteo Collina:** Okay, so Fastify has two goals. One is to not create overhead compared to what Node Core provides. Of course, it's not Rust, so it will have some overhead, but to minimize that overhead compared to what Node.js can provide. This is possible, and in fact, Node.js is as fast as the core HTTP module, by providing a set of added features.

So given that focus on not adding overhead, we add a certain class of features that are very useful for most people developing Node.js applications. And these are the key things that you really want to stay in Fastify, use Fastify for those; probably not for the speed, in most apps. However, Fastify will not let you down when your product starts scaling. So it's having a very good developer experience without overhead.

**Nick Nisi:** Nice. Is there anything that it is sacrificing to stay true to that in terms of not adding too much overhead to the HTTP

**Matteo Collina:** There was more at the beginning than there is now. We have been able to do most things at this point in time. A key part of that experience has been to embrace the concept of plugins. And this is part of the great success of the framework. So instead of middlewares, which is the most popular thing in Express land, we have the concept of plugins. And plugins can either add some functionality to the library... Oh, by the way, Fastify is one critical feature that Express does not have, nor Restify, or Koa, or others. It has a boot sequence. So you can start a Fastify server and it's an asynchronous startup sequence. So you can do your database connections, do your pre-rendering if you want to do pre-rendering of your things... And it's all asynchronous, so you don't need to have that complex codebase at the beginning to bootstrap your Node process... Which can get very ugly. This is a critical feature, because then it enables very fine-grained unit testing of the library. So this is the type of decisions where you can have a great user experience, because testing is as important as the rest.

**Amal Hussein:** \[40:06\] Before we get into testing though, could you explain to me why this boot sequence is important? Because if I write my asynchronous code with some control flow, I could mimic that boot sequence, yes?

**Matteo Collina:** Yes, of course. Of course. So here is a typical problem. You want to start your application, and then you need to connect to your Postgres, Mongo, Redis, MySQL database, or whatever you want to connect to. Then you want to listen, to open the port and listen. Once you know that all your dependencies are up and running, you want to open the port to the world and say "Hey, I am exposing my -- here, I am available. It is a port. You can start sending me HTTP requests." The reason why you want your boot sequence to be controlled, fine-grain-controlled, is because you want to be able to unit-test them. And this -- I'm going back to testing. You want to be able to spin up multiple instances of your app, one for each of your tests. The predominant pattern back in 2015-2016 was - and it still is, to some extent, in certain companies, is to have one global Express app, or Restify, or Hapi, that's more or less exposed as a singleton, and it's there to exist.

And then you have the problem that when you run tests against that, you start having flaky tests, or conflicting tests, or you have problems with mocking, for example; you have problems with ensuring that your code is well-written, and tested, and ends up being even reusable, because then I can pack things up in a certain way and reuse them across several areas of my code. So that is part of the reason why Fastify has a boot sequence.

On top of that boot sequence, it loads multiple plugins one at a time. They are loaded as a reentrant graph, so you can load one plugin that can have its own dependencies, that can have their own dependencies, and so on and so forth... And they will all be loaded one at a time. And these become the hard things. All of these can be written using AsyncAwait or callbacks. And you can even await in between, so that "Oh, I want to wait until this tree of plugins is loaded, and then I want to execute some more code." And all of this is seamlessly done by Fastify, and all of these can be several nesting levels of plugins. I've seen it in the wild... And it's probably the most important feature, because it enables reuse.

I can even develop a good chunk of my whole application as its own plugin, and then later on think "Oh I have all this part of my app; instead of deploying inside my container, I can take and put it in a Lambda..." And the only thing that I need to do is to change how I start my server and use the Lambda adapter and it's done. Or I want to take it and deploy it in a microservice, and then I can do that as well. It takes very little effort to move those things around.

So that type of flexibility is more or less -- almost unique in the frameworks. It's also the fact that that flexibility does not come at a huge performance penalty, so you will still get more or less a consistent level of throughput throughout the -- as much as you add complexity to a Fastify application.

So while Express, for example, decrease very quickly, even more when you add a lot of complexity, especially on the routing side... It has a very naive router, which is great simplicity, because a lot of people can understand it very quickly how it works. However, it's also not great for perf. It's the most naive router that you can implement. Just a set of regular expressions and test them one at a time.

**Amal Hussein:** Yeah. And order matters.

**Matteo Collina:** \[44:06\] In Fastify order matters, but they are created in a shared data structure, so it's called a tree, and it's a radix prefix tree, and it's a complex data structure, built more or less for this specific use case, where all the routes are being inserted in. And it's actually pretty fast.

**Amal Hussein:** What kind of a tree did you say it was?

**Matteo Collina:** It's a radix prefix tree. I'm going to paste it in the chat.

**Amal Hussein:** Yeah, we'll have to put that in our show notes. Okay, so Express was really cool because of middleware, right? Everybody loved middleware; easy to use, easy to understand. You're saying not the best to scale, right? So could you explain more specifically, or even if you have to repeat yourself, I apologize... But the actual difference between middleware patterns and Fastify pluggin pattern. What if I want something to work like middleware, right?

**Matteo Collina:** Perfect. Let's talk about how middleware works, okay? Whenever a request comes in, you add a bunch of middlewares to your applications. Each one of them, they have this pattern; they say "if something" and then they do whatever they need to do.

**Amal Hussein:** Right, right.

**Matteo Collina:** So if you want to parse a body, if per request.method === body, I am parsing a body. Or if this method matches a certain prefix, then I want all those requests to be authenticated, for example. Okay?

**Amal Hussein:** Correct.

**Matteo Collina:** Now, a typical Express application has between 20 to 30 middlewares installed before it reaches any of the routes. So for each one of them, in order to fully implement that pattern, you need to have a tree function call. So it's a tree nested function call for each one of them.

**Amal Hussein:** Wow, okay... I can see why this isn't scaling... \[laughs\]

**Matteo Collina:** Now, if none of them triggers, or if some of them triggers, whatever, you are at least talking about a call stack of more or less a hundred call stack, a hundred functions nested within each other.

**Amal Hussein:** Geez.

**Matteo Collina:** Yeah. So this is the reason why the middleware pattern is problematic.

**Amal Hussein:** Let me clarify that though, Matteo... Is it the middleware pattern, or is it Express' implementation of the middleware pattern?

**Matteo Collina:** It's the middleware pattern as a whole, in the sense of it comes -- like, JavaScript does not have tail call optimization. If it had tail call optimization, things will be different. But things are, with JavaScript being what it is...

**Amal Hussein:** Didn't we implement that with ES6?

**Matteo Collina:** No, that was scrapped.

**Amal Hussein:** Every engine didn't do it...

**Matteo Collina:** No, they didn't do it. So it's not there. Anyway, the problem is that -- you know, you put all those calls in the call stack, okay? Now, the fundamental issue instead is what we do in Fastify is if you want to have a certain class of routes authenticated, we only run the authentication logic for those routes.

**Amal Hussein:** And is this because the data structure stores that information?

**Matteo Collina:** Yes.

**Amal Hussein:** A-ha! So this is the beauty of data structures, you know? It looked like a logic path for your code. Without them, you're just running around blind, doing everything, checking all the things.

**Matteo Collina:** Yes.

**Amal Hussein:** But yeah, Memoization, and using keys... I mean, this is what it's made for.

**Matteo Collina:** In Express and Restify and Koa and all those things you have your routes, you have your middlewares coming in one at a time. You can only do that because you never know when you will encounter a route. So with Fastify, the first thing that we do is routing. We decide what is the route that's going to match.

**Amal Hussein:** Honestly, that's what I want out of a web framework, is routing.

**Matteo Collina:** \[47:58\] Yes. So it decides what routes you're going to hit. And this is one of the limitations of the framework. In Express you could do "Oh, I'm writing a route, but if I can decide I'm not handling this payload, I can bump it to the next one in the chain."

**Amal Hussein:** Yeah.

**Matteo Collina:** In Express, you could do that. You can't do it in Fastify. In Fastify, whenever a route is settled, it's settled. You can't unsettle it. And this is one of the limitations that we were talking about, that you asked me if there is limitations... This is one of the decisions that we had to take.

**Amal Hussein:** So what happens though -- because that's the beauty of Express; you can just go "Next..." Right?

**Matteo Collina:** Yes, exactly. You can do that in Fastify.

**Amal Hussein:** So does that put that onus back onto the caller?

**Matteo Collina:** So what we do is that you call it with a given route... So in that route, we decide what code is going to be executed, and what -- we call them "lifecycle hooks." Essentially, we do something like when we receive a request, something before the handle is called, we all do something after the body is parsed, so there are moments where you can inject your code in the sequence... And then we execute your function code, and then you can execute some more things at the end.

And end the cycle ok. It's very straightforward, and there are no weird turns here. The weird turns are exception paths, and so on. So in this way, the code can be very streamlined.

The logic that I cannot write -- and you were right, there's no Next, in the sense of... The next level, there is a Done. We call it Done in Fastify, to differentiate of that... Because even when you resolve a promise, you move to the next step, but you cannot fork it in that sense. So let's say that you have a route that matches -- you put something a route that matches certain IDs, and you want to say "Oh, if I cannot find these in the database, move to this other route that generates it on the fly", or something. You can do that in Fastify. You will need to find some other different pattern to implement this same logic... Which is probably a little bit more complex, but nevertheless, it enables us to minimize the amount of checks that we need to execute to reach your route. So a complex 30-something, 30 or 50-something hook multiplied by three become a smaller, maybe 5-10 multiplied by two. So we have shrinked completely the call stack. And this is part of the reason why Fastify is good. And Fastify can maintain that level of performance while providing a good level of user experience.

**Amal Hussein:** That makes a lot of sense. So Fastify does borrow from Express and Hapi a little bit...

**Matteo Collina:** Yeah. Both of them, yes.

**Amal Hussein:** So how big of a transition is it for users...? For example, I don't need to think about Express. I can use Express without looking at the docs. It's been so many years... It's like the go-to Hello World for Node is Express for me. Not even Koa, as much as I love Koa. If I use Koa, I have to look at the docs. If I use Express, I don't have to look at the docs. So how do you translate that? How do you bring that very familiar experience into the Fastify API?

**Matteo Collina:** We have a bunch of things. First of all, if you are migrating from an Express app, you can actually just run your Express app on top of Fastify.

**Amal Hussein:** \[laughs\] Well, what about all those call stacks? \[laughs\]

**Matteo Collina:** Yeah, well... You know, you can migrate your things a little bit whenever you are ready.

**Amal Hussein:** Interesting. Module by module.

**Matteo Collina:** There is a module called Fastify Express, and it enables you to mount a full Express application on top of Fastify model, because that level of routing and checks is so flexible.

**Amal Hussein:** Well, what's the actual benefit of doing that though?

**Matteo Collina:** It's a migration benefit. Let's say that you want to migrate your application from using Express to use Fastify. You can do that. Or maybe there is a chunk of your applications that you don't want to migrate, for whatever reason, and you can keep it there and use the rest somewhere else. There's a few companies that have done this, because it's simpler dong that than rewrite that piece, essentially.

**Amal Hussein:** \[52:16\] Okay. That's very cool. I love the migration benefit... That's very forward-thinking.

**Matteo Collina:** Yes. We introduced this on Fastify v3. That was not possible in Fastify v2. But we reached that level in Fastify v3 last year.

**Nick Nisi:** For us, we're using NestJS, and we talked about Nest actually last week on the show... And it does by default use Express under the hood, but it can easily use Fastify as well.

**Matteo Collina:** Yeah, it's pretty good. Now, Nest is not my loaf of bread, as you say, but if you're looking for that type of experience, it's a great framework. I'm typically doing a lot more customer things to benefit from a framework like Nest... But usually, it can be a good choice for a certain class of products.

Going back to the Express thingy - so the API is very familiar. However, with a few key differences. First of all, it supports AsyncAwait out of the box, which is not there with Express. If you try to use AsyncAwait with Express out of the box, you're going to get some very, very bad surprises very soon. So that's the problem that everybody has. And it's not being evolved. Express 4, which is the current released version and stable version of Express was released seven years ago, and not updated in the last two years... It's extremely stable, as you say.

**Amal Hussein:** Yeah.

**Matteo Collina:** But it's also not being in--

**Amal Hussein:** Yeah, it's quite stagnant. I know.

**Matteo Collina:** It's stagnating at the minute.

**Amal Hussein:** What's familiar if I need to do something really quickly, and it's prototyping code?

**Matteo Collina:** Funnily enough, if you open up the docs, it's actually very -- it will get a sense of familiarity. The snippet is actually very similar to what you would use with Express, the callback version of it. I'm going to pass the callback snippet in here. Oh, it didn't render correctly... But you can find it on the website. It's in there.

But it also supports AsyncAwait, so you can just return from your async function, and if you return an object, that will automatically be rendered as a JSON, which is essentially even simpler than using .send

**Amal Hussein:** No, that's cool. Well, no - Matteo, I mean, Fastify is awesome. Pino -- so I haven't used Fastify in production. I've been following the project, it's very cool, I can't wait to try it at a real company... But I've been using Pino, and I love Pino. Pino is incredible, and the ecosystem around it is great; it's very easy to create your own abstractions, really low overhead... And yeah, log management is hard, people. Don't diss it, okay? A great interview question, I think. \[laughs\]

**Matteo Collina:** Oh, yes. But I don't ask logging when I'm interviewing candidates. So I do interview a lot of candidates at NearForm. We are hiring a lot at the moment. We hired so many people this year. We keep adding more, so if you want to join, nearform.com/careers. Have fun.

**Amal Hussein:** A good place to write JavaScript and learn from people who...

**Matteo Collina:** Yeah... And Fastify and Pino... So - going back to Pino, which is actually one of the nicest things, is that we are actually shipping a major release of Pino, Pino 7, which I've been writing on my newsletter for probably the last six months now... So they took a long time to get there. We are moving part of the logic or producing those logs to worker threads.

**Amal Hussein:** But does that mean that you're going to require a certain -- like, you have to have this Node version, and this OS?

**Matteo Collina:** It's supported in Node 12+, so yes.

**Amal Hussein:** Yeah, I'm saying -- you can't use it with Node 11 or 10.

**Matteo Collina:** \[56:02\] Well, yes, but you should not be using those anyway, because...

**Amal Hussein:** Agree, I'm with you. I'm 100% with you. But believe it or not, you and I both know there's lots of servers in the world running --

**Matteo Collina:** Oh, don't tell me. We were working on one this morning...

**Amal Hussein:** Yeah, yeah. \[laughs\]

**Matteo Collina:** Somebody opened an issue during this show that they were running Node 6 in production, and it was just like...

**Amal Hussein:** Oh, my God... Yeah, where is your security and compliance team? But anyways... So Matteo - awesome projects. Thank you so much for all the incredible work that you do in the open source community. And you give back a lot in terms of teaching, you've got some really great courses that I think helped me understand promises and async code a lot better. We'll link those in the show notes, but Matteo has got a lot of really great material on just asynchronousness in JavaScript.

So Matteo, before we end this show, we promised everyone we were gonna talk about Deno briefly... If that's even possible.

**Matteo Collina:** Okay.

**Amal Hussein:** I'm dying to hear -- I have yet to actually have this conversation with a hardcore Nodie. I've had this conversation with lots of people in the JavaScript community, yet to have this conversation with a Node TSC. What do you think?

**Matteo Collina:** I would say a few things. So the first one is I did not like at all --

**Amal Hussein:** \[laughs\] Why am I not surprised? Just kidding, just kidding.

**Matteo Collina:** The marketing approach that they've taken in the first few period of the years - there have been written communicates about essentially that we're stating falsehood, or even pointing out certain things and just telling a very specifically framed part of the story, that did not really reflect reality. Or did reflect some part of the reality without telling the rest. I have been not happy about the way they launched it. Not the way that Ryan did the talk at JSConf. That was fine. The talk was good, and I think it was spot on on most of the things that he said. What I did not -- the follow-on narrative on the project, it was not good. They changed the narrative lately, and started focusing on their own specific features. I like that. I think you should be focusing on your own features and what you can do for the community, and not on throwing rocks at others, without even justifying them, to be honest.

**Amal Hussein:** It's quite hard to praise new work without totally pooping on old work, right? It takes class, it takes finesse, it takes effort... And sometimes even when people aren't intending to poopoo on someone else's parade, they do so. It's just -- it's nerd-sniping, what we experience... And I'm sorry about that; there's no excuses there.

But that being said, if we kind of move the conversation to focus on the API itself, and the actual code... What are your thoughts there? We are driving a car with three wheels, right? There was definitely some architectural and fundamental decisions that were made. Even Ryan's talk covered --

**Matteo Collina:** Oh, yeah, it's --

**Amal Hussein:** That have hampered the project's success. Nobody knew it was going to take off in the way that it did, right? And similar to JavaScript, right?

**Matteo Collina:** Yes, exactly. I am not a fan of the approach. If I code something that I think is not correct, I go in and try to fix what I did. He did something else, okay? That's the part of the approach that I am not fond of. The project itself is amazing. Deno is amazing. It's an amazing piece of software. It's really great. It's actually being the force that was necessary to Node to unlock itself from some of the mud that it was in.

\[01:00:02.02\] Thanks to Deno existing, Node.js could do a lot of things and move faster, and remove a lot of the discussion. At some point, we were sitting a little bit on ourselves; we were like "Oh, we are Node. We are the TSC. We are great" etc. There was a little bit of that. But that's gone, and we are back shipping things, and improving things, and maintaining things.

In fact, some of the stuff -- like, a lot of the drama is not existing even anymore. There was a lot of drama in some years in the Node community. That's gone. So it's no drama; people are doing things, contributing... We are always contributing; maybe some other people are not contributing, but more or less, the level of contribution has stayed the same, and some people went away, and new people came in... It's still a good project to contribute to, and there is a lot of work to do. Things are moving really well, so it was a great benefit for Node.

My main take here is how much time it will take for Node to get the bunch of the features that makes Deno really useful, in which Deno is better - how much time it will take Node to catch up there. Deno is better in a certain area, for example web standard compatibility, and so on and so forth... But the ecosystem is not there, npm is not there... You have a massive amount of ecosystem network value on Node, and Node needs to keep existing to support the JavaScript community. So all those people that started using -- oh, when Deno came out, "Oh, Node modules - boom. Node is dead", and all those things.

**Amal Hussein:** Yeah, I mean -- people who say that, I'm like, "Jesus Christ, have you looked at the internet?" Like, jQuery is still the most popular framework in the world, and React is 2% of websites, if even... Web devs are in a bubble, and they don't understand the arc of software. Software gets shipped, written, never updated... Okay? \[laughs\]

**Matteo Collina:** Yaay!

**Amal Hussein:** But anyways... So just real quick - we'll link to how to get started as a Node contributor, there's some really great guides...

**Matteo Collina:** Yes. Nodetodo.org.

**Amal Hussein:** C++ do you need to know versus JavaScript? Like, do you need to even know C++? Can you just know JavaScript?

**Matteo Collina:** You can just know JavaScript, but you might be willing to learn some C++.

**Amal Hussein:** Yeah, yeah. And why don't I. I learned it, I feel like I'm re-learning it now... But it's a very good investment, learning how to write C++. Learning about memory management - it will change your whole framework as an engineer. So it's good fundamentals, if and when you're ready for that next step. But you don't have to.

So Matteo, where can people find you online? And then there's a Node conference coming up, right?

**Matteo Collina:** Yes... So - a few things. You can find me online at twitter.com/matteocollina. Just reach out and ask me whatever question you want. I have a newsletter, so you can check that. If you like me writing and rambling about Node.js, that's probably the right place. This is a big announcement, because we have NodeConf on the 18th of October; from the 18th to the 21st of October. So it's ten days from now; a little bit more than ten days. So it's ten days from now. You can definitely attend if you want. It's packed of Node core contributors and Node users that are going to speak on how they improve the platform or use the platform that you all know and love. So it's a great conference. I can tell, because I assembled the agenda, so I can definitely tell it's a great agenda. I ended up running most of it, so it's on my major to-do list.

**Amal Hussein:** Yeah. That's great. Well, thank you again for everything that you've done for our community, all the contributions, all the great software, for making my code better, and everyone else's that uses the software... And yeah, I'm off to go look for that module now, with all the secrets at Fastify. You said Fastify had no dependencies... So is this module like an internal module...?

**Matteo Collina:** No, Fastify has plenty of dependencies.

**Amal Hussein:** Oh, okay, okay, okay. I was like, "Wait a second here... I thought it had dependencies."

**Matteo Collina:** No, no.

**Amal Hussein:** Okay, so I misunderstood.

**Matteo Collina:** If you find it, shhh...

**Amal Hussein:** If I find it, shush. Okay, got it. That's the name of the package, actually; it's shush. \[laughs\] Alright everyone, thank you again, Matteo. It's a wrap, kids. Talk to you next week. Bye...!

**Matteo Collina:** Bye! Bye-bye!
