**Suz Hinton:** Good day! You're listening to another episode of JS Party. This is episode \#28, and this is a weekly celebration of everything JavaScript. I'm Suz Hinton, I'm your host for this episode, and I'm joined, as usual, by some fantastic panelists, as always.

First, we have Kball on the panel. Hey, Kball, how's it going?

**Kevin Ball:** Hey! Doing good, ready to roll.

**Suz Hinton:** Awesome! Second of all, we have Chris. Welcome back, Chris!

**Christopher Hiller:** Good day!

**Suz Hinton:** And last but not least, we also have Jerod. Jerod, it's great to have you.

**Jerod Santo:** It's great to be here. I'm not a machine, but I'm here to learn.

**Suz Hinton:** \[laughs\] I was expecting something like this from you. \[laughter\] Jerod has given a little bit of a spoiler of what we're gonna be talking about this week. We're gonna be covering machine learning, and that sounds a little bit weird, given that we're talking about JavaScript on JS Party... But lately, there's been some really cool activities happening around the combination of data science, machine learning and JavaScript.

We're gonna start out by just summarizing a conference that I actually was lucky enough to attend this week. It's called ML4ALL, which stands for Machine Learning For All. If you go to ml4all.org, you can actually go check out the videos, the schedule, and also just what the whole conference was about. Normally, when you think of machine learning conferences, you think of something like a very academic, very dry and very full of math and scary terms that you don't know... You imagine a room where everyone sits and experiences that kind of thing. But this conference, which was organized by a really great community of people, including some of my colleagues, was designed to make it more accessible for people to be able to access machine learning in a context where they're just learning from the very beginning. So I thought that was really cool. I learned a ton.

I was lucky enough to give a presentation at the conference too, even though I'm not an expert in machine learning... So I think that says a lot about the conference's approachability. That's a quick summary. The reason why I wanted to talk about this a little bit -- Jerod, did you have something to say?

**Jerod Santo:** \[00:03:43.05\] Well, I was just gonna comment on the videos; they're all online now, and Suz linked us up here in order to prepare... I was actually watching Kaleo Ha'o's "Jump or Not to Jump: Solving Flappy Bird with Deep Reinforcement Learning", which I'd never heard of reinforcement learning... And I'm like 80% of the way through that; he's kind of blowing my mind, so I'm interested at a certain point today to get your thoughts on that topic as well.

**Suz Hinton:** Yeah, Kaleo's talk was one of my favorites. We ended up doing a little behind the scenes interview too, and that's been hopefully uploaded to the same YouTube channel as well, which is really fun.

Kaleo's talk - a reinforcement learning mathematical formula, ignores how scary it looked, and then he broke it down and made it really easy to understand. I'm really glad that you ended up looking at that video.

**Jerod Santo:** Yeah, I started off intimidated, and he said "I was asked to explain the math behind this", and I thought "Hm..." But he did such a great job of setting it up that I was like "I'll give him five minutes", and then five minutes in I was hooked, I was into it. So far it actually does make as he describes the math, which that's a feat with me - to get me to understand deep math things is quite a task.

**Suz Hinton:** \[laughs\] I'm not that far behind either. I took Advanced Math in high school, but then I sort of started bumming out in my last few years of high school. So it's definitely something I've always wanted to be better at. The cool thing is that Kaleo also put his Flappy Bird example up on GitHub, so I'm yet to track that down, but he said it's definitely there.

**Jerod Santo:** Nice.

**Suz Hinton:** Cool. There were some other talks though that were really surprising to me, because they actually called out JavaScript and machine learning. I think the biggest one was Amy Cheng's. She opened on the second day, and she talked about using machine learning to create art. It became a very existential talk towards the end of it, where she said "Is this even art?" It's using techniques that people have probably seen, such a style transfer, where you can take a photo and then paint it in the style of Van Gogh, that sort of example.

She was asking questions such as "Is this art, or is this a machine just copying things?" She talked about this concept of this professor that she was reading an essay from about the concept of the machine learning's aura, rather than it just copying the aura of human art... I thought that was really fascinating.

**Jerod Santo:** What is the machine learning's aura? What do you mean by that?

**Suz Hinton:** Apparently, the essay doesn't really say what it is, but I think what they're saying is right now using machine learning to just emulate human art or existing computer art, but what if machine learning was supposed to create different art, that was sort of more idiomatic to the actual neural network, rather than, again, just directly copying human stuff. Apparently, we're yet to see that, and I think the aura is insinuating that hopefully that will emerge at some point.

**Kevin Ball:** One of the things I really like about this idea of using machine learning for art is it kind of plays into one of the things that I think is the strength of machine learning and JavaScript, which is accessibility... It's bringing this stuff to perhaps an audience that is a little bit less grounded in all that crazy math and deep stuff, and saying "Hey, you know what? You can play with this right now, right away, and do cool stuff with it. You don't have to understand all of the deep underlying pieces."

