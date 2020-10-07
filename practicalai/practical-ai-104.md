**Daniel Whitenack:** Welcome to another episode of Practical AI. This is Daniel Whitenack, and I am a data scientist with SIL International. I've got Chris Benson with me, who is a principal emerging technology strategist at Lockheed Martin. How are you doing, Chris?

**Chris Benson:** I'm doing very well today, Daniel. How's it going?

**Daniel Whitenack:** It's going really good. This last week was a fun week; I've been writing a lot of inferencing API code, which has been fun. It's been one of those weeks that I've got to be heads down in code a lot, and I always enjoy that bit of it. It's like, getting the various plumbed together and working, and then you have your models together, and you actually see it work in a practical way... That's always fun for me. What about yourself?

**Chris Benson:** Last week was pretty interesting. I'll relay really quickly what for me was a work-related thing, but not in a direct way. So DARPA (Defense Advanced Research Projects Agency) had a competition, and they had a bunch of autonomy-focused companies - and we were there too, Lockheed Martin - that were competing in what was called Alpha Dogfight. At John Hopkins University they had gotten an F16 flight simulator, and they had all the teams over the last few months getting their models of their F16s ready to go into dogfighting mode... So they had the competition last week, and they live-streamed the entire thing on YouTube. It was pretty cool to watch.

In the end, a company called Heron Systems won out overall. Our own team came in second, out of eight teams... But what's interesting is that Heron actually went up against -- if it was the Navy, it would be a Top Gun instructor; it was the Airforce, and \[unintelligible 00:03:59.05\] And within a set of constraints, it was interesting - the AI consistently beat the human pilot instructor.

**Daniel Whitenack:** Interesting, interesting.

**Chris Benson:** Yeah. Nobody was expecting that, so the AI models did very well, much better than anyone realized.

**Daniel Whitenack:** \[00:04:18.24\] When you first said that, I was thinking of battle bots, Boston Dynamics dogs going against each other. When you said dogfighting -- I guess I'm not around aeronautics very much, and that seems way more violent...

**Chris Benson:** No, airplanes in the air - still quite violent, in theory... But yes.

**Daniel Whitenack:** I guess that's true, yes.

**Chris Benson:** Yeah, but not adorable, furry little creatures, definitely.

**Daniel Whitenack:** Yeah, okay.

**Chris Benson:** But anyway, it was pretty fascinating to watch. It was a moment where people went "Hm..." Things are definitely changing right now... So that was my week.

**Daniel Whitenack:** Interesting. That brings up all sorts of interesting questions, and ethical things, and all of that, that I'm sure we'll get into as the podcast goes on as well.

**Chris Benson:** I'm sure we will.

**Daniel Whitenack:** But yeah, I'm pretty excited about today's episode. As some of our listeners will know - I think I've mentioned a couple of times that I've been getting into speech technology a little bit more for my own work in recent months, and one of the things... Like, if you're gonna train a speech recognition model and you're looking over what speech data is out there, one of the things that pops up fairly prominently in that is Mozilla's Common Voice project.

Mozilla is doing some really cool things also through their fellowship program with speech technology, and so today we've got Remy Muhire, Jenny Zhang and Josh Meyer with us, who are gonna talk a little bit about Common Voice and other things going on through the Mozilla Fellowships program. Welcome, everyone! It's really great to have you here.

**Jenny Zhang:** Thanks, Dan.

**Josh Meyer:** Thanks.

**Remy Muhire:** Nice to be here.

**Daniel Whitenack:** So before we jump into Common Voice and speech technology and all the wonderful things that you're doing, maybe we could start out by just having a brief discussion about your respective backgrounds. Remy, do you wanna start us out and tell us a little bit about your background and how you got involved in speech technology?

**Remy Muhire:** Thank you, Daniel. I started as a software engineer, so I still actually write code, but not often... And I'm also a contributor on some open source \[unintelligible 00:06:22.03\] in Africa as well, with a couple of friends. I would say I spent actually six years actually writing code. The journey actually started in 2013, learning about C, Python and JavaScript. I've been working in a couple of startups in Kigali, especially startups in fintech technologies here. Before that, how I actually got into voice technology was a project I tried to actually do with a friend \[unintelligible 00:06:58.24\] But unfortunately, we couldn't move the project, since there weren't actually any Kinyarwanda that does it. Kinyarwanda is one of the local languages spoken in Rwanda, in Kigali.

Currently, I'm working with Mozilla as a community fellow on voice technology.

