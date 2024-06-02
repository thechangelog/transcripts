**Natalie Pistunovich:** My name is Natalie Pistunovich, and today's episode is the first of several on the topic of migrating to Go. And we started with migrating from PHP, and our guests for today are Matt Boyle and Chris Shepherd. Hi, guys. How are you doing?

**Matthew Boyle:** Good. Thank you. Great to be here.

**Chris Shepherd:** Yeah, good. Thanks.

**Natalie Pistunovich:** It's really great that we get to record in the middle of the day in Europe time. Usually, we do the recording in the evening, and that's a new for me, so I'm really enjoying it. I hope it works nicely with your day. Are you more of morning, or afternoon or evening people?

**Chris Shepherd:** I don't know about Matt, but I'm definitely more of an evening person myself... But it's nice to be doing this in the daytime.

**Matthew Boyle:** Yeah, I'm the complete opposite. I get up really early, I typically get up by six, and then I'm usually in bed by like 9pm. And then usually, I wake up to a flurry of messages from Chris, who's been doing stuff till like 1 or 2 AM. I used to be that person, but I'm really not anymore.

**Natalie Pistunovich:** Same here. Very much of a morning person. Cool. So Chris sending you messages; you both are colleagues. And you were work colleagues in your previous job. What do you guys do and where? And what did you do before that?

**Chris Shepherd:** Yeah, so I think we've worked together now for roughly six years, maybe... We're both currently working at Cloudflare, and then before that we worked for a fintech company startup in London called Curve. I've been at Cloudflare myself for about three years. I think Matt's been there slightly longer than I have.

**Matthew Boyle:** Yeah, I've been there four years now, I think... But Chris and I, we worked at Curve on the same team, and then we weren't in the same team, and then we were in the same team... And then at CloudFlare we were in the same team, then we weren't again, then we were again for a bit, and now we've just parted ways for another time... So I'm the engineering manager for a team called Developer Tools; we build internal tooling. And Chris has just moved over into like our data organization, which is pretty cool. They're the ones who kind of deal with the large volume of requests that make their way from Cloudflare's edge to the core, and do a bunch of processing and clever things with it... So a very cool team to be a part of, I think.

**Natalie Pistunovich:** And you are mostly using Go, but you used to use PHP. Silence, maybe... Okay. \[laughs\]

**Matthew Boyle:** Sorry, I was just trying to figure out so we didn't speak over each other. But yeah, so Chris and I worked together at Curve, as we said. When we joined, Curve was predominantly PHP. The first version of Curve was being built in PHP. And actually, before that I'd worked in PHP at another company, too. And when we joined, one of the reasons that Curve was kind of increasing its size and developing its engineering teams was obviously to go to market faster... But some of the things that we were trying to do - I don't want to say we were hitting limitations of PHP, because I think it's been proven by multiple people that you can take PHP surprisingly far... But the way I think about it more, I guess, is that we'd identified a need to start maybe splitting out the competencies of the monolith, so that we could move faster in different directions... And we were no longer going to invest in PHP. We were going to kind of strangle out and we were going to build around it in Go, which was a choice that was made at the time...

And Cloudflare actually did something very similar. Cloudflare was also -- people who might not believe this, but Cloudflare started life as a PHP monolith, too. And similar sort of approach. There's still PHP in Cloudflare's stack, a very small amount, but we've basically -- we don't really develop or invest in it beyond what we have to anymore, and we build most of our newer systems and competencies, we build them in Go. And at Cloudflare more and more we're seeing use of Rust as well, which is interesting. I haven't written any Rust yet, I don't know if you have, Chris... But it's becoming more and more popular, I see.

**Chris Shepherd:** No, neither have I. I've not really used much Rust, to be honest. I think one thing that's common between both Cloudflare and Curve is our intention was never to completely rebuild everything in Go; it was more new things will be built in Go, and we'll leave PHP as it is. But I think over time our mindset shifted a little bit, and I think many, many more things got migrated to Go as we were working on it.

**Natalie Pistunovich:** And do you know what brought this decision, or what introduced Go generally to the team?

**Matthew Boyle:** \[05:57\] Yeah, I think there was a -- in London especially, and I'm sure you've seen this, Natalie, in Europe, generally... But quite a lot of the fintechs seem to have picked Go. So I think there was definitely a strategic hiring element to it. I think this all started with Monzo. That's my reading of the situation. But Monzo did a great job --

**Natalie Pistunovich:** Monzo is the large, UK-based digital bank.

**Matthew Boyle:** Yes, sorry. I just assume everyone knows what it is, because it's so popular here... But maybe not in Europe. But yeah, Monzo is a huge, digital-first bank. It was probably one of the -- I don't wanna say the first, but it was certainly one of the first modern challenger banks. But one thing they did exceptionally well was they were incredibly transparent about how they were building, and the challenges they faced. And they started life with Go microservices, because a lot of the team had come from another company previously, where they'd basically learned a bunch of lessons that they felt they could hit the ground running at Monzo, and it would help them as they scale things out... And one of my favorite Go conference speakers, or just conference speakers in general, is Suhail Patel, who's still at Monzo. He's a staff engineer there. He still talks about this to this day, and I think it's been a really good decision for them. But one advantage for companies on the periphery, I guess, is - you know, there was a whole bunch of people who really were excited about joining Monzo, and wanted to do what they were doing... And there was people looking to leave, maybe looking for different opportunities, and if there was other fintechs in the same space who were going to be using a similar tech stack, and then we could be moving faster, we could leverage their expertise... So that's one of the reasons I think perhaps we looked at it. But there's also some more like technical reasons.

We were certainly seeing performance issues with PHP. It was pretty challenging to -- I think it is possible to get more performance out of it, but it's a hell of a lot easier in Go. Even bad Go is incredibly performant... And then I guess another thing that I've seen in more recent years as well, especially more at CloudFlare, is we've been really successful hiring people who don't know Go, and getting them productive in literally like a week or two. We have people putting things in production in a week or two, which I've never really seen for any other language.

**Natalie Pistunovich:** That's very fast.

