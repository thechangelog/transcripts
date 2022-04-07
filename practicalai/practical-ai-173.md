**Daniel Whitenack:** Welcome to another Fully Connected episode of The Practical AI podcast. In these episodes, Chris and I keep you fully connected with everything that's happening in the AI community. We'll take some time to discuss the latest AI news and we'll dig into some learning resources to help you level up your machine learning game. I'm Daniel Whitenack, I'm a data scientist with SIL International, and I'm joined, as always, by my co-host, Chris Benson, who is a tech strategist at Lockheed Martin. How are you doing, Chris?

**Chris Benson:** Doing great, Daniel. Just been going through the news. There's lots of interesting stuff happening right now.

**Daniel Whitenack:** You know, we have to keep doing these FC, Fully Connected episodes, because there is just a lot going on. There's a few big things that we'll talk about today, but yeah, it just seems like a lot going on. Lots of cool stuff to talk about. The other big thing in my life is allergy season this year. And so I've been in Zoom calls, muting myself and trying to quickly turn off my video before I sneeze, so I don't look like a fool. \[laughter\]

**Chris Benson:** It's okay. It's springtime, man. All things are coming out and blooming and birthing, and all sorts of stuff.

**Daniel Whitenack:** Yeah, including new, large language models.

**Chris Benson:** Indeed.

**Daniel Whitenack:** So Chris, if you go to the Hugging Face website, just go to the main Hugging Face page, and then what you'll see is a bunch of things, but up in the top right-hand corner you'll see a little line, and it's sort of going down and to the right, and then there's a thing that says "Training loss" and a thing that says "Time to completion."

**Chris Benson:** Okay.

**Daniel Whitenack:** And this is pretty cool, because this is the actual training logs of the BigScience large language model that they're training, the 176 billion parameter model, which the BigScience Research Workshop is training. So I don't know if you remember, I think we talked about this a while back, but there is this group of researchers called the BigScience Workshop, or BigScience--

**Chris Benson:** I remember.

**Daniel Whitenack:** \[04:04\] ...Research Workshop. It's hundreds of researchers from around the world, and it's kind of the same philosophy like CERN in Switzerland, the big accelerator. It's a collaboration between a whole bunch of different researchers, a whole bunch of different institutions and countries. And the reason that happens is because it's become increasingly hard to do high-energy physics research, because of the size of the experiments. And so BigScience was like, "Well, it's becoming increasingly hard to train these large language models", or maybe what some people would call foundation models; we talked about that last time.

**Chris Benson:** We did.

**Daniel Whitenack:** So it's becoming increasingly hard for any single researcher, or even a small team of researchers to train these large language models. You might think of things previously like GPT-3, or things like that. So this BigScience workshop said, "Hey, let's get together", this international collaboration, very collaborative and transparent thing, and do the next training of the kind of next big multilingual language model. And so what you're seeing on that homepage of Hugging Face, at least now in March of 2022, is the actual live training of that, which is a pretty cool thing to see.

**Chris Benson:** It is, indeed. And as we are recording here, and I'm looking at their page, they are already a dozen days into the current model training.

**Daniel Whitenack:** Right. But it's only getting started, because they estimate time to completion four months. So - now note, if there's people interested in the specifics of this, this model is training, so it will be training for the next four months, and it's training on 416 A100 GPUs. So a single model training on over 400 A100 GPUs for greater than four months.

**Chris Benson:** That's some serious model training right there.

**Daniel Whitenack:** If there was some serious model training, that is definitely it.

**Chris Benson:** Right. \[laughs\]

**Daniel Whitenack:** So we'll link to this in our show notes, but there is a bunch of -- one of the things I really appreciate about this whole process is just the transparency and collaborative nature of this project. So you can go and look at the notes about what the model is. It has 176 billion parameters. And then you can look at the GPT architecture, and then it's trained in 46 languages, on 341 or 342-ish billion tokens of text--

**Chris Benson:** I see that.

