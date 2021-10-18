**Daniel Whitenack:** Welcome to another episode of Practical AI. This is Daniel Whitenack, I am a data scientist with SIL International, and I'm joined as always by my co-host, Chris Benson, who is a principal emerging technology strategist at Lockheed Martin. How are you doing, Chris?

**Chris Benson:** Hi. I'm doing very well. How's it going today, Daniel?

**Daniel Whitenack:** It's going great. I feel like it's been a productive week. I made some progress on some projects, and I have some new collaborations going, and that's always fun... What about you?

**Chris Benson:** The same kind of thing. Yesterday was like a 15-hour day for work, so there's all sorts of stuff in the air...

**Daniel Whitenack:** Lots of emerging technologies.

**Chris Benson:** Emerging technologies... And we were talking in the pre-show about something - I have such a deep appreciation for AI right now, because as I think I've mentioned before, I'm doing flying lessons, and I'm in this ancient 1973 airplane, and every time I'm in it, I'm thinking about us, I'm thinking about deep learning and all the things that we're able to do, and just wishing that -- because I need some help, man... I need some help, okay? I'm just saying.

**Daniel Whitenack:** Did we not have an episode about autonomous flying races, and that sort of thing?

**Chris Benson:** We did.

**Daniel Whitenack:** Wasn't that a thing? You were a TV host for an autonomous flying thing, or something...

**Chris Benson:** We have a fellow named Keith Lynn who was running the show, and he came on -- it was AlphaPilot, a while back...

**Daniel Whitenack:** Oh, that's right, yeah.

**Chris Benson:** So I am doing the opposite of AlphaPilot, and really wishing that some of that amazing technology was available to me... So I just wanted to come to the show, because we're Practical AI, and saying - there are moments in my life I need a little bit more Practical AI to help me out.

**Daniel Whitenack:** Yeah, yeah.

**Chris Benson:** There we go.

**Daniel Whitenack:** Hopefully that technology filters down eventually.

**Chris Benson:** Absolutely. I'm counting on it.

**Daniel Whitenack:** I'm excited today -- occasionally on the podcast we get a chance to talk to someone who has authored a new book, or updated a book, or something like that... And of course, I always love that, because authors have put so much thought into the topics that they're passionate about, so it's really good to get their feedback and views on things. Today we have with us David Sweet, who is the author of a new book called Tuning Up: From A/B Testing to Bayesian Optimization. Welcome, David.

**David Sweet:** \[04:31\] Thank you. It's great to be here.

**Daniel Whitenack:** Maybe before we get into what tuning up means from your perspective, could you just give us a little bit of a background about yourself and how you got into doing what you're doing now?

**David Sweet:** Sure. I started out by getting a Ph.D. in physics, theoretical and computational... So I did a lot of that.

**Daniel Whitenack:** Yeah, another physics guy.

**Chris Benson:** I know.

**Daniel Whitenack:** I love that. I don't know what percentage we have on the show, but it is a high percentage.

**Chris Benson:** And Daniel is a physics guy, too.

**Daniel Whitenack:** Yeah.

**Chris Benson:** I'm feeling very left out at this point.

**David Sweet:** Yeah. Physicists get spread far and wide. It's a popular subject. I guess the world's only got room for so many professional physicists. So yeah, doing a lot of computer programming kind of lent itself to an industrial job, either in finance or in technology. I guess I was an East Coaster from New York, so that kind of drew me towards finance a little bit... But ultimately, I wanted to go into industry because I really wanted to build things that kind of work.

Most engineers have this story - they grew up as a little kid working with LEGOs, \[unintelligible 00:05:40.12\] or some other kind of building toy like this... The fun of research for me was that I got to do something new, but I felt like there was something missing; at the end you get a paper, and that's wonderful, because you get to communicate with the world, but you don't get to kind of wind it up and watch it go, the way I did with the toys I built. So I still had some of that desire, and that's kind of what brought me into industry, and finance in particular.

**Daniel Whitenack:** I'm curious -- when I was in physics it was like this urban myth that there was a way to go from physics to finance, and there were these mythical physics people that made that transition... But it was very unclear to me at the time how does that happen. And of course, I as a physics person didn't really know anything about finance; and I still don't, really. But I'm curious how was that transition for you, and was that something that was on your mind for a while?

