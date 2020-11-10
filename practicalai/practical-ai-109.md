**Chris Benson:** Welcome to another episode of the Practical AI podcast. I'm Chris Benson, a principal emerging technology strategist at Lockheed Martin, and with me as always is Daniel Whitenack, who's a data scientist with SIL International. Hey, how's it going today, Daniel?

**Daniel Whitenack:** It's going really good. It's a beautiful day here in Indiana. I know in the last couple of times we've started out the podcast I've had a few tech projects, like the network at my wife's business, and those things...

**Chris Benson:** You've always got something going on.

**Daniel Whitenack:** I've always got some sort of \[unintelligible 00:03:15.28\] But this weekend I was outside most of the weekend. We took a hike, and then had a bonfire at my wife's family's place, and a birthday party... So we were outside most of the weekend, which was a nice break from being in front of a screen.

**Chris Benson:** I'm so jealous, because as we record this, we just came out of the weekend where Hurricane Delta came in off the Gulf, and so we have had torrential rains all weekend. Inside, not fun, that kind of stuff. Not good. So I'm looking forward to sunny weather coming up.

**Daniel Whitenack:** Yeah, I also tried out this -- there's an app called iNaturalist, and you take pictures of birds, or plants, or other things, and there's a whole crowdsource community on there that will help you identify what you're looking at, and that sort of thing.

\[00:04:07.28\] My wife and I, both in the spring and through the summer and fall, we like to go mushroom foraging, and I've tried all sorts of different apps that try to identify -- it seems like something that should be totally doable... But there's definitely a user risk in that as well. So talking about like a classification model and the risk associated with it; it's a pretty high one.

**Chris Benson:** Yeah, I was thinking that as you were saying that... I was thinking if I was doing that, I would either end up dead, or I would end up with an inappropriate level of something I shouldn't have in my body, definitely.

**Daniel Whitenack:** Yeah, so it's cool to find this iNaturalist thing; it's like a Citizen Science sort of deal. If you're interested in plants and animals and fungi and that sort of thing, it was pretty cool to find that.

**Chris Benson:** Joking aside, I actually do have that app and it's wonderful. I've been using it for a while. I like it a whole lot. For me, I'm just hoping for good weather here... I'm excited, I've gotta tell you something... By the time this comes out, it will have just been in the past, but I believe a recording will be available... I'm giving the keynote at an IEEE Conference tomorrow.

**Daniel Whitenack:** Oh, cool. Congrats!

**Chris Benson:** Yeah, it's the Digital Avionics Systems Conference, and I will be doing "Artificial Intelligence and Autonomy State of the Union", which kind of ties where the entire science of autonomy and the sciences of artificial intelligence come together, and where they intersect, and where they don't.

**Daniel Whitenack:** Cool. Do you know if that will be posted online?

**Chris Benson:** I think it will. I'm gonna check, and if so, I will certainly include it in the show notes.

**Daniel Whitenack:** Cool, yeah. Excited to listen.

**Chris Benson:** So we have a very exciting guest today based on reading some of the stuff online, on Twitter, that we've looked at... Today we have Rajiv Shah, who is a data scientist at DataRobot. He's an AI researcher, and he's also a professor at the University of Illinois at Chicago. Welcome to the show, Raj.

**Rajiv Shah:** Thank you very much. Thank you for having me.

**Chris Benson:** Before we dive into our topic today, which is gonna be all about leaking information from your training and datasets - if you could tell us a bit about your background, and how you got to this point.

**Rajiv Shah:** Like a lot of early folks into data science, I probably have a long, meandering journey... But partly, I started off as an engineering undergraduate. I didn't wanna do engineering, I went off and studied Law, ended up with a Ph.D. in Communications, where I ended up studying just that intersection between technology and people. It was just really interesting, and solving a lot of interesting research questions... And I used various methods, both qualitative and quantitative methods to solve these problems. At the time, the internet was booming, so there were a lot of interesting questions around that.

