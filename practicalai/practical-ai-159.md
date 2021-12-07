**Daniel Whitenack:** Welcome to another episode of Practical AI. This is Daniel Whitenack. I am a data scientist at SIL International, and I'm joined, as always, by my co-host, Chris Benson, who is a tech strategist at Lockheed Martin. How are you doing, Chris?

**Chris Benson:** Doing well. It is Thanksgiving week, as we record this, and so... I'm chilling out. No stress, man.

**Daniel Whitenack:** Yes, getting the Tofurky ready.

**Chris Benson:** Tofurky. Absolutely.

**Daniel Whitenack:** I'm super-pumped this week, because Natalie Pistunovich is with us. Welcome, Natalie.

**Natalie Pistunovich:** Thank you. Hi.

**Daniel Whitenack:** Hey. So, I met Natalie - I don't remember what year it was, actually... But we were in Siberia. I do remember that.

**Natalie Pistunovich:** 2016, I think.

**Daniel Whitenack:** Yes. So, at a conference, 2016, in Siberia. We discussed a lot of Go and AI-related things, and I'm glad this has kind of come full circle. But also, Natalie is a distinguished co-host of our sister podcast, Go Time, which is all about--

**Natalie Pistunovich:** Woo-hoo!

**Daniel Whitenack:** …the Go programming language.

**Chris Benson:** There you go, woo-hoo!

**Daniel Whitenack:** Yeah, check that out. It's great to have some cross-pollination. But yeah, Natalie, you're doing so much. You're a developer advocate at Aerospike, OpenAI ambassador, Google Developers expert, founder of various things... So, very honored to have you on the show and excited to talk about all that. Maybe to start out, what's it like to be an OpenAI ambassador? What's involved in that, and what do you get to do?

**Chris Benson:** That's what I was wondering, too.

**Natalie Pistunovich:** I'm sorry, I signed an NDA. I cannot answer that.

**Daniel Whitenack:** Oh, okay. Right, right, right.

**Natalie Pistunovich:** Ha-ha. No, I'm kidding. I'm getting to have a weekly sync with the other six developer ambassadors. So there's seven of us.

**Daniel Whitenack:** Awesome.

**Natalie Pistunovich:** \[04:08\] And what we get to do is offer office hours for people who get access to GPT-3, and to Codex, and to all the other engines. And I get to hear all sorts of interesting ideas that people think and try to use the engines for, and I get to offer them some help. And then we have a weekly thing that we chat between us, kind of interesting ideas that we saw, maybe tips that we can give to each other as ambassadors... And we get to hear from the OpenAI team about what's fun and upcoming. And we get to sign NDAs, and we get to try all sorts of engines before they come out. We got to play with Codex a while before it came out.

**Daniel Whitenack:** Yeah. That's awesome.

**Chris Benson:** I have a follow-up even to that. I'm diving into follow-ups early on here. So, without giving away someone's special sauce or super-secret idea, what's a really cool thing that you've heard through that, or that you've seen, or anything? I mean, just what--

**Daniel Whitenack:** Interesting use case, or something.

**Chris Benson:** Yeah. She's having to think NDAs...

**Daniel Whitenack:** From the usage of GPT-3 or Codex, like someone said, "Hey, can we do this?", and maybe it was surprising to you, or something. Anything like that that comes to mind?

**Natalie Pistunovich:** Yeah, definitely. So one of the things that is less familiar, or GPT-3 is kind of less in the titles for, is that it has some endpoints that you can create your small little world of knowledge base, and then ask it all sorts of questions, and kind of maybe it will label things for you, and so on. So one team wanted to use that to help them understand and kind of analyze CDs, and kind of like give them properties with that database, so they kind of create their own, "This is the information that I have about this city. And now, kind of give me back a description of it."

