**Daniel Whitenack:** Well, welcome to a very special episode. I'll say this is an episode of a podcast, actually of two podcasts, Chris... This is a different kind of episode than we normally do, because we're privileged to be joined by Demetrios and Mihail from the MLOps Community Podcast. Welcome, guys.

**Demetrios Brinkmann:** Yeah, we're hiding over here in the shadows...

**Daniel Whitenack:** In the MLOps community, in the shadows of the MLOps community... \[laughter\]

**Chris Benson:** We don't really have a guest this week, we have four hosts, is what we have. This will be interesting.

**Mihail Eric:** A lot of chefs in the kitchen right now, yeah...

**Demetrios Brinkmann:** That's right.

**Daniel Whitenack:** Which is obviously what listeners want more of... \[laughter\]

**Demetrios Brinkmann:** We're just going to answer each question with more questions...

**Chris Benson:** I don't know if we have the hosts with the most, but we have the most hosts.

**Demetrios Brinkmann:** There we go, there go...

**Daniel Whitenack:** There we go.

**Demetrios Brinkmann:** The real question is who's going to ask the first question?

**Daniel Whitenack:** Oh, I was going for it, but now you can... But technically, that was a question, I'm not sure... So maybe I'll answer your first question with my first question. MLOps and community - I love everything you all are doing with the community over there; of course, the podcast, which we'll link to, and the meetups, and the content that you're putting out there... My sort of basic question though is we have heard MLOps however many times on this podcast, Practical AI... And we've heard even conflicting sort of statements about what that even is. You're branded the MLOps Community, so from your perspective, what does that mean? Who's in the community? How is it defined? ...all that stuff.

**Mihail Eric:** So at a really high level, MLOps is an abbreviation of machine learning and operations. And one really quick, easier way to think about what MLOps does - it's fundamentally about the question of how do we take machine learning that you typically see in research, and deliver that in the real world? So until relatively recently, I want to say the last few years, machine learning was starting to get really hot; maybe it really kicked off in 2012, 2013, is when we had this resurgence of deep learning that really picked up, and people got excited about image recognition, systems, speech, ASR systems... And for a long period of time, a lot of machine learning, even cutting-edge machine learning still happened in the lab, in the research lab of either big institutions, or even just actual academic institutions. And so it was around -- I want to say around when TensorFlow came out, when we started really getting this effort to standardize the processes of going from something that you see in like research, new models, new AI systems, and try to actually put it in front of people, right? How do we get these systems to the point where they can start delivering real value to real people?

MLOps is pretty much a set of frameworks and tools and systems that people have developed. They're based a lot in software engineering, as well as DevOps, to make that translation process from research into production much easier. And so it's really just a set of like principles and techniques and tools that a lot of the communities developed to make that translation possible.

**Daniel Whitenack:** Yeah, I think around the time we started this, Chris, I think one of our feelings was -- and now we're a good ways in, but I still feel this way, that it's not an easy leap to sort of just start learning, like "Oh, I'm going to do the Fast AI course", or something. And then okay, let's say you get a position as a data scientist, or whatever the title is... And like, okay, whatever is happening in that position, there are overlaps between what you learned in like a Fast AI, or whatever; certainly, there's wonderful stuff, but like it is only a very small component of a larger system of practicalities that are not that easy to access and learn about.

**Demetrios Brinkmann:** \[00:04:46.11\] Totally. And they're still trying to standardize the other pieces. Depending on your use case, MLOps might be one thing or another thing, too. It's really not super-clear right now. If you're using deep learning, that's one type of MLOps that you're doing. And if you're doing a recommender system, and you like to play in the trees, in the decision trees, those random forests, then it's a different type of MLOps that you're doing.

**Chris Benson:** So I think we should dive -- as we go here, we should dive into the weeds on what those are... But I actually want to throw a hand grenade into the conversation and say - DevOps, or DevSecOps, depending on where you're coming from, and the differences, and MLOps, how does it integrate, is it some of the same? This is the show where we can clarify all of these things between us here. We should just dive in.

**Daniel Whitenack:** By DevOps do you mean a Docker, Chris? \[laughter\] What do you what do you mean by DevOps?

**Demetrios Brinkmann:** Something you put in a container...?

**Chris Benson:** Well, once again, I mean, I don't want to put my definition. These are the things that have ops at the end, that everyone is talking about... If you are out there in the world, and you're doing models of various types - it might be deep learning, it might not be deep learning \[unintelligible 00:06:04.25\] but it also integrates in with software. And so where does one stop and the other start? If we can start sorting through what we think these things are, I think that would be useful, because you put a bunch of data scientists and software people in a room and they still today don't necessarily know what each other means when they're having these conversations.

**Daniel Whitenack:** I aired a bit of my dirty laundry and my pet peeve of like people saying "a Docker", or "Dockers". "I deployed a Docker." But yeah, I think that's like the minds that you hit when you put a software engineer and a data scientist together.

**Mihail Eric:** I think it touches on a really astute point, which is that the definitions are a little fuzzy. To be perfectly honest, they're very fuzzy in terms of where does the domain of one begin, and the domain of another -- how do we cross these territories? Where are the fiefdoms? Where are the boundaries set up? And fundamentally, MLOps has been and is a very interdisciplinary field, and so maybe one of the easiest visuals that we like to sort of discuss when we try and explain what MLOps is, is like imagine a three-circle Venn diagram where one is data science, the other is software engineering, and the third is DevOps. And MLOps sits kind of squarely right in that little intersection area of those three circles. Because a lot of the stuff that makes MLOps and the way people use it does touch on pretty much every single one of those three circles. There's modeling, right? Fundamentally, you're building models, you're training systems, you have these data concerns that really falls out of the data science category. You have software engineering, because you're trying to actually build out good systems that have to be engineered; you have to write code, it has to be well tested, unit-tested code... And then the DevOps is really about how do you streamline that process of doing this once, putting it in a Docker, and then doing it multiple times. And then just repeating that over and over and over, and doing it systematically, so that "Hey, I have 100% ideally uptime on the machine learning systems I put out into production." And that's really the DevOps components. So really, it borrows a little bit from every single one of those circles.

