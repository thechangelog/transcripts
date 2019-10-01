**Adam Stacoviak:** \[00:01:05\] In this episode I talked with James Snell from IBM, the Technical Lead for Node. James is also a member of Node's Technical Steering Committee, as well as the Core Technical Committee. He is currently working on Node's implementation of HTTP/2. I talked with James about the state of HTTP/2, what this new spec has to offer, but more importantly, what the Node community can expect from this new protocol.

\* \* \*

**Adam Stacoviak:** So what's the state of HTTP/2 in Node? I know you're working on it now, you've recently tweeted about a prototype server...

**James Snell:** The current state is just trying to figure out how it would work in Node. There's a lot of new things within HTTP/2, it's a brand new protocol, even though it's got the HTTP semantics, request/response, headers and that kind of thing, on the wire it's very different, so it requires a completely new implementation. We're teasing the edges of what that implementation would need to look like, how it would work, what the issues are, what impact the additional state management is gonna have on Node... We're trying to figure out what that impact is going to be, and then if we were gonna put it in Core, if it's something that was gonna land there, what would that look like in terms of APIs and in terms of the performance profile and that kind of thing. That's where we're at.

**Adam Stacoviak:** We had a discussion earlier with Thomas Watson and Sam Roberts from IBM... Sam was really passionate about talking about keeping Node small, and Thomas actually coined - I don't know if it's him or not - the term SmallCore. One of the discussions we had in that conversation was what should or should not be in NodeCore. As you're developing HTTP/2, you've gotta be thinking about HTTP/1 being there, whether it should stay there, if you did deprecate it how you would do that, and that argument between them, because they didn't really come to a conclusion of what should happen. Do you think HTTP/2 should be in NodeCore? Should it be a module?

**James Snell:** Personally, I think it should be in Core. The reason for that - Node has always been a platform for web development; there's always been that web server.

**Adam Stacoviak:** That's true.

**James Snell:** It's a primary use case, even though there's so many different places Node is being used, and in different use cases, a lot of it always goes back to having Node. If you look, there is no standard library in Node, but there's HTTP, there's URL parsing, there's support for these fundamental web protocol that are built in, and that's the only thing that's built in.

Now, if HTTP/1 wasn't already there, I wouldn't be thinking that we should add HTTP/2.

**Adam Stacoviak:** You'd think module at that point.

**James Snell:** \[00:03:44.25\] Right. There are other protocols that are becoming increasingly more important to the web - WebSockets, for instance. We don't have WebSocket support in there, and we shouldn't have it, because it's not already there. Quick is another one - it's a protocol that's starting to gain a lot of traction relative to TCP/IP. It's got a long way to go, but it's a very good protocol. I wouldn't support any effort to actually get it in the core unless it became much more fundamental to the web architecture.

With HTTP/2, the decision basically just comes to -- we already have HTTP/1; we know HTTP/2 is gonna continue to grow in relevance, we have a lot of people asking for it... It just makes a lot of sense to have it in Core and have it available.

**Adam Stacoviak:** We also talked about - and maybe you can even end this argument, too - how you define what should and shouldn't be in Core, and you it sounded like you said - maybe I'll answer this for you, and you can agree or disagree - around web fundamentals. If it's fundamental to doing web stuff, it makes sense to put in Core, but what do you think about keeping the Core small, or how to define what should or shouldn't be in NodeCore?

**James Snell:** If it's not already there, then it shouldn't be added. Another example of this was URL parsing. We have URL parse, but it's fundamentally broken in a number of important ways. It's there, it fundamentally works, but there is quite a few use cases where URL parse just doesn't function correctly, so we added a new Web WG URL parser. It's the same parsing API that you use in the browser for a new URL, and that kind of thing. So now we have two URL parsers in Core, and there was a big debate whether that should just go out as a separate module, or does it belong in Core...? The question's still not completely settled. The only reason that would be added to Core is because URL parsing is already in Core, and I think that is the key distinction.

We're not adding something that's brand new, that doesn't already exist as part of the platform; we're just evolving what's already there. That's where I think we draw the line.

**Adam Stacoviak:** For those who may not be as familiar as you might be with NodeCore, what exactly makes up NodeCore to make you say "Don't add more to it, just keep things in modules"?

