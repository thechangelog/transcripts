**Jerod Santo:** Well, I'm here with Jarred Sumner from the Bun project. Hey, man. I appreciate you coming on the show.

**Jarred Sumner:** Thanks for having me.

**Jerod Santo:** Exciting times, right? I mean, you first tweeted about Bun - it looks like May 2021. This was like early days teaser. There was a lot of interest then. And then if my research serves me well, you first announced Bun 0.1 July 5th of '22. That generated a bunch of excitement. And since then, you've been busy readying the project for production, you've raised money, you've started a business, and you launched the 1.0 back on September 8th, to even more interest, and fanfare, and tweets, and posts, and videos... Lots going on. Tons of interest, tons of success getting people to try it out. Adoption has been pretty impressive so far. Were you surprised at all by the success of either of these launches?

**Jarred Sumner:** I mean, I was surprised by both of them. Really, what I expected was - I expected some people to give it a try and to be excited. But I think one of the hard things is that it's a lot easier to try an npm package than it is to try like a JavaScript runtime.

**Jerod Santo:** Yes.

**Jarred Sumner:** And we technically do distribute on npm, but most of the people installing Bun are not installing it on npm. They're using the curl install script. And it's also not directly integrated into -- people don't typically install a runtime. So I guess, yeah, definitely a lot more people have been trying it than I expected.

**Jerod Santo:** What do you think attributes to the interest? I mean, obviously, performance was the thing that you came into the gate with, and it's just so stinking fast when you first try it. Is that what most people say like why they're interested in Bun, or why they actually went out of their way to install a new runtime and try it, was just like "I've gotta try this thing"?

**Jarred Sumner:** People try Bun because of -- the performance is what gets people to try Bun. But the thing that gets people excited to continue to use Bun is not actually performance. It's the all in one. It's that you don't have to worry about the difference between ESM import and like require; it's that TypeScript just works. It's that JSX just works. It's that the build step is there, but it's kind of invisible, as it should be.

**Jerod Santo:** What problem were you trying to solve, or why are you the guy that did this? Tell me your mindspace when you started working on this. What were you trying to solve, and what made you attack this kind of problem?

**Jarred Sumner:** I'd been frustrated for years of just how slow everything in JavaScript is. Why does it take so long to install dependencies? Why is it so hard to just run a JSX file, or a TypeScript file? Why does it actually matter that you're using import or require, and you have to worry about which one is the one for this file? Why is mjs, or cjs - why is that a thing? That shouldn't exist. Like, sure, there's reasons for all of these things, but we also could just not; it could also just be simpler.

**Jerod Santo:** "We also could just not..." So you said "Well, someone's got to make a thing where you just don't do that... And I guess it's gonna be me." Or did you look around the room and say "Is anybody going to tackle this?" I mean, what made you do it?

**Jarred Sumner:** Yeah, it wasn't quite like -- basically, what really happened was I was building the stupid like Voxel game in the browser, and the cycle time just got really slow as the game got bigger... And I was just really frustrated with how long it took to see my changes after I refresh the page. And so the first thing I tried was "Alright, what if--" And there was probably some tweet about this at some point, but this was like a -- it was like a game with a Next.js shell as like a React app for like the UI. And I was like "Alright, what if we just got ESBuild to work with Next?" And so I had like this really hacky Go-based thing that like tried to get ESBuild to work... And I was like "Huh, that is kind of faster, but not exactly in the ways I expect it." It was faster at build time, but it wasn't faster at the incremental.

So then I was like "Alright, well, what if I just like ported ESBuild to Zig?" Like just the transpiler. So that was the first thing. I spent a few weeks, and I had something that sort of worked; not super-well, but it sometimes could successfully produce JavaScript.

**Jerod Santo:** There you go.

**Jarred Sumner:** And then I was like "Wow, that's actually three times faster than ESBuild."

**Jerod Santo:** Okay.

**Jarred Sumner:** And then I was like "Alright, I should just keep seeing where this goes."

**Jerod Santo:** Keep pulling the thread.

**Jarred Sumner:** Exactly. So then a little bit later I added a dev server, which we actually removed in 1.0... But I added a dev server, and then for that dev server, I wanted to get Next.js to work. So then I was like "Alright, well, we're gonna need a JavaScript runtime to do the server side rendering parts." And I was like "Okay, well, what JavaScript runtime should we use?" And I looked at Quick.js... Quick.js is really easy to embed, but it has no JIT, so it's kind of slow... And then I looked at using V8, but V8 kind of has this fixed startup time cost that I wasn't excited about... Like, V8 is great, but -- and then I tried JavaScript core. And JavaScript core is like this really good balance of fast startup time, but with a very, very good JIT.

**Jerod Santo:** So you kind of answered a couple of my big questions right up front, which is kind of like why Zig and why JavaScript core. Let's go back to Zig for a moment. I mean, ESBuild is in Go, right?

**Jarred Sumner:** Yeah.

**Jerod Santo:** \[05:58\] And Go is -- okay, it's garbage collected, but it's not exactly known for being slow. But how did you know about Zig? This is a very obscure thing; I think you're making Zig popular with Bun... What do you know about Zig, and of course, why not Rust or something else? What made the Zig choice, and why did you think "Well, if ESBuild wasn't in Go, it would be faster"?

