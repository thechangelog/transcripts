**Daniel Whitenack:** Welcome to Practical AI. This is Daniel Whitenack. I am a data scientist with SIL International, and I'm here with my co-host Chris Benson, who's the chief AI strategist at Lockheed Martin. How are you doing, Chris?

**Chris Benson:** Doing great, Daniel. How's it going today?

**Daniel Whitenack:** It's going great. We finally got a break in the heatwave that's been all over the U.S. here. I know you're a little bit further South than me, but I stepped out yesterday and I almost thought I needed a jacket, because the difference in temperature was so drastic.

**Chris Benson:** I haven't gotten the benefit of the cold weather down here. I'm in Atlanta, so it's still quite toasty and humid here. Last week I was up in Boston, the whole week, and I was really counting on nice, cool Boston weather, and it just didn't happen. It was only about 5 degrees cooler up there than it was down here, so it was sad.

**Daniel Whitenack:** Yeah. Well, I have a bit of a story... My first job as a data scientist was with a startup, and at the time everybody was into microservices, and all of this stuff... We started talking about microservices, I learned what those were, but they kept saying things like Redis this, and Redis that, and "We're gonna use Redis for this, and Redis for that...", and eventually I learned that Redis is this cool data thing that can be used for message passing, and data caching, and data store, and all this stuff... And recently I saw that Redis released this project called RedisAI. So that's gonna be the topic of today's conversation. We're joined by Peter Cailliau, who's a senior product manager at Redis Labs. Welcome, Peter.

**Pieter Cailliau:** Hi, guys.

**Daniel Whitenack:** Peter, could you just give us a little bit of a background about how you got into software, and how you ended up at Redis?

**Pieter Cailliau:** Well, it's quite a long story, but I'll try to keep it short... Effectively, as a kid I was into astronomy, and I wanted to always kind of like motorize my telescope, so it could effectively follow the turning of the sky, so to have low-exposure photos.

**Daniel Whitenack:** That sounds awesome.

**Pieter Cailliau:** \[00:04:04.14\] Yeah, that brought me into electro-mechanical engineering, and then afterwards computer science. My first job was at TomTom; sometimes in the U.S. they say TomTom, so it depends a bit, but... I was working on a portal navigation device; I was working on the map back-end in Belgium, in Ghent. Map quality assurance is a difficult problem, so TomTom tries to differentiate in how good the quality is of these maps, and they have many rules... One of those rules is a very expensive rule - is the map still connected? Can you still travel from everywhere to everywhere?

You could imagine for example you have a continent, you have an island, there is a bridge in-between, and the map arrow says this bridge is now one-way traffic. So in the morning you go to the island and in the evening you wanna go back, but your device says "No, sorry. Can't do."

**Daniel Whitenack:** That would be a problem.

**Pieter Cailliau:** That would be a problem. So for that, effectively we were using a graph database. We were effectively using Neo4j. So I rolled into the NoSQL database world, because I joined Neo4j, and worked there for 3,5 years. Afterwards I joined Redis, first as a solutions architect; then afterwards they said "Hey, one of these modules here is graph-related", and I joined effectively the product management team to initially first support the Redis graph module, but now I have seven of these modules under my supervision/umbrella.

**Daniel Whitenack:** Oh wow, that's great. How many in total? What is the ecosystem of modules around Redis? I imagine there's quite a few.

**Pieter Cailliau:** There is quite a few. I don't know exactly, but I think we have 20-25 open source modules. Maybe it's good for the audience that I introduce what these modules are, and effectively introduce what Redis is, because that will make the story nicer.

**Chris Benson:** Yeah, that's no problem.

**Pieter Cailliau:** Redis is a key-value store; it's an in-memory database, it's a NoSQL database. The most typical in-memory database that most people know is Memcached, and in Memcached the value is always a string. In Redis however you can have different data types. It can be either a string, but it could also be a numeric value, a list \[unintelligible 00:06:14.09\] a hash... So you have many data types. You can effectively this as memory-as-a-service. So if you're coding, you could say, "Okay, I have this data structure that is residing in a distributed database."