**Daniel Whitenack:** Awesome. That's great, and I'm really excited to dive into the details of some of that in a bit. Before we do, Jenny, would you let us know the same? A little bit about your background.

**Jenny Zhang:** Yeah, thank you. I'm a software engineer primarily, and I have a strong focus on my work on ethical check, data governance and privacy rights, and so I kind of found my way through common voice and open voice tech, via those avenues. Currently, I lead the engineering work on the Common Voice project, both in terms of the platform and the data infrastructure around it, and kind of help set the technical strategy.

**Daniel Whitenack:** Awesome. And then Josh - what's your background?

**Josh Meyer:** \[00:08:10.19\] Yeah, I got into speech technology from linguistics, actually. I was in Academia, doing more cognitive science and phonetics/phonology perception, kind of the acoustic side of things... And I started to learn more about computational linguistics and NLP and speech technology, and that really sucked me in, because that's something where you can see users actually interacting with what you're doing, and that was really rewarding.

Recently, just last year I finished my Ph.D. on speech recognition for low-resource languages, and during that, towards the end of the dissertation, I was working with the machine learning group at Mozilla, doing some things with Deep Speech, trying to find an approach that could scale to new languages easily for speech recognition.

**Daniel Whitenack:** Yeah. And Deep Speech - just for those that aren't familiar - that's a project coming out of Mozilla as well?

**Josh Meyer:** Yes. It's called Deep Speech. Baidu originally named it, but Deep Speech is an open source speech-to-text software stack. It includes code for training, code for inference, and also pretrained models. Today I am a fellow at the Mozilla Foundation, working on this project for African languages, and Deep Speech and Common Voice; also my normal day job is lead scientist for speech technology at a startup in Los Angeles called Artie Inc.

**Chris Benson:** Very cool. I guess, to get us started - Jenny, I'm wondering, when Common Voice started, what was the state of speech data in general at the time, and what were you able to get your hands on? What was the practical aspect of getting started at that point?

**Jenny Zhang:** Common Voice started in the summer of 2017. I don't know exactly what the state of open speech data was at the time, but I do know that it was not the norm to have datasets. So for context - Siri came out in 2011, Alexa came out in 2014... So by mid-2017 there really hadn't been a ton of work on speech recognition and voice technology stacks in general that was available to the general public. The big companies obviously are not particularly interested either in releasing the training data that they have been working on, or making those stacks open source...

There had been a few datasets that have been doing a tremendous amount of work trying to find these open datasets and trying to basically look at large corpuses of voice data like open source audiobooks, and those sorts of things, in order to turn a dataset that was initially intended for something else for voice recognition. But as is often the case with open source projects, and as is often the case with internet volunteer labor, it was heavily focused on English, it was not diverse, and oftentimes there was not really a good sense of a roadmap to get from the initial 200-500 hours of English to a place where the speech dataset can actually represent the user base of the internet more broadly.

So that was kind of the initial impetus for Common Voice - we wanted to experiment with having something that was crowdsourced and decentralized in the best way, and look at how we can really democratize tech and bring people into the fold who were traditionally left out.

**Daniel Whitenack:** \[00:11:47.01\] Yeah. And Josh - maybe this is a question for you, since you're working in your Ph.D. In terms of state of the art right now and what people are doing, for something like speech recognition, how much data or how many hours of speech data do you need in general? I know that's difficult, because there is accents, and gender, and it's different for different languages, and all of those things, but what sort of scale are we talking about in terms of getting something that's functional for speech recognition? What is the sort of scale in terms of numbers of hours of audio that's transcribed that we need?

