**Daniel Whitenack:** Welcome to another episode of Practical AI. This is Daniel Whitenack, one of your co-hosts. I'm a data scientist with SIL International. I've got my co-host with me, Chris Benson, who is a principal AI strategist at Lockheed Martin. How are you doing, Chris?

**Chris Benson:** I am doing okay. I'm safe and I'm well, and so is my family, so that is a good sign for me.

**Daniel Whitenack:** Yeah, that's great. I'm recording in a new location, because we've got a bit of a full house at the moment, with my brother-in-laws being back from college and living with us, so I've transitioned my studio out into the dining room. It's been an interesting week in that sense as well.

**Chris Benson:** We're all making adjustments these days. The world is in an unusual time.

**Daniel Whitenack:** Yeah, we're all making adjustments. It seems like I've been more busy work-wise since the crisis started than even before, because SIL has been making various efforts to contribute in beneficial ways related to COVID-19, including trying to translate the phrase "Wash your hands" into as many languages as we can. Part of that is machine-generated, and then part of that is just crowdsourced translations, and I think we're up to 454 on my last check.

**Chris Benson:** I know, I saw you tweet about that a few days ago... So if you're not following Daniel, you definitely should. You can see the work that he did there.

**Daniel Whitenack:** Yeah, and those conversations and that work also led to some other discussions with one of my contacts at Intel. She pointed me to this other project called COVID-QA, which some people at Intel started collaborating with this team from Deepset-AI. I was super-fascinated by this project, and also interested in potentially contributing, because they're looking to up the language support as well.

But I had a conversation with them, and they've agreed to be on the podcast today. So we've got Timo from Deepset, and then also Tony from Intel. Welcome, guys.

**Timo Möeller:** Hey, welcome.

**Tony Reina:** Thanks so much.

**Timo Möeller:** Thanks for the introduction. It's been a great week -- two weeks actually, because this is how we started this COVID-QA project. Should I talk a little bit about myself first, to begin with?

**Daniel Whitenack:** Yeah, please do... If you wanna introduce yourself, and then we'll ask Tony to do the same.

**Timo Möeller:** \[03:58\] Okay. Hey, I'm Timo, and I'm the co-founder of an NLP startup in Berlin, and I would say a total NLP (natural language processing) geek. I studied data science and computational neuroscience, and then co-founded this startup, Deepset, two years ago in Berlin... Which is actually a really great place for a startup. A lot of talents are coming here, and also a lot of the open source companies are based in Berlin... For example SpaCy, or maybe you know Rasa.

**Daniel Whitenack:** Yeah, we had SpaCy on the podcast a little bit ago. Yeah, Berlin sounds like quite a place to be a developer. I definitely need to make a trip there.

**Chris Benson:** I was gonna say, we need a Practical AI road trip.

**Daniel Whitenack:** Exactly.

**Timo Möeller:** Yes, totally. It's a totally great, vibrant city. Of course, nowadays it's a bit more empty and calm when you go out. For example, we have a huge airport that got shut down after the change in government, and this field is completely empty nowadays. Normally, it's full of people, and a lot of people doing sports or celebrating there.

So at Deepset I'm responsible for innovation, because we believe that there has been a lot of advancements in deep learning, and also in natural language processing, and this has to be brought to the industry. Also, what is really important to us is getting NLP technology to work on German language. For this, we are very deeply rooted in open source technology. We trained a BERT model -- these language models that got open sourced by Google. We trained these on a lot of German text data, and also open sourced those. This is giving us a lot of traction from the community. A lot of researchers are using this, and this is just a really great time to contribute to open source projects.

**Daniel Whitenack:** Awesome. Thanks for the intro. Tony, do you wanna let us know a little bit about your background and how you eventually ended up where you're at now?

**Tony Reina:** Yeah, absolutely. Thanks for having us. So I'm Tony Reina, I'm a medical doctor and data scientist, and I'm a chief AI architect for Health & Life Sciences at Intel. My primary role is actually taking artificial intelligence algorithms and trying to make them run faster on -- well, on Intel products, obviously.

A lot of what I've been doing has been in the medical imaging space, so CTs, MRIs, things like that... But I've been branching out into genomics, and particularly natural language processing, so the NLP stuff. Timo and I first met with some of the German work that he was doing. I like the playfulness of NLP; they name things after Sesame Street characters, like Bert, and Ernie, and Elmo, and things like that, which is kind of a fun group to be working with, when you work with researchers that really love to have fun things to do.

