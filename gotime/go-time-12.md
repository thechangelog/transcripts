**Erik St. Martin:** Alright, we are back for another episode of Go Time. This is episode number 12. Here with me today is Brian Ketelsen...

**Brian Ketelsen:** Hello.

**Erik St. Martin:** And I should say I'm Erik St. Martin, I always forget that. Unfortunately Carlisia is not here today with us. She's doing her first week at her new job, but she's here with us in spirit, and I know that she would love being here today, especially because she is a super big fan of our guest today, which is Beyang Liu from Sourcegraph. How are you doing?

**Beyang Liu:** Doing great, great to be here.

**Brian Ketelsen:** We're all big fans of Sourcegraph. You guys are famous for live-tweeting GopherCon.

**Erik St. Martin:** That was so awesome.

**Beyang Liu:** Thanks!

**Erik St. Martin:** Are you guys doing that again this year?

**Beyang Liu:** We gotta figure that out, actually. I'm actually not gonna be able to go to GopherCon unfortunately, and it's usually me that's organizing the live tweeting. But we do have Dmitri Shuralyov and Renfred Harper. You guys probably know Dmitri, because he's pretty prominent in the Go open source community, but they're both going and hopefully they'll organize something.

**Erik St. Martin:** I didn't even realize that he worked for Sourcegraph, that's awesome.

**Beyang Liu:** Yeah, he's been a member of the team for about a year and a half now, he's one of the more senior members, and he's awesome.

**Brian Ketelsen:** We gotta get him on the show, too. Everytime I come up with some absolutely crazy Go project his name is on it. I don't' understand that.

**Beyang Liu:** Yeah, you guys should really have him on the show. He's doing a lot of great stuff in the open source community and he's just a great guy in general.

**Brian Ketelsen:** We'll get him on the schedule, too. But today it's you, so let's talk about all the awesome tools that you guys have dropped in the last couple weeks... Holy cow!

**Erik St. Martin:** Yeah, no kidding.

**Beyang Liu:** Yeah, we've shipped a lot of stuff in the past couple weeks. There's some new editor integrations and native stuff that I'm pretty excited about, that kind of gets the information that Sourcegraph provides just in your editor, and literally one keystroke or zero keystrokes away when you're programming.

**Erik St. Martin:** Yeah, we were talking about that a couple episodes ago.

**Beyang Liu:** I guess I should start by giving an intro... I assume most of your listeners probably won't have heard of Sourcegraph, so I should probably say a little bit about what we do, right?

**Erik St. Martin:** Yeah, definitely.

**Beyang Liu:** Sourcegraph's essentially a programming assistant that's built on top of the global graph of code. What I mean by that is the assistant part helps you answer a bunch of questions that pop up every single day, every single hour when you're coding. Things like, "How do I use this particular function? Who else uses it? Who should I bug if I have a more in-depth question that I need to ask?" and it does all that by building on top of this graph of code. Every single piece of code, every single definition, package type, whatever is a node in that graph, and the edges are essentially function calls or package imports. That's something that we do differently than a lot of other tools out there that essentially treat code as a blob of text. We actually understand, "This is a thing that calls a function over here", and because of that we're able to give you very high quality usage examples, jump to definition in the web browser, and really good code search.

\[03:57\] So it's basically this all-in reference guide that lets you answer all these questions that arise over the course of the day. It helps you get the answer within seconds as opposed to minutes, and with a lot less mental energy than something like grep, or just googling for the answer. So that's kind of the sales pitch there.

**Brian Ketelsen:** It's a pretty good sales pitch.

**Erik St. Martin:** Yeah, a couple of big ones... The ones that we noticed - and see, Carlisia's like the encyclopedia here, because I will say we talked about it a couple episodes ago and she will tell me specifically which episode it was we discussed it... But we were talking about the new editor plugins and how awesome that was that as you're starting to type a function, you can actually see examples from real world projects on the usage. That's so fantastic. Does the GitHub plugin, or the browser plugin that works on top of GitHub - does that also show that? I remember showing documentation in references to other code, but does it show stuff in-line as well?

**Beyang Liu:** It doesn't show anything in-line. With the Chrome extension it's a little bit more limiting, because we essentially had to build on top of a pre-existing UI, and that's a little bit tougher than building our own application. So we do our best to show all the information we can there, but it's still not as good of an experience as in the editor, and on Sourcegraph.com, unfortunately.

**Erik St. Martin:** The other thing I noticed you guys did was you released SourceLib, which is the library behind doing the code parsing.

**Beyang Liu:** Yeah, so basically in order to extract the information that we used to display great code search results and usage snippets to the user, we needed to actually parse the code and extract the simple table and do other sorts of static analysis. We do that across a couple of different languages now. We started with Go, but we now support Java and soon Python and JavaScript. So in order to do that in a language-independent fashion, we built this library called SourceLib that kind of shells out to language-specific analyzers, and then transforms the data they admit into a language-agnostic format that then is consumed by the application. So the application doesn't have to worry about the specifics of a particular language, it just has to deal with that one data format.

