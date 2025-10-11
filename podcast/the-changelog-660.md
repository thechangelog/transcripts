**Jerod Santo:** Today we are joined by Charlie Marsh, the founder of Astral, a company that makes next gen Python tooling. Maybe you've heard of Uv... Charlie, welcome to the show.

**Charlie Marsh:** Yeah, thanks so much for having me on. I'm really excited to be here.

**Jerod Santo:** Excited to have you here. Topping the Stack Overflow survey... Most admired or desired, I'm not sure how they broke that out, I've forgotten already, but you're at the top. We talked about you on news a month or two back... But man, everyone is either loving, or wanting to love this tool you've come up with, Uv. Can you tell us about that?

**Charlie Marsh:** Yeah, thanks. Honestly, I feel pretty lucky, because I don't really spend a lot of my time thinking about how to get on top of the Stack Overflow developer survey. I get to just spend my time building the thing, and talking to users in the issue tracker, and trying to make it better, and then it just keeps growing... So it's kind of a dream job in a lot of ways for me.

So Uv is our Python package manager, Python tool chain manager. We kind of view it as the one thing you install that then gives you everything you need to be productive with Python. And there's a couple aspects that I think make it unique. One is - as with a lot of the things we build, it's really focused on performance. So we think a lot about how do we make things very, very fast. Things way faster than you thought they could be is sort of the way that we try to view it ourselves.

But we're also trying to just take a lot of the complexity out of building with Python... I think Python packaging has, for a very long time, been a thing that people have complained a lot about, and often for good reasons. Users running into problems, people having trouble trying to understand why things are so complicated, or things aren't working the way they want... And so a lot of what we've tried to do with Uv is cut through a lot of that complexity, in some cases by bringing more functionality together. So you can just install Uv, and then it can manage things that previously you might have needed to distribute across a bunch of different tools. So maybe before you had to learn four or five tools, and now we say "Hey, here's Uv. It can do all that stuff for you." And then partly also by coming up with some of our own kind of workflows and APIs that we've put into Uv, that basically make it easier to get things right for users.

Yeah, we model Uv a lot after -- we're very inspired by how Rust does tooling. So Uv is in a lot of ways modeled after Cargo, which is Rust's package manager. And with Rust, it kind of feels you install this thing and then everything you do is very high-confidence. You kind of know how to install dependencies, and run code, and test code. And that's what we want to get to with Uv, is we want to give people kind of this very high confidence experience of working with Python.

**Adam Stacoviak:** Everything for Rust really revolves around Cargo, right? Cargo does pretty much all the heavy lifting. It's linting, it's doing builds, it's doing all the things.

**Charlie Marsh:** Yeah. I mean, Rust, other new programming languages, it has this kind of second mover, or - I don't know about second mover, but it has this late mover effect, where they get to learn a lot about what makes a programming ecosystem nice to work in. It's a very different position from when Python was being created; it was decades ago, and everything kind of evolved very organically and it wasn't really clear how serious things would be, or what was going to change. Packaging kind of just emerged as this organic property of people needing to share code, and distribute code. And for Rust, it's really different. It's like, "Okay, we're building a new programming language. Let's learn from all these things that people have built."

In Rust, Cargo is very much a blessed tool. You install Rust with Rustup, and then you use Cargo for everything. And in a lot of places, Cargo is actually kind of a frontend to other tools. Rust actually has a formatter called Rustformat, but you never really think about that as a user. As a user, you just run Cargoformat, and that actually runs Rustformat. So Rust becomes kind of this focal point for -- or sorry, Cargo becomes this focal point for how you work with Rust, and all of that design was very intentional.

\[07:52\] For us, it's a little different, because we're coming into this ecosystem that's decades old, and absolutely enormous, which is the Python ecosystem... And we're trying to both meet people where they are in a lot of ways, and be like "Hey, we want to give you better tools, that don't require you to completely rethink how you work." But also, we sort of think about "How do we build towards a very different experience?", and give people something that is very different for people who want to embrace kind of a different way of working.

So we try and do actually both those things. We try to build tools that are what we would say drop-in replacements, are very compatible with how people do things today... But then we also build tools at the same time that are kind of "Hey, if you want to work the way that we think you should be working, here's a very different way to work with Python." And you get kind of different benefits depending on which you opt to. But it's very different from building tooling in Rust, for example, or for Rust.

**Adam Stacoviak:** Back on Rust for a second... One thing I read actually on Wikipedia from Graydon, the fellow that created Rust, was just this notion I think is important to mention... He said -- let me see if I can get my words right. In Wikipedia it says this. I'm not sure how you pronounce his last name. Is it H-O-A-R-E? Hoare? I'm not sure.

**Charlie Marsh:** Yeah, I think so.

**Adam Stacoviak:** "Emphasize prioritizing good ideas from old languages over new development." So as he was thinking about Rust, "Let me prioritize these good ideas from older languages", even some obscure languages, over new development. And I'm going back to the quote, "Citing languages, including", and I left that out, because I was trying to paraphrase to a friend... And then it was like "Many older languages are better than new ones. And describing the language as technology", this is cool, "technology from the past come to see the future from itself." I just thought that was really, really cool. This show, as we pull back the layers of software, as we pull back the layers of "Hey, this is how Rust does it, and so this is how other folks are doing it", or whatever - it's this learning from the community at large of software, not so much the Python world, or the Ruby world, or the Rust world, or the Go world. It's these ideas that are spread across even other languages that I'm way less familiar with, if at all - they impact how you build the tooling you build. And I think that's kind of cool. It's just like this technology from the past come to see the future from itself. That's just poetic and beautiful.

**Charlie Marsh:** I'm a huge fan of that general idea, of cross poll -- first of all, cross-pollinating ideas... And yeah, I think about this a lot when we're building tooling. I mean, it's not totally unprecedented that we encounter some problem that no one has worked on before, but it's pretty rare... Most of the times when we go in to solve a problem, it's worth looking at, "Okay, well how do other ecosystems or how do other tools approach this problem?" And before I worked on Uv, we built a tool called Ruff, which is a linter formatter; in Rust, it would be our Rust format, our Clippy. In JavaScript, it would be some combination of Prettier and ESLint, and all that stuff. So it's a static analysis tool; it formats your code, it fixes issues.

And when we worked on that, so many of the design decisions and design questions just came down to "Okay, well, let's go look at a bunch of other ecosystems and how they do this." So we looked at Ruby, obviously we looked at Prettier a lot, and ESLint, and decisions that they had made... We looked at RuboCop in Ruby, we looked at Clippy... And we still do that today.

And even now, as a team at Astral, we're about 20 people, and as we've put together that team, it's also been very intentional that I've tried to suck people in to Python. It's not we only hired people who have worked in Python their whole career. It was very intentional that we actually brought in people who in some cases had done almost no Python, and brought in very different ideas. Like people who had written tons of Rust, or a lot of Go, even people who spent most of their career in the web ecosystem. Because I like bringing in those different ideas, and having those different perspectives, and bringing different energy into a programming ecosystem. So I'm a really big fan of stealing basically good ideas from other ecosystems, and looking at prior art. I think that's kind of always the first thing that you should do.

**Adam Stacoviak:** \[12:21\] Yeah. Anybody who's against that, just - I don't understand that logic. Why would you not look at --o

**Jerod Santo:** If it's my art, you know? That's the only time I'm against it, is if it's my art.

**Adam Stacoviak:** Well, I think in programming in particular... Like, you look at a package manager, or a registry; why would you start from zero? Why would you -- I mean, first principles for sure, but based on the past, based on other implementations. Not based on "I'm not looking at you, because that's your thing." No. Let me become wise because of what you've done, or the road you've gone down, and then begin from first principles based on this just new vantage point that you would otherwise not have if you didn't look. It just doesn't make any sense to me.

**Jerod Santo:** Yeah. Let me share a little history which illustrates exactly what you're saying. So I was in the Ruby community, Charlie - Adam, and I both were - and Ruby had average package managing in the pre Rails day, and then Rails got so big and had so many people using it that it just wasn't enough. In fact, we had this whole vendoring thing... And eventually, there's a couple of fellows, Yehuda Katz being one of them, who was like "We're going to fix packaging for Ruby." And Carl Lerche... I'm not sure that's how you say his name, but he was the other one who I remember. And they built Ruby Bundler, which eventually was first partied into the whole thing, and became the package manager for Ruby, and it was much better. They learned a lot, they made a lot of mistakes, and they made a lot of people happier than they were. And then as you may know, Charlie, Yehuda and Carl went over and built Cargo for Rust.

**Charlie Marsh:** Yeah, exactly.

**Jerod Santo:** And so they took their learnings from building Bundler and the stuff that was good, and then they dropped the stuff that was bad over to that, built cargo, Cargo became awesome... Everybody inspired by Cargo. Yourself... Now Uv, based on Cargo inspiration... And a cool full circle moment is what I read - I'm sure you know about this; maybe you don't - Rv, which is a new effort by Andre Arco and a few other people, to basically build a new Ruby thing, which is based on principles and things they liked about Uv.

**Charlie Marsh:** \[laughs\] Yeah, yeah, yeah.

**Jerod Santo:** So it's a full circle inspiration there that is just really cool, and just shows how stealing good ideas from other places makes us all better.

**Charlie Marsh:** Yeah. Yeah. I do love that story. I thought that's where you were going to go... Which is - yeah, it's very cool. And I don't know, I mean, I think people -- it's actually hard... Like, if you're going into a process a language design process or something, this idea that you have to go do a bunch of homework I think is actually work, to go out and see what decisions people made and why, and whether they've worked out or not... And there's always a temptation to think that your problems are different and new, that no one has really solved these before... And it is often the case that you're working on a problem that's not totally new, but is new in some different way. I'm sure most problems that you work on have some context that makes them new or different, right? So there's a lot of taking in information, looking at what people have done, trying to understand why they made the decision what the impact has been, has it worked out or not... But then also understanding why your context is different, and how you need to adapt it.