**Josh Meyer:** Yeah, this is a very good question, and it's kind of the million-dollar question everybody wants to know - how much data do you need to make an application that's useful, that's based on speech-to-text? This is really dependent on the application. You can actually get by, in some cases, with zero data. I know that sounds kind of crazy, but if you have a really low resource language, you can actually take an existing model from a high resource language - you can take an English model, let's say, and basically just transliterate the words that you care about for the target language. So you can kind of hack an English model to recognize (let's say) Welsh. I know people have done this for Welsh, for example. But that usually works only when you have limited domain tasks, when you have a small vocabulary... So let's say you're trying to recognize numbers, the single-digit numbers from zero to nine - you might be able to do that for a new language just by transliterating what the English model thinks it heard.

If you want something that's going to be more open-ended, like a really robust speech recognition model that can recognize any phrase, any word in some target language - this is hard to put a number of hours. People will usually say 2,000 hours, but that number comes from some standard English corpora like LibriSpeech and Fisher. But that's a number that's pretty safe to say, if you want something that's really open domain for some target language, and you're not assuming that you're going to do some kind of transfer learning from a source language model. I think 2,000 hours is something people would say... But it really depends on what your target application is.

**Daniel Whitenack:** Yeah. And I know that, Jenny, you're saying that the state of speech data, at least how it developed - of course, there was a lot of data available for English and maybe other major languages starting out, and I know that it's hard to put a number on that, Josh, but at least give us some sort of scale. I'm assuming - maybe Remy, you could speak to this - that for many (for example) African languages we might have zero data available, at least in open data; in some cases we might have some more... In terms of the languages that you're working with, Remy, what is the state of the data.

**Remy Muhire:** Yeah, the language we're working on \[unintelligible 00:15:13.12\] Kinyarwanda actually has over 12 million speakers in Rwanda. And to give you just a background - most of the administration and government in Kigali use Kinyarwanda as their daily language, in their daily operations. \[unintelligible 00:15:43.23\] we're consulting as well the Bible, which is actually very documented in Kinyarwanda as well. A lot of newspapers \[unintelligible 00:15:56.03\] So I think for Kinyarwanda we have actually a very useful text corpora to use.

**Chris Benson:** \[00:16:06.04\] Jenny, I was kind of wondering - at this point, as we're looking at Common Voice today, what is the state of Common Voice currently, and what functionality is available in the platform?

**Jenny Zhang:** Yeah, Common Voice the platform has the core platform, which you see when you go to commonvoice.mozilla.org. It really focused on the data collection aspects. On one hand, you go to Common Voice and you click on Speak, and you will be given any number of randomly selected sentences from our available text corpus for you to read out loud... And if you would like to validate, you will be given recordings that other contributors have recorded, and you can say "This does or does not match the text", and generally speaking, we have a criteria for when we consider a recording to have been sufficiently validated by the community.

So the Common Voice platform was really the first step in the pipeline to getting to our dataset. And that's just a web app, it's available on all platforms... There is a little bit of trickiness with mobile Safari, due to just the vagaries of MediaRecorder API implementation, but we're doing our best to make sure it's as widely-accessible as possible. And then the Common Voice dataset, the output of all of this volunteer effort - the last dataset we released in June had 7,200 recorded hours in 54 languages, of which about 5,600 have been validated by volunteers. This is a constantly growing number, so that dataset had 54 languages, but the current Common Voice corpus overall has 56 languages, and that number is getting bigger every time.

Right now we're looking at approximately just a little bit under 400,000 unique contributors who have either done recording, or validation, and over 130,000 unique voices in the dataset.

**Chris Benson:** A quick follow-up to that, and speaking as probably the non-NLP person on this podcast, when you say validation by volunteers, what exactly does that mean? Just for those of us who aren't familiar with it.

**Jenny Zhang:** Yeah, so the Common Voice approach to validation - and Josh can correct me if this is wrong - is a little bit unorthodox when it comes to how we normally think about NLP annotations. Basically, for the purposes of training, you want to make sure that a piece of audio matches the transcribed text as much as possible, without the uhms and ahs of the usual speech patterns, without any punctuation, or any of those sorts of things. Normally, how that happens is you're given an audio, and the person who is doing the annotation would write down what they thought the audio was, or vice-versa... Because all of our contributions are community-led, and the scale is such that we can't internally as a team do QA on it, we're really relying on our community members to listen to the recordings that have come through and say "Do I think that this recording exactly matches the sentence that it's supposed to match?"

So if the sentence is "The quick brown fox jumped over the lazy dog" and somebody reads "A quick brown fox jumped over the lazy dog", that would be the kind of thing where we would say there is a mismatch between the sentence and the recording, that the training model would be confused by... And so this is the kind of thing that we would want to filter out as not matching validation exactly. Does that about cover it, Josh?

**Josh Meyer:** \[00:19:46.29\] Yeah, I would say actually that it's not completely unorthodox. In reality, I think with speech technology and NLP what's orthodox really just comes down to what the application is and what the constraints are of the project... So there are some folks out there who would say "The best corpus of speech for training speech-to-text models is conversational speech from humans, that has then been transcribed." Common Voice is a read corpus; in the past, there have been read corpora that people have issues with, and rightly so, because they're not seen as applicable to most projects' needs at inference time.

For example, I'm talking about LibriSpeech. LibriSpeech is a corpus of mostly American English, that was formatted from open books that were recorded, from Project Gutenberg, so people who like to read books out loud for the general public. A lot of the consumers of these books might be people who are visually impaired. There's this giant project, people read books out loud, and then some researchers, I think mostly from Johns Hopkins - they took this set of audio and -- they're not actually transcripts, it's the book... And they did some alignment, and they used that. And that kind of became a benchmark for doing speech recognition, especially for English.

However, the way that people read books out loud - they try to read it in a very quiet room, they try to make sure that there's no echo, they try to make sure there's no dogs barking in the background - that kind of audio is not what most developers are expecting for their applications that use speech-to-text. It's better to have actually messy audio. It's better to have cars honking in the background, and wind blowing, and dogs barking, because that's a lot of times what you actually get at runtime, at inference.

So Common Voice is read speech. However, it's very valuable in the diversity of voices; it's just an enormous diversity of voices. And also, the diversity of background noises, the diversity of acoustic environments - you have people who record Common Voice just for fun on their morning commute, when they're on the train. That is really valuable data, because it's so noisy.

So I think that people who might knock on Common Voice because it's read speech, as opposed to conversational are also kind of -- it's valid, people do speak differently when you're reading something out loud; that's linguistically proven, that's not really debatable... But the kind of noise you get in the background is just so valuable that Common Voice I think is going to be (if it's not already becoming) the benchmark for speech recognition for all sorts of languages.

