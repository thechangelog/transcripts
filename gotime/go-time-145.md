**Mat Ryer:** Hello, and welcome to Go Time. I'm Mat Ryer. Today we're talking about fuzzing. We're gonna find out what it is and how we can use it to make our code better... And we're gonna take a close look at a new draft design that discusses bringing fuzzing as a first-class concern to Go. It's very exciting, and we're lucky to be joined by the author of that draft design, Katie Hockman. Hello, Katie.

**Katie Hockman:** Hi, Mat. How's it going?

**Mat Ryer:** Good! Welcome to the show. Thanks for coming.

**Katie Hockman:** Thank you for having me.

**Mat Ryer:** We're also joined by Filippo Valsorda. Hello, Filippo.

**Filippo Valsorda:** Hey, Mat. Good to be back.

**Mat Ryer:** Always a pleasure to have you here, sir.

**Filippo Valsorda:** Same, same, same. Looking forward to it.

**Mat Ryer:** \[unintelligible 00:02:35.25\] Thank you. And we're also joined by Roberto Clapis. Hello, Roberto.

**Roberto Clapis:** Seven hundred and forty eight.

**Mat Ryer:** \[laughs\] Okay... Is that a fuzzed response?

**Roberto Clapis:** Yeah. I wanted to see if you crash to an integer. \[laughter\]

**Mat Ryer:** I've not crushed though, nor am I panicking. I've continued... In fact, that was in my unit test earlier, so I was ready for it. But thank you very much, welcome to the show.

**Roberto Clapis:** Thanks.

**Filippo Valsorda:** Can we take a second to acknowledge how Mat rolled the r's for both the Italian names?

**Roberto Clapis:** Yeah, that was good. \[applause\]

**Mat Ryer:** Oh, it's my pleasure. It's a lovely accent, so I always like to listen to it and have you on for that purpose, really. So if that's all you contribute to this show, then that's fine by me.

**Roberto Clapis:** That's our intention.

**Mat Ryer:** So maybe we should start at the beginning then, for anybody not familiar... What is fuzzing, and what's it for?

**Katie Hockman:** Yeah, I can give you a quick summary to that. Basically, fuzzing is a form of automated testing that can manipulate inputs in a way they can find bugs that maybe you wouldn't otherwise be able to find on your own. In my mind, it's kind of a supplement to some of the existing testing that people already do, and it's pretty common, like unit testing or integration testing... But what sets it apart is it actually does things on its own, and kind of runs continuously; so it's kind of smart, in a way. If it has some interesting inputs, it can actually use some intelligence to go in and mutate those inputs in interesting and meaningful ways, to find crashes and panics that wouldn't easily be otherwise found if the developer had to try to identify them themself.

**Mat Ryer:** \[00:04:22.08\] That's interesting then. You talk about this intelligence. It isn't just random then. There's something else going on.

**Katie Hockman:** Yeah, and I think it's really tricky, because there's no industry standard on how these kinds of things work. I mean, there are definitely tons of different ways that you can mutate things randomly, and then there's also a lot of interesting discussion around how do you prioritize which corpus entries - and I'll talk a little bit more about what corpuses are later, but basically which inputs to modify and how to modify them, and how smart it should really be. All those things are kind of up in the air, and a lot of different fuzzers work differently, which is actually kind of cool in my mind.

**Mat Ryer:** Yeah, that's interesting. So what situations is it good for helping out in then? Let's say the strings.split example from the standard library. You pass in a string and you pass in a separator, and it basically just splits that string wherever it finds that separator, and returns a slice of the components, the segments that it found. Would that be a good candidate for fuzzing?

**Katie Hockman:** Yeah, I think it could be, and I think it would also be -- and Filippo and Rob will have a lot of really good things to add too, in terms of who has used fuzzers in the past, and how they've usually had a security context around them... And what this proposal has been trying to do is actually get fuzzing into the hands of non-security experts and non-security developers, and have other people use them.

In the string split example, if there's an off-by-one error somewhere, or maybe some issue that can cause a panic, or some input that doesn't meet some specific property, it might be easier to find with fuzzing... And I think it would be a really good package to test, or a good function to test in that package, yeah.

**Mat Ryer:** Yeah, because you hear that common use cases are things like parsers, and things that are doing decoding, because they are dealing with usually unknown in advance structures that maybe they have to infer along the way... So there is a lot of room in that kind of operation for things to go wrong, or unexpected input. Just things that you would never imagine anyone would pass in. So yeah, that's what separates it out from unit tests really, I guess, because unit tests are very deliberate, aren't they?

**Katie Hockman:** Yeah, they are. You give a set of inputs, and you run something, and then you look at the output; it's very clear, and you have to say "These are the inputs that I think are important, that should test it well enough, and then it should have this output." Fuzzing, I think, can apply to a lot of context beyond parsers and things like that, because there's a reason that we have unit tests everywhere, and there's a reason we don't just test parsers, or difficult cryptography, or things like that.

There's a reason we test everything, and it's because we don't always know where the bugs in our code are. We have default assumptions that our code works, and so we just kind of test it, kind of just in good faith sometimes, just to prove that it works, and I think a fuzzing engine should be pretty agnostic, in the sense that it doesn't assume that it's gonna work... And it's gonna go and maybe find things that you didn't really realize could actually break, or something that you had overlooked, that you didn't realize is a dependency somewhere else that might break.

**Roberto Clapis:** Right. I would also add that when you write the fuzz test target, you want to expect on properties of the stuff that you work on. Instead, when you work on unit tests, you expect some output. For example, in the strings.split case you can say "I'm going to call a strings.split with two parameters, and I'm going to check that the second one never appears in the returned slices", because the separator should never appear.

