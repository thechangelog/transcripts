**Chris Benson:** Welcome to another episode of Practical AI, where we try to make artificial intelligence practical, productive and accessible to everybody. My name is Chris Benson, I'm a principal AI strategist at Lockheed Martin, and with me today is my co-host Daniel, who's a data scientist at SIL International. How's it going today, Daniel?

**Daniel Whitenack:** It's going great, Chris. It's a beautiful fall day here in Indiana. Can't complain at all.

**Chris Benson:** Cool. As we're looking into the fall here, I'm getting excited... A couple of weeks after this episode comes out, I will be at NVIDIA GTC DC, in Washington DC.

**Daniel Whitenack:** Cool!

**Chris Benson:** If any of our listeners are there, I'll be walking around a good bit of the time, in a Practical AI T-shirt, with a jacket. If you happen to see me, I hope you'll come up and introduce yourself and say hi.

**Daniel Whitenack:** Sounds good. I can't wait to hear what you learned there and hear about some of the content that's presented. I'm sure it'll be good.

**Chris Benson:** Sounds good. We have a pretty episode lined up today. We're gonna be talking about artificial intelligence in the browser.

**Daniel Whitenack:** Ooh, exciting.

**Chris Benson:** I know. I'm pretty excited about it, and I know both of us have done over time a fair amount of web development, separate from the AI stuff, so this is the episode where we get to start combining them together, hopefully.

With us today we have Victor Dibia, and he is a research engineer at Cloudera's Fast Forward Labs. Welcome to the show, Victor.

**Victor Dibia:** Well, thanks a lot. It's really good to be here. I totally look forward to discussing machine learning in the browser.

**Chris Benson:** Fantastic. Well, if you would start off by telling us a little bit about yourself, kind of how you got into this area, and how you've found yourself arriving at Cloudera Fast Forward Labs, so that you could start this interesting line of work?

**Victor Dibia:** Sure, absolutely. I could talk about it in terms of my educational background, and then ease into the whole professional track.

**Chris Benson:** Sure, whatever works.

**Victor Dibia:** \[00:03:57.16\] My background is a mix of computer science - software engineering - and a bit of human-computer interaction, and more recently applied artificial intelligence. I have a masters degree from Carnegie Mellon University that's focused on software engineering, some management courses... And as part of that I did this thesis in building a web-based public key crypto system that was introduced by my advisor. That was a nice experience, it's just that there was a lot of time spent implementing cryptographic functions in Java. After that I felt it would be nice to move away from just the technical aspects of computer science, and also look at some of the human aspects of computer science.

Right after that, I made an interesting choice... I moved to Africa, Lagos, Nigeria to be specific, and I started a company focused on making software, focused on the African market. I did that for about a year, and as a part of that I also taught at the university in Lagos, Nigeria, through some project that was co-sponsored by MIT and Google.

At that time I figured out I'm really interesting in human aspects of computer science, and I had all this experience building software tools within the framework of a startup, and also teaching at a university... And then I decided to do a Ph.D. My Ph.D. was in information systems. I did it at the City University of Hong Kong. The main focus was quantitative user behavior studies.

At some point during my Ph.D. I had the opportunity to do an internship at IBM Research, and that's where I got into AI. So I interned with a group called the cognitive environmental lab at IBM. Most of what that group did was trying to figure out good user experiences for applied machine learning. So we spent time taking APIs built by other research groups - APIs around speech-to-text, text-to-speech and computer vision, and our goal was to use these tools and build them into interactive, in some cases \[unintelligible 00:06:20.13\] experiences.

That's where all of my interests with AI started. I started out applying models, and after a while I spent time implementing some of these models in TensorFlow and Keras, and essentially made the transition to start applying some of these custom-built models in new problem spaces.

I was at IMB Research as a post-doc, and then a research scientist, and earlier this year I joined Cloudera's Fast Forward Labs as a research scientist. It's a bit of a journey, but this is kind of how it all went down.

**Daniel Whitenack:** When you're talking about user interaction or interfacing with AI, are you mostly talking about the experiences like in Gmail, like autocomplete, or voice-to-text, or these sorts of things? Or even deeper, in terms of helping a user understand AI or use AI more effectively? How would you classify that field of the interaction between humans and AI?

