**Daniel Whitenack:** Welcome to another episode of Practical AI. I am Daniel Whitenack, a data scientist with SIL International. As always, I'm joined by my co-host, Chris Benson, a principal AI strategist at Lockheed Martin. How are you doing, Chris?

**Chris Benson:** Doing great, Daniel. How's it going today?

**Daniel Whitenack:** It is going good, and I think when listeners will be listening to this in the future, if we're to imagine into the future, you will be at the NVIDIA conference, is that right?

**Chris Benson:** That is accurate. As listeners are downloading this, I'm probably in Washington DC. I'll have just finished doing some commentary for the AlphaPilot race. For those of you who aren't familiar, we had a recent episode about AlphaPilot, which is really cool - autonomous drone racing. As of the point where you're downloading this on Tuesday, which may potentially be tomorrow for you, I will be conducting a sort of a fireside chat/panel about AlphaPilot and AI at the edge at NVIDIA's GTC DC event on Tuesday evening. So if you're listening to this and you happen to be at GTC, I hope you'll come attend, and whether you do or not, find me; I'll be there all week. Find me and let me know you're a Practical AI listener and let's connect. I can't wait to meet people there.

**Daniel Whitenack:** Yeah, that sounds great. I can't wait to hear about how it goes. Well, today -- if I think about Practical AI, Chris, and I asked you "What is the most practical of Practical AI things?", what would you say?

**Chris Benson:** \[laughs\] You already know what I'm gonna say. You're setting me up for that. It's labeling --

**Daniel Whitenack:** I'm teeing you up for the right answer.

**Chris Benson:** Oh, my god... It's labeling data, the bane of my existence over the last few years in terms of doing AI. If we can get the data labeled, then I'm finally at a happy place, where I can start doing training and have some fun.

**Daniel Whitenack:** So today is all about the data and all about labeling the data, and we're joined by Michael Malyuk, who is the CEO and founder at Heartex, and one of the contributors and maintainers of Label Studio. Welcome, Michael.

**Michael Malyuk:** Hello, hello. Thanks for inviting me.

**Daniel Whitenack:** \[00:03:59.27\] And we were able to grab Michael for an interview while he is doing his world travels. I think right now he is in Moscow, is that right?

**Michael Malyuk:** Yup.

**Daniel Whitenack:** Awesome. Well, thank you for joining us even in the midst of your jet lag.

**Michael Malyuk:** Oh, yeah...

**Daniel Whitenack:** So if you could just give us a little bit of an intro to yourself, your background, how you got involved in AI/ML things, some of the things you've done, and how you ended up with a focus on data labeling.

**Michael Malyuk:** Sure. So I got into AI -- it was a quite interesting path for me, because I have started with Lisp programming, in Common Lisp. Then at some point I got this book by Peter Norvig, who I think is right now at Google, that is called Paradigms of AI Programming." It was kind of a mixture between Common Lisp and using Common Lisp to program AI... It was quite an old book, even when I got it.

**Daniel Whitenack:** Yeah, it sounds intense.

**Michael Malyuk:** Yeah, it was like '91 or '93, something like that... But it got me really interested into the whole concept about AI and how to program AI systems. From there, I kind of started to pick up all that actually needs to be built in in production-level AI systems. I'm talking about more like math background, statistics background. Yeah, so that's what got me really interested into the whole AI concept, Common Lisp; a 50 years old programming language.

**Daniel Whitenack:** Well, my first programming language was Fortran, and I used it quite a bit. I'm glad that I left it behind, but we all have - at least some of us have those roots in older languages.

**Michael Malyuk:** Yeah. If we're talking about Common Lisp, I'm still kind of a big fan of the language. It's a pity that it's not catching up and not becoming more mainstream these days.

**Daniel Whitenack:** How common is it to find people these days working in AI or machine learning and using Common Lisp?

**Michael Malyuk:** Not common at all. Not common at all.

**Daniel Whitenack:** Not "Common" at all, to give a pun...