**Matthew Boyle:** Yeah. I've seen this before maybe the Node ecosystem, but I've never really seen it in any other ecosystems. PHP was quite hard -- our PHP curve especially was quite hard to get on boarded to. And I've worked in places before who used Java, and getting people used to abstract \[unintelligible 00:08:09.11\] entity factories was always challenging, too.

**Natalie Pistunovich:** So question to you two both - when you started using Go, how long did it take you? Did you learn that -- you did not learn that as a first language, so you came with a background from some other language... When you started working in Go, how much experience did you have from private projects? Did you learn on the Go? How fast did you start deploying to production?

**Chris Shepherd:** Yeah, so it's actually funny that Matt mentioned Monzo before, because I think that's how I got into Go, to be honest. I wanted to work in fintech originally, and I think I was reading the Monzo blogs, and I heard about Go through that... So I started playing around with it in my spare time, just building things like nothing large, just like very small applications... And then I was looking for jobs in fintech and Go at the same time, and that's how I came across Curve. So when I joined Curve, I had very minimal experience. I had built a few things maybe for a couple of months I'd been using Go... But when I got to Curve, like Matt said, I think within the first week or two I was pushing things to production. So it does show how easy it is to get started on Go, and how quickly you can get on boarded like that.

**Matthew Boyle:** A similar answer for me, I think. I think I started out as a hobbyist. I don't think I particularly found it because of Monzo, but the place I was working at the time had a Go affectionado who was writing small pieces for production there, and I was just asking him questions and learning a little bit more about it... And I kind of just really liked how simple it was to get going.

It was the first language where I watched a couple of tutorials and I could build something useful... And I'd never really experienced that before, because previous to that I'd tried to learn Laravel, the PHP framework, and it was very easy to be productive in, but when things went wrong, I didn't understand why they went wrong. The error messages didn't make sense to me. Me and Chris have joked about it before... If you've used Java Spring Boot, it's great while it works, but as soon as it starts throwing errors at you, and you just copy and paste them into -- we're probably showing our age at this point, but like putting them in Stack Overflow... \[laughter\] And figuring out what they mean. It was basically the only way to proceed. I'm sure ChatGPT can do a much better job these days of helping you figure those out. Whereas I found Go quite intuitive.

\[10:17\] So - similar thing, I actually was actively looking for a job where I could use Go at work, rather than it being at home. So I like to think I joined Curve and was relatively productive relatively quickly... But in my experience since then, we've hired tons of people at Cloudflare and at Curve who were predominantly from Object Oriented backgrounds like Java and PHP, the popular ones... And we've found people from those backgrounds especially really can be productive in the one to two weeks that Chris said there.

**Natalie Pistunovich:** Curve of productivity I guess made that an easy sell to whoever made the decision to move from PHP to Go.

**Matthew Boyle:** Yeah. And I think the really nice thing about -- there's lots of criticisms of microservices, and there's definitely an argument that more \[unintelligible 00:10:56.19\] as a monolithic application in a single language, and you break chunks out. In this situation, I think, being able to write small chunks of code in a microservice in Go in this instance is kind of nice, because it meant that we could kind of safely try it and see if it works, and see if it has the profile and the performance index that we were looking for before kind of going all in on it. And if it's not the perfect decision, you can then start to look at other options. And also, you can use different options for different languages. This is kind of where Cloudflare is at now.

So I would say -- I don't think this is kind of official, but Go is our sensible default. If you are looking to build something at Cloudflare in the core, which is Kubernetes, Go is probably where you should start. We've got a bunch of libraries and a good ecosystem around it.

But that's not to say that if you've got a specific task where it makes sense to look at Rust, or to look at some of the other languages out there... For example -- the really obvious example is if you're doing something in the machine learning ecosystem, Python is probably the way to go. Go just does not have that support yet for AI. I hope it comes, but it's certainly not there today. So trying to square peg a round hole is not the right thing to do, and you may as well leverage the great Python ecosystem that's out there.

But once we started to write Go, and to this day I continue to see this, it's really hard to come up with reasons not to, especially for typical HTTP servers, gRPC servers, database interaction CLIs - those sort of simple use cases, typical use cases... Because the performance is just phenomenal, for very little effort. You don't need to be an expert to get exceptional performance out of it. So it's certainly become my sensible default throughout my career as well.

**Natalie Pistunovich:** So can you share some of the challenges that you had in migrating, or like some stories, or generally talk about the migration process? How did you start, how -- not about building the new things, but actually the carrying out from PHP to Go? For those who want to do that, or for those who consider doing that, any learnings that are interesting?

**Chris Shepherd:** Yeah, I think the biggest challenge I saw, at least when we were moving from PHP to Go, was probably the expectation that we were going to move everything. Originally, we didn't have that kind of opinion, but over time we kind of thought that there would be a world where we probably wouldn't have the PHP anymore, and we were kind of planning for that eventuality... But in my experience, these things -- we'll never fully get rid of the PHP. And we shouldn't -- I mean, I don't think it makes sense to migrate everything, to be honest, in most cases. But we're in this situation where we're kind of building things for life after PHP \[unintelligible 00:13:32.25\] but we're probably never gonna get to that point... So it brings challenges, because we could potentially have inconsistencies between the data that we have in two places, and ultimately, we have to build around having these two different systems that have similar purposes, but are completely separate.

So yeah, I think for me just being pragmatic about what's definitely going to be around forever, and what's not going to be around, I think, is the biggest learning I took from it.

**Matthew Boyle:** \[14:05\] Yeah, I think that's a really good call-out. And I think the only thing I would build on top of that with is any challenges you're facing with your monolithic application, you're going to experience ten times more with a distributed system. So you need to go into that eyes open, and be aware that especially as you go through this journey of starting to move -- if you are going to run this... There's two ways to do this migration. You can down tools and literally rewrite your whole application in Go, and ship that. And maybe there's a class of company that's small enough where maybe that makes sense. I can't think of any. I think I would get a bit of a red flag if someone told me to do that or asked me to do that... But generally, that is an approach that's valuable.

