**Erik St. Martin:** It's Go Time! A weekly podcast where we discuss interesting topics around the Go programming language, the community and everything in between. If you currently write Go or aspire to, this is the show for you.

Alright everybody, welcome back for another episode of Go Time. It is episode number 7. Today we have Brian Ketelsen here with us. Say hello, Brian.

**Brian Ketelsen:** Hello.

**Erik St. Martin:** And Carlisia Campos is also here.

**Carlisia Pinto:** Glad to be here, hi everybody.

**Erik St. Martin:** And we also have a special guest here with us, Raphael Simon, who is the creator of a framework called Goa for generating APIs, which Brian is particularly excited about.

**Raphael Simon:** Hello.

**Erik St. Martin:** You want to give us a little bit of background, Raphael?

**Raphael Simon:** Sure, yeah. So let's start with my who am I. So I'm a platform architect at [RightScale](www.rightscale.com). RightScale is a crowd-management platform. I've been working there for almost eight years. When I started, the whole product was basically a single-raise app, and the platform has grown a lot since then. The last time I counted there were about 52 different services running in production, running on about a thousand VM. So I've helped design, develop and debug a lot of them.

Part of going from this single-raise app to all those distributed services, we felt a lot of pain in having to design API's the right way. What I mean by that is being able to come up with APIs that are consistent and have standards that are enforceable, so that we can come up and say, "Yep, that API looks good. It follows all standards and we'd be able to integrate that service with the rest of the fleet."

As you probably know, once an API is alive it's almost impossible to change it. Once you have customers that start using it or once your internal services rely on it, then that API is gonna be there forever. So it is very important that you spend the time designing it properly.

When we looked at what was available to do that, there just wasn't much. There were a few tools here and there, but nothing that we felt would be enough for us. So we ended up creating a framework at the time, a framework in Ruby called [Praxis](http://praxis-framework.io), that basically allowed you to write the design code and then the framework would leverage the design in runtime.

Going fast forward, RightScale kind of shifted towards Go, and I thought it will be good to see if we could do something like that in Go. To be honest, I wasn't sure initially that will be possible. We played around with a few things, and it took me about a year really to come up with something that started to look like it may work. There two big a-ha moments in that kind of research phase. One was the realization that code generation was the perfect approach for achieving the goal of keeping the design and implementation separate. We were making sure that the design is directly enforced.

\[00:03:51.14\] The second realization was that the design should be written in a DSL, so that the language used to describe the API used the right terms. You want to talk about resources, actions, responses, requests, and you don't want to have to deal with programming language artifacts, so that DSL will have to be a Goa DSL obviously, so that it could be understood right away, and also so that it's still possible to use the legal language when it's needed.

Fast forward a year and a half, I have to say that the result turned out a lot better than I thought it would be, and I think the credit goes to the Go language. The Go language provides a very simple and powerful mechanism to create the DSL. It also has as very good code analysis support, which is essential and a very good code generation package, the template package in particular.

So all of that put together, I think, we end up today with something that is actually very interesting, and we have started using Goa fairly extensively here at RightScale.

**Erik St. Martin:** That's great. So just kind of like a high-level detail... So Goa is a framework for using a kind of DSL that's written in Go to generate HTTP APIs?

**Raphael Simon:** Yeah, exactly. From that design, from that DSL which is Go code... Basically the DSL you can think of it as a lot of package-level functions that you invoke and that are recursive. So you call a top-level function, let's say Core API, and you then embed other function codes in it while you define every single property of the API, like title, description, etc. When you look at it, it's actually not too ugly. You can actually understand it very well and follow what it is trying to do. And from that design, what happens is when you load the design, when you start the process that has that package linked in, because all of the design code lives in global variable, the Go runtime takes care of all of that for you, and you wind up with a lot of in-memory data structures that describe your API. And those are simple, nothing special Go data structures that you can look at, inspect, and use to generate pretty much anything. So it's quite nice, because you start from a language that is easy to use from a human point of view, and you end up with data structures that are very nice to handle from a programmatic point of view.

Goa comes with a few built-in code generation outputs. One is the glue code that bridges the role of an HTTP server with the user-provided handlers, and that code takes care of validating the incoming requests according to the validation rules describing language. It also builds convenient data structures for accessing the request state and writing the response. So you end up with code that you have to write as the user, which is fairly small. You don't have to do all the validation that you usually have to do, and you don't have to bind the request body to some data. All of that is done already. You end up with what is called a context data structure, and that data structure has everything laid out in a way that's very easy for you to access and consume. So your code is very terse and very clean.

The Go agent tool that comes with Goa, which is the code generation tool, also generates a client package and a client tool. That's also been very neat, because one issue is when you create an API, obviously the point is for the API to be consumed, and what tends to happen is that every team consuming the tool will develop their own client, and they will all become out of date and they will all have small discrepancies and things start creeping up, which makes the whole thing more difficult to evolve.