I'm always kind of harping on that, especially now as I've gotten a little bit -- not that I'm hugely involved, but as I've gotten more involved in Python standards, and I get pulled into different discussions or different ideas... I'm kind of always trying to push on "Well, how do other ecosystems solve this? Have we looked at --" There was one proposal recently around sort of having default optional features in packages... And we keep trying to bring up "Well, let's look at how Rust has done it. There are actually some problems with it, so let's make sure that we think about what those problems are, and how they will affect this design, or ways we could do it better. So yeah, it's not only taking the good ideas, it's also kind of looking at what could be done differently.

**Jerod Santo:** \[16:13\] Learning from the failures. Yeah. Or the trade-offs. Sometimes it looks like a failure, but actually it was a perfectly reasonable trade-off given their context... But the good news is we don't have that context anymore, and so we can avoid that particular problem.

Adam and I, even though we're not daily Pythonistas, we felt the pain of Python package management, because there's so much tooling that's useful in Python. It's just massive, as you said. And so we had conversations and shows all about "Help us to get rid of our..." What is it? Not FOMO, the opposite. Our fear of using Python. \[laughter\]

**Adam Stacoviak:** Yeah, it's more like fear. When I have to install anything Python, it's like "Ooh, I don't know what to do... Is it the right way? What's going to happen?"

**Charlie Marsh:** That's what we're trying to overcome, yeah.

**Jerod Santo:** Right. So my question is how did you pick this problem? Because it seems like it's rife for disruption, but it's existed for so long... How did you come to this idea of "Well, we're going to do a new package manager for Python"?

**Charlie Marsh:** Yeah, totally. So like I said, we started with Ruff, so we started building this static analysis tooling. And that just started as an open source project, and eventually I turned it into this company. And when I was looking at what we want to be as a company, it's like, okay, we want to be the Python tooling company, let's say. Well, if we want to be the Python tooling company, I think we have to take on the hard problems in Python. So for me, it was like "Okay, we have to do something in packaging." Because every time we talk to people about using Python, they have this groan which comes from installing Python, or installing packages, or setting up the environment. And for me, a lot of people -- I mean, something that's intimidating is a lot of people have actually tried this. There are lots of tools. And that's because a lot of people have tried to do different takes on it. So for me, it was a little bit of "We have to do this." Both to prove that we can, and because it seems like the most important tooling problem in the ecosystem. So if we're going to try and really lift up the ecosystem in some way, this is the thing that we have to go after.

We thought a lot about -- we think about this with everything we build, but it's like "What is the insight, or why can we build something, why would we succeed here?" Whereas other people --

**Jerod Santo:** That was my next question, yeah.

**Charlie Marsh:** Yeah. I mean, I don't think it's that other people have failed, but it's like why would we -- if the space is really fragmented and some users are still having problems, what are we going to do differently that's going to overcome that fragmentation, or overcome those problems?

And I think part of it is just that we had the resources and the ambition to try and do the whole stack. Because if you look at a lot of these other tools, they kind of build on other pieces, and they have to cut the cord somewhere. And so for us, it was "Okay, we're going to do packaging... We're actually going to do the whole stack." Everything from parsing dependency specifiers, version specifiers, through to resolution, through to installation, through to managing Python itself, the Pythons you install, and all the versions, through to actually building those Pythons for you... We're going to do the entire stack.

And so that I think is where a lot of the effectiveness of -- the reason that we're able to do things differently, a good amount comes from that, which is we were like "We're gonna do the whole stack, and everything's going to be aware of everything else." And that lets us build experiences that kind of work better together, and are more automatic. When you go into a project, you install Uv and you run uvsync, we can do everything from -- we figure out what version of Python you need, we go install the prebuilt version of Python that we built, we put it in the right place, we resolve all your dependencies, we put them in a lockfile, we create the virtual environment, we install everything into the environment, and then we run the command that you gave us in that environment. So all of that complexity goes away. And that comes from being willing to say, "Okay, we're going to try to do the whole stack." And I think that's where a lot of it came from.

\[20:11\] I think the other piece is just making good decisions about where to be pragmatic and where to be sort of dogmatic. Where to say "This is something we really believe that we're going to do differently", and in other areas being willing to say "Okay, we need to do this for compatibility, or it'll break too many users." And just on the margin trying to make good decisions around behaviors is very hard... I think we've gotten a lot of them right, some we've gotten wrong, and some we've changed over time... But ultimately, a decent amount of this comes from having the resources to work on this stuff full time. Being able to kind of rally people, including investors, and bring in investors and say "This is an ecosystem that's really worth working on, and we can do something we think really special and different here."

And so being able to bring people in full time, and really put in all the engineering investment to build this thing, the community investment to spend all this time in the issue tracker, and understand what's going well and what's not, and fix things for people, and be really close with the community, and try to iterate really quickly.

I think ultimately it comes from being able to have that level of ambition of "We're going to do something really different", and then executing that in a way that I think has been really effective.

**Jerod Santo:** So did you have that goal in mind when you started talking to investors? Because like you said, you needed N years to do this, or however many years you think it is. Or months. Months or years, probably years, right?

**Charlie Marsh:** How long it took to build Uv? Is that the question?

**Jerod Santo:** Well, even to be able to bite off the entire thing. That's what your goal is, is it's everything. And so if I'm a full time Python developer at someplace, and I'm like "You know what, I'm going to solve packaging for Python." I've got to do that nights and weekends, maybe I cut back my hours and work on it -- maybe I convince my boss I can work at it in my 20% time... But you said, "No, we're going to do it all. We're going to do it right, ground up, to a certain extent. Even installing Python through our tools." So to do that, you raised money, right? Because you need multiple people for multiple years to actually get that done.

And so was that your first step, was like "I want to do this, and I'm going to go raise money to do this"? Or "I'm going to convince people--" How does that all play out?

**Charlie Marsh:** Yeah, so the first step was -- I started working on the tools before I raised any money or started a company. So I was actually -- I'd left my last job; I was at a computational biology company, I was in charge of all the sort of software infrastructure, data infrastructure, machine learning infrastructure... We wrote a lot of Python... And I was kind of figuring out what I wanted to do next. I was looking to start a company, but I didn't really think it would be this. This was kind of my side projects, where I actually -- I kind of wanted to learn Rust... And so I started building this, because I was like "I think this could be cool" etc.

**Jerod Santo:** And that was Ruff that you were building, right?

**Charlie Marsh:** That was Ruff at the time, yeah. And that project then really started to take off, and I kind of realized there was an opportunity to take these similar ideas and extend them to other parts of the tool chain. Like, we could build a package manager at the time. It was just a linter, and it was like "We could build a format, or we could build a package manager." Now we're also building a type checker and a language server. We're trying to build all this stuff... And I saw there was this opportunity...

And a couple things that come to mind... One is like - very, very important everywhere, but especially in this context, to find ways to demonstrate incremental value, and being able to get things out to users incrementally. Ruff was a really good project for that, because it was a linter, so it's a set of rules, and a set of functionality. And the core of it doesn't have to be that big, but over time you can add more rules, more functionality.

\[24:08\] The first version I shipped was not very feature complete, but people could actually use it. And over time, we could extend and grow it. So it was usable very quickly, and it grew quickly, and then we kind of expanded the scope of what it could do. It was something we could ship very incrementally. The formatter was maybe a good example of something that's not like this at all. A formatter is not useful until it's done. It has to be finished. It's not useful if a formatter can format function definitions, but nothing else.

**Jerod Santo:** Right. A third of your coded...

**Charlie Marsh:** So that was a bigger challenge, where it's like we actually had to iterate - not in private, but we didn't have a useful release for a long time. It was all in public, but it was like no one was using it until it was done. And then when we got to the package manager - we thought about that a lot, and the thing that we did... We actually built the entire -- I started working on it in October, let's say, of 2023, and then we did the first release in February. So it was only a couple of months, and it was like three of us working on it. And the first release, we actually found really good ways to kind of cut what went into that first release.

The first release was just a PIP compatible CLI. So all it did was Uv PIP install, instead of PIP install, and Uv VM to create virtual \[unintelligible 00:25:28.23\] The CLI now does a bunch of other stuff; it supports installing Python, we have lockfiles, installing global tools... All this stuff. None of that stuff was in the initial release. And so for us, it was like "The first release... How do we prove that we can do this? Let's ship this very well-scoped... It just does PIP install and PIP uninstall, and creates virtual environments." And that's actually useful for a lot of people. That actually solves a lot -- some people looked at that and were like "Oh, it's just faster PIP. That's not interesting." And what we're trying to do is much bigger than that now... But that's what we started with.

So for me, a lot of the focus is on "Let's think super-critically about use cases, and how can we get something out there as quickly as possible that's useful to people, that we can actually start iterating on, in public and with users?" And that's kind of been -- that drives, I think, a lot of how we build things. The type checker is similar -- the type checker kind of has to be done to be useful... It's much harder to build, and you have to be willing to put in a lot more investment over a longer period of time. But when you can find a tool that you can get out a small version of that's actually useful... Just ruthlessly asking yourself "What would it take for someone to actually be able to use this?", and then getting to that, and getting into an iteration loop I think was really helpful... Because we kind of proved we could build this packaging stuff.

And then from February to, I don't know, August or whatever, we built this whole other part of the CLI, and released it, and then we had a huge new launch around that. But a lot of it is being able to prove that you can do these things and prove that users want them. And so getting something out quickly and iterating from there I think is the thing that I always try -- I always try to find a path to that with the things we build. And proving that you can do with a small team is also very helpful, to yourself and to investors.

**Jerod Santo:** And to investors.

**Charlie Marsh:** Yeah.

**Jerod Santo:** So did you go the traditional pitch deck route? Like, you got a pitch deck that you went around and -- how did you raise the money?

**Charlie Marsh:** No... I don't know, I got pretty lucky. Yeah, there was a lot of -- I mean...

**Jerod Santo:** You had friends in the industry, or how'd you get the money?

**Charlie Marsh:** \[27:35\] It's more just that the open source was really taking off. Our fundraisers were pretty easy -- I don't want to say easy. They were relatively frictionless, because we were seeing so much growth in the open source that it was just clear that we were doing something right, basically. And so for investors who are open to investing in open source - because you will find very different investor philosophies around this stuff... But if you find investors who either have done open source before, or really believe in the ideas around open source, and also how they can segue into commercial growth. Thankfully, we didn't have super-challenging fundraises.