**Michael Malyuk:** Oh, yeah... The only one who I can actually remember is a person called \[unintelligible 00:06:23.25\] who has won a number of AI competitions. I think those were organized by Google. He wrote all his programs in Common Lisp. He was very interested to study and to explore how he would approach things.

**Daniel Whitenack:** Yeah, that's cool. So you started out there... How did you end up coming to the point where you started thinking about founding your own thing that would impact the AI community?

**Michael Malyuk:** Yeah, sure. At the time - it was about a year ago - me and my then-to-be co-founder went to this hiking trip in the high-altitude mountains, and I think the lack of oxygen contributed to us starting the company... \[laughter\]

**Daniel Whitenack:** Nice. Where was this?

**Michael Malyuk:** Himalayas.

**Chris Benson:** Oh, wow...!

**Daniel Whitenack:** Awesome!

**Michael Malyuk:** Yeah, yeah.

**Daniel Whitenack:** What was the max elevation?

**Michael Malyuk:** I think I was giving up at almost 6,000... \[laughs\]

**Daniel Whitenack:** Yeah, 6,000 meters, right?

**Michael Malyuk:** Yeah. And my co-founder went further, but the weather was really bad, so he had to turn back.

**Daniel Whitenack:** Yeah. So as co-founders, you've been through a lot together.

**Chris Benson:** I'm so jealous.

**Michael Malyuk:** Yeah. I mean, it's probably as harsh as it gets, all those conditions.

**Daniel Whitenack:** Yeah. What is VC funding and fundraising rounds, as compared to that?

**Michael Malyuk:** It's the easy trip. \[laughs\] 2,000 meters. \[laughs\]

**Daniel Whitenack:** \[00:07:53.26\] Yeah, nice. So the company is Heartex... I think we've already spoiled the punchline here, but it has to do with data labeling. So how did you get to a place where data labeling was something that you felt like you wanted to devote a lot of effort to?

**Michael Malyuk:** We were working on some algorithms in our spare time, just trying things, and by the time we decided to start a company, we all realized that at our past or current companies the biggest issue that we had to handle ourselves was the data labeling part. We were talking to multiple data scientists, machine learning experts, and they have all agreed that it's an unsolved problem, and more or less like a holy grail. If you're able to get your labels in the right moment, in the right place, then you basically end up with high-quality models.

By the time we realized that it's not only us who had these problems, but also other developers and other companies, then we decided to proceed and start the company around data labeling.

**Chris Benson:** So I for one -- you heard how I reacted to that in the very beginning, about labeling, that being kind of the bane of my existence... I for one am thanking you very much for attending to that issue. Because everybody in the data science world wants to do the sexy AI training, and such as that... And this is a problem that has needed serious attention for a long time. So as I ask you about it, I just wanted to start by saying thank you very much!

**Michael Malyuk:** \[laughs\]

**Daniel Whitenack:** It's a problem I feel has a wider impact than creating a single state of the art model and publishing a very hyped paper.

**Chris Benson:** Oh, yeah...

**Daniel Whitenack:** This is the sort of problem that has a much wider impact.

**Chris Benson:** Absolutely. So I guess if you could tell us a little bit about where does data labeling fit into the larger workflow that we're all engaged in in the AI world, and how does it relate to the AI problems that we are all working on. Daniel has been focusing on lots of stuff having to do with language stuff, and I've worked in robotics and different types of image classification stuff... So how does labeling fit into these workflows?

**Michael Malyuk:** Yeah, sure. My personal take is that data labeling and annotation is basically the core of any AI-based product... If you are building on the label data, of course. Because if you are not able to go into your datasets and relabel some things that for example might have been labeled incorrectly or inaccurately, then you just end up with models that are not working well. So my take is that data labeling is the first step that comes after collecting the data, and it's something from where everything basically begins.

I also like to think about it in way that sometimes when you get the datasets or you collect the datasets, you're not sure what's inside of it. So it's not only that you need to label it, but while you're doing the labeling, you are also kind of exploring your dataset, finding the edge cases or some examples that you have not thought about. So I think that data labeling is (or shall be) basically the core functionality of any data science team or the team that builds AI-based products.

