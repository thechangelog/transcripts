**Mat Ryer:** Hello, and welcome to GoTime! I'm Mat Ryer. Today we're talking about Go.dev. It's a user-friendly hub of curated resources for Go, and we're lucky enough to have three of the brains behind it joining us today: Carmen Andoh, Steve Francia (also known as @spf13) and Julie Qiu. Hello, everybody!

**Steve Francia:** Hi!

**Julie Qiu:** Hi!

**Mat Ryer:** We're also joined by Jon Calhoun, a regular. Hi, Jon. How are you?

**Jon Calhoun:** Hi, Mat. I'm doing well.

**Mat Ryer:** What's been going on?

**Jon Calhoun:** Not too much.

**Mat Ryer:** Okay, well let's get started. I wanna hear all about Go.dev, so who wants to give me an intro? What is it, and what's it for?

**Steve Francia:** I can share that. It is a new official Go website for our Go community. It's intended to be a single destination, where the entire community can gather. Today it contains learning resources, it contains a package discovery or a module discovery component, and it also contains different resources to be able to help evangelize Go within your companies, or to new companies.

**Mat Ryer:** And this is not gonna replace Golang.org, is it?

**Steve Francia:** No.

**Mat Ryer:** So they're gonna coexist, those two.

**Steve Francia:** They're gonna coexist, yeah. That's right.

**Mat Ryer:** And the difference then being, I guess, the Golang.org is the kind of open source home, it's the technical home of the project itself.

**Steve Francia:** We struggled a lot... Creating two websites is not always the best thing. Two websites could create more confusion, and we initially started trying to expand Golang.org to contain all these things, and we really struggled with that because the intent of Golang.org - which if you don't know, actually gets distributed with the Go release; most of the content of Golang.org - is to be an official place for the Go project (the language, the compilers, the tools). And what we wanna do is expand it to be something that encompassed all of this stuff for the Go ecosystem.

Eventually, after a few months of trying to figure out how to shoehorn these competing goals into this existing site, we realized that maybe they're best as two separate sites. So the Golang.org is gonna remain the way it is, and the second site is really curated content that's created by the Go community and for the Go community.

**Mat Ryer:** Right. So how did it get started then? Was this something that you internally saw that there was something missing, or was this something that the community asked for?

**Steve Francia:** It's an interesting answer to that question, and I like the way you framed it.

**Mat Ryer:** I'll be the judge of whether the answer is interesting or not, Steve, if you don't mind... \[laughter\]

**Steve Francia:** So we actually started this project over four years ago.

**Mat Ryer:** Really?

**Steve Francia:** As a community member, I was talking to the Go leadership at Google about potentially joining, and it was in a new role that they'd never really had someone do before... So as part of that, I wrote a document that was from my community perspective of the things that were missing, that we needed to address. And if I was gonna join Google, I wanted to join to build those things.

And on that document, it had - and I'll read it to you - it was "Provide educational resources for Go adoption and best practices, working with partners to create and provide the best training materials. Write the story of the value of Go and communicate that story broadly. Solve the problem of discoverability of libraries and packages."

The idea behind this wasn't necessarily one project at the time, but those were all things that started at that point, over four years ago. Fast-forward -- and I'll also say, that document also had other things; the Go user surveys came out of that document, which we've just finished doing our fourth one of those. Improved IDE experience, dependency management - those were all things in that document. If you look at the things the Go team has done for the past few years, a lot of them were in there.

So now we fast-forward to me joining Google... I worked with Russ and Samir to obtain the right staffing, by presenting these concepts to the Google leadership. And they did, they gave us the opportunity to expand the team, which led to hiring Carmen and Julie, who then did most of the heavy-lifting of bringing the project forward.

**Mat Ryer:** Great. Well, thank you very much for doing all that excellent work. The thing you mentioned about package discovery is quite an interesting one, because for a while in the beginning of Go there weren't that many packages; over time, of course, it's grown, and so now people actually have a lot of different choices if they're gonna bring in some dependencies and things. And it is a little bit like the Wild West... So do you see this as being a way to tame that a little bit and find some of the more trustable open source packages out there?

**Steve Francia:** This is not a Go problem. We think this is a modern software development problem. As you kind of get critical mass, the problem gets bigger, as you're saying... But it's a problem that every language is struggling with right now. Some to an extreme, and some -- I think Go is actually on the smaller end of that. But we do see this as an opportunity to solve this problem for Go.

**Mat Ryer:** And will it take into account things like if packages have stopped being maintained, or if they do things that are generally accepted to not be great patterns, and things like that? Is it gonna be opinionated in that way?

**Julie Qiu:** Yeah, I definitely think it's something that we've talked about and considered adding for the future. Right now, if you think about the Go ecosystem, the thing that's really out there is GoDoc.org, which provides package documentation... But it's missing a lot of this information about "Is this package still being maintained? Is this something I actually wanna integrate into my site?" So that's definitely part of what we wanna do, especially at pkg.go.dev, now that it's launched, we've laid the foundation... That's all stuff we're thinking about.

**Mat Ryer:** Julie, you spoke at -- I've seen it a couple of times, actually... You do a talk about how to select good dependencies, and what to look for in things. Anyone interested in that should definitely have a search around. It's a great talk, and you talk about things like "Are there tests in this package?" What are some of the other things that are important when it comes to choosing dependencies, and why is that important?

**Julie Qiu:** If I had to bucket it, I would say that the three main things to think about are popularity, quality and stability. By popularity, what we're really wondering is "Are other people using this package?" The reason that that's really important is because it essentially gives you a little bit of a heuristic of "Are there other people out there that care about this?"

Say the author suddenly decides that they don't really want anything to do with this package; what are the chances that someone else is gonna step up? What are the chances that they're gonna look for bugs? What are the chances that if I make a big part of my codebase depend on this, I can count on this being there in the future?

I think quality is things like "Is it a well-documented package? Does the code have tests? Does it look essentially like idiomatic Go code to me?" And you want that, because it gives you a sense of how familiar the package author is maybe with creating Go packages. And essentially what you're evaluating when you look at third-party packages - is this code that I actually wanna put into my codebase? So if, you know, on a Friday afternoon I'm trying to deploy - which we all admit we do - you wanna know that you're not gonna suddenly look at code that looks like something you've never seen before.

And then the third thing is essentially stability. Obviously, technology changes, the Go ecosystem changes, and so as things are changing, can I count on this author to think about where I am with my project? Something you don't wanna see is someone had an exported function in one version, and then all of a sudden in the next version it's not a major release, but that function got taken away... Because that is gonna create a lot of work for you as you are upgrading your codebase. That's how I would go about thinking about it.

**Jon Calhoun:** One of our actual listeners had asked the question "Will any of this data that you guys are using to figure out what packages are there - I'm assuming you'll be gathering some data - be made publicly available?" The specific question they were asking was "When you're looking at packages, one of the ways you can tell if it's a good package to use is if bigger projects are using it. So if Docker is using a package, there's a good chance that they're gonna step up and make sure it doesn't die, whereas if it's a bunch of really small application, then popularity there might not matter as much as one really big entity." If you're planning on exposing that sort of data and making it possible for people to explore what big projects are using these packages...

