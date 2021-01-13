**Erik St. Martin:** Alright everybody, welcome back for another episode of GoTime. It's episode number 39 today. Today's sponsor is Toptal. The hosts for today's show are myself, Erik St. Martin, Brian Ketelsen is also here - say hello, Brian.

**Brian Ketelsen:** Hello, Brian.

**Erik St. Martin:** And the lovely Carlisia Pinto.

**Carlisia Thompson:** Hi, everybody.

**Erik St. Martin:** And our special guest for today is a speaker, author and CTO and co-founder of Splice, Matt Aimonetti.

**Matt Aimonetti:** Hi there.

**Erik St. Martin:** Do you wanna give everybody maybe a couple-minute rundown of who you are, the things you're working on, what Splice is, for people that are not familiar with it?

**Matt Aimonetti:** Yeah... It's always hard to know where to start, but let's start with Splice - that's probably the easiest thing. I co-founded Splice about four years ago now, and we are located in New York and Los Angeles. I'm myself in Los Angeles. GitHub is a creative hub for modern musicians. What we do is kind of a Netflix with samples and loops and GitHub for music. So we basically work with music producers and we integrate with them on software; as they create music, the same way you might be using Git to create your commit every time you save, you enter a session, you enter a program, all the contents you've been working on gets uploaded to the cloud, and then you can add collaborators and you can buy contents. We have a subscription system that lets you buy the right for more elements to create the song you want.

We have some of the top producers on the platform, from Deadmau5 to the people who produced for Chainz the rapper, or even the Zootopia song that just nominated for a Grammy award, with Shakira.

The story behind that is that I started as a sound engineer; I studied sound engineering and I did that for a few years. I worked in England, and I was traveling a lot to Asia and to a part of Europe, and coming to California. At the same time I was doing programming, and I realized "Wow, there's a really great life for me to have in California and to be a programmer full-time."

At that time I was very involved with the Ruby community, contributing to Rails and working on a project called Merb. I moved to the West Coast and I became a full-time engineer, and nobody really knew about my dark past as a sound engineer until I met my co-founder in Colombia. We were at a conference together and we were talking about different ideas, and the concept of bringing the tools of programmers to the world of music is something that we were both excited about, but it was also something I knew was really hard.

When you have two passions, it's hard to choose... I think with Splice I was able to bring both of them together. That's the back-story behind Splice and my involvement with it.

**Brian Ketelsen:** You mentioned Merb a minute ago... It's amusing to be that nearly every guest we have has a background in Ruby in one direction or another. It's so funny to see -- I don't know if migration is the right word, because I don't know if everybody always leaves Ruby, but it's so funny to see the people that we respected and admired in the Ruby community in the Go community again, making waves. It's kind of fun.

