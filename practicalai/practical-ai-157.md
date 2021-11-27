**Daniel Whitenack:** Welcome to another Fully-Connected episode of Practical AI. This is where Chris and I keep you fully-connected with everything that's happening in the AI community. We'll take some time to discuss the latest AI news, and we'll dig into learning resources to help you level up your machine learning game. I'm Daniel Whitenack, I'm a data scientist with SIL International, and I'm joined as always by my co-host, Chris Benson, who is a strategist at Lockheed Martin. How are you doing, Chris?

**Chris Benson:** I'm doing very well, Daniel. How is it going today?

**Daniel Whitenack:** It's going good. I have some paper deadlines or paper submissions coming up very soon, so here in a week and a half, so a lot of my life right now is finishing up graphs and writing things and revising things and making sure references are put together, and all of that fun stuff.

**Chris Benson:** Understood. You know, I work for a big company these days, and we have all the usual PowerPoint and Word documents to navigate ourselves.

**Daniel Whitenack:** Yeah. Well, sometimes that's more difficult -- I feel like my Google Drive, it includes so much, but it's really hard sometimes to navigate and find what I want... Which I think actually we talked about on a recent episode; or you talked about with a guest on a recent episode.

**Chris Benson:** Yup.

**Daniel Whitenack:** I feel the pain there, but yeah, mostly, my life right now is thinking about, should this line be colored or should I do --

**Chris Benson:** Those are the worst.

**Daniel Whitenack:** ...dashed lines? Or what font size should this be? All those fun things.

**Chris Benson:** Yeah, I sympathize with you. I imagine most of the people in our audience sympathize with you as well, because... You know - talking about technology and data science, rather than actually doing it.

**Daniel Whitenack:** Yeah, it's definitely useful though, in terms of communicating what you've been working on helps you yourself also formulate like, “Oh, this was a nice story arc that we did”, or maybe there's gaps in our thinking. Usually, it's the latter where you try to formulate, and you're like, “I really should have done that, in addition to the other things" to sort of fill in the gaps of our thinking, or at least that's normally how it happens for me.

**Chris Benson:** Yeah, and I’ve got to say, you have a great attitude about it... I just -- hopefully, solitarily when I'm doing it, but I just whine. I just complain. I just go --

**Chris Benson:** Well, I'm not saying I never take that guy.

**Daniel Whitenack:** "...Oh God!"

**Chris Benson:** I’m not saying I never do that.

**Daniel Whitenack:** “I’ve got to do a bunch of PowerPoint slides before two o'clock today”, or whatever. Yeah, so you have a great attitude, man. You're like, “Oh, if I do this, I can learn from it.” I'm just like grumbling.

**Chris Benson:** Yeah. Well, we'll see how I feel tonight after another day of that. Yeah. Well, today we've got a Fully-Connected episode. There are a few things that came across our path over the last couple of weeks that I think we were texting to one another and saying, “Hey, it'd be really good to chat through some of these things.”

One was the updated AI Index Report from Stanford University. Another one though -- so we'll move on to that. Actually, we went to that AI Index and discussed it last year, but in this year, there's an updated version, which we want to talk through.

But before we do that, maybe there's a quicker one that I had, which is this article that I saw originally in the IEEE Spectrum, called Machines Learn Good, from Commonsense Norm Bank. New moral reference guide for AI draws from advice columns and ethics message boards. Very, very interesting. So that caught my attention. I don't know if that seems interesting to you, but I thought we might just talk about it for a second.

**Chris Benson:** It did. I read that article when you brought it up, and it is interesting. It's funny, there's so many different approaches to AI Ethics out there, because there's no standard way... We're so early days still, and I like the fact that they were literally like, “Oh, let's just go to the ethics folks and see what they have to say, and see if we can train it that way”, which is very practical. You know, for Practical AI, I thought that hit the mark. So... Interesting article.

**Daniel Whitenack:** It was interesting, for sure. In some sense, it seems a little bit like, I don't know, a little meta for me that we're training models... So maybe I should describe the premise of the thing.

**Chris Benson:** True.