**Julie Qiu:** It sounds like that information is -- they're looking for what a package is importing, and then what a package is being imported by. All of that information actually is already available today on pkg.go.dev.

What you would do is for any package that you're interested, you can click on the Imports tab to see what other packages it's using; or on the flip side, you can look at the Imported By tab and see who else is using this.

**Mat Ryer:** That's cool. And that's different to GoDoc, isn't it? That new pkg.go.dev.

**Julie Qiu:** Mm-hm.

**Steve Francia:** GoDoc is just documentation, and the intent for pkg.go.dev is to be much more encompassing of these more rich information around each package.

**Mat Ryer:** Right, yeah.

**Julie Qiu:** Yeah, there is some information about imports and importers on GoDoc.org, but our goal is to take this information and bucket it in a way that's something that people care about a lot more.

One thing that you might notice on the Imported By tab is that we tend to group the importers and count them depending on not just like -- say Kubernetes has one package, and they're importing this one thing 1,000 times. We wanna be thoughtful about how much that weighs into the popularity of the package.

**Mat Ryer:** Oh, I see. Can you explain that a bit more?

**Julie Qiu:** Yeah. So if you think about it like "Why do I care about popularity?", essentially what it's answering is telling me how many people have decided to use this package and integrate it into their codebase. One thing is that you might notice there's one repository - let's call it julieqiu.org/foo - and I have a million packages in there, and they're all importing this one package. So does this third-party package now have a million importers, or should it really have one importer? It's something that we don't actually quite have an answer to yet, but that's the kind of level that we wanna be thinking about it.

You can think about this in sort of like "Maybe I'll count it as a million importers, but the way that users might wanna see it is that all of it is grouped under one thing", so that you can answer questions like "Does one big organization use it, or does one really important module use it", without seeing just a giant list of things that essentially are all telling you the same thing.

**Mat Ryer:** Right, that makes sense. Something else you mention in your talk, Julie, is about looking at dependencies for packages - how many dependencies another dependency has. So if you're gonna important a package - say you've got two options. It might be sensible to choose the one that has fewer dependencies... But why really is that? Why do we care about that? Because it's not our problem, is it?

**Julie Qiu:** Well, the funny thing is that a lot of times it feels like it isn't our problem, until it is. In my talk I gave this example about this package called pad-left; completely hypothetical package... \[laughter\] And it might be transitively depended on by millions of different packages. And you personally never end up using pad-left, but if it got deleted all of a sudden from the Go ecosystem and all that code disappeared and you can never find it again, it could actually end up breaking a lot of your stuff and then you now suddenly have to be like "Oh no, how is this happening? I have to find the tree of things. I was depending on this..." So it can cause you a lot of problems, even though on a day-to-day basis it might not seem like this is something that actually matters.

Obviously, getting deleted is a really bad situation, but there are also other things, like security vulnerabilities, or maybe licensing issues, and other things along those lines that you think a lot about when you're thinking about your own package, but you should really think about it with all of your dependencies, and your transitive dependencies as well.

**Steve Francia:** I think there's an interesting thing here, too... We often reduce things to things that we currently have. The question you asked, Mat, was "Is it better to have more dependencies or less?" and there's not an answer to that question. It's really an "It depends." If you have more dependencies, but they're stable and they're well-tested, and they're high-quality dependencies, I will take that every day over a fewer number of lower-quality, less stable dependencies.

So I think really the question is not "How big is the dependency tree?" but "What is the quality of your dependency tree?" And are we really evaluating -- anytime you import a dependency, it really becomes a part of your project, and I don't think we really think about that as much as we should... That as soon as you do this, you're inviting that code into your home, and now you're responsible for it. So if you're gonna invite them in, you wanna make sure that that's something that you feel comfortable with.

So I don't think quantity is necessarily the right measurement of that. I think quality is really the right measurement, and then multiplied by quantity.

**Jon Calhoun:** That's a good point, because the standard library really is just a set of third-party libraries, it's just one we know that is maintained at a very high standard... Whereas anything on GitHub or whatever - we don't know really know what their standards of quality are... So it's just kind of a gamble at that point. But if you know it's an organization that has those same levels of standards, then you can kind of import those with a lot more -- you can import more of them without as much fear of something breaking.

**Mat Ryer:** Yeah. This also helps package developers, if we think about what criteria people are gonna use, what they're gonna look for in packages... If someone out there wants to roll their own package for something, then there's kind of now a nice little -- I mean, Julie, your talk is great for people that also want to do packages. There are some standards, there are some things that the community now is starting to expect... But I wonder, could this make it more difficult for new packages to emerge, if we start to really shine a light on the packages that are tried and tested? Can you see a world where we actually end up making it difficult for new packages to emerge, or is this sort of selection process gonna just be good for everybody?

**Steve Francia:** I'll take that one. I'll start by saying, if a package solves the problem really well, then there isn't much of a need for another package. The standard library is a great model. When I first started learning Go, I looked at that as the pillar of excellence, and I tried to strive for that in the packages I wrote... And there's a reason there's not a lot of competitive string packages, because the Strings package does a really good job. But when there are ones, it's because they fill gaps that that package doesn't address.

So if a package is stable and well-tested, and does the job well, then we don't have a need for an alternative. We need an alternative when there might be a fundamental shift in design philosophy, or there's things that it doesn't accomplish, and that's a very natural thing that happens. We have a similar debate about companies; the larger a company is and the more established, does it stifle new companies being able to emerge?

There's a big political and philosophical debate around that, but the reality is that over time we've seen that startups do emerge, and they're there to fill gaps, and the larger a company is, and I will translate to packages or libraries - the more established it is, the less it has a chance to migrate and move, and it can't adapt to maybe new requirements that come through... So when the requirements change, which over time requirements always do, it really opens the door for new packages to emerge and do that. I think it's a very healthy thing for an ecosystem to have.

**Jon Calhoun:** I think the JSON package is a good example of this, where the one in the standard library is great, but there have been ones that emerged that sort of solved a slightly different problem. If you don't wanna build a struct to get something that's like six levels nested, there's a couple packages out there that make it really easy to dive six levels in and get one specific piece of information and that's it, from the JSON. And there's other ones that maybe they try to be faster... There's different goals, depending on what you're looking for, and even though you think "Oh, the standard library has it. Nobody's ever gonna compete with that", the truth is people do compete with them because there's specific goals that they're going for.

And even if you look at front-end frameworks for JavaScript, you'd think at some point one of them would have just won out and everybody would have stopped... But they all solve different goals, and if something comes along and it's unique enough and solves a different enough problem, I think we see that that tends to happen, it still tends to get some traction and move up.

**Break:** \[00:19:59.00\]