**Daniel Whitenack:** In terms of the types of data that people generally need to label or annotate, as Chris mentioned, there's of course a lot of different types of data that are relevant to AI, and in some cases AI models might work on multiple types of data. But maybe you could just give some common types of data that people need to label or annotate, or maybe the most common ones that you run across?

**Michael Malyuk:** \[00:12:06.04\] Sure. I would say the most common ones are images, of course. So when you are placing a bounding box on the image when you are doing semantic segmentation on the image, you can also think about even classifying images as a data labeling problem. So you're basically assigning a class to the entire image; what you see on the image. Is it for example an image of a fruit, or an image of a person?

Then text... So you can be classifying text, for example, for sentiment. You can be doing named entity recognition. Audio - you can be doing speaker separation, you can be classifying audio for number of classes, so doing the multi-class classification... Those are the most common ones. Then you have, of course, time series. Now you also have 3D spaces, with all \[unintelligible 00:13:04.03\] data is coming from autonomous vehicles... And videos.

I would say these six data types are the most common ones. Inside each data type you can have different types of labeling or annotations that you can apply to this particular data type. That usually depends on what you're looking to achieve in the end... And as you have said you can also mix those.

**Daniel Whitenack:** So the type of annotation that you perform is really tied to the task or the objective that you want your model to perform, right?

**Michael Malyuk:** Yeah, totally.

**Daniel Whitenack:** If you want to pick out entities in text, which is what's done in named entity recognition - you wanna determine are there any places or people that are mentioned in this text? - then you need to have data that you have manually labeled in some sort of gold standard way to help the model figure out based on those examples what the relationship should be between input data and the output of those entities.

So there's a whole bunch of this probably infinite different types of annotations that you can come up with, because there's infinite different tasks that you might want to perform. Is that accurate?

**Michael Malyuk:** Yeah, totally. It depends on the dataset that you have at your disposal, and then it depends also on what you're looking to achieve with your model. And you're absolutely right, you are labeling the data, and then based on your labeling, the model learns the patterns and tries to indentify the same patterns from the new data that comes in. That's how you basically get a prediction from your model.

**Chris Benson:** It occurs to me that we've thrown some terms around a little bit. We've talked about labeling and annotation, and recognizing that not everybody has had a chance to do this that might be listening - what does it actually mean to annotate that data? When you're annotating or labeling data, what is it you're specifically doing? What is required to achieve that, and what is the practical benefit of going through that process?

**Michael Malyuk:** Sure. The process itself -- again, it's very dependent on the dataset and what you're trying to achieve, the problem you're trying to solve... But in general, I would describe it as basically creating some metadata for every item in your dataset. For example for an image, this metadata might be a rectangle at a certain position, with a certain class applied to this rectangle... Which is basically called bounding box labeling.

\[00:15:52.05\] To do so, you need to have the tool that enables you to put this bounding box in the right position and to assign the label, the class that you want to this bounding box. A lot actually depends on the tool, how accurately and how quickly you can do that in case your dataset is super-big, and in case you're looking for very high-quality labeling. Because in the result, the quality of your models in most cases is directly tied to how accurately your data is labeled.

**Chris Benson:** Gotcha. And one of the things that you mentioned, by the way, being bounding box, a couple of times - I just wanted to define that for a second. A bounding box, if you're looking at an image and you're trying to define the value of different parts of that image for purposes of training subsequently, then a bounding box is (really just like it sounds) a geometric shape that you're assigning to different parts of the image to define the different areas of the image that you want the model to either focus on or not focus on. I just wanted to note that.

**Break:** \[00:17:03.21\]

**Daniel Whitenack:** Okay, Michael, so let's say that I'm convinced that I need to do data labeling, and I'm convinced that I should put time into it. It is an important part of my AI workflow, and one of the most important parts, because it has this direct impact on the quality of my predictions... And let's say that I have 100,000 samples or more to label. There's obvious challenges around the time-consuming nature that it would take to label each of those 100,000 samples. Are there other challenges? I'm thinking in terms of maybe bias, or crowdsourcing this... What sorts of challenges do people face when they're labeling data, maybe other than the obvious one like the time-consuming nature of it?