**Daniel Whitenack:** Very interesting. So I have to reveal, I am a total biased user of GPT-3, but also, I recently got access to the Copilot Codex stuff, and have been trying it out. But at SIL, we had this problem where-- so we translate a lot of content into various languages, and we're working on technology that will help us estimate the quality of those translations. The problem is, if we're trying to work on that, we don't have a ton of data with really bad translations, because everything we publish have been quality-checked, good translations of whatever material. And so, we use GPT-3 to help us generate bad, contradicting translations. So we said, "Hey, here's the source language... What would be a contradicting statement to this? Or what would follow this pattern of removing clauses or certain types of information, or something?" So it was actually very useful for us in kind of creating that labeled dataset. Yeah, I don't know... What's the sort of-- after you've seen a lot of use cases, what are the kinds of the things that people want to do most with GPT-3? Is it creating movie scripts? What's the thing that people want to do most?

**Natalie Pistunovich:** Variations of marketing, so writing content, or adjusting content to different audiences... CopyAI, I think, was one of their very early companies to have raised money, that are built very much on top of GPT-3, and many tried to reproduce what they did.

**Daniel Whitenack:** Yeah.

**Chris Benson:** Not surprised by that.

**Daniel Whitenack:** Yeah. \[laughter\] You also mentioned Codex. So we talked a little bit about GPT-3, and we have mentioned that before on the show, but we haven't talked as much about Codex. Could you give us just a brief sketch of what Codex is, and what the intention is that someone might do with it?

**Natalie Pistunovich:** \[07:56\] Definitely. Codex is the engine that drives GitHub's Copilot. This is one of OpenAI's engines, and it is designed to not just perform general language tasks or natural language tasks, but it's specifically trained to translate language to code. And it's trained on some languages, so mostly 10 or 15 languages that it's really good at, but it performs great even in other languages that it was not meant to be trained for. So Python is the language that it performs best at, but as you mentioned, I'm a big fan of a Go, and that's also one of the first languages on the list that it's supporting. Some unexpected languages that it supports, for example, is shell.

**Daniel Whitenack:** Yeah. So like Bash scripts.

**Natalie Pistunovich:** All the Bash magic.

**Daniel Whitenack:** Yeah.

**Natalie Pistunovich:** Yeah, exactly. The data scientists jump, "Yes, finally. All the all commands, all the sed commands, segment... Somebody's going to do that for me."

**Daniel Whitenack:** Yeah. I mean, that's probably better than my endless stream of copying commands from Stack Overflow, which sometimes do strange things on my local system... But yeah. So you mentioned Copilot... How do people use Codex in practice? So you kind of explained what it does a bit. How are people using it, or how is it intended to impact people's workflow or development?

**Natalie Pistunovich:** So, probably the most used way of Codex is through Copilot, which is available as a VS Code plugin. So anytime you use Copilot, you use Codex, whether you're aware or not. And if you have applied to the Codex waitlist and you've got your access, then you see the exact same interface that you see when you use any GPT-3 engine, and you get to just kind of syntax highlighting, which is nice, and then it kind of makes everything familiar for you, but you basically kind of give the same type of commands, "Write this for me" or "Complete that for me", and you know that this will perform particularly good in code.

And some fun things that I like showing when I'm saying what can it do is just mention casually a name of a library, so no direct path or anything like that, and say, "Add a unit test" or "Write a function, and here's the signature of it." If we're talking, it's two developers, and I'm saying, "Hey Daniel, can you take this Go client for Aerospike and do some example of CRUD Operations?", you're like, "Okay, let me google 'Aerospike Go client'. Let me look at the documentation. Let me copy-paste some examples. Let me change one thing. Oh, it broke. Wait, let me try again." Copilot's like, three seconds, "Okay, here's everything for you." Kind of mind-blowing. It's so much faster than us, and it does not make mistakes in the sense of using the library, but also in the syntax of the language. It knows to do those two things in a few seconds, with a little context that you're not even-- by the time you finish googling, it already finished doing what you asked it to do.

**Chris Benson:** Wow. So, aside from speeding that process up, does it change your workflow in any other ways, or is it just the time compression of getting to something productive?

**Natalie Pistunovich:** It's changing, absolutely. So, some people like reading the documentation and then going and trying things; some people like just finding some quick guide, or even just copy-pasting from Stack Overflow and seeing how it goes, or maybe taking an example and playing with that. Sometimes, the examples are not covering everything you need. So you can say, "Generate this example for me", and then you can start playing with that. That's one thing it does.

