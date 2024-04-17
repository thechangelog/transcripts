**Daniel Whitenack:** Welcome to another episode of the Practical AI podcast. This is Daniel Whitenack. I am founder and CEO at Prediction Guard. I'm joined as always by my co-host, Chris Benson, who is a principal AI research engineer at Lockheed Martin. How are you doing, Chris?

**Chris Benson:** Doing good Daniel. How's it going today, man?

**Daniel Whitenack:** It's going great. I just landed in Boston, and you were texting me and you're like "Hey, Demetrios from the MLOps community wants to hop on and record an episode", and I was like "I've got to get out of this train station." So I just found the nearest stop and got out, and I don't have my normal setup, so I probably sound weird... But I was like "These are the best times, when we get to have our friend Demetrios on." How's it going, man?

**Demetrios Brinkmann:** You guys can't get away from me. I blackmailed your boss into letting me come back on here. \[laughter\]

**Daniel Whitenack:** Standing invitation.

**Chris Benson:** Absolutely.

**Daniel Whitenack:** What's up, man? How you doing?

**Demetrios Brinkmann:** I'm so excited, because I try not to abuse this standing invitation. I had a great time the last time I was on here, we had a bunch of laughs... And a lot of people reached out to me because we had this RAG versus fine-tuning conversation, and I think things have kind of -- like, the pieces have fallen, the cookies have crumbled... It feels like fine-tuning is not as popular as it was. I don't know what you all are seeing out there, but RAGs are the go-to in these days.

**Chris Benson:** Yeah, that's what I'm seeing. Everyone's RAGging each other all over the place.

**Daniel Whitenack:** And I think - yeah, along with that, there's sort of like... In my mind has developed this category of - so there was RAG, which of course you're augmenting the generative model with data... But not in the way that people typically think of fine-tuning; you're just doing retrieval. But I think also these other sort of workflows around calling external tools, or the neuro symbolic stuff that we're seeing, of like combining a rules-based algorithm or function, or a "traditional machine learning" algorithm with generative models maybe to get the inputs... And then like connections to databases... All these different ways. It kind of seems like people are figuring out that generative models are great at being kind of assistance and automators, but not necessarily predictors, or other kinds of functions too, like analytics types of things, and that sort of stuff.

**Chris Benson:** I've noticed there's been a new term coined, at least for me, RAG as a service. Have you guys run across that? RAG as a service is now like a thing.

**Daniel Whitenack:** Is that acronym just RAAAAAG?

**Chris Benson:** Don't even try. You're just gonna strain the vocal cords if you do that, man. Yeah, RAG as a service. "We'll RAG you. If you bring your thing, we're gonna RAG you." Yeah.

**Demetrios Brinkmann:** Well, I think what you're saying, Daniel, really speaks to something that I've been seeing too, which is the maturity in the last (whatever) six months; it's become very clear that there's traditional ML workloads and use cases that are kind of going to always be traditional ML workloads. If you think about like your fraud detection models, or like the term prediction, or the recommender system even... And then you have your generative AI workloads or use cases, and that's something - like transcription, or you have the LLMs which are doing all sorts of stuff, but RAGs are probably the biggest ones in that, where you get that Copilot... Or code generation I think is a huge one... There's not like such a big overlap where you're saying "Okay, the generative AI use cases, or the generative AI models are going to dethrone the traditional models."

**Chris Benson:** I agree with that. Definitely different use cases.

**Daniel Whitenack:** I think one thing - we had our first gen AI mastery webinar with the podcast... When was that, Chris? A couple of weeks ago, or something like that.

**Chris Benson:** Yeah.

**Daniel Whitenack:** And we were talking about text to SQL specifically, and that analytics -- like, SQL is really good at doing analytics, right? Especially descriptive analytics, and aggregations, and all of that... And it just doesn't make any sense for you to take a big table and somehow figure out how to dump its contents in a prompt, and have a model reason over it, because it's probably going to get it wrong anyway. But also, there's this existing tool which can be called, which is really awesome at doing those things.

**Demetrios Brinkmann:** I love the idea and the exploration that's happening right now on "How can we merge both of these worlds?" and "How can we see what different parts work well together, and which combination of the traditional ML plus the generative AI can go together?"

