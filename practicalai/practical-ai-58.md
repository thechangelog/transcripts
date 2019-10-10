**Daniel Whitenack:** Welcome to another Fully Connected episode of Practical AI. In these episodes Chris and I keep you fully-connected with everything that's happening in the AI community. We'll take some time to discuss some of the latest AI news and trends, and we'll dig a little bit into learning resources to help you level up your machine learning game.

I'm Daniel Whitenack, I'm a data scientist with SIL International, and my co-host is here, Chris Benson, who's a principal AI strategist at Lockheed Martin. How are you doing, Chris?

**Chris Benson:** I'm doing great. How's it going today, Daniel?

**Daniel Whitenack:** It's going pretty good, yeah; it's been a reasonably normal week, in the sense that I've just mostly been at my desk here, working on things... But yeah, a lot of exciting NLP and language-related stuff coming up this fall and into the spring for me, so I'm excited about that... But your week's been a little bit more exciting, I hear.

**Chris Benson:** Well, I'm in London right now as we're recording this, and started off doing some stuff with the Royal Academy of Engineering, representing Lockheed Martin, and...

**Daniel Whitenack:** Were you knighted?

**Chris Benson:** I was not knighted, and I was so disappointed that I wasn't.

**Daniel Whitenack:** I guess it's only possible for English citizens or U.K. citizens to be knighted... Is that true? I don't even know that.

**Chris Benson:** I'm not sure... But I'm married to a Brit, and my daughter is half-Brit, so...

**Daniel Whitenack:** It should count.

**Chris Benson:** I was hoping that they'd make an exception, but they didn't. I'm gonna register a complaint with Buckingham Palace.

**Daniel Whitenack:** But they didn't kick you out, it was a good experience.

**Chris Benson:** They didn't kick me out... I did a talk earlier in the week, and did a panel, and was privileged to meet a lot of really, really smart people... And that was really good. I still had to work remotely after that was done, because we're about to start a family vacation over here, so I was just kind of waiting for family to arrive, and I dashed off to North Wales and climbed Snowdon, and then still put in a full workday every day... So it's been busy, but I'm back in London now, and tomorrow is vacation, so all is good, my friend.

**Daniel Whitenack:** Yeah, you're almost there. We'll get through this podcast recording, and then it's all vacation from there, at least until I talk to you next.

**Chris Benson:** \[00:04:06.14\] I'm already drinking a Welsh beer right now, so I'm getting started. Okay.

**Daniel Whitenack:** Nice. Cool, well today on the Fully Connected episode - a few of these episodes in the past we've dug deep into individual topics. In the last one we talked about high-performance computing, which was great... But today we're just going to take some time and discuss a little bit about some of the trends that we're seeing in the AI community, a few new stories that caught our attention... And we've done this in the past, but every once in a while we like to update things in this way.

To get things started, I wanted to bring up a trend that I'm definitely seeing, which I'm encouraged by and I think is a really good sign, and that's what's seeming to be some good momentum in terms of AI contributions, AI education, AI research activity - all of these things in the majority world, so outside of the U.S. and Europe, in countries in Africa, or maybe India, South-East Asia, and where most of the people in the world live... So it's great to see a lot of AI activity starting to happen in these areas. There's definitely still a lot of room for growth.

There's an article that we'll reference in the show notes - and we'll reference all the articles in the show notes that we talk about... They look at the publications for the NeurIPS Conference, and of course, those are still highly dominated by the U.S. mainly, but also European contributors. You can start to see some other regions of the world contributing. There's a lot of room for growth, but I've definitely been seeing a lot more attention being placed on education, AI research, AI innovation in other places around the world. I don't know if you've seen this as well, Chris.

**Chris Benson:** I have, and it's really good to see. We talk so much about the democratization and commoditization of AI in terms of accessibility... So seeing it really blossom all over the world and not just in U.S. and Europe and key nations around the world... It's really good.

I like seeing it every time it's in Africa, and I know we've talked about in the past and I think we're gonna talk about that a bit today... So I'm pretty happy. And I've also noticed it's going into a lot of colleges, universities around the world that are not top-tier strictly. So instead of everything strictly being like in the U.S, Stanford, MIT, that kind of thing, there's a lot of second-tier universities that are trying to do their thing at it, and I'm very encouraged by that. It's really becoming available to everyone.

