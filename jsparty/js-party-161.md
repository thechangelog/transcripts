**Amal Hussein:** Hello, party people. We're so excited to be back... Well, I guess technically JS Party has been back; I'm excited to be back on JS Party, my first 2021 show. I'm joined by Divya. Hello, Divya.

**Divya:** Helloooo...!

**Amal Hussein:** And a very special guest, Benjamin Coe, or Ben Coe. Welcome, Ben.

**Benjamin Coe:** Hi! Thanks for having me. I'm excited to be on the show.

**Amal Hussein:** Yeah, we're super-excited to have you as well. We're gonna be talking about a super-cool topic. And by cool I mean, you know, only cool by the ultimate nerdiest standards... Watch me as I'm pushing my glasses up as we speak. So we're gonna be talking about testing, and test coverage instrumentation.

We're really lucky, actually, because Ben is founder of Istanbul, a pretty big -- I think kind of a golden standard in the JavaScript community for testing coverage, instrumentation, and so we're gonna be getting into all the nitty-gritty details, and the back-story, and all of that. We'll talk about test coverage, testing in general, open source, project arcs... Lots of stuff to cover. So welcome, Ben. Why don't you tell us a little bit about yourself before we get started?

**Benjamin Coe:** \[04:01\] Yeah, so my name is Ben Coe, as you said, and I was an early engineer at npm Incorporated. That's definitely where I got more into open source and more into actually test coverage related stuff, while I was there.

Today I am what's called a developer programs engineer at Google. Basically, we're on the cusp between an engineer and a developer advocacy type of role, where we still do quite a bit of engineering, and we do do a certain amount of speaking. It's kind of a nice combination of two skills that I enjoy doing.

In my time at npm and in my time at Google I've gotten involved in quite a few open source projects. Istanbul, as you say, yargs I got involved in when we started using it for quite a few things at npm... I'm a collaborator on the Node.js project, and I've contributed a little bit to things like V8.

I guess my other favorite pet thing I've been working on lately is conventional commits, which is how to write nice commit messages that can be read by machines... So that's one of my favorite pet projects right now.

**Amal Hussein:** That sounds so exciting. I feel like that's the ultimate flame war topic, standardizing commits, and conventions around how developers communicate their work in progress... So yeah, I'm sure you're having lots of fun with that.

So you've worked on a few different open source projects. You said yargs is a huge one... Tell folks a little bit about yargs.

**Benjamin Coe:** Basically, what was happening was in the early days of npm we were writing a lot of command line applications, just tiny little pieces of infrastructure that we needed to run on a server... And around this time Optimist was really popular, which was kind of the de facto popular argument parser in the Node community... And unfortunately, Substack had decided he was sick of writing an argument parser... Or I think he decided basically that it was a little too overwrought with features, and decided he just wanted to work on Minimist, and said Optimist is done.

This other person decided to fork Optimist and give it a yargs theme. It wasn't actually me, it was the person immediately before me who did this... And he made a picture of a pirate and slapped it up on the project. Long story short, he basically only really wanted to land some of the outstanding issues and wasn't too excited to run the project long-term... And I had just got there -- it was kind of the first open source project I really started nerding out on, and went really deep on it, and have been the core maintainer of it for the last six years or so now, just trying to keep it with a good feature set, and address bugs, and make sure Node's up to date... So that's the story of yargs.

**Divya:** Nice. It needs its own \[unintelligible 00:06:45.00\]

**Benjamin Coe:** Yeah... \[laughter\] Everything used to be more pirate-themed, and then I got feedback that it's actually really hard for folks to --

**Divya:** \[unintelligible 00:06:51.20\]

**Benjamin Coe:** Well, even if your English isn't your first language, it was making some of the docs just impossible to read, so...

**Divya:** That's fair.

**Benjamin Coe:** I love the pirate theme, but we've tried to use it selectively and not over-index on it in our docs, and stuff like that.

**Divya:** Yeah, that makes sense.

**Amal Hussein:** I always wondered what the naming conventions of that -- why you picked that name. I don't know, was it like you were at a bar and you were just like "Yarrr..."

**Divya:** \[laughs\]

**Benjamin Coe:** No, I have to give credit to the engineer who worked on it immediately before me for a month, because it was a stroke of genius. I have run with that stroke of genius. I can share \[unintelligible 00:07:28.07\] was their name maybe...?

**Amal Hussein:** Oh, that's awesome. Well, kudos to \[unintelligible 00:07:34.14\] We'll put it in the show notes, and confirm on that.

**Benjamin Coe:** Yeah.

**Amal Hussein:** So I think what's really interesting about you, Ben, is that you've been in the Node community for such a long time that I think you've really seen so many arcs and evolutions... And I think one of the benefits of being involved in a community that's about to hockey stick early on is that you get to really be part of the foundational toolset story. You get to contribute to things like argument parsers that are used by thousands of libraries... Bringing us to Istanbul, can you tell us a little bit about what is Istanbul and what motivated you to create it?

