**Daniel Whitenack:** Welcome to another episode of Practical AI. This is Daniel Whitenack. I am a data scientist with SIL International, and I'm joined as always by my co-host, Chris Benson, who is a principal emerging technology strategist at Lockheed Martin. How are you doing today, Chris?

**Chris Benson:** I am doing very well. How is it going today, Daniel?

**Daniel Whitenack:** It's going wonderful. I don't know if you -- our listeners can't see me, but you can see me, I'm in a new room. My wife and I moved this last week, which was exciting... I don't know if it's this way worldwide, but for those in the U.S, you'll know that the housing market in May of 2021, which is now time, is crazy. So we sold our house and gonna rent for a while. That seems to make sense. So I've got a new podcast recording room. That was the big news.

**Chris Benson:** It's funny that you mentioned that, because I know I've mentioned to you that I'm planning to move as well, very local to where we're at...

**Daniel Whitenack:** Sure.

**Chris Benson:** ...but we had some family land that has five acres... But the price of wood is at an all-time high.

**Daniel Whitenack:** It is, yeah. Building is crazy.

**Chris Benson:** That has pushed the cost of building way up there, so we're trying to figure out when we're gonna do it. Nothing to do with AI, but still, definitely impacting the family.

**Daniel Whitenack:** Yeah. So I've been working from various strange locations over the past week, and opening up my computer, dealing with a bunch of data parsing issues and weirdness over the past few days, and it's been either moving a box, or setting my laptop on top of a box and opening it to deal with data parsing issues... That's been my life for the past few days, which isn't so bad. It's not so bad.

**Chris Benson:** You do what you've gotta do to make things work.

**Daniel Whitenack:** \[00:04:03.25\] Yeah.

**Chris Benson:** We'll get there.

**Daniel Whitenack:** Yeah, for sure. Chris, I think I've mentioned to you a few weeks ago I was able to be a guest on a different podcast, which is always fun... And that was the Voice Box Podcast. One of the hosts of that podcast is Jeff Adams, who is CEO of Cobalt Speech and Language, and former member of the Alexa team at Amazon. Jeff has graciously responded to our request to be a guest on Practical AI. So welcome, Jeff.

**Jeff Adams:** Hi! It's good to be here. I wanna state, for the record, I am not selling my house. \[laughter\]

**Daniel Whitenack:** Perfect, yeah.

**Chris Benson:** Touché!

**Daniel Whitenack:** Well, you must like where you're at right now.

**Jeff Adams:** I'm just holding. It's like poker in real estate, just hold'em.

**Daniel Whitenack:** You're holding. \[laughs\] It makes sense. I'm taking the more impulsive route. Well, before we get into all the great speech technology things that you're involved with, maybe we could just start out and talk a little bit about your background, and how you got into this sort of technology and ended up doing what you're doing now. Do you wanna give us a little bit of that background?

**Jeff Adams:** Sure. I got into speech technology a quarter of a century ago, and that's the first time I've ever said that, because I just realized it, and it makes me feel really old. So I've been doing speech recognition, speech technology for just over 25 years. I've worked for companies like Dragon, Nuance, Yap and Amazon, you mentioned... And then more recently, for the last 6-7 years, I've been the CEO and co-founder - or sorry, just plain outright founder - of Cobalt Speech and Language company. So I've been at a handful of different companies, and seen a lot of things over the last 25 years, and I really love speech technology.

**Daniel Whitenack:** When you were just getting into this world of speech technology, what was it that drew you to the technology in the first place? How did that happen?

**Jeff Adams:** Well, I was a math grad student at the time, at the University of Oregon, and was deciding that academics was not really where I wanted to spend the rest of my life, and I was trying to figure out what to do. I have always been fascinated by the interplay between mathematics, statistics and language, and trying to figure out what I could do with that. And this was in -- boy, I really am aging myself; this was in 1995. This was the relatively early days of the internet and the worldwide web, and I went on the internet to hunt for jobs, which was not a common thing at the time... And I found someone looking to fill a position for statistical language modeling, and I said "That sounds really cool."

**Daniel Whitenack:** Oh, that sounds cool...

**Jeff Adams:** So I threw my hat in the ring and I got the job, and I moved from the Pacific Coast to the Atlantic Coast, and took a job with this speech company Kurzweil Applied Intelligence, founded by Ray Kurzweil, the inventor and futurist. It was fun, it was a really cool experience. That's where I got my on-the-job training. I learned a lot about speech technology, and specifically how specifically statistical language modeling fits into the whole process of speech recognition.

