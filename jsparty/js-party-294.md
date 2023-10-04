**Amal Hussein:** Hello, everyone. It's me, your host, Amal Hussein. This is JS Party, a weekly celebration of JavaScript and the web, and we're back today with I guess what I would consider maybe a semi-emergency pod... Semi-emergency because - yeah, this was all scheduled in the last few days. We bumped up our schedule again, to kind of squeeze this discussion in... But I'm so excited to be able to have this discussion on air. With me for today's show is Kball. Hello, welcome, Kball. It's been a minute.

**Kevin Ball:** It has. Well, I got a new job, and then there's conflicts, and stuff. But I'm excited to be back on the show.

**Amal Hussein:** I know, it's so funny. The last show that I think I was on with you we were talking about our careers, and then you were like "Yeah, I'm thinking about doing something new", and then the next conversation I had with you like two weeks later you were like "I started something new." So congrats! Yay! Very excited for you. And Chris. Hello, Chris.

**Christopher Hiller:** Hi.

**Amal Hussein:** Hi. Yeah, it's really early for Chris, everyone, so... Send Chris some good vibes for him to survive this early morning recording... And we're recording very early because we have some amazing guests from Europe. Matteo Collina. Hello, Matteo.

**Matteo Collina:** Hello! Thank you very, very much for recording early, for the early wake-up to everybody. Sorry about this...

**Christopher Hiller:** Don't feel bad. It's 9:15am.

**Amal Hussein:** ...on the West Coast. I mean, I've had lunch, just to be clear.

**Christopher Hiller:** Yeah. It's not even early. It's just me.

**Matteo Collina:** Ah, No worries. You know we all love you.

**Amal Hussein:** Our resident Grouch... Am I allowed to say that? That's not bullying, right? That's \[unintelligible 00:04:58.26\] I hope... And James Snell. Welcome! Hello, James.

**James Snell:** Hello.

**Amal Hussein:** Hello. Is this your first time on JS Party, James? Because Matteo is like a regular. This is like his fourth show.

**James Snell:** I think this is my first time. I've kind of lost track over the while... But yeah, I think it is. I think it might be.

**Amal Hussein:** Yeah. And so we've invited James and Matteo today - both of them are members of the Node.js Technical Steering Committee, they're both core contributors to Node, been with the project for a very long time... They both contribute to the open source ecosystem as a whole... Both incredible people, and we've invited them here today to have a very important discussion, a very nuanced discussion on kind of the rhetoric that we're seeing in the community regarding Node versus Bun, Node versus Deno... Just kind of comparing Node to other runtimes... There's a lot to kind of talk about in today's show, but we really hope to kind of really set the tone for why some of these comparisons are not even fair comparisons, or they're not necessarily the best comparisons to be making, but also just -- anyways, lots to unpack. So before we get started with the show, Matteo, can you tell us a little bit about yourself, for people who don't know you?

**Matteo Collina:** Of course, Amal, you don't know me, so let me introduce myself. Hi, everyone. I am Matteo Collina, member of the -- actually, vice chair of the Node.js Technical Steering Committee; such a phenomenal title...

**Amal Hussein:** I didn't know there was layers to this thing...

**Matteo Collina:** There are. It's the one that takes the minutes, and writes the minutes out. So that's what the chair and the vice chair do, essentially. They prepare the minutes and they push the minutes. And then they host YouTube sessions. So that's the role. So that's why I got the spot.

Then board member of the Open.js Foundation, then co-founder and CTO of a company called Platformatic. We are actually doing 1.0. on Tuesday, next Tuesday, 26th of September, so please tune in to our stuff. And I don't know, my software runs on your computer, so I don't know, treat me well. This is pretty much the byline... I have, I don't know, 22 billion downloads per year, or something like that, on npm, if the download analytics works... And so something around that. So it's a "my software run on your computer" type of situation.

**Amal Hussein:** Yeah, yeah, we got it. Yeah, you are the -- whatever. I was gonna say a word that was gonna get bleeped out, so I won't say it. But yes, you're awesome.

**Matteo Collina:** Bleep!

**Amal Hussein:** Yes, bleep. Exactly.

**Matteo Collina:** Thank you. \[laughs\]

**Amal Hussein:** So James, what about you? This is your first time, so you have to give us an extended intro? Also, tell us how you ended up in Ireland, because that's where you're based?

**James Snell:** No, I'm not in Ireland. I'm in California.

**Amal Hussein:** What the hell? Why did I think that you were in Ireland? This is so strange.

**James Snell:** Because I used to work with NearForm, which is based out of Ireland. I think that's where we met, was probably one of the NodeConf EUs, or something like that.

**Amal Hussein:** Yes, that makes sense.

**James Snell:** \[08:05\] A lot of folks thought I live in Ireland, but... Nah, I'm in California. I'm all the way out here.

**Amal Hussein:** Cool, cool.

**James Snell:** Yeah, so I've been involved with Node since 2015, contributed all kinds of stuff, some were with Matteo... \[unintelligible 00:08:18.24\] all of like the URL parser, and HTTP/2, and a whole bunch of things have been added to Node since 2015, that I'm largely responsible for. The way I put it is I'll add the bugs and then encourage other people to get involved with the project to fix them... Which has been quite successful over the years.

Today I'm working on not just Node, but I'm at Cloudflare. I work on the workers runtime itself, and also the open source kind of kernel of that called Workerd... So between Node and workers, I touch a lot of the stuff that folks use.

**Amal Hussein:** Yeah. So before we kind of get into the meat of this Node versus X kind of comparison, I would love to kind of set some context for folks just around what is Node, and how is Node governed, and just the whole -- the machinery, the very... I don't know, I think it's fairly sustainable, to some degree, in the sense that getting into the top 100 contributor list for Node is not easy. There's a lot of people contributing. So can you just tell us a little bit about how is the project structured, how is it governed?

**James Snell:** The structure of it - it's pretty straightforward. You have the foundation, which is kind of like just the legal home for the project; the foundation holds the Node brand. They provide just kind of backing and support for legal and marketing and those kinds of things. But day to day, the technical ownership of the project, kind of what happens in the project itself is governed 100% by the contributors to it. There is a Technical Steering Committee, and those are made up of kind of like the longest-term and the most trusted contributors. But it technically has kind of like the final say on things, but only if the other contributors can't agree. So if somebody wants to make a change to something, and other people come up and say, "No, we don't think that should be done", and there's a disagreement that can't be just resolved naturally through conversation, then the Technical Steering Committee will come in and say "Okay, well, we've looked at it, and here's what we think, and here's the decision." But day to day, it's the contributors that make the decisions, what happens in the project. I've tweeted about this, there's no roadmap. So you can't go to a product manager for Node and say "Hey, what are you going to deliver next quarter?" We don't know. It's whatever the contributors decide that they want to work on, what they want to add. Yeah, that's pretty straightforward. Matteo, do you have any...?

**Matteo Collina:** Yeah, that is something that I want to say on this topic... So there is a really important thing on the governance that can be fixed, that is important, that we don't need to forget. The governance of the project is set up so that no company whatsoever can own the project. A hostile takeover is not possible by the bylaws of the project. So right now on the Node.js Technical Steering Committee only one third of those seats can be of one specific company. This means that a company cannot essentially take over the roadmap of Node without considering the rest of the community, which - it's great, from my point of view.

**James Snell:** And this is critically important... So I've had people raise the fact, it's like "Oh, IBM used to pay you to contribute to Node. Isn't that like taking over?" It's like, well, no. When I got involved, when I was at IBM and I got involved with Node, we very consciously made a decision... At that time, I was the technical lead for all things Node within IBM. So I was kind of the gatekeeper. And when it started coming in where IBM wanted to get involved in the project and started contributing, we had folks within IBM saying "Hey, I want to get involved with that" and I was like "No. Wait. We don't want to overwhelm the project, we don't want to bring too many people into it."

\[12:22\] We want to take a very careful and cautious approach to getting involved with the project, so that it doesn't just go from one company, one corporate master to another corporate master, and then we end up with the same issues. Very, very intentionally, just like hold off; we're only going to be doing things here that are for the benefit of the community. We're not going to come in to try to do a corporate takeover of the project.

And that was critical at that time... I don't think Node would have survived if it just went from one corporate master to another. The guidelines that we put in place for "No, it's not going to be governed by one commercial interest", that was absolutely critical for the project to survive.

**Christopher Hiller:** This is foreshadowing people.

**Amal Hussein:** Yeah, yeah, it is. Well, so that's like a very -- I feel like sometimes when you thank your ancestors for making good decisions kind of thing, where it's like, "I thank whoever made those bylaws for having that kind of foresight..." But I'm sure that came out of a need, right? So can you talk about that? Like, there was some drama that kind of birthed those laws... Yeah, Matteo -- this is a podcast, so you can't see Matteo's face, where he's like "Oh, no...! No way. Drama, drama... Drama in the JavaScript community... Drama..."

**Matteo Collina:** You have opened a can of worms, Amal. You don't know how big of a can of worms you have opened.

**Kevin Ball:** Hold on, hold on, because I want to ask a question... Because we're talking about drama, and we're doing a lot of talking around. Let's like lay the stage a little bit. Like, we're having this conversation because Bun recently launched their -- was it 1.0 version of their runtime?

**Matteo Collina:** Yeah.

