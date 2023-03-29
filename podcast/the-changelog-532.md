**Jerod Santo:** Well, exciting times, to say the least... Welcome to the show, Georgi.

**Georgi Gerganov:** Nice to be here. Thank you for the invite.

**Jerod Santo:** You bet. And happy to have you on your first podcast. So we're having a first here...

**Adam Stacoviak:** Woo-hoo!

**Georgi Gerganov:** Yeah, I'm a bit excited.

**Jerod Santo:** We're excited, too. I wasn't sure you were gonna say yes; you're a very busy guy, you have -- well, at the time that I contacted you, you had one project that was blowing up... Now, since then, you have a second project that is blowing up even faster, it seems... The first one, whisper.cpp, which we took an interest in for a couple of reasons... And now, llama.cpp, which is like brand new this week, hacked together in an evening, and is currently growing in GitHub starts - according to the thing you posted on Twitter - at a faster rate than Stable Diffusion itself. Man... What's with all the excitement?

**Georgi Gerganov:** Yeah, that's a good question. I still don't have a good answer for it. But yeah, I guess this is all the hype these days; people find this field to be very interesting, very useful, and somehow with these projects and with this approach that I'm having, like coding this stuff in C and C++, and running it on the CPU, it's kind of generating additional interest in this area... And yeah, so far it feels great. I'm excited how it evolves.

**Jerod Santo:** Yeah, it's pretty cool. I think that these large language models and AI has very much been in the hands of big tech, and funded organizations, large corporations, and some has been source, and we're starting to see it kind of trickle down into the hands of regular developers... And OpenAI, of course, leading the way in many ways; they have their Whisper speech recognition model, which allows for transcription, allows for translation... And your project, Whisper.cpp, which is a port of that in C and C++, was really kind of an opportunity for a bunch of people to take in and get their own hands on it, and run it on their own machines, and say "Okay, all of a sudden, because this model itself has been released, I don't need to use an API. I can run it on my MacBook, I can run it on my iPhone" - well, the new ones; it's getting run on Pixels, it's getting run on Raspberry Pi's etc. And that's exciting.

So I was just curious, when you started Whisper.cpp, why did you decide to code that up? What was your motivation for starting that project?

**Georgi Gerganov:** Yeah, I'd be happy to tell you a little bit the story about how it came together... But as you mentioned - yes, the big corporations are producing and holding most of the interesting models currently, and being able to run them on consumer hardware is something that sounds definitely interesting.

\[00:07:37.26\] Okay, so Whisper.cpp was kind of a little bit of luck and good timing... Actually, most of the stuff has been this way... \[laughter\] How it started - so Whisper was released in the end of September last year, and by that time I was basically a non-believer, a non-AI-believer; I didn't really believe much in the neural network stuff... I don't know, a more conservative point of view. I was wondering, usually, why are these people wasting so much effort on this stuff. But I had a totally ignorant point of view; I wasn't really familiar with the details, and stuff like this.

But when Whisper came out, I happened to be working on a smaller library... It was kind of a hobby project. Basically, this is the ggml library, which is at the core of Whisper.cpp, and it's a very \[unintelligible 00:08:39.10\] project, implementing some Tensor algebra. I was doing this for some machine learning task, work-related stuff also. But I usually hacked quite a lot of projects in my free time, like side projects, trying to find some cool and interesting ideas, and stuff like this... And usually, I do this in C++, but I was looking to change it a little bit, so ggml was an attempt to write something in C, like real men do... \[laughter\]

**Adam Stacoviak:** For sure.

**Georgi Gerganov:** Yeah. So I was working on this library, I wanted it to have some basic functionality, make it kind of efficient, very strict with the memory management, avoid unnecessary memory allocation, have \[unintelligible 00:09:31.10\] Some kind of a tool that you can basically use in other projects to solve different machine learning tasks. I wasn't thinking about neural networks a lot, as I mentioned. It was kind of not interesting to me at that point...

Okay, so I had some initial version of ggml, and there was some hype about GPT by that time, I guess... And also, I was definitely inspired by Fabrice Bellard. He had a similar Tensor library, LibNC I think it's called... And there was an interesting idea to try to implement a transformer model; GPT-2 is such a model. And I already had \[unintelligible 00:10:22.00\] necessary functionality. So I gave it a try, I actually found some interesting blog post or tutorial, like GPT-2 illustrated, or something like this... I went through the steps, I implemented this with ggml, I was happy, it was running, it was generating some \[unintelligible 00:10:44.29\] and I think I posted on Reddit; maybe also Hacker News, I forgot... But basically no interest. And I said "Okay, I guess that's not very interesting to people. Let's move on with other stuff."

The next day, or the day after that, Whisper came out... And I opened the repo, OpenAI \[unintelligible 00:11:11.29\] I look at the code, and I figured basically this is like 90% I have the code already written for the GPT-2... Because like the transformer model in Whisper, it's kind of very similar to GPT-2. I mean, there are obviously some differences as well, but the core stuff is quite similar.

So I figured "Okay, I can easily port this. It might be interesting to have it running on a CPU. I know that everybody's running it on GPUs, so probably it will not be efficient, it will not be very useful, but let's give it a try." And that's basically how it came. And yeah, it slowly started getting some traction.

**Jerod Santo:** \[00:12:01.08\] So Whisper was interesting to me immediately for a couple of reasons. First of all, we obviously have audio that needs transcribed, and we always are trying to improve the way that we do everything... And so automated transcriptions are very much becoming a thing, more and more people are doing them... So first, I was like, "Okay, a Whisper implementation that's pretty straightforward to use on our own." Obviously, you called it a hobby project, "Do not use it for your production thing, do not trust it", but it's proven to be pretty trustworthy. And then the second thing that was really cool about it was just how simple it was, insofar as the entire implementation of the models containing two source files. So you have it broken up into the Tensor operations and the transformer inference. One's in C, the other is in C++... And just as a person that doesn't write C++, and doesn't understand a lot of this stuff, it still makes it approachable to me, where it's like "Okay, this isn't quite as scary." And for people who do know C and C++, but maybe not know all of the modeling side and everything else involved there - very approachable.

So a) you can run it on your own stuff, CPU-based. b) You can actually understand what's going on here if you give these two files a read... Or at least high-level. So I think that was two things about Whisper that were attractive to me. Do you think that's what got people the most interested in it?

