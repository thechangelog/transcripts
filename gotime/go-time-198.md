**Kris Brandow:** Welcome to Go Time! On this week's episode we are going to be talking about an important, but little well-known team called the Go Tools team. Today I am joined by a whole host of guests... We'll start with Daniel. Daniel contributes to Go in his spare time, maintains a few tools, such as the gofmt fork and Go Code Obfuscator, and runs a local meetup in Sheffield. How are you doing today, Dan?

**Daniel Martí:** Good. Happy to be here.

**Kris Brandow:** Awesome. We're also joined today by Paul Jolly. Paul is a core contributor on the Cue project and helped start the Golang Tools Working Group. How are you today, Paul?

**Paul Jolly:** Very good, thanks Kris. Pleased to be here.

**Kris Brandow:** Awesome. And joining us for the first time, we also have Ian Cottrell. He's the manager of the Open Source Go Tools team at Google. How are you today, Ian?

**Ian Cottrell:** Good, yup.

**Kris Brandow:** And finally, we have Marwan, who I think is also joining us for the first time here on Go Time. Marwan is a Go developer at GitHub. He is a core maintainer of the Athens project, and is an occasional contributor to Gopls and Go VS Code plugin. How are you today, Marwan?

**Marwan Sulaiman:** Good. The "occasional" is important, because I don't do it a lot.

**Kris Brandow:** \[00:04:07.15\] \[laughs\] Alright. So with those introductions out of the way, let's talk about the Go Tools team. Let's start off with some setting the scene, some history here... I think this is probably directed toward you, Dan and Paul... What was the impetus for starting this Go Tools group that we have?

**Paul Jolly:** I think we probably need to bring Ian in as well... Ian, am I write? We sort of exchanged a few messages just before GopherCon 2018, about the need for creating some sort of tooling around modules, as it was evolving at that point.

**Ian Cottrell:** Yeah... This was really us trying to get all the people working on any kind of editor support for Go together, to talk about what we should be doing better... Because I felt that -- you know, when Go was first launched, it had amazing support for tools, and then it just hadn't really kept up. I felt like we were dropping the ball, and that we needed to do something to get it moving again, and become a leader rather than a follower once more.

**Paul Jolly:** So this is 2018, Kris, the GopherCon we're referring to here... And it was just as Modules was starting to be experimented with a bit... And I think Ian's point there about how tooling could and should evolve was spurred particularly by that experiment as it was being played out at the time... But I think there was a lot of pent up interest in this sort of conversation, in any case. I think a number of Googlers were keen on having such a -- it's actually called the Go Tools Working Group, I think is its official title. But it didn't have that official title at the time, and it started with an ad-hoc roundtable discussion at GopherCon 2018, with some very poultry snacks and drinks, I seem to remember... It was a very cold conference room. But it was good... We had two sessions there, and there was about 12 people on the first day, and around 20-odd on the second... All the notes are linked from the wiki, which we can send a link to Kris afterwards.

And as Ian said, I think we brainstormed a list of the tools that people were interested in. Generally, the workflow was that people were interested because they used this tool via the editor plugin, and at the time - this is pre gopls, of course. So there were lots of ad hoc tools that were sort of muddled together in some ways by lots of ad-hoc editor plugins. So there was very little uniformity. And I think, again, that was one of the overriding goals or visions that people had, is that "You know what - we can do better in this space", as Ian said.

**Daniel Martí:** I also think another bit of context that might be useful for the listeners is that up until that point, a lot of the tools just worked, and then when Modules came along, quite a significant amount of them had to be updated to work with Modules... And that also included updating the libraries to support those features. So suddenly, there was a need for many of us to start talking and figuring things out together.

**Paul Jolly:** Marwan, you were definitely there at those first sessions...

**Marwan Sulaiman:** Yeah, I remember that GopherCon. I think I made it to the second session. I haven't looked back since. \[laughter\]

**Paul Jolly:** And that's worth saying, actually. Marwan is up there as well... Bryan Mills, who works on Command Go on the Go team - I think he's been to every single session bar one since then... And we have monthly calls. So that's a pretty good attendance record, I think. Bryan puts everybody else to shame, to be honest with you.

**Daniel Martí:** And I think we've even had \[unintelligible 00:07:38.01\] join from a car, and a train, and all sorts of places.

**Kris Brandow:** Alright. So with that kind of background explained and settled, is there a charter or a mandate for this group, or is this still just kind of like "We get together, we talk about tooling, and that's kind of it"?

**Paul Jolly:** \[00:07:58.19\] Yeah, the wiki that I referenced earlier on has got a -- "mandate" is a very strong word, I think, and it sort of has connotations of power and clout... And the Tools Working Group has never really existed in that format; it's been people who are interested and motivated to talk about tooling and improving it, getting together and working out how best to solve some of the technical problems, and also solve some of the problems around how to build consensus on the direction that certain things should take, whether it be modules or anything else, for that matter. We can talk about a few more examples later on.

So mandate is probably a little strong, but at the same time, charter is probably a little strong as well... But at the top of the wiki, to paraphrase it, is a group of people whose focus and interest is the development of tools for the Go language... And it stresses it's open to everybody. Tooling topics include, but are not limited to code analysis, compilers, editor and IDE, plugins, language servers and standard libraries. So it's really, really broad. And quite honestly, we're never limited to that, and if anybody brings up a topic that they want to discuss, we're super-open to that. And often, the group just ends up being a conduit for introducing people or bringing people onto the session in order to have the right conversation. So there's lots of things, whether it just be getting feedback on ideas...

The Tools Working Group has been used as a group of trusted testers in the past, for whether it be Google or Go related projects, or others, for that matter... Just things like proofreading of proposals, blog posts, talking through design ideas... It's a very, very open agenda, and open to absolutely anybody. There's absolutely no registration or anything required. You just turn up to the call and join in.

