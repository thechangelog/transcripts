**Jon Calhoun:** Welcome to Go Time. In this episode we're gonna be talking about SIV and the V2 issue. Today I am joined by Tim Heckman, a gopher moonlighting as an SRE at Netflix. Tim, how are you?

**Tim Heckman:** I'm doing pretty well, how about yourself?

**Jon Calhoun:** I am doing well. I'm also joined by Peter Bourgon, a Go programmer, opinion-haver and grey beard becomer. Peter, how are you doing?

**Peter Bourgon:** I'm great, and just so everyone knows, I'm gonna say a cuss later, so be ready for that.

**Jon Calhoun:** So I guess this one will not be a family-friendly episode.

**Peter Bourgon:** Absolutely not.

**Jon Calhoun:** We're also joined by Kris. How are you, Kris?

**Kris Brandow:** Doing alright.

**Jon Calhoun:** It's been a while since we've been on an episode together, I think.

**Kris Brandow:** Yeah, it's been like at least a month.

**Jon Calhoun:** Alright, so - really what I wanna get into today is... I think a lot of us in the Go community have heard about the V2+ problem, and you've sort of heard complaints about semantic import versioning... And we've heard a little bit about what it is, but a lot of us who haven't fully switched over to Go Modules, or who work on smaller projects, or whatever it happens to be, might not be quite as familiar with what all of those issues are, or they might not be affecting us quite as much, so we might not be as in tune with what other people are suffering from.

So more than anything, I just wanted to sort of talk with you guys and find out what those problems are, how different developers are experiencing them, and just get a better understanding of those pain points, so that we have a better understanding of how different people are using the Go tooling, and how it works or doesn't work for them.

So I guess to start off with - we should probably start with some background. Does anybody wanna explain what semantic import versioning is?

**Tim Heckman:** \[00:04:11.15\] Peter's got the \[unintelligible 00:04:12.10\] so I guess I can jump in on that one real quick. Semantic import versioning is a way to denote the major version of a module in its import path. One of the major goals of that is to support multiple major versions in a project, generally to assist with the transition. So if you have a dependency that has done a major version bump, you have some code that depends on it, and you need to Roman-ride between those two versions for a period of time while you do the transition... Semantic import versioning was meant to be a way to provide a mechanism to denote those two separate versions, so you could use them simultaneously in a single project.

**Peter Bourgon:** I have a quick question before we get into the details there... You used this phrase Roman-ride, and you're the only person I've ever heard use this is my entire life... And it's fine and it's good, but what is that?

**Tim Heckman:** The way it's been described to me, the way I've heard it is you think of two Roman chariots riding next to each other, and you have a person who has one foot on one, one foot on the other, and is riding basically two chariots at a single time.

**Peter Bourgon:** Yeah, there's two horses, two chariots, one person... So it's a Jean Claude Van Damme maneuver, basically.

**Tim Heckman:** Yeah, exactly.

**Peter Bourgon:** Okay. That's obscure... I'm into it; I'm gonna bring it into my vocabulary... But yeah, where does that come from, do you know?

**Tim Heckman:** I have no idea. I've heard it for a few years; people I work with have said it probably for the last ten years in my career. So I'm just surrounded by weirdos, I guess. I'm not sure. \[laughs\]

**Peter Bourgon:** That's fine. It's a Netflix thing. That's cool.

**Tim Heckman:** Maybe. But I had heard it before that, so... I don't wanna attribute it just to them.

**Jon Calhoun:** I mean, once Peter puts it into his vocabulary, all of his peers are going to be saying it too, so...

**Peter Bourgon:** Yeah... Well, and I contextualize most things in terms of the mussels from Brussels. So that makes sense to me. I don't know about you. Maybe that's something else for you.

**Tim Heckman:** But yeah, just to summarize again, it's a way to support those multiple major versions in a single source file. Otherwise you'd have those imports conflicting at the top; being able to define which version you're using where... So they made the version part of it the name itself... Which is a little bit unique, compared to other languages where it's not common that the identity of a dependency is directly related to its version.

**Peter Bourgon:** Can I add some color here?

**Jon Calhoun:** Well, go for it.

**Peter Bourgon:** Am I allowed? Is this okay? So semantic import versioning is like this big name and concept... I think what it does -- everyone knows semver (semantic versioning), where we have these three numbers that are separated by periods, and each number denotes a certain semantic, increasing or decreasing impact on the code that it is tagged to... And what semantic import versioning (SIV) does is basically modify or elevate the importance of the major version in a specific way... And it says the major version is like sacrosanct; we're going to lift it out of the versioning space, which as you said, Tim, is kind of like the -- what are the two dimensions? Identify and time, I guess?

**Tim Heckman:** Yeah, I would say that's probably a way to describe that, yeah.

**Peter Bourgon:** Yeah, yeah, yeah. So like time version is one axis. And an identity, the name of the module, is another one. What semantic import versioning does is say "The major version (in semver - API compatibility) is so important that we're gonna take it out of the time dimension, the time axis, and we're gonna move it to the identity axis, so that this same "module" with two different major versions is not the same module. It is two different modules." And this concept is then expressed and assumed through the entire stack.

I guess everyone kind of understands this at some level, but it's a big change, actually... It's a big change from what -- is there any other package management system or ecosystem that does this by mandate \[unintelligible 00:07:44.14\]? I don't know.

**Jon Calhoun:** There's none that I'm aware of...

**Tim Heckman:** I don't know that I've run into one personally.

**Peter Bourgon:** So that's my view on what it is.

**Jon Calhoun:** So to make sure that everybody listening understands, this is the big reason why when you're looking at imports, in the past you would never have a /v2 at the end of anything. But now when you're looking and you're running Go Modules, it's not uncommon to see a /v and then some number at the end of a package import, which is something that previously would not have ever been there. Well, I guess it technically could have, but...

**Peter Bourgon:** \[00:08:13.21\] Unless you were using \[unintelligible 00:08:13.20\] will force you to do this.

**Jon Calhoun:** Okay.

**Peter Bourgon:** Gustavo Niemeyer, again, the Nostradamus of the Go ecosystem predicting the future. Well done.

**Jon Calhoun:** So when we're looking at the semantic import versioning and how the go.mod tool works, what makes V0 or V1 special in comparison to the rest of the versions? Why is it called a V2+ problem, rather than something else?

**Tim Heckman:** I think this comes down to what is maybe a fundamental assertion about the lifecycle of software, and I think there were some that have the belief that there should only ever be one major version, and you should get your API right the first time, and it should be very exceptional that you will ever need to release a new major version going forward... So I think a side effect of that belief was that the V0/V1 versions were omitted from the name itself to make it easy. We expect you to only ever have to get to V1. V0 is your development phase, V1 is when you hit stable.

So to make it harder, in some ways, to release new major versions, they've added this as a requirement to the later versions. You had to add this extra label to the name, your consumers had to add it to all of their files... It was sort of a barrier to make it more challenging to introduce breaking changes, and then to signal those breaking changes via semantic versioning.

**Jon Calhoun:** So when you say that they added it to make it harder, was it added specifically for that reason, or was that a side effect of some other goals that they had?

**Tim Heckman:** I mean, I think in some ways it's a side effect, but I think it's also -- there's been folks who have explicitly communicated their desire is to not have it be very easy to make breaking changes, to add some hurdles for folks to overcome to get to that point, because it will impact their consumers.

I think there was the idea of "Hey, if everything's gonna be V0/V1, why make everyone include that in their string? It's sort of redundant." But I think that created some cognitive burdens on folks to know "Am I getting V0? Am I getting V1?" If I need to Roman-ride in between those two versions, it isn't as clear, where in other versions you see that being prompted.

So in some ways it might be better if that was consistently used across the board, than having these special cases where V0/V1 are special, and V2 and beyond then requires explicit demarcation in the name.