**Daniel Whitenack:** Yeah, definitely. There's a lot of problems that are relevant to AI, that are probably people from those regions have more domain expertise and more empathy for these sorts of problems around things like translation, or things like certain agriculture-related applications, or other applications that I'm sure people are working on... But these sorts of problems - the major application of those seems like they would be in places where there is a lot of language diversity, or where there is a lot of agriculture, right?

Some of the things that I've seen recently are the ICLR Conference happening in Ethiopia this year; it's a big AI research conference, which is really great to see that happening there. I wish we could be there. Maybe if there's any organizers listening to this and you want our podcast there, definitely let us know.

**Chris Benson:** Hint-hint.

**Daniel Whitenack:** I'd be up for going to Ethiopia...

**Chris Benson:** Yeah, absolutely.

**Daniel Whitenack:** Would you?

**Chris Benson:** \[00:07:53.19\] Oh, totally. And I agree. And I say this - I'll say it quietly - I'm sitting in London right now and I don't wanna see all AI stuff in New York City and in London and in San Francisco and in places like that. It's fantastic to see Ethiopia. I think we should start tracking that a little bit in terms of places you wouldn't expect to see it that it's popping up, and give a shout-out to people like that.

**Daniel Whitenack:** Yeah, definitely. I know Google AI, for example, has started opening offices in other places around the world. They've just announced -- I forget when this announcement was; it was just in the last week that I saw it, at least... They're opening up an office in Bangalore, India. But also they have offices in Ghana, in Beijing... And then also we were mentioning Africa - I know there's a series of conferences and events and workshops called the Deep Learning Indaba that's happening there. I've seen other things that are being sponsored by companies like Facebook, Google, Microsoft and other large tech entities that are happening there.

There's a South-East Asia Machine Learning School, there was an AI for India Summit that Facebook put on in India... I think that was actually also in Bangalore. It seems like a lot of these tech companies are really interested in developing AI talent and AI expertise in these majority world countries... And I have my own thoughts about why that might be taking place, but do you have any thoughts on why a tech company like Google or Microsoft would be interested in that?

**Chris Benson:** Well, I think part of it is it's really hard to find great talent, and so I think having a diversity in terms of your search for the people that are interested and capable of doing this, it makes sense to go to third world countries and take a bunch of interested people and bring them into the fold. I love that.

I'm looking at the Indaba website from a few weeks ago when they had the conference, and to your point, the sponsor list is a who's who; DeepMind, Microsoft, Google, Facebook, IBM, Apple... It's the same tech companies that you're gonna see sponsoring stuff in San Francisco, in New York, in London and such... So I love seeing that attention, and I would love to see, in this case, since we're talking about Africa, Africa being able to really get a great AI community behind it; and while they're at it, they should listen to our podcast.

**Daniel Whitenack:** \[laughs\] Yeah, and we should get involved as we can, for sure. I definitely agree with you, I think the talent is one side of things. I also think that hopefully these companies are starting to realize -- like I mentioned, some of the problems that they're really putting a lot of focus into, like Facebook is putting a ton of focus into machine translation and language tech... And really the sort of real-world experience and domain knowledge that people from Africa or South-East Asia could bring to those sorts of efforts - I think you're just gonna end up with better results by using expertise that's rooted and has experience in those areas.

And of course, AI I think is going to be ubiquitous in the software stack as we move forward, and so as we try to build up software engineering in general in these different areas, and education in general, I think it definitely needs to be a part of it.

I wanted to share, too - recently, in July, I was in Singapore, and had the chance to stop by the AI Singapore offices... You might have heard of programs like this. It's kind of like the Prime Minister's office in Singapore says "Singapore needs to be a leader in AI. How are we going to do that? How are we going to develop local talent in AI? How are we going to contribute to research?" etc. And they established this AI Singapore Organization, which is associated with the Prime Minister's office. Their job is to basically figure that out.

\[00:12:05.09\] I have to say, I was super-impressed with the program that they've put together there. It seems to be run like a well-oiled machine, so companies can come to AI Singapore and they basically say "Okay, if you have a problem that's related to AI, let's partner together to solve that. What we're gonna do is we're gonna form a team in AI Singapore", which includes really top-notch mentors in AI and researchers in AI, paired with AI apprentices that they're training up, and your engineers from your company. Basically, everybody's leveling up in AI at the same time, and their focus is really not just to kind of learn interesting things, but they're working on real-world problems that can be solved, and they really wanna take on problems that will be pushed into production in commercial entities.

