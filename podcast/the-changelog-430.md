**Jerod Santo:** So I'm joined by Paul Biggar... You're a founder of CircleCI, and now you're working on Dark, which is a combined language editor and infrastructure to make it easy to build backends. Paul, welcome to the Changelog!

**Paul Biggar:** Yeah, thanks so much for having me.

**Jerod Santo:** Happy to have you. Well, tell us the story, start us off. From CircleCI to Dark.

**Paul Biggar:** Yeah. The ideas behind Dark came when I was working at CircleCI. There's a lot of seeing the world adopt for continuous delivery, and looking at the programming languages we use, and how difficult it is to add cloud into them, looking at how teams build things, and looking at how hard it is to build your own internal tools, because every internal tool that you build is infrastructure that you now need to support and maintain etc. So all these ideas were sort of fomenting in my head around 2013-2015.

Then I left Circle in late 2015. I remember I was massively burnt out; startups are hard, and I made lots of mistakes as a first-time founder, that led to more incredible burnouts... So I took 18 months off. Then towards the end of that I started thinking "What is it that I'm going to do next?" A lot of the things that I thought might be cool to do, a lot of startups that I thought might be fun to build, that kind of thing - they all had this infrastructure component; if I'm gonna build a small company, a one-person company, a two-person, a five-person company, whatever, I don't want to spend all of my time dealing with AWS, and that kind of thing. So all these ideas just kept pointing me back to this other idea I had, which was Dark... So it kind of got to the point where I just couldn't stop thinking about it, so that's what I've decided to do next.

**Jerod Santo:** So you have these three aspects of Dark that you say in the tagline - it's a language, it's an editor, and it's infrastructure as well. So... Building a language is hard, making editors is hard, and of course, infrastructure is also hard... But even conceptually, what's the win of combining these usually disconnected aspects of coding?

**Paul Biggar:** Yeah. It's kind of funny, we find it really hard to describe what Dark is... Because as you say, it's a programming language, it's an editor, it's infrastructure, soon it'll be a package manager as well...

**Jerod Santo:** There you go...

**Paul Biggar:** Yeah, and a lot of people have the Why. And the Why is what Dark is not. So the thing that Dark is not - it's not setting up Kubernetes, it's not like setting up serverless, it's not CI/CD pipelines... There's in fact a zero-second deploy in Dark, there's no waiting for 15 minutes, or whatever, there's no AWS, there's no -- I'm just trying to think of all the other things that we have to do. There's no Yaml files...

**Jerod Santo:** \[04:15\] Backups? \[laughs\]

**Paul Biggar:** Databases, queues, all that sort of thing. It's all just built-in, so you don't have to think about "Oh, where am I going to spin up this thing? How am I going to get the code from here to here?" It's all just sort of like handled for you... And the way that we're able to do this is by integrating all the things. Because if you say to someone who's using a standard AWS setup, "We would like deploys to be zero seconds", they're gonna say "Well, that's not possible. That makes no sense." We have to do tests. Maybe they do staging, or maybe there's integration tests, or there's QA... There's something in the way to sanity check.

You actually have to build in all this additional stuff to make sure that this thing actually works when you deploy it, and you can't do that with languages that aren't designed for it. And I don't just mean languages here, but I mean \[unintelligible 00:05:04.12\] the infrastructure - it's all sort of designed for this purpose, and other languages and editors and infrastructure are not designed for this purpose, so they don't have these features.

**Jerod Santo:** Right. So can you tease it apart? I know it's tightly integrated, but can you use Dark the language without using Dark the editor?

**Paul Biggar:** No. Absolutely not, no.

**Jerod Santo:** Okay. It's the whole kit and caboodle.

**Paul Biggar:** Yeah, and that's the advantage. To give you a couple of the reasons that people like Dark... One of them is this thing that we call deployless. It's an instant deploy of any code that you ride. And obviously, that sounds dangerous, right? We perhaps have memories of writing PHP in 2001, where it just didn't work to edit it in Vim on these shared VPSes that we had at the time... So Dark is designed around this. It's like, \[unintelligible 00:05:56.17\] it has to be impossible to have syntax errors... And that's where the editor comes in. So the editor is the thing that enables that. But in most editors you can have syntax errors, you can type whatever the hell you like... So Dark's editor is a structured editor, which doesn't allow invalid syntax, and it significantly reduces the amount of times that you can introduce problems by typing. So that's a place where you have an editor, and you have a language, and they enable the deployless thing. That just wouldn't be possible without having the editor, the infrastructure and the language being all part of the same thing.

**Jerod Santo:** I was gonna say, no syntax errors -- you've obviously never seen me write code, because I can find a way... I can find away. But apparently, the editor just says "No, that's just not gonna..." What, you just can't hit the key, or how does it work?

**Paul Biggar:** It isn't text. Most programming languages - there are text files, and then there's a parser that parses it. In Dark, when you type in the editor, everything that you type is a valid part of the program. You might think, "Oh, what happens when --" You know, it's sort of easy enough; I put it in double-quotes, and that's a string, and then I type in the string, and it's fine; you can't type outside the double quotes, or whatever... But when you think about a function call or something like that - well, what happens if I press backspace on the name of a function, or something like that?" And we have this concept called partials, where while things are invalid, the old behavior remains, so that you get an atomic switch from the old behavior to the new behavior.

And then the major thing that we have to enable that sort of change is called -- well, they're a feature flag, so a very common thing... They're specifically integrated into the language to give you a new place to write new code, without affecting the old code. Basically, just lots of safety rails built into the language itself.

