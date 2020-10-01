**Daniel Whitenack:** Welcome to another episode of Practical AI. This is Daniel Whitenack. I'm a data scientist with SIL International, and I'm joined, as always, by my co-host, Chris Benson, who's a principal AI strategist at Lockheed Martin. How are you doing, Chris?

**Chris Benson:** Doing well today. How's it going, Daniel?

**Daniel Whitenack:** It's going pretty good. I've got models training and messy data to work with, so as good as any day could be, I guess.

**Chris Benson:** What more could you ask for...?

**Daniel Whitenack:** What more could you ask for... I guess in certain scenarios you might ask for interesting models, which is what we've got to talk about today. On previous episodes I know we've mentioned GANs a few times, and we've talked about some of the specifics, but not a whole show devoted to them, so we thought we'd dig into this topic a little bit more... And one of the ways that we thought we could do that was to get some experts, and that's what we've done.

We've brought in Jakub Langr and Vladimir Bok, who are the authors of the book GANs in Action. They're gonna help us parse through all things GANs, so... Welcome, Jakub and Vlad.

**Jakub Langr:** Thank you.

**Chris Benson:** Yeah, thank you for having us.

**Daniel Whitenack:** Before we begin and jump into GANs specifically, let's jump into each of your backgrounds and hear about how you ended up where you're at, so... Maybe Jakub, could you start things out?

**Jakub Langr:** Sure. I was sort of working in machine learning since about 2013. Obviously, back then GANs weren't a thing, but I sort of fell in love with the field. I was firstly curious about all the latest and greatest things going on in research, and as I was following conferences and the researchers that I really respect and admire, I came across this thing called Generative Adversarial Networks sometime in 2015, I believe.

Quite soon after, the original paper by Ian Goodfellow came out, and I just sort of fell in love with the technology and the whole idea of them. I'm sure we'll get into it later. They really made sense to me, so I was from that point on really curious, but only as a part-time hobby.

\[00:03:58.02\] Then over time things started picking up, so I started writing more blog posts about it, and then eventually Manning approached me with a book offer, so I think that was where it really started to take a more coherent form, and I started dedicating more and more time to it, to now where it's taken over all of my life. I'm working full-time with GANs, and doing these types of outreach and communication type of thing, which I think is just a testament to how far GANs as a field have gone.

It's kind of ramped up a little slowly, but now it really took over every aspect, which is great, because I really got to see the field from its inception, which is not something you see every day.

**Daniel Whitenack:** Yeah, it's been a pretty quick ride, I guess. So you're saying 2015 was around the time that Ian Goodfellow came out with a paper, and that stuff kind of started getting momentum? Is that right?

**Jakub Langr:** Yeah. I think the original paper was presented at NIPS 2014, and I think then you saw a slow trickle of papers, which eventually turned into an avalanche by 2016-2017.

**Chris Benson:** So Vlad, I was wondering if you could give us a little intro about yourself as well.

**Vladimir Bok:** Yeah, totally. I studied computer science, so machine learning was always one of my interests, both personally and professionally. After college, after a brief stint at a Y Combinator startup, where I worked as a data scientist, I joined Microsoft. Microsoft has an arm called Microsoft Research, which is essentially like an R&D division; it's effectively the Bell Labs of our time. Then I got involved with a research project where we used GANs, along with my team, and it was just fascinating to see the margin by which data generative tasks - this technique - has exceeded everything else that used to be the state of art. So it was truly this step-wise improvement that used to be rarely seen in machine learning. From there, I stayed involved with the field.

**Daniel Whitenack:** And now are you working in a practical sense, day-to-day with this technology?

**Vladimir Bok:** A little bit here and there, although I must say that when it comes to practical applications of most vast majority of machine learning and deep learning techniques, it's still very much in the supervised machine learning area and less on generative tasks. So when it comes to my day-to-day job, then GANs are almost no involvement.

**Daniel Whitenack:** Gotcha. And maybe we can get into some of those practicalities a little bit later... But to kick things off into GAN world - and I'll let you guys choose who wants to take on certain questions, but maybe one of you could just give us a brief "What makes a GAN a GAN?" How is it different than what we might think of when we think of a "normal" neural network, or a normal machine learning model, whatever that is?

**Jakub Langr:** Sure, I can give that a whirl. I think the two areas that I would highlight is that, first of all, from a very high level, GANs generally live in the unsupervised world, which Vlad alluded to already; there's this distinction between supervised and unsupervised. Most GANs exist in a world where you don't actually need any training labels, which is where the supervision comes in... Rather, most generative models learn from the data itself, so all it needs is just raw data and it manages to reconstruct it, the typical example being human faces. Just by feeding a GAN a whole bunch of human faces, it'll eventually learn to reconstruct completely novel faces that are not in the original training set. So that's idea number one, that it's unsupervised.