**Peter Bourgon:** Yeah. Well, I think we'll get to that point specifically a little later in the chat here... But yeah, I totally agree, and... I mean, I could generalize a little bit. Tim, as you say, the authors kind of believe that it should be, or it is very rare that you release a V2... Kind of something like this. Because there's this presumption that you're gonna work really hard and get everything perfect on V1. That's kind of like -- I'm not sure they expect you... No, they expect you to do that, basically... And even more, every major version represents a commitment by you, the module author, that you're going to support this thing. That you have, first of all, an enormous number of consumers for whom changing from a major version to a different one is just intractably difficult, and that therefore, you treat the major version as sacrosanct. This is an assumption that's kind of baked into the modules. That's one aspect, I agree, but I'm not totally sure that they want it to be harder. I agree that some people expressed that statement, but definitely, Modules is a -- let's say normative. Modules is telling you how you should do stuff. They know it's right, and they're making a claim like "Most people are doing it wrong, so you need to do it this way." Go itself kind of does that a lot too, but there's an important difference there, I think.

**Tim Heckman:** Yeah. Maybe a better way to say it is they're reluctant to make it easy.

**Peter Bourgon:** That's right.

**Tim Heckman:** There's a reluctance to have it be a low barrier to make those changes and to move your software or your module further in that way.

**Peter Bourgon:** \[00:12:05.09\] That's right. So if you go to semver.org and you read what the major version is, the definition of the major version, it's kind of roughly two things... It is an expression of API compatibility. If you break API compatibility, you have to bump major version. And also, it's a sort of -- they don't define the word "stability", but it is a commitment to stability. So once you get to V1, you are committing to stability. You are stable. And what Go Modules does is say "Okay, that's good... And "stable" means these specific things." And their definition of stability is extremely strict. I don't think they would disagree with that.

I don't wanna skip to the end of the discussion here, but stability is not an objective thing. It's not well-defined. It is dependent on many functions that are different from ecosystem to ecosystem, repo to repo, project to project... And so this is one of the many errors that Modules commits, I think, assumptions they make which aren't universally true.

**Kris Brandow:** I think there's also a dimension here of what it means when you don't have a V2 on the end... Because it doesn't necessarily mean V0 or V1, because if you were using dep or something before where you had versions, it will take the last version that was pre-module. So it could be version 17 or version 34 or version who-knows, something else, with that plus incompatible at the end... So I feel like part of it too is the historical aspect, and I think in that respect it might have made more sense if they had said V0/V1 on the end, so that all modules have this identifying aspect to them, and if you don't have it, that's the old system. That feels like it probably would have been a cleaner break.

I can understand why you might not want to do that; having to add those labels for modules does increase the amount of effort you have to put in for those V0 and V1 initial usages... But it does seem to me that it probably would have been a little bit cleaner at the end of the day if we had had to specify V0 and V1 for modules, and kind of made it like a new system that kind of changed the import path for real.

**Peter Bourgon:** That would have been so nice. Oh, man. Yeah, a major blunder is the presumption that without a V suffix, it is V0 or V1. This assumption has had so many ripple effects, and it's like "Ugh!!' The quasi-proposal to deprecate or make SIV optional removes this assumption, definitely.

**Tim Heckman:** \[unintelligible 00:14:29.04\] one of the side effects - and we've seen this a few times, where folks will try to adopt something that has picked up Modules, and they get surprised by what their package is pulling in... Because they didn't have the SIV in the name, they're getting maybe weird compilation errors, depending on what changed between the versions... So it may not be immediately clear what the problem they ran into was, and take some time to walk through "Oh, yes..." And especially because maybe folks are newer to the language and they're following some readme. "Oh yes, this is how Go works. We provide the name in this way." It can be a bit of a surprising first experience if that's what they see when they come in."

So I'd say their angle is that jarring nature of it compared to other languages, where the lack of consistency makes for newer folks to not be sure what to expect, until they understand all these peculiarities of how the system works itself.

**Jon Calhoun:** I can definitely say that when I first started using Modules one of the more confusing was that go get and then just some GitHub repo, the URL to it, didn't always get the version that I expected at first... And it was kind of -- you kind of figure it out over time, and it becomes something you work with... But it was definitely jarring the first time, where I was just like "Why do I have this version of this, rather than what is currently the latest version, which is what I kind of expected?"

I think with a lot of other packaging tools, that's kind of what it's trained me to think... When I install a new dependency, it gives me the latest version, and that wasn't explicitly what was happening here, unless I told it "I need the latest version.

**Peter Bourgon:** Right, exactly. And this is like human intuition. It's not just your intuition as a programmer, but when I say "Jon. Hey, Jon." You're not a different Jon when you're 32 as you are when you're 14, right? It's the same Jon. So I don't have to say Jon 14 to refer to you in that year... And the same way when I say \[unintelligible 00:16:05.13\] I am explicitly not specifying a version. It's undefined. And when that's true, by default, I want the latest major version. Everyone knows that. But in Modules that's not what's true.

**Tim Heckman:** \[00:16:22.11\] But what if you've never released a V2? You only have V1, and that's what you get. But once you get past that point, it becomes almost like a user support burden for the module author, because they need to make sure they communicate that clearly, and document it... And they may get questions about that when those folks run into those challenges. So yeah, that's an interesting burden, both for consumers and those that are publishers.

**Jon Calhoun:** I know for me, if I'm grabbing a package, because of that, I feel like the first thing I have to do with any package is go to the actual GitHub page and look for the readme where it says "The go get command will install this", which to me is a little bit frustrating sometimes... But I will definitely say, as a consumer of libraries, if that was the worst thing that happened with Go Modules, I'd be like "Okay, I can deal with that." That's not the end of the world. But it sounds like there's other things that are sort of at play... So if you wanted to expand on that - are there other aspects of it that are by-products of the fact that it works the way it does.

**Tim Heckman:** I think maybe segueing nicely, what I just said about that burden on the consumer and the producer, I think one thing we're starting to observe is a reluctance, and even some recommendations to never release a V1 module. And many folks are now only releasing V0 and they're continuing to bump versions there, because they don't want to run into the risk of needing to make a small change that is a breaking change per semver. They want to denote that via semantic versioning, and then go through all of this hassle -- you know, a one-line change might require a consumer to update 30 files if they import that package across 30 files, even if only one file needs to be changed.

So the cost of migrating that codebase to the new version is not linear to the actual change itself. There's a heavier burden often on the consumers to adopt that new version, that doesn't reflect on what that breaking change really was in the system. So because of that, folks are saying, "Hey, you know what - to avoid that aspect, that risk, that user experience problem, I'm just never going to release V1. I'm just going to keep it on V0 and continue bumping that version, because I will never run into that user experience problem." The cost of upgrading will be linear to the change itself, but that itself has other knock-on effects.

**Peter Bourgon:** A hundred percent. And this is such an obvious effect of the decision of Modules to assume that a major version bump is such a severe thing. They assume they're so rare, and furthermore, that every module is backed by a team of people who are fully committed to keeping it fresh, and up to date, and maintained etc. So when those conditions aren't true, when a module is written by one guy in his spare time, or whatever, and they can't commit to keeping the API stable, and maintaining API stability with all the CVEs they need to support, and they need to break API compatibility and they need to bump the major version frequently, Modules makes that so burdensome. There's so much toil, both for the author and for the consumer... That yes, I think I've actually decided that it is incorrect, it is unsustainable for anyone who authors a module who isn't a team of people paid to maintain that module, to use any major version except zero... Because the cost of doing so - you can't pay those costs as an individual, as a single person in an open source environment. It doesn't work out. And I'm certainly -- I just broke out the log package from go-kit to its own repo, which is long overdue. But that will always be major version zero, because I and my open source contributors cannot commit to the expectations of stability that Go Modules expects... And as you say, Tim, many people are doing this. I think it's actually the correct thing to do.

**Kris Brandow:** \[00:19:58.20\] I feel like on some level part of this problem might also be caused by semver itself... Because at the end of the day we're just trying to communicate the semantics of what our code is doing. We kind of have to define what breaking changes actually mean. You can go to some extremes and say "Anything that is not additive is in some way a breaking change, so that everything really should be a major version."

**Peter Bourgon:** Even some additive things are breaking changes, actually.

**Kris Brandow:** Yeah, and there's a lot of legitimacy to that... And I think part of the issue that I've had with adding the version into the name is that it kind of gives an extra amount of credence to semver, of saying "This is the correct way to talk about your API, to talk about your library that you're building." I think that's probably not what we really should have done as a community, and I think that will inevitably just push us to essentially not use the major part of semver, as you're suggesting, Peter, and just have basically a major and a minor version, instead of having a major/minor patch, or having a major on a patch version.

