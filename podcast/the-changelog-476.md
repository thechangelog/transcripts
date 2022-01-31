**Jerod Santo:** So we're joined by Paul Copplestone from Supabase. Welcome to the show, Paul.

**Paul Copplestone:** Hi, guys. Nice to be here.

**Jerod Santo:** Happy to have you. I should say - this episode was requested by John \[unintelligible 00:02:30.25\] a long-time listener, who also got a request serviced last year; the Darklang episode was John's request, and he's back requesting Supabase. He says "Hey! Open source Firebase... Need I go on? They're building an all-in-one solution. You can self-host or buy as a service. They aim at providing the same features as Firebase, but with their own twist. They've already established auth, database and storage, with functions on the way. Is that a pretty good pitch, Paul?

**Paul Copplestone:** Well, you probably should have just got him on the show. I mean, he's already done my job for me.

**Jerod Santo:** \[laughs\] We probably could have...

**Paul Copplestone:** That's pretty good.

**Adam Stacoviak:** Alright, and we're done. Thank you for coming, Paul.

**Paul Copplestone:** Yeah. \[laughs\]

**Jerod Santo:** There you go. Well, I guess it's well-positioned, open source Firebase. I know you're going beyond that now, because I've read some of your more recent stuff. That was kind of like at least the starter, it's like a Firebase... But it seems like, from what I'm seeing, it's less of a recreation, like an API-compatible thing, and more of like an "inspired by Firebase"? Or am I not reading it right...

**Paul Copplestone:** No, that's exactly right. The main thing that we offer is the database. It's a full-on Postgres database. It's not abstractions. And really, what we're building around it is the tooling to make Postgres as easy to use as possible. So automatic APIs, and auth... All the things that he said, actually. So really, it's this "inspired by", as you've said. We're not going for one-to-one compatibility. If we were, then the only differentiator would be open source, and already Firebase is a very good product, and it's just having open source as a differentiator. It might be enough, but we feel like we can go above and beyond; we can also make it incredibly scalable, we can make it work with existing open source tools, we can support open source tools... So yeah, we sort of take a few liberties beyond just being a one-to-one alternative.

**Jerod Santo:** \[00:04:22.08\] So I've never used Firebase beyond the demos... I know some people who sing its praises. I know there's been some decent businesses built on top of Firebase. It's not a new thing. Firebase has been around for many years... I don't know what the general zeitgeist feeling is - like, is it stagnant, is it continuing to add? I feel like I don't hear about it as much as I used to, which may be a hypecycle thing, or maybe it's like -- it's inside Google now, so it's maybe just being maintained, but not worker on... I'm sure you know this far better than I do, so maybe catch us up with Firebase, your feelings on it, and why Supabase became a thing; was it a reaction to Firebase? Did you see an opportunity? Unpack that.

**Paul Copplestone:** It's definitely still a thing, still growing. I think the team inside Google -- I've heard from one person it's 200 or so, so it's fairly decent size.

**Jerod Santo:** Yeah.

**Paul Copplestone:** I don't know that for sure, actually; I have to fact-check my facts. But yeah, it's still very popular, and I think a lot of big businesses are built from the conversations that we have.. So yeah, I think it's just one of the best tools that you can use if you're starting new.

Now, when you start scaling, then maybe there's a different conversation to be had... But I think it's still very well\[unintelligible 00:05:33.23\] especially in the mobile space. They've got al ot of products as well, so...

We have four core products: database, auth, the APIs and the file storage. They've got something like 18 different products - analytics, ML... All sorts of things. So it's probably a bit beyond what we would consider offering. ML, and things - it's probably a bit outside of our ecosystem.

Originally, we weren't really thinking of building an open source Firebase alternative. It's just that we changed the tagline on the website one day, and it went straight to the top of Hacker News that day... And we kind of had to run with it.

**Jerod Santo:** Yeah. Well, it's well-positioned, like I said, so you may have stumbled upon that, huh?

**Paul Copplestone:** Yeah.

**Adam Stacoviak:** You had to run with it. I like that. It's like an accidental blessing, really... Especially if you're at the top of Hacker News. I think Firebase has a lot of praise over the years in terms of its platform and what it can do... Obviously, their tagline on their website says that it's loved by app development teams, from startups to global enterprises. So that's a good spectrum, and you wanna capitalize on that as well.

**Paul Copplestone:** On the people we want, yeah. I think for us getting on Hacker News was this perfect storm of timing, as well. I mean, we're open source, it's Postgres, and Firebase is the tool that developers love to hate, because it's Google now, so...

**Jerod Santo:** Right.

**Paul Copplestone:** You know, it just happened to be very good timing and positioning... And yeah, it's worked out for us for the past couple of years. We constantly have debates whether to change the tagline, but for now it's working.

**Jerod Santo:** At a certain point you're like "Just please stop comparing us to Firebase..."

**Paul Copplestone:** Yeah... \[laughs\]

**Jerod Santo:** Like, you were happy about it at first, and then you're just like, "Alright, we've had enough of it."

**Paul Copplestone:** Especially enterprises, they say "Well, we wouldn't choose Firebase, so..." It's not great positioning for the enterprise customers. Whereas Postgres, of course, is beautiful positioning for enterprise customers, but... Yeah, we'll have to shake that tagline.

**Adam Stacoviak:** For timing's sake, or in terms of understanding historicals, when did things began? So take us back to that tagline day. When did things really begin for Supabase?

**Paul Copplestone:** \[00:07:50.18\] Yeah, so right back at the beginning I met my co-founder actually in an accelerator in Singapore... And then we didn't do a business together, we just hung out and we lived together for a year, and we did our separate startups for a couple of years... And then I kind of incubated some of the tools that we built for Supabase in that startup, and then I said to him, "Look, I'm gonna do this Postgres tooling startup." I think I pitched him -- the name was like Deckstack, or something like that, as a placeholder... Something ridiculous, terrible. So he was keen... I think I actually pitched him "We're gonna assemble this squad of people who are gonna be very YC-friendly, and we're gonna apply for YC." He had applied for YC like 5 or 6 times and been rejected, so I think that's really what he was going for, hopefully, just to get into YC...

Then we did, of course -- January 2020 we chatted to a few people about Postgres. Everyone loved Postgres. We had asked them what they wanted to use, we asked them what they were really using, and they said Firebase, and so that's where we got this idea "Well, the tooling is very important." Why did they use it? It was just very easy, so we sort of changed the tagline and made the tooling -- sent it against Firebase. We got into YC, and that was summer '20. And since then, we've just been building non-stop, trying to catch up with all the features of Firebase.

**Adam Stacoviak:** I guess that becomes your North Star too, if you get compared to them, and you do it by your own tagline a mission, it gets traction, you get attention... Obviously, you're gonna wanna do whatever Firebase does to -- does that limit you though in your creativity? Can you remake the model?

**Paul Copplestone:** I guess a little bit... It's not so limiting, because -- I mean, really, Firebase is many different businesses. We could do a few things that they haven't done, and we have done some things I think better... For example, our auth solution I think is just really good, because it's got Postgres row level security. So if you pitch it even to a database expert, who probably loves rolling with security, but no developers use it, then they fall in love with it as well, because suddenly they get to use -- we make it very easy to build these database rules using Postgres' built-in auth system.

So in these ways I think we've kind of taken some of their ideas and made them our own, and hopefully made them a bit better... And I think we'll carry on trying to do that. We try to choose a very, very elegant way to do everything, centered around Postgres, the database.