**Benjamin Coe:** \[08:12\] Yes, I like this story. Basically, I came into npm having a belief in test coverage, because I'd seen it used really effectively at the prior company I was at... And I've learned that it was a toolset that benefitted me, because I could really start to see the parts of the codebase that just really didn't' have any testing written for them; we'll talk later in this podcast about how test coverage isn't a perfect thing, but it can certainly tell you what parts of your codebase aren't very well-exercised, which is powerful... So I came into npm and I was an advocate of this... But the way that tests were written for the npm client, because it used a technology called TAP, where it creates a sub-process for every one of the unit tests that run, there actually wasn't really an easy methodology at the time for getting test coverage.

Istanbul already did exist at this time. There was another thing called blanket that existed, which was similar... And they would basically work that you instrumented your test suite - maybe it's a Mocha test suite, and it's able to do the real-time instrumentation, but they didn't work well with sub-processes.

So I basically was just talking with Isaac, who was the person who wrote npm originally, and Michael was in the office too, at the \[unintelligible 00:09:30.11\] just hang out with other -- in the early days it was just a bunch of JavaScript people who would hang out in the office together, basically... And it was like "Could we collect coverage for the sub-processes somehow and then stitch them all back together again? Would there be a way to see that the program had gone into a sub-process?" And Isaac was like "Well, I think you could hook it like this, and you could do this... But it sounds like it'd be really hard, and it wouldn't work very well."

So I kind of just got nerd-sniped by this conversation that we had, and went off on the weekend and started to work on this thing called NYC... And all that NYC was - this wrapper that would detect when a new process was being created, and it would do a bunch of magic so that you'd end up with Istanbul-instrumented code in that sub-process that ran.

So the tool that I started working on around Istanbul was NYC. It's a play on the term Istanbul, because there's a They Might Be Giants song where it's like "Can't go back to Constantinople."

**Divya:** Istanbul, not Constantinople...

**Benjamin Coe:** Not Constantinople... Yeah, so we picked NYC, which used to be New Amsterdam. That was the whole line of reasoning.

So that was how I started to get involved in Istanbul. It was a project that already existed; NYC was a layer on top of it. But NYC became really popular because it was just -- it turned out if it works really well for catching sub-processes, it just worked really well in general, where you could just toss the word NYC in front of any program and it would just magically start collecting coverage... And because of the way we designed it, it worked for most test runners, whether you were writing sub-processes or not sub-processes... It just was kind of really magical in how it worked.

Then we'd start to find bugs with Istanbul's instrumentation, and I started pitching in... And the main maintainer of Istanbul was kind of ready to move on a little bit from the project, so they allowed me to come in and deal with the stuff that was coming up working on NYC. They were really supportive and contributing to Istanbul, so... Gradually, I created the Istanbul Organization on GitHub, I refactored how a lot of the stuff worked, and ended up maintaining it as part of the work around this NYC project.

Istanbul, as I understand it, was kind of the v2 of something that grew up inside of Yahoo! originally. This approach to instrumentation was initially hammered out for Yahoo!'s testing needs.

**Amal Hussein:** \[11:58\] I think that's just super-interesting. This clarifies a lot of misconceptions I had up until about two minutes ago... I kind of associated the two projects as one and the same, in many respects. I was like "Oh, NYC seems like the executor binary for Istanbul in many ways. It's like the front-loader, or whatever."

So Istanbul was preexisting via Yahoo!, and you came in and helped augment it, it seems, and now you're a maintainer; it's just the way things go in open source.

**Benjamin Coe:** Exactly. That's like the majority of -- a lot of my open source has worked like that, and I think that's a valuable lesson for anyone taking part in open source. NYC is one of the few things I wrote from scratch, and I was the initial person of -- yargs, I was just one of the second folks who worked on it and gradually picked it up. That was the same as Istanbul as well. I was just an enthusiastic maintainer, and if you're too enthusiastic, eventually you own the puppy if you're not careful. \[laughter\]

**Amal Hussein:** That's the truth, yeah. I could think of dozens of folks that are in that same situation, where they're maintaining projects that they didn't create, Babel being, I think a really good example of that.

Okay, so we've got instrumentation as a whole... How does instrumentation work? I think I know, but how does it really work?

**Benjamin Coe:** This is a good question. I gave a talk on this a couple of years ago, and I went super-deep on researching the history... And it turns out the first test coverage was actually developed in 1962 by the military, weirdly enough...

**Amal Hussein:** Are you serious?

**Benjamin Coe:** I am 100% serious.

**Amal Hussein:** This is like the government just inventing everything first and not telling people about it, or something... Just kidding.

**Benjamin Coe:** I think another one of the early approaches was Gcov, which is the one that C programs can use... I might be wrong here, but I'm pretty sure that these early approaches and the ones that you see work more swapping out the dynamically-linked compilation you've done, and then it's just kind of putting counters up as you execute that compiled code...