It's kind of funny, because at the time, like I said, I was thinking about starting a company when I was working on this stuff... And so I'd actually started talking to a few investors, but really just as a way to kind of build relationships and be like "Hey, I'm not starting a company yet. I don't know exactly what I want to do. Here's four things I'm kind of playing around with, building prototypes, talking to users..." And the thing I learned is that stuff can actually escalate very quickly. \[laughs\] So as soon as I started having traction, and in my head I was like "Okay, if I hired people now, I know what they would work on." Once I got to that point, then things kind of escalated quite quickly, and I ended up raising some money and starting to grow the team.

**Adam Stacoviak:** Behind the scenes I'm over here just clauding away...

**Jerod Santo:** How so?

**Adam Stacoviak:** I'll reveal a little bit here... Well, I was thinking "What's the --" It's like a just-in-time learning tool, let's just say... So I was like "Well..." I created a new directory to play with Claude in, and I said "Let's create the most simple CLI-based to do list in Python, and let's let Uv be the centerpiece of it all." I mean, it's a Python project. I don't know much about those because I've never ran one, but I can see the usefulness just in the real time of Uv. It's super-fast... It's obviously one command. uvrun runs the CLI, so it's got run commands... So it's doing a lot of that user experience direction for things.

And as somebody who runs -- I've been building a few CLIs. I feel like that's the one thing you want - you want sort of one easy path to run your project, and keep it that way.

**Charlie Marsh:** Yeah. I mean, we thought a lot about that just because -- that was kind of a major design decision when we were building Uv, was we wanted to abstract away as much of the complexity as possible. So Uv run, when you run that command, it will make sure that your dependencies are in sync with the lockfile, make sure that your lock file is in sync with your environment... Basically, that your environment matches what your declared dependencies are. It will do that every time you run uvrun. And the thing that I think is cool is that's kind of an experience you can only reasonably build if you have a really strong, performant baseline. Because if that takes -- imagine that took 10 seconds; then you can't have that 10-second overhead every time anyone tries to run a command.

**Adam Stacoviak:** And to be upset.

**Charlie Marsh:** Yeah. So for me, that's one of the cool things, where it's like, okay, focusing on performance actually lets you build kind of different experiences, because you can build things that otherwise would have been prohibitively slow before. And so - yeah, we didn't want to have this workflow where you might run a command and your environment is actually stale, and you're missing all the dependencies, or something. That happens all the time with npm, and Node, and stuff, and I'm like, "I don't want that." I want the Cargo version where you do cargo run, and it takes care of resolving your dependencies, installing them, then runs the command with all the right stuff. That's probably the biggest example of us trying to provide a different experience for working with Python.

**Adam Stacoviak:** Yeah. I decided to install with Homebrew as well. I don't know if that's anti-pattern, because docs don't really mention Homebrew...

**Charlie Marsh:** You installed Uv with Homebrew, or...?

**Adam Stacoviak:** Yeah, Uv was installed with Homebrew.

**Charlie Marsh:** That's cool...

**Jerod Santo:** \[unintelligible 00:31:42.04\]

**Adam Stacoviak:** It's cool... My preferred method is Homebrew, because that's my macOS package manager, basically. So that's my preferred way, versus just \[unintelligible 00:31:52.21\]

**Charlie Marsh:** Yeah, we have this curl script... The reason that we generally recommend installing with the curl script - only because it lets you do auto self updates. If you install with the curl script, then you can run Uv self update... But if you install any other way, we can't really do that, because we're not Homebrew, so we can't solve it...

**Adam Stacoviak:** \[32:16\] Right. So it goes stale over time. \[unintelligible 00:32:16.18\]

**Charlie Marsh:** Yeah. But it's all the same binary, for the most part.

**Adam Stacoviak:** That's a hidden unknown for me with Homebrew. I didn't think about that, being out of sync... I guess I know that by nature... But the fact that you have a self-updating thing that's built into the package manager is a nicety that I really want. And now I'm going to go and undo that and I'm going to install it the right way, so thank you very much. Can you can you talk about -- we just talked about run... But what about init and add? These seem to be the things that really are the magic moments for anyone using Python.

**Charlie Marsh:** Yeah, sure.

**Adam Stacoviak:** Something that's not there otherwise.

**Charlie Marsh:** Yeah, yeah. So like I said, when we did the first Uv release, the things that we launched with were Uv pip install and Uv VM. And these are kind of commands that match how people have historically worked with Python packaging. So it's like, "Okay, I want to create an environment. I'm going to run this command to create the environment. Then I'm going to activate it. Then I want to install a package in it, and I'm going to run Uv pip install Torch. PyTorch, or whatever." And so it's very imperative, and it's kind of low-level, because you have this directory on your machine that you're sort of manually managing. It's like, I want to add things to it, I want to remove things from the environment. And ultimately, we wanted to get away from that, and so Uv init, Uv add, Uv run - these are all designed to be very declarative. You tell us in your file what the dependency should be, and then we take care of taking that declared state, or that declared set of dependencies, and making them correct on disk. You don't have to think about "I'm going to create this directory, and add this dependency, and add this other dependency." You tell us "This is what my project needs", and then we take care of the rest.

And so getting there - yeah, Uv init will create a new Python project for you, and then Uv add, you can just add dependencies to it. And Uv takes care of keeping everything in sync. And yeah, there are a bunch of -- I mean, we talked about this a little bit earlier, just taking good ideas... I mean, there are a bunch of ideas in Uv too that we've taken from other tools; even tools that -- I don't talk about Cargo. Even tools have nothing to do with Cargo. In JavaScript, a couple tools like Pnpm and Bun, probably Yarn too, although I'm honestly a bit less familiar with exactly how their design works... But basically, the way that we manage our cache, and do installations - that's probably one of the most "Oh, this is like -- I never thought it could be this fast" kind of thing, where people get really confused, which is we use a global cache. So basically, if you install a package once, we put it in the cache. If you then go to a different project and install the same package, we effectively just symlink that package into your environment. It's not exactly a symlink, but the basic idea is for each package you install, we actually only keep one copy, one real copy on disk, and all your projects just point to that... Which makes installation incredibly -- if you are installing something that's already been installed before, it's basically a no-op. It's like, it just points the files to the right place. And that's something that Pnpm and Bun do. And there are different tricks you can do on different file systems to make that faster, or different depending on what's available... But again, a lot of it's taking some of these ideas around how you can build these kinds of tools in a really performant way, and bringing them to Python.

**Adam Stacoviak:** Yeah. That seems like a pretty logical one though, the global cache... Where'd you get that one from?

**Charlie Marsh:** I think probably from Bun was probably the -- I think I knew Pnpm did this for a while... But then Bun I think is the one that I probably looked at most when I thought about how our design should work. But yeah, there are trade-offs to it.

\[36:06\] The main downside is -- there's kind of two ways to do that. One is you can actually use a hard link, kind of like a symlink. The problem with that is users can poison the cache. So if they change the files in the installed environment, it will actually pollute the cache, and affect everywhere else.

So let's say that you open a file that's in your virtual environment. It's like add a print statement or something to debug, which is something that people have done from time to time... That then sort of poisons the cache, so that it also affects other projects. That's one downside.

But macOS and some other file systems support a called copy-on-write, or reflinking, which is much nicer. The idea there is -- it's like a symlink until you edit it, and then it actually writes the copy and changes it there. So that's kind of the best case scenario. But yeah, it's a very nice idea, and it also means that you -- in addition to being way faster, you save a ton of disk space. In Python especially, packages can be really big, because a lot of the time you're actually working with native code. PyTorch, for example, compressed -- it's almost like... I think the Linux CUDA 12.8 builds are about a gigabyte compressed. So when you install that package, we're actually downloading and unzipping a gigabyte compressed... And so it's really nice to only have one copy of that package on your machine. If you're installing a new one in every environment, the disk space actually adds up tremendously. So it's faster, and it's more space-efficient, which is pretty nice.

**Adam Stacoviak:** Is the UvFS, when I browse the Crates directory in the project - is that literally a file system? Is that what you mean by FS?

**Charlie Marsh:** It does mean file system, but it's really just utility functions that operate on the file system, so do things like creating symlinks, and stuff like that. Yeah, we have a pretty unconventional structure to our Rust projects. We tend to --

**Adam Stacoviak:** It's easy to browse...

**Charlie Marsh:** Thank you. We have a lot of crates, you can probably see.

**Adam Stacoviak:** It's very ceremonious... I mean, you've got TOMLs everywhere, you've got source directories everywhere... Which I think is -- I've leaned into Rust a little bit, and you can appreciate that the verboseness of Rust, because there's explicit returns of types, there's explicit types, obviously... There's so much in there, but I think what it offers you is confidence and safety, which is probably why you chose it as the reason to change what you've done and go build Ruff, and then build this. That's what I see there. That just seems to be the Rust way, is more than necessary by means of confidence.

**Charlie Marsh:** Yeah, it's been a -- I think it's a really good language for building this kind of tooling... I don't think it's the right language for everything... Otherwise I probably wouldn't be building Python tooling, I'd be building Rust tooling, I guess... But I think it's a very good language for building this kind of tooling.

**Jerod Santo:** Which one's your favorite? Which one do you like more?

**Charlie Marsh:** Which programming language?

**Jerod Santo:** Python or Rust? I mean, you're building Python tools to bring more Pythonistas, but you're building them in Rust, so you must like Rust.

**Charlie Marsh:** Yeah. I mean, I would say I prefer writing Rust to writing Python... But it's just -- well, first of all, I write a lot more Rust than I do Python now. So I've just spent a lot more time in the ecosystem, and Rust is, I think, actually quite a hard programming language to learn. I don't know, it depends a lot on your background. For me, it was a hard programming language to learn, because my background was -- I'd done a lot of Python, but also a lot of TypeScript, maybe two years of Java professionally... A little bit of Go, kind of barely... And then not really any Rust.

\[40:14\] So I didn't have a systems programming background, and I wasn't really used to this idea of thinking about - in Rust you would call it ownership, but thinking about memory management. And so when I first started writing Rust at my last company, someone else introduced it to the project, a really great engineer... But I didn't really know it, and so every time I went in there, I was trying to get in and out as quickly as possible. I was thinking in terms of Python, and trying to map that to Rust. I was like "Why is it so hard to do a comprehension over a hash map?" And basically nothing made sense to me. And so it took me working on Ruff, and kind of building something from scratch, and kind of banging my head against those concepts, to really understand what the language is about.

