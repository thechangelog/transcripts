**Erik St. Martin:** We are back for another episode of GoTime. Today's episode is number 18. Today's show is sponsored by Linode and Backtrace, so first we want to give them a huge thank you for sponsoring the show. Today on the show -- I'm gonna switch things up a little bit. First we have myself, Erik St. Martin, also we have Carlisia Campos here. Say hello, Carlisia...

**Carlisia Thompson:** Hello!

**Erik St. Martin:** And Brian Ketelsen...

**Brian Ketelsen:** Howdy!

**Erik St. Martin:** And our special guest today is Aaron Schlesinger, which... I guess you work at open Deis right now?

**Aaron Schlesinger:** I do, yeah.

**Erik St. Martin:** And working on Kubernetes-based stuff. You also have a project that we've seen, which is Go In 5 Minutes. Do you wanna give everybody a little bit of background about yourself?

**Aaron Schlesinger:** Yeah, sure. I've been writing Go for just about three and a half years now, at a variety of different places and on my own. It kind of just started as a hobby project. I was coming from Scala, which was kind of a mess at the time, and I was looking for simpler tools to start out. So I came to Go, kind of fell in love with the community... The first kind of big discovery was how easy concurrency was, and that's what really kind of poked me.

Then I moved to a couple different companies, all writing Go. I finally landed at Deis. I am kind of through that whole process, just participating in the community in different ways... When I first started Go In 5 Minutes, I saw there was a little bit of lack of intermediate and advanced content for Go, so I wanted to combine some intermediate/advanced material with a super simple format, so I focused on these short, 5-minute screencasts to start out. Then it just grew from there.

I started writing a blog alongside of the screencasts, did some longer screencasts... I think the longest one I did was like an hour. So I've just kind of been capturing all my thoughts, all my experiences, all my input that I'd gotten from people and the community... Just kind of trying to give back to the community in any way I can, through this medium of Go In 5 Minutes.

**Brian Ketelsen:** That's awesome.

**Erik St. Martin:** Now, talk to us a little bit about what the content is there. Is there a set structure where you're building on top of previous episodes, or is this more based on user feedback, questions you see around the web, and answering it in the form of video?

**Aaron Schlesinger:** Yeah, it's kind of both. I have my repo on GitHub, basically it's just all the issues or requests for screencasts. There's a couple in there to remind me to fix the site, or something, but almost all of it, the vast majority is people asking about, "Can I get a screencast on how to use the SQL package?" or how to do some specific thing with net/http and what have you. So about half of the screencasts are in response to those, and the other half are just things that I've seen that might be underutilized or new, or something like that, and I just try and distill it down into that 5-minute format.

\[03:49\] I try to make sure that each screencast has no prior dependencies. Some of the screencasts will be like, "If you have seen this screencast, it will help you, but you don't need it." But most of them are just like, you start at minute one and it takes you all the way through to the end. My goal is by the end you at least know the basic building blocks for how to get something done. Then, if you want to go into more detail, I put on the site the equivalent of the show notes - links to good blog posts and good documentation and so forth, for people who wanna dive a little deeper.

**Erik St. Martin:** I think this is really interesting. It's kind of along the same lines of the posts that Ben Johnson has been doing, kind of giving people little stuff to chew on for net/http or things like that, introducing people more to the standard library. I'm seeing that more and more as kind of like a pattern where you're exposing people to these things they might not be familiar with.

I think that's building on kind of where we're at with the language too, because a lot of people are starting to get the syntax down, but now it's kind of idioms and learning their way around the standard library.

**Aaron Schlesinger:** Yeah. The standard library is so vast, and I feel like we're just scratching the surface, even now. And now it's growing, too. We just got context in Go 1.7, and that's crazy useful.

**Erik St. Martin:** I'm so happy about context!

**Aaron Schlesinger:** Yeah, me too.

**Erik St. Martin:** What I tend to do is I tend to be familiar with at least a base package, like "I'm gonna be doing something with bytes." Then, whenever I'm trying to do something new with it, I try to explore around and see what else is there, and be like "What is this?" Or like the io.TeeReader; you start tinkering with it and coming up with use cases.

**Aaron Schlesinger:** Yeah, I think that's the hard part - imagining the use case before you've actually used it. And I feel like even still, there's kind of this chicken and egg, where if the community can't really nail down use cases, then the thing is not gonna be used, so use cases won't get developed out of the thing. So it's kind of like someone or some group has to come in and say, "Hey, this is a way to use TeeReader. Go try it in your code some time and see how it works, and develop it out from there."

**Erik St. Martin:** Yeah, I think I agree. I think learning is like that. You almost have to struggle first, so that when you're exposed to it, you have something to relate it to, where you're like "Oh wow, that would have been really useful when I had done such-and-such." But when you're first just coming across it, you're like "Yeah, I don't need that, I don't need that" and then you long forget about it.

**Aaron Schlesinger:** Yeah, for sure. I can't even count how many times I've written io.copy myself, and it's like an embarrassment now; it's like, "Come on, you should have remembered that." It's like THE function in the io package that you should always know. I just forget and I forget, and then all of a sudden, finally, maybe a month ago, it just clicked. I'm like, "Oh yeah, io.copy, it's there. I should use it in this situation." It's kind of funny how that happens.

**Erik St. Martin:** You need to setup an io.copy jar on your desk, rather than a swear jar.

**Aaron Schlesinger:** \[laughs\] Yeah, I should.

**Erik St. Martin:** So talk to us about what some of the most popular ones are. Do you have ones that get exponentially more viewings and followings that others, or is it pretty scattered?

