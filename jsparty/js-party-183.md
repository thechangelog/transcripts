**Kevin Ball:** Hello, JS Party people, and welcome to another wonderful episode of your favorite party about the web on the web. We are livestreaming right now. I have our one and only Nick Nisi joining me today.

**Nick Nisi:** Hoy-hoy.

**Kevin Ball:** Hey-hey. Mr. Burns - we may be calling him Mr. Burns through this episode because our special guest today is Mr. Nick Fitzgerald, who is a staff engineer at Fastly. Hey, Nick.

**Nick Fitzgerald:** Hey! How's it going?

**Kevin Ball:** Hello, hello. And I, of course, am your MC this week, I'm Kball coming at you... We are super-excited to talk with you, Nick. Thank you for joining us today. The impetus for this was I saw a really cool article talking about making JavaScript run directly on WebAssembly. But before we get into that, can you tell us a little bit about yourself, your background and what kind of stuff you do?

**Nick Fitzgerald:** Yeah. So I used to be at Mozilla, where I started on the Developer Tools team, and I did that for a bunch of time. Then one Christmas break I was thinking -- so let me back up a bit... I was the author and maintainer of the sourcemap library, and it was something that we always had trouble with for larger programs. We'd get really big sourcemaps, 15 megabytes, whatever, and starting up the DevTools would take a long time, because we'd just sit there, parsing these large sourcemaps. And the parser was all written in JavaScript, and we were writing this really contorted JavaScript. We were avoiding exceptions, we were avoiding allocating objects, so we would use the same single object as an out parameter every time we called functions and write to those properties, because allocation was too slow, and then we'd get GC pauses...

\[04:06\] So one Christmas break I kind of got annoyed and fed up with this and I decided to rewrite it in Rust and interpret that to WebAssembly... And I ended up making it a bunch faster; I forget what the exact numbers were. It was quite a while now. But that was kind of like my intro to WebAssembly and how I got involved there.

Then as it turned out, Mozilla was spinning up a team to work on WebAssembly stuff, different people who would work on WebAssembly -- like, the engine directly that's inside SpiderMonkey... So I joined that, and then I stayed at Mozilla for a while, and then ended up moving to Fastly with a bunch of the rest of my team. So that's kind of how I got here.

**Kevin Ball:** I remember when that first came out with the sourcemaps. I somehow hadn't made the connection that it was you... But it was 10 or 11 times faster than the original implementation...

**Nick Fitzgerald:** Yeah. And \[unintelligible 00:05:01.19\] I'm not sure exactly what he goes by - he kind of took this as a challenge and took the original JavaScript and made that a bunch faster, and kind of got it close in the neighborhood of where the WebAssembly was... But what was cool was that all of his techniques for speeding up the JavaScript were algorithmic. So I just took all those algorithmic speed-ups and applied them to the Rust and WebAssembly, and that got another five times faster from what it was, or something like that. That was really fun. It was a good little back and forth blog post series.

**Kevin Ball:** That's awesome. And then the latest thing that I saw and what kind of let to this was now you're working on a project that involves not just replacing JavaScript with WebAssembly, but actually running JavaScript using WebAssembly, I think compiling the entire JavaScript engine down to WebAssembly, or something like that... Can you talk a little bit about this project?

**Nick Fitzgerald:** Yeah, so I don't really like the term "replacing JavaScript." I guess something I left out in my intro is I also was the lead of the Rust project's WebAssembly Working Group, so I was kind of trying to make Rust and WebAssembly play nice with JavaScript. Our whole thing was that you shouldn't replace your JavaScript; they should live together and be friendly. So you can reach for just those kernels of really hot code, and replace them with some Rust and WebAssembly, but then that should fit to your larger program.

Again, this is not about replacing JavaScript, it's about "How can we bring JavaScript to places where you don't really have access to JavaScript normally?" One example is serverless environments that just run WebAssembly. How do you run JavaScript in this environment? Or there's different environments or OS'es that you don't have a JIT compiler; all you have are the options of running an interpreter.

So we have kind of like a whacky setup that surprisingly works pretty well, where - yes, we're taking SpiderMonkey, which is Firefox's JavaScript engine, and we're compiling that to WebAssembly. So we have a JavaScript engine running inside of WebAssembly. Then we run the JavaScript on top of that. And you might be thinking "Wow, that's gotta be way slower than running JavaScript how you would normally run it", and yeah, that's true for throughput, but not for latency. So latency is like "How fast can we start up the engine and respond to something?" and throughput is like "How much work can do to extend it?" or "How long does it take to finish all of the work at a time?"

