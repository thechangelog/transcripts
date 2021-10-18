**Jon Calhoun:** Hello, and welcome to Go Time. Today I'm joined by two members of the team at Clever, and we're hoping to discuss different things about how you're using Go at Clever - why you started using Go, different challenges you've had, and hopefully a lot more.

Our first guest is Rafael Garcia. He's the co-founder and CTO at Clever. How are you doing today, Raf?

**Rafael Garcia:** I'm good. How are you?

**Jon Calhoun:** I am good. And our second guest is Nathan Leiby. He is an early engineer at Clever. How are you doing, Nathan?

**Nathan Leiby:** Hello! Thanks for having me.

**Jon Calhoun:** Thanks for joining. So I guess the first obvious question is when did you start using Go?

**Rafael Garcia:** We started using Go in March of 2014. The company itself was founded in 2012, so a few years in we were feeling a little bit of the pains of the tools and tech that we were using at the time, and Go kind of found its way into our stack, and found some early success back in 2014... So I guess it's been 6-7 years now.

**Jon Calhoun:** What were you using before Go?

**Rafael Garcia:** This is where I get to talk about embarrassing initial technology choices. The first stuff we did was in CoffeeScript and Node. Back in 2012 that was a popular choice... And yeah, we were primarily building an API, and that was basically the only surface area of Clever for a long time.

\[04:15\] There was a lot of stuff that started to get a little bit unwieldy. I felt this a lot as we started to hire more engineers. Onboarding engineers into the mess of a CoffeeScript codebase that I'd been primarily responsible for was tricky, and so trying to bring some more sanity to that, Go ended up being a big contributor to more success there.

But yeah, we were basically feeling the pains of an untyped language running on a single thread, doing data processing and high-performance API responses. That's kind of the short story.

**Jon Calhoun:** That makes sense, especially because as a startup I think sometimes just being able to move quickly is important... And JavaScript can be really good for that. But then there's definitely times where that starts to bite you a little bit, and you need a little more structure, especially, as you said, as you're scaling up your engineering teams. That's where I think if you have any sort of confusion in your tech stack, or anywhere where things can go wrong, it's when you start scaling up your team I feel is when it tends to start to show itself... Because it's not just a couple of people who really know the code; you have to actually have something that people can jump into.

So you said that you started having some successes with Go... How did that start? What was the first thing that was written in Go, or how did it end up in your team? Because I think sometimes people want to go out and pick a language and rewrite everything, and I'm guessing that's not what you did... So what were those first projects like?

**Rafael Garcia:** One of the big initial projects we had -- you know, as we grew, we needed to start placing some limits... So at its core, one of the big things that Clever does is an API for other software companies to use. As we grew, we needed to place some limits on that... So we put a rate limiter on our API that is called Sphinx. It's open source, and it's basically a proxy. There were some interesting problems there - how to run it in multiple instances that have shared state about where people are in their respective rate limits... So we took a bet on Go, and the team was enthusiastic about trying it. The standard library had good support for just straight reverse proxies, so we went for it and it's been great.

One of the early signals we got on Go at that time was it doesn't require a lot of babysitting once you have something running smoothly in production... So that started to kind of connect the dots for the team. As we started creating things and putting them out in the world, we don't want the overhead of having to operate them and have to think about them too much after we've put them into the world... So Sphinx has been that, for sure. We still run it; we rarely have to think about fixing bugs or doing other things with it... And yeah, that was kind of the first step back in 2014, was that project.

And then yeah, Nate probably has lots of perspective too, from joining the team and jumping into some of the messes that were created.

**Jon Calhoun:** So you said you took the bet on Go... I'm assuming this was something that realistically -- if Go didn't work out, I'm assuming this was something small enough that you could have pulled it out and replaced it with a JavaScript app if you needed to.

**Rafael Garcia:** Yeah. I think there was enough enthusiasm on the team, and I think we went into it knowing that we might have to throw all this away and go at this a different way... But sometimes you have to take those risks, and it pans out, and you find a new tool for your toolset, that pays dividends for the team. So that's kind of what we did. There are plenty of stories of us taking bets on other things that didn't pan out, so... You win some, you lose some, I guess.

**Jon Calhoun:** \[08:15\] Yeah, that makes sense. And hopefully we'll get into this more, but one of the questions we hear a lot is "How do I get my team to transition to Go?" and I think what you gave is a classic example of you pick a relatively small, isolated problem where it's a good test case, and see how it goes. If it's successful, then great; it was a good bet. But if it was a bad bet, it's not like a company-killing bet at that point.

Nathan, do you wanna share some of the other projects that you guys jumped into early on?

**Nathan Leiby:** Yeah. I was just thinking about a different part of our stack. So another big thing that Clever does is it integrates a lot of third-party systems, whether it's web scrapers, or API integrations... Just a big part is extracting data. So another early place we started trying out Go was to build some of those data extract workers. I think that was a couple months after - I had to look at our Git commits to figure out exactly when, but... And I think that went actually through a spec process, where it's like "Okay, we wanna build this thing", we wrote a doc, we were like "Here's what we wanna build." And then at that time we had been a few months into Go, and we were pretty confident it would be a good way to build this.

We mentioned CoffeeScript, but we actually had a lot of stuff written in Python as well, to do some of those extract jobs. Not strictly a bad language for it, but in this case we were working with a well-schemad API; it was easy to think about how we'd write that data and extract logic. And I think they were really testing what is the development and collaboration process in this language. The other thing was experimental, and this was really getting it into our real dev process.

