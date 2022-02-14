**Jerod Santo:** Paul you're CTO and co-founder of WSO2, formerly with IBM, lecturer at the University of Oxford... You've got a lot going on, but you're here today to talk to me about Ballerina, which is a new programming language that makes it easy to write microservices that integrate APIs. First of all, welcome to The Changelog.

**Paul Fremantle:** Thank you very much, Jerod. Nice to meet you.

**Jerod Santo:** Nice to meet you, too. Well, let's get to know you a little bit, Paul, and your background, and what brings you to be the CTO and co-founder of WSO2.

**Paul Fremantle:** \[03:56\] I grew up a complete geek. I had a ZX80 as soon it came out, when I was 12; I badgered my parents. My birthday is just near Christmas, and I got them to buy me the computer as a joint birthday, Christmas and all my savings put together.

**Jerod Santo:** Now, do you get double presents around Christmas time because of that, or do you get a lack of presents?

**Paul Fremantle:** I would always try and kind of wangle a big present. I would say "Look, I'm gonna join them together. Give me the best you can."

**Jerod Santo:** I like that angle. It seems to have worked.

**Paul Fremantle:** Yeah, because otherwise you just end up with like a good one for your birthday, and then three weeks later they've got no ideas and they give you a useless one, so... So there we go.

So I kind of grew up as a massive geek, and programming - I guess I've programmed in 20 different languages... And I ended up joining IBM kind of in the '90s, working on internet stuff, and security, firewall, a bit of web design... All sorts of kind of webby things.

And then I joined a group just when dynamic web applications were first coming out, and people needed software... And we created some of the early software to do that, using Java around servlets, long before it was called web server express. And then I got into helping people build web systems... And just at the end of the '90s, beginning of 2000, I came across XML, and I suddenly started getting into distributed computing, and stuff... And integration, and how you connect different systems together. That led into something called service-oriented architecture.

In 2005 I and another guy at IBM were really into SOA and web services and distributed systems, and we were building those at IBM and we realized that actually there was an opportunity to do something in open source, and to set up a company. So we set up WSO2 back in August 2005, so we are as of about two weeks ago officially teenagers; the company is 13 years old, so...

**Jerod Santo:** Congratulations!

**Paul Fremantle:** It's kind of fun... I don't know what a teenage company is like; does it sulk in its bedroom? I don't know.

And then we went from doing XML-based integration to REST and gRPC and event streams, and all sorts of fun stuff... And I guess that's where I am today.

**Jerod Santo:** So you've been in this game for a very long time. Just to give some context, that '05-'06 era - I was coming out of university, so I feel like I've been doing this for a while, but you got me dwarfed... I'm curious what keeps you interested, what makes you wake up in the morning and think "Technology", thinking about programming languages, and services meshes, and microservices? What's the kind of stuff that makes you wanna go to work still?

**Paul Fremantle:** So I think what's really exciting is that pretty much everything is becoming a network-programmable endpoint. You can connect to so many different systems now through APIs, so many different Sass systems... You can build completely massive, powerful applications just by connecting other stuff together, and that kind of ability to program the world kind of really excites me.

I'm also quite big into IoT. I took some time out of WSO2 to finish up my doctorate, and I was really focused on IoT privacy and security, and how to build systems where you can manage your own IoT devices.

\[08:02\] This kind of explosion of endpoints, this explosion of things... And to me, what's exciting then is how easy can you make it to program all that, how easy can you make it to interact and program and do these powerful distributed things. I think that's really kind of fun.

**Jerod Santo:** Let's talk about WSO2 a little bit before we get into Ballerina. You said you're teenagers now... What does the company offer? Is it services, or contract, development? What's the kind of stuff that WSO2 does? I think that will help us understand Ballerina a little more when we start to dive into it.

**Paul Fremantle:** It definitely will, because although it's quite different from what we've done before, it's evolved definitely from our background. WSO2 is a completely open source company; we're a software and development company... We build software products that customers use, and we have around 500 customers in all sorts of walks of life. We have customers like eBay, Fidelity, StubHub, if you're in Europe, we help the tax offices in the U.K. and France and Switzerland, which you may or may not like... Transport for London - it runs all the underground and buses in London, and we helped them build a system that manages all the road works and does real-time alerts to people about traffic throughout London.

So it's fundamentally software products, but we do help those customers as well, so we have some consulting... But most of our revenue comes from selling a subscription to an open source product, so it's very much like Red Hat. The products are really -- we have four main products. The first three go together really clearly; the most popular product is our API management product. This is used by people like StubHub, Bank of New York, Mellon, Proximus... A whole bunch of customers, and they effectively offer remote network accessible APIs to their partners, to other developers, who can then build systems that connect through those APIs. We manage the security, we help build the portal for the developer to find out about it, we do things like policy management and analytics on those APIs.

**Jerod Santo:** Gotcha. I think that does speak a little bit to kind of the circumstances in which Ballerina rose out of, because it sounds like -- I mean, a lot of people who are writing programming languages, of course, they may have capitalistic interests in mind, but of course, they're probably solving problems that they have... Is that the case with Ballerina? It was something that you guys needed, so you decided "Let's build it"? Give us a little bit of background into that.

**Paul Fremantle:** So the next thing that we also do is we help people actually integrate those systems - both internal systems, external systems, APIs, legacy software databases. The way we've traditionally done that is with something called an enterprise service bus; that's a piece of software that you configure with a graphical interface and an XML configuration language, and it helps link together your Salesforce, SAP, Oracle databases, RESTful APIs and XML services and so forth.