**Chris Benson:** I'm curious, you've talked about your resume... It's kind of a Who's Who of that industry - all the big names, as they've come along. When you joined Kurzweil, how big was that company? Had it grown yet, or was it still small?

**Jeff Adams:** The company was 5-10 years old at the time, so it wasn't a brand new company... But it was maybe 30 people, something like that.

**Chris Benson:** Yeah. Quite small.

**Jeff Adams:** Yeah. Ray Kurzweil himself, he had his fingers in several different companies, but he would occasionally come by and walk up and down the halls. I was very flattered that he greeted me by name, without having to look at a nameplate on the door, or anything like that. He knew my name. It was exciting.

**Chris Benson:** That is cool.

**Daniel Whitenack:** \[00:07:54.16\] You mentioned statistical language modeling... Can you give us a sketch of maybe back at that time when you were trying to do some of those things, what could statistical models do? What were the main challenges that you were solving? And maybe fast-forward to the capabilities or the functionality that we can do in speech-based tasks - how has that expanded? Could you give us a little bit of that sketch?

**Chris Benson:** As you do that, and can tie it a little bit into some of these various companies that you've been involved with over time, I'd also be interested in hearing the progression as you went through your own career.

**Jeff Adams:** Yeah, absolutely. By the way, just to be clear - the first 10-15 years of my career in speech were really focused on statistical language modeling. Since then, I have broadened my scope and horizons and been more involved in speech recognition more generally, and then more recently speech technology more generally. But let me go back and answer your question. When I first started in 1995 doing statistical language modeling -- first of all, let me just define what that means for some of your listeners that may not know what that is.

**Daniel Whitenack:** That'd be great.

**Jeff Adams:** Statistical language modeling in a nutshell, you can think of it as predicting the next word. So imagine you're reading a book or a newspaper article or a magazine article, and you get to the end of the page, and you're in the middle of the sentence, and you're about to turn the page - can you predict what that next word is going to be? And not just predicting which word it is, but of all the possible words it could be, give me a probability of "There's a 3% chance that it is the word 'yogurt' and a 5% chance that it is the word 'horse' or whatever else." I can't imagine what sentence might lead to those high-scoring probabilities, but...

**Chris Benson:** That's what I was thinking... \[laughs\]

**Jeff Adams:** But anyway, this is the problem of predicting the next word. And the state of the art at the time, in 1995, was a technique called n-grams, where you would have counted up from a large body of text - we'd call it a corpus of text - you would have gathered a large corpus of text, and at the time, a large corpus of text would have been maybe 15 million words of English. And of those 15 million words, you could count "Well, how many times did I see the word 'yogurt', and how many times did I see the word 'horse'?" And more specifically, if you know the last word on the page before you turn the page, if you know the last word was "favorite" or "my favorite" or something like that, of all the times that you saw the word "my favorite" in your 50 million-word corpus of speech, of all of those times, how many times was "yogurt" the next word, and how many times was "horse" the next word. You could then infer the probability of various words based on how many times you'd seen them in a corpus.

The biggest problem in statistical language modeling, the fundamental problem is the zero problem. There are many things that happen -- you might see "my favorite yogurt" in real life, but you may never have seen that in your 50 million words. So if you're trying to infer "What's the probability of 'yogurt' coming next?", you might naively say "Zero. I've never seen it before, so it can't happen." And the problem in statistical language modeling is figuring out how do you predict things that really could happen, but you've never seen them happen before.

So over the years, statistical language modeling was dominated by this approach using n-grams. If you're using sequences of three words, we would call those 3-grams, or if you wanna be fancy, tri-grams. Over the years, as computers have gotten bigger and data has become more plentiful, we've been able to increase n. Originally, we were working with bi-grams and tri-grams; that is sequences of two or three words. Now, over the years, that's grown to tri-grams and four-grams and five-grams. We'll give up on the Latin and the Greek prefixes at some point.

**Daniel Whitenack:** Yeah, that gets a bit hard at some point.

**Jeff Adams:** \[00:11:49.28\] Yeah. And the thing that has astounded me is that over 25 years, as so many other things have improved and developed, it is still really hard to beat n-gram technology for modeling statistical language models. They are still the workhorse today of most speech processing systems, although they're trained on many more than 50 million words; it might be 50 billion words, or even approaching trillions of words... And we don't just look at two or three words, but it's much more common to look at four or five-word sequences when you're modeling those now, because you have so much more data to be able to do that.