The other thing was it was very much pro Apple silicon, pro M1, and a lot of the tooling for these things tend to be not Mac-first, I guess... And so having one that's like "Actually, it's gonna run great on Mac", because of all the new Apple silicon stuff - I guess that was also somewhat attractive.

**Georgi Gerganov:** Yeah. So what made it attractive, I guess, as you said - okay, the simplicity I think definitely. It's about ten thousand lines of code. It's not that much. But overall, this neural network is at the core there. They're actually pretty simple; it's simple matrix operations, additions, multiplications and stuff like this... So it's not that surprising.

Yeah, another thing that generated interest was the speed, and it's a bit tricky topic... But yeah, so I was mostly focused on learning this on Apple... So I don't use Python a lot, and pretty much I don't use it at all, and I don't really know the ecosystem very well... But what I figured is basically if you try to run the Python codebase on an M1, it's not really utilizing yet the available resources of these powerful machines yet, because if I understand correctly, it's kind of in the process of being implemented to be able to run these operations on the GPU, or the neural engine, or whatever. And again, maybe it's a good point to clarify here - maybe there's some incorrect stuff that I'll say in general about Python, and transformers, and stuff like this, so don't trust me on everything, because I'm just kind of new to this.

Okay, so you run it on an M1... The Python is not really fast, and it was surprising when I ran it with my port, it was quite efficient, because for the very big matrix multiplications which are like the heavy operations during the computation, I was in the encoder part of the transformer, and learning those operations with the Apple Accelerate framework... Which is like an interface that somehow gives you extra processing power compared to just running it on the CPU. So yeah, it was efficient running Whisper.cpp. I think people appreciated that.

\[00:16:07.26\] There was -- I said it was a bit tricky, because there was this thing with the text decoding mode... So yeah, I'll try not to get into super-much details, but there were basically two modes of decoding the text, like generating the transcription; they call it the greedy approach, and beam search. Beam search is much heavier to process in terms of computational power compared to the greedy approach. I just had the greedy approach implemented, and it was running by default, while on the Python repo it's the beam search running by default... And I tried to clarify this in the instructions. I don't think a lot of people really...

**Jerod Santo:** Noticed the difference?

**Georgi Gerganov:** Yeah, yeah. So they're comparing a little bit apples to oranges, but...

**Adam Stacoviak:** Oh, man. Good pun.

**Jerod Santo:** Hah!

**Adam Stacoviak:** I'm curious what it takes to make a port. What exactly is a port? Can you describe that? So obviously, Whisper was out from OpenAI. That was released. What exactly is a port? How did you sort of assemble the pieces to create a port?

**Georgi Gerganov:** Yeah, I think "port" is not a super-correct word, but I don't know, usually you port some software - you can port if from some certain architecture running on a PC, and then you port it there, implement it and \[unintelligible 00:17:38.03\] Playstation, or whatever... This kind of makes more sense to call it port. Here it's just maybe a reimplementation, it's more correct to say... But basically, the idea is to implement these computational steps.

The input data, the model, the weights that were released by OpenAI - they are absolutely the same. You just load it, and instead of computing all the operations in Python, I'm computing them with C. And that's it.

**Jerod Santo:** Yeah.

**Adam Stacoviak:** Gotcha.

**Jerod Santo:** You probably recall, when Whisper first dropped I did download it and run one of our episodes through it. This was back (I remember) on "Git with your friends" with Mat, I was talking of my pip-install hesitancy...

**Adam Stacoviak:** Yes.

**Jerod Santo:** Some of that is with regards to Whisper... Because like Georgi, I'm not a Python developer, and so I'm very much coming to Whisper as a guy who wants to use it to his advantage, but doesn't understand any of the tooling, really... And so I'm kind of prodding at a black box, and following instructions... And I got it all installed, and I ran everything, and I took one of our episodes and I just kind of did their basic command line flags that they say to run, with like the median model, or whatever it was; kind of like the happiest path. And I ran our episode through it, and it did a great job. It transcribed our episode in something like 20 hours on my Mac.

So you remember at that time, Adam, we were talking about like "Well, we could split it up by chapter, and send it off to a bunch of different machines, and put them back together again", because we were like "20 hours is a little faster than our current human-based transcriptions, but still, it's pretty slow." And I did the same thing with Gerogi's Whisper.cpp when he dropped it in September/October, whenever that happened to come out... And again, just the approachability of like "Okay, clone the repo, run the make command, and then run this very simple ./main", whatever, pass it your thing.

**Adam Stacoviak:** Yeah.

**Jerod Santo:** And the exact same episode - it was like 4-5 minutes, versus 20 hours.

**Adam Stacoviak:** Wow.

**Jerod Santo:** \[00:19:49.18\] Now, I could have been doing it wrong... I'm sure there's ways of optimizing it... But just that difference was "Okay, I installed it much faster", I didn't have to have any of the Python stuff, which I'm scared off... And, at least in the most basic way of using each tool, it was just super-fast in comparison. And that was just exciting. I'm like "Oh, wow, this is actually approachable", I could understand it if I needed to, and it seems like, at least on an M1 Mac, it performs a whole lot better, with pretty much the same results. Because, like Georgi said, it's the same models. Like, you're using the same models, you're just not using all the tooling that they wrote around those models in order to run the inference, and stuff.

**Adam Stacoviak:** And you're speaking to the main directory in the examples folder for Whisper.cpp. There's a readme in there that sort of describes how we use the main file, and pass a few options, pass a few .wav files, for example, and out comes a transcript, \[unintelligible 00:20:46.10\] flags you can pass to the main.cpp C++ file, essentially, to do that.

**Georgi Gerganov:** Yeah, so -- yeah, regarding the repo and how it is structured, I kind of have an experience with... I know what people appreciate about such type of open source project. It should be very simple. Every extra step that you add, it will push people away. So I wanted to make something like you clone the repo, you type make, and you get going. That's how it currently works, and the readme - there are instructions how to use it.

**Adam Stacoviak:** And I guess to prefix that, or to suffix that... The quick start guide, or at least the quick start section of your readme says "You build the main example with make, and then you transcribe an audio file with ./main, you pass a flag of -f, and then wherever your .wav file is, there you go." It's as simple as that, once you've gotten this built onto your machine.

