**Natalie Pistunovich:** So welcome, everyone. It's great of you to join us through this episode about the Berlin ecosystem and how the slowly transition to Go has happened. And I am joined by my co-organizer, Ole. Hi, Ole!

**Ole Bulbuk:** Hi! Nice to meet you.

**Natalie Pistunovich:** How are you doing?

**Ole Bulbuk:** Yeah, I'm fine, thanks. Nice to meet you. Great honor to be on the show.

**Natalie Pistunovich:** Yeah, we've been zooming for two years now... Once the meetup is gonna go back to in-person, it's just gonna be weird, at some point. Just as it was weird transitioning to Zoom, it's gonna be weird transitioning, but we'll manage.

So Ole, you are a backend engineer since the '90s. That's your fun catchphrase. And you've been working in different companies that are big and small, and you've had lots of projects that you saw fail and succeed. And you love being part of the Go community, and you're working for Ardan Labs... And hey, you're my co-organizer at my Go user group... Since we were just trying to remember, as we were preparing for this call - we've said, what was it, 2017, 2018?

**Ole Bulbuk:** 2017, I think.

**Natalie Pistunovich:** Yeah. And you are writing open source software in Go. But also maybe not.

**Ole Bulbuk:** Nowadays in Go.

**Natalie Pistunovich:** \[00:03:56.10\] Yeah. So backend engineer since the '90s... Before we dive into what does that mean, for those of you who listen and don't know, Ole and I are co-organizing the Go user group, together with Tim who is not joining us today... And we've been meeting in-person for a while, and then we've been meeting on Zoom for a while, and we're still on Zoom, but we do look to moving back to in-person sometime soon... And the Berlin user group actually exists since 2011, which is I think before both of us were using Go... Which is pretty fun. So that was when it was very early released... And definitely before any stable version came out. So the Berlin Go community is old, but it's also definitely growing, so it's always changing. What is your impression of the Go user group in Berlin, or the Go community, also those who are not coming to the user group?

**Ole Bulbuk:** I'm very happy over that, and to be part of it, of course. I think in Germany at least it seems to be by far the biggest and most active, so I'm very happy with that. I can assure you, when you live in Berlin, you can find enough companies probably for the rest of your developer life, only working on Go. So this is quite nice, I think.

**Natalie Pistunovich:** I definitely can say the same. I would agree with this. Okay, so back to the original catchphrase of your introduction... You've been a backend developer since the '90s... So you were the OG hipster in Berlin.

**Ole Bulbuk:** Yeah, in the '90s I've been working with Java, and we built our own frameworks for backend stuff... And I had \[unintelligible 00:05:42.23\] in between, and this remote method invocation, or something... It was a bit like this Cobol thing, and... Yeah, most people don't remember, probably. And we were building our own frameworks for each project, kind of, and this was just everything done yourself; you would be the true inventor sometimes, when you were one of the first on the project.

Nowadays you have a bit more of standards, and libraries and so on, and you're not supposed to build everything yourself. But in the old days this could be a lot of fun... But yeah, when you had someone who had fun with it, but didn't know the requirements, it could go really bad, too.

**Natalie Pistunovich:** I guess Go has also not that many frameworks, but... Also I guess less just common to use one.

**Ole Bulbuk:** Yeah. And one thing I love about Go also is that if feels like the old times of Java, where I could say, "Oh, this is just Java code, and I can dive into it and understand it quickly", and this works pretty well with Go, too. Often, the common libraries aren't \[unintelligible 00:07:10.13\] with lots of abstractions and other things. They're usually quite straightforward and easy to understand. Occasionally, I can quickly find a bug and fix it, or something like that. This is all nice.

**Natalie Pistunovich:** Yeah. So after Java, what was the language or languages that you were using?

**Ole Bulbuk:** Well, I got fed up with Java a bit, and then I tried Python for a while... And Python the language I don't mind too much, but back then it was all compared to Ruby and PHP, and \[unintelligible 00:07:50.20\] job at an agency, and this was really tough and not relaxed working there... And especially when things didn't turn out the way they were originally planned somehow. This wasn't so much fun.

\[00:08:12.15\] Then I went back to Java, because I thought, "Well, the language might be nicer", but you know, the working conditions were not... And then I just went back to Java, and then I found Go later. It started a little bit when it first came out, 2009, 2010, or something; I started using it a little bit for a small pet project.

