**Daniel Whitenack:** Welcome to another episode of Practical AI. This is Daniel Whitenack, I'm a data scientist with SIL International. I'm joined, as always, by my co-host, Chris Benson, who is a tech strategist at Lockheed Martin. How are you doing, Chris?

**Chris Benson:** I am doing very well. How's it going today, Daniel?

**Daniel Whitenack:** It's going great. I don't know if we've talked about this - are you a musician, in your past, at any point?

**Chris Benson:** I have been a musician a lot in my past, but I'm not currently right now... But I love music.

**Daniel Whitenack:** I dabble a bit, so I'm pretty excited today that we have Yotam Mann, who is a musician and programmer. He's the co-founder of Never Before Heard Sounds, which uses machine learning and AI for musicians, which is pretty exciting. Welcome, Yotam.

**Yotam Mann:** Good to be here, thank you for having me.

**Daniel Whitenack:** Maybe we should just start out to let people know how machine learning maybe has been used before for music, or some things that people are trying out there... Just sort of set the landscape for us - how have people tried and maybe failed or succeeded in using machine learning in the realm of music?

**Yotam Mann:** Sure. There's been (I guess) a lot of statistical music generation for decades now. I wish I could remember this person's name, but automatic music generation sort of in the MIDI form using Markov chains has been pretty successfully used to imitate classical era composers, going back from the '80s and '90s.

**Daniel Whitenack:** And MIDI - that's m-i-d-i. For those that don't know, that's like a mark-up representation of notes and links of notes, and that sort of thing.

**Chris Benson:** \[04:07\] Sadly, I remember all this all too well... \[laughter\]

**Yotam Mann:** Yeah, thanks for stopping me, because I might speak in some other music-specific jargon... Yeah, MIDI is notes onset and offset. And more recently, a lot of stuff has been in the audio classification realm. Certainly, people wanna know when in a piece of audio someone's talking, or there's music playing, or in music information retrieval, which is a massive field. This is just all a super-broad overview, and then we'll get into this little niche corner that we occupy.

Music information retrieval, which is about figuring out what the \[unintelligible 00:04:47.19\] structure of a song is, maybe even the genre of the song... This has also been going on for more than a decade at least.

More recently, deep learning stuff has been in the realm of music generation, so really trying to get some really accurate composition length audio that maybe is in a specific style of an artist, or a period, or a location... And then the realm that we're focused on at the moment is in the audio generation realm. So forgetting the pitch MIDI format stuff, and jumping straight into "How can we make new and interesting sounds using machine learning?"

**Daniel Whitenack:** I'm wondering, as I'm thinking about this - we sort of talked about MIDI a little bit, and then we have... I think people are familiar with at least audio files; they might have mp3 files or wav files or something, but in terms of AI models and these generative models, how is audio represented in most of these models in terms of data input and generally how it's processed?

**Yotam Mann:** Yeah, great question. I would say -- you know, the MIDI to audio jump is a similar kind of leap as say like text to image. Just substantially more data to deal with, and a much more complex model. So MIDI can be represented in a number of ways. You can think of it as -- if you've ever seen a piano roll or a music box where you have all of the notes in one dimension, and then time, and another dimension... Or you can represent it just a sort of discreet onset events and offset events. There's a great piano transcription model called onsets and frames, and it is able to kind of reduce the piano transcription output to a pretty compact format by just giving you the onset and offset of events, as opposed to -- you can imagine this 2D array of data is a much bigger thing to represent.

On the audio side, there's a few ways to do it. The models that I'm typically working with are outputting sample by sample. So digital audio, like a wav file, is an array of floating-point values usually, one for each channel, and that's typically sampled at 44,000 times a second. So we're talking about quite a lot of data for things that are generating in the raw audio domain. This makes it kind of a challenge, especially a challenge to do it quickly, because it's a lot of data to generate.

**Daniel Whitenack:** Yeah, I assume that it's not that satisfying to have a generative model where maybe you hit a note on a keyboard and then seven seconds later you get the output.