**Suz Hinton:** That's a really excellent point, and Amy was talking about that in her talk, because she used mostly JavaScript tools to do it; she used Synaptic JS and MO5.js. MO5.js I think is supposed to be sort of in the p5.js family, which are like really friendly wrappers around Canvas... So I think this is a friend wrapper around TensorFlow.js, if I'm not mistaken. I really agree with that whole accessibleness. I think she was saying something about it's easier to share stuff if you can just send someone a browser URL.

**Jerod Santo:** \[00:07:45.08\] I'm stuck back on the neural network art idea, and kind of these existential questions; I'm curious what everybody thinks, because if a neural network creates some art, then who is the artist, who owns the copyright? All these questions open up, and I think we have a whole set of new questions that we start to ask ourselves.

**Kevin Ball:** Well, there's the intellectual property side - I didn't even go there at all; I was kind of coming back to this question of like "What is art?" There's all this weird stuff about things that you or I might think are ugly or stupid, but it is considered art because of the mental state of the artist when they were doing it, and what it got through. Is art defined by the process of creation, or the process or observation and consumption?

**Jerod Santo:** I don't have an answer to that question. It might be beyond my pay grade. But I think with regards to the creation side of it, if you have a human who's feed-- I mean, specifically with machine learning-based art, and let's use style transfer as an example... You have an existing image, which is selected by a human, and then you have a set of training data which is selected by a human, right? Like, that's the whole thing with machine learning - we teach them based on examples, and we hand them all these images. So the machine isn't choosing those things - at least not yet - and then the final product is really a result of the input.

So it's still like inputs and outputs, so in the unique case of style transfer - I guess for those who don't know what style transfer is, you have a source image, you have another image that has some specific style to it, and you're basically passing one through the other in order to create something brand new... It's more complex than that, but in that case I think the human is still doing all this stuff, and the machine is just kind of chunking stuff out. But I think you're probably talking more down the line, where we start to hand off more decision-making to the machines... Is that where you're going with that?

**Suz Hinton:** I think that if we look at the example of Deep Dream, where you had all those weird puppies and eyes everywhere, that was the result of them feeding the machine back into itself... So then it was just generating really weird stuff based on a reference image, which is not something that was really copying a specific artist or a human, but I honestly believe we interpreted that as odd... And I'm interested to hear what the other panelists think as well.

**Kevin Ball:** It's certainly -- you know, I'm looking right now, there's a Deep Dream Generator (deepdreamgenerator.com)... Looking at this, I consume it as art. It looks to me, and I'm like "Wow, that's amazing. Some of that is incredibly beautiful." And some of it is just bizarre, but that distribution of reactions is just the same if from you looking at a lot of human art. Some of this is incredibly beautiful, and some of this is just "Why...?"

**Jerod Santo:** Right.

**Christopher Hiller:** So if I'm looking at something generated by Deep Dream, and I didn't know what made it... If I thought "Well, maybe somebody drew this, or painted it", or whatever, I would say "Wow, that's really trippy, surrealist art!", sure. But because I know what created that, it just doesn't feel like art to me anymore.

**Kevin Ball:** Oh, man... The Hummingbird on fire - that's so cool!

**Jerod Santo:** \[laughs\] I concur.

**Christopher Hiller:** I mean, I don't look at a Deep Dream, those pictures, and think of them as art. I mean, I assume I'm not alone in that. I think if we're looking at ML as a source for art, there is gonna be quite a few people who are gonna have some issues with that, I think.

**Jerod Santo:** Yeah, and I don't have the philosophies around art, but I believe that it's created in order to invoke some sort of emotion or reaction, right? And so regardless of whether it actually connects with the consumer - Kball, in your situation, you like some stuff, or you think it's just crazy, and isn't good... And I have the problem with some art where I'm like "This doesn't require skill", especially splatter paintings. I look at them and I'm like "My three-year-old could do that." Is that art? Well, to somebody it is, right?

\[00:12:00.26\] But there is an artist on one side of it, and that's why I kind of went to the questions of like "Who is the artist?" and maybe that's where you're going with it, Chris, saying that it's not really art because it's generated based on some sort of algorithm or some sort of inputs and outputs. But it's not like the person on one end said "I'm trying to make you sad, or happy, so therefore here is this hummingbird on fire."

**Christopher Hiller:** I mean, it's not so much about that for me; it's about intent. If I intend to make art, well, I get to call it art. But a machine has no intent.

**Kevin Ball:** One of the really cool to me reasons why one might wanna look at machine learning and JavaScript is kind of harkening back to the shareability of it - you just put it online and it goes. What if we thought about this as a tool for creating collaborative art? You throw your photos in, and I throw my photos in, and we kind of have the machine merge them together in an interesting way, and we could create art suddenly not limited to who you can get in a room, but... You know, you could have millions of people co-creating.

**Christopher Hiller:** Sure. Or you create a framework or some constraints, throw it up there on the web, and allow people to use your website using ML to make their own art.

**Kevin Ball:** And then it is their art, even though it's ML as the tool behind it. Is ML that different than a paintbrush?

**Jerod Santo:** That's deep, Kevin. Very deep.

