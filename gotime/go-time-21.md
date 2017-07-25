**Erik St. Martin:** We are back for another episode of GoTime. It is episode number 21. Today's show is sponsored by Linode and Code School. On the show today we have myself, Erik St. Martin, we have Carlisia Campos, say hello, Carlisia...

**Carlisia Pinto:** Hi, everybody.

**Erik St. Martin:** And Brian Ketelsen...

**Brian Ketelsen:** I love that when you say "Say hello, Carlisia." It sounds like we're trained animals. \[laughter\]

**Erik St. Martin:** And then our special guest today is a true OG (Original Gopher), Blake Mizerany. How are you, Blake?

**Blake Mizerany:** Good, how are you?

**Erik St. Martin:** Doing good. So you've been around since 2009-2010 I think, you started with Go?

**Blake Mizerany:** 2009, yeah, when Google released Go... I immediately took notice, and haven't really looked back ever since.

**Erik St. Martin:** And these days you're doing all Go, right?

**Blake Mizerany:** Yes, correct.

**Erik St. Martin:** I'd love to hear how you've seen both the usage of the language and the demographic of the community change over time, because you've been around since... It was first released and there were people poking at it, until now, which is almost everything being done, the distributed systems world is being built with Go.

**Blake Mizerany:** Yeah. Early on when I first saw Go, I took notice as I was working at Heroku, where we were working on a lot of distributed systems, and the appeal to me was mostly because everything we had done up until that point at Heroku and continued to do after that was a lot of Ruby, and it wasn't really holding up for us as well as we hoped; we'd spend most of our time fighting fires with it and not getting the performance out of it that we had hoped we'd be able to achieve, and Go really struck me as this language that would solve a lot of the problems.

In fact, my colleague at the time - he's also an OG - Keith Rarick and I really started playing with Go together. Just before it was released, we both went to one of the founders of Heroku and said, "We really probably should start looking into building a language for distributed systems", which was really dumb for a startup to really be thinking about. But we were excited at the idea, and then two weeks later Go came out. We looked at it and we were like, "Well, I guess we don't have to do this anymore." \[laughter\]

**Brian Ketelsen:** Timing is everything.

**Blake Mizerany:** Yeah, so we started using it pretty heavily after that. It took Heroku a while to adopt it, but Keith and I definitely used it for a lot of stuff.

**Carlisia Pinto:** These stories always fascinate me. When I found out that tests in Go were running so much faster than same-size apps in Ruby - because I also came from Ruby and Ruby on Rails - that was what got my interest. I'm wondering with you, when you looked at Go, what "looked at Go" means? Did you do a dry run, or did you just jump in and hoped for the best and it worked out? If it was the first case, did you do a benchmarking? How did your decision-making go more specifically?

**Blake Mizerany:** Well, we didn't have to do any real formal benchmarking. Writing a quick little Hello, World in Go, compiling and running it was... I mean, just a few little pokes at it with a browser; if it was a web server was an obvious, night and day difference from anything that we had written in Ruby.

\[\\00:04:08.24\\\] It was pretty obvious at that point that that was the direction that we wanted to go, to start using Go.

**Erik St. Martin:** I wanna say at that time, in 2009, to just hit an endpoint in Ruby on Rails was still three-digit response time; it was like 100-115 milliseconds, so the dropdown to single digits meant the world.

**Blake Mizerany:** Right, yeah. I was working on a small project at Heroku at the time when I really started to use Go, and one thing I noticed was that we needed some sort of a service discovery and we needed some configuration management, so Keith and I picked up the Chubby paper that Google had put out, and we worked on implementing our own multi-Paxos implementation, since the only one that was really out there at the time was Zookeeper; in fact, I think that was the only one that was open-sourced. Well, no, there were others, I think... A couple out of Berkeley, but we immediately looked at the design of Paxos and Go's concurrency and how it all just seemed to meld together really well.

We were able to crank out a basic multi-Paxos implementation relatively quickly. I remember after we did that I immediately reached out to Rob Pike, sent him an e-mail and said "Hey, we built a multi-Paxos implementation in Go. We'd love it if you'd come take a look, let us know what you think." So he came by -- I don't know where I'm going with this; I think I'm more excited about the fact that Rob showed up when I e-mailed him. \[laughter\]

That really spoke to the power of the language. You can work on some pretty hard problems in it and come up with some reasonably simple solutions. The language really allows for that.

**Brian Ketelsen:** I have a confession... It was Doozer that got me hooked into Go. I played with it when it first came out in 2009, but I didn't really see the vision for Go yet. Then I saw Doozer and it blew me away. I realized that we could build all kinds of crazy stuff with it, and that's actually how Erik and I met. I fell in love with Go because of Doozer, and then hired Erik to do Go. It's kind of all downhill from there... \[laughter\]

**Erik St. Martin:** Yeah, Doozer was a lot of fun to play with in the beginning. For anybody who's not familiar with it, it's a lot like Zookeeper and Etcd and Consul of this generation. There was a lot of functionality that it had that Zookeeper didn't, which was one of the reasons that we liked it. I wanna say it had something to do with the way the paths were watched at a specific version, or something like that.

**Blake Mizerany:** Right, we used the persistent data structure to be able to track changes, so you could pick up where you left off during a disconnect or after a disconnect, which was pretty nice.