To Chris's point, I think most people are going to adopt this sort of -- we called it the strangler pattern. You either build new pieces around the edge until the PHP becomes such a small part of your ecosystem that it's either really quick to rewrite, because it's become sort of irrelevant, or it's become such a small part that you just let it continue to do the things that it's been doing well, and you just continue to build your new competencies in other languages. I think that makes a lot more sense as an approach.

The huge downside is now you've got all these systems, or at least two systems - your Go system and your PHP system - talking to each other. And the network is going to fail; it definitely will. You might not think it will, but it will. So you've got to make sure you've got things in place for this. So just getting into the habit of having retries built into your application, or deploying it in some way that you've got like a service mesh that does some nice retries for you.

Chris touched on sort of like data synchronization issues. That can be a problem if you are trying to have two different views of a -- let's imagine you have a customer and you have multiple different systems that have like a view of a customer... One of them is a source of record, the others are going to have to be somewhat out of sync. So you've got to kind of think about this ahead of time, and think about what does it mean to have consistent data. If you've been building a monolith before, all of this is probably new challenges to you, and you've got to be ready for them, because they're really, really hard. And so making sure you invest in your infrastructure, your infrastructure team... Observability becomes really important...

So these moves do tend to be pretty expensive, and so you've got to make sure it makes sense for your business; that you're going to get what you want out of this migration, this refactor, this rewrite, this commitment to new tech stack before you kind of go on this journey... Because it sounds really fun, and it is really fun, but when it goes wrong, it can be incredibly painful.

**Natalie Pistunovich:** Can you share some of the going wrong stories from either of the migrations you had?

**Matthew Boyle:** I think you shared one at your GopherCon talk recently, Chris, right? Do you want to share that one?

**Chris Shepherd:** Yeah. Actually, I do have a good story I can tell. So I was actually a few weeks into my time at Curve. I had not been there very long, and it was my first time even with any experience on microservices; I only worked kind of on monolithic applications before that, so... To what Matt said, there is definitely a learning curve, and it's definitely a lot of challenges that you don't typically face with monoliths.

I actually had a very simple ticket to migrate a data type that we were -- to change the data type from a string to a timestamp. It was one of the fields on the \[unintelligible 00:17:10.09\] basically, for cards in the app... And I didn't really think about -- I didn't have a lot of experience at the time, so I didn't really think about breaking changes, and things like that... So I made this change, it passed our test automation framework, it passed all the tests, it got approved, everyone was happy with it... I deployed it, and didn't realize that we had another service basically sat between this and the app... And that service, because of the way it handled the new \[unintelligible 00:17:41.05\] because of the breaking change and the way it handled the new data type, it started marking everyone's card as deleted.

So I think we had about a 20-minute period where every single user in the app looked at how their account had been wiped... So it wasn't probably my best moment to be honest. Luckily, we did fix it, and it did have a bunch of other issues... But yeah, I learned a very valuable lesson from that.

**Natalie Pistunovich:** \[18:05\] Matthew, you have a story to share.

**Matthew Boyle:** Yeah, I was just thinking... So Chris's example is a really good one, of a very clear issue. I think we saw very quickly that we'd broken the app, and we got lots of complaints, and we could see ourselves... But I think maybe a more subtle one ,that's more interesting to share just from a different angle, is the data consistency issues is a really interesting one.

So I'm trying to think of a specific example where we've seen it... But obviously, if you're using something like Postgres, and you're replicating the data, and there's -- we call it replication lag, where it's taking a long time to replicate, maybe it's taking three minutes, four minutes, eight minutes, and you're using that database -- that secondary database is the source for all your reads in your application, and you're sort of eight minutes behind, 10 minutes behind, 15 minutes behind where you need to be there... I can't actually think top of mind of a really concrete example where it's been an issue. And one of the reasons for that is it's actually really hard to figure out that that's an issue. It doesn't show up on any of your dashboards as customers are having errors or seeing issues. The only sort of symptom of it is that replication lag. And so just having that experience and the observability up front is really important. So that's actually a metric we track really closely at Cloudflare... But until I joined CloudFlare, I hadn't really ever thought about tracking it as a metric.

**Natalie Pistunovich:** How do you call that metric?

**Matthew Boyle:** It's called replication lag. Yeah.

**Natalie Pistunovich:** And it's measured in minutes.

**Matthew Boyle:** Ideally, it's in seconds... But it has definitely shown up for us in minutes before. It's basically the difference between -- if you have a primary database, like a primary Postgres database... Let's say it's running in one AWS in London, and you have a secondary in Ireland. Like, what's the difference between your writing to the Postgres database in London and it showing up in the Ireland database? And that's the one you're actually using for your reads. That's what we're measuring. And it's a really common pattern that I'm sure we've all used, where we write to the primary and we read from the secondaries to remove some load from the primary, the writer. And if you're not measuring that, then chances are you are seeing -- you could potentially be seeing this replication issue where your customers are being served potentially stale data... And depending on your use case, your business case, that could be a big problem. But it's going to be really, really hard for you to debug, and it's going to be really, really hard for you -- it's not gonna show up on any of your error dashboards or anything like that, unless you're tracking that specific metric.

And I think the more you dig into distributed systems, depending on what your stack looks like, you'll find a bunch of different metrics and things like that that are like "Oh, that looks weird. Maybe we should be tracking that one." It was having customer impact, but we didn't necessarily know it was.

So these aren't Go-specific issues. Whatever migration you go from, and when we start to move into a more distributed world, you're going to start to see some of these things. And these are super-interesting problems, I love them, but they are much harder than dealing with a monolithic application with a single Postgres instance. That's the ultimate place to be as a small team, in my opinion.

**Chris Shepherd:** Yeah. And I think the one worrying thing about that kind of issue as well is if we're not tracking it, then we are relying on the customer to raise it, like when they see that error. And it's a safe bet that if one customer has seen it and raised it, you've got many, many other customers who've seen it and just not raised it. So yeah, it's a challenging one, and it's definitely something to bear in mind... Because customers 99% of time are probably not going to raise it, unless it's someone who really cares about the product.