**Kevin Ball:** So there were a couple other talks that you mentioned, Suz, beyond the ML to create art... Which we could go on about art for a long time, but I don't know how much that's gonna get us into JavaScript... But there was one on killing math, which I think also ties back to this idea of making ML more accessible, something that you don't need a PhD in computer science to learn, but you can hack around with on your browser at home. You could maybe have a -- you know, my kid is there learning to code (my kid is too young to learn to code yet, unfortunately) and at some point they could just be playing with this thing in a web browser, without having to do anything.

And then you had a talk as well that you gave... I'm not gonna make you plug yourself, but I thought it was another really interesting example, where you were essentially taking a browser extension or a bookmarklet and using it to auto-annotate images for accessibility; looking at an image and giving a summary of "What is this thing?" It made me start wondering, like, when you start thinking ML in browser extensions and ML in pluggable snippets that we can share around - does this give us whole new ways of kind of parsing and viewing the web?

**Suz Hinton:** Yeah, I saw it more from the perspective of us repairing the web, and then hopefully we can use these techniques going forward to kind of -- you know, once we have tended to the garden of the web and made it nice again, we can just keep it kind of trimmed, I guess... That's like my little analogy there, but I really like how you can use machines to identify subject material in images. I definitely have seen some not so great uses of that technology, so I was trying to find something that would be of positive use, which is being able to provide alt tags for images on the net that don't have alt tags already applied to them... Because it's such a big task to do, it would be great if people could either do it on demand, or we could run jobs on websites and refresh those specific pages.

So that was me exploring some very idealistic views about how we can use things like just even REST API calls, because even if we don't wanna run these models in a browser, we can make a REST API call to a server that is able to run those models in order to identify the images. I was trying to show that you don't even have to create your own models, you can use existing ones that are out there, and JavaScript is very good at making REST calls.

**Jerod Santo:** \[00:16:06.18\] That's interesting you do that as a browser extension. My immediate thought I guess as a website creator is there's lots of pragmatic reasons that you would want this in your server-side markup as well. So I was thinking in terms of like tooling for developers - maybe it's a Webpack plugin that you can just pull into your pipeline and it can go through and check all your image elements that don't have rel attributes or titles, and then do the analysis and actually write that back into either your server-side code, or in your generated Webpack HTML, so that it wouldn't have to be subjective in terms of the individual with the browser extension, but it'd actually fix it at the source.

**Suz Hinton:** That would be cool. I know that at the source sometimes it's easier for a human to write them, especially if you don't have a large collection of images, but it would be great if stock photography websites, for example, were able to -- if you download an image from that and you're using a ton of them, maybe that's the use case for being able to automatically tag using the machine's intelligence.

**Jerod Santo:** Right. Or user-generated content, where they're uploading images, but they're not necessarily tending to your garden quite as well as you'd hope they would; your users, you know?

**Suz Hinton:** Yeah, that's exactly why I use Instagram as an example of that, because people tend to use pretty ephemeral or vague captions, even if they do put their own caption on this, so they're not always appropriate to use for alt tags; yes, you're right there.

**Christopher Hiller:** Suz, to make sure I understand how something like this would work, you would have a browser extension, and you're visiting a web page, and there's no alt tags... Maybe you click a button or invoke the extension, or maybe it runs automatically, and what it's gonna do - it's gonna scrape all those images, and send them off, but basically it's gonna take the images and post them to some endpoint. That endpoint is going to come back with some alt text, and that will be then applied to the DOM somehow. Is that basically what happens?

**Suz Hinton:** Yes, that's exactly how it works. So it will actually go in and manipulate that image tag and add in the alt tags attribute. I will say that there is a few privacy limitations around being able to use this, which is why I haven't released it as an extension or anything like that, because a lot of these models are privately owned by large companies, and you don't necessarily have the permission to take people's photos and put them through that system, and with GDPR we're all extra-conscious of data privacy as well... So whenever I do this demo, I usually just use it on my friend's Instagram profile page, and I've already got his permission to do that.

So yeah, there's definitely a lot of discussions to have around the appropriateness of this technology, but yes, if we had everyone's permission to do that, that's exactly how it would work, which would be amazing.

**Christopher Hiller:** That's interesting. My next question was gonna be about privacy, because necessarily for this to work the way it's designed... You know, moreover -- I mean, basically, as you browse the web, it's gonna take a ton of images and send them off to some company, whoever owns that RESTful endpoint.

Going a bit further, what would it take to run your own -- I mean, basically, have your own setup? Or run that in the browser, where you have this neural network all set up, and you can analyze images maybe just in the browser itself. What kind of memory requirements -- what's stopping that from happening? Why do we have to hit a RESTful endpoint?

**Suz Hinton:** \[00:19:54.13\] I don't think we really do anymore; I think that's a really good point. One benefit we've got from hitting that endpoint is that it's continually improved, so it's gonna get better and better. And the downside of running your own model in your browser, which is completely plausible - and I think we're gonna talk about a couple of those examples in the next segment of this show - you could own that model and just run it locally, and that would be perfectly fine to do, and I think that would get around those issues, and you would really only be running the model on the images that you care about... So it's not as if you'd be running it through 10,000 images in a second.

