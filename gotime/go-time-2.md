**Erik St. Martin:** It's Go Time! A weekly podcast where we discuss interesting topics around the Go programming language, the community and everything in between. If you currently write Go or aspire to, this is the show for you.

This is episode two, and with us on the show today we have Brian - say hello, Brian.

**Brian Ketelsen:** Hello Brian.

**Erik St. Martin:** \[laughs\] We also have Carlisia on the call.

**Carlisia Thompson:** Hello everybody.

**Erik St. Martin:** And we have a special guest today, Cory LaNou, who is a developer for InfluxDB, and also highly active in the open source community, and runs I don't know how many open source meetups any more. Cory, why don't you tell everybody hello.

**Cory LaNou:** Hey, how's it going?

**Erik St. Martin:** So you want to give everybody maybe a short high-level background on yourself and then we'll kick this show off?

**Cory LaNou:** Sure. I work at Influx Data, working on the core team for InfluxDB, so that's what I do during the day. I spend a lot of time with the community, as many of you know. As far as the amount of meetups I run, I'm slowly removing myself from the Denver meetup, which is great, but I have a Chicago meetup that I am helping out with, and a Minneapolis meetup that I'm helping out with. Then obviously we do some stuff for GopherCon with the kickoff party, some training, and those kinds of things. I'm also doing a lot of Go training with Bill Kennedy for the Ultimate Go series as well. Between all those, that keeps me pretty busy.

**Erik St. Martin:** Yeah, that's beyond busy.

**Brian Ketelsen:** That's all? What do you do on the weekends?

**Cory LaNou:** Well no, I live on a 320-acre estate up here with my family, and my wife has horses, so that means any free time whatsoever that I have, I'm out fixing a fence or chasing horses, and all that kind of good stuff.

**Erik St. Martin:** So where's the time for the fireworks?

**Cory LaNou:** Luckily that's seasonal, and that pretty much just dictates every single waking moment of my day once that season starts.

**Erik St. Martin:** Seasonal? There's always time for fireworks.

**Cory LaNou:** \[laughs\] I wish everybody believed that.

**Erik St. Martin:** Have you written anything to launch your fireworks in Go yet?

**Cory LaNou:** No, I would really like to. I think all the firings systems out there are really expensive and don't work so great, and I don't think it'd be that hard to use a arm device to go ahead and start doing that kind of stuff, so I might have to look into that.

**Erik St. Martin:** I'm in, I'll help.

**Brian Ketelsen:** An Arduino and a little bit of power, I think you're good.

**Cory LaNou:** As long as it can ignite the match we're good.

**Brian Ketelsen:** Yeah.

**Erik St. Martin:** Alright, so typically the way we do this show is we'll start out with some news. We'll kind of roundtable it and see what everybody has that might be interesting to talk about, we'll chat about that, and then we'll move into Brian's fun projects that he discovers on GitHub because he downloads all Go projects every night into his brain, and then we'll move into talking to you a bit more, Cory, about your community efforts, open source contributions and any advice you have for people aspiring to get into either of those things. With that said, Brian, do you have any interesting news for us?

**Brian Ketelsen:** I think the biggest news recently is the Go 1.6.2 update, although it's a tiny little update from what I can tell. The only thing that really caught my eye in there is the net/http client getting http2 by default. That's big, and I know a lot of people were looking forward to that. The rest of the fixes in there seem to be mostly little compiler bugs sort of things.

**Erik St. Martin:** Yeah, It seemed that way to me too, that the main thing that people would be interested in is the fact that http2 is defaulted now, which I believe was a mistake. It was meant to be default first.

**Brian Ketelsen:** I think that's correct, I think this fixes that.

**Erik St. Martin:** One thing that I'm particularly interested in chatting about is GopherChina just completed - was it two days ago, a day ago?

**Brian Ketelsen:** Yeah, I think so.

**Erik St. Martin:** So the GopherChina stuff, there seemed like there were some interesting talks there, but one particularly caught my eye, which was Dave Cheney's talk on performance, and I happened to see the slides for that - the videos obviously aren't released yet, but the slides look good. There is a lot of stuff that I really agree with. I think he has a lot of advice for how to profile and benchmark apps, but also how to approach benchmarking, and I just kinda wanted to chat about that for a second to get everybody's opinion. When you develop code, what's your approach for performance? Do you think about performance from the beginning, do you never think about performance? Do you think about performance when specific bottlenecks come up?

**Carlisia Thompson:** For me, I never think about it from the beginning. It's usually when the bottleneck happens, then yeah, let's take a look and see what we can do here. I think it is not the ideal, I think a middle ground should be reached there. I think you should think about it a little bit as you develop things, so you don't find yourself against the wall someplace down the line.

**Erik St. Martin:** It's rough, I think we wanna beat ourselves up when we don't have time to benchmark, but at the end of the day we're also expected to deliver products, right? So if performance isn't an issue for the product at the moment, can we justify the time to do it? So as much as we would like to make everything as performant as humanly possible, if a particular application - say it's an internal application that's not gonna be used by anybody, what's the value in making it twice as fast?

**Cory LaNou:** Yeah. For me, I find that, I don't optimize right away or think about performance when I write the code for two reasons. One, because I don't typically have the time, and two because I'm almost certainly wrong every single time when I do get the time to actually profile it.

