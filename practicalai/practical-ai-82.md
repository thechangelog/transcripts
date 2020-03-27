**Daniel Whitenack:** Welcome to another episode of Practical AI. This is Daniel Whitenack; I'm a data scientist with SIL International, and I'm joined as always by my co-host, Chris Benson, who is a principal AI strategist at Lockheed Martin. How are you doing, Chris?

**Chris Benson:** I am doing very well, Daniel. How's it going today?

**Daniel Whitenack:** It's going very well. You know, a lot of people working at home...

**Chris Benson:** Yeah...

**Daniel Whitenack:** This is not new to me, and really to you either, I don't think...

**Chris Benson:** Nope.

**Daniel Whitenack:** ...although travel is down... But it's been a productive few days for me, so I have no complaints. What about you?

**Chris Benson:** Other than the travel... For March and April I was going to be traveling quite a lot, and obviously not traveling at all. Working from home is normal for me, but we've entered a little bit of a weird thing; our school system locally has closed down indefinitely for Coronavirus, so as we speak, my wife is in another part of the house, home-schooling my daughter. That's a new thing for us.

**Daniel Whitenack:** Yeah, yeah. I saw, Chris, there's been a lot of posts related to AI and how that's intersected with this whole Coronavirus thing... I know there was a good blog post that I saw the other day, that kind of talked about that a little bit. I'll link that in the show notes for people if they're curious... But that's not quite the topic that we're here to talk about today.

Back in January, Chris, you and I were at the Project Voice Conference, down in Chattanooga, Tennessee, here in the U.S. At that conference I was able to meet Catherine Breslin, who is a solutions architect at Cobalt. We have Catherine with us today to talk about all sorts of things related to speech technology. Welcome, Catherine.

**Catherine Breslin:** Hi, Daniel and Chris! Thanks so much for inviting me on your show. It's great to be here to chat with you.

**Daniel Whitenack:** It's great to have you here. Before we jump into speech technology and voice assistants and speech-to-text and all sorts of things, could you just give us a little bit of your background and how you got into speech technology, and then eventually ended up doing what you're doing now?

**Catherine Breslin:** \[00:04:13.24\] Sure. I'm sure it doesn't take much to work out from my accent that I'm not from the same part of the world as you... I'm over here, based in Cambridge, U.K. I've been living here for about 15 years, and I moved here after I was at University and I was studying engineering at university. At the time, I really had no idea what it was I wanted to do as a career, but I was really intrigued by the idea, which I learned about in my final year of undergraduate studies, of getting computers to seem smart, to do things which people can do really easily. And we looked at vision and medical imaging and vision-related technologies when I was an undergraduate, and then I thought about "Well, what about language and speech? How do people do this, and how can we make computers do this?" and that let me down the path, which is how I ended up where I am now.

So I ended up studying speech and language technology, and understanding how it can make computers do some of these things, and studying Ph.D, studying a master's, and eventually ending up working at various different places along the way.

My first career was effectively in research. I was a Ph.D. student and I did research for Toshiba, in their Cambridge lab here... And ended up taking a post-doc position as well in the university, all to do research into speech and language technology.

Then, around about 2010-2011 the whole industry was taking off, and people were actually building this technology into products and services, and I ended up leaving the research world and moving to work on the product... So I moved to Amazon. When I joined Amazon, I learned about Amazon Alexa, which was just about to be launched when I joined Amazon.

**Daniel Whitenack:** Good timing.

**Catherine Breslin:** It was really good timing to work there. I didn't originally start working on Alexa, I started working on some other products when I joined Amazon... But over time, things sort of coalesced under the Alexa umbrella, and I worked on there for a few years, before moving on to do what I do now, which is helping other businesses who want to build this technology.

**Daniel Whitenack:** Awesome. And I know that Cobalt -- tell us a little bit about Cobalt. I know that there's people there that have a long history with speech, particularly... I think Jeff Adams is there at Cobalt, and he also was at Amazon... Is that right?

