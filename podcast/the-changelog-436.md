**Adam Stacoviak:** Daniel, we're back... It's our good cadence of every three years, which is just a random number we chose; it's three people, every three years... It sounds pretty good. It's good to have you back.

The first time we had you on was like 2017. A long time ago. 17 years of Curl. And then "Curl turns 20" was our second show with you, and now we're back with 23 years. Big moment. How are you doing?

**Daniel Stenberg:** Hello! It's good to be here. Time flies... 23 years. Yeah. Just a number.

**Jerod Santo:** \[laughs\]

**Adam Stacoviak:** Just a number... Well, it's good and arbitrary, but it's for a good reason. Curl is one of the most used pieces of software that I'm aware of in the world. We've covered that, and it's been debated, it's well-known... And we've even gotten some hate because it's so used; we might talk about that today, but... It's just such a used thing, and you're still - from what I'm understanding - the sole maintainer of it. There's some contributions, of course, but you're the primary person behind it... And we wanna kind of dive deep into all those details - what it means to start and what it means to lead it... And you've asked your audience a ton of questions about what we should cover here, so thanks to all of your Twitter followers for kind of setting the tone for the conversation, at least to some degree.

**Daniel Stenberg:** Yeah. We got a lot of good suggestions there.

**Adam Stacoviak:** Yeah.

**Daniel Stenberg:** I like to take to the opportunity, when I have this birthday - since I know when I first released Curl, I know when the birthday is - and I like to just go back and bring it all together, and maybe think about how it all started, what I've done the last few years, and so on. So I think it's a good opportunity to just vent through it and look back a bit.

**Adam Stacoviak:** What's the official birthday for Curl?

**Daniel Stenberg:** March 20.

**Adam Stacoviak:** March 20.

**Daniel Stenberg:** 1998.

**Adam Stacoviak:** Wow.

**Jerod Santo:** Wow.

**Daniel Stenberg:** That's also a bit arbitrary, since that's the first release I actually called it Curl, since I actually called the tool with now the name before that... And maybe I should count that as a -- but I don't. So March 20th, 1998 I released Curl for the first time.

**Jerod Santo:** Gotcha.

**Adam Stacoviak:** Well, the good thing is you're in charge, so you can make those choices if you like, right?

**Daniel Stenberg:** Yes.

**Adam Stacoviak:** We can give those extra two years to you, so it could actually be 25 years of something...

**Jerod Santo:** \[laughs\] Yeah, we can round it off...

**Adam Stacoviak:** We can round it off for you if you want...

**Jerod Santo:** It's like time travel.

**Adam Stacoviak:** And that would actually make a good show. 25 years of Curl, instead of 23.

**Daniel Stenberg:** Right. And since I've changed the name twice before that, I can have many birthdays.

**Jerod Santo:** Yeah. Why not.

**Daniel Stenberg:** Many opportunities here.

**Adam Stacoviak:** And since it's a multiverse, we can have infinite options and opportunities \[unintelligible 00:03:44.19\] But that's good. I mean, the internet was different back in 1998.

**Daniel Stenberg:** Oh, yes...

**Adam Stacoviak:** \[00:03:52.09\] Way different, right? The problem set, the internet itself, the needs for APIs, the needs for doing what Curl does as a tool has changed drastically, and so many more use cases have come into play.

**Daniel Stenberg:** Yeah, and I think back in those days - of course, nobody really knew where it was going, or that HTTP would become this protocol that everyone would use for APIs, and REST, and everything. That was just a big unknown, so... It just happened.

**Adam Stacoviak:** Yeah.

**Daniel Stenberg:** And of course, I didn't know where Curl would go either, because in 1998 that was 2,000 lines of code; just a tiny little tool.

**Jerod Santo:** What was your initial desire? What was your initial use case? Just grab a website?

**Daniel Stenberg:** No, I was going to just download currency rates for my IRC bot.

**Jerod Santo:** Okay...

**Daniel Stenberg:** I wanted a little tool to just -- you know, every day maybe download currency rates from a site, and you hosted currency rates.

**Jerod Santo:** You're a Forex trader, or what?

**Daniel Stenberg:** No, I had a bot in an IRC channel, so you could just have a currency rate translation service in the chat... So "Hey both, what's 100 USD in Swedish Kronor today?|

**Adam Stacoviak:** Hm. Now we ask Siri that.

**Jerod Santo:** "Hey, Siri..."

**Daniel Stenberg:** Exactly.

**Adam Stacoviak:** At least we try...

**Jerod Santo:** And then she says "Here's what I've found on the internet for..." \[laughter\] She probably uses Curl in that process, don't you think, Daniel?

**Daniel Stenberg:** Well, my exchange was roughly the same... \[laughter\] It was rather crappy. But still, that's why I started looking into HTTP and getting HTTP then.

**Adam Stacoviak:** It's important to note that big things have small beginnings.

**Daniel Stenberg:** Oh, yeah. Everything starts somewhere. That was my humble beginning. And then, of course, I released that, and in some years I found some bugs, and I did some requests, "Maybe we should do this..." Then I found another site that hosted currency rates on Gopher, so I added support for Gopher, and then it took a few months until I found a third site that hosted currency rates over FTP, and I did that. That's the beginning of the story.

**Jerod Santo:** It's snowballed.

**Daniel Stenberg:** Yeah.

**Jerod Santo:** So if you fast-forward to now and you gave the same answer to the same question, what was your most recent use of Curl that wasn't some sort of development, "I'm working on Curl" thing? Do you use it as just a regular user?

**Daniel Stenberg:** I actually use it embarrassingly little these days. I still use it for simple cases, but more like my ordinary command line style, and Unixy guy... "Yeah, I wanna script something and I have Curl \[unintelligible 00:06:21.13\]" So I rarely use it very complicated, because that would mean working with Curl as a tool a lot, which I don't, since I nowadays work with Curl full-time, more supporting and working on it... Which is one of the biggest changes since three years ago, when we did this the last time.

**Jerod Santo:** Yeah, I was gonna say, you're now full-time, right?

**Daniel Stenberg:** Yeah, exactly... Which of course has changed things for me around a bit.

**Jerod Santo:** And you were with Mozilla previously... Tell us the story. How did you go full-time?

**Daniel Stenberg:** Well, I quit Mozilla in late 2018, for reasons -- mostly because I was bored with that job. I didn't think it developed me anything, and enough fun... So I decided to quit that and do something else. And then I looked at what I could do and what I wanted to do after that. I talked to my friends at this company called wolfSSL, for which I work now, and we decided to do this together.

I knew them from before, and then I decided that I would join wolfSSL, work with Curl full-time, and sell support for Curl commercially, for anyone who wants it. So basically companies who need help, or whatever assistance they need regarding Curl.

**Jerod Santo:** Nice. And it's working out well for you?

**Daniel Stenberg:** It does, it works really great. It's a little bit of a dream come true, since now, finally what I created back in the late '90s I can now sort of -- you know, taking it all the way as a spare time project for this long, and now suddenly I can do it for a living... And only that. I don't have to save it for spare time. I can do it on spare time as well, but now I can do it all the time.

**Jerod Santo:** So there's this weird phenomenon that happens to people when their hobby becomes their job. Their passion project, their weekend warrior side gig that they love becomes their 9 to 5. And we see it all the time. Adam and I in a certain way have done that, like our hobby. Adam, this started as a hobby, right?

**Adam Stacoviak:** \[00:08:19.11\] It sure did, yeah.

**Jerod Santo:** And now you're podcasting professionally. And it's like "Now this is my job." And something that you just desired to work on and you wanted to do because you loved it, all of a sudden you have to do it, because that's how you make money. Has that changed your perspective on the work, Daniel?

**Daniel Stenberg:** A little bit... Exactly as you say, now it's not only what I wanna do, but sometimes really what I have to do, or rather what I sign up to do, and now I really have to deliver, not just because I wanna do it in an afternoon. So of course, it becomes a little bit more serious... But I think so far it hasn't taken over anything. So yeah, that means I sometimes actually have to spend development time on Windows, just because that's one of those problems...

**Jerod Santo:** \[laughs\] There's your drawback right there...

**Daniel Stenberg:** Exactly. There's so many benefits and so much fun anyway, so I can take the few drawbacks with it. I'm enjoying it fully so far.

**Jerod Santo:** So has your family and the rest of your life gained those night hours back, or do you just power through because you love it so much, and you're still working on it nights and weekends?

**Daniel Stenberg:** I still do nights and weekends... But mostly nights, I would say. Not that much weekends, but mostly nights. It's also because I have a very established way of working, so basically I'm just keeping on the same way that I did before. Now I just do Curl daytime, and a few hours of my time as well.

It works really good around the clockwise too, since then I can do stuff in the morning and late in the evening too, it works... So I can fire off some pull requests and they can run CI jobs, and stuff like that. So yeah, I think I have a pretty good rhythm.

