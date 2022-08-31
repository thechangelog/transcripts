**Natalie Pistunovich:** "Good time of the day" is my new favorite greeting, to anybody who is listening any time of the day. Today we are here to talk about dependency managers, and I am here with my co-host, Johnny. Hi, Johnny.

**Johnny Boursiquot:** Hello. How are you?

**Natalie Pistunovich:** Good. How are you?

**Johnny Boursiquot:** I am good, but I am sure I am not as tired as you must be... You just got done finishing hosting GopherCon EU. How did it go this year?

**Natalie Pistunovich:** Wonderful.

**Johnny Boursiquot:** Nice.

**Natalie Pistunovich:** But I am tired, you're right. \[laughter\] And we are here joined today by Baruch Sadogursky. Hi, Baruch. How are you doing?

**Baruch Sadogursky:** Hello! I am very excited to be on this podcast, because -- well, because it's an awesome podcast, with awesome hosts... And I'm a little bit bummed I missed GopherCon EU this year, but we already set up a date to be there next year, I hope.

**Natalie Pistunovich:** Absolutely.

**Baruch Sadogursky:** So yeah, thank you for having me. That's exciting.

**Natalie Pistunovich:** For anybody who's listening later, or just not watching the recording, Baruch wears a really cool T-shirt that says Yalla.

**Baruch Sadogursky:** Yalla.

**Johnny Boursiquot:** What does that mean?

**Natalie Pistunovich:** For those who don't know, for this probably small part of the population, but - for those who don't know, what is Yalla?

**Baruch Sadogursky:** So the meaning of the word is "Let's go", because Go Time, Go Podcast, and everything... \[laughter\]

**Johnny Boursiquot:** Nice.

**Baruch Sadogursky:** But also, it's the name of our conference, the conference that JFrog organizes; a community DevOps conference in Israel.

**Natalie Pistunovich:** So Yalla is the name of the conference?

**Baruch Sadogursky:** Yeah, Yalla DevOps, actually.

**Natalie Pistunovich:** \[04:12\] Yalla DevOps.

**Baruch Sadogursky:** Mm-hm.

**Johnny Boursiquot:** Cool.

**Baruch Sadogursky:** Which is a very cool name.

**Natalie Pistunovich:** Now we are here to talk about dependency managers.

**Baruch Sadogursky:** Yes...!

**Natalie Pistunovich:** And before we jump into that topic, Baruch, would you like to introduce yourself to the crowd?

**Baruch Sadogursky:** Yes! So I hate dependency managers with passion, for the last (I would say) at least 15 years. That's kind of the relevant context. I've been a developer advocate with JFrog for (I think) 11 years by now, before that working as a Java developer, senior developer, or whatever it was... Architect... And yeah, so we started in a previous company, in the consultancy company, we were mostly doing the build CI/CD -- there was no CD back then, but building CI parts of a lot of projects, trying new techniques with builds and dependency managers to make it reliable. One of those tools was what later became JFrog Artifactory, and this is how we got into dependency managers in general, and JFrog in particular, and the rest is history.

My dream is to eventually sit down and write a talk about how terrible every dependency manager on the surface of Earth is.

**Johnny Boursiquot:** Okay... \[laughs\]

**Natalie Pistunovich:** I'm looking forward to that talk. Please tell me what conference, I will join.

**Baruch Sadogursky:** Yup, yup. That'll be everywhere. Once I write it, I will go and preach about how terrible they are to everybody. The most annoying thing is there's no solution, really... And we can talk about that, why it is the issue, we can talk about later. And by the way, Johnny, thank you for wearing this T-shirt. I love it.

**Johnny Boursiquot:** Yeah, that's actually a JFrog --

**Baruch Sadogursky:** Yeah, it's the \[unintelligible 00:05:59.14\]

**Johnny Boursiquot:** It's completely coincidental. That was not planned at all. \[laughs\]

**Baruch Sadogursky:** Um, okay...

**Johnny Boursiquot:** It really wasn't, yeah.

**Natalie Pistunovich:** It's just because the T-shirts are indeed cool, every year.

**Baruch Sadogursky:** It's true, yeah.

**Johnny Boursiquot:** I am interested in -- obviously, this is a space you're very familiar with... I come from basically a long history of using various dependency managers for various languages... And yeah, none of them are really perfect. Nor do I ever expect them to be, but each one has different pain points, each one has things they do well, and some things they could certainly improve... But I'm curious, because you have sort of that broad view of a lot of them, what have you seen that is the common thing that they all don't get quite right?

