**Daniel Whitenack:** Welcome to another episode of Practical AI. This is Daniel Whitenack. I'm a data scientist with SIL International, and I'm joined by my co-host, Chris Benson, who is a principal AI strategist with Lockheed Martin. How are you doing, Chris?

**Chris Benson:** Doing great! How's it going, Daniel?

**Daniel Whitenack:** It's going good. It's looking a little bit more like fall around here, which is a really nice time of year. I'll have to get out the leaf blower soon, but otherwise doing pretty good.

**Chris Benson:** Yeah, it's finally starting to cool down here in the South, so I'm looking forward to cooler weather.

**Daniel Whitenack:** Yeah, nice. Well, speaking of times changing, we have a guest today that's gonna help us dive into some things about time series data, and other related things. We have Anais Dotis-Georgiou from InfluxData with us. Welcome, Anais!

**Anais Dotis-Georgiou:** Hi! Thank you so much. It's nice to be here.

**Daniel Whitenack:** Yeah, we're so happy to have you. We saw your talk listed on the All Things Open website; a couple of people from the Changelog were there... And I'm really excited to dig into a few of those details, and other things. But before we do that, why don't you just give us a little bit of an intro about how you got into data things, and eventually ended up at InfluxData?

**Anais Dotis-Georgiou:** Sure. Originally, my background is in chemical engineering - at least that's what I went to school for - and when I got straight out of school, I thought maybe that I wanted to go into biotech and do research. I spent some time working with a liquid handling robot, and after a little while of just kind of being in a sterile environment, where my only friend was this robot...

**Daniel Whitenack:** So a liquid handling robot - a robot that handles hazardous chemicals? Is that the idea?

**Chris Benson:** Well, it didn't handle hazardous chemicals. It essentially was a \[unintelligible 00:03:40.08\] and could execute protocol on larger scale. It could replicate a single experiment more efficiently.

**Daniel Whitenack:** Yeah, so it was more like an automation thing, versus -- first when you were talking about that I had those OpenAI robot hands in mind, carrying test tubes around, or something.

**Anais Dotis-Georgiou:** \[00:04:03.14\] Yeah, that would be really cool. This carried around tiny volumes of liquid, but nothing quite like that... \[laughs\]

**Chris Benson:** We're recording this around Halloween, and so I was just thinking liquid Nitrogen bubbling over the side... It could be a lot of fun.

**Anais Dotis-Georgiou:** Honestly, maybe I would have stayed longer if I had been messing with a robot that was handling liquid Nitrogen, so...

**Daniel Whitenack:** Well, maybe someday...

**Anais Dotis-Georgiou:** Maybe...

**Chris Benson:** We can all aspire.

**Anais Dotis-Georgiou:** Right...? But yeah, so I did that, and I decided I didn't like being in a sterile room, with only a robot to talk to, and I got to work with some data scientists who were actually creating the detection algorithms for the work that I was doing, and basically all the data that I was collecting... And they were trying to detect autism, do pre-natal testing for autism, and I felt like the data scientist were the ones that really got to have all the fun, because they didn't have to do the same procedure over and over again just to collect the data; they got to actually take the results and then derive meaning out of it... So I decided, "Hm, maybe I should go down that path, and that way maybe I'll even get to talk to humans more", which -- I don't know, it's kind of funny when I think about it now, because people usually think about tech being a little bit more sterile, or less people-facing... But especially in the role that I have now, it's extremely people-facing, and I really enjoy that. And I was missing that from biotech.

**Daniel Whitenack:** Your role now is developer advocate, is that right?

**Anais Dotis-Georgiou:** Yeah. Are you familiar with what a developer advocate does?

**Daniel Whitenack:** I am, but I expect that there's a lot of confusion out there, so maybe it would be good to have a developer advocate define it for us.

**Anais Dotis-Georgiou:** Okay. Well, every developer advocate seems to have a different answer for what developer advocacy or developer relations is...

**Daniel Whitenack:** Well, for the record, your definition will stand at Practical AI, because you're the first one to define it, so...

**Chris Benson:** It's canonical for us.