**Michael Malyuk:** Oh, many. Many. \[laughs\] Time - yeah, definitely. If you have big enough datasets, millions of items, it's gonna take a lot of time to label it. Then quality. How do you verify that the results of the labeling and the actual labels are -- for example, if we're talking about bounding boxes, that the bounding boxes are in correct positions.

Biases. When different people label a dataset, you may end up with different results, so personal biases. Then even before that, you actually need to have a tool to help you do that, because datasets have different types of annotations and labeling is very different, so you have to invest time into either creating your own tool, or using something from the open source... And there are many more. I would say that two major ones are time and quality.

**Daniel Whitenack:** \[00:19:58.19\] Yeah, so quality being around the verification of the data, right?

**Michael Malyuk:** Yeah.

**Daniel Whitenack:** So if I crowdsource let's say a million parallel translations between two languages, how do I know that those were actually good translations, given that I don't already have the model? So it seems like it's a sort of chicken and egg sort of thing. How do you deal with something like that?

**Michael Malyuk:** Yeah, to add to that - that works if you can crowdsource. For example, if you are dealing with data that requires domain-specific knowledge, for example medical images, you can't crowdsource that.

**Daniel Whitenack:** Yeah, and it's expensive to hire doctors, I imagine.

**Michael Malyuk:** Yeah. Then another one - if privacy is an issue, then you also can't crowdsource that. You need to have an in-house data labeling team. So for the quality control, there are multiple ways how you can verify the results. One of them is you can label a fraction of your datasets, verify it multiple times that it was labeled correctly, and then you can train a model on top of that, and further use this model to verify the subsequent labels that are coming. Another one - you can distribute the same task to multiple annotators, and verify if they're in consensus between each other or not.

**Daniel Whitenack:** So when you're talking about bringing the model into this process - is that what people refer to as model in the loop, versus out of the loop labeling, where you actually have a model that's trained on some of your data, when you're trying to label more data, and updating that. Is that what that means?

**Michael Malyuk:** I call it more or less like automatic labeling. And here, the most important piece is "How do you pick those items in the first place?" Basically, if you have a very large dataset, how do you pick those items that you want to label first, and using those labels you kind of can build a model, but how do you pick the items?

This field is called active learning, and active learning is basically a way to pick the items from your dataset that provide you enough information about the dataset as a whole. So you're analyzing the dataset and picking exactly those items that you want to label first in order to be able to label the rest of the dataset for you.

**Chris Benson:** How are people currently approaching data labeling at this point? What are the range of techniques and the tooling that you have, that you would use for that, that you might have seen? And also, what's lacking in that at this point?

**Michael Malyuk:** I think right now there are two ways, basically. The first one is using the services, so you just send your datasets to the service company and you get back the label datasets, the results. Second one is either building your in-house team, or just using your data science team, and using the tools to help them do that. The problem with the first one, with the service company, is that you don't have control over the process. So you just get back the results and then you have to verify if the results are of good quality or not. In most cases you don't get good quality results, and then again, if you are dealing with data that requires domain-specific knowledge, usually you can't outsource that easily. And privacy is another issue.

\[00:23:43.02\] With the second one, we have found that a lot of companies are starting using some sort of open source solution just to get their data labeled, and basically build the first version of their models. And when they find out that they need to upgrade the tool and tweak the tool to their needs more and more, before it becomes this monstrous tool that you kind of don't want and you don't have resources to support anymore - at this point they're looking for something that is more production-ready and is ready to scale.

**Daniel Whitenack:** In terms of the range of things - so there's a ton of different types of models and architectures that people use for these different tasks. You've mentioned sentiment analysis, image classification... I imagine that the burden in different of these model types is heavier in terms of data labeling, and maybe -- Chris, I know you've worked in masking images for robot perception, and that sort of thing?

