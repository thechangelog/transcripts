**Natalie Pistunovich:** Hi-hi! I'm joined today by my co-host, Johnny. Hi, Johnny. How are you doing?

**Johnny Boursiquot:** Hello, happy new year! This is like my first episode since the year started. It's the first episode of 2022.

**Natalie Pistunovich:** Wait, is this really just the first episode of this podcast for the year?

**Johnny Boursiquot:** No, I'm sure we released some already.

**Natalie Pistunovich:** But this is the first one recorded in the new year.

**Johnny Boursiquot:** For me, at least.

**Natalie Pistunovich:** I'm not sure there were other episodes, but we will find out. Mystery. And we are joined today by Mike Eastham. Hi, Mike! It's great to have you.

**Mike Eastham:** Yeah, it's great to be here. And you are joining us from the overseas side, or from Johnny's side of the overseas; so you two are based in the U.S, but you are based in Brooklyn...

**Johnny Boursiquot:** Maryland. Not too far, actually. Both East-Coasters, yeah.

**Natalie Pistunovich:** Is there a time difference between you two?

**Johnny Boursiquot:** Nope.

**Natalie Pistunovich:** Okay. Well, we have six hours apart to here, to Berlin, so that's 9 PM here. Fun way to start the year for me. \[laughter\] So Mike, you are a tech lead and a software engineer at Tecton.

**Mike Eastham:** Yeah.

**Natalie Pistunovich:** Or TectonAI, I should say, because the name of the product, as you told me, is Tecton. And Tecton is building systems to operate and manage feature pipelines and datasets for production machine learning applications for all sorts of customers that we all know... And you used to be a googler. At Google you were working on indexing and serving infrastructure for web search.

**Mike Eastham:** \[00:04:08.01\] Yup.

**Natalie Pistunovich:** Fun. So can you tell us a little bit on where you work and what you do there?

**Mike Eastham:** Yeah, so Tecton is a company that was founded in 2019; the co-founders were all at Uber prior to starting the company, where they worked on a feature store product (or internal product) called Michelangelo. I think we'll get into it a little bit later in the podcast what it means to have a feature store product, but that's kind of where they met each other and got to know each other.

**Natalie Pistunovich:** And I will pause you for one second to say that all the different names that you're mentioning, for example Project Michelangelo, we will include in the show notes. So if you wanna read more about this one product, you can find it in the show notes.

**Mike Eastham:** Yeah, definitely. So yeah, the company was started around 2019; I joined in March of 2019, I was like the first engineer to join outside of the founders, so I've kind of worked on pretty much every part of the product since pretty near the beginning, when it was just very early prototypes, to where we are now.

So the company is like 55 people now, around there. We've got a couple different sub-teams, and the engineering teams. So I guess we're kind of a mid-sized company now. Our main product is still this proprietary feature store that we've been working on since the beginning, but we've also started contributing to another open source feature store product called Feast. Kind of the lead maintainer and starter of the project works at Tecton now, so we're kind of working on both of those.

**Natalie Pistunovich:** So both the products, the enterprise and the open source one, are feature stores.

**Mike Eastham:** That's right.

**Natalie Pistunovich:** What's a feature store?

**Mike Eastham:** I think it's a very buzzwordy term right now, so I think you'll probably see a lot of people trying to explain it in different ways, or having a different idea about what it is...

**Johnny Boursiquot:** We just went through the whole serverless thing, so we're accustomed to --

**Natalie Pistunovich:** New year, new term.

**Mike Eastham:** Yeah. I'll do my best to give my take on what it is. Feature stores - they're part of this broader concept called MLOps, which you mentioned before. It's all about kind of applying a devops style mindset to getting machine learning applications into production. Feature stores aim to solve one piece of that pipeline, and that's managing feature definitions and feature data.

So you could kind of break down into a couple different components what a feature store is. I'd say the primary thing is that it acts as a source of truth for your feature definitions within your organization or your team, whoever is working on your model. Basically, the idea is that you just have a single place where you define what a feature is, instead of having multiple different copies potentially of the same feature definition, or just having a bunch of different systems for all of your features if they're all spread all over the place.