**Jerod Santo:** It seems like a more one-to-one analog with Firebase would be like a MongoDB in terms of a data store, right? I mean, Postgres - relational database. Firebase is a NoSQL thing, isn't it? It's kind of a document store...

**Paul Copplestone:** Yeah...

**Jerod Santo:** I don't know how their architecture is, but that's how they sell it. Are you mapping on top of that, or are you just kind of ignoring that part of it? I know it's like, "Hey, it's Postgres with services around it", which I think is cool, but it does seem to be like a departure from Firebase.

**Paul Copplestone:** Yeah... \[laughs\] It is. You have to squint your eyes a little bit.

**Jerod Santo:** \[laughs\] That's why it's only on the main page of the website; once you get inside, you're like "It's cool... I'm not really sure why they said Firebase, but..."

**Paul Copplestone:** \[laughs\] Yeah. We don't do any abstractions, and actually that's the thing that I think most people love... Because even if you don't know that it's Postgres, you get in -- we've kind of got this Airtable-like viewer, where you can build your tables, and then you discover "Oh, this thing's actually a full Postgres database. So I can write functions, I can do triggers, I can do whatever I want." So to be honest, it isn't so one-to-one. But we knew at the start that we never wanted to abstract -- actually, this one came from a VC. I have to thank them. They rejected us; the pitch to them web terribly, but... It was to Sequoia. One of the guys at Sequoia had been at Facebook when they acquired Parse. And Parse is still going, and it's a great tool, as well. I don't know why people don't use it more.

**Jerod Santo:** Mm-hm.

**Paul Copplestone:** But he said that they had this enterprise graduation problem, because everyone would get to sort of enterprise level, but then there was too much magic. They didn't understand everything happening under the hood. There were too much abstractions going on. So it became for us -- we just took his term, "no magic." We'll make it feel magical, but you can really understand everything. It's just Postgres. Yeah, we failed at their pitch, but I think we won a very important lesson from it.

**Jerod Santo:** \[00:12:09.00\] Well, you're definitely speaking my language. I am a long-time Postgres die-hard.

**Paul Copplestone:** Nice.

**Jerod Santo:** In fact, Adam and I often joke about how hard it is for me to accept anything else as a data store... \[laughs\] It's just like -- it's just tried and true. I think there's lots of places where you can be risky or more progressive in your choices, and I feel like your data store is just not the place to go ahead and experiment wildly. So why go away from something that is tried and true?

It sounds like your story then with Supabase -- we'll get into the open source, the business side, we're gonna get into all the details, but it sounds like when it comes to trying it on for size, at least for existing Postgres users, there's like a portability story that I'm hoping is there, where it's like, "Hey, it's just Postgres..." Even this auth stuff is implemented as Postgres features, so you can walk away with that very simply. Is that the case?

**Paul Copplestone:** That's definitely the case. Pg\_dump, and you're away laughing. Hook up whatever you want... The other thing - all your users live in your database. You can do joins on them, row level security rules with them... Yeah, it's really just whatever you would probably build yourself, ideally, but we've thought it through, we've plugged all the pieces in for you... So whatever you might do yourself, hopefully we've just done it a little bit better... Or a lot better.

**Jerod Santo:** \[laughs\] Depending on \[unintelligible 00:13:21.02\]

**Paul Copplestone:** Yeah.

**Jerod Santo:** Where did this inspiration come from? Are you a long-time Postgres user yourself, or you were just trying to find out what would be the perfect YCombinator/Hacker News lovechild? It's like, "We know they love Postgres, we know they love open source..."

**Paul Copplestone:** Yeah, yeah... I don't know what else we could probably throw in there to make them love us more. At the moment, it seems to be--

**Jerod Santo:** Lisp maybe? I don't know...

**Paul Copplestone:** Yeah, Lisp...

**Jerod Santo:** Rust...

**Paul Copplestone:** Yeah, that's what we need. Rust libraries coming up soon.

**Jerod Santo:** There you go.

**Paul Copplestone:** No, I used actually MySQL and Postgres. MySQL I used in my first startup, Postgres in my second startup. I particularly like the extensibility of Postgres, and I fell in love with another very cool tool around Postgres, which is Postgres. It's this auto-generating API on top of your schema... So you don't have to build an API. And it also is kind of this thing that builds the API better than you would build it yourself.

So I used this -- actually, most of the tools inside Supabase were what I used in my previous business, and then the idea was -- well, it was just so easy... We built this whole business with just me and two other techies, just because the tooling enabled us to do a lot more... And then I just decided, "Well, perhaps there's a business around it", and I chatted to Ant, my co-founder, and he agreed... So we went with it.

There was kind of an impetus as well. So we were using Firebase for one part of the system; it's like a chat application. And it has this weird limitation where you can only update a document once per second, and then it rate-limits you... So I had to implement real-time functionality inside our Postgres database, and I did it using an Elixir tool, and I open-sourced it, and that started getting a lot of traction. So that's the thing that kind of gave me the reason to reach out to Ant, and the reason for us to start Supabase.

**Jerod Santo:** So let's continue talking about these other aspects... We touched on auth; I think we'll probably revisit auth in a deeper way, but you're also offering obviously the Postgres database as is, file storage which I think is pretty self-explanatory. You can tell me if there's interesting bits there... But then the API side sounds interesting to me. So do you wanna touch on file storage if there's anything to say besides it's like a file store?

**Paul Copplestone:** Yeah, there's one interesting thing... So we map your -- let's say you've got a bunch of S3 buckets, or folders inside an S3 bucket. We map all of them into a storage schema, and then you write row-level security rules on those as well.

So once again, when people are accessing those, you can put rules, like "Oh, this user can access this file", and you just write those rules inside the database.

**Jerod Santo:** \[00:16:09.21\] Okay, that is kind of cool.

**Adam Stacoviak:** That is interesting.

**Paul Copplestone:** Yeah. Then we've got the suite dashboard for -- you just sort of upload everything, drag and drop whole folders inside it... And the dashboard is actually -- the storage part is one of the coolest. \[unintelligible 00:16:22.14\] You know, normally, S3, if you go in there and you try to use it, it's terrible. And no storage service out there is good, for some reason, and I just think our interface for it is just ten times better. It's as good as like a desktop app.

**Jerod Santo:** Wow. What's it built with?

**Paul Copplestone:** The frontend is Next.js. It's been very good for us.

**Adam Stacoviak:** Yeah.

**Jerod Santo:** So - obviously, a good UI is a good thing to have, but on the auto-generated APIs bit, it seems like better than just a fancy UI. That sounds like a really cool thing.

**Paul Copplestone:** Yeah. The tech behind that is very cool, and it's a very cool open source project. It was around long before we started the business. We employed one of the late maintainers, or THE maintainer of Postgres. It was originally started by someone else \[unintelligible 00:17:09.29\] I only know his GitHub handle, I don't know his full name... Who is no longer active. But Steve Chavez works on it now, and he's a full-time employee at Supabase.

So it's a Haskell tool, and it kind of does this introspection on your database, and as you make changes to your schema, the tables are exposed, and then you can write a bunch of filters, modifiers, quality full-text search, anything that basically Postgres can do, you can do it over a RESTful API... Which is cool, because we're starting to leverage this a lot for a few cool things that I can chat about if you want.

**Jerod Santo:** Yeah, that's spectacular. I've definitely heard of that tool. There's another one which seems like it'd be right up your alley, which is PostGraphile, which is gonna now create instead of a REST API, a GraphQL API. It's a similar concept, right? Go through your schema, introspect it, create a GraphQL API. Is that something that you guys are thinking about leveraging as well?