**Brian Ketelsen:** Yeah, isn't that really what Dave said in his slides? If you performance is good, stop, don't optimize it. Only optimize when there's a problem. For me, coming from languages that have been much slower than Go, I almost never profile anything unless I find a specific problem. I'm already 30 times faster than I was in Ruby or Python or whatever. How much faster do you need? I'm just not a greedy person.

**Erik St. Martin:** I think I tend to look at my code, just kind of quick-eyeing it. If I can remove an allocation or things along that line that are really obvious at the time, I know that a slice is gonna grow beyond some amount, I'll set it from the beginning; at least a base level to prevent the copying every time. It needs to grow. But aside from that, I'll do some baseline benchmarks just so that I have something to compare to later, to make sure that given algorithms aren't getting slower, and things of that nature, but usually it's some performance problem after the fact, end-to-end testing, things like that that start narrowing down hotspot areas that need to be addressed.

**Carlisia Thompson:** My recollection too is that anytime, or most of the time that I did have performance issues, they were related to database queries. I don't even think of a time when I had to go back and rewrite some logic because of performance issues. But database queries definitely, that's usually where I find problems.

**Erik St. Martin:** Yes, queries, and interestingly I think some of the issues that I've found too are bugs with goroutines kind of growing unbounded, where they don't properly close out and memory continues to grow because of it. We've had a few of those over the years.

**Cory LaNou:** We've definitely seen that several times on the Influx Core. We've gotten bug reports, and it's almost always been one of those things where we get a bug report and we look, and "Oh, there's a goroutine that was just unbounded." We never thought about actually shutting it down, and it should have been. One of them, interestingly enough, that was just caught was an http handler would launch a goroutine and we would close the goroutine if somebody cancelled the actual request, but not if the request finished, so that was kind of crazy.

**Erik St. Martin:** Oh, no...

**Brian Ketelsen:** The penalty for success!

**Cory LaNou:** Absolutely.

**Brian Ketelsen:** So in your years of experience in Go, have you ever found a problem with http routers? I'm curious as to why there is such a preponderance of evidence on http router benchmarks in Go? Why do people care how many nanoseconds it takes to compute that path?

**Cory LaNou:** I've gotta put it down to bragging rights, that's the only thing I can think of.

**Brian Ketelsen:** I think it's insanity.

**Erik St. Martin:** That nanosecond talents, man! \[laughter\]

**Carlisia Thompson:** I think developers are by default an optimistic bunch. We always like to think, "Well, we're going to get so many hits on this endpoint, I just need to prepare for that. I know it's gonna happen."

**Erik St. Martin:** But I don't think it's just developers, I think it's humans, right? It's that guy in traffic who has to pass you so he's one car length closer to wherever he's going. \[laughter\] It's the same micro-optimization. You look at it and you're like "Oh, it's one car length." Alright, so... Interesting Go projects. Brian, you kind of do your nightly download of Go projects. I have no clue how you have time for that, but... Every day he's sending me I don't even know how many - I can't even come up with a curated list that he's sent me, so how he curates it is beyond me. Do you have any interesting projects to talk about?

**Brian Ketelsen:** Let's see, interesting projects this week... I think one of the most interesting that's been surfacing quite a bit for me is the Go Micro Framework, micro.mu on the web. I really like the direction that's going. I like the idea that the whole framework is built with the idea that Micro services aren't built in a vacuum, and all of the important tools are built into the platform and then pluggable for your specific choices. So it's got opinions on service discovery and the options to plug into different service discovery providers, for example. I think that's a platform that's going somewhere quickly.

**Erik St. Martin:** How does that contrast to Go kit?

**Brian Ketelsen:** The way I see Go kit is Go kit being a lot of packages that are useful on their own, and useful together for the Micro services world. I think Micro is probably less useful as individual packages and more powerful as a group of packages. I could be wrong about that, but that's kind of the way I see it. I don't see using many of the components of Micro on their own standalone, whereas with Go kit it's really easy to just pick out one or two pieces of Go kit that are strong and that you might need in a particular project and use them standalone.

**Erik St. Martin:** Yeah, I have briefly looked at Micro but I haven't had a chance to play with it yet. So kind of along those lines, Micro services in general - Cory, are you guys using Micro services at Influx, or you typically keep more monolithic applications?

**Cory LaNou:** Yeah, that's a good question. We try to keep monolithic repos, I guess that's one way to say it, and then we do definitely do the Micro services and we have a lot of different services that handle the meta side of the data, the TSM engines. So everything does run pretty much from a Micro service standpoint; it makes it really easy for testing, as you can imagine. We bind everything, loosely couple the interfaces, so testing everything is a dream.

**Erik St. Martin:** What do you use for communication between those services? Are you using RPC, or is this just standard HTTP in JSON, or...?

**Cory LaNou:** We use a combination of things. Protobuf has actually been kind of our go-to lately, and that's been working really well. It's a little bit extra work from coding standpoints, kind of a little extra dance that you'll have to do every time to add the types to the Protobuf definitions, and then compile it to go via 'go generate'. But it's really fast, and it's all basically native Go code at the end of the day when you're done working with it. JSON is just... I mean, it might as well be xml at that point with the speed that we have to work at, so we just don't use JSON for anything unless it's really tiny.

