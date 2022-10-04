**Johnny Boursiquot:** Welcome to this episode of Go Time, everyone, and glad to have you back. So Go and PHP, sitting in a tree... I don't know if there's kissing going on, but we're gonna figure out why Go and PHP are together on this particular episode... Because the last time I touched PHP was many years ago, and although it had its charms, it did have some quirks as well; we may touch on those during this episode...

Joining me today are two folks who actually work with Go and PHP on a regular basis, and that got us curious. Someone actually suggested this episode, I believe -- let me look up there. I will find who it was and give him a shout-out for suggesting this episode.

**Jerod Santo:** Shout-out to listener Seb for requesting this episode and putting RoadRunner and PHP on our radar. Thanks, Seb.

**Johnny Boursiquot:** And they actually recommended RoadRunner, which is a project we'll definitely be touching on, by name, as an example of Go and PHP working well together. So joining me today are two guests - Mr. Valery, and now I'm gonna butcher your last name... Piashchynski? Did I get that right? Close enough... And then also Anton Titov. Hopefully, I got that right.

**Anton Titov:** Yeah, that's correct.

**Valery Piashchynski:** Nice to meet you!

**Johnny Boursiquot:** \[04:10\] Okay. So Valery is a software developer at Spiral Scout, the team that works on RoadRunner, this particular project that we'll be touching on. He enjoys working on the algorithms, writing his own operating system for learning purposes in C++, and helping folks get into programming, which is pretty awesome. He also streams on Twitch, mostly open source Go stuff.

Anton is actually a CTO and co-founder at Spiral Scout, also on the same team that actively works behind RoadRunner. He loves software and hardware. We were just talking before the show about some of the hardware stuff he's working on with Go, rather than going the traditional route of the embedded stuff with C, or Python, and whatnot. I got a chance to take a peak and that. Very interesting stuff. He also enjoys some DIY robotics and machine learning. Welcome to you both, gents.

**Valery Piashchynski:** Yeah, thank you. I was saying I do not try to pronounce my surname... \[laughter\] It's rather complicated. But you were almost correct.

**Johnny Boursiquot:** It's all good, it's all good.

**Valery Piashchynski:** Yeah, yeah.

**Johnny Boursiquot:** So Go and PHP. Let's start with what brought you to PHP. Why are you working on PHP this day and age? Not that there's anything wrong with working on PHP this day and age... I'm saying, out of all the languages that one could pick, PHP has been around a long, long time. Back in the infancy of the web. At some point, PHP was the it language to actually write dynamic websites and whatnot, competing with ASP classic, as we refer to it now, and the likes of ColdFusion... I mean, these things are grand-daddies or grand-mommies of the early web. What led you to PHP?

**Anton Titov:** Well, as you mentioned, it's a very old language. I was young and naive, and I wanted to have my own forum, or my own CMS board. And if you were trying to build a forum back in '05, the only option for you would be PHP. I remember trying to download the source code of the website and trying to figure why it doesn't work... Well, apparently you had to install a bunch of instruments to also make it work... But it was just the beginning of kind of this long, long journey. And I'm still sticking to that. So it's a beautiful language these days, and it changed a lot.

**Valery Piashchynski:** Yeah, yeah. Very nice. \[laughs\] So... Surprisingly, I'm not a PHP developer. I'm a Go developer and working on the Go part of an ecosystem. We're trying to connect it into the PHP parts, so Anton for me is like the light at the end of the tunnel, connected to me from the PHP side.

**Johnny Boursiquot:** Okay. So then you've got the PHP as part of your background, and then here comes along Go. When did you get into it and what led you to actually combining those two things?

**Anton Titov:** I can probably talk from the kind of combining part... I mean, when I started studying Go, it had been around for a few years, and I only heard good things about it - performant, fast, concurrent, all this kind of terms which now... well... we all know about Golang. Well, I mean, I actually just tried to just play with that. I made a couple of interesting applications, and since PHP was the main production stack, I was just trying to see, can I use it within this practice? Because all the examples in Golang were kind of like small and easy... And in PHP we have frameworks, like ten layers of abstractions, ORMs etc. So it's a very different worlds.

So it was a very curious language for someone who had been working on this type of a language for a very long time. And that has been an idea - can we actually make them work together? Can we get the benefits of PHP and the benefits of Go and can we improve the developer experience/our own experience?

