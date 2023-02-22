**Gerhard Lazu:** Tim. Fourth time lucky.

**Tim McNamara:** I'm so sorry, Gerhard. Honestly, I wanted to be there the first time, I wanted to be there the second time, I got injured, I couldn't come on the third time... But now I'm here, and I want to know that -- like, my time is yours. Yeah, feel free to use it however you think would be most suitable.

**Gerhard Lazu:** Well, I have to say thank you very much, Tim, to our listeners. That's how badly I wanted to have this conversation. I tried until it happened. Okay? And we have been delaying it, I think by a few weeks, and we spoke about it briefly in September, and then holidays happened, and then all sorts of other things happened... And I said, "Okay, this has to happen." And again, there's like another big event coming up for me personally; we will talk about it a bit later, I think in episode 90. But for now, what's important is that I really wanted us to have this conversation with Tim. So thank you for joining us. Welcome on Ship It.

**Tim McNamara:** No, my pleasure. It's my genuine pleasure. I really love the way that the show has progressed, and it's quite a privilege to be speaking to you here.

**Gerhard Lazu:** Thank you, Tim. I appreciate it. Now, how are your ribs, your physical ribs? \[laughter\] That was attempt number three, right?

**Tim McNamara:** Right, right. So what happened... As context, I was riding a mountain bike along the river, came across a ditch, and I thought, "Oh, look, that's looking a little bit deep. I should slow down." I didn't quite slow down. I thought, it'd be fun to try and get through the ditch. My front wheel went down and kind of got stuck on the other side, but my body kept going. So I spent about 10 hours in A&E the night before one of our interview slots. And I think I texted you at about 1:30 in the morning, saying "Look, I'm--"

**Gerhard Lazu:** You did, actually... So I knew that you really cared about it, right? I mean, if you're like in a hospital, and you remember to text me "Hey, Gerhard, sorry, I will not be able to make our slot." I mean, you have no idea how much I appreciate that, Tim. Thank you.

**Tim McNamara:** Yeah. So ribs are okay, actually... Bruising is fine, that will go away. I've injured some ligaments that connect my ribs and my spine, which makes it quite hard to breathe in, and also to do things like lie down or put on my shoes... But I've been told that I will heal; bodies are crazy, they're good things. And yeah, this is all part of me understanding my own limits. I'm no longer sort of 19, and --

**Gerhard Lazu:** And Superman, so we clear that, right? You're not Superman... \[laughs\]

**Tim McNamara:** Yeah...

**Gerhard Lazu:** You can't fly. Well, you can, but...

**Tim McNamara:** Multiple years since I'd been on a mountain bike, and one needs to appreciate one's own limits sometimes.

**Gerhard Lazu:** Right, right. So how are you with laughter?

**Tim McNamara:** Laughter is okay, actually. I've been surprised...

**Gerhard Lazu:** Dang it!

**Tim McNamara:** Yeah, you really -- but sneezing... Like, let's say there's some dust in the room - that would basically send a dagger into my ribs, which...

**Gerhard Lazu:** I'm not sure what I can do about sneezing. I could have helped you with laughter... But let's see. I can only try. So you are a public figure. I enjoy reading your tweets very much. I'll have a question related to your Twitter handle, which I think is great. However, you're tweeting when -- I think it was like the first time that we were supposed to record, that you have a very early morning meeting. So I think you set your alarm clock for 5:15 AM. Now, you're ahead of everyone, because you're in New Zealand. So no one can catch up to you. You're always ahead of the whole world, okay? We try, but you're many hours ahead of everyone. Was that early morning meeting worth it?

**Tim McNamara:** Yes. So, I am in a very privileged position where most of my team -- so I can work remotely from New Zealand. This is very rare within AWS. Most of my team are based in the West Coast of the United States, and the remainder are in Europe. And so my day, or my week is typically staggered so that I will have one or two early morning meetings. 6 AM Here is 9 AM in the West Coast of the United States. And over where you are, Gerhard, depending on daylight savings, it's either 10 or 12 hours away. And so someone has to be up late, or awake very early.

\[00:05:56.08\] Typically, people are very understanding of the fact that I'm in a very strange timezone... The only trouble is if I wake up early, and then also don't get to sleep properly, because I'm sort of mentally preparing for the upcoming discussion, my brain doesn't really have a very good off switch. That's the thing that bugs me.

**Gerhard Lazu:** I know what you mean. Yeah, it just wakes up; the brain wakes up separately from the body, it starts churning, and then it wakes up everything else. And usually, it's like work-related thoughts, experiments, things... "Oh, have I said that? Have I done that?" I know exactly what you mean. I get asked quite a lot, too. Okay, it's not just me; that's great to know. And I'm sure others listening to this will be able to relate. So you mentioned that you work at AWS... What do you do?

**Tim McNamara:** So my job title is senior software development engineer. My job role though is a little bit broader than a typical software person. So I work within a central team, supporting the development of the Rust programming language within Amazon. That includes AWS, as well as retail, and into like Amazon Go stores; if you're in the States, you might have gone into it, in a physical store... And there are bits and pieces of Rust working in embedded -- in the shops themselves... All the way through to some of our kind of flagship services, including Amazon S3, have components written in Rust. And this is now a technology that is strategically important enough for the company to have two teams actually working on the language.

So the team that I work on is mostly centered on internal support. So we do some technical things around like supporting the internal build system, we have a mirror of the open source sort of package ecosystem... Crates.io is the Rust equivalent of let's say Npm, for sort of the Node ecosystem, or PyPy in Python... And the other team is primarily focused on, let's say, the compiler, or some other core components of the Rust ecosystem, like the Tokyo runtime. The division isn't clean, but that's the broad division of work.

