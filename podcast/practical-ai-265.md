**Daniel Whitenack:** Welcome to another Fully Connected episode of the Practical AI podcast. In these Fully Connected episodes Chris and I keep you fully connected with everything that's happening in the AI world - the news, the trends, the new models, all that good stuff, and talk through some things that will hopefully level up your machine learning game. I'm Daniel Whitenack, I am founder and CEO at Prediction Guard, and I'm joined as always by my co-host, Chris Benson, who is a principal AI research engineer at Lockheed Martin. How are you doing, Chris?

**Chris Benson:** Doing great today, Daniel. I don't know how we're gonna pick what to talk about. There's so much stuff coming out right now.

**Daniel Whitenack:** There's a lot, mostly kind of new... Well, there's always new models, I guess, but it did seem like a big week with I think the new GPT-4 Turbo, new Gemini... It's really hard for me to keep track of the numbers and parameter counts and all that, but I know that the new Gemini, 1.5-something, I forget the different numbers... And then new Mistral, new -- I think it's a different mixture of experts. Top of the open LLM leaderboard we've got Udio, which I was just -- so I've been at some startup accelerator stuff, and then at conferences, events, and it seems like I go into one of these events and at the end of the day people just say "Oh, did you hear about X?" and I'm like "No, I haven't had my laptop open." Something else has happened, apparently...

**Chris Benson:** "For the last two hours I haven't had my laptop, and I've missed -- I was doing work, you know?"

**Daniel Whitenack:** Yeah. I don't know if you've seen the trend... I think this was a prediction for 2024, which I think was a well-informed prediction for 2024 from many different people... And I think we talked about this in our own discussions of 2024, around multi-modality of AI in 2024. Whereas in 2023, you kind of saw this explosion of, in many cases, text-to-text AI, meaning I put in a text prompt and I get some text back. Now we're seeing an explosion of multiple modalities of data input and/or output to these models... And that's mostly what I'm seeing. Is that consistent with your view as well, Chris?

**Chris Benson:** Totally. I was thinking about that. A moment for us to brag... We've actually been fairly good with our predictions the last few years.

**Daniel Whitenack:** Who knows? Maybe we're actually setting the -- it's a self-fulfilling prophecy. It's just, everyone's listening to Practical AI, and they're making our predictions real. That must be what it is, I'm sure.

**Chris Benson:** Over at Open AI, they're just listening to us and they're going "Okay, that's what we need to go work on."

**Daniel Whitenack:** It's a lot of pressure.

**Chris Benson:** I'll tell you what - it's good thing we're steering the entire industry by ourselves.

**Daniel Whitenack:** Yeah. It's a lot of pressure, but it's good.

**Chris Benson:** Sure. No pressure at all, man.

**Daniel Whitenack:** I do want to talk about multimodality today, but I've just got to share with you some of this Udio stuff, Chris... Which I think - well, Udio, Udio... I don't know if anyone knows how to say this yet. I was saying Udio, maybe it's Udio, I believe...

**Chris Benson:** I'm not going to hazard a guess till I hear somebody else do it.

**Daniel Whitenack:** Yeah, yeah. It's coming out of beta. I think that there were some leaks of some of what they were doing before, but essentially, if you go to this website, you can sign up for an account... They have it marked as beta, so I'm not sure exactly where this is going necessarily product-wise... But what you see, at least in its beta form, is essentially a space where you can put in a text prompt. It kind of reminded me of almost like a clip drop, or something; some of these image generation platforms, where you can kind of pre-select some elements of the prompt, and the goal would be to completely generate a coherent and compelling song or piece of music or composition. It's essentially a music generator.

So we've seen a little bit of this in the past, right? And in the past, we've kind of heard things generated, like kind of dreamy/ambient things, and maybe useful for kind of backing YouTube videos, or something like that, but not really compelling music in and of itself. And I think what's interesting about this Udio is that it generates both this sort of compelling music, but also lyrics, and also synthesized voices singing the lyrics, all together in one.

So Chris, while you were setting up your studio there to record the podcast, I was busy on Udio figuring out what is there. Now, there's a couple of really interesting ones that I listened to, and I've preloaded a couple in here for us to listen to and to give our audience a little bit of a sense of the audio...

