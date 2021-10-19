**Daniel Whitenack:** Welcome to another episode of Practical AI. This is Daniel Whitenack. I am a data scientist with SIL International, and I'm joined as always by my co-host Chris Benson, from Lockheed Martin. How are you doing, Chris?

**Chris Benson:** I am doing very well. Happy new year! How are you doing today?

**Daniel Whitenack:** Happy new year! Doing well. We've got some snow on the ground. It definitely looks like winter up here in the Midwest. It was a good new year; I helped my wife with a few things with her business over the holiday, and also, I ripped apart our bathroom in an attempt to remodel it... And I am mostly -- so I'm on the rebuilding part of that. So it still has momentum, but it's not done yet, to my wife's disappointment entering the new year. But it will be done. I'm committed.

**Chris Benson:** It sounds good. As we get back in the swing of things, today was my first day back into work after a little vacation time...

**Daniel Whitenack:** \[04:25\] Yeah, same here.

**Chris Benson:** ...so I'm trying to readjust my whole brain into actually having to be productive, which is a scary thing...

**Daniel Whitenack:** It's absolute chaos, coming back... Right?

**Chris Benson:** It is. But I took advantage - I'll tell you real quick; I took advantage of the holidays. I've started flying lessons.

**Daniel Whitenack:** No way! That's super-cool.

**Chris Benson:** Yeah. And over the holidays I got in about a dozen flight hours. I came close to solos...

**Daniel Whitenack:** Oh, I didn't know that. That's awesome.

**Chris Benson:** ...I'm sharing that with our audience. Now, if I don't finish this thing, everyone's gonna hammer me. But hopefully, I'll eventually \[unintelligible 00:04:54.20\]

**Daniel Whitenack:** Well, you'll be able to fly from Georgia up here to where I'm at, and we can do some in-person recording for the podcast...

**Chris Benson:** There we go. Perfect. Exactly.

**Daniel Whitenack:** Yeah. You can just come every Monday.

**Chris Benson:** But you scare me, because I'm in the sunny South, where it's just a frigid 55 degrees Fahrenheit right now...

**Daniel Whitenack:** Oh yeah, you're all bundled up, too. You've got your hoodie on, and...

**Chris Benson:** I'm afraid to go North now.

**Daniel Whitenack:** \[laughs\] Well, with that...

**Chris Benson:** Make that transition, Daniel... Go for it.

**Daniel Whitenack:** Yeah, we'll switch to something completely different, which I'm really excited about, actually... So there's a couple of things that got me really interested in this when we got connected with this group... One is that this is a sort of -- it's a new thing, it's a non-profit thing, which is related to my world, because I work for a non-profit... But there's a cross-over with some of the things I'm working on, because they're working with speech data, and releasing some data for speech-to-text, and other things... But I'm really excited today, because we are joined by David Kanter, who is the executive director at MLCommons. Welcome, David!

**David Kanter:** Happy new year, and it's a pleasure to be here.

**Daniel Whitenack:** Yeah, happy new year to you as well. It's great to have you with us as our first official recording of the new year.

**Chris Benson:** First victim... Ha-ha-ha... Sorry. It's not really. Just joking.

**David Kanter:** No, it's actually great to be here... Although it is kind of amusing. So I'm in San Francisco, and I think the weather is very similar to that in Georgia... But \[unintelligible 00:06:27.17\]

**Chris Benson:** In the T-shirt.

**David Kanter:** ...full-blown T-shirt, looking relaxed... I might even have sandals on, I don't know.

**Daniel Whitenack:** Yeah, I mean... With Zoom you don't even know if I have pants on, but...

**Chris Benson:** Oh, not a good image.

**Daniel Whitenack:** We'll leave that, maybe just assume there.

**Chris Benson:** He had to go there again.

**David Kanter:** I'm interpolating you with pants on, just so you know.

**Daniel Whitenack:** Okay, that's good. That's probably a good interpolation. Anyway, would you just tell us a little bit about yourself? What you've done in the past, and how you ended up doing what you're doing now, with MLCommons?

