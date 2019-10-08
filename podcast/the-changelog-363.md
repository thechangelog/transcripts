**Jerod Santo:** Today we're here to talk about a new shell - it's called Nushell, which is fitting for a new shell. I suppose as it gets older, maybe that name needs to be updated. Be we have a whole bunch of people here... The whole team, it seems like, the whole core contributors: Andrés, Yehuda and Jonathan. Guys, thanks so much for coming on the Changelog.

**Yehuda Katz:** Thank you for having us.

**Jonathan Turner:** Thanks for having us.

**Andrés N. Robalino:** Thank you for having us.

**Jerod Santo:** Big endeavor... It's time for a shell -- I like how you cast it, "A modern shell for the GitHub era." Whose idea was this, and how did it get started?

**Andrés N. Robalino:** Jonathan, do you wanna take that?

**Jonathan Turner:** Yeah, I can give that a go. I think a couple of things happened all at the same time. Yehuda and I talk pretty regularly about different ideas of things that we wanna try... And he was going on a PowerShell kick, and showing off "Hey, look at what you can do in PowerShell", and then the next day he would show something else, and the next day he would show something else... Like "Wow, there's a whole untapped arena of ideas around how we can make shells better."

I started working on a little shell project, he started working on a different one, and we said "Well, let's just merge this together", and that was the genesis of this Nushell project - taking some of these ideas... But we're both Rust programmers, and kind of seeing it in the Rust direction, or in kind of a functional programming direction.

**Yehuda Katz:** Yeah, and I would also say that PowerShell is cool. I really enjoyed it, and I wrote a bunch of blog posts about it, actually. What was a little underwhelming and disappointing about PowerShell was that it just felt like it was written in 2001 by somebody who was kind of getting their feet wet with programming language design... The example I usually use here is it's dynamically-scoped. Emacs Lisp is the only other thing that's dynamically-scoped... And you might not think it matters, and I don't wanna spend a huge amount of time explaining why it matters, but there's a reason that no programming languages are dynamically-scoped; it just makes callbacks and abstractions very painful... And it started to become apparent to me as I was playing with it.

In general, it just doesn't feel super-fun. The errors are just a big blob of red text. I remember one of the first things... I said "Jonathan, this is cool!" and he said "That's cool", and he typed something in the shell, and it -- both of us use Windows, by the way... So he just went and typed something in the shell and it spewed out this big block of nonsense red text... And it just doesn't feel -- given that it's 15 years old, it's surprising how many things don't feel that modern.

**Jerod Santo:** \[00:04:07.27\] Well, from a person who uses Bash every single day, all day, it doesn't feel modern at all. But I also don't have that twinge of like "I need something new." I think you just get comfortable. And I don't even know that I need a thing like Nushell until I start reading some of your examples, and I'm like "Oh, I do want this in my life."

**Adam Stacoviak:** "I need this thing", yeah...

**Jerod Santo:** But a huge undertaking. I was gonna ask why Rust, but it sounds like because you're both into Rust first and foremost. That's sometimes the reason.

**Yehuda Katz:** I think that's the main explanation, but I think one thing that I really wanna give Rust a lot of credit for is that Rust is both low-level and fast, but also very portable. That means that on balance if I wanna get a crate - which is the name for package in Rust - for the thing that PS would have to be implemented in, on balance, the best of breed Rust crate supports Windows and OS10, and Linux, and maybe FreeBSD, and whatever. So I think it might not have literally been possible for us to quickly prototype this five years ago. We could have done it on Mac, or something, and there's tons of projects like that. But we use Windows, and it kind of just worked on Linux, and it kind of just worked on OS10 - that's a good reason to use Rust.

**Adam Stacoviak:** You're going pretty deep on PowerShell, Yehuda. You had a lot of great blog posts about that.

**Yehuda Katz:** Yeah. I mean, I think among other things, it's good if you're gonna -- so I didn't know right away that I was gonna write it alternative, but if you're gonna write an alternative, it's probably good for you to know exactly what is not good enough about the thing that you're alternating. Among other things, I just think that Windows is hiding a lot of really useful things. The theory of Windows is like everything is OO, more or less; the theory of Linux is everything is a file, more or less... And people like to make fun of the registry, but it's probably not bad that the console API is an object with methods on it, instead of a bunch of 1960's escape characters. It's probably nice that console.go-op is a thing.

**Jerod Santo:** So Andrés, are you also on Windows? Are you also into Rust, or how did you get involved with these two?

**Andrés N. Robalino:** The story is interesting. I've always assumed that when Yehuda says something, he's doing something; he has a plan. \[laughter\] In this case, it's due to him that I learned Rust maybe pre-stable 2013, but not really got that deep, like both Jonathan and Yehuda. They went all over the place with the language, even becoming part of core teams there.

I was working on a project with Yehuda a couple months ago, and I noticed the PowerShell posts. And then again, I assumed he's into something. We were just talking about the other project here and there, and I started noticing and asking about some other repos... And then he's like "I'm working on errors." "Okay, let me see..." And that's when I saw a different shell, and I knew. I assumed.

My reaction was -- it wasn't even a decision. It was already a decision. You just see it and you believe in it. If we talk about films, , I'd had to say like, you know, how do I join the Nebuchadnezzar  now? \[laughter\]

**Yehuda Katz:** One thing Andrés is not giving himself enough credit for here is I first met Andrés -- I had a project called Tokaido, which was basically just an attempt to make a better OS10 Ruby installer. It kind of morphed over time, but more or less that project is why statically-installable Ruby exists in OS10 now. That was more or less the consequence of that; it was a Kickstarter project... And I had gotten to a point where I kind of got everything working, but I just really needed help, and Andrés showed up and did really massive amount of work and got the project over the finish line, and continued to maintain it. The project of why is Ruby not statically-installing itself super-well on OS10 is not an easy project; it was a hard project, and Andrés did really good work, and that's how I met him.

**Andrés N. Robalino:** \[00:08:21.23\] Thank you, sir. That's how we met online, actually...

**Yehuda Katz:** Yes, yes...

**Andrés N. Robalino:** It's funny and interesting, because during that time - that's how I was learning more about Yehuda, so to speak. He got into Rust, one of the first who had a software written in Rust in production. He told me about the language, he had other ideas, and I regret at that time not getting into it that much... Because he mentioned me something about Ruby.rs. That was six years ago, and now you have another project called Helix, which is that. An idea became reality. It's basically a way for you to Ruby DSL is... write extensions that run with Rust and interoperate with Ruby code. So it's for optimizing hot spots in a given application, in an easy way. So we worked on that project, and we officially met in person at RailsConf last year. So that would be maybe four years later.

**Yehuda Katz:** That's true.

**Adam Stacoviak:** It sounds like me and Jerod.

**Jerod Santo:** That's right. How long did we work together before I came down to Houston?

**Adam Stacoviak:** Years.

**Jerod Santo:** Years. Two or three maybe.

**Adam Stacoviak:** Okay, at least a couple. Two or three.

**Jerod Santo:** How the internets connects us...

**Adam Stacoviak:** That's right...

**Andrés N. Robalino:** Yeah, and it's very funny how that even happened. I appreciate the invitation from Tilde, Yehuda's company. Lee gave me a pass to get into the conference. And the reason of all that was because of Jonas, Yehuda's son. He accidentally dialed the number. \[laughter\]

**Jerod Santo:** Really?

**Yehuda Katz:** He does a lot of that...

**Adam Stacoviak:** It got butt-dialed? Or I guess it's not really a butt dial, is it?

**Jerod Santo:** Yeah, like toddler-dialed... \[laughter\]

**Andrés N. Robalino:** I told him I'm a computer scientist and he told me he's a tablet scientist. \[laughter\] So I see the number, and I'm like "Um, hello...?" Because I recognized Lee in the picture. It was from her phone. So I said "I'm gonna be in the Pittsburgh area, so it'd be nice if we could have lunch of perhaps meet, because I have to be around on those dates", and that's how it happened; we literally met in person. That was fascinating.

**Jerod Santo:** Quite a story.

**Andrés N. Robalino:** And now this - I just saw the source code, again, I didn't have to think; I assumed -- usually, Yehuda's design ideas are good. They're great decisions. They apply really well in practice. And I saw it, I mean -- why do I have to think about not working on something together? Because I was telling him, "Let's work on something." But I saw it, and I don't think I even need to find arguments or any reason not to get involved. So I just went and never stopped.

**Jerod Santo:** Awesome.

**Andrés N. Robalino:** That's how we started working for the second time.

**Jerod Santo:** That's awesome. You were all-in.

**Andrés N. Robalino:** Yeah. So right now we're answering the GitHub era question, right Jonathan? \[laughter\]

**Jonathan Turner:** Yeah. A couple of people were giving us a little bit of guff for the GitHub era... Like "What does the GitHub era even mean...?!"

**Adam Stacoviak:** I think it seems pretty--

**Jonathan Turner:** To the rest of us, it's like "Haven't we been in the GitHub era for like at least the last five years?"