**Erik St. Martin:** Have you seen anybody using that for any interesting projects? Everytime I see that I'm like, "I wanna build something with that", but I haven't come up with a fun use case. But I say the same about all static code analysis. I'm like, "I feel like I could do something useful here", I just don't know what that is.

**Beyang Liu:** Yeah, actually the impetus for our editor plugins and integrations came from the community, from people building on top of that and saying, "Hey, this information is useful. I just wanna jam it in my editor, which is where I spend a lot of my time." So we kind of looked at that and said, "Hey, we can help out with that" and in addition build in kind of like full-on support for that experience. So it's not just this hacky thing, it's actually like a first-class citizen in the experience that people get from Sourcegraph.

**Brian Ketelsen:** I played with the Vim extension - actually in NeoVim, I don't know if it makes a difference, but I played in the Vim extension, I guess it was last week or the week before, and I was blown away. I cannot believe how freakin' cool that was.

**Beyang Liu:** Awesome, thank you.

**Brian Ketelsen:** Yeah, I turned it off, because it was just a little bit slow, sorry... But I think all of that is just internet latency, but it was really impressive.

**Beyang Liu:** Yeah. I mean, performance is a big thing that we're hammering on right now, and we're actually gonna ship a native desktop client soon. That should hopefully help with the latency things, so... Kind of a sneak peek at that.

**Erik St. Martin:** \[07:57\] Yeah, that's gotta be hard too, like Brian said, with the network latency. It's much easier to do that stuff when all the code exists locally, than it is to do it remotely.

**Beyang Liu:** Yeah, and what we'd like to do in the future is really connect the code that's on your local machine to this global graph that exists out there in the ether, the cloud, because that's really where a lot of the magic can happen. You have access to this dictionary and index over all the possible open source code that you can use in the world, and at the same time you're changing just like a tiny bit of that graph locally, in the stuff that you're doing in your individual editor. And it would be awesome just to understand in real-time how the semantics of the code are changing. You change a function here, and that's gonna change how many callers of this particular open source function there are, or that's gonna have an impact on someone else on your team who is changing the same code, a related piece of code, and a big push for us in the future is just bringing more of that experience natively, so that we can have access to the graph, the bits and pieces of the graph that are changing in real-time as you're kind of typing in your editor.

**Brian Ketelsen:** That's kind of crazy. Can you give us an idea of what the request flow looks like when I'm typing in Vim? What's happening behind the scenes?

**Beyang Liu:** The architecture... We try to do things in ways that are as scalable as possible, in the sense that we wanna support a bunch of different editor plugins without a lot of deep custom work for each editor. So what each plugin does is essentially there's kind of like an API that Sourcegraph exposes specifically for the editor plugins.

For example, one of the things that the plugins do is anytime your cursor is hovering over a token in the code - let's say it's a function name - what it will do is pull up documentation and user examples for that function in Sourcegraph in your web browser. And what it does there is essentially in the editor it extracts the token name, as well as some contextual information from the editor and then makes an API call to Sourcegraph.com saying, "Show me the documentation for this particular token" and "Here's some more contextual information, like the repository URL and other language-specific stuff." That just hits the API. Sourcegraph then goes and finds that definition in the global graph index, populates it with documentation and looks up some usage snippets and then sends that back over the wire, and that's it, basically.

**Brian Ketelsen:** So the whole process is wickedly fast when you describe it that way. What kind of data storage are you using on the backend? I like the hardware stuff. What databases, what indexes are you using?

**Beyang Liu:** We kind of have a custom graph storage system that's built on top of Postgres and Google Object Store right now. So it basically uses Google Object Store for all the detailed meta data. Once you know you're looking for data for a specific definition, specific function or package, then you look up the detailed meta data in the object store, and then we use Postgres for some of the more... Things like search queries and listing definition subject to a particular set of search criteria. That's actually gotten us surprisingly far. I think most people when they think of writing something like a search engine over all the code in the world, Postgres is probably not the first thing that comes to mind. But we've been impressed so far with how good full tech search support in Postgres actually is, and it scales pretty well, too.

**Erik St. Martin:** \[12:16\] Did you have to build a spider to index all that data?

**Beyang Liu:** Yeah, so the way our crawler works is anytime it indexes a library, it looks at the dependencies, because we actually extract the dependencies of that particular library, and then it just goes and indexes the dependencies. So it just kind of crawls the graph of code, the dependency graph.

**Erik St. Martin:** Have you guys been doing anything with the new BigQuery dataset that went out?

**Beyang Liu:** That's been really interesting. I personally haven't played around with it yet. It's actually interesting, because that is kind of like a text-based approach to searching over code, and a lot of the answers you can get from that setup, you can actually kind of get from Sourcegraph already. So if you're looking for all the callers of a particular function, in BigQuery you probably write a regular expression that runs over the entire set of code that GitHub has put up, and it might be a little bit noisy because regular expressions aren't perfect at parsing code. But with Sourcegraph you just go to a definition and every single usage snippet there is kind of 100% accurate because it operates at the parser level.

**Erik St. Martin:** Right, because the BigQuery stuff, a lot of people were writing regular expressions, where you've kind of tokenized the stuff as you were crawling it, so it's much easier for you to look for specific things. "I want a function named this", rather than having to write a regular expression to match a function definition.

