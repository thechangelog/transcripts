**Daniel Whitenack:** Welcome to another episode of Practical AI. This is Daniel Whitenack. I am a data scientist with SIL International, and I'm joined as always by my co-host, Chris Benson, who is a principal AI strategist at Lockheed Martin. How are you doing, Chris?

**Chris Benson:** I'm hanging in there. How are you doing, Daniel?

**Daniel Whitenack:** Doing pretty good. As we talked about the last couple of weeks, I've been ordering parts for a AI workstation computer, and it's sitting next to me and it's running.

**Chris Benson:** Oh, nice...

**Daniel Whitenack:** I am successfully -- or at least it appears that I'm successfully over-fitting a model on the GPU... So I'll have to deal with that after recording. But it's running, and it's not overheating yet. It's kind of stable at a (I think) reasonable temperature... So I'm happy on that front.

**Chris Benson:** It's funny, because as we're on this call, we're on Zoom, and in the video you have the data center in the background. I just find it funny...

**Daniel Whitenack:** Yeah, a bunch of DGX NVIDIA machines, or whatever...

**Chris Benson:** There you go. But that's not what you're using with the workstation though...

**Daniel Whitenack:** No, mine is much smaller... Although it's bigger than I thought, because after I put the GPU in, the case would not close, so... I guess that just is like airflow...

**Chris Benson:** Perfect. There you go. It solved itself.

**Daniel Whitenack:** Yeah.

**Chris Benson:** I'm just -- I'm doing okay; I did something really stupid this morning. I was reminded that I'm a klutz. I fell when I was running, and it looks like I broke a rib...

**Daniel Whitenack:** Oh, wow.

**Chris Benson:** \[04:00\] And you'd think that I'd do something about that, but I'm lucky - I have a fourth year medical student for a step daughter... So I called her up, and we agreed because Covid is running rampant we were not gonna have me go to the emergency room...

**Daniel Whitenack:** Wow.

**Chris Benson:** So she said the treatment would be the same either way, so I'm just kind of cranking through the day, doing my thing, and now we're recording. We're having fun, man...

**Daniel Whitenack:** You're really pushing through the pain for the AI podcast.

**Chris Benson:** There you go. You've gotta be practical.

**Daniel Whitenack:** Yeah, that's something. Feel free to...

**Chris Benson:** Scream?

**Daniel Whitenack:** ...mute yourself and scream a couple of times, or whatever you need to do...

**Chris Benson:** \[laughs\] Okay, will do.

**Daniel Whitenack:** Well, going from that note to something completely different, as the show might say... We're really excited today because we have a follow-up on a show that we did quite a while ago. Actually, this was episode 35, so quite a while ago we had Clément Delangue on from Hugging Face, to talk about what they're doing... And now we're very excited to have Sasha Rush joining us, who is an associate professor at Cornell Tech, and is also working at Hugging Face on a bunch of different things, and involved in the Transformers library... So we're really excited to have you, Sasha, to hear more about Hugging Face.

**Sasha Rush:** Oh, thanks. Thanks for having me on.

**Daniel Whitenack:** Yeah. Before we jump into all of that, could you just give us a little bit of a sense of your background, and how you came into the field of AI, and eventually into NLP, and what you're doing now?

**Sasha Rush:** Sure, yeah. I've been at Cornell Tech for the last year... And if you don't know about Cornell Tech, it's a new university; it's about seven years old, but we've had buildings for the last two years. Our buildings are right in the center of New York City, on an island in the middle of East River... So every day we kind of take a little gondola over to the island and teach courses there.

**Daniel Whitenack:** Wow, how romantic. Yeah.

**Sasha Rush:** It's a pretty fun place. And yes, I've been a professor here for the last year. Before that, I was a professor at Harvard for about 4,5 years... And before that I was a post-doc at Facebook AI Research, also in New York. So that's my background.

These days I have a lab here at Cornell Tech, and I work with the team at Hugging Face, who are in Brooklyn... So it's nice. Everything's centered in New York City. There's lots of interesting AI and machine learning going around here these days.

So my background - after graduating college I worked as a software engineer for about three years. I'm kind of a person who very much enjoys coding, and I have that as the first part of my personality. I then went into graduate school to study natural language processing. When I got into natural language processing - I think I really got into it because I was interested in language, and particularly the algorithms and data structures involved in studying and understanding how language works.

