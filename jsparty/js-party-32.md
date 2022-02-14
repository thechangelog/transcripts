**Kevin Ball:** Hello there, and welcome to another episode of JS Party, where every week we are throwing a party about JavaScript and the web. I'm your MC for this show, KBall, and I am super-pumped about today's episode, because we're not just talking JavaScript, we're actually jumping over and talking about WebAssembly... And we have a special guest joining us today, Jay Phelps. Hi, Jay!

**Jay Phelps:** Hey! Dude, that song... Now I know why it's called JS Party, I wanted to dance!

**Kevin Ball:** I dance every time. If you could see me, I'm here rocking out in front of my microphone. Awesome, thanks for joining us. Also on the line we have Suz Hinton. Hi, Suz!

**Suz Hinton:** Hey, it's good to be back. Thanks for having me. I'm really excited about this topic today as well.

**Kevin Ball:** Yeah, I think it will be good. So we have a lot of interesting topics to discuss related to WebAssembly, but I think there's a key thing we have to figure out first, which is how do we pronounce the abbreviation? Is it WASM \[wozm\] or is it WASM \[waezm\]?

**Jay Phelps:** That's a great question... I think it's more of a regional thing, because I say WASM \[wozm\] but the majority of the people in the community group and in the working group call it WASM \[waezm\]. I honestly have no idea, I don't think there's a correct pronunciation. I think it's just regional, and then also for me personally, WASM \[waezm\] just feels weird to say... Like, waeeeesm...

**Kevin Ball:** Jerod argues that it should be WASM \[wozm\] because then it rhymes with AWSM... So that we can have our title for today, "WASM is AWSM."

**Jay Phelps:** Exactly. But at the same time, WASM \[waezm\], you can be like "Wuzzuuuum!!!" You know, like the Budlight commercials... \[laughter\]

**Kevin Ball:** And one of our panelists, Chris Hiller, who's not on today, he wrote a poem for WebAssembly. It's called "Instructions", by Christopher Hiller." Wasm. Has'em." \[laughter\]

**Suz Hinton:** Award-winning.

**Jay Phelps:** You guys love doing rhymes.

**Kevin Ball:** \[03:47\] We do. I didn't prepare a rap for you, Jay, but we like to give off a little bit. So let's actually step back, since this is typically a conversation about JavaScript, and not all of our audience maybe knows that much about WebAssembly... You are one of our experts; Jay, do you wanna give an overview of what it is and what it enables?

**Jay Phelps:** Sure, yeah. The phrase that they like to use is that it's an efficient low-level bytecode for the web... But we kind of have to distill that down and talk a little bit more about what that means. On the efficiency side of things, it kind of means efficient in almost every single way... Not just efficient as in like performant while the application is actually running, which it is, but it's also trying to be efficient in the actual size of the files, and also efficient in sending out those files over the internet and then getting them compiled to the person's native machine code.

In the last couple years there's been a lot of discussion about the parse times of things like JavaScript, right? So you may have worked really hard to get your bundle size down to 500 megs, or less, or more, or whatever, and now you're looking at the performance flame graphs and seeing that it takes a long time, especially on these mobile devices, to actually even parse and compile the JavaScript.

With WebAssembly, the goal is to do something totally different, to do what's called "Streaming compilation." That means that while the browser is downloading those bytes from the internet, it can actually compile it right then and there. It parses and compiles the WebAssembly bytecode while it's being downloaded. It doesn't have to wait for the file to complete. That's huge. This is a fairly new feature out of WebAssembly in some browsers, particularly Firefox and Chrome... But in those instances, for example, Firefox is able to compile the WebAssembly faster than it actually is downloaded over the internet, on average.

There's certain cases where the internet is super fast and your computer is super slow where that's not gonna be true, but particularly on things like mobile devices, that can be huge. Now the compilation, that parsing and compile step that runs in your browser is no longer the bottleneck; it's back to being the internet.

**Kevin Ball:** There's two things in there that I think would be worth breaking down. One was compilation as you go, which in JavaScript you kind of need to have global visibility before you can truly compile it. Is that not true for WebAssembly?

**Jay Phelps:** It's somewhat true. For WebAssembly, it can compile it because of the way the things are broken up into sections. It's gonna depend on the actual virtual machine implementation about whether it's able to compile in between different segments. I don't wanna get too low-level, but the files themselves are broken up into these segments, and different things are organized inside the files in a way that you might not normally -- like, if you don't know anything about binaries and native compiled code, it might be weird to actually distill down what the files contain, because they split things. The code bodies of all the functions are put in different sections than the names for the functions, and for imports and for all your strings, all the data segments, things like that are gonna be in totally different sections.

So depending on the actual virtual machine, it may be able to compile just the individual sections separately. It may have to wait for that section to finish downloading before it can compile it, but in -- I don't wanna speak for them, but in my understanding of the Mozilla's virtual machine implementation is that it is able to compile them as they're coming in, even within the same segments, the same sections.

**Kevin Ball:** That's really cool.

**Jay Phelps:** \[08:04\] Yeah, it is very cool. JavaScript was not designed as a compilation target, it was designed as a programming language. So all these types of tricks that they can do to make things super easy to parse, super easy to compile - those are things that weren't thought of when JavaScript was being made; not at all. It wasn't even a fleeting thought. So that's why WebAssembly is such a great compilation target, and that's what it's intended as. It's not intended for you to write it by hand, although you certainly can... Just like you could write native machine code by hand by using an assembly language, like a textual representation of the machine code, you could do the exact same thing with WebAssembly. There's a textual representation of the bytecode.

