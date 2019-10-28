**Mat Ryer:** Okay, welcome to Go Time. I'm Mat Ryer. Today we're gonna be talking about APIs - the good, the bad and the ugly. We're gonna look at what makes a good API, and what are some challenges of those of us building APIs, and what about any sort of common things we might wanna avoid, or gotchas to look out for - we'll have it all today.

Let me tell you this - this morning, on my walk, I passed a canal, and in that canal there was a bag; I didn't know what it was, I opened it up - three lovely gophers in there. I took them home, I've nurtured them back to health, and they've joined me today. I'm joined by Mark Bates, Jaana B. Dogan and Johnny Boursiquot. Hello!

**Mark Bates:** Have you been drinking? \[laughter\] I know it's late in the evening over there, Mat, but...

**Mat Ryer:** Exactly. This show would be completely different if we did it at a different time.

**Mark Bates:** Right.

**Mat Ryer:** So before we get started, I think we should talk about what we mean by an API, because there's lots of things -- I mean, anything really is an API where there's machines speaking... But we're gonna have to narrow the scope a little bit. I propose we talk about particularly in Go - packages and what's exported from a package. For anybody that doesn't know about Go (perhaps you're new to Go), you use a capital letter on the names of things to export it from the package. And if it's exported, it means it can be seen from the outside, so it becomes part of the API.

Also, when I talked about this on Twitter earlier, a lot of people were talking about web APIs. Web APIs are a very common form of API, so I think we can also include those too, if they come up. And I'm sure they will. But let me go to Johnny first - Johnny, tell me, what makes a good API, do you think?

**Johnny Boursiquot:** Well, there are lots of ways to answer that, depending on basically who the stakeholder is, but... If we're talking as a consumer of an API, typically what I look for is basically a clarity of purpose - is this thing doing what I expect it to do, how I expect it to do it? I'm also looking for usage documentation. In case of a web API, not just endpoints, inputs and outputs, but really, how do I make use of this if maybe I'm new to the domain, and maybe I'm just wrapping my head around what it is that I can do with this thing; what can I see as usage documentation, examples of how this API is utilized?

\[00:04:06.20\] Lastly, I like a stable API, both from a functionality standpoint -- I don't want once I've integrated the API into my wares for it to be changing under my feet... But I'm also looking for stability in the operation of the API - how stable is it? If it's an external API, do I need to put safeguards in place for it if it goes down, or something like that. So there are different elements that make a good, reliable and stable API.

**Mat Ryer:** If you're looking at a Go package that you're gonna use in a project, what sort of things do you care about when you look at that package? Is it the same sorts of things, around -- it has to be very clear how I'm gonna use it, same kind of thing?

**Johnny Boursiquot:** Same kind of thing - clarity, usage, having some examples... And the Go standard library has a lot of good examples on how to use things. If you look at the fmt package, for example, you'll see lots of examples of how to use the exported functions... Although in some cases there are some functions I talk about -- for example, you might see a mention of "Well, this is how you might use the formatting verbs. This is just like C." Well, if you don't know C, that may sound a little weird; that's some assumptions that the creators of the language have made, that you're coming from a background perhaps of C, but don't let that scare you away. But there are some good examples on good usage, sort of how to make use of those APIs in there...

And also, the same concern for stability, which is one of the things I love about the Go ethos - we don't really change things that you've come to rely on; when you build production-grade software with a Go standard library, things are not gonna shift right under your feet with the next update or the next upgrade of the language. That's a backward-compatibility promise. Now, we might see some things change in the next version of Go, but all these same elements (clarity, usage, stability) are core to the Go community and to how we build packages.

**Mat Ryer:** Yeah, it's funny, isn't it - backwards compatibility, the Go promise... They say that anything that worked when compiled in v1 will continue to work. That really helps people invest in the technology, I think, but actually from a design point of view it's a very difficult thing to do, because sometimes as you're designing an API, usually at the beginning you have the least information about it. You're sort of imagining what this is gonna be, so it's a challenge, isn't it, for those building APIs, to think of "We want this to be this for a long time, so that people can depend on it." That definitely was a primary concern of ours when we were building Machine Box. We didn't want these things to just break with every major version, because that's just a major pain for developers.

**Jaana B. Dogan (JBD):** Yeah, especially if you don't know much about the domain. As an API designer, I think you also learn more about the domain as you design more... And you always feel like you are behind; you always feel like if you start from scratch, you will be able to come up with a better design, and it's the most challenging part of API design.

Do you have any particular approach to achieve a stable API? For example, for me it's more like starting with something alpha, or version 0, running some experiments, making sure that I actually have real users... Then listening to feedback, iterating a bit, and then trying to cut more of like a stable API, and try to freeze the API entirely, so anybody can depend on it. Do you have any particular process in terms of figuring out what the stable API is going to look like?

**Mat Ryer:** Yeah, so for me - me and David (David Hernandez was my partner at Machine Box), we basically got obsessed with taking features out, and only delivering the so simple API... So simple that people think it's not enough. That was the idea. We wanted people to look at the API and think "Well, this is almost like a beta API anyway." So we got obsessed with that, of just stripping everything out and only having the very core things. That's one way to do it.

\[00:08:07.29\] Then another trick we've used which works is to always have the tests around for version 1. You could even have them literally, physically, somewhere else as well, so that you have a test suite that protected your version 1 API. As long as all those tests still pass, provided they were what described the API in the first place, then you know you haven't broken it and code will continue to work.

**Jaana B. Dogan (JBD):** It's also behavior-wise providing some compatibility because you're testing things, right? I think the hardest part of API design is also providing some compatibility in terms of behavior as well. I mean, we just feel like we are more flexible in terms of breaking behavior, but at the end of the day it's also the most challenging part of design, not to break the behavior for a long time.

**Mat Ryer:** Yeah, I supposed it's the common problem - you do have to do some design in the beginning, but that's almost the worst time to do it. Mark Bates.

