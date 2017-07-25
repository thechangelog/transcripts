**Mikeal Rogers:** Hey, everybody! Welcome to JS Party, where it's a party every week with Javascript. God, I love that intro music! I was just banging my head like Night at the Roxbury. It was great. So I'm here with Alex Sexton, say hello...

**Alex Sexton:** Hi, everybody. It's me.

**Mikeal Rogers:** And Rachel White, say hello...

**Rachel White:** Hello!

**Mikeal Rogers:** Awesome! Today we're gonna talk about some cool stuff that's going on with Javascript. We're gonna dig into Web Assembly, we're gonna talk a bit about Stanford and the changing university landscape for learning programming languages and how Javascript fits in. We're gonna get into some lesser known JS Standards. Cool, everybody! Let's dig into it.

Web Assembly... Alex, tell me what this is.

**Alex Sexton:** Web Assembly is kind of a grandchild of the ASM stuff that was coming out a while ago, so for a while everyone was like, "Hey, you can only write Javascript in the browser." That was cool, people would do things like write CoffeeScript that compiled to Javascript, or things like that, and then there's this moment in time - once we got a few more primitives - that M-scripting came out and was able to compile pretty much anything that had LLVM type bindings down to Javascript, into this really weird-looking bad Javascript that could run like C programs, manage memory and do all that stuff, all within the Javascript stack. If you've ever seen one of Brendan Eich's demos where he plays video games like killing chickens or anything like that, that was M-scripting compiling down some game engine, which at 60 FPS was unheard of prior to then.

So Web Assembly is people saying, "Hey, that's cool", and we all agree that that was cool, but that's a little silly at this point that it's Javascript. We could kill some of the unnecessary parts that people enjoy writing, since it's just Assembly, and we can add in a lot more primitives that are nice to have, but still keep much of the core fundamental parts of the web, like sandboxing and all sorts of things.

So as an approximation of the old Javascript Assembly stuff, asm.js and stuff, but now with its own actual subset of instructions and things like that (or superset of instructions). It's not in browsers and it may not take off etc., but it seems to have pretty good traction compared to any other project that was similar to it. It could be really good for things like encryption or very high performance, or even some binding type stuff. It should be interesting, because people will finally be able to write in languages that aren't Javascript and compile them down to Web Assembly rather than running in Javascript.

**Rachel White:** If this all really happens and people start adopting it, what kind of developer would it affect the most for adoption?

**Alex Sexton:** \[\\00:03:47.23\\\] Definitely game developers will probably switch over to this. If you think about how Canvas works, or WebGL or something like that, it's like the DOM and Javascript and all that kind of stuff provides this web API that is very good for making websites, but once you break out of that, you can go to Canvas and you start literally just printing pixels in a grid, and you're totally outside of accessibility and selectors and all that kind of stuff. You've kind of just exited from the stack already.

People who are already exiting the stack to do things may find that they can write in a language or in a platform that can compile to Assembly, rather than in a Javascript environment; there may already be great tooling around doing those things. So the nice thing is that you can have parts of your code that are Web Assembly, \[unintelligible 00:04:48.04\] or something like that, and then still build out your majority of your website and your interface and things like that, in regular web. Everything. So you don't necessarily have to go all in Web Assembly or all that. So if you wanted to build a graphics editor or something like that, you can have the tough parts written in Web Assembly, and then still do the interface in normal human Javascript, or whatever.

**Rachel White:** Oh, that's pretty rad. I like that it's giving people more options to create more things. I saw that one of the other things that we have to talk about is getting started with Web Assembly in Node.js... I guess we could just talk about that next. Aside from getting started with it in Node.js, are there any other options that either of you know of for somebody that wanted to take a deeper dive into this and try it out?

**Mikeal Rogers:** Well, even in Node it's actually behind the flag right now. The first thing in this article about getting started it's like, "Run Node with this crazy flag that exposes Web Assembly." I think it's still a bit of a moving target in terms of the implementations that exist right now... Alex, do you know if Chrome and Firefox are doing it from under a flag, or if you have to run them in a special mode to play with it, or what?

**Alex Sexton:** I don't actually know... I've never run any Web Assembly; maybe that makes me a bad spokesperson for it, but...

**Mikeal Rogers:** My guess is that you have to run it with a flag. Usually, Chrome doesn't turn on non-default features in V8.

**Alex Sexton:** Correct.

**Mikeal Rogers:** ...so you probably have to run it with some kind of flag to really play with it today. One of the announcements that they've just put out on their list is that they feel that the current spec is ready for all the browsers to implement and actually expose. So that' like a sign from the spec community that they think that it's stable enough and now we need people to start exposing it to the world. But that means that it's probably not there quite for people to play with.

**Alex Sexton:** Yeah. It's a pretty weird thing... Google has tried this on its own before with NaCl and PNaCl and all that stuff, just like sandboxing C code, or whatever. This is different than that because there is a compile target and stuff like that, but kind of the platforms that currently use things like this are pretty different than the web, so a lot of the challenges that were around, like browsers don't all run the same version - they're versionless, essentially; the web just updates as it goes, so everything old has to continue to work for a very long time, and then you can only add new stuff, and the APIs need to be open, everyone needs to be able to implement them and they need to work cross-platform... So there are a lot of challenges.