**Valery Piashchynski:** \[07:58\] I came to Spiral Scout in 2018 as just a regular developer on one of the projects; a Golang developer. Previously I was programming in .NET, so I was heavily involved into the .NET ecosystem, like C\#. I've got some (I guess) \[unintelligible 00:08:17.23\] something like a C\# professional. So I saw a guy who worked on a very famous taxi company based in New York... \[laughs\] He was rewriting all the Ruby on Rails system into some interesting language. It was like 2015 maybe, in the early days of Golang. So I was like "What is this language? Could you please explain me?"

I was really impressed about the first web server written in Golang. It was so little lines of code, and it brings you to a web server that can respond with just Hello World, but it just works.

After that, I came into Spiral Scout, I was involved into internal projects, and one time I started to rewrite a test in RoadRunner. It was a mess, because Anton \[unintelligible 00:09:21.16\] from the functions. \[laughs\] Like, there are no errors if you don't return them.

Of course, I fixed it, and it was a lot of errors in the tests... And I sent this PR to an intern, and the intern was like "Oh my God, why did you do this?" \[laughs\] And we're like, "Okay..." We started fixing it, and we finally fixed all of these errors. After that, I was involved into the Golang part of the RoadRunner, and we started working with the intern together, to improve the quality.

**Anton Titov:** Well, he pretty much rewrote most of the parts of it, but... \[laughter\] That was for the good.

**Valery Piashchynski:** Yeah, maybe.

**Johnny Boursiquot:** Obviously, you saw a need and you decided to fill in, and started doing some of the things that you saw that needed to be done... And that's always awesome. That's ho the majority of open source contributions happen - you find something that you enjoy working on, and you contribute code to it, and that's a beautiful thing.

Obviously, when I think about my experience with PHP, and all the hoops we had to jump through to "make it scale", and using today's terminology and whatnot - when I read the description of the project, I'm like, "Okay, this is a load balancer rolled into some sort of application server, rolled into..." I mean, it's trying to do a lot of things, so why don't we started with what the difference is between plain Jane PHP application server -- like, the last one I was used to was like Zen, or something like that...

**Anton Titov:** It was a very long time ago, yeah.

**Johnny Boursiquot:** Exactly. I'm dating myself here. But what's the difference between those -- I guess, for a lack of better terminology, those traditional application servers that are designed to run PHP, versus this new approach?

**Anton Titov:** To answer this question, it's actually important to understand how PHP actually became this type of language, and both a language that's hard to scale. Imagine every time you write a Golang application - let's say doing some endpoint in HTTP - every time you get an HTTP request, immediately you have to boot load the application from the disk, start it, answer this request, and then kill this application. And do it over and over and over, for every request. This sounds super-expensive, right?

**Johnny Boursiquot:** Mm-hm.

**Anton Titov:** Well, that's how PHP has been working for 26+ years. It's quite amazing that you have the tech which quite literally restarts on every request, and it still kind of powers pretty much the majority of backends on the internet. Well, public backends, let's say.

\[12:07\] So the idea was actually quite simple - let's just remove this overhead. I mean, when I started working with RoadRunner, I started working -- I was actually a protocologist, making communication between the languages. And the first example was quite simple. Let's say we have a function in Golang to do some heavy math, which on PHP maybe is not optima, and they have like this highly OOP, strict code in PHP. And by the way, modern PHP is all about OOP, strict type, annotations, attributes... It's all very similar to Java these days, except it's free, open, and very easy to learn, let's say.

So then I just tried to make a call from PHP to Golang using this internal socket, or UNIX socket rpc call and it did work. And then I tried to make a very stupid experiment, actually. I tried the native PHP library for RabbitMQ to push message, and I used the Golang library of RabbitMQ to push message, but with additional RPC overhead from PHP. And we ran some tests and we found out that the PHP to Golang bridge through RabbitMQ works - not like margin much but a few percents faster than a native solution. And it was like, "That's weird." This shouldn't be happening, right?

And this kind of led to the idea that -- PHP is a very beautiful language to model business processes. Not like highest-scale IO operations, like traffic management or ingresses. It's single-threaded, it's very dummy, in terms of like it can go left, in can go right in some cases... You still can shoot yourself in the foot, but these days it's much harder. But it's very good to have good libraries to explain permission models, document mapping, data mapping. If you see how to work with mapping JSON in Golang and PHP, you'll definitely see a major difference in favor of PHP, because it's a dynamic language.