**Jarred Sumner:** Well, so at the time, another thing I was thinking about, which we've ended up not doing, but what I was thinking about was "Well, what if you could just do all your builds in the browser, inside a service worker?" And Go is actually like not a great language for WebAssembly right now... Specifically, they have -- I think that the WASM GC stuff will probably make it better... But Zig is a fantastic language for WebAssembly, because it has really good dead code elimination. The way it works is -- a big feature of Zig is comp time, and it's this idea that almost all of the code can be... Code which is like top-level is executed at compile time. And you can have like explicit comp time scopes, which then embed the result into the final binary. And that's also how the type system works. So it's a statically-typed language, but a lot of times, it's really like a duck typed, because the duck typing happens at compile time. And so this extends to dead code elimination, because code which is not reachable is not run. Which means it's also not included in the final output. So if you want really, really small binaries in WebAssembly, Zig is a fantastic language for that. But this is kind of a tangent, because it turns out we didn't use WebAssembly, but Zig is actually a great choice anyway.

**Jerod Santo:** Right. So you kind of chose it because of the WASM stuff, but then you decided not to do that anyways.

**Jarred Sumner:** Yeah. But the other part of it too was that I tried Rust for a bit, and I just wasn't very productive. There's a lot of stuff that makes it kind of hard to be productive for some people in Rust... And Zig is extremely productive. The language doesn't have a lot of syntax, so there's not actually a lot to learn. The hard parts are all about manual memory management and thinking about -- a really big difference from JavaScript for example is you have to spend a lot of time thinking about "When am I going to free this? How do I free this? How do I make sure I only free it once?" And Zig has a bunch of tools to help make this easier, but it's still something you have to worry about. And that's also part of why Zig is as a language is really good for writing fast software, because it doesn't do hidden memory allocations. It doesn't have constructors or destructors, so that means that every function you run is really -- you can see what the code is doing. It's usually kind of hard to know everything going on.

**Jerod Santo:** That's interesting. So one thing about Node in terms of community, like a barrier to contributing to Node , especially for web devs, has been C++. Obviously, there's people that know C++, and there's lots of contributors to Node over the years... One thing I hear people talking about with Bun and community is "Well, Zig is even more obscure." C++ is not the easiest programming language to use. It's doable, many people do it, but probably orders of magnitude more people are familiar with and comfortable with that than they are with Zig. Is this a concern of yours? As you grow Bun and you want more people to contribute, are you not concerned because you're going to keep the core close to your chest? Or what are your thoughts on like Zig being a barrier for folks helping build and evolve Bun?

**Jarred Sumner:** I would say Zig tends to be quite a bit easier for people than like C++, for people who aren't already familiar with C++, because Zig is just a much simpler language. In C++ you have templates, and...

**Jerod Santo:** There's lots there.

**Jarred Sumner:** Yeah, and there's a lot of different ways to do the same thing. You can have like or as like two brackets, or you can have the word 'or'. Both of those work, and are valid, and are the same.

**Jerod Santo:** Bug or feature? Certainly a feature. Somebody wanted both versions at some point, but why...?

**Jarred Sumner:** Yeah. In Zig, there's really just one way to do things. But Zig also has a lot of really nice features that were inspired from Go. For example Zig, has slices, and you can do the same kind of range for like indexing... And it has like defer; it's also a keyboard in Zig. It means a different thing in Go. In Go defer is at the end of the function scope, in Zig defer's the end of the current scope. So it's really useful when you have like a loop and you want to make sure you run something at the end of the loop; like, if you want free memory or something at the end of the loop, then you can use defer to do that. And Zig is also just evolving a lot. There's a very good developer velocity on the language itself. They just added a small version of destructuring for arrays, in the last two weeks.

**Jerod Santo:** \[10:10\] So Zig has some Go inspiration. Go is not an old language. I think it's probably like 12 now. I remember its 10th anniversary... Is Zig really new? I mean, I know lots of things -- I've been around the industry, but for me, this is a relatively new... And a lot of people are like "Zig? What's Zig?" And these are people that have been in the community a while. So relatively young as a language...

**Jarred Sumner:** Yeah. I think it's 2016 was when it --

**Jerod Santo:** Okay.

**Jarred Sumner:** I'm not 100% sure, though. But it's pretty new. Yeah, there's the Zig Software Foundation, they have a handful of people working on Zig full-time...

**Jerod Santo:** And you've found people picking up Zig in order to help you out with Bun, or to work on it, either at your company or outside of it?

**Jarred Sumner:** Yeah. Because Zig doesn't actually have really complicated syntax, and the amount of stuff to learn is not actually huge. People who are familiar with C or C++ usually can be productive in Zig really quickly.

**Jerod Santo:** That's excellent. That's one thing I do know about Go, is that it's incredibly simple in terms of -- I think there's less than 30 keywords in the entire language. So in terms of just like surface area of things that you have to learn, particularly one of the simpler languages to learn. So I think if Zig takes that inspiration, it'll be ahead of many other languages.

So a lot goes into a 1.0. You've been working very hard for a couple of years on this. What do you consider when you're thinking "Okay, we're going to launch a 1.0", which just happened this month... What all had to be there? You're like "We have to have these features." They just had to be there for 1.0. What all goes into that, in your eyes?

**Jarred Sumner:** The main thing we really wanted to make sure was that the existing frameworks work in Bun. Like Next.js, specifically \[unintelligible 00:11:45.10\] that's like Astro, that's Vite in general, and a bunch more. And these are also kind of a stress test of Node.js compatibility... Because the build tools are the things that use the most features of Node. Those are the hardest things to get working. And a lot of them work.

So really, the decision to say it is Bun 1.0 at this time, it was really two things. One is that you kind of just need to pick a time, to just say a number, or like "It's going to be done by this." Because sort of the act of deciding that is what makes it real, and it's sort of this shared goal to drive towards. That's part of it. But the real thing is that we just made a lot of progress on Node .js compatibility.

**Jerod Santo:** So with much acclaim and much excitement and interest also comes criticism. I'm sure you've heard some of the criticism.