**Mat Ryer:** The Context package, when that happened - that was kind of one of those shifts you talked about, Steve, where suddenly now people expected to be able to cancel things that they couldn't cancel before... For example like copying. Is there a context-aware copy operation in the standard library? If you do Io.Copy(), it jsut copies the whole thing until the end of the file, right? Is there a cancelable one, or do you have to write that on your own?

**Steve Francia:** I am not aware of it in the standard library.

**Mat Ryer:** So use cases like that are -- there's still plenty of opportunity for anyone really to contribute, that's the thing... So I'd hate for people to be put off because standards are going up; that doesn't mean you can't contribute something... And especially like -- Steve, your point about "find the thing that isn't already solved, and that's where you can innovate." I think that's great, and I agree that raising the standards is only gonna be good for -- for most people it's gonna be great, because that is what we care about; we do care about good dependencies that we can rely on, and that are gonna stick around.

**Jon Calhoun:** One of the goals you guys had mentioned was helping companies understand what other people are doing with Go, and I guess learning from that, deciding whether or not to adopt it. I guess this is something that a lot of us probably don't see; at least me, because while I want people do adopt Go, I don't generally go out and talk to big companies and say "Here's why you should use it." So is that something that the Go team is actively pushing? Is that a big goal, to make it easier for people to understand that? Can you elaborate on what people are looking for, how you can help them? And if somebody is looking to maybe talk their company into using Go, what you'd recommend?

**Steve Francia:** We've spent a lot of time meeting with different companies, trying to understand what their needs are and what they're struggling with. I'll also say, one of our big goals as the Go team is adoption. We want Go to be used as widely as possible. And as part of the adoption journey, which we're all familiar with that graph that starts slowly, and then there's a chasm, which is early adopters, and then there's the big chasm at the end of that, which is kind of mainstream... There's different stages to it. And as a language growth, the enterprise is really that next big-cap for Go to be able to tap into adoption more.

We really got lots of adoption on startups and hobbyist very early, and so we recognize that the enterprise is important to get Go adoption to really fulfill its potential. As part of that we're doing lots of research, and we've been talking to lots of companies, from all different walks - from retailers, to banks, to multimedia companies... From every different style of company and in lots of different continents.

And through those conversations we've heard two things that almost every company asked us, two questions almost every company asked. These are companies that are either thinking about using Go, or they've done a prototype with Go, or they've adopted it for some projects... So the two questions that everybody asked was "Who else is using Go?" and "What are they using it for?" As we talked to them, we heard lots of different stories which really got us excited. They talked about prototypes that they wrote in Go, and because they tried to talk to their management about it, they had challenges, and they thought Go would be a good solution for those, their leadership, the technical decision-makers wanted to know "Well, who else is doing this, and what are they doing with Go?" and they didn't have good answers to those questions.

So a lot of those stories stop there. But some of those stories continued, and we had people that felt confident enough that it was a good decision that they kind of went rogue, and they built a prototype in Go, and it ended up being phenomenally successful.

So those pioneers in those companies really provide the things that they wanted before, which were these stories... So we're really happy that we're able to tell some of these stories. We've been working with these companies for many months to be able to capture these stories that they shared with us, and make them publicly available, and share them broadly. And hopefully, the next round of people answer to those questions, so that when they wanna go to their leadership and answer these questions "Who else is using it? What are they using it for? Are they in our demographic of company or vertical of company?" they'll have answers to those questions.

It wasn't just in these internal meetings, we also did different surveys, and this was one of the top things that people asked for in our surveys. Now, if you're coming from a small company or you might be an individual consultant, this probably sounds foreign to you. But if you're working at a big company... You know, on our website we've launched several case studies from big companies: American Express, PayPal, MercadoLibre... You can go on the website and see them all there. These are larger companies that have more hoops to jump through, more permissions to obtain, and this was an overwhelming thing that they've been asking for.

**Mat Ryer:** Yeah. It's interesting, if you go to Go.dev, there are a lot of logos, but they're not just -- sometimes you see these on websites and you feel like they're sort of brags, or something... But these are actually -- you can click these and go and read about the actual ways in which people have used it, and what they're doing there, too.

**Carmen Andoh:** You sure can.

**Mat Ryer:** You can, you can.

**Steve Francia:** You definitely can.

**Carmen Andoh:** Yup.

**Steve Francia:** I think they're very relatable stories, and I think they're very inspiring. As you click through and read these articles and these different stories... I remember back -- I first adopted Go when I was working at MongoDB, very early on. And there was not a lot of these stories that existed yet, but in using it I fell in love with it. It lit a spark, and showed me potential of what a programming language could be... Which led me to work at Docker, which was a big Go user, and then eventually on the Go team at Google.

These stories shared a similar thing. If you've been using Go a while, read them; it'll remind you why. It'll take you back to that moment when you had the first a-ha and fell in love with the language.

**Carmen Andoh:** But the other thing that I wanted to point out about these case studies that I think are really useful is when I learn how to code, I am not taught how to influence my manager, or influence my higher-ups on choosing Go. That's just not something that they teach you in school... And this is just the perfect thing that I can point to people, saying "I wanna choose this technology, and here's why."

I think so many people, when I had been in contact with them over the years, like "How can I convince my manager?" or "How can I convince my CTO?" or whoever in the organization, to use Go. Certainly, there's the rogue tactic that Steve mentioned, but this now doesn't -- you don't have to worry about going rogue, or taking yourself out of the critical path in order to get it adopted. You can simply go "Here, read the testimonials" and then make a commitment to trying maybe one service at a time, or refactoring one corner of your codebase here and there.

And what's great about these is that some of them are more detailed than others, and they can give you a blueprint for how you might wanna do it, to certain extents... Whether you wanna go whole hog with Go, or whether you wanna maybe just instrument some of your observability toolset with Go, or you wanna do some of your automation.

So I really, really liked that, and I tell people now that certainly learning how to influence is a vital skill that they don't teach in school, but this is super-helpful.

**Mat Ryer:** Yeah, I spoke to somebody at the last London Go meetup who -- they were reluctant, because learning a new language sounds like quite a bit thing, especially for people that maybe only know one language; that was this case. But learning Go, especially if you are already familiar with the kind of C base language. Learning Go I think is easier than some other languages, actually, because of its minimalist nature... So I always kind of encourage that.

And I also like this idea of using it to solve a real problem you have, even if you're not 100% certain of what it's gonna turn out like. When you learn the context that you have, when you're trying to learn something, if you've got context around a real problem you're trying to solve, it really focuses the mind. You don't go down the rabbit holes learning the details of how channels work, or how to do struct packing for optimum memory use. You focus really on the bits that are important in your case... And that was what this person was telling me - their experience. They were surprised how easy it was to pick up and to apply when solving some little problem they had. And I think it was a tiny little problem, but they loved that experience, and then they did a presentation to the rest of the people - anyone that would listen, really - in the company, to show it off. That's quite a nice way to also evangelize for it, too.

