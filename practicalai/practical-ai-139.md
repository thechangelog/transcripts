**Chris Benson:** Welcome to another edition of the Practical AI Podcast. My name is Chris Benson. I am a tech strategist at Lockheed Martin. Sadly, my co-host, Daniel Whitenack is not with me today, but we have a really, really good show lined up. Today we're going to be talking about how AI is changing the nature of data, the data that we have and what we might need to do about that. With me today I have Edo Liberty, who is the founder and CEO of Pinecone. Welcome to the show.

**Edo Liberty:** Thank you, happy to be here.

**Chris Benson:** Hey, I'm glad to have you. I'm really excited about our conversation here today, because I think I'm going to learn a little bit about it. I’m wondering if you will start us off -- instead of doing the normal bio that we do with everyone, tell me something interesting, really cool, that kind of led you into this. What's the kind of thing that you'd want listeners to know, that's kind of a cool thing about your background, that's kind of helped you get where you're at today?

**Edo Liberty:** You know, I can tell you kind of what got me into like big data.

**Chris Benson:** Yes, that’d be great.

**Edo Liberty:** Right now, big data is kind of like not cool to say anymore. But it was 2005, I was working on what's called hyperspectral images. So those are images -- instead of RGB, you'd have like 150 different spectra. So different wavelengths, right? And so you can analyze them much more deeply with computer vision, even though to our naked eye, of course, they look the same, because we only have three spectra to consume images within our eyes.

**Chris Benson:** \[00:04:10.29\] Right.

**Edo Liberty:** But each image itself was about a gigabyte, and our computers had 512 megabytes of memory. \[laughs\] So one image was already big data, and we had like 1,000 of them. And so as a PhD student, even just even a few images were big data. So even to do like basic computer vision, you already had to think about algorithms on how to get more from less with computers.

I ended up doing my PhD in theoretical computer science and working on algorithms and numerical linear algebra, but it's funny how I got there, I was really just trying to figure out how to do like basic computer vision on a single image. But the machine was too small and you just kind of had to figure out better algorithms and then just loading everything into memory.

**Chris Benson:** So it sounds like that was all—if you were working on that, it sounds like the move into kind of the current deep learning phase, coming out of past winters and stuff really fit well. It sounds like you were really well situated for that for in terms of what you had been doing in school.

**Edo Liberty:** Yes and no. So the beginning of my PhD - maybe like or maybe unlike other PhDs - was like a period of about two-plus years where I experimented with different topics almost every few months; like, I would dive into like functional analysis, and then really into computer vision and then NLP and then go into like numerical linear algebra and come back to whatever.

And then it felt really chaotic and very wasteful in terms of resources, to be honest... But funny enough, over the years, as I became a director at Yahoo and then at Amazon, I actually found it to be incredibly useful, because I could talk to all of these people, I could talk to the computer vision folks, and I could talk to the NLP folks, and I could talk to the \[unintelligible 00:05:59.26\] and I could talk to the engineers, and so it was fun. So all of this time wasted somehow came back in like a different life and served me really well. So it's kind of like maybe a lesson to the ages with PhD students - you know, time-wasting is not necessarily a bad thing. \[laughs\]

**Chris Benson:** That's true. When you mentioned AWS - do I recall that you had something to do with SageMaker while you were there?

**Edo Liberty:** Correct. I was the Research Director in Charge of SageMaker. We built that platform, I led the creation of all the algorithms components in that, and kind of the spearheaded most of the effort there.

**Chris Benson:** Very cool. And were you doing AI stuff at Yahoo?

**Edo Liberty:** Correct. I was heading the scalable machine learning algorithms group; that was the group in charge of the infrastructure that supported spam classification, ad ranking, personalization, ranking, threat detection, everything kind of was led by machine learning. It was done with a centralized group that was in charge of that infrastructure. Yahoo at the time was a real pioneer in machine learning. I don't know if people know that, but it used to be a real powerhouse.

