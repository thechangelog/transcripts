**Daniel Whitenack:** Welcome to another Fully Connected episode of Practical AI. This is where my co-host Chris and I keep you fully connected with everything that's happening in the AI community. We're gonna take some time to talk about the latest AI news and dig into some resources to help you level up your machine learning game.

My name is Daniel Whitenack, I'm a data scientist with SIL International, and I'm joined as always by most co-host, Chris Benson, who is a principal AI strategist at Lockheed Martin. How are you doing, Chris?

**Chris Benson:** I am doing very well, Daniel. How's it going today?

**Daniel Whitenack:** It's going well. I feel like I'm a bit tired, of not work necessarily, but I feel like there's been extra work recently, because there's been like normal job work, and then there's been Covid-related work, and then there's been various things to keep up with around the house... Then also ICLR is this week, which is really cool, because I can be at home, and they're doing all sorts of stuff virtually. For listeners out there that don't know, ICLR is an AI research conference.

So that's been a lot of fun... But then I kind of tried to be fitting that into the cracks, because I don't wanna miss anything... So yeah, I'm living on coffee right now. What about you?

**Chris Benson:** About the same. It's interesting; the world has changed... And you mentioned that particular conference, but really a lot of conferences are now going virtual-only, and many of them have announced that even after we get through at least this wave of Covid-19, and barring any future concerns, that they're still gonna stay virtual. So virtual conference is the new thing... So I guess we all need to get used to that.

**Daniel Whitenack:** I've seen people go back and forth, I've also seen people call for "Hey, let's not do this virtual conference thing after the crisis ends", because some people like in-person interaction. I think that, like you say, it's definitely not gonna be the same afterwards.

\[03:49\] There are a variety of people trying to make it a new type of experience. At ICLR there were a few guys from California, they built this little app -- not just for ICLR, I don't think, but someone created a space for ICLRparticipants; it's called Online Town, and it's basically like you join into ICLR Online Town, and you've got a little pixel art guy, kind of like on Zelda Game Boy, if you ever played that, and you can kind of walk around Online Town... So there's like a beach, and there's like this conference room area place, and there's like a grassy lawn...

You kind of walk around, and then everybody else in Online Town is also walking around. As you get close to them, then their video chat opens. So it's kind of like you're bumping into someone on Online Town, and you can talk to them, and introduce yourself, and then you can go down to the beach in Online Town, and talk about things, AI or not related... So that was actually incredibly fun.

**Chris Benson:** That sounds like a lot of fun. A great virtual world there.

**Daniel Whitenack:** Yeah, I was bumping into random people, and that sort of thing.

**Chris Benson:** You know, I host a local meetup here in Atlanta called The Atlanta Deep Learning Meetup... And like all the other meetups, we stopped meeting when Covid broke, but it is definitely making me think what should our meetup be going forward. And as we are temporarily shut down, I'm trying to re-envision what the meetup should be, and how much is in-person, or virtual, and how the activities might change. If conferences are very much online, maybe meetups - even if they're online or a little bit more interactive and less about presentations, so... It'll be interesting to see how meetups come back out of this as kind of the bread and butter monthly way of people interacting in this space.

**Daniel Whitenack:** Yeah. Well, you should try to create a Deep Learning Atlanta Online Town.

**Chris Benson:** There you go.

**Daniel Whitenack:** I recommend it. It was a really good time, so try that. I know a lot of people are innovating during this time, and I think Lockheed is doing even some Covid-related stuff... Is that right?

**Chris Benson:** We are indeed. I probably can't really address most of that. It has to go through official channels...

**Daniel Whitenack:** Yeah. That's in progress, and that sort of thing...

**Chris Benson:** But like any company -- I think ever company out there is having to address a number of different challenges with how they operate going forward and how they react to a world that may change. If we have a wave coming back in the fall, or whatever... So there's all sorts of stuff. We live in an interesting time.

**Daniel Whitenack:** It is an interesting time.

**Chris Benson:** Now, I'm not saying it's a good time in that way, but it's an interesting time.

**Daniel Whitenack:** \[laughs\] Well, there's a lot of innovation going. I know we've really ramped up translation efforts at SIL to get Covid-related information into local languages... Some people did some research at SIL and found that 30% of people on the planet don't have health information in their language to protect against Covid... So we actually kicked off a fundraiser this week; if you're interested in that, sil.org/covid-fund if you're interested in helping that information get translated.

**Chris Benson:** I hope people do that. You guys do awesome work, and I know we had a previous episode, which we'll put in the show notes, where you talked a bit about that... So I hope people check it out, because Daniel does some pretty amazing work, and I'm saying that out loud, since I know you're not gonna talk about your own stuff too much right now.

