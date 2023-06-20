**Daniel Whitenack:** Well, hello. We have a very special episode for you today. I got the chance to sit down with the guys from Latent Space, Swyx and Alessio, out in San Francisco. They were kind enough to let me enter their podcast recording studio, and we got a chance to talk about our favorite episodes of both of our shows, and some of the overall takeaways we've had from those discussions. We cover some of the trends that we've been seeing in AI, and they even get a chance to grill me on my opinions about prompt engineering... So enjoy the show.

**Alessio Fanelli:** Hey, everyone, welcome to the Latent Space podcast. This is Alessio, partner and CTO in residence at Decibel Partners. I'm joined by my co-host, Swyx, writer and editor of Latent Space.

**Shawn Wang:** And today, we're very excited to welcome Dan Whitenack to the studio. Welcome, Dan.

**Daniel Whitenack:** What's up, guys? It's great to be here.

**Shawn Wang:** This is a podcast crossover. If you recognize this voice, Dan is the host of Practical FM. He's been in my ear on and off for the past five years, covering the latest and greatest in AI, before it was cool.

**Daniel Whitenack:** Yeah, before the AI hype back in these weird data science times, whatever that is now.

**Shawn Wang:** Yes, everything is merging and converging. So I'll give a little bit of your background, and then we can go into a little bit on your personal side. You got your PhD in mathematical and computational physics, and then you spent 10 years as a data scientist, most recently at SIL International... Which actually, I thought it was an agritech thing, and then I went to the website, it's actually a nonprofit.

**Daniel Whitenack:** Yeah, it's an international NGO. Yeah. So they do language-related work all around the world. So I've spent the last five years building up a team that's been working on kind of low-resource scenarios for AI, if people are familiar with that... So doing machine translation, or speech recognition, that sort of thing, in languages that aren't yet supported.

**Shawn Wang:** Yeah. We'll talk about this later, but I think episode three on Practical AI was already featuring the global community that AI has and addresses.

**Daniel Whitenack:** Yeah, yeah. It's been an important theme throughout the whole time, throughout over 200 episodes.

**Shawn Wang:** Yeah. Yeah. And you've recently left SIL to work on Prediction Guard, which we can talk a little bit more about that... You are also interim senior operations development director at Antique Candle Co.

**Daniel Whitenack:** Yeah, yeah...

**Shawn Wang:** What else should people know about you?

**Daniel Whitenack:** Yeah, I mean, as probably can be noted from the intro, I love working on various projects, and having my hands in a lot of things... But yeah, I code on the side for fun, and that's how I usually get into these side projects, and that sort of thing. But outside of that - yeah, I live in Indiana. I was telling you guys that I'm trying to coin the term "cerebral prairie." So we'll see if that catches on. Probably not, but...

**Shawn Wang:** You're our second guest in a row from Indiana. Linus from Notion was Indiana, and we were talking about how there's a surprising number of international students in there...

**Daniel Whitenack:** Yes, very true.

**Shawn Wang:** And Purdue is a very strong university, so...

**Daniel Whitenack:** Yeah, a very strong university. It's a great place to spend time, and there's a lot of fun things that happen around that area, too. So I'm also very into music, but not any sort of popular music. I play mandolin, and banjo, and guitar, and play folk music...

**Shawn Wang:** Low-resource --

**Daniel Whitenack:** Yeah, low-resource music, low-resource languages... Yeah, all those things; anything low-resource is in my territory, for sure.

**Shawn Wang:** And maybe we can cover the story of Practical AI. How did you start it? Tell us what the early days were , and just fill everyone in.

**Daniel Whitenack:** Yeah, it was kind of a winding journey... Some people might be familiar with the Changelog Podcast, which - I think they've been going now for 11 or 12 years. It's pretty prolific around -- I think, originally, around more open source. Now it's kind of software development in general. But they have a network of podcasts now. And at a Go conference, actually - so I'm a fan of the Go programming language. That's another fun fact. But at GopherCon, I think it was, in 2016 maybe, I met Adams Stacoviak, who is one of the hosts of the Changelog. At the time, I was giving a talk about data science something, I forget, but he kind of pitched me, he's "We've been thinking a lot about doing a data or data science podcast", and at the time he had a name; I think it was Hard Data, or something that, which never caught on, for obvious reasons... But I kind of stored that away, and didn't really do anything with it... But then over the next couple of years I met Chris Benson, who's my co-host on Practical AI, and helped him with a couple of talks at conferences, we met through the Go community as well... And eventually - he was working at a different company at the time; now he's a strategist with Lockheed Martin, working in AI stuff... But he reached out to me and said, "Hey, would you ever consider doing kind of a co-host podcast thing?" And at that point, I remembered my conversation with Adam, so I reached back out to Adam with the Changelog, and then we kind of started working on the idea.

We wanted it to be practical, so at the time -- well, there's a lot of people doing things now with AI, hands-on. Back then there were kind of some podcasts that were really hyped AI; , not practical at all, which is why we kind of came to Practical AI. Something that would actually benefit people. And that's a great thing to hear from people, that when they listen to the show, they do actually learn something that's useful for their day-to-day. That's kind of the goal. Yeah.

**Alessio Fanelli:** \[06:04\] Nice. And I think that's one of the things in common with our podcast. There's a lot of content out there that can get a lot of clicks with fear of AI, and all these different things... And I think we're all focused on more practical and day-to-day usage. Yeah, tell us more about Prediction Guard. That kind of fits into making AI practical and usable.

