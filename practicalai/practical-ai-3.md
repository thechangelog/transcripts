**Daniel Whitenack:** Chris, I am super excited today. I have seen a lot of amazing things in my life, but this next project that we're going to talk about is really pretty amazing. I think you probably agree with that.

**Chris Benson:** Absolutely.

**Daniel Whitenack:** We have Amanda, Peter, and Latifa with us here. Two joining from Pennsylvania, and Latifa joining from Tanzania. The first thing I'd like to do is just have you guys intro yourselves a little bit. Maybe one of you can do that for all three of you. Amanda, do you want to take that?

**Amanda Ramcharan:** Sure. Hi, everyone. My name is Amanda. I am a post-doctoral research fellow here at Penn State, and I got my Ph.D. in agricultural engineering and computer science. I work with PlantVillage to design models that diagnose plant diseases on a phone.

With me, I have Pete. Pete is a research technician for PlantVillage, and he's my right-hand guy to help us train the models and test the models. He also helps a lot with the development on TensorFlow.

And with us is Latifa. Latifa is a grad student out of Tanzania. She works with us, her field is microbiology. Right, Latifa? Did I get that right?

**Latifa Mrisho:** Not really. \[laughs\]

**Amanda Ramcharan:** No? Okay, well... That's what was in the video. So what is your degree, Latifa?

**Latifa Mrisho:** Molecular biology and biotechnology.

**Amanda Ramcharan:** Yes, okay. Latifa is a grad student in molecular biology and biotechnology, and she's been really helpful to us to test the model and how the app works out in the field with sciences, as well as extension workers for agriculture, as well as farmers.

**Daniel Whitenack:** \[00:03:56.08\] Awesome. I guess you met around this project, right? How did the project get started? Maybe just give us a little bit of an intro on what the project is and what you're trying to do.

**Amanda Ramcharan:** The foundation of PlantVillage is to make technology available to farmers... So make the latest technology available to farmers to improve food security globally. And one of the technologies right now with the highest potential is artificial intelligence and machine learning, and phones are a very prevalent technology right now across the globe, so we wanted to combine those two technologies to create tools that farmers can access to help them grow food better.

One of the major crops grown in the world is cassava. There are many diseases and pests that affect cassava and reduce the yields, so we wanted to combine AI with phones to help farmers grow cassava better.

**Chris Benson:** For those who don't know cassava, could you just mention briefly what that is? Because not everybody in the audience will be familiar with that.

**Amanda Ramcharan:** I think I'm going to ask Latifa – the cassava expert – to define cassava. I think she can do it the best.

**Latifa Mrisho:** Cassava is a root crop, just like potatoes and yams. Here we plant it to use the roots as a source of starch, which you can boil, you can fry, you can mix it up with coconut milk... But also we use the leaves, and the leaves we use it as a source of vegetables, so you can basically just boil it and put salt, and you can eat the cassava and the leaves.

But one of the other important uses of cassava is we make the starch into flour and we cook it in a way that is almost like polenta, and you can have that with any other thing, like vegetables, beef, and stew or sauces. So it's a root crop that has a high content of starch, and the leaves are used as a source of vegetables for vitamins and other micronutrients.

**Chris Benson:** It sounds really versatile then.

**Latifa Mrisho:** Yeah, it is.

**Daniel Whitenack:** And you're making me hungry. It's lunchtime here and I haven't eaten yet, and I'm craving some cassava now. So you mentioned that you want to help these farmers in the field grow cassava better... What is the range of diseases that affect this plant and how are they dealing with these diseases in the absence of the solution that you've developed around AI?

**Latifa Mrisho:** Mainly the way cassava is being grown in most of Sub-Saharan Africa where we grow it, people just grow it as a crop in the field, so it's a subsistence kind of crop – something that can grow, uproot within six months, make flour and have food. But right now, it's been commercialized and people are growing it to export and making flours for export.