That's actually one thing I wanted to talk about, which is that the name WebAssembly is actually a misnomer, because WebAssembly itself is neither specifically for the web, nor is it actually an assembly language. It's a bytecode, not an assembly language. So while it sounds super cool and buzz-worthy, it's actually not a Web Assembly. The reason why I'm saying it's not for the web is the specification actually is completely agnostic of a browser, or JavaScript, or anything like that... And that's done intentional, because designing this low-level bytecode - this is pretty unprecedented, in fact, where you have all these major companies coming together and deciding on an instruction set. This has never been done; literally, I'm not kidding, it's never been done, where all these major companies come together and create an instruction set. So they knew that this was unprecedented, they knew that this was gonna be useful work outside of just the browser, and that's why they've been careful to not make it specific to the web per se.

Now, they keep the web in mind, and certainly some trade-offs--

**Kevin Ball:** Interesting... Something you said there got me thinking... Essentially, this is like redesigning Java bytecode or something, so you could have a global virtual machine, but instead of it being owned by a single company that someone like ORACLE could acquire and do nasty things to, it's developed in the open.

**Jay Phelps:** Yeah, exactly. There's certainly some things that are analogous to the JVM bytecode. There's been a couple attempts at doing similar things to this, like creating a generic bytecode that's super low-level... The JVM is kind of a bad example simply because it is very -- if you actually look at the JVM bytecodes, they're very specific to Java. It's very clear they had Java in mind when they were designing the bytecodes... Whereas with WebAssembly it's pretty generic, it's pretty low-level; it's about as low-level as you can get while still abstracting the underlying machine.

So I think that's important - it's very, very low-level. It's not something you typically will write by hand, unless you're looking for ultra-performance or you're working on tooling.

**Kevin Ball:** Interesting. So if we kind of explore that direction then - it sounds like what you're saying is we're calling it WebAssembly, but really the web is like Basecamp. Everest is some place that is essentially a universal virtual machine.

**Jay Phelps:** Yeah, that's exactly right. That's one of the most exciting things about WebAssembly to me... It's not tied to the future of browsers and all that stuff per se. There already are places and people who are using WebAssembly in completely unrelated web cases. The Ethereum Virtual Machine, for example, is being rewritten to use WebAssembly as their instruction set. And there's other use cases, as well.

\[11:55\] There's even a person who's on the community group who is trying to create an actual micro-kernel, the core functionality of an operating system, that runs WebAssembly natively, without needing to use system calls for -- like, if you know a lot about OS stuff, they have different rings to the security privileges of an operating system... And with WebAssembly, the way it's sandboxed, you actually don't need those rings if all applications were written and compiled to WebAssembly. So you could do some very interesting optimizations.

There really is not a lot of precedents for this. The long-term viability of it is an open question, but it's kind of a really cool and exciting thing... Because I would love to see WebAssembly be that gap, that bridging of native applications to web applications and making it so that eventually the browser just gets absorbed into the operating system and there's no distinction.

Chrome OS is the perfect example of what does the future maybe look like, where the browser and the OS are one and the same. I think WebAssembly really helps bridge that gap. I could see -- this is a huge bet type of thing, but I could see companies like Apple and Google, with their Android and iOS, deciding to eventually support WebAssembly as a first-class application format, instead of their proprietary solutions. Because they both have to do sandboxing, and they both came up with their own proprietary way of doing that.

**Kevin Ball:** Right. Well, and right now they're already supporting a JavaScript engine as an increasingly first-class way to develop applications... So this is kind of just one step further down the road, potentially more general...

**Jay Phelps:** Right. Yeah, and you could theoretically ship WebAssembly in an app today on both those platforms, since they have JavaScript core and all that, in V8. I don't know of anyone who's doing so though.

**Kevin Ball:** Interesting. So stepping back a little bit to browsers, partially because a lot of our audience is kind of web-developer-focused, Firefox has really been pushing the edge on this, and I think their super high-performance compiler is showing essentially they can load and compile this stuff as fast as it comes over the wire... It's really highlighting the potential of WebAssembly. Is there any info out there about some of the other major browsers doing that level of optimization? I don't see as much news, but you're in the know... Are Chrome, and Edge, and Safari - are those teams working on "How do we get this thing compiling as fast as it comes over the wire?"

**Jay Phelps:** They absolutely are. They don't talk about it as much as Mozilla does. The last I checked, Chrome -- I don't remember if it's in the actual release or if it was on the Canary that I was using... But Chrome did support streaming compilation, but the performance of it was not as -- what's the tactful word...? It was not as good as Firefox at the time. But it's an incremental thing. I really do subscribe to the "Make it work, make it right, make it fast" type of mentality, and they do as well; I mean, I don't know if they officially subscribe to that, but they at least certainly act like they do.

So there's a lot of room ahead for optimization in all these major browsers, and they kind of will go head to head; one thing will be faster in one browser, and then a totally other thing will be faster in the other browser. It's the same world as JavaScript...

One of the biggest things - and we'll touch on that, I'm sure, later - is just the calling into JavaScript performance. There's been a ton of work that's been prioritizing and making that faster, just so it's more practical.