**Daniel Whitenack:** I see what you did there.

**Demetrios Brinkmann:** \[00:08:08.16\] And just shout-out to Docker Compose, because you can do so much with that... Let's just not forget the unsung hero of this whole thing, and give a huge shout-out to Docker Compose.

**Daniel Whitenack:** Or the Bash script. \[laughter\]

**Mihail Eric:** Yeah, the true OG hero.

**Demetrios Brinkmann:** Yeah, the unsung hero in reality. But there's -- Mihail was saying, too... I think that it's not only one person that should be tasked with this MLOps title. And a lot of times, you can get yourself into a lot of trouble if you're trying to build out something that is going to productionize your machine learning, and you expect your data scientist to be able to do everything... Or you have a very naive sense of what it takes to actually productionize machine learning; and not just like productionize it in a way where you get a model out, but really make a process out of it... And I really enjoyed an idea, which is MLOps is not just putting a model out there once; it's the act of n+1. So MLOps is a machine learning model in production, but not just 1. N+1. And that's when you get into how are the processes around this, and what do we really need to be thinking of when we're productionizing our machine learning?

**Chris Benson:** I have a question for you just straight off of that... Can you talk about -- like, when you're talking about getting that out and that n+1 model, how is MLOps in that capacity, like kind of late in the process there, as you're kind of getting it out into wherever your environment, cloud, or wherever it is that you're putting the model, where does that differ from the DevOps world? Because it's easier to see it at the frontend, because you're kind of starting with two different things that you're trying to put out there in the world. In one case you're starting by training a model of some type, in another case you're working on software, and all that, and you say, "Okay, we're ready to go." But somewhere down those pipelines, they start looking very similar, in a lot of ways. How do you look at that? How do you differentiate what those are? Do they merge? Do they not merge? How do you see it?

**Demetrios Brinkmann:** So it's the fun one that we talked about a lot in the MLOps community, right? ...like, isn't MLOps just DevOps? And the dirty secret, I think, is that yes, it is just DevOps, but then you sprinkle a little bit of data on it, and so magically, it's not DevOps. And I think Mihail can really like add a lot of great insight to this... But we were just talking about this probably like a few hours ago when we met, and it was very much like MLOps is more about software engineering than it is about the modeling piece, I think. It's much easier for someone who knows about software engineering to get into MLOps than it is for like a machine learning researcher to get into MLOps. And that's what I think we've seen over the years, and we really have recognized in the past couple of years that there's been a very clear engineering discipline that comes with MLOps... As opposed to - in the beginning, it was It wasn't so clear; it was like "Oh, data scientists should be doing this." And now it's a little bit like "Hm... Maybe it's not the easiest thing in the world to teach data scientists how to code."

**Chris Benson:** \[00:11:50.16\] It's funny that you say that, and I'll leave the company unnamed, but a few years ago I worked at a different place, for a first AI team. And I had a team of data scientists, and I was the only one to come from kind of a software development background... And everybody else was kind of straight data science. And that was what we found, it was a struggle a little bit to try to figure out how to create that MLOps align. And I was like "There's an entire engineering skill set that I think people come into it without realizing it upfront." It's like an insight that they have, that you've just stated, that takes them a little while to realize that.

**Demetrios Brinkmann:** And the interesting thing is, when we look at the evolution of MLOps over the last few years, because it seems to have been born a little bit in the wrong way, and that data scientist started learning these principles and these software engineering practices... So we had these data scientists, they're like "Oh, yeah, like unit testing for data. That's super-novel." And then the moment you had any person that came from DevOps or traditional software engineering start entering these conversations, they're like "What are you guys talking about? This has been a thing for decades. What do you mean testing your model code? What do you mean testing different parts of your software engineering stack? What do you mean using a Docker? What do you mean by making it seem like this is some profound insight you guys have really found?" And yeah, in a way there was -- I don't wanna say there was tension, but there was definitely like a "WTF, what are you guys talking about? This is not as special as you guys make it seem."

**Mihail Eric:** Yeah, you have the different sides of the spectrum. Coming at it from this engineering point, and they're like "This is just DevOps", and then you have the data scientists coming at it from the opposite end of the spectrum, where they're saying, "Wow, this is so much different than anything that's ever been out there before, and so we need to build a whole new discipline around it."

**Daniel Whitenack:** Yeah. Also, I think that the part of the confusion is, just like everything else, like labeling and naming -- I think there's been data scientists and researchers over time, they're like "Yeah, this sounds great. Machine learning plus ops", and what that ends up being is experiment tracking, right? Which actually is something that also is not new, because people have been doing this in high-performance computing for decades and decades... But this sort of solution around -- let's say Weights and Biases, ClearML - like, I love these tools. We use ClearML... Like, the value I get out of that is experimenting at scale, tracking experiments, making sure I know what assets are what, maybe logging datasets and like input/output, all of that stuff... But that's all like experiment tracking and production of the model. I sort of tend to think about MLOps as like everything after that. Like, you have a model, that's all great; whatever happened before, even if you want like lineage about what data was input to your training, which output what model - like, that's all track. That's great. There's still some huge hurdles to get over in terms of like this model being called from within a software application that has like real users on the other end, and like all of the potential implications around that.