**Daniel Martí:** Yeah. And to add to what Paul just said, I would say that the concept of tools is a bit fuzzy, because for example an editor tool, if I write something that just happens to use Go and some of the libraries that we talked about - is that still a tool, even if it doesn't work with Go code? We usually have sections about "What are you working on that's cool? What would you like to see happen?" And that's more like open mic kind of thing, and people can bring up any topic they feel is related or important enough to bring up.

**Ian Cottrell:** Yeah. From my perspective, I kind of think of -- anything a developer working in Go code would interact with counts. It doesn't matter what it is. Something that's specific to Go, and the developer would be touching it - that's a tool. \[unintelligible 00:10:18.20\] the discovery site clearly falls into that as far as we're concerned, and a lot of discussion of that has happened in that group.

**Marwan Sulaiman:** I think it's the way it started, too... I remember at GopherCon - I think the very first thing was the Go team was demo-ing, or even giving beta access to the early version of package site was there... So in a way, it was the first big thing that the group was talking about.

**Kris Brandow:** Alright, I think that's a pretty good segue to the next question I had, which is what has this group worked on? I think the obvious things that are out there, like Gopls and the editor integrations... But are there other tools -- you just said package discovery site, but are there other tools that the group has worked on, that has helped shepherd them into the Go community and help with their development?

**Marwan Sulaiman:** I'd say the go command. So a lot of the discussion is literally the Go command itself. People don't really think about the Go command being a tool, because it does so many things, right? But in itself it is a program, and a lot of what it does, the way it interacts with modules, the way other tools talk to the program... For example, the way Go Proxy could use the Go program to download a module or list available versions is potentially a surprising fact, because that is a tool that needs to be used by other programs, so it's not just like go build and go run, manually run by humans. That actually gets discussed quite a bit there, too. Sure, others might have even more obscure examples.

**Ian Cottrell:** Speaking of the go command, almost any tool that looks at Go code ends up having to invoke go list somewhere inside it at the moment. It's often hidden by a library, but it's almost always there, so it does come up a lot. Because we also -- we discuss changes that tools might need, as well as tools themselves a lot.

**Paul Jolly:** \[00:12:08.24\] I think it's also worth addressing -- I'll come back to Gopls in a second, but all of this list of tools that we're talking about now are sort of in some way official or semi-official as part of the Go project... But the discussion in the Tools Working Group is certainly not limited to that. So if people want to bring tools that they have written, whether it be in experimental form, or a tool that is official as far as their company is concerned, and bring that in to the discussion as some sort of experience report, or design ideas, or just kicking ideas around - very open to that sort of thing. And I think that's been a large part of the, if you like, the methodology of the working group, as well as very much driven by experience reports, experimentation in tools, trying out ideas, and just actually writing some code, getting some people to use it.

And I think probably -- back to Marwan's example of the go command, the go.work discussion about workspaces is a very good one, where there's been a lot of design discussion that has happened online and offline as part of the tools working group. That is part of the go command, but there's a lot of experimentation been happening there, and that's trying to get experience reports from people - how does this work, how does it not work? Making sure that it flows through Gopls, making sure that workflow is consistent and solves actual problems that people are experiencing as far as workspaces in that particular example...

But I think, Ian, Gopls is perhaps a particularly good example, from your perspective, isn't it?

**Ian Cottrell:** It is. I think to a large extent Gopls wouldn't exist without the Working Group. A lot of the justification for it came from the conversations that we had in that group. It would have been very hard to justify the time and effort that we've poured into it without the evidence that it would actually be that useful and that the community as a whole believe in it.

But I also think the workspace example is very interesting, because when I was originally thinking about the workflows around the problems that workspaces is supposed to solve, I was assuming it could all be in a completely separate tool; that this wasn't a go command thing. And it was only the conversations in that group and the other attempts to solve similar things, like the Gohack program that proved to me that actually we had to change the go command in order to have a successful workspaces. So I think it's a very interesting demonstration of the kind of influence that group has.

**Daniel Martí:** And I also think that's a good example in terms of experimentation, because initially, many of us thought "Oh, we're just gonna fix this outside of the go command", and that's where Roger's Gohack came out. But after some time, with experimentation, we realized that had some major drawbacks, such as having to pick one main module to work from, having to undo the replace directives later, and so on... So I think it's really good that it's a space where you can bring up ideas, implement them, see what others think, and you don' t have to go through a formal proposal process that may take months or weeks, and then sort of have an official stamp of approval on any of your ideas.

**Paul Jolly:** Another particularly good one from my mind is the -- I forget which issue number it is, but it's where now you can run go install package at version as a way to sort of officially now installing in a global way, outside of a module context, a command. And that is something that took a surprising amount of time to actually reach consensus on. And I don't think we're sort of even there as part of that discussion. Everybody's smiling because they know this is something we've been discussing since pretty much day one as far as modules is concerned.

I think that's also a very good example because there was a lot of disagreement on how best to go about that, what things to be solving for as part of it... Replace directives sort of loomed large for a long time; should we respect replace directives, should we not? What impact is that gonna have? And I think it was a very healthy discussion, good amounts of constructive descent in that proposal...

\[00:16:13.02\] And the design itself - there were many iterations; there was at least one tool that was external from this, that was created in order to try and experiment with what is the right UI and UX around this. Lots of people are saying "If we do it this way, it's not gonna solve this problem here, or we won't take that into consideration." I think it's probably been a year and a half, two years, maybe even more than that, that it took us to get to where we are now on that... And we're to such a point where there's certain things that are still not finalized, but it's designed in such a way that we leave the door open to it... And a specific one there is whether we do actually respect replace directives. We might do that in the future for replace directives that have a module target, as opposed to a directory target. And that's a very specific detail, but it kind of talks to the length of time and consideration that went into this design and proposal, where we had opinions from not only within the Go team, but a significant number of opinions from outside as well... And a lot of discussion, taking time to go through it, before finally -- I can't remember when it finally landed, but maybe it was (I wanna say) 1.16, I think. Daniel's nodding, yeah.

