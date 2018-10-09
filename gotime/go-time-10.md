**Erik St. Martin:** Alright everybody... \[laughter\] I'm still laughing. \[laughs\] I actually had to pull away from the mic on that one. Alright, welcome back, it's episode ten. As always on the call myself, Erik St. Martin, we have Brian Ketelsen...

**Brian Ketelsen:** Hello!

**Erik St. Martin:** ... and Carlisia Campos.

**Carlisia Pinto:** Glad to be here.

**Erik St. Martin:** ... and today with us we have a special guest, Ed Muller from Heroku, who will be talking about all things Go at Heroku and some dependency management and any other random topics we decide to come up with. How are you doing, Ed?

**Ed Muller:** Howdy!

**Erik St. Martin:** Thanks for coming on, it's kind of exciting.

**Ed Muller:** Thanks for having me.

**Erik St. Martin:** What I want to talk about first is you recently sent out a survey - which I hope everybody's taken - getting information about people's Go usage. Do you wanna talk to us a little bit about that and the purpose you're looking for from that? And hopefully we can get more people to take it.

**Ed Muller:** Yeah, so I started asking people in various Slack channels, "Hey, what can you tell me about Go users in different ways?" and Damian Grisky, the gentleman who does all the Go implementations of all the various different types of algorithms, he had linked me to the State of Rust Survey and said "Something like this might be pretty cool." I started looking at that and I was like, "You know what, I can't answer most of these questions for Go. I have my intuitions, but I just can't answer these questions, so why don't I just do the same thing?"

**Erik St. Martin:** How were the responses from that, Ben? Have you been getting a lot of feedback from that?

**Ed Muller:** So far there's almost 2,400 responses, but I know there's more than 2,400 Gophers in the world.

**Erik St. Martin:** I'm willing to bet that there probably are.

**Carlisia Pinto:** 2,401, I took it today. \[laughter\]

**Erik St. Martin:** I have to admit, I didn't complete it all the way through. I was really trying to analyze the page where it started asking what would I change, what would I want, and I feel like I've been around too long, I'm too used to it, so I was trying to sit back and think about that constructively, and I never went back to it. So there would be 2,402, but...

**Ed Muller:** Go back to it, do it again...

**Brian Ketelsen:** I took it and I answered all the questions honestly, and then at the end it said, "And do you want to leave your name?" and I was like, "Oh man, I answered all these questions honestly." Alright, so I figure at GopherCon I'm gonna get a beatdown from somebody.

**Erik St. Martin:** So you put my name instead of yours is what you're saying?

**Brian Ketelsen:** No, I put my real name in, but I did mention that dependency management was a pain point that we need to resolve as a community immediately.

**Ed Muller:** Yeah, we do. So I maintain the Go Buildpack at Heroku and I have the wonderful honor of having to implement all sorts of different detections based on whether people are using things like GB or Glide or Govendor or Godeps, and that also excludes things like GVT and all sorts of other stuff... Where the other buildpacks are just like, "Hey, you're a Node, use NPM. You're on Ruby, use Bundler etc."

**Brian Ketelsen:** That's gotta be a lot of fun.

**Carlisia Pinto:** \[00:03:57.03\] So what are the dependency packages that you support at Heroku?

**Ed Muller:** The managers that we support are Godep; I'm also the current maintainer of that. Govendor, GB, and - it's not released yet, but if you use the master branch of the Buildpack, Glide support. And I think I've come up with a way to manage our last version, but I need to spend some time and write a bunch of code and then test it before committing to it.

**Carlisia Pinto:** Do you have stats that you can share for how many projects use one or the other?

**Ed Muller:** The vast majority of them use Godep. There are though users of Govendor and then GB; so as rankings, the vast majority is just Godep and then Govendor and GB. Part of that is just historical, because before the vendor experiment, if you wanted to do dependency management you basically used Godep.

**Erik St. Martin:** Yeah, that was what I was gonna lead into as well - the question becomes how much of that is historical, because many of the other ones are new kids on the block in comparison. Godep has been around much longer than Govendor and GB. And is Glide the newest one?

**Brian Ketelsen:** Glide's not the newest one by a long shot. There's probably been 30 edits since Glide came out.

**Ed Muller:** Yeah, I occasionally have conversations with authors of new ones, and I'm like "Great, it looks like you solved the 80%. Now here is the rest of the 80% problems that you're gonna run into. Have fun!"

**Brian Ketelsen:** Good luck with that...

**Erik St. Martin:** It's hard, because I feel like there's no perfect solution, right? It's like there's things I love about each of these tools and there's things I can't stand either. I think I have to end up with the one that I dislike the least.

**Carlisia Pinto:** Does anybody have any insights as to the states of resolution on this issue? Is vendoring something that's going to be solved soon, or it's not on the plate? I haven't been following, but it's important enough...

**Ed Muller:** Well, there is a channel in Slack where myself, Daniel Theophanes, who's the author behind Govendor, some people from Glide kind of discussing some stuff and it's free for anybody to join. I haven't participated too much in it recently, but I know they are working towards some metadata standards. Daniel also was the backer of Vendor.json, which really wasn't adopted beyond his tool, though.

**Carlisia Pinto:** Is anybody from the Go Language Team in there?

**Ed Muller:** Not that I'm aware of. My understanding - and it hasn't changed, really - is that the Go Team was like "Here's Vendor. We're gonna let the ecosystem solve the hard part of the problem."

**Brian Ketelsen:** Yeah, I think a good addendum to that though is the fact that the Go Team is listening very carefully to the issues that people are having in the real world. Andrew Gerrand has asked that we do a discussion at GopherCon on the Hack Day, so there's gonna be a room where people can come in and talk about issues with Go, and they fully expect people to be talking about dependency management at a little roundtable discussion.

