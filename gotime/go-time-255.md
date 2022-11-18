**Natalie Pistunovich:** So today we are talking about debugging Go, and I have to share that this is actually a re-recording of the episode, because as much as we did our best to have redundancy, and a Babel local recording, and saving, and whatnot, the internet was bad, the audio was bad, everything was bad, so we are re-recording, and we hope that this time there'll be no black boxes for us to poke...

I am joined by my co-host, Ian. Hey, Ian. How are you doing?

**Ian Lopshire:** I'm doing well. This one's gonna be interesting for me, because I'm definitely still one of those print people... So we'll see if I learn anything.

**Natalie Pistunovich:** We are also joined by Liran Haimovitch and by Tiago Queiroz. Gentlemen, would you like to introduce yourselves? Liran, you are joining us from one hour in the future; you're joining us one hour away from Berlin, you are in Tel Aviv.

**Liran Haimovitch:** Yeah. So I can definitely relate... Print has its privileges, because debuggers can be so cumbersome, and often hard to use in so many cases, and it's so much easier to just say "I want to know what's happening on this line. Let me add a line, recompile, rebuild, ship it and get to know whatever is happening there." However, rebuilding the software and shipping it isn't always that easy, which is kind of where Rookout comes in.

So my name is Liran Haimovitch, I'm the CTO of Rookout. I spent about a decade doing cybersecurity, and for the past - wow, is it six years now? ...I've been focusing mostly on observability and how to use dynamic instrumentations and other concepts from cybersecurity to make observability, debugging more agile and easier to use in production environments.

**Natalie Pistunovich:** Thank you for joining us. Tiago, you are also here in Berlin.

**Tiago Queiroz:** Yes. Hi, everybody. I'm Tiago. Yeah, I live here in Berlin. I'm originally Brazilian. So I'm a software engineer, I've been working mainly, almost exclusively with Go for more than five years now. Currently, I work for Elastic, on the Elastic Agent and Beats. It's interesting, because lots of our debugging there is basically logs, because we basically build binaries, ship, people run it... They sometimes run into issues, because - well, no software is perfect... So actually, log statements and print debugs is still one of the main ways to discover what's happening, especially when the issues are not on our machines.

Yeah, and most of my work experience before Elastic was with startups and microservices. I also worked a lot in the sense of like bringing observability into some places, and I was always advocating for better observability and debugging tools. So yeah, that's a topic that I enjoy a lot, and try to always bring more, let's say awareness at my workplaces; we need to make things observable and easier to understand when they break... So they should almost tell us "Hey, I broke because of that."

**Natalie Pistunovich:** The AI... The AI will be telling you "You broke it because of that."

**Tiago Queiroz:** Yeah.

**Natalie Pistunovich:** So let's talk about some practices that we have today, without the AI. What are some good and bad practices in debugging, that are maybe specific to Go?

**Tiago Queiroz:** I think definitely it's a good practice to always have logs on your application. Make sure you write your application and you have proper log statements.

It's a very broad concept what is proper or enough, and something that you basically learn by doing, by seeing all the applications... But definitely, you should have enough logs for things, especially for like -- if you write a web server, ideally as soon as the HTTP service runs, it should say "Hey, I'm running on this port, on this host." It should show you some information of how it's starting, what it's doing, printing some configuration that might change for environments and might be very critical to solve some issues.

\[07:55\] I think the best example - sometimes you run something in staging, on a port, and then in production on another one, but then if you don't set the configuration right, things just don't work, and then if you don't have any log statement, then you think "Hey, I'm actually starting my web server on port 3000, not 8000." You might spend a few hours debugging.

So definitely really think when the application is running or starting what an engineer or even a user that's using your application might need to know if something goes wrong, or just to know about the current state of the application.

**Liran Haimovitch:** So the tricky thing about debugging any language, I would say, is that you're probably debugging the unpredictable... Because if something is predictably broken, then you're probably going to have a log line somewhere saying -- the system is essentially saying "I'm broke. This is why. Just go ahead and fix it." And maybe the system is writing it out very clearly, or maybe you're just knowledgeable enough in the domain, in the application, whatever, to just get a sense of what's going on and quickly pick up the breadcrumbs and know what is what.