**Jerod Santo:** Gotcha. So what is Dark's sweet spot? Is it web apps, is it CLIs, is it games? What typically would you build with Dark?

**Paul Biggar:** \[07:59\] I think the truth is today that there is no sweet spot. And this is something that I've come to realize over the last year, that Dark was not quite ready for anyone, and I think that is still the case today. So really, the kind of people who are using it today are people who are experimenting, or they're building small tools, or something... People will often build Slack bots, or they build something that integrates a couple of services...

Where we intend to get to is that you will built everything in Dark. Everything can be built 10x easier with these things... But we still lack a lot of things that you actually need in order to be able to do it, such as things like user management, and package managers, and that sort of thing being built, in the way that the Rails ecosystem has Devise, and OmniAuth, and all that sort of thing.

**Jerod Santo:** Right. So you began at 2016(ish), it's 2021, it's in private beta... It's a long road, and it sounds like you said it's still somewhat experimental, you're still trying to flesh things out... When you started Dark, did you know the long and windy road that's in front of you, or did you think it'd be an easier thing to tackle?

**Paul Biggar:** I didn't. So we officially started in about late 2017. It's been a little over three years now, and we expected it to be much, much quicker. But what Dark was in the early days has changed significantly. In the early days, Dark was sort of a nodes and edges sort of thing, where you dragged things, and nodes were functions, and the edges were the results of those functions.

**Jerod Santo:** Okay.

**Paul Biggar:** So we were experimenting with lots of different ways to be able to write code... And all that got discarded and went to things that looked a lot more like what people expect coding to look like... But we managed to keep the advantages of what we were looking for - that deploylessness, and I'll talk probably later about liveness, or live values, which are this other amazing thing that you get from integrating thoses three things.

There's been a couple major inflection points... When we got our first user really building something, when we got the first person to build their company on Dark, when we built a new editor and suddenly people were going from "I can't use this thing at all" to "Oh yeah, I understand how to build in this."

I think that the next major inflection point is when there's a package manager and people can instantly use third-party vendors, and Stripe, and Twilio, and all that sort of thing directly from it... But yeah, it's been a long road, for sure. It's a platform that -- this journey will never be done, I suppose.

**Jerod Santo:** Right. I've thinking about this concept recently, because motivation is so perishable... And that old Thomas Edison saw invention as 1% inspiration and 99% perspiration... I just thought about how hard it is to persist and to persevere on an idea over time. The moment of conception is amazing; that's why so many people have domain names that they never use... We tell our friends, and sometimes that is enough to satisfy the idea, and we never follow it... Sometimes we go a little further down the road and we hit troubles... And it's just like, watching somebody persist through on a vision - we were just talking with the founder of the Open Source Ecology foundation on the last episode... And he's got this eight-year vision and he's ten years into it. It's only an 18-year vision.

**Paul Biggar:** \[laughs\]

**Jerod Santo:** And I wonder with you -- it sounds like these inflection points maybe help, but how do you renew motivation, when days go by, weeks, months, years, and you're still toiling away towards this end... It sounds like maybe you celebrate some small wins along the way, or what?

**Paul Biggar:** Well, I think the main thing is that I take the motivation from users. We have about 7,000 people who have tried Dark, and it's a small community that have sort of stuck around on our Slack. There's 40-50 people whose names I know, there's a couple of people I talk to regularly, and there's new people coming in all the time, and they have problems and things that they can't get working, or ideas that they have... And those are the things that lead to motivation.

\[12:18\] And often, there's this sort of idea in software development that you should do the most important thing. You should always be doing the most important thing. What I've been finding over the last few months in particular has been that you should do the most motivating thing instead.

I have a bunch of post-it notes on my desk, and it says "Do work that's exciting", as opposed to necessarily doing work that's like the most important thing. When a user tells me "Oh, I really need this fix", and I'm like "That's a priority 12 bug that will never get done..." You know, sometimes I'll just fix it right there, because it brings the endorphins of doing a thing for another person, even if it's not the most important thing.

**Jerod Santo:** Yeah. I like that. In order to stay motivated, especially on a project like this, do the things that excite you, because those by definition are motivating. You already are motivated are, right? Work on what you're motivated about... It's almost like intelligent procrastination; picking the right things in order not to burn out. Because you've been through a burnout before.

**Paul Biggar:** Yeah. Are you familiar with that Structured Procrastination Manifesto?

**Jerod Santo:** No, I haven't heard of this. Tell me about it.

**Paul Biggar:** It's a thing written by some college professor... I'll look it up so you can put it in the show notes.

**Jerod Santo:** Thank you.

**Paul Biggar:** The idea is basically that whenever you have a really important thing, everything else looks a lot more exciting... So you use that most important thing to focus on things that you would not have done if they themselves were the most important thing. So you have a deadline coming up - that's an excellent time to grade student papers, or whatever else is... Yeah.

**Jerod Santo:** Gotcha.

**Paul Biggar:** It's a thing that I have used since I was in grad school to actually get things done. It's like, "Uh, I don't feel like that, but there's 12 other things that actually have value, and if I ignore the value and just look at the excitement, I can probably get through them."

**Break:** \[14:13\]

**Jerod Santo:** So language design is something that always has fascinated me... And here you are, designing a language. I like the way you said it's more about what it's not than what it is, and I feel like programmers over time, as we experience different languages, we know what we don't want, and we know what we don't want to handle and deal with, such as deployments, and \[unintelligible 00:15:27.14\] and all these things... But it has to have some paradigms for itself, so how would you describe Dark? Is it like an FP thing, is it object-oriented? How does the typing work? Give us the lay of the land, what design choices you made with Dark the language.

