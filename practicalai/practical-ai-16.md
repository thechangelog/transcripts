**Chris Benson:** Welcome to Practical AI. I'm Chris Benson, one of your co-hosts, and with me is my partner, Daniel Whitenack. How's it going today, Daniel?

**Daniel Whitenack:** It's going great. How about with you, Chris?

**Chris Benson:** I'm doing well. It's been a long time since we have put out a new show, so this one is long overdue... What have you been up to lately?

**Daniel Whitenack:** Well, I've kind of been doing a little bit of traveling, I went out to O'Reilly AI, I recorded a couple episodes there, which have been released... That was a lot of fun. I went on a little bit of a vacation, and also learned a little bit of data visualization stuff with a hackage called Vega, which - that was fun. But yeah, glad to be back on the show. I know you've had some health (broken bone) issues, so I'm glad to see you're back in action, and great to be recording with you again.

**Chris Benson:** Yeah, it's good to be back after MIA for a little while. For our listeners, I was actually gonna be at O'Reilly AI in San Francisco with Daniel, to do a recording for those last couple of episodes that we had of those, and I missed it, because two hours before I was supposed to be at the airport I broke my foot. I ended up going to the emergency room and calling Daniel from the emergency room, going "Um, I'm not gonna make it." So thank you so much for handling all that alone. I know you were even fighting a cold off, with losing your voice, so you had your hands full.

**Daniel Whitenack:** Well, you were missed, but the next conference - we'll do that one together. I should say too, for the listeners - first off, we'd love to have you join our Slack community at changelog.com/community, and we'd love to hear about what events you're gonna be at, whether that's O'Reilly AI, or ODSC, or Strata, or Applied Machine Learning Days, or MLConf... Whatever ones you're gonna be at, let us know. And let us know if you'd like us to be around at those conferences, recording some content and interacting with the community. We'd love to meet some of you.

**Chris Benson:** Yeah, and we had great feedback from you guys in the Slack community, and we also have a fairly new LinkedIn group called Practical AI, so if you're on LinkedIn, I invite you to join that, because we have some conversation going there as well. And yeah, I guess it's good to be back on the podcast now.

I've done a couple of conference keynotes in recent days and I've been hobbling around on my cast, so I'm sure I looked quite comical as I walked up to the podium. Anyway, on to the show today... Daniel, do you wanna start us off?

**Daniel Whitenack:** \[00:03:59.20\] Yeah, sure. It has been a while since we've had this sort of conversation. We're gonna do another news and updates show for you guys. There's been a ton of news in the AI community over the past few weeks, so we're gonna dive into some of that and discuss it, and let you know about some of the things that were on our radar over the last 3-4 weeks... And also, we're gonna share with you a couple of new learning resources. If you're trying to level up your AI game, or maybe you're just getting into the community and want to start experimenting, we're gonna point you to a couple of those resources later in the show, so stick around for that.

But to start us out, I'd love to just start by some big news in the community over the last few weeks, which has been around PyTorch version 1.0. In my understanding, at least at the time of this recording, PyTorch 1.0 is in its preview or release candidate stage. Maybe by the time it releases it'll actually have the full release cut... But first off, we just wanna congratulate the PyTorch team; that's a huge accomplishment, getting to version 1.0.

**Chris Benson:** Woo-hoo!

**Daniel Whitenack:** Yeah, I'm really excited about it. I just wanna pass on our congrats to that team. Also, it seems like the community is really latching onto this. Even Google Cloud is implementing a lot of PyTorch implementations in their images, and other things... So yeah, it's really great to see this. What do you think, Chris?

**Chris Benson:** I think PyTorch is really rocking right now. It has come on so strong in the last year, and it is really -- just talking to people, so there's no scientific basis to this when I say it, but just observing... I really am hearing a lot about PyTorch, and then obviously TensorFlow, which has been big for a while, and we'll talk about that in a moment... But PyTorch team - you're really rockin', so keep up the great work. It is a fantastic framework to work with.