**Paul Copplestone:** Yeah, which I think is very cool... And \[unintelligible 00:18:10.21\] has done a great job on that one. Actually, we were asked a lot for GraphQL at the start, and we just didn't have sort of enough resources to run so many APIs. But what we've ended up doing instead is that -- and we've just announced this... We've started building a Postgres GraphQL extension. So the GraphQL resolvers live inside your database. This is quite good, because it solves the N+1 problem.

Then we exposed the extension through Postgres -- well, that's the plan. We will. So we use the same RESTful API that you use for accessing your table. You can actually use it to access Postgres functions as well as RPC calls. So we'll just expose one RPC function, and then you can actually use GraphQL as well. You can choose REST of GraphQL.

**Jerod Santo:** That is super-cool. So one thing that we've been batting around here is a little Changelog API, and we are on Postgres... Now, we have a full-stack Elixir app in front of it; we could also just build that out in Elixir, whether a REST or GraphQL API, but I've always liked this idea of hooking it directly into the database and then have it be importable that way.

It sounds like even if I was in the Supabase, I could be into this cool, new extension, because you've just plugged that right into Postgres yourself.

**Paul Copplestone:** For sure, yeah. We're only at 0.1.0, so it's virtually very early... But performance is great, it's looking very good. So yeah, if you want it, install it on your Postgres. We'd love that.

**Jerod Santo:** Super-cool. So this is gonna open up another can of worms... We might need to defer the bigger conversation for a little later, but it's like - how do you decide just to build an open source Postgres extension when you've got these VCs behind you looking for, you know...

**Paul Copplestone:** \[laughs\]

**Jerod Santo:** Like, "Wait a second... You're just giving away this extension that could open up a whole new area of business for us?" It seems like there's a push and a pull there.

**Paul Copplestone:** \[00:20:05.10\] Yeah, well they are very patient, our investors. They've luckily got very deep pockets. But also, our core business is hosting Postgres databases, so anything that could make that more attractive to our customers would be good.

**Jerod Santo:** Yeah, the better Postgres gets, the better you guys potentially get.

**Paul Copplestone:** Exactly. And we know that probably a lot of people will use this. It was very popular on Hacker News when we launched it. We know that probably a lot of cloud providers might wanna use it... Which is fine by us. I mean, Postgres itself I think is the epitome of good open source. And if all open source operated like this, where we're kind of sharing resources, then the world would be a better place. Hopefully, by other people using it, they will help us improve it as well, and it's good for everyone.

**Break:** \[00:21:00.17\]

**Jerod Santo:** So Supabase is open-sourced... Can you explain to us what all that means? Because open source is all shapes and sizes, and software - many facets. Surely there's some aspects that aren't maybe... Or maybe not; maybe it's all open source, and then the business side - let's dig into that, the all VC-backed open source company thing is fascinating.

**Paul Copplestone:** Yeah. As you point out, everyone's choosing a different flavor of open source these days. Basically, for us everything is open source except for our platform code. So you can sign up to Supabase at app.supabase.io, and you can launch a database or multiple databases, whatever you want. All that orchestration code is closed source, it's proprietary. Anything else - if you wanna self-host, you wanna put the dashboard in front of your database, you wanna put on the components in front of your database, that's all open source.

And quite particular, we ensure that we choose very OSI-compliant licenses: MIT, Apache 2 Postgres... Anything along these lines.

**Adam Stacoviak:** \[00:23:53.13\] One of the things I thought was interesting too as I was doing some research was just the flexibility this model gives to those who use it. You can do a local machine, you can do the cloud service, which is what you were talking about, the platform code, or even as a Docker container. So you really have, from a user perspective, the highest advantage, which is really open source; the mantra behind open source is adoption. I can put something out there, and one person can use it and get value, or everybody can use it and get value. I think that's kind of interesting, that you're so flexible that you can do local, cloud service, as you do, or a container, and just giving the user base that kind of flexibility to be so restriction-free.

**Paul Copplestone:** For sure. I mean, we get a lot of people who want us to integrate, they wanna integrate with us, or... We don't really have a marketplace for integration platform. The thing that really holds us back is that usually if they're proprietary tools, then you can't run it on your local machine. You can't stick it into the Docker, or you could sign up for our proprietary API. And even this is quite difficult with Stripe; we like to do a lot of stuff with Stripe to make it easier... But you know, it's all web-based, and you can't emulate all of Stripe inside your database. But with Supabase, everything -- you could literally run it on an airplane with the Wi-Fi off, and you could start building your app in the airplane. So yeah, that's a huge developer productivity gain.

**Adam Stacoviak:** How did you get to that thinking? Did you stumble into it? Did you Hacker News it one day and put up a tagline and get there? Was it following the Firebase way, by any means? How did you stumble into this model, this thinking?

**Paul Copplestone:** No, I think that's just how I've always developed. In our first startup I just would never have chosen tools which you can't run in isolation for the team. And then in my second startup I sort of iterated on that and found better tools. So I think it's just how I've developed for a while.

**Jerod Santo:** Here's a hypothetical. Let's say you wake up one morning and you check Hacker News, and the number one story on Hacker News is "AWS now runs Supabase."

**Adam Stacoviak:** I like this hypothetical

**Jerod Santo:** What do you do next? What's your next move?

**Paul Copplestone:** That's a good question. Well, first of all, they're already trying...

**Jerod Santo:** Oh, really?

**Paul Copplestone:** Not Supabase... They've got a product called Amplify, which is their response to Firebase. And it's not great; it's okay. Well, it's as good as AWS at developer experience. If they did run all of the tools -- the thing is we're a suite of tools as well, right? So --

**Jerod Santo:** But they're all open source, right?

**Paul Copplestone:** Yeah, they're all open source. So they'd have to --

**Jerod Santo:** So they could package that all up, and you know...

**Paul Copplestone:** They could.

**Jerod Santo:** ...AWSbase.

**Paul Copplestone:** That's true, that's true. Supabase as a service. I'd find it quite flattering...

**Jerod Santo:** Maybe a SaaS company.

**Paul Copplestone:** Yeah, yeah... I'd find it quite flattering.

**Jerod Santo:** \[laughs\]

**Paul Copplestone:** I think ultimately we're going to go with a much better story. Multi-cloud, open source, local emulator... I think there's no chance of us relicensing... I mean, Postgres itself - we don't own it, right? We can't license it.

**Jerod Santo:** Right.

**Paul Copplestone:** Postgres is part of a committee now. Yeah, we maintain it, but it's not ours. We don't think of it as ours. We would be happy to do that with a lot of the tools that we are developing as well.

**Jerod Santo:** Alright...

**Adam Stacoviak:** So what if they did though? What if AWSbase was out there? I like that, Jerod; that's a good name, AWSbase.

**Paul Copplestone:** AWSbase... \[laughs\]

**Adam Stacoviak:** So I guess the question really is like -- not so much... One, flattering - sure, of course. But you know, how maybe from a business standpoint did you design things to compete with the behemoth, the Goliath?

**Paul Copplestone:** Well, I don't know. To be honest --

**Adam Stacoviak:** Does it even matter?

**Paul Copplestone:** The probability just seems so slim... And even if they did, they've gotta keep up with all the stuff that we're developing as well... It doesn't really work for our model; it works for like single servers, or something like that.

**Jerod Santo:** Because you're a suite of tools, it's harder to put together in a way that's cohesive, perhaps.

**Paul Copplestone:** Yeah.

**Jerod Santo:** It might require more work than AWS tends to put into these things; no offense to them, but it seems that way. And I get that. I think the more successful you become, I think the probability of something like that happening goes to one. But you can fly under the radar for many years, and...