And Golang, on the other side, is beautiful to manage all of these long polling connections, sockets, retries, restarts, delays... All of this fun stuff which PHP, just by definition, by model, can't. So then we tried to create the method, invoking code from PHP's worker pools. So you have like hot processes of PHP, which are in memory, let's say one per CPU core, and then just ask one of them "Do this payload. Do this work for me." You don't kill the application, you don't restart it. You have no overhead. And when we did this code - well, it was working like eleven times faster than the native approach... So we created an HTTP layer on top, called it RoadRunner, and it's been \[unintelligible 00:14:44.25\] and we haven't written a single application without this model probably since like 2019.

**Johnny Boursiquot:** Wow.

**Valery Piashchynski:** Yeah, a pretty amazing speech. \[laughs\]

**Johnny Boursiquot:** So who is this for? Is it the Go developer who has to work with PHP, or the PHP developer who has to work with Go, or who are you targeting with this approach.

**Valery Piashchynski:** I guess both of them.

**Anton Titov:** Well, it's actually a very good question. The main audience is obviously PHP people, because the main idea of RoadRunner is you can take these complex aspects of queue load balancing, HTTPS traffic, temporal gRPC, and you're going to make them boring for these developers... But just out of the box. You want gRPC? Sure, just plug and play. You want a temporal? Sure, it's already here; just make it work. You don't need to install anything. It basically manages the complex stuff for you. But at the same time, it's kind of for the Golang engineers who typically work in pair or on the same team as PHP engineers... Because this is an application server, it's very easy to intercept and modify the requests and calls which you do with PHP. So you can add your own validations, authentications, and all obviously are going to work much faster, and possibly with much deeper integration, with more than cloud-native tools.

\[16:04\] You have metrics, readiness, healthy endpoints... All the stuff you need to make application, basically like native current environments. But obviously, the first target audience is just engineers and companies who are just trying to write scalable code, but at the same time don't necessarily want to hire ten Rust engineers. It's more like a balance between price for the engineer, and how fast you can find them, and the promise and quality of the software they create.

**Johnny Boursiquot:** Okay, so this is as much a technical decision as it is a business one.

**Anton Titov:** Well, in the long-term yes, because how many startups you've seen which come from the point "We're going to scrap out PHP and move to something else"? It's been a bunch. Facebook invented their own language. VKontakte, their Russian competitor, did the same thing. So it's kind of like become so expensive that you even have to jump in and make your own compiler for this stuff. And we can just move this line when you have to move from one tech to another, ideally up to infinity. If you need something fast, do it in other languages... I mean, it's all done in microservices these days, in distributed applications... So you're no longer stuck to one language. But at the same time - well, you're a startup, you're trying to integrate with a few providers, and you need to create 12-15 API endpoints. Who are you going to be using for that? Do you really want to hire senior engineers who are gonna be doing that, or you can just use senior PHP engineers, which are much higher availability since it's an old language. But you're going to do the same thing, it's going to work the same, same performance, it's just going to be done easier because you can source people easier.

**Valery Piashchynski:** Yeah. And at the same time, if you wanted to do some pretty hard work or some low-level stuff, you can easily write a simple plugin, and plug it into RoadRunner, compile it, and solve your needs with that. So we also wrote our own plugin system, because -- so initially, we wanted to use the Golang native plugin system. It works only on Linux at the moment, so we waited a little for the Windows support, but I guess it doesn't seem to happen, the Windows support for Golang-native plugins. But we wrote our own plugin system called Endure, which is suitable for plugging all of these pieces of Golang, combining into one part, initializing it, starting to serve it, stopping... So building a tree with all those plugins.

For example, if you write once a configuration parser -- if you write a parser from the Yaml, for example, you don't need to write or copy or create some SDK to bring this part into every plugin. You can just request this init function, and RoadRunner will take care about finding this dependency, initializing it, topologically sorting the graph, and providing this initialized dependency for you. You only need to just – "Okay, configuration, please give me the gRPC section", or "Give me some other section."

If something goes wrong, RoadRunner will take care of this of course, and provide you nice - but unreadable for PHP users - message about some Golang panic, or some error, something like this. And for the PHP -- all the complexity for the PHP is to properly define what do you need in the configuration. You have a configuration, you need HTTP, so you just enable an HTTP section, put your configuration, and RoadRunner will remove all other plugins from the tree. It won't even start. It just runs your section for your needs, like HTTP, or gRPC. Or you can write your own plugin, put your section in the configuration built with our tool called Velox. This is a tool which helps you to build RoadRunner with your own custom plugins based on GitHub. So all of this heavy, complex stuff was moved to the Golang part, and the open, nice things moved to PHP.