So yeah, it's been a very good forum for discussing in sort of a live way, human-to-human, somewhat more thorny issues where the nuance can't get lost on things like a GitHub issue discussion... Or even over Slack, which is much more immediate. If you can see somebody when you're trying to get your point across, that has a much more positive effect on the communication. I can see somebody's frowning, or waving their hands frantically as if to say "No, no, no. Stop there. Don't talk anymore."

I don't know, I just find voicing -- "dissent" sounds like a very negative word, but it's a very positive thing in the context of a working group. I just find voicing that on a call much easier than thinking about rewording it 50 times in a GitHub issue, or something like that. I find it much easier to bring up. In that respect, anybody is welcome to bring anything, for any issue that they have, to the table. That's worked very well over the three years now.

**Ian Cottrell:** I think the experimentation point is a really important one too, particularly on things that the Go team ship. It's very hard to experiment, because as soon as it's in, you can't take it out again. And we really believe in experimentation. Russ did a large post about this... But it's very hard to do with a lot of the things that we ship. And the tools forum allows us to do experiments that have enough reach that we actually get a useful signal back from them as well. There's no point doing an experiment that nobody tries, because it tells you nothing. So having that group of interested, opinionated experts there to try something out and allow you to fail fast and back away from it is really key.

**Kris Brandow:** Speaking of these meetings that happen - let's talk a little bit about them. How often are these Go Tools Working Group meetings? What do you usually discuss? Is there a set agenda, or is it more open, or is it just kind of a discussion space?

**Daniel Martí:** We target about once per month, but in reality it's more like about once every five weeks or so, or six... And the agenda is roughly -- there's usually three main areas that we talk about. There's command go itself, because it's at the center of a lot of things; there's Gopls, and then there's package site, because those are (outside of command Go itself) the largest tools out there in terms of users and development.

And then we've got a couple of other miscellaneous parts of the agenda, such as the one I mentioned earlier about what are people working on, or do people have any other topics that they would like to bring up that don't fall into any of these categories?

**Marwan Sulaiman:** I think what we do is on every rotation anybody could host the meeting, which is basically kind of just run through the issues and the agenda, and it's sort of a nice rotational participatory thing.

**Daniel Martí:** \[00:20:09.23\] We usually have about 20-30 total agenda items per call... So you have to think that we may have about 3-4 minutes per item. If one item is really big or really controversial, maybe it's gonna be like eight minutes... But you have to think that this is not a call where we dive deep into topics. This is a call where we synchronize and we get a common understanding, and maybe somebody hasn't been up to speed for some time, and then they quickly get an idea; they might have some quick thoughts. But any deeper thoughts tend to go in places like GitHub, where people actually have the time to write things down.

**Paul Jolly:** Yeah. The only point I was gonna say is it's a super-open agenda. Typically, what happens is if somebody wants to bring something up, there's a large group who exist in the tools channel on Slack; there's generally a bit of conversation - not necessarily though - in the Slack channel first, where people get a sense for "Is this something that would be worth talking about? What are people's opinions on it?" And then invariably, it ends with somebody saying "Can we add this to the agenda for the next call?" It just gets put on there, and as Marwan was saying, whoever is then running the call is just sort of responsible, particularly if it's someone who's a newcomer to the group as well, really making sure that everybody feels welcome.

So rather than putting things at the bottom where someone may just happen to have mentioned it last, perhaps something that a newcomer is sort of elevated somewhat in order that that person isn't just kept waiting right until the end of the call. We try and mix things around a bit in order that there's a bit of variety in the call as well. I was about to call it a show... Sometimes it's a show, but it's a call, officially.

**Break:** \[00:21:48.22\]

**Kris Brandow:** Alright, are there any big projects that's currently being worked on by the Tools Working Group? I know we mentioned the multi-module workspaces, so if we maybe wanna dive into that a little bit more, or other cool, interesting things that might be good for our listeners to hear about?

**Ian Cottrell:** I guess another one of the large topics of conversation has been generics. It keeps coming up, because that's obviously gonna have a huge impact on tools, so the Tools Group cares a lot... You know, having to change the core parsing libraries and type-checking libraries, and the APIs need updating, and the tools need to know about that.

**Daniel Martí:** Something we also need to worry about with generics, for example - and this maybe gives an example of the trickier topics we talk about - is how do you enable the new feature without suddenly breaking any existing tools? Because for example if you go into the AST package which holds the types for the syntax nodes for a Go program, and you change the meaning of a syntax node, of a struct type, for example, then an existing tool might continue using that and do something that's wrong, but nobody might notice for weeks or months, and the tool might be doing something completely wrong. So you have to think about how do you add the new feature, make it easy to use, but not suddenly change the behavior of existing code.

**Paul Jolly:** \[00:24:08.10\] I don't know if we would necessarily classify them as new things, but I would say Gopls, package site, command go - they remain, as Daniel said, constant themes throughout... So whatever is happening in those spaces, and all the supporting packages that go with writing tools in Cue -- in Go, excuse me. I managed to slip Cue in there, but unintentionally... Whilst all the work is done, and it's definitely worth recognizing at this point... Rebecca Stambler and team who have worked on Gopls - we might talk about it quite a lot within the working group, but all the work there has been done by Rebecca and team, including the open source contributors as well... And Julie as far as package site is concerned.

They just remain constant themes... So I would still class them as big things, because - let's take \[unintelligible 00:24:55.23\] for example. Yes, that sort of feels like it's somewhat restricted to command go, but guess what - it then immediately involves Gopls as well. Generics has impacts across the board, and you can include package site in that as well. I think that sort of now speaks to how connected and related all these things are; they're always kind of big things, and what the group has, I think, done well is understand how these things are connected, and better understood that over time... And it's always about trying to refine that, of course. Bring the right people into the conversation, understand what their concerns might be with something... I just think a lot of the work that's been done by package site has been fantastic, for example... And the way that there's now a beta site as part of that, where we get sort of early preview things via package site - it's a really great experience.

