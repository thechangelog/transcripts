**Jon Calhoun:** Hello, everyone, and welcome to Go Time. Today I'm joined by Matthew Boyle, the author of "Domain-driven Design with Golang." How are you doing today, Matt?

**Matthew Boyle:** Pretty good, thank you. Thanks for having me on.

**Jon Calhoun:** Thanks for joining us. We also have another Mat... Matt Ryer. How are you, Mat?

**Mat Ryer:** Hello. Yeah, I'm also good, thanks, Jon.

**Jon Calhoun:** So I guess you two couldn't come to a consensus on how to spell your name...

**Matthew Boyle:** Do you know what, Mat? You're the first Mat I've ever met that uses one t, actually.

**Mat Ryer:** Yeah, it is unusual... But it's useful for this, because that's how you'll be able to tell us apart. So John, if you want to say his name, you have to say Matt, and really pronounce it.

**Jon Calhoun:** Very clear.

**Mat Ryer:** And you can just drop it like you normally drop all your t's on my name, if you like...

**Jon Calhoun:** I feel like this would be easier if it was like an R, and I could like roll one a little bit longer, or something, but...

**Matthew Boyle:** I'm not sure if you had the same experience, Mat, but it was like 10 Matts in high school, and we just kind of unanimously agreed to respond to like Mat 2, or Matt 3, or Matt 1... And it worked pretty well.

**Mat Ryer:** \[laughs\] That's quite good that you're that organized.

**Jon Calhoun:** I feel like what normally happens is use last names, but I guess you guys didn't like that plan...

**Matthew Boyle:** Yeah, that would have worked. Sometimes the simple solutions are the best ones.

**Mat Ryer:** Was it zero-bound index?

**Matthew Boyle:** No, I don't think we were quite there yet... Which language was it the used one as an index? Maybe we were learning that in school at the time...

**Mat Ryer:** Actually, the fmt thing does; this always throws me off, if you use the verbs inside the fmt package. If you want to actually reference them. Because you can do that; a lot of people don't know that, actually... If you pass arguments in, like three arguments, in the actual verbiage you can put in special brackets and then put the index, but it's not zero-bound. So it's literally one is the first one, which just throws me off every time.

**Matthew Boyle:** I did not know that.

**Jon Calhoun:** But I guess the SQL package does that, too.

**Mat Ryer:** Does it?

**Jon Calhoun:** But everybody's used to that.

**Matthew Boyle:** Yeah, that's true, actually. \[unintelligible 00:02:25.07\] Yeah, you're right. There you go. We were ahead of our time, Mat...

**Jon Calhoun:** Okay, so today we're going to be talking about domain-driven design... So Matt, having written a book on this, seemed like a good guest to teach us everything we need to know...

**Mat Ryer:** I haven't written a book about --

**Jon Calhoun:** Mat, I wouldn't get you on here about something you wrote a book about anyway... \[laughter\]

**Mat Ryer:** Jon, you've got to do better with your T's... Otherwise we're not gonna get through this.

**Jon Calhoun:** It's gonna be tricky. Alright... So I guess we could just start off, Matt Boyle, at a high level; let's just start by talking about what is domain-driven design, and sort of like why would people care about it.

**Matthew Boyle:** For sure. So I think if we kind of break down the phrase, domain is usually the word that throws people off. But the way I think about domain is the problem space. And so if you think of it as problem space-driven design, as in "We're going to design our system around our problem space", I think the whole thing makes a little bit more sense as a concept. And I think that's why you should care about it. The closer your system is to the domain, in my opinion, the easier it is to reason about, and it makes it easy to make changes about it, too. So I guess that's kind of the starting point I would go for, is if you are working in a complex problem space, and you're trying to think about how to model your system, it makes sense to try and model it around the problem space. Because ultimately, that's why we write software, right? It's to solve problems for specific problem spaces.

**Mat Ryer:** The way that you say that makes it sound so obvious. What's the alternative? What are people doing where this needs to be a podcast?

**Matthew Boyle:** That's a good question.

**Jon Calhoun:** I mean, there's definitely other cases where I've seen -- MVC is another way that people structure stuff where they're not really structuring it around their problem space, they're just taking some cookie-cutter way of throwing your code around, and they're using it. And I think for some people, especially if you're brand new to coding or something, that type of "Okay, just put this type of code here, this type of code here" is a lot easier to get started with... Especially like in the sense of if you don't know your problem space very well. I think that's the other problem that some people run into, is that they haven't sat down to actually think about that.

But to go back to your thing about it being problems-based, I like that, because I've had several people reach out to me and basically say, "I can't use domain-driven design, because I don't know Go well enough." And like they're thinking that domain's referring to Go. And I'm "Um, that's not exactly what this means. I don't think your Go knowledge is actually going to be the limiting factor there."

**Mat Ryer:** I thought it was gonna be like "Get your domain name first for your project. Commit to it for at least a year. You've got a year to build it. That's your clock." And then if you don't do it, you get the reminders every year that you've failed.

**Matthew Boyle:** \[laughs\]

**Jon Calhoun:** That's how startups work, right? You've got to get the domain first.

**Mat Ryer:** Yeah. What are you gonna do? You can't call it startup something and then you find out you can't even get the domain. Domain-driven.

**Matthew Boyle:** I love that. And that is basically how all my side projects work. I'm the proud owner of probably like 30 or 40 domains that just kind of sat there... And I'm unwilling to give up, because I know someday I'm gonna build that idea I have... But I haven't quite got there.

**Jon Calhoun:** I feel like someday when I give a career talk, like if you bring your parents to work, or bring your parents to school to talk about your job, or whatever, it's going to be like "Does owning 30 domain sounds good to you? Then this might be the job for you." \[laughter\] Because every developer owns at least 30.

**Mat Ryer:** I like your first idea, bring your parents to work day.

**Jon Calhoun:** Bring your parents to work day?

**Mat Ryer:** Yeah.

**Jon Calhoun:** I could try that, too.

**Mat Ryer:** Yeah. Just get your mom on a podcast...

**Jon Calhoun:** It'd be interesting...

**Mat Ryer:** It would be for me, because I have no insight into your life, and I really want to know what's going on in your head.

**Jon Calhoun:** People tuning in might not care for it as much, but who knows...? Okay, so when we talk about using domain-driven design, what exactly -- you're saying it's like their problem space. Can you give some examples of what a domain really is, or like what it might shape into with some code, or just concrete examples?

**Matthew Boyle:** \[00:06:04.14\] Yeah, I think just to go back to a comment Mat made, firstly it's about - like, obviously, you're going to build software to model your problem space. What else are you going to do? And I think that's such a fair comment, because it seems obvious, but I think one thing that domain-driven design gives you is it gives you sort of principles, ideas, and a framework to work through to help you figure that out.

So I think there's so many key language and sort of ideas that domain-driven design sort of gives us, that helps us to think about what is the domain and what is the problem space. A couple of examples that I use in the book is - I think I build like a coffee shop system, right? And you may have a domain around ordering; like, ordering could be an entire domain in itself, because it's like a vertical slice of the business, that has all its own rules, it has its own language, it has its own sort of ideas and thoughts... And so to slice that off into a domain makes a bunch of sense.

And then you may have subdomains off of ordering, like maybe order fulfillment is a subdomain of ordering, and that's something that you want to kind of model separately, but use some of the same concepts you have in ordering. So that'd be one example.

I think another example I use in the book is like a wallet. You have the sort of domain of a wallet, and within that wallet you might have various different debit, credit, and - less relevant these days, but maybe cryptocurrency would be in your wallet, too... And modeling all those things separately makes sense, but they all kind of belong to this higher order idea of a wallet.

**Jon Calhoun:** So when it comes to organizing things this way, what are the perks that would cause people to care about actually separating them into these domains?

**Matthew Boyle:** Yeah, so I think the first thing, before you even get into code, the biggest benefit I've found in domain-driven design is something that -- there's kind of a couple of things. One is this idea of a bounded context, which is like within this circle we're gonna have a bunch of language, and ideas, and rules. And within our circle, they mean very particular things, and we're gonna be really specific about what those things mean. That's a really powerful idea, because it means that you can kind of communicate with non-technical colleagues about exactly what you're talking about, and when you say certain phrases, they know exactly what you mean.

