**Jon Calhoun:** Hello everybody, and welcome to Go Time. Today I am joined with David Hernandez... David, do you wanna say hi?

**David Hernandez:** Yeah, hi!

**Jon Calhoun:** Mat Ryer is also joining us...

**Mat Ryer:** Hello!

**Jon Calhoun:** And Johnny Boursiquot is back.

**Johnny Boursiquot:** I am back. Here is Johnny.

**Mat Ryer:** Welcome back, Johnny.

**Jon Calhoun:** It's been a little while...

**Johnny Boursiquot:** It has.

**Jon Calhoun:** So today Mat gets to join us on the other side, as somebody we're interviewing... So we get to grill him. Are you ready for this, Johnny?

**Johnny Boursiquot:** Oh, yeah...

**Mat Ryer:** It's not meant to be sinister...

**Jon Calhoun:** It definitely is meant to be sinister.

**Mat Ryer:** It's not supposed to sound sinister... \[laughter\]

**David Hernandez:** Don't worry, Mat, I'll back you up a little bit.

**Mat Ryer:** Thanks, mate. Good to know you're here.

**Jon Calhoun:** But David, you sent me the email for all these questions I was supposed to ask... \[laughter\]

**David Hernandez:** Yeah, I'll counter back, okay...

**Jon Calhoun:** Okay, so today we're starting what I think is going to be a somewhat regular series... We're gonna look at Go in production, so we're gonna spotlight the Pace.dev app, which is what Mat and David have been working on... The whole backend is written in Go - am I correct with that?

**Mat Ryer:** Yes.

**David Hernandez:** Yes...

**Jon Calhoun:** Okay, so we're gonna be talking about that, asking them questions about their development process, what architectural patterns work for them, what database they're using... Pretty much anything and everything that might be interesting to our listeners.

So I guess to get started, the first thing I'd like to ask is when you guys started out with zero lines of code and you have nothing, you just have this idea, what is the first thing that you started to do? Or more specifically, what did your first build do?

**David Hernandez:** I don't' remember. Do you want to help, Mat?

**Mat Ryer:** Well, I remember in the very beginning we were very quick to prototype stuff... So whatever is gonna help us get ideas out of our heads the quickest. This is why I used to like Rails, for the same reason. And the Buffalo project is kind of the Rails equivalent for Go.

\[03:58\] What we wanted to do is just try and get some data being transferred. We knew some of the technology we were gonna choose, so we wanted to prove that out and get that working, and that involved building some real things quite quickly... So yeah, I think the first thing was just a simple Go binary that served HTML, and then we worked on -- originally I think it was a Vue frontend that we were serving through that main Go file initially. And then we changed it to Svelte later. But it's the same mechanism where those static assets are served - at dev time at least - through the binary.

**Johnny Boursiquot:** The first question I have for you is -- you've just raised a good point of using your framework to help you get off the ground and do prototyping quickly... But in this case you went a different route. I'm wondering what caused you to not use a framework; why did you go the standard library, bare-bones kind of style?

**Mat Ryer:** Yeah, it's a good question. For me it's really about what we know. We wanted to be productive as quick as possible, so we just picked the things that we were the most familiar with. If I'd used Buffalo enough before, I could easily have started with that and got that going to start to test out the ideas and things... But for us it was just familiarity. We knew Go quite well, and we know the standard library quite well.

Initially, we didn't have very high demands on what the Go side needed to do. It's the business logic and it connects to the data, and it's a set of services, and things... But that's quite easy to do. It's the same whatever you choose, I think, for those sorts of things. So it just kind of made sense for us to start there.

**Jon Calhoun:** You said that you had some technologies that you knew you wanted to use, and I assume this was before you'd built anything... Was this because you thought they'd be a good fit, or was it because it was something you were interested in learning about? Or how did you have those technologies you knew you wanted to use?

**Mat Ryer:** David, we started -- it was App Engine, wasn't it? It was something we decided quite early...

**David Hernandez:** Yeah, we were quite successful with App Engine before; we were using it for a while. It's kind of the original serverless platform, isn't it? So we were quite happy with the results in previous projects. We thought "Oh yeah, why not?" It was the main decision how we were gonna deploy the backend; it was perfect for us before, we didn't have any problems, we didn't have to maintain any servers... They simplified it a little bit last year, or the last couple of years. It's just Go; it used to be like a fork or something like that that they customized and it was a little bit different, with some weird stuff, but now it's just plain Go, that you can run as standalone on App Engine. So it was quite an easy decision for us to make a binary and deploy it in App Engine. 

**Johnny Boursiquot:** I'm picking up a theme here... Obviously, your approach to your architecture, your approach to what tools to use and not use, what framework to use or not use, how to deploy, basically not taking risks on things you weren't' familiar with... In your case it was a very deliberate decision to go with things you already understood, things you knew would work well because of previous experience. It wasn't that another platform or vendor or framework or whatever it is would or would not have made things easier. You went with what you knew. So that was the greater -- that carried more weight than going with whatever the latest hype is. "Hey, this framework will make your life easy" or "This platform will make your life easy." Sometimes going with what you know already to be proven to have worked before is just as good a decision to go in that direction.

**Mat Ryer:** \[08:00\] Yeah, absolutely... And I tell teams this when I talk to different teams as well about when they're choosing their technology - that's a big thing. gRPC for example might be the perfect choice from a purely technical perspective. But if nobody on the team has experience with gRPC, then there's a learning curve there. And some people talk about them in terms of innovation tokens, and things... You're not allowed, they say, to just -- all the technology can't be new and unfamiliar.

You can do some of that, but there's effort and there's kind of a cost to being productive in any of those. And we had that already on the frontend, because we hadn't done much frontend work for a while, and we knew we wanted to use a -- it was gonna be a rich frontend, so we knew it had to be somewhat of a modern framework, or something; some modern take on frontend UI. It couldn't just be -- static HTML we thought wouldn't give us the user experience we'd want to deliver... And even basic jQuery and things - you can quickly get in a difficult state, particularly around things like state in the frontend.

And I've done that before, where I keep the frontend ultra-simple; it'll just be bits of jQuery or something just for the places where I want it to be dynamic, and then the rest of it is dead simple... And ultimately, for me, I want the frontend to be the best it can be. So you're better off, still, writing a rich frontend that can be a little -- you can have a bit more control in the frontend there, and things...

So we knew there'd be learning for us there, so we didn't want to also have learning on the backend. We almost wanted the backend to be a given for us, since we've been writing a lot of Go for a long time.