So I think that browsers would be more than capable of doing that, and we have some really cool tools now, and even before that, technically you could port OpenCV to WebAssembly and run it that way; I think that that is a really good idea, and I'm hoping that everyone is gonna be able to kind of own their own models going forward, and be able to understand how to constantly improve them.

**Christopher Hiller:** Remind us what OpenCV is, real quick.

**Suz Hinton:** It's an open source Computer Vision library, so it doesn't actually run in the browser. I forget what it was written in; it's either C or it's Python. I think there just might be lots of different language wrappers for it. But yeah, it's basically a computer vision executable, the way you can run images through it to identify things like facial detection, and also just positioning of objects, and things.

**Kevin Ball:** Could we invert the problem, where you have an available model that gets trained on images that don't have licensing problems in some form or another, but then each browser essentially pulls the updated model periodically? So you're never sending back people's private images, you're always just doing that in the browser, but you can still get updates from your public image data by pulling updated models?

**Suz Hinton:** That's such a cool idea!

**Jerod Santo:** You have to open a ticket on Chromium and WebKit and Edge...

**Kevin Ball:** Or just build an extension, right? If you build an extension, that's gonna -- and you need that database. So I'm not an expert in this area, but I know there's lots of images that are out there that are Creative Commons licensed or things, where you might be able to just kind of publicly use them without too much difficulty... Use that to train a model and then export it as a set of configs that can be read by TensorFlow.js or something like that, and then have your extension pull it up.

**Christopher Hiller:** So the concern is that you're copying an image, basically?

**Suz Hinton:** Yeah, and you're passing it through a mode, and that model is basically -- theoretically, you're gonna use their content to improve the model. I don't know how deep I wanna get into this, but there has been controversial use of certain images for things like facial recognition and gender detection, where they've used images of actual people without their consent, if that makes sense.

So if I'm passing images of Instagram through it, there's gonna be a lot of selfies in there, so that's sort of where that IP becomes a real concern. Hopefully that sort of gave you a bit of an idea...

**Kevin Ball:** Yeah, someone's personal photos are in theory protected data, unless they put some sort of license on it saying you can use it. Your model maybe isn't training, but if we're sending it off to a REST server, they don't know that, you don't know that that data is flowing through the web somewhere.

**Christopher Hiller:** I guess I was confused; I thought maybe you were talking about copyrighting intellectual property stuff, but this is more like just ethical questions.

**Jerod Santo:** Well, doesn't Instagram -- I mean, there is an IP situation there as well, because don't you render some rights to Instagram when you publish on their platform? So there's certain claims that the company Instagram actually owns all that imagery as well.

**Suz Hinton:** It's also a requirement of a lot of these API services. You have to either have permission to use the data, or you need to own the data yourself. So you're against the T&S if you're not doing that as well.

**Christopher Hiller:** Right. This is a grey area... \[laughter\] There was recently a lawsuit - I think it was LinkedIn that said "Hey, company, stop using our website", because this company was basically scraping LinkedIn for stuff. And I can't remember what happened, but I think it was that LinkedIn actually lost that suit. That makes me think, well, if that sets a precedent, then it kind of opens up stuff, too.

Because you are presenting these images and because you're presenting his stuff on the web, it becomes public, essentially, and it's gonna end up in my browser cache, it's gonna get copied around, and maybe that's going to end up in some machine learning neural network somewhere.

**Kevin Ball:** But with GDPR stuff going, there's a lot more impetus on companies, though. If you're using somebody's personal data, you have to give them a way to remove it, and once it's deep down in the model, I don't know that you can. So that would put a lot of liability on the company that was using that without permission.

**Jerod Santo:** I prefer the Wild West model where we all just do whatever we want, you know? Just like, "Let's not worry about any of that other stuff. We'll just let is shake out -- we'll let the judges shake it out." No? Just me. Okay. \[laughter\]

**Christopher Hiller:** Yeah, it's kind of funny/not funny, because a lot of engineers say "We're just engineers, and we're just doing what we're told"

**Kevin Ball:** Ethical problems are a big thing. If you're not gonna stand up and say "This is unethical", who's going to?

**Christopher Hiller:** I think part of the problem is there isn't gonna be somebody who won't say that... And so we could do it, or somebody else could beat us to it. I mean, you say "Okay, I've got this cool new AI that can fake a video of the president saying something he didn't say", and yeah, let's release that to the world.

**Jerod Santo:** Well, that exists.

**Christopher Hiller:** \[00:27:51.29\] Right, sure. It exists, and it's like "Well, but that's a problematic technology." The people who invented that - I can't remember if it was Adobe, or whatever... But if they didn't do it, somebody else was gonna. Even if there were engineers there that raised those ethical concerns, you know, because they could - well, certainly some other company could, too... And somebody was going to do it, somebody was going to file the patent, and yadda-yadda-yadda.