**Kevin Ball:** \[15:55\] Yeah, so that's actually an interesting area to explore... How easy or hard is it to access DOM and other APIs that right now you would access in JavaScript?
**Jay Phelps:** That's one of the interesting things about WebAssembly currently, and one of the reasons I attribute to why WebAssembly has not taken off. The community group and the working group definitely subscribe to the "Make it work, make it right, make it fast" type of thing, so everything's very minimal as far as the abilities and stuff like that.

In the MVP of WebAssembly, WebAssembly itself cannot access the Dom directly. It can't actually do any external I/O or side effects directly. It can't make Ajax requests, it can't open files, it can't do signal interrupts... It can't do any of those external stuff. Instead, it has to call into JavaScript to do that. JavaScript has to basically instantiate a WebAssembly module and say "Hey, here are the functions you can call." So it has to give bindings to DOM-related stuff.

In WebAssembly, currently you can't pass around a DOM node or manipulate DOM or anything like that, because there's no concept of it. There's basically a giant linear memory that is a bunch of numbers... Just like you would deal with native machine code - there are no abstractions currently about structs and objects and garbage collection, and stuff like that.

So because of that, there is a cost to calling into JavaScript. It is a bridge, and all the browser vendors that I've looked at - actually, I should just say at how V8 and how WebKit or JavaScriptCore does it. In both of those cases, they use the existing interfaces that have a lot of overhead that's kind of unnecessary... And they basically just took the simplest route, which I agree with; I think it's great to not try and create new code that you think is gonna be faster without proving that it really would be faster... But there's a lot of work being done to improve that speed, and at the same time, there is work being done in the specification process to make WebAssembly be able to access those things directly, without even needing JavaScript involved at all.

I think that's gonna be the key to WebAssembly's future, to make it open up... Because right now we're in a situation where if you have a native background, if you've done C++, C or Rust, or you have a desire to learn those things, WebAssembly is great for you; it's a great use case, there's a lot of things you can do with it, but a lot of JavaScript people and a lot of browser/web people don't have that background... But they may have a Java background, they may have a C\# background or desire, or they may wanna use these hot, new languages like Reason, or Elm, and those other more dynamic languages.

The big thing about all those languages I've just listed is that they're all garbage-collected, versus C, C++, Rust - those are not garbage-collected languages... So the ability to touch DOM directly - it doesn't require having garbage collection, but it definitely makes it... So imagine this - if you're calling across the foreign function interface, you're calling across that bridge to JavaScript and you create a DOM node, and that DOM node somehow is a reference inside WebAssembly, well how would WebAssembly know when to automatically garbage-collect that inside if WebAssembly was just this giant linear memory like it is right now? You wouldn't be able to know, it wouldn't work well. It wouldn't work at all.

\[19:48\] So you can do tricks... The current implementations of languages compiling to WebAssembly that require garbage collection do tricks to work around this, and they work, but they don't perform as well as they should. WebAssembly really needs first-class support for the underlying garbage collector that's in the virtual machine; the same garbage collector that JavaScript is using, WebAssembly will get access to. And that's not something that you as a language person -- if you're not a compiler author, you're not gonna have to deal with this. To you, it just means that your Java, your C\#, your ELM - those will just work correctly. But as a compiler author, this is all very important information to make languages efficient, and that's why a lot of languages have been holding out.

C\# has done a ton of experimentation and they've got the blazer stuff that compiles to WebAssembly that works pretty well. Go, another garbage-collected language, just released their ability to compile to WebAssembly, but it doesn't perform as great, and the binaries are kind of bloated; that's a common theme that you're gonna see when a new language decides to target WebAssembly for the first time - things are gonna be slow at first, and your binaries are gonna be bloated. That's a pretty normal thing, because "Make it work, make it right, make it fast." Do it in that order.

If they try and skip the first two steps and go right to making something fast or small, you fail. You take longer, you don't do it right... It's just better to follow within those steps. But I realize how frustrating it can be, because some people are like "Oh, WebAssembly is supposed to be smaller and faster, but yet it's bigger and slower than JavaScript", and it's just not fair, because JavaScript has had so many years to be optimized...

Really, when we're talking about the benefits of WebAssembly, we're talking about the hypothetical benefits that can be attained. We basically lifted that ceiling that exists on JavaScript. Using JavaScript as a compilation target, there's a ceiling - we know - and WebAssembly lifts that ceiling much higher, so that we can get better performance. But it's gonna take time, it really is.

**Break:** \[22:09\]

**Kevin Ball:** Suz, you're often doing some pretty interesting edge cases of stuff - web USB, funny gaming stuff, things like that. What's your take on WebAssembly and where things are?

**Suz Hinton:** I feel like that's such an accurate description... I feel like always the edge case with everything that I'm trying to do. Yeah, I'm really interested in WebAssembly for obviously these load times - amazing with the streaming compilations... But once you've actually downloaded the WASM package or the modules and you're running it, I'm interested in what WebAssembly is actually really good at with regards to what it can run.

I've been reading things about it and I'm seeing that it's good at things like crunching numbers, which obviously makes me think of things like gaming, but I also wanna see if we can hack it to just be able to port tools that normally run just on your desktop with C, and in even a lower-level language than that. I'm wondering, can we port things to the browser, similar to what we used to use Emscripten for... That's what I wanna know.