**Aaron Schlesinger:** \[07:41\] I think the number one by far is how to write a full stack web application, all the way from database access, down to serving up templates and writing JavaScript. That one was how to do it with just the standard library. I think that one had like 5,000 views after the first week. The rest of them, maybe they get to 1,000 views in the first couple weeks. I don't know what the second or third would be, but that one's the top.

**Brian Ketelsen:** Hang on a second... You did that in five minutes?

**Aaron Schlesinger:** Yeah... That one was a huge hand-waving one. There is tons of code that I wrote beforehand, and I glossed over tons and tons of it in the five minutes. The code's all out there in the Go In 5 Minutes repo, so I heavily commented all of it, and wrote a bigger outline in the readme, like "Where should you look to do templates, where should you look to do databases." I kind of did all that in the hopes that my hand waving would basically introduce people to the big building blocks and how they fit together. Then, once the five minutes is up, they can go and drill down as they see fit.

**Erik St. Martin:** So this is more like kind of just starting the journey, getting enough seed planted and showing people where they can go from there.

**Aaron Schlesinger:** Yeah, for sure.

**Erik St. Martin:** How often are you releasing these?

**Aaron Schlesinger:** That's a great question. I started off every week, and then pretty quickly burned out, to be honest. I've been doing every two to three weeks now.

**Carlisia Thompson:** Aaron, I saw that you have an episode on the singleton design pattern, and on your repo you have an issue open for future "explain design patterns" episodes. And by the way, I wanted to mention to people that you have a repo where people can go and make requests if they want to learn about something in specific, or just upvote the issues that are there. Having a repo for that ourselves, that's very useful. There are so many interesting topics listed there, it's pretty cool.

In any case, going back to the design patterns question that I have - how do you go about putting together a video tutorial for design patterns? Is it based on a lot of work that you have done with design patterns in Go? Or do you try to abstract how design patterns are implemented in other languages, and then sort of like how that would be done in Go? How do you go about it?

**Aaron Schlesinger:** Yeah, that's a good question. Actually, I kind of do a mix. There are obviously some I've used in my own work, whether it's open source or at Deis; most of that is open source anyway. But I also look around, I ask around various... There's tons of Slack channels now in the Gopher Slack; so I either ask around or I just look at other people's open source. Then I also take some things from time to time from Scala, since that was the last language I worked in before Go. That angle I think is pretty useful to an extent, because Scala is so different... It's kind of this Frankenstein between a functional and an object-oriented program built on top of the JVM. There's tons of stuff in there, things like the builder pattern... Functional programming is obviously a big thing there. I think there's a ton of stuff that we can bring over to Go and idiomize for Go - make it simpler, make it fast...

I try to take from all three, but I wouldn't say I have a specific strategy or algorithm for figuring out where to take design patterns from and how to present them.

**Erik St. Martin:** \[11:58\] We had Dave Cheney on the show two episodes ago (episode 16) and we were talking a little bit about design patterns and how they came about. How do you see the design patterns as we know them in The Gang Of Four book applying to Go? What's your opinion on how they kind of fall in? Should we be trying to leverage all of these things inside of Go, or do you think that there's certain mechanics about the language that we should try to stick more to Go ways of doing things and not necessarily adopt all of these patterns?

**Aaron Schlesinger:** I'd say technically of course it's possible, I think probably possible to do every single one of the Gang Of Four design patterns. But I think that Go simplicity is actually very powerful. I think Dave did a talk - it was either Dave or Rob Pike... One of those two, or maybe even both - they did a talk on basically saying, "Simplicity is hard and simplicity is powerful." That's my mantra. I watched and read the slides for that talk, and that's kind of what I try to live by with Go.

If you take a builder pattern, design pattern, something like that, and you bring it into Go, my goal is to try and explain why we should use it, instead of why we shouldn't use it. I would say from a cultural or community standpoint, I would rather not take a design pattern and write a little bit more code, rather than bring in a huge design pattern into your codebase, make it a little bit less code but harder to understand.

**Carlisia Thompson:** Yeah, I can see that and I hugely agree with that. I did Java for quite a while and I knew Java fairly well back then when I was doing it. In the Java world - or at least in my Java world - design pattern was the go-to thing. It was pretty much like, there is a pattern, find out what it is and stick to that, because that's going to make your life easier, or it was going to make your code "better." I don't say better without quotes anymore, after Dave Cheney. But in any case, I think that is the trick with software design - trying to abstract things too early, you might end up pinning yourself against the wall. Like you're saying, Aaron, writing more code, and only really abstracting things into an interface or into a design pattern after you know what it is that you need is what I think we should be thinking about, as opposed to "Oh, we have design patterns, let's implement that!"

**Erik St. Martin:** Well, that was kind of Dave's talk too, about the SOLID design, talking about single responsibility, open and closed, and the key points that will make software more maintainable, and then looking at design patterns as how they apply to that, whether they make things more complicated, and just recognizing this stuff. That's the whole thing, right? Design patterns are neither good, nor bad. Well, they're mostly good, but it's not religion. We don't have to look at some problem and then shop for the design pattern to solve that. It's okay to have things that are custom too, if it simplifies your design without creating a lot of coupling or things like that.

**Aaron Schlesinger:** \[15:53\] Yeah. I think since I started writing Go, I kind of started to look at design patterns like just a recipe. If you're a cook, you wanna make an apple pie, you're gonna probably go to a couple different recipes to get the feel for how to make this pie; what's the general stuff that goes into it, how generally do you cook it, and then you're gonna probably make it your own after maybe a couple pies, after you cook for maybe a month or so. That's what I think the Go community is doing and should be doing. We're not just taking -- I keep going back to builders, so I'll continue there... We're not just taking builder from Java or C++. I've seen a couple different implementations of it, some of which are way simpler than the Gang of Four book, or what we see in Java.