**Georgi Gerganov:** Yeah, exactly. There are extra options, you can fine-tune some parameters of the transcription and the processing... By the way, it's not just -- okay, the main is like the main demonstration, with the main functionality for transcribing .wav files... But there are also additionally a lot of examples, like -- that's one of the interesting things also about Whisper.cpp... I try to provide very different ways to use this model; and they're mostly just basic hacks, and some ideas from people wanting some particular functionality, like doing some voice commands, like Siri, Alexa, and stuff like this. So there are a lot of examples there, and people can look and get ideas for projects.

**Break:** \[00:22:45.03\]

**Adam Stacoviak:** Going one layer deeper, maybe not even necessarily for everyone else, but for you and I, Jerod, maybe this is more pertinent - limited to 16-bit .wav files. Why is the limit to 16-bit? We often -- at least I record in 32-bit. So when I'm recording this, I'm tracking this here in Audition, my .wav files are in 32-bit, because that gives a lot more information, you can really do a lot in post-production with effects, and stuff like that, or decreasing or increasing semblances, and just different stuff in audio to kind of give you more data... And I guess in this case you're constrained by 16-bit .wav files. Why is that?

**Georgi Gerganov:** Yeah, the constraint is actually coming from the model itself. Basically, OpenAI, when they trained it, I think they basically used this type of data format, I guess... So you have to give to the model -- the input audio that you give, it has to be 16 kHz.

**Adam Stacoviak:** 16-bit .wav files is in your readme, so I'm going based on that.

**Georgi Gerganov:** It's probably a mistake... Ah, okay... Yeah, it's 16-bit PCM. Okay, it's -- yes, integers, not floats. Yeah, okay, so it's 16-bit an it's also 16 kHz. But yeah, technically, you can \[unintelligible 00:26:26.28\] and convert any kind of audio, whatever sample to 16.

**Adam Stacoviak:** For sure.

**Georgi Gerganov:** And would you get better results if the model was able to process a higher \[unintelligible 00:26:40.29\]

**Adam Stacoviak:** It's just one less step, really, because -- you know, you've got the ffmpeg here, now you've got... So you have one more dependency really in the chain of -- if we were leveraging, say, this on a daily basis for production flows to get transcripts, or most of the way for transcripts... So that's just one more step, really. It's not really an issue necessarily, it's just one more thing in the toolchain.

**Georgi Gerganov:** Yeah, that's the drawbacks of C, and this environment; you don't have Python, you just pip-install whatever, and \[unintelligible 00:27:08.29\] Here it's more difficult, and you have to stick to the basics.

**Jerod Santo:** So your examples have a lot of cool stuff: karaoke style, movie generation, which is experimental... You can tweak the timestamping and the output formats kind of to the hilt to get exactly what you're looking for... And then also you have a cool real-time audio input example, where it's basically streaming the audio right off the device into the thing, and saying what you're saying, while you're saying it, or right after you say it... I hear the next version it's gonna actually do it before you say it, which will be groundbreaking... \[laughter\] But what are some other cool things that people have been building? Because the community has really kind of bubbled around this program. Do you have any examples of people using Whisper.cpp in the wild, or experimentally, that are cool?

**Georgi Gerganov:** Yeah, this is definitely one of the cool parts of the project. I rewrite the contributions, and people using it, and giving feedback, and all this stuff... Yeah, there are definitely quite a few projects already running. There are people making iOS applications, macOS applications, there are companies with bigger products integrating it into their -- I'm not sure we should say names, but it's definitely being applied in different places.

I guess another interesting application is at some point we got it even running on a web page... And one of the examples was exactly that - basically, with Web Assembly you can load the model in a web page in your browser. And basically, you don't even have to install the repo or compile it; you just open the browser and you start transcribing. You still have to load the model, which is not very small... But it's amazing it can run even in a web page. I think there are a few web services that popped up using this idea, to offer you free transcription.

**Adam Stacoviak:** Kind of obvious, but could you deploy that or distribute that through Docker, a Docker container, for example? That way you could just essentially docker compose up, and boom, you've got maybe a web service on your Local Area Network, if you wanted to, just to use or play with.

**Georgi Gerganov:** Yeah, I'm not familiar with the Docker environment, but I think you should be able to do it. I see people are already using it for the Llama, and I guess there's no reason to not be able to. I don't know the details.

**Adam Stacoviak:** \[00:29:53.25\] Of course, you can do it as a web service, but sometimes you want no dependence on anybody's cloud, whether it's literally a virtual private server that you've spun up as your service, or simply "Hey, I wanna use this locally in Docker", or something like that. Essentially, you've built the server in there, you've got whatever flavor of Linux you want, you've got Whisper.cpp already in there, and you've got a browser or a web server running it, just \[unintelligible 00:30:22.08\] you can name the service whisper.lan, for example.

**Georgi Gerganov:** Yeah.

**Jerod Santo:** You can totally get that done, I think. So you brought up the fact that people are running this in the browser, in Web Assembly... Opportunistically, I'd like to get on the air my corollary to Atwood's Law that I posted last week on the socials... Do you guys know Atwood's Law? Any application that can be written in JavaScript, eventually will be written in JavaScript. Well, my corollary, which - I'm not gonna call it Santo's corollary, because that would be presumptuous... I'm not gonna call it that. I don't have a name for it yet. But it is any application that can be compiled in Web Assembly, and run in a browser, eventually will be compiled to Web Assembly and run in the browser, because it's just too much fun, right? The most recent example will be this one... But prior to that, do you know they're running WordPress in the browser now? Not like the rendered HTML of a WordPress site in your browser; the backend, in your frontend, in your browser...

**Adam Stacoviak:** Wow.

**Jerod Santo:** ...because Web Assembly. We just love it, and we're gonna love everything in it.

**Adam Stacoviak:** Why would you do that?

**Jerod Santo:** To show everybody that you can do it...

**Adam Stacoviak:** Okay...

**Jerod Santo:** \[laughs\]

**Adam Stacoviak:** "Look, mom. I can do this."

**Jerod Santo:** I'm sure there's other reasons, but that was pretty much what their blog post was, the folks who did it. I think it's the WASMLabs.dev folks put WordPress into the browser with Web Assembly... Because we can do it now, and so we're going to.