I'd be very interested to see the benefit over -- I'm sure they have some benchmarks, I haven't seen... But just like "Here's an asm compiled thing... Web Assembly vs Assembly.js" - how much do the primitives and stuff that are added to this stack help? And I don't know what the fallback story is... Do you compile to asm and asm.js? And then if you don't have Web Assembly, it kind of falls back to asm.js? Does that make sense?

**Mikeal Rogers:** \[\\00:08:23.14\\\] Yeah, I think that we should back up a little bit and explain asm.js a little bit more.

**Alex Sexton:** Sure.

**Mikeal Rogers:** There's some other history here, too... I think that we can also explain this in the context of Brendan Eich's concerns with Web Assembly. He's a Web Assembly fan, but he has some concerns about it. For a long time, people have tried to put other VMs in the browser, and for a long time people thought that Java was gonna win and Java would be the language of the web. Microsoft tried to put it in .NET... All of the efforts to basically have a separate runtime in the browser have failed, and a lot of that has to do with the fact that Javascript is the dominant language of the web, and it sits there with the DOM interface in the same memory space, essentially.
So you run into this problem when you add another VM where it's like "How do you garbage collect these things that might be touching the same DOM between these different languages? How do you effectively share memory or share objects between them and count them properly?"

A lot of the NaCl stuff that you were talking about and some of the other kind of native sandboxing work that's happened has been, "Here's a separate interpreter, and we'll try to run it beside Javascript." They also tried with Dart, which was a colossal failure.

**Alex Sexton:** Sure.

**Mikeal Rogers:** Essentially, all of that has never really worked because you just can't really share them effectively. So what asm.js really was... A group of people - primarily people at Mozilla - trying to prove that "You know what, if we take a subset of Javascript, valid Javascript that we'll interpret, but we say just a subset of it, and we put a comment in it similar to \[unintelligible 00:10:04.03\] and we say this is asm.js land, it will interpret and fall back on all these other browsers and it will work as normal Javascript. But because we have that little comment in there and because it's using a strict subset, we can write some stuff inside of the JIT, instead of the regular Javascript interpreter that makes this really fast."

**Alex Sexton:** Right. But there are a lot of V8 people that disagree with that pretty heavily.

**Mikeal Rogers:** Right, so there are V8 people that disagree with that approach, but what they essentially did was that they made their interpreter really fast for all of the use cases, including that very small subset.

**Alex Sexton:** Right, they just didn't need the comment; they were just like, "Why don't we just always make those fast and detect them?"

**Mikeal Rogers:** Right, yeah. That was why you started to see asm.js benchmarks from V8, even though V8 wasn't "supporting" asm.js, because asm.js is just a subset of Javascript. So Web Assembly is trying to go a little bit farther. It's saying "There was a limit to what we could do with asm.js, so why don't we come up with a very small language that can be a target for compilers, but it can work inside of the same Javascript VM. We're still only gonna ship one VM, but we have this other language that is a lower-level compile target that people can push stuff into."

**Alex Sexton:** Right. I did some digging just now while you were talking, and the suggestion is that you can ship asm implementation and then also ship asm.js fallback. So if your browser doesn't support Web Assembly, then you can fall back to asm.js. And if your browser doesn't support asm.js, it will just fall back to running that as Javascript.

Then also I dug up the flag... It's only in Chrome Canary, not the other things, and flags enable Web Assembly in Firefox Nightly - it's in the About/Config - and then there are only preview versions of Microsoft Edge, and Safari has their "We think we'll support it in the future" type status page, but no one's ever seen it.

**Mikeal Rogers:** \[\\00:12:04.02\\\] Right. Coming back to Brendan's concerns... He's pulling a lot on the history of Javascript here and on the history of people trying to compete with Javascript. There have been many groups and different browser vendors and VM implementers that have decided at some point that they just don't like Javascript anymore. This happened in the main V8 team, and this is why they eventually went off and did Dart. They just decided "Bleah, Javascript!"

There are a million reasons to get mad at Javascript and table flip, but at the end of the day it is the language of the web, and we need to continue to make sure that it's fast and that it is the reference point for the web.

His concern with Web Assembly is that if it gets entrenched enough, he worries that vendors will start to view Javascript as just another language that compiles to run in the Web Assembly VM, and that is a recipe for basically degradation in performance.

**Alex Sexton:** Yeah. If every major website isn't using Javascript, then it will be deprioritized as something that people improve and make better, or whatever... For sure.

**Mikeal Rogers:** We are so far away from that, though...

**Alex Sexton:** Yeah.

**Mikeal Rogers:** I think this also opens up the possibility of a lot of people creating a lot of different languages that compile down to Web Assembly that then run in the browser. That is all true, but the performance of those languages is not going to be as good as Javascript. A lot of what the Javascript VM does is optimize specifically for that language, and Web Assembly is giving you these really low-level primitive tools... But once you work on this higher-order language and you need some of these higher-order optimizations - like we do for Javascript - it's gonna be very difficult to do those just on top of Web Assembly, without Web Assembly-specific optimizations for your language, which are probably not gonna happen.

**Alex Sexton:** Yeah, for a hot second.

