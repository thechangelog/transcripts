**Carlisia Pinto:** Hi, everybody. I’m Carlisia, and today we have as a guest Bill Kennedy. I am so glad for the show today. Bill, give us a little bit of introduction about yourself. So many people know about you, but there are more and more new people coming on to the Go community, and some of them are not going to know who you are... So tell us about the rockstar that you are.

**Bill Kennedy:** Oh, rockstar -- blah! Anyway, I found my way to Go back in 2013. I own a company named Ardan Labs with my best friend, brother, and business partner, Ed Gonzales down in Miami. In 2013 we had to switch off of Windows and move into a Linux environment. I was coding a lot of C\# at that time, and that’s when we found Go, and I started writing some blogs, and Erik and Brian, the other hosts on the show, invited me to join them in writing the "Go in Action" book, and that led to talking at the very first GopherCon.

Then between the blog and the book, I started developing training material, and probably started training at the end of 2015, and now it’s pretty much a full-time job, day in and day out, and I still make it a point to write one blog post every month on the [GoingGo.net blog](https://www.ardanlabs.com/blog/), which we’ve now moved over to Ardan Labs, but everything gets redirected. So I’m really just a software developer who’s been writing software professionally since 1991, and I’ve been working in Go for almost five years.

**Carlisia Pinto:** That’s an amazing track record. Your book is very famous, your blog posts are fantastic, and your Twitter account is super active and also very insightful and very oriented towards Go... So for people who are new to Bill Kennedy, make sure to look through the show notes to get the info on how to find him online. And what are we going to talk about today?

**Bill Kennedy:** I thought it would be fun to talk a little bit about some challenges and maybe some advice around learning and teaching Go. One of the things I do at the beginning of every one of my classes - I teach a lot of them, two and mostly three-day classes... And I’m teaching a lot of these classes because companies are having a hard time obviously finding Go developers that already have a few years of experience. The language is still new. So I think companies are doing the right thing - they’re hiring smart guys who want to learn Go, and then my training classes are really giving everybody about an 8 to 12-month kind of headstart or jump.

\[00:03:47.13\] One of the things I tell every developer in the room is I say, “As we go through this material for the next three days, I need you to wear two hats. I need you to wear a student hat. Here you are, you’re learning Go, and I wanna be effective in that way... But at the end of the day, you’re also going to be teaching Go whether you like it or not, because the next round of developers that you hire are probably going to be trained, and I’m not going to be brought back in this room. It’s going to be on you.” So I also ask people to look at the material that I’m teaching not just as a student but as someone who’s also going to have to teach it. I thought that would be an interesting thing to talk about today.

**Carlisia Pinto:** How do people respond to that? Do they welcome the proposition of taking on the role of a teacher? Because developers don’t really see themselves that way, if I can speak for every single developer in the world... You know, we do code reviews, but being a teacher, being a mentor is a big deal. I’m just wondering if people are like, “Oh yeah, definitely, I’ll be teaching people.”

**Bill Kennedy:** Well, I think effective code reviews are teaching, and I think answering questions -- it’s all a form of teaching, if it’s not necessarily formal in the front of the classroom... But I think what this does also in the classroom setting is it allows the more experienced developer to focus more on the material even if they feel like they know it already, because it’s one thing to know something and it’s another thing to know it well enough to be able to teach it.

Vocabulary is huge here, and so I ask especially more experienced developers to listen to the words I’m using, “Look at how I’m presenting the material.” I think it helps in the classroom environment to take that person who’s probably feeling they’re more experienced and maybe they know some of the stuff, and it gives them that opportunity to really focus on it in a teaching sense. So people, I think, get it and it really helps with focus in the classroom.

**Carlisia Pinto:** Yeah. I’ve been in your training, because you also give free trainings for under-represented communities, including women like me. And I also read your awesome blog posts, and I really love how you focus on the meaning of the words and on the fundamentals, because I think that really capacitates people to be better at understanding the concepts. You do have to understand the concepts beyond understanding the syntax and how to do things. If you do, you’ll be a lot more effective, and you can effectively do code review as a mentor, as opposed to just pointing things wrong... Pointing out what can be improved, but just also discuss tradeoffs, and things like that. So I love this approach.

Before we dive into more specifics of that, I also wanted to ask you, are there people actively teaching Go? Because I don’t see that, it’s not on my radar... Not that I’m looking for it either. I just wanted to get a sense of like-- I think we need more teachers out there, no?

**Bill Kennedy:** No, I mean... We could use a lot of teachers out there. I think the demand is there. You know, [Mark Bates](https://twitter.com/markbates) and [Cory LaNou](https://twitter.com/corylanou) are doing a lot of training. I think what Mark has built in terms of [Buffalo](https://gobuffalo.io/en) is really important for the community. It’s going to be basically what Ruby on Rails is for Ruby. We’d like to see some editor integrations on Buffalo to make it even more... So Mark is out there teaching that, and I think it’s important. Cory is teaching a ton of stuff, too.

I was in India last week and I was just talking to Sean Kelly - everybody knows him as [Stabby](https://twitter.com/StabbyCutyou) - and he’s going to potentially be doing some training as well... And Sean is amazing. Wait till you see his talk from India - amazing job. We definitely need more teachers, and again, from my perspective it doesn’t necessarily have to be formal teachers in the classroom. Every single person who answers a question, whether it’s on Slack, on Reddit, on the mailing list, in the office, is teaching. So for me it’s about being an accurate and effective teacher every time you do.

\[00:08:23.06\] My biggest fear as a teacher is not being accurate. This is what I’ve really worked hard over the last three or four years... It’s trying to make sure that everything that I’m saying is accurate and I’m not misleading someone.

**Carlisia Pinto:** Absolutely. You can teach something and then you can teach it properly -- it makes all the difference. But, yeah, we’re counting on our fingers here the number of teachers, and I wonder if there is not a market or we’re just missing that ability to capacitate teachers. But in any case, let’s move on to talking about what does it mean for you to teach, and let’s dig into those details.

**Bill Kennedy:** I feel like I’ve been teaching my whole life, whether it was tech or other things. I guess I have to say I have a passion for being up there and helping people grow in their careers and in their life. I’ve been blessed with so much and to be able to give that back is amazing, and then to be able to make a living off of it is even crazier, which is also why I try to do as many free events as I can. But I just think if we’re going to have a better Go community, we’ve got to have people out there that are willing to give their time and effort to make everybody better.

Sometimes somebody will come to me and they’ll say, “Bill, I’m so exhausted. I see so much bad code out there and it’s driving me crazy”, and I have to remind people that out of the entire lifetime of code written in Go, out of the entire lifetime of code that’s ever going to be written let’s say over the next 10 or 15 years, we’ve written such a small percentage of it at this point that we have this huge opportunity to make sure that the next two or three years of code is so much better than the last.

I just have this passion to make sure that people are being -- what's really important is that people are just being successful using the language, they’re building product, they’re getting it into production, they’re not getting to a point where they’re like, “We have to replace this with another language,” or “This is isn’t working, we’ve hit some walls...” Because I love working in Go and I’d like to finish my career doing it. I’d like to retire in the next five to eight years, and I’d like to make this really the last programming language that I use professionally.

**Carlisia Pinto:** Before people start thinking that you are being an expert teacher and being picky about the proper way to write code, I want to bring up this talk] that Dave Cheney gave in London at the Golang UK Conference in 2016. It was something about design patterns - we will have it on the show notes... But the message of his talk was in this moment in time, we who are developing in Go, whether it's open source or proprietary software, it doesn’t matter, we are setting the tone for the success of the language in the future, because if we write it properly and efficiently and using idioms the way they’re supposed to be used to take advantage of the efficiency of the compiler etc., then the projects done using Go are going to be successful. And that’s just going to generate more desire for people to pick up the language and use it in new products.

\[00:12:23.00\] Now, of course, you could say the opposite would be true. If we just write whatever code, projects will be hard to maintain and then therefore it diminishes the chances of Go being successful, which to us who know Go is a shame because Go is such a pleasant language to work with. I mean, people have different preferences for why Go is awesome to them, but in general there are a lot of benefits that people really like. We discuss this all the time here on the show, we don’t need to go over it with this episode.

With that said, the name of the talk is [Solid Go Design](https://www.youtube.com/watch?v=zzAdEt3xZ1M)." It’s really worth watching.

With that said, I’d like you to talk about what is the big deal when we say -- how is it possible that there is so much bad code written in Go? Because one thing that we keep saying about Go is that Go is so simple to write... With something that's so simple to write, how can there be opportunities for writing such bad code? It’s like -- I don’t get it. I get it, but if I was an outsider and not used to seeing Go code, I’d be like, “How can you mess this up if on the one hand you claim it’s so simple?” So please tell us more about that.

**Bill Kennedy:** Let’s define what we mean by bad first of all, because it’s a really open-ended term. And I think when we say bad -- for me, let’s say we mean that it’s not idiomatic. This is a word that I almost... I don’t like this word anymore. I think there was a time in the Go community where we got a little overzealous about code having to be idiomatic, to the point where I don’t think as a community we were being flexible enough from where people were coming. And one of the things that I teach extensively is in the beginning I don’t want you to get hung up on idiomatic, I want you to get things to work, and strive to improve your understanding of what are the best practices for the next piece of code you write... Because it’s so important - if you come to the language and you can’t get things to initially work, you’re going to walk away.

I think one of the big problems we have is we’ve been trained from university over the last 20-something years to leverage object-oriented principles in design, and in the languages that we’ve been using up until Go, that’s exactly what we should have been doing. And though we could spend an entire show talking about “Is Go an object-oriented programming language?” one of the things that I try to push is we don’t want to leverage object-oriented principles in design, while we’re writing code in Go. For me, it’s all about data-oriented design and it’s something that I focus pretty heavily on in the class.

So I think when we say code is bad, again, I think we’re saying it’s not necessarily idiomatic, and who can write idiomatic code day one...? And then from my perspective, probably what I see the most is people taking what they know - which is what you’re going to do - and applying that idea into Go, because this is what you know, and a lot of it is object-oriented programming, and people are going to be successful day one, and then hopefully the idea is they’re going to come back and then they’re gonna go, “Okay, that worked, and I've got a program that’s working. I did the same thing in my very first Go software.” But over time, we’re learning that these aren’t really the design principles that we want to carry forward as we move on.

\[00:16:21.22\] I think that this is what we’re really saying when we say all the code is... We look at code as bad, but what I’m really hoping is over time people can -- because Go is going to cause you to have to do and think about some things... Just packaging alone, right? Packaging alone took me a long time to really understand in terms of project design instruction. It takes a long time, and we don’t have any true consensus right now as a community on how to do that, and I’m not sure we ever will, because encapsulation has been a problem as an industry forever. And I’ve got my ideas and [Ben Johnson](https://medium.com/@benbjohnson/standard-package-layout-7cdbc8391fc1) has got great ideas, and other people have great ideas... For me, I’d love to see more people talking about packaging, and what’s working for them and what’s not working for them… I think that’s what we mean.

**Carlisia Pinto:** Yeah, I absolutely agree with you on the aspect of focusing on Go idioms. That drove me absolutely crazy when I started learning Go, because whoever was talking about learning or teaching Go, was talking about Go idioms, and I’m like, “What are the idioms?” The general answer was like, “They are nowhere. You'll know when you see it.” \[laughs\] Because there is none. Now, there are some websites out there that go over some of the idioms or all of the idioms and it’s great, and we have the Proverbs, which is a great guideline for the philosophy of Go.

So you were saying just jump in, start doing it... I also agree with that, because I am horrible - like, I need to know before I do it, and then I never do it. So that’s something that I’m working on, too - just get something done and then iterate, and get it better.

Now, if someone follows your advice and just starts getting things done, what is the next thing they you look at for them to improve? You’re saying data-oriented design, you’re talking about package... What really should be the very first thing for people to look to learn?

**Bill Kennedy:** So there’s this quote from Tom Love who’s the inventor of Objective-C. I mention this quote in every single class, and I’ve always found it to be pretty profound. He said, “The software business is one of the few places where we teach people to write before we teach them how to read.” It’s kind of mind-blowing when you think about it, because if you -- and I’ve got a ton of other quotes... If you read quotes about how to write good, effective software, we talk about invariants and understanding cost, we talk about code review, we talk about writing tests, we talk about all of these things that, from my perspective, are driven from being able to read code, not necessarily write code.

I think if you really want to be a better software developer in general and a better developer for a particular language, I think the ability to read code, understand the impact that code is having, or to understand and be able to visualize that code is going to help you write code better. And for me, the idioms of the language are really about allowing you to take full advantage of what that language is trying to provide you. And again, you're gonna get things done, but I think the question you have to ask whoever you can ask it is either “How would you have done this?” or, “Is there a better way to do it?” Now that you have a working solution, it’s like, “Okay, I have a frame of reference on how to improve that.”

\[00:20:16.05\] And nobody takes advantage of this, to be honest with you, and now I’m on a podcast, so I’ll be flooded... But Satish, who runs the India conferences, a few years ago did this thing called the Go Challenges, and there’s nine of them out there; I can give you a [link](http://golang-challenge.org/). They were really awesome tasks. This was not going to take an hour, this was going to take people anywhere from a day or two, or more. They were really interesting challenges to write in Go, but what was nice about the Go Challenges - and it became unscalable, because it was hard, but people would get a code review and we would do a code review, and it was a contest too, out one of the things that I tell people all the time is if you’re for looking a project and you’re not sure where to begin - and this is what I’m doing during my free classes - start with the Go Challenges, put that code in a repo because you need a code in a repo anyway if you’re looking for work, and I would give everybody one code review for everything they’re doing.

I’d give you like a half an hour to an hour of my time and give you as much feedback as I can on that first one, and then you go and do the second one... The idea would be that if you did all nine of them, by the time we got to the ninth one, you probably didn’t need as much of a review. And I’m talking about more of a readability review. That’s what’s so important to me - the readability reviews are more important to me than anything else. That’s where you begin to start to improve writing that code.

**Carlisia Pinto:** Yes, absolutely. I mean, my Go code improved a ton from getting code reviews when I started working with Go, but not everybody has that resource. And also teaching and reviewing other people’s code helps you learn because you have to think about, “Now, wait... What I was thinking - was it even right? Now I have to check before I actually write it and tell someone that."

But I want to go back to what you were saying about knowing how to read code. I don’t get it. Please explain yourself... Like, what’s the big deal? If I know Go or whatever language, if I know the syntax and I read a piece of code... Let’s say I know the syntax, but I’m not well-versed in actually programming with it, but I read a book and I know the syntax enough to read... So I can read; I can read the flow of the code, I can read “There's a function, calling another function...” What is the big deal with reading code? What is so hard about it?

**Bill Kennedy:** For me, we always tell people to write readable and simple code, right? These are buzz words, and they mean different things in different languages. So when I say “readable code in Go” this is what I mean, and I teach this in the classes. There’s two aspects to readability - there’s one that I consider more subjective, and one that’s incredibly measurable.

Let’s talk about the subjective one. And for everybody listening, I want you to put yourself in a mindset for one second. I want you to think about the team that you’re working with, the team of people you work with day in and day out on whatever project you’re working on. For most people, that’s anywhere from three to five other people. I want you to think about yourself and all of those people, you got them in your head. Now, I want you to ask yourself a single question - do you consider yourself to be the average developer on your team? And by average developer, what I mean is that the average developer should be able to comprehend without any issue every line of code that’s being written. There shouldn’t be anything that’s clever for that person at all, everything is comprehensible. This is why I’m saying it’s subjective.

\[00:24:24.27\] So ask yourself, “Do you comprehend every line of code that’s written in a code base that you’re working? Are you the average developer for that code base?” And then I want you to ask yourself or anyone around you - and keeping it to yourself obviously - “Who do you consider to be average? Who do you consider to be less average? Who do you consider to be more average?” Because readability has to mean that everybody on the team can fully comprehend every line of code that’s being written. And if this is not the case, then for that team and that project, you don’t have a readable code base.

This is also really important because when you’re looking to hire somebody, you have to do this evaluation. If you decide you’re going to hire this person and they end up being less than average, then they have a responsibility to come up to speed. You don’t have a responsibility to dumb down the code for that; they have to come up to speed, and that has to be somewhat measurable during code reviews and all that.

For me, I think it’s easier to hire somebody who may be less than average than more than average, because you’re asking somebody now to really focus on not being clever, and that can be very, very hard for people. And so sometimes I feel like the person who’s above average can cause more disruption on a team than maybe somebody who’s less than average. The less than average developer could cause you to have to spend more time in code reviews and teaching. The person who is more than average is going to cause you probably more pain in trying to get them to stop being clever. So that’s number one.

**Carlisia Pinto:** So just to interject on what you said, that’s a really good point. So you talked about what is readable code... That totally makes sense to me. If you’re super clever and you start doing shenanigans, your code is not going to be readable, and that is not a good thing. Please go on to number two.

**Bill Kennedy:** It’s readable for you, and if you’re the only one on the project, then there’s no issues, right?

**Carlisia Pinto:** Yes.

**Bill Kennedy:** It’s got to be readable for the entire team.

**Carlisia Pinto:** So it seems that you have a sort of a standard, like "We don’t go above this line in terms of cleverness", and maybe just keep it very simple to read.

**Bill Kennedy:** If you put me on a crypto team, I’m way below average, right? I’ve got a lot of work to come up. We cannot be making the code necessarily simpler in certain ways for me. You put me on a team that’s building business APIs - yeah, I’m above average there.

**Carlisia Pinto:** That’s a good point too -- yes. If you look at code for the standard library, that code is going to look a lot different from the code I write, for example, which is a lot of API code. That’s also a good point.

**Bill Kennedy:** Yeah.

**Carlisia Pinto:** So on to point number two.

**Bill Kennedy:** So number two for me is about not hiding cost. Readability is about not hiding cost. It’s about writing code, whether it’s at the line level, whether it’s at a function level, where you understand not just what the code is doing, but the impact that code has on the application, on the machine, on what you’re doing. And this is something where Go shines, because from a Go perspective, our model is not a virtual machine, it is the real machine, and for a lot of people this is a whole brand new concept.

\[00:28:07.17\] When your programming model is a virtual machine, then we can take a lot of liberties in the syntax, like in an object-oriented syntax, let’s say, because the virtual machine is there to worry about the mechanical sympathies and to worry about the cost of things. But when the real machine is your model, then you have some level of responsibility to do things in a way where we’re not hiding cost and you are sympathetic.

The compiler and the run-time are amazing at providing layers of simplicity and layers of mechanical sympathy, so the burden of things that we’d have to worry about, let’s say in a language like C, go away. But we still have the responsibility to write code that doesn’t hide cost.

**Carlisia Pinto:** Cool. I have a question for you - for example, on my team we have a sub-team, the scalability team. They are going to worry about scalability issues. I don’t have so much to worry about that because that’s their specialty. I’m not on that team. Now, give me an example of what’s hiding cost, specifically in Go. I work on a team that has a specific group of people worrying about efficiency - what do I have to do to write readable code, and code that has the attributes that you described, but I’m particularly interested in the hiding cost? What does that mean? Give me an example of what that is and why should I worry about it?

**Bill Kennedy:** One of the best examples I can show in the classroom is an object-oriented programming language that provides what we call features around constructors, destructors, move constructors, copy constructors, and operator overloads, right? And just like C\#, Java C++ - they give us the ability to add these constructors and operator overloads. So during the construction of a value, we can deal with these things behind the scenes with the identities of features that the developer doesn't have to worry about. But if you notice, Go doesn’t have constructors, and destructors, and operator overload. In my personal opinion - and remember, I talk to the language team - I think it’s because these constructs or “features” hide costs. When I look at value being created, whether it’s through a variable declaration or somewhere else, I know exactly what the cost of that line of code is. It’s the allocation and understanding escape analysis. Construction doesn’t show you escape analysis. So I understand the cost of that.

I know that there’s nothing behind the scenes happening that could really affect my decision at the time whether I want to do that or not. And so that’s what I mean by hiding cost - if encapsulate things for the sake of encapsulating, to generalize, and we’ve lost the ability to understand the impact of any given line of code or even any function call, we’re now hiding cost.

I saw somebody... I’ll give you a Go example. I was doing a code review and somebody wrote a function that had one line of code in it, and it was a map of like string interface. You had this generic map and there was a type assertion that they were doing on the key lookup, and they abstracted that one-line map code with the type assertion, because their answer was that line of code looked too complex, and they thought wrapping it in a function would make it simpler.

\[00:32:10.18\] The reality is that what we lost was readability, because at the time you look at the function call, you don’t really understand the cost of this map call. And the reality is you didn’t need the function cost. I mean, we are Go developers... Show me the map in the type assertion. And that’s like an abstraction that’s really not providing value.

So when I talk about cost, I want to make sure that we can look at any line of code - and we can, in Go - and have a reasonable understanding of the impact that that code is going to have on the machine or on our application... And it’s also writing functions, abstractions that are precise and not generalized, so we can also understand what that encapsulation or abstraction is doing and the impact it’s having.

**Carlisia Pinto:** Yeah, but I get confused with so many different advice, and it’s hard -- like, obviously, I’m just going to say the obvious... There are different phases of development, there are different levels of programmer knowledge, and different levels of needs... So what I want to talk about is, for example, at what point -- I see the benefit of worrying about the cost and the impact on the machine that the language is having, but maybe talk to us a little bit more (and then we can move on) about at what point do you worry about it? As you are writing, or do you do an analysis to see where your code is having a negative impact in terms of cost and then go from there? Or do you think about it all the time as you’re writing code? Because we are speaking to our developers, or at least we try to be of help to everybody, right?

So the people who are the experts, they’re going to know how to do this stuff. They’re going to know exactly how to analyze the code, how to address these issues and then we have the people who are coming in and we’re telling them, “Just do it. Just do it, and then move on to the next thing.” And then we have people which I think are the majority of developers who are neither of those groups, and they’re writing code day to day, and then my question to you is, what do you tell those developers? Do you tell them to be always on the lookout for those efficiencies and opportunities, and how do they learn this stuff?

**Bill Kennedy:** So this is where I start getting chills about the language and the engineering behind it. Performance of your Go program is going to come from three places. We can say that it can come from algorithm efficiencies, right? If we can do something in 10 instructions instead of 20, it’s going to be faster. But the hardware is so fast today that you can have levels of inefficiency in your algorithm and still get enough performance.

Two - garbage collection. We've got a low latency garbage collector, and we’re talking about it running under a hundred microseconds... The reality is that if we’re allocating values to the heap that really shouldn't’ be there, there’s going to be a performance cost to that. Again, we always want to talk about performance as, “Is it fast enough?”

Third - Damian did an amazing [talk](https://www.youtube.com/watch?v=jEG4Qyo_4Bc) two years ago at dotGo - it’s about how efficiently we can get data into the processor today, and the mechanical sympathies about that.

And if we break these three things down, Go is really pushing us in the right direction for all three if we take some time to just look at what the language is providing and then again start looking at some basic idioms and patterns.

\[00:36:11.16\] So if we talk about what Damian is saying today, that performance today comes from how efficient we can get data into the processor; he's talking about a caching system. If you’ve noticed, Go basically has three data structures: arrays, slices (which is an array underneath; it’s a vector) and maps. And the key to these three data structures - and maps are doing this underneath - is that it lays data out in a contiguous block of memory, and this is going to create predictable access patterns, and this is going to do these things.

So the funny thing is, as a Go developer coming in, the compiler, the language, and the runtime are taking care of all of these for you without the need of a big, heavy virtual machine. Just by using a slice to store your data, you’re already doing the best that you can.

When it comes to, again, the garbage collector, if we allow some basic idioms around using value semantics for our reference types, then the majority of the values you’re creating will stay on your stack. They will not allocate. You didn’t even have to necessarily understand that all of these is happening, and this to me is where I get super-excited, because you can come to this language, follow some basic principles and design and idioms, and you’re doing all of these things correct when the machine is your model. And over time, as you learn more, and more, and more, you start to understand why you’re doing this, and that’s what I try to do in my class - get you to appreciate why Go has slices, and arrays, and maps, and so you want to use it for yourself and you understand the brilliance behind that.

We teach escape analysis only so you can appreciate the value in the pointer semantics that the language gives you and effectively use them, and understand that the machine is so fast today that you can have some levels of inefficiency, which to me means this - I don’t have to write clever code in terms of making that algorithm so efficient. If it’s going to be a little less efficient but more readable, it’s probably not going to be your bottleneck in terms of performance.

So let’s focus on integrity, readability, and simplicity first. Let’s do those readability code reviews first, and then what’s brilliant about Go is that you don’t have to guess about performance. We’ve got a tremendous amount of tooling that will tell you what isn’t performing well and give you really clear understandings and indications of where and how to fix it. So we don’t have to worry about necessarily the performance impact on every line of code you’re writing at the time you’re writing it if you focus on readability, because you’re going to get the bulk of it anyway.

**Carlisia Pinto:** So is this something that you’re saying "Avoid cleverness, write readable, try to learn the idioms, and by default, by magic, your code will be efficient."

**Bill Kennedy:** Not by magic, but just by Go’s understanding of how everything works. The code is going to be this incredibly sympathetic...

**Carlisia Pinto:** I am joking.

**Bill Kennedy:** Yeah.

**Carlisia Pinto:** I am joking, there’s no magic in programming, okay... \[laughs\]

**Bill Kennedy:** Well, it feels like magic, but Go is doing a lot of the heavy lifting for you underneath by guiding you in the right direction.

**Carlisia Pinto:** Yeah, but my saying magic was more to say, “This sounds fantastic.”

**Bill Kennedy:** The engineering behind the language is nothing short of amazing in terms of its ability to extract a lot of the complexity and the simplicity that it brings. And just on the concurrent programming side - because I wrote multithreaded software for a very long time... And I want to be able to tell everybody, Go has made it easier to write multithreaded software. It absolutely has. But if you didn’t have to try to write software with operating system threads directly in the past, you wouldn’t really understand what Go has done here.

\[00:40:20.03\] From a concurrency side of things, what Go has now done is it’s taken a huge burden off of me to try to understand how to effectively use threads depending on the workloads that I’m having. "Do I need these pools? Do I need this?" ...to a point now where I just have to think about, “What is the work I have to do? What is the best way to break that work up, or to distribute it across the number of threads, in this case, or the number of cores that I have?” And let Go, and the runtime, and the scheduler - it’s incredibly intelligent about what code is doing - do all of the real technical work. It’s brilliant.

You still have responsibility for dealing with synchronization and orchestration, which is complicated enough. But imagine having to deal with synchronization, orchestration, and then figuring out what’s the best way to manage these threads and to run them efficiently. It's a huge burden.

And Go is just continually doing this, and once you start to see what Go is doing here... And what you really need to focus on and you don’t - I think this is where that magic comes in, but it’s taken me four years to get here. This wasn’t like Day 1. It’s taken me four years of study and learning and teaching to see all of these.

**Carlisia Pinto:** Yes, and I’m glad that you’re out there sharing that with us, and here, too. \[laughs\].

You had a few Tweets today about exactly this that we are talking about. You were saying that you want to focus more on the code that people are writing, and I think you have this thing about writing "good code" and also knowing how to read code. And I think if you want we can move on, but if you have something more to say about how to become a good reader of code, I’d be super interested in that. How do you teach yourself how to become a good reader of code, either if you have been programming or if you’re new to programming, and especially if you’re new to Go, how to become a good reader of Go code, to be specific? I’m saying this because by what you’re saying, you’re saying it would serve you well if you become a good reader before you put so much effort into becoming a good writer of Go code, or code in general.

**Bill Kennedy:** Obviously, you’re going to be doing both at the same time, but I think it really helps to find people and mentors that can -- you know when you look at a piece of code and it smells good or it smells bad? We all have that. But the real key then is being able to -- do you have a vocabulary to describe why it smells good and bad and teach that?

The one thing I’ve really learned over the last couple of years as it relates to this programming language at least is your value and pointer semantics on the data that you’re working on is everything. It allows you to understand the impact your code is having on the machine, it allows you to have a consistency with the data, because everything you do in a software program is data-oriented. They’re all data transformations, and if you don’t understand the data, you don’t understand the problem.

And if you don’t understand the semantics you’re using with that data - are we using value semantics that we’re implementing kind of like a mutability around that data or are we using pointer semantics? Is this thing always shared? You can get lost very quickly around "What are my concerns right now as it relates to how I work with this data and the impact it’s going to have when I mutate it?" So for me - and I’ve read a bunch of blog posts on this, too - semantics for me is like key, core, number one. You learn semantics and you implement semantic consistency in the data that you’re working with, and that can just go such a long way to everything else.

**Carlisia Pinto:** \[00:44:23.10\] Yes. I remember you have a very strong focus on data transformation, right? Like, understanding how the data is coming in, what’s happening to the data, and how you process that data and you output it, and what’s going to be done to it later... That keeps you focused on that, and you are going to understand what code you need to write. Did I say that right?

**Bill Kennedy:** Yeah. A classic example for me is the built-in function append. Append is a mutation operation, right? It’s going to mutate something about that slice. If we’re going to append something to it, there’s different things that can mutate. And if you notice, you pass a value into append and it returns a value. For me, append is using value semantics, right? It’s implementing some level of mutability. It’s a value semantic mutation API. It could have been designed for pointer semantics, but that would have been wrong, because we leverage value semantics as it relates to slices.

And this is kind of what I mean... What I try to teach is you’re going to define that type, that data structure you want to work with, and the very next thing you have to do is ask yourself, “What semantic are we putting in play here - value or pointer?” and then the rest of the API really needs to be driven off of that semantic consistency. Append is a great example of maintaining consistency with value semantics even though the API has to mutate things. I think learning that - and I heavily teach that in the classes now - just learning that alone can really make sure your code base is clean, consistent, and I think can grow better over time, especially with developer turnover.

**Carlisia Pinto:** So you said you have blog posts that talk about this...

**Bill Kennedy:** I do, I wrote four parts... I wanted to talk about this and I ended up having to write a four-part series that started with how pointers work... Because in order to really understand the semantics, you have to start understanding how pointers work, and escape analysis, and then we can get into value and pointer semantics and then we can get into kind of like design. So it’s a four-part series there that starts with escape analysis and that allows me to drive that in. I’ll send you some links on that, too.

**Carlisia Pinto:** Yeah, so that’s like the second thing you mentioned you’re going to give me links for, and I want to make sure that I do get them. So please, let’s remember. Okay, so what is the next thing we can talk about? Still under the topic of teaching, actually, I do have some questions... I don’t know if you’re done.

**Bill Kennedy:** No, throw-- I mean, I don’t know how much time we have... But yeah, I’m here.

**Carlisia Pinto:** We have about 10 to 15 minutes left. I’ve known you, Bill, since I started doing anything with Go, which was back in 2015, and I’ve seen you speak at conferences, I’ve seen you teach classes, I’ve just hung out with you at the conferences, and the level of stamina you have is absolutely crazy... We are curious to know how do you keep it up? Do you have a regimen? Is it the water you drink? What is that you do, because I want to get me some of whatever you do.

**Bill Kennedy:** That is funny. So I’m going to be honest with you--

**Carlisia Pinto:** I’m sorry - interjection - and the amount of travel you do is just mind-boggling. I could never do it.

**Bill Kennedy:** \[00:47:59.19\] The amount of travel I do is mind-boggling, and I don’t even know how I do it at all, to be honest with you. Over the last six months or so, I’ve learned to take yoga very seriously. I can actually sit on a plane with my legs crossed, which helps my back so much. You can’t even imagine. So I think that yoga has been huge for me as I’m getting older.

But when I’m on the stage or I’m in the classroom, I feel a personal responsibility to not just teach, but to entertain people that are there, because it’s a really long day. And if I get a group that can feed the energy back to me, now I could do it all day. When I get a group that is dead - and it happens - it’s a struggle.

Where was I? I was in a training, I think at the beginning of the year - I’m not going to say where - and the group was just dead. It was a three-day training, and I was exhausted by the end of day one, and even more exhausted at the end of day two, because there’s no energy coming back at me. Halfway through day three I finally just stopped, because I couldn’t do it anymore. I just said to the group, I said, “You guys are killing me. You’re just like straight up, nothing’s coming out of you guys... I don’t understand what’s going on.” And they all just kind of turned around at me at the break and they’re like, “Bill, this is the best training we’ve ever had” \[laughs\] and I want to just strangle them. I’m like, “Guys, you could have been telling me this. I could feed on that energy.”

I think energy from people is so important, and so if I’m on that stage and I’m getting animated or I start animating more in the classroom, it's because I’m trying to, as [Florin](https://gophers.slack.com/archives/C0F1752BB/p1521144310000137) just said, I’m trying to be a vampire and take the energy out of the room. So I think for the most part, that’s how I do it. Now, I won’t lie, having a couple of espressos during the day can really help too, but I need that energy from people or I will be as exhausted as you can imagine.

**Carlisia Pinto:** Yeah, I guess it’s the espresso. I should drink more espresso. \[laughter\]

**Bill Kennedy:** Not the espresso... You could start shaking. I'll have one in the morning and I'll have one after lunch. I try to keep the espressos down to just two. But if I’m in a room that’s dead, then I will definitely need another one at some point. So if I walk into your classroom, I need everybody energized and happy, and telling jokes... I know it’s me talking for basically seven hours straight, with that hour break for lunch, but the more interaction, the better.

**Carlisia Pinto:** There we go... And bring espressos with you. \[laughs\]

**Bill Kennedy:** You've got to have an espresso machine, it’s part of the contract. \[laughs\]

**Carlisia Pinto:** Yes.

**Bill Kennedy:** Do you know what I’m seeing more and more, Carlisia? Those Nespresso machines are showing up more and more in the offices.

**Carlisia Pinto:** Oh, my goodness, I’m a trendsetter... Look at me.

**Bill Kennedy:** Yeah, you are. They’ve heard it on the podcast, and now they’re buying them.

**Carlisia Pinto:** Yeah. See, I discovered it all by myself.

**Bill Kennedy:** \[laughs\]

**Carlisia Pinto:** Alright, I have you to thank for it, you know...

**Bill Kennedy:** Yeah.

**Carlisia Pinto:** I spent a ton of money on that machine. Anyway, shall we move on to Go projects and news?

**Bill Kennedy:** Sure.

**Carlisia Pinto:** I think you have some stuff to mention.

**Bill Kennedy:** \[00:51:50.26\] I do. So I was just in India for the [Go conference](http://www.gophercon.in/) there... A very quick back-story... So I met a young man last year named Aman Kapur... A young man, he was in school, and he wanted to take my training class last year, so I was fortunate enough to get him into the training class last year.

And I got to meet him again this year. And again, he’s a student, I think he’s in his final year. What’s amazing about this young man is he saw a problem at his school where the school is trying to place people in jobs, but all of the information about placement gets lost in this 1990 banner that moves across the screen, and there’s no real way to get to the data or interact it, and Aman built a mobile application using Go on the back-end to scrape all of these data - he calls it [Placement Pal](https://placementpal.com/) - so the students don’t have to miss anything. They can see all of the opportunities they have for getting jobs, and it’s all in one place. And I saw what he built and I don’t think I could have built it. I mean, he built a beautiful mobile app. It was all browser-based but for mobile - amazing. So Aman Kapur - I’m just so impressed with this young man and what he’s doing, and he’s just starting out. So amazing.

The other thing that I saw at GopherCon in India was a talk by Matt Ellis. Next to Stabby's talk - Sean Kelly gave an amazing talk on interfaces. Matt did a talk on a product he’s working on called Flogo - [Flogo](http://www.flogo.io/). They call it an ultralight edge microservices framework, but it’s - and maybe I’m wrong, but my impression was like, “Oh my God, a business dev person with just a little bit of programming skills could actually build out integrations and little web services on this thing.” It was really impressive with what they built, and they created a plug-in environment so you could add anything. They’ve already got stuff for like sending taxes, and these types of things.

You've gotta look at it because it was mind-blowing what he was showing me, and the UI's were all there... I think it’s going to help a lot of companies to be able to move quicker on certain types of projects that they need to work on. And like I said, you didn’t necessarily need the highest-end developers to get -- but your higher-end developers could add plugins. Anyway, Matt Ellis of Flogo - really impressive stuff.

**Carlisia Pinto:** Yeah, it looks very cool.

**Bill Kennedy:** Yeah, really impressive. So those are my two Go projects.

**Carlisia Pinto:** Okay. So what is this thing about automation that I have here on the notes?

**Bill Kennedy:** So I’m in India, I’m watching the talk, and I have no idea how to pronounce this name, Carlisia - Niranjan Paranjape… I’m completely destroying it, so I apologize… He puts up a slide that says, “[If boring, repetitive things aren’t automated, a manager gets hired](https://twitter.com/goinggodotnet/status/971968883866267648).” I see this slide and I’m laughing, and I take a picture of it and I send it out in a tweet. Well, since I sent that tweet out, I’ve had a little over 123,000 impressions on this tweet, with like 8,000 people engaging on it. I’ve never had a Tweet that’s had this much activity.

\[00:55:57.24\] This idea has resonated with so many people that I just found it super interesting. People had some really interesting perspectives on the tweet as well, but it’s kind of interesting, right? We don’t automate things, so then you need to hire a manager to deal with all of the people that you need to hire. It’s fascinating.

**Carlisia Pinto:** That is fascinating, and I just plus one that, so you have one more now.

**Bill Kennedy:** \[laughs\] I never had a Tweet go that -- I mean, it's small, but still, I’ve never had a tweet go that viral and resonate with so many people... So it was kind of fun to see. Actually, I sent him an email about it yesterday and he was telling me like, “Oh, wow, I had no idea.”

**Carlisia Pinto:** Now, I want to call it a wrap pretty soon, but before we do that, I do want to ask you about CFP submissions. I know you have some tips for us, and conferences can definitely use good talks, and for us to get good talks, the submissions have to be good... So tell us.

**Bill Kennedy:** Yeah, just really quickly... We need to see a whole new set of people come up and start speaking. It can’t be the same people over and over again. I’m sure everybody’s tired of hearing me, right? And I’m really not speaking much anymore on stage, unless -- I’m trying not to, I’m doing a lot of trainings. But in helping people and looking at submissions, what I’m finding is either there’s just not enough detail in terms of being able to make a solid decision, and sometimes there’s too much detail; it can hurt you as well. You got to have this medium where the reviewer can get a good sense of what this talk is going to be. Can it fit properly within the timeframe and can you deliver it? Carlisia, as you know, we have that document that kind of gives a really great guideline into preparing a talk and the CFP.

**Carlisia Pinto:** Yeah, Dave Cheney's [recipe](https://dave.cheney.net/2017/02/12/how-to-write-a-successful-conference-proposal) that we sort of put together...

**Bill Kennedy:** Yeah, yeah, stole...

**Carlisia Pinto:** Yeah, that's right. \[laughs\]

**Bill Kennedy:** And I keep asking people all the time... People have these amazing ideas for talks; I’m here to help, just to reach out. I’ll work with you on that document and you’ll have a very solid content to be able to submit, and I think you’ll have a higher success rate of getting in now that I’ve kind of been on both sides of it. I just really don’t want to see people hesitating at all. Everything you’re doing is amazing and the community should hear about it one way or the other, so don’t hesitate to submit to talk even if you want to start with lightning talks. A lot of times you’re going to go through the same process anyway.

**Carlisia Pinto:** Yes. And people who have done talks, got their CFP's accepted, they have experience... But it’s so good to see fresh faces, it really is. So we’re rooting for you, new people. Get your talks submitted and accepted.

**Bill Kennedy:** And ask for help. I think the Go team on the Wiki now has a list of people as well who are waiting for you to reach out to them. I think Russ Cox is one of them.

**Carlisia Pinto:** Francesc Campoy.

**Bill Kennedy:** \[00:59:35.04\] Yeah, Francesc... So I’ll probably throw that link out there, too. Those people have put their name out there because they want to be bothered. They want you to reach out to them, they will give you the time, so don’t feel like you’re bothering anybody. That’s why their names are there. And just take the opportunity if this is something you really want to do, because the community needs you, at the end of the day. They need you to share what you’re doing.

**Carlisia Pinto:** That’s a very good point. And with that, I would love to call it a wrap, even though I know we could sit here and talk for another five hours. Bill, it was so great to have you. Thank you, and especially thank you for joining us in such a short notice.

**Bill Kennedy:** I’m just happy to be in Miami.

**Carlisia Pinto:** Yeah. Are you going to be at any conference coming up?

**Bill Kennedy:** My next conference is GopherCon... Well, it’s not GopherCon maybe, but it's in China, which is April 13th through the 15th. And then after that, I’ll be in the Singapore conference on -- I think it’s May 4th I’ll be in Singapore. I’m going to go to Singapore twice in the next few weeks. I’m going to be in Singapore before the China conference.

But yeah, China and Singapore are my next conferences, and I’ve got tons of awesome stickers, and I just bought a bunch of T-shirts from [Women Who Go](https://www.womenwhogo.org/). So if you’re a woman in tech - because I just got the women fit shirts - and you see me in one of these conferences, I’ll have T-shirts with me as well.

**Carlisia Pinto:** Yes, those are good points all around. I did see that you have great Heptio stickers. Have you learned how to pronounce [Heptio](https://heptio.com/) yet?

**Bill Kennedy:** Heptio?

**Carlisia Pinto:** Heptio.

**Bill Kennedy:** You’re throwing me under the bus again, there we go.

**Carlisia Pinto:** Sorry, I had to say that. At least I think that’s how it’s pronounced. And yes, so there is an initiative to collect funds to send people to GopherCon, people who otherwise would not be able to attend... And if you give your money, you’ll get an awesome T-shirt in return. I got myself two -- well, one for me and one for somebody else. But the point is the T-shirts are so cute.

And with that, I would like to congratulate the panel, which is me, Carlisia, and all the listeners. Thank you, Bill, and everyone... Check us out on Twitter @GoTimeFM. If you do have any suggestions for a future show, topic or guest, go to github.com/GoTimeFM/ping. And with that, bye everybody!

**Bill Kennedy:** Bye, everyone. Thanks for listening.