If you are bothering to debug something, then it's unpredictable to you in some way. Maybe because the debugging is super-complex, maybe because there's many dependencies, maybe because you're not that much of an expert in Go or in the application itself... And that's perfectly fine, nobody's perfect, and we all have our knowledge gaps. But whatever it is, you kind of have to keep in mind that if something is challenging, it's unpredictable in some ways, and you have to think about how do you address that unpredictability, whether it's by pushing those print statements to kind of get a better sense, whether it's by using a debugger, a live debugger, or looking at other observability data... Whatever it is, you kind of have to address the unpredictability to get a sense of what is known and build from that.

And speaking of Go in particular, one thing I've found that often confounds people is that Go is not supposed to have exceptions, and yet it somehow kind of does. Now, I'm not trying to argue with anyone about anything, but panics and defers act very similar to exception throwing and catching them. And if you are new to Go, or maybe not very familiar with the codebase, panics are often overlooked, and some libraries actually even use intentionally panics as a form of exceptions to unwind the stacks, if the stack is very deep.

But either way, if you're looking at an error flow, if you're looking at an unpredictable outcome, it's always good to think about "Is there any chance something is panicking here? And if it is, how can I test it or how can I make sure nothing is panicking." Because you'll often find that, whether intentionally or unintentionally, there could be panics in there somewhere that's throwing your code into some unpredictable flow that's causing you a headache.

**Natalie Pistunovich:** So what would you say is the difference between debugging locally versus debugging in the cloud?

**Tiago Queiroz:** I think the main difference is debugging locally you can run the debug in slow motion. Actually, I was at GopherCon in a workshop from Bill Kennedy, and he had told this quote that was very interesting: "The function of the debugger is to run your bug in slow motion." Basically, that's the only thing it does.

**Natalie Pistunovich:** It's a nice quote.

**Tiago Queiroz:** It's actually very interesting... And at the end of the day, that's it, right? When you attach a debugger to an application, usually you only do it locally. You can literally run the code in slow motion, stop and introspect things, right? I find it extremely useful to have debuggers when you do not fully understand the workflow of the program, or the code paths, or there are too many dynamic things happening. If I really understand the program, usually I just always go for print statements.

\[12:05\] Of course, then I'm like, "Okay, \[unintelligible 00:12:04.23\] I usually have a hint of what's happening. When I have no clue, usually \[unintelligible 00:12:11.28\] And I think that's one of the main differences from the cloud - you can actually attach a debugger. You can run things in slow motion. Because if you're in the cloud, even if it's a Kubernetes deployment on your staging environment or something, usually there are some proxies, some things in front of your application that might have some timeouts, and things like that, and once you put a debugger that says like "Hey, stop my HTTP request for (I don't know) five minutes, while I think, or maybe 30 seconds", then time out. Especially in Go, you get to some point and \[unintelligible 00:12:45.06\] the context of this request. Time it out. So I think that's the main difference.

**Liran Haimovitch:** Yeah. So debugging in the cloud sucks... It just sucks, because the two techniques we're used to working with for debugging just don't work as well. 99% of the times you can't touch a debugger; when you're running in the cloud, you can't attach a traditional debugger, whether it's because you don't have the access for it, whether because the debugger itself is gonna be holding the process, ass Tiago mentioned, but that's gonna kill any health probes. The process \[unintelligible 00:13:23.14\] it's gonna get AWS, or Kubernetes, or whoever is orchestrating the application to terminate your process, and then spin a new one without your debugger attached.

And there are other slew of technical problems, but 99% of the time you're not gonna be able to attach that debugger to have the beauty of watching your code move in slow motion, so that you can actually spot the bug as it's moving at lightning speed through your code.

Also, logs, which are nice -- they're definitely better than debuggers, but you can't use it all. But again, when you go to the realm of unpredictability, logs are more often than not -- I wouldn't say enough or not enough, because that's a harsh statement, but they can be challenging to read. They can be challenging to sift through, and grasp the bigger picture and find essentially the needle in the haystack. And it's not just about how many logs you have, it's also about where are they positioned compared to the bug, and how much information do they actually reveal about the inner workings of the software.

And as Ian literally started the call with about "I like to add prints to get a better sense of things", and I think prints, when your code is running in the cloud - that takes a while. You have to add the code, then you have to either build it locally, or push it through the remote, and then you have \[unintelligible 00:14:49.13\] CI/CD, deploy somehow... It can easily take you 20 minutes if it's a personal environment to add that log line, or it can take you hours or days if it's a shared environment or even a production environment.

