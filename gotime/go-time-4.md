**Erik:** It's Go Time! A weekly podcast where we discuss interesting topics around the Go programming language, the community and everything in between. If you currently write Go or aspire to, this is the show for you.

Welcome back for another episode of Go Time. This is episode number four. Today we'll be talking about Gopher data science and other interesting news and projects we've come across this week. I'm Erik St. Martin and with me is always our other amazing hosts, Brian Ketlesen - say hello, Brian.

**Brian:** Hello!

**Erik:** And also Carlisia Campos. Say hello, Carlisia.

**Carlisia:** Glad to be here, hi!

**Erik:** And for anybody who's already listening, today we're joined by Daniel Whitenack, who is very vested in Gopher data science. He's also going to be speaking at GopherCon this year about it. How are you, Daniel?

**Daniel:** Good, good to be here.

**Erik:** So let's kick this episode off by talking about anything we've kind of run across this weeks in news and just random articles and things. What's everybody got?

**Brian:** The biggest thing this week is the feature freeze for Go 1.7. It was announced on the Golang-nuts and Golang-dev mailing list. There's a lot of changes in this, with the SSA and compiler changes, so everybody out there needs to download Go 1.7 and compile it, test your programs, because this is a really big change, and there's opportunity for breakage. Of course, our tests cover everything, but it's a big place for us. Compiler speeds are down, down-down-down.

**Carlisia:** I saw something about binaries. Is it vendoring binaries? I didn't have a chance to investigate, I was super-interested. Does anybody know?

**Daniel:** Yeah, I think it was binary-only packages, without providing the source.

**Brian:** Exactly, so you can get a binary on your package now.

**Carlisia:** So you can do it both ways?

**Brian:** Correct. If you want to release a precompiled package that was only a binary with no source, you could do that by giving somebody a URL to a go get, or to use go get.

**Carlisia:** Oh, I see what you're saying, gotcha.

**Erik:** Yeah, so kind of more along the lines of like the commercial packages and libraries that you can buy, say, for the Windows side of the world.

**Carlisia:** So then if I'm using your package as a binary, I can pop it in my projects and use it as a binary?

**Brian:** I don't know if it applies to precompiled libraries. I think it was only commands, but it would be interesting to see if it actually applied to the library files, the A files.

**Erik:** I have to look more into that. I briefly saw something about that, and I kind of breezed over it, I've been really busy this week. But there's something like 300 closed tickets for that release.

**Daniel:** Exciting. I'm excited for the compile times.

**Erik:** Yeah, me too. I can wait to get back to 1.4 speeds.

**Brian:** We're getting closer. It's still slower that 1.4, but we've regained a lot of that lost territory, and that makes everybody happy.

**Erik:** The other interesting thing that I saw this week too was Brad and Andrew's live coding sessions. Did you guys see that? Where they're putting out a callout for people who want live code reviews.

**Brian:** That's frightening.

**Carlisia:** I didn't see that, but that sounds great.

**Daniel:** I didn't see it either, but I would love to participate in that.

**Carlisia:** I've seen them doing it in the past, and it's great.

**Brian:** I don't know... If you didn't have impostor syndrome before, imagine Brad and Andrew tearing up your code. They're both great guys, so don't get me wrong, but that is a tough crowd to please.

**Erik:** I don't know, I think that it would just make my own thoughts of myself come to light. I'd be like, "I knew it. See? I knew I was a terrible coder." \[laughter\]

**Brian:** Yeah... GoTimeFM, where we talk about our impostor syndrome for an hour. \[laughter\] There's another big news item this week, and that was Peter Bourgon's article, his update of his Go Best Practices talk from 2014. He updated that to 2016, and there's a lot of really good takeaways in there; I don't think we have time on the show to cover them all, but some really good tips in there about dependency management, about testing, how to structure your library, what to name your packages - you name it, it's covered really nicely in there. Like I said on Twitter, I think this is really a cannon. Every Go developer should read this and try to internalize all of these rules, because they're really good stuff.

**Daniel:** Yeah, I think it's gonna take a while for me to unpack, but I think it's one of those things... You know, I have a bookmark that I'm gonna visit every week, and as I'm implementing different things, I think referencing that and just seeing if I'm doing things in a sane way is gonna be great.

**Erik:** I think that that talk was a favorite, still to this day, from GopherCon 2014. People really loved that talk, so it's fun to see him go back and kind of reflect on his thoughts and to shoot down the things that he thought were the way. Although I don't know whether he fully dismissed any of the concepts that he presented in 2014. I think he got a little looser on his beliefs on a couple of things, and then a couple of added new ones. I need to read through it again. And like you said, Daniel, it's like that - you read it one time and you're like "What did I just read?" You kind of have to keep going back to it.

