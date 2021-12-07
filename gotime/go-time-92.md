**Mat Ryer:** Well, hello there everybody, and welcome to Go Time! I'm Mat Ryer, and today we're talking web development with Go. You know the internet? It's massive now, it's really taken off; it really is doing well. And lots of the stuff that's on that internet was made with - you guessed it - web development.

It's a big subject, and joining me to discuss it today, we're welcoming back the one and only - it's Mark Bates. Hello, Mark.

**Mark Bates:** Hello, Matthew.

**Mat Ryer:** It's been a while... So the second voice you've heard there is also one of our panelists... It's only Johnny Boursiquot. Hello, Johnny!

**Johnny Boursiquot:** Hello there.

**Mat Ryer:** Do you have any insults for me, top of the show? Just get them out of the way. \[laughter\]

**Johnny Boursiquot:** No, no. I think I'm gonna hang on to them. I'm unleashing them when you least expect them, kind of thing. I think it has a better impact that way.

**Mat Ryer:** \[laughs\] Good. It probably does. And we're also joined, again, by -- it's only Aaron Schlesinger. Hello, Aaron.

**Aaron Schlesinger:** Hello! Well done on the name, by the way.

**Mat Ryer:** Thank you, yeah. It was no effort. Not much effort. It took me weeks.

**Aaron Schlesinger:** Yeah, of course. I continue to be impressed.

**Mat Ryer:** So how have you been?

**Aaron Schlesinger:** I've been very well, thank you.

**Mat Ryer:** Good. Johnny, I didn't ask you - how are you settling in? You've started in your new role... How's it going?

**Johnny Boursiquot:** Yeah... When do I stop calling it new? It's been like a month, I think... But yeah, it's coming together. A lot to learn, as you can imagine. It's a pretty large tech stack, so... Yeah. Right now I'm just a student, just basically putting myself in every meeting I can find, just to ingest some information and know what's what, and hopefully I start being productive and start to earn my keep.

**Mat Ryer:** Yeah, cool. It sounds good though, it's exciting.

**Mark Bates:** When you hit the meeting, Johnny, that says how to get Heroku credits to all your friends, then let me know.

**Johnny Boursiquot:** Yeah, I've got you on -- yeah, I'll text-message you immediately once I get that.

**Mark Bates:** I love you. I've long since been a fan of Heroku, I think it's fantastic... But that's just me.

**Johnny Boursiquot:** Agreed.

**Mark Bates:** I should hope so. \[laughs\] Johnny's like "I can't stand it! In it for the money." \[laughter\]

**Johnny Boursiquot:** Well, that is true. I'm in it for the money. Yeah, I don't work for free.

**Mat Ryer:** Fair enough. Well, so I was thinking about that - hosting Heroku, and stuff... I use App Engine quite a lot, and you can do these things quite easily hosting static sites, but it's when the sites can't be static - that's when things get more interesting. What's the experience so far on the panel of people building things for web in Go? Any thoughts?

**Mark Bates:** \[04:15\] That's a loaded question...

**Aaron Schlesinger:** Yeah...

**Johnny Boursiquot:** Indeed.

**Mark Bates:** We all have thoughts, that's why we're here... I mean, where should we start?

**Aaron Schlesinger:** I heard about this web development framework named after an animal... Written in Go, too.

**Mark Bates:** Iris?

**Aaron Schlesinger:** Iris? That's an animal?

**Mark Bates:** Oh, I don't know... It is a beast in the community...

**Aaron Schlesinger:** Oh, okay... I didn't know. \[laughter\]

**Mat Ryer:** Well, before we get into that, let's talk a bit about what you can do with Go as far as web development, what you can do with the standard library, and we can talk about any shortcomings in that, and maybe there are external solutions we can look at.

One of the things that strikes me is that actually the net/http package did quite a good job of giving us the basics -- not just the basics really, but everything you need to build things for web, including... There's an HTML templating library, which is for the very basic use cases (I would say) kind of perfect, but if you start to build anything bigger, as with lots of things in the standard library, they're often great to just use initially... And as things get more complicated and you have to do more advanced things, then you have to look elsewhere.

Templating is one example where I tend to now skip over using the internal HTML templating package, and I jump to something like Plush - which came out of the Buffalo project - for templating just straight away, because I know that pretty soon the content is gonna get more complicated than just basic templating.

What about your templating experiences, or any of the subjects?

**Mark Bates:** For me - obviously, I find the templating a bit lacking, which is why Plush came to be, and why we're working on the successor to Plush now, but... I wanna take it back even further and just talk very quickly about the standard library. I think everybody knows I'm pretty opinionated about my view of "Just use the standard library." I think - and I know - that the Go team kind of agrees that the standard library are building blocks; they're not meant to be the kind of be-all-end-all.

All the languages I've worked in have had standard libraries, and they've all had web components to them, and some are better than others. What I can tell you is that we didn't use the standard library straight up in Java most of the time, we didn't use the standard library in Ruby most of the time when I was doing those, and vice-versa.

I think the Go standard library first of all provides a solid web server, unlike any other standard library I've ever used. But then I think what's there are great building blocks, but we shouldn't be treating it as this kind of like perfect solution to everything, because it's not perfect; there's a lot of work you've gotta do on top of all that, and the standard library doesn't even have everything you necessarily need to truly build complex web apps. You've gotta assemble all those pieces together. And the first step of that, I think most people see, is the ServeMux. It's always "Use the standard library" and then there's an asterisk of "But you know, use gorilla/mux, too." So you're not immediately not in the standard library anymore.

I think we just need to understand as a community that there are a lot of great things in the standard library, and there are a lot of great packages outside the standard library, that make it faster and easier for us to build more and more complex stuff.

**Mat Ryer:** Do you only ever use the gorilla/mux, or are there times when you just use the built-in stuff?

**Mark Bates:** There are very few times where I use the built-in stuff. I use it if it's a couple endpoints and nothing too dramatically complex. If I wanna start getting into HTTP verbs, and kind of more advanced routing, then I absolutely just jump straight to gorilla/mux.

**Mat Ryer:** \[08:07\] Yeah, agreed. I'm the same, actually. Even if it's a couple of verbs, I might have a switch case in there, or just something...

**Mark Bates:** Right.