**Carmen Andoh:** And to add further to that context, I also like the idea -- when we talk about adoption, there are different mindsets, depending on where you're at within your company and where that company is at. Sometimes what I often heard was "I don't wanna just learn about theory" or "I wanna see what it looks like in practice, from soup to nuts." And I think that's the other thing that these case studies also -- they have some level of detail that can tell you, hold your hand from end-to-end.

Some people like to just go around and play and find what works for them, but others just need to see what it looks like in practice, and see how that matured over time. I think the case studies is one of my favorite pieces. Well, I like the whole site, but I really sing the case studies praises, for lots of reasons.

**Steve Francia:** Moving forward with these case studies - we launched with a handful of case studies and articles that were published on external websites as well, and we're excited to tell these stories more; to tell additional stories, to tell deeper stories, and we're hoping that some of the listeners today are from companies that wanna show these stories. We'll give two pieces of advice for that.

One is you don't need us to tell the story. A lot of these companies, like Capital One, published several stories on their own blog about their journey to using Go. And we link to them here. So feel free to tell your own story; we'd love to link to it and give more exposure to it. Also, we're happy to meet with you and to learn more about your experience and your story, and the best way to get in touch with us is if you go to Go.dev, on the very bottom, in the footer, there's a Share Feedback link. Please fill out that link and tell us if you're interested in working with us on a case study, or writing an article.

The most important thing - that's an anonymous button, so if you want us to actually get a hold of you, you have to put some identifying information in there, so that we have a way to reach back out to you, or else \[unintelligible 00:35:24.27\] Which we've had a few companies do. "Oh, we're really interested in the case study, and doing something" and then Submit.

**Mat Ryer:** Okay... \[laughs\] So put your name and email in, or something.

**Steve Francia:** Do it someway.

**Julie Qiu:** And also, if you wanna just send us a non-confidential email, you can feel free to email go-discovery-feedback@google.com. In case you can't remember all of this, we have an About page on Go.dev. Go.dev/about has all of this information.

**Mat Ryer:** Thank you. We'll also put some information in the show notes, too.

Will you have videos on there, and talks, and things from conferences, do you think?

**Steve Francia:** As we said in our blog post when we launched this - it was really us getting what we felt was like a minimum viable product out to the community, as early as possible. You'll notice on the website we say it's for the Go ecosystem, by the Go ecosystem, but it doesn't have a ton of community resources on there yet. There is intent to add those items and to make it more of a place where the whole community can come together and learn more about conferences, and meetups, and talks, and really be a resource for them.

**Mat Ryer:** There's an Event section on the homepage, isn't there?

**Steve Francia:** Yeah. And it only gives you those three events... And I think they're only meetups. It's not conferences yet. So it's a start, and we're really happy that it's there, but we have so many meetups around the world that -- if you look on it today, it says January 11th, it has three meetups, but there are actually more than three meetups on January 11th. So it does give a taste to it, but we really wanna expand that further and really make it so that whether you're in Melbourne, or Bangalore, or Eugen, Oregon - which happen to be the three on the website today - or anywhere else in the world, it's gonna give you when your upcoming thing is, when call for papers or participation is due etc.

**Mat Ryer:** Yeah, that's great. That's gonna be really great to have that, because it's difficult even for those of us that have been in the community for a while to know what's going on. I think it's not just gonna be a good resource for new people; I think for everybody.

**Steve Francia:** It's also partly solving the problem that kind of crept up on us... If we look back two years, there was -- I don't remember the exact number, but around a dozen (maybe a little more) Go conferences. And this year, in 2020, there's scheduled to be over 30 conferences throughout the year. That's three a month. That's pretty overwhelming. That means there'll be more weeks with conferences than not this year. So with all of the excitement that's happening around the community, it's really helpful to have a place that organizes and gathers that.

We're not gonna have that delivered in the next month or two, but it is on our roadmap and it's things that we're intending to do.

**Jon Calhoun:** One of the questions that I've seen people ask a lot, either on Twitter, or even on our GoTimeFM Slack - this is sort of intended to eventually be a resource for the community, so they're all asking "Are there plans to make it open source, or to give the community a bigger role in the project?" I get early on it's usually easier to not do that with a lot of things, but I didn't know if you could share plans for the future with that sort of thing.

**Steve Francia:** It's something we're looking into. We definitely wanna make sure that whatever we do, it's the best thing for the community and our users, and serves their needs the best way. We're trying to make sure that we're doing that in the best way possible. So there's ongoing discussion; it's actually part of our Go developer survey, we ask specific questions around this... So we're ongoing doing research to try to better understand our users' needs, and making sure that we're satisfying them as best as possible.

**Julie Qiu:** Yeah, and something that we also are planning on doing pretty soon is opening up the Go issue tracker to accepting feedback. We already described that we have two different channels to get feedback - the email, and also sharing feedback in the footer, but obviously, these are all private topics, and we've heard everyone sort of saying they wanted a more public forum to be able to have discussions... So we're actually working on a process for that, and are gonna be sharing that pretty soon. That's another way that we really wanna be clear that we want people to share their feedback of us, like this is something that we wanna build for the Go ecosystem.

**Mat Ryer:** That's great. In your pkg.go.dev, how do you decide what's a popular package, and how do you decide which packages you're gonna feature on there?

**Steve Francia:** So you're saying on specifically that page...

**Mat Ryer:** Yes. Because that's gonna be essentially -- I mean, packages listed there are gonna be the ones people are using probably, right? ...eventually, if not already.

**Steve Francia:** We hope so. To some degree, they're already packages people are using quite often. That's why they're there.

**Mat Ryer:** That's why they're called "Popular Packages", is it?

**Steve Francia:** Yeah, that's how we got the name. That's how we came up with it.

**Mat Ryer:** It makes sense.

**Steve Francia:** Believe it or not, there were several meetings to -- no, I'm just kidding. We just did that.

**Mat Ryer:** \[laughs\]

**Steve Francia:** So Featured Packages is a little bit of a curated one. They're largely popular packages as well, but they're ones that we thought fit a niche, or address needs that people were looking for... And then Popular Packages is just the popular packages from the database, based on import count.

**Jon Calhoun:** When you're looking at those curated lists, I know there's always these -- they're like Awesome Go, or Awesome... You'll see different lists like that on GitHub, that list a bunch of packages grouped by what they're for. Some will be graphical user interfaces, others will be like database packages... And generally speaking, they do a little bit of curation, but I feel like sometimes they just throw anything and everything in there.

I guess one of the questions I'd ask is how do you guys draw that line between -- you know, you don't wanna reject people or be a gatekeeper, but at the same time you need to... Like, just having everything listed in one place isn't necessarily useful... You know, just listing every single package that can connect to a database or something might just be overwhelming to users. So how do you navigate that middle ground?

**Steve Francia:** If we look back to the beginning of search engines, the early days of the internet, early '90s, mid-'90s, you might recall that Yahoo! was one of the leading at the time, and they did it by doing the website directory, that was human-curated. And it worked well for a time. In fact, the reason everyone else struggled is you couldn't really compete with the quality of that.