**Anton Titov:** \[20:32\] That's actually quite an exchange of knowledge, because this first container actually came as an architectural pattern in most of the PHP applications... Because if you've seen .NET, Java or PHP applications, you have a ton of classes, interfaces that inherit each other, they use class declarations etc. So you can't work without a container. And with dependencies - you need to manage all of this stuff. So essentially, we used this idea inside of RoadRunner, but obviously \[unintelligible 00:20:58.17\] initially lays it all correctly, in the correct order, and answering the question, like "It's a large tool already..." Well, it's kind of not, because it's just a container with a bunch of CLI tools and instruments, and the rest is just kind of independent projects and plugins. So we can add them without influencing each other, or worrying to break the tool. Do you want RoadRunner with \[unintelligible 00:21:23.01\] If you don't - well, disable the plugin and build it. It's going to be exactly the same thing, just less memory to manage.

**Break:** \[21:33\]

**Johnny Boursiquot:** Let's dive in a little bit, into the weeds, if you will... Are you shipping like a binary? Are you interpreting PHP? If I'm a developer, what does my experience look like?

**Anton Titov:** From a PHP perspective, we're trying to do the least invasive work possible. You literally don't need to do anything to make it work from the PHP side. There's no extensions, there's no special CLIs, interpreters, nothing. What we actually do, we do the 20-30 years old approach, which still drives old applications - we manage the worker pool.

\[23:57\] So what RoadRunner does - it actually uses the default PHP interpreter, which is a binary, invokes it with the application, and then keeps its memory in like a pre-warmed state. And when the request payload comes, which can come for HTTP endpoints, \[unintelligible 00:24:14.13\] Temporal Workflow, gRPC, whatever, you name it - you just send this payload to PHP and wait for it to complete. But over the lifetime, the only main difference for the engineer - which is for some engineers quite hard - is to realize that the application lives longer than just a single request. And you can't just have a global variable counter \[unintelligible 00:24:37.01\] and expect it's going to be zero on the next request. That's the only difference. But besides that, it's the same exact PHP, same exact extensions and configurations as you typically use, it's just managed in a bit different flavor.

**Valery Piashchynski:** But surprisingly, RoadRunner knows nothing about the PHP. So RoadRunner is not binded especially to PHP; it just runs some command you specify in your configuration, so you can do it Python... You can ever run Golang inside the Golang workers. So the main purpose for RoadRunner is to manage the process. Who will be in this process? For RoadRunner - it doesn't care about this. It cares about the protocol. The protocol is language-agnostic.

A project, some guy implemented this protocol in Python. Anton showed me some time ago. So it's Python running inside RoadRunner, because it's pretty much the same model as a one-threaded model in Python. Some guy wrote this, and it works.

**Johnny Boursiquot:** This sounds like a process manager, if you will... So if you wanted to, you could have Python, obviously, as you've just mentioned, Ruby, obviously PHP natively, and whatever else other interpreted languages you want. Even precompiled things, it sounds like you can just have in there, and then basically just invoke it.

**Anton Titov:** In theory, you can take a 20-year old Perl file and run it on RoadRunner... \[laughter\] But if you want to do it - obviously, that's a good question. But yes, I mean -- I think the main mention of PHP is actually in the title of RoadRunner - it's a PHP application management server. But besides that, there's nothing which actually ties it specifically to a single language... Except that this single language has the largest SDK codebase to communicate with all the features from RoadRunner. But that's just a nuance, quite frankly.

**Johnny Boursiquot:** Okay. So if I'm used to working with single-process PHP-style applications - I think you touched on this earlier - where it's like I'm restarting the world, traditionally, when I'm dealing with PHP; one request just restarts the world, and everything is like anew... In this world where instead there's a worker pool, there's process management happening - do you find that developers have to have sort of a mindset shift to basically think "Okay, there's not just one process here. There's multiple." Does that change the nature of how they program? Do they switch from programming (I guess) a single process to now having multiple processes to contend with?

**Anton Titov:** Well, I mean, when PHP runs at scale, you still have multiple processes. They're just created on demand. But you still have 500 PHP processes running the request. But there is definitely the conception shift in people -- it was really much harder even a year ago, but now... The main reason why it's easy these days is because a very minimal amount of people write on pure PHP. Unlike Golang, where most of the time you're writing pure Golang. You may be using some small HTTP overlay framework, but you're mostly going to be using SPL functions, let's say, to do most of your business stuff.

