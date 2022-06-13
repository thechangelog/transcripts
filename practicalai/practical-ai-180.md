**Daniel Whitenack:** Welcome to another Fully Connected episode of the Practical AI podcast. This is where Chris and I keep you fully connected with everything that&#39;s happening in the AI community. We&#39;ll take some time to discuss the latest AI news and we&#39;ll dig into learning resources to help you level up your machine learning game. My name is Daniel Whitenack. I&#39;m a data scientist at SIL International, and I&#39;m joined, as always, by my co-host, Chris Benson, who is a tech strategist at Lockheed Martin. How are you doing, Chris?

**Chris Benson:** Doing fine. There&#39;s so much going on these days to talk about, and been having deep thoughts about DeepMind lately.

**Daniel Whitenack:** [laughs] Deep thoughts about DeepMind...

**Chris Benson:** My name is not Jack Handey, though, for those in the audience old enough to remember that.

**Daniel Whitenack:** [laughs] Yeah. I mean, there seems to be a lot going on, and to be honest, we haven&#39;t talked about this for a while, Chris... How do you keep up with some of the things that are kind of coming across your path in terms of news related to AI and such? Where do you see that most? Does it come word of mouth? How does that work in your life these days?

**Chris Benson:** It&#39;s a little bit of everything. I have some kind of carefully sculpted Google News for different topics that I use as kind of my primary thing. But at work we talk a lot about AI issues, and my I media manager is actually really good about-- I&#39;ll often hear things from him before I hear them from anywhere else, because he stays right on top of stuff; Brent Siegel, in case he&#39;s listening. And having said that, just kind of all over the place. I think the harder thing now isn&#39;t where to get it, it&#39;s kind of how to keep the noise under control, because there&#39;s so much coming out, and across, and trying to focus on the interesting things, or at least the things that are interesting to me and the people I work with.

**Daniel Whitenack:** Yeah.

**Chris Benson:** How about you?

**Daniel Whitenack:** Well, I see a good bit of the things that I see on Twitter, I think. I don&#39;t really hang out that much on LinkedIn or Facebook or other places, so Twitter is generally where I see things. I&#39;ve noticed that my feed on Twitter has become increasingly NLP-related, which is definitely my zone. I noticed that recently, and I&#39;m like, &quot;I need to kind of search for some more general sources of other things&quot;, because I definitely-- I think that there&#39;s a benefit in learning from even a variety of other disciplines kind of what&#39;s happening and how innovation is happening. I&#39;m getting way off topic now, but--

**Chris Benson:** [00:04:13.24] No, it&#39;s fine. This is good.

**Daniel Whitenack:** Are there other disciplines outside of computer science and AI that you feel like have influenced some of your own thinking in certain areas?

**Chris Benson:** I am very kind of future application-focused. Boy, I&#39;ll probably upset a lot of people; things that I get bored with are just the next implementation of a fairly common AI paradigm, and stuff like that, and I&#39;m just like, &quot;Oh, ho-home. Okay, I&#39;ve seen a lot of those.&quot; The things that I really like are when research comes out, some of the really interesting scientific papers come out, especially if they&#39;re very application-focused. My job is to think about AI and data in the context of the industry that I&#39;m in for 15, 20 years out. And so it&#39;s very-- we do a lot of work with DARPA, so I&#39;m very, very future-focused. And so I really have a deep interest in finding people who are very forward-thinking and less about today&#39;s typical implementations that you see in a lot of commercial space and more about way out there.

And so if anybody hears about things like that in the audience, I love talking and exploring things that are both practical, as we are Practical AI, but also very aspirational in terms of where they might go. And that&#39;s where I spend a lot of time, but it&#39;s not strictly an AI-- we&#39;ve kind of come full circle, going back to some of the things that we&#39;ve talked about. You can&#39;t separate the AI from the software infrastructure around it and all the other data concerns, and so autonomy, robotics, a lot of these applications... But less what we&#39;re doing now and more where we&#39;re trying to get to is the area that I&#39;m keenly interested in. And so hopefully, maybe if some of our listeners have some clues that they can point us toward that might make for some great episodes going forward.