So in my mind, that sort of distinction is really confusing for people. And I don't know - maybe you can comment on this, because it's maybe something that's come up on your podcast, I'm not sure... Have you also seen that confusion of like ops versus experiment tracking? And the fact that a lot of data scientists might think there -- it's I think that word that you're saying doesn't mean what you think it means...

**Chris Benson:** Little Princess Bride in there?

**Daniel Whitenack:** Yeah, exactly. \[laughs\]

**Chris Benson:** I think that word, it doesn't --

**Demetrios Brinkmann:** \[00:15:55.23\] That's so classic. It reminds me of the meme too, where you have the little girl who's standing in front of the burning house, and it's like "Worked fine in my Jupyter Notebook. It's an ops problem now..." \[laughter\]

**Daniel Whitenack:** I love Jupyter and all that, but when someone told me there was like an export to Python script function in Jupyter Notebooks, it absolutely frightened me to no end. I'm like "Why does this feature exist?" I guess I understand where it could have come from, but it just like frightens me that -- maybe it's that evidence of the disconnect between "Oh, I wrote some code and did this thing", between that and like software development and integration. I think it's evidence of that gap, for sure.

I've kind of been perusing your goods on your podcast, which is awesome... You know, various inflammatory titles such as "Airflow sucks for MLOps."

**Mihail Eric:** We learned from you guys, though... Let me just tell you that I learned from you on the title or the naming conventions when Luis was on, and it was like "MLOps doesn't exist", or something like that. Or "MLOps is a lie." I was like "These guys went and did it. Oh, man... Like, my lifeblood." \[laughter\]

**Daniel Whitenack:** It's amazing that we went from that title to having the MLOps Community on the podcast. \[laughter\]

**Mihail Eric:** That's why -- yeah, I knew we needed to have a conversation, because it was "Alright, I like it." And I think most people that -- if anyone knows me, they know that the most critical of MLOps is myself. And I feel like I kind of have to be. And that's why I love when Luis says that kind of stuff, and we went and we grilled him hard when he came on our podcast, too... Because it was very much like "Okay, what do you mean by that? And why is that?" And I'm very much trying to see, at every juncture, what is going on with MLOps? And is there something new?

My new favorite thing to ask people is "Is MLOps going to get hadooped?" And that is -- like, with ChatGPT or with foundational models, is MLOps going to become obsolete? Or it's going to become something that old legacy companies use? So that's my big question right now, and what I love thinking about, and those thought exercises that are going through my head... And so I almost feel like the pressure of needing to do that.

**Chris Benson:** By the way, you realize that there's a very, very current version of "hadooped" that a certain large company has a big fear of? Right now, I think the big fear is instead of hadooped, would it be googled? ...because of ChatGPT. You know, you've seen all the stuff in the last few days about "Is the search algorithm going to be gone? Is it done for?"

**Mihail Eric:** I've got a bit of a contrarian stance on that...

**Chris Benson:** Okay, go for it.

**Mihail Eric:** When I see that coming up a lot, I'm just kind of like "There's no way it's going to be replaced", because first of all, I said it once and I'll say it again on this podcast - my New Year's resolution was to be as confident as ChatGPT...

**Chris Benson:** I saw that. I saw that. \[laughs\]

**Mihail Eric:** Because let's be honest, the amount of bull\*\*\*t that it spews out is incredible. I want that kind of confidence when I'm spewing bull\*\*\*t at people... You know, like "Give me that, please." And so that's the first thing - like, you don't know if you can trust it.

But the other thing is, there's a lot of stuff on there. Like, I just see them as two completely separate uses, and it's going to definitely take parts of what you would Google, and that is for a good cause, because a lot of the stuff that you do google right now, it seems like the user experience isn't that good, and so I would like to have a better experience when I'm doing that... Like, for example, if I just want to know the recipe of whatever my favorite vegan bean burger, I can ask ChatGPT and I don't have to get like this verbose, fully SEO-optimized, with a ton of ads and pop-ups and everything - that user experience is horrible, and so please, don't make me have to go through that.

**Chris Benson:** \[00:20:23.04\] I'm feeling some bro love here, by the way, as a vegan. I'm just saying, thank you for using that example.

**Mihail Eric:** Alright, there we go. There we go. Nice. But yeah, then there's gonna be a lot of other use cases where it just isn't the right medium, in my opinion. I don't know about you all, but that's my take on it.

**Daniel Whitenack:** Just bringing it back to the ops perspective here... It's this weird -- because even with like fine-tuned or like transfer learn models, where you have this foundation model type of workflow, generally, up until recently, the thought process was "Okay, well I'm still performing a task." And that task -- like, I can generate a table of tests for that task. And like minimum functionality, I can put that as part of my automation for when I release this model... However you do that, whether that's -- whatever MLOps tools you want to use for that. And now you've sort of got this - like, everybody's thinking about these generative models, and like "Okay, well, if I'm completely open domain, how do I mitigate risk in those situations with these sort of open domain models?"

So I think there are ways, and I think that some of the same workflows will apply, but I do think it does kind of tweak your mindset a little bit to think about some of these things. I don't know if that's something that you all have been thinking about with the kind of most recent wave of generative models.