**Amal Hussein:** Yeah, it's like a big watch. It's like the most minimal way you can implement a watch, in many ways... It's like "Has this code run? Has this code been executed?"

**Benjamin Coe:** Yeah, and I'm pretty sure in those cases it's more at the system level... But the way JavaScript code coverage has traditionally worked, and the way Blanket worked, and the way Istanbul worked was that they used something like Esprima, which is a JavaScript parser... Or Istanbul actually originally used Esprima, but moved to Babel actually; you mentioned Babel...

And what they actually do is they very cleverly take the code you've written and then replace all of the code with code that would do the same thing, but has counters in it. So basically they take every single statement in the entire codebase, and someone's actually gone into the trouble of backwards-engineering how you would write identical JavaScript that does the exact same thing, but has counters in it. And it turns out that mostly using parentheses, which allow you to -- if you just put parentheses around a random set of statements in JavaScript, I believe it returns the same first thing, but executes the second thing... Or am I backwards? It executes the first thing and then returns the second thing... Either way. I might be backwards. But the point is it basically puts parentheses around tons of your code, and then these counters are just running as your code runs normally, and then there's basically a global object, it keeps track of all those lines of code that were run, and then when your thing's done running, that global object gets written somewhere, and now you're able to do a test coverage report. That's how Istanbul works... That's how NYC works, because NYC would run Istanbul and then get that report out the other end.

\[15:45\] The thing I've been going really deep on for the last couple of years is the V8 JavaScript engine; it actually has test coverage built into it now, and that test coverage works a little differently, where your JavaScript code doesn't execute -- like, when you run code in the web browser and Node.js, your JavaScript code doesn't get turned into a tree and executed directly. It actually gets turned into an intermediate bytecode representation...

If anyone remembers -- everyone's heard about the Java JVM, where the Java code you write actually gets turned into virtual machine code that runs in the JVM... JavaScript actually works really similarly. And V8 now lets you turn on coverage, and then as it writes this bytecode that's going to go into actually executing in your web browser to give you a pop-up or whatever, it puts additional bytecode in that also counts how many times those statements were called... So it happens kind of a layer up from the JavaScript code. I'm really excited about this, because it means that we're able to collect coverage without creating this really munged up code that has parentheses thrown into it, and has a global object that you're using to track stuff.

**Amal Hussein:** Yeah, you're pushing the responsibility down to the compiler, and you're not mucking with the code, so there's no integrity questions at all... That's really interesting. Because I literally was thinking earlier, while listening to you, I was like "It sounds like this coverage process could actually technically be moved to the compiler...", because in theory, that's maybe the best place to watch this. It feels a little bit like an afterthought to be injecting things into the code, or parsing it and rewriting the code in such a way... It's pretty fascinating stuff.

**Benjamin Coe:** I agree. And part of what motivated me on this path too was -- well, two things. First thing - Istanbul would break code pretty regularly. There's edge case features in JavaScript that some programs rely on... Like, if you have a named function, some people will look at the function.name property and do something with it. So if you're putting parentheses around that function, or if you're turning it into an anonymous function as part of your coverage step, suddenly you're losing that name variable. That was a bug we fixed a bunch of times.

And then the other thing was that we weren't able to handle ESM modules, basically, but the V8 engine was able to instrument ESM modules... So that was another motivation.

**Amal Hussein:** Wow, that's interesting. I was just thinking, this V8 feature - I think that's what's probably powering lines of coverage. If you're doing some performance testing, you can see how much of your code is being executed on the page, and I'm assuming that's what's powering that. And DevTools, right?

**Benjamin Coe:** I would guess so, yeah.

**Amal Hussein:** Okay, that's interesting.

**Benjamin Coe:** Yeah, because you can't turn it on in DevTools, and then Node.js is able to turn it on and use the same information.

**Amal Hussein:** Very cool.

**Divya:** So that's related to the tool that you were mentioning earlier (did you mention it earlier?) about building a native V8 code coverage tool. I think it was when you listed the list of open source projects you're working on. I just pulled it up. I think it's called C8.

**Benjamin Coe:** Correct.

**Divya:** Can you speak more to that project, and what the implementation is with regards to that, and how that differs with --

**Benjamin Coe:** Yeah, totally. This is my pet project, that at times I've been ready to throw it out the window... But I've been working on it for three years now. Basically, what happened was the Node project itself is a really big codebase; it's quite a few lines of JavaScript, compared to a lot of npm modules people write... And the way the Node codebase worked was it used NYC -- coverage is important to the Node.js project, because it gives new contributors an entry point to contribute. A really easy way to contribute is to look for something that doesn't have a test written for it, and write a test for that. And I think that's one of the real values of coverage if you're a big open source project.

So the Node project relied on this, and we published nightly coverage reports, but we were using NYC to instrument. NYC does have a performance impact on your average project that's running it, but for most tiny JavaScript projects you're not gonna notice if your test took ten seconds to run, versus eight seconds to run, or something. But on the Node codebase, with this pre-instrumentation process, it was more like a 200% or 300% decrease in performance... So instead of the suite taking 15 minutes to run, it was taking 45 minutes to run, or something.