**Chris Benson:** \[laughs\]

**Yotam Mann:** Yeah.

**Chris Benson:** It's delayed gratification there...

**Daniel Whitenack:** I don't know that that would promote a lot of jazz improv, and that sort of thing...

**Yotam Mann:** \[08:03\] Yeah, you can imagine how hard it would be to learn an instrument where, say, you sit down at the keyboard and you play for a minute and a half, and then it's totally silent, and then you come back and you can hear what your minute-and-a-half sounded like... It would be a pretty laborious way to learn anything.

So specifically the models that we focus on in the audio domain are real-time. So they both need to generate faster than real-time, and they need to have small enough little buffered chunks to be able to keep up with the low latency. So there's kind of two parts of real-time audio processing - one is the real-time, which is like, it takes less than a second to produce one second of audio. That would technically be a real-time model. But then a low-latency real-time model would be as soon as you ask for the beginning of the audio generation, how long does it take to give you the beginning of the response?

**Chris Benson:** You'd kind of have to be Beethoven, being the deaf composer that he was, to be successful. Otherwise, if you're having that delayed period all the way through there...

**Yotam Mann:** Exactly. Yeah, that would be tough.

**Daniel Whitenack:** These models that you're working with, these generative models -- I mean, maybe the first thing that comes to people's mind when they think of generative models is GANs (generative adversarial networks). Is that the realm of things that you're working with? What's the sort of range of those types of either frameworks or architectures that you're exploring in the audio space?

**Yotam Mann:** We had some success with GAN-based models. We actually made a little website where we show off two of these models called gan.style. You drop in an YouTube link and then it replaces the audio of that YouTube link with the audio generated from one of these models...

**Daniel Whitenack:** That sounds exciting.

**Yotam Mann:** Yeah. So the two models that we got running in the gan.style are a choir model that's generated from (I think) 11+ hours of choral church music, and a string quartet model, which is from a university computer science/music cross-over department that they released a paper with this dataset. So those are both trained using a GAN discriminator for the loss.

We've also had some luck losing the discriminator part. It trains a lot faster in these other kinds of losses that we were able to use. I think if you look at the paper out of Magenta called DDSP, you'll see a really successful version of this sort of timbre transfer, this same kind of technique turning one sound into another... And they don't use a GAN approach, they just use different loss, \[unintelligible 00:10:43.25\]

**Chris Benson:** I have almost a side question, because I'm fascinated by this, and it's a use case for GANs that we haven't talked about yet, which seems kind of weird at this point, since we all love music and everything... But I can't wonder - what drove you into this? I guess you were doing music first, and getting it? How did you combine all of this to go do this, and what was the motivation to get you going? Because as you've been explaining this, I've been wondering that along the way.

**Yotam Mann:** How does someone end up here? Good question...

**Chris Benson:** How do you end up there, yeah. I mean, really...

**Daniel Whitenack:** \[laughs\] And how can I end up in the same place?

**Chris Benson:** It sounds like a lot of fun. He was much smarter about it than we were.

**Yotam Mann:** \[laughs\] Yeah, I actually never even really thought about learning how to program or anything like that until I was kind of into my junior year of college. I studied music. I played piano and I studied jazz piano; that was kind of my whole focus. I was really interested in music production techniques and different kinds of things, but I had never expanded to the realm of entirely generative - and especially not machine learning-generated...

**Chris Benson:** That wasn't the first thing that popped into your mind studying music in school... \[laughs\]

**Yotam Mann:** \[11:58\] Yeah. So I was lucky that I went to a school that had this Computer Music department, which I didn't know was a field, and which is a very vibrant field over the past many decades, with a few kind of like bases all around the world. One of the bases is UC Berkeley, the Center for New Music and Audio Technology, and I just was sort of enamored by the way that people were making music there, in this entirely new -- it seemed really innovative... It seemed like the -- the stuff that they're making is a huge departure from anything that you could do using different techniques. So that kind of led me down this route of "Okay, how can technology make new music? How can it keep progressing and pushing music forward?"

