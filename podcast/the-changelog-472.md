**Jerod Santo:** So, Eran, you are CTO and co-founder of Tabnine. You're also a professor of CS at Israel's Technion University. Welcome to The Changelog.

**Eran Yahav:** Thanks, guys, for having me. It's great to be here.

**Jerod Santo:** It's great to have you.

**Adam Stacoviak:** Wow, professor.

**Jerod Santo:** Yes.

**Adam Stacoviak:** That's very cool.

**Eran Yahav:** Yeah, let's say it is cool, yeah... \[laughter\]

**Adam Stacoviak:** I'm not a professor, so I think it's super cool.

**Jerod Santo:** I also read that prior to this you also worked at IBM on the Watson project. Is that right, working on Watson?

**Eran Yahav:** No, I did not work on the Watson project. I worked in the T.J. Watson Lab. The Watson project was actually just a few rooms down the corridor from me, so I heard all the sessions where they were doing the jeopardy training and all that; it was super-exciting. But I was not involved with that at all.

**Jerod Santo:** Oh, bummer.

**Eran Yahav:** But I got to witness a few of the first runs; that was literally in the same corridor, so that was cool.

**Jerod Santo:** Yeah. I connected those dots, because you're doing ML stuff and I figured, "Well, he's doing AI. He was at IBM. He's got to be working on Watson."

**Eran Yahav:** No. So I worked on very cool things that were not Watson, that were program synthesis, which are related to what we're doing also in Tabnine. And at the time, we worked on program synthesis for synthesizing low-level concurrent programs. So the idea that you would write some sequential code and hit a button, and magically, you would get it to run efficiently on concurrent systems... And I don't know if this sounds very hard, but it is very hard. It was a super-exciting technology at the time.

**Jerod Santo:** Yeah. So from there to here, now you have Tabnine, which is your company, trying to do AI-assisted development workflows... Tell us how you got from that play to this place.

**Eran Yahav:** \[04:01\] So I've always been fascinated with programs that run on programs. That has been my kind of long-standing fascination. I've worked on compilers for a long time, in the early days, then worked on program synthesis, which is programs that generate other programs. And generally speaking, I also worked on program verification, trying to verify that a given program satisfies some spec, that it does what you want it to do. But very early you start to realize that once the artifact has been built, it's just too late to try and fix it. If it was built the wrong way, just don't bother. And then I got super-interested in synthesis and this idea that you can generate things from scratch, the right way, as you build them, and therefore, get sort of correctness by construction, or at least have some good properties of what you're building by construction.

And so working on these synthesis ideas in early days, I guess a decade ago, we started hitting stuff that seems to have actual practical value, as opposed to just academic papers and fascinating ideas. And at the time, Dror, who is the CEO of Tabnine - he's a long-time friend, so I just met him for coffee and I said, "Hey, Dror..." We were kind of like, "Hey look. Look at this. It looks like this could actually work." He said, "Hey, man. That's the future. That's amazing. We've got to do something about that." And he said, "Oh, I don't know... Doing stuff for real is so far from what we usually do in research. It's probably too far for us to bridge the gap." I said, "No, man, we're doing it." He said, "Okay. If you insist, let's do it." And so this is how it all started.

Initially, it was just now the two of us building some technology, pretty much in coffee shops, as these things go... At the time, it was called Codota, by the way. Then we started rolling with that, and things started to work. It was very, very exciting. So that's the early days of Codota at the time.

**Adam Stacoviak:** So the chasm between research and real-world, so to speak - is that quite distant then? Because I guess with the researchers sort of thinking what's so far in the future...?

**Eran Yahav:** They're just trying to mix different target functions, in a sense; like, when you're doing research, you're trying to do innovative stuff, and stuff that has interesting core ideas, even if the ability to realize them lies like 10 years, 20 years down the road, or never ever; you just want this core idea, clean idea being generated. So that's the target function that you're optimizing for. And in real life, real-world, what you're optimizing for is something that works, even if it's really, really boring and mundane, or even if you have to cut corners and it's not a beautiful artifact, but gets the job done, then it's much more important. So you may be working on exactly the same problem, but the fact that on one trajectory you're trying to optimize some core idea, and on the other trajectory you're trying to make it work, these imply often solutions that come from different thoughts, different kind of--

**Adam Stacoviak:** Yeah. What about program synthesis in terms of application? Is this a trend in parallel with the possibilities of AI and machine learning and training models and deploying things? Or is it a whole different animal?

**Eran Yahav:** No. So program synthesis - it is a different animal, but it has been using techniques from AI and language models to make synthesis more practical and maybe expand it to additional domains.

\[08:03\] So the idea of program synthesis is super-old. The original papers are like from the '50s, the idea of being able to synthesize something. But with the technology that came from ML and language models and things like that, you could do much more practical stuff in program synthesis. But program synthesis is a general concept. It's a beautiful thing. I can geek out forever on program synthesis... \[laughs\]

**Adam Stacoviak:** Yeah, for sure.

**Jerod Santo:** So I'm trying to see if I'm following you... So program synthesis is an idea or a concept of which deep learning models can be used in order to accomplish it. It's like they are parts of a larger concept. Is that what you're saying?

**Eran Yahav:** Yeah, that's correct. The problem of program synthesis, which is I give you some sort of specification or intent and you generate the program for me, guaranteed that it does what I asked it to do - this is an ages-old problem. The ability to solve it for realistic payloads is a thing of recent years, and it is really due to the convergence of several kind of trends. One of them is the availability of training data, like all high-quality, open source code that you can train on. That's one ingredient that you need. The second ingredient is the maturity of program analysis techniques, static program analysis techniques, the ability to extract some essence from this text, from the bunch of code. And the third thing is the maturity of ML models and availability of really powerful ML techniques. And the fourth thing is just computational power. All these things require massive computational power, so just the thing that you couldn't get a decade ago.

**Adam Stacoviak:** This is like high-performance computing power, or is that the kind of machine to run this kind of stuff on?

**Eran Yahav:** It's just like, today it's clusters of GPUs or PPUs that you can get on Amazon, GCP, Azure. It's a commodity these days.

**Adam Stacoviak:** Gotcha. I saw somebody recently ask their employees on Twitter, they said, "Hey, here's another Christmas present. Do you want a beefy Linux laptop, or would you rather like a phenomenal cloud dev environment?" They're like, "I want a phenomenal dev environment on the cloud" kind of thing. "I want somewhere I could run my stuff with extreme power, rather than an extremely powerful laptop."

**Eran Yahav:** Yeah. I like both.

**Jerod Santo:** Yeah. Why not..?

**Adam Stacoviak:** "Yeah, can I have both, please?"

**Jerod Santo:** "Yeah. I'll take both, please."

**Adam Stacoviak:** Wasn't either-or. Would you say that art that is artificially generated - I don't know how to describe that, but art in the AI space, like how you see that AI-generated art... Is that a version of program synthesis? Because you say "Here's an intent", and you've got some models, and then here's this artifact... It may not be a program, but is that a variation?

