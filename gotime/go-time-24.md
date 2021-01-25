**Erik St. Martin:** Alright, we are back for another episode of GoTime. It is episode number \#24. Today's sponsors are stackimpact and Code School. Today on the show we have myself, Erik St. Martin, we are down one Brian Ketelsen, who is a few thousand feet above us, making his way back home. Carlisia Campos is on the show today...

**Carlisia Thompson:** Hi, everybody.

**Erik St. Martin:** And our special guest today is Nate Finch. How are you doing, Nate?

**Nate Finch:** Doing good.

**Erik St. Martin:** Would you like to give everybody a little background about yourself?

**Nate Finch:** Sure. I've been doing development for 16 years now, since graduating from college about four and a half years ago, right around Go 1.01, or something like that. I started looking at Go mainly as a way to not be pigeonholed as a Windows developer, because at that time I was a Windows developer, and I wanted to be more than that... And I met Go, and then I went into the community, and about six months later I saw Gustavo posting on Twitter that there was an opening for a Go developer at Canonical, working on Juju. I've interacted with Gustavo for a bit, and we sort of knew each other; it eventually worked out, and I started working on Juju. I've been there for just about three and a half years. I've done a bunch of Go stuff on the side, and I'm a big fan of Go.

**Erik St. Martin:** So you were writing production Go code before most people knew about Go.

**Nate Finch:** Yeah. It was fun.

**Carlisia Thompson:** I wanted to confirm, that's Gustavo Niemeyer, right? He works at Juju.

**Nate Finch:** Correct, yes. I skipped his last name because I was not sure how to pronounce it.

**Carlisia Thompson:** I actually only know him because he's Brazilian, and I always think he works for Google, but he actually works for Juju. How do you say Juju, anyway? I say Juju because that's how you say in Portuguese, which is so cute... How do you say it?

**Nate Finch:** Juju... It's a word for magic. That's what we think Juju does - magic stuff.

**Carlisia Thompson:** Gummy bears in Brazil are called "jujubinha", so I always think of gummy bears when I see Juju. \[laughter\]

**Erik St. Martin:** So Juju is basically an orchestration platform for tying together different services. I haven't used it myself, but it did look interesting. You guys have the Charms, which are the way applications are tied together.

**Nate Finch:** Yeah, it's very similar to other orchestration platforms such as Kubernetes...

**Erik St. Martin:** ...Docker Swarm, Mesos...

**Nate Finch:** Yeah. We're not so tied to Docker, because we existed before Docker existed, so...

**Erik St. Martin:** You win! \[laughs\]

**Nate Finch:** \[00:03:47.03\] Right! There you go, we win. So we do support Docker - if you wanna use Docker, that's fine. If you don't wanna use Docker, that's also fine. What it does is it lets you make a very lightweight wrapper around either your Docker thing, or your raw application, and then you can deploy it to the cloud, or containerize it on your desktop or hardware, in racks, in your server room, and it makes it very easy to do very complicated stuff. Plus, I checked, it was one of the biggest open source Go projects someone's cut up by now. It's well over 500,000 lines of code, and that's just stuff that we wrote; it's big. We use MongoDB to store our data, which is okay; it stores our data, usually... \[laughter\]

**Erik St. Martin:** ...most of the time.

**Nate Finch:** Yeah. There's a couple known issues with the way that Mongo works, and if you're careful you can avoid them.

**Erik St. Martin:** With the history of Juju and the length of time it's been around - I know Gustavo was working on it back in 2013-2014, so we're talking early Go days, pre-1.0. There have to be some lessons learned, how things evolved. We were talking the other day on the show about Kubernetes and the etymology... If you look through the codebase, you can kind of see the evolution of people's understanding of the language. It started out very Java-ish, and in other areas it's very Go-ish. Do you have similar things that you've experienced?

**Nate Finch:** Oh yeah, definitely. A lot of the early developers were more familiar with Python, so there's a lot of Pythonisms, which is sort of worse than Java-isms... Because Java at least is strongly typed, whereas with Python people expect to be able to just curl in whatever... So there's a few spots where there's empty interfaces and reflection, most of that's been stripped out as we go along.

I think one of the bigger lessons learned is we use Gustavo's GoCheck, which is a testing framework built on top of GoCast. It adds test suites so that you can have code that runs before a full suite of tests, and then code that comes before each individual test very JUnit, xUnit those things do that, too.

That's actually been kind of a problem, because it means that we have a lot of code that runs that's invisible, which means it's hard to know exactly why a test actually works, because it's all this stuff to set up that you don't see, and then the unit tests take on a piece of machine a good 17-18 minutes. And that's just like running Go tests for all of Juju. That's a long time.

**Erik St. Martin:** So this is just your unit tests and not integration tests, and stuff.

**Nate Finch:** Correct. Our integration tests are even worse, but that's sort of understandable because our integration tests actually bring up machines in the cloud. Those take like four hours. That's doing a lot of work over the network, and machines moving, and so on. But unit tests - it's kind of inexcusable to have unit tests that take 17-18 minutes, at least in this day and age.