**Chris Benson:** Absolutely.

**Daniel Whitenack:** ...because this is an audio podcast, so what better format... So one of these which I've found really intriguing was Dune, the Broadway Musical.

**Chris Benson:** And I would go to that, by the way, just to make it very clear. I'm standing in line to buy tickets, so to speak.

**Daniel Whitenack:** Well, the music has been generated for this, and I'll cite Bobby B... So Bobby B on Udio. He's created Dune the Broadway Musical. So just to give a sense of people - the prompt that went into this to create it, it says "teen pop show tunes film soundtrack uplifting playful female vocalist happy." Anyway, so you get a sense, kind of similar to I guess like an image generation prompt, where you're saying "High-resolution, Unreal Engine", this sort of stuff, to give it some stylistic guidance. But I've got this preloaded in here, Chris. Everything that you're going to hear is AI-generated. So let's listen to "Song of Arrakis", from Dune the Broadway Musical.

**Chris Benson:** Oh, you got my attention, man.

**Song of Arrakis:** \[00:07:18.16\]

**Daniel Whitenack:** What do you think?

**Chris Benson:** Move over, Wicked. Move over, \[unintelligible 00:07:38.13\] I saw Hamilton recently... Move over, Hamilton.

**Daniel Whitenack:** Yes.

**Chris Benson:** We're all about Dune the Musical now. That's it.

**Daniel Whitenack:** Exactly, yeah. So good. And even the lyrics... "Eyes bright blue, and hair jet black. You should see him ride on a sandworm's back." I mean --

**Chris Benson:** That's great.

**Daniel Whitenack:** ...that's good right there.

**Chris Benson:** I like the fact that the music actually deviated far from the darkness of Dune; you know, the perpetual darkness of the theme... That was fun. That was great.

**Daniel Whitenack:** Alright. Ready for more?

**Chris Benson:** Oh, yeah.

**Daniel Whitenack:** So I tried out my own. Of course, I had to try out my own.

**Chris Benson:** Of course.

**Daniel Whitenack:** So my prompt that I've put in - and I only experimented with this, so I'm sure you can do much better... But I put in "A song about two podcast hosts trying to navigate the wild and crazy world of AI, in the style of pop-rock."

**Chris Benson:** Practical AI, the musical?

**Daniel Whitenack:** We really appreciate you, Breakmaster Cylinder, the Mysterious Breakmaster Cylinder behind our theme music for the show, but this is what Udio can do. And I selected specifically to have it pop-rock, and to autogenerate the lyrics. So I didn't put it in any lyrics. So I have two options for you, Chris. I have two selections that you can see which one you like better. Here's the first.

**Selection 1:** \[00:09:06.13\]

**Daniel Whitenack:** Alright, selection one. Thoughts.

**Chris Benson:** I liked that one. You just transported me from 53, which is what I'm at now, all the way back to like 16, in the '80s, late '80s. I was all about that. That was good.

**Daniel Whitenack:** Okay, cool. Yeah, I love it. Okay, that one was -- they also generated a title. It's interesting, I don't know how many models are at play under the hood here, and how they're coordinated... I'm guessing maybe there's some that generate the lyrics, and some that generate the title, and then somehow that's merged together in a music generation... Because obviously, the voice and the lyrics have to be coordinated somehow. I at least didn't see a lot of underlying explanation of what's going on here, but pretty interesting. And that was generated, I would say in 30 seconds, or something. I don't know, not that long. So let's take a listen to number two. This one was titled "Digital Odyssey".

**Selection 2:** \[00:10:37.25\]

**Daniel Whitenack:** There you go. Even with a little bit of a guitar type solo there at the end...

**Chris Benson:** It was good. I liked the first one better. The first one felt like I was a kid again right there. But I liked both. And yeah, this is good. I could just spend all day generating music now. I may do that, actually.

**Daniel Whitenack:** I might have just taken up your Saturday.

**Chris Benson:** Oh, my God... My wife has all these chores planned for me, because we're recording here late on a Saturday morning, and I may get myself in trouble by... Yes, okay.