Some of the nice things that you can say is, "Add a unit test", right? And then maybe it will do something that you did not think of. It can propose a different solution for the problem that you have. Usually, you make a pull request, and then you start discussing, "Ah, this is one way of doing that", but your colleague tells you, "You know, you can also do it this way", and then you have this conversation. So this is becoming a little faster because you're having this conversation with the AI, where you're like, "Give me some proposals, something else, another way to implement this." Or "Here's this function signature. Tell me how would you implement that?" So it's sort of like pair programming for the computer, write some unit tests, whether if it's the boring part of just automate like for all the different types, do that.

**Daniel Whitenack:** \[12:12\] I'm sure there's a lot of data scientists out there who are like, "Oh, you mean I don't have to write all my unit tests?" I know a lot of interactions with data scientists who really want to write that code better are pretty hesitant to write tests.

**Natalie Pistunovich:** Yeah. You can also say, "Refactor this for me."

**Daniel Whitenack:** Oh, yeah.

**Chris Benson:** And I was going to ask, I mean - and it really goes with what you're kind of saying there, Daniel... There's a point here where no-code it's already kind of coming to realization in various places. Where does this go down the road? Do you think that-- are we going to be writing our own Go pretty soon? Or do you think we're just going to be giving use cases and getting to that, or Python, or--? Pick your language, whatever it is.

**Natalie Pistunovich:** I think that in the short term, we will be using this in the IDE and getting all the help and different proposals, and so on. But I just think that no-code will go even one step further, so not just to your IDE, because for having an IDE, you need to have it set up, you need to-- whatever language bindings set up, and so on. I do see that the world of no-code is developing even further into the place that, with just an interface, you can already play that. So kind of somebody will put GUI on top of that, and then it will be a few clicks, and then it translates to that call to the API of Codex, that then generates that code for you.

**Chris Benson:** Gotcha.

**Daniel Whitenack:** So I'm curious. I mean, you mentioned the different languages that are supported. It would be interesting to dive into all of these details, which would take a whole nother episode. But I'm assuming that a lot of code from GitHub was used to train this model. I've always been curious. You mentioned how it doesn't make mistakes in terms of the syntax of the language, and following those prompts. Is that because there's the prediction of generated code plus an analysis of, "Is this valid syntax or not?", like a real-based analysis of the syntax behind that? Because I know with generating natural text, you can certainly generate things that are not grammatically correct, right? And I assume it's similar on the code side, generating things that are not syntactically valid, or something like that. Any insights there in terms of how that happens?

**Natalie Pistunovich:** Yes. This is a hot topic, especially around the time that Copilot was released. First, there were lots of questions on what type of license had the content that it was trained on. So, obviously, if I was only trained on the open code, not on anything that is private on GitHub, and only on a specific set of licensed code. But some code is not licensed, and even for some of the licensed types, there was also a discussion whether it's okay or not. And the code is generated correct, whatever grammatically equivalent is for code. But what's interesting is that if you tell it something like, "Generate an SSH key for me", it will generate a key for you, it will have the right syntax, so it will be the right length, it will not foreign characters, but if will not be a valid one. So this is also an interesting point, how it automates development, but not just yet DevOps infrastructure in this world; because all the world of configurations, it will not do correct for you. You'll still have to put all the keys, you still have to set up all those values, because it can generate a value in the right range, but does that value make sense? That's still to come.

**Break:** \[15:44\]

**Daniel Whitenack:** Okay. So I did get access to the GitHub Copilot, the trial, or whatever they're calling it, and I've tried out a few things. For a while, I didn't try it out, because I'm one of those annoying people that use Vim, and so I was like, "I don't really want to install VS Code." But I did because I wanted to try it. And I think, actually-- I could be wrong about this, but when I looked at the documentation last on Copilot, there was a little bullet that said Neovim. So, maybe, I need to look a little bit deeper into that and play around with it. And I don't know if you have any info there. But I did try just a whole bunch of things. And what I've found interesting was there's tab-complete kind of operations, like you might find in Gmail, and then there's the prompt type of things. So it does seem like there's-- am I correct on that, Natalie, that there's sort of like, you can start typing something that you're about to do, like a loop or a function or something, and it will kind of tab-complete a lot of things for you, or you could, in natural text or a comment, tell it to do something for you? Do I have that right?

