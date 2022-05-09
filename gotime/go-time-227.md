**Natalie Pistunovich:** Good evening, morning and afternoon, everyone, and welcome to the episode about static checkers. Hello to Mat, my co-host for this episode. How are you doing?

**Mat Ryer:** Hello to you, Natalie, also. I'm good, thanks. How are you?

**Natalie Pistunovich:** Great, great! I enjoy all the plants we have in the background. Hello, Matan, our guest for today. Welcome!

**Matan Peled:** Hello, and thank you.

**Natalie Pistunovich:** How are you doing?

**Matan Peled:** I'm doing pretty well. It's kind of late, but... Yeah, it's been a long day. But I'm doing good.

**Natalie Pistunovich:** And you are joining us from...?

**Matan Peled:** I'm joining you from \[unintelligible 00:03:11.27\] You can see the sea from that window over there, if it wasn't so dark outside.

**Mat Ryer:** Oh, wow.

**Natalie Pistunovich:** So all the way from Israel... And I see you don't have plants in the background, instead you have ducks, which you probably use for duck debugging, as one does. And you have two. One is white, and one is red, for everybody who's listening but not watching... So this is the one who says "Just force-push the commits", and the white one is like "No, no, run one more test."

**Mat Ryer:** \[laughs\]

**Matan Peled:** I have a few of them. One of them is a panda duck.

**Mat Ryer:** Oh yeah, a panda duck. Yeah, it does look a bit like a devil.

**Natalie Pistunovich:** And the blue one is just in case you're on the blue team, which is kind of decent code. Not too tested, but not force-push.

**Matan Peled:** Yeah, it seems to balance out the red one.

**Mat Ryer:** We had an off-site recently at where I work, and it was in Amsterdam... And the souvenir that we got everyone was a little rubber duck, tailored to each person.

**Natalie Pistunovich:** \[04:06\] Wow.

**Mat Ryer:** Yeah. It's a very nice gift... But it's very useful for rubber ducking, like you mentioned, Natalie.

**Matan Peled:** It sounds very thoughtful.

**Mat Ryer:** Yeah, it is. Well, it makes some better programmers, really. I don't know why -- do they teach that at university? Do they teach rubber ducking?

**Matan Peled:** I teach it when I TA students, and sometimes they have to help them with their homework. Basically, I have them just explain the problem to me, and through the process of them explaining it, they understand what the problem is. And then I tell them, "Well, the next time you should try that with a rubber duck."

**Mat Ryer:** \[laughs\] Just leave it there. Don't elaborate.

**Natalie Pistunovich:** Just in your reception hours. "Here's a rubber duck. Speak to it."

**Mat Ryer:** Good idea. You could just have that in your office.

**Natalie Pistunovich:** A weird thing I learned about rubber ducks is that if you actually put them in a place with water, like a bath, you want them not to have the hole that allows them to squeak, because this is how they get moldy.

**Mat Ryer:** Oh, really? Why? Because water goes in?

**Natalie Pistunovich:** Yeah. And it's not very well-ventilated. So if you do plan to bring it into a wet room, then make sure that it does not squeak.

**Mat Ryer:** So if you're a programmer and things aren't going well and you're trying to rubber ducking and you're crying a lot, keep the tears away from the duck... Because it could get moldy.

**Natalie Pistunovich:** This would be step ten.

**Mat Ryer:** Yeah.

**Natalie Pistunovich:** I could think of a few other things you should do before that... But it can be on the extended list of things you might want to do.

**Mat Ryer:** Yeah, good point. Tissues, hair dryers... Loads of ways to --

**Natalie Pistunovich:** \[laughs\]

**Matan Peled:** Taking a walk.

**Mat Ryer:** Oh, yeah. That is a good hack, actually; if you're stuck on something, go for a walk, or think about something else. How many times do you hear people say, just in the shower, or even like asleep sometimes, "I was able to solve this problem." Taking a break is important, and that's really counter-intuitive, because you feel like you have to work on it to solve it, don't you?

**Natalie Pistunovich:** Yeah.

**Matan Peled:** Yeah. But you feel pressured somehow, usually... And that pressure prevents you from thinking clear. And taking a walk is usually a bit hard, because you need to force yourself to stop thinking of it, and focus on meditation, or walking, or nature... But then your mind has a chance to process whatever it is you're doing and maybe come up with ideas.

**Natalie Pistunovich:** I'm trying to see what's a good way of tying that to the subject today, but I have yet to find a good one... So in a less smooth transition, no jokes - Matan, you are a Ph.D. candidate at The Technion in Israel, and you're researching meta programming and static analysis. You have worked in all sorts of interesting companies, and now you're back in the academy... So tell us a little bit, what did you study, what did you do afterwards, why going back to studying after being in the industry?

**Matan Peled:** So for my bachelor's degree I did computer engineering, because I had this (let's call it) romantic idea that I should understand how a computer works, from physics to software...

**Mat Ryer:** Wow.

