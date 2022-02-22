**Daniel Whitenack:** Welcome to another Fully Connected episode of Practical AI. In these episodes, Chris and I keep you fully connected with everything that's happening in the AI community. We'll take some time to discuss the latest AI news and dig into some learning resources to help you level up your machine learning game. I'm Daniel Whitenack, I'm a data scientist with SIL International, and I'm joined, as always, by my co-host Chris Benson, who is a tech strategist at Lockheed Martin. How are you doing, Chris?

**Chris Benson:** I'm doing very well, Daniel. How are you doing? I know you had been out with COVID, like almost everybody else on the planet. Are you better?

**Daniel Whitenack:** Yes, much better. Yeah. I mean, for listeners that are maybe just jumping in at this episode, I've been out for a couple of recordings; I had the COVID... Overall though, I count myself very blessed, because I didn't have the severe symptoms that some people had. I definitely had some, but not near as bad, of course, as what a lot of people are dealing with. So I count myself blessed in that regard, and yeah, it's good to be back in action.

**Chris Benson:** Welcome back, buddy.

**Daniel Whitenack:** Yeah, good to be back. It was awesome to have Natalie Pistunovich fill in in a couple of recordings for me.

**Chris Benson:** She did fantastic job. Very good.

**Daniel Whitenack:** Yeah. She's awesome. I love her insights on everything. And it's kind of fun to be able to listen to my favorite AI podcast without my voice on it, you know? \[laughs\] I don't know if that's okay for me, to call this my favorite AI podcast.

**Chris Benson:** It is. It has to be. I'm going to be worried if it isn't, okay?

**Daniel Whitenack:** \[04:06\] Yeah. So I do listen to some of our episodes where I am on it, and obviously, I'm part of the conversation, so I remember what's going on, but I gain a lot out of these podcast episodes... And actually, I just had a conversation with someone and they were asking me, "With doing the podcast and interacting with all sorts of AI people across industry, how has it shifted some of how you think about AI or the industry?" I thought that was a really interesting question. I don't know how you'd answer that, Chris. I think I said something like, "It's encouraging to learn from so many people that have really deep knowledge in different areas, but it sort of also reinforces that idea that everyone, even though they might seem like an expert in all areas - and there are some people like that, but most people have a very deep knowledge in a certain area."

**Chris Benson:** Yes.

**Daniel Whitenack:** So that's what breeds this imposter syndrome thing. And so to be able to, I think over time talk with so many luminaries and experts in different areas, it's cool for one to learn from them, but also to just talk to them and feel like they accept you and are excited to talk to you about what they're doing, and don't view -- because we're not experts in those areas, but a lot of the people we have on are very gracious. So yeah, maybe that's my insight, is that there's just a lot of very gracious people in the industry. I'm sure that there's many that aren't, but being able to learn from them - yeah, that's what came to mind. I don't know if anything comes to mind on your own.

**Chris Benson:** I think that's well said. I wasn't expecting to go here, but it's us talking about kind of that -- we've been doing this for about three years, getting close to three years now, and having done that on a more or less weekly basis over that time, we've gotten to talk to so many really interesting people. They come on... We haven't -- maybe we've just lucked out and we've only found the gracious ones, but they're so human. ..And it's that human touch around the technology that makes it special.

And then the other thing that I would notice - and I think it would be the same, whether you're a listener or whether you're the host like us - is that you're privy to this conversation, and it keeps you out of some very narrow bubbles. We're still kind of in the AI bubble as an industry, but I know that if I go to my employer, there's a particular way we think at any given employer, and it gives you perspective. And you hear really smart, amazing people saying things that you can learn from. I think that enriches us all.

**Daniel Whitenack:** I've seen this with other podcasts as well. I mean, if you read books, this is something that happens too, where you don't remember everything, but you have this low-level remembrance of certain ideas and technologies and products, or whatever it is. And so when you're in conversations in your job and someone brings up like, "Oh, well, we need to label things in this way" or "Oh, we're having this problem. I'm not sure how--", then all of a sudden something comes out of that soup of things you've sort away and is really useful. So yeah, I've found that as a really interesting benefit.