\[00:08:01.05\] Idea number two - the model itself effectively uses most of the time two neural networks that compete against each other, one being called the generator, one being called the discriminator. The generator is almost like an amateur painter, or something like that, and it tries to basically take some inspiration, generate a new image. And then the discriminator is like an art critic, who says "This is a good picture" or "This is not a good picture." And through the back-and-forth process they both get better over time at generating and then telling apart real from fake, so at the end you can have a generator that's pretty good at producing realistic images. That's kind of like the high-level summary. Anything to add, Vlad?

**Vladimir Bok:** Yeah, totally. I think it's a great description. I would just add some of the technical details in which GANs different from traditional neural networks. A core of it is the training procedure, where a traditional neural network is effectively an optimization; you have a very complex loss space in which you are trying to minimize some loss function, which is the objective. Essentially, there is some measure of an error, or how far the neural network is from its objective, and then the training procedure just uses calculus to minimize that objective.

With GANs, since there are two neural networks, the training process can be better described as a game, rather than an optimization, which has far-reaching implications on the training process itself and the outcome of the network.

**Daniel Whitenack:** Yeah, in this game - and maybe this is related to Jakub's discussion of being unsupervised as well - is the idea that you have these... Let's take the faces example - so you have real faces or real pictures of faces, and essentially those are kind of labeled in the sense that those are real faces, and then anything that comes out of a generator model, trying to generate real faces, or trying to generate realistic faces - those are kind of automatically labeled as fake...? So there's kind of this fact that everything you pump in is real?

**Vladimir Bok:** Yeah, absolutely. Actually, there's an active debate among researchers in classifying GANs... Because when it comes to the training process, then exactly as you alluded to, they can be seen as a supervised machine learning, because you do have implied labels in real or fake. There are also some GAN models that actually have explicit labels as well... But even with the traditional core GAN, there are implied labels.

However, when it comes to the training setup, then a more correct description is unsupervised, because there is no need for humans to painstakingly label this data. Usually, the bottleneck in machine learning is access to a large dataset with labels. GANs and the GAN paradigm helps to solve for that problem by essentially having the labels implied. There is no need for a human to go image-by-image and label which one is fake and which one isn't, because that comes from the very nature of the setup, of the GAN model.

When we look at it from a practical standpoint, then they can be seen as an unsupervised model, although when we look at the particulars of the training process, then we are measuring a distance to an explicit label... So from that standpoint, the training can be seen as supervised, in a way. So they are definitely in this grey area between supervised and unsupervised. The Google researcher François Chollet, who developed the Keras Python programming deep learning library - he refers to some techniques like this as self-supervised as well.

**Daniel Whitenack:** You mentioned that there's these two models that are involved, and it makes sense to me now what you're talking about in terms of supervised and how to think about that... I guess maybe in training each of those models, does each one still have the idea of loss, in terms of what it's trying to generate, or are they completely different? ...the training of each model individual - is it completely different, in some way?

**Jakub Langr:** \[00:12:24.20\] I'm not 100% sure that I understand the question, but obviously the two networks have different inputs... So for one of them it is the latent vector; so one of them is just kind of like some sort of random sample from somewhere between like 100 and 500 dimensional vector... And the same way that any latent space would be, for those who are familiar, it's kind of a relatively meaningless vector, though there are some qualifications to what do you mean by "meaningless" specifically in this case... But it's just a vector of random numbers, and then it uses a process to basically get to transpose convolutions or deep convolutions \[unintelligible 00:13:12.08\] through learned transformations... Something that looks like an image, ideally coming from the original data distribution. So of course, that is how you evaluate it as well.

The way that it gets the feedback is through the discriminator, which then tries to effectively, like we discussed, label images that the generator produces. And every time the generator manages to fool the discriminator, it gets a lower penalty than the discriminator, who gets penalized more because it got some wrong. So it's this iterative process, but of course, in the original formulation, like Vlad alluded to, it could be thought of as a game.

So the two networks are basically set directly against each other. It's a zero-sum game - one has to lose in order for the other one to win. But it turns out that even that works relatively well, but in practice people use more complicated loss functions that just have better numerical properties... But the original formulation kind of gave it some solid theoretical grounding, so people are more willing to accept why that works, and just use these numerical tricks to make the training more stable, or give it some other nice properties... And we can talk about some of the more advanced variants later, but that's basically what the generator is doing.

And then the discriminator is basically just a classification algorithm. You can think of it as a real or fake detector, like we discussed... So the turning process there is more natural to what most people are used to thinking.