**Anais Dotis-Georgiou:** Oh, no... Okay. Well, I would just define it as - and I think this is barring from a lot of other developer advocates, but basically a way to connect the company to the community, and the community back to the company. Our role is to facilitate the use of our product, but also to bring product feedback... So kind of just establishing that bridge. And that takes the form of giving presentations, going to meetups, having meetups, writing blogs and tutorials, maybe contributing to documentation or the product itself, and hopefully having interactions with product to help guide the product in the direction that the community needs.

**Daniel Whitenack:** Was that a sort of natural transition for you? Did you do data science as a title - you know, data scientist, for a while, or did you immediately want to get into this more of a developer-focused side of things? Because I definitely think that both are important. It sounds like the developer-facing side was really important to you.

**Anais Dotis-Georgiou:** Yes. I wasn't ever a data scientist. I took a data science bootcamp at the University of Texas in Austin, and I headed towards data science because I did a lot of math as an undergraduate, and I really enjoy math. And data science felt to me like an opportunity where I'd get to use math and get to think about math... So that's what attracted me to it. And also the fact that you get to solve problems by thinking critically, and looking at data and trying to uncover solutions, and also reevaluating your biases, and stuff.

**Daniel Whitenack:** Developer advocate I think is misunderstood by a lot of people, but even more so probably data scientists, and what that entails... Being a developer advocate for a data-focused company it seems is a really needed thing right now, when so much is misunderstood about how people are processing data, what data science is in general, what we should, what we shouldn't be doing, and what developers actually want to do... So yeah, I could see how it could be a very challenging position, but definitely very valuable.

**Anais Dotis-Georgiou:** \[00:08:16.00\] Yeah, it's definitely challenging. I tend to get two camps of people - people who are either just breaking into the field, or people who seem to have several years experience in Ph.D's and spend most of the time educating me, which is -- I mean, I get to learn a lot, so I'm always grateful. But yeah, I think it can definitely be tricky, because I sort of try to position myself towards helping people break into data science, and also data analytics... There's a lot of opinions about how one should handle their data, and so it can be tough trying to talk to both extremes of that audience, because they have such different needs, and such vastly different knowledge base. It's really hard to talk about math with people who are just learning about math and also people who have Ph.D's in math, in the same room.

**Chris Benson:** Fair enough. And I think that of the three of us, I'm probably the weakest in math, and so I'll probably have all sorts of questions as we go through the conversation for you. I actually wanted to start off by asking -- through the course of the beginning of this conversation the phrase "time series" has come up several times, and I was wondering if you would (for those who are maybe just getting into it, or not previously familiar) tell us what a time series is and means, and give us a little background on that.

**Anais Dotis-Georgiou:** Sure. A time series is just any data that has a timestamp attached to it. Probably the most common example is stock price, and another really tangible one is weather, or temperature data, because you have your temperature, and that temperature happens at a certain time... But what we're finding out, or I think what people are finally coming to recognize is that time series data is present in almost every industry. If you think about industrial IoT, or any sort of industry where you have -- chemical industry, petroleum, biotech etc. you have a lot of sensors, you're monitoring your environments and you need to find out the pressure and temperature of maybe a pipe, or a heat exchanger, and you need to collect that data to make sure that your process is running smoothly, and that you're not gonna have any risk of explosions, or any sort of damage to your process and the people that work there. You have examples of time series also in dev ops monitoring, continuous integration, application monitoring is a big one... So obviously it exists all throughout tech.

We can also think about time series also existing for patients, in healthcare, where you need to monitor maybe different attributes of their health over time... And we also have customers using Influx for monitoring the growth of their farms, or their greenhouses, we have customers using us to monitor solar panels... CERN used Influx to monitor all of their particle accelerators, and help them find the God particle. So probably because we live in space time, time series data exists everywhere. People are finally coming to realize that that data is valuable, and that they probably could benefit from actually trying to store it.

**Chris Benson:** I guess you really have demonstrated that it is just about universal -- you know, there is an application for it in (I guess) most any industry... I am curious, just as a follow-up to your own background, what is it about working with time series data that has attracted you personally, and of that, do you have a particular use case that you've worked on that was the most interesting to you?

