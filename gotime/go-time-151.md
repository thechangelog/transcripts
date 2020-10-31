**Mat Ryer:** Hello, and welcome to Go Time. I'm Mat Ryer. Today we're talking about how to introduce Go to teams that don't currently have Go. When is this a good idea, and when is it not? What do we need to know before we embark on this? Helping me get to the bottom of it today - it's Jon Calhoun. Howdy, partner!

**Jon Calhoun:** Hey, Mat. How are you?

**Mat Ryer:** I'm good, mate. How are you?

**Jon Calhoun:** I'm pretty good.

**Mat Ryer:** You notice I did that voice, because I had thought that Calhoun Jon sounds like a bandit from a Wanted poster in a Western, doesn't it? Like, "WANTED! 25 Dollars."

**Jon Calhoun:** Only $25? I must not be a very good criminal. You have to adjust for inflation. That's actually quite a lot of money these days. We're also joined by author of Learn Go With Tests. It's only Chris James. Hello, Chris.

**Chris James:** Hello, Mat. Good to see you.

**Mat Ryer:** Welcome to Go Time.

**Chris James:** Thank you very much. I'm very excited to be here.

**Mat Ryer:** Yes, I'm excited to have you, mate. An interesting fact about Chris - not only did he write Learn Go With Tests, which a lot of our listeners I think will be already familiar with, both of his names are also first names.

**Chris James:** Yeah, no one actually pointed that out to me before, actually.

**Mat Ryer:** Yeah.

**Chris James:** Interesting.

**Mat Ryer:** You're in good company. Rod Stewart... Jimmy Stewart also is another one, and John Stewart. I could only think of Stewarts.

**Chris James:** Yeah...

**Mat Ryer:** Which do you go by, Chris or James?

**Chris James:** Chris. James would be a mistake.

**Mat Ryer:** Okay. \[laughs\] Okay. We don't like to make mistakes.

**Chris James:** No.

**Mat Ryer:** Okay, so let's get started then. What's a good reason -- why, first of all, do people want to introduce Go into teams? What are some sensible reasons for this? Got any ideas?

**Chris James:** \[00:03:45.12\] I mean, Go's pretty good, ain't it? The reason it's my language of choice is because any old developer can write some software on their laptop and declare they've made something... But making software that can be used in a broader context, with a team of multiple people, and software that will live not just for a few months, but for many years - that's a whole different skill. And I kind of feel like Go's main strengths are cases towards that kind of thing. Things like the backward-compatibility guarantee I think is a really big thing. In a previous life I had to upgrade a Scala 2.8 project to a Scala 2.10 project. And that took me weeks. You compare that with -- like, in the Go world, it should in theory just be a little, comfy change and you're done.

So when you bring in things like the testing story, the excellent standard library, it does make a sensible choice, I would say, for a general purpose language.

**Mat Ryer:** Okay, that's interesting. I like the quote; I wrote down what you said. You said "It's pretty good, ain't it?" And I think it is. But is that enough of a reason? The fact that I love Go - is that a good reason for the team then to start doing Go? And I'm thinking also, if you're a member of the team that's not yet responsible for tech decisions, and some people -- it depends on how they organize themselves. Sometimes you have tech leads, or even managers, or even people outside of the team are responsible in selecting the tech. So is it enough that it's just something you like?

**Chris James:** No, probably not. What you have to bear in mind is that programming languages - they're not a goal in themselves; they're a means to an end. So if you're thinking about championing Go in your job, try and put on your boss' hat, as you mentioned. It's unlikely that a CTO is gonna get a bonus because some systems were written in Go. I don't think that will be in her contract. She's probably more measured on how successful projects are executed, and I think there are more specific things, like uptime, performance, costs, and that kind of stuff.

I think if you're trying to bring Go into your company - yeah, you shouldn't take that point of view that I just went with; take the point of view of your boss, and think about how can you help them achieve their goals using Go. Because then you can relate Go and its strengths to those problems, rather than just thinking about all the cool things about Go.

**Mat Ryer:** Yeah, that's interesting. And you're right, there are some aspects of Go which do make this a better candidate, actually, than other languages, I would say. One of the examples, the thing that always springs to mind for me is the minimalism in the design of Go. The fact that there aren't that many keywords, there aren't that many language features. It's quite a cut-down language, especially if you compare it to C\# and Swift, and other languages. So in a way, I think it does have an edge to be a good candidate for this.

**Jon Calhoun:** I think one of the ways it really works in that sense is that - let's say you're a Rails shop, and you use Rails because you can whip up CRUD-type apps really quickly, and Rails, Django, those types of frameworks are very good for that. But if you have some sort of background job, some sort of API endpoint or something like that where performance becomes more of a problem, or you need concurrency or some other thing there, the fact that Go is something where anybody who's programmed in almost any language can just look at the code and generally know what it's doing is a big plus. You don't have to retrain your entire organization to be like "Okay, we're gonna learn this new Rust thing." And Rust is one of those languages for me where I look at it and I'm like "I actually have to learn this. I can't just look at some code and go make some changes." Go, on the other hand, while it might not be idiomatic or perfect Go, I can understand it and make some changes.

So I think one of the better reasons that you might have for looking at the CTO's eyes is if you have a problem that you need some other language for and Go is a good fit, you could probably make some solid arguments on that side, where it's gonna solve this problem, it's gonna be easy for us to pick up; all of those pluses are there. But I do think that as developers we have that desire to learn new things, and I think that might be a mistake sometimes.

We talked about this in the last episode, where people wanna learn Kubernetes and all these other things, so all of a sudden they go out and introduce them to the project, and then when they go leave somewhere, it's like "Who's maintaining this? Who knows how to do it?" and nobody on the team does. So I think you need to avoid that sort of reasoning.

\[00:08:21.19\] But one of the upsides to Go, at least for me, is that even if somebody does that and leaves, it's not challenging enough that somebody can't pick it up.

**Chris James:** Yeah, I think I'd like to add to that... I think its simplicity plays a part in the hiring aspects of the organization as well. As I mentioned before, I used to work in a Scala place and we found it very hard to hire people who were technically strong enough to write good Scala; because it's really easy to write bad Scala. Whereas with Go - obviously, it's not entirely foolproof; you can make mistakes, and things... But certainly, over the past few years, when I've been working with Go and working with less experienced people, I find they can pick it up relatively easily. If they have some familiarity with another general purpose language, they can usually pick it up.