**Chris Benson:** Yeah. It definitely expands the mind. I know as my own day job - not in the podcast - has evolved over time, and I've moved from very focused on the deep learning stuff to I'm also now looking forward a lot in the "what's next?" It may not be here yet, all that.

**Daniel Whitenack:** And ethics thing and--

**Chris Benson:** \[07:54\] Ethics things, which are huge. These are big, big parts of not only the industry, but it affects everybody now. So it's a very cool time to be alive and participating in things. I know a lot of people focus on all the negatives in the world... And there are many. We are in the middle and maybe approaching the end - we'll have to see - of a global pandemic. We've had all sorts of crazy politics in recent years, lots of challenges. My daughter was asking me the other day, "What historical period would you choose to be a part of?" and I said, "This is it. We're living it. This is a cool moment." And someday this is going to evolve. We'll have things like quantum AI, eventually. I don't think we're there yet, but it will happen someday. So yeah, pretty cool.

**Daniel Whitenack:** Yeah, yeah. Well, I mean, I guess on that note with the theme of health things and trending news and all that, I know -- just to get into some of the AI news things that happened in recent times, both you and I kind of sent each other the same link, I know--

**Chris Benson:** Yeah, we did.

**Daniel Whitenack:** ...which was this work about proteins attaching, which people might not know why that's -- yeah, we've found two different references to the same thing.

**Chris Benson:** It was the same thing written by two different online things. But clearly, it was something that mattered to both of us. I didn't mean to cut you off. Go ahead.

**Daniel Whitenack:** No, no. I was just thinking, people might be wondering why proteins attaching -- it seems like a random thing... Especially for myself, I don't have a lot of biology knowledge; I'm not familiar with that side of things. But the idea here is that there are things like viruses, which we're familiar with, like the virus that causes COVID-19... It's like something that it attacks, but you can attach things to it, right? These virus spikes... So there's antibodies that can bind with the virus spike proteins to prevent the virus from entering a human cell. So it's almost like one way to fight this virus. And I'm speaking way beyond what I know about biology. But I think we've all learned a bit about viruses and vaccines in recent years.

**Chris Benson:** Yeah.

**Daniel Whitenack:** But yeah, one of the ways to think about this vaccine or fighting a virus is attaching things to it, to the virus, like proteins, to prevent it from entering our cells. So that's the context of this.

**Chris Benson:** And this article - it uses COVID as the example of why it's important, because it's such a relevant thing right now. Antibodies are proteins themselves, and so this ability for these complex molecules, in this case proteins, to be able to do attachment and to figure out what it's going to be... It's a very difficult thing. AI, as it's done in so many other pattern matching use cases, is doing an amazing job. But I think the thing for me -- this one struck a personal note, which I'm going to share... Because lately, on several occasions, and as recently as this morning as we record this, I was talking to a friend who has a Ph.D. from Harvard University in chemistry. This person really, really knows chemistry well. And we were talking more or less about this topic; not in terms of COVID, but we were talking in terms of the fact that I'm vegan, he's not, and he loves teasing me about all the challenges vegans have getting nutrition. And I said, "Well, you know what? You need to help me with your chemistry Ph.D. find a way for me as a vegan to get all the things that I need." I am not a chemist. I know just enough to have a conversation... And we got into a conversation about that. And then I saw this article and I was like, "Okay, we really want to talk about that today. At least I do", and I was glad you did.

**Daniel Whitenack:** So yeah, maybe a side outcome of this work is nutrients for vegans.

**Chris Benson:** \[12:08\] There're so many things in medicine and nutrition and stuff that this could help.

**Daniel Whitenack:** Yeah. It's very interesting how computers doing this task are working with expert biologists and chemists and drug developers to produce things much quicker than they could otherwise, which brings up all sorts of -- I think it is a really good example of humans and machines working together very closely, with a lot of benefit... Because no one would want your machine to combine a bunch of things together virtually and say, "Here's the vaccine", and then they just go out and produce it, and that's that. There has to be a human element in this process still. And my understanding is the machine learning model is doing a lot of this brute-force stuff that was very time-consuming before with previous software products. So it kind of directly predicts complexes that will form when two proteins bind together.

**Chris Benson:** Yup.

