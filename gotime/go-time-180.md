**Johnny Boursiquot:** Hello, and welcome to Go Time! Yes, your ears do not deceive you. It's me, Johnny, and I'm back from a short hiatus... I'm feeling a bit refreshed, although I just came off of a long on-call stint, so let's hold off on the refresh. Yeah, we'll go into that. Anyways, I bring with me my charming co-host, Natalie Pistunovich.

**Natalie Pistunovich:** Hello.

**Johnny Boursiquot:** And Jerod Santo.

**Jerod Santo:** Hello.

**Johnny Boursiquot:** You might be wondering who are we hosting today - well, before I tell you, you need to understand what we're gonna be talking about today. The show's topic is developer productivity, and there are trade-offs. There are always trade-offs. And I guess today Mr. André Eriksson has no doubt had to make some as the creator of Encore, a seemingly kitchen-sink-included backend framework that is currently making the rounds in the Go community. So welcome, André.

**André Eriksson:** Thank you very much.

**Johnny Boursiquot:** I have to sort of forewarn you... This is not gonna be an episode about Encore. What we want to know are some of the lessons you've learned, and indeed some of the trade-offs you had to make over the course of building such a framework. So I checked it out, and there's a lot going on in there, and I'm sure we'll be touching on some of these things as we go. But first, I want us to frame the discussion a little bit. What do you understand by developer productivity?

**André Eriksson:** \[00:04:31.09\] I think there are two very different perspectives on this question. On the one hand, you can take a very rational approach, and you can talk about it in terms of mathematics. When you think about it that way, developer productivity is essentially about how do we spend as little time as possible on things that don't matter, like things that aren't really bringing your product forward; what I call undifferentiated work. And the second part is when you actually are working on things that bring your product forward, you wanna do that as quickly as possible, so how can we speed that part up.

But I think a different perspective is "How do we make development as enjoyable as possible? How can we make it so that we're spending time working on the things that we enjoy?" And of course, that's a more personal question, and exactly what that means will vary from person to person. Some people really enjoy working on infrastructure, and DevOps, and build systems, and this sort of thing. For me, I really love working on creating things for the end user, so finding ways to make the end user's lives just a little bit better. But it all depends on what you're enjoying as a person. But those are the two main perspectives that I think about when it comes to developer productivity.

**Johnny Boursiquot:** Okay. This coming from someone who has a very specific definition of that in their minds, given that you're a framework and tool author. Now, what I want to understand and know, especially from my co-hosts Natalie and Jerod - as far as I know, neither of you has authored a framework or a tool or anything like that, at least not at the scale that André has. So you and I tend to be users of these kinds of tools. So I'm gonna ask Natalie to go first, to tell me what do you seek as productivity from your developer tooling? What does that mean to you?

**Natalie Pistunovich:** Yeah, I was just thinking that this answer changed a lot through the years that I was a developer... Because in the beginning, I would probably -- like, if there was more, it might be overwhelming for me; all those features, and shortcuts and whatnot, and even the arguments of which IDE is better, things like this... And I do think that now that I've been doing the same thing for a while, I know better what works for me specifically. And I know to be careful when I answer, because for others it might be different... For others who are in a different place it might be a bit different, and it might be even -- like, "How do I ever get to a place where I have such an opinion?" is also a thought that you can have hearing such a question and such a discussion. And "How do I learn that, when I learned the language, and everything?" So lots of meta instead of answering; all that is immediately going through the mind when we talk about developer productivity... And it would be also interesting to have different parts of our conversation today focused on what is it like for beginners, what is it like for people who are very advanced, what is it like for people who are beyond all of us and actually build the tool and can say when and what.

I use for my IDE VS Code, and things that I find super-useful is that when pulling all sorts of libraries, it shows me the signature code, for example. That's something maybe a little bit basic, but I find it super-useful. I know that Encore has way advanced things, like tracing. This is something that I find always useful, always interesting, and I only got to introduce this into a codebase as a recommendation, kind of, in a previous job that I had as an engineering manager. So I never had to do this on my own, just to convince other people to do this, because I think it's useful.

\[00:08:12.08\] I still think this is something that could be super-useful, and I am looking forward to try this in my projects and see how can this make life easier, even without the extra work. Those are the two main things that come to my mind when we talk about productivity.

**Johnny Boursiquot:** Jerod, hit me.

**Jerod Santo:** Yeah, I think Natalie's point is well-taken - to define developer productivity, please define developer, you know? \[laughter\] And it's like, well, it's hard to do that, because we're all shapes and sizes and backgrounds and experiences, and there's a subjective side to that. So I'll answer it subjectively. I'm not a math guy, so I can't do the math side that André brought...

I'll say that generally speaking I look at how can I quickly and to a certain degree enjoyably get my ideas into the world, from the point where I've conceived a notion or my customer has conceived a notion and we've decided this is something worth doing - how quickly can I take that to fruition? That's productive.

Sometimes that means getting into the flow and staying in the flow, and so my productivity is affected by my surroundings, externalities, things that aren't even in the computer but they're around me, or in Slack, or in these other places. Other times it's actually in my editor, with my programming language, with my toolset or my framework, and I'm trying to harness those tools to get that idea out. So when I think about those specific aspects - we're talking about frameworks, libraries, tools - then I really appreciate things that take the minutiae away, don't make me think about things that I don't care about. Help me to focus on the differentiated aspects of what I'm trying to do. My particular view and me trying to accomplish that aspect. Everything else is minutiae, and it just really kind of makes you feel unproductive - configurations, picking this, picking that, customizations... Sometimes data structures can be that, if they're common things... Other times data structures are your application. So that's all subjective -- or not subjective, but kind of "it depends" plays.

So there's lots of things that you can define that, of what that is, but if I'm not focusing on the uniqueness of the problem I'm trying to solve, then I'm not feeling productive.