**Erik St. Martin:** Are you using gRPC or are you using Protobuf separately?

**Cory LaNou:** I actually don't know, I'd have to look. I didn't implement the Protobuf stuff, I just get to use it all day long, so I don't know what they added up on that side of the world. I could look though, and find out.

**Erik St. Martin:** There tends to be the argument that Micro services has become like a buzzword too, where everybody wants to jump on it, and there's been kind of some debate there, so it's always interesting to hear how many people are taking the Micro services approach and what's the delineation, where do you divide services and things like that. I always like to hear people's opinions on how they've split things up.

**Cory LaNou:** I think the important part is to understand that you're gonna get it wrong the first time and probably the second time, and maybe even the third time. But eventually you'll get there, right? It's not as simple. People say, "Oh, Micro services" and this is just gonna solve all your problems, but it's still quite a complicated ecosystem when it comes down to it, and it takes a while to sort it out how everything's gonna come together.

**Erik St. Martin:** Yeah, there's a lot of cognitive load there, right? Which services get touched, and you get into distributed tracing, because now how do you follow a given request and find errors that happened with it? If it reaches out to 15 services, the responses from each of those services have meaning in the debugging of that request, and it's always a tradeoff; it's kind of like performance - most of the time if you're optimizing the code for performance, you're taking away readability. It's always hard to decide where to make those decisions, and I think you get a lot of arguments about it too, based on who you ask.

**Carlisia Thompson:** And going back to the Go kits in the Micro services framework in general, isn't a Go kit and maybe a Micro framework might also have a middleware that has handling across services? Isn't that correct?

**Brian Ketelsen:** Yeah, Go kit has a Dapper/Zipkin-like layer that allows you to trace your calls, requests across the different layers of your services.

**Carlisia Thompson:** Oh, that stuff is very important. I hear people saying "Well, if you have a convoluted logic in a monolithic, you breaking that up into services is not going to help your logic be better." But I challenge that, I think it will force you to think about how you would divide things up, and you might not even get it right the first time, but it will force you in that direction, because you have to. But it's super important, like you guys were saying, to have the tools that will allow you to manage your error handling, and all of the glue that needs to come together with Micro services.

**Erik St. Martin:** Well, I think that splitting up into Micro services also is a form of premature optimization, right? There's penalties, there's network latency between things, there's more places where things can fail between the communication of things, and the network is weird. I can't tell you how many times we've debugged RPC-type issues where just the data that came through - you get packets in reverse order and things like that, and you have to fix something that gets locked up because of it. So there's a lot of tools that you can use nowadays that are a lot more solidified for doing these types of things, but there's still risk in everything like that, and kind of having things bundled together, if you don't really have a need to pull it out.

**Brian Ketelsen:** I think there's a lot of validity to the idea that Micro services are just as much of a social and structural concept as they are a coding concept, and structuring your Micro services around the teams might be more important than structuring them around specific code barriers that might be artificial.

**Carlisia Thompson:** Definitely.

**Erik St. Martin:** Alright, I think we chatted about Micro services quite a bit here. Do we have any other interesting projects? I think Carlisia you were talking about a new doc tool that you were excited about, right?

**Carlisia Thompson:** Yeah, this is reminiscent of my editor hacking that happened a couple weeks ago. I found out about this due to - I think it's new; it only works with Go 1.6, it's called GetDoc. It's a CLI tool, which is not super exciting; I don't wanna be reading tons of documentation, it's just out of context for me if I'm working on my editor. But the neat things about it is that it's integrated into Atom and Vim Go, and I think they also integrated it into Emacs, for people who use that. Basically it allows you to just hop over to a word and press a combination of keys that you can control over your keybinding, and the documentation will pop up for things like package in the import list, constants, it will give you the value of a constant, method calls and struct fields. So the documentation just pops up right there, and you press Escape and it goes away. I thought that was super cool.

**Erik St. Martin:** Oh, that is cool. Alright, do we have any other interesting projects we want to talk about before we move on to discussing all things open source in the community with Cory here?

**Brian Ketelsen:** I could give you 30 more, but I think we covered it all in Go Micro, so why don't we move on?

**Erik St. Martin:** Alright then. Cory, you get a chance to talk here. I hope you like talking.

**Cory LaNou:** I've been known to talk.

**Erik St. Martin:** So I think all of us have happened to see your talk from GopherCon India in February...

**Carlisia Thompson:** It was an amazing talk. It was so passionate, I loved it.

**Erik St. Martin:** Yes, and there's a couple of things I want to talk to you about there, but first I have to ask you about the camels. Seriously, I'm jealous, you got to ride camels.

**Cory LaNou:** It was great. Mark Bates, who one of my coworkers, he happened to be going to GopherCon India and actually he joined the team, we didn't even know we were both going, so that was pretty cool. We were kind of running around the whole time out there, and the camels are literally in the middle of the desert, they take you about 30 minutes out into the desert. You basically get on and you do about a 20-foot circle and then you get back off. But you get your picture, so that's important.

**Erik St. Martin:** So that's kind of like the Central Park tour in the carriage. You pay your 50 bucks and they take you around the block...