**Jerod Santo:** Well, it's worth noting that you had sustainability down, right? 21 years before you were full-time on this thing... So the last two years - just rough numbers; 23 now the project is - you've been working on it for a very long time. You've kind of been the picture, to me, of perseverance and open source... Just toiling away for years and years and years. So rhythm -- this is like a lifestyle you've been \[unintelligible 00:10:09.26\]

**Daniel Stenberg:** Certainly, yes. And not just life -- yeah, it's more or less my entire life, right?

**Adam Stacoviak:** I'd say...

**Daniel Stenberg:** Older than my kids...

**Adam Stacoviak:** 23+ years.

**Jerod Santo:** I don't wanna ask you your age, but this might be like half of your life or more.

**Daniel Stenberg:** It's approaching, yeah. I turn 50 this year, so yeah.

**Jerod Santo:** Okay. So you're gonna get there.

**Daniel Stenberg:** yes.

**Adam Stacoviak:** Wow.

**Jerod Santo:** Pretty cool stuff.

**Adam Stacoviak:** Yeah.

**Jerod Santo:** So now it's your full-time job. If you just set that aside and you told everybody -- because that's a very impressive accomplishment. To work on the same thing for that long is amazing. And I know we've asked you this before, but that was probably six years ago now, so you can share it with a whole new set of listeners - how do you stay motivated? How do you keep toiling away at this open source thing?

**Daniel Stenberg:** It's really hard to -- I don't have any magic source or recipe... I just wanna make sure that it works, and I always want happy users, and I wanna have those features, and I wanna make sure that Curl remains a really powerful -- you know, the Swiss Army knife of internet transfers, really... And follow along and make sure that it remains the choice of so many users, and can power all these applications with anything. Just keeping up with that and making users happy - that's a drive enough for me. And then of course, the positive feedback that people actually appreciate it and they say they enjoy it, like it, and it does fulfill the needs for them. That's enough for me to keep me going.

**Adam Stacoviak:** Well, it's a simple reason to keep going. I mean, you keep it simple at least. Motivation by the happiness of your users, keeping it working... I think that's a pretty humble approach to remaining motivated. I mean, you didn't say "Make millions of dollars."

**Daniel Stenberg:** No, I didn't... \[laughs\]

**Adam Stacoviak:** You know, this fantastic exit, or "By the way, Curl company just got announced" or something like that, where you've got -- I mean, I guess you do have professional support, and there probably is a company behind it, because that makes sense... But you're not saying "Well, I'm really trying to get to that VC dollars."

**Daniel Stenberg:** \[00:12:07.13\] No. That would be a really weird way for me to --

**Jerod Santo:** \[unintelligible 00:12:08.29\] roundabout path... \[laughter\]

**Daniel Stenberg:** ...inefficient way to get to that goal. So no, that's really not -- I mean, of course, I want money as anyone else does, but that's not what drives me, that's not what makes me get up in the morning and stay up late at night.

**Jerod Santo:** Well, 23 years is a long time, and then over time you've changed your opinions about some things... Now, it doesn't feel like it's been three years since we've talked, because I'm an avid reader of your blog, and you blog pretty prolifically; you have lots of writings out there... And you've had a bit of a change of tune lately, regarding the programming language that Curl is written in. So it's a C program, it's a library and a command line tool, right? And it has been ever -- maybe it didn't start there, but... Did it start in C from the very beginning?

**Daniel Stenberg:** Yes.

**Jerod Santo:** Yes. And you wrote a post a few years ago now - maybe 4-5 years ago - Curl is C. Then you wrote a post more recently about all of the vulnerabilities, and how many of those are because of the C programming language, and just the sharp edges and corners you were able to cut yourself on... And now you're starting to talk about Rust a little bit more, so we'd love ot hear your thougths on -- maybe you've changed your mind around Rust and C.

**Daniel Stenberg:** Yeah... I'm not sure I've changed -- maybe refined it. I've grown into a viewpoint where I think the future could be for Curl. I mean Curl is C; it has been C for 23 years, and I foresee that it's going to be C for a very long time ahead as well, for several reasons. But I do think that there's suddenly a way forward to introduce other languages - it doesn't have to be Rust, it could be other languages, too - In the way that we in the Curl project support different backends; so when you build Curl, you can select different ways to build it, basically selecting a lot of different knobs and switches to make your build... Like, we can select which TLS backend, SSH backend, name resolving backend... A lot of different things. HTTP/3, and things like that. And when we go forward... We're seeing this -- it's a trend for a few years now, that more and more of those are going to be written in Rust. And that's a way for, as in the Curl project, introduce more Rust in the final binary, without actually Curl changing to Rust, but we're using more Rust, basically.

**Jerod Santo:** I see.

**Daniel Stenberg:** And one of my more recent efforts sponsored by ISRG, the ones behind LetsEncrypt, is to make sure that we can actually build Curl now with an HTTP backend written in Rust called Hyper... Which is then we replace parts of the built-in HTTP powers of Curl with a Rust written library instead. We do that also with TLS, with the Rustls library, and so on.

**Jerod Santo:** That's interesting... We did have Josh Aas from the LetsEncrypt project on the show a while back, and he was very passionate about replacing a lot of internet infrastructure projects with memory-safe languages, specifically Rust... And he has gone about doing some of that work, working with I think the NGINX folks on some things, working with you on some things... So they basically sponsored you to build this in, or build this access from Curl...

**Daniel Stenberg:** Exactly. And what it is - it's an option to build Curl with Hyper, instead of the built-in HTTP and HTTP/2 support; so you would use that library instead.

**Jerod Santo:** Gotcha.

**Daniel Stenberg:** I foresee a future where we can do this with more things. And in effect, that is replacing C with some other language. At the same time, I also think there's good value in it remaining C too, because by having a C library, it also provides the power of Curl and Libcurl to a really, really large community, and operating systems, and architectures and platforms out there that don't run Rust at all today.

\[00:16:03.11\] So I also think there's still a -- and you know, having a solid and proven and tested C library is also valuable for all those platforms; they can't switch to Rust anyway, so they would go between using my library, that I claim is fairly well-tested and reasonably secure, compared to using something else that might not be.

**Jerod Santo:** It's worth noting that when you say "It runs in a lot of places", you're not exaggerating. I mean, it runs on an unfathomable number of devices, right?

**Daniel Stenberg:** Yeah, it's insane. I used to mentione the number ten billion installations, which - that's more installations than humans on the planet, right? But that's also because I've switched -- I probably did that even the last time we talked... And I talk about installations these days and not number of users, because most of the installations of Curl - they run somewhere, not necessarily by a user or a human or someone knowingly using it.

**Jerod Santo:** Sure. What about the platforms themselves though? I know you used to post when you'd find it in some new weird embedded place... Wasn't that the Times Square, on the New York Stock Exchange, or -- I don't know, like weird places that you'd find Curl being used.

**Daniel Stenberg:** Yeah... It's really everywhere these days.

**Jerod Santo:** How about Mars?

**Daniel Stenberg:** I'm trying to get it confirmed that it's actually used in space, but I've failed so far... Amusingly, I've been emailed twice by NASA people, and I've asked both of them about it, but none of them would respond to that question.

**Jerod Santo:** Come on, we need some confirmation...

**Daniel Stenberg:** Probably the wrong people to ask, and they asked me about some other lame stuff anyway... But still, I'm trying to figure that out. \[laughter\]

**Adam Stacoviak:** I think it's safe to assume it though. I mean, there's tech in space...

**Jerod Santo:** Are they using web protocols? Probably...

**Adam Stacoviak:** But I guess, do you have HTTP in space? It's the most known protocol; they've got networking there, I'm sure, right? There's gotta be computers networked together somehow. Did they create their own protocol? Possibly...

**Daniel Stenberg:** Yeah, I would imagine that it actually exists and it's used in some -- I mean, at least in local area networks...

**Adam Stacoviak:** On ISS, for sure...

**Daniel Stenberg:** Yeah, exactly, like NSS, and stuff like that.

**Adam Stacoviak:** They've gotta communicate...

**Daniel Stenberg:** Yeah.

**Adam Stacoviak:** There's gotta be something.

**Jerod Santo:** Why don't you just add a little phone home in there, and then you'll find out.

**Adam Stacoviak:** Then you'll know. Telemetry.

**Jerod Santo:** Let yourself know... \[laughs\]

**Daniel Stenberg:** Yeah, I'd love that... \[laughter\]

**Jerod Santo:** I don't even know if you could have the servers that maintain that ping... If you have eight billion devices pinging you...

**Daniel Stenberg:** Exactly. That would be an infrastructure...

**Jerod Santo:** It's not a problem I'd wanna have...

**Adam Stacoviak:** Daniel, since you're somebody who's in the tooling space, as it relates to web servers, web, HTTP, do you share Josh's concerns about C and safety and replacing and all the things he said about that it's essentially -- I'm trying to paraphrase to some degree what he said in that episode at the end... His desires to replace as much on the edge and in those areas with Rust, or just thread-safe languages, or things that didn't have the vulnerabilities that C does.