**Jon Calhoun:** Do you think that's part of the reason when people switch to Go from a language like -- people using Python and Django, or if they're using Ruby on Rails... Do you think that's part of the reason that they struggle, is that if they're not using a framework there's not only the language to learn, but also all the aspects of the framework provided that are -- basically, they're burning up a lot of innovation tokens all at once.

**Mat Ryer:** Yeah, it could be. And similarly, you might decide learning a framework is the best way to spend that, because if that framework is then gonna do exactly what you need it to do, if the framework really fits well with what you're doing and you're not gonna be fighting it, then maybe it makes sense in that case to throw your weight behind the framework, really learn that framework and become good at doing what it does.

But of course, anytime you choose a framework - and this really applies to any time you make a choice about any sort of foundational technology, you are necessarily constrained at the same time as it gives you things that you'd have to build otherwise. Similarly, it makes decisions for you as well. So if control is something that you really care about a lot, that's another argument against using frameworks. You have more control if you've written the thing yourself. And you can focus only on writing the bits you need, as well... Whereas the framework of course is general-purpose. It's built for more users than just you, so there's gonna be a lot in there maybe that you just don't even need. So we didn't have that problem either... We were able to pick the problems that we wanted to go after, and then focus and build only the bits we needed, or that we felt we needed.

**Johnny Boursiquot:** It's always interesting when you talk to teams about decisions made... Obviously, the two of you have worked together before, and you sort of know each other in terms of your propensity to go one way or the other, with this architecture or technology... I'm wondering, initially, in terms of design and how you were approaching solving this problem with this product, were there any strong feelings for one thing over another, that perhaps one of you really felt like you needed to go a particular way? I'm trying to understand if, like all teams, you had some friction between certain decisions, architectural or otherwise.

**David Hernandez:** \[12:15\] Clearly. We have frictions every day, probably... Isn't it, Mat? Every day there's a friction and a battle, "I like this this way, I like this the other way..." But at the end, one of the things that we constantly do is little experiments that you can throw away in a few hours, or a day... Whenever Mat or I do something standalone, because most of the time we are pairing, we try to prove the other one wrong; it's that kind of thing... Like "Oh yeah, Mat told me this probably is not a good idea. I'm gonna prove him wrong", and I just do it and say "Well, look at it. It's working."

**Johnny Boursiquot:** And he's usually wrong, right?

**David Hernandez:** Of course he is. \[laughter\] But I'm also 90% wrong, so it's also good...

**Mat Ryer:** Yeah. It's like argument-driven development.

**David Hernandez:** Yeah, pretty much.

**Mat Ryer:** Yeah, but it does serve a good purpose though. To be honest, when it comes to tech choices, I don't know that there were any of those kinds of frictions actually... But when it comes to things like abstractions, when we can see -- this is something that we talk about all the time... Basically, early abstractions are very dangerous, so we tend to pick each other up when we notice we're reaching for an abstraction and we feel like we're not ready yet. That one definitely happens a few times, where we will instead choose to duplicate it and not build the abstraction first, and see, so we understand the problem a bit more.

**David Hernandez:** A Mat abstraction killer... It's like, Mat told me "Oh, I've found this problem again and again, so we'll do an abstraction." No, Mat. No time for abstractions right now.

**Mat Ryer:** Yeah. Or ever.

**David Hernandez:** The next day he asks again; maybe he has a better chance to do it.

**Jon Calhoun:** Do you have an example of something that you recently went to do, that you decided to copy over?

**Mat Ryer:** It happens quite a lot in the frontend, because we have little bits of functionality that we find repeating again and again. One example is the waiters we have in the frontend. We should focus more on the Go side, I suppose, but let me just tell you this quickly... So you get like a spinner in the browser when something's loading, when some data is loading, and we use an integer to basically count the number of operations that we're waiting for, instead of just a boolean to say whether the spinner should be visible or not. And that way you can actually have, say, three requests going, depending on what the user has done. Maybe they've clicked things in a certain way that encourages three requests to be made... And then that counter can count up to three, and in the `finally` block as these promises are being filled, as these requests are being fulfilled, we then decrease that counter. And that allows us to show the spinner until all the data ready. It's kind of like a WaitGroup in Go, actually.

That feels like there should be an abstraction there; that's something we do again and again and again. But in practice, in code, it's just an integer and then a few places where you're increasing and decreasing things. So it would be more complicated if that was an abstraction, because then imagine looking at that and forgetting what that was, and then trying to go and learn this complicated counting system for things, rather than when you can just see it in the code increases and decreases here.

**David Hernandez:** In the backend it's security. We have a lot of code to check -- well, it's a product management tool, so you have orgs... So we have a check user has permission to write a message or a card in an org. Because the permissions are not very complex yet, we don't have a really clear abstraction for permissions. So every time that we do something that we need to assert what the user is or what is the user's role we just repeat the code to check permissions again. Maybe one day we come to a middleware or something like that that organizes better permissions, so we'll refactor most of the code, but until now we didn't find a better way just to copy and paste the permission check.

**Mat Ryer:** \[16:32\] Yeah, so he's right, there's about ten lines of code almost at the start of every one of our service implementation methods that does the same things... And of course, a couple of times it'll break the rules. If we'd made an abstraction early, then the next time we needed it probably suddenly you could make this request, even if you're not in this organization, for example... Which happens. Things like signing in, and stuff like this.

So yeah, it is kind of the most valuable lesson, I think. And the code feels bloated, doesn't it? When you look at the code and you keep seeing the same things repeated, we get a bit obsessed with wanting to dry that up, and I think that's worth resisting.

**Johnny Boursiquot:** Interesting how that plays into the flat folder hierarchy you've chosen to adopt... Because when you're thinking of abstractions, I think how your file system looks, how you have your folders and your files, and the naming - that also plays a role in how you think of your abstractions. So having a flat folder structure, where you have all your Go files, and the only thing that's really driving where you look for certain representations of concepts within the product is based on the name of the file itself. But what came first - wanting to stay away from abstractions, or basically saying "Hey, we have a flat folder structure, therefore that's gonna impact how I think about my abstractions"?

**Mat Ryer:** It's a great question. I actually think it all comes from that being a little bit allergic to these abstractions... Because we've done what everyone else has done, and junior developers will do, which is we've again and again built abstractions that were wrong, or we tried to structure - we put everything related to comments in a comments folder. And then if you want anything to do with comments, you import that comments package in Go. So that seems completely reasonable. Until then suddenly you need that comments service, you need to be able to send comments from a different part of the system that you didn't think about before... So now there's a new dependency between that and some other package.