**Kevin Ball:** I'm not sure that slippery slope argument is a valid way to say "Hey, we as individuals shouldn't stand up for ethical decisions."

**Christopher Hiller:** Oh, I'm not arguing that. I'm just saying this is how people think.

**Kevin Ball:** Well, I think we need to change that, and who's gonna change that except for role models? If you have your set of lead engineers who are experienced in the industry standing up and saying "Hey, we have to take a stand. It's not valid to say 'Oh, but business said so.' We are going to still hold you accountable to that." That's how a culture changes. It doesn't change if nobody takes a stand.

**Christopher Hiller:** Yeah, but the buck stop at the engineers either. Even if the engineers say no, and then the business itself says "Okay, you guys are right. I'm not gonna do that. We're not gonna go there", well their competitor will. So it's more of a -- it goes beyond engineers.

**Jerod Santo:** It's a holistic problem, it's a social construct that we all participate in in our different roles.

**Christopher Hiller:** A societal problem, an economic problem.

**Kevin Ball:** The fact that there is a structural problem does not put individuals off the hook. The way that we change societies is we get enough people saying "Hey, this is not right." Law and that sort of thing is downstream from culture. So if you wanna change the law and what's regulated and what's allowed and what's restricted, the way you target that is changing the culture.

**Jerod Santo:** Unfortunately, it's not always downstream. \[laughs\]

**Kevin Ball:** Well, not always, but it tends to be...

**Jerod Santo:** A lot of times it's side-stream to culture. It's despite culture lots of times, because of corruption and whatnot.

**Kevin Ball:** True, but if you look for example at the change on gay marriage... That came because we were going nowhere, nowhere, nowhere, and then there was a massive -- the culture shifted to the point where you had a majority of people saying "What is going on here?" and very quickly the politicians followed. And I think if you get enough momentum behind it. Say, if you have two thirds of the industry talking about the ethics of this, rather than saying "Well, you know, I'm just an engineer, so what do I know? What am I gonna do?", things are gonna shift. And that starts with a few people saying "You know what, we've gotta do this!"

There are people out there talking about the ethics of this, it has become an active conversation in our industry, which I really appreciate... At QCon SF last year Leslie Miley I think did a keynote, and he took it head on; he was saying "We're creating these models that are essentially digital weapons of mass destruction (Facebook etc. where we can massively do things). We have a responsibility to be thinking about it.

So it is a rising tide of discussion in the industry, but we need to keep pushing it.

**Suz Hinton:** I think one thing that we could all have a read of too in reference from going forward is a Medium post by Laura James; it's called "Oaths, Pledges and Manifestos: a master list of ethical tech values." It has a bunch of links, including ones to AI manifestos and pledges... I definitely encourage you to read through that, because there's definitely a movement happening online where a lot of people are definitely signing up to start questioning themselves and their role in this.

**Jerod Santo:** Cool.

**Suz Hinton:** \[00:31:47.19\] Alright, so we talked a little bit in the first segment about just that there are awesome JavaScript tools for creating machine learning models and also running them. We did mentione a couple of them, such as Synaptic JS, MO5.js and TensorFlow.js, but I guess other than the shareability of it, which Amy was talking about as a strength of doing something like this with JavaScript or in the browser... What are some other value propositions that you can think of for using machine learning using JavaScript? ...which I'm guessing will be a little bit slower than perhaps using other languages to do so.

**Kevin Ball:** It could be slower, though JavaScript is bloody fast... But I think there's a few different things that come immediately to mind. One is kind of in this idea of shareablity, but just in terms of making it super easy to learn and play around with concepts. It's sometimes easy to forget, if you're living in the web world, how much of a pain it can be to set up a development environment and do all sorts of things and tutorials that have much more heavy back-end requirements... Whereas I saw a post recently that was making it around, it's called "Hello, TensorFlow", that literally just had an in-browser demo where you could play with it and you could tweak parameters and really start to understand how machine learning is working, without having to install a thing.

You could do that in the developing world on a tiny little laptop or Chromebook, or even a phone, potentially, and start learning these concepts without having to get a big environment set up.

**Suz Hinton:** I really love the idea of that so much... Literally, just start tweaking stuff immediately with an example that's running in the browser. That's awesome.

**Jerod Santo:** Yeah, I think we should distinguish in the browser versus not when we talk about anything with JS, of course, but specifically with machine learning in JS. And like Kevin said, JavaScript itself is not slow, but I think what we talk about -- specifically training models in the browser, on a phone, or on an under-powered PC, is going to be slow, right? And the difference with JavaScript and most other languages is it exists in the browser; of course, we'll get there with WASM and whatnot (don't get me off on that train...), but server-side JavaScript and Node is completely capable of doing these things as well, isn't it?

I know a lot of people are doing Python for the actual training, but that doesn't mean you can't train machine learning models in JavaScript, does it?

**Suz Hinton:** No, you can totally train them. I think though that trying to import like a 35 gigabyte .csv file is gonna be maybe a little bit tough for the UI thread, at least.

**Jerod Santo:** Right.