**Natalie Pistunovich:** Yeah. Those both are two ways of using it. Yeah.

**Daniel Whitenack:** Okay.

**Natalie Pistunovich:** I saw a tweet the other day, a funny one, that says, "My next startup is going to be auto-generated from scratch by Codex. I'm just going to press Tab until I have a software, and then let's see how it goes."

**Daniel Whitenack:** I did think like three years ago - and I probably should've done it - that I should have just created a script that bought... So, took real words and converted them into something.ai and just bought up a bunch of domains and then sold them. But alas, I didn't.

**Chris Benson:** You missed that opportunity? Oh, boy.

**Daniel Whitenack:** Yeah. I know, right? But yeah, some of the things I did, just to give people a sense-... And I'm sure it's not as complicated as the things that you've just mentioned. But as a simple example, I started a Python list like, data = bracket-1 comma-2 and then it just filled in the rest of the numbers for me up to a certain point, right? And then it was cool, because then I was like, "Well, I want to create a data frame now", and that's going to be one of the columns. And I said, "labels= (a, b", and then it filled in the same number of things, but with the ab pattern. And then create data frame. It did that for me. And then I just said, "Comment, save data frame to CSV", and it did the thing. So that's just a very simple example, but it was pretty cool to see, for a non-VS Code user who is also learning how to use VS code at the time, I wrote things very, very quickly, which maybe is blasphemous from a Vim user, but it was very exciting.

I want to get back, maybe, to one thing you mentioned, Natalie, around the open-source code and how it was trained and such. I wonder if you have any thoughts... One of the things that I've thought about this whole time with the OpenAI Codex stuff is that open-source code, a lot of it is really bad, and there's a lot of closed source code that's really good. Was there like a-- and if you don't know, it's fine. But outside of the licensing issue in terms of code quality, what code might be there? And also, there's all sorts of stylistic opinions that people have. So, is that part of the providing ways to have people have alternates or something like that?

**Natalie Pistunovich:** So, the wonderful thing about Go is that there's no different styles. There's go fmt-

**Daniel Whitenack:** I love that.

**Natalie Pistunovich:** ...which is a formatting function, and then we all used that.

**Daniel Whitenack:** I do, too.

**Natalie Pistunovich:** So... Not in my universe.

**Daniel Whitenack:** Yeah. \[laughter\]

**Natalie Pistunovich:** \[21:56\] I think you probably can see different styles. I think if you use Copilot, it will stick to the style that you started, if you use a different language. And I do think that if you use their prompt, so kind of a clean way of interacting with it, you will see sometimes one style, and sometimes another style.

**Daniel Whitenack:** Gotcha.

**Natalie Pistunovich:** And training on good versus bad code - that's a wonderful question. It's a model that's trained on hundreds of millions of parameters. Certainly, there's good and bad code. I don't know if it represents the ratio of good-bad code in open and closed source. I don't know if such a number exists.

**Daniel Whitenack:** Yeah. I'm just thinking that there's code out there that is in the open that I've written, that I wouldn't want anything emulating... \[laughter\] So, maybe I should deal with that on my own.

**Chris Benson:** I'll take a stab at that.

**Daniel Whitenack:** At my bad code, or...?

**Chris Benson:** No. No, no, no. Just the general because, I mean, this has come up before. I think open-source tends to be better than closed source, because open-source, people are going to see. If it's out there on GitHub or any other place, and people will see it, and people are embarrassed to publish code that's just not very good. But in closed source, they do it all the time.

**Daniel Whitenack:** I have no shame, I guess. \[laughter\]

**Chris Benson:** There's open-source, there's closed source, and there's Daniel's code.

**Daniel Whitenack:** Yeah. Yeah. That's a whole other category.