And actually, we've in the past just tied ourselves up in knots with this, and have difficulties with pulling out anything common into a different package, so that they can both then import, trying to solve that dependency, and avoid cyclic dependencies, and things like that. And it was quite a headache. And the only benefit you'd get is it looks neat in the file list. So if you can sacrifice that - this is what we do, we have an API folder, and all of our services are just in that one folder. So there's no question now, if we're gonna add a new service, where does it go; it just goes in that same folder with the rest of them.

I think it probably looks quite naive. A junior developer wouldn't do it like this because of how overly simplified it is... And we don't think it's necessarily gonna stay a completely flat structure forever necessarily; we just don't know what that structure should be yet, so we're waiting until that's more obvious before we start to break this thing up.

\[19:46\] It's not true for everything... Some things are just as a concept completely separate. But within our system, especially given the way that different things interact in any sort of sophisticated system, there are no clear lines between services; we just went for something simple and had basically public-facing services and internal services, and that's more or less it.

**David Hernandez:** Yeah, the only time that we ask ourselves if this should be a package is when we think "Oh, is this something that potentially we can make open source and people contribute?" That's why when we start, "Oh, that should be an independent package that we use externally, so we can make it better, potentially release open source and all the people contribute." I think that's the only time that we really try to ask ourselves harder if "Should this be self-contained, or not?" Otherwise, it just goes to that folder.

**Johnny Boursiquot:** So is that what led to Oto and outsourcing that? You saw this pattern emerge, or out of a desire to keep your frontend communication and your backend as simple as possible, you came up with Oto - I'm interested in diving into that a little bit, and understanding what makes Oto different from perhaps traditional approaches, or more complicated approaches, if you're doing sort of full-on RPC-style APIs. Why did you go the simple route with Oto?

**Mat Ryer:** Yeah, that's a good question. The Oto project - the problem we had is we wanted to have the frontend in the browser communicate with the server. Naturally, in my history I've used mainly REST services and JSON services, and things over HTTP. And when we were looking at this, we started with gRPC, we started looking at gRPC as a way to have this communication. We were limited a little bit, because App Engine at the time may still not let you open any ports you want. You have to stick to their rules with the port... And of course, gRPC servers like to open on a separate port, and it's a kind of binary connection; it's a different sort of thing. So we didn't have that, we couldn't do that in our deployment at the time, and maybe still can't today.

And the other thing with gRPC - because we wanted to generate our own code, we wanted to generate our own server stubs and clients for JavaScript and for Go, and other languages, we started to look at how to do that using gRPC, and essentially you have to build these plugin tools which themselves are very complicated, and you sort of have to know gRPC in order to be able to do them, because they dogfood gRPC; they actually take a gRPC message through standard in, that's how the plugin architecture works for the gRPC toolchain... And we just couldn't get it working; it was just too hard, frankly. And all we wanted was to be able to have a kind of RPC back and forth between the client and the server.

**David Hernandez:** Yeah, it was funny, because the protobuffer definition - we were looking at it, and I'm saying to Mat "Oh, this looks a little bit like Go. If you remove some things and put some things, it's just exactly like interfaces, isn't it?" So what about if instead of using protobuffer we just use interfaces for generation of all the code, like the backend, the frontend... And I think Mat did it in like a weekend, or something like that, these kinds of things... He didn't have to prove me wrong; that time I was agreeing with him that could be a good approach... So he did the basic prototype to just generate code from that interface, we put it together, generated some templates, and I think it's a really cool project. We really like it. It kind of growed with us somehow, that project... And it's perfect for us, because it brings the best of both worlds; it gives you a fixed interface, like gRPC does. It's just a definition file, in this case in Go. But also, the code that you generate is really readable, it's really nice, and the templates are very readable.

\[24:07\] And the last thing is the browser is just JSON, so you can debug it with your usual tools, you can see what's coming in, what's coming out... So it's kind of a perfect fit for us, so we are quite happy with that little project.

**Johnny Boursiquot:** So you weren't trying to emulate gRPC, basically. You got some ideas from how it works, and you stole some ideas, some implementation details rather, and you sort of eschewed the whole binary format; you just went with plain JSON... You solved your problem, in a sense, rather than bringing in something because it's cool.

**David Hernandez:** Yeah, stealing from open source is not really stealing, isn't it? It's just kind of Robin Hood wise isn't it?

**Johnny Boursiquot:** \[laughs\]

**Mat Ryer:** Yeah. I was gonna say, the thing about that is the Oto project gives you these templates for you to use, but actually the power is in your writing your own templates. That's actually the key point of it. Because we did do a JSON HTTP implementation, but actually there's no reason why that has to be the only way to do it. You could actually generate protobuf files and go down and have that as well, have that whole toolchain as well. We probably wouldn't want to do that, but there's no limit to what we can create.

Somebody wrote a Rust client template, for example, as part of the open source project. So yeah, it's about - solve just want you want, and also don't tie yourselves in... We didn't tie ourselves into anything. We can still use a binary protocol; we can do different things in dev and in prod, because we just control everything. It just means you have to do everything. But if you can keep the scope small and keep the text simple, that is achievable, and you end up basically with building little vertical slices of just the bits you need, and it gives you the most control. There's no heavy trade-offs that we have to make. We just have to invest in doing the work if we want features that aren't there yet.

**Jon Calhoun:** This seems like a pretty common theme in Go - instead of looking for a library that does all these things, see if you can just build the small version that you need... And I think one area where it comes up is migration tools. If you need something to handle your database migration, if you're coming from Rails or Django or something, it's very common to have all of that built in, every possible variation of it... So were there other aspects of your application where you felt that was the case? Did you have to write custom migration tools, or did you have to do anything else like this, where you built a small tool that people might expect to sort of exist?

**Mat Ryer:** We did for our testing, because the way that we do testing is, again, kind of quite different, as a result of how we've been working for so long. But yeah, so we used the built-in Go tester for unit tests, but we have these integration tests which actually use the generated client that hit our real Oto endpoints... And it's just Go code that reads like normal Go code, because you're just calling these methods. They're RPC methods, but because we use the Go client, they just look like real, strongly-typed methods and things, because they are. So we use that in our test code to make the real calls... And in order to do that, we need to spin up the data store emulator, we need to have the actual app itself running for us to hit against the RPC calls. So we built a little tool that does a few things - it spins up a few services, it worries about the environment, and things... Not too much. The tool itself calls go test with a special flag to then go and run all those tests. So that's one case.

\[28:15\] I think the blog is probably the other one where we chose to roll our own way; you wouldn't expect that, I think, given there are tools like Hugo, which is kind of a static HTML site generator. If you can learn something like that, it's probably a great choice... But again, we wanted the full control, and our use case was relatively simple. So we wrote a blog tool ourselves, as well. It was another one of those that was kind of done in a weekend, or just a few days. We were taking a break from pair dev; one of those little side-projects.

