**Daniel Whitenack:** Hello, this is your podcast co-host, Daniel Whitenack. I wanted to give a quick disclaimer before we jump into the content for this week... And that is that Chris and I recorded this episode a few weeks ago, prior to when we had both seen the George Floyd video, and all of the protests and calls for justice have happened in our country, and really all around the world.

The tone of this episode didn't really match what we thought would be appropriate for that particular week, so we held off on releasing the content. We also shifted focus a little bit and recorded a new episode on explainability and bias in AI, and we released that last week.

We're gonna continue to try to bring a focus on explainability and bias and fairness in AI algorithms to the podcast. We both think that that's incredibly important, especially as more governments and police forces start using things like facial recognition, in some cases. But we also want to make sure that we keep getting AI content out there, so we're gonna go ahead and release this episode.

If you have questions about anything related to AI and policing and fairness and bias and all of those things, we'd love to have a discussion with you about that. You can reach out to us any time on Twitter or on our Slack channel or on our LinkedIn page, and we'd love to have those discussions. I'd love to hear what you're thinking about our content and about AI and fairness and bias in general. So please reach out, and I hope that this episode is useful and beneficial for you.

**Intro:** \[00:01:52.15\]

**Daniel Whitenack:** Welcome to another Fully Connected episode of Practical AI, where Chris and I keep you fully-connected with everything that's happening in the AI community. We'll take some time to discuss some of the things and the latest AI news, and we'll be digging into some learning resources to help you level up your machine learning game.

I'm Daniel Whitenack, I'm a data scientist with SIL International, and I'm joined as always by my co-host, Chris Benson, who is a principal AI strategist at Lockheed Martin. How are you doing, Chris? How was the long weekend?

**Chris Benson:** I'm good, we're just coming out of Memorial Day weekend.

**Daniel Whitenack:** You got to get outside a little bit?

**Chris Benson:** I did...

**Daniel Whitenack:** Of course, socially-distanced, but outside?

**Chris Benson:** I did, and I was staying socially-distanced, and I did that despite the fact that officially Georgia was the first state to open up...

**Daniel Whitenack:** \[00:04:07.22\] Yeah, that's true... And it was something weird; it was like pool halls and tattoo parlors, or something...

**Chris Benson:** Everything about it was weird. It really, really was. You look at the things and go "Why did they choose that...?"

**Daniel Whitenack:** Yeah...

**Chris Benson:** Once upon a time pool halls, but no more. Not many a year... I don't do tattoos, at least not yet... Maybe I should.

**Daniel Whitenack:** Yeah. It's been a while on the pool hall... My advisor when I was at NCAR - after my undergrad I did a high-performance computing internship at NCAR in Boulder, and he was all into pool, and he carried his case with his pool cue around at the lab, and everything... Anyway, it's bringing back some memories.

**Chris Benson:** We have a pool table in our basement...

**Daniel Whitenack:** Oh, wow.

**Chris Benson:** Sadly, you'd think that would make us quite good. We're not.

**Daniel Whitenack:** But recreational, yeah.

**Chris Benson:** It's strictly recreational, and usually it is accompanied with plenty of lubrication in the alcoholic sense.

**Daniel Whitenack:** Gotcha.

**Chris Benson:** It's kind of like we've had a couple of drinks and we're like "Yeah, let's go get a game of pool on."

**Daniel Whitenack:** Gotcha.

**Chris Benson:** So yeah, that's what we do...

**Daniel Whitenack:** Anything else exciting over the weekend?

**Chris Benson:** I had a weird thing happen to me before we got started... You know I do all this animal rescue stuff, you know we've talked about that... And so I get a call -- I'm probably the only person you know that has a snake hotline for our local area.

**Daniel Whitenack:** Snake hotline...

**Chris Benson:** So I go and help with -- that's one of the things I do, is help out, because people are afraid of venomous snakes, and other things... And I get a weird call about a Garter snake, which is non-venomous, but it turned out to be quite a big one - about three feet, which is very large for that - that was stuck in yard netting that we keep straw down... And it was gonna die, because it was thoroughly entangled in it. So I went to rescue, without any gear... It was non-venomous, I wasn't too worried about it... But I forgot the fact that the snake would be thinking I'm a 100-foot giant, relatively speaking... So as I spent 15 minutes cutting it out of the thing it was trapped in, it constantly bit me over and over again. They have tiny little teeth, but just enough to get blood. It doesn't really hurt, but he chewed on me for 15 minutes.