So they have this whole program around it, and I have to say I was super-impressed with the talent that was there and the program that they have going on. It's just cool to see that sort of thing happen, and I shouldn't have been shocked, but I was a little bit shocked that this was going on in Singapore, and at such a great level, and I had no idea about it.

**Chris Benson:** So is it accurate to say that it's sort of running like an AI incubator, the way you see incubators in U.S, where they're non-profits and university-affiliated organizations that are taking the talent in? Instead of being around a university setting specifically, they're doing it out of the Prime Minister's office... Is that a fair way of assessment?

**Daniel Whitenack:** Yeah, it's not unrelated to that sort of incubator idea, but it's really more maybe an accelerator or something like that, paired with an educational piece there... Because what happens is every year they have engineers and whoever from Singapore apply to become AI apprentices in the program... And I think they said it's really competitive. I'm probably gonna get the numbers wrong, but there were like 800 people that applied, and 20 got in. So it's really competitive. You've got these top-notch applicants, and they're training them up over this sort of nine-month period, to be AI engineers.

So they go through a little bit of training, but then also their capstone, or the project that they work on is an actual problem within a tech company that they're working with... So they form this collaborative team with mentors, and the apprentices in the industry/company to actually solve a problem that will go into production.

So it's existing companies leveling up their AI expertise, while at the same time developing AI talent within Singapore. It's pretty cool.

**Chris Benson:** Do you think you're gonna see more of these popping up, associated with various nation-states around the world? Do you think this is gonna be a common blueprint that we'll see?

**Daniel Whitenack:** Yeah, I certainly hope so. They seem to have this down... And I'm actually kind of shocked, because most of the times when I think about internship or accelerator programs, or project-focused partnerships between Academia and industry, a lot of times it will seem like they're run really poorly... And I think what I was shocked by was this was run really well.

So I think if other countries are really serious about this, I think it is a model that we might see more of. I think it's hard to get it right for sure, because how many times have we seen "Oh, this company is gonna work with this university" or "There's gonna be this center of excellence at a university that we're going to work with certain companies from industry", and then some stuff happens, but it's not really that impactful. So I hope that these sorts of things are a little bit more impactful.

**Break:**\ [00:15:56.28\]

**Daniel Whitenack:** It's definitely great to talk about some of the things that have been going on in parts of the world that we're not currently in, but there's certainly a lot of AI news coming from the rest of the world as well, and I think that you had something that you wanted to highlight, that you saw in -- was it from MIT, or where was it from?

**Chris Benson:** Yeah, I saw it on \[unintelligible 00:16:58.17\] It's an article that I ran across called "Artificial Intelligence Probes Dark Matter in the Universe."

**Daniel Whitenack:** Oh yeah, from ETH Zürich.

**Chris Benson:** Yeah.

**Daniel Whitenack:** Sorry, I got that wrong.

**Chris Benson:** Correct. I know that you're a physicist by background, and just as an amateur, I love physics, so it certainly caught my attention. It was interesting that they were trying to explain it by drawing an analogy with facial recognition in terms of how they're using models to scan the universe and try to understand what both dark matter and dark energy are. And for listeners who may not be familiar, dark matter exerts gravity on the universe, and you can measure that, but we can't see it. It's kind of like gravity coming from an invisible source. Daniel, if I mess any of this up, you should correct me...

**Daniel Whitenack:** No, you're doing great.

**Chris Benson:** And also, the universe is expanding, constantly accelerating in this expansion, and so that's dark energy... And once again, we cannot see that source. So those are two of the great mysteries in physics at this point, trying to identify and understand what we're observing. So seeing that they're using models to try to recognize those features and find the patterns that maybe otherwise we're not seeing - that was pretty cool.

**Daniel Whitenack:** Yeah, definitely. I think that there's a sort of general trend in science where these sorts of AI techniques are being applied, that are making an impact. I've mentioned a couple times on the podcast where machine learning started to make an impact on the field that I was studying when I was in grad school... But I think the pattern was similar there, and that's the sense that we have these experimental observations which are rooted in reality, and we have a little bit of knowledge about how things work, and constance, and other things, and certain laws that shouldn't be violated, so constraints, essentially...

But the relationships between input and output could be incredibly complicated to write down in terms of equations, or maybe computationally too expensive, so the problems that we are working on, where we know that this atom or molecule has this many particles in it - electrons and neutrons - but to write down the equation and actually make the computations about how all these things work together... It's actually computationally infeasible to do that, just by the equations that we write down.

