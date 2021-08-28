**Jerod Santo:** Alright, we have Richard Hipp here, a long-awaited return to the Changelog. Richard, welcome back.

**Richard Hipp:** Thank you for having me.

**Adam Stacoviak:** So excited to have you back.

**Jerod Santo:** We've first had you on the show back in 2016, talking SQLite - and I will pronounce that correctly, and do my best... \[laughter\]

**Richard Hipp:** There's no correct pronunciation, you call it whatever you want.

**Jerod Santo:** Well, Adam was slapping my wrist yesterday, because we were talking in prep for this; I kept calling it SQLite (sequel lite) and he's like "Now, you know Richard pronounces it S-Q-L-ite, and I said "I just can't do it, I'm trying..." But I'll do my best.

**Adam Stacoviak:** And ever since then, Richard, I've been on your side, out there, just spreading the word, how it's truly spoken. And I guess if you don't feel strongly about that, then we won't enforce it, but... You said it the right way, so I've been following your rules.

**Jerod Santo:** Well, I think we actually broke news in probably the most cited episode of ours out there on the internet is episode - is it 201?

**Adam Stacoviak:** 201, yeah.

**Jerod Santo:** ...with Richard Hipp, how you pronounce SQLite. We set the record straight, and that's probably the most linked to episode... Not only that, Richard, but we've had many people over the years say "You've gotta get Richard back on the show." So we're happy to have you, we're here to get an update on SQLite, we're also here to talk about Fossil, which is your own SCM, which does lots of interesting stuff...

**Adam Stacoviak:** What's an SCM, Jerod?

**Jerod Santo:** See, I had to look this up, because I thought it was Source Control Management, but I think it's Software Configuration Manager... Richard, what's SCM stand for?

**Richard Hipp:** I always thought Software Configuration Management, but Source Control Management works too, I guess...

**Jerod Santo:** \[00:03:59.14\] Sort of. I mean, I guess we'll find out that it does more than just source control, right? It does a lot of things. But also - do you configure software, software configuration? I don't know; neither of them (I guess) fits all that Fossil does, but SCM is definitely a thing... A thing that isn't discussed so much anymore because I think everybody, for the most part, except for you and your community, Richard, are just using Git and GitHub.

**Richard Hipp:** Pretty much, yup.

**Adam Stacoviak:** Yeah.

**Jerod Santo:** So it's fun to find out an alternative that's viable and long-lasting and beloved by those who use it. We're gonna learn a bunch about Fossil and maybe we'll have some converts after this episode. But let's catch up with SQLite first.

It's been five years, it's probably still the most used software in the world, maybe second place to Clib, or maybe Curl is catching up... I don't know, there's a few of those that are just ubiquitous... But what else --

**Adam Stacoviak:** Is it on Mars?

**Jerod Santo:** Yeah, is SQLite on Mars? Do you know?

**Richard Hipp:** I don't know. Everytime we have this conversation somebody writes and says "Oh yeah, it's definitely, or there." It's in just about every electronic device you have. It's in your car, if you've got a recent car. It's in most of your computers required to boot up these days. It's certainly in all of your phones... I think that there's probably more instances of SQLite running than all other database engines combined.

**Jerod Santo:** Which is amazing to just think about.

**Richard Hipp:** Yeah, scary.

**Jerod Santo:** \[laughs\] Well, it's scary for you, because you're the one managing the configuration of the software, right?

**Adam Stacoviak:** That's right.

**Richard Hipp:** Yeah. Well, it does change your worldview. I mean, suddenly it's like "Boy, I need to pay attention to this, don't I?"

**Jerod Santo:** Right.

**Richard Hipp:** "I can't mess this up."

**Jerod Santo:** So is development at a slow pace because of that nowadays, or does it still move pretty fast, or is SQLite pretty mature so that you don't do too much to it?

**Richard Hipp:** It has slowed from the early days... But we still are adding a lot of features, and we do a lot of changes. We don't talk about the rate of code churn very much, because that would scare people...

**Jerod Santo:** Because it's high?

**Richard Hipp:** It is, for a piece of software that's used this widely, and is used so much. But we do have -- we actually spend most of our time testing it, because that's important. A few years ago we were talking with a young college graduate, a young woman, and she was talking to me and she says -- she was in software too, and she's like "Well, I just do testing. I'm just a tester." She was very self-deprecating, and I thought, "Shoot, that's all I ever do, is test. I spend all my day testing." \[laughter\] I'm just a tester.

**Jerod Santo:** Yeah.

**Richard Hipp:** Because people write in, they'll have some issue, or we'll do a new feature... And adding the feature takes an hour. And then we'll spend weeks just testing it.

**Adam Stacoviak:** Yeah.

**Richard Hipp:** But even that - there is a lot of code churn. I know that OpenBSD, somehow they have for a while adopted SQLite into their core set of packages, because it was being used for their -- I think for the search engine on their man pages... But they wanted to stay up to date, and they feel compelled to do a code audit for every line of code that changes...

**Jerod Santo:** Oh, wow.

**Richard Hipp:** So we were changing SQLite faster than the rest of the entire core package combined, and I said "No, we just can't keep up." So they had to write their own database engine for their --

**Jerod Santo:** Well, they've dropped you as a dependency.

**Richard Hipp:** Yeah, they had to drop it, because the code churn was just too high.

**Jerod Santo:** Wow.

**Adam Stacoviak:** But don't you have it in your license, where you can -- or is that with Fossil? Did I misread that? ...where you can -- I think your words were "Steal the code and use it however you want, even for commercial use."

**Richard Hipp:** That's for Fossil, yeah.

**Adam Stacoviak:** That's just for Fossil.

**Richard Hipp:** Well, SQLite is public domain, and you can do anything you want with that.

**Jerod Santo:** Right.

**Richard Hipp:** I wish \[unintelligible 00:07:47.13\] I mean, we do have a lot of public tests that are out there, that are public domain as well, but some of our test code is proprietary. Some of it.

**Adam Stacoviak:** Why is that? Because it was paid for by somebody?

**Richard Hipp:** \[00:08:01.22\] Originally we thought we were gonna sell this and make money from it, and that's how we were gonna support ongoing development. That didn't really play out, nobody ever bought it. It does sort of become our business value, our intellectual property. I mean, you can take the SQLite code and fork it and start your own thing...

**Jerod Santo:** The tests...

**Richard Hipp:** ...but you don't have the full test suite...

**Jerod Santo:** Oh, okay.

**Richard Hipp:** You've got a lot of tests, but not all of them. So we've got a little bit of advantage over you there.

**Jerod Santo:** So most of your business income is support contracts for SQLite?

**Richard Hipp:** It's pretty much all support. We have some extensions, like the encryption extension, that we'll sell to people on a license basis... But the bulk of the revenue is from support contracts.

And a lot of people do that, because if your business depends on this, you wanna protect your supply chain... And we can sell them a support contract, which is a lot cheaper than them hiring somebody to support it themselves, so...

**Adam Stacoviak:** Why not hire the experts, right?

**Richard Hipp:** Right.

**Adam Stacoviak:** The ones with all the tests.

**Richard Hipp:** And if we're doing our job well, they never call us.

**Adam Stacoviak:** That's right. How does that play into the make-up of the business then? When you think about growing the business... Essentially, you have to make worse software, right?

**Jerod Santo:** \[laughs\]

**Adam Stacoviak:** To some degree, right? Software that requires, you know--

**Richard Hipp:** Yeah, that requires maintenance. That's right. In order to sell more maintenance contracts we have to deliberately introduce bugs. Okay, I'm not sure -- I don't wanna go there. That's not the way I wanna do it.

**Adam Stacoviak:** Okay...

**Richard Hipp:** People - I have talked to a number of people who have made a lot of money in the software business, and they look at what we're doing and they say "Oh, Richard, you could make a lot of money doing this... Let me show you how." And they're probably right; I don't doubt that if they had been the manager of this project, we would have made a lot of money. But you know, I'm not gifted that way. That's not who I am. I'm much more the hacker. Lock me in a room with a computer and push pizzas under the door and leave me alone. \[laughter\]

So we've kept the business small. It's not a promise, but we wanna support SQLite until the year 2050. And you have to be careful -- that changes your way of thinking; we wanna make sure that everything we do is sustainable in a business sense.

**Jerod Santo:** Yeah. So are you still slinging code?

**Richard Hipp:** Yeah, absolutely.

**Jerod Santo:** Every day?

**Richard Hipp:** Pretty much every day, yeah.

**Jerod Santo:** Nice.

**Adam Stacoviak:** What's your discipline toward that? Do you have like a time block in your calendar? "It's two o'clock, time to code."

**Richard Hipp:** No, I code on an as-needed basis.

**Jerod Santo:** Which is daily, apparently...