**Daniel Stenberg:** I think I'm in a general agreement that it is a good thing and a good idea and a worthy mission. But I also think that it's a really long-term job to go there... And sure, I think Rust is a worthy contender to use for a lot of that, but it's also a long way for Rust to go there to actually be that really awesome alternative. And I see that already now, since this work that they've funded me to work with to introduce this Rust backend in Curl, it really shows that Rust also has a lot of things to fix to make sure that they can actually become that new solid pillar to lean on for stuff like that into the future.

**Adam Stacoviak:** Yeah.

**Daniel Stenberg:** But sure, I think we will go there at one point or another, but I think it's going to be a rather slow transition.

**Jerod Santo:** \[00:20:00.18\] Another thing that maybe has been a slow transition - maybe not so slow - is new HTTP protocols. I know we've talked about QUIC with you last time you were on the show... Tell us about the state of the art; where are things? I know you're right on the bleeding edge; you often are testing things in curl right alongside specs getting drafted, and really making sure these things are usable in code as they get worked out... So what's the state of the art with HTTP?

**Daniel Stenberg:** Right. I like to have it be on par with the new developments, so that we can use Curl a little bit as a tool to try out new protocol stuff, and at the same time that people that are developing the new servers of these protocols can also use Curl to try out the service. So HTTP/3 is coming -- I've said that for a very long time. I've done a lot of presentations about HTTP/3, and I guess that's the slide I've changed the most times... Like, "When is it coming?" "Soon", I say, but pretty much all the time --

**Jerod Santo:** That's what you're telling us right now, "Soon." \[laughter\]

**Daniel Stenberg:** Exactly, soon. I've been saying it for years. "Soon." But this time it is actually soon... So now, HTTP/3 is a protocol on top of QUIC. QUIC is a TCP and TLS replacement. So we're going to throw out TCP and TLS and we're going to use QUIC instead. On top of that, we do HTTP/3. And both those protocols, both QUIC and HTTP/3 - they are already pretty much finalized and done. But they're not shipped as RFCs yet, so they're in the process of actually getting out as RFCs. So they're discussing phrasing in some descriptions and making sure that everything is done correctly.

Then there's another work going on with refreshing HTTP in general, and getting things done for generic HTTP. I think that is going to block the HTTP/3 spec slightly.

**Jerod Santo:** What do you mean "generic HTTP"? What does that mean?

**Daniel Stenberg:** Well, how to define HTTP in a version-independent way. How does headers and requests and everything work, ignore the transport over the wire... Because there's a lot of things in common between HTTP/1, /2 and /3. So that work is to make sure that we have a document that describes how HTTP works independent of which version they're using.

**Jerod Santo:** They're like the lowest common denominator thing, or...?

**Daniel Stenberg:** Yeah, pretty much like that. And then there are documents for describing each of these \[unintelligible 00:22:26.22\]

**Jerod Santo:** They build on top of that, or they diverge where they have to.

**Daniel Stenberg:** Exactly. Well, they sort of work together then, too.

**Jerod Santo:** Okay... What's the benefit of having that document?

**Daniel Stenberg:** I think it's primarily a clarification to make sure that we're all on the same page here. To understand that HTTP as a paradigm when I use it it doesn't really change; when we add HTTP/2 and HTTP/3, we primarily change how it's transferred over the wire, we don't really change how we think or use HTTP.

**Jerod Santo:** Gotcha. It's kind of for backwards compatibility, as well as clarification.

**Daniel Stenberg:** Yes, I would say so.

**Jerod Santo:** Okay, I didn't know that \[unintelligible 00:23:02.10\]

**Daniel Stenberg:** So HTTP/3 is going to come soon... But we're still a bit off until we will see it really deployed, because this time around -- HTTP/2 was a bit slow and hard to get deployed everywhere, but HTTP/3 is going to be even more complicated.

**Jerod Santo:** Oh, great... \[laughs\] Well, you're not painting the best picture of it... Is it better? Is it good? \[laughter\]

**Daniel Stenberg:** It is certainly possible to get better, and I mean better as in lower latency and higher performance for at least a good chunk of all the use cases. But it's a different infrastructure now, since it's built on UDP, and there's a completely different way to use TLS... So all the TLS libraries are going to have to provide new APIs, and OpenSSL is way behind on that... And we all know that OpenSSL is the number one TLS library in the world, and as long as they don't support it, it'll be a slowing down factor for deploying and adopting QUIC.

**Jerod Santo:** \[00:24:03.20\] So as a lowly application developer who just wants to get his JavaScript under your machine, I was very excited by the promise of HTTP/2, and that you don't have to bundle anymore; you don't have to put everything all in one file etc. Just send those little files... And that didn't seem like it played out in practice to deliver as much of a win as we were hoping it would with H/2...

**Daniel Stenberg:** Exactly.

**Jerod Santo:** Is HTTP gonna fulfill that promise? Does it have other promises? What are we gonna get out of this at the end of the day?

**Daniel Stenberg:** Well, if HTTP/2 was only a minor boost for most of us, I think HTTP/3 is gonna be an even more minor boost for most of us.

**Jerod Santo:** \[laughs\] Okay...

**Adam Stacoviak:** You're really selling it here, Daniel...

**Jerod Santo:** Yeah... What else should we talk about? \[laughter\]

**Adam Stacoviak:** You're really selling it!

**Jerod Santo:** Boring... \[laughter\]

**Daniel Stenberg:** Yeah, I'm not selling it, because I'm not here to sell it.

**Jerod Santo:** He's got nothing to sell, yeah...

**Daniel Stenberg:** Exactly.

**Adam Stacoviak:** You're not getting that VC dollar, so no need to sell.

**Daniel Stenberg:** We're certainly going to see the big guys use it. They're going to jump on it immediately, so of course we're going to see all the big ones... And the CDNs are going to use it, so we're going to see it deployed big time. But when you're a small player, if you just run a few servers for yourself, you can just as well wait and see...

**Adam Stacoviak:** So to read between the lines, what you're saying is the end users, the Jerods of the world, the Adams of the world are not gonna get much benefit from this change; it's really the infrastructure that's gonna get the change, the big players... The edge nodes, the Cloudflares, the Googles...

**Daniel Stenberg:** Yeah...

**Jerod Santo:** Trickle-down...

**Daniel Stenberg:** ...they do it so that we as users of their services, we get a better experience. Hopefully, YouTube will play x% better when we use it over QUIC and HTTP/3, and so on. But possibly, you need one of those infrastructures to be one of those to actually benefit or be able to provide that.

**Adam Stacoviak:** How much do you pay attention then to, say, 5G and the explosion of IoT devices and the non-human devices out there? Obviously, you run Curl, so you pay attention to that stuff to some degree, considering what you build and run... But thinking about network latency, as 5G rolls out and it becomes more stable, potentially nationally or globally - we're talking about devices network-wise non-wired, devices connected at 100 milliseconds as a dream, potentially, when the network really speeds up. Is that what QUIC and H/3 is gonna deliver, that kind of stuff? Those network latencies are all meeting up in the middle essentially; this protocol is delivering a faster internet for that.

**Daniel Stenberg:** Yeah, ideally they will do that. I think they will certainly help in that direction. Also, I think we're only seeing the beginning of this all. So there's going to be a lot of more development, stuff done with QUIC and over QUIC. So I think it's going to improve further as we go forward.

**Adam Stacoviak:** How far is your vantage point then? Is your vantage point considering 23 years in? Is your vantage point now less one to two years down the road and more like five to ten, in terms of paying attention to future tech and future direction? Because I had a separate conversation that sort of like gave me insight at this landscape of like "5G isn't here and winning now. It's approaching. It's coming, it's rolling out", but ten years from now it's gonna be rolled out; it's gonna be much more fast, and we're gonna be dealing with, at a global scale, all sorts of devices at 100 milliseconds connection.

**Daniel Stenberg:** Right. But for me as a person involved with Curl, it doesn't really matter to me... Because I'm going to support my users 3G, 4G, 5G, connected, Wi-Fi... It doesn't matter. Because all my users - and there are plenty - they use whatever they can to do things over the network. So they might do more things, faster things, lower-latency things in the next year, two years, three years, but they're already using Curl and they're going to use more Curl going forward. So I'm going to just keep making sure that people can do internet transfers, and I'm going to pay attention to what network developments happen, or protocols, how they're changing.

\[00:28:10.03\] So I don't see any particular change in anything for me or what's going on. And for me personally, I don't really try to predict the future long in advance; I'm just looking at what we're doing right now and trying to see what should I work on the next few months, really.

**Jerod Santo:** So from Curl's present-day perspective, H/3 has been a pain in the butt, I'm guessing.

