**Erik St. Martin:** Welcome back everybody to another episode of GoTime. Today's episode is number 62. On the show today we have myself, Erik St. Martin, Carlisia Pinto is also here...

**Carlisia Pinto:** Hi there.

**Erik St. Martin:** And Brian Ketelsen, all the way from Italy...

**Brian Ketelsen:** Buona sera!

**Erik St. Martin:** \[laughs\] I didn't even know you could speak Italian.

**Brian Ketelsen:** I can't.

**Erik St. Martin:** And our special guest for today is Jeff Lindsay.

**Jeff Lindsay:** Hello.

**Erik St. Martin:** Now I think we should make Brian speak Italian for the whole show.

**Brian Ketelsen:** Dude, I did. That's all I know.

**Erik St. Martin:** It's literally every word?

**Brian Ketelsen:** Well, prego and grazie...

**Carlisia Pinto:** And what city are you in?

**Brian Ketelsen:** Milan.

**Carlisia Pinto:** Milan, nice.

**Brian Ketelsen:** It's beautiful. Right next to my hotel is this building that they have all lit up with pretty lights, and stuff... So I'm standing outside, looking at this building, trying to figure out what it is. I walked around the block, and there's a sign out in front in Italian and English that says "This used to be a farmhouse in the 1500s." I'm like, "Holy crap...!" 500-year-old farmhouse right next to my hotel. It's just crazy.

**Erik St. Martin:** Wow.

**Brian Ketelsen:** We have such a short-term view of things in the United States, where the oldest buildings that we see are just a couple hundred years old, and that's only in the rarest cases... Generally, everything's less than 100 years old. It's just crazy.

**Erik St. Martin:** So Jeff, do you wanna give maybe a little bit of background about yourself and some of the things you're working on?

**Jeff Lindsay:** Yes... It can be difficult to do that, but...

**Brian Ketelsen:** Uh-oh... He could tell us, but then he'd have to kill us.