**Jon Calhoun:** And seeing how it works with the whole team.

**Nathan Leiby:** Yeah. I think too people were collaborating really closely on this project, but it wasn't yet a huge thing... But we were starting to reconsider some of the abstractions we'd already built in Python. For example, we had kind of a worker abstraction about how you receive a job, and do some work, and write an output somewhere... We were like "Well, what if we wrote that abstraction in Go? What if we had a way to consume jobs?" and then additionally, of course, all the data ingest logic, how would that work. So I don't know, it was pretty smooth. That is also still live, many years down the road.

I think we started seeing some of the -- you know, how you write tests in Go, the benefits of having types... That really started making the language more appealing.

**Jon Calhoun:** You were testing to see if it worked for your team obviously, and to make sure the projects worked... But were you looking at other things, like often you had bugs in production? Were any of those things on your mind as you were trying Go out?

**Nathan Leiby:** Yeah, I mean -- I don't know how formally we were measuring all of them, but we were definitely responding to pains we felt. This project in some ways was like a well-structured project \[unintelligible 00:10:50.20\] some bugs we would face would be like network-related stuff that Go really wasn't gonna solve... You know, the system where we're getting data from is down.. Although maybe we learned about error handling and other things there... But I would say that immediately jumping into a toolchain where tests are a key part that's exposed by the language easily, and there's no debate on which testing libraries to use, or how to build them immediately was beneficial to us... Whereas I think -- you know, maybe that's the company maturing too, starting to do more testing, versus development... But I don't know, we saw the wins there pretty quickly, I think.

**Jon Calhoun:** Yeah, that makes sense. I did a lot of Ruby before I switched to Go, and one of the things that always killed me was I didn't really care for RSpec. It was the most common library for testing, so I almost had to just suck it up and learn it and use it, because you were gonna run into it in some company or some project or something... But on my personal projects I'd use something else, and I kind of -- switching to Go, it was nice that everybody used the same thing, because they didn't have to do those mental switches or anything; it was like "This is just the way we're gonna test, and it makes sense, and it's pretty easy."

\[11:58\] I don't know if you guys had the same thing, but one of my experiences switching from a Python or Ruby type language to Go was that I felt like testing was almost easier, because having a typed system and everything there - I don't know, for me it made it clear what sort of things I wanted to test, versus which sort of things weren't really worth testing. With type safety you don't have to test "What happens if we pass in the wrong thing?" There's all sorts of cases you can kind of just ignore, and just focus on the important tests.

**Rafael Garcia:** Yeah, I think we definitely felt a lot of that. Another thing that comes to mind is we were coming from Node, where to do anything non-trivial you have to pull in tens, if not more third-party libraries, to do things like testing, to do any non-trivial application... But with Go, at least for a lot of the use cases we were working on, you rarely had to do that, to dive deep into the third-party ecosystem. The standard library for testing and for writing HTTP services was sufficient, so it made things a lot more straightforward.

So definitely, on the testing front, like interfaces and other things like that, where you're testing actual functionality and not the various values that a non-typed variable can take in a non-typed language - it definitely simplifies the story.

**Jon Calhoun:** I think the other thing for me was always that because in dynamic languages it's so easy just to replace anything, that you end up writing tests where -- you almost like throw a mock in certain places, and then you're like "Well, does it get this input it's receiving?" whereas sometimes in Go -- you can do that if you really wanna try to, but sometimes it's hard enough that it's like "Is that actually worth it?" You have to stop and think about it.

So you had mentioned that with the Node world you had to pull in a lot of libraries... Do you think that's gotten better in JavaScript, or -- if I rephrase the question, if you started using JavaScript today, from the ground up, do you think you would have been as quick to transition to Go in a couple of years?

**Rafael Garcia:** Yeah, that's a tough one... So since 2012 things have come out that have changed the story. We use TypeScript now, and that has significantly helped in the realms of just making the codebase more approachable for new team members, or if you're switching onto a team or something like that... I think from a general development point of view there's still a massive third-party libraries that you have to wade through, and that is a little bit frustrating at times... But to be fair, I think the vast majority of the stuff we do in Go is not web apps that require a build process to create frontend JavaScript, and communication between a browser and a back-end. The vast majority of our Go services are backend services that just need to worry about doing HTTP requests. It's kind of an apples to oranges comparison, for us at least...

I'm sure if we did a bunch of web apps in Go, we would have probably a lot of complaints that look similar to the complaints I could make about Node and TypeScript...

**Jon Calhoun:** That makes sense. So you said you're using TypeScript now, which I assume means that you're still using JavaScript - or TypeScript, I guess; but JavaScript for some of your stuff. So you didn't just rewrite everything in Go. Do you wanna talk a little bit about -- I guess the first question is how much of your codebase do you think is in Go at this point?

**Rafael Garcia:** So the general structure is like any frontend web app for the different users that use Clever is a Node TypeScript app. And then underneath the hood, those apps communicate with a bunch of services that are internal, and you can basically say all of those are Go. So in terms of the backend infrastructure, probably you could say 90% of it is Go, and the 10% that serves the web app for various user types is Node.

\[16:03\] Maybe one area where we haven't had success is in creating internal apps that are Go web apps; it's been an okay process... We haven't invested all-in into doing it, in trying to figure out the best process for it, mainly because there's not a burning need to rewrite everything and get everything onto Go. Nate maybe has some more thoughts on this... He's probably done more frontend stuff lately than I have.