**David Sweet:** I can say there are two factors there that mattered. One was that there had been people from my group who had gone into finance before... So that kind of set the stage for headhunters/recruiters to come back to the group and look for people. I got a call from a recruiter and he talked to me about what kind of jobs there were in finance for physicists... And one in particular he had in mind, but he had others in back-up as well. That's what really sparked my interest.

I had an interest in finance from the perspective of personal finance, investing. I had bought Netscape the day after it IPO-ed. That was my first trade.

**Daniel Whitenack:** Nice.

**David Sweet:** And of course, it was Netscape, it did really well... But it was very exciting. "Wow, you can buy something and it can go up really quickly." Most trades though don't go like that, but it had the impact that it had. So that was the first step, \[unintelligible 00:07:36.08\]

Then the second step was just going on interview just to sort of see what I thought about it. The company was a small company with lots of computing resources, and the job was to build a strategy that traded a portfolio autonomously, more or less... Or almost completely autonomously. And that was very exciting; that really was right up my alley. I'd get to do coding, which is something I enjoyed doing for a long time; you get to do math, building the models, but then you get this final piece of satisfaction of watching it go do its thing. It's pretty cool.

**Daniel Whitenack:** \[08:15\] So did you reach that sort of end-to-end state?

**David Sweet:** Well, I was a junior person at the time. The people who had founded the company had built a strategy. It was a single strategy. So my job was to work on this, and improve it and enhance it.

**Daniel Whitenack:** Gotcha.

**David Sweet:** So I got to learn how that kind of thing worked, and at the same time make some contributions.

**Daniel Whitenack:** So what happened after that? Did you end up staying in finance for some time, or how did things progress from there?

**David Sweet:** Yeah, so I was in finance for a long time. My next step after that was to go and try to build my own trading strategy... And it was at a time when day trading and intraday trading was something lots of people were doing by hand very successfully. It was right after the Nasdaq/dotcom boom. So I partnered up with a buddy from my research group in grad school, and we just started building.

We went on the web and went to the websites for the exchanges and just figured out how to do this, and built a small, but working trading strategy. It was super-exciting, in part because we got to build our own strategy, but in part also because we were building our own company at the same time, for the two of us.

It was interesting that it was a totally different kind of experience from any one I'd had up to that point. Up to that point I'd always -- and I think a lot of people have this experience going through school... You rely on your practice to give you confidence that you can do a particular thing that you've learned. When you go build a business, you have to kind of build this meta confidence that you can figure out how to do new things... Which is nerve-wrecking, but super-exhilarating. It was a lot of fun.

**Daniel Whitenack:** Cool.

**Chris Benson:** That sounds cool. I can't help but ask, being the podcast that we are, and you tackled the finance side of things... What is the state of AI -- I don't think we've had anyone on the show in that specific arena... AI in the world of finance and trading - how do you see it? What do you think of it at this point? What's the state?

**David Sweet:** Sure. What I see from talking to -- I have colleagues from the past that have kind of spread out all over to different companies, from early in my career; people progress and they go different directions... But we keep in touch. And what I see people doing quite a bit, in short-term trading strategies -- well, no, I'll back that up; long-term too, but for different reasons... I see three things. One is I see linear models with lots of regressors and automatic feature selection... Kind of like pre-deep learning -- you may call it linear machine learning. So you're building linear models, but not interactively and carefully checking each regressor, but putting in lots of signals and automatically turning them into a compact model. I always think of Hastie and Tibshirani they have this book out and this whole methodology where you build a large dictionary of signals, and use sparsity and whatnot. So I see that.

I see deep learning used for interpreting maybe alternative datasets, sometimes short-term trading where you've got lots and lots of samples, and you need to take something like the orderbook... Probably not all your listeners are familiar with this, but it's a complex data structure. So to turn it into something you can predict with, you have to do a lot of feature engineering. And you either do it manually, or you can use some kind of automated feature representation learning.

The other thing I see a lot of is optimization of the simulation. Now, this is like old school. This is maybe 1970s on, maybe even earlier, depending on whether you wanna call it simulation... Optimization of simulation is an old school engineering technique. You build a model, you build a simulator for it, and you wanna run a controller. And controllers are hard to solve. There's no quick and easy solution like a linear regression for a controller. So you run lots and lots of simulations and you see which parameters work best, and there's all kinds of ways to solve this... And so that's a lot of what trading is. That's the end state of building a trading strategy, right before you go and put it online... And then there's a whole other stage.