**Daniel Whitenack:** So the premise of the thing is like, okay, we're all talking about how we need ethical and moral considerations and how we build AI models, and the decisions that they make, and all of that stuff. A lot of people are talking about this subject.

So in this work, Allen AI, or some researchers at the Allen Institute for AI, use a bank of commonsense moral judgment data to train a model to make moral judgment calls. That's why I mean, it's sort of maybe a little bit meta, in that we see that there's a problem that we need to consider ethics around AI, so let's train an AI to determine certain ethical things. I don't know. Maybe that's one thing that just sort of struck me.

**Chris Benson:** It is, but I would argue, how can they go wrong? I mean, they're actually using Dear Abby, you know, the advice column as one of their bases, one of the data inputs that they're using there... Which raises a little tiny side point I just need to raise. I'm in my early 50s, and Dear Abby has been around all my life. I'm just saying, Abby must be really, really old at this point.

**Daniel Whitenack:** Yeah, yeah. That's probably true. Maybe Abby is an AI.

**Chris Benson:** Oh, wow. Maybe she always has been. Maybe we're living in a simulation. I won't go down that rabbit hole.

**Daniel Whitenack:** Yeah, yeah. Okay. On that note, I'm just reading through the data here that they're using, and what it talks about is - to train the model, they use this commonsense norm bank, which is a collection of 1.7 million examples of people's ethical judgments on a broad spectrum of everyday situations. Very interesting. I'm just looking at one of the things that's highlighted here, which I think is -- or I don't know if it's exactly represented like this in the dataset, but the sort of highlighted example here they have is, “Killing a bear to please your child is bad. Killing a bear to save your child is okay. Exploding a nuclear bomb to save your child is wrong.” So I guess when they say this is ethical judgments on a broad spectrum of everyday situations, I guess everyday situations include nuclear bombs.

**Chris Benson:** I guess so. We all have access to exploding... Um... Apparently. It's a curious example.

**Daniel Whitenack:** Yeah. This is very interesting, that there's different sort of aspects of the same kind of entities or things represented in this dataset. My understanding - and if anyone from the Allen Institute is listening, they can come on the show and go into more detail, but my understanding is they train this model on this data set, and then they actually employed some crowd workers using Mechanical Turk, to evaluate a thousand examples of moral judgments from the model.

**Chris Benson:** Yes.

**Daniel Whitenack:** Doing this, they've found that the model, which they call Delphi, achieved 92.1% accuracy, compared with lower accuracies for other sort of existing models like GPT-3, which we've talked about before on the show. Yeah, I mean, I guess 9 out of 10 moral judgments from the model, at least on an average, from crowd workers seem to be justified, or right, or however you want to put it.

**Chris Benson:** There is one little side thing I want to hit here, since they’re mentioned... I think you're the right person for me to ask of, and that is GPT-3. With its much lower performance overall, what do you think that says? I mean, GPT-3 was, from a massive amount of the internet being sucked in as a source and processed - would that imply that the internet is, you know, the context --

**Daniel Whitenack:** Less moral?

**Chris Benson:** I don't know.

**Daniel Whitenack:** Immoral?

**Chris Benson:** Is the context of ethics largely absent from the internet in terms of how different material out there is presented, just on any given website that they happen to pull from? It's interesting that they had to focus on something to give it the context, to give it the specificity of that.

**Daniel Whitenack:** Well, I would have to read a little bit more into how they used GPT-3. I mean, certainly, I would agree that large portions of the internet are immoral, but that's separate from any of my views of anything related to AI... But you know, just based on my own thinking. When you use GPT-3, typically, you're looking at sort of a few shots scenario, where you have this pre-existing language model and you sort of start feeding it examples of the type of thing that you want it to do, and then it starts doing this action.

Now, I don't know exactly how much of maybe the commonsense norm bank they used in terms of fine-tuning GPT-3, or if it was truly, you know, few-shot or something like that. I'd have to read a little bit more there to understand it. I think that GPT-3 is sort of this general-purpose model, and the Delphi model was very specifically trained to do this task.