**Paul Copplestone:** Yeah.

**Jerod Santo:** \[00:28:08.08\] ...I think if your answer is "We're gonna outcompete them", which it sounds like what you're just saying, is like "Well, we're just gonna be better. We're not gonna do the relicensing thing." You definitely have chosen this path, and I appreciate that you respect Postgres has its own IP, its own copyright, its own licensing, and you're building around that... So yeah, what else are you gonna do? You're just gonna outcompete at that point, I guess...

**Paul Copplestone:** For sure, for sure. We'll do better product lines, better developer experience, better taste... I mean, AWS just doesn't have it in their DNA. Go on our website and you'll just know straight away. It's just not an AWS product.

**Jerod Santo:** What about the other side? So that's attack from the behemoth. But what about attacks from the scrappy, scammy, low-moral people, who are just like "You know what - I can take the time to put the thing together... They're putting all the work into it, and so I can create a thing that is their thing, only less work. I can focus on other aspects..." You know, they can kind of hit you from the bottom.

**Paul Copplestone:** That's true. I think a good one in that regard was Sentry. I think a lot of people were relabeling Sentry. And it's actually quite an analogous one, because they are sort of a suite of things that do a particular... Yup, I can see that probably happening more than AWS. I don't think it's a problem... I mean, we're just growing so fast. Good luck -- even other startups are not growing as fast as we are. So good luck to anyone else who's trying to take us. I think it just forces us to be faster and better than them. If they take off some of our customers, then by all means. That's not the type of people we probably want.

**Adam Stacoviak:** I think too there's probably some sentiment in the community... And this may not be for the way everybody thinks... It's that you've gotta respect somebody's work. And while somebody may "rip it off", it's open source; you're able to do that legally, so is that really ripping it off? Maybe moral, as Jerod said, it is. But legally, it's not. So this is totally a possibility.

I think though there's a lot of -- I would imagine the people you've hired are deep in the community, they've got their own respect... So it's not just the Supabase brand, or just your brand, Paul. It's the people you've hired, the people that are involved in these committees, the people who are involved in maintaining these libraries that are open source, and that commitment that people respect. And they'll read between the lines and see "Okay, this is AWSbase, and this is... Whatever." And the EC2 people, and the people that are inside AWS may be like "You know what - I'll use AWSbase because that's my ecosystem." But not because it's not Supabase. Or the flipside, the moral ground. They might be like, "You know what - that's a copy. We don't like copies. We're still with Supabase."

**Paul Copplestone:** The really fundamental truth is we're not open source as a marketing thing anyway; it's just Ant and I philosophically -- I mean, someone would have been having this conversation with Postgres, probably 20-30 years ago, when they were starting, thinking "Well, are you gonna give it away for free?" It makes no sense. But now it's an amazing product. And probably they had no way to capture value back then. We do. I mean, we can offer something that you can host for free, and we can capture value. So philosophically, we wouldn't care if someone sneaks away a couple hundred thousand dollars. The enterprise customers will never go to them. They'll go to the established, well-funded startup, as long as we can manage to make it there.

**Adam Stacoviak:** On that note then, what do you think is the -- if you can say how you're capturing the value most, is it just being who you are and being reliable? What is it that captures the value for Supabase today?

**Paul Copplestone:** \[00:31:46.01\] Well, at the moment, most of our customers are the JAMstack crowd. So we worked very well with Netlify and Vercel. Anything that you're deploying as a frontend and you need a backend, sort of a serverless backend. As we push more into enterprise... Maybe JAMstack will grow into enterprise; it seems to be, given the recent fundraising rounds that we're seeing for Netlify and Vercel. Then they might be more interested. But for now, the pitch is developer productivity around Postgres, our auth is becoming very popular with the enterprise crowd. So different parts of the stack. Support of course is the thing that enterprise customers always want. Uptime, SLAs... All the boring stuff. So the exciting stuff gets the JAMstack crowd in, the boring stuff gets the enterprise customers.

**Jerod Santo:** So while we're on the financial side - I notice on the website you are backed by Mozilla. I've never seen that before... Can you talk about that?

**Paul Copplestone:** Yeah, that was -- I don't even know how it happened, because... There was actually a Mozilla grants program that was happening a bit... But when we were doing our seed round, somehow they reached to us, and it was literally Mozilla, the company. I think we might have been only one or two companies or startups that they invested in.

And since then, I have to say - because it was actually around the time that they had a bit of an org reshape...

**Jerod Santo:** Yeah, downsizing...

**Paul Copplestone:** The person who invested I don't think is there. So I sent emails, and I've never heard back from them. \[laughter\] So whoever it is at Mozilla - hopefully we're looking after your investment well.

**Adam Stacoviak:** That's interesting. "I don't even know how it happened. It just happened."

**Paul Copplestone:** Yeah, it just happened...

**Adam Stacoviak:** It's such an interesting response to that. I didn't expect that.

**Jerod Santo:** Talk about catching a flier... Like, "Oh, Mozilla is gonna back us", and then... Gone.

**Adam Stacoviak:** Well, in terms of popularity, I would say that I've heard Supabase way more, I would say, towards the mid-to-end of last year, and obviously into this year. I do follow you on Twitter, Paul, and I did appreciate the hockey stick you published, which I think was quite interesting... Because you published both the X and the Y axis. Sometimes these hockey sticks are just the -- I believe it's the Y axis, and no X, right?

**Jerod Santo:** They call that a Bezos chart, don't they?

**Adam Stacoviak:** Yeah...

**Jerod Santo:** Amazon's famous for not putting one of the labels on their charts.

**Adam Stacoviak:** yeah.

**Paul Copplestone:** Well, if you start seeing me do that, then it's probably for a graph that I'm not so proud of.

**Jerod Santo:** I was gonna say, it's a bad sign if they start taking away the --

**Paul Copplestone:** No, I see it all the time, and actually I have been guilty of it... But this one I just thought was quite flattering, so... \[laughs\]

**Jerod Santo:** Yeah. If the numbers don't represent you well, throw them out.

**Adam Stacoviak:** Right. And the tweet essentially says how it started in January 2021, which I believe the right side of the graph is like at 5,000. And then -- you know, this is the common thing... Versus how it's going now, which is January 2022, and the right side of the graph is pointing at 80,000. And I believe this is databases, right? This is total databases on Supabase in that time spectrum.

**Paul Copplestone:** Yeah. On our hosted platform. Hopefully there's a lot more self-hosted.

**Adam Stacoviak:** Right. So this is beyond what you can't quantify. So this is hosted platform only. So these are customers, basically, whether they're on the free tier or not.

**Jerod Santo:** Right. I was gonna say, tell us about the free tier, because truly, you're getting on there for free, at least.

**Paul Copplestone:** Yeah.

**Jerod Santo:** But that shows interest.

**Adam Stacoviak:** Right.

**Paul Copplestone:** Yeah, exactly. And developer tools is -- I mean, we had to do without a free tier; they're famously not willingly paying customers... So yeah, we offer actually two free projects. They'll pause if there's inactivity, similar to like a Heroku-type situation. That's because they're databases. Unfortunately, it's not like a static website. We have to pay for compute. And that's why we couldn't have done it without VC backing, to be honest. We needed the cash to build our platform.

**Jerod Santo:** Right.

**Adam Stacoviak:** So every free customer costs you money.

**Paul Copplestone:** Yup. Correct.