**Natalie Pistunovich:** Wait, so how did you hear about it?

**Ole Bulbuk:** Oh, just in the news somewhere.

**Natalie Pistunovich:** It was not the German news, probably. I think by the first time Go was mentioned in the German news was like 2017. \[laughs\] I'm kidding. Definitely not around release time.

**Ole Bulbuk:** Yeah, yeah... So it was way before 1.0 at least, and it never caught up to 1.0. I stopped it. But it was a nice experience, and I just didn't know where it would go, and whether there would be a true market for it. And then I said "Okay, maybe I should keep with Java a bit longer."

I kept with that, and then in 2015-2016 I joined the Berlin user group, and understood that Go does have a market that Java couldn't reach. Actually, the lower latency services, and so on, like for advertisement bidding, and cloud tech and so on, where you need low latency - this can sometimes work with Java, but when the garbage collection kicks in, it doesn't work at all anymore.

So I started to see that there is really something to it that makes total sense, and I got more and more into it, and was happy to get a full-time job when I got a chance.

**Natalie Pistunovich:** Would you say that the ecosystem, the techie ecosystem of Berlin in the '90s was mostly Java?

**Ole Bulbuk:** I think no. I've been a few times told that it would be easier to get a job if I would be a C\# developer instead.

**Natalie Pistunovich:** C\#...

**Ole Bulbuk:** Yeah... So the standard competition back in those days. When you wanted to do business software, it was either Java or C\#. Companies like Siemens - they said "Yeah, we have \[unintelligible 00:10:36.16\] but we would really rather use C\#, if you wouldn't mind." And then I'm like "Yeah, maybe I'm not such a big fan of it."

**Natalie Pistunovich:** And how did you see the languages change as the ecosystem was developing, and specifically in Berlin? What languages, what tech stacks did you see over the years through the '90s, through the 2000s, through the 2010s? Give us a travel down the history lane.

**Ole Bulbuk:** As I said, it started in the wild, old days where you would develop your own framework for everything. Every new project you started with a clean sheet, and then first thought what would be great to have, and then started building that. And later you had in the Java world also all these frameworks. Some very big, others -- like, the Spring Framework has been the small and lean one for many years at least... I saw that evolve, and getting bigger and bigger, and more refined, but also more overhead... And yeah, Java got its generics, that aren't very trivial to understand, especially since Java supports proper inheritance. This makes generics a lot more complicated, too.

\[00:12:10.01\] Then these annotations in Java, that are really nice to write, but very hard to debug, because there's some code executed that you'd never seen, and you can't reach it anyhow with a normal debugger; the annotation itself doesn't even point to the real code. That is just looking for the annotation, and then doing something interesting... And yeah, it's really difficult.

So I was more and more fed up with it, and I thought maybe the language - there's still some good color to it, and I tried to make people happy and adopt that a bit more. Then I realized that the community really loves these frameworks, and that you can do powerful things in three lines.

**Natalie Pistunovich:** Were there Java meetups in Berlin at the time?

**Ole Bulbuk:** Yeah, I've been to Java meetups -- not so much in Berlin. Back in those days I'd been living near Nurnberg, and I've been to Java meetups there.

**Natalie Pistunovich:** Around what year was that? Was it the 2000s? Before, or after?

**Ole Bulbuk:** Around 2010. I moved to Nurnberg from Berlin in 2008, and moved back in 2015. And so like 6,5 years.

**Natalie Pistunovich:** And so until 2008 you were then in Berlin, so it was a lot of Java.

**Ole Bulbuk:** Yeah, at least my projects were all Java, yeah. But of course, other languages, too. As I said, C\# would have been sometimes easier to get a position for.

**Natalie Pistunovich:** When I joined the Berlin ecosystem in 2013 or so, I saw a lot of PHP everywhere.

**Ole Bulbuk:** Ah, okay. Yeah.

**Natalie Pistunovich:** When did that happen? When did you see that transition happen?

**Ole Bulbuk:** Oh, PHP -- I mean, this was a completely different community, I think. I think we never really had a competition between those. Bigger corporations and those who were willing to invest money, they used Java, and then \[unintelligible 00:14:21.11\] agencies and people who wanted to get something quickly up and running, and for cheap money, and use a lot of interns, or whatever - they were using PHP.