**Natalie Pistunovich:** Yeah, interesting learning, the replication lag. That's a good recommendation related to migrations. Were there any interesting behaviors you noticed when you migrated some codebase from PHP to Go? Maybe you had to change the way that it's written to do it more the Go way, and then it somehow affected the behavior? Or any interesting things you've stumbled upon?

**Matthew Boyle:** \[21:50\] There's a few things I would call out that come to mind immediately... So the first one is - I think I mentioned it briefly at the start, but the performance profile of Go was noticeable immediately. We had systems that were sort of struggling along at sort of 10 requests per second, that were using a bunch of CPU and memory... And then all of a sudden, they could do thousands of requests per second, and they were using barely any CPU or memory. And we didn't do anything clever, we just wrote in Go what we were about to write in PHP. That was really eye-opening to me. That was on the first things I remember sort of being really shocked about.

The second was maybe slightly niche, and not for everybody, but containerization of a Go app versus a PHP app. Like, you literally need a PhD to containerize a PHP app... \[unintelligible 00:22:37.07\] It was really complicated to figure out. At least the way we were doing it, it was really, really challenging. And I think \[unintelligible 00:22:45.16\] our PHP container images were a couple of gig... And then we moved to this distroless Go, and they were like 13 megabytes. It was astoundingly different. And if you're running these workloads somewhere where you pay for nodes, or space, or whatever, that can be really significant... To be able to have such a small profile was amazing.

And then the third thing that really jumped out to me was like developer experience. So PHP has this debugging path called Xdebug. I truthfully, never got it set up. I could never figure it out. You had to kind of do some clever stuff to get it working, and I could never get it working. I've tried a few times at various points in my career... Like, with Go, it really was a case of like set a breakpoint, hit debug, and it worked. Recompiling the application was super-quick.

So coming from like Java and PHP to Go, the developer experience was like a huge one for me. And even silly things like running a unit test, and then running it in a couple of seconds, versus having to wait multiple minutes, in some cases, in some of these older stacks. It was a really nice and very welcomed change.

**Natalie Pistunovich:** Until the replication lag was over.

**Matthew Boyle:** Yeah, exactly.

**Chris Shepherd:** Yeah, I think just to piggyback on kind of both of the points that Matt made... For me, when moving to Go, it was just shocking how quickly you could deploy and run an application. Coming from a Java background where it takes seconds and seconds for an application to actually start up, in Go they start in milliseconds. And I think just because it's designed for distributed systems, it makes it so easy to build these small applications and run them, in Kubernetes or in Docker \[unintelligible 00:24:19.00\]

And on the other point about productivity, it's the same with that - the tooling around Go is just so great. It's so easy to go and run tests. You can just go and go test on any project, and for the most part, it will just run the tests. Whereas honestly, trying to do that in Java - it's pretty challenging to do it with a single command, without having additional libraries and things like that. So yeah I agree to both of Matt's points - the developer experience is excellent as well.

**Matthew Boyle:** To throw some balances in this conversation... I know it's a Go podcast, but there were some things I remember at the time specifically that really sucked about Go as well. So at the time it was \[unintelligible 00:24:52.21\] modules that we were doing with this, and I don't know if you remember the gopath, Natalie, where you have to put stuff in specific places or it just didn't work... Like, figuring that out was really hard. And I remember I was wasting a bunch of time trying to help people figure out gopath and getting everything working, and just thinking that way... That was really, really challenging. So that was one thing that I remember; it was kind of \[unintelligible 00:25:13.14\] dependency management ecosystem was very mature, it worked, and Go's at this time was not. It was pretty poor, and Go modules really saved our bacon on that one. I was very glad when -- I know a lot of people have got criticism with Go modules, but considering where we came from, it was substantially better.

And then the other one I guess I would call out - it's probably less true today, but at the time there was so much documentation and learning resources and stuff for PHP, and there wasn't very much for Go at all. So there would be things you try and look up, and there wasn't really a good solution for it. Or you'd be looking for libraries, and they didn't really exist, or they'd be very immature. So you had to be willing to kind of get stuck in and either make open source contributions, or roll your own thing.

**Natalie Pistunovich:** The lack of libraries is a little bit like the Go thing, right? You should use what you have, and don't export libraries for what you don't.

**Chris Shepherd:** \[26:04\] Yeah... And I think that's another learning, isn't it, that you kind of have to pick up as you go with Go... If you go and write JavaScript -- you know, the Leftpad incident is very famous, where everyone was depending on this really small module to do something very minor... And I think that comes with people from a lot of other languages. If you do come from PHP and Java, it's not unusual to pull in dependencies... And you get the -- are they called POM files? I can't remember what the Java things were called. I think they were called POM files. You could get huge ones, and the dependency management thing was quite well managed; there were enterprise solutions for dependency management available to you... Whereas kind of coming around to "Actually I should try and implement this myself in Go, and I should manage and own this myself..." What's the idiom? "A little copying and pasting is better than a little dependency." Coming around to that way of thinking definitely took me some time, and it kind of takes everyone who jumps into the Go ecosystem a tiny bit of time to get to grips with it, I think.

So especially when we were doing this, this was unusual. And also being able to type things into Google and not always finding an answer was unusual too, if you're used to Java, where it was 20 years of experience available on the internet for you.

**Break:** \[27:13\]

**Natalie Pistunovich:** This is something that I recently mentioned in some other podcasts where I was a guest, that this is the Go way of doing things, and then somebody wrote me an email saying "I didn't find any documentation for this. Can you back your claim?" And so I approached the Go team, and Cameron, the lead, actually replied to me... I'm looking for the exact quote. "The Go programming philosophy encourages using trustworthy dependencies", while I said something like "The Go programming philosophy encourages using the standard library as much as possible. And when the standard library is not solving it, I generally prefer writing code over importing third party." So just for the very historic accuracy, in case anybody follows \[unintelligible 00:33:01.09\] it is not written anywhere... But here you have the philosophy. The Go programming philosophy encourages using trustworthy dependencies. But it still somehow feels it's almost like a common knowledge, that you told to import as much as you write. And I'm very curious where did this come from. But it's something that people know.