I had done many projects in music technology, building synthesizers, building even music generator systems, doing some generative music for video games, different things... And maybe about fours years ago or something I started to get more into "Okay, machine learning - this is the next big technology innovation. What's this gonna do for music?"

I just saw a huge, huge opportunity in all of the potential, so about two years ago I started a company with a partner, Chris Deaner, called Never Before Heard Sounds, basically entirely dedicated to this question of "Okay, what is AI/ML gonna do for music?" And specifically with the angle of... You know, there's a lot of people doing -- not a lot, but music generation systems, like for ads, or for... I totally understand the utility of that, but that for me doesn't progress music. That doesn't push the envelope of what's possible. It sort of puts music in this utilitarian category of - okay, music serves a function, helps you study, works really well in this ad video, and things like that, but it doesn't, like... You know, the way to progress music is to put those tools in musicians' hands, to build the instruments.

**Chris Benson:** So you're there in school, you're a junior, you have not previously done this, you discovered this... But I've gotta say - and I'm not just talking about music here - I'm thinking back to myself, and probably most people... To leap into machine learning and to suddenly be able to be a practitioner in the space - that's a tall order. That is a significant leap right there. Can you tell us a little bit about -- you know, you're a musician, you're doing this, you discovered this, you get this exposure... How did you make that jump into being a practitioner? How did you accomplish that?

**Yotam Mann:** I graduated over 10-11 years ago... So it's been a slow transition. It definitely was not something overnight. It first started with, there was this great -- you know, my primary language that I got super into after college, where it's all Python and Java, and Lisp, for some reason... Then the thing that I was most fascinated with is JavaScript, because it's like -- you program in JavaScript, people can run your applications on billions of devices, and it's a great language for that reason.

So I got into -- the first thing that I looked at with machine learning was this really simple neural net implementation in JavaScript. And I wish I could remember the name -- I remember the author's first name was Heather...

**Chris Benson:** I think I saw that. I don't remember either, but I think I rem--

**Yotam Mann:** From years ago, yeah.

**Chris Benson:** I think I remember what you're talking about.

**Daniel Whitenack:** If you know what we're talking about, let us know and we'll put it in the show notes.

**Chris Benson:** That's right.

**Yotam Mann:** \[15:47\] Yes, please. Thank you. So it was this great, compact library, and just being able to see those things in this -- you know, JavaScript is a fairly simple language. Being able to see those concepts laid out in that simple way - that was my start. In the beginning I wasn't able to really produce anything interesting or fascinating with this, but I kept trying and I keep seeing that potential.

**Break**: \[16:13\]

**Daniel Whitenack:** We were chatting before starting the recording about some of the projects that you're working on, and I think you had mentioned this one AI vocal technology that you just released, which I think is really interesting... And not only is it interesting technology, but I think it has a lot of elements in it that I think people may have follow-up questions on in terms of data and the motivation and use, all of those things... So could you just introduce that? I believe it's called Holly+. Tell us a little bit about that and how it came about.

**Yotam Mann:** Yeah. So I had mentioned this past project gan.style, and really for me the interesting thing with these models that we've been developing is -- you know, we can find cool datasets and we can train cool models, but really, I think the big leap is in letting people train their own models, and now you have a generator of your specific sound, and your grandma's piano with the one squeaky note, and the \[unintelligible 00:18:53.24\] or your specific guitar playing technique where you slap certain notes and pluck others... And obviously, the most personal instrument that we all have is our voice. It seems like the voice models are really the most interesting personal model.

So while we were developing gan.style, we were thinking about "Okay, it'd be cool to find some musical artists that we could collaborate with", and always had Holly Herndon in mind, just because she's done a lot of AI music projects... So I actually just basically tweeted at her musical partner, and we were DM-ing, and I was like -- or no, actually he had first posted on our launch day "Is there anyone out there who could help us out with machine learning? Any data scientist people, ML programmers who could help us out with the project?"

