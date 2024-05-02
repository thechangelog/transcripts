**Jerod Santo:** We are here with Louis Pilfold from the Gleam programming language, which you can find at gleam.run, which is one of those fancy, new special TLDs that are getting so popular. Louis, welcome to the Changelog.

**Louis Pilfold:** Hey, thanks for having me. Good to be here.

**Jerod Santo:** I feel like we almost had to have you, because not only are we Elixirists and Gleam is a cousin, perhaps, or related to Elixir somehow... But darn near everybody said we had to have you on. We had this episode request from probably half a dozen different listeners, which is pretty high. And I was forward to do it anyways, because I was like "This looks cool." So fulfilling our obligation to have you on the show. Happy to have you here.

**Adam Stacoviak:** "Almost had to have you."

**Jerod Santo:** Almost had to. Yeah. Not that our hand was forced, but -- you're welcome here, but...

**Louis Pilfold:** Thanks.

**Jerod Santo:** I don't know. Our listeners may have revolted had we not had Gleam on. Curious from your perspective - I mean, it's your language, but lots of excitement around it. What do you think is spurring said excitement? Why do you think so many people are into this?

**Louis Pilfold:** It's been wild. There's always been a flattering amount of interest. The whole project started as me scratching an itch of mine, to some degree. There's all these languages, and I love all of them, but there's one right in the middle, that doesn't exist... So I started making that, and it was really cool just to see people start to go "Oh, I like that, too", and join the Discord, or IRC back in the original days, and contribute stuff. But then we finally got to a point when it was ready, and I thought "Yes, it has everything we want. I'm confident we're not going to break anything. It's time for v1." And then after that, it just exploded. I thought I was busy with Gleam stuff before, but now it's just so many messages and so many issues... Not problem issues, but "Oh, we should do this. We should do that", and pull requests, and people asking "How do I do things?" on our Discord. It's been phenomenal.

So yeah, every project that's sticking on v1 - yeah, maybe consider doing a v1, because it really reframes things, I think, in people's minds.

**Jerod Santo:** Yeah. Especially with a language. So many experimental languages that people do kind of wait for that 1.0, for the author to say "Okay, you can actually use this for non experimental toys and trivial things. It's ready for primetime." Is this your first programming language, or have you written other ones?

**Louis Pilfold:** I mean, what makes a programming language? That's hard. Because I've written loads of toy Lisps, and compilers, and all sorts of things... But they were all sort of hobby projects, and studying, and that sort of thing. But I guess this one was that originally, but then sort of at some point went "Oh, no, this is real. This is good. We should keep working on this." So if you mean have I done anything that I feel that somebody should bet their livelihood and their business on it - no. \[laughs\] Do not use any of my prior stuff for that. But yeah, I've read lots of little compilers and doohickeys, and stuff. I'd love to have like three or four or five of me, because I've got a whole bunch of other language ideas that I'm just not going to find another six years to implement.

**Jerod Santo:** I was more thinking about it from the confidence perspective, like where would you get the confidence to build something like this? Because it is a big undertaking. As we get into details, you've built a lot of stuff... I mean, I don't want to necessarily call it batteries included; maybe you do call it that. But we were talking with Jose Valim just a few weeks ago about Elixir, and he was talking about how difficult it would be to start a new programming language today, because the table stakes of tooling have really raised. And there's so many things that people expect you to have... And new languages will have to build -- like, the surface area is just large. And so for me, that requires from the author a bunch of confidence, or \[unintelligible 00:07:53.24\] Where do you get that from?

**Louis Pilfold:** \[00:07:59.10\] Yeah, Jose is completely right. And I think it is part of Jose's fault... Because Elixir turned up and there were loads of things that were kind of lacking in a lot of other languages, that Elixir just had. And so that raised the bar. And then languages like Go and Rust really came along and they raised the bar with IDE, language server type things... So they raised the bar again. So every time there's a new thing... You go "Oh, wow, we don't just need to have a compiler--" You know, back in the day you'd just have a compiler, just give it to them, and they'd figure out a build tool, and the test framework, and the editor, and everything. Now you kind of want to have all these things built in. Or at least that's what I think. So Gleam has -- we've got a language server. That's the thing that Elixir doesn't have built in.

But I don't know, I think it's part stubbornness. I think it's a mix of -- sorry, I don't think it's about confidence. I think there's a mix of things. For me, it was a stubbornness. I was like "No, I'm just gonna keep going. Oh, I don't have that? Okay, well, I'm gonna keep working on it", and just refuse to stop until we're there. And I think at the very beginning, being a bit foolish in terms of not realizing how big something is, not realizing I'm gonna be working on this for a good, I don't know, six years or something prior to it being a first version. Or maybe not realizing the scale of your own ambitions...

The original project -- Gleam started as me wanting to do a conference talk about making compilers, and sort of grew wildly out of control from there, as I went "Oh, hold on... Okay, so this works. What could I do with this now?" and it just keeps going and going, until I go "Oh, well, this is a whole useful thing."

**Adam Stacoviak:** Something magical happens whenever we force our personal tastes into the world. Right? Because that's how invention happens. That's how innovation happens. You see a gap, you see something missing, you have a personal dilemma, and you force ot into the world, and in my opinion something magical happens when we do that as individuals... Whatever it might be; it could be a language server, or a language like Gleam, it could be a podcast that we produce... Whatever it is. Put your personal taste into the world and see what happens.

**Louis Pilfold:** Totally. And I think that personal connection for me is what makes a lot of - not the software. Like you said, podcasts, and art, and anything - like, that's the really important bit. The person who's creating it, or the people that are creating it really have to care, I think. And when you've got a team of people who are doing it because they really want this to exist, it makes a different thing than a team of people who are just like "Well, we need a job. I do need to pay my rent, at the end of the day." And I've found a nice job. It's cool that I can make this thing, but I don't actually care that much.

**Jerod Santo:** Yeah. Well, on the topic of taste, we are kind of taste functions ourselves, right? We take a bunch of things in, and then they get mixed around in our internals, and then out comes our taste. And I think with programming languages, there's not just a lineage, but also a borrowing and a flavor and an inspiration from many different languages that go into the new ones, right? Like, you don't just in a vacuum decide what's good; you're not going to stumble across that on your own. So curious - your taste... Where it comes from, programming languages you love, appreciate, and then eventually, things that you decided Gleam had to glean... \[unintelligible 00:11:06.26\] Didn't mean to. But yeah, where did your tastes come from?

**Louis Pilfold:** So I think lots of languages are "Oh, I've got a really big, new idea, and I want to explore that", and Gleam isn't that. Gleam is - I was writing a bunch of different languages, and I kind of wanted bits from all of them, you know. For example, when I'm writing Go, it's like "Oh, I really wish I was writing Erlang right now, because I could do this thing." Or if I'm writing Rust, I'm like "Oh, this is really annoying, this thing. I wish I had that lovely thing from Go." Like compile times, or something. I don't know. And so Gleam is just a mishmash of all the best things, which is why it's a really nice, safe bet at the end of the day, because all these things have been proven. The type systems - gosh, that's like 20-30 year old technology. It's state of the art... From the past.