So you can still debug with prints, but changing them becomes very painful and slow... Which is part of the reason that the new form of debuggers, the live debuggers have kind of spun up, which are super-useful... And we actually released Go support last year. I think that's something that makes cloud debugging so much easier, when you can get that traditional sense of setting breakpoints and seeing the data, while still working with load balancers and API gateways in Kubernetes, and all that magic.

**Ian Lopshire:** Yeah, I wanna hear more about that cloud debugging... I've not heard of that. It's kind of blowing my mind... Can you just elaborate a little bit?

**Liran Haimovitch:** \[15:46\] Sure. So at Rookout what we aim to do is provide you with developer observability in general, but first and foremost a debugger-like experience, without any debugger involved, essentially. What we ask you to do is install our agent or SDKs. For Go it's just a Go module. And that Go module essentially connects to an orchestration service when you run. And then we kind of provide you with "What would happen if I'd placed the breakpoint here?" So you go into our platform, you place a breakpoint (an unbreaking breakpoint) on that line of code, and the next time this line is executed - it can be once, it can be a hundred times, it can be more - we collect snapshots. And those snapshots look exactly like a breakpoint would show, what a debugger would show if a breakpoint was hit. So you would get a stack trace, you would get the local variable values, everything... Except those snapshots are asynchronous. So the application doesn't stop, it doesn't wait for you to read through the slow motion of debugging.

We slow the application for a millisecond or two when we capture that snapshot, and then you can read it, take a look at it offline, at your leisure. You can go back and forth between different snapshots, so you can see how the code is running, supposedly in slow motion, except the code ran really fast, as it was executed.

**Break:** \[17:12\]

**Natalie Pistunovich:** So you mentioned that you can do this cloud debugging with the snapshots of how things are when you place those breakpoints; as a way of doing that in the cloud it is quite easy, or easier. What general some good practices that you have to make debugging easier? What can you do to help yourself, your future self, your colleagues when you do debugging, generally? What are those practices that you're following?

**Liran Haimovitch:** So obviously, logging. As Tiago mentioned, logs are awesome. You shouldn't skimp on logging. You should also keep in mind that there is such a thing as too much logs, especially when you get your bill from your log aggregator... So do watch out for that. But that's an entire topic, about optimizing the cost and volume of logs, and we're not gonna dive into that. From my experience, most people err on the side of too few logs, especially early on.

The other thing, which touches back to a point I've mentioned, is when you're writing code, focus on the error conditions. I think I read somewhere that when you write code, about 20% of your code deals with the happy flow, deals with what should happen, and then 80% of your code deals with what shouldn't happen; with validating inputs, with responding to errors, with network disconnections, with database errors, with God knows what. And that's where 80% of your code is gonna lie. And complexity-wise, way more than 80% of your code is gonna be there. Try to focus as much as you can on thinking through those errors as you're writing the code.

While it's definitely useful to write a log line saying you've entered a function - maybe it's an important function, maybe it's gonna be useful someday - that log line is far more likely to be noise and far more likely to end up in the bin of those logs that are costing you way too much money, and it's time to turn them off. On the other hand, I think logs for error states - those are way more useful. If something went wrong, make sure you write a log line about it.

I think one of our first customers at Rookout actually used Rookout at the time it was a Node application to debug a bug they'd been chasing for over six months. It was a super-complex bug, and they were doing OAuth three-sided authentications, and they got a cookie... And they actually had this error validation code that assumed that if the cookie was too big, they were gonna truncate it. Now, the cookie held a JWT token; obviously, it's a signed artifact. If you truncate a signed artifact, the signature is not going to be valid, sending you down through all kinds of pain. And they literally had a comment on that if statement, "Add a log line here. Add a to-do comment to add a log line." It literally said "This should never happen. Add a log line." And they didn't add a log line. And they've spent over six months trying to figure out what was going wrong, and why some users couldn't log into the system... And that was because their cookies were too large, because of various settings somewhere else across the world.

**Tiago Queiroz:** Yeah, definitely watch out for your error logs. I think that's one of the most helpful things. But not just the logs themselves, but like graphed, good error messages. Don't just say "Hey, I broke" or \[unintelligible 00:22:31.07\] Try to give a context of why that thing failed. A simple thing. For example, if it's an insert, at least print the name of the table. Maybe you cannot print the whole SQL statement, but you can print a table, or maybe say "Failure inserting a user, or doing something."