**Richard Hipp:** Well, it just depends on when things come up. I mean, customers will write in with questions, or I'll think of an idea... I'll be out running, and I'm like "This is a feature we really need", and then I'll cut the run short and come home and clean up and get busy coding.

**Adam Stacoviak:** There you go.

**Jerod Santo:** And then you'll test it for two weeks.

**Richard Hipp:** Or a month, or whatever, yeah.

**Jerod Santo:** So how big is the company? How many people are working on this support contract \[unintelligible 00:10:58.27\]

**Richard Hipp:** I've got three guys working on it with me right now.

**Adam Stacoviak:** Okay...

**Richard Hipp:** And we're all distributed. It's always been that way.

**Jerod Santo:** Yeah. Well, kind of living the dream. If that's what you like doing...

**Richard Hipp:** Yeah.

**Jerod Santo:** ...why not keep doing it?

**Adam Stacoviak:** Yeah. Is there any plans for a SQLite Cloud?

**Richard Hipp:** There are other companies working on that as we speak.

**Adam Stacoviak:** Gotcha.

**Jerod Santo:** Yeah, so one thing that has changed - or maybe it hasn't changed, but Adam and I have become aware of this... The last time we talked, 2016 - of course it was already pervasive, it's already out there in tons of things... But it's not client-server. So I guess what you call server-side, write-heavy web server style usage is really the place where SQLite wasn't playing quite as much, because you had switched to a Postgres or something at that point... But it seems like a lot of people take it more serious even for like backends on web servers nowadays. We know Ben Johnson has his Litestream project, which is like streaming replication... So there's tooling around "Hey, I actually wanna use this in a production capacity, on a web server or a web application backend", whereas it didn't seem like people were doing that then, or maybe they just weren't talking about it as much. They were doing it and talking about it now.

**Richard Hipp:** \[00:12:19.01\] No, so SQLite was originally designed to be more of the database engine for the edge of the network...

**Jerod Santo:** Yeah, like embedded.

**Richard Hipp:** ...versus the core of the network.

**Jerod Santo:** Right.

**Richard Hipp:** It's out on the peripheral devices, not in the core data center. But for example - I can talk about now Bloomberg. Their entire organization runs off of SQLite. Now, it's a customized version of SQLite called Comdb2. They have their own storage engine, which spans multiple data centers and is highly redundant... But the SQL query planner and executer is all SQLite. And then Expensify uses a stock version of SQLite to run everything.

**Jerod Santo:** Really?

**Richard Hipp:** Dave Barrett, the founder of the company, wrote this product called Bedrock. And he open-sourced it, it's out there on GitHub... It's sort of a wrapper around SQLite. His idea is that he builds a server for the application that is doing the database processing, and the frontend devices, they don't speak SQL directly; they call essentially stored procedures. And so you don't have any concern with SQL injection, because everything is done with stored procedures. But the server thing, Bedrock, uses SQLite for all of its underlying processing.

**Jerod Santo:** Huh.

**Richard Hipp:** He's published stuff where he's getting like (I think) three million transactions per second...

**Adam Stacoviak:** That's incredible, yeah.

**Richard Hipp:** It's an insane amount of volume. So there are cases of that, but still, I think the predominant use case is cell phones, and Raspberry Pi's, and the internet of things.

**Adam Stacoviak:** Does your business then have a relationship with Expensify and Bloomberg and this open source project you've mentioned?

**Richard Hipp:** We do, yes.

**Adam Stacoviak:** Okay.

**Richard Hipp:** We support it for them, and a few other companies like that, some of which wish to be public and others which don't... And that's fine; we're happy to work either way.

**Adam Stacoviak:** Yeah. I think what's interesting here as just a sidenote on this really - it's this sort of desire or this one-way thinking that because you've built a database that's amazing and widely used, that it has to be this massive company, or it has to have two million in recent funding, with billions of dollars of valuation... That's the way you have to do it. And I love that you push back on -- I mean, based on what you say here, that you push back on the idea that... You said you're not equipped for that, and that you like the small company feel, you like to code every day, that you're not influenced out of your norm, out of your comfort zone, your love, your passion, to build a company you don't actually wanna run.

**Richard Hipp:** Yeah. It's hard to know exactly what to do... But I have made that choice, and it's worked out really well. Now, who knows...? Maybe I would have been happier another way, but we'll never know, right? \[laughs\] I'm happy now, so I guess that's what counts, right?

**Jerod Santo:** Yeah, you can't go back and fork your life at that point. You can't just run both tracks and see which one worked out better, but...

**Richard Hipp:** No, everything's worked out really well. We've been able to solve a lot of problems for a lot of people, and it's been just an amazing journey. One of the great things is that I've been able to go out and visit so many different companies and so many different cultures and see so many different styles of development... It's really been an eye-opener. I would have never imagine that there was such a diversity of corporate cultures and development styles out there.

**Adam Stacoviak:** \[00:15:54.00\] Jerod mentioned Litestream and Ben Johnson... What are your thoughts on that in particular? This idea that you can -- using the replication process of SQLite, and doing what he's done with that... What are your thoughts on Ben's project in particular?

**Richard Hipp:** I think it's an interesting idea. Dan (one of the other developers) and I had a \[unintelligible 00:16:14.01\] conversation with Dan at one point, and we really appreciate what he's doing. He's not the only one doing that, let me say... There are other groups that are working on that as we speak.

I think it's a great idea, and I really applaud him doing it. Whether or not he gets traction and takes off - I can't predict. I just don't know. I wanna keep what we're doing here with us focused on the database for the edge of the network. I don't personally wanna get involved with making it massively-scalable like that. I think it's a great thing, it's a very important problem that needs to be solved, but just what we have now is enough to keep us busy. And if I try and take on too much, we would lose focus and start making mistakes. You have to find the right balance here, and right now SQLite is pushing the limits of what a small team like this can reasonably control. To go further, I would no longer be able to understand everything that's in the code, and we'd have to start delegating, and who knows where that might lead. I don't think that I would be very good at that, and I don't think that I would enjoy that, so we're not gonna do that.

**Jerod Santo:** \[laughs\]

**Richard Hipp:** Stay focused on the small, stay focused on one thing that we can do well.

**Adam Stacoviak:** Yeah.

**Richard Hipp:** That gives people like Ben an opportunity to do their thing as well. We're contributing to him...

**Jerod Santo:** Yeah. Well, he creates an ecosystem around the thing, versus you having to be the ecosystem, which I think is healthy, and like you said, it's opportunity... Do you ever see things out there that people are doing with SQLite, or building on top of or around, similar to Litestream, where you think either "I wish I would have thought of that" or "Actually, I am gonna take this one and put it into the codebase"? Have you ever done that?

**Richard Hipp:** Yeah -- I can't call specific instances to mind, but I'm always watching what other people are doing, and think "Well, that's a good idea. We should try and do that." Or "How can we make SQLite solve that problem directly, rather than having this add-on?" The thing to watch right now is DuckDB. I don't know if you've seen that one...

**Jerod Santo:** I have not. Duck?

**Richard Hipp:** DuckDB. It's a column store, instead of a row store. So it's optimized for big aggregate queries... So if you've got a large set of data and you're running analytics on it, they say DuckDB runs a lot faster. And DuckDB has borrowed a lot of the ideas we pioneered with SQLite, where they do an amalgamation. It's just a single file of source code... I think they stole our command line client and just reused it... Which is fine. I'm cool with that. Let them do that.

**Jerod Santo:** Well, it's public domain, so you'd better be cool with it, right? \[laughs\]

**Richard Hipp:** Yeah, of course. So that's inspired me to think about "Well, can we have a column store option for SQLite as well?" What would that look like? How can we build that out in a backwards-compatible way, so that it doesn't break legacy applications?

**Jerod Santo:** Yeah.

**Richard Hipp:** Because a big part of what we do is -- the SQLite file format is very carefully defined, and we guarantee that it's gonna be unchanged for years to come. Or at least not changed in incompatible ways for years to come, through the year 2050. It'd be much easier to write a column store if we could go back and redo the file format.

**Jerod Santo:** Right.

**Richard Hipp:** There's lots of things I would have done differently if I'd known back then what I know now. But we're kind of locked in by legacy. We need to support the literally trillions of SQLite databases that are already in the field. So how can we do that and do a column store at the same time...

**Jerod Santo:** \[00:20:01.29\] Could you just have another file format that's like column store mode, and it's like "Well, now it uses this file"?

**Richard Hipp:** Yeah, but then you've got added complexity. The other thing we need to balance is that -- because SQLite runs on small devices, we need to be careful not to let the footprint of a library grow too big. There's been steady growth in the size of the library. We're pushing 600 kb right now.