**Jay Phelps:** Absolutely, you're 100% right... Because it's such a low-level target, the things that it is absolutely best at is crunching number type of things... Because you know, in JavaScript the virtual machine can only do so much about making assumptions about the various types of things, and you have to be very careful to not type your code in a certain way, so that it doesn't de-optimize, and stuff like that... Whereas with WebAssembly it's very strictly typed and there's a lot of optimizations it's able to do.

That being said, things that technically end up being crunching numbers and you may not realize that it is crunching numbers is -- I don't know if you guys have seen the... So there's a project Mozilla maintains called Sourcemaps (Sourcemap is the npm name), and as it sounds, it's for creating and reading source map files for JavaScript. It's actually the library that the Mozilla DevTools uses, it's the same source map library that Babel uses, and blessed, and a bunch of projects. It's the most popular source map implementation. And they thought the exact same thing. They said "Hm, is this something that we should try and compile this to WebAssembly?" They had it written in JavaScript before, so then what they did is they ported it to Rust, and then compiled that Rust to WebAssembly. Their very first version of it was 5.8x faster than the JavaScript implementation.

**Kevin Ball:** Wow...

**Jay Phelps:** And they did a little bit of tweaking, a little bit of algorithmic improvements, just basically taking advantage of knowledge of the fact that it's gonna be compiled to a much more native target... Right now it's 10.9x faster. I know I appreciate that when my Babel builds, and the DevTools, and all that stuff... But that's just an example.

Now, certainly, it is possible to create examples that are actually even slower than JavaScript, and that surprises a lot of people. A lot of people say "How can that be possible?" and that's ultimately just because JavaScript has had a lot more time to be optimized... And because JavaScript is a much higher-level language... This of it this way - when you create a class in JavaScript, the underlying virtual machine has a notion of objects and classes; it knows what a class is and what an object is and can use that knowledge to make optimizations, because it can make assumptions based on that. However, with WebAssembly currently there actually is no object model; there is no knowledge of objects.

You can think of a typed array; I don't know if you're familiar with typed arrays, but... Or just a regular array in JavaScript. Think of a regular array in JavaScript, and imagine all you can do is add and remove numbers in that array, and... Welcome to WebAssembly! Because that's essentially what it boils down to. That's kind of over-simplifying it a little bit, but it just gives you the example of -- the WebAssembly virtual machine has no knowledge of objects and classes, and stuff. If your language you're programming in has those, they get de-sugared down; they get compiled down to loads and stores into this linear memory, and where the start and the end of a class in memory is is a convention, essentially. The compiler knows just by convention and by keeping track of that at compile time, rather than at runtime... Typically, in most languages.

**Kevin Ball:** \[28:24\] Aren't those types of optimizations what your compiler to WebAssembly would do? Like, removing the tool chain out of the browser and into the compiler.

**Jay Phelps:** That's exactly right. However, there is a limitation that the compiler in this case doesn't know the underlying machine code, so it can't utilize -- it can only compile to WebAssembly, and WebAssembly doesn't have all the tricks in the book for it... Because modern, real native CPUs today have a lot of exotic instructions and things that you can do for special cases to increase performance, and you don't get direct access to those things; there is no way to hint to the virtual machine "Hey, use this specific instruction (or whatever) if it's available."

So the WebAssembly virtual machines - it's really up to them to try and deduce these types of things. I don't wanna focus too much on that example because it's just an example, but the point being is that there's always gonna be cases where WebAssembly can be slower than something that is a little more high-level than the virtual machine has more knowledge of... But by and large, once WebAssembly has had a bunch of time in the wild and they have improved the optimizations around the compilations that they do, then WebAssembly will beat JavaScript in the large majority of cases. It may not be true today in every case, but in the large majority of cases it will beat it.

**Kevin Ball:** That kind of underlying tooling stuff is very interesting to me. One of the things that I was thinking about as I was doing research for this episode is, like, if you look at what's going on in -- and I'm a web front-end guy, so I'm thinking of that world... But if you look at what React is doing with their new architecture, they're behind the hood, slicing and dicing work and doing all sorts of magic compilation/computation things that your application never has to worry about, and then running them out. That could be happening in WebAssembly.

**Jay Phelps:** Oh, absolutely. And the only reason it's not -- at least in my opinion, and I don't wanna speak for them... But I've talked to Sebastian and a couple other people in the React core team about this, because I'm a big advocate for WebAssembly... It ultimately it comes down to the garbage collection and the fact that WebAssembly has to call across that JavaScript bridge; they're just not interested in doing a lot of effort or a lot of commitment into something that has a potential of being slow. But at the same time, there's projects like the Glimmer Virtual Machine for Ember. Ember is another competing UI framework, and a Glimmer engine is how their underlying rendering works... And they've recently started an effort to actually implement their virtual machine in Rust, that compiles to WebAssembly. And at this point - this is almost a year in the making, if not more, and in a lot of ways it's a research project, because it is unknown whether in the end the performance benefits of WebAssembly itself will get negated enough by the cost of calling across into JavaScript. Some initial benchmarks suggest that sometimes it does, sometimes it doesn't, that type of stuff, but it is a little too early to tell definitively whether it's gonna be a win. In the long-term it's without a doubt gonna be a win, just...

