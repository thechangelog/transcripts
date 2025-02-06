**Jerod Santo:** So what would happen if you took SQLite, the most widely-deployed database in the entire world, and you rewrote it in Rust, with some new twists and new ideas? We are all going to find out because Glauber Costa and his team at Turso are working on it. It's called Limbo. Glauber, welcome to the Changelog.

**Glauber Costa:** Thank you. It's great to be here.

**Jerod Santo:** It's great to have Adam here, despite flu season hitting hard in the Stacoviak house...

**Adam Stacoviak:** Oh, man...

**Glauber Costa:** It sounds great, though. Adam, you sound great.

**Adam Stacoviak:** Thank you!

**Glauber Costa:** You'd mentioned you're on the tail end of the flu, but you don't sound like it.

**Adam Stacoviak:** I've been trying so hard to sound better... So thank you.

**Jerod Santo:** Where should we start? I think the story goes back quite a ways. I remember LibSQL, which was a couple of years ago now, your guys' effort to create a different open source SQLite. I thought SQLite was open source and public domain. Can you tell that story?

**Glauber Costa:** Oh, happy to do that. And the story - in a sense, it's still the same story, so I think you hit the nail on the head there. It's just really how it started. I don't feel this is a completely different thing, what we're doing now. The story there is that we were using SQLite in our company. Pekka is my co-founder. We founded a company... If you happen to stumble upon it, I'll just mention it here by a name; it's called ChiselStrike. And it was in the API space, we were doing a bunch of things, and we were using SQLite very heavily in that company. And the reasons we were using SQLite were reasons I think that a lot of your audience will understand and relate to. Look, you would just do npm install, the name of the package, and then everything's there. Your database is there, everything is there, everything works, you don't have to install anything... So SQLite for us always had this appeal of a database that is just always working, and then you can build stuff around it, and it's just always there. So there was always something that was very appealing to us. However, we also stumbled upon this thing a little bit about SQLite not being open source. So let me address that.

SQLite is a public domain software, which is technically a difference that doesn't matter. I think only a lawyer would be concerned with what is the difference between public domain and open source. For all intents and purposes, it's the same difference between like the BSD license and the MIT license. It's minor. Nobody cares. I don't care, and I think nobody else does either. But SQLite is, according to their own website, by the way - this is something that they put in big, bold letters in their website - open source. Again, I'm not claiming that they're wrong to say that. It's all good. Open source, but not open contribution.

So when people think of an open source project, there are two things that come to your mind. The first one is the code is open. And SQLite is that. But you also think about -- instinctively, "Well, the code is going to be on GitHub somehow, and then if I find an issue, I can go contribute to this project... And I have some source of ownership to the code. It's not just that I can see the code, I can also modify the code." So that's usually classically one of the tenets of open source. Now, SQLite is not like that. The maintainers of SQLite, the creators of SQLite do not take contributions. This is not something that we're saying, this is something that they're saying.

\[07:57\] And yes, I mean, I think it happened in the past that people managed to contribute to SQLite in very special occasions, but it's not a project that is designed to take contributions from other people. So that is how SQLite is.

We started running into a couple of, hurdles with SQLite. Part of that is that we wanted to deploy our SQLite databases to the edge. We wanted to deploy it in a way that was replicated, we wanted to do things like read replicas, and we wanted to put it to run on call for workers, and all things like that. And we considered this a good thing for our project. And technically, we knew we could do it. And for context here, Pekka and I, we've been working together.

Pekka is my co-founder. We've been working together for 15 years now. We met each other when we were both working on the Linux Kernel. Pekka was one of the maintainers. Each one of us worked in Linux for almost 10 years, the first five without knowing each other; I think we knew off each other, but we never met. And in the last five years, very closely to each other, where we developed a good friendship. After that, we actually joined a startup that also became a database company. We spent eight years doing that. So we felt technically like SQLite, all things considered, is pretty simple, given the scope of things that we used to do. So technically, we can make the changes that we believe we can. And so let's just come up with our own version.

And we saw at the time a lot of people dancing around the subject. That's what we saw. So there were some projects like LightFS that were super-interesting projects. Dqlite... We saw lots of people trying to get SQLite to work as a distributed system. The problem that we saw with all of those projects is that they were all, again, dancing around the subject that SQLite cannot be changed, so we're going to create layers and layers and layers around SQLite to help with that. And for us, it was -- technically, this is actually a pretty simple problem. You just have to change SQLite here, here, and here, and you're good to go.

And I think the last piece of the puzzle, or maybe the two last pieces of the puzzle - number one is that we were very concerned with who's going to want to run our SQLite plus patches, because SQLite is a very trusted project... So you make random modifications to SQLite, and everybody starts distrusting what you're doing. So we knew that - look, the solution to this problem is that we should just create an open contribution version of SQLite, because now it's not like SQLite plus Fink, it's its own project, and then people come to trust this one project. And with that, the diagnosis that we had at the time was like "Hey, SQLite is great code-wise. The thing that is holding it back in our reading is exactly the fact that it cannot take advantage of the dynamism, of the creativity of a truly open source community. So let's create that."

And the last piece of the puzzle is that at the time, we were actually discussing "How do we do this?" And one of the options was maybe we should just rewrite SQLite. And we had a lot of experience in our previous company, Scylla... Scylla was a re-implementation of Apache Cassandra and C++, fully compatible. And maybe we over-indexed in the fears that we had going that route. We said, "Hey, the problem with Scylla is that it took a long time for us to put in the market. SQLite is much smaller, so maybe we can do it." But maybe because we had just come from an experience where we wrote a database, we figured that forking was a better strategy.

So at the time, our decision, after much deliberation was "We're not going to rewrite SQLite. We are going to fork it instead." The main advantage is that you have something tomorrow, because you start from a codebase that is already working. And then we're going to start making changes to that.

\[11:59\] So that was LibSQL. LibSQL was essentially at the time -- and the story of Limbo, if I had to tell the sanitized version in which the fork never existed, it would be the same up until this point, because all of those things, all of that, it's still valid. It's just that at the time, a year and a half ago, we decided that forking was the best alternative. And now - and I'm happy to go into the why, but now we decided to try "Okay, what if we had done that, one of those options that we considered? What if we just rewrote it?" And then when we put it out there, the results were -- I've never seen anything like that before. So that's the story.

