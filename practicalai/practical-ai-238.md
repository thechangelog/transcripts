**Daniel Whitenack:** Welcome to another episode of Practical AI. This is Daniel Whitenack. I'm the founder at Prediction Guard, and I'm joined as always by my co-host, Chris Benson, who is a tech strategist at Lockheed Martin. And today, Chris, I don't know if you've been listening to the Changelog, our sister podcasts; they've been doing these Changelog & Friends episodes, where it's not necessarily like a guest interview, but it's like "Hey, let's invite one of our friends on and just talk about cool stuff..." And I feel like we've a little bit got like Practical AI & Friends today, because we're joined by Demetrius from MLOps community, which - you're involved in events, and podcasts, and reports, and surveys... Basically, you run the whole AI world. So welcome, and we're glad to have you back as our friend.

**Chris Benson:** He's like the deep state, you know? He's the deep state. He's like running everything behind the scenes.

**Demetrios Brinkmann:** I am honored to be considered a friend, first off. I just want to say that. Because I appreciate the amazing stuff that you all are doing here. And of course, whenever I get the opportunity to come and chat with you folks, I am going to jump at it.

**Chris Benson:** Excellent.

**Daniel Whitenack:** And I know that last time I saw you I think was at one of the recent LLMs in Production events, which was super-fun... Give us a little sense of what has the past few months looked like in the MLOps community, and some of the events that you've been doing. It seems like there's so much... I think you had also like in-person things... So give us a sense of what's happening.

**Demetrios Brinkmann:** Yeah, I appreciate you calling that out. And of course, I appreciate you presenting at the LLMs in Production conference. That was a blast.

**Daniel Whitenack:** That was a good time.

**Demetrios Brinkmann:** That event itself, we had two days, and each day had three tracks. So there was two full tracks, and then one workshop track... And there was over 82 speakers in the whole event. And man, that was a lot of work.

**Daniel Whitenack:** Yeah, I bet so.

**Demetrios Brinkmann:** Add on to that -- so that was the virtual part of it. But add onto that - we had in-person parts of it. So in Berlin there was a hackathon that we did. And in Amsterdam, we had a meet-up. And then in London, we had a watch party. In San Francisco we had a meet up that happened, and then a hackathon right after, and then a workshop... So there was all kinds of craziness that was going on, and that was just for the LLMs in Production event. Later on -- I mean, we're in now 37 cities around the globe. So wherever you are, you probably have an MLOps community meet up around you, unless -- we're in like North Africa and South Africa, and then also in even in Lagos, Nigeria... We're in Australia, which is always awesome, because I keep threatening to go out there and just pop up at a meetup... Yeah, so that's the in-person stuff. There's people that have just gotten super-excited about it and they decided to start a community chapter, which is the unbelievable power of community. I am blown away by it every time someone approaches me and says, "Hey, I want to do something in my city."

**Daniel Whitenack:** Yeah, that's so cool. And I've been able to attend a couple in-person events this year related to AI stuff, and I will in the fall as well... I'm curious to know -- like, from my perspective, it's cool to see things I feel transition a little bit from kind of hypothetical stuff, a lot of discussion, to people talking about like "Hey, we did this. This is how we implemented our workflow. Hey, have you tried this?" I of course love those types of conversations. Do you get a similar vibe, or how does the community in terms of generative AI and LLMs -- how does it seem different now than even like six months ago or something like that?

**Demetrios Brinkmann:** Oh, yeah, that's so good, because it does feel like there are use cases that are becoming very clear on what LLMs shine in and what they're not good at. And then there's also the stack that's forming. And we did a survey, probably -- that's another thing that we did in the community, on top of all the fun other stuff... We did a survey and we surveyed people that are actually using LLMs, or even not using LLMs... And we asked them why they're not using them, and we went through a bunch of stuff, or "Why you are using them? What are some big pain points?" And it was becoming very clear that there are certain use cases that people are using LLMs for, and we can get into that in a minute... And then there's also this stack that is forming. And the stack was probably the most interesting. I know you guys mentioned it with the a16z article, and Raj Co is one of the authors of that, and he helped me with the report when I wrote it, too... So he's behind the scenes, moving the puppets, the puppeteer...

\[06:09\] The cool thing with the stack is you kind of have -- if I break it down for those who haven't seen the diagram that we've put together... It's like you have the foundational model, and then you have some kind of vector database, which is like the hero, the champion in this whole LLM scene... You've got -- if you need to do some fine-tuning or model building, you've got that component to it, but we can get into that; I'm very opinionated about the fine-tuning part, and I'll tell you why in a bit... And then you have stuff like developer SDKs. This is your LlamaIndex, or LangChains... And then on top of that you have like the monitoring or experiment tracking, prompt tracking, those kinds of things, like Portkey, Promptimize, PromptLayer... There's all kinds that are coming out. And so what we didn't have in that moment, that I think are starting to emerge more now, and I'm really excited about, is how are people actually evaluating these models, and is it coming with your different tools, or are you doing extra stuff on top of it? So that was the inspiration behind a whole other survey that we're doing right now on evaluation.