**Anais Dotis-Georgiou:** \[00:12:02.03\] Yeah, so I really like the CERN use case. I like it for two reasons. One, because as a developer advocate, I help the open source users primarily, and so anytime that I have an open source user who's doing something really cool with the product makes me happy... And they were able to monitor all of their particle accelerators using open source. I think that's pretty cool.

**Chris Benson:** And by the way, you mentioned the God particle a moment ago... I'm assuming that you're talking about the Higgs boson...? I know this isn't a physics thing, but if you would take just one second for anyone that hadn't heard of that, and might think it's a religious connotation rather than a scientific one, could you tell us for just two seconds what the Large Hadron Collider is doing in that project that attracted your attention, and what the Higgs boson is? Kind of a short answer.

**Anais Dotis-Georgiou:** Sure. Basically, they're colliding atoms into each other to try and figure out all of the subatomic particles... And there's one particle that was called the God particle, and it is actually known as the Higgs boson. That's a subatomic micro-particle -- I don't actually know the right word, because I'm not a physicist...

**Chris Benson:** And Dan, you should hop in as well...

**Daniel Whitenack:** You're doing great. Probably better than I could do, actually... \[laughs\]

**Anais Dotis-Georgiou:** Yeah, so basically after two protons collide, then this is a byproduct, this Higgs boson, which is sometimes referred to as the God particle. They were trying to find that, because It think it was at the time - and maybe it still is; I don't really know where the phrase comes from, but I think it was like the smallest particle in the Universe, so the idea being that maybe that's where everything else came from in the Universe... So if we can find or prove that the Higgs boson exists, then we can find the most fundamental building block of the Universe... And that could be referred to as the God particle.

**Daniel Whitenack:** Yeah, so they call it the Standard Model, I think... And this is outside my domain as well, but - yeah, it was like a missing piece of that Standard Model, that could help them really put all the pieces together of how things were formed. So yeah, it's super-exciting... Were you able to go visit CERN during that project, or just talk to people?

**Anais Dotis-Georgiou:** No, I actually didn't talk to people, and I wasn't at the company when this was happening. I heard about it afterwards...

**Daniel Whitenack:** Oh, okay...

**Chris Benson:** It's just cool, isn't it?

**Anais Dotis-Georgiou:** Yeah, exactly.

**Daniel Whitenack:** Well, maybe you'll get assigned to that project at some point. That'd be cool. I'm sure that they still have other time series that they need to analyze.

**Anais Dotis-Georgiou:** I hope so, that would be cool.

**Daniel Whitenack:** I was actually trying to think about -- while you both were talking, I was trying to think about "What is not a time series, that I work with?" And there are certainly things that aren't time-stamped that I work with, but pretty much any data could be time-stamped. I was thinking of images that I'm taking with my phone; an image is that sort of matrix representation of reality, but actually, as I scroll through my phone, it says "Photos from today", or yesterday, or before... So there's actually a time series of photos on my phone. So it's really kind of all-encompassing, and I guess time series data could be like a timestamp match with any type of data, not just a numerical type of data. It could be other forms of data too, right?

**Anais Dotis-Georgiou:** For sure. There are a ton of papers out there that incorporate the use of LSTMs (Long short-term memory networks) for image classification, like you're talking about... Because it turns out that if we wanted to classify, let's say the scenes of the Breakfast Club, and we took any random still from that movie, it would probably contain four kids, and it would be really hard to classify. But if we use a temporal element to those images and we look at the images that came before and the images that came afterwards, the effort to classify various stills from that image, then all of a sudden we've provided context for those images, and it vastly improves the classification of images. So yeah, you're completely right... Even though Influx isn't really a platform to storing that type of data specifically, that definitely also can be thought of as time series.

**Break:** \[00:16:22.15\]

**Chris Benson:** I wanted to start off the next section by asking about what InfluxDB is. Could you give us a little bit of background about what Influx is and what it's trying to solve?

**Anais Dotis-Georgiou:** Sure. InfluxDB is a time series database, and it is trying to solve the problem of being able to store or ingest time series data. And what makes time series data unique is that you usually need to be able to write huge, huge volumes. Influx has been made as an append-only database, to prioritize really \[unintelligible 00:17:57.15\] to allow you to ingest data at the nanosecond precision, and also be able to then query that data in real time.