**Adam Stacoviak:** I think the public domain-ness of SQLite is unique. I think the not open to contribution is also quite unique. Very valid in the "open source world." And even, they say on this public domain page they have, where they say "Warranty of title." So if you are a company that needed something where you needed to be indemnified against the copyright infringement or anything happening inside this codebase, it gets to be a little bit hairy trying to use SQLite in unique ways beyond. So it kind of makes sense, some of the challenges you had. And then maybe the fork made the most sense, but ultimately, the rewrite seems to make the most sense, because what you want is the attributes of what SQLite offers the world, but not the... And I don't want to say it like a negative thing, because it's great, but it's dominated very well in the marketplace. I mean, it's used on Mars, I believe, right, Jerod? This is now on Mars...

**Glauber Costa:** It has trillions of databases deployed, right.

**Adam Stacoviak:** Yeah. I mean it's not... And Dr. Richard Hipp is one of our friends, we love him. We think he's an amazing person. But I think you're right though that the public domain-ness and the not open to contribution makes it challenging, because that -- and Dr. Richard Hipp even said on this podcast in the past that the test suite is proprietary in the fact that it's not in the open; you can't see it. So making these large-scale changes -- so to build on top of what is SQLite, if that's your desire, becomes just problematic.

**Glauber Costa:** This was one of the big contributors for us to revisit that decision, was exactly the test suite. And again, it's not that we didn't know about it, it's just that we thought things would go one way. But look, I always love to - if I may, to use opportunities like this to clarify something... Because when you're telling a story, when you're saying something, it's easy for people to misunderstand you, so I always want to make this 100% clear. There's nothing wrong with SQLite and the way they manage their community. Sometimes people assume that because we went this direction, we believe that what they're doing is wrong. And I want to clarify that that's not the case. I think the beauty of having different people with different points of view, coming from different backgrounds and doing things differently is exactly that you can experiment with a lot of models. And those models have advantages and disadvantages, and it's fine... So that's not the way we -- we believe, we truly believe, and the goal we have with Limbo now is really to replace SQLite. So we believe that we can something much better if we're able to tap into the creativity and the dynamism of a modern open source community. We believe that. Which does not mean that what they're doing is wrong. It's just the choice that they made, and we're making a different choice. It's okay, right?

**Jerod Santo:** Well, I'm glad you make that explicit, because as an observer, I remember your initial announcement, and maybe it's because of maybe the social baggage of what a fork implies...

**Glauber Costa:** Exactly, yeah.

**Jerod Santo:** ...but my initial impression was - and I don't remember the words that you use anymore; it was two years ago. But I was like - you and your team seemed a little bit upset, or... You know, "We're kind of disappointed with this, and so we're going to fork and do it a different way." And it's hard to do that without ruffling feathers, or without getting -- even if you don't mean to, people think that you're angry, or mad, or whatever, you know?

**Glauber Costa:** \[16:05\] Exactly. And we did spend a lot of time, by the way, crafting that message... But regardless of how much -- there's always some room for misunderstanding, which is why I always appreciate... Now, I also don't want to run from it, and I want to make something clear. We disagree, technically, with that decision, right? It doesn't mean we think it's wrong. There's nothing -- we don't think badly of them. They clearly created something very successful. But the way Pekka and I always run open source communities and the way we always participated in open source communities... For us, this component of being able to tap into the creativity of the community was always something very important.

And you have to put it in context as well. Pekka and I grew up in the Linux Kernel community. And a lot of people say this about SQLite; and with that, I disagree. SQLite, being what it is, has to be kept as this very small thing, because that's the whole beauty of SQLite. And again, I disagree with that, because if you look at Linux, Linux started as this project that would only run on x86 computers etc. And today, it is an operating system that runs everywhere. It runs very well on the server... Pekka and I worked together in memory management for very big box machines, like how to make sure that when you have two terabytes of memory in 2010 - which was a lot of memory back then; it's still a lot of memory today... But those algorithms to manage memory don't take three minutes and hang up the system. It's a problem that doesn't happen in embedded devices, and Linux still runs on embedded devices. So through this big community, you actually can create something that runs well everywhere, and don't necessarily have to make those compromises.

So we don't agree that SQLite has to be protected and has to be maintained by just a single individual to be the success it is... But look, who knows? Maybe I'm wrong, maybe I'm right, but we act based on what we believe. We don't believe there is anything wrong with what they're doing. We just think that it could benefit from a different direction.

**Adam Stacoviak:** But you do believe that you can replace. You said "We believe we can replace SQLite."

**Glauber Costa:** Yes. 100%. And we will. And I want to clarify that now, because with LibSQL it became very clear to us in maybe a month that that was not going to happen. So with LibSQL -- I joked about it today, we had this goal of replacing SQLite for 10 minutes, because it's a dream etc. It's obviously a big prize. It's obviously this big prize etc. As I wrote in my blog post, were we bummed about it? No, because we built a pretty successful business on top of the code, on top of LibSQL, which is today our company, Turso. So for us, it was this exercise of -- if you heard the expression "Shoot for the stars, because even if you miss, you're going to hit the moon..." For us it was like "Yeah, it turns out -- I don't think it's going to be possible for us to replace SQLite with the fork." But that's us hitting for the stars. We didn't hit the stars, we hit the moon. The moon's great. Again, we built a super-great project, we're having fun. LibSQL brought something to SQLite that wasn't there, which was like the serverless, and running this on serverless environments, on the cloud platform, syncing databases... One of the things that we do with Turso is you can sync your databases between different devices, and backups, and all of that. And this is going great. I mean, this is going fantastically for us, and so we were never sad or disappointed that this thing that crossed our mind -- can you imagine how amazing it will be if people just start using our fork instead of SQLite? We were never disappointed at that.

But when we put the rewrite out, it became very clear - and I've been using this analogy from chemistry, that the reaction was right. LibSQL was something that the market was clamoring for. I think what it became very clear seeing the reaction of Limbo now is just that the activation energy is not enough to make the reaction happen.

\[20:15\] And after talking to a lot of people - and there's a whole story of what happened after we announced this... I talked to a lot of the people who came and started contributing to the project... And what it became clear is that they all agreed with us, that we need a better version of SQLite. I mean, it will be fantastic if we have something like SQLite, but that does this, and this. All our original vision. But the fork just wasn't differentiated enough. It just wasn't ambitious enough. It just wasn't bold enough to get people to come and contribute.