**Jeff Lindsay:** Yeah, especially -- so I'm doing a lot of open source stuff... Actually, for the past few years I've been doing a lot of work in kind of [Docker](https://www.docker.com/) or distributed systems and platform, ecosystem stuff and [Kubernetes](https://kubernetes.io/), and I'm really kind of pushing out above that and doing some kind of cooler stuff... Because it's too noisy. There's too much stuff going on, and I know how to do things the correct way, but it's really hard to get that out. I like this simple, and nobody likes to make anything simple, so I'm trying to find a new place to innovate, which is kind of higher up the stack.

**Carlisia Pinto:** Explain, please... \[unintelligible 00:03:20.10\] We'll have to go back to that.

**Brian Ketelsen:** So do you wanna talk about some of the things you've done in the past, rather than expose this secret thing that you're working on? Like [Flynn](https://flynn.io/) or [Dokku](https://github.com/dokku/dokku), or my personal favorite, [Envy](https://github.com/progrium/envy)...

**Jeff Lindsay:** Which one?

**Brian Ketelsen:** Envy.

**Jeff Lindsay:** Oh, you saw that...?

**Brian Ketelsen:** I saw it. I had the most fun with that application. I actually used it as a training platform.

**Jeff Lindsay:** \[00:03:51.18\] Oh, cool. Yeah, that one was interesting. I like trying to do kind of mind-bending things, and that was kind of mind-bending... But then people were also really interested in it. I didn't really take it all the way -- it kind of comes back into some of my bigger plans, but basically, everything I've ever worked on comes back around to my bigger plans.

So I worked on Flynn a little bit in the beginning, Dokku - that was basically the first killer app for Docker; it's like a Heroku implementation in 100 lines of Bash. It's now more than 100 lines, but it's very cool, because it's very hackable. There's tons of stuff in between, stuff like Envy, that people don't know about, or I don't announce, or whatever.

I worked on [Docker](https://github.com/docker) at the beginning, and... What did I do before Docker? I guess I worked at Twilio, and I mostly learned -- it was great working at [Twilio](https://github.com/twilio), being employee ten at Twilio, but it was my least productive in terms of open source output, so that was kind of a bummer; it's part of why I left. And then before that I worked at NASA on what became [OpenStack](https://www.openstack.org/)... NASA Nebula became Nebula, which merged with RackSpace to create OpenStack.

Then, let's see... Before that I've worked on a lot of weird projects. Webhooks is a weird one; it doesn't really -- it's kind of a weird pattern... It's a weird thing to call a project. Some people say I invented webhooks, but I don't think you can invent webhooks. I popularized it, I coined it, I really pushed it to be something that we did collectively to improve how our web applications interact, and can be extendable and integrated and more programmable.

I did a startup way back when I was 22 or something called DevjaVu, and it was \[unintelligible 00:06:16.27\] this was right when GitHub started, and they were doing such a good job.

**Erik St. Martin:** Track... I haven't seen that in ages...

**Jeff Lindsay:** One of those things... Yeah. I don't use Track, but I learned a lot of really cool tricks from it and I actually bring some of those up today, architecturally. But I made a product called DevjaVu around Track, and then shut it down because I was like "Nah, GitHub's killing it. I don't wanna waste my time... They're doing it right."
A lot of people, like [Solomon Hykes](https://twitter.com/solomonstre) at Docker - he was a user of DevjaVu back in the day; it's kind of how we knew each other. A lot of people started using DevjaVu before they were like "Now, GitHub!"

Before then, I did [SuperHappyDevHouse](https://en.wikipedia.org/wiki/SuperHappyDevHouse), which was one of the first major hackathons in the Silicon Valley, and did that for five years. That was incredible... I can't even capture how amazing those events were. Then Facebook copied SuperHappyDevHouse...

But most of this time I've been freelancing or just building kind of open stuff, or weird ventures... I don't know. A bunch of other stuff.

**Erik St. Martin:** So you've only done "just a couple things." \[laughs\]

**Jeff Lindsay:** I made a thing called localtunnel...

**Brian Ketelsen:** The precursor to [ngrok](https://github.com/inconshreveable/ngrok).

**Jeff Lindsay:** Yeah. And localtunnel was kind of the inspiration for trying to find a sustainable model for web apps... The open source equivalent for services, because there is -- if you wanna build something and run it on the internet, there's really no way to do that sustainably without building a business, and I think that changes software.

\[00:08:08.12\] It also isn't ideal for people that like to just create things and put them out there, because now you have to dedicate your life to making a business work around it. There's plenty of things that have value that you can't necessarily build a business around. So I've been kind of working on infrastructure to kind of help make that happen.

[Commando.io](https://commando.io/) is a recent project that's not out of this kind of private alpha stage, but that's sort of a recent project... I bring it up because I was gonna try and validate this idea of "Can we build a service that's actually -- it looks like a startup, but it's actually a sustainable self-running service, where all the operations is also open source, and using mechanisms like ChatOps and versioned state and configuration", and kind of automated accounting and stuff like this to make a system that just runs in an open source community is the only thing keeping it going. So there's no person or business entity that will (I don't know), get bought and shut it down...

So many great things that have been built, like Parse and some other stuff... It's like, the business aspect of software can be really harsh sometimes, so I spend a lot of time thinking about that.
I also think a lot about making -- just in general, I think this is me trying to encourage everybody to be more of a hacker/builder type. I really wanna make more of the world, and even just the computer systems that we have, more programmable, more extensible, more scriptable, more customizable. They've become really dependent on this idea that application vendors and software developers are how we get functionality from the world of computing, but really we should be able to do anything, because it's software... Like, you can do anything, but it's not that way.

And even as a professional programmer, there's this idea -- this is kind of ideal, that we have this great kind of imagination compiler, and you kind of come up with an analogy like Legos; you can just kind of like compose things together and throw them together, and that's not really how it works, most of the time, unfortunately, to the point where a lot of really creative people, technologists and programmers, they see something cool and they think "Oh, I can make this system better, or I can automate this" or whatever, and then they don't, because it actually is quite a bit of work to not just build it, but then maintain it, and all that.

So that's really unfortunate, and I spend a lot of time thinking about that and trying to make better building blocks. That's a common theme of a lot of my work.

**Carlisia Pinto:** Do you ever think of using artificial intelligence?

**Jeff Lindsay:** You know, a lot of other people are thinking about artificial intelligence, and there's so much value you can get out of not using artificial intelligence... Just basic automation techniques. It's like, there's so many simple things that it's like oh, you could imagine modeling that in a few lines of code, and instead people are trying to build AI systems that are trying to understand what you're saying and then trying to put together some list of super limited possible ways to react, when in theory if you just gave people, empowered them to have the tools to really easily just build their own automation, I think you get more bang for your buck... Though I think in the long-term AI will have a helping hand. It's more of a tool than a solution. A lot of interesting stuff going on now.

**Brian Ketelsen:** \[00:12:14.21\] That's a good way to put it... More of a tool than a full solution. I've been thinking about the idea of the composable software recently. I found - and I promise this isn't an advertisement - Microsoft Flow, and I had never seen it before, or anything really like it. It's just drag-and-drop, clicking on stuff to make crazy blocks of things happen with software.

Every time you save an Excel spreadsheet, it can read the value from column seven and send a tweet about it. It's really cool automation, and I'm kind of surprised that it hasn't caught on more. I had never heard about it until I started at Microsoft. That's pretty easy stuff for your average data worker to just go use without calling IT.

**Jeff Lindsay:** Yeah. There's some great -- I kind of think of them as walled garden experiments... I love any kind of experiment in things to facilitate end user programming, things that make it easier for not necessarily programmers to easily program things, either visually or whatever. But the problem I have with a lot of those systems is they become their own ecosystem, they become their own walled garden, so my way of thinking about building systems is a much more open kind of system.

Some friends and I were working on this project that we're calling [WebPipes]   (https://github.com/webpipes); it's kind of like formalizing some webhook stuff to try and come up with an open source spec for building "if this, then that" type systems. And it was layered in such a way that you're not just creating these formal abstractions for this particular system, but at the end of the day it's just an API, and if you really wanna get into it, you can just write some custom code, or write a custom block, or a custom trigger... So making it so that you can kind of work at it as an expert, and kind of work at some of the lower-level interfaces, as well as having kind of a high-level interface, a graphical representation of things... Something that kind of scales to both, because I think it's hard to bootstrap a community, it's hard to bootstrap something like that, so being able to actually be something that a professional programmer would wanna use, as well as an average person, which is a challenging thing, but I think it can be done with design.

**Brian Ketelsen:** Nice.

**Jeff Lindsay:** A lot of the stuff that I've worked on - Docker, things like this - were pieces to something else that I wanted to build.

The way I think of things is -- and I have frustrations with this, because this is the conventional way of thinking in software, and actually most fields is very relative to the current state of things. So it's like you're trying to solve immediate problems, when it actually goes a really long way to step back and say "Let's say we started over... What do we actually want? Can we envision it? Can we describe it?" and that gives you kind of a roadmap to at least start saying when you're making specific solutions to things, "Is this taking us closer to where we wanna be, or is it just solving this immediate problem?"

I have all these ideals of a world where everybody is empowered to build things very easily, and tap the full potential of computing and automation and all of this, and it requires a lot of infrastructure to get there, especially if it's something that is more than just a walled garden; it needs to be built up from other building block components.

\[00:16:12.23\] When I first found [AppEngine](https://en.wikipedia.org/wiki/Google_App_Engine), I was in love. I was like, "This is amazing. I can build applications and hit a button and not worry about the operations in some ways", so that lead to this sort of AppEngine and [Heroku](https://en.wikipedia.org/wiki/Heroku). Working at Twilio, we talked a lot about "Wouldn't it be great if we had our own Heroku?" and that lead to "Okay, well how do we break down the problem?" and that kind of got into distributed systems, but the main primitive or building block that I saw to facilitate building your own Heroku was basically Docker - a container, manager primitive that was a higher level kind of primitive than [LXC](https://linuxcontainers.org/lxc/introduction/). So running into Solomon, kind of him thinking about the same kind of thing, it was like "This is it."

So then that building block was out there, but then you had so many other things you needed to develop for building these kinds of distributed systems, or a system that you could build a good Heroku or AppEngine on top of, which a lot of people started, you know, the floodgates opened and everybody started building stuff, and Kubernetes has kind of risen to the top in a lot of ways for getting us to that kind of cluster manager abstraction level, and other kind of things; working on [Serverless](https://en.wikipedia.org/wiki/Serverless_computing), which is really kind of like a different way to think about platform as a service stuff.

Actually, for a long time I had all the components, like how I would build Kubernetes, but I really hesitated from building them because I knew so many other people were building them, and it would have been -- I'm not getting paid to do it, so it's like I don't wanna waste this precious commodity, when I could be building other things, or whatever.

It's frustrating though to know that you want something in a particular way, and then it doesn't happen exactly as you want... But as long as you're kind of focusing on the bigger picture, it helps.

**Erik St. Martin:** So what's your opinion on where we're going with, say, Kubernetes? Because you're interested in distributed systems stuff and solving things at a higher level, on abstractions and building blocks... How we're getting to the point where we're trying to make the running of Kubernetes, or getting it right, where it's a commodity, where it's easily -- you can get a Kubernetes cluster pretty easily, building application abstractions on top of that. We start seeing more and more of like the operator pattern and things like that, where you can actually abstract away the application, and build things like that. What are your thoughts on that?

**Brian Ketelsen:** I love the [operator pattern](https://www.slideshare.net/Jakobkaralus/the-kubernetes-operator-pattern-containerconf-nov-2017)... That's very much sort of a turning operations into a building block, having Kubernetes as kind of the standard interface to facilitate it. That's really exciting, and I wanna see operators for everything.

You know, I have my problems with... Kubernetes is too complex, Kubernetes is yadda-yadda-yadda, and some of these can be solved with higher level abstractions, and one of the projects that I would love to do that I just can't find a -- it just doesn't make sense to make it is the Dokku of Kubernetes, that kind of sits on top of Kubernetes and gives you that very lightweight but very hackable and customizable...

The problem is Kubernetes is already very extensible, but it gets very complicated very fast, and there's still a lot of stuff that you need to kind of set up and configure with Kubernetes out of the box.

\[00:19:55.07\] The way things are moving, Kubernetes is probably just gonna add more stuff to try and solve those problems, but it's just gonna make things more complicated. That's usually what happens with software like this; it happened to OpenStack, it happened to Docker, it's happening to Kubernetes... It's really unfortunate. And a lot of it, I think, has to do with corporate interests and stuff like that. I kind of think VC-funded open source is one of the worst things to happen to open source, but maybe that's a different conversation.

**Erik St. Martin:** Yeah, I think outside interest, and I think everybody kind of has their own vision of the future and direction, and they're all trying to slide in the building blocks that they need for that vision, and then we end up in situations where there's so many options... The kind of analysis paralysis, or the paradox of choice, where you're looking at all this stuff and you're like "Should I use a StatefulSets -- or PetSets, because it used to be called that, but they're both in there now...?" There's confusion, and then I think people just back away.

I'm a big Kubernetes lover, but I also think that Kubernetes is amazing for Kubernetes' related problems. I think there's nothing wrong if your infrastructure is not complex in that way... There's nothing wrong with running a couple of containers in Docker, and things like that, and a load balancer in front it, and problem solved...

**Jeff Lindsay:** Totally, yeah.

**Erik St. Martin:** ...why support all of that?

**Jeff Lindsay:** Definitely. Most of the time when I try and get people's vision of the future, it's not really that much further out from the existing scope that they're working in. They might want certain different ways of doing things at a lower-level, because they're fans of [Systemd](https://en.wikipedia.org/wiki/Systemd), or something like that. It's like, "Okay, so your end goal is we're using SystemD" and it's sort of like "Well, but that's like -- I don't even care about that part of the stack now. Can't we just move on?" And it's not even like -- some people are like "Okay, now after platform as a service, we have serverless." It's like, "Okay, we're moving up the stack", but that's even, like, again, very sort of just like one step past the idea is to like think "Well, what do we want?" I go as far out to the kind of society that I wanna live in, and go backwards from there, but... So I don't wanna get into that.

Actually, Kubernetes isn't super interesting to me anymore. In the same way that I kind of quickly moved on from Docker, it's like "Okay, I know how to do stuff with this. It's a solved problem." That happened really quickly with Docker, and then it was just really painful to sit through years of the industry kind of catching up, and even a lot of the best practices that I had kind of figured out early on, and talked about and shared and built tools like the [Alpine Container Image](https://en.wikipedia.org/wiki/Systemd) - we found that and we were like "This is perfect for Docker." So we brought Alpine to Docker. Before that, I was working on a [BusyBox](https://en.wikipedia.org/wiki/BusyBox) instance that had a package system, because it was like "You want BusyBox minimalism, but you wanna have packages", so there's a space between doing a custom single binary type of like Go thing, and something that can run SSH, or Bash, or whatever... But not have to rebuild a custom BusyBox just to get it.

So one of my early Docker containers was a BusyBox container with [OPKG](https://en.wikipedia.org/wiki/Opkg), which was a package manager for routers, I think.

And then I discovered Alpine, and I'm like "This has everything... With a couple of caveats, but this is great." Now luckily everybody's using Alpine as their base image, because it's actually -- like, you're shipping containers around all the time, why are you sending these huge images?

\[00:24:05.12\] And I'm also really pleased to see stuff like webhooks... They're everywhere. It took ten years, but... When I was working on webhooks, I was building a lot of prototypes, adapters to give you webhooks for various things... Kind of as demos to show people like "Oh, this is what you can do and how easy it is to use webhooks to get certain events, and something like this." So I made a mail hook gateway and a \[unintelligible 00:24:37.06\] a lot of API's that do mail will provide those kinds of things, but a cron one... A bunch of things like that, and I was putting them all on App Engine.

And one of the things that seemed to make a lot of sense for webhooks is, well, you wanna write little scripts, little handler scripts, and it's gotta be easy; I just wanna be able to wire something up and be done. So I basically imagine the pitch was a paste bin, but the code you that you put in it actually runs. This was a project called Scriplets, that will actually run on App Engine, so it was kind of a very early kind of serverless type of thing.

And there were a lot of those kind of hosted code type of things back then, and they were all positioned to build apps with... It was like, "No, their benefit..." -- a lot of ones, like AppJet, and I can't remember, I used to have a list of these... That let you just write code and hit Save. And there's a bunch now, like AppKit and some interesting ones that have other cool properties, but Heroku originally was that as well, where you could write a little bit of code and handle webhooks. But they were all building things to build apps, and nobody really wanted that, so a lot of these went out of business.

Then AWS comes along, and they do [Lambda](https://en.wikipedia.org/wiki/AWS_Lambda), and they make it specifically for event handling... A lot for their internal events, but then also webhooks, and it can do HTTP, and the funny thing is -- and then everybody wants to build apps with it, which was kind of hilarious. But even Lambda is not that, like, paste bin kind of experience where you just like write a little bit of handler code and hit save... You see that in pockets -- I'm sure Flow has that kind of stuff... Some of the stuff that Microsoft is doing is really cool. Like, their durable functions is something that I've been working on for a long time sort of on the side, this idea that workflow automation is a really big thing, being able to write a program that interacts with multiple people over maybe a week... Send someone a task via e-mail, they say they've finished it, moves on, does some automation, and then gets approval from a handful of people, or a majority vote, or something... That gets into some really interesting things in what you can do in terms of automation of groups, not just businesses.

Most workflow automation stuff is just you're kind of defining this big state machine, you do in this kind of like DSL type of thing, and it's kind of painful. I just imagined being able to write some Javascript where you get to a function, and it doesn't even have async/await, or maybe it does, but you get to a function that's like "Okay, this function is gonna e-mail people for approval, and then it's gonna wait until it gets approval from those people." That might take a week or a month or a year - you don't know, but as soon as they do, this needs to go to the next step. So you can start programming in the large with simple Javascript or something...

This finally became possible with some of the stuff that was done as first kernel extensions, and is now integrated into Docker. You can actually persist a process, pause a process, serialize it to disk - any process - and unserialize it, and it will start running exactly where it was. So with a little bit of infrastructure around this, you can build something that is that - you could write some Javascript that will run until it does something, where it needs to wait for an event, go to sleep, serialize it so it isn't running anything, it costs nothing, it's just storage of this serialized process... And then when the event comes in, it unserializes it, runs it and goes on as it were.

\[00:28:24.00\] That's kind of what durable functions give you... So it's validating on one hand, and a little -- but I wanna talk more about Go. This is GoTime.

**Brian Ketelsen:** Well, that's perfect. When did you start Go? Who introduced you to Go? Was it something that you stumbled across and found on your own?

**Jeff Lindsay:** I used to watch a lot of tech talks, Google tech talks, and [Rob Pike](https://twitter.com/rob_pike) gave a [talk in 2007](https://www.youtube.com/watch?v=hB05UFqOtFA) in which he talked about Newsqueak. Newsqueak was -- I feel like it's not as well known as it should be, but Newsqueak was very much a... Which has nothing to do with squeak, but Newsqueak was very much Go, but with a different implementation, a slightly different syntax, but all the patterns were there - those concepts of goroutines, and even a lot of the Go conventions were in the language... And he described doing concurrency in a system like this. I was like, "Oh, this is really cool", and then not long after that he worked at Google and started Go. So it was kind of that talk that was my first "Oh, this is really interesting!"

And then of course, the fact that Go had this philosophy... It kind of came from why people did stuff at Bell Labs, which was very much kind of like that UNIX philosophy, building simple systems... There was sort of a design -- what's the word...?

**Brian Ketelsen:** Ethos?

**Jeff Lindsay:** There's a certain amount of discernment... There is a clear ethos, and in it sort of this like "You know we're actually going to be thoughtful about things, and try and build --" I mean, the way I describe it is very generative primitives, right? The people that wanna do a set library for Go - it's like, well, you kind of miss the point. Like, I know it's a little bit extra work to do a set using a map, but you can just a set using a map, we don't need this extra bit of abstraction and this other library and this whole dependent -- I mean, that's how you get the mess that is the Node and Javascript community where they build these micro-libraries for things... Complexity explodes.

What I wanna see are less libraries, and one of the ways that I think that's possible... How can I try and describe this...? So when I was working on webhooks, there was this kind of metaphor, this story of "You talk to an API. The API doesn't really have a way to talk to you. You talk to it using HTTP, and then whatever kind of convention is on top of that. It could just talk HTTP back to you, assuming that you have an endpoint somewhere on the internet... Because maybe you're an app, whatever.

And that was kind of a realization -- it's kind of a two-way conversation. The weird thing is that almost all programming, the way you think about it, like every library is a collection of functions and objects with methods that you call, and that's kind of the main paradigm of reusable software - exposing collections of functionality that you call, and that you kind of dominate the conversation.

\[00:32:07.08\] Basically, the analogy is having kind of a one-sided conversation with somebody. You're talking to somebody, and pretty much all they're doing is acknowledging you, maybe looking confused, like "That's returning an error...", or if you ask a question, they answer it, but they aren't a real participant in the conversation, because software doesn't really have a great way... I mean, it does, but it's more of like a cultural practice; we don't design reusable software to have a conversation back with us. That kind of gets into some of the stuff with interfaces, which in Go it's just so beautiful because you can define an interface and there's very little extra work you need to do to take advantage of interfaces...

Interfaces are magical. It's like one of the coolest tools in software abstractions ever created, and we don't use them enough in Go as it is, but we can actually -- imagine if we actually really used them to do two-way conversations. That's kind of what I've been working on, how I've been running software for the past few years, is writing more software that expects to talk back to you using a particular interface, in a way exposing a bunch of hooks, for various things... So again, it comes back to hooks, which to me is a big theme in my work, in terms of making things more extensible, more tightly integrated. When you have this, the software that you get is so much more composable, so much more reusable.

This pattern, the way I'm thinking about this actually came from Track, that Python piece of software that nobody really knows how it works except for Track developers, and as a person who's building a startup around it, I had to know how it worked. And they developed this over time... This really kind of elegant kind of component system where every major piece of function -- because it did a lot; it had a wiki, it had an issue tracker, it had a timeline, a code browser, it had search, it had... And you could get plugins that would make it do more. The way they achieved that was by building everything as a component, and not only would it have an API -- it's an object, a singleton... The wiki system is a single object... Every component could have extension points, which are basically hooks into that subsystem.

For example, if you wanted to make it so that code is checked in, it will close the issues that are mentioned in it, that could be implemented in the issue tracking system instead of being hardcoded with the versioning system. It just has a hook. When code is checked in, have a look at what's in it, and then another system can be like "Oh, it says close number 14, and I'm gonna close that." So you can get a better separation of concerns and really build these components that map to functional pieces of functionality in your applications.

Then those extension points can be exposed to the user to do custom -- you could expose them as hooks, like shell hooks, like shell scripts, or you could expose them over some custom plugin protocol, expose a Javascript interpreter and you call functions in there, so now your users can script stuff in your application...

\[00:36:01.05\] So this turned out to be an incredibly powerful, simple idea like webhooks, and I've been trying to find a way for the past three, four years to do that in Go in a Go idiomatic way that also has some of these other properties of building component-oriented software, and I actually finally have a library that does it. I've been working on it for a while... And it's not a lot of code, that's the whole point. It's really hard to build software -- like, ideally software is as little code as possible, because every line of code is a liability.

So it's a really simple library. I just put it up in an example app and all this... So I guess this is the official announcement of it - it's called com, it's kind of a stupid name... [GliderLabs Com](https://github.com/gliderlabs/com). It lets you build component-oriented software in Go using this kind of interface-based hook stuff, and dependency injection and configuration... It's really cool.

It's really abstract though, it's hard to describe, and visually it's a lot easier, but if you go to the project you can look at the examples, and stuff. I built a wiki in it the other night, and the wiki is like 200 lines of code, because it's using a lot of reusable stuff.

**Brian Ketelsen:** I saw a com a couple of weeks ago... Probably when you first pushed it up, I'm not sure. I have a habit of cruising through GitHub late night, looking at interesting Go projects... And I didn't quite understand it until you put the wiki example up, and now it's much easier to understand. So maybe it would be useful -- but I think there is already [a link](https://github.com/gl-prototypes/wiki) on the com repo to the wiki example. The wiki example changed everything for me; before that I was just like "What is this?"

**Jeff Lindsay:** Yeah, that was the challenge... Normally, Go libraries - it's like "Oh, just go look at the Go docs" and that was like the worst way to approach it, especially because now you really only use one method... It's basically a one-function system, and everything else kind of happens magically with the reflection and conventions and all this stuff... And using interfaces. And then all the interesting stuff is done with components built from that.

So there's this separate library that's called Standard Com, that has stuff that I do al the time. It actually sounds like, "Oh, why would you need a component for that?" Like, there's a daemon manager that will run services, so that if you have anything that needs to serve something, this will run it after some initialization hooks that anything can implement; HTTP then uses that, and then there's a whole component for building HTTP... It's really a wrapper around the standard HTTP library that does some stuff that basically everybody ends up having to do, but then where it gets custom - there's a hook for it.

From that I built sessions and authentication... Authentication using [Goth](https://github.com/markbates/goth), that actually has like 40 providers, or something like that. So you log in with GitHub or whatever, and all of the -- usually, when you use Goth, you have to set up the handlers... They have some helper stuff, but they're actually either broken or do things differently, so you have to kind of integrate libraries. That's always the thing - you always have to integrate libraries, which is really annoying. You have to set them up and tell them how to interact with the other libraries... So if you build with this system, it becomes really easy for libraries to almost self-assemble, and you're just using Go interfaces as the mechanism for doing this.

These are all kind of more experimental stuff, but then I built a console component that basically wraps up the authentication. You have a page where it says login, authenticates with whatever provider is configured, it takes you to this kind of like very adminy-looking thing with a top menu, where you can configure what it says the title is, and the menu items are actually provided by hooks, so when I create the wiki system, it's like "Okay, here's the menu item. I want a wiki", so it says "wiki" and that links to a page, then it renders part of the page and hands the rest off to the wiki to render its pages...

\[00:40:25.22\] So it's a really amazing way to write -- it feels like we never had composable software before. It's such a different way of building -- I mean, not different, it just feels so good working with this system. It's taken years to kind of get right and reproduce in Go, but I think I've finally done it.

So now the idea is I'm gonna build a bunch of stuff with it, because that was the whole point - by having reusable components, I can easily throw together systems and ideas and projects. One of the things that I wanna do with this is rebuild command.io kind of from the ground up, based on the existing codebase... And actually public, open source from the beginning. And I've been doing a lot of streaming, so that people can kind of watch while I work on it.
So I'm gonna try and build every component from the ground up, building a command.io system... Which by the way sort of functions as a service, but it's commands over SSH it in itself is kind of funny. I don't know if anybody's seen command.io...

**Brian Ketelsen:** I looked at it but didn't really get the use case for it. It seemed like there was the ability to run remote commands, but no persistence or no file storage... I was confused. Help me out.

**Jeff Lindsay:** Yeah, so a lot of kind of function as a service is usually designed around HTTP, so you're writing web handlers and you can kind of shell out and do whatever if you have containers. Usually, these things aren't made to work for -- you know, let's say you have a script. A lot of people's automation in their companies is based on Bash, or various scripts, and in order for people to run those scripts, they have to download the script, or install it as a package, make sure you have all the dependencies, and of course, you're not running in containers because you're talking about people's development environments... So everybody has to have the right dependencies, and then if there are secrets -- like, let's say your tool is gonna go do stuff with AWS and it needs your AWS credentials and you have to share your credentials with everybody for it to work... So this was a way to basically say, "You can put that script in the cloud... It'll run in the cloud, it'll run with secrets that you specify that nobody else has access to, and you can run those commands with SSH." So you can say "SSH my deploy site command" from your company or your app or whatever, and it'll go and deploy from anywhere.

They are stateless in that you don't have -- but you can pull from Git, you can kind of do anything you want from the command line. However, one of the things that I've been working on for a while is a way to expose your current directory to it. That will open up the possibility of writing tools that actually interact with the file system and particular files in your project.

Again, it's kind of like the speed to get somebody working on your project, have all the right tools and stuff like that - you can actually put all those in the cloud, and then they kind of run a command... And it's working on your file system, but the code is executing somewhere else. So it's run consistently, and any secrets or passwords are protected, and you can share access to commands. So it's a really powerful -- it's a dumb primitive. I did it because it's -- it's not like, you know, the most amazing primitive, but there are use cases, especially when it comes to groups, trying to automate things like deployment in kind of an opsy world... And you could easily throw a Slack interface onto it, and now you have ChatOps type of stuff.

\[00:44:25.01\] So function as a service, focusing on command line... That's really what it is. And yeah, it's a great tool. So I was gonna rebuild that using this component; it's using an older version of it, and isn't as componentized as it could be, but this is a way that people can kind of see "Oh, here's how you'd build an application or a system that's fairly complicated (not super complicated) from scratch, using these kinds of components." And a lot of those components will go into future projects as well.

A common one that we have besides HTTP is SSH. We have a really great SSH library for Go, people don't know... [GliderLabs SSH](https://github.com/gliderlabs/ssh). It wraps the existing crypto SSH library and gives you an interface that looks a lot like the HTTP interface for servers. So it becomes really easy to build SSH servers and do stuff with SSH... Which is a really cool protocol by the way, because it can do connection tunneling, and all kinds of neat stuff. As a protocol it has a lot of interesting primitives inside it.

[Brad Fitzpatrick](https://twitter.com/bradfitz) said he thought that it was dope, so I think that's good. He said it's refreshing to see good API design... I was like, "Well, I'm just copying HTTP, so..."

**Erik St. Martin:** \[laughs\] I wanna say I've messed with the SSH library... It's been a while. It's so hard to remember where you pick up the libraries from; you find something cool and you're like "Oh, this is awesome", and then you remember who wrote it later.

**Brian Ketelsen:** I played with it just a couple weeks ago and I had a blast. I did things that were completely not SSH with it, which I think was the best part.

**Jeff Lindsay:** Yes... Yes! I do that all the time. I love doing non-SSH stuff with SSH. It's a great protocol; it's this whole layered approach... It has authentication stuff, and that's all pluggable, and then it has a connection layer where you can kind of tunnel multiple connections, and then it gets into specific, like "Oh, this is an SSH session", or you can do stuff like, you know, not just tunnel connections, but basically implement other subprotocols in it.

It actually looks a lot like HTTP/2. It has a lot of the same primitives in terms of like -- you know, instead of TLS, it has its own security authentication encryption mechanism, and then the streams in HTTP/2 map to the connections streams that SSH has...

I was using it for all kinds of crazy stuff. It's a really great protocol. And then of course it all works with SSH keys, which everybody is pretty comfortable with, so...

**Erik St. Martin:** We hope...

**Jeff Lindsay:** I actually rewrote localtunnel using a library that I built on top of the SSH stuff, and it turned localtunnel into like a hundred-line program. So to me that's always an achievement, when I can build a non-specialized library that allows maybe something I made before that was very complicated to be represented in a very simple way... That's usually a good sign, I think, of a good building block.

**Erik St. Martin:** Yeah, deleting code is always awesome, and I love when people create things that are beyond what I thought. You built this really hyper-focused, specialized thing, and then somebody comes along and builds some kind of abstraction that takes away 90% of your complex code, and you're like "Wow, I didn't really see it at the time as something that was way more general." Then you get to kind of delete most of your project, include some kind of working component...

**Jeff Lindsay:** \[00:48:19.00\] And in Go, that usually happens when you're using interfaces, because having interfaces for stuff is really great. I was just saying the other day that the [Afero](https://github.com/spf13/afero) file system project - that should be in the standard library. There should be an abstraction for file systems, because there's so many things you can do with it. Not only do you normally end up having to mock a file system somehow anyway, but for example a lot of things are programmed into that interface that you can just swap out with something that... For example, I'm gonna be working on a project where -- [Hugo](https://github.com/gohugoio/hugo), I use Hugo for my sites, and the way that I normally will workflow is I clone the project locally, do some edits, run Hugo, check it out locally, and then there's a script, when I push the code the CI will automatically deploy it to the GitHub pages branch to deploy it.

A lot of pieces could be removed from that if you just replace the file system that Hugo works with with the file system that talks directly to GitHub... So building a file system implementation that actually is a GitHub repository, using the GitHub API. And that way you can write that and you could almost literally drop it into the Hugo library and say "Here, use these two file systems", and it reads files in from your master, and then it writes files directly to your GitHub pages branch. That's beautiful.

**Erik St. Martin:** I wonder if \[unintelligible 00:50:05.15\] would be like using Fuse...

**Jeff Lindsay:** Yeah... Stuff like [Fuse](https://github.com/libfuse/libfuse) is really cool. It all depends on the requirements that you have. Fuse requires kernel extensions. I can tell you about something -- kind of an alternative to Fuse is using [9P](https://en.wikipedia.org/wiki/9P_(protocol)), which is kind of a simpler NFS. It was developed by Bell Labs, and it was used in Project 9, all their file system stuff. So this was a remote file system protocol... It's actually really simple, because NFS and all these remote file system type of stuff are just interfaces; they look a lot like some of the io interfaces, or like the file interface, but it's just a protocol for sending messages that are calls to those, and they return back the bytes.

The cool thing about 9P is that it already is in the Linux kernel. You can just mount directly -- you don't have to install anything extra, you can just, in most cases, mount a 9P file system. This is how you can do custom file systems without having to do Fuse and run an extra daemon, and have a kernel extension installed... Just use kind of a network file system API, even if it's local.

\[00:51:34.09\] There's a really great 9P protocol project that one of the guys at Docker made, and it was missing an actual server implementation, so I wrote that... And I actually ran -- Jonathan from Flynn was actually thinking exactly the same thing... "Oh, you can use this as a better way to deploy your current directory." Instead of having to tar it up and then stream up the tar, like everything that doesn't do \[unintelligible 00:52:01.07\], you can just say "Here's a tunnel to a 9P file server that's serving the current directory", and then you get kind of a lazy load way to access the files. So in theory it would be faster, because it's kind of like -- they call it streaming the files.

So he was thinking the same thing and found the same library, and we actually worked -- it's been a while since we... We catch up every now and then, but then we got to kind of collaborate on a little bit of code fixes to this.

So yeah, using SSH you can then tunnel that 9P connection through it, so that's how command.io is going to expose your local directory to the container on the remote side in the cloud, using 9P. So Fuse is really cool, but 9P is also really cool, especially because it doesn't require extra stuff.

**Brian Ketelsen:** That's crazy awesome. I just read an article that I think I found on Hacker News maybe a week or so ago, on building your own 9P service, and it was one of the best-written articles I've ever read. I know I tweeted it... I have to come up with the link to that. It was a really good article.

**Jeff Lindsay:** Yeah, I'd like to see that. It is a really simple protocol, it gets the job done, it's pretty simple to understand, and this library that I found, it was implemented beautifully. It's like "Here's an interface that maps to the protocol's interface in Go." There's a Go interface for it, so it's very easy to write a client or a server, because the client just basically can talk to that interface; if people wanna implement a server, you implement that interface, if you wanna make a bridge that's a client and a server, it's very easy to do that with this interface... So interfaces are amazing in Go and they aren't used enough.

I'm always frustrated when there isn't an interface, and I wanted to wrap something. I'm like, "Oh, I could fix this if I could wrap it", but if I wrap it, it's a different type, whereas if it was an interface, I could make my own implementation that wraps the existing implementation and changes it, and it would still work with everything.

**Erik St. Martin:** Yeah, I think it's hard too to figure out when the correct time for that is, right? Because you have the other side of it too, where you make everything return an interface, and your interfaces aren't really figured out yet, when you're that early in writing code... And then if you're always moving on to new features, you never really get to go back and recognize where you kind of have very similar patterns that could be abstracted out in the interfaces... Except for your obvious ones; you know, like, you're doing bytes and stuff like that... Like, return an io.writer or reader...

**Jeff Lindsay:** Yeah, and so that's why I wish more interfaces were in the standard library, like the file system interface that the Afero project does. It's basically -- the Go developer is helping you design your interfaces; it's like "Oh, you don't have to think about how you would do io stuff, we've already come up with a really elegant solution. Here you go, just use this."

That's where it's hard... Designing API's is hard; it takes a long time to understand that domain well enough to be able to create the simplest API for it, that is expressive and lets you do everything that you need to do, but is also very simple. Most developers don't have that luxury, unfortunately.

I have a lot of time in the sense that like, if I have enough money, I can spend a lot of time on something, but even then I'm like "It's taking me a long time..." It takes a long time to get good API designs. Maybe stuff like the Go Commons project is a great place that we can experiment, that current conversation about the loggers... Maybe not that one specifically, but that's a great place to start talking about interfaces -- not even implementations, but just interfaces for things.

**Brian Ketelsen:** \[00:56:12.13\] Yeah, that was one of my most exciting things about the Go Commons idea, which was everything should start with an interface, and the implementation should be second. Everything should have an interface.

**Jeff Lindsay:** Yes... Yeah, that'll be exciting. Standard com is kind of like that, and I'm developing a lot of interfaces for the hooks. The neat thing about the components in com is because -- so I have this kind of hypothesis when you're writing reusable software that, you know, your ideal is that it's simple, both in API, but also implementation... It should just be as simple as it can be, and composable - kind of the UNIX philosophy, right?

If you introduce hooks and extensions, whether it's callbacks or whatever, you're able to allow it to express a lot more things and let it do more things than if it didn't have those. So that actually reduces the amount of code that you need, because a lot of times you can say "Oh well, this is relatively common, but not common enough that we actually put it in the library... But we'll put hooks in there and maybe someone else will write an implementation." So it lets you decouple things a lot more, and the end result are simpler components, simpler pieces of code, which then you can say "Okay, if this doesn't meet my needs, I can reimplement it because it's not that complicated, and I can use the same interfaces and everything will work with it exactly the same", assuming the same guarantee of semantics, but... And that's really cool and powerful.

So I don't know, this is part theory, but I've been really enjoying building applications in this paradigm, and it's all thanks to interfaces.

**Brian Ketelsen:** Yeah, interfaces are like the be-all-end-all of Go, for sure. Well, I think we've talked so much that we are pushing our luck in terms of recording time today, so we probably need to move on to \#FreeSoftwareFriday and skip the news this week, because I've know we've got a hard recording stop in just a few minutes here. So, does anybody wanna start off the \#FreeSoftwareFriday bits?

**Erik St. Martin:** I'll kick mine off...

**Brian Ketelsen:** Alright.

**Erik St. Martin:** So I didn't do a lot of development this week. Well, a little bit... So I've been in New York City at this Open Hack thing that Microsoft's been hosting, which is like a cool little hacking challenge conference, and I'll write up something, a little bit more about that, but it's been super fun. As part of the thing, we had to deploy a Kubernetes cluster with metrics and stuff, and the Prometheus operator by CoreOS is badass... It's the first time I've used it, because all the Kubernetes clusters I've set up and administered was prior to this. But the pattern is really awesome, because it actually uses custom resource definitions, and I kind of hinted at this in our conversation about building abstractions using the operator pattern...

So literally, to get our service monitored by [Prometheus](https://prometheus.io/) in our [Grafana](https://grafana.com/) graphs sidecar process that scraped this stuff over a custom protocol, use the Go library, which automatically gives you an HTTP listener for Prometheus with a slash metrics endpoints to expose the gauges... So boom, that part's done. And then in order to get Prometheus to find it, it was just a -- because they use CRD's, they have a custom Kubernetes resource called the Service Monitor, where basically I told it to label to look for my custom service, and it automatically knew how to find all instances of that service and to scrape its metrics. That was it.

\[01:00:18.27\] That's so useful, not having to custom-configure Prometheus every time you launch a new app, and then reload the configuration for Prometheus, and stuff... I just thought that was really cool.

**Brian Ketelsen:** That's impressive.

**Jeff Lindsay:** It's the future, I love it.

**Erik St. Martin:** It's ridiculously cool.

**Brian Ketelsen:** You know, when I was a kid, we used to have to write our own Kubernetes configurations for everything...

**Erik St. Martin:** Yeah, that was exactly my thought; I was like, "Wait, whaaat?"

**Brian Ketelsen:** In the YAML, with no parser. Uphill both ways. Alright, well I'll go next for \#FreeSoftwareFriday. This is kind of cheesy, so you'll have to forgive me, but I wanna call out Progrium Envy on GitHub, because it inspired me to do a million things that I never would have thought of. I'll throw it in the show notes, it's [GitHub.com/progrium/envy](https://github.com/progrium/envy), and I didn't even know how to describe it beyond a way to give yourself HTTP exposed and SSH exposed development environments that are backed by Docker and nested in a tree-type structure, so you can have file systems that are shared by some of your environments and inherited by others and separate from others... I had so much fun with that whole thing, and it inspired me to do a million other projects that were very similar, so thank you for opening my mind on that one, Jeff.

**Jeff Lindsay:** Wow, yeah. That's really cool.

**Carlisia Pinto:** Okay, I guess it's my turn. I am going to give a shoutout to the [Google Working Group GreaterCommons](https://greatercommons.com/cwg)... It is a really long-winded name, but it's a selection of courses about Go, and they are free, and I guess they are curated by Google or done by Google, I'm not clear on that yet.

**Jeff Lindsay:** That's awesome.

**Carlisia Pinto:** Yeah, it's a great resource because it's free and supposedly curated... So I'm looking forward to seeing people using this and see what feedback we get, and getting more courses in there. I know Todd - I cannot pronounce his last name... Somebody help me. You know [Todd](https://twitter.com/Todd_McLeod), we interviewed him...

**Erik St. Martin:** McLeod?

**Carlisia Pinto:** Yes. I know some of the courses are his, and he has such good feedback on his courses; everybody loves his courses. So definitely, if you're looking to learn Go, you should check it out.

**Brian Ketelsen:** Awesome. Todd's got so much energy... He's fun to watch.

**Carlisia Pinto:** Yeah, he's a good person.

**Brian Ketelsen:** Jeff, is there any open source project you wanted to give a shoutout to, or a person, or...?

**Jeff Lindsay:** I've been trying to figure this out for a long time, since I saw the notes... I was like, "Oh, I'm gonna have to pick one or two..." Like, even just two is hard. I don't know... Just because I touch it so much, most of the stuff that -- I forgot his real name, but spf13. He did Viper, and...

**Erik St. Martin:** [Steve Francia](https://twitter.com/spf13), yeah.

**Brian Ketelsen:** Steve Francia.

**Jeff Lindsay:** Yeah, yeah.

**Brian Ketelsen:** [Viper](https://github.com/spf13/viper), [Cobra](https://github.com/spf13/cobra), and Afero...

**Jeff Lindsay:** Yeah.

**Carlisia Pinto:** And Hugo.

**Brian Ketelsen:** And Hugo, exactly.

**Jeff Lindsay:** Yup.

**Brian Ketelsen:** So speaking of all three or four of those things, I've just merged your PR in Viper, because I'm a maintainer.

**Jeff Lindsay:** \[01:04:03.28\] \[laughs\] Very cool, thank you. Shoutout to you!

**Brian Ketelsen:** "Shoutout to you, for merging my PR!"

**Jeff Lindsay:** That's great. Now my tests won't fail. Open source in action, live!

**Brian Ketelsen:** Yeah, it's not the PR you send, it's who you know.

**Erik St. Martin:** And apparently, podcasts have something to do with it too, because this isn't the first pull request that got merged by people...

**Brian Ketelsen:** Real-time pull requesting right here on GoTime...

**Erik St. Martin:** The way it usually works though is somebody calls out the other person and then they do it live.

**Brian Ketelsen:** Yeah. \[laughs\] That's awesome.

**Jeff Lindsay:** If there are more people in the Slack, that would be a great time to request me to do any -- because I have a bunch of projects that I don't... I just hope... I don't even check up on them, I hope that the people that I've given commit access to are sharing it and there's enough maintainers that they still work. I don't know that that's always the case... \[plane noise\] There's a strange plane outside, but I guess nobody can do that, so I'm safe. None of you have PR's that I need to merge, do you?

**Erik St. Martin:** No, we would have long called you out on that. \[laughter\] "Welcome to the show, Jeff. So, about my PR..."

**Brian Ketelsen:** Didn't we do that once? I swear we did that once...

**Erik St. Martin:** Carlisia did it to Brad Fitzpatrick...

**Brian Ketelsen:** That's right. \[laughter\] You're awesome, Carlisia.

**Carlisia Pinto:** That was fun... I'm a trendsetter, that's how it should always be.

**Brian Ketelsen:** When you get somebody's attention, you've gotta get what you can get, right?

**Carlisia Pinto:** Absolutely.

**Brian Ketelsen:** Thanks for coming on the show, Brad. PR number 62, let's talk about it.

**Carlisia Pinto:** Yeah, efficiency.

**Erik St. Martin:** That's right.

**Jeff Lindsay:** I mean, maybe that's how you find new people to have on the show, people who can just say "Man, I really want this PR merged, why don't you have him on your show?"

**Carlisia Pinto:** Yeah, and what are they gonna say, "No"? "Of course, of course I'm gonna merge -- I'll merge it right now... Good or bad." \[laughs\]

**Erik St. Martin:** Then the problem becomes that people start using it in reverse, and they come on your show and then ask you to merge their PR...

**Brian Ketelsen:** Oh, it's a good point.

**Carlisia Pinto:** Well, we can always cut their sound, and... \[laughter\]

**Jeff Lindsay:** When was Brad on the show?

**Erik St. Martin:** A few episodes ago... Maybe ten episodes ago.

**Jeff Lindsay:** I need to check your backlog.

**Brian Ketelsen:** Yeah, it's been a couple of months.

**Jeff Lindsay:** I'll go back and listen to some of those episodes.

**Carlisia Pinto:** \[01:06:57.18\] It was April, Brian. It was way more than a couple months.

**Erik St. Martin:** Yeah, episode 44.

**Brian Ketelsen:** Oh, wow. That's a long time ago.

**Erik St. Martin:** Okay, so maybe it was a little more than ten.

**Jeff Lindsay:** Doesn't it feel good to have all this body of work, that you've accomplished? You forget about some of those episodes... It's like, "Oh, cool..."

**Brian Ketelsen:** We've done some killer shows. We really have a lot of fun, too.

**Erik St. Martin:** Yeah, it's quickly approaching the territory where you'll think about somebody who did something exciting, and like "We should have him on the show!" and you're like, "Oh no, we had them on the show..."

**Brian Ketelsen:** Yeah, we've already done that.

**Carlisia Pinto:** We haven't had repeats yet.

**Erik St. Martin:** We have not.

**Brian Ketelsen:** And there's plenty of time to go before we get there, too. I mean, we're only 62 episodes in and there's a whole lot more than 62 people doing awesome things in Go.

**Jeff Lindsay:** Totally.

**Carlisia Pinto:** True.

**Erik St. Martin:** What's Changelog proper at? They're at like 400 or 300 or something, I don't even know. 273 episodes.

**Brian Ketelsen:** Wow... Squad goals.

**Erik St. Martin:** That's a lifetime. Steve just called out that Scott Mansfield was on twice - once as a guest and once as a host.

**Brian Ketelsen:** That doesn't count.

**Carlisia Pinto:** It doesn't count.

**Brian Ketelsen:** If that counts, then we've all been on more than twice, too. Sorry, Steve. Go home. Go home, Steve, you're drunk.

**Jeff Lindsay:** Wait, are there guest hosts?

**Brian Ketelsen:** Yeah, every once in a while... Since everybody travels, we often get guest hosts. If you wanna be considered for that, just let us know; we always need a stand-in on stand-by. A stand-in on stand-by...

**Erik St. Martin:** Alright, so I think that we have a hard stop in like two or three minutes; I think that the producer pulls the plug then.

**Brian Ketelsen:** Yes. Two and a half minutes.

**Erik St. Martin:** So we should probably wrap this thing up with a bow pretty cleanly. Huge thank you, Jeff, for coming on the show. It's been a blast. Now I have more things to play with, because some of these projects I wasn't even aware existed, I've been that out of touch.

**Jeff Lindsay:** Thank you for having me. I mean, part of it is I don't share a lot of this stuff, so this is a great opportunity for me to talk about some of it.

**Carlisia Pinto:** Thank you, Jeff. It was great.

**Brian Ketelsen:** Thanks, Jeff.

**Erik St. Martin:** Thanks everybody!

**Jeff Lindsay:** See ya!