**Daniel Whitenack:** \[00:05:43.27\] And I know that you do a series of surveys with the MLOps community. I think the last time that we talked, we were talking about some of your survey work and some of the interesting findings, but I think you've gone through other iterations of this, right? So are you seeing interesting things pop up as the community around this technology matures?

**Demetrios Brinkmann:** 100%. And I just come on here when I've got survey insights to share, I guess... That's what I'll be known for. Whenever we have a nice survey --

**Daniel Whitenack:** The pollster of AI...

**Demetrios Brinkmann:** Yeah, I'll come and share it with you all. But this one is cool, because this time - so we did an evaluation survey, and we launched it when we had our virtual conference, which had a huge turnout. It was over two days span...

**Daniel Whitenack:** Which was awesome, by the way.

**Demetrios Brinkmann:** It was great. You were part of one of the past ones, right?

**Daniel Whitenack:** Yeah.

**Demetrios Brinkmann:** You had an awesome spot. But the two-day span - we tried something different and we said "What if we do two days, but since it's virtual, nobody has to fly anywhere?" So instead of you trying to watch a live stream for eight hours a day on a Thursday and then a Friday, why don't we just do two Thursdays in a row? And then you don't have to feel like "Wow, I just had 20%, 30% of my week eaten up by that eight-hour live stream or 16-hour live stream. Now you can tune in, tune out on a Thursday of your choosing.

But we launched it there, and the response has been amazing, because normally maybe we'll get like 100-150 people that will fill out the survey; this time we had 322 is the number of these...

**Daniel Whitenack:** Oh, nice.

**Demetrios Brinkmann:** ...which is super-cool to see. And so let me give you some of the clear insights. One, there's budget being allocated towards AI these days. I don't think that's going to surprise anybody. The fascinating part is that 45% of the respondents said that they're using existing budget, and then a whole whopping 43% here said "No, we're using a whole new budget." So you've got exploration happening in generative AI like never before. But when it comes to that, one other takeaway has been that the MLOps, AI, ML engineers - they're really trying to figure out what the biggest leverage use cases are and how they can explain that. And I think what we're seeing is there's a lot of companies that are open to the exploration right now, and they're open to letting people say "Alright, cool, what is the most valuable for our teams and our company? Is it a chatbot that is an internal chatbot? Is it an external chatbot? What does that actually look like? What is the use case?"

**Chris Benson:** It's kind of funny, we actually talked about that a little bit last week, Daniel and I did, in terms of trying to get non-technical people engaged in it. And I think that there are organizations all over the world right now that are doing exactly that, to your point on the result that you're seeing. There's a lot of effort and a lot of money being thrown at how do we start doing that.

**Demetrios Brinkmann:** And it's all -- really, the shining star here was just RAGs, obviously; it's very clear. Everybody's using RAGs. And the participants self-identified as being intermediate in RAGs. That was the majority. So we had like 31% saying that "We have some experience with LLMs and RAGs." And then you only had 6% saying "We are at the frontier of LLMs and RAG model innovation."

**Break**: \[00:09:42.17\]

**Chris Benson:** So let me ask you guys a question and get some opinions going here on that. Do you think, you know, with all of these assistants and chatbots and all the other kind of focus things in gen AI, with those using RAG, do you think those are for more kind of general use cases having some domain knowledge in, and do you think that - maybe going back to the last time we had you on the show, when we were talking about fine-tuning, do you think that kind of highly specialized fields will still stick with fine-tuning instead of RAG? Do you think, in other words, the degree of expertise required, if you will, to get a job done productively - do you think that makes a difference on whether or not you go RAG or fine-tuning? Or do you think it has nothing to do with that?

**Demetrios Brinkmann:** I would love to hear what Daniel has to say in a minute, but I've heard something said about like fine-tuning is for form. So if you're trying to get a different form on the output, or for example if you're trying to get functions and the whole - basically, GPT functions are a perfect example of this. So if you're trying to get a homegrown model to do that type of thing, then fine-tuning makes sense. Otherwise, it's not necessarily the good call, because unless you're using a very small model I think is the thing there that "Okay, what's the trade-off that you're doing?"