**Daniel Whitenack:** Yeah, yeah, sure. I appreciate that. So yeah, Prediction Guard is what I've been working on since about Christmas time-ish... Originally, I was thinking a lot about large language model evaluation and model selection, but it's kind of morphed into something else. What I've realized is that there's this market pressure, there's internal company pressure for people to implement these kind of generative AI version of models into their workflows, because enterprises realize the benefits that they could have. But in practice, when they go and they go from Chat GPT, they type in something, it's amazing, and then liek "How do we do this in our enterprise, where we have maybe rules around data privacy, or compliance issues? And also, we want to automate things maybe, or we want to do data extraction... But I just get text vomit out of these models. What do I do with that? I just get unstructured text; how do I build a robust system out of inconsistent text vomit?"

So Prediction Guard is really focused on those two things. One is kind of compliance and running kind of state of the art AI models in a compliant way, and then layering on top of that layers of control for structuring output, and validating output. So some people might be familiar with projects Guardrails, or Guidance, or these things... So we've integrated some of the best of those things into the platform, plus some ways to easily do self-consistency checks, and factuality checks, and other things on top of large language model output.

**Alessio Fanelli:** Nice. We did have \[unintelligible 00:07:57.07\] as a guest... So yeah, that's another episode that people really . Yeah, maybe - just to give people a sense of what Practical AI is as a podcast, do you want to talk about maybe the 2-3 favorite episodes that we have? And we can go -- maybe alternate.

**Shawn Wang:** Back and forth, yeah.

**Alessio Fanelli:** Our favorites, your favorites...

**Shawn Wang:** Yeah. We've done some prep for this episode, yeah...

**Daniel Whitenack:** Yes, yes.

**Shawn Wang:** I think our conception of this is kind of a review for listeners who are new to us, of either of our podcasts, to go back and revisit their favorites.

**Daniel Whitenack:** Yeah, yeah. I can talk about some personal favorites of mine, and then maybe favorites from the audience... I think some of my personal favorites have actually been - we call them Fully Connected episodes, where Chris and I actually talk through a subject in detail together, without a guest. To be honest, those are great episodes just for me to learn something, have an excuse to learn something. And we've done that recently with ChatGPT and instruction-tuned models, we did it with Stable Diffusion and diffusion models, we did it with AlphaFold... So all of those are episodes with us two, and just talking through how practically can you form a mental model for how these models were trained, and how they work, and what they output. Those are some of my favorites just because I learned a lot, because we do a little bit of prep, we talk through all the details of those... And it helps me form my own sort of intuition around those things.

Another personal favorite for us was - we did a series about AI in Africa. That was really cool. You mentioned the global AI community... We did actually a series of those. They're all labeled "AI for Africa", highlighting things Masakhane. So people don't realize that some of the models that we develop here, in the West Coast, or wherever, they don't work great for all use cases around the world, and there's a lot of thriving grassroots communities, Masakhane, and Turkic Interlingua, and other communities that are really building models for themselves; machine translation, speech recognition models that work for their languages around the world, or agriculture computer vision models that work for their use cases around the world. So those are a couple of highlights on my end.

**Shawn Wang:** \[10:15\] Do we go with our personal highlights? \[laughter\] Yeah, go ahead. I think you already picked one out.

**Alessio Fanelli:** Yeah. I think mine is definitely the episode with Mike Conover from Databricks, who's the person leading the DALL-E efforts there. I think, obviously, the content is great, and Mike is extremely smart and prepared, but I think the passion that he had about these things... The RedPajama dataset came out the morning that we recorded...

**Daniel Whitenack:** Good timing.

**Alessio Fanelli:** ...and we were all kind of nerding out on why that is so interesting. , he was so excited about it, and it's great to see people that have so much excitement about things that they work on. It's kind of an inspiration, in a way, to do the same for us.

**Shawn Wang:** I think personally - so I tend to drive the news-driven episode ones, the event-driven ones, where something will happen in AI, and I'll make a snap decision that we'll have an episode recording on Twitter Spaces, and we'll have just a bunch of people tuned in. I think the one that stood out was the ChatGPT Plugins release, were 4,000 people tuned into that one.

**Daniel Whitenack:** That's crazy.

**Shawn Wang:** And we did an hour of prep. And I think it's important for me as a "journalist" to be the first to report on something major, and to provide perspectives on something major, but also capture an audio history of how people react at the time... Because - this is something that we were talking about in the prep - ChatGPT Plugins have become a disappointment compared to our expectations then. But we captured it; we captured the excitement back then, and we can compare and contrast where we thought things were going, and where things have actually ended up. It's really a nice piece of, I guess, audio journalism.

**Daniel Whitenack:** Yeah. I mean, it was just last year -- I mentioned Stable Diffusion, and all that. We were talking about this as -- I always had in my mind, "Oh, everything's going to image generation. Should I quit doing NLP, and start thinking about image?" And now all I do is NLP and language models. But at the time, that was -- that's what was on our mind.

**Shawn Wang:** And same thing, I was working on a Web UI for Stable Diffusion, just a thousand other frontend developers were, and yesterday was the first time I opened Stable Diffusion in six months. \[laughter\]

**Daniel Whitenack:** And a lot has changed. It's still an area that's developing, but it's not -- yeah, it's not driving thought process at the moment.

**Shawn Wang:** Yeah. Well, especially because - I think it depends on what you think you want to do. And I'm definitely less visual, and more of a text-driven person, so I naturally lean towards LLMs anyway, NLP.

**Daniel Whitenack:** Yeah, I can hit some listener favorites maybe...

**Shawn Wang:** Yeah, crowd favorites. Number three...!

**Daniel Whitenack:** So we have one clear favorite, which is actually -- I would say it's a surprise to me... Not because the guest wasn't good or anything, but just the -- so the topic was Metaflow. I don't know if you've heard of Metaflow. It's a Python package for kind of full stack data science modeling work, developed at Netflix. And we had Ville Tuulos on, who was the creator of that package. And that has had -- it's maybe 30% more listens than any other episode. And I think the title - so we titled it, I think, "From notebooks to production", or something that. Yeah. So it's this idea of "From notebooks to production there's all sorts of things that prevent you from getting the value out of these sorts of methodologies." And my guess would be that talking about that is probably the key feature of that episode. And Metaflow is really cool, people should check it out. It is one way to kind of do this, both versioning, and orchestration, and deployment, and all these things that are really important.