**Daniel Whitenack:** Yeah. I think this question was triggered in my mind. I mean, one of the-- so I get some things off of Twitter, but also I watch YouTube videos related to a number of things, including... Like, I have a set of channels that I like watching. I&#39;m a fan of old-time American music of like banjo and guitar and all that sort of stuff. So I like watching those sorts of videos. And so I watch a bunch of random things, but somehow I&#39;ve sort of gradually subscribed to, generally, computer science and other types of videos that are out there. I&#39;ve just watched one - I&#39;ll have to remember what, maybe I&#39;ll get the link for our show notes, but it was talking about the importance of getting exposed to various disciplines and how they can influence your own thought. The example was this guy and he was generally considered in physics, but was making contributions in computer science as well, and his knowledge of certain subjects in physics informed how he thought about algorithms and other things. And he made the point that increasingly, there&#39;s like a penalty for doing that in our society. Like, you advance more by being more focused in your area, and it&#39;s harder to be recognized in other disciplines outside of your area, and so it&#39;s prohibitive for you to kind of enter into those zones and publish both in computer science journals and in physics journals, for example. But it&#39;s probably true in industry too, to operate in different zones, right?

**Chris Benson:** [00:08:01.18] So you&#39;ve really hit... You&#39;ve probably just derailed everything we were going to do because--

**Daniel Whitenack:** [laughs] Probably so. I&#39;m good at that.

**Chris Benson:** I&#39;ll arrest it before it goes too far, but you&#39;re hitting on a great point, and that is the fact that the real magic for where you can do practical things going forward in an application sense in all the cases I work in and see, it&#39;s at the intersection of multiple disciplines. It&#39;s interesting, I&#39;ll often be in meetings where I have a specialist in a particular thing and a bunch of different specialists, and they have a very particular lens that they&#39;re looking at things through. And usually, my job is to be in the room and to fuse all those things together and generate the big ideas from that fusion. That&#39;s where I think there is a lot of untapped magic out there in industry at large in the world, is where these different things you don&#39;t expect come together and you combine them and go, &quot;Wow, there&#39;s some amazing opportunities there to dig into.&quot; And that&#39;s really where I focus, is trying to find those, to mine those ideas and do that. And I think that that&#39;s not industry specific. I think that anyone out there can do that.

But to your point to finish there, I&#39;m often the only person in the room that doesn&#39;t have a PhD in something. And so there needs to be a form of recognition academically for doing fusion of multiple disciplines, I think. It doesn&#39;t really exist today in that capacity. And I think that would be very valuable to motivate people to learn how to do fusion from multiple areas.

**Daniel Whitenack:** Yeah. So one example I&#39;m thinking of - recently we had this series of episodes on AI for Africa and the sort of discussion about AI applications in agriculture came up multiple times. And I think it&#39;s just by the fact that the applications that they were talking about were not what popped up immediately in my mind, and it was because they had sort of first-hand experience in the environment, maybe even like growing up in a more agricultural, rural setting where they participated in agricultural things. And so being hands-on in a variety of areas can really spark -- well, like you said, it kind of unlocks where the real value is in a problem, and prevents you from building these solutions that might be interesting, but not valuable.

**Chris Benson:** Right.

**Daniel Whitenack:** So I don&#39;t have a huge desire to get into agriculture or gardening, but I think in my own work in NLP, there&#39;s all of these different fields... I&#39;ve noticed recently - this has come up a lot; there&#39;s all of these different fields like sociolinguistics or the more traditional forms of linguistics field kind of study. We recently interviewed Sarah Moeller about field linguistics and being in the field and being with language communities. There&#39;s so much wisdom to be gained from there. So even though I don&#39;t really have the right, or the qualifications, I guess you could say, to operate in those areas, and I should be careful, it still behooves me to-- I want to read more about those things. I want to kind of participate in those discussions and learn what I can to sort of influence my own thinking. But I think people-- I don&#39;t know, there&#39;s a lot of people that maybe struggle with that confidence to operate in areas where they maybe don&#39;t have the qualifications to operate or they feel like they don&#39;t have something to offer. Whereas like you said, it&#39;s really when you do kind of put forward ideas in a multidisciplinary environment where really valuable work happens.

