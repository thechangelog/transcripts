**Divya:** Hello to a new episode of JS Party! We have a really meaty, interesting, exciting one today. Before we kick things off, I'd like to introduce the people on this particular episode. Joining me on the panel we have Nick Nisi... What's up?

**Nick Nisi:** Hoy, hoy.

**Divya:** And for our guest, because we're talking about Deno, we have Kit, who's part of the Deno core team. Welcome!

**Kitson Kelly:** Hello!

**Divya:** And I'll leave it to you to introduce yourself, just to talk a little bit about what you're doing, where you're working currently...

**Kitson Kelly:** So by day I'm a principal technologist at ThoughtWorks, so most of my time is spent advising customers on tech strategy and crazy stuff like that... But as Nick probably knows, I've always had this secret life in most of my career, and the past probably close to two years now it's been working on Deno in one capacity or another... And a few other things in my past for my sins as well, too. I used to be the project lead for Dojo 2, but that's in my past.

**Divya:** Nice! So is the consensus that it's Deno \[Deeno\] not Deno \[Deno\] then? \[laughs\]

**Kitson Kelly:** Yeah, officially it's Deno \[Deeno\].

**Divya:** Okay.

**Kitson Kelly:** And even though it was unofficially Deno \[Deno\] up until TS Conf in Seattle last year. So I called it Deno \[Deeno\] Ryan was calling it Deno \[Deno\] because he probably hadn't thought much about it... And then when we met there, he's like "Hm, I've been thinking... I probably should call it Deno \[Deeno\]." \[laughter\]

**Divya:** That's awesome. So with that, I guess we'll just dive into what exactly Deno is. Could you give us a really wide overview of what exactly Deno is and what it does?

**Kitson Kelly:** \[04:08\] Yeah. Deno is a runtime for JavaScript and TypeScript and Web Assembly. The main intent of it was -- taking a step back, Ryan had created Node.js back in 2012, and obviously the whole JavaScript server-side world had transformed a lot due to Node, but JavaScript as a language had transformed, and TypeScript had started to come in, and WebAssembly started to become a big thing... So yeah, I think Ryan's motivation originally was that there is just kind of a need to take a step back and take a look at things again and see if there were some improvements and changes that could be made.

When I started to get involved, that was the attractive thing to me - let's no be encumbered, let's try to take a look at what we can do with JavaScript and TypeScript. Make TypeScript a first-class language from a runtime perspective, and also support modern syntax, modern language, and not be encumbered with 8+ years of legacy. That was the motivation.

The other real important thing was that one of the big regrets that Ryan had with Node.js is that out of the box you have access to everything with Node.js. There's no security model built in. And I think we've all realized that security shouldn't be an afterthought, and a security-first model... But a runtime should have very limited access into the host system that it's on, much like browsers are. There's a good reason why browsers don't allow access to the local system, only on a very limited basis... And wanted to explore that model from a runtime perspective as well too, and just make sure that if you try to run something, it won't completely ruin your machine.

And probably the other big thing was to invert the model of what a browser does with what a runtime could do. I've often started referring to Deno as a browser for modules... And we've had that model out there, where we've had web servers, they've hosted our web pages, and that model works really well... And Deno sort of embraces that model and says "Well, if there's a module out there on a web page, I can load that and run that. Why put any other barriers between the runtime and the code?" You just type in a URL, and if the media type for it is correct, Deno will just run that module... Which is a whole different model from \[unintelligible 00:06:56.25\] model that we have with, for example, Node.js.

**Divya:** Yeah, definitely. I think that's a very unique attribute of Deno, as compared to Node. Before we dive into the package management piece, I'd like to take a step back slightly and just look at one of the things that I noticed specifically with regards to Node versus Deno. Obviously, there are implementation details that are different, like the permission and security model, but one of the other things that I notice is the particular language that's used, the implementation internals... So with Node it's pretty much C, and with Deno it's Rust. I'm curious, what was the decision-making process like when you chose to use Rust?

**Kitson Kelly:** \[07:39\] Yeah, and Ryan led most of that... Originally, Deno -- the bindings to the operating system were written in Go, mostly because Ryan really liked Go, and it's a pretty good language, and it really lent itself... I think he hated C and C++ (I don't blame him), so there was a bit where -- you know, I spent all that time in Node.js, working with C++, and it had all these challenges and limitations... And we did it because V8 was written in that, and so it was an easier thing, but I don't wanna do that again; I want some language that's gonna make things better...

So originally it was Go, but early on, in probably the first couple months it was like "Well, the risk with it is that -- Go is garbage collected, and then we've got JavaScript garbage-collected, and we're probably gonna get ourselves into a situation where we're gonna have race conditions with garbage collection, and then the runtime will become non-performant, and we're gonna have to have really fine-grained controls over when garbage collection happens..." It was just like "This is gonna cause us a whole problem, so we need a language behind it that's not garbage-collected." We liked Rust, it was an interesting language, and it was like "Well, how difficult would it be to move to Rust?" and now we just haven't looked back.