**Mikeal Rogers:** Right. Well, I mean... Yeah, I struggle to even see a future where that's viable for an alternative... Like if you want to run Ruby on top of Web Assembly. I definitely see it for, like you were saying, WebGL and Canvas, and people who want these lower-level abstractions for, say, doing math. They're probably gonna get a lot out of the optimizations, because they can work at that really low level and they don't need a lot of higher-order dynamic optimized.

**Alex Sexton:** Yeah, I guess as a counterpoint, rather than what I mean, is you can run any language on your server, and lots of people still choose to run Node. So even if other languages are good choices for parts of things, I don't think it's a Javascript killer just because now you have the choice of your language, if it compiles to Web Assembly. Does that make sense?

**Mikeal Rogers:** Yeah.

**Alex Sexton:** People already choose Javascript on purpose, \[laughter\] so unless some language can compete with that -- and obviously, there are languages that are good for different things, but until that fact goes away, I don't think we're really in danger of losing Javascript as a primary language on the web.

**Rachel White:** Yay! \[laughter\]

**Mikeal Rogers:** Yeah, people love to hypothesize that Javascript will go away, but I think honestly those people are too smart for their own good; they're not thinking about accessible and easy Javascript is to use as a language, and that's why it continues to get picked for all of this stuff.

**Rachel White:** They're just jealous.

**Mikeal Rogers:** Well, I think that in the future - and this will sound contradictory - we'll see both more languages being used and more Javascript being used. By that I mean there will continue to be these niches that are much better suited for a different language where people will use them, but the predominant, default language will continue to grow as Javascript.

**Rachel White:** While you two were going super in-depth as to what is going on, I was reading more of Lin Clark's awesome cartoon intro to what makes Web Assembly Web Assembly, and what is it... If anybody else doesn't know what the hell it is - like me - you should go read it, because it's really good. And it also makes comparisons in a really easy to understand way. I think that diagrams are great, and Lin explains it very accessibly.

**Mikeal Rogers:** \[\\00:16:22.29\\\] Yeah. I haven't had a chance to really dive into it yet, but there's a module spec in Web Assembly as well, so I'm gonna have to dive into that and see what that means.

**Alex Sexton:** I think what that refers to is trying to cook into the Javascript module system to where you can just import... Just like you would Javascript, you would just do import blah from Web Assembly file. Maybe I'm thinking of something different, but that is a primary goal. But since none of that is actually fully spec-ed out even for the web with regular Javascript, it's kind of just like a placeholder right now.

**Mikeal Rogers:** Yeah. I mean, it's definitely a lot simpler than the ES6 module spec. But because it's so much simpler, I actually have a harder time figuring out how it fits into the spec.

**Alex Sexton:** Yeah, I mean... What I'm saying though is that you can use Web Assembly as if it was a Javascript file, as long as you provide an external API... So it fits inside the Javascript one, or at least it's a goal.

**Mikeal Rogers:** Right. There's an export and import system, and stuff like that. Cool, okay... We're probably ready to move on to the next topic pretty soon, and when we come back we'll talk a bit about Javascript in higher education.

**Break:** \[\\00:17:44.27\\\]

**Mikeal Rogers:** Alright, so what we're gonna get into now is a bit about Javascript and how we teach computer science in higher education, like universities. Stanford announced that their CS106 course, which I don't know the significance of that, but apparently it is significant...

**Alex Sexton:** It sounds very early on in the... It sounds like the first course you take at Stanford for programming language.

**Mikeal Rogers:** So basically when you first sit down and learn programming, they are getting off of Java and onto Javascript? So that's great... So now instead of learning about crazy Java interfaces, they can learn about prototypal inheritance, and then never use prototypal inheritance when they get jobs.

**Alex Sexton:** Yeah...

**Mikeal Rogers:** No, I'm kidding... Anyway, it will work really well for all those terrible interview questions about how prototypal inheritance works. But this is a bigger deal than I originally glanced... It's been like a decade that they've been teaching Java, and there's some really good quotes in here from this professor Roberts, who's kind of running this whole transition.
He says, "Java came out in 1995 and it's really stabilized, but they thought that it was gonna be the language of the internet", and that was definitely how Java was sold, especially in the late '90s, early 2000s. This was the language of the internet, it was gonna replace Javascript on the web, it was gonna run on a mobile device...

**Alex Sexton:** It runs everywhere.

**Mikeal Rogers:** \[\\00:19:54.13\\\] Yeah, it runs everywhere - that was literally the slogan. But that didn't happen. This is not the language of the internet actually, and Javascript kind of won that, so they're working to transition their 106 stuff over to Javascript.

**Alex Sexton:** Yeah, that's great. I can tell you as someone who has a computer science degree, who did Java in his first two classes, that I spent 50% of my time understanding Java - which is fine... If you're learning Java, you should try to understand their primitives, and all that stuff... And then the other 50% of the time trying to run Java and set up my environment to the point where I could run Java.

The ease of getting started with Javascript... Like, if you just wanna write Javascript, compiling to anything or whatever, you're just doing programs for schools, and like they say, "It just must run in the latest Chrome", or something like that... Instantly everybody already has the environment to run that, and that's just beautiful to me, because it would have saved most of my headaches. And none of those headaches had anything to do with me actually learning how to program. It was all just "Go see the TA to see if you can get your idea instance running against the correct Java C compiler in your Windows." Of course, I had an Alienware laptop, probably... \[laughter\]