The main problem with the diseases that we have -- there are a lot of diseases but the main diseases, the two viral diseases, these are caused by viruses. One is the mosaic disease, we call it cassava mosaic disease. And basically, this affects the leaves of the plants and the leaves become destroyed to a point that it does not make enough food for the plant as it should be when it's healthy. And because it destroys the leaf and the plant does not grow very well, it becomes stunted, it doesn't grow, and it doesn't produce good roots. So when people come to harvest eventually, they find out they actually don't have enough roots or no roots at all.

\[00:08:00.10\] With the other disease - it's called the brown streak disease. It's also a viral disease. This affects the leaves too, but the leaves are not destroyed. What it does, it actually destroys the roots. So when you harvest, you find roots, but when you cut the roots, they are rotten inside so they are useless. So it's either you don't have a product or you have a useless product.

At the moment, there is no viable solution other than identifying the plants that are infected and those that are healthy, so that you can plant healthy plants, or remove those infected ones so the disease does not spread. But that's where the challenge is. Some of these symptoms for these diseases are difficult to identify, so sometimes people don't know their plants are infected until when they harvest and they realize they don't have any product that is useful.

**Daniel Whitenack:** Yeah, that must be frustrating.

**Latifa Mrisho:** Yes, it is, because you can lose the whole farm, and people depend on cassava for food or to sell to get income for their livelihood.

**Chris Benson:** So, it would be pretty disastrous for the harvest to fail in that way, right?

**Latifa Mrisho:** Yes.

**Chris Benson:** So as we turn toward what you're doing with this project, what are the goals of the project and how are you finding that AI has become a useful tool for you in accomplishing this?

**Amanda Ramcharan:** So one of the main goals is to use AI to democratize access to technology. The conventional way of diagnosing these plant diseases is for someone with that expertise to go out into the field and to look at the plant and tell you what's wrong with the plant... But there are just not enough people in places like Sub-Saharan Africa to do that, so what we want to do is put that knowledge and collaborate with the scientists who have that knowledge to input that into a model in a phone, and now farmers can just download an app and then have the eyes of an expert look at their crop and tell them what's wrong.

**Chris Benson:** That is so cool.

**Daniel Whitenack:** Yeah, that's awesome. So in a sense, they're getting that expertise via the model on the phone that they just essentially would not have otherwise.

**Amanda Ramcharan:** Exactly, yes. We definitely work in collaboration with the scientists and experts to create a model like this. I think one of the sort of negative sides of AI is people always saying that, "Oh, AI is going to take our jobs", but we actually can't build these models without the human experts there to tell us what type of data to collect and how the model should perform.

**Daniel Whitenack:** Yeah, that's so true. And I definitely think this is a great example of that kind of augmentation, because you're not creating a robot farmer that does all the cassava things with AI and replaces everyone, but really you're putting expertise into the hands of the farmers in the field that's really allowing them to improve their quality of life and increase their yield, right?

**Amanda Ramcharan:** Yeah, exactly.

**Daniel Whitenack:** Awesome. I guess we can steer things a little bit more on the AI side now. I'm really interested in some of the technical things around that. First off, I imagine that there was a problem of even finding cassava data to train your models. What was the process like in terms of starting out this project and even just finding the data that you needed to train these models?

**Peter McCloskey:** \[00:11:48.17\] The data collection process actually took about two years, from the beginning of 2016 through October 2017. That was just like a mass photograph period where there was at least three trips – one before I came onto the project, my first two trips, where we just went to Tanzania with some cameras and spent anywhere between five and eight hours out in the field, just photographing leaves, coming back and sorting them out and making sure that what we thought we were photographing was what was actually there, in terms of the correct ground truth labels... Because that's one of the more difficult things too when you're dealing with any type of health or sciences, especially plant sciences. Correctly labeling the data is a really difficult process because of the different symptoms, looking differently on different varieties, and at different stages of the infection they look different, as well as having co-infections, so how you deal with that... So I would say the data collection process was probably the biggest, most intensive, hardest part of this project, because there is just no publicly available (especially) cassava data, and generally, plant disease datasets are not publicly available. So we had to build our own and then go through all of the troubleshooting and difficulties that come along with building our own dataset.