**Georgi Gerganov:** Yeah.

**Jerod Santo:** So that was me just being opportunistic. Back to you, Georgi. If we talk about Whisper and the roadmap... So it's 1.2, it's been out there for a while... My guess is it's probably being less important to you now that Llama.cpp is out, but we'll get to Llama in a moment... You have a roadmap on your roadmap; it's a feature that you know I'm interested in, because I told you this when I contacted you... And this goes back to the meme we created years ago, Adam; remember how we said that the Changelog is basically a trojan horse, where we invite people on our show and then we lob our feature requests at them when they least expect it?

**Adam Stacoviak:** You know, before, as I was preparing for this conversation, Jerod, I was thinking "Jerod is gonna say this in this show, for sure." "I invited you here to give you my feature request."

**Jerod Santo:** Right. And to make it a more pressure-filled feature request.

**Adam Stacoviak:** That's right.

**Jerod Santo:** But I'm just mostly joking, because I realize this seems like it's super-hard; and you can talk to that. But diarization...? I don't know if that's how you say it. Speaker identification is the way that I think about it - it's not a thing in Whisper, it doesn't seem... It's certainly not a thing in Whisper.cpp. I've heard that Whisper models aren't even necessarily gonna be good at that... There's some people who are hacking it together with some other tools, where they use Whisper and then they use this other Python tool, then they use Whisper again in a pipeline to get it done... This is something that we very much desire for our transcripts, because we have it already with our human-transcribed transcripts; it's nice to know that I was the one talking, and then Georgi answered, and then Adam talked. And we have those now, but we wouldn't have them using Whisper. And it's on your roadmap, so I know it's down there... There's other things that seem more important, like GPU, and stuff. But can you speak to maybe the difficulties of that, how you'd go about it, and when we can have it?

**Georgi Gerganov:** This feature is super-interesting from what I get from the responses... Basically being able to separate the speakers. You're right, so it's not out-of-the-box supported by the model, and there are third-party tools, and they are themselves, those tools are other networks, doing some additional processing... And again, I basically have almost absolutely no idea or expertise with this kind of stuff, and what works, and what doesn't work... Basically zero.

\[00:34:18.00\] There were a few ideas popping around using Whisper in a not traditional way to achieve some sort of diarization... And it boils down to trying to extract some of the internal results of the computation, and try to classify based on some, let's say, features, or... I don't know, I'm not sure really how to properly explain it, but...

So I tried a few things... I know people are also trying to do this... I guess it's not working out. So I don't know. This \[unintelligible 00:34:57.10\] at least from my point of view. Maybe if someone figures it out and it really works, we could probably have it someday... But for now it seems unlikely.

**Jerod Santo:** It's a pipe dream.

**Adam Stacoviak:** I don't understand why it's a pipe dream. Because there's other transcription services out there that have it, that are not LLM-based, or AI-based. They're just -- I don't know how they work, honestly... But for example, I had Connor Sears from Rewatch on Founders Talk a while back, and one of the killer features I thought for Rewatch... So just a quick summary - Rewatch is a place where teams can essentially upload their videos to rewatch later. So you might do an all-hands demo, you might do a Friday demo of like your sprint, or whatever, and new hires can come on and rewatch those things, or things around the team and whatnot, to sort of catch up. It's a way that teams are using these videos, and also the searchable transcripts, to provide an on-ramp for new hires and/or training, or just whomever, whatever. That's how they're using them.

He actually came from GitHub and they had this thing called GitHub TV when he worked there, and Connor's a designer, and long story short, they had this thing, and so he really wanted the transcription feature, and they have transcripts that are pretty amazing, and they have this diarization - I don't know if that's what they call it, but they have Jerod, Adam, whomever else, labeled. Why is it possible there and why is it such a hard thing here?

**Georgi Gerganov:** Yeah, I think the explanation is basically Whisper wasn't designed for this task, and I guess most likely they're using something that was designed for this task; some other models that were trained to do diarization. And yeah, you can always pull in some third-party project and \[unintelligible 00:36:55.16\] to do this extra step. It would be cool being able to do it with a single model, but for now it's not possible.

**Adam Stacoviak:** Is it kind of like converting your .wav file to 16-bit first, before using the model? It's like one more step in the mix, basically?

**Jerod Santo:** Yeah, but it's even worse than that, because it's a much harder step. It's basically running it through Whisper, and then running it through a separate thing, which - its entire purpose is segmentation or diarization. And then it's like two passed... Whereas what we're talking about is like ffmpeg- whatever, and it's like... This is just like the tooling around that is -- for me, there are solutions that seem like they're kind of hacky, and people are getting them to work, but it's back in the Python world again... And it's very slow because of that, from what I can tell.

**Adam Stacoviak:** You're so against Python, Jerod.

**Jerod Santo:** I don't have Python, it's just like --

**Adam Stacoviak:** This pip-install has got you really upset. We've gotta solve this.

**Jerod Santo:** No, it's just... I like the simplicity and the straightforward stuff that Georgi does. I just want it in Whisper.cpp.

**Adam Stacoviak:** I know...

**Jerod Santo:** \[00:38:02.14\] I think Whisper -- maybe Whisper 2 will just support this feature, and then we will all be happy, right? Like, you'll just upgrade your models and you'll just check it off your roadmap. But if not for something like that, I think it is probably a difficult thing to accomplish, just because the models aren't set up to do that particular task. They're just set up for speech recognition, not for speaker classification, or whatever you call it.

**Georgi Gerganov:** Yeah, with the way things are going lately, I suppose by the end of the month OpenAI will probably release a new model which supports it...

**Jerod Santo:** Yeah, exactly.

**Adam Stacoviak:** The day we ship this episode it will support that.

**Jerod Santo:** This stuff is moving at the speed of light right now, so it probably will be.

**Adam Stacoviak:** Yes.

**Jerod Santo:** By the time this ships, it'll probably be a feature of Whisper, too.

**Georgi Gerganov:** Yeah, I think so.

**Jerod Santo:** Hopefully. So the project - I should give it a shout-out. I do not dislike Python. Pyannote is what people are combining with Whisper in order to get both features through a pipeline; so if you're interested in that, people are doing it. It seems a little bit buggy. They aren't quite happy with the results, but they have some results.

