**Daniel Whitenack:** Welcome to another episode of Practical AI. This is Daniel Whitenack. I am a data scientist at SIL International, and I'm joined as always by my co-host, Chris Benson, who is a principal emerging technology strategist at Lockheed Martin. How are you doing, Chris?

**Chris Benson:** I am doing very well. How's it going, Daniel?

**Daniel Whitenack:** It's going great, it's warmer now in the U.S. A lot of people have been having some issues, particularly down in Texas and other areas... So for those listening later in the podcast, this is February of 2021. A lot of snow and cold weather in the U.S. here.

**Chris Benson:** A couple of people on our team at work are in Texas, and we've been getting all the stories, when they're able to connect, and stuff.

**Daniel Whitenack:** Yeah.

**Chris Benson:** I think they're getting through it, finally, thank goodness. It was pretty horrible. But in the meantime, I am enjoying my 70-degree-plus weather outside, spring-like, and I'm kind of sticking my tongue out on them on Zoom meetings.

**Daniel Whitenack:** Yeah, it's always interesting during these particular types of events, because you kind of just assume that people have all of this redundant, fault-tolerant infrastructure going on, for their APIs and other things... And these sorts of events really reveal that is not the case. I know one of the APIs we frequently use is apparently on an on-prem server in Dallas, and they did not have power. You learn new and interesting things like that.

**Chris Benson:** You know what - after the past year, there's nothing that surprises me anymore. Not now.

**Daniel Whitenack:** Yeah, I guess that's true...

**Chris Benson:** Global pandemics, all sorts of strife, you name it... Nothing fazes me now.

**Daniel Whitenack:** Yeah, I'm glad to hear you've built a lot of robustness into your personal life there, Chris...

**Daniel Whitenack:** There we go.

**Chris Benson:** I laugh a lot, I snicker a lot. That's how I cope.

**Daniel Whitenack:** Yeah. Well, a few months ago actually I think it was, one of the researchers at SIL that I work with called Gary Simons; he's been a linguist and programmer, computational linguist, translator-type researcher for decades, and he sent me this link in our Skype communications and said "Hey, this is a really cool article. You should think about having this on your podcast." There's an article called Green AI from communications of the ACM, and I'm really happy today, because we get to materialize what Gary saw and what he recommended to me, and we've got Roy Schwartz and Jesse Dodge with us.

Roy is a senior lecturer at Hebrew University of Jerusalem, and Jesse Dodge is a post-doc at the Allen Institute for AI. They were both authors on that article. Welcome, guys!

**Jesse Dodge:** \[04:27\] Thanks for having us.

**Roy Schwartz:** Thank you.

**Daniel Whitenack:** Yeah. If both of you could just give us a little bit of a background about yourselves, that'd be great. Why don't we start with Jesse.

**Jesse Dodge:** Sure. I finished my Ph.D. from Carnegie Mellon in the Language Technologies Institute last year, in 2020, in the pandemic, although I spent most of my Ph.D. at the University of Washington in Seattle... And part of that time I spent working at the Allen Institute for AI, where after I graduated, now I'm back as a post-doc full-time.

So we wrote this article back in -- we were thinking about this for quite a while, and wrote this back in 2019, and really got it out in 2020. So now even though the offices are closed, I'm still here in Seattle, and I am on the Allen NLP team once again.

**Daniel Whitenack:** Awesome. And what are you specifically working on?

**Jesse Dodge:** My research falls under two broad umbrellas. The first is related to efficiency, similar to this Green AI idea that we'll get into. I work on making models more efficient along the number of dimensions that they have, in terms of the complexity, in terms of inference. Generally, related to any way that you can measure the total computational cost of getting some kind of experimental result.

And then the second pillar of my research relates to reproducibility, where I created the natural language processing reproducibility checklist that was used at four major NLP conferences now... And I've published some work on how we can make the science of machine learning and natural language processing more reproducible.

**Daniel Whitenack:** Yeah, that's awesome. Well, you're working on two things that are just desperately needed in terms of focus... So yeah, I commend you in terms of that. It's really great to hear. Roy, what about yourself?

**Roy Schwartz:** Hi. I'm Roy Schwartz, I'm a senior lecturer, which is an equivalent to assistant professor, at the Hebrew University of Jerusalem. I'm currently in Jerusalem. I joined the Hebrew University last summer. Before that I spent four years in Seattle, where I got to meet Jesse, fortunately. I was a post-doc and then a research scientist at the University of Washington and the Allen Institute for AI. These were four wonderful years, but now I'm back home.