Their simplicity means that they're fast to use in practice; when you're trying to look up a probability, they're very fast. They're still the workhorses.

There are approaches to getting more accurate statistical models at predicting that next word that are more accurate, they're better, but typically they're very time-consuming, and so they're hard to use in practice. There are approaches now with deep neural networks to model those... Anyway. So this is the story of "The more things change, the more they stay the same." A lot of things have grown more sophisticated in speech technology, but language modeling has just grown bigger, in larger amounts of training data, larger sizes of how many n-grams we keep around to do the modeling, and so forth.

**Daniel Whitenack:** So that's like the language modeling piece, which - mostly what you've been talking about is sort of combinations of words or tokens...

**Jeff Adams:** Right.

**Daniel Whitenack:** At what point did you start exploring the audio side of things? So audio in, and not knowing maybe what words are in that audio? When did you start exploring that, and how eventually does that connect to this world of language modeling?

**Jeff Adams:** Yeah. So my first job was working for a company doing speech recognition. And we were doing speech recognition mostly for people dictating documents or emails on their laptop or on their computer. The standard approach then - and still now, to a large extent - takes the statistical language modeling of predicting what words might come next, so that you know what words to kind of listen for... And then the acoustic models that are able to listen to some audio and recognize the sounds of the language in that audio, recognize the difference between a "k" sound and an "a" sound and an "i" sound, the different phonemes that you might get... And the whole process of speech recognition was to merge those together to get sequences of words that a) sounded like what you're hearing, and b) are reasonable sequences of words; so you'd put those two together.

Now, in my first dozen years of working in this field, I ran the language modeling group at the company where I was, eventually at Dragon and Nuance Systems. I ran the language modeling group, and we always had a friendly rivalry with the group next door, that was trying to improve the acoustic models of recognizing what sounds those are in the audio.

We would have each new release of our software - for example, Dragon NaturallySpeaking, each new release, the language model team and the acoustic model team would be fighting to see who could contribute the most to the accuracy improvement for the next release. And it was a pretty fair fight. Sometimes we won, sometimes they won.

When I left Nuance and went to join this small company Yap in Charlotte, North Carolina, where our focus was on transcribing voicemails - when I went to Yap, I took a step up in a sense, and suddenly I was in charge of all of the speech recognition. So I had to put aside my biases rooting for the language model, and I had to also care about the acoustic model, and I was able to find some really talented people who knew about both, and could push forward our research on that. And we got to be very accurate. I think we were the most accurate in the industry at the time at transcribing voicemails, and that was a lot of fun.

But then, you asked me to sort of step through the history of my career, and talk about how the language model versus the acoustics kind of come together. So they came together in my career at that point, and then that continued when I was at Amazon, leading the Alexa team. We were doing the same; a lot of effort goes into language modeling to figure out what sequences of words are people likely to say to a smart speaker... And on the acoustic side it was, I think, more challenging for Alexa, because Alexa was the first breakthrough product that could handle speech at a distance, so that it had to accommodate all of the reverberations and echoes in a room.

\[00:16:21.25\] When I talk to one of my smart speakers now, my voice is bouncing off of any number of walls, windows, computers, whatever, before it gets to that smart speaker. And that can be really confounding for the speaker, and the acoustic modeling had to do some major growing up to be able to handle that. But we still had acoustic models and language models as these separate entities that were both contributing to the recognition.

When I left Amazon and founded Cobalt, I did another step up in terms of the scope that I was looking at. I was not worried just about speech recognition anymore, but now we're worried about speech synthesis, speaker verifications, identifying who's speaking, and any other aspects of speech processing. But those core components - they've grown up, they've become more sophisticated, especially in the case of acoustic models, and they've become bigger in the case of language models. I still recognize them from 25 years ago. They're still the basic components that come together in more or less the same way.

**Break:** \[00:17:26.01\]

**Chris Benson:** So as we've seen these technologies really get out into the marketplace and be used in a huge number of different use cases and different industries, different businesses, how are you seeing this technology? What are some of the things that you've seen it being used for, that are outside -- I mean, probably most people are familiar with things like Alexa and the like, but I've run into use cases where I've found speech technology in things that I wasn't expecting, or didn't realize that it had come into that... If you could give us a little bit of insight into some of the places that you've seen it go that maybe we're not aware of, and maybe that we haven't been using on a day-to-day basis.