**Chris Benson:** Gotcha. I guess, as you went through those experiences, at first Yahoo, and AWS, and they kind of shaped where you were going and the way that you would be thinking about AI... I alluded at the beginning of the episode about the changing nature of data - can you share some of your thoughts along those lines, and kind of how the world is evolving and how AI, and the tools that we use in and around AI are starting to affect that?

**Edo Liberty:** 100%. So I'll of give a historical tour on machine learning; I think maybe the listeners would appreciate that.

**Chris Benson:** Absolutely.

**Edo Liberty:** We have been doing machine learning basically on vectors as input. So this array of numbers. And we used to think about them as features that we would handcraft; like, feature number one is the ratio between the volume and the price, and feature number two is like number of minutes it's been on the website and so on. As time progressed, since deep learning gained more and more traction, more and more centrality in the AI world, crafting those features became in and of itself a machine learning problem.

**Chris Benson:** \[00:08:13.27\] Yes.

**Edo Liberty:** And so now you have embeddings... These embeddings are these like auto-generated features, like semantically deep features for objects, not only for like images and free text that we are kind of used to with NLP and computer vision models, but it's also kind of the lingua franca now for all data, so like user behavior and thread vectors on some network, and so on. So this is how we generate features this way, nowadays.

And so suddenly, when you look at the world of just kind of what data infrastructure is able to digest - we used to think about databases and search engines kind of being the main workhorses of like data, like as in the data infrastructure in companies...

**Chris Benson:** Right.

**Edo Liberty:** ...in applications in general. But they didn't know how to deal with like tabular data, or like terms and documents, but they were very limited, and nothing really knew how to deal with that just blob of numbers, this like embedding, this—

**Chris Benson:** Yes.

**Edo Liberty:** —like, feature vector, right? And still nothing knows how to deal with it, right? But — and here's kind of the amazing thing to me and one of the main things that led me to start Pinecone, was that if you look at any projection, in any current statistic already on data in the world, the vast majority of it is not in tables. The vast majority of it is not schematized. It doesn't fit in a database. You can't run SQL for it. The vast majority of it is audio and video and free-flowing text, and like user behavior, which is very amorphous. A lot of like unstructured data; but it's much more than unstructured. It's like really unstructured... It’s really unruly, right? But today, with these deep learning tools, we can actually featurize them. We can represent them as these high dimensional vectors, and suddenly, we have something to work with. We have an object.

**Chris Benson:** Can you dive into that a little bit in terms of like, as we made this transition out of the tabular data world, kind of where you had a database at the center of every website and all that... We look back at it as very quaint. And these days, as you're talking about that huge volume of unstructured data, how have we adjusted to meet that as we've moved into the modern era of machine learning?

**Edo Liberty:** We haven't yet. We are just at the beginning of the journey, I think, on that front. So maybe--let me maybe take you on a short detour...

**Chris Benson:** Okay.

**Edo Liberty:** ...on basically how our visual system, our human visual system works...

**Chris Benson:** Sounds good.

**Edo Liberty:** ...in a very simplified way; it may be an analogy that would explain where we are today and what systems exist. So in a very, very schematized way, when you look at the world - you, Chris, alright? Light hits your retina, activates a few neurons, a lot of neurons, that signal is sent back through a few channels and organs like neural organs in your brain... But the main one, right there in the back of your neck, just above the back of your neck, is your visual cortex. Six layers of neural processing, that you can think about as a very, very sophisticated computer vision model. It really does look like a convolutional neural net. In some sense, it was kind of the motivation or maybe the inspiration to create neural nets the way they are.

It takes local neighborhoods and aggregates them and takes averages and activations and every layer builds on the layer above. And then the output of that you have an activation surface of a several million neurons. And that processing is identical, no matter if you read a book or drive a car or look at your children. It does the same thing. It's pre-processing, right? It's the hardware.

\[00:12:00.04\] When I think about where computer vision is today, we are mostly focused on that layer - how do we build a better visual cortex? How do we process images such that the semantic representation, that activation enables me to do all these different tasks, right? What nobody is really doing yet is looking at how do we do the rest of the brain? So looking at stuff doesn't end there; the output of the visual cortex actually flows most of the temporal lobes just kind of above your ear, both ears, where you do things like remember that when you see your children, you know them; they're your children. You know, you don't just see—