At that time, I did a lot of machine learning, but machine learning wasn't the primary way we studied language. There were all sorts of other aspects about how computers and language interacted... And actually, my dissertation was much more about, say, the optimization aspects of language in a discreet sense; kind of how you construct trees that represent different linguistic phenomena, and how these interact with classical computer science algorithms.

And when I graduated my Ph.D, I graduated right into the beginning of really kind of intense deep learning for language... And doing my post-doc at Facebook, everyone was kind of intensely interested in we could do translation, how we could do question answering completely from data, using deep learning-based systems. So I kind of dove right into that world...

I sat next to the folks who were working on \[unintelligible 00:07:57.13\] at the time, and then it was written in Lua, and a couple years later they converted it to Python, and it became PyTorch. So I've always been very fascinated by the tools and structures that make it possible to do these sorts of systems in an open source way.

\[08:15\] Some other things I've worked on in the past - I worked on a library called OpenNMT, which was an open source translation library written in PyTorch and TensorFlow... And we worked with a lot of translation companies, particularly in Europe, to build open source tools to let them build their own custom Google Translate-like services. That was a really fun project, and it kind of tied together the research we were doing in my lab, which was on questions of how to improve translation, how to speed it up, how to make it work on devices, with questions of how in an open source world these were used.

**Daniel Whitenack:** So I'm kind of curious, since you've kind of alluded a little bit to one thing that's happened in recent years in terms of how people maybe used to think about NLP - and still do, for many tasks... As far as like computational linguists have been thinking about these things for a very long time... But now there's been all of this focus on extending these tasks to maybe generalized machine learning-type problems. Could you give your perspective on how that shift has happened, and what that's meant, both in terms of momentum in the field and people getting involved in the field, and all of that? What are your thoughts on that?

**Sasha Rush:** Yeah, let's see... So I think there's a couple different perspectives. I don't wanna make it seem like data-driven or machine learning systems... We're kind of new to NLP. There's a long history of use of learning, both in NLP, but also kind of learning systems developed in NLP being used in other areas... So I think it's a field that's always kind of interacted with these methods in a kind of open dialogue.

I think the phenomenon we're seeing now is more extreme, and it's extreme for a couple of reasons. One is the sheer growth of all these fields. We're seeing exponential growth in conference sizes and paper submissions and usage of this technology... Which I honestly think is a great problem to have, but it obviously brings with it a lot of challenges. They're kind of organizational questions of running communities or trying to make progress in this world.

I think the other question is "What does it mean in terms of methods?" and we're seeing lots of interesting things along those lines. I think that people in the field are adapting to the challenges that come from the world around. As researchers, we're interested in solving the problems that exist now, and a lot of the problems in NLP are suddenly kind of dataset problems - how do we construct interesting, novel and difficult datasets; how do we analyze models to understand what they're doing and how they're structured and what they're learning; what kind of societal questions of "How do we understand what biases they might have?" or "What issues they might bring?", or even how they might learn, what signals are they picking up on. So there's no shortage of interesting research going on. What's interesting is maybe less so the "How do you make the benchmark problem go up X number of points?"

**Chris Benson:** I'm kind of curious - I've been thinking about listening to this, and -- you know, we had Clém on the show back (I think it was) episode \#35...

**Daniel Whitenack:** \#35.

**Chris Benson:** Yeah, going way back.

**Daniel Whitenack:** It was before the Transformers library came out, which we'll definitely talk about later.

**Chris Benson:** \[11:59\] Yeah, totally. I think that was what I was thinking - the fact that when we were talking to Clem, we were really focused on social AI, and chatbots, and similar tools and approaches, and then in that time between talking to you today and talking to Clem, Transformers came out, and you guys really created the definitive transformer library... And we've been talking about Hugging Face in the context of Transformers since then. And I guess - how did Hugging Face make that transition? What caused that? It's an interesting turn for the history of the company.

**Sasha Rush:** Yeah, I guess I should give some perspective. I've actually only worked at Hugging Face for about eight months now, and honestly, I ended up working there because I was such a fan. I observed them in the same way that you did, which was as an external observer seeing them make this transition so impressively from working on chatbots, to being this open source powerhouse... And I guess as someone who -- I mean, who knows what it means in open source, but as a competitor, as someone building his own libraries in this space, they were just doing it so much better than I was. I think that that always impressed me.