I think that there's not just one builder pattern now in Go. I think that there's kind of, your mileage may vary, and some of the patterns work better for situations than others, and I think that's a great thing. That's evolution.

**Erik St. Martin:** Yeah, and I think we can look through the standard library and we could find examples of maybe like the visitor pattern... I think the hash sorting is done in a visitor pattern if I recall. We can find examples of that, but I don't think we necessarily have to bring everything over. I think as they apply we leverage them, and we benefit from features of the language that allow us to do things in a simpler way than some of these patterns were implemented. Because all of these things, especially a lot of the patterns are based off Java, which has its own set of features, things that Go does not have, and then also things that Go has that Java does not.

So I think we look at our own problems differently, and I'm interested to see how we evolve with our own patterns, and we start to see some of these little idioms that people use, little tricks that are continuing to become commonplace in some of the more common libraries. I think if you look at most large projects in Go right now, it varies so much. We haven't converged on patterns in Go, that are specific to some of these larger use cases. Because you look through the Docker codebase or the Kubernetes codebase - things are very different between the two of them.

**Aaron Schlesinger:** Yeah.

**Carlisia Thompson:** I think one downfall of design patterns, especially if you're doing something you don't have a ton of experience with and you set yourself to use a design pattern, is that let's say you're going to use a specific one and you might wanna do something that's a little bit out of that pattern, but then you wouldn't totally conform to the pattern and you make the choice to use the pattern, as opposed to doing the right thing for your code. That's a problem. If you don't have a lot of confidence, you don't have the experience with what you're working with, you might end up making that kind of choice. I think it's problematic when people do that. But if you keep it flexible, I think there's a lot to gain to at least know what design patterns you can use, because it can be very helpful in organizing your code, and also increasing the clarity of what you're doing, and then it's easy to communicate what it is that you're doing to other people.

**Aaron Schlesinger:** Yeah, absolutely. If people can go back to that cookbook and say, "Oh, this looks pretty similar to visitor pattern..." The other thing I was gonna say, on your point, Carlisia, the Go programming language now is starting to give birth to concurrency design patterns that C++ and Java can't really do, because they don't have a first-class channel or a first-class lightweight thread primitive.

\[20:01\] So it's even more important I think for people to be able to pick up things like the barrier pattern using WaitGroups and using Goroutines and then adapt to their needs. Because there's so many ways you can use that pattern, for example.

**Erik St. Martin:** Yeah, and I think we see stuff, you know, fan-in, fan-out, and things like that, that become so much simpler because we have the concept of the channels. It becomes so much easier to do things like that.

**Carlisia Thompson:** There is a talk by Rob Pike, it's called Go Concurrency Patterns. I've watched the whole thing before, and I was just gushing over it because it's beautiful. The patterns are beautiful.

**Aaron Schlesinger:** It really is.

**Carlisia Thompson:** Right? I'm sure you've seen it.

**Aaron Schlesinger:** I love that talk.

**Carlisia Thompson:** So yes, definitely, there are patterns for concurrency, and because at that point I had done concurrent code in Go, and I was just going "Oh my gosh, my code does not look like that at all", but I totally get it. I didn't memorize it, but my head was going "Oh, yeah!" So there are different ways that you can organize code according to what it is that you are doing. So it pays off, I think, for you to know what you can do.

**Aaron Schlesinger:** Yeah.

**Erik St. Martin:** There was a talk at GopherCon 2014 too by John Graham-Cumming too, called A Channel Compendium, that had a lot of stuff like that, with some of the patterns with timeouts and things like that, with channels, which is also a really interesting talk to watch. And I wanna say Derek Collison's from that year had a bunch of stuff too that was related to patterns with concurrency and performance related to them.

So I know we volleyed back and forth a little bit on benefits and drawbacks, and not to be religious about design patterns... Many of us come from backgrounds where we had to heavily use design patterns, especially Java world, but let's kind of bring it in for maybe people who are more new to programming and Go is one of their first languages and they don't really have a lot of knowledge in the design pattern world to kind of apply. Would you recommend that people still study a book like The Gang Of Four book, and learn design patterns for Go? Do you think that it benefits them in Go, or do you think that they should focus more on just trying to learn idioms for Go itself?

**Aaron Schlesinger:** I would go with the latter. I know that might be heresy, but I would absolutely say learn Go, learn idioms, and once you start getting more complex, you have a 5,000-line codebase or 10,000-line codebase, that might be a good time to start looking at design patterns and finding ways to reduce your lines of code using those design patterns. But if you're starting out, I think keeping your code as simple as possible, as understandable as possible using those idioms - that's far more important in my opinion.

**Carlisia Thompson:** Can I just +1 that? \[laughter\]

**Aaron Schlesinger:** Maybe it wasn't heresy...

**Carlisia Thompson:** Yeah, I agree with that, and I'm very much a newcomer to Go. So by just using the straightforward stuff and learning the idioms, you might not have that organization at the end, but you're going to end up with a much bigger tool belt that you can use. Because design patterns, they don't really change, so once you know them and learn them, they're going to be what they're going to be. But you knowing the Go idioms - if you don't take the time to implement them and know what they are, you're going to be doing yourself a disservice, I think.

**Brian Ketelsen:** Alright, it's time for us to take a quick break to talk about our sponsor, Linode.

**Break:** \[\\00:24:22.17\]

**Erik St. Martin:** Excellent! So you mentioned that you worked at Deis. I'd love to talk to you a bit about the work that you guys are doing there; there's some really interesting contributions you guys are making to Kubernetes, Helm and things like that. So I'd love to hear about work that you're doing there, and maybe how Go is advantageous to you guys there. Aside from the fact that Kubernetes is written in Go, so if you wanna contribute, you're kind of forced to... \[laughter\]