Similar to Jesse, to some extent, I also came from the university where I did my Ph.D, so I took a break and came back. My research also spans two (or maybe three) dimensions; one of them is similar to Jesse - efficiency, and trying to think about ways to reduce the cost of AI, and NLP in particular. The other is trying to get a better understanding of this technology, now that we have models that are becoming so big and so good at what they're doing, but at the same time it's very hard to know why they're doing certain things, why some things work and some don't, why do models reach certain decisions...

\[07:44\] I'm particularly interested in the role of data in all of this - how do our datasets look, what do they contain, what kind of phenomena are encoded in them... And I like to make connections between all of these goals, between understanding our data and between making things more efficient... And these are some of the things that I'm most excited about.

**Daniel Whitenack:** Awesome. Before we move on, what is your general impression about progress in this process of trying to make our models more interpretable and understand more about them? Obviously, you're doing work in the field, so hopefully you see progress in that... But as an industry as a whole, where do you think we are on that journey?

**Roy Schwartz:** That's a great question... So as you said, on the one hand we're making tons of progress. Lots of very smart people are working towards developing a method to probe models, to kind of poke them and ask them "Do you know syntax? Do you know world knowledge? Do you know this and that?" and we're developing methods that are more and more sophisticated to get this information.

At the same time, the core questions that I think will make a huge impact if we're able to solve them - and I'm not sure if these questions are even solvable, to some extent, and I'm happy to talk about it even though it's not the topic of today's talk... It's "How do we get models to explain what they're doing?" To explain it in a reliable way. I'll just say one thing - when you ask a person why did they do something that they did, the explanations are often also not... I mean, they might be a post-rationale of things, and it's hard even for us why we're doing certain things, and we're conscious creatures... So machines - it's much harder to get this. But we're trying.

**Chris Benson:** I appreciate that. As we're talking, I'm looking at your Green AI article here again, and I'm just kind of curious, what was your motivation for putting this out? And probably I should ask as part of that, what is Green AI, initially? How did you decide that this was the thing that you needed to get out there to the world? Because this is a topic that often gets left out of AI ethics, and such. I haven't worked in that field for a while. We can go back to that in a little bit. I'm curious what your motivation was there.

**Jesse Dodge:** Yeah, so I think part of it was some conversations that Roy and I had... Again, this was back in 2019, when we were both at the Allen Institute for AI. And we noticed that there was this increasing trend of larger and larger computational budgets used for some of the research papers that were published in NLP. We looked around and found -- not only did we notice this, but there were a couple other pieces of work that had also noticed this trend.

So back when I started my Ph.D, back in 2013, I could run my experiments often on a used laptop that I had purchased off of Amazon. And it was kind of slow, but I could run most of my -- I could train my models in a few minutes or an hour maybe, and it worked, and that was okay. And then we noticed -- in 2019 we were like "Wow, a lot of these models don't even fit on a single GPU, and we have to rent cloud instances to be able to actually use some of these models."

Plus, in some cases, papers would do for example a tremendous amount of hyperparameter optimization, or they would train on a huge amount of data, well beyond what we could do even at a good institution, like the University of Washington, or AI2.

One interesting thing - and this has really been followed up by some concrete research - is that we do find significant improvements and performance across a lot of tasks just by scaling up these models. So language modeling, for example, has been a pretty foundational task in NLP. What we've found is that training models to do well at this task of language modeling - if you train a large enough model on enough language data, then that model can do some other tasks that we're interested in as well. So it somehow learns some kind of representation of language that's useful across a wide variety of tasks, but to get there we saw just huge computational budgets used for a number of these papers.

\[12:13\] And interestingly -- I mean, we wrote this a while ago, but the trend has not slowed down. Roy and I are still working on similar motivated pieces about how this is really driving a lot of research in our field... These massive scaling laws, for example, are pushing state of the art, and also getting a lot of attention. Our field is interesting - you can view our field through that lens now, and see some interesting results.

**Daniel Whitenack:** Yeah. I'm curious - I have my own thoughts about how I might answer this question, but I also haven't done the amount of thinking that both of you have, so I don't know, maybe Roy, if you wanna comment on this, or kick it back to Jesse... So that trend has been continuing, and we're seeing those sort of improved results in some areas along that trend, like in language modeling... So why is that a problem? Or what sorts of problems or red flags does that bring up?

**Roy Schwartz:** Yeah, I think it's interesting, because Jesse and I bring complementary motivations for tackling this problem. When I started thinking about these things -- yes, I was having discussions with Jesse about this, but I'm a person that cares about the environment, and I try to make personal choices that... You know, I ride my bike to work - because it's healthy, but also because it allows me to not drive my car. And I try to turn the light off when I leave the room. You know, these little things that don't matter much at a global scale, but I make them my personal choices.