So one example I always like to use here is like customers and users. These are the most loaded terms in software engineering, and they mean completely different things depending on who you're talking to, and even the teams within your company. So if you ask someone in marketing what are customers, they might say it's someone who's had an active subscription for longer than three months. If you ask me as a software engineer in a team that builds platform services, if you ask me what a customer is, I'm just like "Whoever's got a Cloudflare account as a customer, as far as I'm concerned." And it's really important that within our separate domains that we have an understanding of what those words and phrases mean, and then we can model them in our system. And then when we go to discuss and plan for our next project, or plan for whatever we're going to build next, and we've got some project managers, and perhaps some business folks in the room, as well as engineers, every time I say the word customer, even if I'm talking about a piece of code that I've written, everybody knows what I mean, and we're not going to find any of these edge cases or weird things that fell through the gap because I assumed that customer was x, when actually to other folks it meant y.

**Mat Ryer:** Oh, so this actually has use outside of the project itself; this is about actually speaking the same language as all the other people that you're going to be interacting with.

**Matthew Boyle:** Exactly. And I think for me, that's the most valuable piece of all of this is. If you can get it right, your system models, the business space, the problem, and you can reach a consensus on sort of various language, it means that you can have really great conversations about how things actually work, and exactly what needs to happen next with business colleagues, without having to do sort of this weird translation in your head between what you wrote in code and what happens in the system. Like, if you write your code well, and it's structured, you can say, "When you press that Convert button, a lead becomes a customer, and after six months, we convert that customer to whatever, and then if they leave, they count as churned." All of those words have specific meanings to our team, and if I've used those words and that language in my code, it's very, very easy for me to kind of have that conversation and everybody know what I meant.

**Jon Calhoun:** I would imagine another perk here is that if you're onboarding new team members, looking at the code helps them come up to date with like all the terminology that your organization uses... Because I suspect most people who join a bigger organization go through that period where they hear acronyms and all these loaded terms being used all the time, and have absolutely no idea what any of them mean their first week or two. And I worked at a government contractor for a while, and that was even worse, where I swear they had an acronym for every phrase under the sun. So your first like five meetings, you're like "I have no idea what just happened."

**Mat Ryer:** \[00:10:28.10\] You're like "FML."

**Jon Calhoun:** Pretty much...

**Matthew Boyle:** The only caveat I would give to what you said is in sort of domain-driven design, if you're kind of following it by the book, is you tend to scope this common language, which we call ubiquitous languages if we're using the terms from the books - we sculpt that to a domain and a team. So you mentioned organization; one sort of antipattern or thing that can often go wrong is you try and make customer mean the same thing to every team in your organization. And that's often a mistake. Like, outside of your domain, and your sort of little sort of problem space, your sub-problem space of the entire organization, it's totally okay if a customer means something different to you to what it means to a different team. And then we have a framework for translating between those two things, which in domain-driven design we call published language, which is effectively you can think of as documentation. It's not specific about the documentation or the approach, but an open API spec would be a great example of published language... Like, when we say customer, this is what we mean, and this is what we expect you to pass into our system, and this is what you're gonna get back, for example.

**Jon Calhoun:** So with domain-driven design, if I was working at a company where we wanted to consider it, is this something where -- is it possible without getting buy-in from everybody, including non-developer teams? Or is this something where you kind of have to get everybody to buy into this idea of having this scoped language?

**Matthew Boyle:** Yeah, I think that's where the power comes into it. And a lot of the emails I get since writing the book is basically that, like "How do I get everyone to adopt this? I've tried to do it on this one thing, and people aren't really buying into it." And I think to me, that's the power of it; if you can get your team on board with it, that's it. You're in a good place to get started with this.

So say me and Mat, we're working on a project together; the first step would be "Hey, Mat, can we agree that every time we use a word, and the other one doesn't know what it means, we just write a definition of it? Like, you go to the wiki and whatever you use, and we agree what a common definition for that is, because that confused both of us."

We've now started down the path to domain-driven design, and like really moving our organization to a place where we have a common, ubiquitous language that we can talk about. And it's a something you have to iterate on; you're not going to get all the language and things captured the first time. As we kind of navigate and build more things, we're going to learn things, we're going to change definitions, we're going to add definitions. So it's a commitment, but you can get started pretty easily.

I would also hazard a guess that some of the patterns, especially the more programmatic patterns that are encouraged in domain-driven design - I would imagine a lot of people are already doing some of them. A lot of this comes from the object-oriented programming world. Adapting it to Go was actually a little bit challenging in some ways, because it's not -- as you know, Jon, and I've read some of your articles on this same topic, it's not a one-to-one mapping of "You do this in the OOP world, and it works exactly in Go." So you've got to kind of think a little bit differently about some of them.

But I'm a big fan of things like the adapter pattern. So if you're gonna use a third-party piece of software or a library, and it returns some third-party model, instead of using that model in your code, you translate it into a model that you own, which makes you kind of decouple from that third-party library, and it means that if you want to move away from it in the future, it's a little bit easier, etc.

I imagine a lot of Go engineers are doing this already, and that's actually one of the things that's talked about quite a bit in domain-driven design, is how to do that. So you might find a lot of people are already on the journey without realizing it.

**Jon Calhoun:** I think that's one of the questions that we had, was for people who are scared to go all-in on domain-driven design, or like they can't, for some reason - how did they get started? And it sounds like basically just agreeing on some small things, like write some definitions down, and just use little parts of it is a great step moving forward there. So that's awesome to know, because it's really hard at times to get people to buy into like completely shifting how they write code, and everything there... But little wins can gradually lead to that success.

**Matthew Boyle:** \[00:14:04.14\] Yeah, and it's also totally okay for you to read -- there's a couple of really famous books about domain-driven design. Mine's not one of them yet. Hopefully, one day it'll be. But it's the Big Blue Book and the Big Red Book. The Big Blue Book is pretty hard to read, honestly, but I think the Big Red Book, which I think was written by someone called Vaughn Vernon, is really readable, in my opinion. And I think it's worth every engineer reading, even if the takeaway from it is "I don't think this is worth the time investment" or "I don't think this is necessarily right for us."

I think there's some really great conversations about why you should consider this, and also how to structure your software in certain ways that might be really helpful for you to getting started. One of the biggest challenges I find with new Go engineers, that domain-driven design personally helped me to kind of really think about, was package structure. Organizing a Go project is really, really hard, especially because it doesn't actually give you too many rules. It's one of the few things that Go isn't very opinionated about. And so having sort of a framework or a pattern to think about how it should look I find really, really helpful, personally. And most of my projects start in this sort of pseudo domain-driven design thing that I've sort of come up with over time, after working with lots of people, because it's just a really sensible place to start. And if you do it right, you start to avoid the cyclical dependencies.

I remember when I first started with Go, that was always the scariest error to get, is like "This package imports this package, which imports this package." And I was like "I don't know how to fix this now. I'm not sure where to go from here." So I think this can help with that.

**Mat Ryer:** Yeah. I should just say, The Big Blue Book domain-driven design is by Eric Evans.

**Matthew Boyle:** Thank you. Yeah, I should have said that. He's the one who started all this, so definitely worth considering.

**Jon Calhoun:** I was gonna say that that cyclical pattern you're talking about, I feel like that's even made worse by the fact that some languages allow it. So depending on what pattern you're learning and coming to Go from, that could make it even more challenging, because you can't just use those patterns.

**Matthew Boyle:** Yeah. An awful lot of people I've worked with in the past, including myself, truthfully, seem to land on Go from the Java world... And so I think we all go through this transition where we try to apply everything we knew in Java to Go... And it takes a while to break some of those habits. And some of them aren't worth breaking. Some of them -- when you challenge people on it, it's like "Why did you do that?" And it's like "Well, it worked in Java..." And sometimes making a compelling case for why not to do it in Go, other than it's not idiomatic, is challenging. So I'm still not sure where I land on that conversation, to be honest. I really like having sort of things to be standardized; it makes it very easy to transition between projects. But I also struggle -- when I can't give a concrete reason of why you shouldn't do that, it's kind of hard sometimes, beyond giving that "It's not idiomatic" response, which you see so often in the Go community.

