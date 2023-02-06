**Angelica Hill:** Hello, and welcome to Go Time! Today we are going to be talking to tech lawyer Luis Villa, who returns to Go Time to school us once again on the intellectual property concerns of software creation in the crazy days we live in. This time around, however, we're going to be focusing on the implications of large language models, code generation, and where this leaves us on the question of "Who owns our code?"

And on that note, I would like to introduce you to Luis, who is a programmer turned attorney. He has been involved in open source since college, he's worked at Mozilla, where he revised the Mozilla Public License, Wikimedia Foundation, where he briefly led the community team, he's been a lawyer for Google, Amazon, and many small startups... And currently, he's the co-founder of Tidelift, which works to make open source better for everyone by paying maintainers. What a concept. Welcome to the podcast, once again. Lovely to have you.

**Luis Villa:** I'm glad to be back.

**Angelica Hill:** And we're happy to have you. Round two. As always, our conversation got far too interesting the first time around, so we got to do another one.

**Luis Villa:** Well, and it all feels so new. It's funny - I mean, I think we knew this; when did we record the last one? Like October?

**Angelica Hill:** Yeah...

**Luis Villa:** I gave a talk in early November, and I was looking at those slides in December... I gave a talk on machine learning and IP and open source in November, and I looked at the slides in December, and to my surprise, they were not embarrassing... Because it feels like the pace of change right now is so much that like even in a month things can get out of date. So I was pleased that those are merely like mildly mistaken now. So...

**Angelica Hill:** Well, excited to dive even deeper, and hear about all the new thoughts that might have come on, and the things that stayed the same. And to help us along in our little chit chat, we've got to people who are never getting out of date, never gonna get old...

**Natalie Pistunovich:** Never Gonna Give You Up...

**Angelica Hill:** Never Gonna Give You -- don't get me started. \[laughs\] Kris, happy 2023.

**Kris Brandow:** Hello! Happy New Year!

**Angelica Hill:** Happy New Year! How are you?

**Kris Brandow:** I'm doing excellent. It's a new year, we get to make all these resolutions and whatnot, hoping to change our lives... And yeah, I made some good resolutions for myself. I do small habit changes. I don't do resolutions. Resolutions are too big. It's like "Go to the gym every day." It's like "No, no. Workout more." Just try and slightly improve things. Just do that continuously.

**Angelica Hill:** Yeah, leave it open to interpretation. Go to the gym more... I've never went to the gym, so going once this year, it counts.

**Kris Brandow:** Yeah. It's also good to like -- if one of your resolutions is to go to the gym, start in like February. Then the gym is more empty, because everybody that started their resolutions in January was like "I can't do this anymore" and then leaves.

**Angelica Hill:** January kick...

**Kris Brandow:** Yeah. Then you have all the equipment, and everything. It's good.

**Angelica Hill:** Very, very excited to chit chat, and hear all the both meta and direct thoughts and feelings you may have. I'm excited. Hi, Natalie...

**Natalie Pistunovich:** Hi, Angelica.

**Angelica Hill:** As always, we're here again...

**Natalie Pistunovich:** Yet another conversation that went on...

**Angelica Hill:** Yes, another conversation... How are you?

**Natalie Pistunovich:** Great. Yes, celebrating all the new years. There's one more new year to start this year, right? The Hebrew New Year already happened. The Georgian New Year...

**Kris Brandow:** Gregorian.

**Natalie Pistunovich:** Gregorian, yeah. That's what I wanted to say. Thank you. The Orthodox New Year... So just the Chinese New Year is coming up and we're good.

**Angelica Hill:** Awesome. Well, excited to have this conversation. As I've mentioned in our intro, we're going to be focusing more on kind of ML, AI etc. but before we dive in there, I'm going to be a little bit cheeky, and for those who haven't listened to our first round of this part one, I'm going to ask you, Luis, whether you can give us a TL;DR - and I know that's an ask - of generally how do we think about code ownership, just to kind of set us up as we go into this deeper dive conversation?

**Luis Villa:** The TL;DR for copyright ownership of code is the same as it is with every piece of music, every piece of art, every piece of poetry... If a human writes it down, it's copyrighted. But of course, you see already where we're going with that, which is the "if a human" part. And that's where this all gets very complicated, very fast, right? Because the basics of code - there's a lot of sort of common mythologies around intellectual property. "I need to put All Rights Reserved. I need to put the years."

There was a big -- Curl, the popular Get Things From the Internet program recently did a big commit a couple of days ago, removing all of the years from the headers of all of it, because somebody finally convinced the author like -- because he had done a commit saying, "Oh yeah, well, we're gonna add 2023." And somebody's "you don't actually have to do that." And he's "Really? I've been wasting my time all these 20-some years" that he's been maintaining Curl, updating those every year... And on Twitter and Mastodon a few people chimed in saying "No, really. You don't have to do it." And he was "Okay, great." Bonk! Gone.

\[06:06\] But there are these sort of mythologies built up, but like the bottom line is really if you as a human being exercising some kind of - in the US in particular, exercising some kind of creativity... If you're writing down a phone book, you don't get copyright on that. And again, the exercising creativity part is going to come in - and then you have ownership of your code.

The one other thing that's relevant in this context is, of course, that our employers often can contract that right away from us, right? So when we sign our employment contracts, there's a clause in there that essentially says, "Yeah, you're gonna write a bunch of copyrightable stuff, and we, your employers are gonna own that." So there's some nuance there, but that's the general gist of it, is that if you're writing for an employer, that employer is going to own that stuff.

And so then we come to this question of, "Okay, well, what happens if a machine writes it?" But before I want to talk about that, I want to tell like my favorite funny story, which is very relevant. So on Wikipedia there was a -- one of the big things that the Wikipedia legal team does is it defends people who edit Wikipedia against legal claims. So that can be like very dramatic stuff, like a politician is suing because they think their biography is slander, or libelous... Or it can be very silly things, like a monkey took a picture, took a selfie, and somebody uploaded that selfie to Wikipedia, and there's this very -- it ended up being, in some ways, a sort of sad story, but the person who owned the camera, who's a nature and wildlife photographer, told Wikipedia that he owned the copyright on the photo. And long story short, the Wikipedia legal department believed that this takedown request was not quite wasn't done with the proper formalities, and that also... His original story was that the animal had taken the selfie, and as I said, a human - and this is where it ties into the machine learning part of things - a human has to take the picture.