**Break:** \[28:57\]

**Johnny Boursiquot:** I'm interested in diving into this whole testing story as well, because normally I'd be thinking "Okay, I need to containerize all the things, maybe use Docker Compose to get all these services talking to each other... You start to basically add all these layers of complexity to your testing story. Basically, you're doing local development, especially if you have a much larger project, where maybe you have microservices and nanoservices and whatever new service thing we come up with, and you keep adding these layers on to try and replicate production.

In your case, you're talking about "Okay, I have a frontend and I have a backend and I have a data store." Those are your three pieces that you care about. So what does your testing infrastructure look like? Are you running everything on a local host, are you packaging things, are you using Docker, are you containerizing, are you orchestrating? What are you doing?

**David Hernandez:** It's basically everything local. The Go binary, it serves also the static files in local. For the data store we're using Firestore; it's the database from Google Cloud Services. They ship an emulator, so in local, for testing, we can spin up the emulator, run whatever test, and tear the emulator down. It's quite a quick process right now; it's less than a couple of minutes, or less than a minute, I guess. It may grow with time and it becomes a problem, but right now it's not containerized; we just run it in local. Mat runs it on his machine and I run it on mine.

\[31:55\] At some point, at the beginning of the project, we put a continuous integration thing also in G Cloud, but we didn't use it at all. We were just doing it more in local than we tried to do it in continuous integration. Probably with two people you don't have the problem. If the thing grows more, we're probably gonna be back to that situation that we need something in continuous integration... But right now it's just not necessary. Today was the first time that I was deploying in production, and Mat was deploying also in production, and I got an error like "Oh, someone else is deploying." Who else could it be...? \[laughter\]

**Mat Ryer:** You're right though, I think team size means lots of things are easier, actually. Some of the decisions we've taken I don't think you would necessarily take if you were in a larger team, or a bigger company with lots of teams. I think the situation, the structure that you're organization is in - I think that has a lot to say on those kinds of decisions about tech and what you can do... Because those problems get harder with scale, of course; like David said, sometimes if we're just deploying manually, ultimately that gives us the most control, which is good for us, especially with how rapid we are iterating the product now.

And I think yeah, if you had more and more people joining the team, you would have to then formalize those things a little bit. Same for code structure though... In that sort of world it might make sense to invest in that service abstraction and solve some of the common problems, and then everyone can benefit from that. That isn't our situation, so those things would just be kind of technical extravagance, probably...

**Jon Calhoun:** Mm-hm. So you don't need a release manager, is that what you're saying? \[laughter\]

**Mat Ryer:** We don't need a release manager, yeah.

**David Hernandez:** We've had it before. It's not the case that we never had a release manager. We had it before, some time ago... But yeah, different sizes come with different problems; speed is different... That's why people try to put things like microservices; not because microservices are a better technology, but because it's easier to control the size of the thing, or the responsibility, things like that. In this case, everything is easy in that sense, because we are two people... But we became from full-stack developers to full-company developers; we do support, we do marketing, we do accountancy... So it's not only -- the tech stack is quite wide in that sense. You have to worry about a lot more things in this case.

**Mat Ryer:** Yeah, I remember that release manager wanted to do two releases a month, and then be in sync with everyone... And they asked how many times we were releasing, and it was -- that day was something between 10 and 20, or something. It was a very different mindset of rapid -- as soon as it's a bit better than it was, we wanna kind of get it out. And it's a kind of different culture, because I think people have looked at us in the past and thought "A couple of cowboys here. They don't know what they're doing... Just releasing willy-nilly throughout the day, whenever they feel like it." But actually, if you're careful with that, it can be a great way to -- I mean, for squashing bugs and things, the satisfaction of knowing that that bug is gone now, because I've just seen it live gone... And as long as you've got good test coverage, that you feel confident then, you can just deploy very often. I think it's a great way to work.

**Jon Calhoun:** So with that type of release cycle, would you carry that same mindset over to something like Oto?

**Mat Ryer:** That's a funny one, because the thing is, that Oto project hasn't really changed much since we've first put it out there.

**Jon Calhoun:** \[36:01\] Okay. So let's say you're just doing another open source thing that people were importing and depending on in some capacity... Do you think that's something where the overhead of getting new versions is higher, that it would make more sense to slow down the release cycles?

**Mat Ryer:** Yeah, probably. And I think you hit it on the head; I think the point is it's about the audience of that thing. Yeah, if it was an open source project and people were writing to specific versions of it, I think that does change things quite a lot.

You have different promises as well. David and I, we have a monorepo; so we have all of our code for the whole company is in one repository. Again, another thing culturally that sounds kind of shocking to some people. I know that Facebook do it, and I think Google even have this great, big monorepo, although I'm sure they have now lots of other things on top of that, too...

Having a monorepo is nice, because we can make breaking changes ourselves. If we break the API, in the same commit or in the same pull request we can contain the fixes for the frontend... You know, we'll have all the generated code from the Oto definitions; so they get all re-generated, so they're all new... And you basically advance the whole system in one Go, rather than having to then worry about versioning APIs or remaining backwards-compatible, and things like this... Because it all deploys as one, we know that if that backend has gone out and it's updated, the frontend that's being served is also updated, and they're kind of tightly bound in that sense, in a safe way. So yeah, I think there's other benefits to keeping things simple; that's another one.

**Jon Calhoun:** I think it's also important to note that sometimes that simplicity becomes problematic at scale... And the story that comes to mind for me is when I was at Google they had a monorepo; and usually, when you'd submit code, it would only test your local -- things that your code affected is what would get tested. But then once it was submitted - I forget how exactly it worked, but essentially, everything would get tested at that point, to make sure somehow it didn't affect something that they didn't expect it to affect... And all I remember is that at some point, some intern had somehow submitted something that literally broke everybody in the company's builds, so nobody could submit stuff for a short period of time... And I felt bad, because I'm just like -- it was an honest, one-line change from the intern, that somehow probably got forced in... But I can't imagine how many emails he got at that point from people, like "Hey, you're breaking my build. I can't get stuff submitted." And that's the downside to it - you can have some weird results that come from that.

**Mat Ryer:** Yeah, at scale... I mean, that sounds like a nightmare. But I can't imagine that - you're working on something and you push some code and then it's like "Okay, please wait. Building Google Maps..." It's like "What...?!" \[laughter\]

**Jon Calhoun:** The way it worked was kind of... I don't remember the exact -- it's been so long... But all I remember is that it was roughly something where your dev process felt pretty quick, because it didn't wait on all that... But eventually, you kind of get feedback later asynchronously that's like "Oh, by the way, that deploy you did, that build you did is not gonna work. Here's why." And you just kind of got used to that whole process of going and doing something else.