**Mat Ryer:** Yeah, I do think we have to watch out for that, for sure. But it's interesting, because in a way, I think -- from the beginning of Go, I felt like domain thinking, like domain-driven thinking was kind of advocated for from the beginning. So in a way, I feel like at least this idea that you group things up by responsibility... And I do this if I'm modeling like a greeter thing, which is a classic example now, in smaller projects I may have all those things together; like, the actual model of inputs, outputs, messages... Having those things near each other really helps, because if you doing something to do with greeting, you know where to go for it.

**Matthew Boyle:** Yeah, 100%. And to be honest, a lot of people who looked -- if you google "Go package structure", which is a pretty common thing to do as a new Go developer, you're probably going to get given a project that kind of is encouraging you to organize things in a DDD sort of pseudo fashion. And I think I've seen some of your projects before, Mat, and I think I've seen that grouping. And the same for you, Jon. And Jon, I've read some your blogs, so I know you've consciously started to trend that way, but whether you always meant to, or you just kind of landed there after lots of experimentation, I'm not sure... But it kind of just speaks to the fact that DDD sounds scary, and it gives a bunch of formal language to a lot of things... But ultimately, I think a lot of people would land on some of these constructs themselves with experimentation anyway.

**Jon Calhoun:** \[00:17:57.10\] You had mentioned that some people will read the DDD stuff and they'll decide, "Hey, this is too much work. It isn't for me." So I'll definitely say that on my end, there are some projects where I know going into them that this is not going to be a project that requires a lot of active maintenance, or anything. And on those, I will sometimes just throw things together and like tightly-couple everything and just not really worry about it. Like, I might have like a GitHub user or something from their package just tightly embedded into my code, because it just doesn't matter for what that is. But you're right that as projects grow, I've noticed that a lot of them tend to trend towards that domain-driven design. And I doubt that I do it perfectly, given that it's kind of been something I've learned as I've just gone through designing stuff... So that's one of those reasons why I've always been weird about sort of sharing my thoughts on it, because I don't know if this is true domain-driven design, or if I'm doing something wrong and someone's gonna get upset about it... But it's like "Here are some patterns that have helped me organize code and decouple things", and it works a lot better at that point.

But it's also hard, because you were talking about like having a team working on stuff, and sometimes when you're working on either a very small team with one or two people, or by yourself, you don't really get that feedback... So that can be another challenging part.

**Matthew Boyle:** Yeah. I was gonna say, there's actually a really interesting part in -- it's in the Big Red Book, and I included it in my book, too. There's actually something called domain-driven design's scorecard, which may be really helpful to help you think about this stuff... And it kind of gives you a rubric and some thoughts about how you can think about the project you're working on, to see if it makes sense to actually apply DDD to that project. And some people will be surprised to know that DDD book, the original one, will discourage you from picking DDD for certain projects, because it understands that there is an overhead of doing a process like this, and it's not always necessary. If you're hacking on a side project, or if you're building something that only you're ever going to maintain, or you know exactly the purpose of it, I think it's totally okay to do the things you talked about.

And I think the key bit is do you do it consciously, right? If you consciously say "I'm going to \[unintelligible 00:19:48.24\] myself to this package. I know the consequences of that. I'm okay with it." That's slightly different to, "Oh, no, I've ended up in this dependency hell, and they updated it and it's a breaking version, and I can't run my software. I didn't know this could happen." I think there's a slight difference.

But for projects that have -- the really simple example I can see here is if your application has less than 40 user stories slash business flows, they actually don't really recommend considering DDD for your application. So a lot of solo workers on the small apps - it may be overkill for you.

**Mat Ryer:** Yeah. It's interesting as well to consider how you can evolve your structures, and things. If you start -- I think it's quite a safe place to start with DDD, because it maps so nicely onto the reality. Because it's too easy if you start like just thinking about breaking packages out, and just -- it's very easy to just make a mess that way, even though you feel like you're really doing it properly. And so I think one of the other principles that I think are quite important is being able to evolve things, and change things as you learn... Because you always do; there's always new stuff that you learn as you go.

**Matthew Boyle:** Yeah, I think it's a really good thought. And I think that fits perfectly into the - if we model our system after our problem space well, we should be able to do that evolution. And not just from a code standpoint, but from a business standpoint, too. One of the examples I use in the book is if you go to a coffee shop, and you purchase a coffee, and you get a stamp, you get a virtual stamp, which is if you get 10 of them, you get a free coffee, or you can use that to pay for a coffee... Like, let's imagine that the rules change; they want to do a special offer that you only have to buy five coffees to get a free drink if they buy certain drinks, or from certain locations. These are all natural evolutions of our system, that we are 100% going to go through as a business over time. And so if you've modeled your system in a way that all these things are quite decoupled, and the idea of offers and orders are quite decoupled, and you can evolve these things separately and quickly, it is really powerful. And then when someone from the product management team or the business folks come over and say, "What's our current logic for how we distribute loyalty stamps?" instead of having to kind of go find some archaic documentation, or trying to read some really difficult code, you can be like "Oh, well, on this line a user makes a purchase, and then if the purchase is successful, then we give them a stamp." You don't even need to convert that into common language, if you will, non-technical language, because it already makes sense, because you've modeled your system well.

**Mat Ryer:** \[00:22:17.20\] So how would you identify, if you opened a Go package, or you went to an open source Go package - what would you see that made you think "This is domain-driven"? And similarly, what kind of things do you notice when they're not? Or can you not tell?

**Matthew Boyle:** I mean, truthfully, I haven't really spent too much time kind of digging into that. One thing I do always pay attention to whenever I jump into a project is I always look at the package structure, and just see if it makes sense. And a lot of times the way it does make sense to me is if it's kind of split into like domains, if you will...

\[unintelligible 00:22:48.06\] a really good one for this. I always use that as a reference, because it's such a massive Go project... But if you head inside the internal folder there, I think you'll see probably hundreds at this point of different resource types. And if you click into those, you can see all these actions that you can take on these resource types. To me, that's a really sensible way to structure such a large project. As someone who's not massively familiar with Kubernetes, and maybe I'm looking for something specific, or maybe I'm just trying to understand how it works, to me that makes it very, very easy to kind of reason about and jump into. If I was really sort of trying to grade them for domain-driven design, I guess, I'd start looking at that decoupling between sort of libraries and like their own domain models would be something that I would look to... Because I think, for me, they're the really key pieces that make it really, really hard to iterate on a project and to kind of reason about how well maintained I'll find it to get stuck into it if first things aren't kind of done well.

One thing I've never really seen, to be honest, especially in the open source world, is an idea of like a ubiquitous language, like a "When we say these words, this is what we mean." I think that would be useful for some projects, honestly, but I've never really seen that in a repo, I don't think.

**Mat Ryer:** Yeah, I think that is a good idea. I quite liked your idea earlier of having that as a rule, that you say, "If anyone doesn't ever know what we mean when we say a thing, call it out; make this normal practice." It's very common; especially when new people join a team, they feel like "Oh, everyone already knows this. I'm an idiot for not knowing it", which of course is not true. And yeah, if you do have that glossary as well that's built up, that makes that easier, sure. And probably you could start doing that anytime, right? Like, you could just start today and say, "Okay, from now on anytime we say a term that means something specific to us, we'll get that written up, have a nice definition, maybe a couple of examples..." I like that idea.

**Jon Calhoun:** I feel like it's also a good way to get somebody new contributing immediately. Just that sense of "Hey, I didn't know what that word meant. Can you tell me and I'll go add it to the glossary?"

**Mat Ryer:** Oh, you mean other people contributing that?

**Jon Calhoun:** Like, if somebody new to the project, like you're saying, doesn't know what a word means, which is completely natural - if they just say "I don't know what that means, but I will add it if you tell me what it means", so now they have to explain it to them, but then it gets added, and that person actually feels like they're making an impact to the project instantly, versus "I need to take weeks to get up to speed" or something.

**Mat Ryer:** Yeah. A nice, quick win, isn't it?

**Matthew Boyle:** A hundred percent.

**Break:** \[00:25:13.29\]

**Jon Calhoun:** So when we talk about using domain-driven design, I feel like other things like distributed systems and gRPC and a bunch of other stuff comes up. So how does that stuff sort of relate to each other?

**Mat Ryer:** And on that point - is this really only useful when you're building microservices? So you have like a microservice that is solving and dealing with a particular piece, and then you have a separate microservice... Does this make sense across the board?