So in effect, what we've done is we've kind of taken away a common understanding of what that major version number means to people when we put it elsewhere, which I don't think is particularly good for the long-term of our community. I understand wanting to go with something like semver, because I think it is widely standard, but I think this is also the conversation we as a community and we as an industry need to have around semantics, because they are hard.

And in some of the conversations that have come up around this too, I think that there have been arguments of like "Well, our tooling should be more nuanced. We should have ways of deprecating specific parts and pieces of our API." Like, "This function is insecure, or this method, or this type is insecure. Please don't use it", which I understand...

**Tim Heckman:** That's hard.

**Kris Brandow:** ...and I really love the idea of that. But the main question I have around that is - that tooling doesn't exist now. We can't say that we should be using this tooling that doesn't exist, and that should be how we resolve problems that people are facing right now. So I hope that in the future we do develop this tooling, but I don't think it's a very strong argument for the type of situation that we're in right now.

And I would also say that one of the things that annoys me, that I think is probably a tooling thing we can fix, about semantic import versions - and maybe it already has been fixed. Maybe this is a little outdated knowledge. But when I go to use goimports to automatically pull in a version, sometimes it'll just pull in the base level. They won't pull in V5, even if I've used V5 in that file already. It's like, "Oh no, you didn't mean V5." So I've had to do a lot more manual typing of imports or correcting of imports to get the desired result that I want... I think that's one of those small annoyances that doesn't get talked about a lot, but it's one of those things that just makes it more inconvenient to write Go... Which frustrates me a bit, because one of the really nice things about Go is I don't have to write \[unintelligible 00:22:47.00\] I don't have to do a lot of things, because it just can intuit a lot. So I think that's a little bit of a loss for us.

**Peter Bourgon:** You touched on so many super-interesting things there... And I wanna talk about two of them, if I can. I've talked too much; I'm gonna stop talking after this. I've dominated the conversation here. Sorry about this.

So semver does precisely define the major version. If you break API compatibility -- now, it doesn't say what API compatibility is, because that's kind of like squishy. But if you break API compatibility, whatever it is, you have to bump the major version. So that's precisely defined.

The problem is -- hold on... Once I answer, I have to figure out what did the Twitter poll say, which cuss word I should say... Because I wanna say it right now. Hold on... God... Twitter, Twitter, Twitter... I think it was Richard. So whatever the Richard definition of semver is, people mess it up. There's an ideal, and it's useful, but it's not perfect. And the problem is Modules assumes it's perfect. Modules assumes that when there's a different major version, when you break API compatibility - which you should never do - then you'll bump the major version... And therefore, it provides no affordances for you to deal with the inevitable situation when that's not true. It assumes that everything is perfect in that sense, and that if a module isn't perfect in that way, you should file a PR... \[laughs\] Not use that module, or whatever.

\[00:24:10.24\] So that's one of the many disconnects between the assumptions of the authors and maintainers and the real world, for a lack of a better word. There's very few \[unintelligible 00:24:16.29\] and that's like a core thing.

You said another more practical thing at the end, which I'm now blanking on...

**Kris Brandow:** Oh, having your import paths automatically come in with the right version.

**Peter Bourgon:** Right, right. So when you type \[unintelligible 00:24:32.06\] what you mean when you say that is the most recent version of \[unintelligible 00:24:35.13\] generally. But what Go Modules assumes is like V0 or V1 of \[unintelligible 00:24:43.06\]. I and Andrew Durant - and someone else's name I'm blanking on, and I'm totally embarrassed by - filed a proposal to improve this situation, which was rejected by the Modules authors, actually... Because they don't believe that that's true. They don't believe that when you write \[unintelligible 00:24:59.23\] you mean the most recent version.

**Kris Brandow:** I feel like too -- not necessarily even that I mean the latest version, but most of the time it's like, if I am using a module that has multiple packages, if I import a new package, use the same version of the module of that first package I imported it from. I ran into this a while ago, and it was just like -- I think I had accidentally go gotten multiple versions of the module somehow, and it just couldn't figure out which one I meant... Or the one I was just kind of intuiting from the modules that I had, it was just like "I know you imported three other packages from this module with V5, but - oh, you have another package you're importing. Clearly, you meant V1 or V0 on this one."

**Peter Bourgon:** This is great. So in the Roman-riding metaphor you have seven feet and you're on seven different versions of the same package accidentally... And when you type \[unintelligible 00:25:45.02\]

**Break**: \[00:25:52.29\]

**Tim Heckman:** I think Kris called out something good though about that whole deprecation idea. I don't know if that works for everybody, especially in security-focused fixes, where the security team might want to look at the versions of things dependent on it and go "You know, we know these are not vulnerable because you cannot use that vulnerable code." Where if we maintain a version that is just deprecating the method or the code path that has that vulnerability, there really isn't a protection or a way to say for certain whether or not they've avoided that without doing static analysis across all of those applications that consume it... Which kind of goes back into an earlier point Peter made, which is the support that those modules have, and those things that you're consuming - do you have the capacity and capability to run rich static analysis across all the things you're doing to make sure you're not using a deprecated method or something, versus just going "I don't have that vulnerable version. I know I'm not in that camp of being at risk."

So I think it does add just more cognitive overhead on the individuals to know "Am I safe? Am I doing the right thing?"

\[00:28:00.08\] Even if the tooling was providing more support, it doesn't necessarily stop the human. It might provide a warning or something, but it doesn't go "Hey, wait a minute. You are using something that's insecure. You probably don't want to do that." Which I think some might push back on that. I think there are some that are okay with the deprecation method if it is right in front of you, pops up with something flashing in your face, going "Hang on, there might be something wrong here."

But the other, I think, is around the hostility to people that don't use semver. There are some companies/groups that use a calendar-based released versioning system. Yeah/month/day, or patch number, or something. And because they are choosing to do that version scheme, if the tooling didn't assume SIV, it didn't require that as part of the name, I think it'd be easier for those folks, where consumers could rely on the go.mod to specify the version; they wouldn't have to update dozens of files to the new month as they're upgrading all their code...

So I think there are those exceptional use cases where people do choose their own versioning scheme that looks like semver in some ways, and then causes these conflicts where they run into having to put the year in the version, or maybe every time they bump the year.

**Peter Bourgon:** I don't know... If you don't pick something like semver -- it distills down to the base case there; it's like, commit hash... Right? I don't think you can build a package management system around commit hashes, really... I don't know. I'm not sure how much it'll be able to do for you.

**Tim Heckman:** Only if you're pinning. If your whole thing is "Hey, I want to use this version that I've tested against..." This is another topic of discussion. "I only want to pin to this specific version, and that's the one I use", because that's how they version their software - that's the one use case I could think of; that's different than the "I trust these things to be compatible and usable by me."

**Peter Bourgon:** Can I poll the four people in this room real fast? Can I do a poll? Is that okay?

**Jon Calhoun:** If you like to... But you're one of the four people, so... \[unintelligible 00:29:37.18\]

**Peter Bourgon:** The three other people in this room... I wanna do a straw poll that's like n=3. We all program, right? Probably... We all program.

**Tim Heckman:** Yes...

**Peter Bourgon:** Okay. So have you ever had a situation where the incompatibilities in dependency constraints have produced an unsolvable dep graph. Do you kind of know what that means? It's not possible to produce a compilation unit that satisfies all your constraints... Has that ever happened to you?

**Jon Calhoun:** I don't think that's ever happened to me.

**Kris Brandow:** I have not ran into that before...

**Peter Bourgon:** Tim, I bet you'll say yes...

**Jon Calhoun:** I've definitely had weird things where the version that it decides that I need to be using, you can't find anywhere, or something... I forget what that was related to, but I've never had like "Oh, it's impossible to resolve this graph."

**Tim Heckman:** I've only probably hit it once or twice in the dep days, when somebody did some weird ranging... You know, three different ranges that are conflicting, and we can't solve something... But it's exceptionally rare that I've ran into that.

**Peter Bourgon:** Right. And when that happened, was it like a crisis? You could figure out a way to fix it, right? You'd have to talk to some other team and say like "Hey, don't do this. Change this to this", and then they do it, and it's solved. That's kind of my experience as well.

**Tim Heckman:** That, or you do a local fork and push a PR upstream, and use your fork \[unintelligible 00:30:56.19\] I've definitely used that as a mechanism to get towards that path where I can resolve, yeah.