**Daniel Whitenack:** So could you just give an idea -- you've kind of called our Redis as this key-value store, and a NoSQL database, and you also mentioned graph databases... Could you just kind of generally describe how the NoSQL databases are separate from what people might have in mind that they execute select statements on?

**Pieter Cailliau:** It's sometimes confusing, right? NoSQL stands for "not only SQL". We're living in the -- some buzzwords, right? There is "big data", so there's much more data coming at us...

**Daniel Whitenack:** Yeah, we have a podcast about AI, so we totally get the buzzwords... \[laughter\]

**Chris Benson:** Nothing but buzzwords.

**Pieter Cailliau:** Yeah... So databases have to consume or to ingest high volumes of data, and there are some performance issues. It's not the entire picture, but what people did is they created databases and they threw away everything that was reducing the performance, or slowing down the performance of your database. NoSQL databases typically have -- well, they also have a different paradigm, but they also have less strict authentication; quite frequently they're schemaless, so you could also fit \[unintelligible 00:07:44.15\] data inside.

And in that NoSQL section of databases you have quite a lot of database models. There's the key-value store, but there's also graph; you could see search also as a database model. There's a time series, which is effectively ramping up lately, which is a lower database model, for which we also (by the way) have a very interesting module... I don't know if you want me to explain further, but I can talk more about NoSQL databases or how they came to life.

**Daniel Whitenack:** \[00:08:14.19\] That was really helpful for me. I know that if we kind of zero down in on the key-value stores... So you mentioned one key distinguishing feature of Redis is that the values don't have to just be strings. You gave some other examples of things that they could be; I forget what those were.

**Pieter Cailliau:** For example there's a list. It's a list data type. It's interesting, sometimes when I give a talk I ask people... For example, let's do the exercise - you have two sets of items, and inside Redis they will reside as a set. For example, imagine you have two products and they have a set of tags. Now, what could you do with these two sets? Which questions could you ask the database, with two sets? Maybe I should hint...

**Daniel Whitenack:** Overlapping entries, or something like that?

**Pieter Cailliau:** Correct, so you could do an intersection, you could do union... This is kind of like what Redis is. All the methods you could do in your programming language - they have commands that you could execute against Redis.

**Daniel Whitenack:** Okay. So you could have a bunch of values as list and execute some command or in some Redis client or something to get the intersection of those values.

**Pieter Cailliau:** Correct. In a list you could get the first element, you could get the last element, you query a range, or get the exact element, you could also pop an element... But in a set, you could ask for example, in a very efficient way, "Does this element belong, or is it present in your set?" etc.

**Chris Benson:** What are some of the most typical ways that Redis users are using Redis? What's a couple of really common use cases that people are most likely to do?

**Pieter Cailliau:** It's very broad. It's a general purpose database, you could use it for anything. The most common thing people are using Redis for currently is for session caching. \[unintelligible 00:10:23.12\] you keep track of in sessions. Also for caching... But there are also many things you could use as a queue. Originally there was the list data type, that you could effectively distribute messages with. Working on this list, on retrieving the first element, or the last element... But nowadays we also have a streams data type; we'll call it Kafka-esque, so it has similar capabilities. You can use it as a topic or as a queue... In a queue, you could have for example a consumer group, and each message will only be consumed by a single consumer. But if you use it as a stream, you could for example say "I wanna start reading the stream from here", or "I just wanna catch up from the end of the stream" etc. So it's also for that. With that specific data type you could effectively do a message broker, or event sourcing use cases.

**Chris Benson:** Gotcha, okay.

**Pieter Cailliau:** But there are many more. People sometimes use it to do \[unintelligible 00:11:31.23\]