**Johnny Boursiquot:** Yeah, Mark has been quiet. I actually do have a follow-up question for you, Mark, especially because obviously you have a framework that's becoming more and more popular, and a lot of people basically rely and depend on it, so you have to have good APIs. But before we get to that, the one thing -- as we were talking, it just sort of hit me... We seem to have sort of a higher bar for APIs that we know are gonna be exposed to the outside world than we do for APIs that are used internally, by our teams.

I know for some of the teams I worked on, basically when we know this API is not gonna see the light of day; it's gonna be internal, it's proprietary software, maybe it's something that is providing business value and it's proprietary - you tend to be a little bit more lax on the documentation, because you expect your team is just gonna have to go in there and look at the code and figure out how this thing works, right?

So these things I've sort of enumerated before as being key points or key aspects of a good API - it's almost like we don't look at those things, we don't apply those things as stringently on internal APIs. I'm wondering if anybody on the call here feels like that's true for them as well.

**Mark Bates:** I think it's true for everybody... Because we can make a bunch of assumptions when it's a private API. You can look and say "There's four people who are gonna be using this", and you can have much stronger, concrete types, and do different things than what you'd give to somebody who might have a very different business agenda than what your business does. And when they're private APIs, you don't feel so bad ripping them out and rebuilding them if you need to, because again, you're only usually inconveniencing a few people, and even then it's probably easy enough to fix in those situations. Public APIs are a very different beast, I think.

**Mat Ryer:** Mark, what version is Buffalo currently at?

**Mark Bates:** 0.14.2, and I think we're releasing .3 tomorrow.

**Johnny Boursiquot:** And how long has it been around?

**Mark Bates:** It's been around for a couple years.

**Mat Ryer:** And what's interesting about that is it doesn't start with a 1. You haven't released version 1 of Buffalo yet.

**Mark Bates:** Yeah. I don't think it's ready to be version 1 yet. In that particular case, I think there's still a lot of work that needs to be done in a bunch of places; not just the library APIs, but just some of the features and compatibility with other systems that we want to make sure are in there. We're still trying to figure that out. Google App Engine was a big one, but that's kind of gone away, so I think we just need more of a how-to guide to check that one off the list...

But you know, the way I build my APIs - and I was having this conversation with somebody yesterday on Slack - is I actually think the best APIs are those consumed by the person writing them just constantly. They said to me "Oh, somebody who dogfoods their own stuff as much as you do..." and I'm like "Well, I wrote it because I needed it, so yeah, I'm gonna dogfood it..." And by doing that, what happens is you start working away those rough edges.

\[00:11:57.03\] I think what Mat said - he started with something really small, and that's usually how I do it. I kind of do a combination of what JBD does and what Mat was talking about, which is I often just kind of play around, scrappy files, and hack away at something until I feel "Okay, I understand the domain now."

A good example of that, a couple weeks I used JBD's Mini package to write some transport controls for logic, and it was a lot of hacking around just trying to figure out how to make it work, how to talk to logic... And once I do that, then I can refactor that into something that's a lot more user-friendly, serviceable, testable, that sort of stuff. I don't ever go straight for "I'm gonna design the perfect API", because it never works. I don't think I've ever sat down and designed a perfect API.

What I try to do is, like I said, I try to understand the problem domain, know the problem I'm trying to solve, and then I try to write APIs that hit the 80% use case. So you can do 80% of what you need to do in just a couple lines of code. But I like to make sure that you have all the underlying support to do that other 20%, but you're gonna have to wire it up manually.

What I find is when I'm dogfooding, I'll have that 80%, but I'll see another thing now that becomes a thorn in my side, because it's not as smooth a process, and that's when I wrap that in an API, to make that a one or two-liner. And you know, I just keep sanding those rough edges off.

**Mat Ryer:** You've hit on something else there, which is that dogfooding is the process of trying to use the thing you're building, so that you get familiar with what it is you're building. You're doing what's really even better than that, which is you're building the things you need, and that's my advice to anyone that wants to start to create a Go package, or to do an open source project - build something that you need... Because trying to imagine something that someone else might need - it really doesn't matter how good at imagining software you are.

**Mark Bates:** Yeah, it's like a business. You can sit down and brainstorm, "Oh, I think there could be a business in this, Twitter for dogs", but it's like, "Does anybody actually need Twitter for dogs?" Write what you know. It's the same thing for writing. You're always told, "Write what you know." The same thing goes for software, "Write what you know. Write the things you need." Find the holes that are in your life -- you know, Brian Ketelsen is always commenting about my tooling, and it's because I'm writing tooling that I use every single day to solve a very specific problem, whether it be releasing stuff, packing stuff, web frameworks, whatever it is; I'm writing things that I need today, not some pie in the sky idea of what I'll need tomorrow.

If I hadn't taken that approach with Buffalo, I think it wouldn't have grown the way it's been growing. I think people would have looked at it and went "No, that's just like all the other imagined frameworks I've seen out there."

**Jaana B. Dogan (JBD):** I think the biggest problem is bad design is coming from people who never use their stuff, because there's a developer product side. I personally worked for developer products all through my entire life; I've worked for larger companies, and we usually have like "Hey, we're going to build this product", we just don't really understand what is going on, and we over-assume some of the priorities, and design, and so on. And I ended up seeing lots of engineers that didn't really use whatever they are building, because it's not necessarily some requirement in their day-to-day lives. And since they are so clueless about what does the big picture look like, how usable it is and so on, you usually end up having all these big gaps, usability problems, design problems. It's the most ideal that you actually build something that you need... But it's also hard to scale, because at some point you need to have a big team or 5-10 people to maintain an infrastructure thing, and it becomes a job on its own to maintain that; people primarily working on it are not using it, so it's sometimes challenging...

**Mark Bates:** \[00:16:07.25\] It's always challenging. I see that all the time. You get PRs or issues in, people say "I need this thing, and I need it to be done." The one I always feel bad for is those to write a PR to solve a problem they have, that is either a) solved already, or b) is not necessarily a problem that should be solved by whatever they're contributing to... And if they'd opened an issue earlier, they would have gotten that feedback earlier.