**Jerod Santo:** Yeah, we're still there. We're still living there.

**Louis Pilfold:** \[00:12:01.17\] And it's still good. And we know it's good, because we it's been proved in production. So the combination of all the main inspirations... Erlang and Elixir - obviously, huge inspirations. There's a reason why Gleam is running on this virtual machine... Because it's brilliant; it's so good. And if we wanted to make that from scratch, it would have taken another 6, 10, 15 years on top of that. It's just a wonderful piece of tech. But then I think there's a lot to be said for sort of like the simplicity... It's kind of an overused word that, but like the smallness of Lua and Go. I really like the idea that they're languages that you can approach them and learn them really quickly, and start doing useful things. A lot of other languages are super-powerful, but it takes a long time to run up to that. And I'm not sure that's always a good trade-off. I think for a lot of business uses, I don't really want to use the big, complicated language. I want to use one that's just like small, and gets out of the way and lets me do my job. And Rust and Elm are both super-inspirational for just how good the developer experience can be in those languages. They're really good at saying "Oh, you made a mistake. Look, here's what it is. Here's how you fix it. Here's why that's a problem." That's so good for learning, whether you're like brand new to the language, or you've been around for ages and you've just made a mistake.

And also, the Rust tooling... Cargo is great. I used to think that Mix was the best thing out there, but after using -- you know Rust came along and just like made it one step better. So I'm moving Gleam can be like one step better on top of that. So there's loads of good inspirations out there. And Alpaca. Do you remember Alpaca?

**Jerod Santo:** No.

**Louis Pilfold:** Way back. I think it was originally launched as MLFE, ML-flavored Erlang, and it was an approach to like add types to Erlang, and it was really cool. I really liked it. But it sort of got lost in the weeds way back. I was trying to write a standard library for it, because it didn't have one, and then I kept finding compiler bugs, and \[unintelligible 00:13:52.14\] got distracted by trying to implement typed message parsing. Then afterwards I was like "Okay, I guess I should stop writing this standard library thing and I should work more on my language." So yeah, loads of little -- I've stolen from loads of great places.

**Jerod Santo:** Yeah. That's a good recipe.

**Louis Pilfold:** Mm-hm. \[unintelligible 00:14:13.14\]

**Jerod Santo:** I definitely wanna come back to the package manager, but what about -- "Great artists steal" is a great saying, that we've all stolen and used... But what about this old saying, "Jack of all trades, and master of none"? Is there ever -- when you have a language that borrows so much, and brings the good parts together, do you ever wonder if it then becomes kind of this high... It's like a B+. It's not mediocre. It's good in all these ways, but it also doesn't have its own oomph.

**Louis Pilfold:** Did you pick that phrase deliberately? Do you know the rest of that phrase?

**Jerod Santo:** No, I didn't, and I do not know the rest. I'm about to be embarrassed.

**Louis Pilfold:** The whole phrase is "Jack of all trades, master of none" is often better than the master of one. So that expression is that you want to be a jack of all trades.

**Jerod Santo:** That does ring a bell, yeah.

**Louis Pilfold:** It's like the Rust thing. Like, I love Rust. And Gleam's compiler is written in Rust. But so often I just wish it didn't have the memory management stuff. Like, I just want to have a nice, fast compiling to native language, and not have to worry about lifetimes, and all this sort of thing. So I think having a language that is more general works really well. Maybe I'm wrong. I'm pretty heavily invested in the Gleam thing, so maybe I'm not the best person to ask... But I think we've got a really nice sweet spot. I'm trying to find like the smallest set of generally useful tools. And I guess it is, to some degree, specialized. This language has been made from over a decade of my working in the industry, making boring business software; websites, and clients for things, and background processing... And it's just the language that I wanted to use for all those things. I worked very briefly in video games, and music hardware... Probably not a good language for those places. But for their business systems - yeah, it'd be good for that.

**Jerod Santo:** So how would you categorize it, then? It's typesafe, is it functional? Is it object-oriented? Can you kind of give everybody just the lay of the land of when they approach Gleam, what are they looking at?

**Louis Pilfold:** \[00:16:22.09\] So Gleam is a functional programming language that can compile to even Erlang, or JavaScript. o it runs on the Erlang virtual machine. Or if you want to run it inside a browser, or on a phone, or on a CDN or something, you can do that using the JavaScript backend. So a lot of people compare it to Rust, and I think that's because there's some like superficial similarities with it... So the tooling is quite similar for both languages, very easy to use. But the syntax is quite similar, in that they both kind of look C-like; they've got curly braces, and all that sort of stuff. And they've both got these very strong, robust type systems that are both statically-typed. But I think it's kind of misleading, because I don't think of Gleam as being like a BEAM version of Rust. I think of it more as being like a functional version of Go. This idea of like a small language that is fast, and you can use it for most of your business stuff. And there may be times when you want to go to C++, or C, or Rust, or something, but for 95% of your staff, you can use this, and it will just enable you to get the job done. And I think that's what I want it to be, I want it to be a language for making stuff.

**Jerod Santo:** Hm. What kind of stuff? Not video games necessarily, but web apps...?

**Louis Pilfold:** Well, I mean, you could make video games with it. I think it's pretty easy to get caught up in going "Oh, I need to have the fastest possible C++ thing for video games", but they made good video games in the '90s. They didn't have any of this stuff back then. And the computer was \[unintelligible 00:17:45.14\]

**Jerod Santo:** Some of the best video games in the '90s!

**Louis Pilfold:** Exactly! You know, don't let technology limit yourself. Whatever you've got, make a video game with it, if you want to make a game.

**Jerod Santo:** Right.

**Louis Pilfold:** But I think most people are using it for web stuff; web business stuff. Or like some command line stuff. Just anything that you might use Elixir or Erlang for, really, or a bunch of the scripting languages, perhaps.

**Jerod Santo:** So for web stuff, I'm wondering how big the community is... Because Elixir has Phoenix, Ruby has Rails, Python has Django... I could go on. Are there web tools beyond a standard library? Or what does it look like? Does it have its killer framework, or app, or anything out there that people can build with?

**Louis Pilfold:** So we don't have a Rails or Django, but we do have a Sinatra or a Flask, I would say. So we've got Wisp, which is a nice framework, but it's not quite as featureful as Rails. I think one day it could possibly grow into that. But at the moment, it's more of the sort of like core of your backend application. And that's most likely to be used with a web server called Mist. And Mist is really cool, I think, because Mist runs on the BEAM, it's completely written in Gleam. And last time we benchmarked, it was the second-fastest -- well, the first time we benchmarked it, it was the fastest, and the second time we benchmarked it, it was the second-fastest web server on the BEAM, because the Elixir one just got slightly faster between the two benchmarks.