I've had to learn Rust. It's probably the first non-garbage-collected, non-runtime-interpreted language that I've dealt with in probably close to 20 years now. And trying to remember all those things, but Rust has been really quite good. I think it saved us from doing a lot of stupid things behind the scenes, because you have to be explicit about memory management... And I know my early experiments with trying to contribute with Rust, where the compiler just kept telling me "No, you're doing it wrong. No, you're doing it wrong." But usually, the compiler also tells you "Oh, and actually this is what you need to do to fix the problem."

**Nick Nisi:** Nice.

**Kitson Kelly:** So I've really grown to have a lot of respect for Rust, but that learning curve is really steep... So I think the great thing is you've got that sort of security back there, and now that we have plugins, you can write in Rust, you can author additional code in Rust when it gets really heated, and that sort of thing... But you can spend most of your time working in something that's a little bit more easier to develop with in JavaScript or TypeScript, and I think that's one of the big advantages there as well.

**Nick Nisi:** That was gonna be one of the questions I asked - if I wanted to get in and contribute, how much Rust do I have to learn to do so? And I was looking at the GitHub repo and it looks like 62% of the code is TypeScript, and then only 33% is Rust... So it still seems like there's a lot of room to get in there if you just wanna code TypeScript.

**Kitson Kelly:** Yeah, and I think it's evolving... I think one of the things we're continuing to find - JavaScript is always gonna have its limitations; TypeScript's always gonna have its limitations.

**Nick Nisi:** Right.

**Kitson Kelly:** So we're finding - and this is one of the big focuses, is how much can we start to pull out and move into Rust? The long-term vision is "How do we actually make that easier for end-users as well, too?" That's always the vision. You know, maybe do a really dirty prototype in JavaScript, harden it a bit in TypeScript, incrementally evolve towards that, and then when you've got hot paths where you're doing huge amounts of computation and that sort of thing, try to be able to make that easy to seamlessly move over to Rust. We're not quite there yet, but that's kind of the medium-term, long-term vision with it - make it super-easy to just move stuff over there.

From there internals perspective, there's just some things that are always gonna be easier to do in JavaScript, and V8 is a phenomenally great engine at optimizing really stupid code... \[laughs\] Sometimes it obfuscates a lot of our bad performance traces, but there's -- yeah, I think we're beginning to move bits and pieces of the TypeScript compiler actually out to Rust, and we're trying to use the TypeScript compiler less and less over time... Which is another interesting topic.

**Nick Nisi:** \[12:18\] Interesting. So does that lock you into a specific feature set of TypeScript, or like a subset of it? How does that work? How does upgrading TypeScript work when you're rewriting parts of it?

**Kitson Kelly:** Yeah, so the big thing we're moving out at the moment is the dependency analysis. Module resolution in Deno, because we support remote modules, because we are explicit about the extension name on all the modules, we've had to hack the TypeScript compiler a bit. For a long time, the module resolution had always been custom code, and the TypeScript compiler is configured that way, to be able to swap that out... But the problem is that the TypeScript compiler works completely synchronously. The reasons for that are back in the annals of the fact that we didn't really have good asynchronous programming models in JavaScript for a long time, and some of the APIs that were required needed to be synchronous... So that loaded through the whole thing. That means that when TypeScript goes to try to get a file to pull it into the compilation, it's a synchronous process; that's really bad if you're remotely fetching modules. \[laughs\]

So what we had to do is refactor it so that we used an uncommon TypeScript API called Preprocess File. It's only in the compiler... It really was intended for in-browser usage, or like in VS Code, in language services, where you wanna quickly run over the file, figure out what files you need to go fetch.

**Nick Nisi:** Yeah, I think I've used that before.

**Kitson Kelly:** Yeah. So we currently are using that at the moment to go figure out the analysis of what files that we need, and then we send that whole bit to Rust, and then Rust will go and fetch any modules, cache those modules that are needed and hand that back. So before we invoke the TypeScript compiler, we asynchronously resolve all of our dependencies, and then we just create all of the source files and hand that over there.

Now, the problem is there's some long-standing issues with that, because it's not a popular API, so it's broken in a couple ways that causes grief and havoc. For example, string literals that look like the are importing the module get caught by this preprocessor... As well as - there's another weird, strange... Well, it's not really a big; the preprocessor does a really quick pass on things, but the TypeScript compiler does obviously a full AST parse, and it gets down into the depths. So with dynamic import, for example, it will find some static strings... Like if you set a string to a variable, and then you press that variable into the dynamic import, and say "import this module variable", the compiler will detect that and say "Oh, I can pull in the types for that and do the analysis of that." So it'll identify a dependency where the preprocess imports doesn't see that node, so you end up getting cache miss hit. We've got a defect with Deno at the moment where we don't find all of the dependencies.

Anyways, the whole thing is that's a lot of work, so we're in the process of moving that out to Rust... So we're gonna do all of that dependency analysis, and then what we're gonna do is just say "Here are all the files the TypeScript compiler is gonna ask for." Now, Ryan and Bartek and I have looked at how to even begin to start saying "Well, what if we did the AST processing?" Because that's computationally heavy, it's really inefficient in JavaScript... What if we were able to do all of that and then hand that to the TypeScript compiler?