So by the time I got him free, I looked like I was an axe murderer, with blood running all down my hands... It didn't hurt, but I looked at it and I was kind of going "This is just kind of a bizarre moment." So that was my Memorial Day. But here we are, talking about AI, now that I've dragged listeners through that...

**Daniel Whitenack:** Yeah, speaking of snakes - this is an AI podcast... And this is a Fully Connected episode, so we can talk about whatever is on our mind in the AI world. I know there's been a variety of things going on - some Covid things, some not-Covid things... There's been conferences, ICLR was recently around; that was interesting. We've just talked about the NVIDIA stuff in our last episode, which was interesting... My NVIDIA Xavier NX did come to my house, which I ordered; I'm excited to play with that, which I haven't yet, so maybe I'll give an update in a following episode, about my experiences with that... But what else is on your mind, what's crossed your path in the AI world?

**Chris Benson:** Well, before we even go there, on your NX thing - we should ask listeners about things that they are doing, interesting projects, at some point...

**Daniel Whitenack:** Yeah, for sure.

**Chris Benson:** ...and maybe have an episode where we talk about really interesting things people are doing. Not really work-related necessarily, but just things that are cool that they're doing and that are very creative. I would love to hear what people out there are doing.

**Daniel Whitenack:** Yeah, if you have an interesting side thing or interesting, unique project, let us know; reach out to us. We'd love to talk about it. It would give me some inspiration.

**Chris Benson:** Yeah. We're on Slack, and LinkedIn, and Twitter, and everywhere. You can reach us just about anywhere you might be.

**Daniel Whitenack:** Yeah, for sure, for sure. So what else is on your mind, Chris?

**Chris Benson:** \[00:07:54.22\] Well, I'll tell you what I was thinking about... When we knew that we were gonna start planning this, I've had something on my mind for a while, and that is that we've started to allude to it in recent episodes this year... And that is the fact that we're kind of getting to a turning point in the entire field of artificial intelligence. While we have been so very focused on deep learning for the last few years, and pretty much the entire time we've been doing this podcast, we're starting to get to a point where a lot of the big advancements seem to have come out, and we're seeing a lot of incremental stuff.

And that's not to say we won't see some big advancements continue going forward, but it's kind of becoming a little bit mature in terms of there are models of various types - CNNs, in the NLP space; we've talked about BERT, GPT-2, and everything... But we're kind of finding ourselves focusing heavily on the next version of the same model, to some degree, and the variants that are there.

**Daniel Whitenack:** Yeah. More data, more performance...

**Chris Benson:** Yeah, exactly. And I've been hearing more and more about truly advancing the state of the art on the research side. That was really brought to the forefront a few months ago at the NeurIPS Confere, where -- I always butcher his name, but Yoshua Bengio, if I'm saying it correctly, and I apologize if I'm not... But he did a keynote at the open of the conference, talking about advancing the state of the art from where we are now, to where we could go. He had one way of looking at that, and then separately in the work that I do, at my employer, we often have interactions and stuff with DARPA, and I've been really becoming very aware of the way DARPA is looking at the future. I probably should -- for those listeners who are not aware of it, I probably should really quick say what DARPA is... DARPA is the Defense Advanced Research Projects Agency, and everyone calls it DARPA for short...

**Daniel Whitenack:** It just rolls off the tongue.

**Chris Benson:** That's right, it's quite a name... But it's been around for over 60 years. It is the original organization that invented the internet, which was the very first incarnation of the internet as we know it today, was four nodes that were connected by the earliest version of the internet protocol. The idea was distributed computing across a wide area... These were all happening (the test case) in the same facility, but the idea was that it could survive a nuclear holocaust and all that by having nodes go down and still have the overall system, the network itself operating.

And so DARPA has always been incredibly cutting edge, and they're the ones that kind of lead at least the U.S. government's military interests into the future, typically on a horizon that's like 15 to 20 years. So you'll see something happen, it'll get developed over time, and eventually it gets out there. The internet is the most famous example of it.

So they are really looking forward from what we're -- and we can describe all this later, but the idea of what they call wave two that we're in now, to wave three, which is kind of the next incarnation.

And between the NeurIPS talk and DARPA's perspective, and a bunch of others that I've read from other sources, I just thought it was time for us to start thinking about what the future looks like. I know we're practical AI. In this context it may not be the practical of pulling out your PyTorch and starting to work on a model on this episode, but I thought us talking about what we think it might mean to move into the future and where we might go, and what we think of the current conversation - it might be a fun conversation to have. Are you up for it?