I know that they acknowledge that the vendor directory isn't a full solution. I think they would like us as a community to come together and help them make a plan or come together and offer a solution; perhaps one with code would be even better. But yeah, they are listening.

**Erik St. Martin:** \[00:08:06.28\] I think it's a valid point too, because how much time do we want the Go Team invested in working on vendors stuff, instead of things like compile times and performance and things like that? Especially when we're still kind of eeling around blindly. There hasn't been consensus on "This is exactly the approach", so it's difficult. And I think every community has gone through this whole thing with "What do we do about vendoring?", or bundling, or whatever they happen to call it in their particular community.

**Brian Ketelsen:** I have a strong opinion. Would you like me to share it?

**Erik St. Martin:** Sure.

**Ed Muller:** Yes, please.

**Brian Ketelsen:** Look, Brian has a strong opinion again.

**Erik St. Martin:** We need a better reason for you to get beat down at GopherCon.

**Brian Ketelsen:** \[laughs\] All of the new languages that have come out recently - I'm talking about Nim, Rust, Crystal... What's the one I really like...?

**Erik St. Martin:** Oni?

**Brian Ketelsen:** Oni, thank you. All of the new languages that I've look at recently have this problem solved from the gate, and Go does not. And it's very frustrating to see these baby languages with much smaller adoption rates than Go have this problem completely solved. Now, I'm not saying that their solutions are perfect, but they're far better than what we have and they're built into the ecosystem already.

Dependency management is a big deal, and repeatable builds is a big deal. I feel like we've been hung out to dry on it, and I think the community needs to come together and not create 30 solutions; I think the community needs to create one good solution, or Google needs to create that solution, or at least foster that solution.

**Carlisia Pinto:** I was thinking the same thing, along those lines. The Go Language Team is part of the community, and it's sort of odd that there's a group of people working on a solution without any input or feedback from the Language Team. Are they aware that this is happening, or...?

**Erik St. Martin:** Well, there's been a discussion with the Go Team surrounding vendoring, but I think that they were... I think that their opinion/standpoint has been that it's not part of the language itself, it's part of the ecosystem. I think that's why they've stayed mostly out of it, but I think that there was obvious pain points, that Go path munging for most of these tools, and I think that's why they wanted to step in and try to provide support there.

I think that the Go Team is probably overwhelmed with stuff, and this is probably the least of their worries, which sounds bad to say. Maybe I'll get the beatdown from Brian for saying that. \[laughter\]

**Brian Ketelsen:** No, I don't disagree. I think they have a million things to do. I just think that as a community we need to come together and solve this sooner rather than later, before it really starts to dampen the adoption that Go is getting now. Because I think Go has great traction, and it will only get better when we can prove to the rest of the world that we understand repeatable builds and dependency management.

**Erik St. Martin:** Agreed. I think as a community we need to... I think we're just to used to everybody pointing the fingers towards the Go Team like they need to solve it. I think that's not the whole nature of the open source community either.

**Brian Ketelsen:** No, and we all recognize that the Go Team is a small group of people in Google that are generally working for Google's best interests, but graciously sharing the Go programming language with the rest of us, and nobody faults them - at least I hope nobody faults them for taking care of Google first. That's not why I'm saying, by any stretch. I just think it's something that, as a group, the community needs to solve really soon.

**Ed Muller:** \[00:12:12.11\] I can't really put words in the Go Team's mouth... I think I understand some of their motivations. I also think they don't run into some of the same problems internally using Go that other companies do, that don't have the Go Team down the hall, or in the lunch cafeteria, or things like that.

But one thing I would say is if you are somebody who is frustrated by vendor, please don't make your own tool; we have enough of them. Find another tool.

**Erik St. Martin:** +1...

**Ed Muller:** Read that codebase. Submit PRs. Fix problems. It doesn't have to be Godep. Godep is far, far, far from perfect. But pick one of them and back a horse. Don't worry if you're not right in the end; I don't know if there's a right or wrong... But yeah, please don't make your own.

**Carlisia Pinto:** Ed, I don't remember if you said the name of the channel where this conversation is happening...

**Ed Muller:** It's called \#vendor in Gopher Slack.

**Erik St. Martin:** So you were talking about how the 20% is still left unsolved. What do you see as some of those issues that still need to be figured out?

**Ed Muller:** I think the biggest thing that a lot of the tools punt down the road, Godep included, is actual upgrade... Like, actually helping the user upgrade their deps and manage versions. A lot of them don't tackle dependencies for libraries per se. The old adage - if there can be an old adage - in Go is, "A library should not vendor their dependencies", it should be up to the users of those libraries to do that. But that's hard when you get to testing, compatibility and things like that; we don't have a really good culture in Go of releasing software. It's like, "Well, you have an API and it's on master." That's the historical context, anyway.

So there's not a lot of people - although it is gaining traction recently - for SemVer tags for different releases. That was one of the things I really wanted to ask in the survey, for instance.

**Erik St. Martin:** So when you talk about semantic version, you're kind of talking in the spirit of, say, Bundler for Ruby, where you define your dependencies plus a specific verison, or at least a major-minor release, or something along those lines?

**Ed Muller:** I'm of the opinion that for libraries you absolutely need to specify some constraints on versions, especially over time. For your application, I am less interested in specifying specific versions and looking for the lock, because that's the only way to get truly repeatable builds. Also, I don't understand people who don't wanna check in vendor. I mean, I get it, but the person who did ops for many years is like, "But what happens when GitHub is down?"

**Brian Ketelsen:** Exactly.

**Ed Muller:** Or being DDoSed.

**Erik St. Martin:** And some of the other stuff too is that I feel some of that stuff comes as part of the code review. When you get into bigger environments, there's no reason you shouldn't be auditing these libraries before using them, before you put them on your production systems where they have access to your data; you should know what that library does and you should know what changed when you pull in a new version. So as part of my code review, when I submit my new feature and I pulled in a new library or I upgraded it, you should be able to see a code review, or you should be able to see what changed, and to be able to speculate what kind of problems that may cause. I never got that not checking in vendor thing.