Then Altavista came out. And Altavista had accuracy and quality, and it was fast. Well, it was fast... It was fast until people started using it; there was a time when it was blazing fast, and everyone was excited...

**Mat Ryer:** Yeah, but Steve, all software is fast until people start using it. It's the people using it that ruins it. That's why we have to care about making things work...

**Steve Francia:** Well, then Google came around and figured out how to solve that problem too, of making it fast, and quality, and accurate. But I think there's a lot to learn from that experience.

Awesome Go was and is still a great resource, but at the beginning, when packages were smaller, and there was less of a list, I think it was easier to maintain it and to keep track of it. As that list grows, it's harder and harder for humans to keep on top of it. So what Julie talked about earlier was these signals, these visual indicators on packages -- I think the solution here is not to maintain manual lists, but really to have dynamic things.

If you're searching for -- you know, sometimes you're searching for things that Awesome Go curated predefined categories, but sometimes you're searching for things that aren't in those predefined categories. And no matter what you're searching for, you really want to know quality... And I think it comes back to those indicators, to really help us. That's the discovery portion of the site, that is still ongoing, that we're working on.

**Mat Ryer:** I once wrote a blog post and made a little repo alongside it to show the code... And I made some changes to it at some point a couple years later, and I started getting people opening issues, saying "You broke our build." This was just a repo to show off some ideas, it wasn't ever meant to be imported by anybody, so I was shocked that that happened. Is there a way that package writers and package authors and maintainers can indicate to the Go.dev and to pkg.go.dev - is there a way that we can indicate that these things are deprecated, or perhaps shouldn't be imported, or even to say "If you wanna solve this problem, there's a better package over here, so go and use that one"?

**Julie Qiu:** I think to indicate that something isn't working anymore, you can email us. We've gotten requests for people to take down their packages from pkg.go.dev. So that's something that we do support doing.

I think in the future -- some things that we've been discussing are like, say when someone archives their repository, for example, or deletes their repository, even if we might have the code for that to provide some kind of flag, so that people know about it.

We don't currently have anything right now on the side for authors to say "You should use this package instead." I think that that feature would require some sort of thought about what that user experience would actually look like, or if that's something that we even want people to be able to do... So those are kind of the avenues right now.

**Mat Ryer:** Yeah. I mean, I would imagine something like a .go.dev file in the repo root, or something, where it could potentially have some metadata in there where we could communicate that. There are a few examples of that working quite well, where the tooling can notice those things. It's probably just that - a few things like "Check out this package, these alternatives..." Because even though it might be nice for my ego that people are using some package I've written, if for whatever reason there are better packages, which believe it or not, does happen, I just want people to use those packages. I don't want them to just use mine for the sake of it. So I would be happy to go and put a bit of effort in if that meant that the whole experience quality goes up for everybody.

**Julie Qiu:** Yeah, I think we've also discussed very early on during the brainstorming phase about other types of metadata that would help with that problem, too. For example, keywords would be great. If you could tag this package as like "It's a logging package", and so maybe that's what your package is, and that way you don't have to say "This is exactly the package you're looking for", but you can just have keywords for people to look in the ecosystem... But these are all things we've been thinking about and are still brainstorming about, and don't quite know what it will look like yet.

**Mat Ryer:** Cool. Not, but it's exciting though.

**Julie Qiu:** Yeah. There's a lot of cool places that we can go.

**Jon Calhoun:** It sounds like the experience you've described, Mat -- it's one I'm familiar with too, where you're kind of doing educational material, and you want them to have something that compiles and runs, but at the same time by making it something that compiles and runs, it also means somebody can import it and use it, and it's like "Well, this was clearly meant to teach, not to necessarily be the thing that does that." So you might show somebody how to make an HTTP router, but that doesn't mean that they should go use that one. There's some way more stable ones out there that you should check out. So that becomes a little bit trickier, but... Maybe just having a way of tagging things is like "This is a learning resource, rather than something else that could actually help with that."

**Steve Francia:** For this specific one -- I think you bring up a good example of different needs that we might have, that expand beyond just the static metadata, of like readme and license files that we currently use. For this specific one, if you don't want someone to import it, change the license to something that is dot-something-that's-very-importable. It might be a solution to this specific problem.

**Mat Ryer:** But the tools won't guard against that, will they? ...assuming that everyone checks their license before they import a package...

**Jon Calhoun:** The other issue I have with that is let's say I'm teaching somebody how to do something... A lot of the times I want them to have the freedom to take chunks of that code and use it. And if I say "This is some really restricted license", then all of a sudden they're like "Well, I can't use what I learned here without fearing that I'm gonna get sued later for using this code." And you kind of have to worry about that, where I know most instructors or people who do educational stuff basically just open source everything with an MIT license, because they don't want people to feel like everything they learned is something that they're worried about using that code.

**Mat Ryer:** Yeah. On the other hand, Jon, you've just thought up an excellent scam.

**Carmen Andoh:** Don't give ideas.

**Mat Ryer:** \[laughs\]

**Steve Francia:** So the license question - I give that answer mostly tongue-in-cheek, because I think everything you said, Jon, is right. But we've heard from a lot of -- while maybe not every individual is doing this, companies are very concerned with this. License compliance is a huge deal, because it can really get you into a lot of hot water. Every company and individual should be concerned with it, but the larger the company is, the bigger the defensive legal staff needs to be, and the more concerned they are with this. All of the Go tooling certainly doesn't do this today, but we did build in more license awareness into Go.dev.

**Mat Ryer:** Yeah, it reports the licensing on all the packages, doesn't it? And does it exclude things where you don't recognize the license?

**Julie Qiu:** Yeah, so it excludes certain content, but not exactly the repository itself. So the way that we make that distinction is based off of whether or not it's factual information about this repository, as opposed to content that we are taking and editing in some way. For example, what that package imports is not something that we would exclude, or something that imports it... Because that's just factual information about it. Or the last time it was released. But things like its readme, and its documentation are things that we consider content that we are not able to redistribute.

If you look on pkg.go.dev and you're thinking about whether or not you should use a package, and you go to the documentation page and we don't think that its license is something that is redistributable, it will become really obvious really quickly.

**Mat Ryer:** So therefore on the other hand if you do want things including, then pick a license that is gonna allow this.

**Julie Qiu:** Yeah. That's something that we had gotten a lot of feedback about right after launch, because our license policy had been a bit strict... And also, I think we haven't provided a lot of information about exactly what information you need for your license... But we actually updated our license policy very recently. So if that's something that you wanna know more information about, we've shared that we do license detection by using the license check library, and also a list of licenses and a copy of that content in case you wanted to pick one of the ones that would just fit on the site.

