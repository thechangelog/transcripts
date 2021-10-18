**Jerod Santo:** \[00:31\] Welcome to our first Spotlight series, recorded at OSCON London 2016. I'm Jerod Santo, managing editor at Changelog. Coby Chapple has been a product designer at GitHub since 2012. This conversation took place shortly after GitHub Universe, where they launched projects, transactional code reviews and GraphQL, all of which we discussed in depth.

Coby drops a lot of knowledge bombs in this interview, so take a listen.

\* \* \*

**Jerod Santo:** So just tell us your name and where you hail from - like not from GitHub, but where you're from.

**Coby Chapple:** Sure, so my name is Coby Chapple. I hail from New Zealand originally, but I also lived in Australia for a long time too, before moving to the U.K. I've lived around a few places in the U.K., I've lived in Northern Ireland and Scotland, and now I live in London.

**Jerod Santo:** Oh boy, you're a world traveler. How does London measure up?

**Coby Chapple:** It's a big city.

**Jerod Santo:** I walked around yesterday with a friend who's local, and we just walked and walked and walked, four or five hours, and just kept seeing more London.

**Coby Chapple:** Yeah. The crazy thing about London is coming to terms with the fact that even if you had a full lifetime, you could never see it all. It's just so big and there's so much history, and it's constantly changing; you never can see it all. Once you do accept though and you relax a little bit, it can kind of make it a little bit more enjoyable. It takes the pressure off.

**Jerod Santo:** Cool. So you're a product designer at GitHub - tell me about that.

**Coby Chapple:** Sure, so a product designer at GitHub basically means I'm focused a lot on the interactions and the workflows within the products; we have a fairly well-established visual style, so most of my work isn't visual design as such. There's some of that, but most of it is looking at the workflows that we have and the things that people are trying to achieve with the product, and as we add new features or change features - or sometimes remove features - making sure that all the workflows still make sense, that they're as obvious as possible and as clear as possible... So it's focused much more on the interactions and the workflows than the visual design.

**Jerod Santo:** What's the biggest single change that you've made, that has had the most impact across the product? Even if it's just a refinement.

**Coby Chapple:** Probably the thing that I've worked on directly that I think has had the biggest impact was a lot of the workflows around doing web-based edits to files on GitHub. From the very early days at GitHub, from very early on in the product, it was possible to edit files in the web, but you couldn't create them, you couldn't rename them, you couldn't delete them...

**Jerod Santo:** Right, it was very limited.

**Coby Chapple:** You could only edit them. If you wanted to create a file, you had to create it in your editor locally, commit it and push it, then you could edit it online. So we had Ace just embedded in the website for a long time. So one of the things that I worked on a while ago was making it so that you could create files online from scratch, and then looking at moving them and renaming them and deleting them... Basically doing the basic, quick edits.

The other thing following on from that workflow-wise was the quick pull request feature. So it's one thing to be able to be on a branch and quickly create a file, but that's a direct commit, and if you do that just directly on master, there's no review, there's no cycle. But if you wanna make a quick change and also have review happen, what we did was at the bottom with the commit we also allowed you to - at the time that you were about to commit - create a new branch and a pull request to have that commit go to.

That's the kind of stuff that I like trying to identify in a product - a shortcut to an existing process that otherwise would be difficult to do or not obvious that you should have this reviewed, but actually making it possible for people to opt in easily to a process that should happen.

**Jerod Santo:** \[04:12\] I love when a product that you use or a website that you use a lot slowly gets better -- maybe even quickly gets better, it's better than slowly, but you just notice over time... You're talking about shortcuts, and as a user, because you have such a technical product and people use it all day long, we're more likely to notice those small things. Like, "Oh, this is easier now." Those little delight moments... I like to build those myself, but also just even as a GitHub user, I've experienced over the years where it's like, "I'm not the only one who thought this was too hard", right? Now it's easier, and you're not gonna write a blog post about it, but overall it's like polishing things up. I think that's probably very rewarding/satisfactory -- or what's the word? It gives you satisfaction... What's that word? Satisfying. \[laughs\]

