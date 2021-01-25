**Erik St. Martin:** The document should be up to date for all of the questions we've got...

**Carlisia Thompson:** Up to when?

**Erik St. Martin:** Up until just a couple minutes ago.

**Carlisia Thompson:** Cool.

**Erik St. Martin:** So we'll take the 3 PM mark in Slack as anything that comes in after that as new questions, and we will try to pay attention as best as we can.

**Brian Ketelsen:** Or not. If you're late, too bad. You had a chance.

**Erik St. Martin:** So... AMA episode. This is gonna be our second shot at that, and if you're listening right now, please let us know whether you like these or don't. If you do like them, we'll try to do them more frequently. I don't know whether that will be monthly or every other month or something like that, but we can come up with kind of a consistent schedule, and we will maybe set something up where we can just take questions all the time... So whenever you think of a question, just throw it in and we can address it the next AMA. That way you don't have to be so in sync with us the day or the day before we do an AMA. So who's ready to answer some questions?

**Carlisia Thompson:** Yay!

**Brian Ketelsen:** Let's do this thing.

**Carlisia Thompson:** Questions are awesome!

**Erik St. Martin:** I think I actually saw some Go questions this time, which is awesome.

**Brian Ketelsen:** Important, too.

**Erik St. Martin:** Yeah, especially if you're getting started in the Go community; feel free to throw us Go questions, or what our preferences are, things like that. Okay, so anybody in particular want to do the question reading?

**Brian Ketelsen:** We're gonna do these in order... We just kind of pick them out in fun.

**Carlisia Thompson:** I think in order is easier for us... Other than that, I don't have an opinion.

**Brian Ketelsen:** Okay, well then I will read the first question from Freddie V. on Twitter, who asks "What are your favorite resources for learning the idiomatic way of doing things in Go?"

**Erik St. Martin:** I guess this is an interesting question for me. I don't know whether I look for new resources nowadays, but I tend to look through the Go standard library a lot, because usually that's where the idioms kind of start, and then they sort of spread from there. Anybody else have different ways?

**Brian Ketelsen:** I had a slide in my training deck that said "Use the source, Luke", and it absolutely agreed with that, because the standard library is idiomatic Go, for the most part, and reading through the standard library is the best way to see how to write really good Go code.