**Brian Ketelsen:** Yeah, so you could start watching a path at a certain point in time, which was really cool.

**Erik St. Martin:** It was awesome for us, because we were doing some service discovery stuff in distributed systems, and when you looked at that, if you did Zookeeper, you would have to resync periodically; if you lost your session, you'd have to reconcile the differences. And you see that mirrored now in things like Etcd, or whenever you get a listing of a path, you get back a specific version and that way you can start your watch from that point on.

**Blake Mizerany:** Right. There's always that chance that you'll miss the window. People offline for too long will have to resync, but it's more of a \[unintelligible 00:07:47.10\] But it's still pretty cool.

**Erik St. Martin:** So with that project, how much Ruby baggage do you feel like you brought along? Because that kind of turns out to be the thing whenever you adopt a new language.

**Blake Mizerany:** \[\\00:08:02.09\\\] Right... One of the first things Keith and I wrote was an assert package for the testing suite. Not long after that we implemented a small Sinatra-style router called Pat, and within probably three to four weeks after creating both of those we ditched them and just never used them again, and continued to use the standard library. Although I think Pat continues to be pretty successful; I haven't looked at it in a really long time, but I think Gorilla adopted it at some point. But I avoid a lot of those frameworks. I'm not really familiar with where they are... But to speak to that, yes, we brought a lot of stuff over from Ruby earlier on.

I remember looking for certain things to exist in Go that I was used to having in Ruby and it took me a while to break that habit. Once I did, everything got better.

**Erik St. Martin:** I feel like for some of the open source projects you release into the world, there's some of them I feel like I should go back and change the readme to be like, "I no longer use this, neither should you."

**Blake Mizerany:** Yeah, I did. If you look at the Pat readme, I think it literally says "I don't use this anymore." \[laughter\]

**Brian Ketelsen:** One of the first questions that almost everybody asks when they come to Go is "Which web framework should I use? Which framework should I use for this? Which framework should I use for that?" and it's really a strong question that we get, especially in the Gopher Slack channel, every day. I know you're kind of anti-framework... What would your suggestion be to a new Gopher coming in and wanting to write something? When it comes to just using the standard library, that's kind of a hard message to tell.

**Blake Mizerany:** Yeah... I don't really have a go-to answer for that. I think everyone has their own goals when they come to the language. It really depends on what they're trying to do. If someone wants to write a simple web app, they can certainly get away with just using the standard library. The standard library will take you extremely far. In fact, I've never had to, or felt the desire to need a framework, and I've built some pretty big web apps.

I think some people are also looking for, you know, "I've got a checklist of things I need out of the box so that I can get started today", and I don't have an answer for them on that, but I hear things about Gorilla or Martini or things like that. To answer your question... I don't know, I don't have an answer. \[laughter\]

**Carlisia Pinto:** I don't know how it is with the Python community or other communities, but with the Ruby community the message was so strong, "Don't reinvent the wheel. Don't write things yourself if there is a library out there. Use it." Also the message of "Extract your code into a gem and use that, and also share it with other people so they can use it." So I can see how people coming, at least from Ruby, would be immediately looking for a library or a framework. Not so much because they don't wanna write code, but because that was such a strong message.

**Blake Mizerany:** Right. Usually what I advocate in those scenarios is I go look for something that does what you're looking for and then copy and paste it into your code. Obviously, you can give attribution as well, but usually what I see when people ask that is that they're looking for a quick fix, for something that's already... How do I phrase this...? I think they're assuming the solution to their problem is going to be much harder and much more complicated than it really is. That's why people will reach for something...

\[\\00:12:07.13\\\] Not to point fingers to anyone, but I've seen libraries where people have written an entire library to do exponential backoff. To me, that's a really simple four-loop and a random sleep; it's nothing too complicated. What I see in those libraries also is that what they wind up doing is you wind up with something that's much harder to use and requires more code to use that thing than if would had you just implemented it yourself. Usually that's what I see. Just really dissect the problem down to what it really is, and try to come up with the simplest solution. A lot of times it can be solved with a four-loop.

**Carlisia Pinto:** That is a very good point. I started writing a greenfield app that I know is going to be in production sometime soon, and of course my being new to Go, my first reaction was "Well, let me look for some libraries that do this stuff that I haven't done, since I worked with Java." I haven't done codes that directly access a database for ages, because I had been working with Ruby and I have libraries that do that; Rails itself did that. So I was looking for the framework just to give me a little bit of nudge, so I didn't have so much of a learning curve; like, I'm learning things in Go still, and I don't wanna be looking into all of that at the same time. But now that I'm very comfortable with what I'm doing, I'm thinking "The next project I do, I don't even want to use the libraries." I want to focus more on using the standard library, learning what the standard library offers and be more intimate with that, because I think it's going to be to my benefit knowing that, and also using idiomatic Go, and not depend so much on what framework is out there. It might be that this framework is good for this, that framework would be good for that... No framework is going to be good for everything, and you might as well just know how to do it.

And like you said, I think your point is so good, because it ends up not being that hard. Now, after I looked at it, I was like, "Okay, this is not that complicated."

**Blake Mizerany:** Right.

**Erik St. Martin:** I think you hit on it a little bit at a talk you did - I believe it was a DotGo a couple years ago... You talked about pre-determinism. When you attack a problem and you think you already know what you need, and for most of us, especially when you come from Python, Django or Ruby with Rails, you feel like "Okay, I need to build a web app... I need a framework, because that's what I'm used to having when I build one", instead of kind of starting to build it and figuring out what you need as you go along.