**Mat Ryer:** But anything beyond that... Anytime I'm pausing the path to get parameters out of it, and things like that, then yeah, I use a gorilla/mux straight away. Anything else on that?

**Mark Bates:** I could keep talking. I love to hear other people talk.

**Aaron Schlesinger:** Does anybody else use the Echo framework?

**Mat Ryer:** No, I haven't used it.

**Mark Bates:** I used to a long time ago. I really liked version one of it, and then they went interface-heavy in version two, I think, and started supporting multiple engines, and it got very complicated for me, and they broke a lot of things, so I kind of stopped using it at that point. That's at the same point that I had started doing some stuff where Buffalo eventually came out anyway, so... It was kind of a natural transition to me. But I thought it used to be a really solid product. I haven't seen it lately.

**Johnny Boursiquot:** It still is. I've used it in my previous job; I've used it quite a bit for a lot of the services we built internally. It did the job; it works. These days it's either that, or the gorilla/mux, which I tend to favor more. So these days -- because it's sheer stability, and it just works... So yeah, I've used both of those, and to great effect, and they did the job well.

**Mark Bates:** In fact, a lot of Buffalo's naming around its router comes from Echo. Or at least version one of Echo. We kind of borrowed a lot of the naming, like "get" and "put", and those things as capitals, for example, are used for middleware. And then we built everything on top of gorilla/mux. So I'm not afraid to show the love to all these other great packages out there, too.

**Aaron Schlesinger:** Yeah, I ask because I recently started reaching for Echo, specifically when I'm building REST APIs... And I'm still a huge gorilla/mux and Buffalo fan if there's some front-end stuff going on, for "real" web services... But yeah, I find that Echo, especially Echo's context - it just clicks a little bit better for me, for that specific use, for the REST API use case.

**Mat Ryer:** So the difference you're talking about there is where a lot of things respect or keep the pattern of the handler interface, whereas a single method and it takes two arguments, the responseWriter Interface and the HTTP request. And a lot of the different tooling sticks to that pattern, so that it's more familiar and useful elsewhere... But what Echo does is it changes that and instead you just get a single echo.context into the function, and then presumably you can access a lot of helpers and things on that context.

**Mark Bates:** Same in Buffalo as well, yeah.

**Aaron Schlesinger:** Yeah, and one thing I really love about both of those contexts is they still let you drop down into the request -- the "raw" HTTP response writer and HTTP request... So you can plug in other libraries that use the standard library types. But then it's just cool to see all this more feature-rich stuff that's kind of hanging off the side of those context types as well.

**Mat Ryer:** So I assume that's things like encoding and decoding JSON, logging, that kind of thing?

**Aaron Schlesinger:** Yeah. Path parameters, query parameters, and the stuff you said too, yeah.

**Mark Bates:** Yeah, all that usually falls off the contexts. It's interesting - when things like Echo were doing that context pattern a long time ago when they first came out, they got a lot of grief because they weren't following the kind of response writer, request handler pattern. But now that Go is all about the context... I don't feel as though it's an odd pattern anymore.

\[12:08\] I mean, I suppose you could do context and then response request, but I think at that point you're splitting hairs. As long as you have access to the original request and response, like Aaron said, I think that's kind of the nice balance of both worlds there.

**Mat Ryer:** They also both respect the context interface as well, from the actual standard library, right?

**Mark Bates:** Yeah.

**Mat Ryer:** So you can cancel with that context, too.

**Mark Bates:** Yes. I don't know what it is in Echo. In Buffalo we take the incoming requests context and use that as the basis for the Buffalo context that you get. So you get the cancellation and everything right from that.

**Mat Ryer:** Yeah, that's so cool.

**Aaron Schlesinger:** Mark, something you said kind of reminded me of when people say "Just use the standard library", or I should probably say "When people used to say that." The reason is -- maybe it's just my bias, but when I first heard about Buffalo, it was a recording of one of your talks, Mark; it might have been GothamGo... And your overarching point was like "Hey, so far all I've seen is when I wanna write a web app, I just hear "Just use the standard library." But no more. This is Buffalo, this is why we've built it" etc. And ever since I started using Buffalo, I kind of really haven't heard that so much... And I think the reason might be self-selection, of course, but I think also a part of this is that Buffalo has changed the conversation from what is an HTTP server to what is an HTTP stack in Go.

**Mark Bates:** Interesting. Yeah, I hadn't really thought that deep about it, to be honest. I just know that I can build websites a lot faster than I used to. For me, it was always about -- well, it wasn't always, because it originally stemmed from a real project where we needed a lot of that, but for me it's just about that rapid web development. I had that for so long in Rails, that it was like jumping into molasses, to just use the standard library. And as a consultant, I build a lot of apps; I need to build a lot of apps, and I need to build them very quickly. And just sitting there and repeatedly doing all the manual stuff you need to do with the standard library just got too much for me. And that's kind of where the whole thing fell out... But it's interesting to think that it's changed the conversation in that respect.

**Johnny Boursiquot:** One of the things that I'm recalling from the early days was that basically folks who were coming from those frameworks - Django from the Python world, and Rails in the Ruby world - they were coming into Go and there was sort of an elitist feeling that "Well, you don't wanna use frameworks. Just use the standard library, and just deal with the things at a much lower level." Basically, to use these helpers was sort of frowned upon, for some reason. I'm not sure if it was this early adopters mindset that basically said "Well, you have to work at the low level" kind of thing; I'm not sure where that came from.

**Mark Bates:** I think I know where it came from, but go on. I'm curious. \[laughter\]

**Johnny Boursiquot:** Yes, you definitely have to tell us about that, but... You know, when I came to it -- I remember you and I having a conversation; actually, we were on a train down to New York, to GothamGo, or something like that... And we were talking about this dogma that we have around web application development. It's like "Well, there's a lot of great ideas that came from the Rails world", because we both had done that, so we were saying "Why isn't this-- there are shortcuts, there are well-known patterns that make you productive as a developer. Why are we so against that in the Go community?" That feeling - I'm sensing a little bit less of it, but I think it's still there for a lot of folks, and perhaps you know some of those folks and where that thing is coming from.