**Cory LaNou:** Yeah... But what's interesting, if you've never ridden a camel, getting up and getting down is pretty crazy. They get up pretty easy and you have to hang on, but when they get down, they basically just drop completely down to their knees. And when they drop, they drop hard, so if you're not hanging on, you're going to literally fly over the camel. \[laughter\]

**Carlisia Thompson:** I've ridden a dromedary before, but not a camel, and there is a difference - one has two humps, and the other one has one. The dromedaries are more common than camels. I don't think you'll find a lot of camels outside of the Middle East or Saharan Deserts.

**Brian Ketelsen:** We learn something every day on Go Time.

**Erik St. Martin:** I'm definitely not an animal expert. So in your talk, one of the things that actually caught my attention was that you had said that you had been developing for 17 years, and it had only been four years that you've really done open source work.

**Cory LaNou:** That's correct.

**Erik St. Martin:** I kind of want your take on that, because I think that's a big step for a lot of people. There's always that fear of putting your code in the open. I've been doing open source development for I don't even know how many years now, and I still struggle with putting my code out in the open.

**Cory LaNou:** Yeah, it's pretty scary at first, and I even wrote a blog post on it that we can link at some point, but basically open source code is really scary when you put it out there, and my first experience was I had a bug that I couldn't figure out what was going on. Of course, I look it up and it's an issue with the Go language, and it was closed, of course, it was closed by Dave Cheney. So me knowing Dave Cheney, I reached out and I said "Hey Dave, I understand you closed this bug, I'm running into it; I really don't know what the solution is. Can you help me out?" He said "Well, can you give me some context?" So of course I gave him the link to the pull request that I got on InfluxDB. Now, I had only been at Influx DB for maybe two or three weeks at this point, and it's my first experience in open source. And of course, in good open source fashion, Dave just begins to review the entire PR, not the issue that I'm actually looking at. So it's kind of like a rockstar asking you to sing their biggest song in front of them; it was very nerve wrecking, I was very scared. But it was great, it was a real learning experience, and then you find out really quickly that nobody really cares if you're a rockstar programmer or not. Everybody's just trying to get their code out there. You're going to do really dumb things, and people are going to call you really dumb things sometimes, because it's open source, but you just learn from it. Take a positive note from everything you learn in open source, when everybody gives you feedback.

**Erik St. Martin:** It's interesting you make that analogy, because you think about it like karaoke too, right? Just get out there and sing, it's fun no matter what, right?

**Cory LaNou:** Exactly, exactly. Have a good time. It's okay, you're gonna screw up, and believe me, you're gonna do some really dumb things, and you're gonna get a bugs log and you're gonna look, and you're like "Wow, that was really stupid, I cannot believe I did that!" Break the cluster and release it, and nobody knows that you actually don't have consensus anymore. I mean, I've never done that...

\[laughter\]

**Brian Ketelsen:** Neither have I.

**Erik St. Martin:** Right, right. I've NEVER committed a stupid bug that brought down any systems because of something dumb. Never. \[cross-talk 00:22:46.00\]

**Brian Ketelsen:** There's a giant rollback button on my desk. Everybody else has the easy button, I've got the rollback button.

**Carlisia Thompson:** I think GitHub now has a feature for you to roll back easily, I don't think they had it before. You had to roll back things manually, which is what I would do anyway, but...

**Erik St. Martin:** With Git there is the Git Revert, which allows you to create a commit that basically inverts whatever commit that you're trying to revert.

**Carlisia Thompson:** But I think GitHub put a button there that does that automagically, if I'm not mistaken.

**Erik St. Martin:** I'm more of a command line junkie, but yeah, I can see how just being able to go to the website and click the button becomes super useful.

**Carlisia Thompson:** As far as Git goes, I don't trust any UI tool. I wanna see it on the command line. If it didn't happen there, I don't know if it happened, so I wanna see it.

**Cory LaNou:** Git for me is a Swiss army knife that has all these buttons on it, and when you press it, I stab myself every single time.

**Erik St. Martin:** The thing I tell people all the time is if you learn to use the reference log, you'll feel much safer with Git. Because you're like, "Oh, it doesn't matter. If I committed it, I can totally fix it."

**Carlisia Thompson:** But you said the magic words, "If you committed it." If you don't, it doesn't really matter. But it is amazing how many people don't even know that that exists, and it's a life changing thing.

**Erik St. Martin:** Yeah, if you have not played with the ref log, you should.

**Brian Ketelsen:** Git's really simple for me - you just delete the directory and clone again. \[laughter\]

**Erik St. Martin:** No, don't do that.

**Brian Ketelsen:** That's all you need to do: rm -rf &lt;my repo&gt; git clone &lt;my repo&gt; Fixed!

**Carlisia Thompson:** We'll edit that out.

\[laughter\]

**Erik St. Martin:** Yeah, yeah. Do not take Brian's advice there.

**Carlisia Thompson:** Not this one, people.

**Erik St. Martin:** So back to the open source contributions too, I wanted to point out another fact. I think that people not only should contribute, but go in and dig around the code, because I think people will find that their vision of the code for any big name project is far from the reality. They're gonna start digging around and they're gonna find their own words. Regardless of their skill level, they're going to find code that they even think is bad. And I think at the end of the day, as we talked about earlier in the episode, sometimes it comes down to delivering. You have to fix a bug, and you may not have time to implement the best solution. And especially to your point, Cory, there's a limited number of people working on the project sometimes too, right? In your talk you kind of advocate that, help wherever you can. Maybe you don't have the best solution for a problem, but it's a problem that's getting solved that maybe won't get solved because the core members of the team just don't have time to work on it.