In our case, we have data scientists and data engineers define those features generally as a SQL query, which is kind of a tool that those types of roles are typically familiar with. The idea is that they can do it in one place and not have to prototype it using SQL, and then later hand it over to another team that builds the production version of that feature using Java or Go or something like that, and then having those things be out of sync. The first aspect is just having a single place where the feature is defined.

**Natalie Pistunovich:** I will pause you just here to go one question deeper, and ask, for those who really focus on backend web servers, and that little world - what is a feature?

**Mike Eastham:** Yeah, that's an important question. You can probably have a very mathematical definition of this, but generally, the features are sort of the engineered inputs that go into a machine learning model. So when you're in the process of making a machine learning model, you sort of have an algorithm that takes in some values and it uses those to predict an outcome. And generally, when you're building these systems, you kind of engineer those values to encode some sort of domain knowledge about the system you're trying to model...

\[00:08:16.03\] So if you have a bunch of, let's say raw data about users in a system, and maybe you're trying to predict a product they might be interested in buying, as someone who kind of knows a bit about or predicts what people might wanna buy, you might say, "Okay, I think their age might be an important determinant of what things they might be interested in." So then you can build a feature that based on your raw data, let's say like a database of all of your user information, just extracts the age as a number. So you're kind of like distilling down things that you think might be important to the model training system. And that process is super-important for building models that actually perform well... Because the model training algorithms are now actually quite sophisticated, and they can produce really good results, but you're always gonna get better outcomes if you have better data going into the training.

**Johnny Boursiquot:** Is the objective of a feature to make it a reusable part of the workflow for building these models? Or what is the objective of having a feature?

**Mike Eastham:** Yeah, so I think definitely in an MLOps context you might say that you want it to be reusable... You can certainly build machine learning systems where all of the work is just done in a silo, and you don't reuse it across different models ever, but you're probably gonna have better outcomes for your organization -- if you ever have more than one model, you're probably gonna have better outcomes if you can share that work across different models. So that's definitely something that people try to use feature stores to achieve.

**Johnny Boursiquot:** Now, how granular -- you gave an example about having a deterministic way of getting somebody's age, giving your data model, your schema, your data store, wherever you're storing your user information. Is the point to have these things very granular, to ease their reuse? Because they are very small in scope; they do one thing and one thing well kind of thing, and then you can just chain them as part of your model?

**Mike Eastham:** Yeah, I think some of that depends a bit on what types of techniques you're using to build the model. So from the perspective of someone who's building a feature store, we kind of just wanna make sure that we support whatever types of features that people wanna encode in the system... So you can have really generic things like age, but you can also get even super-specific features that are something that's specific to a certain product and user combination. So I think there's like a variety of answers to that.

**Johnny Boursiquot:** So a feature then is part of the set of inputs that you're feeding into your model?

**Mike Eastham:** Yeah, so you use it both for training, so you'll provide basically a bunch of previous examples of feature values, as well as the outcome. An example would be I might have a bunch of features about a prospective shopper, like let's say their age, maybe the last ten things they had searched for would be in there, encoded somehow, things of that nature, and then I would have an outcome which would be like "Did they buy a product, or what products did they buy?"

And then during model training, you provide all these examples, and then a model is the result of that. And then later on, you can basically use that model to predict the outcome from just the inputs.

An example I gave before - if you're trying to predict while they're shopping what it is that they might be interested in buying, you have just those feature values as inputs; you feed that into your model serving system, and then you get out a predicted outcome.

**Johnny Boursiquot:** \[00:11:50.01\] So I'm trying to figure out where features fit in the greater set of tools that you would use; if we're talking personalization here, for example, I do know in having used some commercial personalization products that there's different algorithms that are used and different models that are used -- or rather different approaches to training and being able to produce recommendations... Like the example you gave - if I've liked a few things, searched for a few things, then "This should be the next set of things that you might like." Kind of like going on Amazon and you search for one thing and you see other recommendations and you're like, "Oh, I'm seeing things I didn't know I wanted." Or you go to Netflix and you watch something and all of a sudden it's just recommending other things.