**Chris Benson:** So, a couple of follow-up questions on that. First of all, what kind of sample size did you have in terms of how big was the dataset that you used of those leaves?

**Peter McCloskey:** The dataset that we used for the final model, or that we're using now, is made up of about 2,200 images, I think. But our entire cassava dataset, I think, has somewhere between 10,000 and 15,000 images. But like I said, not all of those images are useful, because it could be incorrectly labeled or because they're just a bad style of image... So, we really only have about 2,200 or 2,500 really high-quality images that we can build a model with.

**Chris Benson:** And was it challenging...? Given the fact that it takes that expertise -- you know, this is a domain expertise that most people don't have for the labeling... Whereas in other projects – not like this – you can outsource some of that labeling, if it's something that your typical layperson could address... But I imagine that recognizing the disease state took some level of expertise. How did you approach that?

**Peter McCloskey:** So that's where IITA comes in, and they are the cassava experts for us. We in October sat down with, I think, three cassava experts and went through the dataset. When we go out and collect the data, we go out with the cassava experts and they point us to like, "Okay, this is what this virus looks like. All of these leaves are infected with this." So during the whole process of the data collection, the IITA cassava experts are there with us, making sure that we're getting the right data.

**Amanda Ramcharan:** IITA is the International Institute for Tropical Agriculture, and their East Africa office is based in Dar es Salaam, Tanzania, and that's where we met Latifa.

**Daniel Whitenack:** So in a sense, it wasn't like you guys went, just took a bunch of pictures and then shipped the pictures off to some people to identify diseased plants, but you did it on the fly in the field, saying "This is a diseased plant at this stage. I'm going to take a bunch of pictures of it, so that I know those are labeled correctly." Is that right?

**Latifa Mrisho:** Yes.

**Amanda Ramcharan:** Exactly. It's part of a bigger role of PlantVillage, to have a dataset of images of all the plant diseases of the world.

**Daniel Whitenack:** \[00:16:07.06\] Awesome. Are there other existing datasets that fit into this same category of diseased plants? I'm just not familiar enough with that field.

**Amanda Ramcharan:** There are a number of different international organizations that keep databases like this, but they're not open access.

**Daniel Whitenack:** Gotcha, okay. Is this cassava data that you're producing – is that going to be available publicly?

**Amanda Ramcharan:** That's sort of yet to be determined. We're definitely sharing it with researchers for research purposes, but whether it'll be publicly available, I'm not sure yet. We're definitely open to sharing the model and the weights on the model, because we're making the model openly available and free.

**Daniel Whitenack:** That's awesome.

**Amanda Ramcharan:** Yeah.

**Daniel Whitenack:** That's great. So even if people wanted to integrate cassava intelligence into other apps, at least that model would be out there, right?

**Amanda Ramcharan:** Exactly.

**Daniel Whitenack:** That's awesome. You guys mentioned the importance of mobile devices in this process... Could you explain a little bit more maybe why mobile devices were the target device for this work, and then maybe someone can share as well how you eventually landed on TensorFlow as the framework that would allow you to target that device?

**Amanda Ramcharan:** Mobile is emerging as the most ubiquitous platform for technology. Also, the great thing about an app is that you can run it offline and then a lot of these farms in these locations, there's no internet access. Farming is done in usually rural locations, so we had to sort of set our restrictions there for meeting the population of users that we wanted to use this technology... So that's why we chose mobile. And then what was your second question?

**Daniel Whitenack:** My second question – I definitely figured that would be the answer, as far as the access to computing devices, but also the connectivity and all of that. Given that you knew that you were targeting the mobile devices in terms of the actual – enabling the model to run on the mobile devices and all of that, what were the particular challenges and solutions that you found to those? I know maybe battery usage is a thing... I know I can run Slack and watch a couple of YouTube videos on my phone and then I have to charge it, right? So what were the particular challenges that you found with that?