\[11:50\] That's the second of our products, and it's the oldest of our products, really. It's a highly successful product; it's used by probably more than 300 out of those 500 customers... But it's definitely a challenge to developers, because although it's got a lot of capabilities, lots of power, it doesn't really fit into the kind of edit, build, deploy, test cycle that developers like to do. So that kind of rapid, agile development cycle doesn't really fit with this kind of enterprise service bus type software.

**Jerod Santo:** Because... Why?

**Paul Fremantle:** It's a set of reasons. Firstly, they're quite big products, so they typically have a slow startup time. Our product is one of the quicker ones, but it still takes about a minute to boot it up. It doesn't fit that well into containers in Docker. We've done a lot of work and we've actually just released some improvements on that front, so we are still -- as well as doing Ballerina, we are still kind of tweaking and improving the ESB product... But that's a challenge.

The fact that it has a graphical interface to design flows, which is backed by an XML syntax -- you know, certain people love graphical interfaces, kind of drag-and-drop, build my flow... But fundamentally, when you're a developer, you're most productive in Visual Studio Code, IntelliJ, Atom, VI, or whatever your favorite editor is. That's what makes you productive, and editing XML in there is not a nice experience. You want a language, you don't want an XML... And just because the XML has a graphical syntax, if you're a developer, it doesn't really fix it.

So there's that, and also just -- there's things like type safety. One of the reasons developers have become really rockstars in the last ten years is because they're so productive and they do all these amazing things, and one of the reasons they do all these amazing things is because you have type checkers, you have all the compilation toolchain, and the unit test toolchain that helps you build a continuous integration pipeline... And then you're really rapid. If someone says "I wanna change this", you can change it and you can be sure that it's robust, because you've got all the tests, you've got all the type safety, all the compilation checks. So those things are really valuable, and they don't really exist in the world of an ESB.

**Jerod Santo:** Well, let me tell you a few things that stuck out to me about Ballerina as we get into the language a little bit, and maybe the genesis story of it, how long you've been working on it, what it is and that kind of stuff... There are a few things, and you mentioned them a little bit. You mentioned that the graphical interface of the XML configurator things aren't that impressive or interesting to developers.

One thing that's very cool about Ballerina is you have textual AND graphical syntaxes, so it's kind of the best of both worlds. I thought that was very interesting. This idea that maybe this is the first, or one of the first cloud-native programming languages -- but a lot of the stuff when you talk about your ESBs in the system, that many of your customers are still using, I would assume the reason why it's not container-friendly and all these things is because, well, this pre-dates these technologies, or at least the proliferation of these technologies.