\[20:18\] So around this time, one, I was concerned about just how long it was taking to run the \[unintelligible 00:20:22.18\] coverage; it felt like it was making it so people weren't able to do it themselves. Around the same time ESM was starting to get some traction, and there was no way to track coverage for ECMAScript modules... So there was a twofold motivation - I wanted to see if this could speed up the Node.js codebase, and I wanted to make sure I supported ECMAScript modules. So I started to work on the C8 project years ago, when the V8 coverage was pretty immature in the V8 codebase, ECMAScript modules were pretty immature... I didn't know if the whole project would work, basically. And I'd never contributed to V8 before.

The first time I started really writing C++ code was when I started this C8 project. But it ended up being really fun. The initial versions of coverage in V8 had a ton of holes in it; it just didn't quite work very well. Because I'd become pretty obsessive about coverage working on Istanbul and NYC for years, I kind of knew what the community wanted. It was just missing certain things. It couldn't handle \[unintelligible 00:21:30.17\] statements, or it couldn't handle ternary operators; there were just random things that the coverage couldn't do, and I knew if I was gonna expose this to the wider community, that the first question I would get is why doesn't it support X, or why doesn't it support Y.

So anyway, I wrote the C8 library, I called it really experimental, I started contributing to V8 at the same time, where I would work with the folks in V8 to add a new coverage thing to the compiler... Gradually, it became pretty good. So long story short, C8 is actually what Node.js itself is using now, and it runs about 5 or 6 times faster than NYC ran... So you actually can run the whole Node codebase with coverage turned on, and it runs at about 80% of the speed as if you weren't running it with coverage. It's a little slower, but not so much slower than you can't do it. And the C8 project really grew out of this close relationship with trying to improve Node's own coverage.

So I like C8 a lot... I think because it's grown so slowly, people don't know about it as much. It's also definitely grown with a specific engineering need, which is I wanted to help out the Node project...

**Divya:** So it's very specific to testing, specifically for V8, with the adaptation -- well, with the use case of testing Node faster.

**Benjamin Coe:** Yeah, I mean -- you can use it basically in any context that you would use NYC. I use it for pretty much all of my new projects. Funny enough, the instrumentation approach that Istanbul uses actually does at this time catch more edge cases that just aren't covered in the compiler yet... And every time you need to catch one of those new instances, you have to go write C++ code, maybe make a change to the bytecode generator... The turnaround is a little slower in getting the features into C8 than it would be to just maybe update the Babel parser.

**Divya:** Yeah, that's fair.

**Break:** \[23:22\]

**Amal Hussein:** So Ben, that was a super-brain-dive/deep-dive...

**Benjamin Coe:** Yeah, I'm sorry...

**Amal Hussein:** Is that even a term?

**Benjamin Coe:** Yeah, I got nerd-sniped by Divya...

**Divya:** Now it is... It's a term now.

**Amal Hussein:** Now it is, right? I've just made fetch happen. That's also another library, I think, Make Fetch Happen... It's a Node Fetch implementation, or something... \[laughs\] Anyways... So how are folks using testing instrumentation in their project? We've seen this mass adoption of NYC with the most popular testing libs nowadays... It's their kind of powering the coverage experience by default, and for many libs - I think Jest, Puppeteer was another that's there by default; I think Cypress is using it as well... It was not there by default for projects like Mocha; I think it is there for Tap...

So you know, there's a lot of people using this code, there's definitely some edge cases, like you said, some extreme edge cases with JavaScript implementations, the things that could break... What's that arc been like for you as a maintainer, to have that kind of growth?

**Benjamin Coe:** \[27:52\] Yeah, it's been really interesting. For me, the description that comes to mind is "exciting", because when I worked on NYC initially I really did think of it as scratching an edge case that we had for npm, which was to deal with the sub-processes, so we could actually test them... And it was surprising to me to see it become so popular across the whole community. I think it really did help drive test coverage in general, having (like you say) these integrated ways of doing it; having it so easily done just right inside of Jest, or having it right inside of a technology like Tap made it -- it really drove adoption.

What's also been really neat to me is that -- I've worked with the Jest folks to help them with any bugs they've bumped into... And Jest actually supports this, a V8-based approach too, experimentally, so I've worked with them to support that alternative way of doing coverage, so Jest can do both.

So for me -- it's like everything being involved in... Like you said early on in this conversation, being on this hockey stick-shaped thing... I think what I was so surprised about -- about a lot of things that happened to me in my time at npm was that so many things were hockey stick-shaped. Not just adoption of the community in general, but you could write a tool like yargs, and suddenly it has a bajillion downloads a month... And I was finding that to be true with Istanbul, and all these things. They were all kind of growing at this hockey stick rate. I guess pride, mixed with a healthy amount of being frightened, and feeling humble as well by the whole situation... \[laughter\] I think that would describe it.