**Jeff Adams:** Yeah. I don't know, Chris, have you been listening to my podcast? It sounds like you're making a pitch for my podcast.

**Chris Benson:** I might be... \[laughter\] I'm not sure I should admit that now; you're not supposed to call me out on that, but... Oh, my gosh.

**Daniel Whitenack:** Yeah, this is the great teaser.

**Chris Benson:** I set you up and you called me out on it. Uhh... \[laughter\]

**Jeff Adams:** But in fact, I have this podcast, The Voice Box, where that's exactly what we look at - the variety of things people are doing with speech technology. And I'll give you a few examples. People are using speech technology to diagnose disease; I can listen to you speak and detect "Oh, I think the way you are speaking, you are depressed, or you have Alzheimer's." I can even detect things like congestive heart failure, and things that you wouldn't necessarily expect to be related to speech. So that's one.

\[00:20:00.16\] We've got speech in education, where we're helping not just coaching people in general, but coaching on people learning a new language, where we can give them feedback on how well they're speaking... We've got custom synthetic voices that people build. I'm mostly thinking of projects that we've taken on at Cobalt, but this is not limited to what Cobalt is doing. People are doing really interesting things.

There's a great company, VocaliD, that records people's voices, people who know that they have to have some surgery and they'll lose their voice - they can record their voices ahead of time and then create a synthetic voice that sounds like them, so that later after they've lost their voice, they can still speak with their voice.

**Daniel Whitenack:** Oh, that's really cool.

**Jeff Adams:** It's a fantastic company and a great technology.

**Chris Benson:** And it's almost like maintaining identity as well...

**Jeff Adams:** Exactly.

**Chris Benson:** ...separate from just the physicalness of the voice itself.

**Jeff Adams:** Right. We've got people who are using voice to listen in on pilot conversations to detect when they're fatigued, to recommend that they trade off with the co-pilot, or whatever you have to do to wake someone up that's fatigued.

We've got instances in education, and finance, and medicine... The thing that has been the most fun for me in my career has been these last six year or so, where I get to see so many different interesting applications, and I don't have to think of them all. Other people are coming to us saying "Hey, I'd like to use voice for financial transactions" or "I'd like to use voice for..." whatever it is. And we get to do that. We get to work with them and build those things out, and we've got some great technology that people are using in a lot of really cool applications. It's fun to be a part of that.

**Daniel Whitenack:** In terms of the human-device interaction in different industries - I think people started, of course, interacting a lot with computers via various peripherals, but eventually keyboard and mouse generally, and I think people have really got used to that; of course, that's changed maybe a little bit with smartphones and other things... So how have you seen, maybe industry-wide and also anecdotally maybe, in people that you interact with, in terms of how the value of a speech-driven interaction might be different than just creating a text chatbot for your customer service? How have you seen that evolve as speech technology has gotten more diverse and more performant over time?

**Jeff Adams:** Yeah, that's a great question. People usually would rather communicate by speech. That's natural. Speech came long before written language.

**Daniel Whitenack:** Yeah, we weren't born with a computer mouse in our hand. \[laughs\]

**Jeff Adams:** Right. So speech is part of us, and it's natural, and it's an easy way for us to communicate and to be communicated to, in both directions. So it's really important. I have seen over the last five years or so - I think I've seen some people push it a little too far, where they think "Well, what we need to do is have all interaction be through speech." But I don't think that makes sense. There are times where speech just doesn't work as well.

While I'm talking to you right here, if my wife needed to get my attention, she'd come into the room and probably write something on a piece of paper and hold it up to me. In that case, I wouldn't want her to use speech and interrupt this. And there are times it's a lot easier to scan information quickly when it's written, and the gestures are important.

So I think the right thing to do is -- people have been pushing the pendulum way over towards speech; at least some people have. And I think that the pendulum is gonna come back a little bit and people are gonna find the right balance of speech and keyboard and mouse, and monitor, and gestures on a touchscreen, and whatever else; gestures with a watch, movements of your arm, and things like that. I think it's gonna come back and speech is going to take its proper role, which will be prominent. Dominant, I don't know. But speech is certainly gonna play a central role, that has only been possible in the last 5-10 years really.