**Coby Chapple:** It is satisfying, and that's one of the reasons I enjoy product design. Before GitHub, I worked for a long time as a freelancer, so I was still doing design work. Sometimes it was on products, but at the end of the day it was client-focused work, and I got sick of that. I kind of realized that what I really wanted was long-term responsibility for...

**Jerod Santo:** A single thing.

**Coby Chapple:** ...not necessarily a complete product, something as giant as GitHub, because there's so many different parts of it, but what I like is the responsibility for the things that I build. If I build something, I like being able to see how that's used over time, use it myself, and if something isn't as good as it originally should be, or if I realize that there are other things that need improvement, I like to be able to go back to that and actually have long-term responsibility for a product. I like that.

**Jerod Santo:** I'm not sure if you mentioned on air or not, but you mentioned that the aesthetic, the feature set, the general interface had been established for a long time, and that you're working on specific workflows, specific aspects, refinements... As a product person, do you strongly differentiate between interface and experience, the whole UI versus UX? Do you think about these things in the silos? Is it all one big blob to you? How do you think about it?

**Coby Chapple:** That's a good question. I think that I don't get too caught up in the labels; I think a better question to ask is what do you actually do on a day-to-day basis.

**Jerod Santo:** Okay, let me ask you a question... What do you actually do on a day-to-day basis?

**Coby Chapple:** So there are some people who class themselves as UX designers that do a lot of coding; there are some people that class themselves as UI designers that don't touch code at all. And I think it doesn't matter. If you care about someone's experience, you might design UI. If you care about interfaces, you might focus on wireframes. It doesn't really matter...

**Jerod Santo:** Why do we give each other these labels?

**Coby Chapple:** I don't care as much about the labels, I just look at "Okay, here's a product, here is something that could be better about the product. What physically needs to happen on it...? Who needs to sit down at the computer and talk to who else? How much brainstorming do they need to do? Do they need to just jump straight to code, or they need to do prototypes first?" It'll depend on the project, it'll depend on the change, it'll depend on the product. There's so many things that it depends on that... I don't know...

**Jerod Santo:** Ultimately, isn't it all user experience?

**Coby Chapple:** Yeah, at the end of the day you're creating a product. It's probably a business, it's probably for achieving a certain set of tasks... If they could do that better, then cool, make the change.

**Jerod Santo:** As Steve Jobs said, "The design IS how it works", it's not like one versus the other. Form follows function...

**Coby Chapple:** It doesn't matter what the job title is of the person who made the change, what matters is that the change needs to happen.

**Jerod Santo:** \[07:53\] Yeah. So you guys have been doing refinements for a long time - those small shortcuts, those tweaks... I love all that, but recently at GitHub Universe you had some major new features. One that I love is the code review feature... Mostly because now I can create a bunch of comments and send a single email, which was like my biggest gripe. Because we use GitHub a lot for editing prose, blog posts, and now we're gonna give -- it's not code review, but it's prose review.

**Coby Chapple:** You're drafting...

**Jerod Santo:** Yeah, grammar, and we're helping and we're giving advice and thoughts... So I may review a 3,000-word document for somebody, and I may send them 17 emails to do so. And I actually apologize afterwards. Like, "I apologize that you just got 17 emails, but I have line notes", you know? So that ability is amazing.

The other big one is the Projects feature. Tell me about both of those in summary first.

**Coby Chapple:** Sure. With the code review thing, we have the exact same problem ourselves. For a lot of the blog posts you write or press releases or internal documentation, we use pull requests ourselves and we have the exact same problem of like, okay, not only do we just get a lot of emails, but sometimes the first email will be "Hey, I noticed this...". Second email, same deal. Three emails later, "Oh, I see this other line, which makes all of these previous comments redundant." So that's what's great about the code review feature - you can actually batch it, and if you discover before you send the review that you wanna go back and change your earlier comments, it actually improves the quality of feedback. So it's not just improving the code, it's also improving the conversation.