**Jarred Sumner:** I was expecting more, to be honest.

**Jerod Santo:** Were you?

**Jarred Sumner:** Yeah.

**Jerod Santo:** What were you expecting to get criticized that wasn't? Or where were you expecting it to come from?

**Jarred Sumner:** Usually, if something has a lot of attention, then also it incentivizes criticism a lot more. And there have been maybe two -- like a blog post and a YouTube video, is roughly the extent of the most criticism I've seen. And I was expecting just like -- also, just in general, I kind of try to be pessimistic about things going well, if that makes sense...

**Jerod Santo:** Right. Expect the worst, and be surprised if it's better than that.

**Jarred Sumner:** Exactly.

**Jerod Santo:** So it surprised you on the positive side. I have seen criticism about the 1.0. Specifically, they say it's unwarranted, because there's no Windows support. Is that something that speaks to you?

**Jarred Sumner:** Yeah. Basically, we have a Windows build, but it is just really buggy. Like, barely usable. And we're going to spend a lot more time on Windows soon... But right now, we also have 1,700 issues, which is a lot. A lot, a lot.

**Jerod Santo:** You've got your hands full.

**Jarred Sumner:** So that's the hard thing, is like "Okay, people are definitely excited, people are trying Bun, and we can see that by all the issues. We really need to fix stuff."

**Jerod Santo:** So Windows support is a thing that you're working on, but it's not necessarily at the top of the priorities list, because you have so many bugs that you're drilling down. Is that what you're saying? And would it be like official, like, Windows system32? Or I'm sure it's not even 32 anymore, but... Or would it be like WsL style?

**Jarred Sumner:** \[14:04\] Oh, a lot of people are using Bun via using WsL 2, Windows subsystem for Linux. It's totally -- it's very usable. It works very well on Windows subsystem for Linux 2. The main caveat right now is that if you're using /mount/c, then Bun is just slower in a bunch of places. This is kind of inherent to the mount drive, because it uses a network file system, so it's gonna be slower in literally everything... But it is especially true in Bun, because it's just not something we've spent time optimizing yet.

**Jerod Santo:** Gotcha. So the other major goal is this Node compatibility, as close as you can get to the surface area of Node . Just how compatible is Bun with Node? You mentioned a lot of the major frontend frameworks are working, but I'm sure there's gaps. If you had to give a percentage, of like "Well it's 60% compatible", how close do you think it is to being a drop-in replacing? Because that's kind of your guys's goal, right? A drop-in replacement.

**Jarred Sumner:** Yeah, we want to be a drop-in replacement for Node, and in a lot of cases we are. The cases where we're not are like we haven't implemented dgram, and we haven't implemented HTTP/2. We do have a branch for HTTP/2. I'm expecting us to ship that in the next two weeks. Dgram is a little bit further away. I think the majority use case for dgram is like Discord voice chat and voice-related things... And HTTP/2 is used by the v3 of AWS SDK in a bunch of cases, so it's really, really important for us to get that shipped. The SDK v2 does work. It's just the v3 expects HTTP/2 support. But most of the Node built-ins are implemented. We have some gaps in like Node crypto, some gaps in zlib, we're missing Brotli... But we'll get these on. It's not a huge -- it's mostly just \[unintelligible 00:15:40.09\] of work. None of these are actually that hard.

**Break**: \[15:45\]

**Jerod Santo:** You've been incredibly productive. I mean, I've been watching you from the sidelines; obviously, when 1.0 came out... The amount of things that are in Bun, that Bun does - like you said, it's not just a runtime, it's all these things. It's kind of a batteries-included thing. How do you stay so productive as a team, or as an individual? You have all this work ahead of you... How do you get so much done so quickly?

**Jarred Sumner:** One thing as a company - we have one meeting a week. It's also very clear what we need to prioritize, because we have, as I said many times, we have 1,700 open issues...

**Jerod Santo:** Probably more than that now, since you haven't checked in a few minutes. \[laughter\]

**Jarred Sumner:** Probably.

**Jerod Santo:** 1701 at least, right?

**Jarred Sumner:** But also, one of the things about Bun 2 is that because -- one of the upsides to being an all-in-one toolkit is that we reuse a lot of the same code. So the JSON parser is the same; it's used for the bundler, but it's also used in Bun install, to read the pkg.json files. The TSconfig JSON parser can be reused, in general, for supporting JSON with comments and things like that. We didn't expose that. We haven't actually exposed that yet. We're gonna find some way to expose that. That's tricky, because -- this is a tangent, but that's tricky because we don't want to support... It would be not great if we made it so arbitrary files can have trailing comments with JSON... But it's a nice feature. Maybe we do like JSONC, or something; or JSON5, maybe. But it should have some file extension, some way to demark that, like "This is expected to have commas."

**Jerod Santo:** Commas and comments, right? You put those two things together, and you're suddenly happy again.

**Jarred Sumner:** Yeah. It would be great to have like pkg.json with commas and comments. But also, it's like, well, if we do that, then you can't use -- then that pkg.json file can't even publish that to npm, as far as I'm aware. So we can't do that. But it would be very nice, especially for pkg.json, honestly, because there's a lot of cases where you want to say why is this here.

**Jerod Santo:** Absolutely. And we're all dying for that. A common refrain that I've read since the 1.0 launch - because there's been a lot of excitement, and even to the point where there's hype people, who are just hyping stuff... And there's a lot of "Bun will kill Node " or "Bun has killed Node." This is a common refrain. We had Matteo Kalina and James Snell on the show just last week, from the Node team, of course, and they both stated that there's no beef whatsoever between the Node team and your team at Bun. They say there's collaboration going on, in fact there's conversation going on... Does that ring true from your perspective? The beef between Bun and Node is completely --