\[16:14\] The actual language enforcement and the type enforcement - we would probably never want to not use the TypeScript compiler for that, but we wanna chip away at everything else around it that is computationally heavy, that is just wasted. \[unintelligible 00:16:30.12\] if we're gonna do any transforms, and we only do really -- because we support very modern ECMAScript; you know, whatever V8 supports. And V8 supports things in advance that it takes a long time to work into browsers. We had top-level await before anybody else did, simply because it was in V8, and we could get it in there.

So we don't do a lot of transforms with the TypeScript compiler, but obviously things like experimental decorators will always be transformed forever. So if you need that requirement, there's a few things that we have to transform.

But there's this other project which we got on to that is called SWC, and it effectively is a JavaScript and TypeScript AST compiler and transformer, written fully in Rust... And it is super, super-fast. It is orders of magnitude faster than the Babel and the TypeScript AST compiler. The target for SWC is really to kind of replace WebPack/Babel in Rust. So it's kind of doing that heavy lifting; it can strip types out of TypeScript. So it doesn't enforce types, but it does the type-stripping, which Babel can do as well, and then it emits stuff, and they're beginning to implement the WebPack type of things... And it is super, super-fast.

We have that integrated into Deno at the moment. The main purpose that it serves today - it does two things. If you use Deno Dock and the module, it'll read the JSDoc and emit a text thing to your console of the documentation for the module. If you do it with --json, you'll get a JSON blob emitted out from it, giving you a documentation structure for that. That's all powered by SWC. And then the other thing in Deno that heavily uses it at the moment is that we had Prettier incorporated into Deno... So you do `deno fmt` format and it'll reformat your modules for you. The problem is Prettier not being Rust, it's pretty darn slow, and it was a lot of stuff to load into Deno. We were lazily-loading it, so we'd go and fetch it and run it, and it was just becoming a bit of a pain...

David Sherret, who has written a couple really awesome tools, wrote dprint, based on SWC. So 90% of dprint is in Rust, which he usually moves to WASM, but we've integrated it directly into Deno... So `deno fmt` is pretty darn fast in reformatting files, and you can reformat your whole project code with it.

**Break:** \[19:37\]

**Divya:** Alright, so we talked a little bit about (a lot, actually) about just TypeScript, Deno internals, and so on and so forth. One of the things I wanted to focus a little bit of attention on is when you mention the implementation details with regards to V8. From my understanding, a lot of how Deno works is through this concept of V8 isolates. Can you speak more to that, and how exactly that affects the runtime within Deno?

**Kitson Kelly:** Everything that uses V8 works off of isolates. An isolate is effectively that sandbox that you get when you run JavaScript in your browser. So it's the sandbox, effectively. So we create and manage these isolates within V8, and you can do some crazy things with them... This is usually the way things work within Chromium in your browser. A lot of the built-ins that you get from a browser are sort of injected into the isolates. So you have C structures that you project into the isolate, and that's how you get a lot of additional features that aren't part of the ECMAScript language specification.

We don't use a lot of that within Deno. Most of the runtime type of browser APIs that we have in there are written in TypeScript, and if they need to go and do something in the operating system, we'll do what we call in Deno language an operation (or an op) to Rust, which is then that secure channel to outside of V8.

**Divya:** I see.

**Kitson Kelly:** And there's basically an array buffer of shared memory between the sandbox and Rust, and we have opcodes that go over that. In the technical details there's two different types of ops. There's sort of a raw op which we use for performance reasons, but most of the time, a lot of the lighter-weight or non-performance problem ops - a JSON goes across that buffer and we serialize it inside the sandbox, and then we send it out in Rust, and we deserialize it in Rust... And that's how we communicate between there.

And then communication between V8 and JavaScript, and the sandbox - there's only a very little bit of communication there. Most of it is to bootstrap up, and then once we're up, we're in the Rust to JavaScript communication.

**Divya:** Cool. That's interesting. Going off of that, can you speak more to how exactly package management and resolution works? Does that happen at the V8 level, or does that happen within Rust, or where exactly are you doing that particular...?

**Kitson Kelly:** It's complicated.

**Divya:** Okay... \[laughs\]

**Kitson Kelly:** So what happens is we do a lot of legwork in Rust. For example, when you give a module -- let's say you start on the command line and you give it a module. What we will do is Deno has a built-in cache, which is controllable... So you can move it around. It defaults to a particular location. And if you do `deno info`, you'll get the information of where that cache is located, and you can go and introspect that.

\[23:39\] So we get that module, and the first thing we do is we figure out "Hey, are you trying to refer to a local module or a remote module?" This is all happening in Rust, so we do a bit of work there. Then once we figure out the absolute path for that, be it a web server or a local file, we look in the cache and say "Hey, have we seen this file before?" And if it's in the cache, we'll pull it out.

Then at that point we start to look at "Is that a JavaScript or a TypeScript module, or a Web Assembly module?" and we figure out what to do with it from that point. If it's a JavaScript module and you haven't told Deno that you want to type-check JavaScript modules, we'll hand it over to V8 and load it as an ES module. Everything in Deno is an ES module. So we'll hand it over to V8 as a module.