**Aaron Schlesinger:** When I first got to Deis, I worked on the PaaS. It's now called Deis Workflow, but at that point it was just Deis. It was basically trying to be a Heroku for Kubernetes - open source, you can go and install it on Kubernetes. Then right before I got there, Helm had kind of become a thing, but it looked super different from what it looks like now. It was just kind of like, "How do we get people to easily install the PaaS?" Because at that time there were seven or eight different components, and you could use most of those components on their own too, if you wanted to.

So it was kind of like this plug-and-play thing where if you wanna use your own logging you can, but we'll also ship you components that can do most of the logging stuff that you'll need. Then there is the router, the routing mesh - you could use that on your own, and it would fit into the PaaS.

Helm popped up because we wanted to give that flexibility to people without writing a thousand page document with specifications for each module, and having sample manifest and all that stuff. So Go came into play big time with the PaaS, because we had to do things like watch the Kubernetes event stream, see when a pod comes up and see the exit status of the pod.

When you're watching an even stream that screams concurrency, once it screams concurrency, then I just pick up Go. It's just the easiest thing for me, by far. Before we picked up Go there was some Python... Actually, there was some Go before I came to Deis, and then there was some shell script. The shell script component was what I first worked on. That was the thing that we had to watch the event stream in. We started with a four-loop in a shell script.

**Erik St. Martin:** I was just gonna say, what is this? Just a four-loop curling out, long-polling?

**Aaron Schlesinger:** \[27:50\] Yeah, it would sleep for two seconds and then poll the Kubernetes API. I made the decision to make the plunge after we started getting bug reports where people were saying, "Oh, it missed the pod!" Because the pod would start up and then die within that two seconds. So that's when we took the plunge, we rewrote all that in Go, and just kind of never looked back. That was the benchmark that made us decide we're gonna move forward and start writing everything in Go.

We still have some old stuff in Python and it's working great. Our API server is actually all Python, and Python is super well suited for that. But the other components - our logging system is all in Go, that deals with consuming and fanning out tons of log data. We have a log storage system, same thing; built on Redis, but the whole multiplexer for all the data just fans into Redis, collates all the data. We've got this plugin system that can push the data all out to... I think we've got like 7 or 8 community-generated plugins, and stuff.

The Go choice there has been super helpful, because just by virtue of its simplicity and its concurrency support. Looking back, I kind of think "Why didn't we move sooner to Go?" because it saved us so much strife.

**Erik St. Martin:** Out of curiosity... All your watchers and stuff like that for the event stream - are you using the Kubernetes client library, or did you just write an HTTP wrapper in Go?

**Aaron Schlesinger:** We are almost exclusively using the client library. I actually just saw today that they split up the client library and they're starting to pull out pieces to a new repo.

**Erik St. Martin:** Yeah, there's the client Go, and I'm actually in the middle of refactoring out some of my own logic to call that...

**Aaron Schlesinger:** Oh man, I'm so excited for that, because right now our dependencies are like a gig of all the Kubernetes code and all the dependencies that we don't need. Once we have that, it's gonna be a couple kilobytes of code; I'm gonna be so happy when we get that...

**Erik St. Martin:** Yeah, I was really happy to get rid of the whole vendored Kubernetes repo.

**Aaron Schlesinger:** Yeah, that's a bit of a mess.

**Erik St. Martin:** So that's awesome. Are you contributing to Kubernetes, or is this mostly kind of tooling built around Kubernetes?

**Aaron Schlesinger:** Most of it is tooling built around... When we find warts in Kubernetes that affect what we're doing, or we find warts that are kind of related to issues that we've seen with Deis, then we usually contribute upstream. But now, Helm is part of the Kubernetes repo. So Helm, technically, since we're contributing to Helm, we're contributing to the Kubernetes project as a whole. We're involved with a bunch of the SIGs too, so we're gonna be starting to contribute more and more to the Kubernetes core, and also some of the projects that spin off of the SIGs as well.

**Erik St. Martin:** Yeah, there's more and more Special Interest Groups now that I've been seeing come out. It's too hard to keep up with all of them.

**Aaron Schlesinger:** Yeah. What I would love to see eventually is some kind of centralized schedule for SIGs, so that we can all do that. We'll just figure out "What is today's SIG? What are they talking about? What's on their agenda?"

**Brian Ketelsen:** I had to unsubscribe from all those SIG lists. It was driving me crazy.

**Aaron Schlesinger:** \[laughs\] Yeah, I feel your pain.

**Erik St. Martin:** Well, and there's so many good groups, large organizations submitting proposals and stuff for expansions to Kubernetes. It's really hard to keep up with all the proposals that are going on. You kind of have to pick your world and hang out there.

**Aaron Schlesinger:** Yeah.

**Brian Ketelsen:** Did we mention that SIG is a Special Interest Group in Kubernetes? We're way out of this typical Go world now, sorry. Too many Kubernetes users here.

**Erik St. Martin:** It's all written in Go, it applies.

**Brian Ketelsen:** It applies, we're just getting deep.

**Aaron Schlesinger:** \[31:57\] Yeah, and you know, to take it back to Go for a second, the Kubernetes codebase is extremely interesting from a, maybe we can say an etymology standpoint; the original codebase was kind of written like Java, and then it open sourced, and then people outside of Google started contributing, and now it's like this crazy mix of Java-like code, idiomatic code, code from other organizations...

**Erik St. Martin:** ...generated code...