**Christopher Hiller:** I was kind of under the impression that -- I don't know... Where do GPU's come in? Do they? And if you want a GPU binding, you might now wanna use JavaScript.

**Suz Hinton:** Yeah, I know TensorFlow runs in the GPU.

**Kevin Ball:** Does TensorFlow.js give us access to the GPU? And can we get access to the GPU from a browser running JavaScript? That would be amazing.

**Suz Hinton:** Yeah, so TensorFlow was designed to make as much use of the GPU as possible for this kind of stuff. I guess just trying to load that initial large amount of memory to do the training just from the training data itself - you wouldn't quite even be at the GPU stage at that point. That was my biggest concern.

**Jerod Santo:** Well, even going back to Amy Cheng's talk at ML4ALL, she was going through the work she was doing with Synaptic JS and MO5.js, and she said specifically we can't use JavaScript to train models; there's simply too much data... Which is kind of what you're saying there, Suz. She was speaking about in the browser specifically, and she had a fallback -- she had trained the things with Python, and then she was using TensorFlow JS to actually use the models. So that's a common trend right now.

**Suz Hinton:** Yeah, that's right. I know that TensorFlow JS supports both models that were trained by TensorFlow itself, and also models that were trained with Keras, which is like a wrapper around TensorFlow, which is pretty cool.

**Christopher Hiller:** So this Hello, TensorFlow thing though - I mean, there's training happening in that demo?

**Kevin Ball:** \[00:35:56.06\] Yeah, it's a pretty simple model. In that example, they're essentially modeling a quadratic curve -- or not quadratic, it's actually the third, so whatever that is... But they're modeling a very simple mathematical formula, rather than something really complex, like recognizing something... But it gives you sort of an understanding of what is the big picture of what's going on here; what is it that we're doing when we're training something to recognize images or do things like that... And yeah, with that simple of a model, it's just running the training in the browser.

**Christopher Hiller:** So where does it become too much? What's the threshold? I guess that's what I don't understand. Because if we're training in this demo on Glitch or what have you, why are we saying we can't use JavaScript to do it? What problems -- is it almost all problems that are real-world are just going to eat up too much memory to do, or what? Where is the cut off? When is JavaScript or training in the browser no longer feasible?

**Kevin Ball:** I think in some sense -- I wonder if you end up being more network limited than anything else...? Because you could probably essentially stream data through, so you're not gonna be memory-limited necessarily... Though I'm not an expert; maybe you need to load it all at once, but I wouldn't expect you would. But that's a lot of data to be -- it probably depends, right? If you're on a desktop that's wired via fast Ethernet connection, I don't know that it makes a big difference... But with the browser, you might well be on a phone somewhere, or you might well be on a Wi-Fi network. I don't know that I'd want to stream 30 gigabytes of training faces over my iPhone.

**Jerod Santo:** Yeah... I think it's insightful that Monica uses numbers here, and she even states in her demo that numbers are much easier to handle than images... So most of the things that we're gonna be using these models against are images, audio streams, video streams; these are large data consumpting things. But I don't have a hard answer of "At exactly this type of thing, Chris, JS becomes unuseful."

**Christopher Hiller:** There are more problems than just -- I mean, there's text-based document processing, reading text files, reading source files with ML that seem like they would be less intensive than something like image or video processing.

**Kevin Ball:** You know, one thing I was thinking about in our last segment that that reminds me of is kind of tied into this accessibility context we talked about using ML to auto-annotate images, but what about to auto-annotate essentially area markup and things like that for sites that are not well-designed for screen readers?

If I have a site that's doing all sorts of crazy things in CSS, and re-ordering and whatever, such that the underlying markup is nonsensical, could I use ML to look at both the document content, but also at how it visually ends up laying out, and do something smart to make it more readable via a screen reader?

**Christopher Hiller:** That would be cool... Even just looking at a page and saying "Okay, here's the nav bar up top... This is what a web page looks like, right? There's a sidebar over there... And here's the content on the main stage; it's got a lot of text. Okay." You would take all that crap, and basically just distill it and turn into a new markup, and add the area attributes and that sort of thing, right? That'd be cool. It seems difficult, but it's certainly something a model could learn from just looking at thousands of web pages. "Oh yeah, so this is where the content is."

**Suz Hinton:** \[00:39:59.05\] I think that has interesting potential. I think that the biggest hang-up that people have about trying to make the sites accessible is that when they hear that they can't 100% fully automate the fixes or automate the testing and CI, that's when they feel really discouraged... And I think that part of that manual testing is literally stepping through things with a screen reader or literally tapping through things with like the Tab key, or even just -- color contrast is testable, but in some cases you can't always predict when colors of text and background colors are gonna be overlaid on top of each other.

So what I would like to see is those really slow manual testing things, and the things that require a human to really reason about "Well, this doesn't have a hard and fast rule, but in this scenario does it actually work for somebody?" I think they are the kind of avenues I'd like to see ML exploring. I think we're definitely a way off; it sounds super difficult, but I do like that this discussion is happening, for sure.