The thing that is slightly unique to my job is I've increasingly become seen as the person who is driving education, or adoption of Rust at Amazon. So this year, I'm actually going to be leading an education project for like "How do we teach tens of thousands of programmers Rust?" I mean, it won't actually be that big, but this is kind of the overall goal...

**Gerhard Lazu:** The scale, yeah...

**Tim McNamara:** ...that we want to create a pathway for teams that are looking to adopt Rust, to be able to give them a path forward... Because most services at Amazon are written in Java, and teams choose their own tools. So there's no way to sort of centrally dictate that such and such a team or such and such service must be implemented in such and such language. Instead, we kind of need to work kind of slowly, organically, with teams that are interested, but trying to work through their pain points with the language and with the ecosystem.

And one of the things that we've found is that teams that are looking to adopt Rust will typically have one or two people who have been tinkering with the language, and they've found that things run really quickly, or that they save a lot of memory, and that they reduce the operational burden... So their systems are more stable, even in a prototype stage. But then there'll be a point at which they hit this kind of organizational inertia, where at like the engineering manager level, or let's call it the middle management tier, will suddenly -- the immune system of the organization will respond. And it will say, "Whoa, whoa, whoa, whoa, whoa... This is making me really nervous. You're implying change, and change is very dangerous." But at a more senior management level, some of the -- Rust is being talked about so pervasively now that it's impossible for senior leaders to ignore it, and they're really sold by performance benefits, by safety benefits, by security.

\[00:10:17.23\] And so these are kind of the internal dynamics, that we have teams that are very optimistic about their futures, and they're keen to experiment; let's say one step above or beyond them might be a little bit of resistance, or a skepticism of a lot of the claims. The Rust community seems to make these ridiculous, audacious claims, like it will save you, let's say -- actually, I'll talk about my own ridiculous, audacious claim, which is that "Why don't we as a software industry reduce our energy use by 50%?"

**Gerhard Lazu:** Now that's something worth doing. Right? Forget about your build times, right? Forget about latency; how about we save the planet first?

**Tim McNamara:** We can. And actually, my personal view is that software engineering is now in a significantly important part of social change, because all new products, I'd say the vast majority of them are software-first, or at least software-enabled. This actually means that the people who implement software are an integral part of social change. And I am one of these crazy people who, for example -- like, I have the electric car, I cycle to work whenever I can...

**Gerhard Lazu:** You work from home, what are you on about? \[laughs\]

**Tim McNamara:** I work from home, but there's an office though, like further down \[unintelligible 00:11:44.26\] I do primarily work from home, so this is a bit of a cheat. Dang it...!

**Gerhard Lazu:** Quick, Tim; think of something else.

**Tim McNamara:** I was on a roll. I was gonna say, I've been a vegetarian for like two decades now, and it was primarily for ecological reasons... And so I am not normal from that regard, but I still think that there was an argument that I feel quite persuasive; that we as a software industry can do better. We can respect our users by giving them secure software. We can respect our businesses by reducing waste, and also -- and primarily from the Rust perspective, this comes in memory usage.

So a lot of these cloud platforms or cloud services are very -- if you notice the way that their pricing structure works, typically compute scales quite well, so it's quite cheap to oversubscribe CPU. You know this if you've ever managed your own Kubernetes clusters; you can kind of oversubscribe CPU quite well. But one thing that is much harder to oversubscribe is memory. Because if suddenly you have two applications that want to use all the memory, neither does very well. Whereas if you have two applications that suddenly require 100% CPU, things sort of slow down, but they don't halt.

**Gerhard Lazu:** Crash.

**Tim McNamara:** They don't crash.

**Gerhard Lazu:** OOM. There is no OOM for CPU.

**Tim McNamara:** That's right, that's right. The scheduler just kind of figures it out. And performance degrades, but it doesn't catastrophically blow up. Now, my hunch - and this is from the perspective of someone completely outside of pricing, and all the rest of it, is that Rust's ability to provide very low memory use is actually as significant as some of the other benefits that we've talked about... Like being able to use significantly less compute, because it means that the density of services that you can put into some sort of compute container, let's call that a Kubernetes cluster, or it could even be a virtual machine, or wherever else you are hosting your applications... If you're using serverless as well, we can throw things in tiny, tiny containers, which run much, much cheaper... And by the way, run much faster, especially when we're thinking about latency-sensitive applications as well.

\[00:14:14.14\] So our experience at AWS is that the real benefit from like a Rust rewrite is at like the pain 99.99, that is tail latencies. So in garbage-collected languages -- so just for anyone who's not aware, a garbage collector is a kind of an appliance that sits next to your application, that manages memory. So if you're using Go, or Java, or let's say even Python, or JavaScript, and now TypeScript I suppose as well, your application will be running alongside - what's also known as a runtime - some software that runs alongside your application, that's doing some bookkeeping to keep your system alive. Now, in Rust, we don't require that runtime. So there's actually less work for the computer to do. And the reason why this becomes important is that the garbage collector actually competes with your own application for time. And in the worst case, it will actually halt - it's called "stop the world" - execution of your application to do its own bookkeeping. Now, that's a problem, because you want to serve your users.

**Gerhard Lazu:** Yep.