**André Eriksson:** I think you touched on a really important aspect, which is - I think a lot of people intuitively think about developer productivity and developer tools as being about things that happen when you're writing code. But what you highlighted is that the end-to-end process of getting something in front of users is so much more than that. It's about first of all having an idea that you wanna try, and then there's usually some coding involved... Sometimes there isn't. But then there's collaboration with other people, there is some sort of usually review process and verification, "Are we making the right change?" and then there is some sort of talking specifically about backend. But I think there are analogies to other areas - some sort of deployment, or how do you actually get it in front of users, and after that, how do you make sure that everything works? How can you address any issues that pop up? All this is like the end to end feedback loop of building things, and I think often you just focus on a very small part of the whole, when you think like "How do we get people to write ten characters less in their editor?" or whatever. But the whole cycle is so much bigger than that.

**Johnny Boursiquot:** I hear all of that, and I'm thinking, just like Natalie says, when you say "productivity", it depends on your approach. What context are you working in. Jerod asked - developer productivity, "Well, define developer." So the idea then becomes what layer are we talking about of developer productivity? Because I can think of just three off the top of my head. So there's developer time productivity, which Natalie touched on; when I'm coding, I'm getting that IntelliSense, the IDE is helping me get my job done faster, I don't have to work hard to write the code itself... There's deploy time productivity - how easy is it for me to ship that thing from an idea in my head, or when I sit down with a customer or a prospect, and translate that into working software?

\[00:12:22.06\] For me as an operations-focused engineer there's the operational aspect of productivity. If I can't operate this piece of code, if I can't monitor it, if I can't trace things, requests coming in to see where a problem exists, I can't collect metrics, if I can't observe it, to use the more trendy term these days, beyond just monitoring; you can't just say "monitoring", you have to be observable.

**Jerod Santo:** \[laughs\]

**Johnny Boursiquot:** If you wanna stretch it beyond the technical aspects of things, there's the business -- how easy is it for the intended audience to derive value, of the solution that you put together. So there's a lot of layers to this productivity question. To me, when you're writing a framework or a tool, you kind of have to pick your battles - which layer of productivity are we talking about here? Are you developing a VS Code extension to make my dev time productivity - give that a boost? Are you making my productivity - giving that a boost? Which layer are we talking about here? I'm interested in understanding in your work, you've identified several of these areas; some of the stuff you're working on touches on many of these layers... What was the most important of these problem sets for you to tackle multiple of them? In what order did they feel to you like they needed to be solved?

**André Eriksson:** I think that's super-interesting. I really agree with your characterization of the different layers. I guess Encore is in many ways contrarian, in that I firmly believe that to really unlock much greater productivity, we actually need to look across these layers. Nowadays, most tools, as you pointed out, only operate in one layer. But when you actually bridge that gap, you end up getting something that is much more powerful. And what underpins Encore is really this belief that to really provide a better experience in all of these layers, we need to better understand what an application is doing. Because when we as developers are building an application, we have a mental picture in our heads of how it works, how everything fits together. And generally speaking, our tools do not share that understanding. They generally just think of it as code, and files, when you're in an editor. And when you add this operations layer, suddenly we package everything into a container and treat it as a black box, where we have no idea how it all fits together. We can kind of try to figure it out based on network connections between different parts, and so on... But we're really lacking this map of how everything fits together.

So what Encore is trying to do is really bridge that gap and build up a very detailed mental model of how your application fits together, and then try to improve on all of these layers. So that's why we're combining what is essentially a framework that's just a way to get this sort of understanding, and then we use that understanding in the other layers to provide things like tracing, and so on... Because it turns out that the challenges with developer productivity - they don't firmly fit into one layer or the other, and by looking across the hall, we can create a much better experience.

**Johnny Boursiquot:** If I'm a junior developer and I wanna use a tool, any tool, Encore included, what questions should I be asking myself as a junior developer? And we're gonna get to the senior developers and the architects and all that stuff. Because different people at those layers too are gonna be looking at something like Encore and be like "Hm... You're doing too much" or "Hm... You're doing not enough." So again, perspectives. So if you're a junior developer and you see something like Encore, is there some learning that you have to go do? Like, all of a sudden, if you're just happy writing code, and then you know somebody else is gonna deploy it and package it and ship it, now something like Encore comes along and now it's talking about all these deployment mechanisms, orchestration, and tracing, whatever that might mean... They might not even know what tracing is. So another way of asking this question - for whom did you build Encore? The junior, the senior, the architect, the people who knows what's going on up and down the stack? Who's your audience here, and how should each level of competency with the whole lifecycle - what comfort level should they be at?

**André Eriksson:** \[00:16:41.14\] I actually think Encore could be a good fit for all of them... I think it's less about the experience level and more about what your requirements are on the product side. Depending on what you're creating, sometimes your technical requirements are incredibly low-level, and you require enormous flexibility and control at the lowest level of the stack. And then Encore is definitely not the tool for you, because it's operating at a higher abstraction level... At least not today, we don't offer a bunch of these low-level knobs.

On the other hand, if you're building something where you don't need that level of control, then Encore can be a great fit, just because it takes away and makes reasonable decisions that usually are very sound, but they are not right for everybody. So we've had people using Encore and they really love it across all experience levels, but it really comes down to what your application has in terms of its requirements. Encore or not, I think that's something you always need to start with, like "What is it that you are building and what are the challenges you're having?" and then choose the right tool from that perspective. I think that's always where you have to start.

**Johnny Boursiquot:** Natalie, would you put a framework that does so many things in front of a junior developer?

**André Eriksson:** When you say "so many things", I guess you mean Encore.

**Johnny Boursiquot:** Encore or something like it.

**Natalie Pistunovich:** Actually, the things that it's doing -- we're 20 minutes into the episode and I actually realize that probably everybody who's listening by now has googled what it does... But maybe we can mention a few of the things just to organize things in people's heads.

**Johnny Boursiquot:** You know what - you should be hosting this show. That is a very good point you're making. \[laughter\]

**Jerod Santo:** Host swap...

**Johnny Boursiquot:** Okay, we'll come back to that question then. André, give us a high-level of what Encore does.