**Brian:** Yeah, something this big takes a long time to internalize all of it. I would love to take this article, mix it with Dave Cheney's error-handling article from a week or two ago, and just put it under my pillow and sleep on it every night, hoping that I could absorb all of that at once. That's be great.

**Carlisia:** I'm holding myself back, as I don't wanna be such a big fan girl, but for people new to the community and to GO, Peter is definitely somebody to absorb. I would say Peter and Dave Cheney are at the top of my list as far as best practices and things I think are best to follow.

**Daniel:** Yeah, I would agree, and I think coming into Go not too long ago, of course you search around different Stack Overflow responses and whatever, and you can really get a mixed bag of ideas about - like Erik said - about error handling or what have you. But going to these resources, I found, gives some clarity on that mixed bag that you find across the interweb.

**Erik:** I'm interested to see some more best practices too, just to kind of compare and contrast, because I think people have different success stories with different things, and especially when it comes to vendoring, that can be a hot topic. We could probably talk for a full episode about vendoring.

**Brian:** I think we could have an entire GopherCon on vendoring, and still not get any consensus from anybody. \[laughter\]

**Carlisia:** Who needs consensus?

**Daniel:** Nobody needs consensus, good point.

**Erik:** Alright, moving on - interesting Go projects. And speaking on sleeping and downloading information, Brian, with your nightly download of cool projects.

**Brian:** Here's one that I saw a couple weeks ago and I wasn't too sure about it, because I didn't see all of the code there. This one's called GAFKA, and it's a suite of Go tools for managing KAFKA clusters. It's at GitHub.com/funkygao/GAFKA and it looks really complete. It looks really complete now. Very interesting if you manage KAFKA, which a lot of people do, and it's got a lot of nice little Go commands and Go tools for working with your cluster, things that will save you from the ugly mounting of Java shell scripts that you have to do generally when you're messing with KAFKA.

**Erik:** This is just helpers for administering and kind of... That world for KAFKA? Or for places as Sarama and some of those client libraries?

**Brian:** I didn't see any client libraries in there, this is only a suite of tools for managing the cluster, looking at consumer groups, that sort of thing. I wanna say there are at least a dozen different utilities in there for dealing with your cluster.

**Erik:** And Daniel, I imagine you're quite versed in KAFKA, coming from the data science world?

**Daniel:** Yeah, we use KAFKA in production and I think with this I might be able to give those Java scholar guys that run for their mommy... I also like the part of it about admitting health info to InfluxDB; that's something I can imagine being super useful on my end.

**Erik:** Alright, what else have we got?

**Carlisia:** Well, I've run into this concept of ChatOps this past week, from two different places. One was the Remote Meetup group, they had somebody come in and do a talk about ChatOps, and they did it using GitHub Hubot. He did a marvelous job. He said what it was, he demonstrated it, he did a demo, he explained how you can use it... It was fantastic. And I've never worked in a place that was using it, I don't even know if this is super new. I know the concept of chat bots is not, but the concept of having chat ops right there where you are doing your communication...

And then I also came across this microlibrary which is a Go library. It's a Micro services kit or a library, and it has capabilities for chat bots. They have a blog post, and we'll have a link to it - they say chat ops bots should be a first-class citizen. I think that's great. I work on the command line a lot and I love it, but I also love the concept of bringing operations into the place where you are communicating with people, and also all the extra capabilities that you can get from these new modern tools. You have to watch the Remote Meetup video to see what I'm talking about. I can't thoroughly describe it; I've worked with this, and it's at the tip of my tongue here to describe. I was just fascinated, and I definitely would love to work using this tool, so there it is.

**Daniel:** Yeah, and I think part of what I see that's appealing is kind of moving away from being in Slack and always copy-pasting screenshots of my terminal into the Slack channel, but rather executing the command via the chat bot and kind of having a human understandable version of what I'm doing, and enter right into the conversation so everybody is on the same page and doesn't have to wonder where I executed that and what my environment is and why it looks weird - getting over that hurdle.

**Erik:** It's hard though, because I used to love the chat ops stuff, and then I've been kind of pulled more and more away from it because I try not to look in the chat channels nearly as often as I used to, because it gets really distracting. You kind of see your notification, you look in there, and it's like "Oh, it's just somebody deploying something..."