**Mark Bates:** \[16:03\] Well, I think I understand where it came from a lot, and I get it, and I can understand why it's changing now, thankfully. When we first jumped into Go, you and I were fairly earlyish adopters... Certainly before the first GopherCon. So it's been a while now. First of all, actually, let me jump back even further and just say that Rails fundamentally changed the way web development works, period. I feel very confident in saying that. Anybody who did web development prior to 2005 knows what I'm talking about. It changed the playing field entirely on how we build web applications, and how we look at them and view them, and I think in a very positive way.

But I think what happened was -- and I know myself, I hit this too in the Rails world, and others hit it in other worlds, and it's an inevitable kind of thing, and people are gonna hit it in Go too, and they're gonna hit it with Buffalo, and that's fine... You hit that point where you're working against the framework now; your application has grown too big, or the things you wanna do don't necessarily fit it. We've all been there - most of us have anyway - in our previous lives with that.

And I think when those early adopters came over to Go, especially from the Ruby world - and Johnny, you certainly know a lot of players I'm talking about here - I think there was a general mentality of "Oh, frameworks are bad, and I fought with Rails for the last five years, and I don't wanna do that in Go." I think that's where the original concerns came from... But now I think Go has grown so much that those who had lived through the early days of Rails, and some of the bad experiences that left a bad taste in our mouths, are kind of now a bit more in the minority. What you're getting instead is a larger populous that's used to Expressjs, and Django, and Rails, and they're okay with those; they prefer the wins of the rapid development against the cons of having those dependencies, and \[unintelligible 00:18:08.03\] Anyway, that's just my ramblings...

**Mat Ryer:** I think you're on to something.

**Johnny Boursiquot:** Yeah, you might be. \[laughter\] I always tell folks, "Look, if you're gonna come into the Go community, or if you're gonna come into the Go language specifically, you kind of have to leave some of the baggage at the door" kind of thing. Learn to love the language for what it is, and then if you have ideas - have positive and constructive criticism, not just "Oh, it doesn't look like the stuff I'm used to."

But in the case of web development, in that scenario I think it's okay to bring in the good ideas that we've already ironed out outside of the Go community. Rails - again, to echo Mark's sentiment - has gotten a lot of things right, so why reinvent some of those wheels? We can just emulate the patterns. When you say "Okay, Go Buffalo is ..." -- or Buffalo, I should say...

**Mark Bates:** Just Buffalo...!

**Johnny Boursiquot:** Just Buffalo! \[laughter\] It's not Golang, it's just Go!

**Mark Bates:** It's not Golang, it's Go! It's not Go Buffalo, it's Buffalo! \[laughter\]

**Johnny Boursiquot:** Exactly.

**Mat Ryer:** \[unintelligible 00:19:10.24\]

**Aaron Schlesinger:** I was gonna say the same thing... \[laughs\]

**Mat Ryer:** \[19:20\]

**Mark Bates:** We're uniform! We've got GoBuffalo.io, and @gobuffalo\_io on Twitter, and GoBuffalo on Github, and... Whatever. That's enough name-dropping.

**Mat Ryer:** The same name, as well.

**Mark Bates:** It is. I wanna drive that home.

**Mat Ryer:** Sorry, Johnny. What were you saying? \[laughter\]

**Johnny Boursiquot:** \[19:41\] It's fine, it's all good. So when you say that Buffalo is basically the Rails of Go, some people might wince at that. But I'm like, "Yeah...! Why not?" Because doing web development in Rails is super-easy. Once you get comfortable, or if you're familiar with Rails development, then coming into Go and saying that "Oh, there's something that works kind of like the same way. You get a faster, more performance server, but kind of the same idioms, same things that you're used to" - that's gonna make you a lot more productive a lot sooner if you're a Go adopter coming from those communities. So I think it's a good thing.

**Mark Bates:** Yeah. And you know, we've been seeing a lot of that in the Slack channel, and on the issues, and stuff like that. We're seeing it as a great way people are coming into Go, and hopefully staying for the Go. Back in the early days of Ruby, and Rails -- well, early days of Rails, because Ruby had been around for like ten years prior to that, it was "You come for the Rails and you stay for the Ruby..." And that was true; Ruby is a very powerful, expressive language. For certain applications it's amazing. And you know, we're seeing anecdotal evidence that Buffalo is helping with that same kind of thing. People are coming into Go, they're seeing Buffalo, they're seeing that kind of Rails-like framework they're used to, and they're saying "Great, let me try to attack a problem I already know, put together a little weekend website for myself using this tool", and then they see the power you get with Go... And all the wonderful tooling, and concurrency, and all that wonderful stuff you get right out of the box with Go. We're seeing a lot of people coming into the language from that angle. That's obviously very rewarding for us.

**Aaron Schlesinger:** I kind of see the development of web development (ha-ha!), the evolution of web development in Go a little bit differently than what was said. I agree definitely that -- what was that...?

**Mark Bates:** I said, "Uuh, interesting..." \[laughs\]