**Amal Hussein:** Yeah, it's one thing to have your tool be adopted and go through this hockey stick growth early on in an ecosystem, and it's another thing for that tool to stay the test of time. I think there's something to be said for that as well. The API design was good enough, and the implementation is good enough to survive through multiple Node versions, multiple implementations of JavaScript etc. I think there's something to appreciate there.

**Divya:** And reliable, too. It's not just like a flash in the pan... Which I think we've talked about before, that a lot of open source tools -- not to rain on parades or whatever, because trends can be good sometimes, but there is something to be said for open source projects that are very intentional, and that are true to the test of time; I can't think of that phrase, but yeah...

**Amal Hussein:** Stand the test of time.

**Divya:** Stand the test of time, yes.

**Benjamin Coe:** Yeah, I've definitely found my approach -- I really am methodical and like to garden these projects for a long time. So they're not the most exciting thing in the world, but I've found it works, it can get a really good adoption, and it's been really beneficial to my career. When I took my job at Google, they'd already heard of some of my projects, which was really great.

**Amal Hussein:** They're probably using it, too. I mean, did you find anyone at Google use -- I mean, I'm sure some of the open source tools, for sure...

**Divya:** A hundred percent.

**Amal Hussein:** ...but I don't know, were folks using it internally at Google? I think that's the real question...

**Benjamin Coe:** They were... Some folks were using yargs. Actually, less than you think, but some people were using yargs for some internal projects, for sure.

**Amal Hussein:** That's cool, that's cool. That's awesome. So yargs was checked into the Google monorepo source; that's very exciting... \[laughs\] Congratulations, Ben. You've made it, I think... \[laughs\] No, that's really exciting.

So getting back into community stuff - there's so much perception around test coverage, and everyone trying to get to 100%... And 100% is certainly useful, for sure, but is it the end-all-be-all? Does 100% mean no bugs? And this is a trick question, of course.

**Benjamin Coe:** \[31:48\] One thing I'd like to bring up -- and I've brought it up already earlier in this podcast... One real strength I see of coverage in relation to the Node project is that it tells people areas where they could contribute easily... Because you do wanna try to have test coverage of most core components of a large open source project like Node. So giving people that entry point to contribute I think is amazing. To your point, 100% coverage is not no bugs, in any regard... Because you might codify the weird, broken behavior, right?

**Amal Hussein:** It's certainly, I think, a metric. It's a metric to the health of a codebase. But coverage doesn't tell you the quality of your -- it doesn't say that these tests are quality tests. I mean, you could just have a test that runs a high-level function, and just because it does that, you all of a sudden have all this coverage... But you know, your branching isn't there, or whatever else. I feel like there's some flaws there with test coverage being used as this metric for -- I think a lot of times it's synonymous with quality.

**Benjamin Coe:** I think that's a really interesting point. I'll give you one really brief story with yargs. It had not the best coverage when I took over the project...

**Amal Hussein:** It's ironic... \[laughs\]

**Benjamin Coe:** I still would not call it a quality codebase maybe, but it's maybe a better codebase in some ways. But long story short, getting the coverage up to 100%, which I did early on in the yargs project, did not make the project good. It put me in a position where I could start refactoring the codebase and be more confident that moving this function over here to a better-named file wasn't breaking 50 things... So it gave me a little bit more of a safety net that I could improve the quality of the codebase... And I think this is one of the real strengths of coverage - when you go into a codebase that is difficult to work in, or it's pretty crufty, getting the coverage and the testing to the point where "Okay, now I can start moving it towards a design that I think is better."

**Amal Hussein:** Yeah.

**Divya:** Yeah, I guess it makes it so that you make sure that when you are migrating stuff, you're not breaking anything. So you're just like "Let me test everything and make sure there's good coverage", and then when you want to move stuff over from legacy, you are likely not to break things along the way, which I think is a really good way of thinking about it.

There's actually a really interesting -- talking about a point that \[unintelligible 00:34:15.04\] faking code coverage... There was a tool that I heard about a long time ago; I think it was in the Ruby community) called Covernor, which Coraline Ada Ehmke wrote, which was kind of a joke tool... It was just like "Don't worry about coverage. Here's a tool that allows you to kind of fake 100% test coverage." I think the point she was making is that a lot of the times people aim for this number... And you can get the number really easily, because there's a lot of loopholes that you can jump through in order to get there, but it's not gonna give you the true meaning of what having 100% coverage is.

**Benjamin Coe:** Yeah, I'd love to speak to that point. I'll use yargs as an example again. I inherited yargs -- it had a way broader feature set than someone might guess for an argument parser... And I didn't even know about some of the features that had snuck into it over the years. There were features that were new to me...

So I'd run coverage and I'd see these 45 lines of code aren't covered, and I'd be like "What the heck are these 45 lines of code doing?" So the approach I always take to improving coverage in a codebase that's maybe unfamiliar to me, or maybe a little crufty, or whatever, is make sure you can really describe -- the tests should kind of describe the functionality. "This feature should behave like this; this feature should behave like this, this feature should behave like this." It shouldn't be "Lines 135 to 167 in file foo.js." If your tests are just exercising some lines of code, I don't think you're gonna have well-written tests.