**Natalie Pistunovich:** And would you say that Berlin, let's say before 2010, so like in the '90s and in the 2000's, was it more startups, or was it more corporates?

**Ole Bulbuk:** The startups started a bit later. I think in the 2000s it was more corporates. At least what I saw. And then small \[unintelligible 00:14:56.14\] companies doing something. When I left, there were the first startups. I think SoundCloud was one of the first. I've been eyeing Berlin, also possibly going back there in 2012 or something, or 2013, and it still didn't look that professional to me. I didn't take a thorough look, I have to admit. And SoundCloud - you didn't know how they would earn money, and so on, and they didn't find a really good way. And I thought "Well, if it's either not so interesting technology-wise, or you don't know if they do have the business model or not, then maybe I stay away." Then I eyed London back in those days, and realized that London is just too hard; you have to be too focused.

**Natalie Pistunovich:** Yeah.

**Ole Bulbuk:** And then a few years later I took another look at Berlin, and I thought "Hey, it has developed in a good way, and I am happy to go back."

**Natalie Pistunovich:** \[00:16:09.01\] So around the 2010s is when Berlin started getting some startups, and it also started -- it translates basically to more PHP developers... But also, that's around the time that Go was joining the awareness of the world... So Go kind of became online. And this is also around the time that the Berlin Go user group started. So around that time - what can you tell us about Berlin in the early 2010s? The ecosystem, and the companies, and the languages, and why somehow it is my feeling that there was more PHP is accurate, or is it just what I saw?

**Ole Bulbuk:** Possible. I mean, we had Ruby a lot also. Not only PHP.

**Natalie Pistunovich:** Oh, true. True. Very good point, yeah.

**Ole Bulbuk:** A lot of these startups, when they aren't very technical, they have been using Ruby a lot.

**Natalie Pistunovich:** True.

**Ole Bulbuk:** And sometimes PHP. And then very technical ones, like SoundCloud, they used Go.

**Natalie Pistunovich:** Yeah, there were some early adopters of Go in Berlin, among other startups.

**Ole Bulbuk:** Yeah, and this is good for us though, right? We are still living a little bit of that... Like \[unintelligible 00:17:27.05\] We still have him at our meetups sometimes.

**Natalie Pistunovich:** Yeah. A co-creator of Prometheus.

**Ole Bulbuk:** Exactly.

**Natalie Pistunovich:** Which is written in Go.

**Ole Bulbuk:** Yeah.

**Natalie Pistunovich:** So in the early 2010s, going down the history lane - so around that time basically more startups started being created in Berlin, it was not just the corporate world, so it translated technologically to not just Java, but also Go, more PHP, more Ruby, as you said... And then how did you see the last decade, between the early 2010s to the early 2020s, which is today?

**Ole Bulbuk:** I think it all matured a lot more, and we have - especially in the Go community now - adoption beyond the classical startup community. It's not only real startups, or ex-startups like Amazon or Google that are using Go, but we have some kind of old-school companies also.

I've been to an old-school logistics company, invited for an interview, and they were using Go sometimes. So that's really nice. I am quite happy that that broadens, and adoption goes up, because it changes the community too, and you have different topics, to see what is useful now, and so on. We have to adapt as a meetup also, because the requirements are just a bit different.

**Break**: \[00:19:04.15\]

**Natalie Pistunovich:** I think one interesting thing about Berlin becoming more of a startuppy ecosystem in the tech is that there were a lot of people who immigrated to Berlin, and that kind of made Berlin very -- it probably definitely was very international, but also the tech of Berlin remained very international. So when you kind of first think of technology in the context of Germany, one might think of the car industry, and the very traditional German industries... But that's very much not Berlin. Our user group I think pretty early on was in English, and definitely since then remained in English, and I think a very large part of the developers that I know - they are only speaking English and some German.

I only worked in startups in Berlin, I never worked in a large company, but I can say that in all those companies that I worked it was at most one third German speakers. Do you think it has something to do with the adoption of languages like Go and like Ruby?

**Ole Bulbuk:** You mean the internationality with --

**Natalie Pistunovich:** Yeah.

**Ole Bulbuk:** Somehow it's linked, but I don't think it's a cause and effect directly. I mean, the traditional companies and the startups compete for employees I think in a bit different way. The traditional companies say "Okay, you get some okay(ish) salary, and you can stay here for many, many years, and you will be safe", and they attract a lot of people who want stability. And the startup scene attracts people who want to see something interesting, and something new, and want to try out things, even if it doesn't always work, and so on. This is just different kind of people also.