**Jarred Sumner:** There's no beef.

**Jerod Santo:** Yeah, there's no beef.

**Jarred Sumner:** They're great. Bun owes a lot to Node , and to Node 's community. We literally wouldn't exist if not for Node . And a lot of the inspiration for Bun is from Node . A lot of things can be simpler and faster, and a lot of the inspiration came from my experience as a frontend engineer, and also doing some backend stuff too, but mostly as a frontend engineer working with Node .js-based tools.

**Jerod Santo:** I appreciate you saying that, and I did read a tweet where you posted similar comments online... Which is great to see from leadership on both of these teams. We just did a show about some of the TypeScript/JavaScript vitriol that was going on a couple of weeks back. We had Rich Harris on the show, and we were talking about how it'd be really nice if like open source leaders, people who have a lot of followers, people who they're listening to, would come out and say that kind of stuff... Because there's a lot of what I call Molotov cocktail throwing amongst developers, which is unfortunate and unproductive. And seeing you say something like that, seeing the Node team say that and putting it out there I think is really important. Did you feel compelled to make a public statement because there was people saying this kind of stuff? Or where did that sentiment come from?

**Jarred Sumner:** \[22:22\] I just saw people getting mad at -- I'm mispronouncing his name, but \[unintelligible 00:22:25.21\] and I was just like "People shouldn't be getting mad at this guy. He's doing great work."

**Jerod Santo:** He's the Node contributor who has volunteered to work on performance stuff, right?

**Jarred Sumner:** Yeah.

**Jerod Santo:** And so a lot of, I guess, the ire was directed his way, because of Bun's performance improvements... Is that fair to say?

**Jarred Sumner:** Yeah.

**Jerod Santo:** Well, I appreciate you saying that. I agree with you 100% that he does not deserve such treatment. And in fact, I think nobody deserves such treatment for their volunteer coding efforts. Let's talk about the performance. I mean, we talked about Zig a little bit, we talked about JavaScript core... I guess we didn't touch too much on that. But your benchmarks are insanely impressive. I mean, you blow other runtimes out of the water... Lots to like, lots to like. I've been around long enough to know that that means you're making trade-offs, that others either aren't willing to make, or they can't make, because either technical debt, or backwards compatibility issues, architectural decisions that were made long ago... Stuff like that. There's reasons, and there's also just, I guess, the direction of certain projects that matter more. Priorities, right? Can you enumerate some of the trade-offs you've made with Bun, some of the stuff you're doing that has made it so fast, and how exactly you've accomplished these benchmarks?

**Jarred Sumner:** The answer is kind of boring...

**Jerod Santo:** Well, spice it up for me. \[laughs\]

**Jarred Sumner:** We spent a lot of time profiling, just a lot of time figuring out "What is this actually doing? Why is it actually slow? How do we make it faster? How do we design it to be fast?" And there's a few parts of that. One is that Bun uses a lot of SIMD, single instruction/multiple data. This is something that native languages support. These are special CPU instructions \[unintelligible 00:24:02.19\] process more data at one time. So instead of reading a string character by character, you can read a string eight characters at a time, 16 characters at a time. And if you can do that, then you can do things like -- you can like count numbers really quickly, or you can find if the string matches a certain other string really quickly... So that's one of the tricks we use to make the JavaScript transpiler super, super-fast, is that if you're reading a very long string, like for example if you're parsing source maps, that source contents field could be sometimes megabytes. And so you have this megabyte-long string inside of a JSON file, and parsing that takes a bunch of time. If you use SIMD, if instead of reading one byte at a time, you're reading 8 bytes, 16 bytes, 32 bytes at a time, then you go faster. That's one of the things.

Another thing is that we've spent a lot of time looking at what are the system calls Bun is using to do something, and can we reduce the number of system calls that are in use? So for example, if you want to copy a directory tree really efficiently on macOS, the fastest way to do it in a lot of cases is to use this special clone file system call. And that will do a copy-on-write clone of the directory tree recursively in one system call. So instead of having to open each file, read the contents, write the contents in a loop, close each file, you can just skip all that. Of course, there's trade-offs with that. In that case, in particular - this is kind of a tangent, but you might need to do like an IO... It has like an IO rewrite lock, so you can only do one at a time. But it's so much faster that that usually is still quite a bit of an improvement.

Your question was what are the engineering -- what are the product trade-offs as a result of performance focus. And I would say one example right now is in bun test we haven't implemented isolation yet, like test isolation. This is a common feature that people use in like Jest, or Vitest, where each individual file or potentially -- it's not always individual files; it can be sometimes groups. But it will start a new instance of a JavaScript global, and have all the code reloaded for each one that we use, and sort of start with a clean slate every time - we don't do that. There are things we can do to add it to Bun to make it fast, but we haven't done it yet.

**Jerod Santo:** \[26:09\] So the trade-off there is your tests will run faster, but you may have some memory run-over kind of stuff, where your tests are failing at random times because they're not isolated. Is that what happens as like an end user perhaps, or what would be the actual...?

**Jarred Sumner:** That potentially could happen, but it's pretty unlikely. The more likely scenario is that you have some timer that's running your test, and then you didn't cancel the timer, and then you run the next test, and then that timer runs after that file has -- like, runs from a totally different, unrelated test. But you could also make the argument that the test is leaking a resource, and it's the test's problem, but I don't think that's a good developer experience, so I have mixed feelings suggesting that.