**Daniel Whitenack:** Yeah, definitely check that out. There's a lot of people all across the world really trying hard to get that info out.

**Chris Benson:** But speaking of info, we've had a couple of recent episodes about Covid; we'll link those. But today, since everyone is interacting online and still trying to work and still trying to figure out work... It's been a while since we've done one of these Fully Connected episodes, so we thought it might be kind of fun to just have an episode where we address some of the questions that we've run across in forums, online, related to AI.

\[07:48\] I think we did this... I don't know when this was. It was quite a few episodes ago, but we kind of searched around Quora, and Kaggle, and Stack Exchange, and Reddit, and tried to answer some of the questions - or at least discuss some of the questions if they were ridiculous, happening online. So yeah, hopefully you enjoy this episode. We've done the same here. We've basically gone around to various places online and saw what are those questions that are popping up on the top of the list, related to artificial intelligence... And we're just gonna kind of rapid-fire, go back and forth and discuss some of these. Chris, you reached out online and got some questions from listeners as well, that we can maybe discuss...

**Chris Benson:** I didn't give folks a lot of time... I announced a few hours ago that we're gonna do this on social media channels, but got some good questions.

**Daniel Whitenack:** Good.

**Chris Benson:** And interestingly, some of them are from people that are not in the AI community. They're folks in other industries and they're just wondering how AI will change the world and affect their lives... So there's gonna be a couple of those that are not, and then we can obviously handle some technical questions too, from practitioners.

**Daniel Whitenack:** Sounds great! Well, do you wanna kick it off with one of those questions from the community online?

**Chris Benson:** Sure. So a friend of mine named Jeff Pike that I used to work with at Honeywell was on LinkedIn and he pointed out that neural networks have opened up a really big surge in AI/ML, and what do we think is the next big thing. Or alternatively, what problem needs a neural network-like breakthrough to make it big going forward? I know that there's a lot of talk, especially the last few months, in that area. What do you think, Daniel?

**Daniel Whitenack:** Yeah, this is a hard question, what's the next big thing. I forget which guest it was on here...

**Chris Benson:** No pressure there.

**Daniel Whitenack:** ...that said "If you asked me to predict something, I'm 100% gonna be wrong." So whatever I'm gonna say is definitely gonna be wrong.

**Chris Benson:** Yeah, no one's allowed to hold us to anything we say on the show, okay?

**Daniel Whitenack:** \[laughs\] Yeah, so it's a good question. I think that there's no shortage of unsolved problems related to deep neural networks... So I don't think this is a situation where deep neural networks have solved a host of problems and we're gonna kind of jump to something new and totally leave those behind... Because there's so many open problems and interesting areas to explore with deep neural networks. But certainly, they're not the only thing.

I'm trying to think through the things I was seeing at ICLR this week... There's definitely some interesting stuff happening. A couple of things that I've noticed, which again, these may or may not be trends; I'm not trying to necessarily make a prediction, but I did see a good number of things related to graph neural networks and graph-structured data, more so than when I searched for that sort of stuff last year at research conferences; there didn't seem to be as much as I'm seeing now. Maybe that's because of the particular makeup of the conference, or something... But I think there is an increased interest in that sort of stuff.

I also saw some really interesting things around using ideas from physics and science, like energy-based methods, and Hamiltonian/Lagrangian-based methods... These are methods where you can kind of like in physics, where you would model the motion of complex objects, and use differential equations... And a lot of people are thinking "Well, what can we bring in from that world, and how does that combine with AI?" So I don't know, those are a couple of things that came to my mind. What about you?

**Chris Benson:** I've definitely seen both of your examples. I've seen the same. There's been more and more physics stuff coming into it in terms of solving complex physics... You mentioned graph neural networks, and we actually talked about that last week in reinforcement learning for chip design, our most recent episode with Anna and Azalia; they're both in the Google Brain team and they were talking about their use of it. So that's a very immediate thing.

\[11:49\] I think the thing that I've really noticed, especially since New Year's, is a real focus beyond deep learning. We had several years where everything was deep learning, in all capacities, and a lot of the big names, the legends in this space are really turning towards what does it take to get past that in terms of intelligence, and what are the core constituents that make up the idea of consciousness, and the focus on attention, and what do we need to add to these architectures that take them beyond the constraints or the limitations of deep learning.

So there's the research perspective, and there's the industry perspective... I think in industry we're gonna see deep learning models continuing to be very prolific and very productive for a long time to come, because you can use them in so many different applications. But I think the research world is starting to say "Okay, we've done that. How do we move past that?" So I'm really excited to see over the next year or two what kind of research directions and potentially breakthroughs might occur to lead us beyond the world of deep learning.