**Adam Stacoviak:** So you're obviously motivated to convert those free to paid. Or see them as adoption as growth, and maybe they're a side project... I mean, you've been a developer for a very long time, I'm sure you can appreciate a free tier on a service, as a side project. I might have my side project on a free tier, but my dayjob - I love Supabase, and I brought you an enterprise customer through my dayjob, for example. So you never know even how those cross over...

Can you share what the spectrum of that 80k might be, just rough? ...or exact, if you wanna be, of paying customers.

**Paul Copplestone:** These are the ones where I share without the Y axis... \[laughter\] No, no --

**Jerod Santo:** \[00:36:18.07\] Give us a percentage. We can't derive the math; just give us a percentage.

**Paul Copplestone:** No, it's a valid point. A lot of people --

**Adam Stacoviak:** How's business going, basically?

**Paul Copplestone:** \[laughs\] Yeah. Well, first of all, one thing to note is that we're still in beta, actually, even after two years. Because there's databases, we wanna make sure that we've got complete stability. We just know that there's always gonna be an 80/20 type situation. So there's gonna be 20% of our customers who fund the bottom 80%. And actually with databases, it's actually a long time before you start monetizing.

I think it took Mongo six -- someone can fact-check this, but I think it took six years to reach ten million \[unintelligible 00:37:08.11\] I think that's the number I saw... Which is a lot longer than most SaaS businesses. So we just know that as a database company it's gonna take longer. But when you make it, if you make it, it's very hard to break into this market. The market size is just a lot larger than most other companies. So that's what we're banking on, and we've got the right backers to get us there, and make sure we can get there.

**Jerod Santo:** Yeah.

**Adam Stacoviak:** It's good to have the right backers in place too, because like you had said, you can move patiently. You could put something out as open source, and not feel like "Oh gosh, we have to get to..."

Obviously, the name of the game in business is to profit and sustain, right? But if you can -- Jeff Bezos and Amazon basically lost money for many, many years, and look at the juggernaut they are today. If you can see that far in the future, or a world where eventually - or to some point - that horizon where you get to profitability, you can be a lot more patient. And it certainly helps having the right kind of people in place, the right kind of backers in place, that can give you the funds to grow, like you said, you needed to have, but also that sentiment of patience.

**Paul Copplestone:** Yup. And we definitely have that in our current investors. I think you get it when you do these big, audacious -- I mean, we're not going after Firebase, really. We're going after the Oracles of the world. So that's sort of the longer term... Or the Postgres hosting and database as a space is just growing ridiculously fast, so the pie is getting very big. At the moment we just wanna make sure that we're in the game, ready to grow with the market itself.

**Jerod Santo:** One of the things that Evan Weaver, the CTO of FaunaDB, when he was on the show, was that everything is moving to cloud services, and the database is kind of the last bastion of the on-prem or self-hosted world. It's been slower, it's been a burn, but it's happening. People are starting to move there. Would you consider -- I mean, it is a crowded space, because I think there is huge opportunity; like you said, it's hard to capture this, but when somebody trusts you with their data store, a) as long as they're in business, they're gonna trust you for a very long time, so they're gonna pay you for a very long time. So loyalty is a big thing, and that makes churn lower. And unless your portability story is really strong, which your guys' is, moving off is also expensive and a pain.

So there's lots up for grabs, but there's lots of competition in this space. Fauna is one, Cockroach, you guys, Prisma... There's a lot of people doing databases in different forms; like you said, Firebase has kind of been there, established, 18 different sub-projects... Maybe not your immediate competition. Who do you see as Supabase's competition in database-as-a-service? I know you're more than just database, but still...

**Paul Copplestone:** \[00:39:56.12\] Yeah. Ultimately, we'll be going after the serverless database situation... So that could be for example AWS Aurora. They have a serverless Postgres offering. Google also bringing out a similar offering. A very good service at the moment is PlanetScale as well; I think they're doing very good stuff for the MySQL crowd. So anyone who's doing this -- Cockroach no doubt; they're Postgres-compatible as well. Not fully, 100% Postgres, because it's sort of rewritten... But I guess yeah, we'll definitely be bumping shoulders with these type of people as we grow.

But yeah, really, this market is getting very big, and I can see there's not gonna be a winner-takes-all type market. There's definitely gonna be a lot of space.

**Jerod Santo:** So you mentioned JAMstack people love you... Is a JAMstack developer, is like a frontender, JavaScript, not so much familiar with backend - is that your ideal customer? Or is it broader than that? Who do you think you're building for now? I realize you change focus as you grow... But is a JAMstack person your sweet spot, or is it more full-stack people? What do you think about that?

**Paul Copplestone:** Yeah, for now definitely JAMstack. We wanna have people who probably aren't so familiar with databases in general. We just make it ridiculously easy for these people. And actually, it's quite rewarding... We get a lot of people coming in saying "Oh, I learned Postgres with Supabase." And we get a lot of schools, for example, who come to us and say "Oh, previously I had to spend lessons teaching them how to set up Postgres. Now they can just launch a project on Supabase and they can start learning Postgres with us."

So really - yeah, this is great, because... You know, the technology that you learn on, you tend to stick with. So it falls into our patient approach. Eventually - yeah we'll start targeting more established full-stack developers, even people who really enjoy Postgres already. Maybe we'll win them over with our row level security, a few of the things that we talked about earlier.

**Jerod Santo:** What does transitioning look like? Let's imagine, since we have Changelog.com as an example app - you know, we're a three-tier app, with Postgres as a database... And let's just say we're interested in trying Supabase out. What would it look like importing, maybe it's pg\_dump, pg\_restore. Is that basically the story, or is there more to it? I assume I would have to then access it through Supabase somehow... Or do I have a direct connection? Just tell me how that works.

**Paul Copplestone:** Yup. So the process would be exactly that - you'd dump your database, I guess restore to a public schema. You sound like you're using Elixir, or maybe Phoenix, or something - you can just connect that to your database. We give you a Postgres connection.

**Jerod Santo:** So the very basic. You're just like hosted Postgres in a nutshell, and then everything is added on top of that, but optionally.

**Paul Copplestone:** Yeah. There'll be some -- you can access your data through the dashboard, you can see it, poke around, then you can start using the APIs if you want. So either the RESTful API, we're building some Elixir clients, you might even use it within your Elixir application... We've got real-time APIs, so you might just wanna listen to data popping out of the database, for example, small use cases... Then eventually you hopefully go all-in on maybe the rest of the suite; maybe our auth, maybe the storage, whatever you want.

**Jerod Santo:** So client libraries in many languages, or is there a happy path? It seems like all your stuff is kind of TypeScripty, you docs and stuff.

**Paul Copplestone:** Yeah, docs are TypeScript. We've got quite a few languages. Officially, we support JavaScript libraries, and then the community supports all the other languages. Then in terms of tooling, we use Go, TypeScript, Haskell for Postgres... A few other things. A lot of Elixir, of course, for our real-time server, so...

**Jerod Santo:** Flesh out that story about the real-time again. You said you can just listen... Tell us what people are using that for, and how it works, and how it plays with the Postgres side.

**Paul Copplestone:** Yeah, this one's very cool. I think it's one of the most unique features. I was using Firebase, as I said, in my previous company, and it was to listen to chat messages. You send a chat, and then you receive it; a very typical situation. Then I moved it to our Postgres database and I was using publish and notify, if you know that, inside of Postgres.

**Jerod Santo:** Yeah.

**Paul Copplestone:** \[00:44:23.21\] I didn't realize that there was a hard limitation of 8,000 bytes... So I found an Elixir library that helped out a lot, but I built this engine where you can connect via WebSockets to your database, and you'll just listen to the replication stream. So the write-ahead log sends events out of it. I connected to that with a Phoenix server, and then I sort of decoded this stream, and then I blasted the decoded JSON into the WebSocket, so you can listen to any change that's happening.