**Amanda Ramcharan:** Definitely first model iterations that we did, when we took it out in the field, the phones just got so hot so fast, and then the inference times slowed down considerably, as the battery was draining... So we had to step back and think, "Okay, we need a different model design to work in these conditions." That's when we moved from classification to object detection.

With the new object detection models, the inference times stayed low, and the phones didn't heat up as fast, and the battery didn't drain as quickly. So that was a big change that we had to do. What was really nice about the object detection was you can really see how the model is working, because it draws these boxes around what it's classifying as a specific disease or problem, so in a way it's also teaching people using the app, "This is what I'm looking at and this is what this disease is."

**Daniel Whitenack:** \[00:20:08.17\] Yeah, that's super interesting. It sounds like you started out thinking, "Oh, the thing to do is just really to tell them a "disease or not" classification", but really, you found a lot of value both operationally and in terms of teaching the people more, and bringing that intelligence to them as far as just detecting objects and disease portions of plants. That's super interesting.

**Amanda Ramcharan:** Yeah, it was a win-win.

**Chris Benson:** One of the things I was curious about is you got out and did this and had to select the devices, and your computation, and memory and stuff on it. What did you run into from an inference standpoint in terms of not every mobile device can support inferences? And in terms of computationally, how did you go through the process of saying, "These mobile devices are in", or "These are not", or you selected a particular one...? How did you approach that and what were the constraints that you faced?

**Amanda Ramcharan:** Earlier this year, we went out and tested a number of different mobile devices to see how they did, and we were actually pleasantly surprised that – so the app that we have is compatible with Android 5.0 and above. There was a range of performance between the older mobile phones to the newer ones, but they weren't as wide a range as we expected. They did a pretty good job, so we further tested the app with a mid-range phone.

We did see a lot more variability with the response of the camera to how they did, but one of the variables that we're interested in is whether the app is misdiagnosing or not diagnosing at all, because if it's not diagnosing at all, that's okay, because we can design around that. But if it's misdiagnosing based on different phones, then that's a really big problem.

So then we started to get more nuanced into, "Okay, what are the metrics that we're going to use to really evaluate the app on different phones because it's not all equal and it's not going to be perfect? So what do we want to aim for?" We were aiming for more false negatives as opposed to false positives in the way the app performs. And, Pete, do you want to add to that a little bit?

**Peter McCloskey:** Yeah, just along the lines of we would like the model to be more conservative in its predictions, and instead of saying the wrong thing, it will just say, "I don't know" or "I'm not confident enough to make a diagnosis".

**Amanda Ramcharan:** Or look at more leaves.

**Peter McCloskey:** Yeah, "Can you show me another leaf that maybe has more symptoms?"

**Amanda Ramcharan:** Because when a human goes out into the field, they don't just look at one leaf and tell you your problem. They're looking at the whole plant, the whole field, and people tend to be more conservative about how they tell somebody bad news, as opposed to being like, "Well, I'm just going to tell you all the possible problems you have out there when I'm not sure", so we wanted our model to replicate being conservative.

**Chris Benson:** As you were having to go through and decide exactly what the architecture of your model would be, and you know that you are deploying it into an area where you have a lot of mobile constraints around it, both from the device itself and maybe from the environment, how did that affect the decisions you made on what architectures to go with, whether you could utilize transfer learning or not, how many layers – that kind of thing? How did the environment affect your modeling decisions?

**Amanda Ramcharan:** \[00:23:49.11\] Definitely we had to use transfer learning, because there was no way we can collect that many images to train a model from scratch with these specific disease classes. There's just not enough data out there; it will take a really long time. But then, we were really constrained to the MobileNet architecture, because the inference time is the shortest, it ran the fastest... We've also tried - and we're continuing to try - different ways to shrink other more complicated, deeper models... But we really got a good performance with the MobileNet architecture. It really worked for our test case. We didn't have to do a whole lot of extensive testing of different architectures for this specific cassava problem.