**Rachel White:** So I'm actually wondering if this is going to help the students be able to debug things better? Because I do run a lot of hackathons -- well, not run... I work a lot of hackathons and have to help the students whenever they run into issues. And they're always using Python or Java, and they just don't know how to fix errors. I'm wondering if them being able to do Javascript and having it be a little bit easier to stack trace stuff, if they're gonna teach that even... I don't know.

**Alex Sexton:** Yeah. I mean, the tooling we were given in my class had some of this built into the editor we were supposed to use, but the ease of use of dev tools isn't amazing. There's still plenty of people I see \[unintelligible 00:22:17.28\] but the ease of use of dev tools is certainly easier than running a strace against some native program. The tooling has accidentally become much accessible, so I think you're absolutely right that debugging could be a skill that accidentally benefits from this.

**Mikeal Rogers:** And even to get to debugging, you have to render a program. And running your program in Java -- ugh! It's like 20 minutes to get the VM spun up etc. It's not really made for that quick turnaround time. I think between Node.js and Python there's not a huge difference. I mean, there is a big difference in start time if we're talking about microservices, but for development and workflow, they both run relatively quickly compared to Java. And this is why Java developers have these giant IDEs that are sort of like trying to run their code while they're writing it, so that they don't have to try to run it on a command line and see if it failed or not.

So it's just a completely different and much faster and quicker to get to an error debugging mode for Javascript in Python. In terms of the hackathons, when you get an error, you can google it and get a pretty good answer and understand what's going on with both Javascript and Python... Whereas Java depending on the framework they're using or whatever IDE -- there's a lot of code that ends up in the tracebacks that make it kind of hard to find what the actual error is and google around for it. The debugging by googling for Java is just a lot more difficult than other languages.

**Alex Sexton:** Back when I was in school, I'd have a problem that I hit a bug, and you'd search for the bug - this was true of PHP back then too, but you know, I'm an old man now... But you'd search for the bug and you wouldn't find someone solving it, you'd find a web page that's their contact form returns that error as the page, or whatever... \[laughter\] It had been indexed, but it was actually just an instance of the error occurring, not a solution to your problem. \[laughter\]

\[\\00:24:19.07\\\] Unrelated to that, one thing I'd be interested in is how much it matters that people start with a dynamic, non-typed language. I feel like I'm in no way a purist when it comes to functional programming or typed languages... I pretty much thing that you can JIT your way out of all of those problems a lot of the times, and that typing is often overhead that I don't want or need. But the fact that I was forced to do types means that I had that option, if I come across a use case for it... So I wonder if they should do TypeScript or Flow, at least for some of their projects, like "Alright, run flow on this one and type all of your different things."

I almost see it as a feature that because of Flow and TypeScript, Javascript is at this point almost optionally type. So I think it would be really good, and I don't know if they're up on their Javascript enough to know this, but it may be really solid of them to say "Alright, do this one functionally... Javascript is flexible, so do this one purely functionally. Now do this one type, now do this one however you want..." Those types of things kind of excite me if I was writing the curriculum, but something tells me it's not gonna be quite that intense... But I like it. It's both scary from that standpoint if they don't cover that stuff, but also cool if they do.

**Rachel White:** I'm actually reading deeper into this, and they're revising multiple of their CS courses. One of the that they offer is Computer Science and Social Good, which is kind of rad... They let the students see practical applications of what they'll be making, so they can get a better insight into what they'll experience once they leave school and actually start a development career, which is really great.

**Alex Sexton:** It's California. \[laughter\]

**Rachel White:** Oh, come on...

**Mikeal Rogers:** Yeah... I mean, I'm not hugely surprised of this move just because I've heard of... Feross Aboukhadijeh who does WebTorrent - he went to Stanford and he's been back to do random stuff with students there. I know that Guillermo Rausch who created Socket.io has done additional summer courses there, helped them with teaching and stuff like that.

**Alex Sexton:** Yeah. They're not even the first major university to teach Javascript as a core language. There are some very big ones that already do this, but I think the Stanford name, especially in the Valley, sticks out as interesting.

**Mikeal Rogers:** Yeah. To come back to your typing point, though... \[laughs\]

**Alex Sexton:** Uh-oh...

**Mikeal Rogers:** So now we can have like a proper argument... No, no, I just want to say... I come from a background -- I learned lower-level languages before I learned higher-level languages, and the people that I know that come from that background are not the people that are asking for types in Javascript. It's mainly the people that turn into type advocates are people that learn dynamic programming and then they see typing as some kind of solution to some problem.

I don't know anybody who used to write Assembly and C who's writing Javascript now going "You know what I really miss? I miss type errors. Type errors were rad." I just don't know those people... I've never met them.

