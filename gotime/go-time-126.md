**Mat Ryer:** Hello, and welcome to Go Time. I'm Mat Ryer. Today we're talking microservices versus monoliths. My co-host today - it's Jaana B. Dogan. Welcome back, Jaana!

**Jaana Dogan:** Hey, how are you?

**Mat Ryer:** Good, how's it going?

**Jaana Dogan:** Good. Just self-isolating. What about you?

**Mat Ryer:** Same, same. Self-isolating, and practicing -- I've been practicing for a few years now, so I'm really getting good at it.

**Jaana Dogan:** \[laughs\]

**Mat Ryer:** You know, this subject, microservices and monoliths often generates a lot of heat... But not today, not on this show, because Jaana and I have sourced two extremely cordial and polite young me. The first is Matt Heath, from Monzo. Matt is a senior staff engineer at Monzo, which is a bank here in the U.K, where he works on Monzo's microservices platform. Hello, Matt.

**Matt Heath:** Hello! Thanks for having me.

**Mat Ryer:** Thanks for coming, I really appreciate it. Don't worry though, you're not on your own... We're also joined by Tom Wilkie, from Grafana Labs. Tom's one of the Prometheus maintainers, and author of the Cortex and Loki projects. In his spare time he brews beer and tinkers with his 3D printer. Hello, Tom.

**Tom Wilkie:** Hi, Mat. How are you?

**Mat Ryer:** Did you like my sort of local radio intro?

**Tom Wilkie:** It didn't sound scripted at all.

**Mat Ryer:** It's not at all, no. What sort of tinkering do you do on your 3D printer?

**Tom Wilkie:** Well, for your listeners, I can actually switch the camera over and show you right now what's printing...

**Mat Ryer:** Great, yeah. The listeners are gonna be loving this.

**Tom Wilkie:** They're gonna really enjoy the video of "I'm not quite sure what it is yet."

**Mat Ryer:** The video doesn't go out, Tom, so this is just --

**Tom Wilkie:** This is just for me, is it?

**Mat Ryer:** \[00:04:08.07\] Yeah. The video doesn't get broadcast.

**Tom Wilkie:** Okay... I'll put it back to my face then.

**Mat Ryer:** No, don't worry. \[laughter\]

**Tom Wilkie:** I don't know how much you know about 3D printing, but mostly my 3D printer prints more 3D printers.

**Mat Ryer:** That's asking for trouble. I'm sure that's how Terminators started.

**Matt Heath:** That sounds dangerous!

**Mat Ryer:** Yeah... \[laughter\] I've got a 2D printer, and I was looking at it the other day and thinking "You know what - there just aren't enough D's."

**Tom Wilkie:** Yeah...

**Mat Ryer:** I'd love to have a 3D printer, mate.

**Tom Wilkie:** I could print you one.

**Mat Ryer:** \[laughs\] I love the idea. You can just print them. So I know both of our guests, and Jaana does, too... Some people have probably seen you doing the circuits in conferences and online, on videos, and doing talks... But for anyone that hasn't come across you yet, why don't we kick things off and get to know each other? Does anyone have any working from home tips? A lot of us are finding ourselves working at home these days... Has anyone got any tips for it?

**Matt Heath:** I think mine are the fairly simple ones I've heard people say recently... Turn Slack notifications off; like, strongly off. But I can't describe how much more relaxed I feel now there's not a red bubble on my Mac. I can still check in, and I can still do all this stuff, but I'm just a lot more relaxed. I was really surprised by how much of a difference that made.

That and just having a nice place to work. Get a plant, that kind of thing.

**Mat Ryer:** Yeah, that's nice. I actually think you could go a step further. Since we're not gonna have any guests for a while, any of us, just do whatever you want with your furniture. You don't have to follow any of the simple, normal rules, I think.

**Tom Wilkie:** What do you have in mind?!

**Mat Ryer:** I mean, literally, move the bath into the living room. Imagine that. Just watch telly while having a bath, for example. But where you put your desk, where you work... You could carve out a new little corner... Sometimes you have to get creative with the space you've got, especially if you're living in the cities.

You're not gonna have any guests for a while, so turn yourself around, if that helps. I don't know if that helps, but...

**Tom Wilkie:** Face the wall.

**Mat Ryer:** Yeah, maybe. But you can just do what you want, can't you? You're kind of free.

**Matt Heath:** I mean, there's not much happening outside the windows these days, so...

**Mat Ryer:** Yeah, that's true. So Tom, do you have a working from home tip?

**Tom Wilkie:** I do, yeah, but it doesn't work anymore.

**Mat Ryer:** Oh, really?

**Tom Wilkie:** Yeah, so I've been working from home for 3-4 years now, and the trick was making it look like you weren't at home. Otherwise you took the password deliveries for the entire street.

**Mat Ryer:** Oh... \[laughs\]

**Tom Wilkie:** But now everyone's at home, it doesn't work.

**Mat Ryer:** Well, you don't need also that service anyway, because everyone's in. They can just get their own passwords, too.

**Tom Wilkie:** Exactly. That's what I mean. I'm glad you understood that.

**Mat Ryer:** \[laughs\] Okay, great. So microservices versus monoliths then... Let's get into that. For anyone that doesn't know what these two things are, does anyone wanna give a broad overview, in highlight of what we're talking about here?

**Matt Heath:** Yeah, I can give a brief intro. I'm sure you can all correct me... The way I say it is a long time ago, when I started writing software, I'd write fairly straightforward applications, and I've have one application, one codebase, and I'd deploy it in one go. And that was really quite nice and simple, and you have one component. And that has lots of pros and lots of cons.

And in my experience, as the applications got larger and larger, sometimes you want to break those things into smaller components. You can do that through classes, or various other approaches, depending on the language. Modules, obviously, in Go. And then I think the real difference is if you want to deploy them independently. That's certainly the approach that I've seen quite a lot, where you have a number of applications that are either relatively simple servers, but you can have many of them, and they all talk to each other through HTTP, or some other mechanism. You might have a small number or you might have a very large number of them, that would depend... \[laughter\]

**Mat Ryer:** \[00:08:21.05\] Yeah, I think size is gonna be a recurring theme on this show, because I have a similar thing to you, Matt - I started off, I would just build little monoliths, really... And in fact, sometimes that's kind of where I start everything, actually. I start with just keeping it really simple, and then at some point you can start to feel some pain, can't you...? And you can see how microservices came to address that. What sort of pain points does it actually help with?