**Jerod Santo:** Yeah, that's kind of like the old Steve Jobs "You're holding it wrong", right? It's like "Well, rewrite your tests to inject a timer, or something." It's like "Well, then you're not really a drop-in replacement, if I have to rewrite my tests", you know what I'm saying?

**Jarred Sumner:** Yeah. And I think another option that we probably will do in the future is -- one of the nice things about actually controlling the runtime, in addition to the test runner -- the test runner actually has a special integration with the runtime; it uses some custom event loop stuff for it, to make it pick up on like unhandled promise rejections and things like that, to make those test failures... It gives us a lot more control over things like this. So we could do something where at the end of the test any lingering timers are automatically cancelled. And because it would work in a way that is not observable from JavaScript, it means that even if you do like really hacky stuff, like override function prototypes and stuff, it would still work. But this is something we haven't done yet.

**Jerod Santo:** Yeah. So another trade-off that Matteo mentioned on our last episode was with regard to bun install versus npm install, and some security checks that npm does add that Bun doesn't do, which just means it doesn't hit the network a bunch of times, if I'm understanding what he was saying... Is that accurate, first of all?

**Jarred Sumner:** I didn't see specifically what he said... But he's a really honest guy, so I assume what he's saying is accurate.

**Jerod Santo:** He wasn't picking on you either. He was just like stating what he thought was a fact.

**Jarred Sumner:** Yeah. No, he's great. Probably what he's referring to, I'm guessing, is that we don't have an implementation of something like npm audit in Bun, which sort of is the thing that's like -- there are 42 security vulnerabilities in your dependencies, or whatever. That's what it logs. We don't implement that right now. But on the other hand -- so yes, that is a feature that is missing. But on the other hand, we also don't run post install by default for dependencies, which is very good for security, because this is a very common attack vector that normally, if you want to get a Bitcoin miner on somebody that, then you compromise a package, and then you do a post-install... That's usually the attack vector, is like post install scripts, or something.

**Jerod Santo:** Absolutely. Yeah.

**Jarred Sumner:** And so we don't run that, unless you add it to a list of trusted dependencies. So that's pretty good for security. It's also really good for performance, because also a lot of the time the scripts that have post-install are actually unnecessary. They might just like print a message, or something like that, to your terminal, and it's kind of spammy.

**Jerod Santo:** Right. But how can I nag people to support my project after they install it if I don't have a post-install script? What am I going to do, Jarred? \[laughs\] That wasn't an answer. Figure out a different way... They always will. They'll figure out some other way of getting in there.

**Jarred Sumner:** Yeah.

**Jerod Santo:** So elbow grease, it sounds like... Right? Like, applied effort in specific areas, that make it performant is the majority answer. Obviously, there's a few product trade-offs, things that you haven't implemented, maybe you won't implement by choice - npm audit, as an example - that make it faster. So another criticism -- I think maybe this was the blog post that you referred to. We had the video and the blog post. This one by another Jared, Jared Wilkurt. "Bun hype - have we learned nothing from Yarn?" Did you read that one?

**Jarred Sumner:** Yeah.

**Jerod Santo:** \[29:49\] Okay, so on that one - let me just set the premise here... Roughly speaking, he's like "This smells a lot like Yarn, where Yarn came out, versus npm, had a bunch of stuff npm didn't, performance being one of those things", and people got excited, started using Yarn... And then the npm team was like "Cool. We can do this stuff, too. Competition breeds innovation." They put the elbow grease in, they catch up, and now it's like "Well, what happened to Yarn?" Still a user of Yarn, by the way; mostly by inertia, not for any other reason.

But that was kind of the comparison. He was saying, he's like "This is probably going to happen with Bun, so let's not get excited and jump on the Bun train, because Node's going to get better." I think Node will get better as a result of Bun, especially; like you said, if it's merely elbow grease, maybe there's specific things they can't do, that you can do... But if not, if they can apply these things and get faster, what do you do, or how do you combat, or how do you answer to a guy who says "This is yarn 2.0. Bun is going to be irrelevant in a few years. Let's all just stick with Node, and let them improve their performance"?

**Jarred Sumner:** I thought the comparison was really confusing, because Bun is an all-in-one toolkit. We're a bundler/transpiler/package manager and a runtime. And also a test runner. And we're definitely pushing all of the tools to get better, and that's really cool to see... But I think the longer-term here with Bun is that each individual piece makes the whole thing better, and they build on each other. A big part of what makes bun test fast is that it is directly integrated into the runtime. The expect function is implemented in C++/Zig... Really more Zig than C++. And this is hard for other projects to -- this is a different approach. I think the Yarn comparison is also -- I don't really understand it, because Yarn was kind of a side project at a large company, and Bun, we're very focused startup, where making Bun good is existential. At Facebook, it is definitely not existential.

**Jerod Santo:** I agree that it's the kind of comparison that when you squint, there's a pattern there; you can do the analogy, like this is to this, like that is to that. But then when you look at the details of the particular projects, it really does fall down, I think, pretty quickly. Let's talk about the company. So you raised money, I think 7 million was what I read... Is there more than that now, or is that the raise?

**Jarred Sumner:** 7 million is correct.

**Jerod Santo:** Okay. And you have staff, you have a company... How many people are on the team?

**Jarred Sumner:** We're seven people. Most of us are engineers. We're mostly focused on just fixing all those issues...

**Jerod Santo:** Awesome. \[laughs\] And how much of that 7 million you think is going to cost to get those issues fixed? How far can you go on that amount of money?