**Jerod Santo:** Right.

**Coby Chapple:** That's kind of one of the goals we had, because we had this problem and that's what we wanted to solve.

**Jerod Santo:** One thing about that problem is like, even though it annoyed me, I was empathetic to it because I knew that it was hard to solve. There's a lot that goes into actually batching that up and providing it as a single thing... The user interface itself has a lot of concerns, there's a lot of ways you could build it, make it hard to use.

**Coby Chapple:** The reason it's complicated is as soon as you go from, okay, "Here is a pull request that you can comment on", to "Here is a process that you can go into", it creates this state where something can be unfinished, but still saved in the product, and that creates a whole set of interface problems of like, "Okay, what it someone starts a review but the browser crashes? How do you get back to it? How do you represent that there is an incomplete thing that has been started?"

**Jerod Santo:** Do you remember what happens in that case? This hasn't happened to me, so I don't know.

**Coby Chapple:** Right, so I haven't used that part of the product enough and had things go wrong yet to kind of be able to say...

**Jerod Santo:** I haven't, either... There's so many things to think about.

**Coby Chapple:** Yeah, there's a lot to think about, and it's a technical product to start with. That's one of the challenges of being a product designer: "How do you take something that is deliberately technical, deliberately complex - because it's a technical product for technical people - and make it approachable?" It's not about making it simple - it's a distinction we've always had internally at GitHub... We don't wanna simplify it for people?

**Jerod Santo:** Why not?

**Coby Chapple:** We don't wanna dumb it down, because the people that use our product are highly intelligent people, doing complex work that requires...

**Jerod Santo:** Nuance...

**Coby Chapple:** Nuance, and a lot of...

**Jerod Santo:** Faculties...?

**Coby Chapple:** They might wanna use lots of different tools at different times, so you don't wanna remove it and say, "Just use this hammer for everything." There should be a lot of options to use, and it's a case of making them approachable and...

**Jerod Santo:** Usable? \[laughs\]

**Coby Chapple:** Approachable is probably the best word for it, because it can still be very complex and it can still be very technical...

**Jerod Santo:** What about "discoverable"? I think that's maybe a little bit different angle, but...

**Coby Chapple:** Yeah, discoverability is a huge thing, and that's a big pet peeve of mine I have...

**Jerod Santo:** Let's hear it.

**Coby Chapple:** A pet peeve of mine that a lot of people do in product design or in interaction design is things that show up on hover. There's a bunch of things that I personally get --

**Jerod Santo:** \[12:01\] Because people will never know that that exists.

**Coby Chapple:** The analogy that I use to explain how frustrating this can be is imagine you're in a room where the doors only show up when you're close enough to them. \[laughter\] How do you get out?

**Jerod Santo:** Stand near a wall...

**Coby Chapple:** Like, just walk around the perimeter of the room until something turns up? Or a door handle that unless you reach for it won't show up.

**Jerod Santo:** It's tough though, because you're fighting against clutter.

**Coby Chapple:** You're fighting against clutter, but that also begs the question, "Why is there clutter?"

**Jerod Santo:** It's a complex tool. \[laughs\]

**Coby Chapple:** Yeah, it's a tough set of problems.

**Jerod Santo:** So even this... We're talking about the code review aspect - you can argue it's a refinement to a thing that existed... It's a big change to a thing that existed, but Projects is like a brand new tab. So tell us about Projects.

**Coby Chapple:** Projects is something that we have wanted internally for a long time, because we like simple workflows and simple, basic building blocks of functionality that are flexible. We don't wanna dictate workflow to people, because what works in one company or in one open source organization or in one personal project is gonna be vastly different from what one of those other things needs.

So we're building a product that a huge variety of people and situations -- it needs to fit into a lot of different things, and so we don't wanna get heavy-handed about process. That's a philosophy we try and take in lots of different places in our product. For example in the code review, we don't dictate...