**Paul Biggar:** Yeah, I think the first thing I'll say is that Dark is incomplete, and so lots of what I'm about to describe are not necessarily fully there; often there's some of it, but not all of it... So I'll describe the aspirational version. But it's an ML. So the specific subset of functioning languages that include Elm, OCaml, F\#... Technically not Haskell, but actually it's similar enough.

**Jerod Santo:** Okay.

**Paul Biggar:** \[16:05\] And I guess Scala has some influences from that as well. If you're familiar with Elm, it's sort of Elm.

**Jerod Santo:** Okay.

**Paul Biggar:** And the reason that we chose that is 1) the liveness feature that I alluded to earlier, the idea that you can always see a value for the code that you're editing. It works really well in immutable programming languages, so languages where the values are not updatable in the way that they are in object-oriented languages. And this is a common feature in functional programming languages, and people have taken it other places as well. There's a lot of frameworks for JavaScript that are immutable, and React, and functional React programming - they're all sort of related to that world as well.

So that was one reason to do it, because it fits in well with this liveness feature that we wanted... But the other reason to do it is that immutability helps you think about programs, because things never happen over there. They always have to happen in a place that's very obvious that it's happening... So that is the major thing that I love about Dark. In every language that I've really used over the last decade - I used Clojure a lot at CircleCI; Dark is written in OCaml, it was written in Elm, it's now being rewritten in F\#... But all of those are immutable, functional languages, and it's really -- I find it just the easiest way to actually write programs.

**Jerod Santo:** Go ahead and unpack that live feature for everyone... Because I think I'm picturing it, but I'm sure that you can describe it with words better than I can picture it how it works in my head.

**Paul Biggar:** Yeah. So in your editor you've got this line that says \[unintelligible 00:17:43.09\] When your cursor is over the word "name" in the text, at the left of the text it shows you the string pool. Because that was the request that was made a couple of minutes ago. We call them traces. When a request was made, a trace was recorded, and every value throughout the program is either recalculated or stored... So whenever you put your cursor over something, we show you the actual value that was there recently.

So if you ever open a bit of code that you haven't looked at in quite some time, or that someone else wrote, or you aren't familiar with, and you have no idea how it works - it's adding a couple of things, it's concatenating them into substrings... It's like, "Why is it doing this?" Well, you put your cursor in it and you see a value. It's like, "Oh, I see exactly what they're doing." This only works on strings that has hyphens, and it's removing the first four characters of it, because that's what exists before the hyphen in all these traces. I can see this. That kind of thing.

So you can think of it as a debugger where you never have to actually turn on a debugger... or you can think of it as printf debugging, where you never have to add in the printf. Anytime, at any point that you want to see a historical value, or current value, or test value, whatever, you can see it anywhere in the program, with no instrumentation.

**Jerod Santo:** So does that allow a similar to (I think) what Redux made popular, kind of the rewind debugging, where you can step through different states? Or is it always just like the current -- you said "at any time". How do you manipulate that time?

**Paul Biggar:** Well, because it's immutable, there isn't really a time component. So in Redux and in the Redux debugger really what they're showing you is the old state and the new state.

**Jerod Santo:** They're modifying the state, yeah.

**Paul Biggar:** Those are actually independent values. It's actually a list of states, and it's just showing you where they've been historically... Because the new state never changed the old state. Those are different values. That's the immutability of Redux, and it's exactly the same thing in Dark. If you've got an old value and you update it -- I just did air quotes, which you can see on Zoom, but your listeners won't be able to hear it...

**Jerod Santo:** Yeah, you have to verbalize your air quotes around here, please...

**Paul Biggar:** \[20:04\] Yeah. So if you have an old value and a new value, and it doesn't update in between, you'll be able to see the value of the old value, you'll be able to see the value of the new value, and you'll be able to see some intermediate values as well. So yeah, very similar to the Redux thing.

**Jerod Santo:** Cool.

**Paul Biggar:** If you have used Redux's debuggers and you understand why they are awesome, then you will understand why Dark is awesome.

**Jerod Santo:** Okay, very well said. One thing I caught onto there is you mentioned that it's had a few rewrites along the way - Elm, OCaml, and now F\#.

**Paul Biggar:** Yeah, yeah.

**Jerod Santo:** Can you share some of the insights into why the language switches over time?

**Paul Biggar:** Yeah, so in the early days we wrote it in technologies that made sense at the time. So for the frontend it made sense to write in Elm, because I was familiar with Elm... And also because a lot of what we were doing in Dark was we were building our own thing. We weren't building a SaaS app, so reusing a lot of existing ecosystems wasn't as valuable as it was to have this sort of Elm-like language.

And after a couple years, Elm made a couple of changes. They removed some of the things we were using, and we started to realize that this is a little bit of a dead end, and I wrote about that at the time... So I wrote a compiler to switch from Elm to what was then called BuckleScript, which is now called ReScript...

**Jerod Santo:** Oh, wow. Talk about working on what's exciting... You must have been like "I'm gonna write a compiler today. Oh, yeah!"

**Paul Biggar:** I mean, Ian Connolly, who worked at Dark, made this joke that the answer to everything is not another compiler, but honestly, for me, that is a bunch of --

**Jerod Santo:** Well, in this case it was different... \[laughs\]

**Paul Biggar:** We've written so many compilers...

**Jerod Santo:** There you go. Stick to what you're good at.

**Paul Biggar:** One or two compilers a year, basically... And that's actually completely true.

**Jerod Santo:** That's actually completely true... \[laughs\]

**Paul Biggar:** Yeah, yeah... Anyway. What was I talking about?