\[12:22\] So I think those are the three big AI-related things. In terms of simulation optimization, today you might see evolutionary algorithms where - you know, when I first started out, you might just have one parameter at a time, and sweep through ten values and make sure it looks pretty good to the eye on the graph, and then repeat that process with each new parameter. Now it's more automated, black-boxing.

**Daniel Whitenack:** Do you feel like on that front that in the trading space there's been a time in which people are considering and trying all sorts of new things as related to these new types of models that are coming out? Or do you feel like it's been pretty progressive and incremental in terms of the same sort of strategy, but with maybe a different model, like you're talking about? Or are people trying -- I'm thinking of things like reinforcement learning or other things to try whole new approaches to the problem?

**David Sweet:** This is a good question. As you were asking, I came up with four different answers. I'm gonna go--

**Daniel Whitenack:** Awesome! \[laughter\]

**David Sweet:** We can talk about them... Maybe I'll try to do them from most interesting to least, but... One thing - there's this interesting cultural dynamic in finance -- in trading specifically. I'll even narrow it down more - quantitative trading, where people, especially when they're new to the field, they wanna come in and they wanna try the latest and greatest algorithms and ideas, and everything they've learned recently in school, from papers and whatnot, and make some money. Build the magic machine that makes a ton of money.

On the other side, you've got people who've been doing it for a while, usually \[unintelligible 00:14:02.12\] who roll their eyes at every new thing, like "Ahh... That's not gonna work. Neural networks don't work. SVMs don't work." And sometimes they're right, sometimes they're wrong... I think if you say something's not gonna work, you'll usually be right, but you just won't be productive... So it's one of the unfortunate aspects of the distribution of quality of new ideas in engineering.

So what I find is - I've seen people try, or I've been one of those who have tried all kinds of things. Basically, if you wanted to just randomly throw out ideas \[unintelligible 00:14:34.14\] And some of the things stick. Some people figure out how to get things to work.

The big problems with financial data are the signal-to-noise ratio is very low. The signals aren't just small, but they're competed away. The act of going and trading on signals which your competitors are seeing as well, is squashing the signals. So it creates this non-stationarity where over time your strategies become less and less tradable, sometimes very quickly. So you constantly have to adapt and look for new ways to predict or to trade.

One thing that -- you mentioned reinforcement learning, and that brought to mind... I don't think reinforcement learning is ready to just turn it on and get a usable answer out of, in finance. I haven't seen that. And I say that only -- I say it because it's hard. I feel like it's still cutting-edge for solving this kind of problem. I see a lot of promise in offline reinforcement learning, what's been going on the past year or so... It's just amazing, and it's very much in line with... It's like a machine learning replacement for the old - or an AI replacement, I'll say - for the old-school simulation optimization; like, how do you make that more automated, or more autonomous, or hyper-automated, or get that next level of automation. So yeah, I see a lot of promise, but I haven't seen people just kind of taking that out of the box and making it work.

\[15:58\] A contextual bandit on the other hand, which is a limited subset of reinforcement learning - not only do I think that that's directly useful, but I think people in finance have been doing it ad-hoc for a long time anyway... You know, if not the most super-efficient way it can be done, like people understand it these days, I think, since the beginning of my \[unintelligible 00:16:17.12\] doing things that kind of look to me like a contextual bandit.

What makes that easier than a full reinforcement learning problem is that you're only predicting the immediate reward, so you don't have to worry about your decision now affecting the state of the world for your decision later, and then have this compounding of state changes based on previous decisions. That's a more IID sample, so to speak, to build your model with.

**Break:** \[16:41\]

**Chris Benson:** David, I know once upon a time you were working at Instagram, and you were working on recommender systems... So I'm kind of curious, what is your perception of the differences? We've been talking about finance and applying AI/ML techniques in finance versus the social media world recommenders that you were doing before... What are they alike in, and what differences have you experienced, even though you're applying some of the same algorithms potentially in both areas?

**David Sweet:** Sure. Noticing the similarities in the workflow between a quantitative trader and an ML engineer working on a recommender system is what gave me the idea for the book.

**Chris Benson:** Oh...

**David Sweet:** I thought, hey, you can describe this all as one instruction book for an engineer, and they both could use the same instruction book. So what the workflow looks like typically - first comes ideation and implementation. So you get some idea of a hypothesis, like "I think if I did this, it'll make their system better", and you code it up.