\[19:48\] I immediately responded in DM, and I was like "Yeah, what are you looking for?" He's like "Well, we wanna build a website where we could train a custom model on Holly's voice and we could have anyone upload an audio file, transform it into that custom model, and then have the results."

We had just released this gan.style, which is, you know, a lot of the same mechanism, and I had already transformed one of her songs into the choir... So I sent it to him, and I think his response was "Holly and I are freaking out. Can we talk?"

Fast-forward a few months, we had sort of repurposed this sort of GPU backend that we had developed for -- or not repurposed, but augmented now to include this Holly Herndon model, and trained a model from a bunch of recordings that she gave us with her voice... And one reason that this worked successfully is that her vocal style is not acoustic; it's very digital. It's a lot of harmonized, a lot of \[unintelligible 00:20:52.02\] a lot of digital glitches... And one thing that machine learning is really good at is producing some digital glitches. So yeah, it worked out pretty well with her voice model. And then last week we released it to the world, where anyone could drop in an audio file and have it transformed into Holly Herndon's voice.

**Daniel Whitenack:** I have so many follow-up questions on this... I don't think we'll get to them all in our interview. So you'll have to keep me on track, Chris... Maybe first off - you were talking about the voice being one of the most personal sort of instruments that we have... But also, a musician's voice - it's a big part of their livelihood, and how they make money. So what are your thoughts and what were your discussions with Holly and maybe others as you were entering into this project and the future of these types of projects around "Hey, I could get Taylor Swift's voice and I can produce my own backing track, and now I have my own Taylor Swift song and release it and stream it on some service, and now I'm making money off of it."

There's a lot of messy stuff that could come up here, so what were some of your thoughts on that, and what discussions have you had there?

**Yotam Mann:** Yeah, this was really for Holly Herndon and Mat Dryhurst the purpose of the project; the age of this, exactly what you're describing, Daniel - this is coming. And they wanted to kind of control that story and offer a version of how this could go. So they have a whole mechanism for how things that are created with this - they're free and they're able to be used, but the ownership is actually through a DAO (decentralized autonomous organization). That's their version of how this rights management could go. But I think that those are the most relevant questions when you think about these types of generative models.

Our version of this and how we have been producing and thinking about the future models that we produce is really full transparency, full attribution, and also when we get to it being able to pay the artists back that went into this model.

I have some frustration with a lot of the way that machine learning stuff goes, where it's not fully attributed datasets, or a lot of scraped datasets, and things like that... So we are trying to kind of do the hard tech in the opposite direction. All the datasets that we have are open source, or we hired our friends or musicians that we know to create a dataset that is fully licensed for this purpose of creating a generative model... And then I think when people are able to en-masse create their own generative models, then there is a really big opportunity for creating value for those institutions, like getting paid for the generative use of or the licensing of that generator. So that's kind of how I see that potential future.

**Daniel Whitenack:** \[24:15\] So Holly was a part of this process, and maybe had a vision for the future of how this data was going to be used, and potentially how her career could have benefitted from it, maybe how her bottom line and her finances could be benefitted from it... Whereas like if I go to Spotify and just use some tool to capture a bunch of audio from an artist, they have no knowledge of that particular use.

Part of it I guess is on the data side, and maybe part of it is on how the model is released. I know we've been seeing a lot more models even outside of this genre of models being released as APIs, where there's more control in terms of who's using that for what, and how that exchange of value is happening, and that sort of thing.

Do you see a lot of these models maybe in the future being released in that sort of API form? Because I could also just throw the model up on S3 or something, and then anybody can use it to generate a voice maybe.

**Yotam Mann:** Yeah, true. For the time being, we are kind of in full control of how these models are all used. So they are behind an API that we control, they are on our servers, and we are not yet at the place where we intend on open-sourcing these models or their weights, partially because of these reasons of being able to kind of control who uses it, and give value to the musician's effort that went into this, and honor that by not just giving it away for free everywhere.