**Jerod Santo:** Well, switching from Elm to ReScript, or BuckleScript, which - I've never heard of either of these things, so please do tell.

**Paul Biggar:** Have you heard of ReasonML?

**Jerod Santo:** Yes, I have heard of ReasonML.

**Paul Biggar:** Okay, so those are all the same thing.

**Jerod Santo:** Oh, okay.

**Paul Biggar:** And they have a branding problem over there... But they've attempted to solve the branding problem by calling it ReScript, but somehow ReasonML remains a new thing, that is not the same thing as it was... It's very confusing. It's all ReScript now.

**Jerod Santo:** Okay.

**Paul Biggar:** So that was the frontend. And then the back-end was originally written in OCaml. And OCaml is a really wonderful language, but with a lot of bad things in there that people just sort of ignore; there's an entire object-oriented thing in there that people just don't talk about.

**Jerod Santo:** Don't use that, yeah.

**Paul Biggar:** Yeah.

**Jerod Santo:** OCaml, the good parts.

**Paul Biggar:** Yeah, for sure. And we'd been using OCaml for a couple of years, and there were very good reasons for using OCaml at the start. One is that it's super-performant; very high performance. Another is that it's immutable, so instead of having to write all these immutable libraries and so on, we just use the built-in stuff directly in the Dark implementation... But the ecosystem isn't very large, and we often struggled with looking for encryption libraries, or using vendor SDKs; they just didn't exist in OCaml.

So a couple of months ago, weighing up "What should I be doing next? Where is the focus?" and recognizing that the state of Dark is not one where we have a lot of resources, so it made a bit of sense at the time to actually make deep technical investments like that, like doing a rewrite. I thought we were going to switch to Rust. I was sure. We'd been talking for years about the Rust rewrite.

**Jerod Santo:** The tractor beam is strong on that one.

**Paul Biggar:** Oh, yeah. So I did. I wrote a series of blog posts on it that were big on Hacker News for a couple of days... And I experimented with Rust, and I did not like it. This does not map to how my brain works...

**Jerod Santo:** Well, that's how to go to the frontpage of Hacker News...

**Paul Biggar:** Yeah, exactly. So we didn't pick Rust. And not because anything is wrong with Rust. Rust is very good for what it is good for, and it turns out that Dark is not in that sweet spot.

**Jerod Santo:** \[24:13\] You know what's an amazing truth that we often ignore? It's that not every language is for every person and every circumstance.

**Paul Biggar:** Right, exactly. You were asking me earlier what Dark is good for, and I said "Oh, we want people to use Dark for everything", but you're never gonna use Dark for embedded systems, you're never gonna use it for the high-performance, writing a decompressor, or something. "For everything" means in the niche of--

**Jerod Santo:** General purpose.

**Paul Biggar:** General purpose, cloud, backend sort of things.

**Jerod Santo:** Yeah. Fair enough.

**Paul Biggar:** And then I eventually settled on F\#. I'm about two months into the F\# rewrite, and most of it is done. All the difficult questions have been answered. There's just a lot of fleshing out to be done.

**Jerod Santo:** Did you also write about that choice?

**Paul Biggar:** I did write about it. The short version is F\# is OCaml backed by .NET. So a huge ecosystem, and the ability to reuse C\# things, and high-quality tooling by Microsoft, and so on.

**Jerod Santo:** Yeah, I mean, if the drawbacks for you with OCaml was the ecosystem, and F\# solves that problem, plus it's a lot like OCaml, then it sounds like a win.

**Paul Biggar:** I mean, it's not even a lot like OCaml. These languages are twins.

**Jerod Santo:** They are pretty much the same thing. Very cool. We'll definitely link up to those deep dives, as I'm sure people who are interested in language choice, as we all are at certain times in our career, like when we're deciding to switch to a language, would love to hear the deep-dive on your insights there.

But keeping the focus on Dark Lang, and not so much other langs, I think that one seminal moment for many languages is when they're written in themselves. And it seems like Dark isn't quite there yet. Is that one thing that you wanna do eventually, Dark written in Dark? Or do you think it actually doesn't make a fit for itself?

**Paul Biggar:** I've thought about that over time, what would it mean for Dark to be written in Dark, and there's sort of an obvious one of the bootstrapping. In another language it might be the compiler can finally compile the compiler, and you can stop using the compiler.

**Jerod Santo:** Right.

**Paul Biggar:** I thought about -- okay, so for Dark that would be there's one service, and it's hosting this other service, and that actually doesn't make that much sense for Dark. It just introduces risk, and Dark is fundamentally a hosted platform, and introducing that sort of infrastructure risk doesn't make sense.

What we're doing instead - we talked a lot about Dark in Dark, and we do it in quite a lot of places. The user flow is in Dark, and the emails that are sent out are in Dark... A lot of the collaboration stuff is written in Dark, some of the tracing is written in Dark... I'm about to rewrite some of our static assets in Dark...

So anything that's the core language itself and the core of the system is in Dark. And "If this breaks, we would not be able to recreate it" is not written in Dark. So I think I said this backwards; I think I said the core is written in Dark, and I meant the core written in not not-Dark.

**Jerod Santo:** My brain parsed it the correct way, so I'm with you.

**Paul Biggar:** Okay, okay.

**Jerod Santo:** I think that's wise, because any language or ecosystem that wants to be general-purpose and relied upon by many people - it has to live in the real world at a certain point, somewhat early on in its life, so that it's rooted in reality... Because we can tend towards what the maybe more critical \[unintelligible 00:27:30.05\] would call architecture astronauts. This idea of just like -- there's a lot of languages that have a purism and an idealism which is beautiful, but they're not gonna be general-purpose, because the real world is corner cases, and yucky, and things need to work, and I think having the team working on Dark using Dark for its purpose, which is these kinds of projects - maybe it's not written to write languages, but it's written to do these things, and you're actually using it for those things; I think that gives you an insight which you may otherwise lack.