So we have this tool that I developed called Wizer, which takes snapshots of WebAssembly, and allows you to just basically initialize a program, take a snapshot at that point in time, and then the result of that snapshot is actually itself a WebAssembly module. And when you instantiate that WebAssembly module, everything is already initialized. So you don't need to do any of that startup again.

\[08:11\] So what we can do is we can actually run all the JavaScript initialization, we can start up the JavaScript engine, we can parse the JavaScript, turn it into a AST, turn it into bytecode, evaluate the top-level so that all the event listeners are registered, and everything like that... If the JavaScript needs to build a global look-up table that is kind of in the top level, all that stuff happens, and then we take a snapshot. So that stuff's already done. When we start up again, there's basically nothing that needs to happen. We're just immediately ready to start running JavaScript.

If you compare this to starting up a v8 isolate, I think it takes around 5 milliseconds to actually start the isolet, and you haven't even started processing the actual JavaScript source code at that point yet. So you would still need to then parse the JavaScript, emit bytecode etc. With our snapshot all that stuff is already done. And I think the metaphor that Lin made in her blog post was if you have a contractor, you have to first negotiate with the contractor, hire them... That's kind of like getting the JavaScript engine set up, and getting office space, and stuff. And then there's making the Trello board, or whatever; getting all those items ready. That's kind of like parsing the JavaScript. And then there's the actual work that needs to be done.

So we're kind of like making an office in a box here, where you just open the suitcase and the office is already in. Everything is ready to go, and you don't have to do any of that initial setup time.

**Kevin Ball:** That's super-interesting. Can we actually step back for a second? Because I think you're way deep in the weeds on this in a way that I think not everybody has the context... So you mentioned a couple of things there that I'd love to dig into. First, can you just sort of explain what is a v8 isolate? Because that was the comparison you were drawing.

**Nick Fitzgerald:** Yeah. So a v8 isolate is basically like a little world of JavaScript in v8. I'm actually much less familiar with the v8 than I am with SpiderMonkey, because I worked at Mozilla and I hacked on SpiderMonkey a bit... But basically, the idea is that any of the JavaScript within an isolate is kind of isolated from any JavaScript that you have in any other isolate.

If you were developing a serverless platform and using v8 for that, you wouldn't want two customers' code to run in the same isolate, because you really don't want them to be able to poke at each other's stuff. That's a huge security vulnerability. So an isolate is kind of like the unit of -- it's kind of like a process in an OS, or a different window in a browser, a different tab.

**Kevin Ball:** Got it. So it's like a self-contained JavaScript execution environment.

**Nick Fitzgerald:** Exactly, yeah.

**Kevin Ball:** Cool. So then you were talking a little bit about the different phases involved with running code in an isolate, right? There's like instantiation, parsing, all these different things. So can you maybe break down a little bit what was the motivation for this? Because I think we jumped right into also what does it do, but maybe we could talk a little bit about the why's behind that.

**Nick Fitzgerald:** Yeah. So the idea was just basically "How can we bring JavaScript to environments where it otherwise wouldn't be?" For us at Fastly, the big motivating thing is our Compute@Edge platform, where we just support WebAssembly and we would also like to have some JavaScript there. But similar, there's environments where you don't have access to JITs, and so maybe you would prefer to have this approach to get really fast startups.

**Nick Nisi:** That was something that was new to me. This is not really my realm by any means, but the idea of a serverless environment for WASM - what are the practical uses of that?

**Nick Fitzgerald:** \[12:04\] Yeah, so we just talked about isolates, right? A WASM instance is kind of similarly sandboxed. There's a few different kinds of state that a WASM instance has, but the one that everyone knows about is the linear memory. You just have basically this big array of bytes, and that's your sandbox to play in as a WASM instance. So it gives you similar guarantees, but it's a lot simpler, because that's it, there's just this array. We're not talking about objects in a GC heap, or anything like that. So because it's so much simpler, we can start it up a lot faster; creating a new one takes, depending on the module, a handful of microseconds, rather than milliseconds, so a whole order of magnitude faster... And WebAssembly has this nice property where it can only do stuff that it imports. So by default, WebAssembly can't really do anything; at most, it can kind of spin the CPU and cause some heat, and maybe you have to interrupt it and say "Stop doing that." But if it wants to talk to the network, or write to disk, or anything like that, you need to kind of give it functions that allow it to do that.