**Daniel Whitenack:** ...which for those maybe that aren't familiar with the terminology, tokens here - well, depending on how you set up the tokenization, it might be a word, or a sub-word of text. So there's over 340 billion of those words, with a vocabulary size of 250-plus thousand.

**Chris Benson:** The only thing that doesn't seem shocking on the big end of this is actually it's only one and a half terabytes of text data.

**Daniel Whitenack:** Yeah. I mean, text data is small in general.

**Chris Benson:** Yeah, I know.

**Daniel Whitenack:** That's the one advantage of working with text data.

**Chris Benson:** I know. I'm just saying, we're so busy talking about these massive numbers that -- terabytes are big, but I guess... It says something about the model when it makes me think of 1.5 terabytes as a small thing.

**Daniel Whitenack:** Yeah, yeah. I mean, yeah, if you're doing speech or images or video, or even dare I say 3D data... I don't know if you ever watched Silicon Valley, but they try to compress like a 3D video file; that's like the thing that trips up their compression algorithm. That's why I always think of that.

**Chris Benson:** A little throwback there...

**Daniel Whitenack:** \[08:02\] Yeah. The other thing - this is incredibly impressive, just the whole process of putting the data set together. You can read more about that in the notes. But it still only includes 46 languages, of 7,000-plus spoken on Earth. So that is a drop in the bucket as far as languages. But if you consider this scale that they're approaching, the size of the data and the number of languages, it's still a hugely amazing progress in terms of multilingual models, because GPT-3 or something like that - we're talking about just supporting English, or other versions that might be trained in like a single large language, like Mandarin, or something like that. So 46 languages - pretty cool to see them work on a model at this scale with more languages.

**Chris Benson:** I have sort of an aside, off the main topic, but you made me wonder...

**Daniel Whitenack:** I will permit it.

**Chris Benson:** Ha! I appreciate that. As someone looking at that long tail of 7,000 languages, do you think that these kind of mega models that we keep looking at, that they ever will eventually include, or do you think they'll always be outside and there'll be other models that are catching the long tail? How do you think that will be parsed?

**Daniel Whitenack:** Yeah, I guess in a very unsatisfying way; it's probably like a both/and. I mean, I certainly hope that as data sets become more available and we work with local language communities to have representation of their language within NLP datasets and other things, certainly that will get better in terms of what's included in this multilingual model.

And I guess the other thing to keep in mind is if you have kind of representation of languages across language families, which this does have definitely more representation across language families, then it's easier to fine tune or adapt that sort of model to something maybe in the same language family, or a related language. So it's still helpful for even languages maybe that aren't even included, potentially. But yeah, I think that there will also be a continued need for language-specific models or maybe language family-specific models. I think that that will always be a need that will be there.

In fact, I just saw in my recent Twitter feed, there's a new paper at ACL this year from Graham Neubig and Company, and they're talking about -- the title of the paper is Expanding Pre-trained Models to Thousands More Languages Via a Lexicon-based Adaption. So I think that the work that their lab is doing is pretty extraordinary in this field, where they are doing a lot of creative things that are maybe hybridized, like they're leveraging lexicons or dictionaries to adapt models or to align sort of cross-lingual embeddings, or other things like that... And those sort of creative solutions are still going to be needed. So yeah, it'll be both/and. There'll be big models that will include more languages, and there'll be more sort of like trickery in terms of adapting those models to local language scenarios. At least that's my prediction of the future, which is sure to be wrong.

**Chris Benson:** So not one model to rule them all; maybe a group of models that are --

**Daniel Whitenack:** Yeah, probably that's true, and it'll be a hybridized sort of world I think we'll live in. Now, I'm kind of excited, Chris, and I'm proud of the organization that I work for, SIL International, because they had different working groups that you could join as part of this process, and we were able to contribute some of the multilingual data that's actually in the training dataset that's being trained right now.

**Chris Benson:** Really nice.