**Peter Bourgon:** Right. So if you look at \[unintelligible 00:31:03.25\] I think in the vgo papers or something, where it describes some scenario where -- he came up with Alice and Bob, at Whatever Company, and Alice goes on vacation etc. And he creates a scenario where there is produced and unsolvable dep graph. And this scenario, where there's an unsolvable dep graph, is taken to be both a critical problem, and common. And this assumption is one of a few that are at the foundational level of Go Modules design. That this thing needs to be solved by the package management system. And going all the way back to the beginning, the need to Roman-ride between two versions of a dependency in a compilation unit as part of an upgrade or whatever - I understand that this can happen, but personally it's never happened to me. I know people for whom it has happened, so I'm not saying it never exists, but it's such a micro-minority.

I've consulted for like -- I won't say hundreds, but at least a hundred large companies for this kind of thing, and it's not a problem... It's not a problem except to Google, and their wild ecosystem.

**Jon Calhoun:** \[00:32:08.16\] Do you think it's something that pops up more often as your codebase gets bigger, or...?

**Peter Bourgon:** For sure.

**Jon Calhoun:** When you do see it, is that basically the main thing, when you have one massive repo, versus a bunch of smaller things, or something? Is that where it just tends to happen?

**Peter Bourgon:** For sure. And I think that the dominating factor is when you depend on modules which are ubiquitous. So your dependencies and their dependencies also rely on that same module, and maybe they're not updated at the same frequency as others are, as yours is, and so therefore that's how you produce the incompatibility. \[unintelligible 00:32:41.18\] one thing that needs V1.2.3, and one thing that needs V5.8.9. So that's fine. But these ubiquitous packages in the Go ecosystem - I think there's like 20 of them. And Go Modules is built to support those 20 modules. It's crazy.

**Kris Brandow:** I also feel like, to your point, like we as an ecosystem, we as a language grew up with -- you know, everybody knew that our dependency management system sucked, right? It's like \[unintelligible 00:33:08.04\] should always be good. Head of master - that should be fine and work. And I think what that did is it forced a lot of Go projects to not use a lot of dependencies. We are the antithesis of JavaScript. For JavaScript you wanna do one thing and you get 300 dependencies. For us, you just have a handful of dependencies. If you look at a lot of go.mod files - I mean, a lot of the ones I've worked with - they're not very long. Maybe the longest I've seen is like 20 lines, or 30 lines.

**Tim Heckman:** You don't work in the Kubernetes ecosystem, that's clear.

**Kris Brandow:** Well... Yeah. \[laughs\] And I think Kubernetes is one of those examples where it's just like -- that's its own ball of mud over there. But I think for the most part, a lot of the time we as a community don't import a lot of dependencies, so I think the chance of that happening is probably relatively low in general, which I think is what your experiences have shown, Peter.

Another thing I wanted to bring up, that Tim mentioned, around semver being used as a security tool, or like a security indicator - I actually very much don't like that. I don't like that we're overloading the version to mean so many things. It's like, okay, it's the compatibility of the API, but now it's also a security indicator... I think those are two concerns that we should separate, and we should be a bit more nuanced with the tooling that we use for them and the way that we identify them, so we have some better understanding.

I think also having a bit of, I guess, sympathy for users who are in environments that aren't great, where it's like "Okay, there's this security vulnerability for this piece of software, but we're not using a part of it that's vulnerable." And yeah, we shouldn't be doing that, we should upgrade to a new one, but you know, we've all been in software engineering situations where we just can't upgrade for that, for whatever reason; it will take too much time, too much effort... We should have a way of knowing when we get close, knowing when we touch the thing that is a security vulnerability, without having to say "Well, it's just in this opaque version, and this whole version of the software is bad." I'd really like to see us evolve forward from that in a way that's like, okay, here's the indicator that tells us "This is the security vulnerable part of the software." And sometimes that's difficult to pin down, I realize; there's some security vulnerabilities that are pervasive throughout a whole piece of software, and you're better off just not using that version. But I think adding more nuance would be a very large benefit for us, and I think that's a place where Go could probably do some innovation, since we do have a lot of static analysis tooling baked into the way that we do things... Yeah, I just wanted to bring that up.

**Tim Heckman:** One thing real quick, I will say - I guess the way I was thinking about it, I consider that security angle just another aspect of the angle of time. "We are past this point in time, and therefore we are okay." But I get your point, it's better to have a richer semantic about the actual risks, versus assuming a point in time is just okay. But that was sort of where I was thinking of that, from the security aspect.

**Peter Bourgon:** So you wanna semantically-version not only the module, but every function and identifier in the module. This sounds good to me... That sounds fun...

**Kris Brandow:** \[00:36:04.18\] \[laughs\] Not that extreme... You know, there's some middle ground.

**Peter Bourgon:** No, I get it. We have the retract directive now... Is that released?

**Kris Brandow:** I think that was in 1.16, but I'm not sure. Someone in the chat will probably correct me...

**Peter Bourgon:** Great. But you're saying that's somehow too coarse, is that right?

**Kris Brandow:** Yeah, I think it's a bit coarse. Especially if it prevents you from being able to import that version, or something. I tend to be pretty sensitive to people that are stuck in bad workflows, or have bad workflows for whatever reason... Because yeah, you shouldn't be in a bad workflow, but getting yourself out of a bad workflow is actually pretty difficult. It's a hole you have to dig yourself out of. And if you add things that compound and take up more time, it becomes much harder to dig yourself out of that workflow.

I also feel like when it comes to semantic import versioning, or modules in general, one of the things I experienced because I was a maintainer of a rather large, prominent open source library when all of this started coming about, is that even when you are at a company that has financial support for supporting a library, dealing with the churn that comes from introducing something like this... I think most people would agree, when Modules first came out, they were not fully baked; they had lots of problems. That added a lot of overhead for me as a maintainer. And when I have a finite amount of time as a maintainer, I don't want to spend it helping people troubleshoot, and it's like "Oh, you're just importing the wrong version of the module." Or like "Your tooling kind of screwed you over." Or like "Oh yeah, we're transitioning between these things, and I have to take extra time to be extra careful, and make sure all my files are all set and correct."

I feel like of the things that have annoyed me about modules, that's one of my largest - it was already very difficult for a maintainers to maintain libraries in Go; there was already a lot of overhead because of our lack of strong dependency management ecosystem. And I feel like the ecosystem that we introduced added more overhead to people... And I feel like that's something that isn't talked about a lot, especially for smaller projects that are maintained by one person... Because a lot of open source software is maintained by one or two or three people. It's a small number of people, and I think we have to be much more careful when we talk about who should pay the cost of things at the end of the day. I really do think that maintainers in the Go ecosystem have paid more than their fair share, and we have to stop being so heavily on the side of like "We should make it easier for consumers." \[unintelligible 00:38:24.07\] there's lots of problems for consumers, but I think that that whole adding so much to the maintainer side of things I think will either dissuade people from wanting to maintain libraries, or at least get them closer to burnout.

**Peter Bourgon:** Go Modules absolutely assumes and embeds the idea that the consumers are the most important person in the ecosystem, and every decision that makes things easier for the consumer is correct. It slams the slider all the way to the right \[unintelligible 00:38:53.17\] consumers are the most important person. And that's tip to tale an assumption, definitely.

**Jon Calhoun:** The weird thing about that assumption to me is that you'd think a good chunk of the people working on Go and Go Modules has experienced working with an open source project, and supporting and dealing with consumers... And I think anybody who's built even a relatively popular library that they've had to maintain has realized that there's a massive amount of work entailed in that. It's not just push the code out there, it's literally like you spend hours, all the time, doing small things that you really don't wanna be doing, but you're doing them to sort of support this library.

**Peter Bourgon:** Yeah, but your team, who is fully employed by Google, of course has plenty of time to deal with all of those feature requests, and bug reports, and everything... Right? Surely, that's how you run your open source projects, right? How many engineers do you have on your open source team?

**Jon Calhoun:** How many do I have? \[laughs\] I mean, I've only had one project, which I have since stopped maintaining... Sorry, one project that was actually used by a thousand people or more. And it was just me; there was one other person who jumped in and helped some, and it eventually got to the point where it was just too much to maintain everything. And you make mistakes doing it, you support things you shouldn't, and do stuff like that, but it was a lot more work than I ever would have imagined it was gonna be.