So in the small way that the working group has been part of that - it's been fun being part of it, but I personally think the result that's come out the other side is great, and adds a massive amount to every Go developer's workflow in a very positive way.

**Kris Brandow:** For the listeners who might not be aware, what is the package site that we've been referencing?

**Paul Jolly:** Sorry, package site is pkg.go.dev. It's now probably more correctly referred to as the discovery site... Is that right, Ian?

**Ian Cottrell:** Yeah.

**Paul Jolly:** So that's a way of discovering Go packages and Go modules, whether that just be by the name of the package or the module, or the description; the capability for more deep search for a package or module that might be useful to you is improving with time... And it replaces GoDoc.org, which again, is one of those tools which needed to be updated in some way for module support... And package site, as it is sometimes referred to, is then what came as the replacement for that... Although, Marwan, I think you also had a project that you worked on, as well. I forget the name of it; apologies for that.

**Marwan Sulaiman:** Is it the one for upgrading the module import paths?

**Paul Jolly:** No, I feel there was a documentation site as well. I may just be --

**Marwan Sulaiman:** Oh, that was way early on, before package site.

**Paul Jolly:** Yeah, but that was one of the cool things - people just turned up to meetings and said "Oh, hey, I just hacked this together over the weekend. It was a nice way of experimenting with this", and Marwan turned up for the call... I forget the name of it, Marwan...

**Marwan Sulaiman:** I think it was called \[unintelligible 00:27:20.23\] Just try to describe it in like three to six letters is usually how I go about naming... Basically, at the time, Go Modules was still so early that not a lot of the tools were updating themselves to be compatible with it... And at that time, the company I was working for - there was definitely a bit of a lack of observability or access to shared modules, so it was difficult for people to go see symbols, and documentation... So I built a little thing that basically just does what package site does today, on a much, much lower scale, with a very minimal UI... And it definitely helped, at least me, steer the conversation about what I would love to see on package site... For example, like, viewing multiple versions, or viewing whether, like, "Oh, this version has a major version, and you're viewing an older major version", and stuff like that.

**Paul Jolly:** \[00:28:16.01\] That's another really good example of experimentation there, and just showing people -- like a show and tell type thing that does happen quite a lot at the time... But also how that Marwan sort of motivated as well a couple of proposals - well, at least a couple - in terms of deprecation of module versions as well, how they should be viewed; retraction, all that kind of space is then obviously very linked to the presentation of these things and how they're then discovered. So yeah, that's just more of a story of how all these things end up tying together, I think.

**Kris Brandow:** Alright. I know we've talked a bit around the edges around what the process looks like for getting something developed as a tool, or -- I think there's this general knowledge around, you know, there's proposals, and then those get kind of accepted, and then we have things... Can we talk a little bit about how the Tooling Group is involved in that? We've mentioned that people come up with ideas, and they eventually get turned into proposals... Is there an official way that people can bring things up, or is it still just kind of open-ended? Is it just like, you know, we talk in the Tools Slack channel, and then we kind of bring it to the group, and then we kind of put together a proposal later? Or is it just kind of ad-hoc per proposal? Is there any specific way that if someone did wanna create a new tool, that they would go about working with this group, and then working with the Go team?

**Ian Cottrell:** I think one thing is if you're making a new tool, you don't need a proposal, at all... Unless you want the Go team to ship it, it doesn't go through the proposal process. And even if you do want the Go team to ship it, changes to Gopls don't necessarily involve a proposal process. A lot of the things we discuss don't end up anywhere near that kind of complicated process at all... And it's not unusual for people to turn up to one of the meetings with a new tool they've written and just say "Hey, I wrote this tool. Does everyone think it's cool?"

I guess what's more interesting is when you come with a tool that's so good that we think it should be integrated into the main systems available to every developer, then it gets more interesting. But even so, I think it's always a per-case basis. I don't think we have real formal procedures around this.

**Daniel Martí:** Maybe another example is when you have questions that are more like ideas, rough ideas, but you're not sure what the answer is, or if you're in the right direction... And here's an example. I wrote a code obfuscator that uses a go build flag called toolexec. And toolexec essentially allows you to man-in-the-middle the compiler and the linker, so you can run arbitrary code before and after they run. So you can essentially do loads of things with that, and I decided to write a code obfuscator. But I was sort of stretching the edges and the purpose of that flag, and sometimes I would run into bugs or into limitations, and I would come into the Tools call and I would be like "Hey, I ran into this problem. Is this something that you guys knew about, or is it reasonable to file a bug and fix it? Or if I want to extend it this way, if I file a small proposal, is it maybe a good idea?" And it's a good way to get a quick feeling about other people's stance on this.

And also, sometimes when you bring up a very rough idea, somebody else will jump out and say "Hey, I would also like to see this. I will help you draft a proposal." And that I think is how the new go install command came about... Because I think it was me - but it was a while ago - who said "My readmes are full of go get commands that never do what you want them to do", and I said "I would like to work on something better." And Paul had done go bin before, and I believe it was Jay who said "Yes, I would also like to see this. Let's do a proposal draft together." And I think that went through a couple of iterations in the Tools call for a couple of months, and then it got filed officially.

**Ian Cottrell:** The other thing that happens of course is you turn up for meetings and say "Hey, I've had this idea for something I really want to implement", and somebody else will say "Yeah, Roger's already got a package that does that." \[laughter\]

**Marwan Sulaiman:** \[00:32:03.15\] Roger is the silent (what would you call it) killer of ideas. He's always thought of that idea you think is new.

**Kris Brandow:** Alright. So Ian, we mentioned in your intro that you are the manager of the open source Go Tools Team at Google... So what is the interaction between this Go Tools Working Group and the team that you manage?

**Ian Cottrell:** I mean, a significant fraction of the team turn up to the working group most times. It's not a large team. We don't have lots of people. But yeah, it's one of the main ways in which they get useful input... Because we've found that as the Go community as a whole has grown, the channels that we used to use to talk to people are now so busy that they're just not a useful or consumable signal.