**Daniel Whitenack:** Yeah, definitely. I'm gonna bring in another question here... I'm gonna bring us from the future prediction to something extremely practical, because this is Practical AI...

**Chris Benson:** I knew you would... \[laughs\]

**Daniel Whitenack:** The question - I forget where I pulled this one from - "What tools do you personally use in your daily work as a data scientist? Chris, what tools are you using every day? Or maybe not every day, but often.

**Chris Benson:** Well, I've kind of selected my own tools - TensorFlow, Python... Most of the typical. I really focus on staying pretty mainstream in terms of toolsets, frankly because I'm too lazy and don't have enough time to try lots of new tools out. So I'm pretty mundane in that way. Pandas, the normal Python libraries that we all use on a day-to-day basis... But I'm also not doing hands-on data science every day. My job is fairly eclectic in terms of what I'm focusing on.

How about yourself, Daniel? What are you doing?

**Daniel Whitenack:** I think some things have changed in recent times for me. I know one thing that I've really started using pretty much every day is Google Colab Pro. People might be familiar with Google Colab, which is sort of a hosted Google Docs-like Jupyter Notebook on top of Google Cloud Instances... They have a Pro version of that, where you get prioritized access to GPUs, and you get longer runtimes, and some other niceties... And it's only $10/month, which I think is a really great deal.

**Chris Benson:** I'm a Colab user as well, and I wasn't thinking about that...

**Daniel Whitenack:** Yeah, I would definitely recommend upgrading, for sure. I pretty much -- I have two tabs open right now, so... I think that's one thing I've been using. Also because SIL uses Google Drive a lot, so I'm able to kind of organize some of my experiments stuff in with other things that people are using.

But yeah, similar to you -- I mean, I'm not too picky about frameworks and different toolsets and that sort of thing. It's pretty much whatever gets the work done or is state of the art in a certain area.

Also, I've found -- recently, I've really enjoyed working with Streamlit. We did an episode with them... And I've played around with it since then. Streamlit is this really cool thing, where a non-UI frontend person like myself can build pretty nice-looking little user interfaces, or demos for your models, or data labeling tools really easy. So I would definitely recommend taking a look at that as well.

**Chris Benson:** That sounds good. I'm just curious -- I know when you teach your classes you do both the TensorFlow curriculum and you also do PyTorch. I'm just curious, with the religious wars there...

**Daniel Whitenack:** \[15:47\] So in past trainings I've done both; I've done ones where I've just used one or the other. In the one I'm doing upcoming in May I'm gonna be using both. And my thought on that -- we'll see how it goes, I guess, but my thought on it is me as a data scientist, I have to use both... Because it's like you solve one problem, and there's this great TensorFlow implementation, and it just makes sense for you to grab that, and maybe tweak it a little bit and use it in another case, like, there's this great PyTorch implementation... Maybe it's because I'm lazy, but I'm never really starting from scratch. I'm starting from something someone has done.

**Chris Benson:** Most of us are.

**Daniel Whitenack:** From my perspective, to be functioning in this space now you have to be willing to jump around a bit... Unless maybe you work for Google, and then you always use TensorFlow; or you work for Facebook, or whoever has a standard of -- I have a lot of autonomy, so maybe that's a blessing in my case.

**Chris Benson:** But I just wanna point out - you make a great point there, in that most of us start from benefitting from the work of others, and that transfer learning effect is a powerful, powerful thing, and we're able to get a lot more done that we would otherwise do. So that's a very practical/pragmatic way of looking at that.

**Break:** \[17:06\]

**Chris Benson:** I am gonna return back to the non-technical questions that we got asked. On one of my social media channels a friend named Susan Finegold asked "What concerns me is what can be done to prevent a hostile country, or just a criminal person or a criminal enterprise from developing AI for malicious reasons? For instance, it seems like it would be easy to use AI for terrorism, or to greatly influence or change election results, or to modify digital media for nefarious purposes." The things go on and on. How do you see that, Daniel? I know we both come from these two different sides... We'll start with you.

**Daniel Whitenack:** I guess the short answer is there's nothing preventing it... Because those sorts of entities are using AI already.

**Chris Benson:** Sure.

**Daniel Whitenack:** Of course, that's sort of demoralizing, but I think if you also put it into a perspective of, you know, people have been using tech for malicious purposes since there was tech. Just like they use anything they can get their hands on for malicious purposes if they have those purposes... Of course, there's certain things where AI gives you a specific advantage that might be even greater than that of other tech, or something like that.