**Aaron Schlesinger:** Yeah, generated code, there's some protobufs-generated stuff in there, there is a swagger spec which I think generated some code at one point, and then they didn't generate it again, and started just building on top of the generated code. Looking at this massive codebase, you can jump to definition essentially and see the whole world of Go code styles in one repo. It's really amazing.

**Brian Ketelsen:** Absolutely.

**Erik St. Martin:** Yeah, I'd have to agree. From file to file, things kind of... There's not a whole lot of consistency. In certain areas there's consistency; you can tell certain groups of people work in different areas, but if you're bouncing around the repository, you can definitely see the style changes. I think that will all converge over time, right? And I always mix up these two books - either Bob Martin's Clean Code book, or The Pragmatic Programmer, but they kind of lead to the boy scout rule, which is always leave the campsite a little cleaner than you found it.

As long as people are continuously refactoring a little bit to make more idiomatic Go out of these areas they touch, it's slowly going to evolve into that. But yeah, you can definitely see Java patterns in there.

**Aaron Schlesinger:** Yeah, absolutely.

**Erik St. Martin:** So, does everybody wanna talk about any news and projects that have been going on?

**Brian Ketelsen:** It's a pretty big week for interesting things coming out. The Go newsletter came out today, and they had like an ngrok clone for SSH. That was generally interesting on its own; I can't remember what it was called. But the thing that powers it was much more interesting to me, which is Teleport. github.com/gravitational/teleport is a modern SSH server for clusters and teams written in Go. I had to go touch that and play with it and look at it, and it's really actually kind of awesome. You can install a highly available cluster of SSH bastion servers that will authenticate clients and then proxy them off to the servers in your system. So you can have many clusters of servers, and all of your users just go to your Teleport services and you can SSH to anything on the other side of the cluster. It's really complicated, but cool and easy to use SSH management proxy thing. I'm gonna have to play with it some more, because it looks awesome.

**Erik St. Martin:** That's interesting, I actually didn't see that. I haven't seen the newsletter today. So one thing I saw - it was either today or yesterday - Brad Fitzpatrick mentioned that they are officially getting rid of the legacy backend for the Go compiler, which means from this point on it will be all SSA, which is cool.

**Aaron Schlesinger:** Cool! I didn't see that.

**Brian Ketelsen:** Yeah, SSA or GTFO. \[laughter\]

**Erik St. Martin:** I'm just really interested to see that, because it's going to make things much easier to continue to write rules to make more performant machine code out of it.

**Brian Ketelsen:** But look at the gigantic gains that we got just in 1.7; I can't wait 'till people have some time to actually work on some enhancements to that. I think 1.8, 1.9, 1.10 are gonna be amazingly fast and stable and awesome.

**Erik St. Martin:** \[36:06\] Yeah, especially when more people start getting in and writing the SSA rules. That's far beyond my ability to start looking at assembly language and coming up with these rules.

**Brian Ketelsen:** Well, speaking of 1.9, Vim Go 1.9 was released. We've got a lot of Vim Go lovers. That was a big release.

**Erik St. Martin:** We should ask this every episode to our guest - what is your editor of choice, Aaron?

**Aaron Schlesinger:** Oh, man...

**Brian Ketelsen:** This is like religion. You can't do that, Erik... \[laughter\]

**Aaron Schlesinger:** Yeah... I use Atom almost exclusively actually, with whatever that master Go plugin is that installs all the other go plugins. It's like MetaGo or something.

**Erik St. Martin:** Gometalinter?

**Aaron Schlesinger:** I think that's the one.

**Brian Ketelsen:** Atom has a Go package written by Joe somebody...

**Carlisia Thompson:** It's called Go-plus.

**Brian Ketelsen:** Yeah, Go-plus, there you go. That installs all the other Go things.

**Erik St. Martin:** I gotcha. I thought you were talking about all the static analysis tools and stuff. There's the big gometalinter that runs a series of them.

**Aaron Schlesinger:** I think Go-plus installs metalinter. It may not install it directly, it may just install all the stuff that metalinter does; I can't quite remember. But yeah, I use Atom with Go-plus, and then I have to turn off goimports, which is a bummer, because it crashes my computer almost every day.

**Brian Ketelsen:** Your GOPATH is too big.

**Aaron Schlesinger:** Yeah, looking through all the Kubernetes' depths - not good. \[laughter\]

**Erik St. Martin:** I kid you not that I actually have a script run and kill the Go code binary every couple of minutes while I'm working on Docker or Kubernetes libraries. Because it just gets so bloated... I mean, Vim of all things becomes useless. It's like, press down, wait 30 seconds... So I have to constantly have the Go code binary die while I'm working on Kubernetes.

**Aaron Schlesinger:** We have a similar problem. I just got Docker for Mac; I think it's out of beta, I can't quite remember. Whatever it is, it's the new Docker for Mac that runs on the ex-hive thing, that new ex-hive VM wrapper. I do all my Go development pretty much inside of a container, so I try to run govet. And yesterday I forgot to restrict it just to my code, so I tried to run govet on my whole vendor directory as well, and I actually had to restart my computer, because the ex-hive plugin ate up like 260% CPU, and then... I don't know exactly what happened, but even my mouse, my dock, everything on my Mac was unresponsive, so I had to hard-kill my computer and restart it, because of Kubernetes' dependencies again.

**Erik St. Martin:** See, I love the irony in this, though. Because you can sit back and be like, "Look at all this crazy stuff I build, and I still feel unqualified to operate a computer." \[laughter\]

**Aaron Schlesinger:** Exactly! It's funny...

**Brian Ketelsen:** For me, it just comes back to the whole, "Why do I keep using a Mac?" But this isn't that show, so I'm walking away.

**Aaron Schlesinger:** Fair enough, I'll walk away, too.