**Catherine Breslin:** That's right. Jeff Adams is the CEO of Cobalt. He founded Cobalt about 5,5 years ago now, to help businesses who want to build speech and language technology, but didn't have the team to do it (or the expertise) in-house. Cobalt's really grown over the last few years to take on people who have experience working in this technology... So people from Amazon, people from other companies who've been able to build this technology in their careers, and bring them all together to be effectively the speech team for other companies.

**Chris Benson:** So I guess starting off, you were an expert in this area, and Daniel is, too; by the way, I am, of the three of us, probably the one least knowledgeable in this area, so I would love it if you would give me kind of an overview of what mainstream speech technologies look like, how they're being used... We've talked about Alexa, and obviously there's the competition to Alexa out there... Is it more than just virtual assistants? What does the landscape look like today?

**Catherine Breslin:** \[00:07:57.14\] Yeah, so maybe we can start with virtual assistants. I think they're a great way to think about it, because they contain all the different technology that's underneath them. So a virtual assistant is a pipeline of different technology that all works together to understand what you've asked and to do it. But the underlying technology can be used in different ways, and we can talk about some of those later as well... But we can start by thinking about a virtual assistant and what happens when you ask a virtual assistant to do something.

If you say "Hey, computer, play me some music" and then it starts playing you some music, there's a number of things that have to have happened for that to come true. The first thing is that the computer has to firstly wake up and start listening to you when it hears "Hey, computer", whatever it is that you've decided is going to be the wake word... And that is often a very small, low-powered speech recognition system which is sitting on a device or on your phone, that's listening very specifically for particular words.

Then it's gonna run speech recognition on what you've asked it to do. Speech recognition goes from audio to text; it's transcribing what it is that you've asked for. So it says, hopefully, "Play me some music". Although speech recognition systems are not perfect, and they make some mistakes, we hope that most of the time though it gets your request accurate enough when it transcribes it.

But that's not enough for the computer to know what to do. The computer has to sort of bucket that into one of many things that it can do... So you could have asked for playing some music, or you could have asked for buying some music. It has to distinguish those two things. You could have also asked for the weather forecast, or asked for the answer to a factual question... Which are slightly easier to think about.

So there are some things that you ask about which are close together, and some things are further apart, and the computer has to distinguish those with some sort of language understanding technology.

If you're asking about anything complicated, it not only has to bucket what you've asked, but also what particular entities you might be asking about. So you could say "Play me some music by Sting", and there it has to know that Sting is the name of the artist that you're actually after, that you're interested in hearing music from.

So this language understanding technology is going to pick out what you want to do, and the sorts of things that you want to do that with; so the artists you want to listen to, the city you want the weather forecast in, the album you want to hear, the thing you want to buy or add to you shopping basket - all of those things we have to pick out.

And then there's some computer system which is gonna take that request and go and execute it, and actually figure out what music to play back. If you play music back, you might just hear the music start to play, but you might also hear an announcement about the music that's going to play. Or if you ask for the weather forecast, you might hear it tell you the weather forecast in words... And that text-to-speech technology is the last part of the pipeline, and that's sort of like the opposite of speech recognition. In this case, you're going from text and converting it into speech that can be understood.

So you put these things together in this pipeline - you've got speech recognition, language understanding, and text-to-speech, which will combine together to give you a virtual assistant, which is going to act on what you tell it to do.

**Chris Benson:** I've got a follow-up question for you, and I'm wondering -- this is partly from the fact that I'm kind of thinking of it as a software developer in terms of how I'm thinking about asking the question... And I'm asking as the person in this conversation who knows the least about the topic. So there is a series of tasks that you've just talked about, but unlike if you're following a web page form, where you have a very explicit set of things that are gonna happen in a particular order, in this case the types of questioning as you have follow-ups on what kind of music, what artists, that kind of stuff - how does the system understand a collection of state, a collection of related conversation? How does it conceptualize when that's done? Given the fact that it is a loose, not tightly-controlled system that we're talking about.