**Peter Bourgon:** \[00:40:13.11\] You should hire some people probably, staff up your team...

**Jon Calhoun:** Are you offering to foot the bill?

**Peter Bourgon:** Well, I mean, surely you have infinite money, right? So Google has AdWords and that's a money printer, and surely you have something the same, right?

**Jon Calhoun:** I've got AdWords, but it just doesn't seem to make any money. Nobody wants to do ads for me.

**Peter Bourgon:** Yeah... I did print some money sometime, but the government didn't like it.

**Tim Heckman:** I think the one thing this calls up though - it's sort of related to modules as an overall thing, and not so much SIV, but there are definitely things, as you somewhat hinted to, that is not super-great for consumers. When you look at the side effect of the V0 proliferation in the ecosystem, and that reluctance to move to V1, we're going to see more breaking changes in those V0 releases. There's gonna be things that happen where bugs are introduced, changes are made... And I think one of the challenges we have for consumers is things like replace and exclude statements aren't propagated down to the consumer. So if you depend on a module that has identified one of its dependencies has a bug, and it says "You know what - this version is not compatible. Don't use this version", you as the consumer actually don't get that information. You may not be aware of that risk inside of your dependency tree if you do update your dependencies.

So I think there are some opportunities, considering that we sort of have this pattern of behavior with V0, that we may need to support at least highlighting those incompatibilities, or even failing the build, saying "Hey, these versions are not compatible. This says that should be excluded. I don't wanna resolve this for you because I don't know what the result is." There may need to be more discussions around that type of introduction of behavior if we continue to see these V0 zero releases grow.

**Jon Calhoun:** Do you not see a case where instead of V0 releases people start doing like what Gorm did, where they just basically changed the import path? They didn't actually change the name of the project. They went from like GitHub.com/SomeUser/Gorm to Gorm.io/gorm. So instead of releasing a V2 or whatever it would have been, they basically just changed the entire import path. But it's now confusing in another way. Peter, you're quiet...

**Peter Bourgon:** Yeah, I've messed with it... Which every project could have done from day zero if they needed these stricter semantics. \[unintelligible 00:42:15.11\]

**Jon Calhoun:** But I think they only did it because of the changes. I don't think they did it because they necessarily wanted to. It was more just "This is easier than doing a V2", or "This is essentially equivalent to doing a V2."

**Peter Bourgon:** Yeah. Whoops...

**Jon Calhoun:** And now there's this weird confusion of like "Which one am I supposed to be importing?" You have to go read some docs and figure out "Okay, this is the correct one."

**Kris Brandow:** I feel like the Protobuf library did that as well when they changed their import path to the new version... And that also caused a good deal of confusion for people.

**Tim Heckman:** I think one risk of that rename one, if we're moving to a vanity domain, is how reliable is that vanity domain? Not throwing stones at anybody, but GitHub has an SRE team on call, sort of what Peter was talking about with \[unintelligible 00:42:54.22\] GitHub has an SRE team on call to make sure that site is up and running 24/7. You might be running your vanity domain on a DigitalOcean VPS or something, right? That's fine, but if that goes down, there can be ecosystem impacts that might be avoided. Now, GitHub isn't infallible either, but I think -- it does bring up another angle to challenges that may exist; we may be reliant on single points of failure for those big names in the ecosystem.

**Peter Bourgon:** \[unintelligible 00:43:20.05\] we're all humans on this wide, amazing journey of life, and at some point we shuffle off the \[unintelligible 00:43:27.06\] I don't wanna bring this conversation down to a sad level, but we're all gonna die, right? Okay, alright - when Russ Cox dies, what happens to rsc.io? People are still gonna be depending on that. Does his estate foot the bill for the domain? I don't know... I'm pretty confident that GitHub.com is gonna outlive me. So when I ask people to import GitHub.com/gokit, I'm pretty sure that's a better bet than peter.bourgon.org. That thing is garbage. That's gonna be gone the minute I'm gone. People don't think about this.

**Kris Brandow:** \[00:44:02.03\] But I think it even pertains to that as well, because there was that (if you remember) guy who had a ton of libraries, and he decided "I'm done with GitHub", moved everything to GitLab and deleted his account... And I think it was -- maybe it was Paul Jolly, or someone went through and actually...

**Peter Bourgon:** \[unintelligible 00:44:13.27\]

**Kris Brandow:** Yeah, took that account and put the stuff back, so everybody's broken import paths would be repaired. And I think that kind of leads to another thing I wanted to bring up about Modules, but it's a bit more meta than that... Ben Johnson asked in the channel, like "It seems like there's people that are either completely for or completely against Modules." I feel like I'm someone that falls in the middle; I'm not against modules as a concept, I am against the way that we've gone about putting them into our ecosystem. I think we didn't take nearly enough time thinking through all of the different minutiae of what is actually required to make this ecosystem good... Because I think the vanity name problem could have definitely been something that we could have solved if we'd spent more time thinking through the various aspects of like "Okay, what does happen when somebody's vanity name goes away?" We've kind of bolted that on after the fact, using things like the module proxy and some other things... But I think those are just that - things that we just kind of bolted on after the fact. It wasn't really messaged out very well.

So I think when it comes to Modules -- and SIV is just one of the really large exacerbators of my problem here... It's just that we try to fix things at a technical level, but we didn't solve them at a human level. Because for so long, Modules documentation was absolute garbage.

**Peter Bourgon:** \[unintelligible 00:45:34.28\]

**Kris Brandow:** It was so difficult to find out how to use any of this stuff, or how this stuff works... And there's a lot of people working to improve this. But I think at the end of the day we shouldn't be as a community, as a Go team, as anybody, thinking that just because we've technically solved the problem, or we've technically solved part of the problem, that it's worth the cost of pushing that sooner to resolve some people's pain... Because ultimately, I don't think it ever will be. I think having botched launches like Modules - it gives us years and years of pain that we now have to clean up. And I really hope that the Go team and other people that maintain similar things learn from this. You have to have documentation, you have to go for the social aspects of the software you maintain. This is not just a technical endeavor.

**Peter Bourgon:** This is so good. This is so good, because it gets to the core point of everything here, I think, which is package management. Do you know any blockchain people? Like, Bitcoin maximalists, or something? Some of them are like "We can express government as a smart contract. We can define an algorithm which will solve all human problems." And it's like, that's broken into the same way. Package management is not a technical problem. It is a social problem. It is a human problem. At the core of it is a human social thing, and the technical stuff is just the ancillary stuff you have to do to solve the human problem. But it's my belief at this point that the people building and maintaining modules don't understand that. They think it's a technical problem, and the human factor can just be coerced into the right space, and that's absolutely backwards. That's backwards. And I don't know how to convince them... I've been yelling at Bryan Mills in the Modules channel for like a year now, and this is not effective. This is probably my mistake, I'm not very good at human stuff, so I'm probably not the guy to solve this... But I don't know how to do this. I don't know how to do this.

**Tim Heckman:** Well, to kind of highlight the complexity - and I wish I could remember who said it; it could be someone here \[unintelligible 00:47:30.11\] attribution, but somebody highlighted... You know, the Modules documentation that exists today is longer than the Go spec. There is more that needs to be read to understand how to use Modules than the entire language itself. And it sort of shows the complexity that exists in just package management as a whole, but also in the implementation we have, because there are these nuances, these behaviors that are different than other languages. We have to explain and provide context to help folks understand how to think about that in our world.

So I think yeah, to Peter's point, there needs to be a better alignment on it being a socio-technical problem, where it is that interplay between the people and the system, but the people are really the big part of who we're interfacing with here. It's the social contract of those versions and the modules that are released.

**Jon Calhoun:** \[00:48:12.18\] So related to that documentation thing... If somebody is coming to Modules and trying to figure it out, are there good resources that you can recommend at all at this point, or where do you recommend people start off if they're trying to figure it out?

**Tim Heckman:** It depends on what it is, in this case... I think the Getting Started documentation -- if you're coming to the language, Getting Started has go.mod in it and the basics for getting at least a module created, to be able to get a Hello, World program running. I think it's a good starting point. But beyond that, a lot of what I've found is having the conversation with people, understanding what their problems are, to then sort of go "Here's the documentation that's relevant to you" or "Here's the place that you should go." Because right now it is sort of more of a long form. I think it's in the wiki. It's a long-form wiki page that you can link into, but it doesn't really run you through (I would say) the full process. It's more of like a reference manual, in some ways.