**James Snell:** The basic protocol supports DNS, UDP, TCP, TLS, HTTP - these fundamentals of basic web application programming. That is what Core is to me. Now, there are things that are in support of that. Obviously, we have to have a file System.io, we have to have a Venting System, buffer for just basic data management. I view those as being more utility capabilities in support of the web platform capabilities that are there. To me, that is a large part of what Node is, and if you look at all the different use cases where Node is being used, those are still the fundamental things that are being used the most.

Even if you look at Electron, there's basically web applications that are bundled into a native app. You cannot get away from those fundamental pieces of that basic protocol support, and that to me is what defines Node.

**Adam Stacoviak:** It's almost what you said - I said you said, but you said it - web fundamentals.

**James Snell:** Web fundamentals, right.

**Adam Stacoviak:** If it's around that, it belongs in Core. Otherwise...

**James Snell:** Otherwise push that to the ecosystem.

**Adam Stacoviak:** ...module.

**James Snell:** Yeah.

**Adam Stacoviak:** So you're working on HTTP/2... What's interesting about HTTP/2 for the Node community?

**James Snell:** That it's actually a very different protocol than HTTP/1. It has the same name, but that 2 is really important. The fact that it uses a binary framing instead of a text framing, and just line delimitation... Stateful Header Compression adds an interesting dimension of -- there is a whole lot more state management that has to occur over long-lived sockets, that just doesn't exist currently in Node when you're dealing with HTTP/1.

\[00:08:08.14\] With the Header Compression and the multiplexing stuff at the protocol levels you can get much more efficient use of your connections. When we start getting into the real-world benchmarks of real applications, rather than the peak load type of benchmarks I've been doing currently, I think we'll see much more efficient use of Node and of the connection there. But it does require a different way of thinking about your web applications and your web APIs, because you're not just pipelining individual requests one at a time.

The protocol provides no limit to the number of in-flight requests and responses you can have simultaneously over a single connection. Then you add things like push streams on top of that - it adds a significant new thing that you just have to consider of how you're building your applications and what the interactions are going to be in terms of performance, concurrency and all these things that you just don't currently have to deal with.

I think there's going to be a lot of coming to terms with the protocol and getting experience with the protocol, and kind of figuring out what those best practices are, because it's still a very young protocol and there's not a lot of industry best practice to draw from. It's just kind of "Let's get it out there and get it in the hands of people to use, and see how it evolves from there."

**Adam Stacoviak:** I talked to Mikeal Rogers earlier about kind of the "state of the union", so to speak, for Node.js and he was coming at it from a direction and governance side and less of a code side. But one thing he said was a really important factor in this next year - security. How does the work you're doing at HTTP/2 support the overall mission of being more secure?

**James Snell:** There's two things there. With HTTP/1 in Core right now, a number of design decisions were made early on to favor performance over spec compliance. It turns out that there are a number of compliance things in the spec that says "Don't allow white space in headers", right? And there's very good reasons for that, because you get into request smuggling and response splitting, and there's a lot of real specific security issues that come if you allow invalid characters into an HTTP/1 request. Node was like, "We want things to go fast, so we're not gonna check this, we're not gonna check that", and it was a very deliberate decision not to fully support that HTTP/1 spec. And what we found is that that caused a number of security issues that we have been dealing with over the past year or two years.

With HTTP/2, we're gonna be taking an approach where we're gonna be very spec-compliant. We're not favoring performance over that. We're not sacrificing one over the other. It is going to be absolutely compliant to the specification, without taking those performance shortcuts. And that is something that I am emphasizing in my own development as I'm going through this, that making sure that we're hitting all of those "You must do this" or "You must not do this" that are found in that specification. By adhering to the spec as closely as we possibly can, we mitigate a lot of those potential security issues.

\[00:11:47.00\] The other important thing is that even though HTTP/2 does not require TLS - per the spec you can do plain text if you want - the browser implementation's the primary client of HTTP/2 right now... Chrome, Firefox, Safari and some of the others, they require that they will only talk to HTTP/2 server over TLS. It's just mandated. They won't even connect to a plaintext server, so automatically out of the gate you're using secured connections, and that alone is going to be a significant improvement to security.

The one limiting factor there is Node hasn't really had a great reputation as a TLS terminator. A lot of people, just as the best practice, put a proxy in front of it, and then they'll reverse proxy back over a plaintext connection back to Node just to ensure the performance. A lot of that has to do with the way the crypto works with the event loop and OpenSSL and that kind of thing. So I think a lot of work is gonna need to go into trying to improve that if we want to improve the performance of Node as a TLS endpoint and improve on that story.