**Natalie Pistunovich:** That adds up to OCD.

**Daniel Whitenack:** Right. Yeah, that works out, which is also part of my life. So, we've mentioned Go quite a bit... There's probably a good portion of our audience that might not even be aware of what Go is. Could you just maybe give a couple of minutes of like, if I don't know what Go is, what is it and how is it used in things that I might be familiar with?

**Natalie Pistunovich:** It's a statically-typed language that just celebrated its 12th birthday.

**Daniel Whitenack:** Woo-hoo...!

**Natalie Pistunovich:** It came from Google, but it's used everywhere, so not private to Google in any way. And there's lots of community contributions; obviously, more as time goes. So the closest language to it is Pascal, or 'Pascal', as I heard the American pronunciation for it.

**Daniel Whitenack:** Right. I like yours better.

**Natalie Pistunovich:** \[laughs\] It's pretty close to C, but it has all sorts of benefits, like a built-in concurrency and parallelism. It has safety, and it's used in all sorts of tools that you know. Obviously, in the beginning, it was used mostly for web development, so lots of websites, and it kind of bubbled into the world of DevOps and infrastructure. So, Docker is written in Go. Kubernetes is written in Go. If you do monitoring, you might have heard of Prometheus or Jaeger. Both are also written in Go. SpaceX has unofficially shared they're using Go, so it will be on Mars soon.

**Daniel Whitenack:** Exciting. Yeah. I know also that Go is used at CERN. I have a friend there that's using Go for high-energy physics. It's a whole range of things. Yeah.

**Natalie Pistunovich:** Yeah. Yeah. It's mostly backend. It's not exactly great for front end, but surely, you can do something. Also, you probably can do something with mobile, if you really want to. I, personally, see it not just a great fit for web and for tooling, but also for things like machine learning. And I think we've both been preaching the idea of using Go in the infrastructure of systems that do machine learning, so Serve AI Models, because it's wonderful with parallelism and concurrency, and it's super-fast, and it has this really nice feature that it's very easily cross-compilable. So, once you like command, add the flag, and you're good. So, that's also why teams that do tooling internally really love that, because you have five people or five types of operating systems and whatnot, and architectures; you just add all flags - done, your binaries run everywhere.

**Daniel Whitenack:** \[26:01\] Yeah. And I definitely am really excited that this messaging is getting out on this channel, because I definitely believe in what you're saying. It's sort of a mix, right? I think it's still a mix, because you -- maybe you can comment on your workflow with this, Natalie, but there's so much tooling in the sort of like experimentation phase of AI, around training and testing models that's really great in Python... But our team has found that as you transition that out -- like, you've done your experimentation, you know this model architecture, and this sort of data is what we want to do, and it's useful in these ways, this is the access pattern and how we want to run the inference... Then transferring to running that behind an API that's written in Go, or a streaming server that's written in Go, or some type of batch processing infrastructure that's written in Go, that integrates with that model, is what we've found to be a really useful pattern in my own work. I don't know if you have any comment about that, Natalie... If I'm off, or if you have other thoughts.

**Natalie Pistunovich:** No, I definitely share this view that this is a great choice, although it's not the trivial one. And I do think that as AI kind of bubbles into any field, like legal tech or agritech or whatnot - this is all becoming things of how do you serve your AI model. One thing is kind of have it trained and running, but then comes everything else. And there is a wonderful paper by a group of Googlers from 2015 about the technical debt of AI systems, and it's kind of what happens when you patch up a system that does ML and quickly upload it to production. And it lists over 12 or so pages of everything that can go bad, and all the considerations you should have. And it's things that, in the past, you may have not thought of them in the context of systems that serve AI, but you just thought of them as kind of general systems, so any website. But monitoring, security, all the additional stuff, like making sure that things are working - all these systems, it's the wonderful ecosystem of infrastructure that already has the perfect ecosystem inside Go. Everything you need is already there. So plugging those two together is even a better reason for using Go, because Go is really fast for serving your model and also really useful for monitoring everything.