**Andrés N. Robalino:** Yeah, and somehow we have no new shells in that entire time.

**Adam Stacoviak:** Right. I think that's where it really comes in and makes sense there; it's not so much that it's pompous to say, it's the fact that there is nothing new that's come out to embrace this ecosystem being there, and the accessibility of things like that... So it makes sense to me to say it like that.

**Andrés N. Robalino:** \[00:12:08.12\] Yeah.

**Yehuda Katz:** I always feel like if people wanna complain about stuff like that slogan, they're probably -- I have better things to focus on than whether it's really the GitHub era, or whatever... And I'm happy for those people to spin their wheel.

**Adam Stacoviak:** What's the runner-up to that then? If that was the tagline you all chose, what's the runner-up?

**Yehuda Katz:** I think we considered stuff like "Playground in a shell", or stuff like that, which I still like as secondary taglines.

**Jerod Santo:** One thing about it is that it's ambitious, and this is something that I think marks a lot of the stuff you do, Yehuda - very ambitious projects. I would just say that one of the things that we feature... I mean, Adam and I are impressed by ambition, and people who are like "You know what, I'm gonna take on this thing, which is a big endeavor, and potentially difficult endeavor, but it has a lot of wins at the other side of the road..." I guess a surefire way to get on the Changelog is start an ambitious project and then tell us about it; we're just gonna invite you on.

**Adam Stacoviak:** That's right.

**Jerod Santo:** So that's kind of what you did - you started a project, you told everybody about it, and we saw it, and were like "Alright, come on on."

**Yehuda Katz:** And one thing that I think is great about Jonathan and why I like working with him is -- there's a lot of people with ambitious ideas; you'd be surprised how many people come out of the woodwork to be like "Here's a document I wrote that explained what a better shell was", and there's a lot of people who start doing them, sort of, in a repo somewhere... But it takes a lot of discipline to actually focus on the right small MVP, and Jonathan is really the best person I know to be like "No, that's a real problem, but we're not gonna solve it right now."

**Jerod Santo:** Yeah, that leads directly into what I was gonna ask him; I'm glad you said that, because the question for you, Jonathan, is - okay, you have this idea, you know you wanna do some cool things, similar to the way that PowerShell is, but fix these problems, and you know you've got this ecosystem of existing shells, and the UNIX philosophy, its shortcomings... Where do you start then? It's like "Okay, let's do this", and you have your editor open and you're like "Okay, I'm gonna write a line of code." What do you do? How do you get started?

**Jonathan Turner:** I think that's a great question... When we were starting to hack on it initially, I think a lot of the early time was spent just me and Yehuda throwing ideas around. "What if we did this, what if we did that...?" And Andrés said Yehuda has tons of good ideas, and his design ideas come from a really fundamental place, so they have a lot of good gravity to them... So if he's like "Oh, we should go this way", there's a good reason, and you should follow that conversation.

So we just did one conversation after another, and I was also kind of putting on my PM hat... So I was the program manager for the TypeScript team for years, starting at its first public release, and then growing it through the use of TypeScript in Angular... And the discipline of growing a small project and then into a much larger one, I think you kind of get used to working with "Okay, what is the MVP for this release? What are the things we actually wanna hit?" That's basically what it kind of came down to - we saw Nushell, we saw all these ideas, kind of a garden of ideas, and we kind of cut through that garden... "Alright, this is clearly enough to show off the value of what a new shell would work like. Let's work with existing file formats, let's build the pipeline, let's build it in Rust in a way that is really composable, and has plugins, and that kind of thing." So we could kind of carve out some of those main features, and that's enough to really -- once you could see that... It's like, I tell you part of a story, and there's enough detail that you can fill in the rest in your mind. I think that's some of the philosophy of an MVP.

**Yehuda Katz:** \[00:15:47.24\] And I think a good example of where it's not -- like, there's a version of what an MVP is that you read in blog posts, or self-help books, where it's just about pairing down. I think there's a good example in how the evaluator works in Nushell, where I actually wrote a real programming language interpreter, but we didn't write scripts; there's no scripts in there, there's no script file, there's no parser that parses more than one expression at a time... But the way that it is implemented is like a real evaluator, which means that things like ls pipe where CPU is bigger than ten into a block that really looks like $it.cpu is > 10 it has a real scope object, right?

Now, that's not the right way to do a programming language implementation if you're trying to make a fast programming language... But it is a real programming language implementation, and what that has meant is, number one, we didn't waste our time with scripts... Which are gonna be important, but are just not what 99% of anyone is doing in a shell, period. But second of all, as we've added more features, there was sort of a natural way to add them, because it's like "Oh, you wanna add a binary expression?" I don't wanna implement a binary expression in the interpreter; you do that there. As opposed to maybe like a regex for $it or something, or some other... Like, we'll just write a POSIX shell and we'll just treat each thing as a bare word and we'll do some thing in every command. That would have been a valid self-help book MVP, but it would have meant that when we got a whole bunch of interesting contributors who were trying to add stuff, they would have not succeeded.

So there's a balance that I think I care a lot about, and is quintessential to how I think about how to build software, that is not just about purely just pairing it down, but is also about being pretty willing to pair it down. You only do the things that are the highest leverage, that are the most essential.

**Jonathan Turner:** Have you guys heard of -- maybe this is a good one for the listeners, too... There's a thing called the MVP Pyramid; maybe we can have a link, or something...

**Yehuda Katz:** Make it a show notes.

**Jonathan Turner:** Yeah. MVP Pyramid is that a lot of times if you think of a pyramid and you have layers of a pyramid going up - as it goes higher, it gets more narrow, and whatever, but each one could be some core feature... And oftentimes, when people do MVPs, they kind of do a couple core features and then stop. They don't ever build the pyramid, if you will. And a better way of thinking about an MVP is actually the slice more laterally across all the features, so you get a taste of each of the core things that you expect to flesh out by the time it hits 1.0, or whatever.

**Adam Stacoviak:** I've got a pyramid up here; I'll read it, so I can maybe describe it visually to the listeners... So you have a pyramid, and at the bottom it's got user segments, user needs above that - functional, reliable, usable, enjoyable. And what you're saying, Jonathan, is if you just take a slice down the left-hand side of that and you get a little bit of each of those, rather than just a couple, and not really a full-featured application or product.

**Yehuda Katz:** And for people to know they -- the whole point of an MVP is to sell a vision, to sell a story. A story is fundamentally about -- the original MVP Pyramid used the word "emotional" for the top one, and I think I'm partial to that... To tell a good story, it has to be emotional, it has to hit you somewhere. If you just make something that works, then it's not telling any story... And you need to tell a story to get contributors and end users.

**Jerod Santo:** So how long have y'all been toiling away at this MVP?

**Yehuda Katz:** I think four months sounds about right. I have a self-imposed rule that I don't-- so first of all, I only...

**Jerod Santo:** ...that I don't follow. \[laughter\]

**Andrés N. Robalino:** You have to say the truth. The original commit is the day of your birthday.

**Yehuda Katz:** May 10th...

**Andrés N. Robalino:** May 10th, yes.

**Yehuda Katz:** My birthday is '82... I'm 37.

**Jerod Santo:** 82... \[laughs\]

**Yehuda Katz:** \[00:19:40.24\] So I'd be interested to plot the velocity, but I have a self-imposed rule that first of all I only do work in public, so I generally don't -- there's a lot of reasons people don't do work in public, which include things like "People will see it, and they'll annoy me", and whatever. And my point of view - maybe it's from Ember - is you have to actually do a lot of things to get anyone to care about what you're doing, no matter what... And if you do something in public, it doesn't matter -- like, Nushell and Dino were both public projects, and no one cared, despite the pedigree, until they were announced...

And second of all, if somebody actually is interested, like Andrés, it's good that I didn't have to figure out how to give him access. So if somebody is super-interested in very early stage work, it sounds great. And additionally, it makes it very low-friction to share it with friends and people who are generally interested. I can open up somebody's GitHub.com on their computer and show them. I think all that friction is annoying in the beginning, and secret doesn't buy anything... So that's' rule number one.

Rule number two is I try to make an announcement within three months. It sounds like June, July, August, September - I think we hit that target. And the basic idea is not that you have to announce something that is ready to use... You have to announce something that is ready for more contributors. I think it actually is reasonable that it takes a few months of -- you know, the MVP Pyramid is like... There's also a version of that in tech; you have to lay out the principles in code. This is how pipelines work; if somebody comes to add another feature that builds on pipelines, if the pipeline feature isn't laid out, then all the contributors coming into the project are gonna make it really hard to advance the core primitives. I wanna build the core primitives quickly, but again, Jonathan is great at this.

