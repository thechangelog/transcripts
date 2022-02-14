**Adam Stacoviak:** \[00:31\] Welcome to our Spotlight series titled The Future of Node, recorded at Node Interactive 2016 in Austin, Texas. We produced this series in partnership with the Linux Foundation, the Node.js Foundation, and it's sponsored by IBM and StrongLoop.

**Break:** \[00:45\]

**Adam Stacoviak:** This episode features a small roundtable discussion with Sam Roberts who works on Node Runtimes at IBM, and also Thomas Watson, the Node.js Lead at Opbeat. We talked about keeping Node Core small, what to put in, what to take out, how to deprecate and everything in-between. Listen in!

\* \* \*

**Adam Stacoviak:** So let's talk about keeping Node small. You have some opinions, and we're sitting here with Sam...

**Sam Roberts:** Sam Roberts, yeah.

**Adam Stacoviak:** Sam Roberts from IBM, and Thomas Watson from Opbeat, two Node developers. Either of you have core contributions into Node Core?

**Sam Roberts:** Yes.

**Thomas Watson:** Nothing, really.

**Adam Stacoviak:** Nothing really, but you've taught a lot of people about Node and you're an evangelist...

**Thomas Watson:** I'm a heavy user of Node, I've been many years, and I'm part of the Diagnostics Working Group. I work with Node Core, but I haven't yet contributed.

**Adam Stacoviak:** Okay. So when we talk about keeping Node Core small, what comes in mind for you, Thomas?

**Thomas Watson:** It's about what goes in Core and what doesn't go in Core, and feature upload. Or let me say it in another way, one word: peerDependencies. Or maybe that's two words. We have a real powerful thing in Node, which is the module system. The module system allows us to have dependencies that doesn't break. We can have a dependency to some third-party module, and if they make a breaking change it doesn't matter, we still depend on the old version.

**Adam Stacoviak:** Right.

**Thomas Watson:** The problem with Node Core is that it's a forced dependency on us. We just run our code inside the Node Core that somebody provides for us; if we are a module developer, we can't choose which version our module runs on. So if something changes or is added, or an API is changed in Node Core, our module breaks if we depend on this change. The point is the less we can change and the less we can put into Core, the more stable Core will be.

**Adam Stacoviak:** So you're all for more modules, less into Core.

**Thomas Watson:** Yeah, definitely.

**Adam Stacoviak:** And Sam, for you - how does that clash with your opinion?

**Sam Roberts:** That doesn't clash, I absolutely agree with that, and I'd extend it... I mean, one of the other things is that Node is a pre-packaged bundle of a set of modules, and you can't disassociate from them. If you want a particular version of child\_process because it's got the sync stuff, but you don't want the version of URL that came with that one, you have no choice because they came together with Node... Unlike npm modules, where you can mix and match, you can choose, and the modules you can depend on can even themselves depend on incompatible different versions of modules, but it's okay, because it's node and it's JavaScript, and multiple versions - even multiple incompatible versions of a particular dependency can exist in your dependency tree, and that works fine.
\[04:03\] But Node has all of these modules compiled into the binary, and they all come together and it's very inflexible. It creates difficulties.

**Adam Stacoviak:** How does that create difficulties inside of IBM? So you're a developer inside of IBM - what part do you play there?

**Thomas Watson:** Well, I should be clear, I don't necessarily speak for IBM, and I don't think anybody does. I started off at StrongLoop, so I've been working with Node only about four years.

**Adam Stacoviak:** You worked on LoopBack?

**Thomas Watson:** No, I worked on core tooling, production tooling, production management, metrics, deployment, and also supporting Node and supporting Node Core; a lot of clustering, as well. A lot of my feedback actually comes from cluster. Cluster was added to Node to address a perceived deficiency in Node in that it could not utilize effectively multiple cores, and Java could. So it'd get stomped on benchmarks I assume, so Cluster was added... Along with a lot of things that were added in the early days of Node, because people were like, "Let's add it. It looks good", and it did useful things, but we can't change it.