**Daniel Whitenack:** Yeah, and I think -- maybe this is a good opportunity to give some perspective, at least from our very biased perspective as far as the PyTorch and the TensorFlow community, the state of them... Chris, do you think that they're reaching different segments of the community? And who do you see using one or the other?

**Chris Benson:** It's kind of funny... Historically, PyTorch, among the people I'm running around with in data science and AI on a day-to-day basis, has really been in the academic and research arena, and then to contrast that, TensorFlow was kind of dominating the corporate production teams... But PyTorch on their frontpage right now, in big letters, it says "From research to production", and I think that captures exactly the feeling of where they've been going. They have moved to compete with TensorFlow squarely on that corporate "roll things out to production" front, and compete with TensorFlow's existing tools that have been out there.

PyTorch is now becoming just a powerhouse, not only in Academia, but for corporate teams that once upon a time really would only have said "Well, we've gotta do TensorFlow" for what they have in terms of getting this stuff out in the world... So I'm just really happy to see PyTorch coming on the way they are... And "from research to production" is the perfect attitude for that team, from my perspective as an outsider.

**Daniel Whitenack:** Yeah, I think you've hit the nail on the head with that. I really see in the blog posts that I've read about PyTorch version 1.0 - it does seem like a lot of the emphasis is on "production" or system integration, scaling out sort of things. Some of the things I'm really excited about is their really tight integration with the ONNX neural network exchange format, which standardizes model format across PyTorch, and Scikit-learn, and MXNet, and all these things, so you can train your PyTorch model and then export it in this way, and then serve it with MXNet... Stuff like that is just really cool.

\[00:08:00.16\] Also, the integrations that they're working on, with things like kubeflow, which is a set of standards for deploying machine learning technology on top of Kubernetes, which of course really kind of zeroes in on making PyTorch really useful at scale in a company's infrastructure.

Then, of course, we see things even from Google Cloud, where they're working on integrations of PyTorch with TPUs, which is Google's accelerator technology... Similar to GPUs, but different, as we learned last week from our guest from NVIDIA. They're also integrating PyTorch to be able to be used with TPUs, so there's a lot of emphasis on that front, and for one, I'm really happy to see that, because I think, from my experience, that's a lot of times where people get blocked in terms of implementing and applying these methods.

**Chris Benson:** Yeah, the things that they call out as highlights on their feature page include hybrid front-end, distributed training, Python-first tools and libraries, native ONNX support, C++ front-end, and then cloud partners... And all of those, especially the cloud partners, where TensorFlow has been so dominant lately - it's great seeing... I love having choice. I love having the option to go where I want, so a big congratulations to the PyTorch team.

**Daniel Whitenack:** I think it's really cool to see that interoperable stuff, because I think the PyTorch and the TensorFlow community are both just very vibrant. There's the TensorFlow Dev Summit, which has a lot of momentum, there's the PyTorch Dev conference (I forget what they call it), I was just seeing about that... Both are just really vibrant, and of course, the only community, the open source community...

I think one of the things that I always appreciated - and I use PyTorch now probably a little bit more than TensorFlow... But one of the things I always appreciated about PyTorch was the Pythonic way it allowed you to build AI applications, without having to worry about the static graph computations that were in TensorFlow... But I know that that's actually changing as well, and you were telling me a little bit about that, so what's going on there?

**Chris Benson:** So, TensorFlow 2 has been discussed with the TensorFlow team. They made an announcement a couple of months ago, and then they've updated the site... And ironically, I think that part of the motivations in TensorFlow 2 that we'll address here kind of come from that competition with the PyTorch team... PyTorch has been considered, because of that "putting Python first" mentality - it's been so easy to use... And TensorFlow has been notoriously difficult because of the graph mode. So one of the big highlights of TensorFlow 2 is they're putting the eager execution, which has been out recently, as the primary mode now. So you'll start in your execution, and then if for performance reasons or a variety of other reasons you're ready to move into graph mode, then you can do so.

But, I think a lot of people are gonna welcome that ease. There was a video that I saw recently where they were comparing the two frameworks, and they were showing TensorFlow 1 versus TensorFlow 2 syntax, and you could just see it - it was much more readable, and it was putting Python first again. That was nice to see.