**Chris Benson:** There's a thing - and I know we've brought it up before - and that is that these models, for them to be any good, for them to be productive, they've got to end up in software. And there's a reason that so much of the modern internet infrastructure has been written in Go. It gives you all those things that you just talked about. It gives you two other things that we alluded to earlier, and I just wanted to bring back up - it's a fairly small language. And part of that, as going back to what you were saying, is there's kind of one way of doing everything, which is a struggle for people when they move into it. But after you accept that, it's just wonderful, so you can remember everything fairly easily. And that means you're more productive and you're less likely to create errors. And so, I know, as I've watched over the last few years the modeling "Get out and be productive", and all these different use cases, I think Go is a really good language for doing that, in terms of being able to get to productivity quickly with your models.

**Natalie Pistunovich:** And one other benefit for this characteristic of Go is that if you have the AI generate a huge chunk of Go, it will look exactly like the code that you wrote, because there's only one way of doing that. So you know that uncanny valley of robots; you're not going to see the uncanny valley of code.

**Daniel Whitenack:** If it looks too human, it's too creepy.

**Natalie Pistunovich:** But once you cannot tell whether it's a robot or a human, you're happy with it again. And because there's only one way of writing Go code, visually, you will not be able to know who generated that. So you're not falling into that uncanny valley, unlike with many other languages that have multiple formats.

**Chris Benson:** True.

**Natalie Pistunovich:** So that's why it's a great language for AI.

**Daniel Whitenack:** \[30:06\] So, bringing this back to the Codex world... So if we're generating code and there's a lot of variability in style or how you might do something, or even things like there's a lot of Python 2 to Code out there and Python 3 Code out there, right? ...you know, Go is more consistent like that. So would you say that it's maybe a bit easier to get bigger chunks of code generated in Go than just kind of the small helps that I was alluding to earlier in Python, where I was doing small-ish things?

**Natalie Pistunovich:** Yeah. And you will feel easier reading it and integrating that into your codebase, or creating that to be your codebase and you integrate into that.

**Break:** \[30:52\]

**Daniel Whitenack:** So, we were talking, just before we started recording, about this whole world of MLOps or AI Ops and how that is so-- so much of the conversation in the AI world is centered around this. We've got various takes on this, over time, on the podcast. I'm curious, when you're thinking of MLOps, or when you're thinking of a project that is coming up in your pipeline and it involves machine learning or AI in some way, what is it that you have in mind in terms of the MLOps things that you need to be thinking about?

**Natalie Pistunovich:** So, kind of what is a checklist for your MLOps project?

**Daniel Whitenack:** What are the first things that are-- yeah, the necessities of MLOps that are just crucial to making things work in production?

**Natalie Pistunovich:** It's a great question, and I think this bare minimum is getting more complex. Every year, this list gets a bit longer. So you definitely need to have some sort of data processing, data governance variation, you'll call that. You need something for serving the model. You need something for the feedback loop of retraining it, online or offline. So a growing trend that I noticed over the last year or two is about feature extraction, feature engineering, feature stores, and so on. So you almost cannot ignore this anymore in the context of MLOps.

\[34:13\] I guess, because it's an AI podcast, we don't need to talk what is a feature, which is fun; we get to talk instead about what is Go. But the reason that I think that Go is a good choice for that, for things about features is, again, that it's really fast in all the different benchmarks, partly because the good concurrency, and it's also easy to utilize this feature there.

**Daniel Whitenack:** Yeah. We were also talking, before the show, how both of us have been trying to promote this within the Go community, and I'm really excited, because you are giving a talk at the upcoming GopherCon, so this will be December of 2021, for those listening in... So if you can find it on the internet after that.

What are you hoping that your audience takes away from that talk at GopherCon? ...maybe an audience that isn't as familiar with AI, but is into all of these infrastructure and monitoring things. What are some of the takeaways that you hope they'll have?

**Natalie Pistunovich:** So for the good practices of MLOps, and there's some short checklist of things that you should have in mind, like be aware of all the things that the MLOps mean and why Go is a great choice for that... And the more general cause that they have, and I hope that everybody who comes to the talk eventually will have, is kind of a heads up of "This is how AI is likely to integrate into your developer flow, whatever it is you are doing with Go, or even in another language, really."