So it's not incredibly surprising to me that it performed better, and I think it is good that people are thinking about this side of things. Definitely, there's a lot of commonsense, complicated, subtle things that happen with language, and I think the Allen Institute for AI has done a lot of thinking with regard to commonsense, and you know, pitfalls that many language models fall in... So I'm glad -- this seems to be a continuation of some of their thinking with regard to that subject, and that's good from my perspective, I think.

**Chris Benson:** I'm looking as you're saying that at one of the other highlights that they have just below, and they note that the system stumbled on time of day judgments; it is running a blender rude at 3pm or 3am... And unfamiliar topics as well, such as sports and law, regarding what they were doing there. Do you have any thoughts on why some things might be easier or harder than others in NLP models in terms of picking up on that?

**Daniel Whitenack:** Yeah. I mean, it's still an open topic of research probably, because a lot of what happens in these large models is not incredibly interpretable. So I think that's an open area of research, but I know that there have been a lot of -- well, I don't know about what few people consider a lot, but there's been some work with regard to adversarial NLP examples, and we've talked about those very briefly certain times on the show where... Like, for sentiment analysis, if you were to say, “I really love the United States”, that might be judged by a model as positive. And then you could say, “I really love Turkey”, but then all of a sudden, by just changing the United States to Turkey, then it's viewed as a negative, because most of the examples in the data set regarding Turkey are probably some sort of like negative examples.

There's an underlying behavior of the model that isn't really probed until you do these sort of adversarial examples, which is probably true in this case as well, where there's just topics or scenarios that aren't well represented in the data, or are very scarcely represented... And so that might play into the behavior for sure. But yeah, I mean, it's interesting to see if others will try similar things to this, and maybe AI models can start writing their own ethics principles for AI models.

**Chris Benson:** That would be interesting. And to that point, they also note in the article, when you're talking about it writing its own -- that this particular model tends to reflect the status quo, the cultural norms of today's society, and yet, we know that... You know, to tie this into another topic that we've hit a bunch of times, with this type of automation becoming more and more pervasive in every aspect of our lives, we know that our society, our culture has to change to accommodate work, humans at work or not at work, and other such as that. It would be interesting if we could use a model, maybe a next generation of this that can talk about what might be ethical in a different society that's reachable going forward to help us get there, and use AI to help us solve the AI at work problem.

**Daniel Whitenack:** I did, just reading a little bit further along... They do make some statement about the explainable and transparent part saying they'd like to grow the dataset, since at the current stage it's hard to know why exactly it said what it did. So that kind of gets to your previous point, and it sounds like they'll have more for us in the future.

**Chris Benson:** Absolutely. And we can put in the show notes the paper that this is based on, it's called Delphi: Towards Machine Ethics and Norms, and we can include that for people to go read, as well as the article.

**Break**: \[18:10\]

**Daniel Whitenack:** Okay, Chris, well - last year, I don't know if we'd consider this a follow up Fully-Connected episode, but last year we did talk about the AI Index report, which came out from the Stanford Institute for Human-Centered Artificial Intelligence, and we have an updated version of that for this year. There's sort of a bit of a summary article, which I think you ran across, also on IEEE Spectrum, but you can also look at directly at the AI Index Annual Report site, and they have some sort of major takeaways as well.

**Chris Benson:** They do.

**Daniel Whitenack:** Yeah, this is as always very interesting. I encourage any practitioners who are working in the space to take a look at this and to see what some of the trends are from the past year. I'll start off by just mentioning that the number one takeaway that the Stanford site mentions is that AI investment and drug design and discovery increased significantly. There's more than $13.8 billion of investment in this area apparently, 4.5 times higher than in 2019. I don't know what possibly could have could have spurred on that shift. \[laughs\]

**Chris Benson:** Yeah, what could it be? Pandemics!

**Daniel Whitenack:** What sort of health-related thing happened in the past couple of years...?

**Chris Benson:** And yet they don't mention that in their lineup. But it's interesting... It is notable in that it's a very specific use case, and the ones around it that we'll hit in a moment are a little bit more general than that. That was the very first thing I noticed when we started looking through the article before the show, was just how -- I was like, “Wow. Okay, that's number one. They're calling the attention out there.” So it'll be interesting to see over the next few years where this goes with drug development.