**Jerod Santo:** Art synthesis.

**Adam Stacoviak:** Yeah.

**Eran Yahav:** It is a synthesis. It's art synthesis, as you said. It's not program synthesis. It's interesting, because it involves the same act of curation that you get with a lot of program synthesis that the machine generates something for you, and now you have to look at the code that has been generated and say, "Hey, is this what I really wanted?" And with art, this kind of judgment is easier... Like, "Is this pretty, or is this not pretty", right?

**Adam Stacoviak:** Very subjective.

**Eran Yahav:** It's much easier to do than to get 100 lines of code generated for you and say, "Oh, yeah, I'm sure that this actually connects to Kafka, gets a record, puts them in Mongo, and then sends the email through Twilio", or whatever, which is, I think, my much harder to do.

**Jerod Santo:** It all seems very hard. I agree, I think program synthesis sounds a lot harder. And we're getting to a point now where we have-- you can talk about where Tabnine is today, and maybe where it's headed, but there's so many avenues we can go down with this conversation. I guess where we should start is, when you had that idea and you were showing your co-founder in that coffee shop, what exactly were you showing him that excited you? And then how close is Tabnine -- if you describe exactly what it is today as a marketable piece of software or a tool, how far is that from what you showed him, or how far have you diverged since then?

**Eran Yahav:** \[12:19\] Yeah. So I'll start by saying what Tabnine does, just so we have context. So what Tabnine does is it's an AI assistant that connects to your IDE and generates code from you based on the context in which you're operating. So a massive part or challenge in instances, in generating code is figuring out the intent - what is it that you'd like the machine to generate for you. So if you ask me to start writing specs of what is it that you want me to generate, that you want the machine to generate, this is never going to work, because writing the spec is going to be as hard or harder than writing the code, in many cases. And so the magic of Tabnine is that you don't need to write any spec. It contextualizes on what you currently have in the editor, in your dev environment, on your machine, in your project, and kind of predicts what is the next thing that you're going to write, and write it for you.

So in a sense, if you're familiar with Google Smart Compose, Gmail Smart Compose, it's like Smart Compose for code; it generates the next thing for you, you just have to tab through and accept them. That's kind of what Tabnine does. I can talk, again, forever on the challenges of what that is, and I think we can go down that route later. But just going back to the coffee shop...

**Jerod Santo:** Yeah. Is that what you showed him?

**Eran Yahav:** Absolutely not. Not even close. \[laughter\] I think it's totally unrecognizable. Some of the core technology is still there, but it is utilized in completely different ways. So what I showed him back in the day was being able to take a huge codebase, train on the codebase and generate a model that if you give him a small prompt of a part of a program, it gives you a larger program that contains that piece. And so it's like a super-sophisticated code search based on ML models. That's what it was at the time. So it could be utilized to do a similar task to what Tabnine is doing today, which is kind of I give you the first three lines of the program, you give the name of the next three lines; but it wasn't even close, again.

It's funny how these things evolve, because a lot of challenges-- the bottleneck for a lot of these processes is actually the human, which is surprising, right? So you have this very tight loop of human and machine who are writing a program together. This is what's going on in Tabnine and in other synthesis systems. And the limiting factor is the human, because the human in this tight loop has to say, "Oh, yeah, that's what I want. Oh, yeah, that's what I want. Oh, yeah, that's what I want." And only the human knows the intent. And so the machine can generate this massive map of what could be possible futures, and the developer has to navigate through these maps and say, "Yeah, that's what I want." And it's very tricky to get the granularity of that interaction right... Like how much code should I generate?

**Jerod Santo:** Right. Well, if you think about the end-game of program synthesis, you kind of remove what now is what a developer is, is a person who takes human intent and turns it into something that the machine can execute. There's a lot to that as well. But if you think of the end game, perhaps -- this is what I would think it is; maybe you have a different idea of where it could potentially go... You know, I used to be a contract developer... I'd have people come to me and say, " I want Facebook, but for dogs", or whatever. That's their spec. That's their intent. And between that and a working product is the world, right? And granularity, and abstractions, and drilling down... And at what level of abstraction can this synthesis get to? Right now, it's at three lines of code, or down in a function. But is the end game for synthesis to go higher and higher level, to where I can describe-- maybe I'm writing a user story, and that's all I have to write? What do you think it is? Where could this potentially go?

**Eran Yahav:** \[16:23\] I don't think so, because a lot of programming is actually discovering the spec. I would say that programming is actually mostly discovering the spec.

**Jerod Santo:** Yeah, because you don't actually know what you want, right?

**Eran Yahav:** You don't know what you want until you wrote it, and you've seen what it does, and say, "Oh, no, that's totally not what I wanted here."

**Jerod Santo:** Exactly.

**Eran Yahav:** And this is also why all this discussion of AI replacing programmers and all these things is like -- that's not going to happen exactly, because the hard part is discovering the spec, and the code is the spec, and so this is your real job. Your real job is not knowing the syntax of how to do a certain thing in Python. And this is exactly what Tabnine is trying to help you with, kind of like remove the syntactic barriers, make this foreign language easier to speak for you, so you don't have to get bogged down on the syntactic details of how exactly to read the file line by line in Python, something that you've done a million times before. And if I show you the code, you know that that's what you want, right? That's the typical use case of Tabnine, it's like, I tab through and I say, "Oh, Tabnine guesses that the next thing that I want to do is read a file line by line in Python." It presents the code to me in the editor, and I just tab through, I say, "Yeah, that's exactly what I want. I just don't want to write it again. I've written it a thousand times." I get it out of the way. This is not the part that is interesting. And it relieves me from this mundane stuff, and lets me focus on really discovering the spec, doing the interesting parts.

**Jerod Santo:** Or what's even more empowering is I know what I want to do, but I'm not quite sure how to do it, and it can show me, "Here's one way you can do it." Okay. Maybe I'm not sure if that's the best way, but I'll use it for now and I'll try it, and maybe I'll find out later there's a better way of writing it. But at least it's empowering me right now.

**Adam Stacoviak:** You said too that you're not sure what works well. Is there a feedback loop, at least in Tabnine, where you present the user or the developer with the options, so to speak? I start to write this function and it auto-completes it for me... Is there a way you can step through the various options available?

**Eran Yahav:** Yeah.

**Adam Stacoviak:** What's that feedback loop for you to know like, "Oh, was a good--" So you can retrain yourself, "Okay, this was a positive code sample to share with that user. They used it and it worked out."

**Eran Yahav:** Yeah. There is a feedback loop. Right now, for privacy reasons, it mostly remains on your machine. It doesn't go to a central model. So Tabnine is -- we always joke that both Dror and I are developers, so it's kind of a developer company, led by developers... And so it's typical for American companies to have values or something, all these fancy things that developers typically hate, and we hate them as well... So we only have really one value in Tabnine, which is loyalty to do the developer. So we are super-transparent about runs where your code never leaves your machine unless you opt in for it to leave your machine, and stuff like that. We're super careful about that, because we are developers and we understand the sensitivity around that.