**Tom Wilkie:** I think from a microservice perspective there's really a couple of key things that make it attractive for someone like myself. One is isolation. In the service that we run, it's very useful to isolate the read path and the write path. We run hosted monitoring services, so being able to put the right path, which is super-predictable, which is very steady and stable, and stateful, so pretty critical - being able to put that in one set of components, one set of service (for a lack of a better term), and then put the query path, which can be maybe dynamically scaled, can be a bit more risky, a bit more stateless... Putting that somewhere else allows you to separate out the blast radius of bugs, for instance.

**Jaana Dogan:** Matt, you mentioned several pain points, and I'm seeing there are two different strategies. Some organizations or teams actually try to start thinking about microservices at the design time, whereas other start to introduce them as they see pain points. Do you have any experience in terms of when did you start seeing microservices coming around when you're just bootstrapping a new project?

**Matt Heath:** Yeah, so I think starting with microservices at the beginning of a new project is probably quite a risky strategy... And that's actually what we did at Monzo. Rather than building on monolith, we started by trying to break the problem apart into lots of areas, and building services from that. That meant that we avoided - hopefully - many of the problems that we'd seen at other companies, around scalability, both from the organizational perspective and also the technology. But it means that it's quite hard to do if you're attacking a new problem domain and you don't have a really deep understanding of it. It's quite hard to draw those boundaries.

In comparison, the previous place I worked, which was Halo, we went through a monolith to microservice migration. So we hit loads of the scaling problems, and microservices was an approach to getting out of some of those problems.

**Jaana Dogan:** Yeah, it seems like there are two main concerns - scalability and organization scalability. Those are the two critical times that people start thinking about microservices.

**Matt Heath:** Yeah, I think so. Certainly when I was working on a monolith, the main problems we had were many different teams working on the same codebase, and quite often not even isolated sections of the codebase, but working as a cross-functional team, on an area of the product... And that required you to change lots of different bits, and you kind of ended up changing the same bits as other teams. That really ground our development to a halt in some areas.

**Mat Ryer:** But does microservices solve that, or does it just move that problem somewhere else? Because if you do have a component and you need to add some capability to a dependency, you kind of need to do that anyway, even if it's a microservice or if it's in a monolith. Of course, if it's in a little monolith, then you can get things like type safety... We can describe our boundaries with interfaces and things in Go, for example, and it's very clean... But when we deploy it, or if we build that as a big microservice architecture, does it really solve these problems, or does it just change them?

**Tom Wilkie:** \[00:12:15.23\] I mean, there's a strong argument that changing things in a monolith is actually somewhat easier. It's deployed atomically, you deploy the whole thing at once, so interdepencies between the services are not something you really have to worry about... And you've got kind of control over the whole codebase. At any one point you can kind of atomically snapshot "This is the code at this point in time. This is what I'm gonna deploy."

So there's an argument, especially with small teams and simple development processes, that monoliths will allow you to move quicker. I don't wanna be the one fighting the corner for monoliths - we also run microservices - but I feel like they get a bad rep sometimes.

**Matt Heath:** Yeah, I definitely agree with that. If you have an interface that you want to refactor, it's much easier if you have one codebase, one application, and you can change both the implementation of that interface and also all the places that use it, in one go. And that's much harder to do with microservices. Unless you take very specific approaches, I think that's quite hard to do.

**Mat Ryer:** So you mean roll your own tooling, or some other -- whether it's code generation, or some other mechanism that allows you to solve those kind of common problems; that sort of thing.

**Matt Heath:** Yeah, so I think there's two aspects to it. One, if you have a monolith, you generally have one Git repository, or some repository of code, and all the code is in one place, so it's easy to change. And I've definitely seen lots of places where people use microservices where they have a different repository for every single service. We don't do that at Monzo. We have one gigantic monorepo. And that means that because it's in one repository, we can have a single pull request that does that same kind of change that you would normally do in a monolith, but we can do across 1,600 microservices.

**Mat Ryer:** So the monorepo gives you that anyway.

**Matt Heath:** Yeah.

**Tom Wilkie:** Who had ten minutes before we started talking about monorepos? \[laughter\]

**Matt Heath:** Yeah. It's on the Buzzword bingo, right? \[laughter\] And I think it gives you the type safety aspect as well. So if you're just implementing services with HTTP, you're not gonna get that type safety. But a monolith does give you that, potentially, and you have to put extra effort to get that with a microservice architecture.

**Mat Ryer:** Yeah. Kelsey Hightower was on the show, and his unpopular opinion was actually that he prefers monoliths... And he was talking about -- because Tom, you mentioned it's deployed as a monolith, and he was talking about actually that is another choice you get to make. It is possible to -- you could imagine, even if you've never done it, some simple techniques. You could deploy -- it is the same thing, potentially, getting deployed, but with different parts of it switched on, or whatever... So I suppose you end up doing things like that if you don't wanna incur the cost every time of setting everything up, if this thing is only gonna be used in one context. Things like that.

**Tom Wilkie:** I think the distinction between microservices and monoliths is something that's kind of overblown, to a certain respect. Like, you can definitely take a lot of the deployment aspects you're referring to and apply them to microservices. When we do a production deploy of -- I don't know for a lack of a better term, a macroservice, we tend to update all the microservices to the same Git SHA, so we know they all work together.

But the nice thing about the microservice approach is that in between those big deploys - you know, we maybe do these big deploys once a day, or once every few days - you can tune individual services; you can maybe deploy a bug fix that only touches one service, on a case-by-case basis... Which is flexibility you don't really have with monoliths.

But then just to throw a spanner in the works, you used to be able to do this with Erlang, right? Erlang arguably was a monolithic architecture, but you could easily just hotfix in a single function, right?

**Mat Ryer:** \[00:16:09.25\] Could you? I don't know. Could you do that?

**Tom Wilkie:** You could, yeah. This is when languages were powerful and let you do things like that. \[laughter\]

**Mat Ryer:** Yeah. Well, Ruby lets you call any method you like. If that's power, that's where you wanna go.

**Tom Wilkie:** Ultimate power.

**Mat Ryer:** Yeah. Just as a catch-all method that gets called...

**Tom Wilkie:** Yeah, what's wrong with that...?

**Mat Ryer:** Yeah. So you mentioned tuning, and I think a lot of this as well we think of microservices, because you do have a lot more control over the deployment and the situation that they run in... And even if it's just kind of simple configuration changes, if you have an auth service that's constantly getting hit every time, you might choose to have some of those constantly running, where you might have some profile picture services that don't really get hit that often, and they can spin up and down as needed. So you get to make those sorts of different decisions as well, don't you?

**Tom Wilkie:** I think at the end of the day, if you think about the stream of instructions flowing through the processor - you know, the processor doesn't really know the difference between whether you're running isolated microservices, or one big monolith, right? You know, maybe there's a bit of extra RPC overhead and a few more context switches, but realistically, this is all gonna be one big system that we're thinking about.