**Catherine Breslin:** \[00:12:19.08\] Yeah, this is an interesting technical, as well as a design challenge, I think... Because if you were to say to your virtual assistant "Play me some music", you might design it such that it would -- in that case it had no information about the music you wanted to play, but it would just pick something randomly that it thought you might like, and then it wouldn't ask for any follow-up about what it was that you actually wanted to listen to.

But another person might design their virtual assistant to actually follow-up on you and say specifically "What music do you want to hear?" So there's different design choices in how you build these things, as well.

Something like music - you can have a choice that just plays random music, so you don't have to specify any further... Whereas if you're asking for the weather, you probably actually want to know where in the world you're asking for the weather for, otherwise \[unintelligible 00:13:07.23\] weather forecast. These design choices have to come into it in the very early stages, and thinking how much effort you wanna put on the user.

The second thing you wanna bear in mind is that these systems are not that great at conversation yet, and if you try and initiate long conversations with people, they can get frustrating and they can frustrate your users, too. So another design goal is to keep the conversations that they're having as short as possible.

With this in mind, you can think about which of these -- I talked about bucketing what people were asking for, and the things that they're asking about. When we bucket what a user is requesting into different categories - we call those intents.

So you might have an intent which is a "play music" intent; you might have an intent which is a "turn on the lights intent", or a "give me a weather forecast" intent. And this is just the general shape of the request that the user is asking. And then within that intent you will have a set of what gets called in various ways either a concept, or an entity, or a slot. The terms are somewhat used interchangeably. But you have some sort of entity that you're asking about... In the case of music it might be an artist name, or an album name. In the case of a weather forecast it might be the city.

Those entities, we can decide that the computer has to ask for them, or maybe they can have some default behavior, or maybe some random behavior. So the design has to choose which of these entities are desired, or necessary, in the same way you do for other programming defaults, I think.

**Daniel Whitenack:** I'm curious... I mean, you mentioned two ideas, I guess. One around the fact that these type of assistants are composed of these various components that all work together. And then second, that part of a current limitation of these systems is long conversations. We'll get into the speech-to-text and maybe speech synthesis parts here in a second, but I was wondering, if I'm right in assuming that that limitation in terms of the length of conversations, or maybe how dynamic they can be, is driven by a limitation in the sort of natural language understanding that you mentioned; I guess the middle bits. So after you've detected the speech and you've converted that into text maybe, then you have to decide what to do with it. Is it those limitations that limit how dynamic things can be at this point?

**Catherine Breslin:** I think there's a separate step which I sort of glossed over a little bit, which is managing the state of a conversation. In the past, we've designed conversations to be sort of like flow charts... And if you've ever used an old IVR system, where you've phone up and talked to it, you very much get the feeling that you're being walked through a flowchart by voice, and at some point you're being asked some piece of information and you have to fill it in.

**Daniel Whitenack:** Yeah, I did that just yesterday. \[laughter\]

**Catherine Breslin:** \[00:16:11.06\] That's still very popular. We're still working hard to deploy lots of advances... But this idea of modeling a conversation as a flow chart is quite popular. And now, advances in language understanding have meant that we can be a little bit more flexible about what we're asking for and when. So we might be able to have a user say in one single utterance everything they're asking for, whereas before we might have broken it up and asked them specifically over a number of conversation turns. This means that we have to introduce a technology which is tracking all the information that the user has given us, in sort of a dialogue states, as the user gives us different bits of information, or as they ask us to do different things.

So there's really a couple of points that are limiting what we can do. One is the language understanding technology at the moment. It can recognize broad categories of things, but a lot of what users might ask for doesn't necessarily fall in something which can be easily modeled as intents and slots. If you're just having small talk with that computer, some sort of chit-chat, that's a different kind of conversation, and that's not naturally modeled with intents and slots. So we can rule out having some of those sorts of conversations with this way of building technology.