So I think some people -- like, you guys said you weren't using continuous integration, but I think there are some companies that... I'm sure some listeners have been in a company where you deploy a fix, and running all the tests sometimes, especially integration tests, can take so long that it's really not worth sitting there and running them all for every single change... So you run the relevant unit tests, and then you submit it, and you go do something else while your continuous integration tool runs all those tests for you somewhere else. And I think it's kind of that mindset of -- you know, as long as you're okay with that, and you can swap what you're doing, that works well.

**Mat Ryer:** Yeah. Well, we're lucky, because we are sometimes quite irritable easily, so there's no way we would tolerate our tests being slow. We're quite reactionary sometimes, especially when there's emotional things. Sometimes that's what will drive our day; if there's something in the app -- because we dogfood the app, so we're using it to build itself; we use it all the time. And if there's just something that bugs us in it, the discipline needed for us to not just jump on that and go and fix it - we basically don't really have it... Because it's those little things that annoy us, that will annoy other people as well. So it's very important that this software doesn't annoy you and annoy us. So slow tests would be annoying, and we would fix it.

\[40:25\] The other thing is we have some integration tests to pepper throughout the code, but we certainly don't have 100% unit test code coverage, or anything like that... And that's because the code's all being tested through these integration tests. And really, they have to be quick, because that's the same API that the frontend is hitting. So again, because we're dogfooding it, our tests won't ever be slow. And if they do start to get slow, it means also that our app in the frontend is also gonna start getting slow, and then we've got different problems and we may wanna fix them anyway.

So in a way, yeah, it's nice that our testing uses the API, because we'll get that feedback from it; if there are things that are just taking too long, it's gonna be annoying us a lot more than annoying anyone else first, and we'll go and fix it.

**Johnny Boursiquot:** Did you not see value in having full end-to-end testing? So rather than having the layer that the frontend talks to, which is what you're using in your integration testing - was it too complicated to actually have the frontend drive the communication and seeing the whole thing front to back?

**Mat Ryer:** We did look at it... I'm still open to it, but the answer is yeah, it wasn't trivial, it wasn't easy to do, and so it didn't happen. The other thing is with UI testing there are bits that are kind of perfect, they make sense if you take a status and you're gonna turn that into a string or something, or you're gonna describe a list of people - there are things like that that you can unit-test quite nicely. But there isn't really a way to have a test for a good UX. So there's a lot of untestable value and untestable code really in the frontend. That was another thing that was quite interesting to figure out when we started to think about that. Of course, we want to click this button and then this should show, and then we're gonna click this button; those kinds of flows would be testable. But we want that to be a nice experience, and that's more importantly, probably, than which actual buttons are being clicked, or anything. It's a harder thing to codify, and may be impossible.

So there's a lot of manual testing in the frontend anyway, but I'm definitely open to -- I've used some before, but not enough to be confident with... But there are tools, headless browsers and things that do a very good job of simulating what real users will be doing.

**Johnny Boursiquot:** Along those lines, what is the make-up of your typical functionality, from the time the frontend triggers it, to the number of things happening in the backend? Here's what I mean by that - for example, for a user to be able to accomplish a task, that task may require multiple steps. So from the time the frontend gathers all the information it needs, to actually triggering that in the backend, are you relying on the frontend to say "Well, I'm gonna trigger the first function call, the backend is gonna perform that part, and then a response is gonna come back."

Now, the frontend is still tracking the state of the entire number of steps required to actually consider that one thing the user wants to do to be complete, right? So now the frontend makes another call to trigger the second part of the step, process it with the backend, and then a third, and a fourth, and whatever. Or do you say "You know what - I'm gonna gather everything..." , you put a bunch of logic in the frontend to then issue one call to the backend to do all the things, having gathered all the information. Are you frontend-heavy for logic, or do you put most of your logic on the backend, basically? That's another way you could rephrase that question.

**David Hernandez:** \[44:02\] Interesting question. I'm not sure if I'm answering your question, but we try to imitate in the test what the user will do or click in the frontend. That means that it's gonna do one request, wait for the response, do another request. For example, every time that our test will start, our user registered for using the app creates an org, creates a team, for example. That's the basic three things that it needs to do to be able to operate. And that's something in every single integration test; that's three things you can read in every single integration test. Nothing else, nothing more.

When you need to do another functionality, you do those three things. You create a card, wait for the card that is created, assert that you have a card ID, and do their operations. That's basically how it's saved. It tries to imitate what you usually do in the frontend, but calling the API, the Go client to use the API.

**Mat Ryer:** Yeah, we don't have too much of what you describe, Johnny, where lots of different API calls have to happen for the UI to then be able to continue the story, or whatever. Because our API isn't a public API yet, it's kind of tightly bound to the frontend, so that means we'll put all the data we need for a particular view in the response of one thing. There's one example where you could ask the team service for a team overview, and it will go and do all the work concurrently actually on the server to gather the information it needs.

Hopefully, because of the data store choice, key information will be denormalized, so it's not gonna have to go and look around the data store to gather up the answer. Hopefully, it's just going to one place or a couple of places to get the information, and then stitches it together and returns it all in one go to the frontend, so that the frontend is somewhat less sophisticated, in that it can just take the data and then it applies it essentially to a template, and that's the view experience.

And that's nice, because you can do things like -- you know, it has live updates in there. So we have an event that can happen where all the connected browsers will notice this event, and we do this when something changes in a team... And then all of those browsers can then go and ask for an update and get the latest team overview, and apply the changes, and then the tooling kind of diffs it and you essentially just see live updates happening in front of your eyes... And it's quite a nice flow.

I think if we were building a public API, we probably would have maybe more fine-grained API endpoints, because they'd be more general purpose. Having said that, when I look through them, they are kind of all that already, just by chance, I think. There isn't much magic or complex stuff going on in the server. But when there is that, we try and do it in the server, because we can test it better there; we're more comfortable in Go. We have strong types in Go, and we don't in JavaScript. Things like that.

**David Hernandez:** Mat is trying to say that we are much better Go developers than JavaScript developers, probably... He doesn't recognize. I'm kind of the junior JavaScript developer, and Mat is junior++ maybe... \[laughter\]

**Jon Calhoun:** I'm not sure if you ever get out of that junior category in the JavaScript world... Not unless you dive in full-time.

**Mat Ryer:** yeah.

**Jon Calhoun:** So one of the listeners on Twitter had asked if you guys were using GraphQL, and I assume that that means you're not, because you don't really have a reason if you're returning everything you need already.