**Carlisia:** Yeah, exactly. I'm glad you brought that up, because I wanted to mention it and I forgot - what I saw on this video was not at all notifications. Because yeah, we get notifications, we get these \[unintelligible 00:13:14.06\] to get there. This was more about having the extra features. For example, querying something and getting the response from different services across your services; it's more like you're in command and you query, and you're asking for information. And maybe somebody else is there as well, and you can share the information, as opposed to being just a passive consumer, just like being dumped information. I thought that was extremely cool.

**Brian:** Yeah, I think from a framework perspective, Micro is probably the most interesting in the Go world that's come out in 2016.

**Erik:** That's bold.

**Brian:** It is bold, but I called Rails, I called Go, I called Docker - you're gonna have to trust me on this one. Micro is big. And it's big because it offers a much broader view of Micro services. It's not just a set of tools to help you make Micro services, it's a whole ecosystem. And I think that's important, because making Micro services on their own is not as important as deploying and managing, operating, and consuming those Micro services. So having that big framework, that whole ecosystem of tools I think will make Micro services more accessible to everyone, and certainly more manageable. The ChatOps is a great side of it, but it just goes to show the power of Go's interface, because it's the same interface that you can use to interact with it by protobuf or by a web page. You can take the same Micro service in the Micro framework and interact with it from the command line, you can interact with it from a web page, you can interact with it from Slack, and it's all using that same interface. I think there's a lot of power behind this, and you need to star it in GitHub, because this one's going places. And he's hiring, I saw a tweet this morning - Asim Aslam is the guy who's running Micro right now, and he's looking for people.

**Erik:** Awesome, I'm interested to see what comes out with it.

One thing that I came across this week was a project called UNIK, which is spelled interesting; that wouldn't be the first way I'd think to spell it. One of the things I know that at least Brian and I have discussed before was this whole motivation behind containerization and Micro services and things of that nature, was how long before unikernels started taking off. So one thing I came across was this project called UNIK, which allows you to compile your Go app, and it does Java and C and C++ as well, to compile it into a unikernel. So you got Micro on my mind here.

**Brian:** Sorry. It's my fault.

**Erik:** So I'm interested what comes along there, what people do with it and how unikernels evolve.

**Daniel:** Do you guys have previous experience with unikernels in general?

**Erik:** Only in building some to play with for toy reasons, not so much as far as like production usage.

**Carlisia:** I don't, at all.

**Erik:** Yeah, basically the notion of unikernel is it's just a really trimmed down kernel, a bootable program. When you look at your container, like \[unintelligible 00:16:49.20\] the process that starts up is your application, but you still have an operating system that bootstraps that particular process. And a unikernel is basically your app is the operating system. And I think they have some stuff tied in under the covers, but I'm no unikernel expert either, so I wouldn't take my word for it.

**Daniel:** Yeah, it's definitely an interesting concept and something that's been on my radar to play around with, but I haven't quite got there yet.

**Brian:** I think the interesting thing for me is, from the security world, the most secure code is the code that isn't there, and the idea of a unikernel is that you take your app and only the pieces that you need to talk to the hardware and compile that down into something that feels like an operating system to run your app. So the attack surface of your application is significantly smaller because you don't have all of the extraneous stuff that comes in an Ubuntu distribution, for example. So you've only got the one port open because you're only listening on port 80. There's significantly smaller attack surface, and I think that's one of the main benefits of unikernels, at least in my mind.

**Erik:** So I think we have roughly 30 minutes left in the show, so let's get chatting with Daniel about data science.

**Brian:** Oh, this is exciting. We've been twitching for weeks to talk about data science. This is big.

**Daniel:** Sweet, I'm excited.

**Erik:** Brian and I are on the analytics side of things. I mean, we've spent a good 4-5 years in this space working with analytics side and building software to support them.

**Brian:** I'm the fringe. \[laughs\] You could call us data scientists; you could call us the programmers that enable data scientists. \[laughter\]

**Erik:** Or the \[unintelligible 00:18:39.19\]

**Brian:** That's right. Maybe you can start - for all of us, can you give us kind of a background of a primer? What is data science? Where does it fit? What are the things that are data science and what are the things that aren't data science?

**Daniel:** Yeah, I think that's definitely a good place to start, because depending on who you'll ask, you'll get very different answers. I think one useful differentiator that I like to keep in mind is what is \#datascience and what are people talking about when they say 'data science' on Twitter, and then what are data scientists, those employed as data scientists actually doing in the industry. So I think in the first case what people are talking about a lot are things like AlphaGo beating the go Grandmaster... If you're not familiar, AlphaGo is a deep neural network trained by Google. They basically train these neural networks such that it could beat the grandmaster go champion - Go being the boardgame, not the programming language. I think this is really amazing. This is a huge achievement and should be talked about a lot.