I know you've been thinking a lot about ethics questions, and all those things, and been leading discussions in those areas in a lot of ways... So I know there's really smart people working on this problem, and of course there's probably regulations that will be put in place to help with that, there'll be other things, but in the end I think it's gonna be one of those technologies that's always used for that purpose. My hope is that there's enough AI practitioners out there using AI for good that that's the kind of side that has the most attention.

**Chris Benson:** Yeah, and that's largely where I'm at, too. I like to believe that the vast majority of us are using AI either for just normal business purposes, with some sense of benevolence in that process... Or explicitly, as we like to talk about all the time, AI for good. There are certainly bad actors out there in the world, just as you pointed out, with technology, that will use any technology, including AI, for nefarious purposes.

\[20:12\] I can say in kind of a broad brush stroke, non-specific way, that certainly the different aspects of Western governments in general, and certainly the U.S. government, as we're here in the United States, have their eye on that. I think the U.S. military, the defense industry, the intelligence community and the law enforcement community are becoming very savvy at how to detect and understand what those threats are and trying to respond effectively to those; and I have some insight into that world.

I think, as you said, there are really smart people that are working very hard against that... So I think what I would say to Susan or anyone else is as you learn about AI in the world and some of the capabilities that we have, just like you would with email spam and other things, be practical in how you respond to different types of interactions that you have. But on the larger scale there are good folks working on that. So kind of leave it to them and be supportive of that work, and... That's where I'll stop.

**Daniel Whitenack:** Yeah, I appreciate it. That's definitely a question open for discussion, so let us know in our Slack channel or on Facebook or LinkedIn what your thoughts are there. You can join our Slack channel at Changelog.com/community. We'd love to hear your thoughts on things like that.

So I'll bring us back to more practical questions...

**Chris Benson:** Absolutely.

**Daniel Whitenack:** One of the questions I've found in the top areas on these sites was as a data scientist, do you use AutoML in your job? If yes, how? This might be a quick answer for both of us... Do you use AutoML in your job?

**Chris Benson:** Not in my job. I've played with it at home... So I kind of have my AI activities at home, where I use Colab and such, and then I have things that I do at work. Playing around at home, nothing too serious yet. I have personally not in my job.

**Daniel Whitenack:** This one is a quick one for me... I'll go with the no.

**Chris Benson:** The no...

**Daniel Whitenack:** And if you're interested in what is AutoML, we won't necessarily cover it here; there is a great episode though on it.

**Chris Benson:** There is, indeed.

**Daniel Whitenack:** It is amazing stuff. See that episode from Sherol Chen. That was a great episode about AutoML.

**Chris Benson:** We'll go for another technical one, since that was a quick one there.

**Daniel Whitenack:** Yeah, let's go rapid-fire. What is a CNN in machine learning? Hopefully we know the answer to this...

**Chris Benson:** You can go ahead and start. I wanna hear yours.

**Daniel Whitenack:** If I'm correct, CNN is a convolutional neural network. People have probably heard of this; it's sometimes called a ConvNet. These episodes we do with just Chris and I are called Fully Connected; that's purposeful, because it's actually maybe a pun, or a term of art in artificial intelligence. Fully connected means that the outputs of one node in a neural network are distributed across all the other nodes. So the nodes are all fully connected in this sort of way. So a number output coming out of one kind of goes into the inputs of the next layer.

In a convolutional neural network, which is often used for image processing, or things like object detection, or those sorts of things, where maybe people think of them mostly, are where maybe an image is represented by a matrix of numbers, or maybe multiple layers of a matrix of numbers representing various properties of the image... And in a convolutional neural network it doesn't have this sort of fully connected structure. There's actually a filter that's applied over the image and it kind of slides over the image, where a portion of that image is actually input to a function in the neural network, which outputs a number... So there's actually a dimensional change from one layer to another, because these inputs aren't fully connected in this way.

I probably didn't describe that in an extremely logical way. Maybe I wouldn't pass the data science interview, but...

**Chris Benson:** \[24:11\] No, I think you just did pass the data science interview. That was pretty good. I'll tackle it a slightly different way though, quickly. If you think of a neural network in general as being many layers of these nodes, as Daniel described, then if you think of an image and how you break down that image, and that some layers start with the most basic aspects of an image, such as a color gradient between two distinct colors, where from that you might drive a line, and if you put some of those together you might get a curve on that line, and then small basic objects are formed... And different layers in that network handle different aspects of that.

But eventually, just as you might build something up with Legos, you build up an image from these very basic constituents that each build upon each other, all the way to the complexity of maybe a very rich photograph. So that kind of break down or build up is how a convolutional neural network codes or decodes an image that it's trying to look at.