I did that for a while, kind of moved out of Academia... I was a sysadmin for a number of years, so I worked in IT, and then this data science thing came around, and I was like "Hey, wait a minute..." I have a bit of a background in math, and my social science background had taught me how to ask interesting research questions and kind of probe them... And then the nice thing is Andrew Ng made these wonderful courses, and I was able to kind of skill myself up on some of the newer algorithms and approaches that I hadn't learned... So that was kind of my introduction into data science, and landed my first data science job at State Farm. I worked there for a couple of years, I went over to Caterpillar, I worked there as a data scientist, and now I'm over at DataRobot.

**Chris Benson:** Just out of curiosity - was that his original machine learning course, by any chance?

**Rajiv Shah:** Yes, it was his original machine learning course, yes.

**Chris Benson:** I did the same one. It was kind of the first big, major deep learning course that he put out there, and I think it started a lot of us down this path in a professional context.

**Rajiv Shah:** Yeah. I can't say I finished the course, but... Yeah.

**Chris Benson:** Understood. It was a hard course. I remember it kicked my rear.

**Rajiv Shah:** Yeah. No, he has a great knack for explaining things.

**Chris Benson:** He does.

**Rajiv Shah:** His side gig was starting Coursera, so you've gotta like that.

**Daniel Whitenack:** \[00:08:12.26\] Do you find that with that background, thinking about people and technology - it seems super-relevant to AI specifically, in terms of, you know, there's a lot of interesting thought around augmenting humans with AI, but also systems... If we're talking about active learning, or something, which I think is extremely powerful... You are sort of having a human in the loop with these systems. Has that made you think maybe more about those, or brought a fresh perspective on those, as opposed to just thinking about the tech side of it?

**Rajiv Shah:** Yeah, so it really helps me remember how socially grounded everything is. I think one of the valuable things of where you do a Ph.D. and you collect your own data - you end up with learning some skepticism towards quantitative data, because you realize how it's collected, what were the questions asked, how \[unintelligible 00:09:10.22\] All those different types of things that we often just accept when we're running algorithms. So kind of having that understanding is really strong.

The other pieces that's really kind of come around now in data science - I think there's a movement in data science away from just focusing on algorithms, but thinking about the entire value chain, going from your raw data to how you finally use that model in a production setting, as well as the larger questions, like "How does that interact with the rest of the organization, how does that interact with the rest of society right now?" We see now at conferences where they're being asked, to say "Yes, you can tell us about how you solved the problem, but we also wanna know what are the larger social, political, economic impacts of your research?" and wanting researchers to be cognizant of that.

**Daniel Whitenack:** Yeah. And of course, that dips definitely into -- you mentioned a little bit of a background in Law as well, and of course, that dips into ethics, and of course, governance, and all of those things which we're seeing a definite surge in, and I'm guessing that you have thoughts there with that background... But it's really interesting to hear your perspective coming from that background.

Have you found other people in data science coming from communications or from law? I hear a lot coming from maybe engineering, or science, or math, or physics, or whatever it is... Are people surprised when they hear about your background?

**Rajiv Shah:** A little bit, but I think there's a few people that are coming in this way. You had Patrick Hall on a couple weeks ago, talking about what are the implications that data scientists or people that are owning the data science products need to think about, liabilities within an organization... For me, it's kind of natural as data science expands, where now the decisions that we're making are really impacting organizations and society, that - hey, there's a lot more people that are gonna be involved, and kind of giving scrutiny to what's going on.

**Daniel Whitenack:** Yeah. Well, I'm curious - maybe from that perspective, how did this topic... You know, Chris mentioned that we're gonna be talking about this topic a little bit today, about data leakage... How did this topic come to the forefront of your mind? How did it become something that you started thinking about?

**Rajiv Shah:** Yeah, so target leakage is a very common problem in data science. I think most data scientists who've been out there practicing for years - they know it, they're aware of it; they know that - and just to level-set for everybody what target leakage is... It's when you use information from the future when you're making a prediction. It's a very common problem that can occur.

\[00:12:03.22\] A simple way that it might occur is you're building an HR model. You wanna predict that the salary is gonna be for your new CS hires. You build a model, you take on all their background, and it spits out a number and says "This is what the annual salary should be for this particular person." But now, what happens if when you're predicting the annual salary one of the variables you used was the monthly salary? Because remember, you started off with historical data from the past. And especially in an enterprise setting, it's easy - you have lots of features and variables in the datasets, you grab them... And you might have something that's entirely related to your target when you're building the model. So it's kind of leaking that future information into your model.