So I like to see it more as a spectrum. I know that's a bit of a copout. You could even think of functions as a service as like the ultimate -- like, take every single function and wrap it in its own service and deploy it in an autoscaling fashion, and only run them on-demand... And you can think of that as like one far end of the spectrum.

But I think it's more about the different techniques and workflows that these enable, and even how you can apply some of these techniques to places that kind of seem a big weird.

To give you an example, one of the projects you mentioned at the beginning, Cortex, which is this horizontally-scalable version of Prometheus we've built - so we started off as a set of microservices, like 15-20 microservices. And it's fine, we run on Kubernetes; the marginal cost of another service is trivial. It doesn't matter; it's easy to add more services. But as we saw more and more people try and deploy this thing -- it's an open source project; you can go and download it and deploy it yourself... And it's just about to go 1.0 in fact in a few days' time.

**Mat Ryer:** Oh, congrats.

**Tom Wilkie:** Thank you. It's just a number. \[laughter\] But yeah, as we saw more people use it, we realized actually there's a huge barrier to entry, to have to deploy 15-20 different services to run this thing. So what we ended up doing was compiling all of the different services into a single binary, and having a little way in which they could run in a single process mode, and wire them all together with some internal RPC -- actually, they still just use the gRPC to local host.

And now you can actually -- a single binary, a single process, a single command can run a Cortex node... And it's still horizontally scalable, and it's easy to deploy. And of course, we still run it as a microservice internally, because that gives us the control knobs and the flexibility and the ability to go in and set flags on this, and roll patches out to that, and so on. But I don't think you have to start from a point of view of like "I'm gonna just do microservices" or "I'm gonna just do monoliths." I actually think it's way more nuanced than that.

**Mat Ryer:** And you get the best of both worlds.

**Jaana Dogan:** Isn't this also super-useful for development time \[unintelligible 00:19:19.03\] having trouble just running things locally, or in a staging environment...? So maybe we can provide several ways of deploying things for people who want all the flexibility. They can maybe go and deploy microservices individually...

**Tom Wilkie:** Exactly, yeah.

**Jaana Dogan:** But at least there should be a simple, more like a monolith way of deploying things, at least, for people who don't need that flexibility and simplicity?

**Tom Wilkie:** Yeah, I 100% agree. We call that Airplane Mode. You're flying transatlantic, you don't have a Wi-Fi and you need to run it on your laptop. We call it Airplane Mode.

**Jaana Dogan:** Yeah, that's a cool name.

**Tom Wilkie:** Yeah. It's a shame it's already taken.

**Mat Ryer:** I like it. Well, you like to think different, don't you?

**Tom Wilkie:** Oh... \[laughter\]

**Matt Heath:** \[00:20:04.15\] I think we're definitely seeing that with other projects, as well. Istio, for example - I think version 1.5 is combining the various services into a single deployable binary, and that just makes it much simpler for people who are going to operate that... But they still have the separation of those components.

**Tom Wilkie:** Yeah, and how many builds of Kubernetes are there that deploy as a single process, right? Like K3s is one, minikube... There's just so many where "Oh, we'll just embed it, CD in, and we'll--"

The other thing that occurred to me is like name a successful, widely-deployed open source project that's microservices-oriented. Kubernetes doesn't count.

**Matt Heath:** Yeah, I think that's fair. I think the overhead to deploying those kind of systems is just quite high... So it requires quite a lot of investment into that ecosystem, for you to want to get past that hump to actually benefit from it. And even if you want to them try it out locally-- I mean, this is a problem that we have experienced at Monzo with local development. We have 1,600-and-something services right now; 500-600 of them connect to Cassandra. It turns out a single Cassandra Docker container does not like 500 or 600 binaries connecting to it at the same time. \[laughter\] So that requires you to optimize those things a bit better locally. Yeah, it's not something that's easy to run on a single local machine.

**Mat Ryer:** So 1,600 services... What are some examples of those services?

**Tom Wilkie:** When you say 1,600 services - what are you measuring there?

**Matt Heath:** Yeah, it's actually a lot simpler than people might imagine. One thing that I've noticed is there's a lot of sticker shock... Whereas if you described any complex application being made up of 1,600 classes, people would be like "Oh yeah, of course. That's software."

So they vary quite a lot, but there's generally -- when we say "services", we mean each one of those is an independent Go HTTP server that has a number of functions, handlers that it will respond to. Many of them connect to a database, they will have their own databases when they do... But they range quite a lot in size. I think the difference is we have quite a lot of high-level systems, which you could probably model as a much smaller number of monoliths, but it would still be many monoliths... And within those, we've divided them up quite granularly.

As an example, we've built our own Mastercard processor. So Monzo is both an issuer of cards - many services that make that happen - but also a processor directly connected to the Mastercard network. There will be one service somewhere that probably validates the signature of a CVV3 on a Google or Apple Pay transaction... And that's relatively complicated. So having it as an isolated chunk of code is a useful thing. So I think there's about a hundred or so Mastercard services that make up a Mastercard processor. And then you can repeat that until you get to the number that we're talking about... \[laughs\]

**Tom Wilkie:** Sure, yeah. Are you talking about like a hundred containers, a hundred pods, or like a hundred deployments, a hundred stateful sets?

**Matt Heath:** So in Kubernetes that would be a hundred deployments. Each one of those will be independently scaled with a number of pods, at least three; some will have - probably not in the Mastercard flow, but some will have a hundred plus pods spread across different availability zones. But yeah, so there will be 1,600+ deployments. I think 6,000-7,000 pods, something like that... And yeah, some of them will only have three, because they're really straightforward; some will handle emoji, so they will be less critical... \[laughter\] Or maybe more critical, who knows...? But they vary in that size, and importance, basically.

**Tom Wilkie:** Do you run regionally within Monzo, and would you count the same service in two regions as two different services?

**Matt Heath:** \[00:24:13.29\] So currently we run across three availability zones, and some physical locations, for a variety of reasons. Those would still be -- we treat that as like one deployment. I think as we move into having many Kubernetes clusters, that deployment that many of our engineers will see may translate to many Kubernetes deployments, but we would still see that as one deployment of a service, just running in different geographic regions.

But yeah, the thing that we're trying to do is provide isolation, which we kind of talked about, and the ability to independently tune them, but also reducing the blast radius. As an example, we don't really have one API. If we built many services that broke up our domain logic, we would have just ended up with one huge application that was an API that provided that to our apps, and various other parties. So instead we follow a kind of similar pattern to Netflix, where we have a gateway, a bit like Zuul, and then behind that there's 200 or so APIs. So every path is a different binary, which is a different deployment. So lots of moving parts...