**Blake Mizerany:** On the other side of that, I wouldn't recommend implementing your own database driver or \[unintelligible 00:15:08.26\] Those types of things aren't something you just kind of throw together pretty quickly and then be done with it; they require a little bit of thought. The nice thing about those is that they have very specific problems that they solve, rather than trying to solve every single problem.

**Erik St. Martin:** That's a fair point.

**Blake Mizerany:** That's generally when I start bringing things in, and bringing dependencies in is when it's something like that.

**Erik St. Martin:** If it's a problem that is only ever explained in formal papers, you probably want a library for it.

**Blake Mizerany:** Right. I implemented the first Postgres driver for Go for the database SQL package, and I'm here to tell you that it's not something you just wanna do. I had to do it at the time, because nothing existed, but I would have preferred someone else did it.

**Erik St. Martin:** \[\\00:16:08.23\\\] That's a good question, too... Because you came in so early and there weren't a lot of libraries existing already, so you kind of had to pave the way anyway. Do you feel like that kind of influences your desire to just kind of write it from scratch most of the time? Or is it really just you don't want the overhead of pulling in ten thousand lines of code to save yourself one four-loop?

**Blake Mizerany:** It depends on what we're trying to do... When I say "we", I mean us at Backplane. We're trying to get something done by the end of the week; there's no problem with bringing a dependency in, but we'll definitely reevaluate it pretty quickly. But there is this strong urge a lot of times where I just want to go off and say "Oh, I'm just gonna do this myself, it sounds like fun", but then I have to stop myself, because a lot of things that people work on are hard problems. A lot of these packages out there, it's not worth rewriting. Does that answer your question?

**Erik St. Martin:** Yeah, I definitely think it does. There's a "not invented here" syndrome that people can get wrapped up into, but like you said, you just kind of have to be pragmatic about your decision of whether or not to pull in a dependency or rewrite it yourself.

**Blake Mizerany:** And be self-aware as well, just to make sure you're not doing it just to do it.

**Erik St. Martin:** Unless you want to, for fun.

**Blake Mizerany:** Right, exactly. There is some context needed there. If you want to do it for fun, then by all means, you're trying to get something out the door, put something into production.

**Brian Ketelsen:** I know we've only got a few minutes left with you because you've got a hard stop in a few minutes here, but my big question for you is around building a startup in Go. What advice do you have for other entrepreneurs who are considering using Go for startups?

**Blake Mizerany:** I think they should, but again, also depending on what it is they're trying to do. For us, it's been a real boom, we're extremely productive. We're working on a lot of distributed systems-y things here, and Go suits us extremely well and helps solve a lot of the problems with relative easy, while also maintaining a lot of performance. I don't know, it's a tough question. Do you have any more context you can give me around your question?

**Brian Ketelsen:** No, I was just curious, now that you've had almost a year in Go as a CEO of a startup, is there anything that you would change? Are you having a difficult time finding developers? Is the talent pool big, is the language mature enough? Those are all questions that investors and entrepreneurs want to answer before they start to commit to something like a language.

**Blake Mizerany:** Right. I think what's great about Go is that it's easy to learn, so if you're having trouble finding people that aren't as senior as you might hope, the great thing about it is that people can learn extremely fast. I did spend quite a bit of time - probably I spent too much time early on trying to find extremely seasoned Go engineers, and they're extremely hard to come by and they're in very high demand. You don't have to go after those people; you can easily find people that are extremely intelligent and extremely willing to learn and who are extremely hungry and want to learn and they learn really fast when they're in that mindset. So don't try to go find the rockstars all the time. If you can get them, great, but the language lends itself to be learned very easily.

**Brian Ketelsen:** \[\\00:20:18.17\\\] Very good. Alright, we know that you've gotta go quickly, so we will say our thanks and goodbyes. We appreciate you coming on the show today.

**Blake Mizerany:** Thank you for having me.

**Erik St. Martin:** It's been a lot of fun.

**Carlisia Pinto:** Thank you, bye.

**Blake Mizerany:** Take it easy.

**Carlisia Pinto:** What a bummer that he had to leave so early.

**Brian Ketelsen:** I know...

**Erik St. Martin:** Why do we all have to have jobs?

**Brian Ketelsen:** And now, who wants to work? \[laughter\] The good news is there's a lot of interesting stuff going on in the Go community, so we can talk a lot about all of the exciting things that have been happening. I've seen a thousand cool Go projects this week.

**Erik St. Martin:** Before we jump on this, why don't we talk about one of our sponsors? Because this is a nice, clean break, and then we can jump into some interesting Go projects and news.

**Break:** \[\\00:21:05.05\\\]

**Erik St. Martin:** You had mentioned too that all of the new Changelog stuff is hosted on Linode - which, if anybody has not seen yet, you should go check out the new Changelog site and the new GoTime.fm site. Adam and Jerod and the team have been working tirelessly on this for I don't know how many months, and it is finally here and it is fantastic. Also, it's backed by Fastly's CDN, which Carlisia's working for right now.

**Brian Ketelsen:** Yay, Fastly!

**Carlisia Pinto:** Fastly's awesome.