**Mihail Eric:** It's interesting, because they do change the paradigm quite a bit, in a lot of ways. There was a hackathon -- so I'm based in the Bay Area, and there was a hackathon last week hosted by Scale, where people were just hacking on different things; related to AI, but a lot of them naturally, because gen AI, generative AI is a hot thing to do. There were a lot of applications built around generative AI use cases. And one of them was actually someone tried to basically build an entire backend using nothing but \[unintelligible 00:22:19.11\] calls. They were basically just making calls and updating literally data structures in the backend, fully using generative models. Naturally, this wasn't like amazing, in the sense that it was a little bit hacky to try and update dictionaries, or literally objects via these API calls using things like Codex, and whatnot.

But it does force you to ask this question of "Well, okay, now it's maybe not great, maybe now it's a little bit brittle", but we see this out... Let's imagine for a second what 10 years from now it looks like. I mean, the '60's computers took an entire room, and there was only IBM that had them, but here we are, with them literally on my wrist, or in my pocket. And so it's not unreasonable to expect that some of the ways that we've been doing some these workflows are going to be touched by this. It's going to change how we operate with our software engineering systems, and by extension, by our machine learning systems. I mean, what can be done away with once we have the only interaction being like language to language style kind of translations.

**Daniel Whitenack:** I also wonder if there's like a meta layer here, where -- like, part of the question is "How do we test and set up the ops around large language models and generative models?" I think that's one question that can be asked.

**Chris Benson:** And are those the same or are they different? I was gonna ask that anyway. How do they relate, and how are they not the same?

**Daniel Whitenack:** \[00:23:43.24\] Sure. And how can one feed into the other, right? What you were talking about just now, Mihail, is that there's this idea of like "How could generative models help me with my MLOps?" Right? Let's say I'm trying to put a model into production, and I'm trying to test that well, or I'm like searching through logs and other things and trying to parse that out... If I can ask an agent to help me do some of those things, which, to be honest, are fairly predictable if I've seen them before - yeah, it's very meta, I know... But there's like the one side, like "How do I put these things into production?" And as you say, Chris, are there differences with that? And the second place - could I actually bring those around the other side and help them do my -- have those models help me do my MLOps tasks, right?

**Chris Benson:** So I am 100% in the same boat as you. I know the CEO of you.com, he posted on Twitter "What is the best use of a large language model in your mind?" Of course, I instantly thought like "YAML fluency..." \[laughter\] That would be incredible, if it could do that. Like, let's just be on honest, how much time would it save if it could just go and set up my Kubernetes cluster for me? And I've talked to a lot of smart people about that, and I think a lot of people are like "No, that's not going to happen. Like, that's too far." But I also am a little bit like "Yeah, well, there's a lot of other stuff that we thought wasn't going to happen, and it's happening right now." So...

**Chris Benson:** I don't think that's too far. Like, that is my pain point - we're this far into Kubernetes, and that still hurts. If you're not just using someone else's implementation, you're gonna set up your own cluster, it's still painful. And this is known stuff. It's just a pain in the butt. That's a great thing. I don't think that's too far at all, and I want it now.

**Demetrios Brinkmann:** Yeah, exactly. Maybe it's just like a fine-tune away, let's be honest. Maybe that's all it is, and somebody needs to think about that. I'm sure I'm not the only one that has thought about that. But I'll let Mr. Eric chime in, too. I know he has some strong thoughts. I'll preempt his thoughts on this with his idea of an incredible app on top of generative models was stealing somebody else's IP. Do you want to tell us about what you've created, Mr. Eric?

**Daniel Whitenack:** Oh, that sounds perfect... And by the way, just disclaimer, I'm not implicating myself in any of the following conversation... \[laughter\]

**Demetrios Brinkmann:** This is not hacking advice...

**Chris Benson:** Oh, goodness, this show just took a turn...

**Chris Benson:** Oh, boy... I didn't realize I was gonna be basically implicating myself criminally by coming on this podcast... But we're gonna edit this out, right? This is edited out.

**Daniel Whitenack:** Sure. Sure. We'll say that now. But we didn't sign a contract of any type, so...

**Chris Benson:** And there are no intelligence agencies listening, I promise.

**Mihail Eric:** Absolutely not. Absolutely not. Yeah, I mean, I guess I'll maybe spend a little bit time talking about the use case that I think Demetrius is referring to, which - it's a little bit of a toy use case. We didn't do it because we were trying to get sued. That wasn't the goal. But hopefully, it should spur a little bit of creativity.

**Chris Benson:** What a start... \[laughter\]

**Mihail Eric:** Well, okay, maybe like 10% we were trying to get sued. No, the use case - to give an idea of what has become possible, outside of, yes, the really practical use cases, generating YAML, generating unit tests, I think these are all, on a very serious note, these are things that are going to be possible. I actually don't see this being as too far off, not even like a decade out. I see this being like the next few years, being able to spin off things like that is just going to be totally feasible. This is like language-based kind of generation, generative modeling.

The other one that we haven't really touched on as much, which has also really captured people's interests has been more of the image-based, like vision-based, whether that's a single static image, or that's an entire video, or in some case even audio... Just like different modalities beside pure text. And so one that has certainly become really interesting because of the rise of things like DALL-E from OpenAI, and then Stability, Stable Diffusion - these incredible, photorealistic images in different styles, that you can just prompt with literally human text, which has never been possible before, or at least not at this level of quality... And so one of the things that my co-founder and I actually --

**Demetrios Brinkmann:** \[00:28:20.22\] Here it comes...