Usually, the biggest stumbling block is typically when you're starting off, you're starting with a dynamic language, like Ruby, or JavaScript, and then going to a statically-typed language is sometimes a bit of a challenge... But once you get over that, it's all curly brackets and variables and things really at the end of the day. So that makes it quite a safe choice for our risk-averse CTO.

**Jon Calhoun:** Yeah. I did notice that Dan in the Slack had mentioned that introducing Go tooling works well, or Go for tooling. And I think that's something that I've seen; I don't know if you guys are the same... But I've talked to a couple organizations where if they need to build a command line utility or something like that, either internally or for customers, they've found that Go is really nice, because you can get it to compile for every language, and all of a sudden you have this tool that would have been much harder to build in another language.

But more importantly, I think one of the key things here is that almost every success story I've heard has involved a project that needed solved, and they proposed -- well, it's small enough that they can propose "Let's try building a solution in Go." And I think that's one of the big keys if you're gonna try to introduce Go to your team - you can't just shove it in there at some point.

If you're starting a brand new project, you might be able to make the argument of "Hey, let's do this." But if you're not doing that, which I think is most people - most people aren't rewriting their app or starting something from scratch; so you look for some small thing that you can introduce Go with. I think that's probably one of the biggest keys to having a successful introduction.

**Mat Ryer:** Yeah, I think you hit the nail on the head when you said the word "small". I think that actually is a good thing to think about. If there is a small problem that you're gonna solve, especially one that -- you know, sometimes these tasks come up where you just have to process some files, or process some data, or something, get something ready... And maybe it's only something you're gonna run once, but it's your job to solve this problem - that's kind of a perfect candidate for the very early stages... Because it's something that only you are gonna be using, maybe, initially, but it's still an opportunity to solve that problem with Go, maybe even using some of the features of Go that you're excited about, like concurrency, and things.

I did this a while back with filepath.Walk, and I was walking files, and then playing around with different concurrency on the processing of those files. I had to do a simple task. I'm not great in the Bash command line; I'm sure a Bash wizard would be able to just do it with a single line of ugly something... But it was nice for me to explore the concurrency side of Go by tackling that problem. So in a way, I got to explore it myself. At the same time, I was solving a real problem that the team needed solving, and then it was nice to just do a little show and tell of it. I said "Look, this is how I did it. I put the code in the repo somewhere..."

\[00:12:08.18\] Somebody had a similar problem, and they were able to take the code and adapt it, and just solve that problem. And we ended up having like a file walker kind of little tool that we could reuse and just change for different purposes. So yeah, that thing about the tooling, when you've got some little tool that you need, even if it's not gonna be given to customers or even other team members, but solving a real little problem I think it's key.

And if it's small enough as well, you don't mind throwing it away. If it's a failed test, if you do a little thing and it's not working, or it's too hard... Or if you leave and the team are left with it, if it's small enough, then it's not that big a job to rewrite it or replace it if you need to.

**Chris James:** Yeah. I think it's important, particularly if it's unfamiliar with yourself or with people you're working with to try and keep the problem space small - I think a lot of people when they're trying to learn anything, sometimes they sort of take on too many things, and spin too many plates. I literally did this with Go. I remember reading about Go ages ago, and I thought "What I'll do is I'll learn Vim at the same time", and obviously, I just got nowhere. I couldn't do anything; I couldn't edit text, and I couldn't understand the language. I got into a complete mess. And I literally left Go for like six months while I tried this, and went "Well, I can't do this." And it was actually I couldn't do Vim, it wasn't I couldn't do Go.

**Mat Ryer:** You had to get the code right the first time, as you were typing it. You can't make a mistake.

**Chris James:** \[laughs\] Yeah. So I think definitely try and keep the problem space small; small little utilities. And I think it's also worth saying that like, I think what we're gonna say is that context is really important. Quite a lot of developers have a lot of eyes watching what particular work they're doing; we've got the JIRAs, and the tasks, and all this kind of stuff, and every morning you say what you're doing, and stuff... And if you're flippin' about it, you might get into trouble. But if you're saying "I'm going to solve this specific problem, which is a problem that's causing this pain" and then go \[whispering\] "in Go", then it's okay. You can just do that. You're adding value, but also proving that Go is a viable tool for your particular business.

**Jon Calhoun:** I think one key that's also easy to forget is the isolation... If you can solve an isolated problem, that helps a lot, because it's not shoved in there -- Mat mentioned something that processes files; that's isolated enough that if you need to throw it away and write something else in another language, it's really not that big of a deal. But if you throw it into this big microservices -- even that's not as bad. But if you throw it in this big thing where people then have to learn how to use it, and everybody on your team has to learn how to use it, that becomes a little more challenging. So I definitely think looking for those isolated problems help on that "I'm gonna solve this real pain problem", you whisper it's in Go, and then you say "It's this isolated thing." So if it doesn't work, it's really not a big deal. Like, "We tried it. We threw it out." And at that point you should have a pretty good idea of how to solve it in any other language, because you've already written the code; you're just translating at that point.

**Mat Ryer:** There's something about the fact that when you're doing something that you're really interested in, you tend to do a better job. I certainly do. But if I was using Go for the first time to solve something, I would be very motivated to get that to work... So I think that's something that tech leads and managers could take from this. You can enable that sort of situation, you can enable that environment where people are able to have a little autonomy and explore things, and try different things and do little experiments... Which may fail, and that should be okay. You can still do like a brown bag session on it and talk about why it didn't work, if you're doing a Rust one...

\[00:15:56.16\] Or in your case, James, maybe if you're stuck in Vim and you can't get out, or you don't know how to go and change some text, that could be an interesting little lesson, I think. So even if there are things that don't work, they're still interesting, they're still worthwhile, and they're still worth sharing, I think.

**Jon Calhoun:** Speaking of things that don't work, one of our listeners in the Go Slack had mentioned that one of the hard parts is finding talent. And I think you will possibly get that pushback from managers, where they're thinking about hiring new team members, and growing the team, and actually being able to manage this project... And I know that there are going to be real concerns about "We can't introduce ten different languages to our codebase." That's gonna be a challenge. We can't introduce a language where you can't hire people for that, and I think that might be one of the issues now with Go, at least sometimes - people think it's a new language, it's going to be hard to find people.