\[14:01\] But I think a takeaway for me was practically bringing into the -- some people might call it full-stack data science, or model lifecycle things. The model lifecycle things interest people so much. So beyond making a single inference, or beyond doing a single finetuning, what is the lifecycle around a machine learning, or an AI project? I think that really fascinates people, because it's the struggle of everyday life in actual practical usage of these models.

So it's one thing to go to Hugging Face, try out a Hugging Face space, and create some cool output, or even just pull down a model and get output. But how do I handle model versioning and orchestration of that in my own infrastructure? How do I tie in my own dataset to that, and do it in a way that is fairly robust? How do I take these data scientists who use all this weird tooling, and mesh them into an organization that deals with DevOps, and non-AI software, and all that. I think those are questions people are just wrestling with all the time.

**Shawn Wang:** Yeah. It feels a little bit in conflict with the trends of foundation models, where the primary appeal is you train once, and then you never touch it again; or you release it as a version, and people kind of just prompt based off of that. And I feel this evolution moving from essentially the MLOps era into, for lack of a better word, LLMOps - how do you feel about that?

**Daniel Whitenack:** I think you're completely right. I think there will always be a place for these models in organizations that are task-specific models, scikit-learn models, or whatever, that solve a particular problem... Because organizations finance organizations, or whatever, will always have a need for explainability, or whatever it might be. But I do think we're moving into a period where -- like, I've had to rebuild a lot of my own intuition as a data scientist, from thinking about gather my data, create my code for training, output my model, serialize it, push it to some hub or something, deploy it, handle orchestration... To now thinking about, "Okay, which of these pre-trained models do I select, and how do I engineer my prompting and my chain?" Maybe going to fine-tuning, that is still a really relevant topic... But some of these things, like I've been working on with Prediction Guard, I think are the things that have a parallel in MLOps, but they're just a slightly different flavor. I think it's how MLPOps is graduating to something else, versus - like, people are still concerned about ops. It's just, like you say, it's kind of a different kind of ops.

**Alessio Fanelli:** Yeah. And I think that's reflected in our most popular episodes, too. So I think all three of our most popular episodes are model-based. They're not more like infrastructure-based. So I think number one is the one with Reza Shabani, where we talked about how they train the Replit code model, and the Amjad \[unintelligible 00:17:12.18\] that they use to figure out whether or not the model was good... And I think that makes sense; for our community it's mostly software engineers and AI engineers. So code models are obviously a hot topic.

**Daniel Whitenack:** Yeah.

**Alessio Fanelli:** Yeah, that was really good, and I think it was one of the first times where we kind of went beyond just listening traditional benchmarks, which is why we did a whole thing about AmjadEval. A lot of companies are using these models, and they're using off-the-shelf benchmarks to do it... Another episode that we'll talk about is the one with Jonathan Frankle from MosaicML, and he also mentioned a lot of the benchmarks are multiple choice, but most production workloads are open-ended text generation questions. So how do you kind of reconcile the two...?

**Daniel Whitenack:** \[17:57\] Yeah. Did you all get in to at all - you know, the whole space of LLMs evaluating LLMs? This was something on a recent episode, we talked to Jerry from LLaMA index about in terms of, on the one hand, generating questions, like you're talking about, to evaluate LLMs, or using an LLM to look at the context, and the response, and provide an evaluation. I think that's definitely something that I think is interesting, and has come up in a few of our episodes recently, where people are struggling to evaluate these things. So yeah, we've seen a similar trend in one direction, thinking about benchmarks, and in another direction, thinking about this sort of on-the-fly or model-based evaluation, which has existed for some time. In machine translation it's very common. So Unbabel uses a model called COMET. That's one of the most popular, highest-performing machine translation evaluators. It's a model, it's not a metric, and that sort of thing. Like Blue. So yeah, that's a trend that we've seen, is evaluation, and specifically evaluation for LLMs, which can kind of get dicey.

**Alessio Fanelli:** Yeah, we did a benchmarks one-on-one episode that is also well liked, and we talked about this concept of like benchmark-driven development. The benchmarks used to evolve every three, four years, and now the models are catching up every six months. So there's kind of this race between the benchmark creators and the models developers, to find like, okay, the state-of-the-art benchmarks is here, and GPT-4 on a lot of them gets 90th percentile results. So GPT-4 is not a GI, therefore to get to a GI, we need better evals for these models to start pushing the boundaries. And yeah, I think a lot of people are experimenting with using models to generate these things... But I don't think there's a clear answer yet.

**Shawn Wang:** Something that I think we were quite surprised to find was specifically in HellaSwag, where the benchmarks, instead of being manually-generated, were adversarially-generated. And then I was very interested in -- I mean, this is kind of segueing; we're not really going in sequence here... Segueing into our second most popular episode, which was on Roboflow, which covered Segment Anything from Meta. I think you guys had a discussion about that, too.

**Daniel Whitenack:** Yeah, it's been mentioned on the show. I don't think we've had a show devoted to it, but...

**Shawn Wang:** Well, the most surprising finding when you read the paper is that something like less than 1% of the data, of the mass that they released, were actually human-generated. A lot of it was AI assisted. So you have essentially models eval-ing models, and the models themselves trained on model-generated data. \[laughter\] Very many layers in at this point.

**Daniel Whitenack:** Yeah. And I know that there's been a few papers recently about the sort of things that were done with LLaMA and other models around model-generated output and datasets... It'll be interesting to see -- I think it's still early days for that. So I think at the very minim what all of these cases show is that models either evaluating models, or using simulated data -- I think back a few years ago, we would probably call this simulated data. I don't think that term is quite as popular now.

