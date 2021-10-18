**Erik St. Martin:** Welcome back everybody to another episode of GoTime. Today's episode is number 36, and today's show is sponsored by Toptal and Compose.

On the show today we have myself, Erik St. Martin, Brian Ketelsen is also here...

**Brian Ketelsen:** Hello!

**Erik St. Martin:** And Carlisia Pinto...

**Carlisia Thompson:** Hi, everybody.

**Erik St. Martin:** And our special guest today, bringing some well-needed love and knowledge to the dependency world in Go is Sam Boyer. How are you, Sam?

**Sam Boyer:** Hello, hello! I'm great, how are you?

**Erik St. Martin:** Good, good. Do you wanna give everybody a little bit of a background of who you are, what you are working on? We'll kind of kick things off there.

**Sam Boyer:** Sure. I'm a Go programmer, believe it or not...

**Brian Ketelsen:** What?!

**Sam Boyer:** It's crazy, I know.

**Erik St. Martin:** What is this Go thing?

**Sam Boyer:** It's weird, I hear there's rodents involved... I don't know much more than that. I've been interested in things related to package management for a long time. One of my earlier things in my open source world was I was the lead engineer who built the Git hosting platform that's still used by the Drupal project, so I have this -- it's not technically package management, but it's quite adjacent; it's source sharing, and all that. So I have this long history with dealing with communities and them having code and wanting to share it.