The other thing is if you have conversation terms which happen over time and the user starts to ask for more complicated things, or they start to refer back to things that they've talked about earlier, sort of tracking those over a conversation is also quite hard. If you ask your virtual assistant, you say "What's this?" then it has to know what "this" is. It has to be able to try and figure out what you're talking about... Which can be relatively straightforward; if there's a song playing, you might assume that it's the song that's playing. But if you've talked about something previously in the conversation, it could be that. So there's a lot of complicated language-related technology to do that tracking over time, which doesn't work well at scale yet.

**Break:** \[00:18:29.01\]

**Chris Benson:** So Catherine, I'm kind of curious - we kind of launched right into assistance upfront... I'm also kind of wondering if we could lay out a landscape on how is speech technology being used outside of assistants strictly in the larger landscape. What is there in the speech community out there beyond these assistants that we've been talking about?

**Catherine Breslin:** Sure. I think one of the obvious things you can think about is just speech recognition technology on its own... So taking long streams of audio and transcribing it. And there you can think of all sorts of applications which don't fall within virtual assistants. Maybe one of the obvious ones is automated subtitling... Especially as we're moving more online and we're having more video content created, being able to automatically subtitle that can be really helpful. Not just for accessibility for people who are watching it in real-time perhaps, but also to search it later on. So if you want to come back and find particular places in a video where things were talked about, having an automatically-generated transcript can help with that. So that's one place speech recognition is used.

It can be used in other places though... There are some industries, for example, where it becomes very important to monitor conversations between people for legal reasons. If you're giving financial advice to somebody, you'll want a record of that financial advice. But manually transcribing all of these conversations gets very tedious and time-consuming, so there's great applications there to help relieve the workflow and make it easier for people to manage.

**Daniel Whitenack:** As we're getting a bit more into speech recognition, which I think (like you said) is one of the things that pops into people's minds as something that has utility both in assistance and in various other places... I know you're an expert in this technology, and I also know from our previous conversations -- I was learning from you about how speech recognition itself can be composed into various pieces, almost like a pipeline as well... I was wondering if you could cover what those steps in a typical speech recognition system are, and what their function is.

**Catherine Breslin:** Sure. As I said earlier at the beginning, the job of a speech recognition system is to take audio and to give you an estimate or a guess of what words were spoken, so to transcribe that audio... And there's three different parts that we typically break this down into.

The first part that we have is what we call a lexicon. If you think about words in a language, they are composed of different sounds. So the word "cat", for example, is composed of the sound "cuh", "ah", "t". And the word "bat" is composed of the "bh", "ah", "t". So we can take this phonetic representation of different words and create a lexicon which tells you how each word is pronounced. And in a language like English we might find that there are about 50 different sounds that we can combine together to make all the different words. So the lexicon maps words to their pronunciations.

We have then a model in the system called the acoustic model. The acoustic model, as you might guess, models the acoustic sounds and speech. This is the bit of the model which is going to tell you for each little bit of sound that someone is talking, which phoneme is likely to be spoken, which of those 50 sounds is likely to be happening at that time.

\[00:23:52.09\] And this acoustic model is going to be built on lots of audio that we know was happening in the audio, and we can build a machine learning model which is going to be able to tell us, given a huge database of sounds - well, we know what sounds are being spoken, so can we predict for a new audio what sounds are being spoken?

And then we have finally a language model. The purpose of the language model in a speech recognition system is to predict sequences of words. From a language model we might say, if the input of the language model is "Hi, my name is", then it's very likely that the next word is going to be Catherine. But the next word is very unlikely to be "goodbye". So the language model is sort of predicting which sequences of words are more likely than others.

So if we put these together, we have an acoustic model, which tells you from some audio which sounds are likely to be spoken at that time; the lexicon tells you how those sounds combine into words, and then the language model tells you how those words combine into sequences of words.

So we use these three models in a combined, decoding procedure, a decoding algorithm, to work together to tell you for a new piece of audio what words are likely to be spoken in that audio.

**Chris Benson:** I've got a question... As you've been talking about these acoustic models and language models - and I guess almost a basic question... When you talk about these, what kind of models are they? Are they statistical models, are they deep learning models? Are there other technologies that are being used to blend in? Could you talk about what those are fundamentally?