They're increasing support for platforms on the TensorFlow side, and they're starting to remove deprecated APIs, and things like that in 2.0. So I, for one, am really looking forward not only to this PyTorch 1.0 release, but also to the TensorFlow 2.0 release when it arrives.

**Daniel Whitenack:** Yeah, that's exciting. Is there a timeline for that release? I think they just announced that they're working on it, is that right?

**Chris Benson:** I think so. I pulled up the TensorFlow site and I don't see a date jumping out at me, but I couldn't guarantee it right now.

**Daniel Whitenack:** \[00:11**:** 51.07\] Well, kind of along the same front as the practical, production-ready system integration and applied AI stuff that we've been talking about with PyTorch, another thing that I saw over the past few weeks is this set of articles and resources from Google AI that's called "Responsible AI practices." If you remember -- I forget which episode it was in; we can put it in the show links... We talked about Google's previous release of their AI Principles, which really had more to do with maybe on the ethics side of things, things that they would or wouldn't want to do with AI...

**Chris Benson:** Yup, I remember.

**Daniel Whitenack:** ...how they view that. We'll find that show link and put it in, but these responsible AI practices - they really are more at the practical level of the AI developer, which I can definitely appreciate, and I know we on the show can definitely appreciate. They have these broken down into a few different sections - general recommended practices, fairness, interpretability, privacy, security... And I just find these really practical or really useful, some of their general recommended practices... And they really break these down into bullet points that you can follow easily. Generally, they include things like human-centered design, identifying multiple metrics to assess training and monitoring, examine your raw data when possible, understand limitations of your dataset in your model, "Test, test, test", which is, of course, usually important, and then last "Continue to monitor and update the system after deployment." They even include some links to ways that they do that in the article.

What I was thinking about when I was reading through this is this would make a great -- if I was leading an AI team, or a new project, I would almost take these and map them to a checklist of sorts, where we could kind of just check off that we've at least considered each of these points, and we've either implemented some of their suggestions or we have a good reason that we're not doing that, and I think that would be a really great way to move forward responsibly on a project. What do you think?

**Chris Benson:** I think that's great. My last employer, I had to go in and build out the team from scratch, and having -- there's was a little bit out there, but it's been really in the last year that Google and other key players in the AI community have released these kinds of guidelines, and I would very much have liked to have had them available to me in those early days, as I was trying to put together my own playbook and figure out how do you build a team, what are the different skillsets, how do you divide those up, what types of work can you do...?

There are just so many questions, and I guess that kind of leads me into another one that we had this week - NVIDIA has an article... It's in Forbes.com, actually, from an NVIDIA person; it's not as comprehensive, but it was "Five steps to build a business' deep learning workflow." In that article they kind of walk you through some highlights that is somewhat similar to the Google guidelines that you just walked us through, and I wanna note before we leave that behind that you only covered what was under the general category when you were highlighting the sub-bullets.

There's another 3-4 pages of things that Google had released... And having those, and combining NVIDIA's here - they talk about "Identify business problems", "Build a data strategy", "Build and train models", "Evaluate model accuracy" and "Deploy trained models" and each one of those has a number of bullets under it... I know, as practitioners, being able to go and look at all of these different guidelines and how to put it together, posts that these major organizations are releasing out there, and starting to get a sense of what your playbook should look like as you're building out an AI capability in your organization - it's a fantastic place to start, and I agree with you on that.

**Daniel Whitenack:** Yeah. Is there anything from your perspective -- because I know one of the things I've appreciated about talking to you is you have gone through the process of building up a team around AI and that sort of thing... Were there things that were particularly important for you as you did that, that were maybe highlighted in these articles, or things that maybe you didn't expect as you were going through that process?