On the other side of things, you look at what do most of the data scientists employed in the industry do? There was an interesting article recently in Forbes that actually pulled a bunch of data scientists and found out what they spend their time doing. Actually a lot of it, 90% of it was gathering data sets, collecting data sets, parsing data and extracting patterns from data. So about 90% of what data scientists do doesn't necessarily involve some nifty machine learning, but more of the process of moving data around, transforming it and extracting patterns to make it useful. Then that other last 10% could be various things. So a little sliver of that is doing kind of interesting machine learning techniques; maybe another sliver of that is making dashboards or visualizations, and then various other tasks. So I would say in general for me data science is the process of transforming data - wherever that might be - into insights for your business. Sometimes that might require a neural network, but pretty much always it requires some problem-solving and some ETL, and maybe some arithmetic. I think those are kind of the pillars of data science.

**Brian:** I've got a question for you, and this is a little bit crass, so forgive me in advance. I read an article a couple of years ago, maybe two years ago, about how Target knows when your daughter's pregnant before you do.

**Daniel:** Yeah, my wife works for Target, and it's apparently true.

**Brian:** Yeah, it scared the hell out of me, it really did. Because people buying just the things that you buy every day, it never occurred to me that they could take the patterns of things that I buy, compare them to other patterns and realize, "Hey, this guy's getting a divorce. This one's pregnant. These guys are having a baby next month." They can tell by that data what my life is. It's almost the metadata thing from the cell phone world, it's really scary. How much of data science is being pushed because of commerce, and how much of it is being pushed because of advertising? Where does that fit in the grand scheme of things? What's the real driver behind the advances in data science?

**Daniel:** Yeah, sure. I think if we look a little bit back over the years, there's been certain industries that have always been involved in data science in some sense. If we look at insurance companies or other companies like that that are interested in assessing risk of a person based on things that have happened to them, and other things like that. So that's been going on for a while, and then there was this time when people learned, "Oh, we can target certain types of people with advertising", so for a while there a lot of the data science job postings were advertising-related. Now I think it would be fair to say that data science - again, I'm calling data science this process of creating data-driven insights - is really permeating pretty much every level of businesses. A lot of data scientists now are working to inform even internal business people, not even necessarily to make a company more money directly; they might be concerned about intelligently monitoring outages in their infrastructure, right?

Then it goes from that kind of lowest level all the way to the directly applicable processes to the money side of things, having to do with marketing, improving your ads and all of that. So I think from the very lowest level in the backend processes, all the way up to marketing yourselves to the outside world, I think you're seeing data science permeate all of that. I think the idea is really that data scientists now, when you're employed and you're coming into a company, the idea is not necessarily to say "I'm gonna come in and I'm gonna optimize ads" or "I'm gonna come in and I'm going to predict risk, predict fraud" or whatever it is. A lot of companies are building data science teams and even embedding data science teams across the organization to, say, "How do we make our processes at each level of our organization data-driven?"

**Brian:** It's interesting that you mentioned the dev-op side of it. I didn't see the whole talk, but I saw the slides on a conference that happened a week or two ago, it escapes me which. I wanna say that company was one of the bigger companies, like Uber or Halo or something like that, and they were talking about how they use data science to reduce the false positives in their monitoring systems. They knew because of the cycles and the patterns of their monitoring, they could reduce the false positives, the pages, 90% of the time, and that cut down their duty calls while they were in the middle of an outage that wasn't really an outage by 90%. There's real cost savings, real benefits behind that.

**Daniel:** Yeah, exactly. So in that case you're really optimizing a lot around your business processes and your engineering processes. Yeah, so that's from Uber... That's their system, Argos, which is their alerting system, and actually on the backend of that, the time series database, they wrote internally in Go. I was at that talk and it was super impressive; I was kind of blown away by all the intelligence that they're putting into that learning, and really making some pretty astounding gains in reducing their false positives.

**Brian:** Nice. Was there any open source component to that? Have they released any of that yet?

**Daniel:** As far as I know not. I mean, hopefully they will, given the trends we've been seeing. Hopefully at some point they're able to release the database or the frontend. Right now I think - at least the last I saw - most of it was still internal. But they did give a pretty good discussion of their logic around how they're modelling things and how they're hoping to keep improving the system over time. It's definitely an interesting talk to see. I'm not sure if the video is up online, I know the slides are.

**Brian:** Alright, we'll put those in the show notes, for sure.

**Erik:** Let's talk for a moment about the tools of the trade - what are the current tools of the trade (languages and frameworks) and what do you see those being replaced with on the Go side? Because I know that's something we've chatted backchannel about that a bit in our excitement on watching some of these things evolve.