**Mat Ryer:** Yeah. If that was a monolith then, calling a function to say "validate that CVV number" - that is kind of obvious what you would pass into a function, because it would be in the argument, and it's kind of obvious what you'd get back. How do you describe those ins and outs of each service? Do you have a consistent or standard way of doing that by now?

**Matt Heath:** Yeah, I think you need those consistent approaches. If you're going to have a lot of microservices, I think you need a lot of consistency. We use protocol buffers, and that allows us to define an API in very concrete terms for each one of the services... Similar to gRPC allows you to define a service that has many endpoints within that definition, and each one takes a very concrete request and response type.

So you get some type safety... Unfortunately, without extensions to the protocol buffers; it doesn't support the breadth of types that you would get if you had one application... But in many cases we can support that, because we control the whole codebase.

I think one example of that would be a money type. If you're ever using money in an application, please don't use 64-bit integers to store pennies, or cents. \[laughter\] It turns out some numbers can get really big, and some numbers - you need a lot more granularity than two decimal places. So we have an internal money type that's very well tested, and we can pass that across the boundaries by unmarshaling and marshaling.

**Mat Ryer:** Is it like a string then? How have you done it?

**Matt Heath:** We pass it on the wire as a string, so it's passed as a decimal format, but then that's converted into a type.

**Mat Ryer:** Into a special type.

**Matt Heath:** Yeah.

**Break:** \[00:27:22.15\]

**Mat Ryer:** So we talk a lot about teamwork, and microservices helping larger teams... And I suppose the argument goes that essentially you can have teams that are somewhat isolated, and they sort of map neatly to the services that they're providing, and they kind of don't need to worry too much about other parts of the system. They can get to focus in their little boundary. I've heard that said as an argument. Are there teamworking advantages to microservices, or can you get the same thing with monoliths?

**Tom Wilkie:** I think that's really the big advantage of microservices, is the isolation extends all the way down to the development process. My experience tends to be that teams look after sets of microservices, and not just individual services. I always normally find that that set of microservices could easily have just been a micro-monolith, or microlith, or whatever catchy phrase you wanna use for today... But I still think dividing code up along team boundaries - Conway's Law - is super-important. It's both a kind of necessary evil, like you have to do it, otherwise people's productivity is terrible, and it's also kind of like -- it's really detrimental when you actually wanna get cross-service flows in place; when you want to do something that's gonna end up touching tens or hundreds of services, you have to talk to tens or hundreds of people.

**Jaana Dogan:** You mentioned that there's always \[unintelligible 00:29:27.06\] between the team and the services, or like a service group... I'm seeing some common services end up being in a bad spot in terms of lots of people are trying to contribute small fixes and so on, especially in organizations where there's a single monorepo, and it's so easy to just push things... \[laughter\] What do you think about that? Maybe it's not a super-critical thing, but I'm seeing some organizations tend to just enable that culture... Which might be good or might be bothersome.

**Matt Heath:** I think ownership is definitely very important. I think the best way to enforce that is every service needs to have a clearly-defined owner. We use GitHub for code review, which means we can use code owners within the repository... So it means each service can have a defined owner. I think any of the engineers in the company can propose a change, but the code owner has to approve the change. I think that's really important. It gives people the flexibility to fix problems that they experience, rather than the problems being hidden behind this API that they find frustrating. You can see what the problem is, you can potentially fix it... That means people are really happy, because you fix bugs for them.

The flipside of that is you still have the safety and control where people who have the expertise and deep understanding of how those systems work can review and approve the changes, and also make sure that it fits in with the longer-term direction of how that system is going to evolve.

**Jaana Dogan:** I think this might be an advantage of microservices compared to monoliths... Because if there's a monolith, people just are all over the place, because there's no one person who can control the deployment, or has an authority to say no in some cases. You can have the same sort of ownership in a monolith, but I think with microservices you have more authority, because the deployment is really dependent on a particular team, so they can just say no; they don't have to accept the change... Or they have more power not to push things.

**Tom Wilkie:** Right, but that could be super-frustrating, right? When something that's really important to you is not important to them.

**Jaana Dogan:** Yeah, yeah...

**Tom Wilkie:** When they just refuse, like "Oh, that feature doesn't belong here..." I've found in organizations that have adopted microservices sometimes you can get that kind of a bit territorial. "This is my microservices, it's done in my style. It's done with what I think should be the right way of doing it."

\[00:31:58.01\] What I've always found works very well to diffuse that - and it works in open source similarly - you've always gotta have the big hammer of like "I'm just gonna fork your service if you don't wanna do it this way. I'm just gonna run my own."

**Jaana Dogan:** Yeah, completely. I'm seeing lots of people that are also proxying things; that's also a really good way, because you can just slightly tweak the behavior, and then you can fall back to the other service to do the real thing. So yeah, there's all these different cases that microservices actually enable.

**Tom Wilkie:** Yeah. As you said, you can always do code owners in a monolith. The flipside of drive-by commits in microservices is "Oh, I've gotta go and redeploy that. Oh, I've gotta go and test it, and drive it through staging", and so on. So I think we could all agree that microservices mean you've gotta invest a lot more in tooling, a lot more in automation to get rid of some of that toil around the deployment and the CI and the CD and this kind of stuff.

**Matt Heath:** Do you think that differs from a monolith, or do you think at a certain point you just need a lot of tooling when a development team hits a certain size?

**Tom Wilkie:** I mean, it's a fair point. I think in the monolith world it's much easier for an organization to invest in release engineering... Because it's like "I'm going to have a person whose job it is to push out the release every day/week." In microservices, it's like "Okay, now I've got a hundred teams that all need a little bit of release engineering, but none of them quite have enough of a problem to really justify it." But you know, you can make the argument in both directions, for sure. It's not clear-cut.

I would like to change the subject though, because mainly -- so I wanna make one observation... One thing that hopefully we can all agree on is figuring out what's going on in a microservice is much harder.

**Mat Ryer:** Really? Why? In a microservice?