**Chris Benson:** So I guess could we turn to maybe a couple of examples and talk a little bit about what makes GANs useful or interesting for certain tasks, and what are the range of tasks that you could use them on? And if you could maybe throw out a couple of different examples about how GANs would be implemented to solve a particular problem? ...more conceptually, to give people a sense of how to fit this concept into their thinking as they're learning this topic.

**Vladimir Bok:** Absolutely. GANs, as their name suggests, generative adversarial networks - they are well-suited to generative tasks, which is where you generate synthetic, yet realistic-looking piece of data. GANs have been particularly well-suited to generating fake imagery. So you may have seen in the media that there are fake images of human faces, that are of photorealistic quality... Or even fake videos of statements by famous people that were never made, and yet the video footage looks as if a Hollywood studio made it, but it is something that researchers were just able to produce using this technique.

\[00:16:10.23\] A great way to think about it is in contrast to what machines used to be good at, until GANs came along. Machine learning and later on deep learning is excellent at uncovering patterns in existing data, and then using that insight on supervised machine learning tasks, such as regression or classification. So for instance there have been huge advances in machines that were taking an image as an input, and then categorizing it with a correct label. So you have an image, and then the machine tells you it's a dog. Or you have another image and it tells you it's a cat.

What used to be extremely difficult until Ian Goodfellow came along with this innovation was doing the reverse of this process - essentially, taking the label "dog", feeding into a neural network and having an image of a dog being produced at the end of it. This is overly simplifying it, especially when it comes to the internal workings of it, but conceptually, essentially, instead of having a computer classifying something is having a computer create something. So philosophically, it's like a level of imagination or creativity that the machine would have.

This has been something that was extremely difficult to do, because it's extremely hard for a human to define what a realistic image of a dog is... And it's also extremely difficult to capture it mathematically. So the other generative models that came before GANs, they were usually trained by recreating the same image that it was fed; essentially, taking an image, compressing it into a representation, and then recreating the image itself, and then you can tweak the internal representation to produce a fake image that is somewhat similar to the original one.

What GANs were able to do is that the generator itself is not learning explicitly by something that the human programmer would define, or a researcher would define. There is no explicit loss function for the generator. What is happening is that we have another neural network, which is a simple classifier, which is the discriminator, that helps the generator generate something that looks realistic. So effectively, we have another model that helps us do the teaching. And what's really fascinating is that what Ian Goodfellow accomplished is taking something that machines do, which is classification - taking an image and saying it's real or fake - and using that insight to help machines achieve something that used to be very difficult for them, which is generating realistic data.

**Jakub Langr:** Maybe to just quickly add on to that, I think in terms of your original question around the application side of things, my perhaps slightly less -- I guess this is an informal podcast, so... Some researchers I know would probably object to this, but...

**Daniel Whitenack:** All is safe here.

**Jakub Langr:** Yeah, exactly. So I think it's a reasonable approximation to how to think about GANs - to think as the basically first learned general-purpose generative framework. GANs have been applied, as we discussed, in images and video, but also people might not know that they have been successfully applied in tabular and highly structured data, natural language processing, audio... I've seen papers in network theory and graph applications, obviously lots of artistic applications \[unintelligible 00:19:56.18\] that is still far from being a solved problem.

\[00:20:04.16\] So obviously, GANs have managed to replicate so much interesting data... But in terms of the business applications, they tend to be non-trivial. You need to really think where does this technique make sense. It can be extremely powerful, and unlike with classifications and decision theory and things like that, we have not had the ability to recreate realistic data for that long... So it is not always immediately obvious how to apply it in a business process, or something like that.

And the reality is that this is a technology that's literally 4-5 years old, so I think it'll take a while until there will be some sort of mass adoption... I think there's lots of interesting things in the fact that you can apply this technique in all these different domains, but the applications of how to use it sometimes will be -- I think one of the earliest practical applications I remember was in something in dentistry, \[unintelligible 00:21:08.24\] which is another area that I haven't even mentioned... Proposed a 3D mesh of the crown that they were trying to fix. So basically to create an artificial crown that would fit into the patient's mouth, and with the rest of the teeth, using GANs in the 3D space.

When I was doing research on this, I'm not sure how far it actually went, because there was a lot of -- I think in 2016-2017 there was a lot of talk about it, and people love to mention that example, but I have not seen that much follow-up, so I'm no 100% sure what happened there... But there's definitely lots of really interesting applications; you just need to think about "How do I use this strength?", rather than very obviously applying it to some sort of business process where you have like "Okay, I need to make a decision here. I'll just train that deep neural network to do that instead."

**Chris Benson:** So I've noticed over the course of the conversation that we have actually referenced Ian Goodfellow half a dozen times, and I thought it might be worthwhile to ask you guys if you could just kind of tell us who Ian Goodfellow is. Obviously, he's a pretty big deal in this industry... And with you guys working on GANs, if you'd just kind of give us a little bit of a background on who he is, what he did and why it's significant to the conversation.