**Adam Stacoviak:** What gets you the most excited about HTTP/2 being available? I know you're working on things like -- we've talked about the state of things, but what's the most exciting to you that's gonna change things for...?

**James Snell:** Just getting it into the hands of developers and seeing what they do with it. It is a very young protocol, it is brand new and I have my issues with it. I was actually involved with the working group for a while that was actually creating it, and I was one of the co-editors on the draft. It was early on, I had some interest in where it could go... Then I got out of it for a little while; I had some issues with how it's designed, and I'm not completely happy with the protocol by any stretch, I do have my issues with it. But I wanna see what developers do with it.

I love seeing all the different ways that people are using Node today in ways we didn't even imagine that they could or would. And I wanna see that also with the protocol, just the experimentation and all the different new types of applications that could be developed, or all the different ways that it could be innovated on and built on.

**Adam Stacoviak:** Any ideas, any pontification you could do on what could be built?

**James Snell:** There are all kinds of opportunities for more interesting RESTful APIs... Push streams are something really interesting, and so far they've only been looked at as a way of pre-populating a request cache, right? "I'm gonna push it out so you don't have to do it." But I think with REST APIs push streams offer some really interesting opportunities for new kinds of APIs that are writing event notifications, or the server is more proactively pushing data to the client.

One person I was talking and one of the ways that they were prototyping stuff and using HTTP/2 is they would create a tunnel over an HTTP/2 connection where they would open a connection with a client, but then once the connection was established it would switch roles and allow the server to act as the client, and the client was acting as the server. They were doing this as a way of doing testing over their network environment.

You can't do that with HTTP/1, but because of the multiplexing and the communication model that exists in HTTP/2, that kind of stuff is allowed, it's something you can do. HTTP/2 is gonna enable new extensibility models, new possibilities for new kinds of protocols that kind of co-exist with the HTTP/2 semantics. And we already see some of that work already happening within the working group; there are proposals for other kinds of protocols that are layered into the mix. And you kind of wonder, "Well, who would do that kind of thing?" Well, look at WebSockets, right? Look how WebSockets emerged in its relationship with HTTP/1 and the difficulties that existed trying to get those two things to work together. With this, the framing model is going to allow you to more naturally experiment with those kinds of new protocols without the pain that we had with trying to introduce WebSockets.

\[00:16:26.10\] There's a lot of new types of innovations I think that could come out of it, but we need to build a collective experience working with it in order to be able to tease those things out.

**Adam Stacoviak:** You mentioned some things you're not happy with with the HTTP/2 protocol, and I couldn't let you not tell me what those are. \[laughter\] What are the "gotchas", what are the things that are just bugging you about this protocol?

**James Snell:** Staple Header Compression - it's very effective, right? Headers in HTTP are very repetitive; you're sending the same data over and over again - cookies, user agent strings, all these kinds of things. When it comes to actually what's transmitted over the wire, it's a lot of waste, like a date. In HTTP/1 it's 29 bytes, because it's encoded as a string. That could be more compactly encoded as just a couple of bytes, if you're using a more efficient encoding. So it's very wasteful as it exists today.

HPACK, which is the staple Header Compression protocol in HTTP/2 uses this state table that's maintained at both ends. There is actually two in each direction: the center has two, the receiver has two. The receiver gets to say how much state is actually stored, the center gets to say what's actually stored in that table.

But for the entire life of the connection of that socket, however long that socket is kept open, you have to maintain the state, and that doesn't exist in HTTP/1 today. HTTP/1 is a completely stateless protocol, and HTTP/2 switches that and makes it where you have to maintain state. You have to maintain this server affinity over a long-lived connection. Even though you're multiplexing multiple requests \[unintelligible 00:18:18.28\] at the same time, you have to process those headers sequentially, and serialize the access to those things, because if that state tablet gets out of sync at any point, you just tear down the connection, you can't do anything else on it.

Even over multiplexed requests, all of those requests and responses share the same state tables. It adds an additional layer of complexity that just didn't exist previously. Personally, I don't think it was needed; I think that there are other ways...

**Adam Stacoviak:** What would you have done differently?

**James Snell:** I actually worked on the spec as one of the co-authors and I had a proposal for just using a more efficient binary coding of certain \[unintelligible 00:19:09.04\] Instead of representing numbers as text, representing them as binary, right? The compression ratios work as good, but you could transmit that data without incurring the cost of managing the state. So it would be just like what HTTP/1 has today, where you're still sending it every time, but you're sending less every time.