**Brian Ketelsen:** I'm excited because it's written in Elixir and Phoenix, and I would love to see the code. I know that in their blog post they mentioned that they planned on open-sourcing it, so I'm really looking forward to seeing an implementation of a serious system in Phoenix, so that I can get a better idea of what that looks like. It's on my to-do list for this year to play with Elixir and Phoenix, because they seem like interesting technologies.

**Erik St. Martin:** Yeah, actually an interesting point that I forgot to mention is that they're releasing all of this open source, so if you plan on running your own podcast or a series of podcasts, you've got the hookup from Changelog.

**Brian Ketelsen:** Yeah.

**Carlisia Pinto:** But any CMS in general... This is a CMS that they podcast content on top of.

**Erik St. Martin:** That's true. You could just use it as a CMS. Adam in the GoTime FM channel is saying they're still polishing some things up in the readme and stuff, but it won't be long. If you're subscribed to Changelog Weekly, you will see when it's announced.

**Brian Ketelsen:** If you're subscribed to Changelog Weekly, you'll see it at the top of the coolest GitHub repository list. Oh, that's the Changelog Nightly... Never mind. That's my trigger to go to bed, did I ever mention that? Changelog Nightly comes out at midnight every night, and I'm like "Oh shoot, it's time to go to bed." \[laughs\]

**Erik St. Martin:** \[\\00:23:56.13\\\] See, I get all these newsletters and there's always cool things in there and I don't have time, so I'll typically have multiple browser windows open, which are kind of like context, work and non-work, and the non-work one is always full of all the tabs that come from these e-mails and Twitter, and people sending me direct links. And they hang out there, there'll be 30 tabs, and then I'll look at two or three of them and eventually I abandon the rest, because they've been hanging out there too long. I just leave Brian to curate it for me. He tells me what the good stuff is.

**Brian Ketelsen:** Well, that's a problem... I've been so busy lately I haven't even looked at most of the good stuff. I have a giant list of things that look interesting to touch, and I haven't played with them at all, which makes me sad. Although I did do something pretty cool this week that's kind of funded. If you follow me on Twitter, you'd have seen it. I embedded a term.js terminal inside Go's present tool, and hacked up the present tool to understand a syntax to open and create and attach to a Docker container, so that you could have a live terminal embedded in your presentation. That was probably the most fun hack I've done in months and months. It was so cool.

**Erik St. Martin:** When you open source it, is it gonna have Hightower in it? Because it helps facilitate giving live demos, like Kelsey.

**Brian Ketelsen:** \[laughs\] I don't know. I've been trying to think about a name for it, and... I wanted something with Frankenstein in the name for it, because it's just this giant ball of spaghetti garbage code right now. At this point, I'm calling it Present Term, but who knows... Names accepted.

**Erik St. Martin:** I think it was Brad that called you on that, that he did it at the first GopherCon.

**Brian Ketelsen:** I saw that this morning, I was so mad. Here I was, thinking I was trailblazing; Brad did it in 2014. Thanks, Brad. Shut me down!

**Erik St. Martin:** There are no great inventions. Somebody else has already done it before you.

**Brian Ketelsen:** I know... Cranky.

**Erik St. Martin:** So let's talk about some other news and projects that everybody's run across this week. Carlisia, have you got anything for us?

**Carlisia Pinto:** I do, actually. I work a lot with APIs, and sometimes ago I googled... You know, I have this JSON, I have to write a struct for it. Maybe there's a way to convert the JSON to structs, because you know, I'm lazy... And there was. I could not believe it, and it has such a nice UI. When I looked at it, it was made by Matt Holt. Frankly, it's unbelievable how many things Matt does, and everything he does is so well done. I really love it.

It's JSON-to-Go... We'll put a link on the show notes. Basically, you drop some JSON and it magically transforms that into Go structs for you. This cannot get any easier.

**Brian Ketelsen:** It's magical, I've used it dozens and dozens of times.

**Carlisia Pinto:** Yeah, right? Because you do this all the time. You're pinging an API, and you need to receive a struct. It's so handy to have that... You basically just copy the struct and put it in your code, and voila! In the same way, he has a curl-to-go tool, where you paste a cURL, let's say a call to an API, and it will give you the Go client to make that call, and you place it in your code and it will work. It's like magic. So thank you, Matt, for doing those tools.

**Brian Ketelsen:** \[\\00:27:55.09\\\] Those are great, good call.

**Erik St. Martin:** I've got a fun one that I ran across, it was created by Nate Finch. I wanna say it's pronounced Gorram. It's really cool, it's like a command line application where you can specify a package, a method and parameters that you wanna call, all on the command line. It's like writing single-line Go apps from the command line, which is just ridiculously cool. I've started writing some shell scripts using it, because it's easier to do than Bash.

**Brian Ketelsen:** Yeah, it's crazy. You can call any standard library function, and it will do all of the smart stuff to convert your Bash parameters into the correct types to make that call. I think I said on Twitter, it's one of the coolest hacks I've seen in forever. It's really neat. Shout out to Nate!

**Erik St. Martin:** Yeah, I'm interested to see the motivation behind creating it. That's always the fun part for me... You run across these projects that are really cool and you start playing with them, but I want to understand what was going through somebody's head, what was the problem he was trying to solve with this.

**Brian Ketelsen:** Let's get him on the show.

**Erik St. Martin:** We should.

**Carlisia Pinto:** We should.