**Daniel Whitenack:** Yeah. I can say, personally, I'm doing extra stuff on top. That's my very short answer, which is, of course, much more involved. But yeah, I don't know, what is your sense of that? Just intuition-wise, am I out of the norm or in the norm with that?

**Demetrios Brinkmann:** No, you are completely in the norm. And I think the hardest part - and this is why we wanted to do a survey around it, is because this is one thing that is super-unclear. And nobody really knows if they're doing it right, and they don't really know what the best practices are... You also don't really know what you're evaluating. Are you just evaluating the model? One thing is for sure - all these benchmarks are complete bulls\*\*t. That we all know, right? That is very clear.

**Chris Benson:** How do you really feel about it?

**Daniel Whitenack:** Yeah, and they are interesting in certain ways, but the types of evaluations that are going on there... So I think they serve a place, maybe, but they don't translate into "Okay, now I have this use case." If I take the model on the top of that leaderboard, I am very much not guaranteed to have "the best results" for my use case. And I think that's what's confusing to a lot of people.

**Demetrios Brinkmann:** 100%. That's exactly it, is that these models and the use case that you have - who knows how it's going to match up against one another? And then it's not only that, but how are you monitoring or evaluating for toxicity, or the ability for it to do this one thing that you care about? I mean, I don't care if it's -- and also, it just kind of feels like a lot of marketing at the end of the day, when you see the newest model comes out and everybody loves SOTA... SOTA. This is state of the art. "SOTA beats ChatGPT on all these different metrics", and I just kind of laugh, because it feels like I'm desensitized to that these days.

**Daniel Whitenack:** \[09:49\] Yeah, I think also it's often kind of funny to me that even like ChatGPT is being used as a static baseline for these things, when it's not even -- like, ChatGPT isn't a model. It's a product that has layers on top of it that handles all sorts of things... So that's another misconception that I've seen, is "Well, is it really fair to compare a model's output to the output of a product that has a lot of kind of functionality built around it and with it?" Yeah. And that also kind of lets people know -- when that's drawn out, it lets people know that "Hey, the LLM here is not your application." There's this whole layer on top of it, which I know you were talking about retrieval-based augmentation, or retrieval-augmented generation, as we were gearing up for this episode... There's, of course -- whatever your opinion about prompt engineering is, there is an engineering element to how you call these models and chain things together, and like you say, evaluate things, validate things, filter things for whether it be toxicity, or factuality, or whatever it is. So there's just so much around that that's not the LLM, that I think people confuse those concepts a lot of times.

**Chris Benson:** You know, just as a little aside here, listening to you guys talking about this - and you guys are experts at this stuff - and I'm just thinking about all the poor people out there who are listening and maybe aren't at your level... It's a tough thing to try to figure out how to navigate this when you think about it. You guys are debating this and are not completely in alignment yourself. I'm having a lot of empathy for people in the audience who are going "How the hell am I supposed to do this?"

**Daniel Whitenack:** Well, and then alignment's the other thing.

**Chris Benson:** Yeah.

**Demetrios Brinkmann:** Yeah, another buzzword... Tick it off on the buzzword Bingo.

**Chris Benson:** There you go.

**Demetrios Brinkmann:** Well, it's funny, because when you are trying to figure out your use case, and how to get the best performance out of an LLM, there are things that you go through, right? There's almost stages, and you figure out -- the debugging is quite difficult. As you're saying, is it the prompt that's given me the problems? Or is it that something in my retrieval, or the way that I'm creating these vector embeddings - are those the problems? Where exactly is my problem and how do I isolate that, so that I can make the whole system better? And that is -- again, it goes back to evaluation and evaluating the whole system. How do you look at what you're doing as a whole, as opposed to just "Oh, cool, there's this model, and if I go to a hosted version of it and I ask him if the Earth is flat, it tells me yes or no." And most of the time, they say yes, which is crazy. It's like "Oh, you've been trained on one too many flat Earth subreddits."

**Daniel Whitenack:** Or they've just seen a lot of answers that are positive, so it seems probable. Yeah, as you're talking, I think one of the things that I've realized is - in the a16z kind of stack they call this layer orchestration... Which I think a lot of these tools are amazing, that fit into that layer. And the things that they're doing - Langchain, LlamaIndex we've mentioned... Sometimes though it's just like how rapidly the field is advancing. If you import whatever chain from Langchain, and then whatever model, and then whatever vector database, and then you put it all together, you run the thing, and then you get an empty string output, right? Like you're saying, where did it go wrong? And how do you divide and conquer debug that?

\[13:54\] So I think a lot of what I've -- just in my own applications that I'm working on for clients and other things, a lot of times, to be honest, for me it's a lot simpler to write out my chain of my LLM reasoning in just regular Python logic, add whatever exception handling I want, make the call to the vector database manually, and create some logic around that... So I feel that that sort of Python DIY side - it's less convenient, but I usually end up getting there still. Again, it's part of the maturity of this field, I guess, and partly how things are advancing quickly.

**Chris Benson:** You know, they'll have a fix for that, in the spirit of -- you may have heard, when you have a problem with Facebook, what's the answer? More Facebook. Well, in that spirit, I'm sure Meta will put out Debug LLaMA for you in no time, and it will solve all of your problems right there.