\[27:50\] In PHP it's completely different. You have Symfony, Laravel, or our infrastructure framework, Spiral, and they all manage it for you. So the beautiful thing is all of these frameworks, all the time -- well, we created our own, specific for this purpose, but all other frameworks, they actually do upgrades \[unintelligible 00:28:06.04\] which solves all of this kind of thinking nuances for the engineer. \[unintelligible 00:28:11.13\] to clean up the caches etc. So if you're using a modern framework and if you're using RoadRunner, you most likely won't even notice a difference in 90% of your activities. It's still going to be some nuances, but most of them already known and have already been solved.

If you're using a framework which is specifically built for RoadRunner like ours, nothing is different for you. Just write code, and it's all being managed; state is managed in-memory, and all completely resetted.

**Johnny Boursiquot:** So would a PHP developer ever even need to know what's under the hood, what their process is? I assume they'll never really - unless they want to - come in contact with any Go whatsoever.

**Anton Titov:** Well, it's like owning a car and being able to drive a car. If you have RoadRunner and PHP, and a default PHP SDK, you can do many wonderful things. You can PHP respond in like 50 microseconds, run \[unintelligible 00:29:07.27\] and all the queries, use gRPC, and use all of this stuff. But if you also know Golang, you can do even crazier stuff. You can take, for example, a machine learning model from Keras, compress it, put it into the Golang SDK, and then invoke from PHP, and you now have machine learning embedded directly into PHP with Golang bridge. So you can do these crazy things if you know multiple languages, specifically Golang.

Golang is beautiful, because -- I mean, it's quite easy to learn it, right? It doesn't have many of these legacy overhead nuances you have to remember. So it's not required, but if you do, you're essentially a superhero in PHP world.

**Valery Piashchynski:** Yeah. And also \[unintelligible 00:29:49.23\]

**Anton Titov:** Well, yeah, that's another example how you can use it.

**Valery Piashchynski:** It's also written here, in RoadRunner and PHP combination.

**Anton Titov:** I can show it when it's going to be the right time. Up to you, Johnny.

**Johnny Boursiquot:** Well, given that most of our users are going to be listening, not viewing this, we may not be able to show them much.

**Anton Titov:** I'll try to walk them through, yeah.

**Johnny Boursiquot:** I do want to sort of understand -- obviously, this is an open source project, and folks are contributing to it... I do want to understand what are some of the hardest challenges that you encountered while coming up with this model. Obviously, running a process manager - you have to worry about inter-process communication, you have to worry about how to keep things in memory efficiently, and all that stuff... I'm curious as to what are some of those biggest challenges that perhaps you're still facing.

**Anton Titov:** About the current challenges Valery can speak. I don't think there's a lot of them now, but... When we started working on this though, it's been a number of interesting things to solve. Number one, we had to create a protocol to communicate between two different languages, and it had to work over pipes, over Unix sockets and TCP sockets. So it's been like, "Okay, how are you going to create a low-level IPC protocol if you don't want to jump to shared memory, or all these things?"

This has been not like a hard conceptual problem, because you can always... Default protocols like a netstrings - you have the lengths of the message, a fixed \[unintelligible 00:31:15.27\] So it's quite easy, you just read the package between languages.

Then obviously it was a problem with the process manager, because PHP sometimes tends not to start if you don't send the right parameters, or it may crash if, again, you send an invalid payload -- I mean, it doesn't do it anymore \[unintelligible 00:31:36.09\] And obviously, race conditions on the Golang side - that was horrible, because you can't just write a process manager; no one just writes a process manager... \[laughter\] For the reference. It also needs to collect the stats, you also need to watch for the process to restart, you need to collect the \[unintelligible 00:31:54.16\] you need to understand how many times you invoked it, when it was started... Things like, "Okay, let's check how long this process exists", and you call, say, time now, and you immediately kill your performance, because it's doing a syscall. Well, back in the day, something like that.

\[32:14\] Or for example you have a request coming, but at the same time the PHP process runs out of the memory. So what's going to happen? It's going to fail. How are you going to restart it? There's been so many little integrational hell and edge cases for this type of work... But eventually, once we jumped from this port, what we managed is not a part of the hell. When we have a single server which has an HTTP endpoint, everything is quite easy. You have request packets into the binary form, sent to PHP, and \[unintelligible 00:32:46.12\] But when you're doing HTTP and then you also want to manage the queue process manager, like \[unintelligible 00:32:53.08\] with RabbitMQ. But what happens - what if you have HTTP, which runs a PHP worker, which sends data to queue? So now you have two plugins which not only have to work, they also have to be created in a correct order, wait for each of them to properly connect, and only then make it work.