**Matan Peled:** It was very cool, and I learned a lot, and I like my degree a lot, but it made it tougher than it might otherwise would have been, because I'm a programmer, I did software engineering before I started studying, so I was already good at that, and adding something that was completely new and different like Electrical Engineering, and all the circuits and physics and that stuff - it made it significantly harder. But I still liked it a lot, and I think that I learned a lot. And after my degree, I worked at a startup that my friends did at the time, and then I decided that I needed to experience life at a big corporate, so I went to Google, and I spent some time making search features... But eventually, I decided that being a code monkey is fun, and I like that, but I also want to experience research, and see what life in academy is, and what they're doing in graduate degrees...

\[08:09\] So I went back for my master's, and finished that, and now I'm in my Ph.D. And I like it. I don't know if I'm going to do this forever, but for now, this is fun... And I get to play in my sandbox, and make sand castles, and toy around with my own toy ideas, which is what I like about academics.

**Natalie Pistunovich:** You mentioned code monkey, and I have to make the joke now, because I still feel overdue from the less than smooth transition from before... Have you tried being a code gopher?

**Mat Ryer:** \[laughs\]

**Natalie Pistunovich:** Fun. So what was your master's research topic?

**Matan Peled:** So my master's research was making a programming language. I was in programming language design. What my programming language did was it took slideshows, and I wanted to add animations and I wanted to basically make a language that describes what the animation is, what the motion on the screen is.

I liked it, it was fun working on it, but let's just say that its main purpose was to get me a master's degree, and it didn't turn out to be especially usable. It had a couple of really cool ideas... For example, the idea was that I could build a big animation from basic parts, and that if I wanted to make a change in the animation, as anyone who ever used PowerPoint with animations, using the animation pane knows, making it is fine, you can add the animations, but if you wanna make a change in the middle, if you wanna push something in the middle there, then basically you have to start over and sync it all up to what you were doing before. And I wanted to be able to tell it "Add this thing in the middle, and calculate everything according to this change."

So I had a few cute ideas in there, of making it like a physical system of springs, where you can add a spring and everything basically reacts based on the change you've made. And it worked, and it was nice, but it was not a production system, let's put it that way.

**Natalie Pistunovich:** Because it had no tests.

**Matan Peled:** Actually, it did have tests. It's just that basically you had to think like me in order to use it... And think like me at that very specific time of me writing it.

**Mat Ryer:** So how important is that to you then? Because you talk about you like being in the sandbox, building sand castles... How much of that is anchored back to something that could be practical or useful?

**Matan Peled:** Well, that's a good question. So my thinking is that I want it to be anchored back to something that is practical and useful... But I'm okay if it's not. I'm okay going often to the wilderness, and exploring, and finding out things... And if it turns out that they're not impactful, and they don't make money, then that's okay, too. Ideally, in my dreams, I want to go out and make something that everybody would know and use, and be important and useful... But I'm okay with it not being that. Basically, taking a chance and not knowing how it's going to turn out.

**Mat Ryer:** Kind of like a startup attitude, really... Being able to fail, and having that freedom to fail is quite important. It gives you that extra permission almost to do things that otherwise people might not have a chance to do.

**Matan Peled:** Yeah. In one sense, I think startup culture is about being small and agile, and being able to push yourself into a niche that a bigger company just wouldn't fit into, because they can't be flexible enough just to think about it that way, to allocate research for that thing... But on the other hand, I think that startups always think in terms of MVPs, and making usable things and making products, where in academics what you wanna do is always write a paper. You want to have an experiment, results, data that you can tell other academics about. And usually, in order to tell other people about what you're doing, you don't need to build the full product. You don't need to have users, you don't need to do any of that. You just need to make your specific experiment, and write it up well enough so that other people find it clear and interesting, and that's it.

**Natalie Pistunovich:** \[12:32\] That sounds a lot like blogging about fun projects that you have.

**Matan Peled:** It's blogging on steroids. It's blogging with a lot of formality added. And that's why science communication, where scientists blog - that's a thing that's happening. Academics usually love to write; that's what they do in their day-to-day, they're usually good at it. They make blogs. Academic Twitter, for example, is a thing.

**Mat Ryer:** Oh, I bet that's amazing. Is it good?

**Matan Peled:** Yeah, if you're interested in that sort of thing.

**Natalie Pistunovich:** Have you been tweeting about static analysis tools? Or static analysis in general. Or wait, maybe we can start with saying what is static analysis...

**Matan Peled:** So static analysis - basically, what we want to do is figure out certain properties about code. A property could be, at its most basic thing, "Does this program have a bug?" or "Does this program succeed?" And we want to do all that statically, and that means without actually running the program, because running the program might have side effects; it might do something that we don't want to do right now. It might take a long time... We just don't want to run it yet. The program might not be even finished. We can't run it, and we still want to know things about it.

So static analysis can be anything from where this function is called, to "Is this program written in the correct style?", which is something that's not that big of a problem with Go, because we have go fmt, which is supposedly also like a static analysis tool. But other languages have things like linters, which tell you that "Well, your indentation is incorrect here", and that's also a thing that happens.