Furthermore, it is actually very hard to do, because one of the things you did mention - the SQLite test suit is fully proprietary. So once you start making changes that are very deep into the core, you start hitting a bunch of issues. And some of them -- it's just like yourself saying "I know that the best way to solve this problem is this, but I'm going to solve it in this other way, which is almost as good, but not great, but it's less risky." So you start having this on your mind. So the fork never really unshackles you fully to go pursue this, which is why when we announced the rewrite, what we saw, again, was something I've never seen before. We got 8,000 GitHub stars in a week, essentially. We had what I consider to be for the first time in the history of computer science a Hacker News comment section that was mostly positive, with just a couple, I think maybe one or two comments only that were trying to denigrate us. But the rest very supportive. We had this fantastic, inspiring story of this individual who is in prison at the moment, and he was one of the first people in the United States to be granted access to the internet in prison. He can access Discord, but not X, by the way; that maybe say something about it. But he is now the fourth top contributor to the Limbo project...

**Jerod Santo:** That's amazing.

**Glauber Costa:** ...and many, many other things. I mean, the level of contributions that we started to get... We started getting like people running this on the browser. A week after we announced, it was running on the browser already; just like this, compiled to WebAssembly. All from contributions from third party people.

Again, LibSQL, we did get a lot of contributors, but they were all contributing to the drivers, to the server... Things at the margin. Which - they're important as well for an open source project, but with Limbo, we actually managed to see our dream, the 10-minute dream come true. Like, we're going to build a community of people coming here and writing this database with us. So we revisited -- now it's no longer a 10-minute dream that went away. We truly believe now that once we get the momentum going, we can replace SQLite. And that's the goal.

**Jerod Santo:** Well, I think you hit a great chord as you've given evidence to. I know my guttural response to Limbo was quite a bit more positive than mine was to LibSQL, just by reading the announcement post. I'm like "Okay, this makes a lot of sense." And then I realized later "Oh, it's the same people that tried LibSQL a couple of years back." And it seems like with a rewrite there's just so much more to do. It has its own identity, there's fresh and new ideas... Whereas a fork almost comes from a different place.

**Glauber Costa:** Exactly, yeah.

**Jerod Santo:** So I think you're \[unintelligible 00:23:31.05\] describing it. On the testing front though, I would imagine it's gotta be just as hard, or maybe I would expect it to be harder with a rewrite. What makes it easier with a rewrite than with a fork if you still don't have a test suite?

**Glauber Costa:** \[23:47\] Your intuition is correct by the way, which is one of the things that all things considered we went with the fork. Because at least there's some level of guardrails that come with the fact that at least you know that this code that you're importing was tested by this proprietary test suite --

**Jerod Santo:** It started off right. Yeah.

**Glauber Costa:** Right. So I don't think our intuition is incorrect. But something amazing happened... And by the way, the way I look into the situation, another thing that I want to make clear - I don't actually think that we made a mistake with the fork. Because if we were rewriting back then, there were many decisions that we made today that we would not have made. But now we did, because we had the experience of running the Turso platform, and we learned a lot of things. So I almost see it as a prototype, and it actually allowed us to make tremendously good decisions with the Limbo project. And one of them is exactly the testing. What happened is that Pekka and I got hooked into something called deterministic simulation testing

And deterministic simulation testing is a very niche thing, that most people have never heard about. I had heard about it a couple of times, but I didn't truly quite understand what it was, until I met Joran. So Joran is the founder of -- and I can say this... I mean, even though I am the founder of a database company, Joran is the founder of the most amazing database company I've ever seen... Although now I think with Limbo we have a chance to reclaim that title. Joran and I are going to fight about it. But ask me a month ago, I would say "Man, I have to give it to him. This is the most impressive database company of all." TigerBeetle.

TigerBeetle is a database - just to keep it very brief - that is designed for financial transactions. So it's completely written in Zig, and their goal is to replace entire systems, the bespoke systems that most financial institutions have to process transactions. So if you're selling to banks and financial institutions, if your goal is to replace the backbone of world's commerce, it's pretty hard to do. And one of the challenges that you have is just this, "How do we trust this thing?" And Joran found a solution for that. The solution that Joran found was to write TigerBeetle entirely with a technique called deterministic simulation testing.

Deterministic simulation testing is essentially a fuzzer. So it will generate a bunch of inputs. It randomly generates as many inputs as it can on the space of possible inputs... And this is the disadvantage. You kind of have to write software in a special way to lend itself to deterministic simulation testing. It's very hard to bolt it to an existing codebase. But you write it in a way that every single operation that you do on IO, on thread scheduling, everything that happens goes through a special interface that abstracts all IO. And then you plug a simulator -- when you're testing this, you plug this into a simulator. And the simulator is included in the codebase.

So what the simulator does is that it's going to explore the space of possibilities, create the most arcane, impossible situations ever, and then when something breaks, it gives you the exact steps deterministically that everything in the system had up until that point, so debugging those problems becomes very easy. So in record time, in record time, TigerBeetle managed to create a system based on deterministic simulation testing, which is their database. And the stories that Joran would tell is "Look, we've found this bug that would only happen if you would call fsync on a disk, and then fsync would return an incorrect result, and at the same time, a packet will come from the network." He would describe the most complicated scenarios... Oh, and the end result of that - the simulator gives you a seed, and you type that seed into the simulator, and now you have every single step that happened to make that happen.

\[27:43\] So this is one of the things that led us to believe, "What if we try the rewrite?" Because we knew that we could now try to rewrite using deterministic simulation testing. And then we also partnered with a company called Antithesis, that offers almost like the integration test analogy for deterministic simulation testing, which is a full system version of that, that will simulate things between machines, it will simulate the network, it will simulate hardware failures, and stuff like that. So whatever bugs our simulator does not catch, usually we just give it to Antithesis. The next day, Antithesis catches the bug.

So we knew that that was the missing part of the puzzle, and then with that, we will be able to actually create something that probably even surpasses the level of testing that SQLite has. But here's the catch. It is easier to do this on the rewrite, because you have to write the system with these in mind from the get-go. It's not something that is easy to bolt upon.

**Jerod Santo:** Is that popular enough that you can go out and there's Rust crates that will give you this functionality? You have to write all this DST stuff yourself?