**Matthew Boyle:** Yeah, I think -- so maybe I can share a link in the show notes, but there's a video of the Go idioms... I'm trying to very quickly follow up when they were first spoken about, but I seem to think Dave Cheney was responsible in some way for these, so I'm gonna say around 2016; they were kind of shared as like "Hey, maybe we should think about things this way." And I do know the Go team have kind of used those and repeated them, too. So I think at least since 2015-2016 they've been kind of widely shared as -- you used a great word, philosophy. That seems like the right way to think about it, doesn't it? It's like, "This is the way to think about writing Go. You don't have to, but this is how we think about it as the people authoring the language."

And it seems strange at first coming from other languages, but the longer you spend -- especially if you work in like big companies and enterprise, the more this makes sense, the more control you have over your own releases, of your own ecosystem, of your own destiny, effectively...

**Natalie Pistunovich:** It's also kind of the content of your code.

**Matthew Boyle:** Yeah. Yeah, exactly. It makes tons of sense.

**Natalie Pistunovich:** A library is code.

**Matthew Boyle:** Yeah.

**Natalie Pistunovich:** Speaking of that, you mentioned that you saw one big difference in the containerization of PHP versus Go, and how the PHP ones were a lot bigger. So can you talk about this a bit more? When you containerize Go apps, I think most people know what's inside, but for those who did not containerize PHP apps, what's there?

**Matthew Boyle:** Do you wanna take a crack at this one, Chris? I know you spent a bunch of time poking around in both Go and PHP containers, so you might be in a better place to answer this than I am.

**Chris Shepherd:** To be honest, I'm not exactly sure what is involved in a PHP container. I mean, I think the difference between the two is that with Go you compile it to a native binary. So you can build the binary as part of your Docker file, and then your Docker image essentially just contains that binary... Whereas with PHP, because it's an interpreted language, you kind of have to copy in an interpreter, you have to copy in all of the code, and run all of that inside the bundle, and all the assets as well... So I think that that's primarily what makes it that much larger than a Go system.

**Matthew Boyle:** You've hit the nail on the head there, because PHP has to have a web server built into it; it has PHP Apache, or FPM I seem to remember it was called. You used to have like a web server, and then usually you have a bunch of like extensions to PHP as well to make it work. Then you need to install Composer, and some other things to be able to -- as you say, it's interpreted, so all these things need to be available to run it... Whereas with Go, it kind of does a build, chucks all that stuff away, and then you just put the binary on the container, which is why it's much smaller.

**Natalie Pistunovich:** \[35:56\] And that wonderful cross-compilation... All the things that make Go a favorite for DevOps people. So if somebody were to migrate from PHP - and I'm asking this as a person based in Berlin, that Berlin needs to be such a huge PHP shop, and more and more places, more and more companies migrated to Go, but there's still a good amount of PHP monolith shops... How would you recommend going about that?

**Matthew Boyle:** I think my first piece of advice is like to figure out why you're doing it, and figure out what success looks like for you. So here's some reasons why I think it's a good idea to think about it. You are running like a more performance-critical system, and you think it'll be easier to kind of get that performance out of a Go application, or potentially another language's application. The ecosystem is better suited for what you're trying to do, and that's not even migrating from PHP to Go, but like if you are really going to double down on AI, maybe doing all your AI stuff in PHP probably doesn't make sense; it probably doesn't make sense to look at Python if you're gonna build your own models.

One thing that should not be underestimated is the ability to hire. Go is certainly a much sexier language than PHP, and you will attract it, in my opinion, better talent, more talented folks who want to learn Go and potentially want to use it in production. And so there's definitely reasons that you could look to the hiring market as a good reason to be able to hire.

I know in Berlin, as you mentioned, there's a really hot startup ecosystem, and I know a bunch of them are using Go, so you get to leverage that ecosystem and those people who've been potentially taught how to write Go in production, and they can come along and help you out.

So I think just figuring out success is my tip number one... Like what do you hope to get out of this, and does it really make sense to move from a monolithic application to a distributed system? If you decide that's yes, my advice would be to do the smallest possible thing you can first. So I would always recommend, instead of having one monolith and then bunch of microservices, maybe consider having two smaller monoliths. You have the PHP one, you keep that around, and then you start to build up a Go monolith if you will, rather than going from a PHP monolith to hundreds of Go microservices... Which is kind of what we did, and it worked out okay for us, but I think we introduced more challenges to ourselves along the way than if we had gone moving to a simpler just one other system, that was Go.

**Natalie Pistunovich:** Because it's all the distributed system considerations you're introducing?

**Matthew Boyle:** Exactly. The simplest way I think about it is every network hop introduced a point of failure. So the fewer network hops you can have, in very simplistic terms, the better it is. There's a lot more to think about than that, I guess... But especially if you're a smaller team, who are just kind of starting out and figuring this out, I think that's a fairly reasonable rule to think about and to follow. So I would do a smaller migration first, and just kind of start building up new things, and then follow that strangler pattern, which is start to write your new stuff in Go where it makes sense, but don't be afraid to hop into the PHP to make small bug fixes and changes, too. Remember ultimately our job is always deliver business value. So if there's a piece of work, a JIRA ticket, or whatever that could be completed in five minutes in PHP, but you could rewrite it in two weeks and put it in Go, do the five-minute fix, and leave the Go stuff for like the bigger features... And you'll have much more sustainable buy-in \[unintelligible 00:39:12.22\] Remember, the whole time you're doing this, you've got to keep the business engaged, that it's the right thing to do and it's a good technical decision. So if they ask for a text change, and you say it's going to take three weeks, because you need to rewrite it from PHP to Go, you're probably going to struggle to keep that buy-in for a long time. Is there anything you'd add to that, Chris?