**David Kanter:** Yeah, absolutely. Actually, I'd say in some ways m background in ML dates back to when I was in university at the University of Chicago, where I did math and economics, and you know, a lot of econometric analyses, actually. Very similar to some forms of machine learning. But from there, I was very heavily involved in computer architecture, microprocessor design, I had a startup for a few years... And then sort of when I shut that down I ended up getting into a lot of consulting, and ended up falling in with the predecessor to MLCommons, which was a collaborative benchmarking effort called MLPerf. And in a lot of ways, MLPerf brought together the community of machine learning, and then sort of system architecture, computer engineering, and so forth.

\[07:58\] Then, as you mentioned, we formed MLCommons, which is a non-profit, a global engineering consortium to bring everyone together around our overall goals. So I very much come from the technical side, again, on sort of the performance aspects, but over the last 2-3 years I've really leveled up my understanding of machine learning quite considerably, both through my consulting, and now my day job.

**Daniel Whitenack:** Yeah, and MLPerf, I remember -- so when did that come about? Because that's been around for some time, right? I remember seeing things about it.

**David Kanter:** I wanna say 2017 or 2018.

**Daniel Whitenack:** Gotcha, yeah. So actually, it's interesting that MLPerf was a sort of predecessor of MLCommons, and now MLCommons is like the parent organization of MLPerf.

**Chris Benson:** Was it the first thing inside the association?

**David Kanter:** Yeah.

**Chris Benson:** It was the Linux inside the Linux Foundation?

**David Kanter:** That is a very good way to put it, yeah. I mean, in many respects, the genesis story is that our DNA is very much like a startup, and everything kind of started off very informal, handshake agreements, do things with consensus and move very fast. But one of the things we agreed on is that will only work for so long... But we wanted to ultimately put this in the hands of an industry organization that was owned by none, beholden to all, so to speak. So MLCommons is that container.

But the other thing is we knew that this was one leg of the tripod, and that we had other projects that we wanted to get done. And so it was very much the camel's nose under the tent, so to speak.

**Daniel Whitenack:** Yeah. Good metaphor. That's actually a new one on me. I'm gonna have to start using that one.

**David Kanter:** Yeah.

**Chris Benson:** So before we go too far, just for those who have not heard of MLPerf, since we're kind of leading into the story with that - can you give a brief outline of what MLPerf was, and then kind of go on to talk about what the container is of MLCommons, and how it's structured, and then maybe we'll get into some of the other things as well?

**David Kanter:** Sure. So MLPerf is a set of performance benchmarks to measure how fast you can train a neural network, or do inference. There's a very long history of this sort of benchmarking in computer systems. So in a lot of ways, the effort was sort of spiritually influenced by those prior efforts. You know, organizations like SPEC and TPC, that help to bring together industry and academics, and kind of give folks a common set of benchmarks.

What we really noticed early on is there's so much excitement around machine learning, around AI, but it was almost like the UN without their translation devices, and people would be talking about performance in ways that were very much not apples to apples. So the goal of the benchmarking side of things is to both provide a common set of metrics for what constitutes progress. A benchmark in some sense is a barometer on progress. And you know, does it always point true North? Not exactly. But if it's off by 5-6 degrees, it's fine; you're still heading in the right direction. But it's also about giving everyone a common language for where you are in fact heading, whether it's sales and marketing, or engineering, or academic research, or even folks in the government... And sort of clarifying the field and providing a map and a barometer, in some sense.

**Daniel Whitenack:** \[11:57\] Yeah, it seems kind of interesting to me to think a lot about this side of benchmarking. I think where a lot of people -- if you were to talk to a lot of AI practitioners or ML practitioners, and talk to them about performance or leader boards or something like that, they probably immediately think of "Oh, some list of models..." and they've got this accuracy on ImageNet, or they've got this blue score on this machine translation task, or something like that... And it's really a measure of the performance of the output of the model, not of its performance on hardware. And actually, you kind of see, as these leader boards have been released, people put more and more effort in, and actually the models at the very top might be very poorly performant on a lot of -- or maybe even some lowly people like me might not be able to run them on any hardware that we own.