**Catherine Breslin:** Yeah. One thing I should mention is that there's what I'm talking about in terms of breaking it down into acoustic and language model and lexicon is a technology which is very common right now, but in the research community there's a lot more effort to come up with new neural network approaches to build one speech recognition system which isn't decomposed into these three parts... But I'll carry on talking about the three parts, because that's how a lot of our commercial speech recognition systems are built right now.

So the lexicon, which is basically a phonetic pronunciation of lots of words - often we have really good, high-quality handcrafted lexicons. They're written by phoneticians, and you can imagine for a language like English we have good lexicons, which have been developed over many years.

Now, obviously, language is always changing and new words come up, and new ways of using language come up... So we still have to be able to predict pronunciations of new words, but we have very good lexicons to tell us pronunciations of the vast majority of English words already... So predicting the pronunciation of new words is a smaller task.

The acoustic model and the language model then end up being statistical, machine-learned models... And the language model is trained on text, and the acoustic model is trained on audio. So two different models, trained on two different types of data.

The acoustic model, for instance - we've had great success in recent years... If you think back like 10-15 years ago, speech recognition systems didn't really work all that well, and they were using often for the acoustic models Gaussian mixture models... And one of the things that's really happened in recent years, in the past 10 years or so, is the switch from Gaussian mixture models to neural network acoustic models. That's had a really big impact on the performance of speech recognition systems. It's made them significantly more accurate over the past few years. That's come in tandem with other advances in computing power, and storage, and memory, and computation, and all these other things... But the actual switch from Gaussian mixture models (GMM) to neural networks on the acoustic modeling side has really made speech recognition systems much more accurate.

**Daniel Whitenack:** \[00:27:52.27\] So I'm curious, as I was thinking through what you were talking about with these various bits... Obviously, like you said, there's a need for this sort of expert information upfront, and that's available for languages like English, and probably less available for other languages... But I was also thinking about the side of things which is accents, and in terms of the lexicon and determining how each word is pronounced, and also for the acoustic model - I guess that's where the biggest impact is... But it seems like that filters all the way through, because even for the language model, if I understood right, you're kind of taking a sequence of sounds/phonemes and then translating that, in a sense, to actual words... So the sounds would even affect that bit, I guess, as well... So how does accent come into this?

**Catherine Breslin:** Yeah, you're right, accent touches every bit of the system. The lexicon itself is a place where you might have multiple pronunciations of a word, but they would be really standard pronunciations of a word. So you might have "the" and "thee" as pronunciations for "the", or either/eyther.

**Daniel Whitenack:** Like alternative pronunciations?

**Catherine Breslin:** Yeah, alternative pronunciations.

**Daniel Whitenack:** Gotcha.

**Catherine Breslin:** But you wouldn't necessarily handcraft in the lexicon every single accented pronunciation of something, because that would just mean you had loads and loads of entries in the lexicon, and it would get difficult for the computer to tell them apart over time, and it would make it much more difficult for the speech recognition system to work.

So if we knew we were working with particular accents, we would have different lexicons... And you see that, for example, we might have a different lexicon for the U.S. and the U.K, because they're substantially different dialects of English.

Then we have the acoustic model, and the acoustic model is modeling, as I said, the sounds of the language. And this is a neural network model right now. And if you can train this acoustic model on different variations in speech, so different accents, but also not just accents, but different noise conditions that are happening in the background, so different microphones that people are using, different distances they're talking from the microphone... There's a difference between if you're talking close-up to a microphone versus if you're talking across a room to a microphone... All of these variations go into the acoustic and are modeled there, along with some accents.

And finally, the language model - you find that accents don't just change the sounds that people say when they say things, but they might change the phrasing that people use, and the order that they say words in... And that's where the language model will pick some of that up and model that.