**Matthew Boyle:** Yeah, that's a great question. It's one I get asked a fair amount, to be honest. In the book, I did two examples. I built a very small, monolithic application using domain-driven design, and then I built a microservice. Truthfully, I think microservices are easier, especially from that "Where do I start?" perspective, because you only need buy-in from whoever's working on your microservice, right?

The monolithic approach is a little bit harder, because I think you do need more -- you probably need wider buy-in, especially if you have like lots of lint rules and things set up to enforce certain standards on how your repository might look; it does take a more holistic change. But I do think, depending on how you structure it... For example, say you have code owners of specific folders and domains within your monolithic application, you might already be trending in the right direction anyway, and it might be more you're looking for guidance from the patterns, for example... Like the adapter pattern we talked about before, or this idea of open host protocol, which is we only expose a subset of our system, and we make it very clear what you can do. And having things like rules around how you discover -- even naming conventions. This was very common in the Java world; you would call things like repository layers. Spring really popularized having like a repo layer, services, and it generates all this stuff for you... So having sort of ruling around what you name things can make it very easy to jump between the projects. So it definitely can work in a monolith as well as it can work in microservices.

On the sort of distributed systems standpoint, I do find people talking about them together, which I think is -- I hope it doesn't do it too much, but I think it does maybe scare people a bit about sort of raising the barrier to entry. I think one really interesting thing that happens as you scale a company, whether you mean to or not, is you start to split teams into domain-based teams. And whether you get that right or not can be reflected in your code. Most of the companies I've worked at we've been split into like the payment team, and the platform team, and the firewall team at Cloudflare, for example. Like, we've all got this very small slice of the world that we own... So you're kind of naturally in domains anyway. So it kind of makes sense to start thinking about patterns you can use to make it easy to communicate some of these changes that happen in your world to other teams that might be interested. And I think that's where kind of taking some of these domain-driven design concepts and applying them to distributed system thinking can be really, really valuable.

One trade-off you have to make pretty early if you want to adopt some distributed systems paradigms is the concept of eventual consistency, which is something domain-driven design truthfully tries to avoid. Like, if you follow domain-driven design from a purist standpoint, it tries to get you to group things that are related into things called aggregates. And those aggregates are intended to maintain some sort of transactional guarantee.

So an example, again, might be something like an order. If I make an order, and I need to take a payment for that order to be successful, and then I also need to dispatch like a physical item, those three things are all connected. So maybe I'll wrap them in an aggregate and I'll treat them as a single thing for the purpose of my code. However, the problem is when you move to distributed systems, you may have an ordering team, you might have a transactions team, for example; you might have a fulfillment team. All these people need to hear about your order, they may need to have a view on it, and you've got to kind of start making decisions about when is it okay for a transaction to almost be eventual. Like, when can we have eventual consistency within the system, and when can we not?

So thinking about when that's acceptable and when it isn't is a really great conversation to have up front. And if you started to model your world in terms of aggregates, you would have discovered that quite quickly, that actually we probably shouldn't dispatch something until the payment's been taken for it. So from a thinking perspective, it's very, very helpful.

\[00:30:15.28\] And then there are some other patterns that are kind of really popularized in the DDD space, that aren't necessarily domain-driven. One thing I'm a big advocate for, that often gets linked to this, is the event-driven architecture route, which I think is a really powerful paradigm. An example of this would be - say a user onboards to the system; we would announce an event, "A user just onboarded" after it's happened. So after the event has been completed. And then all the different things within various other subsystems that care about a user being onboarded can then listen; they can take their own action, and they can -- eventually consistently we'll update the state of our system to understand that user joined, and maybe we've created them a card, or an account, or a website, or whatever it might be that it needs for them to happen now that they are onboarded. And that can be so powerful, because it means that you've now allowed teams to like ship separately. Like, we're no longer coupled in terms of, "Well, I can't work on my feature until that happens", because I don't care about any of that stuff. All I need to do is know that eventually a "user onboarded" message is gonna show up here, and I need to take an action off the back of that. So that's kind of a really powerful style of thinking, I think, that's evolved from this world.

**Mat Ryer:** Yeah. And again, you can do that within a monolith; that as a design, as a choice, you get to make that anyway. And it often will -- you are essentially decoupling, like you say. You're decoupling these things so that they're separated by some other layer, and that allows us to have more flexibility, and do more things.

**Matthew Boyle:** Yeah. And there's a really common thing... If you start reading around domain-driven design, you're going to eventually come across CQRS, which is like a really popular pattern that people like to use in this space. CQRS stands for Command Query Response Segregation, and it's the idea that you can actually divide your system into two parts. You can have this path for querying, and this path for updating effectively the system. And the way this approach suggests is that you can -- if you issue a command, as they call it, it should either answer a question or update the state of the system, but not both at the same time. And this is a really sort of powerful way of thinking about kind of modeling some of these -- what nowadays would be considered distributed system tasks, but in a more monolithic application world.

I do know -- I think it was Laravel. Laravel really leans on this concept of commands and issuing commands. It's actually built directly into the Laravel framework, and it's really, really powerful. It's really well thought out, and it makes it very, very easy to use that. Basically, in memory it's just got an event bus, and it's doing exactly the same as Kafka, or Rabbit MQ, or whatever it might be doing under the hood... But it's just shipping messages back and forth between things that are interested in the code. And again, that's in a monolithic application, you can do these things. It's super-interesting.

**Mat Ryer:** Yeah, but do you pay a price then...? So there's more going on, and so there's kind of going to be a cost to that, right? So this is back to really like -- for small projects or in some cases you might not bother. But how big is that toil? What is the overhead, and what sort of things are there?

**Matthew Boyle:** I think I think you're right, there's definitely overhead here, and there's toil... And to me it doesn't really make sense. If we're talking about distribute systems again, in that sort of world, I don't think it makes sense until you've got, I don't know, 20-30 engineers to maybe even consider this.

I think some companies start as microservices, and can be really successful there. I think you have to really know what you're doing to do that. But for a lot of companies, you're probably better off starting with like a monolith, and kind of just focusing on delivering value. A lot of this stuff is shape and structure to how you can make changes safely and deliver value as you scale. If you're comfortable, and at the moment your goal is to ship, I definitely -- I think it'd be great for everyone to read about this, and just make sure they kind of in their head have a clear path to get here maybe when they need to... But I think you're right, there's tons of overhead that comes with this, and it's not really necessary until you hit -- like, if you hit a point when your team are stepping on each other's toes, and you're waiting for that pull request by that team to be merged, for that one to be merged, and perhaps you're seeing bugs or issues or misunderstandings around requirements, that's probably the time you should go "Hang on, this isn't working for us. Maybe we need to think about the way we plan and ship software", and domain-driven design is a really good place to start.

\[00:34:26.19\] If you're iterating fine, you're shipping fine, you're not really seeing many issues, you're doing a great job doing what you need to do and you've got a really great sort of line of communication with the folks who are making decisions, it's probably overkill at this point, I think.

**Jon Calhoun:** We talked about distributed systems then... I know you have talked about -- in your book, I believe it goes into gRPC, and how that relates to domain-driven design. So I guess what's sort of the link there, and why does that end up in the book and get talked about?

**Matthew Boyle:** Truthfully, I just look for any excuse to talk about gRPC, because I love it. For internal communication, I think gRPC is probably one of the greatest things that has been invented, if you will. I think from a DDD perspective, I've mentioned the idea of having sort of published language, which is -- as my team looking out towards the world, this is what our contract looks like, this is what our... In the same way in a monolith, or in sort of any application, you can define a contract, right? Like, when you talk to me, this is what it's gonna look like. This is the function signature I'm going to satisfy. We can do the same thing to other teams, too. And usually, we'll define an open API spec, or maybe we'll write in a wiki just what everything means, or maybe we'll write a protobuf. And I guess my thoughts on gRPC is protobufs are very, very readable. They kind of give you forwards and backwards compatibility out of the box. And one of the really powerful things about gRPC, especially if you are working in a bigger company or a bigger team, is that it has support for generating code for lots and lots of different languages.

So as much as I wish the whole world would just use Go, sometimes for some reason people pick other languages... And so being able to support them and not be opinionated about how they build their systems is really, really powerful. And that's something that starts with a protobuf, which is more about -- most of our protobufs in Cloudflare are sort of 10-15 lines long, and they've got very clear headings about what this is, what the type of it is, it gives you that type safety... And from that I can generate code for so many languages.