**Mihail Eric:** Yeah, that we were working on was this little toy application that we called Rick and Mortify. And the basic use case was - we were big fans of the Rick and Morty TV show, and we love it, we think it's very great, great, great content...

**Demetrios Brinkmann:** That did not stop a cease and desist letter from coming... \[laughter\]

**Mihail Eric:** There's a back-story here that I found out after we released the application, which if you guys are curious, I'll go into. But we were really trying to test this hypothesis of like, okay, so you have these vision-based models that are incredible, you have these language-based models that incredible... How can we like merge them to actually try and do something at the intersection of them, too? And so what we came up with was like "Well, can we personalize episodes of Rick and Morty?" Like, if I as a super-fan of the show want to imagine a new episode - if I provided a premise, if I provided a set of characters that I wanted, maybe myself eventually, but let's just start with the basic characters that are in the show already, Rick, Morty, Summer, Poopybutthole, Mr. Meeseeks... Like, all these folks... That is an actual character name, I just want to point out for the audience; I did not just make up a name to try and be profane. That is a character, Mr. Poopybutthole... \[laughs\]

**Chris Benson:** I'm sure we've ever had that word on the show before, actually... \[laughs\]

**Mihail Eric:** I didn't know it was a word until this show, so we're all new to this game... What we essentially built out was you could come into this application, you could provide a premise of what you would like the episode to look like... So Rick and Morty go to the Practical AI Podcast and have a great conversation about generative AI. And then you pick your characters, and using a combination of vision-based generative systems, Stable Diffusion, DALL-E, and then the GPT-3, these kind of latest generations of GPT models, we were able to generate not only the visuals, we were able to generate like a script, effectively a storyboard for a new episode. This is just like a first use case, like "Well, we're literally getting new episodes." Maybe there's like 5-10 frames of this episode, but you're seeing some flavor of a plot, with dialogue, with accompanying visuals... And sure, it's a little bit rough, but extend this out to the future, right? Like, what happens then? Like, this has become literally a fully-fledged episode. And that's where this could become.

So no cease and desist yet, but people did play with it, people had a lot of fun with it. We're not making any money on it, so don't worry, Dan and Justin; it's just Fan Art Friday. We're just trying to show our appreciation for the show.

**Chris Benson:** You raise something... It's kind of funny, because just in day-to-day conversations about AI topics, and like new model comes out, and you see all the media stuff where people are just kind of bashing it and telling you all the problems with it and everything... And to your point, you just said this, and that's why I bring it up... It's like, but think of what we can do with this tomorrow. Like, today, we have this, and it's imperfect. And yesterday, we didn't have any such thing. Think about if today we have the imperfect thing, tomorrow's gonna be pretty amazing. And to your point there, what you're doing there is way out there, but it's not far from being very mainstream.

**Mihail Eric:** So my question about that is like, you have the training data, and you have the base show that a human made... And so without that -- like, I'm trying to extrapolate ten years in the future, and it's just going to be us remaking a bunch of shows that we made back when we used to do it all by hand? That's kind of my question there, right?

**Chris Benson:** I think that's a generative function right there. I don't think you have to start with where you were, in the sense of part of that function at the very frontend of that workflow is going to be generating different possibilities that are not directly linked to the training data, and then like carrying it from there. I think it's the future of entertainment.

**Break:** \[00:32:15.28\]

**Daniel Whitenack:** What I think is kind of - "disconcerting" is the right term... I don't know the timescale on this or whatever, but imagine all these datasets around language models especially are scraped from the internet, right? And a lot of these image datasets are scraped from the internet. So there's a proliferation of these models, and the internet is being filled with computer-generated content. So the next scraped versions of the internet, like the next common crawl, the next whatever - like, what proportion of that data set is coming out of generative AI models? Now, I think there's interesting things going on, of course, with detecting what is AI-generated and what isn't. I've seen like what Open AI came out with for their own system, and of course, like you say, Chris, everybody has criticisms of that already... But there's many other people exploring this as well, like GPT-0, and other things that are exploring, like, "How do we determine what is AI-generated and not?"

So that's where like -- I don't know what the implications of that are for these large-scale datasets down the road, but that's sort of where my mind is going more so than "Oh, should we be populating the internet with a lot of this generative art and other things, even if it's terrible?" Well, I'm having a lot of fun with it right now, but there's sort of second-order effects, I guess...

**Chris Benson:** No worries then, man...

**Daniel Whitenack:** Yeah... Well, I'll be dead by that time; I don't know, maybe...

**Mihail Eric:** No, no, no... This will be soon. But it's a really interesting thought experiment, and again, one that is closer than I think we believe. This idea of what happens when the bulk of these datasets are actually generated by systems. And I can see some positive effects and some that you would be like "Okay, this might be a questionable downside."

On the positive side, these models, like the generative ones, especially of the language variety, are like very good. I mean, grammatically correct. They're like very semantically good in terms of what they output. Does this mean that now the bulk of the data that it's being trained on is just going to be like way higher quality writing than you would typically find in a typical Reddit post, or something just in the deepest corners of the web? And then after training on data that's significantly better, you have this compounding effect of like "Well, now the data I'm training on is better", so the model is only getting even better at writing of some kind, and then we mix it in with some other more diverse writing... And then it's going to continue to compound on itself in terms of quality?

The downside - I mean, one you could hypothesize is that these models are only able to generate certain kinds of distributions of data, right? Only certain kinds of things they can write about or talk about. So now, when you're injecting all these training sets with like a very skewed distribution of topics, of ideas on these topics etc. How do you ensure that actually you're still giving your model enough of a versatility and what it sees is next generations that have been trained on these datasets, to ensure that it's still a general-purpose model? What if 90% of the content that's put out there is just really bad marketing copy? Facebook ads, or something.