And then we've just built out this functionality, we've just released it with row level security; so the rules that you specify on your table, that are adhered to on the real-time security. So for example, if you had a messages table, and let's say you wrote a row where only you, your user ID could listen to message ID 1 and 3. You could just listen to all the changes in the messages table, but you would only receive changes to message ID 1 and 3, because you're authenticated through the real-time server.

**Jerod Santo:** Have you stress-tested that thing at scale?

**Paul Copplestone:** Yeah, we did some performance testing on this one. I don't actually know -- I think it was 325 requests per second, or something... Yeah, it's reasonably high, but we know we can get much better as well.

**Adam Stacoviak:** One of the things in the Benefits section of the readme, which - thank you for an awesome readme... It says "The beauty of listening to the replication functionality is that you can make changes to your database from anywhere - your API, directly in the database, as you would obviously do, and then via a console."

**Paul Copplestone:** Yeah.

**Adam Stacoviak:** And then you still get those changes via WebSockets.

**Paul Copplestone:** Yeah, this is cool, because a lot of people do it in the middleware, so you obviously have to send it through the middleware... But you can connect if you're using psql, and make a change that way, and it still gets propagated.

**Jerod Santo:** Yeah, that's neat, because sometimes you get stuck, where you're like "Well, if we want this thing to actually be notified or entered into the stream, we have to access it through the app, because the app is the one that does the whatever. Or we have to access it through this functionality through the API." But because of where you've built that functionality in, anywhere that you're accessing your database, that's gonna get -- because it's inside of Postgres, it's using pgnotify, so it's right there, it's gonna happen. You're not gonna have a chance to miss it.

**Paul Copplestone:** It doesn't use notify anymore. It uses the replication log, write-ahead log...

**Jerod Santo:** Okay, sorry.

**Paul Copplestone:** ...which is kind of even lower level. But fundamentally, this is actually one of the things that we've learned is just very good for us to do... If we put everything right at the bottom of the stack, in extensions... For example, the GraphQL will use row level security, of course, then we'll probably do subscriptions and things using that same (we call that) WALRUS, Write Ahead Log Realtime Unified Security. So it'll still use that same functionality. Because it's right down at the bottom of the stack, everything above it benefits. So it just makes sense to code everything into the database when it comes to these fundamentals. So it's just becoming a very elegant suite of tools when we combine it with the REST server, the write-ahead log... All these things combined become very cool.

**Adam Stacoviak:** Because Supabase is in beta, and just beneath the benefits is - there's a server-guaranteed delivery of every data change. And there's some, essentially, limitations and warnings, basically... Like, your database may run out of disk space due to the write-ahead logging... So there's like crash possibility... Like, tread your own water. Would you consider this like in the same vein of beta as Supabase, or is this ready to be used? Are you iterating on those limitations?

**Paul Copplestone:** \[00:48:08.21\] This one's probably slightly different... Every tool kind of has its own status, ultimately...

**Adam Stacoviak:** Right. Is it done, or is this just sort of like a future, what you'd love to have?

**Paul Copplestone:** I mean, Postgres, of course, is not a beta product, right? It's very tried and true... The real-time server, for example - it's very robust for certain use cases. You wouldn't use it for guaranteed delivery \[unintelligible 00:48:30.25\] with it, in which case we want guaranteed delivery. So we'll probably code that part into it.

But for connecting multiple clients to the database and listening, usually it's for like message updates, and things like this. You don't really need guaranteed delivery. You want almost guaranteed delivery, but it doesn't matter if the occasional message slips through. They just refresh the page. So in this case - yeah, it's definitely a done product, but we'll keep iterating on the CDC part of it.

**Break:** \[00:49:12.15\]

**Jerod Santo:** So as a Postgres user, who also speaks with a lot of newfangled database vendors, a lot of the stories that I hear about the architecture of databases have made me believe - I'm here for you to debunk or to agree - that a client-server relational database such as Postgres architecturally is not well-suited in a serverless world. Your response, sir...

**Paul Copplestone:** \[laughs\] Yeah...

**Jerod Santo:** What do you think about that? Do you think that's the case? Or do you think that it's just a small thing that you can work around, or is it a big problem?

**Paul Copplestone:** Well, it's definitely not a small problem. So the experience right now for you if you sign up to Supabase is we sort of scale your database for you. There's no unlimited scaling, actually; there are some theoretical limits around this, and we will work around these eventually. But what they're really getting to is they are cloud-native Postgres.

**Jerod Santo:** Right.

**Paul Copplestone:** So the holy grail really, I think the person or the company doing it the best would be AWS Aurora have the sort of serverless Postgres. It has a bunch of quirks as well. Really though -- I mean, it's very hard to bet against Postgres. They know that there are some limitations around this, and we work around a bunch of these limitations with our existing tooling. For example, one of the limitations is around connections, and it doesn't scale so well if you're doing serverless directly to the database. So you've gotta put a \[unintelligible 00:53:40.25\] in place, or something like that. We provide a \[unintelligible 00:53:44.06\] for you. Or if you just use our APIs, the HTTP API, you don't have any problems at all. So really, we've solved some of the problems of working with serverless and Postgres.

Then you've gotta ask, "Well, how can Postgres be serverless?" And this is the thing that really our business is going to gear up towards over the next few years. We're going to make sure that we can help with these efforts, build out a cloud-native Postgres. We don't wanna have to run a fork of Postgres. If we do run a fork, it'll be to upstream as much as we can. And there are a lot of companies that are going to be working on this. A lot of people are interested in this, of course. Everyone thinks there's a lot of money in it from a commercial side, but even the open source contributors just know that it's something that Postgres needs to get through.

So there's a lot of stuff coming in this space... Pluggable storage is an interesting one. New storage engines for Postgres, fundamentally rewriting the storage engines to be distinct, ways of combining it with, say, other disk tools, maybe ZFS, things like these... So there are people working around it with clustering, and things. So that's how we do it at the moment, but really, I've got no doubt, give it five years, Postgres will have some very cloud-native functionality.

**Adam Stacoviak:** What particularly about ZFS can you talk about? Because we're gonna air - I think before your show... So if you're listening to this, there's Matt Ahrens, one of the co-creators of ZFS was on the show. What specifically about ZFS is it gonna be solving to make it serverless?

**Paul Copplestone:** So that introduces a bunch of functionality that you might want, that other players are doing. For example, a very good company is Postgres.ai. They use ZFS for doing thin clones. So you can clone a database basically in half a second, it doesn't matter how big it is, because you're basically doing this copy-on-write functionality... Which means that you can do branching your database. So if you've got a production database, you wanna run a branch of it, then run a bunch of tests, then wind it down - that's how you would do it with ZFS. You can do a similar sort of thing even snapshotting with LVM as well, but it's just a bit more elegant with ZFS.

**Adam Stacoviak:** Yeah.

**Paul Copplestone:** But I know of other companies who are completely rewriting it, because if you combine Postgres with ZFS, then you've essentially got Postgres doing a storage mechanism, ZFS doing a storage mechanism. So it's like double-handling of storage. Ideally, what you want is it handled all inside Postgres itself.