**André Eriksson:** I like to describe it as a game engine for backend development. What that means is when you're developing a game, you have game engines like Unity and Unreal Engine that provide a really integrated experience, that is custom-made for building a game. And when you use those, they provide a lot of value for you. So you never have to write your own 3D renderer, or multiplayer, or AI, or path finding, or physics, and so on... Because those are things that almost every game needs, so the game engine provides it for you, and the end result is a very productive experience. Encore is the same thing for backend development. Specifically, you write Go and you do it in a way that Encore understands what it is you're doing.

So when you're defining an API, when you're making an API call from one backend service to another, what request and response schemas for every API endpoint. What infrastructure your service requires, whether it's a database or something else. Where you're interacting with a database, what secrets you need. Then Encore takes that code and orchestrates it all together, so that you don't have to deal with setting up infrastructure, marshaling, requests to JSON, or whatever you use for serializing, and so on and so on... So what you as a developer have to do is just focus on building your product, instead of spending a lot of time on things surrounding your product, like infrastructure, and operations, and boilerplate, and configuration, and all of this stuff. That's the idea.

**Johnny Boursiquot:** \[00:20:25.07\] Okay.

**Natalie Pistunovich:** Or basically automating Johnny out of his job.

**Jerod Santo:** Ooooh...! \[laughter\]

**Johnny Boursiquot:** \[laughs\] Oh, and Natalie came to fight today...

**Natalie Pistunovich:** Now, I'm asking to summarize this in a very clear way. Actually, when you were saying that, you also said at some point the engine will provide, and I had to think of Snowpiercer. That one's also a little bit entertaining... Is it some way of saying that this is a little bit automating things that are related to infrastructure, to SRE, to ops, and only letting you do more backend work?

**André Eriksson:** I think it's important to remember that operations and SRE in particular will never go away. A tool cannot replace that.

**Jerod Santo:** True diplomat. He threw you a bone there, Johnny.

**André Eriksson:** I'll expect a check in the mail... \[laughter\] No, but it's more about - when you have SREs, unless they're very nice, they're not going to sit and do your work for you. They can handle a lot of the operations aspect, but somebody still needs to do all the work to get the code into production. So it's not replacing operations, it's more like let's make it easier to get our code out there quickly. So it's much more about "Let's find all of these annoying parts of backend development and streamline them." So the end result is it will just get your code up and running in a Kubernetes cluster incredibly simply, and it will all be done according to best practices, but you still have this level of control, where when something is on fire, you still wanna be able to get in there and really dig into things.

**Break:** \[00:22:08.18\]

**Johnny Boursiquot:** Jerod, you've bootstrapped applications using frameworks and tools...

**Jerod Santo:** Yes.

**Johnny Boursiquot:** I'm curious of where you draw the line in your mind between when those tools sort of do too much or too little. I'm curious how you see that.

**Jerod Santo:** Yeah, so I want it to do as much as possible, until it boxes me into a corner and it won't do it the way I want it to. \[laughter\] So I'm unreasonable, Johnny. I just want it to be everything and exactly the way I would write it. I kid a little, but there's some truth in that.

I guess, as Go Time's producer, let me just float a stereotype out, and maybe have all three of you speak to it. This is on-topic, Johnny; it's not completely off-topic. I get the impression that Gophers - and this is a generalization - don't like frameworks. And here's Encore, it's a framework. And I wonder if that's part of the discussion here. The libraries are generally what I see people advocating for, or suggesting in a framework; I don't know any popular Go frameworks. Maybe I do, if I had to think real hard; I don't know. All three of you can just speak to that. Is that a generalization that holds, or am I misguided in saying that?

**Johnny Boursiquot:** \[00:24:21.15\] I want André to answer this question last, because I wanna hear from Natalie, and I have some opinions about that.

**Jerod Santo:** Okay.

**Natalie Pistunovich:** This is my impression, too. Most of the gophers I know don't use a lot of frameworks, or at all. One thing that I liked, that I read about Encore that it does is that you write code and it's compiling it to be distributed for you. I'm really curious about this. Last year there was a talk - somebody from CockroachDB - about how the error library in Go failed him a little bit in there at work, because it was not supporting distributed in a good way, and they had to rewrite that a little bit, and then they kind of branched off to have a library for that that is for distributed testing.

So I think this can be an interesting spot. For me, this is a personal focus of curiosity. I will not say that I looked at a lot of frameworks, but this is a reason I will look at this one.

**Johnny Boursiquot:** Now, here's my take. Jerod, you're not wrong. But.

**Jerod Santo:** Okay... Is this a big but or a little but?

**Johnny Boursiquot:** Well, I'll let you know. You can take a look at my but and let me know how big it is.

**Jerod Santo:** \[laughs\] I'll judge. Okay, go ahead.

**Johnny Boursiquot:** Okay, you can judge me. \[laughs\] So that whole notion of gophers don't like frameworks, we don't like magical things - yes, there is a lot of truth to that. But - that's where my but \[unintelligible 00:25:40.05\]

**Jerod Santo:** Let's hear it, let's hear it. You're stalling... \[laughter\]

**Johnny Boursiquot:** The Go developer community has grown by leaps and bounds ever since that whole notion of developers don't like frameworks, and things like that. There is a lot of that that is still true. We still shy away from a ton of dependencies, because more than one of us has been bitten by them. We still shy away from the frameworks that do a lot for us. Buffalo, in some circles, might be an exception to that. But yes, there is sort of a tendency to shy away from these things. But again, the Go developer community has grown so much. There's a lot of people coming from other language communities that want frameworks, that want scaffolding, that want a Rails-like experience, that want something like Encore, that does that and then some.

So to say that Go developers in general don't like those things - there's some truth to that, but I think that's becoming less and less of a thing. And frankly, that's less relevant. It's becoming more of a "What the situation am I in?" Because to Natalie's point, if you have a team that's using a language, they're using a technology and they're finding that there are some shortcomings in certain areas, and they're spinning up their own tool to deal with it, they're solving a particular pain point. So we kind of detach ourselves from this notion that "Gophers do things this way." It's the same argument we've had on this show before around the idioms of Go, and the dangers of groupthink around that.