So these kinds of recommender systems - it sounds like these are a kind of problem that the features that you're creating would feed into sort of helping these kinds of problems. So I'm trying to imagine in my head where the layer of things needed to have a fully-operational recommendation engine, what unit -- where's the feature at? Is it one of the first things that you do as somebody who's building a model, or once you train a model? What's the workflow? Where does that enter the picture?

**Mike Eastham:** Yeah, so I think it is one of the first things you would start thinking about, but I think another kind of important aspect of MLOps in comparison to DevOps is that you have to go through a lot of cycles. So you might start thinking about features at the beginning, but to really effectively build ML systems, you wanna be able to quickly go through a lot of cycles where you build the features, you build a model, you see how it performs, and then that can give you more information about "Maybe I need to tweak my feature definitions" or possibly "I just need to get more data", or something of that nature.

So I think it is one of the first things you would think about, but you also kind of have to be continuously monitoring what the values of your features are looking like, if you need to change the definitions, if you need that nuance throughout the lifetime of the model.

**Johnny Boursiquot:** So what makes features sophisticated enough or complex enough to require their own data store?

**Mike Eastham:** So there's a couple of interesting requirements from a systems engineering perspective when it comes to feature data. One of the biggest ones is that I mentioned that you kind of end up using feature values in two main places; you use them once when you're building the model or training the model, as part of your process of deploying a machine learning system, but you also need to use it in production once you have the model deployed, in order to actually make the predictions. So it's the same sort of logic that defines the feature values, but you need to apply it in two different places. And you have different performance requirements for those two different use cases.

Generally, when you're making a prediction, in the context of most recommender systems, for instance - you have a user generally that's kind of sitting there at the other end of the connection, waiting for search results to be ranked, or something like that. You obviously want that to happen quickly; so in that kind of online context, when you're making a prediction, the latency is very important. Lots of times people have requirements of something like ten milliseconds in order to retrieve feature values, because that's only one piece of this whole process that has to happen to make a new prediction.

Whereas when you're training the model, the latency is not super-important. I mean, you obviously don't want people sitting around for hours, waiting for training to happen, but the throughput is more important in that case. Generally, the more examples you can put into training, the better results you're gonna get. So that's a different set of priorities for those two different contexts that you need the feature values.

In addition to the performance requirements being different, in the online case you're generally looking for the freshest data, so you want the most recent version of the feature value. That doesn't make sense with the age example I've been using, but if you're talking about a feature that's like the last product that someone bought, you want that to be updated very quickly after someone makes a purchase.

\[00:16:07.14\] So you want those to be fresh, and have the most recent copy, whereas in the training or offline contexts, you want to get the correct value for like a historical point in time. So you wanna be retrieving the feature value as of the example that you're computing features for. So the interface looks a little bit different in addition to the requirements for performance.

**Natalie Pistunovich:** Would you say that the reason that feature stores became a thing rather recently is that we expect faster everything? Like you said, fast search results, and everything? For example, feature stores were not really around five years ago.

**Mike Eastham:** Yeah, I think that's a big part of it, the performance requirements. I also just think that people are trying to deploy these machine learning systems in a much larger variety of businesses and products than they were maybe 5-10 years ago. I think really large tech companies have had some form of what I'm talking about for quite a long time - Google, Facebook - but now there's really a lot of smaller organizations that are trying to build these types of things, and running into these problems that they can't put as many engineers on as a Google or a Facebook. So there's a lot more interest in trying to find these off-the-shelf systems that help out.

**Johnny Boursiquot:** So given that this falls in the category of MLOps, as you've been referring to it, is this meant for the people that operate these systems? I'm trying not to conflate the people actually building and training those models with the people actually running those things. So there's a seam there, but I'm not quite sure on which side of the fence basically the feature store users and operators fall.