**Alex Sexton:** \[\\00:27:41.07\\\] I know a lot of people. I think people kind of avoid you sometimes, so... \[laughter\] I know plenty of people who feel very strongly about types, and have their good reasons. I don't necessarily agree with them, but I think it's silly to write off types as a thing that people don't need to learn. If you're getting a CS degree, only a certain percentage of those people are gonna end up writing Javascript. Some large percentage are gonna end up working in typed languages, so I feel like the experience that I had in school when I did -- I mean, we used Haskell and Scheme and Java and C++ in a bunch of stuff, but I feel like the fact that I got that experience in a typed language means that when my company decides "Hey, we're gonna use flow", like, that's fine, I understand types; or whenever the web dies in two years again - I think we're due for the web being dead - then I can go write Elm, or whatever, in a native iOS platform, or whatever, and have types.

**Mikeal Rogers:** Well, when you learn a dynamic language, you learn about types... You just don't learn about static typing. You know what a string is, you know what an array is, you know that they're different, and then you also have to learn these \[unintelligible 00:29:05.06\] semantics, right?

**Alex Sexton:** Yeah, but you don't learn about function overloading or pattern matching on arguments... There's a whole world around types that I think is worthwhile to learn, even if you don't agree that you want to be doing that for your types of programs. I think types catch a lot of errors that I don't have, or that bubble up anyways. If I send the wrong type to most of my functions, they will throw an error; they'll just do it in runtime. And as long as you test them, most of the times you can catch those if you have good coverage, so types have dubious value there.

At Stripe we use flow against a huge portion of our React codebases, and we get very free, good documentation out of that. "Here's a component, here are all the props, here are the types of the props, here's a little generated component builder", to where it will give you the dropdown text boxes to fill in the props and then you can preview exactly what things will look like that are running in the code.

I think types enable some very beautiful things outside of just build time checking of enforcement uptypes. So whatever... People should learn types if they're getting a CS degree, regardless of whether they...

**Mikeal Rogers:** \[laughs\] I think that you should kind of explain a little bit more about flow type in particular, but also the differences with typescript and traditional typing because it is a very new approach to typing. I don't think that I've seen the flow type thing in any other language or any other toolchain before. I actually really like this approach to both learning how types work and where they can be used, and also this very kind of iterative/additive value mode, rather than kind of an all-in or all-out mode.

**Alex Sexton:** Sure, I agree. So Flow type and TypeScript are both supersets of Javascript that you can write code in. You write almost exactly regular Javascript, but then you might add a little typed definitions in the code. Flow and TypeScript are functionally equivalent. They have differences and different tradeoffs and things like that, but they're essentially an optionally-typed edition to Javascript.

One major difference is that TypeScript allows you to fully -- actually I think Flow allows that, as well... They both allow you to fully externally type things, so you can actually just reference code from a separate type file, and say like "This function over there is this", so you actually don't even have to markup your code any differently. But there are compilers where if you wanna say, "Here's a function, and the first argument is list of people, and that is the type array where the elements are an array of strings", and then the next element is a boolean, whether you want them to do something.

\[\\00:32:04.20\\\] So you can have these little type definitions inside your code, and then whenever you call a function somewhere else in your code and you send a string to the place where it expects a boolean, before you ever run your code, these little checkers can NPM-run Flow and it'll check to make sure that everywhere that you're using an API, you're sticking to the types...

The coolest thing about it is that you can optionally enforce it. You can say "This little section of our code is really important that people use it correctly, and this section isn't. We have Flow here, we don't have Flow here." You could technically run like TypeScript and Flow in the same project, because it's all compiled down to Javascript, much like Web Assembly, or ES.next, or any of these things that we talk about.

The fundamental property of the web, that everything can run on current browsers and anyone kind of agrees to that, we end up in a situation where a lot of things are optional and could be done to parts of code bases... So different teams at Stripe use Flow to different degrees and to different levels of requiredness.

One thing that Flow and TypeScript add to your experience though is generally better editor/IDE environments - TypeScript especially, because Microsoft makes TypeScript, Facebook mostly makes Flow... So the TypeScript bindings into their Visual Studio Code editor are very strong, because Microsoft has had years and years of experience writing strongly-typed editor things to where you can refactor every location of a call to some API, or jump to different areas or automatically generate things and get code hints and all sorts of things, because of the types; the Flow bindings in Atom are pretty good as well, but probably not as polished as the TypeScript ones.

**Mikeal Rogers:** Yeah, if you look through Visual Studio Code, you basically come to these typed definitions for not just all of Node Core, but for most common NPM modules, like Request or Express, and stuff like that. They define the whole API there, so that you can get all kinds of crazy, nice editor stuff.

**Alex Sexton:** Yeah, there's an open source project - Flow-typed, or something like that... There's ones for each of the things. So there are open source libraries that don't use the typed languages, but whenever you integrate a third-party library, you want the types for that. So all they do is they maintain a third-party type definitions for popular libraries. Some the actual team does, the Node bindings and some of the most popular modules, but there's actually an open source thing where you can submit the types for a library that you don't run and just say, "Hey, these might be helpful to someone."
At Stripe, since we use Flow and we use some third-party things, we can also pull in someone else's third party type definitions of that, and then whenever we use that library, we get all of the niceties from it.

**Mikeal Rogers:** There was a lot of arguments for a long time about adding types to the language, and we've pretty much given up on that.

**Alex Sexton:** Yeah, I think that's dead because of these.

**Mikeal Rogers:** Well, when ES4 died, those died.