**Chris Benson:** [00:11:57.23] I think that&#39;s a form of imposter syndrome, when you feel &quot;I&#39;m not qualified&quot;, and all that. I think you&#39;re only limited-- and this goes for everybody. Everybody who&#39;s listening to this, you&#39;re only limited by what you&#39;re going to choose to go do and make the effort on and learn. And so it occurs to me from time to time, as I mentioned before, but not most days, I&#39;ll be like, &quot;I&#39;m the only person without an advanced degree in here that&#39;s a specialist.&quot; And for me it&#39;s because I wanted to do stuff and I went and pursued it. And I know other people, including you, who&#39;ve done that as well. I&#39;ve seen you work outside of your field, and have insights and stuff.

I just encourage people - we&#39;re in a moment in history a lot of people focus on the negatives because there&#39;s a lot of challenges in the world, but there&#39;s also more opportunity right now at advancing a number of fields than there&#39;s ever been before, and there&#39;s not enough people to do all those things. And so you&#39;re only limited by what you want to go do, convincing people to give you a chance. And so I hope that not too many people are letting a self-perception of not being qualified get in the way. Go get yourself qualified quickly.

**Break** : [00:13:05]

**Daniel Whitenack:** Well, Chris, I think I led us down the rabbit hole after you initially mentioned DeepMind and maybe some things we&#39;ve been seeing in the news about DeepMind. I&#39;m assuming maybe you&#39;re mentioning that with reference to their Gato...

**Chris Benson:** Might possibly be. Some big news there.

**Daniel Whitenack:** Yeah. Yeah. So we should say that by no means we&#39;re experts on all of this work that has been happening...

**Chris Benson:** Oh, no.

**Daniel Whitenack:**...but it is kind of worth-- I think there&#39;s a trend here that&#39;s happening, or a couple trends that are intersecting this work by DeepMind that we could comment on. But first, the main thrust of this is it&#39;s a generalist agent. I&#39;m constantly getting made fun of because I&#39;m trying to come up with catchy acronyms, but Gato is a pretty good generalist agent.

The idea here is that it&#39;s a single model that can operate in a multimodal, multitask, multi-embodiment generalization policy. So this is like multiple modes, so you&#39;ve got like text, video, video game environment type of stuff, multitask related to like text-based tasks, or moving robot arms or all sorts of things. Basically, I think the reason this is getting a lot of attention is because it can do so such a diverse range of tasks, from text and image-based things to operating robot arms and that sort of thing. So I don&#39;t know what caught your attention about this, but that&#39;s sort of what I was seeing.

**Chris Benson:** It was that, and it&#39;s the fact that-- and this is an area that I think you are much more expert in than I am... It&#39;s trying to do so many things. Going back - God, that was the thing that caught me when I first looked at it, was multimodal, multitask, multi-embodiment generalist policy, which I hear that and hear kind of all things to all people and immediately wonder like, what can it do? What&#39;s the limitations? What are the practical? And they do have the video on the website, obviously, that kind of shows a whole bunch of tasks lining up. But how do you fit this in? If someone&#39;s looking at this, and we&#39;ve been talking about all these big models with increasing capability over the last few years... Well, how do you think about this when you&#39;re looking at it, when you read about that? And is it a jump forward? Is it just an iteration? How do you categorize it in your mind?

**Daniel Whitenack:** [00:16:03.21] Well, I think that one of the main things or main lines of inquiry that this model follows, that is true of other things that have happened recently, is the relationships between this model and recent large language models. So recent large language models have approached the problem of particularly the multitask problems.

So in natural language processing, there&#39;s a variety of tasks. You could have text as input and then detect like a label, like a sentiment label - neutral, positive, negative. You could have text as input and detect certain entities in the text, like here&#39;s an organization that&#39;s mentioned-- Lockheed Martin is mentioned here. It&#39;s an organization that&#39;s mentioned in the text. You could have text input in one language and text output in another language - that&#39;s translation, right? You could have text input, and then you could parse out the semantic structure of the text. There&#39;s all sorts of things you can do with text, and these are all the tasks of natural language processing.

And recently, what has been the trend is that initially with language models, things were structured in terms of a kind of meta task, where maybe you would take out certain words from text and try to fill those in. And that would be the task you would train your language model on, and then you would kind of fine-tune it downstream for various tasks.