V8 will then do analysis of that module and say "Here are the other modules that are being requested." That comes back to Rust, and then we'll go off and fetch all of that. And if they're all JavaScript modules and they're locally cached, nothing's happening, except we'll pulling stuff out of the cache and handing it over to V8, and loading it up as an ES module. Then V8 will all do that.

Now, if you hit a TypeScript module, what happens then at that point is we go "Hey, do we have this transpile already in the cache?" Let's say we don't. Then what we'll do is we will then lazily instantiate the compiler isolate... Which is effectively a web worker that sits there. It's been snapshotted and built into Deno, so it's not like we have to load the TypeScript compiler into memory, and all that sort of stuff. It's sitting out there, already stuck in effectively a virtual memory that's been snapshotted, and part of the Deno binary. We load that into V8 and just say "Hey, V8, don't compile anything. Here's the last point of restore for that."

Then we send a message to that compiler that says "Hey, here's the TypeScript file that you need." At that point, TypeScript will go and say "Well, here's all of the other files that I need to be able to process the types of that." So it'll do a whole dependency analysis and dependency graph at that point, and then it will sit there and do a compilation of those files, and it'll come and give us the JavaScript for each of those files, which we put back into the cash. And when that's done, we load that TypeScript module that's now JavaScript into V8, and then V8 goes back over it all again and says "Oh, look, I need this module, and this module, and this module." And that will all get loaded in the V8. But at that point they're all in the cache, so it's quite efficient.

So yeah, there isn't any external metadata that Deno uses to resolve modules, unless you're using the --import flag, which we've marked as unstable, because even though we've based it on an original web standard, import maps has kind of not really taken a hold well... And sadly, it's at risk of not going anywhere. It's had kind of a bumpy road - it came out, the KV store was something that Chrome had sort of gone forward with, and we're like "Okay, we're gonna do this and that", it required import maps, and it required the built-in modules, and now a year-and-a-half later everybody's kind of like "Hm, not too sure about that."

So we made a hard decision before 1.0 to mark import maps unstable... But already the ecosystem had kind of built up -- because Ryan, myself, a lot of the core think package managers have caused us more headaches than good, and we're trying our best to solve problems without resorting to a package manager. And people have started to use import maps as kind of a pseudo package manager, and now we see the problem... Now people can't agree on what things are, and we'll have to see if the standard actually takes hold.

\[28:18\] We need some sort of problem, because as modules start loading in browsers more and more, you need the ability to change where those modules are located. It's something that we've always struggled with. And the problem is nobody can agree what the right way to do it though is. \[laughs\]

**Divya:** Yeah, there's always too many opinions on how exactly things should be implemented. I think that's what happens when everyone has opinions. Can you speak a little bit more to -- if people are using Deno now, in 1.0, which I imagine is when this particular episode will be aired... How exactly would they use packages within Deno? Because there is not sense of like a package manager.

**Kitson Kelly:** The thing I like to say is Deno is a browser for running code. The biggest thing I think people have to do is change the mental model. We don't think about it... When we open up a browser and we type in a URL, we don't think about it. We just take it for granted. When we go to a website that the page may have changed, but what we're getting is we're getting the version of the page that has the right content... Right?

**Divya:** Yeah.

**Kitson Kelly:** And that is really the mental model that we have with Deno - you go to a website that has a module, and you give it the URL, and you have a level of trust... But again, if you go to a dodgy website that ads malware to your thing, and a huge amount of pop-ups, and that sort of thing -- you know, you go to websites that you trust. If you go to a dodgy website and you get malware - we've all been there before, right? But you go to a website that you trust, you use web applications that you trust, you log into your email on the web, and you have that there, and there's things like HTTPS and other things, security to let us know that it's a website we can trust, right?

**Divya:** Yeah.

**Kitson Kelly:** The thing with package managers - we've sort of advocated a lot of our responsibility, of us as developers, of saying "Oh, because it's on npm, I can trust it." And that is wrong. A model that bugged Ryan, and it was one of his big regrets - it was a centralized authority... And it was a centralized authority that wasn't open to introspection. Obviously, npm has changed, it's been acquired by GitHub, but that doesn't necessarily mean that they have to be any more open.

We hope that they are, and history has been pretty good in that space... And again, people who are looking for a return on investment based solely on whether they manage packages or not - there's a much bigger ecosystem that they're now a part of, where they're not the sole source of revenue. So that's a good thing... But still, why do we put that trust in there?

\[31:48\] At Deno, we always wanna explore the model where we get to choose who we trust... And we don't have to be dependent upon it. Because if the npm registry were to go away today -- there's been, even a couple weeks ago, a silly mistake on a package, and half the internet goes down. How we avoid getting in that situation is not to put trust in a single entity like that, and diversify that trust. Deno just has no assumption, and this is what a lot of people have -- Deno just doesn't assumptions. If it's a module on a website, Deno can access it, and download it and cache it. Now, that means it's up to us who host the website to put any logic in there about how we resolve things.

So instead of having to sit there and sort out all of this on our local machine, across thousands and thousands of machines, in the Deno model it's the server serving up the modules who sorts out this stuff.