**Chris Benson:** Right. My work kind of cut across the two areas that you mentioned. One specific line of work has to do with using AI to make the user interaction easier. That might be in terms of reducing the cognitive loads associated with specific tasks. Good examples of that are the kind of thing you see in Gmail autocomplete; just start typing out an email, and some LSTM model recommend a few completions.

\[00:07:59.11\] An interesting project that I worked in a similar line is something called Data to Viz. With that project we designed a neural network, a sequence model that could take user data, and based in user data it will propose about 10-15 visualizations that made sense for that sort of data. The value here is that an analyst who perhaps has limited experience with authoring visualizations or writing code for visualizations could take a tool like that, upload the data, and the model will actually generate code for about 10-15 visualizations that they could either accept or they could modify to get their task done. So that's one line of work.

Another interesting line of work at this intersection of HCI and AI has to do with tools that make AI more accessible and essentially easier to use for software engineers or other type of technical or non-technical users who strictly don't have a background in machine learning and AI.

**Daniel Whitenack:** I know some people talk about democratizing AI... Is that sort of what they're meaning, I guess?

**Victor Dibia:** Yes, that's a good umbrella term to describe that sort of work, democratizing AI. I'm always not in a hurry to use that, because that term can be reloaded and people have used it in all sorts of ways... But yeah, it's a good related term, the whole idea of democratizing AI. And it has its advantages and disadvantages, but the goal here is that if we make AI more accessible, then there are a lot of benefits that can come up. For example, we want people with various backgrounds, various interests, various domain expertise actually coming and using AI tools. That way we can increase the diversity that comes into this space.

One example of a project I worked on in that era was something called TJBot. That was while I was at IBM. It's actually a Maker Kit made out of cardboard. It's a Raspberry Pi on the inside. It's a cardboard piece that you could fold up into a humanoid-looking robot. We had actually gone ahead and written a Javascript library that made it very easy to take a bunch of IBM pre-trained machine learning models, integrate that into the bots, and essentially prototype things like \[unintelligible 00:10:23.28\] or any other AI-enabled hardware device.

That had a lot of success with schools, teachers, designers actually using it to actually start to use AI tools in different ways

**Chris Benson:** I've got a question for you... You were talking a few minutes ago on UI with Gmail, and things, and you've talked about Javascript... And I was kind of curious, to even take a step back a little for a moment and as - we're talking about the browser here... Why do you think people would want to run machine learning and AI models in the browser, versus other environments? What is it that kind of drove that interest into the browser?

**Victor Dibia:** Right. Machine learning in the browser is a fairly new area, and I guess most of the time when I talk about it, I discuss it with people... There's always a form of healthy skepticism, and I think it's for good reason. So if I'm gonna take a step back just to discuss the two interesting aspects of machine learning - there's training; this is the part where you create a model, which is essentially a function that learns mappings between your input there, and some kind of target. And essentially, you get all your data collected, you have it cleaned up, and you go through the process of learning this function that solves a specific task. That's the training phase.

\[00:11:51.02\] The second part of machine learning is inference, where at some test time you get this model that's trained, and you get it to actually perform the task. And typically, we've used languages like Python, Java, C, R, Scala or Julia. These are typically back-end languages, and they have a lot of nice functionalities like direct hardware access, multi-threading, and it makes them work really well for intensive computations like machine learning. However, typically, most of all this has been done on the back-end. There's been a class separation between what you can do in the front-end in an environment like the browser, because the browser has a bunch of limitations. It's single-threaded, and it's a sandbox environment with very limited access to system-wide features. However, it turns out that there are a few benefits that kind of made this proposition interesting. Some of my favorite reasons have to do with three specific benefits.

The first would be privacy. Perhaps this is the most compelling and interesting benefit, that I really care about. If you could take a model and you could deploy that in the browser, you could create an environment where the user data actually doesn't get down to any back-end server. I could give some examples of that somewhere down the line, as we continue the conversation.

The second interesting benefit why machine learning might be interesting in the browser has to do with the ease of distribution. A few years ago I had a couple of friends who really wanted to get into machine learning, but they did give up because they spent a couple of days just trying to install TensorFlow. So while over the last two years the user experience has become a lot better, there are still a lot of challenges, especially if you want to get a machine learning model or an application that uses machine learning deployed on an end user system. However, if you go ahead and do that in the browser, this is a much more straightforward and much easier developer and end user experience.