**Daniel Whitenack:** \[12:09\] So it's just really cool to kind of come full circle, where at the time in that working group, it seemed just like a very -- well, it is kind of a small piece of a much larger puzzle, but all of those pieces are necessary to make this happen, including those that worked on the architecture of the model, and the scaling, and the compute, and the data governance, and data storage... And all of those things, there are a lot of people that made it happen.

**Chris Benson:** You're in danger of not just analyzing the news here, but becoming the news yourself, a little bit of it.

**Daniel Whitenack:** Well, yeah. I don't know about that. Certainly, we're excited to be a part of this, and - yeah, I'm just kind of feeling giddy and excited to watch it go down. You can, actually -- if you're a Twitter person, they have a Twitter bot where you can get updated with the progress of the training, and other things. They have that setup. So follow it and see what happens.

**Chris Benson:** So at the end of the workday, is your wife -- who is a wonderful person...

**Daniel Whitenack:** I agree.

**Chris Benson:** I know. Is she having to patiently tell you to put down your phone and stop looking at the Twitter feeds and actually have dinner with her, and things?

**Daniel Whitenack:** Yeah. You know, there've been a lot of fun things to be a part of recently, including this, that have come across our team... And yeah, it's a fun time to be an AI person.

**Chris Benson:** It is.

**Daniel Whitenack:** But also, you still need to have dinner with your wife.

**Chris Benson:** You still need to. You know what? Yeah, that is the comment right there of the whole show. You still need to have dinner with your wife; or your husband.

**Daniel Whitenack:** Yeah. You still need to maintain positive vibes like the Hugging Face emoji would indicate.

**Chris Benson:** Gotcha.

**Daniel Whitenack:** Okay, Chris. Well, we just talked about this huge training that's going on on over 400 A100 GPUs.

**Chris Benson:** You know that's exactly what I was thinking too, don't you?

**Daniel Whitenack:** Yeah, yeah. So the A there stands for Ampere, which is a certain generation of the NVIDIA platform of GPUs, and... Big news right now - I mean, we're in the midst of GTC... Wait, is that the right --

**Chris Benson:** Yeah.

**Daniel Whitenack:** ...letters? Yeah, GTC season, which is when NVIDIA announces things, and there are some things.

**Chris Benson:** There are indeed some things. So they have just announced their new Hopper architecture, which is based on the H100. So we've jumped from A to H for Hopper; the H100 Tensor Core GPU. And the thing that was jumping out while you were saying that is that they're saying that for large language models, it's 30 times faster for training than the previous architecture, the A100. So yes, that's, you know...

**Daniel Whitenack:** Yeah, the BigScience training just started a little too soon.

**Chris Benson:** It just started a little too soon. They needed to wait. They just needed stand outside NVIDIA headquarters with their hands open, asking for just a mere few dozen H100s, you know, instead of the hundreds that they otherwise have.

**Daniel Whitenack:** You know, every year the architectures come out, and it's always like 10X, or 30X better, or whatever it is.

**Chris Benson:** I know.

**Daniel Whitenack:** Right? So by the time they started this year with the H100s, we'd be having the same conversation.

**Chris Benson:** I have lots of friends at NVIDIA, and I'm just going to say -- some of them do actually listen to our podcast, and I'm just going to say--

**Daniel Whitenack:** Hey. Hello out there. Great work. \[laughs\]

**Chris Benson:** Yeah, great work, but there's a little bit of fatigue; like you're just -- last year was amazing. You're obliterating it. 30 times. Come on, man.

**Daniel Whitenack:** I already bought the A100s, like--

**Chris Benson:** I know.

**Daniel Whitenack:** ...do I get a refund now? \[laughter\]

**Chris Benson:** I need some relief. We need the A100 upgrade to the H architecture.

**Daniel Whitenack:** Yeah.

**Chris Benson:** \[16:01\] Just to keep sane at this point.

**Daniel Whitenack:** I will say, the A100s, as far as usage -- and our team uses those. We have the great privilege--

**Chris Benson:** Yup, we do, too.