**Natalie Pistunovich:** Yeah.

**Ole Bulbuk:** So this is a bit of different market, and they are more international since they say "Well, it doesn't matter where you come from. In the end we need your code; this has to be good. And when you can work well along with all the others, we are fine with that." So they can get great employees from all around the world, kind of. And that's nice, of course.

But in the traditional companies they have a culture where everything is in German, and this would be very difficult for them to compete on that level. So they are just two different markets, I think.

**Natalie Pistunovich:** Yeah. To the listeners who are not familiar with the concept of -- or generally with how German work contracts work, it's common that you get a contract that mentions a probation period of average six months, during which it is possible to terminate the employment within a week, or a couple of weeks notice; it kind of depends. And this is mutual. So if you don't like it, you can quit, and give a few weeks' notice; if the employer doesn't like something in the setup, it's possible.

\[00:24:12.04\] But then after those probation six months it's becoming kind of permanent position, and then as an employer it's becoming significantly harder to fire. So you have to show that you have brought it to the attention of the employee that the performance is not as expected, and then you created a working plan together, and then you revisited it several times, and then as employer you've put some efforts into training, and giving some resources to the employee... So it's quite a long process to fire an employee.

And from the employee side, for you to quit it's something like three months notice as an employee, and if you're in a management position, it can also be six months notice... So it's very different from some of the scenarios from other places might know.

So when you say all of this stability - this is the thing that people definitely would like in a company, and it's not unusual that people work 5 and 10 years in the same company, even if it's a technical company; it's not necessarily a startup, but it's a technical company.

So these types of contracts are a legal requirement in Germany, so you have the same, also in a startup... But I guess less people are looking for that. And especially if we kind of go back to ten years ago or so, when Go just started and some companies here adopted that. The people who would be keen on trying this and don't necessarily live in Berlin - the profile of such people would be in people who don't have lots of commitments, for example kids who have to go to a specific school and they are able to easily relocate, and then they're like "Oh, I wanna work in Go. I will relocate to Berlin." But the profile of such people is many times also not necessarily speaking German.

So that's kind of how startups got this interesting culture that is a very Berliner thing; everybody has an accent and speaks like in a third language... And not just a programming language. \[laughter\] Would you say this is the same what we see in our meetups, that this is people who are international people, who usually speak some languages, and usually are not from Berlin?

**Ole Bulbuk:** Yeah, definitely.

**Natalie Pistunovich:** Would you say that the Go developers that you know switched mostly from Java, from Ruby, from PHP, from some other language?

**Ole Bulbuk:** They have many different backgrounds, I think. It's from JavaScript, from Ruby, PHP... Yeah, quite a lot from Java also. I can't remember a single Java project that I did in almost 20 years that I nowadays wouldn't rather do in Go... So yeah, probably it's natural that we have a lot of ex-Java developers in the Go community nowadays. But yeah, otherwise there are a lot of different languages. Also - it's rare, but sometimes you have an odd C and C++ developer who didn't like that complexity and so on anymore, and hunting down memory bugs, and... Probably they moved on to Rust now, but maybe there's still someone.

**Natalie Pistunovich:** Yeah. Interesting to see. Would you say that you saw some startups built with Rust recently here?

**Ole Bulbuk:** I know some companies who are hiring Rust developers, but I don't know if they are pure Rust companies, or something like that. I suppose Rust would be too tedious to develop your whole business on it. But some very technical parts probably make sense, and can pay off.

**Natalie Pistunovich:** The Go companies that you know from Berlin - would you say there are more that started in Go, or would you say that there are more that changed to Go, or something in between, that some just rewrote or added services in Go, so something in between?

**Ole Bulbuk:** \[00:28:12.07\] Yeah, I think there are different companies. Some were just built up on Go, like these advertisement \[unintelligible 00:28:18.14\] who saw that this is the language they need to be able to develop quickly and efficiently, and also have the short latency that they need to be able to compete.

Then other companies like the fintechs, who wanted to do banking, but in \[unintelligible 00:28:39.02\] so they used Go. So they started all with Go.