\[00:07:46.10\] We have a lot of full stack tests that run against an actual Mongo database, which is great for making it a real-world scenario, but it's terrible when you make one small change and you wanna run all the tests. It's hard.

**Erik St. Martin:** The hard part is it's like "What should that number be?" With a 500,000-line codebase, it's going to take a long time to do a good test suite, but 18 minutes does feel probably on the longer side.

So you initially came up -- was this last episode or the one before, Carlisia? Where we were talking about Gorram. How do you pronounce that, anyway?

**Nate Finch:** Gorram. It's from Firefly, it's actually a swear... "Those Gorram thieves!"

**Erik St. Martin:** \[laughs\] That's awesome.

**Carlisia Thompson:** Erik, I don't remember which episode it was, and I don't even remember talking about it, but I also don't remember a lot of things, so I don't know...

**Erik St. Martin:** You're always the one who's... She knows exactly which episode that we talked to which person, she's so good at that stuff.

**Nate Finch:** It was episode \#21, and the reason I know that is because I've listened to it last night. \[laughs\]

**Erik St. Martin:** So it was a couple more episodes ago than I thought it was, but... Yeah, she's so awesome that I'll mention "We talked to somebody..." and she's like "Oh yeah, it was episode such and such."

**Carlisia Thompson:** Oh, thank you... But I guess it doesn't work all the time.

**Erik St. Martin:** If you ask me on Monday, I'll forget who we talked to last week. \[laughs\] So what was the motivation behind creating that? It's a really interesting project.

**Nate Finch:** So it's very simple - there was one definite spot where I said, "I can make this!", and I was working with some JSON at work, and it gets spit out to the CLI in a big mess with no line returns or anything, and I was like "I need to make this look nicer." I was working with someone else and we said, "Let's do python-mjson.tool and pipe it into that." And that worked, and it made it all nicely indented and stuff, and I was like "That's great!"

I don't want to run Python to do that, I wanna make my thing in Go to do that, because I don't know all the Python libraries and stuff; I'm vaguely familiar with some of them, but I know the Go standards and libraries, so I was like "How can I make this work with Go?"

So first I figured out how it works in Python, because a vague big idea. In Python, each script actually has a bit at the bottom that says, "If I'm being run as main, then do this stuff." It wraps the actual package in some smart logic to do some stuff, and in the case of json.tool, it makes the JSON look nice. So I was like, "Okay, well I can't go back and add that code to everything in the standard library, but I betcha I could generate that code."

I'm a big fan of generating code, because I don't wanna have to write the dumb code that's always mostly the same, I want something to write it for me; that way, I can write the good stuff. So I was like, "Well, okay, I can do that." I think I was lucky that that was my starting point. It was a fairly complicated thing of typing some JSON to a specific function to prettify it, so that was a difficult use case that I think made it much easier to do everything else that Gorram can do. So that's the story.

\[00:11:42.06\] I started poking at Go types, the standard library package that reads code and understands what types are in there. Luckily, much of Go code has a lot of conventions that we can use to understand what type of action this function's gonna take; so like readers and writers, and returning n for the length, and returning errors, and stuff... There's all these conventions to make it very easy to just generate some code, because you pretty much know what each thing is going to expect.

So I just started poking at that for like a week or so, and got some basic things working. Then I've been adding a few new features since then.

**Erik St. Martin:** I just thought it was really cool, because I throw together little tiny Go programs to do stuff like that. Like, "Let me reformat the JSON", and stuff like that... So it was really cool to see that, because then I can actually throw that in my Bash script without having to pass around these little binaries.

**Nate Finch:** Yup. One thing I noticed you mentioned in the last show was that it works with the standard library - it actually works with anything in your Go path. If you have some third-party thing, it will still work.

**Erik St. Martin:** Oh, cool... So anything that's in the Go path of whatever machine it's being run on.

**Nate Finch:** Yeah.

**Erik St. Martin:** That's awesome. Bill Kennedy was asking us too what your experience with working on large code bases is, with it being that large and not the norm.

**Nate Finch:** It's funny, there's a proposal for Go 1.8 about aliases that is just before support for bigger projects; that kind of a thing actually could be pretty useful for us. We have a lot of lines of code, but also we have a lot of different repos and multiple different applications building off those. So any major modification to an API can cause lots of problems. We have to have like four different projects all change at the exact same time. So aliases, at least one time that I can think of would have been a big help, but I'm also sort of on the fence for supporting aliases because they do make it difficult to know for sure that these two things are the same. Because you can have types that look like they're different and they're actually not, and that's not that great.

**Carlisia Thompson:** I wonder... Can either one of you explain what an alias is, so we can frame this issue a little better for people who don't know? I have an idea, but I couldn't explain it well. And after we explain what it is, my question for you, Nate, is do you think it could be overused? I mean, it seems that it was already implemented, right? I don't even know if there is any going back. Does anybody know?