**Glauber Costa:** All of it, yeah. So for people who are interested in DST, but don't want to go through the pains of just rewriting all sorts of things like that, I truly recommend taking a look at Antithesis, because... I mean, Antithesis is amazing. It's the second -- it's not the second, next best thing. We use it in conjunction. It's not an either/or. The analogy that I have is that our own DST is like unit tests; we can run centuries of possibilities in two days. And it's very fast, all things considered. And Antithesis is like integration tests. So you want to have both, and we do have both, and Antithesis has been a great partner for us.

But the problem with deterministic simulation testing is that once you start importing other crates in Rust, for example, you have no idea what those crates are doing. Those crates are calling IO. So you kind of have to write everything. So it's not even that you have a crate for deterministic simulation testing, it's that you might not even want to import something super-simple, 100%, but you don't want to import anything that does IO, that has a timer... You want to write those things.

So it's something very hard to do for general purpose testing. For a database, like TigerBeetle, for a database like Limbo, it's worth it. And the scope is quite limited. And you don't want to be importing crates all the time anyway... TigerBeetle is way more insane than we are. They have a policy that they just don't have dependencies. That's it. They write every single piece of code. We try to be a little bit more flexible. But we will not import a crate.

And again, it also depends, because SQLite comes with a CLI. If you want to import a crate that does whatever crazy stuff to implement callers in the CLI, that's fine. But for the core of the database, we try not to import anything that could potentially do IO, because we want to make sure that everything goes through the simulator.

**Break**: \[30:52\]

**Adam Stacoviak:** This DST sounds like magic magic.

**Glauber Costa:** Yes, man.

**Jerod Santo:** \[laughs\] It does.

**Adam Stacoviak:** If it's like writing unit tests, what exactly -- and you said that the rewrite is better because you have to write... Assuming this DST is in place, what actually is the writing and the creating of this deterministic simulation testing? What is that? How do you do it?

**Glauber Costa:** Yeah, so again, the simulator itself, you just write a couple of scenarios. And again, it's not truly magic, because you do have to write the simulator, right?

**Jerod Santo:** Sure.

**Glauber Costa:** So the simulator just writes -- imagine for example, a workload, and the workload is like generate a couple of queries, and then write etc. But the simulator will include a fuzzing element to that. So instead of like generate this query that I wrote in the unit test, you give it almost like a query generator, and then it starts generating random queries. And then in the simulator itself, what happens -- imagine this... If you want to write to a file in any software, you would call a operating system API, like, write. If we talk about Rust, it's like fs write, and then you write to the operating system. When you're writing software for DST, you don't do this. You have your own IO interface abstraction, and then all of your IO goes through this.

So when you're running this in production mode, your abstraction for write just called the operating system write. But when you're running deterministic simulation testing mode, your abstraction for write runs the simulator code that will start injecting failures into this. And again, injecting failures in a deterministic way, because then if the query fails because you injected an IO failure at that moment, you will be able to replay that session piece by piece.

**Adam Stacoviak:** As my friend that runs -- well, he used to be on \[unintelligible 00:34:46.01\] I'll just leave it there. \[laughter\] I'm sure any fans will get it.

**Jerod Santo:** \[laughs\]

**Glauber Costa:** Is that the guy that --

**Adam Stacoviak:** "It's barely an inconvenience", yes.

**Glauber Costa:** "Very easy, barely an inconvenience."

**Adam Stacoviak:** Yeah, that's right. Super-easy, barely an inconvenience.

**Glauber Costa:** I love that guy, man. It's super-easy, barely an inconvenience.

**Adam Stacoviak:** Wow, wow, wow. That's what I'll say right now. That's how he'd respond.

**Glauber Costa:** So how do you rewrite SQLite with the confidence that it will actually have the level of trust that SQLite acquired? It's super-easy, barely an inconvenience, right? All you have to do is write the deterministic --

**Adam Stacoviak:** I love it.

**Jerod Santo:** Just throw a DST at it. So when you talk about SQLite-compatible, that's Limbo's goal. There's a lot of different fronts that that has to be on; are you talking file structure, are you talking syntax language? Are there performance compatibilities? There's all kinds of things that SQLite is. What's Limbo's goals with regard to these different areas of compatibility?

**Glauber Costa:** First of all, compatibility in a project like this - and this is the experience that we gained at Scylla, when we were rewriting Apache Cassandra. Compatibility has to be like a one-way street, right? You don't want to shackle yourself and say "I will always..." Because sometimes, for example, to implement a new feature, you have to do it in a different way. So it's usually something, "Hey, we're going to offer you the same feature set as SQLite. We're going to read your SQLite files, we're going to execute your SQLite code... And if you're not using any of the specific features that we have, we can generate SQLite files as well." But the moment you start using new features that are only present in your implementation, it's impossible to be compatible. It's just not possible.

\[36:26\] Limbo so far - and this is something that we want to keep - the language is the same. Again, we want to keep the language, we want to keep the API, we want to be able to load SQLite extensions. The file format, obviously - it's the thing that defines SQLite, so obviously... Again, we might add to it in the future, but we will be reading SQLite files normally. And we are bytecode-compatible as well.

So one of the other ways in which we test Limbo is by now out of the simulator just generating random SQL statements, and then seeing that the bytecode that is generated by Limbo is the same bytecode set of instructions that is generated by SQLite. That doesn't catch bugs in the implementation of the bytecode, but at least you know that the query plan is the same etc. So this is yet another way in which we've been testing to make sure that it's up to standards.

**Jerod Santo:** So I mentioned at the top that it also has some ambitious goals. One of those - fully asynchronous IO, which is quite a bit different than SQLite, right? So how do you accomplish that, but maintain this compatibility?

**Glauber Costa:** Yeah, so async is something that a lot of people misunderstand. Async doesn't mean -- for the Rust-minded people in the audience, to be clear, async does not mean that we're going to use an async runtime like Tokyo, or like others. I actually personally wrote an async runtime when I was a Datadog, that's still around, called Glommio. We don't use any of that. And again, part of the reason we don't use any of that is that we want all of that to go through our simulator.