**Jerod Santo:** Competition, yeah.

**Louis Pilfold:** And that's cool. And that's written entirely in the typesafe actor system that we've got called Gleam OTP... Which is not a wrapper of Erlang's OTP. It's a completely new implementation. So that shows that we can make things that are just as fast and capable and powerful as the Erlang guys and the Elixir guys. Yeah, that shows a lot to me.

The thing that I think is really cool - because I'm backed person, so I'm not very excited by "Oh, new backend framework things." Sure. Okay. It does routing, etc. Who cares?

**Jerod Santo:** Sure.

**Louis Pilfold:** The thing that's really cool is a framework called Lustre, and Lustre started as being a -- I guess it's in the same sort of space as like Elm or React. It's like a frontend framework, so it's taken advantage of Gleam's ability to compile to JavaScript, and then run in the browser. And then you can do your state updating stuff in the browser, etc. But then they extended it to -- Hayleigh, the creator, she extended it to also be able to do server-side rendering.

\[00:20:07.01\] So you could use it in your backend, with Wisp, for example, to render your HTML templates, or that sort of thing. And then you could like mount bits of Lustre frontend code on top of those templates... And then with the latest version, she's introduced server components, which is basically Elixir Live View. So using Lustre, you can have the best of both. You can say "Well, these bits we want to work really well, really snappy, not worry about how bad the network connection is. We can do that on the browser. While these bits, we want to have that really nice Lustre developer experience,be connected to the backend, and have all the data... Okay, we can use Server Components. And this stuff we want to be really simple, we're going to server rendering." You can have one ecosystem, write one code, and it just - every single possible way of rendering your frontend, it can do. It's super-cool.

**Jerod Santo:** That is awesome. And I love the promise of one language on both sides. I have found that in the past - this was many years ago now, so tooling wasn't as good... When I went to JavaScript for one language on both sides, and Node.js, I didn't find the wins there that I thought I would by just speaking one language, because the headspace was so different anyways. But having what you're describing there, and having the Gleam language on both sides seems like it would be potentially a very nice setup.

**Louis Pilfold:** So the thing I really like is - you know, same language on both sides is cool, but it's not as... I think I had the same experience as you. It's not as impactful as I sort of hoped it would be. It's really nice if you can do it. I think the thing that is really cool with Lustre is that you can do both the LiveView style, and the React/Elm style. If you pick LiveView, there may be bits of your app where you're like "This will be slightly better for the users, like the best user experience, if we could do this on the client." And you go "Okay, if we're going to do it that way, we need to pick a second framework. Do we use React for this? Do we use Svelte?" You don't have that point when you go "Okay, and now we've hit a hard line which our framework can do, and now we need to move into a different world." And your alternative is that you just do it in React to start with, and then you're not using your lovely Elixir LiveView, and you're having like a slightly worse developer experience all the time. So those hard lines go away, to some degree, with this... Which - that I think is a valuable thing.

**Jerod Santo:** Yeah, that sounds great. As an author - and I'm sure you have a team now of a few, so it's probably not just yourself. As a team, as a core team, does this slow you guys down, to have these two compilers, this JavaScript and -- I guess what does the Gleam compiler output?

**Louis Pilfold:** We originally targeted what's called core Erlang, which is an intermediate representation of Erlang, which a bunch of early Erlang tooling used to use... But then we moved it to Erlang sauce. So we just output like normal Erlang code, and then we invoke the Erlang compiler on top of that.

**Jerod Santo:** Okay. So it's going from Gleam to Erlang to executable code.

**Louis Pilfold:** Yeah.

**Jerod Santo:** And then on the other side it's going from Gleam to JavaScript, which then gets executed by the browser.

**Louis Pilfold:** Yeah, yeah.

**Jerod Santo:** So is that a hamstring at all as you move forward?

**Louis Pilfold:** No, I don't think so, really. The language was originally designed in such a fashion so that it slotted in really well. We didn't have to make any big changes or concessions to the language. And the compiler has been pretty easy to -- there's not really been any trouble from maintaining the two things at the same time; it's almost entirely the same, all the front section things is the -- the front section of the compiler's the same, and all the static analysis is the same. All the tooling, and error reporting, and everything's exactly the same. The only thing that's different is these two code generators, and code generation in Gleam is pretty simple, because we don't introduce any additional runtime to either of the languages that we target. We just stick really close to the core language. And if you get the Gleam compiler to spit out some Erlang, or some JavaScript, it looks like a human's retina. It's pretty-printed, and it looks sensible, and... I kind of wonder if you could just output it and sneak it by someone in a code review. Like, if you could trick them into thinking it's JavaScript or Erlang. It might not be quite that good, but it's close.

**Jerod Santo:** \[00:24:20.11\] It might be better than the JavaScript that I write...

**Louis Pilfold:** \[laughs\] Well, it'd be secretly Erlang-style JavaScript. So if you think Erlang's good, maybe.

**Jerod Santo:** Yeah, there you go.

**Louis Pilfold:** So yeah, it's not so much work. The thing that has been a constraint coming from being split across these two ecosystems, or like sitting across these two different ecosystems, is the fact that Erlang and JavaScript both handle concurrency very differently. And so you've got two options here. You can either abstract over that by having a big, thick runtime, where you either introduce promises to Erlang, which is probably a bad idea and everybody will hate you, or you implement actors on top of JavaScript... Which I think a lot of people would really like, but then it means you've got to have a whole runtime that implements actors inside your JavaScript bundle. And languages that do this - I think you could pull Haskell to JavaScript, for example, and I think that just means that a very small Haskell app compiled to JavaScript is huge. I don't have any numbers off the top of my head, but let's just say it's like a megabyte of code to have a few Haskell threads talking to each other. Well, we don't do that. We just output normal, promise-using JavaScript, which means you could promises in Gleam JavaScript code... Which is a problem, because then you've got the function calling problem, which means you can't have, for example, a HTTP client that works on JavaScript be the same as an HTTP client that works on Erlang. So there's a bit of a split here, but that's the trade-off you make for being able to interop really well between these two ecosystems.

**Break**: \[00:25:48.06\]

**Jerod Santo:** Why the switch from Erlang bytecode, or whatever the format is, to source code? That seems like -- I don't know. Why?

**Louis Pilfold:** So there's a few reasons. First, that we did a full rewrite of the compiler, from being written in Erlang to being written in Rust. And the reason for that was -- there's a few reasons for that. One of them was that there was just a lot of tech debt from like learning how all these things should work, and we go "Okay, we've figured it all out now. It'd be a good point to draw a line and start afresh." And we got to the same place very quickly, and fixed all the bugs, and it's much faster. And because we're doing a rewrite, we're like "Okay, should we continue to use Erlang?" Because Erlang is really good at making network services. I don't think it's actually that amazing at making compilers. That's something where I want to have algebraic data types, and static typing, and that kind of thing.