**Nate Finch:** Yeah, I've been following that... So it has been implemented, but there's still time to roll it back if it's decided that we should. What aliases are is you can put a definition in your package that is, for example, "type Fu =&gt; some other package's type". The =&gt; looks like a right-facing big arrow.

**Erik St. Martin:** That's like the Ruby Hashrocket.

**Nate Finch:** Okay, and what that says is "references to this type and this package are the exact same thing as references to that thing in that package." So a question that takes one, take either. And more complicated constructions like a function that takes a function that takes that thing works with either one. And if it's that second-order function of a function, that is where you actually need it, because for types you could use interfaces directly. So you can pass a strings.Reader into something that needs an io.reader.

\[00:16:06.16\] However, if you have a function that takes a string reader and something else that wants to take a function that takes a function of io.reader, that won't work. It's a little hard to explain without text.

**Erik St. Martin:** Audio definitions of things gets difficult... But I guess the basic explanation of it is it's almost like a symlink where you're referencing one type from another package in your current package. Say you took one big monolithic repo and you needed to split it up. Well, you don't wanna break all the projects that may be referencing that package, so you may kind of create an alias so that the type still exists in the original package, but it basically refers to it in its new location.

I didn't realize that it worked the other way. You said that basically the indirect works both ways, Nate, where if I took the type from the original package or I took the type from the new package, I could use either type pass in?

**Nate Finch:** I'm pretty sure. I'm not one hundred percent sure, but I think that's sort of needed to make sure that you have full compatibility. But I'm not a hundred percent sure.

**Erik St. Martin:** Yeah, and I think that... and Bill Kennedy is chatting here too. He pointed out the fact that this is supposed to be a temporary stop gap; it's not supposed to be a feature that people heavily use. It's supposed to allow people to put that alias and to not break CI for 20 projects that all depend on this one.

**Nate Finch:** Yeah, that's what they say, but we all know that no hacks are ever temporary, right? They will stick around for years; that might be one of my concerns about this.

**Erik St. Martin:** Yeah, I think it has a legitimate use, but I think that people are also concerned with... Go has done a very good job at removing the footguns, you know? This seems like one, and I think that's what heated the debate; it's really polarized. There's people who really need it for legitimate purposes, and then there's everybody else that's like, "Whow-whow-whow... People are gonna really overuse this."

**Carlisia Thompson:** Yeah, that's what I wanted to know, because one of the angles of the conversation was this is adding a level of indirection that's going to make reading code confusing. And the other side is saying, "Well, but you know, it's very useful, and guess what? We have *goto* as well, which is not supposed to be used all the time, but we do have it and we use it in very specific and very sparingly." So Nate has this huge code base that he works with, and it is useful for him. What I'm wondering is if you, Nate, see the potential for this being thoroughly overused.

**Nate Finch:** I think it's very valid to say that there are things in the language now which we say "Don't do that, except for very specific cases." Like using panics - you could use them exactly like exceptions, but then everyone will tell you that you're wrong. I do agree that as a community we seem to be pretty good at following conventions that we all pretty much agree on. There's actually nothing that forces anyone to go format their code, and yet everyone does.

\[00:19:47.00\] I think this could be a similar thing. I think it could be abused, I am hoping that people won't. For most big code bases (like Juju) we review every line of code, so if someone was doing whacky stuff with this, we'd be like "No, don't do this!" But there are definitely times where it's very useful to be able to break up packages, move things around and not have to have a ten-thousand-line diff, which I've had to do; it was not fun. In that exact thing, aliases would have helped a lot.

I think it's probably gone far enough, but they're not going to take it out. At this point, I think we have to be mindful of the way it's used.

**Erik St. Martin:** And I think now is probably a good time for a sponsor break.

**Break:** \[00:20:48.26\]

**Carlisia Thompson:** Yeah, that looked really impressive. I was checking that out, that looked really cool.

**Erik St. Martin:** Yeah, I was digging around in there, too. These are definitely things that when you're running their profiling tools you get this information, but you usually don't have it available to you once you kind of roll your app out into production. It was really cool digging around the web interface and seeing what was available.

**Carlisia Thompson:** Yeah, and that's sort of where it really counts, right? When a thing is in production is when you really wanna see how they are doing.

**Erik St. Martin:** Yeah, you can only simulate so much in your test and CI environment.

**Carlisia Thompson:** So going back to talking about how we are using Go in the most useful way of using the features that we already have - at least that's how it was playing in my mind... I know Nate wants to talk about error handling, and how the way Go does it is different and maybe even better than in other languages, so I would love to go there.

**Nate Finch:** Yeah, sure. So it's funny... When Go 1.0 was announced which was actually the first time that I had heard of Go, and at the time I was working in C\# for the most part with some Java and Python, and I was like "Oh, it's a language from Google. I should go and see what it's like." And the very first thing that I've noticed was no exceptions. I was like, "Wow, that's terrible... I'm not gonna use that." \[00:23:58.25\] \[laughs\] Then they announced 1.01 about six months later, and I was like "Let me look at it again", and the rest is history.