**Daniel Whitenack:** So if I'm just thinking of stock price, or some common time series example, you have your timestamp and you have the stock price. Maybe in a simple example it's just those two things. So you could want to store those very quickly over time... And then what is a query like, that you might make on that stock price data? Is it like "I wanna see the stock price from this time to this time", or "I wanna see what was the average stock price during this time"? What are the sorts of operations that you might wanna do on time series data, in a time series database like InfluxDB?

**Anais Dotis-Georgiou:** For sure. So it uses two languages. It depends what version you're using. If you're using 2.0, then we have created a functional query language and scripting language called Flux. It's kind of JavaScript-esque. It has a lot of pipe-forwards, which to me help increase the readability of it. That would be like "From this bucket called stock price, I wanna filter by this particular ticker, and I want to specify my range as having this start time and this end time." And then you can apply a whole bunch of different functions to it, whether or not that's in the case of stock prices applying various analytics to those stock prices, like the Chande momentum oscillator, or maybe you want to do things like apply the average, or find the derivative, or look at the standard deviation for a group of time series... Yeah, there's a bunch of different functions you can do.

And then if you're using the 1.x line, then you can use InfluxQL, which is like SQL; it's very similar. So you do maybe "select all from this particular stock from the last five minutes", or whatever.

**Daniel Whitenack:** \[00:20:09.20\] We're starting to get into -- I guess these are just kind of query operations, or queries that you might perform on time series data. Maybe you could give us a little bit of a sense as well about the term time series analysis. Let's say you have time series data, it's stored nicely in InfluxDB, you can query it in these ways to get the data back in various different ways that you might be interested in... What is this whole range or this whole topic of time series analysis about, and what buckets of analysis might you wanna do? I'm thinking of forecasting, for example, might be one type of thing... But maybe there's a whole bunch of different things. Could you let us know what those things are?

**Anais Dotis-Georgiou:** Yeah. So forecasting is one big bucket; of course, that's why people collect time series data, is because they wanna try and predict what's gonna happen in the future... But another is anomaly detection, and trying to figure out if your environment is running smoothly, or your plant is running smoothly, and trying to protect against failures.

And then beyond just forecasting, which is extremely complicated, you might need to look into the different statistical elements of your time series in order to find out which forecasting method you should use, and which anomaly detection method makes the most sense.

**Chris Benson:** I'm kind of curious... I'm gonna approach it from the side of if you're a developer who's getting into time series data, and you may or may not have done anything in the AI space, does Influx data automatically provide you a set of tools for which functions you might use? If I was a developer and had a use case in mind, how might I know what functions would be appropriate to apply, and how would I go about doing that?

**Anais Dotis-Georgiou:** Out of the box, Influx offers Triple and Double Exponential Smoothing. That's a statistical forecasting method, so it doesn't involve any machine learning, any neural nets, really... So that's all that comes out of the box with Influx. Of course, there are client libraries, so you can always use some Python library or R library of your choosing, that you're more familiar with. The act of figuring out which forecasting method you should use for your time series data is extremely complicated. It can be almost as complicated as you want it to be.

Every classical forecasting method and neural net has some underlying statistical assumptions about your data, so one of the first steps that you can take is making sure whether or not your data violates one of those assumptions, or another side matches the assumptions; maybe it contains -- for example Holt-Winters or Triple Exponential Smoothing, two of the assumptions is that your data is non-stationary, meaning that it has a trend, and the second assumption is that seasonality is present. So if your data doesn't have seasonality or it doesn't have trends, then you don't wanna use Holt-Winters to generate a prediction or a forecast. So that's kind of a short answer. Does that help?

**Chris Benson:** Yeah, that helps a lot. I appreciate that.

**Daniel Whitenack:** I don't know about maybe other people -- I definitely get what you mean by there's so many things at play here. Whenever I look into time series - and I have a couple of times in the past, especially when I was working with a telecom startup and doing some monitoring stuff... But there's all of these elements of it, like how many lags in your data is important, and moving average, and seasonality, trends... All of these things. For people getting into this, do you have any suggestions for a starting place, or maybe a starting type of data that they could experiment with to learn a little bit about all of these different elements? Because I definitely see what you're saying, it could be overwhelming.