And then there are bigger companies that often are a bit more polyglot, and then sometimes they have a Go project and sometimes they use Java, or Kotlin, or whatever else. And yeah, I think these two types I see quite a lot, and some in between, of course, that still have something old running somewhere, or are trying to get rid of it, or have been able to switch fully to Go after they once started with a Ruby or PHP prototype, or first version, or whatever you want to call it.

I don't think this is bad. I can imagine starting something with Ruby or so, getting something up and running quickly, and when you see that the smallest instance of some virtual machine on Amazon or so doesn't work out anymore, and you have to scale, then it's maybe a good time to switch to Go, because you seem to have a product-market fit, and then \[unintelligible 00:29:50.27\] invest some money, because you earned some. It could be a model that works well for me.

**Natalie Pistunovich:** Yeah. With adoption of Go by enterprises that happened in the recent few years - how do you see this reflect in the Berlin tech ecosystem?

**Ole Bulbuk:** I see that we even more use web APIs. It's even more important than before. And otherwise, they aren't so visible, usually. They don't do lots of talks, they are often more consumers than producers...

**Natalie Pistunovich:** Of content?

**Ole Bulbuk:** Yeah, of content, and... Also, I remember when I've been at these companies myself, or worked for them while working for a consulting company, there wasn't this culture of producing something and showing it around so much. You sometimes showed something, but this was a big thing, and you would think about this a long time, and so on. This was really rare, and you would expose yourself a lot, and do this maybe once a year, or something, and get comments about it like the next three months or so. It was a big deal. They don't have such a culture.

And I think it's also got to do with this mentality that there are more risk-averse people attracted by those companies, so they don't like to expose themselves so much. And this is probably the reason why we don't see them so much.

**Natalie Pistunovich:** As speakers in the meetup, yeah.

**Ole Bulbuk:** \[00:31:48.01\] Yeah. Sometimes you see someone, especially when it's a bigger conference or something, or you've got someone who got paid for it, or so... But we usually do it preparing something in our spare time, and then going somewhere, wherever people would be willing to listen to us... \[laughs\] This is much more rare though, I think.

**Natalie Pistunovich:** Yeah. And startups is kind of different, right?

**Ole Bulbuk:** Yeah. Startups is just doing a guess, trying it out, and then see what feedback comes back. And then adopt, and do again. The same you can do with interacting with other people, with presentations, with giving talks, or going to a podcast, or whatever.

**Natalie Pistunovich:** Yeah. It is interesting to hear what large enterprises are doing, and it is harder to reach, but they definitely can tell different stories, especially about the scale. So if any enterprise gophers are listening, please give a talk. We want to hear your talk at our meetup, or any local meetup that you have.

**Ole Bulbuk:** Yeah, definitely. I've seen some applications, and scale wasn't such a big topic there. So it's not like the traditional -- or Google scale, like thousands of requests, or millions of requests per second, or something like that. But I've seen more as a scale problem in enterprises was that you had to scale to many developers, and to a large number of people working on the overall project. So the whole development process was all of business analysts and whatever else you had would have to work nicely, and so on. And this kind of scale is, I think, the more important one, and it's the biggest part of the corporate world.

**Natalie Pistunovich:** So the Go meetup - how did you hear about that, and when?

**Ole Bulbuk:** Oh, I think this was when I tried or was thinking about moving back to Berlin, and I wanted to dive into the tech scene deeper, and find out how it is, and what it looks like. Then I was just searching for meetups in Berlin, and found a few, and then the Go meetup was one of them.

**Natalie Pistunovich:** So you were searching for technical meetups in general, not specifically the Go one.

**Ole Bulbuk:** Exactly. When I first went to Berlin back, I've been starting a Java job here. And this company has later switched to Ruby. And I started doing the switch with the company, but I realized for becoming as good in Ruby as I've been in the Java world before, I would need like ten years or something, since the ecosystem and language has too big of a history. This would be very hard to catch up. And then I took another look at Go, and thought "Well, this is way easier to get into, and it's more interesting also that it's technical traits that make it more interesting, and I can build cooler application that would be very hard to do in Ruby or Java, or something." And then I was convinced.

**Natalie Pistunovich:** And can you compare the Go meetup, how it was when you started coming, versus how it is these days?

**Ole Bulbuk:** Oh, I think it is a bit different. Back in the days it was way more technical, and every talk was technical, kind of, I think. At least those that I remember... \[laughs\] And you had always some people talking about what they have done, or were planning to change on the Go compiler itself, or the toolchain, or something... This was way more common also, to hack on Go itself.