The problem is once you add it to Node Core, changing things becomes very difficult and it doesn't matter how good something is. It's not so much that you might add something and it's bad and you regret it; you might add something and it's great, but later it's not so good, and URL is a great example. The URL library predates the WHATWG URL definition, so we're now getting bug reports because the URL library doesn't do what browsers do, but it predates these browser APIs, so of course it doesn't. So it's not like we messed anything up; I mean, I wasn't there personally, but it wasn't like the people who did it messed anything up.

It is what it is, it was a decent URL library... I mean, I look at that and I say, "Well, why do we have a URL library in Node that we expose to users? It's just JavaScript, it doesn't UV by an instance, it's not system-dependent, it doesn't have to be written in C++ - and it isn't... Why is it there? I mean, it's there because it's useful to Node users? Well, there are many things that are useful to Node users, and you do not require URL parsing to be in the Node API, but it is there now.

I look at many of the current APIs as being in that category. They didn't have to be there. We added them because they were useful. I mean, thankfully, Promises were taken out. Can you imagine where we'd be now if the Node API was still promised, but obviously with a non-spec-compliant Promises from, you know...

**Adam Stacoviak:** What would happen? Speculate for me.

**Thomas Watson:** I don't know... What would we do? We'd have to wrap it, right? \[unintelligible 00:07:02.24\]

**Sam Roberts:** We would be really incompatible with modules that also have to run in the browser, because in the browser we have the native Promises now that we also have in Core, but if we had the old Promises in Core, those modules would not be able to run in both the browser and in Node. If you wanna embrace the fact that people run code across different platforms - Node, browser, etc. - it's the same problem with the URL that we now are getting; we would have the same problem with Promises if we had a different version of Promises in Node.

But if I may play devil's advocate for a second with the URL example that you gave... If we remove URL from Node Core, we have suddenly another problem, which is a lot of Node Core depend on having that dependency available.

\[08:00\] So when you install Node, you don't pull down all the modules from npm; you expect Node to come packaged with everything Node itself needs. So the URL module, for example, is needed by the HTTP module. If it's not available, how would the HTTP module work? There are solutions for this, but it's a problem that I hear a lot when we talk about taking, for example, stuff like the URL module out of Node.

**Thomas Watson:** Well, actually not only are there solutions, there are easy solutions right now. Up until just a year -- or very recently (post-1.0) \[unintelligible 00:08:38.12\] there was no way that Node could have a JavaScript library in it that was not also visible to users of Node. Node had no choice - every library that it needed internally also had to be shown to users. So you're right that URL is used internally, but it would be very easy right now to add a lib internal URL that was literally impossible to be accessed by a user. So we could add a WHATWG compliant URL parser to the internals of Node, and make it be the URL parser that's used by the publicly visible API such as http.get, so the behavior of http.get would be consistent with what our browser developer or anybody familiar with the spec would expect. But at the same time, if a user, they themselves wanted to do URL parsing, install your URL parser from npm. It's no problem, you can do it.

**Sam Roberts:** And then when you compile Node, you would basically pull that in and have it internally, so it would actually be the same module that you could also install from npm if you wanted to.

**Thomas Watson:** Yes, which is what's done with... I could be wrong here - I'm pretty sure there's a punycode, so we didn't need an internationalized DNS handling, so that module is actually... I guess nobody wanted to write it. This all predates my time, I just see it how it is now. But very sensibly, they're like "Well, this is a decent JavaScript module in npm, let's just bring it in." And as build mechanics, I don't think it was actually drawn down with an npm install; I think it was vendored in from Git as a dependency. But these are build mechanics; the principle is that a WHATWG compliant JavaScript library could be made on npm, could be vendored in; the people would be forced to install it.

I have mixed feelings about whether we should actually delete the URL library that exists in Node from its public API.

**Sam Roberts:** I think actually punycode was just deprecated in the recent version - it was in 7, I think... So in Core.

**Thomas Watson:** Deprecated as in it's no longer used, or it's no longer exposed externally?

**Sam Roberts:** Deprecated as you're not supposed to use it, I think. I can't remember... Or was it fully removed? I don't think so.

**Thomas Watson:** I don't know, I haven't looked at it. I mean, it is still used internally, but that's an example, so probably what happened there is not many people used it from Node, it wasn't documented as an official API. But URL is -- I mean, I personally have a fair amount of code that uses it.