**Adam Stacoviak:** You've gotta be careful, because Brett can't listen to this show, Jerod... And sometimes he even reads transcripts. He might just like scan for his name, or Python, essentially. He's got two searches on our transcripts...

**Jerod Santo:** Well, now you've just brought his name into it. He wouldn't have been able to find it until just now.

**Adam Stacoviak:** I've been thinking too behind the scenes that the fact that this runs on Apple silicon, when you've got the ARM thing that's kind of baked in there, I believe it's called Neon, which I think is pretty interesting... This Neon technology, kind of -- in that separate sort of super-processor, or additional processor speed, what did you learn or have to learn about Apple's silicon to make this project work? What did you even -- not so much learn to make it work well, but what did you learn about the processor that was like "Wow, they're doing that in this consumer-grade, pretty much ubiquitous, or available to mostly anybody who can afford it, obviously?" What did you learn about their processor?

**Georgi Gerganov:** Yeah, so ARM NEON - this is the name of the instruction set that runs on the Apple silicon CPUs - when I started ggml, I recently had my shiny, new M1; I have been using it for my workstation, transitioning from Linux...

**Adam Stacoviak:** Oh, wow. You're a Linux convert. Okay...

**Georgi Gerganov:** Yeah, but -- yeah, this machine is so good, I decided to switch, and...

**Adam Stacoviak:** You won't go back?

**Georgi Gerganov:** I think I'm not going back any time soon.

**Adam Stacoviak:** Elaborate... I'm listening, go ahead.

**Georgi Gerganov:** \[laughs\] Yeah, so I was interested in understanding how to utilize, and -- so this code, single instruction, multiple data, SIMD programming, where you utilize this instruction set to process things faster, and I wanted to get some experience into that... So I had this implemented in ggml to support for the heavy operations to use ARM NEON. And what it requires to be able to use it - just read the documentation, and figure out how to properly load and store the data in an effective manner. It's tricky stuff in general; I'm no expert by far, so I'll probably mention this at some point, but people are looking at the code lately and they're helping me optimize these parts. They're kind of difficult to code, in general.

So yeah, ARM NEON is helping for the CPU processing, and then there's this extra Apple framework, which I'm not really sure which part of the hardware it utilizes. Basically, this is the Apple Accelerate framework; it has a linear algebra API, so you can say "Okay, multiply these matrices", so it's really fast. I think it's running on something that is called AMX coprocessor, but it's not super-clear to me. I don't really care, it's just fast, so... \[laughter\] So why not use it?

**Jerod Santo:** \[00:42:23.14\] Right.

**Georgi Gerganov:** \[unintelligible 00:42:22.01\] optimizations.

**Adam Stacoviak:** What I've found interesting when I was kind of researching this a little further to prepare for this call was that this is a "secret" code processor; it's called the Apple Matrix coprocessor. AMX is what they call it. And it's a little -- it's not very well known, and so as this Apple silicon is only a couple years old, it's not that old, so even examining or building new software technology on top of it... But this is -- I think we have to look at one of the many reasons that Apple chose to abandon Intel and go their own route... And obviously, a lot of the work they did in their mobile devices, from an iPhone to an iPad, and all the things happening in their processors led them to this direction... But even this, the accelerated coprocessor that is there secretively, essentially just waiting to be tapped into is kind of interesting, just because it does what it does.

**Georgi Gerganov:** Yeah, I guess when you make your own hardware and software, you definitely get some advantages compared to not doing it. I think it's a good approach, I like this way.

**Adam Stacoviak:** We're even speculating too on Apple and artificial intelligence... And maybe this is the glimpse into their genius that is not yet revealed... Because if you can do what you've done with this code processor and this NEON ARM technology, and this AMX Apple's Matrix coprocessor, we have to wonder what are the reasons why they went this route. One, it couldn't be just simply to put it into our hands, but to put it into our hands for them to use in some way, shape or form... So it's gotta make you wonder what the future for them might be in AI, because they are really black box and secretive in terms of new features, and new products, and things like that. But this might give us a glimpse into that future.

**Georgi Gerganov:** Yeah, true. I don't know, I'm not really competent. As far as I know, the optimal way of Apple is to use Core ML, some other framework which utilizes everything, like neural engine GPU, CPU, whatever... And I think they, for example, recently demonstrated how to run Stable Diffusion with Core ML. Quite efficient.

So yeah, I guess using Accelerate is not really something new. It's probably not even the right way to go in the long run. But for now, it's okay.

**Adam Stacoviak:** It works.

**Jerod Santo:** It works for now. It's good enough for us, regular people... So on the Whisper front -- I know we should get to LLaMA here soon, because it's the most exciting new thing, and here we are, burying the lead deep into the show, like fools... But Whisper is interesting to me. The GPU support - so one of the things about it is it's simple, it's great hardware support, very generic, runs on the CPU... You do have GPU support also on the roadmap. Is that something that you're just -- you put it on there because people asked for it, or are you actually interested in this? Because it seems like it could definitely complicate things.

**Georgi Gerganov:** Yeah, GPU support I avoid, because usually you have to learn some framework, like CUDA, or OpenCL, stuff like this... Stuff like this. It's complicated, it takes time to understand everything... There are some workarounds, like using \[unintelligible 00:45:37.09\] where it kind of automatically does it for you... But I don't know, there'll be probably in the future some basic support. I think more interesting for Apple hardware is the transition of the encoder part, one of the heavy parts to the Apple Neural Engine, which we already have a prototype...

**Jerod Santo:** Oh, nice.

**Georgi Gerganov:** \[00:46:00.27\] And this will kind of speed up the processing even further.

**Jerod Santo:** Have you been able to run any benchmarks against your prototype, or have you gotten to that phase where you're actually seeing how much gains you're getting?

**Georgi Gerganov:** Yeah, actually this one's a super-cool contribution. Basically, I read about Core ML, I decided I'm probably not going to invest time in learning all this complex stuff, but certainly one day \[unintelligible 00:46:22.21\] you should see the link in the repo - how to do it, which was super-great... And he demonstrated that it's possible. We initially observed a three-times speed-up, I think...

**Jerod Santo:** Nice.

**Georgi Gerganov:** But then other people joined, they showed us how to make it even better... And I like this, because people are contributing, sharing ideas, making it faster. So I guess at least three times, but this is just the encoder. The decoder remains not optimal, so it's not super-great overall.