**Chris Benson:** It helps.

**Edo Liberty:** Yeah, it helps. \[laughter\] They're not just a person, and you know that because you've seen them before. And so a huge part of what it means to like live in the world is memory.

**Chris Benson:** Yes.

**Edo Liberty:** It's inference. It's analogy. It's association. It's things that have to do with the storage and retrieval and analysis of those high-dimensional vectors, and all the billions of those that you've accumulated over your entire lifetime, right? And so it's not about processing. It's not about classification. It's about how do I store everything that I've ever seen and make it accessible to me as a person when I see something I know what to do with it, because I've seen it before. I might have seen it last time 20 years ago, but I still know what it is. I still know what it is, right?

**Chris Benson:** Let me ask a quick question... Because we tend to talk about deep learning in terms of compute all the time, in terms of the processing and stuff like that. And as you're reframing it there in terms of it's a memory problem, it's a memory thing to be thinking about - are we looking at it the wrong way, or am I mixing two things up inappropriately?

**Edo Liberty:** No, 100%. I think that, I kind of broke the processing into two main steps, right? There is the crunching of the raw signal, to bring it to a semantic representation that your brain knows how to work with, right?

**Chris Benson:** Right.

**Edo Liberty:** And maybe surprising or maybe unsurprising to you by the way, everything that you see and remember and know kind of is those neural representations. Your brain doesn't have access to your retina directly. Like you never actually remember the actual image.

**Chris Benson:** That’s right.

**Edo Liberty:** The actual image is the vector representation of it. All I'm saying is that once you've done the kind of hardware processing of that - which is very, like compute-heavy...

**Chris Benson:** Yes.

**Edo Liberty:** ...but it's stateless... Once you're done with that, you have the rest of the brain to care about; you have memory, you have things like analogy and retrieval and search and comparison and like things that have to do a lot more with kind of how a database works, or what you would expect from a database of data of that kind. The reason why I started Pinecone was because no database like that existed, like nobody knew what the hell to do with it.

**Chris Benson:** So it sounds like, before we dive into Pinecone though, that they were still developing the tools and infrastructure that we need to be able to handle that evolving, that changing nature of data. And as we get better at doing that, as we start accounting for the fact that we have this memory paradigm that we're trying to get used to, we need tools and infrastructure that will address that. Am I on the right track?

**Edo Liberty:** Exactly.

**Break:** \[00:15:28.21\]

**Chris Benson:** So I know that Pinecone - when I look at the very front page of your website, it talks about managed vector similarity search. And I'm assuming this is how you're approaching the issues that we were just discussing a few minutes ago. Can you start us off by telling me what is vector similarity search? And where does it apply? What does it mean to my world?

**Edo Liberty:** Sure. Tying back to the end of the last segment, we've painted a very grand picture. But when you need to work with infrastructure, you need like an API, you need something very, very crisp, right?

One of the things that we started working on -- and I’d say, what's the most basic thing, right? Let's say I have a very large collection of those vectors; say, a billion embeddings of all the pieces of content on Facebook, or all of the web pages in the world, or all the images that I've ever seen. What's the most basic thing you would expect to be able to do with that? The most immediate thing is retrieval, right? Basically answering the question, "Have I seen this before?" It's a very basic question, right?

**Chris Benson:** Sure.

**Edo Liberty:** Now, unlike strings or some IDs, they're not identically matching ever, right?

**Chris Benson:** Right.

**Edo Liberty:** Nothing they've ever seen is an identical, like photon-to-photon match. I mean, it's not; it's slightly different. So what does kind of the same mean? So when you translate to these semantic vectors, you have the semantic similarity in the world, what we humans experience as "This is the same thing", it just translates to proximity of those vectors. On average, the values are close; they're not identical. But if you sum up all the differences, the differences are not large.