A few years ago - I think actually it was around the first GopherCon, 2014... I know [Matt Butcher](https://twitter.com/technosophos) and [Matt Farina](https://twitter.com/mattfarina) - all three of us were co-workers back in 2010 or so, and they're of course the authors of Glide now. At the first GopherCon we were sort of talking, "Hey, we could work on this package management space that really desperately needs it", although in 2014 -- I think it's fair to say that at that point there was not as much clear public understanding or dialog around it being such a problem.

So they started to work on Glide; I didn't really come in until later... But there have been all these different projects all over the place from a bunch of different people that tackle at least part of the general problem.

For me it was end of December 2015 that I started getting -- I can't remember what the precipitating event was, but I remember being really annoyed (that much is clear in my mind) with some tool that I was using. It may have been Glide, maybe it was GoDep - it doesn't matter. But I decided "Okay, I'm gonna try to describe how we should solve this problem", so I spent six weeks writing this essay which turned into this 13,000-word monstrosity that's on Medium, that I published February of last year.

I'm proud to say that I stole five years of productivity from the world, because that's how many hours it takes for the number of people who read the whole thing to read the whole thing. \[laughter\] It's my favorite way to think about it.
\[03:48\] This is the thing, too... This is a complex social problem as much as it is a complex technical problem, and I think it's fair to say that there was a lot of acrimony over this problem a year ago. The approach that I decided to take was I was gonna write this essay and then try to crank up this library that is now [GPS](https://github.com/sdboyer/gps) and is the thing that's powering the dep tool, and try to use that as a way of -- instead of just adding another tool, to use that as a platform for bringing together the different tool maintainers and sort of creating a common shared conversation that let us move in more of a consensus direction instead of this fractious thing that had been going on for so long.

I feel like I had an [MVP](https://en.wikipedia.org/wiki/Minimum_viable_product) with GPS around GopherCon last year. When we tried to wrap this up, the shortest summary from there is that [Peter Bourgon](https://twitter.com/peterbourgon) decided to convene this package management committee, which started meeting September. That was me and [Ed Muller](https://twitter.com/freeformz) and [Jess Frazelle](https://twitter.com/jessfraz) and [Andrew Gerrand](https://twitter.com/enneff), and we were all on the phone a couple times a week, trying to hammer this thing out.

Around October last year we started actually implementing the dep tool on top of GPS and then we released in early January. Now we're on the mad dash towards making this thing real and official, that is integrating it into the Go toolchain.

**Erik St. Martin:** Let's talk about that a little bit, too... GPS, specifically - you had built a library around doing the package solving to be used potentially by multiple tools...

**Sam Boyer:** Yeah.

**Erik St. Martin:** Let's talk a little bit about that and kind of what role that plays in it, and the motivation behind having a library instead of one standard canonical tool that everybody uses.

**Sam Boyer:** Right. So at least half of the motivation there really was social and not technical, at least at the outset. Again, I didn't wanna just ship yet another tool. I have the [XKCD](https://www.xkcd.com/) situation in mind - there are 14 competing standards. I know what I'll do - "I'll write another standard" situation. There are 15 competing standards. It felt like I was just gonna reproduce that problem.

So instead I wanted to sort of push this down into a library, with the idea that if I could solve the problem in a general way where different tools could use it, then we would end up bringing the tools closer together. It will be a way to heal some of the divide in the tooling.

After having done that, I'm really glad in retrospect, because it turned into a really interesting problem - how do you actually pull out the pieces of dependency management and create interfaces around them... And what are the pieces of dependency management?

In many ways, it sort of flowed directly from writing this giant, long article where I tried to describe the design of a good system that does this into actually doing it in an abstracted way.

**Carlisia Thompson:** One thing that I noticed when I was going over the GPS library - which stands for Go Packaging Solver - is that the language, just like you explained, was meant to be a foundation for the tools to build on top. It seems that that was the motivation. Now, going forward with GoDep, is that still a goal? Because doesn't the committee want to move away from having multiple tools?

**Sam Boyer:** Yes, yes. That's a key part of the question, that I should address. We are very much hoping to have that become official. To be very clear, it's not like the dep tool has been blessed by the Go team at this point - this is still experimental - this is by no means guaranteed to happen, but we're on a good path and we're doing everything we can to make sure it happens. And yes, the goal is that we would obviate the need for pretty much any of the other tools that are out there today, and ideally also provide migration paths from them, so that people can just run a command and their project is converted over to the dep-based equivalent.

**Erik St. Martin:** \[07:58\] And the committee that you were a part of in developing this pretty much had representation from the majority of the tools that existed out there, so it should in theory solve all of the use cases that each of the individual authors had for their own tools...

**Sam Boyer:** I think so. We had the core committee that I listed the members of already, and then we also had the advisory committee. I'm gonna feel terrible if I forget somebody, but I believe that was Daniel Theophanes, [Dave Cheney](https://twitter.com/davecheney), Matt Farina, [Steve Francia](https://twitter.com/spf13). I believe those were the four folks there.

There were a couple tools that we've missed perhaps, but yeah, we've tried very hard to make sure that we're covering all the use cases. There are a couple things, like right now we don't have the ability to support local mirroring in a way that [Glide](https://github.com/Masterminds/glide) does, but these things are on the roadmap.

**Brian Ketelsen:** So there won't be anything preventing Go users from continuing to do their own dependency management...

**Sam Boyer:** There won't. We can't and shouldn't coerce people out of that; my experience is that doesn't tend to work too well. It's fair to say that most of the way we're approaching this is twofold. One is let's build all this community consensus momentum behind one tool, so that we can sort of avoid the pointless fights, and two, make it good enough that people don't feel the need to use the tools that they've been using thus far.

**Brian Ketelsen:** Perfect. I don't ask because I want to use a different tool, I just ask because several people out there are probably already upset. "They're shoving this dep tool down my throat...!"

**Sam Boyer:** Exactly, that's not a situation I wanna create. To me, that's just pointless acrimony and an argument we don't need to have if we make something which is good.

**Brian Ketelsen:** Awesome.

**Erik St. Martin:** The interesting problem with the multiple tools though, rather than having a ubiquitous way of doing this stuff is that when you have dependencies that have dependencies and all of them use some different vendoring tool it gets really complicated to be able to flatten the dependency tree and be able to create repeatable builds like that.

**Sam Boyer:** This is actually one of the earliest design choice that I made in GPS - GPS is a concept of both the manifest and a lock; this sort of two-file system... I could go into describing into what's all entailed there, but the brief version of it is manifests essentially describe constraints, and manifests only describe constraints on your direct dependencies, whereas locks are a transitively-complete picture of the entire dependency graph; there aren't constraints in there, there are specific revisions, ideally immutable revisions.

So GPS is built around the idea that the implementing tool passes in an implementation of an analyzer, and it really only has one method, which is `getManifestAndLock`. So each different tool that implements it could write an analyzer that just learns how to read its own manifest and lock file. But it's also totally possible to implement the analyzer in a way that beats other tools' metadata, to the extent that it's convertible. Glide already does this - it has on-the-fly conversion support for four different tool.

What this means is that we could have a system - and I'll get to whether it's a good idea or not in a second - where we teach dep essentially to read and translate the metadata files from existing tools and do that all on the fly, transparently, inside of a solving process, and use that in order to inform solving decisions.

GoDep, which only records basically commit id SHA1's there's even a way to use that as advisory information, but not an actual constraint. Say, "Let's prefer to use this version of this crazy five-deep transitive dependency. But if we can't work it all out using that version, then it's alright, we'll move over to something else."

\[12:07\] The question though, like I said, is whether this is a good idea or not. It was clearly a good idea for that when -- and there's an outstanding branch to convert Glide using GPS, and it's clearly a good idea in the Glide case, because Glide was never going to become the ubiquitous tool; it was going to exist in an ecosystem where there were other tools, so it made sense, in a forward and back-looking way to be able to convert on the fly from whatever dependency management tool other people might be using.

However, with dep we're in a different situation. If we put that support in, then we've created a situation where we're actually kind of encouraging people to continue using the existing tools, which isn't necessarily what we wanna do. The drawback is if we don't put it in, then we don't really have any of that metadata available for any of the historical versions of code that have already been published... Which if we put it in, we could just dynamically and magically be able to smartly interact with the whole existing Go ecosystem.

**Erik St. Martin:** I was going to point out that that kind of requires that all the tools at least recognize [semver](https://semver.org/) or something like that, because if they're just generically tracking dependencies and not the specific versions of those dependencies it gets hard to solve it above, right? Unless we get into what you were saying, where it's just a recommendation.

**Sam Boyer:** Yeah... So there's a whole universe of different kinds of versions out there. You can have semver and you can have branches and you can have revisions, and you can have tags, and some of this is intersecting, some of it is sibling, some of it is not... So everything that you could do on a current tool when it comes to recording simply a revision or a branch or whatever, is something that GPS can support and translate to, unless -- I'm not aware of any tool that has done this, but unless they literally created some new form of versioning that exists above the level of the version control system itself, then GPS can deal with it, and it can translate an equivalent.

So it's possible for us to get all that information in. However, solving is pretty much a useless process unless there is some sort of range specified. If there's something that says, "This is the one and only version that this can work with", there's no real solving to do there. It's "This works, or we fail." So yes, if the tool that we're converting from does not work with semver, does not have any concept of ranges - and I believe two existing tools have concepts of ranges - then there really isn't much that we can do. It might end up being an overly stiff solution. There's a lot of tradeoffs involved in a decision like that.

However, the plus side of this is I sort of wrote it understanding that there are a lot of different tradeoffs here and it's hard to know from the outset which one of them is the right way to go. I optimized for making it easy to change the way that we do that. We can write the implementation to suck in code from different types of tools, and we can literally experiment with it; it's two lines of code to say, "Yes, let's pull in metadata from other tools" or "No, let's stop doing it." So at the very least, it's easy for us to empirically determine if this is a good idea or not.

**Erik St. Martin:** Brian, were you going to ask something?

**Brian Ketelsen:** I was going to ask roughly the same question, but with a little bit more of a spin to "If we could steer the Go community in one direction, would we ask everybody to start tagging and using semver?" What's the thing that would make the most sense to the community as a whole? How can we encourage that behavior to make all of this easier?

**Sam Boyer:** \[15:53\]Yes, start tagging and using semver, that would be great. Dave Cheney put a [post](https://dave.cheney.net/2016/06/24/gophers-please-tag-your-releases) out about that a year ago or so, and of course there's been an argument for that for a while... But yes, start tagging your stuff with semver now. It will be helpful even if you're not actually using that metadata yet. Simply being able to target those versions will be an improvement.

**Brian Ketelsen:** I've seen a lot of tools on GitHub, like Ruby-based tools or even Node or JavaScript-based tools that do automatic tagging and GitHub releases and such. Do you think that we could encourage adoption if that were built into a Go type command, like `go tag` and `go release` and `go increment version`?

**Sam Boyer:** Yes. Right, someone already wrote -- we put a call out asking for something like this as part of the blog post that we wrote for the Advent series last December. Someone wrote something which I am embarrassed to say that I have not actually had time to look at yet. But yes, having this as a part of the tool is probably something that would be very helpful. The reason that we maybe haven't done \[unintelligible 00:16:59.16\] of it yet is just because it ends up being -- say, `go release, for example... What are you releasing to?

Right now a release is you tag your thing and you push it, for whatever that means in the version control system that you're using. In the future, if we end up going the direction of having some sort of central registry - something analogous to NPM or Crates or all the different ones that are out there - then the `release` command would be publishing code into that system. But that's its whole own subdomain, and we do have an open issue for it in the dep queue (there's an interesting discussion there), but it's not clear when we'll go that direction, or if we will.

The real value now actually is the static analysis that can tell you which semver version you should bump. That's the thing that helps, because it makes sure that we're using semver correctly.

**Brian Ketelsen:** This is completely off-topic and on-topic at the same time, so forgive me for my random ADD thing, but one of the interesting notes that we had today for news items, new projects that came out was the UpSpin...

**Sam Boyer:** Yeah, [UpSpin](https://upspin.io/).

**Brian Ketelsen:** Yeah, Andrew and Rob's distributed storage thingy... And it occurred to me that using that content-addressable distributed file store like that would be a really interesting way to tag and have a very large-scaled distributed repository of stuff. One of the things that everybody hates about GitHub - even though we love GitHub - is that when GitHub is down, everybody's down. The same thing happens for Rust Crates and Ruby Gems - when their servers go down, everybody goes down. But if we had a distributed file store like that for our system, a) we would be badass because nobody has it, and b) we could write it in Go. I don't know, it was just a random thought I had. I've got a little bit of a fever, so forgive me if it's crazy.

**Sam Boyer:** No, totally... Yes, and actually I would say one of the immediate comments that I got a year ago after I published the article was people from IPFS saying, "Hey, we could host this on [IPFS](https://ipfs.io/). Wouldn't it be great?" And on the other side, I can't remember who it was, but someone also said, "Yeah, I don't want my builds to fail because there aren't currently enough seeders in the network." So you know, tradeoffs...

But yes, I do think this is an interesting thing. In fact, I actually joked - to backchannel to Andrew - that "Hey, maybe we could use UpSpin to do this exact thing that you're saying. It's interesting to explore, maybe we can do it.

**Brian Ketelsen:** Interesting.

**Sam Boyer:** I mean frankly, I'm pretty roses and unicorns and rainbows about the possibility of this whole problem space anyway; I think there's a ton of different things we can do, and looking at using some sort of distributed storage for tracking people's releases is definitely on that list of cool stuff.

**Erik St. Martin:** Alright, so I think it's time for our first sponsor break. Our first sponsor for today is Toptal.

**Break:** \[20:10\] to \[\\00:20:43.13\]

**Erik St. Martin:** And we are back, talking to Sam Boyer about the GPS tool and some of the new dependency management stuff that the community's been working on. We've talked a bit about how GPS works and the motivation for that... What I'm interested to talk about a little bit is the dep tool itself. Is this created more as like a reference implementation for using GPS, or does it offer any functionality and features that maybe don't exist, and some of the tooling that people are familiar with already?

**Sam Boyer:** The single thing that GPS and therefore dep does that other tools don't really do is it's a real solver, which means that it's possible for us to have this useful pattern where each different project in the dependency graph get to say, "These are the constraints on the versions of my dependencies that I can use, and we can have two different projects depending on the same project" - this is generally referred to as a diamond dependency - and work out which common version can be used, given the constraints of the two parents. Or to say that there's no way to actually work this out.

This is a constraint-solving problem, it is NP-complete, it's nasty, but having that basic capability is -- the essential reason that that's so important is it lets each different author who's working on their own project make choices about like "These are the versions that I know that I work with, and I, as the person importing something else, don't have to go and dig into all of your dependencies and then their dependencies and then their dependencies and end up getting taken very far away from my code, my domain of knowledge and making some decision about which version to use. It essentially distributes the problem to everyone working in the ecosystem of which versions of your dependencies should you use.

It doesn't force us to respect what everyone else says about their versions of dependencies to use - there is override behavior in everything - but it gives this sort of same default where we get to all collaborate on the hard problem in general that is "Which version of my dependencies do I use?" It gives us a fully-featured solver that lets us answer that question, and there is no other tool out there that has that.

**Erik St. Martin:** Yeah, I was gonna ask that same question, because a lot of people, especially if you're using packages that aren't constantly maintained, some people will put hard versions rather than loose for semver, and when you get up to your level, it can't solve whether there was an easy way to just be like, "Um, I know that they want 1.2, but I'm perfectly okay with 1.2.3."

**Sam Boyer:** Yes, there's an override behavior. If it exists today, it works today. The rest of it to say though that we've aggressively invested effort in trying to make this as simple an experience as possible, which is to say we're trying to pair out as much of the command set as we can, we're trying to keep the declarations that you have to make as minimal as possible. And actually, a really key design decision - I would say this is actually the most sort of uniquely Go thing about this entire system, because GPS has... I originally adapted it from the Pub Solver for Dart, but it's structurally similar to the solver in Cargo.

\[24:14\] There's a lot of commonalities between these systems, but the thing that is most unique about Go and dep in particular is that in these other systems their manifest files declare both the constraints concept and the requires concept. You have to list something in the manifest in order for it to show up, and it also decides which versions of it can show up.
In dep it's different. The thing that determines whether or not something shows up is the import graph. We statically analyze the code, because this is Go and we can do this. We statically analyze the code, we see which imports are there, and that's what determines whether or not something shows up. You can then... What putting a constraint in the manifest does is it just pairs down the set of versions that can be used. But the crucial thing here is it means that you can continue on coding in the way that you always have - you write your code, you make your import statements, and then it works it out. You don't have to go fiddling with a separate file.

**Brian Ketelsen:** I hate fiddling. So I'm gonna beat a dead horse, because it's what I do... This tool sounds pretty awesome, and I have to admit that the GopherCon website code, which is on GitHub, is now vendored with dep, and the first time I used it, it worked beautifully. I didn't have any issues, it just worked...

**Sam Boyer:** Cool!

**Brian Ketelsen:** ...so kudos for that. That's kind of awesome, considering how new it is. But it occurs to me that unless people tag and make real releases, we're not gonna be any better off even with an official dep tool; we're still out in the wild, wild west.

**Sam Boyer:** Yeah, I think things are incrementally better, even with it. There's the possibility of doing -- well, I think we're incrementally better, but for the most part, yes, you're right... If people are not actually making releases, then there's not a lot of magic that we can do, which is part of the reason that - this goes way back... I didn't think it was a great idea to just to go and fire out another tool. I thought it was really, really important that we try to get everybody together on this and build community momentum and consensus, because there's a lot of opt-in by a lot of different people that has to happen in order for the ecosystem to really work well. Tagging releases is step one.

**Brian Ketelsen:** Well, it reminds me of Dave Cheney's proposal (was it a year or two ago?) where he suggested that Go adopt officially a versioning standard. The response from the community was overwhelmingly "Why?" But as usual, Dave was forward-thinking, and it's kind of disappointing that we're so far behind the curve on this. Even the younger languages, Nim and Rust (which is younger than Go), they all have this concept almost intrinsically built in, and yet Go really relies only on Git or its underlying version control system for any concept of versioning. I'm disappointed by that.

**Sam Boyer:** My take on that long, painful thread was that we had a chicken or egg problem. There was no reason for people to start using tagging until there was a tool that actually really worked effectively with semver. Then there's no reason to write a tool, unless people have already made the release. So we're in this nasty situation where it's sort of hard to break out, which again is why it's like well of these problems, the only one that one person or a small group of people can really solve is to make a tool that works well and robustly. With semver, that then knocks one side of the equation out. The rest of it is pushing for adoption.

**Brian Ketelsen:** \[28:03\] So if we were to give somebody a platform at GopherCon, say a stage in front of 1,500 people, live stream to the world, do you think we could make some change?

**Sam Boyer:** I think we could make some change.

**Brian Ketelsen:** Interesting. Not that we have a platform to give, but just hypothetically... \[laughter\]

**Sam Boyer:** This sounds totally hypothetical and not at all resembling the universe that we live in, yeah.

**Carlisia Thompson:** Sam, I wanted to ask you to talk about the vendor directory. I'm looking through Ed Muller's [blog post](http://icanhazdowntime.org/post/dep-101/) "I can haz downtime", and he describes here how you do `dep ensure`, and that basically creates a vendor directory which is mostly what most people do these days. That makes sense if we're not going to have a central repository where to store the different libraries of versions. So tell us how it's going to work and what it's gonna look like and what's gonna need to be different from what people are doing today.

**Sam Boyer:** I think that the actual structure of files on disk is not gonna change. We're still gonna need a vendor directory; those semantics are not gonna change any time soon. The thing that's worth noting about it - and this is in at least one of the issues... I wanna write a script that can go and count the number of words that I have put into comments in a repo on GitHub, because I don't know how much I've written in the last month, but my head is spinning all the time now. A lot of discussions, which is great.

So in one of these issues that is giving me brain fog, at the top of it we note that you should think of the vendor directory as an implementation detail, not as the actual target that we're going for. This is sort of way off into the future, so I don't wanna dwell too much on it, but we think it's possible to have an alternative implementation that does not require us to place things into vendor and constantly swapping these files around on disk. We think that solution could be a lot more elegant. Essentially, the only downside of it would be the fact that it's not in your repository anymore, meaning that you are subject to left-pad style failures, where if the upstream goes away, you can't necessarily recreate... Which is a real concern.

**Erik St. Martin:** Is that a new verb now? We're just gonna call it left-padding?

**Sam Boyer:** Left-padding... I mean, I've given presentations where I certainly use it as a verb, so I think it counts. Does that answer your question, Carlisia?

**Carlisia Thompson:** Yeah, and also the vendor directory - is it going to be flattened?

**Sam Boyer:** Yes. Yes, always, and aggressively. Vendor is volatile, and if you put stuff in there that the tool didn't put in there, it will blow it away and not apologize.

**Erik St. Martin:** See, that's always good too, because people like to patch things.

**Sam Boyer:** No, there's no apologies for that. The only thing with treating Vendor as volatile that I have concerns about is some things related to code generation. I've seen a couple of issues raised for the last year with this in Glide - I can't remember it offhand. I have a list that might have the issue in it, but I'm a little bit worried that we might get into a nasty situation where if you have to do codegen inside of your vendor directory, and the way that you're depending on the thing that you're depending on requires codegen to have happened locally, inside of its own directory structure; then we get into a nasty situation. But that strikes me basically as something where we need to just say, "If your project requires codegen, design it in a way where it can be generated in an alternative location." Don't require it to be generated inside of your own tree. Frankly, it's so much harder if we try to treat vendor as non-volatile... So much harder.

**Carlisia Thompson:** \[32:06\] I don't wanna jump ahead too much and I don't even know if you can answer this question, but when are we gonna have this tool? \[laughs\]

**Sam Boyer:** Right! This is the most important question, right? The committee's been talking with a bunch of people; we've been talking with [Russ](https://twitter.com/_rsc) as well, and the goal is -- and I have this roadmap that I've been working on, which I was hoping to publish by today; I'm still sort of tweaking some things around in it and checking by other folks in the committee, but it should be up presently, in the next week or so. We need to stabilize the manifest and mod files, we need to stabilize the command set itself, and then we need to define and implement a basic security model for this.

Other stuff is important, but we can sort of continue to work on it post-merge into the toolchain. That is gonna be a hard process. Despite the fact that this is at [github/golang/dep](https://github.com/golang/dep), that does not mean that this is blessed or that is foreordained that this will make it into the toolchain. We have a long slog and we need a lot of help from people to really get it there. But we go with this roadmap and ideally, in the greatest of worlds, the Go toolchain that you get with 1.10 will include the modified version of dep and this will become the new standard.

**Erik St. Martin:** Yeah, I think anything at GitHub is production-worthy, so you shouldn't have put it there. \[laughter\]

**Sam Boyer:** You and half of the rest of the world. So it's fair... There is a reason we waited a while to release this. We wanted it to be at least runnable, despite the big letter warning that says "Don't commit the manifest and lock files that are generated by this!" People have already done it, including people on the committee, so it's not like I can complain that much.

**Carlisia Thompson:** And is there a date for 1.10?

**Sam Boyer:** That will be like the end of this year, I believe.

**Carlisia Thompson:** Cool.

**Erik St. Martin:** I'm trying to remember their releases... One's in August, and the other one is -- I can't remember.

**Sam Boyer:** It will be this time next year.

**Brian Ketelsen:** Sorry, I was muted... It's February 2018, because we have six-month release cycles.

**Sam Boyer:** There you go.

**Carlisia Thompson:** And talking about help, talk to us about how is the process of people getting involved going to be like? For example, are you going to want to have issues opened before people jump in and start doing things? Because how are people even gonna know what is there to do? Do you have a process, do you have people to lead this process? Do you need people all the way from that point on?

**Sam Boyer:** Yes. The answer is yes to all of the possible things that I could need; I need all of them, that would be great. We need people to help with kicking the tires, we need people to help with writing docs, we need people to help with figuring out some of the design issues that we have, we need people to help with the project management itself, and sort of managing the queue. We need help on all these fronts.

The roadmap that I'm trying to get out there is intended to provide a generalized picture, so that people can read it and say, "Alright, I have a sense of where this is going and I have a sense of where I might direct my effort." From there we've got like a "Help wanted" and a good First PR label for our issues on GitHub, so you can find things that way. But we're trying very hard to make a clear entry doorway for people coming to this for the first time and finding their way to somewhere effective. If you can't figure out anything though, then come into the vendor channel on GopherSlack and ping me, and we'll figure something out.

**Carlisia Thompson:** And this is probably the best way for people to get in contact for people who want to start helping...?

**Sam Boyer:** \[35:54\] Yeah. Right now the three ways in are 1) just install it, run dep on a project and do some things, run into some stuff, have some questions, post an issue... I mean, it's runnable enough now that you can really try it; you can kick the tires and just post an issue if you have a problem. You will not get yelled at, I promise. Way 2 is come to the vendor channel, ask some questions, and then way 3 will be have a look at the roadmap and follow your way down from the roadmap into epics and individual issues.

**Carlisia Thompson:** Cool.

**Erik St. Martin:** What do you envision for the future of GoDep? Do you think that will be in a place as a community with semver and things like that, and kind of agreement on the dep tool where if it comes as part of 1.10, community adoption would be mostly there before it hits the Go release? Or do you envision the Go release being the thing that helps trigger the community to adopt it? What's the future you see for the dep tool? I keep wanting to say "GoDep", because likely the tool would say `go dep`, right?

**Sam Boyer:** Well, eventually the word "dep" is gonna go away. It's gonna become like -- now you do `dep init`, `dep ensure`, and it will probably become `go init`, `go ensure`. That's the current plan, anyway. We went back and forth over naming within the committee a lot. We've tried out some alternates, but ultimately did not go with them because reasons.

I think it's gonna be a little of both. We're trying very hard to get this out there and to give people plenty of lead time to be able to test it out. A first major milestone for us really is the stabilizing of the manifest and mod files. Once we do that, people can start kind of using it for real, and the guarantee that we wanna make is once these are stabilized, manifest and mod files are not gonna change, even after integration into the Go toolchain itself. So you should be forward compatible or -- this is the problem with working on package management tools... I literally don't know which direction time flows anymore. \[laughter\]

I'm thinking about going back in time with code history, but forward in time with releases of the tool... It's a very weird place to be in. So you should be able to commit your manifest and log files once we get to the stabilization point, and going back to even those old versions will work fine with even future versions of the Go toolchain that include dep in it.
I think the spot we'll be in is hopefully a lot of people will have had a chance to try it, dep will have existed out in the wild as a standalone thing, it will also have existed for hopefully most of the release cycle as part of the toolchain itself, so people will have the chance to try it in both places. Then we'll turn it loose.

I know there's some hesitation around hiding it behind a feature flag or something like that, because ended up getting complicated with Vendor, but we'll have to see... There's a lot of considerations here, obviously. This ends up touching a lot of things, so the best we can do for now is we just keep pushing forward, hitting all the bugs that we can, hoping that our design is basically sane... Yeah, good old elbow grease and open source.

**Carlisia Thompson:** A lot of work

**Sam Boyer:** Yeah.

**Erik St. Martin:** I think it goes that way with most of these projects, and everybody has their own view for how these things work; we all come from different places and backgrounds, and there's so many different ways people are doing dependency management in the wild now, so... I think that there is mostly agreement between all the people who have been working on tools says a lot, and I think that it's easy to move forward from there.

**Sam Boyer:** \[39:55\] Yeah, that was a lot of the work in 2016 for sure - getting people on board, and I can't tell you how pleased I am with everyone who came together. It was a herculean and long-time effort, but I'm super pleased with all the people that have come together, users and developers of tools alike, to get us to where we are today.

**Brian Ketelsen:** That's awesome. You have to admit, the Go community is pretty awesome.

**Sam Boyer:** I cannot argue with that.

**Brian Ketelsen:** Well, we would laugh at you if you did. \[laughter\]

**Sam Boyer:** You would be right.

**Erik St. Martin:** Alright, so with that, I think it is time for our second sponsor break. Our second sponsor for today is Compose.

**Break:** \[40:36\] to \[\\00:42:19.12\]

**Erik St. Martin:** Alright, we are back, talking to Sam Boyer. So we were going through all the dependency tool stuff... Does everybody wanna talk about projects and news, things we've seen and come across this past week? I know you've mentioned UpSpin... I think we've got a few minutes left of the show, so...

**Brian Ketelsen:** UpSpin is a big one, for sure. If you haven't seen it yet, it's a big project... It's written in Go, and it was written by Rob Pike and Andrew Gerrand among others. A lot of fancy distributed storage mechanisms to it, but at the end of the day the idea is that your content will be addressable with a key that is generally your email address, and it looks like a very interesting project. I did try to install it, but got befuddled on something and gave up, so I walked away. Like almost every other thing in our list today, I've played with almost all of these, it's funny.

**Sam Boyer:** UpSpin is responsible for finding an obscure bug in GPS.

**Brian Ketelsen:** Oh, that's cool.

**Erik St. Martin:** Really?

**Sam Boyer:** Yeah. Not actually that obscure, but... If you import something from tests -- if you import from a test in package A and package B, and then package B imports package A, that's perfectly legal; it's not an import cycle, because you're not actually importing from package B the stuff in the testing part of package A, but the model that I currently use to sort a bunch of this stuff out doesn't split up the notion of which imports are from which source there, so it was erroneously throwing away about two-thirds of UpSpin because of what it perceived to be an import cycle that wasn't actually there.

**Brian Ketelsen:** Yeah, these things happen. You have to break some eggs to make an omelet.

**Sam Boyer:** It's true. We'll fix it eventually...

**Erik St. Martin:** Anybody who may not have listened, 1.8 came out last week...

**Brian Ketelsen:** \[44:09\] Yeah, live on our show it came out.

**Erik St. Martin:** Right. Brian was making a joke, because basically the blog post and tweet dropped while we were recording our show... He's like, "Oh, they were just waiting for us to record." \[laughs\]

**Carlisia Thompson:** So we could annouce it..

**Erik St. Martin:** So yeah, there were a couple of bugs found, that they've already been working on, one of which was really interesting... Basically, it's starting to run across where the SSA optimizations have dependencies on each other and ordering issues now. Inside a loop, if all you did was use the Atomic package, it would basically optimize away that. But it looks like it's already fixed, which is awesome.

It's just interesting, because I think as we come across some of these things, we're gonna run into some more issues, but SSA is gonna be awesome.

**Brian Ketelsen:** I love seeing all of the graphs that people are posting on Twitter of their Go 1.8 garbage collection time as compared to 1.7. The way they used to joke when the new Mac OS came out - "It feels faster already", and Go is actually making that, too. I love that. It makes me happy.

**Erik St. Martin:** Yeah, that's one of the things I love about Go so much - if you just keep writing idiomatic Go, they make it faster for you; you don't have to think about it too much. I saw a post too, and I actually linked to it in our show docs, where Josh Bleecher Snyder was talking about some optimizations in 1.9 that they're wanting to make to interfaces, basically forcing allocations, because internally they represent a pointer to a value. There are basically going to be some optimizations in the way that works, and I guess that it comes across from the way most of the logging packages work - that was what triggered the whole thing. We'll link to that in the show notes.

How about you, Sam? Do you have any cool things that are on your radar right now?

**Sam Boyer:** The truth is I am so just completely narrowly focused on the dependency management problem that other people say "Hey, this thing is happening", and I'm like, "Oh, there's a world outside of what I'm doing...", because I just forget about it. Give me a second, I'll come up with something.

**Erik St. Martin:** You're not forced. As part of the show, we like to discuss things we've run across and things we're playing with. Brian brought (a couple episodes ago?) up a thing called Wuzz, which is kind of like a cool TUI (text user interface) way of messing with cURL, for anyone who doesn't wanna remember all the flags.

I ran across one this week called [HTTPLab](https://github.com/gchaincl/httplab), which is kind of similar.

**Brian Ketelsen:** Is HTTP Lab the one that's like a server-side... It's the opposite, so it will collect the request and then you can manipulate the response and send it back?

**Erik St. Martin:** Yes.

**Brian Ketelsen:** Yeah, I saw that one. That looks really cool.

**Sam Boyer:** That's cool, yeah.

\[dog barking\]

**Erik St. Martin:** And there goes Dunkin.

**Sam Boyer:** I had my first actual need for something like that with a client project recently... I ended up using something in that general field of intercepting HTTP requests and messing with them. I ended up using mitmdump and mitmproxy for it... Although I don't think it actually lets you mess with things, but yeah...

1:Yeah, there's a few things like that. It depends on which side of it you need to be on. In the InfoSec world a lot of people use Burp Suite and things like that when they need the man-in-the-middle request and kind of stop them and modify them on their way. I guess this is the opposite, where you're trying to catch the response, then modify it and send it back.

**Sam Boyer:** Yup.

**Erik St. Martin:** How about you, Carlisia?

**Carlisia Thompson:** I just wanted to mentioned that Sourcegraph put out a blog post talking about how to implement code intelligence. I didn't read the whole thing, I just skimmed, but it looks pretty cool. I'm a big fan of Sourcegraph, so I think this blog post mostly gives you an insight of how they do what they do. If you're not using Sourcegraph, you definitely should because it's amazing. It really makes your workflow a lot better and faster. I sound like a salesperson. \[laughs\]

**Erik St. Martin:** \[48:23\] I think Carlisia's collecting checks. \[laughs\]

**Carlisia Thompson:** Maybe I am... \[laughs\] No, I'm not.

**Brian Ketelsen:** "I'm not just a spokesperson, I'm a member!" \[laughter\]

**Erik St. Martin:** I love their browser extension... Especially when you're trying to find example uses of a library. I think it's super handy.

**Carlisia Thompson:** Yes, exactly. I use it for that a lot.

**Erik St. Martin:** This week was really interested for distributed tools, too. Brian, you mentioned UpSpin, but there were two other ones that were really cool - [Rook](https://github.com/rook/rook), which has actually been around for a little while... Which is a distributed storage that's written in Go. Then there was a new one that I hadn't seen before, which called [Meshbird](https://github.com/meshbird/meshbird) which I haven't played with, but it looked really cool from what they were demoing on GitHub, doing distributed networking with Go.

**Brian Ketelsen:** I did, I played with it. I cannot tell a lie. It works as expected. There was a tool ten years ago -- what was that tool? It completely escapes me, but it was the easiest way to get a VPN up.

**Erik St. Martin:** Oh, it's like Mesh, or... Mosh?

**Brian Ketelsen:** They got bought by Citrix, or one of those people and it just kind of disappeared. But anyway... I digress. This works the same. You just start up a daemon on both instances with a little bit of information, and now you've got a VPN.

**Erik St. Martin:** You're not talking about Mosh, the mobile shell...?

**Brian Ketelsen:** No, no... There was an app that you would run on all of the servers in your VPN chain, and they would open up a secure tunnel in between all of them, and it was all client-side, all user space, and they had Windows, Mac and Linux clients. While I was at work, I had a VPN to my house, and it didn't matter what was in between or who was trying to prevent you from doing that, it all just worked.

**Erik St. Martin:** Nice.

**Brian Ketelsen:** I can't remember what it was... But it disappeared when it got bought.

**Erik St. Martin:** I'm still figuring out the logo for meshbird though.

**Brian Ketelsen:** Oh, they got bought by LogMeIn, that's who bought them. That might be the easiest way to figure it out. Come on, Slack, don't let us down. Hamachi! Thank you! Paulo Pierra, good job. It was [Hamachi](https://en.wikipedia.org/wiki/LogMeIn_Hamachi).

**Erik St. Martin:** We don't even have to do our own fact checking anymore.

**Brian Ketelsen:** I know, this is awesome. It's like having our own backup team. Wait, wait, I'm hearing from the control room - it was Hamachi VPN.

**Erik St. Martin:** Like you've got a little ear piece in and you're being collected live on the news... \[laughter\]

**Brian Ketelsen:** Yeah, I loved Hamachi. I abused the crap out of that thing. Those were the good old days, when I was a kid.

**Erik St. Martin:** Oh, that was the other proposal that I saw too that I wanted to mention... [Fuzzing](https://en.wikipedia.org/wiki/Fuzzing) has become bigger and bigger lately, and there was actually a cool fuzzing tool for fuzzing syscalls, which was interesting. But the thing that I was excited about... I think it was [Brad Fitzpatrick](https://twitter.com/bradfitz) who started a proposal for adding fuzzing as a first-class citizen for test and benchmarks, which is really cool.

**Brian Ketelsen:** That's awesome. There's already kind of a second-class fuzzing in one of the sub packages of testing, but it's not full-fuzzing, it's just kind of half-fuzzing.

**Sam Boyer:** The Quick package?

**Brian Ketelsen:** Yeah.

**Sam Boyer:** \[52:06\] Yeah, I was reading through that issue earlier and there were some issues with trying to pick up the work that Dimitri has done to fit it into the `testing/quick` package... But yeah, it would be awesome to see fuzzing with another toolchain, I think. I love thinking about fuzzing because not only is the word fuzz fun, but the thing that I first think of when I think of fuzz is [American Fuzzy Lop](https://en.wikipedia.org/wiki/American_fuzzy_lop_(fuzzer)), which is the single best-named piece of software that has ever happened.

**Erik St. Martin:** It's funny too, because some of the names of the fuzzing tools are hilarious. There are so many fuzzing tools our there... And fuzzing is interesting too, because there's multiple ways of doing it, too. You have ones that just kind of randomly send junk data, hoping for crashes; then you have others that use more machine learning tactics and you try to show it some good requests and it tries to mutate those until it figures out what a bad request looks like.

**Sam Boyer:** That's a classic. I love it because of the fact that fuzzers are so useful is just such good evidence of the fact that humans are terrible at writing software...

**Brian Ketelsen:** Right, programmers can't be trusted.

**Sam Boyer:** Yes, which is one of the most foundational elements of my programming worldview - we as humans are bad at it. So I would love to see fuzzing included in the toolchain.

**Erik St. Martin:** Unfortunately, there's not really much of another option. If we needed to write software to write software, then that software is just gonna be bad.

**Brian Ketelsen:** That's right. Until the machines take over, we're screwed. And after the machines take over, it won't matter.

**Sam Boyer:** There you go. I mean, it's not like we -- can you imagine? We barely understand the software we write ourselves today. It's just gonna continue getting worse.

**Erik St. Martin:** Yeah, I can't even keep up anymore with everything that's going on and changing in the software world, and I'm glad people are starting to write tools to look for our dumb mistakes in the form of static analysis and fuzzing and all that good stuff.

**Brian Ketelsen:** When you look at the Go tooling, we are so far ahead of nearly every other language in terms of the ecosystem that we provide developers. We've got static checking, we've got error checking... The language itself feeds the ability for developers to write cool tools to help us write better software, more bug-free software, and Go has done such a great job of integrating those tools right into the Go command. We really are light years above most. I love that.

**Erik St. Martin:** Yeah, the fact that a lot of the static analysis tools are built right into the standard library, making it really easy to build your own tooling to look for common mistakes... A lot of languages don't have that - the compiler logic that's completely separated out and not really exposed to the end user.

**Brian Ketelsen:** It's pretty awesome.

**Sam Boyer:** It provides opportunities even for the dependency management stuff. There is some discussion - maybe we'll explore it at some point - of not just doing version constraint checks in terms of deciding whether a given version is acceptable, but maye we do a little bit of type checking, maybe we do some other things.

**Brian Ketelsen:** Just go in and do an analysis of the source code and see that none of the signatures have changed... This is probably okay.

**Sam Boyer:** Yeah, these things are feasible to at least explore.

**Erik St. Martin:** I need one to yell at me for semver, too. Like, "Hey, this code is clearly different, but you're trying to use the same version."

**Sam Boyer:** Yeah.

**Brian Ketelsen:** Oh, wait, I'm gonna forget the name... Somebody named Bradley in Australia wrote that tool.

**Sam Boyer:** \[unintelligible 00:55:56.24\]

**Brian Ketelsen:** Yeah! He wrote that tool.

**Sam Boyer:** \[56:00\] Yeah, he has one, and there's another one, too. But he wrote that six months ago, at least.

**Erik St. Martin:** See, this is how out of touch I am.

**Brian Ketelsen:** This is how awesome my memory is.

**Sam Boyer:** There you go.

**Erik St. Martin:** Alright. So you guys wanna do \#FreeSoftwareFriday?

**Brian Ketelsen:** Absolutely. It wouldn't be a show without it.

**Erik St. Martin:** Exactly. Sam, to fill you in... Basically, every episode we do a thing called \#FreeSoftwareFriday. Lots of open source projects don't really get a lot of love and attention, unless it's people complaining or opening issues, so we like to just take a moment each episode and shout out to an open source project that makes our day. It does not have to be Go; it doesn't have to be a project, it can be a person... But just kind of showing love to the community for stuff that they do, if you have something cool. If you don't, that's okay too. We'll start with Brian and give you time to think.

**Brian Ketelsen:** Alright, so mine this week is an interesting one. If you've used Google Hangouts before, you know what this software does. It's called [Jitsi-meet](https://github.com/jitsi/jitsi-meet) and it's basically a self-hosted version of Google Hangouts that runs over WebRTC and it uses all kinds of crazy stuff in the background - XMPP servers and video bridges and what have you. I installed it earlier this week just because, and I was just blown away by how high quality it was. I did a video conference with Bill Kennedy while he was in India, and it was like he was in the next room - no latency, no delay, high-speed audio and video... It was really good.
So if you're looking for a way to do self-hosted video conferences, webinars, meetings, that sort of stuff, Jitsi-meet is pretty slick and it's all open source.

**Erik St. Martin:** You know what I find funny about that project? People don't know Brian and I's history... Years ago when we first met, Brian was my boss, and he tried to fire me for installing Node on his computer. \[laughter\] And that is clearly written in Node.

**Brian Ketelsen:** Jitsi-meet is not written in Node. Some of it is written in Erlang and some of it is written in Python, and there are parts that have JavaScripty pieces in it... And I did not try to fire you, I just threatened to fire you if you ever installed Node on my machine again. \[laughter\]

**Erik St. Martin:** How about you, Carlisia?

**Carlisia Thompson:** Yeah, I found a really neat tool. It is written in Go, and it's called [gcli](https://github.com/tcnksm/gcli). It's a CLI generator. It's so neat... It's unbelievable. Basically you run a command line command, and one of the input arguments that you pass is the name of the framework you want to use as the CLI framework, and it outputs a whole directory structure and it's really well organized. I love that it gives you the test files already populated, and it even gives you a readme file. Now that I'm looking at it here, it gives you a version.go file, too. So you pass in the name of the CLI framework you wanna use, and you also pass in things like the commands you want to use, and that's how it lays out one file for each of the commands, and the corresponding test file. It's really neat.

**Erik St. Martin:** So it just sort of scaffolds it out for you?

**Carlisia Thompson:** Yeah.

**Brian Ketelsen:** I love code generators.

**Erik St. Martin:** Yeah, and the cool thing about it is that it lets you pick your CLI framework. It has Mitchell Hashimoto's CLI tool, I thought I saw now Cobra... Maybe I'm wrong.

**Brian Ketelsen:** Yeah, Cobra... Get out.

**Carlisia Thompson:** It does Codegangsta, Mitchell's CLI and... It's called Go Commands, but I think it's for the standard library.

**Erik St. Martin:** Oh, cool.

**Brian Ketelsen:** If they skipped Cobra, they're doing it wrong.

**Carlisia Thompson:** \[01:00:05.00\] There's no Cobra listed here.

**Erik St. Martin:** I'm sure they take pull requests.

**Brian Ketelsen:** I'm quite sure they do... That's how open source works.

**Sam Boyer:** Literally open source.

**Erik St. Martin:** How about you, Sam? Do you have anybody you wanna give a shoutout to?

**Sam Boyer:** You know, the thing that I feel the most need to do is not a particular project, but I will give a shout out to people who write docs.

**Erik St. Martin:** The unsung heroes...

**Sam Boyer:** Yeah, seriously... And quite unsung. It's so easy to go in and work on something for a long time -- it's the curse of knowledge  problem. You forget how much you know about the thing that you've written, and it's really hard to put yourself in the shoes of other people who are gonna come and try to work with something. It's great that software is out there, but if we can't figure out how to use it, it doesn't matter.

Those folks come in, they spend the time and they figure out how to translate for others. It is the tissue that makes up the open source world, that people forget about all the time. So shout out to anyone, author or contributor, who is writing docs.

**Carlisia Thompson:** That makes me remember that Katrina Owen tweeted just recently (a couple weeks ago) something like, "I don't understand why people say for people who are new to open source to start with documentation... Because that's the hardest part of open source, or of development."

**Sam Boyer:** I admit this is kind of a different angle, but once you learn enough about it, you forget how to write the docs for people who didn't know. There is this special moment when you first come to a project where your mind is still a blank slate when it comes to the way the thing works. And writing down your experiences when it comes to learning a piece of software - you can never get that moment back, and it's a chance to help out somebody else who's coming in.

**Carlisia Thompson:** Yeah, good point.

**Erik St. Martin:** Mine is a project called [Helm](https://helm.sh/), which is a part of Kubernetes. They have a thing called a chart, and it's basically like a guided install for well-known applications. They're kind of like recreating Redis or MySQL or things like that. There's these shared ways of installing and running these projects on a Kubernetes cluster. It's actually one of the first projects that have come out and been adopted out of the incubator into Kubernetes proper.

I saw somewhere, I think it's [Kubeapps.com](https://kubeapps.com/)... I think somebody had just recently released...

**Brian Ketelsen:** Yes, KubeApps.

**Erik St. Martin:** Yeah, where you should be able to go and search for these Helm charts for common projects that you might wanna install. They've been working on that for a long time.

**Brian Ketelsen:** \[01:02:50.14\] Helm is mostly driven by the folks at Open Deis. Awesome contributions from them to the Go community and Kubernetes both, which is cool.

**Sam Boyer:** And Helm was originally created by Matt Butcher, who is the original creator of Glide, as well.

**Brian Ketelsen:** It's just a perfect circle.

**Sam Boyer:** It really is.

**Brian Ketelsen:** \[singing\] It's a circle of life...

**Sam Boyer:** He told me once, he's like, "I somehow keep on writing package management tools. I'm not sure how that happens..." \[laughter\]

**Erik St. Martin:** It's just a different type of packaging.

**Sam Boyer:** Yup.

**Brian Ketelsen:** Did you guys want me to keep singing, to end up the show?

**Erik St. Martin:** No, please don't.

**Brian Ketelsen:** Okay. Just let me know.

**Sam Boyer:** I was enjoying it, I don't know... \[laughter\]

**Brian Ketelsen:** Thank you. Hey Sam, you can come back...

**Sam Boyer:** Oh, that's nice!

**Erik St. Martin:** Does it mean I'm not invited back?

**Brian Ketelsen:** Nope. Carlisia is taking your spot next week.

**Carlisia Thompson:** Oh, boy... \[laughter\]

**Brian Ketelsen:** You're fired! How dare you install NPM on my laptop?

**Erik St. Martin:** Well, technically you just did yourself, so...

**Brian Ketelsen:** I've had NPM for years now... I just don't admit it. I'm the one who three years ago famously tweeted "Docker is like a condom for Node", and it's the truth. \[laughter\]

**Carlisia Thompson:** No comment.

**Erik St. Martin:** Right. Awkward... \[laughter\] So with that, thank you everybody for being on the show. Thank you so much for coming on, Sam. It was great talking with you.

**Sam Boyer:** Thank you for the chance.

**Erik St. Martin:** ...and especially getting some more detail.

**Sam Boyer:** Yeah, this has been great.

**Brian Ketelsen:** Keep up the hard work! Thanks for doing it!

**Erik St. Martin:** And everybody, please reach out and help, and run dep and file issues.

**Sam Boyer:** Yes! We will have this roadmap up so soon, and all of your contributions will be wonderful and valued. Please do!

**Erik St. Martin:** File issues for things that are broken, but extra credit if you submit a PR for it.

**Sam Boyer:** Exactly!

**Erik St. Martin:** A huge thank you to all of our listeners, both the live listeners and the people who will be listening to the show once it's produced. Definitely a huge shoutout to our sponsors for today's episode, Toptal and Compose. Without them, we wouldn't be able to continue doing this. Share the show with friends and fellow Go programmers. We are GoTime.fm online, you can find us on [Twitter](https://twitter.com/GoTimeFM), and if you wanna be on the show, if you have suggestions for guests or questions of guests that we already have scheduled, head over to [ping](https://github.com/GoTimeFM/ping). With that, goodbye everybody! We'll see you next week.

**Carlisia Thompson:** Bye, and thank you, Sam.

**Sam Boyer:** Thanks everybody, this was great.