**Shawn Wang:** Augmented...

**Daniel Whitenack:** Yeah, or augmentation, data augmentation, simulated data... So I think this has been a topic for some time, but the scale at which we're seeing this done is kind of shocking now, and encouraging, that we can do quite flexible things by combining models together, both at inference time, but also for training purposes.

**Shawn Wang:** Well, have you ever come across this term of mode collapse? What I fear is, especially as someone who cares about low-resource stuff, is that stacking models on top of models on top of models, you just optimize for the median use case, or the modal use case.

**Daniel Whitenack:** \[21:51\] Yeah, so that is a concern. I would say it's a valid concern. I do think that these sort of larger models - and this gets, I guess, more into multilingualism, and the makeup of various datasets of these LLMs... The more that we can have linguistic diversity represented in these LLMs, which I think Cohere for AI just announced a community-driven effort to increase multilinguality in LLM datasets... But I think the more we do that, I think it does benefit the downstream lower-resource languages and lower-resource scenarios more, because we can still do fine-tuning. I mean, we all love to use pre-trained models now... But in my previous work, when you were looking at maybe an Arabic vernacular language, rather than standard Arabic, there's so much standard Arabic in datasets; making that leap to an Arabic vernacular is much, much easier if that Arabic is included in LLM datasets, because you can fine-tune from those. So that is encouraging that can happen more and more. There's still some major challenges there, and especially because most of the content that's being generated out of models is not in Central Siberian Yupik, or one of these languages. So we can't purely rely on those. But I think my hope would be that the larger foundation models see more linguistic diversity over time. And then there's these sort of grassroots organizations, grassroots efforts, like Masakhane and others, that rise up kind of on the other end and say, "Okay, well, we'll work with our language community to develop a dataset that can fine-tune off of these models." And hopefully, there's benefit both ways, in that sense.

**Shawn Wang:** Since you mentioned Masakhane a couple of times, we'll drop the link in the show notes, so people can find it... But what exactly do they do? How big of an impact have they had?

**Daniel Whitenack:** Yeah, so if people aren't familiar, if you go to the link, you'll see - they talk about themselves as a grassroots organization of African NLP researchers creating technology for Africa. So we have our own kind of biases as people in a an English-driven sort of literate world of what technology would be useful for everyone else; it probably makes sense for maybe listeners to say "Well, wouldn't it be great if we could translate Wikipedia into all languages?" Well, maybe, but actually, the reality on the ground is that many language communities don't want Wikipedia translated into their language. That's not how they use their language. Or they're not literate, and they're an oral culture, so they need speech. Texts won't do them any good. So that's why Masakhane started as a sort of grassroots organization of NLP practitioners who understand the context of the domain that they work in, and are able to create models and systems that work in those contexts.

There's others, you can hear them on the AI for Africa episodes that we have, that talk about agriculture use cases... Agriculture use cases in the US might look like John Deere tractor with a camp -- I don't know if people know this, but John Deere tractors or these big tractors, they literally have a Kubernetes cluster on... Like, some of them have a Kubernetes cluster on the tractor. It's like an at-the-edge Kubernetes cluster that runs these models. And when you're laying down pesticide, there's cameras that will actually identify and spray individual weeds, rather than spraying the whole field. So that's at the level that maybe is useful here. In Africa, maybe the more useful thing is around disease, or drought identification, or disaster relief, or other things that. So there's people working in those environments or in those domains that know those domains, that are producing technology for those cases... And I think that's really important.

\[26:05\] So yeah, I'd encourage people to check out Masakhane, and there's other groups liek that. And if you're in the US, or Europe, or wherever, and you want to get involved, there's open arms to say "Hey, come help us do these things." So yeah, get involved, too.

**Shawn Wang:** What else is in your top three?

**Daniel Whitenack:** Oh, yeah... So one recent one from Raj Shah from Hugging Face... Some people might have seen his really cool videos on LinkedIn, or other places... He makes TikTok videos about AI models, which is awesome... And his episode was called "The capabilities of LLMs." And I thought it was really a good way to help me understand the landscape of large language models, and the various features or axes that they're kind of situated in.

So one axis is, for example, closed or open. Can I download the model? But then on top of that, there's another axis, which is, is it available for commercial use, or is it not? And then there's other axes, like - we already talked about multilinguality, but then there's task specificity. There's code gen models, and there's language generation models, and there's of course image generation models, and all of those as well.

So yeah, I think that episode really helps set a good foundation - no pun intended - for language models to understand where they're situated, so when you go to Hugging Face and there's like 200,000 models now, or maybe... I don't know how many models there are... How do I navigate that space and understand what I could pull down? Or do I fit into one of those use cases where it makes sense for me to just connect OpenAI, or Cohere, or Anthropic? It helps kind of situate yourself. So I think that's why that episode was so popular, is he kind of lays all that out in an understandable way.

**Shawn Wang:** How do you personally stay on top of models? There's leaderboards, there's Twitter, there's LinkedIn...

**Daniel Whitenack:** Yeah, I think it's a little bit spread out for me between the sources that you mentioned... As podcasters, I think that's one of the --

**Shawn Wang:** Yeah, it's our job.

**Daniel Whitenack:** Yeah. Well, it's also a benefit for us. I think if I didn't have every week on Wednesday, like "I'm going to talk about this topic", whether I'm planning to think about a certain thing or not, it kind of helps you prompt and look at what's going on. So I think that is an advantage of content creators, is it is kind of a responsibility, but it's also an advantage that we can have, to have the excuse to have great conversations with people every week.