Recently, the trend has been to train language models on a variety of tasks by using what&#39;s called prompts, and prompts basically is a text input, but it&#39;s specifically formatted text input in the way of like there&#39;s a prompt that is structured in a certain way for question-answering. There&#39;s a prompt that&#39;s structured in a certain way, based on certain tags for machine translation. So it&#39;s all sort of-- it&#39;s not completely unstructured text input, I guess is one way to think about it. There&#39;s actually a prompt engineering or engineering that goes into constructing this input data, but all of that&#39;s fed into the same model and the model learns based on the context that&#39;s input what action to take and what to output.

So I see that, obviously, there&#39;s a big engineering and research step in this Gato model, but the spirit of it is very much in that same line of thought with the prompt engineering. So based on what the context that is input, it&#39;s determining actually what task to complete and what kind of format to output. So whether it&#39;s outputting captions of images or it&#39;s outputting actions for a robot arm to complete, it&#39;s based on that kind of formatting of the input text in the kind of contextual prompts, I guess, to help the same model know what tasks to do and what kind of things to output.

**Chris Benson:** How different is this in your mind? It&#39;s transformer-based for training and it references that it&#39;s similar to other large language models. What are the differences that seem to be there on the surface? ...without having dived deeply into it, because I know you haven&#39;t had a chance yet. Can we think of it in the same kind of context as other large models in terms of framing it, or do you think it&#39;s--? We&#39;ve kind of gone down a different branch is what I&#39;m trying to get at.

**Daniel Whitenack:** Yeah. I think that this is almost like the-- in some ways, it&#39;s like the fulfillment of a lot of things that started with large language models.

**Chris Benson:** Yeah.

**Daniel Whitenack:** [00:20:01.09] I mean, transformers were discovered in reference to language, but as it turns out, that sort of has been generalized across a lot of modes of data. So vision transformers and other things are really popular right now.

**Chris Benson:** Yeah.

**Daniel Whitenack:** And so I think that this is a natural thing that -- this sort of idea of prompt engineering and multitask sort of things have filtered in... It&#39;s sort of gone full circle to catch up to all the data and all the types of prompts that we might want to include. So I think it is a really bold step to say, &quot;Well, how far can we push this idea and the things that are inspired by these large language models?&quot; And certainly, there&#39;s a lot of modifications that need to happen in terms of like how sequences of things are tokenized and organized as input to the model. But I think a lot of the threads or the foundational blocks that this is built on are really building on those things from large language models, which is really how science works, right?

It took a lot of pieces. It took the prompt engineering pieces and the reinforcement learning and action type pieces and the transformers type pieces and the computational engineering pieces, all to follow their own paths and development to eventually combine into this thing. At least that would be how I would look at it maybe.

**Chris Benson:** So the thing that I can&#39;t help wondering - I don&#39;t know if this is a tangent or if this is on the main line of talk - is if you keep extending this, this is where so much research is going, so much attention is going into the continued--

**Daniel Whitenack:** No pun intended... Self attention, maybe.

**Chris Benson:** Self-attention, yeah.

**Daniel Whitenack:** [laughs]

**Chris Benson:** Yeah, I wasn&#39;t intending that, but given the amount of effort that is going into this, and the money and the resources, is this - using the words like generalist and using words like multimodal, multitask - possibly a path toward AGI, in the sense of you&#39;re kind of combining all the things together to get to something that is more generalized ahead of that? AGI, which is artificial generalized intelligence, has always been fairly aspirational; that kind of holy grail that we&#39;re moving toward. But this is where the focus, this is where the work is happening. So have you heard any speculation? I mean, is this where people think would be a productive pathway to get that way?

**Daniel Whitenack:** Yeah. I mean, I guess it--

**Chris Benson:** I knew I threw you a curve ball on that. [laughs]

**Daniel Whitenack:** Yeah, there&#39;s a whole variety of thoughts here, I think. I think one thing to note is typically how things have happened is generally people have set a goal like, &quot;When we&#39;re able to do this with AI, then we&#39;ll call it intelligent&quot;, or &quot;When we&#39;re able to do this...&quot; and you sort of keep hitting those and then you--

**Chris Benson:** Keep moving it.

**Daniel Whitenack:**...the goal line keeps moving out. There&#39;s certainly like - you could look at this model and I&#39;m sure that there&#39;ll be a variety of studies that come out that show how it&#39;s limited in certain ways, and doesn&#39;t scale in the ways that we think it maybe could... But it&#39;s a stepping stone to a variety of paths forward.