**Jerod Santo:** Yeah.

**Johnny Boursiquot:** So we have to really start to move away from "You're a Go developer, you don't do this, this and that", to more like "Okay, what problem do I need to solve?" So I think there is room in the community for something like Encore, and then for some situations it's doing too much, because the more established organizations that have an operations team, that have architects, that have people that handle different layers of the stack, maybe Encore does too much. So it's neither or. Hopefully that answers your question and \[unintelligible 00:27:42.03\] sense of my but.

**Jerod Santo:** Yes.

**Johnny Boursiquot:** Okay.

**Jerod Santo:** I'd say it's medium-sized.

**Johnny Boursiquot:** \[laughs\]

**Jerod Santo:** Yeah, it's a good point. I mean, that's the thing about generalizations and stereotypes - sometimes they get formed early on and sometimes it's hard to actually ever escape that stereotype, even if it's no longer true; and sometimes it was never true. And I'll give you some of my background... I'm coming from Ruby, JavaScript, and I do a lot of Elixir... And I have Ruby roots, so - give me all the magic. I like the magic.

\[00:28:07.25\] Y'all make fun of method missing a lot; I think there's lots of cool use cases for method missing. Of course, yes, you can shoot yourself in the foot, but I had a very productive career with Ruby on Rails, and I made websites and applications way faster, way better, and with more productivity than I ever did prior to Rails... So I like frameworks, but I'm also coming from somebody who's had a really good experience, really growing up on a framework, outgrowing it at a certain point... But much of my career was with a framework that served me very well.

And then JavaScript's community - in JavaScript we don't like frameworks, we like tiny little micro-libraries. Pull in all the things. Npm all the things. I've seen both worlds, and I tend to be somewhat just naturally inclined toward a framework. I see something like Encore and I think "This looks really cool", but I'm also small teams, small customer sizes... I don't have an SRE. Well, we kind of have an SRE on hire at Changelog, Gerhard, but I've done a lot of sysadmin stuff myself over the years, so I'm operating at a very small scale... And I think at a small team size or a small business, I want all the things as long as they're well done. But I totally recognize that large organizations don't need all the things Encore does... And in that case, it could be a blocker, like "Well, we need to swap this thing in." Well, you can't swap it in. "Okay, we can't use a framework."

**Johnny Boursiquot:** Yup, those opinions. And André, this is where I sort of ask you to provide some feedback or some interpretation of the different reasons you've heard here \[unintelligible 00:29:41.03\] of liking or not liking frameworks and whatnot. And also I want you to think about how to answer the question -- I've sort of been playing devil's advocate during this whole thing...

**Jerod Santo:** \[laughs\]

**Johnny Boursiquot:** I want you to answer the question of basically who is Encore for.

**André Eriksson:** That's a different question than I expected... \[laughs\] I was gonna give my opinion on framework...

**Johnny Boursiquot:** Oh, do that, and then answer...

**Jerod Santo:** Go ahead, yeah.

**André Eriksson:** Okay. I actually think that the main thing that Go developers find with frameworks that really rubs them the wrong way is this magic notion, like method missing... And for those who don't know, that's a Ruby thing where if - correct me I'm wrong - a class doesn't have a method, it calls this method instead. So you can do a lot of meta programming magic things with it.

**Jerod Santo:** That's correct.

**André Eriksson:** And when it comes to Go, a lot of people - myself included - really like with the language is its predictability. We understand when we read something exactly how it works. And I'd like to think that Encore sticks to that principle, and doesn't introduce a lot of magic. I believe that at no point when you're writing code with Encore are you confused about what's happening, and it's all actually very straightforward. And the type of things that we do are considered magical by many. But I would say that it's more similar to the Go runtime in that sense, where the Go runtime does a lot of things that are very magical compared to what you do as a Go developer. Similarly, Encore does a lot of things under the hood, but it doesn't change the predictability of how you're writing code, and I think that's the critical part that we need to preserve in Go, whether it's Encore or another framework or a library or whatever.

**Jerod Santo:** \[00:31:55.13\] Yeah, and I don't think you need to have -- I mean, Encore I guess is an example that magic and framework are not eternal companions. It's just that one of the most popular web frameworks in human history is Ruby on Rails, which is filled with a lot of magic things. Instance variables appear out of nowhere on you, if you just dream up a method, it's probably there... Those kinds of things. But there's lots of frameworks that aren't that way. I mean, in the Python community they also appreciate explicit over implicit, and there's frameworks over there that provide explicit calls... You can accomplish these things with code gen, with scaffolding, a lot of other ways.

But again, going back to the persistence of stereotypes, I think a lot of people think "framework" and they think "magic". And maybe if they don't immediately understand how something works, they think "Oh, this must be some tomfoolery going on. Not always the case.

**Natalie Pistunovich:** It's although what's interesting about this specific framework, is that it's not only about the code part; it's about deploying things...

**Jerod Santo:** Right.

**Natalie Pistunovich:** ...which is kind of giving a complementary part there, which is important to have in mind when you talk about frameworks and magic and so on. Leaving this to your SRE colleague or to your release engineer colleague or whoever does deploy stuff is another type of magic; you also don't understand that, you just hand this over to somebody else.

**Jerod Santo:** It's true.

**Johnny Boursiquot:** I must say, when I first looked at this framework I was scratching my head and asking "Why would somebody couple that many concerns into one tool?" I'm starting to get that, based on the conversations we're having. Thank you for opening my eyes to new possibilities.

To me, the most magic I want in any deployment, production-ready, push-it-and-it-goes kind of thing - I know I'm biased in saying this, but I've been doing this since before I joined Heroku. But Heroku is to me that magical thing where I just push my GitHub Repository or something like that, and my app is up there. And I don't need to know how it got there, what they used under the hood, slugs, build packs, containers, I don't care. It's just "It gives me an endpoint? Great. I can even map a domain to that? Great." That's the most magic I've ever wanted.