So try to explain it, giving context why you're in that error path. Like Liran said, watch out for those error handling code; that's usually where lots of bugs and issues are gonna happen. Errors are not well handled, or even worse - they're handled, but they're just hidden, and then when you run the application on your logs and things like that you don't see that there was an error. Or maybe the application exits from like an error handling path, but it doesn't tell you why. There's an error, but it doesn't tell you why.

I actually have a good example. Recently, we had some PRs on our applications, like adding more logs, adding more context to this error log, because of something like "Oh, I cannot start because the log file already exists. So maybe there's another instance." But it didn't tell where the log file was located; it just says "The logfile." It's there, but okay, where is the file? How do I find it? ...to find which process is holding that file.

\[23:54\] And then maybe if you go through lots and lots of logs, at the very beginning of the application it says "Oh, my configuration path here", and then you have to know that you need to join that with something else to find the log file. But why not just print together? Like, "Hey, log file, here's \[unintelligible 00:24:10.00\] already exists. I cannot start."

So sometimes simple things like that can make the whole difference... So maybe \[unintelligible 00:24:17.18\] shut down, but here's the error, here's the situation. Try to show the code path that led to the error, to error handling, and give as much context on your error message as possible, so someone reading the log, or even reading the error in whatever observability tool you have - the person reading it can better understand why that happened.

**Ian Lopshire:** So we've talked a lot about logging, and it sounds like for errors, logging is the way to go. Where do you think the place of stats are? Like stats, and counts, and histograms of latencies... Where does that sit in the debugging landscape?

**Liran Haimovitch:** That's a tricky question... Metrics are -- well, they are one of the most complex and powerful ways to monitor software. You can get a lot done, especially if you're looking at large-scale systems, production systems and those sort of things. But you also need to have some basic understanding of how metrics works, and how to approach them. You also need some real-world experience with your specific application, because numbers that can be awesome for one application can be terrible for another... And some of this lies in the business context, in the domain you're operating in, and some of it just lies with the characteristics of your applications, and the various decisions you've made along the way.

Obviously, there are a few great places to start, that are always good - looking at your requests per second, looking at essentially how many requests your application is processing per second, looking at your latency, how long does it take you to process requests, looking at your error rates, how many requests are successful versus how many are not... But then there are all sorts of fancy ways to look at data which change. Do I look at the medium, the average, the p90, the p95, the p99? It depends on the context. Some applications might make perfect sense to look at p95, while others you might have to look at p99.9... While others still might look at the average.

Also, what dimensions do you look at those metrics? How do you break them down? Do you have multiple regions? Do you want to monitor it per regions? Do you have multiple endpoints? Do you want to monitor it per endpoint? The different endpoints have different tolerance for latency or for errors... And the list goes on and on and on.

So on the one hand, if you're looking to monitor an application in production, getting some metrics in there is a great start... But it's also a dual learning curve, both on learning how to use metrics in general, but also about learning what's normal and what's good versus what's bad for your specific application.

**Tiago Queiroz:** Yeah, I think metrics are not -- I wouldn't call them exactly a debugging tool. They're more like to understand -- because metrics are aggregations, right? Usually, we get average requests per second, or average -- like, given a number of requests of instructions, of executions, in a given time, those are metrics usually for request latency, throughput, maybe database connections.

\[27:45\] So usually, you cannot pinpoint one thing on that one transaction, and then get the metric and use those aggregations. But they also help you to maybe understand another thing, like which bugs are actually, let's say worth fighting right now. So if you have metrics like error rates, and you have like 50% of your requests are always failing - definitely, you have a big issue there. Lots of people are being affected by this bug. But if it's 0.1% of your requests are failing or are too slow, and that's basically meaningless in the number of users, maybe there are actually other bigger bugs that are gonna have a bad impact for your users to solve.

So definitely, I think metrics can help to prioritize, and definitely performance issues. So if you want to improve performance or you actually have performance issues, then those metrics will be there... Even though you can handle performance issues as bugs, when someone \[unintelligible 00:28:47.17\] "Oh, there is a bug. Let's debug something", usually I think more like a code level, a weird behavior of one specific application, rather than let's say "Every time I have too many requests, the database dies." Usually, I don't think that is a bug. It could be a bug in the code, that you're making too many requests to the database, or unoptimized SQL queries; it could be. But at least that's how my mind works when I heard the word "bug" or "debugging".

