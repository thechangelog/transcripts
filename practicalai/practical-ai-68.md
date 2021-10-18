**Daniel Whitenack:** Welcome to another episode of Practical AI. This is Daniel Whitenack, I'm a data scientist with SIL International, and I am joined as always by my co-host, Chris Benson, who is a principal AI strategist at Lockheed Martin. How are you doing, Chris?

**Chris Benson:** I am doing great. How's it going today, Daniel?

**Daniel Whitenack:** It's going really good. It's been a busy week, had calls with teams in India - if you're listening, hello - earlier in the week, and that kind of got my schedule off, so... I'm a little bit tired. We'll see how the conversations go. I think it'll be alright.

**Chris Benson:** I think this conversation is gonna wake you up, because we're talking about what I think of as your favorite topic.

**Daniel Whitenack:** It definitely is. As you know, I'm always doing language-related things, natural language related-things, and I'm really excited... I hope you are able to get some questions in today, because I have all sorts of questions. I'll pause every once in a while to let you get one in.

**Chris Benson:** Yeah... I'm guessing this is the last moment listeners are gonna hear my voice.

**Daniel Whitenack:** \[laughs\] Today we're joined by a couple of the core developers of SpaCy and co-founders of Explosion. We're joined by Ines Montani and Matthew Honnibal. Welcome!

**Ines Montani:** Hi!

**Matthew Honnibal:** Hey! Thanks.