**Chris Benson:** So as an example of that, we were talking about recognizing our children earlier.

**Edo Liberty:** Right.

**Chris Benson:** So if I'm looking at my daughter, at any given point, and I have the array of values that represent all of those activations that are occurring, and then I look at her another time, and those are not the same, and yet I still am recognizing her to be my daughter - is that a practical example that would be applied?

**Edo Liberty:** Yes, exactly.

**Chris Benson:** Okay.

**Edo Liberty:** 100%. And if you look at the neural activation of the output of that network, whether it be a computer vision network that you trained for facial recognition, or whether it be your actual neural network in your brain, the output is going to be similar in the sense that most of the neurons are going to have roughly similar activations, right?

**Chris Benson:** Okay.

**Edo Liberty:** Still, some of them are going to have very different activations, because maybe the background is different; many of them are going to — even though it’s a match, they’re not going to match exactly. But on average, it's going to be close-ish.

**Chris Benson:** Okay.

**Edo Liberty:** And so the very first thing you have to be able to do is take a very, very large collection of vectors, billions of them maybe, and take a new vector and say, "Okay, give me everything that just correlates with this."

**Chris Benson:** Okay.

**Edo Liberty:** ...that has a high correlation with it, or has a low, what's called, Euclidean norm. So I sum up all the squared differences and take the square root of that.

**Chris Benson:** Okay.

**Edo Liberty:** Right.

**Chris Benson:** So you're normalizing it, essentially?

**Edo Liberty:** Yes. Or maybe just think about it as a ball in space. So think about a high dimensional vector; you can think about it two-dimensional vector as two numbers, right?

**Chris Benson:** Okay.

**Edo Liberty:** \[00:20:12.16\] So two numbers, I can put on an X-Y axis; I can plot them on a piece of paper, right? So a three-dimensional vector would be like a point in a three-dimensional space; a four-dimensional vector, it's going to be in four-dimensional space, becomes a little kind of hurts your brain to think about it, but the math is the same, you know.

**Chris Benson:** Sure.

**Edo Liberty:** And you can take four to five to 1000, right? And that is exactly the same. So you can think about Euclidean distance; thinking about a ball in two dimension is a circle.

**Chris Benson:** Yes.

**Edo Liberty:** A ball in three dimensions, a sphere, and a ball in 1000 dimensions is a ball in a 1000 dimensions; it's all the points in distance less than something from the center. Okay?

**Chris Benson:** Okay.

**Edo Liberty:** And you can ask yourself, what are all the points that are in this sphere? ...which is that all the points who’s distance to the image that I'm looking at right now is smaller than some threshold... Which, if you remember, proximity of those vectors translates to similarity in the real world. And so looking at your daughter - again, this would be converted to a neural signal; you will then go to a very large bank of everything that you've seen before, and say, “Give me everything that looks like this, that is similar to this, close to this." What you would retrieve are mostly your daughter's face.

**Chris Benson:** Right.

**Edo Liberty:** ...which is the answer, in some sense, to what am I looking at.

**Chris Benson:** So there's a very different architecture in the sense of -- just to draw a comparison... If we look at this vector database concept that you're discussing, and for a moment, we look back for a moment at the relational databases, and you know, you talked about having those strings as IDs and stuff... Clearly, we have a significantly different way of retrieving data across those. Rather than having an exact match with a specific record, you're looking at generalizing across these billions of different records in the vector database for that kind of commonality, even if none of them are exact matches, right?

**Edo Liberty:** Correct.

**Chris Benson:** Okay, and how do you approach that? How do you architect such a thing?

**Edo Liberty:** Good. So retrieving or solving this problem efficiently is incredibly challenging. It's also like a very well-known and hard problem, because there are tens of open source solutions for it. Each one of them has many different algorithms with tens of internal parameters, and so on, and they all excel at different regimes and dimensionalities and statistics of the data. They trade off how often do you like miss stuff, and how fast it is, and so on. It's a really gnarly problem. For me, as a scientist, that's exciting, because that means we have hard problems to solve. But for practitioners, that's often daunting. When you work with something like Pinecone, we can alleviate that. We can, at the very least, delegate that to the experts and just say, “Hey just do the right thing for my data. I just need to like build an application right now.”