**Nathan Leiby:** Yeah... Well, my sense is just that the toolchain for developing something with an express server that's pretty spare, but kind of serves whatever serverside code needs to be executed... And then for the React environment/ecosystem - you can just run the whole thing in TypeScript. Then the goal is just remove everything involving logic or databases, so it's like all that is Go. You're just calling out to another service, and that's sort of a microservices split.

I've also -- it's not really a weakness of Go, but we have some opinions around what a Go API should look like at Clever. In some cases we've ended up building kind of edge-casy APIs that have non-JSON/HTTP interfaces, basically... And there were a few times where that was more convenient. For example, we've done an important SAML service that's not written in Go... But we would love to move all of the important business logic to Go. My philosophy is like we want the Node/TypeScript layer to be as thin as possible, or to serve entirely UI kind of needs.

**Jon Calhoun:** That makes sense. In the past we've talked about some things like building a GraphQL server in Go was something that -- it's not too bad from a server perspective, but if you're trying to make a client in Go, that can be really challenging, because Go doesn't really lend itself to this "Fields can and can't be there at times." That's just not Go. So there's definitely cases like that where it does not fit, and when you get into something like TypeScript, it can be much easier to work with, because it's just like it's designed around that almost.

So you said that you're split up and your web UIs are written in TypeScript, or in the Node world I guess, with Express, and some of those things... What is your overall structure like? Do you have microservices? Do you have one big backend server? What is your overall architecture?

**Rafael Garcia:** Overall - I think I was looking the other day and we have somewhere North of 200 repos, and each repo roughly corresponds to a service... But a lot of them -- I guess the primary request path set of services probably numbers in the 20 to 30 range... So we have a handful of web apps for different user types, and then you can think of it as like tens of Go microservices that power the primary request paths in there... And then a whole bunch of background job processors with singular purposes and various duties to perform throughout the course of the day, so syncing data from third-party systems, running analytics stuff, and other stuff that isn't triggered directly by a user doing something on the web.

**Jon Calhoun:** So with that many repos, to me at least, that sounds like a nightmare to manage or to go about, just because -- like, I'm thinking in my head if I wanna make a change that touches three repos, what does that deployment process look like? How do you manage that and how do you make things feel consistent as a team? Because at least for me, one of the big benefits of Go is that a lot of Go code feels the same... But I worry that if you had that many repos, you could potentially have services that look very different. Do you use some sort of generation or anything like that to make that look consistent?