**Matt Aimonetti:** \[00:04:11.19\] Yes, it was great. I remember the first [GopherCon](https://www.gophercon.com/), where I ended up seeing a lot of my close friends from the Ruby community that I've known for 10+ years now being around. Not everybody followed Go, and I think that's great. A lot of people also went to Elixir, they went to Node.js, they went to do different things, but I think Go definitely offered an interesting balance, especially in the context of Merb where we were really looking for performance, and we were looking for a certain way of writing code. That's something that we really found in Go.

**Brian Ketelsen:** I loved Merb.

**Matt Aimonetti:** Thank you.

**Brian Ketelsen:** I was sad to see it die, or merge with whatever...

**Matt Aimonetti:** Yeah, we merged with Rails... We were acquired -- I don't know what the right term would be nowadays. \[laughter\] But it was a great project, I'm really proud of the work we've done. I kept on doing exciting things and used a lot of the experience with Merb to do things in the JavaScript community and then with Rust. It's great to see people moving on and doing different things, too.

**Brian Ketelsen:** That just reminds me that we lost Ezra, Jim Wyrick... It's very sad to see those people go. We should start this show with some death and sadness. I'm so sorry about that.

**Carlisia Thompson:** Yeah, we should not... \[laughter\]

**Erik St. Martin:** So you started Splice with Ruby...?

**Matt Aimonetti:** No, we did not, actually.

**Erik St. Martin:** So this is all Go?

**Matt Aimonetti:** Yeah, it's all Go. We did have a little bit of Ruby. The technical stack is interesting... Right now we have desktop clients, we're on mobile, and obviously we have a very big web presence with web APIs. Since the beginning, I made the choice to use Go. At that time I had some experience with Go; I started Go around when it was announced and I was just playing with it for a little while, until people at Heroku were kind of showing me what they were doing with it and kind of helped me understand Go in a better way.

The day I met my co-founder, Steve Martocci, I was giving a talk about seven programming languages in 45 minutes, and I was going through the languages... I was spending a lot of time at that time, and it was Clojure, Scala and Go. Of the seven, these were the ones I was the most interested because I wanted concurrency.

We push more than nine terabytes of data a day, we have a lot of people connected at the same time pushing a lot of data in different formats, we need to do binary processing and all those different things. Even before I started the project, I was looking at languages that would handle those kinds of challenges. My co-founder actually asked me, "If you were to build a startup, what language would you use?" and I said, "Well, it would depend on the project", but I do like the fact that Go is a great language to scale the team. It's easier for me to give a piece of Go code to someone that will come after me and understand what I was trying to do.

With Ruby, for ten years I was struggling to get people to follow the same guidelines, and you could do it so many different ways to create language, but it was not giving me this direction that helps when you scale the team, going from 10 to 20 to 30 to 50 and to 200.

When we started Splice, I decided that we would start with an entire layer of APIs and it would only be written in Go.

\[00:07:50.16\] We started with doing the views in Rails, because it was easier for us at that point. We very quickly ended up with a Rails frontend, talking to a Go API and adding some JavaScript on top of it. That did really work out well. We didn't really want to spend too much time trying to scale the Rails layer, so we switched to Angular 1, and now we're on Angular 2.

So our stack is Angular 2 with TypeScript, talking to Go APIs, and then C\# and Objective-C talking to the same Go APIs, and we are rewriting the client and we're doing a lot of Go stuff at the desktop layer. We're tackling things from a different perspective and it's very exciting. I'm really excited to show more of that in the next few months.

**Erik St. Martin:** You talked about kind of having binary analysis... Are you doing any actual audio processing?

**Matt Aimonetti:** Yeah, we're doing audio conversion, audio processing and basic analysis. We do a lot of binary parsing and decoding at the file format. You can think of it as kind of like a Photoshop file when you save a project, and we're talking about Garageband, Logic, Ableton all these different projects, they save the state into binary format. What we need to do is parse this format, which is not documented, and then create an abstraction layer - what we call an intermediate representation, which will be the same for all the different projects, store those different states in different locations, in database, in memory, on JSON, different types of formats, and then we need to rewrite that format so we can work well with collaborators.

As an example of that, if you're working on a song and you have a link to a file that might be on your D drive or on a different external hard drive, inside of the software everything is linked with a hard link to the absolute path. But if I send you my project, you won't have the same path, so we need to change that to be relative. We also need to do a lot of compression (lossless compression) and deduping, so you don't end up uploading the same gigabyte of audio files every single time you make a save.

So all of that is done in Go, and yesterday we just announced a partnership with Pioneer DJ... Pioneer DJ as a hardware sampler, kind of the old MPC-type sampler, but you can do everything on it, it's Linux-based. What we're doing is we also have our own beat maker that's just a web version of a sequencer, so you can make your beat and you can share it with your friends, and it's really easy for people who don't know how to program music yet.

We're adding an export to this format. So what we're doing is from the web you can download a format that can be loaded with all the samples and all that, and all of that is done in Go. Go is really the main language we're using. I'm actually not sure, because TypeScript also has a lot of lines of code, but I think the most lines of code we have right now is definitely in Go, and every time you use a service, whatever you do, you're going through Go.

**Erik St. Martin:** You haven't had any performance or latency issues with Go?

**Matt Aimonetti:** Latency issues, no. I'm trying to think about the problems we might have had. One time we abused the context and we were not cleaning up our Context properly and we had a memory bloat, which was an interesting problem. We're kind of new to the Context package, which was at that time outside of the standard library. The way it works is you start from the main context, and then you extract a context off of that.

We were adding - I think it was a request ID or user information on that context, and for some reason we were not cleaning that and we kept on adding more information to it, and it was just growing in memory. I think that's honestly the only problem we've had with Go. When it comes to performance, since the beginning we were very careful to stream all the data, so we don't do any memory allocation.

\[00:12:02.21\] Our servers run on about 15-20 megs of RAM right now. So even though we're pushing all this data, a single API process doesn't use more than 20 megs of RAM.

**Erik St. Martin:** Wow.

**Carlisia Thompson:** Impressive.

**Matt Aimonetti:** And to be fair, this is all the work of the Go team, it's not really us doing too much. We're just careful to use the right APIs. And we had really good engineers at the beginning, people like Katrina Owen that really cared about refactoring and thinking through the code and architecting so we could scale the code.

We actually don't really go back to change and maintain our code. That's something that I knew would happen, I was hoping would happen with Go. It's awesome to look at some of my code or some of the code that other people wrote at the beginning and see that it's legacy code but it works super well, and everybody can understand it. We don't have to go back and update it because the version of Go changed or because the library changed.

The fact that we can only focus on design and new features is really freeing us from the maintenance, and the code gardening that you might have to do with other languages, in some cases.

**Erik St. Martin:** Yeah, so that's one of the things I think all of us love when it comes to Go - you can kind of fit the language in your head, and usually when you're looking at a codebase, it's the domain that's stomping you, and not the syntax.

**Matt Aimonetti:** Right.

**Carlisia Thompson:** And not having to update because of syntax changes.

**Erik St. Martin:** Yeah... Remember when Ruby changed the way you indexed the hash? \[laughter\]

**Carlisia Thompson:** I was also remembering when our spec changed from version two to version three, I think... There were a bunch of syntax changes for that package.

**Brian Ketelsen:** Every Ruby update was a breaker.

**Matt Aimonetti:** Yeah. That said, we did have a small issue when we tried Go 1.8. There is a difference in the way URLs have been parsed, and if you start with a /, it adds a .. or something like that, and I think that was the only time since Go 1.0 that I had a problem. But before that, I remember things were changing all the time, and I was so grateful because the Go team had released this Go Fix Tool; every time they would make a change, I could just run the Go Fix Tool and it would go in and update the syntax for me.

**Brian Ketelsen:** So you've been writing Go since way back when you had to use a makefile and include Go's makefile back in the r59 days.

**Matt Aimonetti:** Yeah, when you had to os.r \[\\00:14:34.07\] for the errors... But I was not really doing anything production-ready yet. The first thing I did was to do the \[unintelligible 00:14:44.22\], but it was just a fun way of learning and basically I was blurring an image using the Image package, which was not part of the standard library yet. You set a comment and it would put it back normal, and it was just dealing with lower-level image processing, which was fun because I didn't need to use external libraries.

**Carlisia Thompson:** One thing that I'm always curious with people who run their own business and they're using Go for their software is the hiring. Do you even bother to look for Go developers? Do you make a point in hiring specifically some number of Go developers with experience? Or you truly don't care and just hire good developers who will quickly learn Go...? What's your philosophy?

**Matt Aimonetti:** That's a good question. I don't think we're looking at it that way. We're not really looking for good developers. We're looking for developers who are interested in solving problems, that have expertise, and will be okay and willing to use Go. That comes from the fight that we started pretty early on... We were one of the first companies fully relying on Go, and it was hard to find people that had experience.

\[00:16:02.18\] It's kind of a mix, but overall my VP of engineering, Juan Pablo Buritica, is looking at it from a human perspective, like "Is this person a good fit for the company? Will she be challenged by what we're bringing to the table, and will they be able to develop themselves through our technical choices?" And we're trying to make things very clear and explicit, because Go is not for everyone.

Recently I sent a tweet and I was asking "What is the first name you encountered when you started using Go, that really prevented you from going forward?" It was interesting to see... I got probably 200 responses and a lot of them were not understanding GOPATH, where you put your files, what do you do with it.

The other thing was "The syntax just bothers me. It feels like it's from back in the '70s or something like that" and "I don't understand interfaces. This is not a good fit for me." We want to make sure when we hire that our values of being explicit over implicit, being a bit more verbose but easy to understand that performance matters to us are very clear, so that the candidates understand what they would be doing with us. Also, we understand if it's gonna be a good fit from an engineering culture perspective.

**Carlisia Thompson:** How do you assess that, if I may ask? Maybe I'm getting too detailed here, but at the same time I think it's interesting as an employer how you assess that a person would be comfortable with the features of the language that you're using if they haven't been exposed to it.

**Matt Aimonetti:** It's always hard, an interview process is a really hard thing to go through for both sides. What we ask our candidates to do is to take a small test in frontend and backend. Basically, we send them the test in advance, and it's a challenge. In the case of Go, it's actually something I released as a Go challenge a while back, like "Here's a binary file that contains some information." It's kind of a joke, it's an old beta made on this old hardware device that's gone, and now we just recover the file and we recover the text file that represents the sequencing of the beat. Can you decode it and make the test pass?

By asking them to do that, which is not a really hard problem and it's not really about solving it, it's about letting them write some code, and us having a discussion after the fact, and talk about the small things. We talk about it, and it's usually pretty clear what people are excited about. I think it's pretty simple to see for instance things like, "Oh, well, this looks very weird to me. I don't like using for loop." And then you can have a discussion, like "Why not?" "Oh, I'm used to using an iterator in C\# or in Ruby or in Python. Why do you only use for in this context?" and we can have a discussion about it.

We can see if they jump onto refactoring and abstracting everything into small methods right away and we can have a discussion about it, and you can very quickly go and understand the values of an engineer by understanding the background and what they care about. So it's not perfect, but I'm trying to be as explicit as I can and we can have a discussion about it. But if they know we're using Go, they already kind of know the dogma behind it.

**Carlisia Thompson:** That's a good explanation, I can see that.

**Erik St. Martin:** So the goal is really just to discuss how they went about things, not necessarily grading their ability in Go, because the assumption is that a lot of people are taking the test; this may be their first foray into using Go.

**Matt Aimonetti:** \[00:19:52.29\] Yes, absolutely. And even for people who know how to write Go, the test is not designed to see if they can write Go, because we believe we can help them learn that; we believe everybody can learn Go. We also use Go for QA. We have QA engineers who don't really have a great engineering background; they're coming in as QA people with no experience or little experience with programming, and all the QA is done in Go. We use Go as a language that drives web drivers for the frontend and also drive our automation for the clients, and all those tests are written in Go. The reason we do that is because Go being a fast compile language and having good tooling, it's easier for those people to write code that gets checked right away, instead of having to wait until the entire test suite runs. That's something that's been very valuable.

We use [Visual Studio Code](https://code.visualstudio.com/), for instance, with the Go plugin, and as they write, if they make a syntax error, they will see it right away. There's also code completion coming in, and all those different things. So we have experience helping developers learn Go itself. We're not really looking for someone who's already an expert. If we do find someone, that's amazing, but we're looking for people who can solve a problem and who can learn. If you don't know Go, it's actually more exciting for me to do an interview with someone that comes from a different language, and in some cases we tell them "Take the test in your own language, and then we can try to put it together, or we can talk about it that way."

**Erik St. Martin:** That's awesome. So speaking of transitioning people into the language, you wrote an article about it a year ago, "Go is for everyone" - I wanna talk about that a little bit, but before we do that, let's take our sponsor break.

**Break:** \[00:21:36.19\]

**Erik St. Martin:** Alright, we are back, talking to Matt Aimonetti. Before the sponsored break I mentioned you had written an article about "Go is for everyone", and you kind of talked a little bit about how based on the creators of the language and the early adopters, how we kind of made a great sandbox for all of us who may be experienced programmers to play in, but we need to do a better job of opening it up to more beginners, people who may not have 5+ years of programming experience.

**Matt Aimonetti:** Yeah, absolutely, that's something that's extremely important to me, and I think also to the Go team. We heard about that in the last GopherCons, where if we want our community to grow, if we want our community to be inclusive, we need to be welcoming to everybody, and I think it starts by people who might not be yet familiar with Go and we should not try to pretend we're better thank everybody else because we're writing Go code.

I think Go is actually amazing for people who are starting. I do believe it's an amazing language for people who are learning how to code. Last week you had my friend [Ron Evans](https://twitter.com/deadprogram) on the show, and Ron and I love to work on hardware; he's the one who really gets me always the latest toys and gets me to write a bunch of code with my kids, to write robots, and one thing we were talking about is Blockly. Blockly is a project from Google that's kind of like Scratch; it's basically a concept of visual blocks you put together.

\[00:23:52.12\] What Ron and I were talking about last week was "Hey, what we want to do is do this and export that to Go, so people can learn visually how to code Go." We believe Go is a really good language for people who are just starting, because even though a lot of people recommend languages like JavaScript, Ruby or Python to start, those languages are hard because you have so many different ways of doing the same thing, and you also don't have someone that just tells you you're actually doing it wrong here, the syntax is off... And most of the issues you're having when you start programming are related to syntax. Having a compiler that gives you that feedback right away is extremely useful.

**Erik St. Martin:** Yeah, I'd agree dynamic languages -- we talk about how easy they are, but there's a lot of knowledge to just setup, and then runtime issues, things that should have been caught by a compiler but aren't, and they're caught at runtime and it confuses people.

I think in my early Go days I didn't think it was a very beginner-oriented language, but same as you, we started in the makefile days and things like that. Nowadays, with the Go tools and everything, I think it's a prime candidate and I love the [Gobot](https://gobot.io/) stuff, especially. I thought Arduino made hardware more approachable to people, but I don't think it holds a candle to how easy using Gobot can be in comparison.

**Matt Aimonetti:** Right. And going back to the blog post, I think what I was trying to say is that we need to change this image of us being the experts and you need to be an expert to use Go. I think it is true that it was designed and it is used by a lot of experienced people, and they helped shape the language in a way that we're not making the same mistakes that they had to go through... But it doesn't mean that you have to be an expert to start writing Go code. I actually think writing Go code right at the beginning is giving you a good base because the language is simple, and then you can go deeper into features that don't exist in Go, and you can understand things that you don't understand.

But if you already know Go, you can actually take what you know - with the exception of typing, which is slightly different with interfaces, but you can take that and you can transpose it to any other languages and they would have the same features, or close to them. It's much harder to go from another language - from a language like Ruby to a language like C. The delta is much, much greater. So I find that Go is a good compromise between things, and we as a community need to be very careful about how we talk about our language and how we talk about features and how we talk about the details of it.

Focusing always on concurrency to me is a bit of a mistake. It's true that for a lot of us it's very important, without it we might not be using Go, but you make it sound like you should only use Go if you care about concurrency. And going back to the Blockly example, I was talking with [Jana](https://twitter.com/rakyll) from the Go team and she was really excited about that idea and she was actually saying "Yeah, but we don't even need to have specific blogs for concurrency; we don't need to show Channels and Select and all those different things... We can start with just the basics of conditionals and methods and functions, and that would be a very good start for anybody who's learning how to program."

**Carlisia Thompson:** I couldn't agree with that more. I wanna say that you did a really good job with that blog post on Medium entitled [Go is for everyone](https://medium.com/@mattetti/go-is-for-everyone-b4f84be04c43), and I think you're completely right. I didn't come to Go at the very beginning; when I came I think it was very stable already, and my impression is that the language is very simple, the syntax is very simple. The set of keywords is so small... It's very easy to learn, and even to memorize those keywords, so it's easy to use.

\[00:27:59.02\] I completely agree with you, you can write back-to-back programs without using concurrency. You can even ignore interfaces, you get totally functional programs without using interfaces. So you can use just the basics of Go to write completely functional programs, and then as you develop more, you can start incorporating those more advanced features.

**Matt Aimonetti:** Yeah, and to be fair, looking at the code we have in production, I think last time I checked we had like 450-500 web services, endpoints. Most of them are extremely simple, in the sense of there's not much complexity. There are a few places where we do use interfaces like the abstraction around storage and a few things like that, but most of the code we write on a day-to-day basis has to be simple. When we do go through the code review process - we do a mix of pairing, which we don't do too much, we only do it when it's a hard problem, but everything gets reviewed by at least two people within the company. When you go through that, everybody is focusing on "Is it clear code? Is it simple for anybody to understand it? Is it following the normal conventions?" and that usually means "Don't do anything complicated." Every time we see someone using a goroutine we question "Why are you doing that? Maybe there's a better way."

Talking with people within the Docker team, I know that it's been one of their pain points... They overused it in some cases and it makes it hard for them now to maintain their own code. We're trying to keep it as simple as we can.

**Erik St. Martin:** I'm actually kind of curious... In the audio processing world, a lot of stuff is in C. Are you doing a lot of cgo, or are you writing stuff in Go?

**Matt Aimonetti:** It's a mix. I started this library called Go Audio (which is on GitHub) and I'm creating a bunch of small packages that I'm extracting from the work we're doing at Splice with stuff I'm doing on the side to open up the world of audio to Go.

There are two ways of approaching audio for most companies - one is to use Python and the other one is to use C. C is used for anything that's real-time audio. If you use an audio plugin (a synthesizer) or an effect, that is usually written in C++. There's an abstraction layer for Objective-C that people might use if they want to write specific Mac or iOS components (which are plugins), but most people write them in C++ so they can cross-compile them between Mac and Windows, and they might just wrap them.

Python is used a lot for audio analysis processing, and different things like that that are offline, and a lot of data scientists really like to use Python for that. That's the language they know, and they have a lot of great libraries that were written in C that are available in Python.

What I'm trying to do is start building a set of libraries that can be used for people doing audio in Go. Go is much faster than Python, especially for the kind of things we're doing. It's also much easier to write, and it feels nicer as an engineer, as a developer. Memory is really the big thing. If you do real-time audio, you need to be very careful about not blocking. A garbage collector in Go is good enough.

To give you a preview of what we're working on, I wrote a demo synthesizer that connects to your audio software - like Logic or Live - in Go. We did use a bit of cgo to do the bridge, but the synthesizer works very well. I didn't really hit any of the limitations of the language due to the garbage collector; there's a buffer you process, and Go is really giving you a lot of tools.

\[00:32:01.03\] It gets a bit tricky because of the typing. In audio, basically every single sample -- if you take a sound... Let's say I sing a word, and within this word, within one second, when you do a recording, you will take a sample of the volume, the amplitude of the sound every x amount of microseconds or milliseconds. In the case of CD quality, you will do that 44,000 times per second. Now, each sample gets represented as an integer or as a float. The problem is the depth of the samples or the range of the samples will depend on how you do it. So you might end up having a file that was recorded at 44,000, 16-bit and you might need to play it at 48, or you might have stereo and mono, and now you have to actually transcode all those things between those different values. Go doesn't make it easy for us to have an interface that allows us to say "Okay, I'm writing this equalizer and I would accept any type of numbers."

Those are some of the challenges, and what I've been trying to work on with a small group of passionate people is can we create some sort of interfaces - and not just in the sense of Go interfaces, but layers of code, of abstraction that allows us to write a bunch of things and chain them together in a way that would be both idiomatic and very efficient for programmers.

**Erik St. Martin:** When you're talking about the sampling, you're talking about the pulse-code modulation?

**Matt Aimonetti:** Yes, the PCM data, absolutely.

**Erik St. Martin:** So is that primarily what you work in? You try to use PCM to represent the different audio channels?

**Matt Aimonetti:** Yeah, so we're not getting real-time audio, right? People working on their project - they save them, we get the information coming in to us as it gets available, so we need to do analysis and we need to do compression on that information. We work offline, and that is the advantage - we don't really need real-time. We've been able to do real-time audio processing with Go, but we're still working on it. So far I haven't seen anything that would make me think we cannot do it, but at Splice our focus is really offline.

We have more than a million samples - I think that we're coming close to two million samples that are classified, organized, and you can search... And we need to be able to understand those sounds, and we need to be able to transform them, we need to be able to process them. All that is done in Go, and we work at the PCM data. So even if you use a compression layer, you would then decompress and process the PCM data (which is the pulse-code modulation information) and usually what you do is you transform that using something like FFT to get a frequency representation, and then you can process that and then you go back to the PCM data. But I feel like everybody's gonna get bored... Sorry. \[laughs\]

**Erik St. Martin:** It's really interesting to me, because right now we do video processing, but we do it in C++, and then all this kind of supporting stuff is Go... And one thing I've always been curious about is trying to do video processing in Go, but we leverage real-time threads heavily, and things like that, and we get into OS lock thread...

**Matt Aimonetti:** What do you mean by real-time? Do you do video compression and processing in real-time?

**Erik St. Martin:** Yeah, so I actually work for Comcast, and we do real-time cable streaming, so multiplexing channels together into one mpeg stream, basically.

**Matt Aimonetti:** Yeah, so it gets interesting, because the advantage of Go in my case is you can actually multiplex the work by having different goroutines take different parts of the work, if it can be parallelized. The challenge really, from what I've seen, is getting the right performance, and the type conversion has been costly, and then the tooling is missing. So that's why I'm writing all these basic libraries... I wrote a wav encoder and decoder, I wrote an aif encoder and decoder, and I'm writing those transforms that you do, like the low-pass filter - all those different things that are not really hard to write, but they don't exist. And when you have to do everything from scratch, it's a lot of work.

\[00:36:16.23\] The encoding of a wav file, for instance, \[unintelligible 00:36:19.07\] between 16-bit and 24-bit is actually very different, and you need to be able to support it. Most people just want to play with it and they will just care about 16-bit, but if you want to do something serious, you need to be able to handle 24 and 32, which means that someone has to write and someone release it, and when you don't have anything in the standard library and when you don't have any tools or any libraries, you don't end up using the language.

So while I don't think Go is ready yet to be able to write any multimedia stuff from scratch, if your scope is limited and if you want to really understand things, it's a great way. For me, a lot of the C libraries I've been using for years are black box, I don't really understand them, and going through this process forces me to go deeper in the format, and that's something I enjoy and I do that in my free time most of the time.

Honestly, there's no reason you could not do it for video. Now, the performance might not be as good... I know there was someone I met who was working on JPEG 2000 for video - I think it was JPEC 2000 for video... I forget what the name of the format is, but he was trying to do a real-time decoder of a very complex algorithm, and the people who write that in C usually even do assembly optimizations to get better performance, which we can also do in Go, by the way. But Go is not designed for that, or is not optimized for that. You don't really get to use some of the features you could at the CPU level the same way you would do with C.

**Erik St. Martin:** Yeah, and that's the thought... It's probably for a while gonna take a bridge between Go and C kind of handing off the real-time bits to C and having a lot of the support code in Go just to kind of make it easier to maintain. But it's interesting, the progression of a language, because when all of us started, there were a lot of basics missing as far as libraries were concerned... Just interacting with things that we were used to interacting with... You know, a Redis library, and things like that. But now I think we've crossed that barrier and we're now into more the complex space.

People have been doing audio and video processing in C and C++ for probably as long as I've been alive, so all that stuff is really kind of stabilized and people have had time to optimize it. We're just scratching the surface of that stuff and data science libraries and things like that... But I think we're starting to see people start to work on these types of things, at least as passion projects.

**Matt Aimonetti:** Right. I think that's the challenging part. You need people who are motivated enough to start writing those libraries, so other people will come and add more to it. It's easy to look at like "Well, there's nothing, so I'm not gonna bother", but there's a lot of potential, and I think if we want the language to evolve, we need to look at further than what Google is using Go for.

Going back to my blog post about [Go is for everyone](https://medium.com/@mattetti/go-is-for-everyone-b4f84be04c43), I think it's time for the Go team to kind of let go a bit more, and give more freedom for people to work on the side of the language. I know there are some discussions... We had long discussions on different issues \[unintelligible 00:39:46.05\] I would love to have people who come and are interested in media processing, and they want to do audio and video. We already have a good package for images, but what if we were doing something for other formats? I don't expect that to be the main use case for Go, but I love being able to play with my Raspberry Pi and do image processing on it.

\[00:40:08.26\] I would love to be able to do very basic things related to audio and video in Go too, so I don't have to go back to C for those kinds of things. But we need people to come in and say, "Oh, I'm interested... I'm gonna learn those things, and it might not be perfect, but I'm gonna contribute something."

I see your question on the GoTimeFM about onset detection and a lot of the music analysis tools that might be available for Go... And no, there are not a lot of really good tools yet, but they also don't exist in other languages, to be honest. They do exist in C, and some of them exist in Python, and they are not really performant. What's interesting is to learn those things and pour them into Go and understand how they fit the automatic way.

**Brian Ketelsen:** I saw a couple weeks ago now on Twitter - this is changing the subject a little bit... But you mentioned that you had done a prison outreach - was that programming related?

**Matt Aimonetti:** Yeah, it was a mix. It's entrepreneurship related. This is a project, and if you're in the U.S., Defy Entries, which is the group organizing those events, is presenting 23 prisons. What they do is they organize trips to go to prison for an entire day and help coach people who are incarcerated and want to become entrepreneurs. Those entrepreneurs in formation, in training, they're called EIT (Entrepreneurs In Training) and they have a desire to start a business.

Usually they're not trying to start a video compression company to help Comcast, right? They have experience in different businesses... It might be taking care of animals, or gardening, or running a business with associates that sell different types of probably Lego products, and they're trying to convert this expertise that they have into a job that will let them stay out of prison and really move forward and provide for the family.

I came at the end of the program where were doing the pitch competition, so everybody would pitch their ideas, and there was a series of entrepreneurs and VCs that would give them feedback and pick the best projects, and then they would get funded once they would get out.

It was a very interesting experience. I explained in the blog post - I wrote a blog post about it... After the U.S. elections in November things have been a bit rough for me, being a foreigner myself, being Hispanic, being married to a Latina, having kids here, seeing the racism and seeing how we were not really welcome anymore, and even though we're Americans, we didn't feel like we're Americans anymore.

I was really questioning a lot of things and I was losing hope, and going to prison kind of changed a lot of things for me, because I met people who've been in prison for 5, 10, 20 years, who might not get out for 5, 10, 20 years, and those people had more hope... And let's be honest, they were screwed by the system. There's a lot research on how come so many brown people end up in jail, and 13th (a documentary on Netflix) is really good at explaining those things.

You see those people that didn't have the chance to be successful, they didn't have the chances I had, they are not privileged like I am... They end up in jail and they're so motivated, they're so excited about what they're gonna do, and they're so happy that I just spend a bit of my time to come see them... I realize it was really unfair for me to give up hope.

\[00:44:02.11\] When I see people who have been screwed by the system and are still stuck, and they dream to be able to go out and build a donut shop, and a project of cleaning up hospitals - all those different ideas, and they're so motivated to do it, and they're so prepared... They're often more prepared than a lot of other entrepreneurs I work with, and they're sometimes more prepared than me.

Seeing that they were so kind and compassionate with other inmates, other EITs - that was something I did not expect. You take any engineers, you take any VCs or any entrepreneurs, you put them in a room and you tell "Okay, we're gonna do a contest, and whoever wins, wins the prize", I can tell you it's not gonna go very well. You're gonna hear a lot of comments, and things that are unfair. These guys were amazing; they were supporting each other. I didn't see people making comments or faces, and it was like "Wow... If these guys can really believe in what they believe in, and I have everything on my side... There's no reason I cannot be hopeful, even though I still don't like the situation we live in, but I can help as much as I can, and I can also look at it from a more positive perspective, so I can help more people by being positive.

**Erik St. Martin:** I think it's really interesting too, because a lot of people end up there, and especially people who are there for a very long time, and it ends up being like university for criminals, where they come out and there's nothing else for them to do, and the only way to make money tends to be to resort back to that. So to see people trying to put so much effort into making a plan for when they get out, and do these things to better their lives, it's fantastic.

**Matt Aimonetti:** When it comes to stats, I think it was something between 75%-85% of inmates coming out of jail go back to jail. But with this program - and there was a full graduation program, they got a master from a real university, and everything else... They had to work really hard for six months. There's only 3% of the inmates coming back after the fact, which is really amazing, and proves that we're really doing something wrong with our prison system.

It's also the fact that it's very clear when you go to prison that the system is unfair. It's very clear that if you're a brown person, you're way more likely to end up in jail than if you're not. They were asking questions and they were trying to show that to people... Like, you ended up in jail, and what you did is wrong, and nobody will say it was right, but you're also set up to end up there, and there's nobody that gives you a chance to come out of it and do something. I think that is the part that makes a big difference, because not all of them will be able to be successful with their startups, but they've seen that unlike the rest of their life, people now trust them, believe in them and give them hope that they will be able to be successful.

**Erik St. Martin:** Is it just that one prison that does that, or are these events held kind of around the country?

**Matt Aimonetti:** It's all around the country, 23 prisons. [Defy Ventures](https://defyventures.org/) is the name of the organization, and the founder is this amazing woman who's been working on that project for 20 years now, and she's really fighting to give a second chance... It's not even giving a second chance, it's giving them the tools they need to be successful, because those people are very talented people. They were just not given the chance to do it.

Anybody can go...They have different levels. It can be just like helping them practice their pitch or coaching... They teach programming to people who are interested in learning how to program. But it's extremely hard... What I realized going to prison - I knew it would be hard and everything else, but they have no access to internet, ever. No access. If you want to learn how to program without internet, it's actually really, really hard. It's only with books. You also have no coffee, which... I should have thought about that, but there is no coffee, ever, in prison. That's something that surprised me a little bit, and makes a lot of sense. But imagine a programmer without internet and coffee, trying to be better. That doesn't really help.

\[00:48:24.08\] So if you can find some of your time... And this is not about going and saving those poor people in jail, this is about you learning a lot about yourself, and also giving them a chance that maybe you got from someone else when you were a kid.

**Brian Ketelsen:** That sounds like an amazing program.

**Matt Aimonetti:** Then you should absolutely give it a try.

**Erik St. Martin:** Yeah, I'd love to find one nearby.

**Brian Ketelsen:** I'm on the website.

**Matt Aimonetti:** Yeah, I think it's [defyventures.org](https://defyventures.org/take-action/volunteer/be-a-mentor/) It's linked also in my blog post that I will give you a link for. It's definitely a great program. One of my concerns... I was worried that it was going to displace and feel like it's the rich people saving the poor people, and there was a little bit of that, but really not much. Overall, it was more about being equals and knowing that we're privileged people and they are not, and we need to share a little bit of what we have with them and give them a chance.

Both the programming world, but also the world of startups and entrepreneurship has a lot to do with understanding the rules of the game. It's really a game. When you program, you know what works and what doesn't work. It's kind of a binary thing. But if you come from outside of the world, if nobody taught you the rules, it makes it pretty hard for you to be successful.

**Erik St. Martin:** And the penalties for failure are extreme, even on basic things. Getting into running my own business and accounting and stuff like that... The number of times I got dinged by the IRS or state tax places for some form I didn't even know existed needed to be filed by some date, and things like that... It's real, and it can knock people off the playing board pretty quickly, if you're not familiar at least with the basics of how to get a running start.

**Matt Aimonetti:** Yeah, I was actually shocked... I met a gentleman who was really interesting, and I was asking him "When do you get out? I'm really excited about your project", and he was like "Well, I took 23 years." I'm like "Why? What did you do?" He used to be in a gang, and he got caught, I think it was for drug trafficking. He did his years and then came out, and he got then caught with a gun. He didn't use the gun, he didn't do anything, it was just for protection, but he had a gun on him, and that gave him 23 years in prison. To me that was kind of insane, because we were also talking about things like DUI.

We had a lot of white people that were there, and they were asked "When was the last time you had a DUI, even though you were not caught?" and most of everybody - if not everybody - admitted they drove under the influence within the last year. But if you get caught twice, and especially if you're a minority, you wind up in jail for many years, which means that your kids will be raised without their parents, which means they will probably do the same thing.

This is how the system is really broken. And again, Netflix has a really great documentary called 13th, that explains a lot of that. We need to accept that's the way our system is; we need to change it, but it will take some time. In the meantime, you have a choice to do something wherever you are, and I think that's what's important. I think as programmers we live in a world of abstraction, and even here, we say we're at the same table and we're having a discussion, but we're not. Going through this prison experience and not having a cell phone for 12 hours, and being with people where they tell me... I don't remember the last time I had such a deep conversation with someone... It's insane. I'm a parent, I'm married, I have kids... I realize now it's probably been ten years since I had a deep relationship with people without thinking about all the things that came through my phone, my computer, my schedule...

\[00:52:06.23\] We're losing that, and as engineers I think we're even more disconnected, because we add even more abstraction layers to things. That's why it's so hard to work with other engineers, because we know how to deal with code, but the communication and the social aspect is not being taught, and often it's not even being valued within our own community. I sound a little bit preachy on that one, sorry about that.

**Brian Ketelsen:** No, preach it. Everybody's just agreeing in silence.

**Erik St. Martin:** Yeah, I'm just kind of sitting here, thinking to myself... This is something I really would like to get involved in.

**Matt Aimonetti:** And you don't have to go to prison, either... It's not for everyone. By the way, men and women are welcome, and there are men and women jails, just to be clear. There are some rules. You cannot wear some colors, like blue and yellow and orange, and women cannot wear bras with wires... There's a few things like that, but it's really open to everyone, and it's also a very intense experience.

There are other projects that exist if you're interested in helping... Nifty is another one... It's a program that teaches both programming and entrepreneurship. It's a bit more entrepreneurship, but it's for kids. Therefore, if you know how to run a project, you will be able to help with that. You can participate in local events that you have.

I think the first step is for us to reconnect as human beings. I think most of us - and I know I am - an introvert, and it makes it hard. I don't really want to go and hang out too much with people I don't know, but doing that also teaches you a lot about yourself, and when you come back to your code, you have a different perspective. And when you review code from other people and when you work with other people, you have a different perspective on coding, project, communication, and your priorities are also changing.

**Erik St. Martin:** Yeah, this is great. I think we've only got a few minutes left. Did anybody wanna chat about any projects or news that have come across your email or social media, that you found interesting?

**Matt Aimonetti:** Just before we jump on to that, I actually have one suggestion. We just started doing something at Splice last quarter, and every quarter we give a civic day to people. That civic day is a day off where you go and you help your community. It can be political or not, but then you have to come back and discuss it with the team during our weekly Town Hall. I think that's something you might want to bring up to your team, especially because in the U.S. a lot of us work for startups, and vacation time is kind of this weird concept where you might have unlimited vacation time, which means no vacation time. \[laughter\] Or people don't really wanna take a vacation day to go help other people, even though it feels good.

I think you might want to bring that up to the different people, to do it... We were very receptive to it, and I think that's something that a lot of leaders would agree is really helpful, and it brings the morale up and it helps things. So if you have a hard time finding time in your own schedule to do it, go talk to your boss and potentially try to get a day off... Or actually do it with the team; you can also do a project with everybody.

**Carlisia Thompson:** That sounds amazing. Because when you give and when you volunteer, or you help somebody in any way, you feel great, and it's so great to go back to work... Now I feel great about myself, because I did something good. And if the whole team is having that experience, it must be amazing.

**Erik St. Martin:** And schools... Schools would be another great place to volunteer time.

**Brian Ketelsen:** I love to do the Great American Teach-In every year. That's my favorite things to do, favorite day of the year.

**Matt Aimonetti:** What is it? Can you tell us more?

**Brian Ketelsen:** \[00:55:55.11\] The Great American Teach-In. I don't know if they do it everywhere, but in the schools around here in Florida they invite parents to come in and teach classes for the day about the things you do at work. Last year I brought in a AR.Drone and we programmed it with Gobot, and the kids (second grade kids) programmed it to fly around the room and then stop in the center of the room. They were just blown away, they were amazed by the fact that they could control this drone with their own typing. It's really fun, it's a great program for kids to get experience in things that they might not normally see.

**Matt Aimonetti:** That sounds awesome.

**Carlisia Thompson:** It does... Wow.

**Erik St. Martin:** I don't think it's a national thing, I think it is a local thing. It might even only be the county, but...

**Brian Ketelsen:** Well, then they shouldn't call it the Great American Teach-In... \[laughter\]

**Matt Aimonetti:** Yeah, I know in California you need to go through a certain process to be able to interact with kids at school. Even though I'm a parent and I have my kids in school, I need to go once a year, I need to do the special training before I can even interact with other kids.

**Erik St. Martin:** Oh, wow... Yeah, anytime you put some sort of barrier like that, it makes it harder for people to get involved.

**Matt Aimonetti:** But it might keep some kids safe at the same time, so it's always a hard balance, right?

**Erik St. Martin:** Yeah, that's very true.

**Brian Ketelsen:** Yeah, we have to do background checks before we can go to the school, and that takes weeks. So it's not just a simple process here either. So why don't we move on to our interesting news? Erik, you were mentioning that a moment ago.

I saw the coolest video -- I think I saw it on Twitter... It's by Scott Lobdell. I don't know where Scott Lobdell works, but he built a Blimp that has autopilot that's controlled by a Raspberry Pi in Go.

**Erik St. Martin:** Nice!

**Brian Ketelsen:** The video was amazing, he set up some GPS waypoints in the Raspberry Pi and programmed the Blimp to try to navigate four or five waypoints. We'll put the [link](http://scottlobdell.me/2017/03/experimental-blimp-autopilot-test-flight-2/) to that in the show notes. It's really cool to watch the video and even better to read the article about how he evolved his code to learn more about flight and controlling that, and the AI involved in predicting how things are going to work, with a completely autonomous drone working from Go.

**Matt Aimonetti:** Did he do that in his free time?

**Brian Ketelsen:** I don't know the answer to that.

**Erik St. Martin:** Or was it a school project, or something like that?

**Brian Ketelsen:** He was an adult, and I have this feeling that they were related in some way to perhaps the work that they did, but I don't know.

**Matt Aimonetti:** I'm very envious right now.

**Erik St. Martin:** Right...?

**Brian Ketelsen:** It's a really cool video and a great read.

**Erik St. Martin:** Along the same lines of Go in hardware, have you guys seen the [Gokrazy](https://gokrazy.org/) project?

**Brian Ketelsen:** Yes!

**Erik St. Martin:** Have you seen it, Matt?

**Matt Aimonetti:** No, I haven't.

**Erik St. Martin:** Gokrazy is apparently an all Go userland for the Raspberry Pi.

**Carlisia Thompson:** What's a userland?

**Erik St. Martin:** So you have things that run basically in kernel space, which is the operating system itself... The things that you normally write, the everyday applications that run on top of the operating system are really userland. So it basically gets rid of a lot of C applications and some of the interactions with the kernel, and it's basically all Go.

**Matt Aimonetti:** That's interesting. So what's the goal...? First, I had a really hard time googling it... Somebody sent me the link. It's Gokrazy...

**Brian Ketelsen:** Right.

**Matt Aimonetti:** But what's the purpose of it? Why would you want to do that? Besides "Go is awesome" and you want to use it everywhere...

**Brian Ketelsen:** That may be it...

**Erik St. Martin:** \[00:59:45.14\] I think the purpose of it is really just to have a trimmed down operating system for the Raspberry Pi that only runs Go applications. I think they're marketing it as a security thing, just because of the nature of buffer overflows and things like that in C.

**Matt Aimonetti:** Right. It looks like they also have a web interface on top of it, so instead of doing system calls, we can make HTTP calls.

**Erik St. Martin:** Right. It seems interesting for doing home projects, where you want to write the application in Go but deploy it to your Raspberry Pi without necessarily using the Raspberry Pi as a Linux device. I didn't get to play with it yet, but it looks cool

**Matt Aimonetti:** Yeah, I'm excited.

**Brian Ketelsen:** It's on my "Someday..." list.

**Erik St. Martin:** Right...? It's on my open tabs, where I have like 30 of them, like "Look at this later..." And then they graduate from -- I don't know whether it's "graduate", they probably demote from there into bookmarks, which sit there for... I think once a year I have to clean them all out, and I'm like "Man, why did I never look at those?"

**Carlisia Thompson:** I wanna mention Matt's [Gobot Camp book](http://www.golangbootcamp.com/), which is online and free. We didn't talk about it, but I wanted to make sure we mentioned it. I actually used it to learn Go when I was starting out, so thank you, Matt!

**Matt Aimonetti:** And it's open source... You're welcome. It's open source, it's also on GitHub, so if you add any items to it, if you want to make some changes, please feel free to send pull requests. If you're interested in helping me maintain it, I would also really welcome maintainers, since I don't have a lot of free time, and it looks like I'm gonna have to play with Gokrazy now, so I'm gonna have even less free time. \[laughter\]

**Brian Ketelsen:** That's awesome. I should look at that and see if there's any of the training materials that I've written over the last year that would be a good fit in there. I've got just tons of training material, so I'll definitely go check that out.

**Matt Aimonetti:** Awesome!

**Erik St. Martin:** One of my favorite things about the Gokrazy thing is that the tools that they use for you to do on-device debugging, where you actually need to SSH in, is called Break Glass... \[laughter\]

**Brian Ketelsen:** In case of emergency. There was one last interesting Go project that I wanted to mention, because this one has caught me several times, and I'm surprised nobody had thought of this - including myself - before. The Twitch team at GitHub.com/TwitchTV released a vendoring project for binaries.

I can think of dozens of applications that have binary helpers, and maybe the biggest one I can think of is Hugo, but there's also things like the ProtoGen compiler and other tools that you might need, especially in Goa, in Ponzu... A lot of the apps that I use have a binary component to them, and when you have a project that's versioned, it's silly that you don't also have the binary with it that's versioned, too.

This tool is called [Retool](https://github.com/twitchtv/retool), at TwitchTV GitHub, and it allows you to vendor basically your binary helper applications that go along with the app you're building. That's a brilliant idea.

**Erik St. Martin:** That's interesting. I wonder how that works for different operating systems and architectures, because you might need a different binary.

**Brian Ketelsen:** They allow you to vendor the source code or the binaries. They've got that covered.

**Erik St. Martin:** Oh, that's cool. I'll have to look at that.

**Matt Aimonetti:** Yeah, speaking of Twitch, I do believe they also do some video processing in Go... Not too much, but I believe they do some.

**Erik St. Martin:** That would be interesting. I know a lot of their chat stuff and I think some of the download stuff - they're doing a bunch of stuff in Go. I didn't know they were doing video processing in Go.

**Matt Aimonetti:** I think they're doing some of it, yeah. And I think -- it might not be Comcast... There was another company who actually wrote an mpeg for a decoder in Go. I will have to find it and I'll send it to you guys once I find it.

\[01:03:48.18\] I know when we discuss about video stuff, there was another company doing video processing in Go. It was pretty basic, but it looks like some other companies are working on it, too.

**Brian Ketelsen:** Nice.

**Erik St. Martin:** Yeah, and I've seen some mpeg transport stream libraries and stuff like that, like MPEG-DASH and HLS... I've seen some of that stuff in Go. I wanna say I saw the mpeg library, too... That's quite possible it came out of Comcast, too. \[laughter\] There are so many different groups of people working on tons of things at one time...

So did anybody else have any other projects they wanna talk about before we move into \#FreeSoftwareFriday?

**Brian Ketelsen:** No.

**Carlisia Thompson:** No.

**Matt Aimonetti:** No.

**Erik St. Martin:** Okay. Matt, if you're not familiar with this, every week we do a thing called \#FreeSoftwareFriday. Basically, we just give a shout out to a project or a maintainer of a project that makes our lives easier. It does not have to be in Go. It's just our way to support and give recognition to people who make our lives easier, because they may not hear it every day. They may just get issues.

If you have that anybody in mind, you're welcome to participate; if not, that's fine, too. Anybody have a project maintainer they wanna give a shout out to?

**Brian Ketelsen:** I'd like to give a shout out to [GitLab](https://gitlab.com/), who is first of all acquiring everybody under the sun - first Mattermost and now Gitter - but still maintaining a very decent alternative to GitHub that you can host yourself, and keeping a powerful community edition of it completely open source. I did a GitLab install this week and I really enjoyed it. I was surprised by just how much is in that GitLab install, so thank you to the GitLab team.

**Erik St. Martin:** It's quite surprising how much functionality is in GitLab.

**Brian Ketelsen:** They have everything: they've got CI, they've got chat, they've got Git, they've got GitLab Pages now... Everything you would need to run your own version of all of the tools that we're using in GitHub, and CI and all of that. Kind of nice.

**Erik St. Martin:** And how about you, Carlisia?

**Carlisia Thompson:** I don't have one today.

**Erik St. Martin:** Okay. And Matt, did you have anybody?

**Matt Aimonetti:** Yeah, I do... I'd like to thank [Ramya Rao](https://twitter.com/ramyanexus); she's the maintainer of the Visual Studio Code Go plugin. We had a Go survey the other day that came back, and VS Code is actually the second most editor after Vim for Go developers. She is not a Gopher; she only started learning Go when she took over the project, and she doesn't even work full-time on it. I think it's 20% time on Microsoft, and she's been doing an amazing job, adding a lot of features and not getting the support of the community that she deserves.

I didn't really know she was the only one working on it until I contacted them and I realized, "Wow, she only spent a bit of her own free time making this Go extension better." And she added so many things... The debugger is better, you can generate tests for a function of one entire file, she's been working with different people to implement the right tools... And besides the fact that she's amazing and she's doing a really great job, it would be really good if the community and especially the people using VS Code are contributing, helping, doing triage on the issues, and contributing to the discussions about what's valuable to them.

**Brian Ketelsen:** It's interesting that you bring that up, because I got sucked down this rabbit hole last night - as I often do - and I was playing with writing my own editor for Go, and I ended up on the Monaco editor open source page where I found -- I think it was your issue about Go language server support from Sourcegraph for Visual Studio Code. And then I thought, "Oh, that's right, I haven't really looked at that Go language server yet." So the next you know I'm cloning it, and the next thing you know I'm thinking about how to add auto-completion, and thinking about a pull request... An hour or two later I had a pretty decent Go editor built in a web browser. I do that sometimes, I get caught up in those rabbit holes... But yeah, that yak just kept growing hair.

**Matt Aimonetti:** \[01:08:06.16\] Yeah, speaking of which, really quickly... [Sourcegraph](https://sourcegraph.com) released a small package/binary that lets you do code completion and reference is much faster. That was integrated for Mac with VS Code beyond a feature flag. Big shout out to them too, because it's a lot of work they made available to a lot of us.

**Brian Ketelsen:** That concept of a language server is pretty impressive... Language Server Protocol, LSP. I have a feeling that it's going to revolutionize IDEs in general; I can't wait.

I noticed that there was a Neo-Vim plugin already for the Go language server, although it looked relatively incomplete, and I'm excited to see all of the other languages that have already got LSP support, and even more excited that Microsoft created that as a standard that they're openly encouraging everybody else to use, and it's open source... It's only good for us, programmers.

**Matt Aimonetti:** Right. So again, thank you to Ramya. She's not on Twitter; I don't think she's on Twitter. She is though on top of every single issue coming in. So even if you just open an issue, if you use VS Code I would suggest you open an issue and you just say "Thank you", that would mean a lot.

She is not really on Reddit, and I know that some people are posting information on the Go channel about different releases and the changelogs she's been working on, and she doesn't even really see the feedback from the community.

So if you use VS Code and you use it for Go, I would really suggest you send her a quick message to say thank you, because she's working really hard on that.

**Brian Ketelsen:** That's awesome.

**Erik St. Martin:** Currently it looks like there's 91 open issues, so if you really wanna show love, help triage or submit pull requests.

**Matt Aimonetti:** And most of these issues are related to using the debugger, and helping people debug what the problem is, and then making the documentation a bit better.

There's a lot of things you can do by also showing your favorite feature and doing a small gif or blog post about it, so people can learn about it. But most of the issues are very straightforward and you can just go through them and help.

If you want to help with the code, it's TypeScript, which looks a lot like Go; it's not really hard to write. Most of the work is actually done by calling a Go binary that we install on the machine.

**Brian Ketelsen:** This is a semi-related segue, but why is it that Visual Studio Code feels so much faster than any other GUI editor?

**Matt Aimonetti:** It's hard, because they're using Electron, which is the Chromium framework that's used also by Atom, and it's actually extracted out of Atom. But I think the Monaco editor is what they really optimized to make it feel really fast. Besides that, I don't quite know.

**Brian Ketelsen:** Yeah, it's a dramatic difference on all three - I've got Windows, Mac and Linux. I've been using Visual Studio Code maybe half the time lately, and I can't get over how fast it is compared to everything else.

**Carlisia Thompson:** Are you using that with a Vim plugin, or not?

**Brian Ketelsen:** Yeah, I use the Vim plugin, and I use the Go plugin, and I'm amazed. It's more responsive than Neo-Vim for me. It's a really fast editor.

**Erik St. Martin:** One of these days I'll actually try it.

**Brian Ketelsen:** It's worth it.

**Erik St. Martin:** I'm just so used to Vim.

**Brian Ketelsen:** Yeah, it's really worth it. And with the Vim bindings, it's fine... Although the biggest problem I have with the Vim bindings is that there are a dozen different Vim bindings and all of them are incomplete in one way or another, so that's a little bit frustrating.

**Erik St. Martin:** \[01:11:50.25\] Alright, so my \#FreeSoftwareFriday is actually going to be [React](https://reactjs.org/). It's probably changed the way I do frontend stuff. I know you guys use Angular over at Splice... I've used Angular a few times, but one of the things I liked about React is that I don't have to be all in, like Angular has seemed to be in the past for me, where it's kind of like all Angular or no Angular.

It really, definitely changed the way I do web stuff. Web stuff felt a lot harder coming in from Rails, where we were used to the templating, and things like that, that existed. Now doing just kind of a JSON API to React makes doing web-based things ridiculously easy.

I know Facebook's doing a ton of work, as well as some outside contributors on that, so huge thank you to you guys.

**Brian Ketelsen:** Awesome.

**Erik St. Martin:** Alright. With that, I think we're probably over. I wonder if Adam's been yelling at us in the back, like "Shut it down!"

**Brian Ketelsen:** Close it up!

**Carlisia Thompson:** I think we're gonna need to wrap it up!

**Erik St. Martin:** Right. So definitely thank you for everybody being on the show today, especially to you, Matt, for coming on and talking to us... A lot of great topics here.

**Matt Aimonetti:** Thank you for having me.

**Erik St. Martin:** Huge shout out to our sponsor for today, Toptal. Definitely share the show with friends, co-workers, fellow Go programmers. We are on [Twitter](https://twitter.com/GoTimeFM), GoTime.fm on the interwebs, and if you want to be on the show, have suggestions for guests or topics you can [ping](https://github.com/GoTimeFM/ping) us. With that, goodbye everybody. We'll see you next week.

**Brian Ketelsen:** Thanks, Matt!

**Matt Aimonetti:** Bye, thank you!

**Carlisia Thompson:** Thanks everybody, bye!