**Daniel Stenberg:** It's a complicated base to support. We support it experimentally in Curl, and anyone can get Curl and build with HTTP/3 support. You can go to Facebook, Instagram, Google, Cloudflare - they all support HTTP/3 the draft versions today. So if you enable it in your browsers, you can actually use it today and try it out.

So it's there and you can start fiddling with it, but for me - I'm playing with it just a little bit on the side and seeing how things go. And since there are so many beta versions and unstable releases of everything to use to just build this... So a lot of moving parts still; it needs to get stable first.

**Break:** \[00:29:22.26\]

**Jerod Santo:** So as Adam said at the top, your Twitter followers provided a whole bunch of awesome questions, things they can't wait to hear from you... So we're happy to make them happy. And we had this one note that says "The Spotify and Instagram hacking ring story." I don't know what that is, but I'm excited to hear what's going on there. Tell us.

**Daniel Stenberg:** \[laughs\] That's one of my favorite stories in Curl. So it started out with a woman who emailed me once... This was 3-4 years ago. She emailed me about her Instagram account being hacked, and she asked me to help her.

**Jerod Santo:** Okay...

**Daniel Stenberg:** \[unintelligible 00:30:36.22\] "Why is this woman emailing me about the hacked Instagram account?" "I have no idea, you shouldn't ask me." And then she sent me a screen capture of her About window, and said "But look, your name is here. You can just ask your friends to help me out here."

**Jerod Santo:** \[laughs\]

**Daniel Stenberg:** "Alright, you've found my name on Instagram..."

**Jerod Santo:** There you go...

**Daniel Stenberg:** At that point I had no idea that Instagram even used Curl, so... "Alright, that's fun."

**Jerod Santo:** That's fun...

**Daniel Stenberg:** Exactly.

**Jerod Santo:** There's only a billion users or so... Or however many they have...

**Daniel Stenberg:** Oh, indeed, yeah. A lot of users. She didn't consider it as fun as I did.

**Jerod Santo:** \[laughs\]

**Adam Stacoviak:** So it was a good day for you and it was a bad day for her.

**Jerod Santo:** That's fun. "Thanks for emailing me."

**Daniel Stenberg:** Exactly. I thought, "Oh, that's really fun... But I've never talked to them, I don't know them..." I tried to explain to her that they're just using a component of source code that I've built." That's cool, right? And she really had a hard time to accept that... "But you know, you can just ask them, right? To help me. You obviously know them."

**Jerod Santo:** She's like, "Come on..."

**Daniel Stenberg:** So a little bit of back and forth, and I said "No, I don't know them." Eventually, I think she sort of bought that... And she went silent for a week or two weeks. Then suddenly she emailed me back again.

**Jerod Santo:** Oh...

**Daniel Stenberg:** "You've been lying to me the whole time", she said. "Because look, you did hack my phone." And then another screen capture, Spotify. There was my name, too.

**Jerod Santo:** \[00:31:58.29\] Oh, no...!

**Daniel Stenberg:** \[laughter\] So apparently she had discovered me completely, because my name was in both Instagram and Spotify, so obviously I had hacked her phone. And my secret Instagram and Spotify hacking ring - unless I helped her, she was going to reveal this to these big companies.

**Jerod Santo:** She's gonna tell Instagram and Spotify that you've been hacking...

**Daniel Stenberg:** Yes. "And you wouldn't want that", she said. \[laughter\]

**Adam Stacoviak:** That is hilarious.

**Jerod Santo:** Well, from her perspective though, she had to have an a-ha moment when she had her second instance on Spotify... Because you'd convinced her that you had nothing to do with it, and then --

**Daniel Stenberg:** Right...

**Jerod Santo:** When she saw your name the second time, I could be her in my mind, and think "You know what - I got him. He's lying to me. Here he is again."

**Daniel Stenberg:** Exactly. I could sort of feel that "I caught you! I caught you red-handed. You lied to me!" I sort of gave up at that point. I really couldn't -- I tried to say "No, they also use--" \[laughs\] She thought that was a little bit too much of a coincidence for it to be true.

**Jerod Santo:** Yeah... Is it alphabetical? I wonder why you were the one... Because there's usually hundreds of things listed on those About pages, and maybe it's just alphabetical and Curl is out there near the top.

**Daniel Stenberg:** I think one of the rare instances where my email address is actually in there, often...

**Adam Stacoviak:** Really?

**Daniel Stenberg:** Yes. At least that's an explanation I've gotten many times from -- people using cars have emailed me. Someone has a problem to figure out the language in their GPS emails me and asks me \[unintelligible 00:33:31.03\] And then I ask "Why are you emailing me?" And they're like "I've found your email address." "How?!" "Well, it's in this screen somewhere, and I scrolled and scrolled and scrolled, and there it was."

**Adam Stacoviak:** This is a sure sign of frustrated users who cannot get support from--

**Jerod Santo:** Yes...

**Adam Stacoviak:** Maybe in this case she reached out to Instagram and was like "Hey, who's hacking me?" and she just decided to take it upon herself, or the person that's driving this car, that's like "Hey, I'm having issues with my self-driving car. It's wrecking all the time..."

**Daniel Stenberg:** And I think that's also one of the problems I have, because the frustration level at these people... At that point they've probably trusted everything, tried everything, contacted everyone they can imagine, then banging their head against it, and then they find my email address and email me... And I say "I have no idea what you're talking about..." I can understand the frustration on the other end, but on my end, they just appear really...

**Jerod Santo:** Random to you.

**Daniel Stenberg:** ...confused.

**Adam Stacoviak:** I had a curiosity, I had to go into Instagram's section where they do disclose their open source usages, and they do list them, it seems like, alphabetically -- no, it's not alphabetical. It's based on license even. The first list they have is BSD3, the second list they have is MIT, and the third list is Apache... And I either have bad eyesight or what, but there's no mention of Curl anymore.

**Jerod Santo:** Is it Libcurl?

**Daniel Stenberg:** No, maybe they've changed that. I don't know.

**Adam Stacoviak:** It says "URL parser." Maybe that was the swap. I don't see the usage of Curl anymore.

**Jerod Santo:** Maybe she contacted them and they had to take you out of there...

**Daniel Stenberg:** Oh, no... The hacking ring.

**Jerod Santo:** The hacking ring. \[laughter\]

**Adam Stacoviak:** Well, there's that billion users. They're gone.

**Jerod Santo:** \[unintelligible 00:35:08.12\] Well, that one's hilarious. This other story, quite a bit more somber, and tragic really, was the fella who really attacked you via email because he had gotten hacked... I remember that one was like "I will slaughter you." I mean, just terrible things being said to you because somewhere either in his software stack, or in the attacker's tack, Curl was involved somewhere. And again, it wasn't you just writing this library, but the email came into your inbox. Do you wanna share? I don't want you to meditate on this too long, but this was the one that hit close to home for you.

**Daniel Stenberg:** I mean, it actually hit me pretty hard exactly when it happened, at least... Because it actually felt pretty horrible. And then I think I got over it pretty good. And then he emailed me more, and tried to post more on my blog, and so on. And then he appeared even more of a lunatic, and I think that made me less...

**Jerod Santo:** Less concerned, or more concerned?

**Daniel Stenberg:** \[00:36:07.22\] Less concerned actually, because it then appeared more just deeply confused and rambling about whatever... And then I didn't really feel as threatened as--

**Jerod Santo:** Initially.

**Daniel Stenberg:** Yeah, exactly. So I think I got over it. It just felt a sting of nastiness there for a while. And of course, I did a police report about it here in Sweden, but it doesn't do anything.

**Jerod Santo:** Yeah. I mean, they could be halfway around the world. It's hard on the internet, because you can't really gauge people at all. You can't tell if this person is serious, or trolling, or a lunatic, or seriously depressed, or what it is... But here it is in your inbox and you're left to just deal with this mess right here in front of you. And that can be incredibly hard to deal with. Just even knowing how to deal with such a situation.

**Daniel Stenberg:** Yes. And in my case -- so I replied to his first email pretty instantly, and he replied to it again, and pretty much said that it wasn't a mistake, "I wasn't just rude, I'm meaning it." And I think that was what made me also take it slightly more seriously than just someone blurting out in the heat of the moment, or something like that. When you reach out to a lot of people, eventually you hit some really bad people too in that way.

**Jerod Santo:** Totally. It's just a numbers game, really. A sad numbers game.

**Daniel Stenberg:** yes.

**Jerod Santo:** And what was the case? Was it the case that his business had gotten hacked, or something?

**Daniel Stenberg:** It was really, really not easy to understand... But someone he claimed that he had lost his business due to some hack, and he lost his entire life basically - his wife and his kids and his job and everything. And he seemed to blame me for something, but it wasn't really clear how or what... But apparently he had found my email address in a way, so I guess that Curl was in there somewhere.

**Adam Stacoviak:** Yeah.

**Daniel Stenberg:** It was really not easy to tell.