\[36:01\] I think coverage is a good indicator of "Shoot, we haven't covered these lines of code." But it's not a substitute for writing well-written tests that are descriptive and actually explain what the heck they're testing. That's my two cents.

**Divya:** That's actually a really good point, because some coverage tools it's like "These lines have been covered, therefore they have been tested", which is probably not the case... Like, \[unintelligible 00:36:24.03\] does the thing that it should be doing... So yeah.

**Amal Hussein:** Yeah. So coverage tools -- I guess maybe you can clarify that... It's making sure "This line has been executed during this test run", right? If you have a function that's being called, that's not being used, we would still get coverage for that.

**Benjamin Coe:** Yeah. So the way I think about it, honestly, is you're not necessarily trying to write tests that target every single function in your codebase even. You definitely are trying to think of the -- I'm a somewhat product-oriented mind, and I definitely think of my open source as a product... Think of how people are actually using your product and what the public interfaces of that are, and that's where you wanna drive up the coverage, and then that should be exercising your internal helper function. Maybe it's not even attractive to test some of your internal functions, because they're private, or something; maybe you're using TypeScript and you've marked them as private. Now, if you do run coverage and you see this helper that's been run zero times, maybe you can delete it, right? Missed lines of code are maybe not an indicator you should be writing more tests; it could be an indicator that you have something that's stale in the codebase too, right?

**Amal Hussein:** Yeah, that's a very interesting way to look at that. I think there's this whole argument of what to test - are you testing your implementation or the output? And how testing the implementation really creates brittle tests in many ways, because you have to constantly change your tests when you change your code... Sometimes you wanna be able to refactor your code and run your tests and everything should still work, because you're testing the output, not the implementation...

I think that's really challenging with unit tests in particular, because I think it's very hard to draw the line of implementation versus output with unit tests... Because you are testing a unit of work, but you're calling a function that calls a bunch of other functions. It's a tough distinction to draw.

**Benjamin Coe:** Yeah. What I will say is that I do think having a slight focus on coverage has helped me get better at writing unit tests, because I'm able to see that "Well, if I test the obvious interface into the program, I have good coverage." I might even have 100% coverage. Whereas I think before I thought of coverage, your brain is more like "Oh, I'd better test foo internal function XYZ and make sure that it works for all of its inputs", even though you're gonna exercise that function for all of its inputs when you're using the actual public method that is the interface into it.

**Amal Hussein:** Right, yeah. I think that's where the whole branching comes into play. Looking at the branching metrics for coverage help you suss that out, right? They help surface logic branches that you may be missing, so...

**Benjamin Coe:** Definitely, yeah.

**Amal Hussein:** ...all the else cases, you know? \[laughs\] Or the if cases, sometimes.

**Break:** \[39:20\]

**Amal Hussein:** I'd love to talk to you a little bit about what you see as the future of testing coverage, and just testing maybe in general, more broadly, in the JavaScript community... I know you're very humble and you're like "I'm not a testing authority", but you kind of are... So where are things heading?

**Benjamin Coe:** Yeah, I've actually been less involved in Istanbul in the last couple of years, because I do believe in this integration with the engine itself. I think it's a better design, so I'm kind of hopeful some of that stuff can be pushed into the engine. I think coverage is an important part of testing in general, and I think having it be built right into the platform is the right place for it.

Similarly, you see the popularity of Jest. And Jest gives you coverage, it gives you good assertion frameworks, it gives you a lot of the things that you used to have to kind of add a la carte to your testing setup. I definitely do feel like these integrated things like Jest are probably gonna continue to be really popular in the community... And this maybe speaks to the community maturing in a certain way. There's not necessarily the same tinkerers early on who were really excited to figure out their own custom setup, with their own assertion library, and their own coverage library, and their own mix and match everything together... I think people are less excited about that.

Similarly, I'm excited to push more of this stuff into Node itself. I've been working on the coverage in Node; so you can just turn on coverage in Node. But I've also been working on pretty stack traces in Node, so that it understands source maps, and can give you a stack trace of your TypeScript codebase without you having to install a tool to do that. Just trying to get you more batteries included stuff I think is really exciting.

**Amal Hussein:** Yeah, that's awesome. The more we can abstract into the platform or the tooling as a default, that's just more stuff we can do with the time saved, you know what I mean? That's awesome.

**Divya:** Also, I'm curious -- well, the way that code is written, at least in the tiny subset of the industry that I'm in, which is JAMStack, everything is serverless, and you write a bunch of serverless functions, which means a lot of things are kind of isolated... What do you think test coverage looks like in those kinds of environments? The idea being that serverless functions, so to speak, run in isolation from the rest of your projects.

Let's say you have a Node project, and then this is like a serverless thing, and then it goes and calls a database and there's lots of things that happen kind of outside of your control. So what does that mean for test coverage? Because now a lot of the logic no longer lives in your main codebase, so to speak; it kind of lives in the cloud.