**Chris Benson:** Okay.

**Edo Liberty:** Maybe down the line, I would want to choose exactly which algorithm does what. And like, I would want to fine-tune the parameters. But for now, just give me kind of the plain vanilla, or just give me just something that works usually. So yeah, the algorithms themselves are -- like I said, I'm happy to dive as deep as you want, all the way down to the nuts and bolts; I don't know how much you want to go there.

**Chris Benson:** Because I don't think we've set it explicitly - is it fair to say "Pinecone is a vector database for machine learning"?

**Edo Liberty:** It is fair, I think. Technically, that's the right thing to say. I think it's also like a search engine. It's its own thing. I think if you call it the database, it's in some sense, an analogy. It's also like a search engine.

**Chris Benson:** Can you differentiate what those two labels, database or search engine - can you talk about what the implications are for each of those and how it fits in? And I will forecast, you don’t have to go — kind of explain the concepts, but I'll also ask you about some kind of use cases on where you might use those in a moment. So if you can kind of conceptually address it, and then let's dive into something really practical about how you might do that.

**Edo Liberty:** \[00:24:11.12\] Sure. So I think that as a whole, when you tell somebody — just the word database is loaded, usually with—

**Chris Benson:** It is.

**Edo Liberty:** ...concepts like joins, and analytical workloads, and like transactivity, and consistency... We don't do any joints, but we do care about consistency and persistence, and so on. So we have -- it requires some properties of a database, but it isn't really a database. It's definitely not an SQL engine in any way.

**Chris Benson:** Gotcha.

**Edo Liberty:** A search engine usually is more focused on retrieval of relevant items quickly, a small set of relevant items quickly, which is much more aligned with what we do right now, right? But search engines are also confusing, because people really strongly associated them just with text.

**Chris Benson:** Right.

**Edo Liberty:** So people assume, “Oh, it's a search engine,” it’s text you put in text queries and you know—

**Chris Benson:** Another loaded term, really.

**Edo Liberty:** Right, exactly. We‘re just like so branded to think about like Google and Bing and whatnot.

**Chris Benson:** Yeah.

**Edo Liberty:** So I think both of those terms, in terms of infrastructure, we overlap a lot. And we have to provide the same primitives. In terms of just terminologies, they're both bad. \[laughs\] Equally bad and equally good, by the way.

**Chris Benson:** If you're willing actually dive into that a little bit. I'm really curious. I'm fascinated by this, because it's something I don't know much about... How do you store the data? We've talked about the storage a little bit, and we've talked about retrieval... What does that look like? You know, as you said, if you can kind of dive a little bit... Dive for us a little bit and tell us, because I think when people think databases and search engines, as you've just pointed out, they have a preconceived idea in their mind. How do you implement those terms? When you're taking the phrase database and the phrase search engine and you're saying, “It's not the way you were thinking before”, what's different about it? Tell us a little bit about what that looks like.

**Edo Liberty:** So first of all, because of the nature of the data, basically the only way to implement this efficiently is to have everything in memory. So first of all, we're going to need memory database.

**Chris Benson:** Okay.

**Edo Liberty:** The second thing is that retrieval, so this similarity search or nearest neighbor search, it's also called, this retrieval of close vectors or correlated vectors from a very large collection, is a very compute-heavy operation. You really have to oftentimes touch and do some basic computation on very large portions of your data. So this is a compute-heavy process. Of course, the goal of the infrastructure is to make it as lightweight as possible, but it still is significantly more tasking. So let me kind of maybe explain very roughly how you'd even approach such a thing.

**Chris Benson:** Okay.

**Edo Liberty:** I'm going to try to convince you that you can think about a 1,000 dimensional space like a three-dimensional space right now, okay?

**Chris Benson:** Okay, I'll buy into it. I’ll try.