And the other thing that is probably worth talking about when it comes to the difficulty levels that I've seen is people that want to go and use a small model, a small domain-specific model, that is distilled, or it is very fine-tuned and distilled, and it's in their own infrastructure, and they need a whole team to support that - that's like hard mode; you're playing on hard mode, and you contrast that with just a GPT-4 call. That's a whole different level of the game that you're playing. And so I kind of look at it that way, like how much are you willing to trade off when you're trying to figure out "Is this the way forward?"

**Daniel Whitenack:** I would agree with that. I think the only thing I would add is there is still, at least as far as I've seen with our enterprise customers, an inclination that they need to fine-tune. That's still a kind of general "Oh, we need to do that at some point." And I think once they kind of solve a few of their use cases without that, they kind of disillusion themselves of that notion, in many cases. But the good thing, like you're saying, Dimitrios, is like you can probably prove to yourself without a huge amount of effort using an easy to use API, whether or not you'd need fine-tuning, and do that in like a day... Versus just immediately going to jump to fine-tuning, and "How do we get GPUs? What model server are we going to use?" and all of that stuff. Like you say, that gets very much into hard mode very quickly, and you don't sort of need that to validate your use case often. And even if you do fine-tuning, sometimes it may be down the line, when you've been running the pretrained model for quite some time, and you actually have a good prompt dataset to fine-tune with... Because most people don't start out with that either.

**Demetrios Brinkmann:** That's a huge point, too. And this is probably the biggest unlock that happened, is that okay, now that anybody can use the Open AI API, you can quickly see if there's value in that crazy idea you have. And then you can go down the line, like "Alright, now I'm gonna use an open source model which is turning the knob to something harder." Or maybe it's not even using an open source model. Maybe it's just like "Can we get the same results with a smaller model from Open AI? So instead of GPT-4, we're going with 3.5 turbo. Can we then go to an open source model and get the same results?" I almost look at it like a spectrum of how difficult you want to make your life, and how much upkeep you're going to need, and all of that. But as with everything, there are benefits if you go to that very small model, if you need it. And you just have to really like play out and see if you actually are going to need it.

**Daniel Whitenack:** Speaking of another survey, just to make it an increasingly survey-driven show...

**Chris Benson:** "Survey says..."

**Daniel Whitenack:** \[00:15:43.12\] Yeah, "Survey says..." The Andreessen Horowitz post that they did another sort of survey which was kind of interesting, and part of what they drew out - I forget the range of participants that participated in the survey. We can link it in our show notes. It was just posted March 21st; we're recording this maybe a little more than a week later... It was about enterprise -- so 16 changes to the way enterprises are building and buying generative AI. And one of the things that they specifically highlight there was enterprises are moving towards a multi-model future, and specifically a multi-model future driven at least partially by open models. And so I think the other kind of interesting trend that you're seeing is they have a graph with how many model providers are people using per company, or whatever, and you see three, four, five, in many cases... And also a high adoption of open models. And I think what they're trying to draw it is some of that is maybe driven by security, privacy things... But I think also it's driven by like control and flexibility. And once people start realizing -- I also find it still a pretty big misunderstanding that people have, that all of these models sort of behave the same. And in reality, pretty much every model has a character of its own, and its specific behavior... And even just switching from Open AI to an open model for like text to SQL, for example a model that doesn't do other things well, but does that really well can prove to be really useful. Or maybe it's a specific language thing. We're doing a mandarin chat right now with one of our customers.

And so whether it's language, or whether it's task, people are I think finding out that their future is multi-model or multi-model provider, or whatever, mainly because of that behavior thing, but also because they can have some control over when they use this model, or when they use that model, and kind of create the mix that's right for them. And that's kind of a way - it's like a route around fine-tuning in some ways, because you can kind of assemble these reasoning chains even with multiple models involved that do very specialized tasks. And that can kind of help you avoid spinning up and running your own fine-tune that does this very unique reasoning workflow. You can kind of bring all the experts in, bring all the expert models in to help you.