**Ed Muller:** \[00:16:14.00\] Yeah, totally. Actually, it's been a topic of discussion with my other Heroki this week, a lot of which don't... Heroku is a big company at this point by startup standards, and we're part of an even bigger company, so there are people who do lots of Node and Python, Ruby... Pick a language, we have it somewhere, or an enthusiast for that language at Heroku. And it's interesting, because I got to talk to a bunch of Node people and they've actually heard rumblings in certain circles of Node where people are starting to decide, "Well, maybe we wanna check in vendor", which I was kind of like floored by.

**Erik St. Martin:** Yeah, I'm not too familiar with the Node ecosystem. Is it typical for the way they package their stuff to not check in vendor?

**Ed Muller:** That's my understanding. You run an NPM install... Again, my knowledge of Node itself is probably about your level as well.

**Erik St. Martin:** So in this whole left-pad thing - it probably helped with the check-in vendor thing.

**Ed Muller:** That's a gentleman who removed all of his...

**Erik St. Martin:** Yeah...

**Ed Muller:** I think that's part of what helped motivate that.

**Erik St. Martin:** Everything sounds good when everything's working, when the golden path works. It's beautiful.

**Ed Muller:** Yeah, it's great. I mean... Other complaints I get for not checking in vendors are like, "Oh, it makes your gifs messy" and I'm like, "But those are your dependencies. They're running with your code, they are part of your code." I think it was Brian who said, "I wanna see those too during your code review. I'm gonna take a look at what's in there. I'm gonna ask you why did you upgrade that?"

**Erik St. Martin:** And even for failures, right? Something changed and you don't understand why you're noticing a new failure in production. All you did was upgrade say one library and make one other minor change, right? You don't know what changed in the library to understand why now you're getting socket connection errors and stuff like that, right? You start looking for a hardware problem because you're like, "This library has always worked... What's going on with the system configuration?" or something like that, and you come to find out it's one line of code that changed in the library and you didn't notice that slight change in semantic version, like a patch version that broke something.

**Brian Ketelsen:** Well, another core issue is that just the idea of semantic versioning isn't defined for Go, and I think it was Dave Cheney maybe a year ago who wanted to start off this whole process by saying, "Maybe the first thing that we need to do is define what's a minor patch in a Go library, what's a minor version bump, what's a major version bump in a Go library, what's the definition? An API break and change, a bug fix...?" and he didn't get a lot of traction; he got a lot of argument, but not a lot of traction. I think we've got some fundamental issues to talk about before we can even get to the depth of solving the problem. Most Go packages that I've seen aren't tagged with versions of any sort, much less semantic versions. We have a long way to go.

**Ed Muller:** I'd like to introduce a data point in here from the survey. Of 2,221 responses, the question of "Do you tag releases using SemVer tags?", 41% say yes, and 58% say no.

**Erik St. Martin:** So most people aren't versioning their libraries.

**Ed Muller:** The vast majority aren't.

**Carlisia Pinto:** \[00:19:53.17\] But let me see if I understand. Right now is there anything that we can do with those versionings? Because if it's no, I see the point of people not using it, and I think that more people would do it if there was a function for it.

**Ed Muller:** It is a little bit of a chicken and the egg, because if the tools don't have the tags to use, then you're not necessarily gonna spend time working on those feature sets, and vice versa, if you don't have tools that use some of them, theoretically why should I bother? Which is another thing I'd like to point out about SemVer - this is something that I struggled with at first until I really realized that SemVer is a social contract, it's not a technology contract, realistically. Despite your best intention, a 1.2.1 to 1.2.2 - you can totally accidentally slip an API change in there, or make a horrible, breaking change. So there's nothing in SemVer that prevents you from doing that, but you've basically agreed through this contract to say "I'm not going to intentionally make any API breaking or functionality breaking changes between these minor revs.

**Erik St. Martin:** It's similar to the Go 1 promise - it's social. They've agreed not to change the API.

**Brian Ketelsen:** Well, it's social with teeth, though. There is a script that runs in all .bash that guarantees that there aren't any breaking changes to that Go 1 contract. So nothing's gonna get committed to master or tip without passing that test. I can't remember which of the new languages I saw recently, but there was one of them - I couldn't tell you which, because I like looking at languages - that very specifically had a tool that tested API contracts in your packages before it allowed you to commit, to tell you whether you had breaking changes in APIs, to help you and guide you towards better versioning. And that's something that we can absolutely support with all of the fantastic introspection tools we have in Go.

**Ed Muller:** Yeah, my pie in the sky, perfect tool would use introspection to determine whether something is at least API compatible or not with the version you have, and then when it detects the change can say, "Here's my last known tagged version .matches. What are you using right now? Do you wanna continue upgrading or not? Here, make a choice." No tool does that though yet, but hopefully one day.

**Erik St. Martin:** We've got Scott in the GoTime FM channel here getting all Inception on us. He said, "Your dependency management tool is another dependency." So what do we use to manage that dependency? \[laughter\]

**Brian Ketelsen:** Who guards the custodians? What's the land key custodian? Who watches the watchers?

**Erik St. Martin:** Right. Another question in we had in Slack is "Why did these other languages get vendoring out of the gate right, and how?" I don't know if any of us have answers to that. I think it's similar to kind of Go started out of the gate with concurrency in mind, right? It's just that kind of nature where you approach the problem from a given perspective, right?