You can be cynical about this. You can say, "No, I'll stick to what I know", but you can also utilize all the different benefits of that. Like we said, you can automate the boring parts. We all love Kubernetes for doing that for us, and not just because it's boring, but also, it actually prevents us from making mistakes. And you get inspired for all the auto completions or the alternatives that it offers for you. And a huge thing that we didn't give enough focus that it can do is documentation; both ways documentation, right? It can help you document your own code, and it can help you read somebody else's code if the documentation is bad/not existing, or just some language that you don't know.

**Daniel Whitenack:** Can Codex add comments, like I can just say, "Add comments to this code"? Will it do that?

**Natalie Pistunovich:** Yeah, "Explain this code."

**Daniel Whitenack:** Awesome. That's awesome.

**Natalie Pistunovich:** It can be something like, "Help me understand this codebase that I wrote last year, because I forgot what I did there."

**Daniel Whitenack:** That hits home. \[laughter\]

**Chris Benson:** I was just thinking that exactly. I always look back on my old code and go, "Ugh..."

**Natalie Pistunovich:** Who did that? Who hacked into my computer and changed everything, and then also changed the history of commits, and the timestamp? How dare they?"

**Chris Benson:** Exactly.

**Natalie Pistunovich:** So, sometimes you have to understand what somebody else did... For example, I'm really not good in frontend technologies. I am generalizing. I've barely experienced working with any of these, but sometimes you have to understand what's happening. So I can go and try to understand it, I can go and find a developer to explain that to me, or I can just highlight this and say, "Hey, please explain this for me."

**Chris Benson:** So, I have a question for you. I actually want to take the same question Daniel asked you about bringing the Go folks into AI. And for some of the folks that are listening to this podcast right now, and they've been hearing us talking about Go... They may not have been exposed to it very much in the past, maybe not at all, but they're now kind of curious, having heard the three of us chatting about it for a few minutes... How would they incorporate that, or start to? What would be a reasonable way of them doing that to get that into their flow right now, maybe alongside their Python? What's a good first step for them?

**Natalie Pistunovich:** If you have access to Copilot or Codex, just take any code in Python, highlight it and say, "Rewrite that into Go." Run that, see what happens.

**Chris Benson:** That's fantastic.

**Natalie Pistunovich:** \[37:59\] That's one thing I would do right away; because I first like to play with that, and then I'm going to go and read the docs and kind of go through the tutorial. So once you've played with that a little bit and got excited, google for the Tour of Go. This is a fun, little sandbox that you can-- it's a guided step-by-step of all the things that you need to know. It's not specific for AI Ops, it's not specific for ops in general, but it does cover most of the interesting features of Go and kind of helps you understand how it's built, and what's happening under the surface, and how can you utilize the fun features that it has. It's been around for a while. You can definitely find some code examples. If you want to see-- Daniel, is there a workshop that you're giving about this topic, about infrastructure in Go for ML stuff? Is it available anywhere?

**Daniel Whitenack:** Yeah. So I'm giving an updated workshop at the upcoming GopherCon, so thanks for bringing that up. There will be a GopherCon event in early December. And their workshops - also, the main event is free for everyone, that's my understanding, this year. So the main talks you'll be able to join. But then yeah, I'm going to post an updated version of my workshop around the time of the workshop. So if you're listening to this and it's early December, you can check out my GitHub and see some updated things there.

But yeah, I think it's a great idea, Natalie, to rewrite some Python stuff in Go to see how it might look. It's fun to see that Codex can be a productivity thing, but maybe it can also be a learning thing. Chris, I don't know if you remember one of the early shows that we had was like - there was an app that helped African farmers identify disease spots on cassava plants?

**Chris Benson:** I do remember.

**Daniel Whitenack:** The model was completely capable of saying, "This is diseased or not", right? But the intentionality behind the app was that it wanted to help infuse that knowledge in the community, right? So it pointed out things and explained why they might be indicative of what... And by doing that, it freed the community from dependence on the app, and that knowledge was infused. So it's cool to see that these tools can also automate things for us, but also help us kind of gain knowledge in new areas a lot quicker. So yeah...