**Demetrios Brinkmann:** \[00:36:25.21\]Yeah... You overfit.

**Mihail Eric:** Yeah, it'll overfit exactly to that. And then what happens to these next-generation systems? They actually might be hurt in the long run.

**Demetrios Brinkmann:** Yeah, it's like we're in the golden era.

**Daniel Whitenack:** Yeah. I think that you can have an MLOps community, in my opinion, for a long time, because there's such a wide variety of problems that people are still dealing with... So on this like very far end, we're talking about generative AI. Being part of -- like, my day job as part of an international NGO, we're dealing with problems still, like where, "Hey, there's no internet in this place, and we're running our model on an Android tablet", or whatever. There's this range of like, "Okay, what's the problem that happens when I scrape the whole internet again?", all the way down to "How do I run this small model on an Android tablet?" And I don't actually see that changing for some time. Yes, the world's changing a lot, but there's still like such a wide variety of issues, and I think fun challenges to wrestle with around this concept of operations plus AI and machine learning.

So yeah, it is sort of hard to define in that sort of way, but it's also really exciting because of the wide variety of things that you could be involved with. As a DevOps person, or software engineer, or data scientist, there's plenty of problems that have to do with running even like a much older language model on your phone. And other problems that have to do with various different scales, or different modalities of data... All these things.

**Chris Benson:** And that goes back to kind of -- in the pre-show that our listeners were not there for we kind of talked a little bit about that level of diversity. How do you guys see that? I mean, Daniel, you've kind of talked about almost an extreme case of kind of edge concept being your target, and having this slow Android thing... And yet, we're used to being just like gluttonously-resourced in the cloud; everything you could possibly want there. Ramp it up, ramp it up. You've got all the stuff you want there, and you have this incredible diversity. So for you guys thinking about MLOps so much, how do you deal with that? When you go from big company, to one person struggling to work at all, how does MLOps look when you're talking about diversity of use cases, plus diversity of users that you're serving? How do you make it a thing? How do you keep it all together there?

**Demetrios Brinkmann:** A few answers to this question, actually. So the first part of the diversity of use cases, and in a sense we've gotten a little bit backwards from something we said before, where on the one hand we're like "Oh, generative systems are just going to do it with all of this." And then now we're back at like "Well, but there's like enough stuff that we still need to solve that it'll probably be around."
**Daniel Whitenack:** Both \[unintelligible 00:39:18.11\]

**Chris Benson:** We're not quite there yet.

**Demetrios Brinkmann:** Exactly. Exactly. And to that point, I actually -- I was actually asked this in a podcast once a few weeks ago, where I was asked "What do I believe will be the position, like the role that will exist ten years from now?" And I was asked "Will it be like a data scientist, a prompt engineer, an MLOps engineer?" Where would I put my money? And I still answered MLOps engineer, like machine learning engineer, in kind of a similar category... Because I do believe that the same problems will persist, whether or not they're for old school decision tree based models, discriminative models that we used maybe 5-10 years ago, even pre-0deep learning, or these new GPT-500, whatever will come later models; Stable Diffusion 10,000... You know what I mean? Like, the same problems will persist - how do we operationalize it? How do we make it scalable? How do we keep uptime on models so that people interact with this?

\[00:40:12.01\] These are all questions that MLOps is fundamentally trying to solve and address, and whether or not you're using Kubernetes today, or some prompt engineering-based Kubernetes tomorrow... You know, to make it even more concrete, like Airflow today versus like an Airflow for prompt engineering, which is what people are actually developing today - the same sort of principles, and the same concerns are going to apply.

So I don't see that going away anytime soon. As long as there's a machine learning system, as long as we, I would assume all of us here in this room, in this virtual room, anyone who's listening here believes that AI is going to be the future, it's going to be here for decades, then the same questions will still have to apply.

So that's like the first part I want to just throw out there, is MLOps is here to stay, whether or not it's Kubernetes, or whatever comes after Kubernetes... We hope it comes soon... Someone needs to get it soon... \[laughter\]

**Daniel Whitenack:** I have a tip there that I'll provide later... I don't know if you all have seen what Erik Bernhardsson is doing with Modal and Modal Labs... I've been playing around with that recently. I've been pretty floored by it. But anyway, that's a whole other side topic and episode, which hopefully we can have soon.

**Mihail Eric:** Totally. But I think to me the second part of the question, which was "How do different organizations think about maybe the MLOps question?" is something that we do want to address here, which is, it does depend; it really does depend in terms of the maturity of the organization, and budget, time etc. These are all different axes that fundamentally define how a team or a business should think about its approach to MLOps. And there's different axes that we can go into exactly what they are, but open source versus not open source - like, are you gonna stitch together a bunch of open source tools, or are you gonna use Sagemaker out of the box? How much money do you have? Can you get by with just spinning everything up on your own? All these different axes, different organizations have to think through, and it becomes not a one-size-fits-all. It's a function of all these different parameters to really tailor the right solution to the organization.

**Demetrios Brinkmann:** And there you go; you didn't realize that Mr. Mihail has a little consultant in his blood...

**Mihail Eric:** Do I get to put another plug here, another shameless plug? Is that with this as an invitation to-- nah.

**Daniel Whitenack:** As many as you want. As many as you want.

**Chris Benson:** Of course. Of course.

**Mihail Eric:** That is the most consulting answer you can possibly give to any question, is like "Well, for this rate, I can tell you more details on what comes after..."