**Adam Stacoviak:** Right. It makes sense to shrink it, rather than... \[cross-talk 00:21:46.08\] I kind of agree with you on the state, because it seems like it's adding this extra layer of -- it's almost like somebody shakes your hand and doesn't let it go.

**James Snell:** \[00:19:49.18\] Yeah, in a lot of ways that's exactly what it is. Now, Google has a ton of experience with Speedy, and a lot of what's in HTTP/2 came out of the work that Google did on Speedy and I have a huge amount of respect for everything they did and have provided. HPACK also came out of Google, so they did a ton of research in terms of what would work. They had concluded that staple Header Compression was the only way to get real benefits out of HTTP/2.

I disagreed with some of those conclusions, but the working group decided, "You know what? This is what we're gonna move forward with, and that's what they did." At this point it's like, "I don't like it, but that's what it is, and that's what we're moving forward on."

Some of the other things in terms of additional complexity is HTTP/2 has its own flow control, has its own prioritization; you can have streams depend on other streams, and when you set the priority on one, it sets the priority for the entire graph. There's just a lot there that doesn't exist in HTTP/1. How much of that do we expose to developers? In Node we have to provide an API for this stuff. Do we provide an API for flow control? That doesn't exist in Node currently, right? How would we even do that in a way that's efficient? About prioritization, what kind of APIs do we do there?

This additional complexity is something that in NodeCore we're looking at this and we have to decide how much of that do we pass on to the user, versus how much of that do we do ourselves? If we do it all ourselves, we're providing fewer knobs for the users to turn, to tune things, and we're making it less interesting for them because we're hiding some of those features, we're hiding those capabilities, and is that the right thing to do...?

The additional complexity is not something we can easily deal with. It's something we have to kind of...

**Adam Stacoviak:** It's right there in your face, you have to do something about it.

**James Snell:** Right, you have to do something about it.

**Adam Stacoviak:** So stateless compression - that's one thing; maybe give me the flipside of that. I guess you've already kind of described it to a bit with the complexity, but what's the worst that could happen?

**James Snell:** The server affinity issue is actually the biggest issue here. A lot of the proxy software vendors had some real significant problems with HTTP/2 as it was being defined, and you had a lot of criticism being put forward -- I can't remember his name, but the author of Varnish proxy, he's very public in his discontent with the protocol because of the binary framing and the way the headers are actually transmitted.

You can't do what a lot of the proxies do currently, which is just kind of read the first few lines, determine where you're gonna route that thing to, then stop and just forward it on... Which is a super efficient way of doing it. You have to process the entire block of headers, then make the determination of whether you're gonna do anything with it or not. At that point, you basically have to terminate that connection and open another connection to your backend, so that proxies are actually having four state tables for compression, and a lot more stuff that they're having to do that that existing proxy middleware currently doesn't have to do.

**Adam Stacoviak:** I can see why you're against it.

**James Snell:** Well, you know, it's...

**Adam Stacoviak:** They could have just gone the other way and just shrunk it, instead of the same thing back and forth, but just shrink it.

**James Snell:** It added a lot of complexity.

**Adam Stacoviak:** What are the plus sides to this complexity? You're talking about the bad side, but what's the...?

**James Snell:** \[00:23:47.07\] Performance. Using that socket much more efficiently. I was doing a peak load benchmark here the other day with just the development image of HTTP/2 in core. We're at a hundred thousand requests at a server, there was fifty concurrent clients going over eight threads... Just to throw a bunch of stuff at the server and see what happens, see how quickly it can respond. With HTTP/1 implementation in core currently I was able to get 21,000 requests/second doing that, but 15% of them just failed, where Node just didn't respond. A lot of that has to do with -- I was running tests on OSX, and there were some issues there with assigning threads, how quickly you can assign threads, and when we get an extreme high load it could run into some issues. With HTTP/2 I was able to get 18,000 requests/second, so fewer transaction rate, but 100% of them succeeded. It was using fewer sockets; I was keeping them open longer. The downside of that was it was using significantly more memory, but it has a better success rate, and it was using the bandwidth much more efficiently.

The header compression, for example, we were able to save 96% of the header bytes, compared to HTTP/1. Actually, it's 96% fewer header bytes sent over the wire with a hundred thousand requests. That's massive savings.

If we're looking at the platform as a service where people are paying for bandwidth, saving that much is significant.

**Adam Stacoviak:** A lot of money.

**James Snell:** Right.

