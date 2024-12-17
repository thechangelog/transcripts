**Mat Ryer:** Hello. I'm Mat Ryer, and welcome to Grafana's Big Tent, the podcast all about the people, community tools, and tech around observability. Today we're talking about OTel. I'm here with my co-host, Matt Toback. Hello, Matt.

**Matt Toback:** Hello, Mat.

**Mat Ryer:** It's been a while, hasn't it?

**Matt Toback:** It has. It really has. So much has happened here since I last saw you.

**Mat Ryer:** Yeah, I know. But don't worry, because I will be in New York this very month, which I know is where you live... For ObsCon.

**Matt Toback:** That is true. When's the last time you were in New York?

**Mat Ryer:** It was -- I think it was November.

**Matt Toback:** Oh, this past year?

**Mat Ryer:** Yeah.

**Matt Toback:** What did you do?

**Mat Ryer:** I was there for ObsCon conference, which is the reason I'm going again this year... I mainly go to New York for ObsCons.

**Matt Toback:** Do you think you'll come to New York next year?

**Mat Ryer:** I'm hoping so. Is there an ObsCon there next year?

**Matt Toback:** \[laughs\] What have you done in New York that wasn't ObsCon?

**Mat Ryer:** I don't think -- oh, I went to the Statue of Liberty.

**Matt Toback:** Did you?

**Mat Ryer:** Yeah. That wasn't ObsCon. I went on Broadway... I actually hosted a conference on Broadway.

**Matt Toback:** Did you really?

**Mat Ryer:** Yeah, I did. I hosted a Go conference on Broadway, which is --

**Matt Toback:** Were you on proper stage, in a Broadway auditorium?

**Mat Ryer:** Yeah, yeah. I've basically played Broadway. It's crazy, but yeah.

**Matt Toback:** In my mind, when I picture you, is -- you know how they have things come up from the bottom of the stage, and you can put them on like springboards? And you come up, and just like something that's like huge, on a stadium... Fires in the air...

**Mat Ryer:** That's me. Yeah. And then I'm like "Right, testing in Go." Okay, well, we should also meet our guests, because we've actually got some people here that know a lot about OTel... Which is good news. We're joined by Juraci. Juraci works on OTel at Grafana Labs. Welcome, Juraci.

**Juraci:** Hi, it's a pleasure to be here.

**Mat Ryer:** Yeah, the pleasure's all ours. We're also joined by our special guest, Dan Gomez Blanco, Principal Engineer at Skyscanner. Hi, Dan.

**Dan Gomez Blanco:** Hello. How's it going?

**Mat Ryer:** Good. Great. Great. Thanks so much for being here. And you two are both Governance Committee members of OTel. That's right, isn't it?

**Juraci:** Yes, indeed. Yeah.

**Mat Ryer:** Hmm... Governance Committee member. It sounds like something from a war film. What's it like?

**Juraci:** It's like a war film. \[laughter\]

**Dan Gomez Blanco:** Sometimes it is.

**Mat Ryer:** Okay, well, I look forward to that... It says on the website you're there until October 2025. So do you have like a fixed term when you're a committee member?

**Juraci:** Yeah, we've got a two-year term, and we have new elections this year in October... So about half of the committee is renewed every year. So four people are going to be elected (or reelected) this year for another two year terms.

**Mat Ryer:** Wow. That sounds really cool.

**Matt Toback:** Is there tough competition to get elected?

**Juraci:** We had - I don't know, Dan... 10 people last year as candidates?

**Dan Gomez Blanco:** Yeah, we had 10 people as candidates. I think this year we've got over 600 people I think eligible to vote as well... So yeah, it's good to see that community voting for what they would like to see in OTel as well. I think it's a great process in general.

**Juraci:** Yeah. I think last year we had about 200 people voting... So from the 590 or so, if my recollection is right, we had about the same number of voters, but only 200 people cast their votes. And each person has had five votes last year, and this year is four. So they can vote for four people, for the four positions. So if we have another 10 candidates, then people can choose the four that they want to see there.

**Matt Toback:** How much will the individuals vary? So if you're casting four votes, is it usually concentrated in one area, that you want to see the project go towards? Or are people all over the place?

**Juraci:** I think it's quite spread. I think the background and the type of companies that the governance committee members that we've got is quite spread. I think we're always encouraging as well end users to nominate themselves, or nominate somebody else to run for committee member. So yeah, I think it's a very open process.

**Dan Gomez Blanco:** It is. It is highly skilled towards vendors though. I mean, we do have you as an end user there... But I feel like we could have more end users, as well as more representation from other open source projects.

So we used to have Yuri Shkuro from Jaeger there, as part of the GC... He's part of the technical committee nowadays. Or I think he always has been. But I think OTel is way more than just OTel. We have a big influence in the whole observability area, so I think we could have more people external to the project being influential in the leadership of OTel.

**Matt Toback:** Would we want to take this opportunity for you two to compete for Mat's vote? \[laughter\]

**Mat Ryer:** Yes, we would like to do that. \[laughter\]

**Matt Toback:** Matt, what I'm learning is that your vote is not worth competing for.

**Dan Gomez Blanco:** So Matt, how many contributions did you have to open telemetry? So you need to have had like 20 contributions over the last few months, like 12 months, to be eligible. So we count the contributions through dev stats. So if you've been active in open telemetry for the past year, in at least 20 occasions, then you are eligible to vote in the elections.

**Mat Ryer:** Oh, there you go. So I don't get a vote yet.

**Juraci:** Not yet.

**Mat Ryer:** Not yet. But now I know how to game it. Do you have like campaign spending limits, and things like that? I'm interested in the internal democracy of this. So you book an event, you're booking out the four seasons total landscaping, you go there, you do a speech... "This is what OTel will be."

**Matt Toback:** I think this is the second Big Tent episode where you've brought that up.

**Dan Gomez Blanco:** We give conference swags. \[laughter\] Our bribe method is conference swag. We promise people swags.

**Mat Ryer:** Right. That's how you do it, yeah. Do you have to declare any swag you've been given? \[laughter\] Anyway, to be fair, I love it. Okay, let's take a big step back... I want to just get -- for anyone not familiar with OTel, what is OTel? What actually is it?