The great thing is when you're building this, the model looks flawless. Often, when you have target leakage, the performance of your model looks really good. And it's only when you actually put it into production and you realize "Wait a minute, I don't have that monthly number. It's always missing now", and your model all of a sudden doesn't look nearly as good as when you were training it.

So this is kind of the fundamental problem, and it happens in many particular ways, where essentially your model cheats a little bit, and kind of gives you performance that's really misleading.

**Daniel Whitenack:** Is this something that happened to you personally, as you were starting to get into data science, where you had some of these experiences, maybe where you had to answer for a production model that was having issues?

**Rajiv Shah:** So it did happen to me all the way at the level of production, but I see it all the time. My intuitive guess is 75% of all data science models at one point have some target leakage. Now, typically, as you're building the models, hopefully you're debugging it and trying to understand how well the model is working, using your explainability and interpretability tools... And hopefully, with that and some domain expertise - this is where as a data scientist you really have to understand what the data elements are in your model; if you don't, it's very easy to fall into target leakage. But with those, usually, most of the time, 99 out of 100 times, those errors are caught hopefully before you finally get to production.

**Chris Benson:** As we're all working in this space, and stuff - you've really put some thought into this and you've really noticed it, probably more than most have. What really oriented you on this particular issue? Because it's fascinating... But I'm not sure it's something many of us pay attention to very well upfront. So what kind of got you focused on this in particular along this line of thought?

**Rajiv Shah:** I really like data science, and one of the things I like to do often is when I see other interesting projects that are out there, I like to rerun them, and just try to understand "How do they solve this problem? What do they use?" For me, I have a hands-on learning style, and it's just much better to be in the data and with the code, rather than just reading a page of formulas.

I remember years ago Chicago was one of the leaders of open data, and they put forth a model for predicting restaurant inspections. The idea was "We wanna figure out and sign our inspectors to go to restaurants that likely were gonna fail inspections, versus ones that aren't. Inspectors are rare resources, we wanna just allocate them efficiently."

And I remember when I went through that model, they had a couple pieces of target leakage. One is they used weather. If you're building a model that you're predicting way out in the future, often you don't actually have the actual weather, what's gonna happen a month from now, for example. So that's a form of target leakage that can happen.

And they also had a more subtle thing, where they were using the inspector ID information in their model. And the reason this was target leakage is because in the past some inspectors often were very easy inspectors, some were really harsh on find everybody. But when they actually were gonna deploy this model, they wouldn't know what inspector was likely to go to the restaurant...

\[00:16:13.04\] So going through this process, I realized, like "Wait a minute. They made a mistake." And I talked to the folks in Chicago, and the actual model they implemented was a bit different than what they had shared publicly... But it kind of got me attuned to - you know, these types of problems happen if we don't carefully scrutinize the data.

And then just along the way, I see it routinely when I work with other customers, where they bring in their models, we walk through them, and I'm like "Wait a minute. This variable is really good. Should this be in the model?" and then somebody thinks about it and they're like "Oh, no. You're right. That shouldn't be in the model. That's leakage."

You see it in Kaggle competitions. If you look at the history of Kaggle competitions, there's many Kaggle competitions where along the way they discover target leakage, and they're like "Oh, we have to redo the competition", or the competitors all use the target information and make these unrealistically good models as part of the competition.

And then the one that really highlighted it to me was there was an article in Nature studying aftershocks - earthquakes, and you have aftershocks. And the great thing was the researchers put the data out there, they put the code out there, so I was able to kind of play around with it. And once I started looking at it, there were some funny things that made me a little concerned. One thing is whenever I see a paper and I don't see a baseline model, that always concerns me.

For me, a data science best practice is before we jump into using fancy deep learning methods, what does a simple model do? We do this if we're working, whether we're doing a time series problem, or if an enterprise has a rule-based system... Let's find out, if we just do the bare minimum, what the starting point is. And then we can see "Hey, now I'm gonna apply these fancy data science methods and see how much of an increase I can get." Does that sound fair?

**Chris Benson:** It does.