**Break:** \[00:22:45.09\]

**Daniel Whitenack:** Jenny, I'm curious - while we're still on the topic of Common Voice, I was curious in terms of the playbook, as you move into the future, for expanding the set of languages that are available, and maybe actively involving local language communities... What's the playbook looking to the future for Common Voice in terms of expanding that and making sure you have more and more language communities getting involved?

**Jenny Zhang:** \[00:24:20.20\] Yeah, that's for the question. It's something that the Common Voice team spends a lot of time thinking about, because as many languages as we share between us, we can't cover all of the 7,000 languages in the world. So what we really want to do is make Common Voice as self-serve as possible in terms of a platform, for really any language community that wants to make use of it.

The pipeline for getting a new language on Common Voice first starts with being localized, if the Common Voice website can't be used by speakers of a language because all of the website copy is in English, and that's not particularly useful... And at the same time that this localization is happening, the thing that we ask language communities to do is really find a corpus of sentences to be read.

Our threshold for that is 5,000 sentences. That's kind of what we've found sets a language community up for success, both in terms of having enough sentences to generate a sufficiently large corpus to start doing training work with, but also so that people who are coming to the site are not all just reading the same sentences over and over again.

These sentences can be from any source that the community thinks is appropriate, as long as the licensing is open source, so as long as the licensing is CC0. Then once the site has been localized and translated, and once we have the 5,000 sentences available, then the language gets activated on the Common Voice site and people can just go start contributing.

So to that end, we've built several satellite tools for making that happen. There's a tool called Sentence Collector, which is primarily currently maintained by a community contributor Michael Kohler. That is where anybody can go and just, if they want to, start typing in sentences to submit for a certain language, which will then also go through a community validation process to make sure the sentences are correct and appropriate, and all of these things.

We also have a tool that scrapes large open source text sources such as Wikipedia, in order to automatically put together a corpus, so that you don't have to come up with 5,000 sentences to read. A lot of our largest languages have been compiled by scraping Wikipedia and scraping open source, encyclopedia-type sources (I keep saying sources). This could also include things like transcripts from the European Parliament, or - we're really very open to anything that the community thinks will help them succeed, is something that we're really interested in supporting.

**Chris Benson:** I appreciate that. Remy, I have a question for you - what can technologies like speech recognition enable (for lack of a better word) in local language communities in Africa and elsewhere, and what are the potential applications? And are they different than those that we're finding in places in the West, in the U.S, and in Europe, and such?

**Remy Muhire:** Yeah, I think voice technology can actually enable a unique opportunity to reach out to people who have been excluded from the traditional digital services. I think some of the applications will be especially fintech applications, and regarding healthcare. Just to give you an example - two years ago I was working at this startup, and we were actually building a product for people to contribute money in \[unintelligible 00:27:53.28\] Those groups were formed with 20-30 people, and most of those contributors were actually farmers. Looking at the literacy level in populations in Africa - you actually see that 30% of adults in Southern Africa are actually illiterate. So it was very difficult for those people to use this application to contribute.

\[00:28:26.16\] So my thought was if you could actually have a Kinyarwanda language model - Kinyarwanda, which is actually a local language in Rwanda, spoken by over 12 million people... So this could have actually eased the way those farmers contribute to their service group.