**Paul Biggar:** \[28:06\] Yeah. And I remember at the start, before Dark was really available, a lot of the people who were interested in Dark were the people who were really into programming languages, so I fielded this question of "Can you compile Dark? Can you write Dark in itself? Why aren't you writing Dark in itself?" It was almost dogma.

**Jerod Santo:** Yeah.

**Paul Biggar:** But fundamentally, languages are built for a purpose, and the thing that our language is doing is not building programming languages.

**Jerod Santo:** Right. So complete side-bar, but I'm curious - how did you learn to write programming languages, and compilers, and these low-level things? Where did you acquire that skill?

**Paul Biggar:** Third and fourth-year compiler class in college.

**Jerod Santo:** Okay. Straight-up university...

**Paul Biggar:** Straight-up, yeah. I went to Trinity College Dublin, and I did an undergrad in computer science, and then I did a Ph.D. in compilers... I kind of joke about this, because I hate parsing; I think parsing is the worst thing. So the first thing that you do when anyone writes a language is writes a parser... So I rarely write new languages or anything like that because I hate parsing.

**Jerod Santo:** \[laughs\] So now you got me wondering - and I'm not gonna ask this; maybe we'll bring you on the Founders Talk and Adam can talk to you about your CircleCI days... But how does a guy who's into compilers and languages and studies these things ends up founding a CI company? But for a different day. Let's focus on Dark for now.

Another aspect of the language - I guess the integrated aspect of a language - is that it has built-in support for things that normally you go to a community for... Background workers, scheduled jobs, there's data storage, and stuff like that.

**Paul Biggar:** Yeah.

**Jerod Santo:** Are these language-level primitives, or are they part of some sort of dark standard library? Is there such a thing? How does it work?

**Paul Biggar:** They are fully integrated. I'm not really sure what they are exactly. Certainly, databases are language primitives. The important thing is that what you store in a database is actual dark data. So there is no ORM, there's no conversion layer between the runtime representation and conversion into SQL, or Postgres types, or something along those lines.

**Jerod Santo:** Now you have me interested, because one of the banes of my existence is marshaling and unmarshaling data in between a data store and my language I'm writing it in. I just want it to be there when I come back. I just wanna have this, I just wanna keep it, and I just wanna know it's gonna be there safe. And I actually couldn't be bothered with the details of the ins and outs of the database, and so that's something that's very attractive to me as a developer.

**Paul Biggar:** Yeah. It was a goal that it would be fully integrated into the language. Or at least into the dark system, or platform, or whatever we call that. So it had to be that these values could go straight into it... But also, the way that you query things in Dark is by writing Dark code. You don't write SQL. You write something like a query function where you pass into a Lambda, and then the Lambda is actually compiled into Dark. That was last year's compiler project.

**Jerod Santo:** So what if you do wanna bring your own things to Dark? It sounds like it's probably still too early on.

**Paul Biggar:** No, it's not.

**Jerod Santo:** No? You can't use Postgres with Dark.

**Paul Biggar:** You can't use Postgres with Dark. I mean, in the future someone might write a Postgres adapter/driver, whatever...

**Jerod Santo:** Yeah, so all you would need is some sort of low-level networking \[unintelligible 00:31:28.15\] thing, and then you could just write a network adapter.

**Paul Biggar:** Yeah. And having direct TCP or something - it's something that will come. But the goal of Dark is not to let you use whatever you're using today. The goal of dark is let's assume that that's all legacy tech, and we want to get rid of \[unintelligible 00:31:50.04\] unconstrained by legacy. Is there a day in the future where enterprises will use the Dark consultants to hook up their Redshift to Dark to be able to do queries in it - yeah, maybe. But it's never gonna be the core of what Dark is about, and bringing your own stuff to it. It's always gonna be about this idea of "We can build stuff faster if we have it fully integrated in our system."

**Break:** \[32:20\]

**Jerod Santo:** One thing I haven't mentioned yet is that I have you on today, Paul, because a listener requested that we do this show.

**Paul Biggar:** Oh, cool.

**Jerod Santo:** Yeah. So shout-out to John \[unintelligible 00:34:16.15\] He requested that we do a show on Dark Lang and your open source strategy.

**Paul Biggar:** Well, thank you so much, John.

**Jerod Santo:** Yeah, absolutely. We love listener requests, because then we know we're doing a show that at least one person absolutely wants to hear.

**Paul Biggar:** Yeah... \[laughs\]

**Jerod Santo:** Someone's gonna be happy. It's gonna be a non-zero happy listener count. And one thing that John said - he says you have an interesting take on SPA/PWA with functions as a backend, and then you also have a special take on open source, of course in the air quotes...

**Paul Biggar:** Yeah, air quotes much needed...

**Jerod Santo:** Yeah. Because it's source-available licensing, but not open source. So that kind of opens us up into Dark Lang's ecosystem; there's a business around it, it's not open source, but you can view the source code... Talk to us about that whole situation.

**Paul Biggar:** Yeah, so where to start with it...? I hate fake open source. I'm really into business models; I love thinking about business models, and the worst business models are the open source business models. We're a couple of days after AWS just forked...

**Jerod Santo:** Yes, Elasticsearch relicensed, and then AWS forked.

**Paul Biggar:** Right.

**Jerod Santo:** It's a big conversation piece.