**Erik St. Martin:** Nate's done a whole bunch of staff.

**Brian Ketelsen:** Noted. Nate Finch, on the show. If you're out there, Nate, we're looking for you.

**Erik St. Martin:** No is not an acceptable answer.

**Brian Ketelsen:** \[laughs\] I've got another one... I think it's Bjørn Erik Pedersen that released React in Go today, his Go React library for GopherJS. I played with it way back in December of last year, when it was really brand new, and it wasn't quite ready for primetime yet, and he's still kind of couching, saying that it is still not production-ready. But the fact that he released it to the public means it might be. If you're not familiar with GopherJS, it's a Go transpiler that emits Javascript, lets you use Go on the frontend. The Go React is a GopherJS wrapper around React, so you can write react apps without writing any Javascript. That, my friends, is a win.

**Erik St. Martin:** That's really interesting, because that typically is the way I'm doing web apps these days, kind of thick client with React and Go on the API side. So it would be interesting to see writing the React in Go. But I'm not always a big fan of that, because even in the Ruby world - and Carlisia and Brian, you guys probably both remember this... Remember RJS?

**Brian Ketelsen:** Mm-hm.

**Erik St. Martin:** I don't know whether it's still there, but it was pre three... There was something called RJS, where basically you wrote your Javascript functionality calling into your app in your templates using Ruby, and it generated Javascript on the outside. I was just never really a big fan of that.

So it's kind of like doing the same thing and you wonder how much you wanna cross into the other side, but I'd be interested to see what the API for it looks like, because it may...

**Brian Ketelsen:** It looks very Go-ish, and it's really not bad. The fundamental problem I have with it is that you have to understand React before you can use Go React, and in order to understand React you've got to learn from all of the tutorials and places out there that are using the Javascript version, or the JSX version, or whatever those are called. So there's a mental disconnect when you're reading these tutorials on how you're going to implement that on the Go side of things, and that makes it a little bit harder. If you know React really well already, then it's probably not a big deal. But learning to use a transpiler like that gets complicated.

**Erik St. Martin:** \[\\00:32:10.02\\\] I think that falls into the leaky abstraction category, where you're trying to abstract some concept but you still have to have some deep understanding of the thing you're abstracting.

**Brian Ketelsen:** Yeah.

**Erik St. Martin:** Alright, what else do we have?

**Brian Ketelsen:** DigitalOcean just released a library called go-qemu, and I've never known how to pronounce qemu, but it allows you to interact with the virtual machines from Go. You can launch VMs from either the host machine or over TCP across the network. You can start them, stop them, get information about them... If playing with VMs is in your to-do list, there's a really nice Go wrapper for qemu from DigitalOcean that was just released today.

**Erik St. Martin:** Alright, interesting. I have not seen that at all.

**Brian Ketelsen:** It's interesting to me, because I have been looking at ways to spin up VMs really quickly, and what timing!

**Erik St. Martin:** Alright, so that is now in one of my many tabs.

**Brian Ketelsen:** \[laughs\] Yet another tab. It's like a to-do list that never dies.

**Erik St. Martin:** One thing I did wanna touch on too is a new repo that Cory LaNou has been working on, which is kind of like this recipe for starting a Meetup group. I think that's really awesome, because we really need more of these happening around the country. It's great to share our knowledge and to get more people interested in the language we love and to give people a forum to dip their toes into public speaking and things like that. So I highly suggest everybody check that out if there's not a Meetup group in your area.

**Brian Ketelsen:** Where's the repo for that?

**Erik St. Martin:** I will drop it in the GoTime FM channel. It's /corylanou/go-meetup.

**Brian Ketelsen:** Awesome.

**Carlisia Pinto:** Yes, this repo is really fantastic. I haven't seen better suggestions for running a Meetup than here.

**Brian Ketelsen:** No, it's really the Meetup bible. I pointed somebody at it maybe two days ago. It's good stuff. Go, Cory!

**Erik St. Martin:** Yeah, I might need to help expand this too, because I've had a goal since 2014, maybe even a little earlier, to consolidate a lot of the lessons that Brian and I have learned from organizing conferences, and maybe help people with a recipe to start smaller regional events to help. More stages is a good thing.

**Carlisia Pinto:** Now that I'm looking at it, just one comment I have for you Cory - I know you are on the Slack right now... Not every Meetup has to be people presenting. For example, the Meetup we do in San Diego, we don't do presentations; we get together and code as groups, and that is amazing. Everybody loves it. At least, I have not seen anybody say I would prefer presentations. Everybody loves this format, so it's another option, too.

**Erik St. Martin:** I think Brian and I are guilty of that too, because the Go Tampa Meetup... I don't think we've had a Meetup in a while, and it's mainly because we feel like it's hard to prepare presentations; we're always so busy, so trying to make the time to create presentations gets difficult, and then we don't end up scheduling a Meetup. But really, I think people just wanna hang out and talk Go, so I think we need to do a better job of doing stuff like that - just get everybody together and help each other with projects and problems that we're working on... Or even if it's just beers and socializing and talking about Go, I think that there's still value in that. I need to connect with that myself, that there doesn't have to be a presentation ready to run it.

**Carlisia Pinto:** \[\\00:36:10.02\\\] And I stand corrected - there is a section on that repo that talks about options other than having speakers. And I agree with you, Erik. I see people struggling to find speakers sometimes, so it's nice to know that you can do other things as well.