\[00:08:16.23\] So having that being generated automatically means that the team that provides the API also provides the client, and everybody uses that one client, and so it makes everything consistent and helps other teams consume the API.

GoAgent also generates documentation in the form of Swagger and JSON schema so that you can at any point in time share the design to other people that may not be familiar with the Goa DSL. You can use that also to document the API once it's in running production; so all of that makes for a very nice way of developing APIs, and a very efficient way of doing it.

**Erik St. Martin:** So I have two comments. I found Goa in October or November, I guess, of last year and two things struck me immediately when I saw Goa. The first was that the generated code looked hand-written, and I have to commend you for that, because for me, that was the most impressive part of the project; all other code generation facilities I've seen before, it's really clear that it's generated code and it doesn't feel idiomatic, it doesn't feel like Go, it feels like somebody generated some Go code. So having that generated code in Goa looks so handwritten, it was very impressive for me.

**Raphael Simon:** Well, thank you. Yeah, I mean that was definitely a design goal. When I started Goa I was a little bit - not afraid, but I was a bit worried about the reception that the Go community will have, because I know that the Go programmers are very, not picky, but they like the Go code to be idiomatic. They like the code to look a certain way and behave a certain way. I didn't want the generated code to be an issue, basically; I wanted that to be a non-issue. I wanted people to look at it and say, "Yeah, okay. It looks good enough. It's not terrible", so I definitely tried to put some efforts to make that a non-issue for the adoption of Goa.

**Erik St. Martin:** Now, speaking of the kind of idiomatic Go and reception from the community, what's the reception like for the actual DSL itself? Because I've seen the generated code, which I think is highly idiomatic, but I don't know whether the DSL is so much. Do you get a lot of slack about that or are people pretty comfortable with that?

**Raphael Simon:** Yeah, so there has been a few comments on the repo on GitHub of people trying to make it look more like Go, but then I'm always very... I kind of have a hard line, saying "This is not Go, it's a DSL. It's a different language. It's implemented in Go, but it's not Go." So for example one thing that you sort of have to do when use DSL is use .imports, and there are a lot of people who don't like that. And I agree, I don't think that imports are good either. I think if you write Go code, you shouldn't use them and nothing else in Go uses that, but for the purpose of implementing a DSL, that ends up making the whole thing a lot nicer, feel a lot more natural. So there is a little bit of that pushback, but then my response is "Well, this is not Go and I'm not trying for DSL to be idiomatic Go because it's not Go in the first place."

\[00:11:47.03\] You should think about it, some of the target outputs for the DSL is documentation. There is also a JavaScript client that you can generate from that DSL. And in the future there can be pretty easily written to generate clients in other languages. So if the language has to be agnostic, it has to remain independent of any target that it generates, and sure Go is the main target for sure, but still a language should try to remain as agnostic as possible.

**Erik St. Martin:** Right. So people just need to disconnect a little better, right? It's kind of like JRPC; the DSL is essentially the protobufs, and then the generator generates from that, and yours just happens to be...

**Raphael Simon:** Yeah... You see, if you write Swagger then it's completely different from your programming language. It's the same idea.

**Brian Ketelsen:** Well, that leads me to the second thing that I noticed about Goa, which was the approachability of the DSL. I've seen many DSLs in the past... Being a former Ruby developer, everything we did in Ruby was a DSL in one way or another, so seeing a DSL in Goa that was approachable and understandable was really surprising for me. I had seen the test frameworks, which one is it... Ginkgo, Gomega...? One of those that uses a similar approach, and it still just didn't really click with me until I played with Goa, and I really enjoyed the readability factor of the DSL in Goa.