**Jerod Santo:** Yeah. I couldn't understand it from his -- because you posted some of his correspondence on your blog, and I was reading it, trying to decide "Was Curl in the user agent or the attacker's footprint, or was it in his business' CMS software stack?" I couldn't figure out what the guy was talking about.

**Daniel Stenberg:** No, it wasn't really possible to understand exactly. You had to really make some guesses. So maybe, in some way, it was involved. I don't know.

**Jerod Santo:** Yeah.

**Daniel Stenberg:** And of course, it is involved in a lot of shady stuff...

**Jerod Santo:** Right. Well, it's a tool, and a tool can be used for good or evil, right?

**Daniel Stenberg:** Yes.

**Jerod Santo:** Ten billion users, or installs, or whatever that number is - more than every human on Earth, so you're gonna hit the good and the bad in the numbers.

**Daniel Stenberg:** Yeah. And among all those users that I have - you know, I said Instagram, and Spotify, and stuff - I know a few really ugly malwares and attack softwares that are using Curl as well. I know for a fact that some of them, really nasty ones are using Curl, too.

**Jerod Santo:** Does that weigh on your shoulders, or do you just kind of shrug it off, or what?

**Daniel Stenberg:** It's sad and unfortunate, but there's really, really nothing I can do about it, no matter how much I wanted to. I just have to live with it. If you make a hammer, some bad guys will use that hammer for something really bad.

**Jerod Santo:** Yeah. Well, in your license you could put "You cannot use this for evil."

**Daniel Stenberg:** Exactly. \[laughter\] So even if I had that, then would they care?

**Jerod Santo:** Well, that's the thing, it only keeps the honest people honest, right?

**Daniel Stenberg:** Right.

**Jerod Santo:** The evil person does not care about your license.

**Daniel Stenberg:** So no...

**Jerod Santo:** Yeah, so no. That does bring us to something that you can control a little bit more, but I bet it does have some weight on your shoulders, which is that there are vulnerabilities over time, and there are security disclosures, and there are serious things that are either in Curl's codebase, or inside of your purview... How do you handle security exploits, vulnerabilities? Surely, there's incidents that come to your desk and you have to issue a patch... What does that look like in your life?

**Daniel Stenberg:** \[00:39:55.08\] That's a good question. Of course, we have our fair share of security vulnerabilities. In two days we're going to do another Curl release, and I'm going to announce two more vulnerabilities. Usually, we do it like this - we have a bug bounty these days, so we reward security researchers, or anyone actually who reports a security vulnerability in Curl, that is confirmed a security vulnerability.

I think that's fine and good, because nowadays we can use sponsor money to pay researchers off -- or not off, but we reward them. So we get a fair share of reports on suspected vulnerabilities, and very few of them actually are confirmed in the end... But sure, eventually they are, and we make sure that we work with the reporters, we make a fix, and we announce that problem, and with the fix, and everything, and coordinate it with a release, when we release a new version with that problem fixed.

With this release coming Wednesday this week, we've handed out more than $5,000 now in bug bounties, and we're trying to gradually increase the amounts too, so that we can reward every new finding slightly more than previously.

**Jerod Santo:** That's cool. Is that a new thing?

**Daniel Stenberg:** It's a fairly new thing, because we started out -- we're using Open Collective these days to get/collect funds to the project, and we have a fair amount of recurring sponsors that are funding us monthly with money, and right now that's the biggest way to spend money, on the bug bounty... And we actually get more money in that we spend on the bug bounties. Right now we are in a fortunate position like that. I've learned that it's a good way to actually be able to pay these researchers, because a lot of them are trying to do this for a living... And if you don't pay them, they will go to another project that will pay them.

**Jerod Santo:** Right.

**Daniel Stenberg:** So I think in this way we can actually get a little of their time and their attention to actually try to find problems in our product.

**Adam Stacoviak:** Yeah. That's a great usage of those kinds of funds... It's also transparent too, because you've gotta put out there how you paid or who you paid for X, and like you said, if they're gonna do that stuff anyways to pentest applications, or do bug bounty stuff, or security research, it makes sense to use those funds from the community in a way that benefits the community.

**Daniel Stenberg:** Yeah, I think it works out really good. And then, of course, when someone reports a problem, we confirm it and we can fix it; it fixes the problem for a lot of potential users/people that could be vulnerable for that problem. So it works out really good. And then I think over the few most recent years we've also fixed a lot of the architecture things in Curl, so we actually decreased the number of problems that we find. The frequency has gone down. We don't find as many problems as we used to do back in the day.

**Adam Stacoviak:** Yeah. Speaking of a lot of people - we said earlier in the first part of the show that you've got a lot of users around the world, and one of the questions you have here is how you interact with that many stakeholders. You've mentioned before about how you keep motivated, which was a very humble portion of it, but how do you stay focused is the opposite. Motivation then turns into focus. How do you focus on the needs of that many stakeholders around the world?

**Daniel Stenberg:** Luckily for me - or maybe it's both an upside and a downside - I don't have that many stakeholders as it may sound like... Because most of my ten billion installations - they're done by users I never talked to, and they never contacted me, and I've never interacted with them at all. They're just using my product somewhere, and they don't file any bugs, they don't ask for help, they don't do anything. So I'm not in contact with them. That makes it easy, because I don't have to communicate... But that also, of course, gives me less feedback, so I don't actually know their problems, or what they would want in the next release, and so on.

**Adam Stacoviak:** Yeah.

**Daniel Stenberg:** \[00:43:57.03\] So I'm trying to stay focused on -- I communicate with people on the mailing list, and on the issues and pull requests, so I have a very small... I stay within my little community, and if people wanna affect me, and when I change that, they come to the Curl community and we talk about it. Then pretty much everyone has an equal voice and an equal vote for whatever we do.

Of course, if someone actually pays me for like Curl support or whatever, help them out or something, that of course will have a higher priority, because then I would work on whoever pays me to do something... Which, of course, that would also most potentially go back into the project.

**Adam Stacoviak:** That's interesting, because you've got that many users -- say that number again? Was it ten billion? Is that a confirmed number? Is that an estimated number? How did you come to that?

**Daniel Stenberg:** That's a very rough estimate, but I'm actually working on a newer estimate. I think it's actually more, because of the number of installations everywhere. It's in every mobile phone; there's a number of installations on every mobile phone even. And in pretty much every server, every desktop, ever internet connected device that you're carrying around...

**Adam Stacoviak:** So IoT devices are in there too, like non-human API pinging IoT devices?

**Jerod Santo:** Probably...

**Daniel Stenberg:** They're usually harder to count for me, so I usually don't count them... But they're certainly in there.

**Adam Stacoviak:** Well, then that would be you're on your track to trillions, because that's the estimate.

**Jerod Santo:** \[laughs\] That's the estimate of what?

**Adam Stacoviak:** The estimate is in the billions now, to close to trillions in the next few years.

**Daniel Stenberg:** Sure. I think Curl is often more used in slightly bigger IoT devices, and not in the tiniest IoT devices. But sure.

**Adam Stacoviak:** So not a doorbell, or something like that.

**Daniel Stenberg:** Yeah. It's impossible to say really firm numbers... So I'm just trying to count where I know Curl is used, and then guess the rest.

**Jerod Santo:** It might be easier to count where it's not used...

**Daniel Stenberg:** Yeah, but that's also hard... \[laughter\]

**Adam Stacoviak:** Yeah.

**Jerod Santo:** Yeah, it's a smaller number.

**Daniel Stenberg:** How many devices do we have on the planet?

**Adam Stacoviak:** And the non-planet ones... The ISS'es of the world, or the --

**Daniel Stenberg:** Exactly.

**Adam Stacoviak:** What's the recent Rover's name? Expedition? Not Expedition. Curiosity? No, Curiosity was the one from a few years ago. What's the name of this -- gosh, I feel terrible about my NASA hat on here...

**Daniel Stenberg:** Right. But I haven't had that confirmed either, so I don't think it's on Mars...

**Adam Stacoviak:** Yeah. We're speculating for you, don't worry.

**Daniel Stenberg:** \[laughs\]

**Adam Stacoviak:** That's something I think is really interesting, the wisdom you've just shared there, because while you may have seemingly infinite stakeholders to please, you've found a way to remain focused, which is staying within your lane, essentially... And that's maybe the advice you give to anybody who is in a similar shoe to you, which is "Stay in your lane, guard your time, guard your focus..." That's what you've done by not having to appease these 10 billion plus potential users. You seem to just focus on the community that needs you most, and everyone else just sort of falls off your purview, because it's not in your focus area.

**Daniel Stenberg:** I would say so. And that helps me also keep focus on the actual -- I mean, if someone brings me an issue or brings a patch or something, they are the focus; not if someone is using Curl in the billion instances somewhere...

**Jerod Santo:** Right. Squeaky wheel.