**Daniel Whitenack:** And so it's talking about it doing it 80 to 500 times faster, and potentially more accurately. So you just sort of think about, this is probably -- and again, I'm speaking outside my expertise here, but this is probably in past time stages of the process that were really... Like, the humans didn't even enjoy this bit, I would imagine, just searching through structures and combining things and seeing what combines...

**Chris Benson:** Oh God, you haven't met my friend.

**Daniel Whitenack:** Yeah, I don't know. It seems like a manual grid search sort of thing.

**Chris Benson:** As an analogy, you know how you always talk about how you love to clean data? All the things that the rest of us complain about and grumble about, and you love that; there are people that love to do this.

**Daniel Whitenack:** Love just looking at structures.

**Chris Benson:** Yeah. And there's a lot of variability, and there can be so many combinations; I'm assuming millions. I'm not going to speculate. One of the co-authors - and I'm going to butcher his name - Octavian-Eugen Ganea, maybe. I hope. And if I have mispronounced your name, sir, I sincerely apologize on that... But he made the comment, "Deep learning is very good at capturing interactions between different proteins that are otherwise difficult for chemists or biologists to write experimentally. And some of those interactions are very complicated, and people have not found good ways to express them, so the deep learning model can learn these types of interactions from the data." So a classic deep learning task, just not one that those of us not in chemistry might not have thought about previously.

**Break:** \[14:56\]

**Daniel Whitenack:** I also noticed, Chris, that some of what was done with this protein attaching model thing had to do with very interesting data structures and how they're processed into the neural network, where here we have 3D structures, these 3D protein structures, and from what I'm understanding here, they convert those 3D protein structures into 3D graphs, which are processed by the neural network. And of course, that also fits a theme that we've been seeing in really the past year and a half or more, where people are really exploring graphed structured data and putting in graphed structured data into neural networks in very interesting ways.

So a different type of data was used here, which is pretty interesting. That, I guess, leads me to one other thing that I wanted to bring up, which is related to the types of data that we process with neural networks, which is this data2vec project from Meta AI.

**Chris Benson:** Okay.

**Daniel Whitenack:** So people might have heard of word2vec, or maybe certain types of image2vec things, or image feature extraction, or word embedding, or feature representation type of things... All of these things fit into some type of category where you have a neural network model, and the pre-training of that model helps you pre-train vectors or embeddings or representations of some type of data that you put in, that then can be maybe fine-tuned later on for downstream tasks. So this has been part of the driver for a lot of the innovations in NLP recently, but also in other fields, like image processing. A lot of large image processing neural networks have -- most of the complexity of the network is involved in the feature extraction phase, which kind of takes an image and converts it to a vector representation. What's interesting, I think, about this work is that for the most part, all of these techniques that people have been doing, by and large, are a single modality. So they take text input and convert it into some vector representation. Or they take image input and convert it into some vector representation. Or speech input into some vector representation, or a spectrogram, or something. And I think this is really interesting, because they're taking the perspective of, well, whatever data we put in, and I guess, in this case, whatever it is, either image, speech, or text.

**Chris Benson:** Okay.

**Daniel Whitenack:** \[19:46\] But whatever data we put in, we're going to create a model that is trained to represent that in a learned vector space... Hence the name, data2vec. So moving from thinking about a single modality of data input to a model that can take one or two or three or a combination of data inputs and represent that in a vector space. So that's why I thought this was pretty interesting.

**Chris Benson:** It does sound interesting. Did you get any sense of why the modality was no longer a critical part of the pattern, or any sense of how they've overcome that approach in this?

**Daniel Whitenack:** Yeah. So they talked a little bit about -- and there's a paper we'll link in our show notes if people want the specifics, but... Essentially, they have a non-learned representation of each of these types of data that they can input to a similar series of layers. And what they do is they use this trick of masking, which is used both in image processing, speech processing, and text processing as a way to, in a self-supervised way, learn the vector representation. So if you think about an image, you can mask off a piece of that image and try to fill in the missing pieces. Or if you have speech, you can mask off a bit of that speech and try to fill in the missing pieces; or text, you can mask off certain words and try to fill them in. And that kind of principle of that masking is applicable across these different modalities in a way that I guess is similar enough to where they can use a single set of models to in a self-supervised way to learn the representations. And they use this also student-teacher method that sometimes we've seen in recent years as well.