**Daniel Whitenack:** Yeah, definitely... And I guess I can bring the practical side in here. I will admit that with any sort of conversation about AGI, or general intelligence, or next things, I often come in with a good amount of cynicism, and I probably don't give it the respect that it's deserved in terms of the discussion... But I will say that some of this stuff that you forwarded me, and also the NeurIPS keynote, which we'll link to in our show notes - it was definitely interesting, and there were elements of what he's talking about as far as system 2 AI, that are rooted in things that are being explored and experimented with, and that sort of thing...

\[00:12:18.00\] So it's not so much like Terminator scenario, or singularity talk, but more kind of -- like you're saying, pushing beyond this sort of very limited, task-oriented models, to maybe something slightly differently, or at least things that operate in a slightly different way... So yeah, I'll try to get off of my limited imagination a little bit, to discuss things.

**Chris Benson:** \[laughs\] That's funny.

**Daniel Whitenack:** People throw around this term "AGI", so your AI to AGI, or artificial intelligence to artificial general intelligence. While you were talking, I was looking up some definitions that people have out there for AGI... Probably a lot of them are fairly ridiculous.

**Chris Benson:** Not surprising.

**Daniel Whitenack:** OpenAI always talks about pursuing artificial general intelligence... And of course, OpenAI has been criticized in various ways, but I think that they're generally having good intentions in terms of how they're going about trying to push the state of the art, and that sort of thing.

**Chris Benson:** I agree, and we need that. We need that aspiration.

**Daniel Whitenack:** Yeah, definitely. Exactly. No organization is perfect, but I think they do a really good job at trying to get people thinking about new things, and creative ways of going about things... Anyway, on their About page, they talk about artificial general intelligence, and what they mean by it is highly-autonomous systems that outperform humans at most economically valuable work. I saw other definitions about that horizon of where we're shooting towards is intelligence that is able to learn across human tasks, at human level... Which right now we're at a very sort of specific task-oriented model stage, where like I have a really good machine translation model that translates English to French, or something like that. Not in all cases, but generally it's very specific; that model is very specifically limited to that specific task, and it's not gonna do anything else. It's not gonna easily generalize to any sort of other human task other than translating English to French.

Of course, there's multilingual models, I totally realize that now, but I think in general the things that we focused on as a community have been those sort of task-oriented things. I don't know if you have a thought on AGI and what that means, but...

**Chris Benson:** I do, and just to throw a couple of other buzzwords we hear associated with these, as I answer this - the kind of narrow, modern deep learning is often called "weak AI", whereas the idea of AGI is strong. So I think both you and I have had a habit of scoffing over time a little bit at the AGI...

**Daniel Whitenack:** We'll admit it.

**Chris Benson:** Yeah, we do... And part of it comes from working in this field... And that is, as working people in artificial intelligence, the sex-appeal quickly drops away, that it appears to be from the outside... And you are grinding through working with data, and you are trying to create models, and testing them, and trying to fix it, and it's no different from any other type of engineering, essentially. You're getting work done. And I know both of us are also software developers, and there's a lot in common. It's a very bread-and-butter kind of thing, which most people don't think of AI as about, but when you're working in the field, it really is.

**Daniel Whitenack:** \[00:16:03.09\] Yeah, I tell people - it's not like you stick your laptop in a corner and sprinkle some fairy dust over it and it becomes sentient and starts learning. Essentially, what we're doing is a very dumb thing. We're doing trial and error, right?

**Chris Benson:** Absolutely.

**Daniel Whitenack:** We have a bunch of data, a bunch of examples for a specific task, and even though the models are very sophisticated in the definition, in the way that people have defined the model from input data to output data, at the end of the day it's a bunch of parameters that we're training by trial and error... In most cases, not all cases.

**Chris Benson:** I totally agree with that. And it's easy to lose sight of that, because it is a very practical, hands-on, scientific job that we're doing here, in its various forms... Historically, we look at AGI (artificial generalized intelligence) and we kind of go "Oh my gosh, robots that are talking to us the way they do in Hollywood movies." That's so far away, and we all know that, because we understand exactly what needs to happen to get there, in the sense of -- I shouldn't even say "What needs to happen..." We know that there's a lot that we don't know, I should put it that way. There's so many things that we're just not there yet on, so it looks like a very distant horizon.