Exceptions are hard... Hard, hard, hard. In my last job was another big code base, I think somewhere around 50,000 lines of C\#, and I remember one instance where I was modifying some code and I was like "Oh, this code can fail. I'll have to throw in an exception." And during a code review, someone was like "You can't have that throw an exception, that's way deep in the stack. We have no idea who will catch that." That was for the first time I was like "Wow, exceptions aren't that great. They're basically a go-to, except that you don't know where going to." You can figure it out sometimes, but it's very hard to know who is going to catch this error, and you have to clean everything up. And if you're looking at a function, you have no idea what can fail. Any function that you call could fail. What's worse is that it might not fail now, but in six months someone might modify it to fail, and that's scary.

I remember one of the first Go programs that I wrote was just downloading a bunch of pictures off some website, and everything that could fail returned an error. It was this epiphany of, "Oh my god, I know what can fail. I can deal with all this, and I'd know exactly what my program's gonna do." I think dealing with errors is where Go really got it right, because the multiple returns means it's very easy to just say, "Okay, this thing returns an error, but also some actual useful data."

Yes, you have to do "if error != nil, blah", but that's good, because that means you're saying, "I know this can fail. I'm gonna do something."

People always talk about, "Oh, it makes my happy path look all messy", and I'm like "This is programming. There is no happy path."

**Erik St. Martin:** Yeah, especially when you write network software, right? The amount of things that can go wrong is just... Anybody who's supported applications in prod is aware of stuff like that, the odd things that start happening to every application when different resources start hitting their level of saturation, when the out-of-memory killer starts going, or when you run out of disk space and the network drops, or somebody decides to take down a link and bring it back up, or assign a new IP address to it... Random stuff happens on the machine. Like you said, there's no happy path.

**Carlisia Thompson:** That's very interesting, yeah.

**Nate Finch:** Yeah, and the thing that I find is that in Go I'm a lot more aware of where things can fail, so instead of just programming for when things work, and then when things break everything dies... Things don't always work exactly the way I expect them do, and you have to deal with that. Things like the network being terminated is not terribly exceptional, it happens all the time, so what do you do? It's like, there's no happy path; there's also no sad path... There's just paths, it's just forks. Like, "Is this user's name Bill or is Bob?" It's not happy or sad, they're just different, and you do different things.

**Carlisia Thompson:** \[00:27:47.13\] That's a very good point. I remember when I started looking at Go open source projects, especially the bigger ones, like InfluxDB, Docker etc., I got really intimidated by how long the files were. I was just thinking, "Wow, it must take a lot of mental energy to hold everything that's in this file in your head." Especially coming from Ruby, where people say "Don't make your file longer than a hundred lines", and here I was looking at Go files that were super long. Now, after I learned a little bit, I noticed that a lot of it is error. My first reaction was like, "I don't wanna be looking at error handling. I wanna look at the code, I wanna look at the happy path, because that was my frame of reference, that's how I used to think." Which is to say Go has a very different (prerogative, I wanna say) approach, and now that I'm used to it, I really find it very refreshing that everything is there. It's explicit, and it's right there, so I don't have to go to other places; I don't have to follow that chain of exception-throwing all over the place. Everything is right there.

Now I find that it's the opposite for me. I love it. I find it super simple. Whereas before I used to look at a big file and think I have to hold it all in my head, now I look at a big, long Go file and I think, "Everything is here. It's so much easier for me to hold this in my head, because everything is right here." It's not a long file that it's that content and I have to go all over the place to look at where exceptions are being thrown; everything is right there, it's explicit, and it makes it a lot easier.

**Erik St. Martin:** You know, the one thing that I like about it is if you use idiomatic Go, then your happy path typically is at the first indentation level, so if you're just trying to get an idea for what a function does, you can kind of just scan that level. And most of your edge cases and when things return an error are typically indented in; that's typically where you find your error handling, so it's easy to scan past it when you're just trying to get a rough idea, but like you said, you can focus more on it when it matters, when you're really trying to "Oh, why would this go wrong? I should look to make sure it's handling these scenarios I'm expecting it to."

The hardest part is not knowing. It's the unknown unknowns, and I think that's why the whole crash-only software paradigm has kind of become more popular, especially with distributed computing and containers. And going back to Nate's point about people overusing panic, I wonder if it's that kind of crash-only methodology that's having people to use panic more...?

**Nate Finch:** I definitely think there are a large number of people that think that once you get into a bad state, that you no longer know what's going to happen, so you should just bail out. That's fine, but one of the ways you can avoid getting into a bad state is by understanding what can fail and how things are able to fail. Even with Go, returning an error is sort of like failing... You're saying, "I couldn't do it, something went wrong. Make no assumptions about what I was supposed to do." Often times, that will just bubble all the way back up to wherever the start of your action was.