**Kevin Ball:** And there was all this kerfluffle and drama online. And "Oh, my gosh, Node is dead. Why is Node not doing this? Why is Node not doing that?" And first off, most programming languages have multiple runtimes, right? So like thinking about Ruby... Nobody says, "Oh, my gosh, Iron Ruby happened. MRI is dead. There's no use for it." Or "JRuby happened. What is MRI doing?" There are multiple different runtimes that make different types of trade-offs. Because as we all know, engineering is fundamentally about trade-offs.

**Amal Hussein:** And use cases, too. I mean, there's a need for secure JavaScript, which is why for example there's a new secure JavaScript runtime being worked on, where it's like "How do we run JavaScript in the most secure way, because we have some really specific needs. This is going on firmware, and..." So yeah, like...

**James Snell:** Workerd is a clear example of this. Workerd is still V8, it still runs JavaScript, it has a lot of the same APIs, completely totally different runtimes than Node or Deno or Bun, and that kind of thing, and it's still relevant in this exact same space.

**Amal Hussein:** Yeah. And to double down on that, there's multiple JavaScript engines. So depending on where you're using JavaScript, you're not even running the same engine, which is why there could even be bugs between engines, and different behavioral issues. And I can tell you, from my time contributing to Test262, which is the conformance suite for ECMA, the language - it's literally the library used to test JavaScript - you learn a lot of the different nuances between engines... And I can tell you that JavaScript core, which is the engine in WebKit, which is also the engine that powers Bun, the engineers at Apple really, really, really prioritize performance. It's one of the reasons why they're also slower to implement features into the engine, because they really do things in a very performance-conscious way. Because nobody wants to explain to Steve Jobs why the iPhone is a little slower, you know...? And so it's just -- yeah, for what it's worth, throwing that out there.

**Kevin Ball:** \[16:10\] But I guess what I want to say is before we start going into the trade-offs and the choices that Node has made, versus Bun, versus whatever, I want to get out there that this is a manufactured controversy. This is --

**Matteo Collina:** Let me state that -- let me take over here, and state that stuff. Both James and myself, and most of the Node -- I would say all, but maybe somebody not, but I can just say all the Node.js Technical Steering Committee and all the people in the project are very supportive, and they've always been very supportive with the effort that Jarred is doing with Bun and the different trade-offs he has made, and everything he has done with the project, okay? To be honest, everybody here has been supportive with him, even explaining to him how certain APIs work, or reporting bugs, incompatibilities, and things like that. So everybody has been super-supportive with Bun, with the launch. The two projects are friends, and to be honest, there was no jokes or implied "We will replace Node" or implied "We will destroy Node" assumption from the Bun team. And overall, the Bun team has always said "We wouldn't be here if Node was not here." There was \[unintelligible 00:17:30.07\] mistakes of Node here that set that stage. So I just wanted to clarify...

**James Snell:** And I've seen some comments on Twitter, and stuff like this, where people are just like "Oh, the Node folks are scared of Bun", and all this kind of stuff... And just to be absolutely clear - no. Absolutely none of the drama that has been around this Node versus Bun thing, none of that drama can be attributed to anyone in Node, or Bun. \[laughs\] So from those projects themselves, none of that drama can be attributed them.

Now, there have been people -- there's been some back and forth, where Bun's like "Hey, we're faster", and we've had some contributors like "Well, maybe you're not faster than Node on this benchmark." We've had people point out little technical differences, and there's that. But the drama that's kind of come from some of those conversations has not originated in the projects themselves.

**Matteo Collina:** The drama is all Twitter-manufactured, okay? It's all hyped tech Twitter, and comments on the Twitterverse, tech Twitter... Or tech X at this point, because I don't know who --

**Kevin Ball:** I mean, I feel like it's coming out of the people who've started saying -- or who are losing traction on their AI versions, right? There's all the AI tweets, "This is dead. ChatGPT has destroyed it." There have been a few of those, and that's like losing steam and energy online, because it's turning out that, well, it's an advance in some areas and not in others. It's a real technology, not magic. And so now they're looking for some new controversy. "Node is dead, because Bun is faster on this thing!" So I don't know...

**Amal Hussein:** Yeah, this is why I wanted to have this podcast discussion, because there's just a need to teach people "Hey, when you're making comparisons, understand what to compare." And yeah, obviously, people don't understand, Bun couldn't exist without Node. Literally. And so understanding that not only did people from the Node community directly contribute -- directly or indirectly contribute to the shaping of Bun, but understand that there's certain things that can happen in a new shiny runtime like Bun that can't happen in Node.

For example, Node actually is running and distributed on lots of machines, changing things drastically around how cache is managed on packages, or whatever... All these things have huge ripple effects in the wild when you actually have like consumers. And edge cases are not like edge cases; they're like actual bugs. And so I don't know, I don't even think it's a fair comparison even from that perspective... How can you compare something that's new, to something that actually is in the wild, serving customers, right?

**Matteo Collina:** \[20:03\] Just to give you a hint of the sheer size of the Node project... Currently, Node.js is doing one, two, three, four, five, six, seven, eight, nine... Ten... Quite a lot of different binaries that you can get from the website. Now, those binaries are actually -- I think about around 10 different binaries; I don't know that number. I stopped counting. Those binaries are taken and then tested across all the combination of operating system, and CPUs, and so on and so forth. More or less with probably a matrix of maybe 50-something different environments, just to give you the hint of scale. And Node runs equally on those; it runs from your little tiny ARM Raspberry Pi, to Graviton systems on AWS, to Ampere systems everywhere else, to M2s, which are different, unfortunately... Okay, sorry... Which are different to M1, M2s. Apple silicon is still ARM, but it's just different, a slightly different flavor of the binary. Then you have Ubuntu and Windows. Let's talk about Windows, folks, because this is a problem, okay...?

**Amal Hussein:** And it works on my machine, okay...? \[laughs\]

**Matteo Collina:** It works, yeah. It works everywhere. So this is the gist. On top of that, there is the fact that Node does not break things. Node tends to prefer to not break things, okay? Oh, thank God, I would love to make it faster by breaking --

**Amal Hussein:** Similar to the web platform? Yeah, of course; you can't move as fast as you want to.

**Matteo Collina:** Yeah. I would love to break out of it, okay? Literally, half of it is -- there's quite a good chunk of it that's legacy. Now, if you're maintaining, if you're running an app in production, and we ship a version of Node that that thing cannot run anymore, you're probably going to be "Bleep!", and throw "Bleep!" at us...

**James Snell:** And it won't matter if it's ten times faster. "It doesn't run my code ten times faster, because it doesn't run my code anymore", right?

**Matteo Collina:** It doesn't run at all, okay? And there are, I don't know, two million plus packages on npm, and breaking a good chunk of those - it's not on the table. So shipping big breaking changes, and even slightly breaking compatibility -- we try not to as much as possible, especially on stuff that's been around for quite a long time.

**Kevin Ball:** Well, and some of this is natural project lifecycle, right? When you have an early project, you can make different choices. We saw this with Deno, too. And then as you start to get more people actually using your thing, and depending on it continuing to work, and maybe you move beyond the early adopter crew who's willing to deal with things breaking and having to fix it, into somewhere mid-stage, where people actually are depending on this to make money... And you have to make different stability guarantees, and you have to make different compromises in terms of your choices.

So once again, I'm coming back to - this is like the same technology cycle that we have seen, at least as long as I've been in the industry, which is 20 years at this point; there's not that much new here. What's new, if anything, is this pace of Twitter drama... But like actually, that's not new either. I remember the frontend wars, and all those things... And just last week we had the emergency pod about TypeScript and no TypeScript...

**Amal Hussein:** It's just exponentiated now with all these YouTuber influencer people... So it's the same drama, it's just faster distribution. It's accelerated distribution.

**Matteo Collina:** \[23:53\] I just want to point out a few things. While Bun the project clearly documents some of what it does and what it does not do, the public announcement of the 1.0, the video, and the press release, and the comments that they've done massively overestimated the drop in capability, the drop in replacement for Node capabilities of Bun. And they want to clearly point out that this has been my statement all along. It's not a drop in replacement for Node; they aim to be a drop in replacement for Node. It's not right now. It's even written in their docs, so I don't really understand why for marketing reasons they flipped a good message that is in the docs to something that's not true, that causes a lot of the drama and friction everywhere. Because it's fine, you've make different trade-offs, it's a different runtime... It's great. Claiming it's a drop in, it's basically claiming "Oh, well, this is not true." That's my whole point, it's not true.

**Amal Hussein:** Matteo, have you ever gone to like a startup's website, and then you look at their address, and it's like, oh, they have offices in New York, and Stockholm, and Boston, and Chicago.

**Matteo Collina:** Well, I know how that's done. I did it. So I set it up, I absolutely set it up, and I did it. So we have a fantastic office in San Francisco. So...

**Amal Hussein:** So, I mean, this is just par for the course. This is exactly what I would expect for any project. Like, why not? I mean, what do they have to lose? "Yeah, we're a drop in replacement for Node. Trust us. Wink-wink." I mean, this is just par for the course. But of course, the JavaScript community not being able to discern things critically just means people are like "What?! I can just --" You know... \[laughs\]