**Chris Benson:** Very cool. I noticed that that was done by Facebook's AI team.

**Daniel Whitenack:** Yeah, or Meta, or whatever it is.

**Chris Benson:** Yeah, Meta now, I guess.

**Daniel Whitenack:** We're in the Metaverse now.

**Chris Benson:** Did they have any mention of use cases for it, or was that not addressed? Was it just still too much in the research area?

**Daniel Whitenack:** Yeah, I think they provide some motivation in that there is an overhead and big differences in the way that algorithms are put together for images and speech and text and other modalities. And so bringing them together provides both that flexibility and more simplicity. But I think there's also this element of something about working with multiple modalities of data, at least in certain cases, can provide you a boost in performance across all modalities.

They show certain benchmarks where they beat other models or other image2vec or word2vec models in the different modalities, so like on ImageNet, and at least similar or better performance than models like RoBERTa, which is a single modality. So you get similar or better performance in a single modality, but it's flexible to use it across different modalities, which allows you to have one model that operates in multiple spaces, which is kind of cool.

**Chris Benson:** That is pretty cool. One of the articles that I came across, I've been -- actually, several articles are in the general area is I've been very interested lately in AI and its interface with robotics. And once upon a time at a previous employer I was doing that exclusively for a while... And so I ran across this article, it was in Science Daily, called Robot Performs First Laparoscopic Surgery Without Human Help. And it's actually referencing a paper by John Hopkins University that was very recent, January 26, which had a similarly named "A Robot Has Performed Laparoscopic - I'm probably butchering the name - Surgery on Soft Tissue of a Pig Without the Guiding Hand of a Human. A Significant Step in Robotics Toward Fully Automated Surgery on Humans."

\[24:06\] That's pretty cool, because when you think of what's called keyhole surgery, where they make a very small incision, and it goes in... The laparoscopic surgery is on the gut. So when you think of all of the various ailments that humans, and for that matter, animals get - all mammals in their gut - anything from cancer to various digestive problems... And we've come far enough in such a short amount of time, so that they can put the robot to work and it makes the cut, it goes in, it does the work it has to do, mends, sows it back together, things like that, and pulls out.

And we've been talking, in recent years, about human surgeons doing these surgeries with the assistance of robots and the assistance of AI. But now we're looking at this, making this next jump where you're taking that human surgeon out of the loop, at least in this test case, and the AI combined with the robot are successfully doing it on their own. What do you think of that?

**Daniel Whitenack:** It's interesting, and it gives, I think, people, mixed feelings, probably.

**Chris Benson:** Probably. We did mention AI ethics.

**Daniel Whitenack:** Yeah. I think you're right in that the next question comes "Well, is it always better to have a human with the machine?"

**Chris Benson:** Yes.

**Daniel Whitenack:** That's one interesting question I would have - the automated robotic procedure... It would not surprise me if that was more, or had a higher performance than a human alone. What would be interesting to know -- and maybe they mentioned this in the paper that I don't see at a first reading, but... If the human plus machine combination, if there's a way for that to outperform either the robot or the human itself. That's an interesting question.

**Chris Benson:** I think that's an evolving question over time.

**Daniel Whitenack:** Yeah.

**Chris Benson:** I know in the industry I'm in, doing defense stuff, the term for that is MUMT, which is Manned-Unmanned Teaming, where you have an automation, which may be an AI - may include robotics, may not - working with a human to achieve some sort of task. And the value proposition in a broad sense on that is exactly what you said, that by combining the two you're doing better. I think we are entering a period now where that is called into question and may change for various tasks over time as we see the fully automated version able to outperform. And this goes back to another example that I have talked about in earlier episodes.

There was a DARPA program a year and a half probably, maybe two years - I think it was before COVID fully set in - called AlphaDogfight. It was publicly broadcast on YouTube, and they had a fully automated F16 in a simulator. It was using an F16 simulator. The fully automated pilots completely outperform the human ones, completely outperformed. Now, that's in a simulation world, and there's all sorts of caveats you can apply, but it's surprised everybody just how well the AI did in those contexts. So here we are in a different area, in medicine, and now we're seeing the first ones coming about, and they'll start to evaluate performance over many of these tasks. It's a really interesting time that we live in as we see the relationship of whether the humans in the loop or not, in some capacity, is evaluated.