**Carlisia Thompson:** I'll go next with the news... Can I?

**Erik St. Martin:** Yeah.

**Carlisia Thompson:** So it was just made public that Steve Francia is joining the Go Language Team at Google. So happy about that! He wrote a blog post talking about what his role will be. It seems pretty awesome.

\[39:53\] The other thing I wanted to mention is there is a repo with patterns in Go, and it looks pretty cool. It has an accompanying website with tables for each type of patterns, and a bunch of patterns inside each table, with the status. The status means if there is a code implementation for that or not, and it seems whoever is in charge of this is putting code forward, that corresponds to each of the patterns.

**Erik St. Martin:** Wow, this is Gang Of Four for Go. Do you see this link, Aaron?

**Aaron Schlesinger:** Yeah, this is pretty awesome.

**Brian Ketelsen:** That's not the word I would've used. \[laughter\]

**Carlisia Thompson:** I might have gotten this link from Aaron's repo. I'm not sure where I got it from.

**Aaron Schlesinger:** Yeah, I don't know if I put an issue in...

**Carlisia Thompson:** There is one, yeah.

**Aaron Schlesinger:** Maybe there is. I saw this a couple of weeks ago, read through it at 3 AM... I actually think this is awesome, because it starts the discussion that essentially we had. They might not all be good patterns, but at least it starts. Everybody is talking about, "Do we need this for Go? Do we not? What should we change?" and so on.

**Erik St. Martin:** Well, I think that there are some things in here that I can definitely see are ridiculously useful, like in building distributed systems, like circuit-breaker pattern. That's something you definitely want, otherwise you're gonna end up overloading systems. You definitely need to prevent doing thundering herd problem and things like that.

**Aaron Schlesinger:** Yeah.

**Brian Ketelsen:** Let's take just a minute and thank our second sponsor, which is Backtrace.

**Break:** \[41:42\]

**Erik St. Martin:** I'm still caught up on these design patterns for Go, like holy cow! \[laughter\]

**Brian Ketelsen:** Walk away!

**Erik St. Martin:** Somebody put some serious time in this.

**Brian Ketelsen:** What I would love to see behind each of these is a conversation about whether these things belong in Go or not. Don't get me wrong, I love design patterns, and I love the concept of thinking about code architecturally, but I just think that there are some things that have absolutely no business in Go, or should be done in such a way -- maybe that's what the link to some of these should be. "There is really no pattern for this in Go, just use a stringer", and that should be it.

**Carlisia Thompson:** I'm glad you mentioned that, Brian, because as we were talking before, I was thinking, wouldn't it be great if somebody could compile these idioms that at least you have been talking about, that Go has, that could be used in place of design patterns? If we could have a compilation of things and talk, like you were saying; this would be a good chance to do that. Here's the design pattern, here's how you would do it by using idioms in Go, without actually having to do a full-blown implementation of the design pattern.

**Erik St. Martin:** \[43:54\] Yeah, more like, you know, you may be used to solving this with this pattern and this language, but this would be the way you would solve the same problem in Go.

**Carlisia Thompson:** Exactly.

**Erik St. Martin:** Hey, we have new episodes of Go In 5 Minutes for you, Aaron.

**Aaron Schlesinger:** Alright. It's kind of like this whole page is... Each category might be an episode, or something. \[laughter\]

**Carlisia Thompson:** Yeah... \[laughs\]

**Erik St. Martin:** Another topic that I wanted to talk about - did anybody see that post with Facebook implementing the DHTTP load balancer in Go?

**Brian Ketelsen:** I did. I read the whole darn thing.

**Erik St. Martin:** That's ridiculously cool. I know that Parse was using Go, and they got acquired by Facebook, but now here's stuff where Facebook's actually adopting Go, and at the rack level, which is awesome.

**Aaron Schlesinger:** Yeah, it's really cool.

**Brian Ketelsen:** It's very complicated. I think of DHTTP and I think, "Yeah, I've got a DHTTP server somewhere", and I've managed networks that had even two DHTTP servers, but not so many that you need gigantic failover redundant systems and craziness... That's just a scale thing that very few of us get to play with.

**Erik St. Martin:** That's always the stuff that interests me, the ridiculous scale that you don't typically have to think about.

**Aaron Schlesinger:** It looks like they use this to bootstrap containers. They have their own internal container system, that this link say is called Tupperware. And it looks like when their containers come up, they use this thing to bootstrap their services, which is kind of crazy to me.

**Erik St. Martin:** And allocate IP addresses, and all that stuff.

**Aaron Schlesinger:** Yeah.

**Erik St. Martin:** I definitely want to dig into it more. I read part of it, and then I got caught up and I didn't finish reading the article, I'll be honest, but it looked really cool.

Alright, so I think we are about out of time... Oh, the other thing - anybody who was not at Golang UK - the videos are out, which is awesome. I've got more videos to watch, even though I haven't yet made the time to watch all the videos from GopherCon... And we're, how many months later? \[laughter\]

**Brian Ketelsen:** It is what it is...

**Erik St. Martin:** Yeah, we're still waiting for more to be released, too... But yeah, we need more time.

**Carlisia Thompson:** Talking about the videos from GopherCon, there is one particular video that everybody is in awe with. It was a talk by Liz Rice. She basically did a container in Go live, in her presentation.

**Brian Ketelsen:** Yeah, that was a really great talk.

**Aaron Schlesinger:** I loved that. That was so cool. If I'm not mistaken, I think Jessie Frazelle started a repo that implemented this proof of concept where Go could build a containerized version of its own binary.

**Brian Ketelsen:** Wow...

**Aaron Schlesinger:** Yeah. It's containers all the way down, man...

**Brian Ketelsen:** Inception!