**Daniel Whitenack:** ...of having some to use. And I will say that they have been really wonderful in terms of our workflow. And one of the things that I was really -- actually, if you want to know, I went to the H100 page... So I also listened to some of the GTC keynote announcement stuff, but I went to the H100 page and the very first thing I looked for was the letters M-I-GM, MIG; because that, for those that maybe aren't familiar with the most recent architectures from NVIDIA, they have this what's called MIG technology, which essentially lets you take your big GPU and then split it into smaller virtual GPUs, which can be used in independent training runs, or whatever you're doing.

And I have to say, we have actually loved that, because we can have the big card, right? ...but most of our jobs don't require like every bit of the memory or every GPU we have. And so we have a lot of small jobs that we need to run, maybe like fine-tuning language models. That's a typical thing we do, right? And that doesn't take a long time. Our data is smaller, because we're doing fine-tuning or transfer learning... And so that's perfectly fine to run on like half of the A100, or maybe less of the A100, a third of the A100. And so I was really hoping, when I went to the page -- basically, I just wanted to see that that was still an option, and they weren't going away from that, which it is. It seems like that's caught on. I don't know if you've used that at all.

**Chris Benson:** Oh, we have; without going into specifics... And that was definitely -- if I recall, that was introduced with the Ampere architecture.

**Daniel Whitenack:** Yeah. It was not available before, I don't think.

**Chris Benson:** Yeah. It was inter reduced last year, and it's been one of those amazing utility things in terms of making what you buy a whole lot more useful for actual real life jobs, for most of us. So I agree. Because at the end of the day, not everybody is producing the largest language model in the world. It doesn't happen for most of us.

**Daniel Whitenack:** Yeah, yeah.

**Chris Benson:** So yeah, it's been very useful in that way.

**Daniel Whitenack:** Yeah, speak for yourself.

**Chris Benson:** Oh, boy.

**Daniel Whitenack:** I didn't hit the Train button, and probably most people in the workshop don't even know I exist, but my data's there. I've got that.

**Chris Benson:** Your data is in the -- yeah, there you go. It's training right now, man.

**Daniel Whitenack:** So the other kind of interesting thing/flavor they added onto this was -- with the MIG technology, I think they've seen that catch on, and they want to make use of it more in kind of the cloud enterprise scenario, where you might want more isolation between the virtual GPUs.

**Chris Benson:** Yup.

**Daniel Whitenack:** And so they're making this to where you can actual have it secure end-to-end and multi-tenant usage of the virtual GPUs. Now, for us, really, it's just about distributing our jobs. We don't have a lot of security concerns between our different users accessing the different queues we're running on. But I think that makes a lot of sense in terms of flexibility. And if you were lucky enough to have a whole bunch of these, utilizing them well and managing isolation of users, and that sort of thing.

**Chris Benson:** I mean, that's a great point, about the fact that all of the cloud providers are buying a whole lot of these, and they're trying to use them effectively within their architecture. It's certainly a key use case for that technology. For our friends in NVIDIA, I wasn't actually picking at you. I was kind of envious at the fact that you always kind of pull out the superpowers and do these amazing jumps.

**Daniel Whitenack:** Yeah. So if you still want to send us -- yeah, if you happen to have a couple spare H100 around, you know, we're here.

**Chris Benson:** \[20:10\] I thought that was implied in what I was saying. I thought that was just there. And by the way, Daniel and I have two different addresses, and we could provide both.

**Daniel Whitenack:** Yes, yes. We have not been compensated at all by NVIDIA for this conversation, just to be clear.

**Chris Benson:** Not at all. Nope. Sadly.

**Daniel Whitenack:** Yeah. No, I think that that will be true going forward, like you mentioned. The only thing I'm wondering is in the cloud, when I'm selecting my GPU now, how will they be labeled? It's like why I use fractions, like half of an H100; or they're just going to come up with a new thing? I don't know.

**Chris Benson:** I'm sure that the cloud providers will be very happy to charge you for a full H100 though, regardless of whether you use a slice compliments of the multi-instance technology that they've now embedded here.