Hopefully, between the two of us -- there's two different ways of looking at the same thing.

**Daniel Whitenack:** Yeah, for sure. And of course, there's a lot of great info on those sorts of things online.

**Chris Benson:** So I have one more that I wanna throw out... It's still pretty pragmatic, it's not a technical one, but I think it's one a lot of people ask - how does one start developing an AI-enabled business solution? Because companies all over the world right now are trying to adopt and get more savvy about how they use these technologies... So why don't we talk about that? Do you wanna go or do you want me to first?

**Daniel Whitenack:** So does this mean like an AI product, or does this mean just like I'm in a company and I think I have an AI solution to this problem, and I'm gonna develop it within the company?

**Chris Benson:** I'm interpreting it as the former of the two, but you can take it any way you want.

**Daniel Whitenack:** Like an AI product.

**Chris Benson:** There you go. I'm gonna take it that way. What I tell people is "Don't start with an idea and it has to be AI-enabled." I've seen that mistake made multiple times in my career, where people are obsessed with having something that's AI. Maybe that's the marketing imperative, and sales imperative of putting an AI label on something... But it's just a tool. It's another tool in the toolbox, and different AI architectures, which you could think of as the thing that makes up a model, are good for different types of problems.

So what I tell people is don't start with "I have a product and I want it to be AI." Say "I have something in mind that I want to build (a solution, a product etc.) and part of that creation process I think would benefit from this type of problem-solving... Which, by the way, it turns out there's an AI type of architecture that lends itself very well to that particular thing."

If you do that, you end up with the Steve Jobs approach. You end up with a fantastic product, because you have the end in mind, and you use AI like you would use any other technology tool that you might choose from - each one of those bits are good for something that it should focus on.

I think that people go wrong when they start with "The end has to be an AI thing", and they'll do anything they can to fit AI into that, and they end up with a bad product or service. So start with the end in mind, like Jobs told us, and then figure out if and when AI might apply into that product development lifecycle.

**Daniel Whitenack:** Yeah, definitely. Just in case my boss is listening, he would say "How do you develop any sort of business solution? You just think about how you're going to satisfy your customers."

**Chris Benson:** That's great advice.

**Daniel Whitenack:** \[27:48\] That basically drives everything. So just satisfy your customers. If AI is needed to do that, then that's great. But there's certainly many products that don't have AI involved in them and they satisfy their customers... Like you say, it's maybe not starting with the "I'm gonna build an AI product" but "I'm gonna solve a problem" is probably the better path.

**Chris Benson:** Sounds good.

**Daniel Whitenack:** Well, let's see... Let's maybe take another couple of technical ones.

**Chris Benson:** Sounds good.

**Daniel Whitenack:** This one says "How to save a trained CNN model?" And I think maybe this would just be like "After I train my model..." - let's say I have it in a notebook, or something... I don't wanna lose it, so what do I do with it? I think that's the direction of the question. It's not necessarily specific to CNN models, even though we've just talked about CNN models. It's basically "Hey, I did the tutorial thing" or "I did the problem" or "I trained a model. Now how do I not lose that model? Where does it go? How does it live?" I think is the question.

**Chris Benson:** And maybe even "How do you deploy it?" to some degree, in terms of how does that move into the real world. What's your workflow for that?

**Daniel Whitenack:** I guess one thing to clarify here - a lot of people think an AI model is some sort of magical thing floating around in space, that kind of materializes in some way... So an AI model is really just a function in software. So if you think of a function in software, it takes input and it gives output, right? So how do you save a function in software? You just write it in a file.

The difference with an AI model versus a normal software function is a normal software function maybe takes up 100 lines of code, or whatever... And it might have some inputs, it might have some parameters, maybe it reads some environmental variables, maybe it parses a query string... Whatever it does, there's some parameters associated with it. Well, an AI model is no different - it's just a function in code. It's just that the parameter set might be kind of big; like a billion parameters, or something. But it's really no different in practice. All of that stuff is saved in a file, and then you run it in code.

So often what happens - if you train a model, you just have to output it to a file that saves all of those parameters. And there's a whole bunch of different formats for that, like TensorFlow; you can output protobuf, and other things. PyTorch and others have their own structure. There's also standardized/semi-standardized ways of doing this. There's a format called ONNX, which takes a bunch of different things from different frameworks. So really it's just that saving of the file. Then once you have it saved, in terms of deployment, then you just need to load it back into code.

Most of the times a framework like PyTorch or TensorFlow has a load model function of some type, and then you just load the file... And then you can use it.