And the thing is now Rust has this mechanism called the borrow checker, which is the thing that makes sure that you don't break its rules around how memory works. And it's not really writing Python or JavaScript, where you can just create things and pass them around and do whatever you want. You have to follow certain rules that the compiler enforces. The thing is for me now, I don't really think about the borrow checker anymore, because I've written a lot of Rust, so I think in terms of that kind of ownership. The thing that makes it hard - eventually that kind of goes away, in my experience. I just write my code now in the way that I kind of know will work for the borrow checker, and I don't really feel I have a lot of overhead from it. So that's the thing that makes Rust hard, I think, at least \[unintelligible 00:41:41.13\] borrow checker... And that kind of dissipates over time, and then it just becomes a lot easier.

I mean, there's still plenty of things I complain about. I would like compile times to be faster, for example etc. But I do find that the way I think about programming maps better to Rust now, and so that ends up being kind of an easier experience for me.

**Adam Stacoviak:** Can you give a little bit deeper dive on ownership and borrowing in the vein of memory, and memory safety, and memory usage, and how it just -- once a variable goes off scope, it just falls off... Can you speak to that a little bit? Obviously you do, but...

**Charlie Marsh:** Yeah, I can try... I don't know that I'll give the best explanations of these things...

**Adam Stacoviak:** Give us your best take then, how about that? That way everybody who's thinking about Rust, why -- well, what I've learned about Rust is just that, is that is the centerpiece of what makes Rust so safe, is this borrowing method. You can't allow a variable to be mutated. I think you can only have one -- this is where I was hoping you could fill in, Charlie... But I think you can have the variable use all the places, but you can only mutate once, or borrow plenty... It's like, that's the rule thing that you have to abide by...

**Charlie Marsh:** Yeah. I mean, I don't even know if I've even tried to explain this before, so I probably won't do a very good job... But if you're writing C, for example - I have not written a lot of C, but I wrote some C in college. And so when I wrote C, I had to think a lot about malloc, and allocating memory and then freeing it, and thinking about "Okay, who's allowed to free this, and how do I make sure that after I free the memory, no one's using the object?" and stuff like that. In Rust, you don't have to think that way, because the compiler does it for you. But the trade-off is the compiler enforces these rules at compile time. So the rules are things like -- okay, whenever you initialize some sort of variable, someone has to own it. And when that owner - maybe it's an attribute on an object; when that owner goes out of scope, that value goes out of scope. So if other people need that value, and they have to read from it, you have to make sure that the owner lives basically longer, or as long as the things that rely on it. And so whenever you end up initializing memory, like a string or something, you need to think about, "Okay, who owns this, and who's going to need it? And how do I make sure that that owner lives long enough?"

\[44:12\] There are a lot of things in Rust -- Rust enforces all these rules, and then you can also break them if you need to, in sort of like special ways... And Rust also has a lot of escape hatches for -- kind of like different ways of managing the memory. I actually found that a lot of that stuff made the language more intimidating for me. When you go read Rust guides, there are certain things like \[unintelligible 00:44:35.14\] and blah, blah, blah... And it's interesting, because those things exist in some ways to help you... Often, if you reach for those, it's actually a sign -- if you're an experienced Rust programmer, this isn't true. But as a beginner, I found that whenever I was reaching for those, it was actually a sign that I was doing something wrong. I was thinking about memory the wrong way. Because RefCell, for example, lets you do interior mutability, which is just -- it's not super-important what it is, but the idea was... I was like "Oh, I need to have write access to this object here, but it's only letting me read from it." And I would google that, and then I would find RefCell. And I'd be like "Oh, okay." But actually, I was just thinking about things incorrectly. Someone else should actually be owning it. Someone else should actually be doing the mutation.

So for me, I tried to start by -- once I figured that out, I actually ignored a lot of things in the language for a long time... \[laughs\] And I was like "I'm going to try and write really dumb Rust." And then I kind of grew to understand those things over time, especially as I hired people into the team who were honestly much better Rust programmers than me, and I could learn from them... But I do sort of maintain that I think it's kind of an intimidating language to learn for that reason. The mental model around borrowing is just very different. There is a lot of stuff in the language to help facilitate that, because it's one of the most important concepts... But the upsides that you get with Rust are like... It's actually, I think, a little bit hard to appreciate if -- I suspect that I don't fully appreciate it because I haven't spent a bunch of time writing in memory-unsafe systems languages. But Rust makes it hard basically to make mistakes that otherwise would be very easy. And the cost is you have to play by those rules.

**Adam Stacoviak:** Yeah. And when you compile, you get yelled at... So good luck on that part there.

**Charlie Marsh:** Yes, correct.

**Adam Stacoviak:** And it also happens in compilation, not in production necessarily... I pulled back some of my rules -- I'm not sure if this will... This will just maybe pepper and spice up what you've shared here. So the three rules on ownership are this: each value has a single owner. When the owner goes out of scope, the value is dropped. That means it's out of memory. And then the last one is there can be multiple immutable references or one mutable reference, but not both.

**Charlie Marsh:** Yeah. Not both is also critical. Basically, you can't have people who are allowed to read a value while someone else is allowed to write to it.

**Adam Stacoviak:** Because it would do what you just said with the global cache before; it would corrupt it, essentially.

**Charlie Marsh:** It would do -- yeah, it would cause bad behavior.

**Adam Stacoviak:** Polluted, of what was your terminology.

**Charlie Marsh:** Yeah.

**Adam Stacoviak:** Yeah. And like you, I've never written C, and I've really never written systems languages beyond my dabbling in Rust recently, ever, so my only experience with it is the knowledge I've gotten from Rust... But I can appreciate what people have complained about about C, and the reasons why people push them back on C-based network tooling, because that's where there's so much critical nature to being safe, being memory safe. I can appreciate this ownership model, though.

**Charlie Marsh:** \[47:50\] Yeah. I remember recently, maybe a few months ago, there was a story on Hacker News about, I don't know, like an LLM finds a Use-After-Free vulnerability in some C project. And I was reading the writeup about it and they were kind of tracing through the code, where basically -- you know, it's written in C, and someone was doing something after a variable had been freed that was not allowed. And I was just looking at the code and I was like "How on Earth are you supposed to keep track of this as a programmer? This just looks impossible. There must be so many of these out there..." And anyways, reading that, actually -- for me, the experience actually had nothing to do with the LLM being involved. It was just actually looking at the vulnerability and being like "Wow, how would you possibly keep track of this?" And that's why -- anyway, I shouldn't speak to it too much, because again, I haven't written a lot of C, and there are other things people do to try and mitigate against these things... But I do feel like in Rust -- I took for granted for a while that basically we built a couple tools that... We get, I don't know, a hundred million installs a month, maybe more. We've built really popular things. And I don't think we've ever had a single a memory-related vulnerability, which is --

**Adam Stacoviak:** Good job.

**Charlie Marsh:** Or error even, that I can think of. And it just comes from working within the language... Which is cool. Basically, it's easy to take that for granted. And it's not why I started using Rust at all. I started using Rust because I wanted to build something fast... But there are these other benefits that over time I've just come to appreciate a lot.

**Jerod Santo:** Let's focus in on fast, because that is Uv's selling point. I assume it was a Ruff selling point, to a certain extent. I remember looking at Ruff and seeing how fast it can lint things compared to other things that are linting things... Which really speaks to developers, because we don't want to wait around for anything, let alone a linter... You know, "I'll just turn it off. I'm not going to sit there and wait." How much of the speed that you're getting with Astral tools - I guess we can take Ruff and Uv specifically - are just fast merely because you just did it in Rust instead of Python? And then how much of it is fast because of some smarts you got in there, Charlie? ...your decision to be on that one... Of like architecturally different.

**Charlie Marsh:** Yeah. It's a great question. I think it's pretty nuanced, and will be hard to put numbers on. So I guess the way I think about it is - we get some baseline from being written in Rust. That's probably faster than the baseline that we would get from being in Python... But Ruff, as an example, has actually gotten significantly faster over time. And it was always written in Rust. So there's a big --

**Jerod Santo:** Right. So you're doing stuff.

**Charlie Marsh:** There's a huge Delta that you can get even within just being Rust. An example is at one point we rewrote our parser, the thing that takes Python source code and turns it into a syntax tree that we can analyze... And the initial version we used was based on something called a parser generator, where you kind of write out your grammar, and then it generates the code for you, to a certain degree... Which can be really handy if you're working with something -- which you're really building a parser, because often you can describe a parser in terms of the grammar... Like, okay, you have the def as a keyword, followed by the function name, blah, blah, blah.

**Jerod Santo:** Right.

**Charlie Marsh:** And we ended up rewriting it to use, I guess what would be called a handwritten parser. So we got rid of the parser generator and we kind of wrote it out ourselves... And it became way faster; several times faster. It made Ruff as a whole 30% or 40% faster. And so that's the same -- that's all within Rust, but it's about thinking hard about how you're doing things. And it also varies a lot, even if you look at Ruff and Uv... Because in Uv, we're doing way more IO. And so a lot of being fast - not all, but a good chunk of being fast is trying to be smart about how you do IO. Because we're either downloading things from the network, or writing things to disk, or reading things from the cache and writing them somewhere else.

\[52:06\] I talked about the caching trick earlier... You could also do that in Python. The program would probably be slower if you wrote the exact same program in Rust and Python for a bunch of reasons... But you could also do that to write a faster version in Python. In Ruff, that tends to be less true. In Ruff there is IO; we have to read the files. But beyond that, it's a lot more I guess like a compiler. It has to parse all this source code, and then figure out how to efficiently traverse it, and collect diagnostics, and report them back... So I think Rust gives you a better baseline, a faster baseline.

**Jerod Santo:** How much better? Twice as good? Three times as good?

**Charlie Marsh:** I don't know, it depends what you're doing.

**Jerod Santo:** Over like the same Python program. Well, a Python-based linter and a Rust-based linter doing the exact same linting, same file.

**Charlie Marsh:** The exact same stuff...?

**Jerod Santo:** I mean, obviously these are rough numbers. Pun not intended.