**Cory LaNou:** Yeah, I'm a big fan of Help Wanted. I just started a repo the other day on Go open source projects that have the actual issues labeled with Help Wanted. You can go on and find these issues very quickly, and figure out where they need help.

The more important thing for me on that one wasn't because I wanted to help all these open source projects - that actually wasn't my intention - it was because people were always asking me "How can I get started in Go?" and I'm like "Well, there's all these projects out there that need Help Wanted." We just need to get a list of them going. So I think that that's a really cool thing to see out there now, and I'm hoping that people will start spreading the word on that and getting that out. I think that's great.

**Carlisia Thompson:** Yeah, I saw you started putting together a repo? Was that it? I forgot.

**Cory LaNou:** Yes, it was a repo.

**Carlisia Thompson:** We will include a link to that on the show notes for sure, so tell us more about that.

**Cory LaNou:** Yeah, basically it spawned off of a meetup that I was doing in Chicago, and I couldn't make it down there, and the host - we missed a month and we had to get back on track, and we didn't have time to really get speakers lined up. So it was like a week before we were gonna have it, and he was kind of a little nervous, and he was like "Hey, we don't have any speakers", and I'm like "Well okay, we should have a hack night." But just having a general hack night doesn't really give you much direction, so I thought "Well, there's a lot of projects out there that need Help Wanted, and there's gonna be a lot of Go people there, and there's gonna be some people new to Go - let's just get a list of things to pick and choose from", and that's kind of where this idea came from. It really goes hand-in-hand with a lot of the community stuff at Go where I'm doing the intro to Go and stuff like that, and people really want to know "How can I contribute?" The Hello World programs, taking the tour - these are all fine and dandy, but I'm not learning anything, I don't know how to solve a real world problem, I don't know what a codebase is really gonna look like and how I should do it. And contributing to these open source projects, even on the really small Help Wanted, really start to give you a sense as a beginner in Go like "Oh, this is how a bigger project is gonna be organized, this is how a bigger project is gonna expect me to contribute", and you should learn things beyond even just Go at that point. You'll learn the process of doing the pull requests, and doing a review process and that kind of stuff. It's just a great experience.

**Erik St. Martin:** I think it's actually a really good idea, because when you're forced to solve a problem you have to dig around and you have to learn the codebase, which means you have to understand more Go, too. Then on top of that when you submit your pull request, you have other people reviewing your new Go code, so you can have people help shape you. One of the things that I find with Go is picking up the language is the easy part, learning to write idiomatic Go is a totally different story. So if you're submitting pull requests, then you have people automatically looking at those things.

I think that it should be said too that skill level doesn't matter. Just getting in there, and even if your patch doesn't get accepted, you're going to learn a lot along the way.

**Carlisia Thompson:** Let me throw something at you guys, because you've all been doing Go forever, and I'm a newcomer totally. So I would go to InfluxDB source code, download it to my computer, and actually kudos to all of you because I was able to install and get it running on my machine just reading the documentation; for such a big project, I thought that was amazing, I was very impressed. But anyway, so I would go around and read the code and not understand it. I've been programming for a while, and it would just kill me that "Okay, I don't know what this is doing." Then I'd be like "Okay, let me go to a simpler codebase." So I'd go to a simpler codebase and still not really get it - maybe I'm just dumb, but after a while I did get it, after I actually started coding. My point is - a lot of times you say "Just read the code and you'll understand it", and I was reading the code and I was not understanding, and I was looking up issues that had the label "beginner" and I was not understanding it. I was like "Oh my gosh, maybe this is hard. Why am I not just immediately getting it?" Because when you say "Read the code and you're gonna get it", my impression is I need to get it immediately. If not, either I'm dumb, or this code is hard, it's not as easy as people are saying.

**Erik St. Martin:** I think that some people will be more natural at figuring it out, and I think it's just more a matter of domain knowledge. So you have understanding something from a technical perspective, and you also have the understanding of domain knowledge. If you know very little about, say InfluxDB, it's gonna be a lot harder to follow the code because you're trying to pick up the code and the organization of it, the language, as well as the domain knowledge of the system as a whole, all at one time. I think it's not worth beating yourself up over that it's not quick to discover. I think I've attacked some beginner Go tasks that didn't turn out to be so beginner, and I abandoned as well.

**Cory LaNou:** I don't think there's ever been a time that I've gone into source code, like the Go raft library - that's a pretty sophisticated piece of code that HashiCorp wrote. The first time I went in there I'm like "Oh, it's written in Go, I should be able to understand this", and I pretty much got in there and I'm like "Wow, maybe I don't know anything about Go at all." It's just a common thing. I think we definitely should caveat... When we tell people "Hey, go read the source code. It's out there, and you'll understand it", it's definitely both the domain knowledge. It just takes a little while. Sure, I understand all the syntax, that makes sense to me, but I don't understand what it does. That's just a matter of spending time in there, and what I typically try to do is I stopped going to the source code first, I started going to the Go docs first. Because that gives me the overview of the API that that library's gonna have, and that starts to give me a sense of how it's gonna be stitched together, and then from there once I read the code it tends to make more sense. But again, that's getting that domain knowledge, but you get it really fast from the Go docs, and you don't get that very fast when you're reading the code.