**Jerod Santo:** That doesn't sound like very much... \[laughs\]

**Richard Hipp:** Yeah, these days it doesn't sound like very much, but back 15 years ago folks like NOKIA and Motorola were just beating us up, "Can you save another hundred bytes?!"

**Jerod Santo:** Right...

**Richard Hipp:** These days it's less of a concern, but at the same time we just don't wanna let it go wild and suddenly turn into a 10-megabyte library that you have to link into your application. So there's a balance there... I mean, adding a column store needs a totally new query planner. How much extra space would that be?

So -- I mean, that's something that I'll be looking at in the coming year, or in the coming couple of years probably.

**Jerod Santo:** Well, here's a couple of examples - application size. So here I'm looking at my iOS app updates. Zoom Cloud Meetings update - 86 megabytes. Audible update - 119 megabytes. Google Maps - this one will probably be big... 206 megabytes.

**Richard Hipp:** \[laughs\]

**Jerod Santo:** So I feel like, you know, maybe that one dependency could be a little bit larger and nobody would notice... But point taken.

**Adam Stacoviak:** Especially with the edge, too... Edge devices probably have SD card for the most part, or smaller drive types that just don't have the capacity...

**Richard Hipp:** Right.

**Adam Stacoviak:** You know, things like that that really come into play.

**Jerod Santo:** Yeah.

**Adam Stacoviak:** Something that you kind of made me think of there was - when I asked you before about the business and optimizing for needing support, I think actually you're optimizing for something worth supporting.

**Richard Hipp:** That's a good way of looking at it, yeah.

**Adam Stacoviak:** Because it's not worth supporting unless people are using it. Unless it's useful.

**Jerod Santo:** Sure.

**Adam Stacoviak:** You know, needing support is one thing, but being worth supporting is a different thing.

**Richard Hipp:** Yeah. So I'm not very good at sales, so in order to get customers we really have to make it so that their business utterly depends upon SQLite.

**Adam Stacoviak:** Because it's just so stinking good, right? Yeah...

**Richard Hipp:** So that encourages me to make it better all the time. So the reason SQLite is so reliable is because I'm such a bad salesman.

**Jerod Santo:** \[laughs\]

**Break**: \[00:22:21.05\]

**Jerod Santo:** So I think this will lead us into Fossil, but I wanted to touch briefly on Althttpd... Because I saw this and it just made me laugh. Of course Richard Hipp wrote his own web server to power SQLite.org. Tell us about this. I mean, I understand you like to write your own tools... But you know, Apache existed, NGINX existed... Maybe it was very young when it existed.

**Richard Hipp:** Well, Apache existed when I first wrote this...

**Jerod Santo:** NGINX was out there...

**Richard Hipp:** \[00:23:58.01\] ...but it was big and complicated, and I said "Well, I'll stand up Apache, we'll do that..." I looked at the documentation, I read through the documentation multiple times... And I said to myself "Can I configure this in a way that will be secure?" Maybe with some trial and error, but how would I know that it's secure? I wouldn't really know. I mean, you really have to spend some time and become an Apache expert to know that it's secure. Maybe they have better tools now, two decades on. But it occurred to me in order to write something that I would really trust to run on my servers, I need to write it myself. So I put together Althttpd. It's very, very simple; it's a single file of C code, so that you can audit it and make sure that it's not doing anything weird... And I put it out there and it works.

I make no claim to be the most efficient, it is not the web browser that you want to deploy at scale. This is not the web browser you wanna use if you're building the next Facebook. But for small websites, it works great. It's the traditional "Fork a new process to handle each HTTP request" design. So we handle one HTTP request, it calls exit, and the operating system cleans up the mess. So that's really simple and secure. We don't have to worry about memory leaks, or anything like that... And it handles the load fine. I mean, we're doing -- I mean, it's not a huge load.

We're getting ten HTTP requests per second, about 20% of which are CGI requests... So that's fine. A Linode will handle that without any trouble. Would it be more efficient to do it with NGINX? Maybe, but this works, so I'm gonna stick with it. I'm not recommending that you go out and deploy this on your website, but if you want something quick and easy to set up that you can read in a couple of hours and understand, it's out there, and you're welcome to use it.

So I wrote it back around the year 2000. It's over two decades old. I've put it under -- it sort of lived in other version control systems for a while. I've split it out as its own project only just recently. So don't get the idea that I wrote it just recently; we've been using this for decades.

**Jerod Santo:** It says on the website that it's been in use since 2004, and NGINX was released in 2004. So I thought NGINX existed, but maybe when you originally wrote it --

**Richard Hipp:** Maybe it did exist, I just had never heard of it.

**Jerod Santo:** Yeah.

**Richard Hipp:** That's entirely the case.

**Jerod Santo:** Have you ever heard of "Not invented here" syndrome?

**Richard Hipp:** Yeah, and you could make the case that I have a lot of that in me. \[laughter\]

**Jerod Santo:** I think maybe it leads us a little bit into Fossil, but go ahead. Continue.

**Richard Hipp:** Yeah, well - I tend to write a lot of my own stuff, and maybe this is just because for me it's easier to write my own than to figure out how somebody else's works... This came up with SQLite version 1; we're on version 3 of SQLite, which came out in 2004. Version 1, the storage engine was GDBM, the GNU Database Manager. It was a key-value store. It was hashing-based, it was GPL-ed, so we needed something better, and I thought "Oh, well I'll get Berkeley DB and I'll use that as the storage engine." And I spent literally two days studying the documentation, trying to figure out how it worked... And the documentation is okay. But there were a lot of corner cases that I needed to understand, and I recognized that in order to understand these corner cases, I'm either going to have to read the entire source code to Berkeley DB, or I'm gonna have to write a bunch of test programs to see what it does really. And I thought "You know what - it's gonna be easier to write my own. I'll write my own storage engine." And so I did.

I got lucky that worked out well in the end, because having control of your own storage engine - it allows you to do optimizations and features that you couldn't do if you had to maintain compatibility to somebody else's API. So these sorts of things help a lot. With Althttpd I can do things on the website that I can't do easily with NGINX and Apache, because it does things that they don't do. So I can't really easily convert the website over to those now, because I have to recode it to the Apache/NGINX style.

**Jerod Santo:** \[00:28:21.04\] Do you have a for instance, like something that you can do there?

**Richard Hipp:** Well, with Althttpd there's no configuration file. You just point it to a directory that contains your content, and if the files in that directory are executable, they're CGI. And if they're not executable, they're static content.

**Jerod Santo:** Okay. So any executable file can live there. You can throw a PHP script in there, or a Ruby file, and it will just run it like a CGI.

**Richard Hipp:** It'll run it like a CGI, yeah.

**Jerod Santo:** That sounds kind of dangerous... \[laughter\]

**Richard Hipp:** So you don't put executables there that you don't want.

**Jerod Santo:** \[unintelligible 00:28:58.10\]

**Richard Hipp:** But the other thing is - it drops itself into a chroot jail. So the executables you put there need to be statically linked, because they're not gonna be able to find the shared libraries in /lib that they need. So you statically link them, and you put just a few that you really do need, like Fossil.

**Jerod Santo:** Like Fossil.

**Richard Hipp:** Yeah.

**Adam Stacoviak:** It's also got one use case too, which is your use case... So it can be that strict. Whereas main street might be like "That's kind of painful."

**Richard Hipp:** Right. But I've never tried to push it, I've never tried to publish it, I've never tried to get other people to use it... A few other people have downloaded it and used it and they say it's great... And if that works for them, that's wonderful. But I wrote it for my own use, and if nobody else ever uses it, it's still been a great job.

**Adam Stacoviak:** Yeah.

**Richard Hipp:** The other thing is - every now and then we get these very pernicious robots that come invading the website and trying to bring the server down... And because I control the web server, I can just put a little test in there that identifies the malicious robot, and whenever I see one, I call exit. \[laughter\]

**Jerod Santo:** Are you just detecting a certain request signature, or a user agent, or how do you do that? IP address?

**Richard Hipp:** It depends on the robot, yeah.

**Jerod Santo:** So you've been doing -- it's like a tower defense game you've been playing all these years.

**Richard Hipp:** Yeah, it's whack-a-mole, because there are always new ones coming up.

**Jerod Santo:** \[laughs\] Oh, I've played a lot of whack-a-mole in my day.

**Richard Hipp:** But there was one a few years ago that tried to pretend to be an ordinary web browser, but in the user agent string they misspelled one of the words...

**Jerod Santo:** Gotcha!

**Richard Hipp:** So I just looked for that misspelling in the user agent string, and if I see that misspelling - call exit. You're done.

**Jerod Santo:** You're done. \[laughs\]