**Kevin Ball:** There's also tremendous value - coming back to our question of models and training - in just the model interpretation in the browser. I think one of the coolest things I've seen recently with TensorFlow JS was these folks who did real-time human pose estimations; they're essentially looking at a video and recognizing how people's limbs are... Sort of like a Microsoft Kinect type thing would do, where it's like, okay, I moved my limbs in this way, and it recognizes where my hands are, and all these different things.

That really got me thinking, right now if you wanna do some sort of interactive game where you're moving stuff around, you kind of have to have hardware for that; you've got something that's gonna be scanning you, maybe you've got a wand, or something like that... We've been getting better and better at that, but what if you just went to a website and you were able to play these interactive games... Maybe we could stream content between you and a friend, bring Feross in and set it up with WebRTC or something like that, and suddenly you've got interactive physical games just using a webcam... To me that sounds exciting. That sounds like the type of thing where suddenly the web is making a whole class of things that used to require dedicated hardware accessible.

**Suz Hinton:** I really love this. This is timed very well around Xbox releasing their accessible controller recently, where you can plug a myriad of different devices into their inputs, and then that kind of replaces more traditional controls on a controller. I really like that... What you just said there as a suggestion really reminds me of that progress being made, too.

**Jerod Santo:** Kevin, you have all the best ideas; we need to just get you in a room and just build all this stuff that you come up with.

**Kevin Ball:** I'm down, man. You get me started, and I love making stuff and figuring out possibilities. That's the part of coding that gets me excited. I am not a "polish every piece and get everything down", I'm a "prototyping what are the possibilities we can open up with this?" So if you all wanna hack with me and help me make that happen faster... The problem is I never have time. Clients will pay a little bit for that, and they'll mostly pay for "You've gotta actually finish this application". \[laughter\]

**Jerod Santo:** All the actual hard work of polishing it and shipping it.

**Christopher Hiller:** Yeah, I'm like that too, but I just never finish anything. So it's just like "Oh, I have this great idea. I'm gonna hack up a prototype. Oh wait, this was way too ambitious! I think I'll think of something else, and move on to that."

**Jerod Santo:** I'm such a pessimist that I actually shoot down my own ideas before I start coding, so in that sense I'll save myself the time of building a prototype. Of course, that's also the joyful part, isn't it?

**Christopher Hiller:** That's actually a great skill that I wish I had - being able to shoot down my own ideas a little more quickly.

**Kevin Ball:** \[00:43:56.18\] I found that for me it's two different mental modes. You'd be surprised, but the one I had to learn was the opening and the imagining one. I started out being exactly like Jerod, where I would just shoot everything down. "Oh, that can't work because of this. That can't work because of that." When I co-founded a startup, my co-founder was a big idea person, and she would always have these ideas and she got so frustrated with me for shooting them down... And what I learned is really that was counter-productive, shooting it down that early, because we as humans have different modes of our minds, and when you're in exploratory idea generation, yes, the first idea is not gonna be feasible, and the second idea probably isn't either, and if you shoot it down there, you never get to the fourth, the fifth, the sixth, the seventh, which is where magic happens and where you start to say "Oh wow, there's actually something real, and cool, and possible there."

So you kind of have to shift your mental state into "I am not in judging mode, I am in creating and imagining mode", and then just go.

**Jerod Santo:** I find that judging mode actually helps creativity mode. Maybe you have one person operating in one sense, and one in the other, in terms of actually saying "Okay, this won't work because of reasons X, Y and Z", so that forces creativity mode to say "Okay, let me adjust this factor." So it's not like a wholesale throw-it-out, it's more like "This is why there's holes in this", and then that refines.

**Kevin Ball:** So long as you're able to give the way you do "Okay, but we could do it this way and/or we could do it this way", because the concern is if you shut people down, they don't wanna keep creating. So I agree, constraints are awesome, but it needs to be directing towards a positive energy.

**Jerod Santo:** And most of the time I'm just talking about how I talk to myself, so... It's like I'm shutting myself down, or I'm refining my own thoughts, as opposed to a creative four-people-in-a-room type of situation... But yeah, I'm definitely on the same page with you there.

**Christopher Hiller:** We should train a model with successful and failed projects, and then you can type your ideas into it and it'll tell you whether or not your...

**Jerod Santo:** Oh, it's like Hot or Not, but for ideas. "Is this idea hot, or is it not?" I love how everything that we say ends with "We should train a model", and I've never trained a model in my entire, and I'm over here like "Let's just train a model."

**Suz Hinton:** I wonder if you could though feed every single startup, like the name and what went wrong, and then you can feed that feed that reasoning...

**Christopher Hiller:** \[laughs\] Just scrape Crunchbase..

**Jerod Santo:** The problem is the "What went wrong" part is very difficult to put your finger on lots of times, because there's so many things...

**Kevin Ball:** Well, it's an interesting problem, because it's gonna be tricky to identify the relevant features that you've gotta put into that. This is essentially what VC's are trying to do - they pattern-match; they look at successful and they look at failed, and they try to pattern-match to new ones... And there is an increasing amount of discussion around the fact that it is extremely flawed, because at least we as humans will fixate on a lot of features that don't happen to matter that much.