So sometimes just starting fresh, even though it's tons of work to start fresh, and maybe it's not even a complete fresh start (we'll get into that), it allows for things that are just incredibly cumbersome, with older technologies.

And then lastly, just the ambition. Anytime I see a new programming language, I think "This is an incredibly ambitious project", and that just impresses me. One thing I read just today - you guys have an article on The New Stack, and your CEO and I assume co-founder says that he envisions Ballerina replacing Java over the next decade. That's an incredibly ambitious thing to say and believe.

\[16:19\] So these are a few things that caught my eye about Ballerina... But tell us about the start of this new programming language. You mention why it was needed, but even inside WSO2, was there arguments, was there a big decision? Was there a meeting that had to take place, or were you coding this on the side? How did it get started?

**Paul Fremantle:** I think all your points are really valid, and they're really interesting. I'll come back to the replacing Java... \[laughter\] So Sanjiva, my co-founder, is much more bullish than I am. I'm very English and reserved, and I would never say that.

**Jerod Santo:** Well, I liked that level of ambition, even if it's misplaced. I appreciate that he's thinking it big.

**Paul Fremantle:** No, I think there's a difference between expectations and ambitions. The ambition to do that is one thing. The expectation is another. In other words, having the ambition to say "Actually, we wanna create something that could replace this, that has that capability, that has that power, that has that ability" - I think you need that when you are starting a new language; you have to have a big vision.

**Jerod Santo:** Yeah. Otherwise why go through it all, right?

**Paul Fremantle:** Exactly. On the other hand, to say "I expect it" - that's a different thing.

**Jerod Santo:** Okay, fair enough.

**Paul Fremantle:** I'm more pessimistic than that. But I kind of -- you know, just for a second let's diverge from all the questions you've asked and just talk about... You know, Java, for example, is used in lots of scenarios, but there are increasingly -- it's really ended up as a server-side language. And on the server-side, increasingly people are writing applications that are not just standalone applications that talk to a database; they're all talking to SaaS endpoints, to other APIs, they're writing microservices.

If you fast-forward 5-10 years, you can say "Well, what is Java gonna be used for mainly?" Pretty much all new programs I think will be writing sort of glue logic between network services. So in that sense, if you see where the world is moving and you look at that point, and you say "Well, if we can do that better, and we can create a language that really targets that, then maybe it's not gonna replace all of Java, but maybe those key -- maybe that particular use case you can see that this new language..." There's an opportunity, let's say, for a language to be the one that is used to do that.

**Jerod Santo:** Fair enough.

**Paul Fremantle:** So back to "How did this start?" Well, this started by -- honestly, we wrote this ESB product I talked about... It was in production ten years ago, and over the last ten years we've probably had about 40 meetings where we tried to say "Look, we did this... How can we do it better? How can we make a better ESB configuration model? How can we improve it? How can we write ESB version 2, the next big one?" and in all of those meetings we never really succeeded, because that model, that idea was to still have this configuration language, and every time you have a configuration language, you kind of end up with problems, and this lack of agility.

\[20:16\] About three years ago, Sanjiva, the CEO and co-founder, he just said "Look, why don't we just write a language?" and that was kind of like a massive moment of truth. And the other thing that I think really influenced it, another really interesting aspect of this is he talked about the graphical syntax. The graphical syntax of most ESBs is sort of a flow, it's like a pipeline, with occasionally divergence. But when we actually sat down to build systems with customers, the pictures we ended up drawing the most, the ones we always drew, the mental images we'd have of these distributed systems was always a sequence diagram, where you have the columns, these lines coming down which represent different parts of the system, different entities, and then you draw the lines between them that capture the interactions between them.

So the other real inspiration here was to say "What if we used a sequence diagram as the kind of inspiration for a programming language?" That's kind of a weird thought, but it has real implications for the concurrency model, for how you manage workers and independent parties, how you think about services and endpoints... So that really kind of gave Ballerina kind of an amazing foundation to say, "Well, actually, we have a model for the language that's actually a sequence." That's something you've just mentioned - any Ballerina program, you can say "Show me what the sequence diagram is", and automatically we can draw that sequence diagram of the interactions that are happening between different parties.

**Jerod Santo:** That does sound very cool and innovative. Is there prior art, or is there anybody else that was doing this? One of the things I appreciated about -- maybe it was a blog post, or maybe it was on the Ballerina website, which all these things are linked up in the notes for those curious... It was that all your influences - and I love when people who are creating new technologies aren't doing it in a bubble, and you're thinking "Java, Go, C, C++, Rust, Haskell...", all these languages, which... You kind of have to have a breadth of knowledge in order to write a new language, so I'm curious if that particular aspect, which sounds foundational and very differentiating, of having these diagrams built right in or as a foundational part of the system - has anybody else done that before? Is this a first?

**Paul Fremantle:** The only thing - and it's sort of an oblique aspect - is that there's this website called WebSequenceDiagrams; it's not a programming language, but it's for drawing sequence diagrams... And there's actually some Eclipse plugins and some other tools that do the same thing. There's something called PlantUML that does the same thing, but in open source.

With this website what's really nice is you don't draw the sequence diagram. What people have done for 20 years is pull up Visio or PowerPoint or CorelDRAW or something and physically lay out the lines, and everything. With web sequence diagrams you write a text, you program, you type a little definition of the sequence patent between the different parties, and it draws the diagram for you.

\[24:08\] We sat in meetings doing this, and I think somehow behind the scenes this may have influenced the idea that maybe you could write a programming language on a sequence diagram. It's not the same thing, but I think there's a bit of a leap from one to the other... Or a massive leap; I'm not trying to say it's not a big leap, but... Maybe that inspiration came a bit from that.

**Break:** \[24:43\]

**Jerod Santo:** So a few years back, Sanjiva said "Let's just make a programming language." What happens after that? Because to me, that's where my brain just explodes. When you decide "We're gonna do this", where do you go from there? What's the first step?

**Paul Fremantle:** You know, we have an unusual company, which is that we are now around 500 people, we've taken multiple rounds of venture capital funding, but none for a couple of years now; we're cashflow-positive. So we have very happy customers, who give us repeat business, and we're growing pretty strongly... So as a result, we have some spare capacity. What WSO2 did was just stick a couple of smart people off on the side, prototyping, going through little iterations, "What does this language look like?"

That's a luxury that I guess not many companies have, but it was a nice luxury for us to have. We were small enough to have a very clear focus, but big enough to have the ability to do this kind of work on the side.

**Jerod Santo:** Effectively, like an R&D budget. That would be the equivalent.

**Paul Fremantle:** Yeah. I mean, obviously, we have a kind of more normal R&D budget, which is about improving our existing products and investing in those, and we have a small research team that writes a few papers and does some sort of longer-term research, but this was a sort of -- yeah, it's part of the R&D budget, but a kind of little aside...

**Jerod Santo:** Like a skunkworks, but a bigger play... Like trying to hit a home run.

**Paul Fremantle:** Yeah, exactly.

**Jerod Santo:** So were you one of those people? I mean, CTO - probably not. You've probably got other things to do.

**Paul Fremantle:** I wasn't one of these people, and I regret that. I regret that. But you know, even sort of being a side player on this has been really fun. I don't take a lot of credit for this. I'm just the mouthpiece that gets to talk about it, really... But it's still an exciting initiative, and it's kind of really exciting for me, because I always -- you know, I love programming; I really am not a great programmer, to be honest. I shouldn't be telling you that \[laughter\].

**Jerod Santo:** \[28:16\] Why not?

**Paul Fremantle:** I'm not a great programmer, but I love programming; I just adore it. And I said how annoying that XML syntax and the ESB stuff is - I like hacking on that; I like hacking on XML stuff. And you mentioned earlier that I teach... I teach some courses at Oxford University, and one of the courses I teach is on service-oriented architecture, and of course, as part of that, we do all sorts of things... We use Spring Boot and JAS-RX and all kinds of Java, and Node.js, and Python, HTTP stuff... And we would do an ESB example and show people what that's' like (that's part of the course), and the last couple of times I've run it, I've replaced the old ESB example with a Ballerina example... And a lab exercise that used to take people about two hours and lots of struggling, and kind of like "I don't get this", with Ballerina they just finished it off in between 30 and 40 minutes, and they get it instantly, and they love it. That kind of joy of programming, but doing kind of complex distributed stuff in a really easy way is quite liberating, it's quite kind of enlightening.