**Rajiv Shah:** So that was one issue that I kind of had with the paper. The other issue when I started looking at it was how they had organized and partitioned their data. So within data science, typically there's an assumption often that the rows of our data are not related to each other. What happened in this case was some of those aftershock earthquakes actually happened near the same time, near the same place, so I made the assumption "Well, if you treat them like they are related to each other, we can still solve the same problem. We can still use data science, but what we use is a different partitioning method. We organize the data differently when we're training the models.

Typically, the default you'll see in pretty much every blog post out there goes with random partitioning. All your rows of your data are the same, it doesn't matter where we put them. But the reality is often in a lot of problems there's some relationships in your data. Maybe for example you have data and it's broken up by state. So you have a bunch of observations for Texas, and you have a bunch of observations for Florida. And what happens is there's some regional variations that if you know a little bit about Texas, you can probably make a pretty good assumption what the next person from Texas is gonna do.

So what happens then is when we randomly distribute this data, and we put some of the Texas data in our test, kind of where we wanna see if our data will generalize to, the model can very easily cheat. It can say "Hey, this is what I know about Texas", versus all the other characteristics that we really want the model to learn from.

And there's an easy remedy. Something called group partitioning, where we just make sure all the Texas information stays together in one partition when we train. All the Florida information stays together in one... It's a very simple thing to do; it takes a little bit of extra data science work to think about it and to code it up, but then you can run it and see "Hey, is there a big effect? Is there an effect of this state that is actually kind of leaking information as I'm solving it?"

Okay, I said a lot... I kind of want to make sure you guys are with me on this so far.

**Daniel Whitenack:** Definitely.

**Chris Benson:** It was good, thank you.

**Rajiv Shah:** \[00:20:11.23\] And that's what brought me back in this aftershocks one - that's where I noticed there was some type of leakage going on. And for me, the big issue isn't that there's leakage. Like I said, it happens all the time. Most data science teams have it, and hopefully -- I mean, most data science teams have confronted leakage. I think most of us who have experienced data science - it's not a big deal; it happens all the time. It's nothing to be embarrassed about. You fix it, you move on. Just another data science battle scar that you have, and you've learned from that.

But my concern in this one case was this got to an article that was published. When I brought up the issue, it wasn't like we were on the same data science team and we were like "Oh, shoot. Let me fix that. Let me re-run the results and see, is it gonna make a difference or not?" But there was quite a bit of pushback.

So for me, this brings up kind of the larger concern about as we welcome more people into using our data science tools and techniques - which I'm all for. I work for an AutoML company; the goal is to make data science available to a much larger set of people... But how at the same time can we balance and make sure that folks kind of learn some of these fundamental concepts and best practices for how to do data science and solve these problems.

**Daniel Whitenack:** I'm curious - with this particular problem it seems, at least in some cases, like one of those things, like it may not be obvious to you upfront when you're first creating a model and trying to solve a problem, where you might be having data leakage. You see some weird behavior afterwards, or you see degradations in your production model, or you see maybe some suspicious evaluation results, and that might trigger you to dig in deeper... And we can dig into those here in a second, kind of detecting where you're leaking, but are there ways upfront, as you're getting into a problem, that you could kind of set yourself up for success before you have to retrospectively debug where you have leakage?

**Rajiv Shah:** No, absolutely... And I think part of it is just that good problem framing upfront. Data scientists I think are getting much better about this, but thinking about "What is the problem? What are you trying to solve? How are you gonna implement this, at the end of the day? What is the data looking like? What are the production systems that are coming in?"

A common problem that often happens is data gets updated in databases all the time. And if you're not using snapshots, your model could fail because of that. Let me explain that. Imagine you're doing a model on claims, and you're using the text of the claims. Well, if the text of the claims is constantly being updated during the lifecycle of the claims from when it was taken to when the final process was - well, that information is changing over time. So hopefully, you have that conversation when you're setting up the model and the project, and being like "Hey, is this data that I'm using at training time - are the fields gonna be the same as when I actually go and set up my production pipelines, at the time of prediction?"

So I think a lot of this can be addressed by just thinking through and having the domain experts, and knowing what the data looks like at the time of prediction. Does that help?