**Daniel Whitenack:** Yeah. I know that there have been efforts for some time, and sort of protein folding and genomics, bioinformatics as related to AI techniques, and it sounds like that's increasing a lot, but now sort of in the commercial sector, where people are -- and maybe where I'd heard about it a little bit more was on the academic and research side. So it sounds like this is shifting a little bit into industry.

It's a difficult problem, with a lot of data that is also very large and complicated data, like genomics data or bioinformatics data... And AI is particularly good at that those sorts of problems. Yeah, it'll be interesting to see how people apply this, and also how -- one of the things I'm always thinking about is how are the experts going to be involved in the loop with the model? Are they giving some hints to the model as it sort of probes the landscape of drug design? I'm guessing that not all of the people working in drug design won't be a part of the process moving forward... And I'm not in that field, so I don't know exactly what sort of input they might give... But I hope that that's being thought about as well.

**Chris Benson:** Indeed. The next one they mention is the industry shift continues, and what they're talking about there is they note that 65% of graduating Ph.D's in North America in the AI space went into industry, instead of staying in Academia. And that's up fairly substantially from 44.4% a decade ago.

When I think about that, I think about you, Daniel. You represent that trend. And when I think about our guests on the show over the last three years, we've had many, many people with Ph.D's in either this or related field, or they've migrated into this field, and the majority of them have been in the industry as opposed to Academia. We've done both. I think the show represents that trend very directly.

**Daniel Whitenack:** Yeah, and I'm a little bit curious as to -- and I have to do a little bit more reading of what the category of Ph.D's in AI quote is. I know that, you know, part of my background, like you said, is from physics... And in physics, at the time -- and I think, I think it continues to today, although I haven't followed it as much... In physics, there hasn't been like paradigm sort of shifting things happening, for the most part, if you look on the whole, you know, since the sort of '20s, and '30s, 1920's and 1930's, and the huge revolution that happened. And certainly, there have been advances, but because of that sort of investment and the amount of academic positions in physics weren't that many, and is very highly competitive, right? So you might end up doing like three postdoctoral positions before you end up getting a tenure track position, and then you're still not quite to stability yet, because you've got to go through the tenure type stuff... Yeah, it's very difficult. I'm sure that that impacts other fields as well, but when you can come out of your PhD and still do sort of cutting edge research, but at a cool place, like -- whether it's Google Brain, or the Allen Institute, or a cool startup like Hugging Face or something like that, and you're still writing papers, but you're into it and you can have a little bit more of your own research agenda and participate in a significant way sort of out of the gate, and also not teach... A lot of people don't like to teach... It's pretty appealing. Nt to mention that the salaries are higher, so it will be interesting to see how much is drained out of Academia, and if the the competition for academic positions changes as a function of this.

**Chris Benson:** True.

**Daniel Whitenack:** Yeah.

**Chris Benson:** The next thing they mentioned is Generative Everything. They talk about the fact that text, audio, images are so high standard at this point that it's pretty hard to tell the difference. And that's true. I've noticed that on a number of AI-driven services with generative output. You would think a human wrote it.

**Daniel Whitenack:** Yeah, and it's kind of multimodal at this point. I mean, they used to have sort of images or images of people or something like that, but I know that we've had people on the show thinking - when we talked about machine learning for music, and generative music, or text in the case of GPT-3 or something like that... Is that like, in your, as you think about AI, and what you worry about in terms of applications of AI, does that factor into something that weighs on your mind? That generative things are out there, it's hard to tell the difference, there could be a contribution to fake information...

**Chris Benson:** Oh, sure.

**Daniel Whitenack:** Does that factor up there, and in your mind? I know you do a lot of thinking on sort of ethics, principles, and strategy.

**Chris Benson:** Yeah. I mean, at that level, it's a huge concern. Governments are concerned about it, corporations are concerned about it, I think people should be concerned about it... It's one of those things -- we've let the genie out of the bottle, and the genie is really convincing, and yet, it is quite difficult to tell the difference between the genie and the human. So if you're putting tooling out there with a specific agenda around it, that maybe the affected parties might consider nefarious, then there's a lot of things that we have to sort through.