\[00:31:43.21\] In Juju, we actually have things we call "workers" that are threads, which will get restarted if they fare out. It's very similar to crash-only software just per goroutine. But I don't think you need panics to do that. Panic is taking down the whole application, and I think applications these days are complicated enough that one small piece failing is not a need to bring down the entire thing. Usually.

**Erik St. Martin:** I'll agree. You should allow the highest level possible to make that decision. You have some sort of RPC service, and there was some kind of network issue through jitter, like reordered packets that lost its state, or something like that; but you wouldn't crush the whole program. You would come back up a level and that would be like, "Let's close this connection and let it reopen", because we don't really know what state the connection is is, whether it's sending a header packet, or the body - we can't figure this out to reset it, let's just close the connection and reopen one. You don't have to crash the whole program because of it.

Bill Kennedy actually asked, speaking of error handling, what your views were on wrapping of errors, because there's a lot of polarization there too, where people think you should, so you can get more context and get stack information. Then there's also the other side of it - whenever you're wanting to handle errors, trying to do error comparisons. When you wrap errors, you end up leaving yourself needing to compare strings or regular expressions against them instead of comparing actual types.

**Nate Finch:** Well, we actually use a wrapper in Juju that we wrote a couple years ago. In the beginning we didn't use a wrapper, and that does kind of make things rough. If you don't use a wrapper, then you do have to just compare strings, if you're using it to format that error off and then just adding on more string to the string that you have. I like Dave's package - github.com/pkg/errors.

The nice things about this is that he gets a stack trace; when you make the new error, you can still get the error that was the original error, so you can still check and see if it's an io.EOF without having to look at the string. You can see if it matches some interface.

Juju's package also lets you do that. All these packages work basically the same, and there's a lot out there. We've looked at a bunch, and I'm sure more have been written.

Basically, they all just store the original error and give you back a wrapper struct that goes around it. The problem with Juju is that you have to wrap it at every return, because instead looking at a stack trace per se, it marks where it gets wrapped on the return path up. The idea was that if you pass errors over channels, the stack trace per se may not be how you eventually get a hold of the error. In theory it was a good idea; in practice, it means that everywhere you return an error you have to do a wrapping. It was kind of a burden, mostly for when things returned multiple values, you can't tail call, like return a function, assign the values to variables and then wrap the error and then return both. That's kind of a pain.

The difference with Dave's is that he actually grabs the stack trace the first time, so in theory you don't actually have to wrap it when you return it past that first time. So I think they're kind of good, and I think they're kind of not as useful as people think. In Juju, a lot of the time I can just search for the string and find a spot where it's made and figure out what's going on. I don't always need the whole stack trace. It's fairly rare that I get the whole stack trace.

**Erik St. Martin:** \[00:36:07.01\] Yeah, I typically only want the stack trace if I don't know how to continue. If I know how to recover from the error, I don't really care about the stack trace, but when I'm actually taking down the application because I don't know how to recover it from the state, that's typically where I want a full stack trace.

**Nate Finch:** Yeah, and I just haven't seen as much use out of the stack trace as I would like; it seems like a lot of work -- not really a lot of work, but more work for questionable benefit. So I'm still leaning towards saying it's a good idea, but it's not as strong as I would like. I'm not exactly sure how to make that better case, but it's a stronger "Yes, you absolutely should do that."

**Erik St. Martin:** Okay, so I think it's about time for our second sponsor break, and then I wanna get into some projects and news, especially with the 1.8 freeze going on.

**Break:** \[00:37:03.07\]

**Erik St. Martin:** So next up, projects and news. So we have the 1.8 freeze - that just happened, and we're gonna be frozen for three months, right?

**Nate Finch:** Yeah, I think so.

**Erik St. Martin:** So I wanna talk about some of the stuff that's coming in there. We talked about one of them, which is the aliases, but there's some other stuff coming in, like they're leveraging the context package a lot more. One of the cool things I was interested in is the database SQL package will have cancelable queries now.

**Nate Finch:** Yeah, I was looking at it, too. They've done a bunch of stuff with names and parameters and stuff. They're really puffing it up a bunch, because it was a little bare bones before, and it's nice to have people to do a lot more things. That's half of what most applications do - talk to a database.

**Erik St. Martin:** Yeah, that's true, I don't know how much love I've seen in the database SQL package since early 1.0 release. It may just be because I haven't been looking for it, but I don't think a lot more functionality has been added to it, to my knowledge. One of the other cool things is the HTTP package - the server will actually have graceful shutdown by itself now, which is gonna save me a lot of boilerplate code when I build HTTP APIs.

**Nate Finch:** Yeah, that is very cool.

**Erik St. Martin:** And then they're gonna be doing the reverse proxy will have HTTP2 support. Nate, I hadn't seen this, but you had mentioned something about dynamic plugins.

**Nate Finch:** I think that's coming in 1.8.

**Carlisia Thompson:** Yeah, it is.