**Tom Wilkie:** In a microservice environment my request is gonna ping between (let's say) hundreds of processes, on hundreds of different machines. Like, figuring out why it's slow.

**Mat Ryer:** Right.

**Tom Wilkie:** Matt, you're smiling, because I think you know exactly where I'm going with this, right?

**Matt Heath:** I'd say yes and no... I think it just depends on the tools that you have. If you have a monolith, then we have pretty good tools, and you can run them on your computer. You can run debuggers... We have a toolset that's evolved, and is quite easy to access. Whereas to get that same level of tooling and insight, you have to deploy a lot of stuff, potentially. And those tools exist now, and I think getting really good metrics and understanding of how things are performing, and then using tracing and various other systems can give you that insight... But it's harder, I think that's fair. And because it is harder, I think it's a trade-off of "Is that the most effective use of our time, or would it be easier if we just had a smaller number of bigger applications?"

I think in my case, my personal experience has been with tracing and relatively simple metrics, if every server has metrics on its request/response times, and the clients that are sending requests to those servers have request/response times instrumentation on your databases and that kind of thing - I think I find it quite easy to pinpoint which service has a problem, and at that point then you're into profiling, and various other problems.

**Tom Wilkie:** But there's a whole class of problems that exist, independent of a single service, right? There's a whole class of problems that extend from the composition of tens or hundreds of services.

**Matt Heath:** And you've put the network between all of them as well, right?

**Jaana Dogan:** Exactly, yeah! Compared to like a function, very fundamentally speaking -- I mean, microservices has a lot of layers to go through, and being able to pinpoint a single caller, like a single service plus a call...

**Matt Heath:** Especially as soon as you layer that on top of an orchestration platform, and if you have...

**Jaana Dogan:** Yeah, Kubernetes.

**Matt Heath:** \[00:36:06.14\] ...an overlay network maybe, that's moving things around, if you actually want to trace where a packet has gone, between your function calls essentially, that's quite hard sometimes.

I think the thing that makes that okay is you have a lot of layers of abstraction, and most of the time those abstractions are pretty good... So the majority of cases you don't need to dive too deep into how those abstractions work. That's not to say that we've not had problems where we've had to go really deep on particular network problems. I think we've created our overlay network at one point, and the MTUs were subtly different, and... Yeah, that caused some problems that we weren't expecting, and it took a long time to find what they were. But yeah, having the right tooling I think is essential.

**Jaana Dogan:** Yeah. As a cloud provider, our main job is (I sometimes feel) really navigating all these problems and trying to figure out whose problem it actually is... Because from the customer's perspective, it could be anything. It could be their problem. They sometimes don't know if that's their problem. So all those problems are leaking to us, and we have to have the right tools and the capabilities to be able to navigate the problem, and be able to pinpoint to certain things.

**Mat Ryer:** Yeah. Well, Matt, you mentioned these abstractions... Common services can be little abstractions of their own, and sometimes - in monoliths, or anytime you have common services or common functionality - it doesn't quite serve all of its masters very well, so you end up with a kind of Frankenstein service... How do you fight against things like that happening, and do you have any particular strategies for it? If there's a service that does almost what I want, do you do that thing that Jaana was talking about, where you could potentially proxy? That's almost like a sub-class kind of thing, but - then how do you keep track of where that happened?

**Matt Heath:** I think in general we try and avoid abstraction where we can, because most of the times we've seen a problem and thought that it was some sub-case of a much larger problem. We've actually been wrong, and we've not been able to predict the future... So when we've added those abstractions prematurely, we've just added complexity, and those things have made it harder.

So the trade-off there is effectively efficiency. What I mean by that is -- I was talking to someone from Amazon... You could potentially end up with many teams that have essentially built something that's very similar. And that feels like a really bad trade-off of time... Except what we often don't factor in is the trade-off of talking between all these teams and the communication overhead, and actually trying to build one universal product that solves all of those use cases... Whereas it actually might be better to just have a couple of similar kind of things, but that are very tuned to that specific case.

So yeah, we have many core services that provide common functionality. Those evolve over time, so we refactor them occasionally and we change some of those models, effectively... But yeah, we try not to prematurely optimize those, because there's quite a high cost to it. We definitely do have some other proxy things we've talked about earlier...

**Jaana Dogan:** I'm also seeing proxying is a good way to sometimes debug things... Like, people just proxy to be able to collect more data over the thing. So that's a legit case, which is a separate topic, but... You know, I just wanted to interrupt the discussion. \[laughter\]

**Tom Wilkie:** That's the whole service \[unintelligible 00:39:44.15\]

**Matt Heath:** Yeah, I've definitely seen that with service messages.

**Jaana Dogan:** Yeah.

**Matt Heath:** We used to use Linkerd, and one of the--

**Tom Wilkie:** Famously...

**Matt Heath:** \[00:39:59.03\] Yeah, and one of the cool things with Linkerd was you could use a dtab as like routing rules that could decide based on certain parameters where your request would go... And a common use of that, which isn't something that we used, was to route very specific requests, say for a particular user, into a proxy, so that you could debug log the stuff between services. I mean, it adds extra hops and complexity, but yeah... From the sounds of it, people used it; it was super-useful.

**Mat Ryer:** That is a cool idea. And you can deploy that service live and get it inside live, can't you? So you struggle to do things like that with monoliths without deploying the whole thing, probably...

**Matt Heath:** Yeah, I think if you're turning on CPU profiling, do you turn it on for a particular code path, or for the whole application? Or you could just turn it on for one application, because it's subdivided so much that you're only affecting a small percentage of your overall application.

**Mat Ryer:** Cool. So Tom, when you think about monitoring, and things like this, does anything change when you have microservices versus monoliths, or do your needs essentially stay the same?

**Tom Wilkie:** No, loads of stuff changes. The simple, first-order stuff is just the sheer volume of moving parts. You've gone from effectively having a single major process per machine, to hundreds. And each one is going to export its own set of metrics. So the sheer volume, just from a metrics perspective.

But we've already talked about the level of complexity you really necessarily need to debug performance issues in large microservices architectures, like tracing. This is necessary. You have to have this.

**Matt Heath:** You say that? We've got a really long way at Monzo, without a good tracing system...

**Tom Wilkie:** I mean, I didn't say you have to have a good one...

**Matt Heath:** We had quite a bad tracing system that I wrote a long time ago...

**Mat Ryer:** \[unintelligible 00:41:51.18\] Was it just you running around? \[laughter\]

**Matt Heath:** \[unintelligible 00:41:53.14\]

**Tom Wilkie:** I mean, most people's tracing systems is grepping a unique identifier through a log, right? ...which actually gets you most of the way there. You don't need fancy visualization, you don't need a lot of things... But that's still tracing, in my opinion at least. And yeah, you've got a long way there, but you still need that. It's the first thing people introduce, in my opinion, and it's -- you know, especially, there's a big difference between latencies, effectively... Like, if your latency class is like a couple hundred milliseconds, then you can get away with a lot of brute force and ignorance... But if you are doing high-volume, if you're doing trading, if you're doing anything where you're expecting to handle a huge amount of small things - you know, low latency applications and so on - tracing is just 100% necessary.

And then, you know, the sheer volume - we've talked about volume as one of the main things, but also you have this extra kind of dimensionality to your data... We've already kind of mentioned Kubernetes, but no one really does microservices without some kind of orchestration system, and that orchestration system has information about the things that are running. So this is, you know, any kind of observability system... Whereas previously, you know, I remember the billing system is on a server called John; I'll just go and look at that server. You don't necessarily know that anymore when you're in a microservices architecture with some kind of orchestrator.

So you have to have a way in your observability stack of incorporating a lot of this metadata and this extra dimensionality. And I think this is why we've seen the rise of systems like Prometheus, because they support this multi-dimensional data, and they support very rich integrations with things like Kubernetes. And I think that's really one of the drivers behind the demise or the lack of popularity around things like Graphite.

**Matt Heath:** Yeah, I think those things have been really essential for us... Both being able to just pump a lot of metrics into a system and then go and introspect it later, and both to use that for investigations later, but also monitoring in real-time... And then - yeah, the tracing mechanism; we use Jaeger now, and for a while we had a system which would use structured logging to propagate a request ID...

\[00:44:12.23\] So you could look at all the log lines across a hundred different servers to just pick that needle out of that haystack and combine them all together. And I think those were the only real ways we could understand those kind of things. But with those tools in place, I think it's quite useful, really beneficial.

One of the questions I was gonna ask, actually - I think one of the things you get for free if you have that approach is... We have many services, and a call graph crosses many of these service boundaries. And each one of these boundaries has all these automated breakpoints effectively that are instrumented. So every call between a service has the perceived time from the caller and the server. So you have all these checkpoints all the way down your call graph, where you can see the performance of different things, which engineers don't need to think about, they just get for free, because the client that we use adds them. How would you do that if you were building a monolith? ...because you'd have to remember to add them, presumably at all these different places. And then that depends on the team, or is there a common approach?

**Mat Ryer:** We're building this, we're building something. I'm building something. We're a tiny team, and I think team size definitely plays a big part in this decision-making process around this subject. So we're a tiny little team; there's just two of us building a thing, and we still have a kind of service abstraction a little bit, because we have a frontend client that through APIs is interacting with the backend.

The way that we've done that - we've used Go interfaces actually to describe our interfaces, and then we've used the reflection tools in the standard library to look at those interfaces and then generate everything we need from that. So we do have an opportunity from that tooling to generate middleware that matches even -- it could be strongly-typed too, because it's generated dynamically from these templates. But I think you'd end up with something like that. Otherwise - yeah, it's a case of just a bit like we do with errors in Go, where you just have to remember to do it every time. You have to do it.

**Tom Wilkie:** I mean, other languages exist, and other languages have more elegant solutions to this...

**Mat Ryer:** What do you mean, "Other languages exist"? Not on this podcast, baby.

**Tom Wilkie:** Aren't I allowed to use the J word here?

**Mat Ryer:** Yes, please. Of course. \[laughter\] Everyone's welcome, Tom; you just won't necessarily be asked back.

**Tom Wilkie:** Are you gonna edit this bit out, aren't you, Mat?

**Mat Ryer:** It gets blipped out automatically if you say that word. \[laughter\]

**Tom Wilkie:** You were railing on Ruby for having an accept all method when you call it on a class, but that pattern is super-useful for building this kind of middleware you're describing. Suddenly, I don't have to run a code generator; I don't have to interface everything out. I can just add a proxy class in, it intercepts all messages and instruments... And this is how people did it in monoliths for a very long time.

**Jaana Dogan:** Austin Clemens has an idea to automatically maybe intercept things for instrumentation purposes... This idea has been around for a long time, but nobody actually did anything, yet, for Go...

**Mat Ryer:** What is it, Jaana?

**Jaana Dogan:** So we wanna be able to just arbitrarily intercept all the function calls in order to collect some data, so we can see all the execution trees, and potentially generate some sort of visualization, or run some analysis to see where are some of the hot paths, and so on... So he was interested in doing some work around this, but there's a lot of other things going on, so this hasn't been a high priority for a while.

**Tom Wilkie:** And you can always do this with profilers, right? Profilers -- you pause a thread, sample a stack, done.

**Jaana Dogan:** Yeah, yeah.

**Tom Wilkie:** So there are techniques to do this. But you could actually argue that the technique of automatically instrumenting RPC boundaries is the newer one.

**Matt Heath:** \[00:48:08.18\] It's a profile. \[laughs\]

**Tom Wilkie:** Yeah, it is.

**Jaana Dogan:** Yeah, yeah.

**Tom Wilkie:** If you were wondering what I was 3D-printing, it's a clamp.

**Mat Ryer:** What's that for, mate? \[unintelligible 00:48:14.17\] It's like a Monzo card.

**Tom Wilkie:** Yeah, because I'm just a big fan of Monzo, Mat...

**Mat Ryer:** Yeah... \[laughter\]

**Tom Wilkie:** But yeah, it's a clamp.

**Matt Heath:** Nice.

**Mat Ryer:** Yeah, but it's a podcast, mate, so you've gotta describe it. What do you mean, a clamp? That's not gonna make any -- imagine someone is listening to this on a podcast.

**Tom Wilkie:** How do you describe a clamp...? It's a thing that you use to clamp things with...

**Mat Ryer:** Fine, but why?

**Matt Heath:** \[unintelligible 00:48:37.05\]

**Tom Wilkie:** Mat, you clearly don't understand 3D printing if you're asking why.

**Mat Ryer:** Okay, fair enough. That's a good point. \[laughs\]

**Break:** \[00:48:47.08\]

**Mat Ryer:** So testing is another area that I think is quite interesting. One of the things that appeals to me with the microservices is this idea that you could really well test it. You could test that service almost every possible input and output. You could test it that much if you so inclined... And because it's so focused, then hopefully you create good tests as well. Are there other things to consider when it comes to testing? Does it get easier or harder, have you found?

**Matt Heath:** A controversial opinion, perhaps - is that testing always useful?

**Mat Ryer:** Right. That's actually a fair question.

**Jaana Dogan:** Oh, yeah.

**Matt Heath:** So it definitely is, I should probably clarify that... And testing an individual service gives you really good insight into how it works and how that chunk of domain logic works. And you can test it to infinity... And that's really good, unless it's actually the boundaries between your services that the problems occur at, which from my experience is usually the case. Testing across those boundaries - that's quite hard. I don't think I've seen a silver bullet there, really.

**Tom Wilkie:** And honestly, how is isolated service testing any different from unit testing?

**Matt Heath:** Yeah, it is just unit testing.

**Tom Wilkie:** Right. So we already know how to test stuff in monoliths. It's called "design your code properly, in well-isolated chunks, and unit-test it." So the nice thing about microservices is it kind of forces you to do that. You can't just call random methods in a microservice, unless they're exposed. So that's a nice thing, but it's just enforced like boundaries, that's all.

**Mat Ryer:** Yeah, you could just do that. You could do that yourself too, even in a monolith, and actually should be. Similarly then, the integration tests, which - they're quite difficult to do in the microservice world, they're also difficult to get right in the monolith, too.

**Tom Wilkie:** Sure. The only argument I'd make in the monolith is actually orchestrating a set of (let's call them) services within a monolith is easier than within microservices, where potentially they live in separate repos, built in separate languages... At least within a monolith you can wire them together in process, potentially.