I think that's one thing we've learned... We started with the ethical conversation at the beginning of this, but there are so many areas in AI that we have not figured our way through in terms of how to have a safe, productive, good world with these tools. It's not that the tools are bad, but they fall in the hands of people who are out to effect an agenda. So it definitely affects all of us, and it's definitely something I worry about.

**Daniel Whitenack:** So in terms of your own just day to day thinking, when you're talking to your family or others about AI, what should be prioritized as maybe the biggest problem that we're facing with AI? Is it the talent and diversity among that talent within the AI community? Is it generative things and misinformation? Is it bias in datasets? Is it AI becoming sentient and taking over the world? What's on your mind as you're talking to people?

**Chris Benson:** I would say the generative stuff worries me the most in the short term, because of those issues. Because it can be taken advantage of so easily, and it's so accessible to such a wide audience, and the output is of such high quality that it allows us -- I mean, we've really seen this over the last few years here in the United States in particular, in our political system, is that it can make you question what is real. And I have really, really good friends here in the American Southeast that see the world in a completely different perspective.

Everything about the world is different to them. It's almost like we don't live on the same planet, in the same country. And when you are shaping the data or the information that gets to people that they are choosing to process, and you can channel that, and you can target people, it can make the whole system fall apart if you let it go far enough. So that worries me in the short term a whole lot more than AI becoming sentient, and taking over the world, and eating us all as Matrix, Neos or whatever, or non-Neos maybe. That may someday become a problem, I don't know, but it's not the problem that we have today or in the near future. But the problem of understanding what our reality is - I know that's real, because I can talk to some of my very closest friends. It's completely different stuff.

**Daniel Whitenack:** Well, one of the interesting links that you forwarded along to me, Chris, was -- so there's the AI index itself, but then IEEE Spectrum did a sort of take on the index, which is titled, “15 Graphs You Need to See to Understand AI in 2021.” I would recommend people, if they don't want to read the whole index, this is a good -- well, I don't know. It is pretty much always what I do when I read a paper, right? You read out the paper and you sort of flip through and look at the graphs and see what catches you... Maybe other people aren't as vain as me, and just looking at pictures, but that's normally what I do.

**Chris Benson:** That’s what they’re there for.

**Daniel Whitenack:** Yeah, exactly. So this is an interesting sort of take on everything. One of those graphs that stood out to me, which I think is a really interesting idea, with a whole variety of implications and aspects, is that they say at number three, “Faster training equals better AI.” In other words, training has become faster based on certain -- you know, AI training of models has become faster. They talk about the standard ImageNet data set, and training a state-of-the-art model.

On that data set in 2018, it took 6.2 minutes to train the best system, and in 2020, it took 47 seconds. Of course, this is due to a lot of the advancement in accelerator chips and distributed training and specialized hardware that's designed specifically for AI and machine learning... And the implication is that if you're able to run your experiment in like 30 seconds, rather than waiting like three hours, then you can run it a lot of different ways, with different parameters, and all of that stuff, and eventually, you get to a better model than you would have if your training was slower.

To me, and to some degree, training is getting faster, and so that makes me encouraged, because we're also having a significant sustainability problem in AI, where these large language models and other ones - it takes so long to train, and it takes so much power.

It's great if you can run things faster, but then if you can run things faster, then maybe you just end up running more things, rather than not needing to run as many things for as long, which - yeah, it’s kind of the other side of this, I guess.

**Chris Benson:** Put simply, if you have models that can be trained that much faster, you have a lot more options... Because it's still humans, on a human timescale, in a human day at work that are putting these together. We're still filling those hours, and if you can train many more times in a given span of time, then you get better stuff. I thought a lot of the things that were in this made a lot of common sense, that being one of them, is you have more options. And I don't see that slowing down anytime soon.

**Daniel Whitenack:** There's also a couple of graphs about citations, and some implications of that. The one that they've labeled is “We're living in an AI Summer.”

**Chris Benson:** Yup.

**Daniel Whitenack:** ...where you sort of look at the graph, and... This is what's hard about being on a podcast with only audio, but if you look at the graph of sort of citations per year, number of AI citations and journal articles per year, that percentage or number, and you look at that graphed over the years, from 2000 it kind of is rising up, then it kind of maybe plateaus or even goes down a bit, to where I remember people were talking about, “Hey, well now the peak has happened and now we're just sort of going back into some type of winter, or normality” or something like that. But then it comes sharply back up again in 2019 and 2020.