So it's kind of like a capability-based security, if you're familiar with that, which is basically like - you don't have the capability to write to the network or communicate on the network unless I give that to you. So you get these really nice security and sandbox properties... And so that's kind of why we're interested in that and serverless, because we can create more instances faster than alternative approaches, and we can pack more of them together in one machine.

**Nick Nisi:** Gotcha. That's cool. That's a good reason for that that I hadn't considered. So without getting on too big of a tangent, if JavaScript isn't typically available there, what is the primary language that is typically targeted with a WASM serverless environment?

**Nick Fitzgerald:** Yeah, so Rust is a big one... And also some people use C and C++. There's AssemblyScript, which is probably a more familiar feeling to people who are familiar with JavaScript. The idea is that it's kind of JavaScript syntax that maps pretty much directly to WebAssembly.

**Nick Nisi:** Gotcha.

**Nick Fitzgerald:** So it'll look familiar, but it might feel a little bit different based on the restrictions of targeting WebAssembly.

**Break**: \[14:37\]

**Kevin Ball:** Awesome. Nick, you were sharing some about the motivations, and some of the pieces there around running in places where you wouldn't otherwise be able to run this... But you've also alluded a lot to performance benefits and trade-offs, and I'd love to dig in a little bit more then on what you accomplished... Because you started this based on "Okay, we wanna be able to run this in our WASM environments", but the blog post that Lin put together, it also highlighted some really intriguing performance improvements, and you sort of alluded to that in your startup times. But yeah, can you walk us through what did you find out? How does this thing run relative to those isolates or relative to a native JavaScript environment?

**Nick Fitzgerald:** Yeah. So starting up the JavaScript engine and creating an isolate or kind of SpiderMonkey's equivalent takes around five milliseconds... And then actually, once the JavaScript engine is created, you have to give it a source code for your application, and then that involves parsing and all this stuff... And so it can take quite a while, maybe up to 15 milliseconds, before your application is ready to respond.

People have shown all over the place that the faster you can have your pages load, the more customers will click Checkout, and generally the happier they are, or whatever. So kind of having the speed of light, the fastest that you could potentially go be on the order of like 15 milliseconds, or if even if we got down to like 6 milliseconds - that's not great. People fight hard to get better times than that, because it's worth it. So that was kind of a no-go for us. So what we wanted to figure out was how could we have basically instantaneous startup. That's kind of where my whole snapshotting work comes in.

**Kevin Ball:** And does it achieve that then? It's essentially unmeasurably fast?

**Nick Fitzgerald:** I mean, yeah, we're talking microseconds... I think for the JavaScript engine it's around 300 microseconds, for a Rust program you're looking at maybe 30-40 microseconds... It's pretty dang near instantaneous.

**Kevin Ball:** That's wicked fast.

**Nick Fitzgerald:** Yeah.

**Kevin Ball:** Okay. And you mentioned that there are some trade-offs in terms of throughput if you end up then executing a fair amount. Have you kind of measured those curves over time? How long running of a function does this need to be before it starts to swap over to being less efficient?

**Nick Fitzgerald:** Yeah. So there's some subtlety there, which is like - if you look at, say, my program takes one second end-to-end. It's like, "Well, how much of that one second is actually bottlenecked in JavaScript execution?" Are you doing I/O, reading from disk, or communicating with the network, or whatever? And not every program, but many programs are basically just kind of gluing together I/O. So in these cases, even if you had the most advanced JIT, a v8 or SpiderMonkey or JSC, you still wouldn't ever actually get to those top-tier JIT levels. Maybe you would break out of the interpreter into kind of a baseline compiler, but you probably wouldn't break out of the baseline compiler into the top-level compiler.

So JavaScript throughput for many programs, not all programs - it doesn't really matter. So that's kind of like the area that we're trying to do well in right now... Because the truth is if you have something that is bottlenecked on JavaScript execution, this is gonna not work super-well... Because we are using just an interpreter; there's no JIT compilation happening here... And it's running in WebAssembly rather than native, so there is a little bit of overhead that's kind of stuck on there... But if you're gluing together I/O, then you'll have a great time.

\[20:01\] And the other option here is there's a proposal for WebAssembly called module linking that we're kind of driving forward and we're in process of implementing... So what module linking does is it allows you to kind of create similar to like a WebPack bundle, where you are bringing together a bunch of different JavaScript modules; it's kind of similar, but for WebAssembly.