So all the feedback loop that you asked about happens locally, unless you opt-in for it to happen on the cloud. And it happens locally, unless you opt-in for it to happen on your team. And everything is very carefully designed to keep the loyalty to the developer.

**Adam Stacoviak:** \[19:46\] Mm-hm. On your privacy section of your site, you talk about the custody of your code. You say that Tabnine never stores or shares any of your code. And so you give that choice to the end-user. I had a conversation with the CEO of Sourcegraph, and early on in their career they had-- I guess, career in terms of product, not so much career in terms of individual... But what they had initially a challenge was gaining the trust. So you may have the best possible technological solution, the best product that you can actually achieve, what the user wants, but gaining that trust is hard. And maybe I'm jumping ahead a bit, but maybe let's earmark that, or answer now if you want to, but I'm imagining that's probably the challenge, is gaining the trust of people to-- you can say you have that loyalty, but you have to showcase it. You have to show up and do it, and gaining that trust to get people to use Tabnine is potentially half the battle.

**Eran Yahav:** Yeah. I think people trust Tabnine. I think we gained this trust really early in the process, because we committed to running on local host, unless you opt-in for something else, and it's easy to see that this is what's happening. And so Tabnine today is used by millions of people in their IDE daily, and so I think it's very popular. I can talk a lot about why I think it gained such popularity, and also why people like it. Let me just say one thing about that. I think, at least from my conversations with people, one of the things that you like is the variable reward. You don't know, because you're working with an AI system that is not deterministic, you don't know what is that you're going to get from Tabnine. And sometimes it's magical, and sometimes it's magical in a bad way, like "What the hell just happened?" And because of this variable reward, it becomes very engaging. You're always curious what's going to happen next. And what you find out, because this is for developers, and developers like advanced stuff, they like to geek out with the edge of technology, they are actually rooting for Tabnine to succeed, which is unheard of for this kind of product. You see people and it's like, "Oh, yes, I'm so happy. It predicted a thing that I wanted it to predict. I'm happy for both of us."

**Jerod Santo:** Haah! Cheering it on almost.

**Eran Yahav:** Yeah, exactly. Yeah. And you see people sharing on Twitter, like "Here's some prediction that I got", and I find it cute.

**Break:** \[22:33\] to \[25:05\]

**Adam Stacoviak:** So how long have you been working on this?

**Eran Yahav:** I think, personally, I have been working on this probably for more than a decade now, around this area. But Dror and I, I think we started around 2014. It was just us. We played with ideas for a couple of years until we felt that it has some value, and then we went to get funding. So that was probably 2016-2017 timeline. And at the time it was called Codota, which is a great name in Hebrew maybe, but an awful name for all other intents and purposes. And in 2019 when we acquired a company called Tabnine, we actually changed the name to be Tabnine, which I think is a huge improvement of Codota. So that's the timeline for us.

**Jerod Santo:** Yes. Good name, solid name. And so you've been working on this for a very long time... I'm curious how you felt... So we haven't mentioned GitHub Copilot or OpenAI Codex yet, but the 800-pound gorilla launched and made a big splash when they announced GitHub Copilot. GitHub, of course, the repository for most open source code in the world... And so a huge splash went out, and I'm wondering how you felt when that happened, and I'm sure you have reactions since then, or positioning, but... Did you feel validated? Did you feel offended? Were you like, "Oh, great"? What were you feeling?

**Eran Yahav:** No, definitely not offended. Definitely more on the validated side. When we started, people were like, "You guys are crazy. This is never going to work. And if it's going to work, nobody's going to use it." So it's like, "It's not even a category. Nobody cares. There is auto-complete in Editor. We don't understand why you need another auto-complete." It's like it doesn't parse to people. And so trying to educate and tell the world about AI-assisted software development being a thing is a huge hurdle, and definitely, Copilot is validating this domain. I think the important thing is that AI-assisted development is here to stay, and the world really needs an independent platform for doing that, other than Microsoft.

Microsoft is great... They can have Copilot, and it's awesome; I think the product is very nice, and we like it a lot. We see a lot of the evolution that we've gone through, they're going through, obviously much faster than what we could do at the time. But it's very interesting to see how it evolves. And so there's definitely going to be, as you said, the 800-pound gorilla of Microsoft AI-assisted development in the room, but there's always going to be also some independent platform such as Tabnine in the room. And we're happy that at this point it's us and Microsoft. We're actually proud. I think we're actually -- at least in terms of users, we are definitely the leader in this category. And so we are very proud to be Copilot and Tabnine. It's actually a great sentence to say, "Microsoft and Tabnine." Yeah, great. So it's actually validation above all.

**Adam Stacoviak:** \[28:18\] Yeah. I try to empathize. I hear what you say, but then, again, I don't know what's behind the scenes. I don't know what your user base is like, I don't know what your company growth is like... I know that you're at a series A right now, probably approaching a series B, or at least do for one considering. And I think you might make that series B a lot easier, considering you have a large gorilla in the room... Because you could be a large gorilla too, because you've been in the space for so long, and you all have such domain knowledge. I would definitely bet on your horse in the race. So I would imagine that your valuation and fundraising possibilities just went up, considering -- actually, having said all that, I think I'd be a lot more excited considering that, because now your future is probably a lot more brighter, considering. Whereas before you were fighting the uphill battle. You had to keep proving what you could do. And obviously, developers are probably like, "Yes, Tabnine's awesome. We want to use it." But everyone else who doesn't get it is probably like, "What?"

**Jerod Santo:** "Why do I need this?"

**Adam Stacoviak:** Yeah, "Why do I need this? What is this?"

**Eran Yahav:** Yeah, definitely. A lot of the market education, let's call it, is something that Microsoft can do much more efficiently than us, and we're happy to benefit from that, just as GitLab benefited back in the day exactly from that kind of like--

**Jerod Santo:** Yeah. So y'all are much more optimistic than I am. So I go straight to Shark Tank and Mr. Wonderful, and I just think to myself, "What's stopping Microsoft from squashing you like the cockroach that you are?" No offense. But that's Mr. Wonderful--

**Adam Stacoviak:** \[laughter\] He's quoting Mr. Wonderful directly.

**Jerod Santo:** That's exactly what he would ask you, right? He'd say, "Why don't they just squash you like the cockroach that you are?" And so I get that you have independence and you have an existing customer base, and it's great... And you also probably don't have a massive payroll like they do. You're not at the scale they are, you're not an 800-pound gorilla, so don't have to have 800-pound gorilla revenue. But what do you do against that size of a beast? How do you differentiate? How do you stand apart? How do you stay alive?