\[00:19:39.14\] In this case, with the dark matter, we know some of these constraints, we know the experimental observations, but we're not able to maybe write down well the statistics that they're talking about, that govern these things. So kind of plugging a neural network into that gap and having it try to learn some of the features that are important to some input/output, whether that's input -- in this case, input, it sounds like these experimental observations, and output, cosmological constance and other things. Or in the case of atoms and molecules, inputting geometries or numbers of particles, and outputting energies. Putting a neural network into that gap, where things are really hard to model, can make a lot of sense, I think.

**Chris Benson:** Yeah. I mentioned that they draw that analogy - they talk about how Facebook uses its algorithms to find eyes, mouth and ears in images, and that they're looking for these tell-tale signs of dark matter and dark energy, that they're basically looking for light bending... So as light is bent by the gravitational influence, I'm assuming that they're using convolutional neural networks, although they don't explicitly say that, to try to notice the subtleties in terms of identifying the relationships... But it's just really interesting to see it being used in this way. I'm always fascinated to see all the different use cases across industry as we see this becoming more and more pervasive over time.

**Daniel Whitenack:** Yeah... Data science for science. I think that's kind of en vogue right now.

**Chris Benson:** It's a delightful redundancy of the word "science", isn't it?

**Daniel Whitenack:** \[laughs\] Yeah, very meta. Speaking of language, listeners always know I'm keeping up with language-related things... So maybe you're out there, you're listening and you're like "Oh, Daniel is gonna share another language-related thing... I'm tired of that."

**Chris Benson:** \[laughs\] Don't worry, we're gonna do an episode where you're gonna share all that with us soon, so you're not getting out of it that easy.

**Daniel Whitenack:** Cool. Well, I think that this has a more general angle on it, not just language... So hopefully our listeners are okay with that. I was really intrigued by this recent thing that Hugging Face released. If you don't remember, the CEO of Hugging Face was on the podcast here, talking about social AI and conversational AI, and that was a great episode; we'll link it in our show notes. But they've really been working on these large-scale language models; you might have heard of BERT, or ELMo, or GPT-2 from OpenAI... So with this most recent release - or one of the recent releases in publications - they took a different angle on it. It's called Distilled BERT. What they said was, okay, the trend in these learning models is that they keep getting larger and larger, and they're trained on more and more data... And in fact, one of the references they give is the latest model from Facebook AI that was trained on 160 gigabytes of test. That might not seem like a lot for those that do images or videos, but if you think about 160 gigabytes of text...

**Chris Benson:** That's a lot of text.

**Daniel Whitenack:** ...raw text data - that's an enormous amount of text data. So they were motivated by the fact of looking at those things and then saying, okay, well if we actually wanna use those types of models in production, how do we do that under sort of the low-latency constraints, where we might wanna make a lot of predictions in a very short period of time, like in a microservice or something like that? Also, how would we run those types of models on a smartphone, where there's obviously constraints around energy efficiency, maybe memory constraints, and also just generally the environmental cost of running large models like this is huge in terms of the computing requirements for them.

So they took this and said "What would it take to create a smaller, faster, cheaper, lighter version of BERT?", which is one of these large-scale language models. They ended up doing that, and this is what they're calling Distilled BERT. It actually has very small penalties in terms of evaluation, but it's smaller, faster, cheaper, lighter in comparison. They have a little graph of how many millions of parameters various models have, and the latest -- so there's an NVIDIA language model that has like 8,300 million parameters, and Distilled BERT has 66 million, so a significant reduction in size...

\[00:24:23.20\] But Distilled BERT still maintains 95% of BERT's performance on language understanding benchmarks like GLUE, which I think for such a reduction in size, with only a very small - in some cases negligible - penalty in performance, it's just really encouraging to see.

**Chris Benson:** So since we're fortunate that you're an expert on this topic, to some degree... I've seen lately a lot of different articles about different types of compression and different types of architecture construction in an effort to make it more performant... Do you have any insight into how you're approaching that, or if not, how would you tend to do that, and what kind of benefits can you get out, and what kind of applications might it enable?

**Daniel Whitenack:** Yeah, definitely. I'm not an expert in all areas of this field; there's a lot of different techniques used here. Of course, there's a lot of people working in this area. Intel, and Google, and others are working to shrink down models to put them on smartphones, or even microcontrollers, and other things... So there's a lot of work going on there.