**Daniel Whitenack:** Yeah, it does. I'm wondering, how do you connect this also -- is this connected to... Like, you were talking about partitioning your data, and there's a lot of talk when you first learn data science about training, and tests, and hold-out sets, and cross-validation... And you talked about the sort of group partitioning... Is there one, or is it sort of a case-by-case basis in terms of like every project you do you should consider what unique partitioning is \[unintelligible 00:24:02.25\] scientists sort of just use one-size-fits-all, basically. Cross-validation is easy, because I can just write this one-liner in my code and then I'm set for not overfitting? Do you have any thoughts on that?

**Chris Benson:** \[00:24:21.26\] And you might wanna define a couple of those things along the way, by the way, for listeners who may not be familiar with everything.

**Rajiv Shah:** That's great. That kind of gets to "Are there some good best practices I could use for avoiding target leakage?" And one of them is "What is my default partitioning scheme?" When I get the data - we talked about the issues with the random - how can I do it?

Well, I think the general best practice for data science is to use a technique called nested cross-validation, where what you do is when you partition your data, you're making sure that you kind of break this up into -- I don't know if I can sufficiently define nested cross-validation -- into different folds. But what we wanna do is make sure there's different data that we're using for both the validation, as well as the hyper-parameter tuning of the models. That's another subtle thing that can come into play.

This is where, for folks that aren't new, I just have them set nested cross-validation as the default. It's a pain in the butt to code up, but it kind of gets you in the best place. But like we said with the aftershocks, that's not 100% bulletproof. This is where you still wanna have folks that understand a little bit about data science, and have been burned... And they're just very skeptical. I think one of the takeaways is always to be skeptical of your model and its performance, and think about what else could it be that's going wrong... Because otherwise it's gonna happen when you go to move it to production.

**Chris Benson:** Absolutely. As you were talking about that, I was also thinking on the aside - at least you have a lot of the control as you're busy planning out the model and figuring out your training data, and you can find those things and correct them. When you're dealing with a production environment, or maybe planning a stage for the production environment, how can you apply this line of thinking to that effectively, especially if maybe you don't have control of that exclusively? You may be working with infrastructure people, database people, all sorts of different ties. Even if you've recognized it for training, how do you get it out into the real world and accommodate these same issues?

**Rajiv Shah:** I've seen far too many models that data scientists have made, that haven't accounted for all the production issues, that end up just sitting on laptops, that never actually get put into production. So even if it's a pain to deal with those IT folks on that, and figuring out those pipelines, what data they have, getting snapshots of real production data, you've gotta do it. It's the only way to actually get your model in there.

I realize lots of data scientists would rather just sit on their laptop, be handed some data, and just kind of plug away at it... But if your goal is to actually bring value to the organization, to get models implemented into production, you've gotta have those conversations and figure that stuff out... And it's much better to do it earlier, before you have you or your team spending time looking at these models, than doing it.

**Daniel Whitenack:** Let's say that I've tried at least to use some reasonable partitioning scheme. I've tried to do the best that I could, but I put my model into production and I detect that there's something suspicious going on. How would you go about retroactively looking into this issue of leakage? It could be other things; there could be model drift, or something, where the state of your data was one way, and then something fundamentally changed about the data or the problem or the time period or whatever, and you've got some sort of drift of the performance... But it could also be like this leakage issue, or something. So how do go about that when you have to do this more on the debugging side?

**Rajiv Shah:** \[00:28:11.16\] One thing is I really like that you're talking about monitoring your models and thinking about the data drift, and concept drift, because I think that's an important element. Those things could happen, and it could be entirely separate from target leakage that could be affecting your model. So yes, kudos for thinking and doing that. And then - yes, then we have to start taking this apart and deciphering and seeing "Has the data changed from the time I trained the model to when it's in production? Is that what's causing this lack of performance? Or going back and looking at those features."

So I have a longer talk that I have on target leakage that I did with a colleague of mine, Yuri, who's spoken at the Open Data Science Conference... And he has kind of different categories of target leakage. We've talked about data partitioning as one of them; we've talked a little bit about that initial set of data is another source of leakage... Thinking of that example of using that correlated feature, or overriding information is often another piece there...

Another example of when that can happen is if you have, for example, image data and it has some type of labels inside it - using the explainability tools and interpretability tools, hopefully then you can figure that out and go back and then fix that data for that...