**Chris Benson:** Kind of cool when AI brings humanity into focus there.

**Daniel Whitenack:** Yeah. Yeah. Natalie, I know you do a lot of community-related things, whether it's the OpenAI stuff, or it's related to Google Developers, or with GopherCon Europe, or GopherCon. When you're talking about AI and machine learning, I'm just curious how you've seen those conversations shift over time... Because I think early on -- I heard people talking about Terminator and sentient things... I've seen some of those conversations shift over time to other, maybe more useful subjects. But as you're interacting with those communities, have you noticed any trends in terms of people's interest in AI, or their fear around AI, or their desire to do this or that, or any thoughts on that?

**Natalie Pistunovich:** Yeah. I think in 2017, I talked and shared some code that I wrote on how to use Go with TensorFlow, which seemed as unrelated as using Go with mobile. Go with mobile has never really picked up. It's still under the experimental path of the Go project, but the TensorFlow API, actually, is available in Go. I guess, it came not just from the side of the software, of like, "Here's how you can use that" and "Do you use that API?", and so on, but also from the side of the infrastructure. "Here's how the entire monitoring and DevOps ecosystem that is already in Go, mostly, just fitting itself nicely with ML, as ML and AI bubble into the average tech stack." So now you have frontend, you have backend, and you have AI. Everything is getting automated, and we obviously have to support that as DevOps people, as infrastructure people, as backend people... As a tech team.

**Chris Benson:** \[42:09\] That's a great point. I love that point. I'm going to steal your point going forward. We find ourselves commonly talking about how AI is in software; it's a part of software now, and stuff. But the way that you just put it in terms of a frontend and backend - now there's AI. And there's a reason for-- it's not just for data scientists; it's for developers. And there are so many tools, like what you're working on, that are making it accessible to people. How do you think that will change the software development world going forward, in terms of how non-specialists in AI are engaging, now that these new tools like Copilot and Codex are becoming part of the workflow?

**Natalie Pistunovich:** I think it will make things faster and efficient, in the sense of how-- you know, in the past you'd develop code by writing everything, and then IDEs came and got all those fun plugins and useful things like, "Show me the signature", "Help me find quickly where the function is defined", and so on, and it became a part of your workflow... Although, it depends how back you go for the developers' history, this would be considered a cheat, and like, "Oh, I don't need that. I just need the clear notepad."

So I see this as a next step of something that fits the world of developer productivity. It also helps boost the world of no-code, which kind of introduces into the community of people who create tech, people who don't know code, just because they will have the tools that will translate their English commands into tech, or into code, right? So we as developers, we kind of, in our mind, do this translation from our instructions in English in the GitHub issue from the product manager, whatever - you translate that into code, and then the machine goes and translates that into compiled binaries for you.

So in addition to this flow being more efficient, it's gone one level up of abstraction, that I will just write in English what I need, I will play with a GUI, and the AI will tell the computer to compile the code that it generated for us. So I see that as we go forward, there'll be these two branches of developer productivity. But I also see that things like infrastructure and monitoring are not necessarily going to be as affected by that, because you cannot say to the AI, "Create a config file for me", and you can just go ahead and use that... Because the numbers will be funny, and the keys will be funny, as we talked in the beginning. So this is something that people will still have to manually do for a while.

**Daniel Whitenack:** Yeah. I hope that maybe that comes someday, but I think even those other things that you mentioned are just an amazing new kind of development in how we write code and how we think about the things that we automate, and the code that we generate. So I'm super happy that you joined us on the other podcast, in Changelog. We will include a number of links that are relevant to this discussion, including the waitlist for the Codex system, along with the signup for Copilot. We'll also include links to GopherCon and all the cool Go stuff that we mentioned. So if you're interested in either of those things, definitely check out those links, and make sure and listen to Natalie's upcoming talk at GopherCon. I know I will be. So thanks so much, Natalie. I appreciate you taking time to join us.

**Natalie Pistunovich:** Thanks, Daniel. Thanks, Chris.