\[00:08:02.10\] And that is something you would generally not test in a unit test. Or you're going to check that the returned slices are less than the characters of the string. If you return more characters than there are there must be a problem, and this is stuff that normally doesn't get tested... I'm pretty bad at writing tests, but whenever I unit-test, I don't test for this kind of condition.

**Filippo Valsorda:** Yeah, and another example of something that would be good to check in a fuzz test of the split function is that if you put it back together, putting the separators between the things you split, do you get back the original string? If you do, it probably did its job right. And that's the kind of stuff that fuzzers are pretty good at finding, because they can just go and find some input where -- I don't know, the separator is at the end, and is missing one character, or I don't know, where the thing doesn't roundtrip.

**Roberto Clapis:** That gives you even more, because then you now are testing for an additional property, which is if you string split and then you string join, you must get the same thing out... Which is a normal expectation. When I use the strings package, I expect that to be true... But I don't know if there is anyone that has been fuzzing that to make sure that that is actually true... Especially in edge cases like nil slices, or slices of empty strings, what happens would be interesting to see.

**Mat Ryer:** Yeah. So there is an element then of design here. You have to think of that kind of thing, that property, to then model it in a fuzz test, right? It's not just you just point it to a method and it just fills the method up with nonsense.

**Katie Hockman:** I think yes and no. I think it can. I think it depends on what you're using it for. You could just throw random input at a function to see if it panics. That is a property that can be tested, and you don't have to know anything about it. I think it can also be used for things like differential testing, or property testing, or a lot of different things. It can be a supplement to unit tests, but it can also just go find a crash, and you could probably do that in a couple lines with a little thought.

**Filippo Valsorda:** Differential testing is something that honestly works a little too well. The idea is that there are multiple implementations of the same thing. For example, big number implementations - it doesn't matter what library you use; if you multiply two arbitrary precision decimals, you should get the same arbitrary precision decimal out. Sounds right, right? Oh, my friend, how many bugs fuzzers have found just by telling them "Yup, so here's two functions that need to return the same thing. Cool. Go!" I get emails because one of the ones that are tested is the Go one, and I get emails when there's a mismatch between the Go one and some other implementation, and... Oh, boy. Yup, multi-precision is hard. So yeah, that's an excellent example.

**Roberto Clapis:** One thing that I did with differential testing was at one point in Go a bug was fixed - a problem with header parsing - and I thought "This looks easy to find with a fuzzer", so I just imported fasthttp and the standard HTTP libraries, both in Go; I ran go-fuzz for 25 minutes and I found a bug. The bug there was just fixed, and had been there for 12 years. So yeah, if you want to assert for a property and the case was "I want the header set to be identical", it's quite easy to find problems. And if I recall correctly, when at one point the JSON package was heavily optimized, and there was a differential fuzzer in place that checked the old version and the new version would parse the JSON the same way... And it found a bug before it hit a stable release, which would have been kind of bad. So that was another success story of fuzzing not for security reasons, that was just yet another test.

**Mat Ryer:** So how can you do fuzzing in Go today then? What are the choices that we have?

**Katie Hockman:** \[00:12:03.27\] There are a few. I can speak to at least one or two. I think the common one is go-fuzz. That's the one that everyone knows about. That was written primarily by Dmitry Vyukov. It's really amazing; I've spoken to him about it, and he's actually given a lot of really good feedback into the proposal that's out there now. So it's been nice to partner with him a little bit on that too, and have him give some feedback on that. It's really neat, and if you haven't used it, you should definitely check it out.

And then another tool that somebody wrote was fzgo. I think that was kind of a proof of concept written mostly by the \[unintelligible 00:12:45.20\] it sounded like, to try to integrate it a little bit more kind of with the go command, and making it look more like an end-to-end tool that wouldn't have to have so many build steps like go-fuzz has... And add a little bit of support for modules, I think, was part of that... Or maybe that was a part of go-fuzz. But there's been different features that both of them have tried to basically model and see how they would work... And I think fzgo was meant to be kind of a prototype or an experiment of what it might look like as a final approach.

**Mat Ryer:** And you mentioned build steps there then... So it isn't just a tool that runs at runtime; there's other things that happen. Is there some kind of introspection that happens, or reflection on the types, and things? Is it kind of generic, in some way?

**Katie Hockman:** Well, when I say build steps, I don't remember all of the exact details of how go-fuzz works, but I do know that it has a go-fuzz build, and you have to build the binary that will be fuzzed, and then you have to run it separately, and kind of manage your own corpus... So there's a lot of different steps. You can't just run one command with the Go toolchain as it is today. You kind of have to learn a different workflow, which was a bit of a -- just like an impediment for some people to try to start it, because they didn't wanna learn a new tool.

**Roberto Clapis:** I would say that that is one of the main reasons why people are not using it, is because it's external, and it feels different. Also, one thing that it does - it does a source-to-source transformation. So it takes your source code and implements some sort of checkpoints. Basically, when your code runs, it can check at which point it got. So basically, why your code executes, it can check how much of the code was covered... More or less like the cover tool, but it needs to do it more heavily than the cover tool, and in a more efficient way... And this is one of the reasons why it was quite hard to make it support modules, because it actually rewrites the sources.