**Eran Yahav:** Yeah. It's a very good question. Again, the reality is closer to what Adam said, the opportunities being opened up and the category being validated. These are transformative times for Tabnine, actually, in a positive way. And our approach is just very different than Copilot at this point. We are technically creating models that are tailored for you and your team. So we allow you to train models on your datasets, on your codebase, and give you specialized solutions that are aware of your team's vocabulary, so to speak. So imagine that I have this huge model that has been trained on the universe, but it knows nothing about Eran's code, right? It just is not aware of what I'm doing in my company, my team, and the practices that I'm using locally. And this is exactly what Tabnine lets me do. It lets me connect to my repo, train my own models, and these models are tailored for my setting and for my practices, basically. And this is the differentiation that Tabnine has right now. And obviously, we're building much more functionality in other facets of the development lifecycle to complete the picture.

So Tabnine is really-- it's not a code completion tool. It is the single source of truth for how to write code in your organization. And it's an active single source of truth in that it learns from your code, and then it helps all the developers on your team align and be better and write better code for your particular setting. And so that's what Tabnine does.

**Adam Stacoviak:** But don't say too much about what you're doing, because I can imagine someone from GitHub listening to this thinking, "Okay, this is what we're going to do next." \[laughter\] I'm kidding. I'm kidding. I mean, you have to-- you can't keep your secrets, right? You have to put your stuff out there. I'm just kidding around mostly.

**Eran Yahav:** \[32:04\] Yeah, putting yourself out there. And there are plenty smart people, I'm sure they don't need us to figure out...

**Adam Stacoviak:** Maybe they do.

**Eran Yahav:** ...potential next steps right then. So you never know.

**Adam Stacoviak:** You never know. Well, I think the couple downsides, I would say, to Copilot-- having not used it either. I've seen many people talk about it. And Jerod, I think you said you had some anecdotes to share... I think that the thing that Copilot-- where it's at is that it's GitHub, one, it's inside of Visual Studio Code... So there's some downsides there, where it's sort of like in its box... And I know that even the same thing we had with the conversation with Cory Wilkerson at Codespaces, is that they have bigger plans to support beyond VS Code, that this is their starting point. I get that. So maybe at some point, they will have the differentiation that you currently have, but--

**Jerod Santo:** Copilot, I think, is available in Vim now, according to GitHub Universe, but-

**Eran Yahav:** Yeah.

**Adam Stacoviak:** Oh, is it?

**Eran Yahav:** Yeah, yeah. It's going to be available on more platforms, I'm sure. Yeah.

**Adam Stacoviak:** And that might just be enough.

**Jerod Santo:** Yeah. I mean, I think that VS Code is another advantage, because they have built-in distribution, right? So it's like Slack versus Microsoft Teams. "Why are all these companies on Microsoft Teams when Slack is clearly the market leader in all this?" And it's like, "Well, because it just comes for free as part of this other thing that we have." And VS Code is kind of a de facto installation engine, whereas Tabnine, you have to go get it. I mean, and you all are available everywhere, which is awesome. All the common editors, all the IDEs, it seems like, for the most part... You're available there, but you do have to go and want it and install it and go from there. Whereas just having it bundled.. .It's the old Microsoft bundling thing; I mean, it's going to be a force, I think. But it's not like Slack is struggling. They're doing alright. I mean, they got bought by Salesforce for whatever reason, but...

**Adam Stacoviak:** Slack's killing it.

**Jerod Santo:** People still use Slack, and I'm sure people are still going to use Tabnine.

**Adam Stacoviak:** Yeah.

**Jerod Santo:** There's probably a market for both. I think that we'll see that play out. I don't think you have to choose, but I do think there's an advantage, for sure.

**Eran Yahav:** I'm sure that you're actually going to see more competitors in this space. It's not going to remain Microsoft and Tabnine forever, right? Now that the category is established, I'm sure that more people would like a slice of that pie, right?

**Adam Stacoviak:** Let's say this then... So you started in 2014, and then in 2016, you got funding. You're at series A right now, probably approaching series B. Considering just the timeline, I'm imagining, in the last year, you've got something happening in that space. You can tease it if you want to, but whatever. How do you stay financially competitive? How do you win customers? How are you working in that space? How have you evolved, and how are you planning for this future? Because you're going to have more competitors. You already have a big gorilla in the room, and you can assume more coming. How are you preparing for that?

**Eran Yahav:** Sure. Tabnine, again, is a developer-first company, and so our growth and our also financial growth is based on bottom-up motions. So we basically have developers love us, they onboard their teams, they train their own models on their code, and get even more value from Tabnine, and stay with Tabnine, and bring more teams from the organization, until there's a critical mass. And then we, basically, expand to the entire, let's say, department in the org. So that's the natural motion of Tabnine. I believe this is the way it's going to be for a while now. That's the natural order of things.

**Adam Stacoviak:** So you make developers happy, and they continue to showcase how it's useful to them, their team, other teams see it get adopted...

**Eran Yahav:** Yeah. That's the dynamics that we're seeing, and it's all based on the developer love.

**Adam Stacoviak:** Do you have a lot of outreach to those developing teams? Do you have team managers or people inside Tabnine who maintain relationships?

**Eran Yahav:** No. None. Almost none.

**Adam Stacoviak:** Almost none.

**Eran Yahav:** Yeah. Tabnine is a developer-centric almost to a fault, in a sense. We have zero salespeople. We have almost no top-down sales at all, and everything is happening organically, from the developers up.

**Adam Stacoviak:** Is that right?

**Eran Yahav:** \[36:06\] Yeah. We have some community on Discord, and the usual thing that you have around community, but it's mostly, actually, a support channel, above all.

**Jerod Santo:** Yeah. That's great.

**Adam Stacoviak:** What's growth been like then in the last year? So let's say Copilot came out roughly a year ago, nine months ago? What's the timeframe? I don't even know . Time is weird even -- especially these days.

**Eran Yahav:** Yeah. It's been trickling to more and more users; growth has been very, very strong. Very good.

**Adam Stacoviak:** You're happy then. You're smiling, you're not frowning.

**Eran Yahav:** No, I'm definitely not frowning. And actually, as this thing goes - you know, Copilot creates awareness... So even if it takes some piece of the pie, the overall size of the pie increases, and so Tabnine is actually happy.

**Jerod Santo:** So one of the major differentiators comes down to really the ability to synthesize, or the ability to generate the code and have it be useful more often than not, or more often than my shallow experience with Copilot, or whatever... Because developers are kind of fickle, and we can have one bad generation and you're like, "Ah, heck with this tool. I'm switching to Tabnine." But then you show up and you've got to have some good generators. So it seems like the models at play and the data are going to be important to differentiation. Also, the way that you go about deploying and everything is important as well. So the free Tabnine that you can just install and use is based on a public dataset, so it has the open source thing that Copilot also uses, which is OpenAI's Codex. That's their thing. You have your own thing. They're both trained on data sets.