**Baruch Sadogursky:** Right. I will quote Sam Boyer a lot. You obviously know Sam; I hope you hosted him on your podcast, and if you didn't, you should.

**Johnny Boursiquot:** Oh, we have.

**Baruch Sadogursky:** And if you did, you should do it again.

**Johnny Boursiquot:** \[laughs\]

**Baruch Sadogursky:** Sam is amazing... And basically, he summarized all the problems with dependency management perfectly when he said that dependency management looks like a computing problem, and we try to solve it as a computing problem, but it's actually a people problem. The biggest problem with dependency management - there is no way to solve it just using the math, the algorithms, the computer science, because it always clashes with how humans behave. Your expectations, what do you do, how do you do it. And by that, the simplest example will be - you know, stuff like backwards compatibility, binary compatibility... And you say "Well, that's a solved problem. We have semantic versioning that solves it. It has guarantees which levels of versioning should work with which others", and you say "Well, it's a major version, it will break backwards compatibility, but if it's a patch, it shouldn't." And then you code it in a way that your dependency manager will know how to look for a new version, or not look for a new version etc. but then it actually breaks very quickly when those guarantees are not fulfilled by the people who apply the versioning to their tools. And this will always be something that is human-driven. People will decide which compatibility their software breaks or not, and they will make mistakes. But when you look at the algorithm side of things, it doesn't know about those mistakes, right?

\[08:43\] So you say "Well, I can always rely on the fact that a patch-level upgrade will work great because of backwards-compatibility", but it's not, because someone made a mistake. There is no way to promise binary compatibility without relying on people's opinions on whether their software is compatible or not. Does it make sense?

**Johnny Boursiquot:** Yeah, that totally makes sense. I can certainly see, for those who are not super-familiar with semantic versioning and how versioning is in theory supposed to happen - basically, you're not supposed to be changing existing APIs... Imagine a particular method that does something - you're not supposed to all of a sudden change the signature of the function, or the method, to accept new parameters or change existing parameters and then call it a patch. That's a breaking change. You are gonna break other people's builds who are relying on the dependency.

So we're relying on individuals sort of doing the right thing, but obviously, for popular projects, even though it happens, these tend to be sort of mistakes... So really what we're saying is human mistakes. This is sort of a grey area where algorithms can't really help you there, because it's a human making a decision, saying "Okay, I'm gonna release this as a patch", but for some reason maybe they forgot or maybe they were not communicating with somebody else on the team, or whatever it may be, and they accidentally released a breaking change as a patch, when it was supposed to be a minor version bump, or maybe a major version upgrade, or whatever the case may be.

My question to that is "Is it really sort of a completely grey area that cannot be solved using an algorithm or using computers to solve the problem?" Do we not have tooling for that, or maybe we just haven't put in the time yet into solving to prevent these kinds of problems. It sounds like we could create some tooling to say "Hey, have function signatures change", for example. That way you have to have a different kind of a bump.

**Baruch Sadogursky:** Right. But that's the easy challenge, right? If you say like "Just check that the signature is the same and the parameters didn't change" and whatnot, that's obviously doable. But how about the behavior? So at the end of the day, you made the patch, and you made it for a reason, because you want the behavior to be different. But the question is if that's the right kind of different. Maybe there is a bug. Maybe you were supposed to fix the bug, but instead you introduced an even larger bug, and now it does something terrible.

In terms of the binary compatibility per se, your build won't break, because the parameters are the same, and everything -- and unless you test for this behavior, you won't even know. And then you release to production, and then you discover it, and now you need to roll back. Now, roll back - it's another hell of its own, because now the behavior should change backwards, and your software should actually be forward-compatible in order to be able to work with part of the system will be the new version and part will be in the older version.

So it's really a problem that has no solution, because it actually depends on people always doing the right thing, which is not what's happening.

But this is only one side of the problem. I can tell you another one, which is also very human-driven... And that's the external dependencies. How do you get them where they are? How do you trust those who produce those dependencies etc?

\[12:24\] Another quote -- and I don't remember whom... I think it was Brad Fitzpatrick that said that when you use external dependencies, it's like you just take someone else's random code from the internet and just dump it into your production systems. I think it was Brad. And he's on point on that. His solution was terrible, frankly, if you ask me. Before Go had Go Modules, the idea was "Hey, take their source and incorporate it in your source, and then consider it your source", which is very, I would say, kind of an embedded \[unintelligible 00:12:57.24\] solution when you really do that, and then you provide one binary... But for large-scale systems that 80% to 90% are built with third-party dependences, this is not a scalable solution in any way or form.