**Dan Gomez Blanco:** OTel, open telemetry, is a framework that allows you to instrument, to collect, to process, and then to transport telemetry data. It's focused on cloud-native systems, and one of the major goals is that you can produce all that telemetry from any application, any library, any language, in a standard format, and using a standard set of naming conventions as well, and then push that to any backend that is -- I mean, it's vendor neutral. So you can do whatever you want with your telemetry. You're not forced to use a particular solution or backend.

**Mat Ryer:** And before that then, we have all different systems and they have different traditions, different names, different techniques. So this is a goal, to kind of unify it all and everyone get behind one set of standards.

**Dan Gomez Blanco:** Yeah, it's one set of standards, and as well, something that is really, really important for observability, which is context. So you get the correlation between the different signals. So we're no longer thinking about your metrics here, and your logs here, and your traces here, but you have everything as part of one set of telemetry data, that is correlated in order to allow you to get better insights from your applications, really.

**Juraci:** Yeah. And I think one of the nice things about open telemetry is that it came to be when existing tools were there, and very successful already. So we tried to make open telemetry play nicely with the things that came before us. Of course, not everything is 100% compatible, or 100% philosophically compatible, but we tried to make it so that people could use open telemetry even if they don't like all of the parts of open telemetry, or even if they were already happy with other parts.

So open telemetry has a strong background in distributed tracing. This is where most of the concepts came into open telemetry. So we try to play nice with existing metrics systems and logging systems as well. This is the same -- or the same philosophy applies to pretty much everything within OTel. So we don't require people to use our semantic conventions, but we have opinions. We don't require people to use our APIs or SDKs, but we have opinions. So people can use our opinions if they want.

What it means in the end or in practical terms to our users is that if I'm happy with the Prometheus API for metrics, I can use that. I can then either expose my metrics via a /metrics in my application, or I can just export data using OTLP from my clients, from my Prometheus client. So the Java client, for instance, and the Go, I think, they're able to export OTLP data natively.

And I think the same kind of philosophy applies to the entirety of OpenTelemetry. So you can pick and choose the parts that you want to use, and you're not forced into anything that you don't like.

**Matt Toback:** How long have you both respectively been on the project?

**Dan Gomez Blanco:** I guess it depends how you define -- within the project, as a contributor, as an end user, I've been part of OTel in one way or another for I would say almost like four years, or something like that. Part of the governance committee for almost a year. So yeah.

**Matt Toback:** That's what I was curious more, when you started contributing to it. Not in the GC.

**Dan Gomez Blanco:** Yeah, I guess one of the things that people, I believe as an end user and now part of the committee, that people forget about is that contributions are not only code contributions. I think there's many ways that you can contribute to OTel. You can contribute by sharing your stories, you can contribute by talking to maintainers, you can contribute by giving feedback... Of course, if you want to contribute code, that's better. But I think in general -- we accept all types of contributions, but yeah, I think it's important to also understand that everything, all piece of feedback is important as well.

**Mat Ryer:** I'm definitely putting a PR in with 20 little stories... \[laughter\] \[unintelligible 00:10:50.02\]

**Juraci:** For next year, Mat. So I like to think to say that I'm with OpenTelemetry since it wasn't OpenTelemetry. So I helped choose the name for the project back then.

**Matt Toback:** You can answer -- hold on. Hold on. This is my favorite thing about open source. What were other name alternatives?

**Juraci:** Oh, man... I suggested one that nobody wanted. I think I was the only one voting for that. And I forgot the name. And I cannot, for my life, find the spreadsheet where we voted on names. But we had -- so OpenTelemetry was like the most boring one from the list... And it is the most descriptive name that we had. I mean, it was very important to not have like funny names, or things that would bring confusion. I was working on OpenTracing and Jaeger at the same time, so I liked that -- going to conferences and people saying "Oh, Jaeger. That's so nice. And the mascot is very, very nice." So I liked the project, and the name itself is already what got me there. So I felt like we could have had a better name for OpenTelemetry... But nowadays, I think I agree that OpenTelemetry, the name, is probably a very good choice.

We had like four or five names, starting with open... So I think OpenObservability was one of the choices there. I won't remember right now. But I think OpenObservability and OpenTelemetry were the most voted ones.

**Dan Gomez Blanco:** I'm personally a really big fan of boring names, as in if something does what it says on the tin... OpenTelemetry Java agent. That's it. That's OpenTelemetry Java instrumentation. It does that. OpenTelemetry Collector - it does what it says on the tin.

**Mat Ryer:** Yeah, I agree with that.

**Matt Toback:** I was gonna ask one other thing... I know we have a lot to get to, but when you think of, from the start, or even, Dan, when you when you started in 2020, maybe... Or was it 2019, with OTel?

**Dan Gomez Blanco:** OpenTelemetry was founded in '19, yeah.

**Matt Toback:** Yeah. Was there an inflection point that you remember, not in what you were building software-wise, but when it felt like a new part of the community embraced it? Or was there a before and after when it just felt like "Oh, wow, no, this is happening"? ...compared to all the effort that was put into building it, which of course, you're putting the effort in, but it's different when someone else recognizes it.

**Dan Gomez Blanco:** Yeah, I think one of the moments that was perhaps a milestone was when the project first got into incubating state, and the tracing API got stable, and some other parts of it... It just became something that people started to adopt more at scale. So I think that definitely, at least from the end user perspective, that felt more of a real milestone, really.

**Juraci:** I think that's also the point of inflection. So to understand a little bit of the history of OpenTelemetry, before that we had OpenCensus and OpenTracing. And back then, the community was a little bit - not fractured, but almost like that. So people were either using OpenTracing and the whole ecosystem around it, so perhaps Jaeger, perhaps with an OpenTracing-native backend... Or they were using OpenCensus with its batteries-included philosophy. So with metrics... Not logs; logs wasn't there back then. But then the whole set of APIs and SDKs, and the transport, and everything else... Either that, or - like, library developers, they were not using any one of those. They were just waiting to see which one of those would survive. And I think once we got incubated into the CNCF, the message out there was "There isn't an OpenCensus or OpenTracing anymore. We agree that the future is on OpenTelemetry." And that's when people stopped thinking "Should I wait for something to happen?" No, that is the event that they were waiting for. Like incubation. The union of those two things.