And so there was a whole big drawn-out drama, threats of litigation over this question of "Well, okay, did the monkey take the picture?" And eventually, the US Copyright Office, in just sort of a footnote kind of way, weighed in and was "We're pretty sure monkeys cannot take -- if a monkey takes a selfie, no copyright." There wasn't a human involved in that loop.

And that was the sort of abstract thing, because it turns out the category of -- there is a category on Wikipedia of "Art created by animals", which is fairly small, but includes paintings done by elephants, a few other... There's some sheep selfies in there, if I recall correctly... And that gets us to this question though of like - okay, well, when we use machine learning to create code, to create, as we've all seen over the past few months, really interesting works of imagery, is that more like the monkey? What happens to the humans who are in that loop, to the computers who are in that loop, to the data that's in that loop? And it suddenly gets very complicated very fast, and I think part of the challenge is that honestly, attorneys can understand the monkey stole the camera and pointed this-- As you start talking to them about "Well, here's how we trained the model", eyes start to glaze over, and it gets very complicated very fast.

So I don't know, is that where we start today? Do we want to talk about, "How much are you assuming that you're --" It feels like every technologist has wanted to dig into machine learning. I don't know, how much of you three had time to do that?

**Kris Brandow:** \[09:42\] Not as much as I want to. I guess I've generally been not like an anti-AI person, but I've always just been "It's just fancy statistics." So it's like on my long list of things to learn. I have stats and I'm "Well, I should just learn stats before I learned fancy stats." So I know enough that I can like generally describe what the things are doing, but not enough to like go implement something, or like read some code that's doing it. I'm "I don't know what any of that says." But the concepts, I'm "Okay, I grok these concepts, and I understand these concepts."

**Angelica Hill:** And kind of along those lines, in the interest of kind of setting up everyone to kind of have the same baseline understanding, when we're talking about AI and machine learning, at the basic concept level, what are we talking about here?

**Natalie Pistunovich:** I have the answer from ChatGPT for this.

**Angelica Hill:** I'm ready! \[laughter\]

**Natalie Pistunovich:** So it's "AI is a field of computer science that involves creating intelligent machines that can perform tasks that require human intelligence." And if you ask "What is ML?", "That is a subset or part of AI where machines do things, not because you programmed them to do that, but because they have enough data to take a decision to do something."

**Angelica Hill:** Okay. One mentions a level of curation, and one mentions data. So in fact, should we be talking about these as very separate? In the legal field...Maybe this is all -- even Kris... AI as you described it there had a level of -- I can't remember the exact sentence; maybe, Natalie, you can - with "Someone has implemented this from an individual and machine learning references giving it data, and it does its thing", which maybe is less human involvement.

**Kris Brandow:** I looked this up the other day... I've found that definition of AI and ML interesting, because the hot minute of research I did on AI and ML -- because I was "What is the difference between these two things?" And the answer I kind of came back with is like AI is, as you said, this general type of "We want computers to be intelligent." And ML is a way of making computers intelligent, right? ML implements the AI interface for us nerds who write code.

So that's generally how I've come to see and think about it. So these are like two things that you kind of have to talk about more or less together... Because AI is a little bit too abstract if you don't have anything else like behind it, really.

**Natalie Pistunovich:** AI is just a very general one. So in addition to -- ML is part of AI, but also things like computer vision; it's equivalent to ML, and is under AI.

**Luis Villa:** Yeah. Well, I mean, as somebody said -- I was trying to explain that... My sister has a master's, and now that I think about it, I don't know if it's in AI or ML. But our father, who is not in computers at all, asked "Well, what's the difference between all these? And what's the difference between those things and an algorithm?" And what we told him was that an algorithm is something that's actually implemented, and ML is something that hasn't yet actually been implemented. This was a few years ago, and now of course that feels like it's changed a little bit...

I mean, Kris, this gets to your point about "It's all just fancy stats", right? I feel in some ways, machine learning, when we use that, is the variation of this that is really fancy stats, versus like "We programmed the thing to learn from its environment" or something.

**Kris Brandow:** I kind of feel like it's similar to like if you ask the question of "What's the difference between a CPU and a GPU?" It's basically the type of math they're doing. they're both just adding numbers, but they just add numbers in slightly different ways... And I feel like that's what all of this stuff is. It's what's the difference between like traditional statistics, or Bayesian statistics and AI? And it's okay, well, so it's different flavors of those same underlying things.

**Luis Villa:** And this is where it's actually been very interesting, but also frustrating, to talk about this with attorneys. Because attorneys would really, as a general matter, like to come in when things are a little better defined. And when the programmers are still sort of quibbling about definitions, and struggling with definitions, that makes our job as attorneys much more difficult. Both because we often lack the technical chops, and even if we do have the technical abilities, trying to get precise about this in language is a large part of what we do. And so if y'all can't get precise about the language, then we are -- we're up the creek, right? We're in trouble.

\[14:20\] So I find it helpful, and I think probably helpful for somebody to make a distinction into sort of three phases. So the first one is data gathering and training. So we're getting a lot of data, usually from the internet, it could be from -- there's a lot of these things for medical fields now... But you're getting a lot of data, and - Kris, again, to your point, you are learning statistical patterns in that data. And that to me is where the learning part comes in, is that you are setting some software to analyze, find, learn the patterns in that data. That's often called training, right? But learning would be a similarly appropriate term, I think.

So what's the output of that training? The output of that training is the statistical model, right? It is literally the pile of numbers that constitute our statistical knowledge about these things, right? It's a N dimensional graph of weights and - I'm blanking on the other term right now. But at the end of the day, it is numbers. Which, by the way, maybe we'll get into it later, maybe not, but copyright law tends to struggle with numbers. We tend to sort of assume that numbers are not creative, not protectable. They don't look like the things -- our intuitions as attorneys and as the people who wrote the statute, and as the people who've been arguing about this for 100 years... Right? Because we've been arguing about copyright in legal systems, in like modern legal systems for - depending on how you want to count, for 300, 150 years... Pretty much all that was about poetry, books, biography, music. So there's not much -- we often argue about these things by analogy, and as you can guess, and as I think maybe we've talked about in the last episode, the analogies are terrible; they're not very useful. And in part, in this area, one of the things that's not useful is that what you've actually got is this pile of numbers, right?