**Beyang Liu:** Yeah. I will say that stuff is really cool, though. One of the things that people don't realize enough, I think, is code is just another form of data. It's not just this... People often tend to think of code as a form of text that you write in an editor, or a doc, or something like that, but it's really very highly structured data, and when you think about a lot of the stuff that we do as programmers/software engineers, it's really exploring this dataset and making changes to this dataset. So I think what that data dump did, along with the BigQuery queries that went along with it is it showed the power that you can tap into once you start to treat code as more of a dataset.

In the future, you can imagine more senior members of the team, who care about overall code quality and maintainability of the codebase, and they worry about things that more junior engineers might be doing to shoot themselves in the foot, they can actually issue queries against a dataset - the global graph of code or the graph of code inside your company - to look for patterns and anti-patterns like that, and make sweeping changes... As opposed to the old way of doing things - or the current way of doing things - which is single person, single editor, single machine, making changes one at the time.

**Brian Ketelsen:** Interesting.

**Erik St. Martin:** So is that kind of what's next for Sourcegraph, building some team tools for looking for things like that?

**Beyang Liu:** Yes. You know, the individual use case stuff, the search and the snippets is really valuable for every programmer in terms of the day-to-day stuff that you do, but I think that the real value is just gonna be in the way that we can change how teams work together to build software. So it's things like issuing queries like that to discover anti-patterns in the code... It's also more explicit forms of collaboration, where if you have a question about the code right now, more likely than not you either go and ask the person in person, or maybe you drop them a message in chat. \[16:20\] In both cases, the answer to that question that you asked is lost to time, almost as soon as it's answered. That kind of sucks, because if you have that question, chances are someone else on your team is probably gonna have that same question or a very similar question later on, and wouldn't it be nice if the tool that you use could actually attach discussion messages to specific pieces of code, and those stay with that particular function or package as the lines of code change over time.

We think a lot about the impact that we're gonna have on team productivity, because I think that software engineering is still in the early days in terms of software engineering methodology and best practices.

It's astounding to me that in 2016 a software project like healthcare.gov is not a trivial thing to do. You can't just take a team of 4-5 programmers and implement that. And I think a lot of what we wanna do is address the pains that software teams have that prevent them from executing on projects like that.

**Erik St. Martin:** That's interesting. So on top of this stuff that you have globally, you guys offer on-premise installs of Sourcegraph too, right?

**Beyang Liu:** Yeah. We're kind of limited in who we go on-prem with right now, just because we're still a small team and on-prem is a bit of a larger commitment. Our main on-prem customer right now is Twitter, and we're kind of holding off on on-prem for smaller customers at the moment, but we do offer an on-prem solution.

**Erik St. Martin:** Yeah, I mean all of that comes with support and keeping people up to date, and all that jazz. So talk to us a little bit about your usage of Go at Sourcegraph. Is most of this stuff primarily written in Go?

**Beyang Liu:** Yeah, most of the application stack is written in Go. Basically, everything except the frontend, which of course is JavaScript, and the language analysis stuff, which is more polyglot. But everything else is basically written in Go. Go has been amazing for two reasons. One, it's just a really solid tool to build on top of the... It's a very no-nonsense language, there are very few surprises that you encounter when building a web application with it. The tooling around it is great, and that kind of leads into the second reason why Go has been great. It's kind of been an inspiration actually for a lot of the concepts that we wanna promote with Sourcegraph.

I think the tooling around Go is so solid that it really lets you think of code more as this form of data that you can modify with other tools, not just by handcrafting it, hand typing it in. Things like go generate, for instance... All the metaprogramming that is enabled in Go would be much tougher in other languages without as strong tooling, and that just leads to incredible productivity gains, when you're able to just generate a bunch of code that does what you wanna do, as opposed to having a human just type all that stuff out.

**Brian Ketelsen:** Oh, absolutely. I couldn't agree with that more.

**Erik St. Martin:** Just make Brian type it all out. He's got this.

**Brian Ketelsen:** \[20:04\] No, I'm the king of code generation. If you can generate it, I'm your guy.

**Beyang Liu:** Yeah, it's great. And then there's also... Alan Donovan has done such great work with Go oracle. I think the talk that I was most looking forward that I'm sad I'm missing at GopherCon is the talk he's gonna give on the Go Guru, which is kind of like an extension of the Go oracle that he's designed for editor integrations and things like that.

**Brian Ketelsen:** Did you know that we're live streaming GopherCon this year?

**Beyang Liu:** I did not.

**Erik St. Martin:** Well, part of it, the morning.

**Beyang Liu:** I will probably tune in.

**Brian Ketelsen:** Yeah, we're live streaming the morning shows at twitch.tv/gophercon.

**Beyang Liu:** Nice.

**Brian Ketelsen:** So if you just tune in to twitch.tv/gophercon, if I can make the whole streaming thing work... I mean, I'm an old guy, I don't know. This whole Twitch thing is for the young kids. But if we can make the streaming work then you'll be able to catch that talk at 9:35 AM on the 11th.