That's why we say that OpenTelemetry has a strong background in tracing, because of that as well. So we joined the two most relevant projects in distributed tracing into one, and then we were going to figure out the metrics and the logging parts. But yeah.

**Dan Gomez Blanco:** I think perhaps a more recent milestone as well, from the perspective of someone that is a long-time user of Prometheus, is seeing the sort of like things that were added to Prometheus to play better with OpenTelemetry, like Delta temporality, or OTLP export, allowing that push model instead of the sort of like standard pull model from Prometheus... So I think seeing all these two big CNCF projects collaborate and play together a lot better, that was also something that for a lot of people, including myself, that felt like - yeah, things are getting stable, getting mature... And yeah, I think that's been a milestone as well.

**Mat Ryer:** So you mentioned logs and metrics, of course, and traces, and it started with traces... So how do we know - as a developer, how do we know which of these telemetry types we should use? As a normal everyday developer, what do I reach for? Is there a guide, or a set of rules, or is this intuition and experience that you have to learn over time?

**Dan Gomez Blanco:** I think it depends so much on the system. The first thing that we should say is that -- the first question to ask is if you should be adding that telemetry yourself, or if you should be relying on telemetry that is emitted by instrumentation libraries, or the libraries themselves.

One of the things that open telemetry enables is that instrumentation authors to write that telemetry for you... And as well even library authors. So let's say that you pick an open source library that comes already instrumented with the metrics that you need. Then you don't need to add that yourself, right? Or with the spans and the tracing instrumentation that you need; you don't need to add that yourself. So that's work that is saved for you.

When we're talking about instrumenting our own data, our own applications, then I think it's important to choose the telemetry that is right for your use case. So if you're looking to drive, for example, alerts or dashboards or something that you're looking at long-term, you're probably looking at time series data, so that you need your metrics. If you're looking at really high granularity insights, and you're interested in how it all fits together in a complex distributed system, and you're interested in context, then you want traces.

And then if you want to integrate with some of the legacy systems that perhaps didn't produce any spans or any metrics, then you want to rely on logs. But the important thing is that you get all those part of the same context, part of the same set of correlated data. And that's something that OTel helps with, is to bridge that gap, really.

**Mat Ryer:** Yeah. Because the reality today in a lot of organizations is - yes, if you've got all those different signals, it's hard to correlate them. It's hard to say "This relates to this different type of signal", and things. And that's one of the things I'm most excited about from OTel, is the promise really that you get to be able to correlate these together much more easily. And then I just imagine what then you could build on top of that. There are some nice examples of products that people are building on OTel.

**Dan Gomez Blanco:** I think another way of thinking about it as well is going into different levels of granularity. I think you may start from metrics, and then from there you want to sort of correlate that to your traces, and then maybe from there keep going down in your level of abstraction, and then going down into profiles soon. So you find that you've got a regression in, I don't know, latency, for example, for a particular service. Then you find that with traces that that's part of another -- the root cause is in another service in your system. And then you're linking to the profiles that tells you that there is an infinite loop running in that service, and you're running out of memory, or something like that. So that's the story that we're trying to tell, that you need all that data, and you need it to be correlated.

**Juraci:** Yeah. The idea or the mental model that I have is a little bit different, but it is a workflow that works for me. And that is when I'm developing an application, I try to put myself in the future self, at 2 AM in the morning, during an outage. And I'm looking at my code and thinking "What do I need to know to understand what's going on in here?" And it's very likely that I don't need the individual log entries. So when I need an aggregate information, then I need metrics. And I can think of "What are the metrics that I need?" So do I need a gauge for the size of the queue that I'm handling right now? Do I need a latency for the outgoing HTTP requests? ...and things like that.

So this is one mode. The second mode is "What do I need to understand the context of the transaction?" So when I'm thinking about the transaction as a whole - again, microservices, right? So when I need to understand the whole context for that transaction specifically, then I know I need a span. I know I need distributed tracing. And when thinking about the neighboring services, the one thing that I know that I need is one span representing my incoming HTTP request, or my incoming gRPC, or RPC, and one span representing my outgoing RPC. So that's all that I really, really need when it comes to distributed tracing. Because then I see the whole chain in a trace.

Now, everything else can be either attributes within my spans, or I can then create another span within that, and that span would represent an event within my service. So perhaps a very complex algorithm that I want to measure the timing between executions, so I can then see what is the best case, what is the worst case, and I can try new algorithms in the future. Those would be very good for tracing.

Now, for logs, I feel like logs - they are mostly for the lifecycle events of my application. So do I have a broken connection with my database now? Or is the broken connection now healthy again? Now, those are not transaction-related. Those are events for my application. Those are very clearly log entries. So at least when I'm developing, that's what I try to use. Of course, we have to be very practical as well. Not everything that I want to stuff into my spans belongs there, because perhaps the tooling for analyzing the logs within spans, they are not quite there yet; or for the most part. So at that point, then I think "Right, so perhaps I should be doing a log instead of a span here, or a span event, or an attribute within a span." But then I have to make sure that the correlation context is there for that log entry. So I need to have a trace ID, I have to have a span ID, and so on, and so forth. Either I preconfigure my tooling to have that context propagated from my tracing, or from my tracer to my logger... But if I don't, then I have to do it manually. But I have to be very cautious that I need that information at 2am in the morning, when my systems are down.

**Mat Ryer:** I like that, planning it for your 2 AM self. That's a really good idea.

**Matt Toback:** Have you ever intentionally sabotaged future self?

**Mat Ryer:** I have. \[laughter\]

**Matt Toback:** Intentionally? No, you don't have to answer that. That would be something \[unintelligible 00:22:48.23\]

**Juraci:** But you know, I think it is a great question, because there is the perfect, and there is the done. Sometimes we get to get things done, instead of the perfect. And especially with OpenTelemetry, sometimes it's hard to find what is the perfect, what is the right way of doing things. Things are moving so fast that it's hard to do the right thing all of the time.

