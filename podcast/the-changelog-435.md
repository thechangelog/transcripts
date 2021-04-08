**Jerod Santo:** So I'm here with Matt Patterson. M. E. Patterson, if you're a fan of highly-graded horror and science fiction novels; you may know him as M. E. Matt, thanks so much for coming on the Changelog.

**Matt E. Patterson:** Hey, thanks for having me.

**Jerod Santo:** Happy to have you. Today, we're here to talk about a fascinating article which you wrote for A List Apart recently, which is sort of predicting where you think this whole web dev thing is going, which is a common topic we like to take up from time to time. We recently had Amal Hussein and Guillermo Rausch on the show, talking about the future of the web, and I think your opinion differs from them, so I was like "Oh, this is a very interesting opinion." A lot of those topics are about prerendering, about JAMstack, about the edge, and CDNs, and where they think things are headed... But you have kind of a different idea, which has been percolating for a while. Happy to hear about it.

First, tell us some of your personal history in web development. You've been doing this a very long time, is that right?

**Matt E. Patterson:** Yeah, it's been a while... I actually -- this will date me, but I graduated college during the dotcom bust...

**Jerod Santo:** Okay.

**Matt E. Patterson:** ...which was a fun job market to jump right into. But I actually started out my career doing stuff all the way back to Cold Fusion, I did about six years of PHP development, I bounced around from company to company, different little startups that flamed out, that were doing all sorts of different things, from publishing, to hardware, to video games, and then I've been in the education space for quite a while too actually, at two different higher ed institutions.

I took up Rails around about 2006, which I think puts it right at about the 1.0 release, and I've been a Rubyist and a Rails developer since. I've also done a fair amount of Python, some machine learning and AI stuff, some of which I do for my current job with Texas State Technical College... So yeah, I've been building web software for quite a while.

**Jerod Santo:** Yeah. And you have seen a lot of tools and techniques come and go, and the trend cycles, and all those kinds of things... So an interesting perspective to share, for sure.

**Matt E. Patterson:** Yeah, yeah.