**Jarred Sumner:** At our current burn rate, we have several years of runway. But I would say that we're gonna grow the team more... But I'm pretty confident -- like, things are going great. The plan there is our next 6 to 12 months are gonna be focused on just adoption. We want to get Bun to be used everywhere. So that's our focus, and we have more than enough runway to do that. And then we're going to start to think more about commercialization. The plan there basically is -- and this is the plan right now; plans could change in the future. The plan there though is we're gonna offer hosting built into the runtime, with a bunch of services on top. It'll be a really easy way to deploy any JavaScript application, from like single file scripts, running a small server, to like full-stack applications.

**Jerod Santo:** Is it similar to Deno's playbook, what they're doing with Deno Deploy, and those services?

**Jarred Sumner:** Somewhat. I think a big difference for us is that -- because Bun is an all-in-one toolkit, we have the bundler integrated in. I think the frontend parts will be a little bit more important for us.

**Jerod Santo:** What do you mean by that? Unpack that for me.

**Jarred Sumner:** In a few months, we'll probably do -- we haven't started working on this yet, but in a few months we're going to do a little bit more work on the bundler, once we get through the issues, to make it a little bit better for building full-stack applications with like a runtime integration. JavaScript is half -- not half, but a big part of why people want to use JavaScript on the server is for frontend apps. And it's actually really hard to share code between frontend and backend. This is still difficult, and it shouldn't be difficult. We're not going to do like a framework; we're not going to do like a Next.js style framework. I think it's not a good idea. But we might do -- we're gonna do like more tools for building those kinds of frameworks.

**Jerod Santo:** So Deno has Deno KV. This is their newest product. Have you heard about that? I can tell you about a little bit if you're not aware of what Dino KV is...

**Jarred Sumner:** \[34:09\] I've seen it, but I haven't tried it.

**Jerod Santo:** Yeah, I haven't tried it either. I've just read about it, talked about it. So this is a key-value store, it's built into Deno. It's like a top-level global, like Deno.KV, and it's a really cool, asynchronous way of having a key-value store built right into it, with a SQLite backend locally, and if you deploy your own server, it's a SQLite backend. But if you deploy to Deno, it's like they're geographically distributed, whatever-whatever database; that's really nice, and they'll take care of you in that way. And that, of course, will be a paid aspect of their hosting service. Is that the kind of thing that you would imagine with Bun, like just as an example, or is that tangential to the kind of stuff that you're thinking through?

**Jarred Sumner:** Maybe. I don't know. I think that specific example probably is unlikely for us to do, I think because most people are not going to use a kind of bespoke key-value store. Most people are using Postgres, and MySQL. If we were to offer -- I would love for Bun to have a built-in MySQL and Postgres client. Honestly, I wanted to do that before the 1.0, but we just ran out of time. Because we have a built-in SQLite client, and so it's very natural to also just have other database adapters. And I think it's something that should be built in, because pretty much everything needs a database.

**Jerod Santo:** Fair. So another guy we had on the show - I think you know Bradley Farias. In fact, he may have been instrumental in connecting us a while back.

**Jarred Sumner:** Oh, yeah.

**Jerod Santo:** I like Bradley. He's from Socket Security currently, and he was on a show; we were talking about something else, but he actually laid out the case for Bun being a bigger problem for Deno than it is for Node. And I think that Node is like so successful, so established, so out there that I tend to agree with him. And so maybe Deno is particularly in your guys's targets; not like in a malicious way, but in terms of - do you feel like you're more direct competition with Deno as a Node alternative, or not so much?

**Jarred Sumner:** We're really more focused on -- like, Node has the most users, and so we're really focused more on making Bun really good for the Node.js community. We're not really focused on Deno.

**Jerod Santo:** Fair enough. So we talked about the business behind it... That's called Oven. Great puns, by the way. You've got Bun, you've got Oven, good artwork. You're doing everything right with regards to just making an interesting project. You have a couple years of runway. Community, commercial - there's a push and pull there. Maybe you haven't quite hit it yet, because you haven't decided to commercialize... But do you have plans? Have you had thoughts? Have you seen other people go through these struggles of the open core, or the hosted? Or how do you actually take -- because you're permissively licensed, MIT. You don't have much licensing controls over the project. Have you thought about community versus commercial, and just the strain there that will eventually be, where you decide on what to work on, where to focus etc.? Is that something that you've thought about, or is that something that concerns you as you get going?

**Jarred Sumner:** I think that the incentives must be aligned. The thing that's good for the community and good for the product needs to also be the business. And that's the way to kind of make these things not problems. And Bun has to be permissively license; there's really no other way. Like, I wouldn't personally trust anything, any low-level infrastructure tool that isn't open source. But sort of like -- and this is why I think services are a good approach. Things which directly add value, that are optional, but are easy.

**Break:** \[37:45\]

**Jerod Santo:** As you adopt tools, of course you look at these kinds of things... And when you adopt a tool like Bun, you may be asking yourself, "Okay, is it open source? So if Oven disappears, is Bun still going to be a thing I can use?" And the clear answer there is yes with MIT, right? But in terms of like the progress of the project, you have seven engineers, you're probably going to raise more money, perhaps you'll have more success, and you'll build. But in the rare case that Oven folds - maybe it's five years from now, maybe... Who knows? Where would that leave been in terms of people working on it? Because you've got so much effort going into it now, and one of the things we've seen with Node through the years is it's had kind of fits and starts. I mean, there was a time where Node was being so neglected that there was a fork called io.js, and they were like "Hey, we can do this better. We need to not have it under the "rule", so to speak, of a single company", which I think was Joyent back then, "and have a foundation, and do all these things." And that allowed Node to continue down the path. What does it look like for Bun in the case above? And if I'm thinking of adopting it, how do I feel good about perhaps the people working on Bun, who I love and respect and really like their tool, having to go make money in a different way?