**Matt Heath:** \[00:52:13.29\] Yeah. I think that integration testing is where a lot of the value lives... And some of the problems that I've seen with the unit testing is if you have well-defined interfaces within your service, that's great. But as soon as you're testing the API part between them, one of the patterns I've seen is where we might stub the API response from another service, and in order to do a test, you actually have to stub many services.

**Tom Wilkie:** Yeah. The entire thing.

**Jaana Dogan:** Mm-hm. So I'm seeing a pattern that lots of service owners are also providing their stubs, or mocks, and so on... Do you follow a similar strategy? How do you deal, if you wanna test some service that depends on another one? Are you just generating those payloads yourself, as a developer on a different team, or are you just taking someone else's mocks, or anything that is already available?

**Matt Heath:** I think in an ideal world teams that own services would provide mocks which other teams could use. I don't think at Monzo we have many examples of that, which means we -- we have request/response types that are defined in protocol buffers, so we can define those, but you have to effectively stub the response yourself... And that gives you some protection, because if the interface changes, it won't compile anymore, but it doesn't give you all the protection we would really want there... And that's where you then have to fall back another level to full-stack integration tests, where you're testing many different permutations of a request, all the way down the stack.

**Jaana Dogan:** It's so complicated, especially given the orchestrators, and so on. I'm seeing a huge trend, people just wanna push things to production, or to Canary; that's like their almost primary testing environment sometimes. That's a bit sad, but that also captures the complexity of the reality, especially when you have Kubernetes, and different deployment problems, as well as replication problems, and that sort of thing. In the end, you just end up having one final test in production, by pushing to Canary.