**Adam Stacoviak:** Is there anything you've learned though along this journey? You've mentioned writing your own software. It may not be what everyone else might do, but is there any lessons you've learned in particular writing this web server, that you've been able to apply to SQLite, or to Fossil, which we'll talk about? What have you learned doing it that may be a lesson that you wouldn't have learned otherwise?

**Richard Hipp:** You know, I can't point to specific lessons. I do find that it does work well to control your own tools. If you do a diff between Althttpd and the web server that's built into Fossil, you'll find a lot of commonality there, because \[unintelligible 00:31:23.00\] heavily between the two. But what I've found is that when you control your own tools, you can go further and do things that you can't do if you're depending on somebody else for your tools. And I won't use Althttpd as the example, but rather Lemon, the parser generator that I use in SQLite. Most people when they're doing a language parser, they'll bring up Yacc or Bison. But I'd written my own version back in the 1980's, because I was dissatisfied with the interface for Yacc... And I used that for SQLite. \[unintelligible 00:32:01.05\] for open source for a long time and nobody noticed it until it appeared in SQLite. But by using Lemon as the parser generator, I was able to add new features to Lemon to support language features in SQLite that would just not be possible to do with Yacc.

\[00:32:21.01\] For example, we've just recently in SQLite added the "materialized" keyword. But suppose there's somebody with a schema out there and they've got a column named materialized. If that became a proper keyword, then suddenly when they try to read their database \[unintelligible 00:32:38.19\] it wouldn't be able to parse the schema because it was using a keyword as the column name. That wouldn't work.

So we have this feature in Lemon so that if it sees a keyword in a context where it thinks it needs an identifier, and it can't use the keyword there, it will change the keyword into an identifier and use it as an identifier. You can't do stuff like that in Yacc, but because we control the parser generator, we can pull little tricks like that and maintain backwards compatibility.

And we were also able to optimize the code generated by that parser generator so that it runs very fast, since a big part of the time for an SQL database engine is actually parsing the SQL.

**Adam Stacoviak:** I like that principle, because something I've learned over the years is certain jobs require certain tools, basically... And it's kind of what you're saying, but sometimes when you have the right tool, hard jobs become easy. And if you control your tool, then you can have the right tool to make a hard job easy, essentially.

**Richard Hipp:** Sure. Think back years ago, the concept of \[unintelligible 00:33:45.22\] they could make their own machinery and they could out-compete. If you had to buy your machinery from somebody else and it just came as is, you had to make do with whatever they had. But if you can make your own tools, you can fine-tune your processes and outcompete.

**Adam Stacoviak:** Well, it's not just the market being able to offer the tooling too, it's all the effort that goes into it. Survey the options, evaluate the options, test the options, deploy the options, maintain the options. And then if that thing doesn't suit a future need, re-evaluate the options and rinse and repeat the thing.

**Richard Hipp:** Yeah, you don't wanna make all your tools. I mean, I am using other people's operating systems and compilers...

**Jerod Santo:** What else though? You told us last time you wrote your own editor, so you go to that depth... Is there any tools beyond your OS and Bedrock that you do use and you're like "This is actually good enough for me. I like sed, or I like this browser..." What are some tools that you use that you don't feel compelled to write?

**Richard Hipp:** Well, I use commercial web browsers. I normally use Firefox, but I'll use Chrome or Safari on occasion as well, or some of the other ones, like Brave... I certainly use the standard compilers. Linux, Mac, Windows - I use all of those.

**Jerod Santo:** Did you write your own spreadsheet?

**Richard Hipp:** No, no. I use NeoOffice, OpenOffice...

**Jerod Santo:** \[laughs\]

**Adam Stacoviak:** Excel is actually really winning, even in enterprise today. There's a lot of stuff about people trying to overturn the use of Excel because of the way work has changed, and they can't kill it, basically. It survives.

**Jerod Santo:** Well, it's so malleable and powerful.

**Richard Hipp:** It's very powerful. I see a lot of people use Excel as -- they use it for making documents. It's not just a spreadsheet, it's a formatting engine.

**Jerod Santo:** And a database, you know?

**Richard Hipp:** \[00:35:45.02\] Yeah, and a database. Absolutely. So yeah, you use the tools that are appropriate, but I have my own text editor, I have my own web server, my own parser generator, my own version control system etc. I keep threatening to do my own email transfer agent, and I've actually put work into that, and that turns out to be a really, really hard problem. That's a harder problem than writing a database engine, actually, because of all the legacy you have to support... But I'm really dissatisfied with what we have available in terms of email systems. If you wanna host your own email, that's kind of hard to do these days.

**Adam Stacoviak:** It's super-challenging. It takes so much work to do that. We've actually just logged something - I can't think of all the details, but they were giving a walkthrough of how essentially to host your own email and all the things you would have to do, and I'm just like "No, that's just so much. It's just so much."

**Richard Hipp:** I've put an enormous number of hours into trying to come up with a single unified system that will simplify that in some way... I don't have anything to show for that yet. It's a hard problem. I'm still working on it.

**Adam Stacoviak:** Well, the cool thing though is that -- it's the law of numbers, essentially. If you keep writing your own tools... Sure, SQLite has been the winner of the tool, right? It's what you've built your company around, it's where you and your team get your livelihood from... But there may be the next big thing behind a tool you decide to make your own, you know? This editor - are you the sole user of it, or do your team members --

**Richard Hipp:** I think I'm the sole user, yeah.

**Adam Stacoviak:** Okay.

**Richard Hipp:** None of the other team members use it. They all use Vi or Emacs.

**Adam Stacoviak:** Yeah. But you never know, right?

**Richard Hipp:** You never know. And I never expected SQLite to go viral like it did. That was a complete surprise to me.

**Jerod Santo:** If I were you and I wrote an editor, I would name it Hipp. That's such a cool name for an editor, right?

**Adam Stacoviak:** Yes...

**Jerod Santo:** What's it called?

**Richard Hipp:** Well, I call it just the letter e, because it's easy to type.

**Jerod Santo:** \[laughs\] Okay...

**Adam Stacoviak:** It's Editor, yeah.

**Jerod Santo:** E for editor.

**Adam Stacoviak:** That's easy. E for easy. Easy does it.

**Jerod Santo:** I think you should release that thing and just let the world decide, you know?

**Richard Hipp:** Okay... \[laughter\] I think you'll be disappointed, but...

**Jerod Santo:** I'm very easily impressed. So you're not gonna tackle mail quite yet, because there's a lot there, but you did --

**Richard Hipp:** Well, I've been working on it, I just haven't had success at it...

**Jerod Santo:** Yeah, you just haven't gotten the tackle.

**Richard Hipp:** It's a tough nut.

**Jerod Santo:** But you have tackled, as we've said and teased up, version control, source control management, software configuration management... Fossil. Tell us the story of Fossil, because you've been working on it -- this is not a new thing; you've been doing this for a very long time. Not as long as SQLite, but they're kind of symbiotic. You're probably the only person since -- I don't know, did the Mercurial people hang it up at this point? Are they still working on Mercurial?

**Richard Hipp:** No, I think Mercurial is still viable. They're still making additions and releasing new features and so forth.

**Jerod Santo:** Okay, that's cool. So there's not just you versus Git, but there's lots of people that just Git has won the mindshare.

**Richard Hipp:** There's Git, and then there's Fossil and a bunch of others, yeah.

**Jerod Santo:** So tell us what existed when you started Fossil. Was Git there? SVN was probably the mainstay, maybe it was before this... Tell us the history.

**Richard Hipp:** Alright, so when I first started writing SQLite, everything was CVS. And I know that CVS has a bad rep with moderns, because Linus had some very bad things to say about it. And most of the criticisms of CVS are correct. It's not good.

On the other hand, I'm unwilling to say anything bad about CVS, because I had to use the things that came before. And if you've ever used the version control systems that came before CVS, you'd think CVS is really great, okay?

**Jerod Santo:** \[laughs\]

**Richard Hipp:** But yeah, it has its issues. So we started out with SQLite in CVS, because back in 2000 that's what everybody was using for everything. And that went on for a while, but I recognized that it was inadequate. And Git had just started to come out; it really hadn't gotten the traction that it has now. Mercurial was out, and it was still an open question, "Do I use Git or Mercurial?" And that was a big debate back then. This was before GitHub.

\[00:40:06.26\] I had been doing some work on SQLite with some avionics companies, and I'd come to understand this quality standard called DO-178B. This is a quality standard used in avionics, and I thought "Well, I'm gonna apply this to SQLite." And part of the DO-178B standard is version control, or source control management. And I looked at the requirements that they had, and in my opinion - which doesn't really count for much, but my opinion was that neither Git nor Mercurial really filled the bill here. And I thought "Well, I'm gonna do my own."