When you only have a few people and you have two million users, it's very hard to hear all their voices. So one important thing that the Tools Group does is it acts as a focused expert voice that we can truly listen to and hear everything they have to say.

**Marwan Sulaiman:** Yeah, that's one of the things I like - or at least I try to do - when coming into the working group, to a meeting of the working group; I try not to just bring my voice, but the voice of all my colleagues, because I know a) they might not be as passionate about Go as I am to the point that they join in meetings during the day just to chat about tools and proposals, but b) they might not even be Go developers to begin with; it just happens to be part of their job. So their level of expertise of how to make Go work best for them - they haven't had the time or that's just not the thing that they do.

So basically, whenever I bring an experience report, like Ian said, I try to also not bring it from a level of what I'm trying to do, but at least the group that I know, that won't have time, or don't even know where to open issues or discuss these things. So it kind of acts as a buffer, because yeah, these Slack channels have gotten absolutely crazy, because as Go itself grows, you have more and more people asking.

And I have to say, it is impressive - every now and then... I've muted these channels long ago, but every time I go back and look at them, I still see a lot of the Go team still answering all the questions, and I'm just completely perplexed of how they could actually still do that.

**Paul Jolly:** I think as well over the three years it sort of feels like the group has gotten a whole lot better at working out how to communicate effectively, whether it be discussing ideas, or talking through thorny technical issues, or working out where to get the right feedback from people. That has become quite a fluent process now... And it also feels like over that time as well we started to get -- well, there's certain people who are stalwarts, if you like, of the tools channel on Slack. They may not make it onto the calls, but they contribute in a way as well. So it's not just the call itself, I think this is worth stressing.

The Tools Working Group is just a channel through which feedback is gathered, but it has honed the feedback loop, as Ian was saying, with those people who are really interested in it. It can be speaking for, as Marwan said, lots of other Go developers within their company, or a big open source project, whatever it might be. It has just become an effective communication channel in that respect, but by no means the only one... Because there are lots of very active people who -- as Marwan was saying, it's not only the Go team who are responding to questions in the Tools channel and sort of related ones... I can think of 3-4 people who are just responding to absolutely everything... And they don't actually participate in the Tools Working Group at all, but they are incredibly good, strong voices in terms of understanding the space itself, but thinking about things, sharing their feedback on things... So yes, it's not just the call itself; I think that the combination of all these different channels is what actually has been working quite well.

**Marwan Sulaiman:** \[00:36:06.03\] I could be wrong, but I think there is also a mailing list for the Go Tooling Group, because every now and then I do see an email... So that's another option if you don't like to participate in video calls; you could actually send an email.

**Daniel Martí:** Yeah, you can think of that list as the Golang \[unintelligible 00:36:18.15\] but only for tools... But on the upside, there's not many of us, so... A smaller amount of content, but I would say maybe more focused.

**Kris Brandow:** Alright. I think somebody -- I think it might have been you, Paul, that mentioned the genesis of this group had a lot to do with modules, and modules breaking a lot of the tooling that exists, and kind of needing a way for people to communicate about tools, and about how can we adopt this new package management system that's kind of coming at us. So if you want, maybe we can walk through a little bit of the history of how -- because I've definitely seen an improvement over the past few years of Modules, and I think a lot of that has come from the Go Tools Working Group, and everybody talking with each other. Because remember, in the beginning it was a little rough to work with modules; everybody's used to GOPATH... I don't know if anybody wants to give maybe a little more history about what were some of those conversations that happened that brought us to where we are now, where working with Modules is actually a pleasant experience, for the most part... Like, most of the things work; people aren't tripping over things all of the time... Yeah, I'd be interested if anybody has some history or context around that.

**Daniel Martí:** I think maybe a good starting point is what most tools used as a library for their entry point... Because back in the day there was this library called Goloader, which back in its day was the best thing ever, after the thing that came before... But Goloader - all it did was you gave it a bunch of packages, and then it would load them directly from GOPATH. It wouldn't use the command go tool at all. So it essentially hardcoded the behavior of GOPATH. And all of those tools, when Modules came along, they simply did not work with Modules.

Then, when the discussion started about "Okay, what does the next Goloader look like?", it ended up being Go Packages. But the design was quite difficult, because many of the tools had also built some hardcoded notions about how GOPATH worked. For example, they might assume that the code is already on disk and doesn't need to be downloaded, or they might assume that all the code is in the GOPATH directory tree structure.

I remember initially there were some discussions about "Yeah, let's make a high-level definition of what a package is and how to load it, and then maybe we could support both GOPATH on Modules, and maybe other build systems." But then let's look at the tools that need more than that, and see how we can support them without essentially getting stuck in supporting all possible edge cases.

**Marwan Sulaiman:** Yeah. I think of the beginning of the Tooling Group, at least from my side, as the beginning of Go Packages. There was a lot more discussion about Go Packages early on at the time... Like Daniel said, with Modules, it was like the beginning of the death of GOPATH. And so Go Packages was kind of the way to fix all of that. And in that transition - and I think still today - Go Packages is a way that abstracts whether you're using GOPATH or not. So if you wanna load a program using Go Packages, you don't have to assert if it's Modules or not. So it made it a lot easier for tools to use them.

And also, it definitely deserves a lot more credit than whatever it gets today, because it is kind of like the bedrock of all the tools that are being used today. Gopls uses it, I think package site uses it... Basically, anything you do that has to do with tooling, if you just dig through the layers, you'll end probably somewhere with Go Packages.

**Daniel Martí:** And I also think it's worth bringing up that Go Packages is designed quite differently from Goloader in previous iterations of this API... Which is that it calls the go command, it calls the go list command that Ian mentioned earlier... Because go list is essentially a build system; you tell it "go list this package and give me the compiled version", and then it's actually gonna load it from disk, build it, download whatever it needs to download, like dependencies and so on...