**Daniel Whitenack:** You've also alluded to the fact that at least some of these modules of Redis are open source. Redis as a company - I know there are some things that are open, or open(ish)... How does the company operate? Redis itself - can you find it on GitHub? And what's the model around Redis?

**Pieter Cailliau:** \[00:12:00.21\] That's a good question. Redis itself is entirely open source. It's a BSD license. You can take it, you can fork it, you can resell it, you can do whatever you want with it. Then there is a piece where we have these modules; these modules have a Redis source-available license. The idea is that you can effectively do anything with these modules, apart from creating a database as a service with these modules.

**Chris Benson:** Gotcha.

**Pieter Cailliau:** You can embed it inside your products... Effectively, it's a bit of a strategic way to compete to cloud providers, just simply taking all the open source products and then effectively offering them as a service

The last part is our Redis Enterprise part, which is a closed source part. It doesn't have any data or engineering-specific capabilities; however, it has lots of enterprise features that your company might be interested in, or is most likely interested in. There's easy to scale your database, there's -- in fact, it's an entire database management system. The way I sometimes position this is that "Do you want to become an expert in building your application, or do you want to become an expert in deploying Redis?"

**Chris Benson:** Yeah. That makes sense.

**Pieter Cailliau:** If you don't wanna do the second one, then we've got an enterprise solution for that.

**Chris Benson:** Could you give us some examples of some of the modules that you have available? I'm curious about what the scope of those are.

**Pieter Cailliau:** The story effectively is -- so we have all these data types, and the original core contributor or creator of Redis, Salvatore Sanfilippo. He was receiving lots of requests that said "Oh, you don't have this data type. How about this data type?" So he created an API so you could effectively create your own data structures and your own commands against those data structures.

The commands were, for example, "Do the intersection between two sets", and the sets was effectively the data structure. That way he could say "Well, I'm receiving lots of requests... Now you can build your own data structures." And by creating those, you effectively inherit all the goodies from the \[unintelligible 00:14:05.06\] Redis has many things inside; it has memory management, but it also allows you to cluster your database.

One of the misconceptions that many people have, by the way, is that Redis is purely a cache -- it's effectively a database, however data lives in memory first, and then we have tunable durability. So now if you implement your data search inside the module, you can also benefit from that durability, and also have an entire spectrum of client libraries that can effectively connect to your database and reach out to those data structures in those modules.

Now, to answer your question... There are quite a lot of them, but the ones that we effectively are contributing the most to - there are seven of those. The most mature one is most likely going to be RediSearch. It's an inverted index. It's kind of like Apache Lucene. For those who don't know, Apache Lucene is effectively the core building blocks of Elasticsearch and Solr technologies. We've built our own inverted index. It's written in C. We serve the entire data or the index from within \[unintelligible 00:15:14.23\] and also the index is instantly reflected. So we do have some advantages there; we don't have feature parity, of course, to these products that have been around for decades, I think... However, we get a very high performance in that search.

Then there is RedisGraph, which adds graph capabilities. I know all these modules, so I can talk for hours about them... But RedisGraph itself is a very interesting technology. I always try to differentiate graph native technologies and graph technologies. You can put a graph API on top of a relational database, however it will be quite slow; you make one table which is nodes, another table which is relationships, but when you have to do a traversal search, for example - a Dijkstra algorithm, which is a search algorithm - between two nodes, you have to do a join in between those tables continuously. So a graph-native database...

**Daniel Whitenack:** \[00:16:13.22\] I'm so glad you're calling this out, because I actually got burned by this very issue on a project where we were trying to implement a graph database, and I mistakenly chose a graph layer on top of MongoDB (which is another database) and it was so slow. Basically, the graph logic was really interesting and good for the project, but we got burned because of this issue that you're talking about... So thanks for explaining that.

**Pieter Cailliau:** Yeah, so the difference is then you have graph native, you have an O(1) time complexity to go from one node to another node. So instead of an \[unintelligible 00:16:50.14\] And typically, you try to keep the data as close as possible, residing in the same key, effectively.