**Daniel Stenberg:** Yeah, I mean, they're outside of my vision. They're somewhere else. I don't have to care about them. So it's better to care about them who are actually here, now. And of course, make sure that we're staying on track, so that we're going in the right direction... Which, of course, is also really hard to say which is the right direction. We could go that way, or that way, but...

**Jerod Santo:** It could be also a function of the tool, what it does. If you think about a Swiss Army knife - I mean, some people just use a nail file, other people use the scissors, and then somebody uses the knife and they accidentally cut themselves and they come and tell you the knife needs to be sharpened, or whatever... I mean, I know for me I have never interacted with Daniel on his mailing list, or his issue tracker, or any aspect of his project, besides I "man curl" is about as far as I get, or I google "Curl, how to do this thing" again, for the hundredth time. Mostly I just use curl -i, because I like to see the headers. That's my biggest use case, curl -i, or just curl and then redirect the output to a file, so I can inspect the file...

\[00:48:14.08\] So I'm just using the nail file... So for a lot of people, Curl just works, because it's very powerful, but it can do very simple things. And a lot of us just use it to do -- I mean, sometimes I'll open up DevTools, and you can do the Copy to Curl... And that's really cool. But I see what that copies, and I'm like "Holy cow, there's lots of junk you can \[unintelligible 00:48:33.18\] into Curl." But I've never ever used any of that junk.

Now, there's power users who do, and you're probably having them on your mailing list, or in your issues, and they are maybe driving some of the project in that way. But lots of us, even if I'm not just using it on my iPhone, completely unaware, as most of your users are - I'm actually a person who types Curl onto my command line - I'm still not the person who's giving you the feedback... And there are probably thousands, if not hundreds of thousands of people like me, just happily using Curl from their command line to download a file, or check some headers, and that's about it.

**Daniel Stenberg:** Oh, absolutely. And of course, the next level is someone asking for help, but not from us, in a way. You know, posting on Stack Overflow, or asking their distro people, or in a forum somewhere else. So - sure, there are a lot of various degrees of users; most people, of course, never need any help, or have any problem, so they just go on with their lives and use Curl and be happy with it

**Jerod Santo:** Yeah. Do you get involved in those forums, like Stack Overflow, or anything? Or do you stay purely on the code?

**Daniel Stenberg:** I monitor it a bit. I answer sometimes... It's hard to give feedback on those sometimes, because sometimes I feel that the distance between me and the users are a little bit too big. It's better if someone else takes that. I feel maybe I'm a bit too entrenched in the details sometimes to actually answer the user who actually asked for a simple question. They didn't really wanna know how the engine works... \[laughs\]

**Adam Stacoviak:** "Hang on, Daniel..."

**Jerod Santo:** You copy and pasted this -- "Let me show you the third chapter of my book..." \[laughter\]

**Daniel Stenberg:** Sometimes like that. So sometimes I'm just like "No, no, I'd better hold off here..."

**Jerod Santo:** \[laughs\] That's wise.

**Adam Stacoviak:** That's good. What about managing the direction of things? You sort of have a product manager role kind of thing; you've got a cadence to deliver in terms of managing the continued development of it. Obviously, you've been doing this for a very long time, so you've either learned by the school of hard knocks, having done it yourself for so long, or you've read some books... Where do you derive some of the wisdom you have or may desire to have more of, as it relates to managing and directing the product itself?

**Daniel Stenberg:** I haven't read any books on it... Well, I've read a few books on how others have done it with open source, and stuff... But I think I primarily looked and worked with other projects for a long time, since I've been into open source, since way before I started Curl. So I've appreciated open source and enjoyed open source and worked with it and built open source code for a long time, and seen how others are doing it. And you know, if you join an open source project and participate in that, you can see what works and what you think is good and not good. "I would like this to work in my project", and I'm then trying to make sure that I'm doing it the way I would like it, -- I mean, if I was a participant in my project, I would want it to work like this. And then I just try it out.

And then, of course, I've done a few things that maybe weren't that good, and didn't work, and then we do something else instead. And I'm trying to listen in on what people are saying, because if you're just being humble enough and just ask people, they will tell you. Or if they don't tell you, it's probably good enough so that I don't have to ask, and I can just go ahead and pick whatever I want.

So I think it works out really good, to just ask people, see what others are doing, and then try it out. And even if it goes wrong, we turn and go another direction instead.

**Adam Stacoviak:** So you listen.

**Daniel Stenberg:** I try to... Which, of course, is also hard if nobody's speaking... Because that's also a problem we have sometimes. "I wanna make this. Should I do it this way or that way?" and then I ask maybe on the mailing list and there's crickets. And then I'm just "Hm... Maybe I'll take that way."

**Adam Stacoviak:** \[00:52:08.20\] Yeah. What do you think is the most viable channel you have then, in terms of inbound information to you in terms of like a response from the community saying "This is the direction I'm taking it" or "This is the direction it should go." "I'm taking it" meaning the user using it, and how I use it, or the usefulness of it, or the downsides of it. What's the most viable channel you have, do you think, that you get that feedback loop?

**Daniel Stenberg:** I think I have different channels to get different kind of users. Definitely, if I wanna do technical things or protocol-y things, that's the Libcurl mailing list. That's where we do all that sort of core architecture design stuff. If I wanna actually know how Curl command line users are actually thinking, then it's usually better to just ask on Twitter or somewhere where people have not opted in... Because even the Curl users mailing list, where people are actually using the command line tool - that's also a very self-selected bunch of people that usually had a problem when they arrived the first time.

**Jerod Santo:** Right.

**Daniel Stenberg:** It depends... I try them all, really, and see what I can get. Also, since a few years back, I try to do things nowadays as experimental features. So I land them in Curl and mark them as Experimental, so I disable them by default, to sort of try out the \[00:53:33.08\] before I unmark them as experimental and ship them for real in code... So just make sure that this is maybe what people actually want, and how it works, that people actually appreciate... I'm not sure if it actually makes any difference, but it makes me less reluctant to ship something in code, because now it's at least not carved in stone immediately, day one.

**Adam Stacoviak:** Right. It can be changed... It's sort of like a beta within a product.

**Jerod Santo:** Right.

**Daniel Stenberg:** Exactly. I had the opportunity to change the name, change some stuff before I actually carve it in stone and say "Now I'll support this forever?"

**Adam Stacoviak:** And there's an opt-in process for these experimental features, you said?

**Daniel Stenberg:** Yeah, exactly. Then you actually have to explicitly opt in when you build Curl. "I wanna have this enabled in my build."

**Adam Stacoviak:** That's in the Curl config, or that's in the build itself?

**Daniel Stenberg:** Yes, it's in the build itself. HTTP/3 support is still -- you have to actually build it explicitly enabled to get it there.

**Adam Stacoviak:** Gotcha.

**Jerod Santo:** Is that to reduce memory footprint, or bug potential...? Why couldn't I just opt in at runtime, versus at build time?

**Daniel Stenberg:** More of a bug -- I wanna reserve the right to change behavior, or maybe change the name of flags... I'm a little bit concerned that if I enable that by default, someone will run ahead and use that, and then will come back and be upset when I change it. So I wanna make it really -- when I do it experimental, I wanna make really sure that everyone is aware that this is experimental.

**Jerod Santo:** Gotcha. You want it to be as formal as possible, like a command line flag, \[unintelligible 00:54:57.00\] would be a little bit less formal, and people would be more likely to do that and rely upon it... Whereas if it's like "Actually, you have to build Curl with this experimental flag..." - not very many people are gonna do that, unless they actually are willing to experiment, like "Yeah, I'm experimenting here."

**Daniel Stenberg:** Yeah.

**Jerod Santo:** It makes sense.

**Daniel Stenberg:** But it's a hard -- I have to make some sort of balance there.

**Jerod Santo:** Don't you have some sort of a survey you do as well? I'm thinking of an inbound way; some sort of a conference, or at least a meetup.

**Daniel Stenberg:** That's true. Well, both, actually. I try to do an annual survey, just among users really, where I try to get as many Curl users as possible to respond to and answer... That gives me feedback on what people use, and what they want next, and what they think about things in Curl. So that's actually a pretty good way to get an overview of where people -- especially what people use in terms of "What protocols are you using with Curl?" and stuff like that.

\[00:55:57.16\] And then we also have an annual Curl developers meetup, which is also a good way to talk to people physically. Not physically these days, but at least talk to people live and see where other Curl developers wanna go, and what they think.

**Jerod Santo:** And that's proven to be well worth your time and effort to put that together?

**Daniel Stenberg:** Yeah, both of them are excellent ways to get feedback, and I think they also work really good as an inspirational source. When you read and learn where people are, and where they wanna go with Curl, I think that's a good inspiration, and it keeps me motivated. Often, they help to bring out new ideas of how to do things, or what to do going forward.

**Break:** \[00:56:41.13\]

**Jerod Santo:** So we'd now like to learn a few things from the Curl master himself - tips and tricks, things you may or may not know about Curl, probably Adam and I will not know about Curl, that Daniel does know about Curl. Lay some on us. Help us improve our Curl-Fu.