**Tim McNamara:** And so under periods of high contention, these garbage collection pauses are very, very problematic, especially at large scale, when your servers are running very hot, but you might have hundreds -- let's actually take one public case, which is actually not from AWS; it's from a company called Discord. \[unintelligible 00:15:51.20\] it's messaging; it's a little bit bigger than that, but it's primarily a messaging system. And Discord had a service running written in Go, that was running very hot, and they encountered that every two seconds or so their tail latencies would spike by hundreds of milliseconds. And this was just because of the garbage collector. And Go's garbage collector is actually well known for being very good, and for actually respecting the application, and doing its best to kind of stay out of the way.

So the Rust \[unintelligible 00:16:32.04\] actually had two effects. One, we had less memory usage overall, which goes to the earlier point... But what we're talking about now is the latency - there was even at p 99 point whatever it is, they never had these latency spikes. And so actually, the user experience suddenly becomes much better.

You think about a relatively popular messaging system, one in every 100 messages is going slowly; actually, it's going to create a lot of like lag for that conversation as a whole. Like, it doesn't take that many messages if there are ten recipients, for the p 99 to start really impacting the usability of the entire experience.

**Gerhard Lazu:** We will dig into a few more stories, because I was looking to see -- so first of all, a few months ago you gave a talk at AWS re:Invent that fascinated me. I thought it was an amazing talk. And not just because of you, because of the topic as well. Right? So I think they both worked really, really well. The title was "Rust is interesting, but does it really make sense for me?" We will link it in the show notes. At the beginning of the talk you mentioned that software development today is unreliable, insecure and wasteful. I think we have dug into the wasteful part quite a bit. But obviously, there's like other implications for the programming language that you choose. The runtime is important, but also what happens before you run it in production.

\[00:18:03.13\] Now, you gave the Discord example; that was a very good one. In your talk, you presented Alan Ning, an SRE at Tenable.io. And he wrote this in 2021. He said that with Rust, they saw a reduction of 75% in CPU usage, and a 95% reduction in memory usage in production. I was disappointed, I was hoping 100%... \[laughs\]

**Tim McNamara:** Yeah. Clearly, Rust has work to do.

**Gerhard Lazu:** But that's good enough, right?

**Tim McNamara:** 95% is, a good baseline, let's say...

**Gerhard Lazu:** Not enough. It should be 99. It should start with 99, right? That's when we start paying attention. So seriously, they went from using over 1000 CPUs, to 300. And again, we will link to the blog post for others to see. So that's great; less CPU, less memory, but latency. I'm a big fan of low latency. Why? Because that makes everything fast. And everything fast - there were plenty of studies that showed how much money time saved, the perceived impact of responsiveness of pages has on users buying things, or performing tasks... So that cost is immense. Not just for the people running the software, but for the people using the software; the users. There's many more people using the software than writing the software. So that's very important.

Now, let me check... So now I'm going to watch my dual fiber WAN setup for latency, okay? That was attempt number for; we recorded, but your fiber was -- well, it wasn't your fiber, but anyways...

**Tim McNamara:** Yeah, my internet connection was just not really...

**Gerhard Lazu:** It wasn't that. But anyways, like latency in internet is a big deal.

**Tim McNamara:** This is something I appreciate a lot, by the way, being in New Zealand and having services quite frequently hosted in the United States or Europe... That apparently, the speed of light requires that I wait for hundreds of milliseconds quite frequently.

**Gerhard Lazu:** We need to bring them closer to you. So when I was setting something up, I always thought about "Okay, let me put this thing in Tokyo (that was like last week), so Tim can access it faster." And we'll talk about the thing that I deployed to Tokyo a bit later. Maybe not in the recording, but anyways; we'll see.
So Fastly and DNS is a three milliseconds flat for me. And that's really important. That's a DNS, big CDN, lots of stuff runs through it. GitHub is 14 milliseconds. Not bad. You've seen that they've improved a couple of things in their infrastructure recently. My ISP has inconsistent routing to Fly.io. So sometimes, some routings -- and I can see them going from 35 seconds all the way to three seconds. So that's like a problem in itself. So latency is a big deal.

Now, Alan from Tenable, when they replaced Node.js with Rust, the latency per packet dropped by 50%. And that is a huge, huge thing, because that means a lot of money saved, both in terms of cost of running it, but also for the users. Again, we will link to the show notes.

Now, this low latency - I think we're on a roll here. You shared a link with maxday from Lambda Cold Starts. 10 Lambda Cold Starts. This is updated daily, and it compares different languages, lambdas using different languages, and how do they compare. Do you want to tell us a little bit about that, since it was your post? Well, you posted it on Twitter...

**Tim McNamara:** Okay, so I'm curious as to whether or not I should tell that... So it's an interactive website that invites you to reload, and then see in real time how fast it would take for ten cold start applications written -- so it's the same application written in multiple languages. And the punchline is that Rust is the fastest. In fact, it's almost instantaneous.

**Gerhard Lazu:** Numbers? We need numbers.

**Tim McNamara:** Actually, I don't have the numbers off the top of my head, but--

**Gerhard Lazu:** 15 milliseconds.

**Tim McNamara:** \[00:22:08.21\] Whereas let's say in the worst case it's like a Java. Now we're talking, it moves from, in the Rust case, like, let's say instantaneous, or unable to be perceived; less than 15 milliseconds is kind of the limit of human perception. And comparing that to seconds for the Java case means that there is a very significant difference in terms of the user experience for this service. And if you could imagine having functions chained together, so that one depended on the other, now you would actually amplify -- so this problem would cascade, that if you have slow cold start latencies, that our user experience would kind of degrade very, very quickly, and it would be a very poor experience.