**Daniel Whitenack:** Yeah, great to have you both on the podcast. I appreciate you taking time out of (I'm sure) the busy development of SpaCy to join us. Really excited to talk about everything.

**Matthew Honnibal:** No problem, glad to be here.

**Daniel Whitenack:** Yeah. I was telling you before the podcast I recently got your latest SpaCy stickers, and have them proudly on my laptop.

**Ines Montani:** That's so cool! I'm still actually waiting to really see them into the wild... Because this round we've sent like over 1,000 sticker packs, so they're everywhere... I'm waiting for the day where I'm sitting in a cafe and someone has my sticker, and I'm like "Oh, my god!" \[laughter\]

**Daniel Whitenack:** For our listeners who don't know, every once in a while -- I don't know how many times you've done this, but you kind of just put out the call for anybody that wants stickers to send you some info, and you'll send them stickers. I saw it on Twitter and I was like "I've gotta get in on that right away." And they're really great stickers, too. There's a couple related to Prodigy and data annotation, but then there's some NLP tattoos, I would say...

**Chris Benson:** Oh, cool!

**Daniel Whitenack:** Is that the way to characterize it?

**Ines Montani:** \[laughs\] Yeah, kind of like the old-school tattoo style, yeah.

**Daniel Whitenack:** Yeah, yeah. Really nice design.

**Matthew Honnibal:** I think of it as a sailor sort of style \[unintelligible 00:04:11.11\]

**Ines Montani:** Yeah... I've been joking that I don't know how many retweets should I ask for to get it actually tattooed on me. \[laughter\] Because I'm at a level where I have enough tattoos that it kind of doesn't matter as much anymore, and I'm like "Well, yeah. Sure. I totally will walk in and get it."

**Matthew Honnibal:** Your threshold would be far fewer retweets than me. It'd be the first tattoo for me, and that's quite different...

**Ines Montani:** Yeah, please don't get a tattoo. It's so unique to not... \[laughter\]

**Daniel Whitenack:** On that note, I would love to hear about both of your backgrounds outside of tattoos... Ines, would you wanna give a little bit of your background, and then maybe Matthew as well?

**Ines Montani:** Yeah, I mean -- it'd be kind of neat to start with Matt, actually, because that's quite a bit of a story... Or should I start? You should do the lead-up--

**Matthew Honnibal:** Well, normally I start this first, yeah... So I've been working on natural language processing for a long time. I started my Ph.D. in 2005 and I graduated from that in 2009-2010. Then I was doing research on this for a few years after that as well, as a post-doc. Basically, as the technology has improved and there was more and more interest in this, I saw there were companies who were trying to use my research code. I'd written some blog posts that had gotten some attention; I just had the GitHub repo sitting there, so people were trying to use this... And I was like "Well, it really was just supposed to print results and exit." That was like it's mission in life, and I designed it quite tightly around that core task...

So I saw that there was actually a need in the software ecosystem for more production-ready stuff, and things that could basically cross that gap. I was at about the level where I was supposed to be writing grant proposals, which wasn't really my thing, and so I decided "Well, okay, if I leave this, I have a go at starting a company and starting something with that." And then soon after this I met Ines, and then we started working on -- I think it was the SpaCy \[unintelligible 00:06:02.28\]

**Ines Montani:** Yeah, so I actually started making websites when I was a teenager, so that's how I got into programming. My degree is also partly linguistics, so I had a good idea of what Matt was doing there. He always wanted to have a visualizer, and have better user experience... At that time I was working as a freelancer, and I remember the first thing I actually said was like "Look, I totally know what you're looking for there, but it sounds a bit boring. I don't know if I wanna work on that. I have other things to do..." So that was actually my first reaction. \[laughter\] But I ended up doing it.

**Daniel Whitenack:** Validation. \[laughter\]

**Ines Montani:** So yeah, we did end up working together, and we very quickly saw that there was a lot we could do with both our skills combined. I started working on the core library of SpaCy shortly after that, and that was kind of when it was first released.

**Daniel Whitenack:** Yeah, so when was that?

**Ines Montani:** Early 2015? Wow, so that's quite a long time ago, huh.

**Daniel Whitenack:** And in terms of the initial ideas, did the company and consulting things and other stuff like that come first, or was the initial idea really to build the library?

**Matthew Honnibal:** So when I was thinking about leaving Academia, I had a range of ideas for exactly what I could do. One of them was actually to work on a software to assist language learners. So I saw that "Well, okay, the tools for learning another language are kind of primitive, and there's kind of a computational linguistic angle on that." Then I quickly saw that it wasn't quite what I wanted to do. And I saw there's a gap in the software ecosystem for a library like this.

So it was very much around like "Okay, there's a potential for having something there that's gonna be useful for people in a commercial context", and I think that the way it would be most useful to people would be if it was open source, because I feel like this type of technology, if it's closed-source or if it's under an API or something, it's just not as useful. And I thought "Well, okay, if we can make the software useful to people, then there'll be a range of ways that we can support it commercially as well, especially if we keep it relatively small and don't try to necessarily have a story for how it could be the biggest company in the world, or something." There would be plenty of interest from companies to make their usage of it a bit better and gain something, and have a commercial opportunity around it.

**Ines Montani:** Yeah. SpaCy was definitely there first, and then when we started the company, that's when we thought about "Okay, how are we gonna make money?" Or even we had ideas for products we wanted to build. We didn't wanna take venture, so we were like "Okay, we have users who wanna use our stuff", so we put out kind of a call for consulting, and we had quite a few companies applying, and then we ended up working with - and that's how we've initially bootstrapped Explosion, where we first started... For the first six months I think we did consulting.

**Matthew Honnibal:** Yeah. And that was enough to get our first product developed, Prodigy, which is an annotation tool that is on a sort of old-school software licensing where you pay for it and then you keep it, instead of renting it, like most software is these days. And that's been enough to keep the bills paid, and the team's been growing slowly since then as well.

**Chris Benson:** So I've got a question. I know Daniel has been intimately involved in using SpaCy... I'm kind of curious as a newbie though - why is it called SpaCy?

**Matthew Honnibal:** Initially, the very first idea that I had was around tokenization, because I thought that the tools for that weren't really up to production grade, and it's the first thing that anybody ever needs to do in natural language - split the text into tokens. So I was like "Well, it's based on spaces", it was short and it wasn't taken, and I had been working in Cython for a while, and I liked basically developing it as a Cython program, with a Python API... So that also emphasized the speed aspect and the Cython aspect. So the same way everything is ending in Py, this is ending in Cy, so I was like "Okay, SpaCy... It works."

**Daniel Whitenack:** Yeah, definitely. And just for our listeners, we'll try to clarify for those that aren't familiar with natural language stuff some jargon throughout... So tokens and that sort of thing--

**Chris Benson:** I'm gonna keep you honest there, because I'm the only person here who's not an NLP expert, so...

**Daniel Whitenack:** Yeah, so tokenization and tokens... You mentioned spaces - so you've got text and you've got words in that text, and tokenization would be what?

**Ines Montani:** Tokenization would be to split the text into words. If you just look at it, it sounds very simple, but actually once you get to things like punctuation, more complex ways of phrasing things...

**Daniel Whitenack:** Contractions...

**Ines Montani:** Contractions, yeah, in English, for example - that gets a lot more complicated. And then there are also different definitions... "Okay, what's a token?" A token is not always necessarily a word. Okay, in English you just have lots of small words that form bigger words. In German, for instance, a lot of these would be like one word... That's where all these jokes about the German language come from, that we have these massive words that express something very specific...

**Matthew Honnibal:** Yeah. But in languages like English we still have the same things with terminology. It's just the terminology is written with spaces in it.

**Ines Montani:** Yeah.

**Matthew Honnibal:** So natural language processing is a term that we use, and we call it that specific thing... And in German that would be written without spaces.

**Ines Montani:** Well, there would be probably one space in it...

**Matthew Honnibal:** Oh, okay, yeah.

**Ines Montani:** But it's more like "income tax returns", or something.

**Matthew Honnibal:** Sure, yeah.

**Ines Montani:** That's definitely one word in German.

**Matthew Honnibal:** Yeah. Or "Federal income tax rebate guarantee", or something. I don't know.

**Ines Montani:** Yeah. \[laughter\] I'm pretty sure that's one word.

**Matthew Honnibal:** Yeah. \[laughs\]

**Daniel Whitenack:** Like you say, it creates all of these complexities that you don't realize first, because certain languages write certain things with a certain number of words, and in other languages it's not the same number. So people might, for example, think of translation as from one word to another, just a sort of word-to-word thing, but it gets much more complicated than that quickly.

**Matthew Honnibal:** Yes, exactly. And these differences between languages are sort of seen in the algorithms that have been developed, and the way that people do things. So I often tell people that you can basically expect that any natural language processing technique will work best on a language depending on how similar it is to English. English being the language that's most similar to English, everything works best on English. And it's not because there's some magic property of English that makes it easy or more amenable to computation, it's just that for the last 50 years that people have been thinking about these problems, the dominant language that's been the test case, that people have been developing towards, has been English. So you can really see that bias in the way that the algorithms have unfolded.

Even when algorithms are touted as language-independent, it's like "Okay, the algorithm might not have any specific thing where you need to have a resource that depends on a particular language." It'll still work better or worse depending on the characteristics of that language, and the complexity of an individual word versus how free the word order is... All of these things will affect that.

**Chris Benson:** One of the things I was wondering, before we go too much further, is kind of -- I know we're talking about SpaCy, and I know you've mentioned Prodigy... Is there anything else that Explosion AI does, or is it really focused on those?

**Ines Montani:** We mostly are a developer tools company. We have a few other open source projects that are kind of cool. We have some other projects in the pipeline, and products that we're working on, but ultimately that's what we're doing. We're not doing consulting anymore. We haven't been doing consulting for a long time... And we're building products for developers who are developing machine learning and AI systems.

**Chris Benson:** Okay, gotcha.

**Daniel Whitenack:** Prodigy, as you mentioned, is a data labeling system. Is that the best way to put it? I know it's more than just a user interface. It actually integrates with models and other things, right?

**Ines Montani:** Yeah, it's like a Python library. We sometimes refer to the whole concept as machine teaching, because it's often a bit more than just annotating, or labeling... Because if you think of labeling, you think of "Okay, you just get presented with something, and you sign some label, and that's it", whereas Prodigy really lets you script much more complex workflows, try out ideas, iterate on the label schemes, really develop the models and how you wanna structure your data. But essentially, you can download it, you can install it, pip-install it, just like any other package, and then it runs on your machine, on your data, just like back in the old days, when you would buy Photoshop; you'd download Photoshop and then you have Photoshop, and then you can keep using Photoshop.

**Daniel Whitenack:** We were chatting a bit before jumping on the podcast, and you were mentioning that both of you are really passionate about the workflow and production details of actually doing natural language processing, machine learning in a practical setting. Is that kind of where prodigy came about? ...that you were seeing that slowdown in terms of machine teaching, and iteration around models, and all those things?

**Matthew Honnibal:** Yeah, so it's definitely informed by that. We already had this pretty strong hunch that annotation tooling was a missing piece in a lot of people's workflows... And when we were doing the consulting, it really confirmed this, as well. So the data annotation was really where people were lacking in terms of the success of their projects. And if we were thinking about why somebody would fail at a natural language processing project - and indeed, many of these projects are gonna fail, because it is exploratory, and stuff - it would be around these data questions, and around the questions of like "Okay, they could get the annotation scheme such that they could carve up the problem correctly to make the models work well, or they didn't have the annotations at all, or they had too slow a feedback loop between the annotations and the developers... And all of these things were things which we wanted to address.

**Ines Montani:** Yeah, for a long time people were like -- even though the data was the core of the application and really what the whole model depended on, they would just throw this on Amazon Mechanical Turk, with some vague instructions, and some survey that looked like early 2000's online survey, and then wait to get the data back two weeks later... And yeah, it wasn't that great. That wasn't very surprising.

**Daniel Whitenack:** Yeah, a lot of effort for not much useful data.

**Matthew Honnibal:** Right, exactly. And it's sort of interesting to take a step back and think about the economic rationalism of some of this stuff... Because the data science salaries are pretty sky high, and they've been sky high for a long time. And now even the machine costs of running the experiments are quite high as well... And if you look at all of the efficacy of those ingredients and how many thousands of dollars of investment are going into things... Data load should actually be pretty cheap, and the tooling is pretty cheap as well.

So for want of like $1,000 or $2,000 of annotation, people would be spending these tens of dollars on a project that basically would be doomed to fail. So you can spend way more computation and try to eke out a longer hyperparameter search and get an extra 1%, or if you annotated four times as much data, for like about $4,000 maybe you'd get an extra 10% or 12%. So it's pretty starkly far more effective to be optimizing at that end of the scale.

**Ines Montani:** Yeah. So if that's what you're doing also -- very early on we saw the problem is not the fact that we have to collect data. That's how people looks at this a lot... Like, "Okay, we have to find methods, like unsupervised learning... How can we just not label anything anymore?" It's like "Well, labeling data is actually great, because that's how you can program your model. You tell it what you want it to predict." The problem is the tooling. If the tooling is bad, then yeah, okay, the data is gonna be bad. If we can improve the tooling and we can actually make it much more efficient, and better to use, more productive, then we could also end up with better data, better models, a better data science process.

**Matthew Honnibal:** In particular we saw that one of the problems that people had with -- or one of the reasons why they hit the stumbling block on the annotation was that was often where people would hit the organizational boundaries. So that would be the part where you now needed to request a different type of budget, or you needed to cross over into a different type of organizational thing, or you'd have to have a meeting with an upper-level manager, because the annotation team was across an organizational boundary, because they had some people who didn't have much else to do, so they became the annotation team.

So we saw that actually all of those things where -- you know, now you've got an idea, and you want to try to model... And it's like "Okay, but then I have to schedule a meeting for next Wednesday, pitch my idea and get buy-in for this, and I'm not at all sure that this idea will actually succeed. So that's really where the innovation or iteration speed goes to die. That's why we actually set it up to be much more built for rapid prototypings that data scientists could do some of this annotation themselves and say "Alright, well if I've got an idea, I don't need to ask anybody's permission about this. I can do the annotation to test it out between now and lunchtime. It's just sort of part of my daily work" or "Okay, I experimented with this." It's not basically taking all of your \[unintelligible 00:19:28.07\] schemes, up to management, and pitching them in meetings, because that's not a productive way to work,

**Break:** \[19:41\]

**Daniel Whitenack:** I'd love to switch directions just a little bit here... I saw one of your recent blog posts which was talking about state-of-the-art NLP models, and there's a simple four-step formula for a lot of these models... I think that might be a good way to maybe introduce people to state-of-the-art NLP... And also, I've found it really useful myself to have that scaffolding in my mind, as I'm approaching these problems... So I was wondering if you could introduce that formula a bit for these state-of-the-art NLP models.

**Matthew Honnibal:** Sure. Let me see... I guess one way to think about it is - these neural network models are all these sort of trainable functions that you can plug together. The details of exactly how they work differ, and there's lots of different ideas for those individual components... But you can kind of take a step back and think about them as the input/outputs of them.

One type of input that you'll have for language is "Well, it's always gonna kind of be a sequence of these discrete symbols." At least if it's text data. So it'll either be a sequence of characters, and then you'll have an id per character; or it'll be a sequence of words, or you could chunk it up into different segments, that you've got different IDs... But it's gonna be coming in as these streams of numeric identifiers.

So the first transform that you wanna perform if you wanna apply neural networks to this type of input is you need to somehow take that sequence of discreet IDs and map it into a dense representation, so vectors. The simplest way to do this is to just have a look-up table, where -- let's say you've got a vocabulary of 10,000 words; it'll be a table with 10,000 rows and 300 dimensions. And then you'll take some word and it might be like the 50th most frequent word in your vocabulary, so you'll select row 50 of that table. And then that embedding table will be the parameters of the model and you'll sort of train this to have representations where similar words are mapped to a similar meaning. So you'd hope that dog and puppy will have similar vectors, and drink and eat will have similar vectors, and it'll all kind of work out as this vector space. So that's the first embed step.

**Daniel Whitenack:** Yeah, so basically neural networks like to operate on numbers, right? So when you have this sequence of symbols or characters or words or whatever it is, in some way you have to represent that in numbers, correct?

**Matthew Honnibal:** Sure. In fact, every machine learning algorithm, neural or otherwise, is gonna need to work on numbers in some way. The thing that was I guess a puzzling challenge when I first started using neural networks as opposed to the other models which we were working with is the other models really like having sparse representations. You can have an ID that's sort of just a key in the dictionary, and it doesn't matter how many keys you have, or it doesn't matter what the total space of the keys is. You only care about which ones you happen to see. In neural networks it's not like that. You wanna have a denser representation, where you've got some relationship between those. And that's kind of nice, in that even if you haven't seen many examples of "puppy", I know that it's gonna have a similar representation to this other word. So you've kind of got that sort of relationship between things and a denser representation... And that's one of the advantages of neural networks.

**Ines Montani:** Yeah. Ultimately, I think the main challenge is always there's so much knowledge about the world, and the language that we encode in text, and we wanna be able to encode as much as possible about all of this extra knowledge in our model, as well. If you look at the recent developments in NLP, that's what it all circles back to. The better the representations, the more we can do.

**Chris Benson:** Actually, you already said the word I was about to ask about, and that was encoding... If you would go there when you're ready.

**Matthew Honnibal:** Right. So the next step, if you've got this four-step, is embed/encode. So after we've got a vector representation for these word IDs - well, we're still at this stage where the vectors are kind of isolated. You've just looked up this word ID, and you're gonna have the same representation for that word type, regardless if it's context. So every time I see a word like "duck", I'll have the same representation, whether it's a noun or a verb. So I'm not getting any sense of its sense in context.

So the next step that we wanna do is rewrite those vectors based on the words around them, so that if it were based on the surrounding context, I can get another representation out. So this is a sort of input type that takes this sequence of vectors and it outputs a sequence of vectors, taking into account the linear order of the vectors that were put in. So we take an unordered set and we output an ordered set. But wait, that's not quite right. Basically, we take the same sort of dimensions of input and output, but now we've encoded the context around it.

One way of doing this is to say "Okay, I'll just concatenate the vectors for each word with some of its surrounding context, and I'll use that to recalculate that vector." This is a convolutional operation. Or you can read them in turn, and at each point remember something of the context before, and rewrite the vector based on that. That's something like a recurrent neural network.

Regardless of which method you use to encode that context, we probably want something like this... Because if we don't have something like that, then we're not gonna be able to see the meaning of the sentence together; we'll have to just say the sentence is the sum of its words, or something, which is not the way that language actually \[unintelligible 00:26:08.14\]

**Chris Benson:** Yeah, I noticed in the article you talk about both LSTMs and GRU architectures working well for that. Do you have a preference, or is there one that you would recommend over the other?

**Matthew Honnibal:** These days the transformer architecture is better than the LSTM for most situations, partly because it's just more amenable to the way that GPU performance characteristics work. So that's the one which pretty much everybody is using in place of the LSTM these days... Because we want SpaCy to work well in relatively small networks, that you can use it without a GPU, we use a convolutional architecture instead. But I would say that those are basically the two architecture types that I use for the encoding step. The LSTMs are still sort of useful, but in most situations, especially for larger models, transformers work better.

**Daniel Whitenack:** So you've mentioned the embed and encode... Apparently, I've heard attention is all you need, and you have a step that's Attend so maybe just -- I think the two steps left are Attend and Predict. Why is the Attend step important?

**Matthew Honnibal:** I should probably have called this Reduce, rather than Attend. I guess I was kind of hinting at like the attention layers; we were getting a lot of attention at the time... It really would have been more useful to call it Reduce. So the input and output types of this are you take your matrix of things where you've got one row per word, and you basically wanna get some sort of summary vector out of that. I want a representation for the whole sentence, rather than just a representation that includes all of the words of the sentence. The simplest type of this would be just summing them all up, or I'm taking the average of them, or something. But you can also take basically more parametric ways of doing this, and have one of these attention layers, or something like that... You can also use an LSTM for this as well and just take the output state. So there's, again, a variety of ways of framing this, but it's essentially just a reduction operation, where we take the metrics and we output a vector.

And then finally, the Predict step is we take a vector and we wanna get an ID out. that's the last type of thing that we wanna do. So if we think of those as the four data types or four signatures that we're gonna have in these networks, we're probably gonna be basically composing layers that look like that, and then there'll be other details for ones where you've got two vectors as the import, and then you wanna attend over them... But mostly that's what we kind of wanna do.

**Daniel Whitenack:** And then I guess in the end you have to predict something, right?

**Matthew Honnibal:** Sure.

**Daniel Whitenack:** So you've got the reduced vector, it outputs a single vector... And then the prediction - is it kind of the opposite of where you started with the embedding?

**Matthew Honnibal:** Actually, you can kind of think of it that way... But you can also just think of it kind of like a linear model and you're just going to say, alright, take a weighted sum of this input vector and some weights, and at the end of it all do some sort of max operation and say "Okay, that's the one with the highest score." So it's just like other types of machine learning models.

**Daniel Whitenack:** Getting back to where we started with SpaCy, I'm assuming that SpaCy can help you do some of the things that we've just talked about in this formula... But maybe there's other things as well. What's the range of things that you can do with SpaCy?

**Ines Montani:** Well, first, SpaCy is really a library that lets you put together a whole NLP pipeline of the different things you might wanna do and extract from your text. You're not just interested in predicting one thing; you might wanna \[unintelligible 00:29:48.17\] your text, you wanna find the individual sentences, you wanna find out which concepts are mentioned in the text, which person names, organizations, dates... Then you also maybe wanna predict something about what's in the text, and maybe later you wanna relate these things that you've extracted to each other and compute something else.

So the idea of SpaCy is you have a pipeline, you can plug in functions into your pipeline; some of them can be these machine learning models, others can just be a function, or you can write some regular expressions, you can do whatever you need. That's kind of the core principle of SpaCy.

We always had our own implementations... We usually have a good trade-off of accuracy and speed, especially also on CPU, but you can also write your own models, plug them in, and at the end of it you can feed in your text and extract things from your text out of a large scale.

**Chris Benson:** I'm curious, how would you implement a pre-trained model? How does that fit into SpaCy as a component? And maybe contrast that with if you were gonna do it from scratch, how would you do that. How does that change the workflow for you?

**Matthew Honnibal:** So it depends on exactly what you mean by pre-trained. Do you mean a model that's been trained for a particular task, or do you mean weights that have been initialized, with some language that you can then sort of leverage the knowledge from them?

**Chris Benson:** I think from my standpoint I'm thinking of doing transfer learning, as the newbie in this group - if I was gonna dive into it, and I'm taking somebody else's model that I want to utilize for a particular task, and I'm wanting to stand on the shoulders of giants before me... How would I go about doing that as a newbie? ...versus someone like Daniel, who's done tons and tons of work in this space, and maybe he's wanting to go and do one from scratch. How would it be different for me and Daniel?

**Matthew Honnibal:** Okay, so there's a number of different technologies around this. Most of your effort is still gonna be around creating the annotations for the specific problem that you wanna do... And I would actually say that "Okay, you should mostly be thinking about and focusing on getting the questions around that right", because there's actually a surprising number of choices to be made in how you frame the annotation problems.

For instance, we have a number of users who wanna work on medical text... And they say "Okay, I wanna recognize symptoms." So then naively you'd say "Okay, if this says patient suffers from asthma, that should be counted/recognized as a symptom", and that should be highlighted, and then if I have another one where it says "Patient used to suffer from asthma", then that shouldn't be recognized as a symptom.

So the immediate intuition is "Okay, that's the annotation scheme. That's what I should annotate." But that way of framing the problem will be vastly harder to recognize for the models, because you are coupling the two pieces of information about the mention of this thing and whether it actually was exhibited or not. If you can find ways of framing the problems that you factor out those pieces of information, it's a lot easier. So I would say as a newbie starting out, that would be actually where most of the complexity lies.

Then in terms of the actual software of using the pre-training, SpaCy has one facility, which is just this Command "pre-train", and you can either download some weights from us, or use it yourself. You can use that to initialize "spacy train" And then we're also working on better support for transformer models, and our library SpaCy Transformers - you can use the BERT and XLNet models that have been trained on lots of text.

**Ines Montani:** Yeah. And if you're just starting out, even just plain old word vectors, like the Common Crawl GloVe vectors that have been trained on a lot of text - even that can give you a nice little boost, and that's super-easy to use; you don't have to think much about how it interacts. You just initialize your model with that, and then you find a little script that trains your model on your data, and then hopefully you get some nice results out at the end.

**Daniel Whitenack:** I think what you emphasized before in terms of NLP often being like a series of tasks that you want to string together, often because there is so much pre-processing and there's multiple things that you might want to infer from text... Then you've mentioned a couple things like tokenization, you've mentioned finding certain things in the text, which I think you're referring to finding entities, like people or organizations, named entities in text... So those are kind of building blocks that you can put together in these pipelines; I was wondering if you could mention maybe just some of the most frequently used of those sorts of building blocks in SpaCy...

And I'd also be curious - because I have my own perspective, from different things that I've done... I was curious, as you view the community using SpaCy, have you been surprised by which ones of those things have been used most, or people have found more useful? Or maybe it's the things that you thought they would find useful. I'd be interested to hear some of that.

**Ines Montani:** Yeah... So I think definitely what people use the most is named entity recognition, as you've just mentioned, and text classification, where you really predict one label over the whole text. Our default pipelines will also ship with a part of speech tagger, so you can predict whether a word is a verb or a noun... And the dependency parser, so you can predict the relationships between the words, and for example find out what's the subject and what's the object, because that's also quite important.

That's maybe one example where we think "Oh, actually the dependency parse can in some cases be quite useful", but it's maybe not as popular as it used to be, because we now have better ways of predicting these things end-to-end... But definitely, it makes total sense to me why people would wanna use named entity recognition and text classification, because that's the most useful information you could extract that also you can then translate into the business problem you're actually trying to solve.

One other thing - the rule-based entity recognition, and the matching... That's something I'm actually quite happy to see people use more, and that's actually very popular. You could think of it kind of like regular expressions, only that you can write rules that really take advantage of the token attributes, and maybe even things that the model predicted. So you can say "I want the word 'duck', but only if it's a noun, and not a verb. And then I want to also extract an adjective if there is an adjective, otherwise not." You can write rules like that, and then also use that to extract more complex information... And for many tasks, this is actually a really powerful tool, and it works much better than just trying to predict all of it, end-to-end, somehow... So it's nice to see people use these hybrid workflows of statistical models and rule-based systems.

**Daniel Whitenack:** Yes, I'm so glad you mentioned that... Because I think it is often overlooked, and especially for maybe cases where you don't have as much data; lower resource languages, or something like that - statistical and rule-based approaches can be really powerful. I know recently we were trying to figure out how should we predict if a certain sentence is a question or a statement. We looked into various things and we tried out various things, like text classification, and a larger model, and all these things... But ended up just some simple rules performed pretty much as good as any model we could train... \[laughter\] So I could see how it could be overlooked a lot, and I don't know if you see that a lot now...

**Ines Montani:** Yeah, we hear that a lot as well. Sometimes it comes from within the organization. I often talk to people who are like "Oh, I need to extract digits for my text. How can I do that with the entity recognizer?" I'm like "Actual digits...Well, you just write a reg ex." And they're like "No, my manager says we need to use NLP."

**Daniel Whitenack:** "But that's not as cool!"

**Ines Montani:** Yeah, "We need to train a model." And I'm like "God... I'm sorry for your position in that company, because that really sucks." Stuff like that, definitely... Or another thing we always try to tell people is this thing about like "Okay, build at least some rule-based baseline that you're looking to beat." For example, for your question task... You do wanna find out "How far do I get if I just check whether the last character is a question mark?" before you start predicting things.

**Daniel Whitenack:** Which is, surprisingly, a long way...

**Ines Montani:** Yeah, and maybe you're like "Wow, that's 80%. Or 85%." And you're like "Well, okay, that's good to know", because if your fancy machine learning model only gets 82% out of context, that would look pretty good. And maybe you could show this off, and it's like "Wow, that's great results." But if checking the last character gives you a higher accuracy, then yeah, that's probably not what you wanna ship.

**Matthew Honnibal:** Yeah, it's especially important with deep neural networks, because it used to be that you can pretty much rely on some of the other models, and sort of reverse-engineering, or getting the accuracy that you would get from the simple rules... But training a deep neural network you're often sort of running blind and you have no idea whether the score is any good. And you can find that "Okay, actually I'm dramatically underperforming a bag-of-word baseline, or something."

So it's very helpful to have this sort of existent proof of knowing where you should be, because then you know what to keep trying, or when to keep trying, and that sort of thing. So I definitely feel like having that sort of perspective on where you are or where you should be is very helpful.

**Chris Benson:** One of the things that I was wondering - I noticed that you talk about SpaCy being designed intentionally to be blazingly fast... So it begs the question for me about - you know, if you're focusing on performance, what are some of your strategies for making SpaCy blazingly fast. And also, because we're talking about performance, it also makes me wonder "Who are your target users on that?" What I mean by that is, from a performance standpoint, are you thinking more about the data scientists that are creating the models? Are you thinking more about the engineers, for deployment and such? Because I also noticed that you're really focused on production. Could you speak a little bit toward performance and target users for that performance?

**Matthew Honnibal:** Sure. The things that are important for performance have kind of changed over time as the technologies have changed. It used to be that the fact that it was basically implemented from the ground-up in Cython was very important for some of the performance aspects... Because the actual maths that was being done in the model were kind of simple. So it was very important that all of the data structures were in basically memory-managed code.

Now that it's more around neural networks, some of those considerations are a little bit different, and there's a bit more forgiving, and the Python layer can be a little bit slower, because there's kind of more maths that is being done that is kind of a slower bit, that masks the performance of the other parts.

So I would say in terms of the target use case, I think to keep in mind about natural language processing is that the problem sizes constantly get bigger... And this will continue for a wide range of companies and wide range of applications. The working set of like a problem that you're trying to handle will constantly accelerate. Let's say on your new site the volume of comments that you're processing, or the number of articles in your archive - all of that is growing. And in many cases it's actually growing faster than Moore's Law. So the standard approach that people have for computational efficiency is, I'll not worry, and it'll just kind of stop being a problem, it'll just kind of inflate away" doesn't actually work so well for a lot of the problems that we wanna do with natural language processing.

If you wanna work on the Twitter firehose, or other social media monitoring - again, the problem size gets bigger faster than computation gets cheaper. So we need to actually worry about the models being quick enough to work on those things.

The other consideration is that if you make the models slow, then deploying them over a very large cluster is a hassle that's never going to get easy. The more instances you have to spin up, the harder the problem gets. You get failures of the nodes... It's just hard to be marshaling work over a very large number of workers. So if we can make the models 50 or 100 times faster, then the just operator expense of running things in practice gets a lot easier.

And then finally, there's latency. There's a lot of applications where you care a lot about the time to response of one or two things, because you wanna have the model in the loop of some sort of user-facing decision, and there again, you need the models to be reasonably fast.

**Daniel Whitenack:** I'm gonna switch directions a little bit here maybe... Being that I am working for an organization whose vision it is to see people flourish in community with the languages that they use most, I would probably get fired if I didn't ask about language support... So there's a lot of languages, and I'm guessing that various of these building blocks that you've discussed have support in certain languages and not other languages... I was wondering if you could speak a little bit to -- I guess first the current language support, but also what people can do to expand the language support of SpaCy; how they can contribute, what's involved in that, what are the challenges of that.

**Ines Montani:** Yeah, so I don't actually know the number, I don't know how many languages are we supporting, off the top of my head. I don't know the number, but it's in the docs. The base support for a lot of language is there, and that usually just includes some tokenization rules, getting basics right... But ultimately, if you do anything for a language -- we don't wanna train the model; that's where the bottleneck is. And yeah, you can optimize algorithms for different languages, but ultimately it comes down to the data... And being a library that's used in production, we are somewhat limited to like "Okay, we need to source data, we need to source datasets that can be used commercially, that exist in the first place, and that we can maybe pre-train models with, or that our users can use." And that's what we're currently seeing as the biggest problem.

It's not anyone's fault directly, but that's something we have to work with, and that's also why it's not so easy to -- people are like "Oh, why don't you give me a perfect pre-trained model for \*insert language here\*" or "Why can't you support this?" or "Why is this language so bad?" And it's like "Well, we have to work with what's there; we can run our own annotation projects, we can run our own data collection processes, but that's really the main thing it comes down to.

**Daniel Whitenack:** So have you seen contributions from various language communities around the world that really take ownership and contribute some of those models, and the rules, and all of that stuff?

**Matthew Honnibal:** Yeah, we've had a variety of contributions. One that was particularly end-to-end and very effective was Giannis Daras did a Google Summer of Code project where he contributed Greek support. We've had a number of people working on an Indonesian... I think we had people working on TOML...

**Ines Montani:** Yeah, and especially custom work - we definitely had a few users who went and used Prodigy to create their own NER annotations, because that's also something that's usually lacking. We can have treebanks for dependency parsing and part of speech tagging, but named entity recognition is much more important to many users, and also there's not enough data.

What else do we have...? I think some of the Nordic languages - I think Norwegian - have good, government-sponsored initiatives, and have published good corpora under public domain, and that's of course incredibly helpful, and also high-quality data... And then we've had users from the community who saw that, and ran some experiments on it, got pretty good results, shared that with the community, and that meant we were able to ship a Norwegian SpaCy model, for example... A base model that people can build on top of.

**Daniel Whitenack:** That's awesome.

**Matthew Honnibal:** Another one that's very notable - the Japanese support, for a long time, has been driven by Paul O'Leary McCann, who's now doing freelance work... So if anybody is listening and they wanna work on Japanese projects and they need assistance with this, he's a great person to get in touch with. You can email me for the contact for him.

**Ines Montani:** Yeah, he's been really driving all the SpaCy in Japanese stuff.

**Matthew Honnibal:** There's another group in Japan who's been working with SpaCy, and they've got their own library for this as well... So there's a number of contributions around that. I would say for something like the perspective of \[unintelligible 00:46:32.08\] if you're thinking about the vast number of languages in the world - well, tools like SpaCy are kind of designed around different use cases; SpaCy is actually designed for written text processing.

So for a great number of languages it's a little bit putting the cart before the horse, because you say "Okay, I can make this tool that can process lots of text, but what written text do I actually have to process?" So if you're in a situation where the language actually doesn't have much written text, then okay, it'll be quite difficult to get SpaCy running with things. But on the other hand also, SpaCy wouldn't really be solving a useful problem for you either. That's actually the position of most languages.

The other thing is that for those languages which are sort of less typically written - well, at least the writing system tends to have been designed by linguists, so they tend to be easier to tokenize than languages with slightly more complex histories around their writing system.

**Daniel Whitenack:** Sure, yeah. There's a lot of great efforts... I know the Masakhane project right now in Africa is working on NLP tools for a lot of African languages, and trying to -- I think it's also the \[unintelligible 00:47:45.05\] effort there, trying to gather a bunch of data that would be relevant to this, so that you would be able to start out and build something useful... but yeah, it's great to hear that you've had community contributions around that, and there's thriving communities of people that are wanting to help build in that support.

**Ines Montani:** Yeah, and this is also part of the reason we really wanna focus on the tooling around creating the data... Because it's one thing to talk about like "Oh, we don't have enough data", but if we can have more efficient ways to script workflows, that even maybe a researcher can say "Hey, I don't have any labeled examples, but I'll just create my own little set, so I can run experiments and get this moving forward", that's pretty good, and I think can have a big impact... If you don't see annotation as this huge crowdsourced effort, and something focused, that is actually quite easy to achieve.

**Chris Benson:** It's interesting for me, as Daniel just made those comments about some of those efforts... I'm wondering, as someone relatively new to this aspect, and new to NLP compared to you guys, can you give us some perspective on general trends in natural language processing, and what are the exciting things that you see happening going forward? What are you excited about over the next couple of years?

**Matthew Honnibal:** I think it's definitely exciting to see the field developing, to see so many more developers get skilled up with this. One way to answer this is if you went back a few years, what would the questions which people were asking about how trends would develop, or what would happen? And then if you compare that to now, I think you see an interesting perspective on that.

One of the things that people were wondering a few years ago was whether people would be running the models themselves, on their computers, or whether everybody would just use an API? So everybody used the one API, that was like the Google Understand Language API, or something... And that would just be what people would use for this. Or would it be the case that, as we're seeing now actually, more and more people are building the models, more and more people are involved with quite detailed libraries, and have even switched over from a library like TensorFlow to something more flexible, like PyTorch.

So I think that's been answered decisively in the direction of, okay, people want it to be programmable and they want to understand the workings of the model. They don't want a black box where everything is done for them. And I think that the reason for that is there is no one answer for a lot of these things. You need to script the problem yourself, you need to have it recognize exactly what you want it to recognize, and the model to work the way that you want it to work, with the features that you want it to work with. So I would say that that's definitely been a trend that we expect to continue, and we expect a general savviness and knowledge of people. They'll want to work with basically the most effective ways of doing this, rather than the ways which are superficially the simplest.

**Ines Montani:** Yeah. And I think also, even if you look at new developments like transfer learning, that's of course very exciting, because it means we can reuse knowledge better, and transfer it between different things we're training... And so we do think that actually -- you know, there's some trend that moves away from this idea of like "Oh, we need this big, big, big data, huge operation", and we can actually work on like a medium-scale, try out a lot more things in the workflows.

Also, I do think - yeah, we've seen a lot of systems that just work end-to-end, and people are like "Well, cool... If I can just throw BERT at it, it'll just magically work." But I think as the field develops, and also as the problem develops, I do think a lot of challenges are much more on the level of "Okay, I can predict all kinds of things, I can do it very quickly, without needing too much data... But how do I really translate these predictions into my very domain-specific problem that I have to solve for my business use case?" And I don't think there's an easy answer to this on the technology level. That's something you as an expert -- you need to know what questions to ask. "What can I train? What will work? Once it works, how do I interpret the results, and how do I put it all together to answer the questions?" And yeah, that's something you can't really predict end-to-end.

**Daniel Whitenack:** Let's say that - and I hope that we have, but let's say that we've inspired some listeners out there to get hands-on with NLP, with SpaCy, and with Prodigy, and with the other tools that you're releasing... I know that you've actually built a course for NLP with SpaCy, is that right?

**Ines Montani:** Yeah. It's free, it's online, and it's available at course.spacy.io. It's kind of interactive; you get some little prompts, you can enter code, you can check it... But it's all intended for self-study. But it's been very popular and well-received.

**Daniel Whitenack:** Would you recommend that as a good place for someone who's maybe toyed around, at least with Python, and done maybe some scikit-learn stuff, or something like that, and then want to do something NLP-related? Would that be a good place to start, or are there better places?

**Ines Montani:** Of course. I really tried to design it in a way that it also explains all the concepts about NLP. So even if you've never worked with NLP or machine learning before, I think it still gives a good perspective and gets you productive. But also, if you have done a lot of machine learning and know NLP, I think there's still enough in there that it feels valuable.

**Daniel Whitenack:** Awesome.

**Matthew Honnibal:** And I would say that in terms of other resources for more general machine learning stuff, or understanding neural networks a bit better, the Fast.ai course is very good.

**Ines Montani:** Yup.

**Matthew Honnibal:** And then a little book that I recommend to some people is Machine Learning Yearning by Andrew Ng. I don't like all of his talking points, but that little book is actually quite a useful primer in setting up machine learning projects... And it has some advice that sort of gets lost along the way about what's an evaluation set, and how do we do these things, that sort of stuff. It's a pretty short read, so that's also a nice background as well.

**Daniel Whitenack:** That's great. We'll definitely put the link to the course and to the book. Fast.ai, again - I think we've linked Fast.ai I don't know how many times at this point, Chris, but...

**Chris Benson:** Once or twice...

**Daniel Whitenack:** ...we're big fans as well. And actually, they have another course that's specifically NLP-focused now.

**Matthew Honnibal:** Exactly.

**Ines Montani:** Yeah, and I kind of liked the curriculum there, because it also starts with the basics. I think it looks at a very basic, rule-based approach. It's the whole history, and it's not just like "Oh, here's the hippest thing." Also, it does cover a lot of ethical aspects too, and bias in models, which is also something you don't typically get from your average programming course.

**Daniel Whitenack:** Sure, yeah. I really appreciate what that community is doing, and all the tooling, and the courses, and everything \[unintelligible 00:54:44.24\] through the recent years.

Well, thank you both for taking time to talk with us. We'll definitely link everything that we've talked about in our show notes. There's a lot to explore, there's a lot of questions that I'm sure people might have. Feel free to join us on our Slack community. You can find that at Changelog.com/community, or LinkedIn, or Twitter, or wherever you find yourself, and get plugged in with the SpaCy community, try out some things.

I really appreciate you both being here, and looking forward to great things from Explosion and SpaCy in the future.

**Ines Montani:** Thanks!

**Matthew Honnibal:** Thanks!