**Eran Yahav:** Correct.

**Jerod Santo:** How do those data sets differ? Do you know how they're doing it?

**Eran Yahav:** Yeah, I think I have a pretty good idea. So I think maybe one of the differences is that Tabnine has only been trained on source code with the permissive open source licenses. When we started, we were not sure what is going to be the legal implications of training on code that is GPL or not... And we said, "Let's just not worry about that at all. Let's exclude anything that is not permissive open source license."

**Jerod Santo:** Smart,

**Eran Yahav:** I don't want to worry about the ethical implications or the legal implications of training on GPL. And let's keep it clean. I think, in retrospect, that has been a pretty solid decision.

**Adam Stacoviak:** I agree.

**Eran Yahav:** I'm sure that a lot of people don't care, but some people do. And as developers, I guess we do.

**Adam Stacoviak:** Yeah. So those licenses are MIT, Apache II, BSD 2-Clause, and BSD-3-Clause. So those are the four licenses, the permissive open source public licenses that you leverage against in terms of where you can source code from.

**Eran Yahav:** Yeah, that's right. Again, the beautiful thing about Tabnine is that you're always in control. If you're a developer and you feel that you need a model that does something else, you want to train your own model for your own use, using some other datasets, then we facilitate that. You can do that. You can train on your project, you can train on some other code and build your own model. So again, you are in control. You control what is the dataset, you control where inference runs - on your machine, in the cloud, in your cloud, in public cloud, wherever... So you control all the mechanics, from the source, up to the inference, in Tabnine.

**Adam Stacoviak:** So let's say I got myself a copy of-- somehow the Windows source code was leaked, and I happen to have it. Could I train at my own will? Obviously, I'm breaking laws, and all these things if I want to... But is it my choice to do that? Is that what you're saying? Like, if I have the source code...

**Eran Yahav:** Yeah. Yeah. If you have the source code, you can train. I wouldn't know that this is the Windows source code, right? We don't know what our customers--

**Adam Stacoviak:** Of course not. I'm just saying... \[laughs\]

**Eran Yahav:** Yeah. We don't know what our customers are training on. So you could, in effect, do that.

**Adam Stacoviak:** \[39:58\] I was trying to go as far as I could of potentially offending, but obviously, as a hypothetical, not a realization. But if I had a copy of source code that was not mine - whatever. I could train on any code I have, essentially.

**Eran Yahav:** Yeah, you could, and we have no way of knowing what you're training on, and we actually don't want to know. But the beautiful thing is that, assuming that you've trained on something of value to you and obtained it legally, now the model is being able to generate code that is following those kind of practices that you've seen in that codebase. And that's super important, again, because you are getting a model that is specialized for your ecosystem, for your own-- the way and the kind of the technology that you work in.

**Jerod Santo:** So I guess one advantage of being David in the David and Goliath story - besides the fact that David wins, so you've got that going for you... But these things will probably play out in courts of law, at some point. I mean, you're avoiding the whole GPL thing entirely by excluding it... But, I mean, if anyone's going to get sued, it's going to be Microsoft, I think, and GitHub. And so you can at least sit on the sideline and see what happens in court and decide what you do.

**Eran Yahav:** I don't think so. I don't think there are going to be any lawsuits here. I don't know. I'm not a lawyer, so I have absolutely zero legal training. I don't know that this is something that David cares about deeply. David cares about generating value to developers in a way that respects developers. And this is what David is doing in this story.

**Jerod Santo:** Right. Well, I guess my point wasn't them getting sued. My point is if it plays out so that it's totally fine to use GPL code in your model -- I mean, you guys are limiting quite a bit the amount of data that you're using.

**Eran Yahav:** Correct.

**Jerod Santo:** So you would think Joe Blow over here watching the sidelines think, "I bet OpenAI's Codex is better out of the box than Tabnine, because they have way more data." Now, once you can start customizing it and training your own models and stuff, maybe not. But that first user experience... And maybe that's not the case.

**Eran Yahav:** The universal model -- again, there are so many trade-offs that play here: the size of the model, where inference runs, whether it's Tabnine cloud or Tabnine local... So I wouldn't go into the breakdown of this whole thing, but let me just say, there's enough data that is with clear permissive open source license.

**Jerod Santo:** Sure, but like you're missing the Linux kernel. There's so much knowledge inside the Linux kernel. Wouldn't you want to be able to use that?

**Eran Yahav:** I would like to be able to use it, but I restrict myself, because the trade-off, I think, is still that I have sufficient amounts of code with the permissive licenses.

**Jerod Santo:** So even if it came to it, it was no big deal. All open source code, all licenses that are open source, you would leave it with the permissive...?

**Eran Yahav:** At this point, I think that's the right choice. If down the road we are convinced that we're not infringing on people's work in a way that offends them, in a sense, that is unethical to them, we may change that decision. It also depends on the granularity of the predictions that you're making. If what you're predicting is a line of code, then I think this is less of an issue... Because I trained a model, it predicts like 10 words now. Is there really a meaning that these 10 words were trained on the Linux kernel? I'm not sure. But if I give you a snippet of 10 lines that comes verbatim from the Linux kernel, then I think it's easy to make the case that this is not respecting the license of what you intended when you licensed your code in a certain way, right? We're really not focused on the legal, ethical space. I think you can spend your life just pondering on these questions. We're focused on getting value and doing that cleanly.

Tabnine works on line completions and snippet completions, so it could work in both levels. We find that most developers actually get most of the value from the shorter completions, and the reason is exactly the tight loop that I mentioned earlier. The developer wants to say, "Tab through, tab through. Yeah, accept, accept, accept." And they want to be able to make the snap judgment that what Tabnine gave them is actually what they meant.

\[44:18\] And so when you give me a line as a developer, it's easy for me to make the snap judgment, "Yeah, that's the line I wanted." If you give me 30 lines, that's like, "Oh wait, you just made me read a bunch of code that was written by a machine, and can have subtle bugs somewhere.'' And now, as a developer, you made me do the things that I hate the most, which is read other people's code, right? There is definitely a question of the human interaction, granularity, the granularity of completion that is right for the human consumption.

**Jerod Santo:** So let's say I write a function name... I'm in JavaScript and I write function, "Upload to S3", and I hit tab. Tabnine's going to generate the code that gets that done, or it's going to give me, `var bucket = someBucket` Is it just going to give me the next line?

**Eran Yahav:** Hopefully, it's going to give you `const`, I guess, and not `var` or `let` or whatever

**Jerod Santo:** Sorry, I'm old school still. I'm old school. \[laughter\]

**Adam Stacoviak:** He's linting you on the fly here, Jerod. \[laughter\]

**Jerod Santo:** I'm pseudo-coding over here... Come on, help me out.