Of course, in terms of deployment, again, it's similar to any other software code. At least that's how I think about it. If you're deploying your model and you want it to drive an API, or some web app, likely you're going to deploy it as a web service; so whatever code you have written for your web service, you need that code to execute that function that loads the model, and then takes input and gives the output. So there's a whole bunch of different ways to do that, but that's the basics, from my perspective.

**Chris Benson:** Yeah, it's funny, we're at a moment where the major platforms - and I'll tackle it a little bit more from the deployment standpoint - have their own systems... Since I've already acknowledged that I tend to be in the TensorFlow ecosystem more, they have TFX, which is TensorFlow Extended, which is what they refer to as an end-to-end platform for deploying production ML pipelines is how they say it... But in general, I think there's still a great deal of variability in the industry in terms of how different organizations do it, and their end targets in terms of where they want to get models deployed to for use - maybe it's in a data center, maybe it's out on the edge somewhere - tends to be pretty customized. There's a lot of "We've taken a system, but now we're gonna add our own special need to it."

\[32:08\] I know certainly in our organization we have some fairly unusual deployment targets by most people's standards. We definitely have to come up with an approach that works for us... So I think that's pretty typical. I don't think the world has settled in a standard way to do that, but I think the one thing -- it's still a little bit of a... I think a lot of people perceive it as a bit of a dark art to do deployment at this point.

The thing I always remind people is it's really just software development at that point, which is kind of what you were alluding to. At the end of the day you have a function, it may be different from other functions in the number of parameters, so you may have to accommodate in your architecture that you're deploying to how are you going to get all the data in if you have many inputs into your model; how do you get the data on time to that, through the model, the correct thing. That can affect your software and system architecture a bit.

But other than that, I know I have a strong preference for deploying in containers. Whereas we may use Python as a language in training, I often use the Go programming language for deployments, since you can access TensorFlow models for inference there. I like to wrap them up in a Docker container, and usually, if I have the option, deploying to a Kubernetes cluster. And that can be, like I said, in a lot of different locations.

But for the most part, as soon as you get done with training, you're really moving into a software deployment world again... Which is a little bit foreign to people who are just data scientists. But anyway, it's good, because if the data science world can figure out what it wants to do in it, there's a lot of good options there that are fairly mature.

**Break:** \[33:51\]

**Daniel Whitenack:** Let's do another one... Maybe this is a quick one.

**Chris Benson:** Okay.

**Daniel Whitenack:** This seemed to be at the top - what laptop do I buy for deep learning. My answer is "It doesn't matter."

**Chris Benson:** Yeah, mine too.

**Daniel Whitenack:** I mean, you could buy one with a nifty GPU or something, but if you're using something like Colab Pro or something to do your initial testing, and then you're deploying on some giant cluster or something that your company has, it really doesn't matter. Buy a Chromebook.

**Chris Benson:** \[36:08\] I'm the same.

**Daniel Whitenack:** I think the biggest computing I do on my laptop is running a bunch of tabs of Chrome, plus Slack simultaneously. It kind of maxes out my memory usage... So yeah, I don't know. That's my quick answer to that one. I don't know if you disagree.

**Chris Benson:** No, I would agree with you. I think a few years ago, when we were talking -- you know, a lot of people might have a desktop just for training, that they'd stick under their desk, and they'd buy a GPU to do that... But I don't see people doing that.

**Daniel Whitenack:** Personal heater.

**Chris Benson:** Yeah, personal heater under your desk, that's right. It's just what we need here in Georgia. But I don't see that very much anymore. I think everyone goes to some form of cloud, whether it be one of the public cloud providers... As we've talked about in past episodes, I'm super-lucky at work, in that we have a lot of super-computing capability on the HPC side, in terms of DGX clusters... So those are available. But when I'm coming home and when I'm working on my charitable work, or I'm applying some deep learning models for that, I'm hopping into Colab, and I'm using Google's cloud for that kind of work, and I think most people do the same... In AWS, or Google, or Microsoft, or whatever.

**Daniel Whitenack:** Alright. Next question. Let's do another maybe theory-related one. "What is back-propagation usually used for in neural networks?"

**Chris Benson:** What is it used for...

**Daniel Whitenack:** What is it used for in neural networks, that's the question. I think really the question is "What is back-propagation?" That's probably the question.

**Chris Benson:** Yeah, I think so.

**Daniel Whitenack:** Because they've probably seen this term passed around. Normally, when you write - or at least in tutorials that I've seen - code to train a neural network, most of the time there's not the "run back-propagation" function, or something. Maybe it's not specifically called out, so maybe that's the confusion... Like, "What is back-propagation usually used for in neural networks?"

So back-propagation is basically just a method that's used fairly widely and ubiquitously - is ubiquitously a word? I'm not sure...