So a lot of it is "Here's the Getting Started thing, here is the Modules wiki" where you might be able to Ctrl+F search for some things you need... But a lot of what I've seen is conversation with folks and helping them understand the concepts and then provide those reference materials and sort of ancillary information.

**Peter Bourgon:** The question was like "Where do you start as a newbie?" Was that the idea?

**Jon Calhoun:** Yeah. Like, if somebody's coming into Modules, either as a consumer just trying to use Go, or as somebody who's trying to developer a library and they need to figure out "How do I support this Modules thing?" To this day, I don't specifically know what to refer people to. I know there are those posts that the Go team has released, but I've read some of them and basically walked away not feeling that much smarter about the whole situation... And I don't know if that's because they understand things at a deeper level than I do because they've been working on it for so long, or if it's something else...

**Peter Bourgon:** Yeah, yeah, yeah.

**Jon Calhoun:** I don't know if there's just mental leaps that I'm not making.

**Peter Bourgon:** So if you're the kind of person who once you understand a concept, you go to the \[unintelligible 00:49:50.24\] and you read the academic papers on the thing, then yes, absolutely go to the modules wiki, read it tip to tail. The vgo papers are like 1,050 pages long, and you'll get the complete theory. If you're not that kind of person \[unintelligible 00:50:01.17\] and then best effort, basically. There's like a handful of commands you need to know, and a handful of things you need to understand... And you can probably put those in a page. I don't know where that exists... And the problem is even understanding these things - whenever you wanna do anything that is outside of the norm of expectations of the authors, if you want to break API compatibility, like every team and every company does, about every week when a new business requirement comes in and they need to update their software, if you ask in Modules, you actually get the answer that your requirement is wrong. This is consistently the answer that I receive when I present these scenarios... So yeah, there's no good answer, I agree.

**Break**: \[00:50:48.28\]

**Kris Brandow:** I feel like on a level go.mod is a bit like Git, where there's not really a great way to learn it, because there's a lot you have to wrap your arms around, and there's a lot of nuance, and you can do a lot of really interesting things; you can solve problems, and solve them in interesting ways, but it's not user-friendly... And I think that's one of the other philosophical problems I have with Go Modules, is that -- you know, in the land of Dep, when we had Dep, I felt like the on-ramp to that was really easy. I felt like it just kind of worked. And sure, it was doing all this really complex stuff under the hood, but Go has tons of complex stuff. Garbage collections is a good example - really simple interface, but doing a ton of complex stuff under the hood. And I feel like one of the things that hopefully we can repair in the future around modules is that it exposes too much of that plumbing. It exposes too many of those low-level things that can be difficult to grok and understand unless you live and exist within the modules world.

I feel like overloading some of the things we already had - to go back to this reoccurring theme that we have - was probably part of the problem. I think overloading Git to make it work with Modules was also probably a mistake. So I think it winds up being confusing, and now we're trying to repair the mistake, we're separating the go install part from go get... But I think overloading that when we still existed in a world that was both GOPATH and Go Modules, and in some cases for some people still is GOPATH and Go Modules, and go get working differently than it worked in GOPATH - it requires a lot of nuance to explain and to tell people that you have to document, and I think that kind of gets in the way of people that are coming in fresh for the first time from getting that information... But if they ever run into a project that is only GOPATH, then they'll have to know the information anyway.

So I think we've kind of put ourselves in a bind in a bit of a way because of our usage of these commands that meant a very specific thing and had very specific semantics. I think at the end of the day that's another one of my big grievances with Modules; it isn't that we introduced something new, but that we've changed the meaning of what things that had established meanings meant. That's the import path thing. When you imported something at the blank identifier, that usually meant you were gonna get the latest. If you go got something at the import path, that meant you got the latest. That's no longer true. And I don't think that we can keep doing those things to people, because it will just turn Go into a worse version of Git from the semantics level, where you're just like "There are like seven different commands that do the same thing, and I don't understand the differences between them, and if I make the mistake, I have to go learn what a reflog is to dig myself out of it." I really don't want us to get there as a community, so I hope we really slow down our pace of what we're changing and what we're introducing, to help make it so that we can make fewer of these unforced errors.

**Peter Bourgon:** You touch on this really fundamental point which I keep coming back to and no one listens to me about, but I'm excited that you said it, because I'm excited to have an ally here... You mentioned that Modules kind of redefines some things that we already have an intuitive understanding of, and I completely agree. And going back to the beginning, it's like - the two things that package management systems deal in is the dimension of identity and the dimension of time. A module and its version - identity and time. And what Go Modules does is it says "Well, actually, a segment of that versioned vector space is actually in the identity vector space." This is wrong. Humans don't think this way. And I understand the advantages of making that change; it makes tooling a lot easier. It makes it possible to Roman-ride between seven chariots as you're (I don't know) appeasing Julius Caesar in building your incredibly complex application in a pathologically broken software ecosystem i.e. Google's monorepo. It's important in that context, but so few people have that context. Nobody outside Google understands things in that way. And when we talk about the language - the language makes a lot of \[unintelligible 00:56:07.26\] assertions like this. "Error handling is done in one way, and if you want exceptions - well, you're wrong. Sorry, get out of here." That's fine, that's fine, because anyone who's considering using Go and doesn't like that can use a different language. They have the option.

\[00:56:25.18\] But if you're using Go, and you look at the package management system and you see stability means something way stricter than you think it means, you don't have the option of using a different package management system. You have to use this one. So it has a monopoly on this space, and therefore it doesn't get to make the same sort of normative assertions about how you should be doing things as the language does about how you should be programming. And this is so key. They don't have the same budget to be doing this sort of thing, and they don't understand this. It's a people problem that they're overstepping their bounds. This is my position. No one agrees with me, and that's fine.

**Jon Calhoun:** I can imagine some people making the argument that it's almost like if you don't like the package management system it's kind of like if you don't like the lack of exceptions - you just don't use Go. But the real hard part there is that there's a huge chunk of people who have been using Go, and at this point it's being introduced newly to them; it's not like they were making the decision of "Do I use Go or do I use some other language?" At this point they're in Go, they can't change that.

**Kris Brandow:** I feel like too many \[unintelligible 00:57:29.02\] I think it's a large number of people... But I think that there's a lot of broad strokes that are happening at a lot of the discussions around this... And a lot of the people that are not in niche cases, but a lot of people around the edges are getting left out at the end. There was this huge push for a very long time - I think it was like Go 1.13 or whatever, when they were like "GOPATH will be dead. It will be gone! Screw you if you still need it!" and I'm glad that the Go team eventually listened to the community, and people that still need GOPATH can still use it... But I worry about our community's ability to still be inclusive from a social level if our fundamental way we operate on a technical level is so uninclusive. We are a very opinionated community, and that can be good for some things, but I think it's inherently harmful in a lot of ways when it comes to these types of discussions and comes to the way that things are framed.

I know a lot of people will push back on this sort of thing and be like "Oh, these are two different things. Our inclusion and diversity problems have nothing to do with this..." But at the end of the day, humans don't segment things like that, and things are not that clean and not that simple. All of this is connected.

As we were just saying, dependency management is largely a social problem. We're dealing and we're talking about largely social problems. They're not necessarily technical problems that we're running into. And those social problems span across a lot of things.

So I think that is also a thing that we need to take into account. We can't be saying we value inclusion and we really want to drive this diverse community from a human level, and then turn around and say "Your use case isn't what we want to support anymore, and it's because we think that your use case is wrong." And it's fine to think that their use case is wrong, but as like a steward of a community you need to realize that you have to find ways to help people out, even if you don't like what they're doing, even if you think that what they're doing is wrong.

**Peter Bourgon:** You have to meet people where they are.

**Kris Brandow:** Yeah. And I think that that's been for me one of those top things that has made me not like modules, is that I feel like at the end of the day a lot of the people that are like "Hey, I'm really struggling. I'm really frustrated. Can you please give me some guidance, give me some help, give me some solutions?" Well, in the private, a lot of people from the Go team will help you and they will give you good guidance, but in the public it feels like you're just met with "No. You're wrong. Don't do it that way. You're doing things incorrectly. Let me tell you how you should be doing the things that you should be doing", and I think that's one of the things that we need to stop doing at a community level and at a steward-of-the-ship level.