**Benjamin Coe:** That's a good question. But first off, I do think -- like, I haven't seen this done too widely yet, but I think people are gonna start doing more coverage instrumentation of actual running applications. There's advantages to doing so; it can give you ideas of hot spots in your application where you're calling the same line of code a million times when you serve users throughout the day... And that kind of gives you an idea of where you should optimize your code.

I think one approach people might start taking is instrumenting -- you know, kind of like a canary application, where you have a canary application that runs the next version of your codebase to make sure that it's healthy. Maybe people are running a canary version with instrumentation like coverage and maybe telemetry data for the first six hours after deployment, and trying to collect data that way...

\[44:04\] I think that's one of the really exciting things about pushing this stuff towards the actual engines like V8 - you can actually get it so you can have that instrumentation and still run at a fairly fast rate, such that you're not impacting customers too much.

I think everyone else absolutely hated it at npm - I use this one library called Nock to try to test the HTTP layer... So you kind of test your program up to the point when you have that external dependency, like the external function you're gonna invoke... And one approach, if it's (say) an HTTP API you're interacting with, Nock's such a really nice tool for testing right up to that point.

Another great approach is using something like sign-in to actually do a mock of the method call you're actually gonna call in your codebase that's gonna cause that external behavior... I think those approaches can work.

The thing with mocking and with anything like that is you're testing your vision of how the external thing is gonna work. It's not necessarily reality. Like all things, it's fraught with peril.

**Divya:** That is true. I often actually find that - again, in projects that I've worked on, there is zero testing for any of the serverless things. You're right. It's just the assumption that it works, and then maybe locally, whatever calls that particular function, we just mock it out. So it's not actually the function execution that's checked at all, we just assume that that particular external logic works, and then we just test that it gets the data appropriately... Which then gets into issues, for instance, like when we aren't handling certain statuses properly... Like, we're giving a user 503 when it's not that the service is unavailable, it's just that they haven't logged in properly, or their login is incorrect, or their token is incorrect, or expired. So then that's an issue with regards to how we've written that particular service. We can't check for that, because then users will hit an error that is unexpected, and the test coverage doesn't speak to that at all.

**Benjamin Coe:** Yeah, and I think these boundary points are almost always where bugs happen.

**Divya:** Yeah, exactly.

**Benjamin Coe:** This is definitely a challenge for engineering, yeah.

**Amal Hussein:** Yeah. I think this is where you just need a robot; you just need to write a bot that runs your code end-to-end. I wish end-to-end tests weren't so expensive. They're expensive to run, expensive to write, expensive to maintain, so it's just very challenging. But anyways...

Ben, this has been a really fascinating discussion. I'd love to kind of close this node out with project sustainability. Clearly, you've been a maintainer for some pretty key projects for quite a number of years... Are foundations the next step for these really important projects? Do you see that as a path forward? And just in general, are you looking for help with maintenance? What's the sustainability story for the projects that you're overseeing?

**Benjamin Coe:** Yeah, I've explored foundations -- I've definitely discussed with other projects that are in foundations, how they've found the experience, and it's something I'm very open to with any of the work I've contributed to, like yargs or Istanbul. I think \[unintelligible 00:47:11.23\] what interests me would probably be more in like the legal advice you can get, and having more structure around potentially reaching your community around the project... And like you say, sustainability; making sure that there's a long-term plan for this thing that a lot of folks rely on... For example how we approach security.

What I have been told is you don't magically get a ton of maintainers because you joined a foundation... Like, "Oh, here's our pool of yargs maintainers that were just waiting to write command line parsers." Kind of having a core of maintainers I think is always one of the most difficult parts of an open source project... And I've found throughout the years -- sometimes I'll have a pool of 2-3 folks who are doing incredible work on a project, and it's almost always that it's a specific task they had for work, so they wanted to get it built... And I very much encourage those types of contributions and appreciate them, but definitely, it ebbs and flows, the number of folks who are working on yargs, or Istanbul, or any of these projects.

\[48:10\] So I think the story for sustainability does have to be that as a maintainer you just need to not be too stressed out if your issues are counting up a little bit... And the issues that I try to put the most attention to are if we have a major, for instance, security issue. I do treat that as a P0. And because of my role at Google, where I know some googlers are using some of the libraries, and I don't feel too bad spending a couple hours out of my work week if we would have a P0 security issue I had to address.

**Amal Hussein:** Yeah.

**Benjamin Coe:** So I've had to learn -- like, I do not code as much as I did eight years ago; I'm not spending my entire weekend working on yargs. I just can't anymore, and then feel happy and healthy when I go in on a Monday to my workweek. So I'm just learning to choose selectively the type of work I work on, make sure I do the things that are gonna be most important to the community, like making sure that P0 bugs are fixed, and P0 security issues are fixed.