**Chris Benson:** That's a word. It is a word. It's a good word.

**Daniel Whitenack:** ...in training neural networks. So it's used specifically at the training time. So if you think of what happens in training a neural network - we already mentioned that a neural network is basically just a function with all of these parameters... But the parameters are learned or set in this training process based on a bunch of example data. So what happens is you kind of initialize these parameters to some value. Let's say we just randomize them. Then we make predictions based on that initial guess, and then we calculate a loss based on those predictions and what we know is the right answer...

**Chris Benson:** Which is an error rate, essentially, at the end of that.

**Daniel Whitenack:** Yeah. So we calculate a bunch of errors together, and then we use however we calculated those errors or the loss function to then update our choice of parameters, what might be called weights and biases, based on that loss. And the way in which we update that is often used as a derivative of this loss function.

So we update those weights and biases, and then we look back to the beginning and try our predictions again, and then we iterate over that a whole bunch of times. And that process of iteratively updating the weights and the biases, and propagating those changes back into the network is what's called back-propagation. So it's just this methodology. Did I miss anything there, Chris?

**Chris Benson:** No, I think you got it. You mentioned about randomizing in the beginning... So that first time through, you're definitely not optimized to solve for the thing that your network is trying to learn... It's usually substantially off. And you can think of each back-prop, when it goes back to those weights, as tweaking all the weights and all the little connections in the network... And then it tries again. And each time it tweaks, it tests, and through the loss function it works its way closer and closer to a low amount of error.

\[40:06\] There's some point where you decide it's good enough, as the person training the network, and you say "When it gets to that low of an error rate, we're good to go." And that's what that propagation tries to do in a feed-forward network.

**Daniel Whitenack:** Yeah. Well, Chris, what other questions seem interesting to you?

**Chris Benson:** Okay, let's see... This is something that I get a lot at conferences, and that is "How will AI replace or change things in our lives? What does AI replace and how does it take the place of, or modernize other aspects of business, government, education, human communication and other aspects of daily life?" So it's a really broad, wide-open question, with a thousand possible answers. Take a shot at it, Daniel.

**Daniel Whitenack:** For me I think that's it's more of augmentation than a replacement. I don't mean to minimize -- there's certainly areas where people have been greatly affected through automation, and that sort of thing; so not to minimize that, but I think on the whole it's really not so much of a replacement as an augmentation.

For me, I can now have a really super-awesome autocomplete in Gmail, that really works fast and great... It didn't replace even that system for me, like Gmail or email - it didn't replace that part of my life. It just kind of augmented it in a certain way... And I think it's similar if you look at healthcare and the way AI is helping doctors, and that sort of thing. That's my general take on it.

**Chris Benson:** I agree with you. I think augmentation is the right word for it. And I think folks need to keep in mind that where AI is today, as we've talked about a little while ago in this same episode, it's primarily deep learning. And as we are thinking about it, deep learning can be very good at addressing very specific things. So the way that is realized in real life is that it will help us recognize images better than other algorithms we were using before... You know, with that convolutional neural network that we talked about. It enables us to do other mundane things faster and more efficiently and optimize, but each one is tackling a very specific efficiency, if you will.

So what we're seeing is we're becoming more productive by using these models in all sorts of different ways in our life, whether that's government education, human communication, education etc. All these things are just about "How can I add this in and make it just a little bit better?" I think you're more in danger if you're in a very specialized or mundane job, in terms of a model coming to replace... But there's a big difference between what a human brain can do today and what any of these deep learning models can do in terms of comprehensiveness. The world may change, and maybe we'll have to revise that at some point, but right now it's an apple versus an orange. It's not a direct competition yet.

**Daniel Whitenack:** Yup. Okay, here's a quick one, "Is it possible for a paper to report wrong accuracy, or am I doing something terribly wrong?"

**Chris Benson:** All of my papers probably report... \[laughter\]

**Daniel Whitenack:** Obviously, this is someone trying to reproduce some results from an academic paper or something, where they reported state of the art results on this or that. Yeah, it happens. Don't feel bad.

**Chris Benson:** I don't have anything to add to that. That's it.

**Daniel Whitenack:** That's it, yeah.

**Chris Benson:** That's the final word right there.

**Daniel Whitenack:** Unfortunately, not everything published is correct... So just keep that in mind. Let's see, maybe we can move on to another fun one here. "What sucks about AI?" That's a question on the internet. What sucks about AI, Chris? I don't know if we wanna add this one into our podcast, because our podcast is about AI. Just a note - if AI sucks, that doesn't mean our podcast sucks. Just to clarify.