**Chris Benson:** \[00:16:12.18\] Yeah, there's a lot there, actually, so I'm just gonna touch on the tip, and at some point in the future we're gonna talk about how to put together organizations, and hiring considerations, and I'll go into more depth from my perspective when we get to that... But all the things that I just called out on NVIDIA are kind of high-level processes, and the bullets are not enough. This article alone won't help you get all the way there, but it kind of tells you the categories you should be thinking about, and the Google document that we were just talking about kind of goes through a lot of the process stuff that you need to be thinking about.

Now, in your organization, you're likely gonna have to customize all these around your own size, your own operations, your own team capabilities... Everyone's a little bit different in that way, because you're having to put together your own AI capability, and it's gonna be a little bit unlike everbody else's, but these are good places to start.

Just as a teaser for the future, I actually have what I think will be some controversial opinions that I developed when I was doing the team buildout...

**Daniel Whitenack:** Oh, no...!

**Chris Benson:** I'm busy writing a blog post I'm in the middle of right now, and I will throw those out for everyone to have a go at in a future episode. I'll just leave that hanging there.

**Daniel Whitenack:** I'm definitely looking forward to that, and giving (of course) my highly-biased opinions, as well. Yeah, I like what you say. I think what we're trying to do here and I think what many people and organizations are trying to do is represent some type of scaffolding, or like I was saying, checklist, but really it's kind of like a scaffolding where - "You need to be considering this point. That might look different in your organization than other organizations, but you need to consider this point, and not ignore it", right?

**Chris Benson:** Yeah. I totally agree with that. It's a very creative process, is all I can say at this point in time. We're still in such early days in building out AI capabilities, and the maturity of the community in general, for me, having been around the block more than a few times, it feels like when the internet was coming to being, in about 1993, on that... And if you think how far software development, software engineering has come in the years since, that is the road ahead for us in the AI community right now.

Seeing these things, and discussing how to put them together - it's the right time. We already know how to do this in other areas of technology, but we're still learning in data science in general, and specifically certainly in AI.

**Daniel Whitenack:** Yeah, for sure. Alright, Chris, I'm going to transfer our discussion to a slightly different topic, that of transfer learning. I ran across this article - it was published September 17th, and it's called "Deep learning made easier with transfer learning." It came out with Fast Forward Labs, which is now part of Cloudera, and is associated with some bigger names in this space. I've really appreciated the content that they've put out in the past. Have you read any of their blog posts or content in the past?

**Chris Benson:** I have. Fast Forward Labs has been a great source of information in the past. Obviously, they're now part of the larger organization (Cloudera), but I love seeing their stuff and I love this article, by the way, that you've found. I'll have some comments... I'll let you share a little bit more about what it's about, and then I have some commentary on it.

**Daniel Whitenack:** Yeah, definitely. And I would encourage people -- Fast Forward Labs has put out a number of reports or white paper(ish) sort of things on various topics. I remember reading their one on machine learning interpretability, which really gave me a sense of what people are doing on that topic and what considerations there are... And they have a bunch of other content that's really great for learning. In a sense, these are kind of learning resources in and of themselves. We'll give you some more later, but...

\[00:19:58.10\] This article - I really appreciate it, because I think transfer learning is so important in terms of how people are implementing their AI strategy in their company... But the article goes through and it tells you what transfer learning is, in the sense that you're taking a model that was maybe trained on a certain task, and kind of starting from that starting point and building/generalizing that model to another task, building in additional knowledge... And they kind of walk your through that concept with a bunch of different compelling figures, and even some code, and some PyTorch examples, and robot pictures and cat pictures... I just thought the article was really good, so I'd definitely highly recommend it.

**Chris Benson:** I will foreshadow another teaser of that same thing I was talking about earlier, and that is that transfer learning gives you the option of standing on the shoulders of giants. Most companies out there that are creating capabilities are gonna be on the implementation side; they're not gonna be doing research the way Google Brain is, and the way the Facebook team is, and stuff. They'll do enough to get what their use case is, and that's gonna be the majority of production work in the industry.

If that's the case, and if you're able to use your framework of choice and find some work that somebody has already done on the model, and you can do that adjusting your way into your use case, transfer learning is really almost the default way that a lot of data scientists and AI engineers are going to be accomplishing their own goals. On the teams that I've been on, that has been the approach that we've used, and I think that that is definitely the major use case. I think the more people understand how that process works, the more useful it's gonna be... I think this is a great article in explaining that.