There's two CDNs that are really useful for Deno at the moment. There's pika.dev/cdn - that's probably the most useful one. So you get all this sort of semantic versioning that you would want out of npm modules, and Pika.dev CDN in particular has two big advantages. One, it only deals with ES modules, so it goes through all the npm packages, it looks for ones that have ES modules... And then what it'll do is it'll bundle it all up as a single ES module, so that you don't have other dependencies inside that module, and you have the whole package there ready to go. Obviously, it was originally intended for a browser, but because Deno works like a browser for modules, it's basically perfectly packaged there.

The other cool thing is -- Fred, who is kind of the ringleader behind it, worked with us... And we were like "We have all of this TypeScript code out there, that's been transpiled to JavaScript and bundled up, and we have all these other types that are out there available in \[unintelligible 00:34:00.19\] How can we sort of allow Deno to access those types and allow people to safely develop off of stuff in TypeScript on code consuming those packages, but not have the overhead of doing all of that transpilation, and take the advantage of the fact that it's already bundled up?"

So what we added to Deno is a feature where if the remote server sends a header called `x-typescript-types`, and it has the content of a URL, Deno will go off and fetch those types, and use that in place of the JavaScript when type-checking any work that's consuming that module or package.

So if you go to pika.dev and you find an npm package that you want, most of the time - and there's always caveats with it - it'll work under Deno. You'll just be able to import it, you'll get type safety... It works beautifully.

The other awesome CDN out there for Deno is jspm.io. The biggest thing is that it doesn't serve up the type headers at the moment. But what it does is it takes all the other non-ESM parts of npm and packages them up into a bundle that's compatible with browsers, and therefore it's largely compatible with Deno, and you get a lot of other packages out there. You can React off of jspm, you can do server-side rendering in Deno with that, and there's other stuff there.

There's all these solutions out there, that provide this information, including the semantic versioning resolution of the URLs. Why would we need the package manager...? \[laughter\]

**Nick Nisi:** I was gonna bring up a question from the chat room... Corban asked if the way of loading modules like this, without \[unintelligible 00:36:06.25\] private modules, is there a path to do that?

**Kitson Kelly:** \[36:11\] So stuff that you don't want publicly available, I'm assuming?

**Nick Nisi:** Yeah.

**Kitson Kelly:** Obviously, you can load local modules, but any HTTP server or HTTPS server is a target. So if they're private modules, and you've got a corporate web server, instead of paying somebody to set up a web server for you, which is effectively what a lot of the private registries are, you set up your web server, and you put your modules on there that you want, and module resolution. I think post-1.0 there's a couple prototype package servers out there for Deno. I think we'll probably see more of that in the future, and get that a little bit hardened, and that sort of thing... But basically, all you need is a web server, and whatever resolution logic that you want to code into that web server is what you do.

From a public perspective, Deno.land/x is kind of the big public registry at the moment, and you can add your packages there... And most 90% of it is all sitting there on GitHub, and it basically redirects the URL to the package on GitHub, and then it pulls down the code. But private stuff - yeah, you just set up a web server.

**Divya:** Nice.

**Kitson Kelly:** That's how you do private. \[laughs\]

**Divya:** Also, talking about modules, I noticed Deno also has standard modules... So what can you currently do using standard modules within Deno?

**Kitson Kelly:** One of the challenges is - even though JavaScript has moved forward quite a lot in the last few years, and adding a lot of standard library functionality, it's probably still lacking. So the standard modules, the std modules in Deno solve some of those things that are a little bit harder to do. It probably should be part of some standard library for JavaScript. And I know we keep talking about that as a community... So there's a whole bunch of stuff in there. We've tried to take most of that direction from Go's standard library.

Ryan's opinion - and I'm not overly familiar with it - and a lot of other people's opinion was that Go has a pretty decent standard library. So a lot of Deno's standard library is based off of the Go APIs and models, and then there's a few things in there that we've just found generally useful, that we think should be there instead of people reinventing the wheel.

**Nick Nisi:** I saw a lot of them are promise-based, too.

**Kitson Kelly:** Yeah... And a lot of async iterables, right? So we try to always go "Hey, let's use modern JavaScript syntax when doing this." So we prefer async iterables, we prefer promises, a heavy use of async/await, and most of that, and just try to make it a bit richer.

There's a basic HTTP server... You'll find a decent amount of similar stuff to what is the Node standard modules, as well as there is the standard/node, which is in a growing set of polyfills (for a lack of a better term) for Node to make it easier to consume Node modules natively... Though personally I'm not a big fan of that; because if I wanted to use Node, I'd use Node, right?

\[39:50\] The thing is there is a large Node ecosystem, and that will always exist. Some people say "Oh, Deno is out to replace Node." Ryan's intention wasn't that. I think Bert Bedler is probably a bit more eager; he's probably the one who's like the most "We're gonna get Node." But I think most of the rest of us are just pragmatic. We just wanna make it work well, and hey, if people use it, that's great. We're just trying to do the right thing... But don't drop Node today; we're not even at 1.0, and we probably will be by the time this airs. But those eight years of heavy investment in that ecosystem - Deno is definitely not gonna replace them any time soon.