**Erik St. Martin:** Become buddies with a project member, too. Get him all excited, buy him a beer. Say, "Talk to me!".

**Brian Ketelsen:** Definitely.

**Carlisia Thompson:** ...ping them on Slack all day long.

**Cory LaNou:** I get a ton of people that reach out to me on Slack for Influx randomly; I have no idea who these people are, and they're like "Hey, I'm working on this bug for you. Can you help me?" Like, "Sure, what do you need?"

**Carlisia Thompson:** Speaking of which, there is a reviews channel on GopherSlack which I just discovered recently. I don't know if all of you are aware. There is a lot of action in there, I wonder if people make good use...

**Erik St. Martin:** I actually didn't know that.

**Brian Ketelsen:** It's a very busy channel.

**Carlisia Thompson:** Yeah. I wonder if people make good use of it. If people get good feedback... I started keeping track of it.

**Erik St. Martin:** So this is just a channel somebody opened up for people to post pull requests and just get anybody who has some spare cycles to review for them?

**Carlisia Thompson:** Yeah, not even necessarily pull requests, just any code, just "Review this code."

**Erik St. Martin:** That's awesome. I didn't even see that yet.

**Carlisia Thompson:** Yeah, GopherSlack, full of surprises.

**Erik St. Martin:** So Cory, you said you have a whole bunch of free time still, right?

**Cory LaNou:** Yes, absolutely.

**Erik St. Martin:** Review all the things. \[laughter\]

**Cory LaNou:** I'll start doing that at midnight every night.

**Brian Ketelsen:** We'll expect to see you in the reviews channel shortly...

**Cory LaNou:** I just joined. \[laughter\]

**Brian Ketelsen:** ...fixing all the code. No, actually it's a great channel, and I've spent quite a bit of time in there, because I always want to make sure I'm doing things the right way, so it's a good place to be.

**Erik St. Martin:** And for anybody who's not aware, we're referring to the Gopher's Slack, which is gophers.slack.com. There's a Heroku app for doing the invite we'll link to in the show notes. So that's what we're referring to. I think we assume because there's 6,000 people in there that everybody knows about the Slack channel, but that's probably a flawed assumption.

**Cory LaNou:*** It's interesting you make the comment about assuming, it's something I've been doing in most of the cities I'm in, as I maintain a document specific to the city, which provides all of the online resources like Slack and Go forums and all that kind of stuff, and it also provides information on everything local - all your local meetups, all your local jobs that are being posted for Go, and basically anything local to that demographic. Because I find all the time, even at the meetup, I'll be at a Chicago meetup and it'd be like "Oh, there's a Slack for Chicago Go?" and I'm like "Yeah, there is a big Slack, and there's a big Chicago technology Slack, and all these things." So I don't assume any more that anybody knows everything that exists. So I found that keeping that document for the meetups helps a lot.

**Erik St. Martin:** Brian and I, it was a month after GopherCon 2015, it was basically a big name company emailed us about the conference and wanting to sponsor, and we were like "It's over." They didn't even know... We had made the assumption that everybody kind of in the Go world knew about the conference. We feel connected, but the world is much bigger than we see.

**Brian Ketelsen:** Yeah, how could you not know about the conference? It's all we talked about on Twitter. Come on! \[laughter\]

**Erik St. Martin:** All you had to do was follow one of us on Twitter.

**Brian Ketelsen:** Right. Everybody who doesn't do that...

**Erik St. Martin:** ...and happen to be online when we tweet.

**Brian Ketelsen:** Exactly.

**Erik St. Martin:** So kind of speaking of the community efforts in your talk, Cory, that was the primary focus of your talk - community and getting people engaged, and advocating that people help where they can, and that they don't need to be an expert. We'd love to chat with you a bit about that as well.

**Brian Ketelsen:** Can I interrupt, Erik? I'd like to point out that Cory walks the walk when it comes to helping out where you can. And when we decided that we were gonna do GopherCon, he didn't ask to contribute pull requests, he asked if he could host things for us. He asked if it would be okay if we shipped all of our Gophers there early. A lot of community building isn't just software, even if it's a software community. It's about organizing those meetups, getting pizza, finding a place to hold the meetup, it's about helping the conference organizers do the things, organizing the pre-party, getting together a group of people that helps stuff the bags before the show... I mean, there's so much that you can do as a person to volunteer for an event or help a project, that isn't really writing code. You can write documentation, you can help spread the word about an interesting project. And Cory, in my mind, you gotta be one of the top guys on the whole internet in terms of walking the walk, and helping out projects and communities like that.

**Cory LaNou:** I'm not even sure what to say to that. For me it was a privilege, that's all it was for me. I look at all that kind of stuff, any time you can help out I think that's a privilege, so it was my honor to do it, and it was super exciting to see an event like that come off. It takes a ton of effort, so being part of that was magical and it was, again, definitely a privilege.

**Erik St. Martin:** So how would you recommend people get involved?