**Jerod Santo:** So this post you wrote is called "The Future of Web Software is HTML-over-WebSockets." And in that you do give a brief history of some of the web development techniques over the years. You started in 2005, so we have your personal history... But give that a brief rundown - what you have seen happen over the last (I guess it's been) 10-15 years of people trying to improve our processes of making web apps.

**Matt E. Patterson:** \[00:04:08.06\] Yeah, I guess you could start at like the two biggest sides, which is we started with the notion that everybody's computers were too weak to do anything of real use, and so we had to have big servers, and you connected to these big mainframes... You can go all the way back to the "micro-computer days", in which everything was served from the server, and all your computer really did was just show stuff on screen.

Today, where there's been an increased push to move everything into JavaScript, and effectively push all of that onto the memory and CPU of the client computer to do pretty much as much computation as we can get away with up there, with the server really relegated to doing what's necessary to maintain persistent data and push things up via APIs, Rest, GraphQL, whatever you wanna do.

**Jerod Santo:** Right.

**Matt E. Patterson:** So along that time, a lot of the stuff that I've seen sort of changes how much we sort of waffle back and forth between those two sides, how much do we push to the front, how much do we keep in the backend... And I've seen that pendulum kind of swing back and forth a little bit.

**Jerod Santo:** Yeah, it's funny - whenever I hear about static site generators, I remember that when I first got into the game, which was in the 2004-2005 time range, blog engines were static site generators. The first one was a Perl engine that basically took your stuff and splattered out some pages... And everybody thought that was so lame, because dynamism was the deal. So when I went from -- I think it was called Blogsome \[or Blossom\], so this Perl engine that could generate a blog, and I've found WordPress, I was like "Wow... WordPress has dynamism." Dynamic backends, a CMS - all this stuff you could do... And I could change the way my page rendered on the fly, depending on logic - depending on the client, depending on the time of day, signed in/signed out, all these things. And everything went server-side, to a certain degree; server-side rendering.

And this was probably in the timeframe that Rails emerged, and said "Here's a way to doing that well. Let's do convention over configuration, let's make it as easy as possible on the web developers, so they can be productive etc." And then over time that became passé, and SSGs have lots of benefits; static sites have lots of benefits, especially around peace of mind of your site not going down... With at least the prerendered HTML. So people started heading back in that direction, and single-page apps became a thing, because now we have all these tools, we have all this functionality inside the browser, and our clients are getting smarter, like you said.

Smartphones came about, every year the iPhone's CPU got better and better, and Android shortly behind it, and people started putting more and more stuff into the clients... So what did we find though? Because one of the things that you say in this article is we do a lot of work to get that single-page application going. So what we've found was what - was dragons? Some people still think SPAs are the way to go, and I think in some circumstances they may be... Everybody's situation is different, but what do you think goes on with a single-page app that many people don't expect, or what they find as they get going into it?

**Matt E. Patterson:** Sure, yeah. And a caveat here - I've never been the sort of guy to say there's one tool to rule them all...

**Jerod Santo:** Sure.

**Matt E. Patterson:** \[00:07:46.29\] ...or one web framework and no one should look at anything else. I've certainly done a couple in my time; I've built SPAs, I've done React, I've done Ember... One of the lenses that I look at this through a lot, especially at the point that I'm at in my career, is beyond just what's good for an individual developer building some software by themself, what's good for a team of developers that's working for a business, or in my case a non-profit? ...that have a goal that they're trying to meet, whether that's a revenue goal, whether that's getting their unicorn off the ground, or as in the case of \[unintelligible 00:08:23.27\] actually getting more people better jobs.

The faster you can get to that goal, the faster you can outrun your competition, the faster that you can solve the societal problem that you're hoping to solve... And if you're leaning on the technology simply for the sake of leaning on that technology, and you're not taking a hard look at how does this enable the people that I've hired to move as fast and as powerfully as they're capable of, then I think you're missing an opportunity.

Now, that said, there's plenty of developers out there who can take the current SPA frameworks and churn out some amazing products really fast with them. I'm certainly not trying to say that this is a failed technique that can't be used to do anything useful. Obviously, it's great. But I think it's worth sometimes taking a step back, especially if you're a startup, especially if you're trying to run lean and look at "Well, do we need to be building effectively two apps, oftentimes in two repos, and then glueing them together with JSON being serialized and deserialized back and forth, and then all of the state management issues in terms of managing how you keep your frontend state data store in sync with your backend database? Do we need to bite off all of that to achieve what we're actually trying to achieve as a piece of software?" In some cases, sure. Yeah. But in a lot of cases, I think what yo're seeing now -- and you see this throughout the years in this industry, which is the problems that Google and Facebook and others say "Here's our problem and here's how we solved it", then the next thing you know there's a three-person startup solving their problems that way, and maybe that's not necessarily the right choice for that startup.

**Jerod Santo:** Yeah...

**Matt E. Patterson:** And I think that's where you're starting to see some of this interest in things like the JAMstack, and approaches like that where "Hey, maybe we don't even need to build that complicated of stuff to solve our particular problem."

The article that I wrote, partly what I was interested in getting out there into the community and talking about is does this new over-the-wire over-WebSocket approach provide us a way to go back to the quick prototyping of server-side-rendered apps, while still keeping the power of a really dynamic user interface?

**Jerod Santo:** Yeah, there's an interesting debate or spectrum that people talk about with regard to what they call developer ergonomics versus user experience, or thinking about the developer first or end user first... And there's a lot of push and pull. And I will admit, there's definitely some trade-offs there, of like "Who am I optimizing this for? Is it for the developer to move fast and be happy, and all these things?" which is really at the essence of Ruby, was the developer happiness, from the very beginning, that Matt started, and Rails, of course, was all about productivity from the very start... But then also thinking about the user first and putting their priorities first over the developer's.

And while I do see a tension there at times, where like if you're merely thinking about yourself as a developer and you aren't thinking as much about the user, you can sacrifice them for yourself, for example, shipping them a whole bunch of JavaScript, because it's just easier to pull in one more library than it is to maybe write 3-4 functions yourself that are difficult to write... Or whatever it is; this is just for one example. But there's no doubt that, to a certain degree, developer happiness and ergonomics and productivity produces user experience, produces features... Because like you said, speed is important, in both contexts - both the speed of the application, but also the speed of how fast you can put new ideas into the world really does matter.

\[00:12:21.04\] And a lot of these things don't go from "Well, I can do it as a developer, but I'm not happy" to "I can do it happily." It's like the difference between "I can accomplish this" or "I cannot accomplish this." At the bottom line, that affects your end users more than anything else... Like, "Well, I don't have the skills to build this particular thing; I'm not gonna be able to do it" versus "I can sacrifice a little bit here and pull it in." So... Definitely trade-offs to be made.

**Matt E. Patterson:** Yeah. One of the things that got me so excited when I started digging into using Stimulus Reflex on Rails and this new HTML over the wire approach was that I realized almost immediately I can build features that I have purposely put off building in numerous prior apps, because I thought "Gosh, that's gonna be a big, complicated mess to make that work." Especially when you get into the realm of things like multi-user collaboration.

**Jerod Santo:** Totally.

**Matt E. Patterson:** Google Docs are amazing, in that you can sit there and edit a document with someone else... I've never had a desire to actually try to build a multi-user document collaboration tool, because I understood just how complicated that was, and how to shake out all the bugs and the edge cases around that. But with this approach I can actually see a way to that that's much more straightforward, and that's exciting.

**Jerod Santo:** Totally. So lay out the approach for us. WebSockets, HTML over WebSockets... You're not using JSON, you're saying HTML, you have a WebSocket connection... Explain exactly how that works, and then as part of that, trickle out what's good about that.

**Matt E. Patterson:** Sure. Let me start with a kind of anecdote and an analogy. A couple years ago I was having beers with a friend of mine who's a really excellent Rails developer, as well as a really excellent Ember developer... And he had been spending most of his career recently working in both, with Rails as his API and Ember as his frontend. And we were just talking about this sort of topic, the future of what the web is gonna look like... And I posited - because I spent a couple of years in the video game industry - that if you look at game companies that are doubling down now on this notion of a sort of thin terminal streaming future... And say whatever you will about Cyberpunk's issues, the fact that it actually runs reasonably well on Stadia is nothing short of astounding. The game industry would much rather push towards that than asking everyone to buy an $800 monstrous gaming rig in a tiny box that you put in your living room.

So I posited with my friend, "Well, wouldn't web apps ultimately go the same route as broadband penetration increases across the country and the world?" Wouldn't the right approach be to ultimately get to where if I'm a business that's serving you a website, I'm paying for all the cost of serving you that site. I'm not without your consent jamming megs and megs of JavaScript onto your device and asking your device to give up 60% of its computing power in order to look at my website.

So at what point do we say "Hey, you know what - there's a way that we can give users on this sort of thin terminal approach just as rich of an experience, but everything is constantly just being pushed to them, streamed to them (if you wanna use the video game approach) from the server side." So he thought, "Yeah, that's an interesting idea" and we kind of dropped it at that.

\[00:16:07.16\] Fast-forward a few years and I discovered Stimulus Reflex, and of course, that kind of was born out of Chris McCord's LiveView over the Phoenix framework, and I thought "Gosh, this is kind of that." So to your actual question, the general approach, and whether you're really using WebSockets or Basecamp's new Hotwire library can even fall back to just using Ajax to essentially accomplish the same thing... But the idea is that rather than have a server that's presenting an API of raw data - your list of users from the database, or your list of widgets - instead, just like in the old days of a server-rendered app where you would push a whole HTML page to the frontend on every click, every action, every page change, instead what we're gonna do is we're gonna send you the full page to start, and then any action that you take, just like if you're in an Ember or an Angular app, we're gonna have a seamless interface, because what we're actually doing under the hood is sending that request down a WebSocket and telling the backend, "Okay, this is what the user wanted to change." But unlike the HTML request/response cycle, all we're really doing is telling the backend to do this. So it changes the database, it changes state, whatever.

And then it on its own terms, because you have an open, full duplex socket connection, can then just tell your client "Hey, I need you to change this chunk of the DOM." The silly example is you create a button and a little counter, and when you click that button, it just tells the DOM to replace that number with another number. But the point there is that the backend knows what number it just told the DOM to change to. It's not a "the frontend has a data store, the backend has a data store, and gosh, we hope that they're in sync", which is where a lot of the complexity comes in. It's not that it's an impossible problem to keep those in sync, but the complexity of what happens when the backend just flakes out on what the user just told it to do from the frontend... So now you've already updated the frontend to make it look really slick and fast, but now the backend didn't actually do the thing, so then the frontend has to have some code to then figure out how to roll back the visual change it just made...

**Jerod Santo:** Right.

**Matt E. Patterson:** ...and vice-versa - what if the backend did something, but the frontend never got the response, for some reason, because you're on an unreliable internet connection...

**Jerod Santo:** And every hour you spend working on that problem is an hour you're not working on pushing the application forward, right?

**Matt E. Patterson:** That's exactly right, yeah. I really liked the phrase that I heard in one of the Discord channels I hang out on... It's "Use tools that give you a surplus to do awesome." So if you're using your time and your energy and your brain power to do mundane things, then you're not doing awesome things. And you can argue that that goes all the way back to DHH's approach with Rails, convention over configuration. "Hey, let's get all the boring, bland stuff out of the way, so you can immediately start building the features."

**Break:** \[00:19:18.07\]

**Jerod Santo:** So before we continue down the technical road of what this all looks like, I wanna take you back to that conversation you had, because I think that was a pretty good analogy with regards to the streaming of games or that direction, and the streaming of the application, kind of its final state down the wire, versus making the client do a whole bunch of computing... And I wonder if there's a fly in the ointment... Some of these things in the industry - you just don't see them coming. I think back to the iPhone; prior to the iPhone, I remember John Siracusa was making these blog posts about how Apple had to replace Objective-C, like, yesterday. They needed a higher-level language in order to compete with other platforms.

Then the iPhone dropped, and the App Store dropped, and the iPhone's computing power compared to desktops was just minuscule... And Objective-C, because of its low foundations and it's manual memory management and all these things that make it not a very desirable high-level language actually gave Apple this advantage for a few years, where their phones and the apps on their phones could outperform a lot of the competitors, because they didn't have GC and these other things that Java has on Android, for example. And that bought Apple probably five years before they had to come out with Swift... So that's just an example of like "Well, nobody saw that--" or maybe Apple saw it coming, but those of us watching said "You really need to do this", and it turned out something changed... They didn't really have to do it for a while at least, and then Swift came. I'm not sure how many years later Swift came; at least five, maybe ten years later... And now they're competing at that higher level.

Well, one thing that's changed with regards to apps is privacy and security... And I think about this with regards to the client-server relationship. I think today we are less likely to trust the server than we are our own clients. We see pushes for offline apps, we see pushes for phone-only apps, where the database is only local; and these are things that people are trying to build. And we see the ad blockers, the tracker blocking - this whole movement towards privacy, because our privacy has been abused by people running servers for a while now; we're waking up to it. It has perhaps pushed people away from the idea of like "Well, I'll just stream everything down from this server that I can trust", because I'm not sure I can trust that server. I just wanna know what your thoughts on that -- maybe a fly in the ointment of the idea of as much server-side as possible.

**Matt E. Patterson:** Yeah, it's an interesting point. Part of my answer would be "Well, you're probably never gonna get away from the server entirely, unless the app that you're building is uniquely suited to running entirely on the client-side." And that's where I've seen some really great uses of frameworks like Ember and Angular, where they just don't really need a database. Or they need a sort of an ephemeral data store that they can use browser storage for.

**Jerod Santo:** Yeah, like I'm tracking a budget, or my taxes, or something.. And this is not a collaborative thing; this is not something that I'm gonna put into the cloud... Or I'm playing a game. I'm playing Solitaire on my phone. I do not need a network connection for Solitaire on my phone.

We see this a lot, even in the gaming industry... One of the things that I don't enjoy about games today is that when I'm playing offline on my Switch and the game requires a network connection. And it's like, "No, I'm just playing Single Player mode, on my Switch, at my house... I do not have to be connected to the network." Those things of course are often business concerns and not technical concerns in that sense... But this constant connection to the server -- I think some people (and it's probably a minuscule amount) were growing weary of that, to a certain degree... But I'm with you, some things you absolutely do need to have cloud storage.

**Matt E. Patterson:** \[00:24:14.01\] Yeah. And I'll use the startup that I work for as an example... We do very complex things with the data in the backend. And that complexity extends to doing machine learning, and AI, and NLP work with it, as well as just really complex data relationships, and event tracking, and things like that. And when I say "tracking" I don't mean personal tracking, but tracking how the app is working, what's happening whenever you change a thing... And trying to push that off on the client is incredibly complicated. And I know because we have, for at least one of our apps... It's a really hard set of problems to solve there when you're trying to have that complexity exist on a frontend data store and properly mirror what's actually going on in the real database, where the data is actually gonna persist past you closing your browser window.

So I don't think that we're gonna get away from needing persistent data stores and heavy computation. Now, that said, it's amazing the kind of machine learning stuff you can now actually do on phones, and things like that. But I don't know that I see JavaScript adding in a browser-based machine learning model too soon, although--

**Jerod Santo:** \[laughs\] I don't know... They're shoving a lot of stuff in there...

**Matt E. Patterson:** I'm sure there's a GitHub repo out there where somebody's built an implementation of TensorFlow that runs in JavaScript.

**Jerod Santo:** There's TensorFlow.js, for sure. It's Atwood's Law - anything that can be written in JavaScript eventually will be written in JavaScript.

**Matt E. Patterson:** But you know, my point still being that I think when you're talking about an app that deals with large amounts of data across large amounts of people, and accounts, and users, and you wanna be able to do really complex and sophisticated things with that data, I think having it on a server in a database is gonna continue to make a lot of sense... And then - I kind of brought it up - there's a little bit of a consent argument too, like "Did the user actually consent to having us jam so much into their memory and CPU?" I would argue that my mom doesn't know how much stuff her phone is actually running computationally when she accesses certain websites; she's not aware of that... So it's an interesting point, because yeah, the privacy stuff is really concerning, but I think a lot of folks don't realize the degree to which when you go to websites, they're making your phone do a lot of stuff, or making your web browser on your laptop do a lot of stuff that you don't know it's doing.

**Jerod Santo:** Right. Especially with the rise of CryptoMiners.js...

**Matt E. Patterson:** Oh, yeah... Not to mention the fact that one of the harder parts in building anything that runs purely client-side is if you wanna do any kind of integration with third-party, whether you're integrating with some sort of IAS or some sort of other cloud-based service - well, there's not a great way to store client credentials in the frontend. So you end up probably having to build something on the server-side anyway to protect credentials to your third-party integrations.

**Jerod Santo:** Yeah, there's lots of challenges there. I like the idea of really the user's phone, their network plan, all these things as user concerns that people -- I think they are waking up to them more and more, because they are more tangible costs than privacy costs. Trading my privacy is very hard to intellectualize exactly what am I doing here, but especially if I'm on a capped connection, or I'm paying per megabyte, or my battery is dying in the middle of the day, and I'm seeing actually using this application is causing me really hard costs, right there in my wallet - I think people are starting to make decisions around that.

\[00:28:09.06\] We see it happening with the phone operating systems starting to percolate up to the user "What is draining my battery right now?" "Well, it's this application." "Oh, you know what - I'm sick of that application. I'm not gonna use it anymore."

So I think the caring for your user, part of that is for their resources on their devices. And the more you can do on the server, especially when you're talking about heavy computation, there more you're actually caring about them in that way... So good point.

**Matt E. Patterson:** Yeah. I mean, the number one use of all computational power on my laptop is Chrome, and the number one use of all computational power and battery power on my iPhone is Safari.

**Jerod Santo:** Right.

**Matt E. Patterson:** That tells you right there who's doing all the work.

**Jerod Santo:** Yeah. So let's talk about WebSockets then, because this is like the backbone of this new way - kind of the old new way of doing web applications, sending HTML over WebSockets. Now, I guess the first question is WebSockets - can I use? Because it seems like they've been flaky for a very long time, and a lot of people maybe tried WebSockets a decade ago, and there's all these fallbacks, and they never really ever worked, and you had NAT problems, you had firewall problems... All sorts of problems. At least that was my experience. And it always ended up falling back to polling anyway. But is it relatively well supported? Are WebSockets standard technology in all web browsers today?

**Matt E. Patterson:** I mean, it seems to me that as long as you're running on any of the modern browsers, there doesn't seem to be significant problems with that. Enough so that the Basecamp guys have doubled down on it with Hotwire. Now, they even have, as I mentioned before, a fallback in there... So if you're really concerned about that sort of thing, there's no reason you couldn't also implement a fallback to Ajax in the case where you couldn't get some data. And I think some of that comes down to what you're app does, what you need it to do, what you care about deeply. Do you wanna build your stock trading app using a WebSocket? Well, you probably wanna have a fallback there to ensure that a trade that's trying to go through in a millisecond time actually gets through in case something flakes out.

That said, the apps that I've built so far with this approach - I've had almost no issues in that respect. With modern browsers they work just fine, and if anything, most of the time the issue is something I created myself with bad code...

**Jerod Santo:** Sure.

**Matt E. Patterson:** ...or an internet problem, like I actually lost my connection, at which point it doesn't matter; none of your stuff's gonna work.

**Jerod Santo:** Right. So the major advantage of WebSockets over Ajax is that you have a persistent connection with the server, right? So all you have to send them is the exact information that you are sending back, or that you are interested in; the exact HTML elements that need to go into the DOM are getting sent down the wire. You do not have to set up a TCP connection, you do not have to send HTTP requests... You can just send push and pull commands, and that's a much faster, more efficient way of communicating with the server, versus Ajax, which is ultimately just an asynchronous HTTP request, right?

**Matt E. Patterson:** Right. I mean, the overhead on your average HTTP request is quite a bit higher than once you already have a persistent, full-duplex connection. We're talking a button click sends a tiny bit of information down the WebSocket that says "They clicked this button." And some, depending on the framework, if you're using Stimulus Reflex or Hotwire, there's gonna be some other stuff wrapped around that to tell the backend what it's going on. But it's a minor amount of data.

\[00:31:46.17\] And then the backend, depending on how precise you wanna make it, can be everything from what Stimulus Reflex's default mode does, which is it literally just lets Rails re-render the whole page and send that whole page HTML backup, and then has the frontend use the Morphdom library in JavaScript to just surgically alter the DOM to match the new HTML, which makes it look really slick and fast, without you having to worry on the server-side about figuring out what you need to change. You just re-render and it's like you're building an old-school server-rendered app, and yet it feels new-school, so to speak, on the frontend.

**Jerod Santo:** Right.

**Matt E. Patterson:** But you can also fall down all the way to select your modes, and things like that, where you say "Actually, I'm just gonna send this node in the DOM, changed, because I know that that's all that I need to change for this particular user request." That can get down to tiny amounts of data; it's just a little HTML \[unintelligible 00:32:43.14\] And as I pointed out in the article, there's really nothing stopping you from also just sending up text. I mean, it's a WebSocket, you can send out any data you want. You don't have to send HTML; you could literally just send a number back, if you know that that's all the frontend needs to changed.

**Jerod Santo:** So let's take a very specific example, because one of the things that you do say with WebSockets and this way of writing apps is good is you can do form validation... And one of the pains of my life is writing the same form validations in two places... Because it just hurts. So I have it in my server-side, because you cannot trust your client, so you must have your input validation server-side. If you're not doing that, you should stop listening right now and go change your code and do that server-side, before some client you can't trust sends you things that you don't want...

But then you also want that in the form, right? Because it's slow to like "Well, I'm gonna fill out the form..." I get so mad, even to this day, when I fill out a form and I submit it, and it roundtrips and comes back and there's things that were wrong. It's like, "You should have told me that while I was filling it out." So this is a classic in-the-browser thing you want to do.

So there's been solutions over the years, of like "Well, I can write it on my server-side, but then I can matriculate that logic via some reflection in JavaScript, and this linking between inputs and form fields... And I can have it written in one place and kind of just like matriculate it over into my JavaScript. That's been moderately successful. A lot of people just write in both places; it's like, "Well, I'll just do it in the frontend, I'll do it in the backend", and sometimes that's different people, on different teams, and so that logic - like you said, the logic gets bifurcated at some point. But speed has always been a problem when it comes time to doing that, so... Some things are easy, even if you're doing the "Well, I'll just generate the JavaScript to do the same validation. Email addresses. This has to be a number." Those things are easy. But the hard one is uniqueness, because uniqueness has to live where the source of truth is, and the source of truth is the database. So you always have to kind of roundtrip for a uniqueness check.

What I was reading into this article - you're saying "Well, you can do form validation over WebSockets", and I'm wondering... It's always been too slow to do that roundtrip in a way that's interactive; like, I'm waiting for the server. I remember even Twitter used to have a username uniqueness validator. You type it in, and it would sit there with a loading spinner, and then it would be like "I'm sorry, this username is taken." Well, that's because they're checking their whole database of users to see if that handle is available, right? Does WebSockets provide enough of an efficiency improvement over Ajax-style requests to where those kind of checks can also be just server-side only, and you're just asking the server "Is this valid? Is this valid? Is this valid?" Does that feel pretty fluid, or is that a thing where you kind of have to throw a loading spinner in there and wait?

**Matt E. Patterson:** For the most part I think yes... The Discord channel where I like to hang out with some of the folks that created Stimulus Reflex, and we talk about Hotwire, and a bunch of these other approaches - one of the caveats we always throw out there is "Well, do you really need to do that?" Because sometimes you really could probably just get away with a good old-fashioned "Just send a new page render back up, the old way, and show the error fields." And imagine some part of your app that's very rarely used, but it has a form in it that the user can type in... Does that user really need to know that that fast? Are they okay with -- you know, it's got three fields, and if they didn't fill one of them out, it tells them that it's not there."

\[00:36:26.00\] The uniqueness check, you're right, is an interesting example... Because that's where you then can get into issues around "Well, how fast can you make a uniqueness check on your backend, irrespective of what frontend technology you're using? Can your database look through ten million rows and figure out that this thing isn't unique quickly enough?" And there's tricks, and you can get all the way into database partitioning and do all sorts of things in order to speed that up...

**Jerod Santo:** Right.

**Matt E. Patterson:** Yeah, I mean -- there's already gems in the Rails ecosystem. There's a gem called Optimism that basically does this in real-time. So you put a debounced keyup event on every field in the form, and every single time you stop typing for some number of milliseconds, it just sends everything that the form currently has in it down the wire. It instantiates a new Ruby object on the backend, runs it against the validator, and if it says "False", it just sends the HTML back up to change that form, with all the errors written out, and you can say exactly what was wrong.

The uniqueness one is interesting, because that's always been the sticky one, even in the Rails backend.

**Jerod Santo:** Yeah, totally.

**Matt E. Patterson:** I've seen plenty of apps crash years after they were built because somebody put in a uniqueness check, and then realized that's not gonna work great when you have a million rows.

So that one -- you know, maybe for your example with the Twitter one, maybe that's a field you exclude from the debounced keyup, and that one has its own little spinner and its own little way of interacting with the backend, since we do have to do a big, long check to figure that out... Maybe. Or maybe you can get away with it; maybe you can throw them all in something like Elasticsearch and you can use that for your uniqueness check in a ridiculously fast amount of time.

**Jerod Santo:** Or you can just ship your entire users table into the browser and then it'll be instantaneous.

**Matt E. Patterson:** Hey, why not? There's no security issues there. \[laughter\]

**Jerod Santo:** We have ten million users and you have them all inside local storage. Congratulations!

**Break:** \[00:38:28.09\]

**Jerod Santo:** So we've been talking a lot about Ruby on Rails, and to be fair, we haven't talked a lot about Ruby on Rails on the Changelog recently... It's just not something that comes up very recently. And given some of your history, and how long you've been using the framework... So for this last part I'd like to focus in on Rails a little bit. Of course, this HTML over WebSockets paradigm or technique can be used in any technology, right? It's just a web thing. WebSockets are not language-specific.

**Matt E. Patterson:** \[00:40:10.14\] Yeah. Even Basecamp's Hotwire framework that they've just dropped in December is usable in any language. Obviously, it integrates well with Rails, because that's their framework, but you can drop it in any of the other frameworks.

**Jerod Santo:** Yeah, exactly. That being said, in the post you do -- and I like the way you said this; you put your contender for Best Framework in a Leading Role... Maybe you're getting ready for the Oscars, which are still upcoming now... \[laughter\] It was Rails. And that was kind of a refreshing, new take on an old -- I mean, Rails has become... What's the word I'm looking for? Maybe boring is the right word. Most people--

**Matt E. Patterson:** Established?

**Jerod Santo:** Yeah, established... It's kind of grown up and matured, and it's still used by many, many people around the world, but it's just not exciting to many folks today, and it's not usually the framework that they say "You know what's the best for this? It's Ruby on Rails." Not very many people say that anymore... So I kind of like seeing that, because it's like, oh, here's a guy who's like "You know what - this is a great way to make web apps, and the best way to do that is with Ruby on Rails." So please, tell us more.

**Matt E. Patterson:** Sure. Well, I wanna throw out a statistic... There was an article that went around recently - I think it was on Y Combinator - where they were looking at the revenue brought in by various startups, and they enumerated the technology stacks that each of these startups did... And they came up with about 92 billion dollars in revenue were driven by Ruby and/or Rails-based startups. Now, obviously, you've got the old example of Twitter, and eventually they pulled a lot of the Ruby stuff out and replaced it with things that were faster when they needed that kind of performance...

**Jerod Santo:** Right.

**Matt E. Patterson:** So you're gonna have examples of people using -- nobody's using only one technology once they get big enough that they start running into major problems.

**Jerod Santo:** But would Twitter have ever existed if it was Scala from the very beginning?

**Matt E. Patterson:** I mean, who knows, right?

**Jerod Santo:** Exactly.

**Matt E. Patterson:** But I've been a Rails guy, like I've said earlier, from about 1.0, so obviously I'm biased.

**Jerod Santo:** Yeah.

**Matt E. Patterson:** But I've also built things in Python... My company does both Rails and Ember, and I've worked on other frameworks; I've done some Elixir here and there... So partially it's a personal bias, but I think, at least looking back over my career, one of the things that I've always appreciated about Rails is that it's simultaneously highly-opinionated and a very welcoming community, which is an interesting mix. It's opinionated in the sense of the original "convention over configuration" philosophy, and the community will often work pretty hard to not fragment out into a million different ways of doing the same thing, like you see in some other languages... Sometimes that's good, sometimes that's not so good.

But I think what it allows a lot of smaller cash-strapped startups and idea kind of folks to do is grab a framework like Rails and immediately start building something, and not be worrying so much about getting it all set up, and architecting "how we're gonna build this." I think that's partially why I reacted somewhat strongly to the addition of this heavy JavaScript layer on the frontend... And like I said before, it has its place, I think, but the ability to get in quickly and prototype things with Rails to get an idea off the ground - I personally don't think that there's a framework out there that is quite as competitive. Laravel is amazing, Phoenix does some incredible things, especially if you need to build an app with high-reliability, because you're sitting on Elixir's BEAM... But for the ecosystem and the welcoming community and the interest in continuing to push the envelope forward whilst still sticking with the things that have worked and continue to work well, I think the Rails community is hard to beat.

**Jerod Santo:** \[00:44:24.17\] So tell us about Rails' WebSockets story. What does it look like to use these technologies inside of Rails today?

**Matt E. Patterson:** Well, I think like anywhere that's starting to tinker with this HTML over the wire approach, people are trying different things simultaneously, right? Nate Hopkins put out Stimulus Reflex -- he started on it a couple of years ago; I don't know the exact date... But it really started to take off last year, which is when I discovered it, and now it's up to version 3.4, something like that...

And then in December, Basecamp dropped Hotwire, which is their own take on it. And it's not necessarily a competitor so much as just a different approach to it, depending on which you like better and what you need... You can actually use both of those frameworks together, if you want, to get the goodness of what Hotwire does really easily, and then Stimulus Reflex is more of your Swiss Army knife for your more complicated things. That's my take on it at least; some different people have different takes... But they're both really great frameworks.

So your options there are starting to expand... There's another one that I'm forgetting the name of right now, that also came out, that kind of does a similar thing. So there's a couple of different libraries in the community, at least on the Rails side, that do this HTML over the wire approach, and some are kind of starting with the notion of like the model itself informs the frontend directly of anything that needs to change; others, like Reflex, are more of an alternative to the controller, when you wanna have Reflex-based actions...

So there's a wealth of options appearing. I don't know if we're gonna see those all collapse into one thing the way Rails and Merb collapsed years and years ago, or if they're gonna just sort of -- \[unintelligible 00:46:16.21\] hang around with there being some that are the big ones, that most people use, and then some that are more niche for if you have certain kinds of feature needs or certain kind of problems, or you just prefer their style.

**Jerod Santo:** Yeah. Hotwire is interesting, because it seems like in the past DHH would have just put this into Rails. He would have been like "This is how Rails works now." And he didn't do that. They released it as its own deal.

**Matt E. Patterson:** As I understand it, I believe Rails 7 - they're planning to have it be built in... And I believe I just heard that Rails 7 - they're planning a release of it this year, 2021. Now, I may just be repeating rumor, but...

**Jerod Santo:** But now we're repeating to a bunch of people, so it might as well be true at this point. Make it so, Rails people.

**Matt E. Patterson:** It makes a lot of sense. They've rolled out Hotwire, they're using it in their own Rails apps... He said that they see it as kind of a replacement for ujs, which is the old-school way that Rails does these JavaScript partial swapping.

**Jerod Santo:** Right. So it might get in there.

**Matt E. Patterson:** It makes some sense that Rails 7 or at least somewhere beyond Rails 7 would start building in Hotwire. My guess is, like Stimulus.js, it will be one of those things that you don't have to use if you don't want to, but if you wanna use it, it probably will be really easy to just integrate it.

**Jerod Santo:** It'll be part of the Rails way.

**Matt E. Patterson:** Yeah. I mean, you've already got Action Cable and all that stuff built into the framework, so you've already got all of the WebSocket cabling stuff is already there, so it's just a matter of "Do you wanna use this way of adjusting your DOM on the fly?"

**Jerod Santo:** "Don't call it a comeback, because Rails has been here for years..." I'm not quoting you to you, but I like that line as well, as an old LL Cool J fan... \[laughter\] Have you used this approach? Have you built anything? Have you kicked the tires on what this actually feels like in practice?

**Matt E. Patterson:** \[00:48:05.21\] Yeah, absolutely. The first sort of starter app that I built - going back to last year, in the middle of this pandemic, I have a dads D&D group that includes my brothers-in-law and a couple of other dads...

**Jerod Santo:** Nice.

**Matt E. Patterson:** ...and we get together and play on Zoom... And I was frustrated with some of the different tooling out there; things like Roll20 are amazing, but I don't really need all of the stuff that it does. I don't really need battle maps, and all that kind of stuff... So I wanted to build something that was sort of more tailored towards my group and what we needed to track our gameplay while we were playing virtually... So I said "Well, I'm just gonna build my own app."

So I started building it using Stimulus Reflex on Rails 6.1, and that bought me easy chat integration, which pretty much works as well as Slack and other things like that, in terms of just being able to quickly chat... And you have emojis, and all that sort of stuff. Built-in dice rolling, built-in notifications, so when you're tracking things like combat, if I'm taking action, everybody else that's currently looking at the table sees those actions happen.

These are not amazingly new things, but the difficulty of building those things with prior approaches was always really daunting, and I built most of this stuff in a couple of weeks, only working nights, after the kids had gone to bed. Anybody that has kids knows you get like a good two hours maybe before you fall asleep...

**Jerod Santo:** Right.

**Matt E. Patterson:** So I built this in record time compared to apps that I've built in the past, with similar kinds of functionality. So that app is called ChaosMage.app. And then the startup I worked for at Texas State Technical College - we're actually taking a hard look at using this same approach for some new stuff that we're building as well. So we're gonna be rolling it out as some really advanced interfaces for the kinds of problems that we're trying to help solve in society.

**Jerod Santo:** Yeah. Any hiccups along the way, or challenges, or things that aren't quite there yet, that you've run into?

**Matt E. Patterson:** Well, to fall back on the old quote, "One of the hardest things in programming is cache invalidation..." I saw somebody on Twitter mention that they read my article and thought "Well, that sounds like a really interesting approach. I wonder if there would be problems with caching." And it's an astute point. In order to get things to be really fast, you wanna fall back on caching, so that you're not constantly hitting up your database for the same thing that the user just asked about a split second ago when they last clicked that button... And you know that thing hasn't changed, so you throw it into Rails cache, and then you end up in a situation where the user is looking at the page and they can't figure out why something hasn't changed on the page, where the DOM is supposed to be getting surgically modified, and it's because "Oh, well the backend is just sending the same data back up the socket, because you didn't bust the cache properly."

If you're falling back on the classic Rails ways of doing those things, you're not getting the whole controller request/response cycle, so you may not be busting the cache the way you thought you were, and you may have to do it yourself. But that wasn't so much a limitation of the approach, as much as my bad code and not thinking about when I cached something and when I needed to bust it before I sent stuff back up the wire.

I think that as about the only really major hiccup I ran into, outside of some issues of integrating some JavaScript stuff together that was really weird... Some of the dice rolling graphics libraries are pretty insane.

**Jerod Santo:** Gotcha. Well, I'm sure \[unintelligible 00:51:51.10\] hasn't had to scale quite yet, but with Rails, the old adage was "Can it scale?"

**Matt E. Patterson:** Right.

**Jerod Santo:** So I wonder, with Action Cable and with WebSockets over Rails - surely it can scale at this point. Any concurrent connection limitations? I'm sure there are limitations, but where do you start hitting up where you're like "Alright, I need multiple nodes", or that kind of thing?

**Matt E. Patterson:** \[00:52:16.23\] Yeah, I'll back up to my video game days - I worked for a AAA game developer out of Dallas, and worked on a really hotly anticipated game... And we had a primarily Ruby-based server infrastructure running all of the data collection and things like that, from people playing the game... And we were talking like terabytes and terabytes of data that would come in constantly. And we were able to scale all those things up with only a couple of instances running in the cloud to handle all the traffic on launch night of a AAA title.

So this notion that you can't get Rails or Ruby to scale, I've always thought it's kind of silly... Like, "Well, maybe YOU can't." \[laughter\] You know, it's more of a question of "Well, looking at what part of it is you're having trouble scaling? And then what do you need to adjust in terms of its normal conventions in order to handle that level of traffic? It's not that big of a deal, I think...

But when we get to the WebSockets approach, anecdotally it seems as though the standard WebSocket server that Rails spins up as part of its web server process - you know, if you're using Puma, or something like that - can handle about 4,000 concurrent connections without breaking a sweat... And then if you really need more than that, and you're not interested in horizontally scaling out, then you could swap out the built-in WebSockets server for AnyCable, which is written in Go, I think... Something compilable, so it's super-fast... And I think they've measured it up to like 10,000 concurrent WebSocket connections without any real issues. And then, of course, you can just horizontally scale beyond that, if you've got that much traffic coming in. It probably depends, to some extent, on what you're doing on these sockets. If you're relying on entire full-page reflexes, for example, you're gonna be doing a lot more work than if you're doing a lot of little surgical DOM changes.

**Jerod Santo:** Well, Matt, we have just a couple of minutes left... Do you wanna tell us about your books real quick? Why not...? Squeeze it in there.

**Matt E. Patterson:** Sure... \[laughter\] Yeah, I love talking about the books... I don't know, I actually got an English degree from college, so I have no business doing any of this software stuff... But fiction-writing was always a hobby of mine, and I decided a number of years ago to sit down and start writing some books.

\[00:54:42.00\] This was back when the TV show Supernatural was really hot, and daemons and angels and supernatural stuff was the hot thing... So I've written two novels kind of in that vein, centering around a guy in Las Vegas who his supernatural ability, if you will, is that he's possessed of just horribly bad luck for everyone else around him, and that gets him wrapped in a whole-world-ending plot with daemons and angels...

So there's two books in that, Devil's Hand and Burning Cards, and then I also have been working on my own science fiction universe for years and years, like anybody who plays role-playing games probably does... So I wrote a book Song and Signal, which is more geared toward teen and adult readers, and features a young kid in sort of a space opera setting, trying to find out the mystery of where his long-lost father went, and how that ties into the greater fate of the Universe... That's a fun one. I've got a lot of people that have asked me to write more in that series, so...

**Jerod Santo:** Are you gonna take them up on that?

**Matt E. Patterson:** I'm tinkering with some outlines right now... \[laughs\]

**Jerod Santo:** It's like good software - you're never done writing it.

**Matt E. Patterson:** No, they're always living documents, to some extent.

**Jerod Santo:** Yeah, exactly. Awesome. We'll link up your Amazon in the show notes for people who want to check out those writings of yours.

**Matt E. Patterson:** Yeah, they're affordable, fun reads. People seem to like them, so if you're interested in that kind of stuff, give it a shot.

**Jerod Santo:** There you go. Well, Matt, thanks for coming on the show, thanks for beating the drum on this new/old but still new style to build web apps, HTML over WebSockets, sharing your enthusiasm for this., and for getting more people to think about it. Like I said, everybody has to make their own choices and decisions, everybody has their own context... "It depends" is the most popular phrase among software developers, and so this is another approach that may fit your needs... So we appreciate you sharing it with us and talking through some of the details and the pros and the cons. It's been lots of fun.

**Matt E. Patterson:** Yeah, thanks for having me. I wanna tell everybody, again, if you're out there writing software and you're thinking about what technologies to choose, choose to do stuff that lets you do awesome, because then you can finish doing awesome, deliver that to people that it matters to, and then spend your time on your family and the things that you love, instead of spending your time wrestling with obscure technical details.

**Jerod Santo:** Well said... Alright, thanks. We'll talk to y'all later.