The other one that had influenced me was called Monotone. And Monotone, if you've never heard of it, as far as I know, it was the first version control system that was Git-like in the sense that it used SHA-1 hashes to name everything... And I was influenced by Monotone as well. But I wanted a version control system that would work easily from behind a shared hosting environment. This was before the age of ubiquitous virtual private servers. Back then, when you wanted to lease space on a server, they just gave you a shell account and you had your home directory and you put your stuff in your \[unintelligible 00:41:24.21\] And they ran Apache for you, and it just pointed to your directory, and did its thing.

So I wanted something that I could run out of a simple shared hosting account like that, and nothing was available... I wanted something that would meet the standards of DO-178B as I understood them, and there was nothing available, so I thought "Well, shoot, I'll just write my own." So I played around with it for a couple of years. I started working on it even before Git came out.

Then Git came out, and I kept working on it... And I think it was about two years after Git came out that Fossil became self-hosting. The same principle as Git, in the sense that you have immutable artifacts that get added in... And we were using SHA-1 at the time as well. And you've got a directed graph design, and you commit things to it, and other people can commit simultaneously, and everybody has a copy of everything. All that is all the same. Now, we have different names for things, but it works very much the same... But we have some very different concepts and a very different focus. Git is very much designed for Linux Kernel development. And if you're a Linux Kernel developer, Git is absolutely the best version control system in the world. It is perfectly designed for that role. But SQLite has a very different development environment.

With Linux you've got thousands of people around the world working on this simultaneously, and then they upload their changes, and it goes through the layers of review, and administration... And Linus does not want to see every check-in that's made by every hacker that wants to contribute to the kernel. He wants summarized and vetted patches to consider to go into the main line. And Git is not ideally suited for that, but SQLite development is very different. It's a small team, everybody knows each other, everybody sees everybody else's work all the time. And Fossil is very much optimized for that use case.

With for example Git, when you make some changes, you make your changes and then you push them up to somebody else... Where with Fossil, the default configuration is every time you commit a change, it automatically pushes your changes up, so that everybody else can see them right away.

**Jerod Santo:** Is it still distributed, or is it a client server?

**Richard Hipp:** \[00:44:01.17\] It's still distributed, but when you're on a network, it behaves as if it's a client server, because as soon as you do a commit, it immediately pushes your changes out to the server, if that server is available. So if your system catches on fire, you haven't lost anything.

I remember a few years ago that actually happened to Linus. A distro caught fire, or somehow went inoperable, and he lost a couple of days' worth of commits, or something. I don't remember the details of the story.

**Adam Stacoviak:** Wow.

**Richard Hipp:** You know, because he wasn't pushing it out to another server until they got ready. Whereas with Fossil that's kind of automatic; that would never happen. And which approach you wanna take I guess really depends on what you're trying to do and what your development style is. As it happens, the Fossil development style exactly suits what SQLite wants to do, and the Git development style exactly suits what the Linux Kernel wants to do.

So apart from those minor differences, they're really kind of the same thing. The storage is quite a bit different. Of course, Fossil keeps all of its data in an SQLite database. So Fossil was designed to control the SQLite source code, and it uses SQLite to store all of its information. So I'll let you and your listeners ponder that recursion later.

**Jerod Santo:** Yeah, it's kind of double self-hosted.

**Richard Hipp:** Yeah, there's this little loop here. But that's really worked out really well for us, because -- and I didn't plan this, it just worked out that Fossil has become a great dogfooding opportunity for me, because Fossil is a big user of SQLite. When I'm working on Fossil, I see SQLite from the point of view of a user or SQLite, not as a developer. And it's happened many times, where developers come to me and say "Oh, we need this feature. We need that feature", and I'm thinking to myself - I try to be nice to people, but I think to myself "Stop whining. You don't need this." \[laughter\] But then, a few weeks later I'll be working on Fossil and I'll see things from the application developer's perspective and think "You know, it really does need that after all", and then I'll go back and put it in.

**Adam Stacoviak:** And then apologize.

**Richard Hipp:** No...! Apologize? Never. Why would we do that?! \[laughter\]

**Adam Stacoviak:** \[unintelligible 00:46:27.24\] Just kidding.

**Richard Hipp:** Yeah, it really makes a huge difference to people to experience SQLite from the application developer's perspective. It changes your whole view. And in fact, it takes me about a day to switch between developing products, because I'm looking at the world from a very different lens when I'm developing SQLite versus when I'm developing Fossil.

**Jerod Santo:** So you can't context-switch back and forth very easily.

**Richard Hipp:** Not easily. It's hard. It's a big context swap for me to do that. I tended to spend days working on one or the other, rather than flipping back and forth between the two. So that's been a very good thing...

The other big difference I guess is Fossil does try to -- people talk about Git and Mercurial as they're distributed. Well, Fossil is distributed too in the sense that everybody has copies of all of the files. But Fossil is non-distributed in the good sense of the word. It's not just the source files that it controls, it also controls your bug tickets, your wiki, your forum, your chat room, and you can hyperlink between all of these things and it manages them all together. And it keeps everything in a single file on disk.

\[00:47:49.29\] So Fossil is non-distributed in the sense that you only have one place to go to find all of your tools and all of your files... Whereas if you're using another system, whatever that might be, you've got this system for version control, and "Oh, I'm pulling in the wiki from here, and I've got that..." and "Oh, we're using this bug tracking system, and we've got a separate web page for that..." You might have slightly different looks and feels. If you're using Markdown as your markup language you've probably got 3 or 4 different dialects of markup that get involved... Whereas with Fossil it's all together, it's all in one file, and there's one place to go on the web to see it all.

**Jerod Santo:** Yeah, so is that one file per project then?

**Richard Hipp:** One file per project, yeah.

**Jerod Santo:** Okay. So if I have two -- if I have a SQLite and I'm also working on a Fossil, they'll have separate files, the two projects' source code.

**Richard Hipp:** Yes. They are separate files. Now, Fossil does have a feature that it keeps track of all of your Fossil repositories. So one thing that I like about it is the Fossil "all" command. So if I'm getting ready to go off network, take my laptop off the network for some reason, I can go on my laptop and I can say "fossil all sync", and it'll go and sync every single repository that's on my laptop, pulling down all the latest changes. Then I can go off network, do lots of work on multiple projects, and then I go back on the network and do "fossil all sync" and it will again sync everything that's on that laptop, and push it back out to the cloud. So it does keep track of all of your repositories, but each repository is itself distinct.

**Jerod Santo:** And it's the way that it handles branching, merging, conflict resolution - would that all be familiar to Git users, or not?

**Richard Hipp:** That's gonna be familiar... It does have the difference that Fossil retains the names of the branches. That's part of the synced logic. So with Git -- I'm not sure how Mercurial works, but with Git... Git doesn't have branch names. It only remembers the names of the leaves of the graph, and it infers branches based on those leaves. Fossil actually names every branch, and every check-in, every commit, there's a tag on it that shows what branch are you a part of. That's part of the historical record. So everybody's talking at the same branch. With Git, if you've got multiple people working on the same project, everybody's got their own master, or main, or whatever they call it these days. But with Fossil, we use the term trunk. There's only one trunk, and if you talk about trunk, everybody's talking about the same thing. If we're talking about branch version 3.26.0, then everybody's talking about the same branch. So the branch names are part of what gets synced. But other than that, the whole idea is the same. You have separate branches, and people will go off and work on branches, and then we merge the branches on the trunk.

The thing is, because it's hosted with a relational database, we can follow branches forward in time, in addition to backwards in time. If you think about it with Git, if you know a check-in, it's really easy to find the check-ins that came before. But say you've bisected and landed on a check-in, or say a customer of the company says "Hey, we're having trouble with this check-in", you can't easily find out what came afterwards, what things were added to this check-in later in time. You have to go searching the Git log, or do some stuff like that... And the GUIs don't typically provide you with this information, because it's hard to find. Because the internal data structure - it has a pointer to the ancestors, to the things that came before, but there are no pointers going forward in time, because the check-in is immutable, and at the time of the check-in you don't know what's gonna come next. But if you store this information in a relational database, then you can create an index and you could follow that index forward in time.

\[00:52:07.20\] So given a point in time, we can see what's going on in all branches simultaneously, both forwards and backwards. It's a very powerful feature to maintain situational awareness. And I talked to Git users and they say "Oh, I don't need that. I've never used that." You know, fair enough... But I never needed bisect until I had the capability, and now I can't live without it. Once you start using this powerful feature of being able to see what comes next, what came after this check-in, it's hard to go back.

**Jerod Santo:** So you mentioned that GUIs don't make it easy... Does Fossil have a GUI itself?