But it's hard - when you're a package maintainer or an API maintainer, you really have to keep looking at every PR and enhancement that comes into your project, you have to really look at it and say "How is this going to affect my users of this API? How are they going to work with it? Is it something that can be worked on and extended later? Is this API too strict?"

We see that a lot, where it's very one-way, and it's very hard-coded to a particular type, for example, or whatever... And you have to make those decisions. And it's tough to tell somebody who just did a bunch of work, "Sorry, but this doesn't fit with the ethos of the package, or the tool."

**Jaana B. Dogan (JBD):** Yeah. For me it's the hardest to say "Hey, this doesn't have to be in the core. It could be an extension. You can just maintain it somewhere else. It's kind of like a utility." If I keep hearing that lots of people need the same type of utility, we usually end up merging it as a utility package, or something... But I try to have some resistance maybe in the first place, not to over-populate the APIs. You just wanna keep things a little bit core, and then gradually, organically grow things, depending on what people want.

**Break:** \[00:17:55.21\]

**Mat Ryer:** We were just talking about the main reason why I have said no to people who have sent in PRs has been because that functionality doesn't really belong, like we talked a little bit about in the last section. It doesn't quite belong there. So one good rule is if the user can easily just do this themselves, they probably should do it, and leave your package with that. If you can do this outside in userland, then at least initially that's what you should encourage. And if lots of people start to do that, then I would say it's a good candidate for being something potentially that the package solves... But how do you decide what belongs in a package or in an API, what belongs there and what doesn't? Are there any rules, or is this more of an art?

**Jaana B. Dogan (JBD):** I actually find it easier in the Go community, because people really like to see a minimal API surface. I think some other language communities have this culture of "Hey, let's have all these batteries-included libraries around. Let's provide all the utilities, all the convenience functions etc."

I think Go, generally speaking, culturally speaking, is a little bit different; people just do not react a lot... But it's really tough. My strategy is usually sometimes analyzing what is on GitHub, and figuring out if people are wrapping it in a specific way, or just keep constantly building some utility convenience functions, I try to propose that we should probably add it to the core APIs. But it requires some time. I'm trying to not jump on that utility stuff early in the days. For a small API, for example, I'm giving it some time, like a few months, watching how people are using the API, and then just come back and suggest some improvements.

**Mat Ryer:** So you actually look at real users that are using your API.

**Jaana B. Dogan (JBD):** Yeah, and I try to actually talk to some of the users, because not everything is on GitHub, or not everything is open source, or not everybody is -- you don't have much accessibility to all the code using your stuff... So I try to ping a few people; if they have time or are interested, they are usually giving me more of like "These are the high-level use cases we have. It would be so much easier if you can just jump on these cases and make it more easy." That's the sort of feedback I'm looking for.

**Mark Bates:** Yeah, I do the same thing, but I troll through the issues on the projects, or blog posts, or Twitter comments, or Slack, whatever... And I might not respond to all of them, but just understanding how people are using the packages is super-critical to understanding whether something needs to be added, taken away or changed in your package.

**Jaana B. Dogan (JBD):** I've also seen lots of good feedback coming from Stack Overflow. I sometimes would go through the questions and see what people are trying to achieve and what is there. We never mentioned, but a good API design is not just about having usable stuff, it's also designing an API that is hard to misuse. So if I'm seeing lots of misusage, or confusion around some cases, that's what I would do - go back and either make things clear, or redesign, or just add some new utilities to change the entry points of the API.

**Mark Bates:** Right, yeah. Same exact thing. And to harken back to what you said earlier, JDB, about an external package or plugin - I think that's a super-important thing that I don't think a lot of people think of... And Mat was kind of saying it, too - if you can do it externally, you probably should. I know I do that a lot; I'll write a lot of third-party packages for my own stuff, as a way of just trying something out and seeing if it's even a tool that I want or need. If I have a problem, I'll go "Let me write a small package", maybe have some middleware, or whatever it is I need for my app, and try it; if it's good, then I can publish it. If it's not, then I can rebuild it, and try to understand... I would love to see more people do that with the packages they're using, try to build the extensions outside of the actual core of whatever package they're trying to use... Because most of the time that stuff can be a singular focus, where just that company really needs that piece. They can still publish the open source part of it if they want to, but it's a great way to try to figure out whether that even needs to be in it.

\[00:24:22.26\] DHH does this with Rails a lot. He writes gems for features that he thinks might end up in Rails later. Of course, he just ends up pushing them all into Rails regardless, but I like that approach of "Let me try this as a plugin or an extension, or a third-party package that sits on top of it all", and maybe I use embedding or something like that to enhance those APIs that I'm trying to wrap. But just a nice way of understanding the process and not cluttering your main API.

**Mat Ryer:** And TDD really helps in Go with that. You can even put the test code in a different package, and if you do that, I use just a different package name in the same folder... If you do that, you then have to access your package using the dot notation and importing your package as you would. So it's a good way to catch any kind of stuttering in the naming. You might have brewer.brewt, when really that's kind of redundant; you could just have brewer.t. But of course, when you're designing the package, you think "Oh, this package is gonna brew-t, so the function is gonna be called brew-t." That totally makes sense. But having the test code externally, that's quite a nice little trick, just to get an idea of the API footprint that you're creating, and getting an idea of that design from the beginning.

**Mark Bates:** Well, your tests tell you so much about your code, too. If you can't test it, if you're struggling to test that 80% use case - which for me is kind of like my thing; 80% of the time it should just be a few lines, and super-easy to do. If I can't test that easily, then there's a problem with that API... Because if I can't test it and I'm the designer of the API, then people using it can't test either.