But yeah, I think Twitter's a little bit weird now, as everybody knows, but it's still a good place to find out that information... And then sometimes too, to be honest, I go to Hugging Face, and I'll search for models, but I also search and I look at the statistics around the downloads of models... Because generally, when people find something useful, then they'll download it, and download it over and over. So sometimes when I hear about a family of models, I'll go there and then I'll look at some of the statistics on Hugging Face, and try a few things.

**Shawn Wang:** Yeah. And some of these forks - I see the download numbers, but I've never heard of them outside of Hugging Face.

**Daniel Whitenack:** Yeah, it's true. It's true. Yeah. And some of them - like, there'll be a fork, or a fine-tune, or something... And you do have to do a little bit of digging around licensing and that sort of thing, too... But it is a useful -- there's tons of people doing amazing stuff out there that aren't getting recognized at the Falcon or MPT level. But there's a lot of people doing cool stuff, that are releasing models on Hugging Face maybe that they've just found interesting.

**Shawn Wang:** Any unusual ones that you've recently found?

**Daniel Whitenack:** Well, there's one that I'll highlight, which I thought was cool because - I don't know if you all saw that Meta released this --

**Shawn Wang:** The six modality model?

**Daniel Whitenack:** \[30:08\] Yeah, and it was interesting because when I was at SIL we did this work with Masakhane and Coqui, which is a speech tech company, to create these language models in six African languages. And I was like "Okay, that's cool. We did that, we formed the datasets", it was satisfying... But now I'm learning that then Meta went and found that data on Hugging Face, and that's kind of incorporated in these new models that Meta has released. So it's cool to see the full cycle thing happened, where there was grassroots organizations seeing a need for models, gathering data, doing baselines, and now there's extended functionality in kind of a more influential way, I guess, at that higher level.

**Alessio Fanelli:** Yeah. Talking about open and closed models, when we started the podcast, it kind of looked like a cathedral kind of market, where we had Cohere, Anthropic, OpenAI, Stability, and those were like the hottest companies. I think now, as you mentioned, you go on Hugging Face \[unintelligible 00:31:20.27\] news research 13-billion-parameters model that just got released, fine-tuned on over 300,000 instructions... It's like, models are just popping up everywhere, which is great. And yeah, we had an episode, as I mentioned, with Jonathan Frankle and Abhinav from MosaicML to introduce MPT 7B, and some of the work that they've done there... And I think one of their motivations is keeping the space as open as possible, making it easy for anybody to go, obviously, ideally, under \[unintelligible 00:31:52.20\] and train their own models, and whatnot. So that's one that people really liked. I thought it was really technical, so I was really a little worried at first. I was like "Is it gonna fly over most people's head?"

**Shawn Wang:** No. We're going more technical... \[laughter\]

**Alessio Fanelli:** Exactly. That was like a learning --

**Shawn Wang:** Learning in, leaning in... \[laughter\]

**Alessio Fanelli:** Exactly.

**Shawn Wang:** And Jonathan is super-passionate about open source. He had this rant halfway through the episode about why it's so important to keep models open, and actually edited the crowd applause into the podcast... Which I kind of love. I love little audio bonuses for people listening along... And I think the Changelog guys do that really well, especially in the newer episodes.

**Daniel Whitenack:** Yeah, there is a way for us to integrate some of those things...

**Shawn Wang:** Soundboard?

**Daniel Whitenack:** Yeah, like the soundboard thing, and we've never got into it too much. I need to work with Jerod from the Changelog and see --

**Shawn Wang:** It just spices it up, you know?

**Daniel Whitenack:** Exactly. Exactly. You can have you can only have so many hour-long conversations about ML.

**Daniel Whitenack:** Yeah, I keep thinking that, but then we keep going, so... \[laughs\]

**Shawn Wang:** Sorry, I didn't mean like it was like a --

**Daniel Whitenack:** No, I gotcha.

**Shawn Wang:** It just switches it up and it makes the audio interesting, to add variety. Cool. I don't know if there any other highlights that we want to do for...

**Daniel Whitenack:** I'll just highlight maybe one more... Kirsten Lum was on, she had an episode about machine learning at small organizations... I think that's a great one; if you're a data scientist or a practitioner or an engineer at either a startup, or a midsized company, where - I think the thing that she emphasized was these different tasks that we think about, like whether it's curating a dataset, or training a model, or fine-tuning a model or deploying a model... Sometimes at a larger organization those are functions in and of themselves. But when you're in this sort of mid-range organization, that's like a task you do. So to think about those tasks as tasks of your role, and timebox them and understand how to do all of those things well, without getting sucked down into any one of those things - that was an insight that I've found quite useful in my day-to-day as well, is to sort of start to get a little bit of spidey sense around "Hey, I'm spending a lot of time doing this, which probably means I'm stuck in too much... Like, I'm making my MLOps too complicated to track versions and tie all this stuff together. Maybe I should just do a simple thing and paste the number in a Google sheet and move", on or something.

**Alessio Fanelli:** \[34:31\] I think that's a good segue into some of the other work that you do. You run the DataDan.io website, which is kind of like different types of workshop and advising that you do. I think a lot of founders especially are curious about how are companies thinking about using this technology. There's a lot of demos on Twitter, a lot of excitement, but when founders are putting together something that they want to sell, they're like "Okay, what are the real problems that enterprises have? What are some of the limitations that they have?" We talked about commercial use cases, and something like that... Can you maybe talk a bit about two, three high-level learnings that you had from these workshops, on how these models are actually being brought into companies, and how they're being adopted?

**Daniel Whitenack:** Yeah, I think maybe one higher-level comment on this is even though we see all these demos happening, everybody's using ChatGPT, the reality in enterprise is most enterprises still don't have LLMs integrated across their technology stack. So that might be a bummer for some people like "Oh, it's not quite as pervasive", but I actually find it as refreshing, maybe because some of us -- like, feel stuff happens every week; it's it's exhausting to keep up. Like "Oh, if I don't keep up with this stuff, then I'm getting left behind." But it takes time for these things to trickle down, and not everything - we were talking about the Stable Diffusion use case, and others... Not everything that's hyped at the moment will be a part of your day-to-day life forever. So you can kind of take some comfort in that.