So it's the same kind of vision that we were pushing on the web for the Rust and WebAssembly Working Group, where we were saying, you know, take your core compute that's actually bottlenecked on the CPU and write that in Rust, because it's just easier to write that kind of code in Rust than it is in JavaScript. And then just make it fit into the rest of your JavaScript.

With module linking, what we can do is we can say hey, take that core compute that's actually bottlenecked on CPU, compile it to WebAssembly with Rust, and then link that in to your JavaScript program that's running on stuff that we've been talking about, and you can actually import that as a JavaScript module. Then any of the stuff that actually needs to be fast, you can kind of just push onto the other side of that boundary.

**Kevin Ball:** That makes a lot of sense. Interesting. So this type of moving dynamic run-in-time environments, and just-in-time or interpreted languages, into running within a compiled context, linking in compiled modules \[unintelligible 00:21:16.06\] - I feel like we've done that a lot on server-side, but WebAssembly lets us do it anywhere we might want. Do you see a similar approach being applied to other languages beside JavaScript?

**Nick Fitzgerald:** Yeah. So what's cool about this approach of getting fast startup with snapshots is that it's not specific to JavaScript at all. If you happen to love Ruby more than JavaScript, you could do the same thing with Ruby and its interpreter, or Python, or Lua. As long as it can target WebAssembly, it's kind of just -- it's a feature of how simple WebAssembly is, that we can take these snapshots and make them start up really fast. Basically, anything that can go to WebAssembly, we can do this same technique on.

**Kevin Ball:** That's super-cool. Does Fastly support that today?

**Nick Fitzgerald:** It's an open source tool. This isn't something that we're kind of hoarding the magic and doling it out as we please... You can download the tool, it's on GitHub.com/bytecodealliance/wizer. It's the WASM Initializer, Wizer. And then someone suggested that we call these modules, after the snapshots, as "wizened" modules, because now they already know everything that they need to start up.

**Kevin Ball:** How did you spell that?

**Nick Fitzgerald:** Wizer.

**Kevin Ball:** Okay. We will include a link in our show notes for all who are interested in that.

**Nick Fitzgerald:** Yeah. And if people are really interested in the snapshot side of things, I gave a talk at this year's WebAssembly Summit specifically about Wizer and how it works... So I can share a link for that after the show.

**Kevin Ball:** Yeah, that would be super-cool. So where do you see this going? I think we're right now at the cusp with tools like this, and we had an episode a few weeks back when we were talking with the team behind Web Containers, they're basically running...

**Nick Nisi:** StackBlitz?

**Kevin Ball:** StackBlitz, yes, and web containers... Where they were talking about running Node.js and other server-side environments in the browser, and things like that. So we're kind of reaching this place where WebAssembly is letting us open all these new possibilities. What do you see as the next frontier here?

**Nick Fitzgerald:** Yeah. So specifically for this JavaScript on WASM work, we are looking to take kind of the classic optimizations that JavaScript engines have used for improving throughput, and applying them in kind of an ahead-of-time context, rather than a just-in-time context. So what JavaScript engines do is they'll look at, you know, "This function is only ever called with two integers as arguments", and so I can optimize based on that... And you know, this plus operation - it always gets these two integers, so I can turn that into an addition, rather than a string concatenation, or having to check whether I'm doing addition or string concatenation every time.

\[24:18\] And kind of the way that that happens are something called in-line caches, which kind of are like "Is it this type? Then do this. Is it that type? Then do this." And each of those "do-this'es" is a little stub in my cache stub.

Traditionally, the way that in-line caches have been done in kind of a JIT environment is - say we're reading a field of an object. Every object has a shape or a hidden class, which is basically saying "What are the other of properties that I have, and what is my prototype chain?", that kind of thing. Normally, if you don't have any idea what the shape is, you have to kind of look up in a hash table to see "Okay, where does this field exist?" and then "Let me get that value." That's kind of an expensive operation for something that happens so often. But if you have an in-line cache, you can say "Is this object this shape that I've seen before?" This function happens to always be called with objects that have the same shape. And then you can just say "If it is, then I know already, I've kind of baked in that the field that I wanna read is that offset 8", or something like that. And that's just way faster. It's like a check, and then an offset read.

