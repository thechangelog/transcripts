**Johnny Boursiquot:** Well, hello, listener, and welcome back to another episode of Go Time. I have a treat for you today. Today we're going to be talking about microcontrollers, and Go, and home automation, and all that good stuff. Joining me are two individuals, two authors, two engineers who went deep down the rabbit hole of this whole wonderful world. Joining me is Mike Riley and Ricardo Gerardi, both co-authors of a new book, Automate Your Home Using Go, from the Pragmatic Bookshelf, available now.

We're here to talk about what was the journey like for them diving into this rabbit hole. We're going to talk about the challenges and the fun they no doubt had along the way. And hopefully you as a listener, who has always been interested in this whole world and basically was wondering "How do I get in? Where do I even start?", we're going to help answer those questions for you today. So welcome and thank you for being here, Mike. How are you?

**Mike Riley:** Thank you so much. It's a pleasure being here.

**Johnny Boursiquot:** Ricardo, welcome.

**Ricardo Gerardi:** Thank you. Thanks for having me here.

**Johnny Boursiquot:** Absolutely. So let's actually talk about the elephant in the room. Go in the world of microcontrollers. That's not something I typically associate. I mean, obviously, there's TinyGo and everything else... But it sounds like you basically went "Let me take the full-on Go SDK and start making home automation projects on a Raspberry Pi." Why did this even come about for you?

**Mike Riley:** Well, for me it was really just a natural extension of what I'd already done in a previous book called - Portable Python Projects was the name of the book. And in fact, I'd had an interview with the Changelog folks, who I was in process of doing other projects and they actually came up with an idea that I actually incorporated into this book, which we'll talk about a little later... But I was also in the transition period of not being all that enamored with Python anymore, mostly because of all of the dependencies, a lot of supply chain attacks that were happening, and just the fact that being in an interpreted language was going to take so much more effort to deploy onto a new piece of hardware.

The nice thing about Go, as we all know for Go programmers, is that we can take that bit of code, compile it into a single executable, and deploy it on multiple hardware, wherever it needs to be. So if I got a new Pi, for instance, the new Pi 5, I don't have to go ahead and recompile all of this dependency with a specific interpreter, and then bring down the libraries and install all that. I can just take that pre-compiled executable that I already had on my old Pi 4, bring it over to Pi 5, and up it goes. It's up and running. No other -- batteries included, if you will. So that was the real impetus for me. How about you, Ricardo?

**Ricardo Gerardi:** So how I came up with this book is I wasn't really working a lot with the home automation projects. I was already working with Raspberry Pi's, and I had several things running in my personal data center with the Raspberry Pi's. And then Mike called me and said that he had this idea of writing a book about home automation with Go, and asked if I was interested. And I thought it was a great idea, and we started talking. He had some good ideas of where he wanted to go with this book, and we started working together.

**Mike Riley:** And I reached out to Ricardo strictly for selfish purposes. I wanted to learn Go, and Ricardo had written an awesome book for Pragmatic Bookshelf about using Go from the command line. And I found that book extremely helpful, and I thought "Wouldn't it be great to write a book while I'm learning how to do really, really effective Go programming?" And so for me it was a joy working with Ricardo.

**Johnny Boursiquot:** \[08:03\] So you got your nerd-sniping weapon, and you just aimed it at Ricardo... \[laughs\]

**Mike Riley:** Absolutely.

**Johnny Boursiquot:** You were like "You! I bet you'd like to get into this with me." \[laughs\]

**Ricardo Gerardi:** And he was right.

**Johnny Boursiquot:** And here you are.

**Ricardo Gerardi:** And here I am.

**Johnny Boursiquot:** Awesome. Awesome. So both of you then come from a more sort of ops-oriented sort of a line of work, which kind of explains why -- you know, as I was reading the table of contents for the book, I'm like "Okay, I'm seeing Prometheus, Grafana... What's going on here?" Explain to me why you felt the need for tooling that normally you don't hear being used in this context.

**Mike Riley:** Well, I'll take it and then I'll let Ricardo expound on it. But for me, it was more - you know, these tools are tried and true, they're easy to configure and set up... They also empower users, because fortunately they can run on device, on a Pi, or all the way in a data center, but they scale. So you can take that knowledge that you've learned by tinkering with it on your home, and be able to apply it in an enterprise environment if necessary.