**Vladimir Bok:** Yeah, so why Ian is so important is that he's the single person who invented this technique; of course, there were his colleagues that are on the paper, but when it comes to receiving the credit for generative adversarial networks, it's him. He was a Ph.D. student at the University of Montreal, where in 2014 at the end of the academic year he went out drinking with some of his friends, and they were discussing some of what I alluded to at the beginning of this dialogue, how difficult it is to have machines synthesize photorealistic imagery... Which used to be, from a research standpoint, an intractable problem.

Ian came up with the idea of the two dueling neural networks, which he then after returning home from the pub coded up. Later that year he and his colleagues published the paper that truly started this field.

And then of course the research community took it up, and there were since then huge innovations made on the original GAN model, both when it came to the complexity of the model itself, as well as its application, the use of labels during the training, both the generated discriminator, or one of those... So the field has advanced considerably in just the few short years that it has been around. But Ian, again, he is so prominent because he is credited with this invention.

**Chris Benson:** \[00:24:09.25\] Yeah, and just to note - we're often asked about learning resources... He is one of the three primary authors of the Deep Learning Textbook, which we have referenced on this show many times. And though he has worked for various organizations in the past, I believe he's currently with Apple at this point.

**Vladimir Bok:** Yes, that's correct. He was at Google, OpenAI, and now most recently he joined Apple. I'm very excited to see what he will come up with, because I'm fairly certain that the technology that is powering the emoji that you can manipulate with your face within iMessage, the underlying technology for that would be GANs. We have seen a lot of the flashy applications of creative image processing and image editing, like the applications that make you older, the FaceApp, or the applications that make you look younger, like the baby filter on Snapchat - they tend to have GANs as the underlying technology.

There are also other photo editing pieces of software that have very advanced features that are also using GANs as the underlying technology. So when it comes to creative applications, when it comes to the immediate commercial use cases, then image editing is where GANs have shined... But I think that's only scratching the surface of what will be ultimately possible, with GANs in particular, and also the research directions that this technique has opened up.

**Daniel Whitenack:** To summarize - and I'll make an attempt at this and you can tell me if it's a good summary... But to kind of summarize it, it seems like GANs, as opposed to other "normal" models that people might envision, is that there's actually two models - the generator and the discriminator - and they feed back to one another. One is trying to generate something, whatever that might be, based on some randomness, and then one is trying to differentiate between the generated version and some gold standard, or real version. Would that be a good summary?

**Vladimir Bok:** Yes. Functionally, yes.

**Daniel Whitenack:** Okay. And I was wondering, for those two models I guess I had a couple questions... But one of them is -- I'd say we take the example of the faces, or something like that; in terms of the mechanism feedback between the two - when you are generating things, you generate a whole bunch of fake faces to mix in with the real faces, and then try to discriminate with the classifier model, or retrain or update it? Or is it a sort of one-at-a-time thing, where you generate one face and then add that in? What's the balance that happens there, and the considerations you have to take into account?

**Jakub Langr:** So if I get your question correctly, I think it's about the training and how to balance the two networks' learning regime. I think you hit the nail on the head here, because that tends to be one of the most challenging aspects of GANs, is the training part... Because even though it might sometimes seem like magic, it's obviously driven by real algorithms, so to nail that dynamic can be very challenging. In my day-to-day work, or even over the course of just playing around with new research papers and their code, that tends to be one of the biggest challenges.

People have proposed literally - I don't think it's an exaggeration - hundreds of papers (maybe thousands) written on just the training dynamic alone. It's obviously quite a bit of challenge to get that exactly right. There's techniques that keep on popping up over and over again, and many of those would be covered in the book... But the field is ever-evolving. There's new things coming out.

\[00:28:09.14\] At every major conference there's at least 5 to 10 new proposals on how to improve this training dynamic. Some of them take off and start to be incorporated by more papers; others might have been good, but fade into obscurity through some pseudo-random process of academic discovery. That's my take on it.

In general, I've noticed that having a solid starting architecture, close to something that you know has worked... And look at the dataset that you're applying it to, because a lot of the academic work tends to work on fairly standard datasets. If you're applying it to something else, it tends to be very different. So you need to think about the dataset, as well as the network and the architecture... Which I think just kind of talks about one of the differences between Academia and industry, where the industry problems tend to revolve much more around the dataset, and thinking about \[unintelligible 00:29:11.01\] the data programming.

**Daniel Whitenack:** So is this part of the reason maybe why -- so Vlad mentioned when he was giving his introduction that there is still a bit of a struggle to make the transition from GANs to their application in day-to-day data science work in a widespread manner... Do you think most of that is because there is still a lot of fuzziness around the best way to approach training, or what do you think is factoring in there? What are some of the -- is that the main challenge, or are there other things preventing that?