**Matt Heath:** Yeah, that's the kind of thing that we're looking at now.

**Tom Wilkie:** Yeah. I mean, I would take a country view there... Like, to what extent is monitoring just extended integration testing? If you know -- and you should be running any sufficiently complicated system, you should be injecting kind of artificial load in your system and measure its behavior, right? So why not just call your integration tests "Actually, it's just a staging environment, and we're just gonna pummel it with artificial load, and use the same production alerts, the same monitoring and playbook and everything we use on prod, we're just gonna use it on integration."

**Jaana Dogan:** Yeah, that's true. It's also common to actually mirror the incoming traffic... You know, set up a staging environment or a testing environment and use the same load, with similar payloads... That's also very common.

**Matt Heath:** That's something that we're building at the moment.

**Tom Wilkie:** That's a better quality test than any kind of artificial, contrived integration test.

**Jaana Dogan:** Yeah, definitely.

**Tom Wilkie:** You know, it does, again, come back to that point of "You need better tooling", because the only way that's ever gonna work is continuous deployment, is techniques, config management, ways in which you can ensure your staging environment is incredibly similar to production.

**Matt Heath:** Yeah. Another way is to do it in production, where you have guarantees it won't affect your customer data, or various KPIs that you have.

**Mat Ryer:** You mean test=true? \[laughter\]

**Tom Wilkie:** \[00:55:57.11\] A lot of people will argue for testing in production... And I'm not one of them, but they've got some very good points. If you can arrange a system... You know, I've never been a huge fan of service meshes, but this is one of the things they can do which is really kind of nice... Is partition off a separate area of effectively production, that you can use for testing. That is kind of a nice system.

**Matt Heath:** Yeah, those are the two main areas that we're looking at at the moment... One of them - we ran our last crowdfunding through the same platform, which at face value might sound insane, but it allowed us to use many of the same systems to make things reliable, but it requires to load-test lots of things. So we built a shadow traffic system there, where we can multifamily traffic at our edge, and we can \[unintelligible 00:56:44.28\] that traffic through the production infrastructure, so that we can effectively get the same usage patterns, but just dramatically scaled up. We use that as one kind of load testing system, and we run that periodically.

The other aspect is the service mesh approach that you mentioned, Tom. One of the things that we've added recently is if you're propagating a context all the way through your request, which allows you to pass trace IDs, and various other useful stuff, we can propagate the environment through that as well, and we have mechanisms to make sure they're not modified. But that allows us to mirror production traffic into another environment, or mirror staging traffic into another environment. Those are the things we're looking at at the moment... Not in production yet, but we've got prototypes of those running in our staging environments at the moment, for testing, and isolation between different teams, to be honest, which is a big benefit there.

**Mat Ryer:** That's so cool. Well, actually, it's time for our very regular part of the show... It's time for Unpopular Opinions!

**Jingle**: \[00:58:03.26\] to \[00:58:19.01\]

**Mat Ryer:** So, anybody is free to shout out... Do you happen to have an unpopular opinion? It doesn't have to be tech-related. I think our first one was Julie Qiu saying she likes taxis in New York.

**Tom Wilkie:** What?!

**Mat Ryer:** Yeah, she loves them. Absolutely loves them.

**Tom Wilkie:** It doesn't have to be tech-related? You didn't tell me that...

**Mat Ryer:** Well, if you've got a tech one, then that's alright, mate...

**Tom Wilkie:** \[laughs\]

**Mat Ryer:** Do you have any popular opinions, Tom?

**Tom Wilkie:** Um, no.

**Mat Ryer:** Okay. Well, then do you want to do an unpopular one?

**Tom Wilkie:** I think I'll choose configuration management. I'm gonna say -- obviously, no one loves YAML. That's not an unpopular opinion. But I really despise Helm... And for good reason. I don't wanna belittle the work that the engineers have done, and it's incredibly popular, so clearly onto something... But the level of boilerplate templating and repetition that's been encouraged by Helm is something that really grinds my gears.

We at Grafana Labs - and we've been encouraging anyone who will listen - use something called Jsonnet. Jsonnet is this config language that extends JSON with functions, and comprehensions, and all the jazz. From there, it has this really nice operator that allows you to compose together two dictionaries, like merge together two dictionaries.

So my unpopular opinion is Jsonnet is awesome, and is the future... And I know - and this is a callout to Bartek; I saw your thread on Twitter last weekend... I think Jsonnet is awesome, and we use it for all of our Kubernetes config management through -- it used to be a project called Ksonnet, and now it's Tanka; we use it to distribute all of our alerts, our dashboards, anything... The Prometheus mixin, the Etcd mixin - these are all written in Jsonnet, and I think this is super-powerful.