So that was a part of scratching the head a lot, because it was so hard to solve... With all of these dependencies, and plugins, and... Hidden dependencies, because a PHP worker can theoretically do anything it wants; it can call to queue, it can invoke an HTTP endpoint through RoadRunner onto itself, which -- well, I'm not even sure what's going to happen in this case. But that's why we created the container, that's why we created eventually Endure, which solves all these problems, and now there is barely no integrational hell between plugins and RoadRunner. They're all interfaces, very easy to connect them together... It's basically become a framework for the application server.

**Johnny Boursiquot:** So if you have this deployed, is it recommended that you have a single tenant kind of situation, whereby you don't want processes from multiple parties that are not really associated with, say, the same company? You don't wanna run this as some sort of an open-to-all, multi-tenant system, because you could have one process peaking into what's happening with another process within this world? Or is it isolation between these things running all in the same system?

**Anton Titov:** Well, it could be. We can isolate it by many different ways. We can isolate them by running with different permission models in PHP. You can literally forbid most of the functions, which - well, some engineers \[unintelligible 00:34:38.26\] will still be able to bypass. You can run them in different user groups and in different memory spaces.

Right now, we don't run it in a shared fashion, old-fashioned shared hosting. It's mostly suitable for the most classic approach now. You have a container, within this container you have the application, your APIs to other service functions of this application. And it's fully self-contained inside this container. If you work on a multi-tenant model, you don't run ten different PHP scripts with different users. You solve the multi-tenancy on the application design level, using the application domain. I hope it makes sense...

But I've been thinking about this problem for a while. Basically, in short, if you wanna do multi-tenancy, do it in the application code. RoadRunner is developed/designed to actually work the best in modern Docker environments or container-based environments. It's a single application, pair application instance, let's say. A single instance of application, sorry.

**Johnny Boursiquot:** Gotcha.

**Valery Piashchynski:** Yeah. As for me, it was a lot of challenges to write all of these things... Because basically, RoadRunner, as you can see in the RoadRunner repository, is just an interface. It's just RoadRunner \[unintelligible 00:35:52.28\] RoadRunner workers command, but everything is hidden under the main three parts. Those parts are - it's Endure, as Anton mentioned... It was a surprise for me, because in Golang we don't have containers, because we just don't need them to get to some dependency, or... So I heard about some project in Uber, like Uber FX, or Google Wire, I guess, but I don't think it's much popular solutions.

\[36:28\] So in my projects I've never worked with a container, but PHP is everything about containers and everything about dependency injection, and so on, so we have to write such algorithmic containers which mutate based on the configuration. So it's not like "Please give me some dependency." It's about I have a configuration, I have a set of -- I guess at the moment we have 20 plugins, or more, I guess... I don't know how much exactly. But we provided a bunch of plugin, we provided the configuration, and said "Okay, now build this. Build this properly." Managing the connection \[unintelligible 00:37:09.08\] initialize a logger, and the logger needs a configuration, so you have to properly topologically sort all the things to initialize first integration, then provide this pointer to a logger... So the Golang race flag won't help us here, because it's so distributed all over the plugins, so you have to manage every race condition by yourself. So you have to be very careful with writing all the things. But we hide all this complexity inside Endure, and you have to be sure the provided dependency is concurrent-free. So you can't use it from the different threads.

But the second part is also Goridge. It's a protocol; in Goridge version 1 and version 2 it was, like Anton said, it's a very crazy protocol... I guess 14 bytes - correct me if I'm wrong, Anton... 14 bytes or 18 bytes.

**Anton Titov:** The first version had a 17 bytes header, for whatever reason.

**Valery Piashchynski:** 17 bytes, yeah. It's like a few flags, payloads, and \[unintelligible 00:38:27.12\] But imagine the situation, if you pass your payload over the pipes, for example, you don't have any mechanism to \[unintelligible 00:38:37.19\] or to check "Is this payload correct?", passing it from one side of the wire to another. But RoadRunner and Goridge version 3 has a protocol based on -- an IP protocol. So I wrote recently a few protocols, a TCP/IP protocol, and combined them all together to have a proper protocol for communicating with PHP parts. So we have asynchronous support, we have a \[unintelligible 00:39:09.28\] So we have all this funny stuff to extend it, and not to break it from version to version.