**Brian Ketelsen:** \[00:23:48.19\] Well, I think especially the smaller languages and the more recent ones all feel the pain that we as an industry have been kind of growing into over the last couple years and wisely knew out of the gate if they didn't have a solution to this there would be an issue, and maybe some of them have even learned from Go specifically. I think Go didn't have one at the beginning because Google uses a monorepo. They don't need one. And this was a tool for Google.

**Ed Muller:** Yeah, if you can make a Go path... I mean, if you're gonna check in an entire Go workspace, then you just check out your stuff and commit them; you don't need it. What's there is there, and what's used is used, and it's tracked.

**Erik St. Martin:** Alright, I think we're about halfway through the episode. I'm sure we probably we don't wanna talk dependency management the whole thing - we probably could, theoretically, but do we want to?

**Brian Ketelsen:** My blood pressure's going up. This is not good.

**Erik St. Martin:** I do wanna hear about Go Heroku though, if you don't mind chatting with us about that for a few... Both in support for Go and Heroku's own internal usage of Go.

**Ed Muller:** So, support of Go - Go has been unofficially supported for a very long time. Keith Rarick, a former engineer, wrote the Buildpack, wrote Godep initially, at least partially, so that he could run his Go code on Heroku. That Buildpack eventually became what we have now.

Last year I was given an opportunity inside to help make Go a formally supported language. What that means is if you file a support ticket and you have a Go application, myself and others can help you with that application, other than going "That's not a supported language. Have you read the docs? Is it something with the platform?" Support can then help you. But if it's a supported language, we can go a bit deeper and actually take a look at your application and make better recommendations about what's either wrong or right, or things like that. Along with that comes documentation in dev center, paying for my salary, things like that. That's been really cool.

**Erik St. Martin:** Do you have a lot of Go customers?

**Ed Muller:** It's actually the smallest percentage language of overall revenue or even active users, but it is growing faster than most, except for Node.

**Erik St. Martin:** That's interesting.

**Brian Ketelsen:** Do you think that's based on Heroku's position in the market? It seems like Heroku's biggest customer-facing feature is writing websites or delivering websites, as opposed to deeper service-type things. And websites really aren't the biggest strength of Go.

**Ed Muller:** No, they're not. Most of our Go customers are writing API services; that's the code they deploy. They don't write a website, or the Go version of a Rails app, or anything like that. They also are commonly doing it in conjunction with other Heroku apps that are written in Ruby or something else, and they needed to get performance in some portion of the app. A worker, an API backend, things like that. High concurrency, low latency.

**Erik St. Martin:** Okay, so customers are kind of moving more polyglot, where they're kind of augmenting their Rails apps with more Go apps, more than it is customers deploying sole Go apps.

**Ed Muller:** As a general rule yes, but not exclusively.

**Erik St. Martin:** \[00:27:59.20\] That's interesting. Sorry, I cut you off when you were going off onto the internal usage of... I was just kind of curious about the growth of Go customers.

**Ed Muller:** It's been good, it's been steady. My job is partially to help continue that growth, not only just in Heroku, but also just - well, making sure that Heroku's a good place to run Go apps. So if anybody here is listening to this and you would like to use Heroku for deploying a Go app but you don't, for some reason, please let me know. Because I want you to. I think Heroku's a great place to run applications. That's why I work here.

**Brian Ketelsen:** I'm happy to give Heroku a glowing recommendation. We run a big web app plus API at Heroku at my day job, and it is just fantastic support, great service, everything works wonderfully, and it's so nice to be able to use that Heroku CLI tool to get logs immediately, roll back, deploys are a dream. So go use Heroku, there's no reason not to.

**Ed Muller:** That's a great review.

**Brian Ketelsen:** 100% Go. I'm here for you, man.

**Ed Muller:** Cool. Inside of Heroku... Large portions of the platform have actually been somewhat rewritten in Go. For instance, if you git push Heroku Master, the Git server behind that is written in Go, the thing that actually executes your slug-building. So that's what you see when you see language detected Go and then the compilation process - that's been recently rewritten as a Go process.

All logs from dynos are moved to the log router, which is still written in Erlang, but that process that actually handles the batching and delivery, that's Go. Portions of our new private spaces offering, which is basically Heroku in a VPC - not your VPC that you bring to us, but a VPC that we create for you on Amazon; large portions of that are written in Go. We have some API work being done in Go. All system metrics are extracted off of instances using a Go tool. I've been instrumental in some of those, and not so much in others.

If you're a fan of our dashboard metrics, that's Go. The backend for that is all Go, the front end is obviously Node and other frontend technologies.

**Carlisia Pinto:** Do you have more...? Continue please, I don't wanna interrupt.

**Ed Muller:** No, I was trying to think of what else... I feel like I'm missing some important parts, but...

**Erik St. Martin:** That's all? \[laughter\]

**Carlisia Pinto:** What I wanted to ask is are these rewrites, or majority rewrites, or majority new things...?

**Ed Muller:** It's a mix; I'd probably say 60/40 rewrites, because for instance git push Heroku Master, that was a combination I think of some Twisted evented code at some point. If you're not familiar with Twisted, it's a Python thing, plus some other stuff.

The slug builder portion was Ruby; all of API was just Ruby at one point. System metrics, I think we used Collecti at one point. The log processes, that's new; the metrics stuff, that's new. Some of the stuff they're doing in APIs, not necessarily rewrite, but new functionality that they're kind of slotting in unbeknownst to users. So it's a little bit of both.

**Carlisia Pinto:** \[00:32:15.05\] I have a sense that the whole internet is being rewritten in Go.

**Ed Muller:** If it were up to me, +1... \[laughter\] But as I said though, Heroku is a place - we call ourselves Heroki, so if I've said that already, you understand. You'll find somebody at Heroku who likes any language that's probably out there right now.

**Erik St. Martin:** Challenge accepted.

**Ed Muller:** \[unintelligible 00:32:44.19\] as a champion for it. We have contributors to Crystal who work here.