**Jerod Santo:** How you do it...

**Coby Chapple:** ...we wanna provide options like, "Okay, if you wanna protect this branch and don't allow other people to commit to it", we should have that as an option, but we don't tend to get opinionated about that.

So with Projects, we wanted to start with something very simple. It's a fairly basic set of functionality, but the goal is to create something that, similar to our issue tracking -- like, our issue tracking is fairly simple, but that means it's flexible, and people can build on it; as a platform too, we want this to be something that people can build their business on, or build integrations with, and we wanna provide that functionality going forward.

Projects is interesting, it's the first time we've expanded our product functionality in terms of like having a new tab...

**Jerod Santo:** Right, or a new page...

**Coby Chapple:** It's the first time we've done that in a while, and hopefully it's something that's gonna be a big part of our product going forward.

**Jerod Santo:** I have lots of questions about Projects, and I realize that you may not have all the answers, but one aspect of it is, is it loosely tied to Issues but it's not a hundred percent tied to Issues? That seems, like it was a tough spot - again tradeoffs... But how do Issues relate to Projects and what were the decisions there?

**Coby Chapple:** Sure. The thing with Issues and Projects... Projects - there are lots of things that are involved in a project. Sometimes it's an issue, sometimes it's a pull request, sometimes it's a comment that's on a commit, or it's just a general observation that someone has, so we don't wanna force people to create an issue for that, we want it to be somewhat flexible, so that's why this idea of notes or cards...

We're looking at ways that we can bring in some functionality of like issues and pull requests, or improving what can be part of a project in terms of the functionality, but at the end of the day the problems you're solving with a project are not technical problems; they're people problems, they're project management concerns, so we want it to stay as flexible as possible. There will be improvements to this part of the product going forward for sure, but we wanna make sure that we're not building a bunch of stuff to solve problems we don't know people are gonna have yet in terms of using functionality.

**Jerod Santo:** \[16:02\] Yeah, that makes sense. Another question, and this one seems more fundamental to me - you guys decided to make a project at the repo layer of abstraction, right? Like, you attach a project on this repository, right? A lot of projects span repos...

**Coby Chapple:** Yep.

**Jerod Santo:** I mean, I could think of -- even inside the Changelog we have a couple different... We have our website codebase, then we have Nightly's codebase, and we may have a redesign of a certain aspect that's gonna touch multiple things, and that's a small change. I think Ethereum has like 16 Go projects, and it's all one thing. The bigger you get, the more you're breaking these down into simple repos. What was the decision behind putting it at the repo level and not this layer above where you could pull in things from everywhere?

**Coby Chapple:** Yeah, that's a great question. That's a question that we've asked ourselves a lot, and we have the same problem, too.

**Jerod Santo:** \[laughs\] I'm sure you do.

**Coby Chapple:** GitHub is a 600-person company; there are so many things that we want to happen that span multiple repos, there are so many things that maybe are not even related to code, but our organizational concern is that they don't have a repo... But that's one of the other things that we have always done at the company - we create a lot of repos internally, ourselves, and we use them in a way that is very liberal. We liberally apply repositories to problems. Even if there's no code attached to them, maybe it's just a couple of markdown files that represents a team or maybe it's a loose organization of people separate from the organizational structure that might have a repo with some information about it; that's why a project associated with a repo can be quite flexible. At the organizational level there's still a need for this.

One of the problems that we haven't really found a satisfying way to solve is how to have things live at different levels and still make sense, because we don't wanna just create projects within projects within projects, and have this infinite nesting thing, because then we're potentially creating all kinds of other informational architecture issues that people can run into very quickly.

**Jerod Santo:** You also end up with a junk drawer often times, where everything goes in this one big thing.

**Coby Chapple:** Right. Whereas with some of the changes we've made recently to the pricing mode as well -- because for a long time at GitHub we had unlimited repos ourselves...