**Daniel Whitenack:** Yeah, there is a kind of general misconception. When people think about AI, they really look through a lot of content that's out there on the web which is really good content, but maybe it's from DeepMind or OpenAI, or something like this... And really, the incentives of those companies around research and the projects that they work on and the way that they work on them is very different from the incentives in a typical company, where they're really focused on these deep research questions and new model architectures and all of that.

For the most part, I think when you're in a company, you're going to be (like you said) standing on the shoulders of giants; you're gonna be taking model definitions and architectures that were developed maybe at OpenAi or somewhere, and actually applying them to your own data.

I was actually teaching a workshop a few weeks ago now, and this question came up - the question was really around "What does it mean to have a custom machine-learning model or AI model for your use case in your company?" And the misconception amongst the crowd there was that "Well, that always means that you're gonna make up your own model definition and equations and expressions that are really tailored to your particular use case, and specifically designed to model your data."

I think by and large, that is not how things are done. I think in pretty much every case of applying AI and machine learning, what you're doing is you're taking a model definition that has been developed somewhere like DeepMind and OpenAI - maybe that's a recurrent neural network, or a convolutional neural network or whatever it is - and you're applying it to your particular use case, but really, when we say you're customizing it for your use case, you're not changing up the layers of the network even, in many cases. What you're doing is you're just training that model on your own data to get your own set of weights and biases, your own set of parameters that parameterize that model definition that someone else has developed. And I think by and large that's what people do.

Of course, transfer learning provides even a layer of additional help on top of that, in that you're not even starting from scratch when you do that training, but you're taking knowledge that was already developed in other tasks, and you're kind of starting from a good checkpoint.

**Chris Benson:** \[00:24:10.24\] I agree with everything that you said, and I think between us, we've identified what most people who have been working in this space would agree is the way real life works on that. Great article, thanks.

**Daniel Whitenack:** Do we live in real life, if we're doing AI? \[laughter\]

**Chris Benson:** Good question, although I'm about to transition us into a little bit of a scary real life here...

**Daniel Whitenack:** Uh-oh...

**Chris Benson:** Leading in, you and I are always talking about the theme of AI for good; it's something that you and I care about very much... Versus the horror stories about what could go wrong, we like to talk about AI being used for purposes that helps the planet, it helps mankind, it helps everything about us, and we've had some great episodes with people who were doing just that... But I wanna turn to a darker story for a moment, certainly from my perspective.

I ran across one -- it's ABC News in Australia, I think, and it's called "Leave no dark corner", and it's about the social credit system that is coming into being in China right now. It is essentially a system where all 1.4 billion Chinese citizens are gonna be monitored 24/7/365, all the time, through all sorts of different channels, and they are essentially expected to toe the party line, if you will.

The communist party itself calls it the social credit system; it's supposed to be fully operational by 2020, and a quote from the communist party says that it will "Allow the trustworthy to roam freely under heaven, while making it hard for the discredited to take a single step." I read that in horror.

**Daniel Whitenack:** That's like something out of a novel.

**Chris Benson:** It is. It's a 1984 theme, again... In past shows we've talked about some of the darker stories, about "Oh my god, we don't wanna go down a path like that in the future", but this is happening now... They're talking about it being fully operational in 2020, but it's already in place partially now.

They interview several, so if you are that Chinese citizen who is completely in sync with the communist party, then you are good to go, because you're living a prescribed lifestyle, that is approved. But if you are, for instance, an investigative journalist and you discover that maybe high-ranking officials in the communist party are corrupt -- there's been the big corruption crackdown recently in the communist party in China, and maybe you upset certain people... They give an example of one man in particular who does exactly that, and his social credit is very low and he can't even travel within the country. He can't get plane tickets, he can't get train tickets within the country, and rail is very popular in China.

When I look at that as a Westerner and as an American, with the biases inherent in that, that is exactly the opposite of what I hope my life to be and my children's life to be going forward.