There's also a lot of innovation happening, especially in Rwanda. Most of the governments obviously have been digitalized, and so it's not accessible to people especially in rural areas... Because someone could actually live 10-30 kilometers from a cyber cafe/internet cafe, so where people actually go to seek services. And they always go look for an agents \[unintelligible 00:29:21.24\] So yeah, I think voice technology can actually enable a lot of solutions, and helping actually farmers to access digital financial collects.

**Daniel Whitenack:** Yeah, that's super-interesting. I wonder, as a follow-up to that if -- so the language Kinyarwanda, if people in maybe that language community, and others, do you think that they would find more value in a voice application, versus a text application in the local language? What do you think provides the most value there?

**Remy Muhire:** Yeah, just to give you some context... A lot of people, especially in public areas, communicate using voice over WhatsApp. They're using WhatsApp. So they tend to send more voice notes to people they're chatting with in the local language. And people will prefer actually communicating through voice, and also seeking for information through voice.

Just a quick example - people will tend to call, especially telecommunication call centers, to seek information. Recently, with actually the crisis - these institutions in Rwanda \[unintelligible 00:30:39.21\] They've been actually receiving over 1,000 calls requesting information for Covid, for the Coronavirus. I think people will be seeking more value with voice, than actually testing, yeah.

**Daniel Whitenack:** Yeah, definitely. It seems like there's a lot of great potential there. And I know that, of course, one of the things, like you were talking about some of the data that's available in the language you're working with... And I know Josh, you've worked a little bit with bias in datasets, and it seems like, of course, as data scarcity might be a problem with some of these lower-resource languages, there's probably a heavy bias in those speech datasets for the lower-resource languages towards whatever it is - maybe it's only males in the corpus, or only a very small representation of the potential accents in the data... You've done some work in this area; I remember reading a recent blog post about a dataset that you were working with to help researchers diagnose bias in speech datasets... Could you give us a little bit of an introduction to that work and what you're doing there?

**Josh Meyer:** Yeah, I'd be happy to. I think that this question is a really important one, and it's one that anybody working in language technology needs to think about, needs to face. Because whatever language technology you're working with, this bias problem is going to be present.

\[00:32:11.12\] So the work that you're referring to is the Artie Bias Corpus. It's a corpus of English right now. It's a subset of the Mozilla Common Voice Corpus that has been filtered so that we have demographic data for every audio clip in the speech corpus, and also we've done extra steps of validation to really ensure that the transcripts are 100% accurate.

So this dataset is about 1,700 audio clips. So it's not enough for training, but it's enough for diagnosing (as we call it) bias in your speech-to-text model. This is a hard problem to get at, when we talk about bias, to make it really concrete. The definition that we've basically come up with is if you have a speech-to-text model that performs statistically worse for a certain demographic group, then that model is said to be biased. So using this corpus, the Artie Bias Corpus, you can take any off-the-shelf speech recognition model and look at what is its accuracy - or word error rate, as we call it - for a certain demographic group. And we have information, thanks to Jenny and everybody at Common Voice, from people who opted in to self-identify their gender, their accent, and their age. Along any of those lines, you can look at how well your model performs on every group, versus every other group.

The beginning of your question was "This problem with more underserved language communities - this problem becomes more exaggerated." If you have a small sample from any distribution, the sample is more likely to be biased, especially if you're collecting it in a biased way. So a lot of the language communities we have - they know about these problems and they're working very hard.

Remy and the folks on the ground, working at Digital Umuganda - they have done a lot of work to make sure that the Kinyarwanda dataset is as balanced as possible. And they've done some really great things with that, especially for gender diversity.

It's a hard problem, because you want to get data that's balanced, but also you need to be mindful of people's privacy. So you don't always have people reporting their demographic status, because it's an opt-in project. But even given that, Digital Umuganda has been able to do some really great things through community recruiting to make sure that the corpus is as balanced as possible.

**Daniel Whitenack:** Yeah. Remy, could you talk about that a little bit more, in terms of your strategy around data collection and making sure you have these balanced groups, and involving the right people in the community?

**Remy Muhire:** Yeah. Basically, Digital Umuganda, \[unintelligible 00:35:27.01\] and actually collecting voice datasets. The strategy was more like hosting offline events and bringing the awareness to actually contributors why is actually voice technology very important, especially for underserved langauges. They really did a good job... So far, we have on the platform over 1,000 hours of voice collected. This has been done by setting up actually a community of \[unintelligible 00:36:02.24\] are actually members who are actively organizing local events in their areas, in their universities, in order to get people to contribute.