Probably, if I had a manager doing that, my response would be "Let me do something small and let me see if I can teach the team how to use it. If it's a quick enough transition, then that means we can bring other good developers on and they can learn Go really quickly." But if it's something where it takes too long or you feel like it's gonna be problematic, then we can revisit that. Kind of like you said, you can scrap it if it doesn't work. But that's kind of a way to do an isolated test and prove that it's quick and easy to learn... Because Go in my opinion is one of those things that while you might not be able to hire people that have been using it for ten years, you can definitely hire people that can learn it in a couple of weeks and do well with it... And I think managers also forget the other side of it, where there's people actively looking for jobs that have Go, because they want to learn it. And I think they discredit how much of a hiring tool that can be...

**Mat Ryer:** Yeah, I was gonna make that point. I get a lot of people asking me "How can I find Go jobs?" It's people that either have just learned it, or they want to learn it. Or usually they know it and they're using it for some of their personal projects, and they want to turn that professional. I get asked that a lot more than I get asked the opposite way around. Carl Mendez in the Gophers Slack mentioned that -- he says "A lot of recruiters still don't know what Go is, and it can put small orgs off." I think that's probably because they hear people telling them to Go a lot, in their job. I always tell recruiters "Go away." I'm constantly saying that. So no wonder... Maybe we need to spend a bit more time with those recruiters and help them.

**Chris James:** I think this is an interesting topic, and my own experience was -- about four years ago I joined a company, and I knew full well they weren't doing Go, even though I wanted to do Go... But I knew the CTO, and I knew the kind of environment he was trying to build; it was very much kind of like a learning environment, sort of empowering teams to build software the way they want to... So I felt quite confident that if I can get in there and I can get to know people, I think I could convince enough people to make that happen. And thankfully, I did.

I think the hiring thing's interesting... Depending where you are, there's just a small pool of people who describe themselves as Go developers. But as we said, I think if you're a decent software engineer, you'll be fine. Certainly at the place I'm talking about everyone was writing JavaScript, and it was all happy and stuff... But we built a community of people who wanted to learn Go. And it started small, and it grew bigger and bigger. And we did all sorts of activities, which I guess we can go into later... And eventually, we got to that critical mass where it was no longer seen as a risk to write systems in Go. It was like "Well, we've got enough people here. We've proven over the past few months we are a bunch of peope here all interested in Go. We had written some little command line tools, like you mentioned... And then at that point, it just felt like a natural thing to do, rather than big business case, with lots of stress behind it, and stuff. It just felt like this is an okay thing for us to do.

I'd say people should try and find good environments. You won't necessarily get to write Go on day one, but if it's a good environment, you might get to it in a few months' time.

**Mat Ryer:** \[00:20:05.14\] How many people was it for you in your case before you felt like you had that critical mass?

**Chris James:** To add some context, this place had about 30-40 software developers, I'd say... And at first I just talked to people about Go, going "It's really cool!" I got two or three people who were like "Yeah, actually this is pretty cool. I'd like to start to learn this." I think it's really important to have some allies with you to help you push this forward. Particularly if you're in a big(ish) organization, you can't spearhead this yourself. You need help. So I had those 2-3 people that I thought were gonna really help me out, and we started just doing things like book clubs, and doing activities at lunchtime, and stuff... And then yeah, I guess we got to a point where we had, say, 10-15 people who are described as "Wouldn't be offended at writing some Go." At that point, it was an easy conversation with a CTO, and I was like "This isn't just me making some snowflake system, and then I'm gonna run away and you're gonna be stuffed. There's gonna be plenty of people who can support the software."

**Break:** \[00:21:09.14\]