The next thing you do is you check it offline. Now, in finance, in trading, that would be running a backtest or a simulation of trading. Recommender systems - you might do a data science analysis of the data, or you might run a survey, or have something kind of like a simulation. You can read it in papers, that there are simulations for these kinds of systems...

And then the final step is you put it online. Mike Tyson has this saying, something like "Everyone has a plan until they get punched in the face..."

**Daniel Whitenack:** Someone just quoted that to me in Slack yesterday, by the way... So it's really funny that you're mentioning that, because I came up with a plan, and that was the quote they gave me in Slack, so... Anyway, not to throw you off...

**David Sweet:** Everyone has a model until they put it in production, and then things change. So it's this final step of -- with trading it means you go and you trade, and you say "Wow, I made so much money in backtesting. What's going on?" Or with recommender systems - you look like you've made a better prediction of whether someone's gonna retweet, or click Like, or do whatever, and you put it online and it didn't quite pan out the way you thought. Your predictions might not even be as good as they looked in the model offline. That can happen, too.

\[20:17\] So this final step is experimentation. Either it's A/B testing, or it's some other type of an experimentation method - it's super-important and it's the common final piece in that... And for me, I feel like it's the hardest piece in a lot of ways, because you have the least amount of data to work with... But it's the most satisfying piece, because it's the most accurate. It's the real system. It's not a model, it's not a simulation, it's the real thing. You have this trade-off between the offline stuff -- it can be precise, it's very quick to iterate, but it's got bias... It's got model bias, simulator bias. The live stuff is noisy, but it' accurate, because you're really doing it.

So that's what I wanted to write about... And I'm writing in a way that can be read by quantitative traders or ML engineers.

**Daniel Whitenack:** Yeah, that's awesome. It's definitely a common scenario that people face, and I think a lot of people just don't know what to do when they get to that place, because they put all their time and reading and focus on the offline testing, that is also important - we don't wanna get rid of that - but often people don't necessarily know what to do...

Maybe before we get into the details of some of that, could you clear up maybe just some jargon? I've heard all sorts of -- like, hypothesis testing, experimentations... You used the term system tuning... Are those all things people use interchangeably to talk about this online testing scenario?

**David Sweet:** Yeah, I see them all as kind of stitched together as one topic. The idea of tuning harkens back to an AM or FM radio that had knobs on it from 1965, where you take the knob and you tune it a little bit to the left, and you hear static, and you go to the right and the signal gets better, but you go too far and it gets noisy again, so you tune your radio into 88.7, K-Rock or whatever, and you get to listen to your music... So if you analogize that and you say your engineered system, be it the recommender system or trading strategy - all the parameters in it are like knobs on a radio, but instead of one knob you have maybe ten knobs or a hundred knobs, and you have to tune them all to get the thing to work its best... And you're tuning the system.

But you might also call that experimental optimization. So you optimize these parameters with experiments. But it really comes down to more of like a complex, focused and efficient maybe way of the experimental optimization is of doing experiments... An A/B test would be the most basic form of that, and you really use a lot of the same techniques and mathematics and whatever to do it.

**Chris Benson:** You're making me feel old, because in this context, A/B testing is so old, and I remember back when I felt it was new and hot... So I'm just gonna sit here quietly at this point.

**David Sweet:** Well, it hasn't changed. A/B testing is the most robust, reliable and believable way to do things. So it hasn't gone away at all.

**Daniel Whitenack:** Maybe before we go on, could we just talk about what an A/B test is, for those out there that --

**Chris Benson:** That's a good point.

**Daniel Whitenack:** ...maybe are wondering about this thing that we're all so hyped about?

**David Sweet:** Sure. So an A/B test is the engineers' term for medical research you might call randomized control trial, which might be a phrase more familiar with people in these pandemic days. The idea is you have some way of doing things; let's say you have some way of recommending new posts to somebody on Twitter, ranking the posts, and you have some system that does this. You come up with an idea to make this system better, and so A is what you'll call the original system, and B is what you'll call the system with your change applied to it.

\[24:04\] So you've got two systems slightly different, and you go and you run them live and you see how the audience or the users respond to these two system. You have usually some kind of business metric, like "How long does the person spend on Twitter? How long do people spend on Twitter using version A, and how long do they spend on Twitter using version B?" and you wanna compare and you wanna see that they spend more time. Or maybe you wanna see that they spend less time in this day and age... But typically, in a business you'd want more attention from users.