Some of the methods fall under I think what's called pruning, which is kind of like cutting out parts of your network that might not be having an impact... Hopefully I'm saying that somewhat right, as I'm not an expert on that...

**Chris Benson:** I had a conversation with a professor at Georgia State who was doing a version of that for compression... So yeah, keep going; I wasn't trying to cut you off.

**Daniel Whitenack:** So you could kind of think about that technique as like you train your model, and then afterwards you go through this sort of optimization or compilation, which kind of prunes things out, or makes the model smaller. It's kind of like a post-processing thing, if that makes sense.

**Chris Benson:** Do you think that'll be common as a technique in this area, with you doing NLP all the time? Is this gonna be a standard part of NLP deployment going forward?

**Daniel Whitenack:** Yeah, I think it'll probably -- at least based on my understanding, it'll depend on the type of model, the type of task, and also the type of target architecture, in terms of actually how small do you need to get. I think that some of the goals of the Hugging Face team were to get the model small enough to where they could run it efficiently in production, and maybe on smartphones... Which still are actually pretty computationally powerful, if we at least compare them to microcontrollers.

**Chris Benson:** Sure.

**Daniel Whitenack:** They use this technique called knowledge distillation, and that's why the model is called Distilled BERT...

**Chris Benson:** Which has to be a knock-off Dilbert, right?

**Daniel Whitenack:** \[laughs\] They should have come up with a logo as such. Yeah, so this model -- you might have heard of "teacher-student" training models, and the idea is... Again, listeners, please correct me if I'm wrong, but I think the basic idea is that you have a sort of teacher model who's a larger-scale model, maybe like full BERT, let's say, and then you have a smaller model that is supervised during training by the larger model. So you try to get as close as you can to the larger model's performance and output distribution using this kind of teacher-student supervision. And that's interesting, because you do a full-scale training on a larger model, so that still happens, but maybe it doesn't happen over and over and over; you are kind of able to train these smaller models to still get most of the performance out of the task that you're concerned with.

So I think this was the type of methodology that Hugging Face employed. Hugging Face is a very open source-focused company, and in their blog post even they show some of the PyTorch code and illustrate how to do this in PyTorch. So if you're interested in knowledge distillation and teacher-student models, and want to actually get your hands dirty trying out some of these things, maybe trying your own distillation, then that would be a good place to start, I think, because you could look at some hands-on examples.

**Break:** \[00:28:40.15\]

**Chris Benson:** Okay, so I've found an article that was interesting to me from the title, but as I started reading through it, I realized that I actually know one of the authors. It's an article called "Three People-Centered Design Principles for Deep Learning." It's by Dr. David Bray and R "Ray" Wang. Dr David Bray and I both used to work at the same company together, called Intellinet, many years ago, and we've kind of loosely kept in touch.

**Daniel Whitenack:** Yeah, that's super-cool, and I'm glad that you -- when you said it out loud, it made so much more sense to me... Because when I first read the title, I was thinking like "Three people-centered design." Like, how do you center design around three people? I guess sometimes you're designing things for three people interacting on a thing... So my mind was totally in the wrong direction on that, but thanks for clearing that up.

**Chris Benson:** No problem. Actually, just a minute ago when I started saying it, I started saying it that way, in error, as well, and corrected myself, if you noticed. So yeah, a little bit of an awkward title there, but very interesting article, and a lot of that, from my standpoint, has to do with the fact that I'm a big advocate of keeping people and users at the center of technology... And that's not an AI-specific principle; it's used across many different types of development processes and technologies.

I like seeing this AI-centered piece, and when I go out and do keynotes or things like that around AI, it's one of the points I'm often making... So I was kind of delighted to see it. He kind of starts off talking about in deep learning, and how you think about the outcome first, with the intention of avoiding bias in your process, which is very easy to allow to happen, as we all know; it's probably the most common problem in deep learning that we all face with our data... But how easy it is to get to potentially a bad outcome. So by kind of keeping your people-centered outcome at the center of your process, he says you're more likely to get an outcome and better training than you would otherwise get.

So the three keys that he's talking about here is transparency, and he's talking about the fact that you really need to understand what you're trying to get to, and be very clear with what your intentions are in the training, and make sure that your data is oriented on the outcome that you want, and making sure that the process of doing the model training is obvious in terms of what your inputs are to get your \[unintelligible 00:32:01.16\] so that no mistakes are made.