I just wanted to draw that out, and if you're not aware of the social credit system in China, now you are... And if that's not what you want as a listener, maybe be thinking about what you DO want, and how to get there.

**Daniel Whitenack:** Yeah... I think literally this was a Black Mirror episode on Netflix. I remember people walking around and doing certain things, and then they would get a ding, and their social credit went up or down, or whatever. I forget what they called it. Maybe some of our listeners can remind us in our Slack channel.

\[00:27:36.20\] One of the things beyond the fact of just the social credit system itself, it's like -- you know, we've already experienced AI and machine learning being used in the social media context, in terms of engineering people's political views and all of that, and really what we've seen is that those systems, and especially the ones that are driving advertising, are really pushing people to the extremes of their views. It seems like this is the same thing but on a greater scale, in the sense that the people that are discriminated against or their social credit is pushed down, they're only gonna be more radicalized, and the people that want to get their social credit up, they're just gonna turn more to the norm of what's expected.

There's definitely tons of interesting and scary implications, and I think that people should be aware and watching what's going on, not just in the U.S. and even in Europe, but in China and also in India with the Aadhaar system. There's now like billions of data points of people's biometric data, and it can be used in various ways... Hopefully some good ways, but there's also a lot of potential dangers, of course, in that, and you're already seeing people bring up things and talk about that in this context... So we definitely need to be watching and involved in the discussion around this around the world.

**Chris Benson:** Sorry to give everyone nightmares here today talking on this topic... Just as a final note, to balance it, in the near future we're going to have an AI For Good episode. That's coming up, and hopefully that'll give you some inspiration, instead of the terror here.

**Daniel Whitenack:** Yeah, and there's definitely always gonna be a balance. I think it's with any technology, and we've mentioned this before... Technology in and of itself - and this has always been true, whether it was smartphones, or the internet, or whatever - of course, can be used in good and bad ways, and really what you wanna be doing is promote the positive as much as we can, and promote the responsible practices as much as we can, to hopefully help people to be asking the right questions.

**Chris Benson:** Amen, brother.

**Daniel Whitenack:** So from that, let me recenter my mind... \[laughter\] I did wanna bring up a couple of interesting data visualization things that I ran across, and I don't know if both are entirely new, but anyway, they were new to me... The first is this "How to visualize decision trees." This is an article and a package for Scikit-learn that came out from Terence Parr and Prince Grover (sorry if I mispronounced any of those names) at the University of San Francisco's Master's in Data Science program.

Basically, this package gives you a really nice way of visualizing and interpreting how your decision tree models were trained, and understanding the decisions that they're making at the various levels of the tree. If our listeners aren't familiar, a decision tree model is kind of like a bunch of if-then statements. Your features are split up into certain ranges, and based on those ranges or their values, then you kind of navigate through these various layered if-then statements.

These visualizations - I just find them really compelling, and I think that as people are using neural networks and other more complicated models that are increasingly less interpretable, although there are many people working on that very topic, I think keeping in mind this sort of model, and even the fact that you can utilize a package like this to really visually understand how your data is transformed from input to prediction, I just think that's really cool. I think things like this should be used as much as they can... And they give a bunch of examples, of course, on the Iris data and diabetes data, Digit data... Yeah, I just find it really compelling.

**Chris Benson:** It's funny, because being able to use tools like decision trees and the visualizations around them are really important; we tend to think of them just within the data science, but there's the rest of the world that we have to communicate with, and that we have to explain things to, that we've been asked to explain, and show what the possibilities are going forward. Being able to do this and to visualize them well - and I'm just looking through all the great examples they have in this article - is really important for people who aren't necessarily in the same field that you're in. I just wanted to call that out, it's a great set of communications tools that they have here.

