**Jerod Santo:** Alright, I'm here with José Valim. Welcome back to the show, José.

**José Valim:** Thanks for having me once again.

**Jerod Santo:** Always a pleasure, always ready to see what you have been up to. So it's been a couple of years since you were on the pod. Last time we were talking about bringing machine learning things into the Elixir world. Of course, Elixir is API-complete, it's somewhat complete... I'm sure there's still advancements going on, but your focus has changed to the world of Nx, and now Livebook... And it seems like Livebook of all things has really taken your primary focus. Is that fair, or you're also working on other stuff?

**José Valim:** I think it's half Livebook, half Numerical Elixir Nx.

**Jerod Santo:** Okay. And then of course they play in the same pool, right? these things are related.

**José Valim:** Yeah. Definitely. So we started this idea of Numerical Elixir to make Elixir good for numerical computing, machine learning, AI... And then we were "Well, if we're going to work on this--" obviously using the Python community as a reference, we were "Well, maybe we should have a code notebook platform as well." And Elixir is known for doing web stuff, so we were like "Well, maybe we can try different things, different ideas and build this code notebook platform." So kind of like -- we only have Livebook because of the Numerical Elixir effort... But they go hand in hand.

For example, I think at the very end of last year, one of the big features that we announced is that we have pretrained machine learning models now in Elixir. So you can like go to Hugging Face, pick a model, and now you can run -- so we had to implement that in Elixir, and now you can run them in Elixir, on the CPU, GPU, whatever. And when we announced it, we announced it with Livebook. So what you could do is that you start Livebook, which is a code notebook, and with three clicks, you can have Stable Diffusion running on your machine, and all powered by Elixir. So a lot of the work that we're doing is -- yeah, it's side by side. We develop this feature here for machine learning, but at the same time we're thinking, "What is the best way to expose developers to this new feature, this new idea, this new library?" and we figure out how to do it together.

**Jerod Santo:** So the last time we talked two years ago - that show's called "Elixir meets machine learning", and my co-host that day was Daniel Whitenack from our Practical AI podcast... A lot has happened since then, not the least of which machine learning has kind of blown up; even Practical AI has kind of blown up. It's like a very popular show now, because they were well placed for this moment, when all of a sudden models are the thing to have. You've got your language models, you have your image models... And really, I think you were ahead of the curve, to a certain degree, or I guess maybe you were just ready for this moment as well, with Elixir well-positioned to just integrate, take advantage of these cool things, Whisper, Stable Diffusion, like you said... Do you feel validated in your decision back then to focus on this as the next thing for Elixir? Because it seems like it paid off so far.

**José Valim:** Oh, that's a very good question. It's very good, because I haven't thought about it, if I feel validated...

**Jerod Santo:** Okay.

**José Valim:** Yeah, I'm actually not sure I have an answer. I mean --

**Jerod Santo:** Because you could have spent the last two years building blockchains, José. You could have been all-in on blockchain for two years.

**José Valim:** \[laughs\] I just woke up the kids. But no, yes...

**Jerod Santo:** Sorry about that. \[laughs\]

**José Valim:** No, no, that's really good. Yeah, no, I think - yeah, putting things in perspective, you're right. I think that's pretty good. I mean, the thing that I think about the most is that I am really enjoying working on all those things... And I'm not sure; maybe somebody can correct us later, but I think Elixir was -- so when it comes to Stable Diffusion, for example, Elixir was the second high-level language to implement that; and in Elixir itself.

\[00:08:07.11\] Because everybody could say, "Hey, I'm going to shell out to Python", or "I'm going to shell out to invoke something in C", but we had the model actually implemented in Elixir. And when Whisper came out, I think we had a version like in a week running as well, which speaks really well about the abstractions we've built. And I'm still enjoying it a lot, working on Livebook and thinking about problems differently...

So from that perspective, I feel like very validated in the sense that "Hey, I'm working on things that I'm really enjoying. We have a team that I enjoy working with... But yeah, I think generally validated; if it all made sense, we would probably need like a couple years more to say "Hey, that was the absolutely right call." It doesn't feel like it was the wrong call, so you know...

**Jerod Santo:** Sure. No, I think you're well-positioned right now. And speaking of bets, just to maybe pat myself on the back and give you some more credit... I was just coding on our Elixir app today, and have been just over the last couple of weeks... And thinking, "I made this bet more than seven years ago on Elixir, and Phoenix for our platform that we run our business on." And yeah, we're a small website, with very limited scope, and all these things... But it feels pretty good to just -- and I'm still productive, I'm still enjoying it, and it's still working for us, and I still like the language... I mean, seven years is a long time to be working with one thing and not to have -- I mean, of course I get wanderlust. I kind of wonder "Well, what if we rewrote this part in this thing?" or "Maybe this was better", but all in all, José - I mean, thanks again for creating these tools, because I'm just like a happy user, seven, eight, probably a decade later - I can't see us changing anytime soon - just writing Elixir code and running our business with it. So that feels like a good bet.

**José Valim:** Yeah, that's great. Yeah, thanks for reminding me. Yeah. And there's something that is said about which -- so I'm just going into tangents here, but...

**Jerod Santo:** Sure.

**José Valim:** Well, we've done episodes together, but you said "Oh, we are small, and we just want to have those things running", and that's one of the things that I think can be interesting about machine learning in Elixir... Because I thought it would come up at some point; people probably listening are like "Why machine learning in Elixir?" And I think it's because the Erlang Virtual Machine that Elixir runs on, you can kind of -- you know, if you have to do a lot of IO work, it's going to do that well. If you have to do a lot of concurrency work, it can use all the CPUs at the same time; it allows you to say, "Hey, I want to run a machine learning model." You can actually just run that machine learning model as part of your app. You don't need to "Hey, I have this machine learning model. Now I have to pay Amazon to run it for me, or I have to figure out like this whole other service that I have to version it separately." If you want - you don't have to, but if you want, you can just run it with your servers. It's going to depend a lot on what is the use case, the application... But at the same time - because again, Erlang is distributed, you can say "Hey, I started running with my web servers, but now the load is increasing, and I want some machines with GPU." You just connect them with the distributed Erlang. So if you're running on Fly, that happens by default. And now you will say "Hey, I just want these machine learning tasks to happen on those machines with GPU", and you don't change anything in the code. You just say which part is running the machine learning model.

So I think that's one of the exciting things. And when you say "Oh, we are small", I think it's one of the appeals of just allowing people to play with those ideas, and embed within their apps. And then when trouble comes, if it comes, then you can figure out what is the next step, and you don't have to worry about all those things up front.

**Jerod Santo:** \[00:12:06.14\] Right. Well, I'm definitely watching very interestedly with regards to Whisper. Of course, we have transcripts, we are have been transcribing for years manually... And we're kind of waiting a little bit and watching and seeing how to get speaker identification going on with Whisper, which is kind of a feature that doesn't currently exist. So it's a holding pattern, but I'm ready to integrate Whisper into our little web app, and just like have this new functionality. So that's super-cool.