**Divya:** Yeah. Alright, cool. So with that, we'll wrap the second segment. If you have any last thoughts before...

**Kitson Kelly:** Yeah, don't use package managers. \[laughter\]

**Divya:** That's a good one. I don't wanna speak for everyone, but at the same time, I do think that most JavaScript developers - that's the part they hate the most... It's just fighting with package managers and npm, and even just like dependency trees, and lockfiles, and the whole thing...

**Kitson Kelly:** Yeah, but then... "I want that." And it's like "Do you really?" There's probably a few things that are still hard to solve, but we're wanting to -- you know, that last responsible moment of making a decision. We want the problem that we can't solve another way. People were like "Well, how do I increase the level of trust that I have in those remote modules?" And it was like "Well, I need to know that the server isn't changing its answer", and that sort of thing.

So part of it is that cache can be immutable. You can check that cache into your source code tree, and then you'll never end up going for a remote module. There's a Deno command called deno cache, which will go and fetch all those modules for you, put them in that cache, and transpile them, do all that work for you, and then you can just take your deno cache, you can lock that in there, check that into your repo, and now you're never dependent upon anybody else at all.

The other thing, too - there is a package locking type of thing, where we take a hash of it, and if you don't wanna use all of those modules but you wanna make sure that you're getting those modules downloaded somewhere else reliably, and that they haven't changed, you can use the lock and you can then distribute that lockfile to allow other people to make sure that they get a repeatable build out of it.

So those are things that -- we didn't even have those originally in our package management. They were added in. So implementing the solutions for the right way are there. The model is completely wrong. We have these things called computers, which can retrieve files for us. Why do we need another command to do that, right? \[laughs\]

**Divya:** Yeah, yeah.

**Nick Nisi:** What would you be caching? Is it stuff like, for example, that you'd pull down from Pika then, and then cache and check into your project?

**Kitson Kelly:** Yeah, so deno cache contains the original JavaScript file, the headers - because those actually become important; those TypeScript headers that we talked about earlier, the type headers - they become important. Plus we follow redirects, and all that sort of stuff... So in order to be able to rebuild that locally, and make sure we get the right module and all that sort of stuff, we have to keep the headers... And then, again, if it originally was a TypeScript file, and we've transpiled it to JavaScript, we will cache that in the cache, as well. But that's all just laid out in there.

So again, if you do `deno info`, you'll see the location of your deno cache, and you can go in there and look at those files. But it's all persisted the file system, and start up again... Again, we just simply look and say "If we resolve to this URL, or even a local path, is that in the cache?" And we take a look in the cache. If it's in the cache, we don't go fetch it.

**Divya:** Cool.

**Kitson Kelly:** \[44:11\] Local files will be invalidated based on their timestamp. One of the things that we probably have longer-term is that we don't check the e-tags on files, and then validate remote modules based on e-tags... Which we probably should want to do.

So right now, basically, if you've fetched the remote module and it's in your cache, we will never go try to fetch that again, unless you do --reload, which will say "I don't care what's in the cache. Just go and fetch it all again." But local modules get invalidated based on the timestamp of the file. So if you've touched the file and it's different than the cached timestamp, we'll invalidate the module and reload it.

**Break:** \[45:00\]

**Divya:** Now that Deno is officially 1.0, what would you say is the adoption strategy in terms of using it? Because there's a lot modules that you mentioned that are not fully compatible -- you can't use npm with Deno, which means that you can't use your favorite package with it necessarily, so what would you recommend that approach to be like?

**Kitson Kelly:** I think it's still gonna be experimental for a lot of folks. I think we need as a community to see where things head. Hopefully, 1.0 will give us a stable enough base for the ecosystem to build up a little bit more. For example, I've been starting to rework on -- I've got a Koa/Express server framework, a middleware framework for Node called Oak, and now that we're at 1.0, it's given me the opportunity to bed down a few things in there, and add features to it, and get it a bit more stable. Because I think for a lot of people it's gonna be like "Well, what kind of workload do you wanna run with it?" It's really been early, early adopters that have been doing stuff with it, and there's some really interesting stuff out there... But hopefully, 1.0 over the next six months will start to see more and more stable, more and more enablement and tutorials... Because as any of us that have been through Node.js, or even the browser end development, there's still a learning curve. So there's gonna be a learning curve with people in Deno.

And it's one of the harder things for me to answer, because my head has been in that space for two years, so I know how things work. I was actually taking a step back yesterday as I was starting, and I'm like "Oh, with Oak I have to explain some of the basics of Deno to people to get them to understand, and I have to walk them through that." So I think as a community we probably need to learn what it takes to enable people to that.

\[47:52\] There are a few things where people are starting to educate other people on it, and we're starting to see tutorials, and that sort of thing... So I think the next wave will be those that are really interested in understanding the mechanics of it, that will then start to enable other people. So there are some really good experiments with server-side rendering with React at the moment, and Preact. People are running into problems where you're like "Okay, this doesn't \[unintelligible 00:48:23.26\] and when I load it off of jspm it blows up..." There's all these crazy things that we probably have to iron out.