**Paul Biggar:** There's all these companies that are really struggling with the fact that they built open source businesses. And for a lot of things, especially for databases, you kind of have to be open source. It doesn't make sense to be -- and Elasticsearch is a database, really... But you kind of have to be, because people want to run their own data, and that sort of thing.

And when you think about what is the purpose of Dark - the purpose of Dark is that you don't have to do anything. So the first thing that you do with an open source thing is that you install it. You find a system that you maybe put on your first computer... And that's not what Dark is. That's not what we're here for.

\[36:07\] We're kind of in this world where you want a business model that matches to how you want people to use the system. So for us, open source was not it. It is not a thing that made direct sense, because we have that AWS problem. If Dark manages to succeed, do we just want to just be run by AWS? No.

But also, we've been talking for 45 minutes now about this integrated ecosystem... And part of that integrated ecosystem is we're the package manager, we're the hosting. It doesn't make sense to have another instance of Dark over there. There's a bunch of things I'm planning to build where the -- I wouldn't call it social features, but something along the lines of you wanna make a bug report to the package manager/maintainer/whatever... That's a thing that you do in Dark, and you can take your request and upload that, or send, or something along those lines. It hasn't been designed yet. But they're all things that are part of this singular ecosystem, because it doesn't make sense for someone else to have another installation of Dark, or having their own installation of Dark.

And when we look at people asking us for open source, there's a couple of things that they want. Some people are into open source for status. They want to build their reputation in order to do consulting, or something along those lines, so that's a thing that we wanted to enable... People want to install it themselves to have it on-prem, and that's not a thing we wanted to enable. We recognize that there are people who cannot use cloud things, and that's okay. Not every service is for every person.

Then there's people who are worried about business continuity - what happens if Dark shuts down? That is a thing that we wanted to take care of. And then there's people who just want to be able to extend their programs, their uses of Dark, and they want to be able to make it better.

**Jerod Santo:** Right.

**Paul Biggar:** Of those four things, three of them we wanted to enable... So there's a couple of things that we did. One is - we've not done this yet, but intend to...

**Jerod Santo:** It's on the roadmap.

**Paul Biggar:** Yeah. It's sort of like an open source guarantee, where if Dark shuts down, we'll open source it. That's for the business continuity side of things. We have not actually done the legal side of that, so what you have today is "Well, it's source-available." If there's no business left, no one is gonna sue you for installing your own things... But we should do better than that.

With the source-available you've got the people who are trying to build up a reputation for being experts in Dark; they can contribute to the community there. The people who want to extend the ecosystem, and who are unable to do a certain thing in Dark, and so they want to make it so that they're able to do a thing in Dark... That is really what we were looking for. And you cannot run your company on your own instance of this.

So we've got a lawyer called Heather Meeker, who's like a famous open source lawyer, and she wrote the PolyForm licenses, and a bunch of other things... So we got her to write a license for us. And the license basically says "This is source-available, it is not open source. You can use this for the sole purpose of developing and contributing back to Dark." And then we have a CLA as well for contributions.

**Jerod Santo:** I like how clear you are about that, and straightforward... And you say you hate fake open source, and you're not trying to be open source. You're source-available, and you say it right there, upfront. I think that's admirable.

**Paul Biggar:** The "but" is coming...

**Jerod Santo:** Well, it's not a big but. Do you think that's gonna hamper it?

**Paul Biggar:** Oh yeah, absolutely.

**Jerod Santo:** Because there's so many people that just see that and they're like "I'm out."

**Paul Biggar:** \[39:50\] Yeah. I think that the problem with having nuanced opinions about anything, looking for some middle ground is that a lot of people just aren't interested in the middle ground. And I'm not saying that's bad. I think having an open source-first philosophy isn't a bad thing. But people who build stuff in the cloud are not using open source the whole way down. They're relying on AWS... None of which is open source. Even AWS's Elasticsearch, the fork of it - there's AWS proprietary stuff all over that.

The people who are looking to build the sort of thing that we want you to build on Dark I think for the most part are gonna be very familiar with this idea that actually they don't have a license to everything, top to bottom.

**Jerod Santo:** Fair enough. I think in light of that, languages have communities. If you think of a language that's owned by a single person, or a single entity... Even Microsoft has released the death grip on a lot of their proprietary software...

**Paul Biggar:** Yeah, that's right.

**Jerod Santo:** ...and languages.

**Paul Biggar:** F\# is open source.

**Jerod Santo:** Right. Apple famously open sourced Swift, and they said they were gonna do it the entire time, they just didn't do it right away. I think that's probably true, where they wanted to do it the entire time... At least the -- I can't remember the language designer's name off-hand, but I know the core team definitely wanted Swift to be open source. Apple knew they needed to open source it - this is my thoughts - because they wanted mass adoption, and education, and all these places on the server-side where it wasn't inside of Xcode. How do you overcome the community problem? Because you have some people hanging out, you've got people extending... But do you have a strategy, or you're just hoping that it works out? I'm just curious of your thoughts... Since you are just source-available, how do you get the real -- I don't wanna call them zealots, but the fans, the dark people?

**Paul Biggar:** Yeah. So the thing that we recognized upfront is that we want the Dark fans, and we don't necessarily want the open source fans. So if Dark to you is like a cool thing that I can hack on - it's not really that interesting, because you're gonna hack on the wrong things. We get a lot of feature requests from people on their first day, where they would not make the same feature request a month later, once they actually understand the stuff a lot better.

So the purpose of going the source-available thing was for people within the community to contribute back, and to be able to contribute back to solve their own problems. And it's sort of like a multi-faceted approach, because there's the Dark codebase, but there's also gonna be a package manager that people can contribute to. And that's also gonna be in a non-open source license. That has a lot of the same source-available features.