**Daniel Whitenack:** Yeah. And I guess in terms of how this intersects with the AI/ML community - A/B testing could be something, like you were talking about, that can be done outside of just changing a user interface, or testing a drug, or something like that... But in terms of the AI/ML space, I think something people don't often maybe think about is "I have this model, I deploy it, and now I wanna work on version two of the model, but how do I actually know that that model is gonna perform better? Other than on a test set that I already have, how do I know that that model is gonna perform better?" Do you use A/B tests for those sorts of scenarios?

**David Sweet:** Yes, absolutely. What you need -- the A/B test is sort of like the least you can do. It's the gatekeeper so that you don't ruin your system. If your B version doesn't perform better, you wanna throw it away and don't let it be the new standard version of your system. It sounds like you're kind of alluding to this problem people run into - we've talked about it even before - where you try something offline, and by the metrics you use offline, the thing you try... Let's say, to be concrete, a machine learning model, and you've done prediction with, say, cross-entropy. You've got a dataset, and your cross-entropy has decreased, it's looking better than the old model, but you put now this model online, and online it's part of a larger system. So this is where I like to differentiate between prediction and control, or supervised learning and (we'll call it) reinforcement learning, for a lack of a better term. But these are kind of different ways of looking at this problem.

So in prediction, that's what you would do offline via supervised learning, a classifier, a regressor... And maybe you predict the probability someone's gonna retweet a tweet. When you put that online, you might use that probability along with other probabilities - the probability of liking a tweet, or the probability of quote-tweeting a tweet, or commenting on a tweet. So you have all these kinds of probabilities, and you combine them to create an interaction ranking; the probability of engaging with the tweet. That's gonna be the number you use to rank the tweets. You wanna put the most engageable tweets first.

**Chris Benson:** So just to connect the two... If you're stuck with me back in 2005 doing A/B testing, and we're moving forward in time and we're starting to apply that, how do you make that transition? How do those integrate in? What's that path forward in a practical sense, to move forward on the calendar closer to the present day and trying to implement that? I guess what I'm asking is is that a direct replacement for A/B testing when you're starting to do recommender, or what's the relationship between the two?

**David Sweet:** I see, okay. So where the A/B testing would come in is you'd run the recommender system with the old model and compare it to the new - the A to the B. So the A/B testing would be an experiment you'd run. You may run it for a couple of weeks, or for a month, and then see whether users are engaging more with your old ranking model or your new ranking model.

**Chris Benson:** Gotcha.

**Daniel Whitenack:** And do you feel like this sort of mindset of experimentation is embedded enough in the technology space that it's not hard to convince the product owners to let you run experiments in production? How do people perceive this sort of idea of experimenting online in that sort of way?

**Chris Benson:** The risk of it...

**Daniel Whitenack:** Yeah.

**David Sweet:** \[28:04\] It's my understanding that at the larger companies this is the standard practice - everything gets tested into production. Typically, things don't just get put into production on a whim, or based on domain knowledge, or just based on the offline results; there are really experiments.

Now, at the bigger companies there's lots of money at stake, so revenue can be high, so a small percentage change up or down can be dollar-significant. Or engagement or time spent can be high, so a small change up or down can be significant. So these things are all tested, the way I understand it.

I think it's less common these days, but not totally uncommon for people to have a feeling/intuition that they understand their domain, and they understand whether something is going to be right or wrong, or to say that something is obviously going to be better... And it's so common to be proven wrong. It's humbling. A person who goes through that I wouldn't say is strange or arrogant, I would say they're typical.

I've done sort of an informal survey over the past ten years of quant traders, and I always ask them "What fraction of the ideas that you come up with, after you've tested them, actually work and end up in your system as a good idea?" and almost everybody who's had some experience says "One in ten", and shaking their head. \[laughter\] It's just the nature of the beast. With a complex system, things can seem very reasonable, but simply be wrong. There are just too many dimensions, too many factors to keep in the human mind, and you really need to just go and test.

**Break:** \[29:40\]

**Chris Benson:** So I'm kind of curious - as we started to get into some of the techniques, I was looking through your table of contents on your book, and you have all of these techniques, most of which I'm not familiar with... And I was wondering if you could take a moment and kind of tell us briefly what each is, and what that relationship is between those, so that I'll understand... I'm super-interested, especially when I see things like multi-armed bandits, and stuff.