**Chris Benson:** I can't help but wonder - you know, that's a built-in capability that you have at Prediction Guard, but I think that there's a maturity issue there with a lot of organizations on getting to that point... And so what I'm seeing is very mature organizations are going exactly to that - having multi-model capabilities, and they have the ability to distinguish between which models they should use for which circumstances... I suspect - and maybe there's some survey data on this, but I suspect that that's still a fairly small group of even enterprise organizations that have gotten to that level of understanding of what they can do. And I think there's a spectrum falling off from there that the bulk of the world is in right now in terms of trying to figure out how to make it work for them.

**Demetrios Brinkmann:** Let me twist some statistics to play in your favor. Hold on, I'm gonna crunch some numbers... \[laughter\]

**Daniel Whitenack:** That's awesome. I love it. Live -- you're probably not using an AI model to do it, but...

**Demetrios Brinkmann:** No. I'm gonna weave that narrative that you've got, Chris, and I'm gonna go with it, with the survey data as you're asking for... No, but actually the biggest question as you guys are talking about this that goes on in my head is you know what engineers really do not like, and I think it makes them very anxious? It's having a single point of failure. And so if you are relying on open AI's API, and you have a lot riding on that, where does that all go if you the CEO gets ousted?

\[00:20:02.02\] So I imagine that a lot of people thought twice after there was that big drama that happened, and people started thinking "You know what? Maybe we should try and have a few redundancy options, just in case." Now, you do have to have a bit more maturity to say "Okay, I can't use the same prompt as I use always. So I have to have this prompt suite, or prompt tests, or prompt templates", and I think that's another thing that's happened since the last time we talked when we had the conference, to try and get people to --

**Daniel Whitenack:** Prompt Ops?

**Demetrios Brinkmann:** Well, Prompt Ops is one, Agent Ops is another one... But I created a song called prompt templates, and I'll put it in the -- maybe we could play it real fast.

**Prompt Templates Song:** \[00:20:48.13\]

**Chris Benson:** As someone who's in kind of the defense industry, I'm for Agent Ops, because it sounds bad, doesn't it?

**Daniel Whitenack:** Oh, I thought you were gonna say you were for prompt songs, which would bring smiles to people in the defense industry...

**Chris Benson:** That's what I've always wanted to do... \[laughter\]

**Demetrios Brinkmann:** Missed out on that one... I don't know if people can see this, but he's got a wonderful shirt on, that is for sure... And being in the defense industry, I don't know how you can get away with that.

**Daniel Whitenack:** Work from home...

**Chris Benson:** Work from home is how I get away with it.

**Demetrios Brinkmann:** And for those that aren't watching, his shirt says "I hallucinate more than ChatGPT", which is a classic shirt.

**Chris Benson:** Which Demetrios sent to me, I have to say. So thank you very much. I love this shirt.

**Demetrios Brinkmann:** I love that you wear it. That is what I'm very happy about. But the other thing that I wanted to mention about the survey - and then we can move on and keep talking about other stuff of the day, topical issues... But the data that people use, and the data with which we evaluate the output - it seems like people just don't know what's going on there. We haven't figured that out yet. There's no consensus, it's not really clear... And the classic datasets, or the classic evaluation pieces that you use - they don't really hold up, so everyone's gotta be having their own data that they've created, and that they're testing against the output... But it's really hard to do that at scale. And it's really expensive also. So that's what we saw in the evaluation data, or in the evaluation survey data, is that you've got to handpick these, you've got to match them up, and it's human-curated. The testing datasets that you create, we had 42% are using data that they've created as their datasets to evaluate if the model is working or not.

**Daniel Whitenack:** Yeah, that's crazy. And you mentioned expensive... It could be monetary, but it could also be sort of iteration time, too. Typically, back when we were creating machine learning models, which lots of people still do, because it's the thing driving basically all of the predictive stuff... But you could run your model and evaluate it; maybe it took a few seconds, but you know, a couple minutes... But here, when you're thinking about running, especially against an API that has like variable latency, or maybe the calls, each execution of your prompt chain is taking like 15 seconds. And even if you want to run that over 100, 200, 300 example reference inputs, all of a sudden your iterations become really, really slow.