**Mat Ryer:** Great, yeah. There is actually a Go tool - because I've used it - which will check the licenses of all your repos as well. So I'll dig that out and put it in the show notes too, because that can be quite useful. And it's actually worth bearing in mind from the beginning, because it's all very well -- usually, what happens is you build the thing, you get it working, and then towards the end of the process someone from the legal team will say "Oh, just make sure the licenses make this all okay." And then if it doesn't, you kind of get yourself into a little bit of trouble... Or at least there's work to do to go and either find an alternative, or you sometimes have to rewrite the little bits and pieces yourself. So yeah, it is worth checking the license, as Steve was alluding to earlier. Check the license before you import.

**Jon Calhoun:** I'm surprised somebody hasn't come up with something like goreturns, that you can customize for each company, that basically just does that when you're saving... Because every company has a different set of policies around what they'll allow, and it would be kind of nice to just have your code flag it as like "Hey, you can't import this. It's not gonna work."

**Mat Ryer:** Like a compiler-time error.

**Jon Calhoun:** Yeah. Because if you just had something, it would just build it into that; it'd be kind of nice to have.

**Mat Ryer:** Hm. Nice idea.

**Carmen Andoh:** That sounds like a slick idea, for sure... Especially now, with software engineering in this day and age, and all this reuse, and the risks that carry with that.

**Jon Calhoun:** Generally, I think people look on GitHub and they think "Oh, it's open source", but that doesn't necessarily -- people don't always put licenses there, and something being open source doesn't necessarily mean you can use it for what you wanna use it, especially if it's commercial.

**Carmen Andoh:** Right. And the average software developer is not a lawyer... So they're just pulling it in, saying "Hey, let's see if it works." Yeah... \[laughs\]

**Jon Calhoun:** I'm sometimes not even sure if the lawyers know for sure.

**Carmen Andoh:** That's accurately stating the state of affairs in this day and age.

**Mat Ryer:** What language is Go.dev written in? I caution you to be very careful here...

**Steve Francia:** Elixir.

**Carmen Andoh:** \[laughs\] Steve...!

**Steve Francia:** What? Oh, are we not saying that?

**Carmen Andoh:** Redact... Redact...! No... Troll.

**Julie Qiu:** It's Ruby on Rails.

**Carmen Andoh:** \[laughs\] I thought it was Haskell... It was Haskell, right?! \[laughter\]

**Mat Ryer:** So what's the real answer?

**Julie Qiu:** It's Go.

**Mat Ryer:** It's Go! We'll play some celebratory music there.

**Carmen Andoh:** Of course it's Go!

**Jon Calhoun:** Can you talk about more of the technology? Is it an API, or are you using templates on the back-end? Can you talk a little bit about what you're using to build it all?

**Julie Qiu:** Yeah, so the entire back-end is written in Go, and then the front-end is just all Go templates. The majority of it is HTML and CSS. I think for a really long time we had absolutely no JavaScript. And even now, it's pretty limited.

Then the site itself is hosted on the Google Cloud Platform. The high-level architecture is we have a system that we call our data ingestion system, which essentially extracts data from the module mirror, and then transforms it, and then puts it into a Postgres database, which is hosted on Google Cloud SQL. Then the front-end - we also just have a service that is pulling data out of this Postgres database, serving requests... We have Redis, which we use for caching, and... Yeah, that's a pretty high-level overview of it.

**Mat Ryer:** Is it Google App Engine, or...?

**Julie Qiu:** It is, yeah.

**Mat Ryer:** Yeah. I use App Engine all the time, I love it.

**Julie Qiu:** It's very easy for deploying and scaling and all of that... So it's been kind of nice, especially given that we had a small engineering team working on it.

**Mat Ryer:** Yeah. And it will scale significantly as well, won't it? That's something that's nice, especially when you're not really into the operational side of things. You can sort of not worry about it, so yeah, I'm all over that... It sounds great to hear.

**Break:** \[00:54:53.12\]

**Mat Ryer:** So, actually we have a new regular part of our show, and it's gonna get its own jingle as well... It's Unpopular Opinion.

**Jingle:** \[00:56:20.02\]

**Mat Ryer:** So we're gonna ask "Do you have an unpopular opinion that you'd like to share?" Anyone?

**Julie Qiu:** I can start...

**Mat Ryer:** Please.

**Julie Qiu:** This just comes to mind, because people on the Go team make fun of me for this a lot, but... My unpopular opinion is that the New York City buses are the best way to commute across Manhattan.

**Mat Ryer:** Oh, that does sound controversial.

**Julie Qiu:** Better than cabs, better than subway. Take the busses. It's so great!

**Mat Ryer:** Really?

**Julie Qiu:** Yeah. It's basically an Uber Black car. It's like a giant car, it's come here, it's picked you up, it's got Wi-Fi, it's got views...

**Carmen Andoh:** \[laughs\] We're waiting for New York City mass transit to disrupt...

**Julie Qiu:** There are new seats on the M14 now...

**Mat Ryer:** You're joking!

**Carmen Andoh:** Nice.

**Julie Qiu:** It's so great!

**Mat Ryer:** That's a great one. Steve, do you have one?

**Steve Francia:** My unpopular opinion is that I think Windows is the best operating system... And it was proven unpopular in preparing for this podcast. \[laughter\]

**Jon Calhoun:** So for anybody who isn't familiar, when we do these episodes, every guest records their own audio, just so we have a little bit better quality... And I think Steve is our first guest with Windows -- or at least our first guest with Windows who made me help him set up the recording, so I didn't know how to do it, and had to figure that out.

**Mat Ryer:** Steve's the first modern-day programmer I've ever met that uses Windows, actually... So Steve, yes, that is an unpopular opinion.

**Steve Francia:** I use the other operating systems, too. I'm not exclusive to Windows. But I really like Windows 10, I think they've done a really good job with it. I like Windows Subsystem for Linux, and I've got Bash in my Windows and I really feel very comfortable with it... I do develop on it, it's my primary development environment, but I also -- it's nice that I can do photography work, and video editing...

**Mat Ryer:** Minecraft...

**Steve Francia:** I don't do Minecraft on it, but I might play the occasional game, and Windows is quite good at that, as well.

**Mat Ryer:** What's that little game with the grid, where you find the bombs?

**Steve Francia:** Oh, Minesweeper.

**Mat Ryer:** Minesweeper. Let me do that again, and we can edit that in. Minesweeper... \[laughter\]

**Steve Francia:** Oh, I like the way it was. I thought that was better.

**Mat Ryer:** No, but Minecraft's on everything; I think Minesweeper is only on Windows. And I miss it. That's the thing I miss from Windows.

**Steve Francia:** Honestly, I don't even know if it still is on Windows. Let's find out.

**Carmen Andoh:** 1997 is calling Mat, and it wants you back there.

**Mat Ryer:** I liked XP...

**Steve Francia:** No, it does not ship with Windows anymore, apparently... I just searched for Minesweeper and it did not...

**Carmen Andoh:** It wants to party like it's in 1999.

**Jon Calhoun:** Apparently, people weren't productive enough at work, so they had to get rid of it.

**Mat Ryer:** Yeah. I once \[unintelligible 00:59:25.28\] my Mac so I could play the game of Minesweeper.

**Carmen Andoh:** Wow...