So how has your conversations with people over time around MLPerf and actual performance on hardware overlapped or come into conflict with those other sort of conversations around "Oh, how accurate can we be?" and that sort of thing?

**David Kanter:** I think that's a very on-point observation. What you've described is what I think of as accuracy. And that's a very common set of benchmarks. I think one of the actual core motivations behind what we do is that -- there's actually a very foundational paper by one of our founders when he was at Baidu, Greg Diamos... And sort of the rough outline of the paper is that accuracy for ML follows a relatively simple equation, which is you get a lot of compute and a lot of data together, and as you crank those up, you will increase your accuracy. And you've seen these papers from OpenAI and other people talking about "Oh our need for compute is doubling every six months", or something like that. So I think the good thing is that there are absolutely folks who are very cognizant about the importance of this... But it's also true that there's a large number of people for whom the performance is a level below them. And this goes back to the goals of our organization, which is that when I look at machine learning today, it makes me think of what aeronautics was probably like around the turn of the 20th century.

**Chris Benson:** You're speaking my language now.

**David Kanter:** Yeah. You know, you had dozens of people working on planes, from the Wright brothers, to the folks in France, who I can't remember their name... But it's all sort of custom, and hand-done. But then you look at where we are today when you hop in a 787, and the process to make it, the output is just totally different.

To pivot to the second part of your question, about MLCommons, our goal is advancing innovation in machine learning, to drive the whole industry forward. So when I think about where we are today, there are a lot of digitally-native companies that have tremendous AI capabilities... But then we look at "How do we reach the rest of the world? How do we reach analog companies?" Someone like Goodyear, for example, or Macy's. As opposed to Amazon, where I think of digitally-native shopping. So in order for that to happen, it can't be these handcrafted things; you need a lot of standard components. And we have the beginnings of that, we have things like TensorFlow and PyTorch to help us along the way, but there's a well-proven recipe for industry growth...

\[16:00\] MLCommons is really built to address three key things that we see there. One of these performance benchmarks, and generally speaking, metrics - and you know, if you think about the industrial revolution, if you wanna make a precision airplane, if you confuse your meters with inches, you end up with things like crashing the Mars lander. So we've gotta get the measurement down.

Then we need our raw materials. You've had folks on this show before, like our colleagues at Mozilla, and Unsplash, where you referenced ImageNet. And this is the raw ingredient to AI and ML, which is datasets. And there we're very much influenced by ImageNet. They provided the resource that catalyzed this latest revolution in machine learning. \[unintelligible 00:16:55.28\] and convolutional nets beat humans at image classification, and the rest is an adventure we're living out.

And then the third pillar of MLCommons is what I call best practices, which is "How do we ensure model portability? How do we get from where we are today, which is --" You know, if we look at BERT, which has just profoundly changed how everyone thinks about NLP... It was a paper. And maybe you've got some code, but it would take you probably a month to go from paper and code that works at Google on their internal infrastructure, to "I could run this on the compute resources that I might have at Lockheed Martin." So if we could shorten that time down to a day, or hours, to allow reproducibility of those models, to allow portability, that would be a tremendous boon to the whole industry.

So those are the three things that we see really driving the industry forward and helping to bring the benefits of machine learning, whether it's translation, speech recognition, self-driving cars, medical diagnostics to the whole world.

**Break:** \[18:19\]

**Daniel Whitenack:** David, I'm pretty curious about the structure and origins of MLCommons, in the sense that I'm kind of reading about this really exciting group of people that's joined together to help form MLCommons, with the initial founding board including representatives, from people like Alibaba, and Facebook AI, and Google, Intel... But then you've got people involved, researchers from Academia, and even startups... So could you kind of describe a little bit of the origin story of how this organization came to be, and what it was like? Was it like people from all of these different companies on a Zoom call, and just saying "Hey, this thing needs to exist? Remember that MLPerf thing? Maybe we need to create this other thing..." Or has it been sort of forming, and is it rooted in deeper things, like MLPerf, and that sort of thing?