\[00:24:24.15\] That's something I've noticed that people kind of struggle with, is really making their evaluation quick enough that they can iterate -- feel like they can try a lot of things. Even if they have like a big budget to try a lot of things, this kind of iteration time is really frustrating, also because maybe there's other people that are involved that aren't technical, and they don't want to think about like concurrency in Python, right? They just want to go into an interface and like try some stuff. And yeah, so you've got all these things mixed together, which make it a bit of chaos in many cases.

**Demetrios Brinkmann:** That's so true. The iteration speed, the time, the... I mean, we see here that -- this is crazy. 72% of ground truth labels were manually labeled by humans. And so to have to go and do that, and then also, how often are you doing that.... There's so many questions and so many unknowns for what the best practice is. That's one thing that came up on the challenges, is that it's just like - a lot of people called out something that we synthesized into lack of guidance. Like, nobody's saying "This is the best practice. This is what we've seen works really well for us", because maybe some people say "Well, this worked well for us sometimes, and you can try it and see if it works well for you, too." That's kind of the state of the industry right now.

**Chris Benson:** I want to tie back into something else that we've been talking about lately, and that is, the fragmented nature of the community. It's another thing Daniel and I have talked about recently. We do have communities, but we have multiple communities, and in many cases - not in your case, but in many cases - they're very platform-dependent, vendor-specific... And compared to a lot of programming languages, it makes it harder for people to come in and find specific best practices. So I'm actually not at all surprised to hear the survey kind of playing that out. I think that that's kind of a natural fallout of the challenges that we're having with community in general.

**Demetrios Brinkmann:** So if I'm understanding this correctly, because a lot of the communities are being built around certain tools, you have the best practices for those tools, but not necessarily for the industry. You can't generalize those best practices.

**Daniel Whitenack:** Yeah. And I think also the different channels through which people are communicating kind of naturally develop their own bias. And I don't mean bias in a bad way necessarily, but just the bias towards like emphasizing certain things. Like, you get into the news research community... We had a great conversation about that. And people are talking about "Oh, we're doing all this activation hacking, and representation engineering", but that's like not really talked about if you're over here in the LLaMA Index Discord, or the LanceDB Discord, or whatever... And some of that's driven by the focus on what those tools do, but also where people are coming from, right? More of the indie hacker, building app sort of stuff, or the rigorous academic side, or the enterprise, "I really just want to get something into production" side... There's all these different slants people are coming from.

**Demetrios Brinkmann:** \[00:27:48.06\] That is so fascinating to think about how each of these communities has their main focus. And since there is so much surface area, and there's so many areas that you can go, different areas to explore, that each community is exploring their own area. And if you go into that, you can tap into what people are talking about in that area, versus if you go into another community, you get "Oh, what's going on here? What's the focus of this community?"

**Chris Benson:** This is a different outcome from what we've seen - if you step out specifically of kind of the AI/ML world, and you look at more just computer science, computer programming communities out there, there's usually kind of a place to go, and you kind of learn the same sets of skills and values around that. And that's a little bit different from this. So it's been one of the challenges, I think, that the AI/ML world has struggled with a little bit. So like I said, I think your survey captured that essence.

**Demetrios Brinkmann:** Thank you for sharing that with me, because I'm going to steal it, and I'm going to say it a bunch. Hopefully you don't mind...

**Chris Benson:** \[laughs\] Say it all you want.

**Demetrios Brinkmann:** It's a great insight. I've seen it. Just in the MLOps community, we have people that are really trying to productionize AI. And so what people in there are talking about is really pragmatic and practical. "How can I get this being used in my company, so that I can either save money, or make money?" Money is the ultimate metric there. If you go into, as you're mentioning, these different communities... If you go into the LLaMA Index community, there's a lot of talk of RAGs. And actually, we had Jerry on in the conference, and he showed this slide that I thought was so incredibly done. It wasn't him that did it. I can't remember the person who created it, but it was like "The 11 ways that RAGs fail." And so it had all these different ways that you need to be aware of. And I think one that's coming to light that people are seeing is so important is how you need to get that retrieval evaluation correct... Because if you're not retrieving the right thing from the vector db, then it doesn't matter what the output of the LLM is; if you give it some kind of crap, then it's not going to give you anything there.