Then finally, the last interesting feature has to do with interactivity and latency. Off the bat, the browsers, the web is designed to be interactive, and it's really valuable for crafting rich interactive experiences. So if there are situations where you have a model and you want to easily tailor that around user data, make changes and personalize that for a user, then the browser is a really excellent environment to interactively do all of that.

These are three interesting reasons why I think it makes sense to actually explore machine learning in the browser.

**Daniel Whitenack:** Yeah, that's a great explanation. I'm wondering if along with that explanation - since we're always trying to be practical here, and like you said, there's probably a lot of listeners who are familiar with Python, or Java, or whatever it is, these sort of back-end languages, could you kind of describe the Javascript ecosystem a little bit? There's Javascript, but then there's probably things like Node.js and other things that people have heard of... Could you describe in general what those things are, and how machine learning is touching each of those? Or maybe it's specifically touching one thing, like vanilla Javascript, or whatever it is?

**Victor Dibia:** That's a great question. One way to think of what you could actually do in terms of machine learning in Javascript is to think in terms of the tools that are available today. Right now, most of that is TensorFlow.js. For listeners who are not familiar with TensorFlow.js, it's a Javascript library designed to enable machine learning in the browser and any other environment that's built with Javascript, like Node.js.

So most of my conversations around -- when I talk about essentially implementing machine learning in Javascript, most o the time I'm actually referring to implementing machine learning using the TensorFlow.js library.

\[00:16:07.15\] With regards to the environments and platforms that are supported, TensorFlow.js allows you to build, train and perform inference both in the browser environment as part of a front-end web application, and it also lets you build, train and perform inference as part of a back-end Node.js application.

The library - one way to think of it is to think of it as having a few different installation versions. There's a version that could be bundled into a web application. It could be a vanilla Javascript application where in your web page you could include a minified version of the TensorFlow.js library, or you could install it using build tools as part of a React or Vue.js application. That's for the front-end, in the browser.

Similarly, in the back-end, you could npm install TensorFlow.js and essentially for your back-end applications built with Node.js you could integrate TensorFlow models. You could also install the GPU version of that same back-end library, so it would be npm install TensorFlow GPU.

One other thing that I guess people will be interested in learning about would be around the performance of TensorFlow.js in both the back-end and the front-end. In the browser, it turns out that TensorFlow offers a vanilla CPU back-end, and also something called the WebGL back-end. This also might be familiar with the WebGL standard. It's used for accelerated graphics compute, and the value here is that if you do have a GPU available on the machine, through the WebGL standard you can actually accelerate your computations right there in the browser. So underneath TensorFlow.js in the browser will take advantage of optimizations already implemented in WebGL, and that's how it's able to accelerate computations in the browser.

**Break:** \[00:18:24.28\]

**Chris Benson:** Victor, I was kind of curious... I know that you are involved with TensorFlow.js, and have been using that, and I was really wanting to learn about what it is and how it fits into the world of regular TensorFlow, or doesn't. What's the relationship between the two?

**Victor Dibia:** TensorFlow.js is one of the libraries or frameworks in the broader TensorFlow ecosystem. The primary benefit it offers is allowing a developer to design, build, train and perform inference for machine learning models using Javascript, either in the browser on the front-end, or on the back-end in Node.js.

\[00:20:07.06\] With regards to how it plays with the rest of the TensorFlow ecosystem, I like to think of it -- the TensorFlow.js workflow is using three main approaches.

The first is what I'll describe as an online workflow. With this workflow you can structure out your machine learning models. Essentially, if you build in a convolutional neural network, you will specify input layers, or convolutional layers \[unintelligible 00:20:32.22\] all of that using TensorFlow.js. You could train your model directly in the browser, use the data, and then perform inference. There are caveats around this... You probably wanna do this with small models, or models that don't have a lot of data. So that's the first approach, something I describe as the online approach.

**Daniel Whitenack:** And in this case there's no actual data that's leaving the client devices, is that right?

**Victor Dibia:** Yes, that is correct.

**Daniel Whitenack:** And does that kind of fit into that privacy advantage that you've mentioned before?