**Adam Stacoviak:** \[00:56:16.13\] Even when you talked about the architecture too, to make Postgres serverless, you talked about maybe an intent log, or something like that... It reminded me of the ZIL, which is the -- I don't know what the ZFS terminology is, but it's like an intent log. ZFS intends to write this to its storage engine, or whatever it might be. I'm not familiar with all the necessary particulars of language and lingo, but that's it - it's an intent to write it. So this log is a separate cache, or it can be a separate cache; it seems like what you're building to make Postgres serverless is not necessarily converting Postgres to serverless, but adding services on top of it to augment and add to it, that may actually land -- because you're kind of user land, technically, right? You're commercially user land; that might actually eventually land in Postgres itself.

**Paul Copplestone:** Correct, correct. And we will work on it with the community, for sure. I mean, we've got the funding to do this, as well as our intention. But for now - yeah, as you say, it's a really good term, we're in user land, and we are providing the tools that abstract all the difficulties of Postgres, including this sort of not being serverless. So we abstract all of that away, so that people don't have to think about that, and they just think in user land. And then it's up to us to figure out how to do really serverless Postgres, so that if you get to 20 terabytes of data, you don't have to worry.

**Adam Stacoviak:** And from a (I suppose) database -- I don't know, Postgres versus MySQL, for example... You bolster the future story of Postgres, whether it benefits Supabase directly or not, because if people choose and prefer, like Jerod does, Postgres - like, "pry it out of his cold, dead hands; I dare you" kind of thing...

**Jerod Santo:** Just try it.

**Adam Stacoviak:** ...then you're gonna get people on the Postgres side versus another side, basically; a Mongo side, a MySQL side, or whatever it might be... Because if they're in line with Postgres, then they're potentially a future customer; or at least an appreciator of the work you're doing in the community, and even commercially.

**Paul Copplestone:** For sure, for sure. It's a huge benefit for us. A lot of people come in just because they like the fact that we're Postgres.

**Jerod Santo:** I mean, an analog to this, which I think was at a smaller scale, was the NoSQL trend, which was kind of like "Look what you can't do with your relational database", without N+1 queries, or whatever... And then Postgres the community and the core team reaction to a certain degree to that, which is like "Look at all these cool JSON tools \[unintelligible 00:58:42.22\] to Postgres. It's like, my database can do that just as well, if not better, given these constraints etc." That was an answer to a desire for a different style thing.

Now, this seems more foundational - and we're talking about storage engines; it's lower than a data type, and I think therefore bigger of a lift... But I can see where you're coming from. There's money here, there's gold in them hills if we can figure it out, there's a lot of people with vested interests in Postgres, 25 \[unintelligible 00:59:11.29\] years of development on the software project. If you were to forget about the how, and just tell us the what - so what would a cloud-native Postgres look like? Forget about how it gets done. What are the attributes? What makes it cloud-native versus not? What's it missing?

**Paul Copplestone:** Decoupled compute and storage. So the idea is that you should be able to attach the compute part of it to a storage, hopefully like an infinite storage; you know, anything that is infinitely scalable. If you can do this, and in particular, if the compute can start up very fast, maybe in, say, a hundred milliseconds via some sort of HTTP response, then that's cloud-native, yeah.

**Jerod Santo:** And at that point you can do geographic distribution of storage as well, correct?

**Paul Copplestone:** Okay, so that's an even --

**Adam Stacoviak:** \[01:00:06.20\] \[laughs\] I like that laugh.

**Paul Copplestone:** Tricky, yeah... \[laughs\] Then we're getting into distributed systems, so...

**Jerod Santo:** Well, aren't cloud-native systems kind of inherently distributed?

**Paul Copplestone:** Yeah, it depends whether you want multi-master, or a master and a read. So it really comes down to if you want to write your data -- well, it's classic CAP theorem, right?

**Jerod Santo:** It is!

**Paul Copplestone:** Yeah. I mean, what you could do is that you write to one place -- the easiest thing is you write to one place, and then you read from many. It could be even that you distribute the data around the world by copying disk bytes from that point, rather than the write-ahead log.

**Jerod Santo:** Sure.

**Paul Copplestone:** So that's one way to do it. But if you have multi-master, especially if it's like across the other side of the world, then of course they have to have consensus about who's writing to the same row. That's another thing, and I don't think that should be a goal for Postgres... Although it is something that they're putting some pieces in place for this, which in theory could lead to it... But I think the first thing should be that decoupling compute and storage is fundamentally the problem that needs to be solved.

**Jerod Santo:** So you think that that problem needs to and is going to be solved, but the distributed write around the world -- because this is the problem of some databases which are working very hard... And more money being poured into those as well; it's like, if you can geographically distribute your data store alongside your applications which have been geographically distributed, and you're basically edge computing in its entirety, as close to the user as you can - that's the holy grail that some people are pushing towards. And you're saying that Postgres probably shouldn't or won't get to that point in its current incarnation.

**Paul Copplestone:** I don't think it should be its first goal. I mean, let's be honest - latency on write versus latency on read... You know, you can cache read, and you do that. So that's the thing that really you want first. And then you get into complexities around distributed systems, which - yeah, it's just such a complex thing.

So I would far rather choose a tool -- and you have to choose; you can't choose both. So I'd far rather choose a tool which had fast, rather than -- it's the CAP theorem, right? So which do you wanna choose? Eventual consistency, or strong consistency?

**Adam Stacoviak:** Yeah. I'm remembering back to our conversation around Fauna... We had like "Choose two. You can't have all three" kind of thing with the CAP theorem.

**Paul Copplestone:** Yup.

**Jerod Santo:** Yeah, but what Fauna is trying to do and claiming to do - and even the team inside Google I think with Spanner is doing this - is like "Choose two. But also, you can minimize that third one to be such a small occurrence that it's not a zero." You're never gonna get to 0, or 100%, depending on which way you're choosing. You never have 100% of all three of these. But we can choose two, and then we can minimize the third one so small that it's -- it's not nothing, but it's virtually you have all three.

**Paul Copplestone:** Yup.

**Jerod Santo:** And I think that that's a hard problem. It's the kind of deep tech problem, and I'm just curious if that's on Postgres' roadmap.

**Paul Copplestone:** In this case, you might choose, for example, to distribute a partition. For example, you might say "Well, this user table is partitioned into geographic regions", in which case you would route and you would say "Well, this compute only writes to this partition." In that case, you could also minimize it in this way. It's just going to have a single writer, and you've still minimized the latency if you know "Well, all my European customers are going to write to this table." Of course, then you have to have knowledge of your data, so... It's just a very odd problem.

**Adam Stacoviak:** Yeah.

**Jerod Santo:** Now you're in user land again.

**Paul Copplestone:** Yeah, exactly.

**Jerod Santo:** You're back in user land.

**Adam Stacoviak:** \[01:04:00.20\] Well, just to layer one more here for listeners catching up... I actually went to the transcript, which is always so helpful... Gosh, it's so awesome to be a user and consumer for a transcript, as well as part of an authorship of them as well... But Evan said in that show "So the CAP theorem says that you can't have consistency, availability, or partition tolerance at the same time." So just to kind of clear up what the three pieces, the three moving targets that you can or cannot have, and to which one you can minimize.

**Jerod Santo:** But then he goes on to say "But we're trying to..." \[laughs\]

**Adam Stacoviak:** Yeah.

**Jerod Santo:** So go listen to that one, it is an interesting conversation with a team that is trying to at least do what I described now. I think the verdict is out, I think they have working software, and things they can show, and they have customers, and so they're doing some cool stuff. But whether or not that Holy Grail has landed - that's kind of up to implementation details, and I think probably some subjective judgment, and maybe some trickery on getting around certain things. Because at a certain point it is all trade-offs.