But static analysis can also be a part of refactoring where you want to rename a method and you want the IDE to find out where all the calls to this method are, and use static analysis to find that.

**Natalie Pistunovich:** Yeah, right-click refactor.

**Matan Peled:** Exactly.

**Break:** \[14:44\]

**Mat Ryer:** Static analysis must be easier on typed languages that are strictly typed, versus languages that are dynamic, that have heavy runtime elements... Is that true?

**Matan Peled:** Oh yes, definitely, because type checking is also a type of static analysis. Basically, by having types, you're giving the tool a lot more information than it can use. And if it has more information, then it can do more stuff.

One of the basic truths of computer science is that static analysis is impossible. You have the halting problem, which Alan Turing proved way back when, which says that basically you can't make a program that says if another program will halt. And the proof of that is very cool, because basically he said that "Well, if I had a program that could do that, and it could put itself into it, that will lead to a logical contradiction, so we can't have that."

And a corollary to that is the Rice theorem, which says that you can't prove any interesting property (as in non-trivial) about a program. So you have this strong theoretical basis that says you can't do that, and yet you have this rich scientific field where we do that every day. It's not a problem, it just turns out that the interesting programs, like the ones that real software engineers write - they're simple enough that we can analyze them. But what that theorem means is that we can't be 100% sure. We have to make some sort of concession. We have to have some program where this won't work within a limitation. So for every language, if you do a crazy enough thing with -- what's it called when you reference the method by its name, instead of calling it?

**Mat Ryer:** Reflection.

**Matan Peled:** Reflection, yeah. If you have enough reflection, if you do enough pointer tricks in C, you can always confuse it enough that it doesn't work. But that's fine, because for 90% of the programs it does work, and that's usually good enough. We're talking about static analysis, not verification.

**Natalie Pistunovich:** And how does this field tie to your research? Or what is your research about?

**Matan Peled:** So what I want to do in my Ph.D. is meta programming using static analysis. And when I say meta programming, what I mean is code that writes code, or code that changes code, so basically refactoring. Refactoring usually means that you change the code and then you work on that changed version, but you can also have a compilation step that changes the code and you never work on that changed version. So that's what I mean by meta programming - all those things that make code change code, templates, maybe even generics, things like that.

And what I think is that basically making them aware, having them use static analysis information can make them more powerful, more efficient. So I can for example say -- one of my initial examples was making reactive programming. Let's say I have this class, and in this class there is a field, and it has a getter, and what I want it to do is I want it to send me an event someone every time the field changes. But the class is not written that way; whoever wrote it just wrote a getter and you have to call it. And what I want to do is I want to find out every way that this field can change in the program, and every time that it changes, I want it to send the event, so I can know when that happens, that it becomes reactive.

\[20:15\] So if you can do static analysis and modify the program based on that, then you can easily do that. And that's basically my goal - I want to enable things like that, and I want to make in (let's call it) a declarative way, that I can build using basic building blocks more complex behavior.

**Mat Ryer:** It sounds really interesting. One example of static analysis I've seen - because you've mentioned quite a few... And I actually hadn't considered even like formatting as one of those. But of course, it makes sense. One of the downsides to the format go fmt tool is if the program is incorrect, it doesn't work. The program has to be --

**Matan Peled:** Well formed.

**Mat Ryer:** Yes, thank you. It has to be well-formed. So any kind of static analysis that can happen without that being the case, I find that to be quite amazing... Because often it relies on the same kind of packages that analyze the program for compilation to do static analysis. Is that right?

**Matan Peled:** Definitely. So handling things that are partly correct, or are partly complete even - like, they're not incorrect, they're just missing a bit and you want to take just the parts that are there that are good, is hard.

One of the other projects that I'm currently working on - it has to do with pseudo-code. So what we want to do is to compare pseudo-code to actual code and see if they match. That's kind of a similar idea, because pseudo-code obviously doesn't have perfect syntax.

**Mat Ryer:** I use occasionally GitHub Copilot, and that actually does quite an interesting job... The code can be wrong. In fact, you can give it context just by writing comments, or just by the names of the functions that you use, and the variable names, and things. So that definitely feels magic. I guess that's different, because I suppose that's the ML doing that work, right?

**Matan Peled:** Yeah. So ML for PL or however you wanna call applying machine learning to code - it's interesting, because on the one hand, code... So a lot of the techniques that are used there come from NLP, from natural language processing, which obviously makes sense, because this is text, and this is text, and you won't use techniques that come from image processing; that has nothing to do with it.

**Mat Ryer:** Right.

**Matan Peled:** But on the other hand, code is very structured, it's very hierarchical, it has properties... In order to compile, it has to be very strict in various ways. So giving up all that information, all that context is silly. You do wanna use it, and the (let's call it) non-machine learning approach to static analysis, to dealing with code is called formal methods, which is basically taking ideas from logic and those sort of areas of math, and applying them to code. And that's where all the things like type checking and that come from, all the theory behind it.