So there are a couple of reasons why this is the case. One is that - so let's compare Rust versus Python. So I think in the Rust case, all of the ten invocations took around about 15 milliseconds. So that's 1.5 milliseconds per function invocation, versus let's say a Python, where it's somewhere in the region of over 100. In fact, let's go for -- like approximately 150, just to make the mathematics a little bit simpler.

There are multiple reasons why this occurs. One is Rust -- so the implementation of AWS Lambda is actually an open source package, an open source thing called Firecracker. Now, Firecracker runs containers. And containers need to be downloaded from somewhere. And smaller containers are easier to deploy than larger containers, because they are faster to download. So there is a significant benefit from actually having smaller containers. So Rust kind of wins by default there.

The other thing to note is that because the Rust Lambda function will actually finish executing before let's say the Python interpreter has actually interpreted the script, like has begun to read the Python script. So the Python interpreter let's say might take dozens of milliseconds to actually load up; in the worst cases it can be like over 100 milliseconds itself. And by that stage, Rust would have already finished. And if we think about this, about the change at Amazon... So our personal -- our advice for our internal builders... We use the term "builder" internally, which means anyone that is writing software. Where other people would use software developer, we say software builder. That's just a quirk of the culture. And so our advice is to deploy to Lambda first. So if you're writing a new service, write using Lambda. If you can't get what you need out of Lambda, then go to Fargate. And if you can't get what you need out of Fargate, then go to EC2.

So the reason why we use Lambda first is because it reduces the operational burden of service teams. We talked a little bit before that service teams choose their own stacks. They also are responsible for their own operations. It's on the team to actually make sure that they are available to support the application at the scale across the whole fleet of AWS.

Now, Lambda is -- and now we're talking about "Okay, well, we need to actually reduce..." It's actually very expensive to run AWS. I mean, people might joke it's expensive to buy from AWS, but it's also relatively expensive to actually run the thing. It's quite big.

**Gerhard Lazu:** \[00:25:58.01\] Oh, yeah.

**Tim McNamara:** So then the question is, if you can reduce, let's say, the cost of running the internal systems -- and in Java, if we look at that Lambda Cold Start analysis by maxday... I'm just opening up the page now. Java 11 takes 435 milliseconds; Java 8 is a 530... Whereas Rust is 15 milliseconds. And by the way, the memory is reduced by at least 75%. So it's a quarter.

**Gerhard Lazu:** So just to put this like in X numbers... Java is 29 times slower than Rust. Not 10x, 30x slower. Go is 4.3 times slower. In other words, Rust is 4.3 times faster. So in a way, you can say that Rust is to Go what Go is to Java. And that's what the numbers are saying. So if you ever wrote Java and you thought "Wow, Go is fast", try Rust. Seriously. \[laughs\] The numbers are there. And we haven't even touched the memory, but you were going to say something about memory. So tell us about memory, Tim.

**Tim McNamara:** The memory case is significant, because then we can actually bundle the applications into smaller containers, which means we can pack more containers in the same host, and actually get overall savings across the entire system, or the whole fleet... Which at AWS' scale translates to, conservatively, hundreds of millions of dollars, and potentially, another order of magnitude. And so my job, or at least kind of the goal that I've set for myself as someone who's trying to advocate for this language internally is to save the company $100 million a year.

**Gerhard Lazu:** That's a nice one. By the way, you're saving the company, but what is not said, that you're also saving users money. Because you, running, will be paying less, regardless where you run, by the way. Even if it's not AWS, by using a language which is very nicely optimized, latency is better, memory is better, you're paying for less, you can do more with fewer hardware, fewer resources... Who would want that, without compromising on latency? And there's something even more important; apparently, you will love it. \[laughs\] That's what Stack Overflow survey says. Right?

**Tim McNamara:** Yeah. So it turns out that developers really like programming in Rust. And one of the worst things about becoming an advocate for the Rust ecosystem is that you kind of don't stop talking about Rust. \[laughs\]

**Gerhard Lazu:** I'll change the subject soon, but... A few more minutes, and that's it. \[laughs\] No, no, no. Please keep going, Tim. Please keep going.

**Tim McNamara:** And there are a few reasons why this is the case. Rust as a language provides a couple of primitives for being really expressive. And it's a very consistent language. And it came late, and therefore could learn a lot of lessons from, I guess, its peer languages.

So at this time I'd like to chat about a couple of these... One of them is some of these language features. So Rust is a programming language that kind of bolts together C++ on one side, and let's say maybe Haskell or ML on the other side. And if you know the history -- so functional languages have typically had pieces in them like pattern matching, and -- the technical term is... Actually, let's try and avoid the jargon. But in Rust language, it would be an enum; so an enum you think of as like a set of named constants. But actually, in Rust and in some other functional languages which it's derived from, you can actually have data inside each of these values. And so this provides a very elegant way to model state. And one of the distinctive characteristics between, say, a Rust and a Go is that Rust will require that you always handle the error. In Go, the underscore is available to you, if you want. \[laughs\]

**Gerhard Lazu:** \[00:30:31.28\] Yeah. I use it often. Guilty as charged.

**Tim McNamara:** Right. It's because you know that error will never occur.

**Gerhard Lazu:** Right. Famous last words... \[laughs\]

**Tim McNamara:** Well, yeah, exactly. I mean, I was a Go programmer for a year and a half or so at Canonical, and we had a large application, and we had hundreds of these things. And to me, now, they just look like grenades, or just mines; at some point in the future there will be and edge case that will cause everything to crash.

**Gerhard Lazu:** Minesweeper, that's what I'm thinking. Minesweeper. You never know what's gonna be behind that click...

**Tim McNamara:** That's right.