Now, I should say, even before Transformers came out as an official library, I have memories of -- well, I guess now we're getting into some of the technical terminology... When BERT came out as a paper, there was a kind of rush to port BERT to a PyTorch version... And I was working a little bit on this at my own pace, and Hugging Face very quickly put out their own version of this; maybe as part of their chatbot library, maybe it was a separate thing... And I think it was really useful just to have that immediately, right after the research came. I was very appreciative of that, even at the time.

**Daniel Whitenack:** What's the state of Hugging Face now in terms of -- I know that they've raised a round of funding. It seems like from what I'm picking up on Twitter that the team is growing a little bit, but from chatting with you before, it seems like it's also still very distributed. There might be some kind of creative relationships, like -- of course, you're in Academia, but you're also with Hugging Face... So what's the state of the Hugging Face team now, and how is it growing to support this really rich ecosystem of tools?

**Sasha Rush:** Yeah, so we have about 15-20 people, depending on how you count, who are mainly focused or entirely focused on this open source tool development. The main library is Transformers, which we've talked about, and kind of is the center of what we're developing... But now there's also several other really interesting open source projects going on.

We have a project based on NLP datasets, that now has almost 150 different open datasets that you can easily browse and download and use in a very efficient and kind of easy to extend way. We also have a library of tokenizers that's written in Rust, kind of a low-level library that lets you do very fast tokenization and training... And then all of this is joined together by a hug of different models and structures that people have uploaded. If you go to the website, you can see this really rich ecosystem of different models, of different datasets and of different tokenizers that kind of built this all together.

Practically, it is an interesting question of what the company is like. I mentioned earlier that I've been there longer now probably in Covid than not in Covid...

**Daniel Whitenack:** Yeah, I guess that's true...

**Sasha Rush:** But it's always been a distributed company. There's a team in Paris and a team in New York. It's about half and half. But now we also have interns in California, and some interns in China, some people in different places... So we mostly communicate through Slack and through other distributed means.

**Break:** \[15:53\]

**Chris Benson:** We've alluded to Transformers several times now and kind of talked around it a little bit... For those who are new to the topic, could you define what is a transformer? It's been a big, big deal in recent months, and it has really changed NLP... But a lot of people may not be familiar with it or have not kept up to date. Could you just give us a basic run-through from the way you see it?

**Sasha Rush:** Sure. So I think the term transformer really kind of implicitly applies two different innovations... And both of these were actually connected to each other, but both pretty transformative in their own right. I'll start with the first. The first is the transformer as an architecture. This is the particular development of a very specific type of architecture that came out. The dominant architecture in natural language processing for about five years had been recurrent neural networks, particularly the LSTM network, and was used basically for everything that we did in the field.

The transformer proposed a different, and in fact simpler architecture, that instead of relying on these recurrent connections, connections over time, instead used a kind of random addressing style of architecture based on a mechanism called attention. The way it works is that you basically have everything you've seen in the past ready to access at every point in time, and the main neural network step that you take is a kind of soft, random addressing over all your previous history, and you use that in order to compute the next stage in your sequence.

So instead of keeping a fixed-length vector that gets transformed over time, you keep around everything and you basically search through it at every stage in the process. This architecture wasn't new in its own right, but kind of demonstrating that it was more effective than recurrent neural networks, and that it particularly could scale to both fast training and also very large models, better than recurrent neural networks; that was a big breakthrough in the field. The first results showed large improvements on translation accuracy.

**Chris Benson:** Just a quick question - you mentioned attention and you sort of defined it in the larger thing, but just because it's a key aspect of that. Could you talk about what part of that was attention, just to differentiate it from the larger process?

**Sasha Rush:** Sure. Yeah, and I should say the original transformer paper has the title "Attention is all you need", so it's the key aspect of what makes a transformer. Attention itself is actually quite simple, and it's actually a very intuitively-appealing idea. So imagine you have a set of objects - say five different objects - and you wanna have a neural network decide which one of those objects you wanna use. You might have a softmax layer, where the softmax gives you a probabilty distribution over which aspect you wanna pick, so which of the five things you should choose. You could just end there, and if you end it there, we would just call it multi-class classification.

\[19:52\] What attention does is it uses that distribution, the probability of each of the five things, and feeds that probability back into the model itself. So it would give a weight to each of the five items, and then feed them back in with that weight. So imagine I have a sentence like "The man walked the dog", and I wanna predict the next word in that sentence. Those previous five words would be the five items I'd wanna choose from, and attention would say "How much weight should I give to each of those previous five words when trying to decide on the next word?" So maybe I give it 80% to "man", 5% to "the" etc, and use those in the next step of the process.