**Daniel Whitenack:** I'm also curious - for the acoustic model you mentioned that the upgrade in recent years has really boosted performance in terms of the use of neural networks... And for something like text, or for images, we've talked on the show about how both of these types of input data are encoded into neural network models... For example with text, maybe you do some type of encoding, or you have a vocabulary, and you're able to convert essentially strings or words into numbers. Similarly for images, there's ways of encoding images... But I was wondering - we haven't really talked a lot about audio data as an input to neural network models. Could you describe what's unique about using audio as an input, and how encoding that sort of data is maybe different?

**Catherine Breslin:** \[00:31:27.25\] Sure. So if you take a stream of audio, it has some differences from text, and it has some differences from image, as you might think, but there's a lot of stuff in common, as well. So if you take a stream of audio, what we tend to do is we split it into small segments; each segment of audio might be about 25 milliseconds long. So we have a long stream of audio which gets split into discrete segments. And each of these segments is gonna be one input frame, it's gonna be one feature, one vector, one feature vector in our input to our machine learning model. So the next step then is to take these 25 millisecond segments of audio and convert them into a vector representation.

So we'll typically take this small segment of audio and we'll do a Fourier transform on it to give you the frequency distribution in that segment of audio. then we will have a filter bank, which is a particular kind of set of filters, triangular filters, which are centered on specific frequencies which follow a scale to sort of mimic the human \[unintelligible 00:32:36.04\] a little bit.

The filters might be spaced further apart in the higher frequency band, because in the lower frequency bands - that's where it is the most sensitive. So we parse the frequency spectrum through this filter bank just to get a set of filter bank coefficients, which we can use as features for our neural networks.

**Break:** \[00:33:08.16\]

**Chris Benson:** Catherine, I'm kind of curious -- I've been learning a lot from you here today, thank you very much... What is the state of speech recognition right now for high-resource languages? What does the accuracy look like at this point? What are the current challenges that you guys are dealing with going forward, and what kind of improvements are you expecting or striving toward to meet those current challenges?

**Catherine Breslin:** I think you're right to think about high resource languages versus low resource languages, because we've been doing speech recognition research in English for many years now... So obviously, there's a lot more data available, a lot more benchmarks, a lot more knowledge that's being spread around. There are still some challenges when it comes to building good speech recognition systems, and they have different dimensions of difficulty to deal with.

Noise is one dimension. If you're speaking in a nice, quiet room, there's a very different speech recognition performance than if you're speaking in a car, or if you're speaking in a noisy environment, like you have some machinery behind you, things like that. So noise is still one thing which makes speech recognition hard.

There's other challenges as well, such as the style of speech... So when some is speaking, if they're standing up addressing people, or if they are reading text, they speak in very different ways to if you're just having a back-and-forth conversation in a meeting room with some friends. People are much less formal when they're having lots of heated discussions, and the voice and the way they say things are slightly different. So that's another dimension of difficulty there, in that if you're trying to recognize people reading a passage of text to a large group of people, that's easier than trying to transcribe people in a meeting, where they're passionately discussing lots of different ideas.

Things like accent is also something which can be difficult to deal with. If you have heavily accented English, that can make it harder to recognize... And also, if you have to recognize specific domains, specific types of language, that can be more difficult.

\[00:36:17.29\] So if you have a speech recognition model which is trained on general conversational English, but you try and use that to recognize somebody giving lectures on chemistry, you see a degradation in performance because the two scenarios are not well matched up.

I think in high resource languages we're really good at building very good, general purpose speech recognition systems. But when it comes to building specific speech recognition systems to work in specific noise conditions, or for specific types of tasks like the chemistry lectures, or for specific accents, specific types of conditions, that's where I think it gets much more difficult, even in high resource languages. We don't always have lots of data in those scenarios, so that's one of the areas that we work on a lot - to try and build speech recognition systems customized to different domains, to different scenarios, to different purposes.

**Daniel Whitenack:** You brought up something that kind of made me look a little bit broader at the problem, and I was thinking mostly of "Oh, I'm gonna speak into a microphone and then the computer is gonna figure out the corresponding text..." But in scenarios where you have multiple speakers, or noise, like you mentioned, there's a lot going on there...

**Catherine Breslin:** Yup.