**Chris Benson:** What's interesting is that this is an area, like pretty much everything we've seen in the AI/ML space, that because it's a totally new way of doing things, and clearly there will be lots of people -- I mean, you're pioneering something that I think will be huge going forward. And yet, there's the kind of AI ethical consideration that is kind of built into everything that we do. We've had this conversation across so many topic areas and stuff... It's pretty cool. So you're recognizing that early on, and there are questions that have to be figured out, like every other field... But it sounds like you're taking kind of a careful -- you know, kind of respecting that process up front. How do you shape that? As a pioneer yourself in this field, and you're looking at an industry where other people will start doing either the same or very similar things, and exploring their own creativity, just like we've seen in convolutionals, with artwork creation, in terms of visual things... How do you think that will roll out going forward, to try to have a whole new industry and music that is taking advantage of this, and merging it with existing approaches...?

**Yotam Mann:** As a small company, all we can do is kind of lead by example and hopefully make this sort of public enough information that people might expect that from other companies - full attribution of the datasets, or that the musicians involved are paid.

I guess part of it is really education of how this stuff works. I think a lot of times the story that's sort of spun is like the AI as some agent that's a magical character that's off in the cloud, doing some magic up there... But the story that we're trying to make clear is "No, that's actually not really how it works." There's a bunch of musicians, there's this condensed mathematical model, and that is a generator that you can then play with. But in the end, that model acts as a conduit between you, a musician, and the dataset musicians.

\[28:06\] So making those dataset musicians as clear as possible and making that narrative as clear as possible is our approach to it, so that when other datasets come out, I think the immediate question for consumers is hopefully "Okay, well, where did you get the data? Who's involved? What are their names? Were they paid for it?" and those kind of things. And yes, putting a face on that dataset is our approach that hopefully catches on.

**Daniel Whitenack:** And that dataset that you gathered or worked on with Holly and her collaborators - what did that end up looking like? What data was needed to actually make this happen in the end in terms of how much...? Someone could put in almost any kind of audio into this thing. We actually just had a conversation in the last released episode about out of distribution input into models, and sort of "Here you've got this whole range of whatever audio could be that could come into this", so what did it take to put the dataset together and get it behaving reasonably for a sort of wide variety of audio input?

**Yotam Mann:** It's the right question, which is like "How do you train something?" and really, it all just comes down to the dataset. So for us, it was a few iterations; we have definitely a bunch of models that didn't really come together in the end. The initial ask for Holly and Mat was "Okay, can you give us roughly two hours of audio, wav files, that are self-similar?" And the self-similar part is kind of an abstract notion, but like "Okay, whatever is the Holly sound, give us those."

So we did a few back-and-forths and we trained probably about half a dozen models on different permutations of their dataset. We built a few tools that do dataset analysis and throw out things that are too far, or the thing that ends up being really far oftentimes in audio datasets is silence... So automatic silence trimming, and things like that.

So yeah, roughly about two hours of audio is what we've been using as our rule of thumb for these datasets, but it all depends on how self-similar it is, and then what you're asking for it to do on the output. So because this was something that we wanted to be able to handle pretty much any audio file that people throw into it, we also just trained it for a really long time to try and get out all of those little weird squeaks and edge cases that happen when you ask it for something that it knows nothing about.

**Break:** \[30:48\]

**Daniel Whitenack:** Yotam, I wanna return to a comment you made much earlier, which is that one of your big focuses in your work is real-time audio processing... And you sort of described what that meant in terms of like maybe you have around 44,000 samples per second, and you're wanting to be real-time and low latency... So what has that journey been, and the tricks that you've found, and that sort of thing, in order to actually reach that level of performance in a reasonable way that you can support? Because I'm sure there's a lot of people out there that are interested in that real-time deep learning or AI side of things, maybe not even in the audio space but in video, or text processing from users, or something - what's your journey been in that real-time space and what are some of the tricks and what you've had to learn in order to reach that performance?