**Daniel Whitenack:** \[00:11:37.19\] Well, there you go. So Udio - check it out. Super-cool stuff. I think this does bring up some really interesting challenges, issues, struggles, excitement... Also, of course, joy, in hearing Dune the Musical... But it is super-interesting - I even thought about this when I was going through here... Well, you know, Bobby B. created Dune, the Broadway Musical, and I just downloaded and I'm doing what I want with it, which I guess is playing it on my podcast. So Bobby B, I hope you're okay with that.

Now, technically, this is machine-generated, so at least as far as I understand, in the current US legal system, such a thing would not be copyrightable. Sorry, Bobby.

**Chris Benson:** Sorry, Bobby.

**Daniel Whitenack:** I'm not giving legal advice here, obviously. I'm not a lawyer. But that's my understanding from our previous conversations. But what's interesting is, I think, similar to these AI-generated art things that were put into art competitions and won, there could be - now, in my case, I just put in a simple prompt that generated something in 30 seconds... There could be some really deep thought put into how to construct this prompt, and various kind of -- I think Bobby's prompt was much better constructed than mine... And also, you can upload your own lyrics into this, to add a level of creativity... So there's really an open question here of how much human creativity is actually a big portion of this generation? And will the established laws and legal entities eventually recognize the creativity that's put into prompting these sorts of systems? Just like there was a time when there was a question of whether or not if you took a picture with a camera, you just clicked the button.

**Chris Benson:** Yeah.

**Daniel Whitenack:** Now, photographers out there are gonna get really mad at me, because I think they would recognize it's way more than clicking a button, right?

**Chris Benson:** It is.

**Daniel Whitenack:** There is a whole lot to photography. And that's, I think, why it's been accepted as an art. But people argued at one point, "Hey, you click that button, it's machine-generated... You can't have a copyright for that." But eventually, those laws changed. So I wonder, Chris, if you have any thoughts about if or when that might change in these cases.

**Chris Benson:** Yeah, I mean, I think it will, because -- I guess if you look at the stream of AI advancements that we've covered over the years, there's a sense of inevitability, that when these things come out, they catch on, and they become popular, and then they become the norm. And then eventually, as we keep seeing, the laws gradually catch up over time. And things like Udio, if I'm pronouncing the name right, is going to be typical. It won't just be them, there'll be others as well.

By way of example of that inevitability, we have a Spotify account for our family, and we're listening to the traditional way of streaming music historically. And one of the things I do on that is I really like to explore new genres and new types of music that I don't know. And I'm always trying to think, "How do I get to that?" But I'm very likely to use something like Udio to prompt what I'm feeling, what I'm thinking, and try to explore new music that way. Because I don't really care as a user whether or not it's an artist that's a human, or an AI model that generated it, if it sounds good to me. And so I think that sense of inevitability will bring about the change over time.

**Daniel Whitenack:** Yeah. I think personally, I think right now even it's a gray area, where especially if you're going back and forth, like you're trying a prompt, and then maybe you're modifying the lyrics, and... If there's some sort of back and forth, that definitely gets into a little bit of a gray area, where how much even of the generated stuff - ignoring the creativity in the prompt, how much of the generated stuff is actually machine-generated, versus human post-edited, for example?

**Chris Benson:** That's right.

**Daniel Whitenack:** \[00:15:58.18\] So yeah, I think that even now that's a bit of a gray area, but then my personal thought is eventually this will be more recognized as a creative pursuit... But we'll see.

**Chris Benson:** You know, this new inroads into music through this AI model, with this being so far the most interesting that I've seen, this probably will really scare the music industry... Because this is taking it to a whole different level, and there probably will be a lot of lobbying, a lot of lawsuits... We saw this past year actors going on strike, because of AI-based video and the creation of characters, or the representation potentially of live people... And I think we'll see some form of that here.

This is a process we're going to go through over and over again, and I was talking to a good friend just the other day about this, and life ahead, and stuff, and how to do this... And I said "The smart people will align themselves with these capabilities." It's not about whether it's a good future, or a bad future, or whatever, from perspective, but it's an inevitable future. If I could give advice as a non-lawyer, and non-professional musician in the music industry, but someone observing this, I would say find a way to get on board with it, and make it work for you quickly, because it's not going away.

