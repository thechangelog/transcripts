**Jerod Santo:** Nathan Sobo back on the Changelog, here to talk to Zed. About a year and a month since our last time we had you talking Zed's secret sauce... Welcome back, man.

**Nathan Sobo:** Thank you so much. Yeah, I always -- I really looked forward to this all morning.

**Jerod Santo:** It's always a joy talking with you, especially because you're in the trenches. I mean, you are building something, assembling the plane in the air... I'm a user, I've been hooked on Zed probably since our last show, daily user, and enjoy it... And yet, it's like crazy times, I think, probably, to be building software tooling. I mean, it's probably never been easier to fork VS Code and raise a bunch of money and compete with you, right?

**Nathan Sobo:** \[laughs\] Yeah, yeah. Definitely.

**Jerod Santo:** It's gotta be scary, right?

**Nathan Sobo:** It's like, every other week there's a new... But I view it as a great thing, though. I mean, for me, in a world where everybody wants to fork another editor, having your own feels like a good spot to be in. I like that.

**Jerod Santo:** Yeah... Because I've been attracted by some of these new ones, Cursor being the most attractive. There's also Devin. Now, there's also Codeium, which is then Windsurf, which is probably being acquired by OpenAI... So there's lots going on there. But Cursor in particular - being a Zed user, I'm like "Actually, being a VS Code fork is unattractive to me. I just don't want to use that. But compelling features, so I guess I'll try it anyways." I mean --

**Nathan Sobo:** Totally.

**Jerod Santo:** You'd think these people would be forking Zed, don't you think? Shouldn't they just fork Zed?

**Nathan Sobo:** It's a little harder for them to fork Zed, because we're GPL-ed, I think.

**Jerod Santo:** Right...

**Nathan Sobo:** So if you want to build a closed source derivative work of Zed, you can't do it. So you need to stay open source... I still think you -- anyway, I don't want to encourage it, honestly. That's kind of why it's GPL-ed.

**Jerod Santo:** \[laughs\]

**Adam Stacoviak:** "Let's not give them a path."

**Jerod Santo:** "I don't want to encourage it."

**Adam Stacoviak:** "Here's how you kill me."

**Jerod Santo:** I wonder if it'd be harder to raise the money if you were a fork of Zed and therefore open source, right?

**Nathan Sobo:** Right, you have to stay open source. And we're doing everything open source, including all the AI stuff we're doing. But I think we're kind of doing it the hard way, and we have been since before AI was even a big deal, of engineering our own system from first principles, from the ground up, from scratch. And I think that's made us a little slow off the line with some of this AI tech, because of course, you can focus on that if you pick a platform that everyone's already using and just zero in... Where for us, we're maintaining the underlying platform.

But my hope is that over time and with this launch of the agent panel we can potentially prove some of that out and then we'll keep going. That kind of really understanding and controlling and owning deeply, in a deep way, the editor from top to bottom will open up a lot of opportunities to do things a little bit differently, have a differentiated offering that's more deeply integrated, across the board, but including AI, obviously, because it's this very hot thing, right?

**Jerod Santo:** Right. I was going to ask you that, because I remember last year you were kind of excited about it already anyways, using it as a developer.

**Nathan Sobo:** Yeah.

**Jerod Santo:** But I wonder as a product person, as a business owner, do you feel like your hand is forced? Like, you couldn't work on something else really, right now, and stay competitive...

**Nathan Sobo:** I mean, we are working on other things, to be honest. We've just shipped Git integration, and we have a debugger that's, I think, going into private beta. At the time this will be aired, I think we'll be in private beta.

**Jerod Santo:** So you're multi-threaded.

**Nathan Sobo:** Yeah. We have to be, I think, because we're -- but yeah, there's a huge opportunity here. I mean, there's a lot for exactly the reason you brought up, like "Oh, I'm a happy Zed user because I don't want to be writing code in a webpage dressed up as a desktop app."

**Jerod Santo:** Right.

**Nathan Sobo:** But there's something compelling about the ability to have a natural language conversation with a genius-level golden retriever on acid and have it write code for you, you know? \[laughter\]

**Jerod Santo:** Hold on, let me digest that. A genius-level golden retriever on acid... Okay. Fair.