So yeah, I might have sabotaged myself when I'm not using semantic conventions for specific types of data. So I was debugging very obviously not my code in production, and I saw that not my code was having a cluster underscore name, and a cluster dot name, as attributes on the same type of telemetry data. And I thought that not me was having issues with semantic conventions. So not me went back to the documentation and said "So what is the actual semantic convention that I should be using here?" And then not me went back there to the code and fixed. So yeah, not me sabotaged myself at that point, by not stopping and looking at the documentation that I should have. Ir not I. I don't know, I'm lost.

**Matt Toback:** Mat, your question is around "How do you know?", and a lot of times I feel like when we talk about how to instrument your application, there's this thought or this feeling that you're instrumenting it for the application that you know, that you're choosing instrumentation for future self, for you to troubleshoot it... But conversely, what happens when there's some sort of, I don't know, difference in opinion? Because if you're going to instrument it differently, and you're not the person who's seeing it all the way through, how often do you see differences on even team approaches on the same application?

**Dan Gomez Blanco:** I think that depends as well on what teams are used to sometimes, and what they've experienced in the last, whatever, 5, 10 years. Some teams might have been supporting the same service for 5, 10 years, they've got their own runbooks, and maybe those runbooks were built before distributed tracing was a thing. So for them, it's really difficult sometimes to see the value of having tracing data, for example. And it takes, I think, a hands-on approach to be able to do that.

One of the things that I've been doing recently with some of the teams of Skyscanner is going through the OTel demo, and then doing a bit of a game where we put them in front of a demo, we inject some failures into that system, and then we ask them to go and debug it. And then try to have different teams to compete against each other, and see who gets to the root cause first. And then as all engineers \[unintelligible 00:25:31.21\] by swag, so they might get some swag...

**Matt Toback:** You were tricking them into learning.

**Dan Gomez Blanco:** Tricking them into liking tracing... And then seeing that you get to the root cause a lot faster if you use context. And if you start from perhaps an alert that we set up, that's driven from metrics... But just by looking at the metrics, you won't be able to answer the question that is like "What is the root cause here? What made it fail?"

**Matt Toback:** Have you seen eureka moments? Like, when someone discovers that they're able to see more than they were before and they're like "Wow...!"

**Dan Gomez Blanco:** There was one that I still remember... There was an engineer that was adamant that they were able to debug this through logs alone... Because that's what they were used to. "I know how to debug things. I'm just going to go to logs." And I was looking at it going like "Yeah, but the question here is what percentage of the errors is like this particular thing?" So you need that correlation. And they didn't win. Someone else got it first. And internally --

**Matt Toback:** I thought that was going to be a happy story.

**Dan Gomez Blanco:** No, no, no. So someone else got it first. So internally, I was like "Hm, okay..." I was jumping between breakout rooms and sort of like trying to guide the game... And I was thinking to myself "You do you. I'm not going to tell you how to do it, because this is a bit of a competition... But I can tell you that the people over there in that other room are using tracing, and they're a lot further advanced in finding the root cause." So that was fun.

**Juraci:** I remember when -- that was, I don't know, the early days of Jaeger... So perhaps 2018, 2019, perhaps; before the pandemic. And I was at a conference, and someone came to me and said "Oh, we are using distributed tracing at our company." And I was like "So tell me more. I mean, I want to know how people are using distributed tracing in the real world." And they were "Well, yeah, sure. I just got a Jaeger on a machine under my desk, because I'm part of a chain of services at my company. And the service on the left was saying that they were slow because I'm slow, and the people on the right, they were saying that they are not slow, and the slowness is on my side. So I decided to just have a Jaeger on my server, under my desk, and I instrumented my services with Jaeger. And I could build a report and prove to my manager that my service was not at fault there." That manager then showed the report to the other managers, to the left, and the right managers, and they were then kind of asking their teams to get distributed tracing on their services as well, because they liked the ability to show other people where slowness is.

So to me, that's a huge win for distributed tracing, when you have multiple teams and you cannot really place the blame. I think 'blame' is the wrong word, but when you cannot pinpoint where the cause of a slowness on your systems is.

**Mat Ryer:** Yeah. But you see, a lot of this tells me that maybe it's not so easy still to work with this technology, and to kind of instrument things.

**Matt Toback:** What do you think, Mat? What would it look like if it was easy?

**Mat Ryer:** Well, you probably wouldn't have to do much. And I like the idea that the SDKs and all those packages and those libraries are the things that care about the instrumentation. So as a developer, you can just use them, and you get it for free. And honestly, in the past, I've usually retro -- well, I do some obvious instrumentation from the beginning. It's just kind of there. But usually, it's kind of like I wait until I realize there's a gap in something, so it's like then I'll fix it. I'll fix the gap of instrumentation.

How about for you guys? You're obviously experts in this space, and you have a good understanding of it... Do you think instrumentation from the very beginning, when you're writing code?

**Dan Gomez Blanco:** I think I do, because I think from the start, you need to understand what are your SLIs for your service, what are the things that are the most important for it? And sometimes that will come out of instrumentation packages, or will come out of the box. Your gRPC data, your HTTP data... But then there may be something that you want to instrument in there that is specific to your domain. I work for Skyscanner... That instrumentation will not add the, I don't know, the cabin class for a flight. Or the particular airline. So things that are specific to your domain.

And then you need to think about "Okay, so how do we decorate the instrumentation that is added by default?", which is something that you can do with OTel. Or do you have to generate a metric yourself? ...but then have it in the same sort of like context as the other.

So I think the important thing though is to start with the minimum that you need to operate your service, and then rather than going all in and just try to instrument every single method in your application, just try to think a little bit about what is the important things that are the critical things, and then keep adding, iterating over it, I think.

**Mat Ryer:** Yeah, I think that's probably really sound advice. You don't want it to just be this great barrier to getting things done either. Juraci, do you kind of --