**Brian Ketelsen:** Crystal looks pretty awesome, by the way. We need to have an episode just on all these new languages, because I love them.

**Ed Muller:** Yeah, there's some interesting things about a lot of these. Crystal I've probably looked at more than anything, but that's mainly because I was a Ruby person for a number years. But yeah, some of these other languages are looking pretty good, too.

**Brian Ketelsen:** While we're talking about Go at Heroku, we can't forget Doozer.

**Erik St. Martin:** That's right.

**Ed Muller:** Yeah... So that was actually never used in production at Heroku.

**Brian Ketelsen:** It was used in production elsewhere. \[laughter\]

**Ed Muller:** Yes it was.

**Carlisia Pinto:** What are you talking about?

**Brian Ketelsen:** Doozer. Doozer was a spiritual predecessor to etcd, for example, or Zookeeper. It was a Go implementation of a distributed coordination system.

**Erik St. Martin:** ...and with an implementation of Paxos distributed consensus protocol. That was one of the first distributed consensus systems Brian and I started using in the Go space. This is before etcd and Consul and all that good stuff.

**Ed Muller:** I believe it's before Go One was even out.

**Erik St. Martin:** Yeah, it was pretty early on. And I learned some of my Go idioms and anti-patterns from that codebase, too.

**Ed Muller:** What's one anti-pattern that you learned from that codebase?

**Erik St. Martin:** I believe that was one of the ones that was using channels for state.

**Brian Ketelsen:** Yeah, and Doozer specifically - if I remember - had one great, big, giant select in the main processing loop, and that was definitely a big anti-pattern, too.

**Erik St. Martin:** I could be wrong, but that seems like one of the earlier projects that I played with and started digging around looking for patterns. I could be wrong about that one, but I think that that's the one that I'm thinking of, Brian; it's that big select. It could be a completely different codebase, too. This was years ago now. So is Doozer still around?

**Brian Ketelsen:** Doozer's still around. I'm a maintainer still.

**Erik St. Martin:** Is anybody using it, though?

**Brian Ketelsen:** I don't know about that.

**Ed Muller:** Wasn't Adobe using it at some point for something?

**Erik St. Martin:** There was a couple people that were using it back then. I can't think of who they were now, but yeah...

**Brian Ketelsen:** I think Bit.ly even used it for a while, but I don't know if they still are. Good question.

**Erik St. Martin:** I still can't believe that somebody took it... Who did the Paxos implementation? Because I don't know whether I have the courage to do something like that.

**Brian Ketelsen:** It was Blake and Keith, I think.

**Ed Muller:** Yeah, I think it was Blake Mizerany and Keith Rarick.

**Erik St. Martin:** I don't even have the courage to try and implement Paxos.

**Brian Ketelsen:** It's awesome. I learned so much from that codebase. That was definitely the biggest project I had ever seen at Go at the time, and even though Keith and Blake today still say that there are things that they would do differently, there are things that might not be idiomatic, the vast majority of it was really great Go code, and I learned a ton. I'm very grateful that it existed.

**Erik St. Martin:** \[00:36:04.22\] I mean, let's be fair, too. That was 2011-2012, so a lot of people use channels for a lot of things. I think we're all still figuring it out as a community what the patterns were.

**Brian Ketelsen:** How can you declare idiomatic if it's only been around for a little bit?

**Erik St. Martin:** Right. So we can call things idiomatic or anti-patterns now, but we're referring in the past, when they weren't necessarily then, so... Yeah, that was probably one of the biggest and most complex projects that I had seen back then. It was inspiring, we used it for a lot of stuff.

**Brian Ketelsen:** We did, and had a lot of fun with it, too. So we've covered the survey, we've covered... Oh, there is one question I had for you. I heard a rumor that the Heroku CLI tool isn't all Go anymore, that there's some hybrid, maybe Node in there. Is that correct?

**Ed Muller:** The Heroku CLI is really 98% Node. Let me rephrase that. The target is for it to be about 98% Node. Right now the CLI is an amalgam of Go, Node and legacy Ruby. The Ruby bits are effectively being phased out for what is basically a Go bootstrapper that can easily upgraded, that manages the Node parts. And I apologize to the primary maintainer of that if I've got any of that wrong, but that's my understanding of it.

**Brian Ketelsen:** Interesting.

**Ed Muller:** There is something called HK that we had done, it's probably still on our repo. It's not maintained anymore, but that is a implementation of the CLI. That is purely in Go. While I myself personally would have loved if either HK or a rewrite of the CLI were done in Go (purely GO), I still think it was a good decision probably from the popularity aspect and accessibility aspect to do the Node stuff.

**Brian Ketelsen:** Well, realistically, if it's solving the business problem there's no point in changing it just for the sake of changing it.

**Ed Muller:** Well, so Node runs much better cross-platform than Ruby does, and hence the deprecation of the legacy Ruby in portions of the CLI, and the necessity to rewrite those portions in something, and Node was chosen.

**Brian Ketelsen:** Fair enough.

**Erik St. Martin:** Damian is actually in the GoTime FM channel and he pointed out ActiveState was using Doozer.

**Brian Ketelsen:** We can count on Damian, he's like a walking Wikipedia.

**Erik St. Martin:** He is.

**Brian Ketelsen:** Shout out, Damian. Everytime we have a question, Damian has the answer. And when he's sleeping, there's no answers in the GO world.

**Ed Muller:** Sometimes I feel that way, too. \[laughter\]

**Erik St. Martin:** And Reddit. They get all his news from Damian. \[laughter\]

**Brian Ketelsen:** He's probably the biggest contributor on the Goland Reddit.

**Ed Muller:** It wasn't me that submitted this State of Go survey to Reddit. I'm pretty sure it was Damian.

**Erik St. Martin:** It happens. It's the same thing with all the GopherCon announcements. We whisper it somewhere in the universe, and Damian is like "I got this!"