**Chris Shepherd:** Yeah, I think the other thing is just be prepared that it will be a learning experience... Especially if your company's not writing \[unintelligible 00:39:38.15\] at the moment, and if there's not many people maybe with experience writing Go... I think it's a learning experience, and it's worth taking time just to look at how to write Go and how to structure projects and things like that... Because I know from experience when starting out with Go the quality of our services varied massively compared to the ones we were maybe writing a couple of years into that journey.

\[40:05\] And yeah, I wouldn't recommend writing Go like you were writing PHP, just because they're just totally different languages and different paradigms... But there's definitely a learning experience there, and there definitely is a learning curve... So I think that's the biggest thing, like be prepared that it might take longer than you expect to actually start getting services out at the start.

**Matthew Boyle:** You touched on something really interesting there as well... I think there's this illusion that the PHP is tech debt, and that Go is going to be beautiful, and it's going to be perfect, and tech debt isn't allowed there, it doesn't exist. And I think the reality is your first pass at writing any Go, especially if it's going to be a new service and it's your first time doing it, you've got to accept and expect that there's going to be technical debt there, too. You're not going to figure out exactly how you want to structure things, you're going to run into a few issues with how Go does things a little bit differently to how you're used to...

And so making space for that learning experience that Chris shared is really important, and just having that expectation in your head that "We're going to get a bunch of things wrong as we try and go down this path, and we can't assume that this Go is going to be perfect, because it's not going to be."

**Natalie Pistunovich:** How would AI change all this? The duration of migrations, the number of mistakes, the missed perspectives... Any bets? I know we're not speaking from experience, we have not been migrating things with AI, there's no tools that do this automatically yet... But with whatever experience you do have with writing code with AI, what are your bets?

**Chris Shepherd:** I think it could definitely help. I think it can definitely give advice on how to -- things like structuring your project, and things about writing Go in a more Go-like fashion. I think it can definitely help, but I think there's still something to be said for actually doing it yourself, and getting your hands dirty, and actually learning what looks correct and what works and what doesn't... So I think it could help the progress, but I wouldn't rely on it, let's say.

**Matthew Boyle:** Yeah... So it's a really great question. I actually wonder if in the short term it will make it worse, but in the long term it could be better. So I do use coding assistants, especially at home, all the time. I find them incredibly helpful. But I find them the most helpful when I already know what I'm trying to do. So I'll start a function signature, and I can kind of just tab it to completion, but I already knew what I was trying to achieve, and it's just helping me do it faster. But I've found a few times when I've asked it to write some code to do a specific thing maybe I didn't know too much about, and it's actually not got it quite right, or... This was a couple of GPT versions ago, but it actually gave me an SQL query that wasn't escaped. And so it actually gave me an SQL vulnerability in the response. And thankfully, I knew what that looked like, so I checked it. But if I didn't, I would have just failed. That's how you do SQL queries in Go. Like, "Let's put that in production. That sounds great."

So short-term I think it could be helpful, as long as you take the time to kind of think about why it suggested what it did, and you go and do that. But I worry most people won't. I think that long-term there's a very great use case here for -- you know, for a long time now we've been using tools like SonarQube and things like that, that kind of give you code quality scores and look for basic defects and rules and things like that... You can see AI taking that to the next level and being able to give you a pretty reasonable code review.

If you've got standards, like Go standards at your work, and you've got a certain sort of like good quality code that you really like, and a style that you like, being able to have a like a bot do the first pass of that review and just spot all the really easy, obvious things that your colleague is going to call out straightaway who's got a bit more experience - that can be really powerful. And then it comes down more to the people just to kind of give the opinion of "This doesn't actually quite match the acceptance criteria for this, that, and whatever reason." But purely like code and stylistic and technical issues, you can see AI being able to do probably a better job than humans can at spotting those.

There's a joke that if you give someone a 10,000 line PR, you'll get a thumbs up. "Looks good to me." But if you give them a 10 line PR, you'll get 10 pieces of feedback... Whereas a bot is probably more likely to actually spot all the issues in the 10,000 line PR, because it will take the time to figure them out, whereas humans kind of -- their eyes start to glaze over.

**Natalie Pistunovich:** \[44:07\] It's true, humans do rely more on the test automation at this scale... But for now at least, AI still has context memory issues, so... Different ways of unreliable, but as you say, in the long-term this will be improved and this will be better.

**Matthew Boyle:** I know you spend a lot more time in this space than we do... Have you seen any really interesting sort of use cases or tools where you think it could help you?

**Natalie Pistunovich:** Nothing reliable yet. But the trend is there, the trajectory is there. It's the same challenge that I did not personally witness, but know of, that memory used to be not sufficient, but now we have enough memory... And this is no longer a limitation.

**Matthew Boyle:** Interesting.

**Natalie Pistunovich:** So I think we will be there.

**Matthew Boyle:** What did you think of the GPT 4.0 announcement? Did it impress you?

**Natalie Pistunovich:** The Omni.

**Matthew Boyle:** Yeah.

**Natalie Pistunovich:** Yes, actually we started this podcast where I had to refresh my computer 15 times, because I had to close tools one by one, apps one by one... And I bet the ChatGPT desktop app was one of the ones, but... Yeah, I've been using it nonstop, for screenshots, and so on. I really enjoy that it helps me navigate through code, but also things that are not code, that I have to deal with, like SAP Ariba... \[laughter\] It's a tool large companies like using for processing invoices... And as a technical person, I have no idea what's going on there, and this is really helping me. But I think when you were talking about the replication lag, I immediately thought of the question "If you give it screenshots of like "This is my dashboard, and this is what the app does. What am I missing? Give me some more metrics", and kind of have the visual feedback... So I would be super-curious for something like this. If you do end up trying, please come back and share.

**Matthew Boyle:** Yeah, that's a really interesting use case, actually. We did this thing at CloudFlare where we review all the team's dashboards. So we've started doing it recently where -- like, Chris will show up and say "Hey, here's my dashboard for this service. This is what we're measuring. This is why. This is what you can see. This is why we measure that."

**Natalie Pistunovich:** That's a great practice.