**Raphael Simon:** Thank you. Yeah, that took a while to get right. And actually you mentioned [Ginkgo and Gomega](https://onsi.github.io/ginkgo/) because they were definitely a big inspiration for the Goa DSL. I went through different iterations... In one iteration I was using literal data structures to define a DSL, and it was ugly. I mean, it was really ugly.

I think it clicked once I saw the trick of basically having an anonymous function, being an argument; that's really the trick. Once you see that, once you understand that, then everything kind of falls together. Then it's easy to sort of embed those function calls and make it look like it's just a series of instructions, which is nice. But that took a while.

**Brian Ketelsen:** So what has surprised you most about the explosion of Goa adoption?

**Raphael Simon:** I was very, very impressed by how the Go community and you, especially, really embraced Goa. It was more for sort of personal research, interesting projects, see what could happen... Also with the potential of maybe being used at RightScale but that was about it. And then I guess you stumbled on it and started tweeting about it.

**Brian Ketelsen:** And I wrote a blog post.

**Raphael Simon:** Yeah, you put me into the Slack channel and it's been awesome. I mean, I think there is no way that Goa would be what it is today without that community, without all the input. That's just not code, it's the ideas, the requirements, the numerous bug fixes, I mean... That to me was like waking up in the morning and seeing a PR that fixes a bug I wrote. That's the best thing. I mean, there's no better way to start a day. So I've been very impressed, I'm very grateful and it's been awesome.

**Brian Ketelsen:** So it's only appropriate that we talk about that blog post that I wrote, because on this show we have a habit at the end of every show of talking about the [Free Software Friday](https://opensourcefriday.com) movement that we're trying to portray here, and that was the blog post in... I wanna say it was in November of last year where I mentioned that I had stumbled across Goa and I thought it was just an amazing thing, and I was talking about ways that you could talk to open source programmers and thank them for the work that they do and tell them that you appreciate it. I think I actually even proposed to you, I'm not sure... Oh, I did, yeah. On 17th November, 2015, "I think I wanna marry the guy who wrote Goa." \[laughter\] So I have to apologize if that made you uncomfortable in any way...

**Raphael Simon:** \[00:16:04.05\] No, that made me laugh. That made me have to retrieve my lost Twitter password. \[laughter\] Yeah, I wasn't on Twitter at the time and it was a colleague of mine that saw that tweet and told me about it, and I had a good laugh. It's been great. I really appreciate all the support that you've been giving Goa, and I think again Goa wouldn't be what it is today without all of that support and all the people now participating into the development of it.

**Erik St. Martin:** I know it was probably a few months ago, but you went to a refactoring to kind of support pluggable... To create kind of plugins for stuff, because I know Brian ended up going to and creating a plugin for ORM integration.

**Raphael Simon:** Yeah, I think Goa may have caused Brian to kind of rewrite the same thing seven times in a row, or something like that... \[laughter\] So sorry about that. But yeah, I mean, it was basically an exercise of trying to make it possible for plugins to be added to Goa at the same time that the big plugin that Brian was developing was being developed, right. So Brian wrote this amazing plugin called [Gorma](https://github.com/goadesign/gorma) which allows you to define models in DSL. Now you can not only define your API shapes, but you can also define the database models. From that Gorma generates code that will instantiate those models from request buddies and then create response buddies from the model, so it makes it very easy to have a full stack in a few minutes, so it's awesome.

But yeah, I was working on trying to make plugins work in Goa in the same times that Brian was working on Gorma, so I must have brought on program Gorma maybe 200 times, or something like that.

**Brian Ketelsen:** It was sure a fun process though, it's okay.

**Raphael Simon:** Yeah, and I think the end result is nice. I think anybody that now writes a plugin for Goa has to thank you. I think that should be the rule.

**Brian Ketelsen:** So what's been the most surprising plugin that you've seen, or the most surprising contribution to Goa?

**Raphael Simon:** I think Gorma is definitely up there. Once you think about it, it's a use case that's really important, I just hadn't thought about it, and once you think, "Oh, yeah, obviously", the next thing you need to do after you get your request is to start it. Well, you're gonna need to talk to some database, and yeah, you could generate code to do that. So I think that has been very interesting, because I hadn't thought about it and it just makes a lot of sense and I think it's very useful.

**Erik St. Martin:** So I guess it's kind of hard to go into detail about the actual DSL itself, because it is all audio based. I mean, we can draw stuff on our own individual whiteboards if we wanted to, \[laughter\] but somehow I don't think that's gonna help the listeners. One thing I would like to talk about though is not everybody is kind of familiar with code generation, so I guess one thought process that constantly comes across people when they first hear the idea is "How do you maintain generated code?" Like, if you were to modify it and you need to regenerate, you know, are you wiping over all the top of your stuff? I'd love to kind of hear you explain what the model is for maintaining your code that's been generated, and if I've got a new version of Goa and wanted to take advantage of some new features or plugins, what does that look like for the code that I had to manually write as part of that API?

**Raphael Simon:** \[00:19:57.18\] Right. So the main idea is you don't. You do not maintain generated code. Basically, you know, regenerated code is generated in its own package and it's cheap code. You don't have to maintain it, you don't have to test it, you don't have to really know the internals of it; you're welcome to look at them and hopefully it's understandable, but you don't have to. All you care about is what it provides to you and how it interfaces with your code.

So one of the code generation principals behind Goa is that user code and generated code never mix. And there is a very clear interface, an explicit... I mean a Go interface - it's a very explicit interface within the two. There's not just one, there's multiple, but the idea is that you have interfaces that are clear between the generated code and the user code. And if you regenerate your code, you shouldn't care.

I mean, basically the idea is if you change your design and you add - let's say you add a new field to a request payload, you regenerate your code, all that means is now your context subject has a new field and you can use it, and you don't have to worry about anything else.

Obviously, there are cases where the interface may break. They may change between different tools, but in that case it should be clear, it should be you moving from 1.0 to 2.0, and you're doing that consciously. It shouldn't be something that is a side effect.

So I've been very careful about that, because in the past I've had experience with CORBA, IDL, MIDL, and it was always really painful whenever the generate code mixed with user code. Because now what do you do? Do you test the whole thing? Do you now own the generated code? Do you need to test it, to maintain it? And then you're running into the issues of lifecycle when you change the source, then you need to change the code... Sometimes some MIDL generators would put markers and comments in your file, and then they would find those markers and change the coding between, and you're not supposed to change that.

So I really wanted to try and avoid running into those issues, and so both the generate code goes into a front package, which you do not touch. Actually, you cannot touch it because the generator or the co-generator will wipe out the entire directory every time. So there is no way that your code is gonna mix with the generate code. And the interface is a Go interface, it's explicit and that's how both codes interact.

**Carlisia Pinto:** So when you say "Don't worry about testing the code that was auto-generated", part of the code was the controllers. So how is your workflow? Do you then go manually write tests for integration, for functionality? I'm not a huge fan of testing, controllers in specific, I'm more a fan of testing integration, but do you then go and write it manually?

**Raphael Simon:** So the controllers that the GoAgent generates, this is code that you own. So there are two kinds of code that GoAgent generates. One is the vast majority of the code; it's things that are living in front packages that you don't worry about. But then there is also this scaffolding code, which is kind of just a bootstrap code to help you get started. It's not something that you're gonna regenerate all the time, it's something that you do once and it helps you quickly compile your service and be able to test it and play with it right away. That code belongs to you. That code you test it and you maintain it like your code. And actually next time you're in GoAgent it won't overwrite those files, and those files live in the main package. So the controller lives in the main package and you test that, you own that. The low-level handlers that get generated by default in the package called App, those are the ones that I'm saying you don't have to maintain, you don't have to worry about.

**Carlisia Pinto:** \[00:24:13.14\] Got it. And I wanted to say too, in prepping for these episodes I watched a talk that Brian Ketelsen gave in Tampa, and it's simply amazing. If you don't know Goa and have any interest at all, the talk is an hour fifteen, but it's so worth it because he shows the functionalities that Goa provides in Gorma and then he shows codes, and pretty much I watched the whole talk and I came away with a very good sense that I understood what Goa does.

And I'll tell you, it was very simple to use. Another thing that I thought was, I come from a Rails background, and I saw a lot of similarities. To me it felt like this could very much be an alternative to Rails if I wanted to do backend app or an API app in Go, except that it didn't abstract away a lot of things. I saw right there what the call was doing, and it was very much under my control, as opposed to just calling abstractions that maybe I knew or maybe I didn't.

**Raphael Simon:** Yeah, there is definitely some similarities in the way that you have controllers and you have resources, so that definitely is similar. I think also one other thing that Goa is trying to do is stay simple. So one of the things that we've used quite a bit here and we've grown an application probably way too big for what Rails was supposed to be doing, and so we felt a lot of pain with some of the plugins and at some point I think we had more than a hundred gems we were using. So at this point it becomes almost impossible to understand the request flow throughout.

So something I think Goa is trying to do is to keep things simple; kind of get the best of Go, the Go principles of doing simple tools that do simple things and can be composed together to achieve what you want, and try to get those ideas and mix them with at the same time the practicality of doing something where you don't have to rebuild everything every time.

I think that's kind of the two goals that are a little bit opposed to each other, but it's a good tension and I think Goa is trying to strike the balance between the two.

**Carlisia Pinto:** My impression was that it was very easy in the sense that when you jump into a Rails app, it's very easy to get going. So it was easy in that sense, but it was also simple and that's what I was trying to say... You know, in Rails I'm using a lot of abstractions that maybe I went into the Rails source code and looked at it and I know what it is, but probably I didn't. And with using Goa and Gorma, I see everything right there, I have direct control of what's going on and it's simple.

**Raphael Simon:** Yeah, that makes sense. I'm happy you say that. I mean, that was definitely a goal too, trying to simplify things and kind of hide a lot of the complexity of hooking up the \[unintelligible 00:27:46.28\] in the generated code, and then what you have to implement as the user should be fairly straightforward. Basically the data structures you have to deal with are the ones that you define in your design, so it should all be very expected and very simple to use.

**Brian Ketelsen:** \[00:28:08.03\] Now, I have an anecdote about that. In the Goa Slack channel, in the Gopher Slack, we call Raphael the Godfather, and that's because of his extreme dedication to the simplicity of the DSL and the user experience. He will not let anything get by that complicates the process, and I really appreciate that.

I think having that laser-sharp focus on user experience and developer experience is what makes Goa a great tool, versus many of the other code generators, some of which I've written, that suck. So that's important. You have to have the Godfather in every project.

**Raphael Simon:** \[laughs\] Yeah, I try to keep all the complexity below. You can look at it if you want, but you don't have to deal with it. I think it's a very interesting principle. Like in a big team, you get developers of every level that need to use your tool, and so I think you need to make it approachable, so anybody can take advantage of it and leverage it as best as possible.

You shouldn't have to know how the tool works to take full advantage of it. I think it's the tool's job to make sure that you can use it in a way that's easy and all complexity is hidden from you. And at the same time, if you are a more advanced user or you're curious and you wanna see how it works, it shouldn't be hidden either. What's underneath should also be fairly nice design, but you shouldn't have to be exposed to the whole thing from the get-go.

**Erik St. Martin:** So another thing that's kind of risen in extreme popularity over the past couple of years is Swagger when doing API specifications, and as I understand it, Goa also generates all the Swagger specs so that you get the Swagger UI kind of for free for anything that you define in this DSL.

**Raphael Simon:** Yeah. I mean, Swagger was definitely a big inspiration for the abstractions in the design, so there is no coincidence that the Swagger generation is very complete in the sense that you can express anything that you can express in Swagger in the DSL. Actually, the first inspiration was JSON schema. I don't know if you're familiar with how Heroku documented APIs, but they used a different schema, this kind of recursive JSON schema to describe all of their APIs.

And so that was kind of the initial inspiration for the abstractions in the design language, but then it so happened that Swagger is also using JSON schema for a lot of their representation of what they call the path object. And so that mapping was very easy to do, and it just was sort of natural. And I think it's great too because that means that people that already know Swagger are already used to thinking about the design of APIs will feel right at home, they will have to deal with the similar abstractions that they already know.

And actually, I think an interesting project or add-on that could be done with Goa is a tool that would take some Swagger definitions and generate the Go DSL, kind of go the other way round. So if you write the Goa DSL you get Swagger, but it would also be interesting if you had Swagger to be able to go to a Goa DSL, because then you will be able to take advantage of the GoAgent to generate those other things.

**Erik St. Martin:** He's assigning that to you, Brian.

**Brian Ketelsen:** Pardon me?

**Erik St. Martin:** He's assigning it that to you. That's your task. \[laughter\]

**Brian Ketelsen:** I was just going to say, if you started with a Swagger specification and you generated a Goa DSL and then the Goa DSL generated a Swagger specification, you could set that thing into an endless loop. And by the end of it, it would be Turing-complete.

**Raphael Simon:** \[00:32:02.09\] \[laughs\] Yes, it will actually be very interesting to see how the Swagger evolves over time or it degrades. \[laughter\]

**Brian Ketelsen:** Or whether it takes over the world and starts launching nuclear warheads.

**Carlisia Pinto:** I have a question for Raphael. The views aspect or feature of Goa, I thought it was super interesting. I remember working with a Rails app, an API that was serving cube data as rests for resources, and we had to do some filters that were complicated. Once I figured out a pattern, we just followed the pattern; it was sort of simple, but then I ended running into problems because we were using the Swagger as a documentation tool - not necessarily to design the API, but just to document the API - so there was a mismatch there between what we were doing and between the Swagger specs, whatever the spec version was that we were using.

Now, with query params and filtering features of an API, is that what the views does? Like if I have different filtering criteria, I can use different views to represent that, is that what it is?

**Raphael Simon:** Yeah, that's the idea. So the idea is that a single resource may be represented in different ways. You may have an index view for example that only has a few fields, and you may have a detailed view that has all the fields, and you may have another view that is specialized in some other way. So the idea is that you shouldn't have to kind of redefine a different media type every time. So you define your media type once, you list all the fields of the media type, and then you define views, different ways of representing that media type. And each view can define arbitrary fields that were defined in the media type. And then how you produce those views from the request is really up to you.

If you decide that you want to use a query string parameter call view, and the name can be either index or expanded, then great. Do that, and in your controller, in your code, you basically build a response using the view that you wanted for that value of the query string. And that all gets also translated into the Swagger that gets generated as basically different responses for the action. So it's all documented and you get also the benefit of not having to redefine those different media types every time.

**Carlisia Pinto:** Yeah, that sounds brilliant. And I bet it's a lot easier to document as well.

**Raphael Simon:** Yeah, it is. And I think people have a sort of instinctive understanding of it; it makes sense. If I want to index you, then great. It's the same packing resource, it's just different ways for representing it. So I don't think it's a very complicated abstraction, and it does add a lot to the DSL.

**Brian Ketelsen:** Yeah, I completely agree with that.

**Erik St. Martin:** What's that?

**Brian Ketelsen:** I'm just saying I completely agree with that. I love the idea of views having the same resource represented slightly differently for a different use case. It doesn't mean you should have to write a ton of different code, you just ask for that resource with a specific view.

**Raphael Simon:** Yeah.

**Erik St. Martin:** So I'd like to make sure we have kind of time to do a fireside chat... You know, talking about news and projects and stuff we've run across together. So before we move on off of Goa, I'd just kind of like to hear from you, what's next for Goa? What kind of functionality are you looking to add here in the near future?

**Raphael Simon:** \[00:36:04.04\] Yeah, so there are a couple of things. First of all I should say that Goa is not 1.0 yet, so I think the near future is going to be finishing 1.0. We are very close, and what I think will make sense is to finish up the security examples that we've started, because that's an area that can get a bit hairier than the other areas, so I think good examples around that makes lot of sense.

So finishing those examples and making sure everybody's happy with those, and then I think at that point we'd be ready to phrase and kind of shift 1.0, whatever that means. But the idea is that then that is stable, so if you are waiting for Goa to be stable to use it, there you go; now you can start using it.

And now for moving on for the next, 2.0, I think there's a couple of interesting areas I'm looking at right now. One is extending Goa beyond HTTP; in particular I've been looking at [JRPC](https://github.com/dinstone/jrpc). I think it's an area that I've been asked a lot and it's also something we are looking at here at RightScale, so I'd like to see what we can do there. It's going to be interesting, because some of the abstractions don't match exactly the kind of HTTP rest abstractions, so we're going to have to come up with some interesting solutions there, but I think it makes sense.

And another interesting space is making the DSL engine a bit more flexible. So today we've mentioned it's possible to write plugins, and plugins can define their own DSL and/or they can define their own output. But it's a bit more difficult if you want an output from one plugin to affect the output of another plugin, or a built-in generator. An example of that would be, what if you wanted to write a security plugin, and there would be some DSL that you can put in your API description that says, "Hey, if you need to call this action then this the authorization middle way that you need to go through."

If you wanted to do that today, it would be a bit difficult because you couldn't modify the output generated by the built-in generator for the low level HTTP server glue. I think that's another interesting dimension to look at in terms of trying to make Goa a bit more open and have more people being able to contribute more plugins to it. So this is also something I'm thinking about.

**Erik St. Martin:** This is great. I guess if anybody wants to keep up with or investigate Goa, [goa.design](https://goa.design) is probably the best place. The GitHub link's there.

**Raphael Simon:** Yes, and the Slack Channel. I think there's a [GopherAcademy](https://gopheracademy.com), so [gophers.slack.com](https://gophers.slack.com) and there's a Goa channel there.

**Erik St. Martin:** That's right. And you'll be actually speaking at [GopherCon](https://www.gophercon.com) this year and Brian will be speaking at Abstractions about Goa as well, if I'm correct?

**Brian Ketelsen:** That's right. And we have a big announcement for people who might be interested in learning about Goa at either one of those conferences. I talked to the organizer of Abstractions and I talked with Erik, and we both agreed to do a discount code for both conferences, so you can get $50 off if you book at GopherCon or Abstractions if you use the code 'gotime', all lower case with no spacing. This will get you $50 off either conference if you want to go see Raphael talk at GopherCon or see me talk at Abstractions about Goa. [Abstractions.io](https://abstractions.io) is the website for Abstractions and [gophercon.com](https://www.gophercon.com) for GopherCon.

**Erik St. Martin:** Alright, so let's do some fireside chat here - news and interesting projects. We'd love for you to participate - Raphael, jump in wherever and offer your own input or things that you've come across and you find interesting.

**Raphael Simon:** Great, sounds good.

**Erik St. Martin:** Who wants to kick this thing off?

**Carlisia Pinto:** \[00:39:57.23\] I'll start. I would like to mention the CLI tool that I found. The author's name is not very clear, but I'm going to say that his Repo is mkideal, and the project's called [CLI](https://github.com/mkideal/cli). I love it because the examples are super clear and there are tons of examples. I did a CLI app at some point in Go. If I had seen this it would have been so much easier for me to understand how to do it. He also has not only flags but commands; it seems very clean and neat, so that's my recommendation today.

**Raphael Simon:** How would you compare it with [Cobra](https://blog.gopheracademy.com/advent-2014/introducing-cobra/)? I've been using Cobra for Goa, but I'm curious?

**Carlisia Pinto:** I thought it was easier to understand and follow. If I am going to use Cobra today - because I've used it before; the first time I used Cobra in Viper - I will have an easy time. But if it was my first time, this would have been so easy because the documentation is amazing. Kudos to the project maintainer.

**Brian Ketelsen:** I just quickly looked at this, but it seems like it has kind of integrations for other things. You can define a particular argument as a pit file and it kind of decodes that and gives you a pointer to the file so you can interact with it that way. So it kind of is an interesting approach with these decoders. I have to look into this a little more.

**Carlisia Pinto:** Exactly. And you can define your flags as slice or map, and there are the features there.

**Erik St. Martin:** That's interesting.

**Brian Ketelsen:** So my addition for this week is the post by Scott Mansfield from Netflix about application data caching, and it is way too in depth and too long to discuss here, but there are some really interesting discussions about data storage and data structure, Go tools like the [Rend project](https://github.com/netflix/rend) which is available on GitHub open source. A very nice and technically in-depth article, just the sort of stuff that I love to wake up to with my coffee, and it even has some RocksDB in there for you Erik.

**Erik St. Martin:** Yeah, I'd love me some RocksDB. Yeah, so I read that post here. It's actually really interesting... Rend is kind of wire-compatible with memcached. And basically what they implemented was this proxy almost in between their clients and memcached, and they implemented like an L1 and L2 cache so that memcached was the L1, but obviously they could swap that out, and then they were using RocksDB to communicate with their SSDs as kind of like an L2 cache.

All of this was to reduce their financial costs monthly for their Amazon instances for high memory, because they were storing lots of user data in memory, so they'd have kind of like the hot data set in a given region, but they'd also have a cold data set, in case people failed over from another region and things like that. So it's really interesting how much they dropped off and I love the fact that they're using RocksDB, and there's a lot of people using that now. MongoRocks was out not too long ago, and one of our other favorites, CockroachDB - they're using RocksDB under the covers, unless they've changed by now. But I think they're still using it. And RocksDB actually comes out of Facebook.

**Brian Ketelsen:** Yeah. I definitely just want to shout out to Scott and the team at Netflix for such a nice and thorough write-up. I know Scott's been dragging the people who will listen kicking and screaming into the Go world; even though they're a Java-heavy shop, they do have a lot to Go behind the scenes there, they just don't talk about it a lot.

**Erik St. Martin:** \[00:44:04.23\] Yeah. And I remember seeing some of the performance metrics. It was something in the neighborhood of like two million requests per second, but I think that wasn't fully active because that wasn't wired up the backend. I know when it was all set and done, the whole system was something in the neighborhood of like 20 or 25 thousand inserts per second... But still, I mean, the amount of performance they were getting out of this Go proxy is awesome.

We'll link to that in the show notes too, because that is an interesting read and especially if you're not familiar with RocksDB and some of those things, that's kind of fun by getting to learn how Log-Structured Merge-trees work. Cassandra uses the kind of same approach there.

**Brian Ketelsen:** Yeah. So another project that I've been following for a long time, but really only recently has started to mature is [SHIELD](https://github.com/shieldproject/shield) from Stark & Wayne on GitHub. You guys may remember Dr. Nic from the Ruby world. He seems to have endorsed Go or embraced Go, and this tool SHIELD is almost your universal utility knife for backing things up. So you can write plugins to back up Redis; you can backup a database, you can backup a disk, you can backup anything is if you write a plugin for it.

And when SHIELD first came out, I read the code because there was no description in GitHub and just tried to guess what it was going to do eventually and I couldn't figure it out for quite a few months, and now it's matured quite a bit, and it looks to be a really nice tool for backing up all the things.

**Erik St. Martin:** Yeah. I briefly looked at that. I need to find a use case for it. But I like the idea that you can kind of wire up where it's pulling the data from and where it's pushing the data to. I need more time.

**Brian Ketelsen:** Yeah, almost like the concept of [Heka](https://github.com/mozilla-services/heka) we were talking about last week. You know, this is a Heka for backups.

**Erik St. Martin:** Yeah, that's actually a good comparison.

**Brian Ketelsen:** Thanks for saying so. \[laughter\]

**Erik St. Martin:** I have to make you feel better.

**Brian Ketelsen:** After the code reviews I've been through this week, I'll take anything I can get. \[laughter\]

**Erik St. Martin:** So another interesting project that I've seen was [zap from Uber](https://github.com/uber-go/zap), which was a structured logging framework that is supposed to have, I think, zero allocations. That was kind of interesting.

**Brian Ketelsen:** You know, we're down here in the South so we can call that Y'ALL, yet another level blogger. \[laughter\]

**Carlisia Pinto:** I really liked the structure part of that system. I remember when I worked, again, in the Rails app and we using Splunk to keep track of our logs, and we had to agree upon a specific way to write our code so that it will be easy to find in the Splunk; we had to just like put certain keywords and the equal sign and then whatever variable we wanted to look at, and we had to rely upon everybody remembering to do that. So with this structure, it just makes life so much simpler for everybody, besides the fact that it seems to be very efficient and a lot of other features.

**Erik St. Martin:** Alright, anybody has anything else they want to talk about before we kind of go on our merry way?

**Brian Ketelsen:** No, it's been a pretty full show.

**Erik St. Martin:** Or not so merry for Brian, who's gonna get peak down in his code reviews tomorrow...?

**Brian Ketelsen:** I'm going back to my code reviews for today. \[laughter\] Don't tell Blake if he's listening.

**Erik St. Martin:** So one of the things we like to do when we close the show is just kind of briefly go around and give thanks to an open source project kind of as you spoke to earlier, Raphael; to get kind of that feedback from the community sometimes makes your day, so we want to make sure that we're regularly reaching out and thanking people for the things that make our lives easier. You want to kick this off, Brian?

**Brian Ketelsen:** \[00:48:02.15\] I'll kick it off today. One of my favorite open source tools ever is an NSQ from Bitly. I've used NSQ in dozens of projects and it has never ever disappointed me; it's blazing fast, it is 100% predictable and reliable, and it's just amazing how much you can do with NSQ in very little code. And I really appreciate the fact that they open sourced that, it's a great tool.

**Carlisia Pinto:** What is it?

**Brian Ketelsen:** NSQ. It's a distributed Queue that's incredibly fault-tolerant and really fast and it's written in Go, and it's written really smartly.

**Erik St. Martin:** Yeah. Actually Matt Reiferson did a talk in GopherCon 2014 on it. I think the talk was titled ["Spray Some NSQ On It"](https://speakerdeck.com/snakes/spray-some-nsq-on-it) or something like that.

**Brian Ketelsen:** That's right, yeah.

**Erik St. Martin:** Yeah, that should be on GitHub, too.

**Brian Ketelsen:** And that video is up on YouTube, yeah.

**Erik St. Martin:** How about you Carlisia?

**Carlisia Pinto:** I would like to mention today [iTerm2](https://www.iterm2.com), which I'm sure most people already use. If you don't, you definitely should check it out, because eventually you will. \[laughs\] It seems that everybody makes the transition from the normal terminal that comes with the Apple system to iTerm2. And especially the 2.9 beta version. I had to download that for some reason that I forgot; it's been a couple months and it's amazing.

There are a bunch of new features that are very interesting, very useful. I'm just going to say I recommend that you leave... It pops up a tip of the day every day, right on the terminal. It's very non-intrusive; we can just hit skip and it will go away. Basically, leave that on and you're going to discover a treasure trove of cool features for your terminal. There, that's it.

**Erik St. Martin:** Yeah. For when I am actually on my Mac recently, I have the little tips on there because it's been a while since I've explored features at it, so I'm letting it annoy me periodically to tell me things that I should be doing.

**Brian Ketelsen:** They've added some really radical stuff to iTerm2. The latest betas are pretty crazy in terms of the toys that they have added. I'm not sure if I'll ever use them all, but they are impressive.

**Erik St. Martin:** I get a little jealous because most of the time I work off of my Linux workstation so, you know... GNOME terminal is I think the current one I am using in i3, but it's not the same. Raphael, do you have a project you'd like to thank?

**Raphael Simon:** Yeah, actually we started using RethinkDB, and it has been very interesting. I stumbled on it kind of by chance and was reading the description and the feature set and it all sounded good, like it usually does. But then what really struck me is how well it fit with the use case that we were after, which was trying to generate events whenever some data was updated, and so RethinkDB has that built-in, this idea of subscription is built in. It's been a very interesting journey. It has changed quite a bit the way we're thinking about the design for those new services, and so I would definitely recommend people take a look at it if they haven't yet, because it does provide another dimension to how you can design your systems and take advantage of these subscriptions capabilities. So very, very glad that they open sourced that.

\[00:51:39.29\] And something else I wanted mention - it's not a project, but I wanted to give a shout out to other companies that let their own employees develop open source projects, because it takes time, and we all going to have to make a living, and at the end of the day the companies that allow their employees to develop open source projects are really enablers and I think we need to thank them for that.

And I'm thankful for RightScale obviously with Goa, but I was also thinking about JP Robinson at New York Times doing Gizmo... I mean, there are many, many examples of people that work in the industry and where their company actually pays them to develop open source projects. I think that's awesome.

**Erik St. Martin:** And I actually get to cheat because we got to just talk about the Netflix post and RocksDB, and I love RocksDB, so I'm going to give a shout out to them. \[laughter\]

**Brian Ketelsen:** That's cheating. That shouldn't even count. We're taking this one off of your scoreboard, Erik.

**Erik St. Martin:** \[laughs\] But, I mean, it's awesome. If anybody hasn't played with it, they should. And even just investigating kind of how Log-Structured Merge-tree work is kind of fascinating. So I think with that, we are just about out of time.

I definitely want to thank everybody for being on the show and especially, Raphael, for coming on and talking to us about generating all the things.

**Raphael Simon:** Thank you. It has been great. Thank you very much.

**Erik St. Martin:** We have the Godfather of code generation on the show. \[laughter\]

**Raphael Simon:** This has been really great. Thank you for the opportunity, I really appreciate it.

**Erik St. Martin:** And we'll have links to everything we've talked about in the show notes, or if you happen to be following us on Twitter @GoTimeFM, most of the stuff should be linked there, or the Slack Channel, the Gopher Slack or Goodtime FM, there as well. So I think that is about it and with that, I guess, we'll see everybody next week.

**Brian Ketelsen:** Awesome, thanks everybody.

**Carlisia Pinto:** Thank you, goodbye.

**Raphael Simon:** Bye.