**Chris Benson:** Yeah, different types of CNNs.

**Daniel Whitenack:** Yeah, that's much harder than, let's say, sentiment analysis in text, where you just kind of say if it's positive or negative... As a result of that, are there types of problems or types of models that you might wanna create where there's already a lot of good data out there that's publicly-labeled, that you can use? ...like let's say for sentiment analysis, versus other problems where just due to the nature of how difficult it is to label, you're kind of stuck with doing it on your own...

**Michael Malyuk:** Yeah, for some problems, definitely. For the easier problems in most cases you can use transfer learning. You basically start with a pretrained model, and then you label just a small fraction, and you train that transfer-learning model with that data. That works pretty well. But in most cases, especially if you're getting the data from the real world, then it's not that easy to use existing models for that.

**Chris Benson:** I guess this might be a good turning point to talk about -- if you could tell us a little bit about your company and what Label Studio does, and how does the company and the product relate to each other, and what are they?

**Michael Malyuk:** Sure. The company name is Heartex, and Heartex is a data labeling platform that makes entire data science teams more productive, and helps build higher-quality, safer and smarter models as a result. We have an open source product that is called Label Studio. The difference between those is that Label Studio is just the front-end part. You get the labeling interface where you can upload your data and go item-by-item and label it, and the company's commercial offering is basically where you can also use our pretrained models to help go through the dataset faster, you can invite your whole team to collaborate on the data labeling and exploring your dataset, and we have also an extensive process for the quality control, helping you to verify that the results that you're getting are actually what you are looking for.

**Daniel Whitenack:** Yeah, so Label Studio - you can think of it as the open front-end that anyone could use. You could just get it off GitHub to help aid you in your annotation if, let's say, you wanna start from scratch. But as you mentioned, starting from scratch isn't always necessary, and isn't always practical or efficient. So the things that you mention - I see you mentioned auto-prelabeling, and native active learning... You already mentioned those things a little bit, but those are the things that augment the process. Is that right?

**Michael Malyuk:** Yeah. And what I like about the open source Label Studio - it's the first open source data labeling tool that you cannot only download and run, you can also embed it into your own pipelines.

**Daniel Whitenack:** \[00:28:00.15\] Oh, okay. So does that mean you can run it non-interactively somehow, or how would that work out in practice?

**Michael Malyuk:** In many different ways. You can use that tool to create the labels, and you can also use it to look at predictions of your model. You can embed this tool into your pipeline, and you can verify what your model predictions are. You can ask your team members, or for example domain knowledge experts to provide the labels for specific items in your dataset. So there are multiple ways how you can embed and use it. And it's really flexible in how you can define the different types of tasks it can handle.

**Chris Benson:** Could you describe some of those tasks as well, just to give us a sense of what all it can do, and what's required for input and output on this?

**Michael Malyuk:** Sure. We originally started from the idea that we as founders of the company were coming from different machine learning backgrounds. I was more concentrated on images and visual data, and my co-founders were concentrating on audio and text... So we had this idea about building a data labeling tool that is configurable. So what we have created is basically very high-level kind of components that you stick together. Think about it as you are building the web page using HTML in the same way you are building your data labeling interface. It usually takes from 5 to 25 lines of HTML-like config language, and as the result, you can get a data labeling tool that you can use to label audio, images and text right now, and we will be adding video before the end of the year.

You can do many different things. All that we have discussed, like bounding boxes, named entity - you can do all of them at the same time if you want to. It's basically dependent on the task and dependent on the dataset that you have; you can configure it like a Swiss Army knife - you can configure it and tailor it for your particular needs.

**Break:** \[00:30:21.17\]

**Daniel Whitenack:** Alright, so every once in a while on this podcast the topic intersects very nicely with a problem that I'm trying to solve in my own work, and this is one case... So in those cases, as Chris knows, I like to selfishly try to get the guest to help solve my problem on the fly. One of those problems is I have not found a tool that will let me easily label reading comprehension data. This is the case where you have a question and a passage of text, and then the output that you want is an answer that is drawn from that text; maybe a span within the article/text/something like that... And there's no tool out there - at least that I've found - that does that. So with Label Studio, could you walk me through -- let's say I came to Label Studio, and what would it take to setup that sort of interface with these Label Studio components? Would that be possible?