**Divya:** Yeah, I actually like that, because it's more sustainable that way for yourself and for the project as well... Because I've seen a lot of people just burn out completely. Obviously, at the start of a project or at the beginning stages you're super-excited about it, and you're trying to get it off the ground, and then users are climbing, downloads are climbing, and then you're working on it all the time, to the point where you just completely burn out... And that really sucks. I've seen projects do that, where there's a lot of potential, and people use it, and then there's like a drop-off point, because the maintainer just was like "I can't do this anymore." It's either because they burned themselves out, or the community asked so much, and the climbing number of issues totally got to them, and they were like "I can't handle it.

**Benjamin Coe:** Yeah. I'm going on six or seven years working on some of these projects... It just really has to be seen as a marathon, not as a sprint, if you're interested in building these things that the communities can use for a long period of time. I think it's just important to tell yourself you can't work a second workday every night, working on open source, for seven years. You're gonna burn yourself out, because you're gonna be spending 80 hours a week working each week.

**Amal Hussein:** Yeah.

**Benjamin Coe:** And this is where I see foundations attractive, too... Because I think foundations definitely have their mind on some of the same things, which is how we can keep something sustainable for an extended period of time.

**Divya:** \[50:34\] Yeah. I think there's pros and cons. The pro is you're within a foundation, so there's a lot more process. Also, within the Node Foundation there's a process around how to manage the community, so there's not a lot of people yelling at contributors, or back and forth, between the maintainers and contributors. There's more of a balance. But the downside to that also is that foundations sometimes move very slowly, and that's sometimes that I've heard a lot of people, where they're like, they don't wanna join the Node Foundation, for example, because there's a lot of process, which means that they can't move as quickly, or iterate, and have as much control anymore. Again, it's a trade-off that you have to make for yourself in the project.

**Amal Hussein:** Yeah, for sure. I don't know, I think that the open source sustainability problem is one that's -- I don't know if the sun is ever gonna set on that... But it interesting to hear how different maintainers tackle it.

**Divya:** It's interesting - we've talked about this before, but there's two ways in which open source sustainability has been managed. A lot of people are like "I can do it by myself. I'm a sole maintainer, and I manage all of my projects with myself and the contributors", and that model I've not seen work very successfully.

The ones that I've seen that are the most successful is the foundation model, or a company adopts all these projects and they run with it model. And those are the two that I see more long-term with. Obviously, one is slightly more capitalistic than the other. It depends on who you ask.

**Amal Hussein:** Wait, what's capitalism, Divya? Just kidding... \[laughter\]

**Divya:** Well, just open a tab, research GameStop...

**Amal Hussein:** Oh yes, yes... That... OMG.

**Benjamin Coe:** I think of it more as patronage, in the \[52:11\] kind of sense.

**Divya:** Yeah, exactly. \[laughter\]

**Amal Hussein:** The whole free and open software story, and how companies make so much money off of it and don't contribute back in the way that they should. I mean, something's gotta give at some point. It doesn't feel very sustainable to me in the long-term, given software trajectories.

I don't wanna live in a world full of FANG company sponsored software. Everybody's using a tool that's made by Netflix, Google, Microsoft... That's no fun.

**Benjamin Coe:** I definitely loved the early times in Node when you had these interesting characters like Substack, and Isaac, and... Being able to keep that, but being able to keep that on a 20-year scale - I don't think anyone's answered that question.

**Divya:** No...

**Amal Hussein:** Well, that said, it's been a pleasure talking with you, Ben. Thank you so much for the innovative contributions that you have, but also - you're pushing things forward, but also maintaining a sense of continuity for key projects within the ecosystem. Thank you for everything that you do, and we'll catch you -- I don't know, we'll have to come back and talk more about all of the nerd topics that we weren't able to heavy-click into.

**Divya:** Yeah. I think you're super-lowkey-awesome. I was talking to someone about this, where I was just like "Ben is lowkey very instrumental in the community, and is also very down to earth." You don't talk about yourself a lot, so people don't know who you are... But if you go through your repos and you look at the history of Node and JavaScript, you pop up a lot. \[laughs\]

**Amal Hussein:** Yeah, pretty instrumental.

**Benjamin Coe:** I'm blushing now, but...

**Amal Hussein:** Yeah. And then -- oh, we didn't even get to talk about Wombat Dressing Room, which is this really cool project that you worked on a couple years ago; or maybe a year and a half, or something ago... I mean, it was publicly released at that point. It's this whole staging process for npm packages, that Google helped open source, and Ben was a key part of that project... And I'm sure also the initiative to open source it. It's very exciting, you should check it out. We'll put it in the show notes... But thank you, Ben. We're bowing. Thank you, sensei Ben.

**Benjamin Coe:** I really appreciate being on the show. I haven't done much talking recently, so it was really fun. Thanks for thinking of me and having me.

**Divya:** Thank you, sensei Ben... \[laughs\]

**Amal Hussein:** Thank you...

**Outro:** \[54:45\]

**\[Robot voice\]** Everyone, JavaScript is so cool! Have you heard?