**Chris Benson:** Did you have to remove layers or anything, just given the vast number of layers in MobileNet or anything? Or were you able to just take it as is, transfer that over and then train on top of it?

**Amanda Ramcharan:** We did exactly that. We took it as is, transferred over and trained, and did transfer learning on the MobileNet model. It's vastly better than when we first started off with the Inception-V4 model to do classification. It was much more robust on a mobile device.

**Daniel Whitenack:** Yeah, that's awesome, and that's great to hear... It definitely seems to be there's more and more – there's a lot of pre-trained models out there, there's a lot of different architectures... It was pretty hard for me to go through that process of just getting an off-the-shelf model and having it perform well. But I think that is changing, especially with a lot of stuff I heard around TensorFlow estimators and other things at TensorFlow Dev Summit. I know that there's a lot of emphasis on that sort of application, which is really great to hear. Speaking of TensorFlow Dev Summit, which is where I met you guys, just to be real here – if Jeff Dean featured my project in his talk, I think I would flip out. What was that like? \[laughter\]

**Amanda Ramcharan:** Alright, full disclosure - I was like, "Wait, who's Jeff Dean? What's happening?" And then Pete's jaw just dropped. He's like, "What is wrong with you?" \[laughter\]

**Daniel Whitenack:** That's amazing! You guys are just full--

**Amanda Ramcharan:** That was just so wrong.

**Daniel Whitenack:** You're all about saving the world with AI, and Jeff Dean is just tagging along and trying to... Yeah. \[laughter\]

**Peter McCloskey:** It was actually pretty funny for me... My brother is working at Google now, and he is working in the Google brain part of it, with AI, and works several levels underneath Jeff Dean... I guess they were streaming the summit around the Google offices, and my brother was texting me like, "Oh, my God, I'm so jealous... You just got a shout-out from Jeff Dean... That's so crazy!" And then I was like, "Yeah, this is awesome!" And then we actually got to talk to Jeff for a solid 20 minutes sometime during the summit, and that was just unreal.

**Amanda Ramcharan:** Yeah, it was super validating, because we were really able to talk to him, get all geeky about the models and how the models perform, and the performance metrics, and we were able to relate a lot to the work that we're doing, because he does a lot of work with health data. So yeah, it was like, "Okay, we're on the right track."

**Daniel Whitenack:** That's awesome.

**Amanda Ramcharan:** If we can hold a conversation with Jeff Dean, great. \[laughter\]

**Daniel Whitenack:** Yeah, just like incredible stuff... And of course, we will put the link to the featured video and his talk in the show notes for everyone to see... But that's just super cool. It was so awesome to see all of you guys there. Other than featuring you and bringing some publicity around it, were you able to foster some collaboration with Google on the project?

**Amanda Ramcharan:** \[00:28:20.28\] Yeah, definitely. Some of the engineers at Google are our mentors. When we run into problems and we have different challenges, there are definitely a handful of engineers there that I reach out to to get their thoughts. They're super helpful all the time, they respond really quickly. They really like this project and like to help us out.

**Daniel Whitenack:** Yeah, that's great. I don't necessarily bring that up to advertise Google, but I think it's great that they are supporting projects like this. Like you mentioned before, there's a lot of emphasis on malicious AI and all sorts of things, but this is so awesome to see a project like this and see at least some level of support among major industry companies around this sort of thing... It's just really encouraging.

**Amanda Ramcharan:** Yeah, I definitely want to shout-out to Pete Warden. Pete Warden has been super helpful and is a really great resource to us here at PlantVillage.

**Daniel Whitenack:** Awesome.

**Amanda Ramcharan:** We really appreciate his expertise.