**Natalie Pistunovich:** We talked about good and bad practices of debugging, we talked about debugging in the cloud versus on-premise; we talked about stats versus errors, or logs. Let's talk about debugging in production versus not. Are you debugging in production? If yes, how?

**Tiago Queiroz:** Yeah, I think in the case of working with Elastic, it's a very interesting case of debugging in production, because -- well, we don't have access to the users' environments. So basically, we're only relying on logs, and asking people "Hey, what have you done?" So that's where you actually see two things - the power of actually having good logs, and also you see the other side, that logs can be too verbose as well. Like, you have some applications, and if you enable log debugging and it has a very high throughput, then sometimes you get like 100 megabytes of logs, and it's like three seconds of execution, because it's just too verbose for some stuff.

So yeah, I think definitely debugging in production has this facet of - sometimes you actually don't have access to the environment, and more often than not you're mostly relying on logs and metrics, and that's all you have. So you're basically, let's say, looking to the past. Okay, something happened, I have things that point me to what happened in the past, not right now. That's different from debugging locally, or even -- usually, in staging you have more control of the environment.

**Natalie Pistunovich:** Then you can't really reproduce what the person who reported this has, because it's not like "Send me your code and I'll try to run this, see how that works..."

**Tiago Queiroz:** Yeah, sometimes you just can't, or sometimes you do your best to get as close as possible... But yeah, that's a thing that reminds me of something - sometimes you can't have access to production or to the actual environment, but you can reproduce a close enough experiment, if you have enough information. "Okay, every time those situations happen, then there's a bug." Then you \[unintelligible 00:31:17.11\] staging environment and you reproduce it as close as possible, and then you can actually run your debugger, run your tools.

**Liran Haimovitch:** One of the fun things about being the CTO of Rookout is I not only get to see how our engineers debug in production, but I get to work with many of our customers while debugging in production. And many of our customers have - I wouldn't say given up, but come to realize that they need a better solution than the traditional approach for debugging.

\[31:51\] Monitoring tools were not meant for debugging. Monitoring tools are meant to show you something is wrong. Your application is down, you're having some issues with some of your endpoints, some of your users are not getting the best service... But they were never designed to pinpoint exactly what's going wrong, especially many of those issues are code-related issues. Today, with cloud-native applications, when you're essentially moving away so much of the infrastructure to somebody else - your AWS, or Google Cloud, or Azure, or whatever you're picking, most of your bugs, most of your issues are somewhere in the code, and you need a lot of granularity.

Many of our customers have figured out that whether they're trying to make their engineers more productive, or solve customer issues faster, or both, they prefer to be able to truly debug in production. And we see a few considerations and hurdles in how you approach that. I mean, security is a big thing. You have to make sure that whatever tool you're using, you know who can access the system, you know how it is being accessed, that everything is secure... There are a lot of privacy regulations across the world in general, in Europe in particular, so you have to think through that, you have to know what private data is being collected, is it being removed through the process, is it being stored, who is storing it...?

And obviously, you have to think about performance and availability. Will the access and the tools I provide my engineers somehow impact the stability of my application? Will it impact the performance of my applications?

Whenever you're thinking about debugging in production - and it doesn't matter if you're giving them some fancy tool such as Rookout, or providing them with SSH access to go do their thing - you need to think about the implications in those elements, especially how the non-functional requirements of your system, which can vary greatly between domains, between companies, even between applications within the same company. You have to think about that in how you address them. But other than that, other than the significant extra risks involved, you still go back to the same fundamentals of debugging we've discussed through this call.

Once in a full moon, I actually meet somebody who decides to attach a traditional debugger to production, because either the issue is bad enough that they have no choice and that's all they have to do, or because for some peculiar reason it doesn't disrupt their system all that bad, for some reason, and they can afford to... But at the end of the day you end up with the same techniques, just a different risk aversion scale.

**Ian Lopshire:** So I wanna go back to logging, just a little bit. I know we've talked about it a ton... But we mentioned earlier that sometimes there's not enough logs, sometimes there's way too many... Do you think log levels play a role in that? Is there something that we should use? In the Go community there's a lot of argument that "Ah, just a single log is enough", and other people like the levels... What are y'all's thoughts?