**Eran Yahav:** Yeah. So Tabnine will likely -- even if it knows the entire snippet, it would unroll it for you line by line. So even if internally the model has predicted the entire snippet, it would, in fact, unroll it for you line by line, because of two reasons. One, it gives you more control, and basically, you can choose. It gives you more than one option every line. And there are subtleties in these snippets, right? Like, connect to S3 bucket - wait, there's a timeout, there's a default. There's this, there's that. There are many nuances to this snippet, that if you're just going to accept it as a whole, you may be missing out on something.

And so there is a sense of walking together with you through the snippet, line by line saying, "Oh, yeah, yeah, yeah, yeah... No, I want the timeout. No, I want some other default value. Oh, yes, do some error handling if you don't find it." And so it's actually this guided -- let's call it a guided walkthrough of the snippet that is valuable to you as a developer. You actually learn from it. You'll become better than just copy-pasting an entire snippet.

**Adam Stacoviak:** Yeah. This isn't Stack Overflow generation. I like that. And you can actually see this in action at tabnine.com, I believe it's /pro. And I'm not trying to advertise anybody to sign up, but you can try it if you want. There's a great video there that showcases Tabnine free versus Tabnine Pro. And you can kind of see this in real-time. It begins with a to-do comment, which as any developer, you might often put forward slash, forward slash, TODL, all caps, and you start writing out what you might want to do, and it goes through this entire-- essentially, what you just said there, Jerod, which is... Not in this case. The use case wasn't the S3 bucket, but it was exporting defaults and setting consts and stuff like that, through - I believe it's JavaScript and HTML, just by looking at the codes sample... But it's walking you through all the process and it's showing you each little piece, the function. Is it user panel? Is it .react element. All those good, different things. It's going through each little piece, versus spewing code at you ad nauseam.

It's a little bit by a little bit, as you might do on your own. And that's interesting, because it does help you learn things. I might learn new things about a different function I haven't used before, because if this model's trained on my codebase - well, I might write a new page or new something in our application that Jerod has done several times, and maybe I'm new to that piece, and I can leverage all of his experience by way of machine learning through our own application. I can step through those things, and I'm not necessarily cheating, I'm leveraging our current people power, which is Jerod's work, on our codebase, and I can leverage that through tab completion with Tabnine.

\[48:07\] I think it's very, very interesting. I think this is definitely interesting in comparison to just open source at large, training on an open source at large model, and giving me what the consensus has chosen as good... Or bad, potentially, because there's buggy code that gets generated, like you said. But it lets me leverage our own codebase, which I don't think Copilot is doing currently. And maybe it's in their future, but it's not there now. I think that's a very differentiating thing, is to learn on my own codebase and base my tab completion on that.

**Eran Yahav:** You asked earlier about trust in Tabnine, and we are seeing people trust us with code all the time. So a huge numbers of teams and companies are basically sharing the code with Tabnine to train models on. Obviously, we don't store this code anywhere. We don't want to. We train the model and the code goes away. But they are trusting us with this code.

**Break:** \[49:03\] to \[52:22\]

**Jerod Santo:** Eran, do you think this level of granularity is ideal for AI assistant, or do you think it's ideal for now? Is there a world in which I'm not writing my functions anymore? Or is this the best way to interact with this kind of a system?

**Eran Yahav:** I think for idiomatic things, there is a world in which you will not write your functions anymore; but it'd be very idiomatic. In a sense, this is already happening with libraries, right? You don't write the user library instead of writing the function, because what the library has encapsulated is so repeatable and so common that now every language or library has a sort function, because everybody knows what sort does. You don't have to redefine it. So you never write the code for quicksort anymore. You don't need synthesis for that. So once something becomes repeatable enough, it just falls into the framework, it falls under the hood, basically. And so these functions are already not written.

What is still being written and maybe can be avoided in the future is simple compositions of these functions that are also semi-repeatable. This is what Tabnine, in effect, is doing right now. It is generating for you these ad hoc compositions that we're doing, like read from Kafka, call to Twilio, whatever. We're all connecting APIs all day, right? And so this is what Tabnine allows you to do to connect this. But to your question, unless it's very idiomatic, it's very hard to generate the entire function body, because again, you don't know what is the intent. The function name is not sufficient for capturing all the nuances. So if you're working in a special domain, maybe there are defaults that the synthesizer can understand to give the scaffolding of the function. But in general coding, there's just not enough information in the function name. If you have maybe a docstring or some documentation in English that explains what the function is supposed to do, that may be helpful in giving you the first shot of the function... But you will still have to refine it, I think, again, because of all the nuances. So even if I give you the code, you'll probably have to edit it a little bit to bring it to the final form.

Again, remember that what we're all doing is specification discovery by iterative refinement, right? So maybe you can get the synthesizer, you can get Tabnine to generate the first chop of the function, but then you'll have to refine it on your own. And then there's really a question which is human psychology: what is easier for you - generating it line by line, following some line of thought? Or getting an artifact that is 30 lines and trying to refactor it to what was your original intent? And this is really -- as I said, the bottleneck here is the human. And it's interesting... I don't know.

One of the things that you see with Tabnine, for experienced users of Tabnine - they start to change how they work, to get even more from the tool. So they get a feel of what Tabnine does, and then, for example, they start writing the building-block functions before they compose them, and then Tabnine is aware of them and can compose them, right? So the order in which you build things, whether it's bottom-up or top-down, as you're writing your program, matters for Tabnine to contextualize on. Again, I'm happy to-- I'm not sure that this is clear. It's clear in my head, but it's maybe too abstract.

**Jerod Santo:** I followed you.

**Adam Stacoviak:** \[56:03\] Can we talk about how the developer interacts with-- I would call it probing Tabnine for something? Maybe one of the ways you do that is by writing code, and it starts to think about what you're going to write. Or as you said, writing out a scaffolding. So it's aware of the whole entire current file you're working in and what maybe your intent is, because it's learning on the fly, I assume. Or maybe similar to the way you have Slack commands, you could do forward slash, and then some sort of command kind of thing where you could say, "Okay, here, I want to interface with a Kafka API." And rather than starting to write code, maybe you can command into it. I'm just thinking that's where I think we should talk more so, because that's where I think developers will begin to really get ahah. They get the idea that you can learn on open source, you can learn on your own source code etc, but how does a developer interface with Tabnine to become a better developer, probe it for information to complete on etc. I think that's the interesting part, how that works out. How does that interface work now and potentially in the future, with interfacing with Tabnine?

**Eran Yahav:** Yeah. That's super-interesting. And in fact, I always say that Tabnine is half an AI company and half a user interaction company, because half the challenge you hear is, really -- the model knows a lot. The model knows much more than you can imagine, actually. And the question is how do you expose these things without overwhelming the user? A lot of it actually quite scary. If I show you what the model knows, you'll be like, "Holy \*\*\*\* That's crazy stuff." And so the question is how do you engage with the user? How do you-- there's also an important aspect of... I'm trying to put it tactfully - an illusion of control. So even if I walk you through something that is completely deterministic in a sense, the fact that I walk you through it gives you a sense that you are still in charge, which is really important for the developer, right?