So I still think it's gonna be for the brave for a while... \[laughs\] I think it'll be a while before we see mass adoption. But I think 1.0 is gonna be the point where you can safely experiment and realize that -- which is the world we've been living in for the last two years; every week we've been through 47-48 releases, and pretty much every one of them has a breaking change in it. Up to this point, it was like, you upgrade to the latest version and who knows what of your code didn't work now...?

**Divya:** You mentioned this previously, but one of the biggest things, especially with regards to talking about Deno, and with a lot of content that's coming out around this, that will help with adoption, I think a big one is definitely kind of talking more about the fact that Node is sort of a comparison, but not a direct comparison... Because I think oftentimes that comes up as like "Now I have to migrate..." -- and I've even seen this in Discord, where someone's like "I wanna write this in Deno. I'm migrating from Node", and it's like, that's not necessarily what Deno should be messaged as, because it's sort of different. It adapts a lot of the modern JavaScript and modern module management.

So from that perspective I think it's really exciting to see, because -- yeah, it's a different approach for how we do things, it's sort of questioning the base premise of how we've been doing things, and sort of saying "This shouldn't be how we do it. Let's do it a different way", which is why I'm excited about the project, because I think it's really cool to see that happening.

**Kitson Kelly:** I think part of it is we've been focused on the fundamentals of what a runtime for JavaScript should look like. I think probably of all the problems that we're solving with Node.js, that Node.js probably isn't the right thing to solve with, and it might be where Deno starts to come into its own is with things like serverless functions.

**Divya:** Yeah.

**Kitson Kelly:** If you think about the Node model, you install all of the stuff... It doesn't have an out-of-the-box security model. All the things that you don't necessarily want running in your run functions. With Deno - it can go fetch this stuff, it's not gonna interfere with the operating system by default, you've gotta be explicit about what security permissions you give to it... And there's been people experimenting with serverless functions in Deno. That may be the killer use case. Write them in JavaScript, write them in TypeScript, write them in WebAssembly, whatever, and you can run them on-demand in the cloud.

The other thing that's kind of emergent is that hybrid runtime application doing transpiling of code for the browser. That probably needs a bit more work, because we have made the TypeScript compiler APIs available in the runtime. We've now moved them behind the unstable flag, because we're gonna rework them... But you have something where you can consume TypeScript code, you've got the TypeScript compiler in there, you can serve that up, you can do some server-side rendering, you can serve that up to your clients, all that sort of stuff.

\[52:00\] And for a browser you can even create -- it's not efficient, but you can get Deno to generate a bundle of JavaScript code based on TypeScript code and several modules, and send that off over the wire to a browser as a single file. So I think we'll see stuff there... And I think there's some interest in experiments of the "Why don't we do Electron?" type stuff based off of Node. There's some early, early work in doing some bindings to Chromium and merging that with Deno. But I think that's got a ways to go before we see the Deno/Electron.

**Divya:** Going back to mass adoption and migration... One of the things that I notice a lot -- because personally, I really like open source; I like the ideal of open source, I think it's wonderful... And for me, part of it is also just the importance of community, and you brought this up - the community is what will drive the overall mass adoption of Deno, or just making Deno become the standard of how people build things.

Alongside that, I just wanted to think a little bit about how -- or at least ask a question, which is "How is Deno working towards building a community?" Because one of the things I did notice is that Deno has yet to have a code of conduct, and I don't know if -- this is generally standard at this point, right? I know there's always arguments around like "People should be decent etc." but one of the things I do notice is that, from a baseline perspective with open source projects, that generally tends to be a way of setting a standard and providing and fostering a more welcoming community... I'm just curious what your perspective is on that.

**Kitson Kelly:** Yeah, my feelings probably align well to your feelings; it's probably something that I need to approach with Ryan again. I think Ryan is always a bit hesitant to wade into anything that isn't code. \[laughs\] And I respect that. If we could take humans out of code, I think probably Ryan would be happier. \[laugh\] And I think a lot of us would, right? As I've gotten to know Ryan over the last couple of years, he really is the heart and soul of Deno now, at the moment, and I think he understands the importance of a well-functioning community.

I think it's something that we're gonna have to talk about as a core team, more of how we do that in a way -- programmers, and those type of behaviors are completely unacceptable, and shouldn't be tolerated. We've actually just had a little bit of a conversation earlier this morning, as there was an inappropriate comment recently in there, and we don't have a -- you know, it would be great if we could all just get along and not have to worry about stuff like this, but there are individuals who will always come in and ruin it. And I think you're right, we're getting to the point where we've got enough of a community that we need to be explicit about respect, and make sure that people understand that certain behaviors are not tolerable.

I haven't had a point conversation with Ryan and the rest on that, but I think you're right, the time has come, and we probably need to talk about that and make sure that things are well understood of what's acceptable behavior and what's not.

**Divya:** I really appreciate your honesty with regards to this, and I have to say that -- I think very highly of your team; I've done a couple of PRs at this point, and I'm not an expert at all in Deno and I'm not a key contributor in any way, but I think the way that I've interacted with the core team has been fairly professional, and I've appreciated that, because I see that intention, the good intention that the team has in terms of fostering the community and making sure that PRs are attended to, especially if they are from first-time contributors, which I was at one point as well...