**Yotam Mann:** We use convolutional models. Those run the fastest, in general, and they also will give you oftentimes -- you know, because of the different convolutional layers... \[unintelligible 00:32:53.10\] bunch of garbage - I don't know how else to put it; a bunch of random stuff on either end, where there was padding added, and what we need is -- you know, which is fine if you're generating... It doesn't make -- you don't even really hear it or notice it if you generate, say, five minutes of audio... But if you generate a little, tiny, say 256-sample chunk, a large percentage of that chunk is gonna just be thing convolutional padding garbage on either end.

So there are a few different techniques to kind of deal with that. The most simple is you just sort of trim it off. The next more complicated one is you do what it would have done internally, which is you pass the end back in as the beginning, and sort of repeat that over and over again. So you're always just kind of swapping things around. That's how we've been able -- you know, most models aren't made to kind of stream this way. What I'm describing is how you make these convolutional models stream. Most of them are just made for large batch processing, and we need tiny batches that stream really fast.

Another thing that we've had a lot of luck with in terms of getting multi-x speed up, I think maybe like four or five times faster, was when we converted everything to TensorRT. That really helped. That required also changing the architecture of our model a bit to fit what TensorRT had or has implemented...

**Chris Benson:** Can you talk a little bit about making that conversion and what it was?

**Yotam Mann:** I mean, there was some just basic stuff. I use this library -- now they actually have a replacement that I think NVIDIA maybe is more officially supporting, but I was using this other library called torch2trt, that did the PyTorch to TensorRT conversion. There's a bunch of layers basically that it didn't have implemented, so I needed to kind of take a look at what their code was.

For example 1D convolution is used all over in audio, but it's kind of a niche thing. When I submitted the pull request, like "Hey, I implemented 1D convolution. This is what it is." I basically just copy-pasted, it wasn't anything crazy that I invented. I copy-pasted their 2D code and made it work for 1D. And the person who responded, his question was "What do you use this 1D convolution for?" And I think it's just like -- most people who are doing image or video stuff aren't used to seeing 1D convolution. That's probably why they didn't even bother implementing the converter.

There was another thing that came up, which was they didn't have specific kind of padding that we were using implemented, so I needed to swap out a bunch of layers... It wasn't pretty work, it was a lot of just grinding away. And there wasn't any massive epiphany that I can give you listeners. It was really just like -- yeah, I went through it step by step, and when things broke, I'd try to figure out a workaround. \[laughter\]

**Daniel Whitenack:** \[36:09\] So then do all these style transfer and real-time audio processing models in terms of making that real-time - is a GPU required at inference time, basically for all of these?

**Yotam Mann:** Yeah, for ours currently they all are. And that's what got us to actually trying to get it on little tiny pieces of hardware. NVIDIA makes--

**Daniel Whitenack:** Yeah, I've seen pictures with like a little knob and such, which was really intriguing for me, because I was like "That's really cool." I was wondering what's inside of that box, I guess, was where my question was leading... Because if all of that is requiring the GPU, what ends up having to be in that sort of small box to make that happen? Is it inspired by a sort of guitar pedal type profile?

**Yotam Mann:** Yeah, exactly. We're trying to meet musicians with the tools that they're accustomed to and the things that they have. What not a lot of people have is a Linux machine with an NVIDIA card and the specific version of CUDA installed, and all this kind of stuff.

So we're like "Okay, what we could do is have basically a little computer with a little GPU", and have everything basically pre-installed on it. And NVIDIA - they've actually now (I think) had it for a few years, but they've made some big strides with their Jetson platform, which is exactly that. It's like a Raspberry Pi with a little attached GPU. It's not even a discrete GPU, it's like an integrated GPU... But it runs all of the CUDA libraries, it does give you a big speed-up...

So we've been targeting that for sort of our real-time hardware offering, and the idea is to get it fast enough and stable enough that we could have a consumer product that that would work, yeah.