And then I go to my office, and I -- I don't know if you've ever seen a GPU, but this is a very loud machine, a machine that emits a lot of heat...

**Daniel Whitenack:** It's hot, yeah.

**Roy Schwartz:** Yeah... And we're running stuff, like "Okay, let's just push a button", and it's suddenly five or ten degrees up in your room maybe... But not on your planet, hopefully. And it's been something that I've been thinking about quite a bit - what's the total impact of our field.

Jesse and I have been talking about this, and then I think in mid-2019 or early/mid-2019 that paper came out from the University of Massachusetts, led by Emma Strubell and her colleagues, that tried to quantify the CO2 impact of large-scale NLP experiments. She and her colleagues came to the conclusion that one of the most expensive experiments that run the trainer model in a process called Neural Architecture Search, which basically means "We're gonna train a bunch of models and select the best one." When I say "a bunch", I'm talking about thousands or tens of thousands of experiments...

And she computed using some rough estimations to be said, that the amount of CO2 emitted by this process is equivalent to the life-term emission of five cars, or several flights, or... I don't remember fully, but something that--

**Daniel Whitenack:** I think it was five cars -- I remember this coming out...

**Chris Benson:** I do, too.

**Daniel Whitenack:** ...and I was also shocked.

**Chris Benson:** Daniel and I actually talked about this in an episode way back when that came out. I remember us just commenting on it.

**Roy Schwartz:** Yeah, everybody was talking about it, and it really hit me in a place that I -- this is something that I was thinking about. I was sad to see that my intuitions were right, in some sense. I was kind of hoping that maybe it's not that bad.

And then Jesse and I were having discussions, along with other people at AI2, and we were saying "This is something we need to do something about", to make the community more aware of it. AI2 is an institution that our goal is to -- I mean, I'm no longer working there, but at the time I was working there... To do AI for the common good, and this feels like a natural fit for the goals of the organizations.

\[16:05\] We got \[unintelligible 00:16:06.00\] who was my manager and Jesse's advisor at the time on board, and we wrote this piece, just hoping to get people thinking about this. Not necessarily thinking about this in terms of finding more accurate ways to quantify how much energy is emitted and how much are the costs of these experiments, and trying to encourage the community to work on more efficient solutions that would allow us to reduce these costs.

**Jesse Dodge:** Yeah. One thing that Roy just mentioned is that we brought different perspectives to this. I completely agree with everything that Roy just said. That's super-motivational. I think it's very important going forward that we keep track of CO2 estimates, and we do a great job at that.

There's another side to this also, which we write about in our Green AI paper, where we talk about the research inequality, or inequality in the research community, where some of these experiments really could only be done by the 1% of the research community; those that have access to tremendous numbers of GPUs, or just lots of machines.

One question that we address in our paper is "Is this valuable research, that we should treat on the same level as other types of research that can be done, primarily motivated by just a good idea, rather than really expensive experiments?" Both of these are negative consequences of this increasing trend that we observed.

One interesting thing - I think this is an interesting thing, back in 2019, going back to that Strubell et al paper... I've found that through a number of conversations that I had had, and also the general information I saw online, before Emma and her colleagues wrote that paper estimating the CO2 emissions, there was an understanding of how some work was very expensive, how some work was "boiling the ocean", for example, just to get a 1% improvement or half a percent improvement on some task.

So when Emma wrote that paper, I was surprised... But again, I felt similarly to Roy - I wished I hadn't been surprised by the results that I saw. I wish they had claimed that people were emitting less CO2... But it really did capture -- like, her paper, and then our paper as well, I think these got so much traction, partly because we were outlining a trend that other people had also noticed. And like I said, that trend really does -- I think we focus on two facets, and there are probably others, but the CO2 emissions and also this research in equality are both direct consequences of that increasing trend.

**Break:** \[19:05\]

**Chris Benson:** So you brought up something that really kind of got my brain really going there for a minute... I was thinking about the fact that this really can matter a lot, even if the number of practitioners in AI relative to all the people producing CO2 is quite small... But you mentioned going through all these models, and when we're doing things like hyperparameter optimization, and trying little adjustments to architectures all the way through, and then one practitioner doing work is essentially being thousands of practitioners on a per-model basis, as they're trying to hone in on that - it really amplifies the impact of what can happen.

So I guess it's less of a problem that a very few people are doing and more of a people that because of that amplification is quite outsized relative to the number of people doing it... Am I getting that right? Am I understanding the problem in the way that you're thinking about it, or am I missing something there?

**Roy Schwartz:** I'm not 100% sure that I understood you, so let me try to say where I think this is going.

**Chris Benson:** Sure.

**Roy Schwartz:** I'm assuming you're talking about the environmental aspect...