**Juraci:** Yeah, I also think about telemetry when writing code. Again, I try to imagine myself at 2 AM, trying to fix a bug there; or at least understanding what's going on. But I think you are right as well, Mat, that there is some barrier to entry there. And I was analyzing, or just for curiosity, I was looking at the curriculum for some computer science classes in Brazil back then... But I think the same applies elsewhere. And we don't teach people observability at all. Like, we don't teach them -- or even monitoring. Monitoring is very -- I mean, we teach people how to write operating systems, but we don't tell people how to monitor them. We don't teach them how to do observability. How to understand what's going on in there.

And I think this is the real gap. People have a hard time understanding distributed tracing... It is a hard topic. It is difficult to imagine that parts of the data is going directly to a collector somewhere, and parts of that data is being propagated down as part of the RPC. So which one is which? What is where? How does that actually work? Why do I need a trace context there with two types of IDs and flags? I mean, those are things that if we -- right now, we just assume that people know. And if they don't, we provide the tools to them. But then they use without knowing what's in there, and it makes it very hard to debug when things go wrong with the telemetry systems they have.

Like, they come back and say -- and I was talking to Dan the other day, that one of the problems that people have is they have a broken trace somewhere. So one specific service was not instrumented. So you end up having like two traces, when you should have had only one. And how do you debug that? And you have to understand distributed tracing to understand what's going on in there.

So on one hand, I do see that the tooling to \[unintelligible 00:32:47.24\] instrumentation is necessary. On the other hand, I think that we end up having a huge cost problem, which is already a reality in observability, by having tools that are generating a lot of telemetry data that we don't actually need. So when we look at most traces that we collected, we don't use most of them. Someone mentioned a number close to 90% a few years ago, of the traces that are created, transmitted, and stored, and never seen. They were just flushed out after the time to leave. They are gone. So all of that work for pretty much nothing.

So I think if we were to have only manual instrumentation, so that's utopic, then we would have only high valuable data being stored, and way less data than what we have right now. But because it is so difficult to understand and to manually instrument, we end up using those very powerful tools, that generate a lot of telemetry, that we might not need, in the hopes that they become useful sometime in the future.

**Matt Toback:** But it also makes sense how when you add it and you add it, and you want future self to be able to have it, but then probably not too often do you prune it, because there might be a thought of "Well, I might need it one day. I might need it", and then it just becomes a compounding... So how often will you prune it? Will you un-instrument?

**Juraci:** That's a great question. Yeah, so I guess we never do. I mean, I think it is in our nature to just not delete something because of fear that that thing might be useful in the future.

**Matt Toback:** Yeah. It's like throwing away -- go ahead, Mat.

**Mat Ryer:** It's exactly the same, I was gonna say... Yeah, I have a box absolutely packed, full of cables. By the way, I needed an HDMI cable yesterday... Couldn't find one in there. It was chaos.

**Matt Toback:** I have a zip drive cable if you want it. \[laughter\]

**Mat Ryer:** They'll come back...

**Juraci:** \[laughs\] Zip drives... Oh, my God.

**Mat Ryer:** Zip drives will be back, don't worry. But it's yeah, it's probably got a crypto use. It'll be back.

**Juraci:** Yeah. So I think this is an area where Academia is way more advanced than we are. So there is some research going in this area, of turning on and off instrumentation points based on the current state of the systems. So I think the future is not that we are not going to instrument things as much as what we are doing today, but I think the future is whether we collect and store and transmit that data in the first place. So what we could be having - and this is like the future, right? So this is what Academia is thinking right now... Having a system where the information of what to measure, what to instrument is coming from a control plane. And that information going back to the individual applications and saying "I need a trace point here, because that code is now slower... So I need to understand better how that is going." And then it adds instrumentation points in there. And once you don't need that anymore, you can just turn those trace points off. Again, Academia, so it's probably a few years into coming to enterprises... But hopefully it is coming, eventually.

**Dan Gomez Blanco:** I think I'm going to pull out a quote from what Juraci just said there, that we teach people how to write operating systems, but we don't teach them how to operate systems. That's such a great quote. I recently was talking about that with some of our grad students that we've got at Skyscanner, and I was asking about "Is observability in the curriculum these days?" And it really isn't, still. So I think these questions around "Should I use a metric, or a span, or a log?" These are things that you need on a daily basis nowadays, and they're still not being taught at university. So I think that's something that hopefully should change.

**Matt Toback:** I mean, this is even where I'd love to see companies or projects start to publish things that are beyond just the software aspect. And I know that there's help, and there's all the surrounding stuff... But even the example that you talked about, Dan, where you set up these exercises for someone to have those moments to understand the value of that... I want that shipped with the project. I want the person who's trying to roll it out within their organization or just use it themselves - they have the exact same challenges. And usually, it's not a technical challenge. It's getting someone else to understand the value of it. Like, ship that. Ship that as something that you could like pull, and deploy, and... I would love to see that also.

**Dan Gomez Blanco:** I think more and more companies are understanding this though. And I think companies that do platform engineering, or some type of enablement, and they sort of like try to make that golden path - which is one that you want people to follow - try to make that the path of least resistance... So when people go in and say "Well, why would I do this other thing?", if the golden path is the easiest one to follow, right? And then OTel helps with that in terms of having distros that you can use... Things that you can reduce that sort of like friction to get onboarded. But if you're a certain size of a company, you want to probably start thinking about that type of platform engineering, reducing the cognitive load for developers to ultimately get onboarded. But still, that doesn't remove the fact that it will be a developer the one that needs to add that instrumentation. I think you can make it easier, but at the end of the day, it will be the developer the one that needs to instrument it.

**Matt Toback:** Which then goes back to the education...

**Dan Gomez Blanco:** Exactly.

**Mat Ryer:** So is that the biggest challenge to adoption then, that people just don't really know it? Or are there other kind of resistances that we see?

**Dan Gomez Blanco:** I think that's one of the challenges from my perspective, is that people don't know it. So you need to change years of culture. You need to change years of people operating systems within a distributed system, but operating them as if they were monoliths, like isolated entities, without thinking of the overall system. And I think that's something that needs to change from sort of like an engineering perspective, or like "How do we operate the systems?" There is as well another challenge for adoption which tends to be cost-related, because we generate a lot of telemetry data from distributed systems. Where before you perhaps had one big replica that was massive, now you've got like little pieces of data that all produce telemetry. Little pieces of -- yeah, little components that all produce telemetry.