All the transformer is is a kind of repeated version of that game, or say 6 to 24 different rounds, where each time you look back at what you've previously decided, use it to feed it back into your network, and then use that to try to predict the next step along the line.

**Daniel Whitenack:** So you mentioned that this architecture also - in addition to having this new structure, also allowed some performance benefits and scaling as well. I was wondering if you could just give us a sense of -- because I know this is something people see out there, and in particular I think there was a thread on Twitter about how many parameters are in the Hugging Face model hub and all of that... So I was wondering if you could just give us a sense of what are the scale of models that are out there. People hear about BERT, and GPT-2, and now of course we're getting flooded with GPT-3 things... What are the scale of these models, both in terms of parameters, and also the data needed to actually train them?

**Sasha Rush:** It's a good question. I never know these numbers off-hand... Models range from 50 million parameters to tens of billions of parameters at the top end. In practice, some of the larger models - it's unclear how you would even use them, in say a standard GPU hardware... But scale has been a big, main aspect of Transformers usage. But actually, maybe let me take that question to talk a little bit about the second main innovation of the transformer.

I talked about the architecture, but I think it's important to also get a sense of the second innovation, because I think it actually matters even more. This is a kind of innovation that started around the use of a model called ELMo. There were a couple other variants, one called CoVe, and then this all kind of peaked with the release of a model called BERT... And the idea behind these models is to take a neural network, in the case of BERT a transformer, and to train it on a very simple task, at a very massive data scale.

In the case of BERT, the task is similar to what I've described previously. You're given a bunch of words and you randomly remove some of the words and try to predict them back. It's a game that you can play yourself and try to get a sense of how easy or hard it is to do. Sometimes it's really easy, sometimes it's really challenging... But the point isn't the task itself, the point is to give the model a task that would require it to know something about language in order to complete, and then train it at as big a scale as you can.

So it's hard to give you a sense of this. One thing that's nice about language is you can store a ton of it in very little space... So if you have all of Wikipedia, you can basically fit it on your computer. And companies like Google basically have a non-trivial amount of all the text that's ever been produced... So you can kind of take all that text, throw it into one of these models, and then train it on a simple task. It turns out that in the process of trying to complete this task, the model learns a lot about how language works. We say it learns very good features for a language.

Once you've done that, once you've trained it on all the language that you have, you can then apply it to a much smaller task, that you maybe have a small amount of supervised data for. So this idea which people call pre-training is kind of central to how a lot of NLP works these days, and also to how the Transformers library is designed.

**Daniel Whitenack:** \[24:10\] Yeah, I think that's such a great and important point - people kind of get hung up on the size of these models, and it's kind of cool to talk about those things, and in some cases annoying to work with them, because they're so large, and in some cases hard to perform inference with... But yeah, I guess what you're saying is that the task that they're trained on is just intended to help them learn good features. And then the task that you actually want to use them for involves some fine-tuning or transfer learning. Is that right?

**Sasha Rush:** Yeah. And I think -- I mean, I don't wanna claim that this is finished as an idea... I think a lot of the tasks we work on now will have a fine-tuning stage, where you take the model and learn it for a given task. OpenAI has a slightly different model of what they're trying to achieve, which is they're not super-interested in fine-tuning, they wanna kind of just use the model directly, and kind of feed it \[unintelligible 00:25:07.09\]

**Daniel Whitenack:** Gotcha. Yeah, so there is this -- and maybe you can help us through some of this jargon. It seems like people talk about some of these models -- like, they have so much knowledge that you can perform a task right off the bat. I don't know if it's question answering, or information retrieval, or whatever it is, without really much fine-tuning. Is that what you're getting at in that other model?

**Sasha Rush:** Well, I do wanna distinguish two aspects. I think that all the state of the art models on standard, benchmark tasks all use some sort of fine-tuning. That's become a very standard procedure and we kind of understand how that works. But to do fine-tuning you still need some amount of supervised data. I guess we would say it's small to medium amounts, but you need something in domain for the task you're interested in.

I think there's a lot of recent excitement for kind of a crazier idea, which is this kind of zero-shot or one-shot idea of just -- the model should know how to do your task immediately, right off the bat.

**Daniel Whitenack:** Yeah. I think that's where I was going, because they throw around this idea of zero-shot into some degree, it seems, sort of like magical, in many ways, to people, I think...