**Tiago Queiroz:** I would say it depends. I've gravitated towards different opinions of like "We should only have one level" or "We should have multiple ones." I think it definitely depends on what kind of applications you are developing. If you deploy your own microservices on your infrastructure, then you have way more control, so maybe you can get away with less log levels, and really craft good log messages. But if you're actually providing binaries that people are gonna download and run, then at least a debug level would help, because then you can say "Okay, those are things that most people don't need." It's just gonna waste disk space, or log storage if they ship there somewhere... So 99% of the time we're never gonna need it. But then when there's an issue, then we actually need to see that.

\[36:03\] In some of the applications that we have - at Elastic we actually have even a different approach. We do have the log levels, but also we can filter specifically loggers, or different parts of the application \[unintelligible 00:36:15.17\] So we can say "Oh, I want log debugs from our inputs, or from our parsers, or from something like that. Or from the output." It's almost like setting different log levels for different components of the application.

So that's also an approach that I find quite interesting. It can be quite useful, especially when you have the situation of like -- logs are probably gonna be too verbose, some of them, but then you can filter out the verbose ones, not like even generate them, and then you focus on the things you actually need.

**Liran Haimovitch:** So log levels are super-important. You can't do without them, at least if your system is any scale... Especially when it comes to how much traffic it's handling, because you're gonna have to cut logs somehow, and verbosity levels is the easiest way to get started with. Obviously, you can get fancy later on, as Tiago has mentioned.

But when thinking of log levels, one thing you have to keep in mind - when you're looking at most SaaS operations today, when the same team both builds and operates the software, log levels, especially in the long-term, tend to be gamed.

I'll take an example... Let's say you're running the application for the first time; you're probably spewing debug logs. You have zero traffic, you're printing everything... You're just dying for somebody to bother to go to your website and whatnot... So why not - just print everything. Then, later on, the application grows, you get more traffic, you move to infra; still no biggie. But then, at some point, your application explodes, you have tons of users, you're paying way too much money for some log aggregator somewhere, and all of a sudden some ops guy or girl comes and says "Let's cut back. We need to move to one level of verbosity and above, because we're just wasting so much money and nobody is looking at those logs anyway."

Now, you might have pretty well-defined verbosity levels, you might not have those well-defined verbosity levels, but the next time some software engineer is gonna need some piece of log to troubleshoot something or get their job done, I can assure you the level of logs they're gonna use is gonna be a warning, and not \[unintelligible 00:38:39.22\] regardless of how important that log is... Because it's people, they game the system; if they need a log line, then they're gonna do whatever it takes to add that log line and get that job done. Now, in the long-term that means that every time you increase the minimum verbosity of the log levels, you're gonna be dropping some logs, but new logs are gonna be added, and a lot of the other logs are gonna get moved, refactored into the newer level... And that's not necessarily based on importance. It's based on what was most recently used by your engineers, which doesn't necessarily provide a good feedback on what's still important... Not to mention that some engineers might be more straight-shooters than others, in which case things can get even worse, because some engineers are gonna game the systems and others won't.

Long story short, log levels are not gonna fix everything for you, but they can definitely help, to a certain degree.

**Ian Lopshire:** I love that point about gaming the system, because I have definitely done that, without a doubt.

**Liran Haimovitch:** We're recording this, you know...

**Ian Lopshire:** Oh yeah, we'll make this error, because I need to see it. \[laughter\] I'll admit it all day. It's all good.

**Tiago Queiroz:** \[39:58\] I totally agree with that. I think some logs are not that \[unintelligible 00:40:00.10\] because if something goes wrong, I need to know that happens, so I won't put that as debug. I know some people would call it debug; I'm calling it \[unintelligible 00:40:09.13\] because I want this log line there no matter what. And I know you're running logging, right? That's the thing. I know you're running level info, so I'm putting the level that we run, yeah. So I'm probably guilty as well, of the same thing... But I think yeah, that's definitely a thing.

And I think it circles back to the thing - you really need to be careful, especially as you scale. I think Liran had that great point there - as you scale more and more and more, then the amount of logs become more of a thing, and then that's when you really need to think about what are you logging and how are you logging, so to make sure you always have the logs you need... Because logs are the kinds of things - you usually never look at them unless you have an issue; and then if you have an issue and then you don't have the logs, then you're basically gonna make a PR to put the logs, to deploy... 20 minutes if you're very lucky, it might take a few weeks... If you provide an application for people to download and install, and... Yeah. So definitely, you need to be very careful with the logs you write \[unintelligible 00:41:13.24\]