I don't understand 100% how Copilot works. I've read their white paper, it's very interesting... I don't think that the -- on the one hand, one of the points of machine learning is that they don't do anything specific, they don't say "Oh look, there's a type." They want the machine learning to somehow learn that themselves...

**Mat Ryer:** Yeah.

**Matan Peled:** ...but on the other hand, I think that they do try very hard to make sure that the algorithm has access to type information, and things like that.

**Mat Ryer:** Yeah, it's funny, because it gets things right that are really surprising, and it makes mistakes that a simple static analysis tool wouldn't make. It still does make those mistakes, and I'm sure they'll keep working on that. It's almost like there'll be another extra check after to see whether this even is valid code.

\[24:06\] It does get frustrating sometimes, because it'll kind of guess arguments to a method that are wrong. They look like it's the thing it's seen before, but they aren't the arguments for that particular method... So just a quick check would have found out that that wasn't gonna work... And I suppose that's what they'll do. But that is interesting, you do see clues really of what it's doing, with some of the mistakes it makes. But it is amazing, I have to say.

**Matan Peled:** Yeah, and the code that it came from, what it is that it learned that would make it answer in this way, right?

**Mat Ryer:** Yeah.

**Natalie Pistunovich:** Yeah, it's actually exactly that that I wanted to bring up, all this AI creating code... Copilot is based on Codex. This is the engine that is running behind it. And a little bit from under the hood of how things are going on there - the plugin for Copilot is collecting some context which is not known. This is kind of the secret sauce. And it's being sent with some extra instructions which are also not know, to that engine, to Codecs, which is probably the article that you read, Matan. And sometimes you can see, because it collects the wrong context, it provides something that it's all in the past, but is not relevant for your code... Like what you said, Mat, about that signature function that could have been easily caught... And it actually makes a lot of sense that the next good step of such a development of such a tool - and Copilot is one of the tools that relies on Codex. There are other tools out there that use that... Would be exactly creating static and maybe in the future even dynamic checkers.

But definitely, the ability of not needing a full working program in order to run such a test is a huge deal for that next step, so this is super-interesting.

**Mat Ryer:** Yeah. By the way, when I first learned about Copilot, for some reason I read it as Copilot \[Copy Lot\], like it copies a lot... I thought it was like Camelot... So I completely misunderstood that it said Co-Pilot. I was using it for ages in the preview, and thought it was called Copy Lot. \[laughter\] It was quite nice.

**Matan Peled:** So one of the companies that I worked at during my masters, where I interned one summer - they used to be called \[unintelligible 00:26:24.09\] Now they merged with/bought out/became Tabnine, and they're making a very similar to Copilot tool. And they have the same ideas, only I think that what they do, knowing behind the scenes, is their algorithm is a bit less blind than Copilot. So you can't have it do things like the advertisements for Copilot, where you write the documentation for some function and it just completes the function for you... But you can make it do things like, you know, you start a database connection and it completes all the boilerplate for you, and things like that, based on other examples that it has seen. And it does use more type information, and names, and things like that.

**Mat Ryer:** That's so clever. One example I've seen of static analysis that surprised m, and actually got me quite excited about it, was an example case where if a variable at any point in the program is called password, and then at some other point in the program it's logged out somewhere, that would be then a warning that it would say "Oh, look, this variable, whatever it's called now, this is being printed." At one point, just sort of analyzing the code, this was a password. So is this really what you wanna do? And I've found that to be actually really quite interesting... Because that is very useful.

**Matan Peled:** Yes. So Perl, if you remember, if you've ever used it, has this whole idea where you need to sanitize your input, and bless them, and things like that. They had this idea that if you take input and you don't use it carefully, then it could affect the program in ways; SQL injections, and all that sort of thing.

\[28:20\] That sort of analysis is called taint analysis, and I think that in recent years even, that sort of thing has become important, where you can leak out the password... And also just develop a related, but not the same idea, that a developer is just putting secrets into their GitHub repositories. And that's also something a search might find, that yeah, maybe you should input -- there are specific places in the environment that you're supposed to put your secret keys in.

**Mat Ryer:** Yeah, and I'll tell you what - having that early... So we talked about the program doesn't have to be finished for this to work... Having that insight as you're working - that's really when you need it, because that's the point at which maybe you're making design decisions that you'll then have to live with... So yeah, that's very exciting. What are some of the cool use cases or cool little things like that that you can do with this?

**Matan Peled:** Basically, you can find bugs early. Other programming languages - Rust, if you read about it, put this whole idea of being very strict with the checking and the static analysis inside the language itself, and you can basically make sure that pointers don't go out of scope, and be used, because the language itself is specified to keep track of that.

Other things you can do with that is, you know, if you're doing multi-threading and you have mutexes and other locks, you can use static analysis to make sure that after every lock is both locked and then unlocked, and you don't unlock something before you locked it, and things like that. Every allocation is freed if you're using something like C or C++ and you're allocating memory manually. Every file that you open that needs to be closed - you can check that.