**Peter Bourgon:** \[01:00:05.08\] Look, I love telling people that they're wrong; it's my favorite thing. And I have a budget for that. It's contextually dependent, right? You can tell people that the way that they're using global state is wrong, and that's one thing. But you can't really make assertions about people's workflows. If they're in an organization and a context where the market mandates that they move at a certain product velocity, and they have a risk tolerance that is not specifically your risk tolerance, you can't tell them that that's wrong. It is true for them, and you have to accommodate that if you wanna be a tool that they can use. You can't say that Go is only a tool that can be used when your tolerance for panics is zero. You can, but then 14 people use the language. You can't say "Modules is a package management system you can use only if stability means this very specific and strict thing and you get it perfect on the first try." You can do that, but then no one's gonna use Modules. \[unintelligible 01:00:59.00\] which I guess is what we're doing.

How do I incept this understanding in the core team? Does anyone have any idea? Do we have the technology from its inception?

**Kris Brandow:** It goes a little bit both ways, right? This is the tough thing about building inclusive communities, both from a human side and from a technical side - we can't have it where everybody is doing things wrong, so we all yelled at each other. I think that there's a lot of like both sides have some problems that we all need to resolve, and we need to find better ways of communicating.

From a leadership perspective I do think that the Go team should be on that higher pedestal, since they are in a position where they're supposed to be shepherding the community, but I understand how that can be hard at times. But I think too at the end of the day we just have to keep pushing back if we think things are wrong, and do so in a respective manner. Or respectable? I don't know what word I'm trying to say here. But I do think that the problem that we're struggling against are achievable and are solvable, but at the end of the day if we aren't listened to... Like, you know, it's an open source project; maybe a fork is something that needs to happen in the future. Maybe this is a part where our community is no longer one community and we need to start talking about diverging.

So I think there are other solutions out there, outside of just like banging our head up against each other, or screaming at each other and screaming past each other. If at the end of the day we have very divergent philosophies about how things should work, then that means that we might need to diverge, which is a really tough conversation to have and a really difficult thing for a community to go through... But maybe this is the point where that happens.

**Peter Bourgon:** That sounds hard. It's much more fun to just complain. \[laughs\]

**Kris Brandow:** Oh yeah, it's true.

**Tim Heckman:** But I was gonna say, we've seen both in Ruby and the Node.js ecosystems they have had those forks where there were disagreements on how the project was going, and after a while ideas came out and they actually ended up coming back together. Ruby Enterprise Edition back in the 1.8 era, and Node had its own, the io.js split. There were fundamental ideas that they disagreed on, they split off and proved their idea and eventually came back together after there was a reconciliation on those ideas.

So there are patterns of folks and communities going "Hey, I don't think you're aligning with our needs. I'm gonna go off for a little bit and prove my point", but then I think it's important to figure out how we're gonna reconcile back together and not try to retain two separate paths. Is there a way where once those ideas are talked about, shown, "proven", how do we reconcile back together as a single community to make sure those benefits are seen and used by others... If it does apply.

**Kris Brandow:** And that's definitely the most extreme example as well. I hope that we can resolve our disagreements through discussion, and maybe we'll all be like "Okay, the past is the past. Let's try to come at this with open and clear minds, and do some sort of resolution like that." So I don't think that there's anybody that's trying to be a bad actor; I don't think there's bad actors here, or people that are intentionally just like "Ha-ha-ha-ha! I wanna screw these people over", except for maybe --

**Peter Bourgon:** No, I'm that person sometimes, yeah. \[laughter\] It's true.

**Kris Brandow:** \[01:03:54.29\] But I do think that at the end of the day -- if you go read Rust's explanation of why Modules, it's clear that he perceives that there is a big problem that needs to be solved, and that people are in pain, and he's trying to help resolve that pain. And I think there's a lot of disagreements about whether that pain is real or not, but he perceives it, so for him it's real, which is what matters. It matters what people themselves perceive. We don't want to get into gaslighting territory here.

So I think that we just have to find a way to have a bigger conversation, or a more open conversation, somehow, someway. Maybe that's getting in-person and talking to each other, or something... But it seems like there's probably multiple paths here, but we should probably not do the paths that we've been doing so far, because they do not appear to be working.

**Jon Calhoun:** I'd actually mentioned this to Kris before the episode - I feel like this issue might have been exacerbated by the fact that we were all quarantined for the past year, and usually you have conferences where people get together, and these heated discussions I feel like are a lot easier to have in person, whereas online people aren't necessarily at their best all the time... So actually having groups of people get together--

**Peter Bourgon:** What are you saying?! Are you saying I'm not at my best right now?

**Jon Calhoun:** I mean, videochat is definitely better, but I feel like when you get into a text format, and forums or mailings lists or Slack, sometimes things can get way more heated and hostile, or you can misinterpret something much easier... Whereas in-person discussions - I feel like there's a lot more give and take, and it just works a lot better, and we just have not had that for so long that I don't know if that's... I mean, I can't say for sure that it definitely would have been better if we were all in-person, but I feel like we might have had some more progress than what was necessarily there now.

**Peter Bourgon:** What's interesting is like the whole Go language is basically ivory tower(ish). The core team is like in a room, all the time. They're together. They make the decisions more or less in-person. And I think the language has benefitted enormously from this. I think that you can't design something good with a distributed group of stakeholders who have cardinality 100. I think all good designs come from 2-3 people, which is the genesis of Go. I think that's a requirement. So yeah, I think there's a lot of truth in this, actually... But even when the world wasn't under global pandemic, did we ever really hang out? I mean, at GopherCon we did, I guess... I remember some conference rooms...

**Jon Calhoun:** I guess I'm more referring to at least at those conferences there was a change to sort of interact with them and talk with them, at least more so than there seems to have been since...

**Peter Bourgon:** Yeah. They're on this two-week break now? They're with their family -- I don't know.

**Kris Brandow:** Quiet time, or something...

**Peter Bourgon:** Come on, what are you doing...?! No, I'm kidding. This is totally acceptable. \[laughter\]

**Jon Calhoun:** Okay, so we're running well past the time, so I'm gonna jump into Unpopular Opinions...

**Jingle**: \[01:06:35.17\] to \[01:06:52.13\]

**Jon Calhoun:** I don't know if this entire episode wasn't an unpopular opinion...

**Tim Heckman:** I was gonna say, it's a really good segue from what Peter just said, ironically enough, which is "Decisions by committee aren't necessarily a bad thing." Yeah, I see the face... But I agree with your point - I'm not talking about a hundred people, I'm talking three. A small group. It can't be a large group. It needs to be a small group. And I think it goes back to what Peter was saying on the ivory tower stuff. I think if you have benevolent dictators of a language, there needs to be the right amount of questioning of their own opinions and their beliefs, and sort of discarding of some of those...

So my thought there is the committee might give more diverse experiences, backgrounds, inputs into a decision being made, versus there being some sort of unilateral decision-maker who may be heavily influenced by their own opinions, beliefs and experiences, versus having others be able to influence that process.

**Kris Brandow:** I would say that's an agreeable position... But I think it can be larger, actually. The thing about committees that people often is when there's not either psychological safety or cohesion. If they don't have people that think that they're all in this together, kind of rowing in the same direction, then yeah, committees suck. But so do benevolent dictator structures; those also suck. Now you just have one person that's making bad decisions.

\[01:08:04.02\] So I think as long as you have that base level of psychological safety and team cohesion of like "I might not get my way this time, but I'm gonna support the other people that got their way, because when I do get my way and they disagree with me, I want them to also support me." Once you have that, I think it's so much easier to have even larger groups of people be able to make decisions in a pretty quick pace and not get stuck in bikeshedding or turmoil all the time.

So I think committee-based things get a really bad rep, but that's because we're really bad at making team cohesion. We say "We don't wanna do it" so we're just like "Just put one dude in charge", or one woman, or -- well, it's almost always a dude... "Put one dude in charge and they'll make all of the decisions for us!"

**Peter Bourgon:** Patriarchy!

**Kris Brandow:** "They'll bring down the hammer and be like "This is what we're doing!" But that's incredibly harmful and damaging to our ability to actually go and produce things at the end of the day as well.