**Demetrios Brinkmann:** It's funny too, because it feels like that just forces you to stay simple. Again, going back to the KISS principle, and realizing, "You know what, maybe I'm trying to over-engineer this. And I can go far with -- maybe I don't even need a vector database", which is kind of blasphemy.

**Daniel Whitenack:** How dare you?

**Chris Benson:** You did call it a hero and a champion a few minutes ago, I want to point out.

**Demetrios Brinkmann:** Yeah, I mean, it is wild that you can go so far... I talk to startups almost every day in my day job, which is not the MLOps community... And they have real revenue, and a lot of them, I'm always asking them "Oh, so how are you doing this behind the scenes?" and a lot of them aren't even using vector databases. But they're like cashing in, and they have a product that's working, and it's working at scale... And so there is this misconception I think sometimes that we need all the bells and whistles, and this stack that I just was talking about, and saying that the vector databases are the champions - potentially, for your use case... Do you really need it? Because it does add that complexity. So going back to the tried and true principle - just keep it simple.

**Break**: \[16:19\]

**Daniel Whitenack:** You mentioned that you had some strong opinions related to retrieval, and fine-tuning. I think this is the time for the hot take; officially declaring this Practical AI & Friends episode, so it's a safe space to declare your hot take. \[laughter\]

**Demetrios Brinkmann:** Safe space, I love it. Well, I just think that -- I hear a lot about fine-tuning, and I don't know if people who throw around the idea of fine-tuning something really understand what you fine-tune a model for... Especially like LLMs. If it's a Stable Diffusion model, that's a whole different story. And I think sometimes these diffusion models, they give us the wrong idea of what fine-tuning an LLM will do.

Undoubtedly, you saw the rise of like Lensa, PhotoAI, or all of these fine-tuning -- basically, what these companies were doing in the background is they were running some kind of diffusion model, and you would upload your selfie, or a picture of your dog, and you would be able to bring it into the world of AI art. And if you take that concept over to LLMs, you think "Oh, well, if I just fine-tune an LLM on all of my emails, then the LLM will know how to write emails like me." But it's not like that. There's the misconception that it's not like equal in that regard. Fine-tuning - you don't fine-tune something so that it can understand you more, and you can call it out and say "Now write like Demetrius." Because what you want to fine-tune for -- for that case, let's just be clear, that's where retrieval-augmented generation shines. Because you just say, "Hey, here's a database, or a vector database of all of Demetrios' emails", and you can do some few-shot prompting and say "Write like this. Here's five styles of Demetrius writing a response to this, so make a sixth one." And you're golden. You don't need to go through like burning a lot of cash on GPUs - and GPUs are scarce these days - to fine-tune some model that may or may not work after you've fine-tuned it.

So I think it's worth calling out when you should be fine-tuning things, because I don't -- I don't want to say like "Never fine-tune it", I just want to say, like, I've seen a lot of people talking about it, and also a lot of companies starting that will tote how easy it is to fine-tune, and how you should be fine-tuning, and use your company's data to fine-tune...

Fine-tuning - I think the best way that I've heard it talked about was in a recent MLOps community podcast that I had with \[unintelligible 00:19:20.21\] That's awesome, by the way; go check it out. But he's also very big in fine-tuning, and he is also one of the main people that does the Open Instruct project, which is a whole open source LLM project. So he was mentioning how you want to fine-tune when you have some new function or some way, some new output, something that you need to teach the LLM to do, that it doesn't necessarily know how to do so.

\[19:57\] A perfect example of this is OpenAI's functions. So like ChatGPT, or GPT-4 functions. This makes it much easier for you to get very, very clean data, or data that's output in a certain way. And it gives you this structured data... And that is a whole reason that you would want to fine-tune something.

Or the other example, I think, is the Code LLaMA. But I think where Code LLaMA falls down is that if the original base model doesn't see a lot of examples of code; then no matter how much you fine-tune it, you're not going to get a good coding model out of it. And some people who are using Code LLaMA and loving it - come tell me, because I haven't found anybody yet.

So that's my rant about fine-tuning versus \[unintelligible 00:20:49.21\] And the last thing that I will say is if you're looking at fine-tuning, and you've been brainwashed by the society out there, or the community at large, and you think you need to do it, let's just remember why ML was so hard before LLMs. Collecting data is not so easy; labeling data, cleaning data - all of that stuff is quite difficult, and you need to do that if you're going to fine-tune it.

**Chris Benson:** I just want to say I want to remind everyone that Daniel likes to clean data.

**Daniel Whitenack:** It's something I miss. I feel like because of LLMs I'm not doing it quite as much, which is a hole in my life...

**Chris Benson:** I'm determined to remind our audience of that fact. It's just kind of horrifying, so I kind of remind everybody once a year...

**Daniel Whitenack:** It's therapeutic.

**Chris Benson:** There you go.