So he pinpointed the problem correctly. It is a terrible idea to just grab other people's dependencies and throw them into your production system... But what is the answer? And we as an industry try to come up with the solution for many years now, and Go Modules, the central repository, the signature server of the central repository - the earlier version of this vision when it was the idea of multiple central repositories that need to negotiate between them and establish some kind of a trust... Because if we have the same package, under the same name, come from different sources and their checksum is different, that means that someone is lying here, and we need to find out who.

This is another huge challenge, and especially today, when we hear all those stories about how the supply chains of those dependencies get hacked. SolarWinds for one example, and multiple others. That's obviously the problem which surfaced lately, but been with us for as long as we tried and used dependency managers.

**Break:** \[14:20\]

**Johnny Boursiquot:** So what would you say has been -- like, I have some idea of how you'd go about trying to not solve, but really mitigate... But I wanna hear what you've seen in your experience of how people sort of mitigate that second class of problems.

**Baruch Sadogursky:** There were and still are a lot of efforts in trying to do that... And it looks like - this is from our experience as well; we tried to come up with -- again, back a couple of years ago when Go Modules only appeared, we heard this vision of "Hey, we will have some kind of a network of central module registries that will communicate with each other, trying to establish whatever truth really is, and make sure that the rest of them are not allowed", and everything. This is where we actually started Go center. That was one of those registries. But with time, in a matter of the next years, somehow this vision morphed to "Hey, Google will maintain this central module repository, and whatever Google says is the right thing, is the right thing." So this is where the usability of Go Modules kind of disappeared, because there was no more alternatives to whatever golden modules Google will give you.

But then it was a very useful experience for us to really try and evolve this idea of negotiating what's \[unintelligible 00:17:34.25\] And I would say there are now two most important aspects of this system. The first is how do we know which module is the right module, in terms of "Hey, I have two of them, they're named the same, they have the same version, but their checksum is different. Which one of them is lying, and which one of them is authentic?" That's the first one. And the second is chain of custody of those modules that we decided they are the right ones. So I decided this module is authentic, and we can talk in a second why... And then, okay, how do I make sure that what I have now in my machine is really the same module, and the papertrail of the decision that it was the authentic module is actually preserved and cannot be hacked?

\[18:30\] That brought us to envisioning a system that everybody will be able to use in order to guarantee those two, and it's called Pyrsia. Actually, Pyrsia - that's an interesting story of the name... It's actually a system that ancient Greeks used to convey messages with flames between each other. So this is why you have the torch.

The idea is a decentralized P2P network that will provide a consensus of what modules are authentic, and then make sure that they cannot be tampered with, with some kind of blockchain-backed ledger. I know that we lost two thirds of the audience right now, after I mentioned blockchain, but whoever stayed - you did the right thing; it has nothing to do with cryptocurrencies or Web 3.0. It's just a ledger that you cannot tamper with; that's the interesting part of it over there.

So basically, what we say is "Okay, everybody now can build modules from source, and publish them wherever they like." The system will communicate and decide if that's the golden build by comparing it to the build that the original producer of this module creates. Let's say I have a library now that I wanna publish, and I create a build that because it's my library, I know is the right build. Now, everybody can have their own CI producing the same module from my sources, because my sources are obviously open source; as long as the build produces the same result, your end result is as good as mine.

Now, we record it, so no one can hack into that and pretend that another result is the right one, and then we distribute it through a P2P network, because now we don't care where it comes from, as long as we can guarantee that it's the right results. So now Natalie builds it on her machine, and she's behind a firewall and the connection to whatever central repository \[unintelligible 00:20:36.12\] but you see the next door, in the same intranet with her, in the same company, and as long as we verify that the build that Natalie produced is as good as this golden one that was produced by the original maintainer of the library, you can use whatever she built without downloading it again, outside of the firewall, and getting tons of approvals and whatnot.

So this looks like, from our perspective, the solution to some of the supply chain issues, because it guarantees the authenticity, and it protects the supply chain itself, because we verify on your machine that the package you have is exactly the package you need to have, regardless of where it actually came from. And you also have this network of the Go registry, npm registry, JFrog Artifactory, Maven Central, you name it, the sources that provide infrastructure for massive distribution and scale... And again, we don't need to trust them in terms of "Are they giving us the right packages?" because we can verify ourselves. And also, in case they are down, we can also rely on the P2P network to get the modules in case they are not available.