Some of those things, in some languages you have to check, so it makes sense to have static analysis for it, but in other languages it's not even a problem, because the language itself takes care of freeing resources. But in those languages that do use manual resource allocation, then that makes a whole lot of sense. And of course, memory and files aren't the only resource you have. You also -- if you talk to a server by some protocol, then you can have static analysis to make sure that you complete the protocol in the correct way.

**Natalie Pistunovich:** What are your thoughts about the static checkers in Go specifically?

**Matan Peled:** So I don't know a lot about Go... I'm technically a professional Go developer, in the sense that someone once paid me money to write some Go...

**Mat Ryer:** Oh...

**Natalie Pistunovich:** That is the definition.

**Mat Ryer:** Yeah, you're one of us!

**Natalie Pistunovich:** \[laughs\]

**Matan Peled:** But I'm not very good at it. So the one static checker that I've found for Go was called Staticcheck, and it seems to be quite thorough. It has a lot of linting options, and things that it can tell you that might be wrong about your Go program.

So we've talked about all kinds of static checking, and we can talk about levels, but a lot of what Staticcheck mostly does is linting. So it looks for certain patterns of things that are dangerous, or might be incorrect, or are probably not what you meant to do, and then it warns about them... Which is a very useful thing to do.

It seems that it also has some deeper static analysis, because it can track contexts of various errors, and figures things like that... So it looks like a great tool.

**Mat Ryer:** Yeah, there's actually quite a range of them, and some of them are general-purpose; others are very specific... There's a tool called Errorcheck that checks to make sure you don't ignore any errors, for example... Which is something that is quite important.

\[32:11\] And then there's the Go Meta Linter, which essentially runs all of the linters and does those static checks; like you say, it's really linting, a lot of it... So we'll put some links to these in the show notes for people interested. But they're integrated nicely into IDEs already, so you probably already have them.

**Matan Peled:** The thing that I find interesting about -- like, I want to do the static analysis research... Make my own, basically. The linters are great, everybody should probably use them. Everybody probably does use them, because as you say, they're already integrated into the IDE... But every project has its own things that it's doing, and it's using a library in some way, it's using an API... And what I want everyone to be able to do is be able to define their own rule set, or be able to use a language to define their own static analysis that will warn them of things that might go wrong when they're making code.

For small projects, for scripts, you probably don't need that. But if you need to collaborate between multiple people that might do the thing, if you're a company or you're an open source project, then those things start to make a lot of sense.

**Break:** \[33:33\]

**Natalie Pistunovich:** What are some static checkers, from any language, that you saw, that you really liked what they do?

**Matan Peled:** Oh...

**Natalie Pistunovich:** What's a functionality that you really like?

**Matan Peled:** Um...

**Natalie Pistunovich:** The static checker that you will build, what will it have?

**Matan Peled:** \[36:02\] So one of the harder things to do with static analysis - and it's not like a tool in and of itself, it's a way to get there, but it's called points-to analysis, because even in languages that don't have pointers, you usually have references, which means that one thing references another thing, and that thing may change over the course of the program. And keeping track of what aliases a certain object in memory may have - it's hard to do when you're coding the program and trying to keep a mental model of the program in your head... It's hard to do when you're debugging and you need to find out "Wait, what does this point to right now?" And it's even hard to do when you're trying to do static analysis, and that means that you're not even running the program yet.

**Mat Ryer:** Mm-hm.

**Matan Peled:** So if you know what this variable points to right now, where is the thing that was allocated, what's its dynamic type, what thing it really is, then you can make all other static analysis basically stronger, because now they can know more things. They know that "Oh, this is a pointer. I now know where it came from."

So that's static analysis that I thing is really cool, it's really difficult, because programmers can do whatever they like, and you need to somehow constrain this chaos... But yes, that's what I want to do well.

**Mat Ryer:** Yeah, that feels like a problem that would be much easier solved at runtime.

**Matan Peled:** Definitely. At runtime you just know what it is. You don't have to check it. At runtime you have other problems. Let's say you traced your programmer and now you have this huge file of \[unintelligible 00:37:46.23\] of where everything went, and you still have to sort out that trace, to find the way that it looks... Because usually, when you're debugging, what you see is that "Okay, so I have this value right here. How did it get there?" The place where you see the error, where you notice that something went wrong, is not the place where the error happened. What you really want to know is all the path, the operation that happens on this value to get to this obviously incorrect state. And that's hard. And there's rr, which is basically a reverse debugger...

**Mat Ryer:** It helps you put bugs into your program? What's a reverse debugger?

**Natalie Pistunovich:** It sounds like fuzzing.

**Matan Peled:** A debugger that goes forward - you basically say "step" and it goes forward one instruction, right?

**Mat Ryer:** Oh, right. Yeah, yeah.

**Matan Peled:** Well, a reverse debugger allows you to step back and go back in time to what happened before.

**Mat Ryer:** Oh. Time-traveling debugger.

**Matan Peled:** Exactly.

**Mat Ryer:** That sounds amazing.