**Mike Eastham:** Yeah, that's a good question. The answer is that both of those categories are users of feature store systems typically, and really, one of the most important things that a feature store can do is provide a clean seam between those two different roles.

I briefly mentioned before, but before people were kind of integrating this feature store concept into their workflows, oftentimes the way a feature would make it into production would be a data scientist would kind of do the exploration in the data, come upon insights and figure out what feature values they wanted, and they would generally test those out by doing something like writing SQL, or maybe using ad-hoc Python scripts, and cutting data up with Pandas, or something along those lines, that would produce data that was good enough to do the training, but maybe wouldn't actually meet the performance requirements of doing the actual online survey piece. And then often what would happen is that the SQL queries or the Python scripts or whatever they are would kind of just get handed to a data engineering team, they would have to decipher whatever it was that was going on and translate that into a system that could compute the features in real-time.

There oftentimes were mistakes made in that process, people didn't quite understand what was going on in one version or the other... And if you have discrepancies between the training system and the online system, it really hurts the performance of your model, typically.

So the whole idea with the feature store is that we can just have the data scientists define their features once in a way that they understand... So we support SQL, we also support defining them in Python, if people prefer that... But once they've done that, it already is meeting the performance requirements that are kind of needed on the data engineering side. These behind the scenes do a lot of pre-materializing feature values, and things like that, to make sure that they could be served promptly when they're needed by the model serving system.

So we have one part of the interface that's focused towards the data scientists that are doing exploration, defining new features, and then another piece that is focused towards people that are operating the serving systems and integrating them into CI/CD pipelines, and things like that.

**Natalie Pistunovich:** \[00:20:11.16\] Yeah. A company I used to work for in the past, they had exactly what you described. There was the data science/engineering team, who were building models and taking data and crunching and coming up with new ideas and new rules, kind of... You know, "if this, then perform this action." Then they would just hand over those Python chunks of code to the Go team, which is the backend team, and then "Now translate this into the system. That's exactly what it's solving." So it's been a couple of years, but yeah, that's very much in my personal world of context at least.

**Johnny Boursiquot:** That's not error-prone at all... \[laughs\]

**Natalie Pistunovich:** Yeah, even just translating from Python to Go, you would lose some of the precision that they found, or something interesting...

**Mike Eastham:** Yeah... I mean, sometimes model training systems can even latch onto little quirks of behavior you wouldn't really think about when you're doing this translation... But even if there's some edge cases where certain numerical libraries they're using, or something behaved differently, it can really cause a lot of problems that are quite difficult to find.

**Natalie Pistunovich:** Yeah.

**Break:** \[00:21:16.12\]

**Natalie Pistunovich:** So we asked you to define some things, Mike, and I guess we've covered a little bit what was your definition of MLOps, but maybe you can say that for us, how do you see this, and how do you see this different from the devops and the infrastructure as a thing. You mentioned, for example, how many lifecycles...

**Mike Eastham:** Yeah. From my perspective, the most significant difference is that with devops generally you're talking about deploying servers, or some other programs into production... You've kind of got this pipeline that's going from some code in your Git repository or wherever it is, and then you're compiling it, so these artifacts that end up in production. And of course, there's some steps there to make sure maybe you're doing canary deployments to make sure you're not breaking things, and you're testing, and making sure everything works reliably... But the actual transformation of the code to the server is actually pretty straightforward and fast.

\[00:24:04.07\] With MLOps, it's really kind of an extension of the same thing, it's just that that process of transforming the raw data into the final product, which is like a model in this case, is really quite a lot more complex. So it takes longer, either because there's manual steps that are involved, or because some of these training systems actually take a significant amount of computational power and time to produce the results.

You've got different kind of disciplines involved, with different stages of that pipeline... There's data scientists, data engineers, so multiple different stakeholders and people that are concerned with that pipeline. So really, there's a lot more complex pieces involved, is the main difference that I see.