**Daniel Whitenack:** I think along with some of what you've expressed, Demetrios, there's a general misconception about the data that you would use to fine-tune an LLM. I've been in countless conversations where the idea is "Oh, well, we're wanting to do question answering on our documents, or something like that. And we would love to fine-tune a model on our internal company documents, and then it's going to be better at question answering." So what I generally tell those people is "Hey, when you're fine-tuning one of these models just on that raw, unstructured text, in the best-case scenario what you're creating is a better autocomplete model to autocomplete your type of documents. What you're not doing is creating a better question answering model." Those are two-way separate things.

So if you wanted to fine-tune a model like that -- like you're saying, there may be cases where that's useful. Maybe it's a domain thing, maybe you want very structured type of output answers, like you're talking about... But in that case, what you want to do - you actually don't want to fine-tune just on that raw text data. You want to create your own set of instruction prompts likely, that are fed in with various questions, and you have the answers, and you have everything set up, and you have thousands and thousands of these examples, which - that, I think when you frame it that way, then people are like "Oh, so it's like a lot of work to create that sort of dataset." And yeah, it turns out it still is, right?

**Demetrios Brinkmann:** That's so funny. That it's so well put, too. I love that. Because that's my rub on fine-tuning, is that people don't realize how difficult it is, and how much effort and how much work goes into it... And that's kind of why Mosaic sold for a billion, you know? Because it's hard, and so companies that actually are doing it, that Mosaic was ever able to convince they needed to do it, they got a lot of money for it. But that's a whole different story.

**Daniel Whitenack:** \[24:12\] Yeah. And maybe for those that are less familiar in our audience, maybe they've interacted with LLMs, they understand the concept of fine-tuning... Maybe they're not as familiar with retrieval-augmented generation. I know that one of the things you mentioned is the MLOps community, you're doing a whole course on this, it sounds like... So could you just give the kind of high-level pitch for retrieval-augmented generation? What does that mean to you as a person who is obviously a promoter of this approach, and something that people should try as they're getting into these technologies? Maybe that general pitch, and then we can talk about maybe a few more specifics that you'd like to highlight.

**Demetrios Brinkmann:** Thank you for bringing that up. I mean, this is the first time that we're actually doing a course, so it is a little nerve-wracking, and at the same time super-exciting... And so I'm just gonna clarify that it is not me leading the course; we've got an expert, the expert of experts, who is Raoul, who created the course for us. He is an engineer in San Francisco that's been doing this for a long time, and he's been doing it at some serious scale, so he knows what's up. He goes and does everything from the Kubernetes clusters, to the end prompts, and then monitoring the whole system.

So again, I'm big thinking about things in systems, but when it comes to like retrieval-augmented generation - let's just go back to what is the hero of our story in this case; and it's not the vector database. I would say that question answer systems are basically the Hello World of working with LLMs these days. That's kind of what it feels like to me. I don't know about you guys, if you have that feeling too, where you want to get your feet wet with LLMs, you probably are going to do some kind of "Talk to your data" or "Hey, if I ask this question, what responses do I get?" And in those use cases, the best way to set up and architect your system is through like retrieval-augmented generation.

Again, going back to what I was saying earlier, not absolutely needed, because I've seen viable businesses built without it, but if you are at that point where you're like "Oh, well, this will add to my tool belt. It's another tool in my toolkit", then what we created was a course that goes over -- and we wanted it to be something that you don't need to spend like six weeks on. We wanted it to be that you could level up really quickly. And so you go through creating a data pipeline, and pre-processing that data, then ingesting that data into a vector database, and then you can semantic search for the answers from the questions that you're getting from the end user, and then it compiles a response using an LLM. So that's like the basics of the course.

\[27:30\] And the reason we wanted to do this was because of a hackathon that we did, actually, funny enough. Right before the LLMs in Production conference we did a hackathon in San Francisco, and it was all about how bulletproof your LLM stack is. And so we created a bunch of questions, and we gave everyone that was part of the hackathon all the data from the MLOps community Slack, which - the Slack has been around since 2020, and there's 17,000 people, and it's very active. All the channels are going off every day. It is very, very active. I can't remember how many megabytes there were, but for text data, it was a lot. People were saying like "Oh my God, that's a serious amount of text." So everyone had access to that, and then we would rate everyone's stack on how accurate the answers were from the questions and answers that we gave them. So we basically asked people to build these different QA bots - or chatbots, if you would call it that - and then at the end of the hackathon we gave them 100 questions, and we saw how accurate were these responses.

And so the questions were some things that were from Slack, or they were just random questions about ML and MLOps... And the best ones were the ones that would give you an accurate answer, and then cite "Oh, but this is another way of looking at it, and here's a thread on it", and so it'd go back to the Slack thread.

So all that being said, yeah, we're excited about the course; we're excited to do that. I mean, there's all kinds of cool stuff that I want to do in the community, and the only way that I'm able to do it is that people in the community are participating in this. I said, Raoul was the guy that created this course; we've got all kinds of other courses in the mix, from other community members... So people that are experts on what they feel like they know best, they can propose topics, and then we're just putting it on our learning platform.

**Daniel Whitenack:** And where do people go to find said learning platform? Because I need to point a couple of my co-workers through it.