For a bunch of reasons, we don't actually want anyone who can't get past the zealotry side of things. I don't mean to -- like, "zealot" sounds so negative, and I think that there's so many positive things about open source... But there's so many negative things about open source. People are talking about the licensing thing, but there's also a bit of a toxic community that has existed in open source for a while, that people talk about a little bit at the edges... You can see on certain GitHub issues, where people are demanding things from maintainers, and etc. etc. So we're a little bit distancing ourselves from that, and being like "This is a service, and the people in the community abide by a code of conduct, and amongst other things, you've gotta be nice and inclusive." And if you're in the community, we're gonna have that conversation. You can participate in building Dark, and extending it in the ways that you want, but we kind of wanna be a little bit further away from the things that are happening in open source.

**Jerod Santo:** What's interesting is that your initial audience - I'm just thinking of the diagram between language nerds (and I say that in the kindest way; I consider myself somewhat one of them), and then open source nerds. And then like the cross-section of those two. And I feel like they 80% overlap.

**Paul Biggar:** \[44:09\] Well, our target is not language nerds.

**Jerod Santo:** I know, but you build your community out of your early adopters, right? And you said that the people that are coming on earlier, like "Hey, here's a cool, new language. I'm interested in this."

**Paul Biggar:** There were. But most of our community now is people who build web stuff.

**Jerod Santo:** Gotcha.

**Paul Biggar:** The language nerds don't use Dark. They're interested in Dark in sort of an abstract sense...

**Jerod Santo:** Right. They're watching you build it maybe.

**Paul Biggar:** Yeah. But the people who use Dark are people who build SaaS and web backends, and web frontends, and don't build backends, use Dark for that. I'm not gonna say that there hasn't been people who have dropped out of contributing because it isn't fully open source... I think that's fine. Everyone makes the trade-offs according to their values, and we want to have a sustainable ecosystem, and a sustainable thing is focusing on what Dark is, and focusing on the long-term, where the value of Dark gets reinvested into this ecosystem.

**Jerod Santo:** Yeah. Well, like I said, I applaud you for staking your claim. I'm with you. The only thing is that I like open source, I'm also okay with proprietary, and I just want the lines to be drawn and clear... And what I do not like is when you have people who are trying to ride the coattails of open source, and benefit from the great goodwill that the term and the community has... Because there is some toxicity, but there's just a lot of value there. There's tons of marketing value just to call yourself that, without actually being that so...

**Paul Biggar:** For sure.

**Jerod Santo:** I think we're on the same page there. Let's talk about what it feels like then. Let's put me in your core user demographic. I'm building my startup on Dark, and I have a SaaS startup that I wanna build. What should I expect in terms of business model? How much am I gonna pay you? How does it scale?

I have no problem paying for things that bring me value. Where I have a problem is usually when their model doesn't scale alongside the way that I use it, for example. GitHub used to famously have this mismatch with agencies where I was a freelancer... I would add new projects all the time, because that's the way that I would move on from--

**Paul Biggar:** Oh yeah, I remember that.

**Jerod Santo:** But they would charge based on project count, and it's like, I'm still just a one-person company. It's not scaling with my company. So I'm curious -- I know you're not there yet, you're in private beta, but you love things about business models. Surely, you have some sort of a gameplan, like "What does Dark, the business model, look like for its users down the road?"

**Paul Biggar:** Yeah, so the belief the I have about developer tools is that people used to not pay for developer tools. This was a truism up until about 2015 or so. And before that, those of us who monetized developer tools, such as CircleCI, did it by reselling infrastructure. And if you think of AWS as a developer tool, it's actually "We're selling you computers, and you're paying for the computers." And CircleCI is the same, you're paying for the computer. And that makes sense, to a certain extent, in Dark as well. You'll pay for the infrastructure that you use.

We have described Dark -- and Dark isn't there, but conceptually, Dark is an infrastructure compiler; it's a thing which takes the code that you write and figures out how to run it... And we will charge you a reasonable upsell on the actual cloud costs of the thing there.

However, a thing that I've been thinking about recently is that the vast, vast majority of our users today and for the next few years are people who are not using it very much, and they're not using it an amount that really costs that much money.

If you think about a typical SaaS, a typical SaaS is a workflow engine that has few users and not a lot of data. It's not Twitter, it's not Snapchat. So if you're charging people based on the costs, there's not a lot of money for the size of businesses that Dark is gonna be able to support the next few years.

\[48:14\] So I think long-term that is a good business model, and short-term I think we're gonna need something else. And the thing that I'm thinking is something like the per-user thing for companies; because if you're spending 10k a month on an engineer, you're not gonna balk at $25/month to make that engineer three times as productive. But we have to actually have that productivity. We have to have people actually using it, and we have to have -- there will always be a freemium component, because if there isn't an open source component to it... We need people to be able to get in.

**Jerod Santo:** Yeah. \[unintelligible 00:48:47.01\]

**Paul Biggar:** Exactly, yeah.

**Jerod Santo:** You can't just be like "Hey, by the way, we're gonna start/switch on this new language we've never used, on a new editor we've never used, on an infrastructure we've never tested. Where do I put my credit card in?"

**Paul Biggar:** Yeah. I think that most people who try Dark will end up at a free forever sort of thing. They won't be using enough traffic to hit costs. They will be writing in public, in the open, packages, and that sort of thing, and that will be free for the amount that they're using... And then at some point corporations are gonna pay something.