\[00:32:05.03\] And the second point is explainability. This is obviously a huge area inside AI research, in terms of being able to understand how the inferences a model is making - how those inferences are being reached. Certainly in the industry I'm in, where we have a lot of autonomy, in terms of autonomous vehicles, being able to put people's lives in that, and being able to explain how your model is getting in that is kind of a key to people having confidence in that.

And then the last thing is reversibility, and understanding how you reverse out of a model about what it knows; it's kind of tied to explainability. So you're really looking -- between transparency, explainability and reversibility, you're really looking at something where your outcome is a little bit less black box, is a little bit less mysterious, and you have kind of a map on how you're working your way through the network.

Obviously, there are limitations on what we can do today in each of those areas, because obviously there's some fairly significant research going on, but it's a good focus to try to know that that's the direction you're going, so I'm looking forward to seeing where it goes.

Have you come across people-centered design principles in the past, Daniel?

**Daniel Whitenack:** Yeah, I definitely have. I wouldn't say I haven't had any formal introduction to the topic, but it's definitely come up in a lot of teams that I've worked on, and different organizations... And I think that it's an important piece. I remember being in a meeting just the other day with one of my supervisors, where the topic just came about in general what is the purpose of a commercial entity, and the idea that "Oh, it's to make profit" came up (at least that's part of it). And he was saying "Well, some people might think about it that way, but I think that whether you're a social good company or organization, non-profit, or a commercial entity, ultimately you're wanting to satisfy customers, right? And that should be at the very forefront of your design, of your product, of how you go about your business - that you're wanting to satisfy your customer or your user.

In this article - I was kind of wrestling to try to figure out this idea of reversibility... Because initially, when I read that, I immediately thought of reproducibility, which is something we've talked a lot about on the podcast. We had an episode where we talked to one of the founders of Pachyderm about data versioning, and such... But reversibility seems very different, so I was kind of interested to read a little bit more about that.

**Chris Benson:** Yeah, that caught my attention as well, and I also went to reproducibility initially in my head, and went "Nope, that's not what he's saying." So it was interesting to see... I'm kind of curious to see -- I think of the three concepts that he talks about, that's the one that I probably need to ramp up on a little bit more, and understand how it would be utilized here. But at the end of the day I think the intention is good.

It's funny, I have a personal tie a little bit to this interest, and that is - you recently interviewed me on one of our episodes about high-performance computing as it relates to AI, and I can say that in the effort that we did at Lockheed Martin (and we're still doing), that aspect of really centering on the person that is building the model, and on those outcomes that you're trying to achieve, it was really one of the core design principles that we built into our effort... To the point of it was every bit as important to do that for the ability of getting to the outcomes that we needed and need, as quickly as possible, with very high fidelity. Anyway, when I saw this article, I was pretty interested. Maybe at some point Dr. David Bray might come onto the podcast and tell us a little bit more about it. I think that would be an interesting episode.

**Daniel Whitenack:** \[00:35:57.09\] Yeah, I definitely would be interested in hearing more about some of the details that he goes into. He also talks about creating data advocates, which I thought was an interesting idea... And also, a huge piece of this which I think is important and was mentioned by one of our guests, Lindsey Zuloaga from HireVue, is really putting a lot of effort into mindful monitoring systems to test datasets for biases.

If I remember right, I think Lindsey was talking -- and this probably intersects there, where she was talking about "Well, it's good if you put in some effort into thinking about your users, and thinking about bias when you're training AI models", but a lot of things drift over time, and the performance of things drifts over time, your user base might change in different ways... So really putting in a monitoring system that is actually monitoring your online models to really judge whether you're actually dealing with any sort of bias in the input, or if you're model is all of a sudden generating predictions that are biased between two different groups, or something like that.

I think that's a really important piece of the puzzle, and I'd love to hear more from the author here about the types of monitoring systems that he has in mind. He does even have a chart for the mindful monitoring system for AI, which I think is kind of interesting; I'd like to hear more about that.

**Chris Benson:** Yeah, I would, too. I'm curious, just from your own personal experience, when you're thinking about bias in the data that you're working with, and however you may choose to monitor or try to address it ahead of time, how do you approach that? It's a little bit of a tangent, but if there was one thing that every data scientist that works in AI is going to contend with, it's that. I'd love to know how you approach bias and what are some of the processes or exercises you do to try to eliminate bias that might produce a bad outcome for you?