**Demetrios Brinkmann:** Well, if you just want rants from me about how you shouldn't find-tune, then you can find us on the MLOps Community Podcast. But the easy one is we have learned learn.mlops.community, and that should get you to the learning section of our website. And yeah, as I said, it's exciting. It's a little bit nerve-wracking, because we plan on doing two styles. This one that we've just released is go at your own pace; you get it, and then you can go through the lessons, and hopefully you can get your company to pay for it, because it's within the learning budget, and it actually is for work. So that should be an easy sell. But if your boss is not interested in paying for it, just DM me and I will give you some amazing copy that you can send to your boss a nice little email that will hopefully convince them to change their mind.

But the other pieces that we're going to start doing cohort-based courses - that is interesting on another level, because we've got the whole MLOps community, and we've got everyone that is part of the courses; they can go into a special Slack channel, they can be with the teachers, and the teachers' assistants, and all that fun stuff. I mean, it's not like we're breaking any new ground here; courses are kind of a tried and true method of learning... So this is just us having fun with it.

**Daniel Whitenack:** Yeah, that's awesome. And speaking of learning, you already mentioned the surveys that you've been doing... And there's a previous survey that's already published. I know you're working on the next survey that will come out... But people should look at this survey - we'll definitely link it in our show notes. There's a lot of really interesting stuff in the survey, and some of the highlights... I'll just call out a few of the highlights here. And then I'd be curious to know what stood out to you, Demetrios, or Chris, whichever one. So some of the highlights, just at a high level... Company use cases like text generation and summarization are useful, but participants are going deeper and exploring a lot of other ways to use LLMs, like data enrichment and data labeling augmentation, generation for subject matter experts, and other things...

\[32:15\] The use of large language models in organizations is still unclear due to some high costs, and an unclear ROI. They talk about hallucinations, the speed of inference with LLMs being potentially a blocker for certain types of use cases... You talk about the infrastructure, we already talked about that stack a little bit... Some of the things around augmentation and consistency of the models... So those are just some of the highlights from the survey, which people can go into a lot more detail on. But I guess one question I would have is, as you were building this report, first off, is the whole report generated using an LLM? Because I didn't see that highlighted in the report.

**Demetrios Brinkmann:** \[laughs\] That would be the most meta thing ever. Not the company Meta, just the old term for meta.

**Chris Benson:** Old meta.

**Demetrios Brinkmann:** Yeah... And honestly, I tried really hard, but one thing that I did, which - I'm going to preface this with I am not Gartner, and so I did not know how to create reports before I did this... Now I've learned, since I learned what was painful, and I spent months with this data, and just tearing it apart, trying to figure out what are some clear signals here. And you can find the signals, but the reason that it was so difficult and that it was a blessing and a curse was every single question, instead of having answers given to you, it was just a freeform text box. And so this is the report that we created, but the actual raw data, it's linked in the report, and anybody can see it. And so I'm a big fan of that, because I have my biases. I wrote this report, but the report is for the people that don't have the time, or want to go and spend hours upon hours looking through all the raw data...

**Daniel Whitenack:** Fine-tuning a model on it...

**Demetrios Brinkmann:** Yeah. \[laughs\] They're like "Give me the TL;DR and I'm good." And so that's kind of what I set out to do. And I also wanted to see what are some big things that stood out to me... But not only me. Every time -- I think the reason it took me so long to release this was that I would ask a cohort of friends to review it, and they would give me feedback, and I would incorporate that feedback, and then I'd be like "Okay, I think I can send it off to the designer now. Let's get it going." And next thing you know, I would ask another cohort or friends to review it, or people in the community, and boom, I would have all kinds of new feedback, and "Oh, but you know, I noticed that there was this, and people were talking about that..." So I did that probably six or seven times, and that gave me the confidence that it's still biased, but it's not as crazy biased as I think it would have been if I just put it out myself. And I got a lot of input from other people. So if anything, it's bias from a lot of different people... And so there's that piece.

\[35:25\] And what we're doing with, again, the evaluation survey - I want to do the same exact thing. I learned my lesson, so it's not only free text form answers that you have now. I kind of put a lot of multiple choice and check all boxes that apply, and then also the Other at the end... So hopefully, that will help me be able to do more Excel-fancy math on it, and formulas... Because even with LLMs -- I was even trying all these new ones that was use "ChatGPT in your Google Sheets", it didn't work. I spent days trying to ask it questions, and it just did not work, man... And I ended up getting kind of frustrated, because I spent more time trying to get the LLM to give me some kind of insight, than if I just spent the time with the data and got the insight. And I think everybody who has played around with LLMs has probably had that experience once or twice, where it's like, "I've been prompting this for a really long time. I wonder if I just sat down and wrote the report, or if I sat down and tried to think of things on my own, and create something... I could have just done it in the amount of time that I've been prompt-tuning this." But anyway...

**Chris Benson:** I've got a question, as I'm looking at it... Obviously, it's a population of people like us that are answering the questions, because right off the bat, it's like "How many of you are using LLMs in your company?" and it's 61%... Which is a pretty high number right there. But I'm curious, do you go through and -- like, what constitutes using an LLM? Can it be as simple as pulling up a prompt for ChatGPT and posing prompts to it? Or does it need to be like --