In addition to taking longer, it's also -- with a traditional continuous deployment pipeline it pretty much only goes one way. So you have the code, you produce the server, you deploy it, and then that's kind of it. But with MLOps, you always continuously have this loop back, because you're producing more data from the system that has the model deployed, which kind of gets fed back into the beginning of this process, to become more training data for the model, which we'll then deploy later. So you kind of have this circular nature that makes it a little bit interesting as well.

So yeah, I think that's really the biggest difference... I think a couple other things are -- I mentioned this a little bit already, but you really have a lot of different kind of skills and roles involved with most ML systems than you do with a typical software system... So you have people that are just straight up software engineers, they're data engineers, and then there are people who are data scientists, who are technical, but they understand things more on like statistics, and math, and they have certain software tools that they wanna use, like Pandas, SQL, but don't necessarily understand the whole -- I think a lot of data scientists wouldn't be super-happy if you asked them to set up microservices by themselves, and things like that.

So I think you kind of have to spend more time thinking about the different roles that are involved in making this system operate well, and make sure that you can kind of accommodate what they wanna do at different stages in the pipeline.

**Natalie Pistunovich:** There's two names for this, right? There's MLOps and there's AIOps.

**Johnny Boursiquot:** Ooh...

**Natalie Pistunovich:** \[laughs\]

**Johnny Boursiquot:** I wanna say, it sounds like we're splitting hairs, but I don't know enough to know for sure... \[laughs\]

**Natalie Pistunovich:** So I did a tiny bit of research on Google trends, and things like this... AIOps is more common in the Americas; MLOps is more common in Europe and Asia.

**Johnny Boursiquot:** But they really mean the same thing?

**Natalie Pistunovich:** It kind of means the same thing. I mean, of course, you can go into splitting hairs, but this is kind of practically interchangeable.

**Johnny Boursiquot:** Right.

**Natalie Pistunovich:** I was also curious if you write that as one word, or two words.

**Mike Eastham:** Well, I typically use MLOps, actually...

**Natalie Pistunovich:** As one words, and you're based in the U.S.

**Mike Eastham:** Yeah.

**Natalie Pistunovich:** You're breaking the statistics.

**Mike Eastham:** But I usually do like a capital M, capital L, capital O, and then the rest lower-case. I don't know what the specifics are on that, but I think some people do it all-caps, and there's a bit of a disagreement there.

**Johnny Boursiquot:** Any other way, then it's just Emlops... \[laughter\] Or mlops.

**Mike Eastham:** Yeah, it could be confusing.

**Johnny Boursiquot:** "What is this mlops thing I keep seeing everywhere?" \[laughs\] "Is that a new product?"

**Natalie Pistunovich:** I'm happy to say that very few people actually write with a space, but I guess that kind of makes sense, because you already write devops as one word, so it kind of continues that one. But if anybody was curious about that, here's all the information you need, and the terminology.

**Johnny Boursiquot:** I will say, I am curious where Go fits into this wonderful world of mlops. \[laughs\]

**Mike Eastham:** \[00:27:58.21\] Yeah, great question. So I can kind of give you some perspective on how we're using it at my company, and then maybe a little bit on how I think it's going in the outside ecosystem... Although I'm obviously more familiar with what we're doing.

So I've mentioned before we have this online surveying interface for the system where low-latency is one of the big requirements... And so that's primarily where we're applying Go at Tecton.

So we have basically a server that we deploy for every customer, that is taking in online requests for feature values, and we basically have a bit of a hybrid between pre-materializing the data and then -- so we have some of it prematerialized, but we do some kind of final aggregation steps at serving time, and estimate incremental updates easier when people need frequently-updated values.

So we basically have a bunch of prematerialized data if we get this request coming in, and we do final aggregations, and then return that result to the user. So it's a pretty straightforward thing it's doing, but latency is really important, both keeping it low and then also keeping it consistent, because typically, people are concerned with how their tail latency is looking... So you wanna make sure that you control that and keep everything pretty consistent. So that's where we've deployed Go.