**Demetrios Brinkmann:** Exactly. \[unintelligible 00:42:45.01\] I just will add a quick piece to that, which is there was a time in the MLOps Community that like a week wouldn't go by in our Slack where someone would not share the "You are not Google" blog post. And it's like, the amount of people that try and go at it and try and get that, especially because Google puts out so much great thought leadership on MLOps, and they have the level zero, level one, level two, or they have the ML Test score, all that stuff... And people think that straight out from zero to one, you need to be creating everything automated, it needs to be like the most high-performance bulletproof system that you can think of... And it was just setting up a lot of people for failure. And I think we've moved past that, because I haven't seen the "You are not Google" blog posts being shared as much in the community, which makes me think people recognize, and they're a little bit more self-aware when they're trying to create their systems at their jobs...

**Chris Benson:** You don't think they're just off in the corner, crying? \[laughter\]

**Mihail Eric:** \[00:44:01.22\] Or they just don't think being Google is a good thing anymore, just objectively... \[laughs\]

**Demetrios Brinkmann:** Yeah, that might be it, too.

**Daniel Whitenack:** I was listening to -- I don't know if you all listened to the Indie Hackers Podcast... But in a recent episode they made this good point, they were talking about -- because they talk a lot about bootstrapped startups, and stuff like that... And one of the points they made was, you know, whenever Basecamp was around, or like starting up and that sort of thing, they made such inflammatory statements about like "Taking venture capital is stupid. Why would you ever do it?" Like, there was a need for that voice to be in there, right?

**Chris Benson:** That voice is still there with the founder, you know? It's not changed...

**Daniel Whitenack:** Yeah... But now you hear less of that, I think, and it's sort of like normalized, in that there's still different perspectives, but there's not like as much -- like, it's become more normalized to have these more nuanced discussions. I think with MLOps we've all made our sort of inflammatory podcast titles, like whatever it was, "MLOps is dead", or I forget what it was... And so there is probably like still this -- we're kind of feeling out where the normal is, and where things settle down to, and providing like a balanced perspective, where - yeah, you probably shouldn't be doing MLOps the same way Google is, but you also should probably be doing MLOps; it's just like where on that spectrum do you land, and what type of tools makes sense for you?

**Chris Benson:** You know, in real life I don't think it's "You probably should not be", I think it's "You can't do MLOps the way Google does." I mean, just from a resource standpoint. Most companies don't have that team available, and that set of tools... And I like the fact that we're talking it in a more realistic context here, for the vast majority of us out there that are not accessing the best of the best in all the categories. It's not possible for many of us. We have to settle for something that's doable, kind of going to Demetrius' point; you have to find that level that you can do it, and you can sustain it, and yet, it's still incredibly productive, even if it's not the Google version.

**Demetrios Brinkmann:** Yeah, and one thing I'm fascinated by, just because there is almost this open source, you've got one person trying to hack something together, and looking out there and seeing what's on the market that they can get for a price point between free and cheap... And then you've got the Googles that have built everything, and have so much time and ability to do that.

And in between those two points, you have a lot of companies that popped up. And they popped up in the last three to five years. And as Mihail was saying, We came at MLOps from this data science perspective, and so I think in the beginning, a lot were trying to cater to them, and then some were like "Well, wait a minute... There's like platform engineers", and so they tried to cater to them... And then you're seeing now - I almost wanted to like change my title for what I do on LinkedIn, as I'm just going to be like the "I ride hype waves", because MLOps was a complete hype wave. And we felt it. And especially -- like, I just got lucky, because the pandemic hit, and right when it hit, I was working for a company that was trying to sell MLOps tools, and that company went out of business, but I was in the MLOps world, so I figured I would start this Slack community, and then it took off. And so I was able to ride that hype wave, and we really felt it over the last two, three years...

\[00:47:54.19\] And now it's like, "Alright, now there's this generative AI hype wave", and so if you talk to VCs and the ones that poured a boatload of cash into the MLOps market, they're now like "Yeah, that's kind of not really that big of a deal anymore. We're talking to follow up on all those investments. What we're going to do is invest in the next AI tool."

And so I love thinking about that, and how now what is the new hype cycle of the AI, and generative AI large language models - like, where's that going to play out? We've been talking about it; there's a lot of potential out there, but where are we going to go with that, and is it like just a bunch of money pouring into it? ...and who knows what's actually going to happen.

**Chris Benson:** It's kind of funny when you say that, and it's like there's an oversimplification when the market observes these things. MLOps - "Well, now we're past that. That's been solved." Web 3... You know,, whichever hype cycle it is. But I think when you look at what's happening, it takes all these things to have gotten -- right now we're saying generative, because that's kind of the sexiest part of the puzzle. But it's not just generative. It's the fact that you have the MLOps now that's matured a little bit and is supporting all that, you have the large language models that people like Daniel has been working on, you have all the transformers that are well established... If you didn't have all of those components, the current hype that's now being attributed to generative would not be happening.

And so it's once again an oversimplification by the market on the sexy piece, but it's that whole ecosystem that's evolved over the last few years that enabled all that to happen. And so we're seeing a really cool moment, definitely, but it's really the fusion of it all, as opposed to just being generative. You couldn't have generative today without that.