**Brian Ketelsen:** I got this! That's pretty awesome.

**Erik St. Martin:** Alright, so we wanna talk news and any interesting projects any of us have come across?

**Brian Ketelsen:** I've got a huge one. I just found it yesterday - I think they just released it yesterday, the SourceGraph Editor. Has anybody seen that?

**Erik St. Martin:** That looked cool.

**Brian Ketelsen:** Oh my gosh! Now, I'm not recommending it for full, real-time, all the time use, but let me explain what it is and I'll tell you why it's awesome first. It's a plugin for Atom or Vim, one or the other editors...

**Erik St. Martin:** Sub...

**Ed Muller:** \[00:40:07.24\] Sublime. You're right, thank you. A plugin for Sublime and Vim that allows you to... Well, it opens a browser window and then navigates to the definition of the symbol that you're typing, as you're typing it. So if you start to type fmt.prin, it pops up fmt.printline and gives you the definition of it, plus five or six curated examples of it from open source projects. So it gives you this really awesome real-time second-screen information about the code that you're writing, with examples plus the regular go doc for it. It's real-time, it's just the tiniest bit slow. As you're typing, at least in Vim, it slows down Vim a little bit and it gets a little distracting, because that browser window is constantly flashing with different functions as you're changing positions to look at new symbols. But it's amazing. The technology behind it must be impressive, and I was blown away when I played with it. I haven't turned it off yet, I've been running it for a day, and I can honestly say that's a really useful tool.

**Erik St. Martin:** So two things with that, right? One is Vim probably, because Vim's not so great at async yet, so it's probably having to do stuff synced with your typing, which is hard. But the second part is it's rave programming. Rave programming, Brian. Just embrace it. \[laughter\] Flashing screen...

**Carlisia Pinto:** I wanna say we're gonna have Beyang on the show in three weeks from now.

**Brian Ketelsen:** Oh, that's awesome. We'll have a lot to talk about there, because it's a really impressive tool. So that was the biggest news I saw this week, that tool. If you haven't checked it out, it's at sourcegraph.com/tools/editor. You can see the screencast that they've got embedded in that page. If that doesn't sell you on at least trying it, I'd be surprised.

**Erik St. Martin:** Yeah, and I believe everything there is written in Go. At the very least almost all of it is written in Go, all of their products. They have an open source library too, for doing language detection and analysis on code in a generic way, too. That's really cool.

**Brian Ketelsen:** Their whole team is very prolific in open source, too. It's a company founded in Go roots, that lives and thrives in the community, so a shout out to our friends at Sourcegraph. You guys rock!

**Erik St. Martin:** And they blogged for us. Remember the live blog \[unintelligible 00:42:55.05\]?

**Brian Ketelsen:** Yeah, that's right.

**Carlisia Pinto:** And they host a meetup in San Francisco. I don't know how often it is, but I went to one, it was pretty great. There were people from LinkedIn there speaking, and other people on the panel. It was pretty awesome.

**Erik St. Martin:** I'm seeing the trail in GoTime FM. \[laughter\] You guys are distracting me.

**Carlisia Pinto:** No, that was pretty amazing. I said his name and he popped into the channel.

**Erik St. Martin:** I think Adam invited him in there.

**Brian Ketelsen:** Beetlejuice, Beetlejuice, Beetlejuice!

**Erik St. Martin:** So two things: first, there was this project somebody showed that's in IM GUI, like immediate mode user interface, which is basically like OpenGL with windows inside of it, and it's called EweyGewey. I love the name of it, too. But it's like the alpha of the alpha right now, but I thought it looked cool, especially thinking kind of like the embedded space, having GUI on embedded devices. So I'm gonna keep watching that to see how that comes along.

\[00:44:01.24\] And then that spawned this discussion about cross-platform GUI type approaches in Go, and there was a bunch of stuff. I kind of mentioned \[unintelligible 00:44:10.03\], which is the Chrome embedded framework, and somebody said no to please encourage people to contribute to this project called Gob. With Gob they're attempting to write a full web browser in Go, which is really cool. I don't have the time to contribute, so everybody else contribute so that we can have a full web browser written in Go.

**Brian Ketelsen:** Interesting. What are they using for the user interface components?

**Erik St. Martin:** I'm not sure, I didn't dig into it too much.

**Brian Ketelsen:** Oh, Shiny. They're using the Experimental Shiny repo.

**Erik St. Martin:** That's right, that's right, I did see that. I lied. 3 AM, 2 AM... Whatever time it was.

**Brian Ketelsen:** As the days get closer to GopherCon, the sleep wanes and we become less and less coherent.

**Carlisia Pinto:** Alright, my turn. My project today is Gogs. It's a self-hosted Git service. I think it's very cool because if you want to host your own Git service - of course, that's what it is for - it seems pretty solid. I love that it has tons of documentation; I always love to mention projects that are well-documented. And also the issue list is very well labeled. There is a variety of categories, and it seems they could use a lot of help. But I also thought it was interesting because I think it's a good codebase to dive in and learn from. The concept of a server or a service is very easy... I mean, we were talking about domain knowledge, right? I think it's something that we can come in with the little bits of domain knowledge and understand the bits and pieces.

**Erik St. Martin:** Yeah, Gogs popped up maybe two years ago, something like that...?

**Brian Ketelsen:** A year and a half, two years ago, yeah.

**Erik St. Martin:** Yeah, it had a few features and it was really interesting. And it was like overnight. It started replicating almost all the features from Git. Or GitHub, rather.

**Brian Ketelsen:** Yeah, so we had Gogs in production for our main code repository... What was that, two years ago, Erik? And it had zero complaints. It's a fantastic service, really simple to install and rock solid. No complaints at all, especially if you consider that it's a tiny codebase but they replicate the 80% of features from GitHub that you really need, but it's behind your own firewall. Very nice.