**Jerod Santo:** But I didn't! \[laughs\]

**Coby Chapple:** Right, exactly. So that was one of the main motivators for some of the pricing changes - we want people to be able to create as many repos as they want, so that they can use repos in a flexible way that we've seen work internally.

For the moment, with those changes that we've made, and then introducing things like Projects, now people can create as many repos as they want, and have projects attached to them. That's something that we've seen work really well in our company - liberally creating repositories and using them in whatever ways make sense for that team or individual.

That's why Projects are at a repo level at the moment, but we're definitely looking into ways that we can have it span multiple repos, organization-level stuff... It's something we're thinking a lot about, but it's a non-trivial problem to solve...

**Jerod Santo:** I definitely can see where that would be difficult to do.

**Coby Chapple:** Another interesting facet to that is our product is also an enterprise product. We have an on-premise version, and in that situation you actually have a third level of hierarchy. It's not just teams and organizations. They have a dedicated instance... In many enterprise organizations, the Organization feature of GitHub is actually their department, so there's like a third tier of things you need to consider, which...

**Jerod Santo:** Yeah, that's interesting. I've never thought about that.

**Coby Chapple:** \[20:01\] So there's other things that we need to consider in terms of how our product decisions are gonna affect our product in different ways.

**Jerod Santo:** That leads me into this next thought... Looking at Projects - you guys just launched it; was it November 2016? No, it was November, because right now it's October. When was that? August, September? I don't know... Fall of 2016. It feels very, very 1.0. Here's where the question is - you can interpret a feature like this in two ways, as a person who has no idea, an outsider: one way is "They're just getting started, and this is a minimum viable Projects, and this is a huge new thing, and they just wanted to launch it." The other one is, "Yeah, this is a checklist feature. It's gonna stay this way forever. They just wanted to have Projects so they could have Projects and move on." Can you say which one of those it is? Are you guys working on this? Is it ongoing?

**Coby Chapple:** We are actively working on this as something that's gonna be improved a lot in the future.

**Jerod Santo:** Awesome.

**Coby Chapple:** This is very much the simplest thing that could possibly work, but that's not how it's gonna stay.

**Jerod Santo:** Cool.

**Coby Chapple:** That's something I'm very confident in saying. We built early versions of it ourselves and started using it internally, and we want this to be something that we can depend on internally ourselves, and that means it's gonna get improved.

I think also the biggest thing, like I said before - we want other people to build on this too, so that's why we're spending a lot of time getting the basics right, before we start adding complexity to this part of the project. Because if we don't get the basics right, it'll make it hard for our integrators, for all kinds of open source projects to integrate with GitHub, and the GitHub platform and ecosystem is hugely important to us. Whenever we make a product decision, we have to factor in how that's gonna affect the people that are building their businesses or they're building interesting projects... Even universities and educational institutions that are building stuff using our data, like our publicly available API - there's so many things that we need to factor into our product decisions; we need to get the basics right, and that's what we are gonna spend the first little while doing with Projects.

**Jerod Santo:** That reminds me of an old term about Apple called "sherlocking" - do you know that term?

**Coby Chapple:** I do.

**Jerod Santo:** Yeah, the idea being that the platform provider or the big dog in the room sees a feature that looks nice and says - this is the cynical viewpoint, right?

**Coby Chapple:** Right.

**Jerod Santo:** Sees a feature and says that a third-party created on top of the platform to provide value... So a lot of times these people see gaps, and they say "Oh, I'm gonna fill that need. This helps me", and they turn it into a product or a business, and famously -- I think Watson was the name of the product that Apple copied...?

**Coby Chapple:** Yeah, a classic example...

**Jerod Santo:** ...and they got sherlocked, because now Apple just built that into the OS, and now that guy's out of business. So like you said, you have a lot of platform builders, and there's an ecosystem around it, so thoughts on this sherlocking potentially some of your loyal developers...