**Jakub Langr:** I personally think that there's quite a few challenges. I think training is definitely one of them, but I think realistically, even if you look at the state of our field more broadly, not that many companies are successfully deploying deep learning models (even supervised) on a regular basis.

I think obviously the infrastructure and the support and the business thinking about the whole machine learning space is maturing, but I think generally the reasons for why GANs have generally been applied mostly as specialized startups or very specialized business units, that have someone with a lot of GAN experience, is for obviously the training difficulty... But also, having the right set of business incentives, or -- not even incentives; maybe more like intuitions around how to apply GANs successfully, I think there's a lot of really, really good applications for them...

You generally need someone who can tell you where that extra effort is worth it, because it will be somewhat challenging (because of the training dynamics and other things) to deploy it... So I think you need to have someone who can guide you through what makes sense in this situation, but also someone who can pick out the right tool for the job. Even machine learning broadly is still relatively novel, though to us it might not feel that way... And I think businesses are still trying to catch up.

**Chris Benson:** I'm curious, as we've been talking about this and we've kind of gone into some depth about how generators and discriminators work, and I'm wondering - are there other models, either other types of neural network models or other machine learning models outside the neural net space that you could use as a generator or discriminator?

**Vladimir Bok:** It's a great question. The discriminator itself, if you actually isolate it from the GAN model, then that's just a classifier in most of the incarnations of the GAN architecture. So these are two separate neural networks that can effectively function independently.

\[00:32:05.07\] When it comes to generative tasks, there have been other models that were used for that purpose. You have the \[unintelligible 00:32:10.24\] that were used for this purpose... But when it comes to image generation - and this applies to both static imagery like photos, or to video footage - then GANs are indisputably the state of the art for those types of tasks.

**Daniel Whitenack:** We've kind of gone over the basic generator-discriminator, the interplay between the two, and the specific models... I know that you talk about a few more advanced types of GANs in your book though. I guess this is a whole research area, and there's probably a lot of different types of GANs, but are there some more advanced types of GANs that are starting to filter into maybe a little bit wider-spread usage?

**Vladimir Bok:** Yeah. Jakub, do you wanna talk about CycleGAN? And I can then talk about semi-supervised paradigms.

**Jakub Langr:** Sure. Like Vlad said, I think CycleGAN is definitely one of the more prominent examples. I think when you talk specifically about the different cases and different applications, for exampleBigGAN is very popular as an artistic tool. There's a tool you can check out, made by one of my friends, Joel, who wrote Ganbreeder (Ganbreeder.app). You can create new combinations of images, and people have entire art collections just off of generative art; that have been happening for quite a few years now.

I was very surprised at how quickly GANs became popular among the artistic community. There's lots of digital artists using GANs as their primary tool of choice. So there's BigGAN, CycleGAN... And I think recently a couple of startups popped up using StyleGAN as well, as a way to generate stock images with very high-resolution faces... And a bunch more. I don't wanna steal all of the material from Vlad, so...

**Chris Benson:** I was wondering, as you all were talking about this and you were going through these different versions, if you could -- I recognize you don't wanna necessarily do a deep dive on all of them, but if you could give us a little bit of explanation with each of the titles that you just went through, so that those of us who are not as familiar with them can kind of categorize them in our own thinking, as we try to observe the material.

**Daniel Whitenack:** Yeah, I think you mentioned CycleGAN and StyleGAN...

**Chris Benson:** Yeah, I heard both of those.

**Daniel Whitenack:** Is there like a quick - we'll really test your summarization skills here - one-sentence description of each of those?

**Jakub Langr:** I think the way to think of CycleGAN on a very high level is you have two domains, and you're trying to basically always map one domain into the other... And it's very surprising how broadly that transfers. For instance, satellite images to something that looks like Google maps, or night to day. These could be different domains, and you can then have a generative framework that can translate something that is a day image into a night image and back again. So you can kind of have these two domains and you can have one generator for each translation, basically, if that makes sense...

**Chris Benson:** That does. That's a good one. I like that kind of hands-on aspect, because as I'm trying to follow what you're saying, that gives me a tangible example. Do you have something similar for the StyleGAN?

**Jakub Langr:** \[00:35:44.25\] StyleGAN - I think most of the advancement there is from the algorithmic perspective. One of the major innovations of StyleGAN - just to pick one - was the fact that you don't source from the latent space just at the beginning, but you keep adding information throughout the generative process. That means you can influence different levels of features and have a much finer level of control.