**Jaana B. Dogan (JBD):** Yeah, I think that's a design approach that we've been using for a long time. We would just design the API surface without implementing anything, and then write the test (an example test; there's no behavior). People on the pull request would just talk about the design, and since they have some concrete usage example, we would find consensus on that minimal API work, and then kept working on the rest of the stuff. This is basically how I bootstrap new package - just designing the API surface, just showing the snippet. It's a good protocol.

**Mark Bates:** Yeah, I do that... I'll take a scrap file and just start coding up what I think might be the way I wanna interact with my software; and that's just sub-methods or just code that doesn't even compile... Just, "This is how I think I want to approach this problem, and think about it and rationalize it without any real code behind it."

**Mat Ryer:** Yeah, that's how I do it, but I do that with tests... But it's the same spirit, though. These tests aren't gonna stick around; I am exploring. But it is such a nice way... You're just being the user. It's what we've all talked about and mentioned, "Know your audience and build for a purpose", and this all just helps with that, for sure.

**Johnny Boursiquot:** One set of things I think in a lot of ways are very pronounced, the need for them are more pronounced with internal teams and software that doesn't end up being open source, and basically being subjected to that level of feedback that we've all been talking about - you know, when you're in an internal team, you still have to factor in a lot of these good practices that we've been talking about... But from my experience, what I've seen is that when you are tasked with developing an API for internal consumption, it's so easy to start throwing the kitchen sink at it. "These are all the things that might be needed..." You're giving a spec and you know what it is you're supposed to build, but that too requires some sort of iteration; that too requires that you do maybe some readme during development, you share that with the team, get some feedback on that...

\[00:28:21.00\] But I think the one way to always ensure that you're never exposing too much - because once it's out there, it's hard to take it back - is to make judicious use of the internal package. Basically, keeping as much internal as possible before you start exposing things in the rest of your package. Because you have a lot more flexibility and being able to refactor things inside of that internal package.

For those who are new to Go, basically the Go toolchain understands that pretty much if you have an internal folder and you have a package in there, anything in there basically is allowed to reference other things that are in there. But if you're importing that package, as a user of that package you cannot get access to the things that are internal. Using that mechanism -- and this is something I wish I saw more in open source code out there... Basically, keeping as much hidden from external consumption as possible until you're ready and you're sure that whatever it is you're gonna expose is indeed needed and is gonna be relied upon.

**Jaana B. Dogan (JBD):** I had this crazy idea that we should always start with internal packages and everything should be internally, and then we should replicate some parts in the public API... Organizational-wise, I think it's also giving you some more flexibility to repeat the API, but it's a little bit too much probably... But I really like the idea to put a lot of things in the internal, and be very careful about what you're exposing.

**Mark Bates:** I like to start with almost all private, non-exported things, and then turn them on as I need to. When I'm trying to write tests maybe through like a black box testing, go "Okay, I obviously need an entry point here. Let me expose the entry point now. Let me expose this thing that I need obviously when I'm writing my test." And figuring out those things as I go, and trying to see how much of it I can keep unexported. Because like Johnny said, I can turn those on later if needed, but what I can't do is turn them off later; not easily anyway.

**Mat Ryer:** Yeah, so that's the key lesson then - you don't wanna reveal too much, you don't wanna commit to too much if you care about backwards compatibility; that's more for you to maintain. So that's another reason why keeping the footprints as small as possible pays dividends later.

The other one, of course, is Johnny what you mentioned right at the beginning of this show - clarity. If there's a lot to read, it just takes you longer to read it. That's just maths; times equals -- I've forgotten it. \[laughter\]

**Mark Bates:** Tragedy plus comedy equals time?

**Mat Ryer:** Yeah, that's a lot of my code. A lot of my code follows that pattern. \[laughter\]

**Johnny Boursiquot:** Tragic... Tragic code. \[laughter\]

**Mark Bates:** That's what he meant by TDD, Tragedy-Driven Development. \[laughter\]

**Johnny Boursiquot:** Wow...

**Mat Ryer:** Another interesting story - Jaana, you mentioned how things could potentially be misused... A part of designing it is also realizing that developers are sneaky little so-and-so's, and they will do anything they can to make something work. We know because we're them as well.

**Jaana B. Dogan (JBD):** Totally. It's your responsibility to restrict them. You need to give them the right API services so you limit them in a way that makes sense. You just want them to be productive, and not having to go look for hackarounds, and that type of stuff, or accessing too much more than you promised.

**Mat Ryer:** Yeah. One real-life example I have of this is we had an API that was an ID. The ID field happened to be prefixed with the Unix time. So it was an ID, but also if you knew about that, if you noticed it, you could pull the time out, and then you knew the time that something was created. So people were doing that... And it wasn't part of the spec. The field was called ID. It didn't say "It's got the time in it, so help yourself." So yeah, it got abused, it got misused. And that becomes a problem.

**Jaana B. Dogan (JBD):** \[00:32:16.06\] Yeah... I have this rule - whatever you put out is going to be abused, so you'd better keep it really small.

**Mark Bates:** You know what I love -- I don't know if it's changing the subject or not, but we're talking about APIs, and one of the things, not just the footprint... I like to see consistencies across APIs, too. Anybody who's ever used my stuff knows that I tend to name things similarly. I tend to have the same patterns, the same ways of interacting with the code... And it's not because I just really like those styles, it's because I think consistency is important. If you pick up these packages, they feel comfortable, familiar, and easy to use if you know, say, the companion package.

**Jaana B. Dogan (JBD):** Yeah, and I've seen this mistake... Sometimes people over time figure out better ways to do things, and for example within the same package family they would just switch to this new style, just because they know that it's better... But it's definitely not worth it. You just wanna be consistent; a user understands this pattern, let's keep using it, even though it might not be the most ideal one.

**Mark Bates:** Yeah, it might not be the perfect pattern, but at least it's consistent.

**Jaana B. Dogan (JBD):** Yeah.

**Johnny Boursiquot:** The longer a project tends to go on, the more opportunities for such changes come up, and you have to work really hard, resist the urge to change things mid-way... Unless you have the time and resources to go back and make it all the same. But again, once it's out there, trying to change it becomes extremely difficult.

**Mark Bates:** Yeah, you see that a lot with web APIs in particular, especially legacy ones, where half your API is an XML, and the other half is in JSON, and now they've got a new protobuf one on top... And I'm not knocking XML or JSON or protobuf, but I'm just saying, over years I've seen this happen. I have dealt with many APIs where this particular API set is XML, and the other half of it that I need to use to build whatever is JSON, and now I've gotta work in these two different worlds... Or they're completely different styles. One's more of an RPC, and then they decided to move towards REST, and so you have to interact with them in very different ways.

**Jaana B. Dogan (JBD):** Sometimes it's the maintainer. The maintainer changes, and their personal style takes over. I can easily tell sometimes the style differences between [Brad Fitzpatrick](https://twitter.com/bradfitz) and [Russ Cox](https://twitter.com/_rsc). I don't have to blame; sometimes I'm able to tell, they have different mental models. So you can tell the style of the maintainer, and if someone new takes over the entire project, sometimes you see the new packages are not super-consistent, because the style is different.

**Mark Bates:** Yeah. Personally, if I develop a new style or I feel that what I'm working with is one way of doing it, but now there's a better way, or things have changed in terms of usage and the way that it needs to work, I'll either do the major bump, or create a whole new package. I don't wanna inconvenience people who are still reliant on that package, just because maybe I don't like it anymore the way it's laid out or designed, or whatever. It's like "Well, let's try to migrate you to a better-written package."

That happened with me with Packer, where I moved from v1 to v2, and the v2 API is almost identical to the v1, but with a lot under the hood that changed quite dramatically, and there are some changes even in the public API... But I try to make it as smooth a process to go from one package to another. Unfortunately, I think Go modules makes it slightly difficult to do the major revs right now anyway, but that's for a whole host of other reasons we're not gonna get into today.

**Johnny Boursiquot:** Why? You don't like a /v2 in your package path? \[laughter\]

**Mark Bates:** \[00:35:59.26\] We're not gonna go into this today. \[laughter\]

**Johnny Boursiquot:** Okay... I was trolling, sorry.

**Mark Bates:** I know you were, and I'm not biting. Follow my Twitter feed if you want my real feelings on anything, really. \[laughter\]

**Mat Ryer:** What's your name on Twitter, Mark?

**Mark Bates:** It's [@matryer](https://twitter.com/matryer). That's with one y and one t.

**Mat Ryer:** I wanna get verified if you're trying to spoof my account... \[laughter\] But actually, Mark, you made an interesting point. You talk about if you wanna change something, it has to be a major revision, because if you're keeping the backwards compatibility, you don't wanna break things. That's another argument for having smaller and simpler APIs. It's easier to rewrite. It sounds silly, but it's actually a very sensible and pragmatic reason, I think, why you would select against adding some features, is for the simplicity.

**Mark Bates:** Absolutely. We're working towards moving a lot of stuff out of Buffalo and into plugins for that exact reason. We're trying to slim down the core to be just what it needs to be, and then you pull in the things you want on top of that. No API should really be forcing a whole bunch of stuff on you that you don't want.

**Mat Ryer:** Yeah. Another way to do that in Go is to look for the narrowest interfaces as well. So this is just a very practical thing that I talked about a couple of times with some friends... I made a mistake once where I built an API, and it was gonna read from a file and process the file and return some object. So the input was `os.file`, because that's what I was doing, I was opening a file. Now, that's fine, and in my case it worked, but then when I wanted to support web, I either had to break the API or create a file, save the request body as a file, so it could then use os.file.

Well, if I'd just instead used `io.Reader`, which is a much smaller type, it just has a single method interface - if I'd used that instead, it would have still taken the file, but it would also take the request body (that's a reader), it can take in-memory strings, it can take buffers... Anything. So narrower types for interfaces I think is a good practical piece of advice for Gophers.

**Jaana B. Dogan (JBD):** Yeah, I really like [Dave Cheney's](https://twitter.com/davecheney) typical advice on this - the input needs to be as flexible as possible, and it's better if it's a small interface... But the return type must be a concrete thing, because it can be more expressive. So you're providing that flexibility by making the input types a small interface.

**Mat Ryer:** Yeah, it's a great way to think about it. And it also highlights the fact that it's very common for us to want to return interfaces, because we're optimistic about how this is gonna be used in the future. And also, for testing sometimes you think "I'll return an interface and then we can build a mock version or something else later..." But you really don't need to do it. If a user of your API needs an interface, they can just write their own, and probably it'll be more relevant, it'll be more specific, and it'll have the context in their world.

**Mark Bates:** I don't know if I agree with that always. I agree with it in principle most of the time, but I do think there are definitely valid cases for returning interfaces. Packer is a great example, where the file might be on disk, it might be on memory, it might in a database, it might be on S3... So when you ask Packer for a file, we have to give you an interface, because we really don't know where that's coming from... And that's the easiest way of solving that problem, is to use an interface.

**Mat Ryer:** Yeah. Well, like anything, I feel like there is no piece of advice that fits 100% of the time.

**Mark Bates:** No, I think it's a good 80/20 rule. Returning concrete types is a very good thing to do, I'm not saying it's not. I'm just being devil's advocate and saying there are definitely situations where the interface return makes so much more sense than the other way around, but most of the time I would agree.

**Mat Ryer:** Yeah, but that's a great discussion to have. I've been doing a lot of code reviews lately, over the last week, and a lot of it has been about that. It's been about figuring out whether you've got the design right, really, and then having a discussion around that. And like Jaana mentioned earlier, discussing that stuff around interfaces is very easy, because there's less ambiguity around it... And seeing code is also less ambiguous than even readmes.

**Jaana B. Dogan (JBD):** \[00:40:13.04\] Talking about interfaces, somebody gave me this advice a while ago - try to not introduce a lot of interfaces in Go. Try to utilize what is in the standard library. I think lots of people took that advice, and that's why there's not a lot of fragmentation going on in the library space. You can see that everybody embraced io.Reader. Everything works against those core APIs. I really like that in Go; I like it because we don't have much fragmentation... Because the interfaces are small, and we had this initial culture of not introducing new interfaces, but utilizing what is already there.

**Break:** \[00:40:57.28\]

**Mat Ryer:** So why don't we talk in this last section a bit more about web APIs? HTTP isn't going anywhere, I don't think, and still most people in Go are writing web services like this, like HTTP APIs, and things... So does all this same thinking apply? I feel like it does. Is there anything specific we know about web APIs that we should talk about?

One example is, for backwards compatibility, JSON actually ends up being quite a nice format, because you can add fields to it without breaking most of the Unmarshals. And if an Unmarshal of a JSON - by default the Go one in particular, if it sees fields that it doesn't recognize or that aren't in the struct that it's trying to decode into, then they're just ignored by default. So JSON is actually quite a nice language for this, but really you trade off some type safety a little bit... But you can at least provide --

**Mark Bates:** That's what I was gonna say, JSON is a great format, but the type safety and issues you run into it sometimes are -- especially in a heavily typed language like Go. Ruby was always fine, we never really had those problems, obviously because there's no types, but in Go... You know, I've started a ticket the other day where someone tried to enhance an int implementation by using ParseFloat, because they were getting a float into an int type... And it's like "Well, don't send a float on an int type." But you can do that in JSON... So it's easy to put bad data in your JSON. That's the problem I have with it.

**Mat Ryer:** Yeah. In that particular case it's okay, because the float type in JSON is okay, because it's a more broad type than the int. But when you can send a string--

**Mark Bates:** Yeah, but it was the other way around. It was coming into Go. They were trying to get it into an int in Go, a float. In their database it was an int type, but they were accepting floats from their JSON, and it was like "Well, why don't you not accept floats?" Don't send floats, just sent ints if you need ints; reject it right away. So this is bad data. You've gotta work with the JSON more because of that.

**Mat Ryer:** I'd rather it was strict upfront, rather than create problems later... Because that's the temptation with anything schemaless, I think. We feel like "Oh, we don't have to solve these problems. We can just accept anything, and we'll just stick it into Mongo, we'll stick it into a schemaless data store." But what you really do is just move the problem to later. You still have that problem of knowing what the data is and what to do with it.

**Mark Bates:** \[00:44:14.13\] Right. And again, in a dynamic language like Ruby or Python, where you can get away with that a lot easier, it's fine, and almost welcome, in a lot of ways there... But in a type-safe language like Go, or trying to get stuff into a database from JSON, there's definitely a lot of handholding you've gotta be aware of, and things you've gotta watch out for when you're accepting those payloads.

**Mat Ryer:** Yeah. It's actually rude in Ruby to return the same data twice. It's sort of rude. \[laughter\]

**Mark Bates:** I don't know what that means... \[laughter\]

**Johnny Boursiquot:** So in fairness basically those who are JSON proponents - they did sort of mention, or rather they were excited about a JSON schema, which I believe is a project that's still out there. I'm not sure how often it's used. I think I've used it maybe once or twice a few years ago. It did try to basically provide some structure, some sort of expectation, basically that when your data came in, you could perform some validation based on the schema, and what you expected and didn't expect... So there was an attempt to have some structure around it.

**Mark Bates:** Well, that's what tools like [Swagger](https://swagger.io/) purport to do, right? The problem I have more -- and not that I hate JSON; I use JSON all the time. It's, again, the language - or the notation really, in this case, doesn't support the typing right out of the box, in that strict enforcement. You have to do it yourself, or bring in a third-party layer that sits on top of your app. But there's something the developer has to actively work on, to make sure that that data is sane when it comes in.

**Mat Ryer:** Yeah.

**Johnny Boursiquot:** So then is it protobuf for everybody, or how do we...? \[laughs\]

**Mark Bates:** I don't have an answer... No, absolutely not. I don't have an answer. Just a problem that comes up often for me when I'm working with web, writing JSON APIs, is garbage data coming in. Not garbage, but you know, it's JSON, you can really shove anything you want. The NaN comes in, and how do you deal with NaN - that sort of stuff. \[laughter\] Again, \[unintelligible 00:46:10.26\] but it's happened to all of us; if I could see you and ask you to raise your hand, you'd probably all raise your hand, because you've gotten the NaN come through, right? It just happens, and that's just a downside of a wildly unstructured language, or notation rather.

**Mat Ryer:** That's an especially exciting thing for me to learn, because nan here in England means grandmother, so... \[laughter\] Brilliant to hear you complain about that, Mark. You mentioned Swagger... You see, Swagger - it takes some definition and it generates; it's a big code gen thing. The problem is what it generated is fugly, for who wanted a better term or for the editors, if they'd prefer me to not say that...

**Johnny Boursiquot:** That might be an accurate term, yeah. That might be accurate.

**Mat Ryer:** Yeah, what gets generated is not very attractive, and as a developer, that's the thing - I think whoever designed the outputs for Swagger, they're thinking of APIs as machine interfaces, because ultimately in production they are. It has to be a human that implements it first, and that's your first customer. So I think APIs should be written for humans; they're not really for machines.

**Johnny Boursiquot:** Well... Maybe. \[laughs\] I mean, there are legitimate cases; again, definitely taking into account what you said earlier, about the fact that the rule is not universal. But yeah, there are some cases where you have machine-generated APIs, and you have other machines consuming these APIs based on some pre-defined spec... So it does happen. But yeah, generally speaking, I think you're writing APIs to be consumed by other humans, that are gonna be reading and trying to figure out how it is you want them to use your API... So yeah, it should be readable above else, which again, that extends into the Go ethos - readability over clever tricks, and obfuscated things... So basically just trying to make it as clear as possible to actually use.

**Mat Ryer:** \[00:48:06.25\] Yeah. Almost boring, right? You don't have to be creative in that API design. Like Mark said, when earlier he was talking about being consistent within a project, that also applies across the whole community, and there are patterns that have emerged, that we sort of all like, and we've all kind of rallied around. And they won't be unchanging, they won't make it into the spec or anything, but that becomes part of the culture, and it is around simplicity, like "What's NewMonkey gonna do when I call zoo.newmonkey?"

So yeah, I think there's clues that we can leave, and also - again, simplicity. If your goal is to make it as simple as possible, I think that helps on all of these axes.

**Mark Bates:** Well, can I ask a question to the group? I'm actually very curious to hear this answer, because I think web APIs are a different beast than programmatic package APIs. They're consumed widely different, they're used widely different. I talked about the 80/20 rule earlier, where I try to make my packages work in a way that 80% of the time it's a couple lines and you're done, but the other 20% you can really dig deep into it and do whatever it is you need to do much more manually. How does that translate to web APIs? Do we give everybody a 1-to-1 REST API table to REST? Do we do an 80% API that does most of the common functions with one call, and still offer that almost 1-to-1 table to REST API? What are people's opinions on that?

**Johnny Boursiquot:** Personally, given a choice, I would go for sort of small pieces that I can easily compose, because as a consumer, you the producer may not know how I'm gonna be using your API, unless it's a strictly bounded context, where there's only certain things that are clearly defined, that you can and can't do. But for things that are sort of a bit looser, where you don't quite know how an API is gonna be used, give me the small bits and I'll compose them together into what I need.

That said, this goes squarely against the whole basically "only expose just what you need" kind of thing, but I think there's a balance there. Like we've been saying, there's an 80/20 there that you have to watch out for, and that's something I think comes with experience, and the problem you're trying to solve, the domain you're in, and what your users expect.

**Mark Bates:** Let me actually give a fairly concrete one that I think we can all partly wrap our heads around. Let's imagine a music service. You have albums, you have artists and you have songs. Obviously, an album belongs to an artist and has many songs, an artist has many albums and also has many songs, and so on and so forth... What kind of an API would we build? Maybe I wanna ask this API for an album, and I want to obviously build a nice page around it, that has the artist, that has the songs... Do I make three requests to each REST endpoint, saying "Get me this particular album. Now go to this other API, get me this artist, now go to this other API, get me the songs"? Do I expose those three and the fourth, which is kind of like "Get the album info, which pulls down all that data"? Do I expose that? How do we do about that?

**Johnny Boursiquot:** I'll tell you exactly how you do that...

**Mark Bates:** Right? It's a tricky question, because it's an important design decision. That's the 80 rule, right? 80% of the time you wanna display the album and the artist and the songs, right?

**Johnny Boursiquot:** \[00:51:49.00\] But sometimes you might not, which is why I love things like [GraphQL](https://graphql.org/), for example, which gives you the flexibility to be able to ask for some things and not others, because sometimes you just want some things and not others, right? So rather than you trying to guess ahead of time what the common usage pattern is gonna be, you provide the flexibility for somebody to ask just for what they want.

**Mark Bates:** That's great. Can you write all my GraphQL APIs, please?

**Johnny Boursiquot:** Sure.

**Mark Bates:** Sure... \[laughs\] I'm gonna take you up on that.

**Mat Ryer:** So now, Mark, that's your technical support for free. Good work there.

**Mark Bates:** Fabulous.

**Mat Ryer:** Now, it's a good point...

**Mark Bates:** You know, I was trying to use an example... I think it's a tough thing to ask, because you overload people, they have to keep making 100 API calls to build one page, or do you give them that flexibility and also give them the 80% API, where they only have to make a couple API calls to build the same type of page.

**Mat Ryer:** Yeah, and I think it comes back to knowing your customer and knowing your audience, because it depends on what they want to build. They might well want to build the more granulated experience, or perhaps they're doing things that you didn't even dream of in that API, which is more likely to be the case, and probably things you don't approve of, if you've given me an API key... \[laughter\]

**Jaana B. Dogan (JBD):** Or you don't want them to scrape your entire dataset, or something... \[laughter\]

**Mark Bates:** Right. But see, there you go - that's another valuable piece of information when you're building an API, is "How much information do you give away in your API?" It's another great point, JBD.

**Mat Ryer:** Yeah. And the answer is, again, as little as possible... Because again, you protect from all kinds of different things. Not really about -- I mean, I assume that people aren't gonna come and just steal the data; that's quite naive... I don't work in security. Other people do, and I thank them for it... But I would say you would almost defer that decision; build whatever you need to make your thing work, and wait for there to be API customers, if you can, because they're the ones that are gonna know how they need it, and that's then the good time to let the thing evolve and grow, and be designed. But that's a great example, because I bet all of our listeners have had almost that exact kind of example before.

**Mark Bates:** It's one of those things where you've got multiple data; to really see a full picture of something, you need multiple inputs, and do you build an endpoint that consolidates those multiple endpoints, or do you give them those multiple endpoints it may have to consolidate?

**Mat Ryer:** And if you don't know anything about your users, you kind of have to do everything. That's the idea behind being obsessed with knowing who the user is gonna be before you even do it...

**Mark Bates:** Right.

**Mat Ryer:** Because otherwise you'd have to just do the most granular level, probably, if you don't know anything about the users.

**Mark Bates:** Right. And roll up the common usage patterns later.

**Mat Ryer:** Yeah, because that'll either emerge, or -- if it's successful, people will be knocking on your door for it. The other thing is as well sometimes it's more efficient -- sometimes we'll optimize for efficiency, but we will lose some clarity, as well. I think that has to come into it as well. It's an art form for sure, designing this stuff... It's a shame we can't just come on the podcast and say "Here's a list of ten things that you should do, and here's a list of ten things you shouldn't do." It really isn't as simple as that, which is why we have jobs. \[laughter\]

**Johnny Boursiquot:** Me like jobs... I don't know about you.

**Mark Bates:** Speak for yourself.

**Mat Ryer:** Yeah, Mark, what's your job now?

**Mark Bates:** Oh, is it time to wrap up?

**Mat Ryer:** No, I'm just asking you what your job is. \[laughter\]

**Mark Bates:** My job is to help train the next generation of Go developers, and to help bring more people into the Go community.

**Johnny Boursiquot:** Hey, that's my line!

**Mat Ryer:** Yes, in Buffalo.

**Mark Bates:** Do you like that? Yeah...

**Mat Ryer:** Johnny... Where do you work, Johnny?

**Johnny Boursiquot:** Myself? I kind of do similar things to what Mr. Bates over here mentioned... But I do have a day job where I work for a non-profit, doing things that have a really meaningful impact on the life of students in under-served communities.

**Mat Ryer:** Wow, that sounds awesome. What's the name of it?

**Johnny Boursiquot:** \[00:56:03.29\] They're called [The Achievement Network](https://www.achievementnetwork.org/). And actually, now that we're talking about it, they are -- although I'm not gonna mention them too much during my upcoming talk... They are in part the subject of my keynote that's happening for GothamGo this week.

**Jaana B. Dogan (JBD):** Oh, wow.

**Johnny Boursiquot:** So yeah, I do hope to see at least some of you at [GothamGo](http://gothamgo.com/) this year. It's an awesome conference; I always love going there every year.

**Mark Bates:** I might be there... \[laughter\]

**Johnny Boursiquot:** Yeah, Mark might be there.

**Mark Bates:** I'll try to attend.

**Mat Ryer:** It is a great conference there, for anyone in that area... It's probably gonna be too late by the time this goes out, but look for next year. GothamGo. It's a single track, you're all in one room, which I think is a great experience. You all get the same experience. And this conference always has a great sense of humor. I love it.

**Mark Bates:** It's probably the funnest conferences I go to. I just love it. It's about 150 people. It's super small, and the audience is right there, the speakers are right there, we play games, we talk, we laugh, we joke... It's not uncommon to see some idiot dressed up as Batman or a Mexican wrestler on stage... You never know what's gonna happen at GothamGo, so I do think it is a fantastic little conference. No slight to all the other conferences, but it is one of my favorites.

**Jaana B. Dogan (JBD):** I think your last year's performance about 2.0 features was amazing. I've never seen anything like that. You were super self-conscious about it, but it was amazing. I still have recordings and I still keep playing it once in a while.

**Mark Bates:** Oh, God... Evidence. \[laughter\] Yeah, I was kind of hoping that that would fade into oblivion, but I don't think that that's gonna happen.

**Johnny Boursiquot:** It's on the internet, man. You can't get rid of it.

**Mark Bates:** Well, this year I promise you it's going to be even better.

**Johnny Boursiquot:** Oh, boy.

**Mark Bates:** We've got some things planned that are going to really shake up the conference scene as we know it.

**Johnny Boursiquot:** Wow.

**Jaana B. Dogan (JBD):** Do you remember the first year?

**Mark Bates:** I wasn't a host the first year. The first year it was just Gray hosting. He's really the person who does all the hard work, [Gray Herter](https://twitter.com/grayherter), and I actually just wanna give him a quick shout-out... Because he runs a bunch of conferences - CapitalGo, JS Nation and a few other things - and he just does so much hard work for that conference.

**Johnny Boursiquot:** True.

**Mark Bates:** And then Steve and I usually get up there and do our shtick for the day and everybody thanks us, and they really shouldn't; they should be thanking Gray and his family.

**Johnny Boursiquot:** Indeed.

**Mat Ryer:** And he's got an awesome name as well. His name is Gray Herter, right?

**Mark Bates:** Yeah. He's a great guy, and it's a family operation; his wife and his mother-in-law sit at the front check-in desk, checking everybody in... It's so much fun, it's such a nice conference, such a great vibe.

**Johnny Boursiquot:** Yeah. They're awesome people.

**Mat Ryer:** Well, I hope they're adequately paid. Cool. So I think that we've learned a lot today on our journey of discussing APIs... In particular some things stood out - clarity was something, Johnny, you mentioned very early, as being an important thing. I think you're right. As a developer, you want to be able to consume an API very quickly; you wanna use the service, whatever it is you're gonna use. You're really playing with it in the beginning, so you want to be able to play with it very easily, and that means it has to be simple and easy to implement. And of course, that minimalism also helps for maintaining that API. You've made fewer promises, so there's less you have to keep in the future, and it allows you to change internals without disrupting people too much.

I think consistency as well, and being obvious. And from an API point of view, if you're the same as other people, and the same within your own set of services, that familiarity is gonna really help when it comes to consuming those APIs, too.

I think it's been an excellent show. I've learned a lot. Has everybody else learned a lot? Not just about things Mark said, but lots of things, too.

**Mark Bates:** No one learned anything from what I said... \[laughter\] That's just a gimmick.

**Mat Ryer:** JBD, you work at Google, don't you?

**Jaana B. Dogan (JBD):** I do. It's a small shop... \[laughter\] We use Go from time to time, right?

**Mark Bates:** I've heard good things. I think they're growing, I'm impressed.

**Jaana B. Dogan (JBD):** We're growing, yeah.

**Mark Bates:** Small Mountain View startup. I think they've got some wings.

**Mat Ryer:** Don't go as hard on the tails though..

**Jaana B. Dogan (JBD):** Yeah, we're keeping it humble.

**Mat Ryer:** So what is it you do? What's a typical day for you?

**Jaana B. Dogan (JBD):** I work on some of our monitoring stack, some of the performance tools. My team is actually working both on internal and external products. We have lots of instrumentation libraries, debugging tools, and more generally monitoring metric collection type of back-ends that we collaborate with internally. Our instrumentation library is linked into every production binary at Google, so it's kind of like a big part of the production experience. We kind of help the teams to make sure that they are collecting the right stuff, at the design time they care about observability, and we give them suggestions, and so on.

**Mat Ryer:** That's awesome. I think we'll have to do a future show on that, and what we need to know as gophers, as we build our services too. I think it would be awesome.

Well, that's our show for this week. We'll see you next week!