The famous one is people fixating on young white men who went to a Stanford or a Harvard or one of these places... Which turns out to be a self-fulfilling prophecy - if you give them all the money, you're gonna get all the successes out of them... And they start with a lot of money usually, so that's self fulfilling and not actually a valid feature.

So when we're thinking about how do we train our ML models here, 1) you're gonna have problems where you perpetuate existing bias... "Oh, we gave all the money to the young white men out of Stanford, so those are all our success cases, so now our model says that's who we should give money to", and we perpetuate that existing bias, which is entirely based on bad history, rather than actual value creation.

But then the other piece is when we're feeding this data in, what data do we even choose to put in there about these startups?

**Jerod Santo:** Exactly.

**Kevin Ball:** \[00:47:56.00\] Maybe those failures were due to co-founder issues, which is an extremely common source of failure, where you have folks who used to get along, and suddenly don't, and it rips the company apart. Maybe that one was caused by somebody got hurt; how do we know to put in all this seemingly extraneous data?

**Jerod Santo:** And how do you factor in the macroeconomics of the industry in which they were operating in, during the exact time that they were operating in, but this new situation now is completely different, right? I think it's hairy.

It's an interesting thing about the bias thing, because it's definitely a problem. Machine learning, as we said - you're giving them examples. Basically a machine learning model is effectively a bag of bias, right?

**Kevin Ball:** It is.

**Jerod Santo:** It's a model of bias, because it's based on the people that put the data in, right? So how do we fight against, like you said, Kevin, that problem of selecting based on history or based on our own conscious or subconscious biases in order to have high quality answers, and not just the answers that we fed it.

**Suz Hinton:** Yeah, this was discussed in a lot of the talks at ML4ALL this week, which made me so happy. I know that Paige Bailey has actually put together this guide - it's on her GitHub account; she is @DynamicWebPaige (Paige - which is amazing).

**Jerod Santo:** \[laughs\] Yes, it is.

**Suz Hinton:** It's so good. She put together a resource which has a bunch of questions that you should ask yourself before you even start going down this track... You know, "Is my data going to be biased? How can I tell if it is? Where is my data coming from? Do I have the permission to use it? What are the possible negative outcomes that can come out of this? What is even our goal in the first place?" I think that that was so cool to see that somebody has not just decided to ask these questions, but they're putting a framework together.
One saying - and I'm trying to remember who actually said it - was that some people say that machine learning/training data can be a mirror of the existing world that's out there, but some people go as far as to say it's an amplification, because if you're concentrating that data into something that can make such big decisions for you, that's amplification rather than just mirroring.

**Jerod Santo:** It's true.

**Kevin Ball:** Well, and a lot of folks give it additional weight. They say "Oh, this is impartial, because a machine did it. How could it be biased? It's a computer, it's not a person." There's a relatively famous example of that where folks started trying to use ML to guide sentencing outcomes. They trained it on historic outcomes, and they found - shockingly - that people of color were assigned larger sentences than everyone else, because historically we've had that bias in our justice system... But now suddenly it had the veneer of impartiality because it was coming from a machine.

**Christopher Hiller:** Well, maybe ML is like violence - if it doesn't work, you just add more data.

**Jerod Santo:** \[laughs\]

**Christopher Hiller:** \[00:51:01.01\] You said it's an amplification of what you choose to put in, so the more you put in, the less amplified it becomes.

**Suz Hinton:** That's gonna depend on whether or not what you're adding ends up just more and more of the same bias, I guess. I think that there's certain collections of data in the world that are just not appropriate for us to use, given that even when they're cleaned up and everything, they're just really perpetuating the same things that we're trying to use machine learning to avoid.

A lot of people wanna use machine learning because they see a machine and unbiased, but if we are directly influencing that with our own results of that, especially like very long-ranged historical data, that's when we've really gotta think twice about whether or not that was actually a good idea.

**Christopher Hiller:** That might be a good place to end.

**Suz Hinton:** Yes! It got really serious. \[laughter\]

**Jerod Santo:** Hey, do you all mind if I do a shameless plug? Not for myself, but sort of for myself.

**Suz Hinton:** Do it.

**Jerod Santo:** If you like this topic, especially around the ethics and these implications in the future of AI, we have a brand new show in the works from Changelog called Practical AI. It's with people who are deep in this space, very well-knowledged... Very well-knowledged -- that can speak much better than I can, well-versed in AI, and it's coming to you very soon... So head to Changelog.com/practicalai and subscribe. If you liked this conversation, you will love that show.

**Suz Hinton:** I am very excited! I am gonna be someone who will be very attentively tuning in. Thank you so much for letting us know about that.

**Jerod Santo:** You bet.

**Suz Hinton:** So I wanted to thank everyone for listening to the show, and we hope you enjoyed it. A special shout-out to the people who listen to us on the livestream. This has been another episode of JS Party, and we will catch you next time.