And the other piece that I think is fascinating is that - like, how do you make sure that all this data that you've got in the vector db is up to date? And so we've talked about this a bunch. And again, in the MLOps community we're very industry-focused, and how can we make sure that we are productionizing this... So in a production scenario, you've got your HR chatbot that is using a RAG system, and you say "Alright, cool, we've updated the vacation policy." So we went from a European vacation policy, to an American vacation policy. And you've got Daniel over here saying "Alright, HR Chatbot... How many days of vacation do I have?" How do you make sure that everywhere in the vector database it now is updated to the American vacation policy?

So okay, cool, in the vector database maybe you say "You know what - we were able to scrub everything, or we just pull from the most recent documents", but then you were a good engineer and you made sure to pull in a bunch of different data sources... So in Slack, it turns out that you're grabbing some data from that, and people talk about how it still is the European vacation policy, and now Daniel's been quoted of having 30 days of vacation, when really he only has two.

**Daniel Whitenack:** \[00:31:38.20\] That's unfortunate. \[laughter\] Yeah, actually, this is a conversation we just had the other day with a customer... Because also, at least some of these databases, they have - depending on what you go with; if you go with a plugin to an existing database, maybe there's kind of more traditional updating and upcerting sort of functionality... But some of these is just like "Put a document in, get it out, delete it." There has to be a layer of logic on top of these that actually help you do some of that. So in their case, it was like "Oh, we want to take in all the articles that we've had on this website", and that's going to be it. And then they're like "Well, what if we update those? Do we just blow everything away and redo it?" And it ended up -- my answer, with the amount that they had, I was like "Probably..." Like, if you can have something running in the background, honestly, that's probably the safest thing for you, and it's gonna take a couple hours or something, but then at least you -- making sure everything synced up is... In that case they could just version the files of the embedded database. But yeah, it's an interesting set of problems.

**Demetrios Brinkmann:** That is a fun one. And also, what I'd love to explore too is the idea of RBAC, or role-based access control... How are you seeing people go through that and do it well? Because that feels like another one that can be really misused.

**Daniel Whitenack:** So for RAG it's one thing. For text to SQL, some of that maybe can be kind of nice, because if you're embedding some function in an application that already has RBAC on the database, then you could use that credential, and hopefully that carries through. But for the vector database side, we've interacted with people that have maybe like an internal chat, and an external chat, where the external chat is a subset, or should use a subset of the documents from your internal chat. So in that case, you sort of have like two; it's bifurcated rather easily. And that's somewhat easy to do with, because you could just have like two tables or two collections, whatever that is, in the vector database, and kind of merge the retrieval or use them selectively in certain ways... But as soon as then you have many, many different roles, or even user-specific things, I don't know -- many vector databases, however you managed that would be transparent to that vector database. So you'd have to somehow manage the metadata associated with it.

There may be certain people will have to follow up - Chris, we haven't had Immuta on for a while, but they're always thinking about these role-based access to really sensitive and private data. I'm sure there's people doing advanced things, but in terms of the main tooling that people are just grabbing off of the shelf, a lot of that logic is just absent.

**Demetrios Brinkmann:** Exactly. Yeah, I want to hear if anybody is doing RBAC and they figured it out. That's one thing I'm fascinated with. Because it is a very -- again, going to the community that I run with, that's something that productionizing kind of... It comes hand in hand with that.

**Daniel Whitenack:** Yeah. And it could also have to do with the guardrails that you put around the large language model calls, because if it's like a public-facing chat or something like that, that you may want to filter out, PII, or prompt injections may be a very important thing... Versus internally, ideally you trust people as long as you know how the data is flowing. Like, there might not be as many restrictions in terms of what can go in, or who's accessing things, and that sort of thing. But yeah, it's interesting.

**Break:** \[00:35:39.24\]

**Daniel Whitenack:** So in addition to this sort of evaluation stuff - we've spent a lot of time talking about data and evaluation and retrieval... What about on the model side? Do you think we'll ever escape the world of transformers, Demetrios?