**Natalie Pistunovich:** Last question and then we jump to the fun part of the unpopular opinion... When you have to debug something, how do you start?

**Tiago Queiroz:** So I always start by trying to reproduce as close as possible the situation where the bug happened. Usually, we get "Okay, that think is failing..." Yeah, I try to reproduce it. It depends a lot on the situation, but yeah, I try to make the bug happen on my machine, if the logs that I have are not already enough to make me understand what's happening. Sometimes it is. And then job's done, just "Okay, kill your error message that your issue--" Usually, that's not that simple. So yeah, usually it takes more experiment, so I can reproduce the bug in a very easy way, so I can run it over and over until I understand what is causing it... And there is, I would say, where the art of debugging starts. Once you can reproduce it, then "Okay, why is it happening?" Then you go print statements, log statements, debugger, changing your environment, changing the state of the application to understand why it's actually the thing is happening.

**Liran Haimovitch:** I think what I most often do is look at the code, especially if I have a descriptive bug \[unintelligible 00:42:35.18\] that kind of points me in the right direction. Quite often, if you look at the code with a fresh set of eyes, whether it's your code or somebody else's code, assuming you have a good familiarity with the application as a whole, and you're looking at the suspected piece of code where a bug might reside with a new fresh set of eyes, and with some description of what's going wrong - you'll often see the bug. It can be enough by one bug, it can be a comparison that's looking at the wrong attribute, which - I just had that bug a couple of days ago... You might have other issues, you might have a call missing, or an extra call... But if you have some experience and you know what you're looking for, you can quite often just stare at the code and say "Hey, this looks wrong", and you can all of a sudden understand what's gone wrong.

Other than that, debugging is a very associative process. I mean, if things get very, very messy, you can start doing a more standardized process, writing down everything you know, writing various \[unintelligible 00:43:43.11\] about what could possibly go wrong, and then starting to discuss how you can collect that extra data you need to validate or remove those hypotheses, potentially by adding tons of prints. That's how it usually works.

But early on in the process, I find that associative thinking leads to faster results in most of the cases... And that's another reason to look at the code, because once you kind of get a look of the code, get a sense of the lay of the land, then you're better positioned to look at additional data, whether it's logs, or metrics you've discussed, or the bug report itself, or anything else, to kind of see things in context, rather than just trying to piece everything together from scratch.

**Ian Lopshire:** Great. Alright, the next part of the show I think is everyone's favorite... Unpopular Opinions. I hope you guys came with one...

**Jingle:** \[44:36\] to \[44:54\]

**Ian Lopshire:** Alright, who wants to go first?

**Liran Haimovitch:** I'll go... My unpopular opinion is about OpenTelemetry. I know OpenTelemetry is being touted as the one to vanquish them all, but I find it to be over-presumptuous in many cases, way too complex, and hardly that much of a benefit over structured logging, in most cases. Obviously, there are exceptions; there are super-fancy, super-complex cases where you have 2,000 microservices, like Uber had, until they figured out it was the wrong approach, in which case you desperately need distributed tracing and OpenTelemetry, and good for you for inventing that.

The rest of us mere mortals are better off not over-complicating our systems and not over-complicating our observability solutions. Simple is always better in engineering in general, and in software engineering in particular. Logs are awesome. They've been with us since the dawn of computer engineering. Metrics are pretty sweet as well. If you want to get extra-fancy, structured logs are totally great, and they could be very simple; they can have literally a couple of lines of configuration on any piece of the logger itself when you configure it... And on top of that, OpenTelemetry in Go is a lot of boilerplate, a lot of configuration. You have to set up all the middlewares yourself... So don't hold high hope for that; you're picking a very complex, a very expensive solution that's gonna have -- in most cases, it's gonna have less value; in some rare cases you might never meet it can have more value than more traditional approaches.

**Ian Lopshire:** I definitely resonate with it being a lot of boilerplate and overly complicated... We made a move to move to that and abandoned it, because... It's a lot.

**Natalie Pistunovich:** It sounds like the unpopular opinion is popular...