**Edo Liberty:** \[laughs\] I'm going to put warning signs where the math doesn't work. But for most concepts, the math kind of, the intuition is actually okay. So the first thing you want to do is to be able to just carve out chunks of space and to say, “Oh, if I'm here, then my close neighbors are usually within the same part of this space”, right? So think about—

**Chris Benson:** Okay. That makes sense.

**Edo Liberty:** ...partitioning that makes the Universe into like galaxies, and solar systems, and so on. So you say, “Oh maybe it's good to start searching for my nearest star in my galaxy”, right?

**Chris Benson:** Sure.

**Edo Liberty:** It's a good guess, right?

**Chris Benson:** Right.

**Edo Liberty:** So usually, you'd have a partitioning of the whole set of points into these clusters, such that in real-time, you have to figure out, "Oh, I'm not going to search everything, I'm just going to search through these subsets of clusters. And these are the areas of space that are going to more likely contain my memories.”

**Chris Benson:** Yes.

**Edo Liberty:** Like the closest neighbors, right?

**Chris Benson:** Sure.

**Edo Liberty:** \[00:28:05.02\] Within those clusters, you have a more compute-heavy process that actually kind of combs through everything and figures out what's close. But it does that very efficiently; it doesn't actually compute everything. It kind of has very, very efficient rules to kind of discard things that are not really close, right? So you kind of have to raise a flag, when you see something that's suspicious... Like, "Oh, this is maybe highly correlated..."

**Chris Benson:** Right.

**Edo Liberty:** ...but you have to rule out things that are not relevant very, very quickly. So you have this like, second comb of everything that rules out everything that's impossible, that's irrelevant, and just leaves an even smaller candidate set. And then you have a final layer that just goes over that and really fine-combs through and really does compute all the distances that “Here are the actual, like, 10 or 100 most relevant points.”

Now, if that process sounds like lossy to you, that you might actually have missed something, you're absolutely right. It's not foolproof. And so that's one of those properties that people have kind of are confused about or surprised about with the analysis to your database. They go, “What do you mean, it's not always accurate?”

**Chris Benson:** Yes. You're missing -- in that relational world, which is addressing a different problem, you don't have that exactness that you have with those IDs tied to something. It's a different thing you're trying to achieve here.

**Edo Liberty:** Right. And so you kind of have a trade-off between how quickly you need to retrieve the results versus how accurate you want them to be, right? Because I can just fine-comb through everything. Like, I can just decide to just brute-force to kind of search my entire memory front to back. That will take an hour, but it would be 100% accurate.

**Chris Benson:** Yes.

**Edo Liberty:** Or you can be very, very picky and say, “I'm going to set all my thresholds really high. I'm not going to touch anything unless it's like very likely a good match.” Well, you might miss some stuff, but it's going to be very fast.

**Chris Benson:** Right.

**Edo Liberty:** And not getting to the point that there are like 5,000 different ways to do each one of those three stages. \[laughs\] Yeah, I think that's maybe as deep as we want to go... But you can see how that is very, very different than like a key-value lookup or a B-tree. It's just a whole different thing.

**Chris Benson:** That was a really good explanation. I truly have that now in my head as to what the difference is. I know that there's lots of different ways to apply that in the real world to get productive solutions. Could you talk a bit about different areas that you can take this technology that you have at Pinecone, the vector database technology and the retrieval - where would we put that to get value out of it in the world and to help us solve all sorts of problems?

**Edo Liberty:** So interestingly enough, we can talk about very concrete situations, very concrete solutions, some of them built with Pinecone, some of them built by companies building their own technologies. And frankly, we as consumers of technology, we use these algorithms all the time. If you use Facebook, your feed is ranked by the embedding that Facebook has of you, as a user. All of your tendencies and interests and everything are encoded is a high-dimensional vector. And the topics and contents of a piece of content, whatever it be, like a piece of text or an image or whatnot, is encoded the same way, and the ranking is decided based on the similarity of those encodings, right?