**Matthew Boyle:** It is. And it's useful; you get critique and feedback from other people in the company, like "Well, why aren't you measuring this? Could this signal have been useful in that incident? Would it have helped you spot it faster?", stuff like that. And yeah, what you've just said is really interesting to me... Like, could we take a screenshot of that dashboard and just throw it into an AI tool and see -- if we gave it enough context, would it give good enough feedback? I'm gonna have to try that, and I'll definitely come back to you, because I think that's... Even if it doesn't get everything perfect, if it can give sort of the high level things of "You probably should be measuring these things." I think they'd be helpful to you, and it gives someone a jumping off point to go and explore. That could be powerful.

**Natalie Pistunovich:** If you have some more capacity for this, I even have an improvement idea that will take a little bit longer than like a five-minute conversation... Take some post mortems that you had; things that you did not understand why something went wrong, and you investigated, and you realize two unrelated things, plus the metric, and so on, and kind of give these several summaries that you have, and say "These are kind of solved problems we had. Find more problems..."

**Matthew Boyle:** That's a really cool idea.

**Natalie Pistunovich:** ...with this dashboard.

**Matthew Boyle:** I think one of the challenges that we see, and I think a lot of big companies will see is we want to kind of own this data; we want to keep it internal, some of it. We have public-facing post mortems, but we have some internal things that we don't share externally, too. And so kind of taking this stuff and giving it to an Open AI, or whatever the AI is, is potentially a security risk, and I think we actually have to do this for some of our compliance.

So I think there's one really interesting use case that I'm still looking for. I haven't seen great offerings here yet... It's being able to deploy some of this stuff on prem, right?

**Natalie Pistunovich:** \[47:59\] You can with Azure, and so on. You can have -- even the German health companies, which is like my peak GDPR example, they use their German-based data center instance, and that's meeting all the requirements. Worth looking into.

**Matthew Boyle:** I definitely have to take a look. We run our own cloud, we don't use any of the other cloud providers... So it might just be we haven't yet kind of invested the effort to figure out how to deploy this ourselves... But I'd be super-interested to be able to -- because I know there's tons of great open source models now, so I'd love to go and explore that a little bit further. So thanks for your idea. I'm gonna add it to my to do list right now.

**Natalie Pistunovich:** So we talked about PHP to Go. What are some things you did like about PHP, and maybe you're missing?

**Matthew Boyle:** \[laughs\] I'll have to think \[unintelligible 00:48:41.14\] for you, to be honest...

**Natalie Pistunovich:** Other than the mascot, the really cute elephant.

**Matthew Boyle:** The elephant is cute. I think one thing I -- at the time, again, especially with the ecosystem, every library or use case or question you could have, there was a very clear answer to it. And one thing that -- this isn't something I personally have a strong preference for, but one reason that a lot of people still love PHP, and this actually seems to be growing, is Laravel specifically is like a very opinionated framework about how you should write PHP apps. And if you follow their rules, you will be able to put something in production very, very quickly.

**Natalie Pistunovich:** It's a little bit like describing Go, the opinionated group of doing things.

**Matthew Boyle:** Yeah. But it takes things a lot further. In Laravel you can be like "Generate me a service and a database, and a cache", and it's one command and it'll do it all for you, and it spins you a Redis, and a Postgres, and it gives you an ORM... And you have to write code in a certain way. You can write comments above classes, and it will generate stuff for you and you run it, and stuff like that. It's like a very hyper-opinionated framework for how to build PHP applications, and it's very popular, because it's very productive.

And I think Encore is probably the closest thing in this space, in the Go ecosystem... And I think they're doing a great job. I think Encore is a phenomenal tool, but I think they are having to constantly battle a lot more against "This isn't the Go philosophy. This is isn't the Go way to do things. We like to write things ourselves." Whereas I think in other languages - like, you've got Ruby on Rails, you've got Laravel, Spring Boot - people are a lot more open to this idea. And so I do wonder if we'll ever get there, if we'll ever land there with Go... But for now, it's very much being pushed back against, I feel.

**Natalie Pistunovich:** Chris, is there something you like about PHP -- you liked and miss?

**Chris Shepherd:** Yeah, I think the point I was gonna make was exactly the same one as Matt said. I think with things like Laravel you can basically run a single command, it'll generate a full project that's production ready... And like you said, you can specify "I want this database, I want Redis, I want maybe even Kafka", things like that. You can specify that and it generates all the code for you, and it's ready to go out of the box. All you have to do is implement your business logic.

Yeah, I think there are things like Encore, that give you that in Go, but... Yeah, I think they're much less adopted than they are in PHP, and I think -- yeah, it removes a lot of the learning curve for PHP. You can just write business logic and run it very quickly. Whereas with Go, you do kind of have to learn how to write Go, and how to structure projects, and things like that ahead of time.

**Natalie Pistunovich:** Well, one more unpopular question...

**Jingle:** \[51:17\]

**Natalie Pistunovich:** So what are your unpopular opinions? Who'd like to start?

**Chris Shepherd:** I can go first... I know for my unpopular opinion I know at least one person here will disagree with me straight away... I think that between three and four o'clock is the best time to eat lunch.

**Matthew Boyle:** \[laughs\]

**Natalie Pistunovich:** Wow. Second lunch... \[laughter\]

**Matthew Boyle:** Yeah, I'm eating dinner at that time typically. That's way too late. I'm actually surprised Natalie disagrees with you. I thought 3 or 4pm was like a very European time to be having dinner, or having lunch...

**Natalie Pistunovich:** I can speak for myself that I have multiple meals, and I definitely have my second lunch around three, but I do have my main lunch around 12. So I partially agree, I don't know... I guess in Spain it's more common to eat later.

**Chris Shepherd:** \[52:23\] Yeah, I guess, because \[unintelligible 00:52:21.17\] I don't know what the science is behind it, if there is any science... But I swear when I have lunch later in the day like that, I don't get any kind of dips in the afternoon. So I feel like I'm more productive in the afternoon when I eat lunch later.