**Daniel Whitenack:** Putting in your company data.

**Chris Benson:** Right. There you go.

**Demetrios Brinkmann:** Oh, my God...

**Chris Benson:** Everyone owns it now.

**Demetrios Brinkmann:** Yeah. That's so funny... I would love to talk about that for a minute too, but... Yeah, there was only a few people that were just like "Oh yeah, I'm just using ChatGPT, and I'm going directly to OpenAI's website." That was not the majority. I think it was like one person, if I remember correctly, and... Don't quote me on that, because it's been probably two months since we put this out, and so I can't remember anything since we've put it out... But it's more people that are trying to set up systems with LLMs. And so these systems may be the API calls to OpenAI, or they may be hosting their own open source LLMs.

**Chris Benson:** Right.

**Daniel Whitenack:** And what's unique, or what questions are you intrigued to find the answers to in the upcoming survey? Maybe there's some commonalities that you'd like to see carry through the surveys, but what are you most curious about going forward into this next round?

**Demetrios Brinkmann:** I'm really fascinated by how many people are using open source, versus using OpenAI. And one of the most hated visuals of the whole report is this one on like page 10. And it's talking about who's using OpenAI, and what size they are. And people were like "This does not explain anything. What you're trying to say in the visual does not match up at all." And so, again, I am not Gartner. I am one random guy, who has never written a report and never did a survey, but for some reason I felt compelled to do this three months ago, five months ago now, and... I almost regret it, but seeing the final product, I'm very happy that I did it. And so --

**Daniel Whitenack:** Yeah, you should be proud. There's always things to look back on, but...

**Chris Benson:** Yeah. It's a nice report. It's a good one.

**Demetrios Brinkmann:** Exactly. And we were able to move fast on it. I'm sure Gartner is going to put something out soon, but that's the beauty of the community, that we can move a little bit faster... Anyway, back to this visual that people did not like. I mean, a lot of people did not like it. So the whole idea was, "Are you using OpenAI? And we've found that there's a bit of a correlation between people that are in super-small startups, like 0 to 50... Zero... I mean, 1 to 50. \[laughter\]

**Chris Benson:** \[39:55\] It's an autonomous startup.

**Demetrios Brinkmann:** Yeah, exactly. It's so starting, and so startuppy. So anyway, the 1 to 50 range, they're not using OpenAI. And the 1000+ are not using OpenAI. But the 500 to 1000 - and the numbers that I'm throwing out here... I didn't preface this, because I got into the startup thing, in the 0 to 50... The amount of employees that you have at your company - so if it's 1 to 50, then you're not using OpenAI. If it's 1000+, you're not using it. At least that's the preliminary data that we saw. And if you're in the middle, then you are.

And so we had some theories about this, and it was like - hm, I wonder if it's because if you're a startup, you think that you can create a moat by not using it, and maybe your whole business is around using some kind of LLM, and creating some kind of difference than OpenAI. And then if you're a larger company, a) this was before the enterprise scam that they've got going on, but that's... Again, we can get into that in a minute. And so if you're a larger company, you probably have resources to figure it out yourself, and you don't necessarily need to use OpenAI... And you're probably less comfortable with your data going outside of your walled garden.

**Chris Benson:** I think it's the latter.

**Demetrios Brinkmann:** Yeah. If you're in the middle, it's like "Let's just go as fast as we can." And so I want to see if that theory, if that holds up in the next one.

**Chris Benson:** Yeah. If you're over 1000 people, you have a legal department, and that's what's inhibiting you. \[laughter\]

**Daniel Whitenack:** Good point, Chris.

**Demetrios Brinkmann:** But now -- I mean, Chris, you tell me, man. Do you think that this enterprise play is going to work out? Do you think people are going to trust --

**Chris Benson:** In terms of Open--

**Daniel Whitenack:** OpenAI's Enterprise.

**Chris Benson:** I do think it will work out from a business standpoint for them. I get dangerously close to some conflict of interest here, so I'm gonna pass on this one. \[laughter\]

**Daniel Whitenack:** Plead the fifth.

**Chris Benson:** I'm pleading the fifth. So I'm backing away from this question.

**Daniel Whitenack:** It sounds like you're not on the enterprise hype train, Demetrios.

**Chris Benson:** I work for a company that's 1000+, is what I'm saying. So I'm gonna back away from that question.

**Demetrios Brinkmann:** He's got a legal department...

**Chris Benson:** We have a legal department, and some of them might listen to this podcast. \[laughs\]

**Demetrios Brinkmann:** Exactly. I just wonder -- I mean, I've been meming with friends about it, and I think it's kind of funny how they do say, they specifically call out "We're not going to use your data to train any of our models. We're not going to know about any of your data", and I think that the biggest question is "Oh yeah, because they have the best track record of doing what they say."

**Chris Benson:** There is a healthy skepticism, I would say, among large companies on that. Definitely.