**Richard Hipp:** Fossil has a built-in web interface... So if you're working from the command line, you can type just "fossil ui", and that will automatically bring up a web browser pointed at your repository. So it's got a web server running there in the product, and it automatically brings up your web browser and points it at the homepage, and then you can click down through that.

And the web interface -- I mean, Mercurial has the command "hg serve", which is a similar concept. But with Mercurial, "hg serve" doesn't automatically bring up your web browser; you have to type "hg serve" and then over somewhere else you have to type a URL into your web browser to get it going. And the web interface is not nearly as rich. With the Fossil web interface you can see everything you need to do. You can see all your tickets, you can see your wiki, you can get very detailed listings of branch history, and diffs, and blames, and all of this. So that is essentially your GUI, is the web interface.

And the nice thing is that then when you set up a server, if you want to, you don't have to have a server to use Fossil. You can do it peer-to-peer. But if you do set up a server, you have the exact same interface on your server; you run the same web interface and you get exactly the same views on the server as you do on your local machine.

And the way it's set up, when you do "fossil ui" it's got a little mini web server running locally, but you can also run it from CGI, or SCGI, or whatever hosting mechanism you prefer. Same interface either way.

**Break**: \[00:54:24.13\]

**Jerod Santo:** So hop us back to the branching and merging, if you don't mind... One thing that I do often is throw stuff away.

**Richard Hipp:** \[laughs\] You've hit the point of contention, haven't you?

**Jerod Santo:** \[unintelligible 00:56:09.19\]

**Richard Hipp:** \[unintelligible 00:56:10.03\] Yes, so I wrote this famous article called "Rebase considered harmful", which has created a lot of ire amongst people. It is a difference in philosophy, and I try and understand other people's point of view, and I have come to appreciate the rebase point of view more as people have pushed back... So a lot of people use Git not so much as a version control system, but as a distributed versioned file system. The difference here is subtle, but... Yeah, if you're doing a distributed versioned file system, oftentimes you'll want to delete files, which is kind of what Rebase or throwing things away does. And if that's what you're doing, that makes sense, it really does. But my view of version control, which came out of this DO-178B document that I referred to earlier, is that you always keep everything. There's no way to delete stuff. Now, you can shuttle stuff off into a branch that's labeled "mistake" or something if it doesn't work out...

**Jerod Santo:** Mistake 1, Mistake 2, Mistake 3...

**Richard Hipp:** We have lots of that. One of the things is because it's a relational database backing it up, it's okay to have multiple branches with the same name. Now, that can get confusing to humans, but the database doesn't care. It's really cool with that. So we have lots of branches named "Mistake", actually.

**Jerod Santo:** \[laughs\]

**Richard Hipp:** And you can move stuff onto a branch after you've checked it in. You can attach -- and you do this without changing the check-in in any way. You just add a new tag to that check-in that says "Oh, I want you in this branch, not the one I put you in."

So that happens a lot - we'll put something up there and it's like "Oh, that was a booboo. Let's move this off into the Mistake branch." And if you go searching on the mistake branch, you'll find lots of entries there.

**Adam Stacoviak:** Or just call it Trash.

**Richard Hipp:** You could call it Trash. Call it whatever you want.

**Adam Stacoviak:** Yeah. It's the trash can.

**Richard Hipp:** Yeah. Call it whatever you want. You can also add a tag to these check-ins that say that they're hidden, so that they don't show up on normal timelines and things. Now, you can still dig in and find them if you're doing forensic analysis, but they would be hidden from common view. So this is just a difference in philosophy, is that we believe in keeping everything, and this is gonna store all of history - the good, the bad and the ugly.

**Adam Stacoviak:** There was a situation I saw with Git in particular, which maybe in this case would be bad... That someone had actually included copyrighted code into an open source project., and they were faced with litigation, essentially. Or at least the threat at that time. And so they had to go into the Git repository and perform \[unintelligible 00:59:03.20\] which required experts and people who could go through -- you know, all the different things, essentially. More than your average Git user would do.

**Jerod Santo:** You need a Git witch doctor who knows the incantation.

**Adam Stacoviak:** Yeah, the witch doctor. Somebody who really knew Git.

**Jerod Santo:** Exactly.

**Richard Hipp:** We do have that capability. It's a system called shunning. You can shun artifacts. So if someone made checks in something that is, say, copyrighted, and you get sued, or... You know, a developer goes rogue and checks porn into your repository...

**Jerod Santo:** Or a private access token, or something...

**Richard Hipp:** Whatever it is, you can go back and shun it. And it's the same drill where you need to bring in somebody with a large amount of Fossil foo to make this happen... But it does happen, and we actually have had to do it once or twice. But it doesn't come up in your daily routine.

**Adam Stacoviak:** But it's possible, is the important thing.

**Richard Hipp:** \[01:00:01.05\] It's reserved for emergencies such as the one that you--

**Jerod Santo:** Yeah.

**Richard Hipp:** So it really depends on the development style. I really push for "Look, record everything. Disk space is cheap." Other people say "Well, I want to work by myself and get everything perfect, and then once it's all perfect, then I will push it up so that everybody else can see it. I'm gonna argue that that's not the best way to do it. I think that you need to have the humility to push up your mistakes, as well as your successes.

**Adam Stacoviak:** It makes at a performance, really, right? A pull request can be a performance, right?

**Richard Hipp:** Yeah.

**Adam Stacoviak:** You've done all the work, you've prettified this thing, you've put up this great pull request, you've explained it very well, and it's a presentation... And it can be very performative in that case, where it's like "I'm gonna perform for my team, rather than be who I really am potentially, the one who's bumbling and making mistakes..." And maybe that mistake was actually a smart thing. Or a really dumb thing. You never know. But it can essentially inject the requirement of performance in the flows of things.

**Richard Hipp:** And my view is I'm very much opposed to that, because I would get sucked into that trap very easily, because I want to always make myself look good. So Fossil is somewhat designed to force you to show your mistakes as well as your successes... Which is important to me. I have to do that for myself.

**Jerod Santo:** Sure. I don't think that's quite so much as an ego thing or a performance as it's signal versus noise. I mean, why would I wanna give you all my noise, when I could just hand you my signal?

**Richard Hipp:** If you're doing noisy stuff, you can do that off in a branch, and then once you're ready to blend with your co-workers, then you merge it into whatever they're working on. And the good point there is if you go on vacation for two weeks, or something happens to you and you land in the hospital for a few weeks - I hope that never happens, but it could - because it's on a branch and it's being checked in and synced, your co-workers could be like "Oh, what was Jerod working on? We've gotta take this over for him while he's recovering", and they can do that. Whereas if it's in your own little private branch, it's kind of dead for a while.

**Jerod Santo:** Yeah, I've definitely seen that meme, in case of fire, where it's like "Git push, then run out of the building" kind of a thing... \[laughter\] Right? And that wouldn't happen with Fossil, because everything's out.

**Richard Hipp:** That's right. When the fire alarm goes off, first type "git push", then exit the building immediately.

**Jerod Santo:** Then exit the building, yeah.

**Richard Hipp:** \[laughs\]

**Jerod Santo:** I've definitely had those moments where I'm like "Dang, I actually haven't pushed for a few days. I should go do that before my laptop dies and I regret it." I've had those feelings. So I like that about Fossil. I definitely would like to not have that feeling. But I do also think there's value in maybe the -- I wouldn't call it the privacy, but the cheapness of being able to just sling, and then be like "This doesn't have to ever go anywhere." Because maybe it's not gonna go anywhere.

**Richard Hipp:** Yeah. In fairness, I think yours is the majority view, sure enough.

**Jerod Santo:** Yeah, I think it is.

**Richard Hipp:** But there's enough people out there that like my way of doing things... We have a small, but devoted following.

**Jerod Santo:** I believe that. I like how everything's built in. I think it's more difficult to buy in as a user because there's so much. Maybe I love Fossil's single-file model and the things you're talking about, but I really hate the wiki. Or I really don't like the chat.

**Richard Hipp:** You know, here's the thing - and I encourage people to do this... I wrote Fossil for SQLite. And if it accomplishes nothing but support SQLite, it's achieved its mission, and it's done that very well. And any other usage is gravy. So look, even if you wanna keep using Git, I'm fine with that; you're not gonna hurt my feelings in any way. But it's worth it to you to study what we've done, and look at the ideas, and then take these ideas and move them to whatever other version control system that you're using... Say "Hey, they had this cool idea over here. Why can't we do this in GitHub, or GitLab? Why doesn't GitLab support this?"

**Jerod Santo:** \[01:04:08.03\] Right.

**Richard Hipp:** That will make your experience better, but maybe blend it with your workstyle.