\[00:40:05.17\] And the really cool thing about that is that if you update your Go version, then supposedly, as long as the go list command line interface is the same, things should still work... Whereas back in the day with Goloader you had to make sure your libraries were up to date when you rebuild your tools, otherwise they might they might not understand new features of GOPATH.

So those kind of low-level early, but also long-term design decisions are what I think really benefitted from the Go Tools Group. Because for example, I was initially against calling the go list command, because I said it's too much overhead... But after talking to others, I realized "Wait, there's some important trade-offs at play here", and there's some really big advantages that we gained by doing this in the long-term.

**Paul Jolly:** I think as well there's for me a large aspect of "Yes, there was Modules", and as Daniel and Marwan had said, it was adapting required there from tools in order to make things work with Modules... But actually, at the same time, simultaneously we had this -- Gopls came about as well... And I think the experience that you refer to there, Kris, from the developer experience, of things being good, is almost always oriented from a user's editor, and their experience there.

So in some respects, yes, there was the packages that have helped improve the tooling experience, but it's actually largely been an improvement of the conversation and coordination between these tool authors... And again, in sort of a small way, I think that the Tools Working Group has really helped with that, pulling the right people in, having the right discussions... Ian, maybe you want to talk about this, of course - VS Code's plugin for Go was then adopted by the Go team itself. This all started off the back of Ramya, who joined us at the first session of the Tools Working Group back in the day, who was a passionate supported of all that it was that was happening... I think that whole experience is something that has only been possible by better coordination. So I think there were technical things that needed to be overcome with Modules, there were technical things that have improved by Go Packages, but fundamentally, there's a massive coordination effort that's been happening here to improve that experience... And yet, there's still a lot more to do, but my sense is the Working Group has helped in that. And yes, we can as the Working Group still improve the way we do things as well, but it's one of the most effective ways at the moment of encouraging that sort of collaboration and constructive feedback on things.

**Ian Cottrell:** I think you actually mentioned what I think is the really key point there as well, which is the developer experience. I think one of the things the Tools Group brings is it tends to start from the true developer experience, the complete workflow experience; what does the developer do that needs to be better? It brings that perspective in a way that doesn't -- you know, if you're just designing a library or you're designing one part of a whole experience, it's very hard to think that through... Whereas I think the Tools Group often will shift the design of underlying things, because it's seeing how it fits into that larger flow.

**Break:** \[00:43:16.25\]

**Kris Brandow:** So a couple months ago, back in July, we had an episode on SIV, and the V2 problem, as some people have dubbed it. This group seems like it's kind of primed for helping to resolve the issues that people encounter when they're using SIV or other newer features of Modules... Is there anything that the group is currently working on to try and help address the speedbumps and other problems people are running into?

**Ian Cottrell:** Yeah, I think there's a complexity here where it's easy to see what feels bad from a user standpoint, and assume that you have to change the core technology. I think one of the things the Tools Group often does is saying "We can put something in the middle here. The core solution will do what you want, it just won't do it nicely... Whereas a tool can sit in the middle and turn what is currently an unpleasant experience to a nice one if we do it well." I think that's one of the big places where the group helps a lot. I think there is plenty we can do in that regard.

**Paul Jolly:** I wasn't so involved with the issue you're referring to there, Kris... But I would say there have been plenty of thorny issues that we've had to tackle over the years as well, and there've been difficult -- some of them have been technical issues we've had to work with, others have been around, as Ian was saying; workflow, UX, other tooling etc. And in their own way, they have all been significant.

What we've found is that, again, this is just a good form for having that sort of discussion, as I said, because it nicely deals with nuance via GitHub issues, or even more challenging, Twitter tweets. It's very easily lost, particularly technical details, or the wider context of a problem... Because some of these are nice, small, very discrete issues that we can discuss quite succinctly. Others have got much wider implications. And trying to repeatedly deal with that in, for example, a Twitter thread, or a GitHub issue - it doesn't often work. And I think from that perspective, engaging to look at someone as you're giving feedback... Because guess what - dissent and disagreement on things is very healthy.

\[00:48:09.27\] I think certainly from my experience, that has been most successfully done on calls because the nuance is much more easily conveyed of certain points, and where somebody is coming at, and their feelings on things just comes across a lot clearer.

So to that extent, I've been very supportive - and I think, hopefully, I speak for others as well - of people bringing up difficult, challenging points on the Tools call, because it has served as a very good forum for that... And I hope we can learn lessons on how to do that better in the future, make it more inclusive... I think we've got specific breakout sessions that are starting to happen now, because the Tools call itself is getting quite busy, where we say "Look, this is a big issue. Let's host a special call for those who are particularly interested to talk about it in more detail." We're seeing more of that.

So I think it's just the nature though of the call itself being a good forum in which to have these sorts of discussions. However thorny they might be, it's something that we're open to tackling and hearing about, for sure.

**Daniel Martí:** I think it's worth bringing up as well that you don't have to bring up an idea or an early proposal to the Tools Group for it to be successful or for it to be more likely to succeed... But if you think the idea will be controversial, I would say it's a good idea, for the sake of getting your early feedback very quickly and very honestly. Because like Paul said, I don't believe GitHub is a very good channel for getting constructive feedback. You quite easily go in circles, for example, once there's more than 20 comments, and then suddenly you can't see what people said before; that kind of thing.

And also, it's sort of easy -- I don't wanna say it's easy to get up to speed, but because each tool is one month after the previous one, if you bring up an idea, you are forced to briefly summarize what your idea is, what was tried before, what your current status is, what you're trying to achieve. Those high-level visions can be easy to not see clearly on a large GitHub thread or a large GitHub post.

**Paul Jolly:** I think the challenges for the Working Group is that amongst the various channels that exist for talking about tools - and we sort of described how that's quite a very broad \[unintelligible 00:50:19.02\] how do we create the right dynamic that allows for an exchange of ideas and opinions? And included in that is dissent, as well; constructive dissent. And that's really the challenge to those who participate regularly on the call - are we making sure this is open to everybody? Are the calls welcoming enough? Is the conversation within the tools channel on Slack - is that welcoming enough to everybody? Does everybody feel good when they're reading things there? You can still disagree with something and still leave people feeling good about it. And I think it's trying to be conscious about what the impact of those sorts of conversations have are, because there's a very wide group of people, whether it be from the Go team itself, to now the many, many people who are not at Google, not on the Go team, and who are contributing to projects... So it's quite a lot to consider.