The other thing that's nice about them is that they are, once again, written in Go, and the source code is available. So if you ever want to go any further and tinker with them, or maybe integrate with their APIs, it's all public; it's all open source. So that makes it even more interesting, especially from the standpoint which I've always held with regards to creating my own home automations. Yes, I could have gone and bought a commercial purchase product that does that, but it's in their cloud, it's in their black box, I have no idea what they're doing with my data, I have no idea when they're collecting my data... And I basically sign off my rights when I agree to their terms of service, which makes me feel uncomfortable, because I think I can trust them, but what happens if the providers they're using can't be trusted? So I'd rather like to be able to be in control of my own data and my own destiny.

**Johnny Boursiquot:** How about you, Ricardo?

**Ricardo Gerardi:** Yeah, I think these are great points. There's one thing that I would add, especially when related to Prometheus and Grafana - it's also how relatively easy it is to create extensions for this. So we want to monitor a device for which there is no open source tooling available - we can use Go and we can use Prometheus APIs to create a way to monitor that device, for the data. And once that data is in that place, in Prometheus and Grafana, we can display it, we can aggregate it with other data, we can combine, and do things... And again, it's all under our control. So there's a lot of flexibility that we can have with those tools, which is true for the enterprise, and we just decided to apply that for our projects, for home automation, which I think makes a lot of sense.

**Johnny Boursiquot:** Right. So let's walk through... Imagine I'm a beginner, I don't know nothing about this world. Walk me through at a high level the steps that I'm taking to actually get my Go program to, say, make a light blink on a Raspberry Pi. What are my steps here? What am I doing? First, I need to go to Amazon or something, or buy a Raspberry Pi... What am I buying? What are the things that I'm buying here?

**Mike Riley:** Well, I'll start, and then Ricardo, you can certainly embellish further... So yeah, the Pi's - they're in various configurations. These days you can get up to a Raspberry Pi 5, which is the most powerful. Unfortunately, it's also the most expensive. Myself, I'm still fairly comfortable with the Raspberry Pi 4, especially the 8-gig model. It's got plenty of RAM, it's got plenty of CPU capacity, especially for the smaller jobs. And again, because Go is so small of a footprint, it doesn't take a lot of resources to run.

\[12:11\] So you can run multiple Go applications, within containers no less, on a single Raspberry Pi. And that's what I'm doing. I've got a Raspberry Pi cluster right now that's doing a number of the jobs that we've written for the book. Now, in the book we didn't want to make it more complex and add Kubernetes to the mix, because that's a whole other book in and of itself. So we've instead recommended that people build their Docker containers and then run it within a Docker container. But needless to say, even running within a Docker container, we can run multiple -- in fact, we can run all the projects in the book on a single Raspberry Pi, if necessary.

So obviously, get yourself a Raspberry Pi. You do have to know a little bit of Linux, a little bit of command line. Of course, there's tons of books, as well as videos and everything else out there for that. And it's fairly easy to get up to speed, even if it's basic command line. And we do provide all the command lines necessary, although, again, it really helps to have some background, a little bit of experience with them.

Once you've got the Go SDK installed on your Pi, the sky's the limit. If you already know Go, you can go ahead and start building programs right then and there. Now, there is an extension library specifically written for the Pi, that allows you to access the GPIO pins, which is the reader pins, the header pins on the Pi, as well as the built in LED, so that you can blink that as well.

Now, one of the really cool things that I'm really, really pleased about in the book, and it really didn't come until the very last minute, was the fact that we were able to use TinyGo. And TinyGo is a specifically designed subset of Go, that is designed specifically for embedded devices. Now, you could, I suppose, run TinyGo on the Pi, but the Pi has got plenty of resources. I'm talking more about the new Pi Zero, which is an embedded device really just for -- kind of like an Arduino in a way, in that it's specifically purpose-built for being able to pick up sensors, or control actuators. And what that really does - and for us, in a way - is one of the nice things of Pi Zero... In fact, you really want to get the Pi Zero W, which is the Wi-Fi edition. Because there's two models. Wi-Fi is only like two bucks more, so it's definitely worth it. But it allows you to put that anywhere you can get a Wi-Fi signal.

And in fact, this kind of fulfilled that dream that I talked about earlier, with the Changelog folks. One of the hosts had mentioned that they wanted to find a way to monitor their freezer, because it was having some issues, and they didn't want to wake up one morning and discover that their food had spoiled. So I thought about that problem and we've actually solved that problem in the book.

So you can simply get a Pi Zero, you build a TinyGo program, install it on that Pi Zero, and the Pi Zero will then not only connect to the Wi-Fi, but using the onboard temperature probe on the board, you can then capture in real time what the ambient temperature is around. You tie that into the ability to export that result as a JSON format, consume that in Prometheus, and then Prometheus can provide that to Grafana, so you've got a full real-time map for as long as you want it. If you want it for two weeks, two months, whatever; you set the parameters. But now you've got a complete fluctuation, or -- what I use it for is internal monitoring of my temperature, because I've got different temperature zones in the home. So I can see, as the day comes, you get the cyclic cycles, and it's really kind of neat to see how that happens.