**Sasha Rush:** Yeah. I don't wanna say anything on record; it's on the research frontier. It might turn out that that's the way to do lots of language tasks, but I think it's still an open question, I would say.

**Chris Benson:** Turning to the transformer library itself, I'm kind of curios -- so recognizing that you've only been there at the company for a limited amount of time, do you have any insight into the motivation that moved the company into this transformer library itself? Was it supporting the other operations, or was it just something that was an opportunity that came up? What took the company there, as far as you're familiar?

**Sasha Rush:** It's a good question. The graph of the usage of this library on GitHub kind of blows me away...

**Daniel Whitenack:** It's pretty insane.

**Sasha Rush:** It went from no users to about 30,000... I think they just hit on something that was -- I guess when you have a hit, maybe that changes the mode of thinking.

**Daniel Whitenack:** Yeah, so maybe you could describe along with that what is the main usage pattern that people are grabbing on to Transformers for? I know there are quite a few different things that you could use the library for, but what do you see as the main thrust of what people are grabbing transformers for? What is that, and how is that being supported?

**Sasha Rush:** \[27:42\] Yeah, this is a great question, and I think in some ways you guys maybe have insight into this that I would be also interested to hear about. Let me start at the high-level. One thing that fascinates me about the current usage of deep learning is that you have people who approach it from many different angles... And in one of our papers we kind of broke this down into three different classes. We talk about there being architects, there being trainers, and then there being end users. I think within the ecosystem, Transformers has different meanings to all three of those people.

If you're a company like OpenAI, or Allen AI, companies at the cutting edge of research training, you use Transformers or related libraries to try to build the next architecture or the next pre-trained model. And that often means running these very large training jobs on multi-GPUs, over many days, and then using Transformers as a way to distribute your model through our hub, and make it easy for people to use it or do adapt it for their tasks.

If you're an expert, but maybe not at the frontend frontier of research, another common use case is this kind of fine-tuning use case, where you have data for your company or for a given problem that you wanna solve, and you bring that data into the library, use it in training mode to fine-tune on your dataset. It may take a couple hours and require some GPUs, but out of that you get a really accurate model for the task you're interested in.

But then at the other end you have end users who wanna use the library as a way of performing standard NLP tasks. You might wanna use it as a way to do summarization, or translation, or an identity recognition or question-answering... And you can often just use it completely in inference mode, maybe not even using Python; just kind of taking up a pre-trained model and using it directly for your task in that kind of setting.

So I think all of these people are within the machine learning ecosystem, but they kind of have different end goals or different use cases, and I think we're trying to aim to support any of those outcomes.

**Chris Benson:** I know you have a model hub, and I was wondering if you could talk about what the users can find there and start incorporating into their own projects, what does the growth of that hub look like... What kind of ecosystem has developed around it?

**Sasha Rush:** Yeah, so the model hub is part of the open source library. If you wanna use a model in the library, you say `model.load`, and it just pulls it directly down from the model hub. You can do that with any of the models that are there. We have a set of models that have brand names that are very often used. Those include models like GPT-2, or variants of BERT, or RoBERTa, or new models like this model called BART, or a model called T5... But then it also includes a long tail of other models from the community. This includes models that are pretrained to target, say, biomedical text, or extraction from scientific documents. Or models that are trained in many different languages by the communities interested in those languages themselves. Or models that are experimental and try to do other things. One popular aspect is models that are very small, models that you can run on your phone.

So the idea of the model is to have all of those have the same API, and have the same easy way to use them... And one thing that we think is really interesting is that unlike generic model hubs like TensorFlow's hub or PyTorch's hub, because our models are all of the same form, we can build a lot of tools and machinery around using them.

For instance, we have a visualizer that works for all of our models. You can just upload your own model and get a really interesting visualization of its internal structure. Or this open source project -- I think it's called \[unintelligible 00:31:41.20\] built an adversarial attack system. It's able to generically build attacks to any of our models in our hub. So because they all have the same interface, it allows people to do these really longitudinal research projects across everything that's going on in the hub itself.

\[32:01\] And then I should mention that now we have an inference API. On any of the pages you can just type in some text, and it will run against that model. You can even call that from your own code directly, without ever running everything on your machine... Just run it on one of these servers. We even have a Twitter bot that we just put up last week, where you can kind of tweet at it and it will run a model against your tweet.