**Matan Peled:** It is. It's incredible. It's a fantastic bit of engineering.

**Mat Ryer:** But does it just keep a snapshot of the state at every point, or is it more intelligent than that? Because some operations you lose information, I guess, don't you? How does it go backwards in time? Is it time-travel?

**Matan Peled:** Basically, that's what it does. It keeps operations at every point. But there's so much bookkeeping that you have to keep up with in order to do that... Because obviously, you can't just after every machine opcode keep state, because that will blow up basically no time at all. And there are other things that a program does, like output to the screen, and write into sockets, and things like that. So you have to be very clever with how you keep it.

So what it basically does is keep snapshots, but not after every point; only before things that input or output. It figures that the rest of them it can just calculate from that.

**Mat Ryer:** Gotcha. Yeah. I think that makes sense. That does sound really cool. I wonder if we've got that for Go. I've never heard of it for Go, but maybe.

**Matan Peled:** \[40:04\] So it might just work with Go, because -- I don't know, let's check.

**Natalie Pistunovich:** Everybody's googling.

**Mat Ryer:** Yeah, I think it might work. I've found "Debugging a flaky Go test with Mozilla rr."

**Matan Peled:** Yeah, because it works at the assembly level. So it cares about machine opcode. And if it compiles into machine opcode, then it can work with it.

**Mat Ryer:** Oh, that's great.

**Matan Peled:** And yeah, it's hard to use, and you're stuck with a debugger that looks like GDB, which is not the most user-friendly of interfaces... But it does work. It does do the thing that it promises to do, which is very cool.

**Mat Ryer:** Well, it's a good opportunity for somebody to build a tool, or integrate it into an IDE then, in that case, if it's just got that kind of text interface.

**Matan Peled:** Yeah, definitely. I'm sure that JetBrains or whoever are on it.

**Mat Ryer:** Other IDEs are available...

**Matan Peled:** That's true.

**Mat Ryer:** I have to just say that for legal reasons. Actually, I don't think I do, but i say it. Yeah, I bet they are.

**Natalie Pistunovich:** Also, if anyone is looking for an interesting talk title, for any upcoming conference, I think this is a topic I definitely never heard of.

**Mat Ryer:** Yeah, I would love to hear a talk on all this, actually. If Matan's not gonna do it, someone should.

**Matan Peled:** Yeah. So dynamic analysis - let's talk a bit about that. Basically, static analysis helps you before you even run your program, and it can help you find bugs, and it can help you just answer questions about your program is, and how it works, and maybe answer a question about queries, finding things within your program... If you have enough code, then just searching it is a task.

**Mat Ryer:** Right.

**Matan Peled:** But dynamic analysis is still a hard task. You basically can use the same information that you would use during compile time, but now you have all the real-time values too, so you can - instead of doing symbolic execution and trying to figure out what the values can be, you actually can know what the values are. But you still have to keep track of them.

In some contexts you just print statements everywhere and you're done. You look at what you programmed with them, and then you're happy, and you figured it out. But sometimes print statements aren't enough. If you're doing serverless programming, with Amazon Lambda, where you write single functions and hook them up, and they don't have anywhere to print, and you don't know when they run, and you don't know how they will run, but maybe you can get a trace if you put them together correctly, and \[unintelligible 00:42:36.06\] Then you can use this trace to figure out "Oh, so I got this bad value from the database, and then it went through 11 different lambda functions before it got here, and this is where my error came from." Putting all that together is not at all trivial, and you basically have to build a tool to do that.

**Natalie Pistunovich:** Or listen to the episode from last week, where Mat was talking about instrumenting.

**Mat Ryer:** Yes.

**Matan Peled:** Yeah. So instrumenting is like dynamic analysis, right? You're looking at what is happening.

**Mat Ryer:** Yeah, and that's the kind of thing where -- you know, if it's running at scale, of course. That's a different picture to just the code, or just the single program itself. But yeah... So just printing lines out - that is kind of dynamic analysis, I guess.

**Matan Peled:** Well, it is. It's a very primitive form of it... And it's not argumented by tooling, let's say it like that. And making tools for making our jobs easier is what we do as programmers, right?

**Mat Ryer:** Yeah, absolutely. That is interesting. We even try to do it with structured logging, where now we are putting structure into the log output, so that we can use that more later.

**Matan Peled:** Yeah. And then this structured log is almost like a trace.

**Natalie Pistunovich:** That's definitely an interesting view. Instead of saying, "I'm just printing things" you can say "Now I'm dynamically debugging."

**Mat Ryer:** \[44:12\] Yeah. "I'm doing dynamic analysis." But would you say Hello World is a dynamic analysis program? That's all it is, isn't it? That's probably the simplest...

**Natalie Pistunovich:** What information does it give you?

**Mat Ryer:** It says hello.

**Matan Peled:** I guess... It just prints -- like, it tells you when you entered the function and when you left the function, and that's a trace, right?

**Mat Ryer:** Yeah, that is a little signal, isn't it?

**Matan Peled:** Yeah.