**Aaron Schlesinger:** Yeah... So this is my hot take... \[laughter\[

**Mark Bates:** These are all hot takes, Aaron. None of these are cold takes...

**Aaron Schlesinger:** Yeah... \[laughs\] Well, now I really have to deliver, because I've built it all up... So I actually agreed with a lot of the folks who said "Just use a standard library" in the beginning of when I started with Go, and started hearing that kind of stuff... And the reason was that there wasn't really anything Go-like out there that represented a framework. I think that was because folks who came in would build basically just Rails, but transliterate the Ruby to Go. And I think someone or something had to come in that sort of learned the rules of Go before they built a framework.

With frameworks like Buffalo, and template languages like Plush, and Echo, and gorilla/mux, and sort of everything up the stack from the bear http.ServeMux all the way up, it all has that Go sort of flavor, and it is written in standard Go, so that if you come in as a Go developer and you all of a sudden wanna go from writing TCP servers to writing web apps, it's familiar to you.

But then, on the other side of the coin, it's like we've been saying just now - if you come in as a brand new web developer, a brand new gopher who wants to write web apps, you still kind of see how this thing works, because you're familiar with your Django, or Rails, or whatever... And then, like you said, Mark, you kind of stay for the Go. So there's these two onramps now, and I don't think either of those onramps would have been possible if there was someone who came in and just transliterated Ruby on Rails to Go. Instead, I think it really had to be you learn the rules of Go, and then you build a framework that fits Go first, and then fits the use case of building a web app, and doing templating, and everything else under the sun that we have.

**Mark Bates:** I think you're 100% right. If you try to go into a language and just copy over the thing that you're used to, it doesn't quite work. That's one of the things I always say when I'm teaching classes - you need to just kind of let go of the old ways of doing things from your previous language, and learn the Go ones.

\[24:11\] But with that said, Buffalo has been going on now for 2,5, almost 3 years, and again, it was extracted from a project I was working on before that... So there's still a lot of stuff in there that I look at and I say "Oh, wow, that's not very idiomatic", or "That could definitely be more Go-ish", simply because you learn over time, and you're growing... And of course, we get a lot of first-time contributors to the project, but they're also first time to Go, and there's a learning curve (like you said, Aaron) to understand these idioms and patterns.

So there's definitely a long way to go with tools like Buffalo, and Echo, and a lot of them. We're all still learning as a community... Like I said, context came out of nowhere a while ago, in 1.7, and that was a fundamental shift in the way we think about all of our Go applications. Now modules are kind of there, and obviously Aaron you know about modules, and everybody who follows me on Twitter knows how I feel about modules... We're trying to learn all over again that new world, right?

So I think things like Buffalo, and Echo, and all the Go tooling out there, not just web frameworks - we've still got a long way to go, and it's always gonna be a game of making sure we're on top of the correct idioms of the day, in some respects, right?

**Aaron Schlesinger:** Yeah, and also - like it or not, I think Buffalo is Go to some folks who come in and write web apps, so... Buffalo, no pressure, but you're kind of representing the best features of Go to folks who come in and wanna write web apps...

**Mark Bates:** Yikes!

**Aaron Schlesinger:** Yeah.

**Mark Bates:** The best feature of Go is it's not Node. \[laughter\]

**Aaron Schlesinger:** Now there's a hot take!

**Mark Bates:** I think anybody who writes a Buffalo app very quickly realized that Node is hands down the downfall of Buffalo.

**Aaron Schlesinger:** Wow... Sorry, Johnny. I talked over you, Johnny. My bad.

**Johnny Boursiquot:** No, that was a pretty hot one. \[laughter\]

**Mark Bates:** Well, honestly - so many of the problems we have are just because of Node, you know...? But it is THE way you do front-end development these days... So we do hit it. I'm not making fun of Node, I'm just saying that it's the way front-end web development is done these days, and it's not the most \[unintelligible 00:26:35.00\]

**Johnny Boursiquot:** One thing I do wanna mention though - we've been talking a lot about Buffalo, and we've mentioned Echo a few times, but... Just to give a shout-out to the other frameworks out there, because they do contribute to the notion that Go is a great language for doing web development. There was Gin a while back; I remember using that for a little bit. Martini... I'm not sure which came first, but I think--

**Mark Bates:** I think Martini came first.

**Johnny Boursiquot:** Yeah, yeah. Gin and Martini, I remember using those. Those were early frameworks that folks had started adopting. I used them in production projects; I'm sure I have a production service here and there from a couple companies ago still running those frameworks, so... I learned a lot from those things.

There's Bgo as well, that I've heard some good things about... There's Iris, there's Revel...

**Mark Bates:** Can we back up to Iris, in all seriousness? Because I joked about it earlier, but I really don't think it should be included in that list of respectable web frameworks. If you don't know the story behind Iris, I highly recommend everybody goes out and google it. This is a very not -- this guy is not a good actor in the community; in fact, he often steals code, rewrites Git histories, all sorts of stuff.

I think all the other ones you've mentioned are great, but I really don't think Iris actually deserves to be discussed as a serious contender, because of the actions of its maintainer. But that's just me.

**Johnny Boursiquot:** \[28:15\] Okay. I mean, hey, everybody definitely -- if you wanna look into that and understand why Mark and other folks in the community feel that way, definitely do that. I think this touches on a good point as well - when we talk about the Go community, it's not just the source code. You kind of have to be a decent human being as well. So if you're not a good human, or you're mistreating others, or you're doing some of the things that Mark just mentioned, if you're a bad actor within the Go community, it doesn't matter how great your tag is; you have to be a good citizen within the ecosystem in order to thrive in it.

**Mark Bates:** Yeah. Absolutely. Moving on past that - Johnny, you brought up Martini, and stuff... I don't think we can talk about web development without talking about codegangsta, for just a quick minute - Jeremy Saenz. For those of you who aren't familiar with him -- I know Aaron and Mat do know who he is...

**Mat Ryer:** No, I don't think I've met him.

**Mark Bates:** Okay, so he hasn't been active in the Go community for a long time now, but I remember the second GopherCon him and I taught a web development course. He did a lot of great work - he wrote Martini, which was, I would argue, the first -- I don't know, it was like a Sinatra-esque framework. It was certainly not idiomatic; as a matter of fact, Jeremy later went on record and said "This was a bad idea. Do not use this", if anybody follows his blog.

He also wrote Negroni, which was the middleware software... He wrote a tool called Gin, which would watch your files and rebuild your binary. Not to be confused with Gin-Gonic, or whatever the framework is. They're two different things. But he was such a huge influence in the early days of web for Go, and his presence is always missed. He was a really fun guy. He had a baby, and then dropped out of the community, and it's a shame.

**Aaron Schlesinger:** And Gin - just that tool, Gin... Not Gin-Gonic, like you said... The one that does the file watch and reload... In my mind, that kind of began the change of web development in Go, because it started to look a little bit more like Rails, the whole asset pipeline in Rails. From what I remember, that was before Buffalo, right?

**Mark Bates:** Oh, absolutely. I used to use Gin in the old days. As a matter of fact, if you look at all of the .gitignore files in every one of my repos, they all contain an ignore line for the binary that Gin used to generate.

**Aaron Schlesinger:** Oh, nice. \[laughter\] Nice. Yeah, I think it's cool that every one of these things that you mentioned, Johnny, had some part to play - and like you said, not necessarily in the software, but in the community or in the ways that people think about these pieces fit together, or in the way people think about writing software in Go. Every one of those kind of just made one step or a couple steps towards better web development experiences with Go. I think it's really cool to watch that evolution, because it is the people. It's not just how many lines of code, or who runs your code in production; it's also what were you influenced by.

**Mark Bates:** One of the things that we did in the Buffalo project - we wrote a little tool that does it, and you'll see it in all the repos - is a shoulders.md file. What that literally does - it's a tool that goes through and finds all of the dependencies in your application and it generates a markdown file with links to the GoDoc for all of them... Because we are proud to showcase these packages. We can't build Buffalo by hand for every piece of it... But you also have to recognize those people; you can't just use it and not give back to them.

**Aaron Schlesinger:** \[32:15\] We just used your shoulders tool, Mark, in Athens... And I was astounded to see how long that list was, of all of the big bulb giants. It was just like "Wow... All of this stuff is out there." It's just really cool to see how much goes into writing a web app.

**Mat Ryer:** I was surprised to find out that the shoulders tool that you've just mentioned a moment ago actually contains stolen code. \[laughter\]

**Mark Bates:** What?!

**Mat Ryer:** Yeah, his shoulders tool; he just stole code for it. It's weird.

**Mark Bates:** What?!

**Johnny Boursiquot:** Having fun, don't worry.

**Mark Bates:** Okay...

**Mat Ryer:** It's just kind of a meta-joke. Don't worry, the editor always edits --

**Mark Bates:** Oh, you were trying to make a joke...? Oh, yeah... \[laughter\] That was good, Mat. I liked it.

**Johnny Boursiquot:** What a shade...! \[laughs\]

**Aaron Schlesinger:** Wow...

**Mark Bates:** No, every time you have to explain a joke's punchline, that really makes the joke better.

**Mat Ryer:** Well, you should just hang out with smarter people is the lesson...

**Mark Bates:** I completely agree. My nine-year-old's upstairs; I might have to go...

**Mat Ryer:** Now, don't worry though; I spend a lot of money bribing the editor of this podcast, so... Don't worry. They'll insert a good joke there.

**Johnny Boursiquot:** In post. \[laughs\]

**Mark Bates:** We'll catch it in post, don't worry.

**Mat Ryer:** Yeah. So one of the interesting things - you mentioned the different web frameworks... A lot of them are packages that you import and do work, but Buffalo is different, isn't it, Mark? Because it has tools, and it has generators, and it has a command line, and all that.

**Mark Bates:** Yeah, it's more of an ecosystem like Rails. Back when I used to use things like Echo and gorilla/mux straight up - I mean, there was just a lot of cut and paste, and kind of CRUD code you have to keep writing. And again, that's one of the things I loved about Rails, that quick -- like, I can do Buffalo new, I could do Rails new, and in 30 seconds I have an app that I can just start throwing my business logic at. I don't have to type `main.go`. I don't have to then open up another file, decide what my folders look like, decide what all of that looks like. The tool just generates it. I'm a big fan of just letting tools do the work of people. They're so much better at it than we are, so much more efficient...

**Mat Ryer:** And so what do you do in Buffalo? How would you create, if you're gonna model a library, and you've got authors and books, or something like that?

**Mark Bates:** Do you want me to get the whiteboard out, Mat?

**Mat Ryer:** Yeah, I want you to read out the code and I'll type in and see if you're right. \[laughter\]

**Mark Bates:** See if it compiles... \[laughs\]

**Mat Ryer:** See if it compiles, yeah... This is a great podcast.

**Mark Bates:** "Hang on a second, everybody. I need to type this out." Well, you do "Buffalo, New Library", you'd go in and you could do "Buffalo Setup", which would make sure that all of your databases are created and set up, and the app compiles, and the tests are run, and Node is properly set up - if you're even using it, because you don't have to, obviously... And then you'd probably do "Buffalo generate resource, books", and so on and so forth. Now we generate migrations, and models, and HTML pages - again, if you're using HTML, or JSON endpoints - and wire that whole CRUD thing up.

So in about less than a minute I can have a CRUDed version of a book's application database backed, and then using the Buffalo Heroku plugin I can push it all out to Heroku, and be deployed by the end of my demo... Which is usually what I close with, some sort of demo like that.

**Mat Ryer:** Well, yeah, that's awesome... But see, that as an experience of building -- if you need to build an app for yourself, or even just quickly prototyping... Or, since it's Go code, why not actually have that in production, too...? So that's the awesome thing about Buffalo, I think - Rails let designers put together simple websites, actually.

**Mark Bates:** Yeah, it did. And in web 2.0 it was very evident that designers finally had a chance to call some of the shots...

**Mat Ryer:** They got some power.

**Mark Bates:** Yeah.

**Mat Ryer:** And then everything looked prettier.

**Break:** \[36:28\]

**Aaron Schlesinger:** Can we pause and can we talk about the database stuff in Buffalo, and how just freakin' cool it is?

**Mark Bates:** \[laughs\] Sure, as long as I can give a shout-out to Stan, who manages the Pop project. He does such an amazing job. French-awesome dude. He's so cool.

**Aaron Schlesinger:** One hundred percent.

**Mark Bates:** Kudos Stan, for a job well done.

**Mat Ryer:** What's his Twitter name?

**Mark Bates:** Um, if I can pronounce it...

**Mat Ryer:** Or spell it.

**Mark Bates:** [@stanislas_m](https://twitter.com/Stanislas_M), if I can pronounce that correctly, I believe...

**Mat Ryer:** Yeah, you probably lost him followers with that, somehow...

**Mark Bates:** \[laughs\] Sorry, Stan, if I got it wrong. Again, we'll catch it in editing.

**Mat Ryer:** We would never fix anything. We never fix anything in post. \[laughter\] That was an important lesson for coding, as well. You're not gonna come back later and fix it; get it right now, please.

**Mark Bates:** That's so true.

**Aaron Schlesinger:** Roll forward.

**Johnny Boursiquot:** So how wonderful is this thing that Aaron keeps talking about?

**Aaron Schlesinger:** I wanted to mention it because of the migration stuff. That was the first library that I had seen in Go that would take care of your database migrations for you. Up until that time it was such a headache. I was hand-writing SQL files, and then executing them manually against my production databases, and what a headache that was... And now, again, here comes along this Rails-like thing, that was very Go-native-feeling, and all of a sudden now I can go ahead and take care of all my migrations, and check them in, and have them basically versioned, so I can roll back and roll forward... It just made the whole process way less context-switching, and way less conceptual overload. It just kind of fit more into my workflow. I really love that.

**Mark Bates:** Please, tell me about it. \[laughs\] I miss that. I remember asking Matt Aimonetti when I first started doing stuff like "How do you deal with migrations?", and he was like "I just use Active Record." I was like "Ohhhh, that's just so dirty...! To have a great Go site and then you're using Active Record for your migrations."

No, there are tons of other -- there are definitely others... There's like Goose, and Migrate, and a few other tools out there that preceded Pop and Fizz... But the problem that I personally ran into that they couldn't solve for me was, again, the project that Buffalo stemmed from, I needed multiple database support, and I needed multiple SQL files. I needed a way to migrate all of those.

\[39:57\] And if you've ever tried to write SQL that works on SQLite, MySQL and Postgres, like DDL SQL in particular... Good luck. You can't. You can't write one that works, so either you have to manage three files, which means you have to have changes for each one, or if statements, or something... And that's where all of that came out of - "Let's try to figure out some sort of common DSL like Active Record does, so I can write the migrations once, and then just run them against the different databases on the client side." I think that was definitely one of the biggest wins to come out of this project.

**Aaron Schlesinger:** I wanted to mention another framework that I learned about and played with a bunch in the last year or so called Goa.

**Mark Bates:** Oh, the one that generates everything. Yeah, it's pretty cool stuff.

**Aaron Schlesinger:** Yeah. It's a DSL written in Go, and it generates your whole API. It's definitely more for REST APIs, but it turns the whole thing on its head, to me. I really love this idea...

**Mark Bates:** Yeah, because it does things like it spits out Swagger, and all sorts of crazy stuff.

**Aaron Schlesinger:** Yeah.

**Mark Bates:** That is a cool project. I remember Brian Ketelsen was a huge fan of that several years ago. He probably still is. I mean, you work with Brian, so that's probably weird...

**Aaron Schlesinger:** Yup, he is. He turned me on to the whole framework, and... It's expanded now. It does Swagger, and now you can also do gRPC, and it'll run the services, the exact same API, in the same process, right next to each other. It'll generate docs too, so it'll tell you "You can hit this port, and do your HTTP cURL stuff, and then you can hit this port with your gRPC client", which this thing also generates. It's crazy. And you write -- I think in the Getting Started guide maybe this is like 30 lines of DSL code, and everything else is generated. This is machines doing the work, and... I love it too, Mark. It's just so much better.

**Mark Bates:** It's the future.

**Aaron Schlesinger:** Yeah, for sure.

**Mark Bates:** ...until they blow us all up and drive us underground.

**Mat Ryer:** Yeah, but we've got a good 6-7 years between.

**Mark Bates:** That's if we make it past 2020.

**Aaron Schlesinger:** We'll enjoy the time until the machines take over, and... You know, I'm good with that.

**Mark Bates:** Same here. \[laughter\]

**Aaron Schlesinger:** But really, this code generation in here blows my mind. More than Buffalo even. Because this is like -- you write 30 lines and then you just get everything handed to you on a silver platter by running their Goa CLI tool.

**Mat Ryer:** But how is the interfaces? Because usually with those tools you trade off -- one of the things when we built Machine Box... We played around with those sorts of general tools that would allow us to describe; and we looked at Swagger, and we may have looked at Goa, too... And the trouble was it was very mechanical. As you say, it's the machines that have written this, and in a way, the machines have somewhat designed the API.

From a storytelling point of view, I always like to still handcraft the API... But I don't know, how do you find what gets generated?

**Aaron Schlesinger:** The code that's generated for the server, the HTTP REST API code for the server looks pretty good. I would make a couple of tweaks here and there for sort of the average API... But it looks decent. Passable, I would say. But then, if you go over to the gRPC side, it's a mess. In my opinion it's a mess, and I think it's more because of the gRPC server package than Goa itself. It's kind of trying to dance around the oddities of the gRPC package that gets imported.

\[44:07\] But it's like you said, you're locked into the decisions that Goa made for how they're gonna design their server, and in essence, the code that you have to fill in on the server side... But I'll take that over handwriting stuff, pretty much.

**Mat Ryer:** If that's what you want. If it fits, then there's nothing better, absolutely. It's just for the times when it doesn't quite fit, or if you wanna do just a small tweak, then you get stuck, and that's where the pain comes. But like you say, it's a trade-off, and it depends what you care about. You're right about that gRPC stuff - it is very weird what gets generated. It's code, but it's not very readable, it's not very user-friendly, in my opinion. But that's kind of the attitude when you generate code - the attitude is "A human is not gonna look at this. It's gonna get generated just before we then compile, so it doesn't matter." But remember, we do all go through projects, read code... We like to sit and read it, and see what it's doing.

So I think a goal for generated code should be that, especially in Go, it's readable, it looks good. It's gonna probably be Go-formatted anyway (go fmt-ed, I suppose). But make it readable too, if you can... Because sometimes you can easily do it. It's just something you have to bear in mind.

**Mark Bates:** It's hard to do code generation well, I think... Because again, everybody is a critic. Like Mat said, we all love to read our code, don't we? I will often just look at code on my phone, and just be like "Oh, that's pretty." \[laughter\] I know, I'm a weirdo, but I actually do sit there and look at code sometimes. And I'm sure others do, too.

But the code generation part is hard. It's hard on a lot of levels. One, because you're typically never actually writing the pure language itself. With Goa or Buffalo, for example, we're not actually working in Go when we write the templates that generate a brand new Buffalo app, or when Goa writes their templates to generate their gRPC, for example. So the problem is we're trying our best to even just make sure the stuff compiles when it's generated, half the time.

**Mat Ryer:** Exactly, yes. That's true.

**Mark Bates:** Right? With the import statements... Yeah, it's so hard. And then how do you deal with potential unused variables by accident? There's all these things you need to really think about... And you're working in a meta way, you don't have any of the tools that go along with Go development, because you're using a templating language too, so... Everything is just broken, and you're just kind of hoping it works, and that your tests are good enough to make sure that the template you just wrote actually works.

**Mat Ryer:** Yeah, it's hard. We've done it before - we did some project that had this, and one thing we did was we made a little live preview thing. So as we were typing in the templating in the editor, we could see what was rendered from some test data. So that is the way to write templates... And then you really notice the code. And then actually what ends up happening though -- and as we see again and again, it's just a trade-off then, because your template code looks messy in order to make the one that's generated look good... And the template code is what you need to be working in; so you can't win.

**Mark Bates:** No, you really can't. It's really hard.

**Aaron Schlesinger:** I wonder, has anyone tried generating code using the AST, the built-in Go AST libraries? Actually built up the syntax tree?

**Mark Bates:** Oh yeah, there's lots of packages out there that do that.

**Aaron Schlesinger:** Yeah, I've never tried actually doing it.

**Mat Ryer:** There's a Printer package. You actually have a printer that you give it the AST and it'll print it. And that's basically go fmt.

**Aaron Schlesinger:** \[47:57\] Yeah... I'd be interested to see what it's like, I suppose, to generate code actually using Go to build up the syntax tree, and then passing it through that printer function.

**Mark Bates:** It's a decent amount of work if you're going to build it all from scratch. Take my word for it on that.

**Aaron Schlesinger:** I absolutely will... \[laughter\]

**Mark Bates:** If you're parsing code, it's alright... But if you wanna say "I'm gonna physically create brand new files using the AST" - that is a lot of work. There are some decent helper packages that other people have written, that make it easier.

**Mat Ryer:** There's a missing package, I think. I think there's room for some ultra-simple way of loading a Go package or Go file, and then accessing the stuff in it. The problem is, of course, it's very low-level, as with lots of things in the standard library.

**Mark Bates:** Yeah.

**Mat Ryer:** There is room, I think, for another one more thing on top of it that just loads the document, and you can just iterate over the interfaces and iterate over the variables.

**Mark Bates:** I've been exploring that space recently. I actually sent you, Mat, an idea of a tool that I was considering... So I agree - one of the problems I've been trying to solve recently is just getting as much data as I can about a module or a package, as quickly as I can, and also as useful as I can... And there's a lot of different places where that's very difficult still.

But one of the things I've been considering was a tool that would actually rewrite your entire package or module, so that it would group all your types together and organize them nicely, with the type at the top, then the constructor... You know, all that sort of nice stuff - move then tests around and physically rewrite all these files for you, so you could take a hastily-written project and kind of go fmt the actual project package as opposed to it. But to do that, you really need a decent set of tools that can easily pick up each file and present to you "Hey, here are the types defined, and here are these things, and here are those things."

So I agree, Mat, I think there's a place for a really nice tool that breaks down and gives you a bunch of really nice types back, that represent your files and all your stuff, right?

**Mat Ryer:** Yes.

**Aaron Schlesinger:** Something like a representation of an entire module, like you said, instead of just a file-by-file kind of thing?

**Mark Bates:** Yeah. One of the things I love is how GoDoc groups all the types together. You see the type, you see its constructor, then you see all the related methods. And I would love to be able to ask a package, say "Hey, for this module I'm in currently (or this package, if I'm not using modules), give me back all of that data. Give me back a map or something that contains all the types defined in this package. And off that, give me all the exported and unexported methods, and the comments, and the fields", all that sort of stuff, so that we can holistically look at a package in a module and say "Oh, this is what's happening in here." And with that tool I can then rewrite the entire package. But that's beside the point.

**Aaron Schlesinger:** Yeah... That's very interesting.

**Johnny Boursiquot:** That sounds like a good exploratory -- like, if you've just happened upon a package and you wanna quickly explore the different types and the different things that it can do. That sounds almost like you navigating in a faceted way all the different things that you can make use of out of a package. It sounds like an interesting concept.

**Mark Bates:** Yeah. A lot of the secret sauce behind the Go Buffalo packages is that; we're doing all sorts of stuff about just inspecting the environment, and inspecting the folder, and inspecting your app, and trying to guess all this information... So for us, I can tell you that if we had one package where we could just say "Hey, give us everything" - wow, that would make the stuff we could do with Buffalo so much more powerful.

**Break:** \[52:10\]

**Mat Ryer:** Back to web... What about WASM?

**Mark Bates:** Excuse me?!

**Mat Ryer:** Is that how you pronounce it? \[laughter\]

**Aaron Schlesinger:** What about WASM...

**Mark Bates:** Do you kiss your mother with that mouth? \[laughter\]

**Mat Ryer:** Yeah, the WebAssembly stuff is quite interesting, isn't it? I've seen a few talks at different conferences on WebAssembly in Go, and some interesting one about using TinyGo with WebAssembly, because one of the things is the binaries that get created (the assemblies) are massive. And if you use TinyGo, it's much smaller. What do you think about that, and do you see a future in us being able to build and write client-side code in native Go like that?

**Aaron Schlesinger:** I think TinyGo is amazing, but I actually kind of think it's orthogonal right now to WebAssembly. It's a great tool to get your towards writing your binary and getting it shipped down to the browser, but I don't think we have a good idea of how Go should actually work with your page - your HTML, JavaScript, and so on. I kind of almost think we need a framework-ish thing...

**Mark Bates:** I've got my hands full, Aaron. I'm busy.

**Aaron Schlesinger:** Maybe more something like gorilla/mux. Yeah, maybe a gorilla/mux type of thing, where it's not prescribing everything you have to do to get your app running, but it has sort of guide rails for "Here is where you should be writing Go to get something done, and here is how you should be interfacing your Go over to the JavaScript and HTML and everything in the front-end land." Because really right now we've got -- again, we've got this standard library, the syscall/js library... I've seen some cool stuff built on top of that, that does look like frameworky kind of stuff, but it's sort of unclear to me still when I open up my IDE and I get ready to start writing that web app - it's kind of like, I don't really know what to do, besides start playing around with syscall/js, because nothing jumps out at me yet.

**Mat Ryer:** \[55:38\] Yeah, that syscall/js thing is essentially a meta language really for JavaScript. I think that's what we need to fix. I think that's the big outstanding problem with this... Because for example, you have to write "document.call" and then pass a string, which is the method you want to call, and then pass in arguments, and things. And there's some good reasons for why that's the case... But there's gotta be enough commonly-used stuff in the browser, or even the published browser APIs, that we could implement directly in proper Go, that we could then use; so we could just say "document. " and then there's a function in that package called getElementByID, and then it returns an element, a strongly-typed thing.

It's tough, obviously, because JavaScript is a dynamic language and Go isn't, so you have figure that out, reconcile that... But apart from that, I think that's the big problem that needs to be solved.

**Mark Bates:** Do you realize you totally blanked out on the big problem that needed to be solved? You were like "And..." - total silence. And I think that's really the big problem that needs to be solved. \[laughter\]

**Mat Ryer:** And I'll never repeat that again.

**Mark Bates:** Never repeat it again...! \[laughter\] That's it, folks. It's all over!

**Mat Ryer:** And with that... Yeah, the interface is what I was saying. The interface, and how you interact with the DOM - that is a pain, and is something I feel like we could fix. I feel like there's something just there that we can grab to fix that, but I don't know what it is quite.

**Aaron Schlesinger:** The last time I scrolled through the WebAssembly channel -- I'm trying to scroll up right now, there's no way I'm gonna find this... But there were two frameworks - and I'm calling them frameworks on purpose - or at least two things that looked like frameworks that had the whole stack taken care of, even down to the hot code reloading in the browser, templating... There was a really cool way - I really wish I could find this - to hook up your HTML to actually a Go function, so that it was kind of like you were writing JavaScript, in the developer sort of experience... And man, I thought that was super-cool, to have a whole toolchain, and then to even be able to write your "a href="whatever" and specify a Go function that should run when the person clicks on that thing. If we can get to that point - oh, boy... Watch out. Because if you can then compile that stuff down with TinyGo... I mean, now we're talking. I'm so excited. Now we're talking.

**Mat Ryer:** Vugu?

**Aaron Schlesinger:** Yes, Vugu. That's the one.

**Mat Ryer:** Very interesting.

**Johnny Boursiquot:** That's a cool name.

**Mat Ryer:** And I think you're right, if we can crack that... Yeah, it is cool. I wonder where that comes from. Oh, it's Vue for Go maybe... No. \[laughter\] I'm just trying to do some archaeology, and failing...

**Mark Bates:** I think Aaron was pretty much correct, though - we're in the early days of WASM. And let's just put it bluntly, I think it's still very, very early. There's a long way to go, both from the WASM side generally - I think there's a long way to go to understand what we should be using, and how we should be using it, and how browsers should be using it, and all that good jazz... Because it's still a relatively new technology.

And then the same thing with Go. I think Go still needs to figure out how better to work with it. So right now, Mark says it's a "wait", not a "buy." \[laughter\]

**Aaron Schlesinger:** Is there like a trailer we can do for this episode, and put that in there?

**Mat Ryer:** Yeah, we will.

**Mark Bates:** A new segment.

**Mat Ryer:** Mark, Buffalo isn't a v1 yet, is it?

**Mark Bates:** No.

**Mat Ryer:** So why is that?

**Mark Bates:** \[59:45\] A bunch of reasons. One, we were obviously waiting -- Google App Engine support was always a big thing for us; we wanted to make sure that we could support that, because it's a big platform now. Obviously, that has changed; they've opened up a lot, so obviously we can do that. But also, we're still growing and we're still trying to figure this thing out. We're not at 1.0 yet, and I know we're not at 1.0 yet because there's still a lot to do, there's still a lot of work, and I know that changes will have to be made because of that. Some of them will be big, breaking changes, and some of them will be small and minor changes... And that's okay, and hopefully they'll be able to stick with us...

When we get to 1.0, I want that to be solid. I don't wanna race there. I talked to Steve Francia a while back about Hugo, and he said "There's a reason why we're still at 0.53", or whatever it was at the time. And the reason is it's a big commitment to go to 1.0. And again, I don't think the project is there yet, and I think there's a lot of ways we can go, and a lot of ideas that I have, and improvements to be had... And I just hope that the community can step up and help us get to that faster.

**Johnny Boursiquot:** But you would say it is production-ready though, because I know a lot of people that are using it in production.

**Mark Bates:** Oh, absolutely. It absolutely is. Just like Hugo. I consider it production-ready, we just don't wanna slap the 1.0 on it, because that limits what we can do in terms of changes, obviously, and also, with modules and semantic import versioning being what they are, going to a v2 causes some hassle right now... So we wanna keep things as stable, and we do try to keep things fairly stable, if you notice. And then when we do have to break things, we try to break them in major minor releases, which is what our kind of major release cycle is right now... And we try to provide tools that help you migrate. We do have a Buffalo fix that will try to fix those things.

So it is production-ready, and trust me, I know plenty of companies - big money companies - that are using it in production. Like I said, we just haven't got there because I don't think it's done. Or I don't think it's 1.0 yet. We'll get there though.

**Mat Ryer:** That's a nice thing though that you're doing, which is respecting the v1. That is cool, because it's a good lesson for everyone that's writing anything that's an API... Because if you release that version 1, you want people to be able to trust it. That's something that the Go project had, which was one of the things I think gave it a good foundation, because people could trust that it was gonna be stable. So well done, and thanks, Mark, for doing that...

**Mark Bates:** You're welcome, Mat. I did it just for you, you know...

**Mat Ryer:** \[01:02:41.03\] Yeah, I know you didn't. Although you didn't mention earlier - I got you the github.com/buffalo, the organization name.

**Mark Bates:** That's true. We do have the Buffalo Organization, and when we hit 1.0, the plan is to move from github.com/gobuffalo to github.com/buffalo. And when we do that, all of our packages, regardless of what versions they'll be at when they move over, will all get simultaneously reversioned as 1.0 at that point. They'll all have import paths too, so it'll work.

**Mat Ryer:** Yeah, perfect. Good strategy.

**Mark Bates:** Well, it's pretty much the only strategy at this point. \[laughter\]

**Mat Ryer:** That's why it's a good one.

**Mark Bates:** Right? Yeah, I try.

**Mat Ryer:** Johnny, I could do with you in real life, just standing behind me and saying "Wait, wait, wait. Don't say that..." \[laughter\]

**Mark Bates:** "Whoa... You're saying that to Mark?! Stop, stop, stop! Don't say that to Mark!"

**Mat Ryer:** Yeah. Okay, well that I believe is all we have time for today... But we had a lovely conversation about web development in Go. It's definitely possible, it's a choice that you can make. There's some things it's gonna do brilliantly, and there's some areas where you'll have to reach out and find some of the tools. It's not all about the standard library.

Thanks very much to my guests - Johnny Boursiquot, Mark Bates and Aaron Schlesinger. His name I've been practicing a lot. Thank you very much, we'll see you next time!