**Johnny Boursiquot:** \[21:59\] Does this approach require those who create those libraries or dependencies, that they basically follow a similar set of principles? I'm thinking of the recently made public Software Bill of Materials. Stuff that came out within the last year, for example... Basically, that requires a specific set of things be present in order to know where did they come from, what's the version of each component, give me some identifies, give me some things that I can check against. Does such a distributed peer-to-peer system require adherence to something like this?

**Baruch Sadogursky:** Yeah, so this is the question of how we can verify that these golden module is really golden, is really good. And this can be achieved in multiple ways. First of all, we can say hey, let's say the Go community trusts the Google registry to a reasonable extent. And that means that if I produce a module for the Go community, I can delegate to the Google registry to build my module and declare it golden, because I know that the Google Go Module Registry guarantees all those things, and will make sure that my module is good. Since that point, it's all P2P, with untampered ledger, and we go to that. I can say "You know what? I don't trust anyone. I want to build it myself. The only binary that I'm ready to distribute or call it golden is the one that I built for myself." That's fine. Here you have, let's say, a Pyrsia client - that will take care of all the needed attestations, documentation, bill of materials etc, and if you don't have them, then your build cannot be certified as these golden build that will be distributed to everybody, or reproduced by whoever we want it to reproduce, as long as the checksums of both the data and metadata match. Does it make sense?

**Johnny Boursiquot:** Yeah, it makes sense.

**Baruch Sadogursky:** Right. So this is kind of our vision, and obviously, it's just a patchwork of the problems that arose in the last years, and the solutions that we saw working or not working. I can tell you an example... So Maven Central, for example, has been struggling with the problem of this authenticity forever, because they existed from 2009. And they're like, "Okay, how do we guarantee that whoever publishes this artifact to Maven Central can actually do that?" And they say "You know what - we're going to do PGP keys." So I need to have a key, that I sign, and uploading the public key with my artifacts, so whoever downloads it can download the key and verify that I am the one that actually created it... Which sounds like a good idea, but you need to remember that the PGP idea was created to establish a trusted circle of people. It was created for email, based on the assumption that everybody knows everybody else through someone else in whatever theory of five handshakes, or whatever.

So basically, if I send an email to you, and that's our first correspondence, you don't know who am I, but Natalie knows who am I. She can propagate this knowledge to you. Now, it works in email, but for distributing binaries throughout the world, you have no idea who am I.

\[25:42\] So you downloaded my PGP key. It says "Baruch Sadogursky", or it might say "Brad Fitzpatrick." How do you know that I'm really whoever I claim I am? I can generate a pair of keys for any identity that I want. And if the only requirement of the central repository is to provide them with this key, I can be whoever I want. And the funny thing is if you use the default PGP tool for generating keys for Ubuntu - at least that is what it used to be - and then you just do Next, Next, Next, Enter, Enter, Enter, the defaults are... I don't remember whom -- some famous German, because the PGP key was created in some German university... I don't remember. Maybe a writer. But anyway, it had some ridiculous default. Mozart. I think it's Mozart. Maybe it's Mozart. Not German, but... I don't remember. Someone. But then you just take it and plug it into the search of Maven Central Repository, and you find hundreds of modules created by this person. Because most of the people, when they do tests, they just do Next, Next, Next, and they generate a signature for this person, and just upload it with their packages to Maven Central. It really doesn't verify the authenticity. And it's obviously not enough.

On the other side, you don't really care. If I created a module, you don't care what my name is. And even if I'll tell you my real name, it probably won't help, because you don't know me. What you need is someone who you trust to vouch for this module. And this is where when we have those golden registries, or golden CI/CD pipelines that can guarantee that they took it from the right source, they have all the bill of materials, everything is safe, and then this is the outcome, this is the checksum of the data and the metadata, this is everything you need. And then you can decide whether you want to take this module from them, whether you want to build it from sources on your machine, and just compare that you have the same outcome... This is all you need. You really don't care what's the name of whoever built it, and this is why the PGP keys are not helping.

**Johnny Boursiquot:** Okay. So in this new world, if I'm building software, that first decision to use a dependency - I'm still making that choice, right? So if I go on GitHub, Bitbucket, what have you, and I'm looking for a library that does X, then that job of identifying a library and deciding to trust it - maybe I read through the source code, making sure it's doing what it says it's doing - that first job is not obviated by this new system.