**Matteo Collina:** Amal, that's my point. As I said, I am as much a maintainer of Node and a publisher, an author on npm... And leading to the 1.2 release of Bun there was a few PRs on my repo that said "Oh, it is the 2000 lines PR to make it compatible with Bun." 2000 lines of code changed to make it compatible with Bun. How is that -- to be putting it clearly, it's not a drop in replacement. It aims to be; it mostly quacks like Node, it's slightly different than Node. In some of the most fundamental, low-level things, your code can work, your code can also work, can not necessarily can work, or can I have side-track memory leaks that you don't know what's happening in there. So... Production code.

**Amal Hussein:** So let's dig into those fundamental differences, because you even stated on Twitter, and we'll link to that tweet where you said that Jarred has pretty much been able to achieve these crazy performance improvements or performance achievements by being performance-obsessed. Every little thing. You know how developers have those arguments sometimes where they're like "Oh, don't use this thing to loop, use this thing. Use this methodology, not that."

**Matteo Collina:** Oh, I've been there...

**Amal Hussein:** And it's really -- you're gonna have this argument in a pull request, in a web app, about what's the fastest looping...?" Like, no. It's an optimization that's not even going to be processed by the human eye. But Jarred basically made every single one of those optimizations that he possibly could. All the little things, and you need to like have a granular understanding of how heap management, and memory management, all that stuff works in order to really take advantage. So can we talk a little bit about some of those? And I'm curious, which of those can be ported into Nodeland? Because the whole point of this beautiful game that is open source is people throw out ideas, and then someone else takes your idea, your good idea, they remix it with their good ideas, and then they come up with something that's an even better idea. And then that old idea then eventually pull-requests some of those new ideas back... And so then everybody benefits. So I'm curious, what's the game here with Node, and what will you do, and what can't you do?

**Matteo Collina:** \[27:49\] This is a very tough question. So certain things in Node are built with mostly a few different things -- like, the priorities on the Node project are stability, make the runtime and everything traceable, inspectable, observable, so that you can find your bugs in production, you can track your things, you can solve production issues... I think we a few of us on this call have been there and used all the advanced tooling; for example the open tracing, open telemetry, or other APM vendors, so that you can manage... And some of those have been in the news with massive bills recently on Twitter. So it's another emergency podcast, if you want to do that.

**Amal Hussein:** \[laughs\] Yeah.

**Matteo Collina:** "Emergency. Drastically high APM bills." If you've watched those trends, it has been quite a nice -- it was a company that reduced... It had a 50 million APM bill last year, or something like that; a few years back. 50 mil... Sorry, just to clarify the fundamental problem. So yes, Node has all of those things which are production use case to support. And those things, having those hooks in, having those capabilities in the runtime adds over it, okay?

A few years back there was quite a few heated pull requests; a lot of heat in those -- or issues. Almost people throwing rocks at each other, because there was "Why you are doing all of that? Slow things down massively", and so on and so forth. Explaining why... And basically, it is either that, or we have not observable and traceable. And then good luck in solving your bugs in prod.

So the challenge is being observable and being able to do all those tracing things in production, with no overhead. That's the phenomenal challenge. Bun - I don't think they have those capabilities yet. I will need to check. I'm not --

**James Snell:** There's another side to that also... Not just observability, but standards compliance. The URL parser in Node is kind of my canonical example of this.

We had your urlparse, we've had it for years, and it was highly, highly optimized, very performant. But if you went and looked at that code, no one could understand it. There was like two people in the world who could understand that code. One of them was the person that wrote it, the other person was the one who spent time going through and trying to fix bugs in it. And it was discovered that there were a number of security issues with it; there were a number of just kind of compliance issues. The way that it parsed things didn't match the way that browsers did, and everything else. But super, super-fast, right? And it still is. It's still super-fast. And I looked at it and I was like "We can't fix these security issues, we can't fix these bugs, because anytime we touch it, we kill the performance of this thing and make it 10 times slower." So I was like "Screw it, I'm just gonna write a new URL parser, and it's gonna be the one based on the standard, and it's going to be compliant to the standard." And for years, that was there, but it was slow; it was massively slower than the legacy urlparse... And we still have people in the community like "No, I'll never use that new URL thing, because we have urlparse and it works." Alright. And for years. For years.

Then we had somebody finally come up and say "Hey, this can be faster." And now we have Ada, which is a new implementation of the standard parser, which blows everything else out of the water in terms of performance, even the old urlparse, and it's still compliant to the spec. So it's like, that mentality of "We're not going to start with performance, we're going to start with correctness, and then make it perform" - it's a different way of looking at the problem. Bun's kind of like "We're gonna start with performance, and then make it standard as much as possible. We may have to compromise a little bit on standards." With Node, we've taken the opposite point of view, which is "No, if there's a standard, we're gonna make it comply to the spec, and then make it fast." And we've done that a number of times.

**Christopher Hiller:** Matteo, I recall you mentioning something, I think probably on Twitter, about how performance; like, people won't pay for performance, or... Can you speak to that a little more?

**Matteo Collina:** \[32:06\] I was waiting for it. So first of all, I created a framework called Fastify, which is at this time maybe five to eight times faster than Express on Node.js, and Bun. Node.js with Fastify in Bun, it's faster in Node than in Bun. But both Jarred and myself thinks there is a memory leak somewhere in Bun, that Node is triggering. Sorry, that Fastify is triggering. Fastify is pretty tied to the Node API. So if there is some mishaps on how those are implemented, then things can go sideways. So yeah, it is a problem, and this is the fundamental gist.

Node.js -- okay, the problem with performance is who is pushing right now a lot of investment in software development, open source but also everything else? Cloud computing companies. One way or another we are all tied to Amazon, Google or Microsoft, or GitHub, or whatever, that are investing in some of our technologies and providing funds, in various ways. I'm not saying it's a direct thing, but they have their own cloud products, and they are pushing these now. Now, the surge of serverless and a lot of other pay by millisecond thing, pay by consume, has made it absolutely damaging for those companies to invest even one dime in performance.

**Amal Hussein:** Oh, fascinating. Oh, my God, I've never heard this take. I mean, duh... It makes sense. Yeah, it's like "We don't need your stuff to be fast." Yeah, exactly. Yeah, we are paying us for compute.

**Matteo Collina:** Well, you just pay for more resources, okay? Look, look, I have even a hotter take than that.

**Amal Hussein:** Oh, please. Oh, my God. This is all the hot takes.

**Kevin Ball:** That's the classic cost plus.

**Matteo Collina:** So AWS has gone so good length in trying to frame the narrative to get more and more of your money. Because you know, Node.js is asynchronous, can run multiple requests at the same time, with great speed, right?

**Amal Hussein:** Right. Despite what people who write Ruby or Python might tell you. \[laughs\]

**Matteo Collina:** So, again, Ruby and Python runs one request at a time, okay? Which is great. I love Ruby, I love Python.

**Amal Hussein:** Yeah. Nobody's poopooing on those communities. But there's just a lot of poopooing on Node, which I don't like...

**Matteo Collina:** Yeah. You can do the same thing with those languages, by the way. You can run event-based computation on Ruby and Python; it doesn't matter. It's the same logic. So you have languages that are capable of running multiple requests, a lot of them actually, thousands, on the same process. Most of our apps literally take some data from a database and send it out. So when one database query is running, I can definitely send another one down the line, because my CPU and memory are basically idling there.

Now, so Node.js made a huge splash, because it was asynchronous, and it was able to handle thousands of concurrent requests from a single tiny node process. Even a tiny Raspberry Pi can run hundreds of concurrent requests on most things. Now, AWS convinced everybody that running more than one request at a time per process was wrong. And they have you pay per second, even when that CPU is idle. This is AWS Lambda. So if you use AWS Lambda, you're paying even if your CPU is literally doing nothing. And everybody is believing in this massive lie, essentially, that that is a better model. It's better for them. You need to know the trade-offs.

\[36:06\] Lambdas are great at low volume, because they scale to zero and start very fast in the generic scheme of things. Try running a lot of Lambdas and then check your AWS bill. You're going to be hit pretty heavily down if you have a lot of Lambda calls. Or even worse, you know that there is a massive amount of limit of how many Lambdas you can spawn on a single AWS account?

**Amal Hussein:** I don't know that. Oh, wow. How many can you have simultaneously spun up?

**Matteo Collina:** I think by default it's 256. So at maximum you can handle 256 concurrent requests on the default account. You need to raise it, or something? And if you run out, then they start getting queued. And in the same time, you can -- oh, wait a second, I can spawn 10,000 Lambdas. Okay, wait a second... I can run 10,000 concurrent requests on a single machine on Fargate, and it's significantly better performant... But, very interesting, they don't ship scale to zero on Fargate. Sorry, I'm just calling out the AWS bad marketing strategy to sabotage the industry, but that's to make more money, which is great for them. It's just --

**Amal Hussein:** Well, I have to wonder, who's using Lambdas at scale at that point, if the limit is that low for default accounts? I'm just curious. I mean, at true scale, is anyone using serverless for --

**James Snell:** Well, there's lots of people that are using it at scale, but AWS costs are something that a lot of people are concerned about, and talk about. And that's why competitors in various spaces, like CloudFlare, have different approaches to this. And that's one of the ways that these other players can compete with AWS, is on cost. But going back to Matteo's point about nobody wants to pay for performance - just kind of have a different take on it, a different angle on it... Matteo and I, when we were both at NearForm, we'd go off and we'd do all kinds of like performance consulting with Node. People would say "Our stuff is slow. Come help us fix it." And we'd go in and point out exactly why it's slow. Most of the time, they'd say, "Okay, cool. Good that we understand. Here, let's provision 10,000 more servers to go handle that load", because it's actually cheaper than going through and doing the work to fix the code to make it faster. I had a number of customers that were like that, so...