\[16:00\] But I also have it so that if that temperature starts to hit a threshold, I then tie into Grafana's alerting capabilities, so that it contacts myself. And if you do decide to go with the Grafana's free cloud version, they've got another add-on feature for incident management called OnCall. And it actually saved my bacon once, because we had a pretty brutal winter here, where the heater went down, and I didn't know about it because I was away at the time. But then all of a sudden I get these alerts saying "You've got a problem." And fortunately, I've got my kids on the OnCall as a backup. And so they're like "Hey, dad, I think there's a problem with the heater." I'm like "Yeah, there sure is." Fortunately, we --

**Johnny Boursiquot:** "Why don't you respond to the problem then...?" \[laughs\]

**Mike Riley:** Yeah, absolutely. It's a good thing I have backup support. But had it not been for TinyGo, and the Pi W, and the monitoring capabilities of Prometheus and Grafana - yeah, it could have been an uncomfortable return to the home and discovering pipes busted, and various other things that had happened. It saved me big time. And that was priceless. And again, I built the whole thing, so I knew exactly how it worked. I knew exactly what the data was coming in as... I could trust it, that it was valid, and so it was real rewarding. And I know Ricardo's got another similar story of what he did.

**Johnny Boursiquot:** Yeah, yeah. Maybe Ricardo can pick up from there. So you've got your Pi, and you use sort of standard Go; not even TinyGo... Unless you're doing sort of a Pi Zero or something of that nature, you don't have to go to the TinyGo level, but you can take a sort of good old regular Go standard library and just build an executable that you can deploy on your Pi. So how do you get that onto the Pi? Are you transferring it, are you putting it in a particular location? What are some of the nitty-gritty details of actually getting my executable onto the Pi, and actually running it? Is it like a Systemd? Do I have to configure the Pi to run the program when the Pi boots up? What are the intricacies of that?

**Ricardo Gerardi:** You can definitely do that. Again, it is one of the nice things about Go, that you have a lot of flexibility. The way we decided to go do it in the book is by using containers. So instead of deploying the application straight to the Raspberry Pi and running it, for example on Systemd or something, we compiled the application - again, we can cross-compile, so you can develop that application on your laptop. You can compile, create a container image, and transfer that container image as a tar file to the Pi, or you can even upload that image to a container registry. It could be a private or a public container registry out there. And then from the Raspberry Pi, you can download that container and run it.

And then you have options when you're running containers on the Pi to automatically set them to start up in case the Pi reboots, or crashes, or something like that happens. So we guarantee that the automation will be always running. Again, Go offers that kind of flexibility. You're talking about, for example, how to get a light to blink, for example. There's different ways you can do. If you have a set of lights like we use in the book, that has a controller and API connected to it, you can use API calls. And there's libraries available, open source libraries available for Go that you can use to control those lights.

But if you don't have one of those, or if you have either a light or a sensor that you can connect to the Pi using the GPIO, we also show how you can use Go to control the GPIO and activate devices using the direct connection with the Pi connectors. So again, there's many different ways that you can get started, and that you can improve and continue working on your projects.

**Mike Riley:** And of course, there's always the option to simply just download the Go SDK directly onto the Pi. It runs natively. So if you just wanted to hack a little bit and try to change a few lines and see what that does, you're more than welcome to do that. And that way, you can figure out and troubleshoot before you go \[unintelligible 00:20:06.24\]

Now, the other thing you can also do - let's say you prefer working off of your Mac, or PC, with all the accoutrements of like Visual Studio or whatever - you can just use the SSH connector, and then have all the tooling that's on board, so that you can remotely \[unintelligible 00:20:24.29\] into the Pi, and then develop that way as well. So whatever is most comfortable for you, that's the way to do it.

**Break**: \[20:35\]

**Johnny Boursiquot:** So did either of you have experience in doing this line of work with a language other than Go? Because I want to ask, basically - and again, perhaps during the research for the book and everything else you've come across... I'm sure you've come across code that was not written in Go, that is attempting to teach you how to manipulate devices that small. So what's your impression, or rather what was your experience with Go versus sort of these other languages? Do you think Go is sort of better suited, or less suited? Or does it even matter, other than having a preference for a language?