So I think it's important as well to understand that distributed tracing and that context allows you to make better decisions, and what to keep and what not to keep. Then we've talked a lot about tail sampling, for example, as a way of allowing you to examine a whole transaction and then go and say "Well, I want to keep this one, and I want to discard that other one." I've seen teams that following that approach, and not doing access login, or access level login, and then moving on to tracing, saving like 80%, 90% of the costs, because then they move to tracing, and then tracing was tail sampled... So you tend to keep only a percentage of all of it.

So I think it's cost-related sometimes, a bit of a challenge, but also, we've got the tooling. It does require work to be able to set it up and operate it and all that, but I think in general cost is a challenge, but it's not an insurmountable challenge, I think.

**Juraci:** Yeah. I think there's also the situation where people only see the value when they have experience. It's like, I don't know, testing, right? So when we are learning, our first Hello World code is not a test code, it's a main code. And until we actually see the value of unit tests, it takes a while. And it's the same with observability. So it takes a while for people to realize that they need observability, and they might not even realize, even after years of experience; they're going to realize that only when they need to operate systems. When they need to run their systems, when they need to be at the role of SREs.

And I think it doesn't help to tell people "Oh, you need to instrument your code. You need to make your code observable." People can do that, and then once they have data at a specific vendor, they look at that data and say "Now what? What do I do with this data?" So I think it has to click for people. They have to understand why they're doing that. If they don't, it's just another thing that they have to learn, like "Oh, this new security training that I have to go through is collocated with the observability training." So I think it has to click. People have to understand why they need it, why it's valuable.

**Mat Ryer:** Yeah. I do TDD, so I kind of went on that journey. I used to just write program code, and then eventually that was too much to really deal with, so I learned about testing... And then I do TDD most of the time, honestly. And sometimes I have done observability-driven development as well, where you have a metric already and you're like "Okay, the idea is if we make this change" - and I suppose good optimization always starts with something to measure. But do you -- I mean, is this something that you think every developer, so everyone listening to this now needs to go and just queue themselves up a bit on this?

**Juraci:** I don't. \[laughter\] No, I mean, so ODD, yes. Observability-Driven Development. Yeah.

**Mat Ryer:** Is that already a thing?

**Juraci:** So this has been mentioned before, so ODD, but more specifically--

**Mat Ryer:** It's odd.

**Juraci:** It's odd, yeah.

**Mat Ryer:** It needs a different name.

**Matt Toback:** "Get ODD!"

**Mat Ryer:** Telemetry-Driven... No...

**Juraci:** The other one is TBT. Trace-Based Testing. So this is also -- so it's not very... Well, what is new...? So there has been conference talks about TBT or trace-based testing, or trace-driven testing... I don't know. Since 2019, 2018, or something like that as well. There are companies now focused on providing tooling for that kind of approach. But I don't think -- I mean, of course, I'm wrong, as I usually am, but I think that... I don't feel like this is a workflow that would work for me. So I see the need for doing observability-driven development... I mean, having observability as part of my development workflow, yes. But not upfront. So when I have my code in a state where it's testable and it's working, then I think "How can I break this code? How can I make sure-- what are the modes where it can break? And when it breaks, what do I need to know?" And how do I make sure this code can break is the test unit tests. So I can write tests to make sure that my code is not breaking on odd inputs. But when it does, then what do I need to do? What do I need to know? But I don't know, this is me.

**Matt Toback:** What do you think practically would be the difference in the end result between ODD and DTO development, than observability? \[laughter\]

**Juraci:** I speak for myself, and usually, while I see the desired outcome upfront, I typically don't see how I can get there. And I think unit testing before writing the main code makes sense, because you are planning on how to execute. And with observability, I'm not testing the individual steps towards the solution. I'm just verifying whether the solution is passing the desired outcome. So in concrete terms, what I'm asserting is that I have a span representing the incoming HTTP request, and that HTTP request, when responding to my end user, it has HTTP status code in it. So that's what I would test. And that's what I do test. So when I'm writing code, I also test the observability from it. So I make sure that the spans that I expect to exist, they are there. And I do that by looking at memory, and seeing what are the spans that were generated... Do they have the status codes in it? Do they have like the latency, and so on and so forth? But this doesn't help me plan the execution of my code, development of my code... Whereas unit testing does help me there, I think.

**Dan Gomez Blanco:** Yeah, I think it does go back to as well the definition of observability, which is inferring the state of a system from observations of its outputs, and those outputs being telemetry and so on. So the way I like to think about it is when you're writing software, and you're writing that piece of code, you understand what is inside. You're actually able to debug it. You're able to write unit tests for it. It's a bit more -- it's not a black box anymore. But when it's running in production, when it's running in a cluster, it is a bit of a black box. You don't really know what's inside it, unless you produce telemetry out of it. So I think that's the difference that I see. And then thinking about it from the perspective of "What data do I need to evaluate that it's running effectively, that it's running as I expect it to run?", and that's where we're going back to the return on investment, that you add telemetry to tell you how something could fail, and when it fails, why it fails. Not how the logic is operating internally, which I think is something that you can evaluate when you write your unit tests, or your integration tests.

**Mat Ryer:** Yeah. Okay, great. So OTel then, I think -- there's no reason why you wouldn't use OTel, right? You two particularly, you would just always use OTel now. But are there downsides? Do we have a problem where you're trying to -- is there a lowest common denominator problem? Is the design - does it sort of necessarily have to only stick to the very basics, and are there trade-offs that we have to kind of be aware of?

**Dan Gomez Blanco:** I think at the moment there is a trade-off... It depends where you are in your observability journey as an organization. So if you've got really stable processes, and there may be something in OTel that is not quite stable yet, there are parts that are very stable, and that you could adopt and try to simplify and consolidate on that. There are other parts that are less stable. For example, the things related to profiles that are not yet stable.

So I think if you've got something that is currently working, that's probably one of the things where - yeah, you wait until things get a bit more stable, and that's where I see one of the possible downsides, is like things that could get stable in the future, but are not currently stable now.