**Demetrios Brinkmann:** So this is something I've been thinking about a ton, man... And I've got some thoughts on this that -- is everything that we're doing now in AI a band aid because transformers just aren't the right tool for the job? Have you guys thought this?

**Daniel Whitenack:** It's like one big workaround?

**Demetrios Brinkmann:** Yeah, exactly. Am I crazy to think that?

**Daniel Whitenack:** I don't think so. Actually, I was talking to one of our customers about this; they have so much logic around double-checking the outputs of models, or like formatting the outputs of models... And I'm talking like hundreds and hundreds of lines of code, thousands of lines of code, I don't know, written all around this sort of workaround of like -- and it's because they're using a general-purpose model, that you sort of have to massage into how you want it to behave.

**Chris Benson:** Is it a little bit ironic that you use RAG to clean up the problems with transformers? Is that what we're saying here?

**Demetrios Brinkmann:** Oh, I get it... The RAG...

**Daniel Whitenack:** What we need is the Lysol wipes... \[laughter\]

**Chris Benson:** There you go.

**Demetrios Brinkmann:** But I often wonder, are we having to over-engineer this because the core of the problem -- it's like we're trying to put a band aid on something, instead of going and fixing the root of the problem. And right now, it feels like there's nothing out there that can even stand a chance against the transformer architecture. So of course, we can't say "Well, I would rather use XYZ..." But I just get the feeling, when we think about AI in 2024, or the ChatGPT AI era, we're probably going to be laughing at the whole idea of transformers. If in 10 years we're looking at that, it's gonna be like "Yeah, okay... Transformers were great, but they were a stepping stone."

**Chris Benson:** I know that there's a quite a bit of research going on in general about doing different types of architectures. I know that there's a number of organizations that had been testing alternatives to transformers in the last couple of years. But I don't think anyone's gotten there. Or if they have, then you should reach out to us and let us know, so that we can be talking about it here on these podcasts.

I think there's a lot of folks out there that are really wondering what's next. Because we're essentially taking one superset of architecture and we're doing everything we could possibly do with it. And every big step forward in the last few years has been around what else can we do with this architecture. So at some point, I agree with you, Demetrios, something's gonna give, and we've got to try some new approaches in there.

**Demetrios Brinkmann:** Yeah, that's what it feels to me. It's just like, "What's the next step?" And I would love to also hear from whoever -- if there's something that feels like it's promising... It's really exciting to me; I don't know enough about that. That's very much the research community, that I don't get to spend a lot of time in... And I'm sure there's a bunch of false flags, and people get excited about something and then it turns out that after you throw a bunch of GPU at it, it doesn't work out like we thought it would; or we saw a promise, but it didn't actually work out when it holds up to scale. So I understand that right now we're in the era of transformers. I wonder how long we're gonna stay in this era.

**Chris Benson:** Not only around specific architectures in that capacity, but almost new approaches. For the first time in a while neuromorphic computing is really rising again as a topic of interest... And it's not there yet. You're talking about architectures, both on the hardware and the software side, that are not specific to either transformers or even GPUs underlying it. But it's been interesting to see the maturity that's developing... You talked about the exposure to research; even for me, that's the same case, is that you have all the pure researchers out there, but now we're starting to see them expand out in lots of ways, and trying completely different approaches. And I'm pretty excited that we're going to start seeing some interesting results over the next few years, as people are looking for alternatives across both hardware and software architectures. I think we're pretty close to a turning point.

**Demetrios Brinkmann:** \[00:42:19.25\] Can you break down real fast -- what was that big word you just used? Anthromorphic? What was that? I can't even say it. My tongue tied.

**Chris Benson:** Neuromorphic computing I think is what you're talking about.

**Demetrios Brinkmann:** Neuromorphic computing. That is a big word. What does that even mean? I don't know, I've gotta google that real fast...

**Chris Benson:** \[laughs\] And I am the last person on the face of the Earth that should be trying to explain neuromorphic computing...

**Demetrios Brinkmann:** I've put you on the spot.