**Matteo Collina:** And to be honest, it actually makes sense from a budget perspective, to be clear. If you need to do two months rewrite with all your team, this is probably costing you maybe, I don't know, half a million in dollars, probably more, for international salaries. Sorry if you're listening from --

**Amal Hussein:** From the Bay Area...

**Matteo Collina:** ...a country where salaries are low...

**Amal Hussein:** Oh, okay.

**Matteo Collina:** If you are in the Bay Area, it's probably a few millions; if you are in Europe, it's probably half a million... But it's still a lot of money overall. It's a lot of money for the company. You're spending a lot of money to do a rewrite, a performance optimization... And typically, to gain, I don't know, a fraction of that -- like, over time, they will recoup that money, okay? They will save that money over time; that's, of course, true. But the problem is that there is no -- what matters is velocity, and how much faster I can ship features, and that is where that logic loses. You say "Okay, I invest three months of development time to fix my performance bugs, and then I can put my bill at one quarter. However, in the meantime I'm not shipping features." And if you are making those decisions, then you say "No, no, I cannot stop development. I need to ship them features. I really need to ship new features, I really need to move the business." And that's where the performance reasoning goes down, because it's actually impossible for companies to invest, to even care, to some extent, in performance, and invest in making things faster.

**Kevin Ball:** \[40:20\] I think this highlights, once again, the fact that all of these things are trade-offs, and it's going to depend on where your business is in the lifecycle. If I'm an early-stage startup, the amount of money that I'm going to save by investing in performance is essentially nil. If I'm a fairly vanilla web startup, the amount of performance that doesn't live in the cost of my database lookups - like, any sort of optimization beyond optimizing my database schema and how I'm looking things up is probably wasted money, for most layers of scale.

And then there are businesses that are at a high enough scale, and doing enough computation where investing in performance pays off. And at that point, there's often a dedicated performance team, maybe there's somebody who can maintain and go in and do the fixes necessary to run a performance-optimized runtime, or do other things... There's space in the world for investing in performance, and for most businesses it's not the right choice. This comes back to the Bun versus Node trade-off. If I'm running something that's super-compute-intensive, it may make sense for me to use Bun, and run with that, and bite the productivity bullet of not being compatible and everything, and having to, every time I pull in a new library, make sure it's compatible, and hunt things down. If I'm writing a vanilla web app, it probably doesn't.

**Amal Hussein:** I mean, Bun cannot market itself as production-ready. That's just how I sit, for a JavaScript ecosystem. As in it's not turnkey in the same way that you would have something like Node. And maybe that's too harsh. Maybe I'm being too harsh. And Jarred is coming on to the show at some point in the next couple of weeks, so we'll get to hear from him. But anyways, yeah.

**James Snell:** I would say that it doesn't even really matter too much. So let's just say Bun is going to increase in users, it's going to get production-ready, whatever. Awesome. Great to see it. Love it. But that's not really the question. So a lot of the people that are trying Bun out now, they're like "Hey, this runs really fast on my project that I'm working on right now."

**Amal Hussein:** My Hello World app... \[laughs\]

**James Snell:** ...on local benchmarks, or it makes the CLI tool run faster. And that's great. Fantastic. How does it scale on a server serving 100 million requests over a day? How is it going to handle that load? How is the observability? When you add layers of security, observability, and all these other things in it, that you need for a true enterprise system - like, how is it going to handle that? Will it be optimized for those type of workloads? Time and time again, when we'd go off and do these consulting jobs, it was not the runtime that was causing the bottleneck. It was how the application code was written. They're misusing promises, they're draining queues incorrectly, they have too much backend latency with their backend system, because they're trying to JSON-parse these massive, multi-megabyte files. Those are the things that you encounter in these real systems, that all the performance bottlenecks tend to be. You don't even see the bottlenecks from Node itself.

So Deno and Bun - I mean, they could be in the space too, but until we start seeing benchmarks that show true enterprise scale, and be able to compare apples to apples, do those performance optimizations actually move the needle enough to matter? That's when it will be like "Okay, let's really pay attention to this."

**Matteo Collina:** \[43:59\] Let me make an example. You have a React server-side-rendered app that creates 100,000 nodes in your DOM. This is not a stupidly high number, to be honest. This is real numbers. And is that thing faster, one or the other? Maybe. I just don't know. The problem is some of the stuff that we do, that are there in the ecosystem, and why Node.js to some extent stopped having so much of an effort on performance itself was because "Who cares?", to be honest. If I'm running a React server-side-rendered application, and I can only render, I don't know, 100 pages a second because of the cost of React server-side rendering - or even less, okay? I'm just making it nice. 100 is a good number of React server-side rendered --

**Amal Hussein:** I was like "Wow, that's actually pretty good." \[laughs\]

**Matteo Collina:** It's pretty good. Consider, on the same hardware Node.js can run maybe 80,000 requests per second alone, and then you do React server-side rendering and it could do 100. Where is the bottleneck here, okay?

**Break**: \[45:10\]

**Kevin Ball:** So one place I do see value is running tests in CI. Because any gains you can get in terms of reducing the cycle time of developers making a change and making sure it doesn't break things does have benefits for productivity, does have a lot of other different things out. And those are also places where the observability features may not be as important, because once you see there's a bug, you can now go and run it locally, or run something and get that observability a little better. You know --

**Matteo Collina:** I have a couple of points to that thing. The first one is what tests? Bun does not run most test frameworks in Node right now.

**Kevin Ball:** That does come to the question "Is it actually ready?" So if it cannot run the frameworks... Well, and I don't know. Like, I haven't done this.

**Matteo Collina:** Well, I'm telling you it's not. It does. It does not run Jest, it does not run unpatched Jest... They have some patches to do that. It does not run Tap.

**Amal Hussein:** Okay, yeah. I just wanna make sure that's not a new library... So Jest with some mods, it'll work, sort of...

**Matteo Collina:** They can run Jest tests, because they run them through their test runner, essentially.

**James Snell:** And I'll just say this - Jarred, if you're listening, these are feature requests. These aren't complaints. \[laughs\] I would love these...

**Amal Hussein:** Yeah, none of this is a complaint. I mean, this is also just -- it's about the code, it's not personal. I'm just trying to address the hype that I see from JavaScript developers that are like "Yeah, it's time to switch." I'm like "No. What time to switch? Is this going to support your stack?" Yeah, sure...

**Christopher Hiller:** One place where this sort of performance is definitely helpful, and we've seen this with projects that have actually moved away from JavaScript and rewritten themselves in Rust... Like, build tooling, and all that sort of -- like CLI tools, and stuff. And maybe that is a great use case for Bun, but are you going to be able to grow a company on that is another question.

**Amal Hussein:** Yeah, we haven't even gotten to the company discussion yet, which I'm very curious to have with you all, because that is a very different way that it's organized, compared to Node... Yeah.

**Matteo Collina:** Before we go to that, relating to CLI tools, there is one aspect that I want to talk about...

**Amal Hussein:** Oh yeah, sure. I have like three things that I have queued up as well, so don't worry; we're not getting there anytime soon. \[laughs\]

**Matteo Collina:** This one is bun install, and that impressive bun install performance argument. The benchmarks that they do are not apple to apple comparison, as we call them in the benchmarking world. They are not benchmarking the same things. Bun install does different trade-offs, that trade user security for performance, and therefore it's significantly faster, and blows everybody out of the water. If you remove those safety checks, those guardrails from the others, the numbers are pretty similar. So it's a matter of guardrails. Do you want to run without guidelines? Yes, you can go way faster then, but you might fall down.

**Kevin Ball:** This reminds me of the "Let's expect people to install their packages from a random web URL, and assume it's going to stay happy that Deno did early on." And they discovered that that wouldn't work. And I suspect Bun will also run into, as they start to get production users, this sort of thing of "Wait, that doesn't actually work in the real world."

**Matteo Collina:** The different things it does differently are true. The first one is it prefers offline by default, which means it's not going to check if there's a new version of your dependency when you install something.

**James Snell:** So if there's been a security patch, it might miss it.

**Matteo Collina:** If there's been a security patch, you're not getting it. Sorry. Oh, by the way, I would prefer that... I can see somebody making that trade-off.

**Amal Hussein:** \[52:02\] Yeah. There's a time and place for maybe that specific decision, under a specific set of scenarios, or whatever.

**Matteo Collina:** No, but my overall point here - and this is for Jarred; if you're listening, hi. I've been voicing this back and forth on Twitter, so you've probably heard of this before, also from Evan You and others. My point is, make the apple to apple comparisons, and make sure to highlight the differences when you do public communications, okay? Mostly because you're basically comparing the defaults, but the defaults are significantly different in behavior, that you get so different numbers out of them. If Pnpm, you tune it, you can tune Pnpm more or less to be with the same settings with prefer offline, and not doing audits when in its installed packages. If you do that, maybes two to three times slower; like, Bun runs in 200 milliseconds, versus Pnpm runs in 800 milliseconds. Now we are talking about 600 milliseconds on something which is probably not that impactful. If the difference is from 200 milliseconds to 10 seconds, then this is the difference of those extended checks that are done. And those are there for reasons. But if you're happier with that, just turn them on in your Pnpm and in your npm config, and - hey, you can ride with that.