**Michael Malyuk:** \[00:32:12.19\] Possible, yes. I would suggest basically installing it, then looking at the templates that we provide, use the template as the starting point, and then looking at the tags that you can use for your particular problem. Based on your description I think it's very much doable.

**Daniel Whitenack:** Yeah, so because I'm a data scientist/back-end person, and I don't know that much front-end, but maybe I've hacked on HTML before - would that be something I could tackle? How much front-end experience do I need?

**Michael Malyuk:** It depends on how much you want -- if there are components that cover your use case and you right now have around 20 different components, then you need almost zero knowledge about the front-end development. If you know how to stack up the HTML as text, then you're good to go. But then while we were creating the tool, we made it extensible, in a way that you can create your own components.

For example, if we don't have right now support for the video, you can create your own components to render video, and connect it to, for example, checkboxes that you can use for classification. So in most cases we try to cover 80% of the most common cases with the companies that we develop ourselves, but then we also give you an ability to extend it for your particular needs.

**Chris Benson:** Extending that a little bit - if you're a data scientist, you're an AI developer and you're trying to integrate Label Studio into your own data pipeline and pull data out for experimentation, how does that integration go? Maybe draw an example, or something, like "You're using a notebook with TensorFlow, PyTorch etc.", and how does that look from a practical standpoint if I'm gonna sit down and use the tool?

**Michael Malyuk:** Yeah. So from the notebook example, we will be releasing a package specifically for the Python notebook, that will make it super-easy to initialize Label Studio inside the Python notebook and work with that. If you're looking to integrate it into your workflow, you would need to install the Npm package, you would just need to initialize that with the data from your dataset, and then you create a UI how to visualize this data and how to label it.

Basically, we split up the components that you have in Label Studio into two major ways - those that are used to visualize the data, and those that are used to label it. You can think about it that if you're looking at the text documents, that's visualizing text, and then if you want to put the spans on the text, doing named entity recognition, that's another tag that is doing just that action.

You're also able to load your predictions from your current models if you have those, and you can also complete labeling in different ways. For example, if you want to have multiple people look at the same text and let them label it, you'll have two different results, and then you can compare those results.

**Daniel Whitenack:** And that kind of pushing the predictions into the tool, or let's say like for my training script I wanna pull the latest annotations out... I saw you mentioned some things about maybe a REST interface, or something like that; how does that interaction work, and the plumbing between the two? Once you've got Label Studio up and running, what's the most useful way of plumbing between an annotation tool and your training and inference, in your experience?

**Michael Malyuk:** \[00:36:05.09\] Again, two ways. First one where we provide just the front-end part. It's basically Npm, a Javascript package. You initialize the package and you send the data into the package so basically there is no API, nothing. It's as simple as that. And there's the second part where we provide you with the data manager and we initialize the Label Studio front-end for you. In that case you just give Label Studio the JSON formatted file and we read the data from there.

**Daniel Whitenack:** Cool. This is still reasonably new, in that you were just in the Himalayas thinking about it a year ago... But actually, if I'm looking at the GitHub on Label Studio, it seems like there's been some activity there and there seems to be a bit of a community developing. Hae you been able to get contributions of components and start to interact with the community in that context?

**Michael Malyuk:** Yeah. The community response thus far was great, and what people like about the Label Studio is that you can basically in ten minutes build your own data labeling tool. That's one. The second one is that the UI is very simple, because you only use what you actually need for your particular data labeling needs; you only use those components, and the UI is super-simple. So there is nothing that you actually don't need in the UI. And as I have mentioned, it's the first data labeling tool that you can actually embed into your application, and you can easily extend. Right now we're getting more bug reports than contributions, so... \[laughs\] Contributions are always welcome.