Again, it comes back to why I think that the calls themselves end up being a nice way, with a nice regular cadence of just bringing everybody together and saying "Here we are, this is what we're discussing", and in some cases just regrouping on certain topics.

**Kris Brandow:** It sounds like if people want to help \[unintelligible 00:51:31.09\] or the V2 problem, that a good place to go would be these Tools calls, and really get into that channel, versus some of the other channels that exist. Is that a good summary of what you've said there, Paul?

**Paul Jolly:** Yeah, that and any other issues. As I've said, we've covered a number of challenging topics over the years, and it's really open for anybody to bring up anything they like. I think it helps that there's good communication in the group, and that's something that has developed over time. So I hope everybody feels like it's safe to bring up anything that they want to within that group there, regardless of whether it is disagreeing with whoever - I certainly do, and I guess it's a challenge for all of us to make sure that everybody feels like that, and think about ways that we can make that easier for people to bring their disagreement in a constructive way to the group, in order that we actually make progress on whatever problem it is that somebody wants to bring.

**Daniel Martí:** \[00:52:31.20\] I also think a good mental model is not that you come to the call to fix a problem or find a solution to a difficult design problem, it's that you want to nudge an idea in the right direction... Because the call is just an hour, and you're only gonna have maybe five minutes for your topic. But if you can get the right people to notice it and you can nudge it in the right direction, next month it's probably gonna be in a better position, even if it's a new iteration of the same idea.

**Kris Brandow:** Alright. I have a question for you, Ian... This is a listener question, but what are your thoughts, and do you see a path forward for not fragmenting the tools ecosystem? I believe in a previous episode some people suggested that that sort of thing might happen in the future... So do you see a path forward for not fragmenting the ecosystem, kind of keeping everything as a cohesive whole?

**Ian Cottrell:** Well, I think it's really important -- I think fragmentation is the most damaging thing there is \[unintelligible 00:53:27.02\] are considerably less likely to succeed. But I think it's a very difficult topic, because Go is an opinionated language in many ways, and it has specific use cases in mind... And trying to be everything to everyone is how you end up badly fragmented anyway. You have to be a certain level of opinionatedness to succeed in this space.

But also, it's a difficult line to draw of when a strong opinion is necessary, and where the opinion is necessary. You can support lots of workflows on a single opinionated base, if the base is of the right structure. And I think that's where the real danger of fragmentation comes... Because if you can support people having their own workflows, but the artifacts they produce at the end of those workflows are all the same, then you're not fragmenting, and that's fine. But if you talk about diverging the core way that things work at the bottom level, then you can no longer be the same thing to everybody, and you can't write tools that work with both modes... So you're almost back to the state when we started the Tools Working Group; there were some things you could only do in Vim, and some things you could only do in VS Code, and some things you could only do in Emacs, because they were all so divergent. One of the things we tried to do was bring them all together, so that it doesn't matter which editor you pick, a certain feature set is available to you. I think that's really important.

You can't expect a tool author to write one tool that works with ten different source code layouts. That's where the dangers of fragmentation come in, and that's why you can't afford to diverge at those levels.

**Kris Brandow:** Alright, so for those listeners interested in actually getting involved with the Tools Working Group, what are some ways that they can go about actually participating?

**Daniel Martí:** I would say we have the calls themselves every month; they get published on a shared Google Calendar, which is linked from the wiki... And the wiki is under the GitHub repo. I believe the name of the wiki page is golang-tools. We also have the tools channel on Slack, and we also have the mailing list. I believe it's also called Golang Tools, but it's all linked from the wiki.

I think something worth bringing up is that some people might not feel comfortable joining in the calls, so just to mention two quick things - you can join the calls and just listen. You don't have to show your face, you don't have to speak... And you can also read the minutes afterwards, because we have the agenda... We generally have somebody that takes notes, we record the calls as well, so you can catch up on the bids that you find interesting whenever you want.

**Ian Cottrell:** \[00:56:09.18\] You can also just ask us to talk about something. There are definitely topics where -- we have some contributors that are very vocal and active, but never turn up to the call, and they'll just ask one of us to effectively represent them at the call and talk about a specific problem.

**Daniel Martí:** Or we might end up with an action item that says "Ask this person on Slack about this topic, because they'll surely have an opinion about it."

**Paul Jolly:** Yeah, Marwan, I think you made that point really well earlier on... You were referencing an example from work there, but I think it sort of generally exists in the community as well, where if I think about an issue that I would like to perhaps bring up on a call, I generally - perhaps maybe it's because I'm a bit lazy - I generally think of who would actually be able to make that point for me better, because it's perhaps their area of specialism... And again, I think that's something that -- a nice benefit of the community is that I now know those people, and know who I would speak to, or who I would ask first... And just \[unintelligible 00:57:08.03\] perhaps before the call, and that just helps; it's almost like a pre-filter on whatever I might bring up on the call... But that person may actually end up being the strongest proponent for the idea, or they may be the person who dissents the loudest and says "No, I think this is the worst idea ever." But at the same time, it is a good way of getting to know people and understand where that area of expertise exists, but also to speak and be a supporter of whatever it is you're talking about as well.

**Kris Brandow:** With that, let's move into our final segment here, Unpopular Opinions.

**Jingle:** \[00:57:43.16\] to \[00:57:59.24\]

**Kris Brandow:** Alright... Paul, why don't we start with you?

**Paul Jolly:** This is one that people have heard me say before, so apologies... But I haven't done it on a Go Time. I think that compared to GitHub's PRs on the branch-based model, I think that Gerrit encourages and supports a better workflow for contributions, and review of those contributions.