**Filippo Valsorda:** Some context here is that part of what makes fuzzers magic is that - well, the recent generation of fuzzers, since I think AFL - they use coverage to figure out what mutations are the ones that are interesting to look at. Katie was talking about how there's different strategies for this, but in general, the common denominator is that they all look at the cover of your code. If you ever run gotest-cover for a file - I don't remember the flag, but anyway, if you ever generate a coverage report, with the green and the red, that's what fuzzers do; they run the input and check which parts light up. And if they change the input and some new code lights up, the fuzzer goes like "A-ha! Okay, this is useful. I can keep changing this and maybe I'll hit another path that takes from there, or maybe I'll be able to combine two paths in a way that were not tested together." And that's what makes them, honestly, kind of freakishly effective.

There's a demo of AFL slowly building a valid JPG out of nothing, and it slowly makes a picture and it figures out the letters, it puts in the tags, and everything. It's scary good.

**Roberto Clapis:** \[00:16:01.13\] One thing that really scared me was when I ran go-fuzz against the HTTP library, and after a while I saw that in the corpus something that looked like random started appearing. I was like "Oh, cool." The Go standard package started accepting something that is not HTTP, because it was HTTP/2. Basically, it started constructing valid HTTP/2 requests from nothing. That was scary, and also, I was ashamed because I did not recognize it, and I had to manually write to decompress it and see what was going on.

**Filippo Valsorda:** Rob, if you can ever read HTTP/2 with the naked eye, you need to tell me.

**Roberto Clapis:** \[laughs\]

**Mat Ryer:** Yeah, because that is a strange super-power. I don't know what has had to bite you for that to be the power that then manifests.

**Filippo Valsorda:** There are support groups. We've all been there. Mine is TLS; it used to be DNS. It's okay... There's help.

**Roberto Clapis:** \[laughs\] Thanks. I'm keeping them in mind.

**Mat Ryer:** So that is really interesting then... It's not just shifting the inputs by some external means. It actually has an insight into the code that's running inside in your own code, in your own binary, and it uses that information to also influence what it's doing. So that is kind of like spooky, and I could definitely imagine -- it's a little bit like adversarial training in machine learning, where you have a model and you have another model, and they sort of compete with each other, and then they both just keep getting better together. It almost feels like cheating in some way, but you can end up with a mirror of something else by this technique. So it is kind of amazing to see -- it really will start to feel intelligent, and a few of you have said it's kind of spooky, this thing...

**Katie Hockman:** Mm-hm. Just a note of another spooky thing is it can also reverse-engineer your code such that it can figure out -- there are certain tools that can figure out what the input is actually supposed to be, and then do that for you. So it can actually basically tell the fuzzing engine "This is what input will make this if statement pass", and then it'll just do that to kind of get unstuck from wherever you're at with the fuzzing engine. That's something maybe you do -- I think go-fuzz does this once every thousand mutations, just to try to unstick it, but not every time, because it's too expensive... So it's a lot of trade-offs of like "How random do you want this to be? How much do you want to use prioritization of certain inputs? Is coverage a metric? What is that in terms of feedback loop? How much do you care about it in terms of other things?" So it's kind of creepy, and it's a judgment call on the developer and how they wanna design that, too.

**Mat Ryer:** Yeah, it does sound like a kind of hacker's tool, doesn't it? And in fact, didn't it have its origins in the security world?

**Filippo Valsorda:** Yeah, but I like what Katie just said, that it's a trade-off that the developer has to make... And I think she meant the developer of the fuzzing tool; correct me if I'm wrong...

**Katie Hockman:** Yes, yes.

**Filippo Valsorda:** ...because that's the thing - the thing I like about the proposal is that it does not leave all these decisions and the necessity to learn about all of this stuff to the end users, to the Go developers that are just trying to test their code.

**Roberto Clapis:** And also, if you look at the proposal, it tries to make fuzz test targets as close as possible to what a test looks like nowadays... So basically, the friction to adopt fuzzing if you're used to write unit tests - and if you're not, you should - is going to be very low, because it's going to basically slightly change the pattern, but it's going to be as close as possible.

**Mat Ryer:** Yeah, we should talk more about that proposal, but before we do, I just wanna get a few other concepts clear. There's this concept of seeding the corpus; there's this concept of kind of giving the fuzzing tool some kind of head start... A bit like with unit tests, where you say "We know these are the inputs and these are the expected outputs." You also kind of seed the fuzzing tool in a similar way, don't you?

**Katie Hockman:** \[00:20:09.16\] Yes, and I think it's also kind of a goal of the proposal to try to make it such that the unit tests that people have now and the use cases that they've already come up with can basically just be directly used as seed corpus. The seed corpus is filling two needs, at least in terms of this Go proposal. First of all, seeding the mutation engine, seeding the corpus is trying to tell it "This is a good starting point for you. Build off of this", and then it can manage its own corpus on its own, as it wants to, and build it up as it finds new coverage and new interesting things. But it also can serve as a regression test of sorts. The seed corpus is either checked into your test data directory, it's basically checked in directly into your module or into your package, or it's in there programmatically. It's in your tests in code. That's run every single time go test is run, and it's also meant to act as a regression test. So you can use existing things, you can use new crashes, and you can build up that seed corpus as you find new regressions that you wanna make sure you're testing.

**Mat Ryer:** Yeah, so that's a really cool feature that if something fails, that automatically gets contributed to the testing. So the next time, that will explicitly get tested is how it works. That is very cool, because of course, the value of unit testing, in the cases where you find a bug and then you write a test to prove that bug, which you do if you follow TDD tightly... And in some cases I find that to be a great way to work, because you get a kind of to-do list for free from the toolchain. And as you write your test, if things aren't working, they fail, you get errors that you then have to unblock, and it's a kind of nice way to decide what you have to do to get something to pass.

Yeah, so it has that same kind of idea - if you find a bug and you've written a test to prove it, you then save that test, and the next time you run all your test suite, it'll check for that bug again. So this is what we mean by protecting from regression - you can never have that same bug again if you've fixed it and you keep the unit test.