**Charlie Marsh:** Yeah, I don't know, probably somewhere around an order of magnitude.

**Jerod Santo:** Okay. So that's significant. Okay, keep going.

**Charlie Marsh:** Yeah, for sure. But I think the other thing that I've come to appreciate with Rust is it kind of gives you the tools that you need to optimize further, and think really hard. Allocating memory is pretty expensive, in relative terms. And so a lot of what we think about when we try to optimize things is actually "How can we allocate less memory?" Or allocate memory less frequently, or whatever. And in Python, it's actually just pretty hard to have control over that, because you don't really have any control over the allocator and where memory is getting created or destroyed.

**Jerod Santo:** It's definitely not staring you in the face like it is in Rust.

**Charlie Marsh:** No. But in Rust - yeah, you're kind of thinking... We did this whole thing where we -- I gave a talk at EuroRust where I went through the exact design here, but... When you run Uv, we parse a lot of versions. It sounds like a silly thing, but just like package versions. For a very complex resolution, that code might run 10 million times, or something. You're just parsing versions. And so we saw that, it showed up in a Flame graph when we were profiling, and we redesigned how we represented versions, and we came up with this scheme whereby 95% of versions, something like that, can be represented in a single U64 integer. We encoded them as an integer. So it's like, okay, the first eight bytes are the major version number, the next eight bytes are the minor version etc. And that actually had a very measurable speed improvement. And that's not really something that would be intuitive to do or very easy to do in Python. In Rust we have to think about how are things actually represented, for example.

And so again, I guess for me it's like it gives you a faster baseline, and then it gives you the tools to care about this stuff, if you want to. But certainly some of the things that we did in Uv especially could be taken and used in other Python package managers written in Python. That would be a totally -- I mean, if they want to do that, I think that would be a good thing. I'm very happy for that to happen. But it ends up being a mix.

**Jerod Santo:** So your first product is out... Yes?

**Charlie Marsh:** Yes. Pyx .

**Jerod Santo:** Is that how you pronounce it? Pyx?

**Charlie Marsh:** Yup.

**Jerod Santo:** Okay. Pyx, a Python-native package registry.

**Charlie Marsh:** Registry.

**Jerod Santo:** Registry. So you've learned a lot from all these other tools, open source world... How much have you studied npm Inc?

**Charlie Marsh:** A bit... \[laughs\]

**Jerod Santo:** A little bit. So surely you want to avoid some of the problems that they've had... And I'm curious the design of Pyx and the ambitions here, and how you're going to go about building a registry that's commercial.

**Charlie Marsh:** \[55:57\] Yeah. I mean, it's a little bit different, because at least right now we're not focused on this being a public registry. This is a tool that's designed for companies. We work with lots of companies that either already pay for registries, and we think we can build something a lot better, or need to adopt some sort of internal registry as they grow... Or have problems that we think we can solve with the registry that we actually couldn't solve just with the client. So for us, it's like "How do we go and help more of those users and fit the needs of those companies while continuing to build out the open source?"

Commercially, for us, we're not looking to charge money for Ruff or Uv. We view that as our open source tooling which we want to remain free forever, very permissively licensed. And what we're trying to do instead is kind of build these paid services that are complimentary, and are sort of a natural evolution if you're already using our open source tool. So like I said, we talked to tons of companies who use Uv, they buy registries, so we're going to go offer them a registry and we think it's going to be better in a variety of different ways than the things that are out there already.

So a lot of why we built this thing and are building this thing comes from, like I said, or as I alluded to, problems that users have brought us that we can't really solve in the open source. Maybe people will come and they're using some private registry and it behaves in a way that's incorrect, and we're like "Okay, we actually can't help you anymore, because that's a problem with the software." And so just being able to offer them something different I think is one manifestation of that.

But the other is sometimes people want to install packages that are broken in different ways, or maybe there aren't builds available for their Python version, or maybe there aren't builds available for their GPU, or something like that. And in that case - again, that's not something that we can solve with the package manager, because to solve that problem, we actually need a server, that has artifacts that we can manage. So again, it's try and look at these problems where we've spent a bunch of time in the issue tracker trying to help people, and ultimately concluded that there's only so much we can do, and saying "Well, what if we had our own registry, our own server? Couldn't we do something pretty different?"

**Jerod Santo:** That makes tons of sense. Is there a world that you can envision in which Astral would want to host a public registry to make Uv better in some sort of way, that you can't do it as just a client?

**Charlie Marsh:** Maybe. I guess anything's possible. It's not in our current mission for the problems we're trying to solve here, and I think -- I guess what I would prefer to see happen is PyPI, which is sort of the Python equivalent of npm. It's the public registry that people use by default. It's run by the Python Software Foundation, so it's owned by nonprofit... I want to make sure that that has longevity and continues to evolve and be stable, because I think it's a really -- I'm happy for that to be kind of the public system of record, and for people publishing packages, and the way that most people are maybe installing packages. But for us -- like, we mirror that stuff in, for example. So you can use Pyx to install things from PyPI. And we're not necessarily focused on the public serving, we're more focused on what's the experience we can build around the raw artifact storage. And also, are there other things that we can expand to over time, that aren't a registry, but are related to hosting and serving artifacts? We've also thought about code execution, for example. Maybe you should be able to execute code through our tooling, and maybe that would have some tie-ins with the registry, too.

So we're not a registry company. We're a company that's trying to build this whole Python developer experience, and the registry is kind of the first extension into building something beyond a command line tool. So it's a big, new thing for us, but the thing I think is most exciting is just that we can actually solve a bunch of new problems for users that we basically couldn't solve before.

\[01:00:14.07\] One of the things that's interesting about building in Python is the user base is incredibly diverse. What I like to say is every company on earth is using Python for something, within some margin of error, but the things they're doing can be super-different. We talked to users who are -- you have 15 million line codebases that are running web applications, that's all Python. And then there's AI and ML, everything that's happening with GPUs; that's super-different. Even if you look at a company like Open AI, the things that they're doing with GPUs are even super-different. Half the companies research, and half the companies apply, like ChatGPT, and that's all super-different... So for us, it's also about trying to figure out where can we have the biggest impact, which of those user groups, and what can we build for those groups? Because the things they need are pretty different.

It's always been something that's on my mind, is how do we serve all those groups, and how do we figure out where we can have the biggest impact. And the registry is sort of another example of that, where a lot of what we're building there - not all of it, but a chunk of it is actually focused on GPUs, and people trying to install hardware-accelerated packages; basically, things that involve CUDA, or NVIDIA GPUs. And that's relevant to some people, but not to others. But for us, it's kind of about figuring out where can we have the biggest impact with this. Now that we have a server where we can host artifacts, where can we have the biggest impact amongst all these different people using Python?

**Adam Stacoviak:** What does it mean to be GPU-aware then? Why is that such a -- take us into the details of why that's a problem. How does it manifest outside of - was it Pyx? And then how do you solve that?

**Charlie Marsh:** Yeah, so it's a problem for a couple of reasons. So in Python - Python has actually very good support for building and distributing native code, native binaries, and it's part of why it's been such a success... It's both a result of, and why it's been a big part of data science. If you think about installing NumPy or something, most of that is not Python. It's like a compiled binary; that's native code that's compiled for your machine. And when you go to install NumPy, you don't actually have to build that from source. You don't have to download the compiler and compile everything yourself. What happens is when NumPy does a release, they publish - I promise this will get back to GPUs... But when NumPy does a release, they publish builds for Linux, Windows, macOS, macOS ARM, M1, M2, macOS Intel, x86, all the different Python versions. So they pre-build these things and they put them on the registry, and the package manager knows how to look at your machine and figure out which NumPy build is right for your machine. So that's very central to Python. It's where a lot of complexity comes from in packaging, but it's also kind of a superpower, because you can build -- like Uv, you can install Uv, you can PIP install Uv. And that's just a Rust binary that we basically turn into a Python package and publish. And you don't have to build it from source. Python standards let us do that.

GPUs make things harder, in part because of some of the gaps in the standards. So in the standards there's no way to express that "I just built PyTorch, and it was built for CUDA 12.8." Or "I just built PyTorch and it was built for CUDA 12.6." Or "I just built PyTorch and it was built for AMD RockM." These are just different kinds of GPUs. There's no way to actually express that. So when they build PyTorch - the PyTorch team builds PyTorch for a bunch of different architectures, and they basically have to hack in the way that they do this. Like, they have to just find ways to encode it that aren't really codified by standards, which leads to a lot of complexity. There's no way in PIP, for example -- let's say that you have an NVIDIA GPU on your machine. There's no way to do PIP install Torch and get the right Torch version based on your GPU. There's nothing in standards that would really allow them to do that. So that's kind of the problem that we want to solve, which is --

**Adam Stacoviak:** \[01:04:26.05\] So what do they do?

**Charlie Marsh:** What they do is they publish the different version of Torch -- each architecture basically gets its own registry.

**Adam Stacoviak:** Wow...

**Charlie Marsh:** So they create an index for CUDA-12.8, an index for CUDA-12.6... And on the 12.8 index they publish the builds that they built for CUDA-12.8. And each library also solves this in a different way. So Jax, which is a Google library for working with GPUs, does something totally different. So yeah, there's been a lot of experimentation around trying to make this work... But it ends up being pretty difficult. And there's sort of a second order problem, which is that there are packages that build against PyTorch. And so it's not just PyTorch needs a GPU; there are also other packages, like vLLM, extremely popular piece of software for actually serving language models. Like, if you actually wanted to run an endpoint that runs a GPU, that's like do predictions and give back data, you would use vLLM for that. That has PyTorch as a dependency. And when they build vLLM, they not only have to encode the GPU version, but also the PyTorch version. So it gets very complicated very quickly... And that's kind of the complexity that we're trying to tame with the registry.

So GPU aware means a few things. One, it means that Uv the client can actually figure out what GPU you have on your machine. And then it can map that to basically the right end points in Pyx. So in Pyx we have curated distributions based on the hardware. And we go through and we not only take PyTorch, but we also pre-build a lot of other stuff that people can only use with PyTorch, and we make sure all the versions are compatible and all the metadata is correct. So we do what I would call the sort of non-glorious work of making sure that all the things we put on there, it's like a well curated distribution. And in Uv you can just install, we'll look at the GPU on your machine and we'll pull in the right things from Pyx.