**Matthew Boyle:** I don't know, I feel like you have about six cups of coffee a day as well, so I think claiming \[unintelligible 00:52:39.13\] because of late lunches -- there's more to this story.

**Chris Shepherd:** I mean, that probably helps.

**Matthew Boyle:** Yeah. I've always been -- I have a terrible habit where I don't eat breakfast at all, which I think is part of my problem... So I usually just have coffee for breakfast. I just find it hard to eat in the morning.

**Natalie Pistunovich:** Call that intermediate fasting.

**Matthew Boyle:** Yeah, I can call it that, but... I'd like to claim I did it on purpose, but... Yeah, I'm type one diabetic, so I have to be religious and think about when and how I eat. I always find having carbs in the morning for some reason -- there are people, health gurus that claim this is true, but I've certainly seen it in myself, that carbs in the morning seem to make my blood sugar go up way, way higher than they do later in the day... So I've found that sort of fasting in the morning and only having black coffee keeps my blood sugar much flatter. I have way more control when I don't. But that also means that I'm hungry much earlier, so whenever Chris and I are in the office, at like 12 I'm always like "Come on, let's go get lunch. I'm starving", and Chris has barely finished his breakfast at that point.

**Natalie Pistunovich:** Do you have another unpopular opinion other than eating time?

**Matthew Boyle:** So I have one which I am -- actually, I wonder if it's unpopular or not. I think it certainly would have been unpopular at one point, but I'm not sure if it's still the case... But I think smart home stuff is like really stupid. I completely went all-in on the smart home stuff a few years ago. I bought all the bulbs, and I wanted to get the sockets, and blinds that open and close themselves... And I moved house recently, and about three months before we moved I was still pretty insistent this was gonna be the smartest house I ever lived in... And then we had a power cut, and I couldn't open my blinds, and I was like "This is ridiculous." Like, imagine a world where you can't open your blinds because the internet's not working.

And I know there's clever things you can do to avoid that, but it really put me off, and I've gone the complete opposite way now. I've got really dumb stuff in our house now, and I have no intention to really invest in smart things again. I had like five Alexas in our old house, and I don't have one in this house. I could potentially be sold on another AI assistant if it was actually smarter than Alexa was, but I haven't seen anything in that space yet, surprisingly. It feels like a really natural use case for Open AI stuff, so I'm just waiting for them to sell an Alexa style thing and I'll probably get one.

**Natalie Pistunovich:** So to summarize your opinion to one sentence that we can then tweet and have a poll and actually evaluate... "Smart homes should not be a thing", or how would you phrase that?

**Matthew Boyle:** Yeah, I don't think smart homes should be a thing. I think everybody is better off with a dumb house.

**Natalie Pistunovich:** Interesting. I don't have a feeling where will this go, but I'm curious.

**Matthew Boyle:** What do you think, Chris?

**Chris Shepherd:** So funnily enough, I actually have Philips Hue light bulbs, but I think we changed the plug, the light plugs or something a couple years ago and they stopped working, so now I just use the light bulbs as regular light bulbs... So I think I somewhat agree. Like, there's some things are just easier just to have them done, but now I definitely do think there are some advantages to having smart homes.

**Natalie Pistunovich:** \[55:47\] The light bulbs are something I enjoy. It's convenient that when I go into the bathroom there's a sensor and I don't have to, like, with dirty hands touch the light switch. I specifically like that one thing. And if the internet goes out, I can always still click on the button. But that's where it kind of ends for me. It's true, it's frustrating how assistants are useless.

**Matthew Boyle:** Yeah. Also, it just shows where Amazon really fumbled as well . They had such a lead with Alexa. It actually bothers me that they're not the ones presenting all this stuff that Open AI are. And Google, too. It felt like theirs to win. I don't really know how we got here, so massive props to Open AI for being massively behind, at least on paper, having this -- they went up against Google and Amazon and Microsoft, and they're clearly leading the pack when... If I had to bet five years ago who it was gonna be, it would have 100% been Amazon Alexa is gonna be the one to take this.

**Natalie Pistunovich:** My unpopular opinion is around which best strawberry ice cream flavor is the best? And I had a poll, so I can confirm this is unpopular... But I think that definitely the best flavor -- the best thing you can do with strawberry ice cream is make it mint strawberry.

**Matthew Boyle:** Interesting. I don't know if I've ever had --

**Natalie Pistunovich:** Not basil strawberry, not creamy strawberry, and also not sorbet strawberry. Plain. Mint strawberry.

**Matthew Boyle:** I don't know if I've ever had mint strawberry ice cream. I'm gonna have to go and try it. But I will say there's a strawberry ice cream from Häagen-Dazs - I think it's German, so I'm really sorry if I've just butchered the name of it...

**Natalie Pistunovich:** Häagen-Dazs is not German. Americans made up a name that sounds European, but it's not in any European language.

**Matthew Boyle:** So that was even more offensive than saying it wrong, wasn't it? But they do a strawberry cheesecake ice cream, and it's phenomenal. It's probably one of my favorite ice creams. So I will try strawberry mint, but I'm gonna say my default is that strawberry cheesecake is probably one of the best ice creams that has ever been created.

**Chris Shepherd:** And I'm probably going to give an even more unpopular opinion now by saying I'm not actually a massive fan of ice cream, so... Yeah, I've never tried strawberry mint, but yeah, generally I'm not a huge fan of ice cream. I don't really eat it a lot.

**Natalie Pistunovich:** Try to live somewhere where it's sunny. Sorry... \[laughter\]

**Matthew Boyle:** I think we deserved that for me saying Häagen-Dazs was German...

**Natalie Pistunovich:** \[laughs\] We have a few months of pleasant weather here... It just starts now, so I get to celebrate. Well, this has been an interesting conversation. Thank you for sharing your experience moving from PHP to Go. We've mentioned some cool stuff, we will include them in the show notes, and we will tweet all the unpopular opinions to see which one is the most unpopular. Thank you, Matt. Thank you, Chris.

**Matthew Boyle:** Thanks for having us.

**Chris Shepherd:** Thanks a lot, yeah.