**Daniel Whitenack:** Yeah. And this is obvious, I think, to practitioners, but it's something that I really noticed in talking with just friends or people that aren't practitioners... It's not obvious to them, and that's when you say the AI quote, "Is doing the surgery", there's this sort of perception that the AI could go off and do something. So it could decide to do a different surgery than you told it to do.

**Chris Benson:** That's a great point.

**Daniel Whitenack:** \[28:08\] The idea of control and the distribution of inputs and outputs is not something that's obvious to general people out there. And I don't know how to better communicate that as practitioners, but the things that we're doing are, for the most part, very task-specific.

**Chris Benson:** Very narrow.

**Daniel Whitenack:** Very narrow. So this process is not like a robot that can do all surgeries.

**Chris Benson:** Yeah.

**Daniel Whitenack:** I'm guessing that it's a single operation, and it's very specialized. It's not going to like -- you thought it was going to remove a tumor, and instead, it took out your appendix, or something.

**Chris Benson:** Since we're talking along the AI ethical thing, I think that raises an interesting point, which I don't think non-practitioners generally understand... And it's extending what you're saying right there. And that is the fact that because these models address very narrow tasking, it's not intelligence, I think, the way most of us define it; it's mathematically learning a set of patterns and going through that. It's a little bit loose in my language, I know... But being able to go and do that.

So I think when people focus on the intelligent side, they are missing the boat on that. I think it's important that they start to understand -- I think what's a lot more likely to happen is that with current technology, the way it is more or less right now in 2022, you could have thousands, tens of thousands, hundreds of thousands of tasks that are trained in a very narrow, task-oriented model, and all of those tasks are out there. So could you have fully automated brain surgery? Maybe at some point here in the future. Fully automated heart surgery? Maybe so. We're just talking about surgeries right there... But that's what I think about a lot more in terms of the AI ethical concerns going into the future, is all of the models, and handing our life over to all the models, rather than one super-knowledgeable model that rules them all, which is a fiction.

**Daniel Whitenack:** It's interesting, Chris, on that last point you made. You made this comment about what we perceive as intelligence or what the general population perceives as intelligence. I was reading a book by Hamming called Learning To Learn. I think it's The Art of Doing Science and Engineering. Really interesting, and in certain cases, humorous book. But yeah, he talks a little bit about -- I think he has a few chapters on AI and limits of AI. He brings up the point that we keep kind of moving the goal marker of intelligence. So 15 years ago or something, we said, "Well, if a robot could perform a surgery, would we consider that artificial intelligence, or would we consider that intelligence?" Likely, you'd get a different distribution of answers than after the event has happened, right?

**Chris Benson:** Yes.

**Daniel Whitenack:** After the event has happened, it's very easy for us to look at that event and say, "Well, it wasn't really intelligence, because X, Y, Z", right? So then we move the goal marker however far. And I'm not saying it is or it isn't intelligence, because you can define that in so many different ways.

**Chris Benson:** That's where I was going to go next. Keep going.

**Daniel Whitenack:** \[31:44\] Yeah. I think what's weird is somehow there's the mix of using the terminology "artificial intelligence" to describe what's going on here, which triggers the wrong thing in people's mind in terms of how they define intelligence. So yeah, I think it's just a lot of confusion, which probably feeds into that sort of narrow versus wide perception that you brought up earlier.

**Chris Benson:** It's very imprecise, the phrase. So except for the name of our podcast, which is perfect, the term artificial intelligence is otherwise a very, very nebulous and imprecise way of describing it. And as we see, as you've just pointed out, it's changing constantly. And as practitioners, we're not spending our time thinking AI in this big nebula -- we're looking today at specific deep learning algorithms and approaches to training and implementation, and it's very narrow, and I don't think most of us spend much time thinking about it the same way that untrained people in the general population probably perceive it as. And so it is very practical. It is very pragmatic what we're doing, but I think a lot of people miss that. And we've just demonstrated, going to how to define intelligence, that now that the surgery is done, neither one of us -- we're both in agreement that that isn't what we think of as intelligence. And I think that's because people conflate several ideas together, which is consciousness, intelligence, self-awareness.

**Daniel Whitenack:** Yeah. Robustness, generalization... Yeah.