**Alex Sexton:** I mean, it has come up several times since then, but since these have come out, people are like "This is good enough." Everyone thinks that even with TypeScript, you can actually compile down to faster than Javascript stuff with asm.js, because sometimes you have types that you can do better than the regular JIT with...

**Mikeal Rogers:** \[\\00:35:55.28\\\] Yeah, so one of the arguments that VM implementers like to have about types is that they can make the VMs much faster if they know what the types are. But now we're seeing this case where actually tools are better at optimizing this kind of stuff than people are. So if you have things like Flow type and TypeScript, we can actually write tools that then turn into even better Javascript code that can hit all \[unintelligible 00:36:16.02\] depending on the types.

**Alex Sexton:** I personally like types much better for documentation and people-related benefits, like IDEs and stuff like that, much more than I like it for safety and speed. It seems like everytime we think something about safety and speed is true with types, someone on the V8 team shows us that we're wrong. If what I just said is incorrect, please don't send me hate mail, but...

**Mikeal Rogers:** \[laughs\] It's true, except sometimes it's the Firefox team; sometimes it's also the SpiderMonkey people. Okay, I think we're about ready to have another break now. Right after the break, when we come back, we're gonna get into the featured project of the week and some of our picks. We'll be right back.

**Break:** \[\\00:37:06.00\\\]

**Mikeal Rogers:** Alright, so let's get into the featured projects. I actually cheated and I threw in two featured projects for this, because I really wanna talk about some of the lesser know - for lack of a better term - JS Standards. These aren't Standards in Standards bodies, but these are standard APIs that inside of the Javascript ecosystem for both Node and the browser we have these little APIs that act as glue between a bunch of higher-level stuff and a bunch of lower-level stuff.

Today I have two projects; one is called Abstract Blob Store, I believe... I lost my notes. \[laughs\] Yeah, Abstract Chunk Store. These are by Max Ogden and Mathias Buus, and they're building out a bunch of stuff...

**Alex Sexton:** Wait...

**Mikeal Rogers:** Yeah?

**Alex Sexton:** You're talking about storage, and you lost the information?

**Mikeal Rogers:** \[laughs\] Yes, exactly.

**Alex Sexton:** Just double-checking...

**Mikeal Rogers:** It's eventually consistent, okay?

**Alex Sexton:** Hm...

**Mikeal Rogers:** \[laughs\] I can throw database jokes all day. So the idea here is that --

**Alex Sexton:** Let's catch that idea for now.

**Mikeal Rogers:** Alright... \[laughs\] Okay. Anyway, you're just way throwing me off today... I should have known not to go toe-to-toe with puns with Alex, but that was a huge mistake. Anyway, so we have these two libraries, Abstract Blob Store and Abstract Chunk Store by Mathias Buus and Max Ogden. They work on the Dat Project, so they're doing a lot of open science, open data stuff, and they're storing a lot of stuff all the time.

**Alex Sexton:** They're in the Dat Project?

**Mikeal Rogers:** Yeah, they both work on the Dat Project.

**Alex Sexton:** Explain that to me...?

**Mikeal Rogers:** Dat is a small tool -- I mean, I guess it's kind of growing in terms of ecosystem, but it's a toolchain for open scientists to share data, and to manipulate data and then share those manipulations. You can think of it like Git, but for data and for open science. To be honest, Max has been working on a way to get people to share data and their manipulations of data since 2008-2009, and continued to try to build stuff that was higher-level, and eventually I think figured out that what was really missing -- you know, he wanted GitHub for data, but you need Git first before you can have GitHub, so Dat is basically Git for data.

**Alex Sexton:** Sure.

**Rachel White:** \[\\00:40:16.10\\\] Yeah, it wants to make people collaborate with sharing data more, too. I think they have a Knight Foundation grant too, so they do a bunch of cool stuff.

**Mikeal Rogers:** They actually have a bunch of grants, yeah. You can go to the RFC podcast on the Changelog network and there's a podcast on Request For Commits with Max where he talks about the grants and how to get them and how to grant-fund open source.

**Alex Sexton:** Wow, that's awesome. Max actually was clean-shaven when he started on the Dat Project and he said once people finally adopted it he would shave, and look where we are.

**Mikeal Rogers:** He's not shaved.

**Alex Sexton:** Yes, he's got a big beard. \[laughter\]

**Mikeal Rogers:** Anyway, so to come back to these lesser-known Node Standards... These are really cool, really powerful stuff that developers can work with, because if you just wanna store chunks of data somewhere, you could just pick up a library for S3 for the exact kind of storage mechanism that you want, but if you wanna future-proof your code a little bit or if you wanna expose a module to do something (to do this behavior) and you don't want them to necessarily require it to run in something like S3, you can use Abstract Blob Store - or Abstract Chunk Store, depending on your kind of use case. Then the actual underlying storage mechanism is completely abstract and people can throw in their own.

This is a really good way to build out an ecosystem of good modules that are storing data without locking them into a particular vendor or a local file system, even.

**Alex Sexton:** How does it compare to something we already have, like IndexDB, or something like that? The primitives are different?