**Natalie Pistunovich:** Mm-hm.

**Ole Bulbuk:** \[00:36:07.17\] And it's still doable, and it's possible, but it's not that common anymore. I think the community has changed also; you have a harder time to find those die-hard techies nowadays.

**Natalie Pistunovich:** So how would you describe the talks these days?

**Ole Bulbuk:** Yeah, these days still we have of course quite some technical talks, but they don't dive as deeply, and don't talk half the time about a few microseconds that have been saved somewhere, usually...

We still do have interesting technical talks, definitely, but it's not all about it. We see that there are a lot of other challenges in real life, and for many projects Go is just quick and everything enough. They never optimize something for years or so. They never see a reason to optimize a single bit about their Go code somewhere. You just don't talk so much about it; even if it's interesting to listen sometimes, but it's not that useful in the end.

**Natalie Pistunovich:** I would probably describe this somewhat similarly. The first talks were about Go, and kind of on the language itself, and the more recent ones are things I do with Go at work, things I do with Go for my fun... But yeah, it's a good distinction, the difference between in Go and with Go. I wonder if it's the same in conference talks also. It would be interesting to compare that over the years.

**Ole Bulbuk:** I think this changed a little too, but yeah...

**Natalie Pistunovich:** It probably has something to do with the fact that in the beginning, or years ago, the language was more like a hipster thing to try for fun, and people who were doing that and coming to talk about that were doing this because they want to, and now there's more and more people who are gophers because that's their job. And they may have hacking, fun projects in Rust, or Haskell, or just no hacking projects. So yeah, you get kind of more practical talks.

**Ole Bulbuk:** Yeah. What do you think is the biggest hurdle of more adoption of Go in Berlin?

**Natalie Pistunovich:** I'm trying to think of an answer that does not have the word "hockey stick" in it... \[laughter\] So there's this graph, like a Gaussian, ghost-looking graph of a language, of adoption; in the beginning it's just very few, then there is a huge peak that many people are adopting, and then there is just the repose of not that many people left to be adopters. I think we're towards the end of that peak, or of that ghost. So already a lot of people who have done that adoption.

In the beginning it was more word of mouth, and reading, like you said, on the news, and so on... And now it's more - yeah, because you have to, because that's your job. And companies will keep adopting Go, but probably because we have kind of behind us, or right now, as fast as it gets is just not gonna be this fast anymore. So we will see gophers joining, but I think it will not be as many; the velocity of joining - the derivative of that is not gonna be positive for longer. It's gonna be more people, but less every time, kind of join us.

\[00:39:47.03\] This last week, or this week was Google I/O, and this is kind of the conference that Google organizes for people who are community organizers, like us, and who are developers, and for people who participate in their different programs... And Go was mentioned. And before this year, it happened once, sometime I think in 2015, and in between, every year, in Google I/O, it was just not brought up... Although this is a language that came from that origin. So that's another interesting signal.

I asked you earlier how did you join the Go community... So the way that I joined the Go community is when sometimes after I moved to Berlin I just went to a conference; I don't even remember how I heard about that anymore... But it was the DevFest, which is the annual conference of the different Google developer groups in Berlin. So the Go user group, the Android user group, and at the time I think there was also the general Google developer group, kind of; and that's it. There were less Google developer group communities at the time. And they joined forces to give an annual conference, which is kind of a mini, local Google I/O, if you will.

At that time I was working at a company that was using Go, and then I overheard in the hallway a conversation, something about Go, and I joined that conversation, and then somebody said "Oh, you should join our user group." And this was a person \[unintelligible 00:41:19.21\] who at the time was the organizer of the user group. So he said "You should join the meetup", I joined the meetup, and then he said "You should help me organize", because I was telling him how I used to be as a student very active in the student organization, and doing events for students, and so on. He said it's pretty much the same, it's just the adult version of that. And then that's how I joined on board.

**Ole Bulbuk:** Cool.

**Natalie Pistunovich:** That was end of 2013, early 2014, I think. A long time ago. And yeah, so the Go meetup was almost three at the time, so that was already nicely going on... In English, which is definitely fun. It felt inclusive in that sense, that you don't need to be a German speaker to be able to participate.