**Coby Chapple:** Yeah, and there's a lot of integrators that have built project management functionality on top of our Issues API. Our approach to this is we wanna save them some of the work, but still create opportunities for them to create value for people. Because, like I said before, we don't wanna dictate workflow, we don't wanna dictate the functionality that people SHOULD use to manage a project, because that's gonna depend. I think that's where our integrators come in. We wanna create a basic layer of functionality that we know is flexible and we know is adaptable to different workflows. Integrators should be able to take that, run with it, and build something for a specific audience that wants it a certain way.

We wanna create a platform that allows for plenty of those opportunities for people to create value. We don't want to take business away from people. We actually would rather there be -- we would rather be the platform on which an ecosystem is built, than try and earn money ourselves--

**Jerod Santo:** \[24:15\] Take all their ideas and...

**Coby Chapple:** Right, our endgame is not to be the project management solution; our aim is to create a platform where that discussion around project management, there can be lots of different options that you can use, to pick from when you are starting a new project. Maybe within one company you're gonna use three different project management products or plugins or integrations, depending on the different department, depending on the different project...

**Jerod Santo:** So does Projects have full API support? Can you get at everything that you need to in order to build on top of the Projects feature?

**Coby Chapple:** At the moment there are... So this is another thing that we announced at the Universe, and that is we are kicking off an Alpha for GraphQL API. This is a big change that we're making in general in terms of our ability to support API access to the product changes we make out of the box when we announce stuff. Historically, we have announced features and then later released the API, but one of the cool things about GraphQL is that when we moved to use GraphQL internally ourselves, we will build the API for it and consume it internally - as the way we build these changes to our product, so as soon as we release a feature in the future, it's gonna be released at the exact same time at the API level.

This is something that we've started to actually do with Projects. I would need to clarify online if it's available right now, but certainly within the GraphQL alpha -- it's still pretty alpha... And it's gonna change a lot, too. There's a couple of product features that we've built from the outset using GraphQL internally ourselves, and Projects, I'm fairly confident, is one of them. The other one was reactions - emoji reactions on comments; that was the first feature that we actually built internally using the GraphQL API.

**Jerod Santo:** So GraphQL is the way of the future...

**Coby Chapple:** We spent a lot of attention on our API. We understand how important it is to have an API be usable and enjoyable to use, and...

**Jerod Santo:** Approachable, and discoverable... \[laughs\]

**Coby Chapple:** Right, exactly. So we've looked at a lot of the things that people have built, like hypermedia... There's a lot of principles that we've explored a lot in terms of how to best do this, and when we stumbled across the GraphQL stuff it was very interesting to us. There's a lot of people at GitHub that spent a lot of time looking at the different solutions here, and there's a lot of reasons that we think this is something that we wanna invest in, because we actually think this is gonna bring us a lot of value, but also it's gonna bring our customers a lot of value, especially integrators and people using our API, because at the end of the day that's who the API is for, and we want them to have the best experience possible. That means things like getting access to product features as soon as they're released, rather than having to wait; it means being able to query the API itself for functionality. Does this version of the API support this feature?

**Jerod Santo:** That's cool.

**Coby Chapple:** There's a lot of stuff that comes for free with GraphQL that is very interesting to us. We've spoken a lot with the people at Facebook, we're worked very closely with them about this, and we've seen them use it in production for a very long time. I think they've been using it in production since 2012, or something...

**Jerod Santo:** Wow.

**Coby Chapple:** They've been using it internally there with a huge amount of success, and we think this is technology that a lot of other people should look at as well. It's not gonna be something that suits everybody...

**Jerod Santo:** \[27:58\] Yeah, there are a lot of detractors, a lot of naysayers. I think GitHub is probably the second major adopter of GraphQL, outside of Facebook -- the first one outside of Facebook. So there's people that are super excited... You can say this with anything, right? There's people who are super excited, then you have the cautious ones who are like, "Well, I'll watch it for a while..." Then you have the naysayers. I think for us, cautious types - I tend to be cautious - knowing that the REST APIs aren't necessarily gonna disappear soon is helpful, but it's an interesting... I think it's a risky, but perhaps very rewarding move by you guys.