**Jerod Santo:** You've gotta love that moment with an open source project where you start to get significant contributions. Not drive-by readme fixes, or docs - which are helpful, but not like... Like, this is a significant contribution of a new way of doing something, or a proof of concept. That's pretty exciting. It seems like your two projects now, especially Whisper, because it's been around a lot longer, has had a lot of very smart coder types not afraid of hopping in and really helping out. Did you do anything to cultivate that, or was it just the nature of the project, that it brings a certain kind of contributor?

**Georgi Gerganov:** Yeah, I'm also wondering about this and really enjoyed it... So my previous projects - they didn't have a lot of contributions involved, and now with Whisper and LLaMA that is getting attention. Did I do anything specific? Not really... I guess just people find it -- maybe, first of all, they find it useful and they start suggesting ideas for making it even more useful. And then people eventually start \[unintelligible 00:48:08.27\] make code improvements, and stuff like this... And there is, I think -- I don't know, from my perspective it's a relatively big momentum currently. People are very interested in supporting this.

I tried to make it so they're kind of able to get into it, like create some entry-level docs and things that people can get involved... Currently, there are so many requests and issues and all this stuff, that it's kind of very difficult to handle by my own. So it would be nice to have more people involved.

**Jerod Santo:** Alright... Switching gears now. I think we put the cart before the llama, Adam... I don't know if that rings true to you.

**Adam Stacoviak:** I was actually wondering if we should have our good friend Luda bring us in... Llama, Llama, red pajama... \[laughter\] You know what I'm saying?

**Jerod Santo:** Ludacris, oh yeah...

\[sample 00:49:06.17\]

**Jerod Santo:** I've been dying to do red pajama, llama llama drama... There's all these rhymes, and --

**Adam Stacoviak:** Sure.

**Jerod Santo:** ...I haven't been able to work those in quite yet, but...

**Adam Stacoviak:** I knew you were.

**Jerod Santo:** Getting to it now, the most exciting thing on the interwebs - I guess until GPT-4 stole some steam yesterday, but... February 24th, Facebook Research, or Meta AI... Who knows what they call themselves these days... Released LLaMA, a foundational 65 billion parameter large language model. And then according to some commentary, a European alpha coder went on a bender one night and ported it to C++ so we can all run it on our Pixel phones. So that's the story, Georgi...

**Adam Stacoviak:** How do you feel about being called a European alpha bender?

**Jerod Santo:** European alpha coder. I thought that was a funny way of casting it by somebody on Twitter...

**Georgi Gerganov:** \[00:50:12.07\] Yeah, I really like this meme. It originated on Twitter, someone calling me an alpha male European, or something. I don't know. It's kind of funny...

**Jerod Santo:** So you did hack this together in an evening... Is that lore, or is that true?

**Georgi Gerganov:** Yeah, it's basically kind of true... But again, it's a combination of factors, and good timing, and some luck.

**Jerod Santo:** Right.

**Georgi Gerganov:** Basically, we had \[unintelligible 00:50:36.29\] stuff for the Whisper, just an idea working, where you basically take the model, you compress it down to 4 bits, you lose some accuracy, but it's smaller, it's faster... So we had that in ggml, and it was available.. So a few days later comes out the LLaMA, I do some calculations and I figure out "Okay, 65 billion parameters. You probably need about 40 gigs of RAM, with 4-bit quantization. So this can run on a MacBook. Why not do it?"

And yeah, it just was a matter of time to find some free time to try it, and... Yeah, last Friday, I came after work home, had \[unintelligible 00:51:26.13\] Why I was able to do it so quickly - basically, for all that I saw it's pretty much GPT \[unintelligible 00:51:34.20\] architecture with some modifications, like some extra memorization layers. It's minor changes. Basically, again, the existing code for the GPT \[unintelligible 00:51:47.08\] It happened pretty quickly.

**Adam Stacoviak:** You had a leg up. Prior art helped you, that you created.

**Georgi Gerganov:** Yes, yeah.

**Jerod Santo:** So that quote, "Success is when --" What is it, Adam?

**Adam Stacoviak:** Preparation meets opportunity, year.

**Jerod Santo:** Right? So Georgi was perfectly prepared, between this ggml library that he'd previously developed, and this knowledge he has. He was primed for this position.

**Adam Stacoviak:** For sure.

**Jerod Santo:** Yeah.

**Adam Stacoviak:** Which is great. I love it when that happens in my life, and so I applaud that moment for you... Because when you're in the trenches and you feel like you're in the wilderness and you put some code out there - in the case of Whisper.cpp you got a glimpse of your hacker direction, your hacker sense, if you wanna use a spidey sense kind of play on words... And you've done it again. Why not port another popular direction for artificial intelligence in everyday life? Boom. Done. That's my hype way, Jerod. Boom, done.

**Jerod Santo:** I like that. Boom, done.

**Adam Stacoviak:** Boom. Done.

**Jerod Santo:** Ride off into the sunset.

**Adam Stacoviak:** Yeah.

**Jerod Santo:** So why do you think people are so excited about this one in particular? I guess Whisper is very much for audio, it's more scoped to a smaller domain, whereas LLaMA is like your typical text autocomplete thing. It's gonna do -- like, "Create your own ChatGPT" is sort of... Not the pitch, but it's more akin' to that. And ChatGPT is so interesting and sticky for people that this is like "Okay, now we can go build our own little text AI." Is that why you think is why it's -- like, if you check the GitHub stars on this thing, the chart, it's pretty much straight vertical. It just goes straight up the Y axis. There's no X axis. I'm exaggerating a little bit for dramatic effect, but you know what I mean. People are really, really running this thing.

**Georgi Gerganov:** Yeah, I'm also wondering... I don't have a good answer. I guess it's the ChatGPT hype, doing inference locally, hearing your chat assistant on your device, and stuff like this... I don't know, I personally just try to kind of keep it real. As I told you, I was a non-believer a few months ago. Now it's hard to ignore...

**Jerod Santo:** \[00:54:14.10\] It is.

**Georgi Gerganov:** It seems to be working.