**Daniel Whitenack:** Yeah, that's great. I was wondering - before we leave the topic of the open source projects, you also mention these other libraries, tokenizers in NLP, which includes the datasets and evaluation metrics... How do those fit into the puzzle, and maybe interact and influence one another?

**Sasha Rush:** At the end of the day, our interest is in building open source NLP, and I think there will continue to be new variants of transformers and new pre-trained models... But as I mentioned earlier, an increasing area of innovation in NLP is to try to find the right datasets to challenge these models in interesting ways. So there's a lot of energy in dataset construction these days, and a proliferation of really interesting datasets, of different sizes and scopes.

Tom Wolf, who's our main open source engineer, got very passionate about building up open source datasets, and build a library that makes it very easy to use these models in Python, and really makes it extremely efficient to use complex datasets directly within your code, across many different aspects of NLP. We have a website that you can go to, where you can browse through any of these datasets and use them in various tasks.

One nice aspect of this is that we have a lot of examples of how to use transformers, and they have a lot of custom dataset code just to run the examples; but now that that code has all kind of been factored out, you can just kind of pull it in from NLP, and then run the examples focusing on the machine learning parts.

**Break:** \[34:12\]

**Chris Benson:** So to take the conversation a slightly different direction for a moment, I know from talking before the show that you put together ICLR, and you kind of manage that \[unintelligible 00:35:08.08\] which is a research conference... And I'm really interested at this point -- we're in the time of Covid-19, and so much has changed across all of work, but particularly conferences; many of the are going online, becoming virtual like that. I'm really interested in what that was like, and what your experience doing it this way was, and what worked, what didn't... I'm just curious, because I think a lot of people are waiting to see what conferences are turning into, and do they wanna continue to go down that route, or something...

**Sasha Rush:** Yeah, this year I was the general chair of the International Conference of Learning Representations (ICLR). It's a big machine learning conference, and really the only one focused completely on deep learning. It was interesting, I had the chance of being the program chair for the conference last year, where we had the conference in New Orleans... And then this year I was the general chair, and by about December we were getting prepped, and then by February/March it became increasingly clear that we weren't going to be able to have this conference live.

\[36:16\] So I think we were the first AI conference to really have to be completely virtual. We had about a month-and-a-half before the conference to really come up with something new... And we had this wonderful team led by the program chair this year, Shakir Mohamed. And we wanted to do something that fit the spirit of the conference, and so we sat down and wrote a website for the conference from scratch... And we built a website that was based around this idea that everyone at the conference would be in kind of a Slack-like chatroom; we used an open source platform for that... And that every paper would have its own page, with a video of the work, and a chatroom for that paper, so people would be able to talk about it or discuss it within that setting itself. In addition, we built out a bunch of social gatherings that people could have, and a kind of calendar for the whole event.

The main challenge is how do you run a conference asynchronous in this way? We didn't really think it was possible to have everyone in the same place at the same time, so we wanted to use things like chatrooms that feel more asynchronous, particularly with an international audience.

The conference itself actually was really fun. We had a pretty large increase in attendance over the past years. We had people from all over the world, particularly from some places that would have been difficult to attend a conference in other years... And a ton of engagement, a lot of \[unintelligible 00:37:55.01\] tremendous amount of times. It was maybe about 100,000 messages over the chat system over a couple days.

I think there were challenges. I think it's hard to get the same kind of spirit of having coffee or just chatting informally in this sort of event. Things like Twitter are helpful, but don't have the same kind of intimacy.

But there were also kind of nice things... We ran these kind of mentorship sessions where one person was able to chat with 10-20 folks who were interested in mentorship in a kind of one-to-many model, that actually I think might have been difficult at a conference, but kind of works actually pretty nicely over Zoom.

Anyway, it was an experimental setup. Since then, we open sourced all the tools that we built for the conference. You can get it online if you search for "Mini Conf". The software has been used for about 5-6 other major conferences since then, including ACL this year, which is the big NLP conference, and ICML, which is another machine learning conference venue... I don't think we've cracked it, but in the meantime it's nice to have something we built as a community.

**Daniel Whitenack:** Yeah, I attended the conference ICLR, and I was super-impressed with everything that was put together, especially given the timeframe. I know you must have had some very late nights fueled by very much coffee... So congratulations on in such a short time period putting together something that was so good.