And I guess the third part is the key, which contains all these worker pools... And this is complicating stuff, because you have to -- for example, imagine you have an HTTP plugin enabled. The user wants to get a statistic about the workers. So one approach is to stop the world, stop all the HTTP requests, and get all the statistics, get all the pointers to workers, get \[unintelligible 00:39:49.17\] pretty it with some format, and show it to the user.

\[39:56\] Another approach is to have some shared place where you can safely get at any time, without logs even, this pointer, and to provide to users. But when the restart happens or some issue happens, it will look only in this case.

So it's like statistics in RoadRunner is basically free for use. It doesn't interrupt the actual request. Not HTTP, not jobs... None of them.

**Anton Titov:** Yeah. It's quite funny how we jumped into these edge cases, because most of our users are already mature PHP applications, and large, large startups... And they don't play with ten requests. Like, "Okay, we just bump a few millions a day, and we see this bug. So what's this bug about?" Oh, you know what - over time, things which you could never imagine while developing the thing, but whenever you catch them... Thankfully, users report them, and it's easy to see how it works on scale.

**Valery Piashchynski:** Yeah. And basically, imagine a situation when you have a completely first \[unintelligible 00:41:00.05\] in Golang. I guess you so this ticket recently, about writing completely the first scheduler, bring this to Golang. So we started working with that (I guess) a year before, to provide a completely free scheduler to schedule jobs inside RoadRunner. We didn't finish it yet, but we're continuously working on it, to provide a binary heaps algorithm to sort by priorities all of these jobs. For example, if you have an urgent job to execute, you have to set that priority 1, and it will be sorted and scheduled properly... There are a lot of such things, very complicated things which you should work inside RoadRunner and hide all of this complexity for users just to specify \[unintelligible 00:41:49.27\] in the configuration... Just "Okay, I don't need a gRPC server. It's removed", but all of this complexity hidden under the hood.

**Johnny Boursiquot:** That's why it's hard to create very nice, user-friendly APIs. There's a lot going on under the hood, but you're making it easy for people to actually use. That's the beauty.

**Anton Titov:** Well, it can be easier to make just a Hello World endpoint.

**Valery Piashchynski:** Yes, it's so true.

**Johnny Boursiquot:** \[laughs\]

**Anton Titov:** Yeah. Well, we need a load balancer, a Kubernetes cluster, \[unintelligible 00:42:13.17\] That's easy. \[laughter\]

**Johnny Boursiquot:** I know. Man, things have changed over the last decade or two...

**Anton Titov:** Yeah.

**Johnny Boursiquot:** So I do wanna switch gears a little bit here, to understand - like, if someone wanted to contribute, because it sounds like there's still a lot of awesome ideas at play, and coming to the project... If someone wanted to contribute to that, what would basically be a safe expectation of them? Should they know how to work in PHP, should they know how to do Go? Is there work for both sides of the fence? What do you need to contribute to this project?

**Valery Piashchynski:** Basically, I don't know PHP at all. I started googling, like, "Okay, Anton, I need some tests script. Could you please write it for me?" \[laughter\] Or I need a for loop to \[unintelligible 00:43:03.03\] so I need to google how to write a for loop in PHP... And this is great, because I don't need to be involved in the PHP part. I can concentrate only to improve in the Golang user experience. And to contribute to RoadRunner, it depends on who are you as a developer. Are you a PHP developer, or are you a Golang developer? If you are a Golang developer, it's very easy - you just need to go in the RoadRunner issues, find an issue marked "Help needed" or "Easy to resolve", like some entry-level issues... Or if you want to contribute to the PHP part, I guess it's the Spiral framework, which you can also have a lot of tickets to improve our PHP part. And you don't need to know both sides of this at the same time. You only need to know PHP or Go. Or if you want to contribute both, usually you need to know both, but... Yeah.

**Johnny Boursiquot:** It sounds like there's room for either side.

**Valery Piashchynski:** Yeah.

**Anton Titov:** \[44:09\] We're pretty friendly to contributions. In PHP you can help us to improve SDKs, in Golang you can go as deep into the weeds as SSL, which dumps algos to run some crazy stuff.

**Valery Piashchynski:** Even Python developers can write a protocol version 3, or all Ruby on Rails developers...

**Anton Titov:** Yeah. If you want to, we'll definitely accept the contributions to make it work for other languages.