**Chris Benson:** Yeah, the environmental impact.

**Roy Schwartz:** ...because the inequality aspect - I think it's pretty clear that a very small proportion of the community can afford to run these experiments... And when we're thinking about the environmental effect, then some people argue -- and I'm not sure I disagree even that it's not so bad because these experiments are being run just a handful of times... And I might agree on that, I must say. There are different ways in which the AI community is contributing, quote-unquote, to the emission of CO2 into the atmosphere. Probably the one that's the easiest to measure is the most expensive experiments; that's perhaps one dimension.

You can also think about the amount of training being done by the entire community, and probably most influential in this sense is the cost of inference, cost of taking a model that's been trained and running it. This one operation is very cheap, obviously compared to training a model, but this is something that happens at scale, if you think about the amount of Google search queries that are being run per day, or the translation, or the number of videos being edited, or recommendations in various websites...

\[24:03\] So there's different dimensions to these problems, and I think what we're trying to promote is not necessarily to say "Look, we're boiling the ocean", as Jesse said, quote-unquote, but we don't know exactly what is it that we're doing, and let's be more honest about it; let's do a better job of reporting and let's try to reduce these costs.

It's hard to argue against -- I mean, who doesn't want cheaper models, right? It's obviously that other things are -- you know, if cheaper models perform slightly worse, and maybe this "slightly worse" translates to slightly less revenue, then maybe cheaper isn't... There are different ways to define cheap. So I think what we're trying to promote is to get more people thinking about it, and not just improving another epsilon on the accuracy level.

**Daniel Whitenack:** Yeah, that's super-helpful. One of the things that's running through my mind, talking about 'What are the other options? What does it mean to do Green AI?" And I have this parallel in my mind - I come from a physics background, and if you're in high-energy physics now, there's just been a progression of larger and larger particle accelerators... And now if you wanna do high-energy physics, you're gonna spend some time at CERN in Switzerland or whatever, just because no one has another CERN. They're just not there. So is there another option -- and I'm thinking particularly, Jesse, of what you're highlighting in terms of the research inequality; I think that's a really great point... Like, what can we do in terms of reducing that inequality, and is there something more that we can say, other than "Tough luck. Go work at Google, or somewhere that has these amazing, seemingly endless resources to do these massive experiments"?

**Jesse Dodge:** Yeah, that's a great question. I think this is something that comes up a lot, the relationship -- when we talk about Green AI, sometimes somebody will say to us "Oh, but in biology it costs so much to do any experiment", because you need a wet lab, and because you need some equipment, and you just can't do it without that equipment. So is it bad that some experiments in our field are expensive? And I think the answer here is really that in the computational sciences, and in machine learning and in NLP in particular, we really can.

There are a few things that we can do that make future comparisons against our work with smaller budgets easier. One example of that might be "Sure, I train a model on all of the language data on the entire internet." But I can also evaluate that same model after training on only a fraction of that data. And if I do this - let's say I train and evaluate... Evaluation in this case is typically pretty inexpensive, so your evaluation set, your dataset that you evaluate on, is often much smaller than -- it's like a tenth or even smaller of your training size. So one thing that we can do is just checkpoint our model, or evaluate it regularly throughout training, and then a future researcher will be able to come up with a new idea. Let's say they have a new model that they wanna evaluate, and they can compare against some of those smaller-budget evaluations.

So for us, the point here is that in our field we really do have a few ways that we can build in these low-budget comparison opportunities... And that enables not just future comparisons, but that really drives this sort of competitive nature of our field, where instead of trying to improve just the absolute best-found performance, somebody could try to find a better performance efficiency trade-off, where at a low budget, their new idea -- a low budget for the number of parameters in your model, or the total number of experiments of hyperparameter tuning, or the amount of training data that you use, along any of those dimensions, somebody else might come along and try to compare against your work, specifically in those low-budget regimes.

\[28:21\] So I think that's a key difference between our field and physics, like you mentioned, or we often hear biology... And really, if you think about it, if you're training a model and it costs you, say, a million dollars to train on all of the internet, spending an extra $10,000 on just evaluating that model, spending an extra tenth of one percent or some small fraction of your total budget, so that other people in the future, they can have an opportunity, they've got that hook to compare against - that is one way that we can help drive the overall cost down, by promoting that kind of competition.

**Roy Schwartz:** Yeah, I totally agree with what Jesse said. Presenting another angle of this... So currently, there are certain norms in our community, there's certain topics of research that get more visibility and more credit from the community, while others aren't... And I don't wanna say the naive assumption is "You know, go work at Google", as you said; but the fact is that when we were thinking about this paper a couple of years back, we were doing a short survey of papers in \[unintelligible 00:29:32.01\] that's the top venue for our field - and in other similar venues in other fields of AI... And we had a very hard time finding papers that focused on efficiency.