So for me, it ended up being a toss-up between - what was it? Rust and OCaml I think were the final two... But I went for Rust because I just -- with the state of the Rust tooling then and the state of the OCaml tooling then, I found Rust much easier to get stuff done with, really. It's been a big success. But at that point we'd no longer had access to the APIs that you can use easily output that intermediate formats... And it's very easy to just output Erlang source code. In fact, it makes it much easier to write tests, because you can just say "This code should compile into this code", and you look at it and you go "Oh, look, that's an Erlang function with a case expression in it. Okay, cool."

And it seems like the \[unintelligible 00:29:58.13\] is moving away a bit from that, using the intermediate format... So Elixir compiles to Erlang as well, and it compiles to - I think it's called abstract forms, I think, which is a layer one above the one I was targeting. And I think LFE, the other big BEAM language, that also did a similar switch from moving from the one I was targeting to moving one layer up. So I'm one layer above them as well. So I think everyone's just sort of moving away from that one. And they don't publish the documentation for it anymore, which makes me a little bit nervous...

**Jerod Santo:** Yeah, that's a little bit ominous. Well, what about Gleam? Is Gleam a good language for writing compilers?

**Louis Pilfold:** I wanted everyone to write, I don't know, business things, or games, or whatever, but there's so many people making languages of Gleam. It seems to be a language person's language. So yeah, there's people who -- I think we've even got bindings to... \[unintelligible 00:30:53.22\] I think it is, which is like an alternative to LLVM. So they're like writing Gleam programs that compile to native, and stuff, which is very cool. So I think it is good for writing compilers. People seem to like doing it.

**Adam Stacoviak:** Why did you want to focus on business stuff and games? What made that be your focus?

**Louis Pilfold:** Well, it's because that's the -- I mean, games because it's cool. I like when people make art. And games are a prominent form of electronic art. That's awesome. So I like art. More art is good. But the business stuff is because that's what I make my money with. I spend five days a week, eight hours a day making some - I don't know, web thing, or payment processor, or something... And I was always like "I wish there was some other -- the language that I want for this just isn't quite there. I can't find it." And while if I was trying to mess about with some art, or some music, or something, it's like "Oh, GDScript is really good for this." Or like "Rust is really good for this." And maybe that's because I didn't have enough experience in those worlds to say "Oh, actually, Rust isn't very good for it. I think I can make a better video game Rust", or something. I just didn't feel the same need to try and like solve those problems... While Gleam is like "This is what I think people need to make their lives easier, to remove some of the stress of the work we've got to do every day."

**Jerod Santo:** \[00:32:19.26\] Are you still building these businesses?

**Louis Pilfold:** No, not really... \[laughter\]

**Adam Stacoviak:** That's a good response.

**Louis Pilfold:** Well, I was super-lucky... At some point, someone's like "Oh, you should sign up for GitHub Sponsors." And I went "Really?! Well, for my silly little open source language thing? Okay..." And then people started signing up, which was amazing. And not last December, but the December before, I had enough money coming in every month from that, that I had managed to fill up my savings again after -- because I kept quitting my job to work on Gleam, and then I'd run out of savings and go "I've got to get a job really quickly. Oh, it's looking uncomfortable... How do I pay rent?" And then I'd get a job and stick to that for six months, and do the same thing again. And I'd managed to build up the savings enough to be like "Oh, wow, I've actually got a little buffer. Let's see what happens if we go full-time on Gleam and actually try and live off of it this time?" And since then, I've just been working on Gleam full-time, which is amazing.

I do think it's really important to try and find business-like things to work on. Or just Gleam things in general, because I remember -- who was it? Matz, the creator of Ruby; he would say "I'm not a Ruby developer. I'm a C developer who works with Ruby", which... If you spend all your day working inside the interpreter or the compiler, you may not actually use your language very much. So I've tried to spend as much time as I can writing code in Gleam. We've got lots of tooling written in Gleam, and websites, and little data automation things... Because if I don't know what it's like to use the language, I'm not actually any good at the helm of this thing. Like, somebody else should be making the decisions if I haven't used it as much as all the users have.

**Adam Stacoviak:** So what are you building with it? Like, specifically.

**Louis Pilfold:** What was the last thing I built...? Um...

**Adam Stacoviak:** Like tooling... The things you just mentioned. What are some specifics?

**Louis Pilfold:** Okay, so we use the Hex package manager. Hex is the package manager for the BEAM ecosystem. It was originally made for Elixir, but now all the BEAM languages use it. And so they've got a website, and you can search for packages on there. But it just shows you all 18,000 packages, or 19,000, or however many there is. But if you're trying to find a Gleam package, that doesn't work very well, because there's 300, 400, something like that... So I made a web app which scrapes their API, works out which ones are Gleam, and then allows you to have like a searchable interface for like finding Gleam packages, and then finding their donks -- donks? Finding their docs, and that sort of thing.

**Jerod Santo:** \[laughs\] They've got donks?

**Louis Pilfold:** Finding their donks. Donks are kind of music that's very popular around here. No, we don't have any Gleam donks music yet.

**Adam Stacoviak:** Is that right?

**Jerod Santo:** Oh, really? What kind of music is it?

**Louis Pilfold:** I think it was originally called scouse house, because it was like a techno house music that came from... Where was it - Liverpool, Birmingham? Gosh, I'm having a blank. What's a scouser?

**Jerod Santo:** Don't ask me...

**Louis Pilfold:** I'm saying great English words at you, and you have no idea... \[laughter\]

**Jerod Santo:** We're just staring off into the abyss now. What a scouser, Adam?

**Louis Pilfold:** Anyway... I have a slight mind blank. All the English people are gonna be laughing at me... But another thing I made was -- so Lustre, that framework I mentioned... You've got to write lots of HTML in it, but it doesn't use a JSX type syntax. It's got its own DSL. So that means -- that works fine, there's nothing wrong with it... But it means that you can't copy and paste a HTML example. Say for example you're using -- gosh, I don't know... This is going to date to me, but let's say you're using Bootstrap - I don't think anyone uses Bootstrap anymore - and you want to copy out the example of how you make a form... And you can't paste it directly into a Gleam code, because it uses a different syntax. So I've made a little widget where you paste in your HTML, and it gives you back Gleam code, like "Here's the same thing in the Lustre syntax."

**Adam Stacoviak:** \[00:36:04.04\] And I guess the packages live at packages.gleam.run. Is that the --

**Louis Pilfold:** Yeah, that's the little searchy website... And it's just like a frontend for the full BEAM package manager.

**Adam Stacoviak:** And Lustre is L-U-S-T-R-E, right?

**Louis Pilfold:** Yes, that's the one.

**Adam Stacoviak:** And that's living off of Luster Labs. Is that something that was different, like a different thing you did? Is that correct?