Maybe you can help demystify it to a certain degree, for those of us who are maybe like web developers, or are not really in the whole machine learning world, data science world... When it comes to the models, I hear Hugging Face thrown around, I've been there and downloaded things, I know we're going to talk about how you can deploy do Hugging Face some stuff now... But if I'm going to have a Stable Diffusion up in my Phoenix app, and it's going to run on Fly, when you say like "Run it in a Elixir", are you downloading the model to a local disk, and then running inference against it on the Fly side? Or are you referencing something on Hugging Face? Maybe just clear up what is I guess for me a little bit confusing.

**José Valim:** Yeah, great question. So when you build the image, if you want, you can already pre-download the model and have that --

**Jerod Santo:** As part of your image.

**José Valim:** Yeah, as part of our image.

**Jerod Santo:** I see.

**José Valim:** So when the app boots, you're going --

**Jerod Santo:** It's there.

**José Valim:** So one of the things that we do -- yeah. One of the things that we do - and you're going to download from Hugging Face one of the ways. But you could put on your S3, or anywhere else... So anyway, it has to be in disk at some point. And then you can run from your machine. That's one of the ways that you can do it right. Or if you go the other route I said, you can have some machines in your cluster that is only for running that model. And then we get that -- if you have a GPU, we load that into the GPU, and then you're good to go.

**Jerod Santo:** So let's say if you're running like a multi-node cluster of Elixir nodes, and you don't know or care where the actual inference is executed - does each one of those have a copy? Let's just use Stable Diffusion as an example. It's like four gigs, or something, right? Is each one of those nodes just have that on disk there locally, and they can just execute against it? Or how does that work? Do you have to manage that mess of like "Well, here's my inference cluster, and they have it, but my other nodes don't have to have it?" or do people not care because it's not that big of a deal?

**José Valim:** Yes, exactly. So you only need them in the clusters running inference. The other ones, they don't have to worry about it at all. They don't even need to have -- so the library that we have that has the pre-trained models, it's called BumbleBee, and you don't even need BumbleBee installed on your web nodes. You only need Nx, which is the base library for Numerical Elixir.

**Jerod Santo:** And so when we talk about Hugging Face - I'm sure some of our audience is very familiar, other ones are like "What is Hugging Face?" and "Why hasn't Jerod asked José to explain exactly what it is?" You said download from Hugging Face... This is like a repository similar to GitHub, correct? ...of machine learning models, other things... But there's also this concept of deploy to Hugging Face, which - I don't want to get too far into that, because we'll talk about it with your Livebook launch stuff... But just at a general level, if you were to describe Hugging Face to me, if I was someone who didn't know what it was, how would you describe it?

**José Valim:** Yeah, so the way I say it - and I don't know if they liked this description or not...

**Jerod Santo:** Sure.

**José Valim:** \[unintelligible 00:15:33.14\] they are the Hugging Face for machine learning. So the whole machine learning community industry, like Microsoft, Google, OpenAI - they have the models there on Hugging Face. And what is really cool about Hugging Face is that not only they have the models, but they also invest in research, and they invest in the ecosystem.

\[00:15:57.27\] So if you want to rent -- as I said, for you to run a model -- so what you do is that when you are below the... You can think a model of two things - the code that specifies the model, and the parameters of the model; that's what a model is. So you have those things together, you send -- if you're talking about Whisper, then you are going to give an audio input, you transform it a little bit, give it to the model, the model is going to give the output, which is like the transcribed audio.

And so the model has two parts. So what is stored in Hugging Face is the model's parameters, the model's weights, and then they also have this library called Hugging Face Transformers, which has the implementation of all those models, but for Python. And what we did in Elixir is that we have this version of the library, and that's why it's called BumbleBee, because Transformers, right? So it's like the BumbleBee library, which is our implementation of Elixir.

So they contribute a lot to the Python ecosystem, and they have been helping -- they have been interested in helping on the developments on the Elixir front as well. So that's one of the things - like, all the models are there, but they also allow you to run your own Docker images, which means that if you have a machine learning model that you want to run on the GPU, you can run your own - they call it the Hugging Face Spaces, where you can run your own Docker images in there, with GPU, and then you can do cool stuff on that front as well.

**Jerod Santo:** I see.

**José Valim:** And then they have a bunch of other stuff, like inference APIs... So we were talking about -- well, you can run the model in Elixir itself, which is going to have its benefits... But if you say, "Look, I actually don't want to care about it. I just want to have a service that does it for me." Hugging Face provides inference as well. So yeah, I really love Hugging Face, and a lot of people -- I say that a lot of people talk about "Oh, we are democratizing AI", right? And then it's like "Look at this model, that you need 100 GPUs to run it", and they're "Well..." You know... \[laughs\] And I feel like Hugging Face - it's like really democratizing AI. If it was not for them, for us to do some of the things that we are doing today in the Elixir community, it would probably take one or two years longer.

**Jerod Santo:** Yeah, very cool. So what layer of abstraction does Nx and BumbleBee and all these Elixir tools work with regards to these models? So there's models coming out constantly at this point, right? We talked about Stable Diffusion, there's GPT models, there's specifically Facebook's LLaMA, there's DALL-E, there's Alpaca... I mean, there's just like nouns and nouns and nouns of animal-based things that are out there... Is this a situation where every time something is released, like LLaMA, which is a large language text model, which came out of Facebook - is that something that José and his team at Dashbit hustles out and then like codes up support for it? Or is it something that just can be used by like pointing a pointer at some sort of a binary, the model itself, and then you can just use it immediately? How does that work?

**José Valim:** Yeah, excellent question. I'm going to break it into two parts. So one is like how it's architectured internally, and the other one is what is the work when there is a new model. So the way things work - and I've been saying this at this point for like two years, but you have a subset of Elixir that compiles to the GPU. And I've been saying it for two years and it still amazes me; when I say that, I'm like "That sounds very exciting." If somebody told me this 10 years ago, like "Nah, not happening. No chance."

\[00:19:52.27\] So you have a subset of Elixir that compiles to the GPU, and this subset, what it does is that it builds a graph of the computation. So what people realize is that, you know, for these large network models, one of the ways to -- if you're just executing the operations, like if you say "Look, I want to add two tensors, or multiply two tensors" - and tensors are how we are representing multi-dimensional data, right? ...which are part of the neural network. So it's like, if you want to multiply -- if you did that immediately, that could potentially... That's not the most efficient way, because imagine you're using Python, you multiply two things, and now you go back to Python, and then you do the next operation, which is a multiplication... All this back and forth would leave the GPU idle, for example.

So they realized what they want to do is that they want to build this graph, which is all the operations that you want to do in this neural network, and then you compile it to run only on the GPU or only on the CPU very efficiently. And it happens that -- so I like to say... I'm going on a tangent here, very quickly. So one of our inspirations is Google JAX, which is a library for machine learning from Google. And it's a Python library, but they have things in the library like when you're writing code in JAX, you should treat your data structures as immutable, because they want to build this graph, right? So you need to express that in Python. And then I'm like "Well, I know a language where everything is immutable by default, right?" And then when you're writing JAX, you need to approach things in a functional style. Because again, if you think about the neural network, it is input, output and computations in the middle, and they want to represent these computations to compile down to the GPU. And then I was like "Okay, this is very exciting", and that was one of the sparks that led Sean Moriarity and Jaco to start working on those ideas.