**Tiago Queiroz:** Yeah, I also agree. I never worked much with OpenTelemetry, but with other solutions that basically are observability and metrics... And yeah, you can go a very long way with just well-structured logs. Even \[unintelligible 00:47:09.12\] and it's super-simple, because you can just parse them, or put them on Elasticsearch, something like that, and then you can just see the logs together, aggregate them, and... Yeah, you can go a long, long way without overcomplicating.

So my unpopular opinion... I still believe that the testing package from the standard library is the best testing framework that you need; the best out there. It's very simple, it's very powerful, especially now that fuzzing is built into the language, and everything... And because it doesn't introduce new concepts. So basically, you still have to do your if statement. If that thing happened, then I call a method on my T object, right? Or my B, for benchmarks, and things like that.

\[47:58\] It makes the developer, the engineer writing the code think more about what they're doing, and probably also craft better testing failure messages. So instead of just saying "A is different than B", it's like "No. I was trying to do that, and that failed because of that." You can still fall in the pitfall of just "A is not B", but I think it's less -- I think there are some libraries there with a gigantic public API for testing that just gets hard to use... And there are some very small ones here and there; I'm just seeing a few examples of -- they just misplace it, like put \[unintelligible 00:48:31.11\] the actual error that was being compared, and luckily, the test was not very wrong... But that happens. And with the testing package, that's just not gonna happen. It can only basically print the message saying "Okay, you can fail the test, and then you can write messages explaining why."

And of course, building a language is very different than building other kinds of applications, but as far as I know in Go, to write code they only use the testing package, so it's powerful enough to write Go... So it should also fit, I'd say most, if not all use cases. And you can always write your helper functions if you need specific things; and the t.helper is also a great helper.

**Ian Lopshire:** I'm worried that one's gonna be popular as well.

**Natalie Pistunovich:** Yeah. I brought an unpopular opinion as well.

**Ian Lopshire:** Oh, wow. Okay...

**Natalie Pistunovich:** I think that as a manager, a team lead, or a product manager, or whatever, making a round of messages on your tracking system, like JIRA, Trello, and whatever - "What's the status here? What's the status here? What's the status here?", and then your developer arrive the next day to like ten messages that all look the same, "What's the status here?", is one of the worst things you can do.

**Liran Haimovitch:** Definitely.

**Natalie Pistunovich:** No, it's supposed to be unpopular. Don't say that.

**Liran Haimovitch:** Elon Musk is much, much better. Tell everybody they're fired next week if they don't deliver what you came up with overnight. \[laughter\]

**Natalie Pistunovich:** Now, that's an unpopular opinion.

**Ian Lopshire:** No, all those status messages never fail to give me anxiety. It's like, "Wait, was I supposed to get all of this done? Ah...!"

**Natalie Pistunovich:** Even if yes, there's better ways of doing that than ten messages of "What's the status here?"

**Tiago Queiroz:** Yeah, definitely.

**Natalie Pistunovich:** Maybe you have an agreement that you should update at the end of every day, every week, every other day, I don't know... If you don't have such an agreement, you should set that up. If the team is not happy with this agreement, you need to find something else, but just around like opening your inbox to ten of those messages is just like "I'm gonna close the computer. Bye."

**Tiago Queiroz:** Yeah, I agree.

**Liran Haimovitch:** If you expect people to spend the time to write down the answers, you should spend the time at least to write down questions that prove you know what each task is about, and be more focused about what you're asking, rather than generic "What's your status?" Because I might as well answer "It's progressing."

**Natalie Pistunovich:** Perfect! Oh, my God. Adopting... \[laughs\]

**Tiago Queiroz:** I would even say some of those status update messages are like debug logs that just say "Yeah, it's moving. It's happening", but most of the time it's not what you need to see, not what you need to hear.

**Natalie Pistunovich:** True. It is like info-level messages.

**Tiago Queiroz:** Yeah, what you need is the error level. Like, "Hey, that's delayed because of that", or like "Hey, I had that problem \[unintelligible 00:51:20.14\] here, so task X, Y or Z is not moving. Or even moving backwards."

**Natalie Pistunovich:** I think we're onto something here... We also have a lot of questions that we wanted to talk about, and lots of topics we wanted to talk about, and it looks like there's no other choice but to have a follow-up episode. And I wanna say thank you both for joining; I hope you will join too our next episode on debugging. I want to wish everybody a good rest of your day, wherever you are, whatever your timezone is. Bye, everyone!