**Louis Pilfold:** So I don't make Lustre. I'm a light user and a fan, but that's all made by Hayleigh and her contributors.

**Adam Stacoviak:** I see. Okay.

**Louis Pilfold:** It's quite funny, because it's getting so big that everyone \[unintelligible 00:36:39.26\] that either I made it, or that she made Gleam. \[laughter\]

**Jerod Santo:** Which one is it...? It's too confusing.

**Louis Pilfold:** Yeah.

**Jerod Santo:** That's cool. It's cool that the community is growing beyond you.

**Louis Pilfold:** Yeah, it's great... But I just keep getting all these reports being like "How do I do this in Lustre?" and I was like "I've no idea." \[laughter\]

**Adam Stacoviak:** And Hayleigh is Hayleigh Thompson, just so everybody knows.

**Louis Pilfold:** Yeah.

**Adam Stacoviak:** Hayleigh-dot-dev, long form.

**Jerod Santo:** So on this package manager - you've mentioned "If you like Mix, you'll love Cargo. \[unintelligible 00:37:11.07\] to be better than Cargo, or even more--" I don't know. You didn't say that --

**Louis Pilfold:** Well... It's a Cargo rip-off, but... Yeah.

**Jerod Santo:** It's a cargo cult. Oh...!

**Louis Pilfold:** Great artists steal.

**Jerod Santo:** But now you're saying you're using Hex. So tell us more about how it works.

**Louis Pilfold:** So the interface of the Gleam build tool, creatively named Gleam, is very similar to Cargo. I'll give you an example. If you want to use Mix, you start your project, you clone it, you go into it, and then you'd run \[unintelligible 00:37:44.12\] to download all your dependencies. And then you can run like Mix tests, etc. In the Rust world, you don't need to run cargo download deps. It just goes "Oh, you don't have your deps yet, and you want to compile... I'll download the dep for you." Gosh, why didn't they all do that? That's such an obvious thing in retrospect. So it's all those little things that we've stolen from Cargo... But it talks to the same package manager system that Mix does, for example, and Rebar, the Erlang tool does... So we share the same packages. The Gleam build tool knows how to compile Gleam, it also knows how to compile Erlang, it knows how to compile Elixir. So you could use the build tool and not use Gleam at all, if you wanted to... And just like have a whole Elixir project in there.

And the same thing, we can depend on dependencies that are published with Gleam, or Mix, or Rebar, or Rebar3. So we try and enable you to use as much of the ecosystem as possible... Because that's a big part of why Gleam is good, is that this existing ecosystem is fantastic, and we want you to better use it.

**Jerod Santo:** So can you use pretty much anything? Because I was just using a an Elixir library today called Floki, which is an HTML parser, and stuff...

**Louis Pilfold:** The HTML parser, yeah.

**Jerod Santo:** Yeah. It's just a popular one... And a pretty good one. I wish it did more manipulation type stuff, but anyways. Not your problem. \[unintelligible 00:39:09.01\] Now I'm becoming one of your Lustre people. So could I just use that from Gleam then? Just be like floki dot whatever from my Gleam code, or how does that work?

**Louis Pilfold:** Yeah, yeah. It's interesting you picked that one, because that one for some reason has one Gleam file in it, and it has done it for years. You can't use it, but like there is just one single Gleam file hidden in the Floki source tree.

**Jerod Santo:** Oh, really? Interesting.

**Louis Pilfold:** So you can add it as a dependency. The build tool will automatically compile it for you, but you will need to write some bindings for it. So the reason for that -- so in Erlang you can just say "Oh, well, I'm using an Elixir package. It defines a module called this." I can just do like the name dot whatever. And the same thing in Elixir. You can just say "Oh, there's one in Erlang called name dot function name." You can't do that in Gleam, and the reason for that is that everything is completely typed and typesafe in Gleam. And we can infer everything from looking at Gleam code. We say you should write annotations, but you don't need to. We can just tell everything by looking at the code, but we can't analyze Elixir code. We can't analyze Erlang code, right?

\[00:40:18.12\] So we need you to say "Trust me, compiler, there's a module called this, and it has a function called this." Maybe like "It's called Floki, it has a function called parse HTML, and it takes in a string of HTML, and it returns a list of DOM nodes", or something like that. And the compiler will go "Okay, cool. I trust you." And then you can use that defined function in your code.

So there's a handful of packages in the package manager that are just -- if someone wanted to use Floki, someone might write gloki, I guess... People like to put gl before the names of the package... Which some people really hate, but I think it's really cute... Which are just like a little facade over some existing really good Elixir or Erlang package.

So there's a little bit of API design to do there. You could just import them one for one, but I think there's more value in if you take a little bit of time and go "Okay, so what exactly would a good API look like for this in like a typed context?" Because what's really good for a dynamically-typed language may not necessarily be like the best API design for a typed language. So I tend to write my applications that use a Elixir or Erlang library - I just like in my application have one module that wraps it, and then over time I slowly make it a bit better... And then when I go "Actually, this is nice now", I might pull that module out and put it on the package manager.

**Jerod Santo:** Pretty cool. So you have access to these things that just require a little bit of decorating, or wrapping, or just some -- there's some ceremony involved, and if you do it well, there's actually some benefits there.

**Louis Pilfold:** Yeah. And those bindings are unchecked. You say "It's called this." Well, if you made a typo, it's wrong. Or if you've got a type annotation that's wrong, then you might get a runtime error. I mean, I think that's quite a good trade-off. You get this whole awesome bit of code that's written in another language, but you might get runtime error... Okay, that sort of slightly undermines what Gleam is going for. It should always work. But then you know exactly where to look. Like, "Oh, it crashed. Oh, it must be at that pointer, or at those bindings." It really like narrows the amount of space you have to spend to debugging your program.

**Jerod Santo:** Well, it gives Gleam users access to thousands and thousands of packages, with a little bit of work, that they wouldn't have access to. And like you said, something around -- you said around 400 packages currently, that are like Gleam-native-ish?

**Louis Pilfold:** Yeah, good question, how many are there... Three and a half hundred.

**Jerod Santo:** So it sounds like Gleam's in a very good position. By the way, to our listener, if you like to trailblaze a little bit, which - there's probably a lot of low-hanging fruit of things that could be written in Gleam. Even just ported, like really nice libraries, where you could wrap it and continue to do the Elixir dependency, or you could write one that's Gleam-native, and provide that value to the community. There's probably lots of opportunity there. You could be like Hayleigh. You could be the next Lustre author of the next thing... Or like Chris McCord; you could be writing the Phoenix that might bring Gleam to thousands of other users. So lots of opportunity, it sounds like, where it currently stands.

**Louis Pilfold:** That's how I made my name in the open source world. I started writing Elixir just as v1 came about, and I was writing Ruby prior to that. And so I was like "Oh, I really wish there was a linter." So I made the first Elixir linter, that was later forked and became Credo, which is the main one...