**David Sweet:** Sure. So the book is really laid out in the order in which I learned these things... But that also happens to be the order in which they appeared chronologically in the \[unintelligible 00:31:14.03\] So A/B testing has been around 200 years or so; 100 years when it really started to pick up. The next one is response surface methodologies, maybe from the '50s or '60s.

What response surface methodology does is it focused in the experimentation technique on systems with continuous parameters. So like a knob that you could tune continuously, and if you had a couple of these, if you tune them simultaneously, you can be more efficient than if you tune them one at a time. If you go one at a time, you might say -- you might tune one and say "Well, I've got the right value for this one. It's seven." And then you tune the other and you say "Oh, the right value for this is three." But then if you go back and tune the first one, you might find that six is a little better.

So we can bounce back and forth and there's no guarantee that you'll ever find the single optimum for both. So if you do them together, you can get the right answer. So the response surface literally means a picture of the function, the surface of the function of your business metric, like revenue let's say, versus those two parameters. So if you imagine a 3D plot with one of those nice-colored or wireframed surfaces, you're looking for the top, the highest peak in that surface. That's what response surface methodology is about.

**Chris Benson:** \[32:20\] Gotcha. Thank you.

**David Sweet:** Yeah, so that limits in you in some sense. A/B testing you could apply to any two choices - should I use red or green? And there's no real surface between red and green that would make -- well, you can do frequencies... But think about this categorical Red, Green, Blue - there's no surface, you plot there. But multi-armed bandits - now, they're interesting. They go back to instead focus on systems where -- again, like A/B testing, you compare any two options. They don't really take advantage of the continuity of a parameter, but you can pick any finite set of values and compare them. But multi-armed bandits - the real change from A/B testing is that you're focusing on maximizing whatever your business metric is. Let's say revenue - you wanna make money while you're running the experiment.

A/B testing - I think of it as more you really want the information. You want a reliable answer, whether A is better than B. Because people are gonna die if you get it wrong. Like with drug testing, the stakes are really high and you really wanna get a right answer. With multi-armed bandits, you wanna make money, and you can afford to be -- nobody's gonna die if you get it wrong, which is a good thing, and you can afford to change back and forth very quickly.

The typical way it works is you take up your set of -- let's take a trading example. Let's say in trading - you're trading 100 stocks. You might say 50 of them, to start out, dedicate them to strategy version A, and 50 to strategy version B. And as time comes in, as the returns come in and you see A doing a little better than B, you increase the number, so 60 go to A and 40 to B. And you keep scaling, 70 to A and 30 to B. Rather than waiting till the end of the experiment and keeping it 50/50 the whole time, you kind of scale it gradually toward the one that seems to be doing better. And as the data comes in and the error bars go down, you scale back and forth however you need, until the probability of being in B is low, under 5% or 1%. Then you get to decide that that percent is your threshold. So now you're talking about practical or business significance, rather than statistical significance as your threshold.

**Daniel Whitenack:** Is it ever the case when you're doing that sort of test and adjusting things on the fly -- let's say you have model A and model B, and it's sort of a mixed bag, where it turns out over that actually the mixture of models was better than either model A by itself or model B by itself... Does that sort of scenario occur?

**David Sweet:** Yes. And it could also be that model A and B running together can be worse than either A or B running alone. There can be interactions, basically, depending on what it is you're testing. And it doesn't just apply to trading.

So yeah, that can be complicated -- that process can be complicated by these interactions. That being said, it would also be complicated if you were just running an A/B test. The interactions would interfere. So you have this assumption of IID - Independent, Identically-Distributed samples, and the analyses show these kinds of algorithms typically, but in reality your samples are neither I, nor I, nor D. They're neither I, nor I. \[laughter\]

**Daniel Whitenack:** And that, I guess, brings me to my next question, which is typically we think of A/B tests, one thing or the other thing... Do some of these techniques work when you have more than two options? Let's say I have A, B, C, D and E. Or is it better to just always assume you're gonna test one thing at a time?

**David Sweet:** \[35:50\] As a general rule, it's more efficient statistically to test everything at once... For the same reasons I alluded to with the two knobs, it's possible that moving to the left, your space is good, moving up, your space is good, but moving left and up at the same time is even better. If it's that kind of space you're testing, then you should do the same thing with A/B and test them all at once.