**Mike Riley:** From my perspective - and of course, again, I'd written that previous book with Python for the home automation... And while it certainly feels maybe slightly faster with Python, only because, again, it's an interpreted language, so there's no stopgap of compile run cycle. But again, given all of the other hassles that have to go with an interpreted language, along with all those dependency problems that I mentioned earlier, it just seemed to me that Go was so much more trustworthy. And again, I knew that once I had that compiled executable, I could take it from wherever I needed to transport it. My Pi was having issues, for instance, or if I just wanted more Pi Zeros running that temperature application, I could easily just take what I built and deploy it off to those other devices, and be ready to run. I don't have to worry about what pip dependencies I have to install, and I have running locally, and do I have enough resources, and all this other stuff. No, it's just one executable; it makes it so much easier to deploy.

**Ricardo Gerardi:** I agree. And I also had some experience working with similar tools, like with Python... Not only for the home automation, but even regarding my entire Go journey. I used to develop a lot of command line applications using Perl, for example... And I think Go has definitely some tangible benefits there on top of those languages. Again, not having to download your dependencies everywhere you transport your application is definitely a big thing.

When it comes down to, let's say, these smaller devices like microcontrollers, C is usually often used. But C is extremely powerful, but obviously not that easy to get started. Or if you don't have a lot of experience with that, then it's definitely a steeper learning curve compared to Go.

And then Go offers that as an option too with TinyGo. And as long as you have drivers - and there's drivers for lots of different microcontrollers out there... Again, luckily, we also got the driver for the Pico W by the time that we were finishing the book, so that was great. So as long as you have those drivers available, I definitely think that Go is a great option.

**Mike Riley:** Right. And again, TinyGo takes care of all your garbage management, unlike C, where if you leave a pointer open - well, hopefully it doesn't crash or cause other problems.

**Johnny Boursiquot:** \[laughs\] That's real bad. Right, right. Speaking of learning curve, if somebody is a complete beginner, your book sort of handholds them along the way.

**Mike Riley:** To a certain degree. Again, we don't require you to be a Go expert, but you should at least have a little bit of awareness; at least run maybe a Hello World under Go, and maybe a few other simple programs. But again, Go is so easy to learn. And we do -- of course, there's Ricardo's prior book, that certainly can get people up to speed... And that's where he takes the beginner and gets them to an intermediate stage... Which is why I thought Ricardo was a perfect co-author for the book, because of his expertise and his knowledge, and his ability to take the more advanced technical situations and put them into an approach that most people, even with the minimum amount of effort, or minimum amount of experience, can pick up pretty quickly.

**Johnny Boursiquot:** \[28:02\] So you make mention of a personal data center during this book... I also want to couple that with the notion of perhaps -- like, I could definitely see myself as, okay, I get a taste for what's possible. Now I just want to put things around all over the house; temperature sensors, indoors, outdoors... I start doing things... I maybe have cameras... Let me know when the dog runs out in the backyard... Basically, I just want to put things everywhere. First, explain to me, for somebody who's not in this world, what is perhaps the most interesting, full-on, sort of mind-blowing project you have, perhaps in the book, and what's the level of effort, if I wanted to go sort of full-on, full-scale, put microcontrollers everywhere in the house, and run a good, a powered home automation data center. Like, what's possible here? What do I have to worry about?

**Mike Riley:** Well, I'll name one project - and I know Ricardo's got another favorite of his, which involves some lighting. But for me, I just like the idea of being able to have like a bird feeder, and being able to capture the wildlife that comes up to it based on whether or not a certain trigger was tripped, or if motion was detected, or something of that nature.

We show how to use Go to connect to services like Discord, to post those pictures in real time... So as long as you've got the Discord client - it doesn't necessarily have to be Discord, but in the book where you chose Discord just because it has a simple API to connect to... And that way you've got real time imaging of the feathered friends getting well fed, and sometimes squirrels and other things that decide to get in there.

**Johnny Boursiquot:** Squirrels... \[laughs\]

**Mike Riley:** Now, I've got a friend of mine who is actually one of the book's technical reviewers, who said "Hey, maybe I could use this to build a squirt gun that squirts at the squirrels, and lets the birds get to their feed." I was like, "I'd love to see an enhancement. Let's put that as a pull request." But Ricardo, why don't you talk about your experience with lighting the weather?

**Ricardo Gerardi:** Yeah, and that's interesting, because by doing the project, lighting the weather - I think it's a project that I really enjoyed; I used a lot of APIs, which is a fun thing to work with... Basically, what we do in the project is we issue API calls to find what the weather looks like outside, in your area, and then we use another API to change the color of a light indicating what the weather looks like outside. So it's an easy way for you to see, before you leave home, if you need to be prepared, or if you are not prepared for the weather - especially, since I live in Canada, so it's good to be aware of when it's really cold outside.