**Beyang Liu:** That's awesome. I have to say, the two GopherCons that I've gone to have been just top notch. Thanks for all the work that you guys put in to make that happen.

**Erik St. Martin:** Thank you.

**Brian Ketelsen:** Thank you, it's our love, the community.

**Erik St. Martin:** It's fun and it's stressful, but I think the kind of reward from it is better than the stress we get from it. But yeah, we're a few days off from it. Actually, Brian hops on a plane tomorrow morning...

**Brian Ketelsen:** I am.

**Erik St. Martin:** And then I follow him the next morning. So it's coming up.

**Beyang Liu:** How has it been to watch that thing grow along with the Go community over the years?

**Erik St. Martin:** I think it was mostly mind-blowing.

**Brian Ketelsen:** Do you want the truth? \[laughter\] The first year was the craziest obviously, because we didn't know what we were doing, and we learned a lot the first year. Last year we had some ideas, but we grew into the Convention Center, which changed the rules for everything. That made it a much, much bigger concept.

This year, it's our second year at the Convention Center, so we have a better idea of what we're doing, but the Go landscape is changing a little bit. We have a different set of sponsors this year, or a portion of them... We always have some of the same people come back over and over and we truly appreciate that, but we do have a different group of sponsors this year. As Go matures, the target of our sponsorship will change, too. That has been different for us.

**Erik St. Martin:** Yeah, I mean we're still learning each year, too... How technical the talks should be, whether we should do multi track or single track... We're still kind of experimenting a little bit to figure out what the exact format is, but people still keep coming, so we're doing something right, I guess.

**Beyang Liu:** Yeah, that's interesting. Any broader trends you've noticed in the Go landscape? Like who is using Go, who is coming to the conference?

**Erik St. Martin:** I think Brian and I - we continue to come back to this whole... Most of the new distributed systems tools are all being written in Go, we just continuously see that. Every new distributed systems tool that comes out is written in Go, and I don't know whether it's because Go is the best language for that or whether people who use Go also love distributed systems. I'm not really sure, but I'm happy that it works, though.

**Beyang Liu:** Yeah, that's really interesting.

**Brian Ketelsen:** I think the thing that's surprised me most this year is the fact that we're seeing registrations from really off-the-wall places. There was an auto parts store that registered a couple employees two or three weeks ago.

**Beyang Liu:** Really? That's crazy.

**Brian Ketelsen:** It is. And when that email hit my inbox, I thought, "That's a big adoption point for Go." It's not a tech company, it's not some VC-funded startup somewhere, they're not cutting edge, whatever, it's just an auto parts company. To me that felt like an inflection point for Go.

**Beyang Liu:** \[24:02\] I think that speaks to one of the broader trends, not just in Go but in the software world in general, which is more and more you're seeing companies that you don't think of as traditional tech companies becoming highly depending on the software they're able to build.

Have you guys seen the new GE ad campaign, where the tagline essentially is "GE is a digital company that happens to do infrastructure", and the whole point of it is to appeal more to software engineers and convince people that GE is kind of a software-first organization.

**Erik St. Martin:** It's almost impossible to have any business without software anymore. We depend on it so much for just about everything.

**Beyang Liu:** Yeah, totally. Business logic has been a term that has existed for a long time now, and often been misused, but now it's like more and more the logic of your business is in the business logic of your code.

**Erik St. Martin:** And it's safer there, too. \[laughter\]

**Brian Ketelsen:** It depends on who's writing it. You see, there's a big competitive advantage for some companies if they have software systems that allow them to provide whatever their goods or services are faster. I think of Walmart as the shining example of a company that uses really cutting edge software to cut their margins down drastically. They've got all this just-in-time inventory; they see a weather forecast coming in for a hurricane and they start shipping water bottles to Florida before the hurricane even hits, because they've got these really strong IT systems. I think that's a good example of how software is changing all business, not just traditionally technical companies.

**Beyang Liu:** Yeah, and as that shift is happening, I think Go is pretty good because the tooling is so good around it, but in a lot of other language ecosystems I really think that the tooling is kind of lagging behind all the places where software is becoming critical. Take a look at a typical, large, non-technology company that tries to do software, more often than not those projects are over budget, overtime, they under-deliver on features.

Something that we think about a lot is how can we build the tooling ecosystem and the programming assistant or individuals and teams that enable organizations that are not necessarily steeped in software development methodology, so they need better tools to efficiently build things and deliver things on time. I think that's gonna be a big question the industry has to address in the next couple years, otherwise we're gonna see more things like healthcare.gov and things of that nature.

**Brian Ketelsen:** Well, that's actually a really good transition into our discussion about our sponsors; speaking of people who build great tools to help you ship your software.

Equinox, one of my favorite tooling companies, Equinox.io, helps you package and distribute your Go applications. You can package and release CLI and on-premise software using Equinox, and I think my favorite part about using Equinox is the native packages and installers for Mac, Windows and Linux. So you get the msi, you get the pkg file, you get Debian files, rpms, yums, all of that good stuff. It's really easy to create an application and then let Equinox ship it to your customers in a self-updating format.

We use Equinox at Backplane, and I think Beyang you mentioned that you had used it before, hadn't you?