So if you look at the Limbo code, it's just really sync Rust. It's not async Rust. So all that async means is that when you call an operation, if that operation is not ready, it will return to you, instead of blocking. And now I'm getting a little bit too technical, but let me just give you the full context. The SQLite C API has a bunch of functions, but the most important of them is called SQLite Step. And SQLite Step is essentially like take another step, take another step in processing this query for me. And this is a blocking function. So what that means is that if you call SQLite Step, it will block until it resolves -- let's say in that step you want to execute four, five, ten, however many bytecode instructions. Until it does that, it will block. In Limbo, if you detect that you're not ready to execute those bytecode instructions at that time, you just return something saying "No. Call me back later." So that is essentially what async means.

And then with that, it becomes very easy to plug something like Tokyo on top in Rust, or run it on the browser, or whatever, because you can call those async functions. And if it's not ready, it will not block. That's all that means. But it doesn't mean that we have to use the async runtime internally. In fact, quite the opposite way.

**Jerod Santo:** So what does that unlock for you? Because SQLite historically is sync, but super-fast, because it's right there, in process, and stuff. But...

**Glauber Costa:** Well, it isn't that fast. I ran a query yesterday, for example, that took 10 minutes to run. That was a query for five joins, looking at all the user data about users who are signed up to the Turso platform. It takes a long time, just because the query is complicated. SQLite is very fast for CRUD style. Just like "Hey, here's the key. Give me the value."

**Jerod Santo:** \[39:59\] Sure.

**Glauber Costa:** But it's not super-fast for analytical stuff. So the first thing that it unlocks is just this, queries that are much more complex, that you can run in dashboards, and things like that. And also, for the serverless environments, Turso being one example... And for clarification, I'm going to say - our product will be renamed to Turso Cloud, and we have all the intention in the world to rename Limbo to just Turso. Limbo is just not a great name. Just a parenthesis here. The story, it's all in the blog posts, but we never expected this level of support, so we just came up with a made up name for it, that means nothing. But now we will address that.

But our product, Turso Cloud, allows you to do serverless SQLite on the cloud. You have a bunch of HTTP requests there in the middle. It allows you, for example, to host your data on S3. Because if you have your data hosted on S3, your query now is not necessarily super-fast, because you may be hitting a page that is not local. So it allows you, for example, to run SQLite with partial storage, like with most of your data on S3, and some of the data locally. It allows us to do all sorts -- it allows us to run on the browser, because the browser, as you know, is a very sync-unfriendly environment. If you block everything, the page just doesn't load. So in the browser you have to be async.

So there's a lot of things that it unlocks. In fact, the one thing that -- Limbo doesn't even support transactions. It's very, very early, which for a lot of people who came to contribute, they actually saw as an advantage, because you come with this energy and there's so much to do... But we're not even yet at the point where we support transactions. And the one thing that is already different and is resonating a lot is the fact that it is async.

**Adam Stacoviak:** Well, you've put a lot of thought behind this; not expecting it to be so well received, you've put so much, it seems like just so much thought in the design of it, from the DST, to async, to all the things... But why were you so surprised it was so well received?

**Glauber Costa:** Technically, we've put a lot of thought in the product. And the full story there is that, first of all, we consider as - just revisiting, especially if people are joining now - we considered rewriting SQLite from the get-go anyway. So this was always on our mind. This was always on our mind. And we added to LibSQL. So one of the things, if you download LibSQL today in the fork, LibSQL comes with vector search out of the box. You don't have to install any extension. You can do your RAG pipelines of SQLite out of the box, with vector search. It was very, very hard to do. It was an ordeal to actually get vector search working. And there are lots of things in the syntax - earlier when I was saying you might do it one way, but then you end up doing this other way, which is more conservative, because vector search was the thing that I had in mind... Like many things in the syntax, they're okay, but they're not great, because we had to be a little bit more conservative. And then Pekka started thinking -- and this is all on Pekka. He started thinking "Okay, how would that look like? How would that look like if we were to rewrite it?" And our goal was something like "Hey, look, if this project keeps going and it goes well, and it's an experimental thing, maybe in two years, in three years we can make something out of it."

So we were very thoughtful about the technical decisions that we were making, but everything around the presentation was just like "Yeah, whatever, man. Whatever." So again, this was not on our company's GitHub, this was on Pekka's personal GitHub... He spent 10 seconds thinking about the name, and then just said "It's going to be Limbo, because it's a state of confusion. We don't know what we're going to make of this." The whole story of the name Limbo was essentially "Pekka, what are we going to make with this?" "I have no idea. I just want to experiment with this concept." The logo - he just asked ChatGPT to generate. We took another five seconds...

\[43:58\] So there was not a lot of thought on the presentation and publishing, but there was a lot of thought about the technical side, because we thought that "Hey, maybe in two years, maybe in three years, there is a play for us once we are a much more established company to tackle rewriting SQLite." What we did not expect is that as we were -- what we decided to do is just make it an official Turso experiment. But if you read the posts in which we were announcing this, we were very clear. "We don't have a roadmap for this. Don't ask us what our intentions are. There is nothing that we want to do with this one in the short term." This was an experiment on Pekka's GitHub that actually did pretty well. And it did pretty well based on two metrics. We got a thousand GitHub stars, and we never talked about it. We never talked about it. And we got two incredibly good engineers that started -- one from Red Hat, who is now with us...

And so we hired those two engineers. We got two incredibly good engineers that started contributing to the project. Again, it was just a project on Pekka's GitHub.

So we knew that there was something there, and we decided "Let's just now publish it as an official Turso experiment." We wrote in the blog post "Maybe, if that goes well, in six months we can start pouring some of our resources in, and then we're gonna see what happens."

So we had some idea that this will be useful at some point, we just did not know it will be so well received, to the point that it was... To the point that we changed our entire company strategy now to be able to pour our whole weight of our resources behind the project. And that's what we're going to do.

**Jerod Santo:** So you're all-in now.

**Glauber Costa:** We're all in. And in fact, we wrote a blog post last week, telling the story, a lot of what we're discussing here. Look, in my wildest dreams, in my wildest dreams, I would expect maybe this to gain like 2,000 more stars in a month or so, then from 1,000 it goes to 3,000... Maybe a couple of other engineers that would come and contribute as well, and start slowly, but we would see some potential on it... That was my definition of success. And every single metric that we thought Limbo could be successful at, we saw three times more, four times more than what we anticipated. So we decided to go all-in.