**Daniel Whitenack:** \[00:24:03.29\] So it sounds like almost that there is a sort of shift of mindset, or at least a tendency now to think of interactions more in a multi-modal sense than "I'm just gonna consider text" or "I'm just gonna consider speech" or "I'm just gonna consider video and camera feeds." There's more of an appetite to think about interactions more holistically. Is that something you're seeing?

**Jeff Adams:** Yeah, absolutely. I do see a shift toward multimedia interactions with computer, where speech plays an important role, but it's not exclusive. And one thing I should say is we're talking here about computer-human interaction predominantly, but speech technology also plays a role in human-human interaction, where the speech technology might just be listening in on a conversation when you're talking to someone helping you at the bank, and it might be helping the person at the bank recognize what you said, or maybe giving you -- you know, you're asking about you wanna invest in an IRA, and the speech system might eavesdrop on you and pop up some helpful information to the representative at the bank, so that they better know how to help you. Or it might coach them to say "You're talking too fast. Slow down", or whatever. So it's not just computer-human interfaces, but speech technology can also be used in improving human-to-human interactions.

**Chris Benson:** You raise a great point, that we are multi-modal ourselves, and that we are not always directly multi-modal, but that we have all these kind of ancillary interactions, as you pointed out in your bank example, of kind of hearing the next person over having their conversation. Going forward, is speech integrated into that multi-modal in all of these direct and indirect ways kind of the way forward? We have just kind of come through a time period where we tend to think in terms of single modes, and that's now finally changing... And maybe we're getting - dare I say - a little bit more human in the way that we're actually approaching it by pulling these together?

**Jeff Adams:** I hope so, yeah. That's what I hope we're doing. I hope the singularity is not our robot overlords taking over, but rather us using all of this enhanced technology to help us deal better with each other, and with the tasks that we have to do. And that will definitely be multi-modal. It can't just look at one or the other aspect of the way we communicate and interact with each other.

**Chris Benson:** And I like the reference back to your Kurzweil roots, you know, starting out there...

**Jeff Adams:** \[laughs\]

**Daniel Whitenack:** Full circle. I'm curious - you've mentioned a bunch of things, and I think it's fascinating how maybe some of us don't even realize all of these different areas where speech is or could be applied in both human-computer or device interactions and human-to-human interactions. I'm wondering - I know Cobalt Speech and Language has just some really great people, both developers and linguists and experts in this field... I wonder, as a group, what are the major challenges or maybe open problems or issues that your company is focused on addressing in the technology to help push it forward? What are some of those main things on your radar as a company?

**Jeff Adams:** I think the biggest challenge in any application here - probably in anything having to do with AI and machine learning, but in particular speech and language - is access to appropriate data. That's the thing that always holds us back, or always is the obstacle. Someone says "I wanna be able to detect when someone is speaking if they are inebriated." Okay, fine, but now we have to go get some recordings of people who are inebriated and not, and whatever. And getting access to sufficient amounts of data to be able to be accurate enough about that is always the challenge.

\[00:27:55.28\] One of the corollaries to that is that it is very challenging to bring this technology to speakers of other languages than the big ones, the English and the Chinese and German and whatever. If someone is speaking some dialect that only has five million speakers - which sounds like a lot of people, but five million speakers is not yet at the point to attract the attention of the big players in the field to develop speech technology for them, but it's still five million people that are missing out on this spoken language revolution in tech. So for these lesser represented languages is hard to get sufficient data that's labeled appropriately to be able to build the kind of technology that we already are starting to enjoy in the -- I don't know if we have a good word for it... Not the first world, but let's call it the first linguistic world, or something like that.

**Daniel Whitenack:** Yeah. Major languages.

**Jeff Adams:** Yeah.

**Break:** \[00:29:01.16\]

**Daniel Whitenack:** Jeff, you probably know you kind of led us into a topic that is very much a passion of mine in the organization that I'm a part of - bringing the benefits of some of this technology to local language communities all around the world, which I just think is really wonderful, and I affirm that and applaud you for your efforts in that area. One of the stories that I know that you've mentioned to me and I've read a little bit up on was this project that you've done with a group of BYU students for preservation of Cambodian stories. So I was wondering if you could tell us a little bit about how that project came up, and maybe what it's all about.