**Chris Benson:** This chart I've found really, really interesting, because we've had that conversation ourselves, and I've been one of those people that was a little bit disappointed. But if you look at the dates on it, with it rising steadily up to 2013-2014, and then kind of taking a dip over the next few years, and then once again, starting that uptrend in 2019... It made me realize, the perception of what's happening in AI trails the publications of the research papers a bit. Because if you look at the over three years you and I have been doing the show, a good bit of those early episodes, we're kind of catching up in us educating ourselves and educating folks in our audience about all the research that had already happened. And then we kind of went through that, and - going back to me at the beginning of the show, talking about whining... I’m whining a little for a second. I was whining that while it hasn't felt like we’ve had big breakthrough things like we used to feel like were happening a lot... But I think we have, it's just taking us a little while for those to get out in the space and people to take advantage of it. At least that's how I'm interpreting the data I'm looking at, given the little bit of time lag. So I would say that bodes very well for us continuing to have these great conversations.

**Daniel Whitenack:** Yeah, yeah. For sure. The other trend within the citations that they note is that China takes the top citation honors, and one of the things that they highlight about the AI research in different geographic locations or countries is that China has a stated policy of getting journal publications. They really pushed for that. Whereas in the US, maybe a good portion of AI R&D happens in corporations. And so if you're in a corporation and you're doing AI research, generally -- you know, this isn't true across the board, but you might have less of an incentive to publish journal articles, especially if the company is wanting to keep trade secrets, or if maybe you're just trying to get the product finished, or advance something, or whatever.

**Chris Benson:** Or if there are national security implications, which is something I'm obviously familiar with in my industry.

**Daniel Whitenack:** Yeah, exactly. So this wouldn't maybe be saying that the U.S. isn't doing an increasing amount of AI research, but in terms of the publications, China is definitely now dominating. They put a lot of investment in that area, and so it's not surprising. Their numbers keep rising, and they keep doing more and more AI research. So yeah, it's definitely maybe changing the landscape a little bit.

**Chris Benson:** It is. It is. And we've been watching that trend... You know, we've gotten across that rule. We've been watching that for a while. It was expected. The big question mark is, with their focus on publishing, and yet we know that there's a lot of unpublished research, what's the delta between what's published and what's not on the non-China side? I can't help but wonder.

**Daniel Whitenack:** Yeah, yeah. Another interesting fact that they talk about in this report is the global AI job market. So I know a lot of our listeners - you want an AI job. I've talked to many of you about it... And so this, I know, is an interesting aspect of what people are thinking about and interested in... And the AI Index talks about Brazil, India, Canada, Singapore and South Africa as having the highest growth in AI jobs. And so we're thinking of strong representation in Asia and Latin America in AI jobs, which is really interesting.

I remember a few years ago I visited AI Singapore, which was a really innovative and great effort that the government and universities in Singapore were behind in terms of becoming a leader in that area. So yeah, countries are promoting this and trying to establish AI talent in these places, not just sort of have AI practitioners from those places go to other places to do their AI work.

**Chris Benson:** Yeah, I agree. There are a couple of points they make, and it's actually in both the IEEE Spectrum that they highlight some of this, and it's also in the core article... They note that AI continues to have a diversity challenge in terms of its practitioners, and then relative to diversity, we're talking about those different countries where it's really on the rise, but they also note that the majority of US AI Ph.D. grads are from abroad, and that they're staying in the US.

It's an interesting mixture of how that all shapes together and looking at it, but I can't help but ask along the way, why do you think that most of our Ph.D. grads are from abroad? Any thoughts or opinions or anything on that? Versus why are we not attracting, here in the United States, more students that want Ph.D's in AI and get out there in the industry? What do you think is happening with that?