And there is a blog post that we wrote recently with all the changes that we're going to make to the platform to allow us to do this, with all the changes that we're doing to the company... We had a lot of reorganizations internally. And this is really something that we decided in a couple of weeks in January, because we're just like "How can we ignore this?" I mean it seems very clear to us now that the world at large really wants a evolution of SQLite. The signals are very strong, so I think we just need to get behind it.

**Adam Stacoviak:** What do you think made those two contributors that were so pivotal contribute? If this was an experiment on Pekka's personal GitHub, it wasn't from a technical level well thought out, but just an experiment... What was compelling to them?

**Glauber Costa:** Yes, and again, those two individuals in particular, they are now working for us, and we hired them already last year, because they're great. Pekka and I were like "Man, if Limbo has no other value, it's a great hiring tool for a company, because it's attracting this kind of people." But those are people, of course, that we have direct access to, so we talked to them extensively. And all the others that came as well after. We had 32 contributors to Limbo the day we announced it as a Turso experiment. Days later we had already 60, and we're reaching 70 now. And again, a lot of that, very core contributors, doing a lot of great work.

So \[unintelligible 00:47:45.27\] those two contributors, are obviously the first ones that we talked to. And the story is always the same. The story is always the same, and it's exactly the thing I said. They were very excited about the prospect of a better SQLite. They knew about LibSQL, but LibSQL never enticed them, because it just wasn't - in \[unintelligible 00:48:07.00\] word, it just wasn't crazy enough, which I translate to bold. But it just wasn't it just -- it kind of caps where you can go, because you're still shackled by the fork.

\[48:19\] So when they saw this thing that -- and I think you add this sprinkle to that as well too - this is a new project, so there's so many things to do, which engineers get attracted to to some extent as well. But if you talk to them, again, it's always the same story. "I love the vision, and I already loved the vision when I heard of LibSQL. But this thing here is just the right amount of ambitious that I want to start devoting my time to that, and I want to be a part of that as well." So that's exactly -- and one of the things that we said a lot in the early LibSQL days is that we said that a lot because we heard from a couple of people, a couple of companies, even. "We love the idea of what you're doing, because it gives us a seat at the table." And then my interpretation of that is it turns out it's actually pretty hard to give people a seat at the table if you don't own the table. So limbo gave us this -- I mean, it's our table now. Now, it's a table that is modeled after another table, but we own the table, and now we can really, truly give those people a seat at the table. I mean, they're coming, they're writing code, they're contributing, they're reviewing code, they're helping with the direction, they come up with ideas, things that we never considered, things that would not be a priority. Limbo already limbo runs on the browser. Somebody showed up today, "Oh, I got LibSQL to run the limbo CLI in WebAssembly, and now I'm distributing the CLI." It's not even something we would have done, but the person took an interest because it doesn't have a ceiling. You essentially can take this anywhere.

**Jerod Santo:** So does LibSQL just go away then, or be replaced outright?

**Glauber Costa:** LibSQL came to be a little bit -- and a part of that because, again, as I said, after... We had this dream of replacing SQLite for 10 minutes, and then it became clear that it wouldn't happen... So we had this something that was very valuable. We knew it was valuable, but we had to struggle a little bit more with what do we do with that. So the LibSQL project today, again, is two things. It's a fork of SQLite, with some of those changes, like vector search, but it is also -- and it's all in the same repository. It's all part of the same project. It is also a server implementation to do serverless SQLite over the wire. So that is what LibSQL is.

**Jerod Santo:** Okay.

**Glauber Costa:** It's an open source project, so we're still going to be maintaining that, but the client-side part is going to be full Limbo.

We intend to eventually get all of those things redone, like vector search, all of that. LibSQL is still maintained for the time being, because again, we have a business around it, we have features that we depend on, but our goal is to eventually port all of those features to Limbo, which again, we plan to rename to Turso. And then the client is that, and LibSQL can become just the server implementation, as an open source alternative to do that.

**Break**: \[51:13\]

**Jerod Santo:** Is there trailblazing left to do? Or have you done the trailblazing and now it's just a matter of work?

**Glauber Costa:** Oh, there's so much... Because one of the things that we heard as we launched LibSQL - for some reason, I'll never forget that individual. So we create this Discord community, we announce LibSQL, people came, and one person in particular, but others said the same thing as well... "Give me better schema changes and I'm switching to this tomorrow."

So one of the areas, for example, the SQLite is really bad at is schema changes. You can make schema changes, but you cannot alter the type of a column... There's all sorts of limitations like that. Which is something, by the way, that we made better in LibSQL. So LibSQL does better schema changes than SQLite, but it's not better enough. Same story, because we were limited in what we can do.

So we want to run replication, like native replication to the browser, which is something people have been asking us for a long time. Imagine you have this SQLite database running on your browser, that can then sync with an external server \[unintelligible 00:54:41.06\] or whatever, and just get pages on demand. That's one of the things we want to do. We want to tackle the problem of schema changes, we want to tackle the problem of write throughput, because SQLite is a very bad database for write operations... We want to make Turso much better for analytical workloads... So there's just so much that we believe we can do. But together with all of that, there is also the boring work of - you know, we don't even support transactions yet. And again, some of that you can do in parallel, like async, like browser, but some of them it's just time in the saddle.

**Jerod Santo:** How much time, do you think? Are we talking months, years?

**Glauber Costa:** Nine months to a year.

**Jerod Santo:** Nine months to a year. Okay.

**Glauber Costa:** For two reasons. First of all, because of the deterministic simulation testing. Because it allows you to move with a lot more confidence. Imagine trying to get into the thought process of a database writer. It's always like "I want to make this change, but I don't fully understand the impact that this change will have in all of those environments that I don't control, like running on an embedded device here, running in this other..." So making changes to systems like that... And those are the kind of systems that we dealt with at Linux.

Sometimes Linux has a lot of weird stuff in the process of development around the idea of like "We know that this thing can break on a processor that only three people have in the world, and it's not supported anymore, and we don't want to break those things." So we always move very, very, very, very carefully. And the deterministic simulation testing just allows it to make a lot faster; paired with Antithesis, which is our integration testing, in this analogy, it just allows you to move so much faster.