The same is true for pretty much every social network out there. It's the same way in LinkedIn and so on. If you search on Google, if you just search any long query that doesn't match directly like word-to-word, you might be looking for an answer to something that the right page that contains — so you type the question, but oftentimes, the answer doesn't contain the question verbatim, right? It just contains the answer.

**Chris Benson:** Yes.

**Edo Liberty:** \[00:32:05.03\] So text search doesn't make any sense. Like, you shouldn't be looking for the words in the query. So what should you be we're looking for? And what you're looking for is an encoding of the query with NLP models into a high-dimensional vector. And you're searching through the web, where each paragraph was also encoded into high dimensional vectors, such that it's still close if the paragraph might have contained the right information or the answer to that query.

**Chris Benson:** Yeah.

**Edo Liberty:** And same in retail recommendation for shopping, same as threat detection, anomaly detection, you name it. I mean, in some sense, all of it works this way nowadays.

**Chris Benson:** I'm going to kind of throw something in kind of randomly - could you think of it as a proxy for identifying intent, possibly, in some of these cases, by comparing high dimensional vectors to where -- you know, what Facebook wants to know or what Google wants to know is what is my intent with my search. Less about the exact words I'm using, and more about "What is Chris Benson trying to get to? What is that thing that he's trying to unlock?" Is intent one of the possible things that it's proxying for there?

**Edo Liberty:** So the main question is basically, "What do your embeddings represent?" You train those models. We talked about vision a lot in this session - that probably encodes like visual similarity. But when you do feed ranking, then yeah; I mean, you would encode for intent and interest. When you do for maybe search, it would be more intent, maybe, and feed ranking is more like interest, or maybe also intent, I'm not even sure.

**Chris Benson:** Yeah.

**Edo Liberty:** So yeah, you can encode a lot of semantically deep properties of the object that you're using, whether it be a person's actions on your website, or an image, or a piece of text. I mean, it's the same, in some sense.

**Chris Benson:** Okay. Well, let me ask you another question. With a lot of folks listening to us here being practitioners, and in their day job they're maybe creating convolutional neural networks, they might be involved in NLP; my co-host, Daniel is \[00:34:08.09\] all the time. Are there certain algorithmic approaches within deep learning that vector databases and retrieval lend themselves to more than others? Or is it more it can be used across any of these different algorithms? Should people always be thinking about it, or are there certain areas where it wll be more productive than others?

**Edo Liberty:** I think they can be applied pretty widely, but there are patterns. So you know, you said Daniel is an NLP practitioner. I saw you interviewed the folks from Hugging Face, for example.

**Chris Benson:** Yes.

**Edo Liberty:** So a pattern that we see is people use models like Hugging Face, like BERT and others to transform their text to high dimensional vectors, and maybe just produce semantic search on top of their corpus of documents with an engine like Pinecone, right? So instead of encoding -- taking the tokens and putting them in Elasticsearch, I would convert them to high dimensional vectors and put them in Pinecone, and search through the vectors themselves. And then I'll be searching through the semantic meaning of the document rather than the words themselves, right? That is very common.

Now, usually, if you do just that, exactly what I just said, you don't get the best results; you probably want to tweak your algorithm, or retrain it; you might need to do a few extra steps. But even if you do just that, you already get something interesting, which is very different than traditional text search, right?

**Chris Benson:** Can you also maybe give us kind of your classical -- or whatever feels right to you, but kind of a classical workflow. So if somebody is out there and they're using TensorFlow or PyTorch or you know, whatever the tool that they want to use, and they're listening to this, and they're starting to think, “Oh, I definitely need to incorporate this into my workflow.” How do they do that? How do people start to get Pinecone and take advantage of that in doing whatever they're doing? What does it look like in a very fingers-on-the-keyboard practical sense?

**Edo Liberty:** \[00:36:04.00\] It's incredibly simple. So we offer Pinecone as a fully managed service, and so all it takes is like asking for an API key on the website, which is free, and you get it like a minute later in your inbox. After that, you can literally go to our tutorial section and run Notebooks and go play with all the API's and all the capabilities are open to you. You know, after a few weeks, you can either — you'll probably decide whether that's the right tool for you to use. Most projects end up being like very cheap to be able to run and sustain workloads even.