Then you've got RedisBloom, which is a set of probabilistic data structures, like a Bloom Filter, a Cuckoo Filter, we also have a Top-K... We've got RedisJSON, which is going to take your JSON document and it's going to split it up inside a tree, so that in an atomic operation, in a large JSON document, you could for example append some data to an array, but you could increment a numeric value inside your JSON documents without having to fetch it and putting it back.

Then there is a RedisTimeSeries, which is the last one that went GA. It adds time series capabilities to Redis. It allows you to do, for example -- in the role of IoT it's very interesting; you've got lots of raw data, but you also would like to down-sample it. You could do that inside Redis already; there are many ways to do that. However, you have to write lots of client-side code. RedisTimeSeries comes with a toolbox to do aggregations over lots of samples, or to down-sample them, so you don't keep all your raw data the further you go into history.

One more interesting module before we dig potentially into RedisAI is RedisGears. It's interesting to mention, because RedisGears will be kind of like the serverless of Redis. You can do two things - you can do MapReduce type operations on top of your entire dataset, because Redis is a key-value store, so you can shard it, you can partition it... So if you want to run a query across all these shards, there was no clean solution for that. RedisGears will give that to you.

The second part is that it can also execute certain scripts based upon certain triggers or certain events. It could be for example you add something to a stream, or you change a certain key, but it could also be time-based; then you execute certain codes. This makes the entire multi-model story very beautiful. In our company, I'm the first one to say, if somebody says "Hey, multi-module/multi-model", please be cautious about that. It's not because we have multiple modules in a database that we're a multi-model database... But RedisGears kind of allows you to do that. You have for example a stream of data, you've got some name change, for example... You could say "Hey, this script is going to react upon that new piece of data." It's going to say "Hey Redis, please update the name of this person", but also "Hey, RedisGraph, make sure that graph person or that graph node is updated." So it can effectively talk to all these modules, and then it becomes very interesting.

**Daniel Whitenack:** \[00:19:46.12\] So you just mentioned this idea of multi-modules or multi-module, and the ability to run scripts, the ability to put things together... You also mentioned RedisAI, which is really what we wanna get into in the rest of this discussion. But I was wondering, in terms of background, what is the background on RedisAI in terms of why the team was motivated to create it? Was it something that users were asking for? They were like "Oh, we love Redis, but we wanna integrate this somehow with AI models." What's the back-story on that and how did it come about?

**Chris Benson:** It came effectively from three ways. The first one is that Salvatore, when he created this module API, the first module he created was Neural Redis. That was the first indication that there could be potentially a need for that. Then there was also some engineers inside Redis Labs who created a module called RedisML. They thought that they could, for example, have very specific data structures, for example for a random forest tree, for some regressions - some specific data structures for these AI modules, and effectively host them inside Redis.

Then there was also somebody who was creating RedisDL, another module which is focused on deep learning. We kind of combined these efforts and we created one model module, which is called RedisAI. That's how it came to life... But explaining the need is also quite important.

There are two things we believe - there is data locality, and then there's effectively the dev ops parts of publishing your model. The publishing of your model is always straightforward, it's always convenient; you can, for example, have your model, you wrap it inside the Flask application. But then you have to scale it yourself, you have to add all these things manually. With Redis, we effectively have all these things already; we can scale it, so you can cluster your database. We have all these clients already that can connect to it. We already have high availability, we have effectively also durability; so if your Flask application goes down and there's no high availability, then your model serving would no longer be available. So all the goodies that Redis brings as a database you suddenly also get for free if you would add RedisAI, or some of these models to Redis.