**Adam Stacoviak:** That was my next question, was like how do you take some of these features, or really just ideas, and transplant them to the Git world, essentially? ...GitHub, GitLab. Because it seems like something that's happened, I think, with GitHub or GitLab and these centralized repositories, these places where a lot of people congregate, essentially - which is great for the progression and innovation of our own software. We've seen a massive uptick in innovation because of GitHub over the last 12 years, or more even. I think they're 13 years old. If they wanna use Fossil, or even they believe in your ideas, they've gotta essentially ostracize themselves, eject from the social norm of where to code, and how do you share that code back to, I suppose \[unintelligible 01:05:03.06\] Or I guess you could do mirrors, right? You could run Fossil locally and do mirrors with GitHub, or something like that, I guess, if you wanted to...

**Richard Hipp:** Yeah, we have a GitHub mirror for SQLite that's completely automated. Every time somebody commits, it automatically goes into GitHub. And it's a funny thing, we do that for a client that is not actually using Git, but all of their import infrastructure assumes that everything's on GitHub, so... \[laughs\] So we export to GitHub and then they import from GitHub into their own proprietary version control system and use it from there.

**Adam Stacoviak:** Right. You don't have to get that give that world up then. You can live in the Fossil world... Except for it's -- how many letters then? F-O-S-S-I-L - that's six letters.

**Richard Hipp:** A lot of people abbreviate it with just F, or something...

**Adam Stacoviak:** Yeah. Well, you said E for your editor. I'm assuming F for just Fossil, right? You know, F push...

**Richard Hipp:** I guess you could do that. Or fx, or something... People use different things. The key differentiator, I think, and one of the things that's really helped us to innovate in Fossil is the fact that it's backed by a relational database, whereas Git is backed by a bespoke key-value database, the packfile. And because it's a key-value database, it limits what you can do. So my idea is that - look, you could back that relational database into Git by just making another file in the .git directory. And whenever you wanna use this relational database, it would look at the Git log and say "Well, what's happened since I was last updated?" and then it would have to go back and "Oh, there's been three new commits since then. Let me pull those in and parse out all the information I need and build up my relational tables from that", and then let you use the database. But it would be completely backwards-compatible, it would not change anything; it's just adding a new file to the repository.

And then once you had a relational database in Git, you could very easily do things like, say, what check-ins came after this one? It would completely eliminate the whole question of a disconnected head. You would never again have a disconnected head, because it would all be finable using the relational database.

**Adam Stacoviak:** Richard, what if Nat Friedman was listening to this show right now, and he's like "You know what - I like these ideas. I wanna hire Richard. I wanna borrow him, borrow his ideas."

**Richard Hipp:** Well, he couldn't hire me. We could certainly talk and I would certainly be happy to give him these ideas and say "Run with them, and you do not need to give me credit." I would thrill if Git, or GitHub, or something would improve the usability so that people could be more productive. I'm not gonna move off of Fossil. It's ideally designed for the SQLite development environment. But if these ideas can be imported to other design methodologies, then that would be great.

**Jerod Santo:** \[01:07:55.19\] So there's a fella named Patrick DeVivo, who has a website askgit.com. He has done a lot of work around -- basically, I think he is retro-fitting a relational database around a Git repository's history. He allows you to basically query Git as if it was SQL. And I haven't looked at how he's doing it; I think he might be doing exactly what you're describing, but... I think the power that you're describing in having a relational database on your source control history would allow for a lot of interesting mining and visualizations and connecting of the dots that you're describing. And he's doing some of that with Git, but he's having to add tools in order to provide that kind of a thing.

**Richard Hipp:** Sure, sure. But once you get the relational database there, innovation tends to happen... Because it's like "Hey, we need a wiki. Well, shoot, we've got this relational database. We'll just stuff it in there."

**Jerod Santo:** Right.

**Richard Hipp:** Or we need a forum. We'll just stuff it in the relational database. It's sitting right there, we'll just use it.

**Jerod Santo:** \[laughs\]

**Richard Hipp:** If you build it, people will come.

**Jerod Santo:** Yeah.

**Richard Hipp:** And lots of interesting things will happen if you were to do something like that. You could even use a different relational database other that SQLite and you won't hurt my feelings. Use DuckDB if you want to; you're not gonna make me mad.

**Jerod Santo:** So one thing you did different with Fossil - we touched on it at the beginning of the show - is that you didn't go public domain, you went BSD style license. Was that a reaction to something that happened with public domain, or why did you decide to switch? Because it's still very permissive, but obviously it's less permissive that public domain.

**Richard Hipp:** I started out GPL, and early on, within a year, I got requests from proprietary people, "Hey, we wanna use this behind a firewall, and our lawyers say we can't use GPL because of the viral nature of it." And you can argue that that did make sense there, but you know, it's easier to change the license than to argue with lawyers...

**Adam Stacoviak:** Hah! Truth...

**Richard Hipp:** So I got everybody who had contributed to that point -- at that point there hadn't been that many contributors, and I got everybody to sign a release to BSD, so we relicensed it to BSD. And that just allowed more people to use it in different ways. Public domain turns out to be hard to do. I didn't realize this when I started SQLite. I thought public domain would be really easy; just say "It's public domain" and we're done. But there are many jurisdictions that discourage that, or don't recognize that, and I didn't know this at the time. And there's actually a lot of paperwork that you have to go through to release your code to the public domain, whereas we have the standard CLA (Contributors License Agreement) for people to contribute to Berkeley, a BSD style license. It just worked out better to go with a traditional BSD style license than trying to public domain again.

**Adam Stacoviak:** Is it possible SQLite will change to non-public domain considering that, or...?

**Richard Hipp:** No, and this is just force of tradition and legacy. I think that it's always been public domain, and we're gonna keep doing it that way, just because at this point it's too late to change... \[laughs\] Maybe if I'd known in 2004 what I know now -- or I guess in 2002, when I did this... If I'd known in 2001-2002 when I did this what I know now, I would have done it differently, but... No, we've got too much legacy behind it now. It's 20 years of tradition in the public domain, so we're gonna do that.

I even went through the trouble of -- there's a set of standard licenses, and they have codes... I forget what it's called. But I got the software blessing that is the head of every SQLite source code file, I got that registered as one of the acceptable licenses, so that the automated tools for scanning things would see this and say "Oh, that's okay. We can accept that."

**Jerod Santo:** \[01:12:00.22\] Nice.

**Adam Stacoviak:** Actually, \[unintelligible 01:12:00.20\] which really made it challenging for a maintainer to maintain the software. Eventually it went by the wayside... And it actually had a massive change in, I guess, their contribution and others' to it because of the whole "What is good, what is evil?" It seems black and white in terms of opposites, but it was just difficult to actually put into practice.

**Richard Hipp:** Yeah, and the blessing on SQLite is not a requirement, it's literally a blessing. It says "May you do good, not evil." It doesn't say "You must." It's different there.

**Adam Stacoviak:** True. Good point.

**Jerod Santo:** It's like grace versus law there.

**Adam Stacoviak:** Yeah.

**Richard Hipp:** There you go. Absolutely.

**Adam Stacoviak:** Well, one thing you do say in regards -- back to the license, you said "You are free to steal bits of the Fossil source code to use in other projects, including proprietary projects." So that means that you're not really holding these ideas to you. Others can use these ideas, essentially.

**Richard Hipp:** Absolutely. I encourage all the people to use it.

**Jerod Santo:** So let me throw a startup idea at you and you tell me if it's good or bad.

**Richard Hipp:** \[laughs\] You're asking the wrong person, but I'll give you my opinion.

**Jerod Santo:** Okay. It's one word, three syllables. FossilHub.

**Richard Hipp:** You know, there's this thing that's already been done, it's called -- why can't I call the name of it? Chisel.

**Jerod Santo:** Oh, it's a good name.

**Richard Hipp:** And it's hosted by Roy Keene. But the thing with Fossil - it's really designed for self-hosting. We make it really easy to set up your own Fossil server on a $5/month VPS or on a spare Raspberry Pi that you have lying around. It takes very little hardware to run Fossil. I know some of these other systems, they say "Oh, you've gotta have at least a $40/month VPS in order to support this, it's so heavyweight." But it's very low resource. So you can just plop this up there. It's a single executable, you plop it on your machine... A two-line CGI script gets it running, and it just does everything for you.

So the motive for having a service like GitHub for Fossil is greatly reduced. Because if you were to just take raw Git or raw Mercurial and wanna set up a collaborative development site like GitHub, that's a lot of work. GitHub provides a very valuable service. With Fossil, the amount of work to set this up is greatly reduced, and so the need for that is also greatly reduced.

Now, what people have told me though is that for some people who live in other countries, coming up with $5/month in hard currency for a VPS is a hard problem. And for them, having access to a free repository like that is a big deal. But for those of us who are fortunate to live in the U.S, or other Western countries, it's probably easier just to set up your own.