**Nate Finch:** Okay, good. Dave and I have been working on this for a long time, being able to compile code as a plugin that can be loaded by other Go code. The other main application loads it using -- there's a new plugin package in the stdlib on [Tip](https://tip.golang.org/), and... It basically works like plugins, so we can load new data, you can call functions and stuff... It's very interesting.

**Erik St. Martin:** \[00:40:09.14\] So this is basically loading it as a dynamic library, like a DLL or an .so file, for other languages.

**Nate Finch:** Yes.

**Erik St. Martin:** So how does that work for dynamically linking against it? Do you need to have the plugin at compile time, like you'd need the header files for C if you were gonna dynamically link against something? Or is this just completely generic because the information is available in the binary?

**Nate Finch:** It's completely generic, which means you lose a bit of type safety going through it. I'm looking at the package now to remind myself... Basically, you can look up names of types and functions, and they get returned as an empty interface that you can cast them and call them.

**Erik St. Martin:** Interesting. I know there's been a few use cases where people have really wanted plugins. Kubernetes is a good example, too.

**Nate Finch:** Yeah, I'm a big fan of plugins. I wrote a package to work with plugins called Pi that really, at least partially obviated, which is fine. I think plugins are super valuable... That's half of why Kubernetes is so popular - you can swap things in and out as much as you want, and this will make it even better because then you can use real Go that you just drop in the directory.

**Erik St. Martin:** I think it's really cool from the perspective that there's a lot of cool tools where we want them to support many different interfaces to other applications and architectures, but the core package starts to become very bloated with knowledge of all these individual versions of the same system, whatever that may be - databases, or things like that, so to be able to move it out into a plugin approach is really cool.

A good example of this - and I'm gonna give away my \#FreeSoftwareFriday early - is CNI, the Container Networking Interface. You can basically just tell it, "This is the plugin I wanna use for my networking", and there's just kind of like a known interface between them. So having stuff like this is really cool because then you can start separating that logic from their core package, so there can be kind of individual packages that are more focused, as long as they expose the correct methods.

So I'm not sure... Was that all the goodies coming in 1.8? Does anybody know of any other ones that are coming in?

**Nate Finch:** The GC improvement - now it's down to maximum 100 microseconds - not milliseconds... Micro.

**Erik St. Martin:** Yeah, which is awesome. And there's a new proposal... This isn't gonna be for 1.8, but I think it's future work, where they're trying to get it down to under 50 microseconds for the stop-the-world pauses.

**Nate Finch:** Yeah. There's a caveat right now that individual goroutines may stop for longer than that. I don't know if it's a bug or just the way things work. So stop-the-world is that short, but they're working on making it better and better, which I think is just fantastic, because that's what half the world says when they look at Go - "Oh, it's got a GC. Well, I can't use that." Well, you can now.

**Erik St. Martin:** See, what I love about Go is that I get a choice. Like, yes, there is a GC, but I can manage my own memory if I want to... If it's important to me and I wanna have full control over it, I can manage it. I can create my own byte slices and pointers, and just hang on to them and reuse them, and create a pool, so basically creating your own slab.

\[00:43:54.20\] It's not like Python or Ruby where you have no option - you can have GC or you can have GC. It's cool, because you can write it one way first. For most people, coming to a compiled language, it's gonna be fast enough already. The number of times you're gonna drill down to allocation isn't as common as you'd like it to be. We all wanna think every piece of code we write we start working out pprof and looking at all the allocations, but that's not typically the case. Usually, you wait to see what performance bottlenecks you have and focus in on those areas, and areas that are very hot in the execution path where the allocations matter. Those areas you might start drilling into the number of allocations and start messing with that, but it's not like you're gonna go through your whole app and do that. If you do, then I wanna work on your team... Usually, you're still racing to deliver features, you know?

**Nate Finch:** Right, exactly.

**Carlisia Thompson:** So as far as Go 1.8, I just wanted to mention that there is a really great blog post listing in detail what's going to be in 1.8. It was Tyler Christensen... We'll place the link on the show notes and on Slack.

**Erik St. Martin:** Oh, Tyler Christensen, yeah.

**Carlisia Thompson:** Yeah, there are a bunch of nifty little things.

**Nate Finch:** Cool.

**Erik St. Martin:** So... Interesting projects. We mentioned a few shows ago the vuls (vulnerability scanner) that was written in Go; I was looking at it again recently, and I noticed that it actually uses a library called github.com/jesseduffield/gocui, which is actually really cool because you can build command line user interfaces in Go, and it has the concept of splits, and windows, and modal popups and stuff.

I haven't built anything with it, but seeing it really makes me want to.

**Nate Finch:** Nice, yeah. I used a different one for a small project... I can't remember now what the name was, but very similar. Maybe a slightly lower level; with this one you have a window and put stuff in it. The one that I used was more like your screen was a grid and you could put stuff in the grid. But this looks really cool, I definitely wanna try that one out.