**Coby Chapple:** Right. For me, I look at it as APIs need to be dependable. So this is a decision that I think will actually reduce the amount of risk involved, because it means that if you build something on the GraphQL API, unless you change what your querying, the functionality will continue to work.

**Jerod Santo:** It's not like an endpoint's gonna disappear on you.

**Coby Chapple:** Right. So there's a lot of things about GraphQL in terms of versioning clients that actually reduces a bunch of complexity. You no longer have to think about a versioned API as you sure initially might. It actually takes a lot of those concerns away and allows you to build and iterate on clients in a way that's much more predictable. I think there's always gonna be -- especially when it was just Facebook using this, it was like "Okay, cool... But I'm gonna stay cautious until I'm gonna see wider adoption", and I think especially for integrators building on this, that's a smart approach to take.

I think now that we are kind of putting our name out there and saying, "Okay, we're gonna double down on this too", I think that's gonna make a lot of other people prick their ears up and say, "Okay, maybe I should take a more serious look into this", and I think that's gonna start to see more people investing in this as a way of providing API functionality.

**Jerod Santo:** It seems like a boon for the client-side, but harder on the server side, just from my very - what's the word for newb? - newb understanding of GraphQL. It seems like implementation, from you guys' perspective and from anybody else's as potential adopters of API provider, it seems like a lot goes into that.

**Coby Chapple:** I think one of the benefits in that side of things though with GraphQL is it doesn't actually dictate anything about your implementation. It's literally just like a DSL between your implementation and the client-side. It's just saying that "For the API, here is a schema that works", and you can...

**Jerod Santo:** You can munge it into that form however you want.

**Coby Chapple:** Right. So that allows you to actually iterate on the implementation from a performance perspective in ways that you can't do with something where the implementation of the API is the implementation, if that makes sense.

For example, one problem that we have a lot at GitHub is performance stuff. A lot of API queries... Someone asked for a bunch of information, but they might not actually need all of it. The response that we provide may include properties which are actually very expensive for us to compute...

**Jerod Santo:** And they're gonna throw them away anyways...

**Coby Chapple:** And they're not gonna use them anyway. So that's one of the huge benefits in terms of implementation - you can actually speed up your responses a huge amount if you're sure that they're only requesting information that they're actually gonna use, which actually allows you to provide something a lot more performant.

**Jerod Santo:** How could you cache anything ever though if it's always a very specific, customized response?

**Coby Chapple:** I'm a designer, I don't know the specifics of how that works...

**Jerod Santo:** You're speaking very fluently as a developer, so I just forgot that you're a designer... \[laughs\]

**Coby Chapple:** \[31:59\] So I don't know from a cacheing perspective how that would work, but I think we're gonna see a lot more documentation and best practices start to become publicly available about how to do this stuff as we see more adoption.

As we put our name out there and say "We're banking on this", I think a lot of other people are gonna start looking at it as an option, and I think that's gonna mean that people are gonna start talking a lot about the edge cases where it does get complex, like cacheing and performance...

**Jerod Santo:** We got sidetracked on GraphQL... One last question, back to Projects, because I wanted to ask this earlier and I forgot to... You mentioned that you don't want to be like a project management tool, and as a designer you're probably very familiar with the idea of like-- not "keep it simple", because it needs to be usable, but focus, core competencies, those ideas... And there's a lot of people that do project management - better or worse - but one that is very popular amongst developers is Trello. Projects is very much a Trello-esque tool in terms of you have lists of cards, right?

**Coby Chapple:** Yeah.

**Jerod Santo:** Why not just punt all the way and be like, "We don't wanna be a project management suite. Trello is great... We're just gonna tell people to go use Trello. Maybe we'll even provide some hooks to Trello..." Why not do that?