**Adam Stacoviak:** They'll spend that money in memory, though.

**James Snell:** \[laughs\] Yeah, they'll make up for it in other ways. That increase in performance is significant, you can't discount it. With the fact that TLS is required, there is an improvement in security, but there are definite tradeoffs, and anyone looking to adopt HTTP/2 has to be aware of what those tradeoffs are. It's something that as we're going through in core trying to figure this thing out, there's also going to be tradeoffs in terms of API.

One simple example is the fact that the status message in HTTP/1 - you know how you have the preamble on a response, HTTP/1.1 200 OK - that OK doesn't exist in HTTP/2. They've completely removed the status message. So no more "404 Not Found." It's just "404." No more "500 Server Error", there's no "Server Error."

**Adam Stacoviak:** Just the number?

**James Snell:** Yeah. There's no standard way of conveying the status message. They just completely removed it from the protocol. Well, there are existing applications out there that use the status message, and actually put content there that the clients read. Now, it's not recommended, and HTTP/1 spec doesn't assign any reliable semantics that anyone should use to say, "Hey, that's a thing we should use." But as users do, they'll use whatever's available to them.

**Adam Stacoviak:** That's a bummer, because people will stop saying "200 OK" now, they'll just say "200."

**James Snell:** They'll say "200", yeah. "404 Not Found", the whole jokes... Nobody will get it anymore. So if you look at Node's API, or things like Express, they have "Here's how you set the status message." Well, that's a breaking change in those APIs when you go to HTTP/2, so we have to make a decision of how closely does the HTTP/2 API have to match the HTTP/1 API and act the same way, when we know that there are distinct differences that mean it can't.

**Adam Stacoviak:** So it makes upgrading or changing to HTTP/2 a very deliberate choice.

**James Snell:** \[00:27:55.04\] Yeah, it's gonna have to be very deliberate, and it's only gonna be in very simple scenarios, which probably aren't realistic that somebody would be able to say, "Okay, it works in both." It's gonna be a thing where you have to design your application specifically for HTTP/2 in order to take advantage of the...

**Adam Stacoviak:** It's kind of putting a high barrier in front of it, too... I mean, you can't expect adoption of what is, as you said, a better performing protocol if you put a mountain in front of it.

**James Snell:** Right, right.

**Adam Stacoviak:** No one's gonna wanna climb that. It's less enjoyable, or less likely, or whatever. People do it...

**James Snell:** We have lots of people that say they really want this. They really want HTTP/2, and we have a lot of people that are talking about it not necessarily for user-facing - \[unintelligible 00:28:40.13\] anyone can access - they wanna put it in their data center, and have server-to-server communication be much more efficient, which is a huge use case for HTTP/2, especially since that is within protected environments and you have more control over the client and the server.

There's opportunities there where you don't have to necessarily worry about the TLS; you could do a plaintext connection and you'll get a far greater performance out of it. But again, it has to be a very deliberate choice.

**Adam Stacoviak:** So HTTP/2 is this something that you're solely working on, or do you have a team working on it with you?

**James Snell:** Right now it's been primarily myself. I'm working on growing that team of contributors.

**Adam Stacoviak:** Is it in IBM or is it open source contributors.

**James Snell:** It's open source. I'm doing everything out in the open on the GitHub repo...

**Adam Stacoviak:** Is it on your user then?

**James Snell:** We're doing it under the Node organization. So if you got at GitHub.com/nodejs/http2, all the works being done there.

**Adam Stacoviak:** I saw that repo there, but I saw Ryan Dahl in there, so this is not a new repo...?

**James Snell:** No, it's a clone of the NodeCore.

**Adam Stacoviak:** Okay, I understand.

**James Snell:** Even though the decision hasn't been made to get it into Core yet...

**Adam Stacoviak:** You're assuming it is...

**James Snell:** We're assuming it is, and developing at this.

**Adam Stacoviak:** I'm following you... I was wondering -- I expected it to be a module, but then again...

**James Snell:** \[laughs\] It's being implemented in such a way that we could easily extract it out as a native module if we needed to, if that decision was made.

**Adam Stacoviak:** With all this change, wouldn't it make sense just to cut the chord and... You know, one thing Thomas and Sam were talking about was verbally and documentation-wise deprecated; don't do anything to the way it responds, or using anything within the Core. Why not just verbally deprecate it and then...?