The second reason for why we believe a year is the reasonable timeframe here is that SQLite, as it turns out - and that's why one of the reasons we believe in forking, and I mean rewriting - is not the biggest codebase in the world. SQLite is not that complex. If we were rewriting Postgres, it's a completely different story. But rewriting SQLite - it's actually doable in a year. And also, as I said, we're going to put the whole -- we're not going to do this in Q1, because we're treating our first quarter of the year as a transition quarter, to allow us to finish other work, so that we can be free to do this. But we're going to have like at least seven, eight engineers just working on it full-time. So imagine that you have seven people working on a codebase that is less than 200,000 lines big, for nine months, with a deterministic simulator that catches all possible bugs that you can muster. We believe it's a very reasonable timeline, nine months to a year.

**Jerod Santo:** So next January we'll be talking about - is it production grade? 1.0? What does it look like?

**Glauber Costa:** We want to release a 1.0 much earlier than that; much earlier than that, because we want to -- we'll see. We still believe in release often, just put it out there.

**Jerod Santo:** Get it out there, yeah.

**Glauber Costa:** A lot of people are going to be early adopters. A lot of people, I think like -- our thesis is that it doesn't even support... Even without transactions, there's a lot of people that with a little bit more support on the read side, they can already use it, because a lot of workloads for SQLite... Like, you get the file; you don't write to the file. You get the SQLite file from somewhere, and then you just run a bunch of stuff on it. So even without writes being fully supported, we believe there's a lot of use cases that this unlocks.

\[58:06\] So we want to be very aggressive with making releases, but the moment we're going to say "Hey this is stable..." And look, we can actually even give us more time, because it's a great commitment to say it's something is stable. I mean, people trust you that this is going to work. So we can take even more time than that, to say "Hey, this now has our seal of approval. We're going to support it", all of that. But much earlier than that, it can already be production-ready.

**Jerod Santo:** How does this all affect Turso the business, and how does it fit in? This is going to -- I assume it's going to be an MIT licensed thing, open source...

**Glauber Costa:** Yeah, so our business is going to change. We announced recently a lot of -- what we need to do is that we need to simplify our product a lot. So we had very hard decisions to make. Again, it was a tough time for us to go through those decisions. But we kept the mission in front of us. We kept this idea, like, we need to make those changes, because I think the community now trusts us to rewrite SQLite, which is like the biggest prize, we believe. So we have to make those changes.

A couple of features that we have, some of them that I love... A lot of users, unfortunately, got quite upset with that, obviously. I mean, features that they use, and came to trust, we will discontinue. So the way we're doing this is that if you're a paid user, after a cutout date, you're going to be allowed to keep using those features. But new users, new signups, anybody else who is not a paid user at that point will no longer have access to those features. With that, we believe our platform will become a lot simpler.

We're still going to maintain our platform, but again, we think that having a single person just running the platform will be enough. And we're not going to be investing in having new features into the platform. So the platform will essentially go -- which is the Turso Cloud. It will essentially be a place where you can still run -- like, if what we do today is good for you, great. And what we do today is two things very well, especially after those features will be discontinued. You can access SQLite over the wire, from serverless environments. So you have a serverless managed SQLite database. And we have our features, point in time restore for backups, branching... We have all of that that a serverless database needs. And you have syncing of databases between devices, servers etc. So you can start with your SQLite file, and you can upload that file to Turso, and then replicate that to other SQLite files that you own. That's the platform.

We're not going to be investing too much in new features, in frontend features, in quality of life features... The platform will essentially go into a freeze for a year. And the platform is pretty good. It's at a position that we can afford to do this. And then for one year, we're going to go all-in in getting Limbo to replace SQLite. And that's it. And then at that point, Limbo then becomes the thing that we run on the platform, and we have the money, we have the runway to do this. It's all accounted for. So if we manage to, which I believe it's very doable, to get Limbo in a production-ready state in 15 months, our plan still works. But 9 to 12 is what we're thinking here.

**Adam Stacoviak:** When you get to that place, whenever Limbo becomes Turso and Turso Cloud goes away, how will you differentiate this new launch?

**Glauber Costa:** No, Turso Cloud doesn't go away. What is Turso today becomes called Turso Cloud. And then Turso, the embedded database just becomes Turso. And again, this is a lesson that we learned, and not that we haven't heard this before, but I think we're just stubborn... People kept telling us, it's very hard to create one brand. Two brands is even harder. But the reason we kept those things separate, and the reason LibSQL wasn't called Turso was exactly because we wanted to give people the sense of "This is a welcoming community. We have our business, but your interests will be heard." Like Linux. We've modeled a lot of that on the experiences we had at Linux. Very few people care about this. And that's the lesson that we learned. Almost nobody -- of all the reasons that we heard for people not contributing to LibSQL, this was never something that showed up. Never, ever, ever, ever.

\[01:02:29.09\] And then when we announced our changes to the Turso platform, we had many questions from many people about "Hey, this feature they're going to discontinue, this other thing they're not going to support", and what happens is nobody asked about the name. Nobody said, "Well, with the name Turso--" Nobody cares. So this idea that we had, that we have to keep things very separate to create a welcoming community, we learned that nobody cares. So we're going to take the opportunity here to just fix it. Because again, it is true what we heard from many of our advisors... Creating a brand is already incredibly hard. Creating two brands is very hard. And the people in the know, they know, but people who are just hearing about it - now you have to explain that this is this, and this is that. So we're going to just consolidate the names.

And Turso today, again, is the cloud offering that is going to be renamed to Turso Cloud. And then what is Limbo, which is the client offering, will just be renamed to Turso, and that's it. And we're still welcoming. We still want people to come in and build this with us. We just learned that the name doesn't matter.

**Jerod Santo:** How do you manage that relationship between the open source Turso, the interests of Turso Cloud, third party contributors who may want Turso to go a different direction, that maybe you don't want it to? Success brings all kinds of challenges.

**Glauber Costa:** It does. And that's why what we decided to do is never port the server code to Limbo. Because then the server can be kept completely separate. And again, I think the reason we had the server and the client together was exactly because it was clear to us after a month or so that we will not, with LibSQL the fork, have achieved our goal of really just replacing SQLite, this goal that we had briefly. So the best strategy then became have the server code here as well, because now there are other things you can do with this open source project.