Most of the papers we were looking at, we were trying to say "Okay, we did this, and this, and that, and we got some better improvement here. And this and this and that, and we got some tenth of a percent better on some accuracy, answering questions tenth of a percent better, or translating a fraction of a percent better there." And what we're trying to argue - this is not good balance. It's good that people are working to make our models more accurate; we're not arguing that this is not important. And similarly, we're not arguing that the big models aren't important; they're making huge contributions to our field. But we think that a larger chunk of the research efforts should go towards trying to find solutions that are not an epsilon better, but are twice as fast, or take 10% of the memory, or what have you. We're trying to work with the research community by providing ways to publish this work.

For instance, we've established tracks - tracks, you can think of it as topics - in major conferences. When we were working on some of our work that tried to promote efficiency, or presented an efficient solution (as I said, that works five times faster, but doesn't improve the performance), we had a hard time deciding where to send this paper to, and where it would get the best audience to appreciate it. And what we were able to do in the past year is to set up a green NLP track, or an efficient NLP track in our conferences, that allow works that focus on that to get published, and to get the visibility that they deserve.

**Jesse Dodge:** Yeah, that's great. And I think another thing to build on what Roy just said... Our community -- I think one strength of the research community is that it's just a collection of individuals, all trying to do the best work that they can. There is no overall governing body. So when we think about "How can we get our community to focus on more efficient approaches?", it's kind of tricky. It's just not possible for us to say "Some fraction of the work should cover this topic." So instead, we thought a lot about the types of incentive structures that impact people in our field... And creating this track, as Roy just mentioned, is one of the ways that we can promote this and provide an opportunity, sort of lowering barriers for publishing work on work that promotes efficiency.

**Break:** \[32:22\]

**Chris Benson:** So this is really interesting to me, and as I'm listening to you, I'm trying to think how I'm going to implement... So can you kind of describe some of the good examples of how Green AI has been implemented before, and any kind of guidance? So if I'm a practitioner -- you've hit on some of the practices, but either going through someone else's example, or something that you've described to people... Because I'm just trying to really make it to where when I walk out of here, I wanna be able to go ahead and implement that.

**Jesse Dodge:** Yeah, I'll talk a little bit about this. One thing that I've mentioned already was performance efficiency trade-offs, and I think that the key idea here, and one thing that we've found when we did this survey that Roy mentioned, of papers in our field, is that most papers just don't report anything. They don't report any efficiency-related metrics at all. Most papers in our field invent some new model, or some new loss function, some new training scheme, something like that, and then claim in a table "Here is our better performance. We beat our baselines." But they don't report, for example, training curves, or some other measure where you can trade off efficiency and performance. Maybe accuracy could be one measure of performance.

\[35:56\] So an example of this -- and I guess the first thing that I would say here is what we hope everyone in the research community starts to do (and we are seeing this happen now) is just report something; report some measure of how... Maybe it's going to be the floating-point operations to run your mode. Maybe it's gonna be a training curve. Maybe it's gonna be the results from your hyperparameter optimization search.

One example of this I can point to is a paper - and I use this as a positive example of how somebody can report this kind of information. So Roy and I wrote a paper that used early stopping... So we partway-processed an example, and then potentially had our model stop early. So instead of feeding the example all the way through our model, and then coming up with a prediction at the end, we had ways for our model to stop this computation early and make a decision quickly. And this method allowed us to show performance efficiency trade-offs, these smooth curves, which anyone can then compare against at any point.

And what I would hope to see is other work come along and show a better curve, rather than just a single point on this performance efficiency trade-off; they can report just "Here's how efficient my model was, and here's the performance", potentially beating our entire curve, or just a single point better along one of those dimensions. In this way, just reporting more information allows others to compete along either of those dimensions, or potentially draw a better curve.

**Daniel Whitenack:** I'm curious, I think a lot of what we've talked about has been focused on "What are ways in which we can still explore this regime of large models, but potentially be responsible about how we're reporting the cost of it, and/or how we're allowing others to build on top of what we're building?" I'm wondering how maybe another side of this fits into this whole discussion, which is just plain smaller and/or more efficient or different models.

I'm thinking of things like -- recently, I was playing around with QuartzNet, which is this end-to-end speech recognition model from NVIDIA, which is very compact, based on these 1D time separable convolutions... And the whole model on disk is like 90 megabytes, or something like that... And it shows really good performance, almost comparable, or comparable to these really large speech recognition models. I'm curious -- maybe that also has some advantages in terms of some of the interpretability things, Roy, that you're interested in... Where do you see this whole regime of new and different, more efficient models fitting into this, and do you see momentum or good examples in that area as well?