**Carlisia Thompson:** I used to obsess with trying to find the idiomatic way to write Go code when I started learning Go, and I never really found a specific resource that said "This is the idiomatic way to write Go code." Actually, there is a website that tends to do that. It was done by someone at Sourcegraph, and I need to find the [link](https://about.sourcegraph.com/go/idiomatic-go/); I actually tried to find the link the other day. I don't have it. If I find it, I'll put it on the show notes. But there isn't much really to it, and the best way that I learned was by having code reviews done by co-workers... But of course, not everybody is in that position. Other than that, it really is just compare your code to what's out there.

**Brian Ketelsen:** \[00:04:18.00\] Yeah, there's a channel in our Slack called Go [Reviews](https://gophers.slack.com/messages/reviews), and if you don't have co-workers who are strong in Go, you can always come into that Go Reviews channel and there are lots of people who are very willing to give you some good advice, and they're friendly about it, too.

**Carlisia Thompson:** Yeah, that's a good point.

**Erik St. Martin:** Yeah, that's actually a really good point too, just contributing to open source; like, find a really popular project that's maintained, and you can kind of learn idioms organically through code review. Okay, next question... This one comes from Marwan, he says "What do you like to see the core Go team focus their effort on?"

**Brian Ketelsen:** Oh, that's a good question. So the core Go team I think should be focusing on making Go faster, making the compiler faster, making cGo easier... That's about it.

**Carlisia Thompson:** I am willing to be that this question meant to ask about technical efforts, but I'm going to go out on a limb here and say that the thing that I would like to see the core Go team focus on is onboarding of developers who are new to Go, either because they're new to programming or new to Go... And just give them sort of a map for where to start. Because the starting point for different people is in different places, and I think that we don't have that.

**Erik St. Martin:** But do you think that that's somewhere the community should really jump in and kind of handle those things, or...? Because the Go team is only so big, right?

**Carlisia Thompson:** Maybe they should be bigger. I think that's exactly what the Go team should do. They should at least lead the effort, and the community definitely should jump in and help. But we need to have some sort of authoritative -- that sounded bad... But some sort of like confident source of direction, like "Okay, this is a good resource." A resource with which people feel confident, "Okay, this is legit, this is validated/endorsed by the Go team", or whoever. And I think the Go team is a great entity to do that... At least to infer that validation.

**Erik St. Martin:** Yeah, I mean having something endorsed by the Go team I think would be good, but I also think that as people who have been in the Go community, all of us here on the show included, I think we're too close to the problem sometimes to really be connected with the areas that newcomers struggle, so we really need help there in figuring out what those things are.

Now, I had the same problem in the Rails world, I was like "Oh, Rails is easy" until the first time I had to sit with somebody to get them set up, and I'm like "Okay, maybe not so easy to get started."

**Carlisia Thompson:** Yeah, absolutely. It has to be a collaborative effort, and people who will do it need to know how to do it; it's not just "Oh, I'm putting this up here and that's what it is." It's work, it's a lot of work, and like you're saying, they are a small team, but I think this is important. Because if they don't take the lead on this, yes, it can come from the community, but then what ends up happening is that we have ten resources and people are asking "Where should I be looking?"

**Erik St. Martin:** \[00:08:00.07\] Yeah, that's true. There should be a canonical place. Okay, next question... We have Jamie Stackhouse who says "Do you have any examples of a codebase that uses plain database SQL for a larger size codebase? Particularly looking for patterns to share internally of good practice for scalable dev practices."

**Carlisia Thompson:** That's a great question.

**Brian Ketelsen:** I have one that I remember. Let me dig really quick while I describe it. It's in the Go Micro repositories, and I wouldn't go as far as to say it was large, but it looks like it was built from someone who's been doing large scale db SQL work and followed those practices, so the repo itself isn't big, but the practices looked to me like those that came from scaling experience in terms of size, so let me dig it really quick. It had most of the queries built as constants at the top of the database package, and it was just an interesting pattern; I'm digging, sorry. Still digging.

**Erik St. Martin:** My answer for this would be that I've been pretty disconnected from database SQL. In my early Go years I did a lot of stuff for database SQL, and that was before a lot of idioms existed in Go. Now I haven't really touched it in a couple of years, so I don't feel like I would have a good example. How about you, Carlisia?

**Carlisia Thompson:** I don't know of any codebase that's public, but I would say take a look at the drivers out there, and see how they are accessing database using the standard library... If I understood the question correctly. I think the question is "I don't wanna use a third-party library, and just use the standard library..."

**Brian Ketelsen:** Yeah, and then what are the ways to organize that. I just pasted the [db.go](https://github.com/micro/user-srv/blob/master/db/db.go) file from the [micro/user-srv](https://github.com/micro/user-srv) library into our Slack. The thing that stands out here is that it uses a map, or a list of all of the queries that can be executed, so each query has a name and then a SQL statement, and then at the beginning in the init it parses those queries and prepares them. It runs the db.Prepare, so you don't have the two roundtrips to the server when you make a query. So everything is pre-prepared, which saves a lot of time during runtime. I don't know if it's any more or less elegant than any other solution I've seen, but I do like the idea of all of the queries being in a single map, so they're easy to find in the source code (they're not littered through functions) and I do very much like the idea of preparing them ahead of time, so that they're faster, because in case you aren't aware, when you write a query in Go using db SQL, I think at least MySQL (I'm not sure about the other drivers) they in the background will run a prepare on the query first, and then execute it. So it's two roundtrips to the server, even when you think you're making one. So preparing them in advance saves quite a bit of time.

**Erik St. Martin:** Okay, next question. It looks like the next two are GopherCon-related maybe... Okay, so Chris Shore asks "As GopherCon organizers, have you ever considered a panel talk for how Go has helped people overcome obstacles in their organizations, or lives for that matter?" I don't know that we have ever considered a panel talk, but we definitely do look for CFP submissions that demonstrate this. I think it's always interesting to hear these types of stories.

**Brian Ketelsen:** \[00:12:01.09\] Yeah, I think in general, since we only have a small vote on the CFP submissions - I'm generalizing this probably more than I should - but the audience of GopherCon is already sold on Go, and a talk like that or a panel like that, talking about how Go helps people overcome obstacles is selling to the people that are already sold, and that I think is maybe the wrong audience and probably why we haven't seen anything like that yet... But that's a guess.

**Erik St. Martin:** Yeah, and I guess that's true as, you know, the very first GopherCon there was a lot of having C talks like that, but nowadays people are dipping their toe into the Go world through attending meetups in more regional events. So I think that there'd be a bigger impact there probably for a lot of these discussions.

**Brian Ketelsen:** Yeah.

**Carlisia Thompson:** If what they want to do is just sort of get an idea, there is a really great talk from GopherCon 2015; I don't remember the name of the guy who gave the talk... I saw the talk and I remember the talk, it was the guy from -- oh my gosh, that company that Facebook bought... It's not Purge. What's the name of the company? Help me.

**Erik St. Martin:** Periscope.

**Carlisia Thompson:** No, it's two syllables. Well great, never mind then. I can't remember. \[laughs\] Anyway.

**Brian Ketelsen:** Snapchat?

**Carlisia Thompson:** No.

**Brian Ketelsen:** WhatsApp. Cory LaNou will buy a vowel. Is there an A, \[unintelligible 00:13:41.08\] ?

**Carlisia Thompson:** It starts with a P.

**Brian Ketelsen:** Parse.

**Erik St. Martin:** Oh, yeah, yeah.

**Carlisia Thompson:** Is it Parse.

**Brian Ketelsen:** Parse is the only one I know that they bought that starts with a P.

**Carlisia Thompson:** Okay, then that's it.

**Erik St. Martin:** Yeah, there was somebody in 2015 that did a talk on [rebuilding all of Parse in Go](https://www.youtube.com/watch?v=_f9LS-OWfeA).

**Carlisia Thompson:** Yes, exactly, that's it. Thank you.

**Erik St. Martin:** Okay, next question. James Lovato asks "If I took my kindle to GopherCon and pulled up [Go In Action](https://www.manning.com/books/go-in-action), would you sign the display?" Yes.

**Brian Ketelsen:** Yes.

**Erik St. Martin:** If you print a copy, we'll sign that too.

**Brian Ketelsen:** Yes.

**Erik St. Martin:** Okay, Cory LaNou asks "What is the most --"

**Brian Ketelsen:** We skipped Scott Mansfield's question, "How many total hours does it take to organize GopherCon Denver?"

**Carlisia Thompson:** Wow.

**Brian Ketelsen:** Total hours... Oh, ouch.

**Carlisia Thompson:** On a man-hour basis?

**Erik St. Martin:** I don't even know.

**Brian Ketelsen:** Yeah, so if they're man hours, probably 6,000, but in woman hours, probably 30 or 40. \[laughter\]

**Carlisia Thompson:** Good one!

**Erik St. Martin:** So the very first year we spent a year of the two of us working several hours a night every night for almost a year. Nowadays, I mean... We have waves of time where we don't do things - a couple months right after, and between when we announce in January... I mean, I feel like we're not working on it daily anymore. If we are, it's less than an hour, and then some weeks we get hectically during CFP's, where we're working several hours a day reviewing them. But in order for our sanity and the sustainability of the conference, we have hired vendors to do a lot of the things that we didn't have time for or are not so good at, like selling sponsorships and things like that. So I guess it would be really hard to estimate now.

**Brian Ketelsen:** If I had to guess, I'd say over the course of the entire year, probably 500 hours for each of us, and I just pulled that out of the air... This year, 500 hours for each of us. The first couple years it was more like 1,000 hours for each of us. It was definitely a half-time job the first year.

**Erik St. Martin:** \[00:16:10.20\] I'd say now it probably averages 10-15 hours a week, where some weeks are closer to five hours and some weeks are closer to 30 or 40 hours, just depending on the time of year and what's going on. Cory LaNou asks "What was the most unexpected good thing you learned/encountered/discovered when you joined Microsoft?"

**Brian Ketelsen:** Oh, this is a good one. Unexpected good thing... Microsoft isn't evil. Of course, I'd learned that before I joined, which is why I joined, but I think going into Microsoft, going on campus and seeing all of the people who were just extremely passionate about technology and helping others, it's not just a marketing pitch that Microsoft has changed; it's real, and it's top-down, and it's kind of awesome. There's just so many amazing, smart people that work there, and I look forward to doing it every day.

[Ashley](https://twitter.com/ashleymcnamara) is the best thing that's ever happened to Microsoft, how's that? There we go. She just jumped in on Slack and reminded us of that.

**Erik St. Martin:** And literally, he's not kidding. She says "Me, I'm the best thing that happened..."

**Carlisia Thompson:** In all capital letters.

**Erik St. Martin:** Yeah, in all caps.

**Carlisia Thompson:** I love Ashley.

**Erik St. Martin:** I guess for me, I was surprised to find out that there were divisions of Microsoft that have actually been doing open source for a very long time, as parts of like the Apache Foundation and things like that... And also just how quickly the CDA team scaled up. So for most of you that are kind of aware of Brian and I joining, and Ashley McNamara, and Jess Frazelle, and Bridget, and some of these people that we worked directly with in the Go Linux containers groups... We are actually kind of the minority; the team itself is close to 70 people now, Brian...?

**Brian Ketelsen:** I think that's about right, yeah.

**Erik St. Martin:** Yeah, there's .NET people, there's Python people, there's IoT and AI and ML people... The actual team is actually pretty large. So that was really exciting to learn too, which makes for fun little projects where Brian and I come up with some kind of crazy idea - or anybody on the team for that matter - and you're like "I'd really like a cool front-end, or to make this do some AI stuff, or whatever" and you can just reach out to other people and they're like "Yeah, I'll help with those bits."

**Brian Ketelsen:** Yeah, it's kind of awesome. I don't remember... It was either Ashley or Jess who said in a blog post or Twitter that the best part of it was being able to just reach out and hit an expert on any topic, and that was so cool. It is, it's amazing. You need AI, we have that expert; you need this, we have the person who wrote a book on that. It's all here.

**Carlisia Thompson:** Well, the best thing I learned when I joined Microsoft was nothing. \[laughter\]

**Erik St. Martin:** Spoiler alert! Carlisia just quit Fastly, live, on air, now.

**Carlisia Thompson:** \[laughs\] I did not join Microsoft. But thank you for asking.

**Brian Ketelsen:** If you did, we'd have to hit them up for official sponsorship at that point.

**Erik St. Martin:** You're here in spirit, Carlisia. Okay, so also from Cory, "Go has been out for a while now, but I'm sure you still get the question, why Go? After using it as long as you have, what is your answer now, and what was it 4-5 years ago?"

**Carlisia Thompson:** That's a great question.

**Erik St. Martin:** \[00:19:58.25\] Yeah, that is a very good question. I guess for me now might be -- it feels like a cloud-first language; a lot of the ecosystem in the cloud enters the systems world.

**Brian Ketelsen:** What does that mean? What the hell does that mean? That's a cop-out. What is a cloud-first language? Answer it without the marketing buzz, come on.

**Erik St. Martin:** Yeah, so it's because almost every cloud provider has or is working on a really good SDK for it. A lot of your tools like Docker and Kubernetes that everybody is using leverage Go, a lot of the distributed systems tools that we're all using now for observability and distributed tracing, they're all written in Go and have really solid libraries for it, and it makes it really easy to build distributed systems in cloud applications with.

That's not to say that that overshadows all the reasons I originally loved Go, but it is a good reason to do it. There's projects that you wanna build that maybe integrate with Kubernetes, and if you want help from the open source community, that's the language people who work on Docker and Kubernetes speak.

Four, five years ago, it was concurrency, the language was easy to reason about and fit in your head. I guess those would be the core points. There were parts of the language that I loved, but it kind of fell into those bits. I still firmly believe that, but I think the cloud aspect is another reason why Go should be a language of choice now.

**Carlisia Thompson:** I'll go next. So I would start with 4-5 years ago. I guess for me it was -- I don't know, not quite five years, maybe four... Three, four years? I don't remember. Let me see, three years ago, when I started looking into Go. It was the promise of speed that got me mesmerized. Speed as far as running apps, because easier to use concurrency, but also speed in running tests... And actually, going back to that talk by the guy who worked at Parse, that was very appealing. He was saying the Parse app that they had before took 30 minutes to run tests, and then they converted to Go and it took three minutes, and I was mesmerized. That was what hooked me.

Today what I think is that -- maybe that's like old news for me, like "Okay, yeah, it's fast... Whatever." \[laughs\] But for me, what really gets me every day that I work with Go is how easy to read, how productive I can be; I can hold a lot more code in my head because I don't have to figure out what I'm reading. It's just so clear, it's like reading a written language. It's so easy to understand.

I think if you have a small project, use whatever language you want, who cares... But if you start having a bigger application, really think about how much more productive the developers will be if the language is easier to read, if you're trying to make a choice there. So that's my top feature for Go at the moment.

**Brian Ketelsen:** I couldn't have said that better. That's exactly what I would have said or was planning on seeing. Four or five years ago I would have said the same thing Erik would have said four or five years ago - concurrency, all of the speed and whatever, but now 100% my favorite feature of Go is how easy it is to read and how easy it is for a large team to know what's going on in a big Go repository, compared to other languages. It's drastically different.

**Erik St. Martin:** \[00:24:07.24\] I think also another thing we're missing today, that we could say a little bit when we first started 4-5 years ago, is the community. The community is so much bigger, but also still kind of tight-knit in a lot of ways. I think the popularity and success of the language also lies heavily on the community.

**Carlisia Thompson:** Agree, absolutely.

**Erik St. Martin:** Also Cory - I guess he sent us a list...

**Brian Ketelsen:** He did, he sent us like six in a row.

**Erik St. Martin:** "What is the biggest thing that we, the community, can do/continue to do to help Go adoption?"

**Carlisia Thompson:** I have an answer for that.

**Brian Ketelsen:** I do, too.

**Carlisia Thompson:** In my opinion, it's -- so I'm assuming he's talking about people who are already in the community... Step up and take leadership of whatever effort you can relate with. It might be [Women Who Go](https://www.womenwhogo.org/), it might be [Go Bridge](https://golangbridge.org/), or it might be the [Go Working Group](https://blog.golang.org/community-outreach-working-group), or anything. Because this stuff has been going on, but people get burned out. Everybody who's doing this stuff, they're doing it on a volunteering basis, and you know, take the baton, basically. I can hardly think of anything that would have more impact in the adoption of Go than that, because that helps bring in people - bring in new people, bring people from diverse backgrounds (...or not, it doesn't matter). Teaching workshops, doing things like that; take the leadership of something, so people who are doing that can breathe and take a break.

Also, the more people who are out there taking leadership of these things, the more these initiatives can grow and these \[unintelligible 00:26:10.04\] free is very appealing for people who are joining to have that portal to go through to learn Go and adopt Go, basically.

**Brian Ketelsen:** That's a good answer. Mine is similar... I would say that one of the things that I still love more than anything else about the Go community is the Go community, and that as far as communities go, it hasn't changed a lot over the last 7-8 years. It started off being a very welcoming and friendly and helpful community, and it still is, even though it's grown exponentially. So my suggestion or advice would be that we make a conscious effort to continue that welcome openness.

I remember in the Ruby world they had the -1 thing, which meant "Mats is nice, so we are nice", and that didn't really last long. Ruby hit big and hard in 2004-2005, and Mats was still nice, but a lot of other people weren't, and the Ruby community was less than friendly. And one of the things that Erik and I talked about very early on was how much we wanted to take action to make the Go community continue to be welcoming and friendly, and that was part of our motivation behind GopherCon.

**Erik St. Martin:** I guess from my standpoint it mirrors a lot of what both Brian and Carlisia said... The community aspect and always being welcoming. I think that we need more resources for beginners and onboarding, and kind of bridging that gap. Then I think we also need more people to speak at local meetups and things, because now we've kind of hit the catalyst point of Go's adoption growth; now we're starting to have more people come on, and people who aren't necessarily traveling to conferences and things like that... So we need more people speaking on the local fronts to get more people introduced to the language.

**Brian Ketelsen:** \[00:28:23.23\] Yeah, and really that's our farm team for GopherCon. So go practice at the meetups and get polished well, so you can come and present on the big stage at GopherCon.

**Erik St. Martin:** Okay.

**Brian Ketelsen:** Alright, next question? Cory again - my goodness, Cory - asks "If you could add one thing to the standard library, what would it be?"

**Erik St. Martin:** I don't know whether I would add anything. I think I would remove stuff.

**Carlisia Thompson:** Mm-hm... \[laughs\]

**Brian Ketelsen:** Same. My answer would be a delete button.

**Carlisia Thompson:** That question is coming up though...

**Erik St. Martin:** Yeah... Okay, so Cory asks "What is the hardest thing you've ever had to write in Go?" That is a good question, the hardest thing I ever had to write...

**Brian Ketelsen:** For me, I don't even remember the project, but it was really extensive reflection. It was a whole lot of reflection, and it had to do with moving a bunch of data around between different structures and different systems over a queue. I just remember piles and piles of reflection, and thinking that this would be so much easier in a language that was less strict about types.

**Erik St. Martin:** I guess for me similar... Probably this was like pre-[gRPC](https://grpc.io/), Brian and I had this grand vision of like a framework for building distributed systems, and I wrote an RPC layer, and I forget what bits I had to implement, but I remember there being a lot of issues with big Indian, little Indian, and then probably the hardest part was all the reflection crap from deserializing those RPC requests.

**Brian Ketelsen:** Long live SkyNet.

**Erik St. Martin:** Steve mentioned SkyDNS and James says "SkyDNS is dead." I mean, not quite yet... It is used inside KubeDNS; they haven't converted KubeDNS to use CoreDNS yet, but it probably will be a thing. How about you, Carlisia? What's the hardest thing you've ever written in Go?

**Carlisia Thompson:** Yeah, I was trying to remember. I don't remember enough to be articulate, but I will say that the hardest aspect of Go for me is concurrency... So I never have to read code that has concurrency; it's just because I don't do it all the time. People think concurrency is such a great feature of Go, and if you're a good developer you use it all the time, and that's not true. So that's my answer.

**Brian Ketelsen:** That's a good answer. Absolutely don't use concurrency all the time. It's one of those things that you sprinkle on sparingly like salt in a good kitchen.

**Carlisia Thompson:** I definitely don't use it all the time, so when I have to read it, I do have a little bit of trouble, and I have to really pay attention to understand what it is doing. But there are concurrency patterns out there. Actually, Bill Kennedy has a really good [blog](https://www.ardanlabs.com/blog/) post explaining the different types of problems, the different types of use cases and accompanying patterns of concurrency that you can use for each type; it's really good. That's my go-to reference to understand it.

**Brian Ketelsen:** Nice.

**Erik St. Martin:** Okay.

**Brian Ketelsen:** \[00:32:00.15\] Alright, Scott Mansfield asks the next question - "Do you think the [Go 1.0 compatibility promise](https://golang.org/doc/go1compat) has already been broken?" I'll answer, yes. They intentionally broke it, at least once that I can think of, to fix a big error in something or other... That was several releases ago, I just don't remember the bug, but it broke backwards compatibility and they announced it. Oh, monotonic time. Yeah, that's definitely one. But there was another. So at least twice, yes. But I think the spirit of the Go 1.0 compatibility promise they've adhered to religiously, and I approve of that and appreciate it a lot.

**Erik St. Martin:** Yeah, I'd agree. I can't think of some concrete example, but I know there's been one or two instances. But considering the Go 1.0 came out five or six years ago, they've been pretty strict on the compatibility promise, and even the ones that did break - I can't remember any being super severe as far as having to refactor your code.

**Brian Ketelsen:** Alright, Pascal Danerly asks "What keeps you excited about Go?" I think you've gotta keep it fresh, you've gotta go out on date nights, you've gotta bring flowers and surprise people every once in a while. If you don't make that effort, then things get stale after a while. Go is the same way. For me, it's things like GopherJS, Web Assembly... You've gotta kind of branch out a little bit and try some new things.

[Richard Musiol](https://github.com/neelance), the guy who started [GopherJS](https://github.com/gopherjs/gopherjs) is very deeply busy right now working in the [Web Assembly](http://webassembly.org/) branch, and it looks like it's darn close to being ready to go. That really excites me about Go, the idea that we can build insanely fast client-side stuff in Go. I'm all over that. So even though I was a little snarky in the beginning, I did mean the idea of keeping things fresh and interesting just by trying new stuff, learning new things in Go.

**Erik St. Martin:** How about you, Carlisia?

**Carlisia Thompson:** Yeah, that was a great answer, Brian. It's insightful. For me, it's knowing that Go is growing and there are tons of more people joining the community, which means there is more people to relate to, and more people that will understand when we say "Go is awesome!" There is more people out there now saying, "Yes, it is!" \[laughs\] It really excites me to see that more people are adopting Go, and that is true.

**Erik St. Martin:** Yeah, watching the number of conferences pop up, and just the number of people who are coming on to go year after year is just insane. Five years ago me knew that Go was really awesome and that it would be a thing. I don't think five years ago me thought that it would be this big this quick.

**Carlisia Thompson:** Yeah.

**Erik St. Martin:** So I think it's exciting to keep watching it grow. Then similar to Brian's point too, I love seeing all the things that are happening on the fringe of what the past of couple of years we've been using Go for. From microservices and CLI tools... There's no surprise when somebody's like "Oh, I wrote that in Go", but I get really excited when I see stuff like the Web Assembly stuff, or people messing with embedded systems with Go, or GoCD, doing computer vision stuff with Go... Even though that's still cGO, but watching people write Nintendo emulators and all that stuff - I geek out on seeing people do interesting things with Go that is kind of outside the norm.

**Brian Ketelsen:** Yeah, and I learn a lot from that, too. I agree. Alright, this is a troll question, but we're gonna answer it anyway. "Do any of you know how [Russ Cox's mystic quest to understand generics](https://research.swtch.com/go2017) is going?"

**Carlisia Thompson:** \[00:36:10.22\] \[laughs\] Let me just say, I love the way this question was asked. I appreciate the nuance, it was great. Good job doing that!

**Brian Ketelsen:** And I think the answer to that is no.

**Carlisia Thompson:** No idea. \[laughs\]

**Brian Ketelsen:** Nobody knows.

**Erik St. Martin:** Yeah, I mean, all I can remember basically was that we've moved from the -- was it 2014 maybe, where it was like "Go doesn't need generics", to "Generics could/should be a thing", but they want to come up with concrete use cases to make sure that they solve those properly and don't introduce any more complexity into the language they need to. But outside of that - and I could be remembering incorrectly, too... That's all I remember.

**Brian Ketelsen:** Yes, when we last left our hero, he was standing in front of a scroll, reading it diligently, trying to understand what his future quest would be. \[laughter\] Alright, next question... Marco - I don't even know how to say your last name, I apologize. I don't know what the c with the accent over it does. "As far as I know, you're working on organizing GopherCon events. As somebody who would love to become a speaker one day, do you have some recommendations on where to get started and how? Any tips or tricks for newbies? I'm mostly interested in Go events." Yes, we just hit this a moment ago - go to your local meetups, talk in front of 10 or 15 or 30 people and get help from the local meetup organizers in preparing your talks, and it will definitely help you to prepare for a bigger venue.

**Erik St. Martin:** Also tweet about the fact that you're working on content. There's a lot of people in the Go community who are willing to review slides or talk proposals and things of that nature, and help you mold them. The other thing I would say is pick a topic you're really excited about, versus kind of just picking something you think people might be interested in hearing. It will be easier for you, especially getting started, because that excitement and passion will come out.

**Brian Ketelsen:** Yes, and the 1400th time you rehearse the talk, you can still be excited about it.

**Carlisia Thompson:** Yeah, absolutely. I second everything that was said, and also - don't we have a speaker channel on Gopher Slack? I'm not finding it...

**Brian Ketelsen:** I think we do.

**Carlisia Thompson:** Oh, yes. It's called [Speaking](https://gophers.slack.com/messages/Speaking).

**Brian Ketelsen:** Speaking, good. And I do know on Twitter not too long ago there was a thread of people who were offering mentorship for people who wanted to prepare CFP responses.

**Carlisia Thompson:** Oh, yes, there was a workshop in various cities. That is a good resource to keep track of. It was [Russ](https://twitter.com/_rsc) who tweeted that, wasn't it Russ?

**Brian Ketelsen:** That's right. You're absolutely right, it was Russ. It was the -- I don't remember the name of it, but yes, you're right, it was Russ.

**Carlisia Thompson:** I'll get a link and put it in the show notes.

**Brian Ketelsen:** Cool.

**Carlisia Thompson:** So this is apparently an organization that offers workshops to teach people how to become speakers. It's recurring, they'll put out dates and you just have to keep track and find out if there's anything going on near you.

**Erik St. Martin:** Yeah, and then if you want just the generic public speaking advice, everybody's more nervous than you think they are, so being nervous is normal. If you really want practice, you can always do local [Toastmasters](https://www.toastmasters.org/). I have not done this yet, but I've heard people say that improv classes are a lot of fun and get you kind of used to being up in front of people and kind of improv-ing on the spot and not getting nervous about it.

**Carlisia Thompson:** Yes.

**Brian Ketelsen:** That sounds like a good idea.

**Erik St. Martin:** \[00:40:08.21\] I wanna do it just for fun, because improv sounds like fun.

**Brian Ketelsen:** Alright, this next question - it was also a joke, but it came with the Kindergarten Cop picture; if you remember the movie Kindergarten Cop, it was Penelope Ann Miller and Arnold Schwarzenegger. He's a cop who goes undercover as a kindergarten teacher. He's trying to discover who the bad guy is, and he's teaching in front of the kindergarteners and he says "Alright, now we're gonna play a game called 'Who is your daddy and what does he do?" And it was a cute scene in the movie, so I will start. My daddy is Robert, and he owned and ran restaurants for most of my youth, and then moved out of restaurants and into accounting. Now he is retired and lives just a few miles down the road, and brings his hairy dog down the street to my house frequently, so I have to vacuum a lot... Which is a good thing; that sounded very complaining, but it's not.

**Carlisia Thompson:** My dad did a bunch of odd jobs; the job that he had the longest that I can remember was as a bus driver, doing interstates travel. But his dream was to be a fisherman. He used to go and hunt and bring all sorts of weird animals to the house, and just... Not make us eat, but make it available for us to eat, so I've eaten some pretty strange things.

**Brian Ketelsen:** Nice. That's kind of cool.

**Erik St. Martin:** Okay, so mine is, I guess you could say semi-retired now. He mostly does odd things to make a living now, but growing up he was a DJ, which is part of the reason I am not freaked out by having a microphone in front of my face. Or I could be potentially more freaked out. And also why I have a love for all kinds of music, and I'm very good at being the person where you're like "That one song by those two people that had these three words - who is that?" and I can tell you the name of the artist...

**Brian Ketelsen:** Milli Vanilli.

**Carlisia Thompson:** \[laughs\] My dad is also retired now. And I always forget, we owned -- this is back in Brazil, because that's where I grew up. He owned a bar/restaurant/ice cream parlor for years, so that was pretty fun too, for me. \[laughs\]

**Brian Ketelsen:** My dad had an ice cream parlor too called Happy Joe's. It was an ice cream parlor and pizza. And they had the first video games. We had PacMan before anybody else, and he had the key to the thing, so I played a lot of PacMan. Those were good times.

**Carlisia Thompson:** Oh, you know what I played a lot? My dad had a fussball table at this bar that we had, and I used to play all the time; that's why when I go to GopherCon, you find me by the fussball table because I don't go to a lot of places that have fussball tables, so when we have that party at the punchbowl, I'm like "Yeah, bring it! I'm gonna kick your butt." \[laughs\]

**Brian Ketelsen:** Oh, yeah...

**Carlisia Thompson:** And last year there was this woman, and I didn't connect with her unfortunately. She was kicking everybody's butt. I was impressed. Nobody would win against her. It was pretty cool. Not a chance.

**Brian Ketelsen:** \[00:44:04.29\] Nobody had a chance.

**Erik St. Martin:** Okay, next question is Matt Ryer asks "If you could remove one thing form the Go language, what would it be and why?"

**Carlisia Thompson:** Oh, yeah... \[laughs\]

**Brian Ketelsen:** I got this...

**Erik St. Martin:** Yeah, there's probably some stuff I feel could be removed out of the standard library, because it begs the argument "Is it part of the language and should adhere to the compatibility guarantees?" We could improve on some of them by being able to break that compatibility guarantee. But as far as like language itself, I'd say New. I feel like there's enough ways of declaring variables and just taking the address of it that we just don't need it.

**Brian Ketelsen:** Yeah. We don't need Make and New. I would agree with that. Although the thing that I would say now would be the GOPATH. When the idea of the GOPATH first came out, I kind of scratched my head quizzically, and then I went all in, 100%; everything was in my GOPATH. And it wasn't for many years until the GOPATH bit me a couple times, and now I'm kind of anti GOPATH.

**Carlisia Thompson:** I have one, I have on.

**Erik St. Martin:** What's yours?

**Brian Ketelsen:** Go!

**Carlisia Thompson:** No, not Go. Okay, you guys didn't get that. Okay, it is naked returns.

**Brian Ketelsen:** Oh, very good.

**Carlisia Thompson:** We don't need that.

**Erik St. Martin:** Yeah, I mean, I could see the convenience in it when they were there, but I don't think anybody's going to miss them.

**Brian Ketelsen:** No.

**Carlisia Thompson:** Nobody even uses it.

**Brian Ketelsen:** No, I think it's almost always an anti-pattern.

**Carlisia Thompson:** Yeah.

**Brian Ketelsen:** One of the few parts of the language where you're almost guaranteed to put yourself at risk of doing something foolish.

**Erik St. Martin:** Matt Ryer also asks "What do gophers eat?" I don't know much about the animal gopher, so I couldn't answer there. I think the best I could do is tell you what I eat.

**Carlisia Thompson:** Gophers eat burritos. \[laughter\]

**Brian Ketelsen:** Yes, gophers eat burritos.

**Carlisia Thompson:** That's it.

**Erik St. Martin:** Yeah.

**Brian Ketelsen:** And barbecue. Gophers love barbecue.

**Carlisia Thompson:** Yeah, definitely barbecue.

**Erik St. Martin:** I concur. Alright, next - this sounds more like a statement than a question, but Nick Jackson...

**Carlisia Thompson:** Sorry, Erik... Actually, I don't know if you -- not everybody knows, I'm sure... There is a Twitter handle called [golangpher](https://twitter.com/golangpher), and it's the best Twitter account ever if you are a gopher. So we need to find out who's behind it. It's anonymous, we don't know. Matt Ryer put this question out there on Twitter, and this gopher tweeted that gophers eat bugs for breakfast, and they also eat lots of goroots. \[laughter\] I love the goroots answer. That was clever.

**Brian Ketelsen:** Yeah, lots of good Go puns in the @golangpher Twitter account. Some of them are a real stretch, but some of them are pretty good.

**Carlisia Thompson:** Okay.

**Erik St. Martin:** Okay, so Nick Jackson asks - or says, rather - "Did you know that Go in Farsi means poo?" I did not, and I also find it ironic that question came in right after the "What do gophers eat?" \[laughter\]

**Brian Ketelsen:** Yes, strange.

**Carlisia Thompson:** I did not know that either.

**Brian Ketelsen:** So no, I didn't know that. Thank you, Nick. Now we do.

**Erik St. Martin:** Now everybody does.

**Brian Ketelsen:** \[00:47:51.03\] \[laughs\] Alright, next question. Omar Cowadja... Sorry, Omar... "How do you handle dependencies in Go? [Dep](https://github.com/golang/dep) is pretty popular, but I've seen projects place other packages inside the vendor folder for 100% reproducible builds. I would like to hear some of your insights on the best practices in that area."

**Carlisia Thompson:** But that's what Dep does, doesn't it?

**Brian Ketelsen:** Can we pun that one and just not answer it? \[laughs\]

**Carlisia Thompson:** But this question is - I'm not sure... So just to clarify - when you use Dep, Dep puts everything under the vendor directory, or is this optional?

**Erik St. Martin:** I think what Omar might be alluding to - and I've seen this, too - is where people will git-submodule all their dependencies in a vendor subdirectory where they've manually kind of set that.

**Brian Ketelsen:** Or whether they actually strip the Git stuff out and just check-in vendor. I saw one this week that did that.

**Carlisia Thompson:** Yeah, wow... Good luck with that; I don't know...

**Erik St. Martin:** I guess over the past couple of years I've changed which dependency management tool I've used, sometimes because it was the choice of the company I worked for; sometimes it was I was ready for a new thing... I feel like each of them kind of has things I love about them and things I hate about them. More recently it's Dep for everything that I do.

**Carlisia Thompson:** Yeah.

**Erik St. Martin:** But I think as a community everybody's still trying to get consensus. I think [Glide](https://github.com/Masterminds/glide) is still a really popular choice as well.

**Brian Ketelsen:** And a good solution, too... In terms of how to handle dependencies, I only vendor dependencies in commands, in executables, and never in packages. That's one of the things I'm pretty sure it was [Peter Bourgon](https://twitter.com/peterbourgon) that shouted that from the mountaintop and I agree with it whole-heartedly. Packages should never check-in their dependencies; they could declare them, but they should never check them in, because at that point you risk having the "the type is declared in a different package" problem, because the vendor directory becomes part of the GOPATH for that package. And that's just yucky.

**Erik St. Martin:** And recursive dependencies are always a problem too, and I think there needs to be a way for libraries to declare "I need these things" and be looser, probably, in their versioning. 1.1.x, and then the main whatever package main is can declare a specific 1.1.3, or something... But I tend to find that everybody is super strict, and then you end up having -- and this comes from other languages, too; then you end up where one of your imports requires one version of the library, and another one requires a different one, and we're back to dependency hell. I think dependency management has always been kind of a pain in the ass.

**Brian Ketelsen:** Yes.

**Carlisia Thompson:** Yes. \[laughs\] Does anybody know--

**Brian Ketelsen:** Next question! \[laughs\]
**Carlisia Thompson:** No, really, does anybody know if we will ever end up with a central repository, like Ruby has RubyGems? You know what I mean?

**Brian Ketelsen:** You just never know. Somebody would have to build it.

**Erik St. Martin:** It's probably inevitable, but we'll have to see... I mean, I think we're still trying to figure out how the tools should work first, and then move on to that.

**Carlisia Thompson:** True.

**Erik St. Martin:** Okay, so Ashley McNamara asks "What do you still struggle with when writing Go? What still trips you up?"

**Brian Ketelsen:** \[laughs\] She's obviously never watched me live stream anything. Everything trips me up; I never remember--

**Erik St. Martin:** Right, the answer is "Writing Go." \[laughs\]

**Brian Ketelsen:** Yes. The answer is "Programming." I'm not one of those people that can just write code without looking things up and thinking things through. I have to look up the definitions of functions, the parameters their return all of that, all the time... So I struggle with remembering how switch statements are built. Every single time I write a switch statement, I have to look it up. So yeah, all of it.

**Carlisia Thompson:** \[00:52:20.17\] I don't have to look up the arguments and the functions so much because [Visual Studio Code](https://code.visualstudio.com/) is so awesome at doing that for me. If I were to do a switch statement, I would definitely have to look it up, too. One thing that I keep forgetting to do is you know when you check for -- let's say you're checking for an error and that's the only thing that's being returned from the function; it's better, it's more readable if you in-line the whole thing... Do you know what I'm talking about? I don't know how to describe it better.

**Brian Ketelsen:** The error check in-line, with an if?

**Carlisia Thompson:** Yeah, exactly, with the if at the end, on the same line. I always forget to do that. And I don't want to forget, but I forget.

**Brian Ketelsen:** I consciously choose not to do it very often, because I like all of my error handling to look the same, and you can't always do that because sometimes that introduces a scope that you don't wanna introduce.

**Carlisia Thompson:** Yeah, that is a good point. So I'm gonna say that what I do is intentional for that one.

**Brian Ketelsen:** There you go. That's the way I do it on purpose.

**Carlisia Thompson:** Thank you, Brian.

**Brian Ketelsen:** A wizard is never late. A wizard always arrives when he intends to arrive.

**Carlisia Thompson:** You just magically made my code look better.

**Brian Ketelsen:** Thank you. Glad I could help.

**Erik St. Martin:** So for me, I guess I would say testing. Not the basic stuff, but there's still a lot of things where -- especially because in the recent years I've been doing a lot of stuff that interacts with the Kubernetes client libraries and things like that, and it just feels painful to try and write cohesive test suites where I don't actually have to have a Kubernetes cluster for this whatever I'm building to connect to. I know there's some stuff in there to mock out stuff, but it's just -- it feels like more work than it needs to, and then I often end up just being like "I'll test that later", and later never comes.

**Brian Ketelsen:** \[laughs\] Later...

**Erik St. Martin:** Okay, so next question by Michael Panzer; we did not escape the dependency discussion.

**Brian Ketelsen:** Dammit, Michael.

**Erik St. Martin:** "How often has dependency handling got you to spend way too much time when you didn't intend to?" A lot. This happens a lot, especially in the different versions of dependencies needed, or when different nested dependencies use a different dependency manager, or when certain repositories use symlinks to other places within their own \[unintelligible 00:55:02.18\] \[laughter\]

**Brian Ketelsen:** The one that bit me the hardest in the last several months was Uber's [Jaegertracing](https://github.com/jaegertracing/jaeger) library. Oh my god, when they first released it, they had pinned versions to something or other inside their example, their demo apps, and it was almost impossible to get your computer into a state where all of those versions were good... And I ended up creating a virtual machine just to play with Jaeger, because everything was just so crazy, and that was far more work than it should have been. I don't know what state Jaeger is in now, but it definitely soured me on the whole plan.

**Erik St. Martin:** Okay, so we've made it through all of the questions. Go us!
**Brian Ketelsen:** Wow!

**Carlisia Thompson:** We are awesome! \[laughs\]

**Erik St. Martin:** \[00:55:54.18\] Okay, so if we didn't have any more questions from the live listeners, we may have a couple minutes to go through some interesting projects and news.

**Brian Ketelsen:** Alright, I've got one project that's really exciting for me personally, and that's [jsgo](https://github.com/dave/jsgo). It is a hosted GopherJS solution, and it's open source, so you can do your own. But the idea is that you enter -- I think he's hosting it at [jsgo.io](https://compile.jsgo.io/%3Cpath%3E); I'm not sure, you'll have to go to the repo and see. But you enter the package path at the end of the URL and it will automatically serve that up as a GopherJS app. What's particularly cool about it is that -- one of the weaknesses of GopherJS is that it compiles the whole standard library down to JavaScript, and that's a gigantic download everytime you do a page refresh. However, [Dave](https://github.com/dave) figured out some way to do code-splitting on that, so that only the individual packages that are used get served to you and they're cached. So it speeds things up dramatically, and it's just a really fun, interesting project from a learning perspective for me.

**Erik St. Martin:** I think you have the next one, too.

**Brian Ketelsen:** Yeah, but I was gonna skip it, because we just talked about Web Assembly. So [neelance/go](https://github.com/neelance/go) on GitHub is Richard Musiol's fork of the Go language where he's adding Web Assembly support. We already talked about how damn excited I am about that.

**Erik St. Martin:** Yeah, that's gonna be awesome. Okay, so what about Pop?

**Brian Ketelsen:** Mark Bates' [Pop](https://github.com/markbates/pop), the library that Buffalo uses to manage database access added associations support in the last week. I can't remember the name of the person that added the pull request, but holy cow, something that was awesome just became significantly more awesome, and I love Pop a lot. It got a lot better. It's just a great thing. So if you are looking for some way to do database stuff bigger than dbsql, that feels a lot like ActiveRecord in Rails, Pop is the answer to that. GitHub.com/markbates/pop. It's got migrations and all of the good stuff.

**Erik St. Martin:** Nice. So then on the news front - I think it was only a couple days ago or something - 1.9.4 came out for Go, and then I think 1.10 is gonna be released sometime today or within the next couple of days, so definitely by the time you hear this, if you're listening to it recorded, 1.10 should be out. And I'm trying to remember some of the stuff--

**Brian Ketelsen:** Yes, and 1.10 is gonna be awesome.

**Erik St. Martin:** And then the next one you had Terminal UI stuff.

**Brian Ketelsen:** \[00:58:56.01\] Oh, this one's cool. I don't know how I've missed it before. It's not a new project. [tview](https://github.com/rivo/tview). Really cool-looking terminal UI widgets for people who are building terminal applications that want that old BBS/DOS ansi-term kind of feel to it. Really cool-looking stuff. I have to go build something with it, it just looks so cool. It brought me back to the old DOS days, and I was trying to ask Erik - I couldn't remember the name of the UI toolkit that we used way back in the early DOS days that made those ANSI screens. If any of you listeners out there can remember that if you're as old as me...

**Erik St. Martin:** Yeah, I was thinking about that... Was it Turbo Vision?

**Brian Ketelsen:** No.

**Erik St. Martin:** Because Turbo Pascal and the Borland C++ compiler did that. That was like '90s, I wanna say.

**Brian Ketelsen:** Yeah, you're ten years too late.

**Erik St. Martin:** Oh, okay.

**Brian Ketelsen:** We're talking early '80s.

**Erik St. Martin:** So listeners, this is like basically like curses for DOS.

**Brian Ketelsen:** Way back in the day. I just can't remember what it was called. Oh, well.

**Erik St. Martin:** I'm sure we have some people who really know their nostalgia, or used it.

**Brian Ketelsen:** All the people old enough to remember, they're taking a nap right now like I should be...

**Erik St. Martin:** Alright... So did we have anything else we wanna talk about? I think we are just about out of time.

**Brian Ketelsen:** Yeah, we're over, and... We're over.

**Erik St. Martin:** Alright.

**Brian Ketelsen:** We're over!

**Erik St. Martin:** I didn't have anything for \#FreeSoftwareFriday this week; I've been traveling a bunch, so I haven't really used anything to think about anything.

**Carlisia Thompson:** Me neither.

**Erik St. Martin:** Did anybody have--

**Carlisia Thompson:** I mean, I did, but I forgot, so now I can't remember... So I'm gonna say no.

**Brian Ketelsen:** Yeah, the only thing that really made a big impact on my life this week was [Unison](https://www.cis.upenn.edu/~bcpierce/unison/), and I've already mentioned Unison - great way to synchronize folders between computers on a scheduled sort of basis. I've used it several times this week and marveled at how damn fast it is.

**Erik St. Martin:** Okay, so with that, time to wrap up our show. Thanks everybody for listening. Check us out on Twitter @GoTimeFM. As always, hit us up on GitHub.com/GoTimeFM/ping with comments, questions, suggestions for topics of guests. Definitely let us know if you like these AMA's, and we'll try and start doing them more regularly and come up with a way to consistently take questions for future AMA's. With that, goodbye everybody. We'll see you next week!

**Carlisia Thompson:** This was fun!

**Brian Ketelsen:** Bye, thanks for listening!

**Carlisia Thompson:** Bye!