**Jon Calhoun:** So when you talk about a good environment, I assume one of the things that's there is like - if you work in an organization that's in crunch time pretty much all the time (which really means it's not crunch time) or even if you are in a good environment where... How do I -- basically, you're in a good environment, but you need to get a release out, or something needs to happen, I think one of the things that's key is you have to look for the right timing. You mentioned timing, too; you have to find a good organization that's actually open to this sort of thing, and then you have to find a good time for it inside that organization.

And I think that's something that other people forget, too - you didn't just jump in and say "Hey, let's go write some Go" and pushed for it. You waited until you had the critical mass, you probably waited until like "Okay, we don't have any major things that need to be shipped in the next month. We've got a little bit of wiggle room here." You know, you wait for all those things to sort of line up, and you have a team that's on board... Because I think even then -- if you love Go and you think it's perfect for the problem, if you have a team that just does not like Go, it's not gonna work there.

**Chris James:** \[00:24:00.28\] To your point - let's pretend that I did it all perfectly and executed \[unintelligible 00:24:02.15\] but actually, funnily enough, I think in my first few months there, we were doing an inception... And for those who are unfamiliar with an inception - it's a thing where you get everyone in a room and you have a meeting for two weeks... Which sounds horrendous, but actually, it can be quite fun and engaging...

**Mat Ryer:** To go into each other's dreams?

**Chris James:** It feels like it at times... But normally it's just some dull meeting room with some whiteboards, and things... But you know, you discuss the products, and you think how you're gonna build it, and stuff. I actually thought to myself - it's not unreasonable for me to say "This is a new project, so we could write a new system in Go, right?" And I remember saying it out loud, and I remember getting shot down so hard by a project manager... He said "Look, the developers spend time spiking out programming languages, and we've decided we're gonna write everything in JavaScript, because that lets us be efficient, and share code etc."

And I bit my tongue, but I definitely remember being really salty about him, and thinking to myself "Who is this guy to tell me what's right and stuff... I need to add a bit more empathy. This guy - and again, think about incentives, and stuff; his job, how he's judged is in how well projects are executed. And here's this dev who's barely been there like two months, \[unintelligible 00:25:15.18\] all this risk. Because we can talk about how simple and safe Go is, but it's still a risk to bring in a new language; it doesn't matter how simple it is, it is risk.

So the lesson I took from that is even though I feel like I'm right, you should definitely try and read the room, and think about "Is it really worth raising this at this point?" Because all it really did was it just sort of soured the rest of the meeting a little bit... Or at least it did for me.

**Jon Calhoun:** One of the things that's sometimes hard to grasp as a developer, especially when you're building your own personal projects, you're like "Okay, it doesn't really make much of a difference if I jump from Go to JavaScript." There's not that big of a risk factor there. There's some risk, but it's not as much.

But in a bigger organization, like you mentioned - and this isn't even like a huge organization, but if it's all in JavaScript, you can reuse things... So one example is some people build tools to generate the starting framework for a microservice, or something... And it generates a bunch of code for them, and if you jump to a new language, all of a sudden they lose all of that. Somebody has to somehow find a way to replicate it. And then there's the "How do we make the Go version act exactly the same as we expect the others to act?" Because I did see one project -- I think it was one trying to go from Rails to Go, and they tried to rewrite the entire API... And the issue they ran into was that Rails did a bunch of subtle things that they didn't realize with requests coming in, to manipulate data or do something else... And basically, long-term they learned that trying to get Go to act exactly the same way that Rails did was actually challenging, because there's all these things they didn't know that were happening, that were happening, that they had to account for, and they didn't wanna break anything.

And I understand that if you have a working ecosystem at a company, it's hard to wanna break that... And that's why I think sometimes finding those isolated problems, again, is just really valuable early on, because you can make the argument for "Okay, it solved these problems really well, and even if we can't use it across the entire org, we can at least use it to solve a specific subset of problems.

**Mat Ryer:** Yeah. In that case, it's probably Ruby having some magic, and over-delivering and under-promising... Where Go doesn't do that. Go tends to stick to the spec; it sticks to the letter of things, generally... Or at least there's not a lot of magic that's in there. That sometimes is something for sure to be aware of. But of course, that's a strength, as well as a weakness. The fact that Go is very expressive and easier to reason about, and there's no magic stuff happening...

And I think the kind of architecture as well probably matters, right? If you've got microservices architecture, one of the advantages of microservices really is that you can have different languages. Maybe they're better-suited for certain tasks... Each microservice could be a different language.

\[00:28:06.03\] Now, there's a cost obviously to that from maintenance, but you could probably make a good case in some situations for this component, this small component would be great in Go, and it's quite low risk; if it doesn't work, we've still got the other component. That's probably not the same in monoliths, I guess...

**Chris James:** Yeah, I actually made the exact argument when we finally made the push... Because the thing about microservices is they're all hype, and it's an interesting architectural approach, but it's not without its costs. There's a lot of cost to having a distributed system. In general, distributed systems are just hard, right? It's much harder than calling a function if you have to do it over the network, right? There's other things to consider. So definitely when I was talking this through the CTO, I was like "Look, we've put all this investment in a microservices architecture, and one of the definite selling points in my mind of that architecture is it gives you that flexibility to just write a service in a new language, or in a different language, or the best language for the job."

In our case, we had a service that we wrote in JavaScript - because we wrote everything in JavaScript - but it was on a very CPU-bound task, and it just ended up being incredibly slow... And it was becoming a real problem. We just couldn't actually deliver a good experience, because this thing was just taking forever to process these messages, and things. And I think it was a really nice example of just being opportunistic about it, and just going "Look, this thing is CPU-bound and it's really slow. We've spent months getting people involved with Go, and things...", so it became quite an easy sell; it wasn't like we had a poor-performing system \[unintelligible 00:29:46.23\] and just threw our hands up. We spent a couple of weeks trying to make it work, but we didn't really get it where we wanted it to go, so to speak... So I just went "Let's just try and write this in Go."

Coming back to the scope of doing things - because we had written the software, even though it \[unintelligible 00:30:04.13\] we understood what it had to do. We had a good understanding of the ins and outs and what it needed to accomplish... So therefore that kind of reduced the amount of stuff we needed to do. We had to reproduce it in Go, but it just reduced the amount of risk, because it was like "Well, we know what we need to build." We already had all the black box tests around it that we could just reuse. We just plug in a Hugo system and cross our fingers... And thankfully, it was like an amazing success story for us. We went from ten Node instances with half a gig or RAM each to three Go instances with 128 megs, and it was almost ten times faster... Which was awesome. It was probably one of the coolest moments in my career, being able to go "Look what we did. We've invested this time in learning this new language, and it's actually had a business outcome", coming back to our CTO friend. We managed to complete that circle of value, I guess.

**Mat Ryer:** I love that. You've mentioned a few things in that which I think are really worth pulling out... Knowing the ins and outs of a thing - so if you're gonna rewrite something that already exists, often figuring out the ins and outs is the hard bit. Implementation tends to be quite easy once you know what you're building... So yeah, that's another good point. If there is something that exists already, and you feel like Go can do a better job at it... And there will be lots of examples in Node; Go compiles right down for different architectures, it does do quite a good job at certain tasks, which other languages won't be able to compete with... So yeah, I think that's a great one. If you can do a better job in Go, that's gonna be a much easier story.

**Chris James:** \[00:31:58.07\] Yeah. And it was nice, because we were basically stuck. We just didn't really know what to do. "We can't just keep throwing more instances at it and hoping for the best." It was just gonna run up a ridiculous bill... \[unintelligible 00:32:07.27\] Two to three weeks. I think we can do it in two to three weeks. And we did. It wasn't the smoothest ride; there were some libraries that were in Node that just weren't in Go, and we had to write that kind of stuff... But still, when I look back at it, it couldn't really have gone better, to be honest. That was really nice.

**Mat Ryer:** I love hearing that. By the way, if you've just put two fingers up in the air and come up with two weeks, don't then deliver it in two weeks; it makes the rest of us look bad who can't estimate...

**Chris James:** Yeah, I'll get kicked out of the union.

**Mat Ryer:** Yeah. Although we don't know when.

**Jon Calhoun:** To add to that point - Mat, you were talking about knowing the ins and outs is challenging... Recently, I had somebody reach out to me, and essentially they were trying to rewrite a library; I think it was in Python. It was a Python library that would take SQL, and I think was trying to spit out CSVs, or something like that... I don't remember exactly what it was doing, but essentially their confusion was that they were like "Go was supposed to be faster than Python." They wrote this tool that does this, and it wasn't faster, and they were like "I don't understand why it's not faster." And I do think that there are going to be times where either you don't understand the ins and the outs, as you described, or you don't understand the bottlenecks. Because in this case, there's a hundred different ways that it could have been bottlenecked that weren't the language. It could have been the database you're working with, it could have been writing to a file, it could have been a bunch of other stuff; who knows.

So if you do have one of those cases where you're trying to bring Go to your team and it doesn't work, it doesn't actually give you those positive results you're looking for, how would you guys handle that, I guess? Would you give up on Go, would you try to tell them "Well, this wasn't the right one, but it was worth a shot"?

**Mat Ryer:** Great question.

**Chris James:** Yeah, it's a great question. I think in general with software development it's a real skill to try and lift up risk as soon as you can. That's the big thing about iterative development - you try and figure out what are the riskiest things, and try to tackle them first, so you can get an understanding.

But I also think there's always a risk of introducing Go to your team that you're not being honest. We all love Go, and it's great, and we don't have to list all the reasons why, but it's not the magic silver bullet. It has its downsides and things, and it's always important to be quite realistic about this kind of stuff... And I think if you're going into an endeavor where you don't truly know if it's gonna be more performant, you need to lay that out upfront, and just go -- I mean, this is what I did with my thing. I said "I'm pretty sure that this will be way more performant in Go, but please don't fire me if it isn't." It wasn't my exact wording, but... You know, it's about expectation management, I think.

**Jon Calhoun:** I think that makes sense. My brother was working on a project once, and he was doing something with WebSockets; it was really simple, whatever he was doing. It was like a simple live chat server that they didn't need to persist records; it was just kind of like "If you got it, you got it. If you didn't, great." And I think he was using Fyne... Is that the library that's in Ruby, or JavaScript, or something? So he was using some library to do the WebSocket stuff, and he found that under heavy load, this project was basically coming to a crawl. The WebSocket server was the issue.

He had looked at some things to scale it up and to fix it, and at one point I'd basically looked at it and I'm like "This thing has way more than what you need. What you're actually looking for is super-simple. Let's see if we can write something in Go." And I did what you said, Chris - I told him upfront "I don't actually know if this is gonna be faster, but I have a feeling it will be, because we're gonna strip out everything we don't need, we're gonna keep it super-simple, and Go should be good at this. It should be good at handling many different requests on the same server, and doing all of that stuff."

The end result happened to be very positive on that one. The server stopped crashing, and everything else that was going wrong stopped happening... And it worked really well. Luckily, this was a project that literally I think the Go code was 150 lines of code, or something... Something super-simple.

\[00:36:05.02\] There was some stuff in front of it to deal with authentication or whatever stuff it needed to do, but the actual Go part was so small that even if it didn't work, we're like "Well, it's not enough code that it's a big deal if it doesn't work." And I think that was one of the nicest experiments I had with that, where we're testing it -- and this was before I knew Go that well even, so it was kind of a nice "See if it works and get some hands-on experience."

But you're completely right, you have to be clear with everybody ahead of time that you don't know for sure this is going to solve the problem... But if it doesn't, I think you also learned something. You realize maybe "It's not CPU-bound because of the reasons we thought."

**Mat Ryer:** Yeah. So I guess you should measure and really understand that first, as you're putting together the hypothesis of why you think Go is gonna do a better job... Because that is quite a good point.

One thing that was mentioned in the Gophers Slack - and by the way, you're welcome to join us in Gophers Slack in the \#GoTimeFM channel; that's my marketing... Someone just did, so it works. \[laughter\] Someone mentioned this earlier, and this is something I've found - I worked with a team who had different languages, and over time they found that the bits that were written in Go kind of just kept always working. And that wasn't true for other situations. I think it was wrapped up in dependencies changing, and other things -- not just about the language, but other things going on in the team, too. But generally, the feeling was that the Go code was the stable code. This was the code that you could start to rely on. And in that case, it was actually because of testing. It was because testing is a first-class concern in Go. So you are encouraged that. And I don't need to tell you, Chris, because you wrote Learn Go With Tests... But yeah, having tests, caring about tests and having them for your code does improve the quality and stability of that code. So maybe there's something in that, do you think - the fact that testing is a part of the toolchain, part of the community, part of the ecosystem and the spirit of Go helps create more robust things?

**Chris James:** Yeah, I think -- as we said, we need to be honest and realistic; you can definitely write automated tests in other programming languages, to be clear. But I think you touched on an interesting point where you talked about the community aspect of it, and the conventions.

It feels like because tests is such a first-class citizen - it's right in front of you; you don't have to think about what particular testing library you have to use, or mocking frameworks, and all this business... It's right there in front of you. Because it's accessible, you do it. And I've found a lot of developers who have done some automated testing and things, but they were still quite new to it... But by doing testing in Go, where it's all very strict back, and there's not a lot of fuss and nonsense, you can just start learning the fundamentals a lot easier, and I think that really helps to build that more robust software. And I support benchmarking also fits into that as well. It maybe felt silly at times, but sometimes I was just writing benchmarks with test just because I could. It was so easy, I was like "I'll just do it for fun." Because why not? It's basically the same as writing tests, which I think is such a smart move by the language; you don't have to learn two different things, really. it's kind of the same thing.

I think the cultural thing is a really interesting thing across all programming languages. They all have their cultures, and things. Ruby was also very up on the testing thing as well... Yeah, it's an interesting point to me.

**Mat Ryer:** \[00:39:55.00\] Yeah. And the fuzzing proposal - a design proposal - is the same; they're folding it into existing -- the way that tests already work today. I look forward to Learn Go With Fuzzing. That book's gonna be chaos.

**Chris James:** \[laughs\]

**Mat Ryer:** But you're right, testing is -- a lot of decisions are made for you with testing. So that takes the cognitive load away, and then that does make it an easier path, doesn't it? Same for gofmt, the fact that the code is all formatted the same. There's probably a lot of other things where decisions are taken away, that actually helps when you want to introduce Go, because there isn't a debate about every little thing. It's like "Well, these things are just sorted out. This is how you do it in Go." And then you can get down to the important bits, which is hopefully solving the real problem you were gonna solve.

**Chris James:** Yeah. I think when I was introducing it, a few of the senior developers definitely gave some grumbles when there was no collectiony things, like mapping of a collection, or filtering, or anything like that... And I kind of just said "Man, just get over it." The thing is, there's just one way to write a loop; we don't have to bikeshed about forEach, or map, or filter, or fold left, or fold right... And all this kind of stuff that in other programming languages feels powerful, feels alluring, and it feels very intellectual as well, at time; "Oh, I'm gonna think about this, and think about this..." You know, it's liberating that with Go it's just like "Oh, you need to iterate over something? Well, you know how to do that, because you learned that on day one", and that's it.

**Mat Ryer:** That's right. And then you don't need to learn and remember what all the different variations do, like many, once, find, select... There's loads of them. And by the way, they will almost certainly come to Go if and when generics comes... But you're right, there's something quite nice about the fact that every time you want to iterate over something in Go, it's basically the same.

**Jon Calhoun:** I think there's a lot of benefit, in the sense that not only is that stuff not there, but I think people don't abuse things to get the results they want, not realizing the ramifications of it. An example is people might do something where they're iterating over a list multiple times, and making their code really inefficient, because they just don't realize that's what those things are doing... Because on their screen they're writing one line; they're like writing "Find this thing". They don't realize it has to go through the whole list to find it. They don't really think about any of what's actually happening. Whereas with Go, you have to explicitly tell it what to do. So you're very clearly saying "You're running a for loop here. There's no hidden for loops; you're running a for loop." And that probably helps people write better code, or clearer code, at least for junior developers. I think senior developers probably understand what they're doing, but junior developers - I think it's where you can run into some of those issues.

I did have one question for you guys, I guess... Earlier when you were talking about testing, and that being part of like the Go ecosystem, and everybody really pushes for good tests, one of the things that stuck out to me at least was that when I wrote code in dynamic languages like JavaScript or Ruby, it felt like it's not that people didn't want to write tests, it's almost that they gave up on them after the tests didn't do what they wanted them to do, or they didn't catch the bugs... And one of the examples I can give is you get nil passed in somewhere, and then all of a sudden everything just breaks, and all of a sudden you're writing a test for like "This shouldn't be nil", or something random like that.

With something like Go, with the type checker and everything else being there because it's a compiled language, static types, it was almost like people complained about the extra work upfront, but the end result was that it allowed you to write tests that focused on the things that actually mattered, and the things that you wanted to test, versus -- I felt like in some of those dynamic languages, people gave up on tests because they got so sick of just writing a bunch of silly tests for all these weird cases... Really, they didn't wanna be testing those. That just felt like a waste of their time. And in reality, you wanna test bigger-picture type things sometimes. Or like if I run this function that's supposed to do X, Y and Z, I wanna see that it does X, Y and Z. I don't wanna go through and make sure that it iterated over these things in this correct order, or did something weird... You don't care about that.

**Mat Ryer:** \[00:44:15.01\] Yeah, that's especially true in JavaScript, or dynamic languages, because I did find myself a lot of the time type-checking, making sure that it behaved when you passed incorrect things in. It's asking for a string, but I'm gonna pass it the entire window. Totally, you can do that in JavaScript. Just give it the window.

So yeah, when I wanted really robust code, I did exactly that - I've found myself using testing so that I could make sure it would misbehave properly, or it would gracefully handle those weird things. So yeah, again, I think the minimalism and the simplicity in Go, strong types - its design helps with all that.

**Chris James:** Yeah, I can relate about a story I was talking earlier, about how I made the leap from dynamic to static for the less experienced developers was a bit of a challenge at first... And one thing I did was we had some kind of outage because of one of these silly things, where we pass through an object instead of a string, or something like that... I can't really recall the exact details. But you know, we had the post mortem it and stuff, and we were "Alright, we'll write some tests to make sure this never happens again."

So again, I'm writing these things, going like "Make sure you use \[unintelligible 00:45:24.20\]" and all these things; these kinds of tests that feel silly, but actually you need them, otherwise you can run into trouble... And then I was able to at the following lunchtime club go "Here's that same problem in Go, and it doesn't exist. I'm running the compiler, it won't let me do it. I can't even run the tests. It will not let me do this." And I like to think that was a bit of a \[unintelligible 00:45:47.23\] moment for a few of them at that point as well, and they were like "Okay, I see the value here."

It's just doing some of the thinking work for you, because it's too much. Programming is hard enough, without having to think about whether you can pass a string through a function or not.

**Break:** \[00:46:07.22\]

**Mat Ryer:** There's another thing... Sometimes it's tempting to really flex and use some of the language features to their fullest, and really show them off... But you can quickly end up with some complicated-looking code, and it'll probably go against your cause if you do that... One example is channels. There are some great things you can do with channels in Go. But actually, if what you really need is just simple concurrency, just consider goroutines and a wait group. So just learn the wait group, and goroutines, and how that works; you can do a lot, it can go a long way with just those two little bits and pieces.

I think that probably applies as well... It's like, yes, we want to use all the cool features, but remember, one of the key value props of Go is that it's readable and it's maintainable... So that means it's worth taking the time to make sure that you write good, simple code, as simple as you can get it. What you really want when you show it to somebody - you want them to get it, you want it to click; "Yes, okay, I understand this." If, like with Rust, you're doing something and it's amazing what it's doing, but it's complicated, that's just a cognitive barrier. And no one likes other people being so much smarter than them. And you can make people feel silly just because of writing complex code, and that's worth avoiding, I'd say.

Are there any other reasons why you shouldn't introduce Go? I think that's one, for the sake of it using those complex language features. I think another one worth avoiding is tech wars. There's almost certainly no point having the argument that Go is better than this language, and getting into that. What do you think?

**Chris James:** Yeah, this is definitely something worth talking about. I think internet forums about programming are just the worst, right? You get these holy wars about Rust versus Go, and C\# versus Java, and whatever... And the thing is, you think it only exists on the internet, but it happens in workplaces too, and it can become incredibly toxic.

I remember a long time ago basically getting so fed up with it I asked to get moved off of the project... And I looked back at it, thinking just how ridiculous it is that basically I couldn't stand a programming language war anymore, that I had to get off the project... But it's just what happened. And it's very easy to slip into it. I don't think anyone goes into the intention of being difficult, and things... It's just because we get passionate and we hold these things quite dearly, we can come across as being quite difficult and disrespectful to other people's decisions.

So I think it's important to try and -- you should be able to speak positively about Go without disrespecting other people's opinions and decisions that have been made. In general, there's nothing worse than a new person coming in and saying how all the decisions that were made were wrong, and they're stupid, because they never understood the context behind those decisions... It's very grating.

So you should be able to speak positively about Go, and that should be enough. And as we said, just be honest and realistic about it as well. It's not gonna turn water into wine. It's great, but be realistic about it. Don't insult people's intelligence about it.

**Mat Ryer:** Hm. And if that doesn't work, you can always incept them and go into their dreams and convince them that way.

**Chris James:** Indeed, yes.

**Mat Ryer:** I know that's how you do it, James.

**Jon Calhoun:** It is interesting that as developers we love to jump into projects and immediately think "I could do so much better if I rewrote this from scratch." I think every developer has thought that. And then the more you work on a project, the more you make changes, the more you realize that there's a lot more complexity there than you realized...

**Mat Ryer:** Yeah.

**Jon Calhoun:** \[00:52:01.00\] I think just being aware of that, and empathizing with the fact that not only did they have all that complexity to deal with, but they probably didn't know about it all upfront; they probably had to figure it out as they went, which makes things even more challenging.

**Mat Ryer:** Yeah, especially if not everything is described in a test. Sometimes there's little changes that are made throughout the codebase that have a significant impact in some cases, and they aren't always covered explicitly with test code... So they're sort of hidden features, really. That's true.

But also, rewriting -- I think I said this on last week's show... Hemingway said "There is no writing, but rewriting." I've paraphrased that now. Rewriting stuff does make it better. That's why microservices and small problems - that's why if you can rewrite something like that, you may have a good chance of making it better. But of course, you do have to be careful of what that thing is... And it's about those ins and outs, again.

**Jon Calhoun:** I think the key is -- like, when Hemingway talks about rewriting, I doubt he means...

**Mat Ryer:** Go code.

**Jon Calhoun:** ..."Throw your entire book out and just start writing the whole book from scratch and it'll be better." He probably means "Go find a page and modify that page", something small and manageable. And I think the problem is people take quotes like that or take ideas like that and they think "Oh no, I'm just throwing the whole book out the window and we're just gonna start from scratch", and it's like, that's gonna be terrible. It's gonna be terrible for authors.

**Mat Ryer:** So you think Hemingway would have been a microservices kind of guy.

**Jon Calhoun:** I don't know if he would have been microservices, but you don't even need microservices to rewrite parts. If you have a monolith, you can literally be like "Okay, I'm gonna take this one thing that we're doing in our monolith and I'm gonna make it a small API that we communicate with. And you don't have to have microservices everywhere; it could just be like "This one thing's a small API", and you could go write it in another language. And it's gonna take a little bit of work to make that all work upfront, but it's not impossibly hard... And it's way safer than "Let's rewrite the whole thing."

**Mat Ryer:** Yeah. So you should be considerate to what's really going on in your team, and the goals of the team. That is gonna be important; it can't just be "We're gonna just do this because we love it, or it's the best thing." You have to be careful and considerate of what's really going on, absolutely.

**Jon Calhoun:** We mentioned it earlier, but if your team's in crunch time, that's a bad time to try to introduce a language. But even then, a rewrite or anything like that - you have to realize that a rewrite means you probably aren't shipping new features until the rewrite's done. And that could be six months easily, depending on the scope of the project. And that is never good for business, for the most part. If it fixed a bunch of issues, potentially it could be, but for the most part, you might have better luck spending those six months just doing bug fixes and hunting down issues and solving anything you can.

I think that if you're going to push for Go, you need to find the right problems for it, and if you're trying to push it for the wrong problems, it's just not a good idea. Another example - Mat, you asked for reasons why not to... One example is if you have an entire team of expert Rust developers, you're probably not gonna get a lot of value out of jumping to Go. Rust is a harder language, in my opinion, to pick up and to get everything. If you have a team that's all senior developers that are doing great with it and they really love all the things that it provides, I would say that trying to introduce Go there is not a good idea.

But if you have a team that's maybe writing some JavaScript, or some Ruby, or something like that, and having some of the stuff written with a compiler, and type safety, and maybe a little more performance, and a little bit of simplicity so that junior developers can jump in and pick this up is at all something you want, that's fine. But I think there probably are situations where your team just decided that you want senior developers who've been writing Rust for two years, and that's what you're looking for. And if somebody wants a job there, they need to learn Rust really well. I think that's not necessarily a terrible thing; it's not the most inclusive thing in the world necessarily, but I think every organization has to decide what's best for them, and if you're pushing Go to an organization where it's just completely against their core beliefs and values, it's just not gonna work.

**Mat Ryer:** Well, we've reached that time again... It's time for Unpopular Opinions!

**Jingle:** \[00:56:21.08\] to \[00:56:40.01\]

**Mat Ryer:** So... Jon just finished his drink... \[laughter\] So do we have any unpopular opinions?

**Jon Calhoun:** I need a new drink. Is that one unpopular...?

**Chris James:** I've been trying to think about how many bridges I want to burn ever since I knew I was gonna be on the show... I was thinking "Where should I go with this?" I'm trying to keep it sensible, so... Here it goes - Go is just a general purpose language, and it's not gonna solve all your problems. A big theme of this conversation is how context is important, and your work environment is important... And if you want to add Go to your organization, you need to understand the problems \[unintelligible 00:57:18.25\] But if your environment is constant crunch, and all this business, even if you could wave a magic want and make everyone write Go, and ignore all those problems and everyone's now writing Go, your job might be a bit more novel for a while, but you're not gonna enjoy it.

And to make sure I stand by this unpopular opinion, I did literally go from a role of writing Go most of the time to writing Kotlin, which is obviously a sacrilegious thing to say on this podcast... But I did it because the environment and the opportunity - everything else around it seemed wonderful.

So I think it's important to just have a bit of perspective around programming languages. They do have strengths and weaknesses and things, but they're not the ultimate source of success for general software engineering.

**Mat Ryer:** Yeah, it's what you do with them.

**Jon Calhoun:** I don't think that's gonna be an unpopular opinion.

**Chris James:** Ah... Damn.

**Jon Calhoun:** I think you need to burn more bridges.

**Chris James:** Well, give me a minute...

**Mat Ryer:** We do test these, by the way. The @GoTimeFM Twitter - we'll do a poll...

**Chris James:** Oh, I saw. yes.

**Mat Ryer:** So we'll find out if that really is popular or unpopular. If it's not unpopular, unfortunately you are contractually obliged to return and do another episode.

**Jon Calhoun:** This is how we get guests.

**Mat Ryer:** Do you wanna have another go?

**Chris James:** Alright, one more. I think the Venn diagram of Java best practices and Go best practices is not a big circle, but it's not as different as people think it is. I think a lot of people like to talk about Java, and they're normally talking about bad Java, like an abstract FactoryBean, or whatever... Good Java developers don't think that's good either. You think about what good Java developers think about - it's all generally good software engineering stuff, like single responsibilities, separation of concerns, loose coupling, all that kind of stuff.

**Mat Ryer:** Right.

**Chris James:** So hopefully that will be unpopular...

**Mat Ryer:** That's an interesting one. What stands out to me is the type hierarchies. You don't really do those same type hierarchies; you can't do them in Go.

**Chris James:** Right, you can't.

**Mat Ryer:** But when used properly, in languages that support it, they can be extremely good. The trouble is it gets abused, and we sort of then compare it to the abuse of it. But there is something to be said for the fact that you can't do it in Go. That kind of gives you a head start, or at least a better chance of writing cleaner, simpler code.

**Jon Calhoun:** I think you're right that Go probably makes it -- that you have a better chance at it, writing the good, clean code... But I think any language, given enough time and enough environments, some group will find a way to write awful code, that people hate. If that's their version of that language, they're gonna be like "This was terrible." And that might happen with Go, I don't know... There might be people who just write Go exactly like some other language, and it just does not work well with the language, and people are like "Oh, it's a terrible language because of that."

\[01:00:18.04\] I talked to somebody who claimed they basically saw code where they were using panic and rescue essentially like exceptions. They just decided "We're translating exceptions to this code, and that's what we have." And if you see that, you're gonna be like "This is terrible. Why didn't they just do raising exceptions? It would have been so much easier." And I can completely understand that; I just think any language, given enough time, people are gonna find a way to write what's effectively code that's bad, and that people don't like

**Chris James:** I think what's interesting is - I think someone touched upon it - that there's definitely some anxiety around generics in Go. I think a lot of people seem to think that if and when generics come to Go, it will suddenly turn to Java. I think that's an understandable concern, but we were talking about culture around programming languages and things, and at least I'd like to think that the culture around Go will mean that they will be used tastefully, at least most of the time.

When Java was first out, software developers were wearing suits, and UML was all the rage, and things; it was a completely different period of time and a different culture compared to what we have now. So I like to think it'll be okay, but I guess we will see.

**Jon Calhoun:** I think it's gonna be like when developers first go to Go, they use channels, concurrency and that stuff way more than they probably should. At least that's been my experience with pretty much every developer who's tried Go out - they see these cool things and they wanna try them, and they use them too much. Then they realize that it's too much and they step back.

I'm guessing generics are gonna be the same thing, where because it's cool and new, and they can do things they couldn't do before, you're gonna see a bunch of libraries that really shouldn't exist, that don't need to exist... But I think that at some point people are gonna step back and be like "Alright, it was fun doing that", but really for trying to get stuff done and get work done, let's focus on "Do we need this in generics? Do we need to actually do that?"

**Mat Ryer:** Yeah, one argument for that is that the standard library should get a good set of useful generic things, in the standard library, so that we don't end up in a situation where all these different libraries that work slightly differently, and they're probably all gonna have the same names of the methods, and things... So I think they will do that; I think they will probably add -- at the same time that generics happens, there will be a set of generic data structures that we can coalesce around, maybe.

**Jon Calhoun:** I think they'll also have to push back on that some. Java is an example of like every data structure you can imagine is probably in the standard library. I remember a friend of mine had an interview question at one point where they asked him to essentially build a least recently used cache with -- I think it was just basically a least recently used cache. But there's a linked HashMap in the Java standard library, that is effectively an in-memory least recently used cache... Because it used the link list to keep track of which one was used most frequently, and then the HashMap is how you access each thing directly when you need to access it... And I know when he got asked the interview question, he basically -- because they didn't actually phrase it as like you would know that's what it was... But he said "Do you mean you just want me to use this?" and basically wrote the code real quick on the whiteboard (it was like a whiteboard one). And the interviewer looked at it and basically was like "Yeah, if you know that's in the standard library without looking, you probably don't need to write this. You probably understand it well enough that it's not a big deal."

But it was just interesting... If he'd been writing in any other language, that wouldn't have been a viable option; he would have had to actually write it out. And I'm wondering in Go if they're gonna have that issue, where people want every obscure data structure in the standard library, even though it might not necessarily need to be there.

**Chris James:** Yeah, it's a lot of weight on the shoulders of the Go team... Because I was thinking about culture, and it's almost like the standard library informs some of the culture around the Go community, I feel like. A lot of people talk about if you wanna get an example of some best practices, there's a lot of good best practice within the standard library. You can just dig in there and have a look and see how it's done. So yeah... Good luck to them.

**Mat Ryer:** Well, I'm afraid that's all the time we have today. Chris James, thank you so much for joining us.

**Chris James:** It's a pleasure.

**Mat Ryer:** Check out Learn Go With Tests. I recommend it. Jon Calhoun, you're coming with me to the local sheriff. I'm claiming that reward. See you next time!

**Outro:** \[01:05:06.03\]

**Chris James:** I can't believe how many times you called my James, Ryer.

**Mat Ryer:** I didn't call you James, did I?

**Chris James:** You called me James like three times. I was like "Are you kidding me?" \[laughter\]

**Mat Ryer:** Oh, no... Did I really? That was because I made the joke at the beginning.

**Chris James:** Yeah...

**Mat Ryer:** Oh, you're joking. I'll tell you what - hang on; let me just record a few Chris'es for the edit. Chris. Chriiis...! Chris! Chris...? Chris. Yeah, that'll do. Chris?