**Mat Ryer:** You've found that people wait until there's this at least perception of stability before they adopt, which kind of makes sense.

**Dan Gomez Blanco:** I think it depends as well... If you're like completely greenfield, you're starting from scratch, I think your balance will probably tip towards the innovation, rather than the -- you don't have anything super-stable running, so you may want to go and adopt OTel.

**Matt Toback:** It's like nothing to protect.

**Dan Gomez Blanco:** Exactly. Yeah. I think it depends a little bit where you are as a company.

**Juraci:** And I think it's all relative as well. I mean, the collector has not reached a v1 yet. So in theory, it is not as stable. But it doesn't stop people like \[unintelligible 00:48:19.15\] from eBay by implementing a highly scalable collector pipeline there, and giving talks at KubeCon. So it is very stable for eBay, even though it is not v1 right now. And of course, eBay is one example. I mean, there have been a lot of talks out there about the Collector. And I think it is also somewhat of a problem to the project, because people are using things that are not stable, and we think it's fine for some things, but not so fine for other things.

So why we think that -- of course, yeah, the collector is stable. I mean, it can handle the load. But then when people come and say "Oh yeah, what about these X, Y, and Z receiver with that full exporter?" And then "Yeah, no... Those ones, not really." So I think people are willing to use things that are not marked as stable, so they're not waiting for that... But then they might have different experiences, depending on what they're using right now. And this is mostly a "They're lucky or not." They're lucky in picking the language where we have very good support, or they are not lucky by being in an ecosystem where our SDK has only traces support.

**Dan Gomez Blanco:** Yeah, I would agree with that. And I think it does require a little bit of due diligence from a platform engineering team, for example, to say "Okay, what parts are stable?" and then roll that out within your organization. It may not be completely stable, but it's good. At Sky Scanner, for example, we run collectors at scale as well, handling more than a million spans per second, and handling, again, hundreds of thousands of data points per second. And the collector is not v1, but it's stable for us. Those components that we rely on - we do OTOP, receive, and explore... All that, those parts and the processors that we use are stable.

I think the part that I think is quite important as well is at the API layer. So if you're rolling something out to dozens of teams, because it's such a cross-cutting concern, they're going to use that API abstraction everywhere in their code. So if anything were to be -- and this is why OTel API has really strict guarantees on backward compatibility... Because that's the bit that is like really cross-cutting. So if you have a breaking change there, it will affect every single piece of code we're using the OTel API.

I think the SDK, for example, is a bit more constrained. So you're self-contained. In our case, for example, the way that we do that is we -- as I said before, it's a type of distro at Sky Scanner, so people would not have to use the OTel SDK, or configure the OTel SDK directly themselves. So we provide that as part of our sort of like core libraries, or core configuration. So if there is a breaking change there, that breaking change can be handled by one team alone, not 80 different teams that need to go and update their code.

So I think that's basically a good way of doing that, is adopting something at the API layer which is stable, and then things that are a bit more self-contained, that you're in control and that you can test and you can validate that it works for your use case, that is where you can rely on other people's KubeCon talks, or seeing how people are doing it at scale as well.

**Mat Ryer:** Yeah. We kind of need -- we sort of could do with a way of communicating the bits that are sort of stable, things that... Because sometimes you have an API and you're like "This is definitely going to be like this", and other things you sort of know, don't you, if you know about it... But as a user, I don't know, it'd be cool to have that. Because otherwise you rely only on the version one to know whether it's all ready or not.

**Juraci:** Yeah. For most of the things that are very close to our users -- I mean, first we have to define our users, right? We have so many audiences that it's hard to say who are we targeting here. But for the APIs and SDKs, it's mostly people who are developing code, writing code. So for those people, the picture is somewhat clearer, because we have on our website what is the stability level for each API and SDK. It is a little bit complicated, because each API has contrib libraries, as we call them, and those would be non-official instrumentation libraries. So if you're using a third-party Go library for, I don't know, for your HTTP middleware, then you might use a contrib library to instrument that library for you, that framework for you. And the quality of that one specific instrumentation library - that might fall behind what we expect. So while the API and SDK for Go, for instance, might be of high quality, some of the instrumentation might not. And you don't know until you actually use, until you actually see what is the telemetry that is generated from that library.

So I think it is hard, because it is not easy to make the messaging there as well. You can use whatever you find for Go, and we guarantee it's not like that. So we guarantee the things that are in this repo, but not in that repo.

But yeah, we try to mark the modules with the stability that they have, but it's hard. With so many contrib libraries out there, for the Collector, for Go, for Java, for Node, it's hard to make sure that all of them have proper markings, and that they are up to date.

**Mat Ryer:** No doubt, a big topic for the governance committee. And speaking of which, tell us a little bit more about what you do on that committee. And in particular, if you're working on anything kind of interesting right now. Or I'd love to know any gossip of big places you disagreed, and something behind the scenes would be nice.

**Dan Gomez Blanco:** I don't think we disagree much, which I think we are -- yeah, we're all quite aligned.

**Mat Ryer:** Oh, nice...

**Matt Toback:** Do you think you should disagree more? Do you think it would help the project?

**Dan Gomez Blanco:** Agree to disagree. \[laughter\]

**Mat Ryer:** Disagree and commit, which by the way is my philosophy when developing. If the tests are failing, I disagree and commit the code anyway.

**Matt Toback:** Sorry, you were about to tell us some scandalous backstory or back details of the governance committee.

**Juraci:** So all our calls are recorded. The meeting notes are public, and the recordings are available. So there's no -- it is an open source project after all. We do have private sessions, though. I mean, for things that are really related to like code of conduct, or complaints from people from the community, then we go off the record and we have discussions there. It does happen, so there are themes that we could classify as gossip, perhaps...

**Matt Toback:** Now I feel bad. Now I want to be like "No, no, no. We don't have to talk gossip." Mat's like "Go...!" \[laughter\]