**James Snell:** It's way too early for us to do that. HTTP/2 is a very immature protocol. It still has to be proven, and the vast majority of the web is still driven by HTTP/1. Going out there and saying, "Okay, we're gonna deprecate this" when HTTP/2 has not yet been proven would be very premature.

**Adam Stacoviak:** So what do you do then - you just offer both?

**James Snell:** Both, yeah. And just say that Node is gonna be a platform for HTTP development, 1 and 2. There will be a mechanism - it's built into the HTTP specification - that you can actually run HTTP/1 and HTTP/2 on the same port. You can have a server that will offer both, and the client negotiates which one they wanna use per socket. We're not quite there yet in terms of how we're gonna make that work in Node, but that's a key capability of HTTP/2. So if we are going to fully implement that spec, that means also implementing that upgrade path, which means we can't necessarily get rid of HTTP/1.

The fact of the matter is we can't get rid of anything in Core. You see that in things like the recent buffer discussions whether we deprecate things... We can't get rid of things that are so critical to what the Node ecosystem is doing; even having a deprecation message in there is problematic.

**Adam Stacoviak:** That would ruin things, yeah.

**James Snell:** \[00:31:59.29\] And something so fundamental as HTTP/1 - I don't think we would ever get to a point where we would fully deprecate it.

**Adam Stacoviak:** Yeah, I'll retract that deprecation statement and say it more like, instead... Because when we were having a discussion about the options of deprecating things, it was not to put it in where it was a response, but more so in documentation, where it was frowned upon; it wasn't forced.

You're obviously so much more closer; I'm just outside, looking in, but I'm thinking, if it's so deliberate to choose it, wouldn't it make sense (or potentially make sense, and this will be a decision you all eventually make) to offer it as a module instead. That way, you can have a clean break when it is time to move over. I'm just thinking if it's that deliberate, why not make it that deliberate where it's actually required.

**James Snell:** It's a legitimate question. That's actually one of the decisions the CTC has to make. I have an opinion on it, but unfortunately it's not all up to me. We have to listen to the folks, to Sam and Thomas, and the ecosystem, and figure out what is the right approach to take. We're not close enough yet to reaching that decision. I'm being very deliberate in how I write this code to ensure that if we need to pull it out, if that ends up being the right thing to do, we can. It's not making breaking changes to any existing part of Node. It is a very distinct, separate code path from the existing HTTP/1 stuff.

It would be a native module, and all the things that come along with native modules. There would be some considerations there, but if we needed to, we could. Like I said, I have my opinion on what it ultimately should do, but it's up to the community, it's up to the Core team to make that decision, for whatever reasons they wanna make that decision.

**Adam Stacoviak:** Cool. Let's close with any closing thoughts you might have on this subject. Anything I might not have asked you that you're like, "I gotta put this out there before we close down."

**James Snell:** We've really covered a lot of it. The big thing, I would say, is the folks are really passionate about this. We need to hear from users, we need to hear from folks that have ideas on how to implement it, or how to test, or what kind of applications they wanna build with this thing. I've had a lot of conversations so far, but it's a big ecosystem, there's a lot of people out there. We can't have enough input on that direction. That information, that input is what's gonna help drive that decision of what's going to happen with this code.

**Adam Stacoviak:** \[00:34:56.27\] What's the best way for people to reach out to you then? If it's feedback you want -- is it you, personally? Should they go to the repo, submit an issue?

**James Snell:** Go to the repo, open issues... For the folks that really want to get it in there, pull requests are great. There's been a lot of churn in the code. I've been getting in there and just hammering away for the past two weeks...

**Adam Stacoviak:** With a machete?

**James Snell:** Yeah, pretty much. People have been asking... It's like, "Well, where are the two dudes, so we know where to jump in?" I was like, "I don't even know what the heck I'm gonna do tomorrow, let alone what to recommend you jumping on." But it's certain to stabilize more, and there are very distinct areas that I know for sure - tests, performance benchmarks, those kinds of things - that we absolutely could use some help on. So anyone that wants to jump in, just go to that repo, take a look at what's happening...

**Adam Stacoviak:** Testing performance, things like that.

**James Snell:** Right.

**Adam Stacoviak:** Well, we'll link up the repo in the show notes for this. James, thanks so much for... We're literally closing down Node Interactive, so thank you so much for taking the time to speak with me. It is important that we have this conversation, so I know that the Node community is gonna appreciate what you have to say.

**James Snell:** Right, yeah.

**Adam Stacoviak:** Thanks, man.

**James Snell:** Thanks!