**David Kanter:** Yeah, so one of the things you tapped into is bringing people together and forming a really dynamic community. MLPerf really grew organically, and it did start -- and I'd say, of our founders, Peter Madsen from Google, who's the president, and I probably talk to him almost every day, even when we're on vacation... He really kind of dreamed it up. And we got started with probably an equal mix of academics and industry folks, like the folks you mentioned (NVIDIA, etc.) I think we had 70 or 80 companies with representatives involved in MLPerf.

And at the start of last year we kind of got started on forming a non-profit that would become MLCommons, and then actually in December is when we formally launched. A lot of these companies, a lot of these researchers became official members, and that is what got us stared. But I think it was the excitement around the benchmarks, and just having industry-standard benchmarks and establishing a reputation for "We're doing things that are fair to everyone", startups, irrespective of what country they're in, and useful. And seeing that "Yeah, this is a community that people can trust and work with."

**Chris Benson:** As you talk about the community, one of the things I'm wondering is - there are these other communities... You know, Google has built a community around TensorFlow, NVIDIA has built a community around their hardware platform and the software that supports it, there's the PyTorch community... And as you've built out the MLCommons community, how do you go about interfacing with those other communities, and the ecosystems that those communities have built? Because you essentially have multiple ecosystems that are all trying to work together for that total solution. So how does that look, from your perspective?

**David Kanter:** One of the things that we're very blessed by is that a lot of the folks who are pioneering key pieces of infrastructure in ML are members. TensorFlow and PyTorch - we have representatives from Facebook and from Google, so when we run into something or have a question... You know, sometimes we're lucky enough to get the right people there in the call to start with, but you know, it's pre-Covid days, a tap of the shoulder away, and now probably an instant message, or Slack, or a Facebook message away.

\[24:02\] So I think that has actually been a tremendous strength of ours. But a lot of these communities are almost orthogonal to what we do. Our benchmarks, for example, are full-system. So it incorporates software systems, cloud, hardware, compilers, everything. But we do very much -- we're a global and open standard, and in some sense you really have to be, as a benchmarking organization, because there's this intrinsic judging quality to it. And just as it is in the judicial system in the United States, the judging organizations, so to speak, must be above reproach, must be open and equal to all. And that is very much our goal. So it's not that there are members per se, but we wanna work with everyone. We're all fellow travelers.

**Daniel Whitenack:** Good way to put it, I like that a lot. So we've talked a lot about MLPerf... Maybe we could dive into a couple of these other pillars that you mention. You mentioned datasets; I'm looking at your website now - you talk about datasets and models publicly-available, and can form the foundation of new capabilities... And specifically, I see you mentioned the speech dataset, the world's largest public speech-to-text dataset, which is maybe your first foray into this. So could you maybe describe your vision in the longer term for this datasets component of MLCommons? And then how you got started with the speech dataset.

**David Kanter:** Yeah, absolutely. I think you've sort of hit the nail on the head, which is that we want to be providing and drive the industry forward with these datasets. I think of our speech project as ImageNet for speech in shorthand. That's the 30-second pitch to someone in ML. And as I look out, there's a lot of other areas that could use this sort of public dataset. Now, my colleague \[unintelligible 00:26:00.20\] who's a professor at Harvard - he did a study with his graduate students, and one of the things he found is that even at companies that have huge amounts of internal data, like a Google and an Alibaba, most of their research studies were done with public datasets, because that gives you a level playing field to assess accuracy. And you get reproducibility, and all of these things. But we wanna push forward with datasets in all these different areas, because that will ultimately democratize access to this technology, and thereby benefit everyone.

So that's the vision... And as you say, the People's Speech is our first dataset. Late last year we actually started sampling it to partners. So two of our members have speech teams, and - you know, if there's anyone out there with a speech team that's interested, this is... I think it's about ten years' worth of audio.

**Daniel Whitenack:** I'm raising my hand; no one can see that on Zoom, but... \[laughter\] I'll have to follow up afterwards.