You've gotta be really ruthless about what that really means, because I am not smart enough to do everything myself. There are definitely people who do. I just desperately need other people to help me do the most basic of things. So I have basically a deadline of approximately three months... Jonathan and I talked about this in other projects we kind of spiked out in the past, and I think that works. If you think about it, almost nobody does the thing I'm saying, and the objections that you might imagine in your head to why you shouldn't do it probably apply more to me than most people, and yet it works for me... So I think this is a good recommendation; it keeps you honest, it keeps you shipping, it avoids you making secret things that are only in your head for like a year.

**Jonathan Turner:** Yeah. It kind of reminds me -- what was that article called? How Not to Die? Is that right?

**Yehuda Katz:** Paul Graham, and it's called How Not to Die. The basic -- Jonathan, you can tell the story, and then I can say why I find it ironic separately. \[laughter\]

**Jonathan Turner:** Okay. I'll try to do a decent job... So the "How Not to Die" is Paul Graham giving advice to startups, and how to continue going, how to not die as a startup. This applies to software project and to open source, too. To me, one of the main takeaways from that article is this idea of smoke signals. If you're looking across the hill and there's a smoke signal, you know someone's still in the cabin and they're still setting a fireplace on fire. At some point, if there's no smoke signal, you go and check on them and knock on the door. And that's true of open source projects, too. If they're not releasing new releases, or blog updates, or tweets, or some signal of life, then it's really easy to assume that that project is dead, and all the momentum behind it just starts to peel away.

**Yehuda Katz:** Right. I think a couple things... Like he said, a counter-intuitive thing, which is probably true enough, which is therefore if you can convince yourself to keep working, you are not dying. Even though it seems like you think you're alive or dead based on funding, or resources, or time, or something... But in reality, if you could just figure out how to keep working, you're not dead yet.

\[00:23:55.04\] So this essay is one of the most influential essays I've ever read... And the other thing is that he just says "You have to prioritize it." You can only prioritize one or two things, and it's weird to prioritize staying alive as a thing; nobody wants to. But Tilde, the company I started with Leah, also has a priority of "Don't die", and that supersedes adding features to the product, or whatever. Staying alive matters a lot, because if you stay alive for enough time, it's good.

The thing I find ironic about it is that that advice was meant to be counterintuitive compared to what other VCs are telling you. Most VCs give you some money, you last for 18 months... Instead of telling you "Don't die", they tell you "Triple, quadruple down. Keep taking more and more risk, and maybe you'll get lucky. If you're not, it's not our problem. You'll get acquihire, whatever." And the point of the essay was to tell you to focus on survival. And what I find ironic is I really believe that Paul Graham believes it, but ultimately, Y Combinator is not particularly different here. Companies that get funded by Y Combinator have the same 18-month or 24-month boom and bust cycle as anybody else, and I think that's too bad.

There's a VC called Indie.vc by the person who actually was the VC of the last company that I was part of that boomed and busted, and his thesis is basically "I wanna invest in sustainability." That story, that essay suggests you that Y Combinator should be that, but it isn't.

**Andrés N. Robalino:** I think Jonathan has done an excellent job in terms of the whole thing, really, especially the management of the project itself. To be frank, also, if you haven't checked, the MVP hasn't been sliced; I'm so used to slicing right now, the word... I don't know why. \[laughs\] So there are MVPs number two and number three. There's theoretically a roadmap. And this is good, because if you see the issues, anything that shows up, following Jonathan's practices, file it. Just file it. Or metadata it and merge issues and reference in a single issue, as Yehuda started doing, and tagging that in tags. First Issue tags, good preparations for people that might be interested in contributing... And it's important, and I say this because since the announcement, out of nowhere we get issues all over the place filed; at least that's what I think. We wanna fix the issues as soon as we can, so if you think about it, it's easy to lose track for the next MVP.

The target is there, so Jonathan has been doing well. I enjoy working with him, because clearly we know what needs to get done.

**Yehuda Katz:** There's a sort of tension between what I sometimes \[unintelligible 00:26:55.18\] articulate the vision of like "Okay, we have a roadmap, we have a plan", and we really want people to join the project who more or less share the vision that we have. Let's say someone is like "Oh, Nushell seems cool. I like your UI, your output, but I really wish it was based on text streams", they should definitely not join the project So I think there's a sense in which you have to really clearly articulate the vision.

On the other hand, what people are excited and enthusiastic about doing when they show up and try to contribute of course has a big impact on what actually gets done, and therefore you wanna shape the roadmap based on that. So there's sort of like a push and pull between laying out as much of the vision as you can to attract people who really share the ideas, and then being willing to be pretty flexible. If someone shows up and the only thing they care about is making it work on FreeBSD, FreeBSD is gonna be on the roadmap, because that person is doing a lot of work on it. Unless it's making everything else really hard. So I think it's, again, not a self-help book. There's a push and pull between letting people drive and articulating.

**Andrés N. Robalino:** \[00:28:03.08\] And Jerod, just like you asked about the GitHub era thing, the most interesting pull request for the most is a suggestion of changing the motto. \[laughter\]

**Yehuda Katz:** That's a very GitHub era--

**Jerod Santo:** That is a GitHub era issue.

**Yehuda Katz:** I feel like we closed it.

**Andrés N. Robalino:** I think MVPs - releasing them, having worked sufficiently to give some message... It's perfect for getting feedback for any type of project, but this one is more important, and Jonathan has done incredible work by writing a plugin system, for instance defining an API. That's very important. That lets you give the message for new contributors to see how things work. The book, as well. Everything, everything.

**Yehuda Katz:** We should probably get into some of the technical stuff, but I actually think -- so Jonathan did the work. I have to admit, I was definitely not like "Yes, let's make plugins." It was definitely not the top priority that I had when I was working on it at the time. The thing that's cool about plugins for anybody interested listening is that plugins - basically, almost any command can be implemented as a plugin. A plugin is a binary; it's like a .exe or alpha executable, whatever. It's like a binary that runs. There's a JSON-RPC protocol that we communicate with.

So if you wanna implement ls -- it happens to not be implemented as a plugin, but ls could be implemented as a plugin, and you could either use the Rust... Like, if you're excited about Rust, then again, I think that's the easiest portability story. You could just write a plugin, you could just copy it from any of the many plugins that already exist... But if you wanna write it in Python, or Ruby, there's not great \[unintelligible 00:29:43.05\] right now, but there's nothing stopping you from doing it, because it's an executable that's on your path, or in some place, and communicates over a JSON-RPC.

Basically, the idea is that instead of making every single person who wants to work on a new command have to contend with the big codebase that's the internals, we can basically make commands be something that anybody can go write. Jonathan, what's a good example of a command that somebody wanted to write and just came and did?

**Jonathan Turner:** That's a good question. We've got different sizes of things. We've got really tiny plugins... For example, if you open a JSON file and there's a version number and you wanna just increment the version, then you could just write that as a plugin, and now it lights up for everybody.

We haven't really talked about this part, but it's a really important part of the design. The way that Nushell works, in a nutshell -- I'll try not to use a pun... \[laughter\]

**Jerod Santo:** Too late...

**Jonathan Turner:** Yeah. So the way that it works is that we have a set of things that produce values; so I can load from files, I can load from a URL, I can run ls or ps, and these generate tables of data, basically. And a table is like our core, fundamental value type. Everything produces tables, all the filters work on the tables, and then what comes out is some way of viewing or saving the data. So if I add the ability to increment to a plugin, or the ability to view a different kind of table data, that kind of lights up for everybody, because everyone's using the same value type.

**Yehuda Katz:** And to be concrete, that means that you can open a Cargo.toml, or package.json. Basically, any type that we support - you can now increment the version or look at the version in the same way.

**Break:** \[00:31:51.01\]

**Jerod Santo:** I think we should hover right here and just talk about cool stuff you can do, real quick... Because that's gonna get people -- talk about getting concrete, what's some cool stuff you can do with Nushell that I can't do in Bash today, or would require scripting?

**Yehuda Katz:** Usually the demo that I give is, first of all, if you just do ls, you get back a table. In some sense, in your mind you're like "Oh, I already can do that." And then you can do like "ls where size is bigger than 5 kb." That's a thing you can type. And now you're thinking "Oh, if I do a lot of manpage searching, I can figure out how to type that in ls." And then you're like "Okay, but what about ps?" Ps - you get back a table of data; you can "ps pipe where CPU is bigger than 0." That gives you all the processes that have any CPU activity. Then you say "Open Cargo.toml" and you're gonna get the dependencies, and say "all the ones where the version is bigger than something."

Basically, any one of those individual things is not new, in the sense that there was probably some cryptic set of things you could type, or some other things; you could possibly have used jq, people say, once you figure out how to massage it into the right shape. But once you learn where CPU is bigger than 0, where size is bigger than 5k, now everything works like that. The world is basically a bunch of Excel spreadsheets, and I think that is the capability.