So that's one tack that we're taking on this problem, which is we just want people to be able to run on a machine with an NVIDIA GPU or an AMD GPU or whatever, just run Uv add Torch vLLM \[unintelligible 01:06:41.02\] and not have to think about building from source, not have to think about where are these coming from, not having to think about making sure that the CUDA versions are all lined up. That's part of the complexity that we're trying to solve.

**Adam Stacoviak:** Is that ability to see the GPU particularly, is that a Rust-level thing that Uv inherits?

**Charlie Marsh:** No, it's -- I mean, you could do that anywhere. And a parallel -- I think what we're trying to do in parallel actually is standardize a lot of this stuff. Like actually evolve the standards, so that these things can be encoded. We've been working on that with the NVIDIA team and the PyTorch team. It will take a long time; it may also never get accepted, who knows? Standards are hard. We're working on that. But that would also involve, similarly, trying to detect and understand what GPU the user has installed.

The thing that's a little different -- the thing that is hard for others to do is, because we work on the package manager and the registry, we can actually encode that contract, of like "Okay, this is the user's GPU, so this is where you should be getting the packages", for example. Or "This is constraints that the server needs to understand." So we can keep those APIs in sync, and make the experience really good.

Ultimately, hopefully this stuff gets standardized, but until it does, there's -- I think it's hard to appreciate how big PyTorch is. We spend so much time helping people install PyTorch. Not in terms of size, in terms of the wheel or the artifacts, but just in terms of how big the user base is and the community is. Like, we just spend a lot of time trying to help people install this stuff...

\[01:08:15.01\] And it's gotten a lot better, and I think the PyTorch team has actually done quite a good job in the face of these sort of gaps in standards, and having to trailblaze a lot of this stuff... But for us, we're kind of user obsessed. I hate seeing people struggle to install this stuff, and I want to find ways to fix it. And so for us, some of that's in the Uv client, and some of that's in the registry.

**Jerod Santo:** So Pyx, your first commercial product, but not necessarily the future of Astral, because you're not a registry company; you don't want to be necessarily a registry company. But it's a good -- it's a revenue stream, it's another opportunity to make Uv better for your customers who need it, but maybe just one of your products down the road, right? Like "This is one thing we do. We have other things we do as well, that we're selling, making our investors happy." Without making your investors mad, what are some of your other ideas? You don't have to spill all the tea, but what other aspects of Python tooling could you tackle? ...whether in open source --

**Adam Stacoviak:** All of them...!

**Jerod Santo:** You've got your type checker going on... Or in the product side? What else are you working on?

**Charlie Marsh:** Yeah. I mean, in the open source it's -- I mean, there's no shortage of things that people have asked us to do in the open source. My philosophy, which we'll obviously stick to as long as we can, is that if there's a problem that we could solve in the open source, then we should solve it in the open source. Not with a commercial product. Again, we'll see. We'll get tested on that over time. But I would like the incentive structure of the company to be such that we're very much incentivized to build things in the open source, and grow the open source. And that the paid and the hosted products represent real value that can't go in the open source for structural reasons. In the registry case, it's like, okay, security, compliance - all these things that don't really make sense to put in the open source in that way.

**Jerod Santo:** Right.

**Charlie Marsh:** So there's no shortage of things that people have asked us to build in the open source. I think the things that we are building now, which we I'll just maybe mention again, is we're building a type checker and a language server. Probably very comfortably the most technically difficult project that we've worked on... It's very hard. We're looking to do the beta release for that. I can't really say the date, but let's say within the next few months. So that's something that we've been asked about forever, basically, has been a type checker.

**Jerod Santo:** The language server you're referring to, or the type checker?

**Charlie Marsh:** Both.

**Jerod Santo:** Both.

**Charlie Marsh:** Yeah.

**Jerod Santo:** Okay. Because the type checker is at least out there, right?

**Charlie Marsh:** They're all out there.

**Jerod Santo:** Oh, the language server is out there as well.

**Charlie Marsh:** Yeah. We've done an alpha release, and we do have companies using it in production. We just haven't gotten to the point where we recommend it for use \[unintelligible 01:11:09.03\]

**Jerod Santo:** Okay. So the type checker/language server. Like, it's one thing.

**Charlie Marsh:** Yeah, they're the same thing. It's called Ty.

**Jerod Santo:** Gotcha.

**Charlie Marsh:** Yeah. And it's a little bit like TypeScript, in the sense that it's a command line tool, but you can also run it as a language server.

**Jerod Santo:** Gotcha.

**Charlie Marsh:** Yeah. The other things that we get asked about a lot in the open source are... Testing. Like a test runner. That's kind of an interesting one for me... A lot of people actually really like PyTest, which is a very popular - probably the most popular - Python test runner. And so I think I would need to think hard about why could we build something that's a significant improvement over PyTest? It has to meet some bar of like -- it has to be much better, hopefully, than alternatives. Otherwise, why would anyone use it or switch to it? And the other thing we get asked about a lot, although it's a bit more niche, is documentation tooling... Which is not super-glorious, but it is a big part of... It is, again, something that Rust does very well.

**Jerod Santo:** \[01:12:13.02\] It's also highly appreciated by the Python community, right?

**Charlie Marsh:** It is. It is. Yeah. I think the thing that's maybe a little challenging is that the user base for that is slightly smaller, because it's mostly oriented around maintainers and people who publish libraries...

**Jerod Santo:** Library publishers, yeah.

**Charlie Marsh:** Most people are using libraries and not writing libraries. But again, this is all just about priority. Obviously, we would do everything in the world if we could, but ultimately, everything has to be prioritized. There's sort of a thing that is a little bit more pie in the sky, that - we do not have any plans to do this, but it would be cool if we could... Which is our own Python runtime. So actually trying to make Python itself faster, or different, in different ways. Because right now we actually do our own builds of Python that we distribute, and it has a bunch of modifications versus cPython, but those modifications are really in the build process... And they're all motivated by this same idea, which is we want to be able to pre-build Python for you, that you can then unzip and run. Because cPython itself, cPython main doesn't really support that, for technical reasons. Basically, a bunch of absolute paths get encoded in the binary \[unintelligible 01:13:31.21\]

**Jerod Santo:** Is it different like it's statically linked, or it's like a different sort of --

**Charlie Marsh:** We do statically link things, but ultimately, the main problem is that cPython, when you build it, at least on Linux and macOS, encodes a bunch of absolute paths.

**Jerod Santo:** Okay.

**Charlie Marsh:** And so we have a project called Python build standalone, which - the core idea there is you build it and then you can literally just download, unzip it and run it on any machine. It makes it relocatable. You can move it around your machine etc. So it's basically patches and changes in cPython to enable that. But we don't change anything about runtime behavior. So again, we do not have plans to do this, which I have to be really, really explicit in saying... \[laughter\]

**Adam Stacoviak:** If you were going to though, however, what would -- yeah, just saying.

**Jerod Santo:** What a big lift that you've just described, though... I mean, that to me would be just overwhelmingly daunting.

**Charlie Marsh:** Oh, yeah...

**Adam Stacoviak:** Well, this makes me think about the dreaded GIL, right? I would imagine if you did do this runtime, it would not be written in Python, or C, because... This whole conversation.

**Charlie Marsh:** Well, the GIL is potentially not long for this world.

**Jerod Santo:** Yeah.

**Charlie Marsh:** I don't know if you've been following that...

**Adam Stacoviak:** Oh, okay...

**Jerod Santo:** They're free-threaded now, you know?

**Charlie Marsh:** Yeah.

**Jerod Santo:** Or at least it can be.

**Charlie Marsh:** You're not supposed to call it No-GIL. No-GIL was the original name for it, but now it's called free threaded. The idea -- so in 3.13, or before 3.13, they sort of provisionally accepted a proposal to remove the GIL, and in 3.13 there's a separate build of Python that has no GIL. And then the idea is eventually that will become the default, but right now there's kind of a split world.

**Adam Stacoviak:** How does that work with a legacy Python out there, though? That's good for future, but what about the past?

**Charlie Marsh:** As in Python code that is written in a way such that it assumes the GIL exists?

**Adam Stacoviak:** Well, maybe take this as my imposter syndrome here, not writing a lot of Python, but... If I'm writing Python, I suppose against a version that supports the No-GIL method, then that's probably just fine. But if I've got code that's legacy, that's written in Python, but against older versions, am I still at risk of the issue of the GIL, I suppose?

**Charlie Marsh:** So you possibly are, and that's part of why they're doing this incremental transition, whereby... Also, if you try to install NumPy, for example - again, just going back to NumPy; something that has native code. They have to build a special variant for No-GIL, for free threading.

\[01:16:06.15\]So basically, all the libraries have to add support for this, and audit their code, and make sure that they work in a No-GIL world. The extension modules especially have to explicitly go through a process of adding support for this. So it will take some time, and that's also why it was provisional acceptance, and kind of something that got staged in... But I guess a cool thing for us is we've made it really easy to install the No-GIL version. Sorry, the free threaded version of Python...

**Adam Stacoviak:** I like No-GIL better personally, but...

**Charlie Marsh:** I know. Me too. But it doesn't always work out the way we want.

**Adam Stacoviak:** It's a spade. Call it a spade, right? There's no GIL.

**Charlie Marsh:** I didn't really participate too much in that conversation -- at all, I guess, in that conversation...

**Adam Stacoviak:** Yeah, \[unintelligible 01:16:51.28\]

**Charlie Marsh:** ...but I think a lot of people don't know what the GIL is, and so they wanted something that was descriptive, also in a positive way rather than something a negative -- not as in negative sentiment, but just in terms of describing what it is, rather than describing what it isn't, in a way.

**Jerod Santo:** Well, free threaded because it just reminds me of Freebird, you know?

**Charlie Marsh:** Yeah. I haven't thought of it that way, but I guess I could.

**Jerod Santo:** We used to hold a lighter up at the concert.

**Charlie Marsh:** Now it's a phone, yeah.

**Jerod Santo:** But now everybody holds their phone up. Anyways...

**Charlie Marsh:** Yeah, yeah.

**Jerod Santo:** Free threaded, Freebird... Anyway.