**Break:** \[44:34\]

**Jingle:** \[45:54\] to \[46:09\]

**Johnny Boursiquot:** Alright, so let's start with you, Anton. What did you bring?

**Anton Titov:** You only need 64 kilobytes of RAM.

**Johnny Boursiquot:** For what.

**Anton Titov:** Just for everything.

**Johnny Boursiquot:** Ever? \[laughter\]

**Valery Piashchynski:** Okay... Prove it.

**Anton Titov:** For most of this stuff. I would just say, people have to try to work on more member-efficient applications. Because when you work with hardware, 64 kilobytes of memory is a ton. You could make robots move, bring eyes, go on stairs, and do some other stuff. And what can you do with 64 kilobytes of a JavaScript application, tell me, please? \[laughs\] Maybe nothing.

**Johnny Boursiquot:** Not much. \[laughs\]

**Valery Piashchynski:** I have 64 gigs and I even can't run a stream. \[laughs\]

**Johnny Boursiquot:** I mean, I will say that over the years we've gotten more -- well, let me put it nicely. We don't worry very much about CPU and memory and disk... Things that used to be expensive 20-30 years ago. Not so much now. We take these things for granted now.

**Valery Piashchynski:** Yeah.

**Anton Titov:** Yeah, but if you know how to pack it down to this level, you can create a lot of scalable applications. Because when you create traffic filtering software, or \[unintelligible 00:47:25.04\] the things which actually -- well, a real IP, let's say, not just API endpoints... That's where you have to optimize it. And knowing these basics and knowing that "Yes, 64 kilobytes sounds like a small amount", and it's a joke which Bill Gates said back in the day, if someone doesn't remember; obviously, he's wrong, but... If you realize how actually huge is this amount... 64 kilobytes of stack on some hardware chip can let you stream a ton of traffic, and build something like a Netflix, build something like Starlink, because all these things which are doing great, great things - they have to be optimized. You can't pool ten CPU servers in space; this is not going to work.

**Johnny Boursiquot:** \[48:13\] \[laughs\] Alright, alright, alright... Valery, what did you bring?

**Valery Piashchynski:** So my unpopular opinion is open source is hard work. In my opinion it's much harder than some enterprise development... Because I was involved in different enterprise projects, and the flow is pretty much defined. If customer support has some ticket, it can process it, send it to a specialist, like quality assurance, it can test it, write test cases, it brings to you, you can see this ticket, fix the problem, run the tests, and so on.

But in open source, a lot of people think that they should not bother themselves to write a proper description of an issue. It's like, "I have a problem. Please fix it." Or one of my favorite issues is like "Nuts?" Well, what does it mean?!

**Johnny Boursiquot:** Are they offering nuts, or are they asking you if you want nuts? I mean... \[laughs\]

**Valery Piashchynski:** But when I said, "Please describe what do you want? You want support, or something else?" and closed this ticket, the guys asked me "Why are you so rude? Why did you close my ticket?" And there are a lot of such things in the open source development, so you should handle a lot of things. You have various types of virtual machines to run on Ubuntu, previous versions. Ubuntu, current versions. Debian. FreeBSD. macOS. Windows, different versions.

So if someone sends you a ticket -- I guess some people think that this is a joke, that open source development is a joke for us, or I don't know. So it's like, they write two or three lines of description, or do not provide test cases... So it's very complicated to figure out what do you really want.

One guy asks me "The Docker doesn't work on my machine." I'm like, "What?!" So I have to fix the Docker on the machine... \[laughter\] You see, in CI, everything brings from the scratch. Docker installs from scratch. Everything works inside Docker. It's something inside your machine. But the guy said "No, it's a problem in your code, because it doesn't run." So it was so long and so boring communications with a lot of people to prove that this is not a joke, it's a hard work, really hard work.

**Anton Titov:** Yeah. And actually, all of the code you write is public... Because people are going to see it and they're going to blame you. I mean, they're going to blame you anyway, but now they're going to have a reason.

**Johnny Boursiquot:** Right, exactly.

**Valery Piashchynski:** Okay, you have \[unintelligible 00:51:03.18\] So you shouldn't do it. \[laughs\]

**Johnny Boursiquot:** Awesome, awesome. Thank you guys so much for coming on the show and talking about really what piqued my curiosity when it showed up on my desk, my virtual desk... You know, PHP in Go, and how these two things complement each other. It's been awesome having you all... And I will now play our outro song... And we will try to wrap this up. Right on time, too!