So now here comes a tool like this, which is not only helping me be sort of developer-time productive, helping with that developer time productivity, but it's going all the way out to deploy time. So to me, I'm like "Okay, this is innovation, yes. But am I ready, as somebody who wants to fiddle with the bits, am I ready to hand over that much control?" It's the same dilemma you have every time you choose a piece of technology from a cloud provider. Yes, they might offer a raw tool, the raw sort of "Deploy this thing on an EC2 instance and you're good to go", or you pay a little more, but you get the managed service and it's hands-off.

So the more control you want, the more you have to shy away from the managed thing. So to me, this felt like magic \[unintelligible 00:34:53.14\] And André, that's something you were deliberate about - making this as automated as possible. Who hurt you? What drove you to that extreme? \[laughter\]

**Jerod Santo:** "Who hurt you...?" I love that question.

**André Eriksson:** Actually, that's not really why we're doing it... And we're actively working on opening up more control in that sense. The goal with it really - it's not about taking control of everything, because I know -- I've done lots and lots of backend development for many years, and I know that there are many situations where you need more flexibility. I think the reason we're doing it is because most of the time you don't, and doing what's sensible is the right thing 90% of the time or 80% of the time... And we would like to add additional flexibility to support the remaining 20%.

The reason why we started on the very extreme is because we believe that by connecting the whole end-to-end developer process, from how you write code in your editor - which is where the Encore experience starts, if you will - all the way into how you're collaborating with other developers, all the way out to production, is that by having visibility into where things are running, we can actually help you provide a better experience when you're writing code.

\[00:36:36.11\] For example, there are a lot of things when you're writing code... Like, in my experience - I was at Spotify for many years, and all the time when you're writing code, you do that with an understanding how things work in production. For example, when you're querying a database, you do it with an understanding of the shape of the data in production, or the shape of your database schema. When you're deleting an endpoint, you do that because you're sure that it's actually not being called, otherwise you're gonna have a bad time. And when you're checking, like "Is this field set?", you do that because you understand that sometimes in production it's not being set.

So by actually being part of this whole experience, we want to take some of that insights in production and feed it back into the developer experience, so that when you're doing a database query, we should be able to give you feedback from the database schema in production, like "Oh, this is not the right type. You're trying to put a string field into an integer variable, or whatever." And personal sensitive data permitting, it would also be very useful to be able to show you a sample from your database as you're doing database queries in your editor, or being able to say "Hey, did you know that this endpoint is not being called in production? It last happened three weeks ago. Maybe you should just delete it right away." Or when you're making a change to your API schema to be able to give you feedback, like "Hey, your co-worker is also working on this endpoint, and you're about to collide with each other. Maybe you should talk right now, instead of doing it two days later in a pull request. If you miss it, it's gonna break in production."

So it's all about using this visibility to feed back into the developer process and reduce the feedback loop. That's the idea behind all of this. So it's not about assuming control, even though that's where we started. We'll gradually pull that back.

**Natalie Pistunovich:** It sounds like there is a lot of project-specific content, and that makes me wonder - you probably need somebody who's very familiar with the project that you're working on to set it up initially. But turning to you, the question that Johnny turned to me- would you give the junior person access to this? And I will focus my question with saying that this can be -- given that you can control their amount of exposure to automation vs. manual work sounds like this can be an interesting way of slow onboarding on a platform. Is this something that you also have in mind?

**André Eriksson:** I actually think -- for a very long time I've actually struggled with how to communicate it, just because the process of using it, it's almost like there's nothing there. Actually, writing an Encore application ends up being -- you're not actually doing much Encore specifics; you're writing -- like, to define an API, for example, you are writing a regular Go function at the package level... And the input to that function is a context, which is a very standard Go idiom, as well as a type, which becomes your input to your API. And the return value is a data structure and an error, and that becomes your response scheme. That's basically all you need to know to use Encore to write a backend. And then to make an API call between two backend services, you just import the other service as a Go package, and then you call the function as if it was a regular function.

\[00:40:34.04\] When we actually run your application, then we find all of this, we have a compilation step that finds all these places and generates the code to replace that with a real API call. But from a user perspective, it just feels like you're writing regular Go code. And then we use static analysis, we figure all of this stuff out, and then we can do a bunch of stuff, like generate API documentation automatically, or take all of your API and generate a frontend client for it in different languages, and so on.

So there's a very big difference in terms of what do you need to know to write applications with Encore. And the answer is very little. Then in terms of like "What value do I get out of it?", then there's a variety of things... But as you pointed out, you can very much discover those gradually. You don't have to learn a bunch of things upfront. That's the idea.

So I'd like to think that it's very easy to get started with it, even if you don't know a lot... And I would even go as far as to say that backend development in general has an incredibly high learning curve... So that's another big area that I'm passionate about, is how can we actually make that easier for new people to come into. Because normally, you have to learn hundreds of concepts just so you don't break something in production, and that's incredibly scary. I remember when I started doing this, and the first time I pushed something to production I was just sitting there, almost having a panic attack.

**Jerod Santo:** I like that - all you can do is import it and call it from another function. There's no setup and teardown, there's no "How do I hit this API?" etc. It seems like that's kind of a microservices thing, or like backends talking to backends... Is this the kind of tool that you would mostly use to build backends to be consumed by other backends, or it's like "Would you build Twitter's API with this, or Stripe's API?" Or are we talking smaller, non-public, non-consumer-facing backends? Would it be your frontend client for this or not?

**André Eriksson:** Yeah, so it's firmly in the backend camp. A lot of people get it confused and think that it's a web framework... And it's really not. If you wanna serve HTML, don't use Encore. It's for APIs that communicate data structures and implement business logic. So that's where we're aiming. And doing things like Twitter's API or Stripe - that's very much in the type of things we're targeting, for sure.

**Jerod Santo:** What about SOAP? Do you support SOAP? \[laughter\] Sorry...

**André Eriksson:** Sorry to break it to you...

**Jerod Santo:** I'm out...! \[laughter\] You lost me.