**Daniel Whitenack:** Yeah. Well, also, I don't know -- this is kind of avoiding the question a little bit, but I think that it is related, in that you brought up the leaderboards earlier, Demetrios, and I think any company that goes all-in... It's almost like a new version of vendor lock-in, like we used to talk about, where now you have like model family lock-in, where "Hey, these models, they're good." No doubt, GPT models - really good. Are they going to be the models that are going to be best for your use case, either in terms of like output or in terms of the other things that were highlighted in your survey, like latency, and resources, and a lot of these practicalities, and how you can control them, and and all this stuff...

**Chris Benson:** \[44:07\] You know what they need, don't you?

**Daniel Whitenack:** Yeah, exactly... \[laughs\] And so I think there is an element here of "Hey, do I want to go all-in on a single model family? Or is my strategy play more to have a bit more of a model-agnostic approach, where I can pivot between different models for different uses? Maybe fine-tune when I need to, but even if I don't fine-tune, I have a lot of potential options to use, and in a privacy-conserving way. So yeah, I think that that's another element. However that works out, it will work out, but I think there's this kind of side element here, which is how the model landscape is evolving, versus a single model family is evolving, which is good to highlight.

**Demetrios Brinkmann:** Yeah, it's so true. And actually, it's funny - I don't want to say that there is not an immense amount of value in ChatGPT and GPT-4, because one thing has become very clear after interviewing a ton of people who are using large language models in production... They are able to get up and running and proving value with their LLM so quickly. And I was just talking to \[unintelligible 00:45:26.25\] I'm gonna have to check out how I pronounce his name... He's French, and it's spelled very different than how it's pronounced... And he's running the LLMs at AngelList. And I asked him "Hey, so are you worried about that vendor lock-in type thing because you're only on OpenAI? Have you messed around with even just Anthropic, or Cohere?" And I thought his answer was fascinating, because he told me "Look, you know what? There are so many other pieces of surface area that I would like to cover, so many other features that I would like to implement with these LLMs, and be able to use in our product, that if I'm stuck on one feature, and trying to figure out what the best model is, then that's going to slow me down. I just want to go and get as many features plugged in as possible. And I know that ChatGPT works really well, and so I'm just going to go as hard as I can, and incorporate these features. Because I have a laundry list of them that I want to do. And then, once I get all of that out of the way, then I can start going back and saying "Okay, let's figure out, should we bring a model in-house? Should we use Claude, or something else?"

**Chris Benson:** You know, it's really interesting to hear you say that, because that's such a startup mentality... You know, "We just have to run really fast, and get as much done as we possibly can, in the shortest possible time." And then you get to that large organization thing, and they're worried about the lock-in, they're worried about where their data is going, and they go much slower as a result of that; it's almost like an inverted approach based on size of the company and maturity.

**Demetrios Brinkmann:** And that's what I was trying to show in this horribly-positioned visual graph that you see on page 10 of the report.

**Daniel Whitenack:** So we finally got to the conclusion that the graph - we all agree on the point that the graph is showing. And to leave the graph out of it, I think that that's good. \[laughter\]

**Demetrios Brinkmann:** \[unintelligible 00:47:30.29\]

**Chris Benson:** I'm sorry, he's laughing -- because we can all see each other, even though this is audio only, and he's laughing at himself.

**Daniel Whitenack:** \[47:40\] Not to belabor the point, but I think you all are exactly right, and I think I see this because almost every lead that's coming into Prediction Guard, just in terms of where people are at, regardless of whether they're a good fit for what we're doing or not, but almost every lead that's coming in, it's almost laughably predictable, that they say "Hey, we've prototyped out something very quick with Open AI, that shows there's huge value here. Now what do we do?" It's almost every conversation is starting like that.

So yeah, I think that there's even like a -- we can make your graph, I think we should make your graph like sideways, and add like a temporal element, make it 3D over time; people like that more. At the beginning of a project, I think a lot of people are doing that, whether they're authorized to do it or not in their organization... And then they get to that point where like "How do we scale that up?" Especially if we're in this larger organization environment.

**Demetrios Brinkmann:** Yeah, it's like "Oh, I've gotta go present this to the C-suite. We've got to erase any use of sending data outside of our company. We can't tell anybody about that."

**Daniel Whitenack:** Yeah, exactly. As we're coming close to the end here of our & Friends episode, which I hope is only the second of many times we'll get to hear from you on this show, Demetrios... As you're looking to the next -- I don't even feel like we could go to the next year. Like, as you're looking to the next couple months of AI life, what are you hyped about? Like, just generally across the industry; what positive kind of trends are you seeing that give you hope for where things are headed?

**Demetrios Brinkmann:** Let's see... That is a great question. Leading question, but great question. It's got to be the positive side, hmm?

**Daniel Whitenack:** We've got to end on a positive note.

**Chris Benson:** You can dip though before you get there if you want to, though, just for fun... Because I want to hear what he has to say.