**Daniel Whitenack:** \[00:36:15.12\] I was just wondering if you could say - this Digital Umuganda, is that like a company, is it a for-profit, is it a community thing? Could you describe a little bit of what it is?

**Remy Muhire:** Yeah, Digital Umuganda is actually a company which actually works on AI products. What they're trying to actually build is an AI chatbot in Kinyarwanda. The AI chatbot would be in charge of giving information related to Covid, and also on other topics. So facing the challenge of not having actually a Kinyarwanda dataset, they started by collecting voice data on the Common Voice platform. The next phase for them would be working the dataset, and Josh has been working on the Kinyarwanda model, which they can actually now use \[unintelligible 00:37:15.01\] the chatbots. Does that actually answer your question?

**Chris Benson:** Yeah, it does... And I'm kind of curious, going back to what you and Josh were saying before - I'm really wondering, as you're looking at what impacts performance in terms of getting these recordings from different people, different groups... Is it the sound of gender, accent, noise? What is it that really affects what the end product is? Josh, could you address that one?

**Josh Meyer:** Yeah. This is a great question, what demographic factors are going to have the biggest impact on performance for speech recognition systems. I think accent and gender have been just hands-down proven to have a huge effect. Accent, depending on what we classify as accents, versus dialects, versus languages... I'm sure Daniel has thoughts on this, too. A language is a continuum, right?

**Daniel Whitenack:** Everybody has a different definition.

**Josh Meyer:** \[laughs\] Yeah. Okay, concrete example - try using Siri or Google Home with a Glaswegian accent, or any kind of Scottish accent. It might be better now... I'm assuming they've put more work into it, but pretty famously, a few years ago it was just abysmal. So accent has a really big effect, because I think the continuum is so broad... And then after accent, gender has been shown to have a big effect, a very reproducible bias.

There's lots of different ways to think about why there's bias in a model. A lot of times, the typical answer is "Well, the training dataset was not sampled correctly. There are under-sampled majorities (as it's been called) in the dataset." I think that, for gender, might be one of the big problems... And also, on a technical level, speech technologies were developed basically in a way that makes men's voices - because they're lower-pitch, they have a different kind of frequency range to make it easier to work with those kinds of voices.

So there's a sampling problem, and there also are problems that could be inherent to the technology itself. But at the end of the day, the demographic factors like accent and gender are usually much more pronounced than age. Age can also have an effect, but I've seen that less often.

**Break:** \[00:40:06.16\]

**Daniel Whitenack:** Alright, so as we've gotten to talking a bit about the impacts of these demographic factors in terms of the performance of certain speech technology like speech recognition, I wanna kind of circle back to Common Voice and Jenny, and ask if this work that Josh has been doing in terms of the demographic factors - if that's sort of influencing thought on the Common Voice team in terms of... I may be mistaken about this, but I think you have some processing that when you download a dataset, there's actually already a segmented out training test/dev set. Is the work that Josh is doing, or maybe other similar efforts - is that influencing your thought process around how you're forming those training datasets for people and segmenting out that data? Or maybe it's making some changes to the collection interface, to promote certain diversity... What's the feedback from this kind of work?

**Jenny Zhang:** Yeah, we work quite closely with Josh and rely a lot on his research and expertise in these matters to guide our technical roadmap. I would say from the inception of Common Voice until this we've really focused a lot on language diversity, with the idea that that was the thing that we could bring the most value to, especially around being able to mobilize Mozilla's international contributors, and counting on our reps and our local communities to do the kind of organizing that Remy was mentioning as well. So now that we feel like we have a pretty good momentum going on the languages side, we're really starting to look more at the demographics inside of a language, and gender is something that we are very cognizant of as something that we also need to correct.

The interesting thing about being pretty much the only voice dataset out there that releases our demographic stats also means that we are very aware of all of the ways in which we could be doing better... So the ways we've thought about remedying that to definitely include the segmentation that you had mentioned. Right now the segmentation optimizes for diversity of speakers, but there's certainly post-processing we can do there to try and optimize for gender as well.

Some of the other things we are thinking about on the platform side include things like - we know open source in general tends to feel less accessible to under-represented groups, and looking at what campaigns we can do... We can run challenges and events, specifically reaching out to under-represented groups to make it very clear to them that we welcome and actively seek out their contributions.