**Victor Dibia:** Yes, absolutely. And in this case, imagine you had user data already available on their machine, and your application in the browser could get access to that data, train the model, and then perform inference without any data being sent to any back-end server. That fits in with the privacy benefits.

The second, potentially more common flow is something called the offline flow, where you could train your model using a large amount of data, and large GPU clusters or whatever hardware you have available. For this process you could use TensorFlow, Python or Keras models. So just how you train your models traditionally in TensorFlow/Python, you could go ahead and build your models, train them on your GPU or TPU clusters, and then you could export that model - that's the output of that process - and then you could give it to TensorFlow.js to then convert that into a format that can be loaded in Javascript, or in a Javascript application, and then perform it inference on that. So that's what I would refer to as the second of the offline flow.

And then finally, the hybrid flow would be super-similar to the offline flow, where you train offline, you convert your model and you import it, and then in the browser you could go ahead and fine-tune that model using user data, right in the browser.

These are three potential flows that a developer could take advantage of when using TensorFlow.js. And I guess the interesting thing to note here is that for models that you've trained using the traditional TensorFlow/Python, TensorFlow.js offers a convert software, a tool that lets you convert those pre-trained models into a format called the web format, that can be loaded in a Javascript application. So there's that opportunity, to integrate whatever work you've been doing with TensorFlow/Python, and then bring that into the Javascript web application space.

**Daniel Whitenack:** So if I'm a developer and I'm thinking about maybe like privacy is important to me, or maybe the latency issues are important to me, and I'm thinking about which of these scenarios I should pursue; whether I wanna be fully online, or offline, or the hybrid situation, like you're talking about... I guess part of that could be driven by the privacy concerns. But in terms of performance, how much data or how big of a model can you train in the online scenario, versus offline? And also, are some models - maybe the latest ones, that are like however many billions of parameters... Maybe you can't actually -- or can you optimize those, and fit them into the browser to run? What are the constraints with those things?

**Victor Dibia:** \[00:24:09.10\] Right. Experience-wise, I think most of the time people would only train low-parameter models, small models in the browser, and I guess the reason is pretty clear. The browser is not a multi-threaded, high-performance environment, and it's perhaps not designed to train large models using large datasets, thousands of images right in the browser.

So what I've typically seen people do if they were gonna train models from scratch - they would train smaller models, perhaps using tabular data, with maybe a couple thousand records, and not much more than that.

With respect to actually deploying high-performance models in the browser, I guess the good best practice would be to think of model optimization during your model construction phase, and there are a few ways to go about that. The idea is train your model offline, apply a bunch of optimizations - this could be model quantization, this could be model compression - and the goal would be to export a model that's small enough that it doesn't hinder the web or interactive experience. You will typically then import that, but merely just for inference, in the browser.

**Chris Benson:** So you've covered these different ways of using it, and how they integrate... Do you have any insight into - maybe with Fast Forward Labs clients, or anyone else you come across within the industry - about how people are typically using TensorFlow.js and how they're fitting it in real life? Kind of aside from the options that you've laid out, do you know what people are actually \[unintelligible 00:25:55.29\] on?

**Victor Dibia:** Right. There are a few interesting use cases I've seen across the community, and that have also been highlighted by the TensorFlow.js community... And I think there's a really interesting experience or application by Airbnb, where as part of their user onboarding process the user has to upload a photograph, an image of themselves, and right as part of their onboarding experience they have a TensorFlow.js model in the browser that could look through whatever image has been uploaded and could tell the user if this particular image contains sensitive content.

In some cases, users might upload their driver's license, or other types of images that have potentially sensitive content... And the value proposition here would be to tell the user "I'm able to offer you this service telling you that you have potentially privacy-sensitive information here. However, this data does not get to my server and I never see it."

**Daniel Whitenack:** Yeah, so you don't even have to worry about storing that, you're just providing a service to the user on their side.

**Victor Dibia:** Yes. I think this is a really good and strong notion of privacy. The alternative would be that companies would typically say "Oh, we have your data. We don't store it, we see it. But even if we store it, we would only use it appropriately." So I think it's a stronger notion to say "We're able to offer you a service, but we never actually see your data, because it never gets to our servers." I think that's a really interesting application for developers who have similar scenarios where having a strong notion of privacy is valuable - TensorFlow.js is a really strong candidate.