But with the success of Limbo - again, it's back on the table, and it's a very realistic goal that this will replace SQLite. So we just revisited the strategy and said "This has to be just the client-side library exactly because of this, because we don't want to be in a position--" And the name was a part of that. We just learned that it doesn't matter. But we don't want to ever be in a position -- we want to design things in a way that we are never, ever, ever in a position to even think about "There's a contributor coming with this code, and maybe we don't want to merge it, because this might affect our business." You never want to be in this position. In fact, we want to make people in the community, and maintainers as well, we want to have people, hopefully like Preston, the person that I mentioned that is in prison, and others, that are doing fantastic work. I mean, if they keep working for another six months or a year, and you see that they're committed to the project, they should be maintainers as well. And they should have the ability to just merge code, without talking to us. That's what we want to see.

So the way we're going to structure things to make that happen is that our business now has to be just the cloud. And then all the code for the cloud - that is a separate project; that's going to be its own thing. And then the client... SQLite, for example, they don't have they don't have encryption at REST, they don't have a bunch of things, because they do try to build a lifestyle business around it, as far as I understand, by selling those things. Because they're very specific. We want all of this in the open source for us. We want all of this. We want encryption at REST, we want all sorts of extensions. We want everything that runs on the client to be 100% open source.

**Jerod Santo:** \[01:06:05.06\] Very cool. So how will you know when Limbo/Turso has made it, has arrived, has replaced SQLite? Will it be on Mars? Will it be on trillions of devices? When will you think it's here, it's arrived?

**Glauber Costa:** I think if this was a consumer business is when your mom calls you to say that she's using it, without knowing that this is the software they work. I don't think my mom's going to use Limbo, or Turso, or SQLite, or whatever, so I can't use that. So the criteria -- for us it's really when we can see somehow, through some fuzzy metric, that we have a billion databases out there. So SQLite has a trillion databases, and we don't think we're going to replace SQLite in a year. That's not the goal. But we think that in a year we can get to this point where "Hey, we got our first billion. Like, this is clearly working. If we do this for another two years, and we do this for another three years, we get there."
So the first milestone that we have in mind is when we can, through some proxy, because a lot of that you cannot measure... But we have a good level of confidence that we have a billion databases in the open. Then I think "Okay, that's success."

**Jerod Santo:** If people wanted to play with it today, how much is there? What could you play with, if anything?

**Glauber Costa:** A lot of the read stuff works. A lot of the read stuff works. And one of the things that Pekka -- this was entirely Pekka's idea, that he did very well, and he was very praised by a lot of people, including those contributors... Some of them said "This is one of the reasons I contributed." It's that he wrote "On day one", because I mean, technically, this was very well thought. We thought about everything very well on the technical level; just on the presentation that we didn't have a lot... But there is a compatibility matrix. So if you go to the repository, there is a file there, compat.md, that is linked in the readme. And there is a full compatibility matrix with everything. So what you're going to see there is like the read stuff from SQLite already works pretty well. So you can, in a lot of ways, if your queries are not the one I run today, with 10 joins, and very complicated use cases - the basics of like reading from a SQLite file, they work already.

**Jerod Santo:** Adam, any other questions for Glauber before we let him go?

**Adam Stacoviak:** I'm just trying to understand this future, I suppose... And I'm trying to piece it together, and I don't know how to ask this question necessarily, but I'm reading your most recent roadmap where you mentioned "Changes to our server implementation." And sorry for my stuttering, because I'm still drastically behind on my breaths because of getting over the flu... But client-side, open source, server-side closed source. And so LibSQL is Turso Cloud. And if you want to self-host...

**Glauber Costa:** More or less, because -- yeah, just to add to that; it wasn't something very relevant, so I didn't bring it up... But we already had -- for other reasons, we already had a proof of concept of a new server implementation, that is not based on LibSQL. And the reason we did this is that we also want our server to have deterministic simulation testing.

**Adam Stacoviak:** Okay.

**Glauber Costa:** So that new server will be closed source. So that's one of the changes in strategy that we're making. And again, we understand that in a perfect world, everything will be open source. I would love that. But the reason we're doing this is that we want to have this very clear separation, without concerns, of what goes where. And we think the best way to do this is if the server is fully proprietary, and the client is fully open source. So LibSQL is open source, the protocols are all the same, so you would be able to run your Turso Cloud databases on LibSQL. That's the goal. But the new server, that runs deterministic simulation testing, that has a lot of additional features, that is designed to be multi-tenant, the design goal that we had is that we will be able to run queries to a billion SQLite databases in a single box. So all of that, that level of scalability, we're going to keep it closed source.

\[01:10:01.14\] So that's going to be the dividing line. And then LibSQL still exists as a reference implementation. If you truly want to run an open source version -- I think it's more accurate to say if you want to run an open source implementation of our cloud platform, LibSQL will do this for you, with limitations. But our new server, we decided not to -- seeing the success of limbo, we decided not to release that as open source, to keep things clear. And then Turso, the embedded database is 100%, 200% if we can, open source.

**Adam Stacoviak:** 200%, gotcha. So in the future, when somebody runs Limbo, which will be renamed Turso, they can run that on their own. But if they want this massive scale multi-tenant world, they've got to host with you.

**Glauber Costa:** Yes, or write their own implementation. Or use LibSQL, again, which is still going to be there, but we believe our implementation is going to be better. That's why we did it.

**Adam Stacoviak:** So you're long betting on hosting a lot of databases in the future.

**Glauber Costa:** Yes, yes.

**Adam Stacoviak:** Okay. You said you don't need money, right? So you have the runway for the next 15 months. You get in danger if --

**Glauber Costa:** No, we have runway for more than that. Everybody needs money.

**Adam Stacoviak:** No need to raise more now though, to get to this goal.

**Glauber Costa:** We don't need to raise more money now, yeah. That's right. For more than two years. I've been talking about 15 months, not as a cutoff point for that. It was more about when do we believe that this can become... But we have capital for a lot longer than that.

**Adam Stacoviak:** Okay, good. Let's talk in a year, I guess. I mean, that's all the questions I have for now, for the most part... Everything else is speculation, but there you go.

**Glauber Costa:** Send me an invitation today, for a year in the future.

**Adam Stacoviak:** January 22nd, 2026...

**Glauber Costa:** Same time, same date... How about that?

**Adam Stacoviak:** Exactly.

**Jerod Santo:** Let's do it.

**Glauber Costa:** Let's do it.

**Jerod Santo:** Alright. Thanks, Glauber. Hey, we're rooting for you. This is really exciting stuff.

**Glauber Costa:** Thank you.