But two other places that it often happens is feature engineering. This is one, it's a very subtle way... But when we kind of engineer and build those features that we're talking about decoding and deciphering, often people will make the mistake of doing it and creating this feature engineering on their entire dataset. People will do EDA on the entire dataset... And that allows you to learn the ins and outs of your entire training datasets, but that also subtly leaks information now, because you don't have that hold-out dataset that's really kind of partitioned off from you, where you haven't seen it from.

So that's a real subtle one, that you won't be able to catch until you really think about how they actually did the feature engineering, and you're like "Oh, shoot."

**Daniel Whitenack:** Yeah, I think that's a really important point that you bring up, and something that really is not stressed at all. If I'm getting what you're saying -- let's say that you have a dataset, you have a feature, and you wanna know "Oh, is this normally distributed? Do I have to apply some sort of power rule to this to fit the assumptions of my model?" So you could do those things, and look at nice histograms or plots on your entire dataset. So you get your whole customer transaction data, you do that... But then you kind of partition off and you train your model on only part of that data, but the way in which you've created those models or the transformations you've done on those features is informed by data that you're not using in training.

**Rajiv Shah:** Exactly.

**Daniel Whitenack:** One thing you can do, of course - when you're preparing, you can adjust your exploratory data analysis methodologies... But yeah, I could see how that one would be a really hard one to catch, because it also would require really good documentation around how you did that feature engineering initially, which I know maybe we're - at least myself - not always the best at documenting things the way I should... How does that fit into this and the teams you've worked on in terms of maybe not so much the data side of things, but the process side of things? What are some of your best practices around how you document your process on projects?

**Rajiv Shah:** \[00:31:50.02\] Yeah, this is a very tough one to get... I think one of the initial Twitter threads that we were talking about a month or two ago, that led to this podcast, was a thread by Jacob Schreiber, that looked at a machine learning package in genomics that was doing this exact same thing. It was using all the training data to get the insights, and then later - yes, they used cross-validation, but it had already been kind of corrupted, because they'd already learned everything from the training data.

So solving this problem is very tricky here, because it relies on your data scientist being very aware of these issues, and not doing it... Because I think decoding it from somebody's code is a bit tricky, to kind of go back and see how they engineered they code, did they do the proper splits...? And if we start thinking about things like time series, where you start having lagged features, it gets really tricky to be able to diagnose and look at somebody's.

**Daniel Whitenack:** It's a hard one

**Rajiv Shah:** Yeah. I don't have a very good answer for you on the best process for it, because--

**Chris Benson:** Well, I have another way of going about it... I kind of put you on the spot for a second... And you can make it up. Because I literally was wondering - if I'm trying to tie everything that we've covered together, because there's a bit of complexity to it, and I'm trying to make it easy to understand for my own selfish purposes, so that as we get past the episode, I can start applying... Can you think through a use case - and it can be fictional or it can draw from something that you've done... But take us from the beginning to the end a little bit in your thinking, and say "I'm doing this now, and then I'm doing that..." It could be anything, there's wrong answer, it's whatever you want... But kind of sequentially take us through, so that as we come out of that, myself and maybe other listeners that are interested can kind of go "Okay, I get that. I can literally turn to my work after this podcast and go apply that."

**Rajiv Shah:** I'm not sure I can do it quickly, in 30 seconds... I will say we have built out a webinar that goes into detail on target leakage, as well as there's an online course available. For me, this target leakage is really a fundamental concept that anybody new to machine learning really needs to kind of go through and learn all these different types of areas... So I've spent some time kind of actually taking all these different pieces together and building a little course with example problems for people to kind of go through... And that way it kind of triggers -- that way, hopefully, they can learn from seeing some other examples of where target leakage might occur, and they don't actually have to go through the pain themselves of experiencing it.

**Daniel Whitenack:** Awesome. And we'll make sure and link that in our show notes as well. I think that's great, and something I wanna go through as well.

**Rajiv Shah:** Yeah. There's a couple of rules of thumb about just partitioning that data early, using all the interpretability and explainability tools to understand what are those factors in your model. There's having the domain knowledge, so making sure you're understanding what you're trying to predict, what are all the predictors, is there anything that's kind of leaking in, understanding your IT system, making sure that, for example, records are being updated using good practices for creating features, for training your models... We talked a little bit about nested cross-validation...