**Chris Benson:** Yeah. Absolutely. So I think that in this maybe narrow form of intelligence that we're describing, I think we'll see a lot of that in the years to come. I'm looking forward to the day when the general population understands it, maybe along the same lines that we do, who address these things on a daily basis.

**Daniel Whitenack:** Yeah. And I guess on that note, Chris, did you see that now AI coders are as good as the average human coder? Did you see that article?

**Chris Benson:** I did not see that article, but I am not at all surprised about that.

**Daniel Whitenack:** So DeepMind -- well, the article that ran across my feed was "DeepMind says its new AI coding engine is as good as an average human programmer." If you remember, we've talked about open AI's Codex in the past, which is this code... It's like a language model for code, and can do code -- it's like your AI pair programmer is how it's being used within the GitHub Copilot product, which could be integrated into VS Code, and such.

**Chris Benson:** Yup.

**Daniel Whitenack:** Well, DeepMind has this AI system called AlphaCode.

**Chris Benson:** Everything is alpha. Have you noticed that?

**Daniel Whitenack:** Yeah, yeah. I mean, I can't wait for beta code. That's going to be pretty killer.

**Chris Benson:** Yeah.

**Daniel Whitenack:** But yeah, the quote is sort of it writes computer programs at a competitive level. And this was done with data from a set of challenges that were curated as competitive coding challenges on a platform in which there is competitive coding that happens. This code forces competitive coding platform, which - one, kind of side note, I really do not want to get into competitive coding.

**Chris Benson:** I don't need either.

**Daniel Whitenack:** Because I really think I would be really bad at it.

**Chris Benson:** I would, too. I love to code, and I know you do too, but I'm too slow. Maybe it's a function of age, but it would take the fun out of it at the stress level on that. I'd rather just enjoy my coding.

**Daniel Whitenack:** Yeah. It's like those people that are competitive professional video game players.

**Chris Benson:** Yeah.

**Daniel Whitenack:** Like eSports. And my understanding is that many of them no longer actually enjoy the game that they're competitive in.

**Chris Benson:** They're too busy competing.

**Daniel Whitenack:** Because it's competitive, it's like -- anyway, that's a total rabbit trail. But despite that, there's this set of tasks and they ran AlphaCode through its paces on these competitive coding tasks, and determined that... I don't think they're saying that it is vastly better than the human coders, but I think they're saying it's as good. That's their conclusion - as good, and in some cases, better. And you can go and look at the example of challenges that they have, and they're definitely not -- you know, I would not consider them easy challenges.

**Chris Benson:** \[36:27\] No. I was looking at those in this article that you've passed me; they are not. As we record this in early 2022, you raised that as good, but it probably will be going forward, and surpass. And it really draws out the fact that if you can take a task and break it down into a repetitive pattern, there's a pretty good chance that there is a narrow, deep learning algorithm which can learn it, eventually, better than a human expert can. It's an interesting world that we're moving into, Daniel Whitenack.

**Daniel Whitenack:** Yeah. Yeah, for sure. And it's sort of that line... I view it as like -- people have known this for a long time, that there are a repetitive coding tasks, which is why code generation exists.

**Chris Benson:** Of course.

**Daniel Whitenack:** Which is 00 it's kind of that rule-based approach to generating code for X, Y, Z thing. So you have generating a client based on some protobuff, or something like that; or you are generating some backend code for your web application based on some config that you've created, something like that. All of these problems - they're very repeatable, and can follow patterns. And this is sort of like -- there's probably, I guess, in my view, if you look at all code that's written, on the one side, one-third of it is probably almost repetitive enough to just be rule-based generation.

**Chris Benson:** Yeah.

**Daniel Whitenack:** There's a middle third of it which is kind of like -- it's not quite like rule-based generation. It goes beyond that. There is levels of decision-making and such, but maybe it could be attacked by this sort of algorithm. And then there's probably still a third, it's like very hard code that is solving very unique problems that aren't represented well in other spheres, or something like that.

**Chris Benson:** A tiny fraction of all code.

**Daniel Whitenack:** Yeah.

**Chris Benson:** A tiny fraction in that last category.

**Daniel Whitenack:** You think I am over-generous in my thirds...