**Chris Benson:** No worries. But having been exposed to that, the short version is almost like - you know in the earlier days of AI, in the marketing people would talk about "Oh, mimicking the neocortex, the human brain", and stuff like that. And we all kind of -- as this GPU and transformer-based architectures, we're like "It's not really like the human brain." Well, the neuromorphic architecture is actually that. It's the legitimately, like, "How does that -- the architecture of a brain." And I'm saying there's probably neuromorphic computing scientists out there listening to me now, going "Oh, my God... Somebody take his mic away. That's a terrible explanation." But in my fairly primitive understanding, that's kind of where it is; how do neurons really work in real life, and how do you do compute artificially in that capacity? But I know that there's definite interest in doing that. I know Daniel has a relationship with Intel through Prediction Guard, and I know Intel has an interest in that field. I think they're one of the leaders in it.

**Demetrios Brinkmann:** I googled it... Intel's all over the first page. Perplexity. It was all cited from Intel. That is very true.

**Chris Benson:** I would hesitate to say it out loud, because I'm probably wrong, but they may very well be the global leader in that space right now.

**Demetrios Brinkmann:** Yeah, it makes sense. Well, that is awesome. I'm glad that you taught me about that. I appreciate you for teaching me... Neuromorphic. Now I can say it properly, and everything.

**Chris Benson:** Well, you know what - now that you say that, we're gonna have to have a show on neuromorphic computing coming up pretty soon.

**Demetrios Brinkmann:** Yeah, exactly. Let's get down into it. I want to listen to that, for sure.

**Chris Benson:** We'll dive into that. Daniel can reach out to his contacts there.

**Demetrios Brinkmann:** That's classic.

**Chris Benson:** Well, thank you very much for coming on, as we wind up here... It's always a pleasure. Anyone who has been listening to the show long knows that you're joining us regularly on the show. It's always special for us. We have a great time with you, so thanks for coming on today. We will get the show notes for the survey, and some of the other topics that you brought up today, so people can join... And folks, if you haven't gotten into the MLOps community podcast that Demetrios hosts, you definitely need to check that out. It's an awesome podcast, highly recommended by both myself and Daniel. So I hope people join you over there...

**Demetrios Brinkmann:** Oh, and can I also plug -- we're gonna have an in-person conference, and I'm really excited about that, a little bit shaking in my boots... Because June 25th it's going to be our first in-person conference ever, and it's going to be all about AI quality. And we've got some super-cool speakers coming. We managed to get the CTO of crews to come and talk about what they've done since their little mishap in regards to like making sure that their AI is quality... We've also -- I mean, there's so many great people; you can go to AIQualityConference.com. And we'll throw the link there in the show notes, too. I'm very excited for it... But the speakers are going to be awesome, the attendees are going to be amazing...

I think what I'm most excited for though is that we're going to have all kinds of fun, random stuff. You can imagine it's going to be a conference, but it's probably going to be more like a festival. I may have people riding around in tricycles, giving out coffee, or... We'll have a little DJ area, or a jam bands breakout room... A bunch of Legos hanging around... I don't know yet, so if anybody has any ideas on how we can make it absolutely unforgettable, I would love to hear about that, too.

**Chris Benson:** And I'm gonna throw out one last plug for you... When you say that, I believe you, because - I know that you've heard me say this when we were off the air, but just in case anyone doesn't know this, Demetrios is the funniest guy in the entire AI world, and does hilarious things. If you don't follow him on social media, you are missing some really great, great content. So anyway, I just wanted to say that --

**Demetrios Brinkmann:** I appreciate that.

**Chris Benson:** People should show up at the conference just to see what you're doing, if no other reason; even aside from the cool content you have. They'll enjoy it. So thanks for coming back...

**Demetrios Brinkmann:** I mean, there's gonna be great speakers. You're gonna learn a ton. But there's also going to be some really random stuff that you're going to be like "What is going on here?" and hopefully you really enjoy it.

**Chris Benson:** Perfect.

**Demetrios Brinkmann:** That's what I'm going for.

**Chris Benson:** Okay. Well, thanks a lot, man. I'll talk to you next time.

**Demetrios Brinkmann:** Likewise. See ya.