**Daniel:** Yeah, sure. So I would say even just like a year ago, if I was to go to some data science event, one of the big questions was "Should I learn R or should I learn Python?" These have traditionally been the big players in this space. There's a lot of great tools... I'm not as familiar on the R side, but I worked a lot in Python. On the Python side you've got this whole suite of numerical and data science type tools like Python Pandas and SciPy, NumPy, all of these things. That was kind of how things went for a while.

Then recently, at that same conference where they discussed the Uber alerting stuff, I was seeing definitely much more of an attitude in the community about... Well, a question was posed, "What language should I learn?" and I think they were expecting to hear R or Python, but the answer that the speaker gave - who happened to be Josh Wills from Slack... He basically said, "Learn them all, because every week I use Python, I use Javascript", and he mentioned Go as well. I think and I hope that the community is kind of opening up to see that each of these languages has unique capabilities and unique use cases, and the hope is that we don't kind of morph all of these languages together as all kind of doing the same thing, but we utilize them where they're particularly useful, and utilize their unique features. Then of course there's a whole suite of tools around "big data technologies", like Apache Spark and Hadoop. These are mostly kind of Java Scala applications. But even then, a year ago or something, there was a lot on that side of things, there was Java Scala, and now you're seeing a kind of broader range. There's things like looking at InfluxDB or the time series database that Uber worked on, or even things like Pachyderm, which is an interesting project - these are big data frameworks that are not Java Scala based, and utilizing technologies like Go and Docker. So I think there is a shift going on right now in the community; I don't know if you guys have seen any of that as well.

**Brian:** I think Pachyderm is probably one of the more interesting things I've seen in a while, because it almost takes that "You can do everything on your laptop" philosophy with \[unintelligible 00:31:38.29\] and moves it into the Docker world. So instead of piping UNIX commands together, you're just piping Docker containers together, and that makes an interesting big data workflow, especially when you add something like Mesos or Kubernetes into the mix, where you've got large orchestrations of big data happening. It sounds really interesting.

**Erik:** Yeah, I've seen a few projects over the years where people have started trying to do text parsing and some probabilistic stuff in Go... But what was that project we ran across...? We were kind of researching the show and it was just astonishing how big that page was.

**Carlisia:** Oh, yeah...

**Brian:** Oh, I know what you're talking about - the golang data library page. It's at mjhall.org/golang-data-science-libraries. It's a huge page full of data science libraries in Go and we all just kind of stopped and said, "Wow! There's 500 lengths on this page." I was thinking there were two or three data libraries for Go, but no, there's a lot.

**Daniel:** Yeah, and something I've seen is... Even still you talk to a lot of data people and they talk about Python or R, and you hear about people working in those languages, but the newer companies that I've interacted with or contracted with, they are adopting Go and other modern languages more readily, and they're not abandoning that strategy for data science; they're also using those languages for data science. Maybe no one's kind of rallying around a certain small subset of tools like they are in Python. Pretty much the data science community has rallied around Pandas and CyPi and NumPy and these other tools. Maybe that hasn't gone on in Go yet, but there are, like you said - if you look into it, there are a lot of libraries that will allow you to do generally what you want to do, and maybe with a little bit more investigation and a little bit of custom package building on your end, but generally there's nothing preventing from doing those same things in Go.

**Erik:** Are there any specific Go packages or frameworks that you're currently using?

**Brian:** Sure, yeah. I mentioned Pachyderm, I am using that currently, and have had some great experience with that. I also very much like the idea that you can think in terms of these data pipelines and think in terms of piping data from one container to another. This is very useful, because let's say I want to do something very efficiently; concurrently at one stage of my pipeline I can write that very easily in Go and wrap that up in a container. If there was a case where maybe there's a very certain Python library that I'm very interested in, there's nothing preventing me from having that be part of another stage of the pipeline.

Generally a lot of what I'm writing is in Go, but I like that flexibility. I also like the reproducibility of it, which is a pretty huge problem in data science right now. So the fact that you can commit your input data, your output data at every stage of the pipeline is very useful and powerful, I think. Also I've been using a variety of databases. I've recently used BoltDB and looking at some other embedded databases has been useful for me to kind of speed up some operations. Then also using some tools from Gonum as well. Gonum has a variety of packages that are in development or have been developed to some degree, like Matrix manipulation, implementation of Lapack and even plotting functionality. That's been useful, because there's been certain times... I like to do something in Go, maybe the package doesn't exist, but I can take stuff from Gonum and very easily implement the algorithm that I'm wanting.