So normally, the in-line cache would kind of bake in the pointer to that shape, and it would also bake in that offset... And those would kind of be generated in the machine code just-in-time. But what we can do is actually we can make the pointer into offset parameters, and make this in-line cache a little function that takes these things. So now this doesn't actually depend on anything at runtime, because where the shape is in memory - that's something that's at runtime. But we've kind of pulled all this stuff that happens at runtime out and we have something that we can use ahead of time.

So if you're baking in pointers and stuff, there's kind of an infinite number of in-line caches that you could generate, but there's only so many types of in-line caches, where if you pull all these dynamic things that rely on what's happening at runtime out and you make them parameters, then you're left with just n different kinds of in-line caches... And we can actually compile all of those ahead-of-time and then kind of like wire them up during execution, but without any kind of just-in-time compilation.

This should get us our throughput around where JavaScript was at kind of the start of the browser wars when Chrome was first coming out, and it was so much faster than Firefox, or whatever... So that's a good first step. And then the way that JavaScript engines get even faster from there is they start doing more aggressive optimizations than optimizing just the add. They kind of say, "Okay, assume that this whole function we only see integers. Don't optimize each individual operation; optimize the whole function based on this, and do lots of in-lining", and stuff like that. And we can't do any of that at runtime, because all of this depends on watching what's going on at runtime and then compiling at runtime. But if you have profile data - if you run the program over some benchmarks and then you kind of record what happened, what types flowed where, and which functions were called a bunch of times or not, you can basically gather than same data and then compile the JavaScript ahead of time.

So that's kind of like the next step on the horizon after that, is basically do what JITs do, but ahead of time via some profiling maybe. That should get us, in principle -- it's kind of tricky, because you have to have a good benchmark set, which is kind of the big hurdle here... But in principle, this should get our throughput basically to where JavaScript engines are in the browser today.

**Kevin Ball:** \[28:00\] This is really interesting. So we're essentially talking about moving JavaScript to being more and more of a compiled language in a lot of ways, rather than an interpreted language, and with a JIT compiler...

**Nick Fitzgerald:** Yeah.

**Kevin Ball:** And as you talked about profiling, it made me wonder - you're already doing precompilation, you're already putting these things in an environment where they're gonna run against the most realistic data there is, actual production data... How expensive would it be to put profiling gathering there and over time recompile these same workers that you're deploying based on profiling data of their live application?

**Nick Fitzgerald:** Yeah. That's kind of like the long, long, long-term. We have a lot of stuff to build out before we can start thinking about that stuff... But yeah, you can do stuff like -- you don't need to profile every single execution; you can sample... So it's exciting, but we have a lot of work to do before we can start doing that kind of thing.

**Kevin Ball:** Yeah, that is super-cool.

**Nick Fitzgerald:** Yeah. We were also talking about where are things going... That's one dimension for where JavaScript on WASM is going. And then there's kind of this other dimension of where WASM is going. WASM is similar to JavaScript, it has many people who are invested who are kind of doing different things... So it's not like one direction that it's going; there's a bunch of direction that different people are taking it. But one of the directions that I'm really excited about and I kind of alluded to is that module linking stuff.

So it's one thing to be able to stuff WebAssembly modules together, but we talked about how simple WebAssembly modules are, and that means that there's not really a good way to communicate advanced structures. MVP/base WebAssembly has 32-bit floats, 64-bit floats, 32-bit integers, 64-bit integers. So that's not a lot of ways to communicate with each other.

**Kevin Ball:** And that's it.

**Nick Fitzgerald:** That's it, right? So what compilers do is within the memory they'll lay out where structures are, the same way they would lay it out in native memory. But if I'm a Rust program and I wanna talk to a C program, C doesn't really understand Rust data structures. Rust can kind of talk at the C level, but it's a little bit painful... And now we're talking about interacting with JavaScript, but \[unintelligible 00:30:22.15\] but JavaScript running inside SpiderMonkey, a JavaScript engine that's on WASM... So the structures are just totally foreign, and communicating is really difficult. But this is where another WebAssembly proposal comes in called Interface Types. Interface types are basically a type grammar, sort of similar to Web IDL, where Web IDL defines "Here's records, here's different string types etc." Interface types defines a similar type grammar, and then the idea is you'll be able to communicate like this.