The second part that we believe is data locality. For that, maybe it's interesting to give a model, or to tell a story, for example. You have a chatbot application. This chatbot application has a certain model, so it takes in two tensors, or takes in two input parameters. The first one is your latest message that the chatbot received, but also the second one is the intermediate state - the intermediate state of the past or the history of that conversation. Combined with that, it produces an output, and the output is the response, but it's also a new intermediate state, a new history of your conversation. Now, you wanna keep that as close as possible to that model; you don't wanna go and fetch it from another database, then bring it to your own Flask wrapper where you tried to deployed your model at similar data fetching.

For sure, that data you wanna fetch becomes large, there will be some latency, and what we believe in at Redis is that everything should be extremely fast, because there's demand for high throughput databases or high throughput requests, at very low latency. Everything needs to be more and more snappy. By actually creating these data structures or by creating RedisAI we could now run your inference where your data lives... Because people sometimes also have, for example, some extra input data, get a user profile and feed it to your model to do a better inference or classification. So now that data doesn't need to be fetched from another host or from another database. It's already there. It can live within Redis, next to the model.

**Chris Benson:** \[00:24:11.24\] As you talk about the chatbot example, where is the tensor serving, where you're executing deep learning models? How does that fit into this? Can you kind of give the context to that, so that we can map it together?

**Pieter Cailliau:** There are three data structures inside RedisAI that we add. There is a tensor, there's a script, and there's a model. So the value (key-value store) now can be a tensor. You can host your tensors inside Redis. Is that answering your question?

**Chris Benson:** I think so. I just wanted to break it down in the sense of -- with the chatbot, walking through how you're using the module, how RedisAI is fitting into that example. So if you were coming into it for the first time as a user that was wanting to use this, just kind of taking that as a contextual example about how I might do that. If I sit down after our conversation and try to do it, can you just kind of describe it, end-to-end, in terms of how that happens?

**Pieter Cailliau:** Right. So your training part is still going to be the same. But once you've trained your model and you're sure that it's the right fit, you can effectively import it inside RedisAI. We're building quite some tooling around it to make it more easy, so that you can do it, for example, directly from scikit-learn. There's already a connector for that. We also have a connector, for example, from Spark. So you take your model and you can put it inside Redis.

The next thing is if you wanna build an application, you will have some client library that is going to connect to Redis. From that client library you could post effectively your tensor inside Redis. You could say "Hey, here's my new message." There's also the input tensor of the intermediate state... And then effectively you run that model. It's another command that you can run from the client-side, the client library application side, to do your inference.

**Daniel Whitenack:** Yeah. I have a theory going in my mind, and I wanna kind of check it. You've mentioned the three data structures - you've got the tensor, the graph or the model, and then the script. So would it be true that you could kind of have tensors stored in Redis, and these might be like test examples, or maybe these are knowledge-based articles if you're answering questions out of a knowledge base, or maybe it's some images or something... And you could execute certain of the scripts, of the script data structures on those tensors to maybe do pre-processing or something, and combine them in interesting ways before they would be passed off to maybe the graph data structure to actually perform and inference with a model? And then maybe it would go back to the scripts for post-processing, and then the results stored in a tensor data structure again. Is that kind of on the right track, or...?

**Pieter Cailliau:** That is exactly it. That's how we want it to be. So you can have these three data structures, and you can combine and mix and match them as you go. You can also use that as -- well, if you would like to run several models and combine the results, you could also use a script and run then several graphs underneath.

One more thing that is coming up is effectively you will have a command, which is a direct acyclic graph, so you can execute those commands combined. You could, for example, set a tensor, but then the output is passed to a script; the script output is then passed to a model, and then the model output is once again passed to a script, and then the output of that script could be a tensor that is persistent inside Redis. So you can pipeline those commands in a single call towards Redis. But your explanation was spot on.