For example, I recently did a \[unintelligible 00:36:23.16\] sort of thing. In the spirit of the Go proverb, "A little copying is better than a little dependency", I basically just stole some of the Euclidean distance functions and that sort of thing out of Gonum and was able to throw together exactly the \[unintelligible 00:36:44.20\] thing I wanted, pretty quickly. So those are some of the things that I've been using.

**Brian:** We did a project recently, last year, where I needed to do some data processing, and I found it really easy to take Python libraries and port them over to Go for data science type things. I can't remember what I needed to do, it was one of those numeric-type things, but it really was not difficult at all, and very performant.

**Daniel:** Yeah, and I think part of the mindset of like... In Go sometimes it's easier... Something I've seen - maybe you guys can comment on this - is doing... In Go sometimes it's just faster to write a for loop than it is to import a certain package to do some relatively simple thing. And I think it applies similarly in the context that you just described. Maybe there's' not this very specific thing in Go that you want, but you can steal a little bit by porting over from this Python package that describes what they did, and you can utilize some of the things from Gonum maybe, and you can piece it together really quickly, and out of that you get something that's very performant, and something that you can put into the context of asynchronous communication and all of that that Go handles so well.

**Brian:** Right.

**Erik:** Matt Holt is in our backchannel, which is GoTimeFM channel on Slack, the Gophers Chat. He said that he implemented \[unintelligible 00:38:25.15\] in Go for his machine learning class. He said, "Great experience, totally worth it. Just inline it."

**Daniel:** Yeah, I totally agree.

**Erik:** To your point, I think that that's a good pattern when looking at importing dependencies in general, right? If you need one function - especially if it's small - do you need to import that giant library? All of it has implications too, so I guess it's always something to evaluate whenever you pull in a big dependency.

**Daniel:** Yeah. And there are a good number of packages related to data science, including machine learning packages. I recently saw a data frame package called Gota that's in development, which will be definitely very nice for exploratory analysis, I think. I would be sad if doing data science in Go just felt like doing data science in Python. For me, part of the joy of Go is that I can kind of piece things together in this way; I can take a little bit from here, bring over a little bit from Python maybe, and throw it together in a way that is very performant, very efficient, and very easy to deploy, and has those unique characteristics. So yeah, that's kind of my mindset, I guess.

**Brian:** So what kind of advice do you have for somebody who wants to get started with playing in data science in Go? Do you have resources or advice, or places you like to send people?

**Daniel:** Sure, sure. First of all, like I said, I think doing data science in Go should be a little bit different, so I think definitely starting out I would say that those same resources that other people starting out in Go find useful, like Peter's resources or Dave Cheney's, and kind of getting into that mindset of "Where does our mindset in programming go? Why do we do things in this way and not that way?" Those are definitely useful in getting started and playing around on the Go playground and all of that.

Then a lot of what I've learned has been trial and error; importing this package and trying that, writing my own custom stuff... Hopefully that's changing. A lot of data scientists come into Python and try things in Jupyter notebooks to try to figure out interactively how does this work. One of the things I've been working on recently is a Jupyter kernel for Go. It's functional right now, it needs some work, but I'm hoping that that along with further development of plotting things and other things like that will kind of ease the burden of people coming from a Python world to the Go world, and be able to do some things interactively and see what happens in that respect.

Then of course there is the list of things that have already been done in Go, like InfluxDB and Pachyderm and most sorts of things. Generally there is Getting Started sections to those projects. In Pachyderm they have a great Getting Started example where they do word count with simple grep and awk commands. That's kind of a fun way to get started in doing data science in that way.

**Carlisia:** Daniel, we should be surprised that you're going to talk about Go in data science at the upcoming GopherCon, but can you give us a little teaser about the talk? Who should be looking forward to being there and seeing that talk?

**Daniel:** Sure, sure. So it's still in the works, but the teaser I'll give is that from start to finish basically I'm gonna do data science, and do it hopefully in a distributed way, all with Go. So starting out saying like "This is a problem we wanna solve. We're gonna explore the data with Go tools, and then once we know what we're gonna do, we're gonna implement something simple in Go that will do that" and then we can think about how will that scale, and we'll use a Go tool, maybe Pachyderm or something like that to scale that up and illustrate how you can go through that whole data science process using nothing but Go.

Then also I'll definitely provide some call-to-action to the audience to start doing some data sciency things with Go and point them to some packages and some projects that they can contribute to.

**Carlisia:** So is it going to be like a live demo?

**Daniel:** Yeah, I mean it will be a combination between some code that I'll show on the screen, and then depending on how things work out, I'm hoping to show some type of live demo.

**Brian:** I say you gotta go Kelsey Hightower or go home.

**Daniel:** Exactly. It's a scary proposition, but it could be a lot of fun.