But what we sometimes lose sight of as engineers working with the here and now of our toolset is that it is coming, and we are actually very rapidly moving in that direction. There may be a long road from here to there, but we are moving along that road quite rapidly. It's an evolutionary process, and there's a whole bunch of baby steps that get us from here to there. If you lose sight of the baby steps, you're like "Oh my god, that's science fiction. We're never gonna get there." But we are slowly working our way. And in the short time you and I have been doing this podcast, we're almost to 100 episodes as we're having this one (we're now into the nineties), and the field has changed dramatically in the time that you and I have been doing this show.

As we look at that and try to figure out where we're going - and we're getting a call from luminaries now about turning that page into the next things... So that was really what I wanted to start talking a little bit about on this episode - just give us a little bit of context for the future and where we would go next.

**Break:** \[00:18:20.12\]

**Daniel Whitenack:** One of the things that I enjoyed about some of the material that I was looking at when you pointed me to the NeurIPS talk, and then I followed some additional links after that, and was exploring things, is this idea of system one versus system two thinking. I think this is an idea that was developed in a book by a leading economist, "Thinking, Fast and Slow" - this idea of system one thinking, which are those things that we as humans think about (or the tasks) that don't really require any sort of slow thinking, or we don't have to slow down to figure it out. I have my coffee cup by my desk, and I want to take a drink, so I just pick up the cup and I take a drink... I don't have to take a moment, get out the chalkboard, write out how I'm gonna pick up the coffee cup, write some papers in academic journals about my unique method for doing it, and then do it.

**Chris Benson:** \[00:20:16.23\] \[laughs\]

**Daniel Whitenack:** It's just something that I just pick up. I don't even have to expend -- like, I have to have the thought to pick it up, and I have to do the motion, but I don't have to slow down my life to think about how to do it, right?

**Chris Benson:** That's true. Thank goodness.

**Daniel Whitenack:** Yes... Well, in most cases maybe. \[laughter\] In system two thinking, some of the words that were used as related to that in Yoshua's talk and in other articles were "slow, logical, sequential, conscious, linguistic, algorithmic planning, reasoning", so this idea that there are those times in our lives as humans where hopefully most of us do think about more complicated things than picking up a coffee cup.

We have to reason through certain problems to come up with a solution that is a sort of unique solution; maybe something we haven't experienced before. It's expressed in terms of maybe linguistic elements, or logical steps, or a sequence of things... And of course, some of these words, like the sequential side of things, the logical side of things - of course, these are associated with some of these ideas that, like I mentioned, OpenAI and others are exploring.

If you think of a sequential series of steps that you have to put some logic into and execute with not that much feedback - well, we're starting to think about reinforcement learning, which is a sort of sequential decision-making process where you get rewards from your environment and you actually can modify your environment in some cases. Some of these words definitely get to those things that people are trying to push the boundaries of.

Was that idea of the different ways of thinking - did that resonate with you as well, or...?

**Chris Benson:** It did. And it's funny, that book in particular - I've had it on my Kindle for a while and I need to dive into it. I keep hearing how good it is.

**Daniel Whitenack:** Yeah. You need to think slow about it?

**Chris Benson:** I need to think slow about the book, there you go. And I'll read slow through it as well. But we definitely are at a moment where we've done amazing things in deep learning over the last few years, but I think we're all pretty aware that it is clearly nothing like we act as humans in terms of the way we process information... And you named a lot of that. It's the idea of something that requires your attention and your consciousness, both of which are core ingredients for system two, as we define what those mean.

With attention, it's the ability to focus on one or just a few elements at a time, and we've seen that now crop up in a variety of deep learning algorithms, at a kind of basic level. It's definitely in some NLP areas, and you're seeing it pop up in others as well, based on those successes. And the ability to have what they're referring to as soft attention, which essentially allows you to focus on the things that you need, but they also evolve over time, and it's very much kind of encompassed by the idea of short-term memory... And Joshua notes that attention is an internal action, and it needs a learned attention policy. All this kind of starts also feeding into consciousness, in terms of if you think of consciousness not as a wishy-washy thing - and I'm just horrified, by the way, as an aside, at how poorly I'm doing at explaining this after seeing his amazing keynote...

**Daniel Whitenack:** \[00:23:50.20\] \[laughs\] You're doing beautiful.

**Chris Benson:** Oh, my gosh... I'm taking a master's work and just killing it. But he talks about the need for consciousness to be defined computationally. So not to be this kind of wishy-washy, ethereal idea that we think of it as typically in our daily life, but something that you can identify algorithmically. The nature of consciousness is very short-term in memory, it requires attention...