**Carlisia Pinto:** Yeah, and Git service - GitHub or GitLab - is something that we use every day, so it will be interesting to look at how that can be implemented in Go. I found it interesting to dig around.

**Erik St. Martin:** I think we lost Ed. Are you still there?

**Ed Muller:** Yes, I am. Sorry, I turned on Mute for a second, I was trying to find something.

**Erik St. Martin:** No worries at all. We thought you were as tired as we were.

**Brian Ketelsen:** We had somebody in the GoTime FM channel in Slack, and I'm gonna butcher his name, I feel terrible, but it's Florin Patan - he mentioned the go get button Chrome extension. He had actually installed that two weeks ago when he announced it originally, so that's another good one to shout out; we'll have to add that to our show notes. When you're on a GitHub repository, you can just push the little Gopher icon and it copies the go get URL into your buffer and you can just hit Paste in \[unintelligible 00:47:51.14\] and you'll have that go get command ready for you to do a go get. It's a tiny little tool, it's really handy; I use it constantly now since I've installed it. So a big shout.

**Ed Muller:** \[00:48:03.29\] I'd like to shout out, it I may, to Heroku's open source Go project, some of which I've contributed to. If you take a look at our open source Go repositories on GitHub you'll see a bunch of stuff, and a lot of engineers who work there are also contributors to various things, and Go itself.

**Erik St. Martin:** Yeah, Heroku has had a lot of involvement in the Go open source community for a number of years. It's one of the reasons why we're so happy to have you on the show.

**Brian Ketelsen:** Yeah, it is. It's awesome.

**Ed Muller:** I just try to get \[unintelligible 00:48:37.05\] those guys at some point, too. I'm honored to be on the show, but... And they have a big impact early on.

**Carlisia Pinto:** And talking about involvement from Heroku, I wanted to also mention that Heroku is a big supporter of GoBridge, financially and otherwise, and Ed is as well. You have taught a GoBridge workshop in San Francisco, we're very grateful for that, so thank you.

**Ed Muller:** Thanks for organizing GoBridge. I think it's an amazing organization, and I was more than happy to contribute my time.

**Carlisia Pinto:** Thanks.

**Brian Ketelsen:** That's a big GoTime FM hug right there.

**Carlisia Pinto:** Yes, totally.

**Brian Ketelsen:** Maybe we need to add a section at the end of the show. After \#FreeSoftwareFriday we add GoTime FM Hugs, I don't know... Let's toss that around a little bit; put it in the show notes, we'll think about it. \[laughter\]

**Erik St. Martin:** And speaking of \#FreeSoftwareFriday - and I think we're about out of time too, so I think we're tracking good... At the end of every show we try to do a \#FreeSoftwareFriday where we give shout outs to more projects - because we've just been giving out shout outs - to projects we've been using, currently or in the past, that have made our lives easy. So who wants to go first?

**Brian Ketelsen:** I'll start.. I found a tool three or four days ago from Dmitri Shuralyov...

**Erik St. Martin:** Also known as shurcooL...

**Brian Ketelsen:** Yeah, known as shurcooL, with a capital L.

**Erik St. Martin:** That's the hard part, right? You know everybody by their handle. Florin, I know him as dlsniper. Anyway, continue...

**Brian Ketelsen:** Yeah, it's okay. This tool is called git-branches, and it's just a tiny little command line tool that tells you the status of the branches of your Git repo - how far you are behind or ahead of master, and all of the different statuses of the remote branches, too. Really nifty tool, I've used it constantly since I've installed it. It's rare for me that those tiny little command like helpers stay in muscle memory beyond a day, and this one has. It's useful.

**Carlisia Pinto:** Alright, so the project I want to mention today is Pachyderm. It was mentioned on the show that we're going to release later today, with Daniel Whiteneck. He talked about Go and data science. This project is open source; I haven't used it, but I checked it out and again, it's another project that's super well documented. He has also very organized and very well labeled issues, and they also have issues for newbies, so it seems like a great project for people who want to start contributing to open source and to Go. It's very fascinating, and this is something that's fascinating me about Go, what's going on in the industry right now: basically it seems like it's a modern alternative to Hadoop, and just how people are reinventing solutions... So it's an alternative to Hadoop, but it's not an implementation of Hadoop in Go. They're containers, they are using Go, and they're taking advantage of these contemporary technologies to reinvent the solutions in a much better way.

Again, I haven't used it; this is from reading and from just general knowledge, but I think it's very, very interesting.

**Ed Muller:** \[00:52:09.09\] I'm going to totally have to play with this.

**Brian Ketelsen:** Yeah, I did play with it, but long ago, when it was much earlier, and it's a really nifty tool because it allows you to pipe the outputs of your containers. Each of the steps in your data pipeline is just a container that accepts input and sends output, so you get that Hadoop-like flow, but with containers with Docker. It really is nice.

**Erik St. Martin:** It's been quite some time since I think I've played with it too, so it's probably about time for a refresh.

**Ed Muller:** It sounds like they've basically - if that's the way it works, they've basically implemented something I've been noodling around in my head, using standard-in/standard-out type stuff between processes, and then just take care of the mechanism for moving that data around and orchestrating it.

**Erik St. Martin:** So it saved you a whole lot of development time.

**Ed Muller:** Thanks god.

**Erik St. Martin:** \[laughs\] Did you have somebody you wanted to give a shout out to as well?

**Ed Muller:** Yeah, I'm gonna actually give a shout out to - and I can't believe I'm gonna do this... The '90s me is gonna kick my ass, but Visual Studio Code, which is something for Microsoft. I really never thought that a GUI editor would get me out of using Vim, but it has, and I really like its Go support, as well. So a shout out to both Microsoft and Luke Hoban, who writes the Go plugin. He works at Microsoft as well. So that's my primary editor for code now anyway.