**Brian:** Just live code on the screen.

**Erik:** If you have slides, you have to deploy VMs that do this stuff from the slides.

**Daniel:** Sure, sure. Actually, I'll point to some Go notebooks and you can do it yourself in the notebook.

**Carlisia:** Very cool.

**Erik:** So speaking of Go notebook, there's the Jupyter, right? And there's now a Go library for that.

**Daniel:** Yes, so there's a working kernel for Jupyter, it's called Gopher Notes. I started this back in, I guess it was January. It's functional now, so you can use it to make Go notebooks. There's definitely open issues and things to work on, so this is one of those things that I think hopefully some people find useful right now, but it's also a great place for people to get involved and knock out some of those issues and get plotting enabled in the notebook. I'm hoping, like I said, that this project will kind of help ease people into Gopher data science. Also, I think there is a part of data science that is very interactive - you wanna explore the data, you wanna see what it looks like, you wanna plot a histogram, and a lot of that is interactive, so bringing some of that interactivity to this world would be fun.

**Erik:** I think we're running very short on time, but for anybody who's not aware, can you give a brief rundown of what Jupyter is?

**Daniel:** Sure, yeah. There's actually a whole ecosystem of Jupyter projects right now. The main project is called Jupyter Notebooks, and what you can do is you can start a Jupyter Notebook server on your computer, and then if you go to the browser, you can start a Python notebook, and there's a lot of other kernels now. You can start a Go notebook or a Scala Notebook. When you open that, it's kind of similar to - I don't know if anybody's used Mathematica before, but there's different cells, and you can put code in those cells and evaluate that interactively. So it's live code in the cells, but you can also interject other things into the notebook; you can put in markdown into the notebook and render that, you can put images in, and then at the end of your notebook you can hand that off to someone else and say "Hey, here's what I did." You can also run it in your browser, or you can export it as a PDF or a slideshow and share it with other people, or turn it into a dashboard even. There's a variety of plugins that allow this functionality.

**Erik:** Excellent. We've just about exhausted our time here, but before we kind of transition into closing out the show, is there anything that you wanted a chance to share with everybody that you have not got a chance to?

**Daniel:** I think a lot of what we've talked about is definitely what I wanted to talk about. I would encourage people out there - there are a good number of people doing data science in Go out there, even if they're not the most visible in the data science community... So let' s say, all of you Go engineers out there start playing around with some of these data sciency applications and I think you'll find that the experience is really good and you can come out with some great deliverables in Go and things that can actually be deployed, and scale, and all of those good things we like about Go.

**Erik:** The way we typically wrap this thing up is we have our \#FreeSoftwareFriday where all of us go around and thank some projects or contributors - or both - that are making our lives easier currently or in the past. With that being said - Brian, who do you wanna thank?

**Brian:** I know our rule is no more than one, but I have two - forgive me in advance.

**Erik:** I did three one week, it's cool. \[laughter\]

**Brian:** Okay, good. So the first is ngrok from Alan Shreve. My god, there isn't a day that I don't go by without using ngrok. It's just the best tool on the planet for sharing something that's running on your machine with people that are somewhere else. If you haven't used it, I think it's at ngrok.io, but you can just search for ngrok. What an awesome tool... I use it constantly, I love ngrok. And then, a kind of an extra special shout out to the people in GopherJS room on the Gopher Slack who have had unbelievable patience with my sad, sad Javascript skills - thank you guys!

**Erik:** Carlisia, how about you?

**Carlisia:** I'm going to mention Jupyter Notebook and the Go kernel. Daniel did a great job describing Jupyter Notebook, but I still wanna mention it because it is not just for data science, and I'm gonna tell you why. I came across this commercial tool that is a notebook, and my mind was blown. This is the tool that I looked for all my life, and it's what I use now to take notes. Just like Jupyter, it has cells. You can have code cells or markdown cells or tech cells - it's been the most amazing thing. And I keep telling my husband - he's a data scientist - "You have to try it, this is the most amazing thing!" Two weeks go by and I'm telling him, "You gotta try it, you gotta try it", he finally comes over and looks at it, and he's like "Huh, I have this. But it's free, open source, and it's called Jupyter." I'm like, "That's what Jupyter is!?" Because I ran across Jupyter when I ran across the Go kernel that Daniel did for Gopher Gala, when I was browsing Gopher Gala submissions. Then I went and looked at Jupyter, and I was like "I don't understand what this is. It's not for me, and I'm not willing to spend the time." So I find this tool and then I'm like, "Oh, that's what it is!" So actually last night spent time setting up Jupyter and hooking up the Go kernel to it, and it is super amazing. It's not just for data science - you can keep your notes, you can run code... I have ideas to put together Go courses, and I would totally use Jupyter for that, because everything is self-contained, it can have different sections, I can run the code right there, you can do a presentation... Just like Daniel was saying, you can export it and when you host it on GitHub you see the whole thing formatted; it's not interactive, but the whole formatting is there and it looks beautiful. It's great.