I think it's really important for people, if they're interested in these models, to really dig into more than just kind of a single prompt into these models. The practical side of using generative text models or LLMs really comes around either what some people might call prompt engineering, but understanding things, giving examples or demonstrations in your prompt using things like guardrails, or regex statements, or Prediction Guard to structure output, doing fine-tuning for your company's data... There's kind of a hierarchy of these things.

I think you all know Travis Fischer, he was a guest on Practical AI, and talked about this hierarchy from prompt engineering through data augmentation, to fine-tuning, to eventually training your own generative model. I've really tried to encourage enterprise users and those that I do workshops with to think something like that hierarchy with these models. Like, get hands-on, do your prompting, but then if you don't get the answer that you want immediately, I think there's a tendency for people to say, "Oh, well, it doesn't work for my use case." But there's so much of a rich environment underneath that, with things Langchain, and LLaMA Index, and data augmentation, chaining, customization, fine-tuning... All this stuff that can be combined together. It's a fun, new experience, but I find that enterprise users just haven't explored past that very most shallow level.

\[37:57\] So I think - yeah, in terms of the trends that I've seen with the workshop, I think people have gone to ChatGPT, or one of these models, they've seen the value that's there, but they have a hard time connecting these models to a workflow that they can use to solve problems. Before, we all had intuition, like "I'm going to gather my data, it's going to have these five features, I'm going to train scikit-learn model or whatever, I'm going to deploy it with Flask, and now I have a cool thing." Now, all of that intuition has sort of been shattered a little bit. So we need to develop a new workflow around these things, and I think that's really the focus of the workshops, is kind of rebuilding that intuition into a practical workflow that you can think through, and solve problems with practically.

**Alessio Fanelli:** You have a live prompt engineering class, "Prompt engineering: overrated or underrated?"

**Daniel Whitenack:** Yeah. I think prompt engineering as a term is probably too hyped. I think engineering and ops around large language models though is a real thing. And it is sort of what we're transitioning to. Now, how much you want to say is -- that term gets used in all sorts of different contexts. It could mean just like "Oh, I wrote a good prompt, and I'm gonna sell it on Twitter", or something.

**Shawn Wang:** \[unintelligible 00:39:20.02\] I wonder how they're doing, to be honest... Because they get quoted in almost every article about prompt engineering. They've got really good PR.

**Daniel Whitenack:** Yeah, yeah. I mean, if people can sell their prompts, I'm all for that. That's cool.

**Shawn Wang:** \[unintelligible 00:39:33.15\]

**Daniel Whitenack:** But I think some people might just mean that, and I think that's maybe overhyped, in my view. But I do think there's this whole level of engineering and operations around prompts and chaining and data augmentation that is a real workflow, that people can use to solve their problems. And that's more what I mean when I'm referring to -- however you want to combine the word engineering with prompting and language models...

**Shawn Wang:** Yeah. I've just been calling it AI engineering.

**Daniel Whitenack:** AI engineering. That's good. I like that.

**Shawn Wang:** Wrangle with the AI APIs, know what to do with them... That is a skill set that is developing, that is a subspecialty of software engineering.

**Daniel Whitenack:** Yeah, yeah.

**Shawn Wang:** It is what it is. And I think part of something I'm really trying to explore is this spillover of AI from the traditional ML space, like where you need a machine learning researcher, or a machine learning engineer - it's spilling over into the software engineering space, and there's this rising class of what I'm calling AI engineer, that is specialized \[unintelligible 00:40:31.15\] the tooling, the conversations, and themes, \[unintelligible 00:40:35.21\]

**Daniel Whitenack:** What do you think are the unique challenges that someone coming from that latter group, like engineers that are advancing into this AI engineer position, versus probably more like my background, where I was in data science for some time, and now I'm kind of transitioning into this world - what do you think are the unique challenges for both groups of people?

**Shawn Wang:** So I can speak to the software side, and you can speak about the data science side... It's simply that for many of us, we are dealing with a non-deterministic system for the first time... That, by the way, we don't fully control, because there's this conversation about the GPT-4 regress in its quality... And we don't know. Because model drift is not within our control, because it's a blackbox API from OpenAI. But beyond that, there's this sense that the latent space of capabilities is not fully explored yet.

**Daniel Whitenack:** Yeah.

**Shawn Wang:** There's 175 billion, or 1 trillion parameters in the model; we're maybe using like 200 of them. It's literally that meme where we're using 10% of our brain; we are probably using 10% of what is capable in the model. And it takes some ingeniousness to unlock that.

**Daniel Whitenack:** \[41:52\] Yeah. I think from the data science perspective there's probably a desire to quickly jump to these other things around fine-tuning, or training your own models, where if you really do take this prompting, chaining data augmentation seriously, you can do a lot with models, sort of, off the shelf, and don't need to jump immediately into training. So I think that is a knee-jerk reaction on our end. And fine-tuning is going to be around for the foreseeable future, as far as I can tell, but data scientists have maybe different -- because we've been dealing with the uncertainty or non-deterministic output for some time, and have developed some intuition around that... But that's mostly when we've been controlling the datasets, when we've been controlling the model training, and that sort of thing. So to throw some of that out, but still deal with that - it's a separate kind of challenge for us.

**Shawn Wang:** I just remembered another thing that we've been developing on the Latent Space community, which is this concept of AI UX. The last mile of showing something on the screen, and making it consumable, easily usable by people is perhaps as valuable as the actual training of the model itself.

**Daniel Whitenack:** Yes.