**Adam Stacoviak:** Oh, my gosh. Yeah, I can probably skip the \[acid part. \[laughter\]

**Jerod Santo:** Well, sometimes you can't help it. It's going to go on acid anyways. Like, you don't get a chance.

**Adam Stacoviak:** "Here's a tab for you..."

**Jerod Santo:** Right? I like golden retriever also, because I do -- just in our last episode I was kind of confessing that I treat it like a little buddy... Which feels weird if it was like a full-grown adult person. But like as a domesticated helper, like a dog, your best friend, I don't feel so bad being like "Good job, little guy." So I like that description.

**Adam Stacoviak:** \[08:10\] You've been saying "Good job, little guy"?

**Jerod Santo:** I mean, mostly when I talk to you about it. I'm like --

**Adam Stacoviak:** Proverbially.

**Jerod Santo:** Yeah, I don't like actually type that in.

**Nathan Sobo:** Well, it's just -- yeah, I use the word golden retriever just... I don't know. I mean, I shouldn't disrespect it, because it's incredibly powerful tech...

**Jerod Santo:** Yeah.

**Nathan Sobo:** But I was just in there trying to get Claude to produce old text, new text, and it's writing XML, old text, open tag, and then the close tag is new text. And I'm just like "Claude, come on now. Why are you doing that? Why are you doing that to me? Why are you making me be so liberal in what I accept?", or whatever. But it's fine. But that's what makes it interesting.

**Jerod Santo:** The other reason you don't want to disrespect it is because in the robot uprising - and Adam has made this point many times - they're gonna be like "This is the guy that called us a golden retriever", you know?

**Nathan Sobo:** Yeah, exactly.

**Adam Stacoviak:** On acid.

**Jerod Santo:** On acid... \[laughs\]

**Nathan Sobo:** They're gonna have the record.

**Jerod Santo:** "He did not respect us, and now he will respect us."

**Adam Stacoviak:** You did say genius level, though... So you complimented --

**Jerod Santo:** That's true.

**Adam Stacoviak:** Genius-level golden retriever on acid.

**Jerod Santo:** It is such a mixed bag though, isn't it?

**Nathan Sobo:** Yeah. And that's what makes it really fun, and mysterious, and frustrating, and all of the above to like build product around, so far. And I think we're definitely a team that's taken a certain kind of like algorithmic product development discipline, if that makes sense, sort of... We're the most extreme and deterministic. I think I've told you in a previous episode, maybe, about our tests where we lock down the networking layer, and drive it with a random number generator so that we can simulate every possible permutation of how packets pass each other. We've been obsessed with determinism to the degree of building a reliable algorithmic traditional system. And then along comes this technology that's like "I'm not going to do that at all." It is inherently stochastic, kind of inherently unpredictable...

**Jerod Santo:** Yes.

**Nathan Sobo:** And that's just been like an interesting edge, I think, for us to explore as a team. We're traversing the learning curve... I'm proud of us. And yeah, I think the cool thing is we'll have something unique to offer because of our deep understanding of the underlying tech.

**Jerod Santo:** So how do you test a genius-level golden retriever on acid?

**Nathan Sobo:** \[laughs\] Or yeah, how do you test a system that integrates as a fundamental component this inherently stochastic process? And we're like in the middle of traversing that learning curve. But I think for me, it was this realization that at the end of the day it's still kind of just a test, right? And so there are different approaches that we're kind of operating on the product at a bigger distance, done by certain members of the team... But really, to do it right, we've got to get right in there into the test suite. I think it's sort of the same mentality you're in when you're writing -- this is where I'm at, at least... And you start small; you're starting with unit tests. But the main difference is it's a test that doesn't necessarily pass or fail consistently. It's like a flaky test, basically. An inherently flaky test.

**Jerod Santo:** Right.

**Nathan Sobo:** And so we've got this -- I think we'll ship something interesting, standalone. Or we should. We want to move this into a procedural macro in Rust, but right now it's just a function that's just like eval... And run this test 100 freaking times, right? We run it kind of once up to a certain spot and snapshot, and then parallel, run it all.

**Jerod Santo:** Okay.

**Nathan Sobo:** And then we get a score. Like, how many of them passed, how many of them failed... It's sampling.

**Jerod Santo:** And there's a threshold? Like, if 80% pass, then we're good? Or...?

**Nathan Sobo:** \[12:00\] Yeah, yeah. We're playing with setting thresholds. You can commit a threshold that would potentially fail the build. We're being pretty conservative with those right now, because failing builds are annoying, and I think we're still kind of traversing the learning curve on all of this, quite honestly. But what we have is this new -- yeah a new experience where you can define tools, either pull them in via MCP... We've got a set of core tools that the agent can use. And it's an environment that's more optimized for just like having the standard conversation with an agent, where it's able to reach out and do things.

And so getting that UI in place, getting it nice, the checkpointing for which the CRDT stuff has been dope to have, the review experience for which the multi buffers that we've invested in are really great... Like, seeing everywhere that the agent did the editing. And kind of the overall chrome around the experience - we've got that in place, and then used it to start collecting data. Having collected the data, that is driving into "Alright, how do we make sure that we can prompt this thing and define the tool prompts and define the system prompt in such a way that things are going to be effective?" Make sure our tools are really unit-tested. I mean, all of that is like traditional software engineering to a T, other than this -- other than the golden retriever.

**Jerod Santo:** Right. \[laughter\] That reminds me in a small way of Gary Bernhardt's functional core imperative shell. And maybe it's the other way around. Where it's like, "Whatever it is, shell." And then, like, golden retriever core. \[laughter\] You're wrapping all the -- you're like blackboxing this thing that we don't know what it's going to do, but as long as we blackbox it right, and we prod it correctly, then we feel like we're doing our job.

**Nathan Sobo:** Yeah. Yeah. And so this thing we were just working on, it'll be shipped by the time this airs, right?

**Jerod Santo:** Yeah.

**Nathan Sobo:** But what we were working on earlier is streaming edits out of the LLM. So we're using tool calls. But the problem with tool calls, at least with the \[unintelligible 00:14:26.07\] API as it stands is like the key-value pairs will stream, but the values will not stream. We had started with a little thing where it's like old text, blah, new text, blah. Like, streaming these little old texts/new texts, Find/Replace operations \[unintelligible 00:14:43.19\] But the problem is if I'm waiting on the value pair, then the user is just sitting there, waiting, or whatever. And so breaking that down into the model performs a tool call, but that tool call just like describes the data, and then looping back around to the model and saying "Okay, hey, you need to perform this edit. Will you go ahead and do that, and just do that in your normal -- don't do that as a tool call. Just like stream that out to me." So we're streaming that out with the old text, new text XML... Yeah, and then we hit this freaking issue where the new text XML tag open tag matches with old texts, and it panics are -- or it didn't panic our parser, but the parser erred. But it only happened -- I don't know, it happened like 40% of the time, or something like that. Then we went into the prompt and I started and I was like "XML tags must be properly matched."

**Jerod Santo:** \[laughs\] Yeah...

**Nathan Sobo:** And we ran the eval again.

**Jerod Santo:** Tell me that worked...

**Nathan Sobo:** \[15:46\] It doesn't work. It didn't even work. And then Antonio was like "No, no, no, Nathan. Make it simple." And I was like "Okay, how do we do that?" He said -- I think it was sort of... After saying open tag, you must say close tag before you open another tag. So after saying old text, you must say slash old text. After new text, you must say slash new text. It went from 60% to 95% on the eval.

**Jerod Santo:** Nice.

**Nathan Sobo:** And then we're like "Okay, I guess we've got to go into the parser and just make it tolerant of this last 5% for a second." Anyway, that's just like a new little world for me. I'm used to just like having so much more control... But I'm enjoying it. It's like a fun challenge. It's a new type of product development, I guess.

**Adam Stacoviak:** It's almost like network latency. It's like, you can't control the network. You have no control over whether the call goes through or not. I mean, you can with the response code that comes back, but it's almost kind of like that. You can't predict whether the network will be there or not, or how fast it will be.

**Jerod Santo:** It's like a good comparison, but the prompting is the weird part.

**Adam Stacoviak:** It is.

**Jerod Santo:** Like, you can't just tell the network "Hey, now, when you send the packet..." You're literally like putting this little -- we're back to magic incantations, right? Like, deep down inside of Zed's agentic coding there's something that Nathan and your partner, your teammate came up with...

**Nathan Sobo:** Antonio, yes.

**Jerod Santo:** ...to like tell it how to spit out the right thing. It's so weird that \[unintelligible 00:17:12.28\]

**Nathan Sobo:** And the cool thing is those rules and stuff, because we're open source, it's like, they're all online.

**Adam Stacoviak:** They're there.

**Jerod Santo:** Right, right. That is cool.

**Nathan Sobo:** We have Zed.dev/leaked-prompts is the URL I want to put it on...

**Jerod Santo:** Yeah. \[laughs\]

**Nathan Sobo:** I'm like "Yeah, there's our leaked system prompts." We leak them ourselves, because we're open source.

**Jerod Santo:** Yeah, get some journalists who don't know what they're talking about to write about you, you know... Like, "Look at this..." \[laughter\] Get some free press out of it.

**Nathan Sobo:** "These people leak their own system prompts. What are they doing...?" \[laughs\]

**Jerod Santo:** Well, it turns out either you leak them yourself, or someone else leaks them for you. Those things seem like they are unable to be held.

**Nathan Sobo:** Yeah, that does seem true. What I will say about the networking thing is - yes, but it's even harder... Because we have simulated random network latencies, right? As I was describing, you can actually in Rust build your own custom scheduler that you drive with a random number generator, and every single async part of your entire app can be scheduled by that, and you can randomize the order that things happen in. That does not help you with what is one token distinction difference going to do to the behavior of this crazy LLM system. Like, it's fundamentally different. I don't know... We can always sample. I could use a seeded random number generator to like sample off the logits on the back of the LLM... But is that even meaningful? You know what I mean? Like, the whole point is to be able to change the prompt, and that you can change the prompt and get such a diversity of different outputs is kind of like the point of it, I guess. Anyway...

**Jerod Santo:** I've always felt like especially web development, but software development in general is a house of cards, that is held together with silly putty, and duct tape. But I feel like at this point we've completely lost the plot and we've just gone insane, and just like amped up the level of complexity, obscurity, randomness... It's getting crazy.

**Nathan Sobo:** Yeah. I mean, I think it's always been true, but maybe more true than ever, that I really don't think you can make it be a house of cards. Like, that was kind of a lot of the premise of Zed in a lot of ways... It's like "How about we don't build this one like a house of cards?" I mean, no software is perfect, and there's plenty of things that I would like to improve about Zed. But a big part of our philosophy is "Let's get the primitives correct and nice. And let's use those primitives to compose bigger components." And then when we realize that it's designed wrong - not constantly, because you have to ship... But to some extent, stop the line, fix it, and then keep moving forward, doing it right. And also just having things tested to death, and having rigor... Because I think now we've got the golden retriever. Like, if your system's already not reliable to a T, good luck.

**Jerod Santo:** \[20:11\] Right.

**Nathan Sobo:** Now you're unleashing this random process in the middle of it... I don't know. Again, you can maybe find those things without rigorous design and good testing in a system where it's less stochastic in nature. But how are you really going to explore the surface area of that?

So all the algorithmic stuff, I think, has to be dialed in. And then I think beyond that -- yeah, then there's this new frontier of like "Okay, once that's all working immaculately, now what about this LLM?" And how do we get that? But that can't be perfect ever, I think. That can only be like making the score as high as it can be.

So anyway, I really don't want -- I definitely don't want Zed held together with baling wire, but I think the opportunity... I'm writing a blog post about this. It's like, there's so many times, in every system - I'm sure you've been here, because I have many times - where you're like "It would be better if we did this. It would be better if we changed the design." But I just can't justify it right now. I have a timeline that's too tight. And you make that decision time after time after time, until you end up kind of in a legacy codebase, honestly.

**Jerod Santo:** Right.

**Nathan Sobo:** And I think the exciting promise of AI for me is it's less about how many billion lines of code we generate a day, or whatever, as a human species, but more like "How many well-tuned, not held together with bailing wire, really high-quality software systems are we maintaining as the human race?"

I did this pull request over the holidays; it was like 30,000 lines, and it nearly killed me. And then it inspired something that I hope we're going to be shipping in a couple weeks, doing an AI feature, basically. But yeah, the effort that has traditionally been involved in any codebase that meets the real world at scale has been too much. It's been too much to really keep things clean. Anyway... But not now.

**Jerod Santo:** No, I think that's a really good way of looking at it, because my entire software career I have been selling the idea of slowing down to go faster, and spending the extra time and the extra money to design it right, to test it right, to do all of the rigorous things that slow you down and cost more money. It's a very hard sell. However, what if the cost of that was approaching zero? What if the cost of your big rewrite or your big refactor was like 15 minutes? Like, why wouldn't you just go fix it?

**Nathan Sobo:** Totally.

**Jerod Santo:** You don't have to talk to anybody. Just do it.

**Nathan Sobo:** I spent like two freaking weeks on and off, and like a very intensive week kind of right around New Year's... Oh, my God. Yeah, I pulled an all nighter around New Year's day, because I told myself "I'm not going to blow my time box on this", right?

**Adam Stacoviak:** "Oh, I almost got it."

**Nathan Sobo:** Yeah. I told myself, "I'm not going to blow my time box on this." And - yeah, and I got it compiling at least. Just like change to this core part of the gpui API that's just called like thousands and thousands of times all over the system... But it was wrong. It wasn't right. But I hadn't realized it wasn't right when we upgraded from gpui 1.0 to gpui 2.0. But it's like "Okay, now that I've seen it though, I have two choices." I can accept it...

**Jerod Santo:** Or pull an all nighter.

**Nathan Sobo:** ...and it's in the codebase forever, or I can fix it, and like work my tail off fixing. And it's cool now that I think -- and I think we're still getting there; to be real, we're still getting there.

**Jerod Santo:** Sure.

**Nathan Sobo:** But the promise of AI, I think, for me, is having this third choice, of like "I fix it, and the horrible part of fixing it is actually fast."

**Jerod Santo:** \[24:16\] Right.

**Adam Stacoviak:** Yeah, there's something that has happened with access to all the things. I'm not going to name them all. We all know what they're called... Is that the trivial yet mundane things we would do are somehow made a little easy. Like, an email response. I did this thing, I was like "I almost procrastinated on two different emails today." And this is not coding. This is just very simple, everyday things. And I'm like "I have in my brain a version of what I want to say, but I don't have the right -- I don't have it framed well." Like "This is the facts. Here's bullet points. Here's what they said, here's what I want to say. Make it happen." And then out it comes. I'm like "That's awesome." Cut and paste, move along. Instead of procrastinating, doing my thing, coming back an hour later... You know what I mean? It's these little tiny things that are now solved so simply, that we used to just not do because they were either arduous, or just daunting, or cognitive...

**Jerod Santo:** Time consuming...

**Adam Stacoviak:** Huh?

**Jerod Santo:** Time consuming.

**Adam Stacoviak:** Yeah, time consuming. But even from a cognitive overload standpoint...

**Nathan Sobo:** Right, right. I get you on both fronts.

**Adam Stacoviak:** Yeah, I mean, that's it for me. In one scenario or two where I would normally procrastinate, I've now forced myself to say "Let me consult my genius golden retriever on acid to help me." \[laughter\] Because it's there, waiting, willing and ready. And provided it can do a mostly good job... I massage it on the final end, but it's done the 80%. I've done the 20%, and I've moved along. You rinse, repeat that across a simple email response to a code refactor, to a new vibe-coded idea, and you've now continued to move. That's probably my biggest fear, is that the world won't respect what we respect, which is purity and greatness in software development, and this rigor that you guys talk about, and the stability in our software, is that the world almost wants more software faster... And now, because that's progress, and at some point we'll have maybe global legacy crap, I guess... Not even code at that point. I'm kind of concerned about that a little bit.

**Jerod Santo:** Sludge...

**Nathan Sobo:** Yeah, I think it's -- I mean, I don't know. To me it's like "Fine..." It's good to have more software on the whole, and it's good to have more people creating software that meets their needs on the whole. And my sense - and we'll see, because - I don't know, I can't predict the future. Maybe the singularity is tomorrow. But my sense is that as a piece of software that maybe you started -- maybe it was your third vibe-code result, like a short $10's worth of tokens on three different LLM providers or whatever, and then vibe-coded out the starting point... And you're like "Great. I've now chanced upon an amazing idea." And you start iterating on it... Sooner or later -- if it's meeting real world demand and you're going to try to change it, my sense is sooner or later you're going to want to understand the behavior of that system. And then you're right back to the same place we've always been in software, which is like the constraints on what we can build with software is not -- they're not analog constraints. That's certainly true.

**Jerod Santo:** Right.

**Nathan Sobo:** \[27:42\] And they're also kind of not like even digital constraints in the sense that we could generate a ton of code now as well. But the constraints are, I think, still about controlling complexity. Controlling the complexity of the system we're building, understanding the implications of what we've created. I don't know. I mean, at some point, if AGI comes and I can like literally go to a web form and prompt it and say "Write me a fast, collaborative code editor that supports AI really well", and like out pops the binary... Then cool. I guess we don't need to understand our software. But until then --

**Adam Stacoviak:** Sadness. Sadness, man. Sadness.

**Nathan Sobo:** \[laughs\]

**Jerod Santo:** Zed would be dead at that point.

**Adam Stacoviak:** Yeah. Gosh.

**Nathan Sobo:** It would be like a hobby. It would be like a hobbyist tool. Kind of like a Ford Model T, or something.

**Jerod Santo:** Yeah, somebody working on their old muscle cars, or something.

**Nathan Sobo:** Yeah.

**Adam Stacoviak:** I'm on the line of this idea - when you're in sales, you always think it's a numbers game. Or anything, really. If you're trying to grow a startup, it's a numbers game. The more opportunities you have, the more possibilities you get for a yes. Obviously, you get some no's too, but I feel like this is the ultimate numbers game increaser for everyone. Whereas you may have only had 10 results or 10 opportunities before, it's not that you have infinite, but you can iterate faster through ideation, or things that may or may not be good ideas for the world. Much, much faster.

**Nathan Sobo:** Right.

**Adam Stacoviak:** You can test and experiment at such a rate, and fail sooner, too. Like, don't waste so much time. Or find the thing that's actually got a thread to pull and you pull on that thread, and you do what you've got to do to take that next step. I feel like that's what's happening, it's like the ultimate numbers game increaser for everybody.

**Nathan Sobo:** But overall -- I don't know, my challenge to myself, and everybody on my team, and everybody, is like the bar should be higher now. If we have this new technology that can automate tedious BS, then we should have fewer excuses. In a world where I can generate tests, like - okay, not writing tests, not having a feedback loop on your software... Come on now. Really? You don't have time to generate the tests? So I think the bar for all engineers needs to go up in terms of the quality of what we're building.

**Jerod Santo:** For sure. Yeah, the trade-off has always been the value. Let's just take testing as one example of rigor. Like, the value of those tests divided by the cost of those tests. That's where you decide "Should I do this or not?" And it's been a hard sell even beyond the engineers, but like to the product owners, or the boss, or whoever, that it's worth that trade-off to them... Because all they see is like "We want progress, not toiling away."

**Nathan Sobo:** Sustainable progress.

**Jerod Santo:** Yeah. Not just like doggy paddling; we're not going anywhere. But as the cost approaches zero, which is what's going to happen if we continue to make progress like this. The cost is going down towards zero; it's not there yet. But if it gets down near zero, then the value to cost calculation is like -- it's a no-brainer. Like, you don't really have any reason not to just add the test suite, because you didn't have to spend the time writing it. Maybe you had a glance at it and make sure it's not on acid, and that's about it.

**Nathan Sobo:** Right. And in a world where you're spending, I don't know, 50 cents worth of compute, choking on some error in your algorithmic code, the cost is going up of getting it wrong as well, you know?

**Adam Stacoviak:** I mean, not that I'm saying this, by any means, \[unintelligible 00:31:08.21\]

**Jerod Santo:** Who's saying it?

**Adam Stacoviak:** ...but Cursor was founded in 2022, and then I think they got some seed funding and like officially came out early '23. And they came out focused on AI. They sped through the process. Whereas you were aware of and knew where some things were going, but you focused on the core editor. Do you feel like -- I mean, because when I go to cursor.com, for example, it says "The AI code editor." And when I go to Zed, it says "The editor for what's next." It does mention AI, but it's the last two characters of your subtitle, which is not even your main title. It doesn't speak what I would say maybe a lesser known, modern code editor might be suggesting. Do you feel like you were late? Do you feel like you missed something? Do you feel like --

**Nathan Sobo:** Yeah, I don't feel late, because I think we're all early. Yeah, I mean, I definitely didn't set out to build an AI code editor when I started Zed, because...

**Adam Stacoviak:** \[32:14\] That wasn't the point.

**Nathan Sobo:** Yeah, exactly. I set out to build the future of software development. People laugh at me less when I say that or whatever now, because we've proven out more of our ability to just get close... But it's always been this vision of a fundamentally better experience for the developer. Yeah, and then AI emerged into this world.

So we are hardcore tool builders, editor people, for sure. And yeah, as this is all -- I mean, just looking at and admiring, I think I did a good job on it. It was a long time ago that I wrote the code that integrated with all the API endpoints, and we've had all kinds of infrastructure in place for experimenting and playing with the LLMs, but we also just landed Git integration. We're shipping a debugger... So are we late? I think if you view things at a snapshot in time at maybe this exact moment or up until we launched this next agentic editing experience, you might say in some ways we're behind. But I think the way you're going to measure progress is kind of a vector. And ultimately, I want to measure progress from sort of where do we stand in five years.

So what I'm excited about is like, okay, having done it the hard way, owning the underlying tech, what can we do with that? How do we build the future of software development? How do we build for the present moment in technology of what people are wanting, and what the possibilities are. And I think the exciting thing about owning our full stack - it's getting close to 600,000 lines of Rust, that basically every member of our team... You know, every line of that code is kind of -- almost all of it is written by somebody that's still on staff, with our team. We understand the system deeply. What does it mean to take -- yeah, so I think we have the opportunity to kind of build the first AI native editor.

You can say you're an AI code editor, but if you're kind of adapting a code editor that was developed for the pre-AI era by a much larger, different team, at a different company, my bet is that over time that may hamstring you. And so hopefully going forward, we'll have the opportunity to leverage our deep technical understanding to do more.

**Jerod Santo:** It has to feel good, like you said earlier, to be able to use your primitives that you've built up as you add this major new functionality, of like building on top of those things. Let me ask you a similar question, but a different one. So Adam mentions Cursor, I'll mention Windsurf, which - honestly, I had never even heard of Windsurf. Now, it turns out that's a rename of Codeium, which I had heard of, and it has been around for a while.

**Nathan Sobo:** Right, right.

**Jerod Santo:** So they rebranded at some point. I missed the boat on that. In talks to be bought by OpenAI.

**Nathan Sobo:** I heard this rumor.

**Jerod Santo:** Yes. This is not yet announced... The deal is not finalized yet, and could change. So they're in negotiations. This is according to NBC News. "OpenAI advanced talks to acquire Windsurf for approximately $3 billion." So my question is "Would you take that deal?"

**Nathan Sobo:** I don't think it's responsible for me to answer that question right now. \[laughter\] It's crazy. That's definitely crazy.

**Jerod Santo:** That's a lot of money.

**Nathan Sobo:** \[35:44\] I mean, to me, that deal is a sign that we're onto something. I'll put it that way. That the actual technology that connects this revolutionary LLM technology to the end user, that covers the last mile, that puts the developer at the center of that experience is incredibly valuable. I've always believed that, and it's never -- and I've always had this collaborative approach, of like "We're going to integrate." And I think we still have a ways to go there, to be fair, although the way our team works I think is unlike any I've ever been on, using Zed. Being as collaborative as we are. But when you now have a new kind of collaborator that will literally respond immediately, anytime you say anything, sometimes with some more or less on acid things, but often with exactly what you want... Yeah, it becomes even more important, I think, to have kind of a higher fidelity, faster tooling around the management of change, coordination of change, collaborating basically, in software.

I was envisioning -- my version of a multi-agent system that I was dreaming of before I understood the power of LLMs, when we were first starting Zed, was this notion of like mob coding where you have all these live branches, and people are off on their own live branch, and you're kind of pulling their changes in dynamically... And that was a cool idea, but getting all those people in that particular configuration is kind of a special thing to imagine. But now they're just there. The people are there to collaborate with.

**Jerod Santo:** The people are there, right. Yeah, the agents are there and waiting to do things for you.

**Nathan Sobo:** Yeah. So I'm excited to play that forward, I guess, further even from where we're at now.

**Jerod Santo:** Yeah, 100%. I think nobody really knows where that's going to take us, or how that's going to actually manifest. I think we do know that it's going to be, at least in the short and medium term, very expensive in terms of compute, to have me plus 50 agents doing stuff all the time.

**Nathan Sobo:** Well, especially if they're not doing the right thing, right?

**Jerod Santo:** \[laughs\] Yeah, exactly.

**Nathan Sobo:** So coordinating that well to me seems incredibly valuable, you know?

**Jerod Santo:** Yeah, 100%.

**Nathan Sobo:** And so in a world where you can kind of open a pull request using a tool that was essentially designed for like the kernel mailing list, emailing each other patches, when your colleague just pushed a pull request and like they went home for the day, it's fine that you're kind of doing that in a web form, not directly integrated into the tool you're using. But I think in a world where it's an agent running off somewhere or whatever, you need to give it feedback now. It just seems like all that tooling needs to level up.

And I've always been excited about... It's kind of a self-serving narrative for me, or maybe I'm drunk on my own wine here or whatever, but I'm excited about the prospect of leveling up how we manage change in the software world. And I think there's a compelling impetus to do so now.

**Jerod Santo:** Do you think tools like Git become less relevant in a world like that?

**Nathan Sobo:** I mean, I think Git is here for a very, very, very long time. So this is not to disparage Git. And -- I don't know, I worked at GitHub. I love Git.

**Jerod Santo:** Yeah.

**Nathan Sobo:** So again, there's so many things tied to Git, and so many ways in which Git is deeply embedded in what we're doing...

But I think there's an opportunity to augment Git, I think, with a finer-grained understanding of what's going on, finer-grained tools. To me, that's the role of the editor. It's more this vertically-integrated... Or something that drops out of the editor to become more universal over time, or whatever. But the idea of a vertically-integrated... Yeah, an authoring experience that treats the process of change and distributed change as like a first-class concern by design.

**Jerod Santo:** Yeah, interesting.

**Break**: \[39:51\]

**Jerod Santo:** So last year when we talked I think where the AI stuff in Zed stood was you had this little sidebar that would come out, and you could plug OpenAI API into it, and maybe like a couple other models. I don't recall exactly. I know that after our call you helped me debug mine, because I couldn't get my API key to actually register, and... You know, it was--

**Nathan Sobo:** It was early.

**Jerod Santo:** You were baking it still. Yeah, it was very early. It worked. Once the founder of the editor helped me, it worked.

**Nathan Sobo:** \[laughs\]

**Jerod Santo:** So first-class support. But it was very much like "Here's maybe my file", or maybe even no context; just chatting with it in the right-hand sidebar. And talking about code with your agent.

**Nathan Sobo:** Yeah, the premise was like strap a text editor to an LLM and hit go, you know?

**Jerod Santo:** Yes. And that was cool because it was configurable, and it's continuing to get more configurable. I like how fast you guys pump out when there's a new model that comes out, whether it's open or proprietary... Basically it's there, and you just select it from the dropdown, as long as you have your key in there...

**Nathan Sobo:** Right. And that's a big part of our philosophy, honestly, is empower the developer. If the developer wants to use Ollama, or some other thing again... Again, that's a process that I'm not necessarily like -- again, am I bending over backwards to go cover the last 2% of the market for you, or whatever? I don't know. I mean, we're prioritizing. But this overall mentality of "Come on, come into the development environment and bring the tools that you want to bring. And we'll offer you some, too", because that's our duty, I think. But not trying to be sharp-elbowed about exactly how you configure your experience is a big thing for us. But anyway, continue. Continue.

**Jerod Santo:** Yeah. So I just was saying, I appreciate that you're like that, because as a person who likes choice, it's great to just not have to change my editor when I want to try a new model; just change the model and continue to have the experience that I already appreciated. But I would like you to explain to me, since I've just now gotten the beta -- when this show comes out, it's probably all going to be out there in public. Deadlines, right? Software deadlines; who knows? But I haven't really played with it very much. Our audience hasn't played with it at all. We're not going to screenshare and go point by point through it, like what the agentic coding experience is like... So if you could just like broad strokes describe what has gone from that, which is like an LLM in your sidebar talking to you, to what is going to come out next... Or even if you can go beyond next, where are you taking it? Can you describe what the new is like?

**Nathan Sobo:** Yeah. I'm very immersed in the now, so let's start there.

**Jerod Santo:** Sure.

**Nathan Sobo:** I mean, first, just to talk about what we had... I mean, what we had was sort of - I needed to explore the technology, and needed a good developer tool for doing that. And so that's very much what shaped the old experience, of just like "I'm editing prompts and manipulating what the input is to this thing, and I want to feel and see exactly what it's seeing in order to have an understanding there." But going from that, kind of chewing on it from that side, of like strapping an editor to an LLM... It was very optimized for writing. Like, you could move your cursor anywhere in that document. But then it wasn't necessarily optimized for "I just want to have a chat with my editor" or "I want to have a chat with an agent inside my editor, and have that agent go take actions on my behalf and do things." It was more of a low-level tool.

And so what we're really offering now is - yeah, more of that full agentic experience, where first and foremost the panels optimize for sort of readability and clarity of that conversation as sort of a conversation with a goal; the goal of understanding and/or editing code. Whereas in the other world, it was very open-ended, raw texts. The tool calling support is integrated, so the agent can actually reach out and do things like grep your codebase, or perform streaming edits. When that occurs, you're able to review the impact of what the agent did in a Zed multi-buffer. So the idea is you can kind of click down at the bottom and see -- you know, there's like a little diff of edits that have occurred so far in the thread, you can review them, that pulls them up in a multi-buffer...

\[48:11\] And again, I think -- who knows, maybe great minds think alike... You know, maybe some other products I've seen some stuff like this, but a Zed multi-buffer is a different kind of experience, I think, than just throwing a bunch of editors together. We really model that in the product as a single coherent virtual buffer. It's as if that is one file that's curated together out of content from these multiple different files... And so that's a fairly deep, core concept in the system, rather than a bunch of editors. So you could do multi-cursor edits across those... I don't know, there's a lot of just like really nice UX, I think, that comes out of a multi-buffer really being abstracted in the system as like Zed's buffer experience, period.

**Jerod Santo:** Yeah. I've noticed you've reused it in the Git stuff, whereas at first it was only in like search results when I would see it and use it... And at first, I was somewhat put off by it, if you recall our last call, because as a Sublime Text user, it was just a little bit different than what I was used to... And I felt like Sublime Text was a little bit lighter and faster. But now that I've realized how to use multi-buffers, the way I was using Sublime is kind of obsolete, because I can just make the changes there in the multi-buffer, versus like clicking out to the different files. And that's cool. So I've grown to like multi-buffers quite a bit. And now that I see it in the Git -- it's basically your Git diff, or whatever; staged or not staged. You can do your staging and stuff in this multi-buffer. Anyways, I might've cut you off, but I just thought of another place where you've used it, which is like "That's cool." I'm used to that now. When I saw it in the Git world, I was like "Oh, I get this."

**Nathan Sobo:** Yeah. So in the Git world we have a single multi-buffer, which has excerpts of every location in your project that has changes. And then the Git panel, which has your sort of file-level status, actually acts as almost like a table of contents for that multi-buffer, scrolling you through it to distinct locations.

**Jerod Santo:** Mm-hm. Cool.

**Nathan Sobo:** Yeah, and so like you said, we use them in the search results, we use them in diagnostics, for example... And I think there's cool opportunities there for some batch level fixing of diagnostics, which would have made my life in December a little less miserable... But of course, there's also this review experience that I'm describing. And we're gonna experiment with this... I think we're gonna get it in for the launch, so I'll just talk about it.

**Jerod Santo:** Sure.

**Nathan Sobo:** This idea of as you're kind of going back and forth with an agent, and it's reading files, and proposing edits, and doing its thing, it's building up this multi-buffer for you to like review those changes. And you can obviously put your cursor in that multi-buffer, and we do a great job, whether you're in the multi-buffer or in the buffer itself. Like, the multi-buffer is kind of this composite entity, but if you were to kind of hit Alt+Enter and travel into one of those excerpts to the actual origin of that content, you would be able to edit that, obviously. And we use the CRDT to do a really good job like disentangling your edits from the edits that the LLM has done. So it makes it like a really -- you know, a feeling like "Oh, I can kind of collaborate with the LLM here a little bit. It's not single-threaded. I can let it do its thing, and go do my thing, and this all like makes sense. I don't see edits \[unintelligible 00:51:16.27\]

But then the thought is "Okay, maybe you make a tweak to what the LLM did, and then accept it", or whatever. Right now, the first version of it, we're like just hiding it when you're done. Like "Okay, you're done." But I have this idea of "What if we keep it there?" and then there's this secondary step to dismiss. Then what's happening is this agentic interaction is almost building up this curated, editable subset of your codebase. Like, just the parts of the code that are relevant to the conversation at hand. Otherwise, why would they even be referenced in this review experience? So it's almost like this multi-buffer... I don't know, this is all just really new thinking for me, but like... It could have enduring value as like -- you know, I love this analogy of missiles versus guns. In World War II all the dogfights, I think almost all of them were probably done with guns. And now, we have like the F-35, or whatever, and if there ever is a dogfight - hopefully there won't be one - it's like a missile that destroys the thing over the horizon, or whatever.

\[52:21\] But then in Vietnam there was this time where I guess there were some gun battles and some missile battles. Missiles weren't yet that reliable, or whatever. And so I think -- yeah, AI is kind of the missiles. You've got this agentic process that you kick off, go get a coffee or whatever... Then you come in, you've got your multi-buffer, you review it. If it's great, then good, keep going. If it's not, switch to guns. And that's where Zed really shines, because it's just like, you know... I think it shines across the board, but having a great editing experience, and having everything that might be relevant based on what you just did kind of presented there in one spot for you to work with.

**Jerod Santo:** Yeah.

**Adam Stacoviak:** A multi-buffer is whenever you have multiple files open and they're all being edited, right? Like, this is not just like a multi-line in a single file. It's multi-files being edited at once in the buffer of the AI. Is that right?

**Nathan Sobo:** Yeah, it's like a single virtual buffer that composes excerpts from multiple files in one scrollable editor. Like, it's treated as a virtual buffer, but it's not actually one buffer. It's composite.

**Jerod Santo:** But it does present itself as a single buffer, and as you are editing or looking at it or scrolling it, it will show you where different files start and stop, but you can change them right there, you don't have to go click through to that file unless you want to, to make changes to those files.

**Nathan Sobo:** And so yeah, it's just like there's been interesting ways thus far in the history of Zed to like populate one of these multi-buffers. You could do a project-wide search. You could get the diagnostics; where are there problems? Now we have the git diff. But a really interesting one for me is you can have a conversation with an agent. And that's so interesting. It would leave behind as like an artifact of that this potentially useful subset of the code that's like ready to edit right there. We'll see if it works, and how that works.

**Jerod Santo:** Yeah. Is there any value or reason to persist those somehow, and be able to recall them as if they were...?

**Nathan Sobo:** Yeah, we haven't gotten that far, but maybe. Yes. And in order to do that -- I mean, I think the challenge starts to get in... There's some things right now that are CRDTs, the conflict-free replicated data types, which we've talked about in previous episodes... But eventually consistent data structures that track the edit history of your buffers in a fine-grained way. Tracking at that level of granularity I think is sort of required for presenting a really good multi-buffer experience, and especially one that you'd persist over time... And it's just that those right now are all in-memory structures. So it's been a long time to continue that work and pull them out of in-memory and go further... But that's kind of still all sort of in progress, I think, where you have some like early design work on how to get that stuff more persistent, in the oven, early bake. Preheating. Preheating the oven. \[laughs\]

**Jerod Santo:** For some reason you triggered the easy bake oven in my head, but this does not sound like easy bake at all. Early bake, but not easy bake. Okay.

**Adam Stacoviak:** Can I share here in the moment some experience with this?

**Nathan Sobo:** Yes, please do, and I hope it doesn't kill me.

**Adam Stacoviak:** I'm not not paying attention, I'm listening, I'm letting y'all talk. I'm paying attention.

**Jerod Santo:** You're doing it all, man.

**Adam Stacoviak:** But I'm playing.

**Jerod Santo:** Oh, you're playing.

**Adam Stacoviak:** I'm playing with this agent.

**Jerod Santo:** Nice.

**Adam Stacoviak:** \[55:49\] And it's the coolest thing ever. I think it's just revolutionary/magic/ould never expect this to be possible, ever, ever, ever. But it is.

**Nathan Sobo:** \[laughs\]

**Jerod Santo:** Put that on your homepage, Nathan.

**Adam Stacoviak:** Right?!

**Nathan Sobo:** \[laughs\]

**Jerod Santo:** "Adam Stacoviak said..."

**Adam Stacoviak:** I'm using Zed, I am just in my simple adamstacoviak.com Jekyll website, and I was like "Okay, what's the best way to test this?" I opened up the agent part of it, which I believe is Command+R... What is it? How do you get to the agent? Something like that. I don't know. It's down at the bottom right.

**Nathan Sobo:** Command+R will target the right bar. But Command+? will --

**Adam Stacoviak:** Command+?, yes.

**Nathan Sobo:** And you have to hold Shift, so that makes it a little awkward... But the idea was it's easy to remember. "I have a question. I want to interact with you. Help me out."

**Adam Stacoviak:** I like that.

**Jerod Santo:** Oh, I learned something. I didn't know that did that. Okay.

**Adam Stacoviak:** I would actually... I've got a different idea, but don't worry about it. I won't fork my thought process here. So I'm here, in a very common file, in a Jekyll project that everyone has. It's the config file. And it's a YAML file, and so that means you can just make this thing a mess if you want to. You can forget things, you can add spaces, it could be jacked up and you'd never know it... And I just said to this thing, I said "Are there clear improvements I can make to this file?" And I've been over here, making improvements. Okay?

**Nathan Sobo:** Nice! Good to hear.

**Adam Stacoviak:** It made a bunch of suggestions, I reviewed them all, I'm like "These are amazing." It took me to a whole new branch. It opened a Markdown file and described the changes it's making for me... And the whole time I feel like I'm just like just driving the... I don't know how to describe what I'm doing here. I feel like I'm just like...

**Jerod Santo:** You're going for a ride.

**Adam Stacoviak:** I'm just here directing.

**Nathan Sobo:** You're collaborating.

**Adam Stacoviak:** I'm just here directing. I know what the code should read; I'm not writing the code. It's writing it, and I'm like "Yeah, that's cool."

**Nathan Sobo:** You're collaborating, in a way.

**Adam Stacoviak:** Yeah.

**Nathan Sobo:** I think you kind of are. It's like a collaboration.

**Adam Stacoviak:** It's very much like that.

**Jerod Santo:** \[unintelligible 00:57:40.01\] jazz.

**Nathan Sobo:** I mean, we built Zed because I don't want to collaborate on a screen share session where I can't type, right? I want to be an engaged participant. I think it's my ethical duty to be an engaged participant depending on what software I'm working on. So I'm not just like literally vomiting generated text into the... I mean, whatever. Depending on the situation, that may be totally reasonable. But I like the idea of being an engaged participant. When I'm collaborating with a human, I'm always more engaged when I have the opportunity to kind of grab the wheel. I can follow them through what they're doing, but I also have the ability to intercede if I need to. So really, it's all about surfacing great primitives for you to stay engaged while getting leverage from this thing helping you.

**Adam Stacoviak:** Yeah. It's very much a conversational scenario. I won't go into it because it's not worth it, but there's just some things that stood out to me as part of this... When I began the process, I didn't pay attention to the state of my branch. So I was in a -- I had some work I was working on... I think I was doing something with Tailwind Config, and I was like midway through it, and I haven't touched it in months, because it wasn't important. I was just playing around. And so I think there was some like dirty code there. There was files created and they weren't committed to the branch. But I'm in a branch. Well, it took me to a whole new branch, it took that uncommitted dirty code basically with it, told me to stash it, helped me to stash it... Which - who remembers the syntax to stash? I don't. Ever. Or how to unstash. Like, forget that.

**Jerod Santo:** You just git stash...

**Adam Stacoviak:** That's the LLM's job now.

**Jerod Santo:** True.

**Adam Stacoviak:** Right? And so it stashed the code for me. This is only after I'm like "I think we have some dirty code here. We couldn't commit it..." And then it helped me stash that code, commit the code it created, and then go back to the original branch, unstash that stuff, commit it... And then now they're -- like, in minutes. I would have -- I clearly procrastinate on this change anyways, and didn't even know I could make improvements to this config file... But here I am, just in this podcast, doing it. And it's very collaborative. It's like talking to a buddy. "Okay, let's do this. Okay, let's do that." And it's asking me for permission, it's saying "Allow", "Don't allow", "Allow once"... And because I have signed commits, I have to use my fingerprint to sign the code... So it's not like it can just commit and sign the code for me. I still need the Adam fingerprint in there. I'm just like -- I can't even believe this is possible, man. This is just... I'm in the future, right now. \[laughter\]

**Nathan Sobo:** \[01:00:13.28\] It's weird how fast we get used to living in the future. It's like so funny, huh?

**Adam Stacoviak:** Well, thank you.

**Nathan Sobo:** It is amazing...

**Adam Stacoviak:** Thank you for making this. This is amazing.

**Nathan Sobo:** ...that that's possible.

**Jerod Santo:** Yeah, it is cool.

**Nathan Sobo:** Well, I mean, hey... I view our job is just to build a fabulous UI to what is ultimately not my creation; it's this crazy technology of an LLM. And the idea that "Hey, we're going to train a freaking massive neural network connected up a certain way on like trillions of freaking tokens, and then synthesize data", and then God knows what -- yeah, Anthropic, I'm assuming you're using Sonnet for this, right?

**Adam Stacoviak:** Sonnet 3.7, yeah.

**Nathan Sobo:** And so I'm excited -- what I'm happy about though is... Yeah, just watching it from the course of 3.5 to 3.7 get better at using tools... Yeah, just that -- I mean, ultimately I want the user to have an amazing experience... And so ultimately, we have to figure out how to make it magical. But it really helps that the models are good at using tools, and that we can build good tools and give it to the model, and it can use them and do useful things. That is unreal. But isn't it nice doing it at 120 frames a second?

**Jerod Santo:** Of course it is.

**Adam Stacoviak:** Yes, it is...

**Jerod Santo:** It's like, why wouldn't you want to be in first class, you know?

**Nathan Sobo:** \[laughs\]

**Jerod Santo:** Like, is it nice up here, first class? Yeah, of course it is. "Do you like that 120 frames per second...?"

**Nathan Sobo:** \[laughs\]

**Jerod Santo:** That's just why when I was like "These cool, new agentic things and they're all VS Code forks." It's like, I'm sorry, I just don't enjoy VS Code. That's just me personally. I feel like it's coach; that I'm flying coach. So that's just me giving Zed more props.

**Nathan Sobo:** I appreciate that.

**Jerod Santo:** But have you guys seen the -- I didn't bring up first class out of nowhere, because I was thinking about that Louis CK bit, with the guy on the airplane...

**Adam Stacoviak:** Oh, I love that one.

**Jerod Santo:** Have you seen that bit, Nathan?

**Adam Stacoviak:** I love that bit, man. It's the best ever.

**Nathan Sobo:** No. Tell me about it.

**Adam Stacoviak:** Tell it, Jerod. Paraphrase it.

**Jerod Santo:** I'll paraphrase it. It's on point because it's about how quickly we take things for granted. So basically, Louis CK is on an airplane, and there's a guy sitting next to him... And the lady comes over the loudspeaker, she's like "I'm sorry, the Wi-Fi will not be working on this flight", or something. And the guy's like "This is BS", you know? And Louis CK is like -- his whole point was "It's amazing when you take for granted something you didn't know existed 10 minutes ago." And he's like "You're sitting in a chair, like 35,000 feet in the air, flying at 700 miles an hour..." And he calls him a non-contributing zero... Anyways, you should go watch it, it's hilarious. Yeah, he's like "You good-for-nothing, non-contributing zero." But it's weird how quickly we do... On a recent episode I was just complaining about how bad Gemini's function was that it wrote for me... And then I had to stop and be like "I'm just complaining about something that's like just deep, dark magic, that we have for free", you know...

**Nathan Sobo:** I think the things that I want to complain the loudest about are the things that I have the most responsibility for, and/or ability to have an impact on. And then I want to phrase that in a positive way. You can ask my team how effectively I do that. Sometimes better than others, I think... Because I think we all get frustrated, but it's because you're like trying to push the envelope. I mean, that guy that's trying to get on Wi-Fi and just wants to do his board deck or whatever \[unintelligible 01:03:44.21\]

**Jerod Santo:** Yeah, that's why it's so funny, because he feels entitled to something he had nothing to do with any of the technologies that came together. The amazing inventiveness of the human race in order to put him in the sky, flying, and then connect him to the internet, and he's just sitting there, doing nothing. But yeah, in a position to improve and create is definitely the best place to critique, because you actually can affect change there. So you're in a good spot. Adam and I just like to do it because it's fun... And we can have the ear of the guy who's driving the plane, as you are.

**Nathan Sobo:** \[01:04:21.23\] Yeah, I still think about you guys telling me "How about doing 60 frames per second effects?" Or 120 frames per second. You know, just really fluid effects and things of that nature, that we still have yet to do some of those \[unintelligible 01:04:31.04\]

**Jerod Santo:** I mean, that's why I was getting at it from the other part. You're working on this AI stuff, you know... None of my sweet ideas are coming through yet, but...

**Nathan Sobo:** \[laughs\]

**Jerod Santo:** I also want to get support, so I'm just... I'm happy with Git support.

**Nathan Sobo:** Good.

**Jerod Santo:** I think eventually you'll get around to those really cool effects, and that's when you'll go \[unintelligible 01:04:46.29\]

**Nathan Sobo:** And we added remoting. I don't know if you've used that, but like being able to, as a first class part of the product, SSH to a remote machine and have to Git support...

**Jerod Santo:** Oh yeah, I haven't tried that yet.

**Nathan Sobo:** It's a debugger that we're going into private beta with. It will also work over the remote connection. But it depends on what you're working on, I guess, whether that's relevant. Yeah.

**Jerod Santo:** Yeah, I haven't tried that out yet. I did see -- I do enjoy the weekly updates. Is it like Wednesdays, I think? Generally one time a week there's like one big push, and then a few will trickle out, as I see; obviously, feedback and bugs...

**Adam Stacoviak:** You're paying attention to these weekly updates, Jerod?

**Jerod Santo:** Well, yeah, because there's a little button that says "Click to restart Zed and update it", bam. And then it's like you're on a new version, click a button, hit the release notes...

**Adam Stacoviak:** Might as well check it out.

**Jerod Santo:** ...it takes you into a buffer, it tells you what's new... I mean, it's just fun. You're like "Oh, what's new?"

**Adam Stacoviak:** "It's just fun."

**Jerod Santo:** I mean, I'm giving the guy zero dollars, you know? Nathan, I've given you nothing. And every week you're like dropping goodies in my lap. You know what I'm saying?

**Nathan Sobo:** No, you've given me a lot. You've given me a lot. I can't tell you the number of times that people reference the podcasts I've done with you guys over the years...

**Jerod Santo:** That's cool.

**Nathan Sobo:** So don't underestimate your impact.

**Jerod Santo:** Alright. Well, thank you.

**Nathan Sobo:** What should we talk about next? \[laughter\]

**Jerod Santo:** Good question. What are you thinking, Adam?

**Adam Stacoviak:** I'm just... I'm thinking, now that I've done this, and I see the workflow and the user experience... One, it's a really good user experience. So this is new, and --

**Nathan Sobo:** Thank you.

**Adam Stacoviak:** ...I can't even tell it's new, because it feels so polished. And now, granted, my experiences with one YAML file, and changes and some branching, but I think that's pretty sophisticated to know, you know, if I've got uncommitted changes, even files that are not even committed to the repo, they're not being tracked. Like, it's got all that, and it's got that collaborative flow back and forth. I feel like that's just -- it feels smooth. The always allow, or allow process... Because like you can either click allow, which is allow once, or always allow, like "Hey, clearly this golden retriever is on acid and it's a good thing, okay? Let it go." \[laughter\] "Just always allow it. Clearly, it's good. Always allow it." But it's got this really good flow. And the UI and the way it's -- I'm going to pull some of this out for the show notes or something like that, Jerod, in the video or whatever, but...

**Jerod Santo:** Okay.

**Adam Stacoviak:** ...it's really -- it's easy to read. It's easy to read. It's as if I'm sitting there with a buddy and they're telling me what change they've done. But I'm the director. It's a clear pairing, where I'm pairing with an LLM, clearly. And it's good. That's not what I was going to say, though. I just wanted to compliment you. That was my compliment.

**Nathan Sobo:** Thank you.

**Jerod Santo:** Oh, you were going to say something else.

**Adam Stacoviak:** Well, I'll let you say whatever you wanna say, but that was my compliment.

**Nathan Sobo:** I mean, I'm stoked to hear that you're having such a good experience. We're trying to make it good. We are all burning the candle at both ends, trying to deliver a really fabulous experience... And so it's great to hear that it's landing.

**Adam Stacoviak:** It's clear you are. It's very clear you are.

**Nathan Sobo:** \[01:08:01.05\] I mean, the streaming edits isn't even in the build you have. It'll be out, I'm pretty sure, by the time this airs. But that's even nicer, of just like watching stuff stream, having an experience that feels immediate and engaged... That's the key goal.

**Adam Stacoviak:** Yeah. One of the UX'es I really enjoy... I don't know if this is similar, but whenever you're working on a document with Claude, for example, like inside the actual Claude web app, or their Mac app, or whatever... You can see it create a separate -- so you have your chat kind of going on, and you have this separate document being created... Whatever it is.

**Nathan Sobo:** Artifact. Yeah.

**Adam Stacoviak:** This artifact. Sure. Artifact. I like that.

**Nathan Sobo:** That's what they call it. \[laughs\]

**Adam Stacoviak:** And you can see it literally deleting lines, and adding lines back in. I like the process, because I can kind of see the process of the work.

**Nathan Sobo:** Exactly. Yeah.

**Adam Stacoviak:** All that to say -- that was my compliment. What I wanted to say was this - it was that now I'm thinking maybe it is maybe you're in the best position because you have the ultimate great foundation, the ultimate control of the underlying code editor for developers to collaborate on, because you have such precision, such speed, such control over all the performance things that developers truly care about... I feel like you might be in the better position though now to come out and you might be able to get some tailwind back with that... Because while Cursor is like the name brand of an AI code editor, I feel like maybe you're better positioned because you have better control of the foundation you're building on.

**Nathan Sobo:** Yeah. And again, it's like -- I don't know, if you would have told me that people were forking VS Code left and right because they were so excited to have direct control over an editor UI, and that some of these people were being purportedly valued at billions of dollars in valuation... Yeah. So basically, if you would have just stripped the kind of comparative analysis of all of it when I started and said that was going to happen - sign me up. I love that future, righ? So I don't know, I always zoom out whenever I'm in doubt.

My goal has always been to kind of build the next generation in tech. Like, really advance the state of the art for the developer experience, period. Full stop. For me, for a long time, once I tried it, we created Electron, this Atom shell, and then we tried it, we gave it a good try... And yeah, could we have done it better in web tech? Probably. But ultimately, we had to leave that piece of it behind to deliver a truly exceptional experience. Otherwise we could never be better than the browser. Like, that put a ceiling on how good the experience can be.

And so for me, I was never going to do it any other way. And so anybody else's success doesn't... It's not really relevant right now. Other than to the degree that it indicates that there's value where we're going, I guess. So it's never really -- it doesn't bother me, I guess. I don't feel behind or ahead. I feel right where we need to be, because we're doing what we're doing with integrity, and we're going to do it as fast as we freaking can, with integrity. And I think over time, that's going to prove to be the best approach. But we'll all see. Or you can see right now. Anybody listening can see right now what they think, you know?

**Jerod Santo:** Yeah. How much are you thinking about brand new apps, brand new developers? A lot of these -- I'm thinking v0, Bolt, even Cursor...

**Nathan Sobo:** Right.

**Jerod Santo:** Like, "We're taking our projects, we're opening up Zed on an existing codebase", whether it's a Jekyll blog, or an Elixir app, or it's Zed itself... I'm sure you're pointing it at itself all the time. "And we're like editing, we're coding alongside this agent." But a lot of people aren't -- they don't want to do that. They want to put their app idea into a thing and get it built. Are you thinking about them?

**Nathan Sobo:** \[01:12:05.00\] I'm excited about them, because I think that's so many more software engineers being born than I could have ever imagined before... We might be for those people maybe at step two, if that makes sense. Like, when you're ready to go just a little bit deeper. We're not going to be like Vim, or something, where you have to really get in and worry about a terminal, or a desktop app. The goal is to be approachable and accessible and friendly. But it's also true that I'm building this tool for me. Not only me. I don't want people to think I'm totally selfish, but like... I still matter. And so it needs to solve problems that are relevant to me. And ironically enough, the problems that are relevant to me are problems relevant in a 580-something thousand line Rust codebase. It's a very serious situation. And so yeah, I'd love to have the biggest tent possible, but I do think that we're intended for software engineering. You can vibe-code in Zed, I think. All you have to do is just never click review. Never look at it. \[laughs\]

**Jerod Santo:** Right. I'd rather not look at what you're doing here.

**Nathan Sobo:** And if that is working for you, then go for it. But my sense is that -- and maybe the ceiling or whatever, the point at which this will be required will change over time as models get better, but... My sense, from my own experience - and people can share their own - is that at some point you need to understand how the software you're relying on works, and that code is a really important tool for understanding how software works. That's why we created these formal languages, in order to express ideas first and foremost. We can read the assembly code; the machine doesn't care. It's the human beings that need to understand how the system behaves. And I guess the LLMs as well. So I think -- yeah, that's where I'm at. We're software engineers that just want to get more leverage.

**Jerod Santo:** Right.

**Nathan Sobo:** And I welcome new ones.

**Jerod Santo:** So imagine a software engineer who's an intermediate - new to intermediate - and they launch Zed, and they think to themselves "I want a web app." I want to write a web app that takes in some input, and does some stuff. And so can I just launch Zed -- like, no open files. File, New -- I don't know. New Project, or something. And then like --

**Nathan Sobo:** That's a good question.

**Jerod Santo:** ...open the agentic coder and say "Can you build me a Rails app"?, or whatever.

**Adam Stacoviak:** That would be cool.

**Nathan Sobo:** Yeah, I think in the build that you have today, we sort of scope what the agent does in the folder you're in.

**Jerod Santo:** Right.

**Nathan Sobo:** So I guess maybe that's a rough edge, so... But yeah, so create a folder, open it in Zed, and then yes. \[laughs\]

**Jerod Santo:** And then yes.

**Nathan Sobo:** And maybe we can smooth that out, to your point.

**Jerod Santo:** How many tools do the agents have? Can they call command line tools for me? Can they call Rails New or something, and do all that kind of stuff?

**Nathan Sobo:** Yeah. Yeah, we execute -- and we've experimented with a couple of different approaches, but what we've landed on now is we actually have the agent run in your shell. The assumption being that whatever shell you're using, you probably configure it with your Python virtual environment... I don't even pretend to understand that world \[unintelligible 01:15:16.12\] They need to understand it better than I do. People on our team have improved it a lot in Zed, but there's a lot of language-specific, situation-specific stuff in your shell. So we just tell the LLM, "Here's the user's shell." We set it up to run in that setup, so that whatever you've configured is there for it. And then inside that shell, it can run commands. It can do things. So in some sense, you can do whatever. Then there's some dedicated tools, but they're not that many, honestly. And we'll be adding to it over time, I think... But just the ability to do glob matching on paths... Grep... And we've done some work with Tree-sitter around Grep to make sure that when we find a match, we're giving the LLM a coherent piece of text, that stops at reasonable syntactic boundaries etc. And then editing. But then of course, you can bring model context servers... And so as part of this launch, we've put a lot of work into just making that easy.

\[01:16:26.07\] So there's a couple different ways. The most universal way is just in Zed settings, you can configure a model context server, say where it's listening, and it'll work. For a curated set that we hope to grow, and the community can help us grow, there's also in the Zed extension store just a section for model context servers, basically. Context servers, that speak the model context protocol. And we're not another registry. I guess we are. We're kind of a meta registry, in the sense of "This is how you install this model context server and connect to it from Zed", basically. It's just like a little recipe, basically, that pulls it from wherever... And then we put some work into making them easy to configure etc. Like, okay, you've installed it. Does it need auth? Does it need some other environment variables to be set for it, or whatever? Streamlining that. So that's a way to kind of build your own tools, or bring in... There's like a tool that will pull in Postgres schemas, and there's all --

**Jerod Santo:** It's all kinds of stuff.

**Nathan Sobo:** There's all kinds of stuff. There's a tool that will like puppeteer the web browser, called Puppeteer. That literally opens up a browser and lets the LLM navigate around. We're landing image support, so I can take screenshots and like... Yeah.

So ultimately, this should feel like -- and we'll be getting there incrementally. I really want to embrace extensibility, and make Zed feel like this workbench for experimenting and playing with different models, different agents, different tools, and have them all coming together in this environment that feels really fluid and luxurious. \[laughs\]

**Jerod Santo:** First class.

**Nathan Sobo:** First class, yeah.

**Adam Stacoviak:** I like what Jerod's original question was, which was like Rails New, and stuff like that...

**Nathan Sobo:** Oh, yeah.

**Adam Stacoviak:** Because that to me -- I mean, having been through this... It's not even out yet. You've given Jerod and I access for this conversation, a version of this agentic flow... Like, it would be so cool to do exactly that, and say "Okay, let's create a new Rails app today. Here are the things that I want", that are like common gems, or things you would install. "Go."

And it does it. "How does this look? Do you want to make this a Git repo and start tracking it?" That kind of thing. That whole flow. I can see that happening there so easily... And back to that original thing I mentioned before, like an email workflow, where I would normally procrastinate over some things... I know Rails new is not that hard to do, but new is always hard to do. You can sometimes -- actually, new is not that hard. It's finishing that's hard.

**Jerod Santo:** \[laughs\]

**Nathan Sobo:** It's all hard.

**Adam Stacoviak:** It is. Well, you pick the person, there's various versions of this hard, but... You get over that initial hump so fast, because once you have -- they always say "It's all about momentum. If you want to go somewhere, you've got to generate the momentum to get there. You can't be stagnant..." So motion creates emotion. Let's create some motion. Rails New is already there. We're done. I've described it. Now we're vibe-coding, baby...

**Jerod Santo:** That's right.

**Adam Stacoviak:** Now we're vibe-coding.

**Jerod Santo:** Now we're collaborating.

**Adam Stacoviak:** But I think in that case it's more -- would you call it... Is it still vibe-coding?

**Jerod Santo:** \[01:19:45.17\] Well, vibe-coding literally is -- do I look at the code or not? I mean, I try to distill it down to what makes it different, and that really is the distinguishing factor, is I don't look at the code, then I'm vibe coding. But if I'm looking at the code --

**Adam Stacoviak:** Let's call it collab-coding then.

**Jerod Santo:** ...then I'm collab-coding.

**Adam Stacoviak:** Right here today, collab-coding.

**Nathan Sobo:** I mean, I do think there's -- I vibe-coded. I vibe-coded the dotted outline shader code. So we didn't have in GPUI a dotted outline, a dashed outline. In CSS it would just be like, whatever; border dashed. But with Zed, it's like a shader code that we're running. We didn't support that. So I threw our, whatever, 600 lines of metal shader code into a couple of different thinking LLMs, and I just said "Help me with this. Help me figure out how to make this outline dash." And I got it about 80% of the way there... And then there's this guy that is on our team, Michael, who has like all this sort of computational geometry background. He spent time working on like Bezier curve stuff at Adobe etc. and I was like "Okay, Michael, I don't have time to understand this fricking fragment shader code. It's almost there..." And then he was able to kind of push it over the line. And I'm sure I could have if I'd sat there for two days with it, honestly...

But --

**Jerod Santo:** Right. That kills the vibe, though.

**Nathan Sobo:** Yeah, but in this particular domain, of writing signed distance field code, which - like, I wrote all the signed distance field code, the basic stuff... But this is a really hard one, to do dash outlines. Like, that would have taken me a week. And to get even 80%, and see "Does this look kind of good? Is this even kind of close to right?" It even gave me the idea of like "Okay, cool. Let me hand this off to Michael", you know? So I don't know. I say it's situation-dependent. Yeah, I'm not going to carefully examine the code of the shader anyway before I run it, see what it looks like... So I was vibe-coding.

**Jerod Santo:** Yeah.

**Break**: \[01:21:55.27\]

**Adam Stacoviak:** I'm also sitting here now in my settings.json file, which is the settings file for the... Well, it's actually the settings file for Zed.

**Nathan Sobo:** All of Zed, yeah.

**Adam Stacoviak:** But I'm thinking "I can pass this file as context to it, and just make my settings better", right?

**Nathan Sobo:** \[laughs\] I know. We need to integrate more of that --

**Adam Stacoviak:** "Help me explore how I can make settings more, or better." For example, I didn't have -- this is cool, man. This is so cool.

**Jerod Santo:** \[laughs\] What is?

**Adam Stacoviak:** I didn't have a mode set. I didn't have a light or dark theme. I didn't have that in the settings. And \[unintelligible 01:25:37.17\]

**Jerod Santo:** Well, that was my feature request, remember that?

**Adam Stacoviak:** What's that?

**Jerod Santo:** Oh, that was my feature request from a couple years ago, that Nathan rolled out. Remember that? It was to have light and dark modes.

**Adam Stacoviak:** Yes.

**Jerod Santo:** Keep going. Anyways, I'm just bragging that that got in there. \[laughter\]

**Adam Stacoviak:** Well, what I did was I just asked it. I just passed the settings.json file as context to this freaking golden retriever... And I said "How do I dark-mode this thing? Because it's not dark mode." Boom. Now it's dark mode. My settings.json file is dark-moded, just like that.

**Nathan Sobo:** And that should be baked into the product. I mean, you should be able to have a meta-level conversation with Zed about how it's configured. And it ain't there yet, but it's right there for the taking, for sure, you know?

**Jerod Santo:** That brings me to Zed AI. Didn't you guys launch a model, or something? Or there was some sort of a... Yeah, tell me about it, because I didn't understand it totally.

**Nathan Sobo:** Yeah. So I mean, Zed AI was last fall. And that was basically like "Okay, we're doing a bunch of stuff with AI." And the two features that launched then was this very sort of hacker-chic, write-optimized, kind of low-level, strap a text editor to an LLM and interact with it directly... Which - some engineers at Anthropic freaking love that feature, because they're thinking about things in those terms. It was that, and it was inline assist. Just the idea of I can highlight some code, hit Ctrl-Enter, and transform it or generate some code in place. And then all the infra of "Hey, we're using this. We want you to be able to use it." And so giving everybody some kind of free compute, within reason, of like "Yeah, here it is. You can use these tools."

Then... I think it was February, we launched Edit Prediction. Edit Prediction, we built an open source model -- not really. We fine-tuned an existing open source model and kept it open source, and open sourced the dataset, to just predict what the next edit is. Which - that's a feature that's been out in Copilot for years now, but we needed it in Zed... And some -- I mean, we put some real love into how that feature was integrated. It has this thing called Subtle Mode, which I really like.

\[01:27:55.12\] Because one of my problems with kind of that eager, predictive editing is when I'm in flow and it's suggesting something to me, it's sometimes annoying. It's just distracting me from my flow, depending on my mood. But often it's how I'm feeling. But often I do -- I might want it. So what we'll do in Subtle Mode - which is not the default - is you can kind of just say "I only want to see that a suggestion as available." And then when I hold Alt down and we preview the suggestion, and then I can hit Tab to complete it.

And then we always are in that mode when there's like a language server completion... Because Tab, in the old days, when you only had completions from the language server, it would be used to complete the LSP completion. And there's sort of things that -- I don't know, we're in this transitional period. Like, maybe the ideal is this perfect unity of these two things. But at the moment, there's sort of this algorithmic source of suggestions, and then there's the more model-based, more creative version of it.

**Jerod Santo:** Right.

**Nathan Sobo:** How do we multiplex these two things? And so our decision was, "When we're showing you language server completions, and there's one from the LLM, we'll show you both." But we'll only show you that completion for the LLM that exists. And then when you hold Alt, we hide the completions from the language server. So you can actually see what the hell the LLM is suggesting. Otherwise, you have the completions overlapping, or whatever. And then you can Tab in. Or if you let go of Alt, it pops back to how you had it, where you have the language server completions. So it's just like, I don't know, a fairly standard feature at this point, I think, just predicting the next edit... But I think, again, even that has room for like craftsmanship around it. And then now this is the agentic editing. So it's been an evolution... But yeah, Zed AI is still a thing.

**Jerod Santo:** Gotcha. Yeah, so the edit predictions feature - you actually lost me. I turned it off. Not necessarily because it was bad, but because like you said, it was just like too in my face, and there was times where I wasn't wanting it, I was just like pausing or something, or you know... And I was just like "I'm too old school and controlly. Just get out of my face." I actually had turned it off. And then when I saw that Subtle Mode came out, I switched to that. And that's a pretty good balance I would say you've struck there.

**Nathan Sobo:** Good. So we were able to kind of keep you in the game. And maybe you don't use them as much as some developers...

**Jerod Santo:** Exactly. I kind of came back into the game, to a certain degree, you know... But yeah, exactly.

**Nathan Sobo:** Right. But I do think, on all of this, there's -- we need to refine it. I want edit predictions to predict better edits, and be better. So we're collecting -- you can opt in to share your data if you're editing an open source project with data prediction. We won't take your data from that, because it's such a vacuum cleaner if you're not, you know... And we're collecting all this data, we're going to make it open... We haven't had time yet to really get on that, but that's kind of like a big initiative for us in terms of what's next. It's just like, use the data that people have, again, opted in to sharing with us, to get better. That's a big part of this as well. Become more extensible. Like, I would rather have people that want to go fork VS Code, just like integrate with a nice API in Zed, that lets them achieve their thing they're trying to achieve. It's like, that's a big part of it. All of the dreams about CRDB, which is the eventually consistent keystroke level database, I think are still screamingly relevant to the things that I want to do. You know, Interacting with multiple agents in parallel. Like, okay, well, how are you coordinating change among all those things? Getting an agent running in a container in the cloud, making that a really clean experience.

\[01:31:47.27\] Also, just like... Yeah, I was so fired up about it I wanted to increase the scope for our launch, but Conrad Tucker reasoned them to me by basically pairing on it with me for long enough to say "Don't blow out scope." But just the study of taking a multi-buffer and transforming it. Batch transformations, simple things of that nature, like, how do we get a little bit of intelligence a lot of places? And yeah, but just also, it doesn't have to be like bells and whistles. It can just be dialing in, making it more capable, making it make better decisions more of the time. Yeah.

**Jerod Santo:** Quality of life stuff...

**Nathan Sobo:** Yeah.

**Jerod Santo:** So previously, the business model was teams. Is it still teams? Is it agents? How are you shifting now? ...because the landscape has moved quite a bit since then.

**Nathan Sobo:** Yeah, I mean, the mission of that is to build the future of software development, as I mentioned. And the premise is that if you really do actually do that, build the future of software development, you'll have an opportunity to, in a non-annoying or coercive way, sell developers services that integrate well with the fact that you've built this incredible development environment, where they're like "Hey, I'll happily pay for that."

One of the services we could sell developers is AI-related services, which is largely compute... But I think over time there'll be more indexing, more things we're doing on the backend... We're running the open source model for you, for edit predictions. That costs money to run. So I think, you know, sure. And we are actually going to be taking our -- regardless of what our long-term plans are, we're going to be taking revenue for the first time, really, real revenue, with this launch... Because it's expensive to offer all this AI stuff, so it's kind of like we have to charge for it.

But again, if you want to go bring your own API keys, or use some other thing, or literally take our code and fork it and do whatever you want, I'm not going to try to be sharp-elbowed about that, if that makes sense. I want you to have control over your stack, but I also want it to be convenient for you if you don't want to go mess with all that and you want kind of a stock experience, like "Just let me do what I do with another of these AI editors", put down a credit card, $20 a month...

The goal is to not -- we're not trying to be cheaper or more expensive than anybody else. Just offer a reasonable service at a reasonable price. But is that the entire premise of all of Zed's business? No. The premise of Zed's business is still selling teams and individual services that integrate with their dev flow.

**Adam Stacoviak:** I was going to say, this is the first thing, I assume, you've been able to charge for. You're going to launch this; you're not going to make it free, right? People will pay for this.

**Nathan Sobo:** Yeah. There's going to be a trial... But we're now at a point where - yeah, we're going to start charging a subscription for it. And again, it's an open source editor, so you have a lot of freedom... But I think it's cool to offer as service. This is the first kind of test of that. It's one test of that. We can offer you a service. We're not going to use our control of the platform to be super-sharp-elbowed about it, but like "Here it is." And our goal is to make it a great service. One that feels worth paying for.

**Adam Stacoviak:** Well, I'm excited that you get to make some money.

**Nathan Sobo:** Me too.

**Adam Stacoviak:** I mean, do you want to make money? I feel like you really --

**Jerod Santo:** \[laughs\] Do you like to make money...?

**Adam Stacoviak:** ...shouldn't make any money. You shouldn't even attempt to be profitable. Like, that's--

**Nathan Sobo:** Yeah.

**Jerod Santo:** \[laughs\]

**Nathan Sobo:** Because the only way any of this works is that --

**Adam Stacoviak:** "No, I want to make money." It was a joke. It was a joke.

**Nathan Sobo:** Yeah. I mean, but I'm not doing it for the money. Again, I've never done any of this -- it's never been about making money. It's been about building the best code editor. I don't know. It's like and end for in and of itself, if that makes sense.

**Adam Stacoviak:** \[01:35:55.04\] Well... But I mean, you know you're a business, you took investment, so you kind of do have to make some money at some point.

**Nathan Sobo:** Exactly. Right. And that is a reality. You can't just go off into some ethereal realm and like build software and divorce from the realities of scarcity in the world, right? The sign that we built something valuable is that people will be willing to pay for it, ultimately. But I'm very patient, though. I've been working on this for a long time... But yeah, all that said, I'm excited to take some real revenue... Even though the margins won't be that great, because AI is expensive. It's compute-intensive.

**Adam Stacoviak:** So the feature you just gave us for free will someday, very soon, be paid.

**Jerod Santo:** The first taste is always free, man. The first taste is always free. \[laughter\]

**Adam Stacoviak:** You know, I wonder though, do you mind riffing on how you'll charge for the AI features? Do you mind riffing on that? Is that worth it?

**Nathan Sobo:** Yeah, yeah, yeah. We can talk about it.

**Adam Stacoviak:** Because here's what I'm thinking... I'm getting kind of personally fatigued with the places I can pay for AI additives. So basically, you take your existing tool set, and you say "Okay, now they all have some version of an AI additive, that costs more." Which I'm fine with because it adds value. I get that. But what if I'm not a daily developer, where if I'm charging monthly for this thing -- what if I only use it every once in a while? Like every couple months, or something like that. Is there a meter chart for it, or something like that? Does it have to be a monthly charge?

**Nathan Sobo:** We're going to have a free tier, I think, so that if you're not using it a ton, it should be fine. I don't remember exactly the details, the exact numbers, but the goal is to let people experience it and not lose our shirts in the process, if that makes sense, in terms of -- to do it profitably, basically. But I think -- so if you're an intensive user, then you'll probably have to pay. And if you're an occasional user, hopefully you won't, and the goal is to give people as much value as we can, over time. But this stuff is compute-intensive.

**Adam Stacoviak:** I'm not trying to be cheap or anything, I'm just trying to like think through... Because I just feel a little fatigued on like where \[unintelligible 01:38:13.04\] in my life. We just had a podcast just yesterday, and I feel like this is like an extension of that... It's that kind of everywhere I go, I'm renting something, or there's a service, or an addition.

**Nathan Sobo:** Right.

**Adam Stacoviak:** And I get it, those things are adding me value. I've opted into it, so I'm not like this freeloader, trying to be a freeloader. But at some point I run out of cash or resources to spend places, and I've got to choose if I want to eat tonight or code up my Rails new app with my collaborative code version of Zed.

**Jerod Santo:** Or vibe-code.

**Nathan Sobo:** Right. And yeah, so my answer for Zed - I mean, again, if that's really an issue for you and \[unintelligible 01:38:48.12\] then go grab an API key, or go fire up Ollama.

**Adam Stacoviak:** Okay. That's interesting.

**Nathan Sobo:** I don't know about like if the tool calling is going to be as good with the Ollama models, and stuff. Again, that's all going to improve over time. I think the frontier models that you pay by the sip, it's going to work better with right now.

**Adam Stacoviak:** Are you saying that if I have Ollama on the same dev system I'm working on, I have a model running, I can API-call from Zed to Ollama, and leverage it?

**Nathan Sobo:** Yeah, you should see it in there even right now, I think, probably.

**Adam Stacoviak:** I don't have Ollama on this machine. I have it on a different machine.

**Nathan Sobo:** Oh, okay.

**Adam Stacoviak:** So I have a dedicated AI machine, basically, that --

**Nathan Sobo:** Zed should just like pick it up, in my experience.

**Adam Stacoviak:** That's cool.

**Jerod Santo:** The challenge with Ollama is LLaMA just seems to be falling behind a little bit, you know? And I'm already frustrated with the status quo, or with the frontier; the slightly less frontier today just bothers me. I think maybe 5-10 years from now that'll go away, perhaps. Or they'll just keep frontiering. I'm not sure where this plateaus, you know?

**Nathan Sobo:** Yeah. I mean, the main message is I'm not here to shake down developers for a subscription on AI. I'm here to make it convenient for them to access, give them a lot of control... And in order to be convenient, we've got to charge for it, because it just can't be an infinite compute budget.

**Adam Stacoviak:** Well, if not, you're footing the bill, right?

**Nathan Sobo:** What?

**Adam Stacoviak:** \[01:40:15.16\] If not, you're footing the bill, right? Like, I know on /ai, the AI page that you mentioned... I don't know if that's accurate to this conversation. I think it is, but --

**Nathan Sobo:** It's probably all going to change when we launch, honestly, and we should have gotten it to you... But yeah. \[laughs\]

**Adam Stacoviak:** Well, is Anthropic still part of your -- I don't know if it's a partnership, but it says Zed Industries and Anthropic in the "A new hosted service" section. Is any of that --

**Nathan Sobo:** Yeah, we'll definitely have Anthropic. We may have other providers as well, at launch or soon thereafter. I've heard good things about Gemini, so we're putting some effort there... So our hope is to have support for that. But yeah, we're offering that via Anthropic right now. I've had really great experience with their model, but I still think I have more to experiment with Google's as well, from what I've heard.

**Jerod Santo:** Is there ever a point where getting into that game becomes worth it for you?

**Nathan Sobo:** Oh, model development?

**Jerod Santo:** Yeah. Because now your margins go up, right? You can fine-tune and customize and make it maybe better...

**Nathan Sobo:** I love fine-tuning. I love -- I don't know, for me... Who knows? I mean, I love technology, and I love a challenge, and who knows what the future will bring. But what I will say is it seems like a pretty saturated area of the market, people competing in this model creation space.

**Jerod Santo:** Yeah.

**Nathan Sobo:** It seems very capital-intensive. Overall, I'd rather just focus on being a great tool, focus more on the developer, and putting the developer in a great connection to whoever has the best model... Which may vary opinion-wise from developer to developer even, right?

**Jerod Santo:** Yes.

**Nathan Sobo:** So that's kind of where my head's at. I guess we'll see as time goes on what makes sense.

**Jerod Santo:** I think that's a fair assessment today. I think that as these get commoditized, that price just goes down, and it gets to a point where maybe it becomes feasible for a smaller org like yourself to actually take one on, and then have ownership of that aspect of it, and be able to --

**Nathan Sobo:** I mean, one thing about me is I like to take ownership. At a certain level, that's what Zed's all about. We're not going to build on a browser. We're going to take ownership of the underlying foundation. Because if we don't, it won't be a great experience.

And so to the degree that we need to take ownership to deliver a great experience, we're going to keep doing that. It's just like, as a growing team, but still small, we're trying to pick our battles of like "What is our highest leverage right now to deliver a great experience?" And so far it's more about leveraging our CRDT-based text editor primitives, and leveraging our control of the graphics stack, and multi buffers etc. Let's cover that side of it, and make that freaking fantastic...
**Jerod Santo:** Right.

**Nathan Sobo:** And then if we have to keep going, then we will.

**Jerod Santo:** Well said. Adam, anything left on the table that you want to pick up and throw at Nathan before we close up?

**Adam Stacoviak:** I think -- would you mind revisiting the business model a little bit? I think we've kind of been there a little bit, but I think one thing you said before is our focus... And you kind of stammered temporarily what it is, in terms of like enterprise and teams. And I don't mean that negatively, I really don't, because I know that you're moving so fast and you can only hold so many things in context.

**Nathan Sobo:** Right, right.

**Adam Stacoviak:** You are a human after all...

**Nathan Sobo:** Thank you. I appreciate the grace there.

**Adam Stacoviak:** ...not a golden retriever that's a genius on acid... You know what I'm saying? \[laughter\]

**Jerod Santo:** You're not a golden retriever...

**Nathan Sobo:** \[01:43:59.11\] My hair is getting long, but...

**Adam Stacoviak:** But how confident do you feel in the business model you're trying to get to? Do you feel that is truly still the business model, where you're doing all the things you're doing because you have a passion for creating the next revolutionary thing for developers, this editor is it, all that good stuff? ...but do you feel like enterprises and teams is the way where you get to, where you need to be as a business?

**Nathan Sobo:** I mean, I can't guarantee. I have no way of perfectly predicting the future, but I still feel really strongly about that... That it's this -- of course it includes AI, right? And ultimately, we're still focusing on building a great experience, mostly, for individuals, and also individuals interacting with AI. We haven't really invested heavily into the bigger vision in a while. A lot is there, which we use every day... But I envision this kind of vertically-integrated, multi-human, multi-agent, collaborative environment, where you don't need to leave the editor to do a lot of the types of things you do when you're interacting with your team. Conversations, whether they're with humans or AI, about code should be happening in the place where you're writing your code; or watching the assistant write your code. One way or another. There's opportunity for this vertical integration of a really great software dev experience... And yeah, I still want to kind of -- you know, both professional teams and also companies, sell that experience to them. I guess I'm stammering a bit because it's still a vision...

**Adam Stacoviak:** I don't think so. We're in the motion. And I didn't really mean to use that word in a pejorative manner, but I kind of did...

**Nathan Sobo:** Oh, it's fine. I mean, I didn't take it that way. \[laughter\]

**Adam Stacoviak:** I didn't mean any offense. I didn't mean any offense. I was just talking a lot about this, because I feel like -- I'm not steeped in Zed like you are, I'm not thinking about your vision on the daily, you know... And you are. And I'm just thinking, this feature that you're about to release, that you have released as of this podcast release, is the cracked door open into the enterprises, into the teams...

**Nathan Sobo:** A hundred percent.

**Adam Stacoviak:** ...because those teams in those enterprises for sure are being told, allowed to, or maybe even demanded to use AI in ways to propel the business forward. And thus far you haven't had a great solution, like it is now. It's amazing. I feel like you're there. Like, this is the open door for you.

**Nathan Sobo:** Thank you.

**Adam Stacoviak:** It's a great editor, but it was missing some modern components.

**Nathan Sobo:** Yeah, exactly. And the funny thing is that's always been true - it's always been a great editor, but missing a few things, since it was a little baby and I couldn't even edit itself in it, you know? And then I edited some markdown in it because it didn't have syntax highlighting. And then I remember the first time I edited actual freaking Rust code in it. And then I remember when I got some diagnostics showing up. Like, it's all been an evolution of filling in this pie; the pie has gotten bigger really fast with this new tech, but it feels like a real opportunity. But I'm glad you feel that way.

**Adam Stacoviak:** I'm very hopeful for you. I think, especially as I took a moment to play with it during the call - which I'm glad you didn't mind me being silent for a moment or two just to get sort of enamored by this revolutionary device/thing that you've just given me to play with... So cool. I mean, I'm really excited for this release for you, and this next step, because I feel like it's the unlock. It's the unlock for you.

**Nathan Sobo:** Yeah. I have a sense that that could be true. We'll see what happens.

**Adam Stacoviak:** Alright.

**Nathan Sobo:** I'm excited for it, too.

**Jerod Santo:** Great note to end on.

**Adam Stacoviak:** Where should folks go? If they're hearing this podcast, they listened the whole way and they're like "Okay, finally, where in the world do I go to learn more?" What is the best URL you can give us?

**Nathan Sobo:** Well, zed.dev is the simplest one, and there'll be a banner right at the top pointing to agentic.

**Adam Stacoviak:** Okay.

**Jerod Santo:** Our audience is smart. At this point, if they're still listening, they know how to get there. They'll find it.

**Adam Stacoviak:** They're already there? Alright...

**Jerod Santo:** Oh yeah, they're all over it.

**Adam Stacoviak:** You think so, Jerod?

**Jerod Santo:** I think so.

**Nathan Sobo:** Zed.dev/agentic.

**Jerod Santo:** He just picked a URL live on the show.

**Nathan Sobo:** I did. I did. And I hope I don't have to make them change it, but it's a simple enough URL. Yeah, zed.dev/agentic. And if you want to see our prompts, it's zed.dev/leaked-prompts.

**Jerod Santo:** Oh, man...

**Nathan Sobo:** Zed.dev/leaked-prompts.

**Jerod Santo:** I'm going to put that in Changelog News as if it's -- "Can you believe this? Zed leaked prompts", you know? It's going to be huge.

**Adam Stacoviak:** Do it.

**Jerod Santo:** \[laughs\] I've got to do it before the show goes out, otherwise nobody will get the joke.

**Adam Stacoviak:** I really think we -- yeah, it's gotta be good.

**Jerod Santo:** I've gotta make sure the prompts are there. When are the prompts going to be there, Nathan?

**Nathan Sobo:** They'll be there by May 7th. They'll be there.

**Jerod Santo:** Okay, perfect.

**Adam Stacoviak:** Alright, man. That's cool. I like the live make up a URL and the reaction when I asked you where to go... \[laughter\] Priceless. Just priceless. Let's not edit that out, Jason. Leave that in there. That's good. That's good. Let's leave it in there.

**Jerod Santo:** \[laughs\]

**Adam Stacoviak:** It just shows you -- I think it just shows you the raw nature of what it takes to innovate.

**Nathan Sobo:** That's good... \[laughs\]

**Adam Stacoviak:** I mean, you can't have all the questions answered. And you're not an idiot for not having that answer. I mean, there's nothing wrong with you for not having that plan. You're moving at the speed of innovation. I mean, we can't expect you to have it all together... And that's why we're here. We're here to help you.

**Nathan Sobo:** Yeah, I don't know... It's a very non-linear experience with me. I spike on certain dimensions of this vector more than others... And being always prepped with the right URL before the podcast or whatever isn't always my strong suit... But what I lack in any other dimension, I have in -- I really care. I'll put it that way. I really care about delivering a good experience. So I hope people have a good one, and we're going to keep making it better.

**Adam Stacoviak:** Well said. Zed is not dead. Alive forever. Now with AI. Zed.dev/agentic, and also /leaked-prompts. Have fun.

**Nathan Sobo:** Hell yeah.

**Adam Stacoviak:** Have fun.

**Jerod Santo:** Have fun.

**Adam Stacoviak:** Thanks, Nathan. It's been awesome. Always good catching up with you. Anything else? Anything left unsaid that we haven't asked you, that we can make sure we include before we close out?

**Nathan Sobo:** Probably, but I don't remember it, so... It's okay.

**Jerod Santo:** We'll get you next time.

**Nathan Sobo:** Just keep it in the flow.

**Adam Stacoviak:** Good deal. Stay cool, man. Thank you.

**Jerod Santo:** Thank you.

**Nathan Sobo:** Thanks, guys.