**Beyang Liu:** \[28:03\] Yeah, we've used it for on-prem stuff at Sourcegraph, and I just have to say it's so easy... If it's your job to manage on-prem or native installers for a Go-based application, and you're just worried about the headache that that entails, then you should definitely check out Equinox. It makes your life so much easier. It pretty much works out of the box, and it's just really great.

I'd also like to give a shout out to Equinox's creator, Alan Shreve. He's just a great guy. He's prominent in the Go open source community and he has just done so much great open source stuff.

**Brian Ketelsen:** That's awesome. We probably talk about ngrok at least once an episode.

**Erik St. Martin:** Yeah, that's exactly what I was gonna point out. If you haven't heard of Equinox, you certainly have heard of ngrok.

**Beyang Liu:** He also gave a talk at this year's dotGo. Basically he wrote a program that makes it much easier to read through functions in Go code. Basically what it does is it strips out all the boilerplate. So when you're reading through a function, trying to understand how it works, you really wanna concentrate on what is it doing. You don't wanna think about logging statements or error handing or anything like that. He wrote a tool that kind of strips out all that other cruft and just shows you the part of the code that is probably what you wanna see when you're reading through something. So if you haven't checked out that talk, I would highly recommend that.

**Erik St. Martin:** That's interesting.

**Brian Ketelsen:** That is slick.

**Erik St. Martin:** What's the project called?

**Beyang Liu:** I don't know what the name of the project is, but I think it was at dotGo. If you just search 'dotGo alan shreve' I think the talk will come up.

**Brian Ketelsen:** That's awesome. Well, you can support Alan and his company Equinox by going to Equinox.io/gotime. Equinox is free for community and personal projects, and very inexpensive for companies to release their tool, so go check it out. We love them.

**Erik St. Martin:** I'm sure he'd be perfectly happy with bags of money too. \[laughter\]

**Brian Ketelsen:** Well, I have to pay for my ngrok subscription, because I love it so damn much. I use it every single day.

**Erik St. Martin:** Yeah, I'm constantly using ngrok.

**Brian Ketelsen:** So Alan's getting two sponsorships for the price of one today. \[laughter\] The double-double.

**Beyang Liu:** I'm curious to hear, in addition to things like ngrok and Equinox, what other tools do you guys rely on day to day, that you find really useful.

**Erik St. Martin:** Well, that's interesting. I mean, so many of them are probably abstracted away from me now with Vim Go, I don't run them myself. But a lot of the stuff that comes in gometalinter I use quite a bit, which I almost feel like I should turn off for a little bit, so that I visually catch these things now, and I don't just sit here and write code. I'm like, "Yeah, it will catch it."

**Brian Ketelsen:** My answer would be the same as Erik's, just because I use Vim Go and I have absolutely no idea about the seventeen binaries that are running in the background, managing my code for me. I love them all though, thank you.

**Beyang Liu:** Nice. That's awesome.

**Erik St. Martin:** At prior places we used some stuff like ffjson and SQL C. I'm trying to think about some of the other tools we used for some of that code generation.

**Beyang Liu:** Yeah, what parts of code do you guys auto-generate in your code base?

**Brian Ketelsen:** Generate all the things... All the things. \[laughter\]

**Erik St. Martin:** Yeah, so Brian's mostly been on a Goa kick lately, so generating all the API stuff from kind of a specification of the API.

**Beyang Liu:** Oh, nice.

**Brian Ketelsen:** \[32:01\] Yeah, I'm giving a talk at Abstractions.io - I'm in Pittsburgh whenever that is, August something - about generating all the things. I'm really excited about that. Because one of the fun things about Goa is that it's got this DSL engine in it that means that you can create your own DSL to parse whatever you want to parse, and then tick the meta data out of that and generate whatever you want to generate. So it's not just generating APIs. If you spend a few hours writing some code, you can generate Kubernetes configurations or Docker files, or whatever it is that you need to generate. That's kind of been my burning mission for 2016, to really just generate everything and have that DSL be the single source of truth for me.

I really like that a lot, because you're generating the code and it becomes very easy to make changes to your system, and the DSL is very self-documenting, so you understand what you're doing and why.

**Beyang Liu:** Yeah, that's awesome.

**Erik St. Martin:** I've seen some polls going out about dependency management tools and stuff like that that are favored. I'd be really interested to see what tools people use regularly for Go development. I'm willing to bet there are probably a lot of popular tools in there that I don't use and I should.

**Brian Ketelsen:** I'm sure there are.

**Beyang Liu:** Yeah, that's the thing. I feel like every other week there's some new tool that someone mentions and I'm like, "Oh wait, that would be really useful. Why am I not using that yet?"

**Erik St. Martin:** Florin in the GoTime channel just said 'Delve'. How did we forget about Delve?

**Brian Ketelsen:** Yeah, how could we possibly forget about the best debugger ever? Although I don't ever debug, so maybe that's why I forgot about it, because I don't ever debug. My code just works. \[laughter\]

**Beyang Liu:** Are you a printf man?

**Brian Ketelsen:** I think I used Delve about twice, and I found it to be impressive.