**Shawn Wang:** So I don't know if that's an overstatement, to be honest... Obviously, you're spending hundreds of millions of dollars training models, and putting it in some kind of React app is not the biggest innovation in the world... But a lot of people from OpenAI say ChatGPT was mostly a UX innovation.

**Daniel Whitenack:** Yeah, I think leading up to ChatGPT -- like, when I saw the output of ChatGPT, I don't think I had the same earth-shattering experience that other people had, in believing like "Oh, this output is coming from a model." Sure, it came from a model, but the reception to that interface, and the human element of the dialog... So maybe it's both/and. Like, you're not going to get that experience if you don't have the innovation under the hood, and the modeling, and the dataset curation, and all of that. But it can totally be ruined by the UX.

I typically give the example - like, one day in Gmail I logged in, and I was typing my email, and then had the gray autocomplete. I did not get a pop-up that said, "Do you want us to start writing your emails with AI?" It just was so smooth, and it happened, and it made -- it created value for me, instantly. So I think that there is really a sense to that, especially in this area where people have a lot of misgivings or fear around the technology itself.

**Shawn Wang:** And we're gonna have \[unintelligible 00:44:33.06\] on in a future episode, but GitHub, where they had the initial Codex model for OpenAI - they spent six months tuning the UX, just to get Copilot to a point where it's not a separate pain, it's not a separate textbox, it's kind of in your code as you write the code. And to me, that's traditional -- that's more the domain of traditional software engineering, rather than ML engineers, or research engineers.

**Daniel Whitenack:** Yeah. Yeah. I would say that is probably, yes, a -- to circle back to what we were talking about, like challenges that are unique to engineers coming into this, versus data scientists coming into this... That's something data scientists, I think, have not thought about very much at all. At the very most, it's data visualization that they've thought about. Whereas engineers generally, like, there's some human -- I mean, unless you're just a very pure backend systems engineer, thinking about UI/UX is maybe a little bit more natural to that group.

**Shawn Wang:** You mentioned one thing about dataset curation... We're in the middle of preparing this long overdue episode on datasets 101. Any reflections on the evolutions in NLP datasets that have been happening?

**Daniel Whitenack:** Yeah, great question. Are you all familiar with Label Studio? It's one of the most popular kind of open source frameworks for data labeling, and we try to have them on the show every year as like a data labeling expert; maybe it's time for that, it's just reminding me...

**Shawn Wang:** They've just released -- so Erin Mikail is in the Latent Space Discord... I think you had her on at ODSC.

**Daniel Whitenack:** \[46:13\] Yeah, she was at ODSC. Yeah, that's right.

**Shawn Wang:** Yeah. So they've just released new tools for fine-tuning generative AI models.

**Daniel Whitenack:** Exactly. Yeah.

**Shawn Wang:** So I think it's a good occasion...

**Daniel Whitenack:** I think maybe that being an example of this is maybe a trend that we're seeing there is around augmented tooling, or tooling that's really geared towards an approachable way to fine-tune these models with human feedback, or with customized data. So I know with Label Studio a lot of the recent releases had somewhat to do with putting LLMs in the loop with humans during the label process, similar to - I think Prodigy has been doing this for some time, which is from SpaCy... So this sort of human-in-the-loop labeling and update of a model. They've brought some of that in. But now this new kind of set of tooling around specifically instruction tuning of models...

I think before, maybe people -- and I've seen actually this misconception; I was in an advising call with a client, and they're really struggling to understand "Okay, our company has been training or fine-tuning models. Now we want to create our own instruction-tuned model. How is that different from what we've been doing in the past?" And kind of what I tried to help them see is - yes, some of the workflow that happened around reinforcement learning from human feedback is unique. But reinforcement learning is not unique. There's an element of training in that, there's dataset curation in that, there's pre-training that happened before that whole process happened. So the elements that you're familiar with are part of that, they're just not packaged in the same way that you saw them before. Now there's this clear pre-training stage, and then the human feedback stage, and then this reinforcement learning happens...

So I think the more that we can bring that concept and that workflow into tooling, like what Label Studio is doing, to make it more approachable for people to where it's not like this weird -- like, reinforcement learning from human feedback sounds very confusing to people... Like PPO, and helping people understand how reinforcement learning works - it's very difficult. So the more the tooling can just have its own good UI/UX around that process, I think the better. And probably Label Studio and others are leading the way on that front.

**Shawn Wang:** I was thinking -- so labels are one thing. I'll take this side tangent on labels, and then I'll come back to the main point. I actually presumed that Scale would win everything. And it seems they haven't. Sorry, there's \[unintelligible 00:49:00.03\] there's this generation of labeling companies --

**Daniel Whitenack:** Like data-centric AI companies, yeah.

**Shawn Wang:** Right. What happened -- how come there's still new companies coming out? There's Label Box, there's Label Studio... I don't have a sense of how to think about these companies. Obviously, labeling is important.

**Daniel Whitenack:** Yeah. I think also, even before that, there was at least features even from cloud providers, or whatever... Like, AutoML came before that - upload your own data, create your own custom model... So I think that maybe it's that companies that want to create these sort of custom models - and this is just my own opinion, I'll preface that - maybe they don't want... Like, when they're thinking about that problem, they're not thinking about, "Oh, I need a whole platform to create custom models using our data." They're more thinking about "How do I use these state of the art models with my data?" Those statements are very similar, but if you notice, one is more model-centric, and one is more data-centric.

\[50:12\] So I think enterprises are still thinking model-centric, and augmenting that with their data, whether that be just through augmentation, or through fine-tuning, or training. They're not necessarily thinking about a data platform for AI, they're thinking about bringing their data to the AI system... Which is why I think APIs like Cohere, OpenAI, that offer fine-tuning as part of their API - it's sort of like people love that. It makes sense. Like, "Okay, I can just upload some examples and it makes the model better." But it's still model-centric.