**André Eriksson:** No... Right now, in practice, when you expose a public API, it's only HTTP and JSON. But again, it's very much about not -- I think as developers that's not something I ever wanna spend time on. I would rather think about my API in terms of data structures and semantics that I want to express, and then the idea is Encore can expose it in different ways, whether it's HTTP or JSON, gRPC and Protobuf. We should be able to expose it in different ways, depending on what you need, because it's a pretty low abstraction level to be dealing with transport protocols, in a lot of cases.

**Break:** \[00:44:02.21\]

**Johnny Boursiquot:** Three and a half years, that's how long you've been working on this.

**André Eriksson:** Yeah.

**Johnny Boursiquot:** Biggest lesson learned.

**André Eriksson:** I really have learned to appreciate the Go backwards-compatibility guarantee.

**Johnny Boursiquot:** I bet you have... \[laughter\]

**André Eriksson:** Well, maybe a different sense than you expected... In the sense that it's really hard to provide such a guarantee. And for Encore, we provide a way of writing applications. I've experienced working in companies where we've had like an infrastructure organization that had built internal tools, and we had to do migrations from one library or one internal tool to another every quarter, and that was incredibly demotivating and incredibly frustrating. So I've spent so much time thinking about what's the right API for doing things so that you actually can commit to being backwards-compatible, and it just made me respect the Go team and everything they've put into -- the amount of care they've put into designing a language and a standard library that is so stable over time.

**Johnny Boursiquot:** So someone who uses something like Encore is benefitting from that sort of philosophy, but is it fair to say that you've sort of incorporated that into the API's that you're exposing from Encore?

**André Eriksson:** Yeah, absolutely. I mean, time will tell if there's an incredibly serious issue that needs to be addressed. I guess the Go team reserves the right to do that in extreme circumstances around security... But I take it incredibly seriously, and I've been on the other side of the fence and it's just incredibly demotivating that you have plans and you're always busy, and then somebody comes and tells you "Hey, here's a bunch of work you have to do." It's awful.

So yeah, we absolutely want it to be backwards-compatible, and that's a big reason why it's taken so long to get here, is just because we're incredibly careful about how we design things to actually enable that.

**Johnny Boursiquot:** So Encore is open source, and you do have contributors...

**André Eriksson:** Yeah. We open-sourced it about two weeks ago, so it's very fresh. It's all open source, all the runtime stuff, all the tracing, all the parsing - it's all there.

**Jerod Santo:** Was that the plan from the get-go, or is that a pivot?

**André Eriksson:** No, it was entirely the plan. As a developer, you might not realize it when you just import a package, but we're all building on mountains and mountains of open source, from the first line of code we're writing... And I think not contributing back to that is - I wouldn't say a mistake; every product is different. But to me, being able to contribute back and being able to open-source this is incredibly important to me. And just for developers to have a look at something; even if it's not for you, it's at least different... And being able to have a look and see how it works under the hood - I think that's super-important. Over the years, I've learned so much from just opening up projects that I like and learning from that - "Oh, how did they do this? Okay." And then you dig into that, and suddenly you've learned something new.

**Natalie Pistunovich:** \[00:48:43.26\] So you liked all the open source tools that you had, and that's why you felt you want to give back and open-source your tool...

**André Eriksson:** Yeah. And we talk a lot about developer productivity and how Encore makes it so much better... But it's also important to remember how far we've come, both on the coding side, and the editors, and the languages, and the libraries we have - that's all because of open source. And then I think a big part of modern productivity for backend development is also due to the cloud (thank you, Heroku). And maybe the story there is not quite as good in terms of open source, but hopefully we'll get there.

**Natalie Pistunovich:** And how can the Go community help Encore?

**André Eriksson:** Well, that's a great question.

**Natalie Pistunovich:** Thank you! \[laughter\]

**André Eriksson:** I'd like to think -- like, we've talked about this, and I've talked with a lot of people, and a lot of people bring this up, about frameworks or not the Go way. And Encore is certainly not for everybody. I think it very much comes down to your requirements on your product, like what is it that you're building, and do you actually benefit from something taking care of all of these things or does it actually take away too much and it hinders your ability to innovate on your product?

If it is the right thing for you, then I would love your feedback. If it isn't, I would love to hear why not, and what is it about it that rubs you the wrong way, or whatever. I know it's very early days, and the things we support right now are limited and so on, but I very much believe that we can create a much, much better developer experience by eliminating these silos of these different layers that we've talked about earlier, by actually creating an experience that is with you from the first line of code you write, into how you're collaborating with other people, into testing and reviewing code, and all the way out into production and beyond... I think it's just -- there's so much potential there in terms of creating a really, really good experience... And any feedback, and any contribution for that matter - if you find an issue and you wanna fix it, or you wanna add something, I'd super-appreciate it.

**Natalie Pistunovich:** How do you give feedback on open source projects? Do you open an issue and say "I don't like this"? Is this how you do this? \[laughter\]

**Jerod Santo:** There are plenty of examples of that you can look at... \[laughter\]

**Natalie Pistunovich:** "It doesn't work on my machine."

**André Eriksson:** Yeah, that usually goes over well... \[laughter\]

**Jerod Santo:** "Let me tell you the ten reasons why this is terrible. One." \[laughter\]

**Natalie Pistunovich:** Well, at least this is detailed, you know?

**Jerod Santo:** Yeah... \[laughter\]

**André Eriksson:** Another thing you can do is just open a pull request that deletes the whole project. \[laughter\]

**Natalie Pistunovich:** That's a serious thing, yeah.

**Jerod Santo:** That's not unprecedented. It's happened. Maybe not on Encore, but it definitely happened.

**Johnny Boursiquot:** Awesome.

**André Eriksson:** I think when you do it, it's mindful to be respectful...

**Jerod Santo:** Oh, absolutely.

**André Eriksson:** Even if you have to understand where the author is coming from, and be respectful for their time, and maybe they don't share your perspective...

**Johnny Boursiquot:** And perhaps no free consulting...

**Natalie Pistunovich:** "Here's how you should do this..."