**Daniel Whitenack:** You know, for some reason that doesn't surprise me.

**Michael Malyuk:** \[laughs\] Yeah.

**Chris Benson:** But it's a good thing... But it's a good thing.

**Daniel Whitenack:** Well, it can be a good thing... \[laughs\]

**Chris Benson:** It's a track to make things better. So it sounds like a pretty great endeavor. I'm really looking forward to using it myself, and I'm pretty excited about it, so it's been a great conversation, from my standpoint. I guess having brought it this far, all the way from the Himalayas, it is code that the rest of us out here can start utilizing... What do you see as some of the biggest open problems that are still out there in this data labeling space, and how do you see it being augmented in the future, either by your own team or by contributions from outside? What's next?

**Michael Malyuk:** Sure. There are many things happening right now, and a few that I want to mention... I personally think that moving forward at least some part of the data labeling is gonna be commoditized, just because the models are getting better and better, and you'll be able to reuse those models at some point; maybe not right now, but soon.

Then there's another trend with the weak supevision, that you can also use to label your dataset... So I think what's coming next is we really need to start putting a lot of thinking into quality control, because what a lot of companies that I talk to found out is that you outsource your data labeling, you get back the labels that are of very low quality, and as a result your models are failing in the real world. That's a very common concern, and it happens actually a lot.

So the quality - how do we verify that the labels are high-quality. Another one is understanding and finding edge cases in your datasets, and trying to understand how to label those. That's also very interesting, because if you have real-world datasets that consist of millions of images, there is no way you can look into each image by hand. You need some ways to automate that, and pick those items for you that needs some attention. So I would say, at least from my standpoint, we're right now concentrating on the quality control a lot.

**Daniel Whitenack:** \[00:40:17.19\] Yeah, that makes a lot of sense. It sounds like there's no shortage of things to explore there and improve upon, but it does sound like actually AI augmentation of the labeling process, especially in terms of quality control and all of those things, is gonna be really important. So if people are listening and they want to try out Label Studio, they want to follow you on this journey and as things come out, where can they find out more about Label Studio, and maybe get started and try out a few things? And also maybe what are some of the great ways that maybe people could contribute to Label Studio? ...because you are getting those bug reports, and other things... What are some of the ways that the community can give back, as well?

**Michael Malyuk:** Sure. I would say the easiest way that you can try out Label Studio right now is Npm-install label-studio. Then labelstud.io is our website... And GitHub - GitHub.com/heartexlabs/labelstudio. We have documentation there, and some quick guides how you can start very quickly; it's basically a couple lines of \[unintelligible 00:41:31.15\] and you're up and running.

With the contributions - you can open up the list of issues on GitHub, and with whatever you want to help us. We ideally are looking at the -- if people are doing some sort of labeling themselves and we haven't covered those cases yet, instead of building their own data labeling tool, they can contribute the components to Label Studio. Those contributions are very welcome, particularly in the 3D spaces, in videos... We have some work done on time series, but there is always more to be done. So yeah, those would be perfect ways.

**Daniel Whitenack:** Awesome. Well, thank you for taking some time during your travels to deep-dive with us on data labeling, and talk about a lot of these challenges and a lot of the great things you're doing with Heartex and Label Studio. We'll definitely put those links in our show notes, so people can find them... And I know I'll be coming back to my team to think about how we can get up a reading comprehension data labeling tool.

**Chris Benson:** Yeah, I was just gonna say - he's giving me hope for the future here. \[laughter\]

**Daniel Whitenack:** There is hope in the midst of data labeling.

**Michael Malyuk:** A long way to go, a long way to go...

**Daniel Whitenack:** Yeah, still long ways to go, but it's encouraging to know that people are working in this space, and also that there's kind of a modular approach where we can build up components. That's really exciting. So thank you so much for joining us. It was really great to talk to you, and I hope to run into you sometime at a conference, or somewhere.

**Michael Malyuk:** Thanks for inviting me!

**Chris Benson:** Thanks a lot.