For example, I disable security audits. There is an npm audit that does the checks every time you install, and I disable that, because I run those checks in CI in all my projects, so I don't need them locally. And it's also too much noise. So I disabled the checks to have a faster install on my machine. It's my trade-off, I know what I'm doing. The default, by the way, though - it's safe.

**Amal Hussein:** Isn't that potentially breaking though, for someone who is coming from a Node project using npm?

**Matteo Collina:** Yes, absolutely.

**Amal Hussein:** Okay.

**Matteo Collina:** Because most projects in the npm world tend to assume a carrot dependency chain. What this means is I support only the latest combination of everything. I don't support the combination of all the things okay, the random combination of all the things.

**Amal Hussein:** Yeah, the matrix.

**Matteo Collina:** Of the matrix, of all the dependency modules. I more or less report the latest and the greatest, because otherwise it's an exponential combinatorial problem, and it's impossible to support a wild combination of things. So yeah, that's the --

**Kevin Ball:** Question. So you mentioned that on Pnpm you can put some options in to get the same behavior, and you can configure that, and the defaults are different. Is the reverse true? Can I tell Bun "Hey, actually go and do the audits? Actually check remotely first?"

**Matteo Collina:** I don't think so, but I am not -- maybe they've added it recently. There was some back and forth discussion on --

**Kevin Ball:** Because I think it's one thing to say "Hey, this is configurable, and we're going to have our default configuration be performance-focused, rather than security-focused. But you can change that if that doesn't apply to your project." And it's another thing to say "Hey, we're going to ignore the fact that you might want security, and we're just always going to be performance-focused."

**James Snell:** And that's going to be something that Bun as a company is going to have to balance. They're not an open source runtime; they are open source, but they're a community-driven or a company-driven product. They're going to have to make a product decision as they start to go off and try to actually grow customers. Are those customers going to want security first, or are they gonna want performance first? Performance-first is a gamble, because it's not clear yet; they have to prove their market, that that's what people want, and that's what they're gonna prioritize over the security features.

**Amal Hussein:** \[55:53\] Yeah. But even if they prioritize -- let's say they have some healthy compromise, or they figure out a way to have their cake and eat it, too. There's things in Node like support for callbacks and promises... For example, if you're trying to read a file you can do it through... And the reason I think Matteo alluded to some of this overhead earlier - similar to the web, when you're shipping new web standards, you don't want to break the web, you don't want to break Node. It's too big of a project. You need to make sure you have some level of backwards-compatibility as much as possible. So for me, it's just like you said, to kind of productionize it, from observability, security, eventually kind of having that legacy of features, shifting your API. There's just a natural kind of patina that develops on these projects, and that's kind of what you see with Node; there's some things that are really quirky if you're coming to Node for the first time, and it's like "Why are there three or four different ways to do the same thing? I'm so confused." And it's like, "Well, we just didn't want to break the project."

**James Snell:** That legacy hurts us in a number of ways. So Node has this distinction between the public API and the private API. And there's this whole bunch of stuff written in JavaScript, a whole bunch of stuff written in C++. And there's this boundary layer that we call -- we have, like... I don't even remember what we call it anymore. Anyway, there's this boundary layer that exists between there. A process binding.

**Amal Hussein:** It's the place that James has exed out of his brain. It's like "I don't go there anymore... Not without coffee, or some wine..."

**James Snell:** Some whiskey actually sounds good.

**Amal Hussein:** Whiskey, yes. \[laughs\]

**Kevin Ball:** "These parts of the codebase require whiskey!"

**Matteo Collina:** Let's plan for one in Ireland.

**Amal Hussein:** Yes, yes. Yes, exactly. Whiskey required! Anyways... We should rename the directory.

**Kevin Ball:** That's got to be in the header on the file.

**Amal Hussein:** Yeah, exactly.

**James Snell:** There's so much in Node that there's whiskey required. But this boundary layer exists...

**Kevin Ball:** I've got to do more Node work.

**Amal Hussein:** \[laughs\] Exactly. It's a great way to start drinking, everyone. Just, anyways...

**James Snell:** Early, early on in the project, that boundary layer was not hidden. And we've had so many modules published to npm that kind of monkey-patch around Node's JavaScript layer, and go either directly to that C++ layer, or monkey-patch and modify things in Node. Express is an example of this. Express, actually, would monkey-patch Node's HP implementation quite a bit. There's other modules that the entire ecosystem depends on, that go directly to that C++ boundary layer. Now, in Node, we have tried repeatedly to hide that layer, because doing so would allow us to make massive performance improvements throughout the entire codebase. And there's been places where we have done this. And the decision was made a number of years ago that internal C++ layer - it's not public API; we can make changes to that are semver minor, semver patch, even if it breaks people. But even though we made that decision, we still treat it with kid gloves, and we're very, very careful not to break that unnecessarily, because it will break the ecosystem. But if we could hide that boundary layer from the ecosystem, we can make massive performance improvements throughout the entire project that would benefit everybody.

**Matteo Collina:** By the way, we have made patches to modules to avoid -- like, the Node team has made patches to modules in the ecosystem to avoid touching those APIs, so that we can finally change them. Let me add one more thing. Express - talking about one module that's one of the offenders here. Express runs from Node 0.8. up to Node 21, which is coming out next month.

**Amal Hussein:** Are you serious? That's massive... That's incredible, that people could just upgrade seamlessly that many, without upgrading their version of Express. I'm sure people are still running those versions of Express, because the arc of the web is...

**Matteo Collina:** \[01:00:05.21\] So the question now for a lot of people is "I know exactly how to make the HTTP layer faster, significantly faster. I've investigated it so much heavily. Fastify has almost no overhead compared to Node core. So if I need to make Fastify faster, I need to improve the performance of Node core... Which was the target, okay? You cannot beat that monster. Now, the question is, in order to do that, it's breaking Express, essentially, and breaking other frameworks, other things breaking; breaking stuff. Mostly because there is a lot of overhead in a few places. And removing that overhead - which is not needed, by the way - it will kill perf. It will destroy some backward-compatibility, of modules that are monkey-patching our internals and we don't even know about. Well, we know that they exist.

**Amal Hussein:** Yeah, that's a problem that npm has as well. Darcy Clarke was on the show, talking about the Manifest Confusion bug that was kind of more recently codified... And I know this as well from my time there, but basically, he shared that there's people depending on bugs; that's like in the CLI, and registry bugs. There's people who've actually coded whole solutions and they're relying on it. So changing that behavior, including like the Manifest Confusion - if npm just started patching that, a whole bunch of stuff would just break. Large and small companies.

**James Snell:** We've had real cases of this. The glob module - it's been changed since, I believe, but a number of years ago we decided that the way that symbolic links are resolved in Node \[unintelligible 01:01:46.25\] It used to be this fairly expensive JavaScript algorithm, and there was a new method added to libuv, that made it super, super-fast... But it changed the characteristics of how that worked. The glob module had this logic that depended on the old Node algorithm to throw an error at a particular point. So if a glob ended up recursing through symbolic links, you could set it up so it would recurse infinitely.

The operating systems, depending on whether you were on Windows or Linux, would throw an error at a different point, if that path got too long. The glob module was actually depending on that error being thrown, to know when to stop, when to exit out that loop. When we switched to the libuv method, that broke. And this module, this glob module, that everyone in the ecosystem depended on because it was used by npm itself and a bunch of others, suddenly stopped working correctly. And this is a clear example of a behavior that ideally you wouldn't depend on an error being thrown at a particular point, especially when that differs from one operating system to the next. But the code was still written to account for that... And trying to fix the performance - and it was a massive performance improvement - broke everybody.

**Amal Hussein:** Yeah. Once your software is out in the wild, and you've shipped it, and you have wide adoption - yeah, it's really hard to walk back and claw back certain things. And it's amazing, just how -- yeah, that's just the cost of adoption, for better or worse. It's the gravity of adoption, I don't know. It's like "Ah, I'm trying to make changes, but it's so hard."

So we've kind of talked about this quite a bit now, and James, I really loved your analogy around optimizing for performance versus kind of production-readiness and following standards. That was just really great, that push-pull. And of course, when you're a new project, with no -- I don't know, I can't say no real production users; but very few... You can thrash, you can change your API 600 times, you can break things... There'll be people angry, but they're such a small group. Who cares? So I'm curious, can you just kind of codify it for people so we can kind of move on from this topic? Breaking Node - what would that even be like? Because whether you have a Node backend or not, if you're using modern JavaScript tooling, you're using Node, right? So it's everywhere. It's in your CI, it's in all the things and all the places. What does breaking Node -- what does that look like? Like a shutdown for the internet? Please explain to me, what kind of scale are we talking about?

**James Snell:** \[01:04:36.13\] No, it becomes like a Python to Python \[unintelligible 01:04:37.07\]

**Amal Hussein:** Oh, yes, yes. Yeah.

**James Snell:** You basically have this divide, a line drawn, where everything from Node - let's say we do it in Node 22. Everything before Node 22 just continues to run there, but eventually you'll run out of new security patches and new security fixes. Eventually, that will just kind of naturally stop being supported. And then everything after Node 22 is kind of this new paradigm, where you have to do it this new way. So that means some percentage, and potentially a huge percentage --