**Cory LaNou:** What I always tell people - and again, I covered this I hope really heavily in my presentation in India and Dubai - is what a lot of people think of when they want to get involved in a local community, the big problem is there's not a local community for a lot of areas yet. Go is still kind of an up-and-coming language, and in one of the charts I show we're about an eighth of the size of like the Java or the Rails community in terms of meetups worldwide. So what we really need is we need more meetups. Everybody always immediately thinks, "Oh, we need an organizer", and that's great - don't get me wrong, we need the organizer, but really as importantly as the organizers is we need that host, we need that sponsor, right? So it's really important to get those people to step up, because typically if you can find somebody to host it, then you can find somebody to sponsor it, then you can find somebody to organize it. And it's all these pieces that come together, and I want to stress one really important thing here: you don't have to be responsible when you form a meetup for all of those. That's not your job. Your job is to find people to help you. It's a community, right? So make sure you enlist all the help you can as soon as you can. Get help. People wanna help you. And if they just think they're doing one piece, they do it. But if you put all that onus on one person, if they think that they've gotta be the organizer, find the sponsor, find the host, it's very daunting. I think that's why a lot of people don't get involved right away.

**Erik St. Martin:** It's interesting that you point that out... Just kind of as an example, we started Go Tampa, because we didn't have a local meetup group, and we put together - it was either one or two, and then we got slammed because, just like you, Cory, we love to put more on our plate than we can handle. So we hadn't really been doing meetups anymore, but by that time there was some interest locally, so Aaron Greenlee, who is here locally in the market kind of just took that on, and he's the reason there's a Go Tampa now, because he organizes all the meetups, he finds the locations and so on. Sometimes just being the person to start the action, it kind of grows on its own.

**Carlisia Thompson:** Reaching out for help is very important, and I put out a challenge to everybody if you are interested or have this thought - just reach out and ask for help, if that's what's keeping you. Cory for sure, he has a ton of time, he will help you. \[laughter\] And I'll help...

**Cory LaNou:** I will definitely help.

**Carlisia Thompson:** ...with what I can. And I wanted to cite an example: I started the Gopher San Diego meetup in the North County of San Diego, and there was one in downtown. And what happened just organically was that we came together as a group. My company is supportive, so I get that support, so we came together as a group and we help each other out. They were doing it every month, and when I came in and started doing mine - I had a couple - they were like "Hey, what do you think of you host it one month and we host it the next month?" That took a lot of the pressure, because I think they were feeling, "Okay, this is being too much for us." So that's how we're doing it right now, because it's best for the group.

We are basically one group, we spread the word, we spread the meetups over two months, so I only have to host one every two months. So people come together and figure things out, but if you don't get started, you are not going to find out what kind of help you're gonna get.

**Erik St. Martin:** So we've covered meetups, but we also have your battle cry from your talk, which was more blog posts, and I think that we have two more that we can add to that: more podcasts and more conferences. I think that that's somewhere too... When Brian and I spoke on the Changelog, which - shameful plug here, they actually produced this show, so kudos to them for letting us get on the mic... So when we spoke on there, we were advocating too for more conferences. We still haven't seen a lot of regionals pop up. We've seen some internationals pop up, and we have a couple of regionals: we've got the GothamGo and then we have the Gopherfest in San Francisco. But aside from that, we haven't seen a lot of regionals pop up, and I'd love to see more regionals come.

**Cory LaNou:** I for one would love to do a Midwest conference. I would love to do something either in Chicago or Minneapolis. I've actually gotten pretty involved in Minneapolis recently, and Chicago is a great city, it's huge, so obviously it would be easy to host, but I gotta say, Minneapolis has an amazing tech scene up there, and I'm very impressed with what's going on up there. I would love to put together a GopherCon in Minneapolis. Anybody who wants that to happen, let me know and we'll see what we can do.

**Erik St. Martin:** And Brian and I are happy to offer advice that we've learned along the way too for anybody who wants to start a conference. There's a little bit more risk involved there just because there tends to be some financial obligations and some big contracts and stuff, but hopefully we can share some knowledge to lessen that burden on people who are interested in getting those things started as well.

**Brian Ketelsen:** Yeah, absolutely. We've probably done four or five calls with people across the world about starting a conference in their area. Don't be afraid to reach out and ask for help. There is nothing we love better than to spread the Go love and get more conferences going. So do ask, absolutely.

**Carlisia Thompson:** I just looked up to see if there was a conference channel in the Gopher Slack - there is none.

**Erik St. Martin:** There is now... \[laughter\] So is there anything else that you would like to advocate, Cory, before we wrap this thing?

**Cory LaNou:** The only thing that I haven't solved yet for getting communities going more is they're hard to setup, it takes time to get traction. But I would love to see more of the who's who in the Go community get out beyond their demographic, and even if it's an hour away or two hours away, go ahead and volunteer to go to that meetup that is a little bit further out than your demographic, and do a talk and really help them to get started. I think if we can see more of that in the community, reaching out two to four hours away from you - not even a flight, just a drive - I think that would really help a lot. I think a lot of us are in the situation where we are two to four hours away from another Go meetup that's trying to take place, and that can really help out and really start to get more of that momentum going.