So that's how it works... So we have like a subset of Elixir that compiles to the GPU, and you can write it -- not exactly as Elixir code, but you can break things into functions... So you're writing high-level Elixir code, that we are going to compile down and optimize. And then we have a neural network library called Axon, which provides the building blocks for neural networks. Say like "Oh, there's a dense layer, there is an attention layer." All those things, they are part of the neural networks. And then BumbleBee is on top, implementing the models which is building on top of those layers. So you're talking about like three layers here, right? There's Nx, which is like a library - for those coming from Python, it's equivalent to NumPy or JAX, and then we have Axon, which is more like equivalent to PyTorch, or like TensorFlow, with the higher-level building blocks, or Keras. I think that's a better example. And then we have BumbleBee at the top.

So now you can start to have an idea, because we have different abstraction levels, when you're building -- so let's say... There is Whisper now. So two things happen. One is that models, they usually reuse parts of other models. And they are often going to reuse layers... So it's more like - yeah, we have to assemble things, but a lot of it has already been used in another model... Or if we have to do something, we already have the layers in Axon, so a lot of the work has already been done. So because of the abstractions that we have, it takes some work, but we are building on top of the existing infrastructure, and it's not like "Oh, well, we are starting from scratch every single time."

**Break**: \[00:23:43.25\]

**Jerod Santo:** Let's focus in then on Livebook. You've recently had your very first Livebook launch week, which I thought might be inspired by our friends at Supabase, and then I actually saw you reference them in one of your posts explicitly; like, their idea, you liked it. I think it's a really cool idea, especially for people who want to come on podcasts and talk, because it gives us a bunch of stuff to talk about. Like, let's launch one thing a day for five days, and then we can come on to The Changelog and talk about that, which is a lot easier than having one amorphous thing. So launch week - do you want to talk more about the idea and the inspiration, how it went for you? because it was just a week or so back, and now you're in the wake of launch week.

**José Valim:** Yeah. So right now, I'm saying \[unintelligible 00:27:26.26\] the first launch week and the last one, because the whole time you are so tired, because it's like a whole week; you have to stay like two weeks recording video... But then like four months will pass, and it'll be like "Maybe we should do another launch week." And then we do it, and then we get exhausted again...

**Jerod Santo:** It's like having a child... After you have a child, you never want to have another one again. And then six months, eight months, a couple years later, you're like "You know what? It wasn't so bad. It was worth it. Let's have another one."

**José Valim:** Yes, exactly. But we were working on a bunch of different features... And some were ready like three months ago, but we didn't announce it. We were waiting for like the next Livebook release, 0.9. And then we were preparing the Changelog, or the things we want to talk about. We're like "There's way too many things in here, and we cannot possibly-- it's way too many things." You can't talk about everything. And then highly inspired by Supabase, because their launch weeks are just fantastic. There is not a single dud in there. You're like "Oh, maybe tomorrow it's going to do that." It's like, no, they're all good, right?

**Jerod Santo:** Yeah, they do them good. Yeah.

**José Valim:** Yeah. And then I was like "Well, maybe we should try to do this launch week thing." And it's even funny, because I sent an email to Paul, the CTO or CEO from Supabase, and I said, "Hey, by the way, we are doing a launch week. Thank you, it was inspired by your marketing work, which is amazing." And then he's like "We're doing a launch week on the same week."

**Jerod Santo:** Ohh...

**José Valim:** So it coincided. Like, it was both of us doing it at the same time.

**Jerod Santo:** Co-launch.

**José Valim:** Yeah. But that was the idea. It was just like too many things to talk about, and then we said, "Yeah, let's see if we can organize this content where we can do one video a day, and get people excited."

**Jerod Santo:** Very cool. So this was a Livebook launch week. You described Livebook in a few words a moment back, but can you go back and say it again, maybe with more words? And then also why this. Why is this your area of focus today, in early '23.

**José Valim:** Yeah. So Livebook is a code notebook platform for Elixir, but it's rather, let's say -- maybe I should start reworking that, because it's a code platform, it's a data platform, and it's a machine learning platform, and it's in the notebook format. And what that means is that we have a desktop app, but when you install Livebook Desktop, you're going to run it on your machine, open up a browser page, and you can write notebooks, which is a mixture of prose, text, documentation, and code, in a summarized version. That's what is a code notebook.

\[00:30:21.15\] There are a bunch of ideas in Livebook that maybe we should explore soon, but overall, it's a code notebook and you can explore data, explore machine learning. So what I said is like "Well, you can run a machine learning model in Elixir by just clicking three buttons", because that's a workflow that we have in Livebook.

And the reason why we're working on this - as I said, when we started this whole Numerical Elixir effort, it felt like we needed to have these, but it took a life completely of its own. So for example today -- so we have Nerves. I think this is a great example. So Nerves is a framework for building embedded software, embedded systems; it runs on top of Elixir. But imagine that you say "Hey, I want to teach somebody how to use Nerves", right? Then they're like "Okay, what I can do is that we can write a small software, I can burn it to an SD card, and then run it on my Raspberry Pi, and then I go back, burn another software in the SD card, put it into device, or maybe figure out a way of doing over the wire updates", which all those things they have, but now with Livebook, for example, they have a Nerves Livebook, which is an introductory way you get people into embedded programming, where you just start a Livebook, you start exploring ideas, you connect to the Wi-Fi, connect to Bluetooth, you make some lights blink... And it's all running Livebook, which originally started thinking about AI, but it's a development environment. And it's a really good development environment, if I have to be honest. You get all the features that you would expect from an IDE, like code completion... We have built-in dependency management, in-line docs... So it's a really nice environment to program and work with.

**José Valim:** So last time we talked, this thing was brand new. I mean, you had just kind of conceived it and launched like a 0.1. And I haven't looked at it since, José, until I watched your launch week video. And I'm over here thinking, "Ah, I don't really have any uses for something like this." And then I'm watching you use it, I'm like "Oh, I can actually think -- I can think of ways of using something like this. This is really cool", especially for an Elixirist like me, where you have kind of the imperative, or sorry, the declarative way of setting things up, and then you can click on this little thing and it'll show you the exact code that it wrote for you in order to do that in Elixir. And it's very nicely formatted. I'm thinking "I could actually learn how to use BumbleBee and these other tools just by using this tool, and then taking that code, integrating it into my app." And to me, that's a super-cool thing.

**José Valim:** Yeah, exactly. When we were here on this show we'd just announced it, and we didn't have this feature, which is what we call Smart cells. And the idea behind it - one of the inspirations is an academic paper called Mage. But the idea is -- one of the reasons why we wanted to focus on this is because... Well, we are working on machine learning for Elixir, right? But the amount of Elixir developers who know machine learning for everyone to be like -- you know, there are dozens of us, right? When we started, there were very few. And we also have machine learning engineers, developers, but they don't know Elixir. So if you get a Venn diagram of those communities, it's going to be --

**Jerod Santo:** Yeah, it's a small niche.