**Adam Stacoviak:** It's psychological thing, for sure. When you make your own choices, you feel more sturdy in those choices, because you were a part of making the choice.

**Eran Yahav:** Yeah, exactly. Exactly. Even if I walk you deliberately through a very deterministic kind of path, the fact that you think that you've made certain choices - it's less offensive to you as a human than just consuming code generated by the machine, right?

**Jerod Santo:** It's like holding your hand.

**Eran Yahav:** Yeah. It's very important. It is really important, and this part of the interaction model. And we tried a lot of the interaction models over the years, including ones that had larger snippets. We even had "Click something and we'll show you the five snippets that you want on the side" kind of thing on a sidebar. And we thought that this is-- when I saw that, I said, "Man, this is the most amazing thing. This is going to blow people's heads. It's amazing." And people hated it. The users hated it. And the reason that they hated it is it was not in the flow. It required me to look at another window and look through five options, and bring the five options and try to understand the subtle differences between these pieces of code. And as a user, rather than accelerating me, it was extra work for me. I came for the tool to get help, and the tool is sending me to do additional work, additional vetting through snippets. And so people really hated that.

**Adam Stacoviak:** What you're saying there is cognitive load. If your model has so much information-- I'm actually listening to this book right now - and I say listening, because I listen to a lot of books instead of reading - and it's pretty interesting... It's called "We Are Legion", and in parentheses, "We Are Bob." I don't know if you've seen this, but it's a series. I won't give the full plot away, but essentially - how can I not give it away? - it just basically talks about AI. Bob is AI, long-term. I don't want to ruin the story for anybody, but it's pretty interesting how I'm listening to this book about AI... And Bob used to be a human, cryogenic, died, became AI. That's the basic premise of the book. I'm not plot-killing it by any means.

\[01:00:13.29\] So the book really now is like the narrator is Bob, and Bob is AI, and Bob makes more Bobs. So Bob isn't by himself. And as Bob clones himself, he thinks -- because he's still human as AI, he has human tendencies, he thinks, "If I clone myself - well, now I'm just making more Bobs." And he finds out that they're not really Bobs; they're just variations of what Bob was. And I think it's interesting, because this perspective of Bob in relation to, say, even Tabnine and AI, I think as this model knows so much, I think if the model could just have a feeling, I suppose, like, "If only I could tell the human this, their program would be better." I kind of feel like there's that tension between that UX of a developer probing Tabnine for stuff based upon intent and awareness of their codebase, and behind the scenes, Tabnine is Bob just wishing they can tell the human all they know about this model. Imagine this tension.

**Eran Yahav:** Again, I say that Tabnine is half an AI company and half a UX company because a lot of the challenges are really in getting the humans to interact with the model in a way that accelerates them and does not slow them down. And so we've found out, through experimentation over the years, that you can suggest a lot of information from the model, and even if it's totally accurate and it's great information that can help you in principle, you just flood the developer with so much information that you slow them down.

And so we've optimized Tabnine to go in the process that you're familiar with... And if you just keep on typing and ignore what Tabnine does , just ignore it, it will never break your flow, right? So we always optimize it so it does not break your flow; that it's suggesting only at certain places that we think are useful for you as a developer, that it makes suggestions of the correct length, that we think you can process and is useful to you. This is a very iterative process of optimizing the cognitive load on the human that Tabnine generates, making sure that you're actually accelerating people and not slowing them down. In a sense, it is throttling the model not to kill the human.

**Adam Stacoviak:** Yeah.

**Eran Yahav:** And so it is really like strapping a rocket to the human that has such massive force that it will just tear the human apart, and you have to throttle it to make sure that it's just-- \[laughs\]

**Adam Stacoviak:** I love all this figurative language and imagery that comes about with this.

**Eran Yahav:** No, but it does exactly that. You need to just accelerate it and control acceleration such that you make the human faster, but not destroy them in the process.

**Adam Stacoviak:** Yeah. Let's not destroy the humans.

**Eran Yahav:** Yeah. \[laughs\]

**Adam Stacoviak:** I like that you are so focused on the loyalty to developers, and that you had said that you're not trying to-- Jerod asked the question before about, okay, well Codex seems to be better because it's got more code samples and it's got more it's learned from. You're optimizing for the best algorithm that can give and help the developer, versus the best knowledge base, so to speak, that you can auto complete on or AI upon, so to speak, as a developer user. You're optimizing for the best tool, not so much the best model, based upon the best data.

**Jerod Santo:** You're not going to get him to agree to that.

**Adam Stacoviak:** Yeah.

**Eran Yahav:** I'm not going to agree to that. \[laughter\]

**Jerod Santo:** I know he is not going to agree to that.

**Eran Yahav:** Obviously not, but I think it is important to keep the user in mind and optimize for the user. It often does mean that you need the better model and the better codebase to do that. But you have to realize that the bottleneck to a lot of these processes is the human. It's important to acknowledge that.

**Adam Stacoviak:** \[01:04:11.23\] That's what I was trying to get back to, is like, you're trying to help the human be the best they can be, because they have the intent, they have the human interaction with the team, they understand where the product's going... It's their vision. The model and the AI may be able to predict what code might come next and could be helpful, but it's the human who's is driving, at least for now, is driving the decisions on the next steps and what the product should do, rather than just something like, this model knows everything, so it can do it... Well, it still needs the human. The creation is still happening because of the human's desire to go a certain direction and provide certain value to, hopefully, other humans. Maybe I'm writing code for a Roomba and it's not human directly. Maybe it's the Roomba I'm helping, and the Roomba helps the humans... So maybe it's by way of proxy, so to speak, but so to speak, we're humans helping humans.

**Eran Yahav:** That's fair, I think. Yeah.

**Jerod Santo:** So it seems like it adds another layer of complexity to what you're trying to do here. Focusing on the UX now, and less on the model... Is that your product manifests itself in like 26 places, right? I don't know how many IDE integrations you have, but the actual user experience is spread out across all these products that you don't own, and each of those products have their own idiosyncrasies, and the way people use them are different... They have their own feels... Does that exacerbate the UX problem where it's like, "Hey, how much am I going to show? And when do I show?" But then also, "How do I actually integrate with these?" Or are those simply shells that are just left alone and you're just modifying what gets sent to the shell? How does that play out for you guys in practice?

**Eran Yahav:** That's a very interesting question. So definitely, there are subtleties to different IDEs, or actually, I should say editors, that behave differently, and they do get different behavior from Tabnine. So Tabnine does behave differently in VI and in VS Code, just by the nature, as you said, of the interaction that is expected in the editor. But Tabnine -- the plugins themselves, by the way, are open source for all these IDEs in editor. So the Tabnine VS Code plugin or Vim plugin is open source. Some of them are actually community plugins for other editors, and you can write your own. They all connect to Tabnine binary inference engine that runs on your machine and can provide the completions to drive all of these IDE extensions plugins... Which, again -- the behavior of which may differ and they may be asking for different things from the underlying binary, or getting them differently. But the inference engine is shared between all of those IDEs. So definitely though, there are subtleties of the UX per particular editor.