Because you keep adding sources of information and "inspiration" throughout the generative process at different layers of resolution, you can more finely tune the big, broad aspects of a face, or very tiny deals... And you have a more granular control than just the initial vector.

If you just wanna change the hair a little bit, you can do that. Or if you wanna change the whole face, or ethnicity, or gender, you can do that also, and you can have a better way of expressing what type of image you'd like to get.

**Break:** \[00:37:02.20\]

**Daniel Whitenack:** Vlad, I think maybe you had some other input as well in terms of maybe advanced or specific different kinds of GANs that people are pursuing now, in a sort of wider sense...

**Vladimir Bok:** Yeah, sure. I can talk to the conditional GAN. So in a regular GAN you have the dataset of (let's say) real images of human faces, that the generator over the course of the training iterations learns to mimic. Similar to what Jakub was mentioning about StyleGAN, there is no way in a classic GAN paradigm to control what type of image would get generated.

Once the generator gets trained on a dataset of real human faces, at any given time when you feed it a random vector - that's the latent vector that Jakub was mentioning earlier - it would spit out a face... But the researcher would have no control over whether the face is a male, or a female, or a child, let alone more fine-tuned features like a human with glasses, or somebody with long hair, or short hair, and so on.

What the conditional GAN allowed to do, which was one of the early innovations that was since then fine-tuned by the research community, was to introduce labels during the training process, which allowed the discriminator to not only recognize whether an image is real or fake, but also whether it matches the given label. In the example of human faces, it receives an image, it's told whether it's a real or a fake image, but it's also told what gender it is. So therefore for the generator to be successful at fooling the discriminator, it needs to produce images that are not only realistic looking, but also ones that match the label.

The magic of it is that once you have the generator properly-trained, you can then pass it latent space and the label that you want produced, such as "I want an image of a child", and given sufficient training dataset and given it's properly trained, it would then produce a fake example matching the label of your choice.

**Daniel Whitenack:** \[00:40:17.15\] And on the discriminator side, in that case would it just be a matter of adding a feature to the input of that classifier, that would be whatever it is - gender or ethnicity - like it was mentioned? Is that just another feature that gets factored into the discriminator?

**Vladimir Bok:** Yeah, exactly. There's different implementations how this can be done on a technical level, but broadly speaking, you're absolutely right. It's essentially training classification that isn't only binary, as in real or fake, but it is one that is taking into account also the correct label. And what's really great for the conditional GAN paradigm is that the additional information that the training process is conditioned on can be arbitrary. So it can be a description, or it can be a single label, or it can be a description.

There are also GAN models that can take in a set of tags, or even like overt description, and then produce an image that is matching the description. So you can, for instance, feed it a description saying "birds sitting on a branch", and if properly trained and given sufficient data, then the generator would produce a fake image matching the description.

Of course, our imagination can go wild, but I could see this having tremendous practical applications, especially in spaces like animation, where currently you need a lot of effort by human animators to create (let's say) characters in a game, or characters in a Pixar movie... But with GANs you can greatly optimize this creative workflow by having the trained model essentially aiding the human animator.

Or if these techniques get advanced enough, you can imagine digital worlds - be it in VR or even in a regular PC game - which self-create. So it's essentially going to be an infinite world, where characters get generated on the fly, new terrains get generated on the fly, and are going to be extremely believable without the need for input for a human animator or even programmer.

**Chris Benson:** Gotcha. I'm curious - there's so much research going on right now in GANs... It seems to have really exploded in terms of just the -- so many people in organizations are interested in this and trying to level up. What are some of the biggest open questions that are still out there, that people are trying to address right now? Where do you see the top researchers really focusing?

**Jakub Langr:** Just from my perspective - and I'm definitely keen to hear what Vlad thinks about this as well - there's the training question that we've already alluded to... And I think the other big area is these more complex datasets, that I think are only getting started. The whole audio synthesis...

I think the first papers that I remember using audio were maybe at ICLR this year, which is one of the big conferences... Maybe there was something before, but that was the first time I saw good attempts at doing that. And I think last month or two months ago DeepMind released GAN-TTS... So there's just an example of a vertical where I would expect more things to happen. So I definitely think that there's a lot of scope in these non-visual types of data... At least in research. I'm not so sure about production, in the next year, but research definitely.

\[00:44:03.03\] The third area I'll mention is just having a GAN being incorporated in some bigger process. I think a lot of the time where I've seen some of the more successful applications of GANs that have actually gotten deployed were things that -- it was a sort of supporting process, either on the training side, or some sort of post-processing side for a larger machine learning pipeline.

So I think GANs have a lot to offer if you know how to add it into your algorithms, whether that's as a domain adaptation algorithm, or just some sort of better tabular data, a generator or an anonymization tool, that sort of thing. So there's definitely a lot of scope for them to be incorporated as one of the pieces in a bigger puzzle.

**Daniel Whitenack:** Awesome. And Vlad, did you have anything to add there? I don't wanna cause any friction between the two of you, but if you disagree, or have any thoughts...? What are your thoughts here?

**Vladimir Bok:** I think GANs are great at -- there are countless research directions, and different people can get excited about the different opportunities there. For me it's primarily the ability to leverage the internal representations that the GAN model learns along the way to succeed at the generative task.

**Daniel Whitenack:** So this would be a similar idea to what people talk about in -- I guess in the NLP case we're talking about word embeddings, and things like that...

**Vladimir Bok:** Exactly.

**Daniel Whitenack:** Is it a similar idea?

**Vladimir Bok:** Yeah, precisely. Word embeddings is a perfect example. You may have heard of the simple arithmetic that we can perform on word embeddings to demonstrated that the machines or the neural networks develop a very complex internal understanding of the semantics of the human language.

For instance, you can take the embedding or the vector that describes the word "king." You can subtract - pure arithmetic - the word "man", and then you can add the word "woman", and the resulting vector is going to be very close to the vector for the word "queen". Again, we take "king", which is male royalty, you subtract the word for "man", you add "woman", and then you end up with female royalty, which is "queen". And what GANs have been demonstrated to do is that you can perform the same kind of arithmetic on images... And it's really fascinating.

When you take the example that was published in 2015 - very early on in the short history that GANs have been around - you have an image of a man with sunglasses; you subtract an image of a man, you add an image of a female, and the outcoming image is a female with sunglasses. So you can perform arithmetic, and this is completely unsupervised; this is just based on the internal representations of this extremely complex space that is images, that you can then perform (again) something intuitive as arithmetic, and then the computer, without being told what the correct answer is, would come up with an answer that a human would, based on our intuitive understanding of what \[unintelligible 00:47:21.07\] arithmetic on images should produce.

**Chris Benson:** Just as a quick interjection - would that arithmetic as you're describing it, doing that on imagery, on video... I mean, that is a deepfake, at the end of the day, just to kind of tie two terms together. Or am I wrong?

**Vladimir Bok:** Yes, it works on the same principle. I'm not sure how deepfake works. Deepfake might actually work more on the principle for CycleGAN, that Jakub was talking around previously... But deepfakes - the vast majority of them are based, in one way or another, on GAN's... And exactly - it's essentially modifying an image in a believable way, so that it looks like something else.

\[00:48:01.10\] This is also at the core of applications that I alluded to earlier, as in the FaceApp, which you take a selfie and you can immediately make yourself look older. So it's translating yourself into an older version of yourself, and things like that.

**Chris Benson:** Yeah, I can do without the older version, because that's already happening quick enough anyway, so...

**Vladimir Bok:** Yeah, exactly. Just wait a little bit, right?

**Chris Benson:** \[laughs\]

**Vladimir Bok:** But what's fascinating is that the older version is the perfect example of something where machines just cannot have the data... Because you would have to literally wait 50 years for people to get older, and have images of them, so that you can train it in a proper supervised way, as in \[unintelligible 00:48:41.21\] examples of "This is what this person looks like young, and this is what this person looks like when they are 70 years old." That's effectively impossible to get, unless you get clever, which these generative models have been extremely helpful with.

**Daniel Whitenack:** Yeah, and since Chris went there - I didn't go there; I don't wanna say anything bad about GANs... But since Chris brought up the idea of deepfakes and all that, that people are concerned about, thanks for explaining how GANs are particularly well-suited for this sort of task, because they develop this deep understanding, the deep representation of these images, and features, and different things that are important.

You know, people put a lot of focus on that deepfake stuff, and you've mentioned a bunch of other applications, but from your perspective - do you think that there are a lot of good examples, positive examples of GAN usage out there? Or are you concerned at all that the deepfake stuff -- you know, obviously, that's what gets retweeted a lot on Twitter, and blogs, and all that... Are you concerned that that's kind of overwhelming the attention around GANs, when there's a lot of good uses of them?

**Jakub Langr:** Yeah, so I would like to set a couple of things straight... This is a super-important topic, and I think it was part of the motivation why we wanted to include this short ethics section in the book... Obviously, we understand at the same time that it's not a book about ethics, right? But I also wanna highlight one thing, which is that the original deepfake algorithm, and quite a few of the more successful \[unintelligible 00:50:30.13\] There are other techniques. So I just don't wanna equate the two terms. GANs are one of the ways to do deepfakes.

In fact, there's a London-based startup that I know some of the researchers from, called Synthesia, which uses a mixture of several techniques, including GANs, as a way to reanimate faces and do a more realistic dubbing. Effectively, when you have a movie that's in English, and then you wanna port it over to the Chinese market, or the Russian market, or any other country, if you \[unintelligible 00:51:14.03\] that that's not what the people are saying... So they have kind of been applying this in the movie space to basically improve the experience for moviegoers.

I think there are obviously many positive applications even of deepfakes, but overall as a technology whether that's a net positive or net negative I don't know. What I would say though is that I think Photoshop and other \[unintelligible 00:51:44.10\] tools like After Effects have been around for at least a decade, maybe two, and realistically, when you look at where people can do a lot of damage with information, it starts already with something much simpler - things like articles, or text... The GPT-2 from OpenAI, that sort of thing.

\[00:52:11.01\] There's a lot of stuff in between, and I think it's a really important debate around "How do we wanna approach it?" Because of course, you can't uninvent any piece of technology... And even guard rails that you set around them I think are potentially problematic, because if you set those guard rails in almost any way, there will be some edge cases that will fall outside, and then you'll get use cases where people will just get fooled by something, because normally they're protected... The typical example being the platforms trying to do the policing. I think it's a very long and complicated debate about what the boundaries around that should be. So I'll leave it fairly high-level, but that's my take on it.

**Daniel Whitenack:** Yeah, I think that's a great take, and I think it gives people a lot to think about. Of course, with a lot of things with AI I think there's important ethics things to consider... But at the same time, I don't think it's worth writing off specific techniques as blacklisted or something because they could be used in a certain way.

Chris, maybe you remember, but I'm pretty sure at some point during our conversations it was brought up that GANs are -- there are quite a few really positive uses of them, in a social good sense as well, in terms of... I think there was one I saw where they were augmenting tumor imagery datasets to help actually train tumor detection algorithms... Because that data is obviously -- there's privacy concerns, but it's also fairly scarce, and hard to supervise that sort of thing. So I think that there are - and I'm sure you guys have better insight into this - a lot of positive use cases, right?

**Chris Benson:** Before you guys jump in, I remember when we talked about deepfakes some episodes back, we had a lot of people in the audience come back at us and say "Hey guys, I recognize you're being a little bit dark in that", and we had to acknowledge that, but a lot of people came back talking about good uses, and I just wanted to call that out. Sorry, Vlad... I think you were starting to talk?

**Vladimir Bok:** I was saying - absolutely; the medical space is a great example to bring up, where GAN-augmented datasets can be tremendously useful in unlocking diagnostic applications where previously there just wasn't a sufficient enough dataset.

**Daniel Whitenack:** Awesome. Well, we've had a lot of great conversation here. I know I've learned a lot... And obviously, we will link your book in our show notes, so people can find it, "GANs in Action." That, I'm sure, is a great place to start in terms of getting to know about these subjects in a lot more detail... But I was wondering also - you know, maybe to close this out - if you both have any insight into where is the best place for people to jump into this subject, in terms of maybe certain frameworks that are easier to work with GANs than others, or maybe it's certain example tutorials, or problems, or tasks that would be a good place to start and jump in and experiment and get hands-on? What are your thoughts for our listeners that are interested in that?

**Vladimir Bok:** We might be a little biased here, but... I'll let Jakub comment.

**Jakub Langr:** \[00:55:49.03\] Yeah, I'll try to provide one example for each. Obviously, keeping up to date with what's latest - I think Twitter and following the right researchers is the best way. In terms of frameworks that are easier, generally - I have not had extensive experience with TensorFlow 2.0, but I find PyTorch to be a lot easier to work with, especially for GANs, because there's a lot of complicated things that are going on, and it's easier to dive into the internals... So I generally tend to prefer PyTorch over TensorFlow these days. And I think especially with the latest improvements that Facebook's making into PyTorch, I think there's a lot of things that are picking up, especially among the research community, which is where I live right now - in the bridge between the research and industry... So PyTorch is good.

And I would say that in terms of the types of networks that are most tried and tested, I think DCGAN, CycleGAN... StyleGAN, obviously... Those would be the three basics that I think are really important to understand. But of course, it's a massive field, so I think having a comprehensive resource like our book - it could be really useful as a map to getting your head wrapped around this, because there's much more than I can say in this case... But yeah, hopefully that's good.

**Daniel Whitenack:** Awesome. That's great. I think it gives a lot of good perspective, because people will want to start poking around, and I encourage people to get the book and dig into this subject, and work on good, positive examples that can help demonstrate this technology.

We certainly thank both of you... Thank you for taking time out of your busy schedules to help us parse through this subject, which is a complicated one and there's a lot there, so I'm glad that we had you both on here to help us parse through it. I really appreciate it, and I hope we can meet sometime.

**Vladimir Bok:** Yeah, absolutely. Thank you for having us.

**Jakub Langr:** Thank you so much.