**Daniel Whitenack:** \[00:32: 14.03\] Yeah. The other one that I was gonna mention was this Anatomy of an AI System, which I think is kind of attempting to be an infographic that represents all of the interconnected pieces that are at play in Amazon's Alexa system, or more generally, that type of smart speaker system, all the way from the materials that are used to make the various devices, to the neural networks that are being used, to the AWS infrastructure, to the control flow, and geography... It's probably not meant to be a fully technical spec of the whole system, but I think it is meant to give us an idea of the impact of the systems that we're building, both functionality-wise and otherwise - in terms of people, in terms of places, and materials, and all of that stuff.

**Chris Benson:** Yeah, I totally agree.

**Daniel Whitenack:** Yeah, it's interesting... So take a look at that. I think you can download it as a PDF, and take a look through it.

**Chris Benson:** Yeah, it's super-detailed; I was looking through it as you were talking, and zooming in on different aspects... Definitely interesting to look through. After the show I'll probably keep doing this, where I can just take 15 minutes and explore it.

**Daniel Whitenack:** Yeah, for sure.

**Chris Benson:** I want to turn us briefly over to spending; we talked about the scary China thing a few minutes ago with social credit, and I wanna point out that China has already committed -- the government has already committed to actively building a 150-billion-dollar AI industry by 2030, and they're really behind it, whether you like what they're doing or don't like what they're doing.

Other major players, like Russia, are as well. Vladimir Putin announced last year that he was in front of a bunch of university students and he said "Artificial intelligence is the future, not only of Russia, but of all mankind, and the industry leader will rule the world." There's a little bit of an ominous tone to that, in my view...

**Daniel Whitenack:** No biggie...

**Chris Benson:** No biggie there. September 1st, 2017 was when he made that speech. I came across an article on CNN Business, actually, that says that the Pentagon is investing two billion dollars into artificial intelligence. That was actually at the 60th anniversary conference of DARPA, and DARPA was talking about this two billion dollar investment into them... And I'm sure the Pentagon is spending lots of dollars in other places, but I wanted to say that there are governments I know outside of the U.S. and other Western countries that are very focused on AI.

I would like to see a level playing field throughout the world. I think everybody is going to be doing it, and I would like there to be no one that just masters it, puts their point of view across to everybody, so... To Western governments - you might be thinking about making a little bit more investment on this, and make sure that you don't lose the status of being a leader in the field. Even though that was a two billion dollars price tag, after reading some of the other announcements from other places in the world, I was kind of let down... And I wanted to share that view.

**Daniel Whitenack:** Yeah, I definitely agree. And to any of our listeners that bagged some of that two billion, call us up and we'd love to go to dinner.

**Chris Benson:** Absolutely! Daniel and I are available for your two-billion-dollar budget!

**Daniel Whitenack:** \[laughs\] And speaking of the community around AI and also the development of AI - of course, a lot of that is open source now - I just wanted to highlight that it's Hacktoberfest. If you don't know what that is, it's kind of an unofficial - I don't know if we'd call it a holiday, a season, put on by Digital Ocean... So if you're making contributions to open source during the month of October and you sign up on their website, which we'll have in the show links, then you can get a free T-shirt if you do a certain number of pull requests... So we encourage you to get involved.

Find a project, whether that's PyTorch, or ONNX, or these visualization libraries, or something else that's interesting to you, and contribute to the larger community. That'll be a great way to get involved.

**Chris Benson:** \[00:36:02.28\] Sure. And do you have some other conference announcements coming up?

**Daniel Whitenack:** Yeah, good reminder... I just wanted to remind people that we're kind of getting into spring conference season as far as submitting proposals. I wanted to highlight Applied Machine Learning Days; it's a really great conference in Europe, if you're able to make it there. They have a call for talks, and posters...

Also, there's O'Reilly AI New York - that CFP is open, and then if you're more on the research side, especially on the image and video side, CPVR - their call is open; I think it goes into November... So get ready for those things, and definitely get out in the community and get involved, and meet some people in real life.

**Chris Benson:** Sounds great. I encourage everyone to get involved. There are two other things I wanted to mention... One, I like to do (as do you) little personal projects, and have fun... I have a six-year-old daughter, Ethina, that I'm always kind of pushing fun technology things for kids in front of her, and I ran across something that even appealed to my wife, who stays out of the AI space; it's not her interest. She's like, "Yeah, you can have that."