**Daniel Whitenack:** Do people deal with that sometimes as kind of another layer of this three-step process? Maybe speaker segmentation, or picking out speakers - can that be bolted onto the other type of system?

**Catherine Breslin:** It can be, yes. So you can identify speakers in different ways. If you have a room which speakers are sitting around and you have a microphone in the middle that is fixed, you can use a microphone array, for example. A microphone array has got more than one microphone in the middle of the table. Often some of these might have seven microphones in a circle. And there you can actually do something which I think is quite smart, which is figure out the direction that a voice is coming from, because when people speak, their voice takes a little time to travel. And if you have two microphones in the middle of the table, their voice will get to the microphone closest to them, just fractionally, before it gets to the one further away. So using that, you can figure out where in the room someone is. This is a great way to separate speakers in a room, if you have a microphone array to help you.

You might not always have a microphone array. If you've got some sort of online conferencing, where everyone's busy talking on their own computer and they are talking into a central system, you might actually have access to all of those separate microphones, which is super-helpful. But if you don't, you can use the characteristics of people's voice to tell them apart as well. So there's different ways you can do it, and you can figure out who is speaking when, and that's a task we call diarization.

**Daniel Whitenack:** So much new jargon... It's always good to parse through that.

**Catherine Breslin:** \[laughs\] Yeah... You forget that each field has its own terminology.

**Daniel Whitenack:** Yeah, exactly.

**Chris Benson:** I've got a question for you... I know that there are end-to-end approaches out there for speech recognition, and approaches specifically without multiple models involved... I'd like to know what the state of that -- I think Google has had some speech-to-speech models they've talked about in the past, and I'm sure there's others as well... Can you tell us what that looks like at this point?

**Catherine Breslin:** Yeah, sure. The idea of an end-to-end model is that you have a single neural network model; it's usually a neural network, because it's the most powerful model we have... A single neural network model where you put audio in, and you get words out. No need for a separate language model or a separate acoustic model, or even a handcrafted lexicon. A neural network is gonna model all of that internally, which I think is a really neat idea, because it just streamlines the whole process and makes it much easier to comprehend.

\[00:40:07.19\] And you're right, Google are now one of the ones who've been pushing the boundaries in this area, and it's a very big topic of research right now. If you go to the speech recognition conferences, a lot of the papers are looking into end-to-end methods for speech recognition right now.

One of the downsides of this approach I think is that you typically need quite a lot more data to be able to build them. So if you are building a speech recognition model and then you quickly want to convert it to a new scenario, and you need a lot of audio data to do that, that can get a little bit expensive... Whereas if you separated your models out into an acoustic model and a language model, you can maybe take advantage of the fact that you need text data to train your language model, you don't need audio... So you can do better than way, and you can separate out whether you're adapting to the language that someone's using or to the acoustics of this iteration, and make the data collection a little easier.

And to my knowledge, although this is rapidly changing and I can't claim to know the latest results, but these models tend to be sort of either on a par or just slightly worse than our current (what we call) hybrid systems - the acoustic model, language model, lexicon systems.

**Daniel Whitenack:** I'm curious -- piggybacking off of that question, it seems like maybe in the early 2010's there was this ImageNet moment for AI with computer vision; now it seems like we're in a phase where everything is about natural language processing, it's kind of having a moment in terms of text, and these large-scale language models like BERT and GPT-2 and all these things... I was curious, if you think there's going to be a similar acceleration of speech in AI at some point, and if so, maybe what's holding that back now... I was trying to process this in my own mind, and thinking "Oh well, for text we've got the whole internet of text that we can crawl and pull", and maybe there's not as much speech data, but there is a lot of audio data out there... So I don't know, do you think progress could be accelerated by the availability of more data, or is it the methodologies, or what do you think?

**Catherine Breslin:** I think that the speech community have had an awful lot of shared tasks. You said about ImageNet - ImageNet is a large shared dataset of images, and there have been over the past years plenty of large shared speech recognition tasks that different research groups have contributed to and worked on... So I think that in the way that text and images have relied on building up big datasets, I think that already exists in the speech recognition community, to some extent...