Interface Types isn't quite an IDL, in that the plan is eventually you'll be able to kind of have dynamic adapter functions that allow you -- say you're receiving a string over this Interfaces Types boundary that lets modules communicate... And Rust's strings are represented as UTF-8; so it'll wanna just lower that into a flat UTF-8 array. But JavaScript strings are much more complicated. In SpiderMonkey I think there are -- I forget if it's 7, 9 or 13, but it was one of those odd numbers like that. Different representations of a string. Maybe the coolest one is called a rope. A rope is basically a tree of little strings. The idea is if you concatenate two strings and your string representation is just a buffer, you kind of have to potentially grow a new buffer that's the size of both of them, and then you have to copy the strings in, and it's really expensive. That's \[unintelligible 00:31:57.27\] operation.

\[32:01\] But if you have a rope, what you can do is you can just say -- you know, it's kind of a tree, so you have a node that's just "I am the concatenation of this one string and this other string, and creating that is order one." So it's very cool, but it's very complicated. But interface types kind of will eventually allow you to define your own ways to kind of lower the platonic ideal of a string down into a rope, or something like that. Kind of like arbitrary computation for translating these types on either side.

So that's kind of like the furthest vision. But right now we are defining just what's called a canonical ABI, which fixes the representation; you have to use a string buffer, or something like that. There's one representation for each type.

So with just a canonical ABI it is kind of just like an IDL, but this it's open to that next step once we ship the first phase... So this is gonna allow all of these modules to talk to each other. And each of these modules - what's really key about interface types is that they're kind of \[unintelligible 00:33:04.14\] So if you think about Npm modules, when you use an Npm module, it gets all the same permissions and capabilities that your application has. And this is a problem; we've seen these supply chain attacks, where some generic markdown library or something - I don't think it's actually happened with a markdown library, but... You know, I just do something very innocent, and then actually I'm reading your SSH keys from disk, and I'm sending them off to some server, or I'm mining Bitcoins, or whatever... And so it's not great. We talked a bit earlier in the podcast about capabilities and how a Web Assembly module can't do anything unless you explicitly give it something to do. So Interface Types kind of preserves that ability between different WebAssembly modules. It says "Just because I can read to the disk and I'm talking with you and I'm using your markdown library doesn't mean you can talk to the disk. All you can do is take this markdown \[unintelligible 00:34:06.00\]

**Kevin Ball:** \[unintelligible 00:34:06.28\]

**Nick Fitzgerald:** Yeah, exactly. So it kind of limits the blast radius of where things can go wrong when you have a supply chain attack like that. They can't escape their sandbox even if they're talking to you... Because the only way you can communicate is with this type grammar, and you don't automatically get any access to resources unless I explicitly give them to you.

So yeah, this is the other horizon for WebAssembly in general, and we want the JavaScript to be able to participate in this ecosystem. Having this ecosystem of modules that share nothing, that don't implicitly give security capabilities and they're all kind of sandboxed from each other even while they're working together - that's kind of the direction we're going.

**Break**: \[34:47\]

**Nick Nisi:** Alright, let me jump in with a quick and potentially dumb question - or series of questions, I suppose... But it's really cool, and I know that this is an oversimplification, but it's kind of interesting to see - you know, out of JavaScript was born this WebAssembly; not really, but in a way... And now we're figuring out how to get JavaScript back into WebAssembly; I just naively think that's hilarious... But is there an interoperability path between the two? If I'm writing JavaScript for WASM, do I have to think about writing that differently than writing JavaScript for a browser environment or Node?

**Nick Fitzgerald:** Yeah, definitely. That's actually a really great question. So it's SpiderMonkey, and it's not Node. It's not a web browser; it's just SpiderMonkey. So it's a much more paired down JavaScript environment than you would have on the web or on Node.

**Nick Nisi:** So I can't have Node modules obviously, or anything like that, and I don't have any of the browser environments, like Fetch or things like that, that are more supplied by the environment. It would just be the core language itself.

**Nick Fitzgerald:** Right. So there's no DOM nodes, for example. And there's no requirefs that you would have on Node. But the replacement for that is the ecosystem that I was just talking about, of these kind of shared-nothing modules that communicate with Interface Types. We hope to build a whole ecosystem that is doing this stuff, so if you want file access, you'd be able to import something that would give that to you, potentially limiting what you can access only to a certain directory. So you can access this scratch directory, but you can't access my .ssh in my home directory.

**Kevin Ball:** When we talk about that communication, does interface types define an ownership model of some sort? Or are we copying memory as we go between these? If not, how do you deal with borders between garbage-collected languages and not garbage-collected languages, and things like that?