**Charlie Marsh:** Yeah. We actually have this guy on our team named Carl Meyer, who's super-amazing... And before this, he worked at Meta. Meta has a fork of cPython called Cinder... And it's sort of a performance-oriented fork. It is open source, but it's not really open source in the sense that people run it outside of Meta. It's just sort of open source in the sense that the code is open source, and they use it as a reference. But Cinder was this performance-oriented fork, largely - if I understand correctly - built with Instagram in mind, because Instagram is all Python; Instagram is this big, obviously very high volume application... And so they did a bunch of things in Cinder to try to make Python faster; or I guess make Python faster, not try. I think they did make Python faster. And it had some very interesting ideas... They tried to upstream some of them. So for example, Cinder added lazy imports. So in Python, imports are all eager. So when you run import whatever, at the time that Python interprets that import statement, it goes in and parses all the code, and actually executes all the code... And that cascades down.

So basically, when you start up your application, if all your imports are at the top level, you kind of import the world... And that can lead to slow cold starts, and a variety of other problems. And so Cinder added support for lazy imports. And then they tried to get that upstreamed a few times, and it failed... But we have a person on our team basically who worked on Cinder, and he worked on Cinder's JIT, which they did a bunch of interesting stuff to try and make Python's JIT compiler faster. And so basically, we have people on the team who understand how to work on the cPython interpreter, but I don't think that we're at the point where we -- I don't know.

**Jerod Santo:** So you're saying there's a chance.

**Charlie Marsh:** I'm saying there's a chance... No, no, I don't really want to. \[laughter\] I mean, for me, it's like -- I sort of look at these things from a few perspectives. One is it's good to be a little bit naive, because otherwise... If you're not a little bit naive, you just won't try anything hard... Because it's just too easy to say "Well, a bunch of people have tried it. Of course it can't be done." So I being a little bit naive... But at the same time, you also have to have some humility, and be like "Okay, a bunch of people have tried this. Why didn't they succeed? And why could you succeed where they didn't?"

**Jerod Santo:** Right.

**Charlie Marsh:** So you kind of have to thread the needle I think a little bit, between being incredibly arrogant about being able to solve any problem, and being a huge naysayer who just says "Well, that can't possibly be made better."

**Jerod Santo:** \[01:19:53.12\] Especially while there's lower hanging fruit. You have a list of things that you're currently prioritized, which arguably - I assume you would argue this - is higher value for less work, right? It's lower hanging fruit than that particular fruit up there. Because that one's way up high. And so maybe you could do it, maybe you should do it, but clearly, right now you're focused on other things.

**Charlie Marsh:** Yeah.

**Jerod Santo:** Maybe when you raise your next round.

**Charlie Marsh:** Yeah... \[laughter\]

**Adam Stacoviak:** Well, I come back to the why. I mean on this subject, I come back to the why. So you mentioned being naive... I think that's true. There's been some efforts with prior art to do some version of a runtime. I think there's even Rust Python out there... I think Dropbox had one that made it faster, but they abandoned it... So there may be some - sadly to say it like this - there's dead bodies out there that you have to sort of navigate. Maybe we shouldn't go there because it's already been tried before... But coming back to a why - and you mentioned you want to build in the open, you want to incentivize your company to build in the open... And so I need to just come back to that why - hypothesize with us for a moment... If you did do something this, what would be the why? How would you quantify the why, from a business owner, CEO, founder, investors, all the things... How would you prioritize or think about the why of writing a runtime for Python in Rust?

**Charlie Marsh:** Right. I think that's probably one of the reasons that I don't know that we do it, is the -- well, so if I think generically about that question in terms of the business strategy, it's the open source... Ignoring the Python runtime for a second and just thinking about our existing tools, the existing tools that we build give us a couple of things. So one is they give us a lot of distribution. So we're building a registry, and we have all these people that use Uv, and so we have kind of a natural audience of people who maybe want to try the registry.

Also, intimately linked to that is also brand... I actually think a lot about brand. I think brand is maybe a little bit of a -- everything around developer marketing and brand is kind of seen as slightly dirty if you're an engineer, because it's not technical... But I actually think brand is incredibly important. And for us - you know, we built Ruff, and then when we came out with Uv, people were like "Oh, they built Ruff, so this might be good. I should give it a shot." I view that as kind of compounding. I want to earn users' trust and prove that we can build great things. And so that all accumulates in brand... Which again, ties back to distribution. It's like, if we build a registry, people hopefully think "Okay, that will probably be good, because these people built these other good things."

The other things it gives us are -- I think we have interesting technical advantages across the stack, in a few different ways. So with the registry, for example, I actually want to pull in our type checker in some interesting ways. I want to be able to do things like detecting Semver incompatibilities within the registry; understanding, if a new version of a package comes out, can you upgrade without having to... Or are there breaking changes that affect you? Or security scanning. If a vulnerability comes out in a package, and we know that you're using it, and we have a really good understanding of your code, we might actually be able to tell you whether you're affected or not. So for me, it's also about trying to compound these horizontal technical advantages across the tools by bringing those things together.

I think for the runtime, if you think about the why, the why would be user impact. But it doesn't necessarily enable us to do a lot of things that we otherwise couldn't do, at least right now, unless we built it with specific technical ideas in mind. Maybe we decided, "Okay --" I'm just making this up on the spot. It's really not something I've thought that much about, but it's like, okay, we want to build a version of Python that's like -- maybe we really want to focus on Wasm, or something. I don't know. Maybe we have use cases where we want Wasm to be like -- like, we want to run this on the edge, in the CDN or something, and we're like "We're going to go all-in on that idea." So I think we'd have to have some idea that basically enables us to do and offer things that we otherwise couldn't offer.

**Adam Stacoviak:** Distribution is a really good reason, I think.

**Charlie Marsh:** \[01:24:17.19\] It is a good reason, for sure.

**Adam Stacoviak:** More Uv out there means more Python out there, and more Python means more Uv users...

**Charlie Marsh:** Yeah. I mean, I do think also -- not to be too full of myself, but I do have to think a little bit too about "How do we make sure that Python keeps growing?" Because that's important to us. So if there are big existential problems in Python... If we thought packaging was an existential problem or something, then it's like, okay, let's try to solve packaging so that Python keeps growing. So there is a little bit of that, too. I don't think the runtime is -- I'm not suggesting that the runtime is in that position, I'm just saying that there are benefits for us in helping grow Python. And so if there are things we think that we can do to help grow Python, those could be worth doing, even if they're not connected to a concrete product offering that we charge money for. Again, I'm not suggesting that the interpreter or the runtime is in \[unintelligible 01:25:12.28\]

**Adam Stacoviak:** We're just hypothesizing about, I think, learning from the past to save the future from itself. I mean, we're just doing what Rust is doing.

**Charlie Marsh:** I'm just saying, in terms of things we choose to work on and why they're worth working on, one of the considerations is just "How do we help grow Python, and make Python more popular, and bring more people into Python?"

**Adam Stacoviak:** One more question on this. Maybe too far, but I don't think so.

**Jerod Santo:** You tell us, Charlie.

**Adam Stacoviak:** So if you're concerned with somebody being offended because we're hypothesizing about a future that doesn't exist, and if it should exist because you have business interest and vested interest in Python growing - I think that's silly to get upset with that. So if that's you, chill out for a second. Do what you can, given how you've improved other Python tooling, and to the degree that you have improved that tooling, if you did undertake a runtime, what benefits do you think you could deliver, just by nature of what you've done already with Rust tooling for Python? ...besides just simply speed. Like, enumerate specifics, if you could.

**Charlie Marsh:** I think there are things -- again, we're just speculating here.

**Adam Stacoviak:** Just speculating.

**Charlie Marsh:** I think there are things that would be interesting to consider changing around how -- this sounds small, but sort of like how environment discovery works. Basically, I guess the way I'd put it is take things that actually happen in Uv run and see if could make them part of the runtime, is maybe a way to put it. So if you're in a project and you run Python, run that in the context of the project, as opposed to just trying to find some global Python interpreter. Basically, trying to make the runtime more environment aware and project-aware, I think would be something that's kind of interesting that we could do. So trying to smooth out some of what we see as the traps that users run into.

I mean, I'm sure we would initially be drawn in by performance if we thought we had ideas that we could pursue there... But again, there are plenty of people working on cPython runtime performance, and I don't think -- I think there's maybe actually a slightly different... The thing that Bun is doing, which is maybe interesting, but also maybe potentially a trap - it kind of remains to be seen. Not for users, but just in general... They're building out a pretty large standard library. I guess standard library is probably the right word. So in their standard library, they actually have -- I'll probably get a bunch of this stuff wrong. I think they have an S3 client, I think they have a Redis client, I think they have a database client that understands MySQL, and SQLite... They have all this stuff. So the idea is you can just work with Bun and import all those things and you don't have to worry about going and finding third-party implementations; they're all natively implemented.

\[01:28:16.13\] I think there is something interesting there. I think there are absolutely downsides to that, but I think there's something interesting to that, which is kind of providing a trusted -- if you can build a strong enough brand, and build good enough implementations, providing kind of trusted implementations for all these things that people need in building modern applications I think it's kind of interesting... But again, I don't know that we would ever do that. But the idea of trying to provide really good implementations of all these things that people commonly need, first of all to provide better implementations that are faster and also reduce the surface area of things they depend on, I think is kind of interesting. You can potentially do that, by the way, without actually forking the cPython runtime. \[laughs\] But I think it's an interesting direction.

**Jerod Santo:** Let's take a moment to reflect on brand, because you mentioned it as something that you think is important, and that a lot of software people don't necessarily think about. I'm a fan of yours, I think specifically speaking to Astral.sh...

**Charlie Marsh:** Oh, thanks.

**Jerod Santo:** I think it's a nicely designed website. I appreciate that you have bucked the trend of following Linear down the road of dark mode everything. I like that there's some brightness going on. Talk to us about brand, how you think about it, why it's important... By the way, the font is really sweet. I'm not sure what that is, but your Y is really cool-looking, and the G's are nice, too...

**Charlie Marsh:** Thank you.

**Jerod Santo:** So you've got some taste, in my opinion, or at least we share tastes; there's no accounting for taste, but...