**Daniel Whitenack:** Yeah, very true. And I do also wonder -- of course, those things that we just heard were completely AI-generated, but it's interesting to me that maybe a creative person, and there are many that are embracing some of these things, like musicians, could actually iterate very quickly on different ideas, putting their own voice to backing music, or getting prompted with lyrics that aren't quite so good as what they would like, but gives them a creative starting point... And really explore spaces that they might not have explored before. So that might be cool to see as well. That kind of human-Udio teaming.

**Chris Benson:** Yeah, I agree. And another thing that I think will become inevitable - so here's a startup idea for folks - is with all the advancements over the last few years in kind of emotional recognition for models, and understanding if you combine a capability like this and you choose to opt in, which there's privacy concerns obviously, with a service that also is monitoring yourself, and maybe the data is only available to you, but can generate content that is exactly specific to what you're dealing with in life... And when you need to pick me up, not only does it find the right music, but it finds the right lyrics for the situation, and stuff... And so there's a lot of interesting psychological considerations here, that could be both good or bad, obviously... But I think that's pretty fascinating. I'm wondering if I can find a service in a few years that will do that, and it follows me through the day, and I keep the content private to me in my account, but it gives me the pick me up when I want... That's what I'm looking for, for whoever is gonna go out and do that in the world.

**Daniel Whitenack:** Personal soundtrack, and narration, and vibe...

**Chris Benson:** My life.

**Daniel Whitenack:** Yeah.

**Break**: \[00:19:20.24\]

**Daniel Whitenack:** A lot of these things, like I say, are moving into this multimodal sphere... And it might be worth just kind of looking back a little bit at how we got to where we're at in terms of multimodal functionality. Sort of how that gradually has changed over time, from NLP and speech to multimodal models that we're seeing now. I think one good way, if we kind of step back and look at it on a holistic, or historical standpoint, you kind of started out with modes of data processing that were maybe separated, but often tied together in a sort of chained way. We didn't really think about it chaining at the time, but you had speech synthesis models, for example, that were really specifically trained to only do text to speech. And in some cases, even that was broken up into submodels of like a vocoder, and other types of models.

And you had text-to-text models, you had maybe computer vision models that would process images to do object recognition, or even videos in certain cases, or frames of videos... But all of these were specializations. So the whole idea of there being computer vision as a specialization is that I am specializing in models that process this mode of data, right? And speech technology, the discipline of speech technology is a discipline of really focusing on processing, either speech inputs, or speech outputs... And then "NLP" had special models that would take in text, and maybe classify or detect entities, or do machine translation, or these sorts of things. So that historically was kind of how the field was developing. And if we skip kind of the middle portion and come back to it, now we've gotten to a point where there's seemingly these large foundation models that are able to take in multiple inputs at the same time, of multiple modes - so for example an image and text, in the same input, paired together - and answer a question. So this would be like what we see with GPT Vision, or we see a text prompt or even a video input, like we have seen with Gemini recently, where you can import a whole video and ask for a summary of all the visual components, and that sort of thing. That's kind of, from my end, how I view the book ends. Is that also from your standpoint? Any comments on that, Chris, in terms of how we've progressed from one end to the other of that?

**Chris Benson:** I'll pivot slightly in response to that, and say as you were describing that, it really resonated with me with something else that I've been thinking in that development... And that is, I consume a lot of content through audiobooks. Anytime I'm kind of on autopilot, driving, or mowing the lawn, or doing any kind of thing, I'm listening to audiobooks, for learning purposes mostly, at kind of double speed; the fastest my brain can process it, because I like to consume as much as I can.

**Daniel Whitenack:** I can't do that. My mind is too slow, Chris.

**Chris Benson:** No, you get used to it after a while... But it's just to get the information in. And I just went through a really Pulitzer Prize-winning book through audio called An Immense World, by Ed Young, which is fascinating, and I highly recommend it to anybody that wants to do it... But it is all about the way we and all animals - not only humans, but all the animals in their unique ways, perceive the world through their senses, and how vastly different those are. And the theme that came up to me throughout that was how multimodal everything about humans are. The way that we learn, our experiences are all multimodal. We don't have just vision, and just audio, and just text. We're taking it all in at the same time.