**Shawn Wang:** I get the sense that OpenAI doesn't want to encourage that anymore, because they don't have fine-tuning for 3.5 and 4. And the last thing I'll do about datasets, and then we can go into lightning round, is I was actually thinking about unlabeled datasets for unsupervised learning, or self-supervised learning, right? That is something that we are trying to wrap our heads around... Like Common Crawl, StackOverflow archive, the books... I don't know if you have any perspectives on that, the trends that are arising here, the best practices... And as far as I can tell, nobody has a straight answer as to what the data mix is, and everyone just kind of experiments.

**Daniel Whitenack:** Yeah, well, I think that's partly driven by the fact that the most popular models - you don't really have a clear picture of what the data mix is, right? So the people that are trying to recreate that, and they're not achieving that level of performance, one of the things they think about is "Well, what are all the different data mix options that I can try, and try to replicate some of what's going on?" So I think it's partly driven by that, is we don't totally know what the data mix is sitting behind the curtain of OpenAI or others. But I think there's a couple of trends, I guess what you already sort of highlighted. One is "How can I mix up all of these public datasets, and filter them in unique ways to make my model better?"

I listened to a talk, I believe it was that last year's ACL, and they did this study of Common Crawl. And they've found that actually, a significant portion of Common Crawl was mislabeled all over the place; like, trash, yeah. So I think it was 100% of the data that was labeled as Latin character Arabic, so Arabic written in Latin characters, was not Arabic. Like, 100% of it. And there were all sorts of other problems, and that sort of thing.

So I think there's one side, one group of people or set of experiments that you could think about as like "How do I take these existing datasets, which I know have data quality issues, or maybe other data biases or problems that I would to filter out, like not fit for work data, that sort of thing - so how do I create my own special filtered mix of these, and train a model?" So that's one kind of genre. And then there's the other genre, which is maybe taking those, but augmenting them with this simulated or augmented data, that's out of a model, like a GPT model, or something that.

So I think you could combine those in all sorts of unique ways, and I think it is a little bit of the Wild West, because we don't totally have a good grip on what is the winning strategy there... And so I think that's where I would also encourage people to try a variety of models. This is maybe a problem with benchmarks in general. You can see the open large language model benchmark on Hugging Face, and these models are at the top. And you could come away with that and say "Well, anything below the top three, I'm not even going to use." But the reality is that each of those had a unique sort of flavor of this data under the hood, that might actually work quite well for your use case.

\[54:14\] One example that I've used recently in some work is the Camel-5B model from Writer. It doesn't work great for a lot of things, but there's certain things around marketing copy and others that it does a really good job at, and it's a bit smaller model that I can host and run. And I can get good output out of it if I put in some of that workflow and structuring around it. But I wouldn't use it for other cases. But that has a lot to do with the data, and I'm guessing writers focus on that copy generation, and such.

So yeah, I would encourage people, specifically on this topic, to maybe think about what's going on under the hood, and also give some models a try for different -- like gain your own intuition about how a model behavior might change based on how it was trained, and the mix of data that went in.

**Alessio Fanelli:** Awesome. Let's jump into the lightning round. We have three questions for you. It's lightning, but you can take 30 seconds to answer.

**Daniel Whitenack:** Alright, cool.

**Alessio Fanelli:** So the first question is around acceleration. What's something that already happened in AI, that you thought would take much longer?

**Daniel Whitenack:** Yeah, I think the thing that I was thinking about here was how general-purpose these large language models are, beyond traditional NLP tasks. So it doesn't surprise me that maybe they could do sentiment analysis, or even NLI, or something that. These are things that have been studied for a long time. But the fact that I can -- at ODSC I was in a workshop on fraud detection. And they were using some - I forget the models they were using; some statistical models to do fraud detection. I was like "I wonder if I just do a bit of chaining, and insert some of the examples of these insurance transactions into my prompts, if I can get the large language model to detect a fraudulent insurance client." And it seemed to -- like, I got pretty far doing that. So that fact of like - you can do something that with these models, they're that generalizable, beyond traditional NLP techniques, I think is surprising to me.

**Shawn Wang:** Awesome. Exploration. What are the most interesting unsolved questions in AI?

**Daniel Whitenack:** Yeah, I think there's still such a focus on English and Mandarin... It's like, large language model-wise, if you look at the drop-off in performance after you get past English, Mandarin, German. Spanish to some degree, but German is actually better than Spanish, because of how much it's been studied in NLP. And of course, Mandarin has a lot of data. Spanish still does good, but there's languages, even in the top 100 languages of the world, that are spoken by millions and millions of people around the world, that don't perform well in these models.

So that's one. But even modality-wise... I know, there's a lot of work going on, in the research community around sign language, but there's all of these different modalities of language. Written text does not equal communication. Written text is a synthesis of communication into a written form, that some people consume. But the combination of all of these modalities, along with all of these languages - there's just so much room to explore there, and so many challenges left to explore, that will eventually, I think, help us learn a lot about communication in general, and the limitations of these models. But it's an exciting area. It's definitely a challenge, but an exciting area.

**Alessio Fanelli:** Awesome, man. So one less take-away, what's something or a message that you want everyone to remember today?

**Daniel Whitenack:** Yeah, similar to when you were asking about my workshops, I think I would just encourage people to get hands-on with these models, and really dig into the new sets of tooling that are out there. There's so much good tooling out there to go from like a simple prompt, to inject your own data, to form a query index, to create a chain of processing... Even trying agents, and all those things... Like, get hands-on and try it. That's the only way that you're going to build out this intuition. So yeah, that would be my encouragement.

**Shawn Wang:** Excellent. Well, thanks for coming on.

**Daniel Whitenack:** Yeah, thank you guys so much. This was awesome.