**José Valim:** Yes. So we're thinking, we need to find a way that we can make machine learning developers who know their stuff, but they don't know how to write Elixir, how to get them started, and we need to help the Elixir developers as well. So the whole idea of Smart cells is that -- I say it like it's a metaprogramming UI. So what you have is that you have a UI where you can say, "Look, I want to run this model", I think more accessible. It's like "Hey, I want you to connect to a database", for example; have a Smart cell for database connection. And all programming languages, they have libraries for connecting to the database.

**Jerod Santo:** \[00:34:13.10\] Sure.

**José Valim:** You have to go check out the documentation, learn how to use it, figure out the exact parameters that you have to pass, \[unintelligible 00:34:18.29\] password, yadda-yadda-yadda, right? And now with Livebook we have then these database connection Smart cell, so when you click it, it's going to appear, "Hey, which database you want to use? What is your password? What is your username?" and then you fill that in, and then it can execute the Smart cell, and it's going to give me a database connection in a variable that I can run queries against it, right?

So in a way, it starts looking like low-code or no-code tools, and those tools - they have an issue, which is "But wait... Maybe I am connecting to a database that requires me to pass a special SSL certificate, that I did not add in my UI." And then it's like your tool completely falls apart, because we did not consider that particular use case.

So the insight with Smart cells is that all they do is that they execute code, and you can see this code. The Smart cell cannot interact with our environment in any way; it can only say, "Hey, execute this code." And the code that it executes, you can see it at any moment, and you can say, "Hey, I want you to convert these two to an actual code that I can edit." Which means that now if I have this specific use case, you can just do that. Or as I said, I started with a model, a machine learning model, and I want to run that inside my Phoenix application. The code is there; you bring it, you put it in your app, and I even have a video showing how to do that in a Phoenix application...

**Jerod Santo:** Yeah.

**José Valim:** ...and then you ship it to production. So the idea is exactly, you know, how can we have the best of both worlds? I still have the UI for a learning perspective, or just to be productive, but that does not limit me in any way. I even have like a whole separate rant of like how low-code should not be -- at least for Livebook it should not be called low-code. Because if somebody gives you a task, it doesn't matter if you achieved it visually, right? It doesn't matter if you use a UI to write the code for you, or if you write it by hand. As long as you deliver the task you're supposed to do, you're good, right? So I'm like "It's just code." It's not low-code, it's just code. It doesn't matter how you write it, it's code.

**Jerod Santo:** Yeah. I think that's super-powerful, especially once we get to your Explorer tool that's part of launch week... Because I'm looking at that thing - and a lot of stuff that we do as working developers is like, you know, download this CSV file, or grab this thing of JSON, and then I'm in my terminal, and I'm writing a little bit of code, I run a mix task, and I'm looping through, and I'm like "Alright, I'm gonna print like the third field of this thing, but I'm gonna skip these lists." And then I'm just console-logging, or whatever... And I run it, and I log it, and then I'm like "Okay..." Then I tweak it, and then I log it, and I look at -- you know what I'm saying? This is kind of what we do at time, just to figure out maybe the format of what I actually need to code. And then I throw that all away, and I just write the code that works. And with this tool, which - I'll just tease it up now, and we'll return to it later... With his Explorer tool - I mean, you're really doing that with a very rich user interface, and able to filter, and do all these things that you would in a GUI tool, and then - there's the code right there. Just copy-paste it into what you're up to, or throw it away if you don't need it... And that's spectacular.

Let's go meta for a second. So these live cells - how are they implemented? Is this a very complicated React Component? Like actually in Livebook itself, the ones that generate your code for you - is this like a mess of React Components, is it like a Phoenix Live View thing? How do you guys build the live cells inside Livebook?

**José Valim:** \[00:37:55.28\] Yeah. So the way they work is that -- so there are two ways you can make Livebook come to life. So you can think of Livebook as the web application that you are interacting with, and then you have the runtime, which is running your Elixir code.

**Jerod Santo:** Right.

**José Valim:** And your runtime actually doesn't know much about Livebook. We have this separate library called Kino, which is how it's called like -- so for example, in Poland a cinema is called Kino, and that's the idea. It's how you animate things. Right?

**Jerod Santo:** Okay.

**José Valim:** So the Kino library is what brings Livebook to life. And there are two ways of doing that. \[unintelligible 00:38:30.17\] rich output, it's an output that you can interact with it, or it's with Smart cells, and what they do is to execute code. And what they are is that they are a web page that -- so you're going to render an HTML... We render them inside an iFrame. So we have an iFrame, you render things inside like that, and it communicates with the Elixir code that is at the runtime using JavaScript. Whatever messages you want to send. So you open up a WebSocket between those two things, so you have JavaScript running on the client, and you have Elixir running on the runtime, the actual runtime, where all the code, where if you're saying "Hey, I've downloaded the CSV", so that's the Elixir runtime, and JavaScript running on the client, and you can use whatever you want there. We're just opening a page.

**Jerod Santo:** Gotcha.

**José Valim:** And what you do when you open up the page is completely up to you. Most of our Smart cells and our outputs that we provide out of the box, they have been implemented with Vue, I believe. Vue.js. But we have one that is React, because it's using a spreadsheet implementation that is a React component, and then we just use React. So it doesn't matter, it can be whatever you want. I think you should even be able if you want to plug Live View and make things work with Live View - yeah, it doesn't matter, and that's the general architecture.

**Jerod Santo:** So it's effectively each Smart cell is a is an iFrame, and inside that iFrame you can accomplish it with whatever JavaScript you want, and you guys generally use Vue, unless it calls for something else. Okay. That makes total sense. Well, it's super-cool. I just imagined -- whenever I see rich tooling like this, and me being a longtime developer, I just imagine the JavaScript that's driving these things, and I kind of -- I shiver, and then I stop thinking about it, and I'm like "Okay. Well, it works", so congratulations on that much.

**José Valim:** Yeah. One of the things that we really wanted to do is like to make it extensible. So that's the cool thing, is that our Smart cells - anybody can define them, and the outputs. So it's really extensible. So imagine that for some reason you want to have an audio splicing tool that you're using, and then you want to share it with the team; you can create your own Smart cell that interfaces with FFmpeg, or whatever, right? And then you can share it with our team. And you install it as a package. So that's really cool, because it doesn't depend only on the view of the Livebook team. Anybody can create their own outputs, their own Smart cells, put it in a package and ship with the community. And so yes, there is JavaScript, but based on the abstractions and the extensibility, it's contained to those iFrames, and everything is encapsulated in there.

**Jerod Santo:** Right. And because it's essentially a desktop app, or a workstation-based application that you're going to be using at your job, or in your work, it's totally fine to just shove as much JavaScript as you need to get the job done, because - you know, we're used to downloading large things, and I'm gonna be running local models here, we're gonna be downloading gigabytes and gigabytes of things... And so a lot of the concerns we have on typical web pages are kind of out the window, which has gotta be nice.

**José Valim:** Yeah.