**Baruch Sadogursky:** And here we are back to the problems that cannot be solved by computer science. And there are a bunch of them. We're just getting started. We work on that set of problems which is solvable. Those are the low-hanging fruits. How about the problem that the project is hijacked? You'll remember probably the story - there was a popular project that the maintainer kind of stepped away and let their domain expire. And then someone purchased the domain, tied it to their email address, obviously created a working email, restored the password for whatever npm registry, and was able to upload a new version with malicious code. There is no solution. Literally, there is no solution. It's a people problem that we -- if we declare that we can solve it with computer science, we lie to ourselves. And this is one of the reasons why all the dependency managers suck, because every developer of dependency management promises themselves and everybody else that they are going to solve those problems using computer science... And it's impossible.

So whoever tells you they're going to solve the problem of supply chain security, spit them in the face. They are lying.

**Break:** \[29:57\]

**Natalie Pistunovich:** So a question from the crowd, from the GoTime Slack channel. Somebody's asking whether binary compatibility decisions are different among organizations. And Louis St. Martin, who's writing this, is saying that at work they have this situation that they know what is a good code, and reference the code, and so on, so they don't reinvent those patterns every time... But for things like Terraform - he is not familiar with any. So would something like an RFC help to things like binary compatibility decisions and so on?

**Baruch Sadogursky:** I'm not sure I understood, frankly...

**Natalie Pistunovich:** If there is something like good usage patterns, and good style, and recommended whatever RFC equivalent would be for things like binary compatibility decisions specifically.

**Baruch Sadogursky:** Yeah, so I think -- again, if we look for standards, something codified, I would say that semantic versioning is actually a very, very good system to guarantee backwards compatibility. But again, with a twist, obviously, and the twist is humans.

The idea is that "Hey, we can rely on whatever version of patching, patch version to be binary compatible, and minor version be public API compatible, and then minor not compatible to anything, and that actually should work for everything, until we hit the problem that "Hey, someone did incompatible things and called it a patch." And for that, frankly, I'm not aware of any possible solution at all. Unless I'm missing something obvious in the last 15 years, I don't see any way on how you can solve it.

How you can prevent humans from breaking the guarantees that we build our machine systems upon? That episode - that's a really sad episode. Sorry about that.

**Johnny Boursiquot:** \[laughs\]

**Natalie Pistunovich:** Maybe it will inspire somebody for something.

**Johnny Boursiquot:** It's like everything -- it sucks. \[laughs\]

**Natalie Pistunovich:** Yeah. Social engineering, but for packages.

**Baruch Sadogursky:** I mean, social engineering is malicious, but even honest mistakes. Let's not go and assume the worst... But even if we assume the best in people, people make mistakes, and there is no easy way to catch them always, and this is why we have bugs; and that's fine. But we have a system that envisions no bugs, and that cannot work.

**Natalie Pistunovich:** \[34:14\] So another point that came up on Slack by Henry Snowpack is in the context of npm registry compromise. So Henry is saying that vendoring could solve that, to a point...

**Baruch Sadogursky:** Yup. Yup.

**Natalie Pistunovich:** ...if you require review checks before the dependency is being updated. Or I guess it's a question...

**Baruch Sadogursky:** So two things here. First of all, let's talk about vendoring. Vendoring is the worst type of working. You take someone else's code, you detach it from their version control, you dump it into your version control, and you're all for the races. You diverge from the original development; bringing that back will be a terrible pain, and you basically treat it as your own source code, when you cannot even determine what's your source code and what's not, in a machine reasonable way.

The benefit of vendoring - and this is why Go relied on vendoring for a decade - is because it kind of ignores that supply chain problem. As a matter of fact, you're saying "I don't use any third-party dependencies at all. All the code is mine. I take full responsibility of whatever I'm using, whether I brought it through vendoring or wrote it myself." It's nice because it lets you ignore the supply chain problem, but it's terrible in any other possible way.

So yes, it solves this particular problem, but the solution is usually more problems than actually benefits. And the fact that Go switched to Go Modules from vendoring is, I think, kind of -- it attests to the fact that vendoring is not a scalable solution.

Vendoring is terrible in some ways, probably not the right solution for the supply chain problem, and we need to look for other solutions.

**Johnny Boursiquot:** I would say my counterpoint to that would be if what I care about -- if I have sort of a set of things that are important to me, for my builds, reproducibility of my builds, making sure I have the right version, that I've vetted, that I know work with my stuff, I'm not worried about a patch being compatible. So I'd say this particular version, this particular commit, this particular semantic version I know for a fact works to produce my piece of software, that's working in my business, that's supposed to be making money... If my primary concern is to make sure that I'm always able to reproduce that build with that same exact version of the code, then perhaps I don't care about the other factors. Perhaps vendoring works just fine, because that is the first and foremost thing that I care about.