**Jerod Santo:** Well, in my mind I stopped at "You're not a great programmer." You just stopped me dead in my tracks; I'm thinking "What makes a great programmer and why aren't you one?" and then I heard you say you like hacking on XML files, and I thought "Okay, maybe he's not such a great programmer." \[laughter\] Just kidding.

**Paul Fremantle:** I love creating stuff, Jerod. I love creating stuff, and anytime I can create something that does something, then that gives me a buzz. It's the best. And if I have to use an XML file or I have to pipe together some UNIX commands into a kind of ugly thing... I've written Perl before; I'm not proud of it, but I've done it... Anything that actually makes something work and does something, to me is an achievement, it's a thing.

So what makes me not a programmer is that buzz I get from making it work the first time.

**Jerod Santo:** Oh, you don't wanna make it better... You don't wanna make it resilient.

**Paul Fremantle:** I don't wanna fix all the bugs, and handle all the error cases, and document it... I wanna move on. So once it works, I'm happy.

**Jerod Santo:** Here's the secret - nobody wants to do that work, but...

**Paul Fremantle:** I know, I know.

**Jerod Santo:** ...somebody has to. The great programmers, they realize "If I don't this, it is only gonna work right now; it's not gonna work later."

**Paul Fremantle:** Do you have kids, Joe?

**Jerod Santo:** I do.

**Paul Fremantle:** Excellent. I once wrote a blog years ago about - it's probably still somewhere on the web - how before my first child was born I was really focused on the birth, getting this kid... And the birth is kind of difficult and tricky and whatever, but it was fine; she was born, she was fine, she was a perfectly healthy baby. And then we got her home, and then I realized that that was the wrong thing to focus on. It was the maintenance of Anna -- not the launch of Anna 1.0, but the maintenance of the project that was the challenge. \[laughs\]

**Jerod Santo:** \[31:56\] Yeah. It's the same way with marriage. So many people focus on their wedding at first... I mean, that's the first thing you do, so of course it's a big focus, but... So much emphasis on the wedding, and the planning, and the cost, and where it's gonna be, and who you're gonna invite, and it has to be perfect, and this and that and the other thing. And then they don't realize that the wedding is not the marriage. The wedding is merely the first day of the marriage.

**Paul Fremantle:** It's day one, exactly.

**Jerod Santo:** The marriage comes after the wedding, and it's way harder and way more important, but... Yeah, we tend to focus on beginnings, that's for sure.

Okay, so let's loop back in, somehow... There's no good segue back to where we were, but we were talking about Ballerina, and we talked about its influences a little bit, we talked about its genesis... You had R&D budget, you had even this skunkworks budget, a couple people working on it to figure out things, like "What's it gonna look like?" Of course, we have this great idea of the graphical diagram-based underpinnings, but what are the language influences? What does it look like? What came out of it? Let's talk about the language, its features, and give me the nitty-gritty of what Ballerina is all about.

**Paul Fremantle:** It looks sort of similar to Java and JavaScript, because it has curly braces, and that sort of thing going on. So it's not too dissimilar to C\#, and so forth. The type system is a little bit more like a functional type system. The type system has what's known as a union type system. I can say "string or xml or error response =", and you now, in a lot of languages you would have to create a wrapping object in order to do that... But in this, you can just say "this could be a string, it could be an xml, or it could be an error."

Actually, that's very reminiscent of what you actually get over the network; sometimes you might be talking to an old XML service, but there's some proxy server or gateway in the way, and when the proxy server sees a failure, then it sends back a text message; when the network has a failure, then you get a local error, and when it all works, you get an XML. So those kind of union types are there.

It's a strongly typed language. Although it has type inference, so you can "var response =" and the compiler will work out that it could be a string, an xml or an error, but it does validate all the types.

The other thing that's really interesting is that null is not a part of -- things like strings and ints cannot be nulls. So there is a null, but you have to say it's a string or a null. So it explicitly makes you handle nulls separately from normal values, and you have to deal with them. So it's deliberately forcing you to firstly say "Well, this could be a null, or it couldn't, and if it can be a null, then..."

**Jerod Santo:** Deal with it.

**Paul Fremantle:** ...deal with it. So in a way, that's encouraging you to say -- you know, most of the time where things are nulls, it's usually not true; it's an error, or it's a value.

**Jerod Santo:** Right.

**Paul Fremantle:** So in other words, it's just as easy to deal with an error as it is to deal with a null, so there's no point in using a null, if you see what I mean... So that's a really nice aspect.

\[35:46\] And the concurrency model is based on communicating workers. This has some similarity to Go and the goroutines. They're based on CSP, which is a mathematical concept. In Go the channels have names; in other words, you have name channels. In Ballerina, the name is implicit, so you have a channel between two workers, and the name between those workers is really implicitly based on the two workers... But it's similar to that, you have these sort of channels between workers for communication.