**Amal Hussein:** Oh, there'll be some attrition.

**James Snell:** Oh, yeah. But there'll be this huge percentage of things that are npm now, that just won't work going forward. Because we know, we know people do not update their dependencies. So they're not gonna go back and fix those things. It just won't work on the new platform.

**Amal Hussein:** Yeah. So that will just like leave a whole generation of projects and people and whatever behind, essentially, right? Matteo, just regarding this -- I don't know, I'm surprised that it hasn't come up yet, but this decision to use Zig... I feel like this really affects people's ability to contribute. I mean, we see that even with ESBuild; if you look at the contributor list of ESBuild, it's still very low...

**Kevin Ball:** Does Zig lower it more than C++?

**Amal Hussein:** Well, I'm just trying to understand. I didn't even know Zig was a thing. Was I living under a tree, or something? What is Zig? I didn't even know Zig was a thing until -- how do we feel about Zig?

**Matteo Collina:** Okay, let me clarify. So Zig is a significant improvement over C++.

**Amal Hussein:** Did you say Dig or Zig?

**Matteo Collina:** Zig, Zig. Sorry, Zig is a significant improvement over C++.

**Amal Hussein:** Okay.

**Matteo Collina:** To be honest, even C is a significant improvement over C++, in my point of view... \[laughter\] So the bar is pretty low. To be honest, I prefer writing C. I love C code. C is beautiful. C++ gives me a headache half of the time because I don't know what exactly I'm calling. So it's really "Oh, is this a method? Is this a function? What is this happening here?" It has so much overloads... But if you look at it with the wrong eye, it just blows, it explodes on top of your face. So everything is better than C++ at this point. So in that, the project has an advantage.

Now, looking at Node as most of its implementation, it's actually in JavaScript. It's not in C++. The C++ parts of Node are very tiny. And look, very recently Node even shipped some WASM internally, because it's actually faster to use WASM than using C++ for certain things, which is even bananas if you consider it. But it's actually great, to be honest. So I just wanted to go over that...

Now, there is one thing - who are your target contributors, and who are your users? And you want essentially to have users that can contribute to the runtime. And trying to write as much of the project in the target language - it's essentially called self-hosting, to some extent; it's why I think Rust is written in Rust, or something like that. There is this kind of thing. And it's actually very important, because it lowers the barrier of contributors, so that users can be converted into maintainers.

**James Snell:** \[01:08:26.06\] This, by the way, is a key, key difference between Node and commercial runtimes like Deno and Bun, and workers, and those kinds of things... Those are not actively gonna go out and seek to convert the user base into a contributor base. The user base and the distributor base are very different in those other runtimes.

**Matteo Collina:** This is the key difference between the end users and the commercial projects, even commercial open source; let's call it commercial open source... Versus community-based open source. In community-based open source, the end goal is increase the maintainers base. Your key target, your key metrics is increasing the maintainers base. If the maintainer numbers goes down, the project dies. So that's what you need to achieve. If you have a huge pile of VC money, you can essentially afford to "Who cares? \[unintelligible 01:09:22.24\] And by the way, it's not necessarily bad, it's just a different way of doing things. I'm not saying one camp or the other. Probably all of us have used some React. React is a key example of a commercial project, in that former sense.

**Amal Hussein:** Company-backed. Yeah, it's financially-backed, yeah. And I love that term, by the way, commercial open source... It sounds so much better than just VC-backed, or "has money", or whatever. It's a more inclusive term, so I'm going to use that from now on. And I'm eager to discuss that with all of you next, but I do want to just ask about maintainers, and how is Node doing as a project right now? How's that whole maintainer sustainability kind of working? Because no one's really paid to work on Node. There's a lot of people working at companies --

**James Snell:** There's a handful...

**Amal Hussein:** No, you tell me. You tell me.

**James Snell:** There's a very limited handful - I'm talking like maybe two or three - that are actively paid just to work on Node. And that's their primary job. I've lost track of the exact number, but it's very, very small. There are people who as part of their job - you know, if they're using Node, they're like "Okay--", work with Node, open pull requests, do reviews, and that kind of thing... But that's different than being paid to work on it. Node is just part of your job, and helping to support it is just part of your job, and you're there just to help do it.

And then we have people that are just like "I'm just doing this in my spare time. I get paid to do something else, but I'm doing this because I think it's fun, or useful", and that kind of thing. So there's really three categories; it's paid full-time to work on it, paid because I work on it, or I work on it for fun.

**Amal Hussein:** Interesting. And if people wanted to start contributing to Node, where would they start? Is there like a Sherpa for them? Is there like a person or a community or something? And I also, personally -- I have an announcement to make after this, by the way, related to Node...

**Matteo Collina:** There is a website. It's called Node TODO.

**Amal Hussein:** Node TODO. Okay. So Node TODO, that's the place to start. Nodetodo.org.

**Matteo Collina:** Yup. And that shows more or less the basic steps to get things up and running, and the links to the things that you need to do to set up your development environment, which is the starting point to get things started. And that is the gist of it.

\[01:11:53.27\] Then, if you need help, if you need mentoring in how to fix an issue or doing some stuff, you will need to reach out to some of the collaborators. Typically, they are very passionate about one aspect or another of the codebase, therefore they will get you up to speed and up and running in essentially no time, or very quickly, if you're willing

All these large projects - it's not for the faint of heart. It's not easy, to some extent. Most of the time, contributing to a large open source project requires commitment; and I'm not saying it lightly, but it requires commitment. Typically, we want the code to be right, and therefore there's long iterations on pull requests. Even stuff that looks trivial, to some extent, can take a long time. Yeah, I also have an announcement to make, so hopefully...

**Amal Hussein:** You have an announcement? I have an announcement to make, too. Okay. Well, real quick -- so we'll put links in the show notes to all the things. And then Node is supported by a foundation; it used to be called Node Foundation, rebranded to Open.js Foundation, because it's like an umbrella -- there was the JavaScript foundation... I don't know, what was the old one called, the old JavaScript foundation that was not Node. What was it called?

**James Snell:** There was the JavaScript Foundation and the Node Foundation, and they merged into Open JS...

**Amal Hussein:** Yeah, thank you.

**James Snell:** ...JS Foundation.

**Matteo Collina:** Yeah, there was JS Foundation, and Node.js Foundation. Can't use the word JavaScript; it's a trademark of Oracle. So look, I have no problems in telling "This is that, this is that", okay?

**Amal Hussein:** Yeah, we're not even -- whatever. So anyway, so they joined Open JS -- everything's run under the Open JS Foundation. And Open JS hosts contributor days, where they help actually fly in maintainers to get together... I don't know, do you guys do it quarterly, or biannually?

**Matteo Collina:** Biannually. There was one this week, but neither James or myself went.

**Amal Hussein:** Okay. And then there's gonna be one with the NodeConf EU, or is it tied to...?

**Matteo Collina:** I think just a bunch of collaborators shows up at that conference.

**James Snell:** An informal one, yeah.

**Matteo Collina:** An informal one. Also because the travel fund for the foundation has run out of money. So there's no money for that, for flying more people \[unintelligible 01:14:07.12\]

**Amal Hussein:** Oh, gosh... So anyways, so that's exciting... And my announcement is that, you know, for a long time people poked me about "Oh, you should join the Node.js community committee", which is lovingly called ConCom. I don't even know if that's still a thing, but I'm like now actually really interested in contributing some of my time every week towards Node. And so if the community committee is still a thing, I think I would like to join that, and help. I ran a community for many years in the Boston area, so I was doing like in-person meetups and stuff like that, so I didn't have time to do that plus all the other things... So I'm redirecting some of that energy now. So that's my announcement. What's your announcement, Matteo? Your first thing should be "Congratulations, Amal. We're so lucky to have you", but...

**Matteo Collina:** Look, Amal, it's congratulations... So the ConCom is not a thing anymore...

**Amal Hussein:** Oh, no! I was like "What --"

**Kevin Ball:** "Congratulations, Amal, you have joined a non-existent --"

**Amal Hussein:** I've joined a non-existent -- I don't even know; I want to help... I know I can join something, whatever that is.

**Matteo Collina:** But it's not true, there is a marketing committee at the Open JS Foundation that runs, and there is so much need of more people to advocate for Node, and be essentially more of a dev rel for Node type of thing...

**Amal Hussein:** Yeah, I could do dev rel stuff for Node.

**Matteo Collina:** And that shows people that Node is not that same thing, that mean tutorial that somebody wrote 2014, that's full of bad advice, that everybody keeps following as for today. That tutorial creates so many production outages that -- look, those were bad decisions at the time, and even worse decisions now to follow that same tutorial from 2014.

**James Snell:** It's funny, Matteo and I are on various consulting, or talking to folks... It's gotten to the point where we can see what mistakes they're making, and we know exactly which sources \[unintelligible 01:16:03.21\]

**Amal Hussein:** \[01:16:06.13\] \[laughs\] "Did you read this blog post? No, no, no, no..." Yeah, that's so funny. Well, no, I'm happy to write unit tests, too. I'd love to do code contributions. But I'm more interested in like community building, and like helping do that stuff... But happy to write unit tests, or dig out into...