What do we do with that corpus though? Dominic Rouse on Twitter asked "What are the best practices for the corpus? Should you put it into Git, should it go into some other repo? Do you share it amongst the team? Is it just something you run on your own dev machine? Where does this go in practice?"

**Katie Hockman:** I think it's gonna depend, and I also think this is a bit of an open question in terms of what kind of best practices do we wanna lay out for this... But that part is also kind of up to the developer, too. It could be programmatic - like I mentioned, before you have existing unit tests, and you just wanna change your t.run into an f.fuzz; something like that should be basically possible. So if it's already programmatic, keep it programmatic. And if it fails, it fails, and that's great.

If you have a bunch of test data, like let's say you have a bunch of big HTTP requests, or binary files or something like that that you already have somewhere, you can just use those too, and go test will look at test data as part of the seed corpus, too. And so I think it also depends on what the seed corpus is - is it a huge binary? Is it a small thing? Is it something that's best built programmatically, and what the best practices for that will be I think are still kind of an open question... At least it is to me.

**Filippo Valsorda:** \[00:23:46.01\] I think there's also an angle of maturity of the ecosystem in there, of maturity of the technique... Because when fuzzing is just this tool that some security researchers use to smash against a program once, try to get something out of it and then move on - of course, they just run the corpus wherever they're keeping it. But I feel like just like with testing we set up continuous integration and we trust machines to do the heavy lifting for us, I expect that fuzzing also takes that path once it's built into developer workflows.

So you would have a small corpus locally on your machine, and Katie's proposal puts it automatically in a cache folder... That will do a very quick pass, but you're not gonna run the fuzzer mostly on your laptop. Part of what makes fuzzers work is that computers are fast, but also you can keep throwing more cores at it. And then you upload it, and some CI or OSS files or some continuous integration system can just run the fuzzer, and it should persist the corpus, so it will keep running the same corpus against it, so that you make changes and the corpus is already hot and large, but is not checked into your repository, because most people don't want megabytes and megabytes of corpus checked in.

**Roberto Clapis:** Right. One thing that I also like about fuzzers is that there's usually a way to tell them "Don't feed me input that is bigger than this amount", either directly or indirectly. The indirect way is you take whatever the fuzzer passes you, and if it is bigger than a certain size, you just return "No, I don't want this." After a while, the fuzzer will stop seeding the corpus with anything bigger than the size you want; so if you're testing strings.split - yes, you can get up to a megabyte, but it doesn't make sense to split a gigabyte of string... Because you know the code that you're fuzzing, and you shouldn't be too exaggerated on how liberal you are in the input you fit it to. It's like, yes, you're fuzzing, but you know what you're fuzzing. If you're fuzzing a JPEG parser - yes, feed it big stuff. If you're fuzzing a string splitter, it's very hard that there is a bug at the 3 gigabytes mark.

**Mat Ryer:** Yeah, that's a good point, because you do get the sense that you'd switch it on and it just points to your methods, and it's just gonna go and do it. That is interesting though, that this is a continuous thing; it's not something that you would do like a benchmark, where you just run that on your laptop. But in the proposal there is a new flag to run the fuzz, but is the expectation that that would run in some kind of continuous integration, or some other place?

**Katie Hockman:** I think it probably depends on how long someone wants to run a fuzzer. If they are willing to just let it run on their machine for a while, maybe that's okay. If they wanna just run it for the weekend, that's totally fine. If it's a company - or just an individual - and they have a ton of different things they wanna try to fuzz at once, I'm not really sure if that's even gonna be supported to be able to run multiple fuzzers at once. I don't know what would happen, like if there's a race condition.

There's a lot of different things I'm not totally sure would be supported. If it crashes something, somewhere, it's hard to know where it's coming from, so it may make more sense in situations like that to have it on some kind of continuous integration.

**Mat Ryer:** I wonder if we're gonna end up in a situation like with Bitcoin miners, where we've got all these machines that are just spending all the time crunching through, fuzzing stuff... \[laughter\] When we've got Fuzzcoin.

**Filippo Valsorda:** OSS files already exist. There's a project by Google that basically provides what internally we call clusterfuzz, which I don't know if I was allowed to say, but yep we're rolling.. for open source projects, where any open source project can submit... And there are criteria, of course; I don't know what they are exactly, but they will just run your fuzzers for you. And if we make it standard how to do that with Go, it would be extremely easy to submit Go projects.

**Mat Ryer:** Yeah, that gets very exciting, actually. That's really cool.

**Roberto Clapis:** I think ClusterFuzz is open source.

**Filippo Valsorda:** Cool! I'm not getting fired today.

**Katie Hockman:** \[laughs\] Yeah, don't get fired, please.

**Mat Ryer:** But if you do want to get fired, please do it this way - come on the show and reveal something that you shouldn't reveal. \[laughter\] It's so cool for us! It's such a scoop!

**Filippo Valsorda:** I've got a history with that... And let's leave it at that and move on.

**Katie Hockman:** Yeah, don't encourage him. \[laughs\]

**Mat Ryer:** \[00:28:12.14\] Yeah. Last time Filippo was on the show he stopped me from admitting to a crime before I said it, which was brilliant. Really useful service. \[laughter\]

**Break:** \[00:28:20.27\]

**Mat Ryer:** We can take a short break if anyone needs to, and people at home can take a break anytime they want to, really. They're probably just carrying us around on their portable devices, so they can just do what they like... I don't know why I'm explaining that. \[laughter\]