You look at something, and the fact that we're going from moment to moment there, if you put that into a neuroscientific context, that is what allows us to do what we're doing right now, to have this conversation and to do all the things that make us human in our daily lives. But we are approaching a time when we can, with a very strict definition, potentially define what consciousness is, and understand how attention and consciousness relate in a neuroscientific and human standpoint, and that is what is being codified as the idea of system two in a machine learning context, where we're starting to track that.

So as I listened to that keynote a few months ago when he gave it, in December, I was really struck by the fact that the science that we've put our careers into is really shooting along, and we're not that far from certain areas that we may be able to computationally understand in a strict manner. That's, like I said, one of those first evolutionary steps that might take us toward that longer path toward AGI.

**Daniel Whitenack:** Yeah. I was kind of struck when he started talking about consciousness, and then brought in this idea of attention... And I think that it's certainly useful to think about how to build a machine or intelligence that is conscious of the things it needs to be conscious of to do more complicated tasks, like these system two sorts of learnings, and that sort of thing.

Personally - and this is partly my own opinions, and partly my faith and my own values - I think that that smaller-scale consciousness which can be quantified is still vastly different than what makes a human a human... And that's another discussion that we can have. So I think that there is human value that's separate from that sort of small-scale consciousness that allows you to do these more complicated tasks. So that's my own sort of thought on that... But I do think it is really useful to define some measure - whatever we wanna call that, whether consciousness is a loaded term for some people or not - to define some sort of entity which is that sort of entity that allows us to push machine intelligence to these larger-scale problems.

I think that, like you say, practitioners who work in this every day - there's such a long road to intelligence that would even generalize to many of these sort of system two tasks? I don't think we're in any danger of these sort of apocalyptic scenarios that people like to think about... But you know, I think it is useful to think about "What is that entity that helps us build up these more complicated tasks?"

**Chris Benson:** I agree. As a matter of fact, just as a note - the time horizon to get to AGI has so many steps between here and there, and it will likely be long enough out, whatever that time length is. I can totally understand why people would doubt that we're ever gonna get there. And a while back - you know, I do this Atlanta Deep Learning Meetup, and a while back we had dueling sessions where I was kind of arguing toward why we would get to the concept of AGI, and another friend of mine there took a different session and argued why that was just fantasy. And I still think I'm right on that, no surprise, but I can totally get why he would not think that that is a realistic thing... And that is because as we do what we do as practitioners, it is so many steps out it feels infinite. It feels like that thing that you're never gonna reach. So I'm sympathetic to people...

\[00:28:16.06\] I think that the work we're doing right now, and all the work we've done in deep learning, as different as that is from the neuroscience of a human brain, that it's still incremental steps to get us there. We are learning from what is working and what is not working, and we are learning from the unexpected side effects, and things like that... And every little bit of that pushes us farther down that road.

So I do think we're eventually gonna get there, and I think there's giant implications, which we can talk about a little bit later in this episode, about what that means, and legal aspects and all that other stuff around it.

**Daniel Whitenack:** Yeah. I think that one other example, which -- I think it's good to talk about examples here too, to make things concrete... I work with our chief research officer - his name is Gary Simons, and he's just a really fascinating guy. He was actually the first linguist to take a computer into the field to do linguistics, which was like basically a suitcase computer that he built himself... And then there was no word processor, so he programmed his own word processor to do linguistics in the field, in Papua, New Guinea, on this computer.

He's been in the game a long time, and has continually just innovated over time, but... You know, I was talking to him and showing him some of these things when GPT-2 came out from OpenAI... And the text generation capability of those large-scale language models, and paragraphs of generated texts that were logical, and made sense, and connected certain points... And again, this is using this attention mechanism which was popular in these sorts of models, and was referenced in the keynote at NeurIPS, and all of that. And he made the comment to me -- he thought this sort of thing was impossible. This sort of generation of text by a machine in a sort of logical way was something beyond what he would see in his lifetime, for sure...

So I definitely think you're right that these sort of mechanisms -- and that comes about by thinking of "Okay, what sort of mechanism do we need to push things further?" Well, attention was developed, and self-attention, and transformers... And that pushed those systems to this new sort of level. So I think that there's gonna continue to be those things that are developed, and it requires a different way of thinking. So yeah, it's a good point.

**Break:** \[00:30:47.16\]