It was a little thing where it just showed how -- my wife has a bunch of hummingbird feeders on our back deck, and we have hummingbirds flying all over the place here... And somebody had taken a camera and had put a mount on it through some 3D printing, and was using image classification through a deep learning framework, and I don't remember which one they used right off the top of my head, to capture when the hummingbirds were at the feeders... And it's just kind of a silly, little weekend project, but it's a lot of fun, it allowed me to get my family involved, and I do that with my daughter often. I also have a little Tello that I'm playing around with with her... So if you're not doing little personal fun things out there in the audience -- this isn't all serious stuff; sometimes we can have a little bit of fun, so I would encourage you to do that.

And then the last thing I had was I just wanted to mention that Google has their Dataset Search beta out, if you're not aware of it.

**Daniel Whitenack:** Woo-hoo!

**Chris Benson:** Yeah, no kidding! You can go to Toolbox.google.com/datasetsearch, and it gives you the usual little Google search page, but you can start finding publicly available datasets out there. Since this was released, I've been using it more and more to try to locate datasets to start putting together for my own projects, and I think this is a fantastic tool for us. It's just a search bar, but it's one that I have opened in a tab all the time these days. That's it for me, prior to us hopping into some learning stuff, some learning resources.

**Daniel Whitenack:** Yeah... And keep in mind, when you're searching for data, it's not always just what your company produces or what is available to you. There's a lot of public data and other data out there, and you can find it with tools like this, like Google Dataset Search... So this is great.

Yeah, we'd like to turn now to learning resources. Again, Chris and I are always trying to learn more and keep up with the latest things, but also just remind ourselves of some of the fundamentals of machine learning and AI... So we wanted to share some of those resources with you.

The one that I wanted to share is a set of machine learning cheatsheets. You might have seen a bunch of different cheatsheets out there, but these are from -- they're made for Stanford CS229 class, which is a machine learning course... And I just found these to be probably higher quality and better produced than many of the cheatsheets that I see out there, and they're really good reference cards for -- they have one for supervised, and unsupervised learning, deep learning tips and tricks, probability and statistics, and more...

I think these are a great thing to include, and they're even available in a bunch of languages - Spanish, and French, and Arabic, and others. I think these are really great to bookmark on your browser and pull up when you need them.

**Chris Benson:** \[00:39:59.24\] This is fantastic. I went from the GitHub link that you provided and they list off to another website, and I dived into the deep learning topic on that. I'm just looking through this, and it's amazing. I am gonna be using this all the time. It covers so much material, the kind of things that you're always having to look up, or recall, or whatever... Fantastic find, Daniel.

**Daniel Whitenack:** Thanks.

**Chris Benson:** My learning resource - I was just as one of our Atlanta Deep Learning meetups a few days ago, and we are always having people coming in there, asking for starting off, and what to do, and we're always \[unintelligible 00:40:33.25\] the usual things, and some of those I've already put out... But my buddy Reese and a couple of other guys were pointing out that one that we had not covered was Udacity's Machine Learning by Georgia Tech, which they have online; it covers supervised, unsupervised and reinforcement learning. It's free, and they said that for them -- I have not been through this course, but they said a part of the nanodegree program, and that it had really provided them with a great base upon which to continue learning. Having had several people say this was definitely a worthy place to start out with, I wanted to share that with the audience at large.

**Daniel Whitenack:** Awesome. Yeah, and like we've mentioned, if you have questions about AI, or maybe you have a good resource that we don't know about, get on our Slack channel, get on our LinkedIn page and let us know about it. We'd love to hear from you, hear what questions you're having, hear what resources you're using, and of course, we'll try to keep bringing you some good ones.

In the coming weeks we're gonna have more guest interviews, we've got some really great stuff lining up, as Chris mentioned, about really technical topics, and more use case stuff, and ethics, and all sorts of things... So keep tuned in, and I'll see you again next week, Chris.

**Chris Benson:** I'll see you again, Daniel. It was a great show today, and looking forward to next week. Talk to you later on!