**Mikeal Rogers:** It's a little bit lower level than IndexDB... Although I don't think that's the right term. It's doing a lot less than IndexDB, because it's not doing any kind of sorting, it's not actually indexing anything.

**Alex Sexton:** Is it persistent?

**Mikeal Rogers:** Yes. Well, yeah, you assume that Abstract Blob Store is persistent. But there is a set and a get, and when you set something, you assume that you'll be able to get it later.

**Alex Sexton:** How async is it?

**Mikeal Rogers:** Some of these are actually in memory as well, so they don't persist indefinitely. Some of them don't.

**Alex Sexton:** Okay.

**Mikeal Rogers:** But I think that there actually is a good corollary here with IndexDB. In the Node.js ecosystem and also now in the browser with stuff like PouchDB, these tools aren't built to IndexDB, they're actually built to what's called abstract LevelDOWN or LevelUP. So the whole LevelDB ecosystem built these kinds of abstract standards really early on, so that if you relied on level-up for your set get and for all the stuff that you do with IndexDB or with LevelDB - if you relied on LevelUP, you could actually swap out the underlying level up implementation.

So people wrote some in the memory, and people wrote them to work in the browser, and people wrote them to work on top of local storage, and SQLite... So eventually, PouchDB actually moved over to LevelUP...

**Alex Sexton:** I was gonna ask...

**Mikeal Rogers:** Yeah, so they could take advantage of all those underlying data stores. Cool stuff!

**Alex Sexton:** Have there been any cool demos, or anything like that? Or is it just mostly early days...?

**Mikeal Rogers:** I think these standards end up getting buried in the things that people are actually building, right? There's some really cool IPFS demos, and IPFS uses Abstract Blob Store internally, and Abstract stuff. In fact, there's an IPFS Abstract Blob Store that they expose to everybody else too, so you can use that as an upper-level storage mechanism. But even the underlying storage mechanisms where they store their internals also uses this abstract store. So those are some good examples.

\[\\00:44:11.17\\\] I think that the biggest demo of all this stuff is probably the Dat Project and the stuff that they're building.

**Alex Sexton:** Cool. I think they'd get more traction if they didn't name it Abstract Blob Store.

**Mikeal Rogers:** Probably true.

**Alex Sexton:** I'm thinking like UltraStore... That's pretty good. \[laughter\] Honestly...

**Mikeal Rogers:** Yeah... The thing that really gets traction is the thing that's built right on top of this. LevelUP got a ton of traction, and because of that traction, a lot of people implemented abstract LevelDOWN stores, even though it was called Abstract LevelDOWN.

**Alex Sexton:** Abstract LevelDOWN...

**Mikeal Rogers:** Well, LevelDOWN in itself is actually a pretty clever name, right?

**Alex Sexton:** Sure.

**Mikeal Rogers:** Anyway... That was quick.

**Alex Sexton:** Yeah, sure.

**Mikeal Rogers:** That was good. Now we can really spend I think a lot of time on our individual picks, so why don't we get into our individual picks for the week?

**Alex Sexton:** I'll start, since I think Rachel might be having some connectivity issues. Mine isn't super long, since I've already kind of talked about it... Mine's gonna be the flow-typed - it's a repo that lets people commit to, and it has the Flow type definitions for maybe a-hundred-something open source projects: Backbone, Bluebird promises, Request, Chalk, Chi... All these different things that you probably use.

This allows you to immediately jump into Flow in your code, even though you might not have done any of it on your own. So you can literally just pull in Flow, not type anything of yours, and then use an editor that can handle this stuff - Atom Plus... There's some Flow integrations in Atom that are pretty good. And then instantly, once you start typing stuff around the express bindings that you pulled in or the request bindings, you'll start getting function argument completion and all that stuff, without you doing anything.

This project alone could get you better editor experience for things that you know the least, because, like, there's something you didn't write, and then maybe it'll save you some time, like looking up documentation. I assume Lodash is in here; let me check to make sure... Yeah, Lodash 3.x-4 is in here. So if you, like me, can't ever remember all the different things in Lodash, it'll be a really great thing to just add this one thing and then instantly you have type definitions for every single Lodash function everytime you try to write one. I think that's super nifty.

Also, a fun fact that I forgot to mention earlier is that Flow, the actual thing that runs to check your code and find the different types and find the bugs in your type is written in OCaml, which is my vote for what Stanford should use as their default language that they teach. \[laughter\]

One of the guys on my team found a bug in the invitation of Flow, and he wanted to fix it, so he had to learn how to run OCaml and get an environment set up and submit a patch that way, and I just thought it was very funny, because I didn't know people liked OCaml until very recently.

**Mikeal Rogers:** \[laughs\] Rarely people that are really into typing. I'm looking at the Request definition in here, and it's really funny because so many of the Request functions are take dynamic arguments... They'll take different types and then do different \[unintelligible 00:48:04.24\]

**Alex Sexton:** \[\\00:48:06.26\\\] Massively overloaded...

**Mikeal Rogers:** Right, so there's all of these "declare any", "declare any" types... It's pretty funny.

**Alex Sexton:** At least you would still get the name in your autocomplete stuff. So even though it wouldn't give you like, "This must be an array", but it'll still give you useful things, even just with any-s, so it's not the end of the world.

**Rachel White:** I'm here. You go first, though...