**Erik St. Martin:** We had a Ruby Meetup here that was doing a really cool thing. I forget what frequency they were doing them on, but basically what they would do is they would pose a small problem, almost like the exercism.io problems, and everybody would submit them anonymously to the Meetup organizers, and then in order to attend you had to have submitted, and then basically everybody would kind of sit there and together, collectively code review all of the submissions in kind of like this anonymous fashion. Nobody had to feel guilty that people were saying something about them personally, or would know that they made some silly mistake, or something like that.

It was actually a really cool idea. It wouldn't be bad to try that in the Go world too, where people submit even exercism.io problems and we get together in person and talk about it.

**Brian Ketelsen:** That's a great idea. When we talked to Katrina, she mentioned that one of the things that she really needed was reviewers, so we could actually do a Reviewathon as a Meetup topic, and sit down together and use groupthink to think about the best way to attack a problem.

**Erik St. Martin:** That's true... Not even have to have their own submission; just collectively, as a group, review other things. That's cool.

**Brian Ketelsen:** Yeah, that's a good idea.

**Carlisia Pinto:** With Exercism you do have to do a submission for the exercise before you are able to comment on that exercise, so at least one person would have to. But I also see the benefits of everybody working on the exercise, submitting it and then doing a review. This person can add comments separately, but as a group.

**Brian Ketelsen:** Yeah, that's a great a idea. I like this.

**Erik St. Martin:** Yeah, just have everybody who's showing up as a prerequisite to submit this.

**Carlisia Pinto:** But you can also do that during the Meetup, because a lot of times we don't feel motivated... "Oh, that's an extra thing that I have to do", but if you're in a Meetup with a group of people and everybody is doing the same thing, it's more motivating. Just a thought.

**Brian Ketelsen:** A good one.

**Erik St. Martin:** Yeah, definitely something to play with. Alright.

**Brian Ketelsen:** I found another package that I bookmarked... I'm just going through my GitHub stars to remind me of interesting things. This one is called go-conv, and it's by cstockton on GitHub. It does reflection list conversions from Go's native types. You can convert a byte array to a string, or the word "true" to a boolean, and it does it without reflection. It promises to be faster than the other kinds of things like that that do it with reflections. I'm interested in seeing whether that is a useful package. I haven't played with it yet so I don't have any opinions, but it's something we do a lot of, these conversions, and doing them well is never easy. It would be an interesting one to take a look at.

**Carlisia Pinto:** I saw the headlines for that... Can we get a link please, Brian?

**Brian Ketelsen:** Yes, I will drop it in the Slack. It's github.com/cstockton/go-conv. It looked interesting.

**Erik St. Martin:** Yeah, I have to take a look at that, and think of use cases where I don't typically just use strconv, or whatever. Everybody has different pronunciations of these standard library packages. I'd love to get a list of just... Because you don't really say these things, right? Everybody now knows it's fumt (fmt), right? \[laughter\] But nobody knew that before.

**Brian Ketelsen:** \[\\00:40:15.24\\\] I don't think everybody knows that still. The 1,500 people at GopherCon were all shocked the first time they heard that.

**Erik St. Martin:** Yeah, I think people call it stirconv... I used to pronounce it string.

**Brian Ketelsen:** Yeah, I don't know... I 've had several strange moments where people pronounced package names and I thought, "I don't say it that way..." \[laughter\]

**Carlisia Pinto:** I will never forget the first time I heard fumt, it was from Katrina, and I was stumped.

**Brian Ketelsen:** You were stumped by fumt? \[laughter\]

**Carlisia Pinto:** It was pronounced fumt. I'm like, "Really?" \[laughs\] I would never guess.

**Brian Ketelsen:** Yeah, I'm with you on that one.

**Erik St. Martin:** Also, I don't think that it would be an episode of GoTime without me mentioning another database that I have found written in Go. This one's called SummitDB.

**Brian Ketelsen:** Oh, I saw that.

**Erik St. Martin:** It looked like it was built on top of BuntDB, which I think we may have mentioned before on the show. It's basically backed by a Raft consensus algorithm, but it has wire compatibility with Redis. Some of the cool things with it is spatial indexing, and that tends to be something that I look at a lot, because people are doing more and more stuff like that, with bounding boxes and trying to find things that fall within, overlapping... Geospatial indexing is really cool, and can be useful in different types of projects. I thought that was cool.

I think it uses Otto, which is a...

**Brian Ketelsen:** ...Javascript interpreter?

**Erik St. Martin:** Yeah, and you can bridge between Javascript and Go, and I think that's how they're using it for queries under the hood. In my defense, I have not dug in too deep, but I knew that it does have Redis compatibility too, so I think that's really cool. And it's all in memory.

**Brian Ketelsen:** Yeah, that's pretty slick, and they claim ACID compliance, which is interesting. I wonder how fast it is, if it's got Raft and ACID at the same time. Those two together sound kind of mutually exclusive. Fast + Raft? You have to have consensus between machines, but you're getting consistency and an ACID database... There's gotta be a tradeoff there. Maybe the tradeoff is no disk writes.

**Erik St. Martin:** Right. For anybody who's listening live, there's two ways you can get these links... We tried to do our best while we're talking about these things to either drop the link in the GoTime FM Slack channel, and on Twitter. So if you're following along on either of those, you should be able to find these links as we're talking about them.