**Rafael Garcia:** \[19:56\] We standardized pretty early after some painful growing pains with Thrift on Go, doing kind of HTTP/JSON APIs. So every service now has a Swagger OpenAPI definition file. We have a code gen, this thing called Wag (it's open source on our GitHub) that generates a Go server, a Go client and a Node for a JavaScript client... And then from there there's a ton of consistency across all of those repos.

I think we were lucky in some sense to do that fairly early on, because yeah, we could be in a world where there's lots of inconsistencies, and jumping around would be difficult... But it's actually not that bad.

I think some of this also goes into when to create a service... Because yeah, it would be a tragedy if to do something basic in the product you had to touch 5-6 services and roll out changes, and make pull requests, get them reviewed, and all that... But I think with a modest approach to microservices you can kind of isolate features, or things that need to be changed. The number of services is usually not something North of two or three... So there's a lot of services, but we've put some thought into standardizing, and then we also have some tooling as well to manage some of that.

**Jon Calhoun:** So it sounds like you're conscious of the fact that you don't want to split into so many microservices that it's obnoxious... So how large do you think an average microservice is for you? Are we talking like 100 lines of code, where it's like this tiny thing, or are we talking a couple thousand lines? What does an average service look like?

**Nathan Leiby:** The way I think about it is more around how large of a product surface area does this service work with. There's two key types of microservices we run. And I guess I'll distinguish one thing... So a service system has this HTTP API, but also - I don't know whether you think of our workers, the data transformation things as microservices as well, but you might if they're saying they do a single, small task... But anyway, from the API layer I think it's often like "I need to build a new product feature. It stores pieces of data, and configuration" - generally, that's one service around a product feature, and there's a data store associated with.

Really concretely, I'm building a totally new area of our product called Analytics Reports. Okay, we'll probably build our own service that contains the data regarding those, and if a user needs to set configuration for themselves, that would go through that service. But if someone else isn't going to add a new feature on top of that, like a small incremental improvement, then they'll just add it to that existing service.

Anyway, I don't know... I think product abstraction is often an important thing. There are definitely times where you might slice a microservice based on performance considerations as well... So maybe Raf, do you wanna talk at all to how we've split up SSO and thought about microservices there?

**Rafael Garcia:** Yeah, performance considerations for us kind of boil down to what would trigger downtime. We track pretty closely our uptime, and try and maximize that as much as possible. One of the strategies we use is for services that are in the core request path that we call SSO (Single Sign On), the core feature of Clever that needs to be up all the time - we split that out into its own deployment path, so that all of the requests that are hitting those services are from actual users trying to log in, essentially... So we've split those services up and thought carefully about their performance requirements and uptime requirements. We don't want background jobs hitting them with these massive queries that might bring them down or change the performance requirements, or make them just hard to satisfy from the services point of view...

\[24:07\] So yeah, some degree of carving out these swim lanes of "Here's a use case that we wanna isolate and really protect from uncontrolled requests from anyone spinning up a new background processor, or whatever."

**Jon Calhoun:** That makes sense. So when you're looking at these microservices and setting them up, is it generally like one engineer owns a single service, or is it something a little bit different? How do you approach that aspect of it?

**Rafael Garcia:** Yeah, like Nate described, it's really feature-based. That boils down to team-based... So someone on a team responsible for a product area will spin up a new service, and we initialize it with various pieces of metadata, including their team, and that's where the ownership gets set. From there, that team, the owner of that product area is responsible for the service.

We do have some degree of individual ownership tagging, so that if someone feels a strong affinity towards how the code is set up in a particular repository, they can get pinged on in pull requests, and things like that... But ultimately, teams map to repos, which map to services...

**Break:** \[25:32\]

**Jon Calhoun:** Taking a step back, earlier you'd mentioned -- I think it was Wag. Was that the library you built? So... For whatever reason, I feel like this is not an uncommon thing, where people build a service that sort of generates either something from Swagger, or - like Mat Ryer, who's sometimes on the podcast, wrote (I think it's called) Oto, which allows him to create an interface, and then it creates a Go HTTP server, but then it also creates a JavaScript client that communicates via HTTP/JSON... And the idea is to write one definition once, and then generate the code on both ends for communicating.

But I guess what's interesting to me is that it seems like a lot of times people build that themselves, rather than using some standard that's out there. In your case, did you not land onto Swagger or whatever tools they have, because they just weren't up to par at the time? Or was it something where you had specific needs? Can you elaborate on why you built something yourself?

**Rafael Garcia:** I think generally speaking we try and utilize as much as possible existing tools. One area where we need to have more degree of control is in that final, last mile touchpoint of engineers on a team with whatever it is. In this case, it's like, you want to interact with a service in our infrastructure. We really wanted to have control over that, down to the method signatures, and the interface that's generated, things like that.

And at the time, the OpenAPI - or Swagger, as it was called back then - Go generation was pretty young, and not really pluggable. I think now it has some degree of like -- you can plug in your own templates, and other things like that. It still requires a decent amount of investment to get it to do the thing you want it to do, but ultimately, we had a pretty focused used case. And we also actually still use an open source Swagger generator for types and some of the nitty-gritty stuff that we didn't have a specific divergent view on, I guess... It was really about the interface for the client, and the server, how the HTTP request gets handled; we wanted to have control there.

\[28:42\] So it was mainly about finding the parts that we could just use out of the box, but then having enough control where we could iterate and do things that we wanted to do without having to wait on a pull request, or really fork and modify an existing thing and have to maintain a fork, and do all sorts of stuff like that.

**Jon Calhoun:** I think you also had an important point where even if you're using one of those open source, off-the-shelf tools, like you said, to get it to do what you want in some cases you have to customize it so much that it is a big investment... And by the end of it, it's almost not like you're using an off-the-shelf tool anymore, you're using one that's so customized to your workflow that people joining your team still have to learn something new regardless. At least that's what it seems like to me in some cases, where if they can't just come in and be like "Oh, I've used Swagger. I can jump into your code", then sometimes it's not really worth using that tool.

**Rafael Garcia:** Right. I was actually looking this morning at Datadog's API. They generate their Go client using the OpenAPI generator, and they've built a whole framework on top of the OpenAPI generator for customizing the OpenAPI generator. So it's like, all paths lead towards you writing a thing that gives you the control you need.

**Jon Calhoun:** It's a weird thing, because I feel like as developers, because we know we can control and get it exactly the way we want it, we don't settle for something that's subpar, especially when it comes to having an entire engineering team actually being efficient with their jobs and getting things done; you don't want people to be doing silly things all the time.

**Nathan Leiby:** Sometimes it's worth building that extra wrapper to actually reduce the capabilities of a tool... What I mean to say there is maybe you don't want people to use all the edge case features that exist in Swagger... So it's actually quite nice to limit things and have your own wrapper that does that. I realize maybe it's for safety, maybe it's just to simplify your system. Maybe you make a decision later to re-enable one of those features, but I think that is powerful.

**Jon Calhoun:** Yeah, that definitely makes sense. A question I hear a lot when people are jumping into Go is they talk about migrations, like "What tool should I use for these migrations?" And I think that stems from people using Rails, or some of those frameworks that have really good migration tooling built into them... And then when they get to Go, it's kind of confusing, because that doesn't usually exist... And I think sometimes people forget that a lot of those edge case tools - they are a double-edged blade, where they can help you and hurt you just as much. So sometimes keeping it simple and just writing something on your own that doesn't have them can be easier, at least in the short-term.

**Nathan Leiby:** For sure. You might lose out on some long-term benefits... So we wanna leverage the open thing as much as possible.

**Jon Calhoun:** Yeah, that makes sense, for sure. So you've got all these microservices, and you've kind of alluded to the fact that each one will sort of have its own data layer. What does that look like? Because I think for a lot of people when they're building an application they think of "I've got my app, and then I've got one SQL database that has everything." It sounds like that's not the case here. So can you go into some details as to how you interact with data, and what those services are like?

**Nathan Leiby:** Sure. Well, it's definitely something we've invested in more over time... I think from a sort of resilience perspective, we wanted to move towards a world where one service talks to one data store, so that you don't get a lot of confusing request patterns on your database... So it's like, "How do we actually do that operationally?" The biggest success we've had is that we've put a lot of automation into spinning up Dynamo instances mostly. So it's very easy at Clever to create a web service with a backing Dynamo data store and have all the code auto-generated, except for some specifics of your controller logic that are relevant to your specific app.

\[32:19\] Everything else - the web interface to send those requests, the actual code that writes and retrieves data from the data store, the actual spinning up of the db, the ability to modify the scale of the db, all of that is pretty easy to do through minor configuration changes and highly-automated.

So that's kind of the best-case scenario, if that serves the needs of your app, which it doesn't serve every app, but it is quite a convenient way to bootstrap projects right now.

**Jon Calhoun:** Do you do something similar for the rest of the project? You're saying the DynamoDB - it's pretty easy to spin that up. But if somebody wants to start a service, do you have templates or code generation or something for an entire service?

**Nathan Leiby:** Yeah. So all the engineers at Clever - there's a CLI we have that does things like deployment, but it also has the ability to initialize a new project... And that involves both the code template - for example, I want to make a web service in Go; there's a template for that. A Wag-based web service. So you initialize it, it'll spit out a bunch of code, and then you're gonna have to fill in a few -- the post handlers should actually retrieve this object and write it to Dynamo; and while it does that, maybe you need some business logic added in there. But pretty much everything else about a service is already done for you - how you receive the data, and marshal it, how you validate it, that's all Swagger stuff.

And then on the database side, it's like how you initialize a connection to the database, how you do writes to the database... So a huge amount of it is -- there's a template that sort of abstracts over what is a web service, and then there's a lot of generated code that supports the things you need to do with that web service.

**Jon Calhoun:** That makes sense. You mentioned a CLI. Is it written in Go? The most important question.

**Rafael Garcia:** It is.

**Jon Calhoun:** Did you have CLIs like that written in Node before?

**Rafael Garcia:** No. Well, our main infrastructure tool before this was written in Python... And that was mainly because we were still doing a lot of AWS interactions, and \[unintelligible 00:34:15.13\] was a good library for that... But yeah, the primary tool now that engineers use is a tool that is written in Go... Which is actually interesting from the perspective of you build binaries for macOS, for people not in macOS... And yeah, there's some interesting features there. Simply just packaging a binary is way easier in Go than installing something with Python - all this is an adventure.

**Jon Calhoun:** When I've talked to people in the past about how they got started with Go, it seems like that's a really common use case, is if you need a CLI in your organization that is a good spot for, because it's something that if you need to replace it, it's not gonna be detrimental to the entire organization... But it's usually one of the cases where Go shines pretty well, because if you have people, like you said, on different operating systems, it's nice and easy to bundle it and actually send it to them... Versus - I think anybody who's tried to use the CLI in another language, where you have to install these things and hope basically that it works, that you've got everything set up correctly, because if it's not, then it's gonna be pretty tricky.

**Rafael Garcia:** Yeah, I feel like my Python installation is never in the right state whenever I go to install something, so I'm grateful for the Go binary approach.

**Jon Calhoun:** Oh yeah, I just ran into that recently, where I was installing a software that I use - it's called Softcover, and it's written by Michael Hartl... But he has a big Rails tutorial thing, and he made some software that makes it easier to generate an eBook out of a Markdown, with a little bit of Latex mixed in there... And you have to install all the stuff to get it to work. And I got it all installed and set up, and rebuilt the book that I have, and was doing all that... And then I went back to my blog to build it, and it had somehow -- you know, in that process of things being built, that had changed whatever software was being used there, like some third-party dependency... And just having that issue where, depending on what you're building, you have to go fix your installs for everything... And it's kind of a nightmare, versus just having a CLI that you're like "I can run this, and it works. I don't have to worry about that."

**Nathan Leiby:** \[36:18\] Go has certainly gone through its journey of package managers, and that's a different story, but... The ability to share the binary once it's done works amazingly well. And our infrastructure team, I was gonna say, has loved using Go for all kinds of convenient internal use cases. I think that was a big adopter beyond the APIs and data processing stuff, which is internal tooling, and stuff. It's been nice.

**Jon Calhoun:** So speaking of... What has your experience with the go.mod and that sort of thing been? Or have you transitioned to go.mod, and what has your experience there been like?

**Nathan Leiby:** Yeah, so one of the things we've really liked about Go has been it's been pretty reasonable for us to upgrade from version to version, and from dependency tool to dependency tool. I don't have a detailed perspective on go.mod, because it's worked for us really well, I think... So we have some abstractions around how we build stuff in Go. We have a golang.make file. We use make as our primary way to do automation, both in Go projects and non-Go projects.

For example, you might have had a step that said "Make dependencies that formerly ran Go Dep", or whatever else... And \[unintelligible 00:37:30.12\] go.mod there worked great for us. I can't think of any issues with the latest iteration.

**Jon Calhoun:** That's good to hear, because -- like, at least sometimes it feels like all you hear is the bad news... Because generally, if things are working, you don't say anything... So it starts to sound like "Oh, this thing isn't working at all", but in reality, at least my experience has been that there's a good chunk of people that Go modules works pretty well for... And then there's the subset of cases that it doesn't seem to work as well for, and those people are rightfully upset and frustrated at times, because - you know, you wanna go back to work.

So you talked about upgrading versions, and you have hundreds of repos... What does that look like, I guess, whenever you're trying to manage that many repos? Do you just do them one at a time when they need it, or what does that process look like

**Rafael Garcia:** Nathan and I - we actually worked on this. There was a hackathon maybe a few years ago where we recognized that this was a problem, so we created this tool to open-source on our GitHub called MicroPlane. Essentially, what you do is it works you through kind of a workflow of -- you first search for the repos you wanna modify with like a GitHub code search input; it takes care of cloning those repos onto your machine... And then you give it a script to run that you wanna apply and run in each of those repos.

Then you can instruct it to additionally push it to GitHub, open up pull requests, assign it to someone, and then eventually, it also will take care of merging those pull requests as well. So it kind of is a workflow tool, I guess, in some ways, to making changes across tons of different repos. The challenge ends up being "Can you write that script to do the thing you wanna do to every repo?" That's where thing like standardizing on a makefile, or like a build process for Go repos is critical; having the same dependency management across all repos is important. But yeah, we've used that...

For the example of updating a Go version, there are a few places where the Go version appears in a repo. It's like a makefile, the CircleCI config, and maybe -- that might be it, actually. So it actually ends up being pretty easy to write a script that just finds those lines and changes them, and then farms it out to GitHub for review, and then we just have to merge it all. So it works pretty well. But then there are obviously cases - we're running into this now, moving to go.mod, where some of the devils are in the details; it might not be possible to automate all of those conversions, and there's extra work that needs to happen... But for a lot of the easy change a few files here and there across all repos, Microplane has been pretty useful for us.

**Nathan Leiby:** \[40:22\] Yeah. And another thing that comes to mind is -- I do feel like automating changes on repos is part of a growing trend, so it's kind of cool to take an opinion on how to do that and see people honestly doing it better... For example, Dependabot is something that GitHub is investing in, to think about how you automate dependency updates across all your repos...

So yeah, updating a Go package file is one part of the problem, but honestly, I think the future is refactoring your whole repo to best practices automatically, or continually writing your code for you, better and better.

Some of the other hard parts that come up in our current process - that I think we have to solve - are "What if the build fails? Did you make some change?" or "There was a breaking change, but we have to assign it to the right person and make sure we have a human process to deal with that"... So that's part of what Microplane is doing.

And the other is "Okay, we changed the code, we thought it was safe, and now we're gonna ship it. Are we sure that's a good idea?" A lot of effort we spend at Clever with microservices is "How do we deploy stuff safely? How do we have consistent alerts across those services, how do we automate deployment?" While you're in an automated deployment, how do you understand if anything is going wrong, and roll back quickly, get a human in the loop if they need to be there...

So I would say that's a supporting piece of running many services - rather than thinking about how to automate a complex, huge monolith being deployed, we need to think about automating the deployment of ten things at once, or 50 things at once, and making sure that's a sane user experience, where you can debug failures.

**Jon Calhoun:** Has that been something that you've developed incrementally, yourself, locally, or using off-the-shelf tools for that? What is that deployment process? Is it something that is just yours?

**Nathan Leiby:** Yeah, we basically have a Slack bot that behind the scenes is running a state machine that represents your deployment. This is definitely something where I'm sure there are other tools out there that we could leverage more heavily. When it started, it was very straightforward, like "Say yes if you wanna deploy", or something like that. Over time it's become much more of a feedback loop, where you're getting a Slack thread describing whether it looks like something is going wrong, or a canary is happening right now and maybe a full deploy will happen in a few minutes.

We definitely looked at other existing systems. Part of the challenge was we saw people doing cool work, but running Netflix's Java system to do this just wasn't worth it... And I know Kubernetes also has done decently well with this, with having lots of tooling. We didn't build on top of Kubernetes; we're mostly on ECS. But anyway, the deployment abstraction for us is not Kubernetes, so we can't just reuse that set of tools either.

**Break:** \[43:00\]

**Jon Calhoun:** I feel like it's a pretty common pattern to -- like, it's not hard for you to end up with a homegrown solution I guess is the way I'd put it... Because like you said, you usually start with one small thing, and then you just need one more small thing, so it's easier just to add it... And eventually, you've got something so custom that trying to make other tools work would have been hard anyway... And I think that's one of the areas where people -- at least when I talk to people who are talking about "I wanna learn microservices", I think that's a huge part of it, they wanna understand "How do I deploy this and manage this?" It is a challenging problem; I don't think anybody has all the answers to that at this point.

**Rafael Garcia:** Yeah. And I think another thing too is you have to accept the underlying bits and pieces will change as well. Like Nate mentioned, we have this automated deployment process, that goes through this state machine of the various phases... Initially, we wrote that state machine ourselves; it was a service, with some database behind it that we kind of went through the motions of taking this state machine through the different transitions... And then we started getting more proficient using AWS's - they call it Step Functions. It's like their state machine runtime, basically... And switched to that. Now the surface area that we actually maintain is that much smaller.

We change our deployments to now span multiple regions of AWS, so we need to expand either the state machine, or the thing that it's interacting with; making these types of changes and evolving the underlying system gets a lot harder if you've really forced some other piece of technology to do something for you in a way that can't be changed... So yeah, it's a tough balance.

The failure mode is you create all these things and now your surface area of what you need to operate and maintain is so large that it's hard to -- you kind of fall under so much weight of that... So you kind of constantly have to be thinking about where can you factor big chunks out, and effectively have some managed service or open source library or something do it in a much more efficient way, so you can focus on continuing to build. That's really where the challenge looking forward is.

**Jon Calhoun:** Given that you need a process like this to deploy, and there obviously are a lot of moving parts when you've got this many services, what does local development look like? For instance, if I wanted to run the tests, do I need to spin a bunch of things up, or did you build tooling around that as well? Even just if I wanna run the whole app locally, do people run the whole app locally, or do they just run small parts?

**Nathan Leiby:** The approach that we've taken - it's changed over time. I think at first we tried to run several things locally, and quickly realized that it just takes too much time to spin up... Or you have to make sure every single one of those applications is in a good state locally. Where we arrived is that we basically have the ability to run a single microservice, or the one thing that you're changing actively locally, and then point everything else in a staging environment.

We have the ability to run a unique environment per user. For example, I could run one called Nate, and Nate could run one called Raf, and they'd be totally isolated from each other. In reality, that hasn't really been as useful as we thought it would be. We basically ended up having one large shared staging environment that people really use. Partly, it's practical; it's less stuff to be running, less data store, copies, things like that...

So yeah, I would say you run one application locally and you point to a shared development or staging environment for all the other dependencies. The main downside with that is if multiple people are actually actively trying to change the same thing, could that cause issues by having a shared staging environment...? But it offloads all the effort...

Even recently, I've done some side projects with a Docker Compose file, and I'm like "This is too much work, even for a handful of services." Like, everything is always breaking somewhere. I don't know. It is like a side-project, so it's not the same level of love that a company that's invested in Docker Compose might put into that... But anyway, I'm really grateful that you could just run something, and you're only really worried about your one local thing... At least 95% of the time.

**Jon Calhoun:** \[48:20\] It makes sense. I use Docker Compose for some things, but my general feeling is that it's almost like you need someone on your team who really understands Docker and Docker Compose if you're gonna go that route... Because at some point you're gonna have issues, and someone's gonna have to be like "Well, why is this happening? How can we fix it?" And you can get so far by yourself just figuring it out, but at some point I feel like you do run into those issues of "How do I address this?" I take it that also means that people have to have an internet connection to development... Is that the case?

**Nathan Leiby:** If you're developing the stuff that needs to talk to web services, then yes. But certainly, I would advocate for - you know, you should be writing pure local stuff as much as possible. If you're writing business logic, do you really need to talk to the remote thing? How can you use better dependency injection or mocks to simulate that properly? But yes, if you wanted to, for example, spin up a UI and click through it, you would need to be connected to the internet.

**Jon Calhoun:** Okay. And then I take it that means that most of your tests are isolated to individual services... Do you run tests that touch everything, or is that (I guess you could just say) like a QA environment to do something with the whole thing? And do you only run those in a QA environment? Or I guess what does that process look like?

**Rafael Garcia:** Testing an individual repo or service will be isolated to that service, its business logic, and maybe its data store... But for services that are part of a bigger piece, like a particular product, we do have a CI process that gets triggered that spins up, like Nate said, an isolated development environment or staging environment with your change, and then tests some end-to-end flows... So if for some reason the interaction that other services have with your service that you're making a change to - if you break something there, it'll get caught in CI when that end-to-end test gets run.

So yeah, some kind of automated QA(I guess) is definitely necessary in this world, because if you're pushing out one piece of a bigger whole, that needs a kick of the tires to make sure you haven't broken anything.

**Jon Calhoun:** Okay. I think it is time to jump into our Unpopular Opinions segment.

**Jingle:** \[50:35\] to \[50:53\]

**Jon Calhoun:** Do either of you have an unpopular opinion that you'd like to share? It can be about tech, or not about tech; that's completely up to you.

**Nathan Leiby:** I'll take a wager on a Go one, but now that I started looking at who's on this podcast, I know that they're way better in Go than me. Anyway... My unpopular opinion is that Go channels aren't worth it. After writing Go for seven years or so, I have probably used channels a handful of times, and the majority has been to use a time ticker, or something like that... So I'd prefer just the sig package to solve pretty much all my needs.

I know they're elegant, I know they solve something useful, I know they're philosophically great, but I've rarely found code that was easy to read with them.

**Jon Calhoun:** If it helps, we did have -- I don't remember, maybe it was about a month ago, we had an episode where one of them... I think it was a member of the Go team actually who said that channels are kind of a footgun, where more often than not basically people shoot themselves in the foot with them than actually get what they want done. I think Johnny Boursiquot took offense to that one... But that is something that's come up.

I think there's definitely a use for channels. There are cases where when I've used them it's been great... Then there's other cases where you see code and it very much feels forced, or like a bad way to solve the problem... I don't know, do you think it's because you have people who haven't used concurrency as much, and they just really wanna use them? Or what's made you feel that way?

**Nathan Leiby:** \[52:14\] Yeah, I think it's mostly that. I guess I haven't used that pattern as much in other languages, so it doesn't come as easily... You have to learn a different syntax, you have to learn some kind of edge-casy blocking issues that can come up... Or just non-obvious blocking issues. And I don't know - when I've tried to review or talk about that code with other people, it's been more challenging to explain or agree on what's going on. It's not a super-informed -- concurrency might be the problem, yeah.

**Jon Calhoun:** I feel like you're describing concurrency in general. Concurrency, in my opinion, is just hard to explain exactly, in a lot of code at least. If it gets complex at all, concurrency is just hard to reason about. I think that's one of the reasons why so many people struggle with it - it's hard to imagine all the different ways something can happen, or the order of execution , because it can be changed so much.

**Rafael Garcia:** I feel like too a lot of it might be informed by -- we use Go for web services, where you have a very short amount of time to respond to your request, and the most complicated thing you're probably doing in parallel is a bunch of requests out in parallel, and repeat the results, and do some basic processing of it... And to insert channels into that is usually not worth it... Like Sync, or like -- there's another library I've used a lot called errgroup, that basically can spin up a bunch of stuff in parallel, tell you if any of them errored, and then move on. No channels required. Which has been a lot simpler than channel approaches.

**Jon Calhoun:** Yeah, the error group approach is definitely much easier, in my experience, if you're just spinning up -- especially if, like you said, you just need to communicate with a couple of web services and get results. It's so easy to use that it's hard to justify trying to throw channels into the mix at that point.

**Rafael Garcia:** I can share one if we have time...

**Jon Calhoun:** We can always make time for an unpopular opinion.

**Rafael Garcia:** Yeah... Mine is "Use the right tool for the job" is usually bad advice. I should explain as well - we use to have this on our job page as something that we think about... But I think the issue I've come to have with this piece of advice is it kind of suggests that for every job you should re-evaluate your whole toolset, when in reality over time you kind of figure out the contours of the jobs that you repetitively do, and then settle on a set of tools that works for you and the team.

I think there's probably more truth to that advice when you're early on, building a team, understanding what are those types of jobs that you're gonna be doing a lot of... But once you've settled on a strategy that works for building HTTP web services that have OpenAPI definitions, you get a lot more benefit investing in that strategy and the tools that support it, than reevaluating and changing that every year. That's my unpopular opinion, I guess...

**Jon Calhoun:** It's interesting that you bring that up, because at least in theory sometimes some engineers will view this microservices architecture and think "Oh, one of the benefits is that we can write each service in whatever language is best for it..." But in practice, what I've found is basically what you said, that most companies settle on maybe 2-3 languages that they use. And going beyond that, there might be one that's perfect for the job, but introducing a new language - there's a big cost to that for the entire company, to introduce some new language. And while Rust might be great for some specific job, that means that somebody on the team now has to understand Rust for the rest of the life of the company, and that can be an issue... Especially, like you were talking about earlier, if you're deploying something that does get deployed with a bug, and it's a big issue, it's like "Um, we don't have time to figure this out. We need somebody who knows what's going on."

**Rafael Garcia:** \[56:05\] Yeah, jumping from service to service and not being surprised by what you find is huge for productivity. And as you invest in tooling to support these approaches, you realize to introduce a new language or something you have to build all of that again... So the bar gets higher and higher, in some ways, as you get better with that particular set of tools. It's an interesting thing to think about.

We've introduced new tools. I don't think this is saying "Oh, we use Go for everything." For example, Nathan has been doing some Spark stuff recently, and Go has been not great for that, so now we're not using Go for that, and we're introducing some new tools to do this large-scale data processing. But for the bread and butter services that we run, the toolset is kind of settled and we just kind of keep improving it and making it better.

**Jon Calhoun:** Would you say that's also why -- I got the impression from what you're saying that pretty much everything you have is running on AWS. You don't use other cloud providers. Would you say that's another reason why you kind of stick with just one, is that it's the ecosystem that works for your stuff, so even if somebody has a database or something that's perfect for a project, it's just too much to add something new?

**Rafael Garcia:** Yeah, I think database selection is a big thing to think about... Because you can try and think "Okay, this problem I'm solving is perfectly--" You can make a case, I would argue, probably for any database. "This database is perfectly tailored for this job." But the vast majority of the time you're gonna spend with that database is having it running in production and operating it, and then thinking about scale, and if issues arise... And all of those things require tooling, experience, investment of time and effort in understanding how to run that thing at scale... And once you've climbed that learning curve, that's a lot of work that you should cash in on, and needlessly rewind the clock and start it over, unless there's a really compelling reason to do that.

**Jon Calhoun:** I think that makes sense. To me, "Use the right tool for the job" sounds like the kind of advice that -- it's almost like advice that isn't actionable I guess is the way I would put it. It's like telling somebody "Oh, don't do this", but then never actually giving them an alternative... And it's like, well, it seems like you're giving good advice, but if you don't tell them alternative options, they're kind of stuck. They don't know how to proceed at that point. So that's probably my biggest issue with that type of advice... People do better when you give them something actionable.

One of those that came up all the time was... I don't know if you've ever looked at -- when people build web services, sometimes they'll throw things like the user and other things in a context, with middleware, and then it's available whenever you're inside of the actual handler. And other people will say "Don't do that", but then they won't say what a good option is otherwise, so it's like "Well, what do I do now? What's a good option?" And I think that's where a lot of people struggle, is that they need somebody to show them good suggestions for other ways to approach it, otherwise it's just really hard to take the advice and use it.

**Nathan Leiby:** It feels like it comes full circle a little to me, too... It's like, "How do you choose to move to Go?" "Well, just go with the right tool for the job...?" \[laughter\] Maybe what's making me think is that that advice almost talks more like a trajectory you wanna go. You're like, "Yeah, we wanna invest more in this area", but in any given short-term thing it's not worth it, so you've gotta maybe think a little bit bigger about what the right tools for the job are.

**Jon Calhoun:** Yeah, that definitely makes sense... And how big is Clever at this point?

**Rafael Garcia:** Usage-wise we have over 20 million active users on the platform. And then company-wise, this year we'll be at around 200 people and 60 engineers.

**Jon Calhoun:** Okay. So you're definitely hitting that point where changing things up too much can be very challenging... Whereas if you're a two-person team, it's pretty easy to throw something new in there when it's just two people.

**Rafael Garcia:** Right.

**Jon Calhoun:** Alright. Well, thank you both for joining, it was great having you on the show.

**Nathan Leiby:** Thanks, Jon.

**Rafael Garcia:** Yeah, Thanks.

**Jon Calhoun:** And thanks everybody for listening.