**Sam Roberts:** But punycode was documented.

**Thomas Watson:** Oh, it was?

**Sam Roberts:** Yeah, yeah.

**Thomas Watson:** Oh, okay. I take it back then. There you go, it's there.

**Sam Roberts:** Deprecated. Version 7.

**Thomas Watson:** Right. So we do have the ability to deprecate things. Punycode is really easy, it's just gonna sit there forever, probably. Maybe sometime in the future we'll run a search over npmjs.org and be like, "Okay, look, nobody is using punycode; not from Node anymore. They're all npm-installing it because there's a much more recent, better version on npmjs." So it's a first step to eventually being able to do a pain-free deletion, and it comes up with URL, because right now with URL we are facing a choice.

\[12:01\] James has written this - and this is in no way a criticism of James; I mean, we needed a good parser, so he's written a WHATWG compliant parser, but the question is should we show it to users? Should they be allowed to use it merely by npm-installing Node 8? And what about those poor suckers on Node 6? Many of them are just moving to Node 6 - they don't get the WHATWG because it's not on npm, they have to upgrade to Node 8? No, I mean, it should be an npm module.

So that's what I propose. First of all, I think we should be limiting things as much as possible, and if we can make our own Node APIs obsolete by making sure that there's a better one on npmjs.org that people can use, and during what's happening with punycode - and punycode is a low-hanging fruit; I do not think it was the most popular of Node APIs, right?

**Sam Roberts:** Yeah, I think what they did was, as you said, they probably went over npmjs and looked at, "Okay, is anybody actually depending on this? How many is it?" I think if it's a low amount of people, it is actually feasible to reach out to these module owners and say, "Hey guys, we're gonna deprecate this in the new version. You should update your dependencies to actually point to the module that exists in userland."
I think punycode probably falls into that category, nobody is really using it. But URL on the other hand, it's something that a lot of people are using... Though I agree with you that it shouldn't have went into Core in the first place and, as you say, you could have vendored it in on compile time, then I think if we take it out now, we're gonna break so much stuff in userland that is working just fine. And maybe modules that haven't been updated for two years - and that is not a problem, that a module hasn't been updated in two years; it just means that it's really stable, and that's a power that we have in Node. We have these really stable modules because they do only one thing and they do it really well, so there's no need for them to update.

But suddenly if we pull out URL from Node Core, we're gonna get a lot of modules breaking that are working really well, and it's an unfortunate fact of Node being as popular as it is now, and I don't see any good solution to this, unfortunately. And I don't think pulling URL out is a good solution. I'm not saying that replacing it with a new WHATWG version is a solution either, but pulling it out is gonna create a lot of disruption.

**Thomas Watson:** Right, so I believe the URL should be removed from Node; I don't believe it should be removed now. I definitely wouldn't propose that. I think that the punycode model is a much better one. What I'd like to see is that Node does not expose a WHATWG compatible URL library from Node, that we do make sure it exists on npmjs, we do use it internally, and we start directing what will be a continuing flood of bug reports, close them and say "Yes, this does not do what the WHATWG does, but we support this." We could even put it into the Node Foundation. It can be node.js/ whatwg URL and we can npm publish it, and we can semver it, and it can develop with time -- or not develop, since as a spec maybe it should never change. And then maybe we can have this conversation again in two years, by which point everybody who uses URL will have bugs reported against their library saying "Hey, your library doesn't work. It does this weird stuff with URL parsing", and they'll look at it and be like "Well, we just used Node's URL library", so they'll report a bug on us, and we'll shoot it back to them and say, "My friend, there is a module for that. Just like you run a module, there's a module for that. Your solution for you is don't use Node Core's URL, use that", and we can start moving that direction...

**Adam Stacoviak:** \[16:07\] Incrementally.

**Thomas Watson:** Yeah, it's an incremental...

**Adam Stacoviak:** Versus a big swathe, which will break things.

**Thomas Watson:** Yeah, I don't wanna kill the world. I myself use the URL library quite extensively, and actually I like a number of its current real sloppy behaviors - they're excellent for some of my command line parsing. I happen to really enjoy its laissez-faire attitude towards URLs, but I also don't use them in web apps to actually parse real URLs. I'm using it more for configuration syntax.