Yeah, so my unpopular opinion is that Jsonnet rocks, and that we should all use that.

**Mat Ryer:** Great. And we'll put the link to that in the show notes. Mister Heath, do you have an unpopular opinion, mate?

**Matt Heath:** \[01:00:09.06\] Yeah... I think the microservices one is quite unpopular, to be honest... \[laughter\] Judging by the reaction on the internet most of the time... Yeah, I don't wanna -- I don't know, it feels a bit of a cheat to continue the conversation we've had.

**Mat Ryer:** No, not at all.

**Matt Heath:** I think the unpopular part is when people see a number that describes something that you don't have context for. It feels at face value -- like, rather than finding out more information, usually the sticker shock value is the thing that feels quite unpopular.

And I think the part of that that is really "What even is complexity?" - I think it's really easy to look at a system that has many components and see it as being very, very complex... But if you don't actually get exposed to all of the complexity, all of the time, and you only deal with a small subsection of it, and by breaking apart systems into many smaller components, each of which is very simple, I think actually that complexity aspect can kind of go away. Also, just different teams can work on the different aspects of the complexity.

So yeah, that feels quite unpopular, whenever we discuss it. I think the microservices thing works really well for some organizations, but it doesn't work for everybody. It depends on the problem, really.

**Mat Ryer:** That's a great one. I think that it's fine. Yeah, think about beginners with this... Because as we've kind of started, we've sort of said that when you're starting out, or if it's a small project, you don't have necessarily the investment needed to build out the big microservices thing... And that might leave some people in a situation where they only work on small teams, and don't ever get exposed to any of those ways of working. Are there any things that beginners can do to get a bit of exposure to microservices? Or is the answer to that "You have to be on a big team", because that's really when things get hard anyway?

**Matt Heath:** I think a little bit... If you're building a product, then scaling or the need to scale is a problem you only have if the product is successful, right? You only have to scale things if people like your product, and they want to use it. But yeah, the scaling part has lots of challenges. So it depends, really.

We started right from the beginning with microservices, and we based that on prior experience, having worked on those kinds of systems before... And it definitely slowed us down at the beginning. I wouldn't recommend diving straight in on a new project with that kind of approach. So I think there's like a natural transition point where a project/product goes through that bit.

**Mat Ryer:** And it's probably a better way to do it, because it's more obvious when you are feeling the pain that your monolith is not doing what you want it to do, and you're feeling that pain, you're in a much better position to design a solution that's gonna work. If you try and do that in advance, some things I think are obvious, and they seem obvious, but you can't really beat actually building it and living with it and seeing this thing in the wild, to then get a better sense of how it behaves.

**Matt Heath:** Yeah, and understanding the problem space. For example, we have a transaction service that represents what a money transaction looks like... And it's not the accounting concept, it's the visual representation to a customer. We built the core part of that product before we released prepaid cards.

**Mat Ryer:** Oh, wow,

**Matt Heath:** Our first prototype was P2P, like Venmo, or something, and we built a transaction service as a part of that. Now, we've evolved it a bit since, but clearly we made -- I made a load of assumptions five years ago based on very little knowledge of how that might work

**Mat Ryer:** Some of them have stood the test of time, by the sounds of it.

**Matt Heath:** \[01:04:04.19\] I mean, some of them, but not a lot... \[laughter\] Yeah. So I think you learn stuff as you go along, and being able to change stuff rapidly is probably the most important bit.

**Mat Ryer:** Yeah. Jaana, did you actually have an unpopular opinion? I don't know if you've said one in a while.

**Jaana Dogan:** Sure... I actually have an unpopular opinion about microservices. Even if you're working for a small company, it's a microservices environment; even if you have a monolith, you still have some external dependencies... Or it's just like really being -- you're not exposed to a lot of scale-related issues, but just being in a large organization, working on a single service is not quite different than working for a monolith. You're just very focused; that's the main reason microservices exist, as a way to scale the organizational problems. Most of your time is just really isolated and focused on a single service.

And yes, you have some external dependencies, and so on... And at a small company, you're likely to have an external service from a different provider probably, so you can still put some of these practices in your daily routine, like the stuff that we talked about, monitoring and debugging things... Maybe you won't be able to touch all the specs in terms of building this internal tooling that works very consistently, or having some core services, but you can still get a good feeling of what it feels to work in a primarily microservices environment.

I mean, everything is a microservice at the end of the day. When they get bigger, we just split them more.

**Mat Ryer:** That's great.

**Tom Wilkie:** Yeah, and I think that reinforces the idea that even when building a monolith, you should think about how you may separate it out in the future... And that's just good engineering. Build nice interfaces internally, because they might become external interfaces in a month or a year.

**Mat Ryer:** That's great, yeah. Well, this has been awesome. I've learned a lot, and I'm sure our listeners have, too. That's all the time we have today, so thank you very much to--

**Tom Wilkie:** Oh, no...!

**Mat Ryer:** I know. It's sad, isn't it? You'll have to come back and join us another time, Tom. Are you gonna do that?

**Tom Wilkie:** Yeah, am I gonna be invited? \[laughter\]

**Mat Ryer:** Yeah, I don't know...

**Matt Heath:** Only if you 3D-print something again...

**Mat Ryer:** Yeah, not a clamp though...

**Tom Wilkie:** What can I 3D-print next time? Not a clamp... What's wrong with my clamp? My clamp's lovely.

**Mat Ryer:** Something more boring.

**Jaana Dogan:** \[laughs\]

**Mat Ryer:** Yeah, it is lovely. Can we take a picture of it for Twitter?

**Tom Wilkie:** I think "lovely" is the right word to describe this clamp.

**Mat Ryer:** Yeah, let me just do a screenshot...

**Tom Wilkie:** I didn't design it, by the way.

**Mat Ryer:** I just downloaded that. I've got it. Thanks.

**Tom Wilkie:** Yeah, you wouldn't download a clamp, would you? \[laughter\]

**Mat Ryer:** No, I probably wouldn't... Okay, well, as I was saying - Matt Heath, thank you very much, sir, and Tom Wilkie.

**Matt Heath:** Thank you very much.

**Mat Ryer:** If people want to find your videos on the internet, what would they type in? Your name probably, right?

**Matt Heath:** Yeah, I think so. \[laughs\] Although I'm now terrified of what comes up... \[laughs\]

**Mat Ryer:** Well, you should have checked that, mate. You should definitely be checking that. I check that every day. Not really...

**Tom Wilkie:** I can believe that.

**Mat Ryer:** \[laughs\] No, I don't really. Okay, well, that's it. I tried to do a good ending of the show, but instead this happened. See you next time. \[laughter\]

**Tom Wilkie:** Thank you.