**Ole Bulbuk:** Yeah, great. Back to this topic of adoption of Go, nowadays I think we will have -- as you said, the adoption curve will flatten a bit, but I also think the new members and people joining in the meetup will probably flatten a bit more, because the big companies \[unintelligible 00:42:27.04\] who use Go because they have paid for it. And they are less likely to go to any meetup at all, because they are not paid for it, right? And this is not too bad. If we don't see user numbers grow as before, this can be a sign just of maturity, kind of. Still, adoption can grow beyond the rate of the members, or something like that.

**Natalie Pistunovich:** Yeah, I definitely hope that this signal of including a talk about Go in Google I/O would be a nice push towards that end of that curve, that would bring those people on board. And I definitely hope that this will also mean more talks for our meetups.

**Ole Bulbuk:** Yeah, that would be nice, of course. But it would be very welcome if we'd get a new wave of talks from companies we've never heard of so far that they would be using Go at all. Yeah, it would be really fun.

**Break:** \[00:43:36.02\]

**Natalie Pistunovich:** Do you think there's any connection between how the Berlin ecosystem is having lots of gophers, and then lots of companies with Go, and how the Go user group is very early on? So did one influence the other? If yes, which did which? If not, what is that connection between the ecosystem and the Go community in Berlin that you see?

**Ole Bulbuk:** I think it's always intertwined a bit. We have luckily these early adopter companies, then with some good Go developers, and then this greater Go community... And then there were these companies where people said "Well, we do have enough developers here in Berlin. We can bet on Go." And then they could attract more Go developers from other parts of the worlds. Now we have a nice Go ecosystem here, and quite a bit community... And I think still the number of developers that you can find for a company here is still the limiting factor.

**Natalie Pistunovich:** Yeah.

**Ole Bulbuk:** I think when you show to a manager "Hey, Go is optimal for this kind of system that you want to build", then he says "Well, but I asked my developers that I can get and I have already here, and they don't know much about Go." So it's hard to get them to try it. This is, I think, still the limiting factor somehow.

**Natalie Pistunovich:** Yeah, that's definitely that, and this will definitely make a difference, because it's more happening in larger companies, and larger -- of course, it's harder to convert, but it will bring more... To convert one large company, you have to have a lot of developers joining.

You mentioned relocating to Berlin for Go... So for those who are not familiar with working in Europe generally as a developer, and specifically in Berlin, in Germany, there are very easy visas that your employer can issue for you. So it's a lot easier than a Green Card. You kind of need a recognized degree from university, and the rest is bureaucracy, pretty much. And it's also possible without a recognized degree, as well. It's slightly harder, but still definitely manageable, and a lot easier than a Green Card. So if anybody is considering to relocate here, just know that it's pretty easy, because there is a high demand.

**Ole Bulbuk:** \[00:50:04.01\] I think the contract that you get from the company is the most important thing. Then with that you can get the rest rolling somehow. Especially from within the EU or something like that, it's quite easy. And when you are from outside, it's getting a bit more difficult, but...

**Natalie Pistunovich:** Yeah, for those who are inside the EU, you don't need to do anything; you just move here and start working. But for those who want to come from abroad, the visa - it's called the Blue Card; it's rather straightforward. There's no quotas on that to start with. It does simplify things.

And as anything in the world in the last two years, our meetup as well switched from in-person to virtual. Can you share your insights on that?

**Ole Bulbuk:** Yeah. I mean, at the start it was quite exciting. We tried to keep it all running and do everything exactly the same as before. After a while we saw that it's not that exciting anymore, and people start to get Zoom fatigue, and whatever. Members were a bit decreasing... And then we saw that we got more international adoption, like people from India, or anywhere in the world joining, which was really nice, too. But in the end, we don't have the same energy as if you really can meet people in-person and can just have a small chat afterwards, and so on. It's not the same relaxed atmosphere that you can create in an in-person meetup. So I'm missing that myself a bit, I have to admit.

**Natalie Pistunovich:** For sure. And we had some attempts of saying "Maybe next month we'll try" or "Maybe in spring we'll try", but then always numbers were against us, and regulations and whatnot. You mentioned that we had a decrease in attendance, but changed the character to be more international; that's definitely something interesting. And I think one of the things we did that allowed us to kind of stay active throughout this time is to make things regular.