**Daniel Whitenack:** Right now I'm working on a lot of language and voice tech, and I think when people think of bias, they always think of some sort of discrimination against certain groups maybe, based on race, or gender, or whatever it is... So I don't think it always has to be that side of things, but of course, we should be aware of that side of things. I mean, it could just be as simple as "I'm trying to translate this piece of text into Hindi, but in my training data all I had was news data. I only had politics data, I didn't have any sports data." So it could just be a simple bias in that dataset in terms of what it's been exposed to. But also, there's certainly cases where I think marrying that sort of mindset with a mindset geared towards your users can be really powerful. Especially with voice, you want your voice system to work equally well for men and women.

You want it to work equally well for those that are highly-educated and not highly-educated maybe, or those with certain accents, and not certain accents, or certain regions, certain dialects or not... So the only way that you're going to be able to do well in that scenario is if you, for one, try to have diversity in your training data when you initially put that system together, but also in terms of monitoring.

One thing is you may never be able to anticipate all the types of people that are gonna interact with your system... So anticipating that in advance and putting a monitoring system in place where you can actually tell "Oh, in these scenarios our system isn't doing well based on our feedback we're getting, or based on some metric that we're measuring...", and if you look further into that, you could identify certain groups that are using your system that you just didn't expect before, so now you should circle back and integrate that into your training data. So I think it's a cycle and you have to think about it both in production, in training, and kind of this feedback in between the two.

**Chris Benson:** \[00:40:14.13\] Gotcha, okay. Thanks for going there.

**Daniel Whitenack:** Yeah, definitely. Well, I appreciate you coming up with some good articles this week, Chris. Before we head out, like in all of our Fully Connected episodes, we like to end with just a couple -- at least one learning resource that you can use as you're trying to learn more about the most recent trends in AI, and level up your skills.

The one that we wanted to highlight this week, which I've just really enjoyed over the past year, is called -- and we may have even highlighted this before (I'm not sure), but it's worth highlighting again... It's called "Papers with Code." If you just go to paperswithcode.com, it's a site that is essentially what it is named - it's papers with code. It's AI research papers, with the links to the code of the implementation on GitHub, and in some cases a sort of ranking on various tasks.

On the frontpage, if you go to this site, it'll show Trending Research. At the very top of the trending research right now is PyTorch Transformers, which is not a huge surprise there, since Hugging Face is killing it... But you can click on PyTorch Transformers, on that paper, and it's gonna take you right to the GitHub repo of the implementation. But you could also click on the paper and it's gonna take you to the paper for that... And you can click on -- some of the papers are tagged with little things like "Oh, this model/paper is state-of-the-art in common sense reasoning, with a certain dataset." So they've also got these pages of "What are the most state-of-the-art papers with code for X task?", like reading comprehension, or question answering, or sentiment analysis, or these different things... So just an overall really well put together site.

For example, the other day I wanted to know what are people doing in terms of sign language recognition, and who's doing the best stuff, and I was able to get just a few leads on this site that led me in the right direction, so... I find it really useful.

**Chris Benson:** Yeah, I do remember that we have highlighted it before, but I also love it, just like you do. It is definitely worth highlighting again. And actually, as I'm looking at this right now, the third one is one that I'm gonna dive into as soon as we're done recording this podcast, which is "DeepPrivacy: A Generative Adversarial Network for Face Anonymization." Because we had an episode recently on deepfakes... So I'm looking forward to diving into that one and see what they have.

Thank you for highlighting this site again. It's a fantastic one, and after a little while we might even need to do it one more time.

**Daniel Whitenack:** Yeah, for sure. I think it's a good reminder. A lot of things have been added over time on the site that have made it really useful. Well, I appreciate you taking time before your vacation to talk through a little bit of AI stuff, Chris.

**Chris Benson:** I wouldn't miss it. This is fun stuff to me. As far as I'm concerned, vacation has already started. This is part of it. This is great. I always love our conversations; we always love to get the feedback that our listeners give. We talk to people on Slack, because we have our Slack community, we talk to people on LinkedIn, we talk on Twitter... And a lot of what this show is about is coming from engaged listeners who ask a question, or say "Hey, I would really love to hear more about this", so I really hope that everyone keeps engaging us on this. Let us know what you're interested in. It's part of what makes this fun.

**Daniel Whitenack:** Yeah, definitely do. Have a great vacation, Chris. We'll talk to you soon.

**Chris Benson:** Thanks a lot! Take care, Daniel.