**Coby Chapple:** That's a great question. My take on that is that just encouraging people to use third-party tools like Trello is an option for a lot of people. There's a lot of people though that would like to do that, but maybe it's not an option; maybe there's a security concern... Where maybe a larger company...

**Jerod Santo:** So for your on-premise stuff...

**Coby Chapple:** Yeah, how do we also control the access to this information? If we're suddenly then forcing people to also have Trello accounts, how do we make sure that the people seeing information are seeing information they should have access to?

I think also Trello is a very general-purpose tool. We wanted to create something that's very basic, that's basic for people who build software - not just developers, but very basic for software project managers... There's a whole bunch of people around developers that also build software even if they're not directly coding, and Trello is flexible to that; you can create all kinds of things in Trello. We want people to be able to create all kinds of things with GitHub Projects as well, but we wanna make sure that the decisions we make are focused on people who build software.

As we iterate on this functionality and as we improve it, it's gonna keep coming back to, "Okay, what makes sense for people who build software?", and that's something that Trello has a much wider audience, so they may make other decisions that don't always make sense for people who are building software.

**Jerod Santo:** Good answer. Okay, is there anything that I missed, like "I can't wait till he asks me this question" and I just never asked it? What else should I ask here?

**Coby Chapple:** I don't think so. I don't have any questions at the top of mind that I...

**Jerod Santo:** Do you have any questions for me?

**Coby Chapple:** What surprized you the most about what you asked me so far?

**Jerod Santo:** What surprised me about your responses? Good question... You should do this job. I mean, I think your take on Projects was refreshing -- the answer about on-prem was a surprise, because I had never looked at it from that perspective. I think I see GitHub very much from my lens, and my lens is a typical user who's a member of orgs, but no GitHub Enterprise lens. So now let me back into my answer -- because I'm starting to reveal what it is, which is like the single org, the god org inside enterprise and how that affects your product decisions was surprizing and interesting, and then also why not just say "Use Trello" or "Use Pivotal Tracker" for instance - because you have customers who that's actually not an option for them, and they need something; so a baseline features a platform that then other people can add value on. Like I said, I think that was a good answer.

**Coby Chapple:** \[36:10\] Cool. I think what that points to though is there's a lot of ways you can use GitHub, and what's gonna work for one company is gonna be completely different to what works for another organization, like a university or an open source organization. What works for different individuals and groups of people is gonna change. It's also gonna change within companies. Like I said, with the enterprise stuff, orgs might just be departments;  but that's also the case on github.com, too. You see this with Microsoft and with Google... Some of the organizations that they have on github.com are literally just one department from Microsoft, like Azure, or...

**Jerod Santo:** Research.

**Coby Chapple:** Right. So you're seeing this on github.com as well, where what works for one organization...

**Jerod Santo:** Doesn't work for...

**Coby Chapple:** Right, and that sure also happened at a smaller scale, too; within a repo, maybe that one repo might wanna use one project management plugin, and the other one just uses the vanilla one that we provide, and another one has an additional integration included in it, and that's all within one company.

**Jerod Santo:** Right.

**Coby Chapple:** We want people to be able to pick and choose, and that's why we wanna build things that are simple, and that's why we wanna make it a platform that other people can also build their business on, whether they're an integrator or whether they're someone who's investing in us to build software.

**Jerod Santo:** Yeah. Cool, man. Great job, this was fun!

**Coby Chapple:** Cool.

**Jerod Santo:** You had great answers.

**Coby Chapple:** It was great talking to you.

**Jerod Santo:** Yeah, you too. Thanks for coming on!

\* \* \*

**Adam Stacoviak:** Thanks again to our friends at O'Reilly for the awesome working partnership at OSCON London 2016. We'll see you again, OSCON, in 2017 in Austin, Texas. If you want to save some money on that ticket, if you're going, use the code "changelog20" to save 20% off your registration to OSCON 2017 in Austin, Texas.

For more episodes like this head to changelog.com/spotlight, click Subscribe, don't miss a show, and thanks for listening!