**Juraci:** No, there you go. Yeah, but it is a big community, with hundreds of people, and they have different interests, and they work at different companies. They have different experiences and backgrounds, so disagreement is bound to happen. And it is part of our group there to balance that, and to make sure that we are moving forward as a community, that we are not ignoring problems that may cause even bigger problems in the future. It's very easy to just ignore things in the hopes that they are going to disappear. It doesn't work like that. It doesn't help. But I think our biggest challenge is even though OpenTelemetry is full of people from vendors, most people there work for vendors - even though we have that commercial interest behind the project, we're all at end of the day volunteers. Most of us, we end up doing things that are not being -- we are doing it during our working hours, so we are being paid for that, but this is not something that we put on our OKRs. Those are things that we know that the project needs in some way or form.

So the difficult part as part of the GC, of the governance committee, is to agree on a roadmap, and convince other people that they have to pay attention to what we are saying, as "This is what we believe to be important. Not only listening to us, but also following the path that we are trying to go into."

So people sometimes -- I mean, we're software engineers, so we find new toys every single day, and we want to play with those toys. It doesn't necessarily mean that we are finishing the toy that we were playing with yesterday. So what we're trying to get there as part of the GC is "Let's finish the toys that we have right now", and then we can focus on bringing new toys to the room. Or perhaps we can donate some of the toys that we have here, so that we can concentrate on other things.

At this point, I think my candid opinion is that we have too many toys right there, and things that we have to do some spring cleaning and seeing what is worth keeping and what is not, and what should we declare as something that is a good idea, but for the future.

**Mat Ryer:** Yes. Well, speaking of new toys, what is new? What's coming up next? What's the exciting thing that's next for OTel?

**Dan Gomez Blanco:** Well, I think one of the things that's got everyone excited is profiling as a new signal. Profiles, as well -- we were talking about that before, how you can get profiles correlated with your traces. And then that is just going to open such a new avenue to explore within your debugging practices. And if you're thinking about profiling in the past, either you were running a continuous profiling and then not being linked to any of your telemetry, or you were not running it at all, and then you had to go in like production, or like attach a debugger and then trying to do it that way.

So yeah, I'm really, really looking forward to that personally, as well as - I guess both sides. The profiling side of things, which is low level, and then we've got the client-side instrumentation, the client-side observability aspect, which I'm so looking forward for that sort of workstream to stabilize, because there is no better way to demonstrate value than when you link that to your end users of your application. The ones that can use your application in their browser, on their mobile phones, and then you're able to link that telemetry from one side to the other.

I work with many frontend teams, and that's always one of the biggest pains, is that they get alerted for something that happens in the browser, and then they can't really see the correlation to some -- how is that affecting the backend, or how is the backend affecting things in the browser? So I'm really looking forward to that as well.

**Juraci:** Things that I'm looking forward is -- I mean, so many things... But I think one of them is the Entity SIG. Or I like to think that this is our first big refactoring in OpenTelemetry, and that is refactoring the idea of resource attributes. So going one step back... So resources is the context that Dan mentioned before. It is a thing that ties all of the signals together.

So a log has a resource context, a metric data point has a resource context, and a trace has a resource context. And that resource context is shared across everything that is generated as part of the same resource, like the same process, like the same microservice instance. So if you have a pod, then it's very likely that every single telemetry data point that is coming out of that microservice shares the same resource context. And that's how you can link them in your backend. So you can go from traces, to metrics, to logs, through the resource context attributes. Things like pod namespace, service instance UID, and things like that. So those are all shared across all of the telemetry generated by a specific microservice.

Now, it turns out that not everything that we thought at the beginning that would be good values for resource attributes are actually good. So they might be problematic for things that don't deal very well with high cardinality, like Prometheus, so we probably do not want to store the process ID or the PID as part of a resource attributes. So this is a nice metadata to have about the process, but we don't actually need it there. Or like what is the command line to start the specific service? I mean, again, nice, but we don't need to have it as part of the resource, or the Prometheus labels for each single time series.

And the Entity SIG - it would formalize or it would break down the resource context into what is the identity resources and identity SIG. So what is the identity of my resource, and what is the metadata for my resource? ...so that I could have like this linking phase or this linking context between the signals would be very thin, and I could use those in Prometheus, and Loki, or in the different data stores. And the metadata could be stored elsewhere. It doesn't have to be indexed. It doesn't have to be part of the identity of the object.

So I think this is a -- I mean, it's not so exciting as profiling perhaps, but I think it is very necessary, and it's a sign of maturity, that we are doing a refactoring. I see it as a refactoring, but yeah.

**Mat Ryer:** Wow. Well, I feel like there's so much more we could just keep talking forever about this...

**Matt Toback:** Mat, can we?

**Mat Ryer:** Can we just talk forever? No.

**Matt Toback:** Oh.

**Mat Ryer:** No, because the -- well, I'm seeing how much memory we're using for this. I was observing it, and... \[laughter\] Everyone's got to download this.

**Matt Toback:** This is observability-driven podcasting.

**Dan Gomez Blanco:** Exactly.

**Juraci:** Have you got an alert set up?

**Mat Ryer:** I've got an alert. We've reached the end. Yeah. But no, this is fantastic. I learned loads, and I hope you did, too. Subscribe to Big Tent Plus if you want to hear what that gossip was. It's not real yet... It's just an idea. I'll save that for the next hackathon.

Okay, thank you so much, again, to our guests. Thank you, Dan, Juraci, and of course, Matt Toback. Matt Toback... What can I say? I'll see you in New York, I guess, next --

**Matt Toback:** Once a year, every year. I'll meet you at the Statue of Liberty.

**Mat Ryer:** Oh, that's so romantic, isn't it?

**Matt Toback:** It is.

**Mat Ryer:** We'll see you next time on Grafana's Big Tent. Thank you.

**Outro**: \[01:03:38.09\]

**Juraci:** Do I have babies in the background? Is that what you're hearing?

**Mat Ryer:** Someone does... \[laughter\]

**Juraci:** That's probably me.

**Matt Toback:** Did you have some before we started recording? \[laughter\]

**Dan Gomez Blanco:** Definitely not me...

**Juraci:** Yeah, I'm sorry... I mean, they just came back from kindergarten.

**Mat Ryer:** That's alright.