**Erik St. Martin:** Yeah, I'm not always a debugger person. It depends on how intricate the issue is that I'm trying to diagnose and how much I need to pay attention to the overall state of the application, stuff like that, versus whether this particular block of code is getting hit and what values within that scope are. So I guess a lot of times I'm probably a print person, but occasionally I do need to break out a debugger. How about you at Sourcegraph, what are you guys using over there that we might be interested in stealing from you?

**Beyang Liu:** Well, the thing I use the most is probably Sourcegraph itself, just for exploring code and finding user examples. Other than that, before I used the Go Emacs plugin, because I use Emacs as my editor. I've since switched to the Emacs Editor plugin that we shipped recently.

**Erik St. Martin:** You know, Brian and I are gonna try not to hold that against you.

**Beyang Liu:** Yeah. For like the day-to-day "I'm programming, I need to look up information", I mostly rely on Sourcegraph for that these days. For the metaprogramming stuff, we generate a lot of things. We wrote this tool called gen-mocks that automatically creates mock structs for testing purposes. So you have a struct that represents some sort of service that you wanna call, gen-mocks will generate a mock for that that lets you easily mock every endpoint of that service.

We use gRPC gateway to generate the API to the application that the UI and the editor plugins hit.

**Erik St. Martin:** Yeah, gRPC is another one I've used heavily. Gen-mocks looks interesting.

**Brian Ketelsen:** \[36:03\] I haven't seen that one.

**Beyang Liu:** What looks interesting?

**Erik St. Martin:** The gen-mocks that you were talking about.

**Beyang Liu:** Oh yeah, gen-mocks. It's a pretty small tool, pretty straightforward, check it out.

**Erik St. Martin:** It looks like it just kind of takes an interface and kind of generates mock structs for you, that implement that interface

**Beyang Liu:** Yeah. I wish Dmitri were here actually, because he could speak to a lot of the tools that we use and all the stuff we do to maintain good quality code as the application progresses.

**Erik St. Martin:** Can we get like the "Who wants to be a millionaire" phone friend? \[laughter\] Can we get that going?

**Brian Ketelsen:** We'll just have a show just for Dmitri. That would definitely be another interesting show.

**Beyang Liu:** Yeah.

**Brian Ketelsen:** We can talk about his gist code imports.

**Beyang Liu:** \[laughs\] Yeah.

**Erik St. Martin:** I forgot about that. So I guess we're probably getting shorter on time here. Do you guys wanna talk about any interesting news and projects?

**Brian Ketelsen:** I have a couple interesting things to talk about.

**Erik St. Martin:** I know which one you're gonna say.

**Brian Ketelsen:** Which one am I gonna say? Just tell me which one am I gonna say first.

**Erik St. Martin:** Twitch. It's gonna be Twitch.

**Brian Ketelsen:** Yeah, that blog post that Twitch put out a couple days ago - we'll put a link up on Twitter and in the show notes - about the garbage collector latency; that was just an amazing blog post. I love that. Really good post. I read it twice.

**Erik St. Martin:** And I think this speaks to Beyang's point, the tooling and just the way the community interacts, too. I love watching the journey here of kind of how they work together on continuously improving this. Did you see that post?

**Beyang Liu:** No, I haven't seen it yet. I'm definitely gonna check it out, though.

**Erik St. Martin:** Yeah, so it's basically Twitch walking through starting their release with 1.2 of Go, and their chat server implementation and the GC pauses, and the evolution of discovering what those latencies are and working with patches on their side and working in parallel with the Go Team and getting some of that stuff implemented and changed in the garbage collector.

It was insane. It went, in total, from like 10 milliseconds...

**Brian Ketelsen:** It was tenths of seconds down to one millisecond.

**Erik St. Martin:** Yeah, it was insane.

**Brian Ketelsen:** It was crazy in garbage collection pause times, and it's just an awesome story for Twitch and their engineering team, and a great story for Go too, to show just how much Go has improved over the years, too.

**Erik St. Martin:** Yeah, maybe the Go Team doesn't get as much love as they should for some of these things that happen behind the scenes, that most of us aren't even aware of. We see the end result, like "Oh yeah, garbage collection times went down", but we don't see the insane pain that some companies suffered, and engineers from their teams and Go kind of working together to collaborate and make it better for the rest of us.

**Beyang Liu:** I'm really looking forward to the Go Guru talk at GopherCon. I hope that it's like a follow-up blog post, and I'm looking forward to using it, too. That looks awesome. I think the Go Team again there is doing great work, pushing forward not just the state of Go tooling, but also... Like, what other language has just a tool that works out of the box and provides as much information about the code as the Go oracle does?

**Brian Ketelsen:** I agree. It's almost like they have parallel paths of performance and tooling. They're marching down two different directions of making Go as fast as it can possibly be, but then creating this amazing ecosystem of tools that really make our lives as developers better. We heart the Go Team.

**Erik St. Martin:** \[40:06\] There's some really interesting talks this year that I really wanna see, some deep dives. One of the ones that I find most interesting is the packet injection one. I think that one's gonna be a lot of fun, because it's totally different. They're doing packet capture and analysis with Go.