So those are some of the things that look like other languages, and it has imports, and it has a main function... But then there's some things that don't look anything like other languages. Firstly, a lot of programs don't have a main. They aren't really a "I start up, I do something, and then I exit." A lot of programs these days are providing a service; it just sits there and waits, and then gets called over the network by gRPC, or Kafka, or HTTP, of course...

**Jerod Santo:** Right.

**Paul Fremantle:** So a service is a first-class citizen in Ballerina. A program can have a main or a service. It can just say "I'm not a main, I have a service, and that's what I do - I wait for people to call me."

**Jerod Santo:** And does that service imply a network service? Like, sitting on some sort of port, a TCP service?

**Paul Fremantle:** It does.

**Jerod Santo:** Okay.

**Paul Fremantle:** It does imply some kind of network service... So that's kind of implicit. You've got some kind of endpoint there... An endpoint is another thing that's a first-class citizen of the language. So whenever you talk, whenever you listen for other people to call you, or whether you talk to others, there's an endpoint defined, and that's a key part of the language... Because here's how that's interesting, which is that there's a syntactic difference in the language between when you call an endpoint and when you call a local object.

When you call a local object, like in most languages, you \[38:15\] but when you call a remote endpoint, there's a little arrow, and you say "I want to send a message to this HTTP client endpoint, this HTTP server over there", and I go \[38:34\]

There's two things about this. One is it's giving the programmer a visual difference between distributed local calls, and I think that's -- you know, there has a lot been written about the fallacies of distributed programming, but it comes down to this, that distributed programming is not the same as local programming. So seeing that right there in front of you, "Hey, I'm making a remote call. At this point I have to now be aware of network errors, I have to be aware of load balancing, circuit-breaking discovery", all the kinds of things that happen when you do distributed computing... It's a pretty important thing.

The other thing is that under the covers, we do everything in an async way. One of the challenges with building these network systems is "What do I do while I'm waiting for this web server across the internet to respond? Do I block a thread? Do I sit waiting, or do I do it in an async, non-blocking way?" and every time you use that arrow to call a remote endpoint, we under the covers are doing non-blocking I/O, but you don't have to worry about that in the language.

**Jerod Santo:** \[40:01\] Nice.

**Paul Fremantle:** So if you're writing Node.js, you use callbacks, and I know there's a lot of great libraries in Node.js to make that better, but the fundamental model is quite difficult for developers, to kind of keep track of all these callbacks, and so forth.

I know this from the first time, because I wrote a lot of the code for my PhD thesis in Node, and literally a few months later I went back and looked at it and I was like, "Oh my god, what was I doing?" I mean, it all works fine, but I have no idea how.

**Jerod Santo:** Sure.

**Paul Fremantle:** So this kind of takes care of that. In other languages, the default is to be blocking, and then if you want to do non-blocking async I/O, you have to go find all kinds of clever libraries and packages, and learn a new programming model. In Ballerina, it just happens under the covers, because we've kind of designed this to build network services and talk to network services out of the box.

**Jerod Santo:** That's really cool. I wanna go back to the arrow versus the dot in terms of -- what we call the remote procedure call versus a local procedure call... It seems like a -- as a developer, I don't wanna know the difference. There's this idea of uniform access pattern, so you're kind of violating that... I understand the reasons why; it's like, the distributed world is worse than we hope it would be, and we just want you to be aware of this, but isn't it -- I guess maybe in a perfect world (or in a better world) wouldn't I not have to know? Because like you said, you're going async in the background for me anyways, and I don't have to program in an asynchronous fashion, so... It seems like it'd be nice if there was a language that just papered over that, and yeah, if there are networking problems, it has to deal with it, but I don't have to deal with it. Is that just a pipedream, or...?

**Paul Fremantle:** So we were discussing how long we've been doing this...

**Jerod Santo:** Yeah.

**Paul Fremantle:** We've been talking about making distributed computing seem transparent for 20 years. I remember going to the launch of a system called DCE (Distributed Computing Environment). I still have a mug at home, a beautiful mug that I got given at the launch of DCE... This was maybe -- this was before I joined IBM, so this must have been 1993 or 1992, and they were trying to do that then... And we haven't succeeded yet. So we kind of have come to the conclusion that you just can't paper over it, and it's better to just say "Look, this is local, this is distributed, and be aware of it."

Now, we can make life as easy as possible for you, and we have done a lot of things in the language to help deal with those sort of problems, but I don't think you can solve that. I don't think you can say that these two things are identical and you have uniform access.

**Jerod Santo:** Well, I'll just defer to your experience. \[laughs\]

**Paul Fremantle:** You know, I never say never, but certainly it seems to be more effective to kind of admit that this is a remote part of the call, and this is what we're doing.

**Jerod Santo:** I think that's fair. I think when it comes to readability, going back to code and reading it, I think in that case explicit is better than implicit, and so saying "Yeah, it's an arrow; I know for sure this is going over the network", versus "I don't know, let's go check the method that you're calling and see if it's a service, or see if it's a local thing.

**Paul Fremantle:** Yeah, so go back to that sequence diagram - you have these different parties communicating, and you have this arrow that says "Hey, I'm talking across boundaries between you." So it's very reminiscent -- I mean, I know we draw the sequence diagram from it, but it's also very reminiscent in the text as well of what's going on here.

**Jerod Santo:** Very cool. That makes a lot of sense. Alright, moving forward, what else have you got in terms of unique bits, or design decisions? Something that makes Ballerina stand out from the crowd.