\[00:27:54.17\] Another interesting area which is part of some work I have done has been around attempting to design interactive experiences in the browser using the camera. I had this library called Handtrack.js. Essentially, it's an object-detection model that's able to run in real time. What it does is that it's able to track the location of human hands in any video frame or image frame, right there in the browser. The idea is you could use interactions like that to create more engaging experiences, like using your hand to control a game, or for artistic installations you could -rather than using the mouse to interact with that at installation, you could just have the user stand in front of the computer, and based on the feed that's coming from the camera, it could perform things like selections, touch, grab, and all of that.

And the good thing is before now, to perform this sort of engaging interactions you had to have some kind of hardware sensor, or some really complex back-end server. But now with TensorFlow.js and a well-optimized model, you could actually do all of that in the browser, with no additional hardware, and just access to the user camera. These are two interesting examples that I think are engaging. I think it's a space that's still growing.

**Daniel Whitenack:** I'm curious -- so I definitely see the advantage on the privacy side, I see the advantage on the interaction side, like you were talking about with the Handtrack.js, which I definitely wanna get into here in a second... But I was wondering, I anticipate that maybe some companies that -- like, their AI models or their machine learning models, maybe it's part of their bread and butter, and how they make money, or it's their market advantage, or something... Would it be a problem for them to push that model out to the browser, in the sense of like can users that are using one of these applications just open up a Javascript console and grab the model and use it themselves? Are there certain concerns development-wise around keeping your model in-house, or things that you should be aware of as you actually port this model out to the browser?

**Victor Dibia:** Right. Yeah, you definitely raised a concern. At the moment, your model is just like any other web assets on your web application. Just the same way the developer is responsible for securing elements like images, and videos, and every other content that's integrated into the web page, they would need to think carefully around the security of the models. So you're absolutely right, it will be possible without any specific security implementations. Beyond putting the model behind some kind of login, or restricting access based on an IP address, or any other security practice, if those are now implemented, it will be possible for the model files to be downloaded and perhaps used offline. I guess this is a concern that users should develop and should think about while they are considering putting models in the browser.

**Break:** \[00:31:25.00\]

**Chris Benson:** I'm curious, as we've talked about doing AI in the browser all this time, as we start seeing AI in the browser come about, how is that gonna change how we're interacting with web apps, now that these models are available to \[unintelligible 00:32:24.14\] or provide services to the apps that we're engaging in? And do you were talking about Handtrack.js - do you expect us to start having the ability to use gestures to control things, and to scroll, and we're getting beyond just the mouse or trackpad and the keyboard, into a more rich user experience on web apps?

**Victor Dibia:** Right. As a researcher, you trust in human-computer interaction and how AI can influence or make that space better. I definitely and totally think that AI models are well-poised to create a feature where we have a new set of interactions that are just purely enabled by AI. I think right now we have a lot of good examples, and these things work so well that now we all take them for granted. Examples like Gmail Smart Reply, Smart Compose, and then autocomplete on our phones... So I think in a similar vein I definitely see the opportunity to have gesture-based interactions based on the camera, and maybe command much better voice-based interactions, so speech, voice, computer vision, pointing, gestures... And hopefully, as these models become much smaller, better optimized, it should be just this easiest add-in, just a really light Javascript file, and getting that to run. We are still a bit far from that.

The main challenge here is mainly around the size of these models. For example, Handtrack.js, the current version, in terms of megabytes, the model itself is about 18 MB, and in web standards 500 kb is already a lot of data. So I guess this is one limitation that kind of bars from widespread adoption... But there's a lot of research that's pointing towards a future where high-performance models - we could actually find ways to compress them with very little loss of accuracy. I think that kind of research is really going to be key to getting more of these models in production, and to be integrated into a lot of web applications.

**Daniel Whitenack:** So how does this fit into the -- and this is maybe something that you're familiar with or not, but I was kind of wondering while you were talking about that, in terms of the limitations of the size of models coming down to devices... Does this fit into the whole federated training side of things, where some data is scattered between different phones, and that sort of thing? Or maybe that's totally separate from the Javascript side of things. Is the difference like, you know, in the federated sense you're utilizing data that's on people's different devices, and training a larger model, that you would still use on the back-end? ...whereas in the TensorFlow.js case you're really interested in just a single user and their data. Are you aware of how that fits into this picture?