**David Kanter:** Yeah, absolutely. We should totally talk. And it's big, it's ten terrabytes of data. And actually, one of the pieces of feedback we got was -- for many people, it's actually a little too big, so we need to slice it down into smaller chunks, so that individuals can play with it, or a university. But we're getting it out to field-test, because again, the hypothesis here is this is about 30x or 40x bigger than anything that's publicly available today. And I think the key thing is for speech-to-text models you need about 10,000 hours to actually produce something that's functional.

Now, I don't claim that this will give you a truly production-worthy model, but I think it can really lower the bar for a lot of people, and it's very exciting to me. There's two folks in my life who actually really benefit from speech technology.

\[27:55\] One is my mother, who had a stroke a few years back, and has difficulty reading, but she uses speech-to-text on her phone all the time. So that's great. She speaks English, and both English and Mandarin have very robust systems... But it doesn't take long before you get to other very commonly-spoken languages, like Portuguese, where there's really almost no public data, but that's a language that's spoken by 300 million people.

So if we can help push those frontiers out... I would love to be able to extend, and play a role in extending speech technology to the next several billion people, this decade.

**Daniel Whitenack:** I'm kind of interested -- as I was indicating while you were talking, I'm very interested in this, because we have our own speech projects going on in our organization, and our organization's mission is to extend benefits of these types of technologies and other things to local language communities. I'm super-interested. But I know from experience this is a lot of work, putting these datasets together, so how does a collaborative non-profit which is, I imagine, kind of amorphous and changing a lot - how do you put the right pieces in place to make sure that this can be accomplished at this scale?

**David Kanter:** Yeah. So the good news is we are more official than three raccoons in a trench coat.

**Daniel Whitenack:** Good, good.

**Chris Benson:** I like that. That's a good one.

**David Kanter:** Yeah. I don't know if you guys have seen \[unintelligible 00:29:33.19\] who is literally three children inside a trench coat, who goes to work and does a business. That's sort of my prototype.

**Daniel Whitenack:** Yeah, yeah. And I know, for example, at our non-profit you form a lot of partnerships, and at some point it gets a little bit harder, like "Where does this entity end and this one start, in terms of what they're doing?" These people are with this organization, but they're working on that -- maybe there's people in Facebook or Google, but they're working with and on MLCommons projects... How does that play out and how do you staff up to do this dataset work?

**David Kanter:** Yeah, so I think that kind of dives into some of what our organization provides, which is -- so we do have a budget, and we do use some of that for staff; we hire consultants and folks to help us out. We have a core of very dedicated folks, who are incredibly interested and focused on speech... And a lot of those folks have gravitated towards us, and collaborating with others is absolutely part of this. But I do see some of the benefits that we have is that through the community that is MLCommons we have access to tremendous compute resources. So if we want to start training a model on this 87,000 of speech, which we do, we can go to some of the world's top cloud providers and work with them to take advantage of the resources that they have, and collaborate together.

But it is true that as a volunteer project one of the biggest challenges is turnover. And this is true in graduate schools as well, and actually this is one of the things that I think is sort of a lesson from ImageNet that we're trying to build on and improve, which is the ImageNet folks did something amazing on a very tight budget. We wanna reproduce that. But we also think that the techniques that go building these datasets are durable, and by putting a lot of this expertise within an organization, we can drive down the cost over time... Because there's all sorts of tricks of the trade that are very much embodied in people, and may not get written down. So when you have people rotating in and out, you kind of lose that. But by having an organization behind that, where it's all written down, and we have some continuity - folks like myself and other leads - I think there is a great opportunity to really build up momentum that is beyond a single project.

**Break:** \[32:22\]

**Chris Benson:** David, I'm kind of curious - I know that one of the pillars that you have that is around best practices is called MLCube. I wonder if you could start us off by describing what that is, what it's conventions are, and such, and kind of give us a quick intro to that.