And I did a project for the book and everything, and I installed it downstairs, close to my door... And I have two kids; they're twins, seven years old, and they actually started using that project. So every time, before they were going to school, they would look at the light and they would see what they needed.

Actually, one day I was telling them "Yeah, I think it's nice outside. You can probably wear T-shirts and shorts today", and they actually went there, they looked at the lights and said "No, it's blue. It's cold, so we need to wear a sweater."

You're wrong, daddy. It was kind of fun to see them using that by themselves. It's so easy and so intuitive for them right now. And it just became like a routine now for them. They always check the light to see what it looks like outside before they go out.

**Johnny Boursiquot:** That light better never go out... \[laughs\]

**Ricardo Gerardi:** Oh, yeah... Now we're starting to go back to the data center part that we were talking about... We're starting to have SLAs now in case something goes down.

**Johnny Boursiquot:** You're going to have angry customers, you know?

**Ricardo Gerardi:** Yeah, exactly.

**Johnny Boursiquot:** You're not maintaining your five nines on this thing. \[laughter\]

**Ricardo Gerardi:** \[32:13\] Precisely.

**Johnny Boursiquot:** Well, so along those lines, do you have any concerns around maintaining this stuff? Is it a deploy it, one and done, and you don't have to really touch it? I mean, it's not like it's interacting with the rest of the world, where you have to worry about ort of a bad actor, or something like that. It's just internal to your own home network, and maybe at worst you get some observability onto it, and you know when something's going wrong... Do you worry about maintaining these things at all?

**Mike Riley:** Well, I mean, from a Go developer standpoint - of course, all Go developers know that anytime they have a third party app library, they should be monitoring that on GitHub, or wherever they've got that library from. And so for me, whenever I've got a dependency that happens to have an update, I just go ahead and do a rebuild cycle. And because it's part of the -- now, of course, being a DevOps guy, I've got my whole CI/CD pipeline set up at home. So for me, it's not that difficult. I make a code change, and boom, it gets deployed.

Speaking of which - I think we also included this in the book as part of the data center- there is another Go tool that I really like, called Gitea. And it's basically a replacement for GitHub and GitLab. But unlike those products, particularly I think something like GitLab - which is a powerful tool, don't get me wrong. But it's also got so many dependencies coming from who knows where. And they've already had several security issues of concern, which - again, given the size of the codebase and all the dependencies that come in, it's not surprising. But with Gitea - again, it's Go; single executable. It's very, very well maintained. And again, I'm not having to deal with this massive installation to be able to get up and running.

And with the latest version of Gitea, it also supports what GitHub calls action runners, which allow you to do that level of automation. So you can set up your runners on a Pi, with the application running on a Pi, and then it can build those containers for you, deploy them for you automatically... So again, that's how I've got my workflow set up. So making code changes, or doing updates - actually quite easy.

**Johnny Boursiquot:** Trivial.

**Mike Riley:** But again, there is a bit of a learning curve to get all of that instrumentation set up. But once it's working, it literally is a press of a button, and off it goes.

**Ricardo Gerardi:** And it definitely doesn't require a lot of maintenance in terms of - you don't have to be watching it all the time. It's very reliable; again, it runs in containers, and once you set it to restart in case of issues, it will do that. We're obviously not getting thousands of requests, or anything like that... But yeah, I have the light project deployed in my living room for over one year, and yeah, I rebuilt it a couple of times just to make sure that I had a newer version of Go, or a newer version of the libraries... But it's been running for over a year, with zero issues.

**Johnny Boursiquot:** Zero issues. Yeah, yeah. Yeah, at this point the bulb itself may actually deteriorate before the program. \[laughs\] Speaking of which, what kind of bulb -- are you using some of the more advanced, sort of the Philips Hues, and all these kinds of bulbs for these projects?

**Ricardo Gerardi:** For this one in particular, yes. We use the Hue. So it's an LED, it's been very reliable...

**Johnny Boursiquot:** To be able to change the colors, and everything else.

**Ricardo Gerardi:** \[35:52\] Exactly. And the one that I have, which is the one that - if you look at the book, there's a picture in the book... It's actually stripped. So I have a column near my door, and I got this strip around the column. So you can put it in different shapes, and... You also have bulbs that you can use, but in this case, it's just a strip of light --

**Johnny Boursiquot:** It's just a light strip. That's pretty cool. That's pretty cool.

**Ricardo Gerardi:** That's very cool.