**Jon Calhoun:** You couldn't find one online somewhere?

**Mat Ryer:** No, I didn't have the internet. \[laughter\] Yeah, XP was alright... But actually, I know that they've put a lot of effort into Windows recently, for developers and stuff. And of course, you can be successful with Go on Windows, can't you?

**Steve Francia:** Yeah, Go honestly was the language that let me shift to Windows full-time...

**Mat Ryer:** Said nobody ever? Steve, you're the only person in the world where that's happened...

**Jon Calhoun:** He's not the only one.

**Steve Francia:** I'm not the only one.

**Mat Ryer:** Guaranteed.

**Jon Calhoun:** I think Brian Ketelsen uses Windows every once in a while...

**Carmen Andoh:** Yeah.

**Mat Ryer:** No, but Go led you. Go was your gateway drug to Windows, you know what I mean? \[laughter\]

**Steve Francia:** From my personal experience, other dynamic languages and other languages were a little more cumbersome. And I'm not a Windows, Visual C++ programmer, or .NET programmer. So using the more dynamic open source languages, I always found it was jumping through hoops, and you'd find edge cases that nobody else was hitting... And then Go just worked. And I could cross-compile from my Windows machine for all the Linux, and Mac...

**Carmen Andoh:** You're like a walking advertisement for Windows. We'd better call them to sponsor...

**Mat Ryer:** I can't believe you just said it just worked. That's the Apple slogan. \[laughter\]

**Steve Francia:** That's the Apple slogan?

**Mat Ryer:** It's the Apple slogan, yeah.

**Steve Francia:** Well, they should live up to it more.

**Mat Ryer:** Yeah. \[laughs\]

**Jon Calhoun:** So did you ever use Java before then?

**Steve Francia:** I have spent my entire career avoiding Java.

**Mat Ryer:** Congratulations.

**Jon Calhoun:** Okay. I was gonna say, Java was one of the few languages where I didn't have much issue using different operating systems.

**Steve Francia:** You had the same issue across all operating systems, you mean...

**Jon Calhoun:** Exactly. \[laughter\] But that was part of the reason why I learned Java when I was in college, and it was kind of the language I stuck with then... But then later I learned Ruby, and that one would have been terrible. Because I tried it on Windows and I was just like "Nope. This is not working."

**Mat Ryer:** Yeah, met too, actually. Ruby was the reason I got a Mac. I bought a Mac so I could do Ruby on Rails. Visual Studio though, I have to say, was - and I think still is - very good for if you're doing C\# or any of the .NET flavors of things. Visual Studio was just amazing, really... And of course, VS Code, which is Microsoft - I think that is the most popular editor for Go on the Mac for people, still.

**Jon Calhoun:** Okay, so we have a little bit of time left... Do you guys wanna talk about the last aspect of Go.dev - the learning side?

**Steve Francia:** I was hoping we'd get to it, because that's Carmen's show.

**Carmen Andoh:** Is it my show?

**Steve Francia:** Oh, yeah.

**Carmen Andoh:** Alright...

**Steve Francia:** And it's also kind of your show.

**Carmen Andoh:** It's also kind of my show. I am both a guest and a host today. Pretty weird. Learn.go.dev - yes, it is what I would call the part of go.dev that I am really excited about, and is ripe for the most community collaboration, contribution and ownership. Some of the original feedback when it first came out was "Why didn't my site/my YouTube channel make it in?" and to that, I say "Let's talk." Because I really wanna be able to do this.

The one thing that we're finding when we're doing -- I did a lot of research and put a lot of work into wondering "Okay, how can we make this useful?" is finding who are the people that we're forgetting about... What we've found there was 1) zero coding experience. We're not even starting with Go as a second or third language... So we partnered with Codeacademy to provide that... Meaning "I know nothing about coding at all, and I wanna try Go as my first language." And Codeacademy - that's their bread and butter, so we partnered with them, and it was a really good partnership. There's probably -- the data that I can share is that we have roughly 70,000 people since they launched that course, and we made it available free, through a sponsorship.

**Steve Francia:** That's a huge number, 70,000 people.

**Carmen Andoh:** It really is. I'll share more later, but yeah... I get weekly reports on that. And there's four modules for free; the whole course is eight modules. You can go to codeacademy.com.

The other gap that was missing was people working in companies that they just -- for whatever reason, they didn't want... The tour of Go wasn't working for them, or other self-learning sites - Jon, Gophercises - and also other things... They wanted to be handed the problem that they wanted to solve. Like, "How do I do X in Go?" Or from Java to Go for \[unintelligible 01:04:07.09\] So we just looked at some of the things that many people were using Go - the specialties, verticals, if you will - and we chose the four most common based on the data that we have via surveys and other research, and we decided to find and provide curated learning journeys for those learners in particular, and we got really good feedback for that. Thank you for taking me step by step.

Because what we found was there was two different psychological mindsets for adopters. If you've heard of Crossing the Chasm book - there's early majority/early adopters, late majority/late adopters, and there's a different psychology with each one of those. And the psychology that we're finding with Crossing the Chasm is "I wanna just explore, I wanna learn, I wanna be given the space to kind of take the time to learn it..." Versus the late majority adopter, what we call enterprise, and that is "Just show me how to do it in Go."

So that's what the idea behind the curated learning journey is, based on these very specific "I have things that I wanna do." So plans in 2020 are to continue to partner with more of the community to help find more gaps for those people for whom all the existing things aren't working. We wanna keep it free, and we wanna be able to make sure that all the different -- what we're finding is that you ask ten people "How do you learn?" and you're gonna get ten different answers. There's so many different learning modalities, and we wanna be able to have a variety of learning modalities that appeal to a lot of people.

But the last thing is - and this touched on the events that we talked about earlier - the best outcomes happen when you learn together in-person, in a group. That's really hard to do, but we're hoping to leverage maybe meetups or online meetups. In-person doesn't mean that I'm right next to you, it's also leveraging tools like VS Code for pairing, and then learning together or going through together and hand-over-hand testing things out... So we're trying to look into that a little bit more.

So I've asked a lot of opinions... Jon has a learning site, and I actually wrote to Jon; I didn't know that I was doing it in that capacity, because we hadn't make Go.dev public at the time... But I just wanna ask people's feedback; I've tried to ask a lot of different people's feedback for various things, and I'm gonna continue to do so, so that we can continue to make learn.go.dev really what we envision it to be, which is a collaborative work of art that is quality, and serves a variety of learners to bring in the next two million.

**Jon Calhoun:** Can I just add...? I know one of the things, at least from my perspective, that got me excited about seeing that site is that one of the things that's at least hard for me is to reach people who have limited accessibility. Let's say they speak another language, English isn't their first language, or they need transcripts if they're doing videos, or something like that... I know at least for independent creators, that's a challenging thing, but I know that as the language grows, sometimes people will learn Go better if they can learn it in Spanish or whatever language is native to them... And I like seeing something with Google behind it - or it seems like Google's behind it at least - in the sense that I feel like it opens more doors for that reaching a much larger audience, that it would be much harder for somebody like myself or anybody else to really reach.