**Chris Benson:** So I wanted to talk about the other thing that we introduced at the beginning, and that was the DARPA perspective. And I introduced DARPA for the purpose of making sure everybody was on board with what that was... But it's really interesting to see them kind of looking out; it's a great lens to read up on what DARPA is doing, and what kinds of solicitations and announcements they're making out there in the public space... Because you may be able to infer kind of where things are going over the next decade or two in doing... Because that's their mission. It's kind of funny, kind of the hollywoodish version of DARPA - it was like a spy agency, or something.

**Daniel Whitenack:** Men in Black sort of stuff.

**Chris Benson:** \[00:32:14.03\] Yeah, really. There was a -- I won't name the book; I'm not sure if I can remember it, but a friend of mine asked me to read a book, and I stopped at the first chapter, because the whole premise of the book was like DARPA, which was like this spy agency, was sending agents out into the field to do nefarious things, and I was like "I just can't take that." It's so far from reality.

What DARPA is essentially - and this will probably offend them, do dumb it down this much... But it's essentially a giant project management office. Their mission is to look at what are the next great technologies that are gonna lead us into the future... And many of those things, even though they may be looking with a military view, end up out in the general population, just as the internet did. So it really does affect our daily life, eventually.

They have a 3,5 billion dollar budget, which is a nice, hefty little sum of cash to go try to figure out the future with. And another really cool thing that they do is that it's impossible to be a career DARPA manager; they do rotations. And I forget what the exact time limit is... I think it's four years (it might be three), but you never can bet your career on your DARPA performance. And the reason they do that is they want people to take risks. They want people to be willing to make big bets without it being something that will destroy their careers. So it's the safe place to do really revolutionary work... And that happens. Essentially, the entire organization is a bunch of project management offices, and stuff.

The reason I say all that is that they have - it's actually not terribly recent; it was back in 2018 - released a PDF that's open to the public, anybody can look it up, called The Three Waves of AI. You can google it and find it instantly. And it basically segregates the history as they see it of what AI is and is going toward... And the three waves - and if you think of the past one, it's what they call Handcrafted Knowledge (I'll talk about that in a moment), the current one that we're in is Statistical Learning, and then the future that they're talking about, the third wave of AI, is called Contextual Adaptation.

I think the short, quick version of each of those is that if you have a set of attributes about how sophisticated you're getting with your AI in terms of perceiving, learning, abstracting and reasoning, and how far each technology can go that we're at... And if you think -- like, an example of first wave, which was previous, before we got to the current deep learning period, would be like an expert system. That's where you capture a whole bunch of rules into a system, and you have a flow that goes through them... But it's a rule-based system. So it's not inference, it's not prediction in the way that we think of it today. It's not statistical, it's following a set of rules...

And then we eventually got to this point that we're at now, where we've been in this amazing deep learning revolution of recent years, which they refer to as the second wave of AI... And in particular, things like perception and learning have come a long way up that. We haven't made so much progress in abstracting and reasoning, but the idea is that we are learning, and even in the short time we've been doing this over the last few years, we've come a very long way in terms of what we can do with those statistical capabilities... But as we started this episode with, we're starting to get a little bit mature about where we've gotten to, and we're starting to see mini-versions of the same models and technology coming out.

So what DARPA is really looking for are organizations - academic, industry, within the military itself, that are interested in this idea of contextual adaptation, where you're essentially pushing all of those characteristics as far as you can, and you are able to perceive, form a contextual model, and learn, abstract, reason, and really all of those concepts that really lead eventually to the AGI concept that we've been talking about, are seeing at least the next stage of realization. There may be many waves after this potentially, but it's kind of taking us from where we are now in 2020 as we record this, into the next some-odd years of what this is likely to be.

\[00:36:23.23\] So that framework - I keep coming back to that in my own professional life, and I think it's really important that we start recognizing that maybe we're seeing a fairly mature, statistical, learning marketplace, if you will. And people are able to put into production all these great deep learning models... But a lot of the really cool research, as we saw with that NeurIPS keynote, are now focused on what in this context would be the third wave, and what in that context was system two.