**Jerod Santo:** Absolutely. So those are the filters that you were talking about, Jonathan. So when you do ls pipe or ps pipe, you are sending the where command (I assume it's a command, but whatever it is), you are sending this data as not text, like we're used to; it knows about this tabular data, so it can filter it.

**Yehuda Katz:** It's a stream of rows. If you look at it, it looks like a table, but it's actually a stream of rows. I think this is really important - there's a command that's "first five." You can say "Give me the first five of something." If you were required to get the whole thing, and you said "First five", then there might actually -- people have talked about things like "Oh, there's Azure Events. I would love to have a command that basically gave me a stream of Azure Events", let's say, and that would be a table. But if you had to get the whole thing before you could say "First five", then you would never be able to. It's the head command. So it's a stream of data that the command does, whatever... There's some that are like first that work on the whole stream, and then there's things like where, which operates on individual rows, one at a time.

**Jerod Santo:** What about commands that don't have this kind of data, they just have the old school style? Can you push it into the right format somehow, Jonathan?

**Yehuda Katz:** I think Jonathan can say more, but basically, the way to think about it is there's a lines command, which basically takes a big bunch of text and converts it into a table; there's one column in the table called "Value", and then there's just like a bunch of lines... And then there's more commands, like parse (again, Jonathan knows), which basically allow you to take the individual rows and convert them into a real column or format.

**Andrés N. Robalino:** \[00:35:58.15\] The key thing is that whatever input you have for a given command internally, it has the same structure, no matter what. The same abstraction. Internally, you always have in the code a view of a table, and you can decide how to access things in it, from the code perspective. You could either process a stream per record, or as a single thing the whole thing. Anything works based on that.

For instance, the where command - ls represented the output as something with structure, a table, and the where command takes the object, conditionally tests it against the value, and gives you the result back. Depending if it wants to accumulate the whole thing, it gives you one single value, or returns just another stream, which is always the same representation internally, with the same structure.

**Jerod Santo:** Okay.

**Andrés N. Robalino:** For plugins, I'd say -- because for instance Jonathan added fetch for fetching URLs, no matter what format; if it's supported, it will create a table for you. If you fetch from URL a JSON, a Toml file, a Yaml file, XML file - it doesn't matter, it will just show you a nice table, just like ls or ps does, and you could just where in it, or get fields in it. But if you think about it, fetch is an HTTP GET request He also wrote post for doing POST requests. So those are two different commands. Then you start realizing that you can make a single command and thus the whole enchilada, like curl.

Now, if we think about it, since the project is maturing, how about if we write a plugin instead that has all the Swiss army burps. Call HTTP, for instance; that would be a good use case for a plugin, for example.

**Jerod Santo:** Jonathan, would you like to chime in?

**Yehuda Katz:** I pasted something in the group chat that the listeners can't see...

**Jerod Santo:** We'll put them in the show notes.

**Yehuda Katz:** Maybe one of Adam or Jerod can describe it, or people can look at it in the show notes... But it's basically a very small one-liner to go from blob of text to structured data.

**Jerod Santo:** Go ahead, Jonathan.

**Jonathan Turner:** I think as far as being able to work with the outside world, we were talking about that MVP Pyramid before, and each of the core features we need to touch on the MVP Pyramid aspect of it... So one aspect would be being able to work with the outside world. If we can't work with the outside world, we're a walled garden, and that's cute, but that's just a demo; that's not really a product. So being able to slurp in data from "Alright, I'm gonna run Git, and whatever Git comes back with, I need to be able to work with it."

Like Yehuda was saying, there's a set of verbs that are intended to be used to pull data in from the outside world, and convert it into a table for you... And that's something that will allows you to make aliases for or functions for in the future, to kind of quickly say "Alright, run Git. Structure the data that's coming from these streams of strings into a table, and then use it going out." And of course, the same is true on the output as well. So we can go from a table, we can pull data out of a table and then call into external commands using the stream of text that was sitting in that table.

**Yehuda Katz:** And from a user perspective, what this effectively amounts to is that when you say "open Cargo.toml" or "Open package.json", for the most common situations that people have heard of or use (and that includes indie files; a lot of common cases), you just get a table. You don't have to figure it out. And I think what we kind of expect long-term is that the format system itself will be like a plugin system. For example, the .gitconfig is in a particular format, or .gitkeep is in a particular format, and we would expect some of those things to be built in, but a lot more of them to just exist in the world for you to install.

**Jerod Santo:** \[00:40:03.18\] One thing that I thought was really cool - and it seems obvious once I've read it - is in terms of user adoption... You have this MVP set of commands that you all have implemented, and plugins and all that stuff will be built out over time... But if you do a command that isn't supported by Nushell, it just shells out directly as a fallback; on Windows it's CMD, or on Unix it's Bash... And then it just passes standard out, standard error, all this stuff, and then it sucks it right back up.

**Yehuda Katz:** So Vimworks, right?

**Jerod Santo:** Yeah, exactly. So that's the thing... On adoption, it's like - these are all cool things, but when I fall outside of the stuff you support, I don't wanna just give up my current workflows.

**Yehuda Katz:** Yeah. And Jonathan was really aggressive about this stuff, actually. I think a really important principle is that their escape valves have full coverage. By the way, Vim is an example. Maybe listeners might be thinking "I don't really use Vim." But it's actually pretty common for people's Git commits to open up Vim, workflows like that... And if Git commit doesn't open up the editor that you're used to, that's really a fatal problem.

One of the last things I did before the MVP was add an escape valve where if you put a caret before any command, it forces it to be external. We have ls; maybe you want the real ls. Caret ls does that. Jonathan has been really solid about making sure escape valves worked fully.

**Andrés N. Robalino:** And you've got the feedback immediately from countries in Europe saying "oh those keystrokes are impossible!"

**Jerod Santo:** Which one -- it's the caret?

**Yehuda Katz:** Yeah, the caret is not -- somebody should make a list of ASCII characters that are in the intersection of all keyboards.

**Andrés N. Robalino:** Let me see if I can find it. That was interesting.

**Jerod Santo:** This is something I haven't heard... So certain keys are just not on these other keyboards? Or they're hard to reach.

**Yehuda Katz:** No, they're literally not there.

**Jonathan Turner:** Some European keyboards don't have some of the keys.

**Jerod Santo:** What's wrong with these keyboards? Get all the keys on there. They need extra characters...

**Yehuda Katz:** Yeah. I think the bottom line is there's a sort of intuition that people have about which characters are permitted. I honestly have skepticism that caret is a bannable character. I think caret actually shows up in a lot of random things. I use a program - I don't remember what it's called... It's called WizKey, on Windows, where you double-hit Ctrl and it gives you all the characters. I suspect if you use a keyboard like that, you will end up with a solution like that for some characters.

I think I'm always pretty open to hearing that something is very painful for people and we should consider some alternative.

**Adam Stacoviak:** Would you all say that this table UI is Nushell's secret sauce, for a lack of better terms? Its core underpinning of what makes it what it is?

**Jonathan Turner:** I think that definitely gives it a lot of the power. Some of the other cool things about it? We were talking about the plugins... So you can just create a plugin in Python - ultimately, that's the idea - and that gives you all the access to the same tables that we were talking about before. So there's a couple of pieces that work together to give you that secret sauce.

**Adam Stacoviak:** What I'm trying to get at is how did you get there? So if this is such a great way to display and fine-tune data, what's returned to the prompt, and stuff like that? What did you have to go through to get to that realization? How many other things were on the cutting floor?

**Yehuda Katz:** It was a realization from PowerShell, first of all. PowerShell sort of does it. One of the things that was annoying to me about PowerShell that motivated me to work on Nushell in the first place is that PowerShell just doesn't double-down that hard on any of these things... So it's like "Oh, well we don't really have array literals. We have a syntax that effectively is an array literal. Oh, you want a nested array of arrays? Good luck, there's many Stack Overflow questions about it." And the same thing is true about tables. There's tables, and lists, and depending on what ends up happening, it's very easy to fall into a situation where you expected a table and didn't get one in PowerShell.

\[00:44:08.15\] I really like tables, and I think Jonathan convinced me early on that we should really double down on it... But there's also another reason, and I think for me this is more fundamental, which is I just think people understand tables. I think spreadsheets are maybe the universal programming paradigm in all software. Everybody has used Excel.

**Andrés N. Robalino:** Yeah, Excel changed the world.

**Yehuda Katz:** One thing I'm hoping people get from Nushell is a realization that a lot of the vocabulary, the way that people think about data modeling could often be turned into a table-based paradigm. Not because it's perfect, but because it's so universal.

**Jonathan Turner:** Yeah. I was thinking about it this way, too. My gosh, I've been working on programming languages for 14 years or so... And studying what makes a programming language popular, what do you do to make it rise in the ranks. And if you look at the programming language ranks, you always see things like Java, or Javascript at the top, but no one ever really measures the real one, which is Excel, because it's an order of magnitude much larger than any of the other languages. Like you're saying, it's so ubiquitous, it's so common that you don't even think about "Wait, that is a data language that we've been using for however many decades at this point."

**Yehuda Katz:** Honestly, one of the mind-blowing things the other day is we -- so we need object literals at some point; we don't have them right now... It's actually been somewhat of a revelation how much of a shell is some few, small number of things... But anyway, we realized that row is actually the same meaning as object, and table is the same meaning as array of objects. Actually, Toml has some of the same... It's not totally double down, but Toml calls dictionaries tables, as a vocabulary matter. And I think thinking like row - a row literal is the same thing as an object literal. A lot of this was known to us intuitively early on, but seeing it being crisply true, rigorously true, is a revelation.

**Jerod Santo:** So Andrés is over there, he is pasting into our chat just cool stuff that happens...

**Andrés N. Robalino:** Curl is not on Nu, for instance. It shells outs. You get the output from that and you process that string from JSON, that builds a structure for you (a table), and the get command basically gets the field from the structured table... \[laughs\] So if you want to think about a higher level than mapping, you know that JSON is an object or many objects, and get would be like -- because you could put a path in there; if you have a root object called user on a JSON and you could say get user dot property dot property and it basically translates as an access to table for a given row.

**Jerod Santo:** Yeah, so we'll also include that in the show notes, but I'll just read it... So the command here is "curl api.github.com", so you do that... And curl - that's not a Nushell curl; that's just the curl-curl, right?

**Andrés N. Robalino:** That's the standard curl, yes.

**Jerod Santo:** Yes. And you can pipe that into "from-json", which is one of your built-in commands...

**Andrés N. Robalino:** Which is a command that works as a filter.

**Jerod Santo:** Okay.

**Andrés N. Robalino:** There's two types of commands.

**Jerod Santo:** Filters, and what's the other kind of command? An execution command?

**Yehuda Katz:** I think sync. We call them syncs. I don't know if that's the long-term name. The first part is like a source, the last part is a sync.

**Jerod Santo:** Source and sync, gotcha. And then the last one is get, and you pass it the string current\_user\_url, which gets that out of the JSON that's returned from the API. So that get command - that's a generic thing, that's not just for JSON.

**Yehuda Katz:** Yes, yes.

**Jerod Santo:** It's for anything that is in this format.

**Jonathan Turner:** \[00:47:59.22\] That's right.

**Andrés N. Robalino:** For any given table. And let's assume if the api.github.com returned you a Toml file or a Yaml file or an XML file, there are equivalent inside Nushell for the moment, called "from- the given format", and what the command does is it takes the output from what's being piped into it and gives you back the structure. Just like ls gets you; ls gets you back a structure. Then you manipulate the data, and that's it. You can even do "get something", "where something", from the very beginning, from the pipeline.

**Yehuda Katz:** And I think it's really important that these commands from JSON exist, but I also wanna just say, if somebody is actually doing an HTTP request, the open command, which is the general-purpose thing that opens files - it does effectively the same thing, but it also looks at the content type of the response and automatically processes it, unless you type --raw.

So if you're actually working with HTTP APIs, open will save you a little typing, and not make you have to know what exactly it is.

**Jonathan Turner:** I think it's called fetch. I think we've split that, but yeah.

**Andrés N. Robalino:** \[laughs\] Yeah, yeah. Jonathan, that's not fair though...

**Jonathan Turner:** \[laughs\] We did that like yesterday, or something...

**Andrés N. Robalino:** So it might bring confusion. We left "open" for one thing, and we left "fetch" for... We didn't even think about the get command, that it might do the actual get request with something, because there's the Postman that Jonathan did, that does post HTTP requests...

**Yehuda Katz:** There's another somewhat important technical thing we didn't talk about yet, which is basically because streams are so... So I don't have a particular horse in the race on the paradigm wars, but streams really lend themselves to functional style, and what that means is that in the current system - and I'm gonna work really hard to make this true, as long as I humanly can - there's no mutation in the system at all. But there's mutation in the real world.

Let's say you're trying to open Cargo.toml and bump the version number. It wouldn't do anybody any good to be like "Well, you can produce a new Toml, but sorry, there's no mutation." That's not a very useful thing. The way that we see the world is you can open something, you get some data, then you can functionally change it. The inc command, for example inc version --minor, and then you can pipe that into a save command.

Basically, anything that's not in the system - files, or even the configuration... The configuration, of course, has to be mutable; it wouldn't do anybody any good if the configuration was immutable. That doesn't even make logical sense. So there are some root kinds of state that are like files, configuration - and I'm gonna get to HTTP in a second - that are mutable, so the idea is that the system itself is built around, like... Ink gives you a new copy back, but eventually you just wanna save something, so you can pipe the save, which actually does produce a pretty nice one-liner. It's like "open Cargo.toml pipe to ink version --minor pipe to save Cargo.toml" That's pretty short. But one thing that's pretty nice about all that is that if you don't pipe the Cargo.toml, now you have it; now you have the output. So maybe you wanted to post it to a web request, or maybe you wanted to put it in the registry on Windows.

**Andrés N. Robalino:** You can also avoid specifying the file where you wanna save at the end when you save, because Jonathan added metadata support, and it remembers the origin. In this particular case, with the plugin ink command, if you do that save on it without passing in the file that you wanna save, it remembers from the beginning of the command that you opened that file, and it will save to that file.

**Yehuda Katz:** \[00:51:54.11\] Which is another thing -- so if you use Nushell, you'll probably notice there's really awesome error messages. I'm not gonna say they're perfect, but compared to PowerShell or Bash, the error messages are usable. They're like a programming language... They're pretty good.

**Adam Stacoviak:** Not saying it's better...

**Yehuda Katz:** It's not a little better.

**Jerod Santo:** It's not a little better...

**Andrés N. Robalino:** This reminds me about Yehuda's wonderful PowerShell blog posts... \[laughs\]

**Yehuda Katz:** So I think our errors are good. One of the ways that we get really good errors is that the -- so I'm like somehow a parser person now; I just do a lot of parser work. The parser basically maintains the original source locations of every piece of syntax, and then something that most languages don't do is that every value that gets evaluated keeps around the original source code.

Let's say you open Cargo.toml and then you try to increment the whole table. That's not legal; you can't increment a table. So you wanna give an error that's like "Hey, why are you trying to increment a table? That's not legal." And what we do is we say "Okay, can't increment a table. The original value came from..." and then it underlines open Cargo.toml. So first of all, that's pretty cool, and because we're not worried about being the fastest possible thing, that's a really nice thing. But second of all, that's the same metadata that allows save with no arguments to work. Basically, every value that you ever see in the system, to the extent possible, has a place where it came from.

**Andrés N. Robalino:** I'd love for Jonathan to tell the enter story. \[laughs\]

**Jerod Santo:** Let's hear it.

**Jonathan Turner:** Oh, yes... So one of the things we haven't really talked about is the importance for things to be fun.

**Adam Stacoviak:** Yeah.

**Jonathan Turner:** Like, we have these ideas, we have these wild-brained ideas, and it's okay to chase some of them down... Because you can't create a really interesting product by saying "Alright, I'm putting my PM hat on, and you're gonna check this box, and you're gonna check this box." That's boring; no one wants to do that.

**Jerod Santo:** It'll kill you.

**Jonathan Turner:** Exactly, you'll burn out. So the idea that you have this shell, "Let's make this fun for us, too..." So I was laying on the couch one day and I had this fever dream of an idea, which is "What if you could enter into things that are not a directory?" I wired this up as a demo and I showed Yehuda. I said "Look, I can now enter into a Toml file, enter into a JSON file", and what it does is that -- you know, when you think about a shell, you can cd and ls around in a file system, right? You do that all the time. But why not be able to cd and ls inside of the structure of other files? So you can jump into the JSON and cd up into one of its fields, and ls and then see what that structure is in that field.

So I wired this together and I showed Yehuda. He's like "Wow, that's super-cool! I'm not sure if it's useful, but it's cool." \[laughter\]

**Yehuda Katz:** I'm always a little too negative...

**Jonathan Turner:** Yeah... I left it there for a while, and Andrés kind of joined and was playing with it, and said "This is cool! This is like one of those things that when you see it, you keep thinking about it... Like, why would you do that? That's weird. That's neat."

**Andrés N. Robalino:** Yeah, the same way as I saw the project, I'm like -- yeah, I mean, you know... Same with enter.

**Jonathan Turner:** And I think you were about to move--

**Andrés N. Robalino:** I even wrote a test for it, and it was right when Jonathan removed the feature. I'm like "What?!"

**Jonathan Turner:** Yeah, we were about to remove it.

**Jerod Santo:** Is it on now? I'm looking forward to trying this.

**Jonathan Turner:** So the enter command - you get in, you get out. And we were trying to button everything out for the release, because it felt like this is cool, but it doesn't really mesh with the philosophy of "Oh, it's a table. It's values flowing through." We thought we had to be nice and regiment it with our MVP.

\[00:56:02.11\] And Andrés kept tugging at it, and saying "No, this is cool. This is cool. Don't take it out." And he finally on chat one day said "Why don't you just have enter enter other directories, and you can think of each directory that you enter." So not cd, but enter it. So if you enter a directory, it just adds it to a ring buffer of other directories. So now we can have all kinds of different shell types, if you will. Some are just a directory that you're in, and you can hop in and out of that directory.

So you might use screen, or you might use tabs in your terminal emulator, whatever, to kind of simulate that; in one shell instance we can have you jump in and out of directories, or in and out of a file... Or potentially, in the future, Andrés is working on this - help shell, where you can jump into the help system, and cd around, and ls, and ask questions... And you use the same muscle memory that you have for file systems, but you're working in other types of structures.

**Yehuda Katz:** Right. And PowerShell actually has this feature. It's called a provider. It's just that the way to ls in Windows is ls, but on macOS and Linux it's Get-ChildItem which is a very long thing to type. I think there's actually two separate things that happened at once here, that we conflated here for expedience, but I want to unconflate. So there's the "What is ls?" Ls is really just saying "List the current context." And like "Why is file special?" The way that we solved that problem - there's a trait called shell, which has stuff like cd, and ls, and mv, and stuff like that. In PowerShell that would be called a PSProvider, but all it is is the basic functionality that you need to move around inside of a tree. So that's one problem that we were trying to solve.

The other problem we were trying to solve, and the thing that Jonathan was super-excited about, that I was like "I don't know what the point is..." - I do that a lot to Jonathan, and I'm sorry... It was if you make a second shell, it seems like you wanna go back and forth between them, or something... And the thing that I wasn't sure was useful was if all it is is pushd and popd, or whatever... I don't like the ergonomics of pushd and popd, so I don't actually want that. And what Andrés figured out was we can just have another command called shells, and it could just give a list of them. That's maybe not the perfect answer, but it makes it really useful.

If you're inside of the Rust new project and you enter Cargo.toml, now you type shells and you see the new project and the Cargo.toml. You can move around inside Cargo.toml, and you could switch back... Maybe you're like "In order for me to know the version, I need to cat the version file", so you can go back in the main file shell, do that, and then come back to being inside of Cargo.toml. I think that's a good, simplistic, but very high-leverage answer. The answer is "Just have a shells command." And as Jonathan was saying, now that we have the concept of general purpose shell, the help system is just another way of navigating around -- it's like, you're basically looking at the metadata lens on the command tree.

**Break:** \[00:59:40.05\]

**Jerod Santo:** Shells in shell... So could this potentially -- I love how it started off as just a fever dream, and it ended up being kind of a core thing, that might make this better in terms of... Could it replace a screen or a tmux? If you had an interface into switching back and forth...

**Andrés N. Robalino:** Another of the ideas was -- that's how things emerged, is that you could also enter other sessions remotely, and do something like \[unintelligible 01:02:00.19\] you would have just under the list of your shell sessions that you have in there; it could be any type.

In the MVP for the next version we have a basic help system... So I was thinking about it, because to be frank, on other shells - Bash, etc; I won't say PowerShell, but let's just say "other shells" - usually the help commands are just... I don't know, we're all used to it being painful. \[unintelligible 01:02:35.04\] you just get used to it and accept the reality... But this is something fairly new, and we need to figure out also if users are going to use the features. This is what Jonathan was not convinced enough for the enter command; that's why he removed it, the original feature. Like "Okay, this is so cool. We can inspect a file, a Toml or a JSON. But will people actually use this?" It's interesting, but people might not use it.

So what if of the all given shell sessions there's also a help shell session, where you can explore the command, and you can easily change with the shell commands, because it marks you what current shell you're at. So when you need help on some command, instead of using the usual help command that you keep working, you have at your disposal just another shell in there, under the shell ring, and you can just cycle with next and previous, just a single command, and whenever you need help, it's easy. It's simple.

**Yehuda Katz:** I actually realized there's some pretty fundamental thing we didn't say yet, which is that this is a PowerShell thing, but not a Bash thing. Every command has a signature. So command signature has its types, and the reason I prioritized that in the first place was just to reduce the amount of boilerplate for errors. So if you say that something is supposed to be a path -- like, it's not a path; if you give me a number instead of a path, that's not a path, and then I give you a good error.

\[01:04:12.18\] I think we'll eventually add completion. We'll basically make completions sensitive to the types, so if something is supposed to be a path, it will support path completion; if something is supposed to be some other date, it will do date completion. However, that same signature, which is now basically mandatory -- you could say that the signature, like in any programming language, is a list of anything, but that's pointless. That same signature can now be used as a column in the help table. Basically, that's cool.

**Jonathan Turner:** I just had this idea when Andrés was talking... I'm just gonna put it here for the record. We'll go implement it after this podcast.

**Andrés N. Robalino:** We'll file the issue. \[laughter\]

**Jonathan Turner:** Okay, so check it out. If you we give you help in a structured, table-y way that you can work with - which is our plan; you type help and the command name, and we give you a structured table that walks you through it... We wanted to put examples in there; we could add each example as like a discreet thing that you could pull out and then just run with another extension of the same command, which I think would be kind of cool.

**Yehuda Katz:** You could even make it have a templated example, where you could just give it the variables to fill in.

**Jerod Santo:** Yeah, they're just coming up with new features on the spot here. I like this.

**Jonathan Turner:** That sounds awesome! Let's do that! \[laughter\]

**Yehuda Katz:** I think the answer is for basic kinds of tmux usage, yes. The thing that I'm not totally sure how to deal with right now is - as we've discussed before, we care a lot about the Vim case working, and that means that we just wire up the standard out. That's what we do.

**Jerod Santo:** Right.

**Yehuda Katz:** Basically, what that means is let's say you make a new shell, and inside the shell you do the equivalent of a tail command. That's gonna keep printing output. You kind of do need a way to keep that running in the background and come back to it, which involves like something-something pseudo-terminal, whatever. I don't find it hard to believe that we could make that work, in some way... I just think that -- the thing that tmux is very good at, that the shell system as currently implemented is not good at, is allowing you to have persistent output that is not in your face. So the UNIX shell background system \[unintelligible 01:06:20.28\] That's not good. That's not what you want.

I'll say one more thing about this enter thing, which is that there's a feature that I still want, that is in the same space, but not in conflict, which is the ability to -- let's say you're inside of a Rails project; it's actually pretty common to just wanna run rails s in the background, or like you're in Express, you might wanna run npm start in the background, and then in the foreground your normal work... And I really want a way to put a file in your repo that just says "When I start, make a background shell for npm start and then give me the foreground shell", and then we would use the shell system to let you go back and forth between them... And I think that feature to me is, for all the things that I personally do, is like a big workflow enhancement, and I really want it. That's honestly why the enter thing in the first place was like "That's not quite..."

Also, kind of related, is I really want the ability to -- I think we're gonna do this, but I want directories to be able to have files that give custom environment variables in path. Right now, the path and environment variables are like a global thing, and then people might have dot n plus some extra hacks to make it work. I kind of want the ability to say like "Here is the path for this directory, here is the environment variables for this directory", and then Nushell just makes it be -- like, before Npm and Bundler, it used to be like whatever happened to be in your gem directory or your package directory was accessible to you. And then it was like "No, that's stupid. That should be something that's checked into your repository, and is actually application-specific." And I really want the shell to have the same structure. You don't have to put everything in the universe in your path. Maybe this directory has a special -- and I think that's usually true, basically, and I think we should do it.

**Jerod Santo:** \[01:08:21.13\] Okay.

**Andrés N. Robalino:** Yeah, someone in Discord was saying about configurations saving, opening, fetching, changing... Because we also have a config command, and I think this aligns well, if we could leverage this and do something with those configurations. It would be very nice if we could work with configurations that way for the shell.

It's interesting, because we're so used to how things have been done since the '80s with shells. For instance, when implementing cp, or np, we question ourselves "Should we have a recursive flag or not?"

**Yehuda Katz:** Like, why do we need -R? What does anybody wanna do when they're copying a directory? Come on...

**Andrés N. Robalino:** Very basic stuff. Like mkdir, okay so, do we implement the -p equivalent such that if you put multiple, in a single argument, and you specify say three deep-level directories? Okay, you specify -p creates the three directories.

**Yehuda Katz:** Just do it.

**Jerod Santo:** Just do it all the time. Yeah. Who doesn't want that?

**Andrés N. Robalino:** So it's a completely change of mind at all the levels of implementation, everything. It's been a fun experience.

**Jerod Santo:** That is fun. Rethink things from the bottom up.

**Andrés N. Robalino:** Yeah.

**Jonathan Turner:** Exactly.

**Jerod Santo:** So we're deep in the weeds, and I'm loving the technical talk here... If you wanna talk about some of the community stuff you guys have going on, because we're running a little bit short on time, and you have a lot more in this project beyond just the design philosophy of the technical side. You have the community side, you have a book going on... You have this amazing, multilingual scenario going on, you have cross-platform, Windows etc. So tell us about the higher-level metagame that's going on with Nushell.

**Yehuda Katz:** I'll mostly talk about community, because that's the part that's the most near and dear to my heart. I am personally - and I think everyone here - is a strong believer in just open communities, people doing work together that are not structured inside of any company, where everybody is part of the project by virtue of their individual skills, not by virtue of their company membership.

There are basically two ways to run a project. You can run a project where the project is hosted at a company, and if you are an employee of the company, you intrinsically have higher status than a person who is not there... And you can tell when this happens. People talk about \*the\* community as an outside thing; or you find out about things as part of corporate announcements, or long after they were designed. And if you're a regular person just trying to help, you very quickly discover that that is a bad use of your time, because you can't actually be in the conversations, unless you become a partner of the other company. And as a person who works in a small company, I am never gonna be a partner of Facebook; that's not like a sensible thing for me to try to do.

So I'm not here to reject the idea that there could be Facebook-owned, or Google-owned, or even Mozilla-owned open source where being an employee of that company gives you a higher status, but I will say that the alternative is under-discussed, despite the fact that it is popular. So Rails, Postgres, Rust, Ember are just some relatively large projects that don't have a corporate host where your status matters. And I think there's a lot of things that come out of doing that.

Let's say you stop working at the company.

\[01:12:05.00\] I'm gonna use React - not to make any specific claims, just as an example, because it's been around for a while. If you're a Facebook employee and you stop working at Facebook, your participation as a member of the React core team significantly reduces. Everybody knows that. And I just think that's lame. As a person who wants to contribute to open source, I actually have been in that situation a bunch, where I was working at a company on an open source project, and left... And I've always wanted a structure in open source projects I work on, so that your involvement in a company is a matter of sponsorship. Your company is helping you work on the project, but just because you leave that company has no real impact on your intrinsic status.

That was a whole bunch of stuff I said, but that's basically the community philosophy: "I am not special because I work at Tilde." It's not a surprise that none of us really -- I guess Jonathan works at Microsoft; is that a secret, I don't know... \[laughter\]

**Jerod Santo:** "I guess..." Is this true?

**Jonathan Turner:** It's true.

**Adam Stacoviak:** Do you work at Microsoft, Jonathan?

**Jonathan Turner:** I do.

**Adam Stacoviak:** Confirmed. There you go.

**Yehuda Katz:** But that doesn't matter. That's not the important thing. And I think it might matter in the sense that Jonathan has to get approval if he wants to contribute on worktime. But basically, what I'm trying to say here is I believe very strongly in building a community that is welcoming, that accepts people of any different skill level.

We've had already contributors who come in just to do - "just" is really the wrong word here... To help us set up our CI environment. And that person does something that I do not know how to do, and is an extremely high-value, high-status contributor to the project. So I believe in that, and I think all that is just much easier when you just say you bring yourself to the picture; your company doesn't tell you anything about your status.

**Adam Stacoviak:** Right. So you're saying Nushell is its own entity; it's not under a corporate banner. It's not represented by a corporation, and if you're involved in it, it's because you've been sponsored by wherever you work, or the like.

**Yehuda Katz:** Yes. There is not corporate management chain that has any control over Nushell. And if you just think about that heuristic, if you think about other projects that you think of as being this company's project, there is a project manager, and a director, and a VP, and all the way up to the CEO. That is the management chain that decides what that project actually does... And that is the thing I'm saying we do not do.

**Adam Stacoviak:** What do you say to that, Jonathan?

**Jonathan Turner:** Yeah, I would add too that there's another piece to that philosophy that works together, which is even though the three of us are "core team", if people come and they have ideas, just because we as the core team have an idea does not make that somehow way higher value. So the openness that we have with each other should be with everybody, and the ideas that come - it's important to keep it on-track; you don't wanna go way off the rails. But there's a lot of energy. If they wanna do CI... You know, we worked on a book; I wrote a book for Nushell, and then Andrés translated it to Spanish, and then someone came along and said "Here. Here's the Japanese version." It's like, "Wow."

**Andrés N. Robalino:** And Chinese - someone just said if they could translate in Chinese, Jonathan.

**Jonathan Turner:** Yeah, I know. It's awesome.

**Andrés N. Robalino:** \[laughs\] It's great.

**Yehuda Katz:** I used to have a heuristic that I used in my head, which is like "How does it feel to be a person who was pretty active, but not on the core team?" and the answer should be "Pretty close." The rules that we hold ourselves to involve putting our ideas out there in public, getting some feedback, getting general agreement, or at least approval from the wider community that this is a good idea.

I also just wanna say that this is not any of our first rodeo, and to the extent that this is the first time anybody's hearing anything like this, or feels like it's a pipe dream, I feel like Ember and Rust are both very successful. You don't have to believe that Ember is a successful project; I'm not taking on that fight right now... \[laughter\]

**Jerod Santo:** It's a different show.

**Yehuda Katz:** \[01:16:13.26\] ...but it has longevity, and a large community of people using this model, and Rust is also an even bigger community, a little newer, that uses this model. And I think things like Postgres and Rails are other examples. So I just think that people under-appreciate... Everybody thinks that, well, the money has to come from somewhere, so that means we have to give control of our project to the management structure of the company that's funding it, and I just think that's wrong.

**Adam Stacoviak:** Let's dive into an example, and only because, Jonathan, I know where you work; and Andrés, I don't know where you work, so I'm using Jonathan for this example because of that... So what is Microsoft's say in your involvement in this project? Do they literally sponsor you to do this? How are you enabled to put so much product/project management, PM status into this? It seems like you've definitely been quite invested. You wrote a book, which got translated, and we just talked about that... I mean, how do you do that?

**Jonathan Turner:** This has actually been kind of a nights and weekends project for me. When I had the idea, I got hooked on it, like Andrés was saying earlier. I got really excited about "Oh, let's just build it, and I'll just invest my energy into it", and then of course, months later I'm still working on it. So there's definitely some of that, where all that energy was kind of just channeled, and it was just the hobby energy.

We put out the public announcement. So I wrote up the blog post, and put it on Hacker News, and the thing shot up to the top of the page, and I'm like "What's happening...? It's got 200 votes, I should probably tell someone." At like over 1,000 votes I was emailing my director, saying "I apologize for not telling you ahead of time that I'm working on this thing on the side. I hope it doesn't conflict with anything..." And they've been super-supportive over there, actually, which - I just wanna give a quick shout-out... I work on the Azure SDK team, so there's no conflict. I'm not on the PowerShell team at Microsoft, working on a PowerShell competitor; it's nothing like that.

**Jerod Santo:** What a relief...

**Jonathan Turner:** My director looked at it and said "Hey, this is totally cool. If this is your way of giving back in open source, your way of using your creative energy, keep going. Maybe in the future Microsoft will jump on and maybe write their own plugins as part of it."

**Adam Stacoviak:** That's awesome.

**Jonathan Turner:** That sounds good, that sounds good.

**Yehuda Katz:** I think people just largely under-appreciate the -- my view of how permissive open source works is that it's just like a bunch of engineers circumventing management to work together. Now, maybe that's not the right thing to say right after Jonathan just said he got permission... \[laughter\]

**Adam Stacoviak:** Your words, not his.

**Yehuda Katz:** I actually don't mean like your direct manager. I think a lot of times, if you wanna become a partner with -- I keep wanting to say React, because I know it, but it's like... There's a lot of things. If you wanna become partner with React, the right way to make that work is through business development. There's an open source way of doing it, and especially projects like React, which are kind of hybrid models, make it a little easier to do the normal open source model... But there are other projects. If you wanna contribute to any open source part of Google -- AMP, or Google App Engine, those projects, you just have to actually go up your management chain a bunch of times, and get them to go to a person who's pretty high up the management chain and get it working. And as you go up the management chain, people have less and less of a clue of why you would care.

\[01:19:45.05\] So the thing that I think works really well about permissive open source is that it lets me talk to Jonathan and Andrés, and be like "Hey, let's work on this project together", and then all the people in our Discord and all the people submitting pull requests are not having to get approval and create business development arrangements.

I think that whole story basically means that there's this -- it's like a loose confederation of not just engineers; it's engineers, people who wanna do dev ops, people who wanna do design, build websites, infrastructure, whatever. So a loose confederation of those people. So it's not about what skills you have, it's about the fact that you did that without having to ask your CEO for permission. And it's not because your CEO doesn't care, it's because everybody who runs a plausible company in tech kind of agrees that it's okay to contribute to open source... So there's this general agreement that open source is an acceptable way for people to collaborate outside of the management structure. And I think that's just good. We should leverage that more. It was hard to get.

**Adam Stacoviak:** Yeah. Multilingual, got a book, got a community... Where does community happen?

**Yehuda Katz:** Discord is the main chat location.

**Andrés N. Robalino:** Oh, you should join. We're having so much fun there.

**Jerod Santo:** I believe it. Y'all sound like you have a good time.

**Andrés N. Robalino:** In the general sense. I've been sharing Latin-American food, people laugh... It's fun. \[laughs\]

**Yehuda Katz:** Nushell.sh is the very bad website... Sorry, Jonathan. Bad on purpose.

**Jonathan Turner:** It's all good.

**Jerod Santo:** Sorry because you made a website, or sorry because you've just called it a bad website?

**Yehuda Katz:** No, it's bad on purpose, but then I...

**Jonathan Turner:** No, it's bad. It's real bad. But we kind of wanna say "Look, this thing is 0.2.0. We have all these cool ideas, we made our first release... Please do not take this and think it's got everything that you possibly want out of a shell." So we're trying to message that...

**Yehuda Katz:** If you click on GitHub, then you will see a readme. In the readme there's a link to the Discord, and some other places. Discord is really the main place where very rapid conversation is happening. We're also doing a pretty decent amount of volume on the GitHub issue tracker, and I think so far that's going okay. And I think if somebody is -- basically, I guess what I would say is if someone is enthusiastic about contributing, definitely hop into Discord and we can figure out what makes sense for you. If somebody just wants to tell us about an idea that they have, in a very async way, also feel free to file an issue.

We've had a dozen people who said "I've been wondering when the next shell is gonna happen. I've been thinking about that for a long time. Given that it happens, here's my idea." We are totally open. I can't promise that those issues will stay open forever, because triage is important, but we read all that and have conversations in there.

**Jerod Santo:** I guess we haven't asked about the status... I assume the book is the best way to get started if you wanna play with the thing. But are we in the "Play with it, but don't really use it" stage, or are we in "Go ahead and give it a shot. Maybe you can use it as your replacement shell"? What's the status there?

**Jonathan Turner:** I think we're transitioning into -- so we use it; I use it daily. I think most of us dogfood on it. And it's at the point now where it's stable enough, things generally work well enough that you can just use it as a shell... But I think it's just recently kind of crossed into that, so don't have this assumption that -- you know, I was just watching Discord earlier before this podcast, and people were like "Well, can you do command and and, like, ampersand ampersand, and command?" It's like, "No, it's not there yet." We still have a ways to go to get all the things that you would expect.

**Yehuda Katz:** Right, and we crash a lot. I think the shell still crashes a lot, and...

**Jonathan Turner:** It's not actually crashing. It's a Rust thing, it's "panicking."

**Jerod Santo:** It panics, instead of crashes... \[laughter\]

**Yehuda Katz:** The shell aborts a lot. "A lot" is actually an overstatement.

**Jonathan Turner:** Yeah.

**Yehuda Katz:** It is not hard to cause the shell to abort, which is largely okay if you ran it from cargo run, or just ran the executable and then used it... But if you try to make it your main shell and open your terminal and have it be open, then we'll close your tab a lot on that.

\[01:24:00.14\] So MVP 2 - we have to revisit anything we thought before we release, because of how many inbound contributors we have... But the idea for the second MVP release was gonna be it makes sense to make it your shell, which involves doing something generic to every panic, and just in general reducing the amount of panics. We don't need a panic for a bug. If we have a thing that -- you know, there's a common idiom in Rust, where it's like "Oh, I really don't expect this to ever be possible from a programming perspective, so I'll just unwrap here..." That is fine, but if you were wrong, then you are gonna crash the shell. I added an error type that's like "Something weird happened", and it seems fine to turn that into a regular error.

**Adam Stacoviak:** Yeah.

**Jerod Santo:** I love the spin that you guys just put on this: "Our software doesn't crash. It panics, and then aborts." \[laughter\] I'm gonna start using that. My stuff never crashes.

**Yehuda Katz:** The reason Jonathan said that is that usually when people say "crash" in the Rust space, they're talking about a segfault, and segfaults are security vulnerabilities... And Rust makes some promises about security, and so when Rust makes those promises, it talks about never crashing, by which it means it never has the segfault that produces a security vulnerability. Anyway, that's the reason.

**Jonathan Turner:** It's that, but it's also a lot of what we wrote, we just kind of knocked out code as quick as possible. So we take a lot of shortcuts, and those shortcuts lead to "Well, okay, the condition wasn't met. Panic. Fail." And it just jumps straight back to the original terminal. There's a lot of that, and we just need polish.

**Yehuda Katz:** And I actually think this is a great thing about Rust, by the way. Rust is mega-rigorous. Rust makes you think about a lot of things... But it helps that we were able to ship an MVP of a new shell with a bunch of placeholders. Not that many, really... But I don't think people appreciate that enough about Rust, that there's enough escape valves to prototype things.

**Adam Stacoviak:** So if you all had a magic wand, and this show is over, it gets released, the world loves it, whatever, they're learning more about Nushell... What would you want to happen? What do you want people to do because you put this out there? What's the next step for adoption? That's the success of open source not to die, right? To be adopted. What is that?

**Jonathan Turner:** A couple of things that I would love to see... We talked about plugins a little bit. I would love to see the beginning of an ecosystem of plugins, of people experimenting with it, kind of stretching the limits of what's possible, so that the design that we end up with at 1.0 is fully-fleshed out and can do anything that you'd wanna do in a plugin. And that's across languages, so the design makes sense. "Oh, I can write it in Python, I can write it in Javascript..." So that's certainly one thing.

\[01:26:43.11\] One thing that we were talking about earlier was different language communities jumping on... So we have a Japanese translation, and maybe in the near future a mainland Chinese translation... So having communities of people pick it up and run with it, from early days, I think is amazing, because that's something that we wanna facilitate. We wanna make the community open not just for the English-speaking world, but create other communities in other languages.

**Yehuda Katz:** And along those same lines, I think for me the definition -- like, why did I care in the first place is I really want more people to not feel scared of the shell, and it's very easy for us to forget that. When I first started software -- Leah, the CEO of Tilde is in the taking a Flatiron course now... And she happens to have been using the shell for years, because she maintains websites with GitHub. But one of the first things that they tell you is "Don't be afraid. This very scary thing is not actually that scary." And every single programmer has to go through that "Don't worry. This is not so scary." It actually is scary, but you'll deal with it. It's worth it.

One thing that I'm really -- I would consider this a big success, and it's my goal... A lot of people who know Excel don't feel scared; they feel like it's normal.

**Adam Stacoviak:** Yeah. That's true. Actually, I know somebody who runs a very successful HVAC system, large-scale system install and servicing company here in Texas, and he runs his business off of spreadsheets. He has a very fast way to very accurately give a proposal within a day, or even a couple hours, he says... And it's because he wrote this Excel spreadsheet that he wants to one day turn into actual software, that could then be of service for other HVAC providers throughout the world, for example. So it's just so wild how that program is so accessible... And he's not a programmer, but I'm like "Dude, you're a programmer, because you made this thing that powers your business. That's software."

**Yehuda Katz:** One thing I think about a lot is whenever I go to the airport or go to Target, the person behind the counter is using a 1980s era terminal.

**Adam Stacoviak:** Right.

**Yehuda Katz:** The other day someone was typing in my email address, and then I was like "@gmail.com", and they were like "That's F4." They had made F4 the "@gmail.com".

**Jerod Santo:** Awesome.

**Yehuda Katz:** I don't actually think that the terminal itself is that scary. There's a huge amount of relatively entry-level knowledge workers in the country, or even shop workers who are using a terminal. It's just that the ways that terminals work are so broke; I don't mean broken, but broke. It's just not worth it. I'm not gonna tell a random person to use a terminal, because then I'm signing up for teaching them all the weird, like "Why does Bash have an arithmetic parsing mode?" That is not a thing I want to explain.

**Jerod Santo:** \[laughs\] "That is not a thing I want to explain..."

**Yehuda Katz:** I think people underestimate... People think it's the terminal environment. I don't think that's true. I think it's the terminals that we have, the shells that we have.

**Adam Stacoviak:** What's this Easter egg you have, Jonathan?

**Jonathan Turner:** Yeah, I was thinking... A fun one for the end of the show, for people that made it all the way through the end through our philosophy...

**Jerod Santo:** Bonus!

**Jonathan Turner:** ...and our technical... Alright, how about this - so one of the things that has been a going philosophy for me in Nushell is that we should be able to work with any kind of file. Now, that's future-looking. I cannot make importers for every single file type. But one of the kinds of files that I wanted to do was to open binary files. So two things that you should definitely try if you try out Nushell is opening an image... And I'll also say this one - if you open a file for an entertainment system of a certain 8-bit era and there's a file for this kind of entertainment system, you should definitely try opening that.

**Jerod Santo:** You've got me. You got me hooked. I've gotta go download this thing now.

**Adam Stacoviak:** So listeners, you have homework. Go do that, and get your Easter egg. Fellas, thank you so much for sharing this. One, nights and weekends, and even creating an environment where it's open for everyone to contribute, and it's not based on their work status, or who they work for, and it doesn't change if they leave that workplace, whatever. That's awesome.

We've got links in the show notes for all these things... It was awesome talking to you guys, thank you.

**Yehuda Katz:** Alright, thanks.

**Jonathan Turner:** Thanks for having us.

**Andrés N. Robalino:** Thank you again.