**Mat Ryer:** Yeah, I think that's right. GraphQL - one of the nice things is people get to describe the data they need from a data store, and that saves a lot of (I suppose) resources, and certainly bandwidth, and things like this... Although in practice I've never found it to be that useful - again, because I think in a lot of cases we control the frontend and the backend at the same time... And in those situations, you don't always get the benefits of these things. You don't really always see the benefits of the trade-offs you're making. But for us - yeah, it's just the RPC thing.

\[48:26\] I think we do have some handlers as well... We have a handler for the initial index page of the app, but I think in production, because of the way you describe the app, that becomes static content. So App Engine actually distributes that to CDNs, and it gets served properly, statically. So in production, the Go thing is only handling the background Pubsub tasks, and those public-facing API endpoint calls from the browsers.

**Jon Calhoun:** So you've mentioned your database being Firestore; I think that's what you said. And you've mentioned Pubsub for background tasks... So I wanna talk more about those, but can you give a quick overview of what your tech stack is? Because I don't think we've fully just walked over it, briefly...

**Mat Ryer:** Yeah. So we have Svelte in the frontend. Svelte is like Vue and React, in that you build these components; that's how you build the frontend - you import components, and you have events and properties, just like you do in the other ones. The nice thing about Svelte is it's a kind of compile-time build. So it does all of its heavylifting at compile-time, and that leaves you with kind of like how Go works - just a deliverable asset; essentially, a JS file, and everything's wired up inside it. It doesn't maintain a virtual DOM. If you change a variable name in React, other code has to run in the browser to then go and react to that, and let other parts of the system know that. And it Svelte, it wires all that stuff up at compile time. So you don't get that runtime, which is kind of cool.

**David Hernandez:** I will say that Svelte is a little bit Go. We choose it because it reminds us -- it has a lot of Go in it, isn't it?

**Mat Ryer:** Yeah. Minimalist, it's deliberately cut down on the features, it doesn't try and do everything... But that means you can kind of learn the whole of Svelte quite quickly, and then that's everything you need to know then about a system. So there's big benefits in that too, because obviously the learning curve is shorter, which was important for us.

So Svelte - yeah. And that's running in the frontend. We do have a UIkit CSS framework as well, that we've then added our own CSS onto, and we use SCSS for the compile-time, so we can use variables, and things... That all gets then built into static folders. That's then described in our App Engine configuration file, and we also mirror the same kinds of endpoints in the binary... So like I said, serving the static files. We use a file server inside Go for Dev to do that. But it's just the same; it's just like hitting a certain path and it works. Then when it gets deployed, App Engine treats the static assets differently. And then we just using routing essentially in a dispatch configuration file to tell it which paths go where.

So you say "This folder is all just static, so serve it statically, but these endpoints are gonna hit our Go service", and there we have our Go server running on that port, waiting for those requests, and it just responds to the requests. It goes through that Oto thing, so the translation between JSON and back is done.

In our implementations we're dealing with strongly-typed generated code, so we can return errors, we have a response object that we can set the fields on and return it... It's very familiar and very easy code to write and to maintain.

\[52:10\] And then as the Pubsub thing inside App Engine - if you make a comment on something, we save that comment immediately, and then we reply and say "Okay, it's done. Carry on." So that makes the UI very snappy. But there's work to do after the fact. So if there's five people in this conversation, we're gonna go and let those five people know that there's a new comment. We don't want to do that and make these wait while we're doing that, so then we use Pubsub to kick that off into a background task. The background task can then kind of take as long as it wants to go and do the little bits, the notifications in that case. There's other examples where we use Pubsub. And David, isn't that it? That's more or less the entire thing.

**David Hernandez:** Yeah. Database with Firestore, and that's it. We don't have much. We've put some data to BigQuery, to just back up some -- to do some sort of analytics to see how many people are using it, basically... That's it. For now, it's just a pretty simple architecture.

**Break:** \[53:21\]

**Johnny Boursiquot:** So how do you deal with failures? Basically, you have a situation where a user makes a comment. You reflect the comment on the page, so as far as the user is concerned, the application responded very quickly, great UX, and they're on about their business... But now you have an asynchronous operation that is going to come out with a success or a failure; it's gonna usually say "Everything went well, great." But in the case where something doesn't go well, how do you then relay that to the user? How do you then get notified of that error? You can perhaps ask the user to try again, or something like that.

**David Hernandez:** So once the comment in question is ok to the user... it's basically okay to the user; we don't report it back. So if the Pubsub failed for some reason, it has an in-built mechanism to do retries. We check if the error is temporal or retriable. If it's retriable, we try again for a certain number of times, till if it's success or not. If it's not success, we report it back to a stack driver; that is the way that G Cloud has it to report errors. So myself and Mat get an email that "Oh, a new error came up. Can you please have a look?" We probably say "No, we'll have a look later. We have other things to do", but eventually, one of us will pick up the error and see "Oh, what's going on? Is it something permanent that we can fix, we can improve?" And there is a lot of trial and error on that. Sometimes when we are developing "Oh, this is very important. I'm gonna log and report", and when you try it, field users are using it, it fails once, it fails twice, it fails 100 times, it's not a big deal, it's recoverable. "Oh, wait I put that log sentence in the report the first time", so you just remove it, or improve it, or do it as you go. You just continuously improve that process. Basically, that's the flow.

\[56:23\] It's also not very complicated, but it's something that you have to continuously revise, especially -- we released a couple of weeks ago, or even a week ago... We've been using the product for a while ourselves; one thing that we did a few months ago is turn off Slack, turn off any other project management tool, and use Pace - in this case full-time - for building it and for working on it. And we tried it intensively, but we didn't catch all the edge cases; the first day that we tried it, we had some people just "Oh, I do this and it fails." Lots of errors around, you never catch all the cases.

So yeah, it's a matter of strength to do your best, trying to retry if the error is retriable, log it and report it to analyze it after a while, when you have a few samples, and decide that error you should keep it, you should improve it, or you just leave it.

**Mat Ryer:** Yeah, that comment is a great example, because if the delivery -- essentially, there's a notification that gets created for each person in a conversation. If one of those fails to get created - because it's a comment, and there's a conversation - probably someone else is gonna say something after, and that's gonna then be telling everyone about that. So people are gonna be caught up, in that particular case; it's not the end of the world if that particular message fails, and I think having a kind of grown-up view on "When this fails (we just expect everything will, at some point, fail), what's the worst thing that can happen?" And you can design the system with certain properties, and idempotence - or idempotency; that's one I always mention, which is essentially this idea that no matter how many times you run the operation, the end result is the same as if you just ran it once. So that as just a simple idea - if you design a system knowing that... For example, the unique ID for a comment or somebody's interest in a piece of work or a conversation, somebody's interest in that - the ID for that is deterministic; it contains the ID of the target thing that you're talking about, and the user's ID.