**David Kanter:** Yeah. That is a great question. MLCube is really -- I think of it as a set of conventions around ML models. It's distinct from containerization. Obviously, many folks are gonna be familiar with Docker and so forth... But you can't take a Docker from inside Google, containing BERT, and expect that to run out-of-the-box on AWS, or systems that don't allow for containerization.

Some of the organizations that we work with are super-computer sites, and some of those are classified super-computers, or portions of their infrastructure classified, and they have all sorts of rules about what can or cannot work.

**Chris Benson:** They do indeed.

**David Kanter:** Yeah, right? I'm sure this is everyday for you. So how can we get a set of conventions in the way that will help you move models around transparently, so you can pick it up from one set of infrastructure to another, and just be up and running. And you know, it might not give you the best performance, but it'll actually run and allow you to reproduce things. So that's kind of the goal of MLCube. And we're always very interested in volunteers, folks to use it, because ultimately what I would love to see is a lot of these very common models that people use as references, whether it's ResNet or BERT, to be packaged up in MLCube, so that you can trust that when you grab something from the Model Zoo, it's just gonna run wherever you are, and you don't have to fight tooth and nail with whatever the underlying infrastructure is. And I think that would just make everyone's life a lot easier.

**Daniel Whitenack:** Yeah, I definitely agree... Speaking after some interesting experiences, even this last week, trying to get a number of random models to run locally. It's difficult, and people are eager, because they see these really awesome things coming out in research papers, and "Will this happen at Google, or will this happen in OpenAI?" And almost instantly it's up on GitHub, but then actually running it and doing something useful with it is a whole other game.

\[35:55\] So in terms of like -- let's say I'm an AI practitioner, and you mentioned Model Zoo, and portable models... What are you envisioning with MLCube my workflow would be if I was either contributing some model to MLCube, or some method? And also on the other side, so being a consumer of that and integrating it into my own work.

**David Kanter:** Yeah, that is a perfect question. Actually, this is one of the things that makes me very glad that we had certain deliverables in our launch, which was the MLCube team put together a great tutorial on how to publish a model and package it up with MLCube. So I think we have a couple of examples up already... And the beautiful future I'd love to see is where it's so low-friction that everyone who's publishing research papers does it.

The interaction with MLPerf is we have a bunch of models that we use to measure performance, and those run on a huge variety of hardware. So this is something that is in our own interest as well, and seeing cloud providers package things up. So seeing more people package things up would be great, in part because I think a lot of what this does is it creates huge convenience on the consumer side, as you point out. So you can grab things and just get them up and running a lot more quickly.

Now, I think especially for research and experimentation this is tremendously powerful, because if you're doing things in production, you're gonna really, really need to crank out optimizations. But I think even in production, this is actually potentially very powerful if you think about sort of a scenario where you have a model that you sort of centrally developed, but then you need to maybe tailor a little bit for hundreds of different sites. So this could be a convenient form to pass that model around it.

We have some tutorials on how to -- sort of the Hello World equivalent. And I think we might have one with AMNEST, and then one with some other more classic ML stuff up. Potentially BERT. I'd have to check my notes to see... For "Here's how you publish, and then here's how you consume." But again, it's really about "How do we remove all these sources of friction from the folks who are gonna drive the industry forward?", and cutting edge research.

**Chris Benson:** Does most of that happen inside the working groups that you have? Are there working groups for some things, and then you -- how do you divide out the productivity of what's coming out of the whole process, end-to-end?

**David Kanter:** You totally nailed it. DNA-wise, I think we have a lot in common with open source organizations, in terms of principles. By default, everything is open, it's on GitHub... We have working group meetings, usually once a week... And when we started, it was monthly physical meetings in the Bay Area, and then quarterly. And one of the things that I'm very much looking forward to -- we are an international organization, and one of my goals for 2020 was to start having some sort of regular meetings in Europe and in Asia, and obviously that's on the agenda for the second half of this year.

**Chris Benson:** Some unexpected things came up along the way.

**Daniel Whitenack:** I couldn't imagine why...

**David Kanter:** Yeah... No idea.