The reason we chose Go for this use case - for me, the biggest thing came down to the tools that Go gives you, kind of during performance tuning, and being able to dig into performance problems; things like the built-in tracing and profiling we've used really extensively, in order to meet our performance targets for this component. I think it's worked out really great for us.

**Natalie Pistunovich:** Was Go the first choice for this, or did you start with something and switched?

**Mike Eastham:** Go was the first thing we used for this component, yeah. I'm trying to remember, it's been a while now... I don't think we super-seriously considered other options. We kind of by necessity have a large part of the system written in Python, because our SDK that we give to data scientists - they're kind of expecting Python there. I mean, we probably briefly considered it, but I don't think it would have worked with the performance requirements we have.

Interestingly, we actually do have a Python interpreter embedded in this Go server. We allow people to do -- we call them on-demand transformations. They're able to put in transformations that run basically during serving time, and you might wanna use that functionality, for instance, to compute a feature which is like a combination of something in the user's history, but also a query that they're making, that you're actively making a prediction for.

So you might wanna have a feature which is like -- a silly example would be what the difference in the length of the query and the last query was, or something like that. And you would do that inside the Python interpreter on the feature server. So it is a little bit of a hybrid, but 95% of it is all written in Go.

**Johnny Boursiquot:** Now you have me curious about this thing you've embedded inside of the -- so this is not like you're getting a raw Python string literal and then you're shelling out to some Python runtime, and then getting results back. This is like you're actually interpreting the Python code and translating that into what you need to then do.

**Mike Eastham:** So we are running a full Python interpreter; we're not translating the Python into some --

**Johnny Boursiquot:** Okay.

**Mike Eastham:** Yeah, that would be pretty cool, but we're not doing that.

**Johnny Boursiquot:** I'm like, "You need to open-source that thing." \[laughs\]

**Mike Eastham:** I have actually kind of looked into this. There are projects floating around that will let you basically compile Python down to LVM bytecode or something, and then you could potentially link that into a Go binary. We haven't really seriously investigated that.

Most of these transformations are doing quite simple things, they're not super performance-intensive, so we haven't really seen a need... But it's something we could look at doing, potentially.

**Johnny Boursiquot:** \[00:32:10.05\] So this was done really to solve not really a technical problem, but more of a meeting your internal users, where they are, kind of thing... Because if Python is what they know and that's their tool, that's the thing that they know best, supporting that to some degree was sort of the goal; not really because it couldn't have been done in Go, right?

**Mike Eastham:** Yeah, that was definitely the main thing, that our customers writing these are primarily familiar with Python. There's also a bit of a nice thing technically with Python, in that you can just take the function definition as a string and just send it to the server, so you don't have to worry about linking it into the binary and restarting the server every time there's a new configuration, basically. That's something I'm sure we could have figured out with Go, but we just haven't really had a strong need to do it.

I know there are other systems, like -- I may be misspeaking here, but I believe Airbnb has published, they have an internal feature store product where I think they... I think they have an equivalent concept where they have people write the transformations in Rust maybe, and they can make this whole thing super-fast... But I think that's kind of like an outlier case. Most of our users, when they're writing these things, are doing very simple additions or very small transformations that really only take a few hundred microseconds, generally \[unintelligible 00:33:37.10\]

**Natalie Pistunovich:** Would you say that Go is generally a good choice for machine learning ops? MLOps? Mlops?

**Johnny Boursiquot:** Mlops... \[laughs\]

**Mike Eastham:** Yeah, I think so... I think you'll find at the various layers of the MLops stack there are always gonna be these components that are pretty latency-sensitive. Across most of the customers I've talked to, generally, pretty low latency for the end-to-end system is a pretty important requirement. And I really like Go for that purpose. I mean, it's not necessarily that the language itself is somehow super-fast compared to other languages out there. In fact, we've had issues with the garbage collector that we might not have had in other languages... But really for me the tools that it gives you to identify these problems and deal with them make it a really good choice. So even if there are issues that come up, I am confident that we can solve them quickly, without spending a ton of time trying to figure out what's going on.