**Aaron Schlesinger:** Yeah.

**Erik St. Martin:** I still like that -- what's the name of that project, the Unikernel one, where you basically could turn your Go app into a Unikernel?

**Aaron Schlesinger:** Oh, that's cool...

**Erik St. Martin:** I can't remember what that was. It's alright... Adam says we have 12 minutes left of the show, so I can sit here for 12 minutes and think about it. \[laughter\]

**Brian Ketelsen:** Yeah, I don't remember what it is... And I should!

**Erik St. Martin:** I wish I had the opportunity to watch some of the Golang UK videos so that I could make some recommendations, but I just noticed that they were out earlier today or last night.

**Brian Ketelsen:** I watched Liz's because Dave Cheney sent out a tweet that says, "Everybody drop what you're doing and watch this." And when Dave talks, people listen. \[laughter\] So I did.

**Erik St. Martin:** Unfortunately, I didn't see the tweet... Otherwise I would have listened, too.

**Brian Ketelsen:** You see, you should have stopped what you were doing, because Dave said so!

**Erik St. Martin:** Somebody needs to go out and tell the rest of the troops.

**Brian Ketelsen:** \[47:58\] I retweeted it, isn't that enough?

**Carlisia Thompson:** Yeah, Erik, everybody retweeted it. \[laughter\]

**Erik St. Martin:** Apparently, I've been absent from Twitter...

**Carlisia Thompson:** I don't know where you were.

**Brian Ketelsen:** It was one of my most proud Twitter moments too, because I tweeted at Liz and I said, "We're watching for you at GopherCon next year, Liz", and I misspelled GopherCon... And boy, did I catch hell for that!

**Erik St. Martin:** Oh, I remember seeing that!

**Brian Ketelsen:** Of all the people in the world who should be misspelling GopherCon... \[sighs\] That gets the heavy sigh.

**Erik St. Martin:** So being we're gonna run an hour for this episode, we've got a few more minutes. Another cool project that I saw was vuls, which is a vulnerability scanner written in Go. This is actually kind of cool; it seems like the infosec world is adopting Go for more and more things... There is this one, Mozilla wrote one called MIG, for doing forensic investigations across a large cluster, and Yahoo! I remember wrote one - I can't remember the name one... That was a web-based vulnerability scanner that was written in Go, and highly concurrent. I think that they just didn't release the rules that they were using for scanning, but the actual project itself was released, and I'll have to find it. Before this episode is out, I'll make sure that that ends up in the show notes.

Speaking of episodes being out, last week's out is live, for anybody who's listening right now. This one will be out in a week. We are finally caught up on time, so we will record one episode and we will release the week prior, every week from now on, barring any unforeseen circumstances.

Anything else anybody wants to talk about? We can start getting into some \#FreeSoftwareFriday?

**Brian Ketelsen:** Yeah, I think it's \#FreeSoftwareFriday time.

**Erik St. Martin:** Alright.

**Brian Ketelsen:** I'll kick it off, because I love kicking it off. It's my thing. I've been reading Ben Johnson's blog posts, and I don't know if anybody's seen that WTF dial app that he's been doing, but it reminded me that BoltDB is a lot more awesome than people give it credit for. He wrote a nice justification about why sometimes it's okay just to use a key/value store instead of MySQL or Postgres. So I wrote two applications over this last week using BoltDB and find it to be about the most simple and painless way to store data on a disk. So a big shout out to Ben Johnson for BoltDB.

**Erik St. Martin:** Alright, who's up next? Carlisia?

**Carlisia Thompson:** I can go next. I want to give a shout out to Api2Go. It's a project in Go, and it's for the use case where you want to implement a RESTful API, and if you want your responses...

**Brian Ketelsen:** The JSONAPI spec?

**Carlisia Thompson:** Yes. If you want your requests and responses to conform to the JSONAPI spec, this will facilitate your life. It will let you do stuff by hand, if you want to just use the minimum interface that they have. But they have some interfaces that if you implement them, it will automatically map your routes to the methods that you're writing for your REST API, and it's fantastic. I've been using it for a project that I'm working on, and I love it. I haven't had any problem, it's super well documented, it's got a ton of examples.

**Erik St. Martin:** How do you guys keep up with all of these?

**Brian Ketelsen:** We don't...

**Erik St. Martin:** Does anybody have a running count of the number of REST frameworks?

**Brian Ketelsen:** I bet I've tried them all... \[laughs\] I'm willing to put money on that.

**Erik St. Martin:** I have not seen this one yet.

**Carlisia Thompson:** Oh, there are so many.

**Aaron Schlesinger:** \[52:03\] Does anyone know how many are in Awesome-Go?

**Erik St. Martin:** I need to look at Awesome-Go more often... It's been a while. It's probably been a couple of months since I've looked at Awesome-Go to see if anything new is there. But it's so big now, how would you even know? You need to export it and do a diff...

**Brian Ketelsen:** My problem is that Awesome-Go is -- I don't think it's that curated. I think it's more, "Here's a pull request, and we've accepted it." And does their definition of awesome meet my definition of awesome? I don't think it does.

**Erik St. Martin:** But that begs the question, "Does it make sense to have some canonical place to look for these things?" And then you switch to them and decide which ones you like. Although it's hard to tell what the adoption rate of one is versus another.

**Brian Ketelsen:** So you could do something like npm search?

**Aaron Schlesinger:** Oh man, that's a great segue into some \#FreeSoftwareFriday I wanted to mention.

**Brian Ketelsen:** That was my troll for the day, right? \[laughter\]

**Erik St. Martin:** Well, if it's a good segue, go ahead.