**Kevin Ball:** Just when.

**Jay Phelps:** \[31:51\] Yeah, exactly, unfortunately... If you're doing things like games, you can get great performance right now, today, in games, just because you don't need to cross that bridge super often. But when you're touching DOM and stuff like that, what you have to do -- you don't have to do, but to really get Glimmer, Ember-style performance, you have to batch up your changes and send those changes in like a change list across the wire, across that bridge, and then apply those changes at a single time, just to minimize the cost of that bridge. But I think that performance is definitely going to increase significantly over the coming years.

**Kevin Ball:** Suz, did you have other examples in mind that you were curious about?

**Suz Hinton:** I really just want to have a compiler compiled into WebAssembly. That's what I wanna see. You look at those websites like repl.it and other websites that allow you to essentially be editing things in the actual browser... This is the missing puzzle piece for me on a personal project, where I would love to be able to move something like avr-g++ to be able to be run in the browser. And the bridge isn't too bad with passing over something as small as a C++ file to compile using that...

So I guess I'm interested in that \[unintelligible 00:33:09.05\] in that how hard is it to port existing tools that might be written in C++ or Rust? I know that there's some work you need to do, or you even need to kind of write these pseudo-interfaces in order to get that cleanly coming over. What are the current challenges in people being able to do probably more unique projects like that?

**Jay Phelps:** So Empscripten you mentioned earlier, which is a project that one of the guys who's at Mozilla created originally - I think it was designed for a predecessor of WebAssembly called asm.js; I'm not gonna talk too much about that, but it was essentially a predecessor, and attempt to do something similar to WebAssembly before this... And they were able to reuse a lot of that architecture, and now Emscripten's primary goal is WebAssembly.

Emscripten, if you've got a C or C++ project, it's definitely the way to go. It basically wraps on top of a clang and it uses the same arguments and everything... The main thing that Emscripten these days provides is a standard library, an implementation of the standard library for the browser. So especially right now, because of the bridge to JavaScript, some of these things have to be implemented in JavaScript, so it comes with all of that stuff. And I have helped several people with their existing C++ projects and I think most people are gonna be surprised at how little they need to do to get their C++ projects working in WebAssembly.

Now, ultimately it's gonna depend -- the issues you'll run into are most likely things like platform-specific APIs... And even then though, some of those platform-specific APIs have been shimmed out and will just naturally work. But if you're especially on the graphic side of things, you may have to do some if defs, where you're saying "If it's a Mac platform, use this. Otherwise, if it's WebAssembly, call this header from Emscripten." Emscripten provides headers for accessing HTML5 and all that, so it takes care of that for you, you just have to call that.

For example, if you're touching the file system, all of that stuff gets emulated in Emscripten automatically for you. If you're using anything from the standard library, it will just be automatic and you don't have to do anything special.

You might find other edges... Multi-threaded environment is not currently -- it was working for a little bit, and now it's not working because of the Spectre and Meltdown exports. The browsers had to disable shared array buffers, and a shared array buffer is required to be able to do the multi-threading... So it currently does not work. That's one deal-breaker for a lot of people who have C++ stuff - they might be surprised where they have threads.

**Kevin Ball:** \[35:59\] Is that something that's under active development to fix? Because I feel like one of the things that's really exciting about WebAssembly is the potential of a fine-grained parallelism approach in the browser. Earlier I saw a keynote that Lin Clark did recently where she was talking about parallelizing everything in the browser, because we know that parallelization is the way to unlock continued performance gains at this point, and client code is the one place that's very hard to do that, because JavaScript's primitives for parallelization (web workers or whatever) are pretty coarse-grained, they're hard to use for a lot of situations... But if you could use Rust, which is very good at writing fine-grained parallel code and compile to WebAssembly and just have it run - that unlocks a huge amount.

**Jay Phelps:** Yeah. I don't know the latest from the browser vendors other than -- the last thing I knew was that they were doing research on the best ways to be able to unlock shared array buffer without exposing those exploits again. They've mentioned it in one of the community group meetings a couple weeks back, and they seemed confident... They talked about it in a way of like "WHEN we re-enable it", not "IF we re-enable it", so I'm assuming that they have confidence in it, but I unfortunately don't know specific timelines.

There has been talks -- currently, WebAssembly, when you do multi-threading, if shared array buffer was exposed in the browser, it does actually use web workers, technically... Now, when you're doing something like C++ or Rust, that's actually not a big deal. The only big deal about that is that the cost of spinning up a new thread is relatively cheap compared to the cost of spinning up a web worker. In a lot of ways, that can be helped by pooling, and stuff like that... But otherwise, once the web worker - a.k.a. thread, in this case - is spinned up, then there's no major issues on performance or something like that. You don't have to deal with the transferability, because again, with Rust and C++ everything ends up being just numbers, and you're able to access that through the shared array buffer... Which is one of the problems with JavaScript - you can't send a class or an object over the wire without it being serialized, because that would be unsafe. But with shared array buffers, because they're just numbers, you can use the atomic operations to lock and wait for the different values across threads and stuff like that and those abstractions get compiled away.