**Daniel Whitenack:** \[laughs\] Hopefully this is not too bold of a question, but I think people might find it interesting, because they see certain organizations, like Chris mentioned, the Linux Foundation, or maybe Cloud Native, or whatever it is... So you mentioned you had a budget, you had staff... Did the companies that are sort of subscribing and contributing and are part of the organization - are they contributing financially to make it happen? Is that how it happens practically?

**David Kanter:** It's exactly like NPR. We have some fantastic mugs.

**Daniel Whitenack:** Yeah, I bet so...

**David Kanter:** Although it's actually jackets. You can't see it because this is a podcast, but I am wearing one with the MLPerf logo.

**Daniel Whitenack:** \[40:02\] Oh, yeah.

**Chris Benson:** I see it there.

**Daniel Whitenack:** Chris and I can vouch for the style

**Chris Benson:** That's correct. \[laughter\]

**David Kanter:** Yeah. So the membership is open to individuals in academics, and that is free, but for companies it is a paid membership. I think when we started out, one of the questions we asked ourselves was "Do we really need to create another organization?" and one of the things that we actually -- we clearly came to the conclusion of yes, and I think the motivator behind that is there are a lot of engineering organizations that exist, like the Linux Foundation, Open Compute, but none of them are actually focused on AI. And there are a lot of AI organizations, like the partnership on AI and so forth, but none of them are actually focused on collective engineering.

So that's kind of the sweet spot that we wanna focus on and do. And you know, you have marketing-focused organizations... And we'll leave that to them. You have policy-focused organizations, and again, that's a very complicated area... And we really wanna focus on building things. That's kind of what's in our DNA.

**Chris Benson:** I have a quick follow-up to that... Over time, and across many episodes, Daniel and I have chit-chatted around the fact that as AI really matures, it's really along the longer path merging with software development, as there's a set of tools that are becoming available, and they're becoming easier over time, and standardized over time... So how do you see your future with these -- obviously, you're kind of in your sweet spot; but your sweet spot, as it kind of merges over time closer to other sweet spots that other organizations are filling - how does that change the nature of where you all are operating? ...not just your own organization, but the others that you're working with. Do you have any sense of that, five years out, ten years out?

**David Kanter:** That's a really good question...

**Chris Benson:** ...or did I just throw a complete random--

**David Kanter:** No, no, no. So I think, realistically, the benchmarking and the metrics probably stay the same. That value is very independent. I think that, again, the dataset creation is very unique to ML, because there's a lot of things where when it comes to benchmarking and other stuff you can fake the dataset, and that's commonly done... But by definition, that does not work in ML. So I only see the need for building datasets growing over time as ML pervades more and more things, right?

**Chris Benson:** That's a totally fair answer, yeah.

**David Kanter:** And on the best practices... I mean, let's take this to the limit - maybe one day ML will be as pedestrian as Excel is. At that point, the best practices will have done its job. But it'll be decades before we ever get there, right? And also, the best practices - I think of it as "How do we remove frictions?" There will always be new things popping up. Today, model portability and interoperability is probably number one, as we've said... But I think there's a very long list, and as we go along, we will find more friction that we want to help remove, until we get to the demo that is truly indistinguishable from magic, right?

**Daniel Whitenack:** \[laughs\] So how do you with this sort of very collaborative group, and so many parties involved, do you know sort of right now -- like, I'm just thinking of datasets... How do you choose what's the next dataset that you're gonna focus on, and what area it is, and that sort of thing? Is that driven out of feedback from the community, or is there kind of a roadmap from the board, or like a combination of the two? How's that work?

**David Kanter:** \[43:56\] That's a very good question. I think it is very much driven by the member community and the board. And one of the keys to any effort like this is, you know, we don't really wanna be taking money away from our member companies, but we obviously have to keep the lights on and do -- you know, there's a lot of functions that we are providing. But part of the value of being a member is helping to drive that forward.