**Chris Benson:** Gotcha.

**Edo Liberty:** It should be less than $100/month is typical for most like non-enterprise users. And yeah, I mean, it's right there, and it's available to you. You can use it as like a microservice in your application, or to support your developer pipeline... All the API's are open, they're all documented. They're pretty simple, in my opinion.

**Chris Benson:** Very cool. So I'm curious, I want to go back for a moment... You were talking about some of the social media applications, with Facebook... Are there any other areas specific to call out that are really notable for using these technologies? Are there any things that people might go, “Oh, I hadn't thought about the fact that this makes sense to use there”? Any other use cases to call out?

**Edo Liberty:** So we definitely see text embeddings a lot, especially because the models for embedding texts are quite easy to get a hold of and they're pretty good already. We do see that with images, searching for images, searching for near duplicates of images, for fraud, for social networking and so on. So people upload maybe slightly more of images you might already have in your network and just want to flag that, right? So think about an "I've seen this before" function, right? But it's not the same file, it's just a slightly distorted or a slightly intentionally changed image, right?

We see that with fraud. Fraud and anomaly detection are very heavy use cases, where you encode some normal behavior and then in real-time you retrieve "Out of 100 million events that I've seen, does this kind of look like a good thing or a bad thing? What does this look like? Should I be looking at this now? Should I flag this to my analysts or whatnot?" I think those are the main patterns but — and recommendation, by the way. I forgot to say, recommendation and personalization are a big thing, for shopping, for social networks and so on. I think those are kind of the main four, if I had to guess, but I'm probably missing something.

**Chris Benson:** Sounds good. As we wind up here, I want to take us back for a moment to something you said early on. You talked about how we're early on in this stage, as we're starting to move into this new way of approaching technology solutions... And you know, this is early days. And as someone who is working in this field all day, every day, and building your company based on these technologies, where do you think it will go? What would you like to see? And how will these set of technologies evolve in the years ahead, in your view? When you're thinking -- when you're laying in bed at night before you go to sleep and you're thinking, “That's the thing I'm aiming for down the road”, what does that look like?

**Edo Liberty:** It's a fantastic question. I think that it's hard to pinpoint exactly. Again, I was trained as a scientist; we started off by talking about my meandering trip through my PhD... I think my professional life is sort of like a scaled-out version of the same... I personally try to push the boundary and try to figure out what's the next huge milestone we as a society can hit. For Pinecone specifically, for us as a community, I think that really starting to think about not only the model that I trained and how do I put it in a container and ship it to someplace in my app, but rather - like, okay, we now have this just complete wealth of data that we can now use, and how do we integrate intelligence with compute and memory and storage? How do we make that behave a lot more like a brain and not like a neural net? And I think that we are many years away from that. One of my favorite books on AI has this quote that says that, “Saying that humanity is getting close to general AI is like seeing a monkey climbing a tree is getting close to the moon.”

**Chris Benson:** I hadn't heard that. That's good. I agree.

**Edo Liberty:** It’s true. It's true, technically. So I don't know if we're as hopeless as that monkey climbing the tree, in getting to the Moon that is, but we are very, very far away. It's far away when we look at applications -- when you really dig in and you try to solve even very basic problems, you understand how little we know. Like, we don't even know how to train neural nets, so... \[laughs\]

**Chris Benson:** I'm going to spin that in a way that I think that that's going to make for a lot of great episodes for us to talk about. We'll have to have you back on the show to discuss some of those steps along the way there.

**Edo Liberty:** \[laughs\] I'm happy to do that.

**Chris Benson:** Well, Edo, thank you so much for coming on Practical AI. It's been a really fascinating conversation. I have learned a lot personally and I appreciate you answering all these questions that I had for you. So thanks, and I hope to have you on again sometime.

**Edo Liberty:** It's a lot of fun. Thank you, man.