So that sort of -- domain-driven design has this concept of, as I mentioned, open host protocol, or open host service; basically, opening a subset of our system to the world. I think gRPC is a really great way of satisfying that particular piece. And if we're building distributed systems, or building anything truthfully, we're going to have to find a way to share it with people somehow, and protobuf and gRPC in general is a really great way to do that, I think.

**Mat Ryer:** Have you used gRPC much, John?

**Jon Calhoun:** I've used it in toy projects; nothing beyond that. I liked what I used. It was cool. It just -- I haven't run into a case where I'm like "Okay, this definitely makes sense." I've definitely -- I need to spend more time with it, because I think it's one of those technologies that people have been like "Hey, will you make a course about this?" And in some cases, sometimes the questions confuse me. I had somebody ask me to make a course or show them how to test a gRPC type setup, and I'm like "It has an interface there for you. It's basically just testing like an interface." So I was confused about some of that, depending on how they're doing it... But that's not to say it's a bad question. I think sometimes people just - sort of that goes over their head, that hey, when there's an interface, you could mock whatever you want at that point, and pretty easily test anything that way. But no, I haven't used it in a large project.

**Mat Ryer:** Well, Matt, do interfaces help? You'd mentioned that it isn't necessarily a natural fit for Go... But do interfaces play a big part in this?

**Matthew Boyle:** I think so. Especially if you're doing it within the monolith, for sure. I think all the good software engineering practices that you know today are still relevant here. And you'll often see DDD, TDD and BDD said in the same breath, which again, I think is confusing, and it's another barrier to entry. It's like "What do all those different things mean? Which one should I care about first, and which one matters?" But as you're building out your domain-driven projects, I still highly recommend following TDD practices, and ensuring you've got great test coverage, because it gives you even more safety that you're doing the right thing.

\[00:38:27.28\] And if you name your tests well, again, it's just another further way of describing some of the business logic, and making sure all the edge cases are covered for you, too. So 100% interfaces are invaluable, because otherwise it just makes it really hard to test some other stuff.

**Mat Ryer:** Yeah. Is TDD even easier if you follow domain-driven design?

**Matthew Boyle:** It's a good question. I'm not entirely sure, to be honest. I hope so, because I think it will give you -- I've spent an awful lot of time talking about package structure, but I think for me that's one of the biggest values I get out of this. It makes it very easy to structure my applications... And so then it also makes it very easy to reason about tests; like, all of my actual business logic lives within these files, and so I'm going to make sure they've got great test coverage. And I can test them in isolation, and then maybe I'll have some integration tests above those to test like bigger flows... But from a sort of TDD standpoint, it's like I'm going to start with this specific entity, I'm going to do some testing around that stuff, and then I'm going to move on to the next bit. And I find that quite powerful in how I think about this stuff.

**Mat Ryer:** Well, one of the questions I get all the time is "What's Jon Calhoun's problem?" \[laughter\] But the second most popular question is about this, about the subject of package structure; how should I lay out my projects? So just as a sort of thought experiment, and a bit of an exercise, Matt... Let's imagine we're going to model an online shop, and this is a Go project... And we expect this is going to be big, so we want to follow domain-driven design practices; there's going to be lots of teams, lots of people interacting. What folders do you create? Talk us through a little bit of what this repo looks like.

**Matthew Boyle:** \[laughs\] I feel very on the spot. So truthfully, when I open my IDE, the first thing I always do is I initiate a go mod project. So if you use Go Lands, it does this for you; when you create a new repo, you just point it at your GitHub repo you're eventually gonna have, and now you've got Go modules. So you're already on the right path. I then make a CMD repo, which is kind of -- it isn't really a domain-driven design thing, but I think it really does help, especially if you expect to have more than one binary. So I create my CMD folder, and then I create whatever my project is going to be called. So I'm gonna \[unintelligible 00:40:34.17\] I make sure it runs, I'm in a good spot. So step one, we're all good.

The next thing I do is always make an internal folder. So I'm actually not sure if this is the latest practice, so please forgive me if this is incorrect, but in the olden days you used to make an internal folder and a PKG folder. The internal folder was -- it was meant to be \[unintelligible 00:40:57.05\] not to import anything from within this project, but if I'm correct, I think Go actually stops you from importing from other projects' internal folders.

**Mat Ryer:** Yeah, they enforce that now, too.

**Matthew Boyle:** Awesome.

**Jon Calhoun:** I think they also enforce it like at a nested layer. So if you had -- inside your CMD project, as a random example, you stuck another internal folder, it would actually stop anything from above that level from importing stuff. It's something like that.

**Mat Ryer:** So that's the thing in Go, yeah... Internal packages -- well, it's a folder called Internal, and that essentially means "This is for this area only. Don't import this elsewhere." And that is very important, because essentially, you're protecting those things from becoming dependencies unexpectedly, right?

**Matthew Boyle:** And that's really powerful for domain-driven design, because you've basically -- I talked about this idea of a bounded context, and we have our own sort of language that doesn't necessarily need to mean anything to the outside world... Well, Go actually gives you a way to enforce that. So if you have your Internal folder, and you put all your internal stuff, and language stuff inside there, and then you have this separate concept where people can import your published -- what you deem to be a published language, you've kind of decoupled yourself already. So you're already setting yourself up for success by following the model of having that Internal package.

\[00:42:14.21\] I think the Internal package is fantastic. I actually didn't know that it was enforced, so that's even better news. I thought it was just kind of hinting, and I've always kind of followed those rules for the projects. So it's great that I actually can't; so that's awesome.

So inside that internal project you would then make -- how I typically do it is I'd have... In this instance, let's say for the coffee shop example, I might have Loyalty, which to me sounds like a domain. You may have a loyalty team. Inside Loyalty I would probably make another file called loyalty.go. And this is where sort of the main sort of models and some of the services and logic for loyalty would live.

**Mat Ryer:** So that matches the package name. So the .go, it matches the package name, and that's how "This is kind of like the important starting point almost of this package."

**Matthew Boyle:** Yeah, that's what I do. I've seen other people do different things, and they like to break out their project into lots of little files... There's an old principle I got told a while ago, which I really, which is to declare things as close to where you're going to use it as possible. And so by doing that, it really means that I have not many files, to be honest; I tend to kind of squish things, and tend to move them when they get too unwieldy and they don't make sense. But the fact I can have a Loyalty package, with loyalty.go, and then loyalty\_test.go, and I feel like my intentions are very, very clear about what's going on there.

**Mat Ryer:** Yeah, and as well, I think about the practical usability of that... If everything was called like models.go, or handlers.go inside these packages, when you're sort of navigating the files quickly, you have to do a bit more work to figure out "Is this in the right folder?" And very often I've done this before in projects that don't quite follow that, where you open the wrong file and it's just really confusing. You really feel like -- and it sort of doesn't make sense, and it's just literally you've probably jumped into a different folder.

I like mono repos, too. So this is kinda like -- those usability things become quite important. And I follow the same pattern. It's like, that file that matches the package... If it's a main.go, that's different. But again, it tells you this is the main place. I think that's quite a nice pattern.

**Matthew Boyle:** Yeah, I think that makes sense. And then I would just follow the same sort of pattern, honestly. This is the thing, once you get into it, there's no real complexity here. Like, if I started talking about the payment domain, I'd make a Payment folder; I'd have the payment.go... The only difference I might have in something like the payment world is I might make a file called stripe.go, I would do particularly. And then that would be in stripe.go -- I would probably define my interfaces for the payments in payments.go, and in the stripe logo I would satisfy that interface for Stripe specifically, and then that just allows me to have that looser coupling. And you just follow that through for the rest of your project, obviously.

**Mat Ryer:** So if you have HTTP handlers, where would you put those?

**Matthew Boyle:** Yeah, that's an interesting one... So I've tried a few different approaches to this. I'd be interested to hear what you two think on this, actually... So I've tried declaring the handler.go inside the domain. So I would have like -- in the example we've used here I might have payment.go, stripe.go, and then maybe handler.go, which would be my HTTP handler. I then might have another package called transport, where I'd kind of gel all these things together and start my router, and then use that main.go to start a HTTP server.

I think that makes sense, but sometimes I feel like it makes more sense to group HTTP as a concept, and maybe put all the handlers in transport.go, and then all those handlers do are very loose things. All they do is they receive the request, they validate that maybe specific headers and things are on it, and then I just call down to a service layer. So the HTTP layer becomes really, really light, and I don't really see the value of putting a handler in every folder. I'd love to hear what you think and where you've landed on that one.