**Brian Ketelsen:** Yeah, we've talked about Visual Studio Code a couple times, it is a really strong environment for Go development and the Go plugin is tight, including debugging with Delve on all three major platforms built-in.

**Erik St. Martin:** Yeah, that's one of the things that makes me wanna play with it a lot, the Delve support. Like you said, I think it's a strong contender. I think there's a lot of people using Visual Studio in the Go world.

**Ed Muller:** Well, it also does some stuff that the Sourcegraph editor does, right? As I'm typing fmt.print, it's showing me the signature. And I can even go to the definite - because that's on the standard library, I can actually jump to where that's defined and look at the source code right there.

**Erik St. Martin:** Have you used Vim Go with Vim?

**Ed Muller:** When I used Vim, so probably it was eight months ago that I last used Vim Go, which I understand you can do some of the similar things.

**Erik St. Martin:** Yeah, it's got a lot of that stuff now, where you can jump to the definition and all that jazz.

**Brian Ketelsen:** Visual Studio Code is significantly prettier, though. Tool tips with function definitions when you hover over a function call... I'm not gonna lie, it's sexy.

**Carlisia Pinto:** And there's that Go Doc Tool that I talked about I think in the second episode, or I forgot which episode. That does the same thing. It will jump to the code source...

**Ed Muller:** Are you talking Pythia?

**Carlisia Pinto:** No, it's called Go Doc.

**Erik St. Martin:** Oh yeah, I know what you're talking about now, too. I can't remember... Yeah, you did mention it in a prior episode.

**Carlisia Pinto:** Yeah.

**Erik St. Martin:** Now we're gonna have to go through show notes to find what it is.

**Brian Ketelsen:** The name was something like Go Doc Tool, though. It was not a memorable name, it was kind of a generic name, so I think you're right. Something like Go Doc Tool.

**Carlisia Pinto:** \[00:55:48.02\] Yes. And I wanted to say, we have such deeply rooted perceptions, rights? When Ed put the link to Visual Studio Code on the document, I had to actually go and check if it was open source, because I was gonna say "Ed, this is not open source." I didn't know... So today I learned it's open source, and I couldn't believe it.

**Ed Muller:** Yes, if you write in TypeScript, you can contribute.

**Brian Ketelsen:** Well, there's another show that we could probably do, entirely on Microsoft turning the ship around.

**Erik St. Martin:** Yeah, that's what I was gonna say - Microsoft today is not the same '90s Microsoft.

**Brian Ketelsen:** Because they're crushing it. If you're listening, Microsoft, you're turning the ship around and we appreciate it.

**Erik St. Martin:** So for me, I'm gonna cheat, because we've been talking data science and all that jazz, and I'm kind of currently using it - Apache Kafka, which is a distributed message queue and publish-subscribe system, which I'm sure many of us are already familiar with. It's saved our lives more than once, I'm sure Brian can agree.

**Brian Ketelsen:** Kafka's awesome!

**Erik St. Martin:** Especially when you have to do multiple databases, using it is kind of like your distributed commit log, and then having your other databases populate from there. So much win. And I think that's it. Anybody...? Good?

**Brian Ketelsen:** Good.

**Erik St. Martin:** Alright. I think that we're right about on time to close this thing out. I wanna thank everybody for coming on the show, and I especially wanna thank Ed for coming on the show, and Heroku, for all that they do with the Go world. I know you guys support the GoBridge efforts, I know you guys are sponsoring GopherCon, you've been contributing to the open source space for Go for a very long time, so we wanna thank you for that. We wanna thank all the listeners, both live and who will be listening to this shortly. Next week we are out, both Carlisia and Brian have to travel for some reason. Like, they have lives, or something. \[laughter\]

**Brian Ketelsen:** No, this is a big deal. We're gonna be at the Women Who Go first birthday party in San Francisco.

**Erik St. Martin:** Oh, that's right, that's right. Alright, I can't give you too much slack for that then.

**Carlisia Pinto:** And I wanna mention that it's open to everybody, so if you are in San Francisco sign up on the Meetup page. I'll post the link on the Slack, and maybe Adam can tweet it. It's open to everybody, men and women, and anybody... Non-binary people, everybody. Just show up. Some really cool people are gonna be there, I'm just saying.

**Brian Ketelsen:** I'm excited to go. Women Who Go is a great group, and I'm happy to go help them celebrate their first birthday.

**Ed Muller:** Maybe I can get a cheap flight down.

**Carlisia Pinto:** Please! Go!

**Erik St. Martin:** So we're out next week, but the following week we will be back and we will have Jessie Frazelle on the call. Or show. I keep calling it a call, it's a show. So we'll have her on the show when we get back, and then after that we have I think Beyang Liu?

**Carlisia Pinto:** Yes.

**Erik St. Martin:** So almost in line with us talking about the new Sourcegraph tool today. Yeah, so if you haven't subscribed already, GoTime FM is the easiest way to do that. We are now on both Google Play Store and iTunes, I believe. More episodes will be dropping if you're listening to this live right now. I think episode four drops today, and then five and six over the next couple of days. We're slowly getting caught up. We are on Twitter @GoTimeFM, we are GoTimeFM in Slack if you want to be on for the live stuff, and I think that's it. Yeah, GitHub - github.com/GoTimeFM/ping for suggestions for speakers or comments about the show and all that stuff. Thanks again, Ed, for coming on the show. It's been great having you on the call.

**Ed Muller:** Thanks for having me, it's been great being here.

**Erik St. Martin:** Alright, everybody.

**Ed Muller:** Thanks Ed, great show.

**Carlisia Pinto:** This was fun. Bye, everybody.

**Ed Muller:** Bye-bye, everyone.