**Chris Benson:** As have all. Yeah.

**Daniel Whitenack:** Yeah.

**Chris Benson:** I mean, as have all the models that we&#39;ve talked about on this show in recent years as we&#39;ve moved through them.

**Daniel Whitenack:** Yeah. So I mean, I think it&#39;s certainly more general definitely in terms of task and type of data. Circling back to what we started the conversation with today around multidisciplinary things, I think that this is general in the sense of the AI tasks that AI researchers have defined over time, right? We&#39;ve defined certain arbitrary tasks that are well defined in terms of a computer...

[00:24:08.25] You know, sentiment analysis is a totally arbitrarily defined task for-- it corresponds to reality in some way, right? We have a concept maybe of how it corresponds to reality, but it&#39;s not really-- sentiment is so much more complex. Emotion is so much more complex than like positive, neutral, negative, right? So I think that&#39;s the way I look at it, I guess, is this is general in terms of the types of problems that AI researchers have dug into over time. But that&#39;s only a very small amount of the complexity that&#39;s involved in the world, right?

**Chris Benson:** It&#39;s general in a sense that AI practitioners and researchers have kind of created the world in which we&#39;re developing this stuff, and so it&#39;s general to those set of tasks.

**Daniel Whitenack:** Yeah, yeah. It&#39;s general to those set of tasks and it&#39;s certainly more general than other things. But I think in relation to the complexity and subtlety of so many things in our world, there&#39;s still a lot of-- it&#39;s not like this is covering all the general complexities of our universe.

**Chris Benson:** You realize that 20 years out, we&#39;re going to be on episode 5,000, and we&#39;re going to have long gray beards, and I&#39;m going to say, &quot;Is this the path to AGI, Daniel? As we&#39;ve iterated many times through there.

**Daniel Whitenack:** That&#39;s probably true, Chris.

**Break** : [00:25:42.04]

**Daniel Whitenack:** Well, Chris, have you seen the new Top Gun?

**Chris Benson:** Everyone but me has seen it in the last few days, I think. As we are recording this, this is the Wednesday after Memorial Day weekend, 2022. So it just came out, I believe this last Friday, five days ago, and I think I may be the only human being in metropolitan Atlanta who has not seen it. But no, I haven&#39;t seen it yet. But I&#39;ve seen all the trailers.

**Daniel Whitenack:** So maybe for-- well, I don&#39;t know. I mean, Top Gun seems fairly internationally known, but for anyone that isn&#39;t aware, Top Gun is a famous fighter pilot movie with Tom Cruise, and a sequel just hit theaters, or theaters and streaming. I&#39;m not sure if it&#39;s on streaming.

**Chris Benson:** I don&#39;t think it is, but I could be wrong.

**Daniel Whitenack:** Okay. Yeah. So again, fighter pilot stuff, which is right up your alley, Chris, being a pilot... I picture you--

**Chris Benson:** And I work at a company that--

**Daniel Whitenack:**...in those Top Gun Maverick scenes as you&#39;re flying your Cessna...

**Chris Benson:** I do have the fantasy when I&#39;m flying... But yeah, not only am I a pilot, but I work at the largest aerospace company and the world that produces fighter planes, obviously. So it is up the alley.

**Daniel Whitenack:** Yeah. Well, I mean, despite the general interest here maybe, there is a point to why I brought this up, which is apparently that at least in one place -- and again, I haven&#39;t seen the movie, so I&#39;ve yet to hear this, but Val Kilmer, who played one of the original characters in the original movie, they had a scene where they needed his voice for something, and I&#39;m not giving any spoilers, particularly because I haven&#39;t seen it and I can&#39;t, but apparently they used AI models to recreate Val Kilmer&#39;s voice, because he is and has been undergoing through cancer treatment, or I&#39;m not sure if he&#39;s still undergoing it, but at least he&#39;s in a place where he cannot speak, and has that sort of constraint... So they used a variety of AI models to reconstruct his voice and actually produce a voice for Val Kilmer in the Top Gun movie, which is quite interesting. What&#39;s your reaction to that?