**Matteo Collina:** Oh, if you want to write unit tests, please come! I can throw you a lot of unit tests to write. If you want to have some fun...

**Amal Hussein:** Yeah. Please. I will reach out to you after this.

**Kevin Ball:** If you're listening to this, it sounds like your answer to "How do I get involved in Node?" is you can ask Matteo and he'll give you unit tests to write.

**Matteo Collina:** Oh, I can give you -- look, let me put it another way. At this point in time there are 1,400 open issues Node. We even have a role called the triager, that allows us to clean those up. I don't think there's 1,400 bugs. There's just a mountain --

**Amal Hussein:** I can help with triaging too, so... I'm available to help, basically. I'm committing to this. But that being said, the reason why I brought up this whole contribution thing is because we're going into October, we have Hacktober coming up, so... Node is an important project, so consider Node in your Hacktober PRs.

**James Snell:** Just, if you're going to be involved with Hacktober, please do it responsibly... \[laughs\]

**Kevin Ball:** Yes. Whiskey after contribution, not before, and try to reduce the number of files requiring whiskey before coding... All those different things.

**Christopher Hiller:** Also, all the docs are fine, and they don't need to be updated or fixed.

**Amal Hussein:** \[laughs\] Oh, God...

**Kevin Ball:** Yes. I feel like Hacktober has gone wrong in so many ways, but... Before we close this out, I think it's worth talking about the money question. We started spinning around this a little bit, and I think there's a few different angles that we could take this. One angle is - actually, Matteo, you mentioned Oracle. Any sort of corporate-owned project has the vulnerability of being acquired by a malevolent entity... Thinking Java, as an example, was built out by Sun. They own all the trademarks. They own this, that and the other. Sun is long since dead, Oracle scooped them up and has built so much litigation around owning Java, and caused so many problems for Android and other different things. So there's that whole piece of it.

Then there's the just the incentives question... So Oven, as a company, is venture-backed; they have no source of revenue. They need to keep making money in some form, which means their attention is going to be split, and they're going to be tempted to do things like Deno has done with key-value store, of trying to build add-ons into the runtime that just happen to opt you into a paid service somewhere, rather than being free and open. The incentives are there. They may be the purest of hearts incentives for everyone. And then the final thing is what happens when the money runs out? I think this happened to Meteor and a couple of these other projects that raised a whole bunch of money to build some sort of community open source project. The money runs out and the project just kind of dies.

So I'm curious, which if any of these you all see as challenges for the runtime competitors that we have here? ..which, I think both Deno and Bun are VC-backed relatively small. So it's not like React, which is like "Okay, this is a big company, doing this as a side..." Deno has raised - what, 21 million? Bun is 7... They have maybe a couple years of runway... I don't know how big their teams are. But where do you see this going?

**James Snell:** \[01:19:44.00\] Yeah, I mean, it's all a concern. It's all a possibility. And it's just not the small ones. You look at other runtimes, like Workers. I mean, yeah, it's backed by a massive company, but those companies have shareholders, they have fiduciary responsibilities. They have things that aren't just how fast the code goes, that they have to consider. And anytime that you have that basis, you run into the potential with issues. Look at Node as an example, in Node's early history with Joyent, and the kind of commercial interest there. And it ran up to this tug of war between "The community wants to do this, the company wants to do this other thing", and those are diametrically opposed goals. And it can be a death sentence for the project. It doesn't matter if it's a JavaScript runtime that goes really fast; it could be any open source project. It has the same potential problem, of this conflict between what the community wants and what the company wants.

Now, I absolutely believe in Deno and Bun as a company, their ability to overcome these problems. All of these companies, they have the ability to deal with this, and balance it out, and drive something that is super-successful. But it's going to be on them, and this is going to be their number one challenge, is what is the right balance between community and commercial? Are you going to let your selfish community, and -- commercial interests?

**Amal Hussein:** "Your selfish community...!" \[laughs\] Was that a Freudian slip, James?

**James Snell:** ...your selfish commercial interests...

**Kevin Ball:** No, let's be honest, communities are selfish, too.

**James Snell:** They are. They are.

**Amal Hussein:** Everybody can be selfish. Equal opportunity selfishness.

**James Snell:** They're selfish with different motives, with different reasons. But are you going to allow that selfish commercial interest? And we have to be honest, it is absolutely selfish, for many reasons, and that's not a bad thing. Are you going to allow those to outbalance your community interests, and what your users are wanting, and what they're asking for? Because let's be honest, the community wants features they're not willing to pay for, and you have to balance those out.

**Amal Hussein:** I could not agree with you more. And in listening to you say that, one of the things I think that is kind of an appeal for folks, especially from a commercial side, like I'm a startup, and I'm like "Oh, maybe I want to use something like Bun, or Deno." The kind of all-in-oneness of it is very tempting, especially for startups that are looking for more kind of turnkey up and starts. Being able to kind of get a bunch of stuff with the ecosystem and not have to kind of choose your own adventure, how Node does; it's tempting. But yeah, I couldn't agree with you more on all the points that you raised. Yeah, money keeps creeping into open source.

**James Snell:** Oh, and I want to make a point. This is kind of a tangent here, but... Node 100% needs to look at what's happening in Bun and Deno, and learn what people want. If people look at Bun and say "Hey, I'm willing to pay for this integrated suite of tools in the runtime, so I don't have to go off and piecemeal everything together, and I want to pay for those things", then Node should look at that and say "Crap, we got it wrong. We need to start doing this also. We need to start meeting users where they want to go." And if there's one criticism I can make with Node, going back years, is that they've not been good at this part, of learning from those mistakes and correcting their path.

**Matteo Collina:** From my point of view, one of the biggest mistakes there was not adding a test runner sooner. I don't know if you have been checking out the Node test runner.

**Amal Hussein:** It's pretty good...

**Matteo Collina:** \[01:23:40.16\] It's impressively and phenomenally fast. And essentially, they end up -- like, we had to implement that, and add that to core, because the test runners out there were so different from what the Node core team considered a good test runner for Node, that we actually had to write our own. At some point it was, if you need to beat -- you know, so many problems with the most popular ones, like Jest. You should not be using Jest with us on JS. Sorry, if you're watching and you're using it every day. You cannot test \[unintelligible 01:24:14.20\] so whatever it tells you, it's a lie. And I'm so sorry; there's an issue, and I'm so sorry about this. You can configure it to be more or less better, but then you lose a lot of the benefits of it. So at this point, you might as well use something else.

Mocha is a great framework, but again, the Node folks wanted something that can run each process separately, and not everything together. I don't know. And essentially, we ended up having to write our own, because there was no room left. You cannot spawn a new test runner and expect it to win a lot of users out of the blue.

**Amal Hussein:** What was the pushback on that, Matteo? Weren't you able to get consensus, or was it just not an initiative?

**Matteo Collina:** No. When it came up, everybody was okay with it.

**James Snell:** Yeah. It was surprising. People were like "Hey, let's add a test runner." I think everyone had gotten to the point where they're like "Okay." A couple of years back, I was -- I'm not gonna go into details and stuff, but I was at a conference once and I had a couple other Node core contributors actually yelling and screaming at me for suggesting that we add new features to the runtime. And I'm so happy that we've gotten way beyond that point, where it's like "Okay, now we can actually talk about adding new things." But I was told, I was flat out told in 2015 Node was done. It didn't need anything else. And think about all the new things that have been added to the runtime since.

**Kevin Ball:** That reminds me of my friend who went to work for Google years back, and his mother asked "Well, why work for Google? It already works."

**Amal Hussein:** \[laugh\] Oh, I love that. Wow.

**James Snell:** Exactly.

**Amal Hussein:** Moms are the best. Anyways. So y'all, this is like the world's longest show, and thank you to our listeners for sticking with us.

**Matteo Collina:** Oh, but I have not told the announcement.

**Amal Hussein:** Oh, wait, yeah, I was gonna just say, did I miss that? Okay, do you want to -- go ahead with your announcement, and then we have listener questions, and then we're going to close.

**Matteo Collina:** One of the most requested features in Node.js...

**Amal Hussein:** Should I drum roll?

**Matteo Collina:** Yeah, yeah. Guess what it is. One of the most and oldest open -- it's an issue that was open in 2018. It was opened by Myles, by the way. It has 137 plus ones, and we closed multiple versions of that same thing. It's issue 19,000, something like that. We have issue 40,000-something at this point... And it's very old. And we will probably be able to close this issue in Node 21 if things line up.\[drum roll\] And Node.js is finally shipping WebSocket.

**Amal Hussein:** What?! Are you serious?

**Matteo Collina:** Yeah.

**Amal Hussein:** Wow...

**Kevin Ball:** Alright, show title right there. Lead with that. \[laughter\]

**Amal Hussein:** Yeah, we should -- we just flip it, yeah.

**James Snell:** Bury the lead there, yeah.

**Amal Hussein:** Missy Elliott song. We're gonna have to reverse this whole podcast.

**Matteo Collina:** It's this Easter egg. This is the discussion on Bun, and then for the people watching, they need to watch till the end, or just jump --

**Amal Hussein:** Yeah. This is what you get for sticking it out.

**Kevin Ball:** Yeah. Special announcement...

**Amal Hussein:** This is what you get for sticking out this --

**Kevin Ball:** Jerod's gonna put a fun chapter title on it, like "Announcement, announcement..."