**Jon Calhoun:** \[00:45:44.26\] I don't feel like I've actually landed on one being the perfect solution, is the best way I'd put it... Because I've tried all sorts of -- the most obscure one I tried was I literally tried to make every handler its own package, essentially, and inside of that I was defining what it's expecting to receive as part of the request, and what it's planning to respond... And then I had to sort of decouple everything, so that whenever you were setting stuff up, you had to make sure that that all translated correctly with like an adapter layer. And that was way too tedious. Like, it was just -- it was like kind of cool at first, like the sort of uniqueness of it... And then after you started managing the application with it, it was like "This is brutally way too much." So I've stopped doing that.

I like to have my handlers kind of chunked up based on what they're related to. So I think I would tend to do something along the lines of like in Loyalty I might have a handler.go with all the loyalty-related handlers inside... Payments, there'd be another set of payment handlers... But it's also hard sometimes where you'll be setting up your application and it really needs like three different sets of handlers to even function correctly... So it feels a little bit weird there, where you're like "Well, I need all three of these anyway. Why are they separated?" They're not as linked as they are.

**Mat Ryer:** Yeah. And I think you're right, if you're using code generation, which I do quite a lot... I use code generation, which generates a lot of the boilerplate bits - then that literally goes into one file, because it's code gen; it's not something I'm ever going to really touch. And then I use interfaces for services to sort of like -- then that's where the real thing happens.

But this is interesting, to consider that... But I think in your world, if there was anything specific in the handling, I would probably expect to go to like the Loyalty folder, and that's where I would want everything, basically, to do with loyalty stuff. So yeah... But it probably depends on, like you say, what they're doing; if they're just simple boilerplate things and they're all the same, then... Yeah, interesting.

And what about databases? Often, you'll have -- say, you'll have the loyalty thing, that's the public type, that people see and interact with. But then you may also have your own internal database type. What do you do with those?

**Matthew Boyle:** Yeah, that's another one where I've gone back and forth a little bit on it, personally. Typically, what I do now is I actually make a folder called Store, and in there I will have repository.go and store.go. So inside store.go I'll typically do like a lot of the boring stuff in regards to the database; like, I actually getting myself connected and set up, and maybe providing some small abstractions there... And then in the repository - again, I've gone back and forth; I have like a storeloyalty.go, and inside that I'll have all the loyalty repository related activities. So writing and reading from the database.

I've also tried putting that in the Loyalty folder itself. I think I like it better in a separate package, for the exact reason that you kind of hinted at then, is that it's very easy to get confused between internal types and database types. And one of the biggest anti-patterns I've seen, just not even in domain-driven design, although it's a big part of it, but just in software in general, is intrinsically linking your business logic to your database. And that can create real challenges, especially if you let the database tail wag the dog, as it were; if you let a bunch of your logic or the design of your application start to be shaped by the database that you've chosen, you're gonna have some real challenges in the future as you try and upgrade databases, or maybe migrate from Postgres to Mongo... These things happen fairly irregularly to most people, so perhaps it's not something worth worrying about... But as you start to work in bigger, bigger companies, these things do happen occasionally, especially the database upgrades where you need to get new features, or deprecate this, that and the other. So having that separation of concerns is really valuable.

So to let you put them in different folders, one where you're going store, the package is called Store, and you're going store.loyalty, and you get a model - hopefully it gives you some hint that you probably shouldn't be using that in your application layer, and it probably should be pushed down a little bit.

I think that's where I've landed for now... But one thing I hope that people take away from this conversation if nothing else is we all write a lot of Go, and we're still not sure on how to do these things. We're still experimenting and moving things around, and you should totally not be afraid to do that, even if you've got lots of senior people on your team telling you not to do X, Y, Z... Experiment, because you might find something new that works really well for you.

**Mat Ryer:** \[00:50:05.26\] Yeah. I love the idea of having the package name right there in the code, so that you can see what the type is. Do you end up having lots of translation types, where you're just basically changing one struct to another?

**Matthew Boyle:** Yeah. And if you're being a purist, I definitely do. But this is what I mean... One thing I hope people do take away from my book is pragmatism; you can implement these bits in pieces and in chunks, and you can choose to skip the ones that slow you down, that you may not think are valuable. But as long as you can have a good conversation about why that trade-off is okay, that's totally fine. And I've definitely seen, in some of our service layers, going from the database layer directly to the application model, without using a repository. And if you're being a purist, you would say "Never do that." But if you're trying to move quick, and you know the trade-offs, and you know the tech that you're accruing, it's a lever you can pull, and that's completely okay to do as long as you make your JIRA ticket and you think about going back to it when it matters.

**Jon Calhoun:** I'll definitely say that's something I've done a lot myself. I know I shouldn't be basing my stuff off the database models, because I've seen how it leads to like poor API design, and all sorts of other stuff where you're not really giving the end users the data they want, you're just giving them the data that's easy to fetch at that point, based on the database model you have... And I'll start that way, but I usually do it, like you said, with the mindset of "I know at some point if this gets big enough and evolves enough, this needs to change." But I think this is a way quicker way to get started, to just have that database ID or something just hard-coded in there.

**Mat Ryer:** Yeah, there is something that is gives you an acceleration if your API essentially matches a lot your database... But that is then coupling it. So you are then -- that is then a firm thing that you are... And if and when it's time to break that, you then have to be prepared to pay the debt to do that. But the thing is, you may never need to. So it's interesting about when you start applying these things, and what you can really get away with. Kicking things down the road, I think, kicking the can down the road is often talked about as a fail of the team, or something, but it can genuinely sometimes really be the right thing to do. Maybe it's time for the Unpopular Opinions bit, but... Sometimes, if you can defer a decision and not paint yourself into a corner, you can move a lot more quickly. But I think it relies on -- you have to be honest and admit that I'm getting this advantage now, and may well have to pay that back later.

**Jon Calhoun:** I think people ignore the fact that projects cost money, and you need to prove that it's actually worth the money that's being spent, which means at some point you can't just be like "I'm going to make everything perfect code, and be so pragmatic." You have to be more pragmatic, I guess, and just say "We're gonna focus on the important stuff, and we'll fix those things later, when the project is earning money and it's actually able to pay for this."

I feel like that's one of the reasons why some people would benefit from working at a startup or something small, where they don't have a corporate budget, and they actually have to find a way to make money, versus -- like, at a corporate gig usually it's "Here's the big project. You've got two years to build it." So it's not like you're sitting there thinking, "Oh, I have to prove that this works in the next six months." It's more like "We have plenty of time to sit down and design everything, and get it right." And it makes sense there, because Google can't release some half-baked product that's completely terrible to their millions of users. That doesn't make any sense.

**Mat Ryer:** Yeah, there's something nice as well about how some of the pain that you start to feel is really a really good indicator that something needs to be done. Matt, you mentioned this earlier - if if it's working, and it's painless, and it's kind of easy, then great. Maybe you've got it right. But as you start to then hit that pain points... And I think test-driven development -- I mean, I personally only do test-driven development now. \[short pause 00:54:06.12\] Why is it hard to test? Could it be made easier to test? Could you change things to make it easier?

\[00:54:21.22\] I've also heard the counter argument, where people say, "Well, just because you're writing tests first, it shouldn't change the design of your system." In my experience, it should, and it does, and it's better when it does. That's just in every case I've ever seen. But this is the interesting thing, I think - there is very little that's right and wrong in software. There's loads of ways to be successful. But this - yeah, I mean, Matt, I really... I'm gonna get your book and give it a read. It's "Domain-driven --"

**Jon Calhoun:** And you also have to give it a review.

**Mat Ryer:** Oh, yeah. Okay.

**Jon Calhoun:** You know how hard it is to write a book... You've got to help review these books. And anybody who's listening,

if you happen to grab Matt's book, definitely leave a review. That helps so much when you're authoring a new book.

**Mat Ryer:** Yeah. Unless you hate it, in which case don't worry about it. Just keep \[unintelligible 00:55:05.06\] to yourself.

**Matthew Boyle:** Yeah, let me know on Twitter if you hate it instead.

**Mat Ryer:** Yeah, yeah. This is "Domain-driven design with Golang", for those that want to find it.