But my point to that was there has been talk, actually even in the last community group meeting which I think was either yesterday or the day before (I can't remember) of "Do we expose real threads, like pThread type of things, to WebAssembly? And it's a contentious subject... My take on it at this point is the answer is "Yes, but not right now", because it's a really, really big undertaking. Once you expose real pThreads, it indirectly makes JavaScript multi-threaded, whether you want it to be or not... Because now you have concurrent threads that can call into JavaScript concurrently and create races within JavaScript itself... And the existing virtual machines for JavaScript are not thread-safe; there'd be a lot of work that would need to be done to make JavaScript itself work correctly in a world where you can call into it from a true multi-threaded environment.

**Kevin Ball:** That's interesting. I wonder if you could essentially create a Ruby-style global interpreter lock on JavaScript piece, so like you have these things running along, but then as soon as they call into JavaScript, suddenly it's serialized.

**Jay Phelps:** \[39:58\] Right, right, right. Right now, essentially when you do the web worker style stuff - it's fine, you have true multi-threaded in a way with your WebAssembly contexts; but as soon as you wanna call into JavaScript, if you're not on the main thread, the only way to do it is to postMessage... That's what saves JavaScript today from that complexity - you have to postMessage, so... You can't create those races -- I mean, you can create races, but it's not the same type of race; it's not an actual language-level race where the compiler has to be aware of these things.

If you haven't dealt with actual very low-level races before - not you, but everyone just in general - they can be very unintuitive and very difficult... So I empathize with the browser vendors pushing back on it. I think they've done a good job of acknowledging that it's an inevitability, but realizing that there are bigger fish to fry right now, and we want to focus on the host bindings, we want to focus on the garbage collection... And if we focus on the multi-threading, that's just gonna take away time and push back the GC and the host bindings stuff.

**Kevin Ball:** And that's part of "Make it fast", right?

**Jay Phelps:** Yup.

**Kevin Ball:** First they're working on "Make it work, make it right", and then, finally, they'll work on "Make it fast."

**Jay Phelps:** Yeah.

**Break:** \[41:25\]

**Kevin Ball:** So let's count this as -- we're rolling in, and it's your weird idea, but I think there's actually something really key and interesting there... Two pieces, actually. One is in terms of distribution. So folks who are coding in these other languages who want something that's more native-level performance, but wanna be able to tap into the greatest distribution network in the world, which is the internet and the browser...

But then the other one that I think is interesting is something we've touched on a few times, which is learnability. Tools like JsFiddle and CodePen and things like that, that essentially give you a browser environment for development and for sharing code, have dramatically accelerated the ability of people to learn web development technologies. If we can get compilation and runtime and all of that working in the browser - what does that do for the learnability of all these previously kind of systems languages where you had to do a lot of local set up?

**Suz Hinton:** Yeah, that's what I want. I want us to stop having to call out to a cloud service to compile the code that you're writing in the browser IDE. I want someone to plug an Arduino in, using WebUSB to be able to upload the code, but it needs to be compiled first... And if that's all happening completely offline and they can open a browser that's even just running stuff in like local storage, that to me is where we've finally hit the point where you've got easily distributable educational resources like that. I think you totally hit the nail on the head there... And that's why at least I am so excited about it.

**Jay Phelps:** I totally agree.

**Kevin Ball:** So a lot of the tool chain right now is built -- they're using an LLVM back-end to output WebAssembly...

**Jay Phelps:** \[43:51\] That's right, yeah. There's stuff like \[unintelligible 00:43:54.08\] but those are early projects for experimentation and optimization... But the primary goal is to use LLVM, and most tooling will end up using LLVM to generate their WebAssembly.

**Kevin Ball:** Well, LLVM is pretty mature, and most compilers focus on bootstrapping, right? Like, "How do I compile myself with myself?" Has anybody tried bootstrapping LLVM with WebAssembly?

**Jay Phelps:** Yeah, it does work. And in fact, there's a bunch of different stuff. It doesn't work for every case, but yes, it's been done. There's also JavaScript Core itself, which is the JavaScript engine for Safari - it hasn't been compiled to WebAssembly... So you can run JavaScript Core in JavaScript Core, with WebAssembly. And it actually was faster than you might expect. It was like, "Hm, that was actually surprisingly fast."

**Kevin Ball:** Did it create a speed increase, or...?

**Jay Phelps:** \[laughs\] No, no... That would be hilarious though if that was the case.

**Suz Hinton:** That would break my brain.

**Jay Phelps:** Yeah, that would break my brain, too. Theoretically, that could be possible...

**Kevin Ball:** Oh, you know what it would let you do though? It would let you test JavaScript Core in Edge or in Chrome. You could embed Safari's JavaScript engine into other browsers.

**Jay Phelps:** Oh yeah, absolutely.

**Suz Hinton:** That's a whole new level of those standardized unit tests that they're now running.

**Jay Phelps:** I'm sorry, was that a question?

**Kevin Ball:** No, I'm just starting to think about it... What if you could compile, for example, ChakraCore to WebAssembly, as well? How many layers of JavaScript engines could you run? \[laughter\]

**Suz Hinton:** That's how you cheat and get threads. \[laughs\]

**Jay Phelps:** Right, exactly. \[laughter\]

**Kevin Ball:** So can we run a JavaScript engine in a web worker, or something like that? \[laughter\]

...calling back and forth between all of these different engines.

**Jay Phelps:** Oh, you could do it today, absolutely.

**Suz Hinton:** There's gotta be a trade-off there.

**Jay Phelps:** Yeah, there's always a cost. Theoretically, right now there is not an easy way. It's possible, but there's not an easy way to JIT your WebAssembly, to actually send a JIT. Let's say that you wanted to do an implementation of JavaScript and compile that implementation of JavaScript - a JavaScript virtual machine to compile to WebAssembly... You could do it today, but generating new WebAssembly code on-demand for it to be a just-in-time compilation - there's no first-class support for that within WebAssembly itself... Because again, you've gotta create a new WebAssembly module from JavaScript, and that has a cost, especially for small -- you know, if all you're doing is trying to JIT a single function, that's just not gonna be worth it... But it is definitely a stated goal; we're gonna get there, it just takes time.

**Kevin Ball:** It's kind of amazing. So we touched a little bit on tool chains, and that was one of the things that was kind of interesting looking around... Somebody's done a doc of like all the different languages that have compile to WebAssembly support, and there's like 20 or 30 different environments that support this at this point.

**Jay Phelps:** Sure, yeah. Is that the Awesome Wasm website, or is that a different one?

**Kevin Ball:** It might have been... Let me look. I actually wrote a blog post about WASM. I got so excited getting ready for this episode, that -- well, it was funny... I was working on this episode, and then I was like "This is really cool!" so I went on Quora and I was starting to answer questions, and that got me more excited, and then I was like "I've gotta write a blog post about this!" So I went and wrote a post about how WebAssembly is accelerating the future of web development, and what it's potentially gonna enable.

Let's see... Yeah, it was the Awesome Wasm Langs, that's what it was. That's the list of environments. It's got your esoteric languages, like Brainfu\*k has a compiler... \[laughter\] Prolog, and things like that... But there's also C, C\#, C++, the whole .NET environment, Python, Haskell, Java, Go... All of these things are now capable of compiling to WebAssembly.

**Jay Phelps:** \[48:17\] They're just not production-ready though. A lot of those are not production-ready, unfortunately.

**Kevin Ball:** Which ones would you say are?

**Jay Phelps:** Rust and C++ are by far the biggest ones that are production-ready. I would have full confidence in using those in production. Any of the dynamic ones, any ones that require garbage collection and all that stuff - you may be able to use it in production, but you're definitely gonna be an early adopted.

Go, for example, had to do a lot of clever tricks to work around the -- they essentially spilled their entire call stack into linear memory, so that they can do garbage collection on it. That has a pretty big cost... And it's a temporary trade-off, until WebAssembly gets that GC support, or the ability to introspect the call stack within -- this is all getting pretty low-level, but WebAssembly is a stack machine and you can't currently introspect that stack. So to do any kind of garbage collection within your language, you have to basically duplicate or move your pointers and stuff that you would normally have on the stack has to actually get in linear memory. Essentially, you can think of it as -- even things you would normally do on the stack, you have to do on the heap. If you know a little bit about stack vs. heap, that can give you an of example of -- it's gonna be expensive to be spilling these things into that linear memory.

**Kevin Ball:** Yeah... As a highlight of how expensive that is, I saw a thing recently that - it's just sort of an aside - Microsoft Edge sped up some form of array looping by 2.5x by changing the implementation from C++ to JavaScript (of all things). But the main reason was that let them shift their memory, so they were able to shift from heap to stack.

**Jay Phelps:** Interesting. You have to share that link with me later, because I'd love to read that.

**Kevin Ball:** I saw that and I was like, "So you're speeding up your JavaScript by going from a native implementation to writing in JavaScript..."

**Suz Hinton:** \[laughs\] I love that.

**Jay Phelps:** The hardest thing about talking about performance - and WebAssembly is no different - is nuance. I can say "It's faster", but that's not always true. There's certainly gonna be cases where JavaScript is faster, especially now because it's so early... And the trouble people have is they latch onto a specific phrase and then they try and prove how wrong it is. They're like "All of the binaries as small, huh? Well, I'm gonna go and use this brand new tool chain that just got released and complain about how the binaries are 10 megs, or something."

It's true that, especially from the native world -- think about it this way, the native world, for the most part, has not really had to care about file size; it's within reason, right? You don't want a 2-gigabyte executable, but the difference between one byte and a meg is really pointless in the native world for the most part... So they haven't really focused on those types of optimizations historically, so the tool chain stuff that compiles to WebAssembly, the early on stuff - and it's already gotten way better, but early, early on it was pretty bad. It would not be unusual to compile to WebAssembly and get 20 meg files.

\[51:59\] They've gotten super-improvements on that, and now with Rust and C++ with the right flags and stuff you can get that down to just a couple of k for a simple Hello, world. But there's a lot of trade-offs. One of the biggest things, ironically, for Rust and C++ is you need a way to allocate memory on the heap, so like your malloc and your free. And malloc and free are actually fairly large implementations for most of them. There's the ones that are built into the operating systems, but then there's community-based ones. Rust uses a totally different one by default than OS ones; they have different trade-offs.

One of the trade-offs they did was having more code to -- you'd have bigger binary size, smaller heap usage overall, like fragmentation and stuff like that... So one of the choices people are gonna have to make in Rust and C++, the people who are working on WebAssembly implementations, are both working on smaller allocators. That will make the opposite trade-off - you can say "I want a smaller bundle at the expense of having slower allocations." It's all physics, it's give and take. You can't just magically create things to be fast.

So it'll depend on the project. A perfect example of it is if you're just trying to compile to WebAssembly a small library, a tiny little library, you may wanna use the smaller allocator that trades file size for performance. If you're writing your entire app in a language that compiles to WebAssembly, you probably want the better allocator because that size is essentially amortized; if the allocator is 2 kb, in the grand scheme of your app 2 kb means nothing, so it'd be worth that performance difference. And we're not talking slow versus fast; we're just talking micro-benchmarks, especially when it comes to very small allocations.

**Kevin Ball:** So here's an interesting question along these lines... So what we're describing here, if we were going to the compiled language world, is basically everything is statically linked. You're embedding all these libraries that you're gonna use in your binary that you're gonna ship. Is there anything on the horizon that looks like essentially dynamic systems libraries, so that the browsers and whatever VMs would have a standard malloc implementation that you could dynamically link to and not have to ship that over the wire?

**Jay Phelps:** You know, anything you import from the WebAssembly module, or -- when you say "import", you're not doing that in your C++ or your Rust, but the compiler does it... Because WebAssembly can't do anything external without JavaScript, you technically are already doing dynamic linking always. You can't use WebAssembly in the browser today without dynamic linking something.

As far as the browser providing something, it's gonna provide the host bindings eventually, so you'll be able to create DOM nodes, and print out the log, and all that... So that's technically gonna be dynamically linked.

As far as providing standard library stuff like malloc and free, or sbrk (the lower-end ones of those), there's been discussions... It's tough, because it's such an opinionated thing, right? If you know about malloc, you might not even realize that there are lots of implementations of malloc, and that's an opinionated thing. So instead of that, one of the focuses has been also making the caching story easier, so that that becomes less of an issue.

\[56:03\] You can imagine there being lots of CDN links for standard library stuff... You know, like, you pull in the C standard library, and that just get cached and reused cross-origin between all the different WebAssembly applications, and stuff like that. So not just the file gets cached, but the compilation itself gets cached. So the fact that it's a different file isn't really that important. That's not doable today, but that's definitely something that's been considered and talked about, and a goal is to make those types of use cases easier, just so that code can get reused, especially when -- you can have a lot of excess file size that you just don't... It's kind of a pain -- it kind of goes back to the jQuery days, where every website had jQuery, and it's like "Well, wouldn't it be nice if everyone just shared the same jQuery?"

**Kevin Ball:** Yup, and we got that with CDNs, and then we introduced module bundlers and now we've thrown it away...

**Jay Phelps:** Exactly, and then we walked away from it. But you know, in the JavaScript world things move very quickly, whereas like in some of the standard library worlds they move very slowly. Malloc doesn't really change, for the most part, for a lot of standard libraries. There's always gonna be new implementations and stuff like that, but caching those things heavily is definitely something we're gonna want to do at some point.

Whether the browser will expose those things directly itself, like provide its own opinionated malloc and free - if I had to guess, I would say they won't... It's just too contentious, I just can't see that happening.

**Kevin Ball:** Suz, anything else on your mind for WebAssembly? You said coming in you had lots of questions...

**Suz Hinton:** Yeah, I'm thinking about this from the web developer perspective, who works 9-to-5 at a company that they work on a product that gets released on the web... Given that this is so early on and given that there's already a few performance-based benefits for starting to use WebAssembly, are there any low-hanging fruit that they can sort of focus on for now, while they're waiting for it to be ready, where they can sort of arm themselves with enough knowledge to start using this stuff to improve the product that they're already working on? How is it relevant to the day-to-day web developer right now?

**Jay Phelps:** Well, aside from the fact that you're probably already using WebAssembly -- actually, I would argue that almost every single person listening to this is probably using WebAssembly without knowing it... Going back to that SourceMap as an example of one of the many projects that have imported to WebAssembly, that we all use, just transparently... Personally, even though I'm super-obsessed with WebAssembly and super-excited about it, I don't try and advocate people force themselves, or I don't super-advocate "Try and find somewhere just to use WebAssembly for the sake of..." So certainly the average CRUD app, where all you do is just (most applications are this way) read data from an API, and then update those forms and stuff like that - those things are not gonna super-benefit from WebAssembly at this point. I would not recommend going down that route.

But if you do deal with - as you guys were saying - weird things... I would say the more weird it is, the probably more likely it's a good fit for WebAssembly at this point. Anything dealing with algorithmic anything; if you're dealing with algorithms, it's probably a great fit for WebAssembly. Graphics in general, as well. In the future, WebAssembly is gonna get SIMD (single instruction, multiple data), which is really useful for doing factor-based stuff.

I want people to be more aware and excited about WebAssembly so that the browsers focus more on it, as well, so that the revolution that I think is coming gets sped up. In a perfect world - I'm envisioning five years from now - you don't really need to know anything about WebAssembly; it's just an implementation detail of the language you're using... Just like machine code. Like, how many people compile for iOS and know anything about the ARM instruction set? Probably a tiny, tiny fraction of people doing that. So they don't need to know how their code gets compiled and runs on the native thing; it just works.

We're not quite there yet with WebAssembly, because it's so early, but that's the goal - you will just be able to transparently take advantage of it. You'll be able to use your Reason, your Elm, or some brand new language that hasn't even existed yet, and transparently compile to WebAssembly and everything just works.