Another common mistake data scientists will do is on their hyperparameter tuning. Algorithms, for example, some of them literally have tens, maybe hundreds of different knobs and levers, hyperparameters that we can turn and modify when we're building out our models. A lot of data scientists - not all - like to spend a ton of time (if you ask me, way too much time) on hyperparameter tuning... But a common thing that can happen is what you're doing is you're testing, you're moving the knob, you're moving the switch one position, you test the model. You move it to another position, you test it. And you literally do this hundreds, thousands of times. And if you're doing all of this and using the exact same dataset to test it on, what can happen is you can actually do what's called overfitting to your model. You can essentially kind of learn that validation dataset that you're using to test it on, by testing it 1,000 times. And that is another form of kind of leakage that can happen, where then you've built a model that's much more optimistic, that has memorized its testing data... So you think it's working quite well, but actually it isn't; you just kind of figured out the one lucky one that understandings this testing data.

**Chris Benson:** It's memorized, rather than generalized.

**Rajiv Shah:** Exactly, exactly.

**Break:** \[00:36:31.11\]

**Daniel Whitenack:** Raj, it's been great to talk a lot about the practicalities of this issue... I know there's things we've talked about that are for sure things that I wanna help better integrate into our team structure as well... I was curious, now that you've been with data robot for a while, you've been in Academia, you also have a sort of unique perspective, I think, on machine learning and AI, and are at the same time very concerned with these practical side of things, and productizing things... What are some of the things that you're excited about exploring over the next year or so? Maybe it's new verticals that you think AI or machine learning is really gonna make an impact in, or maybe it's methodologies, or even just practical things that you're implementing, that you think are gonna make a big difference for you? What are you thinking about as you fall asleep in the evening, if you're thinking about machine learning and AI type of things?

**Rajiv Shah:** Boy... There's two pieces for me for this question. One is just like the technical side of my data science, of just like feeding me in terms of cool things on Twitter, cool little visualization blog posts to play around with... I think there's a ton of good stuff out there that I like playing around with. Transformers and NLP is an easy one... In visualizations you see things like deck.gl, that you can just make the coolest visualization pieces around...

So I think there's a lot of cool stuff there as part of it... But I will tell you, part of it, as I always tell people that are getting into data science - don't get suckered in by that. Most of the data science that's useful in an enterprise hasn't come out in the last three years; it's been around for much longer.

**Chris Benson:** That's a really good point.

**Rajiv Shah:** Don't get into reading the latest archive posts, and trying to take those into account, because - going back to those kind of classic problems, those classic either Kaggle competitions or other projects and learning those techniques is gonna get you much further along than following the latest pieces.

**Chris Benson:** Don't start with GPT-3 as your very first thing. \[laughter\]

**Daniel Whitenack:** \[00:39:49.21\] I have maybe a follow-up to that... You were talking about those Kaggle datasets or other things, and you've emphasized previously in the conversation, one of the really important pieces of this whole puzzle in terms of creating value is understanding infrastructure, understanding production systems... What do you recommend -- because sometimes I talk to new people getting into data science about this very thing, "Is it more useful for me to learn the state of the art models, or what should I learn?" What do you tell people that are just getting into the field in terms of how heavy they need to jump into things like databases, like dev ops and CI/CD? Those things that are kind of common software engineering world things - how do you prep people that you talk to?

**Rajiv Shah:** It's tough, because the expectation now for data scientists is that they have to know it all. Especially if you're going out in the job market, if you don't know all the pieces, you really feel like "I'm not measuring up." But then when you go to actually study and work with data scientists in an enterprise, most of them are in a very narrow piece there, and they're complaining that they're like more challenges, and they'd like to do different things.

When people are first getting into the field, I encourage them to know a little bit about everything. Spend a weekend just playing around with Spark, so you kind of have some idea of what Spark is. Don't spend two months on Spark, but just a weekend, so you have some ability to kind of know what the tool is and where it fits into all of that.

And kind of go down the road like that for a lot of these technologies, databases - just have a little bit of understanding, so if you're at a conference, you could have a conversation and know what are the things you'd wanna go to, versus not. But I think you can't go deep in all of them. There's just not enough time to go deep into all of them.