**Mat Ryer:** Yeah, that's a good point.

**Natalie Pistunovich:** And it can be fun to add a timestamp to those. Then it's like a proper log.

**Mat Ryer:** There you go. If you use the log function... If you log println or something in Go, you get the timestamp for free. You could use Go in your work, because one of the nice things about Go is it's an open source language. You have at your disposal available all the packages that the Go toolchain itself uses to understand Go.

Go actually now is written in Go. Talk about meta programming... Go used to be written in C, and now it's written in Go. I can't wait for that initial information to be lost in generations' time, and they just know that Go is written in Go, and no one knows how... I love the idea of that.

**Natalie Pistunovich:** Yeah, we'll use rr to go back...

**Mat Ryer:** Yeah. \[laughs\]

**Matan Peled:** No, wait... Once you said that, I have to tell you about what I think is one of the coolest things ever... And that is a talk called "Reflections on trusting trust", I think by Brian Kernighan...

**Natalie Pistunovich:** Also available in the show notes...

**Matan Peled:** Ken Thompson, sorry. It's Ken Thompson. So it's a thing that compilers for languages should be written, or -- compiler writers like to write them in the language that they are compiling. So this is called a self-hosting language, and it's basically a milestone for a programming language to have a self-hosting compiler, because it means that a language is sophisticated enough to write a compiler for itself. And writing compilers is one of the classic computer science problems of complexity, let's call it that.

And the idea behind "Reflections on trusting trust" is that the C compiler is written in C, and it compiles itself. So if you added a backdoor into it, for example every time that it tries to compile the logging program, then it also adds a little backdoor that accepts a username and password that is unknown, then that compiler would insert a backdoor into code that would not be in the source code of the logging program. That's not good enough, because then the source code of the compiler will just show you that it's doing that, right? So it can't have that.

So what we could do is add another backdoor into the compiler where it adds a backdoor into itself when it compiles itself, that both adds this backdoor and adds a backdoor for the logging program. And then you would have a backdoor that is basically undetectable, unless someone is especially fond of reading compiled assembly language; not even handwritten assembly language with comments, just compiler output... The backdoor would appear nowhere in source code, it will only be in the binary... And you can't just recompile the compiler to get rid of it, because it would keep adding it.

**Mat Ryer:** Oh, wow... That is awesome. That's really creepy.

**Matan Peled:** It is.

**Mat Ryer:** It's like a Black Mirror episode, really, or something like that.

**Matan Peled:** Yeah.

**Natalie Pistunovich:** There must be some virus, some hacking software that is using this... And it seems to have been around for a while.

**Matan Peled:** Yeah.

**Mat Ryer:** He wrote that in 1984...

**Matan Peled:** \[47:47\] So it's been around so long that there have been anti-reflections of trusting trust ideas, where you basically have to use multiple compilers to get one verified output, and there's a whole slew of ideas that combat this... But if you like these ideas of things that reference themselves and things that --

**Mat Ryer:** Mat does.

**Matan Peled:** ...then there's a book called "Gödel, Escher, Bach", which I can't recommend enough.

**Natalie Pistunovich:** Joining the recommendation, for sure.

**Mat Ryer:** Yes.

**Natalie Pistunovich:** That is a very interesting one.

**Mat Ryer:** I love that book. I agree. It's bonkers. It's so good.

**Natalie Pistunovich:** If the three of us agree...

**Mat Ryer:** Yeah, there you go. This doesn't sound -- go on, Natalie.

**Natalie Pistunovich:** \[laughs\]

**Mat Ryer:** If all three of us agree...

**Natalie Pistunovich:** It does not sound like an unpopular opinion.

**Mat Ryer:** Yeah!

**Jingle:** \[48:36\] to \[48:55\]

**Natalie Pistunovich:** You have to agree this one was smooth.

**Mat Ryer:** Brilliant. That's the best one yet.

**Natalie Pistunovich:** This also is another popular opinion. Okay, Matan - so as a preparation for this episode we asked you to come up with an unpopular opinion that can or does not have to be related to Go, or programming, or anything like that. So we're ready to hear... What is your unpopular opinion?

**Matan Peled:** So my unpopular opinion is that after going through all that, hyping up static analysis and all the things that it can do, my unpopular opinion is that it actually doesn't work. It works up to a point, it does all the cute things, it does the simple things, but you can only make it so complicated before it all breaks down and you get to keep the pieces. And that's true if you try to do it formal methods, and if you try to do it using machine learning; no matter what you do, you're still stuck, thinking very hard and trying to solve the problem by sheer for of will, where no tool can help you.

**Mat Ryer:** Is this just your kind of academic brain seeking out perfection, and not finding it?

**Matan Peled:** That, and my grad student brain trying to do things repeatedly, and failing, and saying that "Well, maybe this doesn't work." Yeah, so my unpopular opinion is that software engineers basically have job security, and computers won't replace them.

**Mat Ryer:** Oh, there you go... But I think that's gonna be very popular. We will test this on Twitter.

**Matan Peled:** But not in my academic niche.