What's cool about Postgres is the community, to me. There's so many people, so many smart folks... I love that Supabase is now added to that; here comes a brand new - new in terms of the long-run - startup story of people dedicated to making Postgres more awesome. How cool is that? Everybody benefits with the work that you guys are doing.

Tell us about the Supabase community. Who's involved, maybe even your team size now, are you growing, are there non-hired people building cool stuff with you? Flesh that out for us.

**Paul Copplestone:** Yeah, there's a lot to talk about when it comes to community. The team is 35, fully remote, everywhere. Then in terms of non-core team, we have like a squad of people that we pay through OpenCollective as well, for some maintenance... And then yeah, in terms of contributors - I mean, a lot. I don't know actually the numbers; I think it was 275 on our main repo when I last looked. But then we've got so many repos, and there's repos outside of our organization which we support, with employees, or otherwise, financially. So yeah, I think overall, hopefully we're leaking out and providing benefits to other people as well.

Then in terms of growth, I think if we take maybe GitHub stars, if you use that as a metric - it's going very well. Obviously, a lot of interest. I think for five consecutive quarters we've been in the top 15 fastest-growing by GitHub stars... So yeah.

I think I mapped it out on one of the days - our main repo is growing as fast as React was when it launched... Which is nice, because React is by Facebook, so it obviously had a lot more eyes than we did when we started.

**Jerod Santo:** Right.

**Adam Stacoviak:** I'm not sure if this helps you at all, but again, back to your Twitter account... A recent tweet you actually laid out some of your growth, and one of them was contributors. You went from 88 to 271. I'm not sure what that's in reference to, but you did just say that you're getting started, so... Contributors at least, based on your tweet, was 88 to 271. I'm not sure when 88 was, but 271 may jog your memory.

**Jerod Santo:** Is that for the start of '21, end of '21 kind of a thing?

**Paul Copplestone:** Yeah, it must have been start of '21.

**Adam Stacoviak:** "In 2021 we grew by X." So yeah, I guess the year. It's good to be in growth mode. That's the exciting time, right? Growth mode is fun. You can attract new talent, you can attract obviously new awareness to a certain thing... You're in a great place to tackle hard problems. New funding, of course, as you have done this past year...

**Paul Copplestone:** It's a lot of fun as well, because we do one thing quite unconventional. We got the idea off Cloudflare, actually. We launched in beta at the end of 2020, and it was very successful, but the team was exhausted. We got together and we thought, "Well, beta was pretty cool, but how can we do it even better?" And we decided that we'd launch one thing every day for a week.

So we did our first launch week in March last year, and then we loved it, and we did another... And then we did another one in December... So we did three launch weeks in December where we launched one thing every day for a week. But usually on Friday we'd launch even three things.

**Jerod Santo:** Wow.

**Paul Copplestone:** \[01:08:13.28\] So I think it really feeds into the growth, but it's also a lot of fun for the community, because they get to see all the stuff we're shipping. It's a bit hard for -- a lot of people say "How are you doing your growth?" and I tell them this, and they might try to emulate it, but the truth is we've just got so much to build that we kind of have to bag it into a week, otherwise it's not getting seen. So that's really why we're doing it that way.

**Adam Stacoviak:** Can you break down maybe your most recent launch week? Like, what those things were, kind of encapsulate what some of the things might have been... When you say "things", what do you mean by that?

**Paul Copplestone:** So launch week three... I'm just pulling it up, because I can't remember. On Monday we always did community day, or we started doing community day, where we usually spotlight on Postgres, or any of the tools. Kong is another service that we use outside. Dashboard --on Tuesday we launched the dashboard, open source. So part of the stack was closed source, and we just made sure that it was completely open, and MIT licensed.

Wednesday - real-time updates. We turned on row level security for the real-time server. Previously it didn't have those rules, and we released that. Thursday we acquired a company Logflare. They are for ingesting logs, but we sort of wanted to feed into our server-side analytics platform. So you can query your logs using SQL through your Postgres database. So we acquired Logflare to do that. And then Friday, one more thing - actually, it was three more things. It was the GraphQL extension, a CDN that we have released, we also released some updates for our Supabase Functions, an egghead course, and a hackathon. So yeah, it's quite a lot.

**Adam Stacoviak:** All in a single week. How do you motivate a team to deliver that? You had set some timeframes; what were the timeframes -- it's obviously not back-to-back, month-to-month, right? Like, you were gonna span it out to quarters, right? That's a lot of a sprint, really, than the typical marathon you might be in as a business, or as an engineering team.

**Paul Copplestone:** So for example, we'll get together probably next week as a team, and we'll plan out maybe five features that we want to launch, and we'll work towards a date. It'll be the end of March again. And then we have this fixed timeline variable scope mentality. Usually, what happens is maybe some other things creep in, some other things that we plan fall out the other side, but we just know on that date or the week before we'll do an internal launch, and then in that week we'll launch at least five things.

**Adam Stacoviak:** What do these launch weeks do for growth? They've gotta be great for marketing. This is the work-in-public kind of situation - you're on Twitter... Cloudflare really got a lot of benefit from that too, a lot of PR and fanfare from like "Hey, this stuff is happening", and you pay attention, like "Yeah, it's Monday, it's Tuesday, it's Wednesday", and each day there's something new. What does that do for maybe morale and growth, on both sides of the spectrum?

**Paul Copplestone:** Yeah, I mean, usually what happens is that -- you know, it's got this compounding effect... So you might get on, say, GitHub Trending... I don't even know how that algorithm works, but somehow we get onto GitHub Trending usually on these weeks; or on Hacker News, we try to make sure that we're always publicizing the Postgres stuff on Hacker News, so people will see Supabase multiple times that week.

Twitter actually is the main channel for us... So people get this sort of flooded Twitter feed of Supabase mentions or launches, so that's always good... Just to make sure that we're top of mind during that week.

**Adam Stacoviak:** Well, clearly you've got some inertia behind you, clearly you've got a great team behind you, and you've got a great seed of investors who are patient with -- and even considering your outlook and how you approach the market; they probably care a lot about open source, which is great to have... Otherwise you'd have probably said no...

**Paul Copplestone:** Yeah.

**Adam Stacoviak:** Like, "I like your money, but I don't like your ideas" kind of thing...

**Paul Copplestone:** Yeah, definitely.

**Adam Stacoviak:** You know, even when you pitch and you don't get accepted by Sequoia, you still get something out of it... So it seems like you're turning all of your experiences into the positive, which I think is a positive thing.

**Paul Copplestone:** Yeah. Well, it's startups, right? You've gotta be fairly optimistic.

**Adam Stacoviak:** Yeah. Anything in closing? Anything we didn't ask you, anything we left on the table that you wanna mention here in the closing?

**Paul Copplestone:** No, I think the usual marketing stuff... So I guess just go check out our Twitter, @supabase, supabase.com if you wanna try it out... But also, I think the thing that's really helpful for us is people leaving feedback. We've got this little feedback widget; if you use it and you write a little note, I read every single one of these notes. It's useful to know about any product ideas that people have, especially while we're in beta.

So yeah, if you do try us out, definitely make sure you leave some feedback. I'll read it. And if you shout-out to me in particular, I'll email you.

**Adam Stacoviak:** Nice. Get a nice little direct line to Paul. Well, Paul, thank you for your time, and really, thank you for (I guess) fighting the fight of being an entrepreneur, and building this company, and pushing Postgres forward. Whether we use Supabase directly or not, there's some fruits for us to even enjoy here at Changelog, so we appreciate that.

Thank you for your outlook on the marketplace, what you're doing, and I appreciate your time here. Thank you.

**Paul Copplestone:** Thanks.