**Daniel Whitenack:** It is interesting, as you mentioned, Chris, this focus on large language models with the new architecture. So in my understanding, they actually have a new set of tensor cores that are part of the processor, that are specifically geared towards transformer architecture models. I mean, it makes sense that it would be a lot faster for transformers if you built something specific for transformers, right? That sort of makes sense.

**Chris Benson:** Yup. They call it an engine; the new transformer engine.

**Daniel Whitenack:** Vroom-vroom. I have mixed feelings about this, I think. So first of all, it's great, because I use a lot of transformer models. I'm not complaining. But then I do wonder what the implications are in terms of like the research world in general. If the GPUs we're using, have their own sort of bias towards a certain architecture type, does it penalize people that are exploring new, different, crazy architecture types that might be the next big thing that comes along? It seems like, "Well, let's just keep exploring transformer, and not do as much of that", which might be sort of -- so there's less flexibility, and there's a reason for it, but I see... I kind of have that concern a little bit.

**Chris Benson:** My answer to you is going to depress you.

**Daniel Whitenack:** Oh, okay.

**Chris Benson:** Yeah, my answer is of course it does. I mean, there's clearly -- but that's also the marketplace. The number of true cutting edge researchers compared to the 99.999% of people that are basically--

**Daniel Whitenack:** That are just cranking inferences out of a --

**Chris Benson:** That's right, cranking inferences out all over the place, but not truly doing cutting-edge research. Yes, it's making life easier for the 99.999%. They're not helping you, if you happen to be in the pure research... Which is funny, because to your point, that's what I want to see more of. I would love to see - just while I'm doing my wish list, since we're talking about it, we wandered into this, landed into this... I would love to see some new architectures out there in the deep learning space. It's been a little while since we've had a major, major shift, and I'm waiting for that. So it's on my Christmas list, right there.

**Daniel Whitenack:** Yeah. And if I'm just looking -- this is a lot of interpretation, and sorry for whoever designed the page if this wasn't how it was supposed to be read... But I see on the H100 page, in order of priority, kind of at the top is the transformer engine thing, and then right after that is real-time deep learning inference. So the speed-ups in inference, which -- like, you're talking about, and I think it has been mentioned by multiple guests on the show, the bulk of operations in kind of the enterprise AI world are inferences, right? Because you train a model, and then you use it billions and billions of times. And so that I think is really cool, that you can have more throughput on the inference side, and be more efficient, maybe with less cards. So yeah, I can see why that side of things is prioritized, for sure.

**Chris Benson:** \[24:21\] Sure. Yeah. It's hitting most of their customers.

**Daniel Whitenack:** Now, they also bring in the Omniverse to this. So I don't know if you saw that reference, but it's like -- so obviously, there's the Metaverse, which I assume a lot of people know what that is out there, but it's like the virtual reality world that Facebook or Meta is designing and running. I don't know, have you been in the Metaverse, Chris?

**Chris Benson:** I have not been in the Metaverse, but I am quite familiar with Omniverse.

**Daniel Whitenack:** Yeah. So I've been in the Metaverse, and I think it's cool that there's this effort to develop these 3D simulation, 3D worlds, VR, all of that's cool. And maybe since you're more familiar with the Omniverse, you can talk about that. But I am not a computer graphics person, but obviously, these are graphic goal processing units. So to support those 3D worlds, I think that is one of the things they're featuring as something that this could enable.

**Chris Benson:** So it's funny, we're taking a little bit of a tangent here, but AI-driven simulation is a huge thing, and maybe not for the reasons that everyone is most often associating it. It's less about leisure and recreation and such as that, and more about having digital twins for manufacturing design, and things like that, so that you're able to try and experiment on things that would otherwise be too costly in the real world to experiment on. And so anyway, yeah, that's the context, is looking at Omniverse in the context of using GPUs, so that we can try some otherwise really hard things to do.