**Jeff Adams:** Sure. I'm an alumnus of Brigham Young University, and participating member in the Jesus of Jesus Chris of Latter-day Saints, and in our local congregation here in Massachusetts where I live, we have a large number of Cambodian speakers. Over the years I've had a lot of opportunity to work with them, get to know them, I've learned a few words and phrases to be able to greet them and ask them how they're doing, and so forth... I've always had this affinity for Cambodian, or Khmer - that's how you say Cambodian in Cambodian. So when I saw a story in an alumni newsletter that I got from BYU, that there was a group at BYU that was actively collecting recordings of personal histories of Cambodians, especially those who had been affected by the atrocities of the Khmer Rouge, that they were going out and they had collected 4,000 hours of stories, and that people had then manually transcribed like 1,000 of them - it struck a chord with me. I thought "These are people I care about, these are people that I've worked with."

And my first thought was "Oh, let me make sure that my friends here in Massachusetts (who are refugees) might have their own stories to tell. Let me make sure that they can contribute their stories to the collection." And then I thought "Well, wait a minute, we have here a situation where lesser-resourced languages, where we have now thousands of hours of high-quality recordings with good transcriptions for a big chunk of them", I thought "Those are the ingredients you need to develop a speech recognizer." And Cambodian doesn't have a good quality speech recognition system, so I thought we should do that.

\[00:32:00.09\] So I've asked some folks on my team here at Cobalt as a sort of a pro bono project to see what we could do on this. So we reached out to the group at BYU, and they said "Oh, that's a great idea", because they could then use the speech recognition to help transcribe the rest of their audio going forward." So BYU put up 4-5 students to do a lot of the labor of organizing the data, and making sure that things are recorded properly and transcribed properly and ready to be processed in training the models... And we at Cobalt have had people contributing in sort of an advisory role, and mentoring... So it's good all around. Students are getting an amazing opportunity of learning about how speech technology works, and we're helping them do that...

Anyway, long story short is we are close now, maybe a couple months away, from having good-quality Cambodian speech recognition, assuming - I'm gonna knock on wood - that nothing goes wrong in the meantime... Because a lot of things have to come together just right to make it happen.

But anyway, Dan, I think that's the story you wanted me to tell, that we at Cobalt are working in conjunction with folks at Brigham Young University to develop Cambodian speech recognition... And now it's got me thinking "Well, are there opportunities like that for other languages?" Could we find some other partnerships where someone who wants speech recognition for Swahili, or Aymara, or some other language, that we can go and say "Here's some audio (I don't know where we're gonna get it from), and here's a partnership where we can work together, where people from the community might work with us to develop the technology."

Anyway, it's a passion of mine to figure out how to bring this technology to the whole world, and not just leave it in the hands where it's gonna make us the most money.

**Daniel Whitenack:** Yeah, that's so wonderful. I think maybe you can read my mind a little bit at this point, because I was just thinking towards the end of your story "Hey, what learnings might you have from this initial experience that we could apply in other language communities?" It sounds like there is a -- in this case there was a partnership; there was the local language community, there was the Academic institution, and there was an industry partner. As you look back on that, what do you think -- because it sounds like you've made progress, and hopefully, like you say, knock on wood, things are coming out... In that process, any (maybe) tips or suggestions for people that are trying to maybe work on particularly AI for good types of projects, they have a passion for that and they're trying to maybe establish a partnership that would actually result in some value, and not be a sort of fun weekend hackathon project, but it would actually result in some value for the community? Any tips or thoughts or learnings that you've had over that time with that partnership that you could pass on?

**Jeff Adams:** That's a good question. The folks at BYU that are working in this Cambodian oral history project - they have done all of their recordings and transcriptions before we came on the scene... And they didn't do it with the idea that their data was gonna be used to build this speech recognizer. If they had known that going into it, they might have done a few things a little differently in the way they transcribed the audio, or the way they recorded the audio, or whatever, that might have made it a little bit easier for us... So a lot of the work that we're doing now is in adapting our training scripts and models to the data that they've collected.

I can't really fault them in any way, because that's not the purpose that they collected the data for. But if they knew that they would be doing that, it would have been nice for them to reach out ahead of time and say "Hey, we're about to collect all this data, and it's gonna be useful for speech recognition models. Is there anything we should know in how we record it and how we transcribe it and so forth?"

\[00:35:54.04\] So it's kind of a wish that doesn't really make sense in practical terms, but in general, if someone hears this and says "Oh, I'm gonna go start collecting data, or doing some work in this area for my language", I would say "Why don't you reach out first and let's get involved from the beginning?", rather than have to fix things after the fact.