The virtue in doing only two things at a time is that your test gets done faster. As you increase the number of things you're testing, the amount of data you need increases. So your test gets done faster, you'll typically have less noise, simply because your patience won't be tried as much. So maybe you'll get the data you need and it'll be easier to make a decision. It's also easier to decide between two things than it is to decide between more than two. So you have to communicate it to your team, or other teams... So there are benefits to doing the simpler thing, for sure. But it's a trade-off.

**Chris Benson:** Gotcha. So having asked you about your response surface methodology and the contextual bandit, how does Bayesian optimization -- you have that in the title, so I feel like we're moving up toward that... How does that fit into the equation? What does it bring us?

**David Sweet:** Bayesian optimization takes bits from response to risk methodology and contextual bandits and multi-armed bandits, but it makes this super-automated by comparison. Response to risk methodology is very manual; you make the surface you look, you make a decision where to go... And the Bayesian optimization does the modeling for you, it makes the decision about where to test next, what parameter values to test next for you... It's nice, and there's this interesting thing -- you've probably heard the phrase "exploitation versus exploration", and multi-armed bandits will do this. That's what they're doing when they're weighting towards -- if A is doing better and they're adding more stocks to A, and fewer stocks to B, they're taking advantage of the information that's come in so far; they're exploiting the information to make more money, but they're still testing B because they wanna explore to bring the error bars down.

So Bayesian optimization will do that kind of exploitation modeling and decision-making for you as well. And to top things off, it will also work with categorical and discreet parameters, so it really brings the ideas from the rest of the book together into a single, automated technique.

**Daniel Whitenack:** Awesome. So I'm kind of curious, I guess just bringing things way down to a practical level, what are the sorts of practical tools that you can use to do this sort of testing? Is it things that are available and familiar toolsets maybe to data science or AI people, like the Python ecosystem? Is there common stuff out there that people use, and how easy is it to set up these sorts of scenarios online and in a reasonable and robust way?

**David Sweet:** For A/B testing there are lots of tools, both open source and commercial... And when I say open source, you'll probably find tools that you can make use of in R, or in the NumPy / Python ecosystem... But there are also commercial products that can help you do this online. That way you can sort of submit results to a web service, or there are other ways of accessing it.

So A/B testing is well-known, it's the most commonly used of all these techniques, and there's lots of support for it out there. On the other end of the spectrum, Bayesian optimization - there's an open source tool called Ax that's written and supported by Facebook. That's very good. That would be the go-to, I would think.

I suspect Google's got something similar, although I'm not as familiar with it. I'm familiar with their paper where they use their optimizer to make better chocolate chip cookies. Vizier it's called. I don't know for sure whether there's an open source version.

**Chris Benson:** So I guess as we've kind of gone through some of the things you've covered, what are you anticipating going forward? Clearly, from early A/B testing and stuff, as we started the progression, and you've just taken us into Bayesian optimization, what are you thinking of for the future? What are you getting excited about working on or utilizing going forward? Do you have any sense of where the next steps might be, what might go?

**David Sweet:** \[40:10\] Yes. What I'm most excited about is offline reinforcement learning. So doing reinforcement learning from small amounts of data. And really the key to that is not so much the learning of the controller or the strategy or whatnot, but it's the learning of the simulator itself. That's where the real power is. If I had a learned simulator that I could optimize in five different ways, one of which would be through a reinforcement learning technique like PPO, or something more recent than that... But learning the simulator from a small amount of data, and understanding what results you can trust in production, which ones you can't, and where to go and maybe explore next to get data, to improve the simulator, these kinds of questions - being able to do that well could be super-valuable.

When you read about these kinds of things, the examples are often from robotics; they can provide a great visual, and you can kind of get data pretty quickly, but there are industrial processes everywhere -- so many things work by optimization of a simulator that I think this is gonna be super-valuable throughout society. I'm very excited about this.

**Daniel Whitenack:** Awesome. Before we end here, I definitely wanna let people know to check out David's book, but also, we have a discount code through Manning - 40% off, which is pretty spectacular. So you can use the code podpracticalAI19. We'll put that in our show notes as well, but that'll get you 40% off, and I know I'm really excited to dig more into this book... But David, it's been super-fascinating, and I really appreciate you taking time and explaining some of this stuff to us. It's really good, and it's important, and like I say, I think it's something that people need to think about more, and often are perplexed by in many scenarios, and I'm sure your book will shed a lot of light on those situations... So thank you for your work on it and thank you for the discussion.

**David Sweet:** Thanks a lot for having me, I really enjoyed this.