**Jarred Sumner:** Well, it's gonna be directly -- the services part of Bun will be directly integrated into the runtime. So it's not going to be -- but in like a very optional, very... It's going to be purely -- it's just gonna make it better. And the thing that's important is the incentives. And we're very incentivized to do this well. And to do this right. I guess I'm a little -- could you reframe your question?

**Jerod Santo:** Sure. So if I'm considering using Bun, and I'm a long-term thinker, I of course look at the license. Because one of the things I want to know about my tools is "Are they open source?" If they aren't, then maybe I still choose to use them, but I'm gonna have to think about that, because I look then at the company behind it. And maybe that company is Microsoft, and I think "Okay, the chances of Microsoft's support of this tool outlasting my business is high. They've been around, they'll probably continue to be around. And so fine." If it's open source, I can have more freedom, because even if the company that supports it disappears, the tool's open source; I can pick it up from there and run with it. But I also look at Oven and I think "Well, all the work going into Bun, which is making it better, better, better, is Oven." I'm just assuming that now; maybe there's a lot more people working on it, and hopefully there will be, especially if you have community success. And if Oven for some reason fails - God forbid; and I'm sure that you're doing great, and everything like that, and I'm happy to hear it... What happens to my Bun? Does it just sit there, half-baked, pun sort of intended? What happens to me? Do I have to pick up the reins?

**Jarred Sumner:** \[41:59\] One of the great things about being open source is that we are growing our contributor base. We have a number of people who don't work at Oven contributing to Bun. And that number is growing. There's this one person \[unintelligible 00:42:10.14\] who lives in China, who's just done so much great work, just like fixing random bugs. He fixed a Node DNS issue with like the lookup service function the other day... And just, people are contributing. It's really cool. The only thing I really feel bad about is I need to be faster at reviewing PRs. Our CI is like really not good right now. We need to fix that.

**Jerod Santo:** Well, your time is also precious. I mean, you've got people like me banging on your door, wanting to talk to you, as your issue list continues to grow every time you don't look at it. So I'm sure you're torn in multiple directions, because you're leading the company now as well. Are you the CEO side, or are you just CTO? Are you staying technical? Are you going to do it all?

**Jarred Sumner:** Yeah, it's hard. I still need to write a lot of code, and there's also a lot of other things I need to do. And I'm not good yet managing my time. But I'll get better.

**Jerod Santo:** So setting aside the 1,700 issues, what are you most excited to work on? What's a thing that's missing, that you just can't wait to go hack on?

**Jarred Sumner:** Honestly, if we didn't have 1,700 issues, the thing I would build right now is -- and I almost did it like two nights ago, but I was like "I can't do it."

**Jerod Santo:** \[laughs\]

**Jarred Sumner:** I wanna have built-in keychains, Touch ID and credential... You should be able to have Fido keys, and have all that credential stuff. All that should be built into the runtime as APIs that you can just use easily. It's silly that people are using environment variables, and like putting stuff in like plain text on their computers, particularly for like CLI tools, when there's really good system APIs that are much more secure. And the reason people go with the insecure approach is just because the APIs are not there. You have to install some dependency, and the dependency is unmaintained \[unintelligible 00:43:48.18\] add-on that somebody built like five years ago and they forgot about... That was like a random thing.

**Jerod Santo:** \[laughs\] What would it take to talk yourself into just doing some of the fun stuff? Because that's what got you here, wasn't it? You were doing the fun stuff.

**Jarred Sumner:** Yeah... I don't know, we have a lot of stuff we need to do. It's like, on a weekend I'll probably do something like that randomly.

**Jerod Santo:** What you need is a Jarred Sumner replicator device. If you could just duplicate yourself horizontally...

**Jarred Sumner:** Well, we're hiring. We're hiring C and C++ and Zig engineers. I spend a lot of time interviewing, because we need to hire more people.

**Jerod Santo:** There you go, listener. Oven is hiring. Speaking of Buns and Ovens... We have a few listener questions. One of them is "Where did the name Bun come from?"

**Jarred Sumner:** Yeah. So initially, it was this friend who has a bunny named Bun. She was like "Why don't you name your product Bun?" And I was like "I'm not going to name it after your bunny. And then I thought about it more, and I was like "Well, Bun it's a bundling of the JavaScript ecosystem, and Bun it's also a bundler." So I was like "Oh, that's actually kind of good." And it's also short, and it's also easy to type.

**Jerod Santo:** I agree, on all accounts. Easy to remember, easy to type, three letters, not ambiguous spelling... It's a good name. And then I suppose Oven was just a natural abstraction from there, right?

**Jarred Sumner:** Yeah. And people are not sure if Bun is a bunny, if it's bread, if it's a dumpling... So it continues the ambiguity, to some extent.

**Jerod Santo:** Right. Do you have any more puns up your sleeve, or anything you want to unveil?

**Jarred Sumner:** Nothing right now.

**Jerod Santo:** \[laughs\] Not right now. He doesn't have time; he doesn't have time to work on it. Here's a question from Daniel Buckmaster: "What's the hardest part of Node to be compatible with?"

**Jarred Sumner:** Honestly, there's so many edge cases in Node -- the hardest thing really is that there's a lot of libraries that use obscure internals. Basically, the hardest thing is that a lot of Node predates private class fields, by many, many years. And so that means that a lot of the internals of Node are exposed. And Bun doesn't implement things the same way that Node does, so then we have to hack in and like pretend, and detect if we need to pretend to implement something, and then start using the pretend version, so that way they can overwrite it. An example is like require dot extensions, or like required dot -- I think it's like underscore resolve file, or resolve module, or something like that; there's an underscore resolve in it. It's like the private method version of require dot resolve.