**Chris Benson:** \[44:00\] So I have one, and we've talked about this before, and you have this - pardon me - creepy like for what I'm about to say. You know what it is now, don't you?

**Daniel Whitenack:** I do, yeah.

**Chris Benson:** Yeah, it's preparing data for training, and trying to pull all the bits together and put them into a shared context, and clean it up, and do all the things you have to do to have a great training set, so that you have very efficient training. I know for me, for every hour of delight I have training a model that does just what I want, I have many hours of this drudgery. And I know that you have this strange likeness to do that.

**Daniel Whitenack:** I do. I enjoy data wrangling.

**Chris Benson:** Oh, it's crazy, man...

**Daniel Whitenack:** Yeah, I think it's fairly fun. Anyway, not much sucks about AI. Maybe that's a cop-out answer... And maybe it sucks that -- I think things are changing with this; maybe it sucks that a lot of people that are benefitting from AI are those in developed countries...

**Chris Benson:** That's a great point.

**Daniel Whitenack:** ...and people in the U.S. or Europe or wherever it is. It's probably not benefitting the rest of the world in the same way, so maybe that sucks about AI. But hopefully that's changing.

**Chris Benson:** So there's a challenge to everybody out there listening, is that we need to find a way to democratize this amazing technology, that so many of us have devoted our professional lives to... And like Daniel is doing at SIL, find ways to bring AI to other people - I know in my case animals, being the animal lover - bring it to use cases and people and communities that need it, and that are not yet receiving it.

I know you're spending all of your time doing that, and I spend all of my spare time trying to do that, and I'm hoping others will do the same.

**Daniel Whitenack:** Yeah, for sure. Alright, well maybe as we wrap up - there's one of these questions which is practical, but also I know we get asked a lot, which is recommendations for self-studying machine learning, or self-studying AI. So if any of this stuff that we've randomly talked about has been interesting for you - we hope it has - maybe you wanna dive into a few of these topics. What are some of your go-to sources for good self-study information, Chris?

**Chris Benson:** Yeah, I'll speak specifically at what my current interest is. And this shows my bias that I'm in the TensorFlow ecosystem... Google has now a certificate program out there where you can go and actually get certified in your TensorFlow expertise. And it is not an easy certificate to get, I'll warn you. This is not an entry-level thing. But if you've been in this space for a while, and you think that you're pretty good in your usage of TensorFlow, and you want to be able to establish it...

\[46:53\] I know that there have been third-parties with certificates, but they're not taken very seriously. But now with the TensorFlow team itself sponsoring this certification process -- and you actually don't have to go into a testing center. It's good for a Covid-19 reality that we're all in; you can do it from home, on your laptop, and they have a mechanism - you're allowed up to five hours to get your test done. They test you, and everything from use of CNNs, to natural language processing... There's a whole curriculum that you have to prove yourself on in those five hours. So if you really wanna see how good you are, I would encourage you to go give that one a shot. I think it's $100, which isn't too bad, to go get that certification... And that's a good way to go from beginner or intermediate level to prove that maybe you're at an intermediate to advanced level.

**Daniel Whitenack:** Yeah. And there's been a bunch of things we've mentioned on the podcast... Just to list a few of those as reminders - people really love the Fast.ai content.

**Chris Benson:** Yes...

**Daniel Whitenack:** If you just search for Fast.ai, you'll find that. That seems to be pretty unanimously-liked, I think...

**Chris Benson:** It is. It's great content.

**Daniel Whitenack:** ...by people that are in this space. So that's a good recommendation. It's definitely not the only one. There's another kind of crash course that's free from Google, with TensorFlow. There's great tutorials on PyTorch... I've been kind of exploring this "Dive into deep learning" site recently, d2l.ai. They have a bunch of Notebooks to explore.

And there's other great books out there. One that has been always a great use to me for actually many years, and has been recently updated, is Joel Grus' book "Data Science From Scratch", which now includes a bunch more things related to deep learning, and RNNs, and CNNs, and he'll give you a lot better explanation of a CNN in his book than I gave.

**Chris Benson:** And he came on the show a while back, as well.

**Daniel Whitenack:** He did, yeah. I love that. It's a great reference for me as I do my work. So there's some recommendations; hopefully, you've enjoyed the back-and-forth question answering of this show. It's been a bit random, but some good discussion, Chris. I enjoyed it.

**Chris Benson:** I had a fun time, it was good. And you know what, next time - I'll promise listeners - we'll ask for questions out there on social media with a bit more warning than we did today, so that we can have a lot of people participate in feeding it to us.

**Daniel Whitenack:** Sounds great. See you soon, Chris.

**Chris Benson:** Alright, thanks a lot. Take care.