**Daniel Whitenack:** Yeah, I don't know. I mean, there's a lot of things factoring into the makeup of grad students and Ph.D. students, and I'm probably not an expert in that area to comment... But I think there is a trend for -- and I don't know if you picked up on this, but it seems a little bit like, from the U.S. side of things, if you think about and look at some sort of like data science, either data science curriculum or bootcamps or content that's out there on the internet used to I think it was fairly common for a data scientist to be a Ph.D, but now I think people are promoting more the path of data science as a post-undergrad career, where you can sort of come out of a computer science background and into data science, not necessarily as a researcher but as a data science practitioner, a non-Ph.D. data science practitioner. My guess would be that that would have grown, while maybe the Ph.D's are staying more static.

**Chris Benson:** I mean, to some degree, that's me. Earlier I said something reminded me of you, but I'm not a Ph.D, and I come from a software development background, and my perspective was to pick up data science as yet another skillset, to add value into the types of activities I was trying to accomplish.

Speaking empirically, I see that in the people around me a lot. So yeah, rather than going all the way through on the Ph.D. track to just go ahead and get out there and start doing it, but it's one of many things that they're doing... Which actually leads me to one of the things that I don't see on either of the article or called out in the report - it may be in the report - because it's 222 pages, and I have not read that whole report. I focused on the highlights. But it doesn't call out anything about job concerns and stuff, which is a huge thing on people's mind at this point.

I have people ask me about that, just knowing me from the show and stuff all the time. It's one of the most common subjects that people will approach me on, but I don't see anything in there. Do you think they've missed things? Or maybe that would have been the 16th takeaway in the article, or the 10th takeaway in the source doc?

**Daniel Whitenack:** And by concerns, do you mean the availability or competition for positions, or...?

**Chris Benson:** Yeah. I mean, you have so much automation happening out there...

**Daniel Whitenack:** Oh, I see. The impact of AI on other...

**Chris Benson:** On jobs. And I'm seeing that a lot, and in different communities. A lot of times, it's pretty subtle. Now that deep learning deployment has become cheap, especially if you have a very specific focus, and you're seeing really common, mundane tasks being replaced by automation that has this benefit of deep learning to help drive what its task is, I have people ask me about that a lot. But maybe it's not a key takeaway. Maybe we're not quite there yet. What do you think?

**Daniel Whitenack:** Yeah. It could be that it's a lot of companies that are trying to introduce that automation still need similar workforce, but maybe just doing slightly different things. So there's maybe not as many areas where automation is completely taking away positions, but they're more morphing that position into something else. That might be a guess. Or maybe it's just not a massive change in the past year with respect to that; it's sort of still happening as it was in previous years or something like that, and not as much of an acceleration in the automation of jobs away factor. It seems to be something we can make an acronym for.

Yeah, so I encourage our listeners -- we’ll post the links to the report in the IEEE article, which goes through the different graphs on that. I have one thing that I wanted to highlight. In these episodes, the Fully-Connected episodes, we always like to do a learning resource or two for listeners, and something came across my Twitter feed, and I was looking into a little bit more, because I'm also helping connect some of our practitioners with some professional development opportunities here at SIL, but... Hugging Face now has a Hugging Face Course for transformer models. The course includes things like an Introduction to Natural Language Processing and transformers - what can they do, how do transformers work, encoder models, decoder models, sequence to sequence models, talking about bias and limitations, using transformers, fine-tuning a pre-trained model, and sharing models and tokenizers.

So this seems like a great time for this to exist, as Hugging Face now has integrations with even sort of multimodal things, like speech and image-related models... So learning about transformers, learning about how to share models and work with datasets using an open source framework like Hugging Face datasets - all of that seems super-relevant and timely. So if you're interested, I highly recommend that you check out the Hugging Face course and learn a little bit about that. So we'll include a link in our notes for that course.

**Chris Benson:** I think I'm going to go do that one myself.

**Daniel Whitenack:** Yeah, and it includes some video components, text, and images... Yeah, check it out. Well, Chris, it's been really good to chat through some of these things and revisit the AI Index this year, and talk through some of it. Thanks for pointing me to it, and for talking through some of the points. I look forward to talking to you about it again next year.

**Chris Benson:** It was a good conversation this week, and good, interesting material like always this year. I will talk to you next week.

**Daniel Whitenack:** Sounds good.