\[46:10\] And for example Next.js uses that to detect if you tried to import React. And if it doesn't, if you don't implement that, then it doesn't work. So even though we don't actually work this way, we have to implement all these polyfills, basically. That's really the hardest part, is this long tail of random internal, that is, they probably shouldn't be using... But it exists in the wild, it is observable behavior, so we have to do it.

**Jerod Santo:** One of the things about adoption - I read this here, in terms of adoption, Vercel added Bun support, Replit added support for deploying Bun, Ruby on Rails added it, Laravel Sail installs Bun by default...

**Jarred Sumner:** Also Cloudflare pages.

**Jerod Santo:** Cloudflare Pages... Probably new since I read that... So a lot of platforms, open source projects, frameworks are adopting Bun, and that's gonna be super-exciting for you guys.

**Jarred Sumner:** It's so exciting.

**Jerod Santo:** Yeah, it's cool.

**Jarred Sumner:** It's crazy how fast it's going.

**Jerod Santo:** What about apps? And I know it's less than a month since you made it production-ready... But are there people building cool stuff on Bun, that either Bun unlocks them, allows them to build something they couldn't build before, or they just love Bun so much, and it's making them super-productive?

**Jarred Sumner:** A decent amount of the latter. There is also some cool stuff that are just like random things people -- like, the other day I saw somebody build this integration with like their Hue lights, that they put their hand... They're a DJ, so when they put their hand closer to the camera, it dims the lights, or it makes the lights go up, or brighter... And that's like some facial or like some gesture recognition stuff. I think it's like that... And then people also just run -- because we're Node.js compatible, people run Node.js things in Bun. But then the other things are like - people really like the SQLite integration; they can just run things that are using a database, and SQLite analytics kind of stuff...

A lot of people use Bun for bun install, because it's just stupidly faster. I've seen so many tweets of people who are like "I switched from npm install, or yarn install, or pnpm install, and my install times went down by like two times or three times." Bun test is usually fast... For a lot of people, for like small projects, the slowest part in GitHub Actions for when you're using Bun is just the action to download Bun; like, \[unintelligible 00:48:20.29\] Not their tests, not their install. Usually, we're faster than the GitHub Actions cache. So it actually makes more sense to not cache the Node modules in GitHub Actions than it does to cache them.

**Jerod Santo:** Oh, my.

**Jarred Sumner:** Because bun install just installs faster.

**Jerod Santo:** That's gonna take out a lot of the advantage of upgrades on CI and stuff, is like the caching is what they get when you get the better plans. But if you don't need it -- it's faster to not cache, I mean, that's quite a win.

**Jarred Sumner:** Or it'll push the CIs to actually make their caching fast. There's no good reason why caching into CI isn't faster.

**Jerod Santo:** I agree. I agree. Alright, here's one last question. I think it's a good one to end on, as a listener question. This is from Kball, he's actually a JS Party panelist. I think it's a good question to end on: what role do you envision Bun eventually playing in the JS ecosystem? So assuming success, and it fulfills everything that you want it to, what role do you think it will play in JavaScript?

**Jarred Sumner:** \[49:16\] It's kinda like hard to say right now, because it's pretty early... But we want to make it a lot easier for developers to build and ship and be productive using JavaScript. So probably a role that's somewhat of a combination of just the tools that we have - so like a package manager, a runtime, a test runner, kind of all in one. And I think what's interesting about that in general is that it means that we can solve problems at a different -- we can choose the layer we want to solve problems at.

A very concrete example of this is the pattern in common JS to require -- like, module resolution for common JS, with a /index.js, and implicit file extensions and things like that, we support all that. But if that was actually done from scratch, without the backwards compatibility concerns in 2023, or really anytime later than 2014 or so, that would have never been done that way. It's really an editor tooling problem. Like, this is something that editor autocomplete should have solved. So that's an example of not a great layer, like the wrong layer to solve the problem at. But at that time, the editors weren't capable to -- or editors weren't quite good enough for a lot of cases, at least for JavaScript, to do that kind of thing, like auto-complete imports.

So I think by having a bunch of different places to solve problems at, it means we can make a lot of really good technical decisions, when we're able to. The first and foremost thing is we have to maintain compatibility. But if we can make decisions on new things, then we can do really cool stuff. A very small example - it's not a huge thing, it's a small thing - is if you have nodeenv=production in Bun, and you run a jsx file and it's like default configuration, you haven't configured it to use a different jsx than like React, we actually have a faster jsx transform. It makes server side rendering something like 20% faster. And that's just done automatically. You don't have to think about it. If it was just a runtime, it would be a hard thing to do, because this is a transpiler integration. But you only want the transpiler integration to happen at runtime, when using Bun in production. And so if it was a generic transpiler, you'd need like a plugin, and you'd need all that stuff. But it's Bun, we can just do that.

**Jerod Santo:** It's Bun, we can just do that. I think that's a great note to end on. Well, Jarred, I'm really -- I'm excited; you got me to install it, and I'm an old curmudgeon who rarely installs new things these days... So congrats on all the success so far. I'm sure you have a lot ahead of you. As you mentioned, you're hiring... So where do folks go to connect with you, Oven, if they want to try their hand at writing some Zig on your payroll? What's the best place to connect, especially if you're looking for jobs, or looking to contribute?

**Jarred Sumner:** Please go to bun.sh/careers.

**Jerod Santo:** There you have it. Of course, listener, all the links to all the things will be in your show notes. Jarred, I really appreciate your time today... And hey, I'll let you go triage those issues. I'm sure they're just killing you that you're not working on that right now, so I'll let you get back to it. I appreciate it.

**Jarred Sumner:** Thanks for having me.