**Aaron Schlesinger:** Alright... Well, I wanted to mention a library by Sam Boyer called GPS. It is a library that basically you import into your code; it's about ten lines of code, and you can get the entire dependency tree for any package, in a Go data structure. On top of it, it's being brought into the Glide project, which if you don't know it's a package manager for Go. It's also going to be used, I predict, inside of Peter Burjon's \[53:35\] working group to do better package management in Go. So I predict that this project is going to be used in whatever solution they come out with. Eventually, we're going to have something like npm search for Go, which would be amazing.

**Erik St. Martin:** That kind of reminds me... There was another tool that I saw come out - I can't remember where it was or who mentioned it, but it basically does the whole visualization of your dependency tree for your project. For the life of me, I can't remember what the project name was, but I will link to it in the show notes, because I will find it; my brain won't be able to let it go. It basically drew out a big graph of your dependencies.

**Aaron Schlesinger:** Nice.

**Erik St. Martin:** Wait, somebody in the GoTime FM Slack channel just mentioned it.

**Brian Ketelsen:** Ask, and you shall receive.

**Erik St. Martin:** Right, so it's called goviz. I don't even know how to pronounce the GitHub username.

**Brian Ketelsen:** We'll just put that one in the show notes.

**Erik St. Martin:** And link to it on Twitter. But yeah, that was super cool, too. So for my \#FreeSoftwareFriday, I'm gonna give a shout out to Miek Gieben for CoreDNS.

**Brian Ketelsen:** Whoow!

**Erik St. Martin:** Yeah... That's such a cool project from the Kubernetes world. You're familiar with SkyDNS, right?

**Aaron Schlesinger:** I am... Is that a question for me?

**Erik St. Martin:** Yes, so SkyDNS has been around and connected to Kubernetes for a couple of years now, but Mieke actually completely rewrote it and worked with Matt Holt on refactoring Caddy, so that Caddy could be more pluggable, the way the configuration works, the middlewares and stuff. So CoreDNS basically can replace SkyDNS now, but it's massively cooler with the way the modules, middleware and stuff like that works.

**Aaron Schlesinger:** That whole community around Caddy is just awesome to me. I love those people.

**Brian Ketelsen:** Word! Big time! I use Caddy for everything, for two years now. I don't regret a minute of it.

**Erik St. Martin:** Brian accused Matt when he was on the show of being the nicest person in the Go community... \[laughter\]

**Brian Ketelsen:** I still think it's true.

**Aaron Schlesinger:** He is!

**Brian Ketelsen:** Yeah, he's awesome.

**Aaron Schlesinger:** \[56:08\] He DM-ed me on Slack when he first started Caddy. He said, "Do you think Caddy is an okay name to use?" I said, "Well, what does it do?" He said, "It's a better web server." I said, "I don't care what you name it, build that! \[laughter\] People will use that."

**Brian Ketelsen:** You can call it Bob, we don't care.

**Erik St. Martin:** Yeah, call it Thing!

**Aaron Schlesinger:** Thing, yeah. I love that guy, too. That whole community that he's built around Caddy is one of the best in software.

**Erik St. Martin:** Yeah, just tying in ACME and Let's Encrypt...

**Aaron Schlesinger:** Focusing on this concept of like security by default, with no extra work, no extra configuration, that's what we need. That's perfect.

**Erik St. Martin:** I'm really interested to see how many other people spawn projects similar to CoreDNS using the Caddy libraries as the building blocks to build their own tools on top of.

**Brian Ketelsen:** Yeah, this refactor really made it amazing to do that, so why not? We need a blog post.

**Erik St. Martin:** Somebody needs to come up with a new idea.

**Carlisia Thompson:** We did so many blog posts out of this episode, it's not even funny.

**Brian Ketelsen:** You know what we need - a 5-minute video about it.

**Aaron Schlesinger:** Actually, I'm way ahead of you. I'm not doing it with Caddy, I'm doing the ground-up thing with Lego.

**Brian Ketelsen:** Oh, nice!

**Aaron Schlesinger:** But Caddy might be a good one to follow up with.

**Brian Ketelsen:** I've decided I'm not gonna use Lego for anything. I'm not gonna manage that... I just reverse proxy everything behind Caddy and smile. \[laughter\]

**Aaron Schlesinger:** That's not a bad idea, actually.

**Brian Ketelsen:** I do, I'm not kidding. Just... Why? Why do it?

**Erik St. Martin:** I haven't even set Caddy up as a reverse proxy yet.

**Brian Ketelsen:** Oh, it's so freakin' easy.

**Erik St. Martin:** Most of my stuff is kind of hidden away right now. I'm working on stuff that just interacts with Kubernetes libraries and stuff like that. It's not kind of exposed. So I think now we are actually out of time. Anybody have any closing notes before we call this thing a wrap?

**Brian Ketelsen:** No.

**Carlisia Thompson:** No.

**Erik St. Martin:** Alright then. I wanna thank everybody for being on the show, especially thank you to Aaron for coming on this show. Everybody definitely check out his Go In 5 Minutes videos; I think it's gonna be really interesting to see all the new ones that come out from this show. I think we've had a lot of good discussion. Thank you to the listeners, everybody who's listening live and interacting with us on Slack. Definitely subscribe - you can go to GoTime.FM to subscribe if you haven't already. We are on both iTunes and the Google Play Store. Follow us on Twitter @GoTimeFM and github.com/gotimefm/ping if you want to be on the show or have recommendations. Definitely thanks to our sponsors today too, Linode and Backtrace. With that, goodbye everybody!

**Brian Ketelsen:** Goodbye!

**Carlisia Thompson:** Thank you Aaron, and goodbye everybody!

**Aaron Schlesinger:** Goodbye, everyone!