**Erik St. Martin:** See, I love graphical stuff. I don't know why, but I'm a command line junkie. Even at my development machine... I have a Mac and I do the podcast and stuff from that, and email and chat, but I primarily develop off a Linux box, and I run the i3 window manager. That's it. I don't need any of the fluff, just give me some terminal windows and I'm good.

**Nate Finch:** Well, I did 13 years of Windows development, so I still at times want things I can poke at with a mouse but I also love the terminals. It's nice to put those both together and you have a lightweight windowy thing. It's pretty cool.

**Erik St. Martin:** Yeah, I'm waiting to have some time to actually build something with it. Another cool project I found - they have a command line version for it too, but mainly for Vim and neoVim - is a fuzzy file finder that's written in Go. There's been a number of these written over the years for editors, but I thought that that was really cool. I like anything that gets rewritten in Go. Like, "Oh, here's a cool grepping tool. I'm gonna write one in Go." \[laughs\]

**Nate Finch:** Yeah. I actually think that's a great first project - to take a small tool that you like in a different language and do it in Go. A lot of time, working on a project is like "What do I want it to do?" and what's nice about just copying something else is that you already know what it does, so you can just make it do that. I think that's a really nice way to learn the language.

**Erik St. Martin:** \[00:48:02.08\] Because you spend your time learning the language, rather than trying to learn the domain and the language at the same time; you're already kind of familiar with the domain.

How about you, Carlisia? Anything new you've come across this week?

**Carlisia Thompson:** Yes. Well, actually not much... I wanted to mention Dave Cheney's talk, with the disclaimer that it was the only talk from dotGo that I have watched, so I'm sure there are a ton of other great talks. This one I watched and loved it. He talks about the functions as first-class citizens in Go. And I loved that he didn't take for granted that everybody knows how to use functions as arguments, basically. Am I saying this right?

**Nate Finch:** Yeah.

**Carlisia Thompson:** \[laugh\] Okay. And it's funny that he said... He talks to people and people say, "Well, I know how to use it, but I don't use it because I'm concerned that other people won't understand." That is definitely true for me, I haven't used it yet. But he walks through examples of how to use it. That was such a great thing, to have that resource there, to learn it.

In the talk he also goes into the act of concurrency pattern. I didn't really get how the two fit together, but I also loved it because "Oh, great! There is a nice example of how to use that pattern." In the example that he gave, I think the purpose for that example was to show the first Go proverb; for people who don't know there is such a thing as a list of Go proverbs, of which the first one is "Don't communicate by sharing memory, share memory by communicating."

For people who are new to this statically typed language with pointers in memory allocation and all those things, this might sound so cryptic. Dave's talk walks through an example that gets the idea across. It is a bit advanced, but if you are ready for that, I highly recommend it.

He also mentioned that talk by Bryan Boreham from this year's Golang UK Conference; it's called An Actor Model In Go. I haven't seen it yet, but it will go deeper into what an actor model will do.

**Erik St. Martin:** Yeah, there's a talk by Rob Pyke from one of the Gopher fests where he talks about the Go proverbs. I'll find that video and link that in the show notes, too.

**Carlisia Thompson:** Yeah, good point.

**Erik St. Martin:** An interesting thing about the functions as first-class citizens - I have not seen that talk, but speaking of 1.8 changes, the sort logic... Right now you have to have an interface on your type that you wanna sort, which has kind of been a pain, but in 1.8 you'll now be able to use a comparator, so you'll be able to just pass in a function to do the comparison and return basically which side is greater. So there's a use case right there for the first-class functions.

**Carlisia Thompson:** Yeah, there we go. That's exactly what I was thinking... That's how I approach things - I accumulate a bunch of tools and every time I have a problem I reference to those and say, "Can I use one of these to solve this problem?" But it's helpful when people serve to you, like "Here's a use case", so you have that in mind. Good one.

**Nate Finch:** Yeah, I am actually working with some code that uses first-class as function, so as a way to do validation of user data. I've got a function that's got all this logic for getting the data, and then you just pass it in a validation function, and then it can run that to make sure that the data is valid.

\[00:52:02.15\] I was working on that while I watched Dave's video; I was like, "Yes, that's exactly what I'm doing."

**Erik St. Martin:** Yeah, I haven't actually seen that video. I'm gonna put that on my list. Actually, all the dotGo videos need to be on my list to watch. Alright, so what else do we have on our list before we move on to \#FreeSoftwareFriday?

**Carlisia Thompson:** One more thing I wanted to mention - Peter Bourgon emailed the mailing list (I forgot which one) and they have the draft spec for package management ready, and they are calling for comments; they are soliciting comments either on Gophers Slack, the vendors channel or on a mailing list. And they started implementing another prototype too, so that's definitely moving along.

**Nate Finch:** Yeah, I looked at that and honestly, it's so long and so detailed... I need like a TL;DR version so that I can have some idea of what the overall meaning is, because it's seven pages long. I don't know that I can get all of that.

**Carlisia Thompson:** Yeah, maybe the prototype they're starting to implement will be helpful in that regard. Sometimes it's easier to look at code.