**Jerod Santo:** \[00:41:53.11\] Alright, so that's how the Smart cells work. Let's hop into the Explorer, bit because we'll regroup and talk about how you can run this machine learning stuff in the cloud, and all the crazy stuff you're doing with GPUs... But I watched the Explorer video at the end, it was your last launch day thing... And this is the one where I'm like "Okay, I could use this today. How do I download Livebook and give this a try?" So I think it's gonna be a nice marketing thing for people who - maybe they've been using Curl, maybe they've been using, I don't know, Jupyter Notebooks or something, they're data scientists, or whatever, they're just mungers... We're all kind of data mungers to a certain extent... And this Explorer tool, I think, is really powerful. Do you wanna tell us about it?

**José Valim:** Yeah, so the reaction to Explorer has been very nice, because as I was saying, Supabase - they did those launch weeks, and they never have a dud. And I honestly thought that the Explorer one would be the dud.

**Jerod Santo:** Oh, so you saved it for last, just in case.

**José Valim:** Yeah. So I \[unintelligible 00:42:46.03\] for last, and I was like "I don't think people are going to like it that much." Maybe it's the point of just like -- and I have my theories of why people like it so much, but let me break down what it is, right?

**Jerod Santo:** Yeah, please do.

**José Valim:** So we have this tool called Explorer, which brings data frames in series to Elixir. So what are series and data frames? Series - imagine one-dimensional data. So it can be like a huge vector of strings, or numbers, whatever. And data frames - they are two-dimensional data. They are tables; think like Excel, two-dimensional, or a spreadsheet. So Chris Granger, he started working on Explorer for Elixir, tools to work with those abstractions, and it's implemented on top of a library in Rust called Polars. Because we have Pandas in Python, and then we have Polars for Rust, and it finished with \[unintelligible 00:43:41.16\] so it's a nice naming scheme in there. And it's super-fast. When we see the benchmarks on how Polars work, it's super-fast.

And Chris, when he was working on these, he really loves the API that comes from DeployR, from the R community... So it's kind of like this mixture between -- well, it's an Elixir project that has the foundation in Rust, and it's really inspired by R and DeployR. And so we have this project, it's one of the Numerical Elixir efforts, because we want to -- yes, before you put data into a machine learning model, often you have to do a lot of massaging, you have to do joins, you have to do a lot of things with that data... And this is an important project.

So we have been working on this for a while, and I said in the video that we're just starting our data journey, and maybe that's one of the reasons why I thought it would be a dud, because it's only the beginning, and I did not think people would be excited enough... And again, it was the same question - like, we have this library, Explorer. We love the API that we've designed. I really think it feels great, it feels elegant... But people don't know how to use it. So how can we teach Elixir people to use this library, Smart cells? So the way you do it with Smart cells is that you say "Hey, I have a data frame in here, so I have this information." It could have come from a CSV, whatever, "And I want to filter some columns, I want to group by", so we have a Smart cell where the UI is guiding you, you're clicking the buttons and adding all the operations that you want to perform. And as you're adding the operations, the updated table is appearing right next.

And the next thing that you could do - I didn't show this in the video, I think - is that... Well, now you have that table. As a result, you can create a Smart cell to plot a chart from that table. And from there, only with going to these Smart cells, I can now have a chart that is plotting my filter table, and going for that. Again, I'm not writing any Elixir code at all, and I'm doing all of those things. But if I want to see the code - because actually, that data processing should be part of my application, I can just get the code and bring it. And it's just the beginning of the data journey.

\[00:46:00.07\] So just kind of like a spoiler, we want to have things like -- well, we want to be able for you to drag a CSV, for example, into Livebook, and we automatically detect that and emit the code for parsing that CSV. That would be pretty cool. Right? And it could be easy, but everything that we do, we want to make extensible. So that's the challenge. Because then you can drag and drop whatever you want. Like, if you want to -- like we were saying, maybe you want to do something for audio editing; you could hook into a way where you hook into audio files, and do things specific to them.

**Jerod Santo:** Sure.

**José Valim:** So yeah, so -- and we want to do a lot of things related to data, like have chart suggestions, and improve the whole plotting story... So it's only the beginning. But it was really nice to see that people were excited about this, and about this workflow. And I think compared to machine learning... We did a bunch of machine learning features, but I feel like a lot of the machine learning still feels -- even though I think we made it real accessible, it still feels far away, because you have to think "Well, how am I going to use that machine learning model, or all those different machine learning tasks in my work?" There is still a conceptual gap that you have to do. But with data - it's exactly what you said, everybody has worked with data, everybody has had at some point to like munge data, filter data, do weird stuff with data... And I think it was a hit; it went to Hacker News Front page I think exactly because it felt like a problem that everybody has gone through at some point, or will go through, and they're like "Okay, this can be really useful."

**Jerod Santo:** Yeah. Absolutely. There's lots of tools out there that address it. VisiData is one I'm thinking of, of course... There's Simon Willison's dataset, and all of his SQLite tools, and I'm sure there's plenty of other ones... But I just think that you might have just nailed the implementation; at least what I saw - I haven't used it myself, but what I saw in the demo, it just looks like it's so easy to use, yet also malleable along the way. You can just stop it... You can take a Smart cell that like does some filtering and stuff, and you can convert it into code. Maybe you already said this, but you're talking too fast, and I missed it... You can like convert it into code and then change the code --

**José Valim:** I'm sorry.

**Jerod Santo:** No, you might have. I don't know. Sometimes you get going and I'm holding on for dear life, José ... And you can convert that into code, and then just like munge the code and save that, and now you just have like -- you've kind of forked off from what this Smart cell would generate, which I thought was super-cool just for malleability's sake. So... Happy to hear that it was successful, or that it was interesting.

**José Valim:** Yeah. I start speaking too fast when I get very excited, and I am very excited about those things, so that's why I get going, because it's like -- the excitement!! But yeah...

**Jerod Santo:** The excitement! So you mentioned CSV... What about JSON? What about just drop a SQLite file in there, and maybe it detects all your tables, and allows you to just immediately start doing stuff with the data in there? Can you do something like that?

**José Valim:** Yeah, I mean, that's what we want to do. We want to work on the abstractions to make that possible. And from there on, it can be -- because everything is extensible, it can be anything. I think there is even already kind of like a image editor Smart cell, where you can have an image and it gives you some ideas, like "Oh, I can rotate the image, crop do a couple things", and it gives you the code... And then you can think that what somebody can do is that they can further integrate that, that if somebody drags and drops a jpeg, or a png, right? ...it automatically brings this tool up.

**Jerod Santo:** Totally. And does Elixir have image manipulation tools? Are you talking about like -- so what I've done historically is like shell out to ImageMagick and then find ImageMagick's magic flags that I have to send in order to center, and gravitate, and crop, and stuff... But does Elixir have image manipulation tooling available natively?

**José Valim:** \[00:50:10.18\] We have OpenCV bindings called evasion. That's a recent fork that has happened after Numerical Elixir. I'm not sure if we have image -- oh, there's also bindings for VIPS, I believe, which is kind of a new one, compared to ImageMagick. So they are here and there. We also have a very small one, which is just about creating the images and putting them into like a tensor format, so you can further do manipulations with it. Sorry, I'm going to go on another tangent here...

**Jerod Santo:** Okay, let's hear it.