**Anais Dotis-Georgiou:** \[00:24:11.02\] I actually recommend that people try and identify the problem that they wanna solve first... Because I think if you have a real problem, rather than just exploring theoretical datasets, you're a little bit more tied to the problem, and you're a little bit more motivated to dive into the different attributes that your time series has... And also, hopefully if you've picked the dataset, then you have some domain expertise about that dataset and you understand it better. So I always recommend looking at a dataset that you're familiar with, and then beyond there, in terms of good tools - I mean, I use scikit-learn. I'm a Pythonista, so I would probably use scikit-learn to do initial discovery about my dataset and dive into the different attributes of it, looking at things like lag, autocorrelation, correlation between other datasets, all the statistical analysis, standard deviation etc. just to get a feel for the attributes in my dataset.

Then I think the next step -- or the very first step maybe is to determine whether or not your problem is univariate, versus multivariate... Multivariate meaning that you have multiple time series that you want to account for when you're making a prediction or an anomaly detection... And then the second (a univariate) is where you just have one time series. The reason why it's important to identify whether or not your problem requires multivariate analysis or univariate analysis is because the way that you handle those two cases is entirely different. It turns out that if you are looking to do, for example, univariate time series forecasting, statistical methods work extremely well.

**Daniel Whitenack:** And by statistical methods you're kind of meaning what we would consider non-machine learning or AI methods? I know that's a very convoluted thing, drawing the line there, but that's the sense you mean - statistical as in non-machine learning, I guess.

**Anais Dotis-Georgiou:** Right. No neural nets, I guess, is how maybe I would describe it. Yeah, everyone has a different description for machine learning. I hear sometimes people consider linear regression is technically machine learning, because it uses a machine to make a forecast. But I disagree, I'm like "No, I don't think we can call it linear regression machine learning."

**Chris Benson:** I'm with you on that.

**Anais Dotis-Georgiou:** I guess I'd kind of make the distinction at neural nets, let's say.

**Chris Benson:** I have a quick question for you there... We've started talking about neural nets a little bit, and I'm kind of curious - how does time series data and a database (in this case InfluxDB) fit into a workflow? If you're starting to think about neural network training, or deployment, or whatever, and you're trying to put everything together that you and your team may need, where does this fit into that process?

**Anais Dotis-Georgiou:** We don't have -- I mean, I don't know very many people who are actually employing online machine learning with neural nets. A lot of people find that using really simple methods like certain standard deviations away from the mean to define an anomaly works just fine for their use case, so they don't bother with really fancy tools and methods. I guess probably if I were building one myself, I would probably look into using H2O.ai with Influx together, or maybe like BigQuery...

**Daniel Whitenack:** And when you're talking about online versus offline, am I correct in -- so online you're kind of monitoring a stream of time series data that's coming in in some way, and applying some method; offline would be like maybe you have InfluxDB and it's storing time series data, and then you make a query and pull some data out, and then load it into scikit-learn or something like you're talking about and do some sort of retrospective or historical analysis on it... Is that the sort of distinction?

**Anais Dotis-Georgiou:** \[00:28:17.12\] I think you basically touched upon it. I would consider online machine learning to be when you need to update your training. Training, especially for neural nets, can be pretty expensive and time-consuming, but if your data is changing a lot, then you might need to update your model, so that would require retraining your model... And offline it would essentially be that you've already trained your model; you only needed to do that once, for whatever reason, which unless your data is extremely consistent - and if it is that consistent, then maybe you can just use statistical methods, so... I'm going off track, but online - updating your training, training again. And then for me offline is maybe training just once.

**Break:** \[00:29:07.12\]

**Daniel Whitenack:** So we're just getting into statistical versus machine learning, and also online versus offline, but if we kind of go back to the statistical versus machine learning side of things, I know that earlier in our conversation and also in some of your talks you've talked about when you might wanna go after statistical methods versus machine learning and neural nets, and when you might want to do the opposite. Could you dive into that a little bit more? Specifically around time series. What are the signs maybe in your data that you should be looking for when statistical methods are enough, and maybe they're better in terms of interpretability, or efficiency, or whatever, and what are the signs that maybe you need to do something a little bit more, or maybe pull in a neural net?