**Sam Roberts:** So your solution is that we could start with a, I don't know if they call it a 'soft deprecate' or what they call it, but basically you deprecate it in the documentation, saying "Actually, you shouldn't use this." Maybe even have kind of like blessed modules; you say, "Actually, go ahead and use this module instead, which is on npm", and try to make sure at least that new developers who come into Node and read the documentation, they don't start using something that we think they shouldn't use. But then you said at some point later, after it's been deprecated for a while, you wanna go ahead and remove it?

**Thomas Watson:** I would hope to get to that stage. I think if Node lives long enough and is successful long enough, that eventually a significant part of the ecosystem will shift over to a good version of URL, the one that's on npm. I would hope to see that shift happen.

It could be that it never happens, and if it never happens, that's still okay because we still won't change or accept bug reports on the URL library... Unless it's a \[unintelligible 00:17:45.13\]

**Sam Roberts:** Security thing, right?

**Thomas Watson:** Yeah, a security thing. Unless it's like a real problem. But when it just doesn't do what people expect, it's kind of like "Well, there is a module for that."

**Adam Stacoviak:** So we've been talking about what to take out, and how best to take it out. How do you determine what to put in?

**Sam Roberts:** You just say no. \[laughter\[

**Adam Stacoviak:** Just say no? That's the easiest way? What kind of criteria do you define as like what should be a module and what should be Core?

**Thomas Watson:** I would say the things that should be in Node Core -- there's definitely a grey area, but I think there's a couple principles. One is that things that should be in Node Core are things that cannot be done effectively outside of Node Core. That's one thing. Things that have C++ bindings into V8, for example, need to be in Node Core.
But one thing that I would say is you have to ask yourself what needs to be in Node Core? For example, Node Core has an HTTP library that you could actually use pretty effectively, get lots of stuff done, it's good performance etc. But if you want HTTP redirect support, don't ask for it from Node Core, we're not gonna give it to you. You have mechanisms in Node Core; use those mechanisms to implement modules any way you want.

Another interesting example -- actually, I was just looking at the code to see what happened with this... But my understanding is that websockets are a real pain to install on Windows systems because they had a compiled add-on. So there was pressure to put websockets into Node Core, but that conversation ended really nicely and the people realized that actually this compiled add-on was there to do a bitwise XOR, if I recall, of buffers, which could only be done effectively in C++.

So we didn't have to pull in a whole websocket library to do that, we just needed to extend buffers, so it had this small API that could be used effectively to implement websockets. So websockets can stay out of Core and there can continue to be innovation in websocket APIs. Because all of the websocket APIs offer lots of high-level features of which there's debate - how should it work? What should you do? There's lots of innovation over there.

\[19:55\] So I would say that for a number of features it would be nice if Node Core could add a very minimalistic set of APIs that will make it possible to implement higher level APIs, and people can use them directly and we'll keep them stable, but hopefully people would move out.
Cluster is an example of that. Cluster could be built in the npm userland if there was two features present in Node Core that are currently missing. I would like to see those two features added... Obviously, somebody has to do it and I have not had the time to do it lately, but I'd like to see those two features added. Cluster moved out - because it's very opinionated - into npm, where it can innovate, or die, or whatever, and eventually, Cluster as well could be deprecated. It's too opinionated, it doesn't have to be something in Node Core; we don't have to maintain it, we don't have to bug fix it. If people don't like how it works, no problem. There's one, or two, or three versions of it on npmjs.org.

I think that's a good pattern. Look for the smallest thing that reasonably should be implemented in Node Core that's maybe usable; but if it's not quite usable and it has to be used by people writing modules on top of it on npmjs, that's great. The more people use those types of modules that have individually semvered APIs, the better, I think.

**Sam Roberts:** One of the things I think that's holding back some modules to be exported out of Node Core and into userland is that a lot of them for performance reasons are written partly in C++, and still today building modules that have native dependencies takes a little bit of time, and can break, and is hard to maintain, and requires certain things to be on the machine that you are building it on.

**Thomas Watson:** It also requires network access the first time you do it \[unintelligible 00:21:56.01\]

**Sam Roberts:** Yeah, so one thing that I really would look forward to would be - although that's not really Node, that's more npm or whatever package manager we're using - pre-built binaries. If we had pre-built binaries in the Node ecosystem, it would mean that we could have stuff like the HTTP/2 module that is currently being worked on that might be added to Node actually... Which is part built in C++ because of performance reasons. We would be able to have that easily installable from npm; that would be really hard today because of that.

**Thomas Watson:** Yeah, I agree. That would be nice. It's a very difficult problem to solve. I've had many hours of unpleasant customer interactions dealing with problems with binary modules. In fact, our app metrics module, our node monitoring - we pre-build it for all supported platforms, all Node platforms, and we package it up with all of those binaries, so there is no compilation needed for it. But it wasn't easy; that's not rocket science... You need to build farm, you need to build it on all of those things, you need to collect all of the binaries together, you have to package them all together... But it's a fairly significant piece of work, and it's hard to push it into the npmjs, into the backend.

In theory, npmjs could organize a build farm and they could do it, but they'd also have to have all the libraries... You know, that's a separate problem; it's a big problem, and it's hard to solve. Bert had suggestions for that, actually. I don't know if you saw that Chrome has an intermediate compiled format; basically, the C++ gets compiled to an intermediate platform-independent performance format, and then (I'm pretty sure) LLVM at runtime can do the final compilation down to machine code, and Chrome's using it... It's significant levels of programming wizardry and effort required to get that kind of stuff into Node.

**Sam Roberts:** \[24:06\] Do you think that HTTP/2 should be shipped with Node?

**Adam Stacoviak:** I was gonna ask that.

**Thomas Watson:** Yeah... So that's an interesting case. I have mixed feelings. There's a case to be made that HTTP should not be part of Node as well.

**Sam Roberts:** Absolutely.

**Thomas Watson:** But there are significant performance problems. TLS is famously poor performance in Node. Anybody who's not absolutely required to do end-to-end encryption is terminating their HTTPS at NGINX or something reasonable. You can get two or three times speedups by doing that. And part of the reason it's slow is because of the structure of Node internally. It could be erased by moving a lot of the code deeper down into libuv and C++ code. It's difficult to do it in a backwards-compatible way, but...

Given that Node already has HTTP, I think HTTP/2 is going to become more and more popular and it's going to be stranger and stranger that we have HTTP/1 and not HTTP/2. The build requirements for HTTP/2 will be terrible. I'm pretty sure the implementation uses lots of calls into V8. It would probably be hard to wrap with \[unintelligible 00:25:25.18\] and also what people want is for the HTTP API in Node to do the right thing - be either 1 or 2 as is possible, and that's hard to arrange unless you just force them out of using the Node HTTP API and go off into userland, which is not terrible.

**Sam Roberts:** But then you would have an API that you can't really change because now you're stuck with that; you have the same problem.

**Thomas Watson:** Yeah. I think it's a heavy dependency on C++ that makes it something that might need to go into Node. I'm not really happy with it, but I can't think of a better way.

An HTTP/2 is not just in C++ for performance, it's also because it's a complex protocol and it has a very good... I'm pretty sure the implementation is C, actually; well, at least the APIs are C. So it has a good implementation AND it's reasonably performant, and it's easy to build into Node... Or relatively easy; it was designed to go behind even-loop architecture, as opposed to some versions. So it's not so hard to do.

There's been some work - there was for a while - to rewrite the DNS library away from C areas into pure JavaScript, because JavaScript compilation is getting better and better. But then Node is stuck with maintaining an entire protocol implementation in JavaScript all its own and nobody uses, which has its own maintenance costs.

I'm kind of on the fence there, but I can see the wind is blowing in the HTTP/2...

**Adam Stacoviak:** We can clearly see there's a grey area, for sure.

**Thomas Watson:** Yeah.

**Adam Stacoviak:** There's no clear definition where you could say, "Well, this is what should go in and this is what should not go in" or "This is what should come out or not come out"...

**Thomas Watson:** And there'll always be disagreement, yeah.

**Adam Stacoviak:** Yeah, of course.

**Thomas Watson:** Well, what do you think about HTTP/2? Are you on the fence as well, or are you like "No"?

**Sam Roberts:** The main problem I see there is the compile -- if the compile issue wasn't there, I'd say it should definitely not go in. I also think that HTTP itself technically didn't need to be in, because no other module in Node Core is depending on the HTTP module.

**Thomas Watson:** But it depends on the compile binary. The HTTP parser itself is a C++ add-on, so it would have required compilers.

**Sam Roberts:** Exactly, that's the main issue. That's why I was thinking about maybe if we could have pre-compiled things for each platform, that might help it. But again...

**Thomas Watson:** \[28:06\] It would make the tradeoffs really different. If in some future nirvana we achieve a better way of dealing with compiled add-ons, that really makes things better. The balance of tradeoffs would really change... Which is a good reason to have as few things as possible, so we don't look as foolish, or we're not stuck with as much baggage when we reach this future, if we do. Or maybe the future will be different -- the future will definitely be different from what it is now.

**Sam Roberts:** We just have to be really careful; every time we put something in we have to think to ourselves "Okay, it's now in for good. It's gonna be almost impossible to change this API from now on." We've seen that a lot of times in Node Core, and now we're stuck with that. Every time we add something, it has to be really well thought out.

**Thomas Watson:** I think one of the interesting things about the HTTP API is that the protocol stack spec is pretty stable; HTTP/2 is kind of what it is, and the Node API, in the streams part of it, follows the spec fairly closely. It supports all kinds of great features - protocol renegotiation, and as good header parsing as you can even do, streaming... It's got all of this stuff in there because it follows a spec fairly closely - even at times making choices that make it a little bit more difficult to use, but it follows the spec and it's very flexible. And I think it's reasonably successful because of that... Whereas other APIs are more user-facing. Cluster does not particularly follow a spec, or... What are some other examples...? Streams - Streams is what it was, not because it was following a spec or had to be that way. There were three or four really popular Streams modules at one time that all did things differently.

**Sam Roberts:** Streams is a clear example of something that should never have been in Node. It's a huge mess right now.

**Thomas Watson:** I absolutely agree.

**Sam Roberts:** I would recommend anybody who's working with Streams to not use the Streams that ships with Node, but to use a module called Readable Streams, which might be a little bit funny-sounding name because there's also other things in Readable Streams, but... Readable Streams is actually also maintained by a lot of the Core people in Node. The Streams 3 implementation si pulled out into a module where you can experiment with a lot of stuff that we can't afford to experiment with in Node Core; now we can make better APIs, and stuff like that. And this is the most important thing - in our program, we can do a dependency to this version of Readable Streams that we know works without module, and even if Streams 4 comes out at some point, then it doesn't matter, we can run on that version of Node as well because we have our own version of Readable Streams.

That's a good example; that should never have gone into Node, and I think we can start doing that... Maybe also with the Cluster module - make a Cluster module in userland as well.

**Thomas Watson:** Yeah, I absolutely agree. There was a real problem in Node that had to be solved, and that was of back pressure; there needed to be a way to deal with pressure and to write some sort of -- and I'm not gonna say I know exactly what the solution was, like what minimal type of mechanism was required that would enable an ecosystem of streams to develop around it, but there has to have been a better way to make back pressure possible while leaving Streams outside.

\[31:46\] That said, there's actually a movement right now to move streams (not the Streams 1, 2, 3 - not that JavaScript Streams), to move streaming capabilities down into libuv. Doing that might allow TLS to move into libuv, and other things to move down into libuv, and allow a lot more performance. But even so, even if we do that, that doesn't necessarily have to surface into streams like API and Node. If it could surface into a much simpler API, which was used by Readable Streams and all of the wonderful Streams modules out in npmjs land, that would be nice. But we're left with it...

It's terrible... Streams is a huge module, it's very difficult to understand, huge maintenance overhead, and has all kinds of user problems - it has Streams, Cluster, URL... These are big modules that don't have to be there.

**Sam Roberts:** I think a very easy step that the Node Foundation should take in the documentation is simply just to have the concept of these blessed userland modules that we suggest to people to use instead, because we can't take out Streams of Node Core because everybody's depending on it right now... But at least the updated documentation says, "Hey, actually this is deprecated. You shouldn't use this, you should use this one instead, that is in userland. Just npm-install it, and it's way better."

**Adam Stacoviak:** So take the soft deprecation approach where you don't remove it, don't disable it, maybe even throw a warning or something like that, potentially...

**Sam Roberts:** No, don't throw a warning.

**Thomas Watson:** No, no, no. And don't print anything.

**Sam Roberts:** No, I consider that breaking.

**Adam Stacoviak:** Okay...

**Sam Roberts:** We actually saw that very recently with a change to the buffer API...

**Adam Stacoviak:** Because you're getting back a result you're not expecting.

**Sam Roberts:** Yeah, so if I run a module that uses the now deprecated buffer API, it prints out a warning saying "You're running insecure code." The reason in this case was that you could insecurely allocate a new buffer if you didn't know what you were doing. You could also use it correctly, and if you knew what you were doing there wasn't a problem. If you didn't know what you were doing, you could do it incorrectly, so they changed the API to make sure that users were forced to do it correct. But now, suddenly, a lot of modules that maybe were doing it correctly, they get these issues on GitHub saying, "Oh, I got this message you're breaking... You should, you know..." -- it's like, "No, my code is fine."

People get really scared when they see they see those things when they use your module... So no, definitely not print out anything; in my opinion, that's a breaking change...

**Adam Stacoviak:** So simply vocalize, "Do not put it in code..."

**Sam Roberts:** Just update the documentation...

**Adam Stacoviak:** And then write a blog post on Medium about it...?

**Sam Roberts:** Oh, you can do a blog post, you can do anything like that, but it's more like an educational process; at least that's the first step. I don't think we'll ever be able to pull out Streams of Node Core. Maybe URL at some point down the line, if we see that less and less people depend on it, I think it's likely. You know, it might happen. But just update the documentation and have these blessed modules that we refer people to instead.

**Thomas Watson:** \[35:11\] I really like that idea, and actually I might PR a change to the Streams doc right away. I mean, Streams needs to be documented in Node because Node APIs return Streams, you have to know what the APIs are. But there's a very good argument that you should never yourself type "require Stream" from Node. You should always require a readable stream, and it's not unreasonable to say that at the top of the Stream doc. "We have these in Node Core, but YOU, when YOU use Streams or build your own Stream, should be using Readable Streams."

**Adam Stacoviak:** That's what it says for -- is it \[punny\] or \[pewny\]?

**Thomas Watson:** \[pewny\] code.

**Adam Stacoviak:** \[pewny\] code? I thought it was \[punny\] code...

**Thomas Watson:** It's \[pewny\], because it comes from Unicode.

**Adam Stacoviak:** Okay, gotcha. And it actually says, "Users currently depending upon the puny modules should switch using the userland provided at punycode.js module instead." So they're already taking these steps, like you're suggesting.

**Sam Roberts:** That's cool, I haven't seen that. That's really awesome. That means that it's not really that big of a political issue apparently to do that.

**Adam Stacoviak:** So your suggestions are already being accepted, to a degree.

**Thomas Watson:** Yeah, so with Readable Streams it's a little bit different, because you can't not use Node streams. I mean, when you do fs.createWriteStream you are getting back a Node stream, right? But we can't nudge people to not use it themselves, to use Readable Stream directly. Well, I mean, directly from npmjs.

**Adam Stacoviak:** Any final closing thoughts?

**Sam Roberts:** I'll just say no.

**Adam Stacoviak:** Alright, thanks fellas.

**Thomas Watson:** Thank you!

\* \* \*

**Adam Stacoviak:** Thanks again to our friends at the Linux Foundation and the Node Foundation for working with us on this project, as well as our friends at IBM and StrongLoop for sponsoring this podcast series. It was a blast being there.

We'll be there again next year, so look out for us in 2017 at Node Interactive. If you wanna hear more JavaScript-focused podcast from Changelog, check out JS Party, our new live weekly show with Mikeal Rogers, Alex Sexton and Rachel White. Head to Changelog.com/jsparty, click Subscribe, don't miss a show, and thanks for listening.