You said you don't mind paying for tools... Most companies have no problem at all paying for tools, and actually prefer to pay for tools, so that will definitely be where the pricing goes.

I remember Jim Lindenbaum, who's the Heroku founder, has this concept of like "Don't put anything that's developer-facing behind a paywall. So you can put the business-facing things behind the paywall, but not the developer-facing things. That's an approach that I really like, and that I intend to stick to.

**Jerod Santo:** I like that idea. So what does success look like for Dark? If you teleport yourself into the indefinite future, and like "I did it. Dark wins. Dark is successful" - what does that future look like?

**Paul Biggar:** That's kind of interesting, because we're sort of at an inflection point now... We haven't mentioned it yet on this show, but there was a layoff in July, and Dark is just me right now. So I'm having to think about what is the future of Dark, what is the future of this company... And obviously, the original thing that we sold to investors is like "This is gonna be a billion-dollar company. It's gonna be amazing. All cloud will be built in Dark." And when you combine that fact that it's been three years and we're not yet a product-market fit, with the world that we live in these days, a lot of what I'm thinking is like maybe the billion-dollar business is not the most interesting or valuable thing here... And raising the huge round to do the next thing, it's like "Yeah, um..."

So I don't know what the future looks like. I think I need to sort it out in my own head for where I want the future to be. But the main thing that I love is what you can do with Dark. And whether Dark is gonna be a thing where you build apps for tens of thousands of people, or for tens of millions of people - those are definite choices to be made, but we will definitely be progressing towards this hosted system where you can build small to medium apps, at the very least. I just have to think about whether I want to support more than that.

**Jerod Santo:** There you go. Well, I appreciate the honesty around the size of the team, and all that... I didn't realize it was just down to you... But hey, the pandemic hit a lot of us in different ways, and like you said, we are living in difficult times... So I'm happy to see it continue with you.

Do you have -- I know there's a public roadmap, but like you said, you've got some thinking to do... But do you have like a "I'm gonna work on it for this long", or the vision, or how long are you in the game with Dark?

**Paul Biggar:** \[51:59\] My thinking is I might be in it forever. I'm not 100% sure. Because startups tend to be like "I put in everything I have for four years or ten years or whatever", and then you burn out, and have a mid-life crisis...

**Jerod Santo:** Right. You've already played that game though...

**Paul Biggar:** I've played that game, yeah, and that game went well, and so now I'm in the post-game. And Dark is, to a certain extent, my post-game.

**Jerod Santo:** Yeah.

**Paul Biggar:** So Dark is a codebase I know very well... I love coding. There's something in me that's like "I can build Dark forever", and that would be wonderful.

**Jerod Santo:** Yeah.

**Paul Biggar:** And there's another part of me that's like "Build a big startup success etc."

**Jerod Santo:** \[laughs\]

**Paul Biggar:** And those two are a little bit in conflict. It's like the devil on each shoulder. And that's why I was saying earlier, I don't know which one I'm gonna go, which devil is gonna win.

**Jerod Santo:** Right. Well, let me just sit on one of your shoulders and just reiterate what you said to me - work on what's most exciting to you.

**Paul Biggar:** Yeah, yeah.

**Jerod Santo:** That's where you are; you're in a good spot, you can afford to do that... So if you focus on that, versus having to decide "Go big or go home", it's like "Well, wake up each day, work on what's exciting", and that would be at least exciting. At the very least enjoyable.

**Paul Biggar:** Yeah. The situation that we're in as a company - the company is separate from the product or the code. We haven't got to product-market fit yet. We have a million in the bank. We've spent about four million to get here. And we basically have to get to product-market fit on that million. And we're spending nothing at the moment. It'll last a very long time.

So then there's the question of "What is the best way to get to a place where there's optionality? When we get to product-market fit, does Dark start to take off? Are we excited by that take-off?" Then that kind of points in one direction.

On the other hand, it's possible that when we get to product-market fit Dark will still be a thing for small people to build things with a small team, and that will be another reality that we have to deal with. When we have that information, I think it'll be clearer. That sort of information about what options you have tends to lend a lot of influence to the option that you take.

**Jerod Santo:** Right. Well, for the tinkerers out there, the experimental folk, the ones who do not like to marshal and unmarshal data inside databases, you wanna try out Dark. It looks like it's in private beta at the moment...

**Paul Biggar:** It's in public beta at the moment.

**Jerod Santo:** It's in public beta now.

**Paul Biggar:** Yeah.

**Jerod Santo:** Okay. So you can just go sign up...

**Paul Biggar:** You can just go to the website, DarkLang.com, sign up, try it out.

**Jerod Santo:** Give it a shot. Hop in the -- it looks like you have a community that you can hop into, ask questions... Source-available, so you can do your habitual GitHub complaining/requesting of things, like you would with an open source project.

**Paul Biggar:** Yeah. There are GitHub issues, and pull requests accepted.

**Jerod Santo:** There you go. Paul, anything else I didn't ask you, or you've just been waiting to say this, or ask that before we call it a show?

**Paul Biggar:** Nothing comes to mind.

**Jerod Santo:** Okay. Thanks again to John for requesting this episode.

**Paul Biggar:** Yeah, thank you, John. This is wonderful.

**Jerod Santo:** This was lots of fun. I'm fascinated; I would love to see you succeed, and we'll definitely be keeping our eye on Dark, and we encourage all listeners to go out there and give it a look. It has a lot of interesting properties... And something at the very least you wanna try out and see if you like having a fully-integrated solution to coding up things. Paul, thanks for coming on the show.

**Paul Biggar:** Thanks so much, Jerod.

**Jerod Santo:** We'll talk to everybody next time.