**Peter Bourgon:** Benevolent dictator - wrong. One - bad. Two - very good. I think.

**Jon Calhoun:** I would say that part of the issue with getting a larger group though is the fact that -- like, let's say it's a heated discussion. There's a hundred people in the committee, and it's roughly evenly distributed. At some point when they make a decision, roughly half of the group is going to feel like they didn't get the decision they wanted. And then when you have a large enough group, instead of having it be like three people where you all have to sort of keep talking and working with each other, they start to segment into two opposing factions, and you get basically our political system of like the Republican Party and the Democratic Party, where they go more and more apart. And if you have that happening in a committee, it can basically become very toxic very quickly... Whereas like - Kris, you said if they are working towards the same thing and they aren't doing that, then yeah, it works great... But I think the larger you get, the more likely it is that that can more easily happen.

**Kris Brandow:** I mean, I think at the end of the day -- and maybe this is an unpopular opinion... But I feel like that is actually a good thing, when you have a large group of people and things start grinding to a halt... Because that means that you have a problem you have to resolve. If you can't get team cohesion with a group of people that are supposed to be in agreement with each other, that means you either have wrong personalities, which you need to deal with, or you're not actually all focused on the same thing.

When I work at companies and it's kind of like an "us vs. them" between an engineering and business department, I'm like "But no, we're all heading toward one thing. We should all be on the same path." We might have disagreements, but as I said, at the end of the day you have to build this system where we vote, and some group wins, and in the long run hopefully we'll all even out and we'll all win some and lose some, and we just have to kind of accept that and move forward with that.

But if the people that are participating in the system don't want to deal with that type of burden, of having to lose sometimes, and they always want to win - then yeah, the system won't work. But also, that's kind of regressing down to the lowest point. And at the end of the day, when it comes to communities like ours, we make decisions and then we all have to go do stuff with that. In the engineering department - you make a decision and then people have to go and actually do the work.

So I think when you have larger groups of people, as long as the people actually have to go do something at the end of the day, as long as they have to go effect work, having your voice at least be heard, and then making sure that people know that their input is valued is a way to keep things moving. I think that's really the only way to scale. Because you can't scale a benevolent dictator very well.

**Peter Bourgon:** You can... I don't know. I don't know.

**Kris Brandow:** I mean, you can scale it to some degree, but you can't scale it up too high... Or what you really wind up doing is having a benevolent dictator who has a bunch of lieutenants who they kind of always listen to...

**Peter Bourgon:** Lackeys...

**Kris Brandow:** And that's like -- okay, now you have a bunch of benevolent dictators, and hopefully none of them get all political. So it's like, you wind up always having a committee of some sort, once you start scaling. One human can't do everything. And it's like, do you want a committee where the people at the end of the day that are gonna do the majority of the work actually get to be the ones having a say, or do you want one where -- and it depends. There's different opinions and there's different ways that it could work. Some people don't wanna have any input. But I think for us as a community, I feel like the way we've definitely started \[unintelligible 01:12:08.06\] people wanna have input, people wanna be listened to, people wanna be heard, and we should find ways of supporting that... Or at least get more people that can support that.

**Peter Bourgon:** \[01:12:18.11\] Here's the thing - when Go was released, it was three dudes. It was Robert, it was Rob, and it was Ken Thompson, right?

**Kris Brandow:** Yes.

**Peter Bourgon:** Three dudes in a room, they designed a language and they released it. This is kind of what Go is. It's kind of an ivory tower language. There's this one comic, they visualize the ethos of various programming languages... And the Go one - there's this huge dude, a hulking dude, with the word Google written on the front of his shirt, and \[unintelligible 01:12:41.25\] "I'm just gonna do what you say." Because that is what Go is. It tells you how to program. That's kind of what we are. And I kind of wanna lean into that... I think it's kind of like fine that there exists a language in that ecosystem of languages where it is an ivory tower \[unintelligible 01:12:56.06\] this is what you should do at a language level.

When you have a group of people and you task them with making a decision -- remember that quote that gets taken out of context all the time by Rob, where it's like "Go is written for people who are not necessarily geniuses." And a lot of people are just like "Oh, Go is for dumb people", right? \[laughter\] You guys know what I'm talking about, right? Whatever the phrasing is... So - I wanna say this again in a way that is more specific. As the number of programmers in an organization grows, the skill level trends towards the mean. This is just a fact. You can't avoid this. So if you want to write a programming language that serves the needs of a large number of programmers, it has to respond to the average programmer. You can't assume that everyone's brilliant. You can hire a team of ten brilliant people. You cannot staff a company with 10,000 brilliant people. It's just not possible.

So when you say "A decision being made by a large group of people" - it will tend towards the least common denominator of what everyone can agree on, by definition. By definition. And so if you only have three people, who are all geniuses, the least common denominator of their opinions is going to be "better" than the least common denominator of 100 people, by definition.

So you can say maybe that's important, maybe it's less important than having a lot of people having their opinions in a big stone soup pot, and whatever comes out of that stone soup pot of a bunch of other people's opinions is ultimately better than the three ivory tower geniuses - that's the position. But I really appreciate working in a language that is basically delivered to me from on high by three people who know what the f\*\*\* they're doing. There's my other cuss. Who know what they're doing, right? And that's why I'm here. I'm not interested in being the guinea pig for somebody's guess at how async should work. I want my language to be stable. I want that to be written by people who know what they're doing, and I'll do all the dumb stuff. That's my domain. You do the good stuff, I do the dumb stuff. I want that ivory tower stuff.

So yeah, the \[unintelligible 01:15:16.11\] You know Fred Brooks? He's The Mythical Man-Month, I guess... Like, if one woman takes nine months to have a baby, two --

**Kris Brandow:** Yeah, you can have nine women have a baby in one month.

**Peter Bourgon:** Exactly. Right. He wrote another book called The Design of Design, which in my opinion is strictly better. In that book he substantiates this idea that all good systems, for the broadest definition of systems, are designed by 2-3 people. Tip to tail. Because the frictional costs, the overhead costs of decisions by committees of more than that number of people ruin all the advantages, and decimate good design.

**Kris Brandow:** So I'll say a couple things. a) There's a little bit of irony here, in that you're so much for this whole ivory tower and that you hate Modules so much...

**Peter Bourgon:** I explained why that's true... \[laughs\]

**Kris Brandow:** I think on the other side -- and it's not like we should just have one giant forum where everybody's screaming at each other. This is why you have committee structures, and parliamentary systems, or congressional systems... So you have to break down things where you have the real discussions at the small, and then you bring them out to the large, and then everybody agrees at the large, or whatever. And you have ways for people voicing things in the small discussions, and you have a set of dedicated people that are like "These are the people that will make the decision." I think that is more of what I was getting at, than the "Everybody should always be yelling into the void, and then we'll have everybody vote in some weird direct democracy" sort of thing. So a much more nuanced system...

But I do see your point, where there can be a lot of nice things. I think that that does rely a lot on having the right type of leaders in place, that understand the awesome power that comes with being a BDFL, and all of that.

**Peter Bourgon:** Oh, yeah. Well, no BDFLs. Two people. Three. So a small group of people.

**Jon Calhoun:** Alright. So I hate to cut you off, but we are well over the time, and I believe Tim has to go shortly... So I'm going to wrap this up by saying thank you everybody for joining us, thank you Peter, thank you Tim, thank you Kris.

**Break**: \[01:17:25.18\]

**Kris Brandow:** I have an after-hours -- or I guess after the official recording unpopular opinion that I'll probably just recycle for a future time...

**Jon Calhoun:** Okay. I mean, we are still live on YouTube, just so everybody knows. Tim, if you need to go, that's fine... But if you guys wanna stay and chat a little bit more, we can. It's completely up to you.

**Kris Brandow:** Yeah, I just wanna see what Peter's reaction to this is, because I think he'll have a bad one... So - I use the word "least important" not as not important, but actually least important. So I think that code is the least important part of software engineering.

**Peter Bourgon:** I agree.

**Kris Brandow:** Dang it. \[laughs\]

**Peter Bourgon:** \[unintelligible 01:19:48.27\] code is a liability, and you should minimize it.

**Kris Brandow:** It's actually the same thing, yeah.

**Peter Bourgon:** Yeah.