**Daniel Whitenack:** Yeah, awesome work. Latifa, I want to follow up with you... I was wondering if you could just describe a little bit how is the app currently being used in the field and what are the next steps to get cassava farmers all using the app? Does the app have a name? If you can share that as well...

**Latifa Mrisho:** Yes, the app is called Nuru, which is a Swahili name -- a female name; it means light. We use Nuru as a light that the farmers can use to look at their plants and their farming.

**Daniel Whitenack:** Awesome. Are people using the app now in the field, or is it in an alpha-beta version? Do people have access to it now?

**Latifa Mrisho:** No, not yet. We are sort of in a beta version. We can't get to every farmer, because not every farmer can afford a smartphone at the moment. So we start working with agriculture extension officers up to village levels who actually work with farmers. So if we get to one extension officer, we'll probably be able to get to 10-50 farmers, depending on the size of the village. Our aim is to actually get it to the extension officers. As more time goes and farmers will be able to get smartphones, then we'll be able to now get to farmers directly.

**Amanda Ramcharan:** Latifa, they recently did an experiment with testing how Nuru did compare to scientists and extension officers and farmers in a district in Tanzania... So, I don't know if, Latifa, you want to share those preliminary results... I think that was really exciting to see that.

**Latifa Mrisho:** So it's quite interesting actually, because the experts – we did a study with about ten experts, so groups of ten, and the experts, even though they're experts, their ability to identify the different diseases also varies, and many varies on how exposed they are to the symptoms, to the variety, and how long they've been working in the area. And then when you go to extension officers, the agricultural extension officers are more or less the same - if they had been exposed to these diseases, then they are more inclined to know and understand them. But those agricultural extension officers who have not been exposed to the diseases, they actually are sort of clueless.

\[00:32:21.04\] More or less, it's the same for the farmers. So having a tool that it can educate and aid the extension worker to be able to do his job and help the farmers is going to help a lot more than just helping them to identify the diseases. It's also teaching them and giving them more expertise while they are learning and using the app.

**Chris Benson:** That is super cool. I guess, as we start finishing up here, I wanted to ask all three of you to hop in... We hear so much these days in AI about people's concerns and worries and the downside of what AI may bring to humanity and to the world at large... But you guys are in the middle of doing some pretty amazing stuff - I just want to get a sense of what it feels like to know that you've been successful using AI in these contexts and how people react to that.

**Amanda Ramcharan:** Yeah, I can start... We're also surprised, like "What? It worked?" \[laughter\]

**Daniel Whitenack:** Did you think it was a long shot when you started out?

**Amanda Ramcharan:** I just didn't know and nobody else did this very specific project. A lot of the research datasets in computer vision have a thousand classes, or 80 classes, and we were really honing in on very specific classes, a very small dataset, and then putting it on to a phone and testing it on a field... So it was very much applied, and you can't get more real-world than that, and I'm like, "I don't know if it's really going to work as well as all these super high metrics that people report in the research." In the real world, it isn't as high as 90 percent accuracy, but it's still pretty good and it's still useful.

That's just great news and I think that I'm just naturally a cautious person; I'm always looking for the nuance - okay, where the model does well, that's great, but where does it not do well and where can we continue to improve? And I would like that, as we talk about AI and society and AI for good, that we start having much more new nuanced arguments than, "Oh, it's going to destroy our lives" or "Oh, it's just going to change our entire world." I think we need to just get more nuanced into how we think about technology.

**Chris Benson:** Pete or Latifa, what do you think?

**Peter McCloskey:** From my end, I think I still have a streak alive where every single person I've ever told about this project has responded with, "That's the coolest thing I've ever heard. I can't believe that you're using your skills and your resources to help these people in Africa, and not just creating cool filters for Instagram." That's been just the most rewarding thing for me, to know that what I'm doing is really meaningful and could eventually change the lives of millions of people.

I think it's really important to re-emphasize that we're building a tool that helps people be better at their jobs, and we're not building a robot to take over their jobs and do all the farming for them... We're just trying to help them produce more food and live better lives, and adapt to that.