**Nick Fitzgerald:** Yeah. So there is a copy implied between each side, and that's basically there to make sure that you're not sharing the memory, because that's kind of the vector into heap corruption and getting rid of the sandbox properties that we care so much about. But what's nice is with the eventual full interface types that kind of allow programmatic lifting into an interface type and then lowering into a concrete type on the other side, that will be only one copy, and it will be kind of like directly into and from the representations that each module \[unintelligible 00:38:45.29\] It's basically as good as you can get, implying that you do have to have one copy.

**Kevin Ball:** Got it. So thinking then about the implications for application architecture, as we talk about these things, we're gonna want to have modules that essentially are self-contained relative to data, where a module is gonna own a set of data and you wanna keep the communication between them relatively minimal in terms of data size, ideally.

**Nick Fitzgerald:** Yeah, ideally. I think it depends on the component. Copying a string is pretty fast. Memcopy is quite fast. But it also depends how nested is the loop in which you're calling it. So I don't know, there are architectural things that you can do. You can kind of like make one module own the data, and then hand out identifiers saying "This is essentially a pointer to this data, and whenever you wanna ask something about that data, give that back to me." You could almost imagine it as like an object, and that's like the little self, and then you call each method to get little bits of data, but you don't ever get the whole thing.

\[39:57\] This is actually what I did with the sourcemap library, which is like - yeah, okay, we have to parse the whole sourcemap, which - it's a debug info format; I guess we didn't talk about that. It's a debug informant that maps essentially minified JavaScript to unminified JavaScript back and forth. Or, say, JavaScript to the original CoffeeScript, or ClojureScript, or whatever they compile down to.

So we have to kind of parse that and get the full mappings, so we know this line corresponds to that line, and this file corresponds to that file. But whenever the debugger, for example, stops in a location, it doesn't need the full mappings. It doesn't need everything. It just needs to know "Right now I'm paused at this location. What's the real source location for where I'm currently paused at?" And that's a tiny amount of data compared to the huge map. So you just kind of expose an API that allows you to keep the full dataset in the original component, and then just make little queries where you get the little bits of data out on the other side.

**Kevin Ball:** Yeah, that's really interesting. How much overhead is there in terms of calling between modules? Is this like roughly equivalent to a function call even within a module, or is it a higher cost?

**Nick Fitzgerald:** It's a little bit higher cost than function calls within a module, but not too much. Basically, maybe we're getting a little bit too bogged down into details, but there's a register for the VM context that kind of keeps track of what is my current WASM instance and what are the bounds of its memories, and things like that... And that stays in a register. When you call across instances to a new module, you have to kind of swap out that register with the new instances register. So if you're doing a micro-benchmark, you'll see it show up, but if you're doing any sort of actual work anywhere else, it's gonna be lost in the noise.

**Kevin Ball:** Yeah. And that means that it's extremely viable to treat these things as essentially objects, in a lot of ways. You can say "This module owns this data", and you can call methods that are essentially accessors on it when you need the data...

**Nick Fitzgerald:** Yeah, exactly.

**Kevin Ball:** ...and really minimize the amount of copying you do. That's super-cool. So as we move towards this world, what do you think the implications are for how we develop applications, and are there particular domains of applications that are likely to benefit or be driven to adopting this sooner?

**Nick Fitzgerald:** Yeah, so with any kind of new ecosystem, the more different it is, the harder it is to port existing applications to it. So this is pretty different... JavaScript environments today don't have capability-based security and kind of allow ambient access to the network, or to disk, or what have you... Unix generally allows the same. There are ways to lock it down, but by default it kind of allows ambient authority.

Most popular platforms aren't like this. So porting existing applications - depending on how large the application is and how many things it's using and stuff, it could be hard... Similar to porting a desktop application to the web can be pretty hard, especially the larger it is. But that tells me that we'll see more new applications being developed, kind of greenfield applications. And then where are we deploying this stuff first? Well, us Fastly are doing it kind of in serverless environments, where in general you already have smaller micro-applications. I think that's relatively easy to bring over to this new paradigm.

\[43:45\] Another domain where we've seen a lot of excitement for Web Assembly, and I think will work well for this kind of ecosystem, is games that want to have plugins or mods, where - say you wanna change X, Y or Z about the game, give us a Web Assembly module and that's kind of what you'll write it in; then it's sandboxed from the rest of the code and you can't break out. You can only use the game API's that we give you. Basically, any kind of plugin architecture, maybe for a digital audio workstation, something like -- I don't know, what are popular digital audio workstations? I guess Ableton, and Reaper, and these sort of things. They're taking these audio signals, midi or whatever, and then that goes into one plugin that provides a filter, and then there's another one that's a compressor, or another one that adds a chorus effect... And each of these could be their own little WebAssembly module communicating with interface types to kind of apply their transformation on that signal along the way, and you know that it's not gonna break out of the sandbox again and it's not gonna mess with your desktop, or whatever. It's just gonna work on the audio, like it said it would. So that's another area where this will be a really good fit.