**Erik:** I'm sold. I kind of wanna look at it just for normal note taking.

**Daniel:** Yeah, and thanks to Carlisia for going through the setup and giving me feedback on the different issues as well. I definitely appreciate it and I'm glad people are starting to use it.

**Carlisia:** Yeah, I did run into just a super minor hiccup, and I opened an issue. Daniel was so quick, he was instantaneously responding to what I was having trouble with. I think he'll do the same for everybody.

**Erik:** Uh-oh, she's setting a precedent.

**Brian:** There's pressure... \[laughter\] On next week's show we're gonna talk about open source pressure... \[laughter\]

**Erik:** ...and how we can add more to the contributor. \[laughter\]

**Carlisia:** Setting expectations...

**Erik:** We also like to ask our guests if there's anybody they kind of wanna thank, any projects they'd like to bring highlights to...

**Daniel:** Yeah, I wanted to mention Vim Go because I've started using it recently. I know a lot of people use it out there, but I'm kind of a recent convert. I've just found it amazing, and I think it's... Once I kind of got in the process of using it and writing Go with Vim Go, I think it's improved my development process quite a bit, and that's really the one I would like to thank. I think his name is Fatih Arslan. I'm definitely thankful to that; I think it's super powerful and it can improve your workflow. Previously I was using Atom, and now I've pretty much just been using Vim Go recently and I think it's a great project.

**Brian:** Yeah, Fatih is now a new dad, so congratulations to everybody...

**Daniel:** Congrats!

**Carlisia:** Congrats!

**Erik:** That's a week ago, two weeks ago now?

**Brian:** I don't think there's been that's gone by that we haven't talked about Vim Go.

**Erik:** Yeah, one of us always has Vim Go, and I'm gonna play right along with it, because who I'm gonna thank is Nvim. I've been a Vim user for a long time, and I kind of tinkered with Nvim. I don't even remember why I went back to standard Vim, and then Brian's like "Dude, why are you still using regular Vim?", so I went back to Nvim, and I'm loving it. And then of course, it wouldn't be the same without Vim Go, so I'll thank Vim Go again.

**Carlisia:** Is it Nvim or Neovim?

**Brian:** Neovim. The command line you type is nvim. Yeah, and those are two great tastes that taste great together, because Neovim does asynchronous processing and Vim Go enables that very nicely, so you can do things like compile while you continue to edit, and that's not possible in regular Vim, and it's really tasty in Neovim.

**Daniel:** Oh, cool. You guys are giving me something to do after the talk ends. \[laughter\]

**Erik:** We're always learning with Vim. It's doesn't matter how long you've been doing it, you still find new plugins, you find new versions. And I think we are actually over time, but it's been fun.

**Daniel:** It's been a lot of fun!

**Erik:** Yeah, this has been great, and I'm looking forward to your talk at GohperCon as well. And for anybody who wants to hear more from Daniel, you should attend his talk at GopherCon.

**Daniel:** Yeah, and I'll be around and be happy to talk about Go and data science throughout the conference, so hit me up.

**Brian:** Yeah, just on that note real quick, as we're wrapping up, we're gonna have panels with the speakers in the afternoons, so if you wanna get some quality time with the experts in the field, the afternoons of GopherCon on your time, GopherCon.com, buy your tickets now. Did that sound like a soap commercial? \[laughter\] I tried.

**Erik:** You gotta do the fast talking thing if you're gonna do the commercial, because you gotta get that in like five seconds.

**Brian:** That's what I was going for... I guess I can't talk fast, sorry.

**Erik:** Alright, so I wanna thank everybody who's on the show, the entire panel. I want everybody who is listening and who will be listening, definitely share the show if you guys wanna hear more. We're gonna kind of vary topics between community and what's going on, and talking to people, as well as deep-dive technical content. Go to GoTime.fm if you wanna subscribe. We're @GoTimeFM on Twitter, and then we also have a Slack channel if you wanna catch backchannel action during the shows. That's GoTimeFM on the Gopher Slack. We also will be doing this thing live too, so we'll get a link up so that we can continue to do this; I think it went really well this episode. So with that being said, goodbye everybody.

**Brian:** Goodbye. Thanks, Daniel.

**Daniel:** Goodbye.

**Carlisia:** Goodbye.