**Chris Benson:** You mentioned the Khmer Rouge, and just for context for listeners who may not be familiar with that, since this dataset was in oral history - I thought that was a big enough event; it dominated that country's history for decades. That was a decades-long genocide, for those who aren't familiar. Cambodia is a very small country, and it ended up I think decimating about 25% of the country, which was like 1.5 to 2 million people died. I find - as someone who also loves history in addition to technology - the roots of that dataset as an oral history to be pretty fascinating, and I think there's a beauty in that you're able to also extract this extra, unexpected value from such a dataset to be able to produce this kind of output... Sometimes when you see these two things coming together unexpected like that, and as you were talking through that and I was kind of recalling back the history that the Cambodian people suffered through, there's definitely a beauty to that as an output, so...

**Daniel Whitenack:** Yeah, and it's kind of interesting to me, on that point, Chris, that part of the reason why this happened was because it sounds like the language community itself, those people had a desire to record this audio, had a desire to create this asset; it didn't start with technologists coming in and saying "Hey, we'd like to make this technology for you. Record all of these statements that I give you in a Google sheet", or something like that... Which, it's perfectly great if technologists want to come in and say "How can I serve a language community?" but oftentimes if it's something they don't even have a desire for, then you're probably not gonna get very far.

So it's cool that there can be these situations in which the community itself has a desire, and that can additionally have this benefit of expanding the possibilities of technology for that community. That's really cool. So Jeff, that's super-inspiring, and I'd maybe like to move a bit to ask you about the future, in terms of what you're excited about exploring in speech technology, but maybe you haven't yet. It sounds like you've explored most of the nooks and crannies of all over speech technology, but what are some things that maybe excite you in the future, and you're hoping that Cobalt gets to explore them, or that you get to explore them but you haven't quite yet? Is there anything like that that comes to mind?

**Jeff Adams:** \[00:38:40.14\] The list is long, and we would be here for another half hour if I tried to go into it all... \[laughter\] But I'm gonna cheat a little bit and answer your question without answering it... That is the thing that keeps me going and that drives me is not knowing the answer to that question. The fact that I know that a few months from now -- I'm confident that a few months from now someone will have come to me with an idea that I had not thought of before, that's intriguing, and that I'll say "Oh, yeah, that's great. Let's do that."

And while there are things right now that I wish we had more time and the funding to work on, the things that are really exciting are the things that I don't even know about yet, that are coming in a few months, or years, or whatever.

**Daniel Whitenack:** Yeah, and I guess maybe that gets to all of the information and complexity of speech and language...

**Jeff Adams:** Yeah.

**Daniel Whitenack:** Like, I don't know that I would have expected "Oh, you could maybe detect someone having heart issues from their speech." Maybe doctors - that's obvious to them, but it's not obvious to me as just sort of an everyday person... That's really a result of - hey, speech and language is really complicated, and despite our best efforts, there's still a lot of complication to explore. What do you think is driving that?

**Jeff Adams:** That's part of it. There's a lot to still explore, there's a lot we still don't understand about how to process it. It's a very complex process. A friend of mine said that speech and language is the most complicated process developed by the most advanced species. It's the pinnacle of what we can try to handle and process and take care of. But it's not just that speech and language is complex, hard to understand and hard to get right, it's also that it pervades everything, so that the applications - it's hard to anticipate where those next applications are gonna come from. There's so much explicit and implicit about how we think about speech and what we do with speech.

**Daniel Whitenack:** And just because I know that our listeners, based on what we've talked about, they're definitely gonna wanna know about all of these unexpected ways that speech technology is coming about, how can people find your podcast, The Voice Box? Where can they go to find it?

**Jeff Adams:** It's on all of the major podcast platforms, so you can go find it there. I don't know if there's a better way to tell people where to find a podcast. Maybe you know better than I do.

**Daniel Whitenack:** Yeah, we'll definitely link it in our show notes for sure, and I hope people find it and go check it out... And also check out some of those links that we've put to what Cobalt's doing, and some of the things like this project with the Cambodian audio. We'll put all those things in our show notes, so definitely check those out.

Thank you so much, Jeff, for joining us on the podcast. It was a really good time and a pleasure to talk to you, as it always is.

**Jeff Adams:** Daniel, Chris, thank you so much for your time and for having me.