**Mat Ryer:** No, it's not good for you at all. At all. \[laughs\] Are you gonna quit and do something different, or sticking with it?

**Matan Peled:** No, I think I want to push it as far as it will go, but keep in mind that maybe it won't be infinitely far.

**Mat Ryer:** Oh, that's amazing.

**Natalie Pistunovich:** I think we'll all slowly get to be more prompt engineers, which is sort of maybe the next level of abstraction, but not necessarily... But we'll basically be guiding the AI to do things for us, among them programming... And it's technically natural language, but it's not exactly the English we're using every day. And we all come with different Englishes, and... Well, we understand each other, but the computer understands us a bit differently. So it will be basically sort of a next level of programming. So in some way we will automate ourselves out of a job, and in another way we'll all just have new jobs.

**Mat Ryer:** We could just write the tests. I feel like even with the fuzzing thing it could make this work.

**Matan Peled:** Oh, so you say that, but that is a thing. I have friends who are researching that. It's called synthesis, and it's basically - you write the specification of a program, and the tests are specifying what the program should do, and synthesis... Like, either, again, you do machine learning, or you just search every program possible in a very specific way that actually makes it actually find programs sometimes... And you can make programs that way, you can do programming.

\[51:58\] Excel, if you think about it and all the autofill things that you can do, is basically this. You write what you want it to output, and then you drag it, and then it figures everything out. Especially with the new features they've added.

**Mat Ryer:** Oh yeah, I've seen them. I tried it the other day. I put 1, 2, 3 and then it just repeated 1, 2, 3 loads of times. I was furious. I was absolutely living. \[laughter\] But you're actually right - if it's doing that with the code... I mean, if it's got things like that points to analysis, where it understands the memory use, and performance, and things - it could even then optimize code.

**Matan Peled:** Oh, yeah.

**Mat Ryer:** It could give you an early version, and over time just keep sort of improving it, and things. And that does get very exciting, when you think of that running at scale.

**Matan Peled:** So again, my unpopular opinion is that that will never happen. That the best it can do is sort of point you in the general direction of saying "Well, maybe you wanna look at this. This could be a good place to look at." But that it will never be able to do that by itself. It will never know enough about the program to do it.

**Natalie Pistunovich:** Interesting.

**Mat Ryer:** Yeah... Because even like programs we write - they contain bugs. I had a manager once that said he doesn't want any more bugs in code.

**Matan Peled:** Yeah, so just don't write any more code. No more bugs. Easy.

**Mat Ryer:** Yeah, there you go.

**Natalie Pistunovich:** No code. No code is the future.

**Mat Ryer:** There's definitely truth in that, but genuinely though... Like, yes, it's about whether the program does what we want it to do based on criteria that's external to that program. So in a way it's not available to it to know that. But I don't know, could you write a test...?

**Matan Peled:** But even the tests don't specify the program completely, right? We all know that writing tests is hard.

**Mat Ryer:** Writing good tests is hard, isn't it?

**Matan Peled:** Writing tests that are a good specification is even harder, because - well, if you tell it to multiply, you get two, it goes to four... Then, "Okay, yeah, I can write a program that always outputs four." That works, right?

**Mat Ryer:** Mm-hm. That's why you need more than one test case.

**Matan Peled:** Exactly.

**Mat Ryer:** Yeah.

**Matan Peled:** It will almost be adversarial, in that it will always find a way that it can do the thing that you don't want it to do, instead of the thing you wanted it to do.

**Mat Ryer:** Yeah. Also, what you want can change too, over time. It's quite interesting. Could using static analysis -- could you check to see that tests don't contradict themselves?

**Matan Peled:** Oh, that's an interesting question. I suppose you could, but it depends what you mean by contradict themselves. You could use static analysis to extract them somehow and compare them, and see... Yeah, you could definitely do that. You could see if what they say about the method that they're testing - if they're unit tests, or you test a method - if that's consistent. If it can think of a method that outputs a certain thing.

So a static analysis -- let's say you have a method that returns some integer... Then we have various sorts of integer analysis that can give bounds. This output is between 0 and 8. Give it like an interval. That's interval analysis. There are more complex types of integer analysis that try to figure out what the value can be... And yeah, it can definitely figure out that there's a contradiction somewhere.

**Mat Ryer:** Yeah, that is interesting. I guess that's why pure functions, like that Rust has - that must be a much easier language to work with than Go, because they can have side effects to the methods and functions in Go.

**Matan Peled:** So static analysis doesn't really care about the side effects, because it's not executing anything. If you're reading input or something like that, then obviously you have no idea what value it is, or what value it might be... But you just mark it as any, as top, and keep going. Yeah, it can be anything. That's final. Just put that into the analysis.

**Mat Ryer:** Hm. That sounds really cool.

**Natalie Pistunovich:** Alright, folks, that was very interesting, and that developed even in a more interesting direction after the unpopular opinion. I already wonder what is the next episode we're gonna do about this. Until then, thanks to everyone who joined us. Have a great rest of your day!