Although maybe the size of the datasets is not as large as we need, maybe the annotations are not quite there, but certainly having datasets available that people can work on and benchmark against each other has been in place for a while. I think that's actually driven some of the improvements, like I said, from GMMs to neural networks over the past few years... And having these shared tasks has meant that people can easily build and test and compare different systems.

Transcribing audio is a little more time-consuming. One of the reasons that I think it's so popular or it's been so successful is that it can just take large amounts of unlabeled data to build from... Whereas transcribing all of the speech recognition data - you might need to build up a large dataset, is time-consuming, and \[unintelligible 00:43:48.20\] to do that, to build up larger datasets. I know that one of the breakthroughs of ImageNet was having just large amounts of annotated images available for people to use.

**Daniel Whitenack:** \[00:44:00.01\] So when we're talking a speech recognition model, whether it be the hybrid approach that you're talking about, or the end-to-end approach, how much audio is needed to achieve something that's fairly useful, at least on general conversational data, maybe not domain-specific data?

**Catherine Breslin:** Yeah... We have speech recognition models, acoustic models in various languages, and one of the successful ways to build in a new language is to use transfer learning... So to take an English acoustic model, take off the last layer, put on a new last layer that represents, say, German, and train the last layers using a smaller amount of German data. So we're in a really good position having good English acoustic models that we can use to transfer learning to new languages.

To do transfer learning to a new language, obviously, the more data you have, the better... But sort of of the order of 100 hours up to 1,000 hours of audio can get you really good starting points for your model that you want to build.

**Chris Benson:** So would automated annotation, in some way... Going back to that "What does it take to get there?", as I've been listening to you and Daniel talk about, being able to get that large volume of data annotated and transcribed in an automated way, so that it wasn't such a burden - do you think that would contribute significantly in that direction or not?

**Catherine Breslin:** Yeah, that's one of the other things that people actually do in practice as well. Speech recognition, especially if you have a commercial system that's up and running, you can have a throughput of some thousands of hours of audio, but maybe you only have capacity to transcribe 100 hours of that... So using that small amount of human-transcribed data is going to improve your performance. But then you can do unsupervised or semi-supervised learning using that automatically-transcribed data as well. It's not gonna give you the same order of magnitude of gains as having the transcribed data, but if you have more automatically-transcribed data and then you use that to update your acoustic models, that can also give you some good gains.

**Daniel Whitenack:** Awesome. Well, there's so much here to dig into further, and I know I want to after the conversation... But I was wondering if we could just kind of close out by talking a little bit about what you're excited about in terms of the future of speech technology, what are you excited about implementing or developing yourself, or what are you following? What gets you excited in this topic?

**Catherine Breslin:** What am I excited about - I am excited about the fact that we have worked out how to build this technology in English and how to scale it up, and now that there's a huge opportunity to take it out to new languages and to build things that can be helpful to people all over the world... Particularly if you think about virtual assistants and putting it all together into some sort of voice interface - I think that's a really nice, neat way to interact with computers, that can make technology accessible.

There are huge parts of the world where people don't necessarily read and write in the same way that we do, and therefore having this technology available to them is a great way to make things more level... And I think it's a great way to make technology accessible to people who can't always just use a computer.

I know I have elderly relatives who can't use a mouse or a keyboard very easily, and for them, voice technology has been really helpful to help them be able to do things that they wouldn't otherwise have been able to do.

There's different work being done in making voice technology work for people who have maybe medical conditions which affect how they speak, so helping these people be able to live more independent lives... So I think there's a huge amount of need and desire to have this technology working for a broader range of people, and I think that's what we'll see in the next few years - widening access to this technology.

**Daniel Whitenack:** Yeah, that's super-encouraging, and I'm glad you mentioned that. I'm excited to follow your work in the coming years, and I really appreciate you helping us learn about these technologies today, and taking time to share with us. Thank you so much.

**Catherine Breslin:** Yeah, my pleasure. It's been great to chat with you.