**Paul Fremantle:** \[44:12\] I think that those core things are really important. The other things we've done that are kind of nice, that some of them are unique, some of them are similar -- if you look at things like C\#, they have this thing called LINQ, which is Language Integrated Query... It's basically, instead of using SQL, you sort of jump into -- you have a real program syntax that is reminiscent of SQL, and it allows you to code queries.

So we have the concept of a table in the language; effectively, you say "I have a record structure, and a table as a set of rows of that record structure", and you can query that table. That table can be backed by a real SQL database, or it could just be in memory. That's just like C\#'s stuff, but it's very nice. I'm not saying it's great - it's really cool, and it makes you very productive.

But then something that we've taken and done that I don't think anyone has done in that way is that we have -- one of the things you often do in distributed systems is you start looking at events and you start trying to process those events... And if you're just processing one event at a time, then that's kind of a service. But you start thinking, "Well, actually I want to know what's happening to these events over time..."

A classic example is I'm maybe trying to spot someone trying to break into my system, or trying to build a fake app, or something... And what I see is I see multiple logins from the same IP address, happening within a certain period of time. So now I'm not just looking at individual events, I'm kind of saying "Well, what happened in the last 10 seconds? Did I see that?"

So we've built that concept of a stream right into the language, and the language-integrated query allows you to query across time as well, across those events. So you can really quickly and simply say "If I see the same IP address sending a login request over the next 10 minutes, then we're gonna send an alert out, or disable that IP address."

So that's one aspect I think is really cool. Another one that I think is really important that I haven't really come across is that we're trying to really build security right into the language, in a way that I haven't seen before.

There's two aspects of security and distributed systems that are kind of difficult. One is identity. Most people nowadays have moved to kind of trying to use token-based systems for identity across distributed systems, so things like OAuth tokens are very common. Google, Facebook, GitHub - everyone uses them all the time. But typically, that kind of identity model and the idea that I might say "Well, okay, I've got a request coming in. It's got an identity attached to it" - it's something that's handled through some libraries, or whatever... So we've built that right into the concept... The concept of identity of callers, and we're actually building the identity of the service itself into the language. That's some research we're doing right now around a standard called SPIFFE. We're kind of trying to build the identity of the service itself into the language.

\[48:06\] But then the second thing that's a big problem in distributed systems is basically spoofing, and tainted data, and injection attacks. That's another big challenge, and we've built that kind of concept right into the language, as well. When you receive data over a network socket into Ballerina, we automatically realize that that is potentially tainted, and the taint analysis is part of the compiler and the compiler checks. So effectively, you as a developer - your code won't compile if there's potentially a SQL injection attack here... Because unless you've actually cleaned that data and validated it's not tainted, we won't let you use it somewhere where it's dangerous.

**Jerod Santo:** I'm just over here looking at your "Try the language with Ballerina by Example" on the Philosophy page... Because one thing that I think of with a new language -- you're just demonstrating how much you guys have already accomplished, and you always think "Well, it's brand new, or it's a few years old; surely there's a lot of missing pieces, or there's things that I cannot do", and I'm sure there are things that are missing, but I look at the list of things that are accomplishable, I'm just looking at your security section - like you mentioned, the taint checking, Secured Service with JWT, Basic Auth, OAuth2, you've got Swagger stuff, gRPC... I mean, it goes on and on. Testing built right in... What's not there yet? What's glaringly obvious? What are you trying to get to, or what am I missing here?

**Paul Fremantle:** So before I answer what's not there, I wanna make a really interesting point, which is that effectively, we've spent kind of ten years building middleware, and we have these products, and they're kind of big products... We always were proud that our products were a fraction of the size of Oracle's and IBM's equivalents. So what we would ship in a 200 MB download or a 300 MB download would be what they would ship on a DVD, because it was so big you wouldn't wanna download it.

Effectively, we've kind of built pretty much everything our products do into a language. Effectively, we've taken what was four products, four big products, each a few hundred meg of download, and a lot of complexity and so forth, and put it into just a language. So it's kind of mind-blowing, in a way, and one way of looking at this is to say -- this is a way of sort of saying "Well, you don't need middleware." Middleware is a set of these servers that do stuff. You just need the right language to do things.

So I guess what I'm saying is it's remarkably productive what you can do once you have a compiler and once you've built up a certain level of maturity of the language... And with the right vision, it became quite quick and effective to do a lot of these things you're talking about.

So what's missing? You know, I don't think there's anything really major missing. I mean, there are certainly things that are in our to-do list, and we haven't declared the language 1.0 yet, so it's still morphing.

**Jerod Santo:** Right.

**Paul Fremantle:** The actual runtime is very stable. If you wanna build something today, we're pretty confident that you can build a production system with it today. What we're not confident is that if you build a production system, you find it won't compile the next revision, because we're still tweaking the language a little bit.

So I think we want to get to the point where we think this is really a robust, resilient foundation for the future, and we're not quite there yet. Every time you make a nice tweak and you tidy it up a bit, you think "Well, hey, what if we did that there?"

\[52:12\] The union type system that I was talking about earlier - a really good example of this is when you have JSON and XML built in. Now, you can just think of JSON as being a union of different things. JSON is either a string, or an int, or an array, or another JSON. So we put in this union type system and we're like "Oh, we could rebuild our JSON support just as a union type of other stuff."

**Jerod Santo:** Yeah.