**Roy Schwartz:** Yeah, I think the thing that I said a few minutes ago, that we saw very little work that focuses on efficiency - I think in the last couple of years there's been more and more work that focuses on that, and we're delighted to see that. It probably has nothing to do with us, it's probably something that would have happened anyway... And I think the main ideas that are being mostly explored are ways to make inference more efficient, and this makes sense, at least in the environmental aspect, but also just in terms of that you want to put a speech recognition or an image processing or a text processing machine on your phone, and then you need for it to be small in terms of number of parameters, or the amount of space it requires, or it doesn't require much energy, so it doesn't drain your battery, and so on.

\[39:56\] So there has been a lot of effort along these dimensions, and I think that the main governing technology there is to train a big model, train it as big as you can, and then train another model to imitate this model to some extent, or to take the large model and get the same performance using fewer resources. There are different techniques of doing that, but that's probably the most common thing that we've seen.

What I think is very interesting and people aren't putting that much effort into is to make the other part of the process more efficient, namely training and what we call model selection - basically, hyperparameter tuning, or other ways of selecting your best model. I think this is the exciting direction that relates to the motivation -- I mean, it's not like there's Jesse's thing and my thing; we're both excited about both of these motivations, and I think this is really one way to improve the ability of the entire community to conduct cutting-edge experiments by reducing the cost of these processes.

**Daniel Whitenack:** So in those other parts of our process that you're talking about, I can just imagine there have been times - and I will totally confess to this - that, whether it be hyperparameter tuning, or model selection or something, logically, the easiest way to go about that sometimes is just to say "Oh, well, I can have this run for a week and a half, and go through all of these things. There may be a smarter or better efficient way to find the right zone that I should be in, but I can just get this running and come back to it in a week and a half, or whatever." Do you also find that to be a thing that you're talking to people about, and a thing that you're running into? I don't wanna call people lazy...

**Chris Benson:** We're kind of spoiled in that way. That's what I was thinking, actually...

**Daniel Whitenack:** Well, you know, programmers and researchers are often lazy, because they have a machine...

**Chris Benson:** "Let's just run it for a while", yeah.

**Jesse Dodge:** This is super-common. There absolutely is a trade-off between how much time you put in as an engineer or as a researcher, as any kind of practitioner; there's definitely a trade-off. You could really carefully narrow down your hyperparameter ranges, and then spend less in GPU hours to find some good optimum... Or you could just set it up to be a super-broad search, let it run for a week, and it'll take you personally two days less time to run those experiments, of your own hours.

The thing is, everyone does this. There is some way to often reduce the amount of time that you have to manually engineer something... And another way this can happen is you'll think of some algorithm to do inference on your model; and then later you'll be like "Oh, you know what? I could make that faster by maybe 5% if I spend a full working day rewriting all of that code." Sometimes it's just not worth it.

The key idea behind our Green AI paper is that this happens all the time with people, and often we just don't report that. One analogy that I use is that in our field we don't keep lab notebooks. We just don't record a lot of the experiments that we run, and we treat those as like negative experiments, experiments that don't show what we're looking for, and then we only report the positive experiments at the end. So we just report the single best performance that we've found. But with our Green AI paper what we argue is that we should be reporting even if it's not always the most optimized, the most efficient approach. The best thing that we can do right now is just report something.

**Chris Benson:** It's a really good point there... And Roy, I wanted to bring you back into it for a moment... One of the things that you say in your paper is "Finally, we note that the trend of releasing pre-trained models publicly is a green success, and we'd like to encourage organizations to continue to release their models in order to save others the cost of retraining them." So how far can you really get with pre-trained models? Do you feel that that will do that? Is that the way we should get people to start thinking about it? Because it seems like there's certainly a training component here in terms of driving people down the right path.

**Roy Schwartz:** \[44:29\] Yeah, that's a great point. Again, we struggled a lot in the paper, when we were writing it, how to not -- I mean, what we call Red AI; there's a kind of negative connotation there... But basically, I think there's tons of value in these large pre-trained models. And definitely, once you release them, other people can train models much more efficiently. Because if you build models like -- I don't know if the name is \[unintelligible 00:45:02.20\] These are typical models that are pre-trained; some company, in this case Google or Facebook, put a lot of effort into training them, and now they released them, and other people can take them and use them for their own task, and the result will be much cheaper than if people trained their own model from scratch.

So this is definitely something that we encourage companies to do. I say companies, because companies are basically the only entities that can afford to do this. And again, our point is that these organizations shouldn't stop training these huge models, but we should be thinking about the negative consequences. And one way to mitigate the negative consequences is to make these models public... Again, to reduce the overall cost for everyone to run their experiments.