**Jerod Santo:** You actually seem less excited about this than anybody else who's been posting onto Mastodon and Twitter there. "I'm running it on my Pixel phone, one token per second." Obviously, slow... "I got it running on my MacBook." It's over here on this Raspberry Pi 4 now... I mean, people have kind of been invigorated by it. But what I'm getting from you, Georgi, it's like - it's cool, but it's not like... Like, maybe Whisper is even cooler?

**Georgi Gerganov:** Yeah, I actually find Whisper much more useful. It solves a very well defined problem, and it solves it really good.

**Jerod Santo:** Yeah.

**Georgi Gerganov:** So with the \[unintelligible 00:54:55.13\] generation - I mean, yeah, it's developing quite fast... I personally haven't seen anybody that's not going this direction, but... Yeah, I think people are just basically excited to be able to run this locally. I'm mostly doing it for fun, I would say...

**Adam Stacoviak:** Did you have to agree to those strict terms to get access to the model from Facebook?

**Georgi Gerganov:** I submitted a form, but...

**Adam Stacoviak:** Okay... \[laughter\] Did you read the terms?

**Jerod Santo:** Did you get the memo...?

**Georgi Gerganov:** Yeah, yeah, of course I read them. That's for sure.

**Adam Stacoviak:** Okay.

**Jerod Santo:** Why? Did you read them, Adam?

**Adam Stacoviak:** I haven't read them. I'm paraphrasing from Simon Willison's article on the subject, when he says you have to agree to some strict terms to access the model. So I just assumed that you were cool with the strict terms...

**Jerod Santo:** \[laughs\]

**Adam Stacoviak:** I make quotes here. You can't see me on video... The "strict" terms.

**Georgi Gerganov:** Yeah, I'm not distributing it, so...

**Jerod Santo:** Right.

**Georgi Gerganov:** So I'm not distributing it, so I think that's totally fine.'

**Jerod Santo:** Is that kind of how like you agree to an end user license agreement? Or you scroll at the bottom and hit the checkbox? Not you, Georgi, but the royal you, like everybody.

**Georgi Gerganov:** Yeah, of course. We just hit Agree, and...

**Jerod Santo:** Yeah, exactly. I actually had a friend who had a great idea for that back in the day, where you could provide EULA acceptance as a service... And you just go and you live somewhere where no EULAs apply, or something; like, out there in the middle of the ocean. And you then outsource the checking of the checkbox; people could just have you check it for them. And so they both give the checkbox checked, but then they have plausible deniability, because they didn't actually check it. And then one person just checks it for all of us, but that person's outside of any jurisdiction, and so we win. What do you think, Adam?

**Adam Stacoviak:** I love it. I'm gonna subscribe to that. Please, Jerod, put that link in the show notes so I can follow it and utilize that link.

**Jerod Santo:** How cool would that be?

**Adam Stacoviak:** That would be cool.

**Jerod Santo:** So now you have these two projects. One is kind of taking off, at least at the moment, more than the other one. Maybe it's merely on a hype wave, maybe there's more to it than that... Obviously, there'll be more models released soon that also need to be ported over for us... Where do you go from here? Where do you take it? Are you dedicated to doing more for Whisper? Do you think LLaMA is where you put your time? Do you not care about any of these things, you're just having fun? Because I know this is just like fun for you, right? This is not your job.

**Georgi Gerganov:** Yeah, I'm doing this basically in the free time... And - I don't know, for the moment I just plan to try to make it a bit more accessible. Maybe attract some people to start contributing and help out, because there are quite a lot of requests already popping up... And my personal interests are just try to do some other fun, cool demos, and tools, and examples, and stuff like this. I don't know, from one point of view I don't really want to spend super-much time into these projects. I prefer to get them hopefully into a state where other people are helping out, so I can do other stuff.

**Adam Stacoviak:** \[00:58:21.16\] So in terms of extensibility - you said by way of allowing others to come into the project, contribute code, help you move it along... I assume part of that is desires for other integrations with popular C++ libraries or frameworks... Our good friend, ChatGPT-4, as a matter of fact - that's the model I'm using to get this request - something like OpenCV, or I believe it's called Eigen, and potential other advantages for integrations. Are you thinking about stuff like that, where other C++ applications or libraries can leverage this work, to sort of take it to the next level or do other things with it? To give an example, OpenCV is a real-time automized computer vision library; it offers different tools. And Eigen, I believe, is something similar, where it's more around linear algebra, matrices, vectors, numerical solvers etc. related to algorithms. Have you thought about that kind of other angle, where it's not so much just you, but leverage of this in C++ land?

**Georgi Gerganov:** Yeah, my point of view for these projects - I prefer things to be super-minimal and without any third-party dependencies. I just prefer to apply it this way - keep things simple and don't rely on other stuff. If you ask the other way around, could other projects use ggml...

**Adam Stacoviak:** That's my angle, is can they use you?

**Georgi Gerganov:** I'm thinking about it, and I guess ggml is kind of... I would say it's a beginner level framework. They are really more advanced and mature frameworks for this type of processing, for sure. And even probably more efficient. I guess there's hype around ggml, because it's kind of simple and you can tweak stuff easily, and these things... But if you wanna make something like a quality product, let's say, more production, you probably should use some existing and well-established framework. But still, I'm super-surprised by the interest of ggml. Can it become something more? I don't know. Maybe. I guess we'll give it a try in some way, and see if we can evolve it. It will be -- I don't have a good vision, because I'm doing it to be useful to me. The good thing is I see people are kind of understanding it already, which I kind of did not really expect, because C stuff, and there's some weird things. But maybe - who knows, with time it can become something bigger. I'd be happy to see that happening.

**Jerod Santo:** I'm curious about your path, and maybe it can be emulated. So what if other people would love to be a European alpha male coder like yourself, Georgi?

**Georgi Gerganov:** \[laughs\]

**Jerod Santo:** How did you learn this stuff? I know obviously you've been doing this in your day job, C and C++ are programming languages you've been using, but can you share some of your path, either to maybe programming in general, but specifically getting into this world of being able to build these tools that work with these models? How did you learn this stuff?

**Georgi Gerganov:** Yeah, so I've been basically programming since pretty much high school, and I have a lot of interest in coding. I do it as a hobby, in my free time. You can see my GitHub is full of random, geeky projects, and stuff... So I basically pretty much enjoy it.