**Johnny Boursiquot:** And that is worth the price of admission, my friend.

**Mike Eastham:** Yeah, definitely. I would say the other thing too is that there's -- I mean, in the broader MLOps ecosystem I think a lot of people are using Kubernetes as part of the solutions that they're deploying, and I've found that just like being familiar with Go and the ecosystem is really helpful in that space, because it's pretty easy to just -- if you're confused at why something is behaving in a certain way, you can just go look at the code and figure it out. So I think that's pretty helpful too, being familiar with the ecosystem.

**Natalie Pistunovich:** You mentioned the tooling is a thing that is super-useful for you in your world as a developer, in the world of mlops. Interesting. I would really expect that you would also mention something like the speed of the language, because it is really fast.

**Mike Eastham:** It is certainly fast compared to something like Python... In my previous life as a software engineer at Google we were mostly using C++, so compared to that, it's not intrinsically faster. For me, I guess, given my background, I just look at the tooling and the ease of making everything work as the main advantage. But I guess if you're coming the other way, from having written a lot of Python, it would probably be a different story.

**Johnny Boursiquot:** It's all relative.

**Mike Eastham:** Yeah.

**Break:** \[00:36:01.07\]

**Natalie Pistunovich:** When did you start writing Go? What got you into this?

**Mike Eastham:** Yeah, so it was at Google... I was trying to remember before I came on here... I think it was probably around 2015 was the first time... And it was not the primary thing I did there; like I said, it was mostly C++, but I worked a lot on the basically experiments system for web search at Google, and a big piece of that was that all of the different frontends that were serving a Google search would be basically creating kind of structured application logs of everybody's interactions constantly... And they would all get crunched down into a bunch of business metrics every day. And those metrics were what drove all the experiments that were going on at Google, basically. There'd be like thousands of these experiments running at a time. And the whole pipeline for crunching all of those logs down into metrics was at the time I was involved with it written in Go. And it still is. Before that, it had been all written in this domain-specific language called Sawzall, which was actually created by Rob Pike. So there's a bit of a connection to Go there as well.

But yeah, at the time I was working on it everything was in Go. That system had -- there were a bunch of different teams at Google that would contribute their own metric to it. So the image search team would have metrics having to do with images, there would be some that were common across all the different search properties, but basically there were a ton of people contributing these metrics. There was a library for creating them, and I spent some time working on that library, because we were changing how things were logged in search frontends, and so we had to make sure that we weren't breaking people's metrics when we were doing that. So that's how I got involved writing Go, basically... It was trying to not break people that were downstream of the changes I was making.

**Natalie Pistunovich:** And that's also, would you say, the main language for you now, right? Some Python, but mostly this.

**Mike Eastham:** Yeah, we've got definitely a mix. All of our online serving stuff is written in Go; there's the Python for the customer-facing stuff... And then just for variety we have \[unintelligible 00:39:32.16\] that's involved in some of the more management and orchestration systems that are kind of off to the side.

**Natalie Pistunovich:** And feast is the open source project, right?

**Mike Eastham:** Yes.

**Natalie Pistunovich:** And it has some Go.

**Mike Eastham:** It has some Go. And frankly, I'm less familiar with the exact composition of everything on the Feast side... They're a lot more Python-focused, because they basically run a lot more of the feature store system inside the client, whereas Tecton's architected with more things living on the backend... But they do have some Go mixed in there as well.

**Natalie Pistunovich:** \[00:40:12.27\] Okay. So anybody who's listening and wants to dive into this a little bit by contributing code, can do this in the repo of Feast.

**Mike Eastham:** Yeah. Feast is a good place to start.

**Natalie Pistunovich:** I love the way \[unintelligible 00:40:24.27\] the documentation, I have to say, of Feast. It's a great job at that.

**Mike Eastham:** Yeah, they've done a really good job with all that stuff.