**Paul Fremantle:** So there's definitely things we're doing there. I don't think there's anything really major that's missing. Maybe it's because it's late at night and I've forgot some massive thing that's on our to-do list, that we should be doing... \[laughter\] I should say we're recording this across timezones, so it's early in one timezone and late in another. But no, I don't think there's anything really major missing, but there certainly is a lot of kind of tidying up.

I guess the one thing I would say that is not there yet is the standard library. For example, we haven't got the ability to do complex sorts of strings. We have arrays and records and maps and tuples, but we don't have list objects. So some of the sort of things you'd expect to be in a standard library aren't quite there yet. Now, that's not really the core of the language, but obviously, they do need to be added.

**Jerod Santo:** Yeah.

**Paul Fremantle:** So getting the standard library really up to the spec of the C standard library or the Java standard library is gonna still take a little bit of time.

**Break:** \[54:06\]

**Jerod Santo:** So as you mentioned, Ballerina - not quite a 1.0, but still very feature-complete, very useful, downloadable now, available for Linux, MacOS and Windows... Tell us what it's like using Ballerina building something from scratch. Take us maybe from like, I'm hitting the Download button on Ballerina.io, to I've written a simple service and I've somehow deployed this into a cloud, or into a production environment.

**Paul Fremantle:** Yeah, okay. So the download comes in really four major flavors. There's, as you said, Linux, Mac, Windows, and there's a Zip file. Now, there is one thing that -- you asked me just before the break what's missing... So at the moment, we've built Ballerina in kind of an interesting way; we've built a bytecode specifically for Ballerina, and a bytecode interpreter, the Ballerina virtual machine, that interprets that bytecode.

That's the same way C\# is written, the same way Java is written, and a whole bunch of other languages. Now, that bytecode interpreter is built on top of the JVM, so at the moment, you need to have Java running in order to run it. So you don't see the Java, the Java is not visible and you can't call Java libraries. This is not like Scala, where it's kind of a mixture between Java and a different language. This is really a clean separation, because it's got a different type system, a different threading model, a different worker model, different concurrency, and so forth.

One of our big goals is to completely rewrite that Ballerina virtual machine on top of LLVM. So at that point, this will generate native code. Today it generates what we call a .balx file, which is the Ballerina bytecode.

**Jerod Santo:** Gotcha.

**Paul Fremantle:** But in the future, the LLVM will help you generate native code for your particular Linux, MacOS system. So just explaining that - when you download this, the download includes the JVM; we embed the JVM into that Linux, Mac and Windows distribution. There's also a Zip file which is a bit smaller if you already have a JVM, so you can just download it and run it on top of your existing JVM.

So you download it and you start writing code, and there's a simple command line, Ballerina Build. Our extension is a .bal file, so you then build that; that creates the .balx, and then you do a Ballerina Run and point to the .balx, and that runs it.

So it's kind of a bit like, you know, you have the Java compiler and the Java runtime, or you have a Go compiler... It's very similar to most programming languages. Now, I would recommend, if you are downloading this and trying it out, that you also download a plugin for your favorite IDE.

So we have IntelliJ and Visual Studio Code - those are probably the two best plugins, the most feature-complete. I personally use Visual Studio Code. So that gives you all the kind of tab completion that's going on, and it has syntax checking within it; if you've made a syntax error and there's gonna be a compilation error, then it will tell you in your code editor by underlining it.

\[01:00:04.13\] So from my point of view, if you were gonna try and get started with this, I would download the Ballerina distro and I would install the Visual Studio or IntelliJ plugin. Now, those are both in the respective repositories, so if you start editing a .bal file with Visual Studio Code, it will say "Hey, we have something in the marketplace to help you" and you can go and install it. If you start up IntelliJ and go to Settings, there's a plugin, and then there's a plugin repository on the internet and you can find it there. So you don't have to download anything for that.

**Jerod Santo:** So let's say I've done all that and I'm loving this new little Ballerina service that I've written, and I want to make it a production-deployed thing.

**Paul Fremantle:** Excellent. So let's suppose you wanna deploy into Kubernetes.

**Jerod Santo:** Okay.

**Paul Fremantle:** That's gonna mean you're gonna need to build an image, a Docker file, and you're gonna have to create deployment YAMLs and service YAMLs and all sorts of stuff to say "This is how it deploys, this is the endpoints and the ports it listens on, here's the config files it needs" and so forth. So in Ballerina, what we've done so far for Docker and for Kubernetes - and we're looking at other orchestration systems as well... But let's say Kubernetes...

So let's say you've written an HTTP service. So it's sitting there, it's gonna listen for requests on a network port... So you have - as I said before, and it's hard to visualize this, because we're just talking, but you have an endpoint definition that says "I'm listing on port 8080" and I have a service definition that says what happens when a request comes into that port... So you can actually use some annotations in the language. In your .bal file - you have this one .bal file, you have an annotation in there, and you say "I want this to be a Kubernetes deployment." You give it an image name, you give it a service name, and if you need a config map to parse some config file to that, you put that in there... Now when you type "ballerina build", it doesn't just build the bytecode, it actually creates those deployment YAMLs for you; it creates the Docker file, and it will even push it to registry as part of that build process.

**Jerod Santo:** Nice.

**Paul Fremantle:** And at the end of the compilation step it says if you type "kubectl apply -f" and it gives you the directory, that will deploy this into your Kubernetes... And bingo - you try it out and it does it.