**Jerod Santo:** \[unintelligible 00:43:45.04\]

**Louis Pilfold:** \[00:43:47.07\] And after that I wrote the first Elixir formatter, which thankfully didn't get used, and -- well, it did get used, but then they made a new one for the official one, because that's much better than my one. But yeah, it's really cool being in a young ecosystem, because there's so much opportunity to make things, and sort of like decide what the shape of this whole little world should be.

**Adam Stacoviak:** On the FAQs, which I am thankful for... I wish they weren't stuck down in somewhere else. I kind of wish they were a little bit -- like, maybe first-class citizen in the navigation, potentially, because they're very helpful... And I see that you compare Gleam to Alpaca, as we talked about, Caml... Or sorry, Caramel, not Caml. Elixir, and others. And we talk about typing, static typing, and it compiles to JavaScript... Why don't you compare this to TypeScript?

**Louis Pilfold:** I think a lot of those "How does it compare to this?" questions came about because people kept asking me about those specific languages. And people don't ask me that question much anymore, which is interesting. I think now it's mature enough, and there's enough people taking it seriously; people no longer ask "Why does this exist?" People are looking at "Oh, it's a thing. Okay", and they don't ask "Why does this exist if you know Caramel exists?" People are more interested in "Okay, how do I do this in here?" So that's sort of the question that comes up.

It could be interesting to compare it to TypeScript. They're quite different languages. I think they might be slightly better for this, which - they're not quite ready yet, but there's a section on the website called Cheat Sheets, which attempts to just show you like the very basics of the language really quickly by comparing it to a language you know. I think there's a pull request for one with TypeScript. They could all do with a lot of love, actually, all of the cheat sheets... But I'll get to at some point.

**Adam Stacoviak:** Like Gleam for TypeScript users, essentially.

**Louis Pilfold:** Exactly, yeah. Because it started I think with just like Gleam for Elixir users, because there's like "Here's a close enough. Here's how you do this, here's how you do this. Go write a program." But they're kind of a nice way to sort of get a general feel for the language, I think.

**Break**: \[00:45:59.24\]

**Jerod Santo:** How'd you get all these sponsors? You've got so many sponsors on GitHub Sponsors. I mean, 258 currently, 97% towards your goal of the nice round number of 256. I'm not sure how to 258 is almost 256, but maybe that has to do with recurring versus non-recurring, or something...

**Louis Pilfold:** Right. Yeah, so here's the question... On GitHub, if you look at the number of sponsors, they list two different numbers and they don't match. I've no idea how they calculate it...

**Jerod Santo:** It's just a bug, maybe.

**Louis Pilfold:** This is Microsoft. You'd think -- I thought it's like maybe it's eventually consistent, but it's fairly consistently wrong...

**Jerod Santo:** \[laughs\]

**Louis Pilfold:** So I don't know what's going on there.

**Jerod Santo:** Yeah, who knows? Either way, you're doing great.

**Louis Pilfold:** Yeah. Gosh, I don't know, it's a lot of things. It was a lot of luck. I think there's a lot of my having been in the BEAM world for a good while. I was known in the Elixir space prior to the whole Gleam thing starting to take off. I think a lot of it is from -- I put a lot of work not just into the making the technology, but also a lot of work into making the community. Maybe about half and half or so. Well, since v1, I do much less coding and a lot more talking to people, but... It's all very well and good having a good piece of technology; if it doesn't have people surrounding it... You need to have people who can help each other learn, and people who can make the things you can't make... And you want people to have a good emotional connection to the thing you want them to use, right? Not just because they like the experience of using technology, because like when they're hanging out with their peers, they're having a good time. So making a really good environment, that is welcoming and learning and friendly is one of the main things I think about. And I think that by accident really paid dividends with making people want to give me $5 a month. And if enough people give $5 a month, then we can afford to keep doing this thing. Which we have been able to for the last year and a bit, which is fantastic.

There's also one big sponsor, which is Fly, the deployment platform. They got involved a bit before I went full-time, and they've been super-awesome. If it wasn't for them, I wouldn't have been able to go full-time as early as I did. The reason why we're v1 now, rather than like v1 later is definitely because they got involved. They've been really supportive.

**Adam Stacoviak:** Yeah, we share a similar "If they weren't involved story." We're very big fans of Fly. Our home's on Fly, as you know. I say that on the podcast... It's our home, Jerod; it's our home. \[laughter\] We're big fans of Fly, obviously, and Kurt and team...

**Jerod Santo:** Yeah, they sponsor us.

**Adam Stacoviak:** Yeah, for sure.

**Louis Pilfold:** And I just think that all companies should do this. All technology companies are building on a bedrock of open source technology, that's maintained by a bunch of people working when they've got a bit of time. I find it so frustrating -- what would this industry look like if all of these things that we rely on had a half decent amount of funding? If all of these companies spent like a coffee amount of money or an IDE subscription amount of money on these little open source projects, everything would work so much better. But yeah, there's a whole battle to win there, but Fly is just --

**Jerod Santo:** Preaching to the choir there, Louis. Preaching to the choir. I agree with you.

**Adam Stacoviak:** I don't know if you answered Jerod's question though, how did you do this? How did you get these many sponsors? We've talked around it, but not the direct "How in the world did you do this?" Because, I mean, that's a lot.

**Louis Pilfold:** I wish I knew what the magic button was, because I'd just keep pressing that damn thing.

**Adam Stacoviak:** Give us the 30-second secret sauce version. Just tell us exactly how to do it. The prescription.

**Louis Pilfold:** \[laughs\] I wish I knew. I guess just be nice, ask for help a lot, and hope for the best. And most importantly, be lucky. I think that is the big thing. I would love to have a good idea of what the thing is. I kept trying different things, and I've got charts of like how much activity there is on the website, and how many sponsors I get, and how much money I've got coming in... And I try something, and nothing will change. And then I will do something else, and that will change it. But I'm like "Why did one work and the other didn't?" I just can't quite work it out.

\[00:56:03.19\] The thing that's been amazing has been when v1 happened - Twitch streamers picked it up. Theo and Prime. \[unintelligible 00:56:10.00\] is Theo. And when those two put the word out about Gleam, everything exploded. All of my graphs just shot up into the sky. Those two gents doing 30 minutes of coverage each did more for any of my metrics than I've managed to do in three years. So I don't know... Get lucky and hope that the right person notices you. When Fly noticed, that was a huge change. When these couple of streamers noticed, that was a huge change. Just keep rolling the dice and talking to people and hoping for the best, I guess.

**Adam Stacoviak:** What's the next level? Is this sponsors-driven support the way to go for the foreseeable future? Is there a next level for Gleam the language, and you the person that's sort of primarily behind everything?