What I always encourage people to do is a much more project-focused way of learning data science, where you solve some type of project... Hopefully, it's a passion project, something you care about, and you solve that end-to-end. And along the way, you're gonna learn a lot of those subtle skills of how to set up a web page, or how to fire up a web server in Python, whatever. But you'll pick up those skills along the way, to kind of solve the problem... And then you'll really own those skills. Because if you solve a problem with it, for that domain you totally understand how to solve the problem and you can go deep with somebody on that.

**Daniel Whitenack:** Yeah... Because even if it's a side project or a passion project - which I definitely agree; I think if you're gonna get into this, choose something that you're going to want to work on, because it makes it just so much easier to put in that time... But yeah, it's not gonna be like -- let's say that I'm creating a special camera to detect my pets, versus raccoons, or something that is bothering my trash.

**Chris Benson:** Do you have a problem with the raccoons, Daniel?

**Daniel Whitenack:** Yeah... \[laughs\] Well, actually, right now we have a mouse hanging around, but I don't know if I could catch that on the camera.

**Chris Benson:** Sorry. Didn't mean to mess you up.

**Daniel Whitenack:** No... \[laughs\] If you do that, the solution to that isn't gonna be a Jupyter notebook, right? You may want to play around with your video and whatever, in a notebook; I'm not saying anything actually bad about Jupyter notebooks, because I use them every day... But at the end of the day, how you're gonna solve that - maybe you want something that you can look at on your phone, like a phone app, or maybe it's a web page, or a dashboard, or something that you wanna look at with that... So it forces you to think about some of these intricacies of integrating a model into other things, which is something -- I don't know if you agree, Raj, but it's something I see missing in a lot of training. A lot of buildup around -- even sometimes around model management, which some people are getting a little bit more into that, but not as much into integration, and that sort of world.

**Chris Benson:** \[00:44:17.28\] Yeah. And just to insert, before you answer that... I think that's a surprise for a lot of data scientists - to your point, Daniel, at the end of the day, a model that's going into production is a software component that has to be deployed.

**Rajiv Shah:** No, it is a good point, and it's been often missed in data science, right? Where the conversation has been around algorithms, and not necessarily what's gonna take to work with IT to get your model being used. And you're right, IT often has specific requirements that you want, and... You know, going back to your earlier thing about the Jupyter notebook - I'd say go ahead and try running your Jupyter notebook, and using your production model off that, and that way you'll learn what can go wrong \[unintelligible 00:44:58.21\] Sometimes the best way to learn is to fall down a little bit...

**Daniel Whitenack:** True.

**Rajiv Shah:** But no, absolutely... Often, I think about data science as kind of the webmasters of 2020. I remember when the internet was coming along, there was kind of the webmasters, and they did everything - they designed the web page, they ran the networking switch, they came to your house, solved your modem issues... And data scientists often are put in to that same category, of having to fix every problem.

The piece there, where we're talking about productionizing - many places now have said "Hey, if you're a data scientist, you're gonna explore data; you'll be on this part of the data science team." If you're the software engineer type, that is good at coding, that knows how to take that and put it into production, you'll be let's say an ML engineer or a data engineer, and do that.

So as data science matures and we get a little bit more of these specializations and hopefully boundaries around this, to help do that... Because you're right, we need those skills at the end of the day to get your model working.

**Daniel Whitenack:** For sure. I think it's a great message to end out with here... Because as the name suggests, Chris and I are both concerned with the practicalities of this, and bringing a practical side to AI... So I really appreciate your perspective there, and perspective from really spending time building data products, and productionizing models... It's really useful.

We're gonna link to those things that you mentioned during the show, the webinar and all of that... So I encourage our listeners to definitely check that out. Also, check out - like we mentioned, Raj and I have talked a bit on Twitter, so you can connect to him and I and Chris and the show there. We've got our community on Slack; if you go to changelog.com/community, you can join our community and talk more about the topics there. And LinkedIn - we just had someone from LinkedIn on our show last week, and that's another place where you can find us.

So make sure and connect with us, and I really appreciate you coming on, Raj. It was a great discussion. And I appreciate the very practical ideas that you've given me as well.