I was just gonna say, some bits will get cut out. If you need anything cut out, let us know and we'll do that.

**Roberto Clapis:** Oh, Mat, I've listened to so many episodes of these in which you say "This will be cut out", and that never happens...

**Mat Ryer:** I know. They don't do it for me, but they will do it for you three.

**Roberto Clapis:** Okay. \[laughter\]

**Katie Hockman:** Thank you.

**Mat Ryer:** They add bits for me from other times I've embarrassed myself... \[laughter\] \[unintelligible 00:29:00.18\] extra show, and I'm like "I didn't embarrass myself then... That was a different time when I embarrassed myself."

**Filippo Valsorda:** It's directly on the soundboard.

**Mat Ryer:** Yeah, exactly. \[laughs\] It's just got me embarrassing myself. This one of them. This is one of the clips.

**Break:** \[00:29:21.26\]

**Mat Ryer:** So the new proposal - which we'll post a link to in the show notes - kind of has a very nice Go feel to it, like the design of it. So in the same way that we used to test functions being how we described unit tests, there are fuzz functions now which take a different argument, the testing.F. Is that like an interface then? What is that testing.F type?

**Katie Hockman:** That testing.F type is very similar to a testing.T or testing.B. So it'll implement the testing.TB interface.

**Mat Ryer:** Will there be a testing.F interface then, or is that like a strong type?

**Katie Hockman:** It's a strong type.

**Mat Ryer:** And that has methods on it that lets you then interact with the fuzzing stuff... But it's a relatively simple API, isn't it? It's just two methods... Is that right?

**Katie Hockman:** Well, I didn't include in that proposal all the other methods that are in the testing.TB interface which it will support. For example, if you have some pre-work that you need to do and you wanna fail the test or something like that, because something failed, you can do that... Things like that. Originally, some earlier designs had the testing.F function; the f.fuzz function accepted testing.F, and then it ended up being not as clear, I think, and it was gonna complicate things quite a bit...

\[00:32:30.15\] And there were some discussions that Filippo and I had, and we ended up basically keeping it as a testing.T within that function. So it basically should look almost exactly like a t.run. If you have a t.run, you can copy it over directly.

So it should look and feel exactly like a unit test within that f.fuzz function, which runs kind of as a unit test... And then anything you need to do before that, like set things up, add to the corpus, whatever you need to do, you can use the testing.f for that part.

**Mat Ryer:** Hm. Unlike the run function, where the only argument you can pass into that function is a testing.T, you can have additional arguments in these functions... And they seem somewhat dynamic. Can you explain how they work?

**Katie Hockman:** Yeah, so inside this f.fuzz function, those first parameters, what you're basically telling it is it's gonna take a testing.T, basically it's scoped to this T, and then you're just telling it what things you want the fuzzing engine to be generating for you. What is the structure basically of each input in your corpus?

In the proposal, the example is "It takes a testing.T, and A, which is a string, and then a big int, which is num." And what that's telling it is "Okay, we have an f.fuzz function. That's what's gonna be run with the fuzzing engine." That function is gonna be run for every input, it's bound by that T, and then the corpus is an A with a string and a big int. That's basically the structure of the corpus... So every time it runs, it should be running with a new string and big int.

**Mat Ryer:** Does it dynamically look at the arguments that you've passed there and change the code? Does it respond to the arguments, or do you have to define them somewhere? Or are there patterns you have to follow?

**Katie Hockman:** I'm not sure exactly, and I wanna make sure I'm explaining it right, but basically that string and that big int -- if you look up a little bit higher in the proposal and you're looking at this f.add function, what that's doing is it's adding to the corpus, and it's adding a string and a big int, which must look exactly the same as the string and the big int, in that order in that f.fuzz function. So what's that basically defining is "This is the definition of the corpus entries." That will be added manually and it will be generated by the fuzzing engine.

**Mat Ryer:** And it works with a slice of empty interface, so it's kind of generic code, in a way.

**Katie Hockman:** Yeah.

**Mat Ryer:** If Go got generics, would that change/affect this design in any way, or do you think you'd still probably use it in a similar way?

**Katie Hockman:** I'm not actually sure that it would impact the design... It might impact the implementation a little bit, but I haven't really thought too much about it. But also, just thinking about it now, I'm not actually sure that it would change much. I think what this function is supposed to do, this f.fuzz is just kind of like a -- it's a little bit magicky, but it's basically just trying to tell the fuzzing engine the structure that it should be aware of and be using.

**Mat Ryer:** It's a nice API to be able to just define the function and have it notice that, or work at least... But what happens if you've added different kind of data, or you changed the structure? What happens in that case?

**Katie Hockman:** Like if for example you didn't f.add with two ints, or something like that?

**Mat Ryer:** \[00:35:57.13\] Exactly, yeah.

**Katie Hockman:** I expect it would probably panic... Because what you're doing is you're basically telling it "Here's two ints", and it's expecting a string and a big int. And maybe that can work with static check and things like that, to find those things at build time...

**Filippo Valsorda:** For anybody who hasn't read the proposal, f.add is the function used to seed the corpus; it's the function that you use to say "Here's the starting points." Which by the way, is one of my favorite things of the proposal, because usually you have to just create a bunch of files, one for each input, and put them in a foo.. Actually, I'm gonna do something else... And instead, here you just write f.add, and "Here's my \[unintelligible 00:36:34.26\] certificate. These are examples. Go for it." So f.add is the function that adds to the corpus, while f.fuzz is the function that actually runs the fuzzer, and it runs a function that takes the same types of arguments... I'm just mentioning it in case people haven't read the proposal yet.