**Daniel Whitenack:** Yeah, looking forward to seeing more of that cool 3D stuff, especially where it intersects AI and simulation. One more thing just related to all of this NVIDIA stuff that's happening - I don't know if you also saw as part of what was talked about this supercomputer that NVIDIA is working to build, Earth-2 Supercomputer. Now, I don't think there was an Earth-1 Supercomputer. I think it's Earth-2 Supercomputer because it's --

**Chris Benson:** We're Earth-1.

**Daniel Whitenack:** Literally, it's running a clone of Earth. There is a virtual Earth-2 that's in the computer. That's how I'm understanding that.

**Chris Benson:** I'm actually not super-familiar with that, but I'm assuming so. I mean, it seems that that would be the natural thing to be working towards. So maybe this is it. That was the one thing I had not dived into before the show.

**Daniel Whitenack:** Yeah. In my understanding, they've built this supercomputer. There's sort of a clone of Earth virtual world, and they're doing weather and climate simulations that are not -- random side topic, my first job out of college was at NCAR in Boulder, which is the National Center for Atmospheric Research, where they do have big supercomputers to do climate modeling. That's what I did that summer, is benchmarking some of that software. But those climate models kind of operate around fluid dynamics, and other types of physics simulations, and that sort of thing; physics and chemistry simulations.

This, in my understanding, these weather predictions that they're doing in this Earth-2 Supercomputer are driven, at least partially, by AI predictions of weather conditions and climate, which is kind of an interesting -- it might be a subtle point, but it is very different than how climate models have operated for quite some time.

**Chris Benson:** \[28:15\] So I'm actually somewhat familiar with that, at least slightly. It still is Computational Fluid Dynamics. CFD is the lingo that people use in the industry. And we are seeing, and have been for the last few years, and are continuing to see a very large shift from CPU-driven, CFD simulations, into AI-driven, with GPUs. And really the hold-up there is usually the software being used is written for older CPU things. And so in general, industry is kind of trying to catch up with the technology at this point in terms of updating their software to do that. But yeah, I think that is the future of Computational Fluid Dynamics, is this kind of simulation that's GPU-driven.

**Daniel Whitenack:** Yeah, and they specifically reference in the article, physics-informed neural networks, which - I think that would be a great show in and of itself.

**Chris Benson:** Okay.

**Daniel Whitenack:** So if you are out there and you're working on such things, reach out to us and we'd love to talk about it on the show.

**Chris Benson:** That would be very interesting.

**Daniel Whitenack:** Yeah. I would be super-interested too to hear more about that. Yeah, any other things that stood out to you with this NVIDIA stuff, Chris?

**Chris Benson:** No, but I actually have - believe it or not, I actually have a CFD, a Computational Fluid Dynamics project that I would like to try, and it's relating to a real-world thing.

**Daniel Whitenack:** Oh, cool.

**Chris Benson:** So the two-second back-story--

**Daniel Whitenack:** Give me the pitch. The Y Combinator pitch.

**Chris Benson:** As long-time listeners may know, I'm a private pilot, and I fly in the Great Smoky Mountains on many weekends. And that's one of the few places where you have mountains that are high enough to create mountain waves, which are giant waves of atmosphere that hit the mountains, and they go up and then they crash down.

**Daniel Whitenack:** Interesting.

**Chris Benson:** I actually had a very dangerous moment where I got hit by an invisible mountain wave, flipped my plane upside down, and I had to recover over the peaks.

**Daniel Whitenack:** Oh, wow. I didn't even hear about this. You about died.

**Chris Benson:** It was very close or ripping the wings off the plane kind of thing. So this happened earlier this year, early in 2022, but it made me keenly interested in the fluid dynamics of mountain waves. And so if anybody is looking for a CFD toy project and you want to look at that in the Smoky Mountains, you may save my life later. So that's the pitch. If you like the podcast and you want to see it perpetuated, then you've got to save my life so that I don't get driven into the ground by a mountain wave. How's that? Is that exciting enough for you, Daniel?