**Daniel Stenberg:** Okay. First, of course, I'm going to keep up with what I do; on a lot of forums I say that you should not use capital X and the keyword when you're just doing regular Curl stuff, because Curl does the request verb by default. So if you just type Curl in the URL, it will make a get; you don't have to actually tell it to do a get. If you do curl -d, some data and a URL, it will do a post. But that's boring.

One of my favorite command line options, that so many people don't know about - and it may be not always the most useful, but it's --libcurl. So you make up your fancy Curl command line, do whatever you want, and then you add --libcurl filename.c, and do the same thing again. Then it will generate a template C code for doing the same thing as a program.

**Jerod Santo:** Okay...

**Daniel Stenberg:** Then you just rebuild that linked with libcurl, and you have your own application that does that little thing as a program.

**Jerod Santo:** That is cool. How many languages does that support? Can you do it in Rust?

**Daniel Stenberg:** It supports C... \[laughter\]

**Adam Stacoviak:** It supports C...

**Jerod Santo:** I knew you were gonna say that, but I had to ask anyway. \[laughs\] It supports C...

**Daniel Stenberg:** But the good thing here is that most bindings for libcurl - they use more of less inspired from the API from libcurl itself, so it's usually fairly easy to translate that to all other languages, if you're just using a libcurl binding.

**Jerod Santo:** That's super-cool.

**Daniel Stenberg:** So you could translate it easy to PHP, or PyCurl, or the other bindings.

**Jerod Santo:** Now, why did you develop that one? What made you do that? Maybe because you were debugging somebody else's flags, or something, or...?

**Daniel Stenberg:** \[01:00:04.09\] That question is very common. "I wanna do this in libcurl. How do I do it?" And usually, a lot of users already know how to do it with a command line; they just wanna do that exact translation. And I figured, "Well, Curl knows this, so I could just do the translation." I already do it, basically; I just have to also generate the code for it in text format, and just output it.

**Jerod Santo:** Yeah, that's cool.

**Daniel Stenberg:** It has actually been very useful many times to just show users and help users to get started.

**Jerod Santo:** Yeah. It sounds like a time-saver for support.

**Daniel Stenberg:** Yeah. Of course, it doesn't actually produce a completely, in all cases, replica, because there are details, but it's usually a very good template to get started with, at least. When you have that, you can get that going, and then you start working from that.

**Adam Stacoviak:** Yeah. Listeners, if you want a link to this - I'm gonna link to your --libcurl chapter in Libcurl Basics, in your book, Dan... Because hey, that's what do you whenever you -- it's TL;DL. Too long, didn't listen. Maybe it's just a link of docs, so I'll link that up in the show notes when we get there. It's very informative... I mean, that's cool.

**Daniel Stenberg:** I like that option.

**Jerod Santo:** Hit us with another one. Do have more?

**Daniel Stenberg:** One thing that I imagine a lot of users already know about, but when you're doing a lot of testing/poking, you wanna know about the -w option, also --write-out. It's a way to extract extra metadata from the previous transfer. So you can, for example, easily extract the HTTP response code, the size of the transfer, or a lot of different timings from the previous transfer... So for example if you wanna know exactly how long time Curl spent on the name lookup phase in the transfer, you can actually output that.

So they appear as little variables that you can output in a long string, so when you have 30 different variables that you can output, then that gets output after the transfer is done.

So maybe you'll throw away the output and just output a lot of data from the transfer. If you do that on a cron job on every minute, you can see how the name result times vary over the day, or whatever. A lot of fun things you can extract with that.

**Jerod Santo:** That's pretty cool. What about the data itself? Are there any interpretation tools built in, or modes? I don't think it does JSON parsing... Or will it do anything?

**Daniel Stenberg:** No. I've actually tried to make that as a separation where I draw the line.

**Jerod Santo:** Okay.

**Daniel Stenberg:** Pretty much, Curl delivers the data, or sends the data the other way, but it doesn't actually interpret the data. It doesn't handle the data. You pass that on to something else. You do jq if you have JSON, you have an HTML parser if you wanna parse the HTML... But Curl itself doesn't do that.

**Adam Stacoviak:** It keeps the tool simple, I bet.

**Jerod Santo:** UNIX philosophy, yeah,

**Daniel Stenberg:** It's simpler, and it also makes me more focused. Actually, I think it's a pretty good line in the sand. "This side we can do it, that side where you deal with contents, no. Curl has no idea about what content you're delivering."

**Adam Stacoviak:** Yeah. Just the transfer of it.

**Daniel Stenberg:** Exactly. The transfer of whatever...

**Jerod Santo:** Whatever it is.

**Daniel Stenberg:** ...whatever it is.

**Adam Stacoviak:** It could be \[unintelligible 01:03:07.14\] who knows.

**Jerod Santo:** Now, you've shared this before, but it is worth noting that you can output to a file without a redirect, right? Without a pipe, or something like that. You can do a certain flag that will just download the file as is. It's similar to wget's default functionality. Do you wanna re-cover that for those who--

**Daniel Stenberg:** Right... If you add the -O option, it will use the file import of the URL locally. So if \[unintelligible 01:03:33.09\] it will use that ending file.jpeg as a local file name, if you use -O.

**Jerod Santo:** And it will put the data in the file, yeah.

**Daniel Stenberg:** Yeah.

**Adam Stacoviak:** Way back when we first had you on the show you blew my mind, because -- this was the tail end of the show, too; it was like a magic feature, you described it as... And it was actually creating a Curl RC file, and in there putting --remote-name-all, so that it automatically passed -O by default.

**Daniel Stenberg:** \[01:04:08.17\] Yes, exactly, you can do that. That option is similar, but then that option will be used for all URLs. If you specify a number of URLs, it will apply that to all of them.

**Adam Stacoviak:** Which may not always be the desired case if you're a power Curl user. In my case, the majority of my use of Curl is that...

**Jerod Santo:** \[unintelligible 01:04:24.04\]

**Adam Stacoviak:** So it'd be a nice and smart default for me, but maybe not for everyone. That's cool.

**Daniel Stenberg:** Right. And when I created Curl, I actually wanted it to be more like the cat command in Curl; you cat a file and it outputs it to determine -- I wanted Curl to be that, but for a URL instead, so you would \[unintelligible 01:04:40.29\] I felt that was the UNIX philosophy, to just do that, so that's why.

**Jerod Santo:** It totally is. Print to stdout and it integrates so much better with all the other command line tools when you do that.

**Daniel Stenberg:** But then you need an optional one to save it as a file.

**Jerod Santo:** You know, when your Coca-Cola and Pepsi comes along and they say "Well, we have Pepsi Zero", you have to say "Well, I can do Coke Zero, too." \[laughter\]

**Adam Stacoviak:** Touché. Touché.

**Jerod Santo:** Any other whizz-bang tricks for us before we move on?

**Daniel Stenberg:** I could possibly mention a pretty specialized option, it's called --next. It's a way to separate a different set of options. So you can use -- for example, if you wanna do get and post within the same command line, you can do Curl and a URL, and then you could use --next, and then you could us -d with data and a new URL, because then you would first do a get, and then you would get a post. Because --next will sort of reset the state of the command line to start over. And you can do that many times in a command line. Then you could do \[unintelligible 01:05:43.18\] in a long sequence.

**Jerod Santo:** So you're kind of chaining commands, but you're not doing separate commands.

**Daniel Stenberg:** Right.

**Jerod Santo:** It's one Curl command.

**Daniel Stenberg:** And by keeping the same command line, you can reuse connections, and stuff like that, so you can make it much more performant than you could otherwise. That's why it's there --

**Jerod Santo:** I see. So it keeps like a TCP connection open, versus if I did "curl this && curl that && curl this". Those would be new connections every time.

**Daniel Stenberg:** Exactly. Then you would have to set up a new connection each time...

**Jerod Santo:** I see...

**Daniel Stenberg:** ...which, of course, when you do two commands, once it doesn't matter; but if you're doing it in a loop, perhaps a million times, it will actually matter.

**Jerod Santo:** What about retrieving and maintaining session cookies, and stuff like that? Is it part of that as well?

**Daniel Stenberg:** Well, no, because if you wanna store cookies, you usually can do it two ways. You don't have to store cookies if you don't want. For example, if you wanna do it like that, you wanna do a lot of requests using this one command line, and just keep using cookies. You can just type -b and a file name that doesn't exist, so it just gets started to use cookies, and it will use cookies automatically in the session.

Or you can use -c, which creates a cookie jar as a file, so then you can store it on disk and then in repeated invokes you can read it back from the file. There are several ways to do it, depending on what you wanna do.

**Jerod Santo:** Okay.

**Daniel Stenberg:** If you wanna save the cookies for the next day, for example, you wanna save it in a file and use it again the next day, and update that file over and over every day, perhaps.