**Brian Ketelsen:** But you know, we're live streaming, Erik. You can watch it at home, if you go to Twitch.tv/Gophercon \[laughter\]

**Erik St. Martin:** I can watch it at home...? Can I hide at my hotel room to watch it?

**Brian Ketelsen:** Awesome. "Anybody seen Erik?" "Nope." \[laughter\]

**Erik St. Martin:** So the sad thing is we always have to wait until the videos come out. We don't really get to see the talks until afterwards, but we get something completely different out of it, so it's a lot of fun. What else do we have going on? I know there's been a couple of releases... Kubernetes 1.3 came out, which is awesome.

**Brian Ketelsen:** Yeah, big release.

**Erik St. Martin:** ...which kind of had some of the Ubernetes stuff in it, which is the kind of the cluster federation. They bumped up the max size too, it's like two thousand node clusters and fifty or sixty thousand containers.

**Brian Ketelsen:** Yeah, I saw a tweet a couple hours ago about sixty thousand pods. I don't know if that's correct, but it certainly seems like the addition of etcd 3.0 allowed them to scale quite a bit. I know that the etcd release was big, yeah many [`minikube`](https://minikube.sigs.k8s.io/docs) is really awesome.

**Erik St. Martin:** I think that they're mostly compatible now with the OCI and CNI stuff, or rocket. I haven't checked out the new dashboard, but I'm looking forward to that, too. But yeah, it seems like some cool stuff there. There was another project that hit 1.0.2...

**Brian Ketelsen:** Traefik. Traefik.io the load balancer.

**Erik St. Martin:** Yes!

2. That looks like a big release for them. And then Glide was released at 0.11 this week. It looked like they had a lot of very nice features added there. But I think mostly it was a pretty quiet week. I think everybody's holding all of their big releases for GopherCon next week, and I don't blame them, because it is the big event in the Go community, so we expect all the big news to come next week.

**Erik St. Martin:** I think mostly the past week has been all the BigQuery stuff, which I'm sure... You've been reading most of the posts with that, right Beyang?

**Beyang Liu:** Yeah, I've been following along.

**Erik St. Martin:** Yeah, so that's mainly the big thing. And you are ahead of the curve, because you guys have been doing code analysis on all the Go projects on GitHub for quite some time now.

**Beyang Liu:** Yeah.

**Erik St. Martin:** Do you guys do any metrics now? Are you building any statistics internally about commonly used packages and things like that?

**Beyang Liu:** Yeah, we have a lot of those statistics internally. We're still working on the product version of that. What sort of statistics would you guys like to see on Go projects?

**Erik St. Martin:** I think that should be fun, I think we should make a call out for people, too. Let's create a list of stats people would be interested in.

**Beyang Liu:** The things that we're thinking about are... Some basic statistics you can already get from the site are how many times is this function called in the Go universe? How many other repositories reference it? How many times do they call it for each repository? Who are the authors that use this function in some way or another? There's a lot more statistics we could actually show the user, it's just a question of what's the most important thing... What are the most important pieces of information to show a user when they're trying to navigate a library or figure out how to use something, or determine whether this library is the best one to use for the job at hand.

**Brian Ketelsen:** I would love to see how many external dependencies there are. Does this library have 47 other dependencies?

**Beyang Liu:** Like how many things depend on it, or how many things it depends on?

**Brian Ketelsen:** \[44:03\] How many things it depends on. Is there a left pad coming up in my future?

**Beyang Liu:** \[laughs\] Yeah, totally.

**Erik St. Martin:** I guess I would be really interested to see the effects of importing a project. If I'm gonna import this package for something I need it for, how many packages and maybe how many lines of code in general am I importing just to get whatever that function is that I want, and maybe I use that as the determination of whether or not I should just make a copy of this one function or whether I should import the project itself. I think stuff like that might be valuable. And we should put a call out though too, to anybody who has interesting ideas. Should they shout at you at your Twitter account, should they email you? File tickets?

**Beyang Liu:** You can either tweet at Sourcegraph, @srcgraph, or just email hi@sourcegraph.com

**Brian Ketelsen:** Nice.

**Erik St. Martin:** I always like those hi@ email addresses.

**Brian Ketelsen:** They're very friendly.

**Erik St. Martin:** We need a hi@gophercon or a hi@gopheracademy. Well, I guess we can't say hi at Gophercon, because now it has a different meaning, with all the new rules...

**Brian Ketelsen:** Especially in Colorado, yeah. Very different.

**Erik St. Martin:** It might be taken incorrectly. So what else do we have going on?

**Brian Ketelsen:** Well, I think it's time for \#FreeSoftwareFriday.

**Erik St. Martin:** Oh yeah, how can we forget our \#FreeSoftwareFriday?

**Brian Ketelsen:** We can't, it's in my blood.

**Erik St. Martin:** Do you know about \#FreeSoftwareFriday, Beyang?

**Beyang Liu:** No, enlighten me.

**Erik St. Martin:** So Brian started a couple months ago now this whole thing to do hashtags on Twitter for a \#FreeSoftwareFriday, so basically show love to open source projects or maintainers that are making our lives easier. Because I think we often forget to say anything to project maintainers until we're unhappy, so as part of the show we've tried to incorporate that so that we're encouraging other people to do so. So before we kind of finish out the show, we like to go around the panel and thank some project that is in some way making our lives easier, or has made our lives easier.

**Beyang Liu:** Cool.

**Erik St. Martin:** So you can feel free to do one yourself, or not, because we're kind of blindsiding you with it. Brian and I both have one for today.

**Brian Ketelsen:** Yeah, I'll kick it off with GoKit. You know, we've got this API training class on Sunday before GopherCon, and one of the last topics we hit is code generation, and I remembered as I was writing the slides for it that I wrote a code generator for GoKit last year... Probably this time last summer, a year ago. So I've dusted it off, cloned it from GitHub, pulled it down locally and I ran it. It generates a GoKit service based on using JSON in coding for a GoKit API service. I was blown away, because the code generator that I haven't touched in a year was generating code that compiled against today's GoKit, and that's API stability that you cannot buy anywhere else. I was really, really impressed. How many other projects have you seen where you can not touch something for a year and it compiles against the current version of that project. I was impressed, so shout out to GoKit and their team, and Peter, for API stability. Rock and roll!

**Erik St. Martin:** That's awesome. For me this week... I was struggling to think of something big, and it's always the little tools we miss, so I'm going back to the basics here. The Silver Searcher - I've been using this for a few years now, instead of ack and grep when I'm just trying to search around directories. The output's a lot cleaner, and the speed that you can grep through a directory is just insane.

\[47:58\] One of the coolest things I love about it is it also adheres to your htignore and gitignore files. So when you're searching for something inside of your source repo, it will ignore searching through files that are already in your ignore list, and then it has its own .agignore that you can use at a global level, to tell it to ignore files with extensions or in certain paths, and all that stuff. So if you're still using ack and grep, I highly suggest trying out the Silver Searcher.

**Beyang Liu:** Nice.

**Brian Ketelsen:** Nice, there's a good Vim plugin for that, isn't there?

**Erik St. Martin:** Yes. And it took one less key, because it's ag to search, using Silver Searcher. And yeah, there's a plugin for Vim, so that you can do a ;ag and use it within your...

**Brian Ketelsen:** Not that Beyang would need that, because he uses that other thing.

**Erik St. Martin:** I know. I need to use Sourcegraph more.

**Beyang Liu:** Yeah. Check it out, send us feedback, tell us how we can make it better. Yeah, I think the project I wanna call out this week is actually a project that's not released yet publicly, but it's something that we've been using internally. It's something that's written by Matt Holt, who is the author of the popular Caddy HTTP server. He wrote this library called Checkup. It's essentially this uptime monitor. It's kind of like all these services that do uptime monitoring already, but what it does is it has a really nice configuration format for just quickly specifying a bunch of URLs that you can hit. One frustrating thing for me with a lot of uptime monitors is that the UI is just so clunky and you have to go and manually update it and then something changes; you gotta go navigate through the UI and update that again. It would be nice to just describe all the key endpoints that you wanna hit just in code, so those can change as the code changes, and then you can deploy this thing to any server, any AWS or GCP node and it just kind of works; it gives you pretty graphs for how uptime is going and it's super easy to use, it feels very native to the Go ecosystem - no nonsense, no cruft, just write out a list of things that you wanna monitor uptime for and you're good to go. So shout out to him, he's done so much great work for the community.

**Brian Ketelsen:** Absolutely.

**Beyang Liu:** I was actually googling around for it, I couldn't find any public mention of it, but we've been using it internally.

**Erik St. Martin:** So if we get all two of our listeners and us to beat at Matt, maybe we can get it released.

**Beyang Liu:** Yeah, tweet at him. Tweet, I say! \[laughter\]

**Brian Ketelsen:** Go on, Matt!

**Erik St. Martin:** I don't even know how many people are listening live right now. Maybe Matt's listening right now.

**Brian Ketelsen:** \[51:08\] All six of them are listening.

**Erik St. Martin:** I think we're probably out of time... We're a few minutes over, but this has been a lot of fun and I wanna thank everybody who's on the show. I wanna thank all the listeners, I wanna thank our sponsors, Equinox (equinox.io/gotime) definitely hit them up, share the show with other programmers... If you haven't subscribed already, you can go to GoTime.fm and subscribe to our upcoming weekly email newsletter, follow us on Twitter, and we are GoTimeFm on the Gophers Slack channel as well. I think with that said, goodbye everybody, and we are out next week because of GopherCon. All these conferences get in the way of podcasts.

**Brian Ketelsen:** \*sigh\* But don't forget - if you're listening live, don't forget that we're live streaming GopherCon. Twitch.tv/gophercon. Did I mention that already?

**Erik St. Martin:** Good morning, sunshine... You did.

**Brian Ketelsen:** Okay, good.

**Erik St. Martin:** Yeah, catch us there and if you are at GopherCon, come visit us. We will have T-shirts... And I think that's it. Thank you for being on the show too, Beyang, it's been a lot of fun.

**Beyang Liu:** Thank you so much for having me, this has been awesome.

**Brian Ketelsen:** That's a wrap.