**Daniel Whitenack:** \[00:27:54.16\] Awesome. A part of the reason why I have that in mind - I have a direct use case I'm thinking of in the problems I'm solving now. We have a bunch of knowledge base articles that we're doing reading comprehension on, but we're also doing a full-text search of those based on TF-IDF. So my thought is "Oh, well what if I could --", so check me on this to see if this would be a proper way to use RedisAI, but I could store the knowledge base article text as certain maybe string elements, string data structures in Redis, and then I could use maybe a script in combination with the graph that would store my TfidfVectorizer to transform those into actual tensors in the tensor data structure. Then when I would do a document search on those, maybe I could use some of the overlapping, or score generation script or something to actually do the matching. What do you think?

**Pieter Cailliau:** I think that makes perfect sense to me. This is effectively what we want to do. And it can even be more beautiful. You mentioned, for example, you would fetch your knowledge graph as a tensor - if your knowledge graph is changing over time, you could effectively host that knowledge graph inside RedisGraph. Then it's there, it's living as a database, and you can effectively let it evolve over time.

It might be, for example, that you wanna add scoring; you could say on given searches you wanna \[unintelligible 00:29:27.21\] certain notes or certain relevancies. Or you might wanna make custom queries you wanna use as an input for your graph, if you wanna make something very tailor-made. Then effectively Gears could also be including all of these things together... But your script could - not at this moment in time, but it's something we plan to do - consult RedisGraph and fetch that data for you.

**Daniel Whitenack:** Okay, so there could be routing logic that routes between all of these different scripts and the graphs, and the scripts could call the graphs, so the scripts could get data from the tensors, and all of that. Is that right?

**Pieter Cailliau:** Yes, correct. It's a bit confusing here, because we're saying graph -- well, that's why we renamed it to model inside Redis...

**Daniel Whitenack:** Oh, okay.

**Pieter Cailliau:** ...because we already had RedisGraph.

**Daniel Whitenack:** That makes sense. I'm looking at one of these figures from the RedisAI docs, and there's a graph blob section... So that makes sense. That would help with the confusing terminology, which I guess is always the hardest part of software engineering, right?

**Pieter Cailliau:** I'll take that as a note to myself, to update the documentation.

**Daniel Whitenack:** This is truly practical AI, so... Solving problems on the fly. \[laughter\]

**Break**: \[00:30:58.12\]

**Chris Benson:** It looks like RedisAI is currently supporting PyTorch via LiveTorch, and TensorFlow via LiveTensorFlow, and also Onyx runtime as back-ends. That's pretty awesome. How big of a role did Onyx play in your strategy around modules, and can you describe it a bit to our users? Even defining what Onyx is, actually.

**Pieter Cailliau:** Onyx runtime is the Microsoft back-end, or the Microsoft variant. The reason why we added it was because we wanted to combine -- we used to have RedisML; that was purely machine learning... And Onyx runtime allows you to also surf machine learning models, compared to PyTorch, for example, and TensorFlow.

**Daniel Whitenack:** So Onyx provides an intermediate between a bunch of different frameworks, right?

**Pieter Cailliau:** Yes, it does.

**Daniel Whitenack:** So am I right that you have PyTorch and TensorFlow sort of the native libraries, and then you kind of use Onyx for everything else... Is that the kind of thought process?

**Pieter Cailliau:** That is the thought process, exactly. We can use Onyx runtime as an intermediate format. Effectively, we're using it in certain ways where we, for example, wanna fetch some models from Spark - we can effectively then transform them in Onyx runtime and then upload them into our back-ends.

It's interesting to talk about these different back-ends, because the model commands on how you execute, or your regression classification - agnostic from the back-end that it's running for. So when you would set your model, when you say "Hey, here is \[unintelligible 00:33:19.16\] I want you to host or serve my model", you would have to add some back-end specific stuff.

But once you wanna run it, it doesn't know anymore which back-end is effectively underneath. Obviously, RedisAI knows, but your client doesn't need to specify "Hey, run me this, but TensorFlow." So your client library or your application developers that wanna work at your model as a data science string model, they get a fixed API, and you as a data scientist decide "Well, over time we think that our model in PyTorch is better than our model in TensorFlow" - you can just update that by setting a new model with the same key inside RedisAI, and all your client libraries will still keep on working.