**Matthew Boyle:** Yes, yes.

**Mat Ryer:** We'll put the link in the show notes, as well. And you can get it as an eBook, and they've also got to try this innovative thing where they print it out... Matt, is that right?

**Matthew Boyle:** \[laughs\] Yeah, they will send you like a physical copy, which is rare in this day and age. But if you want to, you can purchase one. Rather interestingly, most people are buying physical books over eBooks for technical books. I'm not sure if that's a technical-specific niche, but yeah, I was quite surprised to see the uptick on the physical version is much higher than the eBook.

**Mat Ryer:** Yeah. I get that because we're on the screens all the time. It's really nice to be able to go somewhere else, and have a book, frankly. So I'm all-in on -- in fact, I struggle with Kindles and other eReaders, honestly.

**Jon Calhoun:** It's also really satisfying to just be able to like markup a book with like "Oh, this is a cool idea. I want to try it." And it's harder to do that on other stuff. It doesn't feel as natural.

**Mat Ryer:** Yeah. But if you're trying to look up what a word means, and you don't have the glossary handy, and you press and hold a book, you can really embarrass yourself in a Starbucks, and you have to go home, because you feel embarrassed.

**Jon Calhoun:** You also have to like code everything, like letter for letter, and hope you get it all right... But maybe that's a good thing.

**Mat Ryer:** That reminds me of how I learned, was copying BASIC code out of magazines, and making little games that way. So I'm very happy doing that. And actually -- I don't know, I find that that gives me some advantages in some ways, weirdly. It's like one of those -- you see people that just use keyboards and they don't use the mouse, and they're amazingly fast, because the from the olden days.

**Matthew Boyle:** In university, I always remember in second year we had this programming exam, and you weren't allowed to use a computer. So it was all on paper. And you had to write this Java program to do something; I don't remember exactly what it was...

**Mat Ryer:** Java as well?

**Matthew Boyle:** Yeah, Java. And I always remember that I got marked down because I incorrectly imported a package; like, I hadn't imported the correct package. And I thought I was so mean. I was like "Are you marking me down on paper for not importing a package correctly?" It always stuck with me.

**Mat Ryer:** Yeah, but you've never made that mistake again. \[laughs\]

**Matthew Boyle:** No. All my packages are imported correctly all the time now.

**Mat Ryer:** There you go. Put that in your CV.

**Matthew Boyle:** \[laughs\] "Can import a package."

**Jon Calhoun:** "Ten years importing packages..."

**Mat Ryer:** "Gets it right first time, every time." That's your advert. That could be on your book. Is that on the back of your book? It's like, all the packages have been properly imported.

**Matthew Boyle:** I can't even guarantee that's true. I hope it's true, but... \[laughter\]

**Jon Calhoun:** He's like "We wanted to make sure we fix the bugs before the second version, and we'll put it on the second."

**Mat Ryer:** Gotta give him a reason to get the second edition, I suppose...

**Matthew Boyle:** Exactly.

**Mat Ryer:** "Now with improved imports."

**Matthew Boyle:** \[laughs\]

**Jon Calhoun:** It is now time to talk about Unpopular Opinions.

**Jingle:** \[00:58:00.26\]

**Jon Calhoun:** So Matt, we'll start with you. Do you have an unpopular opinion you'd like to share?

**Matthew Boyle:** I do. So I actually was trying to think deeply about a technical one. Because I know most people share technical ones, but I... Most of mine have been covered, honestly, on other shows... I really enjoyed the one -- I think it was last week's; it was like "The right tool for the job is not the right tool for the job." I really identify with that one.

So I've gone for one which I think is incredibly controversial, because I can't find anybody who agrees with me on this... But I think you should be able to take your laptop to the movies, or to the cinema with you if you're from the UK, and you should be able to sit there and like program and type while you're in there, in the movies.

**Mat Ryer:** \[laughs\] What?!

**Matthew Boyle:** Yeah, that's kind of the reaction I get.

**Mat Ryer:** What's the thinking there, mate? What's going on? Are you not interested in the film?

**Matthew Boyle:** No, not at all.

**Jon Calhoun:** How often does this happen?

**Matthew Boyle:** So I think I've seen probably thousands of movies, but I couldn't tell you what happened in any of them, because I usually sit and watch TV with my partner; she's watching something, and I'm just like working on a project, or writing a book, apparently, doing stuff like that. I love having the background noise, and I love having something to look up at and be like "Oh, that's interesting." But I'm not necessarily that engaged with the film. And truthfully, I struggle to sit there for like three hours, watching something, especially if it's not very good. However, it doesn't mean that I don't want to see parts of the latest and greatest films. I think it'd be very nice to sit and watch the latest and greatest and see snippets of whatever the Rock is up to this week whilst programming away on my side projects. And I feel like there's a market for this. I feel like there are other software engineers and other people who quite happily sit, not necessarily making a bunch of noise, but just have sort of that backlight on their laptop, where they could kind of sit and work on something while they're watching the latest and greatest film.

**Mat Ryer:** Right. So like an ADHD screening, or something. You can have those ones where you can take your babies, screaming babies...

**Matthew Boyle:** Well, I feel like we're trending in this direction anyway. There's all these cinemas now where you can like -- you can take food in now; you can get like a full meal served to you at some of the cinemas... So I feel like we're only one stretch away from being able to have a full business meeting in the middle of a movie, so...

**Mat Ryer:** Yeah, but you've got to draw the line somewhere. What next? Toilets? Each seat is just a toilet as well... For those that really love the film. Do you know what I mean?

**Jon Calhoun:** Those are the people who pay for like four films back to back.

**Mat Ryer:** Yeah... \[laughs\] Well, to be fair, yeah, they do need that.

**Jon Calhoun:** See, the toilets might also help them make money, because then you're gonna buy more soda and more all the other stuff that's there... Whereas Matt's gonna be going in there not buying popcorn or anything, because you can't eat popcorn and type on a computer; that just doesn't work. At least I don't know how you do it without greasing up your keyboard so bad.

**Mat Ryer:** Well, Johnny Boursiquot's got a tip for you. This was on a previous episode; Jon, it proves you don't listen to the podcast episodes that you're not on...

**Jon Calhoun:** I listen to some...

**Mat Ryer:** He uses chopsticks to eat Cheetos.

**Jon Calhoun:** Chopsticks?!

**Mat Ryer:** Yeah, for Cheetos; so he doesn't grease his fingers up when he's typing. I actually think that's brilliant.

**Jon Calhoun:** Have you ever seen -- there's like little things you can get between your two fingers... This is terrible for podcasts. It's like almost chopsticks, it's just attached near the knuckles of your like two fingers, so that you can still type, but then you can just like reach up and squeeze your two knuckles to grab it and eat stuff.

**Mat Ryer:** What?! I can't even imagine that.

**Jon Calhoun:** I swear -- I don't know where I've seen it, but I saw it somewhere. I'll have to find it.

**Matthew Boyle:** It does sound like you're describing scissors, I think...

**Jon Calhoun:** It's not scissors... I know what scissors are. I have a four-year-old daughter who loves arts and crafts.

**Mat Ryer:** That's nice. But would she do that whilst in the cinema, or would she sit like a good girl and watch film?

**Jon Calhoun:** If we gave her the option, she'd probably do arts and crafts during the cinema.

**Matthew Boyle:** Yeah. There's a market for this, Mat... Do you see?

**Mat Ryer:** Yeah. Well, so hang on there, Matt... Have you sort of like just passively watched all the major films, but you don't really know what they are?

**Matthew Boyle:** \[01:01:58.02\] Exactly. I could tell you various -- if I just happened to have looked up at the right time, I could tell you some of what will happen in some of these films... But honestly, \[unintelligible 01:02:03.17\] I've watched a film all the way through.

**Mat Ryer:** Let's do a new section then, "Glance reviews" by Matt Boyle. Right? Describe the Terminator movie.

**Matthew Boyle:** \[laughs\] I don't think I can do it without swear words, because I remember the key bits where he says, "Give me your clothes." That makes you look up, and you're like "Oh, wow, this is like a good bit." So I watched the action film. I have to say, if you're gonna glance-watch a film, the Marvel films are fantastic. Every time you look up, something cool is happening. It doesn't have any context, you don't know why it's happening, but it's awesome to watch.