**Daniel Whitenack:** Yeah, since we're talking a lot about generalization, and also perceiving an environment and making sequential series of decisions, so solving these sort of longer, or thinking slow-type problems, it seems like a lot of the time when they're referring to these things, my mind seems to go to reinforcement learning... And I know that that's something obviously that OpenAI is working on, but it also strikes me that reinforcement learning is not a new thing, right? It's been around since the 1950's, I think, even as an idea... So I wonder, if that's a big piece of this third-wave or system two thinking or however it's framed - if that's so valuable, why has it not pushed forward more rapidly into kind of standard practice, and practical implementations, and it's still a playing Atari sort of scenario, and maybe not as practical as a lot of data scientists using it, and that sort of thing. Do you think that's because of the models that are being used within the reinforcement learning framework, or is it because attention wasn't placed on it, or...?

**Chris Benson:** Well, actually, before we go too far - and I'll answer that, but we probably should note... Do you want to real quick define what reinforcement learning is, for anyone out there that doesn't know?

**Daniel Whitenack:** Yeah, so reinforcement learning is where you have an agent and an environment, and your agent executes what's called a policy to make actions in an environment. So if you imagine trying to play a game, or if you imagine like you're trying to route a car through traffic from destination A to B - this is a scenario where you have a kind of goal, or there's something you're trying to do, but it's not clear... There might be multiple sort of routes that get you there with the same sort of reward, and also the actions that you take actually influence your environment around you. Like if I change lanes to my right, then other people respond in traffic, right? So you've got this agent which is acting in an environment which it can actually influence... So each time step of reinforcement learning, when you're performing reinforcement learning, the agent makes an action based on a policy that tries to determine its future reward, and then the environment responds to that action with a reward in the next state of the environment, and you kind of loop through this cycle.

This is used in robotics, and in other places, but it seems like most data scientists I talk to that are even applying some of these more advanced AI models are not yet really thinking about reinforcement learning.

I guess my question is kind of getting towards like if that's to become a more pillar of this sort of new way of thinking, is that just because we haven't been trying to solve those types of problems, or the models applied within reinforcement learning weren't good enough yet?

**Chris Benson:** \[00:39:57.19\] Well, it's only my opinion, but my sense of it is that we're still early days in reinforcement learning, and this current incarnation, by the way - to take any confusion away from people - is called deep reinforcement learning, where we're applying the traditional deep learning ideas such as having a bunch of nodes that are connected, and you have a back-propagation that is doing \[unintelligible 00:40:17.12\] and applying that within this learning model which we call reinforcement learning... Which wasn't always -- it originally had nothing to do with deep learning. So we took something that existed...

**Daniel Whitenack:** Yeah, it's independent of what type of model you use it in.

**Chris Benson:** Right. And we've retrofitted it with deep learning capabilities, which gives it this statistical graph of possibilities... Which basically extends what's possible with the model. It makes it a lot more granular. And I think we're very early days. You and I have been in a unique position to see, as part of this podcast even, all of the different uses that you could use deep learning for. We had guests from Google that were using it in ways that I had not thought about, obviously there's robotics, I recall there was a Pac-Man example, where Pac-Man had been observed for a while... Was it Pac-Man, or -- it was essentially reinventing the game from just observing it for a period of hours.

But I think we're really early days, and I think it's a transitional technology, a transitional type of model that takes us a little bit forward. I don't think it lines up perfectly with the deep learning versions of NLP, and CNNs, which are kind of the deep learning version of machine vision... So this is one of those evolutionary moments where we're having a technology that helps us take half a step forward from where we already were, and we'll keep building on it. So I think we're gonna see a lot more happening in reinforcement learning in the years ahead... Or at least that's my expectation.

**Daniel Whitenack:** Yeah, I definitely am looking forward to it. I know it was at an event in Chicago before everything got locked down, and in that event a guy was presenting about an application of reinforcement learning in a marketing context, to manage how they executed their marketing campaigns in terms of "Do we use this campaign in combination with this campaign, and how is that gonna influence next weeks' sales? And then this campaign with that campaign..." They were managing seven different campaigns, and over weeks and weeks, and this is a little sort of sequential thing they have to manage and figure out and simulate... And I found it interesting. I haven't heard a lot of that filtering it into those, and that was a more (I guess) practical industry application event, and I was kind of surprised to see it filtering in there, which was really interesting... So yeah, there definitely are a good number of those use cases out there that people are exploring, and I think they are starting to filter into the real world.

**Chris Benson:** You know, there's one other topic - I know we're getting short on time here - that I thought we should talk about, and I know you mentioned earlier that I believe we're at the... Is it the two-year anniversary of GDPR?

**Daniel Whitenack:** Two years. Happy birthday!