**Chris Benson:** I do. I think that you're way over-generous, because aside from this AI that we love, you and I both came from programming before that, and we were doing a lot of programming in various languages, and most of the programming across many projects, even across time--

**Daniel Whitenack:** Copy-paste?

**Chris Benson:** It really is. It's copy-paste, or it's basically doing the same thing in a different language that you did before, maybe a little bit of a different architectural paradigm... But I'm going to postulate that 95% to 99% of all the code out there has a lot of commonality across projects, and there's a little fraction that's multiple. And if this is something that we think of, if you go back just a few years before we were doing this podcast, and we programmers were thinking, "Wow, I'm out there making amazing things and all that", this is the challenge of automation. This is, I think, the question of our time; certainly one of the top questions, if not the only one... It's one of several that we need to contend with, is that automation doesn't have to be all-knowing, all-intelligent, super -- the thing that people think of in the Hollywood movies to be able to do this.

**Daniel Whitenack:** And now we come to the great battle of our time.

**Chris Benson:** Indeed. Indeed. This is the AI version of Lord of the Rings right here. You're in it, folks.

**Daniel Whitenack:** Yeah. As soon as we can generate a next reasonable script for the Lord of the Rings, then--

**Chris Benson:** \[40:02\] Oh, boy.

**Daniel Whitenack:** ...we can probably do a pretty good job right now, but still, I think, lacking. But yeah.

**Chris Benson:** I agree. AI still can't quite match J. R. R. Tolkien, if I'm saying the name right.

**Daniel Whitenack:** Yeah. Yeah.

**Chris Benson:** Yeah. That's a tall order, I agree. Okay.

**Daniel Whitenack:** So maybe that's my definition of intelligence there. I'll say that. No, I'm just kidding... So as we wrap up, in these Fully Connected episodes we do always like to share a couple of learning resources. Chris, I've noted a couple over the past week, so I'll share those. One that I've found, which I'm not totally sure if I've shared before, but I thought it was really cool, is - there's this seeingtheory.brown.edu site, which is a visual introduction to probability and statistics. And it probably -- some people don't learn this way; some people don't learn visually. But I love to have a visual component that I can have in mind for a concept.

**Chris Benson:** Yeah.

**Daniel Whitenack:** And especially for, I think, statistics and probability, a lot of people view that -- they have trouble with the intuition around concepts within probability and statistics, maybe more so than calculus or algebra or linear algebra, sorts of things... And so this goes through and actually walks you through various ideas, expectation, values, and other things, and you can see a visualization paired with that. It's a very cool way of approaching probability and statistics and an intro to certain ideas. So I would definitely recommend going through that.

**Chris Benson:** It's a very nice website. It's elegantly done, pretty. And I like the visuals in it. It's easy on the eyes.

**Daniel Whitenack:** Yeah, for sure. The other one that I'll just mention, that people might want to take a look at, is there's this book which is posted online, which I came across on Twitter, "Patterns, Predictions, and Actions: A Story About Machine Learning." I thought that was intriguing, so I clicked on it.

I think it's intriguing that they frame it as a story, but if you look at the things that are covered, they might cover them in a different narrative approach, and maybe from their own perspective, but it is a very seemingly comprehensive introduction to various topics going through supervised learning, representations, optimization, deep learning, causality and causal inference... Really a lot of relevant topics. And they kind of start, I think, from the idea of fundamentals of prediction and the classification problem, and that's where they're starting, and they lead from there in their story to these other areas that people are very interested in now. So it's a cool approach from Moritz Hardt and Benjamin Recht, "A Story About Machine Learning: Patterns, Predictions, and Actions."

**Chris Benson:** I'll check it out.

**Daniel Whitenack:** We'll share those links, along with the other links that we talked about, in our show notes. So definitely, people, check those out and let us know your thoughts on these things and the various rabbit holes that we went through. As a reminder, you can connect with us directly on our Slack channel or LinkedIn. If you go to changelog.com/community, you can join our Slack channel there and connect with us on Twitter or LinkedIn. We'd love to hear about what you're interested in. But yeah, good to be on with you again, Chris.

**Chris Benson:** Another good conversation. Thank you so much.

**Daniel Whitenack:** A-ha, I'll talk to you soon. Bye.

**Chris Benson:** Bye.