One of the kind of aspects of this is we've really tried to make it the concept of we've clearly defined what maps into a container, how do you build that container, how do you deploy that container right into the language?

**Jerod Santo:** The last thing I'd like to chat about before I let you go, Paul, is the community side of Ballerina. This is a fully open source Apache 2.0 licensed thing; you've recently had a Ballerina Conference (the first one, I believe) and you seem to be really trying hard to build not just a programming language that happens to be open source, but it appears to be one of those fully open sourced things, where it embraces the ecosystem.

Can you tell us about Ballerina's community? Where it is, what you're trying to build there, and kind of the angle that you guys take at -- not just WSO2 building Ballerina, but a group of people building it.

**Paul Fremantle:** \[01:03:56.22\] This is really key to us. We've obviously put some significant effort into creating a language, but we are very keen that this takes on a life of its own and develops that community. As you say, it's all in GitHub; we've got more than a thousand stars already, and hundreds of people forking it. We've got a very active Slack channel. I would say it's a small group getting into this, but there's certainly a real excitement about it that's built since we launched this in May.

And we have the Ballerina Conference, as you say, in San Francisco and online... We had, I think, 150-200 people coming over the web to participate, and a similar number in-person in the room, so that was really exciting... As well as really wanting this contribution to the core language, we've done an awful lot of things to try and create contribution around the language as well, so let me just talk about some of those...

Firstly, one of the things we did from day one with Ballerina was to build a package management solution, like npm or Pip or Maven. The package management is built right into the language, and there's a website, central.ballerina.io, where you can go and -- so when you build a package in Ballerina, you can just type "ballerina push", you sign in with your GitHub or Google ID and you get a name in Ballerina Central... So you can start creating connectors to different systems, new libraries and so forth, and that's a really key part of our aim - to create a whole environment and an ecosystem of "How do you connect to the world?"

Going back to how we started this, the idea that everything is becoming integration, that every program anyone writes is now gonna talk to remote systems - the logical conclusion of that is that there's gonna be billions and trillions of endpoints, there's gonna be hundreds of thousands and millions of different types of endpoints, and the only way to solve that problem, to let you program all those endpoints easily, is to crowdsource this, to have the community, to have an ecosystem of people saying "Hey, I learned how to talk to Twilio from Ballerina. I'm gonna push that in the wrapper, and anyone else can find it and use it." That's a really big aspect.

Another really interesting thing we've done is - you know I explained about those Kubernetes and Docker annotations that build those artifacts as part of compile time... Those are actually done in a completely open way, so anyone can actually extend the compilation using annotations, and can write a plugin that will actually change the way the compilation happens, or create new artifacts out of compilation. That's really cool.

I guess what I'm trying to say is we're really trying to make it open, not just the core language, but the way that you can extend the language, the way that language can fit into this ecosystem of APIs and cloud systems. It's really vital to us that anyone can help extend it as well.

**Jerod Santo:** \[01:07:49.21\] Yeah, just checking Ballerina Central as you talk here, it looks like there's connectors for Twitter, Gmail, Twilio, GitHub... A lot of these are WSO2 packages, but there's also a lot of community packages; Amazon EC2, S3, these are all third-party packages. So people are definitely getting involved... What's the best way for the listeners out there who are interested in Ballerina? Obviously, we have all the links in the show notes, so Ballerina.io, the Downloads page... You can just go read about it. But specifically on the community side, what's your call-to-action on the community? Is it join the Slack channel? Is it come on GitHub issues and participate there? What's the best inroad for people to get involved in Ballerina?

**Paul Fremantle:** I would say the first point is just to join the Slack channel... Because there's channels there for users, as well as people who wanna get into the language design. I think the second one is that if you raise an issue on GitHub, that's always really valuable for us to improve the product, improve the language; that's always brilliant. And then if you're really into this language and you wanna participate in the discussions around the language itself, then there's a Ballerina dev group on Google Groups, which is where all that discussion happens; all the design happens in the open.

The way we do it is we basically create open Google Docs, and we use them to document the specs, and then we have the discussions around those Google Docs in the Ballerina Dev Google Group. So those three things are sort of like incremental stages of involvement. Number one - start chatting to us on Slack, ask questions. Number two - get involved in raising issues on GitHub, and number three is actually join the core development channel and start discussing the language design there.

**Jerod Santo:** Very good. All the links are in the notes, for those interested. Paul, thanks so much for joining us. Hey, any last words before I let you go? I know it's getting late there... Anything you'd like to say as we close the show?

**Paul Fremantle:** No, I think this has been a really useful discussion, it's been really engaging. We certainly will be making announcements; we're gonna do more Ballerina days. We did the one in San Francisco, we did one in Asia, that actually was so over-subscribed we had to run a second day to repeat it...

**Jerod Santo:** Nice.

**Paul Fremantle:** So we're gonna be doing more of those, so keep an eye out on Ballerina.io. And the other thing I guess I'd like to say is that we do run regular webinars from the Ballerina team often with other partners, talking about how we fit into build systems like Codefresh, into observability like Jaeger and Prometheus and Honeycomb, into all sorts of stuff... So come along and sign up to our mailing list and you'll get notifications for all those.

**Jerod Santo:** Very good. Well, this has been a joy, Paul. Thanks so much for joining us.

**Paul Fremantle:** Thank you, Jerod. It's been a great pleasure.