**Mat Ryer:** Thank you, brilliant. And I love the fact that it kind of still -- I mean, it's designed to fit into what we already have. So it knows about go test, and it kind of cooperates with go test as well, doesn't it?

**Katie Hockman:** Yeah, and actually that was my main goal with all of this. I wasn't going to be okay with a design that didn't feel like testing that we have now. Someone should be able to look at this and hopefully understand it pretty quickly... And the goal is that if you know how to write a unit test, you know how to write a fuzz target. It should be approximately as easy. I wanted it to be able to work with the go command as it is now, and if people run go test, it should just run the same way, and it shouldn't have to use anything terribly special, and it shouldn't have to do anything, learn that much new... I wanted the barrier to entry to be as low as humanly possible. So if it looks like Go code, that's the goal, and I'm glad to hear it.

**Roberto Clapis:** I love that about the design, because I've done some research and I've seen people creating fuzz targets in the wild for parsers, and what usually happens is that they take whatever the fuzzer engine passes them and put it in the parser, and that's it. So they just basically check. The only property they check for is if it panics. That is kind of sad, because it's so much easier to feed something into your parser and then maybe serialize it, where I can process it again and check if it is the same.

So it's kind of easier to write fuzz targets than people assume, but since fuzz seems to be such an alien concept, I've seen most fuzz targets to assert nothing; they just feed the input to the function they want to test. It's like, if testing strings.join, we just join, that's it; and then you don't check if you even get a string back. So there is a type system for that, but that's what you get. So I'm really looking forward for these to be first-class, and to be so close to the original test target, to see what people actually start asserting as a property... Because "Doesn't panic" seems to be a little bit too weak as a property.

**Filippo Valsorda:** Yeah. If people get one thing away from this conversation, it should really be that fuzzing that' gonna be built in Go is not just about finding panics. It's not just "Feed some input and wait for it to crash." It's about writing as many invariants as you can think of and as many checks as you can think of, and then letting the fuzzer find the inputs for which the thing doesn't do what you want it to do.

**Mat Ryer:** So would you say that fuzzing makes a lot of sense if you're working with multiple methods? I mean, in that example that Roberto gave, where you're encoding and decoding, because you can say something about the way that those two things should interoperate... But how can you make assertions on something if the input is completely random? What kind of assertion are you gonna make?

**Roberto Clapis:** \[00:39:50.23\] One thing that I did - I was fuzz-testing a cache that I implemented... Caches are harder than people would normally assume, so I wanted to make sure that, for example, what I put in, I got back. So to test my cache, I did differential fuzzing with a HashMap. A HashMap is a perfect cache. I mean, it grows indefinitely, but I didn't care; it was just fuzz testing. So I just fed stuff to my cache, and when I retrieved it, if it wasn't there - meh; it was evicted. But if it was there, it should be identical to whatever was in that map. So you can have a simpler, dumber implementation of the algorithm you want to implement, or maybe a slower one. If you optimize your code, you can keep the old code, the slow one, to test against... And usually, slow code is easier to debug, and it's more reliable, and it's easier to write.

**Mat Ryer:** Because it's slower and you can see what's happening. \[laughter\]

**Roberto Clapis:** Not that slower, but yeah... That's kind of the point.

**Filippo Valsorda:** Another example that I had written up for the Gopher blog is that I had this parser... No, sorry, not this parser, actually... This serializer. And you're like "How do you test a serializer? How do you know if the thing it generated is good?" Well, the thing I wanted to know was whether if it would work using buffers, for performance reasons; I didn't want to allocate a new buffer or \[unintelligible 00:41:07.20\] every time. I just wanted to give it the old packet and say "Just serialize over this one."

So what I did was write a fuzzer that would parse a packet, but in this case with the Go proposal I would not even maybe do the parse step. I would just tell it "Give me a random packet structure, and then serialize it on both empty an empty buffer of old zeroes, and on full buffers of all one bit." If they come out different, it means that it's not set in zeroes in some of the fields... And it did. That might or might not have been why some stuff in the cloud for DNS server wasn't working... And that's the kind of stuff you can find with fuzzers.

In general, testing should really be about defining expected behaviors, and that's true of all kinds of testing. It's not just about defining expected inputs and outputs, it's about locking in expectations. Any expectation that you can define not strictly in terms of "This input needs to have this output", but just "The output needs to be longer than the input. The output needs to be shorter than the input." Anything like that you can put in a fuzzer, in a fuzz target.

**Mat Ryer:** Hm... Kind of like meta-testing, or some kind of abstract testing, in a sense. You're not dealing with the specific values, but you still deal with the ideas, the variables...

**Roberto Clapis:** Yes, which kind of takes away one big risk, the reason when you write unit tests. When you write unit tests, you have those assumptions in mind. What you're trying to test is like "I want strings.split to actually split the string." Then you go and test your stuff, and you put the input and you put the output, but you're just giving examples, you're not testing the actual property that you want. So I think that writing a property assertion for a fuzz target is actually closer to what you want to do usually in tests.

Now, unit tests are always going to be needed, but if you put on top something that asserts the actual property that you meant, you're adding a lot of value.

**Filippo Valsorda:** One opinion I heard that I'm not supporting - retweets are not endorsements - was that "Why would you write unit tests if you already know that your program is going to break on? Just don't write the bug." I mean... \[laughter\] Yes, yes, yes. I know. But there is a degree of truth to that. The things you can write unit tests -- unit tests are actually more useful for refactoring later and for regressions. But that's the thing - it's unlikely you will think of inputs that break on the program you just wrote, because you thought about those edge cases. And fuzzing will just not care about what you thought about. Fuzzing will find where it hurts.