**Amal Hussein:** Yeah, exactly.

**Matteo Collina:** \[01:27:45.00\] It is. It's very good that it's happening. The implementation is there, it passes its WPT. It's part of Undici, so you can already test it. Undici has its own spec-compliant WebSocket implementation now, and you can test it, and hopefully in Node 11 we will add it as a global, essentially. That's the current plan, at least.

**Amal Hussein:** I cannot wait to test it out, and that's so exciting. Do you have like a rough timeline for when that will be downloadable?

**Matteo Collina:** Node 11 is coming out October.

**James Snell:** 21, not 11.

**Amal Hussein:** 21, not 11.

**James Snell:** You're going back years...

**Amal Hussein:** \[laughs\] I was like "Wait, Node 11...?"

**Matteo Collina:** No. Node 21 is coming out at the end of October.

**Amal Hussein:** It's coming out in October. So it's coming out soon. Wow. Well, well, well. That's exciting.

**Matteo Collina:** The PR probably will be open next week to add it.

**James Snell:** You can play with it now with Undici.

**Matteo Collina:** You can already test it out in Undici, it's already there. You can install, and there is the WebSocket API. And you can test it, verify it \[unintelligible 01:28:45.16\] It will be experimental at the beginning, as all things, but -- and also, very soon Fetch will become stable. So the Fetch implementation inside Node will be marked as stable very soon.

**Amal Hussein:** Okay, well, we're gonna have to have you guys back on at some point to kind of talk about all the fun APIs that are maturing, and all that stuff. But that's exciting. So we have some questions from our listeners, and I just want to make sure we kind of get through them. They posted them in our Slack channel. If you're not in our Slack channel, what are you waiting for? Join our Slack channel.

So Eric Clemens, who I basically bullied him into asking these questions... He's a friend of mine, and I actually invited him to kind of join the show with us today just as like a fun commentator, and he wasn't able to make it, so I was like "Okay, well, you need to give me questions then." And so he asked "Do you see any similarities to the io.js split with Bun or Deno?" And the other question he had, which - we've kind of talked about this a bit, was "Do you think Bun's drop in replacement marketing will be a key driver compared to Deno?"

**James Snell:** So I'll take the io.js part... No.

**Amal Hussein:** Okay. We'll leave the drop in thing for Matteo. It's spicy.

**James Snell:** So right now there's no parallels, at all. Deno and Bun are doing a fantastic job of listening to their user base, which is where I think Node early on fell down. Like, they started letting this commercial interest overshadow the community voice. And I'm not seeing that pattern yet in neither Deno or Bun. But there's always that risk. And so the one caution that I would give to friends at Deno and Bun is be very careful about how you're engaging with the community. Do not forget that they have a voice in what you're doing; that they're the ones that are going to be out evangelizing, doing that dev rel role. They're the ones that are going to be going out and doing conference talks, and going out and really driving your platform forward. It doesn't matter how much money you put into your own marketing, it's that community around it that you really need to work with and embrace. And if you ever move away from that, if you ever let that relationship spoil, then you're going to run into io.js-scale problems. Now, it'll look completely different, but that's when you start having that issue. So that relationship with the community is your most valuable asset as you are trying to drive this thing forward, so you have to protect it, nurture it, maintain it.

**Matteo Collina:** I'll take the second question then. "Do you think Bun's drop in replacement marketing will be a key driver compared to Deno?" So okay, if you make a marketing statement, then you will be called to deliver on that marketing statement. This is the generic, the TL;DR. The reality will \[unintelligible 01:31:54.23\] The key question for Bun is will they be able to deliver with all of what the community needs? Right now, it does not implement all things that Node implements. It's not a complete replacement. It quacks like Node sometimes, okay? But it's not Node... Because of the stuff that we'd had before; there is exposed internals... There's certain things. It's very hard to make it compatible.

\[01:32:29.11\] Now, let's take a look -- so Bun reimplemented everything from scratch, typically using \[unintelligible 01:32:31.05\] Deno did a completely different approach in writing their own Node.js compatibility layer. Deno at the beginning came out with this big fanfare of "We are better than Node. 10 mistakes", blah, blah, blah. I'm cutting it short. And then they said "Node is wrong. It's a bad model for governance." These were their words, more or less. And they are slow because they are consensus-based, making decisions, and they cannot evolve the project. And then they shipped a full-blown compatibility layer. It's an amazing engineering feat, to be honest; I'm really stunned by the people that pulled it off. Luca Casonato \[unintelligible 01:33:15.09\] which is a great guy, and all the things, okay? And basically, they forked Node. They took most of the JavaScript layer from Node and adapted it for Deno internals. So the Node compatibility layer of Deno is literally Node.js code, including bugs, okay?

**Amal Hussein:** \[laughs\] Sorry, that's so funny.

**Matteo Collina:** Yeah, but that's what we talked about. So again, to some extent, I think for certain cases Deno is more of a Node drop in replacement than Bun, at this point in time. And I have claims to that; I can point to areas where it actually is. Because it's based on V8, because it has this approach for compatibility, which is great... So all of these combined -- and in fact, they lose performance. They were significantly faster than Node, but they lose a little bit of performance with this compatibility layer. But don't care, because they need the compatibility with the rest of the market.

So from my point of view, you need to deliver on your key marketing. You need to deliver on those messages. The fact that I receive an issue every day on one of my modules telling me it doesn't work on Bun... Really, this is my life right now. It's a problem. It's what it is. So... Yeah.

**Amal Hussein:** Yeah. Cool. So we have one more listener... Well said, by the way, Matteo. And that was medium spicy, so good job. Good job.

**Matteo Collina:** Thank you.

**Amal Hussein:** Yeah. We have one more listener, Kyle Beard. Kball's gonna do the honors for Kyle's Question.

**Kevin Ball:** Yeah, so Kyle asked two questions that are related. The first one I think we've covered a fair amount, but it says "Has the scope of support and lifetime of the project positioned Node to be slower to iterate in terms of performance enhancements?" Which I think we've already answered. Yes, kind of. But the follow-up question to that that he has is "Is there any way to keep pace?" which I think would be interesting to dig into. And then there's also a secondary question around kind of does splintering in usage hurt the community, or does it help, because you have this kind of lifting of all boats, people trying different things and iterating differently?

**James Snell:** \[01:35:35.03\] I'll take the first part of this one, too. So is there any way to keep pace? I would flip that - is there a reason to keep pace? More importantly that we have these options on the table, it's more important that they behave in consistent ways, than it is for them to perform in consistent ways. It's okay for one runtime to be faster at something than another one, as long as developers can use those reliably, in a consistent way. There shouldn't be three different ways of parsing a URL, for instance; there should be one way of parsing a URL, and if one runtime is faster at doing that than others, cool.

So making sure that the APIs are consistent, making sure that they're executing things in a consistent way, that we're not seeing these massive differences in timing when a promise queue is drained, or differences in one implementation handles streams with a particular timing, and the other one completely breaks... Because what happens then is people, when they write code to run on any one of these, they either need to write it to run on one, or they have to write all of these workarounds to get it to work on all of them. That's way more important to get right than making it just as fast as something else. And I think that is the biggest risk here. The fact that Bun is so much faster - cool. The fact that it may not implement something, like this drop in Node API layer, whatever, that that may not work quite right - that is a bigger problem, and that's what we need to be putting our focus on.

**Amal Hussein:** Yeah, that makes sense. Yeah. Well said, y'all... And I cannot state this enough - this is a technical critique of the project, but also just a general critique of the community's reaction. We're really excited... I'm excited to see this innovation in the community. I'm also really excited to hear, potentially -- maybe Jarred will be listening to this. He's gonna be interviewed on the show. I think Jerod is interviewing him in a week. So hopefully, we'll get a chance to hear from him a bit more directly soon. So this will be a nice kind of juxtaposition. So I just want to say thank you both so much for coming on the show, James and Matteo, and Kball and Chris. Matteo and James, where can folks connect with you on the internet?

**James Snell:** Oh, I'm on Twitter, X, whatever you want to call it these days. \[unintelligible 01:38:00.08\] Just look for @jasnell. I'm pretty much @jasnell wherever.

**Matteo Collina:** You can find me on Twitter, X, whatever, @matteocollina, or you can find me at nodeland.dev, and there is a bunch of all my links, all my open source, all the stuff that I do.

**Amal Hussein:** Yeah. Are you still doing your newsletter?

**Matteo Collina:** I am still. I've reduced a little bit the pace, because I want to write a little bit long-form stuff. I wrote a very spicy take on Bun, that I published a few weeks back, when the when it came out, essentially, explaining what we talked in an extensive form in this podcast. I thought you read the piece before, the article. You were so much spot on all the questions, so...

**Amal Hussein:** Oh, me?

**Matteo Collina:** Yeah, yeah, you.

**Amal Hussein:** Oh, really? No, I didn't read it. That's so -- we're mentally in sync, Matteo. This is like the greatest honor of my professional career. Yeah, no, I have not. And now I will. So yeah, so everyone, it's been an amazing show, it's been a long show, it's been an educational show... Thank you both so much for everything that you do, for all your contributions, for all the things. We love you both. You can catch both of them at NodeConf EU, which is happening in November... You can also catch me there, because I've officially committed to going to this thing... So I'll be there as well. And yeah, have a lovely rest of your day, night, evening, everyone. Cheers, bye.