**Brian Ketelsen:** @GoTimeFM on Twitter?

**Erik St. Martin:** Yes, @GoTimeFM. Okay, so I think that it's about time for another sponsor break. What do we have?

**Break:** \[\\00:43:06.13\\\]

**Erik St. Martin:** But still, regardless of the history of Code School and how now owns it, their training has always been really cool. I've just pulled up their site too, and they've got a bunch more training stuff, like Surviving APIs with Rails, Rails **Carlisia Pinto:** Zombie Outlaws...

**Carlisia Pinto:** I subscribed to their courses for a long time when I was doing Rails. I'm looking forward to checking out this Go course.

**Brian Ketelsen:** Yeah, they've got great production quality, so it's good stuff.

**Erik St. Martin:** Here we go, my brother is serving as your memory right now. He just messaged me and said he thinks the other one you were thinking about in Orlando is Treehouse.

**Brian Ketelsen:** No. No, I was definitely thinking about Envy.

**Erik St. Martin:** Okay, so he is wrong.

**Brian Ketelsen:** But Treehouse is where Joe Steele worked, so now we're talking about Tampa people. \[laughs\] Sorry.

**Erik St. Martin:** So if you're from Tampa and you know Joe, you know who we're talking about.

**Brian Ketelsen:** Shout out to Joe.

**Erik St. Martin:** Moving on to \#FreeSoftwareFriday. Who wants to go first this week.

**Brian Ketelsen:** I do, I do, I do! Pick me! Pick me, please!

**Erik St. Martin:** Carlisia...? \[laughter\]

**Carlisia Pinto:** Go, Brian.

**Brian Ketelsen:** So I wanna shout out to the folks at CoreOS. I've been all over the place this week, doing training materials and spinning up Linux machines, and I realized that pretty much everything I did had a CoreOS component in it at some point this week. So shout out to all the folks at CoreOS and the people who helped maintain CoreOS - Linux, Etcd, Fleet, Flannel, and all of the great tools that CoreOS has been putting out in the open source community. We appreciate it.

I know that they're building a commercial product on top of Kubernetes called Tectonic, but I'm happy that they work so hard to give back to the open source community while they're still trying to make a buck. I think that's a great business model. So thanks, CoreOS.

**Erik St. Martin:** It's surprising when I look at the stuff that they put out. The amount of their own projects they're contributing, and you said there's even more that you haven't mentioned. They had Clair, which does vulnerability scanning on containers. There are so many things they're putting out, but they're also contributing back to Linux Kernel, systemd, all these things... And it's hard to believe that this is actually a company that is for-profit. It seems like everything they do is just free to the world and helping out.

I think that we owe them a ton of gratitude for all the things that they're doing in the Go world and in the container and orchestration space.

**Brian Ketelsen:** \[\\00:48:00.25\\\] Yeah, and we didn't even mention Rocket and how much work they've done in Kubernetes... Good folks over there at CoreOS.

**Erik St. Martin:** Yes. How about you, Carlisia?

**Carlisia Pinto:** I wanna give a shout out to coffee... Nah, I'm just kidding. I'm not, but... \[laughter\]

**Erik St. Martin:** \[unintelligible 00:48:17.22\] delightful alternative, Red Bull.

**Carlisia Pinto:** It's amazing what two cups of coffee can do, I tell you. Anyway... I wanna give a shout out to this repo that is called Stability Badges. Basically, it gives you SVG badges for Go projects, but I can't see why this couldn't be used for any project. The badges are things like Experimental, Unstable, Stable, Frozen and Deprecated. It would be super nice if project maintainers could add badges to their repo, so people would know "Hey, this is deprecated" or "This is active, stable" or "Experimental."

**Erik St. Martin:** Oh, that is pretty cool.

**Carlisia Pinto:** It is, isn't it?

**Brian Ketelsen:** I like that. Is there one that I could put on all of my projects, that says "Warning! Don't touch!" \[laughter\] Oh, there is... Experimental. Yeah, I'll just leave it there.

**Erik St. Martin:** I'm looking for the one that says, "I wrote this a really long time ago. I barely knew Go. It kind of worked. I'm doing other things now."

**Carlisia Pinto:** "I'm better now."

**Erik St. Martin:** "I'm better now and I don't use this."

**Brian Ketelsen:** "Stability status: don't judge me!" \[laughter\]

**Carlisia Pinto:** Exactly.

**Erik St. Martin:** I like that one.

**Brian Ketelsen:** I'm making my own badge.

**Carlisia Pinto:** There is always a PR. That's only a PR away.

**Brian Ketelsen:** That's true. My first pull request, "Don't judge me."

**Erik St. Martin:** Alright, I'm gonna pull up the link for mine real quick, so we can kind of get a headstart for anybody who wants to look at this while we're talking about it, because it does a lot.

**Brian Ketelsen:** This is crazy!

**Erik St. Martin:** Yeah, so mine for today is called My Looking Glass, which is kind of abbreviated, myLG. It's actually really cool because it's one tool and this is all written in Go, but it does ping, traceroute, you can do BGP and look up routes, whois, port scanning, you can look at peering information, DNS... I'm trying to think of everything else that this does. I think it does layer two discovery, traceroutes, tcpdump...

**Brian Ketelsen:** I did an mDNS discovery on my network with it a week ago, trying to find a device that I couldn't find an IP address for. It's awesome.