I know one of the things that I appreciated... You know, I've been to other research conferences in person, and posters or talks or something like that - there's just so much going on that it is hard to do that -- like, you can't go to this talk at the same time as this talk, and it's hard to find that person afterwards and ask them some questions about their work. Maybe you walk by their poster, or something... So it was kind of nice to just scroll through and look at the different videos, especially given the timezone difference, and shoot the authors a message that they could respond to asynchronously, so that that question didn't get lost, or something like that. I've found that extremely useful.

\[40:08\] What are your thoughts on assuming maybe that at some point in the future research conferences will have an in-person component again? Do you see a sort of hybrid scenario developing? Because I know one of the things that -- like with NeurIPS and all of that, it was a struggle for so many years if people were getting visas as well... Which is just such a shame. So many people from Africa or from Asia that were doing amazing work, but couldn't actually be at the conference because of visa issues, or cost issues, or whatever it is... So how do you see that future happening?

**Sasha Rush:** Yeah, it's a question we're talking actually a lot about at ICLR right now. I don't think we have an answer, and I think a lot of it will depend on what the world looks like in a couple years.

So one thing we're committed to at ICLR is having the conference at venues in other locations, locations that have not been visited as much in the past. One thing that was very disappointing was that this year's conference for ICLR was supposed to be in Ethiopia, in Addis Ababa, and we were all really disappointed that we couldn't make it out there. It would have been a really interesting event. So hopefully we'll continue to have conferences in a wider range of locations.

But as I was saying earlier, all these areas are experiencing such hyper-growth that ways of dealing with scale that doesn't lose a sense of interaction is a major challenge for the community... So I think we need to be creative about ways to handle that problem and ways of maybe giving people the same experience that I think, or at least I feel like I had when I was first a graduate student, that kind of inspired me to continue in the field. I don't know what that would look like; maybe it looks like something more distributed, with a virtual component.

**Chris Benson:** I'm wondering also, turning the corner a little bit, on just NLP in general. You're doing the work that you're doing, you're right at the center of the NLP world in that way, and it certainly -- you know, Daniel and I talk all the time on these episodes about the fact that the last couple years has felt like NLP has really come of age; you might say a golden age of NLP is how it feels like we're in... And before that we had seen CNNs have their moment... As we've arrived where we are so far in NLP, what does the future look like to you? What kind of big challenges are open and should be focused on? What are your thoughts there from this point forward?

**Sasha Rush:** It's a hard question...

**Chris Benson:** \[42:44\] Big one.

**Sasha Rush:** Yeah... In some ways, as someone who's been working in NLP for a while, it's been really neat. I think it's way better than I could have possibly expected; seeing things like translation get to the point where it's at now is just awe-inspiring to me. It's just such a useful thing, and have it work the way it does is awesome.

So what are the challenges now? I think there's a bunch. I think computer vision, for all its successes, has also had a lot of issues... And there's a lot of conversation in NLP about how to some of the issues or to have those conversations earlier rather than later. Things like what we've seen with facial recognition as a technology, and questions about \[unintelligible 00:43:27.04\] challenging point... And we've somehow managed to solve a lot of the natural language processing questions without solving some of the computational linguistics questions... Like, things work, but we have no real sense of why. And as a scientist, that can be a little bit frustrating. We don't really know what signals these models are using to make predictions, and it's very hard to know or to even ask that sort of question in a falsifiable way. "Why did this model classify this sentence in this way? Why did it decide to choose this decision?" These models are, at least from a probabilistic sense, completely global, so it gets kind of challenging to do any sort of analysis along those lines.

But then more practically, I think there's a lot of practical questions that are not solved yet. You mentioned this idea of dealing with massive, massive models. It's not clear if we're gonna need hardware that is 100 times bigger to run these models, or whether you can use \[unintelligible 00:44:32.17\] to make them super-small, or what does it mean to run it locally, or does it just make us more reliant on cloud systems...? I think these all become interesting systems research questions in the short-term.

**Daniel Whitenack:** Awesome. Well, we appreciate you taking a stab at the future predictions, because I know -- I think we've said on the podcast before, any of the predictions we make I feel like are definitely gonna be false, because it's always something unexpected that happens... But I appreciate you giving your perspective, being part of the center of all of this work, and I appreciate you taking time to talk with us and explain a bit about the Transformers library and things that are going on in NLP.

Thank you so much for your contributions to the community as well, in terms of helping conferences and really pushing forward open source... So I appreciate you taking time to join us, and looking forward to digging into all of the great things that Hugging Face is releasing and is doing.

**Sasha Rush:** Thanks so much. Thanks for having me on.