**Nate Finch:** Yeah.

**Erik St. Martin:** Alright. Ready for \#FreeSoftwareFriday?

**Carlisia Thompson:** No, I'm sorry... I have one more thing, the last thing.

**Erik St. Martin:** What is it?

**Carlisia Thompson:** GoBridge has a community newsletter called Go Pulse. Amy jumped in and took this on, and she did a fantastic job with the first issue. We have sections for different things that people can suggest, and every month there is an editor. So if you feel so inclined, raise your hand and volunteer and suggest things. The newsletter came out really good.

**Erik St. Martin:** One thing I liked was the Gopher Mic section, where you kind of hand it over to somebody.

**Carlisia Thompson:** Yeah, she made it very inclusive... It was awesome.

**Erik St. Martin:** And this is monthly?

**Carlisia Thompson:** Yes.

**Erik St. Martin:** Awesome. So before we move on, where should people go to sign up for that if they are not already signed up?

**Carlisia Thompson:** It's basically the GoBridge blog, and I want to correct myself - her name is Amy Chan. We need to remember to say people's last name. So Amy Chan, thank you, you did an amazing job. People can sign up at the GoBridge Blog.

**Erik St. Martin:** Awesome. So \#FreeSoftwareFriday. Today is Thursday, but we do it for Friday. We like to give shout outs to people or projects that are making our lives easier. Carlisia, do you wanna kick it off?

**Carlisia Thompson:** Yes.

**Erik St. Martin:** What do you have this week?

**Carlisia Thompson:** I'm gonna mention a project that I actually solicited on the GoTime channel, because I didn't have one, but I definitely wanted to give a shout out to somebody. And now I didn't write his name here, I forgot, the person who mentioned it. The package is called Kinetic, and it's an easier way to access Kinetic shards, and for pulling and for doing other things. So if you're using AWS, that's something you should check out.

**Erik St. Martin:** Oh, interesting.

**Carlisia Thompson:** Yeah. The official description says "high-performance AWS Kinesis Client for Go."

**Nate Finch:** Nice. So my shout out is to Hugo, which was originally written by Steve Francia. It is the static website generator that I think most people know about, but that's what I use to pick my blog. Lots of people do, and there's been a ton of work on it.

\[00:55:59.21\] Lately a lot of it is being done by Bjorn-somebody (Bjørn Erik Pedersen) Sorry, I don't have his name in front of me. It's gotten even faster, and it's really a great way to build a website. It looks nice and it's easy to update, and very usable.

**Erik St. Martin:** Yeah, Hugo is really awesome. It's actually what the GopherCon and Gopher Academy sites are all running. And even if you're not familiar with Hugo itself, you're probably familiar with some other projects that came out of it. Cobra and Viper were both by spf13, which is Steve Francia. They are both out of Hugo; they were kind of abstracted lessons learned along the way. So a super-cool project.

Mine today is actually called CNI, the Container Networking Interface. I wanna give a shout out to everybody who is involved in that project, because it's really cool for Kubernetes for networking logic; it allows you to inject your own executable into the flow to allocate an IP address or set up routes when containers respond up on things, which makes a complex problem much easier. You don't have to go and hack in Kubernetes or Docker or Rocket. They all leverage CNI themselves, too.

With that, we are out of time unfortunately.

**Carlisia Thompson:** Can I make two quick thanks?

**Erik St. Martin:** You certainly can!

**Carlisia Thompson:** So many thanks... Huge shout out to everybody in Brazil who are there for GopherCon Brazil.

**Erik St. Martin:** Yes...

**Carlisia Thompson:** I already see people having a great time. The conference starts tomorrow, so it's tomorrow and Saturday. And Erik is giving a great talk about Kubernetes; Erik, you didn't mention that, so I have to. The talk is entitled -- I'm trying to find the name of the talk here...

**Erik St. Martin:** It's called Kubernetes As Seen On TV.

**Carlisia Thompson:** Yes! So check it out, it's gonna be at KubeCon November 8-9, but Erik's talk is on 9th November.

**Erik St. Martin:** Speaking of which, because of that we won't have a show next week. I'm traveling for that, Brian is traveling - I think he's in Amsterdam next week... I think everybody's traveling, so we will be skipping next week's show unless we can find time to squeeze one in not live in off time, but let's assume there's no show next time.

With that, I wanna thank everybody for being on the show today. Huge shout out to our sponsors, both to Stackimpact and Code School, thank you to all of our live listeners and future listeners. Definitely forward this to your friends.

We are @GoTimeFM on Twitter, we have a GoTimeFM channel on the Gophers Slack. If you are not subscribed already, go to GoTime.fm, our website for email. If you wanna be on the show or you have ideas for guests or topics for this show, hit us up on GitHub.com/gotimefm/ping. With that, everybody goodbye.

**Carlisia Thompson:** Thank you, Nathan. Goodbye!

**Nate Finch:** Thank you!