**Victor Dibia:** \[00:35:41.22\] Right, it's definitely related. Federated learning, like you mentioned, is the whole idea where we have a federated model, and at each end user or client device we could train client models and then send some kind of model updates back to the server to have a much better or higher-performance, federated model. And the value here is that data still stays in the client devices, but just this model updates that don't compromise data privacy gets sent back to the server.

So how is TensorFlow.js connected to all of this? I guess the value here is that TensorFlow.js could be a tool that lets you implemented federated learning on a global scale. This choice is something that developers have to make, but with TensorFlow.js you could definitely construct local models on end user devices using local data... And depending on how you wanna structure your system, you could send model updates to some federated model within your server.

I think there's some experimental implementation of a federated learning model, I think on the TensorFlow.js GitHub repository. So if people are interested in exploring that more, that's a great place to start.

**Chris Benson:** I've got a follow-up question as well, as we were talking about the rise of gestures and richer interactions... I'm curious what your thoughts are now that on iPhone and other Apple devices you have \[unintelligible 00:37:18.17\] and on Android you have the Google ML Kit... Is having those available on these end devices making a substantial difference in the ability to get there faster, in terms of that richer user interface? Or are you anticipating that those are already being used heavily with TensorFlow.js, to try to get every possible processing capability out of whatever device that you're on?

**Victor Dibia:** Within the TensorFlow ecosystem there's this tool called TensorFlow Lite. I don't know if you are familiar with that...

**Chris Benson:** Yup, we are.

**Victor Dibia:** TensorFlow Lite is all about finding ways to compress or optimize models such that they run on resource-constrained environments. And there's a bit of relationship with TensorFlow.js, I guess the main difference being that TensorFlow.js is all about managing the whole machine learning experience in Javascript, while TensorFlow Lite is all about making models smaller, such that they run in resource-constrained environments.

I think there's some relationship between both, because TensorFlow.js does have some focus, so the TensorFlow.js converter has some applications in model quantization, where you could actually explore ways to make your model smaller, such that it runs faster in the browser. But I think these are slightly different efforts, and I also think their ability to have compressed models, that run well on smartphones and resource-constrained devices like the Raspberry Pi - I think research in that general area should also be impactful and useful (and transferable, I guess) to what's being done with TensorFlow.js.

**Daniel Whitenack:** Let's say that for example I know almost nothing about Javascript, which is actually the case, even though I've worked with front-end developers and developed APIs, and that sort of thing, I don't really know anything about Javascript other than an occasional hacking into something... So for someone in my position, that's maybe coming from Python, what would you recommend in terms of getting hands-on with TensorFlow.js? Is it best to start by looking at some Javascript code tutorial online and going through that, and then jumping into TensorFlow.js, or are there kind of combined tutorials or resources that would be helpful? What are your recommendations there?

**Victor Dibia:** \[00:39:52.22\] Of course, it's always valuable to get a refresher on the Javascript language. And for beginners, people who are interested in getting into TensorFlow.js, I always recommend the tutorials on the TensorFlow.js website. That's tensorflow.org/js. They have a bunch of tutorials that walk you through the APIs that are available within the library.

Just to give an overview, TensorFlow.js supports two main types of APIs. The first is a low-level, linear algebra API. So if you're interested in designing your multiplications, your additions, you wanna implement your own loss functions, this would be the API to use. I definitely do not recommend it except if you really know what you're doing.

The second API it provides is something called Layers API, which is really similar in spirit to the Keras API structure, or Keras API design. It's a really great way to reason about neural networks, so if you have used a Keras API previously using the TensorFlow.js, Layers API should be something friendly and easy. You'll find traditional building blocks like LSTMs to the convolutions, transpose layers, batch normalization layers, and essentially they are implemented just like you would implement that with Keras. To have your model built, you could compile it, and then also get your accuracy metrics, very similar to how you would do that in Keras.

So for people just interested in making the switch from regular Python, or maybe machine learning with Python, to TensorFlow.js, I would recommend looking at tutorials on the Layers API.

The other interesting thing here is that if you have models that are already built and exported using the TensorFlow saved models format, or the Keras saved models format, you can actually use the TensorFlow.js converter to convert that directly into the TensorFlow.js web model format, and then all you have to do is just spend some time learning how to load those and use that for inference in the web application.