**Gerhard Lazu:** Okay, okay. How does Rust handle errors?

**Tim McNamara:** Every function that can, let's say, result in an error state is modeled as an enum with a good state, or let's say an okay state, and an error state. And packed inside the okay component is what you expect to be the happy path. And inside the error state, or error side of the enum, is whatever you want. In fact, the only requirement is that it knows how to print itself to the screen. Essentially, once you can do that, it'd be used as an error. And the funny thing about this result type - so the result is the name of the enum... The result type is not defined within the language itself. It's not a special case; it's actually a special case, but it's actually provided by the standard library. It was an idiom inserted into the standard library, and because of the ubiquity of the standard library, and IO - so the standard library provides facilities for being able to interact with the file system, and so forth - that this pattern of returning a result type became pervasive inside the Rust ecosystem. And it's just kind of a downstream effect of having a very well-designed language.

I've sort of thought about Rust in terms of "Well--" So Rust was created because of this existential threat that Mozilla face from Google Chrome. Firefox needed to be faster, and it could do that with parallelism. But C++ was actually too difficult for them to fix -- actually, all they wanted to do was parallelize CSS decision-making. So like which style is applied to which elements? And this should be something that's inherently parallelizable, but they weren't able to do it. And essentially, a team was given, let's say, five years to create a new programming language and a new browser that would compete with Chrome. And Rust feels to me like a kind of language you would get if you put a team on a project to develop the world's best programming language, and you've given five years to do it.

There will be something that replaces Rust. It's not perfect. There's things that kind of irritate me. And I am particularly irritated by the fact that it's quite difficult to learn; some of its semantics are different. But irrespective of that, it's proven to be very, very practical. So if I can talk from our own experience within AWS, we have been able to reimplement the storage node that sits underneath S3, this thing called shard store... So a shard store stores shards of data. So the way that S3 works is it will take any input objects and split them up and store them in different places physically. And these are called shards. And the shard store reimplementation in Rust has actually been formally verified as resistant, or I think immune to most classes of errors.

**Gerhard Lazu:** \[00:34:23.23\] When was this? Is this something recent?

**Tim McNamara:** Amazon S3's shard store -- in terms of the timing, I think it was publicly announced in 2021... But I'm actually unfamiliar, or actually I'm not sure exactly when the project started. So actually, Rust has enabled S3 to perform better almost by definition at hyperscale, as well as -- how am I going to say it? We've actually been able to increase not just the performance, but also the reliability and robustness of the application itself?

**Gerhard Lazu:** Yeah. And the correctness, most importantly. It's more correct than it was before.

**Tim McNamara:** I actually don't know whether or not it exceeds the other implementations of the storage node internal API, or whether or not at least it meets the very high standard, if you know what I mean. So it's very difficult to, in some sense, dethrone a service that is running very well, so Rust really needed to kind of prove its worth. And Rust has had a really big impact at these very large services, but one of the places that I would like to kind of point out, that it's also -- this isn't public, because it's internal developer tooling, but one of the other places that it's doing really well is in kind of these developers CLIs, just for things like doing plumbing, or just kind of developer productivity tools.

Amazon staff probably work on either Linux or macOS laptops, and there might be ARM or Intel chips, and then they deploy to Linux-based servers that, again, might be x86 or ARM architecture. And so it's quite difficult over a long period to kind of create a developer utility and make it installable. For example, with let's say Python, you need exactly the right version of the interpreter, as well as all of its dependencies, and they need to be the right version. So kind of creating that, a lot of those problems go away with Rust, because it's actually able, like Go, to be "statically compiled", which means it kind of bundles in all of its dependencies inside the compiled artifact, and compiles them for the target architecture, and therefore makes an application much more standalone.

**Break:** \[00:36:58.29\]

**Gerhard Lazu:** I know that, again, back to your AWS re:Invent talk, AWS are big believers in Rust... It's present in many places within AWS, including services that we use. I know I use one of them, Amazon Prime. I was surprised that Rust is there. But also other places, like Firecracker. I'm a big fan of the technology. I think it's amazing. Where else would we see Rust, or would we experience Rust without necessarily knowing? S3... That's a big one, right? So it's like the storage node, as you mentioned, but also, you were mentioning in the talk some of the get, put... Not delete; because we don't want people to delete their data from AWS. And that's a joke, right? But obviously, get, put and delete. Rust is on the hot path, which are like one of the most used API endpoints. Do you want to talk more about that?

**Tim McNamara:** Yeah, so there was a really good blog post... I say this because it's my company that wrote it. No, there was actually a genuinely good blog post called "Sustainability with Rust" that was put out by my colleagues about a year ago, at the start of February 22. And that provides a couple of glimpses at the public services that have parts implemented in Rust. Amazon S3, we've talked about components of Amazon EC2, CloudFront, which is our CDN product, as well as the AWS Nitro enclaves. So a Nitro enclave is a heavily secure, kind of almost you can think of it as a sidecar for your EC2 instance, which can be -- well, it's very good at holding secrets. There's probably a more technically precise way of explaining that, but it provides heavy isolation.

**Gerhard Lazu:** Right.

**Tim McNamara:** And the -- I mean, it's quite a long post, because we are trying to really flesh out a lot of the strengths of Rust there. But one of the things that is -- the big message is that we as a software industry, and we as AWS, as a very large consumer of electricity, can reduce our environmental impact in a very substantial way. And these goals that we have set ourselves for saving, let's say - like this one that I have, of $100 million a year - is very genuine. And what I'm really hopeful for, what I'm really super, super-excited for personally, is that startups and other companies and other businesses can really think about like "How is it that we can reduce our operational cost?" And if you think about -- like, no one wants to have to deal with a broken application at like, let's say, four o'clock in the afternoon, or after the kids are asleep, in our case. They really don't want to have to deal with things breaking. And we have an opportunity to develop software systems that are robust, that can scale well, that can use very few resources, and make use of the hardware; hardware continues to improve, but essentially, software is becoming weirdly more and more bloated over time.