And so if the user was to click lots of times, of being like "Interested"/"Not interested" (you can toggle it in the UI), if the user were to click that and we didn't have any sort of debounce protection, that could end up with there being lots of messages in the system (some of them could be lost, and things), but because the result of any one of those working puts the state in the same place as if one of them did... Like, if I switch on interest, and by mistake that generates three messages saying "Mat is interested in this", because that ID is deterministic and it's the same interest, the net result is it may just put the same record three times. That's the worst thing that can happen. Versus if it was just adding to an array or something, you could imagine it could add three times to that array, and that's the non-idempotent.

\[59:43\] Some things when it comes to design - we have a lot of experience of building various systems. David doesn't like me saying things like this, but he worked on a project for the Olympics, which is massive scale... And think about all the messaging that's going on in a system that's there to support the Olympics. And you can't say to them the week before "Can we just have a quick pre-Olympics, everyone? I just wanna make sure that this code is gonna work." They said no when he asked... \[laughter\]

So yeah, then you think "Okay, let's assume it's gonna fail. We'll design for that", and you can kind of build systems that are somewhat self-healing. It's really amazing to see these things just -- yes, we see error reports, but by the time we go and look it sort of self-healed, just because of the design of it, which is kind of really interesting, I think.

**Johnny Boursiquot:** This leads into my next question, which is sort of -- you're using a non-relational data store, and that means you can't easily join things and provide the latest and greatest to the user... So did you factor in some sort of eventual consistency model to the data you're returning? To use a common case again - if a user makes a comment, and because you are capturing a name, and picture, and all that stuff, you capture all the different bits, you just store all that (the same object, if you will), then that means that there's a potential there; and if the user does that a number of times, you're copying that data multiple times.

So if the user ever changes their name or their avatar, how do you remediate, how do you resolve that across all the different copies of that data you've made?

**David Hernandez:** It's kind of best-effort. There are some times that you should do it, and some times that you just show it as historic data. If you've been commenting--

**Johnny Boursiquot:** It's not a bug, it's a feature. \[laughs\]

**David Hernandez:** Yeah, exactly. It's like "Oh, this is the story, what you did with your old name. And this is -- you changed your name, it's fine. The newest things. You have it with a new name, a new profile picture", or whatever you used it's new, isn't it. It's kind of an original blockchain if we see it.

**Johnny Boursiquot:** \[laughs\]

**David Hernandez:** That works pretty well sometimes. In that case, probably nobody's going to complain that "Oh, old cards display with all the information about me." It really depends, but in other cases we struggle to issue updates to just "Oh, if you rename..." We have for example tags or labels for categorizing the cards and the message. So if you rename one, it could be ideal that it renames all the tags, even if they're normal. So in that case it's more complex; what you need to do is just instead of try to do it at read time, just issue a background job and try to do it offline, and deal with the eventual inconsistence for the time that it takes the background job to execute; you're gonna have a little time where some of them are changed, some of them not... So you have to accommodate the UX experience to have the best experience of that.

But this is just a trade-off. You sacrifice reading for writing, and you sacrifice writing for reading. So it's not a good solution for everything. You just need to design your application accordingly. You probably do some mistakes in both cases. When you have joins, you have to probably know "I made too many joins. When I thought it was one join, it was the n+1 problem and I joined the whole database to just get one view", and that's exactly the same problem. It's just a question of trade-offs more than anything.

**Mat Ryer:** One of the nice things is we are acting really in the product role and the technical at the same time... And in the past, when I've worked at places where they've separated those functions out - that creates a lot of friction, because you then have a situation where you've got the product person fighting for the best possible product, and of course, the engineering are fighting with the realities of the engineering they've already done, and they understand... And you get this kind of tension. And there's often a lot of work and a lot of effort and energy goes into just resolving that conflict, and you end up hopefully with a situation where you've got something that's good for users, it fits technically, and everyone's happy.

\[01:04:23.06\] Often you don't have that, and what's nice about -- since we both fulfill those two functions separately, or rather we're kind of fulfilling them at the same time, we kind of get to think about "What's the user experience we want with the realities of the system?", and that allows us to if not always design the perfect thing, at least we go after the things we know that we can do a good job on. That's helped us, I think, have something that's usable so soon, even though there's really just two of us building it.

**Jon Calhoun:** I think it's also worth noting that -- like, for our listeners who might not be familiar with both a SQL database that has these joins, versus a document store where you normalize data and copy it over, that problems exist on both sides of the table. Both sides will have their own separate, similar problems.

I guess the one that comes to mind is let's say you're Amazon, you're shipping packages to a user, and they have an address. And you have a relational database where you query the user and do a join with their address, and pull the address up... But if the user goes and edits an address and changes it, depending on how you stored the database, you need your historical records to show the correct address you shipped to. So at that point you need to -- you have to think about the same type of problems of "Okay, now the user can't change their address. They have to create a new one", and is that the use case you want. So I definitely think that there's that problem on both sides of it, it's just a matter of finding the right balance.

**Mat Ryer:** Yeah, it's true. I think you're at risk of not being as rapid. If you use just a SQL data store, you can prototype and you can sort of throw data in and query in different ways. You can do a lot more of that. Having said that, I haven't found that our creativity has in any way been stifled by having a schemaless data store... But it is quite strict. With Firestore, if you want to do a query - even if you're doing an order by one field and filtering on another field, you need a dedicated index for that.

So you need a dedicated index for every kind of query you're gonna be doing, essentially. It creates by default single-field ones for you, and your job then is to go and exclude any that you're not gonna need. But having that - that's quite strange initially, because if you wanna just rapidly prototype in the browser and build things, to some extent you have to know ahead of the time what it is you're gonna get out of the data store, more so than with other technologies.

But honestly, it hasn't slowed us down at all, and of course, the trade-off is if you go to Pace.dev, if you actually play with it and use it, it's lightning fast, and it'll stay fast, because of the nature of that choice. The reason why that data store is so limited is so that if you use it properly, you can deliver massive power. So that's it, you're right, it's just about the trade-off. There isn't a technology that just solves all your problems. There's always gonna be decisions that you have to make, and you're making them at the wrong time; you make them at the beginning, which is the wrong time. You're much better off making decisions at the end, if you can... But of course, you've got to do something meanwhile.

**Jingle:** \[01:07:50.09\]