**Erik St. Martin:** Yeah, it's really cool because it also has an interactive console that you deal with, and it's kind of all in one place. I find it interesting because many of the tools that we use for these have been kind of set in stone for so many years, you just kind of lean on them all the time, so it's interesting to see people reapproaching that. I find it even more cool that it's all written in Go.

I'm trying to break my habit, because I'm just used to typing "dig" or "nslookup", "nmap", or things like that, so I'm trying my best to be like "No!"

**Brian Ketelsen:** ...that's that!

**Erik St. Martin:** Yeah.

**Brian Ketelsen:** I swear I use netstat 16 times a day. netstat-lntp. Who the hell is listening on that port?

**Erik St. Martin:** And you look at the man page for netstat 20 times a day.

**Brian Ketelsen:** No, because I only use it for one thing, to find out who's listening on the damn port I'm trying to open.

**Erik St. Martin:** \[\\00:51:53.20\\\] One of my all-time favorite Linux commands is List Open Files. That's awesome, to be able to see who has a port or a file open, or to see what files your process has open. You can go the other way around, too. I think that's \[unintelligible 00:52:12.23\] cool.

**Brian Ketelsen:** Yeah, that's where I've used LSOF - trying to move binary from one machine to the other, and call LSOF to see which shared libraries it's using or where it finds its configuration. That was another thing I used it for. "Where is the damn configuration file for this?" You call LSOF and "Oh, there it is."

**Erik St. Martin:** The only other command I've used a ton this week is strace.

**Brian Ketelsen:** You're on your own there.

**Erik St. Martin:** You're either using it for a lot of fun or a lot of pain. \[laughter\] I had a weird issue with Docker. The container taking ten times the amount of time in a sleep; consuming ten times the amount of time on the CPU during a sleep call, whether or not it was running in the container or out, and then it turned out to be that it's something in the set comp profile, one of the sys calls. So you run it unconfined or in privileged mode - problem disappears.

**Brian Ketelsen:** Did you phone a friend and called Jess Frazelle?

**Erik St. Martin:** I did, I did...

**Brian Ketelsen:** Awesome!

**Erik St. Martin:** ...and it still wasn't able to track down... It's gotta be another system call being called by another system call. I eventually gave up.

**Brian Ketelsen:** If anybody knew about set comp and Docker, it would be Jess.

**Erik St. Martin:** Yeah, I told her I knew she had fun with stuff like that. I didn't think she thought "fun" was the proper word for it. \[laughter\] It can be fun to dig into these things sometimes, because you always come out the other side learning a lot more. On the other hand, when you have deadlines to meet, you end up more stressed than anything.

Okay, so did we have anything else we wanted to talk about before we close out the show for today?

**Brian Ketelsen:** I can't think of anything.

**Carlisia Pinto:** Me neither.

**Brian Ketelsen:** We were all over the map today, good show.

**Erik St. Martin:** It's been fun.

**Brian Ketelsen:** It's the ADHD edition of GoTime FM.

**Erik St. Martin:** It's the "I forgot to take my Adderall" edition. \[laughter\] With that, I want to thank everybody who's still on the show, and Blake, if you listen to this when it's recorded, I wanna thank you again for coming on the show. Thanks to anybody who's listening live and interacting with us through Slack, and thank you to all the listeners who will be listening once this episode is released.

Huge shout out to our sponsors Linode and Code School for making this happen. Especially Linode, for being the provider of our new Changelog system. Again, if you have not seen that site, please go look at it because it is awesome and everybody worked really hard.

We should put in the show notes links to people's Twitter handles so everybody can thank all the people responsible for making it happen.

**Brian Ketelsen:** And don't forget Fastly, for their awesome CDN and for making the wise decision to hire Carlisia.

**Carlisia Pinto:** \[laughs\]

**Erik St. Martin:** That's our favorite part of all, that they hired Carlisia.

**Carlisia Pinto:** Well, I wanna say that I put the GopherCon Brazil website on the Fastly networking, which by the way, they are comping, so it's free...

**Brian Ketelsen:** Wow...

**Carlisia Pinto:** And there's this site called webpagetest.rog where enter your URL and you get grades for different aspects of your website - it mostly hast to do with speed - and you went from an F to an A. It was amazing. I didn't even tweak anything on the Fastly site, because there were a lot of things I can tweak; I just added the CDN. So there we go, Fastly is awesome.

**Brian Ketelsen:** \[\\00:56:03.27\\\] Wow... I'm testing GopherCon.com right now, because I've gotta know.

**Carlisia Pinto:** Test all the things, this is awesome.

**Brian Ketelsen:** That's cool.

**Erik St. Martin:** Alright, so where did I leave off?

**Brian Ketelsen:** You were congratulating the panel and thanking the listeners.

**Erik St. Martin:** Yes, and if you have not subscribed already, gotime.fm, you can subscribe. Eventually, we're going to get a weekly e-mail going out, so make sure to sign up there, follow us on Twitter if you're not, we're @GoTimeFM. If you want to be on the show or have suggestions for topics or guests, please submit an issue on our GitHub repository, which is GitHub.com/GoTimeFM/ping, and I think that is it. Thanks again, everybody.

**Brian Ketelsen:** Thank you.

**Carlisia Pinto:** Thanks everyone, bye.