**Daniel Whitenack:** It makes the logos a lot better. \[laughter\]

**Tony Reina:** It makes the logos a lot better! Nobody forgets Bert now, so...

**Chris Benson:** Poor Bert...

**Tony Reina:** Poor Bert, but you know, Bert's now a world celebrity in terms of AI researchers... It's really great. BERT has only been a couple years now, maybe even less, that it's been in existence, and it's just kind of taken the field by storm. So yeah, this project with Timo that we kind of looked at, since we were already connected - he just popped on my LinkedIn page and said "Hey, we're doing this COVID-QA thing. We'd love to get some help" and I said "Well, let's figure out how to help out."

So that's what we've been doing... Obviously, we've been really busy at Intel, just working - as everybody is around the planet, basically trying to figure out ways we can help with COVID... And obviously, we're a tech company, so -- we're not healthcare, we're not gonna be able to go out there and do magic, like healthcare providers are doing, but we're gonna do what we can... And this is one of the ways we think we can really make a difference.

**Chris Benson:** \[08:14\] This is just such an unprecedented time, and it's moving so fast, that -- for context, for listeners who are tuning in, we're actually recording this on Tuesday, March 31st... And we don't normally say that, when we record episodes, but given the topic and given how fast this is evolving, I thought that a point in time was worth having... Just to set the context, and then I'd like to come back over to you, Tony, for a little level-setting for us.