**Anais Dotis-Georgiou:** Yeah, so my answer - and everyone has a different opinion - is I think it makes sense to use statistical methods when you are only dealing with univariate time series data, and use neural nets if you're using multivariate time series data and you're looking to do forecasts. There are some pretty efficient ways to do anomaly detection with multivariate data that are statistical, or really simple... But yeah, so I'd say if you're looking at a group of time series, then use machine learning; otherwise, use statistical methods. I came to this conclusion because -- are you familiar with the Makridakis Comps, or M-Comps?

**Daniel Whitenack:** No.

**Anais Dotis-Georgiou:** Okay. So they are the benchmark for time series forecast methods. Now, unfortunately they only evaluate univariate time series data, but they take 100,000 time series and they invite researchers from all over the world to participate and try and come up with the best forecasting method. This event happens every year, and then the results are published.

**Daniel Whitenack:** Sounds like a party.

**Anais Dotis-Georgiou:** \[00:31:55.12\] Yeah, right?! Last year - I think it was in June - they just released the most recent results, and what they've found was that a hybrid method of an RNN and exponential smoothing outperformed every other model... But if we looked or evaluate just the statistical methods versus machine learning methods, just the pure statistical or machine learning, the statistical methods outperform the machine learning methods. So while there might be some combination methods and some hybrid methods that outperform some statistical methods in univariate time series forecasting, really statistical methods -- if you're just trying to not generate your own forecasting method because you don't have that time or those resources, and you're looking to pick between one or the other, it makes sense to use statistical for univariate time series data.

That being said, we have the luxury now of monitoring a lot of different things, getting a lot of different data, and depending on the cost-benefit to your business and the type of business decisions you'll be making based off of your forecast, it might make sense to go and spend the extra effort to create multivariate time series forecasting and incorporate neural nets and tackle that problem, which is a lot harder.

**Chris Benson:** I've got a question... I remember actually watching your talk on YouTube; you covered that as well, and talked about that comparison between statistical and machine learning, and the fact that the statistical came... What I am wondering is could you take that and put it into more of a real-life example, just to make it tangible on where you might see that in reality come about? And it doesn't have to necessarily be a real event that you were part of, but just how you might of it that way, so that if someone's struggling to follow why, and they hear you say that the statistical outperformed -- kind of explain why that's the case.

**Anais Dotis-Georgiou:** I mean, the simplest answer for me is that a lot of neural networks that are commonly used for time series data, like RNNs and LSTMs - and I'm not talking about hybrid methods, just plain ones - the evaluation of the forecast operates on the assumption that your data doesn't exhibit autocorrelation. And autocorrelation is when a portion of your time series data is correlated to another portion of it in an earlier time. And that's often the case in the world, where if we monitored my hunger levels throughout the day, because I live a very regular lifestyle and I am a creature of habit, I tend to be hungry at really predictable times in the day. So you'd find out that my hunger levels today will be highly-correlated with my hunger levels a month ago, and you'll find that I'm hungry at the same time as a month ago.

So this pattern that would be present in my hunger data violates an assumption of how RNNs and LSTMs are often evaluated, and it causes overfitting of the models. That's the shortest answer I can provide.

**Chris Benson:** That was a good answer. Thank you very much.

**Daniel Whitenack:** So in the case of the multivariate data - there's more data, there's more complexity going on, so it may be harder to overfit, and neural networks are thus more appropriate, I guess. Would that be a reasonable statement, generally? It's a fairly general statement...

**Anais Dotis-Georgiou:** For sure, I like that.

**Daniel Whitenack:** And when you're talking about these multivariate scenarios, I was just kind of curios from your experience working with developers, what's a sort of range of number of time series that people are putting together in these multivariate models? Is it like a whole bunch, like hundreds, or is it generally like a handful of time series, like "Oh, you've got three different sensors, and you're putting those together", or something like that?

**Anais Dotis-Georgiou:** \[00:36:04.13\] Yeah, it can range from both of those extremes.

**Daniel Whitenack:** So in the hundreds case, I imagine that these are pretty computationally-expensive things, and there's a lot of complexity in terms of the model, and all that... When you're working with time series -- I'm trying to make the connection with some of the things I'm familiar with, like sequence-to-sequence models for text, and that sort of thing... When you have a whole bunch of different time series, is it just that but on steroids, I guess?