But also, one of the other features that we have been building on the platform is the ability to collect data for a specific segment. So the thing that Josh had mentioned earlier on collecting a dataset of just reading out the digits one to ten, and the words yes and no - that's a very specific target segment, that we can then go out into the world and say "Hey, this is a thing that we want to collect for this specific purpose. Can you help us?" And we're looking at how we can use that segmented campaign ability to then drive other diversity as well.

**Daniel Whitenack:** \[00:44:30.00\] I realize there's some good expertise with our guests on the ehtical side and data governance side of things, and I wonder -- you had mentioned only certain of the people that contribute to Common Voice, they self-identify... Of course, it seems like you could, if you wanted to, create some data augmentation method that would detect the accent, or even the gender, based on those who did self-identify, to then label those who didn't. Has this come across your ethical discussions in terms of what you do with people's speech that comes to you, and what you don't, and how you form those principles?

**Jenny Zhang:** So Common Voice as a team, and I think Mozilla more broadly, really takes a data-minimalist approach wherever possible. I personally am a strong believer that the only data you can guarantee to be secure is data you never collect in the first place. So we, as much as possible, want to minimize what we are tracking on our contributors. We're respecting our track, we ensure that if people don't want to be identified, that they are not identified. This is also why we allow anonymous contributions on Common Voice. So that's kind of the first principles we're operating on.

In terms of using augmentation methods to gather more information on those demographic pieces from people who are not self-identifying, I would say that any augmentation method that is available to us is in itself also biased... So I would be very concerned about introducing additional skew if we're using identification methods that are trained on uneven datasets to then further segment our own dataset.

**Daniel Whitenack:** Right. You might just kind of be propagating a problem that is already there.

**Jenny Zhang:** Yeah, totally.

**Josh Meyer:** There's something I'd like to tack on there... I definitely echo everything that Jenny said, and a little bit further - let's say that we do have some kind of gender identification, or age identification, or accent identification that is 100% accurate. Even in that case, I would not want to be using that at all... Because the fact that this is an opt-in choices means that if the person didn't give you that data, they don't want you to have it. It's not that they just don't want to give it to you, it's that they don't want you to have it.

Before I got into speech technology, I spent a lot of time working in psychology labs... And if I had folks coming in and doing some kind of cognitive tests, and they have a sheet of paper and they're filling out demographic information and they choose not to fill out their gender, and then after they leave, I think "Oh, I saw that she was a woman, so I'm just gonna fill in woman" - that's something that would set off a lot of alarms... And I think that this kind of approach, where you're filling in holes in the data after the fact is the same thing.

When we're thinking about the ethics of using machine learning models, I think it really helps to make it concrete if you say "Okay, if it weren't a machine doing that, if it were a human doing it, would that be okay?" And I think in this scenario, it's something that I really do not feel comfortable with... Because the person doesn't want you to have the data.

**Daniel Whitenack:** Right, yeah. And I'm sure this is a problem. I think we're gonna have a discussion pretty soon as well with one of the major image dataset groups that's out there... Yeah, you could identify a lot of things in images, or you could probably attempt to identify even people through speech.

\[00:48:14.13\] I think I remember when I downloaded some of the data from Common Voice, I had to agree as a user of that data to not try to identify the speakers. I don't know if that's always been there, but I definitely resonate with what you both are saying, for sure.

**Chris Benson:** A question for Josh and Remy - as you were looking at the future of where your Mozilla Fellowship can take you at this point, what are you thinking? Where do you expect things to go, what would you like to get accomplished under that fellowship?

**Remy Muhire:** I think what I really want to accomplish is actually making sure we have a strong Kinyarwandan model, which the local startup ecosystem can use, and build actually relevant applications for people who have been left out from the digital world. I think that would be actually something really good for me to accomplish, as well as making sure we have actually enough use cases where we can use voice technology.

**Daniel Whitenack:** Yeah, that's awesome. I really like how you put that, because one of the things that I've been really privileged to learn a little bit more and grow in as I've been doing my own work is just growing in my own desire to have two-way communication in the digital world. So no so much like -- you know, we want to have, for example, machine translation models that translate everything that's in English to every other language. It's really great to, on the other hand, think about "Well, there's so much value and amazing things happening in these language communities around the world, local language communities, that we as high-resource language speakers are missing out on." So that's really great and exciting stuff. What about you, Josh? What are your thoughts for the future of the fellowship?

**Josh Meyer:** Right now, for at least the duration of the fellowship, there's a couple projects that Remy and I are working on. There's the one that we've been talking about, the Digital Umuganda base project that is focused on Kinyarwanda and collecting Kinyarwanda data, engagement and community mobilization, and also model training for deployment and making a product that people actually can use and people care about. That's one side of it.