**Brian Ketelsen:** Isn't that what they call 'the ground game' in politics? Knocking on doors?

**Cory LaNou:** \[laughs\] It might be, but this year I'm trying to stay out of politics.

**Carlisia Thompson:** And even if it's just for the beginning, just be the training wheels for people just for a little while, until they get going, and then you go be the training wheels somewhere else if you can. But even if you can do it once or twice, it's great.

**Erik St. Martin:** Bill Kennedy has driven from Miami over to Tampa I think twice now, and that's like a four-hour drive, so if he can do a four-hour drive twice, you can do a two-hour drive.

**Cory LaNou:** Exactly. I mean, I drive to Chicago, that's five and a half hours. I do it gladly.

**Brian Ketelsen:** That's awesome. That's commitment right there, folks.

**Erik St. Martin:** So typically the way we close out the show, we like to kind of go through... Brian kind of triggered off this \#FreeSoftwareFriday on Twitter a while back, and I think we all kind of fell in love with the idea of that. It's not always financial for people, just hearing 'thank you' from people who benefit from their projects is nice. With that said, Brian, do you wanna kick one off?

**Brian Ketelsen:** I absolutely have a big one this week. GopherJS. If anybody follows me on Twitter, you know I have this hate/hate relationship with frontend development, and GopherJS has been eye-opening for me over this last week or two. I didn't realize that it didn't have to be JavaScript on the frontend, it could actually be something that is Go, and transpiles down to JavaScript, and it's just really changed everything. I'm really excited about GopherJS. It's helped me get over my big, ugly fear of frontend code. You guys rock, thank you GopherJS team. Thank you, thank you, thank you.

**Erik St. Martin:** Carlisia, how about you?

**Carlisia Thompson:** I came across this neat little tool called Haxor News. It's a command line tool that you can use to access Hacker News. I think it's really cool because first of all I don't ever go to Hacker News - not because I don't like it, but because every time I go I just get lost, because I go from one thing to another, to another, and then find myself somewhere else. So with this tool, I just type 'hn' top for example, and I get the top news. I'm not so inclined to go chase that out, I really just wanna see the headlines. And I'm loving typing 'hn' onion if I need a chuckle I type that on the command line, and then boom! Never fails. It's awesome. \[laughter\] Do it, try it. Trust me!

**Brian Ketelsen:** I'm downloading it now.

**Carlisia Thompson:** Yeah, it's so awesome. And it's got a lot of colors, color-coded, and you can press a number and go and see that particular item more in depth. It's so awesome...

**Erik St. Martin:** I tend to stay out of the browser so that I can be productive, and you're bringing this unproductive thing to my command line now. \[laughs\]

**Carlisia Thompson:** I submit that the content is not the problem, it's the browser. The browser that leads you down the rabbit hole, but this is just pure content. No buttons to click, not links to follow, just the content.

**Erik St. Martin:** Does it ignore the comments?

**Carlisia Thompson:** Yes, exactly. I haven't gotten to see comments, I don't even know if they have comments. I suppose so, but...

**Erik St. Martin:** I know we're kind of blind siding you with it Cory, but are there any projects or people that you would like to thank in the open source community?

**Cory LaNou:** For me it's the one I use every single day, and it's Vim Go. I could not live without it. Vim Go is just... If you use Vim and you do Go, you have to use it, it's amazing. Some of the stuff that he's put in there lately has just been unbelievable. I can't tell you how happy I am with the amount of work that goes into that project.

**Erik St. Martin:** Yeah, I wanna send Fatih a case of beer.

**Cory LaNou:** Oh, like a semi load.

**Brian Ketelsen:** He's a huge coffee drinker, so send him coffee. And they just had a baby, so he probably needs more.

**Carlisia Thompson:** Exactly, I was gonna say that. Congrats!

**Erik St. Martin:** Can we get some donations and we'll just buy him a brewery? \[laughter\] I think that's the level he's at right now.

**Brian Ketelsen:** Yeah, don't forget, all you Vim Go users out there: he has a Patreon at patreon.com/fatih, and it's a great way to thank him for his Vim Go development.

**Carlisia Thompson:** We'll include it in the show notes, for sure.

**Brian Ketelsen:** Yeah, it's pretty awesome.

**Erik St. Martin:** And for me it's Kubernetes. I'm in love with Kubernetes. That's what I've been playing with more recently. Anybody who has not played with Kubernetes for container orchestration should. Just way too much fun.

**Brian Ketelsen:** It's a gamechanger, absolutely. That's a good one.

**Erik St. Martin:** And with that being said, I think that we are ready to close the doors on this episode, unfortunately. I wish we could talk all day, but we cannot. With that, I'd like to thank everybody for coming on the show. I want to thank everybody who is listening to the show, and everybody who will listen to the show because all of you are going to refer friends to go to GoTime.fm and register. We will also have a weekly email there that you subscribe to. If you are not already, follow us on Twitter, @GoTimeFM. If you have ideas for things you'd like for us to discuss, or questions for upcoming guests - and we'll start publishing a schedule for that - you can find us on github.com/gotimefm/ping. We will link to all of this in our show notes. With that said, goodbye everybody.

**Carlisia Thompson:** Goodbye.

**Cory LaNou:** Goodbye.

**Brian Ketelsen:** Bye!