So you've got the training, you've got data -- and training is, by the way, an active thing, right? And then you've got the model, the output of the training. Then you use that model to create outputs. And so each of those three are sort of different from an intellectual property perspective, right? So you can't really say -- a lot of people have said this on the internet, but it \[unintelligible 00:16:39.19\] every time I see it... Something like "Machine learning is fair use." Or "Machine learning is a copyright violation", right? that's a category error. You can't say "Machine learning as a whole is a copyright problem." You have to say, "The training is a copyright problem", or "The model is a copyright problem", or "The outputs are a copyright problem", because each of those are potentially very different.

So let's try to go through them real quick. So training - what kind of intellectual property rights are involved? You're taking a bunch of stuff, which - remember, since when a human writes it down, it's copyrighted, all that stuff that you're taking pretty much by definition (there's gonna be some exceptions) all that is going to be copyrighted. Right? So you've got this big pile of copyrighted stuff, and now you're trying to extract patterns from it. Well, okay, what do we have to do to extract patterns? Step one, literally, we copy it from a hard drive into RAM. So there's literal -- again, a copy right is literally the right to prevent somebody else from copying.

\[17:46\] So you've got one copy there, going from -- and now you've got another copy into like your arrays, that you're then doing all the magic GPU stuff... As you said, Kris, it's just addition. Lots of it. And that's another set of copies. And then you're creating this model that is numbers, sort of... But the numbers represents some patterns that we learned from this other thing.

Okay, so one thing that may or may not be true, or a question that we can ask, that first step of copying, where we're doing the training, "Is that a copyright violation?" So that's one question we can ask. Then the model. So the model contains all these numbers, but the numbers represent strings, or patterns and imagery... Do those represent a copy? Or are they some sort of abstract thing? Because if it's a copy, then there's a copyright infringed. But if it's very abstract, it's not really related to the thing - okay, well then probably not. But that's an intelligible question we can ask.

And then finally, we can look at the creation of the output, and we can say "Oh, well it turns out that the way we created this output - actually, everything's like just so weird and out there that it's not a problem." Or like maybe we've trained a model that actually repeats itself an awful lot, and contains things that look an awful lot like some other copyrighted thing.

So we can ask at each of those stages, "Has there been some--" There's also, by the way, patents. We can talk about those a little bit separately. So that's what we have to ask at each of those stages. And who does this, of course, maybe separate, right? If I am using Copilot, I'm not doing training, so I'm not infringing by training. Microsoft did that, or OpenAI etc. But if I'm outputting code, there's still that question about the output. Right? it may be that the first stage is fine, and the output stage is not.

I just went through a lot there, so let me pause, and... Hopefully it's fairly clear, but I'd love -- any questions, or thoughts, or anything from Slack?

**Kris Brandow:** I have like a meta thought... Because you brought up the whole "We can't copyright numbers" thing, which always reminds me of that - I don't know if it's famous, but the whole Intel thing of like the reason they renamed their line of processors to like Pentium starting with the fifth generation is because they went to the courts and they were like "We would like to copyright 586" and the courts were like "No, you can't copyright a number." Or maybe it was with a 486, and then someone tried to knock it off, and then they were "You can't copyright a number, sorry. Or trademark it." You can't do things with these numbers.

**Luis Villa:** Ha! So you just hit on the thing. This is one of these things where it's all complicated, right? And where -- so actually, the question there is trademark, right? So trademark is when you're using some set of numbers, or colors, or even there's a few cases now about trademarking smells, in commerce. You're using it to identify a brand. So red shoe soles is a thing... I really want to say Louis Vuitton, but that's not it.

**Kris Brandow:** I think it is Louis Vuitton.

**Luis Villa:** Yeah, maybe it Vuitton. But that's a trademark. That is used to identify your product to the public. And so exactly that, Kris - I think it was 386s, or 486s, where a court didn't say that it was impossible to trademark a number, but like there's a higher -- trademarks, the more creative they are, the less skeptical courts are, is the short and simple version of it. And a number - obviously not very creative. It's like literally a part number. Whereas Pentium - much more creative, and in that sort of weird sense of it's one word... This is why you get all these weird startups that don't call themselves a name that has anything to do with the thing they're doing. Right? Partially because it's more memorable, but partially because the less it sounds like the thing, the easier it is to trademark.

But that is a separate body of law. Trademark is the one body of intellectual property law that's a very pro the humans at the end of the process. Because the whole thing is that trademarks are supposed to not confuse you. So in fact, it's companies that bear a lot of the burden there.

\[22:02\] Sort of the other way around with copyright, right? Where it's supposed to prohibit you from ripping the company off. But yeah, there are layers here that are -- and again, mostly I haven't touched on patents. I assume that all these AI companies are patenting things out the wazoo. But patents apply to processes, usually, not to particular things.

So you could patent -- I'm simplifying a little bit here; there's some exceptions, but... You can patent how you do training. So if you created a new way to train a model more efficiently, more effectively, then you can patent that. And if you figured out a new way to do outputs from a model, the process of creating those outputs you could patent. But actually patenting the model itself, with some sort of edge cases - probably not patentable... Which gets to one of the recurring themes that we're going to have here, and this gets back to, Kris, what you were saying about numbers... A little unclear that the model actually is protectable by anything in modern intellectual property law. Like, there's actually sort of an open question as to whether or not that thing is something that copyright law can fit into one of its boxes. Because that's the thing - intellectual property law generally has boxes of things. Patents are four processes that we invented. That's a little bit of a simplification... But for our purposes, that'll do. Copyright is creative works that you created. Trademark is brands that you're using to sell a thing. If it doesn't fit into one of those boxes - and this has actually been a problem with databases.

So like databases - I mentioned phonebooks. I think maybe I mentioned this in the last episode, too... Under US copyright law you can't copyright a phonebook, because the Supreme Court said, "There's no creativity there." Right? The only creativity was you wanted to find the phone number of every person in town. Now, if you said "The 100 most popular debutantes in town", which is actually was a thing in New York in the late 1800's... That list, because it involves creativity and judgment, that list you could get a copyright on.

Now, if somebody else has a list of like "My 100", and it's 95 of them are the same, it can be hard to protect. But at least in theory you could protect that thing, right? And so databases -- the European Union has a whole separate set of laws just for databases, that they call The Database Right. And so in theory, databases are -- in practice it turns out to have been not all that useful, but they invented -- 20 years ago, 25 years ago, they were "You know what - we need to encourage more databases, so we're going to create a Database Right." So there it is, an EU law; it turns out to be mostly unused, though we'll see if with machine learning maybe some people will say that the models are databases. I think that's gonna be a little bit of a hard trick to pull off, but I'd be shocked if somebody doesn't at least try to protect models under European database rights... Which, by the way, quick -- I think I touched on this last time around, but copyright law, global platform. And this is one of these where the analogies to programming actually works really well. Essentially, every country on Earth has signed what's called the Berne Convention, which makes - the basic concepts of copyright are more or less the same globally. A lot of implementation details, as with anytime you're creating an instance, you're implementing an API, the implementation details matter... But at the high level, copyright is the same globally.

The US has no equivalent of the EU database law. The EU is regulating a lot right now on privacy, which bears on training, right? Like, what if you have private information in the model? The US Federal law says nothing about that. Copyright law says nothing about that. The European Union has very strong opinions on what happens if you accidentally encode private information, especially like medical information, in a model.

\[25:59\] So there's a whole other field of law -- like, I think one of the cool things about machine learning law, but the very frustrating thing for programmers asking us about opinions... Because programmers just wanna know "Is this stuff legal? Can I use it?" And the answer is, "It depends", because, like copyright, patent, trademark, privacy law, database rights... All these things are like -- you know, step one is, I don't know, are you in the EU? Or are you in Japan? Or are you in the US? Because the answer might be different in all those places.

So yeah, we talked a little bit about these sort of big buckets of things. One thing that I put in the show notes, and that we just talked a little bit about - like, what analogies do we use? So maybe it would be helpful - I don't know where y'all wanna go - to talk about some of the analogies the courts have used for this kind of stuff in the past.

**Angelica Hill:** I love a good analogy.

**Luis Villa:** So I talked about monkeys... So one serious analogy that you could make here is that once it's in a model, there's no human involved, and so if you just press the button and say, "Please spit me out some code", there's no human copyright in that code that's emitted by Copilot, and so therefore, you can use it however you please. That's the most naive... Like, you hired a monkey to write some code for you, and so we know monkeys can't copyright a selfie, and so this is just like that monkey. Right? It's definitely 100% free of copyright. That's an analogy that would be nice and simplifying. I don't think it completely works... But it's a good starting point.

The flip side of that is I hired a human to write code for me. So if I hire a human to write code for me, there's definitely copyright. I definitely have to have a provision in my contract. So if Copilot were just going to like an ultra-fast typist at the Microsoft headquarters, that typist - you'd have to have an arrangement with that typist. I had an old boss who broke both of his wrists in a snowboarding accident, and so he like literally hired an MIT undergrad to be his code typist for like a month, because he couldn't type, and accessibility features, especially on Linux in the early 2000s, were not there. So he had to have a contract with that person that said, "Anything you output is definitely copyright our startup; you don't own anything in it."

If you had a monkey in the same situation, you would not have to have a contract; you obviously can't sign a contract with a monkey, which is like a good hint... Similarly, you can't sign a contract with Copilot. So that's one analogy we could look at for the whole system.

**Angelica Hill:** I mean, \[unintelligible 00:28:39.08\] I'm sure this is a very obvious argument, but I kind of just want to ask it, ask the silly question... Copilot wouldn't exist without a physical human being having been hired by Microsoft to work on that feature, and to input and ensure that the output is X, Y, Z, and this is correct... So I guess -- you've got the three parts that you mentioned; you've got obviously training, model outputs... We've established training is you need somebody to train it, and ensure the output is accurate. But I feel like going off the kind of monkey analogy - that monkey did something that had they not done it, you would not have the end product, therefore in the kind of maybe Copilot analogy, had that initial engineer not trained effectively, you would not therefore have that. So could an argument be made legally that you can trace that code back to a person who wrote it, slash also to Microsoft, if contractually that code is owned by Microsoft? Or is it truly legally in these three buckets?

**Luis Villa:** Yeah, so that's one thing, is all of this is TBD. I mean, there's like a little bit of -- since we've last talked, there is now a court case about Copilot...

**Angelica Hill:** Okay.

**Luis Villa:** \[29:59\] I don't want to talk about too much, because it's a little weird in a few ways... Or I don't want to over-focus on it. But the thing is is that this is where it's really important to make sure we've -- as you called out correctly, Angela, that there's three different things going on here, right? There's the training, there's the model, and there's the output. So those human employees at Microsoft who did that set up, and that initial design of Copilot, that initial training of Copilot - there's probably some rights, or at least arguably... And this is where we get into the question of, "Well, it's just a pile of numbers in the model itself", right? Like, if I printed out the module onto sheets of paper, and then like photocopied them and I start handing them out, Microsoft having done that creative work to create that model, they will probably feel entitled... And probably correctly, though it's a complicated thing, to come after me for printing out the model. But activating the model is arguably a lot more like -- I mean, they put a lot of work into creating MS DOS, right? Or Windows 12... Is that where we're at now? I've been a Linux and Mac user too long now. You know, they put a lot of work into that, but they don't run around claiming "Oh, well, the operating system helped you invoke VS Code, therefore we have some copyright in the thing", right? There's sort of a natural barrier there between the creation of the tool and the use of the tool.

**Kris Brandow:** I feel like a good analogy here too would be to like a compiler, where it's like "Yeah, someone wrote the compiler", but you input your source code, and you get out an artifact that represents that. And the input that went into it is the thing that's copyrightable. And just because people wrote the compiler doesn't give them any permission or copyrights around that... But it also doesn't give them like permission for the input of it. So they can't say, "Oh, well because you ran that copyrighted material through my compiler, now I have the ability to grant that copyright to you." That's not how that works.

**Natalie Pistunovich:** So some corrections, because some things were not correctly said.. It's a good time for me to remind that I am an Open AI developer ambassador, so I like to focus on my small little details here... Microsoft is the owner of GitHub. GitHub is using the API of the model that was created by Open AI, that is called Codex, that is the underlying engine for Copilot. So actually, when you go to VS Code and you type something, and you have the plugin on for Copilot, what actually happens is that there is a line of code from GitHub, which belongs to Microsoft - I don't know the separation of the entities; you know definitely better... So they have the API that they're using. That part of the API that they're using has something from me, that I wrote in VS Code, it has a part that they added, which is called a prompt, which is something along the lines of "This is what you wrote so far. What do you think she wants to do? Can you complete?" So this is their own personal just GitHub; not Open AI, not Microsoft. And then this is pinging the endpoint of Codex, that is an engine that belongs to Open AI, but it runs on the Microsoft Azure Cloud. So there's actually all sorts of steps in between to make it even more complicated. But it's not a Microsoft thing.

**Luis Villa:** And the hot rumor is that Microsoft is buying 49% of Open AI sometime this week.

**Natalie Pistunovich:** Either yes or no, but Open AI is actually capped-profit. So they have an interesting structure that the labs belong to that company that has capped-profits. So once they hit the \[unintelligible 00:33:33.14\] the rest of the money goes up to the NGO.

**Luis Villa:** Yeah, there's a whole complicated discussion around -- and actually, I mean, one of the things that we have to talk about here is this question that I didn't mean to back into quite yet, but something to signpost for viewers in... Oh, my goodness, we're flying... It's this question of "What does it mean to be open in this space?" Because we don't really know what the rights are, and we don't know what power is in this space... We're learning a lot on the fly. So you'll see a lot of stuff labeled "open" in the space - and I don't mean this specific to Open AI, Natalie, because there's like a lot of folks using "open" very loosely in this space.

\[34:16\] Some of your listeners may or may not know, the Open Source Initiative for a long time has defined what open source means in software. There's a lot of, again, nuance there, but there is a list of like "These are the open source licenses", and there's a list of criteria. Open source licenses have to meet certain criteria, amongst others of which is everybody's got to be able to use it for anything. You can't use this for nuclear weapons, or you can't use this for human rights violations... If you slap that kind of restriction on it, it's no longer open source as defined by the Open Source Initiative.

There's a whole lot of AI stuff that has exactly that kind of language in it: no human rights violation, no harassment... And are calling themselves open anyway. And the gray area there is a really interesting one, and it's one that I've been exploring a lot. I have a newsletter called OpenML.fyi, that hasn't published yet this year, but hopefully this afternoon, for the first time this year... Where I'm exploring exactly these questions, of "What does it mean to be open, and open source?"

Kris, to get back to your example, because I do want to get this back on track a little bit... The compiler - we have a very certain assumption. Open source is based on some assumptions of there's source code, there's a compiler, there's an executable... And those assumptions don't hold true in the same way, right? Like, there is no source code for a model per se, right? There's the dataset, there's the way you trained the dataset into the model, but that's not the same as source code from a perspective of -- I mean, the dataset may be literally too big to download, it may be impossible for you to do on commodity hardware enough training... It may be illegal for you to download, because that dataset may include private information, contractually restricted information... So what does it mean to be open when you can't reconstruct the whole thing from one end to the other is a really interesting one, and one that I don't think we have a great -- I think a lot of the assumptions of the industry has been built on... You know, everybody who uses Go - Kris, to your point about the compiler and about the programming language... I mean, that's the other part of this, right?

Kris, if you've got a compiler, you assume that you can just use the outputs of the compiler, right? Well, the same thing with a programming language, right? Every standard library of every major programming language out there is under a super-permissive license, because you do actually -- I mean, the one sort of exception to what you're saying, Kris, about like "Oh, well, the compiler just spits out a thing at the end..." A lot of compilers in a lot of languages - it depends on the language, the technology etc. - will compile in part of the standard library, into your executable. So in fact, if the standard library has some kind of use restriction on it, that's a problem. Now, of course, as a practical matter, nobody does that with our languages, because that would be shooting your language in the foot if you had a clause like that. So everybody says, "Yeah, sure, use the standard library however you want. We're not going to nitpick over that." And we haven't mostly yet reached that point.

In some ways, you can think of these restrictions around a lot of these models as sort of equivalent to a standard library in some way, right? The developers really want you to live within these platforms, within these frameworks... But unlike the standard library, or like the core operating systems - Windows, Linux, Mac, they don't say "You can't use this for a laundry list of things", mostly. They don't say "You can't use this for this laundry list of things." If you're a developer, you take for granted that that can be done. And right now, a lot of these AI, especially the big platforms, but the models you can download as well, come with a lot of restrictions.

\[38:12\] An interesting question - and this gets back to this question of "Is the model copyrightable or not?" is, "Can we actually make those stick?" So the way we -- this is something we haven't really talked about a little bit, and it gets back to this TL;DR... If I create a binary of a piece of software, and you start making copies of it to use it, you need a copyright license from me to do that. So that means I can start sticking conditions in the copyright license, like, you have to pay me every time you do that. Or every time you spin up a new instance in the cloud, you've got to pay me for that. Or you shouldn't use this for X, Y, and Z bad purposes, and you shouldn't use this to compete with me... We put this laundry list of restrictions into binaries.

We know as a matter of law that binaries are executables of traditional software, are copyrightable. We don't actually know for a fact that models are. So when somebody gives you a model and says, "Yeah, by the way, here's all these restrictions. If you violate these restrictions, I'm going to take away your license to use the model." It's not actually clear that that works, right? It's not actually clear that you need a copyright to use that thing. And if you don't, then how do we enforce these ethical restrictions that the AI industry for very good reasons is very concerned about people following?

Natalie, I don't know how you -- I'm curious how you got into the AI space. Kris was saying he wanted to dabble... I'd forgotten that you're an ambassador in this space, so you've thought about it a fair bit, right? A lot of the Open AI model releases - because Natalie didn't say this, but Open AI has released a lot of different models under a lot of different terms... Codex is one of them, and there are quite a few others, some under more permissive, some under the more restrictive licenses.

And some of those are restricted for very good reasons, like "Don't use this to stalk people. Don't use this for deep fake porn." But it's unclear how that gets enforced. Or we don't actually know as lawyers yet how that will work. We've all got theories, but that would have to be episode three.

**Break:** \[40:19\]

**Angelica Hill:** I would love to hear, Natalie, how you got into the space and what your perception here is from the other side, i.e. like as an ambassador. Are there mumblings in the space that you've heard?

**Natalie Pistunovich:** I don't understand the question. \[laughs\]

**Angelica Hill:** You got into this space as an ambassador, as someone who walks in Open AI... When you're thinking about --

**Natalie Pistunovich:** I don't work in Open AI.

**Angelica Hill:** As an ambassador then, who has interacted with Open AI, and knows some stuff about it... I would love to hear either yourself, or people you've chatted to in that space more directly, how they're thinking about open sourcing, giving out models for use, whether as, Luis, you mentioned with parameters around like "Don't use it for this" or "Hey, you can use this for whatever use case you need it to." Have you heard of any opinions on, or do you have any information on how they make those decisions? The answer can be no; I think that's just a really interesting -- I'd love to be in the room when they're thinking about "Oh, we've got this new, cool model. Should we put some restraints on it? Should we give any PSA, don't use this for X, Y, Z?"

**Natalie Pistunovich:** Yes, that's many questions, definitely. So what I do there is a volunteer there, you can say. I'm a developer ambassador, which means that people who get access to that - it was more relevant to the time that it was rolling access to that, to GPT-3, and then to DALL-E, and so on; then people would come to my office hours and just ask me questions, mostly technical questions, but sometimes also, "Can I do that?", or think about things with me.

So I mostly interact with users. So there's all sorts of restrictions in place... For example, when DALL-E just started being public, you could not put all sorts of words in there. And then came the other side of this entire thing, when Midjourney came out, and then you could write anything, and then it obviously ended up in weird parts of the internet, as it tends to be when you have free access to everything...

So I think this has kind of two edges to that, and the balance will be somewhere in between. One way of enforcing now good usage - and it's a very wide definition - is that you always have to go through a review if you use Open AI in production. So if you use it for fun, use it for fun; if you want to actually use that, you have to get like a PR, as we know it from our world of context... Somebody from Open AI will go through your plan of what you're going to do with that in production, how is going to be reasonably safe, and so on.

So this is how it's happening right now. How will it be in the future? That's a great question. Another interesting question of what is now versus what is later is something that has been surfacing on Hacker News, Reddit and so on... So there's a professor that is called Scott Aronson, I want to say. He came to Open AI for a year of research, so he's now in the middle of it, and he's driving the concept or the idea of watermarking output of text. We know watermark from images; if you go to stock images, you pay money, and then you don't get that watermark. And then they have the idea of -- or some people in the team have the idea of doing that for text. And there's discussion, yes, or no, good or bad, and so on, and it's also interesting to do that for code. But it's a lot harder.

**Luis Villa:** And I think this is where one of the things that I'm super-interested in - openness; original open source, it was, in some sense just an IP law thing, right? It was just a copyright license, but it redistributed power in the industry. It made it possible for a small startup like Google - because their original plans were like "Well, in order to do this, we're gonna need tens of thousands of machines." Of course, now it's tens of millions, or whatever.

\[46:05\] But at the time, the idea that you could license 10,000 machines and like operating systems - again, to this question of copyright licensing... From - at the time your options were Sun or Microsoft, right? That would have been implausible. It just would have been too costly to create Google, and open source allowed new competitors to come in. And we've seen this in a variety of different spaces. It tends to -- I won't say it ends control, because obviously, we've ended up in a world where there's a small number, again, of control-- they're just using different tools to control the industry. So where are we going to be at that? Because Natalie mentioned Codex, there's a project called Big Code, which is open(ish) - you can join the Slack, you can download the models, you can discuss their ethical restrictions... And that is all being done in the open, right? It's not inside any one company. There are some corporate sponsors to buy GPU time, but it is going to be a research-oriented alternative to Codex. But if that's out there in the open, or what I've been calling open(ish) in my newsletter, because it's open with some restrictions... Are they huge restrictions, small restrictions - we don't really know yet.

Open AI is going to be doing this very good, I think very interesting work on things like fingerprinting... Like you say, if you want to deploy in production, Open AI is gonna like challenge you on the safety of your usage. Okay, well, but once it's out there, if somebody else is doing an open competitor, open(ish) competitor, what's the infrastructure for -- and this gets, again, to these other layers...

I think, if your listeners take away any one thing from this talk, it's that for a long time, we used intellectual property licenses to govern the ethics of our software. That was weird, and probably not very good, and we should stop doing that as like the first line of defense, right? Because there's just too many other tools of government regulation... Natalie's example of a platform regulating what's being used, codes of conduct... This like 25-year period where intellectual property was the hook that we did all of our ethical regulation through was a very weird period. It was very lucrative for me as an intellectual property lawyer, but probably not the right thing for the industry.

So again, for your listeners, if there's any one thing to take away from this, it's that if somebody says, "Hey, we should use an IP license to make human beings behave better", your instinctive reaction should not be, "Oh, hey, that's what the free software people did." Your instinctive reaction should be "Uhm, ehm, uhh... If we must... If that's the only tool we've got, then yeah, maybe." But it's almost never the only tool we've got. There's so many other layers of regulation now that we can use to try to govern how we work together, that are probably better suited for it. Because IP is just -- and like I said, to get back to this... Like, we don't even know, right? And we haven't even gotten into some of the weird side corners. I don't know how much time we've got left, but... Yeah.

**Kris Brandow:** So I've been thinking about something... And it's related to this whole Copilot, or really any model that writes code for you. And it feels like there's kind of this spectrum of things when it comes to writing code, where it's - fundamentally, all of us write code based on code that we've seen before... Whether we like learn the code, learn the syntax, learn algorithms, and all that, and then we can use our own creative ability to write something.

And then on the other end of it, we can just like copy and paste something else that you've found, and go use that. And the thing I've kind of been thinking about is where is the line in that gray space when it tips to one side or the other? Like, if I copy the whole thing and then modify it a bunch, is that -- how much does that amount to "Okay, this is a new derivative thing, that doesn't have the old copyright thing"? Because once again, you're reading code, you're absorbing code from tons of other different places. Our minds are doing the things that the models do, at the end of the day. Our brain is a model in and of itself.

\[50:16\] So it's like, we're producing stuff that would be set "Okay, this is your copyright, because you wrote it", but it's based on everybody else's work. So where does that derivative line exist, and what actions are required to make it happen? Because obviously, if I copy and paste some code from one place to another place, I don't get the copyright to that code, because I've just copied it, and created a new derivative work. But if I retype all of that code and change some things along as I'm retyping it, is that still a derivative work? If I'm not looking at it, does that make it less of a derivative work than if I am looking at it? It feels like this whole space is super-murky, and I feel like the answer is we haven't really found an answer to any of this...

**Luis Villa:** So one, absolutely correct. We haven't found an answer, or we've sort of found several answers and none of them are great, right? Because it's gonna depend on things like -- well, so one analogy... We sort of got off the analogies track, but one analogy here is Google Book Search, where they said up front, "We are copying all the world's books." But we did a lot on the backside, on the user interface, to make it really hard for people to get more than a fraction of the book out at any one time. And we created a whole lot of new value by making all these books searchable.

So a court looked at that and was "Well, yeah, all that copying - very bad." But all the value that was created and the reasonable steps taken to protect it means that it's what courts and lawyers literally call a balancing test. The court was sort of so like "Ehmm..."

So that's one analogy, right? And in that case, as long as the Copilot folks are taking good faith steps, Copilot at least is going to be protected. Maybe if you're copying a section of a book at a Google Book Search, or a copy of code out of Copilot, you might be in trouble. But Microsoft and open AI will probably be okay. Right? Because it might be like Google Book Search to a court. But there's a case in front of the Supreme Court right now about Andy Warhol, and there's some cases in California federal courts about the song Blurred Lines, where like only a handful of notes in the Blurred Lines case was enough to make that song a copyright infringement. Now, a lot of the IP attorneys are horrified by that outcome, because it's like so small... And to a certain extent, the judge was like "You know what - it just has the same vibe", and IP lawyers are like "But you can't copyright vibe", and the judge is like "Yeah, I can. Watch me do it."

So code, by the way - Copilot is the easy case. right? Because there's not much vibe in code... But as soon as we start getting into like DALL-E, that Natalie already mentioned, Midjourney, all these things - okay, well then we get into... And this is where the Warhol case comes in - there's that Warholy vibe. "Is that protectable...?" And I shouldn't actually say -- I should say, "The Warhol case is not about Warhol's vibe." Warhol, in this case, is the copier, not the person being copied. But the same kinds of questions are just going to keep popping up, and we don't know, Kris, we don't know yet where these lines are going to be. And, again, the outcomes are going to be different for the company that makes the model and the person who uses the model.

So the one thing that I've told people consistently is I think that GitHub is probably actually safe here. I don't think running Copilot is itself an infringement. I think it's a lot like Google Book Search. Using Copilot 99% of the time is gonna be fine. But if you're doing something like clean-rooming somebody's API, imagine -- if you tell Copilot "Hey, I've got this API that happens to be somebody else's API..." And by the way, that company might be using GitHub behind the scenes; we don't even know... And it starts reimplementing their entire API for you - that's where, again, the vibes, the balancing might be a lot different.

\[54:17\] It's funny, I was having a conversation with a friend who I assumed his company was doing no cleanrooming... And I was like "Oh yeah, well the only thing is as long as you're not cleanroaming", and he like literally picks up his phone and texts his CTO, and he's like "We need to talk tomorrow morning." Because it turns out this friend's company was doing some cleanrooming of something with a company that hates them on the other side of it. So that's where you get into -- that's the other thing, right? A lot of these things are hypothetical, because nobody's gonna know or care 95% of the time. But I would definitely not use Copilot to reimplement any Oracle APIs. That's my one other piece of advice to you that you should remember from this podcast.

**Kris Brandow:** Oracle is like the litigious people that do lead us forward in some ways... Like their fun poem in their connection protocols, so you can't implement it without copyright infringement. They have all the creative stuff.

**Luis Villa:** They kept me very employed for a long time on the Google Oracle case. I've worked for Google, to be clear. The Oracle people can go rot in the swamp, as far as I'm concerned... But -- is that my unpopular opinion, or does that count as a popular opinion?

**Kris Brandow:** I guess it depends on who you are. And for our listeners, could you just define what cleanrooming is? Because some people might not be familiar with that term.

**Luis Villa:** Oh yeah, sure. There are times when you might want to copy what another company is doing. And so cleanrooming is the idea -- it comes originally from patent law, because you might want to get to the same result, but get there in a different way. So somebody will write out "Here's the result we want to get." You're not allowed to look at anything the other company did. So that's what -- originally, when IBM reimplemented Java, way, way, way back in the day, they literally gave instructions to people like "Well, here's the API headers, the Java API headers. You can't look at anything. You have to promise up and down, "I haven't looked at anything that Oracle's ever done." It was a clean room, because it was clean of anything that Oracle had done.

If you did the same thing today, and somebody used Copilot, like you yourself might be clean of anything that Oracle had done, but we don't know if copilot is clean of anything. We are now eight minutes past where Angelica was saying frantically in chat "We've got to stop. We've got to stop." So let's stop. Thank you all for having me.

**Angelica Hill:** It's so hard to cut off such wonderful conversation. I always struggled, like "This the last thought. Oh, but this is really interesting. Let's let this go on longer..."

**Kris Brandow:** It sounds like we need a part three...

**Angelica Hill:** I know... That's what I was just thinking. I'm like, "We're gonna do a part of three." We may well need one.

**Kris Brandow:** Maybe I'll finally restart my own podcast and bring you all for a crossover.

**Angelica Hill:** Maybe. Maybe. Awesome. Well, we're going to now dive into unpopular opinions, which I'm very excited about. So get them ready, get your brain cogs going if you haven't got one, and here we go.

**Jingle:** \[57:09\]a

**Angelica Hill:** So what is your unpopular opinion? Luis, over to you.

**Luis Villa:** Super, super-hot take - blockchain was good, because it took everybody's attention away from ML for several years, so that people could actually get some stuff done before the buckets of money sloshed in... And now that people have realized that blockchain is actually all terrible, the buckets of money are sloshing into ML, and that's... You know, it's good and bad, right? It's great in some ways, but it can be distracting in others... So I'm sort of actually glad that blockchain took that energy for a few years.

**Angelica Hill:** \[58:08\] Responses... Do we think that's popular/unpopular?

**Kris Brandow:** I mean, I hesitate with anything that's like "Blockchain is good", but... \[laughs\]

**Luis Villa:** I told you it was a good hot take.

**Kris Brandow:** I mean, in general, it feels like that's like "Oh, we were able to go do some good stuff, because we kept the boatloads of money and all the bad stuff that comes with it away from this space for a bit." I can get on board with that. Blockchain and crypto in general though, I'm just kind of like...

**Natalie Pistunovich:** Let me mint that...

**Kris Brandow:** Yeah... I've been watching some Coffeezilla on YouTube recently; he's like this investigator that goes into all of these different types of scams. And I'm just like, "It is so easy to just create a new coin, and then just extract money from people." And I'm this is a wild, wild space. It all started because of this blockchain thing. But then again, like most of finance also - we've had Ponzi schemes for a very, very, very long time, so...

**Angelica Hill:** Okay, we'll see what the Twitter public think. Kris, do you have an unpopular opinion?

**Kris Brandow:** I don't think I do... I mean, I'm sure I have many unpopular opinions. I don't have one prepared...

**Angelica Hill:** At this exact moment. Okay.

**Kris Brandow:** I guess my unpopular opinion would be "New Year's resolutions suck." CGP Grey has some good videos on like theme; like, have themes. Have a theme for the season, of like "Oh, the season of learning", or whatever. Those are much better than "I'll go to the gym five days a week, or things like that. Build some good flexibility into them. But I don't think that "New Year's resolutions suck" is an unpopular opinion. I think a lot of people hold that opinion.

**Luis Villa:** I was gonna ask if you had an unpopular resolution... Like, "I'm gonna steal candy from a baby once a week", or something like that.

**Kris Brandow:** \[laughs\] I do think one of my resolutions is crazy... But it's not crazy because I can do it, but like I'm trying to like write more... I recently did a review of how much journaling I've done, and over the past few years -- the past two years, actually, coming up on the anniversary, when I started journaling heavily, I think I'm approaching about 3.6 million words written over the course of two years... So one of my resolutions is to write more. I think that will be unpopular with many people, because that sounds insane.

**Angelica Hill:** Best of luck \[unintelligible 01:00:32.08\]

**Kris Brandow:** "You written millions of words per year?" Yes, I write millions of words per year.

**Luis Villa:** That's 5,000 words a day, man...

**Kris Brandow:** Yes.

**Angelica Hill:** Well done. I think that might be an unpopular resolution. I will not be taking on writing more than 5,000 words a day, personally.

**Kris Brandow:** Interestingly, it only takes me about an hour to do. So it's not like it's --

**Angelica Hill:** Now you just show it off, Kris. I'm going really slowly, okay? You're putting me to shame. I maybe write like five words a minute.

**Kris Brandow:** Well, this is what happens when you're a writer; the brain is brimming with things that need to get out of there, to make space for the other things.

**Angelica Hill:** I look forward to reading your encyclopedia-length journal next week... \[laughter\] Natalie, unpopular resolution or opinion.

**Natalie Pistunovich:** My unpopular resolution/opinion - I guess you can make them into one. I've been trying to eat seasonal, and it's terrible in winter, at least here in the North/Central part of Europe. All the fruits you get -- if you try to eat fruits and veggies mostly, you get apples and roots. So my unpopular resolution will be to eat slightly less seasonal, and my unpopular opinion is that we should make seasonal food better, or different.

**Angelica Hill:** And that was me thinking you just were drinking an obscene amount of pumpkin spice lattes...

**Natalie Pistunovich:** \[laughs\] I mean, pumpkins show up on time. You can use spice with latte on them, if you grill them... But no, I just mean like produce.

**Angelica Hill:** Yeah. Okay... So eat less seasonally. Fair enough.

**Natalie Pistunovich:** And now tomorrow I'm gonna see like tomatoes on the house, or something. It's the worst thing you can say.

**Kris Brandow:** \[01:02:12.22\] What is your unpopular opinion, Angelica?

**Angelica Hill:** Ugh.. I always-- What if I \[unintelligible 01:02:13.18\] to get out of it? My unpopular opinion/view is... Let's think. I've got one, but I think it would actually be unpopular, and I think I'd get some Slack for saying it, but it's actually what I think right now... It's sometimes it is okay to not do your own construction work, and just make someone else do it for you... Context being - I've tried to put a picture up yesterday, because I was like "No, I can do it myself. I can hang up this picture." I did, and then it fell down and smashed all over my floor about a day later, after I'd spent about half an hour getting quite irate on a friend who said that he would just come help me, because he didn't think I can do it. And I was really trying to prove myself, and then I called him and I was like "It fell."

**Natalie Pistunovich:** Did you use some guide, or did you just like take a hammer?

**Angelica Hill:** My unpopular opinion is sometimes it's okay to admit you can't do the thing that you spent half an hour being very offended because someone thought you couldn't.

**Kris Brandow:** That pride sometimes gets you.

**Angelica Hill:** It did. I had to buy a whole new frame; it like smashed everywhere. It was a whole thing. And I have a hole in my wall now, but anyway... So that is my unpopular popular opinion.

**Kris Brandow:** I mean, it's unpopular with me... Those posters back there, those bookshelves - I put all those up myself.

**Angelica Hill:** Kris can do everything show-off show today. What's up? Maybe you should help me, Kris.

**Kris Brandow:** I mean, I could, but your friend could also help you...

**Natalie Pistunovich:** \[laughs\]

**Angelica Hill:** Oh, I might be hanging up after this...

**Luis Villa:** "Someone else can do it for me" is the basis of open source... So I think it's okay.

**Angelica Hill:** I can trust you can bring it all together for us, Luis... Thank you so much. \[laughs\] Well, have a wonderful rest of your day; thank you, listeners... And that's it unfortunately. Bye.

**Kris Brandow:** Bye...!