**Gerhard Lazu:** Yup.

**Tim McNamara:** And I think that Rust is not the complete answer to this. But it only needs to be a partial answer. I mean, it's a programming language... But it is a good partial answer for fighting back against this problem of software bloat

**Gerhard Lazu:** I have an important question... What kind of dollars are we talking about here? Is it New Zealand dollars, is it Australian dollars? Right? Because there's a huge difference... \[laughs\]

**Tim McNamara:** Right, right, right. Is it Zimbabwean dollars...?

**Gerhard Lazu:** Exactly. \[laughs\]

**Tim McNamara:** I'm talking US dollars.

**Gerhard Lazu:** \[00:41:58.22\] So 100 million US dollars. Okay. Okay.

**Tim McNamara:** Yeah, that's the target that I'm setting for myself.

**Gerhard Lazu:** Those are the good ones, just to be clear... \[laughs\]

**Tim McNamara:** That's the world's reserve currency...

**Gerhard Lazu:** Yeah, exactly. They're like the strongest dollars, okay? \[laughter\]

**Tim McNamara:** Look, we can pick our currency of choice. The thing that I think is significant is that the reason why this saves money is that essentially at the scale that AWS is, energy usage equals cost. And the reason it saves money is because it uses less energy to deliver the same -- in fact, a better user experience. So Amazon is a customer-centric company, and I'm more than happy to actually flesh that out, because there's a lot of cynicism about Amazon and AWS, which I think AWS and Amazon should be prepared to kind of confront... But my personal experience as someone who's been at the company since about eight months now is that this idea of being customer-centric - it's incredibly strong through the company. And in fact, yes, the company would like to save money. Yes, it would like to increase its profit. But the thing that really kind of pushes the services forward is this really strong desire for improving our customers' experience. And since AWS is an enabler of other businesses, because it's a utility compute platform, or a utility compute -- it's essentially always going to be in the background. But our role is to enable or to kind of facilitate others to grow.

And yeah, that's one of the things that really struck me... Because I came on to onboard with a very high degree of skepticism myself, but I've been really impressed actually by a couple of things. One is this customer centricity. Another one is a very strong dedication for data safety, and data privacy, and security being like utterly paramount to almost everything that we do. And in fact, the internet connectivity issue that we faced before one of these internet slots was because that my computer had shut itself down and isolated itself, because it had detected that the software updates weren't current, and so it said "No, no, no. The only thing that you can access--" It restricted its own firewall, and so "The only thing you can access is the update mechanism. So do that."

**Gerhard Lazu:** It detected the Gerhard threat. That's what happened. \[laughs\]

**Tim McNamara:** And I think the cost savings are kind of just a byproduct of being a really -- how do I put this? Just a product I think of developing software in a way that actually meets the expectations that are being put on software developers. The systems that we write - I feel like this is a slightly philosophical point, that software has been given a very privileged position as a way to develop public policy; all of our healthcare systems run with software, our airplanes, our entire transportation network... Every business requires software. And therefore, we shouldn't actually expect that things will crash.

**Gerhard Lazu:** For sure.

**Tim McNamara:** We shouldn't expect that updates will be hard. Like, we shouldn't expect that the applications that we use will be flaky. Now, again, Rust is not a complete solution. And in fact, there are some things that I think that Rust makes really challenging. It makes life really difficult for learners. Rust is more restrictive in the programs that it accepts; it's more particular. It's kind of more fussy, and slightly more bureaucratic. And that becomes really irritating. So it's less flexible, and therefore isn't as well suited for like quick and dirty scripting, and a bunch of other tasks that other languages or other ecosystems cater to much more smoothly.

\[00:46:06.08\] And the other the other area that it doesn't do very well on is I think in some of the data science, the scientific method, or the research methodology of being more exploratory, and kind of interacting with a dataset in an interactive fashion. I think Python is much better suited for that particular use case.

**Gerhard Lazu:** Yeah. How many years have you been doing Python for? Because you were a Python developer before.

**Tim McNamara:** Right. In fact, I was quite into Python. I organized the New Zealand Python Conference in 2012. I feel a little bit this tinge of guilt and regret now that I'm seen as New Zealand's Rust guy... Probably 10 to 15 years; depends how you count, because I am a self-taught developer, and I spent a lot of time in open source before getting my first genuine job. And so you can play around with the numbers a little bit, but I would say a good decade of experience in Python.

Rust actually -- in fact, one of the reasons I learned Rust was because I wanted to make my Python go faster. But everyone sort of said to me, "Don't write C. That's for experts."

**Gerhard Lazu:** Interesting.

**Tim McNamara:** Like "Don't do native extensions. They're really difficult. You can blow up your application, you could cause a security vulnerability. You could create a segfault." I had very limited understanding about what a segfault might be. That sounded dangerous. And Rust actually taught me what a pointer was, which is one of the -- you know, it taught me how memory works. So that's why I wrote my book.

**Gerhard Lazu:** That ChatGPT knows about as well, apparently... How did ChatGPT learn about your book, Tim? I mean, seriously... Did you teach it? Is that how --