**Daniel Whitenack:** Yeah. That has a huge benefit for those that are able to use those pre-trained models, and utilize model hubs, and that sort of thing... But of course, there's this element of companies where of course they're driven by money; companies make money, and they often want to keep their models proprietary, or something like that... But I think also, some of the things you highlighted earlier is that in terms of commercial benefit and cost savings there's also a cost-saving element to being able to utilize something that's pre-trained and maybe fine-tune it... And that's a huge saving in labor, right? But also, in utilizing these more efficient or smaller models, maybe for inferencing, you get less latency, you have less computational cost, all of those things. Do you think there is that sort of commercial or cost-based argument to be made to companies?

**Roy Schwartz:** I think so. One thing that we saw recently, there was a citation - I think it was from NVIDIA - that claimed about 90% of the cloud cost for machine learning was for inference, and only 10%-20% was for training. So if you can spend a bit extra during the training phase, but end up with a model that's a bit more computationally-efficient for inference, then potentially that could lead to savings in terms of the amount of dollars spent renting instances in the cloud, or GPU hours for inference, for example.

**Jesse Dodge:** I think that a lot of our focus has been on the research community... So you asked a question about "Are companies motivated to keep their pre-trained models proprietary?" While that's true to some extent, my guess is it's hard to know. It's hard for me to know if a company has done that. It's definitely possible; it almost surely happened that some company has spent a lot of money training a model and then hasn't released it because it's part of their business.

At the same time, what we do know about is the research community, and this has grown exponentially. Not just the size of our experiments has grown dramatically in recent years, but the number of people in our field, and also the number of papers that are written, and the size of our conferences.

So across, we are already seeing such a tremendous growth there. I think it's very worth it to focus on helping save computational cost across inference, training, what have you.

**Chris Benson:** \[48:27\] Yeah. I think I'm the only person on the call working at a for-profit, commercial entity... And certainly, there are times when we aren't releasing that the way you would in the research community... So I'm kind of curious, would it make sense for us to -- yeah, you still have a group of people working in the organization that wanna do the right thing, always; so they're no different in that way. So maybe still having internal targets for efficiency, kind of like what you talked about earlier, and those internal metrics, so that even if you aren't publishing them for competitive reasons, it may be that you have a set of metrics that you're trying to achieve, and that might be something that could spread through the commercial space, even when they're not willing to do a full release. Does that sound like a reasonable plan for those of us who do want to strive toward that, but maybe don't have the freedom to just release?

**Roy Schwartz:** Yeah, definitely. People have reached out to us from for-profit companies with similar stories to what you're telling. They work in a for-profit company, so they're limited in what they can do, but they wanna promote this. They sympathize with the motivation and they wanna do the right thing within the scope of what they can do inside of the company.

**Chris Benson:** Within commercial constraints, yeah.

**Roy Schwartz:** Yeah, exactly.

**Chris Benson:** Yeah, I get it.

**Roy Schwartz:** As you said, we're researchers, we're not part of -- I mean, any company is different, I guess, with its own set of norms and rules... We mostly communicate with the research community, but there's stuff to be done everywhere. Thinking about efficiency, you don't have to really persuade anybody that, all the other things being equal, if your tool runs twice as fast or takes half the amount of memory, then everybody wins.

**Chris Benson:** Great point.

**Roy Schwartz:** It's harder when you say "Okay, I wanna give up a fraction of a percent, or 1%, or 10%, and get it to run twice as fast." It goes into questions of politics and regulations, and then what is the price for these companies to have expensive models running... Again, more on the environmental side, because this doesn't relate to the research community, because it's not open anyway.

**Jesse Dodge:** Yeah. I think another thing to build on that - one thing that we're hoping with for example the track that we have at these upcoming conferences and the conferences that have happened is a place where you can look for research that does directly aim to improve efficiency metrics. As I mentioned earlier, distillation is one approach that's pretty popular, about taking a large model and making it smaller and more efficient. There are a ton of ways to do this - model compression, using the lottery ticket hypothesis... Or Roy and I had a model compression paper... There's a lot of ways that people are taking existing work and making it more efficient, and with this track at these conferences, or just in general promoting these ideas, hopefully one thing that you can take away from this is a snapshot of ways that you can improve efficiency that have a good track record in the research community.

**Daniel Whitenack:** \[51:51\] Awesome. As we kind of close out here, I'm curious, since you both have a very close pulse on the research community, and particularly your own areas of research, but also more generally - I'm curious, if we were to imagine in the future, and there's a world where Green AI is the thing that everyone's doing, we've reached some of those goals, what else in the AI research world, or maybe ways in which people are applying AI, what gets you excited as you look to the future of the industry?