**Johnny Boursiquot:** \[00:52:02.13\] I will admit, when I first looked at Encore, I was in the "This does too much" camp. I'm interested in exploring it a little bit more before I have my final judgment of it. I'm curious, before we start to wrap this up, if Encore is sort of an all-or-nothing kind of framework. Can I have parts of it? If I don't like the deployment mechanism, if I already have a deployment mechanism, can I use some of it and not others, or is it an all-or-nothing?

**André Eriksson:** Yeah, so today, the deployment side is pretty all-or-nothing. That's the biggest thing that people have asked about, and it's something that we very much wanna open up more, just because you should be able to use it in whatever way makes the most sense for you.

**Johnny Boursiquot:** Okay. Alright. Like I said, I'm gonna withhold judgment. I need more data.

**Jerod Santo:** Well, you haven't converted him, but you've gotten him from hater to like tentatively interested. So that's a win, André. That's a win. \[laughter\]

**Johnny Boursiquot:** Yeah, you know... I have to give it its due, exactly. So... Guess what time it is!

**Natalie Pistunovich:** Uh-oh...

**Johnny Boursiquot:** It's Unpopular Opinion time.

**Jingle:** \[00:53:06.15\] to \[00:53:24.10\]

**Johnny Boursiquot:** So who's got some?

**Natalie Pistunovich:** I can start. The question, Johnny, that you asked me, if I think this is a good fit for juniors or not was supposed to be my unpopular opinion...

**Jerod Santo:** I wonder if she dodged it...

**Natalie Pistunovich:** Yes, I dodged it, and then when I heard André's answer, I even backed out of it.

**Jerod Santo:** Okay... \[laughs\]

**Natalie Pistunovich:** I got completely lost throughout this episode, so I will offer an unrelated unpopular opinion - conferences in online days should have live as a default.

**Jerod Santo:** Hm... Versus prerecorded sessions. Why?

**Natalie Pistunovich:** And I'm willing to take as a compromise over both. Alright, I hear that this is indeed unpopular. Nice.

**Jerod Santo:** Why?

**Natalie Pistunovich:** Having done both this past 1,5 years, the live way is more natural. I enjoy having small hiccups. Also because it feels more natural, but also because it's less time-consuming. When it's prerecorded, you have no good reason to have small hiccups. You get to be a little more creative with the 1,5 people who actually turn on their video, if there's such type of a feedback in a conference, or from responses and so on... It's not the same energy as in a live event, in-person event, but it's closer to that than completely prerecorded.

**Johnny Boursiquot:** Wow... I don't know what to think. \[laughs\]

**Natalie Pistunovich:** Then I managed to finally get an unpopular opinion. You should be happy for me.

**Jerod Santo:** I'm actually with you, Natalie... I'm with you.

**Johnny Boursiquot:** Not even a hybrid? Like, maybe prerecorded talk...

**Jerod Santo:** Default, she said.

**Johnny Boursiquot:** ...and live Q&A, or something?

**Natalie Pistunovich:** I'm willing to take the compromise of each speaker chooses.

**Jerod Santo:** Isn't it kind of weird that your talk is going on and you're hanging out in the chat, talking to people while your talk is going on? It just feels kind of like out of body.

**Johnny Boursiquot:** You can wait until the end... You can wait. It's not gonna be weird. \[laughter\]

**André Eriksson:** I really like it as a speaker, too. It feels just like -- you want those butterflies in your stomach. And when you're prerecorded, there's nothing on the line. If something goes wrong, "Oh, let's just do it again."

**Natalie Pistunovich:** And again, and again. \[laughter\]

**Jerod Santo:** Chris Hiller, who's a co-host of mine on JS Party, was talking about this... He's with Natalie, and I agreed - he convinced me. Because as a conference speaker, there's a completely different set of skills and things you have to do, versus somebody who's recording a "professional" video. He doesn't have the setup for video, he doesn't have the recording tools... He had to learn a lot of stuff to prerecord a nice talk, but he's very good at putting a slide deck together and showing up and talking. That's like a different skillset that you're asking people. So he didn't appreciate prerecorded for that reason, which I had never thought about.

**Johnny Boursiquot:** Yeah, I don't know how I feel about this one.

**Jerod Santo:** We're gonna put a poll out there, we'll see what the people say.

**Johnny Boursiquot:** \[00:56:12.28\] Natalie, you stomped me, for sure.

**Natalie Pistunovich:** I'm sorry.

**Johnny Boursiquot:** Here's the thing though -- and yeah, we'll get to the other unpopular opinions, but I have to opine on your opinion. So giving folks a choice - that's awesome. I think that's sort of the happy medium there. I've done both, and I will say, one of the thing - and perhaps others will sort of agree with me here - is that because when I have a prerecorded deliverable that I have to give, I spend a lot more time in preparation, in editing, and sound fixing... Because then it's like "Okay, this is a video production." I have to spend the time, and I don't have the time half the time, right?

**Natalie Pistunovich:** Yeah.

**Johnny Boursiquot:** So the level of effort is much higher for prerecorded than it is if I just show up, and in the middle of the talk if I'm "uhm" and "ahm" and all these sort of human quirks, I'd be okay if somebody said "You know what - you have to do it live." That way I don't have to agonize about it. I can just worry about the content, rather than worry about the content and the editing I have to do after I record it. So I can definitely see the value in that. But I think giving folks a choice maybe of a hybrid model where they give the talk and maybe they do live Q&A, or in the prerecorded talk the live Q&A afterwards, would be also a nice choice to have.

**André Eriksson:** Or live talk and prerecorded Q&A... \[laughter\]

**Natalie Pistunovich:** We've found it, the perfect formula.

**Jerod Santo:** There you go. The perfect formula.

**Natalie Pistunovich:** The only issue with this idea is that some people have internet that is not good enough, so...

**Jerod Santo:** True.

**Natalie Pistunovich:** ...it will not always work, unfortunately.

**Jerod Santo:** So many factors.

**Johnny Boursiquot:** That's true.

**Natalie Pistunovich:** Yeah.

**Jerod Santo:** Alright, André, what have you got?

**André Eriksson:** So I'm gonna pivot... We never talked about testing, but I have opinions on testing.

**Jerod Santo:** Hm...