**Tim McNamara:** I didn't go and like hack Open AI. ChatGPT knows about my book because it was announced in about 2017-2018. It wasn't released until 2021. It was the most horrific experience I think I've had trying to get that thing out. So to make things easy for myself, I started with this idea that technical literature has kind of been degrading over time. I think of the O'Reilly books that I used to read in the '90s, and they were really well written, very well edited, and were quite thorough, and just had this kind of genuineness to them. Whereas I've been noticing this trend where the depth of knowledge had become much more light. It's kind of like there wasn't much more of an advantage of buying a book, versus reading the sort of introductory blog posts... And also, that had seemed to be kind of moving towards the content marketing side, where a company would essentially commission a book to promote their product, and give it a vendor-neutral sounding title... But essentially, it was just a guide for using their tool for the particular domain. And so I had this idea, "Why don't I wrote the book that I would like to read? Why don't I write the best book there is?"

**Gerhard Lazu:** Okay. Tim, I think I have to buy it now. \[laughter\] Alright, so for the listeners - we have this thing with Tim. It may not be obvious, like back and forth; it's like almost like jokes, but like we are pulling each other's leg... Figuratively, obviously, just to be clear. This was one of those... But I don't buy first editions, unless they're signed; because I know the second edition is coming up...

**Tim McNamara:** Ah, right. Okay. Well, I'm going to be in London next week. I don't know when the show is gonna \[unintelligible 00:49:38.21\]

**Gerhard Lazu:** There you go. Please bring the first edition, Tim. I will buy it, I promise.

**Tim McNamara:** Okay.

**Gerhard Lazu:** Signed. Please. \[laughs\] And then I'll buy the second one, too.

**Tim McNamara:** So that was the outset. Now, it turns out that it's really hard to write a technical book, especially between eight and eleven PM. Because I've just become a new father, and at that stage I didn't have a job that was in Rust. And I didn't want to read any of the other books, like the official book, because I didn't want to ever -- like, I didn't want to learn Rust, and I didn't want to write a book and infringe anyone's copyright... And so I'm essentially one of the last people left that taught themselves Rust without the use of like the official free book.

\[00:50:26.08\] So my book distinguishes itself because it allows the reader to kind of work through biggish examples. So we write a database, we write a CPU emulator, we write an NTP client, we write a little kernel of an operating system. It turns out that when you are implementing these things from scratch, to write a chapter about them, this takes a while. And it turns out there are bugs and things that need to be updated... And often, because you want to be able to have the learning path such that you are always adding to the language, I needed to kind of chisel down the examples to only include one extra language feature at a time.

I remember there was one part in there where I was like -- we brought up the term segfault before... And I was like, "Oh, you know what I should do? I should write a thing that does what game cheats do." So a game cheat system will actually go and inspect the memory of another process that's running. Like, let's do that!

**Gerhard Lazu:** Right. \[laughs\] Okay...

**Tim McNamara:** And so I wrote this little utility, and it turns out that it could actually go and basically print you out all of what the memory address looks like. And you have to run into all these problems about like, "Well, this area of memory isn't actually being used, therefore you need to kind of decide what to do with that." The CPU doesn't like accessing memory that doesn't actually exist.

And then I needed to teach everyone about like virtual memory versus physical memory, and like how does a number get translated to like a physical place on the chip, and a bunch of other things like that. And that example actually needed to get like whittled down or chiseled away into just printing the memory layout for an example, for some code; just a tiny little thing. But it was originally much longer. And there was one of my chapters that kind of grew to like well over 100 pages, and my editor stopped me and said, "No."

**Gerhard Lazu:** "That's another book, Tim. Tim, books shouldn't have books. Books have chapters. That's how it works, Tim." \[laughs\]

**Tim McNamara:** That's right. So essentially, what I've done -- most tech books only have like one, what they call a capstone example. But mine has like at least a dozen. And that's a problem for the development of the book, because it slows everything down.

So in terms of the readership, it's received very good results, but not universally positive feedback. So the people that complain -- so there's about, I'd say 90% it's either four or five stars. It's like, "This is a wonderful book." A good fraction of people have said like "This is the best book I've ever read." So I kind of got what I wanted out of that. But there was a small fraction of people that are like, "I don't like it. This isn't like the other books."

**Gerhard Lazu:** Wasn't that intentional? That was intentional, right? It was by design.

**Tim McNamara:** That was completely intentional that this was going to be a different book and teach you with a different learning style. I'm not going to go walk you through the entire language, and I'm not going to create a clone of the official free book. It's essentially redundant; there's no way that it's going to become -- so that's the thing about Rust in Action, is that it is different, and that essentially, it provides things that are, I'd say, 70% or 80% complete, essentially there to kind of nudge you, and to kind of say, "I dare you to go and expand this." It's like "There are so many areas that you could take this. Let's see where you could get."

\[00:54:15.25\] So for example, the CPU emulator - I only implement addition and subtraction. But we do know what an opcode is; we do know how to implement an opcode. But there's the rest of the spec for this little baby CPU, this thing called a \[unintelligible 00:54:27.23\] Anyway... So I'm rattling on...

**Gerhard Lazu:** How is the second edition coming along?

**Tim McNamara:** I've just signed the contract, actually. I really wanted a break. I didn't enjoy the process of writing the first book at all. So the second edition, I'm going to clean up -- it's basically do what I think you're suggesting, or the reason you don't buy first editions is that there are things that I could either phrase better... In fact, there are a couple of places where now that I know more about Rust, actually, I feel like I can explain concepts a little bit more thoroughly.