**Johnny Boursiquot:** That's pretty cool. So did you have to worry about sort of -- obviously, with a Raspberry Pi, with say the 8 gigs of RAM, or with something newer with even more RAM, and more compute, more CPU, do you worry about performance at all? Or do you worry about "Oh, I shouldn't be using a ton of goroutines here, or I shouldn't put too much in memory"? Because it sounds like there's just enough. It's not like you have to deal with -- perhaps with a Pi zero maybe you have to sort of worry about that, but with the bigger-sized units do you do you even worry about that kind of issue?

**Mike Riley:** Personally, I haven't come into any problems. And again, it's because it goes lightweight nature... And for the most part, the applications are very specifically built for a single set of functions. So we're not talking about the sprawling enterprise application. It's really -- you know, see whether a sensor has been triggered. Test whether you need to move an actuator. Validate if this rule is accurate or not. Did the threshold get exceeded? So those are fairly simple logic statements that can be compiled in. And for the most part - gosh, I can't even imagine any of our Go applications that we've written to the book, that are any larger than maybe a couple of megabytes. I mean, they're really small.

**Ricardo Gerardi:** I actually have most of them running in one single Raspberry Pi. Especially during the testing, I had all of them running in one Raspberry Pi, that I used to rebuild and recreate so I could test the applications, deploy them, make sure that the code was stable... Yeah, so everything running in a single one.

And then you talk about, for example, the TinyGo, the Pico W - that definitely needs a different type of program, because then you have some resource constraints there... But for the most part, TinyGo takes care of that for you, so when you compile to a specific microcontroller, so you know some of those constraints and you will create the program or compile the program appropriately for those constraints.

**Mike Riley:** And of course, if you're really, really concerned about reliability and scalability and durability, we've given you enough tools in the book to get you started in containers. So if you really did want to move to that next step, and install a Kubernetes cluster on two or three or four Pi's, now you've got all that capability. Granted, you may need another book, or a course on Kubernetes, but once you can get that up and running, you've already got your containers ready to be installed in that cluster, and you can take advantage of all the goodness that Kubernetes brings to the table.

**Johnny Boursiquot:** Right. So then the number of units you choose to involve in your personal data center - it's all going to depend on how many projects you want to have, right? Maybe you want to put a unit outside for the outdoor temperature, or sensor, or movement sensor, or something like that. Maybe you want to have a few more strewn around the house, doing different things. But that's more of in order to get the kind of data you want kind of a concern, less so like a restriction on how many of these things you could have running on one single Pi, or something like that.

**Mike Riley:** That's right. And the other nice thing about what we provide with the book is - again, we wanted to get people familiar with the concepts and the technologies, but also infuse them with ideas of where they can go next. Every chapter concludes with "Okay, we've given you this. This is what we've done. This is where we've come from, and this is where we're going. But in the meantime, here's a couple of other ideas you might want to build upon."

So what I'm looking forward to is seeing what our readers of the book expound on and create. Because I think that's where it gets more exciting. I've had ideas of being able to take that Pi zero, for instance, and tying it into, say, a sprinkler system.

\[40:05\] And that way, based on, let's say, the humidity, or what the soil density of water reading in there - alright, it looks like the grass needs watering, so let's turn on the sprinkler, and let it run for a certain duration, and then check the soil density again. If it looks good, then go ahead and turn it off. So all that is possible. And again, the technologies and the languages that we use - it can be all built straight from the knowledge that is picked up by the book, and by just Go programming in general.

**Ricardo Gerardi:** And just to add on that, I think that was a big topic for us when we were brainstorming which projects should be part of the book, which ones didn't make it... We had different ideas that bounced off each other. One thing that we try to do really in each one of those projects is to teach a skill associated with that project. So the readers would not only learn and build that project specifically, but they would also learn a skill that they can then use to expand and create their own projects based on that. So now you know how to use the GPIO... So there's plenty of other projects that can come out of that. And obviously, everybody's home is different, everybody's requirements and needs are different, so now hopefully they have that skill, and they can build their own solutions, their own home automations for their specific needs. That was really a big topic for us in our discussions, and how the book evolved.

**Break**: \[41:42\]

**Johnny Boursiquot:** So at the very least, then one would come out of reading the books and implementing the projects with sort of a better understanding of how these sort of commercial alternatives sort of function. I'm not saying all of a sudden people are going to be building commercial products...

**Mike Riley:** Maybe. Yeah.