**Daniel Whitenack:** If you could inference fast, and you did get the light bulb blinking, the warning that you were about to be overtaken by a mountain wave, would you have time to respond?

**Chris Benson:** I don't know. I guess it depends on how fast the GPU can do this inference. I'm going to have to really dig into the Hopper architecture to see if it's going to save my life or not.

**Daniel Whitenack:** Yeah. Maybe you can create a digital twin of yourself in the plane, in the Omniverse, and run the simulation.

**Chris Benson:** Oh, I'm frightened though that if I do that and it's really, really good, I might just not need to fly anymore. I don't know that that's--

**Daniel Whitenack:** Yeah.

**Chris Benson:** That's a non-starter right there. Do you see how I tied all those things together?

**Daniel Whitenack:** I saw that.

**Chris Benson:** You see how I tied all those things together that don't normally go together. There we go. Having fun today.

**Daniel Whitenack:** Yeah, exactly. Speaking of tying all things together, we actually not that long ago, in the (I think) fall of last year, we talked about a few things related to the AI Index Report, which comes out of Stanford, and measures trends in artificial intelligence... Actually, the next version of that is out. So because we talked about it recently, we won't spend a whole episode on it, but maybe it's worth bringing up here as we close out our Fully Connected episode, just to kind of skim the top takeaways, and we'll definitely include it in our show notes so people can look at it.

\[32:07\] I noticed that one of the top takeaways on theme is language models are more capable than ever, but are also more biased. That's one of their key takeaways. So BigScience language models are going to be more capable, but maybe it's worth exploring the bias. I think that Research Workshop has done an amazing job at exploring the data and the bias. They even created their own tool to explore such things. But yeah, it's still a problem, right?

**Chris Benson:** It's interesting. It is a problem, and I think that exploring the bias actually ties into another thing that we're seeing there, just to pull two together, and that's the rise of AI ethics everywhere. And we're also seeing they have a note on day-to-day data. And maybe sometimes we need to go back and address some of that, because bigger may be better in many cases, but not if it's bigger bias.

**Daniel Whitenack:** Yeah. Also notice a shout-out to our friends over at MLCommons, David, who has been on the show a couple of times... They mentioned that MLPerf task and benchmark related to AI performance in terms of training time and compute. Their big takeaway is AI becomes more affordable and higher-performing, so I think "and" being the keyword there. They give this statistic that since 2018, the cost to train an image classification system has decreased by around 63%, while training times have improved by 94%. So pretty cool, this combination of more affordable and higher-performing, which is -- you know, they talk about driving widespread commercial adoption, and blah-blah.

**Chris Benson:** I mean, in all of this, just the field is exploding... You know, in a positive way, not a negative explosion, in terms of that. There's so much money flowing into it. They are noting, kind of driving that process, that private investment is soaring, but that investment is also becoming more and more concentrated as well. So you're seeing winners and losers also coming into play there. And I frankly think a lot of these topics are interrelated. I think that comes back to things like the ethics of it, and where you're gonna place investment, and what you're getting out of it.

I really find this an interesting report. I know that they always are, but the thing that I noticed this time as we've looked through it is we're seeing a lot of kind of like one topic directly relates to another one that they have there, rather than being all à la carte topics.

We definitely have some challenges in this space. I mean, it's overall really good news; you know, cheaper training, cheaper inference, more productive, it's going everywhere... But we're also seeing bias, we're seeing concentration of power, we're seeing the challenge of how to tackle AI... And there's a whole industry around AI ethics now, which I'm supportive of, but also a little bit -- I don't think they always capture it very well in terms of getting to the meat... It's a business still. So - nothing against business, I'm just saying that we have some challenging things in front of us to solve.

**Daniel Whitenack:** Yeah, definitely challenging things... But apparently, one of the challenges that's disappearing is access to robotic arms. I don't know if I was surprised, but it was like, "Oh, that made a top takeaway. Robotic arms becoming cheaper. News flash." \[laughs\]