**Anais Dotis-Georgiou:** Yeah.

**Daniel Whitenack:** ...in terms of how you prepare the data, and the types of -- you mentioned RNNs and LSTMs, and that sort of thing... So it's kind of similar, it's just kind of on steroids, I guess...

**Anais Dotis-Georgiou:** Yeah. I'm not sure I understood your question, but I agree.

**Daniel Whitenack:** Okay... \[laughs\] No, it wasn't really a question, I was just trying to kind of get a mental model of it in my mind, I guess. But yeah, I was wondering - we've talked a lot about a ton of different methods, and you've mentioned and described InfluxDB and what's available there... As a developer advocate, I wanted to give you the chance also to share a little bit about how people might get started with InfluxDB, and what they might need to get spun up, or if they can test it on their local machine and maybe put some of their time series data into it, and that sort of thing... How can people get started?

**Anais Dotis-Georgiou:** Yeah, so we've just released a cloud offering, and there's a free tier, so that's probably the easiest way, because you just have to sign up and then you're good to go. Otherwise, you can install the platform as a single binary, and then I recommend checking out Telegraf, even if you are not interested in InfluxDB. Telegraf is a collection agent. It's a single binary, and it's plugin-driven. It's database-agnostic, so it's by far our most popular tool. There are over 180-190 plugins... So if you're looking for a way to collect data and you haven't found something that you like, I recommend looking into Telegraf, any which way; it's completely open source.

**Daniel Whitenack:** When you're talking about collect, that could be like "Oh, I have a Raspberry Pi, I have a sensor or something and I want to put something on that to get the sensor data back to my laptop", that's the sort of collection we're talking about? Or is it different than that?

**Anais Dotis-Georgiou:** \[00:38:37.06\] Yeah, you can be collecting data from a sensor, you can collect data from -- I mean, there's so many input plugins. You can collect data from any other database, you can collect data from a CSV or a JSON, you can collect data from Jenkins, or MQTT... Like I said, there's over 180 input plugins, so if you can think of it, there's probably a way to collect data from that source.

**Daniel Whitenack:** And if there's not, I'm sure that you would welcome contributions.

**Anais Dotis-Georgiou:** Oh for sure, yeah.

**Daniel Whitenack:** On that front, what is the open source community like around InfluxDB? I find this interesting, because I worked on an open source data platform, and our users were data scientist and other people, but then the developer community were primarily back-end, distributed systems people. Is it the same with InfluxDB, in the sense that you've got separate developer and user communities, where the users are analytics people, and then developers are most of the time database and back-end people, or is there a lot of overlap there?

**Anais Dotis-Georgiou:** There's some overlap... I think you don't need to be a DBA to use Influx. I mostly talk to open source users, so I have a lot of people that I talk to that are just like "Hey, I'm using Influx to monitor my vegetable garden, or my barbecue..." They just have a home project and they're trying to make their house a smart house... So sometimes they're just developers that are curious about getting into data science and data analytics, and so they just wanna have a fun project. So they really come from all over.

**Daniel Whitenack:** Cool. That's great. It sounds like I personally need to try out Influx. It sounds easy to get spun up and start using. This whole conversation I've been thinking of all the time series data that I'm probably not leveraging in my own world. I don't know about you, Chris...

**Chris Benson:** Actually, while you guys were talking in the last few minutes I was looking at InfluxDB on the web page, and looking at Telegraf, and when you were talking about doing things around the house and stuff, I have a bunch of ideas right now... My wife has a new little garden area that we had this summer, and I'm thinking maybe we can monitor data in the garden and I can actually get her wrapped up in that... So I'm very thankful for that suggestion, because I'm always looking for ways to make this AI stuff practical, not just for myself, but for my family, who are not technical at all.

**Daniel Whitenack:** Yeah. I'm excited to hear more about Chris' vegetable monitoring, and I'm really excited that you were able to join us, Anais, and share with us a little bit about time series, and about some of the things you've been working on, and your perspective on statistical methods versus machine learning - all that was really useful. We'll for sure put links in our show notes to InfluxDB and the other things mentioned. Thank you so much for joining us, it was a great conversation.