**Baruch Sadogursky:** The good news are you definitely don't need vendoring for that. Like, at all. Any modern package management today will give you a full reproducible build by using dependency managers, because you have multiple layers of caching that you can lock what dependencies you use for this particular build, without actually declaring third-party code as yours. And that's true for Go Modules, obviously... It actually uses the directory formerly used for vendoring as a cache for modules now, and you have your own level of caching on your intranet, on your company or team level, being JFrog Artifactory or being the local Go registry in this way or another...

\[37:53\] So you definitely can get repeatability, you definitely can reproduce the builds, you definitely can lock your versions that you are interested in after your vetting. Using modules or any dependency manager doesn't mean getting out there and grabbing the latest, the freshest dependency and dumping it in your build. No. It actually means doing the upgrades in the most convenient way on your terms. And your terms should differ based on your risk sensitivity in this particular scenario.

If you just have a script that does something for testing Go, or whatever, you can say "You know what - I don't care. I can download the latest version and just try to run with it." Worst-case, it just fails.

If you have a sensitive build - security, financials, you name it - then obviously it's a different game. You have a closed system that has to produce a reproducible build every time. The upgrades will be tested in multiple scenarios on different levels of testing, because before they will be allowed to be a part of your production system, and this is fine as well. But when you use a modular build system like Go Modules, you can automate that, and build a pipeline that will take a new version not throwing it into production immediately in the next build, but getting it into this pipeline of verifications that can be completely automated, manual, half and half, whatever works for you, and only that propagated to be an official dependency, so you get all the benefits of vendoring without the downsides of declaring every third-party source as yours.

**Natalie Pistunovich:** Henry said "Thank you for your response, Baruch", and I am proposing we will jump to the fun part of the show, of an unpopular opinion.

**Jingle:** \[39:59\] to \[40:18\]

**Natalie Pistunovich:** So I wonder if most of the thoughts you were sharing, Baruch, will be ending up popular and unpopular, but I also wonder if you have an unpopular opinion for us, that is on any topic you want. It could be dependency managers, it could be anything else.

**Baruch Sadogursky:** Yeah, we spoke for the last 45 minutes about one huge unpopular opinion... I will just summarize it to put it up to the vote. Dependency management was sent to us from hell to make our lives miserable.

**Johnny Boursiquot:** \[laughs\]

**Natalie Pistunovich:** Alright, alright, so any unpopular opinion goes through the vote on the Twitters. So we will soon find out what does the crowd think.

**Baruch Sadogursky:** Okay, I'm going to turn on my Twitter bot farm right now. Because of my Twitter bot farm, that's why Elon Musk didn't buy Twitter. \[laughter\] Because they did manage to find it, and they know there are a lot of bots them, they know who owns them, and that's me.

**Natalie Pistunovich:** And you operate them all with DevOps.

**Baruch Sadogursky:** Of course, of course.

**Johnny Boursiquot:** CI/CD pipelining for your bots.

**Baruch Sadogursky:** Yeah, yeah, built with another package manager that was sent to us from hell to make us all miserable. Yup.

**Natalie Pistunovich:** Alright.

**Johnny Boursiquot:** Cool.

**Natalie Pistunovich:** I will say thank you very much to everybody who participated on Slack. It's fun when the crowd participates. And I will say, Baruch, a very big thank you for joining and sharing your thoughts. That is definitely interesting to hear. Johnny, thank you for asking practically all the questions in this episode. You rock.

**Johnny Boursiquot:** \[laughs\] Yeah, I was definitely interested in some fresh thinking, and definitely called out a few of the pain points that I've definitely felt all across my career... And it's interesting to know that there's some new thinking being applied to these problems. It doesn't solve all of our problems, there's some human aspects, as you mentioned, that are sort of unavoidable... Things like how the software bill of materials is leveraged, how we can use a P2P network for authenticity and verification, and things like that... These are really some new things that are gonna have hopefully some positive impact on this dependency problem from hell, as you say. \[laughs\]

**Baruch Sadogursky:** I really hope so. We are learning and getting better step by step, but yeah, what we need to keep in mind - we cannot solve everything with computer science, because... Humans.

**Johnny Boursiquot:** Right.

**Natalie Pistunovich:** \[laughs\] Thank you everyone again for joining.