**Demetrios Brinkmann:** Well, for those that are just listening, I am wearing tie-dye, so it is all peace and love here... And I am excited because right now anyone who wants to mess around with machine learning and AI, they can. I've seen so many scenarios where a product person has said "You know what - let's try and throw some AI with this." And they've been able to create an enormous amount of value for their company by adding some features that just call ChatGPT, or Claude, or whatever. And that for me is really enticing, because the barrier to entry has just been destroyed. It almost was like the last couple of years, the first couple years of the MLOps community, we are -- I mean, we still are; there's still a lot of traditional machine learning... I put it in quotation marks, because it's not that old. But there's a lot of really hard stuff happening with "traditional" machine learning. But with the advent of LLMs, a lot of that has become really easy. And so all these NLP tasks that were really hard up until 2022, they're not as hard. And so you're seeing the creativity of people being able to put LLMs into their products - I love that. That is something that -- now, I didn't realize how much I enjoyed product, and the idea of speaking with product people until ChatGPT came out. Because now I'm like "Oh, I want to talk to more product people." The product owners are really great people to talk to, because they have these wild ideas and they know how to figure out if this is actually a success or not.

\[51:49\] So there's that piece... And dovetailing on that - so we're having another LLMs in Production conference on October 3rd. I don't know if I told you guys this, but definitely come, and I will explain why; I'll try and sell it to you as much as possible right now... But I wanted to create as many talks from product people as possible. And some of the stuff that we are talking about are like how to build an economical LLM solution, and how to prioritize LLM use cases, and how to put LLMs into your product. So those are very much for the product owners and the product engineers, and it's because of that; it's really like, I got really excited now that this whole space has been opened up to the product owners. So can I tell you what you can expect in the conference?

**Chris Benson:** Of course.

**Daniel Whitenack:** Sure.

**Demetrios Brinkmann:** I'm just gonna tell you why it is the greatest conference on the internet right now... Because where else? And Daniel can attest to this, right?

**Daniel Whitenack:** Live music interludes?

**Demetrios Brinkmann:** Yes. Where else can you prompt me? ...not an LLM. You can put in the chat what you want me to sing about, and I will sing it in real time, just improvising on my guitar. And last time we had a whole song about catastrophic forgetting. And for those who do not know, that is where... Actually, I'm not even sure I fully understand what happens, but basically when you fine-tune -- it's all that damn fine-tuning; when you fine-tune, sometimes a model will forget something, because new data replaces the old data... But the Catastrophic Forgetting song was a hit. You've also got some semi-illegal betting going on during the breaks, and you win swag... And then --

**Chris Benson:** Semi-illegal betting?

**Daniel Whitenack:** There is a gray area, Chris...

**Chris Benson:** Okay.

**Demetrios Brinkmann:** It depends on what country you're in, alright? \[laughter\] And so that you also can expect. I mean, I'm just not sure that I've seen any conference that goes into the amount of technical details that we go into. And I want to highlight this piece, and we can end with this... It is really hard, but it is very important for me to have a fully diverse field of speakers. And so I cannot tell you how much work it is. And it frustrates me now that I've looked at other conferences, and I see... It's almost like "Oh, these organizers were lazy." Because there are amazing people out there from underrepresented groups that are doing some incredible stuff, but you almost have to look a little more, because they're not necessarily on the conference circuit. They're busy shipping; let's be honest, they're not out there talking about it, they're actually just doing it. And so I've had to look really hard, but I am very excited about the speakers that we have, and the diversity of our speakers. And I think that that's probably -- out of all the things I'm proudest about, that's probably what I'm the most proud about.

**Daniel Whitenack:** That's awesome. Yeah, I can't wait. And you said it was October 3rd? Is that right?

**Demetrios Brinkmann:** Yeah.

**Daniel Whitenack:** October 3rd. Awesome.

**Demetrios Brinkmann:** I'm gonna be -- so we have one sponsor for this event, and they rented a whole studio in Amsterdam, and Amsterdam is like four hours from where I live... And so hopefully, everything goes alright, and I don't eat any mushrooms or anything, or smoke too much weed and not show up for the actual event... But in case that does happen, we have shirts. Did you see the shirts, Daniel?

**Daniel Whitenack:** I think I've only seen the ones "I hallucinate more than ChatGPT."

**Demetrios Brinkmann:** That is it. I may live that in Amsterdam. You never know.

**Chris Benson:** Oh, how can I get one of those?

**Demetrios Brinkmann:** I'll share the link with you. We've got special -- they only pop up for sale during the conferences... So you can't get them now, but hopefully about a week before the conference starts we'll start selling them again. And yeah, that's it. That's what I've been up to. Not too much, you know... Just trying to stay relevant.

**Daniel Whitenack:** Just keeping things chill, yeah. \[laughter\] That's awesome. Well, thanks so much, Demetrius for joining us. I hope that we see you again here in some number of months... Don't stay away too long. We'll look forward to hearing about the results of the survey, the events, and I'm sure all the 15 new things that you're doing next time around that you're not doing this time around.

**Demetrios Brinkmann:** Totally. Dude, I've got so many ideas... I have so many... I mean -- yeah, I really appreciate you guys letting me come on here and rant about fine-tuning, and talk about the cool stuff we're doing in the MLOps community. And I love what you all are doing, so thank you.

**Chris Benson:** It was fun.

**Demetrios Brinkmann:** Thanks.

**Daniel Whitenack:** We'll see you soon.