In the past we met once a month always. Since forever it was always once a month, but it would move around when in the month. Then at some point we anchored the second Wednesday of the month and we started recording, and then uploading this to YouTube... So less attendance, but this instead kind of compensates with more people watching the YouTube... Which is probably convenient, in a way, that you don't have to attend in the evening when you cannot, but you can watch this at the time that you want. So you still get that content, but you definitely miss out on the connection.

We do look to get back in-person, maybe this spring/summer, which is exciting... And it will change things again. So we'll see if the Zoom fatigue is being replaced with "I'm used to not leaving the house. I'm not gonna come to events" fatigue. Maybe yes, maybe not. Definitely, a global thing to think about, which is maybe something you all agree with, maybe something that you don't agree with, but this definitely is a type of an opinion, just like our Unpopular Opinions.

**Jingle:** \[00:53:39.11\] to \[00:53:58.14\]

**Natalie Pistunovich:** Ole, I heard a rumor, that you have two unpopular opinions.

**Ole Bulbuk:** Yeah, that is true. The first is a bit of a meta opinion. My first unpopular opinion is that I think the popularity of an opinion depends more on the audience than on the opinion itself. A very good example would be stating that Go is a low-latency, low-overhead programming language. When you tell this to some JavaScript or Ruby or Go developers, they will all nod and say "Well, yeah, that's popular." And when you tell this to some C or C++ developers, or Ruby, or Rust developers or so, they will say "No, that's not true. Low latency. I've seen the overhead is like ten times higher than anything that I've built" and so on.

So this is something quite different... And I think the audience is a major factor.

**Natalie Pistunovich:** Okay, so in order to be ranked high in the Unpopular Opinion list of Go Time, you want to optimize for something that is very unpopular with Go developers.

**Ole Bulbuk:** So I could now state an opinion like "Go is a very slow, large latency and whatever language." I don't think I will find an opinion like that that it's -- I'm a gopher myself, come on... \[laughs\] Maybe I have a second opinion that it's a bit more broader also...

**Natalie Pistunovich:** Is that optimized for the Go crowd?

**Ole Bulbuk:** No, it's not. I think it's optimized more in general for the IT crowd. And it's more about how universities and so on work. Because they all do something very nice, abstract, and a lot of algorithms and data structures, or how to create programming languages, and how to study them, or how to work and implement databases, and so on. But in the end, there are only very few students who truly work on this later in real life, when they ever leave university. \[unintelligible 00:56:25.14\] really working on these very interesting problems. But we have like 99.99% of the people coming from universities never get such interesting problem in their lives, so they have a tendency often for over-engineering.

I think a lot of the over-engineering we see in the real world stems from the discrepancy that we see between the problems we learn to solve at universities and the problems that we have in real life, or lack of problems maybe.

**Natalie Pistunovich:** \[00:57:05.00\] Interesting. I will not lie, I feel a little bit attacked...

**Ole Bulbuk:** Sorry. \[laughter\]

**Natalie Pistunovich:** Over-engineering is definitely a topic I have heard in the past... That sure is interesting. I agree with you that, unfortunately, this is not so unpopular, at least in our little sample group. I agree with you that the type of skills and the views on programming that you get in universities is mostly not transferable, and things that should be taught on more is how to read other people's code... Because so much of the work that you do in university is just write from scratch, which is also not something you do often... Definitely not alone. And also, learning to accept and consider things like trade-offs in the context of actually business value.

It's still hard for me to sometimes let go of doing the right thing versus doing the thing that is more efficient on the business part. I have \[unintelligible 00:58:04.08\] multiple times in the past, and it's still ongoing. Maybe if I would have learned more in university, more programming in the context of "This is the right thing, and this is the efficient thing", it would have gotten this transition easier for me, for sure. So I'm sorry, Ole, I agree with you. I agree with your unpopular opinion...

**Ole Bulbuk:** Well, sorry... \[laughter\]

**Natalie Pistunovich:** But we'll have a survey on Twitter and we'll see how many people agree.

**Ole Bulbuk:** Okay.

**Natalie Pistunovich:** Yeah, fun. Thanks a lot for joining. We talked about so many different interesting things, and we'll definitely include in the show notes also all the things that we mentioned and are relevant. And join the meetup, join our user group if you wanna see Ole and me.

**Ole Bulbuk:** Yeah, please do.

**Natalie Pistunovich:** Thank you, Ole.

**Ole Bulbuk:** You're welcome.

**Natalie Pistunovich:** Have a good evening.

**Ole Bulbuk:** Bye.