These are the mental steps to go through. It's useful to get a refresh in Javascript, and then if you have some experience with Keras, the learning curve isn't that bad anymore. The TensorFlow.js website has a bunch of tutorials and they have really good sample code on GitHub to get started.

**Daniel Whitenack:** It sounds like the Layers thing, if I'm wanting to experiment with layers, I could fairly easily build a simple -- maybe a fully-connected neural net that would solve some kind of toy problem; let's say iris classification, or something... I could do that fairly easily with the layers and kind of get a feel for it. But then I could also take maybe a pre-trained model for image detection that's existing, and try just to do the inferencing part by using the TensorFlow converter. So those would be two things that would be reasonable to try first maybe?

**Victor Dibia:** Right, that is correct.

**Daniel Whitenack:** Cool. A lot of what you've worked on personally as related to the hand-tracking, that's related to image and video-based techniques, and I had just seen before we started recording, that you and the Fast Forward Labs team released this ConvNet Playground... And I was wondering if you could just mention what that is. That might be another great learning resource beyond TensorFlow.js, but also related, because a lot of this stuff shows image detection examples.

**Victor Dibia:** \[00:44:03.16\] Right. Yeah, thanks for that. The tool you're referring to is ConvNet Playground, and essentially it's a tool that lets you experiment and learn about how convolutional neural networks can be applied to the task of semantic image search. Within the framework of that application we have a very simple definition, where semantic search is all about giving an image, find all other images that are similar to this image, but just by looking at their content. So the implementation is really simple. We get a convolutional neural network and we use that as a feature extractor in all the images. And based on this feature extracted, we can compute and measure similarities \[unintelligible 00:44:47.02\] Essentially, this is how similarities are implemented.

However, in practice there are a bunch of decisions that a data scientist needs to make, and so what model do I use for feature extraction? If I was gonna use a pre-trained model - there are dozens of pre-trained models out there: Inception, VGG16, VGG19, and even more recently there are new architectures that are enabled by a neural architecture search like Efficient net, and NAS net, and ENAS net. So the data scientist needs to make decisions on "Which one of these pre-trained models do I use?" And even when they select an architecture, they need to also decide "Do I use the entire model, or do I use a subset of this model constructed from the original model?"

Once they've made these decisions, they finally need to decide what similarity metrics might be best for these. So we've built ConvNet Playground to create an environment where all of these decisions and all the computation for those decisions have been made, and the user can essentially interactively explain what the results look like.

So there's a search interface where we have some datasets, and you could put each image in a dataset, you could make a selection, and then view how each model performs in terms of search accuracy or search quality for that particular search query. Then we have visualizations that let you compare how the different model architectures compare, how well does the semantics for each model perform... So we have UMAP visualizations of the feature embedding space, and we have a bunch of graphs that let you perform all of these comparisons.

So I'd really encourage everyone that has a chance and wants to learn about pre-trained models to kind of explore that. There's some really interesting insights there. One common thing that data scientists do right now is that to extract features they would just select VGG16 and select its last layer, and use that as a feature extraction. It turns out that this might be inefficient. VGG16 has about 130 million parameters. But a model like EfficientNet-B2 has about five million parameters, and it actually works better than VGG16 in terms of extracted features for natural images.

These are some of the insights you could actually extract by exploring that interface... And depending on the type of your data - if you have retail data, if you have natural images - these different performances will change, and you can kind of explore the spaces on ConvNet Playground.

**Chris Benson:** Cool! Well, this has been a fascinating conversation. Thank you so much, Victor, for coming onto the show and telling us all about TensorFlow.js and these other projects. Really great conversation.

**Victor Dibia:** Thank you!

**Chris Benson:** And I guess for our listeners, we wanna remind everyone that we have a number of different communities where you can reach out to us and have a conversation. A lot of the show is built on your feedback and your comments. You can go to Changelog.com/community and opt in. If you're on LinkedIn, there's a Practical AI Podcast group that you can join. We have our Slack community which you can reach by the website, and also, because we're talking about Javascript on this episode, we wanted to point out that the Changelog also has the JS Party podcast, which is a fantastic podcast having to do with all things Javascript. You can find that at Changelog.com/jsparty.

We look forward to seeing you guys next time. Thank you very much!