**Johnny Boursiquot:** Maybe they could. Maybe this is the thing that launches their career into building these kind of things. But then again, you're going to have different concerns. Sort of mass production and all these things... It's become sort of a different area of concerns. But at the very least, you walk out of this journey knowing or having a pretty good idea of how these sort of commercial-grade products are built. Perhaps they have different constraints, and maybe they have to use the Pi Zeros, for cost management, rather than choosing something like a Raspberry Pi, which is more expensive, or something like that. But the understanding how to work with microcontrollers... I can't imagine -- I'm trying to figure out, if I go down this road and I get all this knowledge, does that actually help me... If I don't work with this stuff every day, does that help me... I assume it does, but I'd like to hear it from you. Does that help me in other areas of my professional career?

**Mike Riley:** Absolutely. I mean, there are all sorts of opportunities to be able to apply that capability to workplace, to solutions that you're looking for... Anytime you need to get outside of a typical software-based system and interact with the world in any way, that's how you do it with these microcontrollers and with the GPIO pins on a Pi. Because it extends beyond just that enclosed software system, and that physical set of hardware. Now you can do all sorts of things that you didn't even realize. The whole era of robotics, for instance, is nothing but sensors and actuators. So now you can take your Go experience, build a robot if you like.

There's so many opportunities and possibilities. And again, what we've found, particularly that it was exciting about TinyGo, was that it got down to that very inexpensive hardware level where you could do some pretty cool things with just a few lines of Go code, that you couldn't even imagine a couple of years before.

**Ricardo Gerardi:** And I think there's one other topic in addition to that, which is we also hope to inspire the curiosity. So maybe there are experienced programmers out there that never realized that they could, or never had the curiosity of "Hey, I could get this Raspberry Pi and start doing all of those things." And not only experienced programmers, but maybe even beginners, or kids... Sometimes when we talk about software, especially for kids, it's more abstract; when you can show that "Hey, I can press this button and that light will change the color", now I think it makes it very easy for them just that these things have an effect on the real world. I think that that shows them how these things work... And again, if they get curious about it and they start doing some research, or they want to learn more, then I think that's fantastic. I know that's actually happening with some of my kids, and I'm super-happy, because they were never interested, but then they started seeing those things working, the light changing the color with the weather, and they started asking me questions about these things, and how it worked, and even about what it was that I did for a living. So that was pretty interesting.

**Johnny Boursiquot:** That's awesome. What would you say was the most challenging project in the book, for both of you, or for either one of you?

**Mike Riley:** Well, for me, it was probably the first one, which was a fairly straightforward test of the temperature. But the reason for it was because, while I was still learning Go, I wanted to make sure that my semantics were correct, and my approach and methodology was... And that's where Ricardo came in handy, because he really helped clean up some horrible code that I wrote first, and taught me a lot. So for me, it was an actual great learning experience.

But yeah, that was that first one, because I thought "How do I make this so that it is as easy to discover, and yet makes me look like a real competent programmer?" So that for me was it. But I don't know, what about you, Ricardo? What was your most challenging...?

**Ricardo Gerardi:** \[47:56\] For me, in terms of challenge, I think it was our last project, the birdwatcher project... And more because I think on the other side of it is -- the project requires more in terms of building. You have more components, you have to assemble them in a case, because you're going to leave them outside, so it has to be protected from the weather... So I think I'm good with the software, but when it comes a little bit to the hardware and assembling these components together, I'm not that used to. I know that Mike has a lot more experience there, so it was a little bit more challenging for me to put those together. It's not that hard, but I think comparatively it was the more challenging one for me.

**Johnny Boursiquot:** Nice, nice. So the last question before we transition to Unpops... Has this sort of effort given you a sense of sort of what's coming, sort of what's next, or any trends happening within this space? Do you see something perhaps others don't yet see?

**Mike Riley:** Well, for me it just, again, was the level of empowerment that I felt, because it made me feel like it's no longer a black box. I'm in complete control of what I want to do, when I want to do it. If I have an idea, I don't have to wait for a manufacturer to build up a marketing strategy, and churn out whatever hardware they think that I want. I can just build it myself. Now, I know that in the home automation space there's a popular program called Home Assistant. And I took a look at that, and it's a very well-written, competent program... But again, it kind of reminds me a little bit of GitLab, where it's very powerful, but boy, does it have a ton of dependencies. It's kind of its own ecosystem. And I know a lot of YouTubers will refer to it, and such. And again, it's a good place to get started, but it sort of abstracts that knowledge, of "What exactly is this doing now? Where is my data going? I think I can trust it, but what are all these packages I'm building? What is all this Node.js stuff that's coming in, and running in the background all the time? And who exactly am I agreeing to with this data?" So yeah, knowing that I've got complete control end to end, it lets me sleep at night. How about you, Ricardo?