I think this progression that we've seen in terms of moving into multimodal this year has been really fascinating in terms of coming into really how we take in information and how we learn... And I think, going back to Udio today, and seeing what they're doing, and looking at the other multimodal capabilities that we've been learning, it feels like we're finally getting to some -- I know we keep saying this; it's always kind of cool at the moment when the new thing comes out... But it feels like it's really aligning with what it means to be human as well, ironically. That's the background thought process I had as you were going through that.

**Daniel Whitenack:** \[00:26:21.06\] Yeah, there's these scenarios in which knowledge is definitely -- like, we process knowledge across multiple modes of data inputs... And many things are not all represented in text, or in any given mode. And I think you've seen this already kind of utility over this with things like GPT Vision, which is a kind of visual instruction-tuned model... And maybe that's something to share with the audience. If you're not familiar, there's kind of this -- the music generation stuff, maybe that's a little bit newer, but there's kind of this ongoing work in visual instruction tuning. And this would be the type of model in which you would have an image input, and maybe a text prompt. And traditionally, I remember -- I think there's even some of these models still that are quite popular to use on, for example, AWS Textract, for example, is an OCR system, but you can also do visual question-answering. Now, it used to be you had a specific model architecture for visual question-answering; it was a research topic in and of itself. There was a specialized model... And this kind of illustrates some of the progression that we've had. There was a very specific discipline around visual question-answering, and very specific models that could do those things. And they advanced. But then, recently, you've got what has begun being termed visual instruction tuning for models, where the models are actually similar foundation models to what people are using for other modes.

So for example, if we look at the LLLaVA model; so not LLaMA, but LLLaVA - maybe a bit hard to distinguish in the audio... That's an open source manifestation of the GPT Vision system, or a similar functionality to that. And if we look at how that operates, it actually is built off of - and this is kind of, we talk about this a lot on the podcast, Chris, where you're always sort of building on the shoulders of giants and a lot of what's come before, even though some of these functionalities seem to pop up out of nowhere. But there are kind of previous signals. And Chris, I don't know if you remember, we I think had an episode where we talked about CLIP...

**Chris Benson:** Yes.

**Daniel Whitenack:** ...which was a multimodal way to embed both text and images. Something developed by Open AI.

**Chris Benson:** Yes. Contrastive Language Image Pre-training is what CLIP is, from Open AI.

**Daniel Whitenack:** Correct. Which thankfully is open to everyone back in the days when Open AI was open, and we can still use it. But CLIP allows you to embed an image or text in a similar embedding space, which means you're converting an image or a piece of text into a set of numbers, and if you compare those sets of numbers in that vector space, you can actually find things that are semantically similar by the distance between those vectors... Which is interesting, and kind of makes immediate sense if you're doing text-to-text things. The semantics of one piece of text, or the meaning of one piece of text could be similar to the meaning of another piece of text.

\[00:30:01.16\] It's very intriguing though if you make this multimodal and say "A nice sunset on a beach in Florida", and then you have an image of a sunset somewhere on a beach, and then you have an image of a car driving through New York, and then you have an image of a spaceship in outer space... And you could actually find which of those images is semantically similar to a text input, right? So that's kind of the CLIP way of embedding things.

And then on the other side you have large language models, which can take a text prompt, reason over that text prompt even though it's not really reasoning, it's just auto completing... But we can think, functionally, it takes in that prompt and outputs some output related to the question that's input, the query, the instruction, that sort of thing.

So what they've done with LLLaVA, which has been around for some time, and people have built different types of LLaVA models, and sort of its own family in and of itself, is paired the CLIP-style embedding model, or a visual encoding system, with a large language model, and then created this text and image input.

So if you look at the architecture of what they do, what happens is they have an image input that goes through the vision encoder, for example CLIP. That produces an embedding. They have a language model, like LLaMA, that accepts a language instruction or text input, and that creates an internal hidden representation embedding... And the first thing they do is they train a projection matrix for the vision encoder.

**Chris Benson:** And can you talk real quick about what a projection matrix is?