**José Valim:** Yeah, one of the cool things about Nx, and that we are building this whole graph, and compile it to the GPU, is that for example when you think about -- sure, you can use OpenCV or something for doing image manipulation, but because an image is three-dimensional data, you have like the height, you have the width, and then you have the third dimension for the RGB colors, or maybe an alpha layer... So you can represent this with a tensor, which means that you can now implement image manipulation tooling in Elixir using Elixir itself, that is going to be compiled to run on the CPU, or on the GPU. And you can embed that as part of your machine learning model if you want as well... So I think it's one of the nice things that are coming out of it. Yeah, you can use existing tools, but depending on what you want to do, depending if you have to do like a bunch of image resizing, a large batch, or like "Alright, I'm going to do this in the GPU", and you write some Elixir code, and then you can do it.

**Jerod Santo:** I think you explained to me last time how it actually works, how it decides what to run where on the CPU, GPU, but I can't recall, and I probably can't even -- I probably can't even follow you into the depths of that, José, so I won't ask. Let's regroup on Explorer. So just to be super-clear --

**José Valim:** It's --

**Jerod Santo:** No, just don't even don't even try, José. I won't be able to.

**José Valim:** Okay.

**Jerod Santo:** Can you bring it down to my level? Can you layman's-terms how does it know where to run what, where?

**José Valim:** No, it's just a single option. You say "I want to run on the host, or on CUDA", and it's a single option you specify, and everything figures out for you; you don't have to do anything else.

**Jerod Santo:** That's the part that I thought would be confusing, is the "figures it out for you" part. That's the part I thought you were going to explain, how it figures it out for you.

**José Valim:** Oh...!

**Jerod Santo:** \[laughs\] Yeah, that's why I said it's gonna be hard. Yeah, I can send a flag; I can say CUDA. I'm down with that part. It was like the whole "How it decides which code to run, where." I don't know, it sounds like some dark, dark magic.

**José Valim:** Yeah, so the way it works is that we have this thing called numerical definitions, and so if you think about your machine learning model, it's implemented using those numerical definitions.

**Jerod Santo:** Okay.

**José Valim:** And what it is - so for an Elixir developer we define functions using def, and then the function name, the arguments, and the implementation. And a numerical definition is \[unintelligible 00:53:10.02\] So you just put an n in front of it, and that's a numerical definition, and that's something that we guarantee we can compile that subset of Elixir that you have in there to the CPU or the GPU.

So when you're going to run something and when you pass this flag somewhere, it's basically saying, "Well, when I see some numerical definition in the future, like I pass this tensor to some numerical definition or something, I want it to run or in the host, or in GPU." And now we build the same graph, regardless if it's host or if it's GPU; we build the same graph, and then we call Google XLA, which is the library that actually compiles the graph to the CPU or GPU. And that's doing like all that hard work; like the real, let's say, magic stuff.

**Jerod Santo:** \[00:54:00.22\] Gotcha.

**José Valim:** But yeah, but we carry the option forward, so we know where to compile things, and where to run things. But yeah, so it's not trying to be smart to say, "Oh, I figured out that this piece of code would be more efficient in the host or in the GPU." It doesn't do that at that point. You still have to say where it goes.

**Jerod Santo:** Okay, you still specify. Fair enough. Let's close the loop on Explorer. So just to be clear, Explorer is an Elixir library. This is if you have any needs for one-dimensional or two-dimensional data frames. And then the cool stuff that we're talking about is Livebook using Explorer to build on top is out. Is that correct?

**José Valim:** Yes, exactly.

**Break**: \[00:54:44.11\]

**Jerod Santo:** Alright, let's switch gears now, because you teed up what we call distributed machine learning notebooks with Elixir and Livebook; you teed up this whole ML thing that you thought would take the world by storm and everybody's interested in this data thing, but surely there's a lot of talk about with regards to now running machine learning stuff. We've been talking about it kind of around about, but let's talk specifically about what went into building this, and how it works.

**José Valim:** Yeah, so I think we already covered a lot about it, but it was one of my favorite days, because -- so when we started this Numerical Elixir effort, a lot of people - they would ask questions like "Why? What are potentially the advantages of tooling like Numerical Elixir, or running a machine learning model on your network in Elixir?" And at the beginning, the answer was "We don't know. We are enjoying it." And there were some references, like I said - you know, if part of the Python community was saying, "Hey, functional programming is a good idea for that", we were like "Well, it's worth trying." But a lot of the time it was like "We don't know. We are having fun doing it, we are going to see where it takes us." And we had a hunch, like, you know, it would be interesting to get the power of the Erlang Virtual Machine and running concurrent and distributed software, and have that with machine learning, and see where that takes us... Because that's also a direction that the Python community is going; you're starting to have like distributed frameworks. I think it's \[unintelligible 01:00:07.27\] things like that... And then we're like "Well, we have this technology for several decades at this point, so it'd be nice to see where it leads us."

\[01:00:21.07\] So the announcement of the second day of the launch week was exactly Distributed² machine learning models in Elixir. And it's Distributed² because for an Elixir developer distributed means running on multiple machines in the same cluster, but for a machine learning developer, distributed means running on multiple GPUs. And now we can do both.

**Jerod Santo:** Gotcha.

**José Valim:** And that's what I show in the video. We started with a simple machine learning model, and then you change like two lines of code, you make it concurrent, and then you don't change anything, it's already distributed, and then you pass an option, it's distributed over multiple GPUs... So that was the idea - how easy, like how little you have to change to explore all those different architectures. And for me, it was very exciting, because it was kind of a -- I'm not sure if "promise" is the right word, but it was like an idea that we had, and we were not sure if we'd get there...

**Jerod Santo:** Potential, right.

**José Valim:** Yeah, potential. And being able to get there and release it, and -- for me, it was very exciting, right? But maybe -- like, that's why people should not have me selling stuff, because I focus on the technically exciting things... But yeah, the ones that are going to be very practical right now is not going to be Distributed² Machine Learning.

**Jerod Santo:** Right. Okay, so that brings me then to my next line of questioning... So you've been using the first person plural a lot; you've been saying "we" almost exclusively, by the way. I don't think you've said "I" once on this show. Who is "we", and who's the marketing director -- no, who is "we"? What's this team, who are these people? I know a lot of this, or maybe all of it is open source, but you know, there's a living to be made, you have a family... Let's talk a little bit about the "we", the Dashbit, the people involved, and then like, are you driving towards revenue? Do you have a marketing department? What's gonna happen money-wise?

**José Valim:** Yeah, no, I love this question. So I'll try to summarize, and I will definitely let some people out, so I apologize... But it started with -- so it started because somebody dared... I say it's the book that changed my life, and I never read. Sean Moriarity, he released the book called "Genetic algorithms in Elixir." And that got us talking about Elixir --

**Jerod Santo:** You never read it?

**José Valim:** No, I never read it, but --

**Jerod Santo:** \[laughs\] It changed your life, but you never read it?

**José Valim:** Yes, exactly.

**Jerod Santo:** Okay, fair...

**José Valim:** And it started us talking, Sean and I, we got to talk, and I asked a couple things on Twitter, and then Jaco joined us, and we started working on Numerical Elixir. So that's when things started. Today we have a lot of help, with also on the team, from Paulo Valente, and he's working at DockYard, which is a known consultancy in the Elixir world. And he's working part-time to help us bring those ideas forward. And that covers Nx, which is kind of the core.