I know that right now we're at a point where there's 203 countries, areas and territories that have COVID-19 cases. As of today, the World Health Organization said 754,000 (and change; pardon me, I'll just round out the numbers) of cases. There's almost 37,000 cases around the world that resulted in death in the U.S. We're at 163,500 cases, and we are approaching 3,000 deaths, which we may hit today, based on the current run rate here in the U.S, which would put us on the same as 9/11 in terms of that...

So it's a moment in history that none of us have ever experienced. There's nothing -- I guess other than maybe the Spanish flu of 1918 that's comparable in any way... And I know that that has limited comparisons.

I'm wondering if you can level-set beyond just the numbers that I called out, that are on the websites everyone is following... You know, where we are today, what that looks like from your perspective as a medical doctor that's dealing with this, and then obviously we'll talk about how we're using data to start attending to these problems that we're facing.

**Tony Reina:** Yeah, I think just from the medical aspect -- I haven't practiced in over 20 years basically, so I wouldn't be the best person to answer about the clinical things... But this is the strangest part of this whole thing - when people ask me "How is it going?", all I know is because we're kind of locked down and stay-in-place and shelter-in-place, I can tell you how it's going in my house; everything else I get from reading, and listening to the news, and things like that.

I think that's what's just kind of curious about this - I feel like I wanna be out there and doing things. My wife's a retired psychiatrist from the navy, and she was actually even thinking about "Should I kind of lend a land somewhere? What can I do?" I guess that's a great thing, but that's also where we're at - everybody wants to help, and yet it's this odd situation where the best thing for most people is just to shelter-in-place and make sure that we don't keep spreading things, and try to get it under control.

**Chris Benson:** That's a great point right there.

**Daniel Whitenack:** Yeah, definitely. And one of the things you mentioned which really struck a chord with me is the idea that we're all kind of sheltered in place - at least for the most part a lot of people are - and we're getting information from various sources... There's so much information swirling around. Some of that is recent, some of that is not recent, some of that is from trusted sources, some of it is not from trusted sources... We're hearing anecdotes from our friends and family, they're hearing things, and things are getting passed second-hand... Could you talk a little bit - either one of you - about what you've seen in terms of the spread of accurate information, and the problems related to actually information spread in the virus?

**Tony Reina:** Yeah, I think Timo should go on that, because he's definitely the one that started this, trying to get factual information out there.

**Timo Möeller:** Yeah, exactly. Of course, social media is quite difficult to dissemble really truthful information, and this is exactly how we started the COVID-QA project. Two weekends ago, there was a hackathon organized by the German government authorities; it was actually a huge event, 45,000 people in one Slack workspace...

**Daniel Whitenack:** \[12:11\] All virtual.

**Timo Möeller:** Yeah, and all remote... And like a beehive buzzing about. Part of this hackathon - we decided to focus on getting factual information. That's why we looked at the official government pages, and already saw quickly that if you look at a single government page, there's not so much information... And that the information need is actually spread across a lot of official pages. This is exactly the birth hour of COVID-QA, where we wanted to aggregate these official sources and make them available and searchable in a meaningful way.

This was during the hackathon two weekends ago, and there were about 25 developers just jumping onto this project. We were five core developers from Deepset, we worked the whole weekend through, and with the support of these external people... It was really fun to develop the UI, to develop the backend, to develop scrapers that scrape the sites and bring all pieces together.

Afterwards, after this hackathon, there's also people now interacting, but also people from external, coming and wanting to collaborate, wanting to help, and wanting to extend... And this is exactly how we got in contact with Tony \[unintelligible 00:13:33.19\] I think this is the most great part of this project, to have a community that is fast, agile, that is not bound to bureaucracy, that there's no long approvement processes... We just have a situation and we need to work on it. This could help people actually saving their lives, or the lives of their relatives.

**Tony Reina:** That was nice thing with Timo's group - Deepset was already set up to do NLP and do it at scale. It was one of these things where I knew coming into it that a) they had something already in the first weekend that you could work with, and b) they had the engineers and they had the data scientists that could make this thing scale... So they really just needed resources to come in and help them to make it scale, but they had the machinery ready to go.

**Daniel Whitenack:** I wanna dive into that machinery here in just a second, in terms of like the end goals of COVID-QA and its functionality, and some of the things under the hood, but before we get into that, maybe we could just set a foundation in terms of -- you know, after you've looked at what sources of data are out there, what sources of information are out there, what they're talking about and what people are asking, what is the sort of information that people really need to know during this time? Is it symptoms, is it best practices for hygiene and hand-washing? What are you seeing as some of the main pieces of information that really need to get to as many people as possible?

**Tony Reina:** I think there's two groups that we're getting at with this. The first group is just the layperson that's out there - and they're the ones that are gonna hit the tool as it exists right now, which is one that basically will sift through a lot of World Health Organization and the CDC FAQs, and they're looking for "What's the best way to disinfect my house?" or "What's the best way of washing my hands?" "Can I eat this? Will this help?" That's where it is right now, so that's kind of the first group of people that would be using this.

Then what I thought was interesting was coming in to add the second group, which is going to be the researchers that want to look for new things. These are the data scientists, and geneticists, and physicians, and epidemiologists that wanna come in and actually do research on Covid and on Coronavirus...

\[16:07\] So one of the things that Timo and I talked about was there was a dataset that was released on Kaggle by the Allen Institute, by the White House, NIH, Georgetown, CZI, MSR... It was a whole group that put it out called CORD-19, the Coronavirus Open Research Dataset Challenge... And it's something like 25,000 PubMed articles. These are peer-reviewed, high-quality articles that -- basically, just a search on Coronavirus, and virus, and got all the articles, basically.

So the idea was "Well, BERT and all of these great models have things called Extraction AI, where you get to a question and answer system for this large body of articles." So the question would be -- you know, when the Kaggle thing went out, it was like "Here's a bunch of data. Can you find interesting things to do with it?" And I thought "Well, the first thing you need with a mountain of data is a way to sift through it for data that's actionable." Timo's group had something called Haystack, which was like trying to sift through a haystack for a needle... And I thought "What if we take this, we annotate it using the Stanford Q&A type of models, the SQuAD models, and be able to actually give researchers a free tool that they can go through the core dataset and be able to type in random questions that are things that are not gonna be how to wash your hands, but things that are like "the beta subunit of the globulin of the such-and-such", whatever... And it will actually give you a relevant answer and a few published articles that you can actually look to, and go through these 25,000 articles and get the real meat of the issue.

**Timo Möeller:** Yeah, I also really like this dual use of this project. To come back to the question, I looked at quite a lot of FAQs for the general public - there, the most important information is really informing people how the corona spreads, and how to prevent the spreading... If this is \[unintelligible 00:18:20.26\] larger cities, where people are crowded together, this information needs to be there in the right way and in a trustable way. I think this is really important.

And then, this dual use for the general public, and as Tony mentioned, for the researchers, this will be incredibly useful to speed up the innovation process.

**Break:** \[18:48\]

**Chris Benson:** Coming out of that and looking at the next layer - we've talked about what COVID-QA is, and we talked about it being based on the CORD-19 dataset... I'm wondering if at this point, now that everyone has a sense of what you're trying to accomplish, if you could dive into specifically what this is that you're putting out there and making available to the public, and as we get a sense of that, we'll dive into how it works and what's the technology underlying it.

**Timo Möeller:** Yeah, it's maybe also best then to separate this tool use - one for the general public, explain this, go into more detail, and then also the researcher use, where we mainly use extractive technology.

**Daniel Whitenack:** That sounds great.

**Timo Möeller:** So for the general public, it is basically matching user searches, user questions, to the questions we crawled from the official FAQ pages. The technology is based on open source technology, PyTorch, Hugging Face, Transformers, and also our other framework Haystack, that can basically do question answering at scale.

We started off with the question matching in a very simple way. Basically, we just indexed the questions in ElasticSearch, and incoming queries were then matched with this ElasticSearch index, which is basically just a rule-based matching. We thought this is a good baseline for people to continue working and developing, because it's easily-extendable to other languages. ElasticSearch doesn't really care about the language so much that has been inputted, and it is also super-fast.

During the hackathon in the last days, we experimented a lot with BERT-based embeddings. BERT is a language model where you stick in text and you get a vector representation of -- basically like a virtual vec was before for words, it now works on sentence or document level, to get a document representation of it.

These models really don't work so well when you just take the embedding to compute similarities, like for example with the \[unintelligible 00:22:47.00\] They don't work so well out of the box, so you need to find ways to adjust these language models to suit your need.

There we used a really nice library, Sentence Transformers. It's from a German NLP laboratory, UKPLab. Nils Reimers is also the main contributor there... And this basically takes a BERT model and creates a clone out of it; like a Siamese network, so the weights are totally the same. You stick in the query that the user types in, and on the other side you stick in the questions that you have already crawled. Then you get representations for both, and then you can compute a similarity metric.

This whole network is trained end-to-end with exactly these user questions, and the questions you have. This works really great. The more data you feed into this network, the better it can match questions.

\[23:51\] We've then also seen over the course of the hackathon that this is the way to go, and we need to extend this also to other languages... Because the questions from official FAQ pages are phrased in a very official tone, and people who want questions write in a colloquial manner, and also there are spelling mistakes. These models cover this part quite well. This is why we're actually trying to push in this direction more and more.

**Daniel Whitenack:** I'm pretty curious about that, and Chris can probably guess that I'm very curious about that because of my interest in languages, which we've talked about a lot...

**Chris Benson:** \[laughs\]

**Daniel Whitenack:** So you started talking about the ELK Stack, or ElasticSearch matching with the index, and then talked about BERT... So I'm curious -- there's of course a lot of marginalized language communities out there that also need this sort of information, and are only becoming even more marginalized because they don't have access to proper health information...

So with that sort of flow that you talked about - you have a language model (let's say) like BERT, or a Transformers model... So you could train this sort of model, assuming you had data in the language. And then there's this sentence transformers and matching piece that you talked about. In terms of transitioning that piece, and the training of that piece, you mentioned you have your set of scraped questions, and then the set of user questions... Do you need annotation in terms of matching known user questions to the properly-matched FAQ scraped data? Is that what you need for that certain piece?

**Timo Möeller:** That is exactly right. We create it manually, so the core team distributed a set of like 30 questions, and we manually created rephrasing of these questions to basically evaluate the models. But now we also implemented a feedback mechanism into the UI, and also we have a Telegram bot; we can maybe talk about the Telegram bot as well later. There, people can actually give positive feedback or negative feedback, saying that maybe the content is irrelevant, it doesn't match the question, or the content is outdated, for example, to inform us that we have to adjust our scrapers, in a way.

This, we hope, will scale to other languages and all the data that is coming from this will be open sourced in this COVID-QA repository. We'll make this also available to other researchers, so they can improve the question-matching for Covid-related questions.

**Chris Benson:** This is super-cool, I love what you're doing on this. One of the things i wanted to ask is maybe as people focused on these technologies and we're doing this day-to-day, and the efforts that we're engaged in in our own projects are built on these datasets that we have... And yet, as we look at this crisis and we're looking at the fact that the dataset may or may not have everything you need - which you kind of alluded to there - in terms of how applicable it is, and getting that feedback... What kind of strategies are you thinking of in terms of being able to provide the outputs that maybe some users are needing if they're not in the CORD-19 dataset inherently... Is that just a hard limit of what you can tackle, or have you thought about how to extend beyond the limitations of the dataset you're working with?

**Timo Möeller:** This is in the second stage, where we have a more extractive QA that takes some unstructured text database, like the CORD-19 dataset, for example, and then extracts questions. We think that this will be related to researchers, but we could also envision that more text that the general public would be interested could be searchable with this system. The only problem there is that these extractive QA mechanisms are incredibly hard to scale to a huge amount of users... So we would possibly do this for the general public in more like an offline way, where we collect questions, and if a lot of questions come up that cannot be answered, we might need to use these extractive QA models to answer them from different data sources.

**Daniel Whitenack:** \[28:10\] Yeah, so just to follow up on that - I think that it's worth noting here that I think it's really cool how you've approached this, because there is existing question and answer data out there, that's from a trusted source... So let's say FAQ pages from the World Health Organization, or something like that.

So in the first case, where you're talking about doing this matching with the transformer models, you're actually matching a user query to a trusted source answer for that question, because it was posted on an FAQ site. But then, in the second piece, where you're just talking about it in terms of extractive QA... Really now what we're talking about is saying -- and correct me if I'm wrong, but I think the goal here would be to say "Well, the user isn't asking exactly what's on the FAQ site", or maybe the user isn't sort of general public user, but they're a research user...

And like you said, Tony, they wanna know a very specific question, that's not on the FAQ site, but it is in some research article, or it is on some trusted source page. So this is totally unstructured data -it's just like an article - and you wanna ask some random question about that article... And that's where this extractive QA comes in. Tony could you maybe comment a little bit about that, and how this sort of extractive QA model is maybe different from the sort of embedding/matching that we're talking about in the other case?

**Tony Reina:** Yeah, sure. The way these models typically work - they talk about a language model... I usually think of it -- it's learning the statistics of a language. It's effectively learning "the i before e, except after c", or learning that -- you know, the way I go over it is if... The Dewey Decimal System is this random alphanumeric system, but you give it to any librarian and they're able to take very different books and be able to basically place them correctly in a library, in an ordered structured. A lot of these models are doing the same thing. They're basically just looking at patterns of word co-occurrences, and the statistics of who words occur.

What we're trying to do here is for the models that have already been trained - they're usually trained on things like Wikipedia, or English language, German language text, which is great, but for these sorts of things you really want to get into the domain-specific terms, so the medical terms, the genomics terms... More difficult and more infrequent terms that won't be showing up in Wikipedia... And trying to learn the statistics of that dataset.

So they have existing things like SciBERT and BioBERT, which are BERT models that are built using things like the BioASQ dataset. So Timo and I had talked, and we said "What if we took the CORD-19 dataset...", which is supposedly -- we've looked at it now, and they're mostly Coronavirus articles, but there are lots of other articles as well in there.

The first rule of data science is the data is always gonna be dirty coming in... So what we did is we said -- I'm an MD, and Intel has a lot of contacts... So I contacted people from the American Medical Association, and people that I knew, and just basically put out a call and said "Hey, could we get some domain experts? ...physicians, nurses, PhD's in biosciences?" People that are probably in some cases sitting at home. I heard on the radio that third and fourth year medical students are being told to stay home. And I was a third year medical student... I mean, I know how difficult it is; you wanna be there, you wanna be doing something, you're incredibly intelligent, and you have all of these skills that you've spent the last two years doing...

\[32:05\] So I just put out a call, and we set up a Slack channel, and Timo's group had -- you know, Deepset had this annotation server, so we put up this core dataset. Essentially, the Slack channel allows -- I think we've got like 24 in the Slack channel right now. We just started yesterday on the annotation, and right now we've got over 100 question and answers off the dataset, just in the first day.

These are things like -- I'll read you some of the ones that I'm looking at now from the website. "How many amino acids are in the SARS-CoV protein?" and the answer is 76 amino acids.

This is something where -- Wikipedia is not gonna be able to get you there. These are directly from the articles; it has a link back to the article that you're talking about. Things like "What does the SARS-CoV protein activate? NLRP3 inflammasome." Again, very detailed kind of question and answer things, that are either specific to viruses, or specific to epidemiology, or specific to SARS itself, or Covid, or MERS, or any of these similar pandemics that we've seen.

The nice thing for the domain experts is they just log into a website. All they need is a web browser and an internet connection. And as long as they can highlight some text, they're good to go. So we just throw them at it, give them some walkthrough videos, and let them go away and annotate.

**Chris Benson:** I'm kind of curious, as you're talking about the specifics of amino acids and such... I know that China had done a complete genome of this virus fairly early on, and published it... Have you been using that? Has that been helpful? Has that informed any of the work that you guys have been doing on the project here?

**Tony Reina:** Not for us. What we've got so far are just the published articles that were on PubMed, that were pushed into the core dataset... But it's certainly something that we could add into things.

The mechanics of how these question and answer systems work is that the annotator goes backwards from the model. The annotator reads through the article - this is a published, peer-reviewed article - and the annotator comes across a certain fact and they say "That's interesting. That's something that's specific, that might be interesting." So they highlight it, and they click Question, and they make up a question based off of the highlighted text in the article.

So if they had the genomic sequence or something like that, if that were in the text article, that's something that they could definitely highlight and make up a question to. And then the great thing about this is on Timo's side, when he creates an extractive AI model for it, it can actually extrapolate and say "Okay, I understand the context and the statistics, so if you threw me a new question that wasn't something that the annotators had ever come up with", it should be able to do a pretty decent job at figuring out what it's looking for in that article.

So if I put up a brand new article, if I put up a genomics article to this website and asked some questions, it should know where to look for in the text. And that's what's coming back. The model is not just making up words, it's identifying/highlighting the text, and saying "Here's the highlighted answer in the text. Does this seem right to you?"

**Break:** \[35:32\]

**Daniel Whitenack:** We've talked about the QA annotation that Tony has helped spin up, and really utilizing that expert input from doctors, from medical students, from medical professionals on the CORD-19 dataset... I was curious to kind of push that back to you, Timo, and see what your thoughts are in terms of -- let's say that Tony was able to get all this annotation in place (it sounds like there's a great start on that), how do you see that being integrated into the COVID-QA system itself? And maybe how do you see the two sides of the COVID-QA system developing?

**Timo Möeller:** Exactly, good question. I would say it starts with the scale of data that is needed. For this question-matching we can either use already pre-existing external datasets, and then these matched questions - maybe 1k or 2k per language. This is enough to get a really good matching system already going.

But for this extractive question and answering, there's much more help needed. The scales are there, these common datasets SQuAD from Stanford, is in the 150,000 question and answer pairs. That's why we think it's really great to have external help, because this will be the largest \[unintelligible 00:38:40.18\] this data in a format that we can then use in the frameworks.

In this framework we actually use Haystack, which is enabling question-answering on a larger scale. Normally, if you just use a language model like BERT, you basically take a small paragraph, like maybe 2k-3k characters, and you ask a question and you compute this. But for a large document base, this would be very infeasible.

Then you need a two-stage process. In the first stage you pre-select documents that could be relevant with a very cheap and very fast solution, and then you apply more powerful models, like BERT. This is definitely not a real win, it's definitely not a new invention. For example, there's a framework from Facebook called DrQA that's exactly doing this retriever and then reader architecture. But Haystack is doing it in a bit more modular and modern way, with a BERT-based extractive question answering system, and we think there's a huge gain in performance.

So we can take these labels that Tony and the collaborators produce and stick them into frameworks to train end-to-end systems that answer questions on this large CORD-19 dataset.

**Daniel Whitenack:** \[40:08\] I'm curious -- you mentioned the scale of the data, and SIL has been working to get translations in place over the past days... Definitely translations in the thousands seem within reach; annotations in the hundreds of thousands is definitely a tough thing, especially when you're relying on experts. But I was wondering if you could speak to -- I know some of these domain-adapted models, SciBERTs or other ones... Do I have it right that those are transfer-learned from another model? So if you have a model trained on the SQuAD dataset for question and answer, which is a totally general domain, is it possible to then transfer-learn a domain-adapted question and answer model with the data that Tony is working on?

**Timo Möeller:** It's a little bit different. You have to separate a base language model that can just transform text to vectors, and then you have to take this language model and adjust it to suit your task at hand. For example a document classification, or an extraction of named entities like persons and cities... And add also question answering. You have to attach a prediction \[unintelligible 00:41:19.12\] another small neural network on top of this language model, and then train this whole joint network on this target task.

Models like SciBERT or BioBERT - they are just pre-trained on a large biomedical corpus. What we are also doing right now is we took a BERT on English data and adjusted it, because this process of adjusting this language model to a domain is not as computationally-expensive as for example training the whole network from scratch.

So we took this network, adjusted it to the CORD-19 dataset, and if we take this adjusted CORD BERT (let's call it like that) and stick in the data, the labels, so the question-answering labels, it will hopefully perform better than just a plain BERT trained on English.

**Chris Benson:** So how would it be useful - or would it be useful - to get more annotators involved in this? And if so, what types of skills do you need with annotators to make it useful for them to apply annotations to the dataset? Who can do that, and how many more people would be helpful?

**Tony Reina:** As many more as possible...

**Chris Benson:** I had a feeling... \[laughs\]

**Tony Reina:** ...would be the simplest answer. What we're primarily looking for are people that are masters-level or above in the biomedical sciences. You don't have to have a Ph.D. to do this, but I would like to see someone who is comfortable in reading an academic paper and being able to explain it to someone else, or be able to point out the salient points.

Some of the other things that are useful, even if you're not one of those expert annotators, or you're not sure if you're an expert annotator, are just proofreaders. We've got on the Slack channel a sub-channel called Second Opinion, just like the medical jargon. So Second Opinion is where we have somebody that just is looking through the current question and answers and going "Hm, I wonder if that seems quite right... Because that doesn't seem to make sense to me." So they'll put it up and say "Hey, Question-and-Answer 234 is kind of weird. Can I talk to the person who annotated that? Or can I talk to somebody else who might be able to give us a yay or nay whether that's a good annotation or not?" Things like that are always useful.

I'm getting good response so far, but I'd love to always get more. As we talked in the beginning, just people that are at home, trying to figure out things to do... Again, we've got geneticists who might not be doing anything right now. We've got people with biochemistry degrees that maybe they're not doing anything right now, or maybe they're grad students... Perfectly, I would love to talk to them and try to onboard them for this. If you have an internet connection and know how to use a web browser, you're set.

**Chris Benson:** \[44:10\] I had a daughter who's a third-year med student, so I'm definitely a--

**Tony Reina:** Oh, perfect! Have her contact me, absolutely. We'll get her going today.

**Chris Benson:** I'm definitely gonna bring it to her attention. \[laughter\]

**Daniel Whitenack:** We made it to 25 at least, on this call.

**Tony Reina:** Excellent, we've made it to 25. \[laughter\]

**Daniel Whitenack:** And what's the best way for those sorts of people to contact the effort and get onboarded? Is the best way through the GitHub repo, or is there another way to do that?

**Tony Reina:** For the programmer, it's the GitHub repo. Then for the domain expert it's probably gonna be the Slack channel. And we can put the Slack channel up on the site. We're kind of keeping those two communities separated, so one doesn't get freaked out by the other... So we'll keep the coders on one side and the biologics on the other side.

**Chris Benson:** And we can also add that into the show notes, which I think is what Daniel is about to say there...

**Daniel Whitenack:** Yeah, exactly.

**Chris Benson:** ...that way it makes it easy for them to slide through to those.

**Tony Reina:** To click on it, yeah.

**Daniel Whitenack:** Yeah, we'll definitely get the Slack team added to the show notes... So if you're listening and you wanna be involved in the annotation, take a look at those show notes and make sure you reach out.

Circling back - so that's a great way to contribute from the research/user side of things. In terms of scaling up the general public use case of COVID-QA, it sounds like there's definitely still some needs there around language support, and maybe that has to do with -- Timo, maybe you could mention what would be best to add there; maybe it's scraping more information, more FAQs, or adding them... And then also, on the development side, where are your biggest needs right now in terms of making COVID-QA really useful for the general public? What are some needs that you have? Whether that's front-end development, maybe not even AI-related, or maybe it is AI-related.

**Timo Möeller:** It's really great that we are separating the labeling process and the developing process, because it will get super-complicated. I also wanted to thank Tony that he's taking also a lot of initiative for supervising and pushing the label process... Because I have never heard of an open source labeling process. And I think this will be a mess at some point, and it will be very complicated to interact and also to supervise the quality of the labels. I think this is the great part of this change - we just have to try and we have to make it work... So this is really great, on the labeling part.

On the development part, for computer scientists of any sorts, there's a lot of help needed. This is just a hackathon project. It's not like a full-fledged professional industry solution, so we need a lot of help. I'm in contact actually with a data scientist also from Intel, through a contact from Tony, and she's working on an intelligent scraper. Right now we have very manual scraping processes for each page that adjusts to the HTML structure, and we would need a more intelligent scraper that you can just point to an FAQ page and it automatically extracts questions, and also the answers. Of course, there will be errors, but this is a little bit unavoidable. Maybe we can do a review process there afterwards. So this intelligent scraping will be extremely helpful.

You also mentioned then that bringing this question-matching to other languages - this is something that is personally very important to me, because I think this will create the biggest societal impact. And there's a lot to do, because for now we have the question-matching algorithm, with sentence transformers and BERT just implemented for English... But making this work for other languages, with multilingual language models, for example, with this cross-lingual language model open sourced by Facebook, for example. This would improve the experience a lot. This on the modeling side...

\[48:10\] And then also a huge help we need on getting this actually to people. After the hackathon we got contacted by a person - I don't even know his/her name; it's the Apache 64. This person just programmed a Telegram integration. This service has an API where it can match questions, and you can call this API and integrate it into Telegram. This bot is just working, and we also integrated the feedback mechanism to feed back the user information back into our system.

This help is really appreciated, but what I think could be important there would be maybe a WhatsApp integration, and maybe even if we extend this really to low-resource languages, where people might not have access to mobile phones with internet... Maybe have like a text message interaction. But this would be a little bit further away, I would say.

**Chris Benson:** As we get toward the end here, I wanna ask a question and I'd like each of you to give me your perspectives, since you're coming from two different places on it. We're in this global crisis, which is unique, and has stressed all of us, and forced us to think creatively in ways that we have just never done before... It's sort of like living in a science fiction novel, to some degree.

So as you guys are looking at the role of artificial intelligence within the world, and we're looking at suddenly we have this crisis upon us, how do you see artificial intelligence technologies and data technologies impacting our way through this crisis at large? ...not just the project that you're in, but its role in the larger world. How has your perspective possibly changed over the last few weeks with regard to that, and what opportunities do you see as the most exciting in terms of the path forward, now that you are involved in this and seeing the results that you are? Timo, do you wanna go first?

**Timo Möeller:** Yes, totally. I would say this will enlarge the way corporates contribute to a solution that is helpful for everybody. For example, DeepMind has announced quite early a solution where they basically analyze the molecular structure with reinforcement learning. Basically, through interdisciplinary collaboration that is now made much more possible, less bureaucratic and very fast and agile, I think a lot of great solutions can emerge.

I also think that a lot of corporations give their employees actually some dedicated time to work on these solutions... So like a collective effort of everybody around the world to work on something that is not directly related to making profits, but to solving this crisis. I think this is something unique, as you said; it's a unique situation, and hopefully we can make people collaborate a little bit closer on things that are relevant for society.

**Tony Reina:** I love what Timo said about trying to do things that are relevant to society. I'm not an official Intel speaker, but I can tell you that we are very creative people and we're allowed to do a lot of things that interest us, in addition to our usual -- you know, what pays the bills.

This has actually been kind of interesting, that now the things that are interesting the whole company - and in fact the whole world now - all the extra stuff is now going toward "What can I actually do?"

In terms of the AI stuff, I kind of go back to -- you know, we're sheltering in place, and we're trying to get through the scale without being connected, and somehow AI is helping us to get through the mountain of data that's coming in, and trying to maybe focus us a little bit better. It's designed to be a tool. It's not designed to replace anything, it's designed to be a really, really nice way of sharpening the edge to figure out exactly what we wanna do and what's possible. So that's where I see AI coming in.

**Daniel Whitenack:** Awesome. Well, we appreciate you both taking time to join us today. I know that especially during this time there's a lot to work on, so thank you for taking time. Definitely, if you're listening out there and you are wanting to contribute in a positive way, using your development skills, using your AI skills, using your health knowledge and your medical expertise, please check out this project - the links are in the show notes - and reach out as well. If you're having trouble figuring out how to get connected, there's our Slack team as well, which you can find at Changelog.com/community. We're happy to get you connected to Timo or Tony and their team.

So just make sure you get connected and contribute, and thank you both Timo and Tony for joining us. I really appreciate it.

**Tony Reina:** Thanks Dan, thanks Chris.

**Chris Benson:** Yes, be safe. Stay healthy.

**Timo Möeller:** Thanks for inviting us.