**Natalie Pistunovich:** Cool. Okay, and Johnny, as we laughed earlier, quickly skimming through everything, and now he's becoming the expert... \[laughs\]

**Johnny Boursiquot:** Ingesting data, yeah. Next week interview me on mlops. I'll have all the answers. \[laughter\]

**Natalie Pistunovich:** But then I will include the question on the difference from mlops to aiops. \[laughter\]

**Johnny Boursiquot:** Right...

**Natalie Pistunovich:** Then I guess comes the fun part... Unless, Johnny, you want to ask anything before we start talking about the unpopular parts.

**Johnny Boursiquot:** Let's get to the unpopular stuff.

**Natalie Pistunovich:** Alright.

**Jingle:** \[00:41:07.00\] to \[00:41:22.14\]

**Natalie Pistunovich:** I don't know if I'm supposed to say this, and I'm sorry if not, but the performer of this wonderful song has a birthday today. Finally turning 18. So if you see Mat on Twitter... \[laughs\] Wish him a happy birthday. But only if you're listening to the live recording. Actually, you know what - even if you're listening afterwards, just say hi to Mat. You don't need to say happy birthday. Just say "Hey, Mat."

**Johnny Boursiquot:** He's finally an adult.

**Natalie Pistunovich:** \[laughs\] Maybe he'll grow up.

**Johnny Boursiquot:** Maybe he'll grow up. \[laughs\] That's an unpopular opinion, I guess. Mat, we love you very much. It's all in good vibes. Mike, do you have an unpopular opinion for us?

**Mike Eastham:** Yes, I have an unpopular opinion. It's not tech-related, which I hope is okay, but...

**Johnny Boursiquot:** It's all good.

**Natalie Pistunovich:** That's not popular.

**Mike Eastham:** I really just don't like maple syrup, is my unpopular opinion. Even on pancakes, on waffles - I just don't do it. That's my opinion.

**Johnny Boursiquot:** Okay...

**Natalie Pistunovich:** Johnny, I saw a tweet from you from the weekend that you were making pancakes.

**Johnny Boursiquot:** Yeah, yeah. You know, I have young kids, and they love themselves a pancake, especially the syrup, so... \[laughs\]

**Mike Eastham:** It seems almost universal... Just not for me.

**Natalie Pistunovich:** What don't you like about it, Mike?

**Mike Eastham:** How sticky it is is a big part of it.

**Natalie Pistunovich:** Is it more or less sticky than honey?

**Mike Eastham:** Somehow it feels more to me... I don't know if that's chemically accurate, but that's my perception anyway. And we've got a lot of Canadians working at Tecton actually; in fact, the CEO is Canadian, so... I hope if they hear this I don't get ostracized.

**Johnny Boursiquot:** \[laughs\] They'll be like, "Oh, you don't like syrup, huh?" Well, there you have it. Unpopular opinion.

**Natalie Pistunovich:** Yeah. I think the most funny opinions we have is in the context of food, so... Great choice for an unpopular opinion. There will be a Twitter survey; we will see how unpopular is your unpopular opinion. You might get into the top five, or \[unintelligible 00:43:21.19\]

**Mike Eastham:** Are you supposed to have the most people disagree with you?

**Johnny Boursiquot:** I mean, it's a goal... We all have life goals, so why not this one?

**Mike Eastham:** Okay. Hopefully I do well then.

**Johnny Boursiquot:** Mm-hm.

**Natalie Pistunovich:** Cool. Alright, well that was a very interesting conversation, and I think it's a rather new field, at least in our context of gophers, this mlops in general, but also feature stores in specific... And we will be providing links for you to learn if you wanna dive into that, or if you wanna contribute code to Feast. And we also want to say thank you to Mike for joining us and for teaching us so many interesting things.

**Johnny Boursiquot:** Indeed.

**Mike Eastham:** Thank you for having me.

**Natalie Pistunovich:** Thanks, everyone.

**Johnny Boursiquot:** Alright, y'all.