**Kevin Ball:** Awesome. Nick Nisi, did you have any more things you wanted to dig into?

**Nick Nisi:** I think you covered the other question that I had... Maybe you already answered this, but did -- so this makes sense to me from having like a serverless WASM environment like this. Does it also make sense to run JavaScript in a browser through WASM?

**Nick Fitzgerald:** Yeah. If I were to imagine use cases where that made sense, it would be very contorted. I think you have really top-quality JavaScript implementations in the browser, and you don't need to do these tricks in order to bring JavaScript to your environment, because you already have it. And if you have CPU-bound JavaScript, it will get JIT-compiled and it'll have state-of-the-art implementations making your code fast as far as throughput goes. Yeah, it just -- if you're on the web, use your web browser's JavaScript implementation.

**Nick Nisi:** Cool. And then another question is can you think of any triggers or things that developers should be on the lookout for for using this as a potential solution to a problem that they have? Is there something that would identify this as a solution?

**Nick Fitzgerald:** Yeah. I would say whenever you're looking to have your users be able to run custom code, and you don't trust them, but you still wanna have them be able to plug into your architecture and customize things, that's basically what this is designed for.

**Nick Nisi:** Nice. Okay...

**Nick Fitzgerald:** So we develop wasmtime (WASM engine), which we kind of focus a lot of work on making it easy to embed into other applications... But there's a bunch of different choices out there. If you find one that works better than wasmtime... Yeah.

**Nick Nisi:** Nice.

**Kevin Ball:** I feel like the web's security model was by necessity pushed to a place where things had to be sandboxed, they had to be secure, because suddenly you've got all of this untrusted code that's gonna be running, and now WebAssembly is basically allowing us to say "Hey, that's a good idea for any type of code we might wanna run. Let's pull that in."

**Nick Fitzgerald:** Yeah. And we can -- rather than have one sandbox for the whole tab, or something, we can have sandboxes for each different component, which is really nice. In general, trust things less. If you don't have to trust it, then don't. Even if you do trust it, don't trust it.

**Kevin Ball:** I feel like that's a good show title. "Trust things less." Awesome.

**Nick Fitzgerald:** I'm not paranoid, I swear. \[laughter\]

**Kevin Ball:** I feel like if you're running code that you didn't write, paranoia is a very healthy attitude.

**Nick Fitzgerald:** Yeah.

**Kevin Ball:** Awesome. Well, I think that is -- we've covered a lot of ground. I'm still sitting here in shock, observing all of it...

**Nick Nisi:** Me too... \[laughs\]

**Kevin Ball:** Nick, do you have any other things you wanna leave us with or let us know about before we wrap up?

**Nick Fitzgerald:** Well, I really liked your intro music, and I was wondering if one of you produced that, or who did the music.

**Kevin Ball:** Yes, all of the JS Party and generally all of the Changelog family of podcasts - their music is produced by Breakmaster Cylinder.

**Nick Fitzgerald:** Cool.

**Kevin Ball:** He (I think) or they have some great stuff.

**Nick Fitzgerald:** Yeah, I have to look them up.

**Kevin Ball:** You'll get another taste, because we're gonna close with an outro, I'm sure...

**Nick Fitzgerald:** Oh, perfect.

**Kevin Ball:** Awesome. Well, if there's nothing else, then thank you so much for joining us today, Nick. I think this is a really interesting topic, and I'm super-excited to see where it continues to go.

**Nick Fitzgerald:** Thanks so much for having me. This was a blast.

**Nick Nisi:** Thank you.

**Kevin Ball:** Alright. And if you're listening to this not live, if you're listening to this on your podcast and you wanna join in, you wanna be a part of the party live when we do it, we do record live and publish to YouTube at the same time we do it; every week, Thursdays, 10 o'clock Pacific, 12 Central, 1 Eastern. Check out changelog.com/live. You can join with us and slack in real time, and you are what makes this a party. So for all you listeners, we'll catch you next time. This is Kball, signing out!