**Jerod Santo:** So when you have an a-ha moment as a designer of this product, you and your team-- you went back to the point where it was like showing you five things on the side, and that became homework; you weren't empowering... When you decide, "You know what - we're going to change it to do this way now", do you have to go out and touch 26 - I'm just estimating based on your grid of 25 or so editor integrations - in order to roll that idea out?

**Eran Yahav:** So again, a lot of the infrastructure is shared between the IDEs, like the Sublime plugin... I use mostly Sublime. Sublime is my love choice. So the Sublime plugin itself is like 400 lines of code. Most of the heavylifting is done by the Tabnine engine, and not by the plugin.

**Jerod Santo:** I see. So the engine is shared, but it's local...

**Eran Yahav:** Yeah. You do have to touch the plugins, but it's not like massive changes. For some of the more sophisticated UIs, some of them are provided by the engine itself and not in the editor, but again, these are subtleties.

**Jerod Santo:** \[01:08:05.03\] Right. So what's the engine written in, and how do you guys roll that out? And I'm getting into the weeds here.

**Eran Yahav:** Yeah. The engine is amazing. At this point, it's like half a million lines probably of Rust, highly optimized Rust code. I think we're probably one of the biggest Rust shops in Israel, for sure. And I'm not sure that we're actually not one of the most sophisticated ones in the world in Rust, because we're doing specialized ML inference engine in Rust, and we're doing a lot of the other Tabnine infrastructure in Rust, even stuff that does not necessarily belong in Rust... But that's just the way we roll, right?

**Jerod Santo:** Yeah. \[laughter\] You must really like Rust.

**Eran Yahav:** Yeah, we do.

**Jerod Santo:** "Not the best tool for the job, but we're going to use it anyways..."

**Eran Yahav:** Once you get used to it, it's a great language, a great ecosystem. It also solves a lot of the cross-platform problems that you typically have when you run something as sophisticated as an inference engine, cross-OS, cross-architecture. And so this is great for us.

**Jerod Santo:** That is super cool. So does any of that stuff leak its way back out into the open source world at all, any of your by-products make their way out to the Rust community?

**Eran Yahav:** I don't think that we released-- at least up to this point, we have not been releasing a lot of code to open source; not by choice, just by being busy with the core thing and not cleaning things up enough to be useful to others yet, at this point. So I think that has been the limiting factor, not any strategic decision to keep things closed or otherwise. It's not useful for others at this point.

**Adam Stacoviak:** What's the size of the company currently, like engineering staff, just to give a picture?

**Eran Yahav:** So I think we're at least a number now. It's growing all the time. I think we're around 40 people now and most of it is still engineering. So that's the size. And yeah, a lot of Rust, some JavaScript, some Python on the ML pipelines... But yeah.

**Jerod Santo:** Well, we have a lot of listeners who use and love Rust. So if you are hiring - I'm not sure if you are, but this would be a great time to say that, because you probably have some interested ears.

**Eran Yahav:** Yeah, we're always hiring. We love Rust, and we've onboarded a few non-Rust people to the team... And Rust has a learning curve, which - I'm sure people can appreciate when they moved in from other languages. But again, once you get acquainted, it's amazing. So we love Rust. We are hiring. I don't know that we will hire to the core engineering team outside of Israel. That's always kind of a tension for us. But again, for the right candidates, we are always flexible.

**Jerod Santo:** Awesome. Anything else that we didn't ask you, that's on your mind and you want to make sure we touch on before we call it a show?

**Eran Yahav:** I don't know if we touched on it or not, but I think it's really important for people to understand that the AI-assisted development is here to stay. I think, for me, as someone who's been around this kind of area and a believer of AI-assisted developing for many years now, it's super exciting to see these things unfold from really hallucinations of people, like pipe dreams, into stuff that works in production and people are using every day. And I think this is just going to expand to more and more stages of the development lifecycle. Tabnine is definitely-- we started in code completion because that's kind of the high frequency -- you are with a developer all day in the IDE, and you can really get a lot of relationship and accelerate development, but we are definitely looking at other stages of the development lifecycle, injecting AI there as well and accelerating other stages. And I think this is going to really grow much further beyond what we're seeing right now. This is just the beginning of the AI-assisted development revolution. I think it's a really exciting time to work in this space.

**Adam Stacoviak:** \[01:12:17.13\] Given that -- so you have that opinion, given all your work in the field... What could developers do differently today and in the coming year or two, differently, knowing that AI-assisted development is, in your words, here to stay? What are some actions individual developers or teams could take, aside from just using it? How can development teams get prepared for this future, or changing their mindset?

**Eran Yahav:** Yeah, it's a really great question. I don't know. I think one thing to keep in mind is basically kind of the datasets, what would you train on? If you could train AI models on your code, what would it be? How do I keep at least part of the code ready to be served as training data? Because what we're seeing with customers is that it's actually quite tricky. If you go to a large enough organization and they say, "Train on my code", then there's a lot of discussion internally to say, "But wait, actually, don't train on project X, because that's some legacy thing that, God forbid, we should ever propagate that kind of knowledge anywhere. You should actually train on Eran's code if you're doing Python, and on Adam's code if you're doing Rust."

So there is a lot of subtlety in what you'd like to train on. Moving forward, I think that's going to be a really interesting space, on how people do the curation of what they would like to train on. We're already seeing early signs of that happening, like people asking us, "Can I train? Can I exclude this guy, because he joined like a month ago? Whatever he's doing, I don't want to train on." And so there are a lot of subtleties around that which I think are going to be interesting.

**Adam Stacoviak:** Basically, how do you tend to your garden of code in order to train the future code you want to write?

**Eran Yahav:** Yeah, exactly. Exactly that. Yeah.

**Adam Stacoviak:** How do you tend to your current garden of code.

**Eran Yahav:** Yeah.

**Adam Stacoviak:** Yeah. Interesting.

**Eran Yahav:** Which, in a sense, you're supposed to do anyway when you're doing like reducing technical debt, but nobody actually has time to do that.

**Adam Stacoviak:** One more reason to do so, right? One more reason.

**Eran Yahav:** Yeah, one more reason to do so. Yeah.

**Adam Stacoviak:** Well, Eran, thank you for sharing that sentiment. AI-assisted development is here to stay. You shared a brief idea on how you can begin to prepare... But Eran, thank you so much for sharing this history of the project and the company, and this future that's imminent, basically. Thank you.

**Eran Yahav:** Thank you very much, guys. Thanks for having me.

**Jerod Santo:** Lots of fun.