On the Explorerfront, we have Chris Grainger. He's the one who created it. He works at Amplified AI, which is a company that runs Elixir, and they are migrating -- he gave a great keynote, I think it was "The future of AR" or "The future of machine learning" at ElixirConf, saying how it's the first company really, I believe, to start running Elixir machine learning models in production.

\[01:04:00.21\] And today, Philip Sampaio from Dashbit - he is working on Explorer as well. And then BumbleBee is mostly an effort from Jonatan Kłosko, who also started Livebook. So both Livebook and BumbleBee, Jonatan started that effort, and he's from Dashbit. And then the Livebook team - we have Ale, we have Chris, who is working on the different Smart cells, the different integrations... We also have Vojtech, who is working on Livebook Desktop, and... You know, it's like, we're talking about all those features, but possibly one of the hardest was just like shipping Livebook Desktop. And Hugo is doing the marketing, and Hugo has -- I know him for almost 20 years. I've met him in my first day in the university we met, and we did Plataformatec together...

**Jerod Santo:** I know Hugo very well, from Elixir Radar.

**José Valim:** Yes, exactly.

**Jerod Santo:** Well, I wouldn't say very well; you know much better than I do. But I know him, yeah.

**José Valim:** Yes, exactly. And we have been working doing things together. We had a band together, then we had a company together, and now we're working --

**Jerod Santo:** Right. You had a band together, is that what you've just said?

**José Valim:** Yes.

**Jerod Santo:** Oh, tell me more.

**José Valim:** Yes. A long, long time ago... What we did was acoustic versions of - I think we wrote one song, which thankfully, thankfully, it was like --

**Jerod Santo:** Is it on the internet anywhere?

**José Valim:** Yes, exactly - no, it isn't.

**Jerod Santo:** \[laughs\] Dang it

**José Valim:** So we were -- we were in that period where we had internet, but things that went to the internet, they were not lasting forever. It's not \[unintelligible 01:05:42.09\] it exists. But it can be a positive and a negative, because I've found -- so I learned how to program, actually... Like, my first real thing was building a website for our band. And they built it using Flash. It was not even Adobe Flash at the time, it was Macromedia Flash.

**Jerod Santo:** Nice...

**José Valim:** So one of the downsides is that I actually found the source code for the website.

**Jerod Santo:** And you probably can't run it anymore.

**José Valim:** I cannot run it. So...

**Jerod Santo:** Oh, man... You need like a turn of the century era Windows machine, that still has all that stuff on it; some sort of image of some sort of what computer you would have had back then to run that thing. Something with Flash on it. That'd be cool.

So tell me more... What instruments did you guys play? Was it a duet, was it -- you said it's all covers... What kind of covers?

**José Valim:** Mostly pop, but more in the direction of rock. Of course, we had our tastes, but if we wanted people to actually come and listen to us, we had to play mostly what was pop/rock at the time, I believe... And Hugo played the guitar, did backing vocals... I could not sing for the life of me, so I was very far from the microphones, and I played guitar and piano. I'm not sure if I played the bass back then.

**Jerod Santo:** Okay. Multi-talented. Multi-instrument.

**José Valim:** Yeah. I mean -- I have not played anything for real for a really long time. I really hope I could go back into it, but I keep getting entertained with programming stuff.

**Jerod Santo:** You keep coding new stuff. Maybe that could be a bucket list kind of thing for a future ElixirConf. Get you and Hugo and get the band back together, José, and play on stage at ElixirConf. How cool would that be? That would be fun, actually... Yeah.

**Jerod Santo:** That'd be very cool. I know that some people at GopherCon have done that over the years. They get together, certain people; there's a lot of musical people in the Gopher community, and they usually have some sort of a band. It's like an ad-hoc -- they were never a band in the first place, but now they get together and play some cover songs, and have a really good time. So I think that would be something that Elixirists would totally -- I have not been to an ElixirConf, but if I heard that you and Hugo were going to be playing music, I would go. I would fly for that, for sure.

**José Valim:** \[01:08:14.18\] Alright. Now we know. Maybe surely for ElixirConf US... Maybe ElixirConf US 2024, you know...

**Jerod Santo:** Okay. Well, I'm glad we -- okay, book it. We've got it on the calendar. You've just got to get Hugo on board and make this magic happen. That's amazing. Okay, so you covered some of the people involved. There's lots of projects. Each little project has certain people who are involved. What about the Dashbit side? What about the financial side? All this stuff is in the open source world... Are you making money? Are you hoping to make money? Are you raising money? How are you managing this?

**José Valim:** Yeah, so -- yeah, I love those questions. So Dashbit is -- we have a service that has been doing well, and that funds the rest of the work that we \[unintelligible 01:09:04.20\] So there are like three of us, we are working with clients, and everybody else is like full-time on open source, which is really awesome.

**Jerod Santo:** Nice.

**José Valim:** And we want to figure out a way of making Livebook, maybe we can find ways to breakeven... So one of the things we did -- but at the same step, I think Livebook, I think it's already playing, but I think it can play a really large role towards Elixir adoption... So we don't want to say "Hey, well, we have those features, but you have to pay", and somebody is just deciding to learn Elixir, right? So one of the things that we're thinking is that we want to have -- everything in Livebook for a single user is going to be there, and we want to make everything be easy to install on your machine. But if you need to collaborate with other users, which by definition requires a central place where you're going to put and share information, then that's going to be a service that we develop, that we are calling Livebook Teams.

So if you want to deploy an application as a team, manage it share secrets, or like share code snippets, all those kinds of things is going to be in Livebook Teams, and it's something that we are exploring. We hope that we're going to have a beta for people to try out in the second semester.

So that's how things are going, but we are not we are not in a hurry. And regarding investments, like VC, it's so funny, because I've been doing open source for 15 years, and I have never had a VC reach out to us because of any other work I did. And we've Livebook, I think, the most since the release, because there's so much happening... And at the time we were not even talking about machine learning. But because it was like data, and notebooks, which is related to this data world, we had VCs reach out to us. And that was like the first time, and that was interesting... But I always tell them, like -- well, there are a couple of things. So there are certain things in Livebook that really only works - and I'm not trying to be like annoying about these, like "Functional programming...!" But there are a couple of features in Livebook that only work because everything is immutable by default. So for example, have you used Jupyter Notebooks before?

**Jerod Santo:** I've loaded one, but I've never written one.

**José Valim:** Right, okay. So the way that Jupyter Notebooks work is that you have the cells, and you can think the way they operate is that you have some code; that code gets the variables from some global state, change those variables, and put them back in this global state. So everything is global state. And that makes it very hard for the notebooks to be reproducible.
\[01:12:05.19\] The example that I give is that if I have a cell that is x=x+1, and x starts with zero, every time you execute that cell in a Jupyter Notebook, the value of x is going to increment, which means that if you want to share that notebook with somebody, you have to say, "Hey, for you to get the same result as I do, you have to go and execute the cell number three, three times", right?

**Jerod Santo:** Right.