**Chris Benson:** It was literally the next thing I was going to bring up. As they are becoming cheaper, we're going to be seeing more and more -- for a while, our exposure to AI has been through kind of existing mechanisms, our laptops, things that have access to cloud providers, and stuff like that. But if the robotics side is coming down in price so much, then I think more of us will start interacting with AI in new and novel ways, that were not previously widely distributed. That will be another interesting change in how we live our lives. So it's really going to be pervasive.

**Daniel Whitenack:** \[36:24\] So where do you think I'm going to start seeing robot arms? Where am I going to start interacting with them, do you think?

**Chris Benson:** Well, I just know that I am positive -- they don't have arms on them, but we have these little robotic vacuum cleaners running around...

**Daniel Whitenack:** Right. Sure.

**Chris Benson:** And we're starting to move into a time where they're going to have inferences, and...

**Daniel Whitenack:** They're going to be able to like reach over and pick up my Coke can and toss it into the trash.

**Chris Benson:** Yeah. I mean, I'm really thinking - was it Fred Flintstone that had the robot made that moved around? Am I thinking the right cartoon?

**Daniel Whitenack:** I don't know.

**Chris Benson:** There was one, it had the old fashion 1950s-ish looking robot, and she would be running -- Rosie the Robot, or something like that. And I'm just saying, it's taken another century almost, but maybe we're getting awfully close to... We're moving from the little disc robot vacuum cleaners scooting around our living rooms, and maybe Rosie the Robot is right there. And I apologize for the implied sexism. I'm calling up a character I saw in the past in a more sexist TV world. It's not my own thing.

**Daniel Whitenack:** Yeah.

**Chris Benson:** A little moment of awkwardness right there as I realized that.

**Daniel Whitenack:** Right, as you realized that your language is biased, which is going to be recorded and put in a language model, which will then be biased.

**Chris Benson:** Oh, God...! Yeah. I was merely trying to recall the cartoon from my childhood, and look what happened.

**Daniel Whitenack:** Well, I mean, I'm sure that that cartoon is transcribed somewhere, and probably sucked into common crawl from some crawling bot that is producing that in our datasets.

**Chris Benson:** It probably is. We're going to have to just delete Rosie the Robot from the collective storage of all data out there. It's gone.

**Daniel Whitenack:** Yeah. Well, I would recommend -- we're not going to go over everything in this report, for sure. We will link it in our show notes, the AI Index Report. It's always a good thing to look at. It includes a lot more information than we talked about, so take a look at it. Keep up with the latest trends. That's what we try to do here, in a practical way.

And speaking of practical things, we've highlighted quite a bit of NVIDIA things this episode, so just to remind people in terms of a learning resource, you can watch a lot of the GTC content online. Obviously, it is produced by NVIDIA, so you're going to see the NVIDIA perspective, but NVIDIA is also dominant in the market, so you're going to hear a lot of really great things, and lots of really good things to learn there. But they also have what's called the NVIDIA Deep Learning Institute, which can help you with online courses in terms of using the latest GPUs, and acceleration on GPUs, and a whole bunch of things. So in terms of learning resources, I know I've mentioned that one before, but because it's GTC week, it seems relevant to mention it again.

**Chris Benson:** That's a good callout. And those Deep Learning Institute courses are quite good. I've taken several of them myself and I always enjoyed them. Once again, I'm not trying to promote their stuff, but I've just said I have found it useful.

**Daniel Whitenack:** Yeah.

**Chris Benson:** And they hit a wider range of topics of interest.

**Daniel Whitenack:** It's okay to mention good things.

**Chris Benson:** There you go.

**Daniel Whitenack:** Yeah. So I appreciated this conversation, Chris. It's been fun. We'll link to everything in our show notes. Please find us online. You can engage with us if you go to changelog.com/community. You can find us in Slack, or LinkedIn or Twitter. Engage with us. Let us know your thoughts on this various news stuff... And yeah, we'd love to hear from you. So thanks for the conversation, Chris. We'll talk to you next time.

**Chris Benson:** Talk to you next time.