**André Eriksson:** I think the testing pyramid is the wrong way up. I think we should spend as much energy as possible writing system and integration tests, and as little time as possible on unit tests.

**Johnny Boursiquot:** Oh, that's gonna be a tough one.

**Jerod Santo:** Describe to me the testing pyramid, because I don't recall the exact order of things. I remember the food pyramid, but that one was off too, I think...

**André Eriksson:** Exactly. \[laughter\]

**Johnny Boursiquot:** All pyramids are wrong!

**Jerod Santo:** I'm coming out against pyramids. \[laughter\]

**André Eriksson:** That's an even bigger take.

**Jerod Santo:** Yeah, that's really risky.

**André Eriksson:** So the testing pyramid is essentially saying that "Write the most unit tests, write fewer integration tests, and the fewest system tests." And I guess the nuance for me is that, of course, like everything, it depends on what you're doing. But in my experience, when it comes to backend development and application development, the unit test ends up being very brittle, because they test inner workings of your application. And the things that you're actually trying to keep stable are the interfaces to your users and between parts of the system.

So when you actually test those and you test the behavior of your boundaries, that is when you can actually reason about correctness that matches your users. And of course, if you're writing a mathematical function or a pure function, then those are the same, and unit tests make sense, because you define correctness in terms of inputs and outputs to that function. But when you're creating a system, you reason about correctness in terms of the work that that system is performing. And by writing tests at that level, you end up with tests that -- they don't break every time you refactor something. And if you do refactor something and you do it correctly, those tests will just keep on passing, in the same way that if you refactor the internals of a mathematical function, the unit tests will keep passing.

**Jerod Santo:** \[01:00:04.27\] So if you're supposed to write few unit tests, what would be an example of a unit test worth writing?

**André Eriksson:** I think everything you do is different, but generally, unit tests are great when you're dealing with a function that has a well-defined contract in terms of inputs and outputs. And I think especially when that function is something that is important to your application in some sense - if it's implementing a core part of your business logic... There was a company that was building an API for when you're packaging e-commerce orders - it calculated what's the optimal packing; how do you pack a box as efficiently as possible. What's the smallest box that will fit all the stuff that you ordered. And that's a mathematical problem that is essentially the foundation of their whole business... And you can probably unit-test that. So in a very extreme case, they can unit-test their whole business. But most of the time, your product is not expressed in terms of a mathematical function, and then you should be testing at a higher level.

**Jerod Santo:** Right.

**Johnny Boursiquot:** I can see it.

**Jerod Santo:** I'm not gonna disagree.

**Johnny Boursiquot:** Yeah.

**André Eriksson:** I mean, if you're already convinced, I'm not gonna have a shot at it being very unpopular, am I?

**Jerod Santo:** You've just explained it too well.

**Johnny Boursiquot:** No, it depends on how Jerod phrases it.

**Jerod Santo:** That's right.

**Johnny Boursiquot:** Sometimes he makes it all clickbaity.

**Jerod Santo:** Sometimes I misrepresent what you said on accident, because I couldn't quite draw it out... Here's how you do your unpopular opinions - if you want the best results, you say "Here's my unpopular opinion" and then you say a sentence. And that sentence needs to represent the unpopular opinion... And then you can say whatever else after that. Then at least I'll get it right when it comes time to the poll. A lot of people skip that step and they just start... You guys have done a great job so far today though.

So we'll find out if these were unpopular at @gotimefm on Twitter. Follow along and let your voice be heard. Vote on the poll. Let André and Natalie know. Johnny, do you have one for today?

**Johnny Boursiquot:** No, my unpopular opinion would be that I don't have to have an unpopular opinion, Jerod! \[laughter\]

**Jerod Santo:** Alright, man... I'm not gonna hold you.

**Johnny Boursiquot:** Alright, so listen - this has been a nice show. I learned a lot, I had some hard positions softened a bit, and I thank you for that... It's always good to unlearn some things, or really just open your eyes to a different possibility, so I definitely appreciate it... Thank you for coming on, André. To my co-hosts, Natalie and Jerod - it's been a pleasure having you here with me to do this... And yeah, I look forward to see how Encore grows and addresses the kind of needs that they need to address, and continue to be a great contributor to the Go community. If you are listening to this and you are interested in finding out more about Go, encore.dev is the domain, I believe. You can also go on GitHub (EncoreDev is the org) and see what the Encore repo has that could use your help as a contributor. Thanks again, André, for coming on the show.

**André Eriksson:** Thank you very much.

**Johnny Boursiquot:** That's a wrap.

**Outro:** \[01:03:08.15\]

**Natalie Pistunovich:** The food pyramid had lots of waves in the Slack channel.

**Johnny Boursiquot:** \[laughs\] The food pyramid is wrong.

**Jerod Santo:** Oh yeah, I wasn't in the -- the last thing I saw was Johann was agreeing with your unpopular opinion, Natalie, and I hopped out. Yeah, that food pyramid was whack, it turns out...

**Johnny Boursiquot:** Yeah. People were like "Well, anything the government does is whack", which is the \[01:05:04.10\]

**Jerod Santo:** Yeah. It was all lobby by big cereal, you know...? \[laughter\]

**Johnny Boursiquot:** Yeah, so... Yeah.

**Natalie Pistunovich:** I found kale to be very interesting, how across countries it's completely different. In the U.S. it's considered health food, but then you also find it in like an extremely fried version of that, as a chips variation... But in Germany, and I think also in the Northern Scandinavian countries, it's something like a Christmas food, or something you eat in winter, which is part of the comfort food almost. In students, it's a fundamental part of the food pyramid, you know? \[laughter\]

**Johnny Boursiquot:** Yeah, I totally believe that.

**Natalie Pistunovich:** It fits in all of them.

**Johnny Boursiquot:** I totally believe that if Coca-Cola lobbied enough, a bottle of Coke would be at the bottom of the pyramid. That's how it works around these parts.

**André Eriksson:** And I think big salad is a bit underfunded... \[laughter\]

**Johnny Boursiquot:** Oh, man... Big salad.