**Demetrios Brinkmann:** I think that's such a fantastic point... I just wanna sit on that a little bit longer, because when the GPT-3 paper came out - this was I guess toward the end of 2020, maybe middle to end of 2020... This was like a long thing that I remember reading, and the most interesting, in my mind, achievements of that whole system was not even anything about modeling, right? Like, fundamentally, the building blocks of the AI architecture, if you want to call it that - we've been using these systems for years, in some sense. It was really the fact that they had built this incredibly good software infrastructure to build out, train large-scale systems at this scale, over this many GPUs, at this latency, to make sure that the updates for the gradients could happen fast enough that this wasn't gonna take 50 years to train... And they did that all; which fundamentally, was really like an MLOps challenge. I mean, at its core...

**Chris Benson:** Agreed.

**Demetrios Brinkmann:** ... being able to arcade, that kind of a system is the complexity; it's not the fact that there was this new scientific achievement that we really came up with. It was really like an engineering achievement. And so in that way, it totally was a layering on of things that we had seen before. But now they're like old hat, right? Like, now we have open source repos that can literally approximate the same effects. DeepSpeed from Microsoft has become really fast, and very used. You can train large systems at that scale. But the people that pioneered those systems really had to solve some MLOps challenges in their own right.

**Chris Benson:** It's all right there. They haven't gone away; it's still right there, it's a team effort for all of those different parts, constituent parts to put the whole together. But at this moment, the word generative is the frontman, apparently, as we record this today. It's pretty amazing that it's that MLOps take that has put that all together, and kept it together, kept them in lockstep, so that you can create the new things of today.

**Daniel Whitenack:** Yeah. I mean, another example of that is like all that we're hearing about, about language model chaining, and that sort of thing... If you look at each step of that process, LangChain, or whatever it is, those are things we've been talking about for a long time. Like, there is an operational burden though to chain these things together and make them work well in concert, right? That's really one of the fundamental things that we learned when we talked about ChatGPT. Like, the language model existed, reinforcement learning existed, human feedback existed... All of these things existed; the chaining of them together in a certain workflow is the real interesting piece.

\[00:52:22.19\] So I do think that's really exciting, where a lot of those sorts of chaining operations and like bringing things together in unique ways - that is a lot more possible because the tooling has gotten better. It doesn't move us past MLOps; actually, we just use MLOps slightly differently, and if anything, I think it becomes more crucial, because there's so many moving pieces, right?

**Chris Benson:** Shoulders of giants, all the way through.

**Daniel Whitenack:** Yeah.

**Chris Benson:** You combine that with the Einstein turtles all the way down kind of thing... It's shoulders of giants all the way down.

**Demetrios Brinkmann:** Yeah. The one thing to add maybe to that is - very often when I have described sort of the progression of MLOps over time, people often like to use the Gartner Hype Cycle to describe trends in technology. You have a kind of the initial hype, then the waiting, and kind of the trough of disillusionment, and then this gradual climb upwards. I've often said that right now we're at that gradual climb upwards. The MLOps systems and the technologies developed are like standardized, and they're becoming more commonplace, and people are using them. But the thing is, that linear climb upward, while it is where a lot of value is extracted, is not really what a VC would look for. They would want this; they want something that's like exponential in growth, and so they're never going to ride a hype train that's like a linear climb upwards, even if that's where people are actually deriving value. They're like, "Well, how do we get to the next thing in the next Gartner hype cycle, where there's the next big inflection point up that we need to ride?" Because that's where you get real 100x gains. That's the kind of thing they're looking for.

**Chris Benson:** Yeah. And ironically the place where you find all that value there after that initial hype is from the trough of disillusionment. That's where you kind of go "Now I understand. Now I know what we really need to do", and you get that really good growth after that.

**Demetrios Brinkmann:** That's a great point.

**Mihail Eric:** Yeah. This has been amazing.

**Daniel Whitenack:** Yeah, this has been awesome.

**Mihail Eric:** I have not needed to carry the conversation at all, so I appreciate you all doing the heavy-lifting for me... Usually, I am constantly thinking about that, and you made it very easy today. So I appreciate that.

**Chris Benson:** This was a fun conversation.

**Daniel Whitenack:** This was awesome.

**Demetrios Brinkmann:** Yeah. We should do this more often.

**Daniel Whitenack:** Yeah, we should. We should circle back and see if any of the things that we said actually are true next year... Which maybe some of them -- I'm going for like 25%. If I get there, I'm good.

**Mihail Eric:** Well, I didn't put my money on any of these predictions, so I don't really care.

**Daniel Whitenack:** Right. You've already explained that you're not culpable, or legally on the hook for anything...

**Mihail Eric:** I'm not culpable... Rick and Mortify - it's just a toy project. Don't worry about it. I come in peace.

**Chris Benson:** I keep waiting -- you know, because we can see each other on video. I know it's an audio recording, but I keep waiting for the feds to bust in behind you on your screen there... You know, the door goes flying back...

**Daniel Whitenack:** It's a different sort of BBC kid moment... \[laughs\]

**Demetrios Brinkmann:** Yeah. And then my mic just goes out and it's like "Well, he'll be back, probably... Maybe..."

**Chris Benson:** He'll be back. That's right. But then Demetrius would have to carry the conversation.

**Demetrios Brinkmann:** Yeah, that would not be good. I'd be kind of looking for you.

**Daniel Whitenack:** Well, next year we'll see if this or any of the other things come true on Practical AI plus MLOps Community. Definitely check out the show notes for those Practical AI listeners out there. We're going to include links to all the great things going on in the MLOps Community, Slack channel, podcast, events, newsletter, all sorts of amazing stuff... And yeah, thanks, guys. It's been awesome to have you on the show.

**Demetrios Brinkmann:** Likewise.

**Mihail Eric:** Thank you. A pleasure.