**Jerod Santo:** I think the common use case there is like your first request is a post to do some sort of sign-in, and then you store the cookie, and now you wanna get a protected page as that user. So if I use -b --

**Daniel Stenberg:** Like a login, and then you get the file, yes.

**Jerod Santo:** Yeah. I'm logging in, and now I'm getting a page that's private to that user.

**Daniel Stenberg:** That's a very common question also, because often you wanna get the login page first, because then you get a cookie. So you store that cookie in the cookie jar, and then you do the post, which makes the login, and you get updated cookies, and then you get that magic file you wanna \[unintelligible 01:07:42.06\]

**Jerod Santo:** Gotcha.

**Daniel Stenberg:** So that's usually three requests. So you just create the cookie file first, and then you use the cookie file and update it.

**Jerod Santo:** So are you doing -b on those, or are you doing --next?

**Daniel Stenberg:** -b is for reading, and -c for creating.

**Jerod Santo:** Oh, okay.

**Daniel Stenberg:** Typically, you do both, actually.

**Jerod Santo:** Okay.

**Daniel Stenberg:** Both reading and writing, if you wanna update the file as well.

**Jerod Santo:** \[01:08:04.07\] But if I did just --next, that would not work.

**Daniel Stenberg:** --next - it doesn't enable it; so you have to enable the cookies specifically.

**Jerod Santo:** Okay.

**Daniel Stenberg:** You would -b first for enabling the cookie, and then you could use -next and it would keep using the cookies.

**Jerod Santo:** Gotcha.

**Adam Stacoviak:** And those cookies in the cookie jar would carry through to the \[unintelligible 01:08:21.27\] --next and whatnot, if you did it in that first part, in the get part.

**Daniel Stenberg:** Yes, exactly.

**Adam Stacoviak:** Gotcha.

**Daniel Stenberg:** Then you can do a full login and get sequence in one command line if \[unintelligible 01:08:33.24\] good enough.

**Adam Stacoviak:** Sure. Where do you send people to to discover these features? For example, I will do man curl, for example, as Jerod will say, before. But deriving knowledge from manuals is difficult, let's just say. It's not written to a human, or from a specific use case, so I often find myself googling, or something else, and I discover features. Where do you point people to to discover features like this of Curl, to find useful or new ways they never thought they would actually find Curl useful?

**Daniel Stenberg:** It's of course hard, because there are so many ways to use it, so it's hard to cover everything. My idea or my vision is rather to have that sort of description or tutorial-like things to be documented in the Everything Curl Book, which is everything.curl.dev, which is meant to be more of a getting into stuff like that. I mean, the man page is good, but that's more for a reference if you know exactly what you wanna do, figure out how to do it, not getting into learning things. So that's what I want the Everything Curl Book to be.

**Adam Stacoviak:** Is this like a living book then, in that case, where it constantly grows and evolves, where it's never really written, it's more like constantly in writing mode?

**Daniel Stenberg:** It is constantly incomplete, yes.

**Adam Stacoviak:** Okay... \[laughter\] That's reassuring and also disappointing. Mostly reassuring!

**Daniel Stenberg:** It's fairly thorough, but since the project is moving, the book will remain incomplete.

**Adam Stacoviak:** Yes. I mentioned that earlier, too. And Libcurl Basics is actually where you have that --libcurl where you'd mentioned earlier; we're gonna link that up, so that'll at least give people the inroads to everything.curl.dev.

**Jerod Santo:** Cool URL.

**Adam Stacoviak:** We'll link up to the main page too, where you can dig and peruse as you like.

**Daniel Stenberg:** Yeah, that's also new since three years. I have two new Curl on domain something. Curl.se and curl.dev. I got them late last year.

**Jerod Santo:** Weren't you on hacks.se or something before?

**Daniel Stenberg:** Yeah, curl.hacks.se, until November last year.

**Jerod Santo:** But now you've got curl.se.

**Daniel Stenberg:** Yes. And then I got curl.dev.

**Jerod Santo:** Which one are you using?

**Daniel Stenberg:** I'm using curl.se, actually. It's shorter. And then I figured it was more fun to use the se one than the dev one. I don't know why, but...

**Adam Stacoviak:** Is se for Sweden? What is .se?

**Daniel Stenberg:** Yes.

**Adam Stacoviak:** Okay.

**Daniel Stenberg:** Se is Sweden. So I got the se one first. Actually, I've been trying to get it for a very, very long time. It became available and someone else snatched it before I was able to buy it. It turned out that it was a friend of mine who gave it to me.

**Jerod Santo:** Oh, that was nice of him...

**Adam Stacoviak:** Oh, nice. They bought it on your behalf. Nice. Do you ever run into any sort of copyright issues in regards to Curl, considering domains and stuff, like people sitting on stuff that you shouldn't? Is that ever an issue for you?

**Daniel Stenberg:** You mean people using Curl to download things they shouldn't?

**Adam Stacoviak:** Well, do you ever have to defend, I suppose, what you have as a Curl copyright? Is there ever anybody using it nefariously, or incorrectly, or downright illegally, that you have to defend? ...considering, for the most part, a one-person maintainership, a community around it, you'd mentioned the Open Collective fund and how you use that for security bugs, you'd mentioned your work relationship and how that interacts with Curl and enables you to work on it full-time... I'm just curious if you've got an attorney or a legal department, or a need for one.

**Daniel Stenberg:** \[01:12:02.07\] Very rarely, actually. It happens, but it's never happened big-time, and it's never become any serious issue or problem. So fingers crossed... It seems to be working fine. But of course -- I mean, I would figure it out if i had to, but I haven't had to do it with any particular big thing.

I mentioned that before, that there was once a lawsuit that involved technology that Curl uses in the U.S, but it never went anywhere and I don't know what happened. So it's never been neither copyright, nor patents, nor anything else has struck sort of struck us in any particular way.

I was once contacted by a company called Curl Inc, that owns the Curl.com domain. It was very early on in the Curl project. They basically asked, "Hey, what's this Curl thing? We are Curl. What are you?" \[laughs\] And I replied, basically, that "Yeah, we are Curl blah-blah-blah", but they've never responded back again. And they still exist as Curl Inc, so I figure they have just learned to live with us. We certainly don't--

**Adam Stacoviak:** It kind of reminds me of that Spiderman meme where the Spidermans are pointing at each other... So you can have like one saying, "I'm Curl." "No, I'm Curl."

**Jerod Santo:** Yeah, "You're Curl." "No, you're Curl."

**Daniel Stenberg:** Right. And there was actually a point in time where \[unintelligible 01:13:20.08\] someone would actually mistake our Curl for their Curl. That's some sort of web programming language; I don't know exactly what it is, but it seems to be apart enough so that it actually doesn't confuse anyone.

**Adam Stacoviak:** I was curious because you mentioned domains, and changes, and anytime you have that, you've got separation between what I saw last and what I think is true, so you might have someone trying to leverage those changes beneath you, in terms of changing URLs, or Curl.dev, or Curl.se, and masquerade as the real Curl.

**Daniel Stenberg:** Right. I know that there have been - I don't know if they're still around... There are some clearly free-loading sides that have registered some Curl-sounding domain, almost some top-level domain... \[unintelligible 01:14:12.29\] then redirect to my sites. But that seems more like a really lame attempt to make money, because it doesn't really work, and I think they've mostly closed down.

**Adam Stacoviak:** Well, 23 years is a big deal, and we're here to say congrats, and thank you for making an awesome tool and sticking it out, and sharing your knowledge back. You are just such an example of someone having a hobby that turned into the full-time thing, and... It's just a big deal, and we really appreciate you coming back on this show three times now and sharing your vantage point of what's changed... We're talking about H/3 versus H/2 this time, and all the changes that have happened, and we just really appreciate the work you've put in... Hopefully, that's also motivation to keep it going as well.

Is there anything we haven't asked you as part of this call that you're just like, "I just really wanna share this before we go"? Is there anything we haven't asked you at all?

**Daniel Stenberg:** I think we've covered a lot of ground... I can't recall anything we've missed.

**Jerod Santo:** I would real quick just like to encourage you to keep writing as well... Because not only the work that you're doing on Curl is important, but I think that you're writing about the work you're doing on Curl and about your trials and tribulations, and things you find, and even just the funny moments, is awesome. I really appreciate reading what you write, and I know a lot of other people do, too. So keep up the good work on the blog as well.

**Daniel Stenberg:** Oh, thank you. I try to do that. I think it's fun, and I think it's a good way to reach out with all sorts of things.

**Adam Stacoviak:** When you're having a bad day, or you don't wanna deal with issues, or the mailing list, or something else, just write, you know? \[laughter\] You've got another thing to do, you know? Why not. But seriously, Daniel, thank you so much for all your efforts into Curl. I appreciate it as a tool, I appreciate you as a human for doing what you do in open source and being an example to follow. Thank you so much.

**Daniel Stenberg:** Thank you.