We're also working with some researchers out of Makerere University in Uganda. It's also related to Coronavirus; it's kind of a project that's keyword-spotting for broadcast radio, so that folks in the ministry of health can know more details on what's going on in the country with regards to Coronavirus, because the broadcast radio is a really well-used medium to get up-to-date information.

So these two projects - they're both about data and models and community engagement. And right now, these are what's really driving, and seeing these two to some kind of useful product is the near future.

But moving forward, what I'm really interested in is leaving a set of best practices, guides, playbooks for how to do all the things we're doing right now, but without me and Remy. If a new community wants to start using Common Voice, using Mozilla's Deep Speech, they wanna start along this path that ends in a product, how do they do that without needing some kind of expert?

My hope is that we can make documentation and resources that are useful for developers everywhere, so that they can do this at home. Common Voice is all about this democratization of data, deep speech is about democratization of tech, and I think that the work that we're doing right now is about this kind of democratization of expertise... Because for every project, you can't get somebody to help you out with the voice tech; there's not a ton of us around. There's 7,000 languages in the world, and within each of those languages there's lots of projects, so to make this really open, we need to get the knowledge out there, too.

**Daniel Whitenack:** \[00:52:39.00\] So were you always wanting to have products as the end goal here, or developer tools that you could use? You seem to talk a lot about enabling other developers to build things through maybe a speech technology that you put out there. Was that always the goal, or did you ever think about building the end product, like the fintech application, or the healthcare-related application directly? What's the balance there in your mind?

**Josh Meyer:** In my mind, these two projects we're working on - the Rwandan project and the Ugandan project for the fellowship - each of these are very product-focused, or end-goal-focused... But the overarching context, at least for me, is these are two examples of taking an idea in speech and going through the entire pipeline with data collection, data validation, community engagement, making something that can be deployed. That whole pipeline for both of these projects is something that's reproducible.

So the answer to your question I think is both. These are both, in my mind, important... Because each of these projects is helping us hone the pipeline. And then once we have that honed pipeline, we can communicate that to a broader community.

**Chris Benson:** Jenny, I'm kind of curious - you're right at the center of speech data gathering and governance... Are you hopeful, and what are your thoughts for the practicality of being able to expand speech tech to more and larger communities around the world over the next few years? And what are you excited about in terms of Common Voice, or speech tech in general, actually?

**Jenny Zhang:** Hm... That's a very interesting question. For Common Voice, the thing that I -- so I've only been with Common Voice for about a year, and in that time, the thing that I've been repeatedly blown away by is the enthusiasm and the dedication of our various communities. That says to me that there's really a need for something like this in the world, that Common Voice is filling a gap in both the marketplace and also just the broader language community.

We've seen applications of Common Voice that we hadn't originally intended for. We were looking for using it to collect voice data for speech-to-text models and those sorts of things, but we're also seeing that Common Voice is being used for language preservation, and I think there's potential applications for Common Voice for doing language acquisition even.

The thing that I'm the most excited on is just how can we broaden the reach and the diversity of Common Voice so that people who have ideas that would have never occurred to us internally are empowered to use these tools as much as they can? And I think at the same time because Common Voice is -- our collection methodology, as Josh said earlier, is very consent-minded, very privacy-minded, and I think there's a lot of opportunity to do leadership in the data governance space around how we think about data licensing for something like this.

I think to some extent voice data is inherently biometric. If somebody downloads a Common Voice dataset and goes "Hey, I recognize my friend", there's no amount of obscuring or anonymization that we can do for that dataset that would prevent that from happening... So I think there are going to need to be some very difficult conversations in the next few years on how we handle that in such a way that it doesn't get abused and it doesn't get used to create a deepfake, or any number of nefarious and problematic applications... And I think being at the forefront of the governance question before things get to the point where they are now with Clearview AI, just to use an example, is a really powerful way that we can show up in the world

**Daniel Whitenack:** Awesome. Yeah, I think that's a great perspective to end with... And I just wanna thank you all for taking time out of your really important work to talk to us about speech tech, and data, and bias, and speech data, and your really exciting work for African languages... We're just really thrilled to have this conversation.

Of course, in our show notes we'll link to all of the things that we've been talking about - about Common Voice, and Digital Umuganda, and the fellowship program, and all sorts of things... But thank you all for joining us; we really appreciate the conversation, and hope to chat again soon.

**Josh Meyer:** Thanks for having us.

**Jenny Zhang:** Thank you so much.