**Louis Pilfold:** So I don't earn as much as I would if I was doing a developer job here in London. I would like to get my income up to the point where I could pay myself that full salary, and then I would really love to be able to start employing, or like outsourcing, or contracting or something the core team members. There's a few people -- the first one is probably Jack, who lives in Italy... He's an amazing guy; he does so much work. And I would just love to be able to pay him for the amazing work he's doing.

And yeah, it's a bit daunting working out how we'd get enough money to be able to do those things, but everything's moved so fast since v1, it makes me think "Oh, actually, this is really doable." Things that didn't seem possible before do seem possible.

There's lots of avenues... I think sponsorship's always gonna be a big part of that. And I like sponsorship, because it really feels like an open source thing to me, this idea that if you want something, you support it, whether it be by fixing a bug, or like testing something, or like giving them $5. That's awesome. I really want to find ways to get more corporate sponsors like Fly. I think as more companies start to invest and use Gleam, I think we definitely naturally get more who want to support in that way. But I also want to explore doing some other things, like having maybe like a Gleam enterprise, which is the same as support, but it's just wrapped in a way to help you get it through procurement. \[laughs\]

But things like premium educational content... There's a bunch of open source projects that have something like that, where they just have like some amounts of educational content or references, and stuff like that... And then you pay a small for a company subscription amount of money, but large for an open source project amount of money, and that gives you access to that. And from talking to projects that do this, it seems that a lot of them - the companies don't actually seem to use it that much. It's just that companies like buying things, so I want to sort of play around with that interaction a little bit. It's hard for a capitalist company to just say "Yes, we'll give you some money", but it's easy for them saying "Oh yes, we'll give you a few thousand dollars every X amount of time, such that we can have this relationship with you, and we have this content." So that's something to explore.

Other things are merchandise. I've got a friend working on a merch store... So if you want to buy your Gleam keycaps and Gleam T-shirts and Gleam stickers, that'll be a thing we can hopefully do soon. I have no idea if that will actually make money or not, but I just love the idea of people having like little Gleam logos on their keyboard.

**Adam Stacoviak:** I would say yes, but no, but...

**Jerod Santo:** Yeah. We have been selling merch for a long time, and... It's fun. I'll say that about it. It is fun to do. \[laughs\]

**Adam Stacoviak:** \[00:59:51.25\] It is not the pillar from which we stand upon. It is marketing and fun.

**Jerod Santo:** Yes.

**Adam Stacoviak:** I would say what do you do then? What kind of efforts can you personally make, or team members within Gleam can make to make inroads into corporate sponsors? Not just sponsors, like you said, but those who use it and get value, so they give back to it. Because I think of some obvious other ones I won't name, but there's several out there that when they utilize something, they tend to give thousands, like you'd mentioned, back to that community, because there's that relationship, that "We want to do this, so that it does remain active, and we use it, so we get benefits of it." How do you -- do you make a deck? Do you cold-call? What do you do?

**Louis Pilfold:** I think the first thing we've got to do is we've got to get those users, right? So Gleam is really new. v1 came out about a month and a half ago, and that means we don't have -- there are production users, which is exciting. That's really cool. But we don't have those ones that are not tiny, tiny, little handful of people companies; or it's a company who will just have a very small amount of Gleam in their production stack. We want to keep working on the experience and make it better, make it easier to learn and use Gleam. And then hopefully in like - gosh, I don't know... 12, 18 months time we'll have some companies who are saying "Yes. Okay. We will happily publicly say that we have been using Gleam this much, over this amount of time, and it's been really good for us." And then I think that will have two effects. First, it will encourage other companies to both invest and to talk openly about using Gleam, but it will also "Hey, we should probably talk to these companies and work out what those next steps are."

And I think a lot of the people who are -- you know, with new languages... Companies don't decide to do things, people decide to do things. And the people who decide to put Gleam into a company are going to be these people who have this sort of emotional connection to Gleam. They think that it is good, or they like it, or they think it's valuable for some reason, such that they're willing to take that risk, whether they're the CTO of a company and they go "Okay, I'm gonna risk my company on this", or they're just an engineer and they want to say "Yes, I'm gonna risk my -- I'm willing to put myself forward" and the teams say "Yes, I think we should do this." "I'm going to propose this thing." So they're going to be pretty connected to Gleam... So I reckon, I'm probably going to know who they are. They're probably going to be in the community, right?

**Adam Stacoviak:** Well, what are some of the obvious places that companies maybe having code out there or applications out there that could just benefit from Gleam? Either sprinkled in as a new greenfield project... Would it be greenfield projects, would it be rewrites? Would it be legacy code that sort of needs to be modernized? Where does Gleam fit in for that kind of scenario, to kind of give people a buffer to kind of go against?

**Louis Pilfold:** I'm not sure really... It's tricky, because I wouldn't say -- you can take a language like Zig, for example, and there's a really clear way that you would slot that into an enterprise... You've got a big, difficult to compile C project that you need to cross-compile and distribute around. Obviously, you're just gonna use Zig for that. We don't have that. We're just a really good language, I think... So you can kind of use it for anything. So I think at that point it's less of a question of what is Gleam good for, it's more about spotting opportunities for inside whatever the circumstances of that business are for introducing something new.

I know one company wrote a HTTP proxy... They needed to write a HTTP proxy, and someone went "Oh, I'm gonna do that in Gleam." And now they're using it for that. I know a company -- what did they do...? I don't have to explain what they do, because it's too complicated... But for their internal accounting/tracking system thing... I don't know what it is. Because it's an internal tool. They just made a new thing, and they just made it in Gleam. So I think it's more about finding the opportunities inside the business than being a specific Gleam thing. And if the people inside those businesses were big fans of Rust or Go, they could probably make an argument for using those things instead.

\[01:04:02.20\] So I think the really valuable thing is to make it really obvious that Gleam is a really good, solid choice, both from like an engineering perspective, but also from the point of view of the company. One company has to look at the Gleam project and go, "Okay, that looks really solid. Oh, it looks like it's well funded, it looks like the team are really responsive, it looks like there's good documentation", that kind of thing.

**Adam Stacoviak:** You compared it to Go earlier... If you can, remind me of your comparison, and then does it make sense to say if they're reaching for Go for a scenario to consider Gleam as well, in that consideration?

**Louis Pilfold:** I think in a lot of circumstances, yes... Especially in web. An obvious difference is that Go is so much more mature than Gleam. We're not quite there, but I think there's a lot of similar notes in Go to Gleam. I think there's a lot of similar aims as well. It's a language that is designed to enable engineers to learn it quickly, and just get on with making things... And things that may possibly be difficult to do in Python or Ruby or whatever they were using previously.

I think the thing that is different is the execution of what is a simple, practical, small language. And they've gone on this - what to me feels like kind of old fashioned, in a lot of ways procedural language, of like null pointers, and mutability, and all that sort of stuff. And I've gone off in this functional way. So I'm hoping that -- I think there's a lot of space for people who use Go but aren't particularly enamored with Go, the language; they just like the attitude of Go, being able to get stuff done. I'm hoping it'd be like the functional curious ones are those we can move over into the BEAM world, and use Gleam to do that.