**Daniel Whitenack:** Yeah, yeah. So the language model produces an embedded representation of the text, the vision model creates an embedded representation of the image, but these two are different model architectures, and the embeddings can't be directly compared one to another, because one's LLaMA and one's CLIP, even though they functionally produce embeddings. So the projection matrix is a sort of translation of the output of the vision encoder, the CLIP model into a space in which it's concatenated or combined together in some way with the output of the LLaMA model. And that is a trained projection such that it accomplishes the end task that you're training for, like a visual question-answering, or reasoning over an image, that sort of thing.

So that's the initial pre training, is finding that projection matrix. And the interesting thing here is actually this -- it's a combination of models, which is intriguing, because you can always update LLaMA to the next cool thing, like Gemma. Or you could always update CLIP to the next cool thing, like BridgeTower from Intel, and combine them in really interesting ways, and do this retraining.

And then people then fine-tune these models based on datasets that they've created for specific tasks, like we've seen with language models. So there might be a science question and answer for reasoning over science images, or sort of visual chat in a specific domain.

So to give people a sense of the functionality of this type of model, if you haven't played around with GPT Vision or something like that, one of the examples on the LLaVA paper site which I find interesting is there's like a meme image of a world map, but it's made out of chicken nuggets... And so it looks like a world, but it's made out of chicken nuggets. So the picture is there, and then the user input, the text input along with the image input is "Can you explain this meme in detail?" So there's some element of the question that's needed to answer that question, because if you're saying this is a meme, you're asking for specific details, right? And then you definitely need the visual content to answer that question. Otherwise, you would just hallucinate something about a meme.

**Chris Benson:** \[00:34:22.20\] Sure.

**Daniel Whitenack:** So the LLaVA answer is "The meme in this image is a creative and humorous take on food, with a focus on chicken nuggets as the center of the Universe. The meme begins etc." and it essentially explains the humor, which is maybe not the best way to make something more humorous. \[laughs\]

**Chris Benson:** Yeah. A little bit dry there.

**Daniel Whitenack:** Yeah. But you can think of other cases where you would need sort of visual input and text input to create an answer, right? Like if you say "What was the guy who raised his right hand in this video wearing?" That necessarily -- like, as a human, we would process that both from the text input standpoint and the visual content standpoint.

And so I think it's really interesting this sort of exploration of not just chained models from multiple modes together, like we've seen in the past kind of in history, where you have a speech model, you have a computer vision model, you have a language model, and you can chain them together in interesting ways. But this joint encoding, this joint processing of multiple modes of data at the same time is actually required for some of the types of reasoning that we might want to augment or automate from a standpoint of how we process information as humans.

So yeah, I would recommend that people look into this LLaVA model. It's open, there's multiple -- like I say, it's sort of a family or a style of doing things; there's a bunch of examples of that on Hugging Face and demos that you can actually try out, and try kind of an open version of what you get with GPT vision.

**Chris Benson:** That sounds good. I have just been struck through our entire conversation, going back to what I mentioned earlier, about how close this is in terms of matching how we as humans process, as you took us through the merging of the modalities a few minutes ago, and me having just -- I'm actually in the middle of a... I think it's called The Great Courses, and about the Best Brain, and it's talking about how exactly that happens in our brain, to convert it into a form which is chemical, electrical in nature, for our brains to actually operate on, since we don't actually see and smell.

So it's just fascinating that while the underlying AI models are not the way the brain operates, that kind of the modalities are starting to merge in that way. It's really neat. So thank you very much for taking us through that understanding of how multi-modality works in a practical sense. You lived up to Practical AI in all ways there.

**Daniel Whitenack:** Well, this episode has a little bit for everybody, where you get a fun Broadway song, and then we also talk about projection matrices... So there you go. Something for everyone. I enjoyed it, Chris. And yeah, I think this will be a trend that we continue seeing throughout this year. So if you haven't got hands-on and tried a little bit of this multimodal stuff, whether you go to Udio and try to create a song, or you go to ChatGPT and try to use GPT Vision, or Gemini, and process of video, or download the LLaVA model and try to run some multimodal queries... That's the best way to sort of get an intuition for how these things behave, and what's possible; we'd really encourage you to get hands-on. So homework assignment between now and next episode, I guess.

**Chris Benson:** Absolutely.

**Daniel Whitenack:** Alright. It's been fun, Chris. We'll talk to you soon.

**Chris Benson:** Take care, Daniel.