**Chris Benson:** [00:28:32.13] I think this is the first of this happening many times. I know that they used a lot of his old audio from movies to train the model, and not only that, but that the model is very specific to his style of talking. So it&#39;s not just generating the audio, it&#39;s generating audio the way a younger Val Kilmer, before he was in this particular medical condition, would&#39;ve addressed it. So it&#39;s supposedly very much right on, and I think this fits in-- we&#39;ve had shows on deep fakes and on the visual side, and I think we&#39;re going to enter a time where AI, to produce all sorts of audio, video to consume other medium, will be pervasive. So we may look back at this and say that kind of kicked off a whole era of movie-making.

**Daniel Whitenack:** And I know that, of course, there&#39;s like video-based things that have been done as well to like de-age actors or like change physical appearance and that sort of thing. This one is quite interesting to me, especially if you think about-- like, we&#39;ve been talking about multitask, multimodal things, and there&#39;s certainly things that can be done on the video side.

**Chris Benson:** Sure.

**Daniel Whitenack:** This is an example of something that can be done on the sound side, but it makes me think - well, in the future, are they just going to keep having Val Kilmer act in movies with the voice that they&#39;ve created for him, and a realistic avatar that they can create for him? What&#39;s stopping that sort of thing from being widespread, I guess?

**Chris Benson:** I don&#39;t think anything is stopping that. I think that there is-- I&#39;m going to reach out on something I know very little about, and probably folks in the audience can educate us on this more, but I know that the band ABBA has a show that&#39;s been out there for a while where they use some sort of avatar... And I don&#39;t know the details of that and I apologize. So it is a young ABBA back in their prime that are performing the show. It probably has nothing to do with AI, but what I&#39;m getting at is that idea of being able to use technology to present entertainment or other things outside of entertainment in the way that you would prefer, I think is here.

We saw whatever they happened to do for the ABBA show, we&#39;re seeing that with Val Kilmer, and we&#39;re also seeing the choices of not using technology and not using AI, not using CGI... And going back to the Top Gun Maverick movie, for the flying scenes they decided not to use CGI. They could clearly have done a lot of the flying stuff with CGI, but they chose, maybe for the last time ever, to do something strictly without CGI in terms of the flight scenes, and yet they made the choice to bring Val Kilmer back into it with the AI model.

It&#39;s interesting, AI models are becoming a tool of creative artists going forward and you have a whole pallet of tools. So it&#39;s interesting to see how the choices are being made now.

**Daniel Whitenack:** [00:31:51.27] Yeah. I&#39;m also wondering about the sort of rights related to this. I don&#39;t know the details and I didn&#39;t see, at least in the articles that I read, I didn&#39;t see a reference to this, although maybe it is public information, I&#39;m not sure, but did they pay -- what is the payment structure around like, &quot;Well, Val Kilmer, we created your voice&quot;, right? You got paid for the previous things, and maybe the studio owns those audio clips and the video clips and they&#39;ve created the voice out of those, right? So do they owe Val Kilmer any money for-- I mean, they&#39;re certainly representing his likeness and his voice, right?

**Chris Benson:** I do not know the answer. My guess would be yes, that they&#39;ve compensated him.

**Daniel Whitenack:** Yeah. I would sort of assume so, but it brings up the question in my mind, like - well, I assume so, but I don&#39;t know, and that makes me wonder. This is certainly a much, much lower level, but we now have 180 episodes or something paired with voice and text. How would I go about it if someone recreated my voice and was posting things on YouTube, for example? It was my clearly my voice. Maybe they had my name, maybe they didn&#39;t have my name, but it was sort of obvious what was going on. What would I do? I don&#39;t know how I would exactly respond.

**Chris Benson:** If you&#39;re thinking in particular as I do in the industry, about nefarious intents... We&#39;ve had many conversations about AI ethics.

**Daniel Whitenack:** And sort of deep fakes and such.