**Jon Calhoun:** David, Mat, do either of you have an unpopular opinion you'd like to share?

**Johnny Boursiquot:** Is pairing with Mat an unpopular opinion?

**Mat Ryer:** \[laughs\]

**David Hernandez:** Well, it's one of the things that we usually do while we are pairing. Mat gets the guitar and we try to do something completely different and build a little song, or something like that.

**Mat Ryer:** Yeah, just do some songwriting instead. \[laughter\] But actually, an unpopular opinion I have is you should try and work in tiny teams. A lot of the problems when it comes to software engineering come at scale. And that's not just code scale, but people scale. So if you can have tiny little teams working on a problem - and you can do this within bigger teams. Literally, two or three people - you are now a new little team.

You can be so effective in such a small group, because you cut out a lot of the work needed really to marshal the team. You can't always do it, and it sounds a little bit anti-social, but that would be my unpopular opinion. Tiny teams. Do you have an unpopular opinion, David?

**David Hernandez:** I don't have an unpopular opinion. I'm very populist, probably. \[laughter\] Going with the flow.

**Jon Calhoun:** You'd probably have to be "Go with the flow" to work with Mat that much...

**Johnny Boursiquot:** Oh, man...

**Mat Ryer:** I'm getting a grilling on this.

**Jon Calhoun:** I'm just kidding, Mat.

**Johnny Boursiquot:** Yeah, we kind of warned you though. You knew this was coming.

**Mat Ryer:** Yeah, but if you knew David...

**David Hernandez:** \[laughs\] Yeah, that's what I was about to say. You don't know me. I'm congratulating Mat for working with me for a while also. \[laughter\]

**Jon Calhoun:** So you're telling us that if he turned his camera we'd see a blank wall right now, but really if he turns it the other way it's a bunch of unpopular (I don't know) posters, or something? \[laughter\]

**Mat Ryer:** No, he's alright.

**David Hernandez:** I usually tell Mat that he's a terrible developer. His ideas are bad, so I'm not sure why he's working with me...

**Mat Ryer:** Yeah, I thought it was a language thing when you would say that my ideas are a terrible idea. I thought that was just the language, but no; it turns out he does think that, and he will tell you. \[laughter\]

**Jon Calhoun:** Is that why you spend so much time trying to prove him wrong? \[laughter\]

**David Hernandez:** Pretty much...

**Mat Ryer:** Actually, the serious point of just honesty about things is a big shortened when you want to be rapid as well. No one wants to hurt anyone's feelings, but if you can very quickly just have a very open and honest discussion about things, I think it does save a lot of time.

**Jon Calhoun:** I suspect a lot of that comes with working -- like, small team helps, but partially in the sense that you're probably working with similar people every time, so you build a good relationship and trust, and when somebody says "I don't agree with this", I guess it almost feels like you don't have to worry about hurting their feelings as much, or worry about -- like, people trust each other more in those senses.

**Mat Ryer:** Yeah. Well, I've worked in places where that's how I've always been, just completely honest about it... Because that's the idea - we'll all just put the best ideas out, and we can all figure it out as a team. And a few times in my career that's hurt me, where I've just been doing that and I've been kind of politically tone-deaf to other things going, and I've just been quite naive about it, just sort of getting on with it.

So yeah, I then got a bit sensitive about that, because it is important - you want to make sure that the ideas are there, but there are people that hold their ideas very personally, and will feel personally attacked if you disagree with their ideas, and stuff... So it's definitely worth watching out for, but it is nice being in a situation where that's less of a consideration and you can sort of just focus on the important bits. You're right, it's about the trust thing and getting to know each other, getting to know your teammates.

**David Hernandez:** Yeah, it's definitely about trust. I kind of trust Mat, and I can say "This looks terrible. I dislike this completely", or something like that; he doesn't get hurt. But don't forget that when you communicate in open source, when you're war mates, you try to be exactly the opposite, isn't it? You try to just be polite, try to be respectful, and that's kind of the healthy way to do it.

We get so much reports -- I don't know about you, but you can feel the tone in the words, in written words, in many issues... And you know when something doesn't smell right in the tone, in the messages, when something is wrong. Trying to be honest, we try to be very clear and very respectful in that way. Every time that we write to public communication or to each other, we try to maintain that. Apart from joking or healthy behaviors in a team, that is also quite fun to do, we also try to do it up to the best of standards, like we do it in a normal team, or with people that we didn't work together yet. Or if we're gonna hire someone, we'll probably do the same.

**Jon Calhoun:** Alright. Well, Mat, David, thank you for sharing about Pace.dev with us. For anybody who wants to check it out, you can find it pace.dev. If you wanna hear more about why Mat named it that - or Mat and David both, I suppose - you can message them on Twitter as well. Johnny, also, thank you for joining...

**Johnny Boursiquot:** My pleasure.

**Jon Calhoun:** ...and we'll see you guys next time.

**Outro:** \[01:13:48.27\]

**Jerod Santo:** Well, Google blew the world away, because the search engines before that kind of were like steam engines, they were so bad...

**Mat Ryer:** Yeah. I remember Jeeves. I would ask Jeeves all kinds of things and it'd never know any of it.

**Jerod Santo:** Oh, yeah. Altavista...

**Mat Ryer:** Yeah.

**Jerod Santo:** Web -- what was the Web one? It had an actual spider as its logo. WebCrawler?

**Mat Ryer:** Oh yeah, I don't remember... It was a dog?

**Jerod Santo:** I don't know, I just remember the spider.

**Jon Calhoun:** Ask Jeeves just confused me, because -- first off, search was already bad, and they were like "Now we're gonna try to process natural language from questions, and use that for search", and I'm like "How is this gonna get any better? You just made the problem twice as hard."

**Mat Ryer:** Yeah.

**Jerod Santo:** That's why portals were so big, because search was so bad. So you'd just go to Yahoo.com and they would be your portal to the internet, because you could find it all.

**Mat Ryer:** Yeah, and you could browse it. Remember when you could browse just a directory of the internet?

**Johnny Boursiquot:** A whole directory of the internet.

**Jerod Santo:** Yeah, pretty much. It was like one page of links.

**Mat Ryer:** Yeah... \[laughs\]

**Johnny Boursiquot:** Back in the days when I used to be called a webmaster...

**Mat Ryer:** Oh, webmaster, yeah...

**Johnny Boursiquot:** Yeah, don't judge me...

**Jon Calhoun:** I still kind of want that to be my email... Just webmaster@...

**Johnny Boursiquot:** \[laughs\]

**Jerod Santo:** Webmaster... That's funny.

**Johnny Boursiquot:** Good times.

**Jerod Santo:** The good old days...