\[56:18\] I think that's absolutely wonderful, and I think there's a lot of potential to grow and to keep that baseline of a strong core foundation... Because especially from a new open source project, when you're thinking about building a community, you wanna make sure that you start from a really strong core, as you mentioned... Because then overall it just leads to a wealth of -- like, people wanting to contribute, people being excited about the framework, putting their heart and soul into it, and overall it leads to good growth. So that's wonderful to hear, and I really appreciate you sharing that.

**Kitson Kelly:** Yeah, and it's really interesting, because Ryan is definitely the core -- the only person that sort of came along for the ride, so to speak, that was... So Ryan and Bert were there, and the rest of us, that you would consider core - and it isn't even a formal organization; it's just there's those of us that have been around for a while and sort of come in to it. It was all self-assembled. So from an open source community, it's strange -- we're sadly all-male at the moment. It would be great if we had -- but it evolved organically, of its own. It wasn't like "Hey, you're a core contributor." It was just those that were interested -- I mean, I will admit, every once in a while I take a look at the contributions bit of it... But if you look at the contributions on GitHub, the core team pretty much is reflective of the level of contribution, and that's the way that it follows. Bartek overtook me on contributions.

At the moment, the formal-formal core-core is Bartek and Ryan. They are the ones who are meeting regularly. Bartek has the time to dedicate to it, me being on the opposite side of the world, and I still have to do my day job. Kevin's on the West Coast of the U.S. - I think Berkeley - and he's been dragged into coursework, so he's not been able to contribute as much... But yeah, it's an interesting group, of which almost all of us are just focused on the coding aspect of it... But yeah, even recently we've had to have conversations about bad behavior. He's like "Why do people do this...?!"

**Divya:** I think that's the thing... Oftentimes -- I've even talked with people about this, where I'm like... Code is very important; I'm not even gonna disregard that. That is true. But I think community is also important, because I'm like "People are gonna use your code, and they are the people who make up the community", right? And ultimately, those two go hand-in-hand. And assuming -- like, I'm not a pessimist in general, but I think working in open source has made me fairly aware of the fact that assuming good intentions is one thing, but... As you mentioned quite clearly, there's always gonna be the one person who makes an inappropriate comment, or does something that makes someone else uncomfortable and drives them away.

\[59:35\] For me, when I talk about a code of conduct or something, it's not saying like "I'm gonna police everyone to act in a specific way", and I think that's what people assume; it's more just assuming "This is the baseline interaction of what we expect." And it's also useful as a sense of pointing to, because now you can be like "Hey, you did this. This is the code of conduct. They don't match. What is the best course of action now?" Like, do you get kicked off Discord, do you get a warning? What is next?

I think that's useful, because now it's less about "You hurt me" or "You said something that's insensitive to me", but it's just a general "Hey, this is a whole community. We're all in this together, and we've all agreed to act in a specific way, and you have not" and so on.

**Kitson Kelly:** Yeah, that's the thing. Codes of conduct don't exist because people want to be maniacal; it's because people behave badly. People don't sit around going "Oh, I should write rules about..." No. It's like, people have to say "Don't say stupid things", because people say stupid things, that are hurtful. I think everybody wishes that we wouldn't have to.

**Nick Nisi:** For sure. But it's good to see that the team is really looking towards considering it, and with the 1.0 release coming up, that seems like a good time to start focusing on community and building that, because this is -- now that it's 1.0, people will start really taking a look at it more as a project, in terms of adopting it for side projects, or adopting it for full projects, now that it has that 1.0 stable release on it. That's really good to hear, that it's something that's being taken seriously. And if the project grows in the way that Node is growing - which hopefully it will - it seems crazy that it wouldn't have anything like that. So it's good to hear that it's something that can be looked at in the future.

**Divya:** Awesome.

**Kitson Kelly:** Yeah, and I think the other thing about community is "Wow, people have lots of crazy opinions too, right?" I was getting really frustrated - I remember when I was like "Well, that is open source community for you", and it's like "Well, that's the stupidest thing I've ever heard...!"

**Divya:** \[laughs\]

**Kitson Kelly:** And it's like, you how do you respect -- and there are still some crazy people out there. I'm sorry if some of you are listening, that I would consider crazy, but yeah, there are some really varied opinions... It's been such a large group of people, of interests. I think this is one of the weird things - because of the history or Ryan, and you look at how many stars we have on GitHub... There's a huge amount of interest in it, and that means that all manner of individuals come and go into the community. And there are some very strange technical views on what Deno should do or not do... And it's like "Whoa..." \[unintelligible 01:02:40.21\] sometimes.

And what people feel is a useful contribution also varies as well, too. You get the one-line statement and a title for an issue, and no content and at all... \[laughs\] It's like, that's not useful.

**Divya:** Yeah, totally.

**Nick Nisi:** Definitely.

**Divya:** Well, we're all super-excited for the release. Congratulations to the team, and we're looking forward to more. I think that is a great place to wrap for this particular episode.