\[00:36:00.09\] Our end goal is really to just teach farmers and spread knowledge... So they'll use our app for a couple of months, or a year, or a couple of seasons, and then hopefully they know what the disease symptoms look like and they don't need our app to show them... And so then we're educating farmers and eventually putting them off on their own, so they don't rely on us anymore and they can provide for themselves.

**Chris Benson:** That's super cool. Latifa, how about yourself?

**Latifa Mrisho:** For my side, this is quite new, particularly in Africa, where when you talk about AI technology, mobile devices, the mass are more aware of Facebook and Instagram... And when you have a tool that can be used in a positive way and has a lot of impact in people's lives, it's a plus-plus for everyone.

What Nuru is doing at the moment is helping us as researchers and scientists share our knowledge with the farmers, with the end-users, because we actually need them to see what we see. We need them to see the diseases that we see... So we are using Nuru to help us portray our knowledge into the farmers, so that they can be able to improve their farming practices using the research that has been done and has been proven.

So, when you have a tool like that, a tool that can integrate what the experts know, what the end-users need, and improve their way of life and it actually fits in the way they live their life, it's a tool that can actually work and will be able to sustain in the system, and it paves a way into other researchers using AI and the same technology to also follow this same practice to generate products that can help people... Because at the end, you might have good products but they do not fit in people's lives, and now people start getting scared that, "Oh, do you want to replace us?" But now, we are fitting that technology into people's lives, and that gives them a bit of confidence, a boost, and also comfortability in actually using the tool. So I think we are moving in the right direction and I'm so excited and looking forward to see where this can go.

**Daniel Whitenack:** That's awesome, and I am super inspired. I think I should just take that recording of what Latifa just said and make sure that everyone in the industry listens to that at least once. It's such a great and inspiring challenge and encouragement as far as the talents that we have and the way that they can make a real impact on people around the world... It's just super encouraging and inspiring.

**Chris Benson:** \[00:39:07.24\] I think that person making the Instagram filters is crying right now. \[laughter\]

**Daniel Whitenack:** Well, maybe they'll just make an Instagram filter now that detects cassava plants and labels them. \[laughter\] So the next \[unintelligible 00:39:25.06\] is the Instagram plug-in. \[laughter\]

We're kind of wrapping up, but before we jumped on the recording here, Amanda, you were talking and you were super-excited about the next steps, and really just viewing this as the beginning... Do you want to close this out by just mentioning some of the future directions that you guys are excited about, and maybe other challenges that people could get involved with as well?

**Amanda Ramcharan:** Yeah, so we're really excited about getting the app out to people, to farmers to use, to test, to give us feedback on what works and what doesn't work for them. Building an app like this is a really iterative process. We don't really expect to get it right the first time, but we really would appreciate as much feedback; the earlier we get it, the better.

We're also going to be using this technology to diagnose diseases and pests in other crops like wheat, corn... We're moving towards potatoes and other crops that we're interested in... And we're always excited to hear from people about what problem they think that this technology would be perfect for.

We're also continuing to publish our research. We're going to have a paper out soon with these results from testing the app in the field, and providing much more metrics than what's conventionally provided, to show people where the app does well and where it doesn't – again, going more towards the nuance of performance in a real-world setting. And yeah, that's about it.

**Daniel Whitenack:** Awesome. Well, we'll post some links to some of those things in our show notes. Definitely, keep up with what this team is doing. It's awesome to hear, and I just really appreciate you guys taking time to join us. It was so great to talk to you, thank you so much.

**Chris Benson:** You've really inspired us.

**Amanda Ramcharan:** Thank you. I'm always excited to talk about technology and agriculture, and my people are interested in food and farming... That makes us super happy.

**Daniel Whitenack:** Awesome. Well, thank you guys again, and I hope to keep up with what you're doing.

**Amanda Ramcharan:** Thank you.

**Chris Benson:** Thank you so much.