**José Valim:** So there is this aspect. But in Elixir, in Livebook, if you do x=x+1, and x was zero, you can execute that 100 times, and at the end, x is going to be one. So we had this whole focus on making everything reproducible. There are some like Python notebooks that try to solve that, but because everything is global state... Like, I can append to a list; that's global state that you have in the Jupyter Notebook. And those things, they are greatly reduced in Livebook. And because of that, we're able to do a lot of very specific tooling on top of this abstraction. The smart cells, they work on top of this abstraction; we can do caching, because we know on which variables a cell depends, and because everything is immutable, we know that when those variables change... So there are a lot of interesting things that we can do, and we lean on that for Elixir.

So when we're thinking about VC, I'm really worried about - like, if we get VC money, they likely want you to grow. Right?

**Jerod Santo:** For sure.

**José Valim:** And that's going to generate attention, because - well, yes, Elixir is beyond my expectations of community size, or where it would get to. But compared to Python, it's a small community. So I don't want to be in the middle of this tension where they're like "Well, Livebook's great, but it's Elixir-only, so now you have to figure out a way to make Python work, or JavaScript work, because that's where things are." So technically it's not going to be easy, and I don't want to be in that place. So when the VCs, they come talk to me, I say exactly that. And then they're like "Well, it's great. It looks like you have the vision for the product, you know exactly what you want. If anything changes and you feel like you want to get investment, let us know." But at this moment, until I feel like -- and I'm not planning to, but I'm not also ruling out getting investment... But yeah, at this moment, until I solve this problem and say, "Look, I think Livebook can grow, because these Smart cells are so good that people don't write Elixir \[unintelligible 01:14:37.29\] or "We make SQL our second language, and SQL is also declarative, and there are a bunch of interesting properties..." But until we solve this big problem, I wouldn't go after investment, I think, because I don't want to be in that position.

**Jerod Santo:** Well, you definitely thought through it. I think that makes tons of sense. I think if you really want the VCs to go away, you can just talk about the immutable characteristics of Elixir, and just talk about it fast enough that their eyes glaze over, and then they're like "Wait, I'm sorry... I guess, I guess we'll leave."

**José Valim:** Yeah.

**Jerod Santo:** So that's a good tactic...

**José Valim:** Well, it's really your fault, because you're making excellent questions, which makes me excited, and then I just go on a roll. So yes, but I apologize.

**Jerod Santo:** That's what I'm here for, you know? I tee'em up and you knock them out of the park. Alright, José, I know there's other things in this launch week; we will leave them to our listener to go check the show notes and check out the other three or four things that we didn't discuss, because we're out of time. It's always a blast. It always goes by so fast, even when you're speaking so fast... And I always learn something. I am actually excited about Explorer, I'm actually excited about Whisper up in my Elixir... I was looking at whisper.cpp for various reasons, but this makes tons of sense. As soon as we can get speaker diarization -- can I get you on a tangent about speaker identification inside of the machine learning world? Because Whisper doesn't do it, and I would love for it to just support that out of the box. Have you looked at that at all?

**José Valim:** \[01:16:16.03\] Yeah, I've looked at that. So Chris McCord, the creator of Phoenix, he actually did a nice video, because he built this thing called LiveBeats, which is like Spotify, but built with Live View, and where you can like share music, and so on. And he did a blog post where he was adding Whisper to this LiveBeats application, and then he has a video... So it's really neat. And at that moment, it was not even doing like audio segmentation, so you have to figure out ways to break the audio into like 30 seconds... But we know how to solve that problem, and the automatic audio segmentation is something that we plan to work on. But I don't know enough about the other problems, and doing diarization, and figuring out who is the speaker. \[unintelligible 01:17:05.01\] I think there are some tools in Python...

**Jerod Santo:** There are, yeah. Pyannote is one of them. I don't know if that's how you say it, pyannote. So I know some people, there's a thread on the whisper.cpp discussion about how to go about it... And it's basically like a pipeline situation, where you run it through Whisper, then you run it through this other thing called pyannote, and then you run it through Whisper again, or something... It's very complicated at the moment; not worth my development efforts.

**José Valim:** I see.

**Jerod Santo:** So I'm just kind of sitting around, waiting. I know there's other ways we could do it ourselves. We actually had a lot of people reach out after that Whisper episode saying "You could do this, you could do that." We have separate tracks, we do multitrack recording, so we could actually just edit them, and then do each track individually, and then munge the files, or something like this... Possible, it just really messes with our workflows. So we're trying to have like a -- we would love to just upload our mp3 into our Phoenix app, and then in the background it just goes and transcribes it, and it just is amazing. So I'm just kind of waiting for that to be potential.

**José Valim:** Well, you could upload three mp3s then. Or is it because getting the individual tracks is hard?

**Jerod Santo:** Yeah. So we start with individual tracks, but once we mix down, we're basically just adding a bunch of steps. So we start with tracks, we edit them, and then we have a session, and then we mix that down to a single wav file, and then we convert that to an mp3. And that's what we finally ship.

**José Valim:** Got it.

**Jerod Santo:** And we're doing manipulation on the mp3 in our app, like adding chapters and stuff, but we're not doing the transcripts. So at that point, you don't have any sort of multitrack information. And you don't want to do it too early, because then the timestamps are all going to change, because we're still going to edit it. So it's like, how does it work in bulk? Because we're shipping five or six shows a week. It has to be like -- it can't add hours and hours of additional steps, and wav files are large, and... Anyways, podcaster problems. But I appreciate all of our listeners who wrote in and and gave us suggestions, it's just, I'm not going to use any of them. I'm just gonna wait. I'm gonna just gonna wait until something pops up. I'm patient, I've been waiting this long, so...

**José Valim:** Yeah. Until it's a smart cell, right? So you can just \[unintelligible 01:19:18.03\]

**Jerod Santo:** Exactly. I'm just gonna pop it in, drop my wav file into Livebook, and hit a button... Boom. And then copy that Elixir code.

**José Valim:** If you see a model in Hugging Face that does it, then you can ping us, because then we can port it and have everything running in Elixir. But as far as I know, there is no such thing.

**Jerod Santo:** I think that's correct.

**José Valim:** Do you know what I just realized? That I assume most people listen to podcasts at like one and a half speed, or two and a half... And this time they won't need to.

**Jerod Santo:** \[laughs\] That's right. They'll have to turn it down just to keep up with you, man. You are talking at one and a half to 2x. So that's all right. I like to wind you up and let you go.

**José Valim:** Yeah, I actually troll my mother this way, because I know she listens everything with like one and a half or two... So whenever I send her an audio, I on purpose speak super, super-fast, like "Hello, mother. How's it going?!" So she has to swap through the settings on and off...

**Jerod Santo:** Oh, man... I'm sure she appreciates that. Alright, José, we will let you go... All the links to all the things will be in the show notes; the whole launch week, how to connect with José, how to check out the things will be there for you, listeners, so you can catch up with him and the work he's doing. Always appreciate you, always love the tools that you build, and looking forward to the next one and what you do next with Livebook; I think it's got a lot of potential. It's already pretty cool. I'm definitely gonna give it a try next time I'm munging some data.

**José Valim:** Alright, thanks for having me, and see you next time.