**Jerod Santo:** What's next for the language? You've reached 1.0, I think you've reached 1.1... And surely, you're not just pushing the community and the reputation and the business side forward, but the language itself. So what are you working on there? What's coming down the pipeline? What are you excited about? Maybe Gleam 2, or Gleam 1.5, or... I don't know how your versioning works, but... We know 1.0 works, but that's about it.

**Louis Pilfold:** So one thing I want to do with Gleam is I want to not add lots of things to it. To the language, at least; to the core language. I see this thing of languages reaching v1 and go "That's really nice!" And then six months later they've added this thing, and six months later they've added this thing... And it just like keeps getting bigger and more complicated. And most of the times, do you need those things? I think everyone was pretty happy at v1. Like, did you really need to?

So i want to hold off on adding things to the language itself, because I think a small, concise, really well-considered feature set is a feature in itself. Not having to learn all the different, complicated new operators and ways of doing things is a feature. So I don't want to make the language more complicated.

The thing that we're really focusing on is the language server. So we've got a language server, which - the fact that it exists first party in a v1 language I think is pretty exceptional. However, compared to a lot of other language servers, it's super-immature. It's easily the most immature thing in the Gleam world. And I want it to be as good as the one that you find in Rust, or Go, or Java, and all these sorts of things. That's quite an ambitious target, and I think we can get there... But all this energy that we might be pouring into new Gleam features, we're going to point at the tooling, because I think everyone would benefit from having excellent tooling.

**Adam Stacoviak:** When you focus on this language server, what are the things you think are most important to have a good language server? There's obvious good reasons why you should have one in general, but what are the things you think are most important to do first?

**Louis Pilfold:** \[01:07:52.04\] There's loads of things that people just expect a language server to have. And if it doesn't have it, they think it's broken. Autocompletion of functions and variables and stuff is something that we don't have yet, and everyone as a result thinks the language server doesn't work... Even though if they tried any of the other features, they would see they do work. So we need to make sure we've got -- we've got go to definition, go to reference, autocomplete, absolutely everything. All these things people just expect. And then after that, we need to start thinking about things that make it really special, I think.

So Gleam is a language based around static analysis. We know loads about your code, and so I think we can do loads of really cool refactorings. I think being able to do code mods and refactorings and code generations inside your editors could be this really powerful thing which we can deliver. And I think it will also scratch a lot of that itch that people want for macros and meta programming for. I think a lot of that is just about like removing boilerplates, or things that are slightly tedious. If we could just help you write that code, that will make a lot of those problems go away, I think. Maybe. We'll find out.

**Adam Stacoviak:** I imagine the generation is probably like as the idioms around idiomatic code changes, that's easier for you to say "Well, this was the old way. This is now the new way. This is the evolved way." Right? And I guess the next question around generation is, is there anything in particular you're doing that's like helping you be more playful, or I suppose more useful in an LLM, or a language model, that's helping a developer learn Gleam, or use Gleam?

**Louis Pilfold:** I don't know, a few people have tried to do stuff with LLMs, and no one's got any particularly amazing results yet. It's not my area of expertise, so I can't speak with authority here, but I think it's just that we don't have quite enough content to be able to reliably put out good answers yet. But from my point of view, I'm not very invested in improving that yet... And the reason for that is -- there's a lot more activity now since v1, but there's so much activity that we can't keep to keep up. And if someone is going to ask a question, like "How do I do X Y, Z?", I don't want them to go to an LLM. I want them to ask us, because they'll get a good answer straight away, I'm confident. And then we know who they are... And they started to feel like they're part of this community, rather than being like "Gleam is this tool, and I learn about it through talking to this AI model, and I'm not actually in any way invested in the community." I want people to go "Oh, wow, I asked, and not only did I get an answer, these people were really nice. Okay, well, I'll hang out here more", and then they get more engaged, and more involved... And I think they'll stick around for longer.

**Adam Stacoviak:** Is your middle name by any chance -- does it begin with L?

**Louis Pilfold:** \[laughs\]

**Adam Stacoviak:** You could at least be LLP. Not LLM.

**Louis Pilfold:** \[laughs\] My middle name is Adam. It's a very good name.

**Adam Stacoviak:** Yeah.

**Jerod Santo:** Oh, very cool. What's the best way -- we've mentioned gleam.run multiple times. You mentioned Discord, there's GitHub, there's Sponsors, there's probably social media accounts... If people want to either dip their toe into the language or into the community, what are the best touchpoints for folks?

**Louis Pilfold:** So if you go to gleam.run, and the very first part of the website, on the homepage, there is a button that says Try Gleam. If you click on that, it will take you to an interactive tutorial that runs inside your browser. So it runs the compiler... We've compiled the compiler to WASM, it runs inside your browser, and then we've got a series of interactive tutorials that will just take you through the entire language. And you can blast through it in a few hours, and get feedback, without having to install Gleam or Erlang or anything like that. So if you want to try it, do that first. And then join the Discord, talk to people, start making projects, come say hi... And yeah, and sponsor me. \[laughs\]

**Jerod Santo:** There you go. In that order.

**Louis Pilfold:** Or maybe sponsor me first, and then check it out. \[laughter\]

**Adam Stacoviak:** Good one. Well, gleam.run. I love the .runs, Jerod. This is such a cool URL. This the first time I think I've seen a .run.

**Jerod Santo:** Definitely one that you remember. I haven't remembered any other ones. So this is like my first one as well. Gleam.run. It's cool. You expect -- I actually had it in my browser history, and I was coming back to your stuff, Louis, and I remember searching in my browser for Gleam lang, or gleamlang.org... And it's not none of these. So I had to go to the Twitter and be like "Oh, gleam.run." So it's not quite there in my memory bank, but still cool.

**Adam Stacoviak:** I think the -langs are a thing of the past. It's .run from here.

**Jerod Santo:** It's a hack. Yeah, they're hacks. But I'm used to them, you know?

**Adam Stacoviak:** Yeah, for sure.

**Jerod Santo:** Well, we need the .lang TLD. Gleam.lang. That would be sweet.

**Louis Pilfold:** I really like -- gleam.run is the command for running your program...

**Jerod Santo:** Oh, there you go.

**Louis Pilfold:** So it's just so perfect.

**Adam Stacoviak:** Well, Louis, thank you so much for sharing Gleam with us, and being so enthusiastic about open source, and diving deep into GitHub Sponsors, and just sponsoring, and being so committed to letting the people who love your things support you... And even the enterprises like Fly that support us as well, support you in your endeavors. May the wind be at your back, my friend. Thank you.

**Louis Pilfold:** Thank you so much. Thank you so much. Thanks for having me, guys.