**Carmen Andoh:** That internationalization is in our future, and it's also been the thing that I've seen at some of the bigger conferences. We have people like Friends of Go, a company based in Spain, that wrote back and said "Hey, we have this training for Spanish speakers", and we also have some trainers in a variety of countries, including India, parts of Asia, and then in Europe, that have also said "Can we collaborate?"

So if you wanna go fast, go alone; if you wanna go far, go together... So the name of the game for learn.go.dev is really seeking the feedback that we need to seek, and making sure that we get both representation, as well as quality.

**Mat Ryer:** Yeah, that's great. And do you see that being a community aspect of this, too? Will it stay curated completely, or do you ever imagine people being able to vote up things?

**Carmen Andoh:** We go round and round on that. Some people say "Oh gosh, if we could vote up, vote down, that is gonna be its own quality indicator of itself." The problem is everything can be gamed... So right now the only thing that can't be gamed is people whom we can trust to be ethical about curating things, and also making sure that we constantly go back and feed into what the global community needs in terms of learning gaps, whether that's content gaps, modality gaps, whatnot.

So for the forseeable future, it's going to be curated. If we could find a way to do voting that we don't feel can be gamed, or turns into -- you know, the thing I wanted to stop and prevent was someone saying "Go vote on my thing, because you're my friend", versus "Go vote on my thing because you personally learned from it, or you've found it to be very beneficial for you."

But we've gone round and round on it. I remember having a working group or a roundtable at GopherCon in July in San Diego, and then we had about 15 people show up to two sessions, and this was an idea that came up... Someone really wanted to push forward on that. I continued to research it, and look into it, and ultimately said "Not right now", until we can answer some of the gamifying questions.

**Mat Ryer:** Yeah. I mean, of course, even if there isn't the mechanisms automatically or programmatically to vote, people do still have a voice, of course, in any of the communities they're in. There is a great Go community on Twitter, and there are other communities. Of course, there's a Gopher Slack... So yeah, I think -- I've seen a few examples really in the community where although there isn't an official way for people to share ideas and things yet, having the conversation out in public really does influence things, doesn't it? So people's views are of course heard, so therefore you should say it, if people do want to contribute...

**Carmen Andoh:** I think I will. The one thing that I want to start talking about more publicly is in order for a site to be useful, you're navigating two things that pull up against each other. One is keeping a 30,000-foot view, to make sure that you aren't having any blind spots, but you also need to dive deep down into the actual needs of a particular subgroup. So coming up and down and up and down is an incredibly challenging thing, and it's one I hope to help with.

**Steve Francia:** Mat, you also mentioned their Twitter, and Gopher Slack... It's important to recognize that the intent of this site is not to displace those great resources that already exist. So we say it's "by the ecosystem, for the ecosystem", but it doesn't mean it's gonna replace all the existing ecosystem solutions. The intent here was to fill some gaps that we saw were there. It's largely a curation site; it's actually to reference those existing things that are there.

As I heard you describing these voting mechanisms, it sounded to me a lot like Reddit. And the Reddit channel I think is great. I subscribe to the Golang Reddit channel, I read it every day. I always see good news, and new articles, and new talks on it, and I think that's a great mechanism to get the voice out... And of course, the other things you referenced already. But if you want a voting thing, we have it. It's the Reddit r/golang. Feel free to use it, it's a really good resource.

**Mat Ryer:** Yeah, great. There's also the Go weekly newsletter, and there's a Changelog newsletter as well, which is the home of this podcast. So anyone that wants to sign up to that... You really can keep your finger on the pulse of what's going on that way; it's great.

**Jon Calhoun:** I will say, the only thing I differentiate between Reddit and the voting thing is just that Reddit is kind of -- it's not real-time, but it's time-boxed, in some sense... Whereas I could see some value in voting for learning resources, but I completely agree that the way voting and everything works, it'd be very hard to do that correctly... So I completely get why you're not doing it. But I do see that as slightly different from Reddit. Because I agree, it's very similar, but I've seen tons of cases where -- you know, I have free resources that I give out, and I've seen people post them; even though they've been posted on Reddit before, they'll post them again and people are like "I've never seen this before", and it's like "Okay, clearly nobody is going back and searching these things", or something's happening... So there is some difference there.

**Steve Francia:** It's also important to recognize, most of the content on the site is static. As Carmen said, we've talked about doing internationalization; we're using a tool that lets us do internationalization with it... And there's opportunities to -- like, we do not have plans to do this yet, but we've made sure that the options are there later, if we wanted to add additional curators, maybe localized curators from different areas to help us with this as well.

So there's an element there where we can open it to some degree and get support from the community, but also keep it tightly curated and a high-quality bar up there.

**Mat Ryer:** Well, I think that's all the time we have for today. Thank you very much to our guests, Julie Qiu, Steve Francia, and our regular panelists, Jon Calhoun and Carmen Andoh. We'll see you next time on Go Time!

**Break:** \[01:14:14.21\]

**Mat Ryer:** Hello, and welcome to Go Time! I'm Mat Ryer. Today we're talking about Go.dev. It's a user-friendly hub of curated resources for Go, and we're joined by two of the brains behind it - Steve Francia (also known as @spf13) and Julie Qiu are joining us. Hello!

**Steve Francia:** Hi!

**Julie Qiu:** Hi!

**Mat Ryer:** And we're also joined by Carmen Andoh and Jon Calhoun. Hello, you two!

**Carmen Andoh:** Hi!

**Mat Ryer:** How's it going?

**Jon Calhoun:** Mat, I think you kind of lied. I think Carmen is partially behind Go.dev as well.

**Steve Francia:** Yeah, we're actually joined by three of them. You just happen to be regularly joined by one of them.

**Carmen Andoh:** I'm stealth. I'm stealth.

**Mat Ryer:** Okay, I'll do it again. So it's three of the brains behind GoDev.

**Steve Francia:** And it's Go.dev.

**Mat Ryer:** Okay, Go.dev. This is why we do it. So for anyone listening, this is how the sausages are made... \[laughter\] I have to do it again now, and make it sound like it was the first time. That's the hard bit, you all know it...

**Steve Francia:** Yeah, you don't call it like GoogleCom. \[laughter\]

**Jon Calhoun:** Actually... \[laughter\]

**Steve Francia:** \[01:17:15.14\]

**Mat Ryer:** Go.dev, okay. It's clever, because it's also the domain, isn't it?

**Steve Francia:** Yeah.

**Mat Ryer:** Got it, thank you. Good. Alright, let's do it again then, everyone. It's fine, I'm not embarrassed.

**Steve Francia:** I thought you did a really good job, by the way.

**Carmen Andoh:** Same here.

**Steve Francia:** Other than the obvious mistakes, it was really well done.

**Mat Ryer:** \[laughs\] Yeah... Yeah. Okay, well there we go. This is why we do iterative development.