**Chris Benson:** So happy birthday, GDPR... And we're in this wave right now of -- AI ethics is a really big topic in the world, and what does that mean... And if you look at what we've just been talking about these past few minutes and the vast difference between today's AI and tomorrow's AI, and then the day after tomorrow's AGI, and what do the contexts of each of those mean... So we are still very much lagging in terms of applying legal and regulatory constraint around that, because we're still trying to understand it ourselves, and it's a very fast-moving target...

**Daniel Whitenack:** Yeah, even for wave two or system one AI.

**Chris Benson:** \[00:43:44.22\] Absolutely. We were way behind, even in system one, or wave two, as you said... And as that starts to evolve toward system two and wave three, we are still trying to figure out what that means. That fast change makes it even harder. And that has a lot to do with how these technologies are gonna interact with us, the human actors, side-by-side, and all this working together as a system.

So it's gonna be interesting in the years ahead to see how the evolution of human culture, be it laws, be it regulations, be it ethics, starts to constrain or shape the future of these technologies as they evolve. It's not strictly a technical conversation, which we have a habit as engineers to fall back into.

**Daniel Whitenack:** Yeah, for sure. And I think that there's still so much that we have to explore on the technical side, and solving, of course, the complex problems that are associated with these things... But if they aren't able to be applied in a way in the real world, where things are regulated, and people's data is their data, and there's business problems to solve, and non-technical people that are involved, and all of those things, then - you know, it's strictly an academic pursuit. So I think you are seeing a lot of that friction these days with regulation.

I think as we close up I wanted to just share -- we always try to share some learning resources here in these Fully Connected episodes... A couple that I just wanted to mention - of course, we'll link to the talks that we talked about, but that book that we mentioned, the title is "Thinking, Fast and Slow." So if you wanna learn more about the different ways of thinking, system one and two... It's definitely something I wanna look into and read a bit.

The other thing I was gonna mentioned - we talked a bit about reinforcement learning, and I think one fun thing that you can do on the side and also learn about reinforcement learning is using OpenAI's Gym to do some simple reinforcement learning problems, like the cart and pole problem, or racing a car around a little track, or something... It's really easy to use the OpenAI Gym that creates these environments for reinforcement learning, and TensorFlow has a tutorial with their TF-Agents framework that's built in TensorFlow, to use OpenAI Gym.

PyTorch also has an example using the Gym... So I would recommend, if you're wanting to learn more about that subject, you can get hands-on in that way.

**Chris Benson:** I have a learning resource of a very different type from usual, and a particular reason why I'm recommending it. One of the things -- when you work in the defense industry, and you also give a lot of conference talks, like I do, prior to the Covid-19 situation, you're often asked about the concern of AI, and autonomy, and their intersection with weapons and war and things like that... And it's a topic that scares probably most people that think about it, I would imagine. So I get asked about that so often, that I wanted to point everyone to a public document that is, I would argue, a pretty good news thing... That if that's really something that you're worried about, about the future, and as we talk about AGI and all these things going forward, and what happens in our world...

There is a document, it's called the Department of Defense Directive 3000.09, Autonomy in Weapons Systems. And what it does - it's actually quite an old document, from 2012... But some really smart thinkers, before the day of deep learning, were kind of thinking through what are the implications and constraints that need to be applied to autonomy.

So you can go out and google this, it's publicly available from the Department of Defense. And if you read through it, you realize they have handled so many of the use cases before we ever got to this modern day and age... This is legally binding. This is what governs us (in the United States at least) about how we do this stuff. The first time I read that document, which was coming into this career I'm in, I had a sense of relief, that smart people had come along before and been very good about thinking.

So if this is a topic -- it's a little bit of a dry document, I'll confess, but it has some really interesting things in it in terms of how we are keeping people safe... And it was one of the very first thing I had to learn. And I didn't think to recommend it a while back, but I keep getting asked about that over and over... So if you want to understand how we think about that, it's a really good document, and I suspect, despite the name of the document, you'll go to bed sleeping a little sounder knowing that this is the reality. I just thought I'd offer that... I know it's a little bit unusual selection.

**Daniel Whitenack:** Awesome. Good pick. And thanks for putting up with all of my opinions and cynicism and optimism and all the emotions that went into today's episode...

**Chris Benson:** No worries. If we're gonna really be practical, we have to keep our eye on the future... So sometimes we've gotta set TensorFlow and PyTorch aside and figure out what direction we're going. This was a fun talk today, thanks for doing it.

**Daniel Whitenack:** Yeah, for sure. Talk to you later.

**Chris Benson:** Take care!