**Roberto Clapis:** \[00:44:04.25\] Right... And one thing that I like to say is that I write test targets for my future interaction with the code, because I also used to do TDD most of the time. So I write the tests, and then I write the code that implements whatever I am testing for... And in the future, when I refactor, one of the tests will pass, when I said that I write fuzzers for the code that I wrote in the past. So basically, the fuzzer makes sure that whatever is there is actually what it meant to do, and the tests are there so that the future code will keep doing it.

**Katie Hockman:** I really like what Filippo said about "The fuzzing engine doesn't care what the developer thought about." I think that's the benefit of having -- that's why, for example, code reviews exist, because you need another person who's more objective to look at it, and I think a fuzzing engine can be this third-party objective being that just goes in and does everything it can to try to break it, and has no idea what you thought about it. It doesn't care about that, it just cares about trying to find as much coverage as it can, and trying to find bugs. That kind of third-party entity is a cool concept to me.

**Mat Ryer:** But Katie, aren't you worried about the fuzzing thing becoming self-aware and then just going around doing lots of random crime?

**Katie Hockman:** That's actually my goal with this... I'm actually trying to build a self-learning robot that'll just take over the language.

**Filippo Valsorda:** How do you know--

**Mat Ryer:** Based on fuzzing.

**Katie Hockman:** Definitely. Exactly.

**Filippo Valsorda:** How do you know that's not already what happened, and we're here pitching fuzzing to just make our fuzzer overlords happy? \[laughter\]

**Katie Hockman:** I'm actually a fuzzing engine. All this time it's been a simulation. I hope that's okay.

**Mat Ryer:** Well, it is a good one. You're right, it does a good job, yeah. But the thing is -- yeah, I'd love that though... Not really. \[laughter\]

**Roberto Clapis:** He doesn't know how to interact with you now that he knows you're a robot... \[laughter\]

**Katie Hockman:** \[unintelligible 00:46:00.08\]

**Mat Ryer:** I love it when the machines do kind of get this emergent intelligence. I find that to be really quite amazing, especially when there's so much chaos in what's actually going on. I think the thing that I've learned and I'll take away is it's less about random input and it's more about variations of the realistic kind of input that you're gonna pass in, right? ...that didn't resonate, because I can tell on my screen that there's no... Go on, correct me if that's wrong.

**Roberto Clapis:** No, I just wanted to say -- I was putting stuff on top of this, which is... The fuzzer doesn't care about what the code does, and that's important, because if we had a machine learning algorithm fuzzing our code, just trying to learn how the code behaves, at one point it would do as humans would. It would understand what the code is supposed to do, and kind of accept the code works. Instead, if you're just using an algorithm that just tries to bash with random stuff, at one point you find -- like, after two years you've been fuzzing a target, a new edge case that crashes... And this is something that I love, because a human, or an intelligent design - in our way of defining intelligence - would not find it... Because why would you keep doing for two years the same thing, expecting a different result? Isn't that the definition of madness?

**Mat Ryer:** Yeah, but we are gonna end up with fuzzing terminators literally just running around, trying all kinds of different things to get you... And it just like goes and hacks some things, smashes it, kicks a puppy, throws a baby in the sea... Do you know what I mean? Doing all kinds of -- just to see what works.

**Roberto Clapis:** It's a risk we're willing to accept.

**Mat Ryer:** It's a risk... Okay \[unintelligible 00:47:40.12\]

**Filippo Valsorda:** It's a sacrifice we're willing to make, really. \[laughter\]

**Break:** \[00:47:48.07\]

**Mat Ryer:** So does anybody have an unpopular opinion for us today? It can be fuzzing-related, but it doesn't have to be... It can be anything.

**Katie Hockman:** Yeah, I've got one I can throw in the ring.

**Mat Ryer:** Throw it in.

**Katie Hockman:** So I think that -- it's kind of more like a... I don't know if it's an opinion so much as a personal experience, but I actually got into computer science because math wasn't social enough for me... So I think that the thing that I like the most, the best part about computer science is actually building things with other people, and I think having social skills can take you a really long way, and is kind of undervalued in tech.

**Roberto Clapis:** Wait, you're telling me that you got into CS because of the social aspect?

**Katie Hockman:** Exactly. I didn't wanna sit alone in the corner all day and just solve math problems, but I was like "Oh, I can build stuff with people. That sounds more fun, so I'm gonna do that." But I realized it's the opposite of a lot of people.

**Filippo Valsorda:** And then you ended up in security, because the InfoSec community is a shining example of excellent community \[unintelligible 00:50:33.09\] \[laughs out loud\]

**Katie Hockman:** That's a highly social skilled one, because you need to be able to talk to people and understand -- like, if they disclose a report, you need to be able to communicate with them, and understand them, and be able to communicate back, and you need to be able to communicate really complicated things in a really simple way, that other people can understand, which is really hard... And I think that's a field where it's even more important that you have good social skills, because the stakes are so high.

**Filippo Valsorda:** Yeah... To be fair, I should point out that the Go community is extremely nice. The kind of people that I used to work for are usually a delight to work with. I was just making a cheap shot at the...

**Roberto Clapis:** Right...

**Filippo Valsorda:** ...let's say traditional security community.

**Mat Ryer:** Well, what can they do to get you?

**Roberto Clapis:** That's one way to put it.

**Mat Ryer:** You're safe, aren't you, from that? What can they ever do...?

**Roberto Clapis:** Right... \[laughter\] Now that you say that, Katie, I think one of the important things about the human aspect of software is like when you design an API, you have to design it in a way that people will understand. I hate when people say "Users of this API are stupid, because they can't use it right." When you're designing something, you're communicating to the user... People keep forgetting that issue.