**Charlie Marsh:** Yeah, whether they're good or not...

**Jerod Santo:** Yeah, we have similar tastes at least, so I think they're good, because they align with mine. But yeah, talk about brand - why it's important, how you attack it. Because in my opinion, that's another thing that's setting Uv and Astral apart, and it's kind of one of those things that you don't think about right away, it just is there... And so your thoughts.

**Charlie Marsh:** Yeah, definitely. I mean, I don't really explicitly think in terms of developer marketing, but when I first started... When I first released Uv, I was trying to just explain to people as quickly as possible, as succinctly as possible, why they should care about this project. And so the readme for me, the top of the fold of the readme had to capture that. It had to capture "Why is this interesting?" And I remember when I did the launch too, I had a little graph that was just a benchmark graph of Ruff versus a bunch of other things. And I think that graph was very important for conveying to people the significance of what's happening.

So for communicating to developers - communicating to anyone, really; it doesn't matter if they're developers or not - you have to assume that you basically get no attention. If you write a blog post, for example, you have to be thinking in terms of most people, they might read the headline and they might read the TL;DR, and they might look at the one image at the top, but they probably won't read any of the text. Some people will, and it's important to care a lot about what it says, but you have to be thinking in terms of "How do I explain to people why they should care about this as quickly as possible?"

So even just by thinking about that and productionizing it, I think as an engineer, you'll probably be doing more than a lot of small -- also, by the way, caveat before we get into the actual interesting stuff... You definitely don't have to care about any of this if your goal is not to make your project very popular. You can just build stuff and publish it and not care about this at all, and I think that's totally cool. But if your goal is to get people to use your thing and care, and follow along, I think this stuff matters a lot. A lot of how I think about brand, too -- it's very holistic. So when people come to our repo and they file an issue, or they ask a question in Discord or something, I would always view those moments as like "I have an opportunity here to make a friend, or win a fan or something, or win someone who's going to support the project." And you try to compound that over time.

\[01:32:19.04\] And so when people would come in -- first of all, when I was starting the project and anyone would come file an issue, I would just be so excited that they cared at all, and I would kind of just focus on "How do I give these people a great experience?" And over time it becomes -- even if I'm going to say no to what they're asking for, how do I make sure that they have a good experience, as in they feel heard and respected and they understand why I said no... And we've just focused on that a lot. We try to be really responsive in the open source, and we try to give people a good experience, and it takes a very long time for that to have an effect... But compounding over years, I think it's had a huge effect on our open source community and how people view the project.

You have to take a very long-term view towards a lot of these things... But again, that all connects, to me, to brand. Brand is not -- it is the visual identity of the company, but also it's "What do people associate with it?" And I want people to associate with us what I hope is true, which is we want to be good, responsible, approachable open source maintainers, who are demonstrating responsible stewardship for these projects, and that people can trust us.

It takes a lot to keep this up, too. Doing the open source -- even just trying to be really responsive in the open source is a huge investment of our time. We could probably have the whole company just maintain the open source and build nothing new, and that would still be full-time work for us... But also with everything we release, we want to maintain the quality bar that we have.

Maybe actually a good example of something that we've tried to put into our brand is we try to fix things really quickly. And so even if we release something that's broken, we'll fix it really quickly. And that actually, I think, has become a really helpful part of our brand, because if something's broken, we fix it quickly, and then it gives people more trust that if something breaks, we will fix it quickly. If we ship something that's not finished, we'll fix it quickly. So I think I just take a pretty long-term view towards a lot of these things, and I try and think really hard about like, if I were a user, what would I need to hear? What would I need in order to use this thing?

On the visual brand we worked with some designers to do the initial branding, and I actually showed them a bunch of examples of sites I didn't want to be like. I didn't just show them positive examples of things I thought were interesting, I also showed the -- I obviously won't name any of these companies, but I just showed them companies where I was like "These to me feel very derivative." Vercel and Linear have really amazing brands and design, but then so many companies have tried to just be Vercel or Linear... And I was like "I actually want to do something that's pretty different." It should still feel professional and well done, but I want it to be a little bit distinctive. So it's very much intentional, I think, that it looks a little bit different than a lot of other developers tool.
**Jerod Santo:** Well, that's one of the things that grabbed me... Because as somebody who's steeped in the industry, as Adam and I are, and we see lots of company websites, lots of open source project websites, there is this -- well, it used to be the old bootstrap effect. You could tell when you saw a bootstrap website. Well, now it's like you can tell when you see a VC-backed, open source website, because they're basically derivative. I mean, not all of them are. Linear, I think, started it all, Vercel does have amazing work done... And so a lot of that is just like "Well, those look good. I'm going to copy that." And I've got no problem with that. If there's more important stuff to do - fine, go ahead and do that. But I've been waiting for a turn in the trend. Like, "Who's going to come out and be different?" And so I'm just applauding you for that reason.

**Charlie Marsh:** \[01:35:59.08\] Yeah, no, I appreciate it. Yeah. Sentry's kind of an example here too, where it's like, they have a very different brand...

**Jerod Santo:** Yeah, Sentry does have --

**Charlie Marsh:** ...a very distinctive brand. Some people don't like it, some people love it... I mean, Posthog would maybe be another example. They have a totally crazy brand.

**Jerod Santo:** They do. Their website -- did you see their redesign? Their website is crazy right now. It's like an in-browser --

**Charlie Marsh:** Yeah, I did. But they really lean into it. It's like, it's everywhere. Real world advertising, everything is just crazy.

**Jerod Santo:** Right. Well, you said - love it or hate it. Those are two strong emotions, right? You're going to remember it. I knew exactly what you were saying when you said Sentry and when you said Posthog. Whereas there's lots of them where I'm like "I can't remember what that brand was." But anyways...

**Charlie Marsh:** Yeah. I mean, I think it's been interesting for us too to try to figure out how to kind of connect our open source to the brand... Because I think there are actually a bunch of people who don't realize that our tools are connected, or that there's a company behind this work... And so it's been kind of interesting for us to think about how to communicate that. Over time it happens, but we definitely have people who are surprised to learn that Ruff and Uv are related, for example; or they don't know that there's a company behind these things. So those are sort of separate challenges that that comes up, too.

**Adam Stacoviak:** Mm-hm. One thing I go back to and it just stems from the things you are saying is most -- those websites, that are not to be named... They're beautiful, but they generally suck in some way. And the reason why I think they suck in some way -- and really the main thing is if you land on it, it's really hard to understand what they do. It's some sort of like pie in the sky marketing pitch, rather than something as succinct and just compressed as "Next gen Python tooling." I think that's the promise you're delivering, and I think that's the thing that I think is challenging with a lot of these... And I evaluate a lot of them too, because we work with a lot of different brands, by way of understanding who they are, so that we can take their message and help them communicate to our audience in a way that isn't marketing, but it's a story of who they are, why they built what they built, who uses it and how they benefit from it, and how they, the audience, may also benefit from it, too.

Too often I'm just lost in my journey, in my personal journey... Because that's my job, is "Who are you? Why do you exist? Why should our audience care, and how can I help you tell our audience, in a way that respects them as developers, respects them in terms of their time, and helps them truly learn and be educated about that tool, that company, that thing, that service?"

**Charlie Marsh:** Yeah.

**Adam Stacoviak:** And I spent a lot of time just figuring out "What do you do?" And your homepage doesn't always -- not yours, but the proverbial your...

**Charlie Marsh:** Yeah, yeah.

**Adam Stacoviak:** ...often just misses the mark. It's like bento box this, and sliding thing there... And it looks really beautiful, but it's like, "Can you please just show me the tool? How does it work? How am I going to use it?" I think that's the challenge.

**Charlie Marsh:** \[01:39:03.07\] Yeah. I mean, I think the other thing that I've found is I couldn't -- I can't really outsource voice... All the copy on the site I did myself, because I just think a lot about -- I guess just because I've spent my whole career as an engineer. I know what it's like to land on those sites, and I know what it's like when people speak to, especially to engineers or technical audiences, in a way that feels authentic, and in a way that feels inauthentic.
So yeah, I guess the trade-off is I spend so much time on any public messaging. The Pyx announcement blog post, or even the Twitter thread... None of that stuff is off the cuff; that stuff's like I'm spending a week writing a draft, throwing it away, getting feedback, writing a draft, throwing it away...

So yeah, I spend a lot of time basically on our public messaging, and the things we say... And I've sort of just accepted that that's just something that takes me personally a long time, and I have to go through a bunch of drafts, and I have to have a few chances to look at things with fresh eyes... Which means it takes time, because I need to step away from something for a day, and come back and read it... Anyway, my point is just that it takes a lot of time, and I think it's hard to fake, and it's hard to outsource.

**Adam Stacoviak:** Yup. Totally agree.

**Jerod Santo:** Well, we've kept you here a long time... We appreciate you chatting with us.
**Charlie Marsh:** Yeah, it's been super-fun. We've gone in a lot of different directions. I appreciate all the great questions, and all the interest, and letting me talk about some fairly obscure technical things...

**Adam Stacoviak:** That's fun.

**Jerod Santo:** That's what we do here. Yeah, that's what we're all about.

**Adam Stacoviak:** That's the good stuff.

**Charlie Marsh:** Yeah... \[laughs\]

**Jerod Santo:** We've enjoyed it, for sure.

**Charlie Marsh:** Yeah. I've learned more about Python and Python packaging over the past two years really than anyone should know... So whenever I can find people to listen, I'm very happy to chat about it.

**Adam Stacoviak:** Well, Pyx is what's next... Astral.sh/pyx.

**Charlie Marsh:** Yes.

**Adam Stacoviak:** Go there, check it out. It is the next step in Python packaging. Join the waitlist... There you go.

**Jerod Santo:** Brew install... No, don't brew install.

**Adam Stacoviak:** Don't brew install.

**Jerod Santo:** Curl install uv...

**Charlie Marsh:** Yeah, curl install uv. No, just install uv however you want, but you should use it.

**Jerod Santo:** Yeah, come on.

**Charlie Marsh:** It's great.

**Jerod Santo:** Do it the right way.

**Adam Stacoviak:** Very good. Thank you, Charlie, for sharing your story. Awesome.

**Charlie Marsh:** Yeah, thanks for having me. Take care.