**Mat Ryer:** That's true, you don't need the context even, right? It's like "Oh, well, these two superheroes are fighting. Cool!"

**Matthew Boyle:** Exactly. And it's a great way to spend five seconds while you're waiting for your code to compile, you know?

**Mat Ryer:** Yeah. I suppose as you went from Java to Go, did you find that you knew less and less about the films?

**Matthew Boyle:** \[laughs\] Yeah, things just got too fast. I'm thinking of going backwards, actually, and maybe I'll start writing some PHP again, and then I'll get a slowdown in my development stream, and I'll have more time to watch movies...

**Jon Calhoun:** I feel like this really just means that your partner wants you to go to more movies, and you just want to code more. So you're looking for like someplace that will let you do both.

**Matthew Boyle:** Yeah, I think so. I think that's fair.

**Mat Ryer:** See, I don't get away with that, because she says to me, "I want to have a shared experience. You can't just be sat there, tapping away..."

**Jon Calhoun:** My wife's terminology is "I want quality time. This is not quality time." And I'm like "Yeah, that's fair."

**Matthew Boyle:** I definitely get laptop closed -- like, "You have to watch this. This is a laptop closed sort of evening." I definitely do get in trouble sometimes, but I do get away with it more than it sounds like you folks do, so maybe I'm just lucky.

**Mat Ryer:** Yeah. This is like "Laptop closed because Arnold Schwarzenegger is about to say he's gonna be back, and you can't miss this. It's classic."

**Matthew Boyle:** Otherwise, you won't know what happens in the other two films when he shows up.

**Mat Ryer:** When he comes back. \[laughter\] You're like "Hang on, why is he back?" "Well, if you'd have paid attention in the first film..." That's a really interesting one. That I guarantee will be, I think, our most unpopular opinion.

**Jon Calhoun:** There's no way it's popular.

**Mat Ryer:** But imagine -- hang on... So the other thing is -- so this is where I'm kind of with you. If I'm watching -- if there's tech in a kind of movie, futuristic tech stuff, or hacking... You won't know this reference, Matt, but there's often 3D cubes need to be completed, and then you know you've hacked into the system, and things like this... I sometimes do get quite inspired by stuff like that. I'm like "Ah, that really makes me want to do something."

**Matthew Boyle:** "I'll have to get a Rubik's Cube."

**Mat Ryer:** I'll have ideas... Do you do a Rubik's Cube with your laptop there, and you sort of just glance up at it every now and then and see how well you're doing?

**Matthew Boyle:** \[laughs\] No, absolutely not. I must admit, I haven't taken inspiration from films. So maybe I should watch them. It sounds like -- you know you've been pretty successful with some of your side projects, Mat. Maybe I should pay more attention, and maybe mine will be more successful.

**Mat Ryer:** It depends what film, I suppose. Don't take any inspiration from the Terminator, please. Especially now the AI is

getting really good. Don't pop it in a strong metal body, is my advice.

**Jon Calhoun:** You don't want him to watch that and be like "I could do that. The technology's there."

**Mat Ryer:** Yeah. I saw someone the other day and they said to me, "Maybe I'll be back", like a sort of tentative Terminator. That was really strange. But yeah, it's funny. Do you miss a lot of references and stuff, Matt, do you think, because you sort of --

**Matthew Boyle:** I don't think so, because I spend way too much time on Reddit... So I think a lot of the key references that people are going to use... I'm usually quite ahead of the curve, honestly, because -- it's probably hilarious; I'm probably now watching the film to read about it on Reddit, or to watch the subset of the memes that have come up from it, and so I learn that way. So between my glancing and the memes, I've probably caught most of the story, if it's important.

\[01:05:48.27\] Maybe it's just me, but I feel like films are way less interesting generally these days, in the cinema anyway. It seems to be a lot of rehashes, and big blockbuster action films where the story isn't great, so I just don't feel massively inspired to sit and dedicate three hours to it, and so I'm quite happy to work on something more interesting and just kind of glance up.

**Mat Ryer:** I agree with you on those kinds of sort of big broad movies like that. But there are some great movies, like Primer. That one you kind of do have to watch it properly. It's a time travel movie, but it's very complicated. Probably you'd like it. It's complicated and hard.

**Jon Calhoun:** He would somehow watch it while programming, and be like "Oh, it makes complete sense, because I missed all the other stuff."

**Mat Ryer:** Like A Beautiful Mind, ain't it? \[laughs\] It might just be that you're too clever, Matt.

**Matthew Boyle:** I don't think that's the case, no. \[laughs\] My high school teachers would disagree with you on that one, I think.

**Mat Ryer:** Yeah, but sometimes if they're not smart enough, they don't notice; they just think "He just has his laptop open all the time in class \[unintelligible 01:06:45.15\]

**Matthew Boyle:** \[laughs\]

**Jon Calhoun:** He's playing dodgeball, just typing away. Alright, Mat, with the short T, do you have an unpopular opinion you'd like to share?

**Mat Ryer:** I do. The bullet points in Wikipedia are way too close to the text, frankly. I don't know what's going on there. You need a bit more space, I think. Genuinely, it's the primary reason why I don't donate.

**Matthew Boyle:** Speechless. \[laughs\]

**Mat Ryer:** This is like your movie \[unintelligible 01:07:17.09\] ain't it, Matt?

**Matthew Boyle:** Yeah. I must admit, I don't know if I've ever noticed. So I don't know if this is more about me or you, but I just... I use Wikipedia a lot. To be honest, I get quite frustrated with the big banner that shows up when it's time to donate. That's more infuriating than the bullet points. I understand why they do it, of course. But yeah, I've never noticed the bullet points. So I imagined now every time I go on Wikipedia, they're gonna stand out to me really clearly, and it's gonna annoy me now, too... So I appreciate that.

**Mat Ryer:** I hope so. Yeah, that's what I hope.

**Jon Calhoun:** I was going to tell you if you zoomed in that maybe it'd give you a bigger gap, but I don't think it actually does.

**Mat Ryer:** Not these days. It used to do stuff like that. But no... I don't know; honestly, I'm sure they've done usability. There's a lot of information they pack in, and maybe that's it. They're like "You know, people have donated three pounds, three dollars to this a year, so we've gotta really make it good for them." So they're like "Let's pack the info in, because these people..." I do donate to Wikipedia, by the way.

**Jon Calhoun:** I feel like there's no way they did a usability study, because I feel like if they did, then all this text would have like triple space between all the lines... I feel like every time Gmail does a usability study, all of a sudden they're like "Here's the new UI. You can see four emails on your whole screen."

**Mat Ryer:** Yeah. Well, that's the kind of design principles; like, you do want to give things space, and stuff... And I understand how that happens. But yeah, I don't know...

**Matthew Boyle:** I wonder how much you'd have to donate to get them to specifically move the bullet points for you.

**Mat Ryer:** Well, it's Wikipedia. I should be able to edit them myself.

**Matthew Boyle:** You should write a script to edit every page...

**Jon Calhoun:** I mean, I'm assuming they're using some sort of shared stylesheet.

**Mat Ryer:** Yeah, probably...

**Jon Calhoun:** If they've got a new style sheet for every single page, then no wonder they need donations for their server bill every day... \[laughter\]

**Mat Ryer:** Can you edit -- yeah, it's a shame when you click Edit, you can't just edit the entire page though, including the CSS, and submit changes like that. It should be Wiki CSS as well, I think.

**Matthew Boyle:** There's probably a good reason for that, I think...

**Mat Ryer:** Yeah.

**Jon Calhoun:** I'm pretty sure I can think of an old social network that is pretty much living proof as to why you can't do that.

**Mat Ryer:** Yeah... Yeah, I miss those websites that were terrible. When the texture, the background was a repeated image of something, and you couldn't read any of the text, and you'd have to highlight it to read it... Come on, bring it back.

**Matthew Boyle:** I love it every now and again when like a Geocities site trends, and you get to like a -- there's always nostalgia from the past, of these Geocities sites that someone built for their dog, or something... I love them, honestly. I think the internet was a better place back then.

**Mat Ryer:** Yeah, it does feel like it sometimes...

**Jon Calhoun:** Alright. Well, Matt, thank you for joining. Mat, thank you for helping me host. Everyone else, thank you for joining us, and as Matt said, go check out Matthew's book, "Domain-driven Design with Golang."