**Roy Schwartz:** That's a great question. Something that keeps me busy, thinking about the horizon of where I wanna take my work, and where I would like it to be in 10, 20, 30 years... I'm excited about a few things. One, I think I started taking this amazing technology, that does things that are far beyond our reach, and we seriously -- I mean, someone who's been around not a ton of time, but even 5-7 years back, nobody would even imagine that we'd be anywhere close to solving the tasks that we're currently solving very successfully.

And the questions that remain open are "How are we doing this?" Are we doing this because the models are very good at memorizing, and they're just learning everything, and kind of are very good at retrieving the information that they've learned? Are they really doing some sort of inference, and it requires some logic or some -- I don't wanna use the word "thinking", but something that requires some processing, that requires things that we as humans do? And could we generate models that explain why they reached a certain conclusion rather than another, and could we trust it? We obviously can generate an explanation, but is this explanation faithful?

And another thing that gets me excited is to use this technology for all the good things that it can do, and particularly thinking about doctors nowadays - how can we take things off their plate and allow them to do more? There's tons of applications, starting from doing better analysis of X-rays for radiologists, to transcribe their patient summaries in more efficient ways, and to be able to extract information from that... There are tons of applications that this technology can be used to make things better for lots of people. Those are the things that I'm excited about.

**Daniel Whitenack:** Awesome. Yeah, us too. I know Chris and I both resonate with those points. What about yourself, Jesse?

**Jesse Dodge:** There's a lot of things I'm excited about. I think Roy -- I mean, things Roy brought up even just now, I'm like "Those are all really cool. I want to work on that stuff, too." I think for me, continuing to work on these two pillars of my research so far, which has been reproducibility and efficiency - these are pretty broad categories.

So along the efficiency line, one thing that I have been continuing to think about is - at least in NLP, what we've seen is larger and larger language models, which are pre-trained on tremendous amounts of data... And then right now, what we've been doing is fine-tuning these models, so updating all of the weights in the model, so that we can perform well on some downstream task. That could be sentiment analysis, or some kind of other types of text classification, or whatever.

My guess is as these models become larger and larger, there's probably going to be some other way that we can apply them to problems that we're interested in. An example of this that has recently been popular is adaptors. So that's like adding a small number of parameters to one of these large pre-trained models, and then only updating that small fraction of the total number of parameters.

\[55:50\] I think the high-level motivation here is that if these models are huge, and we want to take one massive pre-trained model and adapt it to a hundred different tasks, we don't wanna have to have a hundred different copies of this model. We wanna have some smaller fraction. I think that that is a pretty motivational idea, exactly what the next big thing in NLP is gonna be, the next big idea about how we take our pre-trained models and apply them to many different tasks in a relatively efficient way. I'm excited to see what that is.

I think one similar idea, one way that we might do that is through probing tasks, so being able to probe our models without updating the weights in them, to understand the kinds of inferences that they can make. I think that's a particularly interesting topic that's very active right now. I've seen too many papers to read just in the last month-and-a-half on trying to probe existing models.

And then on the reproducibility side, we've had the reproducibility checklist now used for every submission at (I think) four conferences. That's a huge success. I'm pretty happy with the way that's worked out. The reproducibility checklist - to give a little more information on that - is a checklist that's designed to remind authors of the kinds of information they should include to make their work reproducible. So it has like "Did you include the number of parameters in your model? Did you include the size of your datasets?"

I'm excited and thinking about what we can do next with that information, and also with the checklist. Now conferences are adopting it on their own. I've had to advocate in the past reaching out to the conference chairs and saying "Hey, I think we should do this." Now conferences have picked it up on their own, which is pretty exciting. So I'm thinking a lot about how we can continue to measure the quality of the research that the community produces at that community-wide level, and what we can do going forward; what's the next iteration of the checklist going to be, for example. That's what I'm thinking about.

**Daniel Whitenack:** Awesome. And congrats on the success with that, and getting that out there and sort of self-propagating at this point. I also agree with you there's a lot of papers - even you've mentioned in this conversation too many papers for mae to read in a lifetime; there's so much exciting stuff going on... But I really appreciate both of you taking time to join us and discuss this really important topic.

I hope that people will check out your paper, which we'll link in our show notes, and we'll link a bunch of the other things that Roy and Jesse talked about, so be sure to check those things out. And definitely spend some time -- I hope our listeners spend some time thinking about this topic and how it influences their workflow, and other things. Thank you both, and I hope to talk to you again soon.

**Roy Schwartz:** Thank you so much. It was so much fun.

**Jesse Dodge:** Thanks for having us.

**Chris Benson:** Thanks for coming on the show.