And let me just -- I'm coming back to this subject, but think with me just a second... If you talk with people that like to go backpacking - do you like to go backpacking yourself, or do you have friends that do that?

**Adam Stacoviak:** Yeah.

**Richard Hipp:** You go out in the wilderness, and you're on your own for five days, and people ask "Why do you do that?" And people say "Well, it's the freedom. \[unintelligible 01:15:33.23\]" Think about this - freedom means taking care of yourself. That's what people like about backpacking and wilderness adventures. They go out and they're responsible for themselves, every aspect of their lives. They're carrying their house on their back, and all of the food. That's what they like. Freedom means taking care of yourself. And Fossil tries to promote that. It gives you the tools to make it easier for you to take care of yourself, because you can take this one standalone binary, plop it on a server, add a two-line CGI script, and suddenly you've got a complete developer website up and running. Can you do that with other systems? Absolutely, but there's a lot more moving parts and a lot more you have to install and a lot more to maintain.

**Jerod Santo:** \[unintelligible 01:16:20.00\] pretty cool.

**Richard Hipp:** \[01:16:23.12\] Think of Fossil as your ultralight backpacking tent.

**Jerod Santo:** There you go.

**Adam Stacoviak:** Camp anywhere.

**Richard Hipp:** It's not as nice as a \[unintelligible 01:16:31.17\] but you're taking care of yourself.

**Jerod Santo:** There's your new tagline: "Fossil. Not as nice as the \[unintelligible 01:16:38.27\]." \[laughter\] But you're taking care of yourself.

**Richard Hipp:** Taking care of yourself.

**Jerod Santo:** I like it.

**Richard Hipp:** That's the essence of freedom, is taking care of yourself.

**Jerod Santo:** Yeah... But there's also -- balancing that out as community, I think. A thing that GitHub has, that's even (I think) better than Git, more powerful than Git, is the hub part, right?

**Richard Hipp:** Yup.

**Jerod Santo:** And everybody -- I'm gonna use your analogy and kind of abuse it, to a certain degree... Everybody wants to climb a mountain, but eventually they come back down to the base camp. You said backpack, now we've got a base camp.

**Richard Hipp:** Yeah. \[laughs\]

**Jerod Santo:** You wanna hang out with people, and you wanna see what they're doing... Is there any way with Fossil to at least federate or have a directory of like "Here's my Fossil instance. Here's Adam's Fossil instance; he's out there, over there. Let's get together and collaborate." Because that's what I think -- I think that's the magic on GitHub.

**Adam Stacoviak:** Yeah, federation is interesting, Jerod.

**Richard Hipp:** Sure. I agree with you. Now, if you talk to the people at GitHub, they will be quick to tell you that their company is not about Git, it's about Hub.

**Jerod Santo:** Yeah.

**Richard Hipp:** Absolutely. And I agree, 100%. It's a place for people to gather and collaborate. And they're quite open about the fact -- well, they started on Git, but they've stayed with Git simply because that's what everybody uses. If Git were to vanish tomorrow and everybody were to go to Mercurial or Monotone, GitHub would change, but it would still be the same company because it's about the hub.

**Jerod Santo:** Yeah.

**Richard Hipp:** So yeah, I think it would be really cool if GitHub allowed you to have Fossil repositories.

**Jerod Santo:** Yeah.

**Adam Stacoviak:** That would be interesting.

**Richard Hipp:** I don't think that'll happen, but... \[laughter\]

**Adam Stacoviak:** How would that work then? Cast some vision for how that might work. How could you have a repository on GitHub that was not a Git repository? What would it take to make that happen behind the scenes?

3 I don't understand their infrastructure enough to really say, but I know that SourceForge allows different kinds of repositories, don't they?

**Jerod Santo:** Yeah.

**Richard Hipp:** How do they do that? I'm not sure. I think you can actually have Fossil repositories on SourceForge, if I'm not badly mistaken. I've never done that myself. The underlying data model of Git and Fossil is the same. You've got commit objects, and you've got file objects, and the commit objects link together to form a directed graph, and you walk the graph to pull out the pieces you need. So the underlying data model is the same. Now, the details of the file formats are completely different, but the overall concepts are the same. So it seems like you should be able to use the same infrastructure to build a GitHub with Fossil.

**Jerod Santo:** Yeah, you probably have to introduce an abstraction layer somewhere in there that says "Here's my interface, and I'm gonna put Fossil on one side of it, and Git on the other", and it's gonna unify to what their frontend does.

**Richard Hipp:** Exactly.

**Jerod Santo:** Frontend not meaning their web UI, but everything that's in front of that layer. So there'd be some work involved, but...

**Richard Hipp:** Yeah, a lot of work, which I think is why it'll probably never happen, but...

**Adam Stacoviak:** It would be just as easy then to fossilize Git, right? To borrow some of the ideas of Fossil that you talked about - the relational database... Some of the different principles and practices that you live upon, that if they agree, might carry over. Maybe you make the backwards and forwards history... Because how many times do people get stuck behind some Git issues... That seems to be solved by some of the things you've made simple with Fossil.

\[01:20:22.02\] Or the running out of the building on fire, git push, you know what I mean? There's certain things, like streaming the Git repository to GitHub, or whatever. There could be some ideas that you've laid claim to that could be translated. Fossilized Git maybe.

**Richard Hipp:** I think that would be a better solution, because what I hear a lot is people going "Fossil is really cool, but it doesn't have Rebase." That's the number one complaint. Well, just take the cool features out of Fossil and land them in Git, and then you've got Rebase. \[laughter\] And all of your old tools continue to work. All of your build infrastructure that depends on Git continues to work as it did before, but you've got cool features, like "git ui" and it brings up a web browser, and points it at your repository. It gives you a cool timeline. Or "git all sync", that goes around and finds all of your Git repositories and syncs all of them.

**Adam Stacoviak:** That would be cool, honestly. You essentially, at a repository level, for most commits -- I mean, every commit, really; unanimously across all of your Git repositories inside of your code directory, which I think is probably standard for most developers. You've got your Home directory, your User directory, and you've got a directory in there called Code, or Source, or something that you put all of your source code in. Then you've got multiple directories beneath that, which are basically individual repositories... But my Git doesn't know about any of those other things. It just knows about its own single repository.

**Richard Hipp:** Right. And wouldn't it be cool to be able to sync them all with a single command?

**Adam Stacoviak:** Yeah.

**Richard Hipp:** That'd be really cool... Especially if you're going off network. There's nothing worse than getting on the airplane with no Wi-Fi and suddenly remember "Oh, I failed to sync the one key repository that I need to make this work."

**Adam Stacoviak:** And you can't work for those four hours, or whatever it is...

**Richard Hipp:** Exactly.

**Adam Stacoviak:** It's like "Well..." It sucks to be that person, for those four hours.

**Richard Hipp:** Yeah. So I think that would be a great way to move forward, I really do. And I'm happy to contribute ideas to anybody who wants to undertake this. Anybody who's listening to this who wants to build these -- go look and see what Fossil has. You don't have to agree with my view of how things should be done, but look at the ideas and steal them. You don't even have to give me credit.

**Adam Stacoviak:** Fossil-scm.org, if you're listening... It'll be in the show notes, of course, but that's a good place to start. Yeah, take the ideas and run with them. I love it.

**Richard Hipp:** Let me just throw this out here - a year ago we used Markdown. Markdown has become the de facto language for documentation and so forth. I needed to draw diagrams in my Markdown documents... You know, stick diagrams, architecture diagrams and stuff. So I took the legacy language from the 1980's Bell Labs called Pic, and I created my own implementation of it that works on the web... And it's called Pikchr. So in the middle of a Markdown document you can have just a little bit of code that does these elaborate diagrams. It's a really cool feature.

Pikchr was originally written for Fossil, but I've put it out in a separate repository which is mirrored on GitHub, with the hopes that other people who have their own Markdown engines would pick it up and integrate it into their Markdown implementations as well. It conforms with the Markdown standard for fenced code blocks, so it's not a language extension, it's -- well, it's an extension in the sense of it's an allowed extension that's specified in the Markdown documentation. So if you wanna look for ideas, please look at that. I wish you would adopt it.

**Adam Stacoviak:** Yeah. Well, Richard, it's good having you back. It's been too many years, I think... I think we should make this more frequent, if possible.

**Richard Hipp:** Sure.

**Adam Stacoviak:** I like just hearing your ideas; I love hearing really I think your spirit, the programmer spirit I think you bring, and the freedom you bring, the ideas you bring, this aspect of freedom, this aspect of blessing... Just this aspect of giving, really. I love that about who you are, and I appreciate all that you've given this world, and all the ideas you've shared here today... And it's been awesome. Thank you.

**Richard Hipp:** Thank you for having me on the show.