**Kris Brandow:** I feel like I agree with that. I like Gerrit more than GitHub PRs... But also, Marwan is in this call...

**Paul Jolly:** I know... \[laughs\]

**Marwan Sulaiman:** I can't comment. I work at GitHub, so I can't comment.

**Paul Jolly:** I thought it would be particularly spicy for that reason... \[laughs\]

**Marwan Sulaiman:** Yeah. I should check if I'm legally allowed to comment before I say anything. But I enjoy submitting reviews on Gerrit, I think I can say that far. \[laughter\]

**Kris Brandow:** Alright... Dan, do you have an unpopular opinion?

**Daniel Martí:** I do. So I think meeting somebody face to face, even if it's just a couple of video calls, allows working better with that person. I used to be somebody who said "If this can be an IRC conversation or a DM or an email, why do you want me to turn on my webcam?" But I think it really allows you to get to know the person and know how they work and how they are, and then you can communicate more effectively, and avoid rough edges.

**Marwan Sulaiman:** Sometimes I'm in my PJs and it's eight in the morning, so there's also that... \[laughter\]

**Daniel Martí:** Well, they don't have to know though...

**Marwan Sulaiman:** I mean, I am currently sitting on the couch. I don't have a desk really, so... I'm comfortable with not looking good on camera.

**Kris Brandow:** I don't feel like that's gonna be an unpopular, but we will poll the audience on Twitter and see what they say. Marwan, do you have an unpopular opinion?

**Marwan Sulaiman:** Sure. Mine is - and this is meant to be unpopular, by design... I think that Go is no longer simple. That's the tweet.

**Paul Jolly:** Is that generics?

**Marwan Sulaiman:** I'll just leave it at that. We could definitely discuss it... So it's worth mentioning there's a very active generics channel on the GopherSlack, there are people who are constantly answering questions... And I see it being incredibly active. I do know it's coming in 1.18, I think... I've been completely pretending I live in a different world and I just don't know anything until I have to deal with it. So I can't really say that "Well, when generics come, Go is no longer simple." I mean, that could be a very true thing, or it may not be as complex as we all expect it to be.

\[01:00:24.25\] But I think just the combination -- because Go became so popular, because it's so... Instead of just a small community, we have a much larger community; the discussion and really just the time that we spend evolving Go and working with it - it's just hard to stay simple. Go Modules, and the tooling, and everything it takes to make Go what it is today is a lot, and a lot to keep up with.

**Paul Jolly:** Simple is a very relative standard.

**Marwan Sulaiman:** True story.

**Kris Brandow:** People getting spicy in the GoTimeFM channel there...

**Marwan Sulaiman:** It's meant to be unpopular, so... \[laughs\] I think I did my job.

**Paul Jolly:** I was gonna say, you're actually playing this game properly, Marwan. I just don't understand how to play the game, I think.

**Kris Brandow:** There's some people that really don't like Gerrit, so...

**Paul Jolly:** Oh no, hang on... What have I done...?

**Kris Brandow:** Well, we'll see... \[laughter\] Ian, do you have an unpopular opinion?

**Ian Cottrell:** Go is not always the right choice. Sometimes you should use something else.

**Daniel Martí:** I don't think you understood the point of this section... \[laughter\]

**Ian Cottrell:** It might just be the people I hang out with a lot.

**Marwan Sulaiman:** It's really hard to agree... I do agree, but it's just difficult to say it out loud.

**Kris Brandow:** I guess the abstract... It's like, "Oh, there are other tools that are likely better", but if it was a direct comparison to another -- like, if it was like "Go is not always the right choice. Sometimes JavaScript is the right choice", I might have to draw issue with that. But in general, I think I can agree with that. There are theoretically better languages and better tools than Go.

**Marwan Sulaiman:** I am eagerly waiting for TinyGo to fully compile \[unintelligible 01:02:00.09\] if anyone is keeping up with that, so that I could finally write Go on the frontend, and can advocate for Go on the frontend. I still write Go on the frontend, it just happens to be very bloated, not production-worthy, depending on how you define production-worthy.

So once you could maybe have a full Go UI application that has maybe just a hundred kilobytes as opposed to like 6-7 megabytes, there's a very compelling case to take Go to a place where you're not supposed to use it.

**Daniel Martí:** I think if Ian truly wanted to be controversial or unpopular, he would say "But I also enjoy writing other languages as much as I do with Go... Because I definitely don't miss writing Python, for example."

**Paul Jolly:** Ian, could you help us fill in the gap there? What languages are you referring to?

**Ian Cottrell:** I guess if you dig into my past, you'll see I spent 16 years making computer games, and I still think it would be a bad choice for that. But I am looking forward to when I can replace \[unintelligible 01:02:57.12\] with something written in Go.

**Kris Brandow:** What is that written in? Is it Python, or something?

**Ian Cottrell:** I don't even know... \[laughter\] That code - I don't know what it's written in.

**Kris Brandow:** I feel like that's a good use case for Go though... Talking to embedded systems, and all of that.

**Paul Jolly:** Yeah, I'm with Marwan on the whole writing frontends in Go. I was particularly interested in Gopher.js for that back in the day, and it's been super-interesting to see where TinyGo is \[unintelligible 01:03:23.14\] how that's progressing, but also how different approaches and different frameworks have come about... \[unintelligible 01:03:32.05\] That's a very different model to writing frontends, but at the same time one that works really nicely, and across platforms; I think it's that cross-platformness that appeals to me significantly... But Marwan, I guess, like you, it's the patterns that you could write with Go that appeal to me from a frontend perspective. So Ian, I disagree with you. \[laughter\]

**Kris Brandow:** Alright. Any last things anybody wants to say before we sign off?

**Daniel Martí:** It looks like four people joined the Tools channel on Slack since we started.

**Kris Brandow:** Exciting. Already getting some traction. Alright, well, thank you Dan, Paul, Ian and Marwan for joining me on this episode so we can talk about the Tools Working Group, and thank you all for listening. Until next time.