**Daniel Whitenack:** Yeah, that's pretty cool. What you've just said makes sense, I'm trying to connect it practically. Let's say we take the example that I had before - I've got my vectorizer that I've created (let's say) in scikit-learn, which I can convert to Onyx format, and I create a bunch of knowledge base article entries in Redis... What would be the steps I would go through to actually get something running to where I could take all of those articles in and then vectorize them with my scikit-learn TfidfVectorizer and then save them back into Redis? What would be required for me to do? Would that be like writing some Python? Would that be some sort of custom client? What all would be involved there?

**Pieter Cailliau:** It's a good question. We do have a couple of client libraries. There's a Python client for RedisAI. There's also a conversion toolkit that we created to help you convert between these different models if that would be necessary, via Onyx runtime; we can probably share that later on, or at the end of the podcast. So from within your Python code you could effectively just publish your model inside RedisAI. You could push it directly, you could connect "Hey, here's my database. I wanna push this model." Obviously, there might be other ways that you still wanna do this; you might have some intermediate -- some versioning or exporting your model as a binary, so you could actually version it, and then you could ship it to dev ops.

\[00:36:05.01\] Clearly, there is a component missing there to make this easily, to version your model and to say "Hey, this is now the new release we wanna publish inside RedisAI." You could do it directly, you could say "Hey, here's my client, and I directly push it to Redis." Then afterwards, if you wanna run that model, you can once again use the same client, however that client can also be wrapped in any other application that wants to consume that model.

**Chris Benson:** I'm just kind of curious -- we've talked a little bit about some of these use cases... Before we move on, are there any other really typical use cases that you're seeing RedisAI being used for, that we haven't already covered?

**Pieter Cailliau:** One of the things we think is transaction classification. The reason why we think that's a very good fit is because it's a high-volume, high number of requests you wanna do, and you only have limited time to do so. So you don't wanna waste time to find all your metadata or to fetch all your metadata from user profiles that live potentially in different data sources. So I think transaction classifications, some fraud detection are the ones we think that will really benefit from that data locality and the scale we can offer with Redis.

**Daniel Whitenack:** I have a more philosophical question to ask... I would say probably - at least from my experience - there's a lot of, or maybe even most software engineers these days have at least heard or Redis, or they may even be familiar or worked with it... But maybe data scientists and AI people are less familiar with Redis. My question is -- there's a lot of people already using Redis for certain things; you've already mentioned message brokers, and other things where they have data already flowing through Redis.

Do you think that it's likely that the software engineers already using Redis will be able to bolt on AI functionality into those existing applications? Maybe they wanna introduce fraud detection in terms of their traffic going across their network, or something like that... Or are you hoping to position RedisAI more as like a general purpose model serving framework where AI or data science people, when they go out looking for the best way to serve their model, kind of RedisAI is up there with TensorFlow Serving, or whatever else it is. Do you think that there's -- I don't know, maybe it's unclear right now in terms of which direction it would go, but I was curious to hear your thoughts.

**Pieter Cailliau:** I think we would love it to be both, obviously... So I do think that we still have to build some tooling around this to make the full-fledged model serving engine, to make it very practical. And by the way, one thing I also want to mention here is that we're effectively -- not all development of RedisAI is done by Redis Labs; it's also done by TensorWorks. We're partnering with them. TensorWorks is a company that's building several tools for AI purposes. One of the things that they're building might be interesting for you guys to also look into - it's a versioning system for data. Like Git, you could branch and make PRs on top of your data you wanna serve to. It's called \[unintelligible 00:39:40.28\] and I also recommend you to look into it.

But over time, we think we will get a very nice toolkit, and RedisAI will be one of those pieces into it. Combined with TensorWorks, we'd like to make the story where we can say "Hey, we've got a complete solution for you for serving your model."

\[00:40:04.04\] On the other end of the spectrum is -- in that case, I don't know who the personas would be. For sure it's a data scientist, but also for example dev ops people that wanna have a good solution for serving those models.

On the other hand, there is potentially also data engineers and software engineers who do already have Redis as a tool in their toolbox, and with the modules they can make all these beautiful, new applications. So ways you could use RedisAI - combine them, for example, with other modules. So if you have a search application and you wanna say "Hey, I have this top 100 or top 200 results. Why don't I run them again through some model to update or to fine-tune the scoring in-between those results?" It might have a big impact on the user experience. This is just an example, but we hope in that way that we will enable many new or interesting applications will appear.

**Chris Benson:** So we're kind of already talking about what you're thinking of going forward, so I'll just go ahead and ask... What does your development roadmap look like? What future directions are you interested in taking? Obviously, there are features that you're gonna have in mind, but it sounds like -- we've really covered a lot of tooling; as part of that, are there any higher-level applications that might sit on top of Redis as part of that development roadmap?

**Pieter Cailliau:** Yes, we should definitely look into that. We're open for lots of tips and recommendations for that. We do have a road map for RedisAI itself; we do have a couple of features that we wanna add... We would like this RedisGears module to talk neatly to RedisAI. It might be interesting to "Well, yeah, you have the script, but you could also fetch data more easily, or maybe even connect to other data sources outside Redis."

There's also some batching that we want to have, so that you can run several models in one go.

One other thing that we want to add is some tooling to get some performance statistics about how well your model is running or behaving. So what is the average time...

**Chris Benson:** That'd be great.

**Pieter Cailliau:** The beauty that we hope to achieve is that -- well, there's already an entire ecosystem around Redis, so some guy somehow will have written for example some Prometheus connector, right?

**Chris Benson:** Sure.

**Pieter Cailliau:** So if you can connect that up, then you immediately get some Grafana dashboard out of the box, that could show how well your model is behaving. That is one thing. I'm sure we will have many more. There's some versioning potentially of models that we also would like to do, so we can keep track of several models or versions, so you can switch between them, or to A/B test between them. That could also be an interesting thing to look into in the future.

**Daniel Whitenack:** Awesome. As we kind of wrap up here, I was wondering if you could share maybe where -- I think on one front where people that are interested in experimenting with RedisAI, where they should go to get up and running. Then second - there's a lot of work to do, and there's a lot of tooling that's needed, integrations, all of that stuff, so maybe there's people out there that have used Redis, or not, but that would be willing to contribute... So where should they go to get plugged in? So on one front people that want to be potentially users, and then maybe people that want to contribute, as well - what's the best way for those groups to get involved and find out more?

**Pieter Cailliau:** If you just wanna get started with it, there's a Docker container... Effectively, all the info is on RedisAI.io, to quick-start. For example, there's a Docker container you can just pull up. It comes pre-loaded with all the back-ends; it comes with TensorFlow, PyTorch and Onyx runtime back-ends, and you can just get started with that.

If you would like to contribute, there's a Google Group where you can effectively -- well, all RedisAI; so if you would search for the Google Group on RedisAI, you can effectively reach out to all the developers that are working on RedisAI, and contribute there.

To get a project, feel free to open issues. We would love to receive all the feedback that you guys can give us; it would be highly appreciated. I think we actually react quite quickly to those. We would love to make RedisAI a success.

**Daniel Whitenack:** Awesome, yeah. I think that's great. Of course, we'll post all of those links that we've just mentioned on our show notes. And of course, if you're having trouble finding things or want to follow up with questions, find us on our Slack team on Changelog.com/community, or LinkedIn page. We're happy to make the connections for you, forward on links... But I thoroughly enjoyed today's conversation; I was able to nerd out a bit and think about my own problems a little bit, so I appreciate you being patient with me, Pieter, and sharing so much great information.

**Pieter Cailliau:** You're welcome. I really enjoyed it, too. It was an honor for me to be here, so thank you for asking me.