**Ricardo Gerardi:** Yeah, I can definitely agree with you. And I think that feeling of empowerment is really cool. And I think that when we combine the availability that we have now in terms of hardware, relatively cheap hardware, and the availability of software in terms of open source, libraries and development that we have out there, it really makes this all possible. You can develop, and I think more and more people are getting into this, and developing their own solutions and doing things that fit their needs. And I think that's great.

**Johnny Boursiquot:** Awesome. That is a wonderful place to leave it before we transition to Unpops. But yeah, I'm looking forward to actually picking up this book. The two of you, the way you sort of talk about it, and the enthusiasm and zeal has me sort of thinking about picking this up. Again, once upon a time - and I have sort of a good friend of mine within the Go community, Ron Evans... At every Go conference he brings me a gadget, or a toy, or something. One time he gave me a box full of wires, and an Arduino in it... I'm like "Okay, what am I going to do with these things?" And then every time I sit down to wrap my head around it, I'm like "Man, there's just so much; it's so intimidating." I have a bunch of wires, I have to start soldering things, or whatever it is...

So this stuff can be intimidating from the outside looking in, but I think with a guide like the book the two of you have put so much effort into, I think that's a good sort of entry point. And then from there, it sounds like basically the world's your oyster. You can just go from there and then start to build all kinds of crazy things that you just don't think about as a consumer of these electronics devices every day. You just don't think about what you can actually do for yourself. So I'm quite looking forward to it... So yeah, definitely thank you all for writing this book.

**Mike Riley:** Oh, that's great. That's great to hear.

**Ricardo Gerardi:** Thank you.

**Johnny Boursiquot:** Yeah. Alright, let's transition to Unpops.

**Jingle**: \[52:06\]

**Johnny Boursiquot:** Alright, lay it on me. Who's going first?

**Mike Riley:** I'll go first.

**Johnny Boursiquot:** Alright.

**Mike Riley:** So my unpopular opinion - maybe it's not so unpopular these days, but for me it's "Take social media and put it away sometimes." I look at social media sort of like junk food. It's good for just a little bit here and there... But when you feast on it too much, it kind of gets sick. So I'll kind of take a term from the '60s from Timothy Leary and say "Tune in, turn on, log out."

**Johnny Boursiquot:** Wise words. Wise words. \[laughs\]

**Ricardo Gerardi:** For me, unpopular opinion - I think more on the tech side I was thinking that Vim is better than Emacs, and better than VS Code.

**Mike Riley:** Oh, \[unintelligible 00:53:11.27\]

**Johnny Boursiquot:** Good old reliable... \[laughter\] You wanna start a fight... You got out of bed this morning and you chose violence. Okay, alright... Yeah, you're going to get some words... Yeah, we'll definitely make sure to point them at you when we put this out on the socials. Be like "Yup, Ricardo. Here he is."

**Ricardo Gerardi:** So I should be off social media now, right?

**Johnny Boursiquot:** Follow Mike's advice, yeah. \[laughter\] Nice, nice. I have an unpop. So obviously, given the current job market, you have a lot of people out there looking for work still, after all the layoffs, and still going on in some parts of our industry... I have a hunch that many companies are reposting the same jobs without actually having those jobs, especially in the recruiting space. They might just be maybe building databases of talent or something, so they can say to potential employers that "Hey, look, we have a database of hundreds of thousands of people." Maybe they're manufacturing those job postings, but not actually -- because I keep seeing the same things come up over and over and over and over again. So that's just my hunch. But I think - yeah, not all of these companies are on the up and up. So be careful out there.

**Mike Riley:** I think you're on to something, for sure.

**Johnny Boursiquot:** Yeah. Be careful out there, people. At the very least be skeptical, or at least keep an eye out so that you don't waste your time. They might be getting value out of your data, but you might not be getting what you think you're getting out of a relationship with them. So be careful out there, people.

Alright... So with that, I say thank you for coming on Go Time. Mike Riley, Ricardo Gerardi. Thank you so much for writing the book, and I look forward to reading it. And if folks have any feedback, questions, I'm sure they're going to find your information on on the book, as well as on Pragmatic Publishers. But yeah, if you want, we can definitely point them to your socials for when you are on the socials... When the episode comes out, I'll be sure to tag you, that way for folks that are interested and wanna strike up a conversation with you online, they can do so.

**Mike Riley:** That's great. I appreciate it.

**Ricardo Gerardi:** That's great. Thank you.

**Johnny Boursiquot:** Yeah, thank you so much. And with that, we are out.