**Chris Benson:** Absolutely. It certainly raises a lot of questions about the future and where this might go. As you were describing that, the thing that was in my head is I&#39;m a big J.R.R. Tolkien fan, and have all the books... I&#39;m not truly a super-fan, but I&#39;m bordering on it. And so that is an estate that&#39;s happened. And not only has he passed, but his son Christopher passed, and I&#39;m wondering, is that the future? If you have a very marketable personality or personality assets, like a voice, does everything become kind of an estate-based path forward in terms of how you have those assets? Because it would not surprise me if we hear from Tom Cruise 50 years from now when I&#39;m expecting he probably will not be alive at that point. Could be. He&#39;s very good at staying young, and he has the budget to keep himself young, but I&#39;m assuming he won&#39;t be around in 50 years, but I will bet he will be on screen even on new things. A little speculation there, but I don&#39;t know. The Cruise estate may have a few centuries left of bankable filming.

**Chris Benson:** [laughs] Yeah, that&#39;s true, I guess. Yeah. I mean, I guess this is probably true even for text, in that if there&#39;s enough text from a certain-- and I know there have been attempts to do this with varied levels of success, but you have enough text from Shakespeare, you can write some new plays, or whatever, in the same style. And I know that there&#39;s some toys out there like that and it&#39;s been kind of fiddled around with with varied levels of success, but the idea I think would be similar as whatever creative arts are out there, including music, writing, movies, acting... It&#39;s just interesting to see this technology infiltrate all of those areas. We&#39;ve had obviously a lot on text generation, we&#39;ve talked about on this show a lot. We&#39;ve had even the show on-- maybe a couple shows now on how AI is influencing music creation and production. We&#39;re now talking about movies, and I think have talked about video at other points. So yeah, it&#39;s just another example of how pervasive this technology is, and it&#39;s bringing up new sorts of questions that people haven&#39;t had to wrestle with yet.

**Chris Benson:** [00:36:14.10] When we looked back and AI ethics was first coming about, there&#39;s a lot of people that rolled their eyes at the notion of AI ethics. And we were talking about it very early on, because it matters a great deal to us. I know that in my personal conversations, I get a lot of pushback about it in a variety of venues. And so I think this points out, this conversation, that it&#39;s not only crucially important to the present, but will be increasingly so for the future and that intellectual property issues are going to not only be present but change, that very nature of them will change going forward, because we&#39;re moving into a world where we and our AI will become inseparable. And I&#39;m not saying that in a big, mushy aspirational way, I&#39;m saying that we&#39;re having that now - child&#39;s toys, being able to whether the presence of a person... I&#39;m using the word &quot;presence&quot;, whether that person is alive or dead, they&#39;re still involved in those interactions, so that idea... The term we use in my industry is called MUM-T, which is manned-unmanned teaming... But in all industries, in all aspects of life, manned-unmanned teaming will be present. You will be interacting with your AI in just about everything. So maybe there&#39;s somebody listening out there that will kind of take us to the next level on some of these issues, because we&#39;re going to need some help to navigate this.

**Daniel Whitenack:** Yeah, for sure. We need that creativity. We need multidisciplinary thinking, all those things that we&#39;ve talked about in this episode. And that brings us in a sort of natural way to a learning resource that I was going to bring up in this Fully Connected episode, which is talk and set of linked tools from the TensorFlow team, which I ran across recently, which is around the responsible AI and machine learning type of things. This includes lessons learned from the TensorFlow and Google Teams around these things, but also some relevant tooling around creating things like model cards and dataset cards. Even Merve from Hugging Face brought this up in one of our last episodes about model cards, and maybe even integrating some of that tooling with Keras, but this is more of in that vein from the TensorFlow team.

And so if you&#39;re thinking about this responsible AI and ML things, and want it may be more from the developer perspective and less from the philosophy and kind of social science perspective, this seems like maybe a good starting place; not covering everything maybe, but a good starting place. So I&#39;ll link that video and set of tools in our show notes so people can go check it out.

**Chris Benson:** That sounds good. I&#39;ll finish up by saying, I&#39;m kind of creeped out by the idea that we have all that audio out there a little bit. I started thinking, &quot;Oh my gosh, that&#39;s--&quot; Think about that.

**Daniel Whitenack:** All of our listeners will now be learning about responsible AI and machine learning practices, so maybe we&#39;re good there.

**Chris Benson:** I hope we&#39;re good. We&#39;re asking the audience to save us from this.

**Daniel Whitenack:** Yeah, yeah, for sure. Well yeah, it&#39;s been fun, Chris. I appreciate catching up with you, and I look forward to talking in our next episode.

**Chris Benson:** Sounds good, Daniel.