So there are other things that we've identified as being opportunities, in terms of datasets. And that is sort of a board decision, but the way the board works - this is not like a Roman emperor. This is actually genuinely community-driven. We listen to our members... And then there's also a bit of vision involved. And vision is not "You just listen to everyone and do what they say", you have to start with an end in mind. And by nature, a community will generally pull you to where their focus is, but some of the things that we happen to think are very important are things like AI and medicine. That's clearly huge potential for impact on the whole world. Self-driving vehicles, another one. Tens of thousands of people are killed or injured in automobile accidents, and if we could cut that down by an order of magnitude, that would just be a huge benefit to society.

So it's kind of a combination and there's a bit of art to it, because it does draw on all three of those things - broader community interest, what the board thinks, and then a bit of vision in terms of what the researchers and academics and folks really on the cutting edge think there is opportunity.

**Chris Benson:** So you've actually just totally transitioned me into my next question, because you were starting to get into vision... So as we wind up here, I'd really be interested -- you mentioned AI in medicine, you mentioned self-driving... But you personally, as you were helming the organization, you're creating all these relationships, you're engaged in the technology that's driving this forward, and the algorithms... Just clean slate, and any kind of answer you want - what is your vision for where things are going over the next five years or longer? Ten years, whatever you feel comfortable with. What's the thing that when you are going to be at night, laying down, and before you fall asleep it's kind of getting you excited, and thinking about at some point we're gonna hit that?

**David Kanter:** Honestly, it's just really empowering, new innovations that are gonna benefit everyone, built on ML and AI. I think the speech-to-text is a great example. A lot of our data is in English initially, but step two is "How do we go from English to a dozen or a hundred or a thousand other languages?" A thousand if we're being very bold. And you can start thinking about how you might leverage transfer learning to get from a speech-to-text system that has a solid command of English, to other languages.

But again, medicine - my father is a physician. He's retired now. But I just see huge amounts of potential there. And will we necessarily be building the pioneering innovations, things like BERT, that really do drive the whole industry forward? No, but we're gonna be filling out the gaps around that. So I think just knowing that our datasets are gonna help catalyze things going forward, that we're gonna make everything more efficient - those are the things that are really exciting to me. And it's a tide that lifts all ships.

The name of the game is "How do we build a better world and a bigger role for AI?" because ultimately then all of our members benefit, and everyone across the world. So I think those are the things that really excite me.

\[47:48\] Five years from now maybe there are other pillars to our organization that kind of come up. One of the things that we like having is we have sort of a research group that allows for more rapid development of these ideas, so that -- you know, things like the datasets, we can sort of quickly iterate on until we figure out that "Yeah, this is a good idea. This is mature now. Let's go push some real weight behind it." Or "That idea wasn't quite ready." And there's a lot ideas that are great, but it might not be the right time for them.

So the three things we've started should really keep us good for the next five years, maybe even longer, but... Just the impact, and then maybe some other new ideas as they come along. So that's for me, I think.

**Daniel Whitenack:** Yeah. I think that's a very inspiring and good way to start out 2021, thinking about some of those ways in which AI can benefit those who it's not benefitting now... And as well, all of us who are in the industry can benefit as well. I really appreciate your perspective on that, and I'm excited about the things that MLCommons is doing.

We will definitely link to a bunch of different things in our show notes, including MLCube, and People's Speech dataset, and MLPerf, and MLCommons in general... So definitely make sure and check those out. Check out what they're doing, and get involved if you're able to.

Thank you so much, David. I really appreciate you joining us today and recording with us at the very start of 2021.

**David Kanter:** Yeah, it's been my pleasure. Thank you for taking the time to talk with me. It's great especially to connect to folks who are genuinely interested, both on an intellectual level and on a sort of day-to-day level on the task and the mission that we're engaged in. There's a lot of exciting things going on in AI and ML. Maybe we can have a separate section where I get to ask you the questions on your thoughts on that vision.

**Daniel Whitenack:** That sounds great. We'll definitely have to have a follow-up. I mean, with MLCommons being so embedded across the industry, I'm sure we'll be crossing paths, and I hope we can have another conversation.

**David Kanter:** Absolutely.

**Chris Benson:** Thank you. Happy new year!

**David Kanter:** Happy new year to you as well, and everyone listening.