**Mat Ryer:** Yeah, that is true, actually... Because you do think -- in the beginning I thought APIs were for machines to talk to each other, but they aren't. They're for humans to build the thing that allows the machines to talk to each other. Yeah, so that is true.

\[00:52:07.28\] But I don't know, Pythagoras could have been a laugh at a party. He might have had a great time with it, I don't know... \[laughter\] You're probably measuring all the stuff and you're like "Pythagoras, just put your ruler down for five minutes, mate! Have a sandwich. I've cut them into triangles, how you like them." You know, that kind of thing. Okay, any other unpopulars?

**Filippo Valsorda:** I have a whole list of cryptography unpopular opinions, but the thing is I don't think anybody actually has an opinion on these things, and it's just these ten people, and we're all on the same Slack, and we just discuss these things between us... So I'm not gonna go there. Instead, my unpopular opinion is that - and Katie, I know she understands, but... Dogs in the office are bad. Just bad.

**Mat Ryer:** Dogs in the office.

**Filippo Valsorda:** There should be no dogs in the office.

**Mat Ryer:** Yeah. Go on, elaborate. Are you allergic to them, Filippo?

**Filippo Valsorda:** I'm allergic to them, I know a bunch of people who are allergic to them... I know a bunch of people who are scared of them, and don't feel like they can say "Hey... Beautiful dog. I'm scared of it, so you don't get to bring it to the office anymore, because I'm scared of dogs." No one wants to be that guy.

**Mat Ryer:** "Yeah, I know you love it, but to me, that's basically a little monster from a nightmare..."

**Filippo Valsorda:** Yeah. Like, somebody might have gotten bitten, and you're just like "Yeah, that makes me extremely uncomfortable, but I just joined, and I don't want to be that guy", so they're not gonna tell you... They're just gonna walk around being like "Yup, yup... Cute, cute...", and walks along the border of the office...

**Katie Hockman:** And to be clear, I think Filippo said that about me, because I love dogs more than -- anybody who's ever talked to me for more than five minutes knows that I love dogs more than pretty much anything, I would say.

**Roberto Clapis:** Whoa...

**Katie Hockman:** Yeah. I mean, I do actually agree with you that it makes things complicated. I mean, yeah, it can be a source of joy for people like me, who aren't allergic and I love them, but also, if it's a source of conflict and discomfort, or worse, for people that I work with or people around me, then that isn't ideal either, and... Yeah, aside from the case of like a service dog, which I know that Filippo agrees that that's totally fine...

**Filippo Valsorda:** Oh yeah, of course.

**Katie Hockman:** ...honestly, I think it's a really reasonable opinion.

**Filippo Valsorda:** Service dogs are well-trained, and in general, if accommodations have to be made, one can work case-by-case. But honestly, I never had the problem of "Oh no, I'm really allergic to a service dog that I can't not be around." But I did have the problem with pets a bunch, because there's just many more pets. It's just a numbers problem.

**Mat Ryer:** But how will the management show how cool they are if they don't allow dogs in the office?

**Filippo Valsorda:** \[laughs\] Right?

**Mat Ryer:** \[00:54:51.20\] What are you gonna ban next, Filippo? Foosball tables?

**Filippo Valsorda:** Ping-pong tables have gotten old... \[laughter\]

**Mat Ryer:** Roberto, how do you feel about dogs in the office?

**Roberto Clapis:** I'm kind of scared of big dogs, so I'm on Filippo's side... But also, I have friends that are allergic to dogs, so yeah, I agree... Unless they are needed, like they're service dogs, I'm not in favor of that. Folks, your unpopular opinions - I have so much discuss on. My unpopular opinion was gonna be I like yellow, so... \[laughter\] It's important topics you brought to the conversation there. Mine was completely useless.

**Katie Hockman:** \[laughs\] That's a terrible opinion, Rob. Take it back.

**Mat Ryer:** Is it the color you like, or you just love that Coldplay song?

**Roberto Clapis:** No, the color. Just the color. And the effect it has on people.

**Filippo Valsorda:** There are so many better colors... \[laughter\]

**Roberto Clapis:** Right. Yeah, beautiful colors... Yellow is one of them.

**Katie Hockman:** I mean, your headphones are yellow...

**Mat Ryer:** That's true. I was looking for clues of yellow to verify. For some reason I'm skeptical when Roberto says he likes yellow; I think "Well, is it a trick?"

**Roberto Clapis:** Well, I have something else to prove it...

**Mat Ryer:** Oh, a yellow gopher...

**Katie Hockman:** Aww...

**Mat Ryer:** You'll have to send a picture of that. This is a podcast.

**Roberto Clapis:** Yeah... So I already tweeted this picture today, so people just need to go back. I'll tweet it again.

**Mat Ryer:** I'm scared of those gophers, by the way. That's my unpopular opinion. Those little things... I have nightmares about them.

**Filippo Valsorda:** They do look a little weird, huh?

**Mat Ryer:** That one in particular, that yellow one. Well, it's a podcast, so this really is--

**Filippo Valsorda:** This is still a podcast... \[laughs\]

**Roberto Clapis:** Basically, I'm getting the gopher closer and closer to the webcam, until Mat screams... He didn't scream. You passed the test.

**Mat Ryer:** I wasn't suggesting you do an audio commentary of it, I was suggesting "Let's not do that in the first place, and focus on the audio." \[laughter\]

**Roberto Clapis:** Right...

**Mat Ryer:** Well, unfortunately that's all the time we have today... Thank you so much for joining us, Katie, Filippo and Roberto. We'll see you next time!