**Daniel Whitenack:** Yeah, and I guess if you had that flat form and that GPU integrated, it seems like in theory you could create a little sort of pedal-type device where you could load a whole bunch of different models on it; as you release new models, you could sort of load them on, or swap, and that sort of thing. Because I think a lot of guitar pedals it's like -- it does a specific thing. Maybe this one would be sort of flexible in that way. Is that kind of what you envision?

**Yotam Mann:** Exactly, yeah. I think that to me is the really exciting part with all of this, is the models. What can we train, what can we make a good generator of? We'll train a bunch of models, we have trained a bunch of models on different instruments and datasets that we've either licensed or recorded or open-sourced, but letting people train their own model and then passing it over to their friend and saying "Hey, this is a saxophone technique that I was playing with. Why don't you try performing violin through it?" I think that's the real exciting future.

**Chris Benson:** So when do you think -- you know, beyond the gimmick stage, when do you think we'll be going to major concerts at major venues and have that integrated into the performance itself? And not as like "Oh, we're using AI on stage", but you get past that and it's truly part of the art? It's built in as much as the instruments they're already using. Do you think that's sooner, or do you think we're still quite a ways from that at this point?

**Yotam Mann:** I think if we have our way, then it will hopefully be pretty soon, yeah.

**Chris Benson:** Okay, good answer.

**Yotam Mann:** That's exactly what we're working towards. I think that the "AI as a gimmick" will hopefully fade away, and the AI as interesting, nuanced, wild sounds and \[unintelligible 00:40:08.17\]

**Chris Benson:** Is integral to the art, yeah. Part of it, as much as every other part.

**Daniel Whitenack:** \[40:15\] Yeah, maybe that brings up another question which I've been thinking about, which is -- I mean, like you say, computers and synthesis, and actually very complicated math and all of that has been used in music for a very long time, and synthesizers and other things. What do you think creative-wise AI-based techniques provide for musicians in terms of their own composition, and that sort of thing, maybe different than computer-based music in the past? What are the qualities of AI-generated music that maybe distinguish it a little bit from what musicians might have a feeling for already in terms of synthesis?

**Yotam Mann:** I mean, I think that there's a few answers. The big one is "I don't know, and I wanna find out." Basically, Jimmy Hendrix was not possible before the electrification of the guitar. Those two things kind of go hand in hand. So much of what you hear on the radio (you know, Young Thug) being \[unintelligible 00:41:22.19\] with the autotune was not possible before autotune was a tool.

So I think really the most interesting part is how people -- what we've kind of laid out is a utilitarian thing. "Oh, I don't have a saxophonist, but I have a saxophone model, so let me use the saxophone model to generate the saxophone sound." But I think really the interesting part is where it breaks, and how that is kind of stretched to its limits to make something actually truly new. So that's what I'm most excited about.

I think another kind of thing that AI affords versus traditional techniques is more the abstract -- I'd call it sort of like a feature space. Some say a saxophonist's tone is a really sort of like abstract, nuanced, a lot of things combined to create that specific musician and their specific tone. It's kind of way too many parameters to model... Though people try and there's a lot of really cool saxophone models. But AI lets you jump that whole modeling part and just have these learned features... And then maybe you can even distill some of the learned features. Maybe you can extract attitude from the saxophone model, and maybe replace it with something else. This is another really interesting/exciting area of how these models can be used; that is a big departure from what we currently have.

**Daniel Whitenack:** Well, I know I'm super-excited to watch all of these things unfold, and also to \[unintelligible 00:43:04.08\] to plug my guitar into whenever it becomes available... Thank you so much for sharing all this with us. It's been a real pleasure, and I love just to see the creativity that people are using AI for creative tasks; I think it's really interesting. But there's also creativity in how you've gone about applying AI, which is amazing... So great work, and thank you so much for joining us.

**Yotam Mann:** Yeah, thank you both.