\[01:02:12.21\] My education background is physics. I started physics in university, I have a masters in medical physics... But yeah, after university I started working in the software industry... And I don't know what is the path. I feel a bit weird already to answer these types of questions, but... I just enjoyed, I found it fun... And yeah, I guess that's it.

**Jerod Santo:** Sure.

**Adam Stacoviak:** I was hoping part of your path might be the potential desire to continue to play and provide potential future ports, as Jerod kind of alluded to earlier, which was -- this kind of reminds me, Jerod, of whenever APIs were early and thriving, and you had the whole mash-up phase where you can take one thing and do another...

**Jerod Santo:** Right.

**Adam Stacoviak:** I think even Wynn, with his work early on to get into GitHub \[01:03:07.00\] it was something Octokit.

**Jerod Santo:** Octokit?

**Adam Stacoviak:** I think it was renamed to Octokit, though... It had a different name for a while there. I think potentially written in Ruby. It was an API SDK, essentially. I think of it like this. This is kind of like that era, where you have these models coming out, and you need ports, and you need this, and this is like a potential new, fertile ground for 1) not so much newcomers, because you've been programming for quite a while, but new into this scene, where you're providing high-quality ports that people are using, that have a lot of stars on GitHub, and a lot of popularity, preparation meets opportunity, obviously, and great timing... So I just think that's maybe an interesting space we're in right now with this newfound stuff happening.

**Jerod Santo:** Yeah, and I think that's totally your call, Georgi, because you're doing this because it interests you, and because you get (I don't know) intellectual stimulation from it... And if gets boring, like just porting the next big model that gets released because people expect you to, or something, I could see where that would no longer be worth it for you.

**Adam Stacoviak:** Right.

**Jerod Santo:** Do you have bigger ambitions with this, do you have an end goal in mind, or you're just kind of opportunistically following your interests and your hobby in coding up cool stuff, and a couple of things happened to be smash hits?

**Georgi Gerganov:** Like, bigger opportunities - as you can imagine, my inbox is full of people asking me to do stuff... I wasn't really planning on doing anything. There is one idea which we'll probably get to try; we'll see. And it's in the same path as I mentioned, like trying to get people involved and contribute, and try to grow this approach.

And I don't know, I personally don't have any big expectations from this. For example, I'm not gonna promise anything. I have a lot of ideas around random, cool hacks; this is what's interesting. And I'll probably eventually implement those, and share them, and I hope people like them.

**Adam Stacoviak:** One thing that Simon said - I'm gonna paraphrase one thing he said in his coverage recently of LLaMA, and he also mentions Georgi, so good to mention this... He says "That furious typing sound you can hear is thousands of hackers around the world starting to dig in and figure out what life is like when you can run a GPT-3 class model on your own hardware." I think that this conversation and what you've produced is a glimpse into that phrase, that sentence or two he'd shared... Because that's kind of what happens; you can now run this on your own hardware, an M1 Mac, or an M2 Mac if you've got Apple silicon, and get results pretty quickly; better than the 20 hours you had, Jerod, initially, with the non-C++ version of it... Which I think is pretty interesting.

\[01:06:14.18\] So I just love this... It's kind of like this new invigoration in the world, where it's like "Wow, I can run these high-class models on my own machine, and get results, and play", which I think is the most truly fun part about software development, hacking, programming, whatever you wanna call it, is this ability to play, to some degree with your own rules, in your own time, on your own machine, and not have to leverage an API, or buffering, or anything like that whatsoever with an API, where you have no rate limits... You've just got your own thing to do, and you can play with it; you can integrate ffmpeg to do different things, to preface it to a 16-bit wav, you can maybe... You know, before Whisper 2 comes out and you wanna do diarization, transcripting - you can do that, too; you don't have to wait for the thing to happen. And obviously, if Whisper 2 supports that feature, roll back your code and not use it, because it's baked into the model now... But that's the cool thing I think that's happening right now. Would you guys agree?

**Georgi Gerganov:** Yeah, I guess you don't even need heavy hardware, which is expensive, or hard to run, and maintain, and all this stuff. So it opens up interesting opportunities, for sure.

**Adam Stacoviak:** Well, even the GPU aspect. Like, you can build your own machine, you can buy a phenomenal NVIDIA or AMD GPU. You could build your own CPU up from the motherboard, to the compute, to the RAM, to the GPU... But a system on a chip is like readily available to pretty much any human being, given the money affordance in your own pocketbook to pay for, of course... But system on a chip, this Apple silicon is pretty interesting how it just bakes all that into one thing, and it's integrated. You don't have to build your own machine to get there, is the point.

**Georgi Gerganov:** Yeah. Apple silicon for me is quite exciting. I expect it to become even more approachable, and usable. Still, I think it's a bit -- still not a great idea to run this... I mean, the efficiency is not quite there yet. But with the way things are progressing exponentially, the growth of computational power, and exponential shrinkage of the models... Maybe in one year you'll be able to do it on your CPU what you're current able to do with modern GPUs, I guess. I don't know.

**Jerod Santo:** Well, Georgi, thanks so much for coming on the show, man. This has been fascinating. I love that you're just kind of the true hacker spirit of just like coding up this stuff in your free time, because it's something you love to do... And your path to get here is just like "I just code on this stuff all the time, because it's what I like to do."

Your work is helping a lot of people. It's definitely also riding the current AI hype cycle that we're currently on, so hopefully it continues to go that way. I think that we'll lose people as we go, but as things get better as well, we'll put this stuff in the hands of more and more people on their own hardware, with their own software, easily integrating... And from us - we're not quite yet using Whisper, because we're still trying to figure out that speaker identification bit. Thank you so much for guaranteeing it in the next six months... I'm just joking.

**Adam Stacoviak:** \[laughs\]

**Jerod Santo:** But we're excited about it, and we can see a future where this directly benefits us, which is super-cool, and in the meantime it's benefitting a bunch of people. So yeah, I just really appreciate you taking the time. I know you don't do podcasts, so this is your first one, and prying you away from your keyboard... I mean, think about what you could have done with this time. You could have changed the world already.

**Adam Stacoviak:** That's right.

**Jerod Santo:** But instead, you decided to talk to us, so we appreciate that.

**Georgi Gerganov:** Yeah, that's for having me. I enjoyed it.