**Mikeal Rogers:** Okay, I'm gonna bring up Offline Camp, actually. There's this great little community; it's called Offline First, but they're really handling a lot more than just offline web use cases. It's a lot of the people from the Hoodie community, and PouchDB and stuff like that... But they're really digging into not just offline, but also with Fuzzy internet and what you need to deal with peer-to-peer web... There's a lot of overlap in all these use cases.

There's this new community; the organizers of the community have just been phenomenal. They've been doing a great, great job organizing, and documentation, and getting people involved, and that's included these offline camp events which are really small, really intimate, and you kind of go off and stay in some house or mansion that they rented somewhere... Because of that, it's a really limited number of people. This one that's happening in Berlin in late-April, early-May is only 30 people, but I highly recommend it. I think there's an application process because there's so few spots, but I greatly encourage anybody who's getting into offline or peer-to-peer or anything like that to apply and get involved in the community.

**Alex Sexton:** Does that bump up against any of the JSConf EU stuff? I don't know when those dates.

**Rachel White:** Yeah, it's right before JSConf EU.

**Alex Sexton:** Okay. Do it all.

**Mikeal Rogers:** Well, not right before... It's like the weekend before.

**Alex Sexton:** But Berlin is pretty fun.

**Rachel White:** Also during Eurovision... Oh, but you'll all be offline, so you won't be able to know who wins...

**Mikeal Rogers:** No, I mean, there is internet at the camp. \[laughs\]

**Alex Sexton:** If you need something to do in that week in Berlin, there's this really good Vietnamese noodle place called \[unintelligible 00:50:21.07\] that I would suggest you go to. That's my actual project of the week.

**Mikeal Rogers:** They throw \[unintelligible 00:50:29.28\] and they're fun, it's really good. That's a good spot. There's also an amazing dumpling place that has this dish called Stripes of Beef, which are just these thin slices of beef with -- I don't know what they're doing with some kind of... It's like Sichuan pepper and a few other things, and some chili oil. But it's one of the best dishes you'll ever have.

**Alex Sexton:** Yeah... I actually think that's a translation error; it's actually tripes of beef, and those are intestines. \[laughter\]

**Mikeal Rogers:** I think they meant strips of beef, and they put an 'e' in there because they actually did mess up the translation a little bit...

**Rachel White:** I actually don't remember anything special that I ate when I was in Berlin last time, so I'll have to listen to your advice this time.

**Alex Sexton:** Eat Döner Kebab at four in the morning.

**Mikeal Rogers:** Yeah, I guess you didn't hang out with me enough if you didn't have any amazing food, because that's pretty much all I do there.

**Rachel White:** I've never been in Berlin while you were there, so...

**Mikeal Rogers:** Right... There we go. Are all three of us gonna be at JSConf EU, actually?

**Rachel White:** Yeah, I'll be there.

**Mikeal Rogers:** Did you say yes or no, Alex?

**Alex Sexton:** I have a human child to take care of now... It might be another year before I get out there.

**Mikeal Rogers:** Okay, so you're bringing the child with you, is what you're saying.

**Alex Sexton:** Yeah, that's the plan.

**Mikeal Rogers:** Okay, awesome. Also, JSConf EU I guess is a good pick; it's a great conference. Awesome \[unintelligible 00:51:48.29\] Rachel?

**Rachel White:** \[\\00:51:53.15\\\] Yes. Okay, I do have a pick. If you're interested in data vizualization with D3 and other really cool stuff, there's two women... One lives in San Francisco, the other lives in Amsterdam, and they have this project called Data Sketches, where each month they are taking different topics and experimenting with data viz through exploration of how to show information based off of each of those topics. I saw one of them speak in January - Shirley Woo is one of them, and the other woman is Nadia Bremer (I hope I'm saying those names right).

It's just really interesting to see all the different ways that you can take data and have it be informational. They have seven months so far, and they each have the same topic for each month, except they take it in totally different directions. One month they picked books, and what one of the women did versus what the other woman did is completely different, and it's super cool to see the differences of how they made stuff. I'll post the link in the chat.

**Mikeal Rogers:** Awesome. There have been so many good sketches and drawings of rad stuff lately. Mariko killed that again with some sketches about SHA1; those were great.

**Alex Sexton:** Yeah, I'm a fan of this trend.

**Mikeal Rogers:** It's definitely positive.

**Rachel White:** There's so many people that are more like visual learners, so I think it's... It's more interesting than just looking at a pie chart, or a bar graph, especially when you are utilizing D3 and you're able to make that information interactive so you can see data sets changing over time, or how certain information is relational towards other things that you have in your set. It's really awesome.

I think OpenVis Conf is coming up too, and they just exclusively deal with this kind of stuff.

**Mikeal Rogers:** Also CSV Conf is coming up. We were talking about Dat and visualizations, and that's actually a nice intersection. CSV is also a bunch of cool visualizations, like OpenVis Conf, but it's also about small data, basically.

**Rachel White:** Yeah, I think CSV Conf is 2nd to 3rd May, and OpenVis Conf is April 24th and 25th.

**Mikeal Rogers:** Sweet. On that note, we'll leave it there. Rate us on iTunes... Thank you, everybody.