I'm going to expand my treatment of what a trait is, because I think this is a term that is odd. Programmers are used to terms like interface, or inheritance, or like an abstract base class potentially... But trait - that sounds a bit strange. And there are some other -isms, or some other quirks about Rust that I think I'd be much more fluent at explaining.

What I'm a little bit worried about is I will have less of a beginner's eye. So one of the things that I think worked really well was that I was primarily a Python programmer who was writing a book about learning Rust... Whereas now, I am probably considered an expert Rust programmer, and I'm a little bit concerned about kind of the expert bias or expert blindness coming through. But I'm hopeful that I will be able to counter that. I'm also hopeful to kind of inject another thing.

**Gerhard Lazu:** I can help. Beginner to Rust... You sold it well enough; I'm interested. You made me curious. I could help, and maybe others, too; others that you know want to get into Rust, to give you some feedback on the initial... Especially those that may have already read the first version; or they read the first version and then very quickly they can look at the second version and see how they compare, while they're still new to Rust.

**Tim McNamara:** No, this is really important. For anyone that's taking on a real writing project, it's really important to always have the kind of reader at the front of mind. I fall into this trap myself, but it's very easy to write so quickly, or that you miss a step, because you're presuming knowledge that your reader doesn't have, by mistake. And you've therefore made a gap, and effectively, you create a dead end for a reader. And that's a really disorientating experience.

**Gerhard Lazu:** Underscores... We keep coming back to those. You've created an underscore, right?

**Tim McNamara:** That's right.

**Gerhard Lazu:** "It doesn't matter what it is. Doesn't matter. It's okay, it's an underscore..."

**Tim McNamara:** We have those too, in Rust, by the way.

**Gerhard Lazu:** So you are @timClicks on Twitter...

**Tim McNamara:** Uh-huh.

**Gerhard Lazu:** What does Tim click?

**Tim McNamara:** \[laughs\] So timClicks was originally a thing... So I was thinking of like a quirky, pithy handle, and I was clicking around on my keyboard. I was trying everything; it was relatively early in Twitter's life, so I thought I might be able to get a short handle. timClicks actually was just there because I was clicking on the keyboard, and then eventually, I was like, "Oh, this kind of fits."

\[00:57:38.07\] The things that that really click for me are an inherent -- I've kind of got this inherent idea that people are kind of growth-driven, or they are... I'm a real optimist for humanity, and we collectively are facing very significant problems, that are tractable. And this doesn't mean that I want to be overly prescriptive. I don't want to be paternalistic with my outlook. I don't necessarily require that everyone adopts my lifestyle. What I do think is really important is to have a genuine conception of how people are feeling -- or really listen, I think is really the thing that I want more people to do. And when someone is disag-- so it's very, very natural in a heated discussion to think "I have thought about this through. I have my position very clear. If you are opposing me, that's because you are wrong."

And actually, we've known for centuries that two people can look at the same evidence and come to different conclusions. I'm veering off-track here, but what I want to sort of say is that I've been really disappointed at how discourse is breaking down, especially I think in the anglosphere. In the English speaking world, we've had politicians really corrupt public discourse, and I don't know how to create something that probably never existed, like a genuine public sphere whereby you could create a space for genuine debate. I think that it's much more likely that the way forward is through incremental changes, rather than large paradigm shifts to get where we might need to go.

Essentially, given that our society is facing, or like humanity is facing very significant existential threats, to actually reduce the stakes of a lot of the decisions. Like, it's not like "Oh, we need to go to Mars!" We don't need these -- like, we can survive here at least for another, let's say, 100,000 years. You think about the technology that we've been able to produce in the last 80, to be able to get to spaceflight... Well, you think about projecting that along into, like, let's say, give ourselves another 100,000 years on Earth, and then we might think around terraforming other planets, or we could colonize other worlds. Because at the moment -- or like some other really radical changes that might be required. So "Oh, we need to shift every factory. We need to completely remove carbon." These all sound like very, very difficult, massive things. But saying, "Oh, actually, tomorrow you can take the bus." Or "The next meal, or the next time that we cater for an event, we can think about the food that we're buying, and its carbon footprint." Or we can think about the ecological sustainability of our purchases; things that we have genuine control for.

I think there's no single lambda function invocation that's going to justify Rust. But tens of billions or trillions of invocations - at that sort of scale, things change. And, again, I kind of want to stress that we have problems which are solvable, but they aren't going to be solved with expecting some government or some massive corporation to kind of make a huge shift. Instead, we can make lots of small changes, and I think that that's what clicks.

**Gerhard Lazu:** This sounds like a great takeaway to me, Tim. I was going to ask you what would be your key takeaway, but this sounds like it. Well, you made me definitely think -- I'm not sure about the clicking part. We'll see what clicks. But you made me think. I'm looking forward to you getting on your bike, and cycling all the way to the UK, so that you can be here in a few weeks time when I'm very much looking forward to meeting you. I know that you'll be joining Rust Nation UK. That is 23rd-25th of February, I think. When is the conference happening? I'm looking at it now...

**Tim McNamara:** I think it's actually the 17th...

**Gerhard Lazu:** Rust Nation UK... 16th and 17th of February. So - I mean, it's at the Brewery. Oh yeah, that's a good place in London. Now, I think this episode will come out around the 15th, so there won't be a lot of time for you to listen to it and join the conference... But just in case you are, we had the conference in mind. Tim, it's been an absolute pleasure. Thank you for joining me. I look forward to what you do next.

**Tim McNamara:** Yeah, me too. Absolutely. It's gonna be fun, whatever it is.

**Gerhard Lazu:** Until next time.

**Tim McNamara:** Take care. Bye-bye.
